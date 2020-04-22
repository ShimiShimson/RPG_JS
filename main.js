import {Player, Barbarian, Assassin, Sorceress, Archer, cp1, cp2, saveplayers, loadplayers} from "./scripts/hero_creation.js";
import {fly} from "./scripts/enemy.js";
import {fight} from "./scripts/game_controller.js";

//testing if main.js is properly connected with index.html
let myHeading = document.querySelector('h1');
myHeading.textContent = 'MAIN.JS IS WORKING!';





window.attacking = attacking;


//This solutiom is better as it does not pollute global scope
document.querySelector('#cp1').addEventListener('click', cp1);
document.querySelector('#cp2').addEventListener('click', cp2);
document.querySelector('#saveplayers').addEventListener('click', saveplayers);
document.querySelector('#loadplayers').addEventListener('click', loadplayers);

/*
console.log(p1);
myHeading.innerText = `Name: ${p1.name}
Proffession: ${p1.proff}
hp: ${p1.hp}
EP: ${p1.ep}
attack: ${p1.attack}
Dodge: ${p1.dodge}
`;
*/




// attack and Dodge mechanic

function attacking (att, def){
    console.log(att.proff + " attack is " + att.attack);
    console.log(def.proff + " has " + def.hp + " hp");
    let dodging = Math.floor(Math.random() * 100 + def.dodge);
    console.log(dodging);
    if (dodging >= 100){
        console.log(def.proff + " has " + def.hp + " hp");
        return def.proff + " dodged attack of " + att.proff;
    } else {
        def.hp = def.hp - att.attack;
        if (def.hp < 0){
            console.log(def.proff + " got hit by " + att.proff + " and lost " + att.attack + " hp");
            return def.proff + " has 0 hp and is dead";
        }
        console.log(def.proff + " has " + def.hp + " hp");
        return def.proff + " got hit by " + att.proff + " and lost " + att.attack + " hp \nNow he has " + def.hp + " hp";
    }
}







//Game intro for player

/*
console.log(`Hello ${p1.name}, young ${[p1.proff]}!
Are you ready to start your adventure?`);

console.log(`(Type yes or no)`)

console.log(`What would you like to do?`)
*/



// Testing setters
/*
console.log(`${Assassin.Name} hp: ${Assassin.hp}`);

Assassin.sethp(100);

console.log(`${Assassin.Name} hp: ${Assassin.hp}`);

console.log(`${Assassin.Name} attack: ${Assassin.attack}`);

Assassin.set_attack(80);

console.log(`${Assassin.Name} attack: ${Assassin.attack}`);
*/


/*
    
*/