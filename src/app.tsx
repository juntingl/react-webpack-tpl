import "./global.css";

import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import { Spin } from "antd";
import MainLayout from "@/components/MainLayout";
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
