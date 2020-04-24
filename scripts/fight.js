import { hero1 } from "./hero_creation.js";
import { fly } from "./models/enemy.js";
import { sleep } from "./game_controller.js";



export async function fight(player, enemy) {
    player = hero1;
    enemy = fly;
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
        return;
    }
    player.hp -= enemy.dmg_physical;
    console.log(`${player.name} got hit by ${enemy.name} and lost ${enemy.dmg_physical} HP.`);
    await sleep(1000);
    if (player.hp <= 0) {
        console.log(`${player.name} is dead. ${enemy.name} won this fight.`);
        console.log(player);
        return;
    }
    //fight(hero1, fly);
}
