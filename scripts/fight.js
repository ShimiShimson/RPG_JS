import { getHero } from "./hero_creation.js";
import { getEnemy } from "./models/enemy.js";
import { sleep } from "./game_controller.js";
import { $, random } from "./helpers.js";
import { displayHeroStats } from "./action_menu.js";
import { actionMenu } from "./action_menu.js";


let enemy;
let player;

export function findEnemy(){
    enemy = getEnemy();
    $('actions-result').textContent = "Enemy found!";
}

export async function startFight() {
    $('actions-result').textContent = "";
    await fight();
    $('fight-btn').disabled = false;
    actionMenu();
}

export async function fight() {
    if (enemyMissing()) return;
    player = getHero();
    
    if (anyoneDeadOnStart()) return;
    $('fight-btn').disabled = true;
    checkDamageAndDefenseType(player, enemy);
    checkDamageAndDefenseType(enemy, player);

    console.log(`${player.name} HP: ${player.hp}`);
    console.log(`${enemy.name} HP: ${enemy.hp}`);
    await sleep(1000);
    hasDodged(enemy, player);
    if (anyoneDeadDuringFight()) return;
    await sleep(1000);
    hasDodged(player, enemy);
    displayHeroStats();
    if (anyoneDeadDuringFight()) return;
    await sleep(1000);
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
    const randomChance = random;
    const dodgeChance = defender.dodge;
    if (randomChance < dodgeChance) return console.log(`${defender.name} dodged the attack!`);
    else return calculateDamage(defender, attacker);
}


function calculateDamage(defender, attacker){
    //value of Attacker Damage will always be between 80 - 119% of Attacker.dmg_physical property
    const attackerDamage = Math.floor(attacker.damage * 0.8 + random(attacker.damage * 0.4));
    let damageDone =  attackerDamage - defender.defense;
    if(damageDone <= 0) return console.log(`${defender.name} defended the attack!`);
    else {
        defender.hp -= damageDone;
        return console.log(`${defender.name} got hit by ${attacker.name} and lost ${damageDone} HP.`);
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


function anyoneDeadDuringFight(){
    let stop = false;
    if (enemy.hp <= 0) {
        console.log(`${enemy.name} is dead. ${player.name} won this fight and received ${enemy.exp} exp and ${enemy.gold} gold.`);
        player.exp += enemy.exp;
        player.gold += enemy.gold;
        displayHeroStats();
        stop = true;
    }
    if (player.hp <= 0) {
        console.log(`${player.name} is dead. ${enemy.name} won this fight.`);
        stop = true;
    }
    return stop;
}
