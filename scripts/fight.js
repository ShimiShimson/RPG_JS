import { getHero } from "./hero_creation.js";
import { getEnemy } from "./models/enemy.js";
import { sleep } from "./game_controller.js";
import { $, random } from "./helpers.js";
import { displayHeroStats } from "./menus/action_menu.js";
import { fightMenu } from "./menus/fight_menu.js";
import { Equipment } from "./models/item.js";


let enemy;
let player;

export function findEnemy(){
    displayHeroStats();
    enemy = getEnemy();
    $('actions-result').textContent = "Enemy found!";
}

export async function startFight() {
    $('actions-result').textContent = "";
    await fight();
    enableFightMenuButtons();
    fightMenu();
}

export async function fight() {
    if (enemyMissing()) return;
    player = getHero();
    
    if (anyoneDeadOnStart()) return;
    disableFightMenuButtons();
    checkDamageAndDefenseType(player, enemy);
    checkDamageAndDefenseType(enemy, player);

    console.log(`${player.name} HP: ${player.hp}`);
    console.log(`${enemy.name} HP: ${enemy.hp}`);
    await sleep(1000);
    hasDodged(enemy, player);
    if (await anyoneDeadDuringFight()) return;
    await sleep(1000);
    hasDodged(player, enemy);
    displayHeroStats();
    if (anyoneDeadDuringFight()) return;
    displayHeroStats();
    return;
}


function checkDamageAndDefenseType (attacker, defender){
    if (attacker.dmg_physical >= attacker.dmg_energy) {
        attacker.damage = attacker.dmg_physical;
        defender.defense = defender.defense_p;
    }
    else {
        attacker.damage = attacker.dmg_energy;
        defender.defense = defender.defense_e;
    }
}

function hasDodged(defender, attacker){
    const randomChance = random(100);
    const dodgeChance = defender.dodge;
    if (randomChance < dodgeChance) return console.log(`${defender.name} dodged the attack!`);
    else return calculateDamage(defender, attacker);
}


function calculateDamage(defender, attacker){
    
    let damageMinusDefense =  attacker.damage - defender.defense;
    //value of damageRoll will always be between 80 - 119% of damageMinusDefense variable
    const damageRoll = Math.floor(damageMinusDefense * 0.8 + random(damageMinusDefense * 0.4));
    if(damageRoll <= 0) return console.log(`${defender.name} defended the attack!`);
    else {
        defender.hp -= damageRoll;
        return console.log(`${defender.name} got hit by ${attacker.name} and lost ${damageRoll} HP.`);
    }
}

function enemyMissing (){
    if (!enemy) {
        alert(`No enemy - no fight!`);
        return true;
    }
}

function anyoneDeadOnStart(){
    let stop = false;
    if (player.hp <= 0){
        console.log(`${player.name} is dead.`);
        stop = true;
    }
    if (enemy.hp <= 0){
        console.log(` ${enemy.name} is dead.`);
        stop = true;
    }
    return stop;
}


async function anyoneDeadDuringFight(){
    let stop = false;
    if (enemy.hp <= 0) {
        console.log(`${enemy.name} is dead. ${player.name} won this fight and received ${enemy.exp} exp and ${enemy.gold} gold.`);
        player.exp += enemy.exp;
        player.gold += enemy.gold;
        displayHeroStats();
        await lootRoll();
        stop = true;
    }
    if (player.hp <= 0) {
        console.log(`${player.name} is dead. ${enemy.name} won this fight.`);
        stop = true;
    }
    return stop;
}



async function lootRoll() {
    const randomRoll = random(100);
    const chanceForLoot = 50;
    if (randomRoll < chanceForLoot){
        getHero().inventory.push(new Equipment());
        $('player-info').textContent = `${enemy.name} dropped new item! Check your inventory`;
        await sleep(3000);
    }

}


const disableFightMenuButtons = () =>{
    $('find-enemy-btn').disabled = true;
    $('fight-btn').disabled = true;
    $('use-hp-potion-btn').disabled = true;
    $('action-menu-btn').disabled = true;
}

const enableFightMenuButtons =() =>{
    $('find-enemy-btn').disabled = false;
    $('fight-btn').disabled = false;
    $('use-hp-potion-btn').disabled = false;
    $('action-menu-btn').disabled = false;
}