import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import Building from "../svg-components/building-mobile";
import ButtonPaper from "../svg-components/ButtonPaper";
import { motion } from "motion/react";

const Index = ({ handlerFormOpen }) => {
  const ref = React.useRef(null);
  return (
    <div className={styles.premium} ref={ref}>
      <div className={styles.premium__inner}>
        <div className={styles.premium__header_inner}>
          <div className={styles.premium__title_image}>
             <Building />
            <motion.div
              className="w-[46rem] h-[14rem] absolute bottom-[3rem] left-[14rem] translate-0 z-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
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
          <div className={styles.premium__title_content}>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={styles.premium__title_text}
            >
              Bistro/ Restaurant
              <br />
              spre închiriere 
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={styles.premium__title_description}
            >
              Fine-dining desfășurat pe 2 niveluri — <br />
              la parter și mezanin
            </motion.p>
          </div>
        </div>
        <div className={styles.premium__content}>
          <div className={styles.premium__inner_image}>
            <Image
              src={"/bistro-inner.avif"}
              alt="hero mobi"
              loading="eager"
              priority={true}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className={styles.box__dekor}>
              <span className={styles.span}>
                Acces direct pentru rezidenți și zona de birouri
              </span>
            </div>
          </div>
          <button
            type="button"
            className={styles.hero__btn}
            onClick={handlerFormOpen}
          >
            <span className={styles.span__text}>
              Solicită oferta pentru
              <br />
              Bistro/ Restaurant
            </span>
            <ButtonPaper />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Index;
