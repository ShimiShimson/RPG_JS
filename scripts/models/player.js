import {hero} from "../hero_creation.js";

//declaring generic class Player
//Maybe I want to use it for actions common to all classes (eg. fighting, visit shop, inventory)
//methods are for testing
export class Player {
    sayHello(){
        console.log('Hello!');
    }
    sayName(){
        console.log(`My name is ${hero.name}`);
    }
}