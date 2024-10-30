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
console.log(family)
//family är ett object med olika keys som pets personsfamily pets osv, pets är en array med objects i

let girlfriend = family.partner;
console.log('partner',girlfriend)
let girlFriend = family["partner"]
console.log(girlFriend)