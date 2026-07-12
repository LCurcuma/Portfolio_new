"use client";
import { useParams } from "next/navigation";
import Header from "@/components/header/Header";
import ProjectSection from "@/components/projectSection/ProjectSection";
import translationProjectEN from "@/components/translations/TranslationProjectsEN.json";
import translationProjectDK from "@/components/translations/TranslationProjectsDK.json";
import translationProjectUA from "@/components/translations/TranslationProjectsUA.json";
import links from "@/components/translations/links.json";

export default function projectPage() {
  const { lang, id } = useParams();
  const projectId = Number(id);

  if (lang === "en") {
    return (
      <>
        <Header translation={translationProjectEN.headers[projectId - 1]} />
        <ProjectSection translation={translationProjectEN.sections[projectId - 1]} links={links} id={projectId}/>
      </>
    );
  } else if (lang === "dk") {
    return (
      <>
        <Header translation={translationProjectDK.headers[projectId - 1]} />
      </>
    );
  } else {
    return (
      <>
        <Header translation={translationProjectUA.headers[projectId - 1]} />
      </>
    );
  }
}
