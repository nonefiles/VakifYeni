import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function EventsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-50 py-16 md:py-24">
        <div className="container">
          <h1 className="mb-6 text-center text-4xl font-bold text-blue-600 md:text-5xl">Etkinlik Takvimi</h1>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-lg text-gray-600">
              Yol Arkadaşları Psikoloji Vakfı'nın düzenlediği etkinlikleri burada bulabilirsiniz.
            </p>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold text-blue-600 text-center">Etkinliklerimiz</h2>
            <div className="space-y-8">
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <h3 className="mb-2 text-xl font-bold text-blue-600">Psikoloji Semineri</h3>
                <p className="mb-1 text-gray-600">Tarih: 15 Haziran 2025</p>
                <p className="mb-1 text-gray-600">Saat: 14:00 - 16:00</p>
                <p className="mb-1 text-gray-600">Yer: Online</p>
                <p className="text-gray-600">
                  Psikolojinin temel kavramları ve günlük hayattaki uygulamaları üzerinedir.
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <h3 className="mb-2 text-xl font-bold text-blue-600">Atölye Çalışması: Stres Yönetimi</h3>
                <p className="mb-1 text-gray-600">Tarih: 20 Haziran 2025</p>
                <p className="mb-1 text-gray-600">Saat: 10:00 - 12:00</p>
                <p className="mb-1 text-gray-600">Yer: İstanbul Merkez Ofis</p>
                <p className="text-gray-600">
                  Stresle başa çıkma tekniklerini öğrenmek için pratik bir atölye çalışması.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="bg-blue-50 py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-10 text-center text-3xl font-bold text-blue-600">Önemli Etkinlikler</h2>
            <div className="flex flex-col items-center gap-8 rounded-xl bg-white p-8 shadow-sm md:flex-row md:items-start">
              <div className="shrink-0">
                <div className="relative h-48 w-48 overflow-hidden rounded-lg">
                  <Image
                    src="/images/events/feature1.jpg"
                    alt="Önemli Etkinlik 1"
                    width={200}
                    height={200}
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="text-center md:text-left">
                <h3 className="mb-2 text-2xl font-bold text-blue-600">Yıllık Psikoloji Konferansı</h3>
                <p className="mb-1 text-gray-600">Tarih: 10 Temmuz 2025</p>
                <p className="mb-1 text-gray-600">Saat: 09:00 - 17:00</p>
                <p className="mb-4 italic text-gray-600">
                  "Psikolojinin Geleceği: Yeni Yaklaşımlar ve Uygulamalar"
                </p>
                <p className="text-gray-600">
                  Uluslararası konuşmacıların katılımıyla, psikoloji alanındaki son gelişmeleri ele alacağımız bir günlük konferansımız.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-10 text-center text-3xl font-bold text-blue-600">Etkinlik Kategorileri</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl bg-blue-50 p-6 text-center">
                <h3 className="mb-4 text-xl font-bold text-blue-600">Eğitimler</h3>
                <p className="text-gray-600">
                  Psikolojik sağlık, gelişim ve terapi yöntemleri üzerine düzenlenen eğitimler.
                </p>
              </div>
              <div className="rounded-xl bg-blue-50 p-6 text-center">
                <h3 className="mb-4 text-xl font-bold text-blue-600">Seminerler</h3>
                <p className="text-gray-600">
                  Uzmanlar tarafından verilen ve çeşitli psikoloji konularını ele alan seminerler.
                </p>
              </div>
              <div className="rounded-xl bg-blue-50 p-6 text-center">
                <h3 className="mb-4 text-xl font-bold text-blue-600">Atölye Çalışmaları</h3>
                <p className="text-gray-600">
                  Pratik becerilerin geliştirildiği interaktif çalışmalar.
                </p>
              </div>
              <div className="rounded-xl bg-blue-50 p-6 text-center">
                <h3 className="mb-4 text-xl font-bold text-blue-600">Sosyal Etkinlikler</h3>
                <p className="text-gray-600">
                  Dayanışma ve topluluk ruhunu güçlendiren sosyal etkinlikler.
                </p>
              </div>
            </div>

            <div className="mt-12 rounded-xl bg-[#eff6ff] p-8 text-gray-800 text-center">
              <h3 className="mb-4 text-2xl font-bold">Gelecek Etkinlikler</h3>
              <p className="mb-6">
                Yol Arkadaşları Psikoloji Vakfı olarak, düzenlediğimiz etkinliklerle bireylerin psikolojik sağlıklarına katkıda bulunmayı ve toplumsal bilinç oluşturmayı hedefliyoruz.
              </p>
              <p className="mb-6">
                Etkinliklerimizle ilgili güncel bilgilere ulaşmak ve katılım sağlamak için bizi takip etmeye devam edin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-blue-600">Etkinliklerimize Katılın</h2>
            <p className="mb-8 text-lg text-gray-600">
              Etkinliklerimize katılmak ve güncel bilgilere ulaşmak için aşağıdaki bağlantıları kullanabilirsiniz.
            </p>
            <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button asChild size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
                <Link href="/etkinlik-kayit">Etkinliklere Kaydol</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 hover:text-blue-700"
              >
                <Link href="/etkinlik-detay">Etkinlik Detayları</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
