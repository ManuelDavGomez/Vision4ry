import "./App.css";
import AOS from "aos";
import "../node_modules/aos/dist/aos.css";

import React, { lazy, Suspense, useEffect } from "react";
import { RingLoader } from "react-spinners";

function App() {
  const LazyFoot = lazy(
    () =>
      new Promise((resolve) =>
        setTimeout(() => resolve(import("./components/footer/Foot.jsx")), 300)
      )
  );
  const LazyNav = lazy(
    () =>
      new Promise((resolve) =>
        setTimeout(() => resolve(import("./components/header/Navbar.jsx")), 300)
      )
  );
  const LazyParticless = lazy(
    () =>
      new Promise((resolve) =>
        setTimeout(
          () => resolve(import("./components/Particle/Particless.jsx")),
          4000
        )
      )
  );
  const LazyLanding = lazy(
    () =>
      new Promise((resolve) =>
        setTimeout(
          () => resolve(import("./components/landing/Landing.jsx")),
          300
        )
      )
  );

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Suspense
        fallback={
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "95vh",
            }}
          >
            <RingLoader color="#40e0d0" size={200} />
          </div>
        }
      >
        <LazyLanding />
        <LazyParticless />
        <LazyNav />
        <LazyFoot />
      </Suspense>
    </>
  );
}

export default App;
