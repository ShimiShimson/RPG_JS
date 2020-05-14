import { inventoryMenu } from "./inventory_menu.js";
import { $, removeAllContent } from "../helpers.js";
import { createParagraphInsideDivId, createButtonInsideDivId } from "../create_html_structure.js";
import { getHero } from "../hero_creation.js";
import { Potion } from "../models/item.js";
import { displayHeroStats, actionMenu } from "./action_menu.js";


let potionTypes = [];
potionTypes.push(new Potion(`tinyHealthPotion`, `Tiny Health Potion`, 50, 1, 1));
potionTypes.push(new Potion(`smallHealthPotion`, `Small Health Potion`, 100, 10, 1));
potionTypes.push(new Potion(`mediumHealthPotion`, `Medium Health Potion`, 150, 30, 1));
potionTypes.push(new Potion(`bigHealthPotion`, `Big Health Potion`, 250, 100, 1));
potionTypes.push(new Potion(`hugeHealthPotion`, `Huge Health Potion`, 500, 300, 1));


export function displayConsumables() {
    removeAllContent();
    createButtonInsideDivId('action-menu-btn', 'Action Menu', actionMenu, 'interface');
    displayHeroStats();
    for (let i = 0; i < potionTypes.length; i++) {
        let potion = potionTypes[i];
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
