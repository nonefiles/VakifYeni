import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function BusenazOtluPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 py-16">
      <div className="container max-w-4xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="w-72 h-72 mx-auto mb-8 relative rounded-2xl overflow-hidden ring-4 ring-primary/10">
            <Image
              src="https://yolarkadaslari.com/wp-content/uploads/2025/07/BuseNaz-420x420.jpg"
              alt="Busenaz Otlu"
              fill
              className="object-cover"
              priority
            />
          </div>
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Busenaz Otlu</h1>
          <p className="text-xl text-center text-primary font-medium">Klinik Psikolog</p>
        </div>

        {/* Introduction Quote */}
        <Card className="mb-12 bg-white/70 backdrop-blur-sm border-0 shadow-lg">
          <CardContent className="p-6">
            <blockquote className="text-lg text-slate-700 italic">
              Busenaz Otlu, psikoloji lisans eğitimini Orta Doğu Teknik Üniversitesi'nde tamamlamış, ardından Okan Üniversitesi'nde Klinik Psikoloji alanında tezli yüksek lisans sürecine başlamıştır. Şu an beden algısı ve bağlanma stillerinin premenstrüel dönem üzerindeki etkisi başlıklı tezini bitirme aşamasındadır. Yetişkin bireylere Yılmaz Yol Arkadaşları Danışmanlık Merkezinde bireysel terapi hizmeti sunmaktadır.
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
                <li>• Psikoloji Lisansı – Orta Doğu Teknik Üniversitesi (İngilizce program)</li>
                <li>• Klinik Psikoloji Tezli Yüksek Lisans – Okan Üniversitesi (tez aşamasında)</li>
                <li className="pl-4">◦ Tez başlığı: Beden algısı ve bağlanma stillerinin premenstrüel dönem üzerindeki etkisi</li>
              </ul>
            </CardContent>
          </Card>

          {/* Therapy Approach */}
          <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">Terapi Yaklaşımı</h2>
              <ul className="space-y-2 text-slate-700">
                <li>• Bilişsel Davranışçı Terapi (BDT)</li>
              </ul>
            </CardContent>
          </Card>

          {/* Client Groups */}
          <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">Danışan Grubu</h2>
              <ul className="space-y-2 text-slate-700">
                <li>• Yetişkin bireyler</li>
              </ul>
            </CardContent>
          </Card>

          {/* Trainings */}
          <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">Aldığı Eğitimler</h2>
              <ul className="space-y-2 text-slate-700">
                <li>• Cinsel Terapi Uygulayıcı Eğitimi – Arel Üniversitesi (120 saat)</li>
                <li>• Cinsel Terapi Eğitimi – Gedik Üniversitesi (36 saat)</li>
                <li>• Konsantrasyon Eğitimi – İstanbul İşletme Enstitüsü</li>
                <li>• Afet Destek Programı – Ev Okulu Derneği (14 saat)</li>
                <li>• Oyun Terapisi – Türkiye Psikoloji Enstitüsü</li>
              </ul>
            </CardContent>
          </Card>

          {/* Seminars */}
          <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">Katıldığı Seminerler</h2>
              <ul className="space-y-2 text-slate-700">
                <li>• Zirve Psikoloji Seminerleri</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
