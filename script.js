document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // 1. Language Dropdown Logic
    // ==========================================
    const langBtn = document.getElementById("langBtn");
    const langMenu = document.getElementById("langMenu");

    if (langBtn && langMenu) {
        langBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            langMenu.classList.toggle("show");
        });

        document.addEventListener("click", () => {
            langMenu.classList.remove("show");
        });
    }

    // ==========================================
    // 2. Real-Time Upfront Fare Estimator
    // ==========================================
    const calcFareBtn = document.getElementById("calcFareBtn");
    const fareResult = document.getElementById("fareResult");
    const calculatedPrice = document.getElementById("calculatedPrice");
    const tierButtons = document.querySelectorAll(".tier-btn");
    
    let activeTier = "go";
    
    const pricingMatrix = {
        jhb: { go: 85, xl: 130, exec: 210 },
        pta: { go: 90, xl: 140, exec: 220 },
        cpt: { go: 105, xl: 165, exec: 260 },
        dbn: { go: 75, xl: 115, exec: 185 }
    };

    tierButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            tierButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            activeTier = btn.getAttribute("data-tier");
        });
    });

    if (calcFareBtn) {
        calcFareBtn.addEventListener("click", () => {
            const citySelection = document.getElementById("pickup").value;
            if (!citySelection) {
                alert("Please choose a pickup operational area first.");
                return;
            }

            const rawPrice = pricingMatrix[citySelection][activeTier];
            calculatedPrice.textContent = `R${rawPrice}.00`;
            fareResult.classList.remove("hidden");
        });
    }

    // ==========================================
    // 3. Tab Management (Rider vs Driver Portal)
    // ==========================================
    const portalTabs = document.querySelectorAll(".portal-tab-btn");
    const portalContents = document.querySelectorAll(".portal-content");

    portalTabs.forEach(tab => {
        tab.addEventListener("click", () => {
            portalTabs.forEach(t => t.classList.remove("active"));
            portalContents.forEach(c => {
                c.classList.add("hidden");
                c.classList.remove("active");
            });

            tab.classList.add("active");
            const targetId = tab.getAttribute("data-portal");
            const activeContent = document.getElementById(targetId);
            activeContent.classList.remove("hidden");
            activeContent.classList.add("active");
        });
    });

    // ==========================================
    // 4. Smooth Scrolling (With Navbar Offset Math)
    // ==========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight || 80;
                const targetPosition = target.offsetTop - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ==========================================
    // 5. Active Link Scroll Spy (Fixed pageYOffset)
    // ==========================================
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section, header');
        const navbarHeight = document.querySelector('.navbar').offsetHeight || 80;
        const scrollPosition = window.scrollY + navbarHeight + 20;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // ==========================================
    // 6. Premium Redirection Hub (Targeted App Links)
    // ==========================================
    document.querySelectorAll('.cta-buttons .btn, .app-link').forEach(button => {
        button.addEventListener('click', function(e) {
            const text = this.textContent.trim();
            
            if (text.includes('Rider') || text.includes('Google Play') || text.includes('App Store')) {
                e.preventDefault();
                alert('Redirecting to Google Play / App Store for Rider App download...');
                // window.location.href = 'https://play.google.com/store/apps/details?id=com.gibelago';
            } else if (text.includes('Driver')) {
                e.preventDefault();
                alert('Redirecting to South African Driver Registration Portal...');
                // window.location.href = 'https://driver.gibelago.co.za';
            }
        });
    });

    // ==========================================
    // 7. Scroll-Driven Premium Entrance Animations
    // ==========================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
            }
        });
    }, observerOptions);

    // Targets our actual elements (feature-card, value-card, step-card)
    document.querySelectorAll('.feature-card, .value-card, .step-card, .safety-card').forEach(el => {
        el.classList.add('fade-in-ready');
        observer.observe(el);
    });

    // ==========================================
    // 8. Refined Accordion FAQ Engine
    // ==========================================
    const faqTriggers = document.querySelectorAll(".faq-trigger");

    faqTriggers.forEach(trigger => {
        trigger.addEventListener('click', function() {
            const currentItem = this.parentElement;
            const isOpen = currentItem.classList.contains("open");
            
            // Auto-collapse alternative panels for clean UX
            document.querySelectorAll(".faq-item").forEach(item => {
                item.classList.remove("open");
            });

            if (!isOpen) {
                currentItem.classList.add("open");
            }
        });
    });

    console.log('GibelaGo platform engine loaded successfully!');
});
