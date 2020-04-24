export {fly}



class Enemy {
    constructor(id, name, hp, ep, dmg_physical, dmg_energy, defense_p, defense_e, dodge, exp, gold, lvl){
    this.id = id;
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

let fly = new Enemy(1, 'Fly', 100, 0, 10, 1, 1, 20, 5, 5, 1);

//console.log(fly);