import { getHero } from "../hero_creation.js";
import { $, removeAllContent, removeContent } from "../helpers.js";
import { createButton, createParagraphInsideDivId, createButtonInsideDivId, createSaveLoadActionMenuButtons } from "../create_html_structure.js";
import { getEnemy } from "../models/enemy.js";
import { startFight, findEnemy, enemyMissing, enableFightMenuButtons } from "../fight/fight.js";
import { displayHeroStats, actionMenu } from "./action_menu.js";
// import { potionTypes } from "./shop_consumables.js";
import { sleep } from "../game_controller.js";
import { playerAttacks, useHpPotion } from "../fight/playerAction.js";
import { enemyAction } from "../fight/enemyAction.js";
import { playerActionThenEnemyAction } from "../fight/fight_controller.js";


let selectedIndex;
let enemy;
export const fightMenu = () => {
    removeAllContent();
    displayHeroStats();

    createButtonInsideDivId('find-enemy-btn', 'Find enemy!', null, 'actions');
    createButtonInsideDivId('fight-btn', 'Fight!', null, 'actions');
    createSelectPotionType();
    createButtonInsideDivId('use-hp-potion-btn', 'Use HP Potion', null, 'actions');
    createButtonInsideDivId('action-menu-btn', 'Action Menu', null, 'actions');

    
    $('find-enemy-btn').addEventListener('click', function () {
        enemy = findEnemy();
        console.log(enemy);
    });
    $('fight-btn').addEventListener('click', function () {
        if (enemyMissing(enemy)) return
        playerActionThenEnemyAction(`attack`, enemy);
    });
    $('use-hp-potion-btn').addEventListener('click', function () {
        if (enemyMissing(enemy)) return;
        playerActionThenEnemyAction(`usePotion`, enemy);
    });
    $('action-menu-btn').addEventListener('click', function () {
        actionMenu();
    });
//checkiflvlup() was here
}

export const expToLevelUp = () => {
    let lvl = getHero().lvl;
    const expNeededToLevelUp = 20 * lvl * lvl - 15 * lvl;
    return expNeededToLevelUp;
}


export async function checkIfLevelUp(currentExp, lvl) {
    if (currentExp >= expToLevelUp()) {
        $('player-info').textContent = `LEVEL UP!!!`;
        await sleep(1500);
        getHero().lvl++;
        getHero().onLevelUp();
    }
}


const createSelectPotionType = () => {
    let choosePotionTypeParagraph = document.createElement('p');
    choosePotionTypeParagraph.id = `select-potion-type-p`;
    let choosePotionTypeText = document.createTextNode('Select Potion Type:');
    let potionTypeSelect = document.createElement('select');
    potionTypeSelect.id = 'select-potion-type';

    for (let i = 0; i < potionTypes.length; i++) {
        let potion = potionTypes[i];
        let option = document.createElement('option');
        option.value = potion.type;
        option.text = `${potion.name}: ${potion.amount}`;
        if (getHero().consumables[potion.type].amount > 0) potionTypeSelect.add(option);
    }
    potionTypeSelect.options.selectedIndex = selectedIndex;
    choosePotionTypeParagraph.appendChild(choosePotionTypeText);
    $('actions').appendChild(choosePotionTypeParagraph);
    $('actions').appendChild(potionTypeSelect);
}






//To jest inny sposob na zrobienie createSelectPotionType() ale ten u gory chyba lepszy?
    // let tinyPotionOption = document.createElement('option');
    // tinyPotionOption.value = `tinyHealthPotion`
    // tinyPotionOption.text = `Tiny Health Potion`
    // let smallPotionOption = document.createElement('option');
    // smallPotionOption.value = `smallHealthPotion`
    // smallPotionOption.text = `Small Health Potion`
    // let mediumPotionOption = document.createElement('option');
    // mediumPotionOption.value = `mediumHealthPotion`
    // mediumPotionOption.text = `Medium Health Potion`
    // let bigPotionOption = document.createElement('option');
    // bigPotionOption.value = `bigHealthPotion`
    // bigPotionOption.text = `Big Health Potion`
    // let hugePotionOption = document.createElement('option');
    // hugePotionOption.value = `hugeHealthPotion`
    // hugePotionOption.text = `Huge Health Potion`

    // potionTypeSelect.add(tinyPotionOption);
    // potionTypeSelect.add(smallPotionOption);
    // potionTypeSelect.add(mediumPotionOption);
    // potionTypeSelect.add(bigPotionOption);
    // potionTypeSelect.add(hugePotionOption);