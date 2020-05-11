//import { Item } from "./inventory.js";

import { getHero } from "../hero_creation.js";
import { EQUIPMENT_TYPE } from "../enums.js";
import { isEmptyObject, isNotEmptyObject } from "../helpers.js";


//declaring generic class Player
//Maybe I want to use it for actions common to all classes (eg. fighting, visit shop, inventory)
//methods are for testing
export class Player {
    constructor(equipmentSlots, consumables, inventory){
        this.equipmentSlots = equipmentSlots;
        this.consumables = consumables;
        this.inventory = inventory;
    }

    sayName(){
        console.log(`My name is ${this.name}`);
    }
    usePotion(){
        let potionAmount = this.consumables.potion.amount;
        if (potionAmount <= 0){
            alert('You have no more potions to use!');
        } else {
            console.log('POTION USED!');
            this.hp = this.hp + this.consumables.potion.hp_restored;
            const hpOverflow = this.hp > this.max_hp;
            const hpEqualsMax = () => this.hp = this.max_hp;
            if (hpOverflow) hpEqualsMax();
            this.consumables.potion.amount -= 1;
        }
    }
    equipItem(item){
        //console.log(this.inventory);
        
        const itemStats = item.stats;
        console.log(this.equipmentSlots[item.slotType]);

        this.equipmentSlots[item.slotType] = item;
        //delete this.inventory[item.id];
        

        item.equipped = true;
        addStats();
        
        function addStats (){
            if (itemStats.max_hp) getHero().max_hp += itemStats.max_hp;
            if (itemStats.max_ep) getHero().max_ep += itemStats.max_ep;
            if (itemStats.dmg_physical) getHero().dmg_physical += itemStats.dmg_physical;
            if (itemStats.dmg_energy) getHero().dmg_energy += itemStats.dmg_energy;
            if (itemStats.defense_p) getHero().defense_p += itemStats.defense_p;
            if (itemStats.defense_e) getHero().defense_e += itemStats.defense_e;
        }
        console.log(getHero().equipmentSlots);
        return this.equipmentSlots[item.slotType];
    }

    unequipItem(item){
        //console.log(this.inventory);
        //console.log(item);
        const itemStats = item.stats;

        item.equipped = false;
        removeStats();
        
        //empty the slot
        this.equipmentSlots[item.slotType] = {};
        

        function removeStats (){
            if (itemStats.max_hp) getHero().max_hp -= itemStats.max_hp;
            if (itemStats.max_ep) getHero().max_ep -= itemStats.max_ep;
            if (itemStats.dmg_physical) getHero().dmg_physical -= itemStats.dmg_physical;
            if (itemStats.dmg_energy) getHero().dmg_energy -= itemStats.dmg_energy;
            if (itemStats.defense_p) getHero().defense_p -= itemStats.defense_p;
            if (itemStats.defense_e) getHero().defense_e -= itemStats.defense_e;
        }
        //console.log(this.inventory);
    } // unequipItem()
} // Player