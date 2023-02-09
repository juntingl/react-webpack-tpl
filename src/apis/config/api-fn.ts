import type { RequestConfig } from "./handler";
import { axiosInstance } from "./handler";

export function request<T>(config: RequestConfig = {}): Promise<T> {
  return axiosInstance.request(config);
}

export async function GET<T>(
  url: string,
  params?: Record<string, any> | null,
  config?: RequestConfig,
) {
  return request<T>({
    url,
    params,
    method: "GET",
    ...config,
  });
}

export async function POST<T>(
  url: string,
  data?: Record<string, any> | null,
  config?: RequestConfig,
) {
  return request<T>({
    url,
    data,
    method: "POST",
    ...config,
  });
}

export async function FORM<T>(
  url: string,
  data?: Record<string, any> | FormData | null,
  config?: RequestConfig,
) {
  let formData = data;

  if (!(formData instanceof FormData)) {
    formData = new FormData();
    Object.entries(data || {}).forEach(([key, val]) => {
      if (val != null) {
        formData!.append(key, val);
      }
    });
  }

  return request<T>({
    url,
    data: formData,
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    ...config,
  });
}

export const requestFnMap = {
  GET,
  POST,
  FORM,
} as const;
