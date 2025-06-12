import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaCalendarAlt, FaMapMarkerAlt, FaSearch, FaFilter, FaList, FaCalendar, FaShareAlt } from "react-icons/fa";
import { useState } from "react";
import { format } from 'date-fns';
import { tr } from 'date-fns/locale';
import { AnimatePresence, motion } from "framer-motion";

const allEvents = [
  {
    id: 1,
    title: "Psikoloji Atölyesi",
    date: new Date(2025, 5, 15),
    location: "İstanbul",
    description: "Psikoloji alanında uzmanlar tarafından verilecek bir atölye çalışması.",
    image: "/images/events/psychology-workshop.jpg",
    category: "Atölye",
    price: "Ücretsiz"
  },
  {
    id: 2,
    title: "Ruh Sağlığı Semineri",
    date: new Date(2025, 5, 22),
    location: "Ankara",
    description: "Ruh sağlığı konusunda farkındalık yaratmayı amaçlayan bir seminer.",
    image: "/images/events/mental-health-seminar.jpg",
    category: "Seminer",
    price: "Ücretsiz"
  },
  {
    id: 3,
    title: "Aile Danışmanlığı Eğitimi",
    date: new Date(2025, 5, 29),
    location: "İzmir",
    description: "Aile danışmanlığı konusunda eğitim verilecektir.",
    image: "/images/events/family-counseling.jpg",
    category: "Eğitim",
    price: "250 TL"
  },
  {
    id: 4,
    title: "Çocuk Psikolojisi Konferansı",
    date: new Date(2025, 6, 5),
    location: "Online",
    description: "Çocuk psikolojisi alanında uzmanlar tarafından verilecek bir konferans.",
    image: "/images/events/child-psychology.jpg",
    category: "Konferans",
    price: "150 TL"
  },
  {
    id: 5,
    title: "Yoga ve Mindfulness Atölyesi",
    date: new Date(2025, 6, 12),
    location: "Antalya",
    description: "Yoga ve mindfulness teknikleri üzerine pratik bir atölye.",
    image: "/images/events/yoga-workshop.jpg",
    category: "Atölye",
    price: "200 TL"
  },
];

