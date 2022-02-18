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
// animation de deplacement du wrapper
let boo = true;
const wrapper = document.getElementsByClassName('wrapper')[0];
function wrapperAnimation() {
    if (window.scrollY > 2 && boo == true) {
        document.body.style.overflow = 'hidden';
        wrapper.classList.remove('after-start-out');
        wrapper.classList.add('after-start-in');
        boo = false;
        setTimeout(function () {
            document.body.style.overflow = 'visible';
            document.body.style.overflowX = 'hidden';
        }, 2000)
    } else if (window.scrollY < 1) {
        boo = true;
        document.body.style.overflow = 'hidden';
        wrapper.classList.add('after-start-out');
        wrapper.classList.remove('after-start-in');
        setTimeout(function () {
            document.body.style.overflow = 'visible';
            document.body.style.overflowX = 'hidden';
        }, 2000)   
    }
}



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

//parrallax image clavier demonte
const parallax = document.getElementsByClassName('img-content')[0];
window.addEventListener('scroll', function () {
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * -0.2 + "px";
})
if(window.screen.width > 1000){
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
}else {
    let innerCursor = document.querySelector('.inner-cursor');
    let outerCursor = document.querySelector('.outer-cursor');
    innerCursor.classList.add("d-none")
    outerCursor.classList.add("d-none")
}

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

//fade in des texte troisieme section


window.addEventListener('scroll', function () {
    wrapperAnimation()
    fadeInContent()
    fadeInContent2()
})
/* carousel */
let images = [...document.querySelectorAll('.slide')]
images.forEach((image, idx) =>{
    image.style.backgroundImage = `url(assets/img/${idx+1}.png)`
})
function carousel (){
    var slider = document.getElementById('slider'),
    sliderItems = document.getElementById('items'),
    prev = document.getElementById('prev'),
    next = document.getElementById('next');

slide(slider, sliderItems, prev, next);

function slide(wrapper, items, prev, next) {
  var posX1 = 0,
      posX2 = 0,
      posInitial,
      posFinal,
      threshold = 100,
      slides = items.getElementsByClassName('slide'),
      slidesLength = slides.length,
      slideSize = items.getElementsByClassName('slide')[0].offsetWidth,
      firstSlide = slides[0],
      lastSlide = slides[slidesLength - 1],
      cloneFirst = firstSlide.cloneNode(true),
      cloneLast = lastSlide.cloneNode(true),
      index = 0,
      allowShift = true;
  
  // Clone first and last slide
  items.appendChild(cloneFirst);
  items.insertBefore(cloneLast, firstSlide);
  wrapper.classList.add('loaded');
  
  // Mouse and Touch events
  items.onmousedown = dragStart;
  
  // Touch events
  items.addEventListener('touchstart', dragStart);
  items.addEventListener('touchend', dragEnd);
  items.addEventListener('touchmove', dragAction);
  
  // Click events
  prev.addEventListener('click', function () { shiftSlide(-1) });
  next.addEventListener('click', function () { shiftSlide(1) });
  
  // Transition events
  items.addEventListener('transitionend', checkIndex);
  
  function dragStart (e) {
    e = e || window.event;
    e.preventDefault();
    posInitial = items.offsetLeft;
    
    if (e.type == 'touchstart') {
      posX1 = e.touches[0].clientX;
    } else {
      posX1 = e.clientX;
      document.onmouseup = dragEnd;
      document.onmousemove = dragAction;
    }
  }

  function dragAction (e) {
    e = e || window.event;
    
    if (e.type == 'touchmove') {
      posX2 = posX1 - e.touches[0].clientX;
      posX1 = e.touches[0].clientX;
    } else {
      posX2 = posX1 - e.clientX;
      posX1 = e.clientX;
    }
    items.style.left = (items.offsetLeft - posX2) + "px";
  }
  
  function dragEnd (e) {
    posFinal = items.offsetLeft;
    if (posFinal - posInitial < -threshold) {
      shiftSlide(1, 'drag');
    } else if (posFinal - posInitial > threshold) {
      shiftSlide(-1, 'drag');
    } else {
      items.style.left = (posInitial) + "px";
    }

    document.onmouseup = null;
    document.onmousemove = null;
  }
  
  function shiftSlide(dir, action) {
    items.classList.add('shifting');
    
    if (allowShift) {
      if (!action) { posInitial = items.offsetLeft; }

      if (dir == 1) {
        items.style.left = (posInitial - slideSize) + "px";
        index++;      
      } else if (dir == -1) {
        items.style.left = (posInitial + slideSize) + "px";
        index--;      
      }
    };
    
    allowShift = false;
  }
    
  function checkIndex (){
    items.classList.remove('shifting');

    if (index == -1) {
      items.style.left = -(slidesLength * slideSize) + "px";
      index = slidesLength - 1;
    }

    if (index == slidesLength) {
      items.style.left = -(1 * slideSize) + "px";
      index = 0;
    }
    
    allowShift = true;
  }
}
}
carousel()