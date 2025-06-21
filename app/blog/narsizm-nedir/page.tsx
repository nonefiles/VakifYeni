export default function NarsizmPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b pt-20">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
            Narsizm
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
              Narsizm, kişinin benliğine dair algısında bozulmalarla birlikte aşırı hayranlık ve takdir ihtiyacı, empati eksikliği ve büyüklük içeren bir yapıyı ifade eden çok boyutlu bir psikolojik durumdur. Sağlıklı narsisizm ile patolojik narsisizm arasında bir spektrum bulunur.
            </p>
          </div>

          {/* Köken & Belirtiler */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
              Narsizmin Kökeni ve Belirtileri
            </h2>
            <div className="bg-white rounded-lg shadow-md p-8 mb-8 space-y-8">
              
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Kelimenin Kökeni</h3>
                <p className="text-gray-700 leading-relaxed text-center">
                  Narsisizm terimi, Yunan mitolojisindeki kendi yansımasına aşık olan Narkissos'tan türemiştir.
                </p>
              </div>

              <div className="border-l-4 border-yellow-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Belirtileri</h3>
                <p className="text-gray-700 leading-relaxed text-center">
                  Aşırı beğenilme ihtiyacı, empati eksikliği, başkalarını kullanma ve sürekli övgü beklemek gibi davranışlarla kendini gösterir. Narsistik bireyler genellikle eleştiriye kapalıdır ve başkalarını küçümser.
                </p>
              </div>

              <div className="border-l-4 border-pink-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Türleri</h3>
                <p className="text-gray-700 leading-relaxed text-center">
                  Narsizm üç ana türde incelenir: Grandiyöz (açık) narsisizm, kırılgan (gizli) narsisizm ve malign (zararlı) narsisizm. Her biri farklı dışavurumlara sahiptir.
                </p>
              </div>
            </div>
          </div>

          {/* Nedenleri */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
              Narsizmin Gelişimsel Kökenleri
            </h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <p className="text-gray-700 leading-relaxed text-center mb-8">
                Narsistik yapıların gelişiminde çocukluk dönemi büyük rol oynar:
              </p>
              <ul className="list-disc list-inside space-y-4 text-gray-700 text-center">
                <li>Aşırı övgü ya da sürekli eleştiri.</li>
                <li>Koşullu sevgi görme ve duygusal ihmal.</li>
                <li>Gerçek benlik ile sahte benlik arasında sıkışma.</li>
                <li>Travmatik deneyimler ve değer yoksunluğu.</li>
              </ul>
            </div>
          </div>

          {/* Günlük Yaşam ve Etkileri */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
              Günlük Yaşam ve İlişkiler Üzerindeki Etkileri
            </h2>
            <div className="bg-white rounded-lg shadow-md p-8 space-y-8">
              <div className="border-l-4 border-red-500 pl-6">
                <p className="text-gray-700 leading-relaxed text-center">
                  Narsistik bireyler sosyal ilişkilerde güçlük yaşar. Egemenlik kurma, empati eksikliği ve kendine odaklı davranışlar, yakın ilişkileri zedeler. İş ortamında da yalnızlaşabilir ve çatışmalara neden olabilirler.
                </p>
              </div>

              <div className="border-l-4 border-indigo-500 pl-6">
                <p className="text-gray-700 leading-relaxed text-center">
                  Narsistik yapılar, aynı zamanda depresyon, anksiyete ve düşük özgüvene de yol açabilir.
                </p>
              </div>
            </div>
          </div>

          {/* Sosyal Medya ve Narsizm */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
              Sosyal Medyanın Etkisi
            </h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <p className="text-gray-700 leading-relaxed text-center">
                Sosyal medya, narsistik eğilimleri besleyebilir. Beğeni ve onay alma arzusu, bireyin özdeğerini dışsal onaylara bağlamasına neden olur. Bu da kırılgan bir özgüvene ve dijitalde aşırı benlik sunumuna yol açabilir.
              </p>
            </div>
          </div>

          {/* Başa Çıkma ve Terapi */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
              Narsizmle Başa Çıkma ve Terapi Yöntemleri
            </h2>
            <div className="bg-white rounded-lg shadow-md p-8 space-y-8">
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Sınırlar Belirleme</h3>
                <p className="text-gray-700 leading-relaxed text-center">
                  Sağlıklı sınırlar koymak, narsistik bireylerle başa çıkmanın temel yollarındandır.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Empati Kurmak</h3>
                <p className="text-gray-700 leading-relaxed text-center">
                  Anlayışla yaklaşmak, narsistik kişilikle sağlıklı ilişki kurmanın bir yoludur.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Psikoterapi</h3>
                <p className="text-gray-700 leading-relaxed text-center">
                  Heinz Kohut’un “kendilik psikolojisi” yaklaşımı, narsistik bireylerin tedavisinde önemli bir kuramsal temeldir. Empatik aynalama ile kendilik bütünlüğü sağlanabilir.
                </p>
              </div>

              <div className="border-l-4 border-pink-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Kendine Değer Verme</h3>
                <p className="text-gray-700 leading-relaxed text-center">
                  Kendi duygusal ihtiyaçlarınızı fark etmek ve onlara özen göstermek narsistik ilişkilerde sağlıklı kalmanın anahtarıdır.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
