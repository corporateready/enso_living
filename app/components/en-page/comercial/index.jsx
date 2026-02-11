"use client"
import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import Building from "../svg-components/building-mobile";
import ButtonPaper from "../svg-components/ButtonPaper";
import { motion, useInView } from "motion/react";

const Index = ({ handlerFormOpen }) => {
  const container = React.useRef(null)
    const ref = React.useRef(null);
    const isInView = useInView(ref, { root: container, once: true, margin: "-50px" });
  return (
    <div className={styles.premium} ref={ref}>
      <div className={styles.premium__inner} >
        <div className={styles.premium__header_inner}>
          <div className={styles.premium__title_image}>
            <Building />
            <motion.div
              className="w-[20rem] h-[12rem] absolute bottom-[4.5rem] right-[3rem] translate-0 z-3"
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
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
          <div className={styles.premium__title_content}>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={styles.premium__title_text}
            >
              Commercial {""}
              <br />
              Showroom {""}
              <br />
              for lease within {""}
              <br />
              ENSO LIVING 
            </motion.p>
          </div>
        </div>
        <div className={styles.premium__content}>
          <div className={styles.premium__inner_image}>
            <Image
              src={"/comercial-inner.avif"}
              alt="hero mobi"
              loading="eager"
              priority={true}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className={styles.inner__list}>
            <motion.div className={styles.inner__list_item}
            initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <svg
                className="w-[12rem] h-[13rem]"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.51225 0.538223H1.03375C0.916596 0.538223 0.619654 0.452221 0.536817 0.538223C0.453979 0.624225 0.536817 0.875185 0.536817 0.99681V4.66551"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.4637 4.66551V0.99681C12.4637 0.875185 12.5466 0.624225 12.4637 0.538223C12.3809 0.452221 12.0839 0.538223 11.9668 0.538223H8.48828"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.48828 12.4613H11.9668C12.0839 12.4613 12.3809 12.5473 12.4637 12.4613C12.5466 12.3753 12.4637 12.1243 12.4637 12.0027V8.33398"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M0.536817 8.33398V12.0027C0.536817 12.1243 0.453979 12.3753 0.536817 12.4613C0.619654 12.5473 0.916596 12.4613 1.03375 12.4613H4.51225"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className={styles.item__text}>
                Generous 310 sqm space,
                <br />
                adaptable to various business concepts
              </span>
            </motion.div>
            <motion.div className={styles.inner__list_item}
            initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: .1, ease: "easeOut" }}
            >
              <svg
                className="flex w-[13rem] h-[14rem]"
                viewBox="0 0 13 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.5 10V12.5C9.5 12.7652 9.39464 13.0196 9.20711 13.2071C9.01957 13.3946 8.76522 13.5 8.5 13.5H1.5C1.23478 13.5 0.98043 13.3946 0.792893 13.2071C0.605357 13.0196 0.5 12.7652 0.5 12.5V1.5C0.5 1.23478 0.605357 0.98043 0.792893 0.792893C0.98043 0.605357 1.23478 0.5 1.5 0.5H8.5C8.76522 0.5 9.01957 0.605357 9.20711 0.792893C9.39464 0.98043 9.5 1.23478 9.5 1.5V4"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.5 7H4.5"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.5 5L4.5 7L6.5 9"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className={styles.item__text}>
                3 independent entrances and
                <br />
                a large street-facing storefront
              </span>
            </motion.div>
            <motion.div className={styles.inner__list_item}
            initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: .2, ease: "easeOut" }}
            >
              <svg
                className="w-[13rem] h-[14rem] mt-[-2rem]"
                viewBox="0 0 13 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.3902 0.93C10.2983 0.797534 10.1758 0.689251 10.033 0.614379C9.89021 0.539506 9.73144 0.500265 9.57022 0.5H3.43022C3.269 0.500265 3.11023 0.539506 2.96746 0.614379C2.82468 0.689251 2.70212 0.797534 2.61022 0.93L1.01022 3.24C0.880286 3.43679 0.824078 3.67317 0.851525 3.90739C0.878972 4.1416 0.988308 4.35858 1.16022 4.52L5.83022 9.24C6.01397 9.40584 6.2527 9.49764 6.50022 9.49764C6.74774 9.49764 6.98647 9.40584 7.17022 9.24L11.8402 4.52C12.0121 4.35858 12.1215 4.1416 12.1489 3.90739C12.1764 3.67317 12.1202 3.43679 11.9902 3.24L10.3902 0.93Z"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.49969 0.5L4.17969 3.94L6.35969 9.49"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.5 0.5L8.82 3.94L6.64 9.49"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M0.849609 3.94043H12.1496"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.5 13.5C12.5 12.9696 12.2893 12.4609 11.9142 12.0858C11.5391 11.7107 11.0304 11.5 10.5 11.5H2.5C1.96957 11.5 1.46086 11.7107 1.08579 12.0858C0.710714 12.4609 0.5 12.9696 0.5 13.5V13.5"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className={styles.item__text}>
                Premium location between the residential and business{""}
                <br />
                zones, offering exposure to a select audience
              </span>
            </motion.div>
          </div>
          <button
            type="button"
            className={styles.hero__btn}
            onClick={handlerFormOpen}
          >
            <span className={styles.span__text}>
              Request an offer for<br />
              the commercial showroom
            </span>
            <ButtonPaper />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Index;
