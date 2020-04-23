import {$} from "./$.js";

//Saving hero1 to local storage
export const saveHero1 = () => {
    console.log(hero1);
    localStorage.setItem("saveHero1", JSON.stringify(hero1));
    $('game-saved').textContent = "Game saved";

    const removeGameSavedDisplay = ()=>{
        $('game-saved').textContent = null;
    }
    setTimeout(removeGameSavedDisplay, 2000);
}

//Loading hero1 and hero2 from local storage
export const loadHero1 = () =>{
    const load = JSON.parse(localStorage.getItem("saveHero1"));
    if (load != null && load != undefined){
        hero1 = new load.prof(name, hp, ep, att, def ,etc);
        console.log(hero1);
        $("gameloaded").innerHTML = p1.name + " loaded!";
    } else {
        console.log("Error during loading hero 1!");
    }
}