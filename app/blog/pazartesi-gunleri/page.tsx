export default function PazartesiSendromuPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header - navbar'ın altında kalması için pt-20 eklendi */}
      <div className="bg-white shadow-sm border-b pt-20">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
            Pazartesi Sendromu
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
              Pazartesi sendromu, hafta başı işe geri dönme korkusu ve endişesi olarak tanımlanabilir. Bu durum, hafta sonu dinlenerek geçirilen zamanın ardından tekrar işe dönme fikrinin birçok kişide stres yaratmasıyla ortaya çıkar.
            </p>
          </div>

          {/* Causes Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
              Pazartesi Sendromunun Nedenleri
            </h2>
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <p className="text-gray-700 leading-relaxed text-center mb-8">
                Pazartesi sendromunun ortaya çıkmasında çeşitli faktörler etkili olabilir. Bunlar arasında şunlar yer alır:
              </p>

              <div className="space-y-8">
                {/* İş Stresi */}
                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">İş Stresi</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Yoğun iş temposu, yetiştirilmesi gereken işler, patron ve meslektaşlarla ilişkiler gibi faktörler çalışanları strese sokabilir.
                  </p>
                </div>

                {/* Olumsuz İş Yeri Atmosferi */}
                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Olumsuz İş Yeri Atmosferi</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Stresli bir çalışma ortamı, işe geri dönmek istememeyi tetikleyebilir. Olumsuz iş yeri atmosferi, çalışanların motivasyonunu düşürebilir, stres seviyelerini artırabilir ve iş performansını olumsuz etkileyebilir; ayrıca psikolojik sağlıklarını da etkileyebilir.
                  </p>
                </div>

                {/* Rutinlerin Sıkıcılığı */}
                <div className="border-l-4 border-yellow-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Rutinlerin Sıkıcılığı</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Günlük olarak tekrarlanan rutinler hayatımız üzerinde büyük bir etkiye sahiptir ve bu rutinlerin getirdiği sıkıcılık Pazartesi sendromuna neden olabilir. Rutinler düzen sağlasa da, monotonlaşmamak için zaman zaman değiştirilmeleri önemlidir.
                  </p>
                </div>

                {/* Sosyal Beklentiler */}
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Sosyal Beklentiler</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Toplum tarafından bireylere yöneltilen başarı veya görünümle ilgili beklentiler, zaman zaman bireyler üzerinde stres yaratabilir. Bu beklentilere kapılmadan önce kişilerin kendi iç dünyalarını, önceliklerini ve hedeflerini belirlemesi önemlidir.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Solutions Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
              Pazartesi Sendromuyla Başa Çıkma Yolları
            </h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <p className="text-gray-700 leading-relaxed text-center mb-8">
                Pazartesi sendromunu atlatabilmek ve etkilerini en aza indirmek için çeşitli yöntemler uygulanabilir:
              </p>

              <div className="space-y-8">
                {/* Stres Yönetimi Teknikleri */}
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Stres Yönetimi Teknikleri</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    İş stresinin etkisiyle başa çıkmak için stres yönetimi tekniklerini uygulamak önemlidir.
                  </p>
                </div>

                {/* Hafta Sonu Dinlenmesi */}
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Hafta Sonu Dinlenmesi</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Hafta sonu dinlenmesi ve motivasyonu artırıcı aktivitelerle Pazartesi sendromu azaltılabilir. Hafta sonu dinlenmesi, yoğun iş temposunun ve günlük koşuşturmacanın yarattığı stresi atmak için hem bedenin hem de zihnin restore edilmesi açısından hayati öneme sahiptir. Bu süreçte spor yapmak, aile ve sevdiklerle vakit geçirmek, hobilere yönelmek faydalı olabilir.
                  </p>
                </div>

                {/* Olumlu Düşünce */}
                <div className="border-l-4 border-indigo-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Olumlu Düşünce ve Motivasyonu Koruma</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Pazartesi sendromunu atlatmak için olumlu düşünce ve motivasyonu korumaya çalışmak önemlidir.
                  </p>
                </div>

                {/* Dinlenme Zamanı Ayırmak */}
                <div className="border-l-4 border-teal-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Dinlenme Zamanı Ayırmak</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Enerji veren aktivitelere katılmak ve dinlenmeye zaman ayırmak etkili olabilir.
                  </p>
                </div>

                {/* Olumlu İş Yeri Atmosferi */}
                <div className="border-l-4 border-cyan-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Olumlu İş Yeri Atmosferi Yaratma</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    İş yerindeki olumsuz etkilerle başa çıkmak için yöneticilerin ve çalışanların iş birliği yapması, şeffaf iletişim, adil ve destekleyici liderlik anlayışı ve destek programları düzenlenmesi gerekmektedir.
                  </p>
                </div>

                {/* Pazartesiye Olumlu Hazırlık */}
                <div className="border-l-4 border-violet-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Pazartesiye Olumlu Hazırlık</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Pazartesi sabahı kendinize güzel bir kahvaltı hazırlayarak güne daha olumlu bir başlangıç yapabilirsiniz.
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
