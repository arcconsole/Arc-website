"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import WaitlistDialog from "@/components/ui/wait-list-dialog";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { MoveUpRight } from "lucide-react";

const links = ["Overview", "Community", "Support", "Forum"];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className="fixed top-0 z-50 w-full bg-transparent"
      initial={{ y: -100 }}
      animate={{ y: showNavbar ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="container mx-auto flex h-20 max-w-[94vw] items-center justify-between px-4 md:px-6">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <Image
            src={"/arc-logo-black.png"}
            alt="Acme Inc"
            width={40}
            height={40}
          ></Image>
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="hidden border-2 border-[#979797] items-center gap-3 lg:gap-6 text-sm font-medium lg:flex bg-gradient-to-tr from-[#E8E8E8] to-[#D1D1D1] rounded-2xl p-2 lg:p-3 px-8 lg:px-24 space-x-4 lg:space-x-8">
          {links.map((link) => (
            <Link
              key={link}
              href="#"
              className="hover:text-gray-900 text-black font-poppins text-sm lg:text-base whitespace-nowrap"
              prefetch={false}
            >
              {link}
            </Link>
          ))}
        </nav>
        <Button
          onClick={() => setIsOpen(true)}
          variant={"outline"}
          className="rounded-[1.2rem] capitalize text-base lg:text-xl py-4 lg:py-6 px-3 lg:px-4 border-2 text-black border-[#161616] hover:bg-[#161616] hover:text-white font-poppins"
        >
          <span className="hidden sm:inline">Join the tribe</span>
          <span className="sm:hidden">Join</span>
          <MoveUpRight size={24} className="lg:hidden" />
          <MoveUpRight size={36} className="hidden lg:block" />
        </Button>
      </div>
      <WaitlistDialog isOpen={isOpen} setIsOpen={setIsOpen} />
    </motion.header>
  );
}
