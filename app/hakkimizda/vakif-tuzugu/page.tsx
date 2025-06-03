import { Card, CardContent } from "@/components/ui/card"
import { FileText, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function VakifTuzuguPage() {
  return (
    <div className="container py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center gradient-heading">Vakıf Tüzüğü</h1>

      <p className="text-lg text-center max-w-3xl mx-auto mb-12">
        Yol Arkadaşları Psikoloji Vakfı'nın tüzüğü, vakfımızın kuruluş amacını, yönetim yapısını ve faaliyet alanlarını
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
                <Link href="public/images/vakif-tuzugu.pdf">
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

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold mb-3">Madde 1: Vakfın Adı ve Merkezi</h3>
            <p>Vakfın adı "Yol Arkadaşları Psikoloji Vakfı"dır ve merkezi İstanbul'dadır.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3">Madde 2: Vakfın Amacı</h3>
            <p>
              Vakfın amacı, psikolojik desteğe erişimde fırsat eşitliği yaratmak, maddi imkânsızlıklar nedeniyle
              psikolojik desteğe ulaşamayan bireylere ücretsiz hizmet sunmak, genç uzmanların gelişimine katkıda
              bulunmak ve toplumsal ruh sağlığı bilincini artırmaktır.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3">Madde 3: Vakfın Faaliyet Alanları</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Ücretsiz psikoterapi hizmetleri sunmak</li>
              <li>Eğitim ve seminerler düzenlemek</li>
              <li>Toplum temelli psikolojik destek projeleri geliştirmek</li>
              <li>Genç uzmanların mesleki gelişimini desteklemek</li>
              <li>Ruh sağlığı alanında bilimsel araştırmaları desteklemek</li>
              <li>Toplumsal ruh sağlığı bilincini artırmaya yönelik yayınlar hazırlamak</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3">Madde 4: Vakfın Organları</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Mütevelli Heyeti</li>
              <li>Yönetim Kurulu</li>
              <li>Denetim Kurulu</li>
              <li>Danışma Kurulu</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3">Madde 5: Vakfın Gelirleri</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Bağışlar ve yardımlar</li>
              <li>Vakıf faaliyetlerinden elde edilen gelirler</li>
              <li>Vakıf malvarlığının getirileri</li>
              <li>Diğer gelirler</li>
            </ul>
          </div>
        </div>

        <p className="mt-12 text-center text-sm text-muted-foreground">
          Not: Bu özet bilgilendirme amaçlıdır. Resmi ve tam metin için lütfen vakıf tüzüğünü indiriniz.
        </p>
      </div>
    </div>
  )
}
