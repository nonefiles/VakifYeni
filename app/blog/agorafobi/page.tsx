export default function AgorafobiPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header - navbar'ın altında kalması için pt-20 eklendi */}
      <div className="bg-white shadow-sm border-b pt-20">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
            Agorafobi
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
              Agorafobi, genellikle kalabalık ortamlardan veya yeni ve belirsiz yerlerden kaçınma korkusu olarak tanımlanan bir anksiyete bozukluğudur. Bu durumda, kişiler kolayca kaçamayacakları bir yerde veya bir durumda hapsolmuş gibi hissederler.
            </p>
          </div>

          {/* Symptoms Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
              Agorafobinin Belirtileri
            </h2>
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <p className="text-gray-700 leading-relaxed text-center mb-8">
                Agorafobinin belirtileri kişiden kişiye farklılık gösterse de, yaygın olarak görülen belirtiler şunlardır:
              </p>

              <div className="space-y-8">
                {/* Panik ataklar */}
                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Panic Ataklar</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Agorafobisi olan kişilerde panik ataklar görülebilir.
                  </p>
                </div>

                {/* Terleme */}
                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Terleme</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Agorafobinin bir belirtisi olarak terleme görülebilir.
                  </p>
                </div>

                {/* Titreme */}
                <div className="border-l-4 border-yellow-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Titreme</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Agorafobisi olan kişilerde titreme görülebilir.
                  </p>
                </div>

                {/* Nefes darlığı */}
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Nefes darlığı</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Agorafobinin bir belirtisi olarak nefes darlığı görülebilir.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Treatment Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
              Agorafobinin Tedavi Yöntemleri
            </h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <p className="text-gray-700 leading-relaxed text-center mb-8">
                Agorafobi tedavi edilebilir bir durumdur ve çeşitli yöntemlerle başa çıkılabilir. Tedavi süreci genellikle ilaç kullanımı, terapi ve destekleyici yöntemlerin bir kombinasyonunu içerir.
              </p>

              <div className="space-y-8">
                {/* Kognitif Davranışçı Terapi (KDT) */}
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Kognitif Davranışçı Terapi (KDT)</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Agorafobinin altında yatan korku ve düşünceleri değiştirmek için kullanılan bir terapi şeklidir.
                  </p>
                </div>

                {/* İlaç tedavisi */}
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">İlaç tedavisi</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Psikiyatrist tarafından reçete edilen antidepresan veya anksiyolitik ilaçlar, agorafobinin semptomlarını hafifletmede yardımcı olabilir.
                  </p>
                </div>

                {/* Desensitizasyon veya Maruz Kalma Terapisi */}
                <div className="border-l-4 border-indigo-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Desensitizasyon veya Maruz Kalma Terapisi</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Bu terapi, kişinin korktuğu durumlarla kademeli olarak yüzleşerek, korku ve kaygı düzeyini azaltmayı hedefler.
                  </p>
                </div>

                {/* Destek grupları */}
                <div className="border-l-4 border-teal-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Destek grupları</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Agorafobi ile başa çıkmak için destek gruplarına katılmak faydalı olabilir.
                  </p>
                </div>

                {/* Profesyonel yardım */}
                <div className="border-l-4 border-pink-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Profesyonel yardım</h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Psikoterapi, agorafobinin tedavisinde etkili bir yöntemdir.
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
