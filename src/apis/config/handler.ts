import { message } from "antd";
import type { AxiosRequestConfig } from "axios";

import axios from "axios";
import { host } from "./host";

export interface RequestConfig extends AxiosRequestConfig {
  showErrorMessage?: boolean;
}

export interface ResponseStructure<T = any> {
  ret: number;
  msg?: string;
  data?: T;
}

/**
 * BizError
 * A custom error class is used to represent business logic errors.
 */
export class BizError extends Error {
  ret: number;

  constructor(message: string, { ret }: { ret: number }) {
    super(message);
    this.name = "BizError";
    this.ret = ret;
  }
}

const HTTP_CODE_MAP: Partial<{ [key: string]: string }> = {
  400: "当前请求无法被服务器理解（400）",
  401: "未授权，请联系相应负责人申请权限（401）",
  403: "拒绝访问（403）",
  404: "请求资源未找到（404）",
  408: "请求超时（408）",
  500: "服务器异常（500）",
  501: "此请求方法不被服务器支持且无法被处理（501）",
  502: "无效网关（502）",
  504: "网关超时（504）",
};

export const axiosInstance = axios.create({
  baseURL: host,
  timeout: 10 * 1000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// request interceptor
axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    const { data } = response;
    const config = response.config as RequestConfig;
    const success = data.ret === 0 || data instanceof Blob;

    // Logic for handing requests on failure.
    if (!success) {
      // TODO: Verify login status logic.

      const errorMessage = data.msg || "请求失败";
      // Custom showErrorMessage request parameter used to control toast.
      if (config?.showErrorMessage ?? true) {
        message.error(errorMessage);
      }
      // Throw a business error.
      throw new BizError(errorMessage, { ret: data.ret });
    }

    return data;
  },
  (error) => {
    const { response, config } = error;
    const errorMessage = HTTP_CODE_MAP[response.status] ?? response.statusText;

    if (response.status === 401) {
      // Go to the login page.
      message.error(errorMessage);
      return;
    }
    // Custom showErrorMessage request parameter used to control toast.
    if (config?.showErrorMessage ?? true) {
      if (response && response.status) {
        message.error(HTTP_CODE_MAP[response.status] ?? response.statusText);
      } else if (error.message.includes("timeout")) {
        message.error("请求超时");
      } else {
        message.error(!window.navigator.onLine ? "网络异常" : error.message ?? "请求失败");
      }
    }

    return Promise.reject(error);
  },
);
