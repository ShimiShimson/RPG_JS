import { getHero } from "../hero_creation.js";
import { $, removeAllContent, removeContent } from "../helpers.js";
import { createButton, createParagraphInsideDivId, createButtonInsideDivId, createSaveLoadActionMenuButtons, createActionMenuButton } from "../create_html_structure.js";
import { displayHeroStats, actionMenu } from "./action_menu.js";
import { enterLocation } from "../assets/locations.js";
import { Location } from "../models/location.js";
import { Enemy } from "../models/enemy.js";


let locationsList = [];
export function locationsMenu() {
    removeAllContent();
    displayHeroStats();

    requestLocations(myHandler);
    createActionMenuButton();

    $('action-menu-btn').addEventListener('click', function () {
        actionMenu();
    });
}

export function requestLocations(callback, userLocationType) {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (this.readyState == 4 && this.status == 200) {
            callback(xhr.responseText, userLocationType);
        }
    };
    xhr.open("GET", "scripts/assets/locations_with_enemies.json");
    xhr.send();
}

export function myHandler(result, userLocationType) {
    locationsList = [];
    const parsedData = JSON.parse(result);
    const locations = parsedData.locations;
    for (let i = 0; i < locations.length; i++) {
        const enemies = [];
        const enemiesList = locations[i].enemiesList;
        for (let j = 0; j < enemiesList.length; j++) {
            enemies.push(new Enemy(enemiesList.name, enemiesList.hp, enemiesList.ep, enemiesList.dmg_physical, enemiesList.dmg_energy, enemiesList.defense_p, enemiesList.defense_p, enemiesList.dodge, enemiesList.exp, enemiesList.gold, enemiesList.lvl))
        }
        locationsList.push(new Location(locations[i].type, locations[i].name, locations[i].minLvl, locations[i].maxLvl, enemies))
    }
    createLocationButtons(locationsList);
}

// if (locations[i].type === userLocationType) {
//     if (lvlRequirementNotMet(location)) return locationsMenu();
//     displayLocationMenu(location);
// }


function createLocationButtons (locationList) {
    for (let i = 0; i < locationsList.length; i++){
        createButtonInsideDivId(locationsList[i].type + `-btn`, `Enter ${locationsList[i].name} (LVL: ${locationsList[i].minLvl} - ${locationsList[i].maxLvl})`, null, 'actions');
        $(locationsList[i].type + `-btn`).addEventListener(`click`, function () {
            enterLocation(locationsList[i]);
        });
    }
}