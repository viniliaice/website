import { 
  AboutSection,
  HeroSection,
  ProgramsSection,
  StatsSection,
  SchoolsSection
} from "@/components/home";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <SchoolsSection />
      <ProgramsSection />
    </main>
  );
}