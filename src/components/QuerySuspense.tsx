import { QueryErrorResetBoundary } from "@tanstack/react-query";
import type { ReactNode, SuspenseProps } from "react";
import { Suspense, lazy } from "react";
import type { ErrorBoundaryProps } from "react-error-boundary";
import { ErrorBoundary } from "react-error-boundary";

import FallbackComponent from "./FallbackComponent";
import PageLoading from "./PageLoading";

export type QuerySuspenseProps = Partial<ErrorBoundaryProps> & {
  loading?: SuspenseProps["fallback"];
  children?: ReactNode;
};

const QuerySuspense: React.FC<QuerySuspenseProps> = ({
  loading = <PageLoading />,
  children,
  ...rest
}) => (
  <QueryErrorResetBoundary>
    {({ reset }) => (
      // @ts-ignore
      <ErrorBoundary
        onReset={reset}
        {...rest}
        FallbackComponent={
          !rest.fallback && !rest.fallbackRender && !rest.FallbackComponent
            ? FallbackComponent
            : undefined
        }
      >
        <Suspense fallback={loading}>{children}</Suspense>
      </ErrorBoundary>
    )}
  </QueryErrorResetBoundary>
);

export function withQuerySuspense<P>(
  Component: React.ComponentType<P>,
  querySuspenseProps?: QuerySuspenseProps,
): React.ComponentType<P> {
  const Wrapped: React.ComponentType<P> = (props) => {
    return (
      <QuerySuspense {...querySuspenseProps}>
        <Component {...props} />
      </QuerySuspense>
    );
  };
  // Format for display in DevTools
  // https://github.com/bvaughn/react-error-boundary/blob/master/src/index.tsx
  const name = Component.displayName || Component.name || "Unknown";
  Wrapped.displayName = `withQuerySuspense(${name})`;

  return Wrapped;
}

export function loadable(importFunc: () => Promise<any>, querySuspenseProps?: QuerySuspenseProps) {
  return withQuerySuspense(lazy(importFunc), querySuspenseProps);
}

export default QuerySuspense;
