import About from "@/components/About";
import Assessments from "@/components/Assessments";
import ClosingCta from "@/components/ClosingCta";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Metrics from "@/components/Metrics";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <About />
      <HowItWorks />
      <Features />
      <Assessments />
      <Metrics />
      <ClosingCta />
      <Footer />
    </main>
  );
}
