"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Header from "@/components/header/Header";
import translationEN from "@/components/translations/TranslationEN.json";
import translationDK from "@/components/translations/TranslationDK.json";
import translationUA from "@/components/translations/TranslationUA.json";
import links from "@/components/translations/links.json";
import Hero from "@/components/hero/Hero";

export default function MainPage({ params }) {
  const [lang, setLang] = useState("");
  const l = useParams();

  useState(() => {
    setLang(l.lang);
  }, [l]);

  if (lang === "en") {
    return (
      <>
        <Header translation={translationEN} />
        <Hero translation={translationEN} links={links} />
      </>
    );
  } else if (lang === "dk") {
    return (
      <>
        <Header translation={translationDK} />
        <Hero translation={translationDK} links={links} />
      </>
    );
  } else {
    return (
      <>
        <Header translation={translationUA} />
        <Hero translation={translationUA} links={links} />
      </>
    );
  }
}
