
/*

*/

//testing if main.js is properly connected with index.html
let myHeading = document.querySelector('h1');
myHeading.textContent = 'MAIN.JS IS WORKING!';

//import {Player, Barbarian, Assassin, Sorceress, Archer, cp1, cp2, saveplayers, loadplayers} from "./scripts/hero_creation.js";
class Player {
    fighting(enemyHP, yourAttack) {
        console.log(enemyHP);
        enemyHP = enemyHP - yourAttack;
        console.log(enemyHP);
        return enemyHP;
    }
}

class Assassin extends Player {
    constructor(name, hp, ep, attack, defense, e_defense, dodge) {
        super();
        this.name = name;
        this.proff = 'Assassin';
        this.hp = hp;
        this.ep = ep;
        this.attack = attack;
        this.defense = defense;
        this.e_defense = e_defense;
        this.dodge = dodge;
    }
}

let p1 = new Assassin('Szymon', 500, 50, 100, 0, 0, 70);
let p2 = new Assassin('Dawid', 500, 50, 100, 0, 0, 70);
console.log(p1);
console.log(p2);

function fight() {
    p2.hp = p1.fighting(p2.hp, p1.attack);
    console.log('\n');

    localStorage.setItem("player1", JSON.stringify(p1));
    localStorage.setItem("player2", JSON.stringify(p2));
    p1 = JSON.parse(localStorage.getItem("player1"));
    p2 = JSON.parse(localStorage.getItem("player2"));
    let newp1 = new Assassin(p1.name, p1.hp, p1.ep, p1.attack, p1.defense, p1.e_defense, p1.dodge);
    let newp2 = new Assassin(p2.name, p2.hp, p2.ep, p2.attack, p2.defense, p2.e_defense, p2.dodge);
    newp2.hp = newp1.fighting(newp2.hp, newp1.attack);
    console.log('\n');

    localStorage.setItem("player1", JSON.stringify(newp1));
    localStorage.setItem("player2", JSON.stringify(newp2));
    p1 = JSON.parse(localStorage.getItem("player1"));
    p2 = JSON.parse(localStorage.getItem("player2"));
    newp1 = new Assassin(p1.name, p1.hp, p1.ep, p1.attack, p1.defense, p1.e_defense, p1.dodge);
    newp2 = new Assassin(p2.name, p2.hp, p2.ep, p2.attack, p2.defense, p2.e_defense, p2.dodge);
    p2.hp = newp1.fighting(newp2.hp, newp1.attack);
    console.log('\n');

    localStorage.setItem("player1", JSON.stringify(newp1));
    localStorage.setItem("player2", JSON.stringify(newp2));
    p1 = JSON.parse(localStorage.getItem("player1"));
    p2 = JSON.parse(localStorage.getItem("player2"));
    newp1 = new Assassin(p1.name, p1.hp, p1.ep, p1.attack, p1.defense, p1.e_defense, p1.dodge);
    newp2 = new Assassin(p2.name, p2.hp, p2.ep, p2.attack, p2.defense, p2.e_defense, p2.dodge);
    p2.hp = newp1.fighting(newp2.hp, newp1.attack);
    console.log('\n');

    localStorage.setItem("player1", JSON.stringify(newp1));
    localStorage.setItem("player2", JSON.stringify(newp2));
    p1 = JSON.parse(localStorage.getItem("player1"));
    p2 = JSON.parse(localStorage.getItem("player2"));
    newp1 = new Assassin(p1.name, p1.hp, p1.ep, p1.attack, p1.defense, p1.e_defense, p1.dodge);
    newp2 = new Assassin(p2.name, p2.hp, p2.ep, p2.attack, p2.defense, p2.e_defense, p2.dodge);
    p2.hp = newp1.fighting(newp2.hp, newp1.attack);
    console.log('\n');

}

fight();





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


    - prefixes: [dusty, crude, rusty, cracked, chipped, short, small, tiny, pocket, sharp, strong, solid, green, wooden, metallic, copper, blinking, shiny, silver, gold, powerful, mighty, critical, thirsty, vampiric, quick, speedy, super, wonderful, rich, saint, holy, stone, long, big, huge, enormous, defending, spiky, thorny, wild, rocky, mad, crazy, insane, runic, titanic, heroic, cowardly, smart, dumb, genius, unlucky, lucky, elegant, obedient, humble, patient, wise, transparent, obedient, ephemeric, eternal, immortal, undead, double, trollish, tanky, sandy, nifty, witty, resonating, distorting]


    - suffixes: of [Paladin, God, Evilness, Destruction, Goodness, Justice, Defense, Strenght, Agility, Speed, Healing, Sanity, Insanity, Destruction, Terror, Madness,  Ogre, Orc, Devil, Witch, Dust, Sand, Grass, Water, Ice, Fire, Earth, Lightning, Thunder, Sound, Perseverance, Hiding, Dodging, Shadow, Disappearance, Thief, Leech, Vampire, Bashing, Crushing, Fairy, Sea, River, Cave, Goat, Shepherd, Destroyer, Knight, Mage, Power, Poison, Dread, Fear, Sleep, Thorns, Desolace, Wilderness, Miracles, Punching, Highlander, Mountain, Rock, Dwarf, Goblin, Troll, Phoenix, Elf, Runes, Titan, Hero, Coward, Genius, Lucker, Wisdom, Patience, Humility, Obedience, Immortality, Undead, Transparence, Eternity, Twins, Instinct, Tank, Desert, Pity, Greed, Resonance, Distortion, ]


    -types of equipment (knife, sword, axe, javelin, bow, crossbow, slingshot, staff, wand, stick, armor, robe, breastplate, cuirass, band, helm, hat, cap, scarf, wrap)



Dawid recommendations:
    -Nowy folder models (barbarian.js, assassin.js etc...) wszystko osobno
    -zadeklaruj funkcje nawet bez pisania body, miec ogolny zarys designu
    -
    -
*/