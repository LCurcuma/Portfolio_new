"use client";
import { useParams } from "next/navigation";
import translationWebsitesEN from "@/components/translations/TranslationWebsitesEN.json";
import translationArtEN from "@/components/translations/TranslationArtEN.json";
import translationWebsitesDK from "@/components/translations/TranslationWebsitesDK.json";
import translationArtDK from "@/components/translations/TranslationArtDK.json";
import translationWebsitesUA from "@/components/translations/TranslationWebsitesUA.json";
import translationArtUA from "@/components/translations/TranslationArtUA.json";
import links from "@/components/translations/links.json";
import Header from "@/components/header/Header";
import ProjectSection from "@/components/projectsSection/ProjectSection";
import ImagesSection from "@/components/imagesSection/ImagesSection";

const translations = {
  en: {
    websites: translationWebsitesEN,
    art: translationArtEN,
  },
  dk: {
    websites: translationWebsitesDK,
    art: translationArtDK,
  },
  ua: {
    websites: translationWebsitesUA,
    art: translationArtUA,
  },
};

export default function Projects() {
  const l = useParams();
  const translation = translations[l.lang]?.[l.project];

  if (!translation) {
    return null;
  }

  return (
    <>
      <Header translation={translation} />
      {l.project === "websites" ? (
        <ProjectSection translation={translation} links={links} />
      ) : (
        <ImagesSection translation={translation} links={links} />
      )}
    </>
  );
}
