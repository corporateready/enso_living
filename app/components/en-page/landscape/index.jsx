import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import { MobileSlider } from "./mobile-slider";
import { motion } from "motion/react";

const Index = () => {
  return (
    <div className={styles.premium}>
      <div className={styles.premium__inner_slider}>
        <MobileSlider />
        <div className={styles.slider__navigate}>
          <Image
            src={"/slider-navigate.avif"}
            alt="hero mobi"
            loading="eager"
            priority={true}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1920px) 50vw, 33vw"
          />
        </div>
      </div>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={styles.bottom__text_title}
      >
        Fast access to Brasov’s 
        <br />key destinations and 
        <br />panoramic mountain views
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={styles.bottom__text_subtitle}
      >
        Premium location positioned 
        <br />between residential and 
        <br />business districts, offering 
        <br />panoramic mountain views and 
        <br />exposure to a select audience
      </motion.p>
    </div>
  );
};
export default Index;
