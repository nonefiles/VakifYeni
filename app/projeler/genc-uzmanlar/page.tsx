"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Users,
  Heart,
  Shield,
  Lightbulb,
  Search,
  MapPin,
  Phone,
  Clock,
  BookOpen,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Star,
  Baby,
  Home,
  Award,
  Target,
  Calendar,
  FileText,
  Sparkles,
  HeartHandshake
} from "lucide-react";

// Process steps
const processSteps = [
  {
    id: "1",
    title: "Ön Başvuru",
    description: "Aile, Yol Arkadaşı formunu doldurarak başvuru yapar",
    icon: <FileText className="w-8 h-8 text-blue-600" />,
    color: "blue"
  },
  {
    id: "2",
    title: "Görüşme ve Planlama",
    description: "Aile ile yapılan ilk toplantıda süreç planlanır ve hedefler belirlenir",
    icon: <Users className="w-8 h-8 text-green-600" />,
    color: "green"
  },
  {
    id: "3",
    title: "Gelişim Değerlendirmesi",
    description: "Çocuğun güçlü ve gelişmesi gereken yönleri değerlendirilir",
    icon: <Target className="w-8 h-8 text-purple-600" />,
    color: "purple"
  },
  {
    id: "4",
    title: "Çalışma Başlangıcı",
    description: "Haftalık belirlenen günlerde çocuğun evinde etkinlikler gerçekleştirilir",
    icon: <Home className="w-8 h-8 text-orange-600" />,
    color: "orange"
  },
  {
    id: "5",
    title: "Raporlama ve Geri Bildirim",
    description: "Her periyot sonunda aileye detaylı raporlama yapılır",
    icon: <Award className="w-8 h-8 text-red-600" />,
    color: "red"
  }
];

// Benefits of the Yol Arkadaşı system
const benefits = [
  {
    id: "1",
    title: "Potansiyel Keşfi",
    description: "Çocuğun potansiyelini keşfetme ve yetenek alanlarını belirleme",
    icon: <Sparkles className="w-6 h-6 text-yellow-500" />
  },
  {
    id: "2",
    title: "Aile İletişimi",
    description: "Aile içi iletişimi güçlendirme ve bağları sağlamlaştırma",
    icon: <HeartHandshake className="w-6 h-6 text-pink-500" />
  },
  {
    id: "3",
    title: "Zekâ Gelişimi",
    description: "Zekâ ve dikkat gelişimi için özel destek programları",
    icon: <Lightbulb className="w-6 h-6 text-blue-500" />
  },
  {
    id: "4",
    title: "Sosyal Beceriler",
    description: "Sosyal becerileri geliştirme ve çevre ile etkileşimi artırma",
    icon: <Users className="w-6 h-6 text-green-500" />
  },
  {
    id: "5",
    title: "Yaratıcılık",
    description: "Yaratıcılığı artırma ve sanatsal yetenekleri keşfetme",
    icon: <Star className="w-6 h-6 text-purple-500" />
  },
  {
    id: "6",
    title: "Akademik Başarı",
    description: "Akademik başarıya destek ve ders başarısını artırma",
    icon: <BookOpen className="w-6 h-6 text-indigo-500" />
  },
  {
    id: "7",
    title: "Rol Model",
    description: "Pozitif rol model olma ve özgüven geliştirme",
    icon: <Shield className="w-6 h-6 text-teal-500" />
  },
  {
    id: "8",
    title: "Ev Ortamı",
    description: "Çocuğun kendi ortamında rahat gelişim sağlama",
    icon: <Home className="w-6 h-6 text-orange-500" />
  }
];

// Family responsibilities
const familyResponsibilities = [
  "Randevu saatlerine uyulması",
  "Program değişikliklerinin önceden bildirilmesi",
  "Çocukla ilgili bilgilerin eksiksiz aktarılması",
  "Çalışma sırasında ebeveynlerin evde bulunması"
];

// Process card component
const ProcessCard: React.FC<{ step: any; index: number }> = ({ step, index }) => {
  return (
    <div className="bg-white border rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 flex flex-col group relative">
      <div className="absolute -top-4 left-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
        {index + 1}
      </div>

      <div className="flex justify-center mb-4 mt-2">{step.icon}</div>

      <h3 className="text-xl font-semibold text-blue-800 group-hover:text-blue-600 mb-2 text-center">
        {step.title}
      </h3>

      <p className="text-sm text-gray-600 text-center leading-relaxed">
        {step.description}
      </p>
    </div>
  );
};

