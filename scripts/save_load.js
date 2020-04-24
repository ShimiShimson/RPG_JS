import {$} from "./$.js";
import {hero} from "./hero_creation.js";
import { CLASSES } from "./classType.js";
//Saving hero to local storage
export const saveHero = () => {
    
    console.log(hero);
    localStorage.setItem("savedHero", JSON.stringify(hero));
    $('game-saved').textContent = "Game saved";

    const removeGameSavedDisplay = ()=>{
        $('game-saved').textContent = null;
    }
    setTimeout(removeGameSavedDisplay, 2000);
}

//Loading hero and hero2 from local storage
export const loadHero = () =>{

    $("game-loaded").textContent = "Trying to load game.....";
    const load = JSON.parse(localStorage.getItem("savedHero"));
    if (load != null && load != undefined){
        //hero = new JSON.parse(load.prof)(name, hp, ep, att, def ,etc);
        
        if (load.prof === CLASSES.assassin.name) return new Assasssin(load.name, load.hp,)

        $("game-loaded").textContent = "Game loaded!";
    } else {
        console.log("Error during loading hero 1!");
    }
}