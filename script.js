import { tripInfo, weatherNotes, hotelHub, travelTips, memoryPhotos } from "./data/trip.js";
import { attractions } from "./data/attractions.js";
import { foodGuides } from "./data/food.js";
import { dayPlans, transportComparisons } from "./data/routes.js";

const byId = (id) => document.getElementById(id);
const detailsModal = byId("details-modal");
const modalContent = byId("modal-content");
const modalClose = byId("modal-close");
const favoritesKey = "love-trip-favorite-attractions";
let activePriority = "全部";
let activeFoodCity = "全部";
let lastFocusedElement = null;
const fallbackImage = "assets/images/photo-placeholder-1.svg";

document.addEventListener("error", (event) => {
  const image = event.target;
  if (!(image instanceof HTMLImageElement) || image.dataset.fallbackApplied === "true") return;
  image.dataset.fallbackApplied = "true";
  image.src = fallbackImage;
}, true);

const readFavorites = () => {
  try { return new Set(JSON.parse(localStorage.getItem(favoritesKey) || "[]")); }
  catch { return new Set(); }
};
const writeFavorites = (favoriteIds) => localStorage.setItem(favoritesKey, JSON.stringify([...favoriteIds]));
let favoriteIds = readFavorites();

const renderTodayRecommendation = () => {
  const now = new Date();
  const monthDay = `${String(now.getMonth() + 1).padStart(2, "0")}.${String(now.getDate()).padStart(2, "0")}`;
  const plan = dayPlans.find((item) => item.date.includes(monthDay));
  const card = document.querySelector(".weather-summary");
  if (!card) return;

  if (plan) {
    card.innerHTML = `<p class="card-kicker">今日行程 · ${plan.date}</p><h2 class="today-title">${plan.theme}</h2><ol class="today-route">${plan.stops.map((stop) => `<li>${stop}</li>`).join("")}</ol><a href="#daily-routes">查看今日路线 →</a>`;
  } else if (now < new Date("2026-08-03T19:00:00+08:00")) {
    const arrivalPlan = dayPlans[0];
    card.innerHTML = `<p class="card-kicker">今日行程 · ${arrivalPlan.date}</p><h2 class="today-title">${arrivalPlan.theme}</h2><ol class="today-route">${arrivalPlan.stops.map((stop) => `<li>${stop}</li>`).join("")}</ol><a href="#daily-routes">查看首日安排 →</a>`;
  } else {
    card.innerHTML = `<p class="card-kicker">旅行回顾</p><h2 class="today-title">把攻略变成回忆</h2><p>旅行结束后，可在底部照片区替换真实旅行记录。</p><a href="#memories">查看旅行记录 →</a>`;
  }
};

const syncOverviewMetrics = () => {
  const attractionMetric = document.querySelector(".metric-grid div:nth-child(3) strong");
  if (attractionMetric) attractionMetric.textContent = String(attractions.length);
};

const renderCover = () => {
  const cover = byId("overview-cover-image");
  if (!cover) return;
  cover.src = tripInfo.coverImage;
  cover.alt = "重庆城市封面图";
};

const renderWeather = () => {
  byId("weather-grid").innerHTML = weatherNotes.map(({ city, title, note }) => `<article class="weather-card"><h3>${city} · ${title}</h3><p>${note}</p></article>`).join("");
};

const renderHub = () => {
  byId("hub-destinations").innerHTML = hotelHub.destinations.map(({ name, time, method }) => `<li><span>${name}</span><small>${time} · ${method}</small></li>`).join("");
};

const renderDayTabs = (selectedIndex = 0) => {
  const tabs = byId("day-tabs");
  tabs.innerHTML = dayPlans.map((plan, index) => `<button class="day-tab" type="button" role="tab" aria-selected="${index === selectedIndex}" data-index="${index}">${plan.day}</button>`).join("");
  tabs.querySelectorAll(".day-tab").forEach((button) => button.addEventListener("click", () => renderDayTabs(Number(button.dataset.index))));
  renderDayPlan(dayPlans[selectedIndex]);
};

const renderDayPlan = (plan) => {
  byId("day-route-panel").innerHTML = `
    <article class="route-plan-card">
      <p class="route-kicker">${plan.day} · ${plan.date} <span>${plan.city}</span></p>
      <h3>${plan.theme}</h3><p class="route-focus">重点：${plan.focus}</p>
      <ol class="route-stops">${plan.stops.map((stop) => `<li>${stop}</li>`).join("")}</ol>
      <dl class="time-plan">${plan.schedule.map(({ label, text }) => `<div><dt>${label}</dt><dd>${text}</dd></div>`).join("")}</dl>
      <div class="route-transit"><span><b>出发：</b>${plan.arrivalTime}</span><span><b>结束：</b>${plan.departureTime}</span><span><b>时长：</b>${plan.estimatedDuration}</span><span><b>步行：</b>${plan.walkingDistance}</span><span><b>强度：</b>${plan.walkingLevel}</span><span><b>地铁：</b>${plan.transit.metro}</span><span><b>打车：</b>${plan.transit.taxi}</span></div>
      <p class="transport-advice"><b>家庭提示：</b>${plan.familyTips}<br /><b>用餐建议：</b>${plan.mealSuggestion}<br /><b>当日提醒：</b>${plan.tip}</p>
    </article>`;
};

