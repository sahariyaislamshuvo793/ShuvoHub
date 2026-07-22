// ===== Page Load Animation =====
window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

// ===== Marker Click Effect =====
const markers = document.querySelectorAll(".marker");

markers.forEach(marker => {
    marker.addEventListener("click", () => {

        marker.style.transform = "scale(2)";

        setTimeout(() => {
            marker.style.transform = "scale(1)";
        }, 500);

    });
});

// ===== Card Animation =====
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";

        }

    });

});

cards.forEach(card=>{

    card.style.opacity="0";
    card.style.transform="translateY(60px)";
    card.style.transition=".8s";

    observer.observe(card);

});

// ===== Floating Title =====
const title=document.querySelector("header h1");

setInterval(()=>{

title.style.transform="translateY(-6px)";

setTimeout(()=>{
title.style.transform="translateY(0px)";
},600);

},1500);

// ===== Feather Icons =====
feather.replace();
