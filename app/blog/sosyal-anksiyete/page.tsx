export default function SosyalAnksiyetePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header - navbar'ın altında kalması için pt-20 eklendi */}
      <div className="bg-white shadow-sm border-b pt-20">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
            Sosyal Anksiyete (Sosyal Kaygı Bozukluğu)
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
              Sosyal anksiyete, bireyin sosyal ortamlarda yoğun bir şekilde kaygı, endişe veya rahatsızlık hissetmesiyle karakterize edilen bir psikolojik rahatsızlıktır. Bu durum, kişinin günlük yaşamındaki işlerini, ilişkilerini ve genel yaşam kalitesini olumsuz etkileyebilir. Beyin, sosyal etkileşimleri bir tehdit olarak algılayabilir ve bu da vücudun bir dizi fizyolojik tepki vermesine neden olabilir.
            </p>
          </div>

          {/* Symptoms Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
              Belirtileri ve Semptomları
            </h2>
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <p className="text-gray-700 leading-relaxed text-center mb-8">
                Sosyal anksiyetenin belirtileri her bireyde farklılık gösterebilse de genellikle ortak noktalara sahiptir.
              </p>
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    <strong>Yoğun Utanma ve Rezil Olma Hissi:</strong> Kişi, sosyal etkileşimlerde sürekli olarak başkaları tarafından eleştirileceği veya olumsuz bir şekilde değerlendirileceği korkusuyla karşı karşıya kalır.
                  </p>
                </div>
                <div className="border-l-4 border-orange-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    <strong>Fiziksel Belirtiler:</strong> Kalp çarpıntısı, terleme, titreme, mide bulantısı, baş dönmesi ve nefes darlığı gibi semptomlar arasında yer alır.
                  </p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    <strong>Diğer Belirtiler:</strong> Sürekli endişe ve korku hissi, kontrol kaybı korkusu, gerginlik ve huzursuzluk, uyku problemleri, konsantrasyon zorluğu ve sinirlilik de anksiyetenin genel belirtileri arasındadır.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Causes and Risk Factors Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
              Nedenleri ve Risk Faktörleri
            </h2>
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <p className="text-gray-700 leading-relaxed text-center mb-8">
                Sosyal anksiyetenin ortaya çıkmasında çeşitli nedenler ve risk faktörleri bulunmaktadır.
              </p>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    <strong>Genetik Faktörler:</strong> Ailede anksiyete bozukluğu öyküsü olan bireylerde sosyal anksiyete daha yaygın olarak görülür.
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    <strong>Çevresel Etmenler:</strong> Çocukluk döneminde yaşanan olumsuz sosyal deneyimler, istismar veya travmatik olaylar sosyal anksiyetenin ortaya çıkmasına katkıda bulunabilir.
                  </p>
                </div>
                <div className="border-l-4 border-indigo-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    <strong>Beyindeki Kimyasal Dengesizlikler:</strong> Beyindeki kimyasal dengesizlikler de sosyal anksiyetenin nedenleri arasında yer alabilir.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    <strong>Kişilik Özellikleri:</strong> Mükemmeliyetçilik, düşük özgüven, obsesif düşünceler veya aşırı endişe eğilimi gibi bazı kişilik özellikleri anksiyeteyi tetikleyebilir.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Effects on Daily Life Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
              Günlük Yaşam Üzerindeki Etkileri
            </h2>
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <p className="text-gray-700 leading-relaxed text-center mb-8">
                Sosyal anksiyete, bireylerin genel yaşam kalitesini olumsuz etkileyebilir.
              </p>
              <div className="space-y-4">
                <div className="border-l-4 border-pink-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    <strong>Sosyal Etkileşimlerin Sınırlanması:</strong> Sosyal anksiyetesi olan kişiler genellikle toplum içinde tanımadıklarından çekinir, yabancılarla konuşmaktan kaçınır veya topluluk önünde konuşma yapmaktan korkarlar.
                  </p>
                </div>
                <div className="border-l-4 border-amber-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    <strong>Genel Yaşam Kalitesinin Düşmesi:</strong> Sürekli bir endişe durumunda yaşamak enerji seviyelerini azaltabilir, uyku düzenlerini etkileyebilir ve hatta depresyon gibi diğer ruh sağlığı sorunlarına yol açabilir.
                  </p>
                </div>
                <div className="border-l-4 border-teal-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    <strong>İçe Kapanıklık ve İzolasyon:</strong> Kişi, toplum içinde kendini rahat hissetmeme ve sürekli eleştirilere maruz kalma korkusu taşıyabilir, bu da sosyal etkileşimlerden kaçınmaya ve izole olmaya yol açabilir.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Coping Methods and Treatment Options Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
              Başa Çıkma Yöntemleri ve Tedavi Seçenekleri
            </h2>
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <p className="text-gray-700 leading-relaxed text-center mb-8">
                Anksiyeteyle başa çıkmak için birçok etkili ipucu ve yöntem mevcuttur.
              </p>
              <div className="space-y-4">
                <div className="border-l-4 border-cyan-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    <strong>Kendini Bilinçli Bir Şekilde Kabul Etme:</strong> Sosyal anksiyeteyle başa çıkmak için ilk adım, kendini kabul etmektir.
                  </p>
                </div>
                <div className="border-l-4 border-lime-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    <strong>Derin Nefes Alma ve Egzersizler:</strong> Stres ve anksiyete anında derin nefes almak sinir sistemini sakinleştirir ve rahatlama sağlar.
                  </p>
                </div>
                <div className="border-l-4 border-emerald-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    <strong>Stres Yönetimi:</strong> Gevşeme tekniklerini öğrenmek ve uygulamak, meditasyon, yoga veya masaj gibi aktiviteler stresi azaltmaya yardımcı olabilir.
                  </p>
                </div>
                <div className="border-l-4 border-sky-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    <strong>Küçük Hedefler Belirleme:</strong> Kendinize küçük hedefler belirlemek, kendinize güveninizi artırır ve sosyal anksiyeteyle daha iyi başa çıkmanıza yardımcı olur.
                  </p>
                </div>
                <div className="border-l-4 border-fuchsia-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    <strong>Profesyonel Yardım:</strong> Psikoterapi, anksiyete belirtilerini azaltmak ve başa çıkmayı öğrenmek için bir terapistle görüşmeyi içerir.
                  </p>
                </div>
                <div className="border-l-4 border-violet-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    <strong>İlaç Tedavisi:</strong> Bazı durumlarda antidepresanlar, anksiyolitikler ve beta blokerler gibi ilaçlar önerilebilir.
                  </p>
                </div>
                <div className="border-l-4 border-pink-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    <strong>Sosyal Beceri Eğitimi:</strong> Sosyal anksiyeteyi azaltmak için kişinin sosyal becerilerini geliştirmesi önemlidir.
                  </p>
                </div>
                <div className="border-l-4 border-amber-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    <strong>Destek Grupları:</strong> Benzer sorunlarla mücadele eden kişilerin bir araya gelip deneyimlerini paylaştığı ve birbirlerine destek olduğu yerlerdir.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Common Misunderstandings and Myths Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
              Yaygın Yanlış Anlaşılmalar ve Mitler
            </h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <p className="text-gray-700 leading-relaxed text-center mb-8">
                Sosyal anksiyete hakkında yaygın olan bazı yanlış anlamalar ve mitler şunlardır:
              </p>
              <div className="space-y-4">
                <div className="border-l-4 border-teal-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    <strong>Mit 1:</strong> Sosyal anksiyete sadece utangaç insanlarda görülür. Bu bilgi yanlıştır. Sosyal anksiyete, herhangi bir kişilik tipiyle ilişkili olabilir.
                  </p>
                </div>
                <div className="border-l-4 border-cyan-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    <strong>Mit 2:</strong> Sosyal anksiyete, sadece yeni insanlarla tanışırken ortaya çıkar. Bunu düşünmek yanlıştır. Sosyal anksiyete, herhangi bir sosyal etkileşimde ortaya çıkabilir.
                  </p>
                </div>
                <div className="border-l-4 border-lime-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    <strong>Mit 3:</strong> Sosyal anksiyete sadece gençlerde görülür. Bu doğru değildir. Sosyal anksiyete, her yaş grubunda görülebilir.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
