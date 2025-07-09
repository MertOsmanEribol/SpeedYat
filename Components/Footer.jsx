import React from 'react'

function Footer() {
     const currentYear = new Date().getFullYear();
  return (
    
    <div>
      <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
     
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400"></div>
      
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Şirket bilgisi logo vs.. */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img
                className="h-12 w-auto object-contain"
                src="src/assets/Imgs/Spedyat.png"
                alt="Speed Yat Logo"
              />
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Speed Yat
                </h3>
                <p className="text-sm text-gray-400">Premium Yacht Experience</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Lüks yat kiralama ve deniz turizmi konusunda 15 yıllık deneyimimizle, 
              size unutulmaz deniz maceraları sunuyoruz.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="group">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110">
                  <span className="text-white font-bold">f</span>
                </div>
              </a>
              <a href="#" className="group">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110">
                  <span className="text-white font-bold">@</span>
                </div>
              </a>
              <a href="#" className="group">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110">
                  <span className="text-white font-bold">in</span>
                </div>
              </a>
              <a href="#" className="group">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110">
                  <span className="text-white font-bold">yt</span>
                </div>
              </a>
            </div>
          </div>

          {/* Hızlı linkler ( kendime not: icap ederse kaldırabilirim gereksiz geldi anlık) */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white border-b-2 border-cyan-400 pb-2 inline-block">
              Hızlı Linkler
            </h4>
            <nav className="space-y-3">
              
              <a href="#" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover:pl-2 transform">
                🏖️ Özel Turlar
              </a>
              <a href="#" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover:pl-2 transform">
                🎉 Özel Etkinlikler
              </a>
              
              
              <a href="#" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover:pl-2 transform">
                📋 Rezervasyon
              </a>
            </nav>
          </div>

          {/* Footer Hizmetler */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white border-b-2 border-cyan-400 pb-2 inline-block">
              Hizmetlerimiz
            </h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <span className="text-cyan-400 mt-1">🌊</span>
                <div>
                  <h5 className="font-semibold text-white">Günlük Turlar</h5>
                  <p className="text-sm text-gray-400">Boğaz ve adalar turu</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-cyan-400 mt-1">🌅</span>
                <div>
                  <h5 className="font-semibold text-white">Gün Batımı</h5>
                  <p className="text-sm text-gray-400">Romantik akşam turları</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-cyan-400 mt-1">🎊</span>
                <div>
                  <h5 className="font-semibold text-white">Özel Etkinlik</h5>
                  <p className="text-sm text-gray-400">Doğum günü, düğün</p>
                </div>
              </div>
          
            </div>
          </div>

          {/* İletişim footer */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white border-b-2 border-cyan-400 pb-2 inline-block">
              İletişim
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-cyan-400 mt-1">📍</span>
                <div>
                  <h5 className="font-semibold text-white">Adres</h5>
                  <p className="text-sm text-gray-300">
                    Bebek Marina, Bebek<br />
                    34342 Beşiktaş/İstanbul
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-cyan-400 mt-1">📞</span>
                <div>
                  <h5 className="font-semibold text-white">Telefon</h5>
                  <p className="text-sm text-gray-300">+90 (212) 555-0123</p>
                 
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-cyan-400 mt-1">✉️</span>
                <div>
                  <h5 className="font-semibold text-white">E-posta</h5>
                  <p className="text-sm text-gray-300">info@speedyat.com</p>
                  
                </div>
              </div>
            
            </div>
          </div>
        </div>

       
      </div>

      {/* en alt tarih kısmı */}
      <div className="bg-gray-900/80 border-t border-gray-700">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400">
                © {currentYear} <span className="text-cyan-400 font-semibold">Speed Yat</span>. 
                Tüm hakları saklıdır.
              </p>
            </div>
          
          </div>
        </div>
      </div>

     
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-cyan-900/5 to-transparent pointer-events-none"></div>
    </footer>
{/* git deneme  */}


    </div>
  )
}

export default Footer
