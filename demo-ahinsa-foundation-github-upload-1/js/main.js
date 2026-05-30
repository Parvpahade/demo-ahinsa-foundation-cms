/* ============================================================
   AHINSA DIVINE FOUNDATION, interactions
   ============================================================ */

/* ===========================================================
   1) CONFIG ,  ✏️  EDIT THESE FIVE LINES AND THE SITE IS LIVE
   =========================================================== */
const CONFIG = {
  // WhatsApp number with country code, digits only (no +, spaces or dashes)
  whatsappNumber: "918208931937",
  whatsappMessage: "Namaste Anju ji! I came across your Ahinsa Foundation website and would love to know more about your Reiki healing and classes.",
  contentPath: "content/site.json",
  location: "India · In person & online worldwide",
  social: {
    instagram: "https://www.instagram.com/ahinsareiki",
    facebook: "https://www.facebook.com/profile.php?id=61567365756029",
    youtube: "https://youtube.com/@grandmasteranju",
    email: ""
  }
};

const DEFAULT_EDITABLE_CONTENT = {
  whatsappNumber: CONFIG.whatsappNumber,
  whatsappMessage: CONFIG.whatsappMessage,
  images: {
    hero: "assets/images/anju-hero.jpg",
    about: "assets/images/anju-about.jpg",
    healing: "assets/images/healing-session.jpg",
    recognition: "assets/images/anju-recognition.jpg"
  },
  videos: [
    { url: "https://www.youtube.com/watch?v=JoWwvw-50MU" },
    { url: "https://www.youtube.com/watch?v=wRdPDCrSG6c" }
  ],
  reviews: [
    {
      name: "Meera Sharma",
      city: "Indore",
      text: "After just a few sessions with Anju ji, years of anxiety simply melted away. I finally feel like myself again, lighter, calmer, whole.",
      textHi: "अंजू जी के साथ कुछ ही सेशन्स के बाद, सालों की ऐंग्जायटी जैसे पिघल गई। मैं फिर से खुद जैसा फील करती हूं, हल्का, शांत, पूरा।"
    },
    {
      name: "Priya Nair",
      city: "Dubai",
      text: "Her distance healing reached me across continents. I was sceptical at first. Now I recommend Ahinsa Divine Foundation to everyone I love.",
      textHi: "उनकी डिस्टेंस हीलिंग मुझे कॉन्टिनेंट्स के पार मिली। शुरू में मैं स्केप्टिकल थी, अब मैं Ahinsa Divine Foundation को अपने हर प्रिय व्यक्ति को रिकमेंड करती हूं।"
    },
    {
      name: "Rajesh Verma",
      city: "Pune",
      text: "I trained in Reiki under Anju's guidance and it changed my life. She teaches with such patience, warmth and grace.",
      textHi: "मैंने अंजू जी की गाइडेंस में रेकी सीखी और मेरी लाइफ बदल गई। वह इतने पेशेंस, वॉर्म्थ और ग्रेस के साथ सिखाती हैं।"
    },
    {
      name: "Sunita Joshi",
      city: "Bhopal",
      text: "The most caring, judgement-free space I have ever experienced. I leave every session feeling truly seen and deeply at peace.",
      textHi: "यह सबसे केयरिंग, जजमेंट-फ्री स्पेस है जो मैंने कभी एक्सपीरियंस किया। हर सेशन के बाद मैं सच में देखी-समझी गई और गहरी शांति में महसूस करती हूं।"
    }
  ]
};

const LANGUAGE_STORAGE_KEY = "ahinsa-language-v2";
let currentLanguage = "en";
let editableContent = cloneContent(DEFAULT_EDITABLE_CONTENT);
let carouselTimer;

