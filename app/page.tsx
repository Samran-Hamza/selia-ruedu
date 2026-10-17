'use client'

import { useState } from 'react'

type Language = 'ru' | 'en' | 'ar'

const content = {
  ru: {
    nav: {
      about: 'О платформе',
      directions: 'Направления',
      contacts: 'Контакты',
    },
    hero: {
      badge: 'Запуск в декабре 2026',
      subtitle: 'НОВАЯ ПЛАТФОРМА',
      title: 'SELIA Platform — всё для поступления в одном месте',
      description: 'В декабре 2026 года мы запускаем единую цифровую платформу для студентов, университетов и образовательных агентов.',
      cta: 'Узнать больше',
    },
    features: {
      students: {
        title: 'Для студентов',
        items: [
          'Подбор университета и программы',
          'Онлайн подача документов',
          'Отслеживание статуса заявки',
          'Ответы на вопросы в реальном времени',
        ],
      },
      universities: {
        title: 'Для университетов',
        items: [
          'Управление набором иностранных студентов',
          'Аналитика рынка',
          'Автоматизация документооборота',
          'Коммуникация с агентами',
        ],
      },
    },
    directions: {
      title: 'Куда поступать',
      subtitle: 'Популярные направления',
      items: [
        { name: 'Медицина', icon: '🏥' },
        { name: 'Инженерия', icon: '⚙️' },
        { name: 'Бизнес', icon: '💼' },
        { name: 'IT', icon: '💻' },
        { name: 'Право', icon: '⚖️' },
        { name: 'Искусство', icon: '🎨' },
      ],
    },
    contacts: {
      title: 'Свяжитесь с нами',
      subtitle: 'Мы готовы ответить на ваши вопросы',
      company: 'LLC MARKO-co',
      address: '117756, Москва, Ступинский проезд, 1',
      email: 'marstudy@marko-co.ru',
      phone: '+7 953 997 84 75',
      hours: 'Пн-Пт: 9:00 - 18:00',
    },
    form: {
      title: 'Оставьте заявку',
      name: 'Ваше имя',
      email: 'Email',
      phone: 'Телефон',
      message: 'Сообщение',
      submit: 'Отправить',
      success: 'Спасибо! Мы свяжемся с вами в ближайшее время.',
    },
    footer: {
      rights: '© 2026 SELIA Platform. Все права защищены.',
      privacy: 'Политика конфиденциальности',
      terms: 'Условия использования',
    },
  },
  en: {
    nav: {
      about: 'About',
      directions: 'Directions',
      contacts: 'Contacts',
    },
    hero: {
      badge: 'Launching December 2026',
      subtitle: 'NEW PLATFORM',
      title: 'SELIA Platform — everything for admission in one place',
      description: 'In December 2026, we are launching a unified digital platform for students, universities, and educational agents.',
      cta: 'Learn more',
    },
    features: {
      students: {
        title: 'For students',
        items: [
          'University and program matching',
          'Online application submission',
          'Application status tracking',
          'Real-time Q&A',
        ],
      },
      universities: {
        title: 'For universities',
        items: [
          'International student recruitment management',
          'Market analytics',
          'Document workflow automation',
          'Agent communication',
        ],
      },
    },
    directions: {
      title: 'Where to study',
      subtitle: 'Popular directions',
      items: [
        { name: 'Medicine', icon: '🏥' },
        { name: 'Engineering', icon: '⚙️' },
        { name: 'Business', icon: '💼' },
        { name: 'IT', icon: '💻' },
        { name: 'Law', icon: '⚖️' },
        { name: 'Arts', icon: '🎨' },
      ],
    },
    contacts: {
      title: 'Contact us',
      subtitle: 'We are ready to answer your questions',
      company: 'LLC MARKO-co',
      address: '117756, Moscow, Stupinsky Proyezd, 1',
      email: 'marstudy@marko-co.ru',
      phone: '+7 953 997 84 75',
      hours: 'Mon-Fri: 9:00 - 18:00',
    },
    form: {
      title: 'Leave a request',
      name: 'Your name',
      email: 'Email',
      phone: 'Phone',
      message: 'Message',
      submit: 'Send',
      success: 'Thank you! We will contact you soon.',
    },
    footer: {
      rights: '© 2026 SELIA Platform. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Use',
    },
  },
  ar: {
    nav: {
      about: 'عن المنصة',
      directions: 'الاتجاهات',
      contacts: 'اتصل بنا',
    },
    hero: {
      badge: 'الإطلاق في ديسمبر 2026',
      subtitle: 'منصة جديدة',
      title: 'منصة SELIA — كل شيء للقبول في مكان واحد',
      description: 'في ديسمبر 2026، نطلق منصة رقمية موحدة للطلاب والجامعات والوكلاء التعليميين.',
      cta: 'اعرف المزيد',
    },
    features: {
      students: {
        title: 'للطلاب',
        items: [
          'اختيار الجامعة والبرنامج',
          'تقديم الطلب عبر الإنترنت',
          'تتبع حالة الطلب',
          'الأسئلة والأجوبة في الوقت الفعلي',
        ],
      },
      universities: {
        title: 'للجامعات',
        items: [
          'إدارة تجنيد الطلاب الدوليين',
          'تحليلات السوق',
          'أتمتة سير العمل الوثائقي',
          'التواصل مع الوكلاء',
        ],
      },
    },
    directions: {
      title: 'أين تدرس',
      subtitle: 'الاتجاهات الشعبية',
      items: [
        { name: 'الطب', icon: '🏥' },
        { name: 'الهندسة', icon: '⚙️' },
        { name: 'الأعمال', icon: '💼' },
        { name: 'تكنولوجيا المعلومات', icon: '💻' },
        { name: 'القانون', icon: '⚖️' },
        { name: 'الفنون', icon: '' },
      ],
    },
    contacts: {
      title: 'اتصل بنا',
      subtitle: 'نحن مستعدون للإجابة على أسئلتك',
      company: 'LLC MARKO-co',
      address: '117756، موسكو، ستوبينسكي بروسبكت، 1',
      email: 'marstudy@marko-co.ru',
      phone: '+7 953 997 84 75',
      hours: 'الإثنين-الجمعة: 9:00 - 18:00',
    },
    form: {
      title: 'اترك طلبًا',
      name: 'اسمك',
      email: 'البريد الإلكتروني',
      phone: 'الهاتف',
      message: 'الرسالة',
      submit: 'إرسال',
      success: 'شكرًا! سنتواصل معك قريبًا.',
    },
    footer: {
      rights: '© 2026 SELIA Platform. جميع الحقوق محفوظة.',
      privacy: 'سياسة الخصوصية',
      terms: 'شروط الاستخدام',
    },
  },
}

