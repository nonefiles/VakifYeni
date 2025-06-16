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

export default function PsikoterapiBasvuruPage() {
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
          <h1 className="mb-6 text-left text-center text-4xl font-bold gradient-heading md:text-5xl font-lora">
            Ücretsiz Psikoterapi Başvurusu
          </h1>
          <div className="mx-auto max-w-3xl text-left">
            <p className="text-lg text-foreground/80 font-aristotelica">
              Yol Arkadaşları Psikoloji Vakfı olarak, maddi koşullar nedeniyle psikolojik destek alamayan bireylerin
              yanında olmak istiyoruz. Bu form, sizin için en uygun desteği sağlayabilmemiz ve ihtiyacın doğru tespiti
              için gereklidir.
            </p>
            <p className="text-sm text-foreground/60 mt-4 font-aristotelica">
              Lütfen bilgileri eksiksiz ve doğru şekilde doldurunuz. Paylaştığınız tüm veriler gizlilik ilkesiyle
              korunur.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-[#ECECE8]">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            {formSubmitted ? (
              <Card className="bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-center text-2xl gradient-heading font-lora">Başvurunuz Alındı</CardTitle>
                  <CardDescription className="text-center text-lg font-aristotelica">
                    Ücretsiz psikoterapi başvurunuz için teşekkür ederiz. Ekibimiz başvurunuzu değerlendirdikten sonra
                    sizinle iletişime geçecektir.
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
                  <CardTitle className="font-lora gradient-heading text-left">
                    Ücretsiz Psikoterapi Destek Başvuru Formu
                  </CardTitle>
                  <CardDescription className="text-left font-aristotelica">
                    Bu hizmet, Yol Arkadaşları Psikoloji Vakfı'nın sınırlı kaynaklarla ve gönüllü uzmanların katkısıyla
                    yürütülmektedir. Başvurular, sosyal destek ihtiyacının düzeyine göre değerlendirilmektedir.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Kişisel Bilgiler */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium gradient-heading text-left font-lora">1. Kişisel Bilgiler</h3>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="font-aristotelica">
                            Ad Soyad
                          </Label>
                          <Input id="name" required className="border-primary/20 focus:border-primary" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="birthdate" className="font-aristotelica">
                            Doğum Tarihi
                          </Label>
                          <Input
                            id="birthdate"
                            type="date"
                            required
                            className="border-primary/20 focus:border-primary"
                          />
                        </div>
                      </div>

                      <div className="grid gap-4 md:grid-cols-3">
                        <div className="space-y-2">
                          <Label className="font-aristotelica">Cinsiyet</Label>
                          <RadioGroup defaultValue="female">
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="female" id="female" />
                              <Label htmlFor="female" className="font-aristotelica">
                                Kadın
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="male" id="male" />
                              <Label htmlFor="male" className="font-aristotelica">
                                Erkek
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="other" id="other" />
                              <Label htmlFor="other" className="font-aristotelica">
                                Diğer
                              </Label>
                            </div>
                          </RadioGroup>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="marital-status" className="font-aristotelica">
                            Medeni Durum
                          </Label>
                          <Select>
                            <SelectTrigger className="border-primary/20 focus:border-primary">
                              <SelectValue placeholder="Seçiniz" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="single">Bekar</SelectItem>
                              <SelectItem value="married">Evli</SelectItem>
                              <SelectItem value="divorced">Boşanmış</SelectItem>
                              <SelectItem value="widowed">Dul</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="education" className="font-aristotelica">
                            Eğitim Durumu
                          </Label>
                          <Select>
                            <SelectTrigger className="border-primary/20 focus:border-primary">
                              <SelectValue placeholder="Seçiniz" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="primary">İlkokul</SelectItem>
                              <SelectItem value="secondary">Ortaokul</SelectItem>
                              <SelectItem value="high-school">Lise</SelectItem>
                              <SelectItem value="associate">Ön Lisans</SelectItem>
                              <SelectItem value="bachelor">Lisans</SelectItem>
                              <SelectItem value="master">Yüksek Lisans</SelectItem>
                              <SelectItem value="doctorate">Doktora</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="profession" className="font-aristotelica">
                            Meslek / Çalışma Durumu
                          </Label>
                          <Input id="profession" className="border-primary/20 focus:border-primary" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="location" className="font-aristotelica">
                            İkamet İli / İlçesi
                          </Label>
                          <Input id="location" required className="border-primary/20 focus:border-primary" />
                        </div>
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="font-aristotelica">
                            Telefon
                          </Label>
                          <Input id="phone" type="tel" required className="border-primary/20 focus:border-primary" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="font-aristotelica">
                            E-posta
                          </Label>
                          <Input id="email" type="email" required className="border-primary/20 focus:border-primary" />
                        </div>
                      </div>
                    </div>

                    {/* Başvuruya Özel Bilgiler */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium gradient-heading text-left font-lora">
                        2. Başvuruya Özel Bilgiler
                      </h3>

                      <div className="space-y-3">
                        <Label className="font-aristotelica">Hangi terapi türü için başvuruyorsunuz?</Label>
                        <RadioGroup defaultValue="individual">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="individual" id="individual" />
                            <Label htmlFor="individual" className="font-aristotelica">
                              Bireysel Terapi
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="child" id="child" />
                            <Label htmlFor="child" className="font-aristotelica">
                              Çocuk / Ergen Terapisi
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="family" id="family" />
                            <Label htmlFor="family" className="font-aristotelica">
                              Çift / Aile Terapisi
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="reason" className="font-aristotelica">
                          Başvuru nedeninizi kısaca paylaşır mısınız?
                        </Label>
                        <Textarea id="reason" required className="border-primary/20 focus:border-primary" rows={4} />
                      </div>

                      <div className="space-y-3">
                        <Label className="font-aristotelica">Daha önce psikolojik destek aldınız mı?</Label>
                        <RadioGroup defaultValue="no">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="yes" id="previous-yes" />
                            <Label htmlFor="previous-yes" className="font-aristotelica">
                              Evet
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="no" id="previous-no" />
                            <Label htmlFor="previous-no" className="font-aristotelica">
                              Hayır
                            </Label>
                          </div>
                        </RadioGroup>
                        <div className="space-y-2">
                          <Label htmlFor="previous-details" className="font-aristotelica text-sm">
                            Evet ise, lütfen kısaca belirtiniz (Nerede, ne kadar süreyle, ne için?)
                          </Label>
                          <Textarea id="previous-details" className="border-primary/20 focus:border-primary" rows={2} />
                        </div>
                      </div>
                    </div>

                    {/* Ekonomik Durum */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium gradient-heading text-left font-lora">
                        3. Ekonomik Durumunuz
                      </h3>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="personal-income" className="font-aristotelica">
                            Aylık bireysel geliriniz (varsa)
                          </Label>
                          <Input
                            id="personal-income"
                            type="number"
                            className="border-primary/20 focus:border-primary"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="household-income" className="font-aristotelica">
                            Aylık hane geliri toplamı
                          </Label>
                          <Input
                            id="household-income"
                            type="number"
                            required
                            className="border-primary/20 focus:border-primary"
                          />
                        </div>
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="household-size" className="font-aristotelica">
                            Hane halkı kişi sayısı
                          </Label>
                          <Input
                            id="household-size"
                            type="number"
                            required
                            className="border-primary/20 focus:border-primary"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="housing" className="font-aristotelica">
                            Barınma durumu
                          </Label>
                          <Select>
                            <SelectTrigger className="border-primary/20 focus:border-primary">
                              <SelectValue placeholder="Seçiniz" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="tenant">Kiracı</SelectItem>
                              <SelectItem value="owner">Ev sahibi</SelectItem>
                              <SelectItem value="family">Aile yanında</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="social-aid" className="font-aristotelica">
                          Sosyal yardım alıyor musunuz? (Varsa belirtiniz)
                        </Label>
                        <Input id="social-aid" className="border-primary/20 focus:border-primary" />
                      </div>

                      <div className="space-y-3">
                        <Label className="font-aristotelica">Sigortalı bir işte çalışıyor musunuz?</Label>
                        <RadioGroup defaultValue="no">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="yes" id="insured-yes" />
                            <Label htmlFor="insured-yes" className="font-aristotelica">
                              Evet
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="no" id="insured-no" />
                            <Label htmlFor="insured-no" className="font-aristotelica">
                              Hayır
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>
                    </div>

                    {/* Onay ve Beyan */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium gradient-heading text-left font-lora">4. Onay ve Beyan</h3>

                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="truth" required />
                          <Label htmlFor="truth" className="font-normal font-aristotelica">
                            Yukarıda verdiğim bilgilerin doğru olduğunu beyan ederim.
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="understanding" required />
                          <Label htmlFor="understanding" className="font-normal font-aristotelica">
                            Bu formun değerlendirme sürecinin bir parçası olduğunu ve başvurunun kesin kabul anlamına
                            gelmediğini anlıyorum.
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="privacy" required />
                          <Label htmlFor="privacy" className="font-normal font-aristotelica">
                            Bilgilerimin gizlilik ilkesi çerçevesinde saklanacağını kabul ediyorum.
                          </Label>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <h4 className="font-medium text-blue-800 mb-2 font-lora">Bilgilendirme</h4>
                      <p className="text-sm text-blue-700 font-aristotelica">
                        <strong>
                          Öncelik, maddi imkânsızlık nedeniyle psikoterapiye erişemeyen bireylere verilmektedir.
                        </strong>
                        <br />
                        Başvuru formunda beyan ettiğiniz bilgiler, yalnızca başvuru sürecinin değerlendirilmesi amacıyla
                        kullanılacak ve gizlilikle saklanacaktır.
                      </p>
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
