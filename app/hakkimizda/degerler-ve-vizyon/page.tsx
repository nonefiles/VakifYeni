import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Heart, Users, Award, Globe, Lightbulb, School } from "lucide-react"

export default function DegerlerVeVizyonPage() {
  return (
    <div className="container py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center gradient-heading">Değerlerimiz ve Vizyonumuz</h1>

      <p className="text-lg text-center max-w-3xl mx-auto mb-12">
        Yol Arkadaşları Psikoloji Vakfı olarak, çalışmalarımızı şekillendiren temel değerlerimiz ve geleceğe dair
        vizyonumuz, her adımımızda bize rehberlik etmektedir.
      </p>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-10 text-center">Temel Değerlerimiz</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-0 shadow-md">
            <CardHeader className="text-center pb-2">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full gradient-bg-primary">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold">Erişilebilirlik</h3>
            </CardHeader>
            <CardContent className="text-center">
              <p>
                Psikolojik desteğin herkes için erişilebilir olması gerektiğine inanıyoruz. Maddi engelleri ortadan
                kaldırmak için çalışıyoruz.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md">
            <CardHeader className="text-center pb-2">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full gradient-bg-primary">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold">Dayanışma</h3>
            </CardHeader>
            <CardContent className="text-center">
              <p>
                Birlikte iyileşmenin ve birlikte büyümenin gücüne inanıyoruz. Dayanışma ruhuyla hareket ediyor,
                toplumsal bağları güçlendiriyoruz.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md">
            <CardHeader className="text-center pb-2">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full gradient-bg-primary">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold">Profesyonellik</h3>
            </CardHeader>
            <CardContent className="text-center">
              <p>
                Tüm hizmetlerimizi etik ilkeler çerçevesinde, bilimsel temellere dayalı olarak ve profesyonel
                standartlarda sunuyoruz.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md">
            <CardHeader className="text-center pb-2">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full gradient-bg-primary">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold">Kapsayıcılık</h3>
            </CardHeader>
            <CardContent className="text-center">
              <p>
                Farklılıkları zenginlik olarak görüyor, hizmetlerimizi tüm toplum kesimlerini kapsayacak şekilde
                tasarlıyoruz.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md">
            <CardHeader className="text-center pb-2">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full gradient-bg-primary">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold">Yenilikçilik</h3>
            </CardHeader>
            <CardContent className="text-center">
              <p>
                Değişen dünya ve toplum ihtiyaçlarına uyum sağlamak için sürekli kendimizi yeniliyor, yeni yaklaşımlar
                geliştiriyoruz.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md">
            <CardHeader className="text-center pb-2">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full gradient-bg-primary">
                <School className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold">Sürekli Öğrenme</h3>
            </CardHeader>
            <CardContent className="text-center">
              <p>
                Bilginin sürekli geliştiğine inanıyor, kendimizi ve hizmetlerimizi güncel bilimsel bilgilerle
                besliyoruz.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Vizyonumuz</h2>

        <Card className="border-0 shadow-lg bg-[#e0ffff] text-gray-800">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Uzun Vadeli Vizyonumuz: Psikoloji Enstitüsü</h3>

            <p className="mb-6">
              Yol Arkadaşları Psikoloji Vakfı olarak uzun vadeli vizyonumuz; psikoloji alanında eğitim, uygulama ve
              araştırmayı bir araya getiren bir Psikoloji Enstitüsü kurmak. Bu yapı sayesinde, nitelikli uzmanların
              yetişmesi, toplum temelli psikolojik hizmetlerin güçlenmesi ve bilimsel bilginin daha fazla insana
              ulaşması için kalıcı bir zemin oluşturmayı hedefliyoruz.
            </p>

            <p>
              Enstitü; genç uzmanların gelişimini destekleyecek uygulama alanları sunmayı, meslek içi eğitimlerle
              profesyonel standartları yükseltmeyi ve toplumun psikolojik iyi oluşuna yönelik daha kapsayıcı projeleri
              mümkün kılmayı amaçlıyor.
            </p>
          </CardContent>
        </Card>

        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-10 text-center">Stratejik Hedeflerimiz</h2>

          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4 font-bold text-primary text-xl">2025</div>
              <div className="md:w-3/4">
                <h4 className="text-xl font-bold mb-2">Erişim Ağını Genişletme</h4>
                <p>
                  Türkiye'nin farklı bölgelerinde hizmet noktaları oluşturarak, daha fazla kişiye ücretsiz psikolojik
                  destek sunmak.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4 font-bold text-primary text-xl">2027</div>
              <div className="md:w-3/4">
                <h4 className="text-xl font-bold mb-2">Eğitim Programlarını Güçlendirme</h4>
                <p>
                  Genç uzmanların gelişimini destekleyecek kapsamlı eğitim programları oluşturmak ve uluslararası iş
                  birlikleri geliştirmek.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4 font-bold text-primary text-xl">2030</div>
              <div className="md:w-3/4">
                <h4 className="text-xl font-bold mb-2">Psikoloji Enstitüsü'nü Hayata Geçirme</h4>
                <p>
                  Eğitim, uygulama ve araştırma faaliyetlerini tek çatı altında toplayacak Psikoloji Enstitüsü'nü kurmak
                  ve faaliyete geçirmek.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
