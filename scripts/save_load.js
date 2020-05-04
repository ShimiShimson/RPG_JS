import {$} from "./$.js";
import {getHero} from "./hero_creation.js";


//Saving hero to local storage
export const saveHero = () => {
    $('save-game').disabled = true;
    localStorage.setItem("savedHero", JSON.stringify(getHero()));
    console.log(JSON.stringify(getHero()));

    $('save-game').textContent = "Game saved";
}

//Loading hero and from local storage
export const loadHero = () =>{
    const load = JSON.parse(localStorage.getItem("savedHero"));
    $('load-game').textContent = "Game loaded!";
    if ($('action-menu-btn')) $('action-menu-btn').remove();
    return load;
    
}

/*
export const getHero = () =>{
    const load = JSON.parse(localStorage.getItem("savedHero"));
    if (load != null && load != undefined){

        if (load.prof === CLASSES.assassin.name )   hero = new Assasssin(...loadTemplate);
        if (load.prof === CLASSES.barbarian.name)   hero = new Barbarian(...loadTemplate);
        if (load.prof === CLASSES.paladin.name  )    hero = new Paladin  (...loadTemplate);
        if (load.prof === CLASSES.sorceress.name)   hero = new Sorceress(...loadTemplate);

        h1 = hero;
        return hero;
    } else {
        console.log(`Error during loading the game.`);
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
*/