import React, { useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo_black from "../assets/images/logo_black.png";

export default function Header() {
  return (
    <header className="font-primaryBold sticky top-0 py-4">
      <nav>
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div>
            <Link to="/">
              <img src={logo_black} alt="BBPS-Jhanor" />
            </Link>
          </div>

          <div className="mr-8 linkContainer">
            <NavLink
              to="/explore"
              className={`md:text-xl text-black hover:underline py-1 px-1 mx-12 link`}
            >
              Explore
            </NavLink>
            <NavLink
              to="/gallery"
              className={`md:text-xl text-black hover:underline py-1 px-1 mx-12 link`}
            >
              Gallery
            </NavLink>
            <NavLink
              to="/cbse-results"
              className={`md:text-xl text-black hover:underline py-1 px-1 mx-12 link`}
            >
              CBSE Results
            </NavLink>
            <NavLink
              to="/magazine"
              className={`md:text-xl text-black hover:underline py-1 px-1 mx-12 link`}
            >
              Magazine
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}
