export {fly}

class Enemy {
    constructor(id, name, hp, ep, attack, defense, e_defense, dodge, exp, gold){
    this.id = id;
    this.name = name;
    this.hp = hp;
    this.ep = ep;
    this.attack = attack;
    this.defense = defense;
    this.e_defense = e_defense;
    this.dodge = dodge;
    this.exp = exp;
    this.gold = gold;
    }
}

let fly = new Enemy(1, 'Fly', 500, 0, 20, 0, 0, 30, 1, 1);

//console.log(fly);