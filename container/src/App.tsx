// App.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import { ContainerApp } from "./components/ContainerApp";
import { InterAppMessagingProvider } from "../src/contexts/InterAppMessaging";

const CounterAppOne = React.lazy(() => import("app1/CounterAppOne"));
const CounterAppTwo = React.lazy(() => import("app2/CounterAppTwo"));

const App = () => (
  <InterAppMessagingProvider>
    <Routes>
      <Route
        path="/"
        element={
          <ContainerApp
            CounterAppOne={CounterAppOne}
            CounterAppTwo={CounterAppTwo}
          />
        }
      />
      <Route path="app1/*" element={<CounterAppOne />} />
      <Route path="app2/*" element={<CounterAppTwo />} />
    </Routes>
  </InterAppMessagingProvider>
);

export default App;