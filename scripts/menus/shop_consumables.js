import { inventoryMenu } from "./inventory_menu.js";
import { $, removeAllContent } from "../helpers.js";
import { createParagraphInsideDivId, createButtonInsideDivId } from "../create_html_structure.js";
import { getHero } from "../hero_creation.js";
import { Potion } from "../models/item.js";
import { displayHeroStats, actionMenu } from "./action_menu.js";




export function displayConsumables() {

    removeAllContent();
    createButtonInsideDivId('action-menu-btn', 'Action Menu', actionMenu, 'interface');
    displayHeroStats();
    requestPotionTypes(myHandler)
}

export const potionTypesList = [];
function myHandler (result) {
    potionTypesList.length = 0;
    const parsedData = JSON.parse(result)
    for (let i = 0; i < parsedData.potionTypes.length; i++) {
        potionTypesList.push(new Potion(parsedData.potionTypes[i].type, parsedData.potionTypes[i].name, parsedData.potionTypes[i].hp_restored, parsedData.potionTypes[i].price, parsedData.potionTypes[i].amount));
    }
    createHTMLPotionTypes(potionTypesList);
}

export function requestPotionTypes(callback) {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function () {
        if (this.readyState == 4 && this.status == 200) {
            callback(xmlhttp.responseText);
        }
    };
    xmlhttp.open("GET", "scripts/assets/potion_types.json");
    xmlhttp.send();
}

function createHTMLPotionTypes(potionTypesList) {
    for (let i = 0; i < potionTypesList.length; i++) {
        let potion = potionTypesList[i];
        createParagraphInsideDivId(`${potion.type}`,
            `
    Type:       ${potion.name}
    HP Restore: ${potion.hp_restored}
    Price:      ${potion.price}
    \r\n`,
            'interface');


        createButtonInsideDivId(`${potion.type}-btn`, `Buy Potion`, null, `${potion.type}`);
        $(`${potion.type}-btn`).addEventListener('click', function () {
            if (getHero().gold < potion.price) return alert(`You don't have enough money!`);
            getHero().gold -= potion.price;
            if (getHero().consumables[potion.type]) {
                getHero().consumables[potion.type].amount += 1;
            } else {
                getHero().consumables[potion.type] = potion;
            }
            console.log(getHero().consumables[potion.type]);
            displayConsumables();
        });
    }
}