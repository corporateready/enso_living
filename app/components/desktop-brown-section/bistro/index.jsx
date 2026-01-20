"use client"
import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import Building from "../../svg-components/building"
import ButtonPaperSVG from "../../svg-components/ButtonPaper"
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
                Bistro/ Restaurant {""}
                <br />
                spre închiriere
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={styles.description__text}
              >
                Fine-dining desfășurat pe 2 niveluri — {""}
                <br />
                la parter și mezanin, cu acces direct {""}
                <br />
                pentru rezidenți și zona de birouri
              </motion.p>
            </div>
          </div>
          <div className={styles.inner__image}>
            <Image
              src={"/desktop-bistro-inner.avif"}
              alt="enso living bistro restaurant"
              loading="eager"
              fill
              sizes="(min-width: 640px) 100vw, 50vw, 33vw"
            />
          </div>
          <motion.button
            type="button"
            className={styles.offer__btn}
            aria-label="open bistro form"
            onClick={handlerFormOpen}
            onHoverStart={() => setIsHoveredButton(true)}
                onHoverEnd={() => setIsHoveredButton(false)}
          >
            <span className={styles.span__text}>
              Solicită oferta pentru Bistro/ Restaurant
            </span>
            <ButtonPaperSVG isHoveredButton={isHoveredButton}/>
          </motion.button>
        </div>
        <div className={styles.rightside__line}>
          <div className={styles.rightside__image}>
            <Building />
            <motion.div
              className="w-[116rem] h-[36rem] absolute bottom-[8rem] left-[48rem] -translate-0 z-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Image
                src="/building-4.webp"
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
