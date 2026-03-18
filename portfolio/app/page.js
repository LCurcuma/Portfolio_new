import styles from "./page.module.css";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import Project from "@/components/projects/Projects";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Project />
      </main>
      <Footer />
    </div>
  );
}
