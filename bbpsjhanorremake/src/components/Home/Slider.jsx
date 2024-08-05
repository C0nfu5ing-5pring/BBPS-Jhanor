import React, { useState } from "react";

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
  const text = [
    "T.D VACCINATION",
    "HEALTH CHECK-UP",
    "WORKSHOP ON SAFETY",
    "E-TWINNING",
    "SSE - 2024 TOPPERS",
    "SSCE - 2024 TOPPERS",
    "WORLD LABOUR DAY",
    "INTER-HOUSE FOOTBALL",
    "INTER-HOUSE THROWBALL",
    "FIRE SAFETY DRILL",
  ];
  const [imageIndex, setImageIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  const nextSlide = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    setTextIndex((prevText) => (prevText + 1) % text.length);
  };

  const prevSlide = () => {
    setImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
    setTextIndex((prevText) => (prevText - 1 + text.length) % text.length);
  };
  return (
    <div className="flex justify-center">
      <button
        className="absolute left-16  top-[43%] h-[100px] w-[100px] flex justify-center"
        onClick={prevSlide}
      >
        <img src="data:image/png;base64,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" />
      </button>
      <img
        src={images[imageIndex]}
        alt=""
        className="object-fit bg-cover bg-no-repeat w-full"
      />
      <div className="absolute left-auto right-auto bg-red-400 top-[60%]">
        <div className="bg-[#FFDE00] px-2">
          <div className="bg-[#08999A]">
            <div className="text-[3rem] font-extrabold p-5 text-[#FFDE00]">
              {text[textIndex]}
            </div>
          </div>
        </div>
      </div>
      <button
        className="absolute right-16  top-[43%] h-[100px] w-[100px] flex justify-center"
        onClick={nextSlide}
      >
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAIB0lEQVR4Xu1cTYscVRS9r+YzRhgIDCgEA2bhxo1rgxj9M+6TZQhIlsl/CskEV24EcSE6E4SAoGFANDqZ6Xqe+/WqeoSMQ7r6dlW/hpnurqru13XOved+vFeVqD5CEUiho9fBqRIQbASVgEpAMALBw1cPqAQEIxA8fPWASkAwAsHDVw+oBAQjEDx89YBKQDACwcNXD6gEBCMQPHz1gEpAMALBw1cPqAQEIxA8fPWASkAwAsHDT8YD8lHzFe1uPk3vv/4hGNNLDT8JAvJhc4eofURt+p3S9qfp5smPl0Ih8ODRE6Dg50f4o4yzSTMCCTujIWHUBORDepCJ7rkB88lkLPRIbR4NCaMlAOA/BN53KfkpwANslU3CK2rhCUTwBFppORolAfln+pqadJ8ygMYZZNEewI+3+lLfIyb8RlfzF+k9+j5Q5t849DgJeEEf0T90AOvfd+1no1dnEEa6p0zH9M72rVXNjkZJAMOcX+yAhJOD3NC+WrwEAHmwGDEbxSNaJmFrJUkYLQEC9CE84YwO8hZI4PcuPRyIjQh+leERIAMkEEiglaoTRk2AkgBPoJNvYPHX2AG6E9KAkDk2GDl4d0xXVouE0RMgJPxKH9Nf9CQ3TIIkoiI/RZM4LJhXUAsSVigmTIIAgfoXkHBKT9QTDO4uQ7VMpIFHzFAnpGPazLfSjXg5mgwBSsI2SDiFJ+RrHpXnOdAMSSJEhidsQo6CSZgUASpHIOEVSEggQWRITzFJSsRhQQO0vOHsaBMp6o24Bt7kCJgjgQieoGBLNiTZqgkUPEHesxwFpqiTJKAj4TU8wUmwU9UaTZyjpKqcogbJ0WQJ6AJzekZN3tMaTfzAkiMt3qRG4BKas6Odrdvp+ul3FrGX8jRpAoSE5/QJzdJjapo9Fn2pku3BFbRWzXwgp675D7z+LH1ISyNh8gR0JBBISCDBrF4js4djy46ECJCwCRKW4wlrQcCcJyTas9JYJcibdyVbwtEtLY2EtSFASdiCHJ3BE2iPtV8adj2P8FaSZkcgYQdydH1YOVorAs57wlwmZEHaY4SoUws52oEcDRiY146AXkx4it7Ru/1UR0KyFW9SuPFjBhKa4WLC4AS0R3omyDBMczXjkBmsfu9SzFFt0p4kRZRAKU8KDqeMeqjvs4JKkJWRLM/pT1BaIeYZj6GuWZB8pDTvtFK2qrmkrewJeRA5WgIBBQ89U/9v1RBz4V1L7RYAAMnPGzzPrGLinr4d560EaStwn99rWwO/bHOUC6/2Hf49eryTrX0KL9CMZLUc3chy1ICEBaeowxNw2MCozLVLK8BS75KSa1EkD99mxJg9yg59Lcj3vEU/IPZeLFm3iKf0vldbEepRcoTtc4y7H2CGUvpHPJxYxcID8+AEYNZKbVfA8X6Mnap0JnmfFEFWmapl+nyiAChG2EmKvHPOCmEKrE/AqBSphxTMZQj9bEeiG8M5C3By+BOqjPLAkheQsLWwwDw8ARwDuPGlUBu4/FKR062WDpa40Dtjg/58gOyDIlWsm3UprnSVhKb5NgrHD48n6iTKdXlp+9177BcyqQa/EkBbX6abp9/axrd6Wg4BPfuVX+v49i3LN5vWq3yY5PgpMtCClqBo39N9mb5SOD2b6dDRno85mtLV/y7xFiOs7PJ4pOOlGcDfXWxtMDwBIkFuYyY3hQPTaXFzkxiNwEWf5+2Td7kvdTr9H7CLfFgkMLRVfiz36i9dcTL5d/W9sB/gOQjvLj4TGpyA9kgFQnXc4BS372SpJ079gGExw4iRz7t98xdZUDaP8fRUZrwKoOYpRcbUH+Zjg8+Q2Xb5qZ0wym9my2+g+wP0hwYn4K0EcqAPa4eUHsMb0BfqrZrwrMeIFh4GBN9VcKDTXM2v9X4Q5o33NLZuwOLbkgXLr3aX5H7QALLTR2atPEDBP9W2tAQOgM+rJDRV6tJT5oDBH7AF4SSsDQEuO8Ba2tFe1nk0EsP3Am/Glr+4XP9NWrAWBHSaT3uaxuppa3LUyz3d8neH7YCulQSVKUlYvk8/utVZLahZEz+WOBGzFhJkC7WeScCd60d4s00rXJEjXqhFdHvRzbaLUpHJSpCAf4YFWpSvzbUa5Iy9Zi7yc0wbWL4esEBrkgSUxbpYJ1oay5ro6KPf2+E1QVewTjRo2frkCJBFumfpCWCWVXHaU7IyvNi+NUNXYJHupAi4CvD/PE22Gq5rdXs3SggxPdILNuKvmpkMAWr5uEYAslMaTyI33Sl6bxVF1spcIzAJAkTzX5nsSJHVNfDKTIpZv4Ifp/nns6LREyAX653gEiVofn9a0idReFtT2rBINTfirwmYTCEm14e1uFJyg/al6c2Tb95W6y+8ksRn9a4PE4W8qFBY1f1i+X+/xmWqeb9Usj71WRJ/zn6kBAvL8y/Cb5QE6DXCAD/B8m0Ziub3LPS9+U5Zds5r/2OKrIvAH60H6K0K6L4vd/D6qlS4XmhleokLLz5PH9RbFfwfY7jUMfmn5mHeaO/2Jil9XYTwgGwHd0ypN+u4FKiXPZjvmNLijimNCKm1mHlOeEQ3bhplDOgTlZ8393LbPpAFKSw9s3HdNWv0BEh74ZDuAP1HmEAfhexMpg6Y84Qjwk37tutN+y6r4+t+/CQkaMwkVgKC2asEVAKCEQgevnpAJSAYgeDhqwdUAoIRCB6+ekAlIBiB4OGrB1QCghEIHr56QCUgGIHg4asHVAKCEQgevnpAJSAYgeDhqwdUAoIRCB7+X00vuY7hHOKlAAAAAElFTkSuQmCC" />
      </button>
    </div>
  );
}

export default Slider;
