// Text content for language switching
const textContent = {
    en: {
        // Navigation section
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-skills': 'Skills',
        'nav-portfolio': 'Portfolio',
        'nav-contact': 'Contact',
        
        // Hero section
        'hero-title': 'Abdelkader Mohamed',
        'hero-subtitle': 'Social Media Specialist',
        'hero-description': 'Driving brand growth through data-driven social media strategies. With 2 years of experience transforming digital presence for diverse brands across multiple platforms.',
        'work-btn': 'View My Work',
        'contact-btn': 'Contact Me',
        
        // About section
        'about-title': 'About Me',
        'about-subtitle': 'Social Media Specialist with Technical Expertise',
        'about-description': "I'm a passionate Social Media Specialist with 2 years of experience in creating and executing successful social media strategies. My unique combination of marketing knowledge and technical background allows me to bridge the gap between creative content and data-driven decision making.",
        'about-description2': 'I specialize in understanding platform algorithms, optimizing content for maximum engagement, and leveraging analytics to drive brand growth. My approach combines creative storytelling with measurable results.',
        'location-text': 'Kafr El-Sheikh, Egypt',
        'experience-text': '2+ Years Experience',
        'edu1-title': 'Faculty of Computers & Information',
        'edu1-desc': "Bachelor's Degree in Information Systems with focus on digital technologies and data analysis.",
        'edu2-title': 'Information Technology Institute (ITI)',
        'edu2-desc': 'Intensive 120 hours program in Digital Marketing & Social Media with practical projects and industry training.',
        
        // Skills section
        'skills-title': 'My Skills',
        'skills-subtitle': 'Combining marketing creativity with technical expertise',
        'skill1-title': 'Social Media Strategy',
        'skill1-desc': 'Developing comprehensive strategies aligned with business goals and target audience.',
        'skill2-title': 'Content Planning & Creation',
        'skill2-desc': 'Creating engaging content calendars and producing multimedia content.',
        'skill3-title': 'Paid Ads Campaigns',
        'skill3-desc': 'Managing and optimizing paid social campaigns across multiple platforms.',
        'skill4-title': 'Analytics & Reporting',
        'skill4-desc': 'Tracking performance metrics and providing actionable insights.',
        'skill5-title': 'Branding',
        'skill5-desc': 'Developing consistent brand voice and visual identity across platforms.',
        'skill6-title': 'Community Management',
        'skill6-desc': 'Engaging with audiences and building loyal online communities.',
        
        // Portfolio section
        'portfolio-title': 'My Work',
        'portfolio-subtitle': 'Recent projects and campaigns I\'ve worked on',
        'filter-all': 'All',
        'filter-ecommerce': 'E-commerce',
        'filter-medical': 'Medical',
        'filter-education': 'Education',
        'filter-tech': 'Technology',
        'filter-gaming': 'Gaming',
        'filter-marketing': 'Marketing',
        'filter-fashion': 'Fashion',
        'filter-food': 'Food & Beverage',
        'modal-platforms-title': 'Platforms',
        'modal-results-title': 'Results',
        
        // Contact section
        'contact-title': 'Get In Touch',
        'contact-subtitle': 'Let\'s discuss how we can elevate your social media presence',
        'email-btn': 'Send Email',
        
        // Footer
        'quick-links-title': 'Quick Links',
        'footer-home': 'Home',
        'footer-about': 'About',
        'footer-skills': 'Skills',
        'footer-portfolio': 'Portfolio',
        'footer-contact': 'Contact',
        'contact-info-title': 'Contact Info',
        'copyright-text': '© 2026 Abdelkader Mohamed. All rights reserved.',
        
        // Modal
        'modal-close': 'Close'
    },
    ar: {
        // Navigation section
        'nav-home': 'الرئيسية',
        'nav-about': 'عني',
        'nav-skills': 'المهارات',
        'nav-portfolio': 'أعمالي',
        'nav-contact': 'تواصل',
        
        // Hero section
        'hero-title': 'عبدالقادر محمد',
        'hero-subtitle': 'أخصائي وسائل التواصل الاجتماعي',
        'hero-description': 'دفع نمو العلامات التجارية من خلال استراتيجيات وسائل التواصل الاجتماعي القائمة على البيانات. مع خبرة عامين في تحويل الوجود الرقمي للعلامات التجارية المتنوعة عبر منصات متعددة.',
        'work-btn': 'عرض أعمالي',
        'contact-btn': 'اتصل بي',
        
        // About section
        'about-title': 'معلومات عني',
        'about-subtitle': 'أخصائي وسائل التواصل الاجتماعي بخلفية تقنية',
        'about-description': 'أنا أخصائي وسائل التواصل الاجتماعي متحمس بخبرة عامين في إنشاء وتنفيذ استراتيجيات وسائل التواصل الاجتماعي الناجحة. الجمع الفريد بين معرفتي التسويقية وخلفيتي التقنية يسمح لي بسد الفجوة بين المحتوى الإبداعي واتخاذ القرارات القائمة على البيانات.',
        'about-description2': 'أتخصص في فهم خوارزميات المنصة، وتحسين المحتوى لأقصى قدر من المشاركة، والاستفادة من التحليلات لدفع نمو العلامة التجارية. يجمع نهجي بين سرد القصص الإبداعية والنتائج القابلة للقياس.',
        'location-text': 'كفر الشيخ، مصر',
        'experience-text': 'أكثر من سنتين خبرة',
        'edu1-title': 'كلية الحاسبات والمعلومات',
        'edu1-desc': 'بكالوريوس في نظم المعلومات مع التركيز على التقنيات الرقمية وتحليل البيانات.',
        'edu2-title': 'معهد تكنولوجيا المعلومات (ITI)',
        'edu2-desc': 'برنامج مكثف لمدة 120 ساعة في التسويق الرقمي ووسائل التواصل الاجتماعي مع مشاريع عملية وتدريب صناعي.',
        
        // Skills section
        'skills-title': 'مهاراتي',
        'skills-subtitle': 'الجمع بين الإبداع التسويقي والخبرة التقنية',
        'skill1-title': 'استراتيجية وسائل التواصل الاجتماعي',
        'skill1-desc': 'تطوير استراتيجيات شاملة تتماشى مع أهداف العمل والجمهور المستهدف.',
        'skill2-title': 'تخطيط المحتوى وإنشاؤه',
        'skill2-desc': 'إنشاء تقويمات محتوى جذابة وإنتاج محتوى وسائط متعددة.',
        'skill3-title': 'حملات الإعلانات المدفوعة',
        'skill3-desc': 'إدارة وتحسين حملات التواصل الاجتماعي المدفوعة عبر منصات متعددة.',
        'skill4-title': 'التحليلات وإعداد التقارير',
        'skill4-desc': 'تتبع مقاييس الأداء وتقديم رؤى قابلة للتنفيذ.',
        'skill5-title': 'العلامة التجارية',
        'skill5-desc': 'تطوير صوت علامة تجارية متناسق وهوية بصرية عبر المنصات.',
        'skill6-title': 'إدارة المجتمع',
        'skill6-desc': 'الانخراط مع الجماهير وبناء مجتمعات مخلصة عبر الإنترنت.',
        
        // Portfolio section
        'portfolio-title': 'أعمالي',
        'portfolio-subtitle': 'المشاريع والحملات الحديثة التي عملت عليها',
        'filter-all': 'الكل',
        'filter-ecommerce': 'التجارة الإلكترونية',
        'filter-medical': 'طبي',
        'filter-education': 'تعليم',
        'filter-tech': 'تكنولوجيا',
        'filter-gaming': 'ألعاب',
        'filter-marketing': 'تسويق',
        'filter-fashion': 'أزياء',
        'filter-food': 'الطعام والمشروبات',
        'modal-platforms-title': 'المنصات',
        'modal-results-title': 'النتائج',
        
        // Contact section
        'contact-title': 'تواصل معي',
        'contact-subtitle': 'دعنا نناقش كيف يمكننا رفع مستوى وجودك على وسائل التواصل الاجتماعي',
        'email-btn': 'إرسال بريد إلكتروني',
        
        // Footer
        'quick-links-title': 'روابط سريعة',
        'footer-home': 'الرئيسية',
        'footer-about': 'عنّي',
        'footer-skills': 'المهارات',
        'footer-portfolio': 'أعمالي',
        'footer-contact': 'تواصل',
        'contact-info-title': 'معلومات الاتصال',
        'copyright-text': '© 2026 عبد القادر محمد. جميع الحقوق محفوظة.',
        
        // Modal
        'modal-close': 'إغلاق'
    }
};

