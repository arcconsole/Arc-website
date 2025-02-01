import Image from "next/image";
import React from "react";

const ProductIntro = () => {
  const images = ["/luna.png", "/bosteroid.png", "/gamepass.png", "/psnow.png"];
  return (
    <div className="space-y-20">
      <div className="container max-w-7xl bg-[#161616] text-white mx-auto rounded-xl p-20 flex justify-between gap-32">
        <div className="space-y-8">
          <h1 className="font-ethnocentric text-4xl ">arc nemo</h1>
          <p className="font-poppins text-xl">
            Dive into an immersive gaming experience with Arc Nemo, the console
            designed to seamlessly blend stunning visuals and lightning-fast
            performance.
          </p>
          <p className="font-poppins text-xl">
            Best in class native Android handheld console powered by Snapdragon
            8 Gen 2
          </p>
        </div>
        <Image
          src={"/arc-image.png"}
          height={500}
          width={500}
          alt="ARC Logo"
          className=" object-contain"
          draggable={false}
        ></Image>
      </div>
      <div className="flex flex-col items-center justify-center gap-3">
        <h1 className="font-poppins-medium text-xl">
          Play any Game on any Platform
        </h1>
        <div className="flex items-center justify-center gap-8 w-full">
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              height={250}
              width={250}
              alt="ARC Logo"
              className="object-contain h-10"
              draggable={false}
            ></Image>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductIntro;
