const photoCont = document.getElementById("photo-cont");
const photoModal = document.getElementById("photo-modal");
const htmlImages = document.getElementsByClassName("photo");
const imgCont = document.getElementsByClassName("img-cont")[0];
const closeBtn = document.getElementsByClassName("close-btn")[0];
console.log(htmlImages);

const photos = [
    {
        url: "assets/portfolio/IMG_7448.jpg",
        caption: "male Mandarin | Reddish Vale, Stockport | January 2023",
    },
    {
        url: "assets/portfolio/IMG_7475.jpg",
        caption:
            "male Tufted duck, mid-dive | Reddish Vale, Stockport | January 2023",
    },
    {
        url: "assets/portfolio/IMG_7509.jpg",
        caption:
            "male Tufted duck, mid-dive | Reddish Vale, Stockport | January 2023",
    },
    {
        url: "assets/portfolio/IMG_7583.jpg",
        caption: "Mallards | Reddish Vale, Stockport | January 2023",
    },
    {
        url: "assets/portfolio/IMG_7605.jpg",
        caption: "Mute swan | Reddish Vale, Stockport | January 2023",
    },
    {
        url: "assets/portfolio/IMG_7662.jpg",
        caption: "Mallards | Reddish Vale, Stockport | January 2023",
    },
    {
        url: "assets/portfolio/IMG_7672.jpg",
        caption: "Mallards | Reddish Vale, Stockport | January 2023",
    },
    {
        url: "assets/portfolio/IMG_7682.jpg",
        caption: "Group of mallards | Reddish Vale, Stockport | January 2023",
    },
];

photos.forEach((photo) => {
    photoCont.innerHTML += `<img src=${photo.url} class="photo" />`;
});

const showImgModal = (photo) => {
    photoModal.classList.remove("hidden");

    imgCont.innerHTML = `<img src=${photo.url} />`;
    imgCont.innerHTML += `<p>${photo.caption}</p>`;
};

for (let i = 0; i < htmlImages.length; i++) {
    htmlImages[i].addEventListener("click", () => {
        showImgModal(photos[i]);
    });
}

closeBtn.addEventListener("click", () => {
    photoModal.classList.add("hidden");
});
