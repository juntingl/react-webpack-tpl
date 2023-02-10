import type { ItemType } from "antd/lib/menu/hooks/useItems";

import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Dropdown, Space } from "antd";
import { useCallback } from "react";

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

  return (
    <Space>
      <Dropdown menu={{ items: menuItems, onClick: onMenuClick }} className="pb-2.5">
        <span className="mr-4">
          <Avatar shape="square" size="small" icon={<UserOutlined />} />
        </span>
      </Dropdown>
    </Space>
  );
};

export default NavRightContent;
