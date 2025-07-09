import React, { useState, useEffect } from "react";

function HeaderMenu() {
  const [YatMenuOpen, setYatMenuOpen] = useState(false);

  const toggleYatMenu = () => {
    setYatMenuOpen(!YatMenuOpen);
  };

  // ESC tuşu ile menüyü kapatma
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape" && YatMenuOpen) {
        setYatMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscKey);
    return () => document.removeEventListener("keydown", handleEscKey);
  }, [YatMenuOpen]);

  // Body scroll'unu kontrol etme
  useEffect(() => {
    if (YatMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [YatMenuOpen]);

  return (
    <div className="sticky h-35 md:h-40 top-0 z-40">
      {/* HeaderNav bölümüm */}
      <div className="flex top-0 flex-col lg:flex-row lg:justify-around bg-gray-900/95 backdrop-blur-md shadow-xl shadow-gray-700/50 items-center min-h-[120px]  lg:h-40 py-4 lg:py-0 transition-all duration-300">
        {/* Logo ve Brand Bilgisi */}
        <div className="flex items-center lg:mb-0">
          <img
            className="logo h-14 md:h-16 lg:h-20 w-auto object-contain transition-transform duration-300 hover:scale-105"
            src="/images/Spedyat.png"
            alt="Speed Yat Logo"
          />
          <div className="hidden md:block text-left ml-3">
            <h2 className="text-lg lg:text-xl font-bold text-white">
              Speed Yat
            </h2>
            <p className="text-xs lg:text-sm text-cyan-400">
              Premium Yacht Experience
            </p>
          </div>
        </div>

        {/* Navbar menü */}
        <nav className="flex flex-wrap justify-center items-center text-gray-300 gap-4 md:gap-6 lg:gap-8 text-base md:text-lg lg:text-xl mb-4 lg:mb-0">
          <a
            className="relative group hover:text-cyan-400 transition-all duration-300 font-medium whitespace-nowrap"
            href="#"
          >
            Anasayfa
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <button
            onClick={toggleYatMenu}
            className="relative group hover:text-cyan-400 cursor-pointer transition-all duration-300 font-medium whitespace-nowrap"
            aria-expanded={YatMenuOpen}
            aria-label="Yat menüsünü aç/kapat"
          >
            Yatlarımız
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
          </button>
          <a
            className="relative group hover:text-cyan-400 transition-all duration-300 font-medium whitespace-nowrap"
            href="#"
          >
            Hizmetlerimiz
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            className="relative group hover:text-cyan-400 transition-all duration-300 font-medium whitespace-nowrap"
            href="#"
          >
            İletişim
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>

        {/* iletişim ve wp */}
        <div className="hidden lg:flex items-center space-x-4 z-10">
          <div className="text-right text-sm">
            <p className="text-white font-semibold">📞 +90 (212) 555-0123</p>
            <p className="text-cyan-400">7/24 Destek</p>
          </div>
          <a
            href="https://wa.me/905399302409?text=Merhaba,%20Speed%20Yat%20hizmetleri%20hakkında%20bilgi%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r cursor-pointer from-green-500 to-green-600 text-white px-4 py-2 rounded-full font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 whitespace-nowrap flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787" />
            </svg>
            <span className="sm:block md:hidden">WhatsApp</span>
          </a>
        </div>

        {/* Mobil için iletişim ve wp */}
        <div className="flex lg:hidden items-center space-x-4 mt-2">
          <div className="text-center text-xs md:text-sm">
            <p className="text-white font-semibold">📞 +90 (212) 555-0123</p>
            <p className="text-cyan-400">7/24 Destek</p>
          </div>
          <a
            href="https://wa.me/902125550123?text=Merhaba,%20Speed%20Yat%20hizmetleri%20hakkında%20bilgi%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r cursor-pointer from-green-500 to-green-600 text-white px-3 py-2 rounded-full font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 text-sm whitespace-nowrap flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787" />
            </svg>
            WhatsApp
          </a>
        </div>
      </div>

      {/* arka plan karartması ve üst üste koyma mobilde */}
      {YatMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={toggleYatMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobil görünümde yandan alta açılan menü */}
      <div className="lg:hidden">
        {YatMenuOpen && (
          <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white px-4 py-6 z-50 overflow-y-auto animate-slideInFromBottom">
            <button
              onClick={toggleYatMenu}
              className="absolute top-4 right-4 cursor-pointer text-3xl hover:text-red-400 transition-colors duration-200"
              aria-label="Menüyü kapat"
            >
              ✕
            </button>

            <div className="space-y-6 mt-12">
              <h3 className="text-2xl md:text-3xl font-bold flex justify-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Speed Yat
              </h3>

              <div className="relative group rounded-2xl">
                <img
                  className="cursor-pointer w-full rounded-2xl shadow-2xl transition-transform duration-700 ease-in-out transform group-hover:scale-105 group-hover:-translate-y-2"
                  src="/images/speed2.png"
                  alt="Speed Yat"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />
              </div>

              <div className="bg-gray-800/50 rounded-xl p-4 backdrop-blur-sm border border-gray-700/50">
                <table className="table-auto border-collapse w-full text-sm">
                  <tbody>
                    <tr className="hover:bg-gray-700/30 transition-colors duration-200">
                      <td className="border-b border-gray-600 px-4 py-3 font-semibold text-cyan-400">
                        Model
                      </td>
                      <td className="border-b border-gray-600 px-4 py-3">
                        Ultra Deluxe Yatch
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-700/30 transition-colors duration-200">
                      <td className="border-b border-gray-600 px-4 py-3 font-semibold text-cyan-400">
                        Uzunluk
                      </td>
                      <td className="border-b border-gray-600 px-4 py-3">
                        12 Metre
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-700/30 transition-colors duration-200">
                      <td className="border-b border-gray-600 px-4 py-3 font-semibold text-cyan-400">
                        Kapasite
                      </td>
                      <td className="border-b border-gray-600 px-4 py-3">
                        10 yolcu 3 Mürettebat
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-700/30 transition-colors duration-200">
                      <td className="px-4 py-3 font-semibold text-cyan-400">
                        Yatın yaşı
                      </td>
                      <td className="px-4 py-3">5 Sene</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="space-y-3">
                <a href="#" className="block">
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-3 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                    Fiyat Al
                  </button>
                </a>
                <a href="#" className="block">
                  <button className="w-full bg-gradient-to-r from-gray-600 to-gray-700 text-white font-semibold py-3 rounded-lg hover:from-gray-700 hover:to-gray-800 transition-all duration-300 transform hover:scale-105">
                    Yatı İncele
                  </button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Desktop - Yandan açılan yat menüsü */}
      <div
        className={`hidden lg:block fixed top-0 overflow-auto right-0 h-screen w-full md:w-1/2 lg:w-2/5 xl:w-1/3 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white transition-all duration-500 ease-in-out z-50 ${
          YatMenuOpen ? "translate-x-0 shadow-2xl" : "translate-x-full"
        }`}
      >
        <button
          onClick={toggleYatMenu}
          className="text-4xl absolute top-4 left-4 cursor-pointer hover:text-cyan-500 transition-all duration-200 hover:rotate-90 transform z-10"
          aria-label="Menüyü kapat"
        >
          ✕
        </button>

        <div className="p-8 mt-16">
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-5xl font-bold font-serif flex justify-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Speed Yat
            </h1>

            <div className="relative group rounded-2xl">
              <img
                className="cursor-pointer w-full rounded-2xl shadow-2xl transition-transform duration-700 ease-in-out transform group-hover:scale-105 group-hover:-translate-y-2"
                src="/images/speed2.png"
                alt="Speed Yat"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />
            </div>

            <div className="bg-gray-800/50 rounded-2xl p-6 backdrop-blur-sm border border-gray-700/50 shadow-xl">
              <table className="table-auto border-collapse w-full">
                <tbody>
                  <tr className="hover:bg-gray-700/30 transition-colors duration-200">
                    <td className="border-b border-gray-600 px-6 py-4 font-bold text-cyan-400 text-lg">
                      Model
                    </td>
                    <td className="border-b border-gray-600 px-6 py-4 text-lg">
                      Ultra Deluxe Yatch
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-700/30 transition-colors duration-200">
                    <td className="border-b border-gray-600 px-6 py-4 font-bold text-cyan-400 text-lg">
                      Uzunluk
                    </td>
                    <td className="border-b border-gray-600 px-6 py-4 text-lg">
                      12 Metre
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-700/30 transition-colors duration-200">
                    <td className="border-b border-gray-600 px-6 py-4 font-bold text-cyan-400 text-lg">
                      Kapasite
                    </td>
                    <td className="border-b border-gray-600 px-6 py-4 text-lg">
                      10 yolcu 3 Mürettebat
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-700/30 transition-colors duration-200">
                    <td className="px-6 py-4 font-bold text-cyan-400 text-lg">
                      Yatın yaşı
                    </td>
                    <td className="px-6 py-4 text-lg">5 Sene</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="space-y-4">
              <a href="#" className="block">
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-3 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Fiyat Al
                </button>
              </a>
              <a href="#" className="block">
                <button className="w-full bg-gradient-to-r from-gray-600 to-gray-700 text-white font-semibold py-3 rounded-lg hover:from-gray-700 hover:to-gray-800 transition-all duration-300 transform hover:scale-105">
                  Yatı İncele
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderMenu;