const HINDI_COPY = {
  meta: {
    title: "Ahinsa Foundation, ग्रैंड मास्टर अंजू पहाड़े के साथ रेकी हीलिंग और क्लासेस",
    description: "Ahinsa Foundation, रेकी हीलिंग, चक्र बैलेंसिंग, डिस्टेंस हीलिंग और रेकी क्लासेस ग्रैंड मास्टर अंजू पहाड़े के साथ। संतुलन, हार्मनी और इनर पीस की अपनी यात्रा शुरू करें।"
  },
  location: "भारत · आमने-सामने और दुनिया भर में ऑनलाइन",
  text: {
    ".nav__links a[href='#about']": "परिचय",
    ".nav__links a[href='#offerings']": "हीलिंग",
    ".nav__links a[href='#classes']": "क्लासेस",
    ".nav__links a[href='#journey']": "चक्र",
    ".nav__links a[href='#faq']": "सवाल",
    ".nav__links a[href='#voices']": "अनुभव",
    ".mobile-menu__links a[href='#about']": "अंजू जी के बारे में",
    ".mobile-menu__links a[href='#offerings']": "हीलिंग और सेवाएं",
    ".mobile-menu__links a[href='#classes']": "रेकी क्लासेस",
    ".mobile-menu__links a[href='#journey']": "चक्र",
    ".mobile-menu__links a[href='#faq']": "सवाल",
    ".mobile-menu__links a[href='#voices']": "अनुभव",
    ".mobile-menu__links a[href='#contact']": "संपर्क",
    ".portrait-badge__title": "अंजू पहाड़े",
    ".portrait-badge__role": "फाउंडर और रेकी ग्रैंड मास्टर",
    ".scroll-cue__text": "देखें",
    ".stat:nth-child(1) .stat__label": "सालों की हीलिंग",
    ".stat:nth-child(2) .stat__label": "लोगों तक पहुंच",
    ".stat:nth-child(3) .stat__label": "स्टूडेंट्स अट्यून हुए",
    ".stat:nth-child(4) .stat__num--word": "सम्मानित",
    ".stat:nth-child(4) .stat__label": "इंटरनेशनल बुक ऑफ रिकॉर्ड्स",
    ".card:nth-child(1) h3": "रेकी हीलिंग",
    ".card:nth-child(1) p": "हाथों के माध्यम से एनर्जी हीलिंग, जो तनाव रिलीज़ करती है, वाइटैलिटी लौटाती है और शरीर व मन को गहरी शांति देती है।",
    ".card:nth-child(2) h3": "डिस्टेंस हीलिंग",
    ".card:nth-child(2) p": "एनर्जी दूरी नहीं मानती। अपने घर के आराम से, दुनिया में कहीं भी, पूरा हीलिंग सेशन पाएं।",
    ".card:nth-child(3) h3": "चक्र बैलेंसिंग",
    ".card:nth-child(3) p": "अपने सात एनर्जी सेंटर्स को फिर से अलाइन करें ताकि वाइटैलिटी फ्रीली फ्लो करे, और वे ब्लॉकेजेस क्लियर हों जो आपको रोकते हैं।",
    ".card:nth-child(4) h3": "रेकी अट्यूनमेंट",
    ".card:nth-child(4) p": "अपने लिए हीलिंग चैनल बनें। अंजू जी की जेंटल गाइडेंस में रेकी लेवल I, II और मास्टर सीखें।",
    ".card:nth-child(5) h3": "मेडिटेशन और माइंडफुलनेस",
    ".card:nth-child(5) p": "सांस को स्थिर करने, मन को शांत करने और रोज़मर्रा की लाइफ में सेरेनिटी लाने के लिए गाइडेड प्रैक्टिसेस।",
    ".card:nth-child(6) h3": "क्रिस्टल और ऑरा हीलिंग",
    ".card:nth-child(6) p": "हीलिंग क्रिस्टल्स की सपोर्टिव पावर से अपनी एनर्जी फील्ड को क्लेंज़, चार्ज और प्रोटेक्ट करें।",
    ".level-card:nth-child(1) h3": "रेकी लेवल 1",
    ".level-card:nth-child(1) .level-card__sub": "शुरुआत",
    ".level-card:nth-child(1)>p:last-of-type": "एनर्जी के लिए ओपन होकर हैंड्स-ऑन रेकी से खुद को और अपने प्रियजनों को हील करना सीखें। कोई एक्सपीरियंस जरूरी नहीं।",
    ".level-card:nth-child(2) h3": "रेकी लेवल 2",
    ".level-card:nth-child(2) .level-card__sub": "गहरी राह",
    ".level-card:nth-child(2)>p:last-of-type": "सेक्रेड सिंबल्स रिसीव करें और डिस्टेंस हीलिंग सीखें, किसी भी जगह और समय तक एनर्जी भेजना।",
    ".level-card:nth-child(3) h3": "रेकी मास्टर",
    ".level-card:nth-child(3) .level-card__sub": "टीचर",
    ".level-card:nth-child(3)>p:last-of-type": "मास्टरी में कदम रखें, मास्टर सिंबल, डीपर प्रैक्टिस, और दूसरों को अट्यून व टीच करने की एबिलिटी।",
    ".level-card:nth-child(4) h3": "ग्रैंड मास्टर पथ",
    ".level-card:nth-child(4) .level-card__sub": "टीचर्स के टीचर",
    ".level-card:nth-child(4)>p:last-of-type": "अंजू जी के साथ पूरी जर्नी चलें और रेकी ग्रैंड मास्टर बनें, ताकि आप अपने स्टूडेंट्स को गाइड कर सकें।",
    ".classes__cta p": "कहां से शुरू करें समझ नहीं आ रहा? अंजू जी आपकी जर्नी के लिए सही लेवल चुनने में मदद करेंगी।",
    ".faq .section__intro": "रेकी में नए हैं? ये बातें लोग अंजू जी से सबसे ज़्यादा पूछते हैं।",
    ".faq__item:nth-child(1) p": "आप आराम से, पूरे कपड़ों में, कम्फर्टेबल होकर रेस्ट करते हैं, जबकि अंजू जी अपने हाथों से हीलिंग एनर्जी जेंटली चैनल करती हैं। ज़्यादातर लोगों को गहरी शांति, वॉर्म्थ और हल्कापन महसूस होता है, कई लोग पीसफुल रिलैक्सेशन में चले जाते हैं।",
    ".faq__item:nth-child(2) p": "हां। एनर्जी दूरी से बंधी नहीं होती, डिस्टेंस हीलिंग भी उतनी ही पावरफुल हो सकती है जितना एक ही रूम में होना, और आप इसे अपने घर के आराम से, दुनिया में कहीं भी रिसीव कर सकते हैं।",
    ".faq__item:nth-child(3) p": "बिल्कुल नहीं। रेकी आपकी बिलीफ पर डिपेंड नहीं करती। बस ओपन हार्ट के साथ आइए और एनर्जी को अपना काम करने दीजिए।",
    ".faq__item:nth-child(4) p": "रेकी पूरी तरह सेफ, जेंटल और नैचुरल है। यह किसी भी मेडिकल ट्रीटमेंट के साथ खूबसूरती से सपोर्ट करती है, आपकी वेलबीइंग को सपोर्ट करती है और आपके डॉक्टर की सलाह को कभी रिप्लेस नहीं करती।",
    ".faq__item:nth-child(5) p": "हर व्यक्ति अलग होता है। कुछ लोग एक सेशन के बाद हल्का महसूस करते हैं; कुछ रेगुलर आना पसंद करते हैं। अंजू जी प्यार से गाइड करेंगी कि आपके लिए क्या सही महसूस होता है।",
    ".faq__item:nth-child(6) p": "बिल्कुल, कोई भी, किसी भी उम्र में, रेकी सीख सकता है। अंजू जी रेकी लेवल 1 से लेकर ग्रैंड मास्टर तक हर लेवल सिखाती हैं।",
    ".faq .classes__cta p": "अभी भी मन में कोई सवाल है?",
    ".footer__nav a[href='#about']": "अंजू जी",
    ".footer__nav a[href='#offerings']": "हीलिंग",
    ".footer__nav a[href='#journey']": "चक्र",
    ".footer__nav a[href='#faq']": "सवाल",
    ".footer__nav a[href='#voices']": "अनुभव",
    ".footer__nav a[href='#contact']": "संपर्क",
    ".footer__cta p": "आज ही अपनी हीलिंग जर्नी शुरू करें।",
    ".footer__bar p:nth-child(2)": "भक्ति और प्रकाश से बनाया गया।"
  },
  html: {
    ".hero__title": "आपके <em>मन, शरीर</em> और आत्मा के लिए हीलिंग एनर्जी",
    ".hero__lede": "डिवाइन रेकी, चक्र बैलेंसिंग और एनर्जी वर्क <strong>अंजू पहाड़े</strong> के साथ, जो आपको धीरे-धीरे संतुलन, हार्मनी और गहरी, स्थायी इनर पीस की ओर वापस लाता है।",
    ".philosophy__mantra": "<span class=\"om\">ॐ</span> “हर हीलिंग की बुनियाद <em>अहिंसा</em> है, अपने लिए करुणा, और हर जीव के लिए करुणा।”",
    ".about__copy .eyebrow": "<span class=\"eyebrow__line\"></span>अपनी ग्रैंड मास्टर से मिलें",
    ".about__copy .section__title": "एक जीवन <em>करुणा भरी हीलिंग</em> को समर्पित",
    ".about__copy>p:nth-of-type(2)": "अंजू पहाड़े <strong>Ahinsa Foundation</strong> का दिल और फाउंडर हैं। छह साल से अधिक समय से वे सीकर्स के साथ उनकी व्होलनैस की जर्नी में साथ चल रही हैं, यूनिवर्सल लाइफ-फोर्स एनर्जी को चैनल करके शरीर को सुकून, मन को शांति और स्पिरिट को अवेकन करती हैं, और दूसरों को हीलर बनना भी सिखाती हैं।",
    ".about__copy>p:nth-of-type(3)": "रेकी की पारंपरिक लाइनिएज में ट्रेन्ड और <em>इंटरनेशनल बुक ऑफ रिकॉर्ड्स</em> व <em>होलिस्टिक मेडिसिन रिसर्च फाउंडेशन</em> द्वारा सम्मानित, अंजू जी प्राचीन विज़डम को एक मां जैसी वॉर्म्थ के साथ जोड़ती हैं। हर सेशन एक जेंटल रिटर्न है, बैलेंस की ओर, हार्मनी की ओर, और <em>आप</em> की ओर।",
    ".offerings .section__head .eyebrow": "<span class=\"eyebrow__line\"></span>हम कैसे हील करते हैं<span class=\"eyebrow__line\"></span>",
    ".offerings .section__title": "संतुलन और <em>नई ऊर्जा</em> की राहें",
    ".offerings .section__intro": "हर ऑफरिंग एक दरवाज़ा है। जो आपको अपनी ओर खींचे उसे चुनें, या बस हमें मैसेज करें, और अंजू जी आपकी एनर्जी को जो सबसे ज़्यादा चाहिए, उसी की ओर गाइड करेंगी।",
    ".band__copy .eyebrow": "<span class=\"eyebrow__line\"></span>एक पवित्र, जेंटल स्पेस",
    ".band__copy .section__title": "हर सेशन में आपको <em>केयर</em> के साथ संभाला जाता है",
    ".band__copy p:not(.eyebrow)": "सॉफ्ट लाइट, सूदिंग एनर्जी, और एक हीलर जो सच में सुनता है। चाहे आप सामने हों या दुनिया के किसी भी कोने में, हर सेशन सिर्फ आपके लिए बनाया गया एक शांत सैंक्चुअरी है।",
    ".classes .section__head .eyebrow": "<span class=\"eyebrow__line\"></span>हीलिंग की कला सीखें<span class=\"eyebrow__line\"></span>",
    ".classes .section__title": "एक <em>रेकी हीलर</em> बनें",
    ".classes .section__intro": "रेकी सिर्फ रिसीव नहीं होती, इसे सीखा भी जा सकता है। अंजू जी हर स्टूडेंट को पर्सनली अट्यून और गाइड करती हैं, आपकी एनर्जी की पहली स्पार्क से ग्रैंड मास्टर तक, वॉर्म स्मॉल-ग्रुप और वन-टू-वन क्लासेस में, आमने-सामने और ऑनलाइन।",
    ".journey__copy .eyebrow": "<span class=\"eyebrow__line\"></span>आपकी इनर लाइट",
    ".journey__copy .section__title": "एनर्जी जो <em>आपके भीतर बहती है</em>",
    ".journey__copy>p:not(.eyebrow)": "रीढ़ की जड़ से सिर के क्राउन तक, लाइफ-फोर्स एनर्जी सात सेक्रेड सेंटर्स से होकर बहती है। हर चक्र पर हॉवर करके महसूस करें कि वह बॉडी में कहां रहता है, फिर अंजू जी आपको जेंटली बैलेंस में वापस लाने में मदद करेंगी।",
    ".journey__steps li:nth-child(1) div": "<strong>जुड़ें</strong>हमसे बात करें और बताएं कि आप अपनी जर्नी में कहां हैं।",
    ".journey__steps li:nth-child(2) div": "<strong>क्लेंज़</strong>जो आपकी एनर्जी को सर्व नहीं करता, उसे रिलीज़ करें।",
    ".journey__steps li:nth-child(3) div": "<strong>बैलेंस</strong>अपने सात चक्रों में हार्मनी वापस लाएं।",
    ".journey__steps li:nth-child(4) div": "<strong>खिलें</strong>अपनी रिन्यूड लाइट को एवरीडे लाइफ में लेकर जाएं।",
    ".faq .section__head .eyebrow": "<span class=\"eyebrow__line\"></span>सवाल, केयर के साथ जवाब<span class=\"eyebrow__line\"></span>",
    ".faq .section__title": "शुरू करने से <em>पहले</em>",
    ".voices .section__head .eyebrow": "<span class=\"eyebrow__line\"></span>हीलिंग के अनुभव<span class=\"eyebrow__line\"></span>",
    ".voices .section__title": "जिन दिलों को हमने <em>हील</em> करने में मदद की",
    ".recognition__copy .eyebrow": "<span class=\"eyebrow__line\"></span>सम्मानित और रिकग्नाइज़्ड",
    ".recognition__copy .section__title": "समर्पण जिसे दुनिया ने <em>सराहा</em>",
    ".recognition__copy p:not(.eyebrow)": "ट्रेडिशनल रेकी हीलिंग में अंजू पहाड़े का योगदान नेशनल और इंटरनेशनल स्टेजेस पर रिकग्नाइज़्ड हुआ है, यह हजारों जीवनों में आए जेंटल ट्रांसफॉर्मेशन का प्रतिबिंब है।",
    ".contact .eyebrow": "<span class=\"eyebrow__line\"></span>आपकी जर्नी यहां शुरू होती है<span class=\"eyebrow__line\"></span>",
    ".contact .section__title": "आइए आपका <em>संतुलन</em> वापस लाएं",
    ".contact__lede": "कोई सवाल है, या शुरू करने के लिए रेडी हैं? हमें व्हॉट्सऐप पर मैसेज भेजें, अंजू जी हर मैसेज पर्सनली पढ़ती हैं। हमें इस पाथ पर आपके साथ चलकर खुशी होगी।",
    ".footer__tag": "अहिंसा, जहां करुणा हीलिंग बन जाती है।",
    ".footer__bar p:first-child": "© <span id=\"year\"></span> Ahinsa Foundation · अंजू पहाड़े द्वारा स्थापित"
  },
  inline: {
    ".hero__trust li:nth-child(1)": "रेकी ग्रैंड मास्टर",
    ".hero__trust li:nth-child(2)": "6+ सालों की प्रैक्टिस",
    ".hero__trust li:nth-child(3)": "हीलिंग और रेकी क्लासेस",
    ".nav__cta": "व्हॉट्सऐप पर चैट करें",
    ".mobile-menu .btn--wa": "व्हॉट्सऐप पर चैट करें",
    ".hero__actions .btn--primary": "अपनी हीलिंग शुरू करें",
    ".hero__actions .btn--ghost": "रेकी के बारे में जानें",
    ".about__copy .link-arrow": "अंजू जी से व्हॉट्सऐप पर बात करें",
    ".about__list li:nth-child(1)": "रेकी ग्रैंड मास्टर और टीचर",
    ".about__list li:nth-child(2)": "चक्र और ऑरा बैलेंसिंग स्पेशलिस्ट",
    ".about__list li:nth-child(3)": "दुनिया भर में डिस्टेंस हीलिंग",
    ".about__list li:nth-child(4)": "करुणा-फर्स्ट, जजमेंट-फ्री जगह",
    ".band__copy .btn--primary": "अपना सेशन बुक करें",
    ".levels .level-card:not(.level-card--feature) .link-arrow": "व्हॉट्सऐप पर एनरोल करें",
    ".level-card--feature .link-arrow": "जर्नी शुरू करें",
    ".classes__cta .btn--primary": "क्लासेस के बारे में पूछें",
    ".faq__item:nth-child(1) summary": "रेकी सेशन में क्या होता है?",
    ".faq__item:nth-child(2) summary": "क्या डिस्टेंस हीलिंग सच में काम करती है?",
    ".faq__item:nth-child(3) summary": "क्या रेकी से हेल्प के लिए बिलीव करना जरूरी है?",
    ".faq__item:nth-child(4) summary": "क्या रेकी दवाइयों या ट्रीटमेंट के साथ सेफ है?",
    ".faq__item:nth-child(5) summary": "मुझे कितने सेशन्स चाहिए होंगे?",
    ".faq__item:nth-child(6) summary": "क्या कोई भी रेकी सीख सकता है?",
    ".faq .classes__cta .btn--primary": "अंजू जी से कुछ भी पूछें",
    ".contact__card .btn--lg": "व्हॉट्सऐप पर मैसेज करें",
    ".badges li:nth-child(1)": "इंटरनेशनल बुक ऑफ रिकॉर्ड्स",
    ".badges li:nth-child(2)": "होलिस्टिक मेडिसिन रिसर्च फाउंडेशन",
    ".badges li:nth-child(3)": "वर्टेक्स हीलिंग सेंटर अवॉर्ड"
  },
  attrs: {
    ".brand": { "aria-label": "Ahinsa Divine Foundation होम" },
    ".nav__links": { "aria-label": "मुख्य नेविगेशन" },
    ".mobile-menu__links": { "aria-label": "मोबाइल नेविगेशन" },
    ".scroll-cue": { "aria-label": "आगे देखें" },
    ".hero__portrait img": { "alt": "अंजू पहाड़े, रेकी हीलर, cream saree में बैठी हुईं और healing gesture में palms open" },
    ".about__media img": { "alt": "अंजू पहाड़े का portrait, Ahinsa Foundation की founder" },
    ".band__media img": { "alt": "अंजू पहाड़े एक शांत crystal-filled room में Reiki healing session कर रही हैं" },
    ".figure__img": { "alt": "lotus pose में meditating person, root से crown तक सात चक्र दिखते हुए" },
    ".recognition": { "aria-label": "सम्मान और recognition" },
    ".recognition__media img": { "alt": "अंजू पहाड़े award receive करती हुईं, International Book of Records और Holistic Medicine Research Foundation द्वारा सम्मानित" },
    ".fab": { "aria-label": "व्हॉट्सऐप पर हमसे चैट करें" },
    ".level-card:nth-child(1) .js-wa": { "data-wa-msg": "नमस्ते! मुझे रेकी लेवल 1 सीखना है। कृपया class की details शेयर करें।" },
    ".level-card:nth-child(2) .js-wa": { "data-wa-msg": "नमस्ते! मुझे रेकी लेवल 2 सीखना है। कृपया class की details शेयर करें।" },
    ".level-card:nth-child(3) .js-wa": { "data-wa-msg": "नमस्ते! मुझे रेकी मास्टर level सीखना है। कृपया class की details शेयर करें।" },
    ".faq .js-wa": { "data-wa-msg": "नमस्ते! शुरू करने से पहले मुझे Reiki के बारे में एक सवाल पूछना है।" }
  },
  chakra: [
    { en: "रूट", meaning: "स्थिरता, सुरक्षा और ग्राउंडिंग.", aria: "रूट चक्र" },
    { en: "सेक्रल", meaning: "क्रिएटिविटी, जॉय और इमोशनल फ्लो.", aria: "सेक्रल चक्र" },
    { en: "सोलर प्लेक्सस", meaning: "कॉन्फिडेंस, विल और पर्सनल पावर.", aria: "सोलर प्लेक्सस चक्र" },
    { en: "हार्ट", meaning: "प्यार, करुणा और डीप कनेक्शन.", aria: "हार्ट चक्र" },
    { en: "थ्रोट", meaning: "सत्य, वॉइस और ईमानदार एक्सप्रेशन.", aria: "थ्रोट चक्र" },
    { en: "थर्ड आई", meaning: "इन्ट्यूशन, क्लैरिटी और इनर विज़डम.", aria: "थर्ड आई चक्र" },
    { en: "क्राउन", meaning: "कनेक्शन, अवेयरनेस और स्पिरिचुअल ब्लिस.", aria: "क्राउन चक्र" }
  ],
  wa: {
    default: "नमस्ते अंजू जी! मैंने आपकी Ahinsa Foundation website देखी और Reiki healing व classes के बारे में और जानना चाहूंगा/चाहूंगी।",
    byText: {
      "व्हॉट्सऐप पर चैट करें": "नमस्ते अंजू जी! मैंने आपकी Ahinsa Foundation website देखी और Reiki healing के बारे में जानना है।",
      "अपनी हीलिंग शुरू करें": "नमस्ते! मैंने आपकी website देखी और Reiki healing के बारे में और जानना चाहता/चाहती हूं।",
      "अपना सेशन बुक करें": "नमस्ते! मैं Reiki healing session book करना चाहता/चाहती हूं।",
      "अंजू जी से व्हॉट्सऐप पर बात करें": "नमस्ते! मैंने Ahinsa Foundation website देखी और Reiki healing के बारे में जानना चाहता/चाहती हूं।",
      "जर्नी शुरू करें": "नमस्ते! मैंने आपकी website देखी और Reiki Grand Master बनने की journey के बारे में जानना चाहता/चाहती हूं।",
      "क्लासेस के बारे में पूछें": "नमस्ते! मुझे आपकी Reiki classes के बारे में details चाहिए।",
      "व्हॉट्सऐप पर मैसेज करें": "नमस्ते अंजू जी! मैं Ahinsa Foundation से जुड़ना चाहता/चाहती हूं।"
    }
  }
};

