export default function AnksiyetePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header - navbar'ın altında kalması için pt-20 eklendi */}
      <div className="bg-white shadow-sm border-b pt-20">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
            Anksiyete
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
              Anksiyete veya kaygı, birçok insanın hayatında zaman zaman karşılaştığı doğal bir duygusal tepkidir. Genellikle endişe, korku ve gerginlik hisleriyle ilişkilidir. Vücudun tehlikeli bir durumu algıladığında ortaya çıkan bir savunma mekanizmasıdır.
            </p>
          </div>

          {/* Symptoms Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
              Anksiyetenin Belirtileri
            </h2>
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <p className="text-gray-700 leading-relaxed text-center mb-8">
                Anksiyete, kişinin günlük yaşamını olumsuz etkileyebilen birçok belirtiyle kendini gösterebilir. Bu belirtiler her bireyde farklılık gösterebilir, ancak genellikle ortak noktalara sahiptir.
              </p>

              <div className="space-y-8">
                {/* Kalp hızının artması */}
                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Kalp hızının artması</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Anksiyete durumunda kalp hızının artması görülebilir.
                  </p>
                </div>

                {/* Terleme */}
                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Terleme</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Anksiyete durumunda terleme görülebilir.
                  </p>
                </div>

                {/* Titreme */}
                <div className="border-l-4 border-yellow-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Titreme</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Anksiyete durumunda titreme görülebilir.
                  </p>
                </div>

                {/* Nefes darlığı */}
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Nefes darlığı</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Anksiyete durumunda nefes darlığı görülebilir.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Treatment Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
              Anksiyete İle Başa Çıkma İpuçları
            </h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <p className="text-gray-700 leading-relaxed text-center mb-8">
                Anksiyeteyle başa çıkmak için kullanılabilecek birçok etkili yöntem bulunmaktadır:
              </p>

              <div className="space-y-8">
                {/* Derin Nefes Alma */}
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Derin Nefes Alma</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Stres ve anksiyete anında derin nefes almak etkili yöntemlerden biridir. Sinir sistemini sakinleştirir ve rahatlamayı sağlar.
                  </p>
                </div>

                {/* Egzersiz Yapmak */}
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Egzersiz Yapmak</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Düzenli egzersiz yapmak, endorfin salgılanmasına yardımcı olan doğal bir stres azaltıcıdır.
                  </p>
                </div>

                {/* Stres Yönetimi */}
                <div className="border-l-4 border-indigo-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Stres Yönetimi</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Stresi yönetmek, anksiyeteyi kontrol altına almanın önemli bir unsurudur.
                  </p>
                </div>

                {/* Küçük Hedefler Belirleme */}
                <div className="border-l-4 border-teal-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Küçük Hedefler Belirleme</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Kendinize küçük hedefler belirlemek, özgüveni artırır ve anksiyeteyle daha iyi başa çıkmaya yardımcı olur.
                  </p>
                </div>

                {/* Kendini Bilinçli Bir Şekilde Kabul Etme */}
                <div className="border-l-4 border-pink-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Kendini Bilinçli Bir Şekilde Kabul Etme</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Kendinizi eleştirmek veya kınamak yerine, benliğinizle barışık olmaya çalışmak, kusurlarınızı ve zayıflıklarınızı normal bir insan deneyimi olarak görmek ilk adımdır.
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
