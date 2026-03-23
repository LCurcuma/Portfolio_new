"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

export default function MainPage({params}) {
  const [lang, setLang] = useState("");
  const [currentTranslation, setTranslation] = useState();
  const l = useParams();

  useState(() => {
    setLang(l.lang);
  }, [l]);

  if (lang === "en") {
    return (
      <>
        <p>Hello</p>
      </>
    );
  } else if (lang === "dk") {
    return (
      <>
        <p>Hej</p>
      </>
    );
  } else {
    return (
      <>
        <p>Привіт</p>
      </>
    );
  }
}
