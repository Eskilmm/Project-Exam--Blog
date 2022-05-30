let navbarDiv = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
    if(document.body.scrollTop > 40 || document.documentElement.scrollTop> 40){
        navbarDiv.classList.add('navbar-cng');
    }
    else{
        navbarDiv.classList.remove('navbar-cng');
    }
})

const navbarCollapseDiv = document.getElementById('navbar-collapse');
const navbarShowBtn = document.getElementById('navbar-show-btn');
const navbarCloseBtn = document.getElementById('navbar-close-btn');

// Få fram side bar
navbarShowBtn.addEventListener ('click', () => {
    navbarCollapseDiv.classList.add('navbar-collapse-rmw');
});

// Skjule sidebar

navbarCloseBtn.addEventListener('click', () => {
    navbarCollapseDiv.classList.remove('navbar-collapse-rmw');
});

document.addEventListener('click', (e) => {
    if(e.target.id != "navbar-collapse" && e.target.id != "navbar-show-btn" &&
     e.target.parentElement.id != "navbar-show-btn"){
         navbarCollapseDiv.classList.remove ('navbar-collapse-rmw');

     }
});

// stoppe transition når vindu resizer
let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove("resize-animation-stopper");
    }, 400);
});


const productContainers = [...document.querySelectorAll('product-container')];

const nxtBtn = [...document.querySelectorAll('nxt-btn')];
const preBtn = [...document.querySelectorAll('pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () =>{
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})
