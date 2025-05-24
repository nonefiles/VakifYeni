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

export default function PsychotherapyApplicationPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would handle the form submission here
    setFormSubmitted(true)
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-50 py-16 md:py-24">
        <div className="container">
          <h1 className="mb-6 text-center text-4xl font-bold text-blue-600 md:text-5xl">
            Ücretsiz Psikoterapi Başvurusu
          </h1>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-lg text-gray-600">
              Yol Arkadaşları Psikoloji Vakfı olarak, maddi koşullar nedeniyle psikolojik destek alamayan bireylerin
              yanında olmak istiyoruz. Bu form, sizin için en uygun desteği sağlayabilmemiz ve ihtiyacın doğru tespiti
              için gereklidir.
            </p>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            {formSubmitted ? (
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-center text-2xl text-blue-600">Başvurunuz Alındı</CardTitle>
                  <CardDescription className="text-center text-lg">
                    Ücretsiz psikoterapi başvurunuz için teşekkür ederiz. Ekibimiz başvurunuzu değerlendirdikten sonra
                    sizinle iletişime geçecektir.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="mb-6 text-gray-600">
                    Başvurunuz, sosyal destek ihtiyacının düzeyine göre değerlendirilecektir. Öncelik, maddi imkânsızlık
                    nedeniyle psikoterapiye erişemeyen bireylere verilmektedir.
                  </p>
                  <Button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-4 bg-blue-600 text-white hover:bg-blue-700"
                  >
                    Yeni Başvuru Yap
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle>Ücretsiz Psikoterapi Destek Başvuru Formu</CardTitle>
                  <CardDescription>
                    Lütfen bilgileri eksiksiz ve doğru şekilde doldurunuz. Paylaştığınız tüm veriler gizlilik ilkesiyle
                    korunur.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium text-blue-600">1. Kişisel Bilgiler</h3>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name">Ad Soyad</Label>
                          <Input id="name" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="birthdate">Doğum Tarihi</Label>
                          <Input id="birthdate" type="date" required />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="gender">Cinsiyet</Label>
                        <Select>
                          <SelectTrigger className="border-primary/20 focus:border-primary">
                            <SelectValue placeholder="Seçiniz" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="female">Kadın</SelectItem>
                            <SelectItem value="male">Erkek</SelectItem>
                            <SelectItem value="other">Diğer</SelectItem>
                            <SelectItem value="not-specified">Belirtmek İstemiyorum</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="marital-status">Medeni Durum</Label>
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
                        <Label htmlFor="education">Eğitim Durumu</Label>
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

                      <div className="space-y-2">
                        <Label htmlFor="occupation">Meslek / Çalışma Durumu</Label>
                        <Input id="occupation" required />
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="city">İkamet İli / İlçesi</Label>
                          <Input id="city" required />
                        </div>
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Telefon</Label>
                          <Input id="phone" type="tel" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">E-posta</Label>
                          <Input id="email" type="email" required />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium text-blue-600">2. Başvuruya Özel Bilgiler</h3>

                      <div className="space-y-2">
                        <Label>Hangi terapi türü için başvuruyorsunuz?</Label>
                        <RadioGroup defaultValue="individual">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="individual" id="individual" />
                            <Label htmlFor="individual">Bireysel Terapi</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="child" id="child" />
                            <Label htmlFor="child">Çocuk / Ergen Terapisi</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="couple" id="couple" />
                            <Label htmlFor="couple">Çift / Aile Terapisi</Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="reason">Başvuru nedeninizi kısaca paylaşır mısınız?</Label>
                        <Textarea id="reason" required />
                      </div>

                      <div className="space-y-2">
                        <Label>Daha önce psikolojik destek aldınız mı?</Label>
                        <RadioGroup defaultValue="no">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="yes" id="previous-yes" />
                            <Label htmlFor="previous-yes">Evet</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="no" id="previous-no" />
                            <Label htmlFor="previous-no">Hayır</Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="previous-details">
                          Eğer daha önce psikolojik destek aldıysanız, lütfen kısaca belirtiniz (Nerede, ne kadar
                          süreyle, ne için?)
                        </Label>
                        <Textarea id="previous-details" />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium text-blue-600">3. Ekonomik Durumunuz</h3>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="personal-income">Aylık bireysel geliriniz (varsa)</Label>
                          <Input id="personal-income" type="number" placeholder="TL" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="household-income">Aylık hane geliri toplamı</Label>
                          <Input id="household-income" type="number" placeholder="TL" required />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="household-size">Hane halkı kişi sayısı</Label>
                        <Input id="household-size" type="number" required />
                      </div>

                      <div className="space-y-2">
                        <Label>Barınma durumu</Label>
                        <RadioGroup defaultValue="rent">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="rent" id="housing-rent" />
                            <Label htmlFor="housing-rent">Kiracı</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="own" id="housing-own" />
                            <Label htmlFor="housing-own">Ev sahibi</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="family" id="housing-family" />
                            <Label htmlFor="housing-family">Aile yanında</Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="social-aid">Sosyal yardım alıyor musunuz? (Varsa belirtiniz)</Label>
                        <Input id="social-aid" />
                      </div>

                      <div className="space-y-2">
                        <Label>Sigortalı bir işte çalışıyor musunuz?</Label>
                        <RadioGroup defaultValue="no">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="yes" id="insurance-yes" />
                            <Label htmlFor="insurance-yes">Evet</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="no" id="insurance-no" />
                            <Label htmlFor="insurance-no">Hayır</Label>
                          </div>
                        </RadioGroup>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium text-blue-600">4. Onay ve Beyan</h3>

                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="declaration" required />
                          <Label htmlFor="declaration" className="font-normal">
                            Yukarıda verdiğim bilgilerin doğru olduğunu beyan ederim.
                          </Label>
                        </div>

                        <div className="flex items-center space-x-2">
                          <Checkbox id="process" required />
                          <Label htmlFor="process" className="font-normal">
                            Bu formun değerlendirme sürecinin bir parçası olduğunu ve başvurunun kesin kabul anlamına
                            gelmediğini anlıyorum.
                          </Label>
                        </div>

                        <div className="flex items-center space-x-2">
                          <Checkbox id="privacy" required />
                          <Label htmlFor="privacy" className="font-normal">
                            Bilgilerimin gizlilik ilkesi çerçevesinde saklanacağını kabul ediyorum.
                          </Label>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-xl bg-blue-50 p-4 text-sm text-gray-600">
                      <h4 className="mb-2 font-bold">Bilgilendirme</h4>
                      <p className="mb-2">
                        Bu hizmet, Yol Arkadaşları Psikoloji Vakfı'nın sınırlı kaynaklarla ve gönüllü uzmanların
                        katkısıyla yürütülmektedir. Başvurular, sosyal destek ihtiyacının düzeyine göre
                        değerlendirilmektedir.
                      </p>
                      <p className="mb-2 font-medium">
                        Öncelik, maddi imkânsızlık nedeniyle psikoterapiye erişemeyen bireylere verilmektedir.
                      </p>
                      <p>
                        Başvuru formunda beyan ettiğiniz bilgiler, yalnızca başvuru sürecinin değerlendirilmesi amacıyla
                        kullanılacak ve gizlilikle saklanacaktır.
                      </p>
                    </div>

                    <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700">
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
