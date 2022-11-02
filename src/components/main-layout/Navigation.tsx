import type { MenuProps } from "antd";
import type { IRoute } from "@/router/routes";

import { useMemo } from "react";
import { Layout, Image, Menu } from "antd";
import { ClassNames } from "@emotion/react";
import { isEmpty } from "lodash-es";

import { getActiveRoutes, useAuthenticatedRoutes } from "@/router";
import BiuLogo from "@/assets/biu-logo.png";
import { useLocation, useNavigate } from "react-router-dom";

const Navigation: React.FC<{
  collapsed?: boolean;
  title?: string;
}> = ({ collapsed, title }) => {
  const authRoutes = useAuthenticatedRoutes();
  const location = useLocation();
  const navigate = useNavigate();

  const relatedKeys = useMemo(
    () => getActiveRoutes(location.pathname).map((route) => route.path),
    [location.pathname],
  );

  const items: MenuProps["items"] = useMemo(() => {
    const run = (_routes: IRoute[]): MenuProps["items"] => {
      return _routes
        .filter((route) => !route.hideInMenu)
        .map((route) => ({
          children: !isEmpty(route.children) ? run(route.children!) : undefined,
          label: route.title,
          icon: route.icon,
          key: route.path,
        }));
    };
    return run(authRoutes);
  }, [authRoutes]);

  return (
    <Layout.Sider
      theme="light"
      width={208}
      collapsedWidth={60}
      collapsed={collapsed}
      className="sticky top-0 z-20 h-screen"
    >
      <ClassNames>
        {({ cx }) => (
          <div className={cx("flex items-center justify-center", collapsed ? "px-2 py-4" : "p-4")}>
            <Image alt="logo" width={31.5} height={32} src={BiuLogo} preview={false} />
            {!collapsed && <h1 className="mb-0 ml-3 text-lg text-primary-color">{title}</h1>}
          </div>
        )}
      </ClassNames>

      <Menu
        theme="light"
        mode="inline"
        items={items}
        defaultOpenKeys={!collapsed ? relatedKeys : []}
        selectedKeys={relatedKeys}
        onSelect={(selectInfo) => {
          navigate(selectInfo.key);
        }}
      />
    </Layout.Sider>
  );
};

export default Navigation;
