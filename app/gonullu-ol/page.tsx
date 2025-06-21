"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { HeartHandshake, Users, BookOpen, Calendar, Building, School } from "lucide-react"
// import { SectionDivider } from "@/components/section-divider"

export default function VolunteerPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would handle the form submission here
    setFormSubmitted(true)
  }

  return (
    <div className="bg-gradient-to-b from-[#ECECE8] to-[#f8f9fa] text-center">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#eff6ff]/50 to-[#ECECE8]">
        <div className="container">
          <h1 className="mb-6 text-center text-4xl font-bold gradient-heading md:text-5xl font-lora">Gönüllü Ol</h1>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-lg text-center text-foreground/80 font-aristotelica">
              Siz de Yol Arkadaşımız Olmak İster misiniz? Birlikte iyileşen, birlikte güçlenen bir topluluk olma
              hayalimizde sizin yeriniz çok özel.
            </p>
          </div>
        </div>
      </section>

      {/* <SectionDivider /> */}

      {/* Volunteer Areas */}
      <section className="py-16 bg-[#ECECE8]">
        <div className="container">
          <h2 className="mb-10 text-center text-3xl font-bold gradient-heading font-lora">Gönüllülük Alanları</h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <VolunteerAreaCard
              icon={<HeartHandshake className="h-8 w-8 text-primary" />}
              title="Psikoterapi Desteği"
              description="Psikoloji alanında eğitim almış uzmanlar için ücretsiz terapi hizmeti sunma fırsatı."
            />
            <VolunteerAreaCard
              icon={<Users className="h-8 w-8 text-primary" />}
              title="Grup Terapileri"
              description="Grup terapilerinde kolaylaştırıcı veya yardımcı olarak destek olabilirsiniz."
            />
            <VolunteerAreaCard
              icon={<BookOpen className="h-8 w-8 text-primary" />}
              title="Atölye/Eğitim Desteği"
              description="Uzmanlık alanınızda atölye çalışmaları veya eğitimler düzenleyebilirsiniz."
            />
            <VolunteerAreaCard
              icon={<Calendar className="h-8 w-8 text-primary" />}
              title="Etkinlik Organizasyonu"
              description="Etkinliklerin planlanması ve yürütülmesinde destek olabilirsiniz."
            />
            <VolunteerAreaCard
              icon={<Building className="h-8 w-8 text-primary" />}
              title="İdari Destek"
              description="Vakfın idari işlerinde, ofis çalışmalarında veya koordinasyonda yardımcı olabilirsiniz."
            />
            <VolunteerAreaCard
              icon={<School className="h-8 w-8 text-primary" />}
              title="Sosyal Medya ve İçerik"
              description="İçerik üretimi, sosyal medya yönetimi veya grafik tasarım konularında destek olabilirsiniz."
            />
          </div>
        </div>
      </section>

      {/* <SectionDivider className="rotate-180" /> */}

      {/* Application Form */}
      <section className="py-16 bg-gradient-to-b from-[#ECECE8] to-[#eff6ff]/30">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-10 text-center text-3xl font-bold gradient-heading font-lora">
              Gönüllülük Başvuru Formu
            </h2>

            {formSubmitted ? (
              <Card className="bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-center text-2xl gradient-heading font-lora">Başvurunuz Alındı</CardTitle>
                  <CardDescription className="text-center text-lg font-aristotelica">
                    Gönüllülük başvurunuz için teşekkür ederiz. Ekibimiz başvurunuzu değerlendirdikten sonra sizinle
                    iletişime geçecektir.
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
                  <CardTitle className="font-lora gradient-heading text-center">Gönüllülük Başvuru Formu</CardTitle>
                  <CardDescription className="text-center font-aristotelica">
                    Vakıf çalışmalarımıza gönüllü olarak destek vermek isterseniz, sizi bu anlamlı yolculuğa davet
                    ediyoruz. Hangi alanda katkı sunmak istersiniz, ne kadar zaman ayırabilirsiniz, birlikte
                    değerlendirelim.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium gradient-heading text-center font-lora">Kişisel Bilgiler</h3>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2 text-center">
                          <Label htmlFor="name" className="font-aristotelica block text-center">
                            Ad Soyad
                          </Label>
                          <Input id="name" required className="border-primary/20 focus:border-primary text-center" />
                        </div>
                        <div className="space-y-2 text-center">
                          <Label htmlFor="birthdate" className="font-aristotelica block text-center">
                            Doğum Tarihi
                          </Label>
                          <Input
                            id="birthdate"
                            type="date"
                            required
                            className="border-primary/20 focus:border-primary text-center"
                          />
                        </div>
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2 text-center">
                          <Label htmlFor="email" className="font-aristotelica block text-center">
                            E-posta
                          </Label>
                          <Input id="email" type="email" required className="border-primary/20 focus:border-primary text-center" />
                        </div>
                        <div className="space-y-2 text-center">
                          <Label htmlFor="phone" className="font-aristotelica block text-center">
                            Telefon
                          </Label>
                          <Input id="phone" type="tel" required className="border-primary/20 focus:border-primary text-center" />
                        </div>
                      </div>

                      <div className="space-y-2 text-center">
                        <Label htmlFor="city" className="font-aristotelica block text-center">
                          İkamet Şehri
                        </Label>
                        <Input id="city" required className="border-primary/20 focus:border-primary text-center" />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium gradient-heading text-center font-lora">Eğitim ve Meslek</h3>

                      <div className="space-y-2 text-center">
                        <Label htmlFor="education" className="font-aristotelica block text-center">
                          Eğitim Durumu
                        </Label>
                        <Select>
                          <SelectTrigger className="border-primary/20 focus:border-primary text-center">
                            <SelectValue placeholder="Seçiniz" />
                          </SelectTrigger>
                          <SelectContent className="bg-white/80 backdrop-blur-sm">
                            <SelectItem value="high-school" className="text-center">Lise</SelectItem>
                            <SelectItem value="associate" className="text-center">Ön Lisans</SelectItem>
                            <SelectItem value="bachelor" className="text-center">Lisans</SelectItem>
                            <SelectItem value="master" className="text-center">Yüksek Lisans</SelectItem>
                            <SelectItem value="doctorate" className="text-center">Doktora</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2 text-center">
                        <Label htmlFor="school" className="font-aristotelica block text-center">
                          Mezun Olduğunuz Okul / Bölüm
                        </Label>
                        <Input id="school" className="border-primary/20 focus:border-primary text-center" />
                      </div>

                      <div className="space-y-2">
                        <Label className="font-aristotelica block text-center">Çalışma Durumunuz</Label>
                        <RadioGroup defaultValue="employed" className="flex flex-col items-center space-y-2">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="employed" id="employed" />
                            <Label htmlFor="employed" className="font-aristotelica">
                              Çalışıyorum
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="unemployed" id="unemployed" />
                            <Label htmlFor="unemployed" className="font-aristotelica">
                              Çalışmıyorum
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="student" id="student" />
                            <Label htmlFor="student" className="font-aristotelica">
                              Öğrenciyim
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div className="space-y-2 text-center">
                        <Label htmlFor="psychology-education" className="font-aristotelica block text-center">
                          Psikoloji ya da ilgili alanda eğitim aldıysanız belirtiniz
                        </Label>
                        <Textarea id="psychology-education" className="border-primary/20 focus:border-primary text-center" />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium gradient-heading text-center font-lora">
                        Gönüllülük Bilgileri
                      </h3>

                      <div className="space-y-2 text-center">
                        <Label htmlFor="experience" className="font-aristotelica block text-center">
                          Daha önce gönüllülük deneyiminiz oldu mu? (Varsa açıklayınız)
                        </Label>
                        <Textarea id="experience" className="border-primary/20 focus:border-primary text-center" />
                      </div>

                      <div className="space-y-2 text-center">
                        <Label htmlFor="motivation" className="font-aristotelica block text-center">
                          Vakfımızda gönüllü olmak isteme nedeniniz nedir?
                        </Label>
                        <Textarea id="motivation" required className="border-primary/20 focus:border-primary text-center" />
                      </div>

                      <div className="space-y-3">
                        <Label className="font-aristotelica block text-center">Hangi alanlarda destek vermek istersiniz?</Label>
                        <div className="grid gap-2 md:grid-cols-2 justify-items-center">
                          <div className="flex items-center space-x-2">
                            <Checkbox id="psychotherapy" />
                            <Label htmlFor="psychotherapy" className="font-normal font-aristotelica">
                              Psikoterapi
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="group-therapy" />
                            <Label htmlFor="group-therapy" className="font-normal font-aristotelica">
                              Grup Terapileri
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="workshop" />
                            <Label htmlFor="workshop" className="font-normal font-aristotelica">
                              Atölye/Eğitim Desteği
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="social-media" />
                            <Label htmlFor="social-media" className="font-normal font-aristotelica">
                              Sosyal Medya
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="content" />
                            <Label htmlFor="content" className="font-normal font-aristotelica">
                              Grafik / İçerik
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="event" />
                            <Label htmlFor="event" className="font-normal font-aristotelica">
                              Etkinlik Organizasyonu
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2 md:col-span-2">
                            <Checkbox id="admin" />
                            <Label htmlFor="admin" className="font-normal font-aristotelica">
                              İdari Destek
                            </Label>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2 text-center">
                        <Label htmlFor="time" className="font-aristotelica block text-center">
                          Haftalık gönüllülük için ayırabileceğiniz zaman
                        </Label>
                        <Select>
                          <SelectTrigger className="border-primary/20 focus:border-primary text-center">
                            <SelectValue placeholder="Seçiniz" />
                          </SelectTrigger>
                          <SelectContent className="bg-white/80 backdrop-blur-sm">
                            <SelectItem value="1-3" className="text-center">1-3 saat</SelectItem>
                            <SelectItem value="4-6" className="text-center">4-6 saat</SelectItem>
                            <SelectItem value="7-10" className="text-center">7-10 saat</SelectItem>
                            <SelectItem value="10+" className="text-center">10 saatten fazla</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2 text-center">
                        <Label htmlFor="days" className="font-aristotelica block text-center">
                          Uygun olduğunuz gün/saatler
                        </Label>
                        <Textarea
                          id="days"
                          placeholder="Örn: Hafta içi akşamları, Cumartesi öğleden sonra"
                          className="border-primary/20 focus:border-primary text-center"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label className="font-aristotelica block text-center">Online çalışmaya uygun musunuz?</Label>
                        <RadioGroup defaultValue="yes" className="flex flex-col items-center space-y-2">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="yes" id="online-yes" />
                            <Label htmlFor="online-yes" className="font-aristotelica">
                              Evet
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="no" id="online-no" />
                            <Label htmlFor="online-no" className="font-aristotelica">
                              Hayır
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div className="space-y-2 text-center">
                        <Label htmlFor="duration" className="font-aristotelica block text-center">
                          Ne kadar süre gönüllü kalmayı planlıyorsunuz?
                        </Label>
                        <Select>
                          <SelectTrigger className="border-primary/20 focus:border-primary text-center">
                            <SelectValue placeholder="Seçiniz" />
                          </SelectTrigger>
                          <SelectContent className="bg-white/80 backdrop-blur-sm">
                            <SelectItem value="3-months" className="text-center">3 ay</SelectItem>
                            <SelectItem value="6-months" className="text-center">6 ay</SelectItem>
                            <SelectItem value="1-year" className="text-center">1 yıl</SelectItem>
                            <SelectItem value="long-term" className="text-center">Uzun süreli</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2 text-center">
                        <Label htmlFor="cv" className="font-aristotelica block text-center">
                          CV'nizi buraya yükleyebilirsiniz
                        </Label>
                        <Input id="cv" type="file" className="border-primary/20 focus:border-primary text-center" />
                      </div>

                      <div className="space-y-2 text-center">
                        <Label htmlFor="notes" className="font-aristotelica block text-center">
                          Eklemek istediğiniz bir not var mı?
                        </Label>
                        <Textarea id="notes" className="border-primary/20 focus:border-primary text-center" />
                      </div>
                    </div>

                    <div className="flex items-center justify-center space-x-2">
                      <Checkbox id="terms" required />
                      <Label htmlFor="terms" className="font-normal font-aristotelica text-center">
                        Yukarıda verdiğim bilgilerin doğru olduğunu beyan ederim ve kişisel verilerimin gönüllülük
                        değerlendirme sürecinde kullanılmasını kabul ediyorum.
                      </Label>
                    </div>

                    <div className="text-center">
                      <Button
                        type="submit"
                        className="w-full bg-primary text-white hover:bg-primary/90 transition-all duration-300"
                      >
                        Başvuruyu Gönder
                      </Button>
                    </div>
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

function VolunteerAreaCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <Card className="bg-white/80 backdrop-blur-sm transition-all duration-300 hover:shadow-md text-center border border-primary/10">
      <CardHeader>
        <div className="mb-2 flex justify-center">{icon}</div>
        <CardTitle className="font-lora gradient-heading text-center">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base font-aristotelica text-center">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}
