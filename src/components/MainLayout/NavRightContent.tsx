import type { ItemType } from "antd/lib/menu/hooks/useItems";

import { useCallback } from "react";

import { Avatar, Dropdown, Menu, Space } from "antd";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";

const NavRightContent = () => {
  const onMenuClick = useCallback((event: { key: string }) => {
    const { key } = event;
    console.log("menu Click:", key);
  }, []);

  const menuItems: ItemType[] = [
    {
      key: "center",
      icon: <UserOutlined />,
      label: "个人中心",
    },
    {
      type: "divider" as const,
    },
    {
      key: "logout",
      icon: <LogoutOutlined />,
      label: "退出登录",
    },
  ];

  const menu = <Menu items={menuItems} onClick={onMenuClick} />;

  return (
    <Space>
      <Dropdown overlay={menu} className="pb-2.5">
        <span className="mr-4">
          <Avatar shape="square" size="small" icon={<UserOutlined />} />
        </span>
      </Dropdown>
    </Space>
  );
};

export default NavRightContent;
