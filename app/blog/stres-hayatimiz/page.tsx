export default function StresPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header - navbar'ın altında kalması için pt-20 eklendi */}
      <div className="bg-white shadow-sm border-b pt-20">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
            Stres
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
              Stres, günlük yaşamda karşılaşılan zorluklarla başa çıkma sürecinde ortaya çıkan bir tepkidir. Vücudun tehlikeli durumlara karşı verdiği bir savaş mekanizmasıdır ve aslında bizi korumayı amaçlar. Ancak günümüzde yaşanan yoğun tempolu ve rekabetin arttığı ortamlarda stres, sağlık üzerinde olumsuz etkilere neden olabilmektedir.
            </p>
          </div>

          {/* Definition Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
              Stresin Tanımı
            </h2>
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <p className="text-gray-700 leading-relaxed text-center">
                Stres, iş hayatındaki yoğun çalışma temposu, ilişki problemleri, maddi sıkıntılar veya kişisel hedeflere ulaşma kaygısı gibi birçok farklı durumda ortaya çıkabilir. Stresin tanımı, kişinin çevresindeki yaşam koşullarına uyum sağlamak için ortaya çıkan fiziksel, zihinsel ve duygusal tepkilerin bir kombinasyonudur.
              </p>
            </div>
          </div>

          {/* Effects Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
              Stresin Etkileri
            </h2>
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <p className="text-gray-700 leading-relaxed text-center mb-8">
                Sürekli stres altında olmak, vücut ve zihin üzerinde ciddi etkilere neden olabilir. Stresin etkileri, hem fiziksel hem de zihinsel sağlık üzerinde büyük bir etkiye sahiptir.
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">Sağlık Üzerindeki Etkisi</h3>
                  <div className="space-y-2">
                    <p className="text-gray-700 leading-relaxed text-center">
                      Sürekli stres altında olmak, bağışıklık sisteminin zayıflamasına neden olabilir, bu da vücudu hastalıklara karşı savunmasız hale getirir.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-center">
                      Stresin kalp sağlığı üzerinde de olumsuz etkileri vardır; yüksek stres seviyeleri, yüksek tansiyon ve kalp hastalıkları riskini artırabilir.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-center">
                      Stres, uyku sorunları, sindirim problemleri, baş ağrısı ve yorgunluk gibi çeşitli sağlık sorunlarına yol açabilir.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-center">
                      Kronik stres, depresyon gibi ciddi sağlık sorunlarına neden olabilir.
                    </p>
                  </div>
                </div>

                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">Zihinsel Sağlık Üzerindeki Etkisi</h3>
                  <div className="space-y-2">
                    <p className="text-gray-700 leading-relaxed text-center">
                      Sürekli stres altında olmak, anksiyete ve depresyon gibi zihinsel sağlık sorunlarına zemin hazırlayabilir.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-center">
                      Stresin odaklanma ve karar verme becerilerini de olumsuz etkilediği bilinmektedir. İş performansında düşüş, unutkanlık ve planlama güçlüğü gibi problemler görülebilir.
                    </p>
                  </div>
                </div>

                <div className="border-l-4 border-yellow-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">İlişkiler Üzerindeki Etkisi</h3>
                  <div className="space-y-2">
                    <p className="text-gray-700 leading-relaxed text-center">
                      Stres, ilişkiler üzerinde olumsuz etkilere sahip olabilir.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-center">
                      Yoğun stres altında olan bireyler, ilişkilerinde daha fazla gerilim ve anlaşmazlık yaşayabilirler.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-center">
                      Stres altındaki bireyler, partnerleriyle iletişimde zorluk yaşayabilir ve olumsuz duygularını daha fazla dışa vurabilirler.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-center">
                      Stresin ilişkiler üzerindeki etkisi, zamanla güven sorunlarına ve ilişkide kopukluk hissine neden olabilir.
                    </p>
                  </div>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">İş Performansı Üzerindeki Etkisi</h3>
                  <div className="space-y-2">
                    <p className="text-gray-700 leading-relaxed text-center">
                      İş stresi, odaklanmada zorluk çekmeye, karar verme ve problem çözme becerilerinin azalmasına, hatta fiziksel olarak yorgun hissetmeye neden olabilir.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-center">
                      Uzun vadede iş yerinde hatalara ve dikkatsizliklere yol açabilir.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-center">
                      Stres altında çalışan kişilerin işe olan bağlılıkları da azalabilir; motivasyon eksikliği, duygusal tükenme ve iş memnuniyetsizliği gibi sonuçlar iş performansını olumsuz etkileyebilir.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Coping Methods and Treatment Options Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
              Başa Çıkma Yöntemleri ve Tedavi Seçenekleri
            </h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <p className="text-gray-700 leading-relaxed text-center mb-8">
                Stresle başa çıkmak için birçok etkili ipucu ve yöntem bulunmaktadır:
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    <strong>Fiziksel Aktiviteler:</strong> Düzenli olarak egzersiz yapmak, yürüyüşe çıkmak veya yoga gibi aktiviteler stresi azaltmada oldukça etkili olabilir.
                  </p>
                </div>
                <div className="border-l-4 border-indigo-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    <strong>Zihinsel Aktiviteler ve Rahatlama Teknikleri:</strong> Meditasyon ve nefes egzersizleri yapmak stresle başa çıkmada yardımcı olabilir. Gevşeme tekniklerini öğrenmek ve uygulamak, meditasyon, yoga veya masaj gibi aktiviteler stresi azaltmaya yardımcı olabilir.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    <strong>Sağlıklı Yaşam Tarzı:</strong> Sağlıklı ve dengeli beslenmek, vücudunuzun ihtiyaç duyduğu besin maddelerini almasını sağlar ve stresle daha iyi başa çıkmanıza yardımcı olur. Düzenli uyku almak, vücudunuzu dinlendirmenin ve stresi azaltmanın önemli bir yoludur.
                  </p>
                </div>
                <div className="border-l-4 border-pink-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    <strong>Stres Yönetimi:</strong> Stresi yönetmek, anksiyeteyi kontrol altına almanın önemli bir unsurudur. Stresi azaltan günlük rutinler arasında düzenli egzersiz, meditasyon, yoga, sağlıklı beslenme ve yeterli uyku yer alır.
                  </p>
                </div>
                <div className="border-l-4 border-amber-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    <strong>Sosyal Destek:</strong> Sosyal destek sağlamak, stresle başa çıkmada önemlidir. Destek grupları da etkili bir yöntemdir.
                  </p>
                </div>
                <div className="border-l-4 border-teal-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    <strong>Profesyonel Yardım:</strong> Bir psikolog veya terapistten yardım almak, stresle başa çıkmak için etkili bir yoldur. Tedavi planı, hastanın durumuna ve ihtiyaçlarına göre belirlenir ve psikoterapi ve ilaç tedavisi gibi yöntemleri içerebilir.
                  </p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed text-center mt-8">
                Stresle başa çıkmak, herkesin hakkıdır ve bu konuda bilinçli adımlar atmak önemlidir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
