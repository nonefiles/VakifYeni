import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function BetulCavumirzaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 py-16">
      <div className="container max-w-4xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="w-72 h-72 mx-auto mb-8 relative rounded-2xl overflow-hidden ring-4 ring-primary/10">
            <Image
              src="/images/team/betul-cavumirza.jpeg"
              alt="Betül Çavumirza"
              fill
              className="object-cover"
              priority
            />
          </div>
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Betül Çavumirza</h1>
          <p className="text-xl text-center text-primary font-medium">Psikolog</p>
        </div>

        {/* Introduction Quote */}
        <Card className="mb-12 bg-white/70 backdrop-blur-sm border-0 shadow-lg">
          <CardContent className="p-6">
            <blockquote className="text-lg text-slate-700 italic">
              Betül Yüksel Çavumirza, Paris Descartes Üniversitesi'nde Psikoloji Lisans bölümünden mezun olmuştur. Türkiye'ye dönerek Ruh ve Sinir Hastalıkları Hastanesi'nde gönüllü staj yapmış ve Prof. Dr. Murad Atmaca tarafından Bilişsel Davranışçı Terapi (BDT) eğitimi almıştır. Uzun süreli bir eğitim sürecinin ardından, Dr. İbrahim Bilgen tarafından temel, orta ve ileri seviyelerde Kabul ve Kararlılık Terapisi (ACT) eğitimi almıştır. Ergen ve yetişkin bireylere Yılmaz Yol Arkadaşları Danışmanlık Merkezinde bireysel terapi hizmeti sunmaktadır.
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
                <li>• Psikoloji Lisansı – Institut de Psychologie René Descartes (Paris Descartes Üniversitesi)</li>
              </ul>
            </CardContent>
          </Card>

          {/* Clinical Experience */}
          <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">Klinik Deneyim</h2>
              <ul className="space-y-2 text-slate-700">
                <li>• Ruh ve Sinir Hastalıkları Hastanesi – Gönüllü staj</li>
                <li>• Hopital de Jour Pouchet (Paris) – Psikoz tanısı almış hastalarla çalışma</li>
                <li>• Hopital de Jour Entraide Universitaire (Paris) – Otizm tanısı almış çocuklarla gündüz tedavi ve rehabilitasyon çalışmaları</li>
              </ul>
            </CardContent>
          </Card>

          {/* Therapy Approaches */}
          <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">Terapi Yaklaşımları</h2>
              <ul className="space-y-2 text-slate-700">
                <li>• Bilişsel Davranışçı Terapi (BDT)</li>
                <li>• Kabul ve Kararlılık Terapisi (ACT) – Temel, orta ve ileri seviye</li>
              </ul>
            </CardContent>
          </Card>

          {/* Client Groups */}
          <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">Danışan Grupları</h2>
              <ul className="space-y-2 text-slate-700">
                <li>• Ergen</li>
                <li>• Yetişkin</li>
              </ul>
            </CardContent>
          </Card>

          {/* Areas of Expertise */}
          <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">Çalışma Alanları</h2>
              <ul className="space-y-2 text-slate-700">
                <li>• Depresyon</li>
                <li>• Yaygın Anksiyete Bozukluğu</li>
                <li>• Davranış Bozuklukları</li>
                <li>• Panik Atak</li>
                <li>• Stres</li>
                <li>• Sosyal Fobi</li>
                <li>• Yeme Bozuklukları</li>
                <li>• Aile İçi İletişim Sorunları</li>
                <li>• Motivasyon Eksikliği</li>
                <li>• İlişki Problemleri</li>
                <li>• Özgüven Sorunları</li>
                <li>• Kaygı Bozuklukları</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