const renderPriorityFilters = () => {
  byId("priority-filters").innerHTML = ["全部", "必去", "推荐", "备选"].map((priority) => `<button class="filter-button ${priority === activePriority ? "is-active" : ""}" type="button" data-priority="${priority}">${priority}</button>`).join("");
  byId("priority-filters").querySelectorAll("button").forEach((button) => button.addEventListener("click", () => { activePriority = button.dataset.priority; renderPriorityFilters(); renderAttractions(); }));
};

const favoriteLabel = (id) => favoriteIds.has(id) ? "已收藏" : "收藏";
const familyStars = (level) => ({ "高": "★★★★★", "中等": "★★★☆☆", "低": "★★☆☆☆" }[level] || "—");
const walkingStars = (level) => ({ "低": "★☆☆☆☆", "中等": "★★★☆☆", "高": "★★★★★" }[level] || "—");
const renderAttractions = () => {
  const visible = attractions.filter((item) => activePriority === "全部" || item.priority === activePriority);
  byId("attraction-grid").innerHTML = visible.map((item) => `
    <article class="attraction-card">
      <div class="attraction-image-wrap"><img class="attraction-image" src="${item.image}" alt="${item.name}图片占位图" /><span class="priority-badge">${item.priority}</span><span class="image-status">${item.imageSource.status}</span></div>
      <div class="attraction-summary"><h3>${item.name}</h3><p>${item.city} · 最佳：${item.bestTime}</p><div class="family-travel-meta"><span><b>家庭友好</b><i aria-label="家庭友好 ${item.familyLevel}">${familyStars(item.familyLevel)}</i></span><span><b>步行强度</b><i aria-label="步行强度 ${item.walkingLevel}">${walkingStars(item.walkingLevel)}</i></span></div><p class="family-suitable">适合：${item.suitableFor.join(" · ")}</p><div class="attraction-meta"><span>${item.rating}</span>${item.suitableFor.map((tag) => `<span>${tag}</span>`).join("")}</div><button class="details-button" type="button" data-attraction="${item.id}">查看路线与详情</button><button class="details-button favorite-toggle" type="button" data-favorite="${item.id}" aria-pressed="${favoriteIds.has(item.id)}">${favoriteLabel(item.id)}</button></div>
    </article>`).join("");
  byId("attraction-grid").querySelectorAll("[data-attraction]").forEach((button) => button.addEventListener("click", () => openAttraction(button.dataset.attraction, button)));
  byId("attraction-grid").querySelectorAll("[data-favorite]").forEach((button) => button.addEventListener("click", () => toggleFavorite(button.dataset.favorite)));
};

const toggleFavorite = (id) => {
  if (favoriteIds.has(id)) favoriteIds.delete(id); else favoriteIds.add(id);
  writeFavorites(favoriteIds);
  renderAttractions();
};

const openAttraction = (id, trigger) => {
  const item = attractions.find((attraction) => attraction.id === id);
  if (!item) return;
  lastFocusedElement = trigger;
  modalContent.innerHTML = `
    <img class="modal-image" src="${item.image}" alt="${item.name}图片占位图" />
    <p class="modal-kicker">${item.city} · ${item.priority} · 图片${item.imageSource.status}</p><h2 class="modal-title" id="modal-title">${item.name}</h2><p class="modal-rating">${item.rating}</p>
    <p class="modal-suitable">适合：${item.suitableFor.join(" · ")} · 家庭友好：${item.familyLevel} · 步行强度：${item.walkingLevel}</p>
    <section class="detail-block"><h3>建议游玩时间</h3><p>${item.duration}；最佳到访：${item.bestTime}</p></section>
    <section class="detail-block"><h3>推荐游玩顺序</h3><ol>${item.routeSuggestion.map((step) => `<li>${step}</li>`).join("")}</ol></section>
    <section class="detail-block"><h3>交通参考</h3><div class="modal-transit"><div><small>地铁</small><strong>${item.transit.metro}</strong></div><div><small>打车</small><strong>${item.transit.taxi}</strong></div></div></section>
    <section class="detail-block"><h3>拍照位置</h3><p>${item.photoSpots.join("、")}</p></section><section class="detail-block"><h3>附近美食</h3><p>${item.nearbyFood.join("、")}</p></section>
    <section class="detail-block"><h3>注意事项</h3><ul>${item.cautions.map((tip) => `<li>${tip}</li>`).join("")}</ul></section>
    <section class="detail-block"><h3>图片来源备注</h3><p>${item.imageSource.note}<br />建议文件名：${item.imageSource.target || item.imageSource.file}</p></section>`;
  detailsModal.classList.add("is-visible"); detailsModal.setAttribute("aria-hidden", "false"); document.body.classList.add("modal-open"); modalClose.focus();
};

