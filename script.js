const images = [
    "images/img1.jpg",
    "images/img2.jpg",
    "images/img3.jpg",
    "images/img4.jpg",
    "images/img5.jpg",
    "images/img6.jpg"
];

let currentIndex = 0;

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

function openLightbox(index){

    currentIndex = index;

    lightbox.style.display = "flex";

    lightboxImg.src = images[currentIndex];
}

function closeLightbox(){

    lightbox.style.display = "none";
}

function changeSlide(direction){

    currentIndex += direction;

    if(currentIndex < 0){
        currentIndex = images.length - 1;
    }

    if(currentIndex >= images.length){
        currentIndex = 0;
    }

    lightboxImg.src = images[currentIndex];
}
