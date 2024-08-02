import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
export default function Header() {
  const gsapRef = useRef();

  useGSAP(() => {
    gsap.from(gsapRef.current, {
      y: 30,
      duration: 1,
      opacity: 0.2,
    });
  });
  return (
    <header className="sticky top-0">
      <nav className="bg-[#08999a]">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" ref={gsapRef}>
            <img
              src="https://bbpsjhanor.balbharati.org/wp-content/uploads/2017/01/jhanor.png"
              alt="BBPS-Jhanor"
            />
          </Link>
          <Link
            to="/explore"
            className="md:text-lg text-white hover:text-black py-1 px-1"
          >
            Explore
          </Link>
          <Link
            to="/gallery"
            className="md:text-lg text-white hover:text-black py-1 px-1"
          >
            Gallery
          </Link>
          <Link
            to="/cbse-results"
            className="md:text-lg text-white hover:text-black py-1 px-1"
          >
            CBSE Results
          </Link>
          <Link
            to="/magazine"
            className="md:text-lg text-white hover:text-black py-1 px-1"
          >
            Magazine
          </Link>
        </div>
      </nav>
    </header>
  );
}
