'use client';

import React, { useState } from "react";
import {
  Calendar,
  CheckCircle,
  HeartHandshake,
  User,
  Users,
  Brain,
  AlertCircle,
  Puzzle,
  Clock,
  Smile
} from "lucide-react";

const Oturum = ({ title, subtitle, items, icon: Icon, onRegister }) => (
  <div className="bg-white p-6 rounded-3xl shadow-md space-y-4 hover:shadow-lg transition-shadow">
    <div className="space-y-2 text-center">
      {Icon && <Icon className="w-8 h-8 text-blue-600 mx-auto" />}
      <h3 className="font-extrabold text-blue-800 text-xl tracking-tight">{title}</h3>
      <p className="italic text-gray-600 text-sm leading-relaxed">{subtitle}</p>
    </div>
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start space-x-2">
          <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
          <span className="text-gray-700 text-sm leading-snug">{item}</span>
        </li>
      ))}
    </ul>
    <div className="pt-4 text-center">
      <button
        onClick={() => onRegister(title)}
        className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-5 py-2 rounded-full shadow-md hover:scale-105 transition-transform font-semibold"
      >
        <Calendar className="w-4 h-4 inline-block mr-2" /> Bu Oturuma Kayıt Ol
      </button>
    </div>
  </div>
);

const RegistrationForm = ({ sessionTitle, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white rounded-xl p-8 max-w-md w-full space-y-4 shadow-xl animate-fade-in">
      <h2 className="text-xl font-bold text-blue-700">Kayıt Formu - {sessionTitle}</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Ad Soyad" className="w-full border rounded px-4 py-2" />
        <input type="email" placeholder="E-posta" className="w-full border rounded px-4 py-2" />
        <input type="tel" placeholder="Telefon" className="w-full border rounded px-4 py-2" />
        <input type="text" placeholder="Çocuk Yaşı" className="w-full border rounded px-4 py-2" />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Gönder
        </button>
      </form>
      <button
        onClick={onClose}
        className="text-sm text-gray-500 hover:underline w-full text-center mt-2"
      >
        İptal
      </button>
    </div>
  </div>
);

const EbeveynAtolyeCanvas = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedSession, setSelectedSession] = useState("");

  const handleRegister = (sessionTitle) => {
    setSelectedSession(sessionTitle);
    setShowForm(true);
  };

  return (
    <div className="bg-gradient-to-br from-white to-sky-50 min-h-screen py-16 px-4 md:px-8 space-y-12 relative">
      {showForm && (
        <RegistrationForm
          sessionTitle={selectedSession}
          onClose={() => setShowForm(false)}
        />
      )}

      <div className="text-center space-y-4">
        <h1 className="text-4xl font-extrabold text-blue-700 tracking-tight">Ebeveynlik Atölyesi</h1>
        <p className="text-gray-600 max-w-xl mx-auto leading-relaxed">
          Çocuğunu daha iyi anlamak, bağ kurmak, kriz anlarını yönetmek ve kendi ebeveynliğini keşfetmek isteyen herkesle bu seride bir araya geliyoruz.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <Oturum
          title="Çocuğumu Anlamak İstiyorum!"
          subtitle="Duygular, Dönemler ve Görünmeyen Zorluklar"
          icon={Brain}
          items={[
            "Her yaşın ayrı bir gelişim dili, her davranışın altında yatan bir ihtiyaç vardır. Bu oturumda, çocukların gelişim dönemlerine göre duygu düzenleme becerilerini, kriz anlarındaki tepkilerini ve 'zor davranış' gibi görünen durumların ardındaki görünmeyen duygusal ihtiyaçları konuşacağız.",
            "Çocuğunun zorlayıcı davranışlarının ardında hangi duyguların yattığını",
            "Gelişim dönemlerine göre hangi ihtiyaçların ön planda olduğunu",
            "Davranışın değil, ihtiyacın dilini nasıl okuyabileceğini"
          ]}
          onRegister={handleRegister}
        />

        <Oturum
          title="Ben Nasıl Bir Ebeveynim?"
          subtitle="Aile Geçmişinin Ebeveynlik Üzerindeki Etkileri"
          icon={Users}
          items={[
            "Ebeveynliğimiz sadece bugünle değil, geçmişle de şekillenir. Bu oturumda kendi ebeveynlerimizden aldığımız modelleri, aile sistemimizin görünmeyen kurallarını ve aile geçmişimizin ebeveynliğimize nasıl yansıdığını keşfedeceğiz.",
            "Kendi ebeveynlik tarzının nereden geldiğini",
            "Geçmişten bugüne aktardığın aile kalıplarını",
            "Sizi zorlayan durumların kökenini"
          ]}
          onRegister={handleRegister}
        />

        <Oturum
          title="Disiplin mi, Ceza mı?"
          subtitle="Kriz Anlarını Yönetmek ve Sağlıklı Sınırlar Çekmek"
          icon={AlertCircle}
          items={[
            "Kriz anları bağ kurmak için birer fırsattır ama nasıl yönetileceği belirleyicidir. Bu oturumda sınır koymak ile ceza vermek arasındaki farkları, çocukla kurulan iletişimin kriz anlarında nasıl dönüştüğünü ve tutarlı ebeveynliğin ipuçlarını ele alacağız.",
            "Ceza ile sınır koymak arasındaki farkı",
            "Kriz anlarını bağ kurma fırsatına nasıl çevirebileceğini",
            "Net, şefkatli ve tutarlı bir duruşun nasıl mümkün olacağını"
          ]}
          onRegister={handleRegister}
        />

        <Oturum
          title="Çocuğumla Nasıl Bağ Kurabilirim?"
          subtitle="Ebeveynlikte Kaliteli Zamanın Gücü"
          icon={Smile}
          items={[
            "Bağ kurmak için büyük şeylere değil, küçük ama gerçek temaslara ihtiyaç vardır. Bu oturumda oyun yoluyla ilişki kurmanın gücünü, kaliteli zamanın gücüyle ilişkileri nasıl derinleştirebileceğimizi ve çocuğun güçlü yönlerine nasıl odaklanabileceğinizi birlikte keşfedeceğiz.",
            "Oyun oynamanın ilişkideki bağa nasıl hizmet ettiğini",
            "Kaliteli zamanın ne olduğunu ve nasıl yaratılacağını",
            "Çocuğunuzun güçlü yanlarını fark etmenin onun gelişimini nasıl beslediğini"
          ]}
          onRegister={handleRegister}
        />
      </div>

      <div className="bg-blue-200 rounded-3xl p-8 text-center space-y-4 text-blue-900">
        <h3 className="text-2xl font-bold">💬 Kendinize ve Çocuğunuza Bu Alanı Açmak İster Misiniz?</h3>
        <p className="max-w-xl mx-auto leading-relaxed">
          O zaman sizi bu yolculuğa bekliyoruz. Ebeveynlik serüveninde yeni farkındalıklar kazanmak ve çocuğunuzla daha güçlü bağlar kurmak için bizimle olun.
        </p>
        <button
          onClick={() => handleRegister("Tüm Oturumlar")}
          className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow-md hover:scale-105 transition-transform"
        >
          <Calendar className="w-5 h-5 inline-block mr-2" /> Tüm Oturumlara Kayıt Ol
        </button>
      </div>
    </div>
  );
};

export default EbeveynAtolyeCanvas;
