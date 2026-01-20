"use client";
import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import { MobileSlider } from "./mobile-slider";
import Building from "../svg-components/building-mobile";
import { motion } from "motion/react";

const Index = ({ handlerFormOpen }) => {
  const ref = React.useRef(null);
  return (
    <div className={styles.premium}>
      <div className={styles.premium__inner} ref={ref}>
        <div className={styles.premium__header_inner}>
          <div className={styles.premium__title_image}>
            <Building />
            <motion.div
              className="w-[76rem] h-[30rem] absolute top-[27rem] right-[1rem] translate-0 z-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Image
                src="/building-8.webp"
                alt="building part"
                loading="eager"
                priority={true}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>
          </div>
          <div className={styles.premium__title_content}>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={styles.premium__title_text}
            >
              Doar 24 apartamente {""}
              <br />
              la etajele 4-7
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={styles.premium__title_description}
            >
              Spații generoase cu vitraje panoramice care te{""}
              <br /> copleșesc prin rafinament și te fac instantaneu{""}
              <br /> să te simți acasă.
            </motion.p>
          </div>
        </div>
        <div className={styles.premium__content}>
          <MobileSlider />
          <button
            type="button"
            className={styles.hero__btn}
            onClick={handlerFormOpen}
          >
            <span className={styles.span__text}>Vezi Apartamentele</span>
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="25"
                cy="25"
                r="24.5878"
                stroke="white"
                strokeWidth="0.82449"
              />
              <path
                d="M35.0765 24.495C35.3252 24.7706 35.4629 25.1287 35.4629 25.5C35.4629 25.8713 35.3252 26.2294 35.0765 26.505C33.5015 28.2 29.9165 31.5 25.7315 31.5C21.5465 31.5 17.9615 28.2 16.3865 26.505C16.1377 26.2294 16 25.8713 16 25.5C16 25.1287 16.1377 24.7706 16.3865 24.495C17.9615 22.8 21.5465 19.5 25.7315 19.5C29.9165 19.5 33.5015 22.8 35.0765 24.495Z"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M25.7305 28.5C27.3873 28.5 28.7305 27.1569 28.7305 25.5C28.7305 23.8431 27.3873 22.5 25.7305 22.5C24.0736 22.5 22.7305 23.8431 22.7305 25.5C22.7305 27.1569 24.0736 28.5 25.7305 28.5Z"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Index;
