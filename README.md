# 🌍 TerraVoyage — Travel Itinerary & Booking Dashboard

A responsive, client-side travel booking and itinerary planning dashboard built with pure Vanilla JavaScript, CSS Grid/Flexbox, and Semantic HTML5. Designed to simulate a modern booking platform with real-time computations and local persistence.

## 🚀 Live Demo
[View Live Application](https://abderrahmenbouzaroura.github.io/travel-booking-dashboard/)

---

## ✨ Key Features
- **Semantic & Accessible Layout:** Clean HTML5 structure (`main`, `aside`, `header`, `article`) styled with custom CSS.
- **Dynamic DOM Generation:** Trip cards and catalog items are rendered dynamically from structured JavaScript data objects.
- **Real-Time Search & Filtering:** Instant client-side filtering by trip title and description on keystroke.
- **Interactive Itinerary & Pricing Engine:**
  - Dynamic item addition and deletion (`splice`).
  - Automated calculation of subtotal, 10% taxes, and grand total.
  - Active booking counter synchronization across UI components.
- **Local State Persistence:** Uses the browser's `localStorage` to preserve selected trips across page refreshes.
- **Complete Booking Workflow:** Confirmation modal with randomized reservation reference (`#TV-XXXX`) and clean state resets.
- **Mobile-First Responsive Design:** Fully responsive layout adapting from multi-column grid dashboards to single-column mobile views.

---

## 🛠️ Tech Stack
- **HTML5:** Semantic architecture, accessible forms, and landmark roles.
- **CSS3:** Custom properties (variables), Flexbox, CSS Grid layouts, and Media Queries.
- **JavaScript (ES6+):** Array methods (`filter`, `reduce`, `find`), DOM manipulation, Event Delegation, and `localStorage` API.
- **Git & GitHub:** Version control with conventional commit messages and GitHub Pages deployment.

---

## 💻 Local Setup & Getting Started

1. Clone the repository:
   ```bash
   git clone [https://github.com/abderrahmenbouzaroura/travel-booking-dashboard.git](https://github.com/abderrahmenbouzaroura/travel-booking-dashboard.git)