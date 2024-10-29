let stringArray = ['banan', 'äpple', 'kiwi', 'apelsin', 'mandarin'];
console.log(stringArray)
//1. 
let severalTypeArray = ['flera datatyper', 1337, ['massa', 'olika', 'typer']];
console.log(severalTypeArray)
//2.
//-----------------------------------------------------------------------------
let animals = ["cat", "hamster", "parrot", "funky chihuahua"];
    console.log(animals.length)
    console.log(animals)
//3.
let cat = animals.shift()
console.log(cat, typeof cat)
//4.
let funky = animals.pop()
console.log(funky, typeof funky)
//5.

let hamsterMotTiger = animals.slice(0,1, 'tiger')
console.log(hamsterMotTiger)
console.log(animals)
//6.
//-----------------------------------------------------------------------------
let a = [1, 2, 3];
let b = [4, 5, 6];
let thirdArray = a.concat(b)
console.log(thirdArray)
//7.

let c = [1, 2, 3, 7, 8, 9];
let d = [4, 5, 6];
c.splice(2,0, d)
console.log(c)
//8.
//-----------------------------------------------------------------------------------
let arr = ["a", "b", "c"];
let arr2 = arr.slice()
console.log(arr)
console.log(arr2)

//9.
//-----------------------
let fruits = ["kiwi", "apple", "pear"];
console.log(fruits)
//10.
fruits.push('banan');
console.log(fruits)
//11.
fruits.unshift('dragonfruit')
console.log(fruits)
//12.
fruits.pop()
console.log(fruits)
//13.
fruits.shift()
console.log(fruits)
//14.
fruits.splice(1,0, 'bapelsin');
console.log(fruits)
//15.
fruits.splice(2,0, 'Vapelsin', 'binduvor', 'brantBacke');
console.log(fruits)
//-----------------------
let names = ["David", "Christoffer", "Johan", "Maja"];
//16.
    let excludedNames = names.splice(1,2)
    console.log(names)
    console.log(excludedNames)
//-----------------------
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//17.
numbers.reverse();
console.log(numbers)
//-----------------------
let str = "Supercalifragilisticexpialidocious";
//18.
let strIncludes = str.includes('n')
console.log(strIncludes)
 //19.
 let strIncludesX = str.includes('x')
console.log(strIncludesX)
//20.
let arrStr = Array.from(str)
arrStr.indexOf('p')
console.log(arrStr, arrStr.indexOf('p'))
//21.
let fiveFirst = arrStr.slice(0,6) 
console.log(fiveFirst)
//22.
let sevenLast = arrStr.slice(-1, 6) 
console.log(sevenLast) 
//-----------------------
// Advanced methods ( high order methods ) "OK att vänta med"
// .filter()
let numArray = [23, 45, 5, 62, 1, 21, 3, 54];

