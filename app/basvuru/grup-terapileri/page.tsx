"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"

export default function GrupTerapileriBasvuruPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  return (
    <div className="bg-gradient-to-b from-[#ECECE8] to-[#f8f9fa]">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#eff6ff]/50 to-[#ECECE8]">
        <div className="container">
          <h1 className="mb-6 text-center text-4xl font-bold gradient-heading md:text-5xl font-lora">
            Grup Terapileri Başvurusu
          </h1>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-lg text-foreground/80 font-aristotelica">
              Benzer yaşantılardan geçen kişilerle bir araya gelerek iyileşme fırsatı bulun. Grup terapilerimize
              katılmak için aşağıdaki formu doldurun.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-[#ECECE8]">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            {formSubmitted ? (
              <Card className="bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-center text-2xl gradient-heading font-lora">Başvurunuz Alındı</CardTitle>
                  <CardDescription className="text-center text-lg font-aristotelica">
                    Grup terapileri başvurunuz için teşekkür ederiz. Uygun grup oluştuğunda sizinle iletişime geçeceğiz.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-4 bg-primary text-white hover:bg-primary/90 transition-all duration-300"
                  >
                    Yeni Başvuru Yap
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Card className="bg-white/80 backdrop-blur-sm border border-primary/10">
                <CardHeader>
                  <CardTitle className="font-lora gradient-heading text-center">Grup Terapileri Başvuru Formu</CardTitle>
                  <CardDescription className="text-center font-aristotelica">
                    Grup terapilerimiz, benzer deneyimlerden gelen bireylerle güvenli bir ortamda buluşma imkanı sunar.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="font-aristotelica text-center block">
                          Ad Soyad
                        </Label>
                        <Input id="name" required className="border-primary/20 focus:border-primary text-center" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="age" className="font-aristotelica text-center block">
                          Yaş
                        </Label>
                        <Input id="age" type="number" required className="border-primary/20 focus:border-primary text-center" />
                      </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="font-aristotelica text-center block">
                          Telefon
                        </Label>
                        <Input id="phone" type="tel" required className="border-primary/20 focus:border-primary text-center" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="font-aristotelica text-center block">
                          E-posta
                        </Label>
                        <Input id="email" type="email" required className="border-primary/20 focus:border-primary text-center" />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label className="font-aristotelica text-center block">
                        Hangi konularda grup terapisine katılmak istiyorsunuz?
                      </Label>
                      <div className="grid gap-2 md:grid-cols-2">
                        <div className="flex items-left justify-center space-x-2">
                          <Checkbox id="anxiety" />
                          <Label htmlFor="anxiety" className="font-normal font-aristotelica">
                            Kaygı Yönetimi
                          </Label>
                        </div>
                        <div className="flex items-left justify-center space-x-2">
                          <Checkbox id="depression" />
                          <Label htmlFor="depression" className="font-normal font-aristotelica">
                            Depresyon Desteği
                          </Label>
                        </div>
                        <div className="flex items-left justify-center space-x-2">
                          <Checkbox id="grief" />
                          <Label htmlFor="grief" className="font-normal font-aristotelica">
                            Yas Süreci
                          </Label>
                        </div>
                        <div className="flex items-left justify-center space-x-2">
                          <Checkbox id="relationships" />
                          <Label htmlFor="relationships" className="font-normal font-aristotelica">
                            İlişki Sorunları
                          </Label>
                        </div>
                        <div className="flex items-left justify-center space-x-2">
                          <Checkbox id="self-esteem" />
                          <Label htmlFor="self-esteem" className="font-normal font-aristotelica">
                            Özgüven Geliştirme
                          </Label>
                        </div>
                        <div className="flex items-left justify-center space-x-2">
                          <Checkbox id="trauma" />
                          <Label htmlFor="trauma" className="font-normal font-aristotelica">
                            Travma Sonrası Destek
                          </Label>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="experience" className="font-aristotelica text-center block">
                        Daha önce grup terapisine katıldınız mı? Deneyiminizi paylaşır mısınız?
                      </Label>
                      <Textarea id="experience" className="border-primary/20 focus:border-primary text-center" rows={3} />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="expectations" className="font-aristotelica text-center block">
                        Grup terapisinden beklentileriniz nelerdir?
                      </Label>
                      <Textarea
                        id="expectations"
                        required
                        className="border-primary/20 focus:border-primary text-center"
                        rows={3}
                      />
                    </div>

                    <div className="space-y-3">
                      <Label className="font-aristotelica text-center block">Tercih ettiğiniz katılım şekli:</Label>
                      <RadioGroup defaultValue="both" className="flex justify-center">
                        <div className="flex flex-col space-y-2">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="online" id="online" />
                            <Label htmlFor="online" className="font-aristotelica">
                              Online
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="face-to-face" id="face-to-face" />
                            <Label htmlFor="face-to-face" className="font-aristotelica">
                              Yüz yüze
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="both" id="both" />
                            <Label htmlFor="both" className="font-aristotelica">
                              Her ikisi de uygun
                            </Label>
                          </div>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="flex items-center justify-center space-x-2">
                      <Checkbox id="terms" required />
                      <Label htmlFor="terms" className="font-normal font-aristotelica text-center">
                        Grup terapisi kurallarını kabul ediyorum ve gizlilik ilkesine uyacağımı beyan ederim.
                      </Label>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-primary text-white hover:bg-primary/90 transition-all duration-300"
                    >
                      Başvuruyu Gönder
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
