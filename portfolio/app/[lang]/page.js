"use client";
import Header from "@/components/header/Header";
import { useParams } from "next/navigation";
import translationEN from "@/components/translations/TranslationEN.json";
import translationDK from "@/components/translations/TranslationDK.json";
import translationUA from "@/components/translations/TranslationUA.json";
import links from "@/components/translations/links.json";
import Hero from "@/components/hero/Hero";
import Project from "@/components/projects/Projects";
import Footer from "@/components/footer/Footer";

const translations = {
  en: translationEN,
  dk: translationDK,
  ua: translationUA,
};

export default function MainPage() {
  const l = useParams();

  const translation = translations[l.lang] ?? translationUA;

  return (
    <>
      <Header translation={translation} />
      <Hero translation={translation} links={links} />
      <Project translation={translation} links={links} />
      <Footer translation={translation} links={links} />
    </>
  );
}
