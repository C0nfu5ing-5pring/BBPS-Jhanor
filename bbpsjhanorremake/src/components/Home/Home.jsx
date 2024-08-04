import React from "react";
export default function Home() {
  const [image, setImage] = useSate(
    "https://bbpsjhanor.balbharati.org/wp-content/uploads/2024/07/IMG20240711101419.jpg"
  );
  return (
    <>
      <div className="flex justify-center">
        <img
          src="https://bbpsjhanor.balbharati.org/wp-content/uploads/2024/07/IMG20240711101419.jpg"
          alt=""
          className="object-fit bg-cover bg-no-repeat w-full"
        />
      </div>
    </>
  );
}
