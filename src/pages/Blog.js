import { Header } from '../components/Header.js';
import { Footer } from '../components/Footer.js';

export function Blog() {
  return `
    ${Header()}
    <div class="h-screen pt-40 text-center flex flex-col items-center justify-center">
      <h1 class="text-4xl font-bold mb-4">Blog</h1>
      <p class="text-xl">Coming Soon...</p>
    </div>
    ${Footer()}
  `;
}

export function initBlog() {
  console.log('Blog initialized');
}
