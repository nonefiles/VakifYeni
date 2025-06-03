import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Calendar, Users, BookOpen, Globe, Award } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function FaaliyetlerimizPage() {
  return (
    <div className="container py-16 md:py-24 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center gradient-heading font-lora">Faaliyetlerimiz</h1>

      <p className="text-lg text-center max-w-3xl mx-auto mb-12 font-aristotelica">
        Yol Arkadaşları Psikoloji Vakfı olarak, toplumsal ruh sağlığına katkıda bulunmak ve psikolojik desteğe erişimi
        artırmak için çeşitli faaliyetler yürütüyoruz.
      </p>

      <Tabs defaultValue="etkinlikler" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-3 mb-8 rounded-full bg-accent/30 p-1">
          <TabsTrigger
            value="etkinlikler"
            className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-white"
          >
            Etkinlikler
          </TabsTrigger>
          <TabsTrigger
            value="projeler"
            className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-white"
          >
            Projeler
          </TabsTrigger>
          <TabsTrigger
            value="yayinlar"
            className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-white"
          >
            Yayınlar
          </TabsTrigger>
        </TabsList>

        <TabsContent value="etkinlikler">
          <div className="grid gap-8">
            <Card className="border-0 shadow-md overflow-hidden text-left">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3">
                  <div className="relative h-full min-h-[300px]">
                    <Image
                      src="/placeholder.svg?height=400&width=300&text=Psikoloji Sohbetleri"
                      alt="Psikoloji Sohbetleri"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="flex items-center mb-4">
                    <Calendar className="h-5 w-5 mr-2 text-primary" />
                    <span className="text-sm text-muted-foreground font-aristotelica">Her Çarşamba, 19:00</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-4 font-lora">Psikoloji Sohbetleri</h2>
                  <p className="mb-4 font-aristotelica">
                    Her hafta düzenlediğimiz Psikoloji Sohbetleri'nde, uzman konuklarımızla birlikte ruh sağlığı,
                    psikoloji ve güncel konular hakkında interaktif sohbetler gerçekleştiriyoruz.
                  </p>
                  <p className="mb-4 font-aristotelica">
                    Bu etkinlikler ücretsiz ve herkese açıktır. Katılım için önceden kayıt yaptırmanız gerekmektedir.
                  </p>
                  <Button asChild className="mt-4 gradient-bg-primary">
                    <Link href="/etkinlikler">
                      Etkinlik Takvimi
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="border-0 shadow-md overflow-hidden text-left">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3">
                  <div className="relative h-full min-h-[300px]">
                    <Image
                      src="/placeholder.svg?height=400&width=300&text=Eğitim Seminerleri"
                      alt="Eğitim Seminerleri"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="flex items-center mb-4">
                    <BookOpen className="h-5 w-5 mr-2 text-primary" />
                    <span className="text-sm text-muted-foreground font-aristotelica">Aylık Programlar</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-4 font-lora">Eğitim Seminerleri</h2>
                  <p className="mb-4 font-aristotelica">
                    Ruh sağlığı, kişisel gelişim, ebeveynlik, ilişkiler ve daha birçok konuda düzenlediğimiz eğitim
                    seminerleri ile bilgi ve farkındalık düzeyini artırmayı hedefliyoruz.
                  </p>
                  <p className="mb-4 font-aristotelica">
                    Seminerlerimiz, hem genel katılıma açık hem de kurumlara özel olarak düzenlenebilmektedir.
                  </p>
                  <Button asChild className="mt-4 gradient-bg-primary">
                    <Link href="/etkinlikler">
                      Yaklaşan Seminerler
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="border-0 shadow-md overflow-hidden text-left">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3">
                  <div className="relative h-full min-h-[300px]">
                    <Image
                      src="/placeholder.svg?height=400&width=300&text=Atölye Çalışmaları"
                      alt="Atölye Çalışmaları"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="flex items-center mb-4">
                    <Users className="h-5 w-5 mr-2 text-primary" />
                    <span className="text-sm text-muted-foreground font-aristotelica">İnteraktif Çalışmalar</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-4 font-lora">Atölye Çalışmaları</h2>
                  <p className="mb-4 font-aristotelica">
                    Çeşitli konularda düzenlediğimiz interaktif atölye çalışmaları ile katılımcıların deneyimsel öğrenme
                    yaşamalarını ve yeni beceriler kazanmalarını sağlıyoruz.
                  </p>
                  <p className="mb-4 font-aristotelica">
                    Atölyelerimiz, küçük gruplarla ve uygulamalı olarak gerçekleştirilmektedir.
                  </p>
                  <Button asChild className="mt-4 gradient-bg-primary">
                    <Link href="/etkinlikler">
                      Atölye Programı
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="projeler">
          <div className="grid gap-8">
            <Card className="border-0 shadow-md overflow-hidden text-left">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3">
                  <div className="relative h-full min-h-[300px]">
                    <Image
                      src="/placeholder.svg?height=400&width=300&text=Toplum Ruh Sağlığı"
                      alt="Toplum Ruh Sağlığı Projesi"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="flex items-center mb-4">
                    <Globe className="h-5 w-5 mr-2 text-primary" />
                    <span className="text-sm text-muted-foreground font-aristotelica">Devam Eden Proje</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-4 font-lora">Toplum Ruh Sağlığı Projesi</h2>
                  <p className="mb-4 font-aristotelica">
                    Dezavantajlı bölgelerde yaşayan bireylerin psikolojik desteğe erişimini artırmak ve ruh sağlığı
                    farkındalığını geliştirmek amacıyla yürüttüğümüz projedir.
                  </p>
                  <p className="mb-4 font-aristotelica">
                    Proje kapsamında, ücretsiz psikoterapi hizmetleri, eğitim seminerleri ve farkındalık etkinlikleri
                    düzenlenmektedir.
                  </p>
                  <Button asChild className="mt-4 gradient-bg-primary">
                    <Link href="/projeler/toplum-ruh-sagligi">
                      Proje Detayları
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="border-0 shadow-md overflow-hidden text-left">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3">
                  <div className="relative h-full min-h-[300px]">
                    <Image
                      src="/placeholder.svg?height=400&width=300&text=Genç Uzmanlar"
                      alt="Genç Uzmanlar Projesi"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="flex items-center mb-4">
                    <Award className="h-5 w-5 mr-2 text-primary" />
                    <span className="text-sm text-muted-foreground font-aristotelica">Mentorluk Programı</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-4 font-lora">Genç Uzmanlar Projesi</h2>
                  <p className="mb-4 font-aristotelica">
                    Psikoloji alanında yeni mezun olan veya kariyerinin başındaki genç uzmanlara mentorluk ve
                    süpervizyon desteği sağlayan projedir.
                  </p>
                  <p className="mb-4 font-aristotelica">
                    Proje kapsamında, genç uzmanlar deneyimli psikologlardan süpervizyon alır, mesleki gelişim
                    eğitimlerine katılır ve vakıf bünyesinde staj yapma imkanı bulur.
                  </p>
                  <Button asChild className="mt-4 gradient-bg-primary">
                    <Link href="/projeler/genc-uzmanlar">
                      Proje Detayları
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="yayinlar">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-md overflow-hidden text-left">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=300&width=500&text=Blog Yazıları"
                  alt="Blog Yazıları"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="text-xl font-bold font-lora">Blog Yazıları</h3>
                  </div>
                </div>
              </div>
              <CardContent className="pt-6">
                <p className="font-aristotelica">
                  Uzman psikologlarımız tarafından hazırlanan, ruh sağlığı, psikoloji ve güncel konular hakkında
                  bilgilendirici blog yazıları.
                </p>
                <Button asChild className="mt-4 w-full gradient-bg-primary">
                  <Link href="/blog">
                    Blog'u Ziyaret Et
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md overflow-hidden text-left">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=300&width=500&text=E-Bültenler"
                  alt="E-Bültenler"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="text-xl font-bold font-lora">E-Bültenler</h3>
                  </div>
                </div>
              </div>
              <CardContent className="pt-6">
                <p className="font-aristotelica">
                  Aylık olarak yayınlanan e-bültenlerimiz ile vakıf faaliyetleri, etkinlikler ve psikoloji alanındaki
                  güncel gelişmeler hakkında bilgi edinebilirsiniz.
                </p>
                <Button asChild className="mt-4 w-full gradient-bg-primary">
                  <Link href="/bulten-kayit">
                    Bültene Abone Ol
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md overflow-hidden text-left">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=300&width=500&text=Podcast"
                  alt="Podcast"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="text-xl font-bold font-lora">Podcast</h3>
                  </div>
                </div>
              </div>
              <CardContent className="pt-6">
                <p className="font-aristotelica">
                  Uzman psikologlarımız ve konuklarımızla birlikte hazırladığımız podcast serisi ile ruh sağlığı ve
                  psikoloji konularını derinlemesine ele alıyoruz.
                </p>
                <Button asChild className="mt-4 w-full gradient-bg-primary">
                  <Link href="/podcast">
                    Podcast'leri Dinle
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md overflow-hidden text-left">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=300&width=500&text=Kaynaklar"
                  alt="Kaynaklar"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="text-xl font-bold font-lora">Kaynaklar</h3>
                  </div>
                </div>
              </div>
              <CardContent className="pt-6">
                <p className="font-aristotelica">
                  Ruh sağlığı ve psikoloji alanında faydalı kaynaklar, kitap önerileri, makaleler ve daha fazlası.
                </p>
                <Button asChild className="mt-4 w-full gradient-bg-primary">
                  <Link href="/kaynaklar">
                    Kaynaklara Göz At
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-16 bg-accent/20 p-8 rounded-lg max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 gradient-heading font-lora">Faaliyetlerimize Katılın</h2>
        <p className="text-lg font-aristotelica mb-8">
          Yol Arkadaşları Psikoloji Vakfı'nın düzenlediği etkinliklere katılarak, projelerimize destek olarak veya
          yayınlarımızı takip ederek siz de bu yolculuğun bir parçası olabilirsiniz.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild className="gradient-bg-primary">
            <Link href="/etkinlikler">
              Etkinlik Takvimi
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild className="gradient-bg-primary">
            <Link href="/gonullu-bagis">
              Destek Ol
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
