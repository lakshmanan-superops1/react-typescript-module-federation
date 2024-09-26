import { lazy, Suspense, FunctionComponent } from "react";

const CounterAppTwo = lazy(() => import("app2/CounterAppTwo"));

export const CounterAppOneContainer1: FunctionComponent = (): JSX.Element => {
  return (
      <Suspense fallback={"Loading..."}>
        <CounterAppTwo />
      </Suspense>
  );
};
