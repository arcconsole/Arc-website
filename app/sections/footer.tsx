import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLinkedin, FaInstagram, FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";

const Footer = () => {
  const socials = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={21} />,
      link: "https://www.linkedin.com/in/arctheagency/",
    },
    {
      name: "Instagram",
      icon: <FaInstagram size={21} />,
      link: "https://www.instagram.com/arctheagency/",
    },
    {
      //discord
      name: "Discord",
      icon: <FaDiscord size={21} />,
      link: "https://discord.gg/KzaVeEgcVQ",
    },
    {
      name: "Twitter",
      icon: <FaXTwitter size={21} />,
      link: "https://twitter.com/arctheagency",
    },
    {
      name: "Email",
      icon: <IoMailOutline size={21} />,
      link: "mailto:product@arccoonsoles.com",
    },
  ];

  const otherLinks = [
    {
      name: "home",
      link: "/privacy",
    },
    {
      name: "privacy ",
      link: "/privacy",
    },
    {
      name: "Terms of use",
      link: "/term",
    },
    {
      name: "code of conduct",
      link: "/code-of-conduct",
    },
    {
      name: "shipping",
      link: "/shipping",
    },
    {
      name: "contact",
      link: "/contact",
    },
    {
      name: "refunds",
      link: "/refunds",
    },
    {
      name: "media kit",
      link: "/media-kit",
    },
  ];

  return (
    <footer className="px-4 md:px-8 w-full">
      <div className="bg-[#161616] w-full rounded-t-3xl flex flex-col md:flex-row md:justify-between justify-center items-center p-4 md:p-5">
        <div className="p-4 pt-6 md:pt-8 md:hidden flex justify-center w-full">
          <Image
            src={"/arc-logo-white.png"}
            height={45}
            width={90}
            alt="ARC Logo"
            className="cursor-pointer object-contain"
          ></Image>
        </div>

        <div className="p-4 pt-8 hidden md:block">
          <Image
            src={"/arc-logo-white.png"}
            height={50}
            width={100}
            alt="ARC Logo"
            className="cursor-pointer object-contain"
          ></Image>
        </div>

        <div className="py-6 md:py-10 md:grid grid-flow-col grid-rows-2 gap-3 gap-x-24 font-poppins items-center justify-center hidden">
          {otherLinks.map((link, index) => (
            <Link
              key={index}
              href={link.link}
              className="text-white capitalize"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-4 md:gap-5 items-center md:items-end justify-center text-white w-full md:w-auto py-2">
          <div className="flex space-x-6 md:space-x-5">
            {socials.map((social, index) => (
              <Link
                key={index}
                href={social.link}
                target="_blank"
                className="text-white"
              >
                {social.icon}
              </Link>
            ))}
          </div>
          <p className="text-center md:text-right font-poppins text-sm md:text-base max-md:mt-4">
            @2025 ArcConsoles <br /> Zenali Innovative Technologies Pvt Ltd
            <br />
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
