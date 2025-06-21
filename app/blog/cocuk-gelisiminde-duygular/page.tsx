export default function CocukGelisimindeDuygularPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header - navbar'ın altında kalması için pt-20 eklendi */}
      <div className="bg-white shadow-sm border-b pt-20">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
            Çocuk Gelişiminde Duygular
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
              Çocuk gelişiminde duygular, çocukların sağlıklı bir şekilde büyüyebilmeleri, başarılı ilişkiler kurabilmeleri ve genel yaşam kalitelerini artırabilmeleri için hayati bir rol oynamaktadır. Duygusal gelişim, çocuğun duyguları tanımasını, ifade etmesini, yönetmesini ve başkalarının duygularını anlamasını içerir.
            </p>
          </div>

          {/* Emotional Intelligence Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
              Duygusal Zeka Gelişimi
            </h2>
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <p className="text-gray-700 leading-relaxed text-center mb-8">
                Çocukların duygusal zeka gelişimi, sağlıklı büyümeleri ve başarılı ilişkiler kurabilmeleri için önemlidir. Duygusal zeka, duyguları tanıma, anlama, ifade etme ve yönetme becerisini içerir.
              </p>
              <div className="space-y-8">
                {/* Duyguları Anlama ve İfade Etme */}
                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Duyguları Anlama ve İfade Etme</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Çocukların duygularının adını koymalarına yardımcı olunmalı ve duygularını ifade etmeleri öğretilmelidir. Çocuklara duygusal hallerini ifade etmeleri için güvenli bir alan sağlamak önemlidir.
                  </p>
                </div>

                {/* Ebeveyn Tutumu ve İletişim */}
                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Ebeveyn Tutumu ve İletişim</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Ebeveynler, çocuklarının duygusal ihtiyaçlarını tanımak ve onları anlamak için zaman ayırmalıdır. İletişim kanallarının açık olması, çocukların duygusal zeka gelişimi için kritik öneme sahiptir.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Importance of Expressing Emotions Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
              Duygu İfade Etmenin Önemi
            </h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <p className="text-gray-700 leading-relaxed text-center mb-8">
                Duyguları ifade etmek, çocukların duygusal ihtiyaçlarını anlamalarına ve başkalarıyla sağlıklı ilişkiler kurmalarına yardımcı olur. Bu beceri, çocukların sosyal becerilerini geliştirmelerine ve duygusal sağlamlık kazanmalarına katkı sağlar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
