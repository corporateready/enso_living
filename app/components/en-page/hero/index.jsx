"use client";
import React from "react";
import styles from "./hero.module.scss";
import Image from "next/image";
import heroBG from "../../../../public/hero-bg-desktop.avif";
import heroMobileBG from "../../../../public/hero-bg-mobile.avif";
import buildingMobile from "../../../../public/building-mask-mobile.avif";
import buildingDesktop from "../../../../public/hero-desktop-building.avif";
import { motion } from "motion/react";

const Hero = ({ handlerFormOpen }) => {
  const heroRef = React.useRef(null);
  const [isHoveredButton, setIsHoveredButton] = React.useState(false);

  return (
    <div className={styles.hero} ref={heroRef}>
      <div className="inline-block absolute top-0 left-0 translate-0 z-1 w-full h-full bg-cover bg-no-repeat bg-center object-cover sm:hidden">
        <Image
          src={heroMobileBG}
          alt="hero mobile background"
          placeholder="blur"
          loading="eager"
          priority
          fetchPriority="high"
          quality={85}
          fill
          sizes="(max-width: 640px) 100vw"
        />
      </div>

      <div className="hidden absolute top-0 left-0 z-1 w-full h-full bg-cover bg-no-repeat bg-center object-cover sm:inline-block">
        <Image
          src={heroBG}
          alt="hero background"
          loading="eager"
          quality={65}
          fill
          sizes="(min-width: 640px) 100vw"
          placeholder="blur"
        />
      </div>

      <div className="inline-block absolute bottom-[27rem] right-0 translate-0 z-3 w-[374rem] h-[510rem] sm:h-0 sm:w-0">
        <Image
          src={buildingMobile}
          alt="hero mobile background"
          loading="eager"
          quality={85}
          fill
          sizes="(max-width: 640px) 100vw"
          placeholder="blur"
        />
      </div>

      <div className="hidden absolute bottom-0 right-0 translate-x-0 z-2 w-[1250rem] h-full sm:inline-block">
        <Image
          src={buildingDesktop}
          alt="hero building background"
          fill
          priority
          placeholder="blur"
          sizes="(max-width: 640px) 100vw, 880px"
          quality={65}
        />
      </div>

      <motion.h1 className={styles.title}>
        <motion.span
          initial={{ opacity: 0, y: 60 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0 },
          }}
          className="sm:inline-flex text-right ml-[54rem]"
        >
          EXCLUSIVE
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: 60 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.2 },
          }}
          className="w-full inline-flex text-right sm:ml-[-92rem]" 
        >
          REAL ESTATE
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: 60 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.3 },
          }}
          className="inline-flex sm:ml-[150rem]"
        >
          PROJECT
        </motion.span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.4 } }}
        className={styles.hero__text_decor}
      >
        ENSŌ LIVING {""}
        <br className="inline-block sm:hidden" />
        Launch
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.2 } }}
        className={styles.text__building_high}
      >
        high-end{""}
        <br />
        penthouse
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.4 } }}
        className={styles.text__building_low}
      >
        premium retail & {""}
        <br />business spaces 
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.4, delay: 0.6 } }}
        className={styles.text__building_middle}
      >
        luxury duplex {""}
        <br />
        residences
      </motion.p>
      <motion.button
        type="button"
        onClick={handlerFormOpen}
        className={styles.hero__btn}
        onHoverStart={() => setIsHoveredButton(true)}
        onHoverEnd={() => setIsHoveredButton(false)}
      >
        <span className={styles.span__blur}></span>
        <span className={styles.span__text}>
          Download the presentation PDF 
          <br />and request the launch offer
        </span>
        <svg
          className="w-[50rem] h-[50rem] sm:w-[62rem] sm:h-[62rem] relative z-5 transition-all duration-200"
          viewBox="0 0 50 50"
          fill={`${isHoveredButton ? "white" : "none"}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="25"
            cy="25"
            r="24.5878"
            stroke="white"
            strokeWidth="0.82449"
          />
          <motion.path
            d="M25.5315 18.5C25.3486 18.5003 25.1733 18.5722 25.044 18.7C24.9146 18.8278 24.8418 19.0011 24.8415 19.1818V25.3624L22.6613 23.5673C22.5207 23.4517 22.3394 23.396 22.1573 23.4124C21.9752 23.4288 21.8071 23.5159 21.6898 23.6546C21.5729 23.7935 21.5166 23.9726 21.5331 24.1526C21.5497 24.3326 21.6378 24.4987 21.7782 24.6146L25.0899 27.3418C25.1247 27.3662 25.1617 27.3874 25.2003 27.4051C25.2255 27.4218 25.2519 27.4368 25.2793 27.4498C25.3588 27.4829 25.4443 27.5 25.5307 27.5C25.617 27.5 25.7025 27.4829 25.7821 27.4498C25.8088 27.4367 25.8346 27.422 25.8594 27.4057C25.898 27.3879 25.935 27.3667 25.9698 27.3424L29.2815 24.6151C29.3904 24.5256 29.4688 24.4052 29.506 24.2702C29.5432 24.1352 29.5375 23.9922 29.4897 23.8605C29.4418 23.7288 29.3541 23.6148 29.2385 23.5341C29.1228 23.4533 28.9849 23.4097 28.8433 23.4091C28.6819 23.4094 28.5258 23.4653 28.4017 23.5673L26.2215 25.3624V19.1818C26.2212 19.0011 26.1484 18.8278 26.019 18.7C25.8897 18.5722 25.7144 18.5003 25.5315 18.5Z"
            fill={`${isHoveredButton ? "#A67363" : "white"}`}
            className={`${isHoveredButton ? "animate-none" : "animate-bounce"}`}
          ></motion.path>
          <motion.path
            d="M30.8636 27.5C30.6869 27.5003 30.5175 27.5706 30.3925 27.6956C30.2676 27.8205 30.1972 27.9899 30.1969 28.1667V29.7667C30.1967 29.8727 30.1544 29.9742 30.0795 30.0492C30.0045 30.1242 29.9029 30.1664 29.7969 30.1667H21.2636C21.1576 30.1664 21.056 30.1242 20.9811 30.0492C20.9061 29.9742 20.8639 29.8727 20.8636 29.7667V28.1667C20.8636 27.9899 20.7934 27.8203 20.6683 27.6953C20.5433 27.5702 20.3738 27.5 20.1969 27.5C20.0201 27.5 19.8506 27.5702 19.7255 27.6953C19.6005 27.8203 19.5303 27.9899 19.5303 28.1667V29.7667C19.5308 30.2262 19.7136 30.6668 20.0386 30.9917C20.3635 31.3166 20.8041 31.4994 21.2636 31.5H29.7969C30.2565 31.4994 30.697 31.3166 31.022 30.9917C31.3469 30.6668 31.5297 30.2262 31.5303 29.7667V28.1667C31.53 27.9899 31.4597 27.8205 31.3347 27.6956C31.2097 27.5706 31.0403 27.5003 30.8636 27.5Z"
            fill={`${isHoveredButton ? "#A67363" : "white"}`}
          ></motion.path>
        </svg>
      </motion.button>
    </div>
  );
};

export default Hero;
