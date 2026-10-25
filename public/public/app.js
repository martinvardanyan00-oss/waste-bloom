// 10 Preset Partner Restaurants with realistic data
const partnerRestaurants = [
  { id: 1, name: "Loona Italian Restaurant", location: "Isahakyan St 28, Yerevan", avgKg: 55 },
  { id: 2, name: "Narnia Sushi Bar", location: "Pushkin St 12, Yerevan", avgKg: 35 },
  { id: 3, name: "The Beatles Pub & Grill", location: "Pushkin St 60, Yerevan", avgKg: 40 },
  { id: 4, name: "KEG Craft Pub", location: "Pushkin St 42, Yerevan", avgKg: 30 },
  { id: 5, name: "Lavash Dining", location: "Tumanyan St 21, Yerevan", avgKg: 85 },
  { id: 6, name: "Tavern Yerevan", location: "Amiryan St 5, Yerevan", avgKg: 90 },
  { id: 7, name: "Sherep Restaurant", location: "Amiryan St 1, Yerevan", avgKg: 80 },
  { id: 8, name: "Anakyut Traditional Kitchen", location: "Abovyan St 14, Yerevan", avgKg: 45 },
  { id: 9, name: "Dolmama Armenian Restaurant", location: "Pushkin St 10, Yerevan", avgKg: 50 },
  { id: 10, name: "Baking & Cafe Bistro", location: "Northern Ave 6, Yerevan", avgKg: 25 }
];

const i18n = {
  hy: {
    appTitle: "🌱 EcoWaste Armenia",
    appSubtitle: "Օրգանական թափոնների կառավարման և կոմպոստացման հարթակ",
    langLabel: "🌐 Լեզու:",
    stat1Title: "Հավաքված թափոն",
    stat2Title: "Խնայված CO₂",
    stat3Title: "Գործընկեր ռեստորաններ",
    restFormTitle: "🍽️ Ռեստորանների համար (Աղբի Հավաքագրում)",
    restSelectLabel: "Ընտրել Ռեստորանը",
    selectPlaceholder: "-- Ընտրեք ցանկից --",
    restLocLabel: "Հասցե/Վայր",
    restWeightLabel: "Մոտավոր Քանակ (կգ)",
    btnPickup: "Գրանցել Հավաքագրման Պատվեր",
    farmerFormTitle: "🚜 Ֆերմերների համար (Կոմպոստի Պատվեր)",
    farmerNameLabel: "Գնորդ / Ֆերմերային Տնտեսություն",
    farmerLocLabel: "Մարզ / Բնակավայր",
    farmerQtyLabel: "Քանակ (Տոննա)",
    btnOrder: "Պատվիրել Պարարտանյութ",
    tableTitle: "📋 Վերջին Հավաքագրման Հայտերը",
    thId: "ID",
    thRest: "Ռեստորան",
    thAddress: "Հասցե",
    thWeight: "Քանակ (կգ)",
    thStatus: "Կարգավիճակ",
    footerText: "© 2026 EcoWaste Armenia Demo Platform | Pilot Validation Stage",
    alertPickup: "Հավաքագրման հայտը հաջողությամբ գրանցվեց:",
    alertOrder: "Պարարտանյութի պատվերը գրանցվեց:",
    statusCompleted: "Ավարտված",
    statusPending: "Սպասման մեջ",
    unitKg: "կգ"
  },
  en: {
    appTitle: "🌱 EcoWaste Armenia",
    appSubtitle: "Organic Waste Management & Composting Platform",
    langLabel: "🌐 Language:",
    stat1Title: "Total Waste Collected",
    stat2Title: "CO₂ Saved",
    stat3Title: "Partner Restaurants",
    restFormTitle: "🍽️ For Restaurants (Waste Pickup Request)",
    restSelectLabel: "Select Restaurant",
    selectPlaceholder: "-- Select from list --",
    restLocLabel: "Address / Location",
    restWeightLabel: "Estimated Volume (kg)",
    btnPickup: "Schedule Waste Pickup",
    farmerFormTitle: "🚜 For Farmers (Order Compost)",
    farmerNameLabel: "Buyer / Farm Enterprise",
    farmerLocLabel: "Region / Location",
    farmerQtyLabel: "Quantity (Tons)",
    btnOrder: "Order Eco-Compost",
    tableTitle: "📋 Recent Pickup Requests",
    thId: "ID",
    thRest: "Restaurant",
    thAddress: "Address",
    thWeight: "Volume (kg)",
    thStatus: "Status",
    footerText: "© 2026 EcoWaste Armenia Demo Platform | Pilot Validation Stage",
    alertPickup: "Pickup request registered successfully!",
    alertOrder: "Compost order placed successfully!",
    statusCompleted: "Completed",
    statusPending: "Pending",
    unitKg: "kg"
  },
  ru: {
    appTitle: "🌱 EcoWaste Armenia",
    appSubtitle: "Платформа управления органическими отходами и компостирования",
    langLabel: "🌐 Язык:",
    stat1Title: "Собрано отходов",
    stat2Title: "Сэкономлено CO₂",
    stat3Title: "Рестораны-партнеры",
    restFormTitle: "🍽️ Для ресторанов (Заявка на вывоз)",
    restSelectLabel: "Выберите ресторан",
    selectPlaceholder: "-- Выберите из списка --",
    restLocLabel: "Адрес / Локация",
    restWeightLabel: "Ориентировочный вес (кг)",
    btnPickup: "Заказать вывоз отходов",
    farmerFormTitle: "🚜 Для фермеров (Заказ компоста)",
    farmerNameLabel: "Покупатель / Фермерское хозяйство",
    farmerLocLabel: "Регион / Населенный пункт",
    farmerQtyLabel: "Количество (Тонны)",
    btnOrder: "Заказать компост",
    tableTitle: "📋 Последние заявки на вывоз",
    thId: "ID",
    thRest: "Ресторан",
    thAddress: "Адрес",
    thWeight: "Вес (кг)",
    thStatus: "Статус",
    footerText: "© 2026 EcoWaste Armenia Demo Platform | Стадия пилотной валидации",
    alertPickup: "Заявка на вывоз успешно зарегистрирована!",
    alertOrder: "Заказ на компост успешно оформлен!",
    statusCompleted: "Завершено",
    statusPending: "В ожидании",
    unitKg: "кг"
  }
};

