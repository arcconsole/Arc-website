import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="px-2 w-full ">
      <div className="bg-[#161616] w-full rounded-t-xl flex justify-between p-5">
        <Image
          src={"/arc-logo-white.png"}
          height={50}
          width={50}
          alt="ARC Logo"
        ></Image>
        jfhrhu
      </div>
    </footer>
  );
};

export default Footer;
