"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Header from "@/components/header/Header";
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

  const [clickedMore, setClickedMore] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll(`.scroll_show_animate`);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      {
        threshold: 0.1,
      },
    );

    elements.forEach((el) => {
      observer.observe(el);

      if (el.getBoundingClientRect().top < window.innerHeight) {
        el.classList.add("show");
      }
    });

    return () => observer.disconnect();
  }, [clickedMore]);

  if (lang === "en") {
    return (
      <>
        <Header translation={translationEN} />
      </>
    );
  } else if (lang === "dk") {
    return (
      <>
        <Header translation={translationDK} />
      </>
    );
  } else {
    return (
      <>
        <Header translation={translationUA} />
      </>
    );
  }
}
