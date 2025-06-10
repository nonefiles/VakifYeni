import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, MessageCircle, Calendar, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function PsikolojiSohbetleriPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-lora italic text-primary mb-6">Psikoloji Sohbetleri</h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 italic">
              Bilgiyle besleniyor, söyleşilerle derinleşiyoruz...
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
                Yol Arkadaşları Psikoloji Vakfı olarak, ruh sağlığı alanında toplumsal farkındalık yaratmak ve güvenli
                bir paylaşım alanı sunmak için buradayız. Her hafta, Yol Arkadaşları Danışmanlık Merkezi'nin uzman
                desteğiyle gerçekleştirdiğimiz <em>psikoloji sohbetlerinde</em>, birlikte düşünüyor, birlikte
                öğreniyoruz.
              </p>

              <p className="font-medium text-lg mt-6">
                Bu sohbetler; psikolojiye ilgi duyan, zihnini açmak ve iç dünyasını tanımak isteyen herkes için… Uzman
                olmanıza gerek yok. Sadece dinlemek, sormak ve paylaşmak yeterli.
              </p>

              <p>
                Her buluşmada, ruh sağlığını ilgilendiren güncel konuları ele alıyor, psikolojiyi günlük yaşamın içinden
                konuşuyoruz.
                <br />
                Çünkü inanıyoruz ki: Bilgiyle beslenmek ve birlikte derinleşmek, bireyin olduğu kadar toplumun da
                dönüşümüne katkı sağlar.
              </p>

              <p className="text-lg font-bold mt-8 text-primary">Etkinliklerimiz ücretsizdir.</p>
            </div>

            <div className="mt-12 flex flex-col md:flex-row justify-center gap-6">
              <Link href="/blog">
                <Button className="w-full md:w-auto bg-primary hover:bg-primary/80 text-white px-8 py-6 rounded-full text-lg">
                  Etkinlik Takvimi <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/iletisim">
                <Button
                  variant="outline"
                  className="w-full md:w-auto border-primary text-primary hover:bg-primary/10 px-8 py-6 rounded-full text-lg"
                >
                  Bize Ulaşın
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold font-lora italic text-primary mb-10 text-center">
              Psikoloji Sohbetlerimiz
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <MessageCircle className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">İnteraktif Format</h3>
                  <p className="text-gray-700">Soru-cevap ve tartışma bölümleriyle aktif katılım sağlayabilirsiniz.</p>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <Calendar className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Düzenli Buluşmalar</h3>
                  <p className="text-gray-700">Her hafta farklı konularda düzenli olarak gerçekleştirilen sohbetler.</p>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <Users className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Uzman Konuşmacılar</h3>
                  <p className="text-gray-700">
                    Alanında uzman psikologlar ve ruh sağlığı profesyonelleri tarafından yürütülür.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-16">
              <h3 className="text-2xl font-bold font-lora italic text-primary mb-6 text-center">
                Geçmiş Etkinliklerimizden
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
                  <div className="relative h-48 w-full">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Psikoloji Sohbeti"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2">Kaygı ve Başa Çıkma Yöntemleri</h4>
                    <p className="text-gray-700 mb-4">
                      Modern yaşamda kaygı ve stresle başa çıkma stratejileri üzerine interaktif bir sohbet.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
                  <div className="relative h-48 w-full">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Psikoloji Sohbeti"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2">İlişkilerde İletişim</h4>
                    <p className="text-gray-700 mb-4">
                      Sağlıklı ilişkiler için etkili iletişim becerileri ve empati üzerine bir sohbet.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
