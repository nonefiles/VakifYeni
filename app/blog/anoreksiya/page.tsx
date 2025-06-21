export default function AnoreksiyaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header - navbar'ın altında kalması için pt-20 eklendi */}
      <div className="bg-white shadow-sm border-b pt-20">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
            Anoreksiya
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
              Anoreksiya (Anoreksiya Nervoza), genellikle aşırı kilo kaybı ve yeme alışkanlıklarında belirgin bir değişiklikle karakterize edilen ciddi bir psikolojik bozukluktur. Bu bozukluk, yeme alışkanlıklarının kontrol edilememesi, ideal olmayan bir vücut ağırlığına ulaşmaya yönelik takıntılı bir arzu ve aşırı kilo verme çabaları ile kendini gösterir.
            </p>
          </div>

          {/* Symptoms Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
              Anoreksiya Belirtileri ve Semptomları
            </h2>
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <p className="text-gray-700 leading-relaxed text-center mb-8">
                Anoreksiya belirtileri genellikle yavaş yavaş başlar ve çoğu zaman fark edilmesi zor olabilir. Bu nedenle, anoreksiya belirtilerini ve semptomlarını tanımak, hastalığın erken teşhisi ve tedavisi açısından son derece önemlidir.
              </p>

              <div className="space-y-8">
                {/* Aşırı kilo kaybı */}
                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Aşırı kilo kaybı</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Anoreksiya belirtileri arasında aşırı kilo kaybı yer alabilir.
                  </p>
                </div>

                {/* Yetersiz beslenme */}
                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Yetersiz beslenme</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Anoreksiya belirtileri arasında yetersiz beslenme yer alabilir.
                  </p>
                </div>

                {/* Sürekli diyet yapma */}
                <div className="border-l-4 border-yellow-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Sürekli diyet yapma</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Anoreksiya belirtileri arasında sürekli diyet yapma yer alabilir.
                  </p>
                </div>

                {/* Yorgunluk */}
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Yorgunluk</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Anoreksiya belirtileri arasında yorgunluk yer alabilir.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Treatment Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
              Anoreksiya Tedavi Yöntemleri
            </h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <p className="text-gray-700 leading-relaxed text-center mb-8">
                Anoreksiya tedavi edilebilir bir durumdur ve çeşitli yöntemlerle başa çıkılabilir. Tedavi süreci oldukça karmaşıktır, çünkü sadece fiziksel değil, aynı zamanda psikolojik bir rahatsızlıktır.
              </p>

              <div className="space-y-8">
                {/* Multidisipliner Yaklaşım */}
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Multidisipliner Yaklaşım</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Anoreksiya tedavisi genellikle beslenme uzmanları, psikiyatristler ve terapistlerin bulunduğu multidisipliner bir yaklaşım gerektirir.
                  </p>
                </div>

                {/* Psikoterapi */}
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Psikoterapi</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Anoreksiya tedavisinde psikoterapi önemli bir yer tutar.
                  </p>
                </div>

                {/* Destek Grubu Terapisi */}
                <div className="border-l-4 border-indigo-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Destek Grubu Terapisi</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Destek grupları anoreksiya ile başa çıkmada yardımcı olabilir.
                  </p>
                </div>

                {/* Aile Terapisi */}
                <div className="border-l-4 border-teal-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Aile Terapisi</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Aile terapisi de tedavi yöntemleri arasında yer alabilir.
                  </p>
                </div>

                {/* Tıbbi Müdahaleler */}
                <div className="border-l-4 border-pink-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Tıbbi Müdahaleler</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Gerekli durumlarda tıbbi müdahaleler de uygulanabilir.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
