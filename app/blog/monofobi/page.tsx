export default function MonofobiPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header - navbar'ın altında kalması için pt-20 eklendi */}
      <div className="bg-white shadow-sm border-b pt-20">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
            Monofobi
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
              Monofobi, farklı şekillerde tanımlanan bir korku veya endişe durumudur. Genellikle "tek başına olmaktan veya yalnız kalmaktan duyulan aşırı korku veya endişe durumu" olarak tanımlanır, ancak aynı zamanda "monotonluktan veya tekdüzelikten korkma, rahatsızlık duyma durumu" anlamını da taşır.
            </p>
          </div>

          {/* Symptoms and Causes Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
              Belirtileri ve Nedenleri
            </h2>
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <p className="text-gray-700 leading-relaxed text-center mb-8">
                Monofobinin belirtileri kişiden kişiye farklılık göstermekle birlikte, yaygın olarak görülenler şunlardır:
              </p>

              <div className="space-y-8">
                {/* Sürekli inatçı tutum sergileme */}
                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Sürekli inatçı tutum sergileme</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Sürekli inatçı tutum sergileme.
                  </p>
                </div>

                {/* Aşırı öfke patlamaları */}
                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Aşırı öfke patlamaları</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Aşırı öfke patlamaları.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Risk Factors Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
              Risk Faktörleri
            </h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <p className="text-gray-700 leading-relaxed text-center mb-8">
                Bazı yaşam deneyimleri, kişilik özellikleri ve genetik faktörler monofobi riskini artırabilir.
              </p>

              <div className="space-y-8">
                {/* Sosyal Kaygı Bozukluğu */}
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Sosyal Kaygı Bozukluğu</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Sosyal ortamlarda rahat hissetmeme, insanlarla etkileşime girmekte zorlanma ve yalnızlık hissi gibi belirtilere sahip olmak, monofobi riskini artırabilir.
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
