import React, { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import logo from "./logo.png";

export default function Header() {
  const gsapLogoRef = useRef();
  const tl = gsap.timeline();
  useGSAP(() => {
    tl.from(gsapLogoRef.current, {
      y: 30,
      duration: 1,
      opacity: 0,
    });
  });

  useGSAP(() => {
    tl.from(".linkContainer .link", {
      y: 150,
      duration: 0.7,
      stagger: 0.25,
      opacity: 0,
    });
  });

  return (
    <header className="sticky top-0">
      <nav className="">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div ref={gsapLogoRef}>
            <Link to="/">
              <img src={logo} alt="BBPS-Jhanor" />
            </Link>
          </div>

          <div className="mr-8 linkContainer">
            <NavLink
              to="/explore"
              className={`md:text-lg text-black hover:underline py-1 px-1 mx-12 link`}
            >
              Explore
            </NavLink>
            <NavLink
              to="/gallery"
              className={`md:text-lg text-black hover:underline py-1 px-1  mx-12 link`}
            >
              Gallery
            </NavLink>
            <NavLink
              to="/cbse-results"
              className={`md:text-lg text-black hover:underline py-1 px-1  mx-12 link`}
            >
              CBSE Results
            </NavLink>
            <NavLink
              to="/magazine"
              className={`
             md:text-lg text-black hover:underline py-1 px-1  mx-12 link`}
            >
              Magazine
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}
