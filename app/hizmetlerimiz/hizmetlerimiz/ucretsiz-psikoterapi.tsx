import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function UcretsizPsikoterapiPage() {
  return (
    <div className="container py-16">
      <Card>
        <CardHeader>
          <CardTitle>Ücretsiz Psikoterapi Hizmeti</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Psikolojik destek bir ayrıcalık değil, bir hak. Biz de Yol Arkadaşları Psikoloji Vakfı olarak bu hakka erişimde herkesin eşit koşullara sahip olmasını önemsiyoruz.
          </p>
          <p>
            Maddi koşullar nedeniyle özel terapiye ulaşamayan bireyler için ücretsiz psikoterapi hizmeti sunuyoruz. Bu hizmetten faydalanmak isteyen herkes, başvuru formumuzu doldurarak değerlendirme sürecine katılabilir.
          </p>
          <p>
            Sunduğumuz psikoterapi hizmetleri, her bireyin ihtiyaçlarına göre şekillenir.
          </p>
          <ul className="list-disc ml-6">
            <li>
              <b>Bireysel Psikoterapi:</b> Yetişkin bireylerin duygu, düşünce ve davranışlarını anlamalarına, zorlayıcı yaşam olaylarıyla başa çıkmalarına destek olur.
            </li>
            <li>
              <b>Çocuk ve Ergen Psikoterapisi:</b> Çocukların ve ergenlerin gelişimsel, duygusal ve sosyal zorluklarıyla sağlıklı şekilde baş edebilmeleri için aileyle iş birliği içinde yürütülür.
            </li>
            <li>
              <b>Çift ve Aile Psikoterapisi:</b> Evlilik, ebeveynlik ve aile içi ilişkilerde yaşanan çatışmaları anlamak ve çözümlemek amacıyla sunulur.
            </li>
          </ul>
          <p>
            Tüm görüşmeler, alanında eğitimli uzmanlar tarafından yürütülür; etik kurallar çerçevesinde ve gizlilik ilkesiyle gerçekleştirilir.
          </p>
          <p>
            Yalnız değilsiniz. Biz, her adımda yanınızda olmaya hazırız.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
