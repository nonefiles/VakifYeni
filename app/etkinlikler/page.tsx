import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function EventsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-green-50 py-16 md:py-24">
        <div className="container">
          <h1 className="mb-6 text-center text-4xl font-bold text-green-700 md:text-5xl">Etkinlik Takvimi</h1>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-lg text-gray-600">
              Yol Arkadaşları Psikoloji Vakfı olarak düzenlediğimiz atölye, seminer ve buluşmalarla bir araya geliyoruz.
              Siz de bu etkinliklerde yer almak ister misiniz?
            </p>
          </div>
        </div>
      </section>

      {/* Events List Section */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-10 text-center text-3xl font-bold text-green-700">Yaklaşan Etkinlikler</h2>

            <div className="space-y-8">
              {/* Event Card */}
              <div className="rounded-xl border p-6 shadow-sm bg-white">
                <div className="md:flex md:items-center md:justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-green-700">Ruh Sağlığına Giriş Semineri</h3>
                    <p className="text-gray-600 mt-2">
                      Temel psikolojik kavramların konuşulacağı bu seminerde, alan uzmanlarıyla ruh sağlığı üzerine derinlemesine sohbet edeceğiz.
                    </p>
                    <p className="text-sm text-gray-500 mt-1">Tarih: 28 Haziran 2025 • Saat: 19:00 • Yer: Online (Zoom)</p>
                  </div>
                  <Button asChild className="mt-4 md:mt-0 bg-green-600 text-white hover:bg-green-700">
                    <Link href="/etkinlikler/ruhsagligi-semineri">Detaylar</Link>
                  </Button>
                </div>
              </div>

              {/* Event Card */}
              <div className="rounded-xl border p-6 shadow-sm bg-white">
                <div className="md:flex md:items-center md:justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-green-700">Gönüllü Buluşması</h3>
                    <p className="text-gray-600 mt-2">
                      Vakfımızda aktif rol alan gönüllülerimizle tanışmak ve yeni gönüllülerle kaynaşmak için yüz yüze buluşuyoruz.
                    </p>
                    <p className="text-sm text-gray-500 mt-1">Tarih: 6 Temmuz 2025 • Saat: 14:00 • Yer: İstanbul Ofisi</p>
                  </div>
                  <Button asChild className="mt-4 md:mt-0 bg-green-600 text-white hover:bg-green-700">
                    <Link href="/etkinlikler/gonullu-bulusmasi">Detaylar</Link>
                  </Button>
                </div>
              </div>

              {/* Event Card */}
              <div className="rounded-xl border p-6 shadow-sm bg-white">
                <div className="md:flex md:items-center md:justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-green-700">Şema Terapi Atölyesi</h3>
                    <p className="text-gray-600 mt-2">
                      Şema terapi alanına ilgi duyan psikoloji öğrencileri ve uzmanları için uygulamalı bir atölye çalışması.
                    </p>
                    <p className="text-sm text-gray-500 mt-1">Tarih: 20 Temmuz 2025 • Saat: 10:00 • Yer: Ankara</p>
                  </div>
                  <Button asChild className="mt-4 md:mt-0 bg-green-600 text-white hover:bg-green-700">
                    <Link href="/etkinlikler/sema-terapi-atolyesi">Detaylar</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-green-700">Sen de Katıl!</h2>
            <p className="mb-8 text-lg text-gray-600">
              Etkinliklerimizde yer almak, gelişmek ve katkı sunmak istiyorsan hemen kayıt ol ya da gönüllü ekibimize katıl!
            </p>
            <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button asChild size="lg" className="bg-green-600 text-white hover:bg-green-700">
                <Link href="/gonullu-ol">Gönüllü Ol</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-green-700 text-green-700 hover:bg-green-50 hover:text-green-800"
              >
                <Link href="/iletisim">Bize Ulaş</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
