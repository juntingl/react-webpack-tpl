import { QueryErrorResetBoundary } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";

import FallbackComponent from "./FallbackComponent";

const QuerySuspense: React.FC = () => (
  <QueryErrorResetBoundary>
    {({ reset }) => (
      <ErrorBoundary onReset={reset} FallbackComponent={FallbackComponent}></ErrorBoundary>
    )}
  </QueryErrorResetBoundary>
);

export default QuerySuspense;
