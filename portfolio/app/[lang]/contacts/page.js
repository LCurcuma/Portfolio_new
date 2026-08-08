"use client";
import { useParams } from "next/navigation";
import Header from "@/components/header/Header";
import ContactsSection from "@/components/contactsSection/ContactsSection";
import translationEN from "@/components/translations/TranslationContactsEN.json";
import translationDK from "@/components/translations/TranslationContactsDK.json";
import translationUA from "@/components/translations/TranslationContactsUA.json";
import links from "@/components/translations/links.json";

const translations = {
  en: translationEN,
  dk: translationDK,
  ua: translationUA,
};

export default function ContactsPage() {
  const l = useParams();
  const translation = translations[l.lang] ?? translationUA;

  return (
    <>
      <Header translation={translation} />
      <ContactsSection translation={translation} links={links} />
    </>
  );
}
