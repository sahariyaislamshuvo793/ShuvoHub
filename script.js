// =========================
// LOADER
// =========================

window.addEventListener("load", () => {
    setTimeout(() => {
        const loader = document.getElementById("loader");

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

    }, 3000);
});


// =========================
// TYPING EFFECT
// =========================

const text = [
    "Traveler",
    "Web Designer",
    "Dreamer",
    "Content Creator",
    "Future Millionaire"
];

let index = 0;
let char = 0;

const typing = document.querySelector(".typing");

function typeEffect(){

    if(char < text[index].length){

        typing.textContent += text[index].charAt(char);

        char++;

        setTimeout(typeEffect,100);

    }

    else{

        setTimeout(deleteEffect,1500);

    }

}

function deleteEffect(){

    if(char > 0){

        typing.textContent =
        text[index].substring(0,char-1);

        char--;

        setTimeout(deleteEffect,50);

    }

    else{

        index++;

        if(index >= text.length){

            index = 0;

        }

        setTimeout(typeEffect,300);

    }

}

typeEffect();


// =========================
// NAVBAR SHADOW
// =========================

window.addEventListener("scroll",()=>{

const nav=document.querySelector("nav");

if(window.scrollY>50){

nav.style.background="rgba(0,0,0,.8)";
nav.style.boxShadow="0 0 20px cyan";

}else{

nav.style.background="rgba(255,255,255,.05)";
nav.style.boxShadow="none";

}

});


// =========================
// BUTTON ANIMATION
// =========================

document.querySelectorAll("a").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.08)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

});
// =============================
// SCROLL REVEAL ANIMATION
// =============================

const revealElements = document.querySelectorAll(
".glass-card,.travel-box,.gallery img,.section-title"
);

function revealOnScroll(){

    revealElements.forEach(el=>{

        const top = el.getBoundingClientRect().top;

        const screen = window.innerHeight;

        if(top < screen - 100){

            el.style.opacity = "1";
            el.style.transform = "translateY(0px)";

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealElements.forEach(el=>{

    el.style.opacity="0";
    el.style.transform="translateY(60px)";
    el.style.transition="1s";

});

revealOnScroll();


// =============================
// MOUSE GLOW EFFECT
// =============================

const glow = document.createElement("div");

glow.style.position="fixed";
glow.style.width="20px";
glow.style.height="20px";
glow.style.borderRadius="50%";
glow.style.background="cyan";
glow.style.pointerEvents="none";
glow.style.filter="blur(15px)";
glow.style.zIndex="99999";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX-10+"px";
glow.style.top=e.clientY-10+"px";

});


// =============================
// IMAGE HOVER EFFECT
// =============================

document.querySelectorAll(".gallery img").forEach(img=>{

img.addEventListener("mouseenter",()=>{

img.style.transform="scale(1.08) rotate(2deg)";

});

img.addEventListener("mouseleave",()=>{

img.style.transform="scale(1)";

});

});


// =============================
// ACTIVE MENU
// =============================

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(sec=>{

const top=window.scrollY;
const offset=sec.offsetTop-150;
const height=sec.offsetHeight;

if(top>=offset && top<offset+height){

current=sec.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

// Counter Animation

const counters=document.querySelectorAll(".counter");

const runCounter=()=>{

counters.forEach(counter=>{

const target=+counter.dataset.target;

let count=0;

const update=()=>{

const speed=Math.ceil(target/100);

count+=speed;

if(count<target){

counter.innerText=count;

requestAnimationFrame(update);

}else{

counter.innerText=target;

}

};

update();

});

};

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

runCounter();

}

});

});

document.querySelectorAll("#stats").forEach(sec=>observer.observe(sec));
