"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Calendar, Users, BookOpen } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState, Suspense } from "react"

function FaaliyetlerimizContent() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("etkinlikler")

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search)
      const tabFromUrl = urlParams.get("tab")
      if (tabFromUrl && ["etkinlikler", "projeler", "yayinlar"].includes(tabFromUrl)) {
        setActiveTab(tabFromUrl)
      }
    }
  }, [])

  const handleTabChange = (value) => {
    setActiveTab(value)
    if (typeof window !== 'undefined') {
      const url = new URL(window.location)
      url.searchParams.set("tab", value)
      router.push(url.pathname + url.search, { scroll: false })
    }
  }

  return (
    <div className="container py-16 md:py-24 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center gradient-heading font-lora">Faaliyetlerimiz</h1>

      <p className="text-lg text-center max-w-3xl mx-auto mb-12 font-aristotelica">
        Yol Arkadaşları Psikoloji Vakfı olarak, toplumsal ruh sağlığına katkıda bulunmak ve psikolojik desteğe erişimi
        artırmak için çeşitli faaliyetler yürütüyoruz.
      </p>

      <Tabs value={activeTab} onValueChange={handleTabChange} className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-3 mb-8 rounded-full bg-accent/30 p-1">
          <TabsTrigger value="etkinlikler" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-white">Etkinlikler</TabsTrigger>
          <TabsTrigger value="projeler" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-white">Projeler</TabsTrigger>
          <TabsTrigger value="yayinlar" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-white">Yayınlar</TabsTrigger>
        </TabsList>

        <TabsContent value="etkinlikler">
          <div className="grid gap-8">
            <Card className="border-0 shadow-md overflow-hidden text-center">
              <div className="md:w-full p-6">
                <div className="flex items-center justify-center mb-4">
                  <Calendar className="h-5 w-5 mr-2 text-primary" />
                  <span className="text-sm text-muted-foreground font-aristotelica">Her Perşembe, 19:00</span>
                </div>
                <h2 className="text-2xl font-bold mb-4 font-lora text-center">Ücretsiz Psikoloji Sohbetleri</h2>
                <p className="mb-4 font-aristotelica text-center">
                  Psikoloji sohbetlerimiz, zihnimizi açmak ve ruhumuzu beslemek için bir araya geldiğimiz özel buluşmalardır.
                  Uzmanlarımızın rehberliğinde, güncel konuları içtenlikle paylaşır, anlamlı sohbetlerle farkındalık yaratırız.
                  Bu sıcak ortamda yalnız olmadığınızı hissedecek, paylaştıkça güçleneceksiniz. 
                </p>
                <p className="mb-4 font-aristotelica text-center">
                  Bu etkinlikler ücretsiz ve herkese açıktır. Katılım için önceden kayıt yaptırmanız gerekmektedir.
                </p>
                <div className="flex justify-center">
                  <Button asChild className="mt-4 gradient-bg-primary">
                    <Link href="/etkinlikler">Etkinlik Takvimi<ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="border-0 shadow-md overflow-hidden text-center">
              <div className="md:w-full p-6">
                <div className="flex items-center justify-center mb-4">
                  <BookOpen className="h-5 w-5 mr-2 text-primary" />
                  <span className="text-sm text-muted-foreground font-aristotelica">Yayın</span>
                </div>
                <h2 className="text-2xl font-bold mb-4 font-lora text-center">Dil Zekası</h2>
                <p className="mb-4 font-aristotelica text-center">
                  Bu kitap, iletişimdeki gerçek gücünüz olan "Dil Zekanızı" keşfetmeniz için yazıldı. Dil Zekanızı geliştirmek için kullanabileceğiniz teknikler, kitapta herkesin anlayabileceği bir kolaylıkla sunuluyor.
                </p>
                <p className="mb-4 font-aristotelica text-center">
                  Her bölümde verilen anahtar sözcüklerle, okuma esnasında hangi sözcükler üzerinde odaklanacağınızı göreceksiniz. İpucu bölümü sizi konu hakkında pratik yaklaşımlarla donatıyor. Her bölümde konuyla ilgili bir resim, bir söz, bir öykü, bir anekdot anlatılan teknikleri desteklerken, esere canlı ve hoş bir okuma havası katılıyor. Tablolar, sorular ve uygulamalarla gündelik hayatınızda bu teknikleri uygulamanızı kolaylaştıracak yaklaşımlar bulacak, kendinize sorular soracak, uygulamalar yapacaksınız.
                </p>
              </div>
            </Card>

            <Card className="border-0 shadow-md overflow-hidden text-center">
              <div className="md:w-full p-6">
                <div className="flex items-center justify-center mb-4">
                  <Users className="h-5 w-5 mr-2 text-primary" />
                  <span className="text-sm text-muted-foreground font-aristotelica">İnteraktif Çalışmalar</span>
                </div>
                <h2 className="text-2xl font-bold mb-4 font-lora text-center">Atölye Çalışmaları</h2>
                <p className="mb-4 font-aristotelica text-center">
                  Atölyelerimiz, kendinizi keşfetmeniz ve içsel yolculuğunuzda cesur adımlar atmanız için tasarlandı.
                  Birlikte deneyimleyerek öğrenir, duygulara dokunur ve yeni farkındalıklar kazanırız.
                  Her atölye, size özel bir alan yaratır; güvenle paylaşır, desteklenir ve büyürüz.
                </p>
                <p className="mb-4 font-aristotelica text-center">
                  Atölyelerimiz, küçük gruplarla ve uygulamalı olarak gerçekleştirilmektedir.
                </p>
                <div className="flex justify-center">
                  <Button asChild className="mt-4 gradient-bg-primary">
                    <Link href="/hizmetlerimiz/psikoloji-atolyeleri">Atölye Programı<ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="projeler">
          <div className="grid gap-8">
            <Card className="border-0 shadow-md overflow-hidden text-center">
              <div className="md:w-full p-6">
                <div className="flex items-center justify-center mb-4">
                  <BookOpen className="h-5 w-5 mr-2 text-primary" />
                  <span className="text-sm text-muted-foreground font-aristotelica">Yayın</span>
                </div>
                <h2 className="text-2xl font-bold mb-4 font-lora text-center">Dil Zekası</h2>
                <p className="mb-4 font-aristotelica text-center">
                  Bu kitap, iletişimdeki gerçek gücünüz olan "Dil Zekanızı" keşfetmeniz için yazıldı. Dil Zekanızı geliştirmek için kullanabileceğiniz teknikler, kitapta herkesin anlayabileceği bir kolaylıkla sunuluyor.
                </p>
                <p className="mb-4 font-aristotelica text-center">
                  Her bölümde verilen anahtar sözcükler, ipucu bölümleri, tablolar, sorular ve uygulamalarla gündelik hayatınızda bu teknikleri uygulamanızı kolaylaştıracak yaklaşımlar bulacaksınız.
                </p>
              </div>
            </Card>

            <Card className="border-0 shadow-md overflow-hidden text-center">
              <div className="md:w-full p-6">
                <h2 className="text-2xl font-bold mb-4 font-lora text-center">Çocuğun Yol Arkadaşı Projesi</h2>
                <p className="mb-4 font-aristotelica text-center">
                  "Çocuğun Yol Arkadaşı" çocuk ve gençlere evde destek vermek için özel olarak eğitilmiş, Psikoloji, Psikolojik Danışmanlık ve Rehberlik, Sosyal Hizmet ve Çocuk Gelişimi gibi alanlarda eğitim gören son sınıf öğrencileri veya mezunlardan oluşur.
                  Yol Arkadaşları Danışmanlık Merkezi olarak, çocukların erken yaşlarda yetenek ve gelişim alanlarının keşfedilmesini önemsiyoruz. Çocukların sadece zekâ skoru üzerinden değil, çok yönlü bir yaklaşımla potansiyellerini fark etmelerine yardımcı olmayı hedefliyoruz.
                  Bu proje, ailelere çocuklarının gelişim alanları hakkında rehberlik ve bilinç kazandırma amacını taşır.
                </p>
                <div className="flex justify-center">
                  <Button asChild className="mt-4 gradient-bg-primary">
                    <Link href="/projeler/genc-uzmanlar">Proje Detayları<ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="yayinlar">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-md overflow-hidden text-center">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold font-lora mb-4">Blog Yazıları</h3>
                <p className="font-aristotelica text-center">
                  Uzman psikologlarımız tarafından hazırlanan, ruh sağlığı, psikoloji ve güncel konular hakkında
                  bilgilendirici blog yazıları.
                </p>
                <Button asChild className="mt-4 w-full gradient-bg-primary">
                  <Link href="/blog">Blog'u Ziyaret Et<ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md overflow-hidden text-center">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold font-lora mb-4">E-Bültenler</h3>
                <p className="font-aristotelica text-center">
                  Aylık olarak yayınlanan e-bültenlerimiz ile vakıf faaliyetleri, etkinlikler ve psikoloji alanındaki
                  güncel gelişmeler hakkında bilgi edinebilirsiniz.
                </p>
                <Button asChild className="mt-4 w-full gradient-bg-primary">
                  <Link href="/bulten-kayit">Bültene Abone Ol<ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-16 bg-accent/20 p-8 rounded-lg max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 gradient-heading font-lora text-center">Faaliyetlerimize Katılın</h2>
        <p className="text-lg text-center font-aristotelica mb-8">
          Yol Arkadaşları Psikoloji Vakfı'nın düzenlediği etkinliklere katılarak, projelerimize destek olarak veya
          yayınlarımızı takip ederek siz de bu yolculuğun bir parçası olabilirsiniz.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild className="gradient-bg-primary">
            <Link href="/etkinlikler">Etkinlik Takvimi<ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
          <Button asChild className="gradient-bg-primary">
            <Link href="/gonullu-bagis">Destek Ol<ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default function FaaliyetlerimizPage() {
  return (
    <Suspense fallback={<div>Yükleniyor...</div>}>
      <FaaliyetlerimizContent />
    </Suspense>
  )
}
