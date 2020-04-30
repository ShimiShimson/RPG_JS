import {Paladin} from "./models/paladin.js";
import {Assassin} from "./models/assassin.js";
import {Barbarian} from "./models/barbarian.js";
import {Sorceress} from "./models/sorceress.js";
import {$} from "./$.js";

import { CLASSES } from "./class_type.js";
import { createButton, displayHeroCreated, createSaveLoadActionMenuButtons } from "./create_html_structure.js";
import { loadHero } from "./save_load.js";
import { actionMenu } from "./action_menu.js";





//declaring as a window variable for purposes of easier manipulation of object hero
let hero = {};
window.h1 = {};


export const createHero = () => {

    const name = document.getElementById('hero-name').value;
    const profession = document.getElementById('hero-profession').value;
    function whatProfession(){
        if (profession == CLASSES.assassin.value)   return new Assassin     (name, 70,  30,  50, 0,  0,  0,  60, 0, 0, 1);
        if (profession == CLASSES.barbarian.value)  return new Barbarian    (name, 200, 10,  20, 0,  10, 5,  0,  0, 0, 1);
        if (profession == CLASSES.paladin.value)    return new Paladin      (name, 150, 100, 0,  30, 50, 50, 10, 0, 0, 1);
        if (profession == CLASSES.sorceress.value)  return new Sorceress    (name, 70,  150, 0,  60, 5,  20, 30, 0, 0, 1);
    }
    
    hero = whatProfession(name);
    //h1 is for manipulating and testing hero object in console
    h1 = hero;
    


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
    
    const load = loadHero();
    
    if (load === null || load === undefined) {
        return alert('No save found! First start New Game and save game.');
    }
    
    const [...loadTemplate] = [
        load.name,
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
    
        h1 = hero;
        //$("game-loaded").textContent = `Game loaded!`;
        console.log(`${hero.name}, the ${hero.prof}.`)

        createButton('action-menu-btn', 'Action Menu', actionMenu);
        
        
        

    } else {
        $("game-loaded").textContent = `Error during loading the game.`;
    }
}

export const getHero = () =>{
    return hero;
}