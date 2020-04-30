







export const getEnemy = () =>{
    let enemies = [];

    class Enemy {
        constructor( name, hp, ep, dmg_physical, dmg_energy, defense_p, defense_e, dodge, exp, gold, lvl){
        this.id = enemies.length;
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

    enemies.push(new Enemy('Fly',        100, 0, 10, 1, 3, 1, 5, 5, 1, 1));
    enemies.push(new Enemy('Wasp',       110, 0, 15, 1, 5, 5, 10, 10, 3, 2));
    enemies.push(new Enemy('Cockroach',  130, 0, 15, 1, 5, 5, 15, 15, 5, 3));
    enemies.push(new Enemy('Hornet',     100, 0, 30, 1, 5, 5, 20, 20, 7, 4));
    enemies.push(new Enemy('Frog',       200, 0, 20, 1, 10, 10, 20, 25, 9, 5));
    enemies.push(new Enemy('Rat',        150, 0, 40, 1, 10, 10, 20, 30, 11, 6));
    enemies.push(new Enemy('Bat',        150, 0, 30, 1, 20, 20, 60, 35, 13, 7));
    enemies.push(new Enemy('Cat',        250, 0, 30, 1, 20, 20, 20, 40, 15, 8));
    enemies.push(new Enemy('Dog',        300, 0, 40, 1, 20, 5, 20, 45, 17, 9));
    enemies.push(new Enemy('Wolf',       500, 0, 50, 1, 20, 25, 20, 80, 40, 10));

    const randomIndex = Math.floor(Math.random() * enemies.length);
    const randomEnemy = enemies[randomIndex];
    console.log(randomEnemy);
    return randomEnemy;
}

