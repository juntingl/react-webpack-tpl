import "./global.css";

import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import MainLayout from "@/components/MainLayout";
import { Spin } from "antd";
import { RoutesComponent } from "./router";

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