export default function EventsCalendarPage() {
  const [viewMode, setViewMode] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tüm Kategoriler");
  const [selectedLocation, setSelectedLocation] = useState("Tüm Yerler");
  const [selectedMonth, setSelectedMonth] = useState(null);

  const filteredEvents = allEvents.filter(event => {
    const eventMonth = event.date.getMonth();
    const matchesMonth = selectedMonth === null || eventMonth === selectedMonth;
    const matchesCategory = selectedCategory === "Tüm Kategoriler" ||
                           event.category === selectedCategory;
    const matchesLocation = selectedLocation === "Tüm Yerler" ||
                           event.location === selectedLocation;
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesMonth && matchesCategory && matchesLocation && matchesSearch;
  });

  const categories = ["Tüm Kategoriler", ...new Set(allEvents.map(event => event.category))];
  const locations = ["Tüm Yerler", ...new Set(allEvents.map(event => event.location))];
  const months = [
    "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
    "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-500 to-blue-600 py-24 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">Etkinlik Takvimi</h1>
            <p className="mx-auto max-w-3xl text-lg">
              Yol Arkadaşları Psikoloji Vakfı olarak düzenlediğimiz etkinliklerimizle ilgili detayları burada bulabilirsiniz.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button className="bg-white text-green-600 hover:bg-gray-100">
                <Link href="#events-section">Etkinlikleri Keşfet</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filtre ve Arama Bölümü */}
      <section className="bg-white py-8 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-1 items-center gap-2 rounded-lg bg-gray-100 p-3">
              <FaSearch className="text-gray-500" />
              <input
                type="text"
                placeholder="Etkinlik ara..."
                className="w-full bg-transparent outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex gap-2">
              <div className="flex w-full flex-col gap-2 md:w-auto md:flex-row">
                <select
                  className="rounded-lg border border-gray-300 p-2"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>

                <select
                  className="rounded-lg border border-gray-300 p-2"
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                >
                  {locations.map(location => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>

                <select
                  className="rounded-lg border border-gray-300 p-2"
                  value={selectedMonth !== null ? selectedMonth : ""}
                  onChange={(e) => setSelectedMonth(e.target.value ? parseInt(e.target.value) : null)}
                >
                  <option value="">Tüm Aylar</option>
                  {months.map((month, index) => (
                    <option key={index} value={index}>{month}</option>
                  ))}
                </select>
              </div>

              <div className="flex gap-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  onClick={() => setViewMode("grid")}
                  className="h-10 w-10 p-0"
                >
                  <FaCalendar className="text-lg" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  onClick={() => setViewMode("list")}
                  className="h-10 w-10 p-0"
                >
                  <FaList className="text-lg" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Etkinlikler Bölümü */}
      <section id="events-section" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-green-600">Yaklaşan Etkinlikler</h2>

          {viewMode === "grid" ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence>
                {filteredEvents.length > 0 ? (
                  filteredEvents.map((event) => (
                    <motion.div
                      key={event.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden rounded-xl bg-white shadow-lg"
                    >
                      <div className="relative h-48 w-full">
                        <Image
                          src={event.image}
                          alt={event.title}
                          layout="fill"
                          objectFit="cover"
                          className="transition-transform duration-300 hover:scale-105"
                        />
                        <div className="absolute right-2 top-2 rounded-lg bg-green-600 px-2 py-1 text-xs text-white">
                          {event.price}
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="mb-4 flex flex-wrap items-center justify-between">
                          <div className="flex items-center text-gray-500">
                            <FaCalendarAlt className="mr-2" />
                            <span>{format(event.date, 'dd MMMM yyyy', { locale: tr })}</span>
                          </div>
                          <span className="rounded-lg bg-blue-100 px-2 py-1 text-xs text-blue-600">
                            {event.category}
                          </span>
                        </div>
                        <div className="mb-4 flex items-center text-gray-500">
                          <FaMapMarkerAlt className="mr-2" />
                          <span>{event.location}</span>
                        </div>
                        <h3 className="mb-2 text-xl font-bold text-green-600">{event.title}</h3>
                        <p className="mb-4 text-gray-600">{event.description}</p>
                        <div className="flex justify-between">
                          <Button className="bg-green-600 text-white hover:bg-green-700">
                            <Link href={`/etkinlikler/${event.id}`}>Detayları Gör</Link>
                          </Button>
                          <Button variant="ghost" className="text-gray-600 hover:text-green-600">
                            <FaShareAlt className="mr-2" />
                            Paylaş
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className="col-span-full text-center py-12">
                    <p className="text-gray-600">Herhangi bir etkinlik bulunamadı.</p>
                  </div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            // Liste görünümü
            <div className="space-y-6">
              {filteredEvents.map((event) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden rounded-xl bg-white shadow-md"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="relative h-48 w-full md:w-64">
                      <Image
                        src={event.image}
                        alt={event.title}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div className="flex-1 p-6">
                      <div className="mb-4 flex flex-wrap items-center justify-between">
                        <div className="flex items-center text-gray-500">
                          <FaCalendarAlt className="mr-2" />
                          <span>{format(event.date, 'dd MMMM yyyy', { locale: tr })}</span>
                        </div>
                        <span className="rounded-lg bg-blue-100 px-2 py-1 text-xs text-blue-600">
                          {event.category}
                        </span>
                      </div>
                      <div className="mb-4 flex items-center text-gray-500">
                        <FaMapMarkerAlt className="mr-2" />
                        <span>{event.location}</span>
                      </div>
                      <h3 className="mb-2 text-xl font-bold text-green-600">{event.title}</h3>
                      <p className="mb-4 text-gray-600">{event.description}</p>
                      <div className="flex justify-between">
                        <Button className="bg-green-600 text-white hover:bg-green-700">
                          <Link href={`/etkinlikler/${event.id}`}>Detayları Gör</Link>
                        </Button>
                        <Button variant="ghost" className="text-gray-600 hover:text-green-600">
                          <FaShareAlt className="mr-2" />
                          Paylaş
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Bölümü */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold text-green-600">Etkinliklerimize Katılın</h2>
          <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-600">
            Etkinliklerimize katılmak veya daha fazla bilgi almak için bizimle iletişime geçin.
          </p>
          <Button className="bg-green-600 text-white hover:bg-green-700">
            <Link href="/iletisim">İletişime Geç</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
