"use client";

import React, { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Search, ArrowLeft, Users, Clock } from "lucide-react";

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
  speakers?: string[];
  isFree?: boolean;
}

type FilterType = "all" | "online" | "offline";
type CategoryType = "all" | "seminar" | "meeting" | "workshop" | "sohbet";

// Etkinlik verilerinin tanımlanması
const events: Event[] = [
  {
    id: "1",
    title: "Görünmekten Korkmak - Sosyal Kaygının Gölgesinde Yaşamak",
    date: "2025-08-21",
    time: "19:30",
    location: "Zoom",
    type: "online",
    description: "54. Ücretsiz Psikoloji Sohbeti - Görünmekten Korkmak ve sosyal kaygının gölgesinde yaşama üzerine bir sohbet.",
    link: "https://www.yolarkadaslari.com",
    category: "sohbet",
    detailedDescription: "Katılımın ücretsiz ve herkese açık olduğu bu 54. Ücretsiz Psikoloji Sohbetinde, 'Görünmekten Korkmak' ve 'Sosyal Kaygının Gölgesinde Yaşamak' konuları ele alınacaktır. Etkinlik Zoom üzerinden gerçekleştirilecektir.",
    speakers: ["M. Abdullah YILMAZ", "Kln. Psk. Eralp AKGÜL", "Kln. Psk. Busenaz OTLU"],
    isFree: true
  }
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
      <div className="container max-w-4xl mx-auto px-4">
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
                      className="text-xs font-medium px-3 py-1 rounded-full bg-green-100 text-green-700"
                    >
                      Online
                    </span>
                    {event.isFree && (
                      <span className="text-xs font-medium px-3 py-1 rounded-full bg-emerald-100 text-emerald-700">
                        Ücretsiz
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {event.speakers && (
                <div className="bg-blue-50 p-4 rounded-xl">
                  <h4 className="text-sm font-semibold text-blue-800 mb-2 flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Konuşmacılar
                  </h4>
                  <div className="space-y-1">
                    {event.speakers.map((speaker, index) => (
                      <p key={index} className="text-sm text-gray-700">{speaker}</p>
                    ))}
                  </div>
                </div>
              )}

              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Etkinlik Hakkında</h3>
                <p className="text-gray-700 leading-relaxed">
                  {event.detailedDescription}
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Etkinliğe Kayıt Ol</h2>

              <div className="space-y-4">
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
                  Ücretsiz Kayıt Ol
                </Button>
              </div>

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
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-xl font-semibold text-blue-800 group-hover:text-blue-600 leading-tight">
            {event.title}
          </h3>
          <div className="flex flex-col gap-1">
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-green-100 text-green-700">
              Online
            </span>
            {event.isFree && (
              <span className="text-xs font-medium px-3 py-1 rounded-full bg-emerald-100 text-emerald-700">
                Ücretsiz
              </span>
            )}
          </div>
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
          {event.speakers && (
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span className="text-xs">{event.speakers.join(", ")}</span>
            </div>
          )}
        </div>
      </div>
      <Button
        onClick={() => onShowDetails(event)}
        className="mt-6 w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:brightness-110 rounded-xl"
      >
        Detayları Gör ve Kayıt Ol
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
    <div className="flex gap-2 flex-wrap">
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
    { label: "Sohbet", value: "sohbet" as const },
  ];

  return (
    <div className="flex gap-2 flex-wrap">
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
      <div className="container space-y-16 px-4">
        <header className="text-center space-y-4">
          <h1 className="text-5xl font-extrabold tracking-tight text-blue-700 drop-shadow-sm">
            Etkinlik Takvimi
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ruh sağlığı alanındaki yolculuğunuza bir adım atın. Katılabileceğiniz ücretsiz etkinlikleri keşfedin.
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

        <section className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {filteredEvents.length === 0 ? (
            <div className="text-center col-span-full py-16">
              <Clock className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-lg text-muted-foreground mb-2">
                Aradığınız kriterlere uygun etkinlik bulunamadı.
              </p>
              <p className="text-sm text-gray-500">
                Filtreleri değiştirerek yeniden deneyin.
              </p>
            </div>
          ) : (
            filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} onShowDetails={handleShowDetails} />
            ))
          )}
        </section>

        <section className="text-center bg-blue-50 p-8 rounded-2xl">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            Düzenli Etkinliklerimizden Haberdar Olun
          </h2>
          <p className="text-gray-600 mb-6">
            Ruh sağlığı alanındaki yeni etkinliklerimizden ilk siz haberdar olmak ister misiniz?
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl">
            E-posta Listesine Katıl
          </Button>
        </section>
      </div>
    </main>
  );
};

export default EventsPage;
