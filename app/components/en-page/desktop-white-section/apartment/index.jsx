"use client"
import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import ButtonDownload from "../../svg-components/button-download";
import Building from "../../svg-components/building";
import { DesktopSlider } from "./desktop-slider";
import { motion } from "motion/react";

const Index = ({ handlerFormOpen }) => {
  const ref = React.useRef(null);
  const [isHoveredButton, setIsHoveredButton] = React.useState(false);
  return (
    <div className={styles.section}>
      <div className={styles.wrapper} ref={ref}>
        <div className={styles.inner}>
          <DesktopSlider />
          <div className={styles.inner__header}>
            <div className={styles.head__content}>
              <motion.p
                className={styles.title__text}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                Only
                <br />24 apartments
                <br />on floors 4–7
              </motion.p>
              <motion.p
                className={styles.description__text}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                Refined living spaces with 
                <br />panoramic glazing that 
                <br />impress through elegance 
                <br />and create an immediate 
                <br />sense of home.
              </motion.p>
              <motion.button
                type="button"
                aria-label="open form"
                className={styles.offer__btn}
                onClick={handlerFormOpen}
                onHoverStart={() => setIsHoveredButton(true)}
                onHoverEnd={() => setIsHoveredButton(false)}
              >
                <span className={styles.span__text}>View the apartments</span>
                <ButtonDownload isHoveredButton={isHoveredButton} />
              </motion.button>
            </div>
          </div>
        </div>
        <div className={styles.rightside__line}>
          <div className={styles.rightside__image}>
            <Building isHoveredButton={isHoveredButton} />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute top-260 left-46 translate-0 z-3 w-910 h-328"
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
        </div>
      </div>
    </div>
  );
};
export default Index;
