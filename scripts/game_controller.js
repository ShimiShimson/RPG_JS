import {heroCreation} from "./hero_creation.js";
import {welcome} from "./welcome.js";
import {fight} from "./fight.js";
import {fly} from "./models/enemy.js";
import {hero1} from "./hero_creation.js";
import { $ } from "./$.js";

export{startGame, sleep};


const startGame = () =>{
   welcome();
   heroCreation();
   createButton('fight', 'FIGHT!', fight);
   

}

//console.log(player1);
//

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const createButton = (id, textContent, onclick) =>{
   let button= document.createElement('button');
   button.id = id;
   button.textContent = textContent;
   button.onclick = onclick;
   $('action').appendChild(button);
}