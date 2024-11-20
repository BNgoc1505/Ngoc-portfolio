const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});
const slides = document.querySelector('.slides');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const totalSlides = document.querySelectorAll('.slide').length;

let currentIndex = 0;

function updateSlidePosition() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}


prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; 
    updateSlidePosition();
});


nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides; 
    updateSlidePosition();
});


setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlidePosition();
}, 3000);
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { 
      
        header.classList.add('scrolled');
    } else {
        
        header.classList.remove('scrolled');
    }
});
const upToHomeBtn = document.getElementById('upToHome');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) { 
       
        upToHomeBtn.classList.add('visible');
    } else {
        
        upToHomeBtn.classList.remove('visible');
    }
});


upToHomeBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth', 
    });
});

