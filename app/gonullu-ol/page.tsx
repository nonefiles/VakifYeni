"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { HeartHandshake, Users, BookOpen, Calendar, Building, School, Brain, UserCheck, TestTube, Megaphone, MapPin, Globe, Stethoscope } from "lucide-react"

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

      {/* Psikoloji Alanındaki Uzman / Uzman Adayı Pozisyonları */}
      <section className="py-8 bg-[#ECECE8]">
        <div className="container">
          <h2 className="mb-10 text-center text-3xl font-bold gradient-heading font-lora">Psikoloji Alanındaki Uzman / Uzman Adayı Pozisyonları</h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <VolunteerAreaCard
              icon={<Brain className="h-8 w-8 text-primary" />}
              title="Klinik Psikolog"
              description="Ücretsiz psikoterapi süreçlerinde bireysel veya grup seansları yürütmek."
              isOnlineAvailable={true}
              requirements="Klinik psikoloji alanında yüksek lisans mezunu, terapi deneyimine sahip, gizlilik ve etik ilkelere uyan."
            />
            <VolunteerAreaCard
              icon={<HeartHandshake className="h-8 w-8 text-primary" />}
              title="Psikolog"
              description="Psikolojik destek, farkındalık çalışmaları ve grup oturumları yürütmek."
              isOnlineAvailable={true}
              requirements="Psikoloji lisans mezunu, bireysel ve grup çalışmaları yürütebilecek, iletişim becerileri güçlü."
            />
            <VolunteerAreaCard
              icon={<Building className="h-8 w-8 text-primary" />}
              title="Endüstri ve Örgüt Psikoloğu"
              description="Çalışma hayatı ve organizasyonel psikoloji alanında danışmanlık sağlamak."
              isOnlineAvailable={true}
              requirements="Endüstri ve örgüt psikolojisi alanında yüksek lisans mezunu veya bu alanda uzmanlık eğitimi almış."
            />
            <VolunteerAreaCard
              icon={<Users className="h-8 w-8 text-primary" />}
              title="Sosyal Psikolog"
              description="Toplumsal projelerde psikolojik analiz ve yönlendirme yapmak."
              isOnlineAvailable={true}
              requirements="Sosyal psikoloji alanında yüksek lisans mezunu veya bu alanda akademik çalışma yapmış."
            />
            <VolunteerAreaCard
              icon={<UserCheck className="h-8 w-8 text-primary" />}
              title="Çocuk ve Ergen Psikoloğu"
              description="Çocuk ve ergenlere yönelik görüşmeler ve aile rehberliği sunmak."
              isOnlineAvailable={true}
              requirements="Çocuk ve ergen psikolojisi alanında yüksek lisans mezunu veya bu alanda uzmanlık eğitimi almış, gelişim psikolojisi bilgisine sahip."
            />
            <VolunteerAreaCard
              icon={<HeartHandshake className="h-8 w-8 text-primary" />}
              title="Aile Danışmanı / Evlilik Terapisti"
              description="İlişki ve aile içi iletişim konularında danışmanlık vermek."
              isOnlineAvailable={true}
              requirements="Aile danışmanlığı alanında sertifika veya yüksek lisans sahibi, ilişki ve iletişim konularında deneyimli."
            />
            <VolunteerAreaCard
              icon={<Stethoscope className="h-8 w-8 text-primary" />}
              title="Psikiyatrist"
              description="Psikiyatrik değerlendirme ve tıbbi yönlendirme desteği sağlamak."
              isOnlineAvailable={true}
              requirements="Tıp fakültesi ve psikiyatri ihtisas mezunu, değerlendirme ve yönlendirme konusunda deneyimli."
            />
          </div>
        </div>
      </section>

      {/* Uygulama ve Destek Pozisyonları */}
      <section className="py-8 bg-gradient-to-b from-[#ECECE8] to-[#eff6ff]/30">
        <div className="container">
          <h2 className="mb-10 text-center text-3xl font-bold gradient-heading font-lora">Uygulama ve Destek Pozisyonları</h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <VolunteerAreaCard
              icon={<School className="h-8 w-8 text-primary" />}
              title="Psikoloji Yüksek Lisans / Lisans Öğrencisi"
              description="Terapi süreçleri, atölyeler ve projelerde gözlem ve destek sağlamak."
              isOnlineAvailable={true}
              requirements="Psikoloji lisans veya yüksek lisans öğrencisi, öğrenmeye ve saha deneyimine açık, etik ilkelere uygun çalışabilecek."
            />
            <VolunteerAreaCard
              icon={<BookOpen className="h-8 w-8 text-primary" />}
              title="Araştırma Asistanı"
              description="Psikoloji alanındaki araştırma, veri toplama ve raporlama süreçlerine destek olmak."
              isOnlineAvailable={true}
              requirements="Psikoloji veya ilgili sosyal bilim alanlarında lisans/yüksek lisans öğrencisi veya mezunu, araştırma yöntemleri ve veri toplama süreçlerine hâkim."
            />
            <VolunteerAreaCard
              icon={<TestTube className="h-8 w-8 text-primary" />}
              title="Test ve Ölçek Uygulayıcı"
              description="Psikolojik testlerin (MMPI, WISC, vb.) uygulanması ve raporlanmasına yardımcı olmak."
              isOnlineAvailable={false}
              requirements="İlgili psikolojik testler konusunda eğitim veya sertifika sahibi, uygulama ve raporlama becerisine sahip."
            />
            <VolunteerAreaCard
              icon={<Megaphone className="h-8 w-8 text-primary" />}
              title="Ruh Sağlığı Eğitmeni"
              description="Ruh sağlığı konularında eğitim ve farkındalık çalışmaları yürütmek."
              isOnlineAvailable={true}
              requirements="Psikoloji veya ruh sağlığı alanında eğitimli, topluluk önünde konuşma ve sunum yapma becerisine sahip."
            />
          </div>
        </div>
      </section>

      {/* Topluluk ve İletişim Odaklı Pozisyonlar */}
      <section className="py-12 bg-[#ECECE8]">
        <div className="container">
          <h2 className="mb-10 text-center text-3xl font-bold gradient-heading font-lora">Topluluk ve İletişim Odaklı Pozisyonlar</h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <VolunteerAreaCard
              icon={<Calendar className="h-8 w-8 text-primary" />}
              title="Etkinlik Koordinatörü"
              description="Psikoloji temalı etkinliklerin planlanması, organizasyonu ve yürütülmesini sağlamak."
              isOnlineAvailable={true}
              requirements="Organizasyon ve planlama becerisine sahip, ekip çalışmasına yatkın, psikoloji temalı etkinliklerde görev alabilecek."
            />
            <VolunteerAreaCard
              icon={<Users className="h-8 w-8 text-primary" />}
              title="Destek Grup Kolaylaştırıcısı"
              description="Destek gruplarında süreci yönetmek ve katılımcılar arasında etkileşimi kolaylaştırmak."
              isOnlineAvailable={true}
              requirements="Psikoloji veya ilgili alanlarda eğitimli, grup dinamiklerini yönetebilen, güvenli ve kapsayıcı bir paylaşım ortamı oluşturabilecek."
            />
            <VolunteerAreaCard
              icon={<MapPin className="h-8 w-8 text-primary" />}
              title="Saha Çalışması Gönüllüsü"
              description="Toplumda ruh sağlığı farkındalığı yaratacak saha çalışmalarında görev almak."
              isOnlineAvailable={false}
              requirements="İletişim becerileri güçlü, saha çalışmasına uygun, toplumda ruh sağlığı farkındalığı artırmaya istekli."
            />
          </div>
        </div>
      </section>

      {/* Application Form - Google Form Integration */}
      <section className="py-12 bg-gradient-to-b from-[#ECECE8] to-[#eff6ff]/30">
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
                    için sizinle iletişime geçilecektir.
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
  isOnlineAvailable,
  requirements,
}: {
  icon: React.ReactNode
  title: string
  description: string
  isOnlineAvailable: boolean
  requirements: string
}) {
  const [showRequirements, setShowRequirements] = useState(false)

  return (
    <Card className="bg-white/80 backdrop-blur-sm transition-all duration-300 hover:shadow-md text-center border border-primary/10">
      <CardHeader>
        <div className="mb-2 flex justify-center">{icon}</div>
        <CardTitle className="font-lora gradient-heading text-center flex flex-col items-center gap-2">
          {title}
          {isOnlineAvailable ? (
            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-normal">
              Online/Yüz Yüze
            </span>
          ) : (
            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-normal">
              Sadece Yüz Yüze
            </span>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <CardDescription className="text-base font-aristotelica text-center">
          {description}
        </CardDescription>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setShowRequirements(!showRequirements)}
          className="text-primary hover:bg-primary/10 transition-colors"
        >
          {showRequirements ? "Nitelikleri Gizle" : "Aranan Nitelikleri Gör"}
        </Button>
        
        {showRequirements && (
          <div className="mt-4 p-4 bg-gray-50/80 rounded-lg border border-primary/20">
            <h4 className="font-semibold text-sm text-primary mb-2 text-center">Aranan Nitelikler:</h4>
            <p className="text-sm text-gray-700 text-center font-aristotelica">
              {requirements}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
