import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className={styles.premium}>
      <div className={styles.premium__inner_image}>
        <p
          className={styles.top__text}
        >
          <motion.span
          
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}className={styles.text__1}>
            Design interior
            <br />
            premium by ARUTIN
          </motion.span>
          <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={styles.text__2}> Art Bureau </motion.span>
          <motion.span
          
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}className={styles.text__3}>
            pentru locuințe
            <br />
            cu identitate
          </motion.span>
        </p>
        <Image
          src={"/mobile-design-bg.avif"}
          alt="enso living design"
          loading="eager"
          priority={true}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1920px) 50vw, 33vw"
        />
      </div>
    </div>
  );
};
export default Index;
