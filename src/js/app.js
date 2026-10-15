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