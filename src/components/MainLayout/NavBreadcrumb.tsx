import { Breadcrumb } from "antd";
import { Link, useLocation } from "react-router-dom";

import { getActiveRoutes } from "@/router";

const NavBreadcrumb = () => {
  const location = useLocation();

  const activeRoutes = getActiveRoutes(location.pathname);

  const breadcrumbItems = activeRoutes
    .filter((route) => route.title)
    .map((route, i) => {
      const isFirstOrLastIndex = i === activeRoutes.length - 1 || i === 0;

      return (
        <Breadcrumb.Item key={route.path}>
          {isFirstOrLastIndex ? route.title : <Link to={route.path}>{route.title}</Link>}
        </Breadcrumb.Item>
      );
    });

  return <Breadcrumb>{breadcrumbItems}</Breadcrumb>;
};

export default NavBreadcrumb;
