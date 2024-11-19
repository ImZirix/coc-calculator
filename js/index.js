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

const spellsAndEquipments = [
    {
        name: "Lightning",
        levels: [
            {level: 1, damage: 150},
            {level: 2, damage: 180},
            {level: 3, damage: 210},
            {level: 4, damage: 240},
            {level: 5, damage: 270},
            {level: 6, damage: 320},
            {level: 7, damage: 400},
            {level: 8, damage: 480},
            {level: 9, damage: 560},
            {level: 10, damage: 600},
            {level: 11, damage: 640},
        ]
    },

    {
        name: "Earthquake",
        levels: [
            {level: 1, damage: 0.145},
            {level: 2, damage: 0.17},
            {level: 3, damage: 0.21},
            {level: 4, damage: 0.25},
            {level: 5, damage: 0.29},
        ]
    },

    {
        name: "GiantArrow",
        levels: [
            {level: 1, damage: 750},
            {level: 2, damage: 750},
            {level: 3, damage: 850},
            {level: 4, damage: 850},
            {level: 5, damage: 850},
            {level: 6, damage: 1000},
            {level: 7, damage: 1000},
            {level: 8, damage: 1000},
            {level: 9, damage: 1200},
            {level: 10, damage: 1200},
            {level: 11, damage: 1200},
            {level: 12, damage: 1500},
            {level: 13, damage: 1500},
            {level: 14, damage: 1500},
            {level: 15, damage: 1750},
            {level: 16, damage: 1750},
            {level: 17, damage: 1750},
            {level: 18, damage: 1950},
        ]
    }
];

slider.oninput =  function() {
    sliderLevel.innerHTML = this.value;

    if(imageMap[this.value]) {
        cardLogo.src = imageMap[this.value]
        hp.textContent = hpMap[this.value]
    }
};