import { Button } from "@/components/ui/button";
import { MessageCircle, ShoppingBag, Store } from "lucide-react";

const ConversionSection = () => {
  const orderPlatforms = [
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: "https://wa.me/6289537204698?text=Halo,%20saya%20ingin%20pesan%20Crunchy%20Crispy!",
      bgColor: "bg-green-500 hover:bg-green-600",
      description: "Chat langsung & personal"
    },
    {
      name: "TikTok Shop",
      icon: ShoppingBag,
      url: "#",
      bgColor: "bg-black hover:bg-gray-800",
      description: "Viral & trendy"
    },
    {
      name: "Shopee",
      icon: Store,
      url: "#",
      bgColor: "bg-orange-500 hover:bg-orange-600",
      description: "Aman & terpercaya"
    }
  ];

  return (
    <section id="order" className="py-16 md:py-24 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-brown mb-4">
            Siap Mengubah Galau Jadi Renyah?
          </h2>
          
          <p className="text-xl md:text-2xl text-brand-brown/80 mb-12">
            Pilih platform pemesanan favoritmu di bawah ini ✨
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {orderPlatforms.map((platform, index) => {
              const IconComponent = platform.icon;
              return (
                <Button
                  key={platform.name}
                  onClick={() => window.open(platform.url, "_blank")}
                  size="lg"
                  className={`${platform.bgColor} text-white p-8 h-auto flex flex-col items-center space-y-4 rounded-2xl shadow-button hover:shadow-lg hover:scale-105 transition-all duration-300 animate-fade-in-up`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <IconComponent size={40} />
                  <div className="text-center">
                    <div className="text-xl font-bold">Pesan via {platform.name}</div>
                    <div className="text-sm opacity-90">{platform.description}</div>
                  </div>
                </Button>
              );
            })}
          </div>

          {/* Special offer */}
          <div className="bg-white/90 rounded-2xl p-8 shadow-card animate-fade-in-up [animation-delay:0.4s]">
            <div className="text-3xl mb-4">🎉</div>
            <h3 className="text-2xl font-bold text-brand-brown mb-2">
              Special Launch Promo!
            </h3>
            <p className="text-lg text-brand-brown/80 mb-4">
              Beli 2 box dapat free sticker eksklusif "Healing Mode On"
            </p>
            <div className="flex items-center justify-center space-x-4 text-brand-green font-semibold">
              <span className="text-2xl">Rp 15.000</span>
              <span className="text-lg">per box (500ml)</span>
            </div>
          </div>

          <p className="text-brand-brown/60 mt-8 text-sm">
            *Promo berlaku untuk pemesanan via WhatsApp. Syarat dan ketentuan berlaku.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ConversionSection;