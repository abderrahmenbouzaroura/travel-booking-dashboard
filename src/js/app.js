// مصفوفة البيانات الأساسية
const trips = [
    {
        id: 1,
        title: "Algiers Coastal Route",
        price: 320,
        duration: "4 Days",
        description: "Explore the stunning Mediterranean coastline.",
        imageUrl: "https://picsum.photos/400/250?random=1"
    },
    {
        id: 2,
        title: "Sahara Desert Expedition",
        price: 450,
        duration: "5 Days",
        description: "Unforgettable dunes and starry night camping.",
        imageUrl: "https://picsum.photos/400/250?random=2"
    },
    {
        id: 3,
        title: "Atlas Mountain Hike",
        price: 210,
        duration: "2 Days",
        description: "Fresh air and scenic trails through historical peaks.",
        imageUrl: "https://picsum.photos/400/250?random=3"
    }
];

// عناصر الـ DOM
const tripListContainer = document.getElementById("trip-list");
const selectedTripsList = document.getElementById("selected-trips-list");
const subtotalEl = document.getElementById("summary-subtotal");
const taxEl = document.getElementById("summary-tax");
const totalEl = document.getElementById("summary-total");
const bookingCountEl = document.getElementById("total-trips-count");

// الحالة (State)
let bookedTrips = [];

// عرض البطاقات ديناميكياً
function renderTrips(tripsData) {
    tripListContainer.innerHTML = "";
    tripsData.forEach((trip) => {
        const cardHTML = `
            <article class="travel-card">
                <img src="${trip.imageUrl}" alt="${trip.title}">
                <h3>${trip.title}</h3>
                <span class="price">$${trip.price} / seat</span>
                <p class="details">${trip.duration} · ${trip.description}</p>
                <button class="book-btn" data-id="${trip.id}">Book Now</button>
            </article>
        `;
        tripListContainer.innerHTML += cardHTML;
    });
}

// استماع للأحداث (Event Delegation)
tripListContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("book-btn")) {
        const tripId = parseInt(event.target.dataset.id);
        const selectedTrip = trips.find((t) => t.id === tripId);

        if (selectedTrip) {
            bookedTrips.push(selectedTrip);
            updateSummaryUI();
        }
    }
});

// تحديث لوحة الملخص
function updateSummaryUI() {
    selectedTripsList.innerHTML = "";
    bookedTrips.forEach((trip) => {
        const itemHTML = `
            <li class="selected-trip-item">
                <span>${trip.title}</span>
                <span class="price-value">$${trip.price}</span>
            </li>
        `;
        selectedTripsList.innerHTML += itemHTML;
    });

    const subtotal = bookedTrips.reduce((sum, item) => sum + item.price, 0);
    const tax = subtotal * 0.10;
    const total = subtotal + tax;

    subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    taxEl.textContent = `$${tax.toFixed(2)}`;
    totalEl.textContent = `$${total.toFixed(2)}`;

    if (bookingCountEl) {
        bookingCountEl.textContent = `${bookedTrips.length} Trips`;
    }
}

// التشغيل الأولي
renderTrips(trips);
// 1. استهداف حقل البحث
const searchInput = document.getElementById("search-input");

// 2. الاستماع لحدث الكتابة اللحظي
searchInput.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase().trim();

    // تصفية مصفوفة الرحلات الأصلية
    const filteredTrips = trips.filter((trip) => {
        return trip.title.toLowerCase().includes(searchTerm) || 
               trip.description.toLowerCase().includes(searchTerm);
    });

    // إعادة عرض البطاقات المفلترة فقط
    renderTrips(filteredTrips);
});
// 1. تحديث دالة عرض الملخص مع معالجة الحالة الفارغة وزر الحذف
function updateSummaryUI() {
    selectedTripsList.innerHTML = "";

    const confirmBtn = document.getElementById("confirm-booking-btn");

    // فحص إذا كانت السلة فارغة
    if (bookedTrips.length === 0) {
        selectedTripsList.innerHTML = `<li class="empty-state-text">No destinations selected yet.</li>`;
        subtotalEl.textContent = "$0.00";
        taxEl.textContent = "$0.00";
        totalEl.textContent = "$0.00";
        if (bookingCountEl) bookingCountEl.textContent = "0 Trips";
        if (confirmBtn) confirmBtn.disabled = true;
        return; // التوقف هنا لأن السلة فارغة
    }

    if (confirmBtn) confirmBtn.disabled = false;

    // رسم عناصر الرحلات مع زر الحذف
    bookedTrips.forEach((trip, index) => {
        const itemHTML = `
            <li class="selected-trip-item">
                <span>${trip.title}</span>
                <div style="display: flex; align-items: center;">
                    <span class="price-value">$${trip.price}</span>
                    <button class="remove-btn" data-index="${index}" title="Remove trip">✕</button>
                </div>
            </li>
        `;
        selectedTripsList.innerHTML += itemHTML;
    });

    // العمليات الحسابية
    const subtotal = bookedTrips.reduce((sum, item) => sum + item.price, 0);
    const tax = subtotal * 0.10;
    const total = subtotal + tax;

    subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    taxEl.textContent = `$${tax.toFixed(2)}`;
    totalEl.textContent = `$${total.toFixed(2)}`;

    if (bookingCountEl) {
        bookingCountEl.textContent = `${bookedTrips.length} Trips`;
    }
}

// 2. الاستماع لحدث حذف رحلة من لوحة الملخص
selectedTripsList.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-btn")) {
        const itemIndex = parseInt(e.target.dataset.index);
        
        // حذف العنصر المحدد من المصفوفة
        bookedTrips.splice(itemIndex, 1);
        
        // إعادة تحديث الواجهة والحسابات
        updateSummaryUI();
    }
});

// تشغيل التحديث أول مرة لإظهار رسالة الحالة الفارغة
updateSummaryUI();