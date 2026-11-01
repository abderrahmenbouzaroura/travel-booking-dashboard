// ===================================================
// 1. مصفوفة البيانات الأساسية (Trips Data)
// ===================================================
const trips = [
  {
    id: 1,
    title: "Algiers Coastal Route",
    price: 320,
    duration: "4 Days",
    description: "Explore the stunning Mediterranean coastline.",
    imageUrl: "https://picsum.photos/400/250?random=1",
  },
  {
    id: 2,
    title: "Sahara Desert Expedition",
    price: 450,
    duration: "5 Days",
    description: "Unforgettable dunes and starry night camping.",
    imageUrl: "https://picsum.photos/400/250?random=2",
  },
  {
    id: 3,
    title: "Atlas Mountain Hike",
    price: 210,
    duration: "2 Days",
    description: "Fresh air and scenic trails through historical peaks.",
    imageUrl: "https://picsum.photos/400/250?random=3",
  },
];

// ===================================================
// 2. استهداف عناصر الـ DOM
// ===================================================
const tripListContainer = document.getElementById("trip-list");
const selectedTripsList = document.getElementById("selected-trips-list");
const subtotalEl = document.getElementById("summary-subtotal");
const taxEl = document.getElementById("summary-tax");
const totalEl = document.getElementById("summary-total");
const bookingCountEl = document.getElementById("total-trips-count");
const searchInput = document.getElementById("search-input");

// عناصر النافذة المنبثقة
const bookingModal = document.getElementById("booking-modal");
const confirmBookingBtn = document.getElementById("confirm-booking-btn");
const closeModalBtn = document.getElementById("close-modal-btn");
const modalBookingId = document.getElementById("modal-booking-id");
const modalTotalPaid = document.getElementById("modal-total-paid");

// عناصر محرك الـ SPA
const navLinks = document.querySelectorAll(".nav-link");
const viewSections = document.querySelectorAll(".view-section");
const pageTitle = document.getElementById("page-title");
const searchBar = document.getElementById("search-input");

// عناصر القائمة المنزلقة للشاشات الصغيرة
const menuToggleBtn = document.getElementById("menu-toggle-btn");
const sidebar = document.querySelector(".sidebar");
const sidebarOverlay = document.getElementById("sidebar-overlay");

// ===================================================
// 3. الحالة البرمجية (State Management)
// ===================================================
let bookedTrips = JSON.parse(localStorage.getItem("savedBookings")) || [];
let confirmedBookings =
  JSON.parse(localStorage.getItem("confirmedBookingsHistory")) || [];

// ===================================================
// 4. دوال رسم وتحديث الواجهة (Render Functions)
// ===================================================
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

function updateSummaryUI() {
  localStorage.setItem("savedBookings", JSON.stringify(bookedTrips));
  selectedTripsList.innerHTML = "";

  if (bookedTrips.length === 0) {
    selectedTripsList.innerHTML = `<li class="empty-state-text">No destinations selected yet.</li>`;
    subtotalEl.textContent = "$0.00";
    taxEl.textContent = "$0.00";
    totalEl.textContent = "$0.00";
    if (bookingCountEl) bookingCountEl.textContent = "0 Trips";
    if (confirmBookingBtn) confirmBookingBtn.disabled = true;
    return;
  }

  if (confirmBookingBtn) confirmBookingBtn.disabled = false;

  bookedTrips.forEach((trip, index) => {
    const itemHTML = `
      <li class="selected-trip-item">
          <span>${trip.title}</span>
          <div class="selected-trip-action-group">
              <span class="price-value">$${trip.price}</span>
              <button class="remove-btn" data-index="${index}" title="Remove trip">✕</button>
          </div>
      </li>
    `;
    selectedTripsList.innerHTML += itemHTML;
  });

  const subtotal = bookedTrips.reduce((sum, item) => sum + item.price, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  taxEl.textContent = `$${tax.toFixed(2)}`;
  totalEl.textContent = `$${total.toFixed(2)}`;

  if (bookingCountEl) {
    bookingCountEl.textContent = `${bookedTrips.length} Trips`;
  }
}

function updateHistoryAndAnalyticsUI() {
  const historyContainer = document.getElementById("confirmed-bookings-container");
  const analyticsCountEl = document.getElementById("analytics-trips-count");
  const analyticsSpentEl = document.getElementById("analytics-total-spent");

  if (confirmedBookings.length === 0) {
    historyContainer.innerHTML = `<p class="empty-state-text">No confirmed bookings yet. Complete a reservation from Explore Trips.</p>`;
  } else {
    historyContainer.innerHTML = "";
    confirmedBookings.forEach((booking) => {
      const bookingCard = `
        <div class="booking-history-item">
            <div>
                <span class="booking-meta-id">${booking.id}</span>
                <h4 class="booking-meta-title">${booking.trips.map((t) => t.title).join(" + ")}</h4>
                <p class="booking-meta-date">Date: ${booking.date}</p>
            </div>
            <span class="booking-item-total">$${booking.totalPaid.toFixed(2)}</span>
        </div>
      `;
      historyContainer.innerHTML += bookingCard;
    });
  }

  const totalTripsCount = confirmedBookings.reduce((sum, b) => sum + b.trips.length, 0);
  const totalSpent = confirmedBookings.reduce((sum, b) => sum + b.totalPaid, 0);

  if (analyticsCountEl) analyticsCountEl.textContent = totalTripsCount;
  if (analyticsSpentEl)
    analyticsSpentEl.textContent = `$${totalSpent.toFixed(2)}`;
}

// ===================================================
// 5. إدارة قائمة الهاتف (Mobile Drawer Helpers)
// ===================================================
function openMobileDrawer() {
  sidebar.classList.add("drawer-open");
  sidebarOverlay.classList.remove("hidden");
}

function closeMobileDrawer() {
  sidebar.classList.remove("drawer-open");
  sidebarOverlay.classList.add("hidden");
}

// ===================================================
// 6. الاستماع للأحداث (Event Listeners)
// ===================================================
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

selectedTripsList.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove-btn")) {
    const itemIndex = parseInt(e.target.dataset.index);
    bookedTrips.splice(itemIndex, 1);
    updateSummaryUI();
  }
});

