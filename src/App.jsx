import { useEffect, useState, lazy } from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
const LeaderBoardItem = lazy(() => import("./components/LeaderBoardItem"));
const Home = lazy(() => import("./pages/Home"));

const Overall = lazy(() => import("./pages/Overall"));
const QBtoss = lazy(() => import("./pages/QBtos"));
const FourtyYard = lazy(() => import("./pages/40Yard"));
const VerticalJump = lazy(() => import("./pages/VerticalJump"));

function App() {
  return (
    <>
      <Home />
      <div className="w-screen relative h-screen flex justify-center md:justify-end items-center overflow-hidden container mx-auto px-4">
        <div
          className="bg-gray-500 fixed -z-10 inset-0"
          style={{
            background: "url('/def-bg.png')",
            backgroundPosition: "top right",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        {/* <Overall /> */}
        {/* <QBtoss /> */}
        <FourtyYard />
        {/* <VerticalJump /> */}
        {/* <Routes>
          <Route path="/" element={<Overall unLoad={setIsLoading} />} />
          <Route
            path="/qbtos"
            element={<QBtoss isLoading={isLoading} unLoad={setIsLoading} />}
          />
          <Route
            path="/40yard"
            element={<FourtyYard isLoading={isLoading} unLoad={setIsLoading} />}
          />
          <Route
            path="/verticaljump"
            element={
              <VerticalJump isLoading={isLoading} unLoad={setIsLoading} />
            }
          />
        </Routes> */}
      </div>
    </>
  );
}

export default App;
