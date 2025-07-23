import React, { useState } from 'react';
import './index.css';
import { IoIosArrowForward, IoIosStarOutline } from "react-icons/io";
import { MdOutlineAccessTime } from "react-icons/md";
import { BiDollarCircle } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";
import { useLang } from './LanguageContext.jsx';
import LanguageDropdown from './LanguageDropdown.jsx';
import img1 from './img1.png'

const Home = () => {
  const { lang } = useLang(); 
  const t = {
        homeCrm: { en: "Home", ar: "الصفحة الرئيسية" },
        crm: { en: "CRM", ar: "إدارة علاقات العملاء" },
        hotel: { en: "Hotel", ar: "الفندق" },
        title: { en: "ZATCA Integration for e-Invoicing", ar: "تكامل ZATCA للفوترة الإلكترونية" },
        subtitle: {
        en: "Congratulations! You’ve found your all-in-one e-invoicing solution for ZATCA compliance.",
        ar: "تتهانينا! لقد وجدت نظامًا موحدًا متكاملًا للفوترة الإلكترونية متوافقًا مع ZATCA."
        },
        tryBtn: { en: "Try Integration", ar: "جرّب التكامل الآن" },
        formTitle: { en: "Connect with Us Now", ar: "تواصل معنا الآن" },
        demoBtn: { en: "Request a Demo", ar: "احجز عرضًا توضيحيًا" },
        agree: { en: "I agree to the processing of", ar: "أوافق على معالجة" },
        personal: { en: "personal data", ar: "البيانات الشخصية" },
        commonProblems: {
        en: "Common Challenges in Business Integration",
        ar: "التحديات الشائعة في تكامل الأعمال"    },
        commonSubtitle: {
        en: "What keeps your business from scaling efficiently?",
        ar: "ما الذي يعيق نمو عملك بكفاءة؟"
        },
        bestChoice: {
        en: "KPI.com — Your Trusted ZATCA Integration Partner",
        ar: "KPI.com — شريكك الموثوق لتكامل ZATCA"
        },
        guestInfo: {
        en: "All Invoice Data in One Secure Dashboard Track every essential detail of your e-invoices, all in one place:",
        ar: "كل بيانات الفواتير في لوحة تحكم واحدة وآمنة تابع جميع تفاصيل فواتيرك الإلكترونية في مكان واحد:"
        },
        guestInfoDesc: {
        en: `Invoice issue and delivery timestamps
            — Customer identification and VAT details
            — Approval statuses and rejection logs
            — Associated credit or debit notes, linked automatically
            — Digital signatures, UUIDs, and QR codes, fully compliant with ZATCA Phase 2`,
        ar: `معلومات العميل والرقم الضريبي
        — حالات الموافقة أو الرفض من ZATCA
        — الملاحظات المدينة والدائنة المرتبطة تلقائياً
        — التوقيعات الرقمية، وUUID، ورموز QR متوافقة بالكامل مع المرحلة الثانية من ZATCA`
        },
        workGuide: {
        en: "Clear Workflow for Every Finance Team A structured invoicing process with:",
        ar: "سير عمل واضح لفريق الشؤون المالية عملية فوترية منظمة تشمل:"
        },
        workGuideDesc: {
        en: `Seamless steps from creation to ZATCA submission
        — Mandatory fields validation before sending
        — Automatic deadline reminders
        — Full activity log of staff handling invoices and corrections`,
        ar: `خطوات متسلسلة من الإنشاء حتى الإرسال إلى ZATCA
        — التحقق من الحقول المطلوبة قبل الإرسال
        — تذكيرات تلقائية بالمواعيد النهائية
        — سجل نشاط كامل للموظفين المسؤولين عن الفواتير والتعديلات`
        },
        transform: { en: "Transform how your company handles invoicing", ar: "حوّل طريقة إدارة الفوترة في شركتك" },
        transformDesc: {
        en: "KPI delivers tangible improvements across all aspects of hotel management.",
        ar: "توفر KPI تحسينات ملموسة في جميع جوانب إدارة الفنادق."
        },
        faq: { en: "Frequently Asked Questions", ar: "الأسئلة الشائعة" },
        offer: { en: " Limited Time Offer", ar: " عرض لفترة محدودة" },
        streamline: { en: "Is your business ready for ZATCA Phase 2 compliance?", ar: "هل عملك جاهز للامتثال للمرحلة الثانية من ZATCA؟" },
        join: {
        en: "Join companies across Saudi Arabia who are already saving time and staying compliant with KPI.com.",
        ar: "انضم إلى الشركات التي بدأت التوفير وضمان الامتثال مع KPI.com"
        },
        register: {
        en: "Sign up today and get 3 months free with 50% off onboarding!",
        ar: "سجل الآن واحصل على 3 أشهر مجانًا مع خصم 50٪ على التهيئة!"
        },
        tryNow: { en: "Try for Free", ar: "احجز عرضًا توضيحيًا" },
        schedule: { en: "Book a Demo", ar: "جرّب الآن مجانًا" },
        orCall: { en: "Or call us at:", ar: "أو اتصل بنا:" },
        cards: {
        time: { en: "Save Time", ar: "توفير الوقت" },
        time_desc: { en: "Automate invoice generation and submission to ZATCA with zero manual work.", ar: "أتمتة إنشاء الفواتير وإرسالها إلى ZATCA بدون تدخل يدوي." },
        revenue: { en: "Increase Revenue", ar: "زيادة الإيرادات" },
        revenue_desc: { en: "Stay fully compliant and avoid regulatory fines or rejection of invoices.", ar: "التوافق الكامل مع اللوائح لتجنب رفض الفواتير أو الغرامات." },
        staff: { en: "Boost Team Efficiency", ar: "رفع كفاءة الفريق" },
        staff_desc: { en: "Integrated workflows eliminate repetitive tasks and reduce human error.", ar: "التكامل يُلغي المهام المكررة ويقلل الأخطاء البشرية." },
        satisfaction: { en: "Customer Satisfaction", ar: "رضا العملاء" },
        satisfaction_desc: { en: "Faster approvals, standardized formats, and trusted compliance build confidence.", ar: "موافقات أسرع، تنسيقات موحدة، وامتثال موثوق يعزز الثقة." }
        }
  };
  const problems = [
    {
        icon: 'https://hotel.kpi.uz/imgs/firstIcon.png',
        title: {
        en: 'No customer data integration',
        ar: 'عدم وجود تكامل لبيانات العملاء'
        },
        desc: {
        en: 'You don’t have a clear view of who your customers are, what they prefer, or how they interact with your services. Without proper integration, personalized service and invoice accuracy suffer.',
        ar: 'لا توجد رؤية واضحة حول من هم عملاؤك، وما هي تفضيلاتهم، أو كيف يتفاعلون مع خدمتك. بدون تكامل جيد، تتأثر دقة الفوترة وجودة الخدمة الشخصية.'
        }
    },
    {
        icon: 'https://hotel.kpi.uz/imgs/secondIcon.png',
        title: {
        en: 'Manual workflows slow operations',
        ar: 'الإجراءات اليدوية تبطئ العمليات'
        },
        desc: {
        en: 'Calls, emails, and chats are scattered across tools. Without integration, invoice and order records are lost or delayed.',
        ar: 'المكالمات والرسائل والمحادثات موزعة على أدوات متعددة. بدون تكامل، تضيع سجلات الفواتير أو تتأخر.'
        }
    },
    {
        icon: 'https://hotel.kpi.uz/imgs/thirdIcon.png',
        title: {
        en: 'No traceability or controls',
        ar: 'غياب التتبع أو الرقابة'
        },
        desc: {
        en: 'Team members can bypass systems and issue invoices off-record. Without digital traceability, compliance and trust are compromised.',
        ar: 'يمكن للموظفين تجاوز النظام وإصدار فواتير خارج السجلات. غياب التتبع الرقمييعرض الثقة والامتثال للخطر.'
        }
    },
    {
        icon: 'https://hotel.kpi.uz/imgs/fourthIcon.png',
        title: {
        en: 'No unified invoicing channel',
        ar: 'عدم وجود قناة فواتير موحدة'
        },
        desc: {
        en: 'Multiple communication platforms with no sync result in lost or duplicated invoices. Integration brings all workflows into one dashboard.',
        ar: 'تعدد القنوات دون مزامنة يؤدي إلى ضياع الفواتير أو تكرارها. يتيح التكامل مركزيةالعمليات في لوحة واحدة.'
        }
    },
    {
        icon: 'https://hotel.kpi.uz/imgs/fifthIcon.png',
        title: {
        en: 'No real-time insights or compliance data',
        ar: 'غياب التحليلات أو بيانات الامتثال اللحظية'
        },
        desc: {
        en: 'You can’t monitor performance, revenue, or audit status. With KPI.com, all ZATCA-compliant data is tracked instantly.',
        ar: 'لا يمكن تتبع الأداء أو الإيرادات أو حالة التدقيق. باستخدام KPI.com، تتم متابعة كل بيانات ZATCA فورياً.'
        }
    }
  ];
  const faqData = [
    {
        question: {
        en: 'What is Fatoora?',
        ar: 'ما هي فاتورة؟'
        },
        answer: {
        en: 'Fatoora is Saudi Arabia’s national e-invoicing platform introduced by ZATCA (Zakat, Tax and Customs Authority). All businesses are required to generate and send e-invoices digitally through this system. With Phase 2 now active, invoices must be submitted in real time to the Fatoora platform via approved electronic systems like KPI.com.',
        ar: 'فاتورة" هي منصة الفوترة الإلكترونية الوطنية في المملكة العربية السعودية والتي أطلقتها هيئة الزكاة والضريبة والجمارك (ZATCA). يجب على جميع الشركات إصدار الفواتير إلكترونيًا وإرسالها من خلال هذه المنصة. في المرحلة الثانية، أصبح من الإلزامي إرسال الفواتير مباشرة إلى نظام "فاتورة" باستخدام أنظمة إلكترونية معتمدة مثل KPI.com.'
        }
    },
    {
        question: {
        en: 'What’s the difference between a tax invoice and a simplified tax invoice?',
        ar: '?ما الفرق بين الفاتورة الضريبية والفاتورة الضريبية المبسطة'
        },
        answer: {
        en: " A tax invoice is typically issued for business-to-business (B2B) transactions and includes details like the buyer's VAT number. A simplified tax invoice is used for business-to-consumer (B2C) transactions and contains less detailed information.",
        ar: 'عادةً ما يتم إصدار الفاتورة الضريبية للمعاملات بين الشركات (B2B) وتحتوي على تفاصيل مثل الرقم الضريبي للمشتري. أما الفاتورة الضريبية المبسطة فتُستخدم في المعاملات مع الأفراد (B2C) وتحتوي على معلومات أقل تفصيلاً.'
        }
    },
    {
        question: {
        en: 'Should every invoice have a QR code?',
        ar: 'هل يجب أن تحتوي كل فاتورة على رمز QR؟'
        },
        answer: {
        en: ' Yes, according to ZATCA regulations, all e-invoices must include a QR code. KPI.com automatically generates the required QR codes for both standard and simplified invoices to ensure compliance.',
        ar: ' نعم، وفقًا للوائح هيئة الزكاة (ZATCA)، يجب أن تتضمن جميع الفواتير الإلكترونية رمز QR. يقوم نظام KPI.com بإنشاء رموز QR المطلوبة تلقائيًا لكل من الفواتير القياسية والمبسطة لضمان التوافق الكامل.'
        }
    },
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
              {/* <button className='button'>{t.homeCrm[lang]} <IoIosArrowForward className='left_icon'/> {t.crm[lang]} <IoIosArrowForward className='left_icon'/> {t.hotel[lang]}</button> */}
              <h1>{t.title[lang]}</h1>
              <p>{t.subtitle[lang]}</p>
              <button className='btn'>{t.tryBtn[lang]} <IoIosArrowForward className='left_icon'/></button>
            </div>
            <div className='right'>
                <div>
                <label>{t.formTitle[lang]}</label>
                <input type="text" placeholder='Your name' />
                <input type="text" placeholder='+998 ' />
                <a className='input_btn' href="https://calendly.com/kpicom/kpi-com-demo">
                    <button className='input_btn'><a href="https://calendly.com/kpicom/kpi-com-demo" className='link'>{t.demoBtn[lang]}</a></button>
                </a>
                <p>{t.agree[lang]} <strong>{t.personal[lang]}</strong></p>
                </div>
            </div>
          </div>
        </div>
      </div>

      <div className="video_box">
        <h1 className='text'>{t.commonProblems[lang]}</h1>
        <p className='text_p'>{t.commonSubtitle[lang]}</p>
        <iframe
            className='video'
            src="https://www.youtube.com/embed/N5ay5AooieI"
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
          <img src={img1} alt="" />
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
          <button className='left_footer'>{t.tryNow[lang]} <IoIosArrowForward className='icon icon_btn'/></button>
          <button className='right_footer'>{t.schedule[lang]} <IoIosArrowForward className='icon icon_btn'/></button>
        </div>
        <h6><BsTelephone className='phone' /> {t.orCall[lang]} <strong>+996 XXX XX XX</strong></h6>
      </div>
    </>
  );
};

export default Home;