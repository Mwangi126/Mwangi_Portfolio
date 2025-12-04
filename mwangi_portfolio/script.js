// SMOOTH SCROLL
document.querySelectorAll('nav a').forEach(link=>{
  link.addEventListener('click',function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
    document.querySelector('.nav-links').classList.remove('open');
  });
});

// HAMBURGER MENU
const menuBtn=document.querySelector(".menu-btn");
const nav=document.querySelector(".nav-links");
menuBtn.addEventListener("click",()=>{nav.classList.toggle("open");});

// FADE-IN ON SCROLL
const revealElements=document.querySelectorAll(".section,.hero-content,.skill-card,.project-card,.service-card,.testimonial-card,.about-card");
const fadeInOnScroll=()=>{revealElements.forEach(el=>{const rect=el.getBoundingClientRect();if(rect.top<window.innerHeight-100){el.classList.add("visible");}});}
window.addEventListener("scroll",fadeInOnScroll);
window.addEventListener("load",fadeInOnScroll);

