import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-50 py-16 md:py-24">
        <div className="container">
          <h1 className="mb-6 text-center text-4xl font-bold text-blue-600 md:text-5xl">Hakkımızda</h1>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-lg text-gray-600 text-center">
              Yol Arkadaşları Psikoloji Vakfı, herkesin psikolojik desteğe eşit şekilde ulaşabildiği bir dünya yaratma
              vizyonuyla kurulmuştur.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold text-blue-600 text-center">Vakfın Hikayesi</h2>
            <div className="prose max-w-none text-gray-600">
              <p className="text-center">
                Yol Arkadaşları Psikoloji Vakfı, uzun yıllar boyunca psikoloji alanında çalışan profesyonellerin, ruh
                sağlığı hizmetlerine erişimde yaşanan eşitsizlikleri giderme arzusuyla kurulmuştur.
              </p>
              <p className="text-center">
                Vakfımız, maddi imkânsızlıklar nedeniyle psikolojik desteğe ulaşamayan bireylere ücretsiz hizmet sunmak,
                genç uzmanların gelişimine katkıda bulunmak ve toplumsal ruh sağlığı bilincini artırmak amacıyla
                çalışmalarını sürdürmektedir.
              </p>
              <p className="text-center">
                Danışmanlık merkezimizin yıllara dayanan deneyimi ve birikimi, vakfımızın temelini oluşturmaktadır. Bu
                sayede, henüz yeni kurulmuş olmamıza rağmen, güçlü bir uzmanlık altyapısı ve geniş bir erişim ağıyla
                hizmet verebiliyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="bg-blue-50 py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-10 text-center text-3xl font-bold text-blue-600">Kurucumuz</h2>

            <div className="flex flex-col items-center gap-8 rounded-xl bg-white p-8 shadow-sm md:flex-row md:items-start">
              <div className="shrink-0">
                <div className="relative h-48 w-48 overflow-hidden rounded-full">
                  <Image
                    src="/images/team/abdullah-yilmaz.jpg"
                    alt="M. Abdullah Yılmaz"
                    width={200}
                    height={200}
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="text-center md:text-left">
                <h3 className="mb-2 text-2xl font-bold text-blue-600 text-center">M. Abdullah Yılmaz</h3>
                <p className="mb-4 italic text-gray-600 text-center">
                  "İnsana dair her alan, anlamaya ve birlikte yürümeye davet eder."
                </p>
                <div className="prose max-w-none text-gray-600">
                  <p className="text-center">
                    1967 yılında Adana'da doğan M. Abdullah Yılmaz, meslek yaşamını insanı anlamaya, eğitmeye ve
                    iyileştirmeye adadı. Selçuk Üniversitesi'nde Edebiyat, Anadolu Üniversitesi'nde Sosyoloji ve Sosyal
                    Hizmet Uzmanlığı eğitimi aldı. Psikoloji lisans fark derslerini Yakın Doğu Üniversitesi'nde
                    tamamlayarak "Klinik Psikoloji" yüksek lisansı yaptı.
                  </p>
                  <p className="text-center">
                    Uzmanlık alanında derinleşirken hem bireysel hem de toplumsal gelişime katkı sunmayı öncelik haline
                    getirdi. Hasan Kalyoncu Üniversitesi'nden Aile Danışmanlığı eğitimi aldı. Bilişsel Davranışçı Terapi
                    ve Şema Terapi eğitimlerini BDTD çatısı altında tamamladı.
                  </p>
                  <p className="text-center">
                    Eğitim ve psikoloji alanındaki birikimini sadece akademik zeminle sınırlamayıp, farklı disiplinlerle
                    de zenginleştirdi. Gazetecilikten yazarlığa, öğretmenlikten akademisyenliğe uzanan çok yönlü bir
                    kariyer inşa etti.
                  </p>
                  <p className="text-center">
                    Yıllar içinde biriken bu deneyim ve sorumluluk duygusu, Yol Arkadaşları Psikoloji Vakfı'nın
                    kuruluşuna ilham verdi. Bu vakıf aracılığıyla bireylerin psikolojik destek, eğitim ve toplumsal
                    gelişim alanlarında erişilebilir hizmetlere ulaşabilmesini hedefliyor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-10 text-center text-3xl font-bold text-blue-600">Değerlerimiz ve Vizyonumuz</h2>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl bg-blue-50 p-6 text-center">
                <h3 className="mb-4 text-xl font-bold text-blue-600 text-center">Erişilebilirlik</h3>
                <p className="text-gray-600 text-center">
                  Psikolojik desteğin herkes için erişilebilir olması gerektiğine inanıyoruz. Maddi engelleri ortadan
                  kaldırmak için çalışıyoruz.
                </p>
              </div>

              <div className="rounded-xl bg-blue-50 p-6 text-center">
                <h3 className="mb-4 text-xl font-bold text-blue-600 text-center">Dayanışma</h3>
                <p className="text-gray-600 text-center">
                  Birlikte iyileşmenin ve birlikte büyümenin gücüne inanıyoruz. Dayanışma ruhuyla hareket ediyor,
                  toplumsal bağları güçlendiriyoruz.
                </p>
              </div>

              <div className="rounded-xl bg-blue-50 p-6 text-center">
                <h3 className="mb-4 text-xl font-bold text-blue-600 text-center">Profesyonellik</h3>
                <p className="text-gray-600 text-center">
                  Tüm hizmetlerimizi etik ilkeler çerçevesinde, bilimsel temellere dayalı olarak ve profesyonel
                  standartlarda sunuyoruz.
                </p>
              </div>

              <div className="rounded-xl bg-blue-50 p-6 text-center">
                <h3 className="mb-4 text-xl font-bold text-blue-600 text-center">Kapsayıcılık</h3>
                <p className="text-gray-600 text-center">
                  Farklılıkları zenginlik olarak görüyor, hizmetlerimizi tüm toplum kesimlerini kapsayacak şekilde
                  tasarlıyoruz.
                </p>
              </div>
            </div>

            <div className="mt-12 rounded-xl bg-[#eff6ff] p-8 text-gray-800 text-center">
              <h3 className="mb-4 text-2xl font-bold text-center">Uzun Vadeli Vizyonumuz: Psikoloji Enstitüsü</h3>
              <p className="mb-6 text-center">
                Yol Arkadaşları Psikoloji Vakfı olarak uzun vadeli vizyonumuz; psikoloji alanında eğitim, uygulama ve
                araştırmayı bir araya getiren bir Psikoloji Enstitüsü kurmak. Bu yapı sayesinde, nitelikli uzmanların
                yetişmesi, toplum temelli psikolojik hizmetlerin güçlenmesi ve bilimsel bilginin daha fazla insana
                ulaşması için kalıcı bir zemin oluşturmayı hedefliyoruz.
              </p>
              <p className="text-center">
                Enstitü; genç uzmanların gelişimini destekleyecek uygulama alanları sunmayı, meslek içi eğitimlerle
                profesyonel standartları yükseltmeyi ve toplumun psikolojik iyi oluşuna yönelik daha kapsayıcı projeleri
                mümkün kılmayı amaçlıyor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-blue-600 text-center">Bize Katılın</h2>
            <p className="mb-8 text-lg text-gray-600 text-center">
              Vizyonumuzu paylaşıyor ve bu yolculukta bizimle birlikte yürümek istiyorsanız, gönüllü olarak veya bağış
              yaparak destek olabilirsiniz.
            </p>
            <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button asChild size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
                <Link href="/gonullu-ol">Gönüllü Ol</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 hover:text-blue-700"
              >
                <Link href="/bagis-yap">Bağış Yap</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
