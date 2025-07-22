import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToProducts = () => {
    const productSection = document.getElementById('products');
    productSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBackground}
          alt="Crunchy Crispy Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up">
          Camilan Untuk Kamu yang{' '}
          <span className="text-brand-yellow animate-pulse-glow">Gagal Move On</span>
        </h1>
        
        <h2 className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 animate-fade-in-up [animation-delay:0.2s]">
          <span className="text-brand-yellow font-semibold">Crunchy Crispy:</span>{' '}
          Keripik pisang lumer premium yang mengerti perasaanmu.{' '}
          <br className="hidden md:block" />
          Teman healing di setiap gigitan.
        </h2>

        <Button
          onClick={scrollToProducts}
          size="lg"
          className="bg-brand-yellow hover:bg-brand-orange text-brand-brown font-bold text-lg px-8 py-6 rounded-full shadow-button hover:shadow-lg transform hover:scale-105 transition-all duration-300 animate-fade-in-up [animation-delay:0.4s]"
        >
          Temukan Rasa Hatimu 💛
        </Button>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-8 h-8 bg-brand-yellow/30 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-6 h-6 bg-brand-orange/40 rounded-full animate-float [animation-delay:1s]"></div>
      <div className="absolute top-1/2 left-5 w-4 h-4 bg-brand-yellow/20 rounded-full animate-float [animation-delay:2s]"></div>
    </section>
  );
};

export default HeroSection;