import { getHero } from "../hero_creation.js";
import { $, removeAllContent, removeContent } from "../helpers.js";
import { createButton, createParagraphInsideDivId, createButtonInsideDivId, createSaveLoadActionMenuButtons, createActionMenuButton } from "../create_html_structure.js";
import { displayHeroStats, actionMenu } from "./action_menu.js";
import { enterLocation } from "./inLocation_menu.js";
import { Location } from "../models/location.js";
import { Enemy } from "../models/enemy.js";


let locationList = [];
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
    locationList = [];
    const parsedData = JSON.parse(result);
    const locations = parsedData.locations;
    for (let i = 0; i < locations.length; i++) {
        const enemies = [];
        const enemiesList = locations[i].enemiesList;
        for (let j = 0; j < enemiesList.length; j++) {
            enemies.push(new Enemy(enemiesList[j].name, enemiesList[j].hp, enemiesList[j].ep, enemiesList[j].dmg_physical, enemiesList[j].dmg_energy, enemiesList[j].defense_p, enemiesList[j].defense_p, enemiesList[j].dodge, enemiesList[j].exp, enemiesList[j].gold, enemiesList[j].lvl))
        }
        locationList.push(new Location(locations[i].type, locations[i].name, locations[i].minLvl, locations[i].maxLvl, enemies))
    }
    createLocationButtons(locationList);
}

function createLocationButtons (locationList) {
    for (let i = 0; i < locationList.length; i++){
        createButtonInsideDivId(locationList[i].type + `-btn`, `Enter ${locationList[i].name} (LVL: ${locationList[i].minLvl} - ${locationList[i].maxLvl})`, null, 'actions');
        $(locationList[i].type + `-btn`).addEventListener(`click`, function () {
            enterLocation(locationList[i]);
        });
    }
}