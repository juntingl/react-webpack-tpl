import { Layout, Image } from "antd";

import { ClassNames, css } from "@emotion/react";

import BiuLogo from "@/assets/biu-logo.png";

const Navigation: React.FC<{
  collapsed?: boolean;
  title?: string;
}> = ({ collapsed, title }) => {
  return (
    <Layout.Sider
      width={208}
      theme="light"
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
    </Layout.Sider>
  );
};

export default Navigation;
