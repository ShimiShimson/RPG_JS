import { getHero } from "../hero_creation.js";
import { $, removeAllContent } from "../helpers.js";
import { createButton, createParagraphInsideDivId, createButtonInsideDivId, createSaveLoadActionMenuButtons } from "../create_html_structure.js";
import { getEnemy } from "../models/enemy.js";
import { startFight, findEnemy } from "../fight.js";
import { displayHeroStats, actionMenu } from "./action_menu.js";


export const fightMenu = () => {
    removeAllContent();
    displayHeroStats();
    
    createButtonInsideDivId('find-enemy-btn', 'Find enemy!', null, 'actions');
    createButtonInsideDivId('fight-btn', 'Fight!', null, 'actions');
    createButtonInsideDivId('use-hp-potion-btn', 'Use HP Potion', null, 'actions');
    createButtonInsideDivId('action-menu-btn', 'Action Menu', null, 'actions');

    $('find-enemy-btn').addEventListener('click', function(){
        findEnemy();
    });
    $('fight-btn').addEventListener('click', function(){
        startFight();
    });
    $('use-hp-potion-btn').addEventListener('click', function(){
        useHpPotion();
    });
    $('action-menu-btn').addEventListener('click', function(){
        actionMenu();
    });

    checkIfLevelUp(getHero().exp, getHero().lvl);
}

const useHpPotion = () =>{
    getHero().usePotion();
    displayHeroStats();
}


function checkIfLevelUp(currentExp, lvl){
    const expNeededToLevelUp = 20 * lvl * lvl - 15 * lvl;
    console.log(expNeededToLevelUp);
    if(currentExp >= expNeededToLevelUp){
        $('player-info').textContent = `LEVEL UP!!!`;
        getHero().lvl++;
        getHero().onLevelUp();
    }
}

