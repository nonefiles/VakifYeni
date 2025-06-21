export default function DikkatEksikligiPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header - navbar'ın altında kalması için pt-20 eklendi */}
      <div className="bg-white shadow-sm border-b pt-20">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
            Dikkat Eksikliği
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
              Dikkat eksikliği, bireyin dikkatini toplama, sürdürme ve odaklanmada güçlük çektiği yaygın bir durumdur. Bu durum, genellikle çocukluk döneminde başlar ancak yetişkinlikte de devam edebilir.
            </p>
          </div>

          {/* Symptoms Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
              Dikkat Eksikliği Belirtileri
            </h2>
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <p className="text-gray-700 leading-relaxed text-center mb-8">
                Dikkat eksikliği belirtileri kişiden kişiye ve yaşa göre değişiklik gösterebilir.
              </p>

              <div className="space-y-8">
                {/* Genel Belirtiler */}
                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Genel Belirtiler</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Dikkatsizlik, unutkanlık, dağınıklık, huzursuzluk ve yerinde duramama.
                  </p>
                </div>

                {/* Yetişkinlerde */}
                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Yetişkinlerde</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Dikkat dağınıklığı, unutkanlık, organizasyon zorluğu, zamanı yönetememe ve planlama eksikliği yaygındır.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Diagnosis Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
              Teşhis Süreci
            </h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <p className="text-gray-700 leading-relaxed text-center mb-8">
                Dikkat eksikliği teşhisi genellikle uzman bir doktor tarafından konulur. Bu süreç hassas olup kişisel bir yaklaşım gerektirir.
              </p>

              <div className="space-y-8">
                {/* Öncelikle */}
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Öncelikle</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Kişinin yaşadığı semptomlar detaylı bir şekilde incelenir.
                  </p>
                </div>

                {/* Ardından */}
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Ardından</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Çeşitli psikolojik testler ve değerlendirmeler (örneğin DEHB testleri) uygulanabilir.
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
