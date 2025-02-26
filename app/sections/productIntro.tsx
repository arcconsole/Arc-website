import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const ProductIntro = () => {
  const images = [
    "/luna.png",
    "/bosteroid.png",
    "/gamepass.png",
    "/psnow.png",
    "/steam-link.png",
    "/jio-games.png",
    "/geforce.png",
  ];
  return (
    <div className="space-y-14 md:space-y-20 px-4 md:px-0">
      <div className="container max-md:text-center max-w-7xl bg-[#161616] text-white mx-auto rounded-xl md:rounded-3xl p-6 md:p-20 md:py-24 py-12 md:pl-24 flex flex-col md:flex-row justify-between md:gap-32">
        <div className="space-y-6 md:space-y-16 w-full md:w-3/4">
          <h1 className="font-ethnocentric text-3xl md:text-4xl">arc nemo</h1>
          <p className="font-poppins text-base md:text-xl leading-relaxed">
            Best-in-class native Android gaming handheld console powered by
            <strong className="font-poppins-medium mx-1">
              Snapdragon 8Gen2
            </strong>
            , built for gamers who demand nothing short of excellence.
          </p>
          <p className="font-poppins text-base md:text-xl leading-relaxed">
            Integrating cutting-edge hardware with intuitive design to deliver
            an unmatched portable gaming experience where premium craftsmanship
            meets limitless possibilities.
          </p>
        </div>
        <div className="mt-12 md:mt-0 flex justify-center md:block">
          <Image
            src={"/arc-image.png"}
            height={800}
            width={800}
            alt="ARC Logo"
            className="object-contain max-w-[250px] md:max-w-full"
            draggable={false}
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-3 md:gap-5 mt-6 md:mt-0">
        <h1 className="font-poppins-medium text-lg md:text-xl text-center">
          Play any Game on any Platform
        </h1>
        <Marquee className="w-full">
          <div className="flex items-center justify-center md:mt-0 mt-5 md:gap-24 w-full">
            {images.map((image, index) => (
              <Image
                key={index}
                src={image}
                height={250}
                width={250}
                alt="ARC Logo"
                className="object-contain h-8 md:h-12"
                draggable={false}
              />
            ))}
          </div>
          <div className="flex items-center justify-center md:mt-0 mt-5 md:gap-24 w-full">
            {images.map((image, index) => (
              <Image
                key={index}
                src={image}
                height={250}
                width={250}
                alt="ARC Logo"
                className="object-contain h-8 md:h-12"
                draggable={false}
              />
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default ProductIntro;
