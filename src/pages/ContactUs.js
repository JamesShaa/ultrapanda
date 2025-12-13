import { Header } from '../components/Header.js';
import { Footer } from '../components/Footer.js';
import config from '../data/config.json';

const faqs = [
  {
    question: "Can I play without downloading the app?",
    answer: "Currently, we exclusively offer our gaming experience through our app. However, we are actively working on expanding our accessibility options to provide you with alternative ways to enjoy our platform without the need for a download."
  },
  {
    question: "How to create an account and reload?",
    answer: "Simply reach out to us by sending a message on our Official Facebook pages. Our dedicated agents are ready to assist you through the process, ensuring a seamless experience for account creation and reloading."
  },
  {
    question: "I have a problem with my agent and cashout related concerns. Can you help?",
    answer: "We can only provide assistance for issues related to accounts created under our official pages. For concerns with accounts or interactions initiated elsewhere, we recommend reaching out directly to the respective agent or platform involved."
  },
  {
    question: "I want to become an agent?",
    answer: "If you're interested in joining our team as an agent, please send a message to our official Facebook account. We'll get back to you promptly with all the details you need to kick-start your journey with us."
  },
  {
    question: "where can i download the app?",
    answer: `To download the app, please click on the following link: <a href="${config.links.facebook}" target="_blank" class="text-orange hover:underline">${config.links.facebook}</a> If you encounter issues or have further questions, feel free to reach out to our support team for assistance.`
  }
];

