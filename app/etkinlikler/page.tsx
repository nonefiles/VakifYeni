"use client";

import React, { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Search, ArrowLeft } from "lucide-react";

// Tarih formatlama fonksiyonu
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const months = [
    "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
    "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
  ];

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
};

// CSS sınıflarını birleştirme fonksiyonu
const cn = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ');
};

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  type: "online" | "offline";
  description: string;
  link: string;
  image?: string;
  category: string;
  detailedDescription?: string;
}

type FilterType = "all" | "online" | "offline";
type CategoryType = "all" | "seminar" | "meeting" | "workshop";

// Etkinlik verilerinin tanımlanması
const events: Event[] = [
  {
    id: "1",
    title: "Ruh Sağlığına Giriş Semineri",
    date: "2025-06-28",
    time: "19:00",
    location: "Zoom",
    type: "online",
    description: "Temel psikolojik kavramların ele alınacağı seminer.",
    link: "/etkinlikler/ruhsagligi-semineri",
    category: "seminar",
    detailedDescription: "Bu seminerde ruh sağlığının temel kavramları, stres yönetimi teknikleri ve günlük yaşamda psikolojik sağlığı koruma yöntemleri ele alınacaktır. Uzman psikologlar eşliğinde interaktif bir oturum olacak."
  },
  {
    id: "2",
    title: "Gönüllü Buluşması",
    date: "2025-07-06",
    time: "14:00",
    location: "İstanbul Ofisi",
    type: "offline",
    description: "Mevcut ve yeni gönüllülerle yüz yüze tanışma etkinliği.",
    link: "/etkinlikler/gonullu-bulusmasi",
    category: "meeting",
    detailedDescription: "Derneğimizin gönüllüleri ile tanışma, deneyim paylaşımı ve gelecek projeler hakkında bilgi alış verişi yapacağımız samimi bir buluşma. Çay-kahve ikramları olacak."
  },
  {
    id: "3",
    title: "Şema Terapi Atölyesi",
    date: "2025-07-20",
    time: "10:00",
    location: "Ankara",
    type: "offline",
    description: "Uygulamalı Şema Terapi atölyesi.",
    link: "/etkinlikler/sema-terapi-atolyesi",
    category: "workshop",
    detailedDescription: "Şema Terapi yaklaşımının temel prensipleri, şema modları ve terapi tekniklerinin uygulamalı olarak öğrenileceği profesyonel bir atölye çalışması. Sertifika verilecektir."
  },
];

