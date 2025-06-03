import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Handshake, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function GonulluBagisPage() {
  return (
    <div className="container py-16 md:py-24 text-center bg-white">
      <h1
        className="text-4xl md:text-5xl font-bold mb-8 text-center text-[#2563eb]"
        style={{ fontFamily: "Lora, 'Lora Fallback', serif" }}
      >
        Destek Ol
      </h1>
      <p className="text-lg text-center max-w-3xl mx-auto mb-12 font-aristotelica">
        Yol Arkadaşları Psikoloji Vakfı'na gönüllü olarak veya bağış yaparak destek olabilir, ruh sağlığı hizmetlerine
        erişimde fırsat eşitliği yaratma vizyonumuza katkıda bulunabilirsiniz.
      </p>

      <Tabs defaultValue="gonullu" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-2 mb-8 rounded-full bg-accent/30 p-1">
          <TabsTrigger
            value="gonullu"
            className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-white"
          >
            Gönüllü Ol
          </TabsTrigger>
          <TabsTrigger
            value="bagis"
            className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-white"
          >
            Bağış Yap
          </TabsTrigger>
        </TabsList>

        <TabsContent value="gonullu">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full gradient-bg-primary mx-auto">
                  <Handshake className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-[#2563eb]" style={{ fontFamily: "Lora, 'Lora Fallback', serif" }}>
                  Gönüllü Olmanın Önemi
                </CardTitle>
                <CardDescription className="font-aristotelica">Birlikte daha güçlüyüz</CardDescription>
              </CardHeader>
              <CardContent className="font-aristotelica">
                <p className="mb-4">
                  Gönüllülerimiz, vakfımızın en değerli kaynağıdır. Onların emekleri ve destekleri sayesinde, daha fazla
                  kişiye ulaşabilir, daha fazla hayata dokunabiliriz.
                </p>
                <p>
                  Gönüllü olmak, sadece başkalarına yardım etmek değil, aynı zamanda kişisel gelişim, yeni beceriler
                  kazanma ve anlamlı bir topluluğun parçası olma fırsatıdır.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-2xl text-[#2563eb]" style={{ fontFamily: "Lora, 'Lora Fallback', serif" }}>
                  Gönüllü Alanları
                </CardTitle>
                <CardDescription className="font-aristotelica">
                  Yetenek ve ilgi alanınıza göre destek olun
                </CardDescription>
              </CardHeader>
              <CardContent className="font-aristotelica">
                <ul className="space-y-3 text-left">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5" />
                    <span>Psikolojik destek (uzman psikologlar için)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5" />
                    <span>Eğitim ve seminer organizasyonları</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5" />
                    <span>Sosyal medya ve içerik üretimi</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5" />
                    <span>İdari destek ve organizasyon</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5" />
                    <span>Etkinlik koordinasyonu</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full gradient-bg-primary">
                  <Link href="/gonullu-ol">
                    Gönüllü Başvuru Formu
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="bagis">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary mx-auto">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <CardTitle
                  className="text-2xl italic text-[#2563eb]"
                  style={{ fontFamily: "Lora, 'Lora Fallback', serif" }}
                >
                  Bağışınızın Etkisi
                </CardTitle>
                <CardDescription>Her katkı değerlidir</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-left">
                  Bağışlarınız sayesinde, maddi imkânsızlıklar nedeniyle psikolojik desteğe erişemeyen bireylere
                  ücretsiz hizmet sunuyor, genç uzmanların gelişimine katkıda bulunuyor ve toplumsal ruh sağlığı
                  bilincini artırmak için çalışmalar yürütüyoruz.
                </p>
                <p className="text-left">
                  Yapacağınız her bağış, bir kişinin hayatında fark yaratma potansiyeline sahiptir.
                </p>
              </CardContent>
            </Card>

            <Card className="text-left">
              <CardHeader>
                <CardTitle
                  className="text-2xl italic text-[#2563eb]"
                  style={{ fontFamily: "Lora, 'Lora Fallback', serif" }}
                >
                  Bağış Seçenekleri
                </CardTitle>
                <CardDescription>Size uygun yöntemi seçin</CardDescription>
              </CardHeader>
              <CardContent>
                  <div className="p-4 border rounded-lg">
                    <h4
                      className="font-bold mb-2 text-[#2563eb]"
                      style={{ fontFamily: "Lora, 'Lora Fallback', serif" }}
                    >
                      Alternatif Banka Hesabı
                    </h4>
                    <p className="mb-2">Yol Arkadaşları Psikoloji Vakfı</p>
                    <p className="mb-2">Banka: Ziraat Bankası</p>
                    <p className="mb-2">Şube: Ankara Kızılay (5678)</p>
                    <p className="mb-2">Hesap No: 0987654321</p>
                    <p className="mb-2">IBAN: TR98 7654 3210 9876 5432 1098 76</p>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <h4
                      className="font-bold mb-2 text-[#2563eb]"
                      style={{ fontFamily: "Lora, 'Lora Fallback', serif" }}
                    >
                      Online Bağış
                    </h4>
                    <p className="mb-4">
                      Güvenli ödeme altyapımız ile kredi kartı veya banka kartı ile bağış yapabilirsiniz.
                    </p>
                    <Button asChild className="w-full bg-primary text-white">
                      <Link href="/bagis-yap">
                        Online Bağış Yap
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-6 text-[#2563eb]" style={{ fontFamily: "Lora, 'Lora Fallback', serif" }}>
          Destekçilerimiz
        </h2>
        <p className="text-lg max-w-3xl mx-auto mb-12 font-aristotelica">
          Yol Arkadaşları Psikoloji Vakfı'na destek olan tüm kurumsal ve bireysel destekçilerimize teşekkür ederiz.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto opacity-70">
          <div className="flex items-center justify-center p-4">
            <Image src="/placeholder.svg?height=80&width=160" alt="Destekçi Logo" width={160} height={80} />
          </div>
          <div className="flex items-center justify-center p-4">
            <Image src="/placeholder.svg?height=80&width=160" alt="Destekçi Logo" width={160} height={80} />
          </div>
          <div className="flex items-center justify-center p-4">
            <Image src="/placeholder.svg?height=80&width=160" alt="Destekçi Logo" width={160} height={80} />
          </div>
          <div className="flex items-center justify-center p-4">
            <Image src="/placeholder.svg?height=80&width=160" alt="Destekçi Logo" width={160} height={80} />
          </div>
        </div>
      </div>
    </div>
  )
}
