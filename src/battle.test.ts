import { Pokemon } from "./pokemon";
import { Battle } from "./battle";

describe('whoHadToAttack', function() {
    it('should return pokemon who has to start', function() {
      const salameche = new Pokemon("Salamèche", 100, 40, 40, 40, 30);
      const carapuce = new Pokemon("Carapuce", 80, 30, 30, 30, 20);
      const battle = new Battle(salameche, carapuce);

      expect(battle.pokemonWhoHasToStart()).toBe(salameche);
    });
})

describe('doAttackInOrder', function() {
    it('should return pokemons with less hp', function() {
      const baseHpSalameche = 50;
      const baseHpCarapuce = 40;
      const salameche = new Pokemon("Salamèche", baseHpSalameche, 40, 15, 40, 30);
      const carapuce = new Pokemon("Carapuce", baseHpCarapuce, 30, 10, 30, 20);
      const battle = new Battle(salameche, carapuce);

      battle.doAttackInOrder(salameche, carapuce);

      expect(baseHpSalameche > battle.pokemon0.hp).toBe(true);
      expect(baseHpCarapuce > battle.pokemon1.hp).toBe(true);
    });
})

describe('doAttacks', function() {
    it('should return pokemons with less hp', function() {
      const baseHpSalameche = 50;
      const baseHpCarapuce = 40;
      const salameche = new Pokemon("Salamèche", baseHpSalameche, 40, 15, 40, 30);
      const carapuce = new Pokemon("Carapuce", baseHpCarapuce, 30, 10, 30, 20);
      const battle = new Battle(salameche, carapuce);

      battle.doAttacks();

      expect(baseHpSalameche > battle.pokemon0.hp).toBe(true);
      expect(baseHpCarapuce > battle.pokemon1.hp).toBe(true);
    });
})

describe('fight', function() {
    it('should have pokemon KO', function() {
      const salameche = new Pokemon("Salamèche", 50, 40, 15, 40, 30);
      const carapuce = new Pokemon("Carapuce", 40, 30, 10, 30, 20);
      const battle = new Battle(salameche, carapuce);

      battle.fight();

      expect(salameche.hp > 0).toBe(true);
      expect(carapuce.hp).toBe(0);
    });
})