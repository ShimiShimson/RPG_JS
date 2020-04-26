import { removeAllContent } from "./remove_all_content.js"
import { createParagraph } from "./create_html_structure.js";

export const actionMenu = () =>{
    removeAllContent('header');
    removeAllContent('interface');
}

/*
createParagraph('hero-stats', 
    `Name: ${hero.name}
    Profession: ${hero.prof}
    HP: ${hero.hp}
    EP: ${hero.ep}
    Dmg Physical: ${hero.dmg_physical}
    Dodge: ${hero.dodge}`);
    */