import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function OykuYildizPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 py-16">
      <div className="container max-w-4xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="w-72 h-72 mx-auto mb-8 relative rounded-2xl overflow-hidden ring-4 ring-primary/10">
            <Image
              src="/images/team/oyku-yildiz.jpg"
              alt="Öykü Yıldız"
              fill
              className="object-cover"
              priority
            />
          </div>
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Öykü Yıldız</h1>
          <p className="text-xl text-center text-primary font-medium">Uzman Psikolog & Aile Danışmanı</p>
        </div>

        {/* Introduction Quote */}
        <Card className="mb-12 bg-white/70 backdrop-blur-sm border-0 shadow-lg">
          <CardContent className="p-6">
            <blockquote className="text-lg text-slate-700 italic">
              Öykü Yıldız, TED Üniversitesi Psikoloji bölümünden mezun olmuş, Ankara Sosyal Bilimler Üniversitesi'nde Aile Danışmanlığı alanında yüksek lisans yapmıştır. TED Üniversitesi Psikoloji Bölümü Uygulamalı Psikoloji Birimi ve Araştırma Laboratuvarı'nda klinik görüşme ve test uygulamalarına katılmıştır. GKT Psikoloji bünyesinde çocuk ve yetişkinlerle klinik çalışmalar yürütmüş, atölyeler düzenlemiştir. Özel bir anaokulunda kurum psikoloğu olarak görev almış ve ebeveyn danışmanlığı yapmıştır. Travma sonrası dayanıklılık ve büyüme temalı sosyal sorumluluk projelerinde aktif rol almıştır.
            </blockquote>
          </CardContent>
        </Card>

        {/* Main Content */}
        <div className="grid gap-8">
          {/* Education */}
          <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">Eğitim Bilgileri</h2>
              <ul className="space-y-2 text-slate-700">
                <li>• Psikoloji Lisansı – TED Üniversitesi</li>
                <li>• Aile Danışmanlığı Yüksek Lisans – Ankara Sosyal Bilimler Üniversitesi</li>
              </ul>
            </CardContent>
          </Card>

          {/* Therapy Approaches */}
          <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">Terapi Yaklaşımları</h2>
              <ul className="space-y-2 text-slate-700">
                <li>• Bilişsel Davranışçı Terapi</li>
                <li>• Oyun Terapisi</li>
                <li>• Filial Terapi</li>
              </ul>
            </CardContent>
          </Card>

          {/* Client Groups */}
          <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">Danışan Grupları</h2>
              <ul className="space-y-2 text-slate-700">
                <li>• Çocuk</li>
                <li>• Ergen</li>
                <li>• Yetişkin</li>
                <li>• Aile ve Çift</li>
              </ul>
            </CardContent>
          </Card>

          {/* Trainings */}
          <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">Aldığı Eğitimler</h2>
              <ul className="space-y-2 text-slate-700">
                <li>• Yetişkin Bilişsel Davranışçı Terapi – İzmir Psikoloji Enstitüsü (40 saat)</li>
                <li>• Çocuk-Ergen Bilişsel Davranışçı Terapi – Bilişsel Davranışçı Psikoterapiler Derneği (80 saat)</li>
                <li>• Oyun Terapisi Uygulayıcı Eğitimi (20 saat)</li>
                <li>• Oyun Terapisi Süpervizyon (14 saat)</li>
                <li>• Çocuk Değerlendirme Testleri Uygulayıcı Eğitimi (20 saat)</li>
                <li>• Bilişsel Davranışçı Eş ve Aile Terapisi – Ankara Sosyal Bilimler Üniversitesi / Prof. Dr. Hakan Türkçapar</li>
              </ul>
            </CardContent>
          </Card>

          {/* Clinical Experience */}
          <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">Klinik ve Kurumsal Deneyim</h2>
              <ul className="space-y-2 text-slate-700">
                <li>• TED Üniversitesi Psikoloji Bölümü – Klinik görüşme ve test uygulamaları</li>
                <li>• GKT Psikoloji – Çocuk ve yetişkinlerle klinik çalışmalar, atölye düzenleme</li>
                <li>• Özel Anaokulu – Kurum psikoloğu, ebeveyn danışmanlığı</li>
              </ul>
            </CardContent>
          </Card>

          {/* Social Responsibility */}
          <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">Sosyal Sorumluluk ve Organizasyonlar</h2>
              <ul className="space-y-2 text-slate-700">
                <li>• 1. Ankara Travma Sempozyumu – Görevli (Türk Psikologlar Birliği)</li>
                <li>• "Elin Elimde" Psikososyal Destek Projesi – Gönüllü (Depremden etkilenen çocuklarla 1 yıl çalışma)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
