const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");

const section = document.querySelector("section");
const end = section.querySelector("h1");


const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    duration:36000,
    triggerElemnt: intro, 
    triggerHook: 0
})
.addIndicators()
.setPin(intro)
.addTo(controller);


let accelamount= 0.1;
let scrollpos = 0;
let delay = 0;


scene.on('update', e=>{
    scrollpos = e.scrollPos/1000;
    // console.log(scrollPos);

})

setInterval(()=>{
    delay += (scrollpos-delay)*accelamount; 
    console.log(scrollpos, delay);

    video.currentTime = scrollpos;
}, 120)