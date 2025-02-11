"use client";

import React from "react";
import { Button } from "./ui/button";
import { Bot, MoveUp } from "lucide-react";

const BottumRightButtons = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="fixed bottom-5 right-5 flex flex-col gap-5 z-50">
      <Button
        onClick={scrollToTop}
        variant="ghost"
        className="rounded-xl py-4 px-6 text-lg font-bold bg-[#d3d3d3] border h-12 w-12"
      >
        <MoveUp />
      </Button>
      <Button
        variant="ghost"
        className="rounded-xl py-4 px-6 text-lg font-bold bg-[#d3d3d3] border h-12 w-12"
      >
        <Bot />
      </Button>
    </div>
  );
};

export default BottumRightButtons;
