import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import Building from "../../svg-components/building"
import { motion } from "motion/react";

const Index = () => {
  const ref = React.useRef(null);
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
                Parking
                <br />facilities
              </motion.p>
              <motion.p
                className={styles.description__text}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                Underground parking across 
                <br />2 levels, dedicated to residents 
                <br />and the business area
              </motion.p>
            </div>
          </div>
          <div className={styles.inner__image}>
            <Image
              src={"/desktop-facility-inner.avif"}
              alt="hero mobi"
              loading="eager"
              priority={true}
              quality={85}
              fill
              sizes="(min-width: 640px) 100vw"
            />
          </div>
          <div className={styles.content}>
            
            <motion.div className={styles.inner__list_item__up}
            initial={{ opacity: 0, height: "20rem" }}
              whileInView={{ opacity: 1, height: "132rem" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <span className={styles.item__number}>70</span>

              <span className={styles.item__text}>
                underground parking spaces 
                <br />with private and secured access
              </span>
            </motion.div>

            <motion.div className={styles.inner__list_item__medium}
            initial={{ opacity: 0, height: "20rem" }}
              whileInView={{ opacity: 1, height: "132rem" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            >
              <span className={styles.item__number}>15</span>

              <span className={styles.item__text}>
                outdoor bicycle parking spaces 
                <br />located within the courtyard
              </span>
            </motion.div>
            <motion.div className={styles.inner__list_item__down}
            initial={{ opacity: 0, height: "20rem" }}
              whileInView={{ opacity: 1, height: "132rem" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            >
              <span className={styles.item__number}>13</span>

              <span className={styles.item__text}>
                outdoor parking spaces offering 
                <br />flexibility and immediate access 
                <br />near the building
              </span>
            </motion.div>
          </div>
        </div>
        <div className={styles.rightside__line}>
          <div className={styles.rightside__image}>
            <Building />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="w-[224rem] h-[74rem] absolute bottom-[-61rem] left-0 -translate-0 z-3"
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
        </div>
      </div>
    </div>
  );
};
export default Index;
