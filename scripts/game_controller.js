export{startGame, sleep}

import {heroCreation} from "./hero_creation.js";
import {welcome} from "./welcome.js"



const startGame = () =>{
   welcome();
   heroCreation();
}

//console.log(player1);
//fight(p1, fly);

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }