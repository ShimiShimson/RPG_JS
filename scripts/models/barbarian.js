import {Player} from "./player.js";

export class Barbarian extends Player{
    constructor(name){
        super();
        this.name = name;
        this.prof = 'Barbarian';
        this.hp = 400;
        this.ep = 20;
        this.attack = 20;
        this.defense = 20;
        this.e_defense = 5;
        this.dodge = 40;
    }
}