"use client";
import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image"
import Building from "../../svg-components/building"
import ButtonDownload from "../../svg-components/button-download"
import { DesktopSlider } from "./desktop-slider";
import { motion } from "motion/react";

const Index = ({ handlerFormOpen }) => {
  const ref = React.useRef(null);
  const [isHoveredButton, setIsHoveredButton] = React.useState(false);
  return (
    <div className={styles.section}>
      <div className={styles.wrapper} ref={ref}>
        <div className={styles.inner}>
          <div className={styles.inner__header}>
            <div className={styles.head__content}>
              <motion.p
                className={styles.title__text}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                4 select 
                <br />Duplexes
              </motion.p>
              <motion.p
                className={styles.description__text}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                Generous two-level 
                <br />residences filled with natural 
                <br />light through panoramic 
                <br />glazing, offering the feel of 
                <br />an urban townhouse — 
                <br />balancing openness, privacy, 
                <br />and striking views.
              </motion.p>

              <motion.button
                type="button"
                className={styles.offer__btn}
                aria-label="open duplex form"
                onClick={handlerFormOpen}
                onHoverStart={() => setIsHoveredButton(true)}
                onHoverEnd={() => setIsHoveredButton(false)}
              >
                <span className={styles.span__text}>View the Duplexes</span>
                <ButtonDownload isHoveredButton={isHoveredButton} />
              </motion.button>
            </div>
          </div>
          <DesktopSlider />
        </div>

        <div className={styles.rightside__line}>
          <div className={styles.rightside__image}>
            <Building />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute top-124 left-250 translate-0 z-3 w-[118rem] h-[55rem]"
            >
              <Image
                src="/building-7.webp"
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
