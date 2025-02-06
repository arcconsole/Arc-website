"use client";

import { DotPattern } from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="min-h-screen relative grid place-content-center">
      <div className="mt-60 flex flex-col items-center justify-center font-poppins-medium text-5xl text-center space-y-6">
<<<<<<< HEAD
        <div>
          Gaming Redefined.
          <br />
          Play More. Play Better.
        </div>
=======
        <div className="flex items-center justify-center space-x-4 relative">
          <span className="absolute left-0 -translate-x-32">
            <svg
              width="100"
              height="100"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M38.7774 79.1842C37.6818 79.5942 36.5367 79.8571 35.372 79.966C31.8582 80.2444 28.3752 79.1345 25.6703 76.8744C22.9654 74.6144 21.2541 71.3841 20.9036 67.8768L18.7267 45.9932C18.5345 44.2282 18.6969 42.4425 19.2044 40.741C19.712 39.0396 20.5544 37.4568 21.6821 36.0854C22.7807 34.7515 24.1331 33.6488 25.6609 32.8412C27.1887 32.0336 28.8615 31.5372 30.5825 31.3808C32.4151 31.2228 34.2605 31.4473 36.0017 32.0399C37.743 32.6326 39.3421 33.5806 40.6977 34.8237L46.5582 32.6388C46.7662 30.8108 47.3533 29.0463 48.2818 27.4579C49.2103 25.8696 50.4598 24.4924 51.9506 23.4142C53.354 22.4058 54.9435 21.6859 56.6271 21.2962C58.3107 20.9065 60.0548 20.8547 61.7586 21.1439C63.5011 21.4427 65.1672 22.0833 66.6609 23.0289C68.1547 23.9745 69.4466 25.2064 70.4621 26.6536L83.1595 44.6661C85.2066 47.5516 86.0365 51.1265 85.4698 54.6187C84.9032 58.1109 82.9855 61.24 80.131 63.33C78.7277 64.3384 77.1381 65.0583 75.4546 65.448C73.771 65.8378 72.0268 65.8895 70.3231 65.6004C68.5793 65.3054 66.9117 64.6664 65.4175 63.7204C63.9232 62.7745 62.6321 61.5406 61.6195 60.0907L60.4743 58.2584L46.9502 63.3006L47.1545 65.4323C47.3382 67.1912 47.1701 68.9691 46.6598 70.6624C46.1495 72.3557 45.3072 73.9305 44.1822 75.295C42.7446 77.0341 40.8832 78.3736 38.7774 79.1842ZM28.8803 36.6623C27.5224 37.175 26.32 38.0301 25.39 39.1445C23.944 40.9205 23.2603 43.197 23.4887 45.4758L25.6656 67.3594C25.8814 69.6171 26.9742 71.7 28.7093 73.1606C30.4444 74.6212 32.6833 75.3428 34.9447 75.1704C36.0311 75.0717 37.0872 74.7586 38.0519 74.2491C39.0165 73.7397 39.8705 73.044 40.5645 72.2023C41.2875 71.327 41.8281 70.316 42.1546 69.2287C42.4811 68.1414 42.5869 66.9998 42.4658 65.871L41.8885 60.0531L62.1746 52.4898L65.5244 57.2742C66.1757 58.203 67.0042 58.994 67.9621 59.6017C68.92 60.2095 69.9886 60.6219 71.1065 60.8155C72.1862 60.9953 73.2909 60.9603 74.3572 60.7125C75.4234 60.4648 76.4303 60.0091 77.3202 59.3717C79.1471 58.0261 80.3692 56.014 80.7209 53.7725C81.0726 51.531 80.5255 49.2413 79.1985 47.4009L66.5179 29.4334C65.8728 28.5027 65.0491 27.7095 64.0947 27.1001C63.1402 26.4907 62.0741 26.0772 60.9584 25.8837C59.8786 25.7039 58.7739 25.7389 57.7077 25.9866C56.6414 26.2344 55.6345 26.69 54.7446 27.3275C53.6504 28.1329 52.7642 29.1878 52.1596 30.4044C51.555 31.6211 51.2494 32.9645 51.2682 34.323L51.2818 36.0124L39.3355 40.4663L38.2399 39.1803C37.3604 38.1409 36.2456 37.3262 34.9882 36.8037C33.7308 36.2813 32.3669 36.0663 31.0098 36.1764C30.2819 36.2452 29.566 36.4085 28.8803 36.6623Z"
                fill="black"
              />
              <path
                d="M35.9867 54.5502C35.095 54.8826 34.1249 54.9432 33.1989 54.7242C32.2729 54.5053 31.4326 54.0166 30.7842 53.3201C30.1359 52.6236 29.7087 51.7504 29.5566 50.8111C29.4046 49.8718 29.5344 48.9085 29.9298 48.0429C30.3252 47.1774 30.9684 46.4486 31.778 45.9486C32.5877 45.4487 33.5274 45.2 34.4783 45.2341C35.4293 45.2682 36.3487 45.5835 37.1205 46.1402C37.8922 46.6968 38.4816 47.4698 38.814 48.3615C39.2597 49.5571 39.2123 50.8808 38.682 52.0414C38.1518 53.202 37.1823 54.1044 35.9867 54.5502Z"
                fill="black"
              />
              <path
                d="M60.5129 37.7067C61.7577 37.2426 62.3906 35.8572 61.9265 34.6124C61.4624 33.3675 60.077 32.7346 58.8321 33.1987C57.5873 33.6628 56.9544 35.0482 57.4185 36.2931C57.8826 37.5379 59.268 38.1709 60.5129 37.7067Z"
                fill="black"
              />
              <path
                d="M63.8742 46.7224C65.119 46.2582 65.752 44.8729 65.2878 43.628C64.8237 42.3831 63.4383 41.7502 62.1935 42.2143C60.9486 42.6784 60.3157 44.0638 60.7798 45.3087C61.2439 46.5536 62.6293 47.1865 63.8742 46.7224Z"
                fill="black"
              />
              <path
                d="M57.6847 43.8942C58.9296 43.4301 59.5625 42.0447 59.0984 40.7999C58.6343 39.555 57.2489 38.9221 56.004 39.3862C54.7592 39.8503 54.1262 41.2357 54.5904 42.4806C55.0545 43.7254 56.4399 44.3584 57.6847 43.8942Z"
                fill="black"
              />
              <path
                d="M66.7023 40.531C67.9472 40.0668 68.5801 38.6814 68.116 37.4366C67.6519 36.1917 66.2665 35.5588 65.0216 36.0229C63.7767 36.487 63.1438 37.8724 63.6079 39.1173C64.0721 40.3622 65.4574 40.9951 66.7023 40.531Z"
                fill="black"
              />
            </svg>
          </span>
          Gaming Redefined.
        </div>
        <div className="flex items-center justify-center space-x-4 relative">
          Play More.
          <span className="absolute right-0 translate-x-24">
            <svg
              width="83"
              height="82"
              viewBox="0 0 83 82"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M47.7308 18.6594C55.6418 20.7398 60.299 28.5362 58.3487 35.9527C57.1337 40.5728 55.3261 42.6135 53.2557 44.3569C52.7875 44.746 52.2793 45.1516 51.7312 45.5736C49.8287 47.0521 47.5404 48.8335 45.4879 51.7284C45.0673 52.3258 44.581 52.8743 44.0382 53.3634L43.8301 53.5398C43.3748 53.9261 42.8796 54.2626 42.3529 54.5437C40.9916 55.2603 39.5197 55.4971 38.139 55.1341C36.7611 54.7717 35.5934 53.8407 34.758 52.5464C34.4377 52.0417 34.1724 51.5042 33.9664 50.943L33.8747 50.6878C33.6427 49.9958 33.4889 49.28 33.4162 48.5538C33.0539 45.0211 31.9372 42.3471 31.0089 40.1214C30.7543 39.523 30.5113 38.9198 30.2801 38.3121C29.3365 35.7819 28.7645 33.1126 29.9802 28.4897C31.9298 21.0759 39.8226 16.5798 47.7308 18.6594ZM46.9664 56.3548C47.6983 55.6807 48.3504 54.9365 48.9068 54.1498C50.5691 51.8051 52.2267 50.5107 54.043 49.0963C54.6608 48.6145 55.297 48.1175 55.9577 47.5604C58.5922 45.3414 60.9371 42.5869 62.4021 37.0158C64.9798 27.2136 58.7933 17.2355 48.7966 14.6067C38.7998 11.9778 28.5052 17.6217 25.9268 27.4267C24.4631 32.9924 25.149 36.5468 26.3511 39.7747C26.6523 40.5847 26.9617 41.3305 27.2625 42.0537C28.1481 44.1787 28.9545 46.1211 29.2484 48.9801C29.3458 49.9388 29.5501 50.9082 29.853 51.8545L28.8784 57.9995C28.5591 60.0237 29.0028 62.0943 30.1234 63.81C31.2441 65.5256 32.9618 66.7641 34.9436 67.2852C36.9254 67.8064 39.0302 67.5731 40.8498 66.6307C42.6695 65.6882 44.0743 64.1037 44.7921 62.1844L46.9664 56.3548ZM41.3943 59.3092L40.8676 60.719C40.5155 61.6685 39.8227 62.4531 38.9241 62.9201C38.0255 63.3871 36.9853 63.5031 36.0059 63.2455C35.0265 62.9879 34.178 62.3753 33.6254 61.5266C33.0727 60.678 32.8555 59.6542 33.0161 58.6543L33.2537 57.1684C34.3118 58.088 35.5846 58.7953 37.0733 59.1868C38.5593 59.5776 40.0188 59.5859 41.3916 59.3085M22.3748 9.87988C22.8276 9.55824 23.3896 9.42956 23.9373 9.52212C24.485 9.61468 24.9735 9.92091 25.2954 10.3735L28.4601 14.8165C28.7666 15.2696 28.8838 15.8245 28.7867 16.3628C28.6896 16.9011 28.3858 17.3801 27.9403 17.6974C27.4948 18.0147 26.9428 18.1453 26.4023 18.0611C25.8619 17.9769 25.3757 17.6847 25.0478 17.247L21.8832 12.8039C21.5611 12.3514 21.4318 11.7894 21.5239 11.2416C21.6159 10.6938 21.9225 10.2023 22.3748 9.87988ZM74.1195 23.4902C74.2364 23.7395 74.3029 24.0094 74.3154 24.2845C74.3279 24.5596 74.286 24.8345 74.1922 25.0934C74.0983 25.3523 73.9544 25.5902 73.7685 25.7934C73.5827 25.9966 73.3586 26.1612 73.1091 26.2778L68.1682 28.5893C67.9181 28.7137 67.6456 28.7869 67.3668 28.8044C67.0879 28.822 66.8084 28.7836 66.5446 28.6915C66.2808 28.5995 66.0381 28.4556 65.8308 28.2683C65.6234 28.0811 65.4556 27.8543 65.3372 27.6012C65.2188 27.3481 65.1522 27.074 65.1414 26.7948C65.1305 26.5156 65.1756 26.2371 65.274 25.9756C65.3723 25.7141 65.522 25.4749 65.7142 25.2721C65.9064 25.0693 66.1372 24.907 66.393 24.7947L71.3339 22.4832C71.8371 22.2479 72.4131 22.2221 72.9353 22.4115C73.4576 22.6008 73.884 22.9871 74.1195 23.4902ZM15.4889 23.1797C15.6303 22.6423 15.9793 22.183 16.4592 21.9029C16.9392 21.6228 17.5107 21.5449 18.0482 21.6862L23.4518 23.1072C23.9893 23.2486 24.4485 23.5976 24.7286 24.0775C25.0087 24.5575 25.0866 25.129 24.9453 25.6665C24.804 26.2039 24.455 26.6632 23.975 26.9433C23.4951 27.2233 22.9235 27.3013 22.3861 27.16L16.9824 25.739C16.445 25.5976 15.9857 25.2486 15.7056 24.7686C15.4256 24.2887 15.3476 23.7171 15.4889 23.1797ZM64.1218 35.9688C64.2631 35.4314 64.6122 34.9721 65.0921 34.692C65.5721 34.4119 66.1436 34.334 66.6811 34.4753L72.0847 35.8963C72.6221 36.0376 73.0814 36.3867 73.3615 36.8666C73.6416 37.3466 73.7195 37.9181 73.5782 38.4555C73.4369 38.993 73.0878 39.4522 72.6079 39.7323C72.1279 40.0124 71.5564 40.0904 71.0189 39.949L65.6153 38.528C65.0779 38.3867 64.6186 38.0377 64.3385 37.5577C64.0584 37.0778 63.9805 36.5062 64.1218 35.9688ZM23.4761 35.8671C23.59 36.4107 23.4833 36.9774 23.1795 37.4424C22.8758 37.9075 22.3998 38.2329 21.8562 38.3471L17.2706 39.3077C17.0004 39.3663 16.7212 39.3709 16.4492 39.3211C16.1772 39.2714 15.9177 39.1683 15.6857 39.0177C15.4538 38.8672 15.2539 38.6723 15.0976 38.4441C14.9414 38.216 14.8318 37.9592 14.7753 37.6885C14.7187 37.4178 14.7163 37.1386 14.7682 36.867C14.8201 36.5954 14.9252 36.3367 15.0776 36.1059C15.2299 35.8751 15.4264 35.6768 15.6557 35.5223C15.8851 35.3678 16.1428 35.2603 16.4139 35.2058L20.9995 34.2452C21.5434 34.1316 22.1102 34.2387 22.5752 34.543C23.0401 34.8473 23.3625 35.3231 23.4761 35.8671ZM60.3857 45.5733C60.7521 45.1563 61.2689 44.9017 61.8227 44.8654C62.3765 44.8291 62.9222 45.014 63.3398 45.3795L66.8597 48.4716C67.0689 48.6524 67.2404 48.8728 67.364 49.1201C67.4877 49.3674 67.5612 49.6368 67.5803 49.9127C67.5994 50.1885 67.5637 50.4654 67.4753 50.7274C67.3868 50.9894 67.2474 51.2313 67.065 51.4392C66.8826 51.6471 66.6609 51.8168 66.4126 51.9385C66.1644 52.0603 65.8944 52.1317 65.6184 52.1486C65.3424 52.1656 65.0658 52.1277 64.8045 52.0372C64.5432 51.9468 64.3024 51.8054 64.0959 51.6215L60.5761 48.5293C60.1584 48.1628 59.9034 47.6454 59.8672 47.0909C59.831 46.5364 60.0193 45.991 60.3857 45.5733Z"
                fill="black"
              />
            </svg>
          </span>
        </div>
        <div>Play Better. </div>
>>>>>>> 2d3fdb5ec07aa8e5e0aed34d9352569e597beef4
        <Button
          variant={"outline"}
          className="rounded-full capitalize text-xl py-6 border-[#161616] hover:bg-[#161616] hover:text-white font-poppins"
        >
          Join the tribe !!
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
