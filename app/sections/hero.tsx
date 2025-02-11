"use client";

import { DotPattern } from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MoveUpRight } from "lucide-react";
import WaitlistDialog from "@/components/ui/wait-list-dialog";
import BottumRightButtons from "@/components/bottum-right-buttons";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen relative grid place-content-center mb-16">
      <div className="mt-60 mb-8 flex flex-col items-center justify-center font-poppins-medium text-5xl text-center space-y-16">
        <div className="space-y-6 text-6xl">
          <p>Gaming Redefined.</p>
          <p> Play More. Play Better.</p>
        </div>
        <Button
          onClick={() => setIsOpen(true)}
          variant={"outline"}
          className="rounded-[1.2rem] capitalize text-xl py-6 border-2 text-black border-[#161616] hover:bg-[#161616] hover:text-white font-poppins"
        >
          Join the tribe <MoveUpRight size={36} />
        </Button>
      </div>
      <motion.div
        // animate={{ y: 0 }}
        // initial={{ y: 10 }}
        // transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        className="flex items-center justify-center w-full h-full"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-[28%] -translate-y-[28%] w-full font-ethnocentric text-[9rem] text-[#DEDEDE] z-[-1] ">
          arc nemo
        </div>
        <Image
          src="/hero-image.png"
          alt="Hero Image"
          height={1200}
          width={1300}
          objectFit="cover"
          className="object-cover "
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
      <WaitlistDialog isOpen={isOpen} setIsOpen={setIsOpen} />
      <BottumRightButtons />
    </div>
  );
};

export default Hero;
