import { getHero } from "../hero_creation.js";
import { $, removeAllContent, isEmptyObject } from "../helpers.js";
import { createParagraphInsideDivId, createButtonInsideDivId } from "../create_html_structure.js";
import { displayHeroStats, actionMenu } from "./action_menu.js";


export const inventoryMenu = () =>{
    removeAllContent('header');
    removeAllContent('interface');
    removeAllContent('actions');
    displayHeroStats();
    createButtonInsideDivId('action-menu-btn', 'Action Menu', actionMenu, 'interface');
    //createButtonInsideDivId('see-equipment-btn', 'See your equipment', seeEquipment, 'interface');
    
    const inventory = getHero().inventory;
    
    const getItem = i => inventory[i];
    //if(getItem(i) === undefined))
    //console.log(getItem(i));
    const getItemType = i => getItem(i).type;
    //console.log(getItem(i));
    
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
            //$(`unequip-item${i}-btn`).disabled = true;
            checkIfEquipped(i);
            
            
            let item = getItem(i);
            //let slot;
            let slotEmpty;
            $(`equip-item${i}-btn`).addEventListener('click', function() {
                //console.log(getHero().equipmentSlots[item.slotType]);
                item = getItem(i);
                //slot = getHero().equipmentSlots[item.slotType];
                slotEmpty = isEmptyObject(getHero().equipmentSlots[item.slotType]);
                    if (slotEmpty) {
                        if (!item.equipped){
                            console.log(item);
                            item = getHero().equipItem(item);
                            console.log(item);
                            checkIfEquipped(i);
                            displayHeroStats();
                        } else {
                            return alert('This item is equipped!');
                        }
                    } else {
                        return alert(`Slot for ${item.type} occupied!`);
                    }
            });
            $(`unequip-item${i}-btn`).addEventListener('click', function() {
                    console.log(item);
                    getHero().unequipItem(item);
                    checkIfEquipped(i);
                    displayHeroStats();
            });
            
        } //for
    } //displayInventory()
    const checkIfEquipped = (i) =>{
        if (getItem(i).equipped) {
            $(`equip-item${i}-btn`).disabled = true;
            $(`unequip-item${i}-btn`).disabled = false;
            $('item'+i).style.fontWeight = "bold";
            $('item'+i).style.color = "d4af37";
        } else {
            $(`equip-item${i}-btn`).disabled = false;
            $(`unequip-item${i}-btn`).disabled = true;
            $('item'+i).style.fontWeight = "";
            $('item'+i).style.color = "";
        }
    }
    
    displayInventory();
}



