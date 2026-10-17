# 🌍 TerraVoyage — دليل التوثيق الهندسي والمعماري الشامل
> **دراسة حالة متكاملة (Full Case Study) لبناء واجهة حجز رحلات ومسارات تفاعلية من الصفر.**  
> **التقنيات المستخدمة:** Semantic HTML5 · Modular CSS3 (Grid & Flexbox) · Pure Vanilla JavaScript (ES6+) · Web Storage API · Git & GitHub Pages.

---

## فهرس المحتويات
1. [المرحلة 1: التخطيط، الرؤية البصرية، وهيكلة المجلدات](#المرحلة-1-التخطيط-الرؤية-البصرية-وهيكلة-المجلدات)
2. [المرحلة 2: تأسيس مستودع Git والتوثيق الأولي](#المرحلة-2-تأسيس-مستودع-git-والتوثيق-الأولي)
3. [المرحلة 3: بناء الهيكل الدلالي للشريط الجانبي (Sidebar)](#المرحلة-3-بناء-الهيكل-الدلالي-للشريط-الجانبي-sidebar)
4. [المرحلة 4: بناء منطقة المحتوى وترويسة البحث وبطاقات العرض](#المرحلة-4-بناء-منطقة-المحتوى-وترويسة-البحث-وبطاقات-العرض)
5. [المرحلة 5: بناء لوحة ملخص الحسابات (Summary Panel) ومعالجة أخطاء الـ IDs](#المرحلة-5-بناء-لوحة-ملخص-الحسابات-summary-panel-ومعالجة-أخطاء-الـ-ids)
6. [المرحلة 6: التخطيط العام بالـ CSS (Flexbox & Reset)](#المرحلة-6-التخطيط-العام-بالـ-css-flexbox--reset)
7. [المرحلة 7: حل تداخل التنسيقات وتقسيم الشاشة بالـ CSS Grid](#المرحلة-7-حل-تداخل-التنسيقات-وتقسيم-الشاشة-بالـ-css-grid)
8. [المرحلة 8: شبكة البطاقات والهوية البصرية الحديثة (UI Polish)](#المرحلة-8-شبكة-البطاقات-والهوية-البصرية-الحديثة-ui-polish)
9. [المرحلة 9: نقل البيانات إلى كائنات JavaScript وبناء محرك الحقن الديناميكي](#المرحلة-9-نقل-البيانات-إلى-كائنات-javascript-وبناء-محرك-الحقن-الديناميكي)
10. [المرحلة 10: التطهير المعماري وفصل الـ CSS عن الـ HTML بالكامل](#المرحلة-10-التطهير-المعماري-وفصل-الـ-css-عن-الـ-html-بالكامل)
11. [المرحلة 11: محرك تفويض الأحداث (Event Delegation) والحساب الفوري للأسعار](#المرحلة-11-محرك-تفويض-الأحداث-event-delegation-والحساب-الفوري-للأسعار)
12. [المرحلة 12: محرك البحث والتصفية اللحظي (Real-Time Search)](#المرحلة-12-محرك-البحث-والتصفية-اللحظي-real-time-search)
13. [المرحلة 13: إدارة عناصر السلة، زر الحذف، وحالة الفراغ (Empty State)](#المرحلة-13-إدارة-عناصر-السلة-زر-الحذف-وحالة-الفراغ-empty-state)
14. [المرحلة 14: دوام البيانات والتخزين المحلي (State Persistence via LocalStorage)](#المرحلة-14-دوام-البيانات-والتخزين-المحلي-state-persistence-via-localstorage)
15. [المرحلة 15: دورة إتمام الحجز والنافذة المنبثقة (Confirmation Modal)](#المرحلة-15-دورة-إتمام-الحجز-والنافذة-المنبثقة-confirmation-modal)
16. [المرحلة 16: التجاوب الكامل مع الهواتف والشاشات الصغيرة (Responsive Design)](#المرحلة-16-التجاوب-الكامل-مع-الهواتف-والشاشات-الصغيرة-responsive-design)
17. [المرحلة 17: صياغة الـ README الاحترافي والنشر الحي على GitHub Pages](#المرحلة-17-صياغة-الـ-readme-الاحترافي-والنشر-الحي-على-github-pages)

---

## المرحلة 1: التخطيط، الرؤية البصرية، وهيكلة المجلدات

### 1.1 المفهوم الهندسي
قبل كتابة أي كود برمجي، تم الاتفاق على قاعدة جوهرية: **لا تكتب كوداً دون رؤية بصرية واضحة (UI/UX Vision)**.  
تم تحديد الهوية العامة:
* نمط داكن عصري (Dark Mode Slate `#0f172a` و `#1e293b`).
* لمسات حيوية باللون الزمردي الخضر (`#059669` / `#10b981`).
* هيكل مقسم إلى 3 مناطق:
  1. شريط تنقل جانبي أيسر ثابت (260px).
  2. مساحة وسطى تتسع لشبكة بطاقات الرحلات مع ترويسة بحث.
  3. لوحة جانبية يمنى لحساب تكاليف الحجز لحظياً.

### 1.2 البنية المادية للمشروع
قمنا بإنشاء شجرة الملفات التالية:
```text
travel-booking-dashboard/
├── index.html
├── README.md
├── .gitignore
└── src/
    ├── css/
    │   └── style.css
    └── js/
        └── app.js
```

### 1.3 لماذا بنيناها بهذه الطريقة؟
* **فصل المسؤوليات (Separation of Concerns):** عزل كود البنية (HTML) عن التنسيق (CSS) عن المنطق التفاعلي (JS).
* تنظيم ملفات الأصول البرمجية داخل مجلد `src/` ليكون المشروع مطابقاً للمعايير العالمية المتبعة في بيئات العمل الاحترافية.

---

## المرحلة 2: تأسيس مستودع Git والتوثيق الأولي

### 2.1 الكود والإجراءات المنفذة
داخل الـ Terminal، قمنا بتهيئة المستودع وإعداد ملف التجاهل:
```bash
# 1. تهيئة مستودع محلي
git init

# 2. إنشاء ملف تجاهل الملفات غير المرغوبة
echo "node_modules/\n.DS_Store" > .gitignore

# 3. حفظ النسخة الأولى
git add .
git commit -m "chore: initialize project structure and basic readme"
```

ثم ربط المستودع بحساب GitHub الشخصي:
```bash
git branch -M main
git remote add origin https://github.com/abderrahmenbouzaroura/travel-booking-dashboard.git
git push -u origin main
```

### 2.2 لماذا قمنا بهذه الخطوة مبكراً؟
حتى لا يتم فقدان أي كود، ولتوثيق تاريخ المشروع التراكمي (Commit History) من أول لحظة لإثبات التطور المنطقي أمام لجان التقييم والتوظيف.

---

## المرحلة 3: بناء الهيكل الدلالي للشريط الجانبي (Sidebar)

### 3.1 الكود المكتوب في `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Travel Booking</title>
</head>
<body>
    <aside class="sidebar">
        <h2>Travel Booking</h2>
        <nav>
            <ul>
                <li><a href="#">Explore Trip</a></li>
                <li><a href="#">My Bookings</a></li>
                <li><a href="#">Analytics</a></li>
            </ul>
        </nav>
        
        <!-- بطاقة العداد السفلية -->
        <div id="booking-counter">
            <p>Active Bookings :</p>
            <span id="total-trips-count">0 Trips</span>
        </div>
    </aside>
```

### 3.2 لماذا كتبناه بهذه الطريقة؟
* **`<aside>`:** وسم دلالي يوضح لقارئات الشاشة ومحركات البحث أن هذا المحتوى جانبي ومكمل.
* **`<nav>` و `<ul>`:** البنية القياسية الدلالية لشبكات الروابط لتوفير سهولة الوصول (Accessibility - a11y).
* **`id="total-trips-count"`:** حجز معرّف صريح ومحدد للرقم `0 Trips` حتى يسهل استهدافه لاحقاً عبر JavaScript لتحديثه برمجياً عند الحجز.

### 3.3 النتيجة في المتصفح
ظهرت النصوص والروابط متراصة عمودياً باللون الأسود الافتراضي على خلفية بيضاء بدون أي تنسيق، مع التأكد من سلامة الوسوم.

---

## المرحلة 4: بناء منطقة المحتوى وترويسة البحث وبطاقات العرض

### 4.1 الكود المكتوب في `index.html`
قمنا بفتح وسم `<main>` ووضع الترويسة والبطاقات داخله:
```html
    <main>
        <header>
            <h1>Trip Exploration & Booking</h1>
            <input type="search" placeholder="Search trips...">
        </header>

        <section id="trip-list">
            <article class="travel-card">
                <img src="" alt="">
                <h3>destination</h3>
                <span>Price</span>
                <p>Description</p>
                <button>Book Now</button>
            </article>
            <article class="travel-card">
                <img src="" alt="">
                <h3>destination</h3>
                <span>Price</span>
                <p>Description</p>
                <button>Book Now</button>
            </article>
            <article class="travel-card">
                <img src="" alt="">
                <h3>destination</h3>
                <span>Price</span>
                <p>Description</p>
                <button>Book Now</button>
            </article>
        </section>
```

### 4.2 لماذا كتبناه بهذه الطريقة؟
* **`<main>`:** الوسم الدلالي الأهم الذي يعبر عن صلب محتوى الصفحة، ولا يتكرر إلا مرة واحدة.
* **`<header>`:** لتجميع العنوان الرئيسي وحقل البحث معاً.
* **`<article>`:** الوسم الدلالي الأصح لبطاقة الرحلة؛ لأن كل رحلة تمثل مقالاً أو كياناً مستقلاً بذاته لو نُقل إلى صفحة أخرى لفُهم معناه.

---

## المرحلة 5: بناء لوحة ملخص الحسابات (Summary Panel) ومعالجة أخطاء الـ IDs

### 5.1 الخطأ الشائع والدرس المستفاد
* **الخطأ:** كُتبت البطاقات في البداية بـ `id="travel-card"` في كل كرت.
* **السبب والدرس:** الـ `id` هو مُعرِّف فريد ومطلق لعنصر واحد فقط في الصفحة كاملة (Unique Identifier)، واستخدامه مكرراً يكسر معايير الـ W3C ويسبب مشاكل في الجافاسكريبت.
* **الحل:** تم استبداله بالصنف المشترك `class="travel-card"`.

### 5.2 الكود المكتوب للوحة الملخص
```html
        <aside class="summary-panel" id="itinerary-summary">
            <h2>Active Itinerary Summary</h2>
            <ul id="selected-trips-list">
                <li>Subtotal: <span id="summary-subtotal">$0.00</span></li>
                <li>Taxes & Fees: <span id="summary-tax">$0.00</span></li>
                <li>Total: <span id="summary-total">$0.00</span></li>
            </ul>
            <button id="confirm-booking-btn">Confirm Booking</button>
        </aside>
    </main>
</body>
</html>
```

### 5.3 الـ Commit المعتمد لهذه المرحلة
```bash
git add index.html
git commit -m "feat(html): build complete semantic structure for dashboard and summary panel"
git push
```

---

## المرحلة 6: التخطيط العام بالـ CSS (Flexbox & Reset)

### 1. الكود المنفذ في `src/css/style.css`
قمنا بربط الملف عبر `<link rel="stylesheet" href="src/css/style.css">` ثم كتبنا:
```css
/* تصفير الهوامش لضبط القياسات بدقة */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* تحويل الحاوية الكبرى إلى Flexbox أفقي */
body {
    display: flex;
    min-height: 100vh;
    font-family: Arial, sans-serif;
    background-color: #0f172a;
    color: #f8fafc;
}

/* ضبط الشريط الجانبي */
.sidebar {
    width: 260px;
    background-color: #1e293b;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

/* جعل المحتوى يملأ بقية الشاشة */
main {
    flex: 1;
    padding: 20px;
}
```

### 6.2 لماذا كتبناه بهذه الطريقة؟
* **`box-sizing: border-box`:** تضمن أن قيم الـ `padding` والـ `border` تُحسب ضمن العرض الإجمالي للعنصر ولا تؤدي لتمدده خارج الشاشة.
* **`display: flex` على الـ `body`:** لوضع الشريط الجانبي والمحتوى الرئيسي جنباً إلى جنب أفقياً.
* **`flex: 1` على الـ `main`:** تجعل منطقة المحتوى تتمدد تلقائياً لامتصاص كامل المساحة المتبقية من الشاشة مهما تغير مقاس شاشة المستخدم.

---

## المرحلة 7: حل تداخل التنسيقات وتقسيم الشاشة بالـ CSS Grid

### 7.1 المشكلة الهندسية التي واجهتنا
عندما استُخدم محدد الوسم العام `aside` في الـ CSS، أخذت لوحة الملخص (`summary-panel`) داخل الـ `main` نفس حجم وتصميم الشريط الجانبي للـ `body`.

### 7.2 الحل المعماري
1. تخصيص كلاس `.sidebar` للشريط الأيسر وكلاس `.summary-panel` للوحة الملخص.
2. إنشاء حاوية وسيطة تجمع بين قائمة الرحلات ولوحة الملخص فقط داخل `main` باسم `div.content-layout`.

#### الكود المحدث في `index.html`:
```html
    <main>
        <header>...</header>

        <!-- الحاوية الوسيطة للتقسيم الشبكي -->
        <div class="content-layout">
            <section id="trip-list">...</section>
            <aside class="summary-panel" id="itinerary-summary">...</aside>
        </div>
    </main>
```

#### الكود في `src/css/style.css`:
```css
.content-layout {
    display: grid;
    grid-template-columns: 1fr 320px;
    gap: 24px;
    margin-top: 24px;
}

.summary-panel {
    background-color: #1e293b;
    padding: 20px;
    border-radius: 12px;
    height: fit-content; /* تمنع اللوحة من التمدد العمودي القبيح */
}
```

### 7.3 النتيجة في المتصفح
انتقلت لوحة الحسابات فوراً إلى يمين الشاشة بعرض ثابت `320px`، بينما بقيت جهة اليسار مفتوحة بحرية `1fr` لقائمة الرحلات.

---

## المرحلة 8: شبكة البطاقات والهوية البصرية الحديثة (UI Polish)

### 8.1 الكود المكتوب في `src/css/style.css`
```css
/* 1. شبكة البطاقات: عمودين متساويين */
#trip-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
}

/* 2. تصميم بطاقة الرحلة كبطاقة عصرية */
.travel-card {
    background-color: #1e293b;
    border: 1px solid #334155;
    border-radius: 12px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

/* 3. تنسيق قائمة وروابط الشريط الجانبي */
.sidebar ul {
    list-style: none;
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.sidebar a {
    color: #94a3b8;
    text-decoration: none;
    font-size: 14px;
    padding: 8px 12px;
    border-radius: 8px;
    transition: background 0.2s, color 0.2s;
}

.sidebar a:hover {
    background-color: #334155;
    color: #f8fafc;
}

/* 4. ترويسة البحث */
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #334155;
    padding-bottom: 16px;
}

header input[type="search"] {
    background-color: #1e293b;
    border: 1px solid #334155;
    color: #f8fafc;
    padding: 8px 16px;
    border-radius: 8px;
    outline: none;
}

header input[type="search"]:focus {
    border-color: #10b981;
}

/* 5. الأزرار التفاعلية باللون الزمردي */
button {
    background-color: #059669;
    color: #ffffff;
    border: none;
    padding: 10px 16px;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s;
}

button:hover {
    background-color: #047857;
}
```

### 8.2 الـ Commit المعتمد
```bash
git add .
git commit -m "feat(ui): style dashboard layout with css grid, cards, and emerald action buttons"
git push
```

---

## المرحلة 9: نقل البيانات إلى كائنات JavaScript وبناء محرك الحقن الديناميكي

### 9.1 المفهوم البرمجي
في التطبيقات الحقيقية، لا تُكتب عناصر المنتجات أو الرحلات يدوياً داخل HTML. قمنا بتفريغ `<section id="trip-list"></section>` ونقل البيانات لمصفوفة كائنات (Array of Objects).

### 9.2 الكود المكتوب في `src/js/app.js`
```javascript
// مصفوفة بيانات الرحلات
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

const tripListContainer = document.getElementById("trip-list");

// دالة توليد عناصر الـ HTML ديناميكياً
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

// التشغيل المبدئي فور تحميل الصفحة
renderTrips(trips);
```

### 9.3 لماذا كتبناه بهذه الطريقة؟
* **`data-id="${trip.id}"`:** خاصية Custom Data Attribute مهمة جداً؛ حتى نعرف لاحقاً عند النقر على الزر رقم المعرف الدقيق للرحلة التي تم اختيارها.
* **`Template Literals (Backticks ``):`** تسهيل دمج المتغيرات مع وسوم الـ HTML بدون الحاجة لعمليات دمج نصوص معقدة (`+`).

---

## المرحلة 10: التطهير المعماري وفصل الـ CSS عن الـ HTML بالكامل

### 10.1 المبدأ الهندسي
لاحظنا وجود خصائص `style="..."` مكتوبة داخل نصوص الجافاسكريبت؛ فقمنا بعمل **Refactoring** فوري لإزالتها بالكامل ونقلها لكلاسات CSS نقية.

### 10.2 الكود المضاف في `src/css/style.css`
```css
/* تنسيقات كروت الرحلات المولدة عبر JS */
.travel-card img {
    width: 100%;
    height: 160px;
    object-fit: cover;
    border-radius: 8px;
}

.travel-card h3 {
    font-size: 16px;
    font-weight: 700;
}

.travel-card .price {
    color: #34d399;
    font-weight: bold;
}

.travel-card .details {
    color: #94a3b8;
    font-size: 13px;
}

/* تنسيقات عناصر لوحة الملخص */
.selected-trips-list {
    list-style: none;
    margin: 16px 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.selected-trip-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 13px;
    color: #cbd5e1;
    background-color: #0f172a;
    padding: 8px 12px;
    border-radius: 6px;
    border: 1px solid #334155;
}

.summary-totals {
    border-top: 1px solid #334155;
    padding-top: 12px;
    margin-top: 12px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-size: 14px;
}

.total-row {
    display: flex;
    justify-content: space-between;
    color: #94a3b8;
}

.total-row.total-highlight {
    color: #f8fafc;
    font-size: 16px;
    font-weight: bold;
    margin-top: 4px;
}

.price-value {
    color: #34d399;
    font-weight: bold;
}

.confirm-btn {
    width: 100%;
    margin-top: 16px;
}
```

---

## المرحلة 11: محرك تفويض الأحداث (Event Delegation) والحساب الفوري للأسعار

### 11.1 الكود في `src/js/app.js`
```javascript
// حالة الحجوزات المختارة
let bookedTrips = [];

// استهداف عناصر الملخص
const selectedTripsList = document.getElementById("selected-trips-list");
const subtotalEl = document.getElementById("summary-subtotal");
const taxEl = document.getElementById("summary-tax");
const totalEl = document.getElementById("summary-total");
const bookingCountEl = document.getElementById("total-trips-count");

// تفويض الأحداث
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
```

### 11.2 لماذا استخدمنا Event Delegation بدلاً من وضع Event لكل زر؟
لو وضعنا `btn.addEventListener` داخل حلقة التكرار، سنستهلك ذاكرة المتصفح مع كل كرت يتم توليده، وإذا قمنا بالبحث وتوليد كروت جديدة، ستضيع تلك المستمعات.  
**تفويض الأحداث:** وضع مستمع واحد فقط على الحاوية الأب الكبيرة (`tripListContainer`) يلتقط أي نقرة على أي زر داخلي بكفاءة عالية (Performance Optimization).

---

## المرحلة 12: محرك البحث والتصفية اللحظي (Real-Time Search)

### 12.1 الكود في `src/js/app.js`
```javascript
const searchInput = document.getElementById("search-input");

searchInput.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase().trim();

    // تصفية المصفوفة حسب الاسم والوصف
    const filteredTrips = trips.filter((trip) => {
        return trip.title.toLowerCase().includes(searchTerm) || 
               trip.description.toLowerCase().includes(searchTerm);
    });

    // إعادة رسم الكروت المفلترة
    renderTrips(filteredTrips);
});
```

### 12.2 لماذا كتبناه بهذه الطريقة؟
* **الحدث `input`:** يعمل مع كل ضغطة حرف أو مسح لحظياً دون انتظار ضغط زر Enter.
* **`.toLowerCase().trim()`:** لمنع الأخطاء الناتجة عن المسافات الزائدة أو اختلاف الحروف الكبيرة والصغيرة (Case-Insensitive).

---

## المرحلة 13: إدارة عناصر السلة، زر الحذف، وحالة الفراغ (Empty State)

### 13.1 الكود في `src/css/style.css`
```css
.remove-btn {
    background: transparent;
    border: none;
    color: #ef4444;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    padding: 0 4px;
    margin-left: 8px;
    border-radius: 4px;
}

.remove-btn:hover {
    background-color: rgba(239, 68, 68, 0.15);
    color: #f87171;
}

.empty-state-text {
    color: #64748b;
    font-size: 13px;
    text-align: center;
    padding: 16px 0;
    font-style: italic;
}

.confirm-btn:disabled {
    background-color: #334155;
    color: #64748b;
    cursor: not-allowed;
}
```

### 13.2 الكود في `src/js/app.js`
```javascript
// حذف عنصر من السلة عبر مؤشره (Index)
selectedTripsList.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-btn")) {
        const itemIndex = parseInt(e.target.dataset.index);
        bookedTrips.splice(itemIndex, 1);
        updateSummaryUI();
    }
});
```

---

## المرحلة 14: دوام البيانات والتخزين المحلي (State Persistence via LocalStorage)

### 14.1 الكود المكتوب في `src/js/app.js`
```javascript
// 1. استرجاع البيانات المحفوظة عند بداية التشغيل
let bookedTrips = JSON.parse(localStorage.getItem("savedBookings")) || [];

function updateSummaryUI() {
    // 2. مزامنة الحالة مع المتصفح فوراً
    localStorage.setItem("savedBookings", JSON.stringify(bookedTrips));

    selectedTripsList.innerHTML = "";
    const confirmBtn = document.getElementById("confirm-booking-btn");

    if (bookedTrips.length === 0) {
        selectedTripsList.innerHTML = `<li class="empty-state-text">No destinations selected yet.</li>`;
        subtotalEl.textContent = "$0.00";
        taxEl.textContent = "$0.00";
        totalEl.textContent = "$0.00";
        if (bookingCountEl) bookingCountEl.textContent = "0 Trips";
        if (confirmBtn) confirmBtn.disabled = true;
        return;
    }

    if (confirmBtn) confirmBtn.disabled = false;

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

    // استخدام دالة reduce الرياضية
    const subtotal = bookedTrips.reduce((sum, item) => sum + item.price, 0);
    const tax = subtotal * 0.10; // ضريبة 10%
    const total = subtotal + tax;

    subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    taxEl.textContent = `$${tax.toFixed(2)}`;
    totalEl.textContent = `$${total.toFixed(2)}`;

    if (bookingCountEl) {
        bookingCountEl.textContent = `${bookedTrips.length} Trips`;
    }
}
```

### 14.2 لماذا نستخدم `JSON.stringify` و `JSON.parse`؟
* الـ `localStorage` في المتصفح مصمم لاستقبال **نصوص فقط (Strings)**.
* لحفظ مصفوفة الكائنات نستخدم `JSON.stringify(bookedTrips)` لتحويلها لنص مهيكل.
* وعند فتح الصفحة نستخدم `JSON.parse(...)` لإعادتها إلى صيغة مصفوفة كائنات جافاسكريبت أصلية.

---

## المرحلة 15: دورة إتمام الحجز والنافذة المنبثقة (Confirmation Modal)

### 15.1 الهيكل في `index.html` (قبل نهاية `</body>`)
```html
<div id="booking-modal" class="modal-overlay hidden">
    <div class="modal-card">
        <div class="modal-icon">✓</div>
        <h3>Booking Confirmed!</h3>
        <p class="modal-subtitle">Your expedition itinerary has been successfully reserved.</p>
        
        <div class="modal-details">
            <p>Booking ID: <span id="modal-booking-id" class="highlight-text">#TV-0000</span></p>
            <p>Total Paid: <span id="modal-total-paid" class="highlight-text">$0.00</span></p>
        </div>

        <button id="close-modal-btn" class="modal-btn">Done & Plan Another Trip</button>
    </div>
</div>
```

### 15.2 التنسيق في `src/css/style.css`
```css
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(15, 23, 42, 0.85);
    backdrop-filter: blur(4px); /* ضبابية سينمائية ناعمة للخلفية */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.hidden {
    display: none;
}

.modal-card {
    background-color: #1e293b;
    border: 1px solid #334155;
    padding: 32px;
    border-radius: 16px;
    text-align: center;
    max-width: 400px;
    width: 90%;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5);
}

.modal-icon {
    width: 54px;
    height: 54px;
    background-color: rgba(16, 185, 129, 0.2);
    color: #10b981;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: bold;
    margin: 0 auto 16px auto;
}

.modal-details {
    background-color: #0f172a;
    padding: 12px 16px;
    border-radius: 8px;
    border: 1px solid #334155;
    margin-bottom: 24px;
    text-align: left;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.highlight-text {
    color: #34d399;
    font-weight: bold;
    float: right;
}
```

### 15.3 المنطق في `src/js/app.js`
```javascript
const bookingModal = document.getElementById("booking-modal");
const confirmBookingBtn = document.getElementById("confirm-booking-btn");
const closeModalBtn = document.getElementById("close-modal-btn");
const modalBookingId = document.getElementById("modal-booking-id");
const modalTotalPaid = document.getElementById("modal-total-paid");

confirmBookingBtn.addEventListener("click", () => {
    if (bookedTrips.length === 0) return;

    const subtotal = bookedTrips.reduce((sum, item) => sum + item.price, 0);
    const total = subtotal + (subtotal * 0.10);

    // توليد معرف حجز عشوائي
    const randomId = Math.floor(1000 + Math.random() * 9000);
    modalBookingId.textContent = `#TV-${randomId}`;
    modalTotalPaid.textContent = `$${total.toFixed(2)}`;

    bookingModal.classList.remove("hidden");
});

closeModalBtn.addEventListener("click", () => {
    bookingModal.classList.add("hidden");
    
    // تصفير الحالة والذاكرة المحلية
    bookedTrips = [];
    localStorage.removeItem("savedBookings");
    updateSummaryUI();
});
```

---

## المرحلة 16: التجاوب الكامل مع الهواتف والشاشات الصغيرة (Responsive Design)

### 16.1 الكود المكتوب في `src/css/style.css`
```css
@media (max-width: 900px) {
    /* تحويل تدفق الصفحة من أفقي إلى عمودي */
    body {
        flex-direction: column;
    }

    /* تحويل الشريط الجانبي إلى شريط علوي كامل العرض */
    .sidebar {
        width: 100%;
        padding: 16px;
        gap: 16px;
    }

    .sidebar ul {
        flex-direction: row;
        flex-wrap: wrap;
        margin-top: 12px;
        gap: 8px;
    }

    /* تحويل لوحة العرض إلى عمود واحد */
    .content-layout {
        grid-template-columns: 1fr;
    }

    /* جعل البطاقات عموداً واحداً مريحاً للقراءة على الهواتف */
    #trip-list {
        grid-template-columns: 1fr;
    }

    header {
        flex-direction: column;
        align-items: stretch;
        gap: 12px;
    }

    header input[type="search"] {
        width: 100%;
    }
}
```

---

## المرحلة 17: صياغة الـ README الاحترافي والنشر الحي على GitHub Pages

### 17.1 ملف `README.md` النهائي
```markdown
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
   git clone https://github.com/abderrahmenbouzaroura/travel-booking-dashboard.git
   ```

2. Navigate into the directory:
   ```bash
   cd travel-booking-dashboard
   ```

3. Open the project:
   - Double click `index.html` to open it in your browser, or
   - Use the **VS Code Live Server** extension, or run:
   ```bash
   npx serve .
   ```
```

### 17.2 خطوات النشر الحي (Deployment)
1. الدخول لمستودع المشروع على **GitHub** > الضغط على **Settings**.
2. اختيار **Pages** من القائمة اليسرى.
3. تحت **Branch** اختيار `main` ثم مجلد `/(root)` والضغط على **Save**.
4. تم إنشاء الرابط الحي العالمي للمشروع:
   `https://abderrahmenbouzaroura.github.io/travel-booking-dashboard/`

---

## ملخص الإنجاز والمعايير المكتسبة
بنهاية هذا المشروع، أتقنت عملياً:
* التفكير المعماري قبل البرمجة.
* الـ Semantic HTML5 وسهولة الوصول (a11y).
* التخطيط الحديث المتكامل بـ Flexbox و CSS Grid بدون أطر عمل.
* التلاعب بالـ DOM ديناميكياً وإدارة الأحداث بتقنية Event Delegation.
* حفظ وتحديث واسترجاع الحالة (State Management) باستخدام `localStorage`.
* توثيق مشاريع الويب بمعايير الصناعة على منصة GitHub.