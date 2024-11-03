console.log('Javascript loaded correctly1')

//Vad är en function?
//det är ett återanvänbart kodblock som kan återanvändas.

//Deklarera och anropar man functioner?

 //syntax för en att deklarera

// function nameOfTheFunction(parametrar) {
     //Här innanflr sker koden
     //return result

// }

function sayHello() {
    console.log('hej världen')
}

//anropa en funcion
sayHello();

//skapa en function med parametrar

// function sayHello2(name) {
//     console.log('hej världen' + name)
// }

// let promptName = prompt('säg ditt namn')

// sayHello2('Albin')
// sayHello2('Albin')
// sayHello2('Albin')
// sayHello2(promptName)
// sayHello2('Thomas')
// sayHello2('Mandus')

//skapa function med en return value och varför används det?
//return avslutar en function och spottar ut ett resultat 


    //tidigt avslut av en function
// function findSquareRoot(x) {
//     if (x < 0) {
//         return 'kan inte beräkna kvadratroten av negativa tal'
//     } else {
//         return Math.sqrt(x)
//     }
// }

// console.log(findSquareRoot(9))
    //kommer skriva ut 3
// console.log(findSquareRoot(-11))
 //returnerar 'kan inte beräkna kvadratroten av negativa tal'
//------------------------------------------------------------------------
    //eftersom functionen inte har ett return värde så resulterar det i att functionen utförs, men inte att det returnerar ett värde
function sayHello() {
    console.log('hej världen')
    
}

let greeting = sayHello()
console.log(greeting)

//function med två parametrar
function add(a,b) {
    return a + b;
}
console.log(add(5, 85));
add(5, 85)

//Namngiven functioner har ett namn
//Anonyma functioner är utan namn
//Arrow functions är den tredje sorten (=>)

// //Namngiven functioner har ett namn 
// har fördelen att dem är lätta att anropa med deras Namn, när functionens syfte är klart definierat. När det är centralt för kodens sammanhang så är namngivna fördelaktiga

// //Anonyma functioner är utan namn
// är användbara som parametrar inom en function  

// // arrow functioner
// har kortare syntax för o skriva functioner, när man har kortare functions vill man skriva det med anonyma/arrow functionerden behåller inte sitt eget this värde, vilket kan vara bra eller problematiskt, den är bra för inline functioner

let person = {
    firstName: 'Albin',
    lastName:  'Tenghagen',
    greeting: () => {
        console.log('hej jag heter' + this.firstName)
    }
}
console.log(person.greeting())
//den funkar ej för this sparas ej, eftersom de inte funkar med arrow functions
person.greeting()
let person2 = {
    firstName: 'Albin',
    lastName:  'Tenghagen',
    greeting: function greeting() {
        console.log('hej jag heter' + this.firstName)
    }
}
//exempel på en namngiven function från ovan

//arrow function
let functionName = (parameter1, parameter2) => {
    //kod som ska utföras
    return resultat
}

//kortare arrow function som gör samma sak som exemplet nedan
let add2 = (a, b) => a + b;
// samma function som den ovan skriven på ett utförligare vis 
let add3 = (a, b) => {
    return a + b;
}

// arrow function med en high order funtcion map()
let num = [1, 2, 3, 4, 5, 6, 7];

let multiply = num.map((num1) => num1 * 2);
console.log(multiply)