export default function SaglikliIliskiPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header - navbar'ın altında kalması için pt-20 eklendi */}
      <div className="bg-white shadow-sm border-b pt-20">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
            Sağlıklı Bir İlişki
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
              Sağlıklı bir ilişki, bireylerin düşünce, duygu ve davranışlarını olumlu yönde etkileyen, karşılıklı güven, saygı ve anlayışa dayalı bir bağdır. Bu tür ilişkiler, yaşam kalitesini artırır ve bireylerin hem ruhsal hem de sosyal gelişimine katkıda bulunur.
            </p>
          </div>

          {/* Principles and Characteristics Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
              Sağlıklı Bir İlişkinin Temel Prensipleri ve Özellikleri
            </h2>
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    <strong>Karşılıklı Güven ve Saygı:</strong> İlişkilerin temel taşıdır. Güven duygusu, sağlıklı iletişimi ve etkili işbirliğini mümkün kılar. Taraflar birbirlerine güven duymalı ve saygı göstermelidir. Güven ve saygı eksik olduğunda, ilişki zarar görür ve çatışmalar ortaya çıkabilir.
                  </p>
                </div>
                <div className="border-l-4 border-orange-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    <strong>Açık ve Dürüst İletişim:</strong> İlişkilerde her iki tarafın da görüşlerini ve duygularını özgürce ifade etmelerine olanak tanır. Karşılıklı olarak doğruluk, açıklık ve şeffaflık içerir, bu da güven ve saygı sağlar.
                  </p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    <strong>Ortak Değerler ve Hedefler:</strong> İlişkideki bireylerin uyumlu bir şekilde bir arada olmalarını sağlar. Ortak amaçları başarmak için birlikte çalışmak, ilişkinin güçlenmesini sağlar.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    <strong>Destekleyici ve Empatik Davranışlar:</strong> Karşılıklı güvenin ve saygının gelişmesine yardımcı olur. Empati, karşı tarafın duygularını anlamak ve ona destek olmak anlamına gelir.
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    <strong>Kişisel Alanın Saygı Görmesi:</strong> Bireyler arasında daha sağlıklı ilişkilerin oluşmasına ve toplumsal uyumun sağlanmasına katkı sağlar.
                  </p>
                </div>
                <div className="border-l-4 border-indigo-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    <strong>Paylaşılan Sorumluluklar ve Adalet:</strong> İlişkilerde olumlu etkileşimlerin gelişmesine ve işbirliğinin sağlanmasına yardımcı olur. Adalet, herkesin eşit haklara ve fırsatlara sahip olduğu, haksızlık yapılmayan bir ortamın sağlanması demektir.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    <strong>Eşitlik:</strong> İlişkide her iki taraf da eşit olarak değer görme ve karar alma konusunda söz sahibi olmalıdır.
                  </p>
                </div>
                <div className="border-l-4 border-pink-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    <strong>Bağımsızlık:</strong> Sağlıklı ilişkilerde bireylerin bağımsızlıklarına da önem verilmelidir.
                  </p>
                </div>
                <div className="border-l-4 border-amber-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    <strong>Paylaşım:</strong> Duyguların ve deneyimlerin paylaşılması, ilişkinin derinleşmesine yardımcı olur.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Improving Relationship Quality Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
              İlişki Kalitesini Artırma Yolları (Duygusal Banka Hesabı Metaforu)
            </h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <p className="text-gray-700 leading-relaxed text-center mb-8">
                İlişkinin kalitesini artırmak için duygusal banka hesabı metaforu kullanılabilir. Bu hesap, bir ilişkide yapılan güven, sevgi ve saygı dolu davranışlarla biriktirilen bir hesaptır. İlişkinin kalitesini artırmak için şu adımlar atılabilir:
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-teal-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    <strong>Anlayış ve Empati Göstermek:</strong> Partnerin duygusal ihtiyaçlarını anlamak ve empati kurmak, duygusal banka hesabını güçlendiren önemli adımlardır.
                  </p>
                </div>
                <div className="border-l-4 border-cyan-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    <strong>İletişimi Güçlendirmek:</strong> Açık ve dürüst bir şekilde iletişim kurmak, duygusal banka hesabını güçlendirir. İletişim sırasında saygılı olmak ve karşı tarafın duygularını dinlemek önemlidir.
                  </p>
                </div>
                <div className="border-l-4 border-lime-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    <strong>Eleştiriden Kaçınmak:</strong> Partneri eleştirmek yerine olumlu geri bildirimlerde bulunmak, destekleyici bir yaklaşım sergilemek ilişkinin olumlu enerjisini artırır.
                  </p>
                </div>
                <div className="border-l-4 border-emerald-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    <strong>Birlikte Zaman Geçirmek:</strong> Kaliteli zaman geçirmek, duygusal bağı güçlendirir. Keyifli aktiviteler yapmak, anılar biriktirmek ve karşılıklı ilgi göstermek duygusal banka hesabını dolduran değerlidir.
                  </p>
                </div>
                <div className="border-l-4 border-sky-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    <strong>Güvenli Bir Alan Oluşturmak:</strong> Her iki tarafın da duygularını ve düşüncelerini özgürce paylaşmasını sağlamak, duygusal banka hesabını doldurmanın bir yoludur. Eşitlik, saygı ve güven ortamı ilişkinin temelidir.
                  </p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed text-center mt-8">
                Sağlıklı bir ilişki sürdürmek için duygusal ihtiyaçların belirlenmesi ve karşılanması, düzenli olarak bu "duygusal banka hesabına" yatırım yapılması gerekmektedir. Olumsuz etkileşimler ("para çekme") azaltılmalı, olumlu etkileşimler ("yatırım") artırılmalıdır.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
