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

        window.addEventListener('click', () => {
            langMenu.classList.remove('show');
        });

        langItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                langItems.forEach(i => i.classList.remove('active'));
                item.classList.add('active');
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
                tabBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                portalContents.forEach(content => {
                    content.classList.remove('active');
                    content.classList.add('hidden');
                });
                
                targetPortal.classList.remove('hidden');
                targetPortal.classList.add('active');
            }
        });
    });

    // --- 3. Market-Beating Distance Fare Matrix Estimator Engine (Rider) ---
    const pickupSelect = document.getElementById('pickup');
    const distanceInput = document.getElementById('distance');
    const tierBtns = document.querySelectorAll('.tier-btn');
    const calcFareBtn = document.getElementById('calcFareBtn');
    const fareResult = document.getElementById('fareResult');
    
    const baseRateDisplay = document.getElementById('baseRateDisplay');
    const distanceRateDisplay = document.getElementById('distanceRateDisplay');
    const calculatedPrice = document.getElementById('calculatedPrice');

    let selectedTier = 'go'; 

    tierBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tierBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedTier = btn.getAttribute('data-tier');
        });
    });

    if (calcFareBtn) {
        calcFareBtn.addEventListener('click', () => {
            const zone = pickupSelect ? pickupSelect.value : '';
            const distanceValue = distanceInput ? distanceInput.value.trim() : '';
            const distance = parseFloat(distanceValue);

            if (!zone) {
                alert('Please select an Operational Area zone first.');
                return;
            }
            if (isNaN(distance) || distance <= 0) {
                alert('Please enter a valid trip distance greater than 0 km.');
                return;
            }

            // Market-beating rates (Low flag drop, flat low rates per KM, NO Surge, NO Time Fees)
            const marketBeatingBaseRates = { jhb: 18.00, pta: 18.00, cpt: 20.00, dbn: 16.00 };
            const competitiveRatesPerKm = { go: 6.50, xl: 9.00, exec: 14.00 };

            const baseFlagDrop = marketBeatingBaseRates[zone] || 18.00;
            const ratePerKm = competitiveRatesPerKm[selectedTier] || 6.50;
            const cumulativeDistanceCost = ratePerKm * distance;
            const totalAggregatedFare = baseFlagDrop + cumulativeDistanceCost;

            if (baseRateDisplay) baseRateDisplay.textContent = `R${baseFlagDrop.toFixed(2)}`;
            if (distanceRateDisplay) {
                distanceRateDisplay.textContent = `R${cumulativeDistanceCost.toFixed(2)} (${distance}km @ R${ratePerKm.toFixed(2)}/km)`;
            }
            if (calculatedPrice) {
                calculatedPrice.textContent = `R${totalAggregatedFare.toFixed(2)}`;
            }
            if (fareResult) fareResult.classList.remove('hidden');
        });
    }

    // --- 4. Driver Recruiting Income Estimator Engine ---
    const driverTripsInput = document.getElementById('driverTrips');
    const driverAvgKmInput = document.getElementById('driverAvgKm');
    const calcEarningsBtn = document.getElementById('calcEarningsBtn');
    const driverResult = document.getElementById('driverResult');

    const driverGrossDisplay = document.getElementById('driverGrossDisplay');
    const gibelagoCommissionDisplay = document.getElementById('gibelagoCommissionDisplay');
    const driverNetDisplay = document.getElementById('driverNetDisplay');
    const competitorLossDisplay = document.getElementById('competitorLossDisplay');

    if (calcEarningsBtn) {
        calcEarningsBtn.addEventListener('click', () => {
            const weeklyTrips = parseInt(driverTripsInput.value.trim(), 10);
            const avgTripKm = parseFloat(driverAvgKmInput.value.trim());

            if (isNaN(weeklyTrips) || weeklyTrips <= 0) {
                alert('Please enter a valid number of weekly trips.');
                return;
            }
            if (isNaN(avgTripKm) || avgTripKm <= 0) {
                alert('Please enter a valid average trip distance.');
                return;
            }

            // Constants based on our "GibelaGo" economy tier profile
            const averageBaseFare = 18.00; 
            const ratePerKm = 6.50;

            // Compute standard trip averages
            const estimatedSingleTripFare = averageBaseFare + (ratePerKm * avgTripKm);
            const weeklyGrossFares = estimatedSingleTripFare * weeklyTrips;

            // Platform Take-Rate Splits Comparison
            const gibelagoCommission = weeklyGrossFares * 0.10; // Disruptive 10%
            const competitorCommission = weeklyGrossFares * 0.25; // Standard 25% Uber/Bolt take
            
            const gibelagoNetPayout = weeklyGrossFares - gibelagoCommission;
            const competitorNetPayout = weeklyGrossFares - competitorCommission;
            const absoluteDriverSavings = competitorNetPayout - gibelagoNetPayout;

            // Print values to the UI
            if (driverGrossDisplay) driverGrossDisplay.textContent = `R${weeklyGrossFares.toFixed(2)}`;
            if (gibelagoCommissionDisplay) gibelagoCommissionDisplay.textContent = `-R${gibelagoCommission.toFixed(2)}`;
            if (driverNetDisplay) driverNetDisplay.textContent = `R${gibelagoNetPayout.toFixed(2)}`;
            
            if (competitorLossDisplay) {
                competitorLossDisplay.textContent = `They take R${competitorCommission.toFixed(2)} instead of our R${gibelagoCommission.toFixed(2)}!`;
            }

            if (driverResult) driverResult.classList.remove('hidden');
        });
    }

    // --- 5. Smooth Transition Accordion FAQ Framework ---
    const faqTriggers = document.querySelectorAll('.faq-trigger');

    faqTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const parentItem = trigger.closest('.faq-item');
            const isOpen = parentItem.classList.contains('open');

            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('open');
                const body = item.querySelector('.faq-body');
                if (body) body.style.maxHeight = null;
            });

            if (!isOpen) {
                parentItem.classList.add('open');
                const body = parentItem.querySelector('.faq-body');
                if (body) body.style.maxHeight = body.scrollHeight + "px";
            }
        });
    });

    // --- 6. Scroll-Driven Premium Intersection Observer Triggers ---
    const animatedElements = document.querySelectorAll('.fade-in-ready');
    
    if ('IntersectionObserver' in window) {
        const entryObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-visible');
                    entryObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        animatedElements.forEach(element => entryObserver.observe(element));
    } else {
        animatedElements.forEach(el => el.classList.add('fade-in-visible'));
    }

    // --- 7. Mobile Drawer Navigation Script Engine ---
    const mobileToggle = document.getElementById('mobileToggle');
    const mobileDrawer = document.getElementById('mobileDrawer');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (mobileToggle && mobileDrawer) {
        mobileToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            mobileToggle.classList.toggle('open');
            mobileDrawer.classList.toggle('open');
        });

        document.addEventListener('click', (e) => {
            if (!mobileDrawer.contains(e.target) && !mobileToggle.contains(e.target)) {
                mobileToggle.classList.remove('open');
                mobileDrawer.classList.remove('open');
            }
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileToggle.classList.remove('open');
                mobileDrawer.classList.remove('open');
            });
        });
    }
});
