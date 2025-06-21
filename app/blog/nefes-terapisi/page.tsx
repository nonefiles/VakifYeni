export default function NefesTerapisiPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header - navbar'ın altında kalması için pt-20 eklendi */}
      <div className="bg-white shadow-sm border-b pt-20">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
            Nefes Terapisi
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
              Nefes terapisi, zihinsel ve fiziksel sağlığı geliştirmek amacıyla nefes alışkanlıklarını düzenlemeye odaklanan bir tedavi yöntemidir. Son yıllarda popülerliği artan bu psikoterapi türü, stresle baş etme, duygusal dengeyi sağlama ve zihinsel sağlığı iyileştirme konularında etkili olduğu biliniyor.
            </p>
          </div>

          {/* Nefes Terapisi Teknikleri ve Faydaları */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
              Nefes Terapisi Teknikleri ve Faydaları
            </h2>
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <p className="text-gray-700 leading-relaxed text-center mb-8">
                Nefes terapisi, zihinsel ve fiziksel sağlığı iyileştirmek için derin nefes alma ve farkındalık tekniklerini içerir. Derin nefes almanın önemi oldukça büyüktür çünkü bu teknik stresi azaltmaya yardımcı olur ve zihni sakinleştirir. Ayrıca, vücuda daha fazla oksijen ulaşmasını sağlar; normal nefes alırken sadece akciğerlerin üst kısımları kullanılırken, derin nefes alırken göğüs kafesinin alt kısmı ve karın bölgesi genişletilerek akciğerlere daha fazla oksijen alınır, bu da vücudun daha sağlıklı olmasını sağlar.
              </p>

              <div className="space-y-8">
                {/* Kontrollü Nefes Alıp Verme */}
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Kontrollü Nefes Alıp Verme</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Kişinin stres seviyesini düşürmeye yardımcı olur.
                  </p>
                </div>

                {/* Bilinçli Nefes Egzersizleri */}
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Bilinçli Nefes Egzersizleri</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Kişinin zihnini sakinleştirmesine ve odaklanmasına yardımcı olabilir; hiperaktivite ve anksiyete semptomlarını azaltabilir.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Nefes Terapisi ve Stres Azaltma */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
              Nefes Terapisi ve Stres Azaltma
            </h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <p className="text-gray-700 leading-relaxed text-center mb-8">
                Nefes terapisi, uzun yıllardır kullanılan bir teknik olup, günümüzde de popülerliği artmaya devam etmektedir. Yoğun çalışma temposu, kişisel problemler, aile sorunları, sağlık sorunları gibi stres faktörlerinin azaltılmasına yardımcı olabilir. Bu terapi, kişinin içsel denge ve huzur bulmasına destek olur.
              </p>

              <div className="space-y-8">
                {/* Stres Azaltma Teknikleri */}
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Stresi Azaltma Teknikleri</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Vücudu rahatlatmak ve zihni sakinleştirmek için çeşitli teknikleri içerir. Bunlar arasında derin nefes alma, nefesi farkındalıkla kullanma ve meditasyon bulunmaktadır. Bu tekniklerin düzenli bir şekilde uygulanması, stresin azaltılmasına ve genel yaşam kalitesinin artmasına katkıda bulunabilir. Özellikle anksiyete anında derin nefes almak, sinir sistemini sakinleştirerek rahatlama sağlar ve anksiyete semptomlarını azaltabilir.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Nefes Terapisi Uygulama Alanları */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
              Nefes Terapisi Uygulama Alanları
            </h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <p className="text-gray-700 leading-relaxed text-center mb-8">
                Nefes terapisi, çeşitli zihinsel ve fiziksel sağlık sorunlarının tedavisinde yoğun olarak kullanılmaktadır.
              </p>

              <div className="space-y-8">
                {/* Zihinsel Sağlık Sorunları */}
                <div className="border-l-4 border-indigo-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Zihinsel Sağlık Sorunları</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Stres, anksiyete, depresyon, panik atak, post-travmatik stres bozukluğu.
                  </p>
                </div>

                {/* Fiziksel Sağlık Problemleri */}
                <div className="border-l-4 border-teal-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Fiziksel Sağlık Problemleri</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Migren, astım ve kronik ağrı gibi durumların tedavisinde de kullanılır.
                  </p>
                </div>

                {/* Fizik Tedavi */}
                <div className="border-l-4 border-pink-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Fizik Tedavi</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Sakatlanmış veya hasta insanların solunum işlevini iyileştirmeye yardımcı olabilir.
                  </p>
                </div>

                {/* Profesyonel Sporcular */}
                <div className="border-l-4 border-cyan-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Profesyonel Sporcular</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Fiziksel performanslarını artırmak için nefes terapisini kullanırlar.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Uygulama Şekli */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
              Uygulama Şekli
            </h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <p className="text-gray-700 leading-relaxed text-center mb-8">
                Nefes terapisi, bir terapist eşliğinde ya da bireysel olarak uygulanabilir. Terapist, kişinin ihtiyaçlarına ve durumuna göre özel nefes teknikleri ve egzersizleri belirler ve uygulama sürecini yönlendirir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
