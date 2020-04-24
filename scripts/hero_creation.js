import {Paladin} from "./models/paladin.js";
import {Assassin} from "./models/assassin.js";
import {Barbarian} from "./models/barbarian.js";
import {Sorceress} from "./models/sorceress.js";
import {$} from "./$.js";

import { CLASSES } from "./classType.js";
import { displayHeroCreated, createSaveLoadButtons } from "./createHtmlStructure.js";




//declaring as a window variable for purposes of easier manipulation of object hero
export let hero = {};
window.h1 = {}


export const createHero = () => {

    const name = document.getElementById('hero-name').value;
    const profession = document.getElementById('hero-profession').value;
    function whatProfession(){
        if (profession == CLASSES.assassin.value) return new Assassin (name, 70,  50,  50, 0,  0,  0,  60, 0, 0, 1);
        if (profession == CLASSES.barbarian.value) return new Barbarian(name, 200, 20,  20, 0,  10, 5,  0,  0, 0, 1);
        if (profession == CLASSES.paladin.value) return new Paladin  (name, 150, 100, 0,  30, 50, 50, 10, 0, 0, 1);
        if (profession == CLASSES.sorceress.value) return new Sorceress(name, 70,  150, 0,  60, 5,  20, 30, 0, 0, 1);
    }
    hero = whatProfession(name);
    console.log(hero);
    //Displaying name of freshly created hero (checking if hero was created)
    if ($('displayHeroParagraph')) {
        let toRemove = $('displayHeroParagraph')
        $('displayHeroParagraph').parentNode.removeChild(toRemove);
    };
    if ($('save-game')) {
        let toRemove = $('save-game')
        $('save-game').parentNode.removeChild(toRemove);
    };
    if ($('load-game')) {
        let toRemove = $('load-game')
        $('load-game').parentNode.removeChild(toRemove);
    };

    displayHeroCreated();
    createSaveLoadButtons();  
}













