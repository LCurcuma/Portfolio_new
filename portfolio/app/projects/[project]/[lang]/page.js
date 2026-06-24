"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Header from "@/components/header/Header";
import translationWebsitesEN from "@/components/translations/TranslationWebsitesEN.json";
import translationArtEN from "@/components/translations/TranslationArtEN.json";
import translationAnimationsEN from "@/components/translations/TranslationAnimationsEN.json";
import translationWebsitesDK from "@/components/translations/TranslationWebsitesDK.json";
import translationUA from "@/components/translations/TranslationUA.json";
import links from "@/components/translations/links.json";
import Hero from "@/components/hero/Hero";

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
          <Header translation={translationDK} />
        </>
      );
    } else if (projects === "animations") {
      return (
        <>
          <Header translation={translationDK} />
        </>
      );
    }
  } else {
    if (projects === "websites") {
      return (
        <>
          <Header translation={translationUA} />
        </>
      );
    } else if (projects === "art") {
      return (
        <>
          <Header translation={translationUA} />
        </>
      );
    } else if (projects === "animations") {
      return (
        <>
          <Header translation={translationUA} />
        </>
      );
    }
  }
}
