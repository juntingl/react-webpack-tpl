import "global.less";

import { BrowserRouter } from "react-router-dom";

import MainLayout from "@/components/main-layout";
import { RoutesComponent } from "./router";
import { Suspense } from "react";
import { Spin } from "antd";

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spin />}>
        <MainLayout>
          <RoutesComponent />
        </MainLayout>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
