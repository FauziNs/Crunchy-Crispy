import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Users } from "lucide-react";

const SocialProofSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "Awalnya beli karena relate sama caption-nya, ternyata beneran seenak itu! Matcha-nya juara.",
      author: "@dinda_healing",
      variant: "Matcha"
    },
    {
      text: "Finally! Camilan yang ngerti perasaan anak backburner. Coklat-nya ngangenin banget.",
      author: "@galau_bestie",
      variant: "Coklat"
    },
    {
      text: "Mix variant is a mood! Pas banget buat yang bingung kaya aku. Thank you Crunchy Crispy!",
      author: "@confused_heart",
      variant: "Mix"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const openWhatsAppGroup = () => {
    window.open("https://wa.me/6289537204698?text=Halo,%20saya%20ingin%20join%20Crispy%20Healing%20Club!", "_blank");
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Left: Testimonials */}
            <div className="animate-fade-in-up">
              <h3 className="text-2xl md:text-3xl font-bold text-brand-brown mb-8 text-center md:text-left">
                Kata Mereka yang Sudah Healing 💬
              </h3>
              
              <div className="relative">
                <Card className="bg-white shadow-card">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4 text-center">💭</div>
                    <blockquote className="text-lg text-brand-brown/90 italic leading-relaxed mb-4 text-center">
                      "{testimonials[currentTestimonial].text}"
                    </blockquote>
                    <div className="text-center">
                      <p className="font-semibold text-brand-green">
                        {testimonials[currentTestimonial].author}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Varian {testimonials[currentTestimonial].variant}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Navigation */}
                <div className="flex justify-center space-x-4 mt-4">
                  <button
                    onClick={prevTestimonial}
                    className="p-2 rounded-full bg-brand-yellow/20 hover:bg-brand-yellow/40 transition-colors"
                  >
                    <ChevronLeft size={20} className="text-brand-brown" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="p-2 rounded-full bg-brand-yellow/20 hover:bg-brand-yellow/40 transition-colors"
                  >
                    <ChevronRight size={20} className="text-brand-brown" />
                  </button>
                </div>

                {/* Dots indicator */}
                <div className="flex justify-center space-x-2 mt-4">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        currentTestimonial === index ? 'bg-brand-yellow' : 'bg-muted-foreground/30'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Community CTA */}
            <div className="animate-fade-in-up [animation-delay:0.2s]">
              <Card className="bg-gradient-to-br from-brand-yellow/10 to-brand-orange/10 border-brand-yellow/30 shadow-card">
                <CardContent className="p-8 text-center">
                  <div className="text-6xl mb-6">🤗</div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-brand-brown mb-4">
                    Gabung "Crispy Healing Club"
                  </h3>
                  
                  <p className="text-brand-brown/80 leading-relaxed mb-6">
                    Dapatkan akses ke promo eksklusif, konten curhat, dan teman seperjuangan di komunitas WhatsApp kami.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center justify-center space-x-2 text-brand-green">
                      <Users size={20} />
                      <span className="font-semibold">500+ Member Aktif</span>
                    </div>
                    
                    <Button
                      onClick={openWhatsAppGroup}
                      variant="outline"
                      size="lg"
                      className="w-full border-brand-green text-brand-green hover:bg-brand-green hover:text-white transition-all duration-300 font-semibold"
                    >
                      Join The Club! 🚀
                    </Button>
                  </div>

                  <p className="text-sm text-muted-foreground mt-4">
                    *Gratis untuk bergabung
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;