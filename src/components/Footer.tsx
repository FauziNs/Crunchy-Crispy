const Footer = () => {
  return (
    <footer className="bg-brand-brown text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            
            {/* Column 1: Logo & Tagline */}
            <div className="text-center md:text-left">
              <div className="mb-4">
                <img
                  src="/lovable-uploads/684ba085-1d26-40b7-be73-b7d9a54e7a87.png"
                  alt="Crunchy Crispy Logo"
                  className="h-16 mx-auto md:mx-0"
                />
              </div>
              <p className="text-brand-yellow font-semibold text-lg">
                Renyahnya Bikin Susah Move On
              </p>
            </div>

            {/* Column 2: Copyright */}
            <div className="text-center">
              <p className="text-white/80 leading-relaxed">
                © 2025 Crunchy Crispy
                <br />
                <span className="text-sm">
                  Sebuah Inovasi Mahasiswa<br />
                  Universitas Siliwangi
                </span>
              </p>
            </div>

            {/* Column 3: Social Media */}
            <div className="text-center md:text-right">
              <p className="text-white/80 mb-4">Follow Us:</p>
              <div className="flex justify-center md:justify-end space-x-4">
                <a
                  href="https://www.tiktok.com/@crunchycrispy_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/20 hover:bg-brand-yellow rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <span className="text-sm font-bold">TT</span>
                </a>
                <a
                  href="https://www.instagram.com/crunchycrispy.dik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/20 hover:bg-brand-yellow rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <span className="text-sm font-bold">IG</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="border-t border-white/20 pt-8 text-center">
            <p className="text-white/60 text-sm">
              Made with 💛 for everyone yang lagi healing
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;