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

// لفحص البيانات في المتصفح
console.log("Trips Data Loaded:", trips);
// 1. استهداف حاوية الرحلات
const tripListContainer = document.getElementById("trip-list");

// 2. دالة عرض الرحلات في الصفحة
function renderTrips(tripsData) {
    // تصفير المحتوى السابق للحاوية
    tripListContainer.innerHTML = "";

    // المرور على كل رحلة وإنشاء كرت خاص بها
    tripsData.forEach((trip) => {
        const cardHTML = `
            <article class="travel-card">
                <img src="${trip.imageUrl}" alt="${trip.title}" style="width: 100%; height: 160px; object-fit: cover; border-radius: 8px;">
                <h3>${trip.title}</h3>
                <span style="color: #34d399; font-weight: bold;">$${trip.price} / seat</span>
                <p style="color: #94a3b8; font-size: 13px;">${trip.duration} · ${trip.description}</p>
                <button class="book-btn" data-id="${trip.id}">Book Now</button>
            </article>
        `;

        // إضافة البطاقة للحاوية
        tripListContainer.innerHTML += cardHTML;
    });
}

// 3. استدعاء الدالة لتشغيل العرض فور تحميل الصفحة
renderTrips(trips);