"use client"
import React from "react";
import styles from "./styles.module.scss";
import { motion } from "motion/react";
import {Logo} from "./mobile-logo";

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
            Despre dezvoltator imobiliar{" "}
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={styles.description}
          >
            ENSŌ Development — dezvoltator imobiliar integrat
            <br />
            vertical, cu prezență în Moldova și România,
            <br />
            lider în vânzări imobiliare în 2024 în Republica Moldova.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className={styles.description}
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
            Un cadru natural deosebit
            <br />
            pentru un stil de viață select
          </motion.p>
        </div>
      </div>
      <div className={styles.light__circle_bottom}></div>
    </div>
  );
};
export default Index;
