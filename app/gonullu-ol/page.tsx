"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { HeartHandshake, Users, BookOpen, Calendar, Building, School } from "lucide-react"

export default function VolunteerPage() {
  const [showForm, setShowForm] = useState(false)

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

      {/* Application Form - Google Form Integration */}
      <section className="py-16 bg-gradient-to-b from-[#ECECE8] to-[#eff6ff]/30">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-10 text-center text-3xl font-bold gradient-heading font-lora">
              Gönüllülük Başvuru Formu
            </h2>

            {!showForm ? (
              <Card className="bg-white/80 backdrop-blur-sm border border-primary/10">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <HeartHandshake className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="font-lora gradient-heading text-2xl">Gönüllülük Başvuru Formu</CardTitle>
                  <CardDescription className="text-center font-aristotelica text-lg">
                    Vakıf çalışmalarımıza gönüllü olarak destek vermek isterseniz, sizi bu anlamlı yolculuğa davet
                    ediyoruz. Hangi alanda katkı sunmak istersiniz, ne kadar zaman ayırabilirsiniz, birlikte
                    değerlendirelim.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button
                    onClick={() => setShowForm(true)}
                    className="bg-primary text-white hover:bg-primary/90 transition-all duration-300 px-8 py-3 text-lg"
                  >
                    Başvuru Formunu Aç
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Card className="bg-white/80 backdrop-blur-sm border border-primary/10 overflow-hidden">
                <CardHeader className="bg-primary/5 border-b border-primary/10">
                  <div className="flex items-center justify-between">
                    <CardTitle className="font-lora gradient-heading">Gönüllülük Başvuru Formu</CardTitle>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowForm(false)}
                      className="h-8 w-8 p-0 hover:bg-primary/10"
                    >
                      <span className="text-xl">×</span>
                    </Button>
                  </div>
                  <CardDescription className="font-aristotelica">
                    Formu doldurarak gönüllülük başvurunuzu tamamlayabilirsiniz.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="relative">
                    <iframe
                      src="https://docs.google.com/forms/d/e/1FAIpQLScp7j634ljujEFDqZ1FAnJ9Z6cc50suLZ7lK-OOjA7lO-KHCg/viewform?embedded=true"
                      className="w-full border-0"
                      style={{ height: '800px' }}
                      title="Gönüllülük Başvuru Formu"
                      loading="lazy"
                    />
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Info Cards Below Form */}
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <Card className="bg-white/80 backdrop-blur-sm border border-primary/10">
                <CardHeader>
                  <CardTitle className="font-lora gradient-heading text-center flex items-center justify-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    Değerlendirme Süreci
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="font-aristotelica">
                    Başvurunuz alındıktan sonra ekibimiz tarafından değerlendirilecek ve uygun gönüllülük alanları 
                    için sizinle iletişime geçilecektir. Bu süreç genellikle 1-2 hafta sürmektedir.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border border-primary/10">
                <CardHeader>
                  <CardTitle className="font-lora gradient-heading text-center flex items-center justify-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    Eğitim ve Destek
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="font-aristotelica">
                    Gönüllülerimize gerekli eğitimler ve sürekli destek sağlanmaktadır. Hiçbir konuda yalnız 
                    kalmayacağınızdan emin olabilirsiniz.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
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
