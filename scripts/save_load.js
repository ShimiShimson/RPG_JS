import {$} from "./$.js";
import {hero} from "./hero_creation.js";
import { CLASSES } from "./classType.js";

//Saving hero to local storage
export const saveHero = () => {
    
    console.log(hero);
    localStorage.setItem("savedHero", JSON.stringify(hero));
    $('game-saved').textContent = "Game saved";
    removeSaveDisplayAfter2s();
    
}

//Loading hero and hero2 from local storage
export const loadHero = () =>{

    $("game-loaded").textContent = "Trying to load game.....";
    const load = JSON.parse(localStorage.getItem("savedHero"));
    if (load != null && load != undefined){

        if (load.prof === CLASSES.assassin.name )   hero = new Assasssin(...loadTemplate);
        if (load.prof === CLASSES.barbarian.name)   hero = new Barbarian(...loadTemplate);
        if (load.prof === CLASSES.paladin.name  )    hero = new Paladin  (...loadTemplate);
        if (load.prof === CLASSES.sorceress.name)   hero = new Sorceress(...loadTemplate);

        $("game-loaded").textContent = `Game loaded! ${hero.name}, the ${hero.prof}, HP: ${hero.hp}.`;
        removeLoadDisplayAfter2s();
        hero.sayHello();
        hero.sayName();
        
        
        
    } else {
        console.log("Error during loading hero 1!");
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


const removeLoadDisplayAfter2s = () =>{
    setTimeout(()=> $('game-loaded').textContent = null, 2000);
}

const removeSaveDisplayAfter2s = () =>{
    setTimeout(()=> $('game-saved').textContent = null, 2000);
}

