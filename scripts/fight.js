import { getHero } from "./hero_creation.js";
import { getEnemy } from "./models/enemy.js";
import { sleep } from "./game_controller.js";
import { $ } from "./$.js";
import { displayHeroStats } from "./action_menu.js";


let enemy;

export function findEnemy(){
    enemy = getEnemy();
    $('interface').textContent = "Enemy found!";
}


    export async function fight() {
        if (!enemy) return alert(`No enemy - no fight!`);

        const player = getHero();
        displayHeroStats();
        if (player.hp <= 0) return console.log(`${player.name} is dead.`); 
        if (enemy.hp <= 0) return  console.log(` ${enemy.name} is dead.`);
        console.log(`Player HP: ${player.hp}`);
        console.log(`Enemy HP: ${enemy.hp}`);
        await sleep(1000);
        enemy.hp -= player.dmg_physical;
        console.log(`${enemy.name} got hit by ${player.name} and lost ${player.dmg_physical} HP.`);
        await sleep(1000);
        if (enemy.hp <= 0) {
            console.log(`${enemy.name} is dead. ${player.name} won this fight and received ${enemy.exp} exp and ${enemy.gold} gold.`);
            await sleep(1000);
            player.exp += enemy.exp;
            player.gold += enemy.gold;
            console.log(player);
            displayHeroStats();
            return;
        }
        player.hp -= enemy.dmg_physical;
        console.log(`${player.name} got hit by ${enemy.name} and lost ${enemy.dmg_physical} HP.`);
        
        displayHeroStats();
        await sleep(1000);
        if (player.hp <= 0) {
            console.log(`${player.name} is dead. ${enemy.name} won this fight.`);
            console.log(player);
            return;
        }
    }


    

    

