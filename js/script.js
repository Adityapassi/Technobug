// For Changing background Color of Menu/Header
const header = document.querySelector("#header");

const sticky = header.offsetTop;
window.addEventListener('scroll', () => {
    if (window.pageYOffset > sticky) {
      header.classList.add('change-bg');
    } else {
      header.classList.remove('change-bg');
    }
    if(window.innerWidth <992){
      header.classList.remove('change-bg');
    }
});

// For Responsive Menu
let menuBtn = document.querySelector(".hamburger-menu")
menuBtn.addEventListener("click",function(){
  console.log("clicked")
    header.classList.toggle("active")
     if(window.innerWidth <992){
      header.classList.remove('active');
    }
})
