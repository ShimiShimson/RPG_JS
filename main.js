import {startGame} from "./scripts/game_controller.js";


document.querySelector('#start-game').addEventListener('click', startGame);













// attack and Dodge mechanic

function attacking (att, def){
    console.log(att.prof + " dmg_physical is " + att.attack);
    console.log(def.prof + " has " + def.hp + " hp");
    let dodging = Math.floor(Math.random() * 100 + def.dodge);
    console.log(dodging);
    if (dodging >= 100){
        console.log(def.prof + " has " + def.hp + " hp");
        return def.prof + " dodged attack of " + att.prof;
    } else {
        def.hp = def.hp - att.dmg_physical;
        if (def.hp < 0){
            console.log(def.prof + " got hit by " + att.prof + " and lost " + att.dmg_physical + " hp");
            return def.prof + " has 0 hp and is dead";
        }
        console.log(def.prof + " has " + def.hp + " hp");
        return def.prof + " got hit by " + att.prof + " and lost " + att.dmg_physical + " hp \nNow he has " + def.hp + " hp";
    }
}