// Kayıt formu bileşeni
const RegistrationForm: React.FC<{ event: Event; onBack: () => void }> = ({ event, onBack }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Kaydınız başarıyla alındı! Size onay e-postası göndereceğiz.");
  };

  const formattedDate = formatDate(event.date);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-sky-50 py-20">
      <div className="container max-w-4xl mx-auto">
        <Button
          onClick={onBack}
          variant="ghost"
          className="mb-6 text-blue-600 hover:text-blue-700"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Geri Dön
        </Button>

        <div className="bg-white rounded-3xl shadow-lg p-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-blue-800 mb-4">{event.title}</h1>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    <span className="font-medium">{formattedDate} • {event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={
                        event.type === "online"
                          ? "text-xs font-medium px-3 py-1 rounded-full bg-green-100 text-green-700"
                          : "text-xs font-medium px-3 py-1 rounded-full bg-yellow-100 text-yellow-700"
                      }
                    >
                      {event.type === "online" ? "Online" : "Yüz Yüze"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Etkinlik Hakkında</h3>
                <p className="text-gray-700 leading-relaxed">
                  {event.detailedDescription}
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Etkinliğe Kayıt Ol</h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    Ad *
                  </label>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full"
                    placeholder="Adınızı giriniz"
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Soyad *
                  </label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full"
                    placeholder="Soyadınızı giriniz"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefon Numarası *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full"
                    placeholder="0555 123 45 67"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-posta Adresi *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full"
                    placeholder="ornek@email.com"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:brightness-110 rounded-xl py-3 mt-6"
                >
                  Kayıt Ol
                </Button>
              </form>

              <p className="text-xs text-gray-500 mt-4">
                * Zorunlu alanlar. Bilgileriniz gizli tutulacak ve sadece etkinlik organizasyonu için kullanılacaktır.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Etkinlik kartı bileşeni
const EventCard: React.FC<{ event: Event; onShowDetails: (event: Event) => void }> = ({ event, onShowDetails }) => {
  const formattedDate = formatDate(event.date);

  return (
    <div className="bg-white border rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 flex flex-col justify-between group">
      {event.image && (
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-40 object-cover rounded-xl mb-4"
        />
      )}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-blue-800 group-hover:text-blue-600">
            {event.title}
          </h3>
          <span
            className={
              event.type === "online"
                ? "text-xs font-medium px-3 py-1 rounded-full bg-green-100 text-green-700"
                : "text-xs font-medium px-3 py-1 rounded-full bg-yellow-100 text-yellow-700"
            }
          >
            {event.type === "online" ? "Online" : "Yüz Yüze"}
          </span>
        </div>
        <p className="text-sm text-muted-foreground min-h-[48px]">
          {event.description}
        </p>
        <div className="text-sm text-gray-500 space-y-1">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>
              {formattedDate} • {event.time}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>{event.location}</span>
          </div>
        </div>
      </div>
      <Button
        onClick={() => onShowDetails(event)}
        className="mt-6 w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:brightness-110 rounded-xl"
      >
        Detayları Gör
      </Button>
    </div>
  );
};

// Filtreleme butonları bileşeni
const FilterButtons: React.FC<{
  filter: FilterType;
  setFilter: (filter: FilterType) => void;
}> = ({ filter, setFilter }) => {
  const buttons = [
    { label: "Hepsi", value: "all" as const },
    { label: "Online", value: "online" as const },
    { label: "Yüz Yüze", value: "offline" as const },
  ];

  return (
    <div className="flex gap-2">
      {buttons.map((btn) => (
        <Button
          key={btn.value}
          variant={filter === btn.value ? "default" : "ghost"}
          onClick={() => setFilter(btn.value)}
          className={
            filter === btn.value
              ? "capitalize px-5 rounded-full bg-blue-600 text-white hover:bg-blue-700"
              : "capitalize px-5 rounded-full text-muted-foreground border"
          }
        >
          {btn.label}
        </Button>
      ))}
    </div>
  );
};

// Kategori filtreleme bileşeni
const CategoryFilter: React.FC<{
  category: CategoryType;
  setCategory: (category: CategoryType) => void;
}> = ({ category, setCategory }) => {
  const categories = [
    { label: "Hepsi", value: "all" as const },
    { label: "Seminer", value: "seminar" as const },
    { label: "Toplantı", value: "meeting" as const },
    { label: "Atölye", value: "workshop" as const },
  ];

  return (
    <div className="flex gap-2">
      {categories.map((cat) => (
        <Button
          key={cat.value}
          variant={category === cat.value ? "default" : "ghost"}
          onClick={() => setCategory(cat.value)}
          className={
            category === cat.value
              ? "capitalize px-5 rounded-full bg-blue-600 text-white hover:bg-blue-700"
              : "capitalize px-5 rounded-full text-muted-foreground border"
          }
        >
          {cat.label}
        </Button>
      ))}
    </div>
  );
};

// Ana sayfa bileşeni
const EventsPage: React.FC = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<FilterType>("all");
  const [category, setCategory] = useState<CategoryType>("all");
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      const matchTitle = event.title.toLowerCase().includes(search.toLowerCase());
      const matchType = filter === "all" || event.type === filter;
      const matchCategory = category === "all" || event.category === category;
      return matchTitle && matchType && matchCategory;
    });
  }, [search, filter, category]);

  const handleShowDetails = (event: Event) => {
    setSelectedEvent(event);
  };

  const handleBackToList = () => {
    setSelectedEvent(null);
  };

  if (selectedEvent) {
    return <RegistrationForm event={selectedEvent} onBack={handleBackToList} />;
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-sky-50 py-20">
      <div className="container space-y-16">
        <header className="text-center space-y-4">
          <h1 className="text-5xl font-extrabold tracking-tight text-blue-700 drop-shadow-sm">
            Etkinlik Takvimi
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ruh sağlığı alanındaki yolculuğunuza bir adım atın. Katılabileceğiniz etkinlikleri keşfedin.
          </p>
        </header>

        <section className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between bg-white p-6 rounded-2xl border shadow">
          <div className="relative w-full sm:max-w-xs">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Etkinlik ara..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <FilterButtons filter={filter} setFilter={setFilter} />
            <CategoryFilter category={category} setCategory={setCategory} />
          </div>
        </section>

        <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.length === 0 ? (
            <p className="text-center col-span-full text-muted-foreground">
              Hiç etkinlik bulunamadı.
            </p>
          ) : (
            filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} onShowDetails={handleShowDetails} />
            ))
          )}
        </section>
      </div>
    </main>
  );
};

export default EventsPage;
