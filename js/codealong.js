//High order function: map(), filter(), reduce()

let persons = [
    {firstName: 'Anna', age: 28,},
    {firstName: 'jon', age: 18,},
    {firstName: 'Greta', age: 68,}
]
console.log("persons", persons)

//map()

let nameList = persons.map(function (person) {
    return person.firstName;
});
console.log(nameList)

//filter()

let ageOverRetirement = persons.filter(function(person){
    return person.age >= 65;
})
console.log(ageOverRetirement)
//returnerar vad som är sant, i detta fallet om personens age är över eller lika med 65

// reduce()

let reduceResult = persons.reduce(function(ackumulator, person){
    return ackumulator + person.age;
}, 0);
console.log(reduceResult)
//reduerar persons ackumulerar åldern av varje person i arrayen persons.

//objects

let family = {
    personsFamily: 'Albin',
    partner: 'Ebba',
    pets: [
            {type: 'cat',catName: 'Rune', catAge: 5, isFemale: false},
            {type: 'cat',catName: 'Nelson', catAge: 7, isFemale: false},
            {type: 'dog', dogName: 'Nuvola', dogAge: 8, isFemale: true}
        ],
    siblings: 4 ,
    parents: 2,

}
console.log(family);
//family är ett object med olika keys som pets personsfamily pets osv, pets är en array med objects i

//Mandus rekomenderar att använda denna:
let girlfriend = family.partner;
console.log('partner',girlfriend);
//inte denna, men dem gör samma sak
let girlFriend = family["partner"];
console.log(girlFriend);

//ändra och lägga till egenskaper
//ändra
family.siblings = 5;
console.log('family is growing?', family);

//lägg till
family.country = 'Swerige'
console.log(family);

//object methods/function
//lägga till en function
family.greeting = function () {
    console.log(`Hej Albins familj, albins partner heter ${this.partner} och dem har ${this.pets.length} katter och hundar i sitt hem`)
};
console.log('family här med en function', family)
family.greeting()
//this refererar till objectet, så this använder man som family.partner istället för för family.partner så skriver man this.partner

// reduce

let reduceResultPet = family.pets.reduce(function (ackumulator, pet) {
    return ackumulator + (pet.catAge || pet.dogAge || 0);
}, 0);
console.log(reduceResultPet)
//eftersom jag har katter och hundar var ja tvungen att kolla efter type.age inte bara pet.age
//Fick NaN innan jag använde: (pet.catAge || pet.dogAge || 0), 0:an är där för att stoppa NaN
