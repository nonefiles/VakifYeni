import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PsikolojikAtolyelerPage() {
  return (
    <div className="container py-16">
      <Card>
        <CardHeader>
          <CardTitle>Psikoloji Atölyeleri</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p><b>Deneyimleyerek öğreniyoruz...</b></p>
          <p>
            Yol Arkadaşları Psikoloji Vakfı olarak, bilgiye yalnızca ulaşmanın değil, onu birlikte deneyimlemenin de dönüştürücü gücüne inanıyoruz.
            Bu inançla, <b>Yol Arkadaşları Danışmanlık Merkezi’nin uzman desteğiyle</b> yürüttüğümüz atölye çalışmaları, katılımcıların hem kendilerini tanımalarına hem de psikoloji bilgilerini pratikle derinleştirmelerine alan açıyor.
          </p>
          <p>
            Atölyelerimiz; ruh sağlığına ilgi duyan, kişisel gelişimine katkı sunmak isteyen herkes için tasarlandı. Etkileşimli, güvenli ve içten bir öğrenme ortamı sunan bu buluşmalar, kimi zaman bir duygu üzerine düşünmeyi, kimi zaman bir beceriyi birlikte geliştirmeyi amaçlıyor.
          </p>
          <p>
            <b>Tüm atölye çalışmalarımız ücretsizdir.</b><br />
            <i>
              Açılacak olan atölye programlarımızdan haberdar olmak için bültenimize kayıt olabilir ve bizi instagram hesabımızdan takip edebilirsiniz.
            </i>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}