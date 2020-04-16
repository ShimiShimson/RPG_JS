
/*
use enum for class creation

change input for class creation from text to select
*/

//testing if main.js is properly connected with index.html
let myHeading = document.querySelector('h1');
myHeading.textContent = 'MAIN.JS IS WORKING!';

import {Player, Barbarian, Assassin, Sorceress, Archer, cp1, cp2, saveplayers, loadplayers} from "./scripts/hero_creation.js";


//window.cp1 = cp1;
//window.cp2 = cp2;

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
/*
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
*/






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
    Things to do:
    -add Monsters which you can kill and gain exp and gold (fly, cockroach, wasp, frog, rat, bat, cat, dog, wolf, tiger, lion, elephant)
    -add lvlUp mechanic, which will give you opportunity to add your stats (hp, EP, Defense, E_Defense, attack)
    -add shop, where you can buy potions, items (sword, staff, armor, helm, gloves, boots)
    -equipment slots (sword, staff, armor, helm, gloves, boots)

*/