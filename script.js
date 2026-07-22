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
