import { Card, CardContent } from "@/components/ui/card"
import { FileText, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function VakifTuzuguPage() {
  return (
    <div className="container py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center gradient-heading">Vakıf Tüzüğü</h1>

      <p className="text-lg text-center max-w-3xl mx-auto mb-12">
        Yılmaz Yol Arkadaşları Vakfı'nın tüzüğü, vakfımızın kuruluş amacını, yönetim yapısını ve faaliyet alanlarını
        belirleyen resmi belgedir.
      </p>

      <div className="max-w-3xl mx-auto mb-12">
        <Card className="border-0 shadow-md">
          <CardContent className="p-8">
            <div className="flex justify-center mb-8">
              <div className="flex h-20 w-20 items-center justify-center rounded-full gradient-bg-primary">
                <FileText className="h-10 w-10 text-white" />
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-6 text-center">Vakıf Resmi Senedi</h2>

            <p className="mb-8 text-center">
              Vakfımızın resmi senedini incelemek veya indirmek için aşağıdaki bağlantıyı kullanabilirsiniz.
            </p>

            <div className="flex justify-center">
              <Button asChild className="flex items-center gap-2">
                <Link href="/images/vakif-tuzugu.pdf" target="_blank">
                  <Download className="h-5 w-5" />
                  <span>Vakıf Tüzüğünü İndir (PDF)</span>
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Tüzük Özeti</h2>
        <h3 className="text-xl font-semibold mb-6 text-center">Yılmaz Yol Arkadaşları Vakfı</h3>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold mb-3">Madde 1: Vakfın Adı ve Merkezi</h3>
            <p>Vakfın adı <strong>"Yılmaz Yol Arkadaşları Vakfı"</strong>dır. Kısa adı YYA'dır. Vakfın merkezi Ankara İli, Çankaya İlçesi, Aziziye Mahallesi, Cinnah Caddesi 66/7 adresindedir.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3">Madde 2: Vakfın Amacı</h3>
            <p>
              Vakfın amacı; Türk toplumunun ruh sağlığı alanında bilimsel ve sosyal gelişimini desteklemek, psikolojik destek hizmetlerini yaygınlaştırmak, doğal afetlerde insani yardım sağlamak ve sağlıklı bireylerden oluşan bir toplum için eğitim, terapi ve benzeri etkinliklerde bulunmaktır.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3">Madde 3: Vakfın Faaliyet Alanları</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Ruh sağlığı konusunda araştırmalar yapmak ve yayınlar hazırlamak</li>
              <li>Maddi imkânsızlıklar nedeniyle desteğe erişemeyen bireylere bireysel ve grup terapileri sunmak</li>
              <li>Ruh sağlığı alanında öğrencilere eğitim desteği sağlamak</li>
              <li>Yurtiçi ve yurtdışı hibe ve fonlardan yararlanmak</li>
              <li>Ruh sağlığı turizmi ve kalite yönetimi konularında projeler geliştirmek</li>
              <li>Doğal afetlerde insani yardım çalışmaları yürütmek</li>
              <li>İşçi ruh sağlığına yönelik projeler yapmak</li>
              <li>Ruh sağlığı araştırma merkezi kurmak</li>
              <li>Yazılı, görsel ve dijital yayınlar hazırlamak</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3">Madde 4: Vakfın Organları</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Mütevelli Heyeti</li>
              <li>Yönetim Kurulu</li>
              <li>Denetim Kurulu</li>
              <li>(İhtiyaca göre) Danışma Kurulu</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3">Madde 5: Vakfın Gelirleri</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Bağışlar ve yardımlar</li>
              <li>Yurtiçi ve yurtdışından sağlanan hibeler</li>
              <li>Vakfa ait malvarlığından elde edilen gelirler</li>
              <li>Vakıf faaliyetlerinden ve projelerden sağlanan diğer gelirler</li>
              <li>Gerekirse iktisadi işletmeler kurularak elde edilecek kazançlar</li>
            </ul>
          </div>
        <p className="mt-12 text-center text-sm text-muted-foreground">
          Not: Bu özet bilgilendirme amaçlıdır. Resmi ve tam metin için lütfen vakıf tüzüğünü indiriniz.
        </p>
      </div>
    </div>
  )
}
