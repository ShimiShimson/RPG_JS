import {Paladin} from "./models/paladin.js";
import {Assassin} from "./models/assassin.js";
import {Barbarian} from "./models/barbarian.js";
import {Sorceress} from "./models/sorceress.js";
import {$} from "./$.js";

import { CLASSES } from "./class_type.js";
import { displayHeroCreated, createSaveLoadActionMenuButtons } from "./create_html_structure.js";




//declaring as a window variable for purposes of easier manipulation of object hero
export let hero = {};
window.h1 = {}


export const createHero = () => {

    const name = document.getElementById('hero-name').value;
    const profession = document.getElementById('hero-profession').value;
    function whatProfession(){
        if (profession == CLASSES.assassin.value)   return new Assassin     (name, 70,  50,  50, 0,  0,  0,  60, 0, 0, 1);
        if (profession == CLASSES.barbarian.value)  return new Barbarian    (name, 200, 20,  20, 0,  10, 5,  0,  0, 0, 1);
        if (profession == CLASSES.paladin.value)    return new Paladin      (name, 150, 100, 0,  30, 50, 50, 10, 0, 0, 1);
        if (profession == CLASSES.sorceress.value)  return new Sorceress    (name, 70,  150, 0,  60, 5,  20, 30, 0, 0, 1);
    }
    hero = whatProfession(name);


    //Displaying name of freshly created hero (if paragraph displaying hero was created already, remove it)
   
    if ($('displayHeroParagraph')) $('displayHeroParagraph').remove();

    if ($('save-game')) $('save-game').remove();

    if ($('load-game')) $('load-game').remove();

    if ($('action-menu-btn')) $('action-menu-btn').remove();


    displayHeroCreated();
    createSaveLoadActionMenuButtons();
    
}