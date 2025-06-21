export default function IliskiTerapistiPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header - navbar'ın altında kalması için pt-20 eklendi */}
      <div className="bg-white shadow-sm border-b pt-20">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
            İlişki Terapisti
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
              İlişki Terapisti, çiftlerin, ailelerin veya bireylerin ilişkilerinde yaşadıkları sorunlara yardımcı olan, bu süreçte rehberlik ve destek sağlayan lisanslı profesyonellerdir. Temel amaçları, danışanların ilişkisel problemlerini anlamalarına, iletişim becerilerini geliştirmelerine ve daha sağlıklı ilişkiler kurmalarına yardımcı olmaktır.
            </p>
          </div>

          {/* Education Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
              Eğitim Süreci ve Nitelikler
            </h2>
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <p className="text-gray-700 leading-relaxed text-center mb-8">
                İlişki terapisti olmak için genellikle psikoloji, sosyal hizmet veya evlilik ve aile terapisi alanlarında lisans veya yüksek lisans derecesine sahip olmak gerekir.
              </p>
            </div>
          </div>

          {/* Client Relationship Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
              Danışanlarla İlişkisi
            </h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <p className="text-gray-700 leading-relaxed text-center mb-8">
                İlişki terapistleri, danışanlarına karşı empatik, güvenilir ve tarafsız olmalıdır. Danışanların duygusal ve zihinsel ihtiyaçlarını anlamak için dikkatli dinleme ve gözlemleme becerisine sahip olmaları beklenir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
