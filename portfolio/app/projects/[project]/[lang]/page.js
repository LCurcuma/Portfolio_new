"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import translationWebsitesEN from "@/components/translations/TranslationWebsitesEN.json";
import translationArtEN from "@/components/translations/TranslationArtEN.json";
import translationAnimationsEN from "@/components/translations/TranslationAnimationsEN.json";
import translationWebsitesDK from "@/components/translations/TranslationWebsitesDK.json";
import translationArtDK from "@/components/translations/TranslationArtDK.json";
import translationAnimationsDK from "@/components/translations/TranslationAnimationsDK.json";
import translationWebsitesUA from "@/components/translations/TranslationWebsitesUA.json";
import translationArtUA from "@/components/translations/TranslationArtUA.json";
import translationAnimationsUA from "@/components/translations/TranslationAnimationsUA.json";
import links from "@/components/translations/links.json";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export default function Projects() {
  const [lang, setLang] = useState("");
  const [projects, setProjects] = useState("");
  const params = useParams();

  useEffect(() => {
    setLang(params.lang);
    setProjects(params.project);
  }, []);

  if (lang === "en") {
    if (projects === "websites") {
      return (
        <>
          <Header translation={translationWebsitesEN} />
        </>
      );
    } else if (projects === "art") {
      return (
        <>
          <Header translation={translationArtEN} />
        </>
      );
    } else if (projects === "animations") {
      return (
        <>
          <Header translation={translationAnimationsEN} />
        </>
      );
    }
  } else if (lang === "dk") {
    if (projects === "websites") {
      return (
        <>
          <Header translation={translationWebsitesDK} />
        </>
      );
    } else if (projects === "art") {
      return (
        <>
          <Header translation={translationArtDK} />
        </>
      );
    } else if (projects === "animations") {
      return (
        <>
          <Header translation={translationAnimationsDK} />
        </>
      );
    }
  } else {
    if (projects === "websites") {
      return (
        <>
          <Header translation={translationWebsitesUA} />
        </>
      );
    } else if (projects === "art") {
      return (
        <>
          <Header translation={translationArtUA} />
        </>
      );
    } else if (projects === "animations") {
      return (
        <>
          <Header translation={translationAnimationsUA} />
        </>
      );
    }
  }
}
