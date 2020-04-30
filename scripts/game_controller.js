import {welcome} from "./welcome.js";
import { $ } from "./$.js";
import { createHtmlStructure } from "./create_html_structure.js"



export const startGame = () =>{
   welcome();
   createHtmlStructure();
   console.log('Here');
   
}


export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

