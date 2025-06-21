export default function PsikolojikHastaliklarPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header - navbar'ın altında kalması için pt-20 eklendi */}
      <div className="bg-white shadow-sm border-b pt-20">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
            Psikolojik Hastalıklar
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
              Psikolojik hastalıklar, bireyin düşünce, duygu ve davranışlarını etkileyen, işlevselliklerini ve yaşam kalitelerini olumsuz yönde etkileyen rahatsızlıklardır. Bu hastalıklar, kişinin ruh sağlığını olumsuz etkileyerek sosyal, mesleki ve kişisel yaşamını da olumsuz etkileyebilir.
            </p>
          </div>

          {/* Types and Symptoms Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
              Psikolojik Hastalıkların Türleri ve Belirtileri
            </h2>
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <p className="text-gray-700 leading-relaxed text-center mb-8">
                Farklı türlerde ve şiddetlerde psikolojik hastalıklar bulunmaktadır. Genel olarak, psikolojik hastalıkların belirtileri kişiden kişiye farklılık gösterebilir ve dikkatle gözlemlenmesi gereken durumlar içerir.
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    Uyku problemleri (uykusuzluk veya aşırı uyuma durumu).
                  </p>
                </div>
                <div className="border-l-4 border-orange-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    Yeme alışkanlıklarında değişiklik (aşırı yeme veya iştah kaybı).
                  </p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    Sürekli endişe ve kaygı.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    İş veya okul performansında düşüş.
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    Panik atak.
                  </p>
                </div>
                <div className="border-l-4 border-indigo-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    Toplumsal ilişkilerde zorlanma.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    Depresyon.
                  </p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed text-center mt-8">
                Yaygın olarak bilinen bazı psikolojik hastalıklar şunlardır:
              </p>

              <div className="space-y-4 mt-4">
                <div className="border-l-4 border-teal-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    Depresyon.
                  </p>
                </div>
                <div className="border-l-4 border-cyan-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    Anksiyete bozukluğu.
                  </p>
                </div>
                <div className="border-l-4 border-pink-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    Şizofreni.
                  </p>
                </div>
                <div className="border-l-4 border-amber-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    Bipolar bozukluk.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Causes Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
              Nedenleri
            </h2>
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <p className="text-gray-700 leading-relaxed text-center mb-8">
                Psikolojik hastalıkların nedenleri oldukça karmaşık ve çok yönlüdür. Genellikle, birden fazla faktörün bir araya gelmesi sonucu ortaya çıkarlar. Bu faktörlerin başında şunlar gelmektedir:
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-lime-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    Genetik yatkınlık.
                  </p>
                </div>
                <div className="border-l-4 border-emerald-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    Çevresel faktörler.
                  </p>
                </div>
                <div className="border-l-4 border-sky-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    Biyolojik etkenler.
                  </p>
                </div>
                <div className="border-l-4 border-fuchsia-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    Psikososyal etkenler.
                  </p>
                </div>
                <div className="border-l-4 border-violet-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    Fizyolojik etkenler.
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
                Psikolojik hastalıkların tanısı genellikle belirtiler, hastanın geçmişi ve yaşam koşulları gibi faktörler dikkate alınarak konulur. Bu tanı süreci genellikle psikologlar, psikiyatristler veya terapistler tarafından gerçekleştirilir.
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-yellow-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    Öncelikle, hastanın semptomları detaylı bir şekilde incelenir. Bu semptomlar depresyon, anksiyete, bipolar bozukluk veya travma sonrası stres bozukluğu gibi farklı psikolojik hastalıkların belirtileri olabilir.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    Klinik değerlendirme ve psikolojik testler uygulanır.
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    Kişinin belirtileri, geçmişi ve yaşam şartları göz önünde bulundurularak doğru bir teşhis konulur.
                  </p>
                </div>
                <div className="border-l-4 border-red-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    Elde edilen bilgiler ve yapılan gözlemler doğrultusunda bir teşhis konulur. Bu teşhis süreci, hastanın ne tür bir psikolojik bozuklukla mücadele ettiğini anlamak ve uygun bir tedavi planı geliştirmek için önemlidir.
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
                Psikolojik hastalıkların tedavisi, hastalığın türüne ve şiddetine bağlı olarak değişebilir. Genellikle, psikoterapi ve ilaç tedavisi bir arada kullanılarak hastalığın semptomları kontrol altına alınmaya çalışılır.
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-indigo-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    Psikoterapi: Kişinin durumuna ve ihtiyaçlarına göre belirlenen birçok yöntem kullanılabilir.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    İlaç tedavisi: Hastalığın semptomlarını hafifletmek için antidepresanlar, anksiyolitikler ve beta blokerler gibi farklı ilaçlar önerilebilir. Ancak ilaç tedavisi herkes için uygun olmayabilir ve mutlaka bir uzmana danışmak gerekmektedir.
                  </p>
                </div>
                <div className="border-l-4 border-pink-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    Destek grupları: Benzer deneyimlere sahip kişilerle bir araya gelerek destek bulmayı ve öğrenmeyi sağlar.
                  </p>
                </div>
                <div className="border-l-4 border-amber-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    Yaşam tarzı değişiklikleri.
                  </p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed text-center mt-8">
                Bazı durumlarda, hastalar hastaneye yatırılarak tedavi edilebilirken, bazı durumlarda ise klinik dışı ortamlarda tedavi süreci yürütülebilir. Tedavi sürecinde hastaların düzenli olarak kontrol edilmesi ve tedaviye uyum sağlamaları önemlidir. Psikolojik destek de hastaların tedavi sürecinde oldukça etkili olabilir.
              </p>
            </div>
          </div>

          {/* Prevention Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
              Önlenmesi
            </h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <p className="text-gray-700 leading-relaxed text-center mb-8">
                Psikolojik hastalıkların tamamen önlenmesi mümkün olmasa da, risk faktörlerini azaltmak ve sağlıklı yaşam tarzı alışkanlıkları geliştirmek, zihinsel ve duygusal sağlığın korunmasına yardımcı olabilir. Erken müdahale, destek ve bilinçlendirme de önleyici bir rol oynar. Toplumun da psikolojik sağlık konusunda farkındalık oluşturması, psikolojik rahatsızlıkların damgalanmasını engellemesi ve destekleyici bir çevre oluşturması bireylerin psikolojik sağlığını korumalarına yardımcı olabilir. Eğitim kurumları, iş yerleri ve kamu kurumları tarafından psikolojik sağlık konusunda destek ve danışmanlık hizmetlerinin sunulması da önemli bir adımdır.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
