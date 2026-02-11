import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import { motion } from "motion/react";
import Building from "../../svg-components/building";

const Index = () => {
  const premiumRef = React.useRef(null);
  return (
    <div className={styles.section}>
      <div className={styles.wrapper} ref={premiumRef}>
        <div className={styles.inner}>
          <div className={styles.inner__header}>
            <div className={styles.head__content}>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={styles.title__text}
              >
                Multifunctional
                <br />Office Lobby
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={styles.description__text}
              >
                Impressive double-height ceilings 
                <br />with direct connection to the bistro 
                <br />area, and Face ID–controlled access
              </motion.p>
            </div>
          </div>
          <div className={styles.inner__image}>
            <Image
              src={"/desktop-multy-inner.avif"}
              alt="hero mobi"
              loading="eager"
              priority
              quality={85}
              fill
              sizes="(min-width: 640px) 100vw"
            />
          </div>
        </div>
        <div className={styles.rightside__line}>
          <div className={styles.rightside__image}>
            <motion.div
              className="absolute bottom-[11rem] left-[13rem] z-3 w-[36rem] h-[33rem]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Image
                src="/building-2.webp"
                alt="building part"
                loading="eager"
                priority={true}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>
            <Building />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Index;
