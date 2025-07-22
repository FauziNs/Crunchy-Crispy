const ProblemSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-brand-brown mb-16">
            Nugas Bikin Stres, Dia Cuma Bikin Nyesek?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4 animate-fade-in-up">
                <div className="w-3 h-3 bg-brand-yellow rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg md:text-xl text-brand-brown leading-relaxed">
                  <strong>Stres</strong> karena tekanan akademik atau sosial?
                </p>
              </div>
              
              <div className="flex items-start space-x-4 animate-fade-in-up [animation-delay:0.2s]">
                <div className="w-3 h-3 bg-brand-orange rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg md:text-xl text-brand-brown leading-relaxed">
                  Merasa jadi <strong>'backburner'</strong> atau terjebak dalam <strong>HTS</strong>?
                </p>
              </div>
              
              <div className="flex items-start space-x-4 animate-fade-in-up [animation-delay:0.4s]">
                <div className="w-3 h-3 bg-brand-green rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg md:text-xl text-brand-brown leading-relaxed">
                  Butuh <strong>self-reward</strong> tapi budget terbatas?
                </p>
              </div>
              
              <div className="pt-8 animate-fade-in-up [animation-delay:0.6s]">
                <p className="text-2xl md:text-3xl font-semibold text-brand-green text-center md:text-left">
                  Kami Punya Sesuatu Untukmu ✨
                </p>
              </div>
            </div>
            
            {/* Right Column - Illustration */}
            <div className="flex justify-center animate-fade-in-up [animation-delay:0.3s]">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-card rounded-3xl flex items-center justify-center shadow-card">
                  <div className="text-center p-8">
                    <div className="text-6xl mb-4">😔</div>
                    <p className="text-brand-brown font-medium text-lg">
                      "Kenapa hidup harus<br />serumit ini..."
                    </p>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-brand-yellow rounded-full animate-float"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-brand-orange rounded-full animate-float [animation-delay:1s]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;