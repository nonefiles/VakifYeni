"use client"

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
    <div className="bg-gradient-to-b from-[#ECECE8] to-[#f8f9fa] min-h-screen flex flex-col items-center p-6 text-center">
      <div className="w-full max-w-5xl">
        {/* Hero Section */}
        <section className="py-12 text-center">
          <h1 className="mb-4 text-5xl font-extrabold text-blue-700 tracking-tight leading-tight">
            Grup Terapileri Başvurusu
          </h1>
          <p className="text-gray-700 text-lg text-center max-w-2xl mx-auto">
            Benzer yaşantılardan geçen kişilerle bir araya gelerek iyileşme fırsatı bulun. Grup terapilerimize katılmak için aşağıdaki formu doldurun.
          </p>
        </section>

        {/* Info Section */}
        <section className="py-8 text-gray-800 space-y-10 text-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-center text-blue-600">Grup Terapisi</h2>
            <p className="max-w-3xl text-center mx-auto">
              Grup terapisi, bireylerin benzer deneyimler veya zorluklarla mücadele eden bir grup içinde bir araya gelerek psikolojik destek aldığı bir terapi yöntemidir. Bu süreç, genellikle bir ya da iki terapistin liderliğinde yürütülür ve katılımcılar için güvenli, destekleyici bir alan sunar.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-semibold text-blue-500">Grup Terapisinin Amaçları</h3>
            <ul className="list-disc list-inside text-left text-gray-700 mx-auto max-w-xl">
              <li>Bireylerin yalnız olmadıklarını fark etmelerini sağlamak</li>
              <li>Sağlıklı iletişim ve ilişki kurma becerilerini geliştirmek</li>
              <li>Zor duyguları anlamlandırmak ve yönetmeyi öğrenmek</li>
              <li>Çatışma çözme ve problem çözme becerileri kazandırmak</li>
              <li>Öz farkındalık ve öz-şefkat geliştirmek</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-blue-500">Grup Terapisinin Avantajları</h3>
            <p className="max-w-3xl text-center mx-auto">
              Grup terapisi, bireylere hem kendi iç dünyalarını keşfetme hem de başkalarından öğrenme fırsatı sunar. “Ben de bu duyguları yaşıyorum” diyebilmek, güven ve empati ortamını güçlendirir.
            </p>
            <p className="max-w-3xl text-center mx-auto">
              Grup içinde paylaşım, sadece paylaşan kişiye değil tüm katılımcılara ilham verir. Ekonomik ve erişilebilir olmasıyla birlikte özgüven ve duygusal dayanıklılığı artırır.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-semibold text-blue-500">Grup Terapisinde Süreç</h3>
            <ol className="list-decimal list-inside text-left text-gray-700 mx-auto max-w-xl">
              <li>Tanışma ve güven oluşturma</li>
              <li>Belirlenen konuların çalışılması</li>
              <li>Duygu ve deneyimlerin paylaşımı</li>
              <li>Uygulamalı çalışmalar</li>
              <li>Süreç değerlendirmesi ve kapanış</li>
            </ol>
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-semibold text-blue-500">Neden Katılmalısınız?</h3>
            <p className="max-w-3xl text-center mx-auto">
              Grup terapisi yalnızca destek almak değil; öğrenmek, fark etmek, güçlenmek ve kendinizi yeniden inşa etmek için bir fırsattır.
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className="mt-10">
          <Card className="bg-white/90 shadow-2xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-semibold text-blue-600">Başvuru Formu</CardTitle>
              <CardDescription className="text-gray-600 max-w-xl mx-auto">
                Lütfen bilgilerinizi dikkatli bir şekilde doldurunuz.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {formSubmitted ? (
                <div className="space-y-4 text-center">
                  <h2 className="text-2xl font-bold text-green-600">Başvurunuz Alındı</h2>
                  <p>En kısa sürede sizinle iletişime geçilecektir.</p>
                  <Button onClick={() => setFormSubmitted(false)} className="bg-blue-600 hover:bg-blue-700 text-white">
                    Yeni Başvuru Yap
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { id: "name", label: "Ad Soyad", type: "text" },
                      { id: "age", label: "Yaş", type: "number" },
                      { id: "phone", label: "Telefon", type: "tel" },
                      { id: "email", label: "E-posta", type: "email" }
                    ].map(({ id, label, type }) => (
                      <div key={id}>
                        <Label htmlFor={id}>{label}</Label>
                        <Input id={id} type={type} required />
                      </div>
                    ))}
                  </div>

                  <div>
                    <Label className="block mb-2">Terapiler</Label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                      {[
                        "Kaygı Yönetimi",
                        "Depresyon Desteği",
                        "Yas Süreci",
                        "İlişki Sorunları",
                        "Özgüven Geliştirme",
                        "Travma Sonrası Destek"
                      ].map((item, index) => (
                        <label key={index} className="flex items-center gap-2">
                          <Checkbox id={`topic-${index}`} /> <span>{item}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="experience">Deneyiminiz</Label>
                    <Textarea id="experience" rows={3} required />
                  </div>

                  <div>
                    <Label htmlFor="expectations">Beklentileriniz</Label>
                    <Textarea id="expectations" rows={3} required />
                  </div>

                  <div>
                    <Label className="block mb-2">Katılım Şekli</Label>
                    <RadioGroup defaultValue="both" className="flex flex-wrap justify-center gap-6">
                      {[
                        { id: "online", value: "online", label: "Online" },
                        { id: "face-to-face", value: "face-to-face", label: "Yüz yüze" },
                        { id: "both", value: "both", label: "Her ikisi de uygun" }
                      ].map(({ id, value, label }) => (
                        <label key={id} className="flex items-center gap-2">
                          <RadioGroupItem value={value} id={id} /> {label}
                        </label>
                      ))}
                    </RadioGroup>
                  </div>

                  <div className="flex justify-center">
                    <label className="flex items-start gap-2 max-w-xl">
                      <Checkbox id="terms" required />
                      <Label htmlFor="terms" className="text-left">Kuralları kabul ediyorum ve gizliliğe uyacağım.</Label>
                    </label>
                  </div>

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Başvuruyu Gönder
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
