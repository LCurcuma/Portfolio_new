"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Header from "@/components/header/Header";
import ProjectSection from "@/components/projectSection/ProjectSection";

export default function projectPage() {
  const [projectId, setProjectId] = useState();
  const [lang, setLang] = useState("");
  const params = useParams();

  useEffect(() => {
    setLang(params.lang);
    setProjectId(params.id);
  }, []);

  if (lang === "en") {
    return <></>;
  } else if (lang === "dk") {
    return <></>;
  } else {
    return <></>;
  }
}
