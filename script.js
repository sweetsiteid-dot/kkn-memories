// =========================
// ELEMENTS
// =========================

const openBtn = document.getElementById("openBtn");
const opening = document.getElementById("opening");
const mainContent = document.getElementById("mainContent");

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

const memoryBtn = document.getElementById("memoryBtn");


// =========================
// OPEN WEBSITE
// =========================

openBtn.addEventListener("click", () => {

    // PLAY MUSIC
    music.play().catch(() => {
        console.log("Music membutuhkan interaksi pengguna.");
    });


    // =========================
    // FALLING BLACK & WHITE EFFECT
    // =========================

    for(let i = 0; i < 60; i++){

        const item = document.createElement("div");

        const icons = [
            "✦",
            "✧",
            "•",
            "·",
            "🖤"
        ];

        item.innerHTML =
            icons[Math.floor(Math.random() * icons.length)];

        item.classList.add("falling");

        item.style.left =
            Math.random() * 100 + "vw";

        item.style.fontSize =
            (Math.random() * 15 + 12) + "px";

        item.style.opacity =
            Math.random() * 0.5 + 0.3;

        item.style.animationDuration =
            (Math.random() * 3 + 2) + "s";

        item.style.animationDelay =
            Math.random() * 1.5 + "s";

        document.body.appendChild(item);

        setTimeout(() => {
            item.remove();
        }, 6000);

    }


    // =========================
    // OPENING TRANSITION
    // =========================

    setTimeout(() => {

        opening.style.opacity = "0";
        opening.style.transition = "1s ease";

        setTimeout(() => {

            opening.style.display = "none";

            mainContent.style.display = "block";

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }, 1000);

    }, 1800);

});


// =========================
// MEMORY BUTTON
// =========================

memoryBtn.addEventListener("click", () => {

    document.getElementById("memories")
        .scrollIntoView({
            behavior: "smooth"
        });

});


// =========================
// MUSIC BUTTON
// =========================

musicBtn.addEventListener("click", () => {

    if(music.paused){

        music.play();

        musicBtn.innerHTML =
            "⏸ Pause Music";

    }else{

        music.pause();

        musicBtn.innerHTML =
            "🎵 Play Music";

    }

});


// =========================
// PHOTO SLIDER
// =========================

const slides =
    document.querySelectorAll(".slide");

const dots =
    document.querySelectorAll(".dot");

let currentSlide = 0;


function showSlide(index){

    slides.forEach((slide) => {

        slide.classList.remove("active");

    });


    dots.forEach((dot) => {

        dot.classList.remove("active");

    });


    if(slides[index]){
        slides[index].classList.add("active");
    }

    if(dots[index]){
        dots[index].classList.add("active");
    }

}


// =========================
// AUTO SLIDER
// =========================

setInterval(() => {

    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;

    }

    showSlide(currentSlide);

}, 3500);


// =========================
// DOT CLICK
// =========================

dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        currentSlide = index;

        showSlide(currentSlide);

    });

});


// =========================
// FLOATING SYMBOLS
// =========================

const heartsContainer =
    document.querySelector(".hearts");


function createHeart(){

    const heart =
        document.createElement("div");

    heart.classList.add("heart");


    const icons = [
        "✦",
        "✧",
        "·",
        "•",
        "🖤"
    ];


    heart.innerHTML =
        icons[
            Math.floor(
                Math.random() * icons.length
            )
        ];


    heart.style.left =
        Math.random() * 100 + "%";


    heart.style.fontSize =
        (Math.random() * 12 + 12) + "px";


    heart.style.opacity =
        Math.random() * 0.3 + 0.1;


    heart.style.animationDuration =
        (Math.random() * 5 + 8) + "s";


    heartsContainer.appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, 14000);

}


// Create floating particles
setInterval(createHeart, 900);


// =========================
// INITIAL
// =========================

showSlide(0);
