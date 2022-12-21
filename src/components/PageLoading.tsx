import type { SpinProps } from "antd";
import { Spin } from "antd";

const PageLoading: React.FC<SpinProps> = ({ ...props }) => {
  return (
    <div
      style={{
        textAlign: "center",
        paddingTop: 100,
        position: "sticky",
        top: 0,
      }}
    >
      <Spin size="large" {...props} />
    </div>
  );
};

export default PageLoading;