const originalCopy = {
  captured: false,
  title: "",
  description: "",
  text: new Map(),
  html: new Map(),
  inline: new Map(),
  attrs: new Map(),
  chakra: []
};

/* ---------- progressive enhancement flag ---------- */
document.documentElement.classList.add("js");

document.addEventListener("DOMContentLoaded", async () => {
  await loadEditableContent();
  applyEditableImages();
  renderVideos();
  renderReviews();
  renderSocials();
  setLocationAndYear();
  initLanguage();
  wireWhatsApp();
  initNav();
  initReveal();
  initParallax();
  initCounters();
  initFigure();
  initChakras();
  initReels();
});

/* ---------- Editable content ---------- */
function cloneContent(content) {
  return JSON.parse(JSON.stringify(content));
}

async function loadEditableContent() {
  let loaded = {};
  try {
    const response = await fetch(CONFIG.contentPath, { cache: "no-store" });
    if (response.ok) loaded = await response.json();
  } catch (error) {
    loaded = {};
  }

  editableContent = {
    ...cloneContent(DEFAULT_EDITABLE_CONTENT),
    ...loaded,
    images: {
      ...DEFAULT_EDITABLE_CONTENT.images,
      ...(loaded.images || {})
    },
    videos: Array.isArray(loaded.videos) ? loaded.videos : DEFAULT_EDITABLE_CONTENT.videos,
    reviews: Array.isArray(loaded.reviews) ? loaded.reviews : DEFAULT_EDITABLE_CONTENT.reviews
  };

  CONFIG.whatsappNumber = editableContent.whatsappNumber || CONFIG.whatsappNumber;
  CONFIG.whatsappMessage = editableContent.whatsappMessage || CONFIG.whatsappMessage;
}

