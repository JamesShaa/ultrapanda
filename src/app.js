import { Header } from './components/Header.js';
import { Footer } from './components/Footer.js';
import gamesData from './data/games.json';
import config from './data/config.json';

export function initApp() {
  const app = document.getElementById('app');
  
  app.innerHTML = `
    ${Header()}
    
    <!-- hero section -->
    <section class="home-hero relative">
      <img src="${config.hero.desktopBanner}" alt="Hero Banner" class="desktop-banner w-full">
      <img src="${config.hero.mobileBanner}" alt="Mobile Hero Banner" class="mobile-banner w-full hidden">
      <img src="${config.hero.pandaOverlay}" alt="Panda Overlay" class="panda-overlay absolute bottom-5 left-1/2 transform -translate-x-1/2 w-[100px] h-auto z-[1000] hidden">
      
      <div class="casino-shimmer"></div>
      <div class="lava-overlay">
        <div class="lava-flow"></div>
        <div class="lava-flow"></div>
        <div class="lava-flow"></div>
        <div class="lava-flow"></div>
      </div>
      <div class="lava-overlay-top">
        <div class="lava-flow-top"></div>
        <div class="lava-flow-top"></div>
        <div class="lava-flow-top"></div>
        <div class="lava-flow-top"></div>
      </div>
      <div class="promo-banner absolute top-1/2 left-[8%] transform -translate-y-1/2 z-[999]">
        <h2 class="offer-text text-2xl font-bold mb-2">${config.hero.offerText}</h2>
        <h1 class="bonus-text text-4xl font-bold mb-4">${config.hero.bonusText}</h1>
        <div class="promo-buttons flex gap-4">
          <a href="${config.links.playNow}" target="_blank" class="btn play px-6 py-3 bg-orange text-white rounded">Play Now</a>
          <a href="${config.links.signUp}" target="_blank" class="btn join px-6 py-3 bg-orange-light text-white rounded">Join Now</a>
        </div>
      </div>
    </section>
    
    <!-- SEO Intro Section -->
    <div class="seo-intro py-8 px-4 text-center">
      <p class="text-lg">${config.seoIntro}</p>
    </div>
    
    <!-- most popular games -->
    <section class="most-popular py-12">
      <div class="most-popular-container g-container">
        <h2 class="text-3xl font-bold text-center mb-8">Top Ultrapanda <span class="text-orange">Arcade Games</span></h2>
        <div class="most-popular-wrapper g-flex flex-wrap justify-center gap-4">
          ${gamesData.mostPopular.map(game => `
            <div class="most-popularbox relative">
              ${game.hasDesign ? `
                <div class="most-popular-design absolute ${game.designPosition === 'top' ? 'top-0' : 'bottom-0'}">
                  <img src="/media/cube-design.png" alt="">
                </div>
              ` : ''}
              <a href="${config.links.signUp}" target="_blank">
                <img src="${game.image}" alt="${game.alt}">
              </a>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
    
    <!-- dive into -->
    <section class="dive-into-main py-12">
      <div class="dive-into-container g-container g-flex flex-wrap items-center gap-8">
        <div class="dive-into-img flex-1 min-w-[300px]">
          <img src="/media/home-dive.png" alt="">
        </div>
        <div class="dive-into-content flex-1 min-w-[300px]">
          <h2 class="text-3xl font-bold mb-4">Dive into the Thrilling <span class="text-[#ff7f22]">Underwater Adventure!</span></h2>
          <p class="mb-4">
            Get ready to explore the deep sea with <strong>Ocean King</strong> – one of Ultrapanda's most popular <strong>online fish shooting games</strong>. Designed for players who crave action, strategy, and big wins, Ocean King delivers nonstop entertainment. Use your aim and firepower to catch exotic sea creatures, unlock hidden bonuses, and climb the leaderboards.
          </p>
          <p>
            Whether you're playing from desktop or mobile, Ultrapanda gives you instant access to this fast-paced <strong>arcade fish shooter</strong>. No downloads, no agents – just tap and play. Join thousands of gamers choosing Ultrapanda for their go-to <strong>fish game casino</strong>. Dive in today and start collecting <strong>real rewards, bonus coins, and exclusive offers</strong>.
          </p>
        </div>
      </div>
    </section>
    
    <!-- game recommendation -->
    <section class="game-recomendation py-12">
      <div class="game-recomendation-container g-container">
        <h3 class="text-3xl font-bold text-center mb-8">Game Recommend For <br>You This Week</h3>
        <div class="game-recomendation-wrapper g-flex flex-wrap justify-center gap-6">
          ${gamesData.recommended.map(game => `
            <div class="game-recomendation-box bg-gray-800 rounded-lg overflow-hidden">
              <div class="game-recomendation-box-wrapper g-flex flex-col md:flex-row">
                <div class="game-recomendation-img">
                  <img src="${game.image}" alt="${game.title}">
                </div>
                <div class="game-recomendation-content p-4">
                  <div>
                    <h4 class="text-xl font-bold mb-2">${game.title}</h4>
                    <span class="text-orange text-sm mb-2 block">${game.tags}</span>
                    <p class="mb-4 text-sm">${game.description}</p>
                    <a href="${config.links.signUp}" target="_blank" class="inline-block px-4 py-2 bg-orange text-white rounded">Download</a>
                  </div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
    
    <!-- most played games -->
    <section class="most-played-games-main py-12 relative">
      <div class="most-played-games-container g-container">
        <div class="most-played-design1 absolute">
          <img src="/media/most-played-design1.svg" alt="">
        </div>
        <div class="most-played-design2 absolute">
          <img src="/media/most-played-design2.svg" alt="">
        </div>
        <h3 class="text-3xl font-bold text-center mb-4">Most Played Games <br>Of The Year</h3>
        <p class="text-center mb-8 max-w-2xl mx-auto">We have data on the most played games this year and as a result, games about battles and wars are very popular with gamers at this time, so we recommend this game into your cart to be used as your game.</p>
        <div class="most-played-games-wrapper g-flex flex-wrap justify-center gap-6">
          ${gamesData.mostPlayed.map(game => `
            <div class="most-played-games">
              <div class="most-played-games-img mb-4">
                <img src="${game.image}" alt="Most played game ${game.id}">
              </div>
              <a href="${config.links.playNow}" target="_blank" class="block text-center px-6 py-3 bg-orange text-white rounded">Play now</a>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
    
    <section class="exp-main py-12">
      <div class="exp-container g-container text-center">
        <h4 class="text-3xl font-bold mb-4">Have An Unforgettable <br>Experience</h4>
        <p class="mb-6">Have an unforgettable experience and play now to <br>get attractive promos</p>
        <a href="${config.links.signUp}" target="_blank" class="inline-block px-8 py-3 bg-orange text-white rounded mb-12">Get Started</a>
        <div class="exp-services">
          <h4 class="text-2xl font-bold mb-8">Our Services</h4>
          <div class="services-wrapper g-flex flex-wrap justify-center gap-6">
            ${gamesData.services.map(service => `
              <div class="service-box">
                <img src="${service.image}" alt="Service ${service.id}">
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </section>
    
    <section class="copyright py-6 border-t border-gray-700">
      <div class="copyright-container g-flex g-container justify-between flex-wrap gap-4">
        <div class="copy1 copy">
          <p>${config.site.copyright}</p>
        </div>
        <div class="copy2 copy">
          <p>Privacy policy | Terms & Conditions</p>
        </div>
      </div>
    </section>
    
    ${Footer()}
  `;
  
  // Initialize JavaScript functionality
  initMobileMenu();
  initGameLinks();
}

function initMobileMenu() {
  const mobileNav = document.querySelector('.mobile-nav');
  const menu = document.querySelector('.menu');
  const closeMenu = document.querySelector('.close-menu');
  
  if (mobileNav && menu && closeMenu) {
    mobileNav.addEventListener('click', () => {
      menu.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
    
    closeMenu.addEventListener('click', () => {
      menu.classList.remove('active');
      document.body.style.overflow = 'auto';
    });
    
    document.addEventListener('click', (e) => {
      if (!menu.contains(e.target) && !mobileNav.contains(e.target)) {
        menu.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });
  }
}

function initGameLinks() {
  const mostPopular = document.querySelectorAll('.most-popularbox a');
  mostPopular.forEach(link => {
    link.href = config.links.signUp;
    link.setAttribute('target', '_blank');
  });
  
  const recommendedLinks = document.querySelectorAll('.game-recomendation-box a');
  recommendedLinks.forEach(link => {
    if (link.textContent === 'Download') {
      link.href = config.links.signUp;
      link.setAttribute('target', '_blank');
    }
  });
  
  const mostPlayed = document.querySelectorAll('.most-played-games a');
  mostPlayed.forEach(link => {
    link.href = config.links.playNow;
    link.setAttribute('target', '_blank');
  });
  
  const getStarted = document.querySelectorAll('.exp-main a');
  getStarted.forEach(link => {
    if (link.textContent.includes('Get Started')) {
      link.href = config.links.signUp;
      link.setAttribute('target', '_blank');
    }
  });
}