// Portfolio data with images and videos - Bilingual
const portfolioData = [
    {
        id: 1,
        title: { en: 'Nukhbat Al-Atour', ar: 'نخبة العطور' },
        industry: { en: 'E-commerce', ar: 'التجارة الإلكترونية' },
        description: {
            en: 'Led and executed a high-impact social media strategy for Nukhbat Al-Atour, focusing on premium visual storytelling, short-form video content, and influencer collaborations to strengthen brand positioning and drive sales.',
            ar: 'قيادة وتنفيذ استراتيجية تسويق رقمي عالية التأثير لبراند نخبة العطور، مع التركيز على المحتوى البصري الاحترافي، فيديوهات الريلز القصيرة، والتعاون مع المؤثرين لتعزيز مكانة العلامة التجارية وزيادة المبيعات.'
        },
        platforms: { 
            en: 'Facebook, Instagram, TikTok', 
            ar: 'فيسبوك، انستغرام، تيك توك' 
        },
        results: { 
            en: '2M+ total views across Facebook, Instagram, and TikTok, significant reach expansion, strong brand awareness growth, successful audience acquisition, 35% increase in website traffic, and a 20% conversion rate. (Highlights from our work with Nukhbat Al-Atour)',
            ar: 'أكثر من 2 مليون مشاهدة عبر فيسبوك وإنستغرام وتيك توك، توسع قوي في نطاق الوصول، زيادة ملحوظة في الوعي بالعلامة التجارية، اكتساب جمهور جديد بنجاح، زيادة 35٪ في زيارات الموقع، ومعدل تحويل 20٪. (أبرز نتائج أعمالنا مع براند نخبة العطور)'
        },
        color: '#F59E0B',
        icon: 'fas fa-crown',
        media: [
            { type: 'image', src: './assets/brand5/N.jpg' },
            { type: 'video', src: './assets/brand5/v2.mp4', thumbnail: './assets/brand5/cv2.png' },
            { type: 'video', src: './assets/brand5/v1.mp4', thumbnail: './assets/brand5/cv1.png' },
            { type: 'video', src: './assets/brand5/v3.mp4', thumbnail: './assets/brand5/cv3.png' },
            { type: 'video', src: './assets/brand5/v4.mp4', thumbnail: './assets/brand5/cv4.png' },
        ]
    },
    {
        id: 2,
        title: { en: 'Ramadan Hweedy', ar: 'رمضان هويدي' },
        industry: { en: 'Medical Content', ar: 'المجال الطبي' },
        description: {
            en: 'Collaborated with content creator Ramadan Howaidi to develop a comprehensive content strategy, covering video production, design, and scriptwriting, aimed at maximizing audience engagement across multiple platforms.',
            ar: 'التعاون مع منشئ المحتوى رمضان هويدي لتطوير استراتيجية محتوى شاملة، تشمل إنتاج الفيديو، التصميم، وكتابة السكريبت، بهدف زيادة التفاعل والجمهور عبر منصات متعددة.'
        },
        platforms: { en: 'Facebook, Instagram, YouTube, TikTok', ar: 'فيسبوك، انستغرام، يوتيوب، تيك توك' },
        results: {
            en: 'Achieved over 2M total views across Facebook, Instagram, YouTube, and TikTok in the medical field. The work included full video production, creative design, and scriptwriting. These are selected examples of our collaborations with Ramadan Howaidi.',
            ar: 'تحقيق أكثر من 2 مليون مشاهدة إجمالية عبر فيسبوك، انستغرام، يوتيوب، وتيك توك في المجال الطبي. العمل شمل إنتاج الفيديو بالكامل، التصميم الإبداعي، وكتابة السكريبت. هذه بعض الأعمال المختارة من تعاوننا مع رمضان هويدي.'
        },
        color: '#F43F5E',
        icon: 'fas fa-video',
        media: [
            { type: 'image', src: './assets/brand8/mainR.jpeg' },
            { type: 'image', src: './assets/brand8/r1.jpeg' },
            { type: 'image', src: './assets/brand8/r2.jpeg' },
            { type: 'image', src: './assets/brand8/r3.jpeg' },
            { type: 'image', src: './assets/brand8/r4.jpeg' },
            { type: 'image', src: './assets/brand8/r5.jpeg' },
            { type: 'image', src: './assets/brand8/r6.jpeg' },
            { type: 'image', src: './assets/brand8/r7.jpeg' },
            { type: 'image', src: './assets/brand8/r8.jpeg' },
            { type: 'image', src: './assets/brand8/r9.jpeg' },
            { type: 'image', src: './assets/brand8/r10.jpeg' },
            { type: 'image', src: './assets/brand8/r11.jpeg' },
            { type: 'video', src: './assets/brand8/v1.mp4', thumbnail: './assets/brand8/mainR.jpeg' },
            { type: 'video', src: './assets/brand8/v2.mp4', thumbnail: './assets/brand8/mainR.jpeg' },
            { type: 'video', src: './assets/brand8/v3.mp4', thumbnail: './assets/brand8/mainR.jpeg' },
            { type: 'video', src: './assets/brand8/v4.mp4', thumbnail: './assets/brand8/mainR.jpeg' },

        ]
    },
    {
        id: 3,
        title: { en: 'Be Well', ar: 'بي ويل' },
        industry: { en: 'Medical & Physical Therapy', ar: 'طبي وعلاج طبيعي' },
        description: {
            en: 'Led the long-term management and growth of Be Well’s social media presence, focusing on brand identity enhancement, audience awareness, and trust-building. Developed a clear content roadmap and data-driven strategy that optimized performance, strengthened brand positioning, and maximized audience engagement across platforms.',
            ar: 'قيادة وإدارة وتنمية التواجد الرقمي لمركز Be Well على وسائل التواصل الاجتماعي على المدى الطويل، مع التركيز على تحسين الهوية البصرية، رفع الوعي لدى الجمهور، وبناء الثقة. تم وضع خريطة طريق واضحة واستراتيجية محتوى قائمة على البيانات ساهمت في تحسين الأداء وتعزيز مكانة العلامة التجارية وزيادة التفاعل.'
        },
        platforms: { 
            en: 'Facebook, Instagram', 
            ar: 'فيسبوك، انستغرام' 
        },
        results: {
            en: 'Achieved more than 10× growth in page views and profile visits compared to the period before management, with over 5× increase in reach and engagement. Successfully improved brand identity, raised audience awareness, built trust with the target audience, and attracted a large new audience base. The showcased content represents selected highlights from our work with Be Well.',
            ar: 'تحقيق نمو تجاوز 10 أضعاف في عدد المشاهدات وزيارات الصفحة مقارنة بالفترة السابقة لإدارة الحساب، إلى جانب أكثر من 5 أضعاف في معدلات الوصول والتفاعل. تم تحسين الهوية البصرية، رفع الوعي بالعلامة التجارية، وبناء الثقة مع الجمهور المستهدف، مع اكتساب شريحة كبيرة من الجمهور الجديد. المعروض هنا نماذج مختارة من أعمالنا مع مركز Be Well.'
        },
        color: '#6C63FF',
        icon: 'fas fa-heartbeat',
        media: [
            { type: 'image', src: './assets/brand1/be-well.jpg' },
            { type: 'image', src: './assets/brand1/be-well1.jpg' },
            { type: 'image', src: './assets/brand1/be-well2.jpg' },
            { type: 'image', src: './assets/brand1/be-well3.jpg' },
            { type: 'image', src: './assets/brand1/be-well4.jpg' },
            { type: 'image', src: './assets/brand1/be-well5.jpg' },
            { type: 'image', src: './assets/brand1/be-well6.jpg' }
        ]
    },
    
    {
        id: 4,
        title: { en: 'Sigma Store', ar: 'سيجما ستور' },
        industry: { en: 'Gaming', ar: 'ألعاب' },
        description: {
            en: 'Created a content strategy and influencer partnerships for a gaming brand, focusing on driving sales, consistent target achievement, and increasing brand awareness across multiple platforms.',
            ar: 'إنشاء استراتيجية محتوى وشراكات مع المؤثرين لعلامة تجارية للألعاب، مع التركيز على زيادة المبيعات وتحقيق الأهداف المستمرة، بالإضافة إلى رفع الوعي بالعلامة التجارية عبر منصات متعددة.'
        },
        platforms: { en: 'Instagram, TikTok, Discord', ar: 'انستغرام، تيك توك، ديسكورد' },
        results: {
            en: 'Achieved 60% engagement increase, gained 15K new followers, and consistently met sales targets through strategic content planning and influencer collaborations. The showcased content highlights our effective approach to driving revenue and audience growth for Sigma Store.',
            ar: 'زيادة التفاعل بنسبة 60٪، واكتساب 15 ألف متابع جديد، مع تحقيق الأهداف البيعية بشكل مستمر من خلال التخطيط الاستراتيجي للمحتوى والتعاون مع المؤثرين. المعروض هنا يبرز أمثلة من أسلوبنا الفعّال في زيادة المبيعات ونمو الجمهور لسيجما ستور.'
        },
        color: '#FF6584',
        icon: 'fas fa-gamepad',
        media: [
            { type: 'image', src: './assets/brand2/ss-store.jpg' },
            { type: 'image', src: './assets/brand2/ss-store1.jpg' },
            { type: 'image', src: './assets/brand2/ss-store2.jpg' },
            { type: 'image', src: './assets/brand2/ss-store3.jpg' },
            { type: 'image', src: './assets/brand2/ss-store4.jpg' },
            { type: 'image', src: './assets/brand2/ss-store5.jpg' },
            { type: 'image', src: './assets/brand2/ss-store6.png' },
            { type: 'image', src: './assets/brand2/ss-store7.jpg' },
            { type: 'image', src: './assets/brand2/ss-store8.jpg' }
        ]
    },
    
    {
        id: 5,
        title: { en: 'Hydra Tech', ar: 'هايدرا تك' },
        industry: { en: 'Technology', ar: 'تكنولوجيا' },
        description: {
            en: 'Managed social media presence for a technology company, focusing on B2B content and thought leadership strategies, while building the brand’s visual identity from scratch.',
            ar: 'إدارة التواجد على وسائل التواصل الاجتماعي لشركة تكنولوجيا، مع التركيز على محتوى B2B واستراتيجيات القيادة الفكرية، وبناء الهوية البصرية للبراند من الصفر.'
        },
        platforms: { en: 'Facebook, Instagram, Twitter, TikTok', ar: 'فيسبوك، انستغرام، تويتر، تيك توك' },
        results: {
            en: 'Built the brand’s visual identity from scratch, enabling Hydra Tech to compete with other startups in Kafr El-Sheikh. Successfully reached clients and companies across Egypt, the Gulf, and Europe, delivering diverse solutions including websites, applications, and desktop software. Achieved 200% increase in leads and 150% follower growth, highlighting strong market impact and business reach.',
            ar: 'بناء الهوية البصرية للبراند من الصفر، مما مكّن هايدرا تك من المنافسة مع الشركات الناشئة الأخرى في نطاق كفر الشيخ. تم الوصول بنجاح إلى عملاء وشركات في مصر والخليج وأوروبا، وتقديم حلول متنوعة تشمل إنشاء مواقع ويب، تطبيقات موبايل، وبرمجيات سطح المكتب. تحقيق زيادة 200٪ في العملاء المحتملين ونمو 150٪ في المتابعين، مما يبرز التأثير القوي والوصول الفعّال في السوق.'
        },
        color: '#36D1DC',
        icon: 'fas fa-microchip',
        media: [
            { type: 'image', src: './assets/brand3/hydra.jpg' },
            { type: 'image', src: './assets/brand3/hydra1.jpg' },
            { type: 'image', src: './assets/brand3/hydra2.jpg' },
            { type: 'image', src: './assets/brand3/hydra3.jpg' },
            { type: 'image', src: './assets/brand3/hydra4.jpg' },
            { type: 'image', src: './assets/brand3/hydra5.jpg' },
            { type: 'image', src: './assets/brand3/hydra6.jpg' }
        ]
    },
    
    {
        id: 6,
        title: { en: 'LinkMarket', ar: 'لينك ماركت' },
        industry: { en: 'Marketing', ar: 'تسويق' },
        description: {
            en: 'Built social media presence from scratch for a marketing agency, positioning them as industry thought leaders.',
            ar: 'بناء تواجد على وسائل التواصل الاجتماعي من الصفر لوكالة تسويق، ووضعهم كقادة فكر في الصناعة.'
        },
        platforms: { en: 'Facebook, Instagram', ar: 'فيسبوك، انستغرام' },
        results: {
            en: 'Developed the brand’s visual identity and content strategy from scratch, increased audience awareness, and positioned LinkMarket as a competitive force in the marketing industry, leveraging their prior expertise and capabilities. Generated 500+ qualified leads and achieved 200% follower growth. These are selected examples of our work with LinkMarket across Facebook and Instagram.',
            ar: 'تطوير الهوية البصرية للبراند واستراتيجية المحتوى من الصفر، زيادة الوعي لدى الجمهور، وجعل لينك ماركت تنافس بقوة في مجال التسويق لما لها من خبرات وكفاءات سابقة. تم توليد أكثر من 500 عميل محتمل مؤهل، وتحقيق نمو 200٪ في المتابعين. هذه أمثلة مختارة من أعمالنا مع لينك ماركت على فيسبوك وانستغرام.'
        },
        color: '#10B981',
        icon: 'fas fa-chart-line',
        media: [
            { type: 'image', src: './assets/brand4/link.jpg' },
            { type: 'image', src: './assets/brand4/link1.jpg' },
            { type: 'image', src: './assets/brand4/link2.jpg' },
            { type: 'image', src: './assets/brand4/link3.jpg' },
            { type: 'image', src: './assets/brand4/link4.jpg' },
            { type: 'image', src: './assets/brand4/link5.jpg' },
            { type: 'image', src: './assets/brand4/link6.jpg' }
        ]
    },
       

    {
        id: 7,
        title: { en: 'Ghabour Academy', ar: 'غبور اكاديمي' },
        industry: { en: 'Education', ar: 'تعليم' },
        description: {
            en: 'Created a focused social media strategy for an educational platform specializing in mathematics, including short-form video content and student engagement campaigns.',
            ar: 'إنشاء استراتيجية مركزة لوسائل التواصل الاجتماعي لمنصة تعليمية متخصصة في مادة الرياضيات، مع إنتاج محتوى فيديو قصير وحملات تفاعل للطلاب.'
        },
        platforms: { en: 'Facebook, TikTok', ar: 'فيسبوك، تيك توك' },
        results: {
            en: 'Although the collaboration was short, it was an impactful and insightful journey within the mathematics education field. With only two videos published on Facebook and TikTok, we surpassed 90K total views, demonstrating strong audience interest and content effectiveness. These are selected examples from our work with Ghabour Academy.',
            ar: 'رغم أن فترة التعاون لم تكن طويلة، إلا أنها كانت رحلة مؤثرة أضافت لنا خبرة في المجال التعليمي وخاصة مادة الرياضيات. من خلال فيديوهين فقط على فيسبوك وتيك توك، تم كسر حاجز 90 ألف مشاهدة، مما يعكس قوة المحتوى واهتمام الجمهور. المعروض هنا أمثلة مختارة من أعمالنا مع غبور اكاديمي.'
        },
        color: '#8B5CF6',
        icon: 'fas fa-graduation-cap',
        media: [
            { type: 'image', src: './assets/brand6/g1.png' },
            { type: 'video', src: './assets/brand6/v1.mp4', thumbnail: './assets/brand6/g1.png' },
            { type: 'video', src: './assets/brand6/v2.mp4', thumbnail: './assets/brand6/g1.png' },
        ]
    },
    
    {
        id: 8,
        title: { en: 'Mess', ar: 'ميس' },
        industry: { en: 'Fashion', ar: 'أزياء' },
        description: {
            en: 'Created a comprehensive social media strategy for a fashion brand, including video content and engagement campaigns.',
            ar: 'إنشاء استراتيجية شاملة لوسائل التواصل الاجتماعي لعلامة تجارية للأزياء، بما في ذلك محتوى الفيديو وحملات التفاعل.'
        },
        platforms: { en: 'YouTube, Instagram, Facebook', ar: 'يوتيوب، انستغرام، فيسبوك' },
        results: { en: 'Tripled engagement, 80% increase in followers', ar: 'تضاعف التفاعل ثلاث مرات، زيادة 80٪ في المتابعين' },
        color: '#8B5CF6',
        icon: 'fas fa-tshirt',
        media: [
            { type: 'image', src: './assets/brand7/m.jpeg' },
            { type: 'video', src: './assets/brand7/m1.mp4', thumbnail: './assets/brand7/m.jpeg' },
            { type: 'video', src: './assets/brand7/m2.mp4', thumbnail: './assets/brand7/m.jpeg' },
        ]
    },

    
];

