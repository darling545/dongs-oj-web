import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import React from 'react';
import padding from "@maplibre/maplibre-gl-style-spec/src/util/padding";

const Footer: React.FC = () => {
  return (
    <DefaultFooter
      style={{
        background: 'none',
        height: '12vh',
        margin:"0"
      }}
      copyright="Powered by Ant Desgin"
      links={[
        {
          key: 'Ant Design Pro',
          title: 'Ant Design Pro',
          href: 'https://pro.ant.design',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/ant-design/ant-design-pro',
          blankTarget: true,
        },
        {
          key: 'Ant Design',
          title: 'Ant Design',
          href: 'https://ant.design',
          blankTarget: true,
        },
      ]}
    />
  );
};
<style>
  .css-dev-only-do-not-override-m4timi{
  {
    margin:'10px'
  }
}
</style>


export default Footer;
