"use client";
import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import { motion, useInView } from "motion/react";
import Building from "../../svg-components/building";
import ButtonPaperSVG from "../../svg-components/ButtonPaper";

const Index = ({ handlerFormOpen }) => {
const container = React.useRef(null)
  const ref = React.useRef(null);
  const isInView = useInView(ref, { root: container, once: true, margin: "-100px" });
  const [isHoveredButton, setIsHoveredButton] = React.useState(false);
  return (
    <div className={styles.section} ref={ref}>
      <div className={styles.wrapper} >
        <div className={styles.inner}>
          <div className={styles.inner__header}>
            <div className={styles.inner__image}>
              <Image
                src={"/comercial-inner.avif"}
                alt="hero mobi"
                loading="eager"
                priority={true}
                quality={85}
                fill
                sizes="(min-width: 640px) 100vw"
              />
            </div>
            <motion.button
              type="button"
              className={styles.offer__btn}
              aria-label="open comercial form"
              onClick={handlerFormOpen}
              onHoverStart={() => setIsHoveredButton(true)}
              onHoverEnd={() => setIsHoveredButton(false)}
            >
              <span className={styles.span__text}>
                Request an offer for the commercial showroom
              </span>
              <ButtonPaperSVG isHoveredButton={isHoveredButton} />
            </motion.button>
          </div>
          <div className={styles.head__content}>
            <motion.p
              className={styles.title__text}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              Commercial
              <br />Showroom 
              <br />for lease within
              <br />ENSO LIVING 
                          </motion.p>
            <div className={styles.content}>
              <motion.div
                className={styles.inner__list_item}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <svg
                  className="w-[25rem] h-[25rem]"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.80769 0.5H1.42308C1.17826 0.5 0.943473 0.597252 0.770363 0.770363C0.597252 0.943473 0.5 1.17826 0.5 1.42308V8.80769"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M24.5001 8.80769V1.42308C24.5001 1.17826 24.4028 0.943473 24.2297 0.770363C24.0566 0.597252 23.8218 0.5 23.577 0.5H16.1924"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.1924 24.5001H23.577C23.8218 24.5001 24.0566 24.4028 24.2297 24.2297C24.4028 24.0566 24.5001 23.8218 24.5001 23.577V16.1924"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M0.5 16.1924V23.577C0.5 23.8218 0.597252 24.0566 0.770363 24.2297C0.943473 24.4028 1.17826 24.5001 1.42308 24.5001H8.80769"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className={styles.item__text}>
                  Generous 310 sqm space, adaptable 
                  <br />to various business concepts
                </span>
              </motion.div>
              <motion.div
                className={styles.inner__list_item}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              >
                <svg
                  className="w-[25rem] h-[27rem]"
                  viewBox="0 0 25 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.5 19.5V24.5C18.5 25.0304 18.2893 25.5391 17.9142 25.9142C17.5391 26.2893 17.0304 26.5 16.5 26.5H2.5C1.96957 26.5 1.46086 26.2893 1.08579 25.9142C0.710714 25.5391 0.5 25.0304 0.5 24.5V2.5C0.5 1.96957 0.710714 1.46086 1.08579 1.08579C1.46086 0.710714 1.96957 0.5 2.5 0.5H16.5C17.0304 0.5 17.5391 0.710714 17.9142 1.08579C18.2893 1.46086 18.5 1.96957 18.5 2.5V7.5"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M24.5 13.5H8.5"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.5 9.5L8.5 13.5L12.5 17.5"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <span className={styles.item__text}>
                  3 independent entrances and 
                  <br />a large street-facing storefront
                </span>
              </motion.div>
              <motion.div
                className={styles.inner__list_item}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              >
                <svg
                  className="w-[25rem] h-[27rem]"
                  viewBox="0 0 25 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.2804 1.36C20.0967 1.09507 19.8515 0.878502 19.566 0.728757C19.2804 0.579013 18.9629 0.500531 18.6404 0.5H6.36044C6.038 0.500531 5.72047 0.579013 5.43491 0.728757C5.14935 0.878502 4.90423 1.09507 4.72044 1.36L1.52044 5.98C1.26057 6.37358 1.14816 6.84634 1.20305 7.31477C1.25794 7.7832 1.47662 8.21716 1.82044 8.54L11.1604 17.98C11.5279 18.3117 12.0054 18.4953 12.5004 18.4953C12.9955 18.4953 13.4729 18.3117 13.8404 17.98L23.1804 8.54C23.5243 8.21716 23.7429 7.7832 23.7978 7.31477C23.8527 6.84634 23.7403 6.37358 23.4804 5.98L20.2804 1.36Z"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.5004 0.5L7.86035 7.38L12.2204 18.48"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.5 0.5L17.14 7.38L12.78 18.48"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1.2002 7.38086H23.8002"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M24.5 26.5C24.5 25.4391 24.0786 24.4217 23.3284 23.6716C22.5783 22.9214 21.5609 22.5 20.5 22.5H4.5C3.43913 22.5 2.42172 22.9214 1.67157 23.6716C0.921427 24.4217 0.5 25.4391 0.5 26.5V26.5"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <span className={styles.item__text}>
                  Premium location between 
                  <br />the residential and business zones, 
                  <br />offering exposure to a select audience
                </span>
              </motion.div>
            </div>
          </div>
        </div>
        <div className={styles.rightside__line}>
          <div className={styles.rightside__image}>
            <Building />
            <motion.div
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute bottom-[11rem] right-[11rem] translate-0 z-3 w-[56rem] h-[20rem]"
            >
              <Image
                src="/building-3.webp"
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
