import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <footer className="sticky bottom-0">
        <div className="flex justify-between px-[6%] bg-[#909090] text-white py-5 font-extralight">
          <div className="flex flex-shrink-0 text-sm">
            <Link to="/" className="hover:text-black">
              Home
            </Link>
            &nbsp;
            <p>|</p>
            &nbsp;
            <Link className="hover:text-black">Career</Link>
            &nbsp;
            <p>|</p>
            &nbsp;
            <Link to="/contact-us" className="hover:text-black">
              Contact Us
            </Link>
          </div>
          <Link to="/" className="text-sm hover:text-black hover:underline">
            © 2024, Bal Bharati Public School
          </Link>
        </div>
      </footer>
    </>
  );
}

export default Footer;
