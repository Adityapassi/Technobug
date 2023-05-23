const header = document.querySelector("#header");

const sticky = header.offsetTop;
console.log(sticky)
window.addEventListener('scroll', () => {
    console.log(window.pageYOffset)
    if (window.pageYOffset >= sticky) {
      header.classList.add('active');
    } else {
      header.classList.remove('active');
    }
});