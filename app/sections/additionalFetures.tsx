import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const AdditionalFetures = () => {
  const features: FeatureProps[] = [
    {
      icon: <DeviceSVG />,
      title: "Remote Play",
      description: "Your PC/PS/XBOX",
    },
    {
      icon: <ScreenSVG />,
      title: '7" 1080P Screen',
      description: "16:9",
    },
    {
      icon: <BatterySVG />,
      title: "12 HRS",
      description: "Battery Life",
    },
    {
      icon: <JoystickSVG />,
      title: "Hall Sensor",
      description: "Joysticks",
    },
    {
      icon: <WeightSVG />,
      title: "Lightweight",
      description: "430g",
    },
    {
      icon: <GyroSVG />,
      title: "Gyro",
      description: "Supported",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center relative">
      <div className="flex max-sm:flex-wrap gap-8 text-black justify-center items-center w-full md:max-w-7xl text-sm absolute top-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 items-center justify-center w-1/6 sm:w-1/3 lg:w-1/6"
          >
            {feature.icon}

            <div className="flex flex-col text-center font-poppins">
              <h2 className="">{feature.title}</h2>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Image
        src={"/AdditionalFeatures.png"}
        height={2100}
        width={2100}
        alt="ARC Logo"
        className=" object-contain max-w-[95vw] mx-auto"
        draggable={false}
      ></Image>
      <Button
        variant={"outline"}
        className="absolute bottom-20 right-20 rounded-full capitalize text-xl py-6 border-[#161616] hover:bg-[#161616] hover:text-white"
      >
        Join the waitlist
      </Button>
    </div>
  );
};

export default AdditionalFetures;

function DeviceSVG() {
  return (
    <svg
      width="86"
      height="59"
      viewBox="0 0 86 59"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M51.1472 14.1113C51.4719 14.1113 51.7351 13.8481 51.7351 13.5234C51.7351 13.1987 51.4719 12.9355 51.1472 12.9355V14.1113ZM28.2188 14.1113H31.4942V12.9355H28.2188V14.1113ZM32.5861 14.1113H39.1371V12.9355H32.5861V14.1113ZM40.2289 14.1113H46.7799V12.9355H40.2289V14.1113ZM47.8717 14.1113H51.1472V12.9355H47.8717V14.1113Z"
        fill="#161616"
      />
      <path
        d="M28.2211 15.2852V34.0982C27.6331 36.4499 24.1057 37.6257 22.342 34.0982V28.8071C22.342 27.0433 17.6387 25.2796 17.0508 28.8071V37.6257"
        stroke="#161616"
        stroke-width="1.17582"
      />
      <rect
        x="51.7383"
        y="1.17582"
        width="32.9229"
        height="56.4393"
        rx="1.17582"
        stroke="#161616"
        stroke-width="2.35164"
      />
      <rect
        x="0.587909"
        y="38.2129"
        width="41.1536"
        height="19.9889"
        rx="9.99446"
        stroke="#161616"
        stroke-width="1.17582"
      />
      <circle cx="13.5275" cy="47.6193" r="4.11536" fill="#161616" />
      <circle cx="68.1993" cy="45.8556" r="3.52746" fill="#161616" />
      <circle cx="68.1993" cy="38.8008" r="1.17582" fill="#161616" />
      <circle cx="32.922" cy="45.8555" r="2.35164" fill="#161616" />
      <circle cx="26.4551" cy="51.1465" r="1.76373" fill="#161616" />
      <path
        d="M58.1992 8.82031H78.1881"
        stroke="#161616"
        stroke-width="2.35164"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M58.1992 17.0508H78.1881"
        stroke="#161616"
        stroke-width="2.35164"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <rect
        x="58.2031"
        y="22.9278"
        width="19.9889"
        height="9.40655"
        stroke="#161616"
        stroke-width="1.17582"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

function ScreenSVG() {
  return (
    <svg
      width="71"
      height="45"
      viewBox="0 0 71 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1.41215"
        y="1.23051"
        width="68.1975"
        height="42.3295"
        rx="2.35164"
        stroke="#161616"
        stroke-width="2.35164"
      />
      <path
        d="M7.29297 25.9219V37.6801C7.29297 38.3294 7.8194 38.8559 8.46879 38.8559H20.227"
        stroke="#161616"
        stroke-width="2.35164"
        stroke-linecap="round"
      />
      <path
        d="M64.9082 18.8672V7.109C64.9082 6.45962 64.3818 5.93318 63.7324 5.93318H51.9742"
        stroke="#161616"
        stroke-width="2.35164"
        stroke-linecap="round"
      />
      <path
        d="M24.6975 27.6367H22.2138V20.8367C22.2138 20.6492 22.2165 20.4188 22.2218 20.1455C22.2272 19.8668 22.2352 19.5828 22.2459 19.2935C22.2566 18.9987 22.2674 18.7335 22.2781 18.4977C22.2191 18.5674 22.0986 18.6879 21.9164 18.8594C21.7395 19.0255 21.5734 19.1756 21.418 19.3095L20.0677 20.3946L18.87 18.8996L22.6559 15.8854H24.6975V27.6367ZM27.8965 22.6452C27.8965 21.9701 27.9447 21.3029 28.0412 20.6438C28.143 19.9794 28.3172 19.3551 28.5637 18.771C28.8101 18.1816 29.1558 17.6618 29.6005 17.2117C30.0453 16.7562 30.6106 16.3998 31.2965 16.1426C31.9824 15.8801 32.813 15.7488 33.7882 15.7488C34.0187 15.7488 34.2866 15.7595 34.592 15.7809C34.9028 15.797 35.16 15.8265 35.3637 15.8693V17.8547C35.1493 17.8065 34.9189 17.769 34.6724 17.7422C34.4313 17.71 34.1901 17.6939 33.949 17.6939C32.9737 17.6939 32.2182 17.8493 31.6823 18.1601C31.1518 18.4709 30.7767 18.9023 30.557 19.4542C30.3427 20.0008 30.2168 20.6385 30.1793 21.3672H30.2837C30.4338 21.1046 30.6213 20.8716 30.8464 20.6679C31.0768 20.4643 31.3555 20.3035 31.6823 20.1857C32.0092 20.0624 32.3923 20.0008 32.8317 20.0008C33.5176 20.0008 34.1124 20.1481 34.6161 20.4429C35.1198 20.7322 35.5083 21.1529 35.7816 21.7048C36.0549 22.2567 36.1915 22.9292 36.1915 23.7223C36.1915 24.569 36.0281 25.2977 35.7012 25.9086C35.3744 26.5195 34.9109 26.9883 34.3107 27.3152C33.7159 27.6367 33.0086 27.7975 32.1887 27.7975C31.5886 27.7975 31.0286 27.6957 30.5088 27.492C29.989 27.2831 29.5336 26.9669 29.1424 26.5436C28.7512 26.1202 28.4458 25.5871 28.2261 24.944C28.0064 24.2957 27.8965 23.5294 27.8965 22.6452ZM32.1405 25.8121C32.6281 25.8121 33.0246 25.646 33.3301 25.3138C33.6355 24.9816 33.7882 24.4618 33.7882 23.7545C33.7882 23.1811 33.6543 22.731 33.3863 22.4041C33.1238 22.0719 32.7246 21.9058 32.1887 21.9058C31.8243 21.9058 31.5028 21.9888 31.2242 22.1549C30.9509 22.3157 30.7392 22.522 30.5892 22.7738C30.4391 23.0203 30.3641 23.2749 30.3641 23.5374C30.3641 23.8107 30.4016 24.0813 30.4767 24.3493C30.5517 24.6172 30.6642 24.861 30.8142 25.0807C30.9643 25.3004 31.1492 25.4772 31.3689 25.6112C31.5939 25.7452 31.8511 25.8121 32.1405 25.8121ZM37.6785 26.4873C37.6785 25.9836 37.8152 25.6299 38.0885 25.4263C38.3671 25.2227 38.702 25.1209 39.0932 25.1209C39.4737 25.1209 39.8005 25.2227 40.0738 25.4263C40.3525 25.6299 40.4918 25.9836 40.4918 26.4873C40.4918 26.9696 40.3525 27.3179 40.0738 27.5322C39.8005 27.7466 39.4737 27.8537 39.0932 27.8537C38.702 27.8537 38.3671 27.7466 38.0885 27.5322C37.8152 27.3179 37.6785 26.9696 37.6785 26.4873ZM37.6785 19.8481C37.6785 19.3444 37.8152 18.9907 38.0885 18.7871C38.3671 18.5835 38.702 18.4816 39.0932 18.4816C39.4737 18.4816 39.8005 18.5835 40.0738 18.7871C40.3525 18.9907 40.4918 19.3444 40.4918 19.8481C40.4918 20.3357 40.3525 20.6867 40.0738 20.901C39.8005 21.11 39.4737 21.2145 39.0932 21.2145C38.702 21.2145 38.3671 21.11 38.0885 20.901C37.8152 20.6867 37.6785 20.3357 37.6785 19.8481ZM50.2577 20.901C50.2577 21.5762 50.2068 22.246 50.105 22.9105C50.0086 23.5749 49.8371 24.2019 49.5906 24.7913C49.3441 25.3754 48.9985 25.8952 48.5537 26.3507C48.109 26.8008 47.5436 27.1544 46.8577 27.4117C46.1718 27.6689 45.3413 27.7975 44.366 27.7975C44.1356 27.7975 43.865 27.7868 43.5542 27.7653C43.2434 27.7492 42.9862 27.7225 42.7826 27.6849V25.6916C42.9969 25.7452 43.2246 25.788 43.4658 25.8202C43.7069 25.847 43.9507 25.8604 44.1972 25.8604C45.1778 25.8604 45.9334 25.705 46.4639 25.3942C46.9997 25.0834 47.3748 24.652 47.5892 24.1001C47.8089 23.5481 47.9348 22.9105 47.967 22.1871H47.8705C47.7151 22.4443 47.5302 22.6774 47.3159 22.8864C47.1069 23.09 46.839 23.2534 46.5121 23.3767C46.1852 23.4946 45.7699 23.5535 45.2662 23.5535C44.5964 23.5535 44.0123 23.4088 43.514 23.1195C43.021 22.8247 42.6379 22.4014 42.3646 21.8495C42.0967 21.2922 41.9627 20.6197 41.9627 19.832C41.9627 18.98 42.1235 18.2512 42.445 17.6457C42.7718 17.0348 43.2354 16.566 43.8355 16.2391C44.4357 15.9122 45.143 15.7488 45.9575 15.7488C46.5577 15.7488 47.1176 15.8533 47.6374 16.0623C48.1572 16.2659 48.6127 16.5794 49.0038 17.0027C49.4004 17.426 49.7085 17.9619 49.9282 18.6102C50.1479 19.2586 50.2577 20.0222 50.2577 20.901ZM46.0057 17.7422C45.5235 17.7422 45.1296 17.9083 44.8242 18.2405C44.5187 18.5727 44.366 19.0925 44.366 19.7998C44.366 20.3678 44.4973 20.818 44.7599 21.1502C45.0224 21.4824 45.4216 21.6485 45.9575 21.6485C46.3272 21.6485 46.6488 21.5682 46.922 21.4074C47.1953 21.2413 47.407 21.035 47.557 20.7885C47.7124 20.5366 47.7901 20.2794 47.7901 20.0169C47.7901 19.7436 47.7526 19.473 47.6776 19.205C47.6026 18.9371 47.49 18.6933 47.34 18.4736C47.19 18.2539 47.0024 18.0771 46.7774 17.9431C46.5577 17.8091 46.3004 17.7422 46.0057 17.7422Z"
        fill="#161616"
      />
    </svg>
  );
}

function BatterySVG() {
  return (
    <svg
      width="80"
      height="36"
      viewBox="0 0 80 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.86021"
        y="1.53013"
        width="67.4664"
        height="33.7332"
        rx="4.72264"
        stroke="#161616"
        stroke-width="1.34933"
      />
      <rect
        x="57.0078"
        y="7.60156"
        width="8.09596"
        height="22.9386"
        fill="#161616"
      />
      <rect
        x="68.5371"
        y="7.60156"
        width="10.7946"
        height="22.9386"
        rx="1.34933"
        fill="#161616"
      />
      <rect
        x="3.48438"
        y="7.60156"
        width="8.09596"
        height="22.9386"
        fill="#161616"
      />
      <path
        d="M18.2633 24.3008H16.2552V18.8029C16.2552 18.6513 16.2574 18.465 16.2617 18.244C16.266 18.0187 16.2725 17.7891 16.2812 17.5552C16.2899 17.3169 16.2985 17.1024 16.3072 16.9118C16.2595 16.9681 16.1621 17.0656 16.0147 17.2042C15.8718 17.3385 15.7375 17.4599 15.6118 17.5682L14.5201 18.4455L13.5518 17.2367L16.6126 14.7997H18.2633V24.3008ZM27.5564 24.3008H20.9147V22.9036L23.2998 20.4926C23.7807 19.9987 24.1662 19.5871 24.4565 19.2578C24.7511 18.9242 24.9634 18.6209 25.0934 18.348C25.2277 18.0751 25.2948 17.7826 25.2948 17.4707C25.2948 17.0938 25.1887 16.8121 24.9764 16.6259C24.7685 16.4352 24.489 16.3399 24.1381 16.3399C23.7698 16.3399 23.4124 16.4244 23.0658 16.5934C22.7192 16.7623 22.3574 17.0028 21.9805 17.3147L20.8887 16.0215C21.1617 15.7875 21.4498 15.5666 21.7531 15.3586C22.0607 15.1507 22.4159 14.9839 22.8189 14.8582C23.2261 14.7282 23.7135 14.6633 24.2811 14.6633C24.9049 14.6633 25.44 14.7759 25.8862 15.0012C26.3368 15.2265 26.6834 15.5341 26.926 15.924C27.1686 16.3096 27.2899 16.7472 27.2899 17.2367C27.2899 17.761 27.186 18.2397 26.978 18.6729C26.77 19.1062 26.4668 19.5351 26.0682 19.9597C25.6739 20.3843 25.1974 20.8543 24.6385 21.3699L23.4167 22.5201V22.6111H27.5564V24.3008ZM36.9795 24.3008H34.9714V20.2001H31.2086V24.3008H29.194V14.7997H31.2086V18.5235H34.9714V14.7997H36.9795V24.3008ZM42.1524 14.7997C43.0145 14.7997 43.7251 14.9037 44.284 15.1117C44.8472 15.3196 45.2653 15.6337 45.5382 16.054C45.8111 16.4742 45.9476 17.0049 45.9476 17.6461C45.9476 18.0794 45.8653 18.4585 45.7007 18.7834C45.536 19.1083 45.3194 19.3835 45.0508 19.6087C44.7822 19.834 44.4919 20.0182 44.18 20.1611L46.9744 24.3008H44.7389L42.4708 20.655H41.3985V24.3008H39.384V14.7997H42.1524ZM42.0094 16.4504H41.3985V19.0174H42.0484C42.7156 19.0174 43.1922 18.9069 43.4781 18.6859C43.7684 18.4606 43.9135 18.1314 43.9135 17.6981C43.9135 17.2476 43.7576 16.927 43.4456 16.7363C43.138 16.5457 42.6593 16.4504 42.0094 16.4504ZM53.7785 21.6623C53.7785 22.2255 53.642 22.7151 53.3691 23.131C53.0961 23.5469 52.6976 23.8675 52.1733 24.0928C51.6534 24.3181 51.0209 24.4308 50.2757 24.4308C49.9465 24.4308 49.6237 24.4091 49.3074 24.3658C48.9955 24.3224 48.6944 24.2596 48.4041 24.1773C48.1182 24.0907 47.8452 23.9845 47.5853 23.8589V21.9873C48.0359 22.1865 48.5038 22.3663 48.989 22.5266C49.4742 22.6869 49.9551 22.7671 50.4317 22.7671C50.761 22.7671 51.0252 22.7238 51.2245 22.6371C51.4282 22.5505 51.5755 22.4313 51.6664 22.2797C51.7574 22.1281 51.8029 21.9548 51.8029 21.7598C51.8029 21.5215 51.7228 21.3179 51.5625 21.1489C51.4022 20.98 51.1812 20.8218 50.8996 20.6745C50.6223 20.5272 50.3082 20.3691 49.9573 20.2001C49.7363 20.0961 49.4959 19.9705 49.2359 19.8232C48.976 19.6716 48.729 19.4874 48.4951 19.2708C48.2611 19.0542 48.0683 18.7921 47.9167 18.4845C47.7694 18.1725 47.6958 17.7999 47.6958 17.3667C47.6958 16.7992 47.8257 16.3139 48.0857 15.911C48.3456 15.5081 48.716 15.2005 49.1969 14.9882C49.6822 14.7716 50.2541 14.6633 50.9126 14.6633C51.4065 14.6633 51.8766 14.7217 52.3228 14.8387C52.7734 14.9514 53.2435 15.116 53.733 15.3326L53.0832 16.8988C52.6456 16.7212 52.2535 16.5847 51.9069 16.4894C51.5603 16.3897 51.2072 16.3399 50.8476 16.3399C50.5963 16.3399 50.3819 16.3811 50.2042 16.4634C50.0266 16.5414 49.8923 16.654 49.8013 16.8013C49.7103 16.9443 49.6649 17.1111 49.6649 17.3017C49.6649 17.527 49.7298 17.7176 49.8598 17.8736C49.9941 18.0252 50.1934 18.1725 50.4577 18.3155C50.7263 18.4585 51.0599 18.6253 51.4585 18.8159C51.9437 19.0455 52.3575 19.286 52.6997 19.5373C53.0463 19.7842 53.3128 20.0766 53.4991 20.4146C53.6854 20.7482 53.7785 21.1641 53.7785 21.6623Z"
        fill="#161616"
      />
    </svg>
  );
}

function JoystickSVG() {
  return (
    <svg
      width="34"
      height="45"
      viewBox="0 0 34 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1.32033"
        y="33.5645"
        width="31.7471"
        height="10.5824"
        stroke="#161616"
        stroke-width="1.17582"
      />
      <rect
        x="1.32033"
        y="33.5645"
        width="31.7471"
        height="10.5824"
        stroke="#161616"
        stroke-width="1.17582"
      />
      <path
        d="M1.57556 32.3871L5.25773 22.3926H29.13L32.8122 32.3871H1.57556Z"
        stroke="#161616"
        stroke-width="1.17582"
      />
      <circle
        cx="20.721"
        cy="9.46124"
        r="8.23073"
        stroke="#161616"
        stroke-width="2.35164"
      />
      <path
        d="M22.4847 27.6856C22.4847 28.4895 21.8991 29.0767 20.8697 29.4892C19.8589 29.8944 18.6163 30.0374 17.7814 30.0374C15.7551 30.0374 14.5718 29.7433 13.9082 29.3209C13.3045 28.9368 13.0781 28.412 13.0781 27.6856C13.0781 27.4867 13.1948 27.2295 13.5416 26.9221C13.8817 26.6206 14.3713 26.3376 14.9305 26.0929C16.0631 25.5974 17.3027 25.3339 17.7813 25.334C18.31 25.3341 19.5613 25.4736 20.6612 25.8868C21.8145 26.3201 22.4847 26.9221 22.4847 27.6856Z"
        stroke="#161616"
        stroke-width="1.17582"
      />
      <path
        d="M18.959 18.8672L17.7832 27.6858"
        stroke="#161616"
        stroke-width="2.35164"
        stroke-linecap="round"
      />
    </svg>
  );
}

function WeightSVG() {
  return (
    <svg
      width="41"
      height="48"
      viewBox="0 0 41 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.34492 16.75L32.6016 16.75L38.5982 46.7334H1.43855L6.34492 16.75Z"
        stroke="#161616"
        stroke-width="2.35164"
      />
      <path
        d="M29.4557 11.4613C29.4557 12.7644 29.1923 13.6739 28.7954 14.3263C28.4027 14.9717 27.8252 15.4552 27.0382 15.8194C25.3896 16.5823 22.9953 16.7525 20.0492 16.7525C17.103 16.7525 14.7088 16.5823 13.0601 15.8194C12.2731 15.4552 11.6956 14.9717 11.3029 14.3263C10.9061 13.6739 10.6426 12.7644 10.6426 11.4613C10.6426 6.26618 14.8541 2.05472 20.0492 2.05472C25.2443 2.05472 29.4557 6.26618 29.4557 11.4613Z"
        stroke="#161616"
        stroke-width="2.35164"
      />
      <circle
        cx="20.0432"
        cy="11.4611"
        r="4.70327"
        stroke="#161616"
        stroke-width="2.35164"
      />
      <path
        d="M12.638 40.5575H11.6413V42.2734H9.93106V40.5575H6.39734V39.34L10.0273 33.9941H11.6413V39.1984H12.638V40.5575ZM9.93106 39.1984V37.794C9.93106 37.6619 9.93295 37.5052 9.93673 37.324C9.94428 37.1428 9.95183 36.9615 9.95938 36.7803C9.96693 36.5991 9.97448 36.4386 9.98203 36.299C9.99336 36.1555 10.0009 36.0555 10.0047 35.9988H9.95938C9.88765 36.1536 9.81214 36.3046 9.73286 36.4519C9.65357 36.5953 9.56108 36.7463 9.45537 36.9049L7.93768 39.1984H9.93106ZM18.7654 35.8459C18.7654 36.2272 18.6861 36.5576 18.5275 36.8369C18.3689 37.1163 18.1538 37.3447 17.8819 37.5222C17.6139 37.6996 17.3119 37.8299 16.9758 37.9129V37.9469C17.6403 38.03 18.1443 38.2338 18.4879 38.5585C18.8352 38.8832 19.0089 39.3173 19.0089 39.861C19.0089 40.3442 18.8899 40.7765 18.6521 41.1578C18.418 41.5391 18.0556 41.8393 17.5648 42.0582C17.074 42.2772 16.4416 42.3867 15.6677 42.3867C15.2109 42.3867 14.7843 42.3489 14.3879 42.2734C13.9952 42.2017 13.6252 42.0903 13.2779 41.9393V40.4499C13.6328 40.6312 14.0047 40.769 14.3935 40.8633C14.7824 40.954 15.1448 40.9993 15.4808 40.9993C16.1075 40.9993 16.5455 40.8917 16.7946 40.6765C17.0476 40.4575 17.1741 40.1517 17.1741 39.7591C17.1741 39.5288 17.1155 39.3343 16.9985 39.1758C16.8815 39.0172 16.6776 38.8964 16.3869 38.8133C16.1 38.7303 15.6979 38.6888 15.1807 38.6888H14.5521V37.3466H15.192C15.7017 37.3466 16.0886 37.2994 16.3529 37.205C16.621 37.1069 16.8022 36.9747 16.8966 36.8086C16.9947 36.6387 17.0438 36.4462 17.0438 36.231C17.0438 35.9365 16.9532 35.7062 16.772 35.5401C16.5908 35.374 16.2887 35.2909 15.8659 35.2909C15.6016 35.2909 15.36 35.3249 15.141 35.3929C14.9258 35.4571 14.7314 35.5363 14.5577 35.6307C14.3841 35.7213 14.2312 35.8101 14.099 35.8969L13.2892 34.6907C13.6139 34.4566 13.9933 34.2622 14.4275 34.1074C14.8654 33.9526 15.3864 33.8752 15.9905 33.8752C16.8437 33.8752 17.5195 34.047 18.0178 34.3905C18.5162 34.7341 18.7654 35.2192 18.7654 35.8459ZM25.6799 38.1338C25.6799 38.802 25.627 39.3985 25.5213 39.9233C25.4194 40.4481 25.2533 40.8936 25.023 41.2598C24.7965 41.626 24.4982 41.9053 24.1282 42.0979C23.7582 42.2904 23.309 42.3867 22.7804 42.3867C22.116 42.3867 21.5704 42.2187 21.1438 41.8827C20.7172 41.5429 20.402 41.0559 20.1981 40.4216C19.9942 39.7836 19.8923 39.021 19.8923 38.1338C19.8923 37.239 19.9848 36.4745 20.1698 35.8403C20.3586 35.2022 20.6644 34.7133 21.0872 34.3735C21.51 34.0338 22.0744 33.8639 22.7804 33.8639C23.4411 33.8639 23.9848 34.0338 24.4114 34.3735C24.8418 34.7095 25.1608 35.1966 25.3684 35.8346C25.5761 36.4689 25.6799 37.2352 25.6799 38.1338ZM21.6308 38.1338C21.6308 38.7643 21.6648 39.2909 21.7328 39.7138C21.8045 40.1328 21.9234 40.4481 22.0895 40.6595C22.2557 40.8709 22.486 40.9766 22.7804 40.9766C23.0711 40.9766 23.2995 40.8728 23.4657 40.6651C23.6355 40.4537 23.7564 40.1385 23.8281 39.7194C23.8998 39.2966 23.9357 38.768 23.9357 38.1338C23.9357 37.5033 23.8998 36.9766 23.8281 36.5538C23.7564 36.131 23.6355 35.8138 23.4657 35.6024C23.2995 35.3872 23.0711 35.2796 22.7804 35.2796C22.486 35.2796 22.2557 35.3872 22.0895 35.6024C21.9234 35.8138 21.8045 36.131 21.7328 36.5538C21.6648 36.9766 21.6308 37.5033 21.6308 38.1338ZM28.8682 45.0596C27.9847 45.0596 27.309 44.9048 26.8408 44.5953C26.3764 44.2895 26.1443 43.8591 26.1443 43.3041C26.1443 42.9228 26.2632 42.6038 26.501 42.3471C26.7389 42.0903 27.0881 41.9072 27.5487 41.7977C27.3712 41.7222 27.2165 41.5995 27.0843 41.4296C26.9522 41.256 26.8861 41.0729 26.8861 40.8803C26.8861 40.6387 26.956 40.4386 27.0956 40.2801C27.2353 40.1177 27.4373 39.9592 27.7016 39.8044C27.3694 39.6609 27.1051 39.4306 26.9088 39.1135C26.7162 38.7963 26.62 38.4226 26.62 37.9922C26.62 37.5316 26.72 37.1409 26.9201 36.82C27.124 36.4953 27.4184 36.248 27.8035 36.0781C28.1924 35.9082 28.6643 35.8233 29.2193 35.8233C29.3363 35.8233 29.4722 35.8308 29.627 35.8459C29.7818 35.861 29.9234 35.878 30.0517 35.8969C30.1839 35.9158 30.2726 35.9309 30.3179 35.9422H32.5265V36.82L31.5354 37.0748C31.6261 37.2145 31.694 37.3636 31.7393 37.5222C31.7846 37.6807 31.8073 37.8487 31.8073 38.0262C31.8073 38.7057 31.5694 39.2362 31.0937 39.6175C30.6218 39.995 29.9649 40.1838 29.123 40.1838C28.9229 40.1725 28.7341 40.1574 28.5567 40.1385C28.4699 40.2064 28.4038 40.2782 28.3585 40.3537C28.3132 40.4292 28.2905 40.5085 28.2905 40.5915C28.2905 40.6746 28.3245 40.7444 28.3925 40.8011C28.4642 40.8539 28.5699 40.8954 28.7096 40.9256C28.8531 40.9521 29.0305 40.9653 29.2419 40.9653H30.3179C31.0126 40.9653 31.5411 41.1144 31.9035 41.4127C32.2698 41.7109 32.4529 42.1489 32.4529 42.7265C32.4529 43.4664 32.1433 44.0403 31.5241 44.448C30.9087 44.8558 30.0234 45.0596 28.8682 45.0596ZM28.9418 43.9327C29.3533 43.9327 29.7063 43.8931 30.0008 43.8138C30.299 43.7383 30.5274 43.6288 30.686 43.4853C30.8446 43.3456 30.9238 43.1776 30.9238 42.9813C30.9238 42.8227 30.8766 42.6963 30.7823 42.6019C30.6917 42.5113 30.552 42.4471 30.3632 42.4093C30.1782 42.3716 29.9404 42.3527 29.6497 42.3527H28.7549C28.5435 42.3527 28.3528 42.3867 28.1829 42.4547C28.0168 42.5226 27.8847 42.617 27.7865 42.7378C27.6884 42.8624 27.6393 43.0059 27.6393 43.1682C27.6393 43.406 27.7526 43.5929 27.9791 43.7288C28.2094 43.8647 28.5303 43.9327 28.9418 43.9327ZM29.2193 39.1305C29.544 39.1305 29.7818 39.0304 29.9328 38.8303C30.0838 38.6302 30.1593 38.3584 30.1593 38.0149C30.1593 37.6335 30.0801 37.3485 29.9215 37.1597C29.7667 36.9672 29.5326 36.8709 29.2193 36.8709C28.9021 36.8709 28.6643 36.9672 28.5057 37.1597C28.3472 37.3485 28.2679 37.6335 28.2679 38.0149C28.2679 38.3584 28.3453 38.6302 28.5001 38.8303C28.6586 39.0304 28.8984 39.1305 29.2193 39.1305Z"
        fill="#161616"
      />
    </svg>
  );
}

function GyroSVG() {
  return (
    <svg
      width="59"
      height="59"
      viewBox="0 0 59 59"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="29.2392"
        cy="29.3974"
        r="27.6317"
        stroke="#161616"
        stroke-width="2.35164"
      />
      <path
        d="M33.4016 19.3153C36.2442 18.8416 38.3418 19.423 39.4433 20.6749C40.0184 21.7181 40.117 23.7548 39.1567 26.4299C38.1984 29.0994 36.2564 32.1733 33.1566 34.9918C31.0164 36.9378 28.0913 38.6061 25.3229 39.3624C22.4956 40.1349 20.2117 39.8717 18.9041 38.5638C18.1571 37.8166 17.6348 35.9836 18.3259 33.2115C18.9954 30.5256 20.7676 27.196 24.1534 23.806C27.2423 21.2896 30.5644 19.7882 33.4016 19.3153Z"
        stroke="#161616"
        stroke-width="2.35164"
      />
      <path
        d="M16.8965 16.4648L23.3635 23.5198"
        stroke="#161616"
        stroke-width="2.35164"
        stroke-linejoin="round"
      />
      <path
        d="M28.6504 29.3984L40.9965 41.7445"
        stroke="#161616"
        stroke-width="2.35164"
        stroke-linejoin="round"
      />
    </svg>
  );
}
