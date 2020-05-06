import {welcome} from "./welcome.js";
import { $ } from "./helpers.js";
import { createHtmlStructure } from "./create_html_structure.js"



export const startGame = () =>{
   if ($('load-game')) $('load-game').remove();
   welcome();
   createHtmlStructure();
   
}


export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