const openFavorites = (trigger) => {
  lastFocusedElement = trigger;
  const saved = attractions.filter((item) => favoriteIds.has(item.id));
  modalContent.innerHTML = saved.length ? `<p class="modal-kicker">SAVED PLACES</p><h2 class="modal-title" id="modal-title">收藏景点</h2><p class="modal-suitable">已保存 ${saved.length} 个景点，点击可查看完整路线。</p>${saved.map((item) => `<section class="detail-block"><h3>${item.name} · ${item.priority}</h3><p>${item.duration} · ${item.bestTime} · 家庭友好：${item.familyLevel}</p><button class="details-button" type="button" data-saved-attraction="${item.id}">查看景点详情</button></section>`).join("")}` : `<p class="modal-kicker">SAVED PLACES</p><h2 class="modal-title" id="modal-title">还没有收藏景点</h2><p class="modal-suitable">在景点卡点击“收藏”，这里会保存在当前设备中。</p>`;
  modalContent.querySelectorAll("[data-saved-attraction]").forEach((button) => button.addEventListener("click", () => openAttraction(button.dataset.savedAttraction, button)));
  detailsModal.classList.add("is-visible"); detailsModal.setAttribute("aria-hidden", "false"); document.body.classList.add("modal-open"); modalClose.focus();
};

const closeModal = () => { detailsModal.classList.remove("is-visible"); detailsModal.setAttribute("aria-hidden", "true"); document.body.classList.remove("modal-open"); lastFocusedElement?.focus(); };

const renderFoodFilters = () => {
  byId("food-filters").innerHTML = ["全部", "重庆", "成都"].map((city) => `<button class="filter-button ${city === activeFoodCity ? "is-active" : ""}" type="button" data-city="${city}">${city}</button>`).join("");
  byId("food-filters").querySelectorAll("button").forEach((button) => button.addEventListener("click", () => { activeFoodCity = button.dataset.city; renderFoodFilters(); renderFood(); }));
};
const renderFood = () => {
  const visible = foodGuides.filter((item) => activeFoodCity === "全部" || item.city === activeFoodCity);
  byId("food-grid").innerHTML = visible.map((item) => `<article class="food-card"><img src="${item.image}" alt="${item.name}图片占位图" /><div class="food-content"><small>${item.city} · ${item.category} · 图片${item.imageSource.status}</small><h3>${item.name}</h3><p>${item.reason}</p><span class="food-distance">${item.suitableRoute}</span></div></article>`).join("");
};
const renderTransport = () => { byId("transport-list").innerHTML = transportComparisons.map((item) => `<article class="transport-card"><h3>${item.from} → ${item.to}</h3><div class="transport-grid"><div><small>距离</small><strong>${item.distance}</strong></div><div><small>地铁</small><strong>${item.metro}</strong></div><div><small>打车</small><strong>${item.taxi}</strong></div></div><p class="transport-advice"><b>推荐：</b>${item.advice}</p></article>`).join(""); };
const renderTips = () => { byId("tips-grid").innerHTML = travelTips.map(({ city, items }) => `<article class="tips-card"><h3>${city}</h3><ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul></article>`).join(""); };
const renderMemories = () => { byId("memory-grid").innerHTML = memoryPhotos.map((photo) => `<article class="photo-card"><div class="film-frame"><img src="${photo.image}" alt="${photo.location}旅行照片占位图" /></div><div class="photo-meta"><time>${photo.date}</time><span>${photo.location}</span><p>${photo.note}</p></div></article>`).join(""); };

byId("start-routes").addEventListener("click", () => byId("daily-routes").scrollIntoView({ behavior:"smooth", block:"start" }));
modalClose.addEventListener("click", closeModal);
detailsModal.addEventListener("click", (event) => { if (event.target === detailsModal) closeModal(); });
document.addEventListener("keydown", (event) => { if (event.key === "Escape" && detailsModal.classList.contains("is-visible")) closeModal(); });
document.querySelector(".bottom-nav a:last-child")?.addEventListener("click", (event) => { event.preventDefault(); openFavorites(event.currentTarget); });

renderCover(); renderTodayRecommendation(); syncOverviewMetrics(); renderWeather(); renderHub(); renderDayTabs(); renderPriorityFilters(); renderAttractions(); renderFoodFilters(); renderFood(); renderTransport(); renderTips(); renderMemories();
