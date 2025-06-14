// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useParams, Link } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { format } from 'date-fns';

// Mock veri
const mockEvents = [
  { id: 1, title: 'Etkinlik 1', date: new Date(2023, 10, 15), description: 'Açıklama 1' },
  { id: 2, title: 'Etkinlik 2', date: new Date(2023, 10, 20), description: 'Açıklama 2' },
];

const EventCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [view, setView] = useState('calendar');

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const toggleView = () => {
    setView(view === 'calendar' ? 'list' : 'calendar');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Etkinlik Takvimi</h1>
      <button
        onClick={toggleView}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        {view === 'calendar' ? 'Liste Görünümüne Geç' : 'Takvim Görünümüne Geç'}
      </button>

      {view === 'calendar' ? (
        <div className="bg-white p-4 rounded shadow">
          <Calendar onChange={handleDateChange} value={date} />
        </div>
      ) : (
        <div className="w-full max-w-md bg-white rounded shadow p-4">
          {mockEvents.map((event) => (
            <div key={event.id} className="mb-4 p-4 border rounded">
              <h2 className="text-xl font-bold">{event.title}</h2>
              <p className="text-gray-600">{format(event.date, 'dd MMMM yyyy')}</p>
              <p className="text-gray-800">{event.description}</p>
              <span className="inline-block bg-green-200 text-green-800 px-2 py-1 rounded text-xs">
                Ücretsiz
              </span>
              <Link to={`/etkinlik/${event.id}`}>
                <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
                  Detayları Gör
                </button>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const EventDetail = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    session: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const event = mockEvents.find(event => event.id === parseInt(id));

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Etkinlik Detayı - {event.title}</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white rounded shadow p-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
            Ad
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
            Soyad
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            E-posta
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="session">
            Oturum Seçimi
          </label>
          <select
            id="session"
            name="session"
            value={formData.session}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          >
            <option value="">Oturum Seçin</option>
            <option value="session1">Oturum 1</option>
            <option value="session2">Oturum 2</option>
          </select>
        </div>
        <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded">
          Kayıt Ol
        </button>
      </form>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EventCalendar />} />
        <Route path="/etkinlik/:id" element={<EventDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
