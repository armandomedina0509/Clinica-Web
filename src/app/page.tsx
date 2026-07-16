import Hero from "@/components/Hero";
import Specialties from "@/components/Specialties";
import UrgencyBanner from "@/components/UrgencyBanner";
import ContactSection from "@/components/ContactSection";
import FAQ from "@/components/FAQ";
import VitalLine from "@/components/VitalLine";

export default function Home() {
  return (
    <>
      <Hero />
      <Specialties />
      <UrgencyBanner />
      <ContactSection />
      <div className="bg-paper">
        <VitalLine tone="pine" />
      </div>
      <FAQ />
    </>
  );
}
