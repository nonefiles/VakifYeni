import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { HeartHandshake, Users, BookOpen } from "lucide-react"
import { SectionDivider } from "@/components/section-divider"

export default function DonatePage() {
  return (
    <div className="bg-gradient-to-b from-[#ECECE8] to-[#f8f9fa]">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#eff6ff]/50 to-[#ECECE8]">
        <div className="container">
          <h1 className="mb-6 text-left text-4xl font-bold gradient-heading md:text-5xl font-lora">Bağış Yap</h1>
          <div className="mx-auto max-w-3xl text-left">
            <p className="text-lg text-foreground/80 font-aristotelica">
              Bağışlarınız, ücretsiz terapi hizmetleri ve sosyal sorumluluk projelerimizin sürdürülebilirliğini sağlamak
              için çok kıymetli.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Impact Section */}
      <section className="py-16 bg-[#ECECE8]">
        <div className="container">
          <h2 className="mb-10 text-left text-3xl font-bold gradient-heading font-lora">Bağışınızın Etkisi</h2>

          <div className="grid gap-8 md:grid-cols-3">
            <ImpactCard
              icon={<HeartHandshake className="h-10 w-10 text-primary" />}
              title="50 TL"
              description="Bir kişinin 1 seans ücretsiz psikoterapi almasını sağlar."
            />
            <ImpactCard
              icon={<Users className="h-10 w-10 text-primary" />}
              title="200 TL"
              description="Bir grup terapisi oturumunun gerçekleştirilmesine katkı sağlar."
            />
            <ImpactCard
              icon={<BookOpen className="h-10 w-10 text-primary" />}
              title="500 TL"
              description="Bir psikoloji atölyesinin düzenlenmesini mümkün kılar."
            />
          </div>
        </div>
      </section>

      <SectionDivider className="rotate-180" />

      {/* Donation Form */}
      <section className="py-16 bg-gradient-to-b from-[#ECECE8] to-[#eff6ff]/30">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-10 text-left text-3xl font-bold gradient-heading font-lora">Bağış Yap</h2>

            <Card className="bg-white/80 backdrop-blur-sm border border-primary/10">
              <CardHeader>
                <CardTitle className="text-left font-lora gradient-heading">Bağış Formu</CardTitle>
                <CardDescription className="text-left font-aristotelica">
                  Bağışınızla, psikolojik desteğe ihtiyaç duyan ancak maddi imkânları kısıtlı olan bireylere umut
                  olabilirsiniz.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="credit-card" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 mb-6 rounded-full bg-accent/30 p-1">
                    <TabsTrigger
                      value="credit-card"
                      className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-white"
                    >
                      Kredi Kartı
                    </TabsTrigger>
                    <TabsTrigger
                      value="bank-transfer"
                      className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-white"
                    >
                      Banka Havalesi
                    </TabsTrigger>
                    <TabsTrigger
                      value="other"
                      className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-white"
                    >
                      Diğer Yöntemler
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="credit-card" className="mt-6 space-y-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label className="font-aristotelica">Bağış Tutarı</Label>
                        <RadioGroup defaultValue="50">
                          <div className="grid grid-cols-3 gap-4">
                            <div className="flex items-center justify-center rounded-md border border-primary/20 p-4 hover:bg-accent transition-all duration-200">
                              <RadioGroupItem value="50" id="amount-50" className="sr-only" />
                              <Label htmlFor="amount-50" className="cursor-pointer font-medium font-aristotelica">
                                50 TL
                              </Label>
                            </div>
                            <div className="flex items-center justify-center rounded-md border border-primary/20 p-4 hover:bg-accent transition-all duration-200">
                              <RadioGroupItem value="100" id="amount-100" className="sr-only" />
                              <Label htmlFor="amount-100" className="cursor-pointer font-medium font-aristotelica">
                                100 TL
                              </Label>
                            </div>
                            <div className="flex items-center justify-center rounded-md border border-primary/20 p-4 hover:bg-accent transition-all duration-200">
                              <RadioGroupItem value="200" id="amount-200" className="sr-only" />
                              <Label htmlFor="amount-200" className="cursor-pointer font-medium font-aristotelica">
                                200 TL
                              </Label>
                            </div>
                            <div className="flex items-center justify-center rounded-md border border-primary/20 p-4 hover:bg-accent transition-all duration-200">
                              <RadioGroupItem value="500" id="amount-500" className="sr-only" />
                              <Label htmlFor="amount-500" className="cursor-pointer font-medium font-aristotelica">
                                500 TL
                              </Label>
                            </div>
                            <div className="flex items-center justify-center rounded-md border border-primary/20 p-4 hover:bg-accent transition-all duration-200">
                              <RadioGroupItem value="1000" id="amount-1000" className="sr-only" />
                              <Label htmlFor="amount-1000" className="cursor-pointer font-medium font-aristotelica">
                                1000 TL
                              </Label>
                            </div>
                            <div className="flex items-center justify-center rounded-md border border-primary/20 p-4 hover:bg-accent transition-all duration-200">
                              <RadioGroupItem value="other" id="amount-other" className="sr-only" />
                              <Label htmlFor="amount-other" className="cursor-pointer font-medium font-aristotelica">
                                Diğer
                              </Label>
                            </div>
                          </div>
                        </RadioGroup>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="custom-amount" className="font-aristotelica">
                          Özel Tutar (TL)
                        </Label>
                        <Input
                          id="custom-amount"
                          type="number"
                          placeholder="Tutar giriniz"
                          className="border-primary/20 focus:border-primary"
                        />
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="font-aristotelica">
                            Ad Soyad
                          </Label>
                          <Input id="name" className="border-primary/20 focus:border-primary" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="font-aristotelica">
                            E-posta
                          </Label>
                          <Input id="email" type="email" className="border-primary/20 focus:border-primary" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="card-number" className="font-aristotelica">
                          Kart Numarası
                        </Label>
                        <Input
                          id="card-number"
                          placeholder="1234 5678 9012 3456"
                          className="border-primary/20 focus:border-primary"
                        />
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="expiry" className="font-aristotelica">
                            Son Kullanma Tarihi
                          </Label>
                          <Input id="expiry" placeholder="AA/YY" className="border-primary/20 focus:border-primary" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvv" className="font-aristotelica">
                            CVV
                          </Label>
                          <Input id="cvv" placeholder="123" className="border-primary/20 focus:border-primary" />
                        </div>
                      </div>

                      <Button className="w-full bg-primary text-white hover:bg-primary/90 transition-all duration-300">
                        Bağış Yap
                      </Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="bank-transfer" className="mt-6 space-y-6">
                    <div className="rounded-xl bg-accent/50 p-6 border border-primary/10">
                      <h3 className="mb-4 text-lg font-bold gradient-heading text-left font-lora">
                        Banka Hesap Bilgileri
                      </h3>
                      <div className="space-y-4">
                        <div className="grid grid-cols-3 gap-2">
                          <div className="font-medium font-aristotelica">Banka:</div>
                          <div className="col-span-2 font-aristotelica">Ziraat Bankası</div>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          <div className="font-medium font-aristotelica">Şube:</div>
                          <div className="col-span-2 font-aristotelica">Ankara Şubesi (123)</div>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          <div className="font-medium font-aristotelica">Hesap Adı:</div>
                          <div className="col-span-2 font-aristotelica">Yol Arkadaşları Psikoloji Vakfı</div>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          <div className="font-medium font-aristotelica">IBAN:</div>
                          <div className="col-span-2 font-aristotelica">TR12 3456 7890 1234 5678 9012 34</div>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          <div className="font-medium font-aristotelica">Açıklama:</div>
                          <div className="col-span-2 font-aristotelica">Bağış - [Adınız Soyadınız]</div>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-xl bg-accent/50 p-6 border border-primary/10">
                      <h3 className="mb-4 text-lg font-bold gradient-heading text-left font-lora">İş Bankası</h3>
                      <div className="space-y-4">
                        <div className="grid grid-cols-3 gap-2">
                          <div className="font-medium font-aristotelica">Banka:</div>
                          <div className="col-span-2 font-aristotelica">İş Bankası</div>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          <div className="font-medium font-aristotelica">Şube:</div>
                          <div className="col-span-2 font-aristotelica">İstanbul Şubesi (456)</div>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          <div className="font-medium font-aristotelica">Hesap Adı:</div>
                          <div className="col-span-2 font-aristotelica">Yol Arkadaşları Psikoloji Vakfı</div>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          <div className="font-medium font-aristotelica">IBAN:</div>
                          <div className="col-span-2 font-aristotelica">TR98 7654 3210 9876 5432 1098 76</div>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          <div className="font-medium font-aristotelica">Açıklama:</div>
                          <div className="col-span-2 font-aristotelica">Bağış - [Adınız Soyadınız]</div>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-xl bg-accent/50 p-6 border border-primary/10">
                      <h3 className="mb-4 text-lg font-bold gradient-heading text-left font-lora">Garanti Bankası</h3>
                      <div className="space-y-4">
                        <div className="grid grid-cols-3 gap-2">
                          <div className="font-medium font-aristotelica">Banka:</div>
                          <div className="col-span-2 font-aristotelica">Garanti Bankası</div>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          <div className="font-medium font-aristotelica">Şube:</div>
                          <div className="col-span-2 font-aristotelica">Ankara Şubesi (789)</div>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          <div className="font-medium font-aristotelica">Hesap Adı:</div>
                          <div className="col-span-2 font-aristotelica">Yol Arkadaşları Psikoloji Vakfı</div>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          <div className="font-medium font-aristotelica">IBAN:</div>
                          <div className="col-span-2 font-aristotelica">TR45 6789 0123 4567 8901 2345 67</div>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          <div className="font-medium font-aristotelica">Açıklama:</div>
                          <div className="col-span-2 font-aristotelica">Bağış - [Adınız Soyadınız]</div>
                        </div>
                      </div>
                    </div>

                    <div className="text-left text-sm text-gray-600 font-aristotelica">
                      <p>
                        Banka havalesi yaptıktan sonra, bağışınızın takibi için lütfen dekont bilgisini
                        <a href="mailto:bagis@yolarkadaslari.org" className="text-primary hover:underline">
                          {" "}
                          bagis@yolarkadaslari.org
                        </a>{" "}
                        adresine gönderiniz.
                      </p>
                    </div>
                  </TabsContent>

                  <TabsContent value="other" className="mt-6 space-y-6">
                    <div className="rounded-xl bg-accent/50 p-6 border border-primary/10">
                      <h3 className="mb-4 text-lg font-bold gradient-heading text-left font-lora">
                        Diğer Bağış Yöntemleri
                      </h3>
                      <div className="space-y-4">
                        <p className="text-gray-600 font-aristotelica text-left">
                          Farklı bağış yöntemleri hakkında bilgi almak için lütfen bizimle iletişime geçin:
                        </p>
                        <div className="grid grid-cols-3 gap-2">
                          <div className="font-medium font-aristotelica">Telefon:</div>
                          <div className="col-span-2 font-aristotelica">+90 (XXX) XXX XX XX</div>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          <div className="font-medium font-aristotelica">E-posta:</div>
                          <div className="col-span-2 font-aristotelica">
                            <a href="mailto:bagis@yolarkadaslari.org" className="text-primary hover:underline">
                              bagis@yolarkadaslari.org
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-xl bg-accent/50 p-6 border border-primary/10">
                      <h3 className="mb-4 text-lg font-bold gradient-heading text-left font-lora">Ayni Bağışlar</h3>
                      <p className="text-gray-600 font-aristotelica text-left">
                        Vakfımıza ayni bağış (eşya, malzeme, hizmet vb.) yapmak isterseniz, lütfen bizimle iletişime
                        geçin. İhtiyaç listemizi paylaşalım ve en uygun şekilde nasıl destek olabileceğinizi birlikte
                        değerlendirelim.
                      </p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
              <CardFooter className="flex flex-col space-y-4 text-left text-sm text-gray-600 font-aristotelica">
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
          <div className="mx-auto max-w-3xl text-left">
            <h2 className="mb-6 text-3xl font-bold gradient-heading font-lora">Şeffaflık İlkemiz</h2>
            <p className="mb-8 text-lg text-foreground/80 font-aristotelica">
              Yol Arkadaşları Psikoloji Vakfı olarak, bağışçılarımıza karşı şeffaf olmayı ve hesap verebilirliği temel
              değerlerimiz arasında görüyoruz.
            </p>
            <div className="rounded-xl bg-white/80 backdrop-blur-sm p-6 text-left border border-primary/10">
              <ul className="space-y-4 text-gray-600 font-aristotelica">
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-primary">•</span>
                  <span>
                    Tüm bağışlar, vakfımızın resmi hesaplarına kaydedilir ve yasal mevzuata uygun şekilde raporlanır.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-primary">•</span>
                  <span>Bağışlarınızın nasıl kullanıldığına dair düzenli raporlar web sitemizde yayınlanır.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-primary">•</span>
                  <span>Her yıl faaliyet raporumuz ve mali tablolarımız kamuoyuyla paylaşılır.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 text-primary">•</span>
                  <span>
                    Bağışçılarımız, desteklerinin etkisini görebilmek için vakıf çalışmalarımızı yakından takip
                    edebilirler.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function ImpactCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <Card className="bg-white/80 backdrop-blur-sm transition-all duration-300 hover:shadow-md text-left border border-primary/10">
      <CardHeader>
        <div className="flex justify-start">{icon}</div>
        <CardTitle className="text-2xl font-lora gradient-heading">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base font-aristotelica">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}
