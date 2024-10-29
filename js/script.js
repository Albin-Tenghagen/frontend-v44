const fruitArray = ['apple', 'orange', 'mandarine', 'banana'];
console.log(fruitArray);
console.log(fruitArray[0])
//en Array av olika frukter
// har en längd av 4--> 0,1,2,3


//Array length 3--> 0,1,2
const fruitArrayTvå = ['apple', 'orange', 'banana'];
console.log(fruitArrayTvå)
let enMindreFrukt = fruitArrayTvå.pop();
console.log(enMindreFrukt);
//POP() tar it sista datan i arrayen so console.log visar bara apple, orange
//

const fruitFågelArray = ['apple', 'orange', 'banana'];
console.log(fruitFågelArray)
fruitFågelArray.push (['duva', 'örn']) 
console.log(fruitFågelArray);
// push adderar något till arrayen, i detta fallet blir fjärde värdet arrayen med fåglar-

const fruitArrayTre = ['apple', 'orange', 'banana'];
let förstaFrukt = fruitArrayTre.shift()
console.log(fruitArrayTre)
console.log(förstaFrukt);
//SHIFT tar bort första datan, och returnerar det. så förstaFrukt blir apple

//unshift re
const fruitArrayFyra = ['apple', 'orange', 'banana'];
fruitArrayFyra.unshift(['papaya', 'mango'])
console.log(fruitArrayFyra)
//UNSHIFT adderar till början av en array, så papaya o mango hamnar "först" som en array på plats 0
const andraNumberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
andraNumberArray.unshift(0)
console.log(andraNumberArray)
// adderar 0 i början av arrayaen
//-------------------------------------------------------------

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numberArray.splice(4, 2)
console.log(numberArray)
//Tar bort data från en array (börjar på värde 4, och tar bort två värden)
const numberArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numberArray2.splice(4, 2, 5, 6)
console.log(numberArray2)
//tar bort siffrorna med värdet i arrayen 4, och två steg fram(nummer 5 o 6), lägger till dem igen efteråt.

const randomNumberArray = [
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100)
    ];
console.log(randomNumberArray)

for (let i = 0; i < randomNumberArray.length; i++) {
 console.log(randomNumberArray)
}

for (const fruit of fruitArray) {
    console.log('frukterna är som så', fruit)
}
//separerar frukterna och sparar i variablar

randomNumberArray.forEach((number, index) => {
    console.log('Nummer och index', index)
})


let totaltvärde = randomNumberArray.reduce((yallahTotal, randomNumberArray) => {
    return randomNumberArray + yallahTotal
}, 0)
console.log(totaltvärde)
