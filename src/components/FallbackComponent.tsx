import type { ResultStatusType } from "antd/lib/result";
import type { AxiosError } from "axios";
import type { FallbackProps } from "react-error-boundary";

import { BizError } from "@/apis/config/handler";
import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";

const FallbackComponent: React.ComponentType<
  FallbackProps & {
    showBackButton?: boolean;
  }
> = ({ error, resetErrorBoundary, showBackButton }) => {
  const serverErrors = [403, 404, 500];
  const { response, status } = error as AxiosError;
  const serverStatus = (response?.status ?? status) || 404;
  const resultStatus = (
    serverErrors.includes(serverStatus) ? serverStatus : "error"
  ) as ResultStatusType;

  const navigate = useNavigate();

  return (
    <Result
      status={resultStatus}
      title={error instanceof BizError ? "接口错误" : "网络问题"}
      subTitle={error instanceof BizError ? error.message : "网络出现了某些问题"}
      extra={[
        <Button key="retry" type="primary" onClick={() => resetErrorBoundary()}>
          再试一次
        </Button>,
        showBackButton && navigate.length && (
          <Button key="back" onClick={() => navigate(-1)}>
            返回上一页
          </Button>
        ),
      ].filter(Boolean)}
    />
  );
};

export default FallbackComponent;
