"use client";
import React, { useState } from "react";
import Header from "./components/shared-ui/header";
import Hero from "./components/hero";
import Premium from "./components/premium";
import Multy from "./components/multy";
import Comercial from "./components/comercial";
import Bistro from "./components/bistro";
import Facility from "./components/facility";
import Landmark from "./components/landmark";
import Penthouse from "./components/penthouse";
import Duplex from "./components/duplex";
import Apartment from "./components/apartment";
import Design from "./components/design";
import Develolper from "./components/developer";
import Landscape from "./components/landscape";
import Location from "./components/location";
import DesktopBrownSection from "./components/desktop-brown-section";
import Lux from "./components/lux";
import DesktopWhiteSection from "./components/desktop-white-section";
import Footer from "./components/footer";
import { HeroForm } from "./components/hero-form";
import Cookies from "js-cookie";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";

const PIXEL_ID = process.env.NEXT_PUBLIC_PIXEL_ID;

export default function Home() {
  const router = useRouter();
  const eventIdGen = uuidv4();
  const formSubmittedEventId = uuidv4();
  
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [isFormSubmitted, setIsFormSubmitted] = React.useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [userLocation, setUserLocation] = React.useState("");
  const [isEventId, setIsEventId] = React.useState("");
  const [isFBP, setIsFBP] = React.useState("");
  const [isFBC, setIsFBC] = React.useState("");
  const [isPageViewEventId, setIsPageViewEventId] = React.useState("");
  const [isFormSubmittedEventId, setIsFormSubmittedEventId] =
    React.useState("");
    
  const [isExternalId, setIsExternalId] = React.useState("");
  const [isIP, setIP] = React.useState(null);

  React.useEffect(() => {
    const getClientLocation = async () => {
      const res = await fetch("https://ipinfo.io/json");
      const locationData = await res.json();
      if (locationData) {
        setUserLocation(locationData.city);
        setIP(locationData.ip);
      }
    };

    getClientLocation();
  }, []);

  React.useEffect(() => {
    const pvei = localStorage.getItem("pageview_event_id");
    const ei = localStorage.getItem("external_id");

    if (typeof window !== "undefined") {
      setIsPageViewEventId(pvei);
      setIsExternalId(ei);
    }
  }, []);

   React.useEffect(() => {
    const fbp = Cookies.get("_fbp");
    setIsEventId(eventIdGen);
    setIsFBP(fbp);
  }, []);

  React.useEffect(() => {
    if (typeof window.fbq !== "undefined") {
      window.fbq("init", PIXEL_ID);
    }
    const fbc = Cookies.get("_fbc");
    setIsFBC(fbc)
  }, []);

  const formSubmitTrack = () => {
    if (typeof window !== "undefined" && typeof window.fbq !== "undefined") {
      window.fbq(
        "track",
        "Lead",
        {},
        {
          eventID: isFormSubmittedEventId,
          fbc: isFBC,
          em: email,
          ph: phone,
          fn: name,
          ct: userLocation,
          ip: isIP,
          pageview_event_id: isPageViewEventId,
          external_id: isExternalId,
        },
      );
    }

    if (typeof window !== "undefined" && window.posthog)
      window.posthog.capture("form_submitted", {
        fbc: isFBC,
        fbp: isFBP,
        email: email,
        phone: phone,
        name: name,
        pageview_event_id: isPageViewEventId,
        external_id: isExternalId,
        form_submitted_event_id: isFormSubmittedEventId,
      });

    if (!isFormSubmitted) {
      setIsFormSubmitted(true);
      router.push("/thank-you-ro");
    }
  };

  const handlerFormOpen = () => {
    setIsOpen(!isOpen);
    setIsFormSubmittedEventId(formSubmittedEventId);
  };

  React.useEffect(() => {
    const fbp = Cookies.get("_fbp");
    setIsEventId(eventIdGen);
    setIsFBP(fbp);
  }, []);

  React.useEffect(() => {
    if (typeof window.fbq !== "undefined") {
      window.fbq("init", PIXEL_ID);
    }
    const fbc = Cookies.get("_fbc");
    setIsFBC(fbc)
  }, []);

  return (
    <div className="flex min-h-screen w-dvw flex-col items-center justify-center overflow-x-hidden relative z-0">
      <Header />
      <main className="w-full h-full">
        <Hero handlerFormOpen={handlerFormOpen} />
        <DesktopBrownSection handlerFormOpen={handlerFormOpen} />
        <Lux />
        <DesktopWhiteSection handlerFormOpen={handlerFormOpen} />
        <div>
          <Premium handlerFormOpen={handlerFormOpen} />
          <Multy />
          <Comercial handlerFormOpen={handlerFormOpen} />
          <Bistro handlerFormOpen={handlerFormOpen} />
          <Facility />
          <Landmark />
          <Penthouse handlerFormOpen={handlerFormOpen} />
          <Duplex handlerFormOpen={handlerFormOpen} />
          <Apartment handlerFormOpen={handlerFormOpen} />
          <Design />
          <Develolper />
          <Landscape />
          <Location handlerFormOpen={handlerFormOpen} />
        </div>
        <Footer />
        {isOpen && (
          <HeroForm
            handlerFormOpen={handlerFormOpen}
            name={name}
            email={email}
            phone={phone}
            setPhone={setPhone}
            setName={setName}
            setEmail={setEmail}
            isFormSubmitted={isFormSubmitted}
            setIsFormSubmitted={setIsFormSubmitted}
            formSubmitTrack={formSubmitTrack}
          />
        )}
      </main>
    </div>
  );
}
