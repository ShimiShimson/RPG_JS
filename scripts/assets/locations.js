import { $, removeAllContent, random } from "../helpers.js";
import { createActionMenuButton, createButtonInsideDivId } from "../create_html_structure.js";
import { locationsMenu } from "../menus/locations_menu.js";
import { getHero } from "../hero_creation.js";
import { fightMenu } from "../menus/fight_menu.js";
import { displayHeroStats } from "../menus/action_menu.js";
import { isPlayerDead } from "../fight/fight.js";

export function enterLocation(userLocation) {
    removeAllContent();
    displayHeroStats();

    const location = userLocation;
    const locationName = location.name
    $(`interface`).textContent = 
    `You entered ${locationName}.
    \r\nWhat do you want to do?`

    createButtonInsideDivId('fight-menu-btn', `Look for enemy to fight`, null, 'actions');
    createButtonInsideDivId('locations-menu-btn', `I'm scared - take me back!`, null, 'actions');
    $('fight-menu-btn').addEventListener('click', function () {
        if (isPlayerDead()) return actionMenu();
        fightMenu();
    });
    $('locations-menu-btn').addEventListener('click', function () {
        locationsMenu();
    });

}




function lvlRequirementNotMet(location) {
    const heroLvl = getHero().lvl;
    console.log(heroLvl)
    console.log(location.minLvl)
    if (heroLvl < location.minLvl) {
        alert(`Your level is too low for this location. Minimum level: ${location.minLvl}`)
        return true;
    }
    if (heroLvl > location.maxLvl) {
        alert(`Your level is too high for this location. Maximum level: ${location.maxLvl}`)
        return true;
    }
}

function displayLocationMenu(location) {
    removeAllContent();
    $(`interface`).textContent =
        `You entered ${location.name}.
    \r\nYour heart starts to beat faster.
    \r\nWhat do you want to do?`

    createButtonInsideDivId('go-further-btn', 'Look for enemy to fight with', null, 'actions');
    createButtonInsideDivId('go-back-btn', `I'm scared, take me back!`, null, 'actions');
    $('go-further-btn').addEventListener('click', function () {
        const enemy = getRandomEnemyFrom(location);
        console.log(enemy);
        fightMenu(enemy);
    });
    $('go-back-btn').addEventListener('click', function () {
        locationsMenu();
    });
}



