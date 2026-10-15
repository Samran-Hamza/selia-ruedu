'use client'

import { useState, useEffect } from 'react'

type Lang = 'ru' | 'en' | 'ar'

const content = {
  ru: {
    nav: ['О нас', 'Платформа', 'Направления', 'Процесс', 'Эксперт', 'Миссия', 'Контакты'],
    kicker: 'SELIA Study · Проект ООО МАРКО',
    title: 'Ваша новая глава в',
    titleAccent: 'российском образовании',
    subtitle: 'Профессиональная поддержка иностранных абитуриентов из арабских стран и Африки: от выбора вуза до адаптации в России. Экспорт российского образования с 2021 года.',
    cta: 'Начать путь',
    ctaSecondary: 'Узнать о платформе',
    stats: [
      { num: '3000+', label: 'Абитуриентов в базе' },
      { num: '30+', label: 'Стран-источников' },
      { num: '10+', label: 'Лет маркетингового опыта' },
    ],
    aboutLabel: 'О КОМПАНИИ',
    aboutTitle: 'Экспорт российского образования',
    aboutText1: 'SELIA Study — это образовательное направление компании ООО МАРКО, специализирующейся на международном сотрудничестве в сфере высшего образования.',
    aboutText2: 'Мы помогаем талантливым студентам из арабских стран и Африки поступить в ведущие российские университеты, пройти все формальности и успешно адаптироваться в новой стране.',
    features: [
      { title: 'Прямые связи с вузами', desc: 'Официальные партнёрства с ведущими университетами России' },
      { title: 'Полное сопровождение', desc: 'От первого запроса до выпуска из университета' },
      { title: 'Миграционная поддержка', desc: 'Визы, регистрация, все документы' },
      { title: 'Адаптация', desc: 'Культурная и академическая поддержка в России' },
    ],
    platformBadge: 'ДЕКАБРЬ 2026',
    platformLabel: 'НОВАЯ ПЛАТФОРМА',
    platformTitle: 'Платформа SELIA — всё для поступления в одном месте',
    platformText: 'В декабре 2026 года мы запускаем единую цифровую платформу для студентов, вузов и образовательных агентов.',
    platformFeatures: [
      { title: 'Для студентов', desc: 'Подбор университета и программы, подача документов онлайн, отслеживание статуса заявки, ответы на вопросы в реальном времени.' },
      { title: 'Для вузов', desc: 'Управление набором иностранных студентов, аналитика по рынкам, автоматизация документооборота, коммуникация с агентами.' },
      { title: 'Для агентов', desc: 'Единая платформа для работы с абитуриентами, комиссия, обучение, поддержка от команды SELIA.' },
    ],
    waitlist: 'Записаться в лист ожидания',
    directionsLabel: 'НАПРАВЛЕНИЯ',
    directionsTitle: 'Куда и где учиться',
    directionsText: 'Три уникальных студенческих города с разными возможностями и характером.',
    directions: [
      { name: 'Москва', tag: 'Столица', desc: 'Мировой мегаполис с невероятными возможностями для карьеры. Лучшие вузы страны и представительства международных компаний.' },
      { name: 'Санкт-Петербург', tag: 'Культура', desc: 'Культурная столица России. Атмосфера искусства, архитектуры и интеллектуальной жизни. Идеально для гуманитарных наук.' },
      { name: 'Казань', tag: 'Традиции', desc: 'Город, где встречаются Восток и Запад. Доступная жизнь, сильное студенческое комьюнити, толерантная мультикультурная среда.' },
    ],
    processLabel: 'КАК ЭТО РАБОТАЕТ',
    processTitle: 'Путь от заявки до диплома',
    processSteps: [
      { num: '01', title: 'Консультация', desc: 'Бесплатная оценка шансов и подбор подходящих программ' },
      { num: '02', title: 'Подача документов', desc: 'Помощь с подготовкой и переводом всех документов' },
      { num: '03', title: 'Виза и переезд', desc: 'Оформление студенческой визы и организация приезда' },
      { num: '04', title: 'Адаптация', desc: 'Встреча, регистрация, помощь с общежитием' },
    ],
    expertLabel: 'ВЕДУЩИЙ ЭКСПЕРТ',
    expertTitle: 'Хамза Самран',
    expertRole: 'Руководитель проектов международного набора · ООО МАРКО',
    expertBio: 'Более 4 лет практического опыта в международном образовании России. Работал в Уральском федеральном университете и НИУ «Высшая школа экономики» — двух ведущих вузах страны. Специализируюсь на привлечении студентов из арабских стран и Африки, выстраивании отношений с образовательными агентами и развитии сети партнёров.',
    expertStats: [
      { num: '4+', label: 'Года в международном образовании' },
      { num: '3000+', label: 'Абитуриентов в базе' },
      { num: '30+', label: 'Стран-источников' },
    ],
    expertSkills: [
      'Международный набор (арабские страны, Африка)',
      'Развитие сети образовательных агентов',
      'Миграционный учёт и правовая поддержка',
      'Многоязычный маркетинг (AR, EN, FR, RU)',
      'Олимпиады для иностранцев',
      'Рекрутинг и маркетинг в международном блоке',
    ],
    timelineLabel: 'КАРЬЕРНЫЙ ПУТЬ',
    timelineTitle: 'Профессиональный опыт',
    timeline: [
      { period: 'Июнь 2024 — 05.10.2026', role: 'Руководитель проектов международного блока, рекрутинг и маркетинг', company: 'НИУ «Высшая школа экономики» (ВШЭ), Москва' },
      { period: 'Октябрь 2021 — Июль 2023', role: 'Ведущий специалист международного департамента', company: 'Уральский федеральный университет (УрФУ), Екатеринбург' },
      { period: 'Октябрь 2026 — настоящее время', role: 'Инженер · Руководитель проектной команды', company: 'ООО МАРКО, Москва' },
    ],
    missionLabel: 'НАША МИССИЯ',
    missionTitle: 'Работаем со всеми сегментами',
    missionText: 'SELIA Study создаёт экосистему для международного образования. У нас большая база для работы: абитуриенты, образовательные агенты и университеты-партнёры.',
    missionSegments: [
      { title: 'Абитуриенты', desc: 'Более 3000 студентов из 30+ стран в нашей базе. Индивидуальный подход к каждому, поддержка на всех этапах поступления и адаптации.' },
      { title: 'Образовательные агенты', desc: 'Развитая сеть агентов в арабских странах и Африке. Прозрачные условия сотрудничества, обучение и постоянная поддержка от команды SELIA.' },
      { title: 'Университеты', desc: 'Партнёрства с ведущими вузами России. Помогаем вузам выходить на новые рынки и привлекать мотивированных иностранных студентов.' },
    ],
    contactLabel: 'СВЯЖИТЕСЬ С НАМИ',
    contactTitle: 'Готовы начать?',
    contactText: 'Расскажите о ваших планах — мы подберём оптимальный путь поступления.',
    formName: 'Ваше имя',
    formEmail: 'Email',
    formMessage: 'Ваше сообщение',
    formSend: 'Отправить',
    email: 'marstudy@marko-co.ru',
    email2: 'hsamran@marko-co.ru',
    phone: '+7 953 997 84 75',
    address: 'ООО МАРКО, 117756, Москва, Ступинский проезд, дом 1',
    footer: '© 2026 ООО МАРКО. Все права защищены.',
  },
  en: {
    nav: ['About', 'Platform', 'Directions', 'Process', 'Expert', 'Mission', 'Contact'],
    kicker: 'SELIA Study · A project of LLC MARKO',
    title: 'Your next chapter in',
    titleAccent: 'Russian education',
    subtitle: 'Professional support for international applicants from Arab countries and Africa: from university selection to adaptation in Russia. Exporting Russian education since 2021.',
    cta: 'Start your journey',
    ctaSecondary: 'Learn about the platform',
    stats: [
      { num: '3000+', label: 'Applicants in database' },
      { num: '30+', label: 'Source countries' },
      { num: '10+', label: 'Years of marketing experience' },
    ],
    aboutLabel: 'ABOUT US',
    aboutTitle: 'Exporting Russian education',
    aboutText1: 'SELIA Study is the educational division of LLC MARKO, specializing in international cooperation in higher education.',
    aboutText2: 'We help talented students from Arab countries and Africa enroll in leading Russian universities, navigate all formalities, and successfully adapt to a new country.',
    features: [
      { title: 'Direct university connections', desc: 'Official partnerships with leading Russian universities' },
      { title: 'Full support', desc: 'From first inquiry to university graduation' },
      { title: 'Migration support', desc: 'Visas, registration, all documents' },
      { title: 'Adaptation', desc: 'Cultural and academic support in Russia' },
    ],
    platformBadge: 'DECEMBER 2026',
    platformLabel: 'NEW PLATFORM',
    platformTitle: 'SELIA Platform — everything for admission in one place',
    platformText: 'In December 2026, we are launching a unified digital platform for students, universities, and educational agents.',
    platformFeatures: [
      { title: 'For students', desc: 'University and program matching, online application submission, application status tracking, real-time Q&A.' },
      { title: 'For universities', desc: 'International student recruitment management, market analytics, document workflow automation, agent communication.' },
      { title: 'For agents', desc: 'Unified platform for working with applicants, commissions, training, support from the SELIA team.' },
    ],
    waitlist: 'Join the waitlist',
    directionsLabel: 'DIRECTIONS',
    directionsTitle: 'Where to study',
    directionsText: 'Three unique student cities with different opportunities and character.',
    directions: [
      { name: 'Moscow', tag: 'Capital', desc: 'A global megacity with incredible career opportunities. Best universities in the country and international company offices.' },
      { name: 'Saint Petersburg', tag: 'Culture', desc: 'Russia\'s cultural capital. Atmosphere of art, architecture, and intellectual life. Ideal for humanities.' },
      { name: 'Kazan', tag: 'Tradition', desc: 'Where East meets West. Affordable living, strong student community, tolerant multicultural environment.' },
    ],
    processLabel: 'HOW IT WORKS',
    processTitle: 'From application to diploma',
    processSteps: [
      { num: '01', title: 'Consultation', desc: 'Free assessment of your chances and matching with suitable programs' },
      { num: '02', title: 'Application', desc: 'Help with preparation and translation of all documents' },
      { num: '03', title: 'Visa & relocation', desc: 'Student visa processing and organizing your arrival' },
      { num: '04', title: 'Adaptation', desc: 'Meeting, registration, dormitory help' },
    ],
    expertLabel: 'LEAD EXPERT',
    expertTitle: 'Hamza Samran',
    expertRole: 'Project Team Leader, International Recruiting · LLC MARKO',
    expertBio: 'Over 4 years of hands-on experience in international education in Russia. Worked at Ural Federal University and HSE University — two of the country\'s leading institutions. Specializes in recruiting students from Arab countries and Africa, building relationships with educational agents, and developing partner networks.',
    expertStats: [
      { num: '4+', label: 'Years in international education' },
      { num: '3000+', label: 'Applicants in database' },
      { num: '30+', label: 'Source countries' },
    ],
    expertSkills: [
      'International recruiting (Arab & African markets)',
      'Educational agent network development',
      'Migration compliance and legal support',
      'Multilingual marketing (AR, EN, FR, RU)',
      'Olympiads for international students',
      'Recruiting and marketing in international division',
    ],
    timelineLabel: 'CAREER PATH',
    timelineTitle: 'Professional experience',
    timeline: [
      { period: 'June 2024 — 05.10.2026', role: 'Project Team Leader, International Division, Recruiting & Marketing', company: 'HSE University, Moscow' },
      { period: 'October 2021 — July 2023', role: 'Lead Specialist, International Department', company: 'Ural Federal University (UrFU), Yekaterinburg' },
      { period: 'October 2026 — Present', role: 'Engineer · Project Team Leader', company: 'LLC MARKO, Moscow' },
    ],
    missionLabel: 'OUR MISSION',
    missionTitle: 'Working with all segments',
    missionText: 'SELIA Study creates an ecosystem for international education. We have a large database for work: applicants, educational agents, and partner universities.',
    missionSegments: [
      { title: 'Applicants', desc: 'Over 3000 students from 30+ countries in our database. Individual approach to each, support at all stages of admission and adaptation.' },
      { title: 'Educational agents', desc: 'Developed network of agents in Arab countries and Africa. Transparent cooperation terms, training and constant support from the SELIA team.' },
      { title: 'Universities', desc: 'Partnerships with leading Russian universities. We help universities enter new markets and attract motivated international students.' },
    ],
    contactLabel: 'GET IN TOUCH',
    contactTitle: 'Ready to start?',
    contactText: 'Tell us about your plans — we will find the optimal path to admission.',
    formName: 'Your name',
    formEmail: 'Email',
    formMessage: 'Your message',
    formSend: 'Send',
    email: 'marstudy@marko-co.ru',
    email2: 'hsamran@marko-co.ru',
    phone: '+7 953 997 84 75',
    address: 'LLC MARKO, 117756, Moscow, Stupinsky Proyezd, 1',
    footer: '© 2026 LLC MARKO. All rights reserved.',
  },
  ar: {
    nav: ['من نحن', 'المنصة', 'الوجهات', 'المسار', 'الخبير', 'المهمة', 'تواصل'],
    kicker: 'SELIA Study · مشروع شركة MARKO',
    title: 'فصلك القادم في',
    titleAccent: 'التعليم الروسي',
    subtitle: 'دعم احترافي للطلاب الدوليين من الدول العربية وأفريقيا: من اختيار الجامعة حتى التكيف في روسيا. تصدير التعليم الروسي منذ 2021.',
    cta: 'ابدأ رحلتك',
    ctaSecondary: 'تعرف على المنصة',
    stats: [
      { num: '+3000', label: 'متقدم في قاعدة البيانات' },
      { num: '+30', label: 'دولة مصدر' },
      { num: '+10', label: 'سنوات من الخبرة التسويقية' },
    ],
    aboutLabel: 'من نحن',
    aboutTitle: 'تصدير التعليم الروسي',
    aboutText1: 'SELIA Study هو القسم التعليمي لشركة LLC MARKO، المتخصصة في التعاون الدولي في مجال التعليم العالي.',
    aboutText2: 'نساعد الطلاب الموهوبين من الدول العربية وأفريقيا على الالتحاق بالجامعات الروسية الرائدة، واجتياز جميع الإجراءات الرسمية، والتكيف بنجاح في بلد جديد.',
    features: [
      { title: 'علاقات مباشرة مع الجامعات', desc: 'شراكات رسمية مع الجامعات الروسية الرائدة' },
      { title: 'دعم شامل', desc: 'من الاستفسار الأول حتى التخرج' },
      { title: 'دعم الهجرة', desc: 'التأشيرات، التسجيل، جميع المستندات' },
      { title: 'التكيف', desc: 'دعم ثقافي وأكاديمي في روسيا' },
    ],
    platformBadge: 'ديسمبر 2026',
    platformLabel: 'منصة جديدة',
    platformTitle: 'منصة SELIA — كل ما تحتاجه للقبول في مكان واحد',
    platformText: 'في ديسمبر 2026، نطلق منصة رقمية موحدة للطلاب والجامعات والوكلاء التعليميين.',
    platformFeatures: [
      { title: 'للطلاب', desc: 'مطابقة الجامعة والبرنامج، تقديم الطلبات عبر الإنترنت، تتبع حالة الطلب، الإجابة على الأسئلة في الوقت الفعلي.' },
      { title: 'للجامعات', desc: 'إدارة جذب الطلاب الدوليين، تحليلات السوق، أتمتة سير المستندات، التواصل مع الوكلاء.' },
      { title: 'للوكلاء', desc: 'منصة موحدة للعمل مع المتقدمين، العمولات، التدريب، الدعم من فريق SELIA.' },
    ],
    waitlist: 'انضم إلى قائمة الانتظار',
    directionsLabel: 'الوجهات',
    directionsTitle: 'أين تدرس',
    directionsText: 'ثلاث مدن طلابية فريدة بفرص وشخصيات مختلفة.',
    directions: [
      { name: 'موسكو', tag: 'العاصمة', desc: 'مدينة عالمية ضخمة بفرص لا تصدق للتواصل المهني. أفضل الجامعات في البلاد ومكاتب الشركات الدولية.' },
      { name: 'سانت بطرسبرغ', tag: 'الثقافة', desc: 'العاصمة الثقافية لروسيا. أجواء الفن والعمارة والحياة الفكرية. مثالية للعلوم الإنسانية.' },
      { name: 'قازان', tag: 'التقاليد', desc: 'حيث يلتقي الشرق بالغرب. معيشة ميسورة، مجتمع طلابي قوي، بيئة متعددة الثقافات متسامحة.' },
    ],
    processLabel: 'كيف يعمل',
    processTitle: 'من الطلب إلى الدبلوم',
    processSteps: [
      { num: '01', title: 'استشارة', desc: 'تقييم مجاني لفرصك ومطابقة مع البرامج المناسبة' },
      { num: '02', title: 'التقديم', desc: 'المساعدة في إعداد وترجمة جميع المستندات' },
      { num: '03', title: 'التأشيرة والانتقال', desc: 'معالجة تأشيرة الطالب وتنظيم وصولك' },
      { num: '04', title: 'التكيف', desc: 'الاستقبال، التسجيل، المساعدة في السكن' },
    ],
    expertLabel: 'الخبير الرئيسي',
    expertTitle: 'حمزة سمران',
    expertRole: 'قائد فريق المشاريع، جذب الطلاب الدوليين · LLC MARKO',
    expertBio: 'أكثر من 4 سنوات من الخبرة العملية في التعليم الدولي في روسيا. عمل في جامعة الأورال الفيدرالية وجامعة HSE — اثنتان من المؤسسات الرائدة في البلاد. متخصص في جذب الطلاب من الدول العربية وأفريقيا، وبناء العلاقات مع الوكلاء التعليميين، وتطوير شبكات الشركاء.',
    expertStats: [
      { num: '+4', label: 'سنوات في التعليم الدولي' },
      { num: '+3000', label: 'متقدم في قاعدة البيانات' },
      { num: '+30', label: 'دولة مصدر' },
    ],
    expertSkills: [
      'جذب الطلاب الدوليين (الأسواق العربية والأفريقية)',
      'تطوير شبكة الوكلاء التعليميين',
      'الامتثال للهجرة والدعم القانوني',
      'التسويق متعدد اللغات (العربية، الإنجليزية، الفرنسية، الروسية)',
      'الأولمبيادات للطلاب الدوليين',
      'التوظيف والتسويق في القسم الدولي',
    ],
    timelineLabel: 'المسار المهني',
    timelineTitle: 'الخبرة المهنية',
    timeline: [
      { period: 'يونيو 2024 — 05.10.2026', role: 'قائد فريق المشاريع، القسم الدولي، التوظيف والتسويق', company: 'جامعة HSE، موسكو' },
      { period: 'أكتوبر 2021 — يوليو 2023', role: 'أخصائي رئيسي، القسم الدولي', company: 'جامعة الأورال الفيدرالية (UrFU)، يكاترينبورغ' },
      { period: 'أكتوبر 2026 — الحاضر', role: 'مهندس · قائد فريق المشاريع', company: 'LLC MARKO، موسكو' },
    ],
    missionLabel: 'مهمتنا',
    missionTitle: 'نعمل مع جميع القطاعات',
    missionText: 'SELIA Study تخلق نظامًا بيئيًا للتعليم الدولي. لدينا قاعدة كبيرة للعمل: المتقدمون، الوكلاء التعليميون والجامعات الشريكة.',
    missionSegments: [
      { title: 'المتقدمون', desc: 'أكثر من 3000 طالب من أكثر من 30 دولة في قاعدة بياناتنا. نهج فردي لكل طالب، دعم في جميع مراحل القبول والتكيف.' },
      { title: 'الوكلاء التعليميون', desc: 'شبكة متطورة من الوكلاء في الدول العربية وأفريقيا. شروط تعاون شفافة، تدريب ودعم مستمر من فريق SELIA.' },
      { title: 'الجامعات', desc: 'شراكات مع الجامعات الروسية الرائدة. نساعد الجامعات على دخول أسواق جديدة وجذب طلاب دوليين متحمسين.' },
    ],
    contactLabel: 'تواصل معنا',
    contactTitle: 'مستعد للبدء؟',
    contactText: 'أخبرنا عن خططك — سنجد المسار الأمثل للقبول.',
    formName: 'اسمك',
    formEmail: 'البريد الإلكتروني',
    formMessage: 'رسالتك',
    formSend: 'إرسال',
    email: 'marstudy@marko-co.ru',
    email2: 'hsamran@marko-co.ru',
    phone: '+7 953 997 84 75',
    address: 'LLC MARKO، 117756، موسكو، Stupinsky Proyezd، 1',
    footer: '© 2026 LLC MARKO. جميع الحقوق محفوظة.',
  },
}

