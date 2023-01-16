// Make A Ship Class
class USAssembly {
    constructor() {
        this.hull = 20;
        this.firePower = 5;
        this.accurancy = .7;
    }
    shoot() {
        let attack = Math.random();
        if (attack < this.accurancy) {
            enemy.hull -= this.firePower;
            
            console.log('%cWe have struck the enemy ship!', "border: 2px solid green;")
        } else {
            console.log("%cOur attack has missed! Brace yourselves!", "border: 2px solid red;")
        }
        if (enemy.hull <= 0) {
            enemy.fleet -= 1;
            console.log("%cAn enemy ship has been destroyed!", "border: 2px solid green;")
            if (enemy.fleet <= 0 && player.hull > 0) {
                return console.log("%cAll the enemy ships have been destroyed! We have successfully defeated the alien threat!", "background-color:green; border: 3px solid black; color:white;")
            }
        }
        if(enemy.fleet <= 0 && player.hull <= 0) {
            console.log("The battle has ended in a tie! The Earth is safe for now!")
        }
    }
    
}

class AlienInvaders {
    constructor() {
        this.hull = Math.floor(Math.random() * (7 - 3) + 3)
        this.firePower = Math.floor(Math.random() * (5 - 2) + 2)
        this.accuracy = (Math.random() * ((0.8 - 0.6) + 0.6))
        // console.log(this.accuracy)
        this.fleet = 6
        //bonus
        //this.fleet = Math.floor(Math.random() * (50 - 15) + 15)
    }
    damage() {
        let attackShip = Math.random();
        // console.log(attackShip)
        if (attackShip < this.accuracy) {
            player.hull -= this.firePower
            console.log('%cThe enemy ship has attacked! Critical hit!!', "background-color:red;")
        } else if (this.fleet > 0) {
            console.log('%cThe enemy has returned fire! Our shield was able to withstand the enemies attack!', "border: 2px dotted green;" )
        }
        if (player.hull <= 0 && enemy.fleet > 0) {
            console.log('%cOur ship has been destroyed! The alien invaders have destroyed the planet!', "background-color:red;")
        }
    }
}

const player = new USAssembly();
const enemy= new AlienInvaders();
    


// let turn = true;
var buttonShowing = true;
// let fleetArr = [];


//start game//
let start = document.getElementById('start')


start.addEventListener('click', () => {
  start.style.display = 'none';
  buttonShowing = false;
console.log("%c Mayday! Mayday! Captain, the USS Assembly is under attack by extraterrestrials!", "font-size: 16px; font-style: bold;" )
console.log("%cThere are  six ships in the fleet! We must destroy them all before they destroy the planet!", "font-size: 14px")
 console.log('%cLet\'s go!', "font-size: 14px");


});

//start game//

//fight//
let attack = document.getElementById('attack')

function battle() {
    //when attack clicked 
    if (buttonShowing === true ) {
        return console.log("%cYou must start the game first!", "border: 2px solid yellow;");   
    } 
    else if (enemy.fleet <= 0 || player.hull <= 0) {
        console.log("%cRestart to defend the planet again!", "border: 2px solid green;");
        // attack.removeEventListener('click', battle());
    }
    else {
    // attack.addEventListener('click', () => { 
    
        player.shoot()
        enemy.damage()
        
    // })
    }
    
} 
attack.addEventListener('click', () => { battle()})

//fight//

//status//
let stat = document.getElementById('status')

function checkStat () {
if (buttonShowing === false && enemy.fleet > 0 && player.hull > 0) {
console.log(`%cWe have ${player.hull} shield points left!\n\nThe alien ship has ${enemy.hull} shield points left!\n\nThere are ${enemy.fleet}  enemy ships left!`, ('font-style: italic; font-color: red;'))
}else if (buttonShowing === true)
{
    return console.log("%cYou must start the game first!","border: 2px solid yellow;");
}
 if (enemy.fleet <= 0 || player.hull <= 0) {
    console.log("%cRestart to defend the planet again!", "border: 2px solid green;");
}
}
stat.addEventListener('click', () => { checkStat()})
//status//

//retreat//
let retreat = document.getElementById('retreat')

function retreatGame () {
    if (buttonShowing === true)
{
    return console.log("%cYou must start the game first!", "border: 2px solid yellow;");
} 
    if(Math.random() > .5 && enemy.fleet < 6) {
console.log("%cWe have attempted to flee, however the enemy fleet has followed us!", "border: 2px solid yellow;")
} else if (enemy.fleet < 6) {
    stat.style.display = 'none'
    attack.style.display = 'none'
    retreat.style.display = 'none'
    console.log("%cWe have retreated! \nRestart to defend the planet again!", "border: 2px solid yellow;")
   
} else if (enemy.fleet = 6){
    console.log("%cWe must destroy at least one ship before we can retreat!", "border: 2px solid yellow;")
}

}
retreat.addEventListener('click', () => { retreatGame()})
//retreat//

//restart//
let restart = document.getElementById('reset')

function restartGame () {
    console.log("Game Reset");
    window.location.reload(false);
}
restart.addEventListener('click', () => {restartGame()})
//restart//
