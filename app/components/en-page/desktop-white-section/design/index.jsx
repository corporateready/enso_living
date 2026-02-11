import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import { motion } from "motion/react";

const Index = () => {
  const ref = React.useRef(null);
  return (
    <div className={styles.premium}>
      <div className={styles.premium__inner_image}>
        <p className={styles.top__text}>
          <motion.span
            className={styles.text__1}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            Premium interior design
          </motion.span>
          <motion.span
            className={styles.text__2}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
            {" "}
            by ARUTIN Art Bureau{" "}
          </motion.span>
          <motion.span
            className={styles.text__3}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          >
            for homes with identity
          </motion.span>
        </p>
        <Image
          src={"/desktop-design-bg.avif"}
          alt="enso living design"
          loading="eager"
          priority={true}
          quality={85}
          fill
          sizes="(min-width: 640px) 100vw"
        />
      </div>
    </div>
  );
};
export default Index;
