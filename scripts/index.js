gsap.registerPlugin(ScrollToPlugin);
const burger = document.querySelector('.hamburger-menu');
const mobileNav = document.getElementById('mobile-menu');
const header = document.getElementById('header');
const home = document.getElementById('home');
const arrow = document.getElementById('arrow');
const loader = document.getElementById('loader');

// animations
window.addEventListener('load',()=>{
    if(window.innerWidth >= 1025){
        const ctrl = new ScrollMagic.Controller();
        $("section").each(function() {
        const vegan = $(this).find(".vegan-section");
        const hiking = $(this).find(".hiking-section");
        const yoga = $(this).find(".yoga-section");
        const meditation = $(this).find(".meditation-section");
        const tl = gsap.timeline();
        tl.from(vegan, {duration:1, opacity: 0}, "=-0.5");
        tl.from(hiking, {duration:0.6, opacity: 0, x: -1200}, "=-1");
        tl.from(yoga, {duration:0.6, opacity: 0, x: 1200});
        tl.from(meditation, {duration:0.6, opacity: 0}, "=-2");
        new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0.20
        })
            .setTween(tl)
            .addTo(ctrl);
        });
    }else return null;
})

// loader
const loading = gsap.timeline();
loading.to(loader, {duration: 1, opacity: 0, display: 'none'}, "+=1");

// showing mobile menu
const showNav = () => mobileNav.classList.toggle('active');
burger.addEventListener('click', showNav);

//  adding scrolled class to arrow
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if(scrollY >= 400){
        arrow.classList.add('scrolled')
    }else arrow.classList.remove('scrolled')
})

// navigation
const desktopNavigators = [...document.querySelectorAll('#desktop-nav a')];
const mobileNavigators = [...document.querySelectorAll('#mobile-nav a')];
const scrollToSection = e => {
    const anchor = e.target;
    if(anchor.textContent === "Contact"){
        gsap.to(window, {duration: 1, scrollTo:{y: '#contact', offsetY: 0}});
        mobileNav.classList.remove('active');
    }else if(anchor.textContent === "Psyche"){
        gsap.to(window, {duration: 1, scrollTo:{y: '#psyche', offsetY: 40}})
        mobileNav.classList.remove('active');
    }else if(anchor.textContent === "Activity"){
        gsap.to(window, {duration: 1, scrollTo:{y: '#activity', offsetY: 40}})
        mobileNav.classList.remove('active');
    }else if(anchor.textContent === "Diet"){
        gsap.to(window, {duration: 1, scrollTo:{y: '#diet', offsetY: 40}})
        mobileNav.classList.remove('active');
    }
}
arrow.addEventListener('click', ()=>{
    gsap.to(window, {duration: 1, scrollTo:{y: '#header', offsetY: 50}})
})
mobileNavigators.forEach(navigator => navigator.addEventListener('click', scrollToSection));
desktopNavigators.forEach(navigator => navigator.addEventListener('click', scrollToSection));