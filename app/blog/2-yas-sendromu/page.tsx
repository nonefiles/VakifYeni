export default function IkiYasSendromuPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header - navbar'ın altında kalması için pt-20 eklendi */}
      <div className="bg-white shadow-sm border-b pt-20">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
            2 Yaş Sendromu
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
              2 yaş sendromu, çocukların yaklaşık 2 yaş civarında başlayan, özgürlüklerini keşfetmeye, sınırlarını test etmeye ve kendi isteklerini ifade etmeye başladıkları bir dönemi ifade eder.
            </p>
          </div>

          {/* Causes Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
              2 Yaş Sendromunun Belirtileri
            </h2>
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <p className="text-gray-700 leading-relaxed text-center mb-8">
                2 yaş sendromunun belirtileri kişiden kişiye farklılık gösterebilse de, yaygın olarak görülenler şunlardır:
              </p>

              <div className="space-y-8">
                {/* Sürekli inatçı tutum sergileme */}
                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Sürekli inatçı tutum sergileme</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Çocuklar bu dönemde sürekli inatçı tutum sergileyebilirler.
                  </p>
                </div>

                {/* Aşırı öfke patlamaları */}
                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Aşırı öfke patlamaları</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Çocuklar, bu dönemde aşırı öfke patlamaları yaşayabilirler.
                  </p>
                </div>

                {/* Sınırları test etme */}
                <div className="border-l-4 border-yellow-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Sınırları test etme</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Çocuklar, sınırları test etmeye ve bağımsızlık kazanmaya çalışırlar.
                  </p>
                </div>

                {/* Sürekli "hayır" deme */}
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Sürekli "hayır" deme</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Çocuklar, bu dönemde sürekli olarak "hayır" diyebilirler.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Solutions Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
              2 Yaş Sendromuyla Başa Çıkma Yolları
            </h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <p className="text-gray-700 leading-relaxed text-center mb-8">
                Ebeveynler, 2 yaş sendromunu doğru bir şekilde yönetmek ve çocuklarıyla sağlıklı ilişkiler kurabilmek için çeşitli başa çıkma yolları geliştirebilirler:
              </p>

              <div className="space-y-8">
                {/* Duygusal İhtiyaçları Anlamak */}
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Duygusal İhtiyaçları Anlamak</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Çocuğunuzun duygusal ihtiyaçlarını anlamak ve duygularını ciddiye almak önemlidir.
                  </p>
                </div>

                {/* Sınır Koyma ve Kuralları Belirleme */}
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Sınır Koyma ve Kuralları Belirleme</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Çocuğa sınırlar koymak ve kuralları net bir şekilde belirlemek önemlidir.
                  </p>
                </div>

                {/* Sabır ve Anlayış */}
                <div className="border-l-4 border-indigo-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Sabır ve Anlayış</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Ebeveynlerin sabırlı ve anlayışlı olmaları, çocuklarının duygusal gelişimine destek olmaları önemlidir.
                  </p>
                </div>

                {/* Destek Grupları ve Profesyonel Yardım */}
                <div className="border-l-4 border-teal-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Destek Grupları ve Profesyonel Yardım</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Destek gruplarına katılmak ve uzmanlardan yardım almak, ebeveynlerin bu dönemi daha rahat atlatmalarına yardımcı olabilir.
                  </p>
                </div>

                {/* Kendine Zaman Ayırmak */}
                <div className="border-l-4 border-pink-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Kendine Zaman Ayırmak</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Ebeveynlerin kendilerine zaman ayırmaları da bu süreçte faydalıdır.
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
