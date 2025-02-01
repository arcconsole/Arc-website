import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const ProductIntro = () => {
  const images = ["/luna.png", "/bosteroid.png", "/gamepass.png", "/psnow.png"];
  return (
    <div className="space-y-20">
      <div className="container max-w-7xl bg-[#161616] text-white mx-auto rounded-xl p-20 pt-32  pl-32 flex justify-between gap-32">
        <div className="space-y-16 w-3/4">
          <h1 className="font-ethnocentric text-4xl ">arc nemo</h1>
          <p className="font-poppins text-xl leading-relaxed">
            Dive into an immersive gaming experience with{" "}
            <span className="font-poppins-medium">Arc Nemo</span>, the console
            designed to seamlessly blend stunning visuals and lightning-fast
            performance.
          </p>
          <p className="font-poppins text-xl leading-relaxed">
            Best in class native Android handheld console powered by{" "}
            <span className="font-poppins-medium">Snapdragon 8 Gen 2</span>
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
          <Button
            variant={"outline"}
            className="bg-transparent rounded-full capitalize text-xl py-6 border-white float-end"
          >
            Join the waitlist
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-3">
        <h1 className="font-poppins-medium text-xl">
          Play any Game on any Platform
        </h1>
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
      </div>
    </div>
  );
};

export default ProductIntro;
