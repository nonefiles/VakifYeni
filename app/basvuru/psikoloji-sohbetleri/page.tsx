'use client';

import { useState } from 'react';

export default function PsychologyConsultationForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    source: '',
    training: '',
    captcha: ''
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Ad Soyad alanı zorunludur';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefon Numarası alanı zorunludur';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'E-Posta Adresi alanı zorunludur';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Geçerli bir e-posta adresi giriniz';
    }
    
    if (!formData.source) {
      newErrors.source = 'Lütfen bir seçenek belirtiniz';
    }
    
    if (!formData.training) {
      newErrors.training = 'Lütfen bir eğitim/etkinlik seçiniz';
    }
    
    if (!formData.captcha.trim()) {
      newErrors.captcha = 'Güvenlik kodu alanı zorunludur';
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      alert('Form başarıyla gönderildi!');
      // Form submission logic here
      console.log('Form data:', formData);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <section className="bg-white text-gray-800 py-20 px-4 md:px-8">
      <div className="max-w-2xl mx-auto">
        <header className="mb-16">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-center">
            Psikoloji Sohbetleri Kayıt Formu
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center">
            Psikoloji sohbetlerimize katılmak için lütfen aşağıdaki formu doldurunuz
          </p>
        </header>

        <div className="bg-white border rounded-xl shadow-sm p-8">
          <div onSubmit={handleSubmit} className="space-y-6">
            {/* Ad Soyad */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Ad Soyad <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Adınızı ve soyadınızı giriniz"
              />
              {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
            </div>

            {/* Telefon Numarası */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Telefon Numarası <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                  errors.phone ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Telefon numaranızı giriniz"
              />
              {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
            </div>

            {/* E-Posta Adresi */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                E-Posta Adresi <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="E-posta adresinizi giriniz"
              />
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
            </div>

            {/* Eğitimizi Nereden Duydunuz */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Eğitimizi Nereden Duydunuz? <span className="text-red-500">*</span>
              </label>
              <div className="space-y-2">
                {['Instagram', 'WhatsApp', 'Telegram Grubu', 'Google', 'Diğer'].map((option) => (
                  <label key={option} className="flex items-center">
                    <input
                      type="radio"
                      name="source"
                      value={option}
                      checked={formData.source === option}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">{option}</span>
                  </label>
                ))}
              </div>
              {errors.source && <p className="mt-1 text-sm text-red-500">{errors.source}</p>}
            </div>

            {/* Eğitim/Etkinlik Seçimi */}
            <div>
              <label htmlFor="training" className="block text-sm font-medium text-gray-700 mb-2">
                Lütfen Katılmak İstediğiniz Eğitim/Etkinliği Seçiniz <span className="text-red-500">*</span>
              </label>
              <select
                id="training"
                name="training"
                value={formData.training}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                  errors.training ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">Please select</option>
                <option value="stress-management">Stres Yönetimi Eğitimi</option>
                <option value="communication-skills">İletişim Becerileri Geliştirme</option>
                <option value="emotional-intelligence">Duygusal Zeka Eğitimi</option>
                <option value="mindfulness">Farkındalık ve Meditasyon</option>
                <option value="personal-development">Kişisel Gelişim Semineri</option>
                <option value="group-therapy">Grup Terapisi</option>
              </select>
              {errors.training && <p className="mt-1 text-sm text-red-500">{errors.training}</p>}
            </div>

            {/* Captcha */}
            <div>
              <label htmlFor="captcha" className="block text-sm font-medium text-gray-700 mb-2">
                Please type the characters <span className="text-red-500">*</span>
              </label>
              
              {/* Captcha Image */}
              <div className="mb-3 p-4 bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-2xl font-mono font-bold text-gray-800 tracking-wider bg-white px-4 py-2 rounded border-2 border-dashed border-gray-400">
                  Y9K2
                </div>
              </div>
              
              <input
                type="text"
                id="captcha"
                name="captcha"
                value={formData.captcha}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                  errors.captcha ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Yukarıdaki karakterleri giriniz"
              />
              {errors.captcha && <p className="mt-1 text-sm text-red-500">{errors.captcha}</p>}
              <p className="mt-1 text-xs text-gray-500">
                This helps us prevent spam, thank you.
              </p>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                onClick={handleSubmit}
                className="w-full bg-teal-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-teal-700 transition-colors focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              >
                Gönder
              </button>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Herhangi bir sorunuz mu var? Bizimle iletişime geçmekten çekinmeyin.
          </p>
          <a
            href="https://yolarkadaslari.com/iletisim"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            BİZE ULAŞIN
          </a>
        </div>
      </div>
    </section>
  );
}
