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
        'copyright-text': 'Abdelkader Mohamed © 2026. All Rights Reserved.',
        
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
        'hero-title': 'عبد القادر محمد',
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
        'copyright-text': 'عبد القادر محمد © 2026. جميع الحقوق محفوظة.',
        
        // Modal
        'modal-close': 'إغلاق'
    }
};

// Portfolio data with images and videos - Bilingual
const portfolioData = [
    {
        id: 1,
        title: { en: 'Be Well', ar: 'بي ويل' },
        industry: { en: 'Medical', ar: 'طبي' },
        description: {
            en: 'Managed and grew the social media presence of a medical and physical therapy center over a long-term period. Built and executed a data-driven content strategy focused on increasing reach, engagement, and brand trust, while optimizing posts based on audience behavior and platform insights.',
            ar: 'إدارة وتنمية تواجد مركز طبي وعلاج طبيعي على وسائل التواصل الاجتماعي على المدى الطويل. بناء وتنفيذ استراتيجية محتوى تعتمد على البيانات تركز على زيادة الوصول والتفاعل وثقة العلامة التجارية، مع تحسين المنشورات بناءً على سلوك الجمهور ورؤى المنصة.'
        },
        platforms: { en: 'Facebook, Instagram', ar: 'فيسبوك، انستغرام' },
        results: {
            en: 'Achieved more than 5× increase in reach and engagement rates, with consistent growth in audience interaction and overall page performance',
            ar: 'حققت أكثر من 5 أضعاف في معدلات الوصول والتفاعل، مع نمو مستمر في تفاعل الجمهور وأداء الصفحة بشكل عام'
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
        id: 2,
        title: { en: 'Sigma Store', ar: 'سيجما ستور' },
        industry: { en: 'Gaming', ar: 'ألعاب' },
        description: {
            en: 'Created a content strategy and influencer partnerships for a gaming brand, increasing engagement by 60% and brand awareness across multiple platforms.',
            ar: 'إنشاء استراتيجية محتوى وشراكات مؤثرين لعلامة تجارية للألعاب، مما زاد التفاعل بنسبة 60٪ والوعي بالعلامة التجارية عبر منصات متعددة.'
        },
        platforms: { en: 'Instagram, TikTok, Discord', ar: 'انستغرام، تيك توك، ديسكورد' },
        results: { en: '60% engagement increase, 15K new followers', ar: 'زيادة التفاعل 60٪، 15 ألف متابع جديد' },
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
        id: 3,
        title: { en: 'Hydra Tech', ar: 'هايدرا تك' },
        industry: { en: 'Technology', ar: 'تكنولوجيا' },
        description: {
            en: 'Managed social media presence for a technology company, focusing on B2B content and thought leadership strategies.',
            ar: 'إدارة التواجد على وسائل التواصل الاجتماعي لشركة تكنولوجيا، مع التركيز على محتوى B2B واستراتيجيات القيادة الفكرية.'
        },
        platforms: { en: 'LinkedIn, Twitter, YouTube', ar: 'لينكد إن، تويتر، يوتيوب' },
        results: { en: '200% increase in leads, 150% follower growth', ar: 'زيادة 200٪ في العملاء المحتملين، نمو 150٪ في المتابعين' },
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
        id: 4,
        title: { en: 'LinkMarket', ar: 'لينك ماركت' },
        industry: { en: 'Marketing', ar: 'تسويق' },
        description: {
            en: 'Built social media presence from scratch for a marketing agency, positioning them as industry thought leaders.',
            ar: 'بناء تواجد على وسائل التواصل الاجتماعي من الصفر لوكالة تسويق، ووضعهم كقادة فكر في الصناعة.'
        },
        platforms: { en: 'LinkedIn, Instagram, Facebook', ar: 'لينكد إن، انستغرام، فيسبوك' },
        results: { en: 'Generated 500+ qualified leads, 200% follower growth', ar: 'توليد 500+ عميل محتمل مؤهل، نمو 200٪ في المتابعين' },
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
        id: 5,
        title: { en: 'Nukhbat Al-Atour', ar: 'نخبة العطور' },
        industry: { en: 'E-commerce', ar: 'التجارة الإلكترونية' },
        description: {
            en: 'Developed a comprehensive e-commerce social media strategy for a perfume brand, focusing on visual storytelling and influencer collaborations.',
            ar: 'تطوير استراتيجية شاملة للتجارة الإلكترونية على وسائل التواصل الاجتماعي لعلامة تجارية للعطور، مع التركيز على سرد القصص البصري والتعاون مع المؤثرين.'
        },
        platforms: { en: 'Instagram, Pinterest, Facebook', ar: 'انستغرام، بنترست، فيسبوك' },
        results: { en: '35% increase in website traffic, 20% conversion rate', ar: 'زيادة 35٪ في حركة المرور على الموقع، معدل تحويل 20٪' },
        color: '#F59E0B',
        icon: 'fas fa-crown',
        media: [
            { type: 'image', src: './assets/brand5/N.jpg' },
            { type: 'video', src: './assets/brand5/v1.mp4', thumbnail: './assets/brand5/N.jpg' },
            { type: 'video', src: './assets/brand5/v2.mp4', thumbnail: './assets/brand5/N.jpg' },
            { type: 'video', src: './assets/brand5/v3.mp4', thumbnail: './assets/brand5/N.jpg' },
        ]
    },
    {
        id: 6,
        title: { en: 'Ghabor Academy', ar: 'أكاديمية غابور' },
        industry: { en: 'Education', ar: 'تعليم' },
        description: {
            en: 'Created a comprehensive social media strategy for an educational platform, including video content and student engagement campaigns.',
            ar: 'إنشاء استراتيجية شاملة لوسائل التواصل الاجتماعي لمنصة تعليمية، بما في ذلك محتوى الفيديو وحملات تفاعل الطلاب.'
        },
        platforms: { en: 'YouTube, Instagram, Facebook', ar: 'يوتيوب، انستغرام، فيسبوك' },
        results: { en: 'Tripled enrollment, 80% increase in engagement', ar: 'تضاعف التسجيل ثلاث مرات، زيادة 80٪ في التفاعل' },
        color: '#8B5CF6',
        icon: 'fas fa-graduation-cap',
        media: [
            { type: 'image', src: './assets/brand6/g1.png' },
            { type: 'video', src: './assets/brand6/v1.mp4', thumbnail: './assets/brand6/g1.png' },
            { type: 'video', src: './assets/brand6/v2.mp4', thumbnail: './assets/brand6/g1.png' },
        ]
    },
    {
        id: 7,
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