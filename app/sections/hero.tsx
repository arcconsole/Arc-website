"use client";

import { DotPattern } from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MoveUpRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-screen relative grid place-content-center">
      <div className="mt-60 flex flex-col items-center justify-center font-poppins-medium text-5xl text-center space-y-6">
        <div>
          Gaming Redefined.
          <br />
          Play More. Play Better.
        </div>
        <Button
          variant={"outline"}
          className="rounded-[1.2rem] capitalize text-xl py-6 border-[#161616] hover:bg-[#161616] hover:text-white font-poppins"
        >
          Join the tribe <MoveUpRight size={36} />
        </Button>
      </div>
      <motion.div
      // animate={{ y: 0 }}
      // initial={{ y: 10 }}
      // transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-[30%] -translate-y-[28%] w-full font-ethnocentric text-[9rem] text-[#DEDEDE] z-[-1]">
          arc nemo
        </div>
        <Image
          src="/hero-image.png"
          alt="Hero Image"
          height={800}
          width={1200}
          objectFit="cover"
          className="object-cover mx-auto"
          draggable={false}
        />
      </motion.div>

      <DotPattern
        width={20}
        height={20}
        cx={1.5}
        cy={1.5}
        cr={1.5}
        className={cn(
          "[mask-image:linear-gradient(to_bottom,white,transparent,transparent)] "
        )}
      />
    </div>
  );
};

export default Hero;
