import gsap from "gsap";
import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
function Slider() {
  const images = [
    "https://bbpsjhanor.balbharati.org/wp-content/uploads/2024/07/IMG20240711101419.jpg",
    "https://bbpsjhanor.balbharati.org/wp-content/uploads/2024/07/IMG20240710095012.jpg",
    "https://bbpsjhanor.balbharati.org/wp-content/uploads/2024/07/IMG_9872.jpg",
    "https://bbpsjhanor.balbharati.org/wp-content/uploads/2024/07/Untitled.jpg",
    "https://bbpsjhanor.balbharati.org/wp-content/uploads/2024/05/2-2.png",
    "https://bbpsjhanor.balbharati.org/wp-content/uploads/2024/05/2.png",
    "https://bbpsjhanor.balbharati.org/wp-content/uploads/2024/05/IMG20240501080005.jpg",
    "https://bbpsjhanor.balbharati.org/wp-content/uploads/2024/05/IMG20240427082751.jpg",
    "https://bbpsjhanor.balbharati.org/wp-content/uploads/2024/05/IMG_20240427_100234-1.jpg",
    "https://bbpsjhanor.balbharati.org/wp-content/uploads/2024/04/20240415_114503.jpg",
  ];
  const [imageIndex, setImageIndex] = useState(0);
  const imageRef = useRef(null);

  useEffect(() => {
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0.5 },
        { opacity: 1, duration: 1 }
      );
    }
  }, [imageIndex]);
  return (
    <>
      <img
        ref={imageRef}
        src={images[imageIndex]}
        alt=""
        className="object-fit bg-cover bg-no-repeat w-[100%]"
      />

      <div className="flex justify-center">
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
