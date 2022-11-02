import type { ReactNode } from "react";

import { CodeSandboxOutlined, HomeOutlined } from "@ant-design/icons";
import { lazy } from "react";

import { Navigate } from "react-router-dom";

export interface IRoute {
  path: string;
  title?: string;
  icon?: ReactNode;
  children?: IRoute[];
  access?: string;
  hideInMenu?: boolean;
  exact?: boolean;
  component?: React.ComponentType<any>;
  element?: ReactNode | null;
  index?: boolean;
  caseSensitive?: boolean;
}

const routes: IRoute[] = [
  {
    path: "*",
    hideInMenu: true,
    /**
     * 重定向
     */
    element: <Navigate to={"/home"} />,
  },
  {
    path: "/home",
    title: "首页",
    icon: <HomeOutlined />,
    component: lazy(() => import("@/pages/home")),
  },
  {
    path: "/examples",
    title: "示例",
    icon: <CodeSandboxOutlined />,
    children: [
      {
        path: "/examples/one",
        title: "示例 1",
        component: lazy(() => import("@/pages/examples")),
      },
    ],
  },
];

export default routes;