let currentLang = 'hy';

document.addEventListener('DOMContentLoaded', () => {
  const langSelect = document.getElementById('langSelect');
  langSelect.value = currentLang;

  populateRestaurantSelect();
  fetchStats();
  fetchPickups();

  langSelect.addEventListener('change', (e) => {
    currentLang = e.target.value;
    applyLanguage(currentLang);
    fetchPickups();
  });

  document.getElementById('restSelect').addEventListener('change', (e) => {
    const selectedId = parseInt(e.target.value);
    const rest = partnerRestaurants.find(r => r.id === selectedId);
    if (rest) {
      document.getElementById('restLoc').value = rest.location;
      document.getElementById('restWeight').value = rest.avgKg;
    }
  });

  document.getElementById('pickupForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const selectElem = document.getElementById('restSelect');
    if (!selectElem.value) return;
    const restaurantName = selectElem.options[selectElem.selectedIndex].text.split(' (')[0];
    const location = document.getElementById('restLoc').value;
    const weightKg = document.getElementById('restWeight').value;

    const res = await fetch('/api/pickups', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ restaurant: restaurantName, location, weightKg })
    });

    if (res.ok) {
      alert(i18n[currentLang].alertPickup);
      document.getElementById('pickupForm').reset();
      document.getElementById('restLoc').value = '';
      populateRestaurantSelect();
      fetchStats();
      fetchPickups();
    }
  });

  document.getElementById('orderForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const buyer = document.getElementById('farmerName').value;
    const location = document.getElementById('farmerLoc').value;
    const quantityTons = document.getElementById('farmerQty').value;

    const res = await fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ buyer, location, quantityTons })
    });

    if (res.ok) {
      alert(i18n[currentLang].alertOrder);
      document.getElementById('orderForm').reset();
    }
  });
});

function populateRestaurantSelect() {
  const select = document.getElementById('restSelect');
  select.innerHTML = `<option value="" disabled selected>${i18n[currentLang].selectPlaceholder}</option>`;
  
  partnerRestaurants.forEach(r => {
    const opt = document.createElement('option');
    opt.value = r.id;
    opt.innerText = `${r.name} (${r.avgKg} ${i18n[currentLang].unitKg}/day)`;
    select.appendChild(opt);
  });
}

function applyLanguage(lang) {
  const t = i18n[lang];
  document.getElementById('appTitle').innerText = t.appTitle;
  document.getElementById('appSubtitle').innerText = t.appSubtitle;
  document.getElementById('langLabel').innerText = t.langLabel;
  document.getElementById('stat1Title').innerText = t.stat1Title;
  document.getElementById('stat2Title').innerText = t.stat2Title;
  document.getElementById('stat3Title').innerText = t.stat3Title;
  document.getElementById('restFormTitle').innerText = t.restFormTitle;
  document.getElementById('restSelectLabel').innerText = t.restSelectLabel;
  document.getElementById('restLocLabel').innerText = t.restLocLabel;
  document.getElementById('restWeightLabel').innerText = t.restWeightLabel;
  document.getElementById('btnPickup').innerText = t.btnPickup;
  document.getElementById('farmerFormTitle').innerText = t.farmerFormTitle;
  document.getElementById('farmerNameLabel').innerText = t.farmerNameLabel;
  document.getElementById('farmerLocLabel').innerText = t.farmerLocLabel;
  document.getElementById('farmerQtyLabel').innerText = t.farmerQtyLabel;
  document.getElementById('btnOrder').innerText = t.btnOrder;
  document.getElementById('tableTitle').innerText = t.tableTitle;
  document.getElementById('thId').innerText = t.thId;
  document.getElementById('thRest').innerText = t.thRest;
  document.getElementById('thAddress').innerText = t.thAddress;
  document.getElementById('thWeight').innerText = t.thWeight;
  document.getElementById('thStatus').innerText = t.thStatus;
  document.getElementById('footerText').innerText = t.footerText;

  populateRestaurantSelect();
}

async function fetchStats() {
  const res = await fetch('/api/stats');
  const data = await res.json();
  const unit = i18n[currentLang].unitKg;
  document.getElementById('totalWaste').innerText = `${data.totalWasteKg} ${unit}`;
  document.getElementById('co2Saved').innerText = `${data.co2SavedKg} ${unit}`;
  document.getElementById('activeRestaurants').innerText = partnerRestaurants.length;
}

async function fetchPickups() {
  const res = await fetch('/api/pickups');
  const pickups = await res.json();
  const tbody = document.getElementById('pickupTableBody');
  tbody.innerHTML = '';

  const t = i18n[currentLang];

  pickups.reverse().forEach(p => {
    const isCompleted = p.status === 'Completed';
    const statusText = isCompleted ? t.statusCompleted : t.statusPending;

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>#${p.id}</td>
      <td><strong>${p.restaurant}</strong></td>
      <td>${p.location}</td>
      <td>${p.weightKg} ${t.unitKg}</td>
      <td><span style="color: ${isCompleted ? '#2e7d32' : '#ed6c02'}; font-weight:600;">● ${statusText}</span></td>
    `;
    tbody.appendChild(tr);
  });
}
