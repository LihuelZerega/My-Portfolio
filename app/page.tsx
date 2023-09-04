import WelcomeSection from "@/components/WelcomeSection";
import AboutSection from "@/components/AboutSection";
import Skills from "@/components/Skills";
import Proyects from "@/components/Proyects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <section className="flex flex-col select-none">
      <WelcomeSection />
      <div className="space-y-12">
        <AboutSection />
        <Skills />
        <Proyects />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </section>
  );
}
