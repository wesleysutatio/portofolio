import Navbar from "@/components/Navbar";
import IntroSection from "@/components/sections/IntroSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import TechnicalSkillsSection from "@/components/sections/TechnicalSkillsSection";
import CoreStrengthsSection from "@/components/sections/CoreStrengthsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <IntroSection />
      <ExperienceSection />
      <CoreStrengthsSection />
      <TechnicalSkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </>
  );
}