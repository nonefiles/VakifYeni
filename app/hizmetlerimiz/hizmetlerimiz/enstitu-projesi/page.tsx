import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function EnstituProjesiPage() {
  return (
    <div className="container py-16">
      <Card>
        <CardHeader>
          <CardTitle>Enstitü Projesi</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p><b>Geleceğe Doğru Adım Atıyoruz…</b></p>
          <p>
            Yol Arkadaşları Psikoloji Vakfı olarak uzun vadeli vizyonumuz; psikoloji alanında eğitim, uygulama ve araştırmayı bir araya getiren bir <b>Psikoloji Enstitüsü</b> kurmak. Bu yapı sayesinde, nitelikli uzmanların yetişmesi, toplum temelli psikolojik hizmetlerin güçlenmesi ve bilimsel bilginin daha fazla insana ulaşması için kalıcı bir zemin oluşturmayı hedefliyoruz.
          </p>
          <p>
            Enstitü; genç uzmanların gelişimini destekleyecek uygulama alanları sunmayı, meslek içi eğitimlerle profesyonel standartları yükseltmeyi ve toplumun psikolojik iyi oluşuna yönelik daha kapsayıcı projeleri mümkün kılmayı amaçlıyor.
          </p>
          <p>
            Bu proje, sadece bugünü değil geleceği de dönüştürme arzumuzun bir yansıması.
          </p>
          <p>
            <b>Enstitü Projesine katkı sunmak ve gönüllü ekibimize katılmak isterseniz [gönüllülük formumuzu] doldurabilirsiniz.</b>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}