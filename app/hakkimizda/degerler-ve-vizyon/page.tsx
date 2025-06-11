import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Heart, Award, Globe, Users, Lightbulb, School } from "lucide-react"

export default function DegerlerVeVizyonPage() {
  return (
    <div className="container py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center gradient-heading">Değerlerimiz ve Vizyonumuz</h1>

      <p className="text-lg text-center max-w-3xl mx-auto mb-12">
        Yol Arkadaşları Psikoloji Vakfı olarak, çalışmalarımızı şekillendiren temel değerlerimiz ve geleceğe dair
        vizyonumuz, her adımımızda bize rehberlik etmektedir.
      </p>

      {/* Değerlerimiz */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-10 text-center">Temel Değerlerimiz</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 1. Erişilebilirlik */}
          <Card className="border-0 shadow-md">
            <CardHeader className="text-center pb-2">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full gradient-bg-primary">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-center">Erişilebilirlik</h3>
            </CardHeader>
            <CardContent className="text-center">
              <p>
                Psikolojik destek herkesin hakkıdır. Hizmetlerimizi hiçbir ayrım gözetmeksizin, ihtiyaç temelli olarak sunarız.
              </p>
            </CardContent>
          </Card>
          {/* 2. Bilimsellik */}
          <Card className="border-0 shadow-md">
            <CardHeader className="text-center pb-2">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full gradient-bg-primary">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-center">Bilimsellik</h3>
            </CardHeader>
            <CardContent className="text-center">
              <p>
                Yürüttüğümüz her çalışmanın dayanağı bilimsel bilgi, etik ilkeler ve mesleki sorumluluktur.
              </p>
            </CardContent>
          </Card>
          {/* 3. Duyarlılık */}
          <Card className="border-0 shadow-md">
            <CardHeader className="text-center pb-2">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full gradient-bg-primary">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-center">Duyarlılık</h3>
            </CardHeader>
            <CardContent className="text-center">
              <p>
                Toplumun ve bireylerin farklı yaşam koşullarına ve ihtiyaçlarına hassasiyetle yaklaşırız.
              </p>
            </CardContent>
          </Card>
          {/* 4. Birliktelik */}
          <Card className="border-0 shadow-md">
            <CardHeader className="text-center pb-2">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full gradient-bg-primary">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-center">Birliktelik</h3>
            </CardHeader>
            <CardContent className="text-center">
              <p>
                Yalnızca bireylerle değil, gönüllüler, uzmanlar ve kurumlarla kurduğumuz iş birlikleriyle daha kapsayıcı çözümler üretiriz.
              </p>
            </CardContent>
          </Card>
          {/* 5. Güvenli Alan Yaratmak */}
          <Card className="border-0 shadow-md">
            <CardHeader className="text-center pb-2">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full gradient-bg-primary">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-center">Güvenli Alan Yaratmak</h3>
            </CardHeader>
            <CardContent className="text-center">
              <p>
                Psikolojik destek sunduğumuz her ortamda, kişilerin kendilerini ifade edebilecekleri, yargıdan uzak ve destekleyici bir alan oluşturmayı öncelikleriz.
              </p>
            </CardContent>
          </Card>
          {/* 6. Gelişim ve Paylaşım */}
          <Card className="border-0 shadow-md">
            <CardHeader className="text-center pb-2">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full gradient-bg-primary">
                <School className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-center">Gelişim ve Paylaşım</h3>
            </CardHeader>
            <CardContent className="text-center">
              <p>
                Bireyin içsel gelişimini, toplumsal fayda ile birlikte düşünür; öğrenmenin ve paylaşmanın dönüştürücü gücüne inanırız.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Vizyonumuz */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Vizyonumuz</h2>
        <Card className="border-0 shadow-lg bg-[#e0ffff] text-gray-800">
          <CardContent className="p-8 text-center">
            <p>
              Yol Arkadaşları Psikoloji Vakfı olarak, herkesin psikolojik destek hizmetlerine ihtiyaç duyduğunda yalnız hissetmediği, güvenli ve destekleyici alanlara kolaylıkla ulaşabildiği bir toplum hayal ediyoruz.<br /><br />
              İnanıyoruz ki, bireyin kendini tanıma süreci, yaşadığı zorluklarla başa çıkabilmesi, ilişkilerinde derinlik kurabilmesi ve yaşamına anlam katabilmesi; sadece bireysel çabanın değil, aynı zamanda toplumun sağladığı imkânların da bir sonucudur. Biz, bu imkânları eşitlemek için varız.<br /><br />
              Psikolojik destek hizmetlerinin belirli kesimlerle sınırlı kalmaması, herkesin kendine ait bir gelişim alanı bulabilmesi ve bu sürecin bilimsel temellerle yürütülmesi gerektiğine inanıyoruz. Bu nedenle çalışmalarımızı; etik ilkelere bağlı, toplumun ihtiyaçlarına duyarlı ve mesleki olarak donanımlı bir yaklaşımla yürütüyoruz.<br /><br />
              Uzun vadede, psikoloji alanında bilgi üretimini, hizmet sunumunu ve eğitimi bir araya getiren, çok boyutlu ve sürdürülebilir bir yapı kurmayı hedefliyoruz. Bu hedefin temelinde ise; sadece bireylerin değil, ailelerin, kurumların ve toplumun bütününün ruhsal iyilik haline katkı sunma isteğimiz yatıyor.<br /><br />
              Toplumsal dönüşümün bireyin iç dünyasından başladığına inanıyor; herkesin bu yolculukta yanında olmayı, güvenli bir eşlik sunmayı önemsiyoruz.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
