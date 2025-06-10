import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Building, Users, Brain, Shield } from "lucide-react"
import Link from "next/link"

export default function KurumsalEgitimlerPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-lora italic text-primary mb-6">Kurumsal Eğitimler</h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              İyi oluş, sadece bireylerin değil kurumların da gücüdür.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p>
                Yol Arkadaşları Psikoloji Vakfı olarak, iş yerlerinde psikolojik iyi oluşun sürdürülebilir başarıyla
                doğrudan ilişkili olduğuna inanıyoruz. Bu doğrultuda sunduğumuz kurumsal eğitim ve seminer
                programlarımız, çalışanların ruh sağlığını desteklemeyi, iletişim becerilerini geliştirmeyi ve kurumsal
                iklimi güçlendirmeyi hedefliyor.
              </p>

              <p className="font-medium text-lg mt-6">
                Eğitimlerimiz, kurumların ihtiyaçlarına özel olarak şekillendirilir; liderlikten ekip içi ilişkilere,
                stres yönetiminden duygusal dayanıklılığa kadar geniş bir yelpazeyi kapsar.
              </p>

              <p>
                Amacımız yalnızca bilgi aktarmak değil, çalışanların bireysel potansiyellerini keşfetmelerine ve kurum
                içindeki etkileşimlerin daha sağlıklı bir zemine taşınmasına katkı sunmaktır.
              </p>

              <p className="italic">Daha sağlıklı bir iş ortamı için birlikte çalışalım.</p>

              <p>Eğitim içerikleri ve başvuru için bizimle iletişime geçebilirsiniz.</p>
            </div>

            <div className="mt-12 flex flex-col md:flex-row justify-center gap-6">
              <Link href="/iletisim">
                <Button className="w-full md:w-auto bg-primary hover:bg-primary/80 text-white px-8 py-6 rounded-full text-lg">
                  İletişime Geç <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/blog">
                <Button
                  variant="outline"
                  className="w-full md:w-auto border-primary text-primary hover:bg-primary/10 px-8 py-6 rounded-full text-lg"
                >
                  Etkinliklerimiz
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Training Categories */}
      <section className="py-12 md:py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold font-lora italic text-primary mb-10 text-center">
              Eğitim Kategorilerimiz
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <Building className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Kurumsal İklim</h3>
                  <p className="text-gray-700">Kurum kültürü, değerler ve psikolojik güvenlik alanlarında eğitimler.</p>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <Users className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Liderlik</h3>
                  <p className="text-gray-700">Etkili liderlik, koçluk becerileri ve ekip yönetimi eğitimleri.</p>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <Brain className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Çalışan İyi Oluşu</h3>
                  <p className="text-gray-700">Stres yönetimi, iş-yaşam dengesi ve tükenmişlik önleme eğitimleri.</p>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <Shield className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Dayanıklılık</h3>
                  <p className="text-gray-700">
                    Duygusal dayanıklılık, değişime adaptasyon ve kriz yönetimi eğitimleri.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold font-lora italic text-primary mb-10 text-center">Eğitim Sürecimiz</h2>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform md:-translate-x-0.5"></div>

              {/* Timeline items */}
              <div className="space-y-12">
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-8 md:text-right order-2 md:order-1 mt-4 md:mt-0">
                    <h3 className="text-xl font-bold text-primary mb-2">İhtiyaç Analizi</h3>
                    <p className="text-gray-700">
                      Kurumunuzun ihtiyaçlarını anlamak için detaylı bir görüşme gerçekleştiririz.
                    </p>
                  </div>
                  <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center transform -translate-x-3.5 md:-translate-x-4 z-10">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div className="flex-1 md:pl-8 order-1 md:order-2"></div>
                </div>

                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-8 md:text-right order-2 md:order-2 mt-4 md:mt-0"></div>
                  <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center transform -translate-x-3.5 md:-translate-x-4 z-10">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div className="flex-1 md:pl-8 order-1 md:order-1">
                    <h3 className="text-xl font-bold text-primary mb-2">Program Tasarımı</h3>
                    <p className="text-gray-700">
                      İhtiyaçlarınıza özel eğitim programını tasarlar ve içeriği sizinle paylaşırız.
                    </p>
                  </div>
                </div>

                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-8 md:text-right order-2 md:order-1 mt-4 md:mt-0">
                    <h3 className="text-xl font-bold text-primary mb-2">Eğitim Uygulaması</h3>
                    <p className="text-gray-700">Belirlenen tarih ve formatta eğitim programını uygularız.</p>
                  </div>
                  <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center transform -translate-x-3.5 md:-translate-x-4 z-10">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div className="flex-1 md:pl-8 order-1 md:order-2"></div>
                </div>

                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-8 md:text-right order-2 md:order-2 mt-4 md:mt-0"></div>
                  <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center transform -translate-x-3.5 md:-translate-x-4 z-10">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div className="flex-1 md:pl-8 order-1 md:order-1">
                    <h3 className="text-xl font-bold text-primary mb-2">Değerlendirme ve Takip</h3>
                    <p className="text-gray-700">
                      Eğitim sonrası değerlendirme ve gerekli takip süreçlerini yürütürüz.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <p className="text-lg text-gray-700 mb-6">
                Kurumunuza özel eğitim programları için bizimle iletişime geçin.
              </p>
              <Link href="/iletisim">
                <Button className="bg-primary hover:bg-primary/80 text-white">Teklif Alın</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
