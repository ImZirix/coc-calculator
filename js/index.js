import { buildings } from "./buildings.js";
import { spellsAndEquipments } from './spellsAndEquipments.js';
const slider = document.querySelector(".slider");
const sliderLevel = document.querySelector(".level");
const cardLogo = document.querySelector(".cardLogo");
const hp = document.querySelector(".hp");
const spellSelect = document.querySelector(".spellSelect");
const levelSlider =  document.querySelector(".levelSlider");
const levelValue = document.querySelector(".levelValue");
const damageResult = document.querySelector(".damageResult");
const newCardBtn = document.getElementById("newCardBtn");
const main = document.querySelector(".main");
const root = document.documentElement;
const primaryColor = getComputedStyle(root).getPropertyValue("--primary-color")
const backgroundColor = getComputedStyle(root).getPropertyValue("--background-color");

function getSpellDamage(spellName, level) {
    const spell = spellsAndEquipments.find(spell=>  spell.name === spellName);
    const levelData = spell.levels.find(l => l.level === level);
    return  levelData ? levelData.damage : null;
}

function updateDamage() {
    const selectedSpellName = spellSelect.value;
    const selectedLevel = parseInt(levelSlider.value);
    const spell = spellsAndEquipments.find(spell => spell.name === selectedSpellName);
    
    if (!spell) {
        damageResult.textContent = "Spell not found.";
        return;
    }

    const spellLevel = spell.levels.find(level => level.level === selectedLevel);
    if (spellLevel) {
        damageResult.textContent = spellLevel.damage;
    } else {
        damageResult.textContent = "Level not found.";
    }
}

spellSelect.addEventListener("change", updateDamage);
levelSlider.addEventListener("input", () => {
    levelValue.textContent = levelSlider.value;
    updateDamage();
});

newCardBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const newCard = document.createElement("div");
    
    const exitIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");


    exitIcon.setAttribute("height", "24px");
    exitIcon.setAttribute("viewBox", "0 -960 960 960");
    exitIcon.setAttribute("width", "24px");
    exitIcon.setAttribute("fill", "#000000");

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z");
    exitIcon.appendChild(path);
    newCard.appendChild(exitIcon)
    exitIcon.style.position = "absolute";
    exitIcon.style.top = "10px";
    exitIcon.style.right = "10px"
    exitIcon.style.cursor = "pointer"
    
    exitIcon.addEventListener("click", function() {
        newCard.remove()
    })

    newCard.classList.add("card");
    main.appendChild(newCard)
    newCard.style.backgroundColor = backgroundColor.trim()
    newCard.style.width = "250px";
    newCard.style.height = "250px";
    newCard.style.position = "relative"

    const buildingLabel = document.createElement("lable");
    newCard.appendChild(buildingLabel);
    buildingLabel.textContent = "Select the building: "

    const selection = document.createElement("select");
    newCard.appendChild(selection);

    const firstOption = document.createElement("option");
    firstOption.text = "Select the building";
    selection.appendChild(firstOption)

    Object.keys(buildings).forEach(buildingKey => {
        const option = document.createElement("option");
        option.textContent = buildingKey.charAt(0).toUpperCase() + buildingKey.slice(1);
        option.value = buildingKey;
        selection.appendChild(option)
    });
    
    selection.addEventListener("change", (event) => {
        const selectedBuilding = event.target.value;
        
        const buildingEntry = Object.entries(buildings).find(([key, value]) => key === selectedBuilding);

        if(buildingEntry) {
            buildingLabel.remove();
            selection.remove();

            const buildingInfoContainer = document.createElement("div");
            newCard.appendChild(buildingInfoContainer);

            const buildingName = document.createElement("h3");
            buildingInfoContainer.appendChild(buildingName);
            buildingName.textContent = selectedBuilding.charAt(0).toUpperCase() + selectedBuilding.slice(1)

            const buildingImage = document.createElement("img");
            buildingImage.src = buildingEntry[1].stats[0].image;
            buildingImage.style.width = "80px"
            buildingInfoContainer.appendChild(buildingImage);

            const slider = document.createElement("input");
            const sliderContainer = document.createElement("div");
            newCard.appendChild(sliderContainer);
            sliderContainer.appendChild(slider);
            slider.type = "range"
            slider.max = "16"
            slider.min = "1"
            slider.step = "1"
            slider.classList.add("levelSlider")

            slider.addEventListener("change", function() {
                const level = parseInt(slider.value) - 1;

                
            })
            
        }

    });
});

updateDamage()