export default function Home() {
  const [lang, setLang] = useState<Lang>('ru')
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [formSent, setFormSent] = useState(false)

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
  }, [lang])

  const t = content[lang]

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`SELIA Study: ${formData.name}`)
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)
    window.location.href = `mailto:${t.email}?subject=${subject}&body=${body}`
    setFormSent(true)
    setTimeout(() => setFormSent(false), 4000)
  }

  const inputStyle: React.CSSProperties = {
    padding: 14,
    border: '1px solid var(--gray-light, #e5e7eb)',
    borderRadius: 6,
    fontSize: 15,
    background: 'white',
    width: '100%',
    fontFamily: 'inherit',
    boxSizing: 'border-box',
  }

  return (
    <main style={{ background: '#f8f5f0', color: '#0a1628', minHeight: '100vh', fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* HEADER */}
      <header style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(248,245,240,0.95)', backdropFilter: 'blur(12px)', borderBottom: '1px solid #e5e7eb' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', height: 80, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a href="#" style={{ fontFamily: 'Georgia, serif', fontSize: 28, fontWeight: 700, color: '#0a1628', textDecoration: 'none', letterSpacing: '0.05em' }}>
            SELIA<span style={{ color: '#c9a96e' }}>.</span>
          </a>
          <nav style={{ display: 'flex', gap: 28, alignItems: 'center', flexWrap: 'wrap' }}>
            {t.nav.map((item, i) => (
              <a key={i} href={`#section-${i}`} style={{ color: '#0a1628', textDecoration: 'none', fontSize: 14, fontWeight: 500 }}>{item}</a>
            ))}
          </nav>
          <div style={{ display: 'flex', gap: 8 }}>
            {(['ru', 'en', 'ar'] as Lang[]).map((l) => (
              <button key={l} onClick={() => setLang(l)} style={{ padding: '6px 12px', border: '1px solid #e5e7eb', background: lang === l ? '#0a1628' : 'white', color: lang === l ? 'white' : '#0a1628', cursor: 'pointer', fontSize: 12, fontWeight: 700, borderRadius: 4 }}>
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* HERO */}
      <section style={{ padding: '100px 24px 80px', background: 'linear-gradient(135deg, #0a1628 0%, #1a2d4a 100%)', color: 'white', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 60, alignItems: 'center', position: 'relative', zIndex: 1 }}>
          <div>
            <p style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c9a96e', fontWeight: 700, marginBottom: 16 }}>{t.kicker}</p>
            <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 700, lineHeight: 1.15, marginBottom: 24, color: 'white' }}>
              {t.title} <span style={{ color: '#c9a96e', fontStyle: 'italic' }}>{t.titleAccent}</span>
            </h1>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.8)', marginBottom: 40, maxWidth: 540, lineHeight: 1.7 }}>{t.subtitle}</p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <a href="#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '16px 32px', background: '#c9a96e', color: '#0a1628', textDecoration: 'none', borderRadius: 6, fontSize: 14, fontWeight: 700 }}>{t.cta}</a>
              <a href="#platform" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '16px 32px', background: 'transparent', color: 'white', textDecoration: 'none', borderRadius: 6, fontSize: 14, fontWeight: 700, border: '2px solid rgba(255,255,255,0.3)' }}>{t.ctaSecondary}</a>
            </div>
            <div style={{ display: 'flex', gap: 48, marginTop: 48, paddingTop: 32, borderTop: '1px solid rgba(255,255,255,0.2)', flexWrap: 'wrap' }}>
              {t.stats.map((s, i) => (
                <div key={i}>
                  <h4 style={{ fontFamily: 'Georgia, serif', fontSize: 36, color: '#c9a96e', fontWeight: 700, margin: 0 }}>{s.num}</h4>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', margin: '4px 0 0' }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div style={{ position: 'relative', aspectRatio: '4/3', borderRadius: 12, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
            <img 
              src="/hero-campus.png" 
              alt="Международные студенты на кампусе университета"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="section-0" style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c9a96e', fontWeight: 700, marginBottom: 16 }}>{t.aboutLabel}</p>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700, lineHeight: 1.15, color: '#0a1628' }}>{t.aboutTitle}</h2>
          </div>
          <div>
            <p style={{ fontSize: 17, lineHeight: 1.8, color: '#6b7280', marginBottom: 20 }}>{t.aboutText1}</p>
            <p style={{ fontSize: 17, lineHeight: 1.8, color: '#6b7280', marginBottom: 32 }}>{t.aboutText2}</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
              {t.features.map((f, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <div style={{ width: 40, height: 40, background: '#c9a96e', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#0a1628', fontWeight: 700, fontSize: 14 }}>{String(i + 1).padStart(2, '0')}</div>
                  <div>
                    <h4 style={{ fontSize: 16, fontWeight: 700, margin: '0 0 4px 0' }}>{f.title}</h4>
                    <p style={{ fontSize: 14, color: '#6b7280', margin: 0 }}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PLATFORM */}
      <section id="platform" style={{ padding: '80px 24px', background: '#0a1628', color: 'white' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ background: 'linear-gradient(135deg, #0a1628 0%, #1a2d4a 100%)', borderRadius: 20, padding: 48, position: 'relative', overflow: 'hidden', border: '1px solid rgba(201,169,110,0.2)' }}>
            <span style={{ display: 'inline-block', background: '#c9a96e', color: '#0a1628', padding: '6px 16px', borderRadius: 20, fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', marginBottom: 24 }}>{t.platformBadge}</span>
            <p style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c9a96e', fontWeight: 700, marginBottom: 16 }}>{t.platformLabel}</p>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginBottom: 20, color: 'white' }}>{t.platformTitle}</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 17, maxWidth: 600 }}>{t.platformText}</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginTop: 48 }}>
              {t.platformFeatures.map((f, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: 28 }}>
                  <h4 style={{ fontSize: 18, marginBottom: 8, color: '#c9a96e' }}>{f.title}</h4>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DIRECTIONS */}
      <section id="section-2" style={{ padding: '80px 24px', background: 'white' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 48px' }}>
            <p style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c9a96e', fontWeight: 700, marginBottom: 16 }}>{t.directionsLabel}</p>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700, color: '#0a1628' }}>{t.directionsTitle}</h2>
            <p style={{ color: '#6b7280', fontSize: 17, marginTop: 16 }}>{t.directionsText}</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {t.directions.map((d, i) => (
              <div key={i} style={{ background: '#f8f5f0', borderRadius: 16, padding: 32, border: '1px solid #e5e7eb' }}>
                <p style={{ color: '#c9a96e', fontSize: 12, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 12 }}>{d.tag}</p>
                <h3 style={{ fontFamily: 'Georgia, serif', fontSize: 28, marginBottom: 12, color: '#0a1628' }}>{d.name}</h3>
                <p style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.6 }}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="section-3" style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 48px' }}>
            <p style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c9a96e', fontWeight: 700, marginBottom: 16 }}>{t.processLabel}</p>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700, color: '#0a1628' }}>{t.processTitle}</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
            {t.processSteps.map((s, i) => (
              <div key={i} style={{ textAlign: 'center', padding: '24px 16px', background: 'white', borderRadius: 12, border: '1px solid #e5e7eb' }}>
                <div style={{ width: 56, height: 56, background: '#c9a96e', color: '#0a1628', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Georgia, serif', fontSize: 20, fontWeight: 700, margin: '0 auto 16px' }}>{s.num}</div>
                <h4 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>{s.title}</h4>
                <p style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERT */}
      <section id="section-4" style={{ padding: '80px 24px', background: '#0a1628', color: 'white' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '320px 1fr', gap: 48, alignItems: 'start' }}>
          <div style={{ position: 'relative', width: '100%', height: 480, borderRadius: 16, overflow: 'hidden', border: '2px solid rgba(201,169,110,0.3)' }}>
            <img 
              src="/hamza-expert.jpg" 
              alt="Хамза Самран - эксперт SELIA Study"
              style={{ width: '110%', height: '100%', objectFit: 'cover', borderRadius: 20 }}
            />
          </div>
          <div>
            <p style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c9a96e', fontWeight: 700, marginBottom: 16 }}>{t.expertLabel}</p>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700, color: 'white', marginBottom: 8 }}>{t.expertTitle}</h2>
            <p style={{ color: '#c9a96e', fontSize: 14, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 24 }}>{t.expertRole}</p>
            <p style={{ fontSize: 17, lineHeight: 1.8, color: 'rgba(255,255,255,0.85)', marginBottom: 32 }}>{t.expertBio}</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, padding: '24px 0', borderTop: '1px solid rgba(255,255,255,0.15)', borderBottom: '1px solid rgba(255,255,255,0.15)', marginBottom: 24 }}>
              {t.expertStats.map((s, i) => (
                <div key={i}>
                  <h4 style={{ fontFamily: 'Georgia, serif', fontSize: 28, color: '#c9a96e', fontWeight: 700, margin: 0 }}>{s.num}</h4>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', marginTop: 4 }}>{s.label}</p>
                </div>
              ))}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {t.expertSkills.map((s, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'rgba(255,255,255,0.9)' }}>
                  <span style={{ color: '#c9a96e', fontWeight: 700, fontSize: 16 }}>✓</span>
                  <span>{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section style={{ padding: '80px 24px', background: 'white' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <p style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c9a96e', fontWeight: 700, marginBottom: 16 }}>{t.timelineLabel}</p>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700, color: '#0a1628' }}>{t.timelineTitle}</h2>
          </div>
          {t.timeline.map((item, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: 32, padding: '24px 0', borderBottom: '1px solid #e5e7eb' }}>
              <div style={{ fontSize: 14, color: '#c9a96e', fontWeight: 700, letterSpacing: '0.05em' }}>{item.period}</div>
              <div>
                <h4 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>{item.role}</h4>
                <p style={{ color: '#0a1628', fontSize: 15, fontWeight: 500 }}>{item.company}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MISSION */}
      <section id="section-5" style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 48px' }}>
            <p style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c9a96e', fontWeight: 700, marginBottom: 16 }}>{t.missionLabel}</p>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700, color: '#0a1628' }}>{t.missionTitle}</h2>
            <p style={{ color: '#6b7280', fontSize: 17, marginTop: 16 }}>{t.missionText}</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {t.missionSegments.map((s, i) => (
              <div key={i} style={{ background: 'white', padding: 32, borderRadius: 12, border: '1px solid #e5e7eb' }}>
                <h4 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12, color: '#0a1628' }}>{s.title}</h4>
                <p style={{ fontSize: 15, color: '#6b7280', lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: '80px 24px', background: 'white' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64 }}>
          <div>
            <p style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c9a96e', fontWeight: 700, marginBottom: 16 }}>{t.contactLabel}</p>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700, color: '#0a1628', marginBottom: 24 }}>{t.contactTitle}</h2>
            <p style={{ color: '#6b7280', fontSize: 17, marginBottom: 40 }}>{t.contactText}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{ width: 44, height: 44, background: '#c9a96e', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#0a1628', fontSize: 18 }}>✉</div>
                <div>
                  <a href={`mailto:${t.email}`} style={{ color: '#0a1628', textDecoration: 'none', fontSize: 16, fontWeight: 500 }}>{t.email}</a>
                  <br />
                  <a href={`mailto:${t.email2}`} style={{ color: '#0a1628', textDecoration: 'none', fontSize: 16, fontWeight: 500 }}>{t.email2}</a>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{ width: 44, height: 44, background: '#c9a96e', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#0a1628', fontSize: 18 }}>☎</div>
                <a href={`tel:${t.phone.replace(/\s/g, '')}`} style={{ color: '#0a1628', textDecoration: 'none', fontSize: 16, fontWeight: 500 }}>{t.phone}</a>
              </div>
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{ width: 44, height: 44, background: '#c9a96e', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#0a1628', fontSize: 18 }}></div>
                <p style={{ fontSize: 15, color: '#6b7280', margin: 0 }}>{t.address}</p>
              </div>
            </div>
          </div>
          <div style={{ background: '#f8f5f0', padding: 40, borderRadius: 16, border: '1px solid #e5e7eb' }}>
            <h3 style={{ fontFamily: 'Georgia, serif', fontSize: 28, marginBottom: 24 }}>{lang === 'ru' ? 'Напишите нам' : lang === 'en' ? 'Write to us' : 'اكتب لنا'}</h3>
            <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <input
                type="text"
                placeholder={t.formName}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                style={inputStyle}
              />
              <input
                type="email"
                placeholder={t.formEmail}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                style={inputStyle}
              />
              <textarea
                placeholder={t.formMessage}
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                style={{ ...inputStyle, resize: 'vertical' }}
              />
              <button type="submit" style={{ padding: '16px 32px', background: '#c9a96e', color: '#0a1628', border: 'none', borderRadius: 6, fontSize: 14, fontWeight: 700, cursor: 'pointer' }}>
                {formSent ? '✓ Отправлено' : t.formSend}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#0a1628', color: 'rgba(255,255,255,0.7)', padding: '48px 24px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 48, marginBottom: 32 }}>
          <div>
            <a href="#" style={{ fontFamily: 'Georgia, serif', color: 'white', fontSize: 28, fontWeight: 700, textDecoration: 'none', display: 'block', marginBottom: 16 }}>SELIA<span style={{ color: '#c9a96e' }}>.</span></a>
            <p style={{ fontSize: 14, lineHeight: 1.7 }}>{t.kicker}</p>
          </div>
          <div>
            <h4 style={{ color: 'white', fontSize: 14, marginBottom: 16, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{lang === 'ru' ? 'Навигация' : lang === 'en' ? 'Navigation' : 'التنقل'}</h4>
            {t.nav.slice(0, 4).map((item, i) => (
              <a key={i} href={`#section-${i}`} style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: 14, display: 'block', marginBottom: 8 }}>{item}</a>
            ))}
          </div>
          <div>
            <h4 style={{ color: 'white', fontSize: 14, marginBottom: 16, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{lang === 'ru' ? 'Контакты' : lang === 'en' ? 'Contact' : 'تواصل'}</h4>
            <a href={`mailto:${t.email}`} style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: 14, display: 'block', marginBottom: 8 }}>{t.email}</a>
            <a href={`tel:${t.phone.replace(/\s/g, '')}`} style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: 14, display: 'block', marginBottom: 8 }}>{t.phone}</a>
            <p style={{ fontSize: 14, marginTop: 8 }}>{t.address}</p>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 24, textAlign: 'center', fontSize: 13 }}>
          {t.footer}
        </div>
      </footer>

      {/* WhatsApp */}
      <a href={`https://wa.me/${t.phone.replace(/\s/g, '').replace('+', '')}`} target="_blank" rel="noopener noreferrer" style={{ position: 'fixed', bottom: 30, right: 30, width: 60, height: 60, background: '#25D366', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', textDecoration: 'none', boxShadow: '0 4px 16px rgba(37, 211, 102, 0.4)', zIndex: 100 }}>
        <svg viewBox="0 0 32 32" width="32" height="32" fill="currentColor"><path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.353.687 4.545 1.872 6.396L4 29l7.79-1.837A11.93 11.93 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Z"/></svg>
      </a>
    </main>
  )
}