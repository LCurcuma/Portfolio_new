"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Projects() {
    const [lang, setLang] = useState("");
    const [projects, setProjects] = useState("");
    const params = useParams();
    
    useEffect(() => {
        setLang(params.lang);
        setProjects(params.project);
    },[])

    console.log(lang, projects);
    return (
        <>
        </>
    )
}