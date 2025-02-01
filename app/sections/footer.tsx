import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
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
      name: "Twitter",
      icon: <FaXTwitter size={21} />,
      link: "https://twitter.com/arctheagency",
    },
    {
      name: "Email",
      icon: <IoMailOutline size={21} />,
      link: "mailto:",
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
      link: "/terms",
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
    <footer className="px-8 w-full ">
      <div className="bg-[#161616] w-full rounded-t-3xl flex justify-between items-center p-5">
        <div className="p-4 pt-8">
          <Image
            src={"/arc-logo-white.png"}
            height={50}
            width={100}
            alt="ARC Logo"
            className="cursor-pointer object-contain"
          ></Image>
        </div>

        <div className="py-10 grid grid-flow-col grid-rows-2 gap-3 gap-x-24 font-poppins items-center justify-center">
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
        <div className="flex flex-col gap-5 items-end justify-center text-white">
          <div className="flex  space-x-4">
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
          <p className="text-right font-poppins">
            @2025 Arc Console <br /> Stryker interactive Technologies pvt ltd
            <br />
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
