"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ProductFeatures = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      title: "Operating System",
      description: (
        <>
          <span className="font-bold font-poppins-medium text-lg text-black">
            Owl OS
          </span>{" "}
          for seamless gaming experience
        </>
      ),
    },
    {
      title: "Haptics",
      description: (
        <>
          Experience unmatched immersive feedback and precision with in-house{" "}
          <span className="font-bold font-poppins-medium text-lg text-black">
            ARC XP-717
          </span>{" "}
          haptic motor.
        </>
      ),
    },
    {
      title: "Arc Universe",
      description:
        "Enjoy authentic retro gaming, an integrated cloud solution offering an exclusive indie game library.",
    },
    {
      title: "Portability",
      description:
        "Plug and play your consoles and other libraries anytime anywhere",
    },
  ];

  return (
    <div className="max-w-[90vw] mx-auto flex flex-col lg:flex-row w-full justify-between items-center text-black">
      <div className="flex flex-col space-y-16 justify-center items-center w-full lg:w-1/2 p-8 px-0">
        <h1 className="text-xl md:text-3xl md:text-nowrap font-bold uppercase font-ethnocentric text-center">
          Product Features
        </h1>
        <div className="max-w-2xl mx-auto p-8 ">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/3 top-0 bottom-0 w-px bg-[#161616]" />

            <div className="space-y-20">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="relative grid grid-cols-[120px,1fr] gap-32"
                >
                  {/* Dot */}
                  <motion.div
                    animate={{
                      height: activeIndex === index ? 32 : 9,
                      backgroundColor:
                        activeIndex === index ? "##8C8C8C" : "#161616",
                    }}
                    className="absolute left-1/3 -translate-x-[3px] top-[1px] w-[8px] h-[8px] rounded-full bg-black"
                  />

                  {/* Title */}
                  <div className="text-lg font-bold text-nowrap font-poppins-medium">
                    {feature.title}
                  </div>

                  {/* Description */}
                  <motion.div
                    animate={{ opacity: activeIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-gray-600 text-lg leading-relaxed"
                  >
                    {feature.description}
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Image
        src="/features-image.png"
        alt="Features Image"
        className="hidden lg:block"
        width={350}
        height={350}
        draggable={false}
      />
    </div>
  );
};

export default ProductFeatures;
