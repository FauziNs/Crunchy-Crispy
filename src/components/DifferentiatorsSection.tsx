import { Leaf, Heart, Package, Tag } from "lucide-react";

const DifferentiatorsSection = () => {
  const differentiators = [
    {
      icon: Leaf,
      title: "Dukung Ekonomi Lokal",
      description: "Dibuat dari pisang pilihan dari petani lokal Tasikmalaya.",
      color: "text-brand-green"
    },
    {
      icon: Heart,
      title: "Emotional Branding",
      description: "Camilan pertama yang benar-benar relate dengan kisah cintamu.",
      color: "text-red-500"
    },
    {
      icon: Package,
      title: "Kemasan Kekinian",
      description: "Dikemas aman dalam thinwall 500ml yang shareable.",
      color: "text-brand-brown"
    },
    {
      icon: Tag,
      title: "Harga Terjangkau",
      description: "Kualitas premium dengan harga hanya Rp15.000 per box.",
      color: "text-brand-yellow"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-brand-brown mb-16">
            Bukan Sekadar Camilan Biasa
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {differentiators.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="group p-8 rounded-2xl bg-gradient-card shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl bg-white/80 ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent size={32} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-brand-brown mb-3">
                        {item.title}
                      </h3>
                      <p className="text-brand-brown/80 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentiatorsSection;