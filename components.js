// ============================================================
//  COMPONENTS.JS — споделен nav и footer за всички страници
// ============================================================

const NAV_LINKS = [
  { id: "albums",  label: "Портфолио",  href: "albums/" },
  { id: "about",   label: "За мен",  href: "about/" },
  { id: "blog",    label: "Блог",    href: "blog/" },
  { id: "reviews", label: "Отзиви",  href: "reviews/" },
];

// base: path prefix back to the site root. Subpages (one level deep) default to "../";
// the homepage passes "" since it already sits at the root.
function renderNav(active, base = "../") {
  const links = NAV_LINKS.map(
    (l) => `<li><a href="${base}${l.href}" class="${l.id === active ? "active" : ""}">${l.label}</a></li>`
  ).join("");
  const homeHref = base === "" ? "./" : base;

  return `
    <nav class="nav" id="siteNav">
      <a href="${homeHref}" class="nav-logo">Георги Луков</a>
      <ul class="nav-links">${links}</ul>
      <a href="${base}contact/" class="nav-contact">Контакт</a>
    </nav>`;
}

function renderFooter(base = "../") {
  const links = NAV_LINKS.map((l) => `<li><a href="${base}${l.href}">${l.label}</a></li>`).join("");

  return `
    <footer>
      <div class="footer-left">
        <div class="footer-name">Георги Луков</div>
        <div class="footer-tagline">Фотограф</div>
      </div>
      <div class="footer-center">
        <ul class="footer-nav">${links}</ul>
        <div class="footer-copy">© ${new Date().getFullYear()} Георги Луков. Всички права запазени.</div>
      </div>
      <div class="footer-right">
        <div class="footer-social">
          <a href="https://instagram.com/_georgilukov" target="_blank">Instagram</a>
        </div>
        <a href="mailto:georgi@createstudios.eu" class="footer-email">georgi@createstudios.eu</a>
      </div>
    </footer>`;
}

window.addEventListener("scroll", () => {
  const nav = document.getElementById("siteNav");
  if (!nav) return;
  nav.classList.toggle("scrolled", window.scrollY > 10);
});
