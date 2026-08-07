"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Header from "@/components/header/Header";
import ContactsSection from "@/components/contactsSection/ContactsSection";
import translationEN from "@/components/translations/TranslationEN.json";
import translationDK from "@/components/translations/TranslationDK.json";
import translationUA from "@/components/translations/TranslationUA.json";
import links from "@/components/translations/links.json";

export default function ContactsPage() {
  const [lang, setLang] = useState("");
  const l = useParams();

  useEffect(() => {
    setLang(l.lang);
  }, [l]);



  if (lang === "en") {
    return (
      <>
        <Header translation={translationEN} />
        <ContactsSection translation={translationEN} links={links} />
      </>
    );
  } else if (lang === "dk") {
    return (
      <>
        <Header translation={translationDK} />
        <ContactsSection translation={translationDK} links={links} />
      </>
    );
  } else {
    return (
      <>
        <Header translation={translationUA} />
        <ContactsSection translation={translationUA} links={links} />
      </>
    );
  }
}
