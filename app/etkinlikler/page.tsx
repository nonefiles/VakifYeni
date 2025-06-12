import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ModernEventsPage() {
  const [activeCategory, setActiveCategory] = useState("Eğitimler");

  const events = [
    {
      name: "Psikoloji Semineri",
      date: "15 Haziran 2025",
      time: "14:00 - 16:00",
      location: "Online",
      description: "Psikolojinin temel kavramları ve günlük hayattaki uygulamaları üzerinedir.",
      category: "Seminerler",
    },
    {
      name: "Stres Yönetimi Atölyesi",
      date: "20 Haziran 2025",
      time: "10:00 - 12:00",
      location: "İstanbul Merkez Ofis",
      description: "Stresle başa çıkma tekniklerini öğrenmek için pratik bir atölye çalışması.",
      category: "Atölye Çalışmaları",
    },
    {
      name: "Yıllık Psikoloji Konferansı",
      date: "10 Temmuz 2025",
      time: "09:00 - 17:00",
      location: "İstanbul Kongre Merkezi",
      description: "Uluslararası konuşmacıların katılımıyla, psikoloji alanındaki son gelişmeleri ele alacağımız bir günlük konferansımız.",
      category: "Konferanslar",
    },
  ];

  const categories = ["Eğitimler", "Seminerler", "Atölye Çalışmaları", "Konferanslar"];

  const filteredEvents = events.filter((event) => event.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 py-24 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Etkinlik Takvimi</h1>
          <p className="text-lg md:text-xl">
            Yol Arkadaşları Psikoloji Vakfı'nın düzenlediği etkinlikleri keşfedin ve katılın.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex justify-center space-x-4">
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
      </section>

      {/* Events Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map((event, index) => (
            <div key={index} className="rounded-xl bg-white p-6 shadow-lg transition-transform hover:scale-105">
              <h3 className="mb-2 text-xl font-bold text-blue-600">{event.name}</h3>
              <p className="mb-1 text-gray-600">Tarih: {event.date}</p>
              <p className="mb-1 text-gray-600">Saat: {event.time}</p>
              <p className="mb-1 text-gray-600">Yer: {event.location}</p>
              <p className="text-gray-600">{event.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Event Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-10 text-center text-3xl font-bold text-blue-600">Öne Çıkan Etkinlik</h2>
          <div className="flex flex-col items-center gap-8 rounded-xl bg-white p-8 shadow-lg md:flex-row">
            <div className="shrink-0">
              <div className="relative h-48 w-full overflow-hidden rounded-lg md:w-64">
                <Image
                  src="/images/events/feature1.jpg"
                  alt="Öne Çıkan Etkinlik"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="text-center md:text-left">
              <h3 className="mb-2 text-2xl font-bold text-blue-600">Yıllık Psikoloji Konferansı</h3>
              <p className="mb-1 text-gray-600">Tarih: 10 Temmuz 2025</p>
              <p className="mb-1 text-gray-600">Saat: 09:00 - 17:00</p>
              <p className="mb-4 italic text-gray-600">"Psikolojinin Geleceği: Yeni Yaklaşımlar ve Uygulamalar"</p>
              <p className="text-gray-600">
                Uluslararası konuşmacıların katılımıyla, psikoloji alanındaki son gelişmeleri ele alacağımız bir günlük konferansımız.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold">Etkinliklerimize Katılın</h2>
          <p className="mb-8 text-lg">
            Etkinliklerimize katılmak ve güncel bilgilere ulaşmak için aşağıdaki bağlantıları kullanabilirsiniz.
          </p>
          <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/etkinlik-kayit">Etkinliklere Kaydol</Link>
            </Button>
            <Button asChild size="lg" className="bg-transparent border border-white hover:bg-white hover:text-blue-600">
              <Link href="/etkinlik-detay">Etkinlik Detayları</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
