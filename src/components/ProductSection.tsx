import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const ProductSection = () => {
  const [activeCard, setActiveCard] = useState(0);

  const products = [
    {
      id: 1,
      title: "Edisi Gagal Move On",
      variant: "Coklat",
      description: "Manisnya coklat premium yang lumer, siap menemani hatimu yang butuh pelukan.",
      image: "/lovable-uploads/d0ae6a16-d978-4e8d-b65f-42432a560594.png",
      emotion: "💔",
      bgColor: "from-amber-100 to-orange-100"
    },
    {
      id: 2,
      title: "Spesial untuk Backburner",
      variant: "Matcha",
      description: "Rasa matcha yang unik, untuk kamu yang masih setia menunggu meski hanya jadi cadangan.",
      image: "/lovable-uploads/28d32ef8-7cbe-42db-a8a4-3cad2df40af7.png",
      emotion: "🥺",
      bgColor: "from-green-100 to-emerald-100"
    },
    {
      id: 3,
      title: "Bimbang Karena HTS",
      variant: "Mix",
      description: "Saat kamu tak bisa memilih, nikmati perpaduan keduanya. Sama seperti hubunganmu yang tanpa status.",
      image: "/lovable-uploads/1539a3d6-7a1e-4668-ac43-a839e54129ce.png",
      emotion: "🤷‍♀️",
      bgColor: "from-yellow-100 to-amber-100"
    }
  ];

  return (
    <section id="products" className="py-16 md:py-24 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-brand-brown mb-4">
            Pilih Varian yang Mewakili Perasaanmu
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16">
            Setiap rasa punya cerita, sama seperti hatimu ✨
          </p>
          
          {/* Desktop Grid View */}
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card 
                key={product.id}
                className={`group cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-card animate-fade-in-up bg-gradient-to-br ${product.bgColor}`}
                style={{ animationDelay: `${index * 0.2}s` }}
                onMouseEnter={() => setActiveCard(index)}
              >
                <CardContent className="p-6 text-center h-full flex flex-col">
                  <div className="text-4xl mb-4">{product.emotion}</div>
                  
                  <div className="mb-6 flex-shrink-0">
                    <img
                      src={product.image}
                      alt={product.variant}
                      className="w-full h-48 object-cover rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                    />
                  </div>
                  
                  <h3 className="text-xl font-bold text-brand-brown mb-2">
                    {product.title}
                  </h3>
                  <h4 className="text-lg font-semibold text-brand-green mb-4">
                    Varian {product.variant}
                  </h4>
                  <p className="text-brand-brown/80 leading-relaxed flex-grow">
                    {product.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mobile Carousel View */}
          <div className="md:hidden">
            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeCard * 100}%)` }}
              >
                {products.map((product, index) => (
                  <div key={product.id} className="w-full flex-shrink-0 px-4">
                    <Card className={`bg-gradient-to-br ${product.bgColor} shadow-card`}>
                      <CardContent className="p-6 text-center">
                        <div className="text-4xl mb-4">{product.emotion}</div>
                        
                        <div className="mb-6">
                          <img
                            src={product.image}
                            alt={product.variant}
                            className="w-full h-48 object-cover rounded-xl shadow-lg"
                          />
                        </div>
                        
                        <h3 className="text-xl font-bold text-brand-brown mb-2">
                          {product.title}
                        </h3>
                        <h4 className="text-lg font-semibold text-brand-green mb-4">
                          Varian {product.variant}
                        </h4>
                        <p className="text-brand-brown/80 leading-relaxed">
                          {product.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Navigation Dots */}
            <div className="flex justify-center space-x-2 mt-6">
              {products.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCard(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    activeCard === index ? 'bg-brand-yellow' : 'bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>

            {/* Mobile Swipe Indicators */}
            <div className="flex justify-between mt-4">
              <button
                onClick={() => setActiveCard(Math.max(0, activeCard - 1))}
                disabled={activeCard === 0}
                className="text-brand-brown/50 disabled:opacity-30"
              >
                ← Sebelumnya
              </button>
              <button
                onClick={() => setActiveCard(Math.min(products.length - 1, activeCard + 1))}
                disabled={activeCard === products.length - 1}
                className="text-brand-brown/50 disabled:opacity-30"
              >
                Selanjutnya →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;