"use client";
import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import Building from "../../svg-components/building";
import ButtonPaperSVG from "../../svg-components/ButtonPaper";
import { motion } from "motion/react";

const Index = ({ handlerFormOpen }) => {
  const premiumRef = React.useRef(null);
  const [isHoveredButton, setIsHoveredButton] = React.useState(false);
  return (
    <div className={styles.section}>
      <div className={styles.wrapper} ref={premiumRef}>
        <div className={styles.inner}>
          <div className={styles.inner__header}>
            <div className={styles.inner__image}>
              <Image
                src={"/platinum-inner.avif"}
                alt="hero mobi"
                loading="eager"
                priority={true}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className={styles.head__content}>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={styles.title__text}
              >
                Premium offices
                <br />for lease
                <span className="inline-block mt-[10rem]">in ENSŌ LIVING</span>
                <br />
                Business Center
              </motion.p>
              <p className={styles.description__text}>
                The opportunity to work in the 
                <br />comfort of your own residence
              </p>
              <motion.button
                type="button"
                className={styles.offer__btn}
                aria-label="open premium form"
                onClick={handlerFormOpen}
                onHoverStart={() => setIsHoveredButton(true)}
                onHoverEnd={() => setIsHoveredButton(false)}
              >
                <span className={styles.span__text}>
                  Request office leasing details
                </span>
                <ButtonPaperSVG isHoveredButton={isHoveredButton} />
              </motion.button>
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.content__columns}>
              <div className={styles.column__left}>
                <div className={styles.inner__list_item}>
                  <svg
                    className="w-[24rem] h-[24rem]"
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
                    Total area: 298 sqm – 2,200 sqm
                  </span>
                </div>
                <div className={styles.inner__list_item}>
                  <svg
                    className="w-[26rem] h-[24rem]"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.6538 2.80762H2.34615C1.32655 2.80762 0.5 3.63417 0.5 4.65378V9.73074C0.5 10.7504 1.32655 11.5769 2.34615 11.5769H10.6538C11.6734 11.5769 12.5 10.7504 12.5 9.73074V4.65378C12.5 3.63417 11.6734 2.80762 10.6538 2.80762Z"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.73047 11.5769V2.80762"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.26953 11.5769V2.80762"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.19238 2.80771C4.19238 2.19567 4.43551 1.60869 4.86829 1.17591C5.30107 0.743133 5.88804 0.5 6.50008 0.5C7.11211 0.5 7.69908 0.743133 8.13186 1.17591C8.56464 1.60869 8.80777 2.19567 8.80777 2.80771"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className={styles.item__text}>
                    4 levels of premium office spaces
                  </span>
                </div>
                <div className={styles.inner__list_item}>
                  <svg
                    className="w-[24rem] h-[25rem]"
                    viewBox="0 0 13 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.19238 10.6532L6.50008 12.9609L8.80777 10.6532"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.19238 2.80762L6.50008 0.499925L8.80777 2.80762"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M0.5 0.960938V12.9609"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.5 0.960938V12.9609"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <span className={styles.item__text}>
                    2 high-speed elevators{" "}
                  </span>
                </div>
                <div className={styles.inner__list_item}>
                  <svg
                    className="w-[24rem] h-[22rem]"
                    viewBox="0 0 13 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.5 8.8077C0.5 7.21638 1.13214 5.69024 2.25736 4.565C3.38258 3.43977 4.9087 2.80762 6.5 2.80762C8.0913 2.80762 9.61742 3.43977 10.7426 4.565C11.8679 5.69024 12.5 7.21638 12.5 8.8077H0.5Z"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M0.5 11.1152H12.5"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.5 2.80772V0.5"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.11523 0.5H7.88447"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <span className={styles.item__text}>
                  Reception & access control – 
                  <br />modern security and professional 
                  <br />front-of-house experience
                  </span>
                </div>
              </div>
              <div className={styles.column__right}>
                <div className={styles.inner__list_item}>
                  <svg
                    className="w-[24rem] h-[24rem]"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 5.25C4.69036 5.25 5.25 4.69036 5.25 4C5.25 3.30964 4.69036 2.75 4 2.75C3.30964 2.75 2.75 3.30964 2.75 4C2.75 4.69036 3.30964 5.25 4 5.25Z"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4 0.75V1.75"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1.7002 1.7002L2.4102 2.4102"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M0.75 4H1.75"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1.7002 6.29984L2.4102 5.58984"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4 7.25V6.25"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.29984 6.29984L5.58984 5.58984"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.25 4H6.25"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.29984 1.7002L5.58984 2.4102"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.5769 0.5H1.42308C0.913276 0.5 0.5 0.913276 0.5 1.42308V11.5769C0.5 12.0867 0.913276 12.5 1.42308 12.5H11.5769C12.0867 12.5 12.5 12.0867 12.5 11.5769V1.42308C12.5 0.913276 12.0867 0.5 11.5769 0.5Z"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.5 0.5V12.5"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <span className={styles.item__text}>
                    Floor-to-ceiling glass facade 
                  </span>
                </div>
                <div className={styles.inner__list_item}>
                  <svg
                    className="w-[24rem] h-[26rem] mt-[8rem]"
                    viewBox="0 0 13 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.1002 6.5C11.4256 6.5 12.5001 5.15685 12.5001 3.5C12.5001 1.84315 11.4256 0.5 10.1002 0.5C8.7747 0.5 7.7002 1.84315 7.7002 3.5C7.7002 5.15685 8.7747 6.5 10.1002 6.5Z"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.0996 6.5V13.5"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 0.5V13.5"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.49992 0.5V3C5.49992 3.32831 5.43526 3.6534 5.30962 3.95671C5.18399 4.26002 4.99984 4.53562 4.7677 4.76777C4.53556 4.99991 4.25996 5.18406 3.95665 5.3097C3.65334 5.43534 3.32826 5.5 2.99996 5.5V5.5C2.33693 5.5 1.70105 5.23661 1.23222 4.76777C0.763388 4.29893 0.5 3.66304 0.5 3V0.5"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <span className={`${styles.item__text} py-[-20rem]`}>
                    Direct access to the lobby
                    <br /> and restaurant
                  </span>
                </div>
                <div className={styles.inner__list_item}>
                  <svg
                    className="w-[24rem] h-[24rem]"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.94434 0.5L6.72213 2.27778L8.49992 0.5"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.49992 12.0561L6.72213 10.2783L4.94434 12.0561"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.5005 4.5L10.7227 6.27778L12.5005 8.05556"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.83335 3.16699L8.5 4.50033"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.5 8.05566L9.83335 9.389"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.72266 2.27832V10.2783"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.72266 6.27832L11.1671 6.27832"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1.3889 6.36621H0.5"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2.82057 9.82422L2.18945 10.4553"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2.82057 2.90943L2.18945 2.27832"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.50027 3.25C5.67515 3.25 4.66168 3.58315 4.07822 4.16659C3.49477 4.75004 3.16699 5.54136 3.16699 6.36648C3.16699 7.1916 3.49477 7.98292 4.07822 8.56637C4.66168 9.14982 5.67515 9.5 6.50027 9.5"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className={styles.item__text}>
                    Smart climate control systems
                  </span>
                </div>
                <div className={styles.inner__list_item}>
                  <svg
                    className="w-[24rem] h-[26rem]"
                    viewBox="0 0 13 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.99146 8.27686C3.22082 8.27686 3.40676 8.09093 3.40676 7.86158C3.40676 7.63222 3.22082 7.44629 2.99146 7.44629C2.7621 7.44629 2.57617 7.63222 2.57617 7.86158C2.57617 8.09093 2.7621 8.27686 2.99146 8.27686Z"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.69068 8.27686C5.92004 8.27686 6.10598 8.09093 6.10598 7.86158C6.10598 7.63222 5.92004 7.44629 5.69068 7.44629C5.46132 7.44629 5.27539 7.63222 5.27539 7.86158C5.27539 8.09093 5.46132 8.27686 5.69068 8.27686Z"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.3899 8.27686C8.61926 8.27686 8.80519 8.09093 8.80519 7.86158C8.80519 7.63222 8.61926 7.44629 8.3899 7.44629C8.16054 7.44629 7.97461 7.63222 7.97461 7.86158C7.97461 8.09093 8.16054 8.27686 8.3899 8.27686Z"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.8988 2.46289C4.92223 2.4632 3.96403 2.72837 3.12626 3.23019C2.28849 3.732 1.60252 4.45165 1.14141 5.31248C0.680297 6.17332 0.461321 7.14311 0.507799 8.11856C0.554277 9.09401 0.864469 10.0386 1.40534 10.8517L0.5 13.2603L3.53163 12.7122C4.26164 13.0689 5.06275 13.2563 5.87525 13.2603C6.68775 13.2643 7.49068 13.0849 8.22418 12.7354C8.95769 12.3859 9.60285 11.8754 10.1116 11.2419C10.6203 10.6083 10.9795 9.86816 11.1623 9.07651C11.3452 8.28485 11.347 7.46213 11.1676 6.66968C10.9882 5.87724 10.6322 5.1355 10.1263 4.49976C9.62032 3.86402 8.97739 3.35068 8.24542 2.998C7.51345 2.64533 6.71131 2.46241 5.8988 2.46289V2.46289Z"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.72582 2.34642C7.97181 3.40955 8.54862 4.62726 8.82761 5.10228C8.86852 5.16872 8.92346 5.22542 8.98858 5.2684C9.0537 5.31138 9.12743 5.3396 9.20461 5.3511C9.75127 5.44535 11.1123 5.55091 11.8436 4.48777C12.5637 3.48495 12.5336 1.7206 12.4695 0.879891C12.4669 0.817256 12.4496 0.756116 12.4188 0.701504C12.388 0.646893 12.3447 0.600371 12.2924 0.565769C12.2402 0.531167 12.1804 0.509474 12.1181 0.502475C12.0558 0.495476 11.9928 0.503372 11.9341 0.525512C11.1236 0.759252 9.43458 1.3436 8.72582 2.34642Z"
                      fill="#463C37"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.2676 1.99609C10.404 3.01371 9.64614 4.11644 9.00555 5.28729L11.2676 1.99609Z"
                      fill="#463C37"
                    />
                    <path
                      d="M11.2676 1.99609C10.404 3.01371 9.64614 4.11644 9.00555 5.28729"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <span className={styles.item__text}>
                    Private balconies on every 
                    <br />level – ideal for relaxation 
                    <br />and efficient networking
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rightside__line}>
          <div className={styles.rightside__image}>
            <Building />
            <motion.div
              className="w-[210rem] h-[80rem] absolute bottom-[26rem] right-[9rem] translate-0 z-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Image
                src="/building-1.webp"
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
