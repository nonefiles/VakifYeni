import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function BaharTokmakPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 py-16">
      <div className="container max-w-4xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="w-48 h-48 mx-auto mb-8 relative rounded-2xl overflow-hidden ring-4 ring-primary/10">
            <Image
              src="https://yolarkadaslari.com/wp-content/uploads/2025/08/WhatsApp-Gorsel-2025-08-22-saat-12.44.35_f7b02a53-420x420.jpg"
              alt="Bahar Tokmak"
              fill
              className="object-cover"
              priority
            />
          </div>
          <h1 className="text-4xl font-bold text-slate-800 mb-4">Bahar Tokmak</h1>
          <p className="text-xl text-primary text-center font-medium">Psikolog</p>
        </div>

        {/* Introduction Quote */}
        <Card className="mb-12 bg-white/70 backdrop-blur-sm border-0 shadow-lg">
          <CardContent className="p-6">
            <blockquote className="text-lg text-slate-700 italic">
              "Psikolog Bahar Tokmak, Hacettepe Üniversitesi Psikoloji Lisans bölümünden onur derecesi ile mezun olmuştur. Aile ve Sosyal Hizmetler, Hacettepe Üniversitesi Laboratuvarı ve Başkent Psikoloji kurumlarında staj yapmıştır. Türk Psikologlar Derneği'nden Bilişsel Davranışçı Terapi eğitimi almaktadır."
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
                <li>• Psikoloji Lisansı – Hacettepe Üniversitesi (2021–2025, onur derecesiyle)</li>
                <li>• Bilişsel Davranışçı Terapi Eğitimi – Türk Psikologlar Derneği (devam ediyor)</li>
              </ul>
            </CardContent>
          </Card>

          {/* Work Experience */}
          <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">Çalıştığı Kurumlar</h2>
              <ul className="space-y-2 text-slate-700">
                <li>• Stajyer Psikolog – T.C. Aile ve Sosyal Hizmetler Bakanlığı (Amasya/Merkez)</li>
                <li>• Araştırmacı – Hacettepe Üniversitesi Gelişim Laboratuvarı (Ankara/Çankaya)</li>
                <li>• Stajyer Psikolog – Başkent Psikoloji (Ankara/Çankaya)</li>
              </ul>
            </CardContent>
          </Card>

          {/* Expertise */}
          <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">Uzmanlık Alanları</h2>
              <ul className="space-y-2 text-slate-700">
                <li>• Anksiyete Bozuklukları</li>
                <li>• Depresyon</li>
                <li>• Panik Bozukluk</li>
                <li>• Travma Sonrası Stres Bozukluğu</li>
              </ul>
            </CardContent>
          </Card>

          {/* Certificates */}
          <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">Sertifikalar ve Katılım Belgeleri</h2>
              <ul className="space-y-2 text-slate-700">
                <li>• Psikolojik İlk Yardım Sertifikası – TPD (2025)</li>
                <li>• Travma, Afet ve Kriz Çalıştayı – TPD (2025)</li>
                <li>• Hacettepe Ruh Sağlığı Sempozyumu Katılım Belgesi (2023)</li>
                <li>• TOG Vakfı Zorbalığı Kafandan At Eğitimi (2023)</li>
                <li>• TOG Vakfı Toplum Gönüllülüğü Oryantasyon Eğitimi (2023)</li>
                <li>• Ankara Üniversitesi 11. Psikoloji Günleri Katılım Belgesi (2024)</li>
              </ul>
            </CardContent>
          </Card>

          {/* Projects and Volunteering */}
          <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">Projeler ve Gönüllülük</h2>
              <ul className="space-y-2 text-slate-700">
                <li>• Türk Psikologlar Derneği – Öğrenci Komisyonu Kolaylaştırıcısı</li>
                <li>• Dernek Gönüllü Koordinasyon Ekibi Üyesi</li>
                <li>• TOG – Yönetim Kurulu Üyesi & İletişim Sorumlusu</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
