import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import { motion } from "motion/react";

const Index = () => {
  return (
    <div className={styles.premium}>
      <div className={styles.premium__inner_image}>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={styles.top__text}
        >
          <span className={styles.text__1}>Un reper</span>
          <br />
          <span className={styles.text__2}>al luxului </span>
          <br />
          <span className={styles.text__3}>contemporan</span>
        </motion.p>
        <Image
          src={"/landmark-inner.avif"}
          alt="hero mobi"
          loading="eager"
          priority={true}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1920px) 50vw, 33vw"
        />
        <motion.p 
        initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
        className={styles.bottom__text}>
          <span className={styles.text__4}>în liniștea</span>
          <br />
          <span className={styles.text__5}>Carpaților</span>
        </motion.p>
      </div>
    </div>
  );
};
export default Index;
