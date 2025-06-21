export default function PsikozPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header - navbar'ın altında kalması için pt-20 eklendi */}
      <div className="bg-white shadow-sm border-b pt-20">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
            Psikoz
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
              Psikoz, gerçeklik algısında önemli bir bozulmayı ifade eden ve kişinin gerçek olmayan düşüncelere ve yanılsamalara inanmasına neden olan bir zihinsel sağlık durumudur. Bu durum, kişinin normalde yaşadığı sosyal ve işlevsel sorunlara yol açabilir.
            </p>
          </div>

          {/* Symptoms Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
              Belirtileri
            </h2>
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <p className="text-gray-700 leading-relaxed text-center mb-8">
                Psikozun belirtileri kişiden kişiye farklılık gösterebilir ve birçok farklı semptomla kendini gösterir. Başlıca belirtileri şunlardır:
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    Gerçek dışı düşünceler (sanrılar): Kişinin gerçek olmayan inançlara sahip olmasıdır.
                  </p>
                </div>
                <div className="border-l-4 border-orange-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    Gerçek olmayan şeylerin görülmesi veya hissedilmesi (halüsinasyonlar): Örneğin, sesler duyma veya görsel imgeler görme.
                  </p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    Konuşma ve düşünce bozuklukları: Sözcüklerin yanlış anlaşılması veya düşüncelerin mantıksal bir düzende olmaması.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    Davranış değişiklikleri: Kişinin davranışlarının gerçeklikten kopuk olması ve başkalarıyla ilişkilerinin etkilenmesi.
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    Uyku bozuklukları.
                  </p>
                </div>
                <div className="border-l-4 border-indigo-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    Duygu durumunda dalgalanmalar.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    Sosyal çekilme.
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
                Psikozun nedenleri tam olarak bilinmemekle birlikte, genellikle birçok faktörün bir araya gelmesi sonucu ortaya çıktığı düşünülmektedir. Bu faktörler şunları içerir:
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-lime-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    Genetik yatkınlık: Ailede psikotik bozukluğu olan bireylerin, bu bozukluğa yakalanma olasılığı daha yüksek olabilir.
                  </p>
                </div>
                <div className="border-l-4 border-emerald-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    Beyin kimyasındaki dengesizlikler: Özellikle dopamin sistemindeki anormallikler, psikotik semptomların ortaya çıkmasında rol oynar.
                  </p>
                </div>
                <div className="border-l-4 border-sky-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    Çevresel faktörler: Travmatik yaşantılar, stres, çocukluk döneminde yaşanan istismar veya ihmal gibi olumsuz yaşam olayları psikoz riskini artırabilir. Ancak, çevresel etkilerin tek başına psikozu tetiklemediği, genetik yatkınlıkla etkileşime girmesi gerektiği belirtilmiştir.
                  </p>
                </div>
                <div className="border-l-4 border-fuchsia-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    Hormonal değişiklikler.
                  </p>
                </div>
                <div className="border-l-4 border-violet-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    Madde bağımlılığı.
                  </p>
                </div>
                <div className="border-l-4 border-pink-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    Bazı tıbbi durumlar (örneğin, tiroit hastalıkları) ve ilaçların yan etkileri.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Diagnosis Process Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
              Tanı Süreci
            </h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <p className="text-gray-700 leading-relaxed text-center mb-8">
                Psikolojik hastalıkların tanısı genellikle belirtiler, hastanın geçmişi ve yaşam koşulları gibi faktörler dikkate alınarak konulur. Psikotik bozuklukların tanısı, bireyin gerçeklikten kopmasına neden olabilen ciddi zihinsel sağlık sorunları olduğu için, semptomlarının teşhisi ve değerlendirilmesi için birden fazla yöntem kullanılır. Bu tanı süreci genellikle psikologlar, psikiyatristler veya terapistler tarafından gerçekleştirilir.
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-amber-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    Öncelikle, hastanın semptomları detaylı bir şekilde incelenir.
                  </p>
                </div>
                <div className="border-l-4 border-teal-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    Klinik değerlendirme ve psikolojik testler uygulanabilir.
                  </p>
                </div>
                <div className="border-l-4 border-cyan-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    Kişinin belirtileri, geçmişi ve yaşam şartları göz önünde bulundurularak doğru bir teşhis konulur.
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    Elde edilen bilgiler ve yapılan gözlemler doğrultusunda bir teşhis konulur. Bu süreçte semptomların ne kadar süredir devam ettiği, şiddeti ve günlük yaşam üzerindeki etkisi gibi faktörler dikkate alınır.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Treatment Methods Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
              Tedavi Yöntemleri
            </h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <p className="text-gray-700 leading-relaxed text-center mb-8">
                Psikoz tedavisinde kullanılan yöntemler, psikotik bozuklukların semptomlarının hafifletilmesini ve kişinin normal bir şekilde işlev görmesini sağlamayı amaçlar. Tedavi, hastalığın türüne ve şiddetine bağlı olarak değişebilir. Genellikle, psikoterapi ve ilaç tedavisi bir arada kullanılarak hastalığın semptomları kontrol altına alınmaya çalışılır.
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-indigo-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    İlaç Tedavisi: Antipsikotik ilaçlar, beyindeki dopamin reseptörlerine etki ederek semptomların şiddetini azaltır ve düzelmeyi sağlar. Bu ilaçlar, algısal bozuklukları, sanrıları ve halüsinasyonları kontrol altına alabilir; ayrıca manik ve depresif semptomları da hafifletebilir. Tipik ve atipik antipsikotikler gibi farklı türleri bulunur ve mutlaka bir uzmana danışarak kullanılmalıdır.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    Psikoterapi: Kişinin düşüncelerini, duygularını ve davranışlarını anlamasına yardımcı olan bir terapi biçimidir. Bireysel, grup veya aile terapisi şeklinde uygulanabilir. Psikoterapi, semptomlarla başa çıkmak için daha etkili stratejiler geliştirmeye yardımcı olur. Ayrıca psikolojik destek de tedavi sürecinde oldukça etkili olabilir.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Effects on Family and Social Life Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
              Aile ve Sosyal Yaşam Üzerindeki Etkileri
            </h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <p className="text-gray-700 leading-relaxed text-center mb-8">
                Psikozun etkileri sadece bireyin kendisini değil, aynı zamanda aile ve sosyal çevresini de etkiler. Bu durum, hem hastanın hem de yakınlarının yaşam kalitesini olumsuz yönde etkileyebilir.
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-pink-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Aile İlişkilerinde Etkileri</h3>
                  <div className="space-y-2">
                    <p className="text-gray-700 leading-relaxed text-center">
                      Stres: Psikoz tanısı alan bir bireyin yakınları büyük bir stres altına girebilir.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-center">
                      İletişim Sorunları: Psikotik belirtiler gösteren bir birey, doğru bir şekilde iletişim kurmakta zorluk çekebilir, bu da aile üyeleri arasında anlayış ve iletişim sorunlarına yol açabilir.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-center">
                      Bakım Yükü: Hastanın bakımı, aile üyelerinin yaşamını ve sosyal aktivitelerini sınırlayabilir.
                    </p>
                  </div>
                </div>
                <div className="border-l-4 border-amber-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Sosyal Yaşam Üzerindeki Etkileri</h3>
                  <div className="space-y-2">
                    <p className="text-gray-700 leading-relaxed text-center">
                      İzolasyon: Hastalar, sosyal çevrelerinden uzaklaşabilir ve kendilerini izole hissedebilirler.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-center">
                      İş Performansında Azalma: Psikoz belirtileri, hastanın iş hayatında başarı ve verimlilik düşüklüğüne yol açabilir.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-center">
                      İlişki Problemleri: Hastaların belirtileri, sağlıklı ilişkiler kurma ve sürdürme konusunda zorluklar yaşamalarına neden olabilir.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed text-center mt-8">
                Psikozla başa çıkma yöntemleri arasında psikolojik yardım ve terapi gerekebilir. Aile terapisi, destek grupları ve rehabilitasyon programları gibi kaynaklar, hem hastaların hem de yakınlarının bu süreçte başa çıkmasına yardımcı olabilir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
