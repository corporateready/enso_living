"use client";
import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import Building from "../svg-components/building-mobile";
import { motion } from "motion/react";

const Index = () => {
  const ref = React.useRef(null);
  return (
    <div className={styles.premium}>
      <div className={styles.premium__inner} ref={ref}>
        <div className={styles.premium__header_inner}>
          <div className={styles.premium__title_image}>
            <Building />
            <motion.div
              className="w-56 h-48 absolute bottom-16 left-16 translate-0 z-3"
              initial={{ opacity: 1 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Image
                src="/building-2.webp"
                alt="building part"
                loading="lazy"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>
          </div>
          <div className={styles.premium__title_content}>
            <motion.p
              className={styles.premium__title_text}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              Lobby office{""}
              <br />
              multifuncțional
            </motion.p>
            <motion.p
              className={styles.premium__title_description}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              Tavane impunătoare în 2 niveluri,{""}
              <br />
              conexiune directă cu zona bistro
            </motion.p>
          </div>
        </div>
        <div className={styles.premium__content}>
          <div className={styles.premium__inner_image}>
            <Image
              src={"/multy-inner.avif"}
              alt="hero mobi"
              loading="eager"
              priority={true}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1920px) 50vw, 33vw"
            />
            <div className={styles.box__dekor}>
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.4997 9.73047V11.5766C12.4997 11.8214 12.4024 12.0562 12.2293 12.2293C12.0562 12.4024 11.8214 12.4997 11.5766 12.4997H9.73047"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.73047 0.5H11.5766C11.8214 0.5 12.0562 0.597252 12.2293 0.770363C12.4024 0.943473 12.4997 1.17826 12.4997 1.42308V3.26923"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M0.5 3.26923V1.42308C0.5 1.17826 0.597252 0.943473 0.770363 0.770363C0.943473 0.597252 1.17826 0.5 1.42308 0.5H3.26923"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.26923 12.4997H1.42308C1.17826 12.4997 0.943473 12.4024 0.770363 12.2293C0.597252 12.0562 0.5 11.8214 0.5 11.5766V9.73047"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.73047 3.26953V5.11569"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.26953 3.26953V5.11569"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.49985 4.19238V7.42315H5.11523"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.19238 9.26953C4.81511 9.86105 5.64119 10.1909 6.50008 10.1909C7.35896 10.1909 8.18504 9.86105 8.80777 9.26953"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className={styles.span}>Acces controlat prin Face ID</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Index;
