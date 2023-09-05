import WelcomeSection from "@/components/WelcomeSection";
import AboutSection from "@/components/AboutSection";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
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
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </section>
  );
}