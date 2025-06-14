"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Users, 
  BookOpen, 
  Award, 
  MessageCircle, 
  Calendar, 
  Star,
  Search,
  GraduationCap,
  Briefcase,
  Heart,
  Target,
  Lightbulb,
  Coffee
} from "lucide-react";

// Expert interface
interface Expert {
  id: string;
  name: string;
  title: string;
  specialization: string;
  experience: string;
  image: string;
  bio: string;
  achievements: string[];
  expertise: string[];
  rating: number;
  reviews: number;
}

// Program interface
interface Program {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: string;
  icon: React.ReactNode;
  features: string[];
  color: string;
}

// Experts data
const experts: Expert[] = [
  {
    id: "1",
    name: "Dr. Ayşe Kara",
    title: "Klinik Psikolog",
    specialization: "Anksiyete ve Depresyon",
    experience: "3 yıl",
    image: "https://via.placeholder.com/150x150?text=AK",
    bio: "Genç yetişkinlerin ruh sağlığı konusunda uzmanlaşmış, modern terapi yaklaşımları kullanıyor.",
    achievements: ["En İyi Genç Uzman 2024", "Dijital Terapi Sertifikası", "Mindfulness Eğitmeni"],
    expertise: ["CBT", "Mindfulness", "Dijital Terapi", "Genç Yetişkin Psikolojisi"],
    rating: 4.9,
    reviews: 87
  },
  {
    id: "2", 
    name: "Psikolog Mehmet Demir",
    title: "Gelişimsel Psikolog",
    specialization: "Kariyer Danışmanlığı",
    experience: "4 yıl",
    image: "https://via.placeholder.com/150x150?text=MD",
    bio: "Genç profesyonellerin kariyer gelişimi ve iş hayatı dengesinde rehberlik sağlıyor.",
    achievements: ["Kariyer Koçluğu Sertifikası", "LinkedIn Top Voice 2024", "Startup Mentor"],
    expertise: ["Kariyer Planlama", "Motivasyon", "Liderlik", "İş-Yaşam Dengesi"],
    rating: 4.8,
    reviews: 64
  },
  {
    id: "3",
    name: "Dr. Zeynep Özkan", 
    title: "Pozitif Psikolog",
    specialization: "Kişisel Gelişim",
    experience: "5 yıl",
    image: "https://via.placeholder.com/150x150?text=ZO",
    bio: "Pozitif psikoloji prensiplerine dayalı olarak kişisel potansiyeli ortaya çıkarma konusunda uzman.",
    achievements: ["Pozitif Psikoloji Uzmanlığı", "TED Speaker", "Bestseller Yazar"],
    expertise: ["Pozitif Psikoloji", "Mutluluk Bilimi", "Güçlü Yanları Keşfetme", "Yaşam Koçluğu"],
    rating: 4.9,
    reviews: 92
  }
];

// Programs data
const programs: Program[] = [
  {
    id: "1",
    title: "Genç Lider Programı",
    description: "25-35 yaş arası profesyoneller için liderlik ve kişisel gelişim programı",
    duration: "8 hafta",
    level: "Orta-İleri",
    icon: <Target className="w-6 h-6" />,
    features: ["Grup çalışmaları", "Birebir mentorluk", "Proje tabanlı öğrenme", "Networking etkinlikleri"],
    color: "bg-purple-500"
  },
  {
    id: "2",
    title: "Kariyer Hızlandırıcı",
    description: "Kariyer geçişi yapmak isteyen genç profesyoneller için özel program",
    duration: "6 hafta", 
    level: "Başlangıç-Orta",
    icon: <Briefcase className="w-6 h-6" />,
    features: ["CV optimizasyonu", "Mülakat teknikleri", "LinkedIn profil geliştirme", "Sektör analizi"],
    color: "bg-green-500"
  },
  {
    id: "3",
    title: "Mindful Yaşam",
    description: "Stresli iş hayatında iç huzuru bulan genç uzmanlar için mindfulness programı",
    duration: "4 hafta",
    level: "Tüm Seviyeler", 
    icon: <Heart className="w-6 h-6" />,
    features: ["Günlük meditasyon", "Stres yönetimi", "Duygusal zeka", "İş-yaşam dengesi"],
    color: "bg-blue-500"
  }
];

