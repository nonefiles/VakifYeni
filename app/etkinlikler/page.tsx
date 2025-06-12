"use client"; // Add this line at the top

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function UltraModernEventsPage() {
  const [activeCategory, setActiveCategory] = useState("Tüm Etkinlikler");
  const [searchTerm, setSearchTerm] = useState("");

  const events = [
    {
      name: "Psikoloji Semineri",
      date: "15 Haziran 2025",
      time: "14:00 - 16:00",
      location: "Online",
      description: "Psikolojinin temel kavramları ve günlük hayattaki uygulamaları üzerinedir.",
      category: "Seminerler",
      image: "/images/events/seminar.jpg",
    },
    {
      name: "Stres Yönetimi Atölyesi",
      date: "20 Haziran 2025",
      time: "10:00 - 12:00",
      location: "İstanbul Merkez Ofis",
      description: "Stresle başa çıkma tekniklerini öğrenmek için pratik bir atölye çalışması.",
      category: "Atölye Çalışmaları",
      image: "/images/events/workshop.jpg",
    },
    {
      name: "Yıllık Psikoloji Konferansı",
      date: "10 Temmuz 2025",
      time: "09:00 - 17:00",
      location: "İstanbul Kongre Merkezi",
      description: "Uluslararası konuşmacıların katılımıyla, psikoloji alanındaki son gelişmeleri ele alacağımız bir günlük konferansımız.",
      category: "Konferanslar",
      image: "/images/events/conference.jpg",
    },
  ];

  const categories = ["Tüm Etkinlikler", "Seminerler", "Atölye Çalışmaları", "Konferanslar"];

  const filteredEvents = events.filter((event) => {
    const matchesCategory = activeCategory === "Tüm Etkinlikler" || event.category === activeCategory;
    const matchesSearch = event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-500 to-purple-600 py-32 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-4xl font-bold md:text-5xl"
          >
            Etkinlik Takvimi
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl"
          >
            Yol Arkadaşları Psikoloji Vakfı'nın düzenlediği etkinlikleri keşfedin ve katılın.
          </motion.p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <div className="w-full md:w-1/2 lg:w-1/3">
            <input
              type="text"
              placeholder="Etkinlik ara..."
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex space-x-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full ${activeCategory === category ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="overflow-hidden rounded-xl bg-white shadow-lg"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={event.image}
                  alt={event.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-blue-600">{event.name}</h3>
                <p className="mb-1 text-gray-600">Tarih: {event.date}</p>
                <p className="mb-1 text-gray-600">Saat: {event.time}</p>
                <p className="mb-1 text-gray-600">Yer: {event.location}</p>
                <p className="text-gray-600">{event.description}</p>
                <Link href="/etkinlik-kayit" className="mt-4 inline-block">
                  <span className="text-blue-500 hover:underline">Detaylar ve Kaydol</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 text-3xl font-bold"
          >
            Etkinliklerimize Katılın
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8 text-lg"
          >
            Etkinliklerimize katılmak ve güncel bilgilere ulaşmak için aşağıdaki bağlantıları kullanabilirsiniz.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
          >
            <Link href="/etkinlik-kayit" className="rounded-lg bg-white px-6 py-3 text-blue-600 hover:bg-gray-100">
              Etkinliklere Kaydol
            </Link>
            <Link href="/etkinlik-detay" className="rounded-lg border border-white px-6 py-3 hover:bg-white hover:text-blue-600">
              Etkinlik Detayları
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
