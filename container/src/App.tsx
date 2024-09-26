import React from "react";
import { Routes, Route } from "react-router-dom";
import { ContainerApp } from "./components/ContainerApp";

const CounterAppOne = React.lazy(() => import("app1/CounterAppOne"));
const CounterAppTwo = React.lazy(() => import("app2/CounterAppTwo"));

const App = () => {
  return (
    <>
      <h1>sample page</h1>
      <ContainerApp
                CounterAppOne={CounterAppOne}
                CounterAppTwo={CounterAppTwo}
              />
      {/* <Routes>
        <Route
          path="/"
          element={
            <>
              
              
            </>
          }
        />
        <Route path="app1/*" element={<CounterAppOne />} />
        <Route path="app2/*" element={<CounterAppTwo />} />
      </Routes> */}
    </>
  );
};

export default App;