export default function Home() {
  const [lang, setLang] = useState<Language>('ru')
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const t = content[lang]
  const isRTL = lang === 'ar'

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 5000)
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <main className={`min-h-screen bg-white ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900">SELIA</h1>
              <span className="text-xs sm:text-sm text-gray-500">.Process</span>
            </div>
            
            <div className="flex items-center gap-2 sm:gap-3">
              {(['ru', 'en', 'ar'] as Language[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium rounded transition-colors ${
                    lang === l
                      ? 'bg-gray-900 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-4 sm:mb-6">
              <span className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium bg-amber-500 text-gray-900">
                {t.hero.badge}
              </span>
            </div>
            
            <p className="text-xs sm:text-sm font-semibold text-amber-400 tracking-wider mb-3 sm:mb-4">
              {t.hero.subtitle}
            </p>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              {t.hero.title}
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed px-4">
              {t.hero.description}
            </p>
            
            <button className="px-6 sm:px-8 py-3 sm:py-4 bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold rounded-lg transition-colors text-sm sm:text-base">
              {t.hero.cta}
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* For Students */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl sm:text-2xl font-bold text-amber-600 mb-4 sm:mb-6">
                {t.features.students.title}
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                {t.features.students.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 text-sm font-bold">
                      {idx + 1}
                    </span>
                    <span className="text-sm sm:text-base text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* For Universities */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl sm:text-2xl font-bold text-amber-600 mb-4 sm:mb-6">
                {t.features.universities.title}
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                {t.features.universities.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 text-sm font-bold">
                      {idx + 1}
                    </span>
                    <span className="text-sm sm:text-base text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Directions Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-xs sm:text-sm font-semibold text-amber-600 tracking-wider mb-2">
              {t.directions.subtitle}
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              {t.directions.title}
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {t.directions.items.map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-xl p-4 sm:p-6 text-center hover:bg-amber-50 transition-colors cursor-pointer"
              >
                <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">{item.icon}</div>
                <p className="text-xs sm:text-sm font-medium text-gray-900">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              {t.contacts.title}
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              {t.contacts.subtitle}
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start gap-4">
                <span className="text-2xl">🏢</span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm sm:text-base">{t.contacts.company}</p>
                  <p className="text-gray-600 text-xs sm:text-sm">{t.contacts.address}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-2xl">📧</span>
                <a href={`mailto:${t.contacts.email}`} className="text-amber-600 hover:text-amber-700 text-sm sm:text-base">
                  {t.contacts.email}
                </a>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-2xl">📱</span>
                <a href={`tel:${t.contacts.phone}`} className="text-amber-600 hover:text-amber-700 text-sm sm:text-base">
                  {t.contacts.phone}
                </a>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-2xl">🕐</span>
                <p className="text-gray-600 text-sm sm:text-base">{t.contacts.hours}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8 sm:mb-12">
              {t.form.title}
            </h2>

            {formSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-6 sm:p-8 text-center">
                <p className="text-green-800 text-base sm:text-lg">{t.form.success}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder={t.form.name}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm sm:text-base"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    placeholder={t.form.email}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm sm:text-base"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder={t.form.phone}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm sm:text-base"
                  />
                </div>

                <div>
                  <textarea
                    placeholder={t.form.message}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm sm:text-base resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 sm:py-4 bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold rounded-lg transition-colors text-sm sm:text-base"
                >
                  {t.form.submit}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs sm:text-sm text-gray-400 text-center">
              {t.footer.rights}
            </p>
            <div className="flex gap-4 sm:gap-6">
              <a href="#" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors">
                {t.footer.privacy}
              </a>
              <a href="#" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors">
                {t.footer.terms}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
