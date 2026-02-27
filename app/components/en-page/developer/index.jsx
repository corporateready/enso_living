"use client"
import React from "react";
import {Logo} from "./mobile-logo";
import styles from "./styles.module.scss";
import { motion } from "motion/react";

const Index = () => {
  const ref = React.useRef(null)
  return (
    <div className={styles.premium} ref={ref}>
      <svg
        className="absolute top-[-4%] left-[73%] -translate-x-1/2 z-1 w-[730rem] h-[587rem]"
        viewBox="0 0 1671 655"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.7" filter="url(#filter0_f_1532_253)">
          <circle
            cx="1253.8"
            cy="-599"
            r="1068"
            fill="url(#paint0_radial_1532_253)"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_1532_253"
            x="-0.000198364"
            y="-1852.8"
            width="2507.6"
            height="2507.6"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="92.9"
              result="effect1_foregroundBlur_1532_253"
            />
          </filter>
          <radialGradient
            id="paint0_radial_1532_253"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(1253.8 -599) rotate(90) scale(1068)"
          >
            <stop offset="0.548077" stopColor="white" stopOpacity="0" />
            <stop offset="1" stopColor="white" stopOpacity="0.5" />
          </radialGradient>
        </defs>
      </svg>
      <svg
        className="absolute bottom-0 left-1/2 -translate-x-1/2 z-1 w-[430rem] h-[587rem]"
        viewBox="0 0 430 587"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_899_63)">
          <circle
            cx="216.5"
            cy="359.4"
            r="302.5"
            fill="url(#paint0_radial_899_63)"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_899_63"
            x="-142.9"
            y="0.000389099"
            width="718.8"
            height="718.8"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="28.45"
              result="effect1_foregroundBlur_899_63"
            />
          </filter>
          <radialGradient
            id="paint0_radial_899_63"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(216.5 359.4) rotate(90) scale(302.5)"
          >
            <stop offset="0.860577" stopColor="white" stopOpacity="0" />
            <stop offset="1" stopColor="white" stopOpacity="0.5" />
          </radialGradient>
        </defs>
      </svg>
      <div className={styles.premium__inner_image}>
        <div className={styles.premium__inner_content}>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={styles.title}
          >
            About the real estate {" "}
            <br />developer
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={styles.description}
          >
            ENSŌ Development is an integrated, vertically structured 
            <br />real estate developer with operations in Moldova and 
            <br />Romania, and a market leader in residential sales 
            <br />in the Republic of Moldova in 2024.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className={styles.description}
          >
            Founded in 1999, the company holds a portfolio of over 
            <br />500,000 sqm delivered across 13 completed projects, 
            <br />managing all stages of development in-house to ensure 
            <br />premium standards and long-term value.
          </motion.p>
            <Logo />     
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={styles.bottom__text_title}
          >
            Landscape design{""}
            <br />
            by ACLA Architecture Studio
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={styles.bottom__text_subtitle}
          >
            A distinctive natural setting 
            <br />curated for a refined lifestyle
          </motion.p>
        </div>
      </div>
      <div className={styles.light__circle_bottom}></div>
    </div>
  );
};
export default Index;
