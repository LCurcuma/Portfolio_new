"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

export default function MainPage() {
    const [lang, setLang] = useState("");
    const [currentTranslation, setTranslation] = useState();

  useEffect(() => {
      const { l } = useParams({ lang: string });
      setLang(l.lang);
      
      if (lang === "en") {
          
      } else if (lang === "dk") {
          
      } else {
          
      }
  }, []);
    
  
}
