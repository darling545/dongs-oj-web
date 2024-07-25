import React, {useRef, useState} from "react";
import {ActionType, PageContainer, ProColumns, ProTable} from "@ant-design/pro-components";
import {Progress, Space, Tag, Typography} from "antd";
import {selectQuestionVoByPageUsingPost} from "@/services/dongs-oj-service/questionController";


const QuestionView : React.FC = () => {
  // 便于自定义触发事件
  const actionRef = useRef<ActionType>();
  // 当前用户点击的数据
  const [currentRow,setCurrentRow] = useState<API.QuestionVo>();

  // 设置题目等级样式
  const levelStyles = {
    "简单" : {color: "success"},
    "中等" : {color: "warning"},
    "困难" : {color: "error"},
  }

  /**
   * 表格列配置
   */
  const columns: ProColumns<API.QuestionVo>[] = [
    /**
     *     acceptedNum?: number;
     *     createTime?: string;
     *     favourNum?: number;
     *     id?: number;
     *     judgeCase?: JudgeCase[];
     *     judgeConfig?: JudgeConfig;
     *     questionAnswer?: string;
     *     questionContent?: string;
     *     questionLevel?: string;
     *     questionTags?: string[];
     *     questionTitle?: string;
     *     submitNum?: number;
     *     thumbNum?: number;
     *     updateTime?: string;
     *     userId?: number;
     *     userVO?: UserVo;
     */
    {
      title: "id",
      dataIndex: "id",
      valueType: "text",
      // 表单中隐藏
      hideInForm: true,
      // 查询表单中隐藏
      hideInSearch: true,
    },
    {
      title: "题目",
      dataIndex: "questionTitle",
      valueType: "text",
    },
    {
      title: "等级",
      dataIndex: "questionLevel",
      render: (_,record) => {
        const levelStyle = levelStyles[record.questionLevel as string];
        return (
          <Tag color={levelStyle?.color}>
            {record.questionLevel}
          </Tag>
        )
      }
    },
    {
      title: "标签",
      dataIndex: "questionTags",
      render: (value, record) => {
        // return record ? [record.questionTags as string[]].map((item, index) => (
        //   <span key={index}>{item + ","}</span>
        // )) : null;
        const tags = record ? record.questionTags as string[] : [];
        // 用切片保证不会给最后一个元素加逗号
        return tags.map((item,index) => {
          const hasMoreTags = tags.length > 1;
          return (
            <span key={index}>{item}{(hasMoreTags && index !== tags.length - 1)?',' : ''}</span>
          )
        })
      }
    },
    {
      title: "通过率",
      dataIndex: "acceptedNum",
      valueType: "progress",
      render: (_,record) => {
        const submitNum = record.submitNum as number;
        const acceptedNum = record.acceptedNum as number;
        const acceptNum = submitNum > 0 ?
          ((acceptedNum / submitNum) * 100).toFixed(2)
          : 0.00;
        const progressProps = {
          percent: acceptNum,
          strokeColor: acceptNum >= 60 ? 'green' : acceptNum >= 40 ? 'yellow' : 'red',
          style: {width: '80%'}
        };
        return (
          <div>
            <Progress {...progressProps} />
          </div>
        )
      }
    },
    {
      title: "操作",
      dataIndex: "option",
      valueType: "option",
      render: (_,record) =>(
        <Space size="middle">
          <Typography.Link
            onClick={() => {
              setCurrentRow(record);
            }}
          >
            做题
          </Typography.Link>
        </Space>
      ),
    }
  ];

  return(
    <PageContainer>
      <ProTable
        headerTitle={'题目列表'}
        actionRef={actionRef}
        rowKey="key"
        search={{
          labelWidth: 100,
        }}
        request={async (params,sort,filter) => {
          const sortField = Object.keys(sort)?.[0];
          const sortOrder = sort?.[sortField] ?? undefined;
          const {data,code} = await selectQuestionVoByPageUsingPost({
            ...params,
            sortField,
            sortOrder,
            ...filter,
          } as API.QuestionQueryRequest);


          return {
            success: code === 0,
            data: data?.records || [],
            total: Number(data?.total) || 0,
          };
        }}
        columns={columns}
      />
    </PageContainer>
  );

};

export default QuestionView;
