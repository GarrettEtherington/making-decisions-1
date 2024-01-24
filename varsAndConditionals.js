let jonSnowAttack = 25
let jamieLannisterAttack = 35

let jonSnowHealth = 100
let jonSnowDefense = 0

jonSnowDefense =+ 10

// if (jonSnowHealth <= jamieLannisterAttack - jonSnowDefense) {
//     console.log(`Jon be slain, man`)
// } else { 
//     jonSnowHealth -= jamieLannisterAttack
//     console.log(jonSnowHealth + jonSnowDefense)
// }

if(jonSnowHealth + 50 > 100){
    jonSnowHealth = 100
} else {
    jonSnowHealth += 50
}

// let coinLandsHeads = true

// if(!coinLandsHeads){
//     console.log(`The fight is still on`)
// } else {
//     console.log(`jon go bye bye`)
// }

// for (let i = 0; i < 5; i++){
//     if(jonSnowHealth <= 0){
//         console.log(`jon kicked a bunch o' buckets`)
//     } else {
//         jonSnowHealth -= jamieLannisterAttack - jonSnowDefense
//         console.log(`Jon Snow;s health has been redced to ${jonSnowHealth}`)
//     }  
 
// }

while (jonSnowHealth > 0){
    jonSnowHealth -= jamieLannisterAttack -jonSnowDefense
    if(jonSnowHealth <= 0){
        console.log(`jonny boy's health is ${jonSnowHealth}`)  
    } else {
        
    }
}

// if (jonSnowAttack > jamieLannisterAttack) {
//     console.log (`Jon is pretty rad bro`)
// } else if(jamieLannisterAttack > jonSnowAttack) {
//     console.log(`Jamie done jimmied some john's`)
// } else {
//     console.log(`It's a Mc'Tie!`)
// }