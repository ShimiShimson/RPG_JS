import { random } from "../helpers.js";


export class Location {
    constructor(type, name, minLvl, maxLvl, enemiesList){
        this.type = type;
        this.name = name;
        this.minLvl = minLvl;
        this.maxLvl = maxLvl;
        this.enemiesList = enemiesList;
    }
    getRandomEnemyFrom() {
        const randomEnemy = this.enemiesList[random(this.enemiesList.length)]
        const cloneOfRandomEnemy = JSON.parse(JSON.stringify(randomEnemy));
        console.log(cloneOfRandomEnemy)
        return cloneOfRandomEnemy;
    }
}