function applyEditableImages() {
  const images = editableContent.images || {};
  Object.entries(images).forEach(([key, src]) => {
    if (!src) return;
    document.querySelectorAll(`[data-content-image="${key}"]`).forEach((img) => {
      img.setAttribute("src", normalizeAssetPath(src));
    });
  });

  const hero = images.hero ? absoluteAssetUrl(images.hero) : "";
  if (!hero) return;
  document.querySelectorAll('meta[property="og:image"], meta[name="twitter:image"]').forEach((meta) => {
    meta.setAttribute("content", hero);
  });
}

function normalizeAssetPath(src) {
  if (!src) return "";
  if (/^(https?:)?\/\//i.test(src) || src.startsWith("data:")) return src;
  return src.replace(/^\/+/, "");
}

function absoluteAssetUrl(src) {
  try {
    return new URL(normalizeAssetPath(src), window.location.href).href;
  } catch (error) {
    return normalizeAssetPath(src);
  }
}

function renderVideos() {
  const section = document.getElementById("watch");
  const rail = document.getElementById("reelsRail");
  if (!section || !rail) return;

  const videos = (editableContent.videos || [])
    .map((video) => {
      const url = typeof video === "string" ? video : video && video.url;
      const id = getYouTubeId(url || "");
      return id ? { id } : null;
    })
    .filter(Boolean);

  section.hidden = videos.length === 0;
  rail.innerHTML = videos
    .map(({ id }) => {
      const thumb = `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;
      return `<article class="reel" data-id="${escapeAttr(id)}" role="button" tabindex="0" aria-label="Play Reiki video">
        <div class="reel__media">
          <img src="${thumb}" alt="Reiki healing video thumbnail" loading="lazy" />
          <span class="reel__play" aria-hidden="true"><svg viewBox="0 0 24 24" width="26" height="26"><path fill="currentColor" d="M8 5v14l11-7z"/></svg></span>
        </div>
      </article>`;
    })
    .join("");

  updateReelArrows();
}

function renderReviews() {
  const section = document.getElementById("voices");
  const track = document.getElementById("carouselTrack");
  if (!section || !track) return;

  const reviews = (editableContent.reviews || []).filter((review) => review && (review.text || review.textHi));
  section.hidden = reviews.length === 0;
  track.innerHTML = reviews
    .map((review) => {
      const text = currentLanguage === "hi" ? review.textHi || review.text || "" : review.text || review.textHi || "";
      const name = review.name || "Ahinsa Foundation";
      const city = review.city || "";
      return `<figure class="quote">
        <span class="quote__mark" aria-hidden="true">&ldquo;</span>
        <blockquote>${escapeHtml(text)}</blockquote>
        <figcaption><span class="quote__avatar">${escapeHtml(getInitials(name))}</span><span><strong>${escapeHtml(name)}</strong>${escapeHtml(city)}</span></figcaption>
      </figure>`;
    })
    .join("");
}

function getYouTubeId(url) {
  const value = String(url || "").trim();
  if (!value) return "";
  try {
    const parsed = new URL(value);
    if (parsed.hostname.includes("youtu.be")) return cleanYouTubeId(parsed.pathname.split("/").filter(Boolean)[0]);
    const v = parsed.searchParams.get("v");
    if (v) return cleanYouTubeId(v);
    const parts = parsed.pathname.split("/").filter(Boolean);
    const marker = parts.findIndex((part) => ["embed", "shorts", "live"].includes(part));
    if (marker >= 0) return cleanYouTubeId(parts[marker + 1]);
  } catch (error) {
    // Fall back to the regex below for pasted IDs or unusual URL shapes.
  }
  const match = value.match(/(?:v=|youtu\.be\/|embed\/|shorts\/|live\/)?([A-Za-z0-9_-]{11})/);
  return match ? cleanYouTubeId(match[1]) : "";
}

function cleanYouTubeId(id) {
  const match = String(id || "").match(/[A-Za-z0-9_-]{11}/);
  return match ? match[0] : "";
}

function getInitials(name) {
  const words = String(name || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  return (words[0]?.[0] || "A") + (words[1]?.[0] || "F");
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function escapeAttr(value) {
  return escapeHtml(value).replace(/`/g, "&#096;");
}

/* ---------- WhatsApp links ---------- */
function wireWhatsApp() {
  const base = "https://wa.me/" + CONFIG.whatsappNumber.replace(/\D/g, "");
  // a relevant opening message per button (matched by its visible text);
  // class cards override with a data-wa-msg attribute.
  const hindi = currentLanguage === "hi";
  const byText = hindi ? HINDI_COPY.wa.byText : {
    "begin your healing": "Hi! I just visited your Ahinsa Foundation website and I'd love to learn more about Reiki healing.",
    "book your session": "Hi! I'd like to book a Reiki healing session with Mrs. Anju.",
    "speak with mrs. anju on whatsapp": "Hi! I came across your Ahinsa Foundation website and I'd like to know more about Reiki healing.",
    "begin the journey": "Hi! I visited your website and I'd love to learn how to become a Reiki Grand Master.",
    "ask about classes": "Hi! I'd like to learn more about your Reiki classes."
  };
  document.querySelectorAll(".js-wa").forEach((a) => {
    const key = (a.textContent || "").trim().toLowerCase().replace(/\s+/g, " ");
    const msg = a.getAttribute("data-wa-msg") || byText[key] || (hindi ? HINDI_COPY.wa.default : CONFIG.whatsappMessage);
    a.setAttribute("href", base + "?text=" + encodeURIComponent(msg));
    a.setAttribute("target", "_blank");
    a.setAttribute("rel", "noopener");
  });
}

/* ---------- Social icons ---------- */
function renderSocials() {
  const icons = {
    instagram: '<svg viewBox="0 0 24 24" width="20" height="20"><g fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none"/></g></svg>',
    facebook: '<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M14 9h3l.5-3H14V4.5c0-.9.3-1.5 1.6-1.5H17V.3C16.7.2 15.6 0 14.3 0 11.7 0 10 1.6 10 4.2V6H7v3h3v9h4z"/></svg>',
    youtube: '<svg viewBox="0 0 24 24" width="20" height="20"><g fill="none" stroke="currentColor" stroke-width="1.7"><rect x="2.5" y="6" width="19" height="12" rx="4"/><path d="M10 9.3l5.4 2.7-5.4 2.7z" fill="currentColor" stroke="none"/></g></svg>',
    email: '<svg viewBox="0 0 24 24" width="20" height="20"><g fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="M4 7l8 6 8-6"/></g></svg>'
  };
  const labels = { instagram: "Instagram", facebook: "Facebook", youtube: "YouTube", email: "Email" };

  const links = [];
  Object.keys(icons).forEach((key) => {
    let url = CONFIG.social[key];
    if (!url) return;
    if (key === "email") url = "mailto:" + url;
    links.push(
      `<a href="${url}" aria-label="${labels[key]}" ${key !== "email" ? 'target="_blank" rel="noopener"' : ""}>${icons[key]}</a>`
    );
  });

  const html = links.join("");
  ["socials", "socialsFooter", "socialsNav", "socialsMenu"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html || "";
  });
}

/* ---------- Location + year ---------- */
function setLocationAndYear() {
  const location = currentLanguage === "hi" ? HINDI_COPY.location : CONFIG.location;
  document.querySelectorAll(".js-location").forEach((el) => (el.textContent = location));
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
}

/* ---------- Language switch ---------- */
function initLanguage() {
  captureOriginalCopy();

  const params = new URLSearchParams(window.location.search);
  const urlLang = params.get("lang");
  const saved = readSavedLanguage();
  const phoneLanguage = (((navigator.languages && navigator.languages[0]) || navigator.language || "")).toLowerCase();
  const detected = "en";
  const initial = isSupportedLanguage(urlLang) ? urlLang : isSupportedLanguage(saved) ? saved : detected;

  applyLanguage(initial, false);

  document.querySelectorAll("[data-lang-option]").forEach((button) => {
    button.addEventListener("click", () => {
      const lang = button.dataset.langOption;
      if (!isSupportedLanguage(lang)) return;
      applyLanguage(lang, true);
    });
  });
}

function isSupportedLanguage(lang) {
  return lang === "en" || lang === "hi";
}

function captureOriginalCopy() {
  if (originalCopy.captured) return;
  originalCopy.captured = true;
  originalCopy.title = document.title;
  const description = document.querySelector('meta[name="description"]');
  originalCopy.description = description ? description.getAttribute("content") || "" : "";

  Object.keys(HINDI_COPY.text).forEach((selector) => {
    originalCopy.text.set(selector, [...document.querySelectorAll(selector)].map((el) => el.textContent));
  });
  Object.keys(HINDI_COPY.html).forEach((selector) => {
    originalCopy.html.set(selector, [...document.querySelectorAll(selector)].map((el) => el.innerHTML));
  });
  Object.keys(HINDI_COPY.inline).forEach((selector) => {
    originalCopy.inline.set(selector, [...document.querySelectorAll(selector)].map((el) => getInlineLabel(el)));
  });
  Object.keys(HINDI_COPY.attrs).forEach((selector) => {
    const attrs = HINDI_COPY.attrs[selector];
    originalCopy.attrs.set(
      selector,
      [...document.querySelectorAll(selector)].map((el) => {
        const values = {};
        Object.keys(attrs).forEach((attr) => (values[attr] = el.getAttribute(attr)));
        return values;
      })
    );
  });
  originalCopy.chakra = [...document.querySelectorAll(".figure__node")].map((node) => ({
    en: node.dataset.en || "",
    meaning: node.dataset.meaning || "",
    aria: node.getAttribute("aria-label") || ""
  }));
}

function applyLanguage(lang, remember) {
  currentLanguage = lang;
  if (remember) saveLanguage(lang);

  restoreOriginalCopy();

  document.documentElement.lang = lang === "hi" ? "hi-IN" : "en";
  document.documentElement.dataset.lang = lang;

  if (lang === "hi") {
    applyHindiCopy();
  }

  setLocationAndYear();
  updateLanguageButtons(lang);
  refreshFigureReadout();
  renderReviews();
  initCarousel();
  wireWhatsApp();
}

function readSavedLanguage() {
  try {
    return localStorage.getItem(LANGUAGE_STORAGE_KEY);
  } catch (error) {
    return null;
  }
}

function saveLanguage(lang) {
  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
  } catch (error) {
    // The toggle should still work if a browser blocks local storage.
  }
}

