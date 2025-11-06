import HeroSection from "@/components/hero-section";
import AboutEducation from "@/components/about-education";
import TechnicalSkills from "@/components/technical-skills";
import ExperienceProjects from "@/components/experience-projects";
import CloudDevOpsProjects from "@/components/cloud-devops-projects";
import CertificationsStrengths from "@/components/certifications-strengths";
import ContactFooter from "@/components/contact-footer";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutEducation />
      <TechnicalSkills />
      <ExperienceProjects />
      <CloudDevOpsProjects />
      <CertificationsStrengths />
      <ContactFooter />
    </main>
  );
}