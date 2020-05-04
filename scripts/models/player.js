//import { Item } from "./inventory.js";

//declaring generic class Player
//Maybe I want to use it for actions common to all classes (eg. fighting, visit shop, inventory)
//methods are for testing
export class Player {
    sayHello(){
        console.log('Hello!');
    }
    sayName(hero){
        console.log(`My name is ${hero.name}`);
    }
    usePotion(){
        let potionAmount = this.consumables[0].amount;
        if (potionAmount <= 0){
            alert('You have no more potions to use!');
        } else {
            console.log('POTION USED!');
            this.consumables[0].amount -= 1;
        }
    }
}