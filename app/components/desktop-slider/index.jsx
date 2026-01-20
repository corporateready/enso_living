import React from "react";
import styles from "./sytles.module.scss";
import { DesktopSlider } from "./desktop-slider";
import { motion } from "motion/react";

const Index = () => {
  const ref = React.useRef(null);
  return (
    <div className={styles.section} ref={ref}>
      <div className={styles.head__content}>
        <motion.p
          className={styles.title}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Landscape design{""}
          <br />
          by ACLA Architecture Studio
        </motion.p>
        <p className={styles.subtitle}>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            un cadru natural{""}
          </motion.span>
          <br />
          <motion.span
            className={styles.subtitle__span}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            deosebit pentru{""}
            <br />
            un stil de viață select
          </motion.span>
        </p>
      </div>
      <div className={styles.wrapper}>
        <DesktopSlider />
      </div>
    </div>
  );
};
export default Index;
