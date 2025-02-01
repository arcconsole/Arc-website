"use client";

import { DotPattern } from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="min-h-screen relative">
      <motion.div
      // animate={{ y: 0 }}
      // initial={{ y: 10 }}
      // transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
      >
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
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom,white,transparent,transparent)] "
        )}
      />
    </div>
  );
};

export default Hero;
