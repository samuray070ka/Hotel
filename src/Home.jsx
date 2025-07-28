import React, { useState } from 'react';
import './index.css';
import { IoIosArrowForward } from "react-icons/io";
import { BsWhatsapp } from "react-icons/bs";
import { useLang } from './LanguageContext.jsx';
import LanguageDropdown from './LanguageDropdown.jsx';
import img1 from './img1.png'
import img3 from './For-MuhammadSodiq-teacher (2).png'


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
        en: "Join companies across Saudi Arabia who are already saving time and staying compliant with KPI.com",
        ar: "انضم إلى الشركات التي بدأت التوفير وضمان الامتثال مع KPI.com"
        },
        tryNow: { en: "Try for Free", ar: "احجز عرضًا توضيحيًا" },
        schedule: { en: "Book a Demo", ar: "جرّب الآن مجانًا" },
        orCall: { en: "Or call us at:", ar: "أو اتصل بنا:" },
        cards: {
        time: { en: "☁️ Cloud-Based Platform", ar: "☁️ منصة قائمة على السحابة" },
        time_desc: { en: "KPI.com operates entirely in the cloud, so you can manage and issue invoices from anywhere with internet access. It enables seamless communication with ZATCA’s official system without the need for local installations.", ar: "يعمل نظام KPI.com بالكامل من خلال السحابة، مما يتيح لك إصدار وإدارة الفواتير من أي مكان يتوفر فيه اتصال بالإنترنت. كما يدعم النظام التكامل المباشر مع منصة هيئة الزكاة (ZATCA) دون الحاجة إلى تثبيتات محلية." },
        revenue: { en: "🔗 Integrated with ZATCA API", ar: "🔗 تكامل مباشر مع واجهة ZATCA البرمجية (API)" },
        revenue_desc: { en: "The platform is directly connected to the ZATCA e-Invoicing Integration Portal through certified API access, ensuring that invoices are submitted securely and in real-time.", ar: "يرتبط النظام مباشرة ببوابة التكامل الإلكتروني الخاصة بـ ZATCA عبر واجهة API معتمدة، مما يضمن إرسال الفواتير بشكل آمن وفي الوقت الفعلي." },
        staff: { en: "🔒 Tamper-Proof Infrastructure", ar: "🔒 بنية محمية ضد التلاعب" },
        staff_desc: { en: "KPI.com includes built-in protection against invoice manipulation. The system prevents unauthorized changes and ensures that invoice data remains intact and legally compliant.", ar: "يوفر KPI.com آلية حماية مدمجة تمنع أي تعديل غير مصرح به على الفواتير. يضمن النظام أن تبقى بيانات الفاتورة سليمة ومتوافقة قانونياً." },
        satisfaction: { en: "🗂 Full Invoice Archiving", ar: "🗂 أرشفة كاملة لجميع الفواتير" },
        satisfaction_desc: { en: "Every invoice issued through KPI.com is automatically stored and indexed. This ensures that all records are retained for auditing, reporting, and ZATCA compliance purposes.", ar: "يتم حفظ كل فاتورة يتم إصدارها من خلال KPI.com بشكل تلقائي ومنظم، مما يضمن إمكانية الرجوع إليها لأغراض التدقيق والتقارير ومتطلبات الامتثال مع ZATCA." },
        add: {en: "🛡 Advanced Security Controls", ar: "🛡 ضوابط أمان متقدمة"},
        add_desc: {en: "Our system is built to detect and log any manual alterations, suspicious behavior, or tampering attempts. It guarantees that no sensitive information is leaked or lost during invoice creation and transmission.", ar:"يتميز النظام بالقدرة على اكتشاف وتسجيل أي تعديل يدوي أو سلوك مشبوه أو محاولة تلاعب. كما يضمن عدم تسريب أو فقدان أي بيانات أثناء إنشاء الفاتورة أو إرسالها."}
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
        en: 'Fatoora is Saudi Arabia’s national e-invoicing platform introduced by ZATCA (Zakat, Tax and Customs Authority). All businesses are required to generate and send e-invoices digitally through this system. With Phase 2 now active, invoices must be submitted in real time to the Fatoora platform via approved electronic systems like KPI.com',
        ar: 'فاتورة" هي منصة الفوترة الإلكترونية الوطنية في المملكة العربية السعودية والتي أطلقتها هيئة الزكاة والضريبة والجمارك (ZATCA). يجب على جميع الشركات إصدار الفواتير إلكترونيًا وإرسالها من خلال هذه المنصة. في المرحلة الثانية، أصبح من الإلزامي إرسال الفواتير مباشرة إلى نظام "فاتورة" باستخدام أنظمة إلكترونية معتمدة مثل KPI.com'
        }
    },
    {
        question: {
        en: 'What’s the difference between a tax invoice and a simplified tax invoice?',
        ar: 'ما الفرق بين الفاتورة الضريبية والفاتورة الضريبية المبسطة؟'
        },
        answer: {
        en: " A tax invoice is typically issued for business-to-business (B2B) transactions and includes details like the buyer's VAT number. A simplified tax invoice is used for business-to-consumer (B2C) transactions and contains less detailed information.",
        ar: 'عادةً ما يتم إصدار الفاتورة الضريبية للمعاملات بين الشركات (B2B) وتحتوي على تفاصيل مثل الرقم الضريبي للمشتري. أما الفاتورة الضريبية المبسطة فتُستخدم في المعاملات مع الأفراد (B2C) وتحتوي على معلومات أقل تفصيلاً.'
        }
    },
    {
        question: {
        en: 'Should every invoice have a QR code?',
        ar: 'هل يجب أن تحتوي كل فاتورة على رمز؟ QR'
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
        <div className="home">
      <div className="dark">
        <LanguageDropdown />
        <div className="box">
          <div className="left">
            <h1>{t.title[lang]}</h1>
            <p>{t.subtitle[lang]}</p>
          </div>
          <div className="right">
            <div>
              <label>{t.formTitle[lang]}</label>
              <input type="text" placeholder="Your name" />
              <input type="text" placeholder="+998 " />
              <a className="input_btn" href="https://calendly.com/kpicom/kpi-com-demo">
                <button className="input_btn">
                  <a href="https://calendly.com/kpicom/kpi-com-demo" className="link">
                    {t.demoBtn[lang]}
                  </a>
                </button>
              </a>
              <p>
                {t.agree[lang]} <strong>{t.personal[lang]}</strong>
              </p>
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
          <div className="problem-row" key={i}>
            {i % 2 === 0 ? (
              <>
                <div className="problem-item left">
                  <img src={item.icon} alt='icon' className='problem-icon' />
                  <h3>{lang === 'ar' ? item.title.ar : item.title.en}</h3>
                  <p>{lang === 'ar' ? item.desc.ar : item.desc.en}</p>
                </div>
                <div className="problem-line">
                  <span className="circle">{i + 1}</span>
                </div>
                <div className="empty"></div>
              </>
            ) : (
              <>
                <div className="empty"></div>
                <div className="problem-line">
                  <span className="circle">{i + 1}</span>
                </div>
                <div className="problem-item rightt">
                  <img src={item.icon} alt='icon' className='problem-icon' />
                  <h3>{lang === 'ar' ? item.title.ar : item.title.en}</h3>
                  <p>{lang === 'ar' ? item.desc.ar : item.desc.en}</p>
                </div>
              </>
            )}
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

      <img className='img' src={img3} alt="" />


      <h1 className='text'>{t.transform[lang]}</h1>
      <p className='text_p'>{t.transformDesc[lang]}</p>

      <div className="cards">
        <div className="card">
          <h2>{t.cards.time[lang]}</h2>
          <p>{t.cards.time_desc[lang]}</p>
        </div>
        <div className="card">
          <h2>{t.cards.revenue[lang]}</h2>
          <p>{t.cards.revenue_desc[lang]}</p>
        </div>
        <div className="card">
          <h2>{t.cards.staff[lang]}</h2>
          <p>{t.cards.staff_desc[lang]}</p>
        </div>
        <div className="card">
          <h2>{t.cards.satisfaction[lang]}</h2>
          <p>{t.cards.satisfaction_desc[lang]}</p>
        </div>
        <div className="card">
          <h2>{t.cards.add[lang]}</h2>
          <p>{t.cards.add_desc[lang]}</p>
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
        <p>{t.join[lang]}<br className='mb' /></p>
        <div className='button_box'>
          <a href="https://calendly.com/kpicom/kpi-com-demo" className='left_footer_box'>
            <button className='boc'>{t.tryNow[lang]} <IoIosArrowForward className='icon icon_btn'/></button>
          </a>
          <a href="https://calendly.com/kpicom/kpi-com-demo" className='right_footer_box'>
            <button className='boc two'>{t.schedule[lang]} <IoIosArrowForward className='icon icon_btn'/></button>
          </a>
        </div>
        <div className='footer_Box'>
         <BsWhatsapp className='icon_footer'/>
         <a href='https://wa.me/447990113943' className='link_footer'><strong> +447990113943</strong></a>
        </div>
      </div>
    </>
  );
};

export default Home;