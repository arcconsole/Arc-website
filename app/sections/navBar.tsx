"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import WaitlistDialog from "@/components/ui/wait-list-dialog";
import { useState } from "react";

const links = ["Overview", "Community", "Support", "Forum"];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed  top-0 z-50 w-full bg-transparent">
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
        <nav className="hidden border-2 border-[#979797] items-center gap-6 text-sm font-medium md:flex bg-gradient-to-tr from-[#E8E8E8] to-[#D1D1D1] rounded-2xl p-3 px-24 space-x-8">
          {links.map((link) => (
            <Link
              key={link}
              href="#"
              className="hover:text-gray-900 text-black font-poppins text-base"
              prefetch={false}
            >
              {link}
            </Link>
          ))}
        </nav>
        <Button
          onClick={() => setIsOpen(true)}
          variant={"outline"}
          className="rounded-[1.2rem] capitalize text-lg py-6 border-[#161616] hover:bg-[#161616] hover:text-white font-poppins"
        >
          Join the tribe
        </Button>
      </div>
      <WaitlistDialog isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
}
