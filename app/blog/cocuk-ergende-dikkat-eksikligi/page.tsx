export default function DikkatEksikligiPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header - navbar'ın altında kalması için pt-20 eklendi */}
      <div className="bg-white shadow-sm border-b pt-20">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
            Çocuk ve Ergenlerde Dikkat Eksikliği
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
              Çocuk ve Ergenlerde Dikkat Eksikliği, bireyin dikkatini toplamakta, sürdürmekte ve odaklanmada zorluk çektiği bir durumdur. Bu durum genellikle çocukluk döneminde başlar ve yetişkinlikte de devam edebilir.
            </p>
          </div>

          {/* Symptoms Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
              Dikkat Eksikliği Nedir?
            </h2>
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <p className="text-gray-700 leading-relaxed text-center mb-8">
                Dikkat eksikliği, bir kişinin dikkatini toplama süreçlerinde güçlük çektiği bir durumdur. Kişinin odaklanma, planlama, organizasyon ve dikkat dağıtıcı etkilere karşı koyma becerilerinde zorluk yaşamasına neden olabilir.
              </p>
            </div>
          </div>

          {/* Symptoms Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
              Dikkat Eksikliği Belirtileri Nelerdir?
            </h2>
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <p className="text-gray-700 leading-relaxed text-center mb-8">
                Dikkat eksikliği belirtileri, genellikle dikkat dağınıklığı, unutkanlık, organizasyon problemleri, sürekli hareket halinde olma gibi semptomlarla kendini gösterir.
              </p>

              <div className="space-y-8">
                {/* Dikkat dağınıklığı */}
                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Dikkat dağınıklığı</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Dikkat eksikliği belirtileri arasında dikkat dağınıklığı yer alabilir.
                  </p>
                </div>

                {/* Sürekli hareketlilik */}
                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Sürekli hareketlilik</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Dikkat eksikliği belirtileri arasında sürekli hareketlilik yer alabilir.
                  </p>
                </div>

                {/* Unutkanlık */}
                <div className="border-l-4 border-yellow-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Unutkanlık</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Dikkat eksikliği belirtileri arasında unutkanlık yer alabilir.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Treatment Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
              Dikkat Eksikliği İçin Tedavi Yöntemleri Nelerdir?
            </h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <p className="text-gray-700 leading-relaxed text-center mb-8">
                Çocuklarda dikkat eksikliği bozukluğu, genellikle okul öncesi dönemde fark edilmeye başlar. Tedavi yöntemleri, çocuğun yaşına, durumuna ve belirtilerine göre farklılık gösterebilir.
              </p>

              <div className="space-y-8">
                {/* İlaç Tedavisi */}
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">İlaç Tedavisi</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Dikkat eksikliği bozukluğu için genellikle dopamin ve norepinefrin dengesini düzenleyen ilaçlar kullanılır.
                  </p>
                </div>

                {/* Eğitim Programları */}
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Eğitim Programları</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Okul öncesi eğitim programları, özel eğitim desteği ve öğrenciye özel eğitim planları, dikkat eksikliği olan çocukların akademik performansını artırmaya yardımcı olabilir.
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
