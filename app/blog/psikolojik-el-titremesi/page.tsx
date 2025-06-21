export default function PsikolojikElTitremesiPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header - navbar'ın altında kalması için pt-20 eklendi */}
      <div className="bg-white shadow-sm border-b pt-20">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
            Psikolojik El Titremesi
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
              Psikolojik El Titremesi veya halk arasında bilinen adıyla "stres titremesi", stres, kaygı ve duygusal gerginlik gibi psikolojik faktörlerden kaynaklanan bir durumdur. Bu durumda, kişinin elleri istemsiz ve hızlı bir şekilde titrer. Genellikle geçici bir durum olup yoğun stres anlarıyla sınırlı kalır, ancak bazı durumlarda kronikleşebilir ve kişinin yaşam kalitesini olumsuz etkileyebilir.
            </p>
          </div>

          {/* Symptoms Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
              Belirtileri
            </h2>
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <p className="text-gray-700 leading-relaxed text-center mb-8">
                Psikolojik el titremesinin belirtileri şunları içerebilir:
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    Ellerde istemsiz ve hızlı titreme.
                  </p>
                </div>
                <div className="border-l-4 border-orange-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    Kaslarda gerginlik.
                  </p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    Sinirlilik ve huzursuzluk.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    Kontrol kaybı hissi.
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
                Psikolojik el titremesi genellikle çeşitli faktörlere bağlı olarak ortaya çıkar:
              </p>

              <div className="space-y-8">
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Psikolojik Faktörler</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Stres, kaygı, depresyon ve duygusal gerginlik gibi durumlar bu titremeyi tetikleyebilir. Özellikle yoğun stres altındaki kişilerde ortaya çıkma olasılığı daha yüksektir.
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Genetik Yatkınlık</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Ailede el titremesi olan bireylerde, psikolojik el titremesi riski daha yüksek olabilir.
                  </p>
                </div>
                <div className="border-l-4 border-indigo-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">İlaç Kullanımı</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Bazı ilaçların kullanımı da risk faktörleri arasında sayılabilir.
                  </p>
                </div>
                <div className="border-l-4 border-teal-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Yaş</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Genellikle genç yaşlarda başlar ve yaş ilerledikçe azalma gösterebilir.
                  </p>
                </div>
                <div className="border-l-4 border-cyan-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Cinsiyet</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Genellikle erkeklerde kadınlara göre daha sık görülür.
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
                Psikolojik el titremesini tedavi etmek için çeşitli yöntemler kullanılabilir:
              </p>

              <div className="space-y-8">
                <div className="border-l-4 border-pink-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Relaksasyon Teknikleri</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Stresi azaltmak ve vücutta rahatlama sağlamak için oldukça etkilidir. Derin nefes alma, meditasyon ve yoga gibi teknikler psikolojik el titremesini azaltmaya yardımcı olabilir.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Psikoterapi</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Psikolojik el titremesinin nedenlerini ve tetikleyicilerini anlamak için önemlidir. Terapi, kişinin stres kaynaklarıyla başa çıkmasına ve kaygı düzeyini azaltmasına yardımcı olabilir. Psikoterapistler, kişinin semptomlarını hafifletmek ve yaşam kalitesini artırmak için çeşitli terapötik teknikler kullanır. Genellikle belli bir süre devam eden düzenli seanslar şeklinde gerçekleşir.
                  </p>
                </div>
                <div className="border-l-4 border-violet-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">İlaç Tedavisi</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Bazı durumlarda semptomları hafifletmek için ilaç tedavisi önerilebilir. Bu ilaçlar kaygı veya stresi azaltmaya yardımcı olabilir, ancak her zaman gerekmeyebilir ve mutlaka bir doktora danışmak önemlidir.
                  </p>
                </div>
                <div className="border-l-4 border-amber-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Doğal Takviyeler</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Magnezyum, B vitamini, Ginkgo Biloba gibi takviyeler, sinir sistemini sakinleştirmeye ve titremeyi hafifletmeye yardımcı olabilir. Ancak bu takviyeleri kullanmadan önce bir uzmana danışmak önemlidir.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Diet and Nutrition Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
              Diyetin Rolü ve Beslenme Önerileri
            </h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <p className="text-gray-700 leading-relaxed text-center mb-8">
                Beslenmenin de psikolojik el titremesi yönetiminde önemli bir rolü vardır. Özellikle omega-3 yağ asitleri, B vitaminleri, magnezyum ve antioksidanlar gibi besinlerin tüketimi, sinir sistemini dengelemeye ve titremeyi azaltmaya yardımcı olabilir. Dengeli bir beslenme programı uygulamak ve sağlıklı gıdalar tüketmek önemlidir.
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-lime-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    Bol miktarda meyve ve sebze tüketin.
                  </p>
                </div>
                <div className="border-l-4 border-emerald-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    Tam tahıllı yiyeceklere öncelik verin.
                  </p>
                </div>
                <div className="border-l-4 border-sky-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    Protein açısından zengin gıdalar tüketin.
                  </p>
                </div>
                <div className="border-l-4 border-fuchsia-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    Şekerli ve işlenmiş gıdalardan uzak durun.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stress Management Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
              Stres Yönetimi ve Psikolojik El Titremesi
            </h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <p className="text-gray-700 leading-relaxed text-center mb-8">
                Stres yönetimi, psikolojik el titremesi sorunu yaşayan bireylerin bu durumu yönetmesinde önemli bir adımdır. Stresi azaltmak ve kontrol altına almak, el titremesinin sıklığını ve şiddetini azaltabilir. Meditasyon, derin nefes egzersizleri ve yoga gibi teknikler hem zihinsel hem de fiziksel rahatlama sağlayabilir. Günlük rutinlere egzersiz, uyku düzeni ve sağlıklı bir beslenme planı eklemek de stresi azaltmak için önemlidir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
