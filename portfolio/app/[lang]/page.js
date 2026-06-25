"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Header from "@/components/header/Header";
import translationEN from "@/components/translations/TranslationEN.json";
import translationDK from "@/components/translations/TranslationDK.json";
import translationUA from "@/components/translations/TranslationUA.json";
import links from "@/components/translations/links.json";
import Hero from "@/components/hero/Hero";
import Project from "@/components/projects/Projects";
import Footer from "@/components/footer/Footer";

export default function MainPage() {
  const [lang, setLang] = useState("");
  const l = useParams();

  useEffect(() => {
    setLang(l.lang);
  }, [l]);

  if (lang === "en") {
    return (
      <>
        <Header translation={translationEN} />
        <Hero translation={translationEN} links={links} />
        <Project translation={translationEN} links={links} />
        <Footer translation={translationEN}/>
      </>
    );
  } else if (lang === "dk") {
    return (
      <>
        <Header translation={translationDK} />
        <Hero translation={translationDK} links={links} />
        <Project translation={translationDK} links={links} />
        <Footer translation={translationDK} />
      </>
    );
  } else {
    return (
      <>
        <Header translation={translationUA} />
        <Hero translation={translationUA} links={links} />
        <Project translation={translationUA} links={links} />
        <Footer translation={translationUA} />
      </>
    );
  }
}
