//declaring generic class Player
//Maybe I want to use it for actions common to all classes (eg. fighting, visit shop, inventory

export class Player {
    constructor(name){
    this.name = '';
    this.prof = '';
    this.hp = 0;
    this.ep = 0;
    this.attack = 0;
    this.defense = 0;
    this.e_defense = 0;
    this.dodge = 0;
    }
}