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
          40 Yard dash
        </Link>
        <Link onClick={deactivateNav} className="" to="https://nflvj.mx4.app">
          Vertical Jump
        </Link>
      </div>
      <div className="w-full h-fit flex justify-center container mx-auto md:justify-end">
        <div
          onClick={toggleNavActive}
          className={`${
            navActive ? "gap-0" : " gap-3"
          }  flex flex-col duration-200 z-50 h-fit pointer-events-auto  p-5`}
        >
          <span className=" w-[50px] h-[1.5px] bg-white"></span>
          <span className=" w-[50px] h-[1.5px] bg-white"></span>
        </div>
      </div>
    </nav>
  );
}
