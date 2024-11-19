const slider = document.querySelector(".slider");
const sliderLevel = document.querySelector(".level");
const cardLogo = document.querySelector(".cardLogo");
const hp = document.querySelector(".hp");
const imageMap = {
    16: "/image/townhalls/townhall_16_logo.webp",
    15: "/image/townhalls/townhall_15_logo.webp",
    14: "/image/townhalls/townhall_14_logo.webp",
    13: "/image/townhalls/townhall_13_logo.webp",
    12: "/image/townhalls/townhall_12_logo.webp",
    11: "/image/townhalls/townhall_11_logo.webp",
    10: "/image/townhalls/townhall_10_logo.webp",
    9: "/image/townhalls/townhall_9_logo.webp",
    8: "/image/townhalls/townhall_8_logo.webp",
    7: "/image/townhalls/townhall_7_logo.webp",
    6: "/image/townhalls/townhall_6_logo.webp",
    5: "/image/townhalls/townhall_5_logo.webp",
    4: "/image/townhalls/townhall_4_logo.webp",
    3: "/image/townhalls/townhall_3_logo.webp",
    2: "/image/townhalls/townhall_2_logo.webp",
    1: "/image/townhalls/townhall_1_logo.webp",
};
const hpMap = {
    16: 10000,
    15: 9600,
    14: 8900,
    13: 8200,
    12: 7500,
    11: 6800,
    10: 5500,
    9: 4600,
    8: 3900,
    7: 3300,
    6: 2800,
    5: 2400,
    4: 2100,
    3: 1850,
    2: 1600,
    1: 450,
};

slider.oninput =  function() {
    sliderLevel.innerHTML = this.value;

    if(imageMap[this.value]) {
        cardLogo.src = imageMap[this.value]
        hp.textContent = hpMap[this.value]
    }
};