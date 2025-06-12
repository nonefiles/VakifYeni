import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { format } from 'date-fns';

export default function EventsCalendarPage() {
  // Sample events data
  const events = [
    {
      id: 1,
      title: "Psikoloji Atölyesi",
      date: new Date(2025, 5, 15), // June 15, 2025
      location: "İstanbul",
      description: "Psikoloji alanında uzmanlar tarafından verilecek bir atölye çalışması.",
      image: "/images/events/psychology-workshop.jpg",
    },
    {
      id: 2,
      title: "Ruh Sağlığı Semineri",
      date: new Date(2025, 5, 22), // June 22, 2025
      location: "Ankara",
      description: "Ruh sağlığı konusunda farkındalık yaratmayı amaçlayan bir seminer.",
      image: "/images/events/mental-health-seminar.jpg",
    },
    {
      id: 3,
      title: "Aile Danışmanlığı Eğitimi",
      date: new Date(2025, 5, 29), // June 29, 2025
      location: "İzmir",
      description: "Aile danışmanlığı konusunda eğitim verilecektir.",
      image: "/images/events/family-counseling.jpg",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-400 to-blue-500 py-24 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">Etkinlik Takvimi</h1>
          <p className="mx-auto max-w-3xl text-lg">
            Yol Arkadaşları Psikoloji Vakfı olarak düzenlediğimiz etkinliklerimizle ilgili detayları burada bulabilirsiniz.
          </p>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-green-600">Yaklaşan Etkinlikler</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <div key={event.id} className="overflow-hidden rounded-xl bg-white shadow-lg transition-transform duration-300 hover:scale-105">
                <div className="relative h-48 w-full">
                  <Image
                    src={event.image}
                    alt={event.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-4 flex items-center text-gray-500">
                    <FaCalendarAlt className="mr-2" />
                    <span>{format(event.date, 'dd MMMM yyyy')}</span>
                  </div>
                  <div className="mb-4 flex items-center text-gray-500">
                    <FaMapMarkerAlt className="mr-2" />
                    <span>{event.location}</span>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-green-600">{event.title}</h3>
                  <p className="text-gray-600">{event.description}</p>
                  <Button className="mt-4 bg-green-600 text-white hover:bg-green-700">
                    <Link href={`/etkinlikler/${event.id}`}>Detayları Gör</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
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
