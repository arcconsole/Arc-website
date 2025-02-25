"use client";

import React, { useState } from "react";
import { CircleX, MoveUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Input } from "./input";
import { cn } from "@/lib/utils";
import { GridPattern } from "./grid-pattern";
import { Button } from "./button";
import { FaDiscord } from "react-icons/fa";
import axios from "axios";
const WaitlistDialog = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const formRef = React.useRef<HTMLFormElement>(null!);

  const handleClose = () => {
    setIsOpen(false);
    setIsFlipped(false);
  };

  const handelFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    // const data = {
    //   name: formData.get("name"),
    //   phone: formData.get("phone"),
    //   email: formData.get("email"),
    // };

    // const sheet_url = process.env.NEXT_PUBLIC_SHEET_URL;

    // if (!sheet_url) {
    //   console.error("Sheet URL not found");
    //   return;
    // }

    const waitlist_id = process.env.NEXT_PUBLIC_WAITLIST_ID;
    const referral_link = document.URL;
    const data = {
      // name: formData.get("name"),
      // phone: formData.get("phone"),
      email: formData.get("email"),
      waitlist_id: waitlist_id,
      referral_link: referral_link,
    };
    console.log("data", data);

    // fetch(sheet_url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    //   mode: "no-cors",
    // })
    //   .then(() => {
    //     setTimeout(() => {
    //       setIsFlipped(true);
    //     }, 700);
    //   })
    //   .catch((err) => {
    //     console.error("Error submitting form", err);
    //   });
    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_WAITLIST_URL as string,
        data
      );
      console.log("response", response);
      setTimeout(() => {
        setIsFlipped(true);
      }, 700);
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  return (
    <>
      {isOpen && (
        <div
          style={{ perspective: "1000px" }}
          className="fixed z-50 top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center"
        >
          {/* Front Side */}
          <motion.div
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            style={{
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
              position: "relative",
            }}
            transition={{ duration: 0.5 }}
            className="max-w-7xl w-full max-h-[80vh] h-full"
          >
            <div className="text-[#161616] bg-white p-4 rounded-lg shadow-lg w-full h-full  relative overflow-hidden flex flex-col items-center justify-center gap-12">
              <GridPattern
                squares={[
                  [4, 4],
                  [5, 1],
                  [8, 2],
                  [5, 3],
                  [5, 5],
                  [10, 10],
                  [12, 15],
                  [15, 10],
                  [10, 15],
                  [15, 10],
                  [10, 15],
                  [15, 10],
                ]}
                className={cn(
                  "[mask-image:linear-gradient(to_bottom,white,transparent,transparent)] ",
                  "inset-x-0 h-[150%]"
                )}
              />
              <span
                className="close cursor-pointer absolute md:top-10 md:right-10 top-5 right-5 z-10"
                onClick={handleClose}
              >
                <CircleX />
              </span>
              <div className="flex flex-col text-center gap-5">
                <h1 className="text-6xl font-ethnocentric">
                  Join the Waitlist
                </h1>
                <p className="font-poppins text-lg">
                  Sign up to get latest updates straight to your inbox.
                </p>
              </div>
              <div className="w-full sm:w-3/5 px-4 sm:px-32 p-4 sm:p-8 rounded-3xl">
                <form ref={formRef} className="space-y-6 relative">
                  {/* Name Input */}
                  {/* <div>
                    <Input
                      name="name"
                      type="text"
                      placeholder="Name"
                      className="w-full h-12 px-4 py-3 bg-gradient-to-tr from-[#E8E8E8] to-[#D1D1D1] text-black placeholder-gray-400 border border-[#979797] rounded-full focus:ring-2 focus:ring-purple-500 focus:outline-none"
                    />
                  </div> */}
                  {/* Phone Number Input */}
                  {/* <div>
                    <Input
                      name="phone"
                      type="number"
                      placeholder="Phone Number"
                      className="w-full h-12 px-4 py-3 bg-gradient-to-tr from-[#E8E8E8] to-[#D1D1D1] text-black placeholder-gray-400 border border-[#979797] rounded-full focus:ring-2 focus:ring-purple-500 focus:outline-none"
                    />
                  </div> */}
                  {/* Email Input */}
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Email"
                      className="w-full h-12 px-4 py-3 bg-gradient-to-tr from-[#E8E8E8] to-[#D1D1D1] text-black placeholder-gray-400 border border-[#979797] rounded-full focus:ring-2 focus:ring-purple-500 focus:outline-none"
                    />
                  </div>
                </form>
              </div>
              <Button
                onClick={handelFormSubmit}
                variant={"outline"}
                className="rounded-[1.2rem] capitalize text-lg py-6 border-[#161616] hover:bg-[#161616] hover:text-white font-poppins-medium border-2"
              >
                Join Now
                <MoveUpRight strokeWidth={2.5} />
              </Button>
            </div>
          </motion.div>

          {/* Back Side */}
          <motion.div
            initial={{ rotateY: -180 }}
            animate={{ rotateY: isFlipped ? 0 : -180 }}
            style={{
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
              position: "absolute",
            }}
            transition={{ duration: 0.5 }}
            className="max-w-7xl w-full max-h-[80vh] h-full"
          >
            <div className="text-[#161616] bg-white p-4 rounded-lg shadow-lg w-full h-full relative overflow-hidden flex flex-col items-center justify-center gap-12">
              <GridPattern
                squares={[
                  [4, 4],
                  [5, 1],
                  [8, 2],
                  [5, 3],
                  [5, 5],
                  [10, 10],
                  [12, 15],
                  [15, 10],
                  [10, 15],
                  [15, 10],
                  [10, 15],
                  [15, 10],
                ]}
                className={cn(
                  "[mask-image:linear-gradient(to_bottom,white,transparent,transparent)] ",
                  "inset-x-0 h-[150%]"
                )}
              />

              <span
                className="close cursor-pointer absolute md:top-10 md:right-10 top-5 right-5 z-10"
                onClick={handleClose}
              >
                <CircleX />
              </span>
              <div className="flex flex-col text-center gap-8">
                <h1 className="text-6xl font-ethnocentric">
                  Enter the circle.
                </h1>
                <p className="text-xl max-w-1/2">
                  Thank you for being an early access member. Don’t <br /> miss
                  out the latest updates. Join our Discord.
                </p>
              </div>

              <Button
                onClick={() =>
                  window.open(
                    "https://discord.gg/KzaVeEgcVQ",
                    "_blank",
                    "noopener noreferrer"
                  )
                }
                variant={"outline"}
                className="rounded-[1.2rem] capitalize text-lg py-6 border-[#161616] hover:bg-[#161616] hover:text-white font-poppins-medium border-2"
              >
                <FaDiscord />
                Discord Server
                <MoveUpRight strokeWidth={2.5} />
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default WaitlistDialog;