function restoreOriginalCopy() {
  document.title = originalCopy.title;
  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute("content", originalCopy.description);

  originalCopy.text.forEach((values, selector) => {
    document.querySelectorAll(selector).forEach((el, i) => {
      if (values[i] !== undefined) el.textContent = values[i];
    });
  });
  originalCopy.html.forEach((values, selector) => {
    document.querySelectorAll(selector).forEach((el, i) => {
      if (values[i] !== undefined) el.innerHTML = values[i];
    });
  });
  originalCopy.inline.forEach((values, selector) => {
    document.querySelectorAll(selector).forEach((el, i) => {
      if (values[i] !== undefined) setInlineLabel(el, values[i]);
    });
  });
  originalCopy.attrs.forEach((values, selector) => {
    document.querySelectorAll(selector).forEach((el, i) => {
      const attrs = values[i];
      if (!attrs) return;
      Object.keys(attrs).forEach((attr) => {
        if (attrs[attr] === null) el.removeAttribute(attr);
        else el.setAttribute(attr, attrs[attr]);
      });
    });
  });
  document.querySelectorAll(".figure__node").forEach((node, i) => {
    const data = originalCopy.chakra[i];
    if (!data) return;
    node.dataset.en = data.en;
    node.dataset.meaning = data.meaning;
    node.setAttribute("aria-label", data.aria);
  });
}

