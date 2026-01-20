"use client";
import React from "react";
import styles from "./styles.module.scss";
import Premium from "./premium";
import Multy from "./multy"
import Comercial from "./comercial"
import Bistro from "./bistro"
import Facility from "./facility"

const Index = ({handlerFormOpen}) => {
  return (
    <div className={styles.section}>
      <Premium handlerFormOpen={handlerFormOpen}/>
      <Multy />
      <Comercial handlerFormOpen={handlerFormOpen}/>
      <Bistro handlerFormOpen={handlerFormOpen}/>
      <Facility />
    </div>
  )
}

export default Index;