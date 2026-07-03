// navbar.js - shared navbar component, loaded on every page

function loadNavbar() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  const navHTML = `
    <div id="site-navbar" class="fixed top-0 left-0 w-full z-50">
      <nav id="nav-bar-inner" class="bg-jaggery flex items-center justify-between px-6 md:px-10 py-4 transition-shadow duration-300" style="font-family:'Poppins', sans-serif;">
        <div class="flex items-center gap-3">
          <a href="index.html" class="flex items-center gap-3 group">
            <img src="https://nicyfoods.com/images/logo.png" alt="NicyFoods Logo" class="w-11 h-11 rounded-md object-cover ring-2 ring-marigold/30 transition-transform duration-300 group-hover:scale-105">
            <span class="text-cream text-2xl" style="font-family:'Rozha One', serif;">NicyFoods</span>
          </a>
        </div>

        <ul class="hidden md:flex items-center gap-10 text-cream font-semibold text-base">
          <li><a href="index.html" data-page="index.html" class="nav-link relative pb-1 hover:text-marigold transition-colors">Home</a></li>
          <li><a href="about.html" data-page="about.html" class="nav-link relative pb-1 hover:text-marigold transition-colors">About</a></li>
          <li><a href="products.html" data-page="products.html" class="nav-link relative pb-1 hover:text-marigold transition-colors">Products</a></li>
          <li><a href="contact.html" data-page="contact.html" class="nav-link relative pb-1 hover:text-marigold transition-colors">Contact</a></li>
        </ul>

        <button id="menu-btn" class="md:hidden text-cream focus:outline-none">
          <svg id="menu-icon-open" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg id="menu-icon-close" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </nav>

      <ul id="mobile-menu" class="mobile-menu-collapsed md:hidden bg-jaggery text-cream font-semibold text-lg flex flex-col gap-1 px-6 overflow-hidden" style="font-family:'Poppins', sans-serif;">
        <li><a href="index.html" data-page="index.html" class="nav-link-mobile block py-3 border-b border-cream/10 hover:text-marigold hover:pl-2 transition-all">Home</a></li>
        <li><a href="about.html" data-page="about.html" class="nav-link-mobile block py-3 border-b border-cream/10 hover:text-marigold hover:pl-2 transition-all">About</a></li>
        <li><a href="products.html" data-page="products.html" class="nav-link-mobile block py-3 border-b border-cream/10 hover:text-marigold hover:pl-2 transition-all">Products</a></li>
        <li><a href="contact.html" data-page="contact.html" class="nav-link-mobile block py-3 hover:text-marigold hover:pl-2 transition-all">Contact</a></li>
      </ul>
    </div>

    <style>
      #site-navbar .nav-link::after{
        content:''; position:absolute; left:0; bottom:-2px; width:0; height:2px;
        background:linear-gradient(90deg,#E8A33D,#F2C14E); border-radius:2px;
        transition:width .3s cubic-bezier(.16,.84,.44,1);
      }
      #site-navbar .nav-link:hover::after{ width:100%; }
      #site-navbar .nav-link.nav-active::after{ width:100%; }
      #site-navbar .nav-link.nav-active{ color:#F2C14E; }

      #site-navbar .nav-link-mobile.nav-active{ color:#F2C14E; }

      #site-navbar #mobile-menu{
        max-height:0;
        transition: max-height .4s cubic-bezier(.16,.84,.44,1), padding .4s ease;
        padding-top:0; padding-bottom:0;
      }
      #site-navbar #mobile-menu.mobile-menu-open{
        max-height:320px;
        padding-top:0.5rem; padding-bottom:0.5rem;
      }

      #nav-bar-inner.nav-scrolled{
        box-shadow: 0 8px 24px -12px rgba(58,36,23,.5);
      }

      @media (prefers-reduced-motion: reduce){
        #site-navbar *{ transition:none !important; }
      }
    </style>
  `;

  const placeholder = document.getElementById("navbar-placeholder");
  placeholder.innerHTML = navHTML;

  // "fixed" removes the navbar from normal document flow, so add a spacer
  // matching its height to stop page content jumping up underneath it.
  const navEl = document.getElementById("site-navbar");
  const navInner = document.getElementById("nav-bar-inner");
  const spacer = document.createElement("div");
  spacer.style.height = navEl.offsetHeight + "px";
  placeholder.after(spacer);

  // Recalculate spacer height once the logo image finishes loading,
  // in case it changes the navbar's height after initial render.
  const logoImg = navEl.querySelector("img");
  if (logoImg && !logoImg.complete) {
    logoImg.addEventListener("load", () => {
      spacer.style.height = navEl.offsetHeight + "px";
    });
  }

  // Highlight the active page's link
  document.querySelectorAll(".nav-link, .nav-link-mobile").forEach(link => {
    if (link.getAttribute("data-page") === currentPage) {
      link.classList.add("nav-active");
    }
  });

  // Subtle shadow once the page has scrolled, so the navbar reads as
  // "lifted" above content instead of a flat bar sitting on top of it.
  window.addEventListener("scroll", () => {
    if (window.scrollY > 8) {
      navInner.classList.add("nav-scrolled");
    } else {
      navInner.classList.remove("nav-scrolled");
    }
  }, { passive: true });

  // Mobile hamburger toggle
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const iconOpen = document.getElementById("menu-icon-open");
  const iconClose = document.getElementById("menu-icon-close");

  menuBtn.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("mobile-menu-open");
    iconOpen.classList.toggle("hidden", isOpen);
    iconClose.classList.toggle("hidden", !isOpen);
  });
}

document.addEventListener("DOMContentLoaded", loadNavbar);