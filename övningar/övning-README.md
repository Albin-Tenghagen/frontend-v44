The Basics

1.    Gör en array som innehåller 5 st olika frukter av datatypen string.

2.    gör en array som innehåller 3 olika datatyper, ex. string, number, array.

let animals = ["cat", "hamster", "parrot", "funky chihuahua"];

3.    console.log() hur många objekt arrayen ovan innehåller.

4.   I arrayen ovan, hämta cat.

5.   I arrayen ovan, hämta funky chihuahua.

6.    I arrayen ovan, byt ut hamster mot tiger.

let a = [1, 2, 3];
let b = [4, 5, 6];

7.    Lägg ihop ovanstående arrayer.

let a = [1, 2, 3, 7, 8, 9];
let b = [4, 5, 6];

8.    Merga ner array b på index 3 array a.

let arr = ["a", "b", "c"];

9.    Klona ovanstående array.

Methods

.push(), .unshift(), .pop(), .shift(), .splice() "Vill lärare att ni minst gör", .includes(), .indexOf(), .substring()

let fruits = ["kiwi", "apple", "pear"];

    Lägg till en frukt i slutet av arrayen ovan.

    Lägg till en frukt i början av arrayen ovan.

    I arrayen ovan, ta bort sista frukten i arrayen.

    I arrayen ovan, ta bort första frukten i arrayen.

    Sätt in en frukt i arrayen ovan på index 1.

    Sätt in tre frukter i arrayen ovan på index 2.

let names = ["David", "Christoffer", "Johan", "Maja"];

    I arrayen ovan, ta bort Christoffer och Johan.

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    Spegelvänd på arrayen ovan.

let str = "Supercalifragilisticexpialidocious";

    Kika om strängen ovan innehåller bokstaven n.

    Kika om strängen ovan innehåller bokstaven x.

    I ovanstående array, hitta vilket position första förekomsten av p har.

    I strängen ovan, plocka fram de 5 första tecknena.

    I strängen ovan, plocka fram de 7 sista tecknena.

Advanced methods ( high order methods ) "OK att vänta med"
.filter()

let numArray = [23, 45, 5, 62, 1, 21, 3, 54];

    I arrayen ovan, filtera fram alla nummer över 5.

    I arrayen ovan, filtera fram alla nummer under 5.

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
  },
];

    Skriv ut alla namn som är 18 år eller över från arrayen ovan.

    Skriv ut alla namn som är under 18 år från arrayen ovan.

.sort()

let arr = ["beta", "alfa", "gamma"];

    Sortera ovanstående array alfabetisk.

let nums = [1, 5, 7, 9, 3, 4, 2, 6, 8];

    Sortera ovanstående array numeriskt.

    I person-arrayen ovan, sortera objekten efter ålder, yngst först.

    I person-arrayen ovan, sortera objekten efter ålder, äldst först.

    I person-arrayen ovan, sortera objekten i bokstavsordning efter deras namn

.map()

    I person-arrayen ovan, gör om alla namn till versaler.

    I person-arrayen ovan, spegelvänd alla namn.

Loop arrays

let fruits = ["apelsin", "päron", "äpple", "kiwi"];

    Loopa ut följande array med en forEach()-loop. console.log() varje ord.

    Loopa ut följande array med en for of-loop. console.log() varje ord.

    Loopa ut följande array med en for-loop. console.log() varje ord.

    Loopa ut följande array. För varje varv i loopen ska du också skriva ut index. ex:

0 - apelsin
1 - päron
...
