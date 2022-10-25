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
        
        let vikingFighter = Math.floor(Math.random() * this.vikingArmy.length);
        let saxonFighter = Math.floor(Math.random() * this.saxonArmy.length);
        let vikingAction = this.saxonArmy[saxonFighter].receiveDamage(this.vikingArmy[vikingFighter].attack());
        this.saxonArmy[saxonFighter].health > 0 ? true : this.saxonArmy.splice(saxonFighter, 1);
        return vikingAction;   

    };

    saxonAttack() {

        let saxonFighter = Math.floor(Math.random() * this.saxonArmy.length);
        let vikingFighter = Math.floor(Math.random() * this.vikingArmy.length);
        let saxonAction = this.vikingArmy[vikingFighter].receiveDamage(this.saxonArmy[saxonFighter].attack());
        this.vikingArmy[vikingFighter].health > 0 ? true : this.vikingArmy.splice(vikingFighter, 1);
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
