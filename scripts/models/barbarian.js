import {Player} from "./player.js";

export class Barbarian extends Player{
    constructor(name, hp, ep, dmg_physical, dmg_energy, defense_p, defense_e, dodge, exp, gold, lvl){
        super();
        this.name = name;
        this.prof = "Barbarian";
        this.hp = hp;
        this.ep = ep;
        this.dmg_physical = dmg_physical;
        this.dmg_energy = dmg_energy;
        this.defense_p = defense_p;
        this.defense_e = defense_e;
        this.dodge = dodge;
        this.gold = gold;
        this.exp = exp;
        this.lvl = lvl;
    }
}