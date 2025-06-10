import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function GrupTerapileriPage() {
  return (
    <div className="container py-16">
      <Card>
        <CardHeader>
          <CardTitle>Grup Terapileri</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Yalnız hissettiğinizde, duygularınızı paylaşmak için bir alan aradığınızda, benzer yaşantılardan geçen kişilerle bir araya gelmenin iyileştirici gücü bambaşkadır.
          </p>
          <p>
            Yol Arkadaşları Psikoloji Vakfı olarak, farklı yaşantılara ve ihtiyaçlara yönelik tematik grup terapileri sunuyoruz. Bu çalışmalarda, bir terapist eşliğinde güvenli bir alanda buluşur, kendinizi ifade etme, başkalarını duyma ve birlikte iyileşme fırsatı bulursunuz.
          </p>
          <p>
            Grup terapilerimiz, özellikle sosyal destek ihtiyacı duyan, zorlayıcı duygularla baş etmekte zorlanan ya da kendini daha yakından tanımak isteyen bireyler için uygundur.
            Katılımcılar, benzer deneyimlerden gelen diğer bireylerle bir araya gelerek yalnız olmadıklarını fark eder; karşılıklı paylaşım sayesinde hem kendi yollarını hem de başkalarının yolculuklarını anlamlandırma imkânı bulur.
          </p>
          <p>
            Tüm gruplar, alanında uzman terapistler eşliğinde yürütülür ve gizlilik ilkesi temel alınarak oluşturulmuş güvenli bir ortamda gerçekleştirilir.
          </p>
          <p>
            Her adımda yanınızda olmak için buradayız.<br />
            Grup terapilerimizle ilgili güncel içerikler, başvuru süreci ve tematik programlarımız için bizi takip etmeye devam edin.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}