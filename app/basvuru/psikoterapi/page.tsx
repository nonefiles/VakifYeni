import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"

export default function PsikoterapiBasvuruPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  return (
    <div className="bg-gradient-to-b from-[#ECECE8] to-[#f8f9fa] min-h-screen flex flex-col items-center justify-center px-4 py-16">
      <div className="w-full max-w-4xl">
        {/* Hero Section */}
        <section className="py-12">
          <div className="text-center">
            <h1 className="mb-6 text-4xl font-bold gradient-heading md:text-5xl font-lora">
              Ücretsiz Psikoterapi Başvurusu
            </h1>
            <div className="mx-auto max-w-3xl">
              <p className="text-lg text-center text-foreground/80 font-aristotelica">
                Yol Arkadaşları Psikoloji Vakfı olarak, maddi koşullar nedeniyle psikolojik destek alamayan bireylerin
                yanında olmak istiyoruz. Bu form, sizin için en uygun desteği sağlayabilmemiz ve ihtiyacın doğru tespiti
                için gereklidir.
              </p>
              <p className="text-sm text-center text-foreground/60 mt-4 font-aristotelica">
                Lütfen bilgileri eksiksiz ve doğru şekilde doldurunuz. Paylaştığınız tüm veriler gizlilik ilkesiyle
                korunur.
              </p>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-8">
          {formSubmitted ? (
            <Card className="bg-white/80 backdrop-blur-sm text-center">
              <CardHeader>
                <CardTitle className="text-2xl gradient-heading font-lora">Başvurunuz Alındı</CardTitle>
                <CardDescription className="text-lg font-aristotelica">
                  Ücretsiz psikoterapi başvurunuz için teşekkür ederiz. Ekibimiz başvurunuzu değerlendirdikten sonra
                  sizinle iletişime geçecektir.
                </CardDescription>
              </CardHeader>
              <CardContent>
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
                <CardTitle className="text-center gradient-heading font-lora">
                  Ücretsiz Psikoterapi Destek Başvuru Formu
                </CardTitle>
                <CardDescription className="text-center font-aristotelica">
                  Bu hizmet, Yol Arkadaşları Psikoloji Vakfı'nın sınırlı kaynaklarla ve gönüllü uzmanların katkısıyla
                  yürütülmektedir. Başvurular, sosyal destek ihtiyacının düzeyine göre değerlendirilmektedir.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-8 text-center flex flex-col items-center">
                  <div className="w-full max-w-md">
                    <Label htmlFor="firstName" className="block mb-2">Adınız</Label>
                    <Input id="firstName" type="text" required />
                  </div>

                  <div className="w-full max-w-md">
                    <Label htmlFor="lastName" className="block mb-2">Soyadınız</Label>
                    <Input id="lastName" type="text" required />
                  </div>

                  <div className="w-full max-w-md">
                    <Label htmlFor="email" className="block mb-2">E-posta</Label>
                    <Input id="email" type="email" required />
                  </div>

                  <div className="w-full max-w-md">
                    <Label htmlFor="phone" className="block mb-2">Telefon Numarası</Label>
                    <Input id="phone" type="tel" placeholder="Örnek: 5551234567" required />
                  </div>

                  <div className="w-full max-w-md">
                    <Label htmlFor="age" className="block mb-2">Yaş</Label>
                    <Input id="age" type="number" min="18" required />
                  </div>

                  <div className="w-full max-w-md">
                    <Label className="block mb-2">Cinsiyet</Label>
                    <RadioGroup className="flex justify-center gap-6" defaultValue="female" required>
                      <div>
                        <RadioGroupItem value="female" id="female" />
                        <Label htmlFor="female" className="ml-2">Kadın</Label>
                      </div>
                      <div>
                        <RadioGroupItem value="male" id="male" />
                        <Label htmlFor="male" className="ml-2">Erkek</Label>
                      </div>
                      <div>
                        <RadioGroupItem value="other" id="other" />
                        <Label htmlFor="other" className="ml-2">Diğer</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="w-full max-w-md">
                    <Label htmlFor="profession" className="block mb-2">Meslek</Label>
                    <Input id="profession" type="text" required />
                  </div>

                  <div className="w-full max-w-md">
                    <Label htmlFor="reason" className="block mb-2">Psikoterapi Destek Alma Nedeni</Label>
                    <Textarea id="reason" rows={4} required />
                  </div>

                  <div className="w-full max-w-md">
                    <Label htmlFor="expectations" className="block mb-2">Beklentileriniz</Label>
                    <Textarea id="expectations" rows={4} required />
                  </div>

                  <div className="w-full max-w-md flex items-center justify-center">
                    <Checkbox id="privacy" required />
                    <Label htmlFor="privacy" className="ml-2 text-sm">
                      Kişisel verilerimin gizlilik ilkesi doğrultusunda işlenmesini kabul ediyorum.
                    </Label>
                  </div>

                  <div className="w-full max-w-md">
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
        </section>

        {/* Contact Information Section */}
        <section className="py-8">
          <Card className="bg-white/80 backdrop-blur-sm border border-primary/10">
            <CardHeader>
              <CardTitle className="text-center gradient-heading font-lora">
                İletişim ve Detaylı Bilgi
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg font-aristotelica">
                Herhangi bir sorunuz veya yardım talebiniz için bizi arayabilirsiniz.
              </p>
              <p className="text-lg font-bold font-aristotelica mt-4">
                Telefon Numaraları:
              </p>
              <p className="text-lg font-aristotelica">
                +90 539 889 3375
              </p>
              <p className="text-lg font-aristotelica">
                +90 532 419 3375
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
