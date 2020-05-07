import { getHero } from "./hero_creation.js";
import { $ } from "./helpers.js";
import { removeAllContent } from "./remove_all_content.js";
import { createParagraphInsideDivId, createButtonInsideDivId } from "./create_html_structure.js";
import { displayHeroStats, actionMenu } from "./action_menu.js";


export const inventoryMenu = () =>{
    removeAllContent('header');
    removeAllContent('interface');
    removeAllContent('actions');
    displayHeroStats();
    createButtonInsideDivId('action-menu-btn', 'Action Menu', actionMenu, 'interface');

    const inventory = getHero().inventory;
    const getItem = i => inventory[i];
    const getItemType = i => getItem(i).type;
    
    const getItemStats = (i) =>{
        let stats = [];
        const statsObject = getItem(i).stats;
        const keys = Object.keys(statsObject);
        for (let i = 0; i < keys.length; i++){
            const key = keys[i];
            const value = statsObject[key];
            stats.push(`\r\n   ${key}: ${value}`);
        }
        stats = stats.join("");
        return stats;
    }
    

    const displayInventory = () =>{
        for (let i = 0; i<inventory.length; i++){
            
            createParagraphInsideDivId('item'+i, 
            `${getItemType(i)}: ${getItemStats(i)} \r\n`,
            'interface');
            createButtonInsideDivId  (`equip-item${i}-btn`,   'Equip Item', null, 'item'+i);
            createButtonInsideDivId(`unequip-item${i}-btn`, 'Unequip Item', null, 'item'+i);

            $(`equip-item${i}-btn`).addEventListener('click', function() {
                    getHero().equipItem(getItem(i));
                    displayHeroStats(); 
                }
            );
            $(`unequip-item${i}-btn`).addEventListener('click', function() {
                    getHero().unequipItem(getItem(i));
                    displayHeroStats();
                }
            );
        }
    }
    


    displayInventory();
}



