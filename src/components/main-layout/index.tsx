import { useState } from "react";
import { css } from "@emotion/react";

import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

import Navigation from "./Navigation";
import NavBreadcrumb from "./NavBreadcrumb";
import NavRightContent from "./NavRightContent";

const headerHeight = 48;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  const TriggerIcon = collapsed ? MenuUnfoldOutlined : MenuFoldOutlined;

  return (
    <div className="flex">
      <Navigation />

      <section
        className="flex flex-col flex-1"
        css={css`
          height: 1200px;
        `}
      >
        <header
          css={css`
            box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
            height: ${headerHeight}px;
          `}
          className="sticky top-0 z-10 flex w-full bg-white"
        >
          <div className="flex items-center mr-auto">
            <TriggerIcon
              onClick={() => setCollapsed(!collapsed)}
              className="px-4 text-lg transition-all hover:text-primary-color"
            />
            <NavBreadcrumb />
          </div>

          <NavRightContent />
        </header>
        <main className="">Main</main>
      </section>
    </div>
  );
};

export default MainLayout;
