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
      <div className="w-screen relative min-h-screen flex justify-center pt-[10vh] md:pt-[0] md:justify-end items-center overflow-x-hidden md:overflow-hidden container mx-auto px-4">
        <div
          className="bg-gray-500 fixed -z-10 inset-0"
          style={{
            background: "url('/def-bg.png')",
            backgroundPosition: "top right",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        {/* these are the various pages for the leader board, uncomment them to see them */}

        {/* <Overall /> */}
        {/* <QBtoss /> */}
        {/* <FourtyYard /> */}
        {/* <VerticalJump /> */}

        {/* this is the version that uses react router */}

        <Routes>
          <Route path="/" element={<Overall />} />
          <Route path="/qbtos" element={<QBtoss />} />
          <Route path="/40yard" element={<FourtyYard />} />
          <Route path="/verticaljump" element={<VerticalJump />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
