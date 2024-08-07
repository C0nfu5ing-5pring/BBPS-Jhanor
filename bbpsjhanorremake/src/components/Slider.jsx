import gsap from "gsap";
import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import tdvac from "../assets/images/tdvac.jpg";
import healthcheckup from "../assets/images/healthcheckup.jpg";
import awareness from "../assets/images/awareness.jpg";
import twinning from "../assets/images/twinning.jpg";
import tentop from "../assets/images/tentop.png";
import twelvetop from "../assets/images/twelvetop.png";
import football from "../assets/images/football.jpg";
import handball from "../assets/images/handball.jpg";
import firesafety from "../assets/images/firesafety.jpg";
import labourday from "../assets/images/labourday.jpg";
function Slider() {
  const images = [
    tdvac,
    healthcheckup,
    awareness,
    twinning,
    tentop,
    twelvetop,
    football,
    handball,
    firesafety,
    labourday,
  ];
  const [imageIndex, setImageIndex] = useState(0);
  const imageRef = useRef(null);

  useEffect(() => {
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0.5 },
        { opacity: 1, duration: 1.5 }
      );
    }
  }, [imageIndex]);
  return (
    <>
      <div className="flex justify-center">
        <img
          ref={imageRef}
          src={images[imageIndex]}
          alt=""
          className="object-fit bg-cover bg-no-repeat rounded-2xl w-[95%]"
        />
      </div>

      <div className="mt-3 font-primaryBlack flex justify-center">
        <NavLink
          className={`h-[18px] w-[18px] bg-black rounded-full my-1 mx-1 ${
            imageIndex === 0 ? "bg-gray-400" : "bg-black"
          }`}
          onClick={() => {
            setImageIndex(0);
          }}
        />
        <NavLink
          className={`h-[18px] w-[18px] bg-black rounded-full my-1 mx-1 ${
            imageIndex === 1 ? "bg-gray-400" : "bg-black"
          }`}
          onClick={() => {
            setImageIndex(1);
          }}
        />
        <NavLink
          className={`h-[18px] w-[18px] bg-black rounded-full my-1 mx-1 ${
            imageIndex === 2 ? "bg-gray-400" : "bg-black"
          }`}
          onClick={() => {
            setImageIndex(2);
          }}
        />
        <NavLink
          className={`h-[18px] w-[18px] bg-black rounded-full my-1 mx-1 ${
            imageIndex === 3 ? "bg-gray-400" : "bg-black"
          }`}
          onClick={() => {
            setImageIndex(3);
          }}
        />
        <NavLink
          className={`h-[18px] w-[18px] bg-black rounded-full my-1 mx-1 ${
            imageIndex === 4 ? "bg-gray-400" : "bg-black"
          }`}
          onClick={() => {
            setImageIndex(4);
          }}
        />
        <NavLink
          className={`h-[18px] w-[18px] bg-black rounded-full my-1 mx-1 ${
            imageIndex === 5 ? "bg-gray-400" : "bg-black"
          }`}
          onClick={() => {
            setImageIndex(5);
          }}
        />
        <NavLink
          className={`h-[18px] w-[18px] bg-black rounded-full my-1 mx-1 ${
            imageIndex === 6 ? "bg-gray-400" : "bg-black"
          }`}
          onClick={() => {
            setImageIndex(6);
          }}
        />
        <NavLink
          className={`h-[18px] w-[18px] bg-black rounded-full my-1 mx-1 ${
            imageIndex === 7 ? "bg-gray-400" : "bg-black"
          }`}
          onClick={() => {
            setImageIndex(7);
          }}
        />
        <NavLink
          className={`h-[18px] w-[18px] bg-black rounded-full my-1 mx-1 ${
            imageIndex === 8 ? "bg-gray-400" : "bg-black"
          }`}
          onClick={() => {
            setImageIndex(8);
          }}
        />
        <NavLink
          className={`h-[18px] w-[18px] bg-black rounded-full my-1 mx-1 ${
            imageIndex === 9 ? "bg-gray-400" : "bg-black"
          }`}
          onClick={() => {
            setImageIndex(9);
          }}
        />
      </div>
    </>
  );
}

export default Slider;
