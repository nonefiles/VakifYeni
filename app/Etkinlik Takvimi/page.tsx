import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function EventsCalendarPage() {
  // Sample events data
  const events = [
    {
      id: 1,
      title: "Psikoloji Atölyesi",
      date: "15 Haziran 2025",
      description: "Psikoloji alanında uzmanlar tarafından verilecek bir atölye çalışması.",
      image: "/images/events/psychology-workshop.jpg",
    },
    {
      id: 2,
      title: "Ruh Sağlığı Semineri",
      date: "22 Haziran 2025",
      description: "Ruh sağlığı konusunda farkındalık yaratmayı amaçlayan bir seminer.",
      image: "/images/events/mental-health-seminar.jpg",
    },
    {
      id: 3,
      title: "Aile Danışmanlığı Eğitimi",
      date: "29 Haziran 2025",
      description: "Aile danışmanlığı konusunda eğitim verilecektir.",
      image: "/images/events/family-counseling.jpg",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-green-50 py-16 md:py-24">
        <div className="container">
          <h1 className="mb-6 text-center text-4xl font-bold text-green-600 md:text-5xl">Etkinlik Takvimi</h1>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-lg text-gray-600">
              Yol Arkadaşları Psikoloji Vakfı olarak düzenlediğimiz etkinliklerimizle ilgili detayları burada bulabilirsiniz.
            </p>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-10 text-center text-3xl font-bold text-green-600">Yaklaşan Etkinlikler</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {events.map((event) => (
                <div key={event.id} className="rounded-xl bg-white p-6 shadow-sm">
                  <div className="relative h-48 w-full overflow-hidden rounded-t-xl">
                    <Image
                      src={event.image}
                      alt={event.title}
                      width={400}
                      height={300}
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="mb-2 text-xl font-bold text-green-600">{event.title}</h3>
                    <p className="mb-2 text-gray-500">{event.date}</p>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-green-600">Etkinliklerimize Katılın</h2>
            <p className="mb-8 text-lg text-gray-600">
              Etkinliklerimize katılmak veya daha fazla bilgi almak için bizimle iletişime geçin.
            </p>
            <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button asChild size="lg" className="bg-green-600 text-white hover:bg-green-700">
                <Link href="/iletisim">İletişime Geç</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
