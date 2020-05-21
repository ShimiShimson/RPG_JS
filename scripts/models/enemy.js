let enemies = [];

export class Enemy {
    constructor(name, hp, ep, dmg_physical, dmg_energy, defense_p, defense_e, dodge, exp, gold, lvl){
    this.id = globalCounter++;
    this.name = name;
    this.hp = hp;
    this.ep = ep;
    this.dmg_physical = dmg_physical;
    this.dmg_energy = dmg_energy;
    this.defense_p = defense_p;
    this.defense_e = defense_e;
    this.dodge = dodge;
    this.exp = exp;
    this.gold = gold;
    this.lvl = lvl;
    }
}


//Enemy properties:    (name,        hp,    ep,  dmp,  dme, dfp, dfe, dge, exp,   gold,  lvl)
enemies.push(new Enemy('Fly',        50,    0,   10,   0,   0,   1,   50,  5,     1,     1));
enemies.push(new Enemy('Ant',        70,    0,   10,   0,   3,   1,   10,  10,    2,     1));
enemies.push(new Enemy('Wasp',       80,    0,   15,   0,   5,   5,   50,  10,    3,     1));
enemies.push(new Enemy('Cockroach',  80,    0,   15,   0,   10,  0,   20,  15,    5,     1));
enemies.push(new Enemy('Hornet',     100,   0,   30,   0,   5,   10,  20,  20,    7,     2));
enemies.push(new Enemy('Frog',       200,   0,   20,   0,   10,  0,   20,  25,    9,     2));
enemies.push(new Enemy('Rat',        150,   0,   40,   0,   15,  10,  20,  30,    11,    2));
enemies.push(new Enemy('Bat',        150,   0,   30,   0,   10,  20,  50,  35,    13,    3));
enemies.push(new Enemy('Cat',        250,   0,   30,   0,   10,  20,  20,  40,    15,    3));
enemies.push(new Enemy('Dog',        300,   0,   40,   0,   30,  5,   20,  45,    17,    3));
enemies.push(new Enemy('Wolf',       500,   0,   100,  0,   40,  10,  20,  80,    40,    5));
enemies.push(new Enemy('Super Wolf', 1000,  0,   140,  0,   60,  10,  20,  100,   70,    8));
// console.log(enemies);
const jsonEnemies = JSON.stringify(enemies, null, 2)
// console.log(jsonEnemies);

// export const getEnemy = () =>{
//     const randomIndex = Math.floor(Math.random() * enemies.length);
//     const randomEnemy = enemies[randomIndex];
//     const cloneOfRandomEnemy = JSON.parse(JSON.stringify(randomEnemy));
//     // console.log(cloneOfRandomEnemy);
//     return cloneOfRandomEnemy;
// }

