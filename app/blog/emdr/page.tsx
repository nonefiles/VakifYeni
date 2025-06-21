export default function EmdrPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header - navbar'ın altında kalması için pt-20 eklendi */}
      <div className="bg-white shadow-sm border-b pt-20">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
            EMDR
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
              EMDR (Eye Movement Desensitization and Reprocessing), yani Göz Hareketleriyle Duyarsızlaştırma ve Yeniden İşleme olarak adlandırılan bir terapi yöntemidir. Bu yöntem, 1980'lerde bilim insanı Francine Shapiro tarafından geliştirilmiştir.
            </p>
          </div>

          {/* What is EMDR Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
              EMDR Nedir ve Nasıl Çalışır?
            </h2>
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <p className="text-gray-700 leading-relaxed text-center mb-8">
                EMDR, travmatik deneyimlerin tedavisinde etkili olduğu bilinen bir terapötik yaklaşımdır. Beyin ile göz hareketleri arasındaki ilişkiyi kullanarak, travmatik anıların etkilerini hafifletmeyi ve yeniden işlemeyi hedefler.
              </p>
            </div>
          </div>

          {/* Principles Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
              EMDR'nin Temel Prensipleri
            </h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <p className="text-gray-700 leading-relaxed text-center mb-8">
                EMDR'nin temel ilkelerinden biri, kişinin zihinsel ve duygusal sağlığını iyileştirmek için kendi doğal iç iyileştirme sürecini harekete geçirmesidir.
              </p>

              <div className="space-y-8">
                {/* İlk Prensip */}
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">İlk Prensip</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Kişinin zihinsel ve duygusal sağlığını iyileştirmek için kendi doğal iç iyileştirme sürecini harekete geçirmesidir.
                  </p>
                </div>

                {/* İkinci Prensip */}
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">İkinci Prensip</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Yoğun duygusal deneyimlerin işlenmesi ve entegrasyonu için bilateral uyarımın kullanılmasıdır.
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
