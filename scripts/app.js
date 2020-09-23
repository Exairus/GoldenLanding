// SMOOTH SCROLL

//easing functions -- http://www.gizma.com/easing/
function smoothScroll(target, duration) {
    const scrollDownBtn = document.querySelector(target);
    // how much pxls i scrolled from viewport
    const startPosition = window.pageYOffset;

    const height = document.querySelector(".intro").offsetHeight;
    const distance = height - startPosition;
    // this will be used for requestAnimationFrame
    let startTime = null;

    function animation(currentTime) {
        if(startTime === null) startTime = currentTime;
        let timeElapsed = currentTime - startTime;
     
        const run = easeOutSine(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);

        if(timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    }

    const easeOutSine = function (t, b, c, d) {
        return c * Math.sin(t/d * (Math.PI/2)) + b;
    };
    
    // loop callback function for 60 fps
    requestAnimationFrame(animation);
}

const introScrollBtn = document.querySelector(".intro-scrollDown");
introScrollBtn.addEventListener("click", (e) => {
    e.preventDefault();
    smoothScroll(".services", 1000);
});

// burger

const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".intro-nav");
    const navLinks = document.querySelectorAll(".intro-nav li")

    burger.addEventListener("click", () => {
        nav.classList.toggle("intro-nav-active");

        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .3}s`;
            }
        });

        burger.classList.toggle('toggle');
    });
}

navSlide();

// scroll to element - smooth scroll library

const scroll = new SmoothScroll('.intro-nav a[href*="#"]', {
    speed: 800,
    speedAsDuration: true
});

    

