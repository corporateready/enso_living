"use client";
import React from "react";
import styles from "./sytles.module.scss";
import Image from "next/image";
import Enso from "../pin-icons/enso";
import Carrefour from "../pin-icons/carrefour";
import Kaufland from "../pin-icons/kaufland";
import Lidl from "../pin-icons/lidl";
import Poiana from "../pin-icons/poiana";
import Amfiteatr from "../pin-icons/amfiteatr";
import BranCastle from "../pin-icons/bran-castle";
import Rasnov from "../pin-icons/rasnov";
import DinoPark from "../pin-icons/dino-park";
import NewCenter from "../pin-icons/new-center";
import Afibrasjov from "../pin-icons/afibrashov";
import Coresi from "../pin-icons/coresi";
import OldCenter from "../pin-icons/old-center";
import Airport from "../pin-icons/airport";
import DirectionLine from "../pin-icons/line-direction";
import ButtonDownload from "../svg-components/ButtonPaper"
import { motion } from "motion/react";

const Index = ({ handlerFormOpen }) => {
  const ref = React.useRef();
  const [isHoveredButton, setIsHoveredButton] = React.useState(false);
  return (
    <div className={styles.section} ref={ref}>
      <Poiana />
      <Amfiteatr />
      <BranCastle />
      <Rasnov />
      <DinoPark />
      <Enso />
      <Carrefour />
      <Kaufland />
      <Lidl />
      <DirectionLine />
      <p className="text-white text-[11rem] absolute top-[952rem] left-[870rem] z-1 w-full">
        {" "}
        Str. Calea București
      </p>
      <div className={styles.head__overlay} />
      <Image
        src="/clear-map.png"
        alt="enso living slide"
        priority
        quality={85}
        fill
        sizes="(min-width: 640px) 100vw"
      />
      <NewCenter />
      <Afibrasjov />
      <Coresi />
      <OldCenter />
      <Airport />
      <div className="w-full h-[1274rem]"></div>
      <div className={styles.head__content}>
        <motion.p
          className={styles.head__title}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Fast access to Brasov’s key destinations 
          <br />and panoramic mountain views
        </motion.p>
        <motion.p
          className={styles.head__subcontent_text}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Premium location positioned between 
          <br />residential and business districts, 
          <br />offering panoramic mountain views 
          <br />and exposure to a select audience
        </motion.p>
       
        <motion.button
          type="button"
          className={styles.offer__btn}
          onClick={handlerFormOpen}
          aria-label="open location form"
          onHoverStart={() => setIsHoveredButton(true)}
          onHoverEnd={() => setIsHoveredButton(false)}
        >
          <span className={styles.span__text}>Request the launch offer</span>
         <ButtonDownload isHoveredButton={isHoveredButton} />
        </motion.button>
      </div>
    </div>
  );
};
export default Index;
