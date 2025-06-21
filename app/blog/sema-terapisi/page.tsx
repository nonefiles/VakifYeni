export default function SchemaTherapyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header - navbar'ın altında kalması için pt-20 eklendi */}
      <div className="bg-white shadow-sm border-b pt-20">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
            Şema Terapi
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
              Şema Terapi, bireylerin yaşamlarındaki kalıpların ve olumsuz düşüncelerin kökenlerini anlamalarına yardımcı olan etkili bir psikoterapi yöntemidir. Bu terapi yaklaşımı, kişinin kendi içsel dengesini ve bütünlüğünü sağlamayı hedefler.
            </p>
          </div>

          {/* What is Schema Therapy and Basic Principles Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
              Şema Terapi Nedir ve Temel İlkeleri Nelerdir?
            </h2>
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <p className="text-gray-700 leading-relaxed text-center mb-8">
                Şema terapi, geleneksel terapi yöntemlerinden farklı olarak, bedenin, zihnin, ruhun ve duygusal dünyanın bir bütün olarak ele alınmasını temel alan bütüncül bir yaklaşımdır. Terapinin temel amacı, bireyin çocukluk döneminde edindiği ve yetişkinlikte tekrarladığı olumsuz düşünce ve davranış kalıplarını inceleyip değiştirmektir.
              </p>
              <p className="text-gray-700 leading-relaxed text-center mb-8">
                Şema terapide, terapist ile danışan arasında güvenli bir ilişki kurulur. Terapist, bireyin deneyimlerine empatiyle yaklaşarak duygusal dünyasına derinlemesine iner ve onunla işbirliği yapmaya çalışır. Bu, bireyin kendini anlaşılmış ve desteklenmiş hissetmesini sağlar.
              </p>
              <p className="text-gray-700 leading-relaxed text-center mb-8">
                Şema terapinin temel kavramları şunlardır:
              </p>
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    <strong>Şemalar:</strong> Bireyin yaşam deneyimlerinden, özellikle de çocukluk döneminden kaynaklanan ve bilinçli olarak fark edilmeyen temel inançlardır.
                  </p>
                </div>
                <div className="border-l-4 border-orange-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    <strong>Modlar:</strong> Bireyin hissiyatlarını ve davranışlarını etkileyen içsel durumlardır.
                  </p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    <strong>Temel İhtiyaçlar:</strong> Bireyin yaşamda tatmin edilmesi gereken psikolojik gereksinimleridir.
                  </p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-center mt-8">
                Ayrıca, şema aktivizasyonu (şemaların yaşamdaki bazı olaylarla tetiklenmesi) ve şema modifikasyonu (şemaların daha uyumlu inançlarla değiştirilmesi) da önemli kavramlardır.
              </p>
            </div>
          </div>

          {/* Origins and Development Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
              Şema Terapinin Kökenleri ve Gelişimi
            </h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <p className="text-gray-700 leading-relaxed text-center mb-8">
                Şema terapi, Dave Edwards ve Jeffrey Young tarafından geliştirilmiştir. Young, bilişsel terapi ve psikanaliz temelli yaklaşımlardan yola çıkarak kendi bilişsel modelini oluşturmuş, bilişsel terapideki eksiklikleri fark ederek "şemalar" adını verdiği kalıplaşmış düşünce yapılarını da tedavi etme gerekliliğine inanmıştır. Bu yaklaşımla, bireyin çocukluktan itibaren edindiği olumsuz yaşantıların, düşünce kalıplarının ve kişisel inançlarının terapötik bir şekilde dönüştürülmesi hedeflenir.
              </p>
            </div>
          </div>

          {/* Techniques and Tools Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
              Şema Terapide Kullanılan Teknikler ve Araçlar
            </h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <p className="text-gray-700 leading-relaxed text-center mb-8">
                Şema terapi, bireylerin köklerindeki olumsuz inançları ve duygusal tepkileri keşfetmelerine ve değiştirmelerine yardımcı olmak için çeşitli teknikler ve araçlar kullanır. Başlıca teknikler şunlardır:
              </p>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    <strong>Şema Odaklı Davranışsal Teknikler:</strong> Bireyin şemalarını fark etmesine, anlamasına ve değiştirmesine yardımcı olur.
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    <strong>Şema Oluşturma Tekniği:</strong> Bireyin olumsuz düşüncelerini ve duygusal tepkilerini ifade etmesine yardımcı olur.
                  </p>
                </div>
                <div className="border-l-4 border-indigo-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    <strong>Şema Fısıltıları:</strong> Terapistin bireyle olan iletişiminde şemaları hedef almasını sağlar.
                  </p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-center mt-8">
                Kullanılan araçlar arasında ise şunlar bulunur:
              </p>
              <div className="space-y-4">
                <div className="border-l-4 border-purple-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    <strong>Şema Günlüğü:</strong> Bireyin günlük yaşantısında gözlemlediği şemaları ve duygusal tepkilerini kaydetmesini sağlar.
                  </p>
                </div>
                <div className="border-l-4 border-pink-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    <strong>Rol Oynama (Role Play):</strong> Bireyin olumsuz şemalarını ve başa çıkma stratejilerini canlandırarak deneyimlemesine olanak tanır.
                  </p>
                </div>
                <div className="border-l-4 border-amber-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    <strong>Şema Kartları:</strong> Bireyin kendi şemalarını ifade etmesine ve terapistle paylaşmasına yardımcı olan kartlardır.
                  </p>
                </div>
                <div className="border-l-4 border-teal-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    <strong>Şema Çalışma Kitapları ve Şema Haritalama Teknikleri:</strong> Şema çalışma kitapları, bireylerin şemalarını anlamalarına ve değiştirmelerine yardımcı olacak egzersizler içerirken, şema haritalama teknikleri şemaları görsel olarak temsil etmeye yardımcı olur.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Application Areas Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
              Şema Terapinin Uygulama Alanları
            </h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <p className="text-gray-700 leading-relaxed text-center mb-8">
                Şema terapinin uygulama alanları oldukça geniştir ve birçok psikolojik rahatsızlık ve sorun üzerinde etkili bir şekilde uygulanır. Başlıca uygulama alanları şunlardır:
              </p>
              <div className="space-y-4">
                <div className="border-l-4 border-cyan-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    <strong>Kişilik Bozuklukları:</strong> Özellikle borderline kişilik bozukluğu, narsistik kişilik bozukluğu ve obsesif kompulsif kişilik bozukluğu gibi kişilik yapılarındaki problemleri çözmek için kullanılır.
                  </p>
                </div>
                <div className="border-l-4 border-lime-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    <strong>Anksiyete Bozuklukları:</strong> Panik atak, sosyal anksiyete, obsesif kompulsif bozukluk gibi anksiyete sorunlarına sahip bireylerde kaygı düzeyini azaltmaya yönelik çalışmalar yapılır ve yanlış inançlar ile düşünceler değiştirilir.
                  </p>
                </div>
                <div className="border-l-4 border-emerald-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    <strong>Depresyon ve İlişki Sorunları:</strong> Depresyon (umutsuzluk hissi, düşük benlik saygısı, negatif düşünceler) ve ilişki sorunları gibi birçok psikolojik sorun üzerinde etkindir.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Effectiveness and Advantages Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
              Şema Terapinin Etkinliği ve Avantajları
            </h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <p className="text-gray-700 leading-relaxed text-center mb-8">
                Şema terapisinin etkinliği birçok araştırma ve çalışma ile kanıtlanmıştır. Bu terapi yöntemi, bireyin düşünce yapılarını değiştirerek olumlu bir psikolojik dönüşüm sağlar. Depresyon, anksiyete ve kişilik bozuklukları gibi birçok psikolojik sorunun tedavisinde etkili sonuçlar verir.
              </p>
              <p className="text-gray-700 leading-relaxed text-center mb-8">
                Şema terapinin başlıca avantajları şunlardır:
              </p>
              <div className="space-y-4">
                <div className="border-l-4 border-sky-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    Bireye içgörü kazandırır ve derinlemesine bir değişim sağlar.
                  </p>
                </div>
                <div className="border-l-4 border-fuchsia-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    Uzun vadeli sonuçlar elde etme potansiyeline sahiptir.
                  </p>
                </div>
                <div className="border-l-4 border-violet-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    Güven temelinde bir ilişki oluşturur ve terapi sürecinden maksimum fayda sağlanmasını sağlar.
                  </p>
                </div>
                <div className="border-l-4 border-pink-500 pl-6">
                  <p className="text-gray-700 leading-relaxed text-center">
                    Kişinin bilişsel, duygusal, fiziksel ve ruhsal ihtiyaçlarını bir bütün olarak ele aldığı için içsel dengenin sağlanmasına, bütünsel iyileşmeye ve kişisel gelişime katkı sağlar.
                  </p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-center mt-8">
                Bununla birlikte, bütüncül bir yaklaşım olan şema terapinin dezavantajları da olabilir. Diğer terapi yöntemlerine kıyasla daha fazla zaman ve sabır gerektirebilir, finansal olarak daha yüksek maliyetli olabilir ve daha fazla uzmanlık ve eğitim gerektirebilir, bu da bazı durumlarda erişilebilirliği azaltabilir. Ayrıca, bazı durumlarda tıbbi tedaviye ihtiyaç duyulması veya belirli psikolojik sorunlarda yetersiz kalabilmesi de dezavantajlar arasında yer alabilir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