// Placeholder images for portfolio items
const placeholderImages = {
    ecommerce: './assets/portfolio/placeholder/ecommerce.jpg',
    medical: './assets/portfolio/placeholder/medical.jpg',
    education: './assets/portfolio/placeholder/education.jpg',
    tech: './assets/portfolio/placeholder/tech.jpg',
    gaming: './assets/portfolio/placeholder/gaming.jpg',
    marketing: './assets/portfolio/placeholder/marketing.jpg',
    fashion: './assets/portfolio/placeholder/fashion.jpg',
    food: './assets/portfolio/placeholder/food.jpg',
    default: './assets/portfolio/placeholder/default.jpg'
};

// Social media links
const socialLinks = {
    'facebook': 'https://facebook.com/abdelkader.mohamed',
    'twitter': 'https://twitter.com/abdelkader',
    'linkedin': 'https://linkedin.com/in/abdelkader-mohamed',
    'instagram': 'https://instagram.com/abdelkader.smm',
    'whatsapp': 'https://wa.me/201013706142'
};

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Initialize language
    const currentLang = localStorage.getItem('lang') || 'en';
    updateLanguage(currentLang);
    
    // Initialize dark mode
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        document.getElementById('themeToggle').classList.add('dark-mode');
    }
    
    // Initialize social orbs with random angles
    initializeSocialOrbs();
    
    // Render portfolio items
    renderPortfolioItems('all');
    
    // Setup event listeners
    setupEventListeners();
    
    // Setup smooth scrolling for navigation links
    setupSmoothScrolling();
    
    // Setup navbar active link on scroll
    setupNavbarOnScroll();
    
    // Initialize animations
    initializeAnimations();
    
    // Setup social icons
    setupSocialIcons();
    
    // Stats hover effect
    setupStatsHover();
});

