import {$} from "./$.js";
import {hero1} from "./hero_creation.js";
import { CLASSES } from "./classType.js";
//Saving hero1 to local storage
export const saveHero1 = () => {
    
    console.log(hero1);
    localStorage.setItem("savedHero1", JSON.stringify(hero1));
    $('game-saved').textContent = "Game saved";

    const removeGameSavedDisplay = ()=>{
        $('game-saved').textContent = null;
    }
    setTimeout(removeGameSavedDisplay, 2000);
}

//Loading hero1 and hero2 from local storage
export const loadHero1 = () =>{

    $("game-loaded").textContent = "Trying to load game.....";
    const load = JSON.parse(localStorage.getItem("savedHero1"));
    if (load != null && load != undefined){
        //hero1 = new JSON.parse(load.prof)(name, hp, ep, att, def ,etc);
        
        if (load.prof === CLASSES.assassin.name) return new Assasssin(load.name, load.hp,)

        $("game-loaded").textContent = "Game loaded!";
    } else {
        console.log("Error during loading hero 1!");
    }
}