// Benefit card component
const BenefitCard: React.FC<{ benefit: any }> = ({ benefit }) => {
  return (
    <div className="bg-white border rounded-2xl shadow-sm p-6 group hover:shadow-md transition-all duration-300 text-center">
      <div className="flex justify-center mb-4">
        {benefit.icon}
      </div>
      <h3 className="font-semibold text-gray-800 mb-3">{benefit.title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed text-center">
        {benefit.description}
      </p>
    </div>
  );
};

// Main component
const CocugunYolArkadasi: React.FC = () => {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-sky-50 py-20">
      <div className="container space-y-16">
        {/* Header */}
        <header className="text-center space-y-6">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 rounded-full">
              <Baby className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-extrabold tracking-tight text-blue-700 drop-shadow-sm">
            Çocuğun Yol Arkadaşı
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed text-center">
            Çocuğunuzun potansiyelini keşfetmesi, yeteneklerini geliştirmesi ve güçlü bir gelecek inşa etmesi için özel olarak tasarlanmış profesyonel destek programı.
          </p>
        </header>

        {/* Who is Yol Arkadaşı? */}
        <section className="bg-white rounded-3xl p-8 shadow-sm border">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">
              Çocuğun Yol Arkadaşı Kimdir?
            </h2>
          </div>

          <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-700 leading-relaxed text-lg mb-6 text-center">
            "Çocuğun Yol Arkadaşı", çocuk ve gençlere evde destek vermek için özel olarak eğitilmiş, 
            <strong className="text-blue-700"> Psikoloji, Psikolojik Danışmanlık ve Rehberlik, Sosyal Hizmet ve Çocuk Gelişimi gibi alanlarda </strong>
            eğitim gören son sınıf öğrencileri veya mezunlardan oluşur.
          </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-blue-50 p-6 rounded-2xl text-center">
                <BookOpen className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-blue-800 mb-2">Eğitimli Uzmanlar</h3>
                <p className="text-sm text-gray-600 text-center">Psikoloji ve çocuk gelişimi alanında uzman</p>
              </div>

              <div className="bg-green-50 p-6 rounded-2xl text-center">
                <Target className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-green-800 mb-2">Hedef Odaklı</h3>
                <p className="text-sm text-gray-600 text-center">Çocuğun potansiyelini keşfetmeye odaklanmış</p>
              </div>

              <div className="bg-purple-50 p-6 rounded-2xl text-center">
                <HeartHandshake className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold text-purple-800 mb-2">Aile Dostu</h3>
                <p className="text-sm text-gray-600 text-center">Ailelere rehberlik ve bilinç kazandırma</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">
              Sürecin Adımları
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-center">
              Çocuğunuzun gelişim yolculuğu 5 temel adımda gerçekleşir
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {processSteps.map((step, index) => (
              <ProcessCard key={step.id} step={step} index={index} />
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">
              Yol Arkadaşı Sisteminin Faydaları
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-center">
              Çocuğunuzun gelişimine katkı sağlayacak kapsamlı destek alanları
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <BenefitCard key={benefit.id} benefit={benefit} />
            ))}
          </div>
        </section>

        {/* Family Responsibilities */}
        <section className="bg-gradient-to-r from-orange-50 to-red-50 rounded-3xl p-8 border border-orange-200">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-orange-800 mb-4">
              Ailenin Yükümlülükleri
            </h2>
            <p className="text-orange-700 max-w-2xl mx-auto text-center">
              Sürecin başarılı olabilmesi için ailelerin dikkat etmesi gereken önemli noktalar
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="grid gap-4 sm:grid-cols-2">
              {familyResponsibilities.map((responsibility, index) => (
                <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm text-center">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5 mx-auto" />
                  <span className="text-gray-700 text-sm text-center w-full">{responsibility}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="bg-white rounded-3xl p-8 shadow-sm border">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">
              Yol Arkadaşlarının Misyonu
            </h2>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center">
              Yol Arkadaşları, çocuğun hem evde hem sosyal hayatta desteklenmesini sağlayarak
              yalnızlık hissini önlemeyi ve aile bağlarını güçlendirmeyi hedefler. Bu süreçte
              çocuklar sosyal beceriler kazanırken aileler de çocuklarının gelişimine daha fazla katkı sağlar.
            </p>

            <div className="flex justify-center space-x-8 flex-wrap gap-4">
              <div className="flex items-center gap-2 text-blue-600">
                <Heart className="w-6 h-6" />
                <span className="font-medium">Duygusal Destek</span>
              </div>
              <div className="flex items-center gap-2 text-green-600">
                <Shield className="w-6 h-6" />
                <span className="font-medium">Güvenli Ortam</span>
              </div>
              <div className="flex items-center gap-2 text-purple-600">
                <Sparkles className="w-6 h-6" />
                <span className="font-medium">Potansiyel Keşfi</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section with Baby Blue Background and Centered Text */}
        <section className="bg-gradient-to-r from-blue-200 to-blue-300 rounded-3xl p-12 text-gray-800">
          <h3 className="text-3xl font-bold mb-4 text-center">
            Çocuğunuzun Potansiyelini Keşfedin
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto text-center">
            Yol Arkadaşları Danışmanlık Merkezi olarak, çocukların ihtiyaç duyduğu destek ve rehberliği
            sağlamak üzere buradayız. Çocuğunuzun potansiyelini keşfetmesi için bizimle iletişime geçin.
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <Button
              className="bg-white text-blue-600 hover:bg-gray-50 hover:scale-105 px-10 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-white"
            >
              <Phone className="w-6 h-6 mr-3" />
              Hemen Başvur
            </Button>
            <Button
              variant="outline"
              className="border-2 border-white text-gray-800 hover:bg-white hover:text-blue-600 hover:scale-105 px-10 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 bg-transparent backdrop-blur-sm"
            >
              <Heart className="w-6 h-6 mr-3" />
              Daha Fazla Bilgi
            </Button>
          </div>
        </section>

        {/* Special Message */}
        <section className="bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-8 border border-green-200">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-gradient-to-r from-green-500 to-blue-500 p-3 rounded-full">
                <HeartHandshake className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Her Çocuk Özeldir, Her Çocuk Değerlidir
            </h3>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto italic text-center">
              "Çocukların sadece zekâ skoru üzerinden değil, çok yönlü bir yaklaşımla potansiyellerini
              fark etmelerine yardımcı olmayı hedefliyoruz. Çocuğunuzun eşsiz yeteneklerini keşfetmek
              için birlikte çalışalım."
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default CocugunYolArkadasi;
