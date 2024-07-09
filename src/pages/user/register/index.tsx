import { Footer } from '@/components';
import {
  LockOutlined,
  UserOutlined,
} from '@ant-design/icons';
import {
  LoginForm, LoginFormPage,
  ProFormText,
} from '@ant-design/pro-components';
import {  message, Tabs } from 'antd';
import React, { useState } from 'react';
import Settings from '../../../../config/defaultSettings';
import {userLoginUsingPost} from "@/services/dongs-oj-service/userController";
import {Link} from "umi";
import {useEmotionCss} from "@ant-design/use-emotion-css";
// @ts-ignore
import {useModel,history,Helmet} from "@umijs/max";
import {style} from "@umijs/bundler-esbuild/dist/plugins/style";
import color from "@maplibre/maplibre-gl-style-spec/src/util/color";





const Login: React.FC = () => {
  const [type, setType] = useState<string>('account');
  const { initialState, setInitialState } = useModel('@@initialState');
  const containerClassName = useEmotionCss(() => {
    return {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      overflow: 'auto',

      backgroundSize: '100% 100%',

    };
  });

  const handleSubmit = async (values: API.UserLoginRequest) => {
    try {
      // 登录
      const res = await userLoginUsingPost({
        ...values,
      });

      const defaultLoginSuccessMessage = '登录成功！';
      message.success(defaultLoginSuccessMessage);
      // 保存已登录用户信息
      setInitialState({
        ...initialState,
        currentUser: res.data,
      });
      const urlParams = new URL(window.location.href).searchParams;
      history.push(urlParams.get('redirect') || '/')
      //history.push(urlParams.get('redirect') || '/');
      return;
    } catch (error: any) {
      const defaultLoginFailureMessage = `登录失败，${error.message}`;
      message.error(defaultLoginFailureMessage);
    }
  };







  return (
    <div className={containerClassName}>
      <Helmet>
        <title>
          {'登录'}- {Settings.title}
        </title>
      </Helmet>
      <div
        style={{flex: '1', padding: '0 0',}}
      >
        <LoginFormPage
          backgroundVideoUrl="https://gw.alipayobjects.com/v/huamei_gcee1x/afts/video/jXRBRK_VAwoAAAAAAAAAAAAAK4eUAQBr"
          // @ts-ignore
          contentStyle={{
            minWidth: 280,
            maxWidth: '75vw',

          }}

          logo={<img alt="logo" style={{ height: '100%' }} src="/logo.svg" />}
          title="Dongs 算法小站"
          subTitle={'快速练习提升你的算法能力'}
          initialValues={{
            autoLogin: true,
          }}
          onFinish={async (values) => {
            await handleSubmit(values as API.UserLoginRequest);
          }}
        >



        </LoginFormPage>

      </div>
      <Footer/>
    </div>
  );
};

export default Login;