// Expert card component  
const ExpertCard: React.FC<{ expert: Expert }> = ({ expert }) => {
  return (
    <div className="bg-white border rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 group">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100">
          <img src={expert.image} alt={expert.name} className="w-full h-full object-cover" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-blue-800 group-hover:text-blue-600">
            {expert.name}
          </h3>
          <p className="text-sm text-gray-600">{expert.title}</p>
          <div className="flex items-center gap-1 mt-1">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span className="text-sm font-medium">{expert.rating}</span>
            <span className="text-xs text-gray-500">({expert.reviews} değerlendirme)</span>
          </div>
        </div>
      </div>
      
      <div className="space-y-3">
        <div className="bg-blue-50 p-3 rounded-xl">
          <p className="text-sm font-medium text-blue-800 mb-1">Uzmanlık Alanı</p>
          <p className="text-sm text-gray-700">{expert.specialization}</p>
        </div>
        
        <div>
          <p className="text-sm font-medium text-gray-800 mb-2">Deneyim: {expert.experience}</p>
          <p className="text-sm text-gray-600 leading-relaxed">{expert.bio}</p>
        </div>
        
        <div>
          <p className="text-sm font-medium text-gray-800 mb-2">Başarıları</p>
          <div className="flex flex-wrap gap-1">
            {expert.achievements.slice(0, 2).map((achievement, index) => (
              <span key={index} className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                {achievement}
              </span>
            ))}
          </div>
        </div>
        
        <div>
          <p className="text-sm font-medium text-gray-800 mb-2">Uzmanlık Alanları</p>
          <div className="flex flex-wrap gap-1">
            {expert.expertise.slice(0, 3).map((skill, index) => (
              <span key={index} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-6 space-y-2">
        <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:brightness-110 rounded-xl">
          Randevu Al
        </Button>
        <Button variant="outline" className="w-full rounded-xl border-blue-200 text-blue-600 hover:bg-blue-50">
          Profili Görüntüle
        </Button>
      </div>
    </div>
  );
};

// Program card component
const ProgramCard: React.FC<{ program: Program }> = ({ program }) => {
  return (
    <div className="bg-white border rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 group">
      <div className="flex items-center gap-3 mb-4">
        <div className={`p-3 ${program.color} text-white rounded-xl group-hover:scale-110 transition-transform`}>
          {program.icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-blue-800 group-hover:text-blue-600">
            {program.title}
          </h3>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Clock className="w-4 h-4" />
            <span>{program.duration}</span>
            <span>•</span>
            <span>{program.level}</span>
          </div>
        </div>
      </div>
      
      <p className="text-sm text-gray-600 mb-4 leading-relaxed">
        {program.description}
      </p>
      
      <div className="mb-4">
        <p className="text-sm font-medium text-gray-800 mb-2">Program İçeriği</p>
        <div className="space-y-1">
          {program.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-gray-600">{feature}</span>
            </div>
          ))}
        </div>
      </div>
      
      <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:brightness-110 rounded-xl">
        Programa Katıl
      </Button>
    </div>
  );
};

// Clock component for duration
const Clock: React.FC<{ className?: string }> = ({ className }) => (
  <Calendar className={className} />
);

// Filter buttons component
const FilterButtons: React.FC<{
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}> = ({ activeFilter, setActiveFilter }) => {
  const filters = [
    { label: "Hepsi", value: "all" },
    { label: "Uzmanlar", value: "experts" }, 
    { label: "Programlar", value: "programs" }
  ];

  return (
    <div className="flex gap-2 justify-center">
      {filters.map((filter) => (
        <Button
          key={filter.value}
          variant={activeFilter === filter.value ? "default" : "ghost"}
          onClick={() => setActiveFilter(filter.value)}
          className={
            activeFilter === filter.value
              ? "capitalize px-5 rounded-full bg-blue-600 text-white hover:bg-blue-700"
              : "capitalize px-5 rounded-full text-muted-foreground border"
          }
        >
          {filter.label}
        </Button>
      ))}
    </div>
  );
};

// Main young experts page component
const YoungExpertsPage: React.FC = () => {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredExperts = experts.filter(expert =>
    expert.name.toLowerCase().includes(search.toLowerCase()) ||
    expert.specialization.toLowerCase().includes(search.toLowerCase())
  );

  const filteredPrograms = programs.filter(program =>
    program.title.toLowerCase().includes(search.toLowerCase()) ||
    program.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-sky-50 py-20">
      <div className="container space-y-16">
        {/* Header */}
        <header className="text-center space-y-4">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full">
              <GraduationCap className="w-12 h-12 text-blue-600" />
            </div>
          </div>
          <h1 className="text-5xl font-extrabold tracking-tight text-blue-700 drop-shadow-sm">
            Genç Uzmanlar
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Yeni nesil ruh sağlığı uzmanları ve kariyer gelişim programları ile tanışın. 
            Modern yaklaşımlar, dijital çözümler ve genç perspektifler.
          </p>
        </header>

        {/* Stats Section */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 text-center shadow-sm border">
            <div className="text-3xl font-bold text-blue-600 mb-2">12+</div>
            <div className="text-sm text-gray-600">Genç Uzman</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-sm border">
            <div className="text-3xl font-bold text-purple-600 mb-2">8</div>
            <div className="text-sm text-gray-600">Özel Program</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-sm border">
            <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
            <div className="text-sm text-gray-600">Mutlu Katılımcı</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-sm border">
            <div className="text-3xl font-bold text-orange-600 mb-2">4.8</div>
            <div className="text-sm text-gray-600">Ortalama Puan</div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between bg-white p-6 rounded-2xl border shadow">
          <div className="relative w-full sm:max-w-xs">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Uzman veya program ara..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>
          <FilterButtons activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
        </section>

        {/* Experts Section */}
        {(activeFilter === "all" || activeFilter === "experts") && (
          <section className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-blue-800 mb-4">
                Genç Uzmanlarımız
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Modern terapi yaklaşımları ve dijital çağın getirdiği yeni perspektiflerle 
                size rehberlik eden genç ve dinamik uzmanlarımız
              </p>
            </div>
            
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredExperts.length === 0 ? (
                <p className="text-center col-span-full text-muted-foreground">
                  Aradığınız kriterlere uygun uzman bulunamadı.
                </p>
              ) : (
                filteredExperts.map((expert) => (
                  <ExpertCard key={expert.id} expert={expert} />
                ))
              )}
            </div>
          </section>
        )}

        {/* Programs Section */}
        {(activeFilter === "all" || activeFilter === "programs") && (
          <section className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-blue-800 mb-4">
                Özel Programlarımız  
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Genç profesyoneller için özel olarak tasarlanmış kişisel ve kariyer gelişim programları
              </p>
            </div>
            
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredPrograms.length === 0 ? (
                <p className="text-center col-span-full text-muted-foreground">
                  Aradığınız kriterlere uygun program bulunamadı.
                </p>
              ) : (
                filteredPrograms.map((program) => (
                  <ProgramCard key={program.id} program={program} />
                ))
              )}
            </div>
          </section>
        )}

        {/* Community Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex justify-center mb-6">
              <Coffee className="w-16 h-16 text-white" />
            </div>
            <h2 className="text-3xl font-bold">
              Genç Uzmanlar Topluluğuna Katıl
            </h2>
            <p className="text-lg opacity-90">
              Aylık networking etkinlikleri, workshop'lar ve mentorluk programları ile 
              kariyer yolculuğunda yalnız değilsin. Bizimle büyü!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-transparent border-2 border-white text-white hover:bg-teal-500 hover:border-teal-500 rounded-xl px-8 font-semibold">
                Topluluğa Katıl
              </Button>
              <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 rounded-xl px-8 font-semibold">
                Etkinlikleri Gör
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-white rounded-3xl shadow-sm p-8 border">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-blue-800 mb-4">
              Neden Genç Uzmanlar?
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Modern çağın getirdiği zorluklara contemporary çözümler
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Yenilikçi Yaklaşım</h4>
              <p className="text-sm text-gray-600">
                Teknoloji destekli modern terapi yöntemleri ve dijital çözümler
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Akran Desteği</h4>
              <p className="text-sm text-gray-600">
                Benzer yaş grubundan uzmanlarla daha kolay bağlantı kurma
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Hedef Odaklı</h4>
              <p className="text-sm text-gray-600">
                Sonuç odaklı, pratik ve uygulanabilir çözüm önerileri
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-orange-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Esnek İletişim</h4>
              <p className="text-sm text-gray-600">
                Online, offline ve hibrit seçeneklerle esnek randevu imkanları
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default YoungExpertsPage;
