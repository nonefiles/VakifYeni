import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function KurumsalEgitimlerPage() {
  return (
    <div className="container py-16">
      <Card>
        <CardHeader>
          <CardTitle>Kurumsal Eğitimler</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            İyi oluş, sadece bireylerin değil kurumların da gücüdür.
          </p>
          <p>
            Yol Arkadaşları Psikoloji Vakfı olarak, iş yerlerinde psikolojik iyi oluşun sürdürülebilir başarıyla doğrudan ilişkili olduğuna inanıyoruz. Bu doğrultuda sunduğumuz kurumsal eğitim ve seminer programlarımız, çalışanların ruh sağlığını desteklemeyi, iletişim becerilerini geliştirmeyi ve kurumsal iklimi güçlendirmeyi hedefliyor.
          </p>
          <p>
            Eğitimlerimiz, kurumların ihtiyaçlarına özel olarak şekillendirilir; liderlikten ekip içi ilişkilere, stres yönetiminden duygusal dayanıklılığa kadar geniş bir yelpazeyi kapsar.
          </p>
          <p>
            Amacımız yalnızca bilgi aktarmak değil, çalışanların bireysel potansiyellerini keşfetmelerine ve kurum içindeki etkileşimlerin daha sağlıklı bir zemine taşınmasına katkı sunmaktır.
          </p>
          <p>
            <i>Daha sağlıklı bir iş ortamı için birlikte çalışalım.</i><br/>
            Eğitim içerikleri ve başvuru için bizimle iletişime geçebilirsiniz.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}