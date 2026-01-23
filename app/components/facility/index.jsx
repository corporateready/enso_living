"use client"
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
              className="w-[76rem] h-[28rem] absolute bottom-[-6rem] left-[2rem] translate-0 z-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Image
                src="/building-5.webp"
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
              Facilități
              <br />
              de parcare
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={styles.premium__title_description}
            >
              Parcare subterană
              <br />
              în 2 niveluri dedicate <br />
              rezidenților și zonei de business
            </motion.p>
          </div>
        </div>
        <div className={styles.premium__content}>
          <div className={styles.premium__inner_image}>
            <Image
              src={"/facility-inner.avif"}
              alt="hero mobi"
              loading="eager"
              priority={true}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className={styles.inner__list}>
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={styles.inner__list_item__up}>
              <span className={styles.item__number}>72</span>
              <span className={styles.item__text}>
                70 locuri de parcări subterane{""}
                <br />
                acces privat și securizat
              </span>
            </motion.div>
            <motion.div 
            initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className={styles.inner__list_item__b}>
              <span className={styles.item__number}>15</span>
              <span className={styles.item__text}>
                locuri de parcare exterioare {""}
                <br />pentru biciclete, amplasate {""}
                <br />în curtea ansamblului
              </span>
            </motion.div>
            <motion.div 
            initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className={styles.inner__list_item}>
              <span className={styles.item__number}>13</span>
              <span className={styles.item__text}>
                locuri de parcare exterioare, {""}
                <br />oferind flexibilitate și acces {""}
                <br />imediat în proximitatea {""}
                <br />clădirii
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Index;
