import React, { useState } from 'react';
import './index.css';
import { IoIosArrowForward, IoIosStarOutline } from "react-icons/io";
import { MdOutlineAccessTime } from "react-icons/md";
import { BiDollarCircle } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";
import { useLang } from './LanguageContext.jsx';
import LanguageDropdown from './LanguageDropdown.jsx';

const Home = () => {
  const { lang } = useLang(); 

  const t = {
    homeCrm: { en: "Home", ar: "الصفحة الرئيسية" },
    crm: { en: "CRM", ar: "إدارة علاقات العملاء" },
    hotel: { en: "Hotel", ar: "الفندق" },
    title: { en: "Hotel Business Automation", ar: "أتمتة أعمال الفنادق" },
    subtitle: {
      en: "Congratulations, you’ve just found your new and user-friendly CRM system for hotel management!",
      ar: "تهانينا، لقد وجدت نظام CRM جديد وسهل الاستخدام لإدارة الفنادق!"
    },
    tryBtn: { en: "Try it free", ar: "جرّبه مجانًا" },
    formTitle: { en: "Get in touch with us right now", ar: "تواصل معنا الآن" },
    demoBtn: { en: "Request a Demo", ar: "طلب عرض توضيحي" },
    agree: { en: "I agree to the processing of", ar: "أوافق على معالجة" },
    personal: { en: "personal data", ar: "البيانات الشخصية" },
    commonProblems: {
      en: "Common Problems in Managing Any Hotel",
      ar: "مشاكل شائعة في إدارة أي فندق"
    },
    commonSubtitle: {
      en: "What prevents your hotel from operating efficiently and attracting more guests",
      ar: "ما الذي يمنع فندقك من العمل بكفاءة وجذب المزيد من الضيوف"
    },
    bestChoice: {
      en: "KPI — the best choice for hotel management",
      ar: "KPI — الخيار الأفضل لإدارة الفنادق"
    },
    guestInfo: {
      en: "All guest information — in one window",
      ar: "جميع معلومات الضيوف — في نافذة واحدة"
    },
    guestInfoDesc: {
      en: `The booking card shows all the necessary guest information: 
— previous visit dates,
— accommodation preferences,
— history of inquiries and reviews,
— as well as additional services they have used.`,
      ar: `تُظهر بطاقة الحجز جميع المعلومات الضرورية عن الضيف:
— تواريخ الزيارات السابقة،
— تفضيلات الإقامة،
— سجل الاستفسارات والتقييمات،
— بالإضافة إلى الخدمات الإضافية التي استخدمها.`
    },
    workGuide: {
      en: "Clear work guidelines for all hotel staff",
      ar: "إرشادات واضحة للعمل لجميع موظفي الفندق"
    },
    workGuideDesc: {
      en: `A configured booking pipeline:
— transition between stages with mandatory data entry,
— task and deadline reminders,
— monitoring the work of the front desk, managers, and support staff.`,
      ar: `مسار حجز مُعد مسبقًا:
— الانتقال بين المراحل مع إدخال البيانات الإلزامية،
— تذكير بالمهام والمواعيد النهائية،
— مراقبة عمل الاستقبال، المديرين، وموظفي الدعم.`
    },
    transform: { en: "Transform your hotel operations", ar: "حوّل عمليات فندقك" },
    transformDesc: {
      en: "KPI delivers tangible improvements across all aspects of hotel management.",
      ar: "توفر KPI تحسينات ملموسة في جميع جوانب إدارة الفنادق."
    },
    faq: { en: "Frequently Asked Questions", ar: "الأسئلة الشائعة" },
    offer: { en: "Limited Time Offer", ar: "عرض لفترة محدودة" },
    streamline: { en: "Time to streamline your hotel management?", ar: "هل حان الوقت لتنظيم إدارة فندقك؟" },
    join: {
      en: "Join hundreds of hotels already saving time and delighting guests with kpi.com",
      ar: "انضم إلى مئات الفنادق التي توفر الوقت وتسعد الضيوف مع kpi.com"
    },
    register: {
      en: "Register today and get 50% off for 3 months!",
      ar: "سجّل اليوم واحصل على خصم 50% لمدة 3 أشهر!"
    },
    tryNow: { en: "Try for Free", ar: "جرّب مجانًا" },
    schedule: { en: "Schedule a Demo", ar: "جدولة عرض توضيحي" },
    orCall: { en: "Or call us at:", ar: "أو اتصل بنا على:" },
    cards: {
      time: { en: "Time saving", ar: "توفير الوقت" },
      time_desc: { en: "Faster check-in and optimized operational processes", ar: "تسجيل وصول أسرع وعمليات محسّنة" },
      revenue: { en: "Revenue Growth", ar: "زيادة الإيرادات" },
      revenue_desc: { en: "Average increase in additional income (SPA, restaurants, services, etc.)", ar: "زيادة متوسطة في الإيرادات الإضافية (السبا، المطاعم، الخدمات، إلخ)" },
      staff: { en: "Staff Efficiency", ar: "كفاءة الموظفين" },
      staff_desc: { en: "Reduced administrative burden and manual tasks", ar: "تقليل العبء الإداري والمهام اليدوية" },
      satisfaction: { en: "Guest Satisfaction", ar: "رضا النزلاء" },
      satisfaction_desc: { en: "Improved service ratings and guest loyalty", ar: "تحسين تقييمات الخدمة وولاء النزلاء" }
    }
  };

const problems = [
  {
    icon: 'https://hotel.kpi.uz/imgs/firstIcon.png',
    title: {
      en: 'Poor Customer Base Segmentation',
      ar: 'تقسيم غير جيد لقاعدة العملاء'
    },
    desc: {
      en: 'There is no clear understanding of who most frequently books rooms, their preferences, or their stay history.',
      ar: 'لا يوجد فهم واضح لمن يقوم بحجز الغرف بشكل متكرر، أو تفضيلاتهم أو تاريخ إقامتهم.'
    }
  },
  {
    icon: 'https://hotel.kpi.uz/imgs/secondIcon.png',
    title: {
      en: 'Weak or Nonexistent Booking Department',
      ar: 'قسم الحجز ضعيف أو غير موجود'
    },
    desc: {
      en: 'Bookings are often handled manually by front desk staff, leading to errors, lost requests, and reduced guest trust.',
      ar: 'غالبًا ما تتم معالجة الحجوزات يدويًا من قبل موظفي الاستقبال، مما يؤدي إلى أخطاء، وفقدان الطلبات، وتقليل ثقة النزلاء.'
    }
  },
  {
    icon: 'https://hotel.kpi.uz/imgs/thirdIcon.png',
    title: {
      en: 'Dishonesty Among Hotel Staff',
      ar: 'عدم الأمانة بين موظفي الفندق'
    },
    desc: {
      en: 'Some administrators or service staff may take part of the revenue, causing profit losses and making it impossible to accurately track daily, weekly, or monthly income.',
      ar: 'قد يأخذ بعض الموظفين أو الإداريين جزءًا من الإيرادات، مما يتسبب في خسائر وربما يستحيل تتبع الدخل بدقة.'
    }
  },
  {
    icon: 'https://hotel.kpi.uz/imgs/fourthIcon.png',
    title: {
      en: 'Confusion When Using Multiple Communication Channels',
      ar: 'ارتباك عند استخدام قنوات اتصال متعددة'
    },
    desc: {
      en: 'Guests reach out via websites, messengers, calls, and social media. Without a centralized system, requests are lost or handled late.',
      ar: 'يتواصل الضيوف عبر المواقع الإلكترونية، والرسائل، والمكالمات، ووسائل التواصل الاجتماعي. بدون نظام مركزي، يتم فقدان الطلبات أو التعامل معها بشكل متأخر.'
    }
  },
  {
    icon: 'https://hotel.kpi.uz/imgs/fifthIcon.png',
    title: {
      en: 'Lack of Analytics',
      ar: 'نقص في التحليلات'
    },
    desc: {
      en: 'Analysis of administrator performance, booking operations, and room occupancy is rarely done. There’s no data to evaluate efficiency or understand key business processes.',
      ar: 'نادراً ما يتم تحليل أداء الإداريين وعمليات الحجز ونسبة إشغال الغرف. لا توجد بيانات لتقييم الكفاءة أو لفهم العمليات الأساسية.'
    }
  }
];

const faqData = [
  {
    question: {
      en: 'How long does it take to fully implement the system?',
      ar: 'كم من الوقت يستغرق تنفيذ النظام بالكامل؟'
    },
    answer: {
      en: 'Typically 2–4 weeks depending on your hotel.',
      ar: 'عادةً ما يستغرق من 2 إلى 4 أسابيع حسب الفندق.'
    }
  },
  {
    question: {
      en: 'What is the payment structure? Monthly or yearly?',
      ar: 'ما هي خطة الدفع؟ شهرية أم سنوية؟'
    },
    answer: {
      en: 'We offer both monthly and yearly plans depending on your preference.',
      ar: 'نقدم خططًا شهرية وسنوية حسب تفضيلاتكم.'
    }
  },
  {
    question: {
      en: 'Will the hotel staff need additional training to use the system?',
      ar: 'هل سيحتاج موظفو الفندق إلى تدريب إضافي لاستخدام النظام؟'
    },
    answer: {
      en: 'Minimal training is required, and we provide full support.',
      ar: 'يُطلب تدريب بسيط فقط، ونحن نقدم دعمًا كاملاً.'
    }
  },
  {
    question: {
      en: 'Does the system save guest preferences and history?',
      ar: 'هل يحفظ النظام تفضيلات الضيوف وتاريخهم؟'
    },
    answer: {
      en: 'Yes, guest data is saved securely for personalized service.',
      ar: 'نعم، يتم حفظ بيانات الضيوف بشكل آمن لتقديم خدمة مخصصة.'
    }
  }
];


  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFAQ = (index) => setActiveIndex(prev => (prev === index ? null : index));

  return (
    <>
      <div className='home'>
        <div className="dark">
          <LanguageDropdown />
          <div className='box'>
            <div className='left'>
              <button className='button'>{t.homeCrm[lang]} <IoIosArrowForward className='left_icon'/> {t.crm[lang]} <IoIosArrowForward className='left_icon'/> {t.hotel[lang]}</button>
              <h1>{t.title[lang]}</h1>
              <p>{t.subtitle[lang]}</p>
              <button className='btn'>{t.tryBtn[lang]} <IoIosArrowForward className='left_icon'/></button>
            </div>
            <div className='right'>
              <form>
                <label>{t.formTitle[lang]}</label>
                <input type="text" placeholder='Your name' />
                <input type="text" placeholder='+998 ' />
                <button className='input_btn'>{t.demoBtn[lang]}</button>
                <p>{t.agree[lang]} <strong>{t.personal[lang]}</strong></p>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="video_box">
        <h1 className='text'>{t.commonProblems[lang]}</h1>
        <p className='text_p'>{t.commonSubtitle[lang]}</p>
        <iframe
            className='video'
            src="https://mover.uz/video/embed/ZiGbD4E"
            frameBorder="0"
            allowFullScreen
            title="Hotel CRM Introduction Video"
        />

      </div>

      <div className="problem-list">
        {problems.map((item, i) => (
          <div className="problem-item" key={i}>
            <div className='problem-content'>
              <img src={item.icon} alt='icon' className='problem-icon' />
              <h3>{lang === 'ar' ? item.title.ar : item.title.en}</h3>
              <p>{lang === 'ar' ? item.desc.ar : item.desc.en}</p>
            </div>
            <span className='problem-number'>{i + 1}</span>
          </div>
        ))}
      </div>

      <h1 className='text'>{t.bestChoice[lang]}</h1>
      <div className='img_box'>
        <div className='box_left'>
          <h3>{t.guestInfo[lang]}</h3>
          <p>{t.guestInfoDesc[lang]}</p>
        </div>
        <div className='box_right sd'>
          <img src="https://hotel.kpi.uz/imgs/amoCrmFirst.png" alt="" />
        </div>
      </div>

      <div className='img_box'>
        <div className='box_right df'>
          <img src="https://hotel.kpi.uz/imgs/amoCrmSecond.png" alt="" />
        </div>
        <div className='box_left'>
          <h3>{t.workGuide[lang]}</h3>
          <p>{t.workGuideDesc[lang]}</p>
        </div>
      </div>

      <h1 className='text'>{t.transform[lang]}</h1>
      <p className='text_p'>{t.transformDesc[lang]}</p>

      <div className="cards">
        <div className="card">
          <button><MdOutlineAccessTime /></button>
          <h2>{t.cards.time[lang]}</h2>
          <h3>80%</h3>
          <p>{t.cards.time_desc[lang]}</p>
        </div>
        <div className="card">
          <button><BiDollarCircle /></button>
          <h2>{t.cards.revenue[lang]}</h2>
          <h3>15%</h3>
          <p>{t.cards.revenue_desc[lang]}</p>
        </div>
        <div className="card">
          <button><FiUsers /></button>
          <h2>{t.cards.staff[lang]}</h2>
          <h3>40%</h3>
          <p>{t.cards.staff_desc[lang]}</p>
        </div>
        <div className="card">
          <button><IoIosStarOutline /></button>
          <h2>{t.cards.satisfaction[lang]}</h2>
          <h3>30%</h3>
          <p>{t.cards.satisfaction_desc[lang]}</p>
        </div>
      </div>

      <div className="faq-container">
        <h2 className='text'>{t.faq[lang]}</h2>
        {faqData.map((item, i) => (
          <div className={`faq-item ${activeIndex === i ? 'active' : ''}`} key={i} onClick={() => toggleFAQ(i)}>
            <button className="faq-question">
              {lang === 'ar' ? item.question.ar : item.question.en}
              <span>{activeIndex === i ? '▾' : '▸'}</span>
            </button>
            {activeIndex === i && (
              <div className="faq-answer">
                {lang === 'ar' ? item.answer.ar : item.answer.en}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="footer">
        <button className='footer_btn'>{t.offer[lang]}</button>
        <h1>{t.streamline[lang]}</h1>
        <p>{t.join[lang]}<br className='mb' /><strong>{t.register[lang]}</strong></p>
        <div className='button_box'>
          <button className='left_footer'>{t.tryNow[lang]} <IoIosArrowForward /></button>
          <button className='right_footer'>{t.schedule[lang]} <IoIosArrowForward /></button>
        </div>
        <h6><BsTelephone className='phone' /> {t.orCall[lang]} <strong>+998 000 00 00</strong></h6>
      </div>
    </>
  );
};

export default Home;