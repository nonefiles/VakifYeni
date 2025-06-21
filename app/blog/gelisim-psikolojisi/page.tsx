export default function GelisimPsikolojisiPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header - navbar'ın altında kalması için pt-20 eklendi */}
      <div className="bg-white shadow-sm border-b pt-20">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
            Gelişim Psikolojisi
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
              Gelişim Psikolojisi, bireylerin yaşamları boyunca fiziksel, duygusal, zihinsel ve sosyal olarak nasıl değişim gösterdiklerini inceleyen disiplinlerarası bir psikoloji alt dalıdır. Bu alanda çalışan uzmanlar, bireylerin farklı yaş gruplarındaki insanların ihtiyaçlarını anlamaya ve karşılamaya çalışırlar.
            </p>
          </div>

          {/* Basic Concepts Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
              Temel Kavramlar
            </h2>
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <p className="text-gray-700 leading-relaxed text-center mb-8">
                Gelişim psikolojisinde temel kavramlar arasında genellikle bireysel gelişim, zihinsel gelişim, duygusal gelişim ve sosyal gelişim ile ilişkiler gibi terimler bulunmaktadır.
              </p>

              <div className="space-y-8">
                {/* Bireysel Gelişim */}
                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Bireysel Gelişim</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Bireyin fiziksel, zihinsel, duygusal ve sosyal yönden yaşam boyu gelişimini inceler.
                  </p>
                </div>

                {/* Duygusal Gelişim */}
                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Duygusal Gelişim</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Çocukların sağlıklı bir benlik, özgüven ve başarı duygusu geliştirmelerine yardımcı olur.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Theories Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
              Gelişim Psikolojisi Teorileri
            </h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <p className="text-gray-700 leading-relaxed text-center mb-8">
                Gelişim psikolojisi teorileri, insanların yaşamları boyunca psikolojik olarak nasıl geliştiklerini anlamak ve açıklamak için tasarlanmıştır.
              </p>

              <div className="space-y-8">
                {/* Erikson'un Psikososyal Gelişim Teorisi */}
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Erikson'un Psikososyal Gelişim Teorisi</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Kimlik, rol karmaşası, bütünlük gibi anahtar kavramlara odaklanır.
                  </p>
                </div>

                {/* Vygotsky'nin Sosyal Gelişim Teorisi */}
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Vygotsky'nin Sosyal Gelişim Teorisi</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Proksimal gelişim bölgesi ve sosyal öğrenme gibi kavramları içerir.
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
