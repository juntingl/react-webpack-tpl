import "global.less";

import { Button } from "antd";
import { RadarChartOutlined } from '@ant-design/icons';

import HomePage from '@/pages/HomePage';
import CLogPage from "./pages/CLogPage";

const App = () => {
  return (
    <div>
      <h1>React App</h1>
        <HomePage />
        {/* <CLogPage></CLogPage> */}
    </div>
  )
}

export default App;
