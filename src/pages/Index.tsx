import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import ProductSection from "@/components/ProductSection";
import DifferentiatorsSection from "@/components/DifferentiatorsSection";
import SocialProofSection from "@/components/SocialProofSection";
import ConversionSection from "@/components/ConversionSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <ProductSection />
      <DifferentiatorsSection />
      <SocialProofSection />
      <ConversionSection />
      <Footer />
    </div>
  );
};

export default Index;
