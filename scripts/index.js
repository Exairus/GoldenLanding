const scrollDownBtn = document.querySelector('.intro-scrollDown');
// position of element from viewport
const btnPos = scrollDownBtn.getBoundingClientRect().top;
// how much pxls i scrolled from viewport
const startPosition = window.pageYOffset;
// height of the intro
const height = document.querySelector(".intro").offsetHeight;



let result = btnPos - startPosition;
console.log(btnPos, startPosition, result);

scrollDownBtn.addEventListener("click", (e) => {
    e.preventDefault();

    window.scrollBy({
        top: result,
        behavior: 'smooth'
    })
});
