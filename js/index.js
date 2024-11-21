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
const zap = document.querySelector(".zap");
const fireball = document.querySelector(".fireball");
const giantArrow = document.querySelector(".giantArrow");
const zapS = document.getElementById("zapS");
const gitanarrows = document.getElementById("giantarrowS");
const eqs = document.getElementById("eqS");
const fireballs = document.getElementById("fireballS");
const dmgP = document.querySelector(".zapP");
const dmgE = document.querySelector(".dmgE");
const dmgA = document.querySelector(".dmgA");
const dmgF = document.querySelector(".dmgF");

//function askes for spell and level to get the damage of the spell
function getSpellDamage(spellName, level) {
    const spell = spellsAndEquipments.find(spell => spell.name.toLowerCase() === spellName.toLowerCase());

    if (!spell) {
        return `Spell ${spellName} not found.`;
    }

    const levelData = spell.levels.find(lvl => lvl.level === level);

    if (!levelData) {
        return `Level ${level} not found for ${spellName}.`;
    }

    return levelData.damage;
}
//functionality for the button to create a card for the user to choose the building / level
newCardBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const newCard = document.createElement("div");
    //svg
    const exitIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    exitIcon.setAttribute("height", "24px");
    exitIcon.setAttribute("viewBox", "0 -960 960 960");
    exitIcon.setAttribute("width", "24px");
    exitIcon.setAttribute("fill", "#FFFFFF");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z");
    exitIcon.appendChild(path);
    newCard.appendChild(exitIcon)
    exitIcon.style.position = "absolute";
    exitIcon.style.top = "10px";
    exitIcon.style.right = "10px"
    exitIcon.style.cursor = "pointer"
    //svg functionality
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
    buildingLabel.classList.add("text")

    const selection = document.createElement("select");
    newCard.appendChild(selection);

    const firstOption = document.createElement("option");
    firstOption.text = "-";
    selection.appendChild(firstOption)
    //loops buildings object and add all obejcts to the option element
    Object.keys(buildings).forEach(buildingKey => {
        const option = document.createElement("option");
        option.textContent = buildingKey.charAt(0).toUpperCase() + buildingKey.slice(1);
        option.value = buildingKey;
        selection.appendChild(option)
    });
    //funcion to get the option image and insert it in the card container
    selection.addEventListener("change", (event) => {
        const selectedBuilding = event.target.value;
        
        const buildingEntry = Object.entries(buildings).find(([key, value]) => key === selectedBuilding);

        if(buildingEntry) {
            buildingLabel.remove();
            selection.remove();

            const buildingInfoContainer = document.createElement("div");
            newCard.appendChild(buildingInfoContainer);

            const buildingName = document.createElement("h3");
            buildingName.classList.add("text")
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
            slider.min = "1"
            slider.step = "1"
            slider.classList.add("levelSlider")
            //display the current lvl of the building
            const levels = buildingEntry[1].stats.length;
            slider.max = levels;
            slider.value = 1;
            //display health and level
            const levelDisplay = document.createElement("p");
            const healthDisplay = document.createElement("p");
            healthDisplay.classList.add("text")
            levelDisplay.classList.add("text")
            levelDisplay.textContent = `Level: ${slider.value}`;
            healthDisplay.textContent = `Health: ${buildingEntry[1].stats[0].health}`;
            sliderContainer.appendChild(levelDisplay);
            sliderContainer.appendChild(healthDisplay);



            slider.addEventListener("input", () => {
                const currentLevel = parseInt(slider.value, 10) - 1;
                const currentStats = buildingEntry[1].stats[currentLevel];
                levelDisplay.textContent = `Level: ${currentStats.level}`;
                healthDisplay.textContent = `Health: ${currentStats.health}`;
                buildingImage.src = currentStats.image;
                
            })
            
        }

    });
});

zapS.addEventListener("input", function() {
    const level = parseInt(zapS.value, 10);  // Convert input value to an integer
    const dmg = getSpellDamage("Lightning", level);  // Pass "Lightning" and the level
    dmgP.textContent = `Level: ${level} Damage: ${dmg}`;  // Correctly display the level and damage
});

eqs.addEventListener("input", function() {
    const level = parseInt(eqs.value, 10);  // Convert input value to an integer
    const dmg = getSpellDamage("earthquake", level);  // Pass "Lightning" and the level
    dmgE.textContent = `Level: ${level} Damage: ${dmg}`;  // Correctly display the level and damage
});

gitanarrows.addEventListener("input", function() {
    const level = parseInt(gitanarrows.value, 10);  // Convert input value to an integer
    const dmg = getSpellDamage("giantarrow", level);  // Pass "Lightning" and the level
    dmgA.textContent = `Level: ${level} Damage: ${dmg}`;  // Correctly display the level and damage
});

fireballS.addEventListener("input", function() {
    const level = parseInt(fireballS.value, 10);  // Convert input value to an integer
    const dmg = getSpellDamage("fireball", level);  // Pass "Lightning" and the level
    dmgF.textContent = `Level: ${level} Damage: ${dmg}`;  // Correctly display the level and damage
});