import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaCalendarAlt, FaMapMarkerAlt, FaSearch, FaFilter, FaList, FaCalendar, FaShareAlt, FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { useState } from "react";
import { format } from 'date-fns';
import { tr } from 'date-fns/locale'; // Türkçe tarih formatı için
import { AnimatePresence, motion } from "framer-motion"; // Animasyonlar için

// Örnek etkinlik veri seti
const allEvents = [
  {
    id: 1,
    title: "Psikoloji Atölyesi",
    date: new Date(2025, 5, 15),
    location: "İstanbul",
    description: "Psikoloji alanında uzmanlar tarafından verilecek bir atölye çalışması.",
    image: "/images/events/psychology-workshop.jpg",
    category: "Atölye",
    price: "Ücretsiz"
  },
  {
    id: 2,
    title: "Ruh Sağlığı Semineri",
    date: new Date(2025, 5, 22),
    location: "Ankara",
    description: "Ruh sağlığı konusunda farkındalık yaratmayı amaçlayan bir seminer.",
    image: "/images/events/mental-health-seminar.jpg",
    category: "Seminer",
    price: "Ücretsiz"
  },
  {
    id: 3,
    title: "Aile Danışmanlığı Eğitimi",
    date: new Date(2025, 5, 29),
    location: "İzmir",
    description: "Aile danışmanlığı konusunda eğitim verilecektir.",
    image: "/images/events/family-counseling.jpg",
    category: "Eğitim",
    price: "250 TL"
  },
  {
    id: 4,
    title: "Çocuk Psikolojisi Konferansı",
    date: new Date(2025, 6, 5),
    location: "Online",
    description: "Çocuk psikolojisi alanında uzmanlar tarafından verilecek bir konferans.",
    image: "/images/events/child-psychology.jpg",
    category: "Konferans",
    price: "150 TL"
  },
  {
    id: 5,
    title: "Yoga ve Mindfulness Atölyesi",
    date: new Date(2025, 6, 12),
    location: "Antalya",
    description: "Yoga ve mindfulness teknikleri üzerine pratik bir atölye.",
    image: "/images/events/yoga-workshop.jpg",
    category: "Atölye",
    price: "200 TL"
  },
];

export default function EventsCalendarPage() {
  // State yönetimi için hook'lar
  const [viewMode, setViewMode] = useState("grid"); // grid, list veya calendar
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tüm Kategoriler");
  const [selectedLocation, setSelectedLocation] = useState("Tüm Yerler");
  const [selectedMonth, setSelectedMonth] = useState(null);

  // Filtrelenmiş etkinlikleri elde etmek için
  const filteredEvents = allEvents.filter(event => {
    // Tarih filtresi
    const eventMonth = event.date.getMonth();
    const matchesMonth = selectedMonth === null || eventMonth === selectedMonth;

    // Kategori filtresi
    const matchesCategory = selectedCategory === "Tüm Kategoriler" ||
                           event.category === selectedCategory;

    // Yer filtresi
    const matchesLocation = selectedLocation === "Tüm Yerler" ||
                           event.location === selectedLocation;

    // Arama terimi filtresi
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesMonth && matchesCategory && matchesLocation && matchesSearch;
  });

  // Benzersiz katego
