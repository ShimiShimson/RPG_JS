import {Player} from "./player.js";

export class Archer extends Player{
    constructor(name){
        super();
        this.name = name;
        this.prof = 'Archer';
        this.hp = 100;
        this.ep = 50;
        this.attack = 30;
        this.defense = 15;
        this.e_defense = 15;
        this.dodge = 40;
    }
}