import { Header } from '../components/Header.js';
import { Footer } from '../components/Footer.js';
import gamesData from '../data/games.json';
import config from '../data/config.json';

export function Games() {
  return `
    ${Header()}
    
    <section class="games-hero relative">
      <div class="games-hero-container">
        <img src="/ultrapanda/media/games-hero.png" alt="Games Hero" class="w-full">
        <div class="games-hero-content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
          <div>
            <h1 class="text-4xl md:text-5xl font-bold mb-4">Play Game Everytime Always Be Winner And Strong</h1>
            <p class="text-lg">Improve your gaming skills by playing games that are currently so that you don't go out of style improve skills</p>
          </div>
        </div>
      </div>
    </section>
    
    <section class="games-main-filter py-8">
      <div class="games-main-filter-container g-container">
        <ul class="g-flex flex-wrap justify-center gap-4">
          <li class="games-filter-btn active cursor-pointer" data-filter="all">
            <b></b>
            <span><img src="/ultrapanda/media/all-game-icon.png" alt="All Games"></span>
            <strong>All Games</strong>
          </li>
          <li class="games-filter-btn cursor-pointer" data-filter="popular">
            <b></b>
            <span><img src="/ultrapanda/media/popular-game-icon.png" alt="Popular"></span>
            <strong>Popular</strong>
          </li>
          <li class="games-filter-btn cursor-pointer" data-filter="new">
            <b></b>
            <span><img src="/ultrapanda/media/new-game-icon.png" alt="New"></span>
            <strong>New</strong>
          </li>
          <li class="games-filter-btn cursor-pointer" data-filter="coming-soon">
            <b></b>
            <span><img src="/ultrapanda/media/coming-game-icon.png" alt="Other Games"></span>
            <strong>Other Games</strong>
          </li>
        </ul>
      </div>
    </section>
    
    <section class="games-filter-body py-12">
      <div class="games-filter-body-container g-container">
        <div class="games-filter-body-wrapper">
          <!-- All Games -->
          <div class="games-filter-box first-game-box active">
            <div class="games-filter-box-img g-flex flex-wrap gap-4">
              ${Array.from({ length: gamesData.gameCounts.all }, (_, i) => `
                <div class="game-box">
                  <a href="${config.links.signUp}" target="_blank">
                    <img src="/ultrapanda/media/games/all/${i + 1}.jpg" alt="Game ${i + 1}" class="rounded-lg">
                  </a>
                </div>
              `).join('')}
            </div>
          </div>
          
          <!-- Popular Games -->
          <div class="games-filter-box second-game-box">
            <div class="games-filter-box-img g-flex flex-wrap gap-4">
              ${Array.from({ length: gamesData.gameCounts.popular }, (_, i) => `
                <div class="game-box">
                  <a href="${config.links.signUp}" target="_blank">
                    <img src="/ultrapanda/media/games/popular/${i + 1}.jpg" alt="Popular Game ${i + 1}" class="rounded-lg">
                  </a>
                </div>
              `).join('')}
            </div>
          </div>
          
          <!-- New Games -->
          <div class="games-filter-box third-game-box">
            <div class="games-filter-box-img g-flex flex-wrap gap-4">
              ${Array.from({ length: gamesData.gameCounts.new }, (_, i) => `
                <div class="game-box">
                  <a href="${config.links.signUp}" target="_blank">
                    <img src="/ultrapanda/media/games/new/${i + 1}.jpg" alt="New Game ${i + 1}" class="rounded-lg">
                  </a>
                </div>
              `).join('')}
            </div>
          </div>
          
          <!-- Coming Soon Games -->
          <div class="games-filter-box four-game-box">
            <div class="games-filter-box-img g-flex flex-wrap gap-4">
              ${Array.from({ length: gamesData.gameCounts.comingSoon }, (_, i) => `
                <div class="game-box">
                  <a href="${config.links.signUp}" target="_blank">
                    <img src="/ultrapanda/media/games/coming-soon/${i + 1}.jpg" alt="Coming Soon Game ${i + 1}" class="rounded-lg">
                  </a>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section class="games-screenshots py-12">
      <h4 class="text-3xl font-bold text-center mb-8">Game Screenshots</h4>
      <div class="games-screenshots-container g-flex flex-wrap justify-center gap-4">
        ${[1, 2, 3, 4].map(i => `
          <div class="games-screenshot-box">
            <img src="/ultrapanda/media/screenshot-${i}.png" alt="Screenshot ${i}">
          </div>
        `).join('')}
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
}

export function initGames() {
  const filterBtns = document.querySelectorAll('.games-filter-btn');
  const filterBoxes = document.querySelectorAll('.games-filter-box');

  filterBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      filterBoxes.forEach(box => box.classList.remove('active'));
      filterBoxes[index].classList.add('active');
    });
  });
}

