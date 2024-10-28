const fruitArray = ['apple', 'orange', 'mandarine', 'banana'];
console.log(fruitArray);
//en Array av olika frukter
// har en längd av 4--> 0,1,2,3

const fruitArrayTvå = ['apple', 'orange', 'banana'];
console.log(fruitArrayTvå)
//Array length 3--> 0,1,2

let enMindreFrukt = fruitArrayTvå.pop();
console.log(enMindreFrukt);
//POP() tar it sista datan i arrayen so console.log visar bara apple, orange
//

const fruitFågelArray = ['apple', 'orange', 'banana'];
console.log(fruitFågelArray)
fruitFågelArray.push (['duva', 'örn']) 
// push adderar något till arrayen, i detta fallet blir fjärde värdet arrayen med fåglar-
console.log(fruitFågelArray);

const fruitArrayTre = ['apple', 'orange', 'banana'];
let förstaFrukt = fruitArrayTre.shift()
console.log(fruitArrayTre)
//SHIFT tar bort första datan, så förstaFrukt blir apple
console.log(förstaFrukt);

const fruitArrayFyra = ['apple', 'orange', 'banana'];
fruitArrayFyra.unshift(['papaya', 'mango'])
console.log(fruitArrayFyra)
//UNSHIFT adderar till början av en array, så papaya o mango hamnar "först" som en array på plats 0