// jsx24vecka44

// Fördjupa JavaScript-kunskaper - Ämnen: - Functions:
// Functions - bootcamp

// Övning 1: Bryta ner kod i återanvändbara funktioner (Medel) Uppgift:

// Du har följande kod som beräknar omkretsen och arean av en cirkel:

// javascript Kopiera kod let radie = 5; let omkrets = 2 _ Math.PI _ radie; let area = Math.PI _ radie _ radie; console.log(Omkretsen är: ${omkrets}); console.log(Arean är: ${area}); Uppgift:

function calculateArea(x) {
    return Math.PI * (x ** 2)
}

function calculateCircumference(x) {
    return Math.PI * 2 * x
}
console.log(calculateCircumference(radie))
console.log(calculateArea(radie))

// Bryt ner koden i två separata funktioner: beräknaOmkrets(radie) och beräknaArea(radie). Använd funktionerna för att beräkna omkretsen och arean för cirklar med olika radier. Skriv ut resultaten. Mål:

// Öva på att skapa och anropa funktioner med parametrar och returvärden. Förstå fördelarna med att återanvända kod. Övning 2: Förstå scope och variabeltillgänglighet (Medel) Uppgift:

// Studera följande kod:

// javascript Kopiera kod let x = 10;

// function ändraX() { let x = 20; console.log(Inuti funktionen, x = ${x}); }

// ändraX(); console.log(Utanför funktionen, x = ${x}); Frågor:

// Vad kommer att skrivas ut av console.log()-satserna? Ändras värdet av x utanför funktionen? Modifiera koden så att funktionen faktiskt ändrar värdet av x i det globala scopet. Mål:

// Förstå skillnaden mellan lokala och globala variabler. Lära sig hur scope påverkar variabeltillgänglighet. Övning 3: Anonyma funktioner och arrow functions (Svår) Uppgift:

// Skapa en array av tal: [1, 2, 3, 4, 5]. Använd setTimeout() och en anonym funktion för att skriva ut varje tal med en fördröjning på 1 sekund mellan varje utskrift. Modifiera koden för att använda arrow functions istället för anonyma funktioner. Förklara hur closure påverkar detta exempel. Mål:

// Förstå användningen av anonyma funktioner och arrow functions i asynkrona sammanhang. Lära sig om closures och hur variabler bevaras i funktioner.

// Övning 4: Rekursiva Funktioner (Svår) Uppgift:

// Skriv en rekursiv funktion fakultet(n) som beräknar n! (n fakultet). Testa funktionen med olika värden av n. Förklara hur rekursion fungerar i detta sammanhang. Mål:

// Förstå konceptet av rekursion och hur man implementerar det i JavaScript. Lära sig att tänka algoritmiskt för att lösa problem. Övning 5: Scope och Hoisting (Svår) Uppgift:

// Analysera följande kod:

// javascript Kopiera kod console.log(x); var x = 5;

// funktion();

// function funktion() { console.log("Inuti funktionen"); } Frågor:

// Vad kommer att skrivas ut av console.log(x)? Varför fungerar anropet till funktion() innan den är definierad? Modifiera koden genom att använda let istället för var och observera skillnaderna. Mål:

// Förstå konceptet av hoisting i JavaScript. Lära sig skillnaderna mellan var, let och const.