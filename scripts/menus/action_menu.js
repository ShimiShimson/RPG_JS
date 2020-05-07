import { getHero } from "../hero_creation.js";
import { $, removeAllContent } from "../helpers.js";
import { createButton, createParagraphInsideDivId, createButtonInsideDivId, createSaveLoadActionMenuButtons } from "../create_html_structure.js";
import { inventoryMenu} from "./inventory_menu.js";
import { fightMenu } from "./fight_menu.js";







export const actionMenu = () =>{
    removeAllContent('header');
    removeAllContent('interface');
    removeAllContent('actions');

    createSaveLoadActionMenuButtons();
    
    
    createButtonInsideDivId('inventory-menu-btn', 'Inventory Menu', null, 'actions');
    createButtonInsideDivId('fight-menu-btn', 'Fight Menu', null, 'actions');

    
    $('inventory-menu-btn').addEventListener('click', function(){
        inventoryMenu();
    });
    $('fight-menu-btn').addEventListener('click', function(){
        fightMenu();
    });
    
    displayHeroStats();
    

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