function applyHindiCopy() {
  document.title = HINDI_COPY.meta.title;
  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute("content", HINDI_COPY.meta.description);

  Object.entries(HINDI_COPY.text).forEach(([selector, value]) => {
    document.querySelectorAll(selector).forEach((el) => (el.textContent = value));
  });
  Object.entries(HINDI_COPY.html).forEach(([selector, value]) => {
    document.querySelectorAll(selector).forEach((el) => (el.innerHTML = value));
  });
  Object.entries(HINDI_COPY.inline).forEach(([selector, value]) => {
    document.querySelectorAll(selector).forEach((el) => setInlineLabel(el, value));
  });
  Object.entries(HINDI_COPY.attrs).forEach(([selector, attrs]) => {
    document.querySelectorAll(selector).forEach((el) => {
      Object.entries(attrs).forEach(([attr, value]) => el.setAttribute(attr, value));
    });
  });
  document.querySelectorAll(".figure__node").forEach((node, i) => {
    const data = HINDI_COPY.chakra[i];
    if (!data) return;
    node.dataset.en = data.en;
    node.dataset.meaning = data.meaning;
    node.setAttribute("aria-label", data.aria);
  });
}

function updateLanguageButtons(lang) {
  document.querySelectorAll("[data-lang-option]").forEach((button) => {
    const active = button.dataset.langOption === lang;
    button.setAttribute("aria-pressed", String(active));
  });
}