// Initialize social orbs with random angles
function initializeSocialOrbs() {
    const orbs = document.querySelectorAll('.social-orb');
    const angles = [0, 90, 180, 270];
    const delays = [0, 2, 4, 6];
    
    orbs.forEach((orb, index) => {
        orb.style.setProperty('--angle', `${angles[index % angles.length]}deg`);
        orb.style.setProperty('--delay', `${delays[index % delays.length]}s`);
    });
}

// Update page language
function updateLanguage(lang) {
    // Update all text elements with data
    for (const [key, value] of Object.entries(textContent[lang])) {
        const element = document.getElementById(key);
        if (element) {
            element.textContent = value;
        }
    }
    
    // Update navigation links
    document.querySelectorAll('.nav-link').forEach((link, index) => {
        const keys = ['nav-home', 'nav-about', 'nav-skills', 'nav-portfolio', 'nav-contact'];
        if (index < keys.length && textContent[lang][keys[index]]) {
            link.textContent = textContent[lang][keys[index]];
        }
    });
    
    // Update language toggle
    const langToggle = document.getElementById('langToggle');
    if (lang === 'ar') {
        langToggle.classList.add('ar');
    } else {
        langToggle.classList.remove('ar');
    }
    
    // Save language preference
    localStorage.setItem('lang', lang);
    
    // Update direction for RTL languages
    if (lang === 'ar') {
        document.documentElement.dir = 'rtl';
        document.documentElement.lang = 'ar';
        document.body.style.fontFamily = "'Cairo', 'Poppins', sans-serif";
    } else {
        document.documentElement.dir = 'ltr';
        document.documentElement.lang = 'en';
        document.body.style.fontFamily = "'Poppins', sans-serif";
    }
    
    // Re-render portfolio with new language
    const activeFilter = document.querySelector('.filter-btn.active');
    if (activeFilter) {
        const filter = activeFilter.getAttribute('data-filter');
        renderPortfolioItems(filter);
    } else {
        renderPortfolioItems('all');
    }
}

