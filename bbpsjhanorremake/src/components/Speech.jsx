import React from "react";

function Speech() {
  return (
    <>
      <div className="mt-10 bg-[#F8F8F8] grid grid-cols-2">
        <div className="flex justify-center flex-col px-4 py-5">
          <h1 className="font-primaryExtrabold pb-4 text-[45px] text-right">
            Principal Speaks
          </h1>
          <p className="font-primaryLight text-right pl-32 pb-3 text-[25px]">
            “Bal Bharati Public School, Jhanor is one of the units of proud
            family of Child Education Society. Under the guidance and
            inspiration of CES, the school prospers and flourishes along with
            the parent body.“
          </p>
          <p className="text-right font-primaryExtralight text-[16.5px] pl-28">
            We consider each and every child as precious gifts and we at BBPS
            remain committed to grooming them into a better personality. Swami
            Vivekananda puts it right 'Education is the manifestation of the
            perfection already in man'. All knowledge is in the human mind and
            Education is not filling the mind with a lot of facts.
          </p>
        </div>
        <div className="flex justify-start p-3">
          <img
            src="
            https://bbpsjhanor.balbharati.org/wp-content/uploads/2022/09/DSCN1459-1536x1152.jpg"
            alt=""
            width={"600px"}
            height={"560px"}
            className="rounded-xl"
          />
        </div>
      </div>
    </>
  );
}

export default Speech;
