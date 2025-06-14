"use client";

import { useState } from "react";
import { format } from "date-fns";
import { tr } from "date-fns/locale";
import Calendar from 'react-calendar';

const events = [
  {
    id: 1,
    title: "Ruh Sağlığına Giriş Semineri",
    date: "2025-06-28",
    time: "19:00",
    location: "Zoom",
    type: "online",
    description: "Temel psikolojik kavramların ele alınacağı seminer.",
    link: "/etkinlikler/ruhsagligi-semineri",
  },
  {
    id: 2,
    title: "Gönüllü Buluşması",
    date: "2025-07-06",
    time: "14:00",
    location: "İstanbul Ofisi",
    type: "offline",
    description: "Mevcut ve yeni gönüllülerle yüz yüze tanışma etkinliği.",
    link: "/etkinlikler/gonullu-bulusmasi",
  },
  {
    id: 3,
    title: "Şema Terapi Atölyesi",
    date: "2025-07-20",
    time: "10:00",
    location: "Ankara",
    type: "offline",
    description: "Uygulamalı Şema Terapi atölyesi.",
    link: "/etkinlikler/sema-terapi-atolyesi",
  },
];

export default function EventsPage() {
  const [view, setView] = useState<"list" | "calendar">("list");
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState<"all" | "online" | "offline">("all");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const openModal = (event: any) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const filteredEvents = events.filter((event) => {
    const matchesSearchTerm = event.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilterType = filterType === "all" || event.type === filterType;
    const matchesDate = selectedDate ? event.date === format(selectedDate, "yyyy-MM-dd") : true;
    return matchesSearchTerm && matchesFilterType && matchesDate;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-sky-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-blue-800">
            Etkinlik Takvimi
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ruh sağlığı alanındaki yolculuğunuza bir adım atın. Katılabileceğiniz etkinlikleri keşfedin.
          </p>
        </header>

        <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
          <div className="w-full md:w-1/3">
            <input
              type="text"
              placeholder="Etkinlik ara..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex space-x-4">
            <select
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={filterType}
              onChange={(e) => setFilterType(e.target.value as "all" | "online" | "offline")}
            >
              <option value="all">Hepsi</option>
              <option value="online">Online</option>
              <option value="offline">Yüz Yüze</option>
            </select>
            <button
              onClick={() => setView(view === "list" ? "calendar" : "list")}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
            >
              {view === "list" ? "Takvim Görünümü" : "Liste Görünümü"}
            </button>
          </div>
        </div>

        {view === "list" ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-blue-800">
                      {event.title}
                    </h3>
                    <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                      event.type === "online"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}>
                      {event.type === "online" ? "Online" : "Yüz Yüze"}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 min-h-[48px]">
                    {event.description}
                  </p>
                  <div className="text-sm text-gray-500 space-y-1">
                    <div className="flex items-center gap-2">
                      <span>
                        {format(new Date(event.date), "PPPP", { locale: tr })} • {event.time}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => openModal(event)}
                  className="mt-6 w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 py-2 rounded-xl transition-colors"
                >
                  Detayları Gör
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex justify-center">
            <div className="shadow-lg rounded-lg p-4 bg-white">
              <Calendar
                onChange={(date) => setSelectedDate(date as Date)}
                value={selectedDate}
                className="border-none"
                tileClassName={({ date, view }) =>
                  view === 'month' && date.getDay() === 0
                    ? 'sunday'
                    : view === 'month' && date.getDay() === 6
                    ? 'saturday'
                    : null
                }
              />
            </div>
          </div>
        )}

        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl p-6 max-w-md w-full shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">{selectedEvent.title}</h2>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <p className="mb-2">
                <strong>Tarih:</strong> {selectedEvent.date} • {selectedEvent.time}
              </p>
              <p className="mb-2">
                <strong>Lokasyon:</strong> {selectedEvent.location}
              </p>
              <p className="mb-4 text-gray-700">{selectedEvent.description}</p>
              <RegistrationForm eventId={selectedEvent.id} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function RegistrationForm({ eventId }: { eventId: number }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    session: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Kayıt başarılı!");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          name="firstName"
          placeholder="Ad"
          value={formData.firstName}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div>
        <input
          type="text"
          name="lastName"
          placeholder="Soyad"
          value={formData.lastName}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          placeholder="E-posta"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div>
        <select
          name="session"
          value={formData.session}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Oturum Seçin</option>
          <option value="session1">Oturum 1</option>
          <option value="session2">Oturum 2</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-colors"
      >
        Kaydol
      </button>
    </form>
  );
}