function getInlineLabel(el) {
  return [...el.childNodes]
    .filter((node) => node.nodeType === Node.TEXT_NODE)
    .map((node) => node.textContent.trim())
    .filter(Boolean)
    .join(" ");
}

function setInlineLabel(el, value) {
  const textNode = [...el.childNodes].find((node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
  if (textNode) {
    textNode.textContent = " " + value + " ";
  } else {
    el.append(" " + value);
  }
}

function refreshFigureReadout() {
  const active = document.querySelector(".figure__node.active") || document.querySelector(".figure__node[data-name='Anahata']");
  const readout = document.getElementById("figureReadout");
  if (!active || !readout) return;
  readout.innerHTML =
    '<strong style="color:' + active.dataset.c + '">' +
    active.dataset.name + "</strong> · " + active.dataset.en +
    ' <span class="figure__readout-meaning">· ' + active.dataset.meaning + "</span>";
}

/* ---------- Sticky nav + mobile menu ---------- */
function initNav() {
  const nav = document.getElementById("nav");
  const burger = document.getElementById("burger");
  const menu = document.getElementById("mobileMenu");

  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 30);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  if (burger && menu) {
    const toggle = (open) => {
      const isOpen = open ?? !menu.classList.contains("open");
      menu.classList.toggle("open", isOpen);
      burger.setAttribute("aria-expanded", String(isOpen));
      menu.setAttribute("aria-hidden", String(!isOpen));
      document.body.style.overflow = isOpen ? "hidden" : "";
    };
    burger.addEventListener("click", () => toggle());
    menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => toggle(false)));
  }
}