// Render portfolio items
function renderPortfolioItems(filter) {
    const container = document.getElementById('portfolio-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    // Get current language
    const currentLang = localStorage.getItem('lang') || 'en';
    
    let filteredItems = portfolioData;
    
    if (filter !== 'all') {
        filteredItems = portfolioData.filter(item => {
            const industryEn = item.industry.en.toLowerCase();
            const industryAr = item.industry.ar;
            const filterLower = filter.toLowerCase();
            
            return industryEn === filterLower || 
                   industryAr === filter || 
                   industryEn.includes(filterLower) ||
                   item.industry.en === filter;
        });
    }
    
    filteredItems.forEach(item => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'portfolio-item';
        
        // Get first media item
        const firstMedia = item.media && item.media[0] ? item.media[0] : 
                          { type: 'image', src: placeholderImages.default };
        
        let mediaHTML = '';
        if (firstMedia.type === 'video') {
            const thumbnailSrc = firstMedia.thumbnail || firstMedia.src;
            mediaHTML = `
                <div class="portfolio-media video-thumbnail" onclick="event.stopPropagation()">
                    <img src="${thumbnailSrc}" alt="${item.title[currentLang]}" onerror="this.src='${placeholderImages.default}'">
                    <div class="play-button">
                        <i class="fas fa-play-circle"></i>
                    </div>
                    <video class="portfolio-video-preview" style="display:none;" preload="none">
                        <source src="${firstMedia.src}" type="video/mp4">
                    </video>
                </div>
            `;
        } else {
            mediaHTML = `
                <div class="portfolio-media">
                    <img src="${firstMedia.src}" alt="${item.title[currentLang]}" onerror="this.src='${placeholderImages.default}'">
                </div>
            `;
        }
        
        // Get industry display name
        const industryDisplay = item.industry[currentLang] || item.industry.en;
        
        // Get shortened description
        const shortDesc = item.description[currentLang].substring(0, 100) + '...';
        
        // Get platforms display
        const platformsDisplay = item.platforms[currentLang];
        
        portfolioItem.innerHTML = `
            <div class="portfolio-img">
                ${mediaHTML}
            </div>
            <div class="portfolio-content">
                <span class="portfolio-tag">${industryDisplay}</span>
                <h4>${item.title[currentLang]}</h4>
                <p>${shortDesc}</p>
                <div class="d-flex justify-content-between align-items-center mt-3">
                    <small><strong>${currentLang === 'en' ? 'Platforms:' : 'المنصات:'}</strong> ${platformsDisplay}</small>
                    <button class="btn btn-sm btn-outline-primary view-details" data-id="${item.id}">${currentLang === 'en' ? 'Details' : 'التفاصيل'}</button>
                </div>
            </div>
        `;
        
        container.appendChild(portfolioItem);
    });
    
    // Add event listeners to view details buttons
    document.querySelectorAll('.view-details').forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const id = parseInt(this.getAttribute('data-id'));
            showPortfolioDetails(id);
        });
    });
    
    // Add event listeners to video thumbnails
    document.querySelectorAll('.video-thumbnail').forEach(thumbnail => {
        thumbnail.addEventListener('click', function(e) {
            e.stopPropagation();
            const itemId = this.closest('.portfolio-item').querySelector('.view-details').getAttribute('data-id');
            showPortfolioDetails(parseInt(itemId));
        });
    });
}

