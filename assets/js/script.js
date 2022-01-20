if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}
function getUp () {
    window.scrollTo(0,0)
}
let animating = true;
// animation de deplacement du wrapper
function wrapperAnim () {
    const wrapper = document.getElementsByClassName('wrapper')[0];
    
        if (window.scrollY > 2) {
            wrapper.classList.remove('after-start-out');
            wrapper.classList.add('after-start-in');
        } else if (window.scrollY < 1) {
            wrapper.classList.add('after-start-out');
            wrapper.classList.remove('after-start-in');    
        }
    
}


window.addEventListener('scroll', function () {

    wrapperAnim()

})

// fade in des texte premiere section

function fadeInContent() {
    if (scrollY > 2) {
        let articles = document.getElementsByClassName("title-way");
        let articlesAnimDelayShort = document.getElementsByClassName("underline1");
        let articlesAnimDelayMedium = document.getElementsByClassName("text-img");
        for(let i = 0; i < articles.length; ++i){
            articles[i].classList.add("title-slideIn")
            setTimeout(function() {
                articles[i].classList.remove("d-none")

            }, 700)
        }
        for(let i = 0; i < articlesAnimDelayShort.length; ++i){
            articlesAnimDelayShort[i].classList.add("title-slideIn")
            setTimeout(function() {
                articlesAnimDelayShort[i].classList.remove("d-none")

            }, 700)
            
        }
        for(let i = 0; i < articlesAnimDelayMedium.length; ++i){
            articlesAnimDelayMedium[i].classList.add("content-slideIn")
            setTimeout(function() {
                articlesAnimDelayMedium[i].classList.remove("d-none")

            }, 1300)
        }
    }
}


window.addEventListener('scroll', function () {
    fadeInContent()
})
//parrallax image clavier demonte
const parallax = document.getElementsByClassName('img-content')[0];
window.addEventListener('scroll', function () {
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * -0.2 + "px";
})

//img3d clavier debut de page
const card = document.querySelector(".img3d");
const motionMatchMedia = window.matchMedia("(prefers-reduced-motion)");
const THRESHOLD = 15;

function handleHover(e) {
  const { clientX, clientY, currentTarget } = e;
  const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;

  const horizontal = (clientX - offsetLeft) / clientWidth;
  const vertical = (clientY - offsetTop) / clientHeight;
  const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
  const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);

  card.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
}

function resetStyles(e) {
  card.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
}

if (!motionMatchMedia.matches) {
  card.addEventListener("mousemove", handleHover);
  card.addEventListener("mouseleave", resetStyles);
}
//cursor
let innerCursor = document.querySelector('.inner-cursor');
let outerCursor = document.querySelector('.outer-cursor');
document.addEventListener('mousemove', moveCursor);
let links = Array.from(document.querySelectorAll("a"));
let imageKeeb = Array.from(document.querySelectorAll("img"));
let buttonss = Array.from (document.querySelectorAll(".btn"));
function moveCursor(e) {
    let x = e.clientX;
    let y = e.clientY; 
    innerCursor.style.left = `${x}px`;
    innerCursor.style.top = `${y}px`;
    outerCursor.style.left = `${x}px`;
    outerCursor.style.top = `${y}px`; 
}
imageKeeb.forEach((keeb) => {
    keeb.addEventListener('mouseover', () => {
        innerCursor.classList.add("grow");
    });
    keeb.addEventListener("mouseleave", () => {
        innerCursor.classList.remove("grow");
    });
})
links.forEach((link) => {
    link.addEventListener('mouseover', () => {
        innerCursor.classList.add("grow");
    });
    link.addEventListener("mouseleave", () => {
        innerCursor.classList.remove("grow");
    });
})
buttonss.forEach((button) => {
    button.addEventListener('mouseover', () => {
        innerCursor.classList.add("grow");
    });
    button.addEventListener("mouseleave", () => {
        innerCursor.classList.remove("grow");
    });
})


//fade in des texte seconde section

