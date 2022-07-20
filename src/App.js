import React from "react";
import { isMobile } from "react-device-detect";
import "./App.css";

const LazyMobile = React.lazy(() => import("./pages/Mobile"));
const LazyDesktop = React.lazy(() => import("./pages/Desktop"));

function App() {
  return (
    <React.Fragment>
      {isMobile ? (
        <React.Suspense fallback="Loading...">
          <LazyMobile />
        </React.Suspense>
      ) : (
        <React.Suspense fallback="Loading...">
          <LazyDesktop />
        </React.Suspense>
      )}
    </React.Fragment>
  );
}

export default App;
