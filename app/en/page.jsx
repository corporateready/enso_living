"use client";
import React, { useState } from "react";
import Header from "../components/en-page/shared-ui/header";
import Hero from "../components/en-page/hero";
import Premium from "../components/en-page/premium";
import Multy from "../components/en-page/multy";
import Comercial from "../components/en-page/comercial";
import Bistro from "../components/en-page/bistro";
import Facility from "../components/en-page/facility";
import Landmark from "../components/en-page/landmark";
import Penthouse from "../components/en-page/penthouse";
import Duplex from "../components/en-page/duplex";
import Apartment from "../components/en-page/apartment";
import Design from "../components/en-page/design";
import Develolper from "../components/en-page/developer";
import Landscape from "../components/en-page/landscape";
import Location from "../components/en-page/location";
import DesktopBrownSection from "../components/en-page/desktop-brown-section";
import Lux from "../components/en-page/lux";
import DesktopWhiteSection from "../components/en-page/desktop-white-section";
import Footer from "../components/en-page/footer";
import { HeroForm } from "../components/en-page/hero-form";
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
