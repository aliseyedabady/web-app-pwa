import React, { Suspense } from "react";
import Routing from "./Components/Routing";
import { routes } from "./Router";

const App = () => {
  return (
    <div>
      <Suspense
        fallback={() => {
          return <>loading...</>;
        }}
      >
        <Routing routes={[...routes]} />
      </Suspense>
    </div>
  );
};

export default App;
