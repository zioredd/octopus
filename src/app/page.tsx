import AIServicesSection from "./components/ai-services";
import { ClientLogosSection } from "./components/client-logoes";
import ConsultationForm from "./components/consultation-form";
import Footer from "./components/footer";
import { Header } from "./components/header";
import { HeroSection } from "./components/hero";
import PortfolioSection from "./components/portfolio";
import { ServicesSection } from "./components/services";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ClientLogosSection />
      <ServicesSection />
      <AIServicesSection />
      <PortfolioSection />
      <ConsultationForm />
      <Footer />
    </div>
  );
}
