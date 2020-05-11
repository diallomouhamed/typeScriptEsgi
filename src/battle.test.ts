import { Pokemon } from "./pokemon";
import { Battle } from "./battle";

describe('should return pokemon who has to start', function() {
    it('whoHadToAttack', function() {
      const salameche = new Pokemon("Salamèche", 100, 40, 40, 40, 30);
      const carapuce = new Pokemon("Carapuce", 80, 30, 30, 30, 20);
      const battle = new Battle(salameche, carapuce);

      expect(battle.pokemonWhoHasToStart()).toBe(salameche);
    });
})

describe('should return pokemons with less hp', function() {
    it('doAttackInOrder', function() {
      const salameche = new Pokemon("Salamèche", 50, 40, 15, 40, 30);
      const carapuce = new Pokemon("Carapuce", 40, 30, 10, 30, 20);
      const battle = new Battle(salameche, carapuce);

      const [salamecheAfterAttack, carapuceAfterAttack] = battle.doAttackInOrder(Object.assign({}, salameche), Object.assign({}, carapuce));

      // console.log(`salameche hp : ${salameche.hp}      salamecheAfterAttack hp : ${salamecheAfterAttack.hp}`);
      // console.log(`carapuce hp : ${carapuce.hp}      carapuceAfterAttack hp : ${carapuceAfterAttack.hp}`);

      expect(salamecheAfterAttack.hp).toBe(48);
      expect(carapuceAfterAttack.hp).toBe(37);
    });
})

describe('should return pokemons with less hp', function() {
    it('doAttackInOrder', function() {
      const salameche = new Pokemon("Salamèche", 50, 40, 15, 40, 30);
      const carapuce = new Pokemon("Carapuce", 40, 30, 10, 30, 20);
      const battle = new Battle(Object.assign({}, salameche), Object.assign({}, carapuce));

      battle.doAttacks();

      // console.log(`salameche hp : ${salameche.hp}      battle.pokemon0 hp : ${salamecheAfterAttack.hp}`);
      // console.log(`carapuce hp : ${carapuce.hp}      battle.pokemon1 hp : ${carapuceAfterAttack.hp}`);

      expect(battle.pokemon0.hp).toBe(48);
      expect(battle.pokemon1.hp).toBe(37);
    });
})