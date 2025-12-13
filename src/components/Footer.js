import config from '../data/config.json';

export function Footer() {
  return `
    <div class="messager">
      <a href="${config.links.facebook}" target="_blank">
        <img src="/media/messanger.svg" alt="">
      </a>
    </div>
  `;
}

