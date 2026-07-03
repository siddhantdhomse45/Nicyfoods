// js/footer.js
// Injects the site-wide footer into <div id="footer-placeholder"></div>

document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("footer-placeholder");
  if (!el) return;

  el.innerHTML = `
    <footer class="relative bg-jaggery text-cream/80 overflow-hidden" style="font-family:'Poppins', sans-serif;">

      <!-- subtle rangoli watermark -->
      <svg class="pointer-events-none absolute -right-16 -top-16 w-64 h-64 opacity-[0.06]" viewBox="0 0 200 200" fill="none">
        <g stroke="#F2C14E" stroke-width="1.2">
          <circle cx="100" cy="100" r="90"/><circle cx="100" cy="100" r="65"/>
          <path d="M100 10 L100 190 M10 100 L190 100"/>
        </g>
      </svg>

      <div class="relative max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        <!-- About -->
        <div>
          <h3 class="text-marigold font-bold text-lg mb-4" style="font-family:'Rozha One', serif;">About NicyFoods</h3>
          <p class="text-sm leading-relaxed text-cream/60">
            NicyFoods is a trusted brand of handmade healthy food products established in 2017.
            We create premium ladoos with pure ghee, natural jaggery, and no harmful additives.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-marigold font-bold text-lg mb-4" style="font-family:'Rozha One', serif;">Quick Links</h3>
          <ul class="space-y-2 text-sm">
            <li><a href="index.html" class="footer-link text-marigold hover:text-turmeric transition-colors">Home</a></li>
            <li><a href="about.html" class="footer-link text-cream/70 hover:text-marigold transition-colors">About Us</a></li>
            <li><a href="products.html" class="footer-link text-cream/70 hover:text-marigold transition-colors">Products</a></li>
            <li><a href="contact.html" class="footer-link text-cream/70 hover:text-marigold transition-colors">Contact</a></li>
          </ul>
        </div>

        <!-- Popular Products -->
        <div>
          <h3 class="text-marigold font-bold text-lg mb-4" style="font-family:'Rozha One', serif;">Popular Products</h3>
          <ul class="space-y-2 text-sm">
            <li><a href="product-detail.html?id=peanut-laddu" class="footer-link text-cream/70 hover:text-marigold transition-colors">Peanut Laddu</a></li>
            <li><a href="product-detail.html?id=khajur-laddu" class="footer-link text-cream/70 hover:text-marigold transition-colors">Khajur Laddu</a></li>
            <li><a href="product-detail.html?id=ashwagandha-laddu" class="footer-link text-cream/70 hover:text-marigold transition-colors">Ashwagandha Laddu</a></li>
            <li><a href="product-detail.html?id=moringa-laddu" class="footer-link text-cream/70 hover:text-marigold transition-colors">Moringa Laddu</a></li>
          </ul>
        </div>

        <!-- Get in Touch -->
        <div>
          <h3 class="text-marigold font-bold text-lg mb-4" style="font-family:'Rozha One', serif;">Get in Touch</h3>
          <ul class="space-y-3 text-sm">
            <li class="footer-contact-item flex items-start gap-2">
              <svg class="footer-icon w-4 h-4 mt-0.5 flex-shrink-0 text-turmeric" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span><span class="text-cream font-semibold">Phone:</span> +91 8263001410</span>
            </li>
            <li class="footer-contact-item flex items-start gap-2">
              <svg class="footer-icon w-4 h-4 mt-0.5 flex-shrink-0 text-turmeric" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 6l-10 7L2 6"/>
                <path d="M2 6h20v12H2z"/>
              </svg>
              <span><span class="text-cream font-semibold">Email:</span> nicyfoods5@gmail.com</span>
            </li>
            <li class="footer-contact-item flex items-start gap-2">
              <svg class="footer-icon w-4 h-4 mt-0.5 flex-shrink-0 text-turmeric" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span><span class="text-cream font-semibold">Address:</span> Plot No 20, Saikrupa Society, Ingale Nagar, Warje Jakat Naka, Warje, Pune – 411052</span>
            </li>
          </ul>
        </div>

      </div>

      <!-- Bottom bar -->
      <div class="relative border-t border-cream/10">
        <div class="max-w-7xl mx-auto px-6 py-6 text-center text-sm text-cream/50 flex items-center justify-center gap-1.5 flex-wrap">
          <span>© 2017-2024 NicyFoods. All Rights Reserved. | Handcrafted with</span>
          <svg class="footer-heart w-4 h-4 text-kumkum" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none">
            <path d="M12 21s-6.7-4.35-9.33-8.2C1 10.4 1.4 6.9 4.1 5.1c2.2-1.5 5-.9 6.6 1 .4.5.9 1.1 1.3 1.7.4-.6.9-1.2 1.3-1.7 1.6-1.9 4.4-2.5 6.6-1 2.7 1.8 3.1 5.3 1.43 7.7C18.7 16.65 12 21 12 21z"/>
          </svg>
          <span>| Premium Healthy Ladoos</span>
        </div>
      </div>

      <style>
        #footer-placeholder .footer-link{ position:relative; display:inline-block; }
        #footer-placeholder .footer-link::after{
          content:''; position:absolute; left:0; bottom:-2px; width:0; height:1px;
          background:currentColor; transition:width .3s ease;
        }
        #footer-placeholder .footer-link:hover::after{ width:100%; }

        #footer-placeholder .footer-contact-item{ transition: transform .3s ease; }
        #footer-placeholder .footer-contact-item:hover{ transform: translateX(3px); }
        #footer-placeholder .footer-icon{ transition: transform .4s cubic-bezier(.34,1.56,.64,1); }
        #footer-placeholder .footer-contact-item:hover .footer-icon{ transform: scale(1.15) rotate(-6deg); }

        #footer-placeholder .footer-heart{ animation: footerHeartBeat 1.8s ease-in-out infinite; transform-origin:center; }
        @keyframes footerHeartBeat{
          0%, 100% { transform: scale(1); }
          15%      { transform: scale(1.18); }
          30%      { transform: scale(1); }
          45%      { transform: scale(1.1); }
          60%      { transform: scale(1); }
        }

        @media (prefers-reduced-motion: reduce){
          #footer-placeholder *{ animation:none !important; transition:none !important; }
        }
      </style>
    </footer>
  `;
});