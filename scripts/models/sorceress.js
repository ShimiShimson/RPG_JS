import {Player} from "./player.js";

export class Sorceress extends Player{
    constructor(name){
       super();
       this.name = name;
       this.prof = 'Sorceress';
       this.hp = 70;
       this.ep = 150;
       this.attack = 40;
       this.defense = 5;
       this.e_defense = 20;
       this.dodge = 10;
    }
}