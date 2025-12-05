import { HeroSection } from "./components/HeroSection";
import { ForWhoSection } from "./components/ForWhoSection";
import { WhatIsTrackingSection } from "./components/WhatIsTrackingSection";
import { WhyMeSection } from "./components/WhyMeSection";
import { DiagnosticSection } from "./components/DiagnosticSection";
import { WhoFitsSection } from "./components/WhoFitsSection";
import { ResultsSection } from "./components/ResultsSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { FAQSection } from "./components/FAQSection";
import { FinalCTASection } from "./components/FinalCTASection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <ForWhoSection />
      <WhatIsTrackingSection />
      <WhyMeSection />
      <DiagnosticSection />
      <WhoFitsSection />
      <ResultsSection />
      <TestimonialsSection />
      <HowItWorksSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}
