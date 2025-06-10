import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Users, Shield, Heart } from "lucide-react"
import Link from "next/link"

export default function GrupTerapileriPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-lora italic text-primary mb-6">Grup Terapileri</h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Yalnız hissettiğinizde, duygularınızı paylaşmak için bir alan aradığınızda, benzer yaşantılardan geçen
              kişilerle bir araya gelmenin iyileştirici gücü bambaşkadır.
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
                Yol Arkadaşları Psikoloji Vakfı olarak, farklı yaşantılara ve ihtiyaçlara yönelik tematik grup
                terapileri sunuyoruz. Bu çalışmalarda, bir terapist eşliğinde güvenli bir alanda buluşur, kendinizi
                ifade etme, başkalarını duyma ve birlikte iyileşme fırsatı bulursunuz.
              </p>

              <p className="font-medium text-lg mt-6">
                Grup terapilerimiz, özellikle sosyal destek ihtiyacı duyan, zorlayıcı duygularla baş etmekte zorlanan ya
                da kendini daha yakından tanımak isteyen bireyler için uygundur.
              </p>

              <p>
                Katılımcılar, benzer deneyimlerden gelen diğer bireylerle bir araya gelerek yalnız olmadıklarını fark
                eder; karşılıklı paylaşım sayesinde hem kendi yollarını hem de başkalarının yolculuklarını anlamlandırma
                imkânı bulur.
              </p>

              <p>
                Tüm gruplar, alanında uzman terapistler eşliğinde yürütülür ve gizlilik ilkesi temel alınarak
                oluşturulmuş güvenli bir ortamda gerçekleştirilir.
              </p>

              <p className="text-lg font-medium italic mt-8">
                Her adımda yanınızda olmak için buradayız.
                <br />
                Grup terapilerimizle ilgili güncel içerikler, başvuru süreci ve tematik programlarımız için bizi takip
                etmeye devam edin.
              </p>
            </div>

            <div className="mt-12 flex flex-col md:flex-row justify-center gap-6">
              <Link href="/basvuru/grup-terapileri">
                <Button className="w-full md:w-auto bg-primary hover:bg-primary/80 text-white px-8 py-6 rounded-full text-lg">
                  Başvuru Yap <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/blog">
                <Button
                  variant="outline"
                  className="w-full md:w-auto border-primary text-primary hover:bg-primary/10 px-8 py-6 rounded-full text-lg"
                >
                  Etkinlik Takvimi
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold font-lora italic text-primary mb-10 text-center">
              Grup Terapisinin Faydaları
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <Users className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Sosyal Destek</h3>
                  <p className="text-gray-700">
                    Benzer deneyimlerden geçen kişilerle bir araya gelerek yalnız olmadığınızı fark edersiniz.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <Shield className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Güvenli Alan</h3>
                  <p className="text-gray-700">
                    Gizlilik ilkesi temel alınarak oluşturulmuş güvenli bir ortamda duygularınızı paylaşabilirsiniz.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <Heart className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">İyileşme Süreci</h3>
                  <p className="text-gray-700">
                    Karşılıklı paylaşım sayesinde hem kendi yolunuzu hem de başkalarının yolculuklarını
                    anlamlandırırsınız.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-gray-700">
                Grup terapilerimiz hakkında daha fazla bilgi almak için bize ulaşabilirsiniz.
              </p>
              <Link href="/iletisim" className="inline-block mt-4">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  İletişime Geç
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