/* ---------- Scroll reveal ---------- */
function initReveal() {
  const els = document.querySelectorAll("[data-reveal]");
  if (!("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("in"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          // gentle stagger for grouped siblings
          const delay = e.target.dataset.delay || (i % 4) * 80;
          e.target.style.transitionDelay = delay + "ms";
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );
  els.forEach((el) => io.observe(el));
}

/* ---------- Parallax ---------- */
function initParallax() {
  const items = [...document.querySelectorAll(".parallax-img")];
  if (!items.length || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  let ticking = false;
  const update = () => {
    const vh = window.innerHeight;
    items.forEach((img) => {
      const r = img.getBoundingClientRect();
      if (r.bottom < 0 || r.top > vh) return;
      const speed = parseFloat(img.dataset.speed || "0.05");
      const offset = (r.top + r.height / 2 - vh / 2) * -speed * 2;
      img.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0) scale(1.06)`;
    });
    ticking = false;
  };
  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    },
    { passive: true }
  );
  update();
}

/* ---------- Count-up stats ---------- */
function initCounters() {
  const nums = document.querySelectorAll("[data-count]");
  if (!nums.length) return;
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target;
        const target = parseInt(el.dataset.count, 10);
        const suffix = el.dataset.suffix || "";
        const dur = 1700;
        const start = performance.now();
        const tick = (now) => {
          const p = Math.min((now - start) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          const val = Math.floor(eased * target);
          el.textContent = val.toLocaleString("en-IN") + suffix;
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.unobserve(el);
      });
    },
    { threshold: 0.5 }
  );
  nums.forEach((n) => io.observe(n));
}

/* ---------- Interactive chakra figure (replaces the old tree) ---------- */
function initFigure() {
  const fig = document.querySelector(".figure");
  if (!fig) return;
  const nodes = [...fig.querySelectorAll(".figure__node")];
  const readout = document.getElementById("figureReadout");

  const show = (n) => {
    nodes.forEach((x) => x.classList.remove("active"));
    n.classList.add("active");
    if (readout) {
      readout.innerHTML =
        '<strong style="color:' + n.dataset.c + '">' +
        n.dataset.name + "</strong> · " + n.dataset.en +
        ' <span class="figure__readout-meaning">· ' + n.dataset.meaning + "</span>";
    }
  };

  nodes.forEach((n) => {
    n.addEventListener("mouseenter", () => show(n));
    n.addEventListener("focus", () => show(n));
    n.addEventListener("click", () => show(n));
  });

  // energy rises from root to crown when the figure scrolls into view
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          fig.classList.add("lit");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.3 }
  );
  io.observe(fig);

  // default highlight: heart
  const heart = nodes.find((n) => n.dataset.name === "Anahata" || n.dataset.en === "Heart");
  if (heart) show(heart);
}

/* ---------- Interactive chakras ---------- */
function initChakras() {
  const rail = document.getElementById("chakraRail");
  const info = document.getElementById("chakraInfo");
  if (!rail || !info) return;

  const items = [...rail.querySelectorAll(".chakra")];
  const setActive = (li) => {
    items.forEach((i) => i.classList.remove("active"));
    li.classList.add("active");
    info.classList.add("swap");
    setTimeout(() => {
      info.querySelector(".chakra-info__sanskrit").textContent = li.dataset.name;
      info.querySelector(".chakra-info__en").textContent = li.dataset.en + " Chakra";
      info.querySelector(".chakra-info__meaning").textContent = li.dataset.meaning;
      info.style.setProperty("color", "");
      info.classList.remove("swap");
    }, 220);
  };

  items.forEach((li) => {
    const btn = li.querySelector("button");
    btn.addEventListener("click", () => setActive(li));
    btn.addEventListener("mouseenter", () => setActive(li));
  });

  // default highlight: heart
  const heart = items.find((i) => i.dataset.en === "Heart");
  if (heart) heart.classList.add("active");
}

/* ---------- Testimonials carousel ---------- */
function initCarousel() {
  const track = document.getElementById("carouselTrack");
  const dotsWrap = document.getElementById("carouselDots");
  if (!track) return;

  clearInterval(carouselTimer);
  if (dotsWrap) dotsWrap.innerHTML = "";

  const prev = resetButton("prevBtn");
  const next = resetButton("nextBtn");
  const nav = document.querySelector(".carousel__nav");
  const slides = [...track.children];
  if (!slides.length) return;
  let idx = 0;
  if (nav) nav.hidden = slides.length <= 1;

  // dots
  slides.forEach((_, i) => {
    const b = document.createElement("button");
    b.setAttribute("aria-label", "Go to testimonial " + (i + 1));
    b.addEventListener("click", () => go(i));
    dotsWrap && dotsWrap.appendChild(b);
  });
  const dots = dotsWrap ? [...dotsWrap.children] : [];

  const render = () => {
    track.style.transform = `translateX(-${idx * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle("active", i === idx));
  };
  const go = (i) => {
    idx = (i + slides.length) % slides.length;
    render();
    restart();
  };
  const start = () => {
    if (slides.length > 1) carouselTimer = setInterval(() => go(idx + 1), 6000);
  };
  const restart = () => {
    clearInterval(carouselTimer);
    start();
  };

  prev && prev.addEventListener("click", () => go(idx - 1));
  next && next.addEventListener("click", () => go(idx + 1));

  // pause on hover
  const car = document.getElementById("carousel");
  if (!car) return;
  car.onmouseenter = () => clearInterval(carouselTimer);
  car.onmouseleave = start;

  // swipe
  let x0 = null;
  car.ontouchstart = (e) => (x0 = e.touches[0].clientX);
  car.ontouchend = (e) => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 40) go(idx + (dx < 0 ? 1 : -1));
    x0 = null;
  };

  render();
  start();
}

function resetButton(id) {
  const button = document.getElementById(id);
  if (!button || !button.parentNode) return button;
  const clone = button.cloneNode(true);
  button.parentNode.replaceChild(clone, button);
  return clone;
}

/* ---------- Videos / Reels carousel ---------- */
function initReels() {
  const rail = document.getElementById("reelsRail");
  if (!rail) return;
  rail.querySelectorAll(".reel").forEach((card) => {
    const play = () => {
      const id = card.dataset.id;
      const media = card.querySelector(".reel__media");
      if (!id || !media || media.querySelector("iframe")) return;
      media.innerHTML =
        '<iframe src="https://www.youtube.com/embed/' + id +
        '?autoplay=1&playsinline=1&rel=0" title="Reiki video" allow="autoplay; encrypted-media; fullscreen; picture-in-picture" allowfullscreen></iframe>';
    };
    card.addEventListener("click", play);
    card.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      play();
    });
  });
  const prev = document.getElementById("reelsPrev");
  const next = document.getElementById("reelsNext");
  const step = () => { const c = rail.querySelector(".reel"); return c ? c.getBoundingClientRect().width + 22 : 262; };
  prev && prev.addEventListener("click", () => rail.scrollBy({ left: -step(), behavior: "smooth" }));
  next && next.addEventListener("click", () => rail.scrollBy({ left: step(), behavior: "smooth" }));
}

function updateReelArrows(){
  const rail=document.getElementById("reelsRail");
  const wrap=document.querySelector(".reels__wrap");
  if(!rail||!wrap) return;
  wrap.classList.toggle("reels--no-overflow", rail.scrollWidth <= rail.clientWidth + 4);
}
window.addEventListener("load", updateReelArrows);
window.addEventListener("resize", updateReelArrows);
