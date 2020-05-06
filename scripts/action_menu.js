
import { getHero } from "./hero_creation.js";
import { $ } from "./helpers.js";
import { removeAllContent } from "./remove_all_content.js";
import { createButton, createParagraphInsideDivId, createButtonInsideDivId, createSaveLoadActionMenuButtons } from "./create_html_structure.js";
import { getEnemy } from "./models/enemy.js";
import { startFight, findEnemy } from "./fight.js";
import { inventoryMenu} from "./inventory_menu.js";







export const actionMenu = () =>{
    removeAllContent('header');
    removeAllContent('interface');
    removeAllContent('actions');

    createSaveLoadActionMenuButtons();
    
    createButtonInsideDivId('find-enemy-btn', 'Find enemy!', findEnemy, 'actions');
    createButtonInsideDivId('fight-btn', 'Fight!', startFight, 'actions');
    createButtonInsideDivId('use-hp-potion-btn', 'Use HP Potion', useHpPotion, 'actions');
    createButtonInsideDivId('inventory-menu-btn', 'Inventory Menu', inventoryMenu, 'actions');
    displayHeroStats();
    isLevelUp(getHero().exp, getHero().lvl);

}



export const displayHeroStats = () =>{
    removeAllContent('player-info');
    createParagraphInsideDivId('hero-stats', 
`Name: ${getHero().name}
Profession:      ${getHero().prof}
HP/Max HP:       ${getHero().hp}/${getHero().max_hp}
EP/Max EP:       ${getHero().ep}/${getHero().max_ep} 
Dmg Physical:    ${getHero().dmg_physical}
Dmg Energy:      ${getHero().dmg_energy}
Defense Phys:    ${getHero().defense_p}
Defense Ene:     ${getHero().defense_e}
Dodge:           ${getHero().dodge}
Gold:            ${getHero().gold}
Exp:             ${getHero().exp}
Lvl:             ${getHero().lvl}`, 'player-info');
}


const useHpPotion = () =>{
    getHero().usePotion();
    displayHeroStats();
}


function isLevelUp(currentExp, lvl){
    const expNeededToLevelUp = 20 * lvl * lvl - 15 * lvl;
    console.log(expNeededToLevelUp);
    if(currentExp >= expNeededToLevelUp){
        $('player-info').textContent = `LEVEL UP!!!`;
        getHero().lvl += 1;
        getHero().onLevelUp();
    }
}