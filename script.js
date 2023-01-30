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

    {
        url: "assets/portfolio/IMG_7729.jpg",
        caption:
            "Group of oystercatchers feeding | Morecambe Bay | January 2023",
    },
    {
        url: "assets/portfolio/IMG_7735.jpg",
        caption: " | Morecambe Bay | January 2023",
    },
    {
        url: "assets/portfolio/IMG_7746.jpg",
        caption: "Curlew looking for food | Morecambe Bay | January 2023",
    },
    {
        url: "assets/portfolio/IMG_7768.jpg",
        caption:
            "Oystercatcher looking for food in the rocks | Morecambe Bay | January 2023",
    },
    {
        url: "assets/portfolio/IMG_7772.jpg",
        caption: "Lapwing | Morecambe Bay | January 2023",
    },
    {
        url: "assets/portfolio/IMG_7788-2.jpg",
        caption: "Oystercatcher | Morecambe Bay | January 2023",
    },
    {
        url: "assets/portfolio/IMG_7808.jpg",
        caption: " | Morecambe Bay | January 2023",
    },
    {
        url: "assets/portfolio/IMG_7890.jpg",
        caption: "Pied wagtail | Hest Bank, Morecambe Bay | January 2023",
    },
    {
        url: "assets/portfolio/IMG_7919.jpg",
        caption: "Pied wagtail | Hest Bank, Morecambe Bay | January 2023",
    },
    {
        url: "assets/portfolio/IMG_7936.jpg",
        caption: "Unidentified formation | Morecambe Bay | January 2023",
    },
    {
        url: "assets/portfolio/IMG_7942.jpg",
        caption: " | Morecambe Bay | January 2023",
    },
    {
        url: "assets/portfolio/IMG_7951.jpg",
        caption: "Pheasant | Silverdale | January 2023",
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
