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
    <div className="space-y-20">
      <div className="container max-w-7xl bg-[#161616] text-white mx-auto rounded-3xl p-20 py-24  pl-24 flex justify-between gap-32">
        <div className="space-y-16 w-3/4">
          <h1 className="font-ethnocentric text-4xl ">arc nemo</h1>
          <p className="font-poppins text-xl leading-relaxed">
            Best-in-class native Android gaming handheld console powered by
            <strong className="font-poppins-medium mx-1">
              Snapdragon 8Gen2
            </strong>
            , built for gamers who demand nothing short of excellence.
          </p>
          <p className="font-poppins text-xl leading-relaxed">
            Integrating cutting-edge hardware with intuitive design to deliver
            an unmatched portable gaming experience where premium craftsmanship
            meets limitless possibilities.
          </p>
        </div>
        <div className="space-y-20">
          <Image
            src={"/arc-image.png"}
            height={800}
            width={800}
            alt="ARC Logo"
            className=" object-contain"
            draggable={false}
          ></Image>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-5">
        <h1 className="font-poppins-medium text-xl">
          Play any Game on any Platform
        </h1>
        {/* <div className="flex items-center justify-center gap-24 w-full">
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              height={250}
              width={250}
              alt="ARC Logo"
              className="object-contain h-12"
              draggable={false}
            ></Image>
          ))}
        </div> */}
        <Marquee className="">
          <div className="flex items-center justify-center gap-24 w-full">
            {images.map((image, index) => (
              <Image
                key={index}
                src={image}
                height={250}
                width={250}
                alt="ARC Logo"
                className="object-contain h-12"
                draggable={false}
              ></Image>
            ))}
          </div>
          <div className="flex items-center justify-center gap-24 w-full">
            {images.map((image, index) => (
              <Image
                key={index}
                src={image}
                height={250}
                width={250}
                alt="ARC Logo"
                className="object-contain h-12"
                draggable={false}
              ></Image>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default ProductIntro;
