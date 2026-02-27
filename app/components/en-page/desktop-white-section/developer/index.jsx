"use client"
import React from "react";
import styles from "./styles.module.scss";
import {Logo} from "./desktop-logo"
import { motion } from "motion/react";

const Index = () => {
  const ref = React.useRef(null);
  return (
    <div className={styles.premium}>
      <svg
        className="w-[1670rem] h-[655rem] absolute top-0 right-0 z-2"
        viewBox="0 0 1671 655"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.7" filter="url(#filter0_f_1519_253)">
          <circle
            cx="1253.8"
            cy="-599"
            r="1068"
            fill="url(#paint0_radial_1519_253)"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_1519_253"
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
              result="effect1_foregroundBlur_1519_253"
            />
          </filter>
          <radialGradient
            id="paint0_radial_1519_253"
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
        className="w-[1832rem] h-[550rem] absolute bottom-0 left-0 z-2"
        viewBox="0 0 1832 551"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_1519_252)">
          <circle
            cx="662"
            cy="1169.5"
            r="1068"
            fill="url(#paint0_radial_1519_252)"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_1519_252"
            x="-507.5"
            y="0"
            width="2339"
            height="2339"
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
              stdDeviation="50.75"
              result="effect1_foregroundBlur_1519_252"
            />
          </filter>
          <radialGradient
            id="paint0_radial_1519_252"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(662 1169.5) rotate(90) scale(1068)"
          >
            <stop offset="0.860577" stopColor="white" stopOpacity="0" />
            <stop offset="1" stopColor="white" stopOpacity="0.5" />
          </radialGradient>
        </defs>
      </svg>

      <div className={styles.premium__inner} ref={ref}>
        <div className={styles.premium__inner_content}>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={styles.title}
          >
            About the real 
            <br />estate developer
          </motion.p>
          <motion.p
            className={styles.description}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            ENSŌ Development is an integrated, vertically 
            <br />structured real estate developer with operations
            <br />in Moldova and Romania, and a market leader in 
            <br />residential sales in the Republic of Moldova in 2024.
          </motion.p>
          <motion.p
            className={styles.description__b}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            Founded in 1999, the company holds a portfolio 
            <br />of over 500,000 sqm delivered across 13 
            <br />completed projects, managing all stages of 
            <br />development in-house to ensure premium 
            <br />standards and long-term value.
          </motion.p>
        </div>
        <Logo />
      </div>
    </div>
  );
};
export default Index;