searchInput.addEventListener("input", (e) => {
  const searchTerm = e.target.value.toLowerCase().trim();
  const filteredTrips = trips.filter((trip) => {
    return (
      trip.title.toLowerCase().includes(searchTerm) ||
      trip.description.toLowerCase().includes(searchTerm)
    );
  });
  renderTrips(filteredTrips);
});

confirmBookingBtn.addEventListener("click", () => {
  if (bookedTrips.length === 0) return;

  const subtotal = bookedTrips.reduce((sum, item) => sum + item.price, 0);
  const total = subtotal + subtotal * 0.1;
  const randomId = Math.floor(1000 + Math.random() * 9000);

  modalBookingId.textContent = `#TV-${randomId}`;
  modalTotalPaid.textContent = `$${total.toFixed(2)}`;
  bookingModal.classList.remove("hidden");
});

closeModalBtn.addEventListener("click", () => {
  bookingModal.classList.add("hidden");

  if (bookedTrips.length > 0) {
    const subtotal = bookedTrips.reduce((sum, item) => sum + item.price, 0);
    const total = subtotal + subtotal * 0.1;

    const newBooking = {
      id: modalBookingId.textContent,
      trips: [...bookedTrips],
      totalPaid: total,
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
    };

    confirmedBookings.push(newBooking);
    localStorage.setItem(
      "confirmedBookingsHistory",
      JSON.stringify(confirmedBookings)
    );

    bookedTrips = [];
    localStorage.removeItem("savedBookings");
    updateSummaryUI();
    updateHistoryAndAnalyticsUI();
  }
});

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    navLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");

    viewSections.forEach((section) => section.classList.add("hidden"));

    const targetView = link.dataset.view;

    if (targetView === "explore") {
      document.getElementById("explore-view").classList.remove("hidden");
      pageTitle.textContent = "Trip Exploration & Booking";
      searchBar.style.display = "block";
    } else if (targetView === "bookings") {
      document.getElementById("my-bookings-view").classList.remove("hidden");
      pageTitle.textContent = "My Bookings History";
      searchBar.style.display = "none";
    } else if (targetView === "analytics") {
      document.getElementById("analytics-view").classList.remove("hidden");
      pageTitle.textContent = "Travel & Spending Analytics";
      searchBar.style.display = "none";
    }

    if (window.innerWidth <= 900) {
      closeMobileDrawer();
    }
  });
});

if (menuToggleBtn) {
  menuToggleBtn.addEventListener("click", () => {
    if (sidebar.classList.contains("drawer-open")) {
      closeMobileDrawer();
    } else {
      openMobileDrawer();
    }
  });
}

if (sidebarOverlay) {
  sidebarOverlay.addEventListener("click", closeMobileDrawer);
}

// ===================================================
// 7. التشغيل الأولي (Initialization)
// ===================================================
renderTrips(trips);
updateSummaryUI();
updateHistoryAndAnalyticsUI();