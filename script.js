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
            // Remove active status from all operational buttons
            portalTabs.forEach(t => t.classList.remove("active"));
            
            // Hide all layout content panels uniformly
            portalContents.forEach(c => {
                c.classList.add("hidden");
                c.classList.remove("active");
            });

            // Activate chosen structural tab element
            tab.classList.add("active");
            const targetId = tab.getAttribute("data-portal");
            const activeContent = document.getElementById(targetId);
            
            if (activeContent) {
                activeContent.classList.remove("hidden");
                activeContent.classList.add("active");
            }
        });
    });

    // ==========================================
    // 4. Smooth Scrolling (With Navbar Offset Math)
    // ==========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
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
    // 5. Active Link Scroll Spy (Dynamic Highlight)
    // ==========================================
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('header, section[id]');
        const navbarHeight = document.querySelector('.navbar').offsetHeight || 80;
        const scrollPosition = window.scrollY + navbarHeight + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            const hrefValue = link.getAttribute('href');
            if (hrefValue && hrefValue.startsWith('#')) {
                const cleanId = hrefValue.slice(1);
                if (cleanId === current || (current === '' && cleanId === '#')) {
                    link.classList.add('active');
                }
            }
        });
    });

    // ==========================================
    // 6. Refined App Store Redirection Engine
    // ==========================================
    // Fixed query selector logic target parameters specifically for application links
    document.querySelectorAll('.app-link, .portal-content .btn').forEach(button => {
        button.addEventListener('click', function(e) {
            const text = this.textContent.trim();
            
            if (text.includes('Google Play') || text.includes('App Store') || text.includes('Rider App')) {
                e.preventDefault();
                alert('Redirecting to App Stores for Rider App download confirmation...');
                // window.location.href = 'https://play.google.com/store/apps/details?id=com.gibelago';
            } else if (text.includes('Driver')) {
                e.preventDefault();
                alert('Redirecting to the verified South African Driver Registration Hub...');
                // window.location.href = 'https://driver.gibelago.co.za';
            }
        });
    });

    // ==========================================
    // 7. Scroll-Driven Premium Entrance Animations
    // ==========================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
                // Unobserve structural layer once animation fires cleanly
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Matches with updated markup layer configurations cleanly
    document.querySelectorAll('.feature-card, .value-item, .step-card, .safety-card, .requirement-box').forEach(el => {
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
            
            // Auto-collapse alternative panels for clean UX execution
            document.querySelectorAll(".faq-item").forEach(item => {
                item.classList.remove("open");
            });

            if (!isOpen) {
                currentItem.classList.add("open");
            }
        });
    });

    console.log('GibelaGo production platform framework initialized cleanly.');
});
