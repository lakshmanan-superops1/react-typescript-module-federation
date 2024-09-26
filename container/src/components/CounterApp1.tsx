import { lazy, Suspense, FunctionComponent } from "react";

const CounterAppOne = lazy(() => import("app1/CounterAppOne"));

export const CounterAppOneContainer: FunctionComponent = (): JSX.Element => {
  return (
      <Suspense fallback={"Loading..."}>
        <CounterAppOne />
      </Suspense>
  );
};
