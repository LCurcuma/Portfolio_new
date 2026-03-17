import styles from "./page.module.css";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import Websites from "@/components/websites/Websites";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Websites />
      </main>
      <Footer />
    </div>
  );
}
