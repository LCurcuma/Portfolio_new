"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Header from "@/components/header/Header";
import translationWebsitesEN from "@/components/translations/TranslationWebsitesEN.json";
import translationDK from "@/components/translations/TranslationDK.json";
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
          <Header translation={translationEN} />
        </>
      );
    } else if (projects === "animations") {
      return (
        <>
          <Header translation={translationEN} />
        </>
      );
    }
  } else if (lang === "dk") {
    if (projects === "websites") {
      return (
        <>
          <Header translation={translationDK} />
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
