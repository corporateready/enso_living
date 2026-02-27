"use client"
import React from "react";
import styles from "./styles.module.scss";
import { motion } from "motion/react";
import {Logo} from "./desktop-logo";  

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
            {/* ENSO Development */}
            Despre dezvoltator 
            <br />imobiliar
          </motion.p>
          <motion.p
            className={styles.description}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            ENSŌ Development — dezvoltator imobiliar integrat 
            <br />vertical, cu prezență în Moldova și România,<br /> 
            lider în vânzări imobiliare în 2024 în Republica Moldova.
          </motion.p>
          <motion.p
            className={styles.description__b}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            Fondat în 1999, deține un portofoliu de peste
            <br />
            500 000 m² livrați și 13 proiecte finalizate,
            <br />
            gestionând integral toate etapele unui proiect
            <br />
            pentru a asigura standarde premium
            <br />
            și valoare durabilă.
          </motion.p>
        </div>
        <div className={styles.inner__logo}>
          <Logo />
        </div>
      </div>
    </div>
  );
};
export default Index;
