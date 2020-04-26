import {$} from "./$.js";
import {hero} from "./hero_creation.js";
import { CLASSES } from "./class_type.js";
import { createButton } from "./create_html_structure.js";
import { actionMenu } from "./action_menu.js";

//Saving hero to local storage
export const saveHero = () => {
    
    if ($('save-game')) $('save-game').remove();
    localStorage.setItem("savedHero", JSON.stringify(hero));
    $('game-saved').textContent = "Game saved";
}

//Loading hero and from local storage
export const loadHero = () =>{
    
    if ($('load-game')) $('load-game').remove();
    if ($('action-menu-btn')) $('load-game').remove();
    $("game-loaded").textContent = "Trying to load game.....";
    const load = JSON.parse(localStorage.getItem("savedHero"));
    if (load != null && load != undefined){

        if (load.prof === CLASSES.assassin.name )   hero = new Assasssin(...loadTemplate);
        if (load.prof === CLASSES.barbarian.name)   hero = new Barbarian(...loadTemplate);
        if (load.prof === CLASSES.paladin.name  )    hero = new Paladin  (...loadTemplate);
        if (load.prof === CLASSES.sorceress.name)   hero = new Sorceress(...loadTemplate);

        $("game-loaded").textContent = `Game loaded!`;
        console.log(`${hero.name}, the ${hero.prof}.`)

        createButton('action-menu-btn', 'Action Menu', actionMenu);
        

    } else {
        $("game-loaded").textContent = `Error during loading the game.`;
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
    
}