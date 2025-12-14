import config from '../data/config.json';

export function Header() {
  return `
    <header class="main-header">
      <div class="main-header-container g-container g-flex">
        <div class="logo">
          <a href="${config.links.facebook}" target="_blank">
            <img src="/media/logo.png" alt="Ultrapanda Facebook">
          </a>
          <div class="floating-element"></div>
        </div>
        <div class="mobile-nav">
          <span></span>
          <span></span>
        </div>
        <nav class="menu g-flex">
          <div class="close-menu">
            <i class="bi bi-x-lg"></i>
          </div>
          <div class="main-menu">
            <ul class="g-flex">
              ${config.navigation.map(item => `
                <li><a href="${item.path}" class="nav-link">${item.label}</a></li>
              `).join('')}
            </ul>
          </div>
          <div class="second-menu">
            <ul class="g-flex">
              <li><a href="${config.links.signIn}" target="_blank">Sign In</a></li>
              <li><a href="${config.links.signUp}" target="_blank">Sign Up</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  `;
}

