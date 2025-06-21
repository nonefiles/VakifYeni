export default function DepresyonPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header - navbar'ın altında kalması için pt-20 eklendi */}
      <div className="bg-white shadow-sm border-b pt-20">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
            Depresyon
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">

          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-12 border-l-4 border-blue-600">
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              Depresyon yaygın bir ruh hali bozukluğu olup, kişinin hayat kalitesini olumsuz etkileyen ciddi bir mental sağlık sorunudur. Depresyonla mücadelede çeşitli tedavi yöntemleri ve terapiler bulunmaktadır.
            </p>
          </div>

          {/* Symptoms Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
              Depresyonun Tanımı ve Belirtileri
            </h2>
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <p className="text-gray-700 leading-relaxed text-center mb-8">
                Depresyon, genellikle duygusal, fiziksel ve düşünsel belirtilerle karakterize edilen yaygın bir ruh hali bozukluğudur. Belirtiler kişiden kişiye farklılık gösterebilir.
              </p>

              <div className="space-y-8">
                {/* Sürekli hüzün */}
                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Sürekli hüzün</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Sürekli hüzün, umutsuzluk ve değersizlik hissi.
                  </p>
                </div>

                {/* Kaygı ve endişe */}
                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Kaygı ve endişe</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Kaygı ve endişe.
                  </p>
                </div>

                {/* Enerji kaybı */}
                <div className="border-l-4 border-yellow-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Enerji kaybı</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Enerji kaybı ve sürekli yorgunluk/bitkinlik hissi.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Causes Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
              Depresyonun Nedenleri ve Risk Faktörleri
            </h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <p className="text-gray-700 leading-relaxed text-center mb-8">
                Depresyonun nedenleri karmaşıktır ve birçok farklı faktörün etkileşimi sonucu ortaya çıkabilir.
              </p>

              <div className="space-y-8">
                {/* Genetik Faktörler */}
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Genetik Faktörler</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Ailede depresyon geçmişi olan bireylerde depresyona yakalanma riski daha yüksektir. Bu durum, genetik yapıdan kaynaklanan biyokimyasal dengesizliklere bağlı olabilir.
                  </p>
                </div>

                {/* Beyin Kimyası Dengesizlikleri */}
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Beyin Kimyası Dengesizlikleri</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Beyindeki serotonin, noradrenalin ve dopamin gibi nörotransmitterlerin dengesizliği depresyonun gelişimine katkıda bulunabilir.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
