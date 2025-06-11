import { Card, CardContent } from "@/components/ui/card"
import { FileText, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

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
              <Button className="flex items-center gap-2" onClick={() => window.open('/images/vakif-tuzugu.pdf', '_blank')}>
                <Download className="h-5 w-5" />
                <span>Vakıf Tüzüğünü İndir (PDF)</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Tüzük Özeti</h2>
        <div className="space-y-6 text-lg">
          <p className="text-center font-semibold">
            Ruh sağlığı alanında bilimsel ve sosyal gelişim için bir aradayız.
          </p>
          <p className="text-center">
            Yılmaz Yol Arkadaşları Vakfı; toplumun ruh sağlığına katkı sunmak, bu alandaki bilimsel ve sosyal gelişimi desteklemek amacıyla kurulmuştur. Vakfımız, bireylerin ve toplumun psikolojik iyi oluşunu önceleyen çalışmaları destekler, ihtiyaç sahiplerine ücretsiz psikolojik destek sunar ve ruh sağlığı alanında eğitim gören öğrencilere mesleki gelişim desteği sağlar.
          </p>
          <p className="font-semibold text-center">Ruh sağlığı alanında çağdaş, bütüncül ve toplum temelli yaklaşımlarla:</p>
          <ul className="list-disc space-y-2 text-center" style={{listStylePosition: 'inside'}}>
            <li>Ücretsiz bireysel ve grup terapileri sunuyoruz,</li>
            <li>Psikoloji sohbetleri, atölyeler ve eğitim programları düzenliyoruz,</li>
            <li>Kurumlara özel psikolojik danışmanlık ve eğitimler sağlıyoruz,</li>
            <li>Öğrencilere yönelik mesleki destek ve burs programları yürütüyoruz,</li>
            <li>Doğal afetlerde insani yardım çalışmaları yürütüyoruz,</li>
            <li>Ruh sağlığı alanında araştırmalar ve projeler geliştiriyoruz.</li>
          </ul>
          <p className="text-center">
            Vakıf, bu çalışmaları sürdürebilmek için bireyler, kurumlar ve topluluklarla iş birliği yapar; aynı zamanda bilimsel yayınlar, seminerler ve sosyal sorumluluk projeleriyle kamu yararına faaliyetlerde bulunur.
          </p>
        </div>
        <p className="mt-12 text-center text-sm text-muted-foreground">
          Not: Bu özet bilgilendirme amaçlıdır. Resmi ve tam metin için lütfen vakıf tüzüğünü indiriniz.
        </p>
      </div>
    </div>
  )
}
