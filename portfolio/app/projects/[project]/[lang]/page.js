"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import translationWebsitesEN from "@/components/translations/TranslationWebsitesEN.json";
import translationArtEN from "@/components/translations/TranslationArtEN.json";
import translationWebsitesDK from "@/components/translations/TranslationWebsitesDK.json";
import translationArtDK from "@/components/translations/TranslationArtDK.json";
import translationWebsitesUA from "@/components/translations/TranslationWebsitesUA.json";
import translationArtUA from "@/components/translations/TranslationArtUA.json";
import links from "@/components/translations/links.json";
import Header from "@/components/header/Header";
import ProjectSection from "@/components/projectsSection/ProjectSection";

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
          <ProjectSection />
        </>
      );
    } else if (projects === "art") {
      return (
        <>
          <Header translation={translationArtEN} />
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
    } 
  }
}
