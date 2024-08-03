import React, { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
export default function Header() {
  const gsapLogoRef = useRef();

  useGSAP(() => {
    gsap.from(gsapLogoRef.current, {
      y: 30,
      duration: 1,
      opacity: 0.2,
    });
  });
  return (
    <header className="sticky top-0">
      <nav className="bg-[#08999a]">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" ref={gsapLogoRef}>
            <img
              src="https://bbpsjhanor.balbharati.org/wp-content/uploads/2017/01/jhanor.png"
              alt="BBPS-Jhanor"
            />
          </Link>
          <NavLink
            to="/explore"
            className={({ isActive }) => {
              `${
                isActive ? "text-white" : "text-red-500"
              } md:text-lg text-white hover:text-black py-1 px-1`;
            }}
          >
            Explore
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) => {
              `${
                isActive ? "text-white" : "text-red-500"
              } md:text-lg text-white hover:text-black py-1 px-1`;
            }}
          >
            Gallery
          </NavLink>
          <NavLink
            to="/cbse-results"
            className={({ isActive }) => {
              `${
                isActive ? "text-white" : "text-red-500"
              } md:text-lg text-white hover:text-black py-1 px-1`;
            }}
          >
            CBSE Results
          </NavLink>
          <Link
            to="/magazine"
            className={({ isActive }) => {
              `${
                isActive ? "text-white" : "text-red-500"
              } md:text-lg text-white hover:text-black py-1 px-1`;
            }}
          >
            Magazine
          </Link>
        </div>
      </nav>
    </header>
  );
}
