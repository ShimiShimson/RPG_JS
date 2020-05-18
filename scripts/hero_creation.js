
import {Paladin} from "./models/paladin.js";
import {Assassin} from "./models/assassin.js";
import {Barbarian} from "./models/barbarian.js";
import {Sorceress} from "./models/sorceress.js";
import {$} from "./helpers.js";

import { CLASSES } from "./enums.js";
import { displayHeroCreated, createSaveLoadActionMenuButtons } from "./create_html_structure.js";
import { loadHero } from "./save_load.js";
import { Item, Potion, Equipment } from "./models/item.js";
import { actionMenu } from "./menus/action_menu.js";
// import { potionTypes } from "./menus/shop_consumables.js";





//declaring as a window variable for purposes of easier manipulation of object hero
let hero = {};
window.h1 = {};




export async function createHero() {

    const name = $('hero-name').value;
    const profession = $('hero-profession').value;
    function whatProfession(){
        
        //properties                 mhp, mep, hp,  ep,  dmp, dme, dfp, dfe, dod, exp, gd, lvl
        let [...assassin] =  [ name, 70,  30,  70,  30,  60,  0,   0,   0,   20,  0,   0,  1];
        let [...barbarian] = [ name, 200, 10,  200, 10,  20,  0,   10,  5,   0,   0,   0,  1];
        let [...paladin] =   [ name, 150, 100, 150, 100, 0,   35,  20,  20,  10,  0,   0,  1];
        let [...sorceress] = [ name, 70,  150, 70,  150, 0,   60,  5,   20,  30,  0,   0,  1];

        if (profession == CLASSES.assassin.value)   return new Assassin     (...assassin);
        if (profession == CLASSES.barbarian.value)  return new Barbarian    (...barbarian);
        if (profession == CLASSES.paladin.value)    return new Paladin      (...paladin);
        if (profession == CLASSES.sorceress.value)  return new Sorceress    (...sorceress);
    }
    hero = whatProfession(name);

    hero.equipmentSlots = {
        weaponHand: null,
        shieldHand: null,
        head: null,
        body: null,
        waist: null,
        legs: null,
        arms: null,
        finger: null,
        neck: null
    };
    hero.consumables = {};
    hero.inventory = [];
    //console.log(hero);
    //let tinyPotion = new Potion("Tiny Health Potion", 50, 1, 10);
    //console.log(tinyPotion);
    //hero.consumables[tinyPotion.type] = tinyPotion;
    //hero.consumables[tinyPotion.type] ? hero.consumables[tinyPotion.type].amount += 1 : hero.consumables[tinyPotion.type] = tinyPotion;
    hero.gold = 500;
    hero.consumables.water = new Item("water", 2);
    // for (let i = 0; i < potionTypes.length; i++) {
    //     let potion = potionTypes[i];
    //     hero.consumables[potion.type] = potion;
    // }
    // hero.consumables.tinyHealthPotion.amount = 5;
    // hero.consumables.smallHealthPotion.amount = 10;
    // hero.consumables.mediumHealthPotion.amount = 0;
    // hero.consumables.bigHealthPotion.amount = 20;
    // hero.consumables.hugeHealthPotion.amount = 5;
    //console.log(hero.consumables);


    //za kazdym razem kiedy wywoluje new Equipemnt musze dac jako parametry te funkcje. Czy tak powinno byc?
    //takze musze je tu zaimportowac, tak samo musze je zaimportowac i wywolac w funkcji playerAttacks()
    // hero.inventory.push(new Equipment(await getRandomPrefix(), await getRandomSuffix()));
    // hero.inventory.push(new Equipment(await getRandomPrefix(), await getRandomSuffix()));
    // hero.inventory.push(new Equipment(await getRandomPrefix(), await getRandomSuffix()));
    // hero.inventory.push(new Equipment(await getRandomPrefix(), await getRandomSuffix()));
    // hero.inventory.push(new Equipment(await getRandomPrefix(), await getRandomSuffix()));
    // hero.inventory.push(new Equipment(await getRandomPrefix(), await getRandomSuffix()));

    

    
    //h1 is for manipulating and testing hero object in console
    h1 = hero;
    //console.log(JSON.stringify(hero));
    


    //Displaying name of freshly created hero (if paragraph displaying hero was created already, remove it)
   
    if ($('displayHeroParagraph')) $('displayHeroParagraph').remove();

    if ($('save-game')) $('save-game').remove();

    if ($('game-saved')) $('game-saved').remove();


    if ($('load-game')) $('load-game').remove();
    
    if ($('game-loaded')) $('game-loaded').remove();

    if ($('action-menu-btn')) $('action-menu-btn').remove();


    displayHeroCreated();
    createSaveLoadActionMenuButtons();
    
}

export const createLoadedHero = () =>{
    $('load-game').disabled = true;
    const load = loadHero();
    
    if (load === null || load === undefined) {
        return alert('No save found! First start New Game and save game.');
    }

    
    
    const [...loadTemplate] = [
        load.name,
        load.max_hp,
        load.max_ep,
        load.hp,
        load.ep, 
        load.dmg_physical, 
        load.dmg_energy, 
        load.defense_p, 
        load.defense_e, 
        load.dodge, 
        load.exp, 
        load.gold, 
        load.lvl
    ];
    
    if (load != null && load != undefined){
        if (load.prof === CLASSES.assassin.prof )   hero = new Assassin (...loadTemplate);
        if (load.prof === CLASSES.barbarian.prof)   hero = new Barbarian(...loadTemplate);
        if (load.prof === CLASSES.paladin.prof  )   hero = new Paladin  (...loadTemplate);
        if (load.prof === CLASSES.sorceress.prof)   hero = new Sorceress(...loadTemplate);

        hero.equipmentSlots = load.equipmentSlots;
        hero.consumables = load.consumables;
        hero.inventory = load.inventory;
    
        h1 = hero;
        console.log(`${hero.name}, the ${hero.prof}.`)
        //console.log(getHero());

        actionMenu();
        
        
        

    } else {
        $("game-loaded").textContent = `Error during loading the game.`;
    }
}

export const getHero = () =>{
    return hero;
}