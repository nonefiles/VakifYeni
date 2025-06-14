import React, { useState, useMemo, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CalendarIcon, MapPinIcon, SearchIcon, FilterIcon } from "lucide-react";
import clsx from "clsx";
import { format, parseISO } from "date-fns";
import { tr } from "date-fns/locale";

// Tiplerin tanımlanması
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
  },
];

// Etkinlik kartı bileşeni
const EventCard: React.FC<{ event: Event }> = ({ event }) => {
  const formattedDate = format(parseISO(event.date), "dd MMMM yyyy", { locale: tr });

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
            className={clsx(
              "text-xs font-medium px-3 py-1 rounded-full",
              event.type === "online"
                ? "bg-green-100 text-green-700"
                : "bg-yellow-100 text-yellow-700"
            )}
          >
            {event.type === "online" ? "Online" : "Yüz Yüze"}
          </span>
        </div>
        <p className="text-sm text-muted-foreground min-h-[48px]">
          {event.description}
        </p>
        <div className="text-sm text-gray-500 space-y-1">
          <div className="flex items-center gap-2">
            <CalendarIcon className="w-4 h-4" />
            <span>
              {formattedDate} • {event.time}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <MapPinIcon className="w-4 h-4" />
            <span>{event.location}</span>
          </div>
        </div>
      </div>
      <Button
        asChild
        className="mt-6 w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:brightness-110 rounded-xl"
      >
        <Link href={event.link}>Detayları Gör</Link>
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
          className={clsx(
            "capitalize px-5 rounded-full",
            filter === btn.value
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "text-muted-foreground border"
          )}
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
          className={clsx(
            "capitalize px-5 rounded-full",
            category === cat.value
              ? "bg-purple-600 text-white hover:bg-purple-700"
              : "text-muted-foreground border"
          )}
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

  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      const matchTitle = event.title.toLowerCase().includes(search.toLowerCase());
      const matchType = filter === "all" || event.type === filter;
      const matchCategory = category === "all" || event.category === category;
      return matchTitle && matchType && matchCategory;
    });
  }, [search, filter, category]);

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
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
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
              <EventCard key={event.id} event={event} />
            ))
          )}
        </section>
      </div>
    </main>
  );
};

export default EventsPage;
