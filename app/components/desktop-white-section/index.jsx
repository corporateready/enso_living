"use client";
import React from "react";
import styles from "./styles.module.scss";
import Penthouse from "./penthouse";
import Delux from "./duplex";
import Apartment from "./apartment";
import DesktopSlider from "../desktop-slider"
import DesktopLocation from "../desktop-location"
import Design from "./design"
import Developer from "./developer"

const Index = ({handlerFormOpen}) => {
  return (
    <div className={styles.section}>
      <Penthouse handlerFormOpen={handlerFormOpen}/>
      <Delux handlerFormOpen={handlerFormOpen}/>
      <Apartment handlerFormOpen={handlerFormOpen}/>
      <Design />
      <Developer />
      <DesktopSlider />
      <DesktopLocation handlerFormOpen={handlerFormOpen}/>
    </div>
  );
};

export default Index;
