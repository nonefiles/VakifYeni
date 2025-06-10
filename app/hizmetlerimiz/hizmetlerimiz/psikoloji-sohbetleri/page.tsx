import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PsikolojiSohbetleriPage() {
  return (
    <div className="container py-16">
      <Card>
        <CardHeader>
          <CardTitle>Psikoloji Sohbetleri</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p><b>Bilgiyle besleniyor, söyleşilerle derinleşiyoruz...</b></p>
          <p>
            Yol Arkadaşları Psikoloji Vakfı olarak, ruh sağlığı alanında toplumsal farkındalık yaratmak ve güvenli bir paylaşım alanı sunmak için buradayız. Her hafta, Yol Arkadaşları Danışmanlık Merkezi’nin uzman desteğiyle gerçekleştirdiğimiz <i>psikoloji sohbetlerinde</i>, birlikte düşünüyor, birlikte öğreniyoruz.
          </p>
          <p>
            Bu sohbetler; psikolojiye ilgi duyan, zihnini açmak ve iç dünyasını tanımak isteyen herkes için… Uzman olmanıza gerek yok. Sadece dinlemek, sormak ve paylaşmak yeterli.
          </p>
          <p>
            Her buluşmada, ruh sağlığını ilgilendiren güncel konuları ele alıyor, psikolojiyi günlük yaşamın içinden konuşuyoruz.<br />
            Çünkü inanıyoruz ki: Bilgiyle beslenmek ve birlikte derinleşmek, bireyin olduğu kadar toplumun da dönüşümüne katkı sağlar.
          </p>
          <p>
            Etkinliklerimiz ücretsizdir.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}