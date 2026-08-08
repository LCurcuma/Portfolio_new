"use client";
import { useParams } from "next/navigation";
import Header from "@/components/header/Header";
import ProjectSection from "@/components/projectSection/ProjectSection";
import translationProjectEN from "@/components/translations/TranslationProjectsEN.json";
import translationProjectDK from "@/components/translations/TranslationProjectsDK.json";
import translationProjectUA from "@/components/translations/TranslationProjectsUA.json";
import links from "@/components/translations/links.json";

const translations = {
  en: translationProjectEN,
  dk: translationProjectDK,
  ua: translationProjectUA,
};

export default function projectPage() {
  const l = useParams();
  const projectId = Number(l.id);
  const translation = translations[l.lang] ?? translationProjectUA;

  return (
    <>
      <Header translation={translation.headers[projectId - 1]} />
      <ProjectSection
        translation={translation.sections[projectId - 1]}
        links={links}
        id={projectId}
      />
    </>
  );
}
