export default function KisilikBozukluguPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header - navbar'ın altında kalması için pt-20 eklendi */}
      <div className="bg-white shadow-sm border-b pt-20">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
            Kişilik Bozukluğu
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
              Kişilik Bozukluğu, bir bireyin düşünce, duygu ve davranışlarında sürekli ve kalıcı bir sapma gösterdiği psikiyatrik bir hastalıktır. Bu durum, kişinin sosyal ilişkilerini, işlevselliğini ve genel yaşam kalitesini olumsuz etkileyebilir.
            </p>
          </div>

          {/* Types and Symptoms Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
              Kişilik Bozukluğu Türleri ve Belirtileri
            </h2>
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <p className="text-gray-700 leading-relaxed text-center mb-8">
                Kişilik bozukluklarının belirtileri, bozukluğun türüne göre farklılık gösterir.
              </p>

              <div className="space-y-8">
                {/* Paranoid Kişilik Bozukluğu */}
                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Paranoid Kişilik Bozukluğu</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Sürekli şüphe duyma, güvensizlik, saldırganlık, diğer insanların niyetlerini yanlış yorumlama ve kıskançlık.
                  </p>
                </div>

                {/* Şizoid Kişilik Bozukluğu */}
                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Şizoid Kişilik Bozukluğu</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Duygusal soğukluk, kendine yönelik ilgi ve aktivitelerde azalma, sosyal ilişkilerden kaçınma.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Causes Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
              Kişilik Bozukluğunun Nedenleri
            </h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <p className="text-gray-700 leading-relaxed text-center mb-8">
                Kişilik bozuklukları genellikle birden fazla faktörün birleşimiyle ortaya çıkan karmaşık koşullardır.
              </p>

              <div className="space-y-8">
                {/* Biyolojik Faktörler */}
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Biyolojik Faktörler</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Kalıtımsal faktörler önemli rol oynar; ailede kişilik bozukluğu olan bireylerin bu bozukluğa sahip olma riski daha yüksektir.
                  </p>
                </div>

                {/* Psikolojik Faktörler */}
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Psikolojik Faktörler</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    İstismar, ihmal, aşırı kontrol veya aşırı gevşeklik gibi çocukluk dönemi travmaları, kişilik bozukluğu riskini artırabilir ve kişiliğin gelişimini olumsuz etkileyebilir.
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
