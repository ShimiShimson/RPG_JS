import { getHero } from "../hero_creation.js";
import { $, removeAllContent, removeContent } from "../helpers.js";
import { createButton, createParagraphInsideDivId, createButtonInsideDivId, createSaveLoadActionMenuButtons } from "../create_html_structure.js";
import { inventoryMenu } from "./inventory_menu.js";
import { fightMenu, expToLevelUp } from "./fight_menu.js";
import { shopMenu } from "./shop_menu.js";
import { useHpPotion } from "../fight/playerAction.js";
import { isPlayerDead } from "../fight/fight.js";



export const actionMenu = () => {
    removeAllContent();

    createSaveLoadActionMenuButtons();
    createButtonInsideDivId('inventory-menu-btn', 'Inventory Menu', null, 'actions');
    createButtonInsideDivId('fight-menu-btn', 'Fight Menu', null, 'actions');
    createButtonInsideDivId('shop-menu-btn', 'Shop', null, 'actions');
    createButtonInsideDivId('restore-hp-btn', 'Restore HP', null, 'actions');


    $('inventory-menu-btn').addEventListener('click', function () {
        inventoryMenu();
    });
    $('fight-menu-btn').addEventListener('click', function () {
        if (isPlayerDead()) return actionMenu();
        fightMenu();
    });
    $('shop-menu-btn').addEventListener('click', function () {
        shopMenu();
    });
    $('restore-hp-btn').addEventListener('click', function () {
        getHero().hp = getHero().max_hp;
        actionMenu();
    });
    displayHeroStats();
}



export const displayHeroStats = () => {
    removeContent('player-info');
    createParagraphInsideDivId('hero-stats',
        `
Name:            ${getHero().name}
Profession:      ${getHero().prof}
HP/Max HP:       ${getHero().hp}/${getHero().max_hp}
EP/Max EP:       ${getHero().ep}/${getHero().max_ep} 
Dmg Physical:    ${getHero().dmg_physical}
Dmg Energy:      ${getHero().dmg_energy}
Defense Phys:    ${getHero().defense_p}
Defense Ene:     ${getHero().defense_e}
Dodge:           ${getHero().dodge}
Gold:            ${getHero().gold}
Exp/Next Lvl:    ${getHero().exp}/${expToLevelUp()}
Lvl:             ${getHero().lvl}`,
        'player-info');
}
