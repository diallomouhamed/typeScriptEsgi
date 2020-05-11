export class Pokemon {
    public static idCounter: number = 1;
    public id: number;
    public name: string;
    public hp: number;
    public attack: number;
    public defense: number;
    public speed: number;
    public level: number;
    
    constructor(name: string,
                hp: number,
                attack: number,
                defense: number,
                speed: number,
                level: number) {
        this.id = Pokemon.idCounter;
        this.name = name;
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.speed = speed;
        this.level = level;

        Pokemon.idCounter += 1;
    }
}