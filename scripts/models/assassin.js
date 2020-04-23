import {Player} from "./player.js";

export class Assassin extends Player{
    constructor(name) {
        super();
        this.name = name;
        this.prof = 'Assassin';
        this.hp = 100;
        this.ep = 50;
        this.attack = 30;
        this.defense = 0;
        this.e_defense = 0;
        this.dodge = 70;
        this.exp = 0;
        this.gold = 0;
    }
}