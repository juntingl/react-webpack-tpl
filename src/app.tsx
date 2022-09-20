import "global.less";

import { Button } from "antd";
import { RadarChartOutlined } from '@ant-design/icons';

import HomePage from '@/pages/HomePage';

const App = () => {
  return (
    <div>
      <h1>React App</h1>
      <main>
        <Button type="primary">按钮</Button>
        <RadarChartOutlined />
        <br />
        <HomePage />
      </main>
    </div>
  )
}

export default App;
