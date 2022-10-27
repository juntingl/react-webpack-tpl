import "global.less";

import { Button } from "antd";
import { RadarChartOutlined } from '@ant-design/icons';

import HomePage from '@/pages/HomePage';

const App = () => {
  return (
    <div>
      <h1>React App</h1>
      <Button type="primary">按钮</Button>
      <RadarChartOutlined />
      <br />
      <HomePage />
    </div>
  )
}

export default App;
