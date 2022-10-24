// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    };

    attack() {
        return this.strength;
    };

    receiveDamage(damage) {
        this.health -= damage;
    }

}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    };

    receiveDamage(damage) {
        this.health -= damage;
        return this.health > 0 ? `${this.name} has received ${damage} points of damage` : `${this.name} has died in act of combat`;
    } 
    

    battleCry() {
        return `Odin Owns You All!`;
    };
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
    }

    receiveDamage(damage) {
        this.health -= damage;
        return this.health > 0 ? `A Saxon has received ${damage} points of damage` : `A Saxon has died in combat`;
    }
}
// War
class War {
    vikingArmy = [];    
    saxonArmy = [];

    addViking(Viking) {
        this.vikingArmy.push(Viking);
    };

    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon);
    };

    vikingAttack() {
        
        let vikingAction = this.saxonArmy[0].receiveDamage(this.vikingArmy[0].attack());
        this.saxonArmy[0].health > 0 ? true : this.saxonArmy.shift();
        return vikingAction;   

    };

    saxonAttack() {

        let saxonAction = this.vikingArmy[0].receiveDamage(this.saxonArmy[0].attack());
        this.vikingArmy[0].health > 0 ? true : this.vikingArmy.shift();
        return saxonAction;

    };

    showStatus() {
        if (!this.saxonArmy.length) {
                return `Vikings have won the war of the century!`
            }else if(!this.vikingArmy.length) {
                return `Saxons have fought for their lives and survived another day...`
            }else{
                return `Vikings and Saxons are still in the thick of battle.`;
            };
    };
}
