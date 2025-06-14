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
  Star
} from "lucide-react";

// Community services data
const communityServices = [
  {
    id: "1",
    title: "Toplum Ruh Sağlığı Merkezleri (TRSM)",
    description: "Bölgenizdeki TRSM'lerde ücretsiz psikolojik destek alabilirsiniz",
    detailedDescription: "Toplum Ruh Sağlığı Merkezleri, bireylerin ruh sağlığını koruma, geliştirme ve ruhsal hastalıkların tedavisinde toplum temelli hizmet veren birimlerdir. Multidisipliner ekip yaklaşımı ile hizmet verilmektedir.",
    services: ["Bireysel Terapi", "Grup Terapisi", "Aile Danışmanlığı", "Psikiyatrik Değerlendirme"],
    location: "İl ve İlçe Merkezleri",
    phone: "ALO 183",
    hours: "08:00 - 17:00",
    icon: <MapPin className="w-8 h-8 text-blue-600" />,
    category: "Kamu Hizmeti",
    urgent: false
  },
  {
    id: "2", 
    title: "ALO 183 Sosyal Destek Hattı",
    description: "7/24 ücretsiz psikolojik destek ve danışmanlık hizmeti",
    detailedDescription: "Aile ve Sosyal Hizmetler Bakanlığı tarafından sunulan ücretsiz danışmanlık hattı. Uzman psikologlar tarafından 7/24 psikolojik destek sağlanmaktadır.",
    services: ["Kriz Müdahalesi", "Psikolojik Danışmanlık", "Yönlendirme", "Acil Destek"],
    location: "Türkiye Geneli",
    phone: "183",
    hours: "7/24",
    icon: <Phone className="w-8 h-8 text-red-600" />,
    category: "Acil Destek",
    urgent: true
  },
  {
    id: "3",
    title: "Yerel Belediye Psikolojik Destek",
    description: "Belediyeler tarafından sunulan ücretsiz psikolojik destek hizmetleri",
    detailedDescription: "Birçok büyükşehir ve ilçe belediyesi vatandaşlarına ücretsiz psikolojik destek hizmeti sunmaktadır. Online ve yüz yüze danışmanlık seçenekleri mevcuttur.",
    services: ["Bireysel Danışmanlık", "Aile Terapisi", "Çocuk Psikolojisi", "Yaşlı Danışmanlığı"],
    location: "Belediye Hizmet Binaları",
    phone: "Belediye Numaraları",
    hours: "08:30 - 17:30",
    icon: <Users className="w-8 h-8 text-green-600" />,
    category: "Yerel Hizmet",
    urgent: false
  },
  {
    id: "4",
    title: "Üniversite Psikoloji Birimleri",
    description: "Üniversitelerdeki psikoloji bölümleri tarafından sunulan hizmetler",
    detailedDescription: "Üniversitelerin psikoloji bölümleri, hem öğrencilere hem de halka yönelik düşük maliyetli veya ücretsiz psikolojik destek hizmetleri sunmaktadır.",
    services: ["Psikolojik Değerlendirme", "Terapi Seansları", "Grup Çalışmaları", "Araştırma Katılımı"],
    location: "Üniversite Kampüsleri",
    phone: "Üniversite Santral",
    hours: "09:00 - 17:00",
    icon: <BookOpen className="w-8 h-8 text-purple-600" />,
    category: "Akademik",
    urgent: false
  }
];

// Mental health statistics
const statistics = [
  {
    id: "1",
    number: "1/4",
    title: "Kişi Etkilenir",
    description: "Her 4 kişiden 1'i yaşamında en az bir kez ruh sağlığı sorunu yaşar"
  },
  {
    id: "2", 
    number: "%70",
    title: "Tedavi Başarısı",
    description: "Doğru tedavi ile ruh sağlığı sorunlarının %70'i başarıyla tedavi edilir"
  },
  {
    id: "3",
    number: "450M",
    title: "Küresel Etki",
    description: "Dünya genelinde 450 milyon insan ruh sağlığı sorunları yaşamaktadır"
  },
  {
    id: "4",
    number: "%40",
    title: "Gençlerde Artış",
    description: "Gençlerde ruh sağlığı sorunları son 10 yılda %40 artış göstermiştir"
  }
];

