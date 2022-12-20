import { getEnv } from "./helper";

export type Env = "dev" | "stg" | "pre" | "prod";

const hostMap: Readonly<{ [key in Env]: string }> = {
  dev: "",
  stg: "",
  pre: "",
  prod: "",
};

// 获取环境标识
export const env = getEnv() as Env;
export const host = hostMap[env];
