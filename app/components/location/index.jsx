import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import Poiana from "../pin-icons/poiana-mobile";
import Amfiteatr from "../pin-icons/amfiteatr-mobile"
import BranCastle from "../pin-icons/bran-castle-mobile"
import Rasnov from "../pin-icons/rasnov-mobile"
import DinoPark from "../pin-icons/dino-park-mobile"
import Enso from "../pin-icons/enso-mobile"
import Carrefour from "../pin-icons/carrefour-mobile"
import Kaufland from "../pin-icons/kaufland-mobile"
import Lidl from '../pin-icons/lidl-mobile'
import DirectionLine from "../pin-icons/line-direction-mobile"
import NewCenter from "../pin-icons/new-center-mobile";
import Afibrasjov from "../pin-icons/afibrashov-mobile"
import Coresi from "../pin-icons/coresi-mobile"
import OldCenter from "../pin-icons/old-center-mobile"
import Airport from "../pin-icons/airport-mobile"
import Building from "../svg-components/building-mobile";
import ButtonPaper from "../svg-components/ButtonPaper";
import { motion } from "motion/react";

const Index = ({handlerFormOpen}) => {
  return (
    <div className={styles.premium}>
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
       <Image
          src={"/location-inner-mobile.avif"}
          alt="enso living location"
          loading="eager"
          priority={true}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1920px) 50vw, 33vw"
        />
        <NewCenter />
        <Afibrasjov />
        <Coresi />
        <OldCenter />
        <Airport />
      <div className={styles.premium__inner_image}>
        <button type="button" className={styles.hero__btn} onClick={handlerFormOpen}>
          <span className={styles.span__text}>Solicită oferta de lansare</span>
          <ButtonPaper />
        </button>
       
      </div>
    </div>
  );
};
export default Index;