// Warning signs data
const warningSigns = [
  {
    id: "1",
    title: "Duygusal Değişikler",
    signs: ["Sürekli üzüntü", "Aşırı kaygı", "Öfke patlamaları", "Duygusal uyuşukluk"],
    icon: <Heart className="w-6 h-6 text-red-500" />
  },
  {
    id: "2",
    title: "Davranışsal Değişikler", 
    signs: ["Sosyal izolasyon", "Uyku düzeninde bozulma", "İştahta değişiklik", "Madde kullanımı"],
    icon: <Users className="w-6 h-6 text-orange-500" />
  },
  {
    id: "3",
    title: "Fiziksel Belirtiler",
    signs: ["Sürekli baş ağrısı", "Sindirim sorunları", "Yorgunluk", "Kas gerginliği"],
    icon: <Shield className="w-6 h-6 text-blue-500" />
  },
  {
    id: "4",
    title: "Bilişsel Değişikler",
    signs: ["Konsantrasyon güçlüğü", "Karar vermede zorluk", "Unutkanlık", "Olumsuz düşünceler"],
    icon: <Lightbulb className="w-6 h-6 text-purple-500" />
  }
];

// Service card component
const ServiceCard: React.FC<{ service: any }> = ({ service }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white border rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 flex flex-col group relative text-center">
      {service.urgent && (
        <div className="absolute -top-2 -right-2 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
          ACİL
        </div>
      )}
      
      <div className="flex justify-center mb-4">{service.icon}</div>
      
      <h3 className="text-xl font-semibold text-blue-800 group-hover:text-blue-600 mb-2 text-center">
        {service.title}
      </h3>
      
      <p className="text-sm text-muted-foreground mb-4 text-center">
        {service.description}
      </p>

      <div className="bg-blue-50 p-4 rounded-xl mb-4 space-y-3 text-center">
        <div className="flex items-center gap-2 justify-center">
          <MapPin className="w-4 h-4 text-gray-600" />
          <span className="text-sm text-gray-700">{service.location}</span>
        </div>
        <div className="flex items-center gap-2 justify-center">
          <Phone className="w-4 h-4 text-gray-600" />
          <span className="text-sm text-gray-700">{service.phone}</span>
        </div>
        <div className="flex items-center gap-2 justify-center">
          <Clock className="w-4 h-4 text-gray-600" />
          <span className="text-sm text-gray-700">{service.hours}</span>
        </div>
      </div>

      {isExpanded && (
        <div className="mb-4 space-y-3">
          <p className="text-gray-700 text-sm leading-relaxed text-center">
            {service.detailedDescription}
          </p>
          <div>
            <h4 className="font-medium text-gray-800 mb-2 text-center">Sunulan Hizmetler:</h4>
            <ul className="space-y-1">
              {service.services.map((serviceItem: string, index: number) => (
                <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  {serviceItem}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <Button
        onClick={() => setIsExpanded(!isExpanded)}
        variant="ghost"
        className="w-full mb-3 text-blue-600 hover:bg-blue-50"
      >
        {isExpanded ? "Daha Az Göster" : "Detayları Gör"}
        <ArrowRight className={`w-4 h-4 ml-2 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
      </Button>

      <Button
        onClick={() => window.open(`tel:${service.phone}`, "_blank")}
        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:brightness-110 rounded-xl"
      >
        İletişime Geç
      </Button>
    </div>
  );
};

// Statistics card component
const StatCard: React.FC<{ stat: any }> = ({ stat }) => {
  return (
    <div className="bg-white border rounded-2xl shadow-sm p-6 text-center group hover:shadow-md transition-all duration-300">
      <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
      <div className="font-semibold text-gray-800 mb-2">{stat.title}</div>
      <div className="text-sm text-gray-600">{stat.description}</div>
    </div>
  );
};

// Warning signs card component
const WarningCard: React.FC<{ warning: any }> = ({ warning }) => {
  return (
    <div className="bg-white border rounded-2xl shadow-sm p-6 group hover:shadow-md transition-all duration-300">
      <div className="flex items-center gap-3 mb-4">
        {warning.icon}
        <h3 className="font-semibold text-gray-800">{warning.title}</h3>
      </div>
      <ul className="space-y-2">
        {warning.signs.map((sign: string, index: number) => (
          <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            {sign}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Filter buttons component
const FilterButtons: React.FC<{
  filter: string;
  setFilter: (filter: string) => void;
}> = ({ filter, setFilter }) => {
  const buttons = [
    { label: "Hepsi", value: "all" },
    { label: "Acil Destek", value: "Acil Destek" },
    { label: "Kamu Hizmeti", value: "Kamu Hizmeti" },
    { label: "Yerel Hizmet", value: "Yerel Hizmet" },
    { label: "Akademik", value: "Akademik" },
  ];

  return (
    <div className="flex gap-2 justify-center flex-wrap">
      {buttons.map((btn) => (
        <Button
          key={btn.value}
          variant={filter === btn.value ? "default" : "ghost"}
          onClick={() => setFilter(btn.value)}
          className={
            filter === btn.value
              ? "capitalize px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 text-sm"
              : "capitalize px-4 py-2 rounded-full text-muted-foreground border text-sm"
          }
        >
          {btn.label}
        </Button>
      ))}
    </div>
  );
};

// Main community mental health page component
const CommunityMentalHealthPage: React.FC = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const filteredServices = communityServices.filter((service) => {
    const matchesSearch = service.title.toLowerCase().includes(search.toLowerCase()) ||
                         service.description.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "all" || service.category === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-sky-50 py-20">
      <div className="container space-y-16">
        {/* Header */}
        <header className="text-center space-y-4">
          <h1 className="text-5xl font-extrabold tracking-tight text-blue-700 drop-shadow-sm">
            Toplum Ruh Sağlığı
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Toplumumuzda ruh sağlığı hizmetlerine erişim, farkındalık ve destek sistemleri hakkında kapsamlı bilgiler.
          </p>
        </header>

        {/* Emergency Alert */}
        <section className="bg-red-50 border border-red-200 rounded-3xl p-6 max-w-4xl mx-auto text-center">
          <div className="flex items-start gap-4 justify-center text-left">
            <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
            <div className="text-center">
              <h3 className="text-xl font-bold text-red-800 mb-2">Acil Durum?</h3>
              <p className="text-red-700 mb-4">
                Kendinize veya başkalarına zarar verme düşünceleriniz varsa hemen yardım alın.
              </p>
              <div className="flex gap-3 flex-wrap justify-center">
                <Button 
                  onClick={() => window.open("tel:183", "_blank")}
                  className="bg-red-600 hover:bg-red-700 text-white rounded-xl"
                >
                  ALO 183'ü Ara
                </Button>
                <Button 
                  onClick={() => window.open("tel:112", "_blank")}
                  variant="outline" 
                  className="border-red-300 text-red-700 hover:bg-red-50 rounded-xl"
                >
                  112 Acil Servis
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">
              Ruh Sağlığı İstatistikleri
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Toplum ruh sağlığının önemini gösteren güncel veriler
            </p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {statistics.map((stat) => (
              <StatCard key={stat.id} stat={stat} />
            ))}
          </div>
        </section>

        {/* Warning Signs */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">
              Uyarı İşaretleri
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ruh sağlığı sorunlarının erken belirtilerini tanımak önemlidir
            </p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {warningSigns.map((warning) => (
              <WarningCard key={warning.id} warning={warning} />
            ))}
          </div>
        </section>

        {/* Services Filter */}
        <section className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between bg-white p-6 rounded-2xl border shadow">
          <div className="relative w-full sm:max-w-xs mx-auto sm:mx-0">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Hizmet ara..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>
          <FilterButtons filter={filter} setFilter={setFilter} />
        </section>

        {/* Services */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">
              Toplum Ruh Sağlığı Hizmetleri
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Size en yakın ruh sağlığı hizmetlerine ücretsiz erişim sağlayın
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {filteredServices.length === 0 ? (
              <p className="text-center col-span-full text-muted-foreground">
                Arama kriterlerinize uygun hizmet bulunamadı.
              </p>
            ) : (
              filteredServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Yardıma İhtiyacınız Var mı?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Ruh sağlığınız önemli. Yalnız değilsiniz, destek almaktan çekinmeyin.
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <Button 
              onClick={() => window.open("tel:183", "_blank")}
              className="bg-white text-blue-600 hover:bg-gray-50 hover:scale-105 px-10 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-white"
            >
              <Phone className="w-6 h-6 mr-3" />
              ALO 183'ü Ara
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 hover:scale-105 px-10 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 bg-transparent backdrop-blur-sm"
            >
              <Heart className="w-6 h-6 mr-3" />
              Daha Fazla Bilgi
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default CommunityMentalHealthPage;
