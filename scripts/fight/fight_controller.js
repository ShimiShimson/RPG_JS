
import { enableFightMenuButtons, isPlayerDead } from "../fight/fight.js";
import { playerAttacks, useHpPotion } from "../fight/playerAction.js";
import { enemyAction } from "../fight/enemyAction.js";
import { fightMenu } from "../menus/fight_menu.js";
import { actionMenu } from "../menus/action_menu.js";



export async function playerActionThenEnemyAction(userChoice, enemy) {
    if (userChoice === `attack`) {
        await playerAttacks(enemy)
        await enemyAction(enemy);
        enableFightMenuButtons();
        if (isPlayerDead()) return actionMenu();
        fightMenu();
    }

    if (userChoice === `usePotion`) {
        useHpPotion()
        await enemyAction(enemy);
        if (isPlayerDead()) return actionMenu();
        enableFightMenuButtons();
        fightMenu();
    }
}