export function ContactUs() {
  return `
    ${Header()}
    
    <section class="contact-hero relative">
      <div class="contact-hero-container">
        <img src="/media/contact-hero.jpg" alt="Contact Hero" class="w-full">
        <div class="contact-hero-content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10 max-w-3xl">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">CONTACT US</h1>
          <p>Have a question, issue, or feedback? We're here to help! Reach out to the Ultrapanda support team any time and we'll get back to you as quickly as possible. Whether it's about games, your account, or technical support — we're just a message away.</p>
        </div>
      </div>
    </section>
    
    <section class="faq-main py-12 relative">
      <div class="faq-overlay absolute inset-0 bg-black bg-opacity-30"></div>
      <div class="faq-container g-container relative z-10">
        <h3 class="text-3xl font-bold text-center mb-8">FAQ (FREQUENTLY ASKED QUESTIONS)</h3>
        
        <!-- Desktop FAQ -->
        <div class="faq-wrapper desk-faq g-flex hidden md:flex gap-8">
          <div class="faq-que flex-1">
            <ul>
              ${faqs.map((faq, index) => `
                <li class="faq-question cursor-pointer p-4 mb-2 bg-gray-800 rounded ${index === 0 ? 'active' : ''}" data-index="${index}">
                  ${faq.question}
                </li>
              `).join('')}
            </ul>
          </div>
          <div class="faq-answers flex-1">
            ${faqs.map((faq, index) => `
              <div class="faq-ans p-4 bg-gray-800 rounded ${index === 0 ? 'active' : ''}" data-index="${index}">
                <p>${faq.answer}</p>
                <div class="faq-ans-design"></div>
              </div>
            `).join('')}
          </div>
        </div>
        
        <!-- Mobile FAQ -->
        <div class="mobile-faq md:hidden">
          <ul>
            ${faqs.map((faq, index) => `
              <li class="mobile-faq-item cursor-pointer p-4 mb-2 bg-gray-800 rounded ${index === 0 ? 'active' : ''}">
                <span>${faq.question}</span>
                <i class="bi bi-plus-lg float-right"></i>
              </li>
              <div class="mobile-faq-ans p-4 bg-gray-700 rounded mb-2 ${index === 0 ? 'active' : ''}">
                <p>${faq.answer}</p>
                <div class="faq-ans-design"></div>
              </div>
            `).join('')}
          </ul>
        </div>
      </div>
    </section>
    
    <section class="contact-mail py-8 text-center">
      <div class="contact-mail-container">
        <a href="mailto:support@ultrapanda.xyz" class="text-orange hover:underline text-lg">
          <i class="bi bi-envelope"></i> support@ultrapanda.xyz
        </a>
      </div>
    </section>
    
    <section class="contact-form-main py-12 relative">
      <div class="contact-form-overlay absolute inset-0 bg-black bg-opacity-30"></div>
      <div class="contact-form-main-container g-container g-flex flex-wrap gap-8 relative z-10">
        <div class="contact-form-left flex-1 min-w-[300px] text-white">
          <div></div>
          <h3 class="text-3xl font-bold mb-4">LET'S GET IN TOUCH</h3>
          <p>Have a question, issue, or feedback? We're here to help! Reach out to the Ultrapanda support team any time and we'll get back to you as quickly as possible. Whether it's about games, your account, or technical support — we're just a message away.</p>
        </div>
        <div class="contact-form-right flex-1 min-w-[300px]">
          <form id="contactForm" class="space-y-4">
            <input type="text" name="firstname" placeholder="FIRST NAME..." required class="w-full p-3 bg-gray-800 text-white rounded border border-gray-700 focus:border-orange focus:outline-none">
            <input type="text" name="lastname" placeholder="LAST NAME..." required class="w-full p-3 bg-gray-800 text-white rounded border border-gray-700 focus:border-orange focus:outline-none">
            <input type="email" name="email" placeholder="YOUR MAIL..." required class="w-full p-3 bg-gray-800 text-white rounded border border-gray-700 focus:border-orange focus:outline-none">
            <input type="text" name="mobile" placeholder="YOUR PHONE..." maxlength="10" minlength="10" required class="w-full p-3 bg-gray-800 text-white rounded border border-gray-700 focus:border-orange focus:outline-none">
            <textarea name="message" placeholder="YOUR MESSAGE" required class="w-full p-3 bg-gray-800 text-white rounded border border-gray-700 focus:border-orange focus:outline-none h-32"></textarea>
            <button type="submit" class="submit-btn w-full px-8 py-3 bg-orange text-white rounded hover:bg-orange-light transition-colors">SEND MESSAGE</button>
          </form>
          <div id="formMessage" class="hidden mt-4 p-4 rounded"></div>
        </div>
      </div>
    </section>
    
    <section class="exp-main py-12">
      <div class="exp-container g-container text-center">
        <div class="exp-services">
          <h4 class="text-2xl font-bold mb-8">Our Services</h4>
          <div class="services-wrapper g-flex flex-wrap justify-center gap-6">
            ${[1, 2, 3].map(i => `
              <div class="service-box">
                <img src="/media/sevices-${i}.png" alt="Service ${i}">
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

export function initContactUs() {
  // Desktop FAQ
  const faqQuestions = document.querySelectorAll('.faq-question');
  const faqAnswers = document.querySelectorAll('.faq-ans');
  
  faqQuestions.forEach((question, index) => {
    question.addEventListener('click', () => {
      faqQuestions.forEach(q => q.classList.remove('active'));
      faqAnswers.forEach(a => a.classList.remove('active'));
      
      question.classList.add('active');
      faqAnswers[index].classList.add('active');
    });
  });
  
  // Mobile FAQ
  const mobileFaqItems = document.querySelectorAll('.mobile-faq-item');
  
  mobileFaqItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      const answer = item.nextElementSibling;
      const isActive = item.classList.contains('active');
      
      document.querySelectorAll('.mobile-faq-item').forEach(i => i.classList.remove('active'));
      document.querySelectorAll('.mobile-faq-ans').forEach(a => a.classList.remove('active'));
      
      if (!isActive) {
        item.classList.add('active');
        answer.classList.add('active');
      }
    });
  });
  
  // Contact Form
  const contactForm = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');
  
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector('.submit-btn');
      const formData = new FormData(contactForm);
      
      submitBtn.disabled = true;
      submitBtn.textContent = 'SENDING...';
      formMessage.classList.add('hidden');
      
      // Since we don't have a backend, just show a success message
      setTimeout(() => {
        formMessage.classList.remove('hidden');
        formMessage.className = 'block mt-4 p-4 rounded bg-green-500 text-white';
        formMessage.textContent = 'Thank you for your message! We will get back to you soon.';
        
        contactForm.reset();
        submitBtn.disabled = false;
        submitBtn.textContent = 'SEND MESSAGE';
      }, 1000);
    });
  }
}