// Show portfolio details
function showPortfolioDetails(id) {
    const item = portfolioData.find(item => item.id === id);
    if (!item) return;
    
    // Get current language
    const currentLang = localStorage.getItem('lang') || 'en';
    
    // Create modal content
    const modalTitle = document.getElementById('modal-title');
    const modalGallery = document.getElementById('modal-image-gallery');
    const modalIndustry = document.getElementById('modal-industry');
    const modalDescription = document.getElementById('modal-description');
    const modalPlatforms = document.getElementById('modal-platforms');
    const modalResults = document.getElementById('modal-results');
    const modalClose = document.getElementById('modal-close');
    const modalPlatformsTitle = document.getElementById('modal-platforms-title');
    const modalResultsTitle = document.getElementById('modal-results-title');
    
    if (modalTitle) modalTitle.textContent = item.title[currentLang];
    
    // Get industry display
    const industryDisplay = item.industry[currentLang] || item.industry.en;
    
    // Create media gallery
    if (modalGallery) {
        let galleryHTML = '<div class="modal-main-media">';
        
        const media = item.media && item.media.length > 0 ? item.media : 
                      [{ type: 'image', src: placeholderImages.default }];
        
        // First media item (main display)
        if (media[0].type === 'video') {
            galleryHTML += `
                <video controls class="modal-main-video" poster="${media[0].thumbnail || ''}">
                    <source src="${media[0].src}" type="video/mp4">
                    ${currentLang === 'en' ? 'Your browser does not support the video tag.' : 'متصفحك لا يدعم تشغيل الفيديو.'}
                </video>
            `;
        } else {
            galleryHTML += `<img src="${media[0].src}" alt="${item.title[currentLang]} - Image 1" id="modal-main-img" onerror="this.src='${placeholderImages.default}'">`;
        }
        
        galleryHTML += '</div>';
        
        // Thumbnails for all media
        if (media.length > 1) {
            galleryHTML += '<div class="modal-thumbnails">';
            media.forEach((mediaItem, index) => {
                const thumbnailSrc = mediaItem.type === 'video' 
                    ? (mediaItem.thumbnail || placeholderImages.default) 
                    : mediaItem.src;
                
                galleryHTML += `<div class="modal-thumbnail ${index === 0 ? 'active' : ''}" data-index="${index}" data-type="${mediaItem.type}" data-src="${mediaItem.src}" data-thumbnail="${mediaItem.thumbnail || ''}">
                    <img src="${thumbnailSrc}" alt="${item.title[currentLang]} - Thumbnail ${index + 1}" onerror="this.src='${placeholderImages.default}'">
                    ${mediaItem.type === 'video' ? '<i class="fas fa-play-circle small-play-icon"></i>' : ''}
                </div>`;
            });
            galleryHTML += '</div>';
        }
        
        modalGallery.innerHTML = galleryHTML;
        
        // Add click event to thumbnails
        document.querySelectorAll('.modal-thumbnail').forEach(thumbnail => {
            thumbnail.addEventListener('click', function() {
                const index = this.getAttribute('data-index');
                const type = this.getAttribute('data-type');
                const src = this.getAttribute('data-src');
                const thumbnailSrc = this.getAttribute('data-thumbnail');
                const mainMediaContainer = document.querySelector('.modal-main-media');
                
                if (type === 'video') {
                    mainMediaContainer.innerHTML = `
                        <video controls class="modal-main-video" poster="${thumbnailSrc}">
                            <source src="${src}" type="video/mp4">
                            ${currentLang === 'en' ? 'Your browser does not support the video tag.' : 'متصفحك لا يدعم تشغيل الفيديو.'}
                        </video>
                    `;
                } else {
                    mainMediaContainer.innerHTML = `<img src="${src}" alt="${item.title[currentLang]} - Image ${parseInt(index) + 1}" id="modal-main-img" onerror="this.src='${placeholderImages.default}'">`;
                }
                
                // Update active class
                document.querySelectorAll('.modal-thumbnail').forEach(t => t.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }
    
    if (modalIndustry) modalIndustry.innerHTML = `<strong>${currentLang === 'en' ? 'Industry:' : 'المجال:'}</strong> ${industryDisplay}`;
    if (modalDescription) modalDescription.textContent = item.description[currentLang];
    if (modalPlatforms) modalPlatforms.textContent = item.platforms[currentLang];
    if (modalResults) modalResults.textContent = item.results[currentLang];
    if (modalClose) modalClose.textContent = textContent[currentLang]['modal-close'];
    if (modalPlatformsTitle) modalPlatformsTitle.textContent = textContent[currentLang]['modal-platforms-title'];
    if (modalResultsTitle) modalResultsTitle.textContent = textContent[currentLang]['modal-results-title'];
    
    // Show modal
    const modal = new bootstrap.Modal(document.getElementById('portfolioModal'));
    modal.show();
}

// Setup event listeners
function setupEventListeners() {
    // Language toggle
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', function() {
            const currentLang = localStorage.getItem('lang') || 'en';
            const newLang = currentLang === 'en' ? 'ar' : 'en';
            updateLanguage(newLang);
        });
    }
    
    // Dark mode toggle
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            this.classList.toggle('dark-mode');
            
            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('darkMode', 'true');
            } else {
                localStorage.setItem('darkMode', 'false');
            }
        });
    }
    
    // Portfolio filter buttons
    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter value
            const filter = this.getAttribute('data-filter');
            
            // Render filtered items
            renderPortfolioItems(filter);
        });
    });
    
    // Email button
    const emailBtn = document.querySelector('.btn-primary-custom[href^="mailto"]');
    if (emailBtn) {
        emailBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'mailto:abdelkader.mohamed@gmail.com?subject=Social Media Inquiry&body=Hello Abdelkader, I would like to discuss a potential project with you.';
        });
    }
    
    // Contact button in hero
    const contactBtn = document.getElementById('contact-btn');
    if (contactBtn) {
        contactBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const contactSection = document.querySelector('#contact');
            if (contactSection) {
                window.scrollTo({
                    top: contactSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    }
    
    // Work button in hero
    const workBtn = document.getElementById('work-btn');
    if (workBtn) {
        workBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const portfolioSection = document.querySelector('#portfolio');
            if (portfolioSection) {
                window.scrollTo({
                    top: portfolioSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    }
    
    // Social orbs in profile image
    document.querySelectorAll('.social-orb').forEach(orb => {
        orb.addEventListener('click', function(e) {
            e.stopPropagation();
            const iconClass = this.querySelector('i').className;
            let platform = '';
            
            if (iconClass.includes('instagram')) platform = 'instagram';
            else if (iconClass.includes('facebook')) platform = 'facebook';
            else if (iconClass.includes('linkedin')) platform = 'linkedin';
            else if (iconClass.includes('twitter')) platform = 'twitter';
            else if (iconClass.includes('whatsapp')) platform = 'whatsapp';
            
            const url = socialLinks[platform];
            if (url) {
                window.open(url, '_blank');
            }
        });
    });
}

// Setup social icons
function setupSocialIcons() {
    // Footer social icons
    document.querySelectorAll('.social-icon').forEach(icon => {
        icon.addEventListener('click', function(e) {
            e.preventDefault();
            const iconClass = this.querySelector('i').className;
            let platform = '';
            
            if (iconClass.includes('facebook')) platform = 'facebook';
            else if (iconClass.includes('twitter')) platform = 'twitter';
            else if (iconClass.includes('linkedin')) platform = 'linkedin';
            else if (iconClass.includes('instagram')) platform = 'instagram';
            else if (iconClass.includes('whatsapp')) platform = 'whatsapp';
            
            const url = socialLinks[platform];
            if (url) {
                window.open(url, '_blank');
            }
        });
    });
}

// Setup smooth scrolling for navigation links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Update active nav link
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
                
                // Scroll to target
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Setup navbar active link on scroll
function setupNavbarOnScroll() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', function() {
        let current = '';
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Initialize animations
function initializeAnimations() {
    // Add animation classes to elements when they come into view
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeInUp');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements to animate
    document.querySelectorAll('.skill-card, .portfolio-item, .edu-card, .contact-item, .stats-circle').forEach(el => {
        observer.observe(el);
    });
}

// Setup stats hover effect
function setupStatsHover() {
    const statsCircles = document.querySelectorAll('.stats-circle');
    
    statsCircles.forEach(circle => {
        circle.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
        });
        
        circle.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

// Handle window resize
window.addEventListener('resize', function() {
    // Re-initialize social orbs positions
    initializeSocialOrbs();
});
