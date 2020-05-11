import { Pokemon } from "./pokemon";

export class Battle {

    public pokemon0: Pokemon;
    public pokemon1: Pokemon;

    constructor(pokemon0: Pokemon, pokemon1: Pokemon) {
        this.pokemon0 = pokemon0;
        this.pokemon1 = pokemon1;
    }

    getRandomInt(max): number {
        return Math.floor(Math.random() * Math.floor(max));
      }

    pokemonWhoHasToStart(): Pokemon {
        if(this.pokemon0.speed === this.pokemon1.speed) {
            if(this.getRandomInt(2) === 0) {
                return this.pokemon0;
            } else {
                return this.pokemon0;
            }
        }
        return this.pokemon0.speed > this.pokemon1.speed ? this.pokemon0 : this.pokemon1;
    }

    doAttackInOrder(firstAttacker: Pokemon, secondAttacker: Pokemon): void {
        let damages0 = Math.floor(Math.floor(Math.floor(2 * firstAttacker.level / 5 + 2) * firstAttacker.attack / secondAttacker.defense) / 50) + 2;
        secondAttacker.hp -= damages0;

        if(secondAttacker.hp <= 0) {
            secondAttacker.hp = 0;
        } else {
            let damages1 = Math.floor(Math.floor(Math.floor(2 * secondAttacker.level / 5 + 2) * secondAttacker.attack / firstAttacker.defense) / 50) + 2;
            firstAttacker.hp -= damages1;

            if(firstAttacker.hp <=0) {
                firstAttacker.hp = 0;
            }
        }
    }

    doAttacks(): void {
        if(this.pokemonWhoHasToStart() === this.pokemon0) {
            this.doAttackInOrder(this.pokemon0, this.pokemon1);
        } else if(this.pokemonWhoHasToStart() === this.pokemon0) {
            this.doAttackInOrder(this.pokemon1, this.pokemon0);
        }
    }

    fight(): void {
        while(this.pokemon0.hp > 0 && this.pokemon1.hp > 0) {
            this.doAttacks();
        }
    }
}