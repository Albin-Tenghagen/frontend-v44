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
    // console.log() hur många objekt arrayen ovan innehåller.
//3.
let cat = animals.shift()
console.log(cat, typeof cat)
    //I arrayen ovan, hämta cat.
//4.

let funky = animals.pop()
console.log(funky, typeof funky)
    //I arrayen ovan, hämta funky chihuahua.
//5.

let hamsterMotTiger = animals.slice(0,1, 'tiger')
console.log(hamsterMotTiger)
console.log(animals)
    //  I arrayen ovan, byt ut hamster mot tiger.
//6.
//-----------------------------------------------------------------------------
let a = [1, 2, 3];
let b = [4, 5, 6];
let thirdArray = a.concat(b)
console.log(thirdArray)
    //Lägg ihop ovanstående arrayer.
//7.

let c = [1, 2, 3, 7, 8, 9];
let d = [4, 5, 6];
c.splice(2,0, d)
console.log(c)
    //Merga ner array d på index 3 array c.
//8.
//-----------------------------------------------------------------------------------
let arr = ["a", "b", "c"];
let arr2 = arr.slice()
console.log(arr)
console.log(arr2)
    //Klona ovanstående array.
//9.
//-----------------------
let fruits = ["kiwi", "apple", "pear"];
console.log(fruits)
//10.
fruits.push('banan');
console.log(fruits)
    //Lägg till en frukt i slutet av arrayen ovan.    
//11.
fruits.unshift('dragonfruit')
console.log(fruits)
    //Lägg till en frukt i början av arrayen ovan.
//12.
fruits.pop()
console.log(fruits)
    //I arrayen ovan, ta bort sista frukten i arrayen.
//13.
fruits.shift()
console.log(fruits)
    //I arrayen ovan, ta bort första frukten i arrayen.
//14.
fruits.splice(1,0, 'bapelsin');
console.log(fruits)
    //Sätt in en frukt i arrayen ovan på index 1.
//15.
fruits.splice(2,0, 'Vapelsin', 'binduvor', 'brantBacke');
console.log(fruits)
    //Sätt in tre frukter i arrayen ovan på index 2.
//-----------------------
let names = ["David", "Christoffer", "Johan", "Maja"];
//16.
    let excludedNames = names.splice(1,2)
    console.log(names)
    console.log(excludedNames)
    // I arrayen ovan, ta bort Christoffer och Johan.
//-----------------------
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//17.
numbers.reverse();
console.log(numbers)
    //Spegelvänd på arrayen ovan.
//-----------------------
let str = "Supercalifragilisticexpialidocious";
//18.
let strIncludes = str.includes('n')
console.log(strIncludes)
    //Kika om strängen ovan innehåller bokstaven n.
//19.
 let strIncludesX = str.includes('x')
console.log(strIncludesX)
    //Kika om strängen ovan innehåller bokstaven x.
//20.
let arrStr = Array.from(str)
arrStr.indexOf('p')
console.log(arrStr, arrStr.indexOf('p'))
    //I ovanstående array, hitta vilket position första förekomsten av p har.
//21.
let fiveFirst = arrStr.slice(0,6) 
console.log(fiveFirst)
    //I strängen ovan, plocka fram de 5 första tecknena.
//22.
let sevenLast = arrStr.slice(-1, 6) 
console.log(sevenLast) 
    //I strängen ovan, plocka fram de 7 sista tecknena.
//-----------------------

// Advanced methods ( high order methods ) "OK att vänta med"
// .filter()

//---------------------------------------------------------------------
let numArray = [23, 45, 5, 62, 1, 21, 3, 54];
console.log(numArray)
//22.
    const overFive = numArray.filter((num) => num > 5);
    console.log(overFive)
    //I arrayen ovan, filtera fram alla nummer över 5.
//23.
    const underFive = numArray.filter((num) => num <= 5)
    console.log(underFive);
    //Filtrerar ut alla num som är under 5
//---------------------------------------------------------------------

let persons = [
    {
        name: "Felicia",
      age: 12,
    },
    {
        name: "Pelle",
        age: 20,
    },
    {
        name: "Peter",
        age: 59,
    },
    {
        name: "Anna",
        age: 32,
    },
    {
        name: "Jocke",
        age: 18,
    },
    {
        name: "Ella",
        age: 3,
    }
];
//24.
let filteredByAge = persons.filter((person) => person.age >= 18)
console.log(filteredByAge)
    //Skriv ut alla namn som är 18 år eller över från arrayen ovan.
//25.
let filteredByUnderage = persons.filter((person) => person.age <= 18)
console.log(filteredByUnderage)
    //Skriv ut alla namn som är under 18 år från arrayen ovan.
//------------------------------------------------------------------------------------
let arry = ["beta", "alfa", "gamma"];
console.log(arry)
//26.
arry.sort()
console.log(arry)
    //Sorterar ovanstående array alfabetiskt
//------------------------------------------------------------------------------------
let nums = [1, 5, 7, 9, 3, 4, 2, 6, 8];
console.log(nums)
//27.
nums.sort()
console.log(nums)
    //Sorterar ovanstående array numeriskt

//28.
persons.sort((a, b) => a.age - b.age );
console.log(persons)    
    //I person-arrayen ovan, sortera objekten efter ålder, yngst först.
//29.
persons.sort((a, b) => b.age - a.age);
console.log(persons);
    //I person-arrayen ovan, sortera objekten efter ålder, äldst först.
//30.
persons.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
console.log(persons)
    //I person-arrayen ovan, sortera objekten i bokstavsordning efter deras namn
//-----------------------------------------------------------------------------------
// .map()
//31.
let capsLockPersons = persons.map((item) => {
    return item.name.toUpperCase();
})  
console.log(capsLockPersons)
    //I person-arrayen ovan, gör om alla namn till versaler.
//32. 
let reversedNames = persons.map((item) => {
    return item.name.split("").reverse().join("");
})
console.log(reversedNames)
    //I person-arrayen ovan, spegelvänd alla namn.  