/**
 * ==========================================================================
 * GibelaGo Core Interactive Framework Systems
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Language Dropdown Selector Toggle ---
    const langBtn = document.getElementById('langBtn');
    const langMenu = document.getElementById('langMenu');
    const langItems = document.querySelectorAll('.dropdown-item');

    if (langBtn && langMenu) {
        langBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            langMenu.classList.toggle('show');
        });

        // Close dropdown when clicking anywhere else on the window
        window.addEventListener('click', () => {
            langMenu.classList.remove('show');
        });

        // Language item switching logic
        langItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                langItems.forEach(i => i.classList.remove('active'));
                item.classList.add('active');
                
                // Update the button string display natively
                langBtn.innerHTML = `🌐 ${item.textContent.trim()}`;
                langMenu.classList.remove('show');
            });
        });
    }

    // --- 2. Interactive Portal Tab Switcher (Rider vs Driver) ---
    const tabBtns = document.querySelectorAll('.portal-tab-btn');
    const portalContents = document.querySelectorAll('.portal-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetPortalId = btn.getAttribute('data-portal');
            const targetPortal = document.getElementById(targetPortalId);

            if (targetPortal) {
                // Toggle active buttons states
                tabBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                // Swap structural content visibility using tokens defined in your CSS
                portalContents.forEach(content => {
                    content.classList.remove('active');
                    content.classList.add('hidden');
                });
                
                targetPortal.classList.remove('hidden');
                targetPortal.classList.add('active');
            }
        });
    });

    // --- 3. Upfront Base Fare Matrix Estimator Engine ---
    const pickupSelect = document.getElementById('pickup');
    const tierBtns = document.querySelectorAll('.tier-btn');
    const calcFareBtn = document.getElementById('calcFareBtn');
    const fareResult = document.getElementById('fareResult');
    const calculatedPrice = document.getElementById('calculatedPrice');

    let selectedTier = 'go'; // Fallback default tier match

    // Handle tier-button selector toggle updates
    tierBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tierBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedTier = btn.getAttribute('data-tier');
        });
    });

    if (calcFareBtn) {
        calcFareBtn.addEventListener('click', () => {
            const zone = pickupSelect.value;

            if (!zone) {
                alert('Please select an Operational Area zone first.');
                return;
            }

            // High-fidelity pricing matrices baseline mappings (ZAR - R)
            const zoneRates = { jhb: 45, pta: 40, cpt: 50, dbn: 35 };
            const tierMultipliers = { go: 1.0, xl: 1.4, exec: 2.1 };

            // Math execution
            const baseCost = zoneRates[zone];
            const multiplier = tierMultipliers[selectedTier];
            const structuredFinalFare = (baseCost * multiplier).toFixed(2);

            // Inject the result strings and smoothly transition layout display via token
            calculatedPrice.textContent = `R${structuredFinalFare}`;
            fareResult.classList.remove('hidden');
        });
    }

    // --- 4. Smooth Transition Accordion FAQ Framework ---
    const faqTriggers = document.querySelectorAll('.faq-trigger');

    faqTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const parentItem = trigger.closest('.faq-item');
            const isOpen = parentItem.classList.contains('open');

            // Collapse any currently open items first for clean accordion execution
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('open');
                const body = item.querySelector('.faq-body');
                if (body) body.style.maxHeight = null;
            });

            // Toggle active conditional target state
            if (!isOpen) {
                parentItem.classList.add('open');
                const body = parentItem.querySelector('.faq-body');
                if (body) {
                    // Set maxHeight directly to content scrollHeight for CSS transit parameters
                    body.style.maxHeight = body.scrollHeight + "px";
                }
            }
        });
    });

    // --- 5. Scroll-Driven Premium Intersection Observer Triggers ---
    const animatedElements = document.querySelectorAll('.fade-in-ready');
    
    if ('IntersectionObserver' in window) {
        const entryObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-visible');
                    entryObserver.unobserve(entry.target); // Kill tracking once visual render fires
                }
            });
        }, { threshold: 0.15 });

        animatedElements.forEach(element => entryObserver.observe(element));
    } else {
        // Fallback for older browsers directly bypassing intercept checks
        animatedElements.forEach(el => el.classList.add('fade-in-visible'));
    }

    // --- 6. Mobile Drawer Navigation Script Engine ---
    const mobileToggle = document.getElementById('mobileToggle');
    const mobileDrawer = document.getElementById('mobileDrawer');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (mobileToggle && mobileDrawer) {
        // Toggle slide position and hamburger open states on click
        mobileToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            mobileToggle.classList.toggle('open');
            mobileDrawer.classList.toggle('open');
        });

        // Close the drawer overlay if a click is registered outside its container
        document.addEventListener('click', (e) => {
            if (!mobileDrawer.contains(e.target) && !mobileToggle.contains(e.target)) {
                mobileToggle.classList.remove('open');
                mobileDrawer.classList.remove('open');
            }
        });

        // Close the drawer safely when clicking a landing anchor link
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileToggle.classList.remove('open');
                mobileDrawer.classList.remove('open');
            });
        });
    }
});
