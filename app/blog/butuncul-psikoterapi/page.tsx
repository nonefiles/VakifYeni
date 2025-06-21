export default function ButunculPsikoterapiPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header - navbar'ın altında kalması için pt-20 eklendi */}
      <div className="bg-white shadow-sm border-b pt-20">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
            Bütüncül Psikoterapi
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
              Bütüncül Psikoterapi, bireyin zihinsel, duygusal, fiziksel ve ruhsal ihtiyaçlarını bir bütün olarak ele alan kapsamlı bir terapi yaklaşımıdır. Geleneksel terapi yöntemlerinden farklı olarak, bu yaklaşım beden, zihin ve ruhun birbirinden ayrılamaz bir bütün olduğunu kabul eder ve bütünsel iyilik haline ulaşmayı hedefler.
            </p>
          </div>

          {/* Principles Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
              Bütüncül Psikoterapinin Temel İlkeleri
            </h2>
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <p className="text-gray-700 leading-relaxed text-center mb-8">
                Bütüncül psikoterapinin temelinde, bireyin sadece belirli bir semptom veya sorunla değil, tüm yaşamının bir bütün olarak ele alınması yatar.
              </p>

              <div className="space-y-8">
                {/* Bireyin Bütüncül Değerlendirilmesi */}
                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Bireyin Bütüncül Değerlendirilmesi</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Terapist, bireyin duygusal, zihinsel, fiziksel ve ruhsal durumunu detaylı bir şekilde değerlendirir. Böylece, kişinin yaşamındaki dengesizliklerin ve çelişkilerin temel nedenleri belirlenmeye çalışılır.
                  </p>
                </div>

                {/* Empati ve İlişki Merkezli Yaklaşım */}
                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Empati ve İlişki Merkezli Yaklaşım</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Terapist, bireyin deneyimlerine empatiyle yaklaşır ve duygusal dünyasına derinlemesine inerek onu anlamaya çalışır. Terapist ile birey arasında kurulan güvenli ilişki, terapinin başarısı üzerinde büyük etkiye sahiptir.
                  </p>
                </div>

                {/* İçsel Kaynaklara Odaklanma */}
                <div className="border-l-4 border-yellow-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">İçsel Kaynaklara Odaklanma</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Kişinin içsel kaynaklarına ve potansiyeline odaklanarak, kendini iyileştirme sürecini destekler.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Process Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
              Bütüncül Psikoterapi Süreci
            </h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <p className="text-gray-700 leading-relaxed text-center mb-8">
                Bu terapi süreci, kişinin psikolojik geçmişi, duygusal durumu, zihinsel sağlığı ve fiziksel ihtiyaçlarını göz önünde bulundurarak uygulanır. Sürecin en önemli özelliği, kişinin sadece semptomlarıyla değil, altında yatan sebepleriyle de ilgilenmesidir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
