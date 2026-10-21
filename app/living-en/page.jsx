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
import { readTrackingIds, waitForTrackingIds } from "../../lib/tracking-ids";
import { whenMarketingConsent } from "../../lib/consent";
import { submitLead } from "../../lib/submit-lead";

const PIXEL_ID = process.env.NEXT_PUBLIC_PIXEL_ID;

export default function Home() {
  const router = useRouter();
  const formSubmittedEventId = uuidv4();
  
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [isFormSubmitted, setIsFormSubmitted] = React.useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [userLocation, setUserLocation] = React.useState("");
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

    // ipinfo.io sees the visitor's IP, so only look it up after marketing consent.
    return whenMarketingConsent(getClientLocation);
  }, []);

  React.useEffect(() => {
    const { pageview_event_id, external_id } = readTrackingIds();

    if (typeof window !== "undefined") {
      setIsPageViewEventId(pageview_event_id);
      setIsExternalId(external_id);
    }
  }, []);

   React.useEffect(() => {
    const fbp = Cookies.get("_fbp");
    setIsFBP(fbp);
  }, []);

  React.useEffect(() => {
    if (typeof window.fbq !== "undefined") {
      window.fbq("init", PIXEL_ID);
    }
    const fbc = Cookies.get("_fbc");
    setIsFBC(fbc)
  }, []);

  const submissionIdRef = React.useRef(null);

  // Sends the lead to ENSO first. Resolves to true once ENSO has it; the form
  // shows an error otherwise. Meta and PostHog fire only after that.
  const formSubmitTrack = async ({ honeypot } = {}) => {
    if (isFormSubmitted) return true;

    setIsFormSubmitted(true);

    const submittedName = name;
    const submittedEmail = email;
    const submittedPhone = phone;

    // One id per lead. A retry after a failed send reuses it, so ENSO never
    // records the same lead twice. The same id goes to Meta and PostHog.
    if (!submissionIdRef.current) submissionIdRef.current = uuidv4();
    const submissionId = submissionIdRef.current;

    const delivered = await submitLead({
      submissionId,
      name: submittedName,
      email: submittedEmail,
      phone: submittedPhone,
      placement: "popup",
      honeypot,
    });
    if (!delivered) {
      setIsFormSubmitted(false);
      return false;
    }

    const trackingIds = await waitForTrackingIds();
    const pageviewEventId = trackingIds.pageview_event_id || isPageViewEventId;
    const externalId = trackingIds.external_id || isExternalId;
    const fbp = Cookies.get("_fbp") || isFBP;
    const fbc = Cookies.get("_fbc") || isFBC;

    setIsPageViewEventId(pageviewEventId);
    setIsExternalId(externalId);
    setIsFBP(fbp);
    setIsFBC(fbc);

    if (typeof window !== "undefined" && typeof window.fbq !== "undefined") {
      window.fbq(
        "track",
        "Lead",
        {},
        {
          eventID: submissionId,
          fbc,
          em: submittedEmail,
          ph: submittedPhone,
          fn: submittedName,
          ...(userLocation && { ct: userLocation }),
          ...(isIP && { ip: isIP }),
          pageview_event_id: pageviewEventId,
          external_id: externalId,
        },
      );
    }

    if (typeof window !== "undefined" && window.posthog)
      // Analytics only: the lead itself already reached ENSO above.
      window.posthog.capture("form_submitted", {
        fbc,
        fbp,
        placement: "popup",
        pageview_event_id: pageviewEventId,
        external_id: externalId,
        submission_id: submissionId,
        form_submitted_event_id: submissionId,
      });

    router.push("/thank-you-en");
    return true;
  };

  const handlerFormOpen = () => {
    setIsOpen(!isOpen);
    setIsFormSubmittedEventId(formSubmittedEventId);
  };

  React.useEffect(() => {
    const fbp = Cookies.get("_fbp");
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
