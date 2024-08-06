import React from "react";
function AboutUs() {
  return (
    <>
      <div className="font-primaryBold mx-10 my-8">
        <div className="flex justify-center">
          <h1 className="whitespace-pre-line md:text-[40px] lg:text-[65px] text-center py-3 text-black px-2 inline-block font-extrabold">
            Welcome to Bal Bharati Public School, NTPC Jhanor
          </h1>
        </div>
      </div>
      <div className="mx-10 mb-5">
        <div className="flex justify-center w-[70%] m-auto">
          <p className="text-justify text-[22px] font-primarySemiBold">
            The Child Education Society, the apex body of Bal Bharati Public
            Schools was set up in the year 1944 during the pre-independence era
            when the elders thought that Indian Culture, Heritage, Tradition and
            ethos must be preserved and fostered, and in order to achieve these
            objectives, it became obligatory for the Society to educate the
            young people. Thus, the Society was registered under the
            Registration of Societies Act (XXI) 1860.
          </p>
        </div>
      </div>
      <div className="my-14 flex justify-center">
        <video
          src="https://bbpsjhanor.balbharati.org/wp-content/uploads/2020/03/SB.mp4"
          controls
          autoPlay
          loop
          width={"800px"}
          className="rounded-2xl border-4 border-black"
        ></video>
      </div>
    </>
  );
}

export default AboutUs;
