import type { RouteObject } from "react-router-dom";
import type { IRoute } from "./routes";

import { useMemo } from "react";
import { Outlet, useRoutes } from "react-router-dom";
import { pick, isEmpty, zipObject } from "lodash-es";

import routes from "./routes";

/**
 * 拍平路由
 * @param _routes
 * @returns
 */
export const flattenRoutes = (_routes: IRoute[] = []): IRoute[] =>
  _routes.flatMap((route) => [route, ...flattenRoutes(route.children)]);

/**
 * 扁平化路由
 */
export const flatRoutes = flattenRoutes(routes);

/**
 * 组合路由集合对象
 * 已 path 为 key
 */
const routeMap = zipObject(
  flatRoutes.map((item) => item.path),
  flatRoutes,
);

/**
 * 获取当前路由合集
 * @param pathname url path
 * @returns
 */
export const getActiveRoutes = (pathname: string) => {
  const pathSnippets = pathname.split("/").filter(Boolean);
  const activeRoutes = pathSnippets
    .map((_, index) => routeMap[`/${pathSnippets.slice(0, index + 1).join("/")}`])
    .filter(Boolean);

  return activeRoutes;
};

/**
 * 过滤路由
 * @param filterFn 过滤条件函数
 * @returns
 */
export const filterRoutes = (filterFn: (route: IRoute) => boolean) => {
  function trimRoutes(_routes: IRoute[]): IRoute[] {
    return _routes
      .filter((route) => filterFn(route))
      .map((route) => ({
        // 对子路由再次过滤
        ...route,
        children: route.children ? trimRoutes(route.children) : undefined,
      }));
  }

  return trimRoutes(routes);
};

/**
 * 路由鉴权
 */
export const useAuthenticatedRoutes = () => {
  const conditionalFn = (route: IRoute) => {
    const access = route.access || "";
    return true;
  };
  return filterRoutes(conditionalFn);
};

export function RoutesComponent() {
  const computedRoutes = useMemo(() => {
    function run(_routes: IRoute[] = []): RouteObject[] {
      return _routes.map((route) => {
        let { element } = route;

        if (!element) {
          if (route.component) {
            const Comp = route.component;
            element = <Comp />;
          } else {
            element = <Outlet />;
          }
        }

        /**
         * index 和 children 两者不能同时出现
         * https://github.com/remix-run/react-router/pull/9343
         */
        return !route.index
          ? {
              ...pick(route, ["path", "caseSensitive"]),
              children: !isEmpty(route.children) ? run(route.children) : undefined,
              element,
            }
          : {
              ...pick(route, ["path", "index", "caseSensitive"]),
              element,
            };
      });
    }
    return run(routes);
  }, [routes]);

  const element = useRoutes(computedRoutes);
  return element;
}
