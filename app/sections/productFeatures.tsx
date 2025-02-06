"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
interface TimelineItem {
  title: string;
  description: string;
}
const ProductFeatures = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 3000);
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const items: TimelineItem[] = [
    {
      title: "Operating System",
      description: "Owl OS for seamless gaming experience\nPowered by Owl",
    },
    {
      title: "Haptics",
      description: `Experience unmatched immersive feedback and precision with in-house ARC XP-717 haptic motor.`,
    },
    {
      title: "Retro Game\nEmulation",
      description: `Enjoy authentic retro gaming, an integrated cloud solution offering an exclusive indie game library.`,
    },
    {
      title: "Portability",
      description: `Plug and play your consoles and other libraries anytime anywhere`,
    },
  ];
  return (
    <div className="max-w-[90vw] mx-auto flex flex-col md:flex-row w-full justify-between items-center text-black">
      <div className="felx flex-col space-y-16 justify-center items-center w-full md:w-1/2 p-8 px-0">
        <h1 className="text-xl md:text-3xl md:text-nowrap font-ethnocentric uppercase text-center">
          Product Features
        </h1>
        <div className="relative w-full mx-auto">
          <div className="absolute left-1/2 top-[32px] w-[2px] h-[calc(100%-85px)] bg-[#121212]" />

          <div className="space-y-8">
            {items.map((item, index) => (
              <motion.div
                key={item.title}
                className="relative flex items-center gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                onMouseEnter={() => setActiveIndex(index)}
              >
                {/* Left side - Title */}
                <div className="flex-1 text-right">
                  <h3
                    className={`text-base md:text-lg font-poppins-medium transition-colors duration-200 whitespace-pre-line ${
                      index === activeIndex ? "text-black" : "text-black"
                    }`}
                  >
                    {item.title}
                  </h3>
                </div>

                {/* Center - Timeline dot */}
                <div className="relative">
                  <div
                    className={cn(
                      `w-3 h-3 rounded-full border-2 border-white bg-[#121212] transition-colors duration-200 translate-x-[1px]`,
                      index === activeIndex ? "h-8 w-2" : "h-3"
                    )}
                  />
                </div>

                {/* Right side - Description */}
                <div className="flex-1">
                  <motion.p
                    className="text-sm md:text-lg text-black/80 whitespace-pre-line"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: index === activeIndex ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Image
        src="/features-image.png"
        alt="Features Image"
        className="max-sm:hidden"
        width={350}
        height={350}
        draggable={false}
      />
    </div>
  );
};

export default ProductFeatures;
