import {Player} from "./player.js";

export class Assassin extends Player{
    constructor( name, max_hp, max_ep, hp, ep, dmg_physical, dmg_energy, defense_p, defense_e, dodge, exp, gold, lvl) {

        super();
        this.name = name;
        this.prof = "Assassin";
        this.max_hp = max_hp;
        this.max_ep = max_ep;
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
    onLevelUp(){
        this.max_hp += 15;
        this.max_ep += 10;
        this.dmg_physical += 5;
        this.defense_p += 2;
        this.defense_e += 3;
    }
}