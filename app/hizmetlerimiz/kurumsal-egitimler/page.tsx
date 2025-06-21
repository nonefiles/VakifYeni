'use client';

export default function KurumsalPsikolojikDanismanlikPage() {
  return (
    <section className="bg-white text-gray-800 py-20 px-4 md:px-8 text-center">
      <div className="max-w-4xl mx-auto">
        <header className="mb-16 text-center">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            Kurumsal Psikolojik Danışmanlık
          </h1>
          <p className="text-lg text-center text-gray-600 max-w-2xl mx-auto">
            Şirketlerin çalışanlarının psikolojik sağlığını ve refahını geliştirmek amacıyla uygulanan profesyonel hizmet
          </p>
        </header>

        <div className="rounded-xl overflow-hidden shadow-lg mb-12 bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center h-[300px]">
          <img 
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
            alt="Kurumsal psikolojik danışmanlık - ofiste çalışan mutlu ekip"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="prose max-w-none text-center">
          {/* Giriş */}
          <div className="mb-12">
            <p className="text-lg leading-relaxed mb-6 text-center">
              Kurumsal psikolojik danışmanlık, şirketlerin çalışanlarının psikolojik sağlığını ve refahını geliştirmek amacıyla uygulanan bir hizmettir. Bu danışmanlık hizmeti, iş yerindeki stres, motivasyon eksikliği, iletişim problemleri gibi sorunları çözmek için kullanılan birçok tekniği içermektedir. Kurumsal psikolojik danışmanlık, işletmeler için son derece önemlidir çünkü çalışanların psikolojik sağlığını iyileştirerek verimliliği artırır.
            </p>
          </div>

          {/* Kurumsal Psikolojik Danışmanlık Nedir? */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 text-center">Kurumsal Psikolojik Danışmanlık Nedir?</h2>
            <p className="mb-4 leading-relaxed text-center">
              Kurumsal psikolojik danışmanlık, bir işyerindeki çalışanların psikolojik ve duygusal ihtiyaçlarını karşılamak amacıyla sunulan bir hizmettir. Bu danışmanlık hizmeti, işyerindeki stres, motivasyon, iletişim problemleri gibi konuları ele alır ve çalışanların üzerinde olumsuz etkiler bırakabilecek durumları önlemeye çalışır.
            </p>
            <p className="mb-4 leading-relaxed text-center">
              Bir kurumsal psikolojik danışman, çalışanların zihinsel sağlığını ve iş performansını iyileştirmek için çeşitli yöntemler ve teknikler kullanır. Danışman, bireysel veya grup seansları düzenleyebilir, stres yönetimi teknikleri, iletişim becerileri veya işyerindeki değişikliklere uyum stratejileri gibi konuları ele alabilir.
            </p>
            <p className="leading-relaxed text-center">
              Kurumsal psikolojik danışmanlık, iş verimliliğini artırmaya, çalışanların memnuniyetini sağlamaya ve işyerinde sağlıklı bir çalışma ortamı oluşturmaya yardımcı olur. Çalışanların psikolojik ihtiyaçlarının karşılanması, onların işe olan motivasyonunu artırır ve şirketin başarısını etkileyebilir.
            </p>
          </div>

          {/* Kullanılan Teknikler */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 text-center">Kurumsal Psikolojik Danışmanlıkta Kullanılan Teknikler</h2>
            <p className="mb-6 leading-relaxed text-center">
              Kurumsal psikolojik danışmanlıkta farklı yöntemler ve teknikler kullanılmaktadır. Bunlar arasında:
            </p>
            <div className="max-w-md mx-auto mb-6">
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
                  <span className="text-left">Zihinsel sağlık değerlendirmeleri yapmak</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
                  <span className="text-left">Stres yönetimi teknikleri öğretmek</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
                  <span className="text-left">İletişim becerilerini geliştirmeye yönelik çalışmalar yapmak</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4 text-center">Temel Teknikler</h3>
              <div className="grid gap-4">
                <div className="border-l-4 border-blue-500 pl-4 text-center">
                  <h4 className="font-semibold">Olumlu Düşünme</h4>
                  <p className="text-gray-600">Çalışanları olumlu düşünmeye teşvik eder ve olumsuz düşünceleri değiştirmek için stratejiler sunar.</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4 text-center">
                  <h4 className="font-semibold">Stres Yönetimi</h4>
                  <p className="text-gray-600">Çalışanlara stresle başa çıkma teknikleri öğretilir ve başarılı bir şekilde stresi yönetmeleri sağlanır.</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4 text-center">
                  <h4 className="font-semibold">İşyeri İletişimi</h4>
                  <p className="text-gray-600">Çalışanların arasındaki iletişimi geliştirir ve işyerindeki iletişim problemlerini çözmeye yardımcı olur.</p>
                </div>
              </div>
            </div>

            <div className="text-center mb-8">
              <a href="/iletisim" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                BİZE ULAŞIN
              </a>
            </div>
          </div>

          {/* Önemi */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 text-center">Kurumsal Psikolojik Danışmanlığın Önemi</h2>
            <p className="mb-4 leading-relaxed text-center">
              Kurumsal psikolojik danışmanlık, bir şirketin çalışanlarının psikolojik sağlığını desteklemek ve iş performansını artırmak amacıyla kullanılan bir hizmettir. İş dünyasında rekabetin artmasıyla birlikte şirketlerin çalışanlarının psikolojik ihtiyaçlarını göz ardı etmemeleri önem kazanmıştır. Çünkü çalışanların psikolojik sağlığı, sağlıklı bir çalışma ortamı ve verimli bir iş gücü yaratmanın temel taşlarından biridir.
            </p>
            <p className="mb-6 leading-relaxed text-center">
              Kurumsal psikolojik danışmanlığın önemi oldukça büyüktür. İyi bir iş performansı için çalışanların psikolojik sağlıklarının iyilik halinde olması gerekmektedir. Çalışanların iş stresiyle baş etme becerilerini geliştirmeleri, duygusal ve zihinsel olarak güçlü olmaları, işyerindeki ilişkilerini sağlıklı bir şekilde yönetebilmeleri ve motivasyonlarını koruyabilmeleri, kurumsal psikolojik danışmanlık kapsamında çalışanların hedeflenen noktalara ulaşmasını sağlayabilir.
            </p>
          </div>

          {/* Süreç */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 text-center">Kurumsal Psikolojik Danışmanlık Süreci</h2>
            <p className="mb-6 leading-relaxed text-center">
              Kurumsal psikolojik danışmanlık süreci, şirketlerin çalışanlarının psikolojik sağlığını iyileştirmek ve iş performanslarını artırmak amacıyla başvurdukları bir hizmettir. Bu süreç, bireysel ve kurumsal düzeyde çeşitli aşamalardan oluşur ve uzman bir psikolog tarafından yürütülür.
            </p>

            <div className="grid gap-6 mb-8 max-w-3xl mx-auto">
              <div className="bg-blue-50 rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold mb-3 text-blue-800">1. Tanışma ve İhtiyaç Analizi</h3>
                <p className="text-gray-700">İlk olarak, danışman ve şirket yetkilileri arasında bir tanışma ve ihtiyaç analizi süreci gerçekleştirilir. Bu aşamada, şirketin mevcut durumu ve ihtiyaçları hakkında bilgi toplanır ve danışmanlık hedefleri belirlenir.</p>
              </div>
              <div className="bg-green-50 rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold mb-3 text-green-800">2. Planlama ve Tasarım</h3>
                <p className="text-gray-700">İkinci aşamada, danışmanlık sürecinin detaylı bir planlaması yapılır. Bu aşamada, hangi yöntemlerin kullanılacağı, hangi eğitimlerin verileceği ve sürecin zaman çizelgesi belirlenir.</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold mb-3 text-purple-800">3. Uygulama ve Değerlendirme</h3>
                <p className="text-gray-700">Üçüncü aşama, planlama ve tasarımın uygulanması ve sürecin değerlendirilmesidir. Burada, danışmanlık hedefleri doğrultusunda çeşitli faaliyetler gerçekleştirilir ve sürecin etkisi değerlendirilir.</p>
              </div>
            </div>
          </div>

          {/* Kullanılan Yöntemler */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 text-center">Danışmanlıkta Kullanılan Yöntemler</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
              <div className="bg-white border rounded-lg p-6 shadow-sm text-center">
                <h3 className="text-lg font-semibold mb-3 text-blue-600">Bireysel Koçluk</h3>
                <p className="text-gray-600 text-sm">Çalışanların kişisel ve işle ilgili hedeflerine ulaşmalarına yardımcı olmak için bireysel destek sağlanması.</p>
              </div>
              <div className="bg-white border rounded-lg p-6 shadow-sm text-center">
                <h3 className="text-lg font-semibold mb-3 text-green-600">Grup Çalışmaları</h3>
                <p className="text-gray-600 text-sm">Çalışanların gruplar halinde bir araya gelerek belirli bir konuyu tartışması ve işbirliği becerilerini geliştirmesi.</p>
              </div>
              <div className="bg-white border rounded-lg p-6 shadow-sm text-center">
                <h3 className="text-lg font-semibold mb-3 text-purple-600">Değerlendirme Araçları</h3>
                <p className="text-gray-600 text-sm">Çalışanların kişilik, yetenek ve becerilerinin belirlenmesi için kullanılan çeşitli araçlar.</p>
              </div>
            </div>
          </div>

          {/* Başarı Faktörleri */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 text-center">Başarı Faktörleri</h2>
            <p className="mb-6 leading-relaxed text-center">
              Kurumsal psikolojik danışmanlık, bir kuruluşun iş performansını ve çalışanlarının refahını artırmada önemli bir rol oynar. Ancak, başarılı bir danışmanlık süreci için belirli faktörlerin göz önünde bulundurulması gerekmektedir.
            </p>
            <div className="max-w-2xl mx-auto">
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 flex-shrink-0">1</span>
                  <span className="text-left">Danışmanın nitelikli ve deneyimli olması</span>
                </div>
                <div className="flex items-center">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 flex-shrink-0">2</span>
                  <span className="text-left">Danışmanın iletişim becerileri ve empati yeteneği</span>
                </div>
                <div className="flex items-center">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 flex-shrink-0">3</span>
                  <span className="text-left">Kurumsal ortamın desteği ve katılımı</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sıklıkla Karşılaşılan Sorunlar */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 text-center">Sıklıkla Karşılaşılan Sorunlar ve Çözümleri</h2>
            <div className="space-y-6 max-w-3xl mx-auto">
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg text-center">
                <h3 className="text-lg font-semibold mb-2 text-red-800 text-center">İş Yükü ve Stres</h3>
                <p className="text-gray-700 mb-2 text-center">Modern iş dünyası, yüksek iş beklentileri ve rekabetçi ortam nedeniyle çalışanlar için yoğun bir çaba ve stres kaynağı olabilir.</p>
                <p className="text-sm text-gray-600 text-center"><strong>Çözüm:</strong> Stres yönetimi teknikleri öğretmek, iş yükünün daha iyi yönetilmesini sağlamak</p>
              </div>
              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg text-center">
                <h3 className="text-lg font-semibold mb-2 text-orange-800 text-center">İletişim Problemleri</h3>
                <p className="text-gray-700 mb-2 text-center">İyi iletişim, bir şirketin başarısı için temel bir bileşendir. Ancak, kurumsal ortamda zaman zaman iletişim problemleri meydana gelebilir.</p>
                <p className="text-sm text-gray-600 text-center"><strong>Çözüm:</strong> Etkili iletişim becerileri üzerine eğitim vermek, çatışma yönetimi stratejileri sunmak</p>
              </div>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg text-center">
                <h3 className="text-lg font-semibold mb-2 text-yellow-800 text-center">İş Dengelemesi</h3>
                <p className="text-gray-700 mb-2 text-center">Çalışanların iş ve özel hayat dengesini sürdürebilmesi önemlidir. Ancak, modern iş dünyasında bu dengeyi koruyabilmek zor olabilir.</p>
                <p className="text-sm text-gray-600 text-center"><strong>Çözüm:</strong> Esnek çalışma düzenleri sağlamak, zihinsel sağlık programları ve iş-yaşam dengesi üzerine eğitimler vermek</p>
              </div>
            </div>
          </div>

          {/* Sonuçlar ve Değerlendirme */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 text-center">Sonuçlar ve Değerlendirme</h2>
            <p className="mb-6 leading-relaxed text-center">
              Kurumsal psikolojik danışmanlık, bir kuruluşun çalışanlarının psikolojik sağlığını iyileştirmek ve iş performansını artırmak için uygulanan bir süreçtir. Bu sürecin sonucunda çeşitli sonuçlar elde edilir ve bu sonuçlar değerlendirilir.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg text-center">
                <h3 className="text-lg font-semibold mb-2 text-blue-800">Motivasyonun Artması</h3>
                <p className="text-gray-700 text-sm">Çalışanların daha yüksek performans göstermesi</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg text-center">
                <h3 className="text-lg font-semibold mb-2 text-green-800">İş Tatmininin Artması</h3>
                <p className="text-gray-700 text-sm">Çalışanların daha mutlu ve daha verimli olmaları</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg text-center">
                <h3 className="text-lg font-semibold mb-2 text-purple-800">Stres Seviyelerinin Azalması</h3>
                <p className="text-gray-700 text-sm">Çalışanların daha sağlıklı bir çalışma ortamında olmaları</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg text-center">
                <h3 className="text-lg font-semibold mb-2 text-orange-800">İletişim Becerilerinin Geliştirilmesi</h3>
                <p className="text-gray-700 text-sm">Çalışanların daha etkili iletişim kurmaları</p>
              </div>
            </div>

            <p className="mt-6 leading-relaxed text-gray-700 text-center">
              Kurumsal psikolojik danışmanlıkta elde edilen sonuçlar ve değerlendirmeler, kuruluşun başarısı açısından da önemlidir. Çalışanların motivasyonunun artması, iş tatminlerinin yüksek olması ve iletişim becerilerinin geliştirilmesi, kuruluşun hedeflerine ulaşmasını etkileyen faktörlerdir.
            </p>
          </div>
        </div>

        <div className="mt-20 border-t pt-10">
          <h2 className="text-2xl font-semibold text-center mb-6">İletişim</h2>
          <div className="text-center">
            <p className="text-gray-600 mb-6 text-center">
              Kurumsal psikolojik danışmanlık hizmetlerimiz hakkında detaylı bilgi almak için bizimle iletişime geçin.
            </p>
            <a 
              href="/iletisim" 
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              BİZE ULAŞIN
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
