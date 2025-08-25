import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function EralpAkgulPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 py-16">
      <div className="container max-w-4xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="w-48 h-48 mx-auto mb-8 relative rounded-2xl overflow-hidden ring-4 ring-primary/10">
            <Image
              src="https://yolarkadaslari.com/wp-content/uploads/2025/07/Ea1-420x420.jpg"
              alt="Eralp Akgül"
              fill
              className="object-cover"
              priority
            />
          </div>
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Eralp Akgül</h1>
          <p className="text-xl text-center text-primary font-medium">Klinik Psikolog</p>
        </div>

        {/* Introduction Quote */}
        <Card className="mb-12 bg-white/70 backdrop-blur-sm border-0 shadow-lg">
          <CardContent className="p-6">
            <blockquote className="text-lg text-slate-700 italic">
              Eralp Akgül, Atılım Üniversitesi Psikoloji bölümünü okul ikincisi, bölüm ve fakülte birincisi olarak yüksek onur derecesiyle tamamlamıştır. Ankara Medipol Üniversitesi'nde Klinik Psikoloji tezli yüksek lisans programında eğitimini sürdürmüştür. Klinik psikoloji stajını Ankara Şehir Hastanesi'nde yapmıştır. Gestalt Terapisi, Bilişsel Davranışçı Terapi, TSSB ve DEHB Terapisi, MMPI Uygulayıcılığı, Wechsler Çocuklar için Zeka Ölçeği-IV gibi çeşitli terapi ve değerlendirme teknikleri üzerine sertifikalı eğitimleri bulunmaktadır. Çözüm Odaklı Terapi yöntemini kullanmaktadır. Malta ve İrlanda'da İngilizce eğitimleri almış olup C1 seviyesinde İngilizce bilmektedir. Jamovi istatistik programında deneyimlidir.
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
                <li>• Psikoloji Lisansı – Atılım Üniversitesi (Yüksek Onur Derecesi, okul ikinciliği, bölüm ve fakülte birinciliği)</li>
                <li>• Klinik Psikoloji Tezli Yüksek Lisans – Ankara Medipol Üniversitesi (devam ediyor)</li>
              </ul>
            </CardContent>
          </Card>

          {/* Clinical Experience */}
          <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">Klinik Deneyim</h2>
              <ul className="space-y-2 text-slate-700">
                <li>• Stajyer Klinik Psikolog – Ankara Şehir Hastanesi</li>
              </ul>
            </CardContent>
          </Card>

          {/* Therapy Approaches */}
          <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">Terapi Yaklaşımları</h2>
              <ul className="space-y-2 text-slate-700">
                <li>• Çözüm Odaklı Kısa Süreli Terapi</li>
                <li>• Gestalt Terapi</li>
                <li>• Bilişsel Davranışçı Terapi</li>
              </ul>
            </CardContent>
          </Card>

          {/* Client Groups */}
          <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">Danışan Grupları</h2>
              <ul className="space-y-2 text-slate-700">
                <li>• Genç Yetişkin</li>
                <li>• Yetişkin</li>
                <li>• Ergen</li>
                <li>• Çocuklar (Zeka Testi uygulamaları)</li>
              </ul>
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">Sertifikalı Eğitimler</h2>
              <ul className="space-y-2 text-slate-700">
                <li>• Gestalt Terapisi ve Süpervizyon – Prof. Dr. Nilhan Sezgin</li>
                <li>• Bilişsel Davranışçı Terapi – Bilgelik Enstitüsü</li>
                <li>• TSSB ve DEHB Terapisi – Bilgelik Enstitüsü</li>
                <li>• MMPI (Minnesota Çok Yönlü Kişilik Envanteri) – Bilgelik Enstitüsü</li>
                <li>• Wechsler Çocuklar için Zeka Ölçeği-IV – Türk Psikologlar Derneği</li>
                <li>• Çocuklarda Psikolojik Değerlendirme Testleri – Ankara Medipol Üniversitesi</li>
                <li>• Managing Emotions in Times of Uncertainty & Stress – Yale University Center for Emotional Intelligence</li>
              </ul>
            </CardContent>
          </Card>

          {/* Language and Technical Skills */}
          <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">Dil ve Teknik Yetkinlikler</h2>
              <ul className="space-y-2 text-slate-700">
                <li>• İngilizce – C1 seviyesi (Malta ve İrlanda'da eğitim almış)</li>
                <li>• Jamovi – İstatistik programı deneyimi</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
