import type { FallbackProps } from "react-error-boundary";
import type { AxiosError } from "axios";
import type { ResultStatusType } from "antd/lib/result";

import { Result } from "antd";
import { BizError } from "@/apis/config/handler";

interface IFallbackProps extends FallbackProps {
  error: AxiosError;
  showBackButton?: boolean;
}

const FallbackComponent: React.FC<IFallbackProps> = ({
  error,
  resetErrorBoundary,
  showBackButton,
}) => {
  const serverErrors = [403, 404, 500];
  const serverStatus = (error?.response?.status ?? error.status) || 0;
  const status = (serverErrors.includes(serverStatus) ? serverStatus : "error") as ResultStatusType;

  return (
    <Result status={status} title={error instanceof BizError ? "接口错误" : "网络问题"}></Result>
  );
};

export default FallbackComponent;
