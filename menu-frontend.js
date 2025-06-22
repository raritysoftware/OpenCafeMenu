// menu-frontend.ts
function animateCards() {
  const cards = document.querySelectorAll(".menu-card");
  cards.forEach((card, i) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    setTimeout(() => {
      card.style.transition = "opacity 0.5s, transform 0.5s";
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, 100 + i * 120);
  });
}
function showPage(page) {
  const menuSection = document.getElementById("menu-section");
  const aboutSection = document.getElementById("about-section");
  if (menuSection)
    menuSection.style.display = page === "menu" ? "" : "none";
  if (aboutSection)
    aboutSection.style.display = page === "about" ? "" : "none";
}
window.addEventListener("hashchange", () => {
  const hash = location.hash.replace("#", "");
  showPage(hash || "menu");
});
document.addEventListener("DOMContentLoaded", () => {
  const hash = location.hash.replace("#", "");
  showPage(hash || "menu");
});
fetch("menu.json").then((r) => r.json()).then((menu) => {
  const list = document.getElementById("menu-list");
  if (!list)
    return;
  const kategoriler = Array.from(new Set(menu.map((m) => m.kategori)));
  kategoriler.forEach((kat) => {
    const katDiv = document.createElement("div");
    katDiv.className = "menu-category-group col-12";
    katDiv.innerHTML = `<h3>${kat}</h3><div class="row justify-content-center"></div>`;
    list.appendChild(katDiv);
    const row = katDiv.querySelector(".row");
    menu.filter((m) => m.kategori === kat).forEach((item) => {
      const imgSrc = item.resim && item.resim.trim() ? item.resim : "https://via.placeholder.com/300x200?text=Resim+Yok";
      const div = document.createElement("div");
      div.className = "col-12 col-md-6 col-lg-4 d-flex justify-content-center";
      div.innerHTML = `
          <div class="card menu-card shadow-sm flex-fill h-100">
            <img src="${imgSrc}" class="card-img-top" alt="${item.isim}" style="object-fit:cover; height:180px; background:#eee;">
            <div class="card-body d-flex flex-column justify-content-between">
              <div>
                <div class="menu-title">${item.isim}</div>
                <div class="menu-price mb-2">${item.fiyat} TL</div>
              </div>
            </div>
          </div>
        `;
      row?.appendChild(div);
    });
  });
  animateCards();
});
fetch("about.json").then((r) => r.json()).then((about) => {
  const aboutText = document.getElementById("about-text");
  if (aboutText)
    aboutText.textContent = about.hakkimizda;
});
fetch("footer.json").then((r) => r.json()).then((footer) => {
  const copyright = document.getElementById("footer-copyright");
  const adres = document.getElementById("footer-adres");
  const tel = document.getElementById("footer-tel");
  const email = document.getElementById("footer-email");
  if (copyright)
    copyright.textContent = footer?.copyright || "";
  if (adres)
    adres.textContent = footer?.adres || "";
  if (tel)
    tel.textContent = footer?.telefon || "";
  if (email)
    email.textContent = footer?.email || "";
  const social = document.getElementById("footer-social");
  if (social && Array.isArray(footer?.sosyal)) {
    social.innerHTML = "";
    footer.sosyal.forEach((s) => {
      const a = document.createElement("a");
      a.href = s.url;
      a.title = s.ad;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.innerHTML = `<i class="bi bi-${s.icon}"></i>`;
      social.appendChild(a);
    });
  }
});
