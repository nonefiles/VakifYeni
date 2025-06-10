import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Lightbulb, Users, BookOpen } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function PsikolojikAtolyelerPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-lora italic text-primary mb-6">Psikoloji Atölyeleri</h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 italic">Deneyimleyerek öğreniyoruz...</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p>
                Yol Arkadaşları Psikoloji Vakfı olarak, bilgiye yalnızca ulaşmanın değil, onu birlikte deneyimlemenin de
                dönüştürücü gücüne inanıyoruz.
                <br />
                Bu inançla, <strong>Yol Arkadaşları Danışmanlık Merkezi'nin uzman desteğiyle</strong> yürüttüğümüz
                atölye çalışmaları, katılımcıların hem kendilerini tanımalarına hem de psikoloji bilgilerini pratikle
                derinleştirmelerine alan açıyor.
              </p>

              <p className="font-medium text-lg mt-6">
                Atölyelerimiz; ruh sağlığına ilgi duyan, kişisel gelişimine katkı sunmak isteyen herkes için tasarlandı.
                Etkileşimli, güvenli ve içten bir öğrenme ortamı sunan bu buluşmalar, kimi zaman bir duygu üzerine
                düşünmeyi, kimi zaman bir beceriyi birlikte geliştirmeyi amaçlıyor.
              </p>

              <p className="text-lg font-bold mt-8 text-primary">Tüm atölye çalışmalarımız ücretsizdir.</p>

              <p className="italic">
                Açılacak olan atölye programlarımızdan haberdar olmak için bültenimize kayıt olabilir ve bizi instagram
                hesabımızdan takip edebilirsiniz.
              </p>
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

      {/* Workshop Types */}
      <section className="py-12 md:py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold font-lora italic text-primary mb-10 text-center">
              Atölye Çalışmalarımız
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <Lightbulb className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Farkındalık Atölyeleri</h3>
                  <p className="text-gray-700">Duygu farkındalığı, mindfulness ve şimdiki ana odaklanma çalışmaları.</p>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <Users className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">İletişim Becerileri</h3>
                  <p className="text-gray-700">Etkili iletişim, çatışma çözümü ve empati geliştirme çalışmaları.</p>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <BookOpen className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Kişisel Gelişim</h3>
                  <p className="text-gray-700">
                    Öz-şefkat, dayanıklılık ve kişisel sınırlar üzerine pratik çalışmalar.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Workshops */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold font-lora italic text-primary mb-10 text-center">Örnek Atölyelerimiz</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
                <div className="relative h-48 w-full">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Mindfulness Atölyesi"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2">Mindfulness Atölyesi</h4>
                  <p className="text-gray-700 mb-4">
                    Günlük yaşamda farkındalık pratikleri ve stres yönetimi teknikleri üzerine interaktif bir atölye.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
                <div className="relative h-48 w-full">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Duygusal Zeka Atölyesi"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2">Duygusal Zeka Atölyesi</h4>
                  <p className="text-gray-700 mb-4">
                    Duyguları tanıma, anlama ve yönetme becerileri geliştirmeye yönelik uygulamalı çalışmalar.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link href="/blog">
                <Button className="bg-primary hover:bg-primary/80 text-white">Tüm Etkinlikleri Görüntüle</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
