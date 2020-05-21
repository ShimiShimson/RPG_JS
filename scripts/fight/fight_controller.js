import { enableFightMenuButtons, isPlayerDead, isEnemyDead } from "../fight/fight.js";
import { playerAttacks, useHpPotion } from "../fight/playerAction.js";
import { enemyAction } from "../fight/enemyAction.js";
import { fightMenu } from "../menus/fight_menu.js";
import { actionMenu } from "../menus/action_menu.js";



export async function playerActionThenEnemyAction(userChoice, enemy) {
    if (userChoice === `attack`) {
        await playerAttacks(enemy)
        if (isEnemyDead(enemy)) {
            enableFightMenuButtons()
            return
        }
        await enemyAction(enemy)
        if (isPlayerDead()) return actionMenu();
        fightMenu(enemy);
    }

    if (userChoice === `usePotion`) {
        useHpPotion()
        await enemyAction(enemy);
        if (isPlayerDead()) return actionMenu();
        enableFightMenuButtons();
        fightMenu(enemy);
    }
}