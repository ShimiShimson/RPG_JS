
/*

*/

//testing if main.js is properly connected with index.html
let myHeading = document.querySelector('h1');
myHeading.textContent = 'MAIN.JS IS WORKING!';

import {Player, Barbarian, Assassin, Sorceress, Archer, cp1, cp2, saveplayers, loadplayers} from "./scripts/hero_creation.js";
import {fly} from "./scripts/enemy.js";
import {fight} from "./scripts/game_controller.js";



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
    Things to do:
    -add Monsters which you can kill and gain exp and gold (fly, cockroach, wasp, frog, rat, bat, cat, dog, wolf, tiger, lion, elephant)
    -add lvlUp mechanic, which will give you opportunity to add your stats (hp, EP, Defense, E_Defense, attack)
    -locations (street, forest, sewers, dungeon, cave, beach, river, lake, road, step, desert, frozen land, hell, heaven)
    -add shop, where you can buy potions, items (sword, staff, armor, helm, gloves, boots)
    -equipment slots (weapon, armor, helm, gloves, boots)


    - prefixes: [dusty, crude, rusty, cracked, chipped, short, small, tiny, pocket, sharp, strong, solid, green, wooden, metallic, copper, blinking, shiny, silver, gold, powerful, mighty, critical, thirsty, vampiric, quick, speedy, super, wonderful, rich, saint, holy, stone, long, big, huge, enormous, defending, spiky, thorny, wild, rocky, mad, crazy, insane, runic, titanic, heroic, cowardly, smart, dumb, genius, unlucky, lucky, elegant, obedient, brave, embracing, humble, patient, wise, transparent, obedient, ephemeric, eternal, immortal, undead, double, trollish, tanky, sandy, nifty, witty, resonating, distorting]


    - suffixes: of [Paladin, God, Goddess, Angel, Archangel, Seraph, Cherubin, Evilness, Destruction, Goodness, Justice, Defense, Strenght, Agility, Speed, Healing, Sanity, Insanity, Destruction, Terror, Madness,  Ogre, Orc, Devil, Satan, Witch, Wizard, Dust, Sand, Grass, Water, Ice, Fire, Earth, Lightning, Thunder, Sound, Perseverance, Hiding, Dodging, Shadow, Disappearance, Thief, Leech, Vampire, Bashing, Crushing, Fairy, Sea, River, Cave, Goat, Shepherd, Destroyer, Knight, Mage, Power, Poison, Dread, Fear, Sleep, Thorns, Desolace, Wilderness, Miracles, Punching, Highlander, Mountain, Rock, Dwarf, Goblin, Troll, Phoenix, Elf, Runes, Titan, Hero, Coward, Genius, Lucker, Wisdom, Courage, Bravery, Patience, Humility, Obedience, Immortality, Undead, Transparence, Eternity, Twins, Instinct, Tank, Desert, Pity, Greed, Resonance, Distortion, Embrace, ]


    -types of equipment (knife, sword, axe, javelin, bow, crossbow, slingshot, staff, wand, stick, armor, robe, breastplate, cuirass, band, helm, hat, cap, scarf, wrap)



Dawid recommendations:
    -Nowy folder models (barbarian.js, assassin.js etc...) wszystko osobno
    -zadeklaruj funkcje nawet bez pisania body, miec ogolny zarys designu
    -
    -
*/