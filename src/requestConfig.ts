import type { RequestOptions } from '@@/plugin-request/request';
import type { RequestConfig } from '@umijs/max';
import {BACKEND_HOST_LOCAL, BACKEND_HOST_PROD} from "@/constants";

// 错误处理方案： 错误类型
enum ErrorShowType {
  SILENT = 0,
  WARN_MESSAGE = 1,
  ERROR_MESSAGE = 2,
  NOTIFICATION = 3,
  REDIRECT = 9,
}
// 与后端约定的响应数据格式
interface ResponseStructure {
  success: boolean;
  data: any;
  errorCode?: number;
  errorMessage?: string;
  showType?: ErrorShowType;
}

const isDev = process.env.NODE_ENV === 'development';

/**
 * @name 错误处理
 * pro 自带的错误处理， 可以在这里做自己的改动
 * @doc https://umijs.org/docs/max/request#配置
 */
export const requestConfig: RequestConfig = {
  baseURL: isDev ? BACKEND_HOST_LOCAL : BACKEND_HOST_PROD,
  withCredentials: true,
  // 错误处理： umi@3 的错误处理方案。

  // 请求拦截器
  requestInterceptors: [
    (config: RequestOptions) => {
      // 拦截请求配置，进行个性化处理。
      // 每次请求的时候，从localstorage 中获取最新的令牌
      return config;
    },
  ],

  // 响应拦截器
  responseInterceptors: [
    (response) => {
      // 请求地址
      const requestPath : string = response.config.url ?? '';

      // 拦截响应数据，进行个性化处理
      const { data } = response as unknown as ResponseStructure;
      if (!data) {
        throw new Error('服务异常');
      }
      // 错误码处理
      const code : number = data.code;
      if (code === 40100 &&
      !requestPath.includes('user/get/login') &&
      !location.pathname.includes('/user/login')){
        // 跳转到登录页
        window.location.href = `/user/login?redirect=${window.location.href}`;
        throw new Error('请先登录');
      }

      if (code !== 0){
        throw new Error(data.message ?? '服务器异常');
      }
      return response;
    },
  ],
};
