import React from "react";
import HeaderMenu from "../Components/HeaderMenu";
import Footer from "../Components/Footer";

function Homepage() {
  return (
    <div className="min-h-screen bg-black">
      <HeaderMenu />
      
      
      <div className="relative h-screen overflow-hidden">
        {/* Arka plan video kısmı  */}
        <div className="absolute inset-0 w-full h-full">
          <iframe
            className="w-full h-full object-cover"
            src="https://www.youtube.com/embed/sAzwsjJ_dOU?autoplay=1&mute=1&loop=1&playlist=sAzwsjJ_dOU&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1&fs=0&cc_load_policy=0&playsinline=1&enablejsapi=1"
            title="Speed yat Kiralama "
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture autoplay"
            allowFullScreen
          ></iframe>
        </div>

        {/* Üst üste koyduğum yapı */}
        <div className="absolute inset-0 bg-black/40 bg-gradient-to-b from-black/30 via-transparent to-black/50"></div>

        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white px-4 sm:px-6 max-w-4xl mx-auto">
            
            {/* Video üstü başlık*/}
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Speed
              </span>
              <br />
              <span className="text-white drop-shadow-2xl">
                Yat Kiralama Hizmetleri
              </span>
            </h1>

           
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-200 font-light leading-relaxed drop-shadow-lg px-2">
              Lüks yatlarımızla unutulmaz anılar yaşayın. <br className="hidden sm:block" />
              Premium hizmet, mükemmel konfor, sonsuz mavi.
            </p>

           
            <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-8 sm:mb-10 text-sm md:text-base px-2">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full">
                <span className="text-cyan-400">⚓</span>
                <span className="whitespace-nowrap">Premium Yat Filosu</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full">
                <span className="text-cyan-400">🏆</span>
                <span className="whitespace-nowrap">15+ Yıl Deneyim</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full">
                <span className="text-cyan-400">🌊</span>
                <span className="whitespace-nowrap">7/24 Hizmet</span>
              </div>
            </div>

        
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
              <button className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-base sm:text-lg rounded-2xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30 w-full sm:w-auto sm:min-w-[200px]">
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>🚤</span>
                  <span>Hemen Rezervasyon</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button className="group px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm text-white font-semibold text-base sm:text-lg rounded-2xl border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto sm:min-w-[200px]">
                <span className="flex items-center justify-center space-x-2">
                  <span>📞</span>
                  <span>Fiyat Bilgisi Al</span>
                </span>
              </button>
            </div>

            {/* İletişim bilgi */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-sm sm:text-base text-gray-300">
              <div className="flex items-center space-x-2">
                <span className="text-cyan-400">📞</span>
                <span className="font-semibold">+90 (212) 555-0123</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-gray-500"></div>
              <div className="flex items-center space-x-2">
                <span className="text-cyan-400">✉️</span>
                <span className="font-semibold">info@speedyat.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden sm:block">
          <div className="flex flex-col items-center text-white/70 animate-bounce">
            <span className="text-sm mb-2">Keşfetmeye devam edin</span>
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Dalga dalga yükselen simgeler */}
        <div className="absolute top-1/4 left-10 animate-float opacity-30 hidden lg:block">
          <div className="text-6xl">⚓</div>
        </div>
        <div className="absolute top-1/3 right-10 animate-float-delayed opacity-20 hidden lg:block">
          <div className="text-4xl">🌊</div>
        </div>
        <div className="absolute bottom-1/4 left-20 animate-float opacity-25 hidden lg:block">
          <div className="text-5xl">🚤</div>
        </div>
      </div>

      {/* Hareketli Yazı Duyuru */}
      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 py-3 overflow-hidden">
        <div className="whitespace-nowrap animate-scroll">
          <span className="text-white font-semibold text-lg mx-8">
            🚤 Yaz Sezonu Özel Kampanyası! %20 İndirim Fırsatı! 
          </span>
          <span className="text-white font-semibold text-lg mx-8">
            🌊 Lüks Yat Kiralama Hizmetleri 
          </span>
          <span className="text-white font-semibold text-lg mx-8">
            ⚓ Premium Deneyim, Uygun Fiyat 
          </span>
          <span className="text-white font-semibold text-lg mx-8">
            🏆 15+ Yıllık Deneyim 
          </span>
          <span className="text-white font-semibold text-lg mx-8">
            🚤 Yaz Sezonu Özel Kampanyası! %20 İndirim Fırsatı! 
          </span>
          <span className="text-white font-semibold text-lg mx-8">
            🌊 Lüks Yat Kiralama Hizmetleri 
          </span>
        </div>
      </div>

      {/* VIP Hizmetler Bölümü */}
      <div className="bg-black py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Sunduğumuz 
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> VIP</span> 
              <span className="text-white"> Hizmetler</span>
            </h2>
            <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto">
              Denizde unutulmaz anılar yaşamanız için özenle hazırlanmış premium hizmetlerimiz
            </p>
          </div>

          {/* Kartlar Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Kart 1 - Düğün Organizasyonları */}
            <div className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:border-cyan-500/50">
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src="src/assets/Imgs/yemek.jpeg"
                  alt="Düğün Organizasyonları"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  VIP
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-cyan-400 mb-3 group-hover:text-cyan-300 transition-colors">
                  Düğün Organizasyonları
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                  Hayatınızın en özel gününü denizde kutlayın. Profesyonel ekibimizle unutulmaz düğün organizasyonları.
                </p>
                <div className="flex items-center justify-between">
                  <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
                    İncele
                  </button>
                  <div className="text-cyan-400 text-2xl group-hover:scale-110 transition-transform">
                    💍
                  </div>
                </div>
              </div>
            </div>

            {/* Kart 2 - Kurumsal Etkinlikler */}
            <div className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:border-cyan-500/50">
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src="src/assets/Imgs/deniz.jpeg"
                  alt="Kurumsal Etkinlikler"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  VIP
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-cyan-400 mb-3 group-hover:text-cyan-300 transition-colors">
                  Kurumsal Etkinlikler
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                  İş toplantılarınızı ve kurumsal etkinliklerinizi prestijli bir ortamda gerçekleştirin.
                </p>
                <div className="flex items-center justify-between">
                  <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
                    İncele
                  </button>
                  <div className="text-cyan-400 text-2xl group-hover:scale-110 transition-transform">
                    🏢
                  </div>
                </div>
              </div>
            </div>

            {/* Kart 3 - Özel Kutlamalar */}
            <div className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:border-cyan-500/50">
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src="src/assets/Imgs/happy.jpg"
                  alt="Özel Kutlamalar"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  VIP
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-cyan-400 mb-3 group-hover:text-cyan-300 transition-colors">
                  Özel Kutlamalar
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                  Doğum günleri, yıldönümleri ve özel günlerinizi denizde kutlayın.
                </p>
                <div className="flex items-center justify-between">
                  <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
                    İncele
                  </button>
                  <div className="text-cyan-400 text-2xl group-hover:scale-110 transition-transform">
                    🎉
                  </div>
                </div>
              </div>
            </div>

            {/* Kart 4 - Ada Turları */}
            <div className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:border-cyan-500/50">
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src="src/assets/Imgs/ada.jpg"
                  alt="Ada Turları"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Popüler
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-cyan-400 mb-3 group-hover:text-cyan-300 transition-colors">
                  Ada Turları
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                  Büyükada, Heybeliada ve Prens Adaları'na özel yat turları.
                </p>
                <div className="flex items-center justify-between">
                  <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
                    İncele
                  </button>
                  <div className="text-cyan-400 text-2xl group-hover:scale-110 transition-transform">
                    🏝️
                  </div>
                </div>
              </div>
            </div>

            {/* Kart 5 - Gourmet Yemek */}
            <div className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:border-cyan-500/50">
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src="src/assets/Imgs/yemek.jpeg"
                  alt="Gourmet Yemek"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Özel
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-cyan-400 mb-3 group-hover:text-cyan-300 transition-colors">
                  Gourmet Yemek Hizmeti
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                  Ünlü şeflerimizin hazırladığı özel menüler ve gourmet yemek deneyimi.
                </p>
                <div className="flex items-center justify-between">
                  <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
                    İncele
                  </button>
                  <div className="text-cyan-400 text-2xl group-hover:scale-110 transition-transform">
                    🍽️
                  </div>
                </div>
              </div>
            </div>

            {/* Kart 6 - Günlük Turlar */}
            <div className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:border-cyan-500/50">
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src="src/assets/Imgs/deniz.jpeg"
                  alt="Günlük Turlar"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Günlük
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-cyan-400 mb-3 group-hover:text-cyan-300 transition-colors">
                  Günlük Yat Turları
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                  Boğaz ve Marmara'da günlük yat turları. Rahatlatıcı bir deniz deneyimi.
                </p>
                <div className="flex items-center justify-between">
                  <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
                    İncele
                  </button>
                  <div className="text-cyan-400 text-2xl group-hover:scale-110 transition-transform">
                    ☀️
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />

    
    </div>
  );
}

export default Homepage;