import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function DonatePage() {
  return (
    <div className="bg-gradient-to-b from-[#ECECE8] to-[#f8f9fa]">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#eff6ff]/50 to-[#ECECE8] text-center">
        <div className="container">
          <h1 className="mb-6 text-4xl font-bold gradient-heading md:text-5xl" style={{ fontFamily: 'Lora', fontStyle: 'italic' }}>
            Bağış Yap
          </h1>
          <div className="mx-auto max-w-3xl">
            <p className="text-lg text-foreground/80 text-center" style={{ fontFamily: 'Arial, sans-serif' }}>
              Bağışlarınız, ücretsiz terapi hizmetleri ve sosyal sorumluluk projelerimizin sürdürülebilirliğini sağlamak için çok kıymetli.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-[#ECECE8] text-center">
        <div className="container">
          <h2 className="mb-10 text-3xl font-bold gradient-heading" style={{ fontFamily: 'Lora', fontStyle: 'italic' }}>
            Bağışınızın Etkisi
          </h2>
          <p className="text-lg text-center text-foreground/80 max-w-3xl mx-auto" style={{ fontFamily: 'Arial, sans-serif' }}>
            Bağışlarınız, ihtiyaç sahibi bireylere psikolojik destek sağlamak için kullanılmaktadır.
          </p>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-16 bg-gradient-to-b from-[#ECECE8] to-[#eff6ff]/30">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-10 text-3xl font-bold gradient-heading text-center" style={{ fontFamily: 'Lora', fontStyle: 'italic' }}>
              Bağış Yap
            </h2>

            <Card className="bg-white/80 backdrop-blur-sm border border-primary/10">
              <CardHeader className="text-center">
                <CardTitle className="gradient-heading" style={{ fontFamily: 'Lora', fontStyle: 'italic' }}>
                  Bağış Formu
                </CardTitle>
                <CardDescription className="text-center" style={{ fontFamily: 'Arial, sans-serif' }}>
                  Bağışınızla, psikolojik desteğe ihtiyaç duyan ancak maddi imkânları kısıtlı olan bireylere umut olabilirsiniz.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="bank-transfer" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-6 rounded-full bg-accent/30 p-1">
                    <TabsTrigger value="bank-transfer" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-white">
                      Banka Havalesi
                    </TabsTrigger>
                    <TabsTrigger value="other" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-white">
                      Diğer Yöntemler
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="bank-transfer" className="mt-6 space-y-6">
                    <div className="rounded-xl bg-accent/50 p-6 border border-primary/10">
                      <h3 className="mb-4 text-lg font-bold gradient-heading text-center" style={{ fontFamily: 'Lora', fontStyle: 'italic' }}>
                        Banka Hesap Bilgileri
                      </h3>
                      <div className="space-y-4">
                        {[
                          ["BIC:", "TCZBTR2A"],
                          ["Banka:", "Ziraat Bankası"],
                          ["Şube:", "798- Çankaya/Ankara"],
                          ["Hesap Adı:", "YILMAZ YOL ARKADAŞLARI VAKFI"],
                          ["Hesap No:", "798980120335001"],
                          ["Para Birimi:", "TRY"],
                          ["IBAN:", "TR32001000798980120335001"],
                          ["Açıklama:", " "]
                        ].map(([label, value]) => (
                          <div className="grid grid-cols-3 gap-2 text-left" key={label}>
                            <div className="font-medium" style={{ fontFamily: 'Arial, sans-serif' }}>{label}</div>
                            <div className="col-span-2" style={{ fontFamily: 'Arial, sans-serif' }}>{value}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-xl bg-accent/50 p-6 border border-primary/10">
                      <h3 className="mb-4 text-lg font-bold gradient-heading text-center" style={{ fontFamily: 'Lora', fontStyle: 'italic' }}>
                        İletişim Bilgileri
                      </h3>
                      <p className="text-gray-600 text-center mb-4" style={{ fontFamily: 'Arial, sans-serif' }}>
                        Bağış işleminizle ilgili sorularınız için bizimle iletişime geçebilirsiniz:
                      </p>
                      <div className="space-y-2">
                        <div className="grid grid-cols-3 gap-2 text-left">
                          <div className="font-medium" style={{ fontFamily: 'Arial, sans-serif' }}>Telefon:</div>
                          <div className="col-span-2" style={{ fontFamily: 'Arial, sans-serif' }}+90 539 889 33 75</div>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-left">
                          <div className="font-medium" style={{ fontFamily: 'Arial, sans-serif' }}>E-posta:</div>
                          <div className="col-span-2" style={{ fontFamily: 'Arial, sans-serif' }}>
                            <a href="mailto:bagis@yolarkadaslari.org" className="text-primary hover:underline">
                              bagis@yolarkadaslari.org
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-xl bg-accent/50 p-6 border border-primary/10">
                      <h3 className="mb-4 text-lg font-bold gradient-heading text-center" style={{ fontFamily: 'Lora', fontStyle: 'italic' }}>
                        Ayni Bağışlar
                      </h3>
                      <p className="text-gray-600 text-center" style={{ fontFamily: 'Arial, sans-serif' }}>
                        Vakfımıza ayni bağış (eşya, malzeme, hizmet vb.) yapmak isterseniz, lütfen bizimle iletişime geçin.
                        İhtiyaç listemizi paylaşalım ve en uygun şekilde nasıl destek olabileceğinizi birlikte değerlendirelim.
                      </p>
                    </div>
                  </TabsContent>

                  <TabsContent value="other" className="mt-6 space-y-6">
                    <div className="rounded-xl bg-accent/50 p-6 border border-primary/10">
                      <h3 className="mb-4 text-lg font-bold gradient-heading text-center" style={{ fontFamily: 'Lora', fontStyle: 'italic' }}>
                        Diğer Bağış Yöntemleri
                      </h3>
                      <p className="text-gray-600 text-center mb-4" style={{ fontFamily: 'Arial, sans-serif' }}>
                        Alternatif bağış yöntemleri için lütfen bizimle iletişime geçin.
                      </p>
                      <div className="text-center">
                        <a href="mailto:bagis@yolarkadaslari.org" className="text-primary hover:underline" style={{ fontFamily: 'Arial, sans-serif' }}>
                          bagis@yolarkadaslari.org
                        </a>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
              <CardFooter className="flex flex-col space-y-4 text-sm text-gray-600 text-center" style={{ fontFamily: 'Arial, sans-serif' }}>
                <p>Bağışlarınız için teşekkür ederiz. Bağışınızın makbuzu e-posta adresinize gönderilecektir.</p>
                <p>
                  Sorularınız için{" "}
                  <a href="mailto:info@yolarkadaslari.org" className="text-primary hover:underline">
                    info@yolarkadaslari.org
                  </a>{" "}
                  adresine e-posta gönderebilirsiniz.
                </p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="py-16 bg-gradient-to-b from-[#eff6ff]/30 to-[#f8f9fa]">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold gradient-heading text-center" style={{ fontFamily: 'Lora', fontStyle: 'italic' }}>
              Şeffaflık İlkemiz
            </h2>
            <p className="mb-8 text-lg text-foreground/80 text-center" style={{ fontFamily: 'Arial, sans-serif' }}>
              Yol Arkadaşları Psikoloji Vakfı olarak, bağışçılarımıza karşı şeffaf olmayı ve hesap verebilirliği temel
              değerlerimiz arasında görüyoruz.
            </p>
            <div className="rounded-xl bg-white/80 backdrop-blur-sm p-6 border border-primary/10">
              <ul className="space-y-4 text-left text-gray-600" style={{ fontFamily: 'Arial, sans-serif' }}>
                {[
                  "Tüm bağışlar, vakfımızın resmi hesaplarına kaydedilir ve yasal mevzuata uygun şekilde raporlanır.",
                  "Bağışlarınızın nasıl kullanıldığına dair düzenli raporlar web sitemizde yayınlanır.",
                  "Her yıl faaliyet raporumuz ve mali tablolarımız kamuoyuyla paylaşılır.",
                  "Bağışçılarımız, desteklerinin etkisini görebilmek için vakıf çalışmalarımızı yakından takip edebilirler."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-2 mt-1 text-primary">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