function fadeInContent2() {
    if (scrollY > 1700) {
        let articles = document.getElementsByClassName("title-description");
        let articlesAnimDelayShort = document.getElementsByClassName("underline2");
        let articlesAnimDelayMedium = document.getElementsByClassName("description-img");
        let articlesAnimDelayLong = document.getElementsByClassName("flex-video");
        for(let i = 0; i < articles.length; ++i){
            articles[i].classList.add("title-slideIn")
            setTimeout(function() {
                articles[i].classList.remove("d-none")

            }, 200)
        }
        for(let i = 0; i < articlesAnimDelayShort.length; ++i){
            articlesAnimDelayShort[i].classList.add("title-slideIn")
            setTimeout(function() {
                articlesAnimDelayShort[i].classList.remove("d-none")

            }, 200)
            
        }
        for(let i = 0; i < articlesAnimDelayMedium.length; ++i){
            articlesAnimDelayMedium[i].classList.add("content-slideIn")
            setTimeout(function() {
                articlesAnimDelayMedium[i].classList.remove("d-none")

            }, 700)
        }
        for(let i = 0; i < articlesAnimDelayLong.length; ++i){
            articlesAnimDelayLong[i].classList.add("content-slideIn")
            setTimeout(function() {
                articlesAnimDelayLong[i].classList.remove("d-none")

            }, 1400)
        }
    }
}


window.addEventListener('scroll', function () {
    fadeInContent2()
})

//fade in des texte troisieme section

function fadeInContent3() {
    if (scrollY > 3000) {
        let articles = document.getElementsByClassName("title-articles");
        let articlesAnimDelayShort = document.getElementsByClassName("underline3");
        let articlesAnimDelayMedium = document.getElementsByClassName("carousel");
        let articlesAnimDelayLong = document.getElementsByClassName("buy-section");
        for(let i = 0; i < articles.length; ++i){
            articles[i].classList.add("title-slideIn")
            setTimeout(function() {
                articles[i].classList.remove("d-none")

            }, 200)
        }
        for(let i = 0; i < articlesAnimDelayShort.length; ++i){
            articlesAnimDelayShort[i].classList.add("title-slideIn")
            setTimeout(function() {
                articlesAnimDelayShort[i].classList.remove("d-none")

            }, 200)
            
        }
        for(let i = 0; i < articlesAnimDelayMedium.length; ++i){
            articlesAnimDelayMedium[i].classList.add("content-slideIn")
            setTimeout(function() {
                articlesAnimDelayMedium[i].classList.remove("d-none")

            }, 1000)
        }
        for(let i = 0; i < articlesAnimDelayLong.length; ++i){
            articlesAnimDelayLong[i].classList.add("content-slideIn")
            setTimeout(function() {
                articlesAnimDelayLong[i].classList.remove("d-none")

            }, 1500)
        }
    }
}
window.addEventListener('scroll', function () {
    fadeInContent3()
})
/* carousel */
let images = [...document.querySelectorAll('.slider-img')]
images.forEach((image, idx) =>{
    image.style.backgroundImage = `url(assets/img/${idx+1}.png)`
})


let draggableSlider = function () {
    // DOM element(s)
    let slider = document.querySelector('.carousel')
    let innerSlider = document.querySelector('.slider')
  
    // Slider variables
    let pressed = false,
      startX,
      x;
  
    // Mousedown eventlistener
    slider.addEventListener("mousedown", (e) => {
      pressed = true;
      startX = e.offsetX - innerSlider.offsetLeft;
    });  
    // window
    window.addEventListener("mouseup", () => {
      pressed = false;
    });
    // Slider mousemove event listener
    slider.addEventListener("mousemove", (e) => {
      if (!pressed) return;
      e.preventDefault();
  
      x = e.offsetX;
  
      innerSlider.style.left = `${x - startX}px`;
  
      checkBoundry();
    });
  
    // Check boundry of outer and inner sliders
    function checkBoundry() {
      let outer = slider.getBoundingClientRect(),
        inner = innerSlider.getBoundingClientRect();
  
      if (parseInt(innerSlider.style.left) > 0) {
        innerSlider.style.left = "0px";
      } else if (inner.right < outer.right) {
        innerSlider.style.left = `-${inner.width - outer.width}px`;
      }
    }
  };
  
  // Invoke code
  draggableSlider();

