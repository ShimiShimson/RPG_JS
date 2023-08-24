import { random } from "../helpers.js";
import { EQUIPMENT_TYPE } from "../enums.js";
import { getHero } from "../hero_creation.js";
//import { getRandomPrefix, getRandomSuffix } from "../database/firebase.js";

window.globalCounter = 0;


export class Item {
    constructor(){
    }
}

export class Potion extends Item{
    constructor(type, name, hp_restored, price, amount)
    {
        super();
        this.id = globalCounter++;
        this.type = type;
        this.name = name;
        this.hp_restored = hp_restored;
        this.price = price;
        this.amount = amount;
    }
}

export class Equipment extends Item{
    constructor(prefix, suffix)
    {
        super();
        this.id = globalCounter++
        this.type = getRandomType();
        this.slotType = EQUIPMENT_TYPE[this.type].slotType;
        this.stats = getRandomStats(this.type);
        this.equipped = false;
        this.value = 100;
        this.name = `${prefix} ${this.type} of ${suffix}`
    }
}


/*
function loadPlayer()
{
    const fromLocalStorage =......
    fromLocalStorage.potions.amount--;
    const potion =  new Potion()
    potion.restoreHp(player1)
    h1.refresh()
}
*/

function getRandomType (){
    const equipmentTypes = [
        EQUIPMENT_TYPE.weapon.type,
        EQUIPMENT_TYPE.shield.type,
        EQUIPMENT_TYPE.helmet.type,
        EQUIPMENT_TYPE.armor.type,
        EQUIPMENT_TYPE.belt.type,
        EQUIPMENT_TYPE.boots.type,
        EQUIPMENT_TYPE.gloves.type,
        EQUIPMENT_TYPE.ring.type,
        EQUIPMENT_TYPE.necklace.type
    ];
    const randomIndex = random(equipmentTypes.length);
    const randomType = equipmentTypes[randomIndex];
    return randomType;
}

function getRandomStats (equipmentType){
    let RandomStats;
    if (equipmentType === 'weapon') {
        RandomStats = {
            dmg_physical: random(20),
            dmg_energy: random(20)
    }
    }

    if (equipmentType === 'shield' ||
        equipmentType === 'helmet' ||
        equipmentType === 'armor' ||
        equipmentType === 'belt' ||
        equipmentType === 'gloves' ||
        equipmentType === 'boots') {

        RandomStats = {
            max_hp: random(30),
            max_ep: random(20),
            defense_p: random(5),
            defense_e: random(5)
        }
    }

    if (equipmentType === 'ring' ||
        equipmentType === 'necklace') {
            RandomStats = {
                dmg_physical: random(3),
                dmg_energy: random(3),
                max_hp: random(20),
                max_ep: random(10),
                defense_p: random(3),
                defense_e: random(3)
            }
        }


    return RandomStats;
}

