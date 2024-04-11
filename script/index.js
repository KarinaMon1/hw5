class Creature{
    static number = 0;
	#id;
    name;
    healthPoints;
    damage;

    constructor(name, healthPoints, damage){
        this.name = name;
        this.healthPoints = healthPoints;
        this.damage = damage;

        Creature.number++;
    }
    defeat(){
        console.log(`${this.name} уничтожено`);
    }
    
};

class Player extends Creature {
    #lvl = 1;
    attack(other) {
        other.healthPoints -= this.damage;
        if(other.healthPoints <= 0){
            other.defeat();
            this.#lvl+=1;
            return true;
        }
        return false;
    }
    
};

class Enemy extends Creature {
    attack(other) {
        other.healthPoints -= this.damage;
        if(other.healthPoints <= 0){
            other.defeat();
            return true;
        }
        return false;
    }
    
};


var me = new Creature('Bob', 100, 20);
var enemy = new Enemy('Pop', 100, 50);
console.log(me.attack(enemy));
console.log(enemy.attack(me));
console.log(me.attack(enemy));
console.log(me.attack(enemy));
console.log(enemy.attack(me));