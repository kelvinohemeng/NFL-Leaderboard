import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [navActive, setNavActive] = useState(false);

  const toggleNavActive = () => {
    setNavActive(!navActive);
  };
  const deactivateNav = () => {
    setNavActive(false);
  };
  return (
    <nav className=" absolute top-0 w-full h-screen p-10 py-5 flex justify-center z-[99999] overflow-hidden pointer-events-none">
      {/* <div className="container mx-auto px-4 h-fit hidden md:flex justify-center space-x-5 p-5 text-white pointer-events-auto">
        <Link className="" to="/">
          Overall
        </NavLink>
        <NavLink className="" to="/qbtos">
          QB Toss
        </NavLink>
        <NavLink className="" to="/40yard">
          40 Yard dash
        </NavLink>
        <NavLink className="" to="/verticaljump">
          Vertical Jump
        </NavLink>
      </div> */}
      <div
        className={`w-screen h-screen absolute top-0 px-4 ${
          navActive ? " translate-y-[0%]" : "translate-y-[100%]"
        } flex flex-col z-20 bg-[#013369]  items-center justify-center  p-5 text-white transition duration-500 pointer-events-auto`}
      >
        <Link
          onClick={deactivateNav}
          className=""
          to="https://nfloverall.mx4.app"
        >
          Overall
        </Link>
        <Link onClick={deactivateNav} className="" to="https://nflqbt.mx4.app">
          QB Toss
        </Link>
        <Link onClick={deactivateNav} className="" to="https://nfl40yd.mx4.app">
          40 Yard Dash
        </Link>
        <Link onClick={deactivateNav} className="" to="https://nflvj.mx4.app">
          Vertical Jump
        </Link>
      </div>
      <div className=" relative w-full h-fit flex justify-center z-[99999999] md:justify-start">
        <div>
          <div
            onClick={toggleNavActive}
            className={`flex flex-col duration-200 z-50 h-fit pointer-events-auto  p-5 cursor-pointer`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#ffffff"
              viewBox="0 0 256 256"
            >
              <path d="M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128ZM40,76H216a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24ZM216,180H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Z"></path>
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
}
