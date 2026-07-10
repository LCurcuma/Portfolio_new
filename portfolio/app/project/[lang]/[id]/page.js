"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function projectPage() {
  const [projectId, setProjectId] = useState();
  const [lang, setLang] = useState("");
  const params = useParams();

  useEffect(() => {
    setLang(params.lang);
    setProjectId(params.id);
  }, []);

  return <></>;
}
