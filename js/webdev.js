const items = [
    {name: 'john', price: 100},
    {name: 'johan', price: 5},
    {name: 'johnny', price: 95},
    {name: 'Jonas', price: 10},
    {name: 'Björn', price: 135},
    {name: 'Gillis', price: 500},
    {name: 'Göran', price: 50},
    {name: 'Anna', price: 250},
    {name: 'göran', price: 1000},
]
console.log(items)

const filteredItems = items.filter((item) => {
    return item.price >= 100;
})
console.log(filteredItems)

//---------------------------------------------------
//---------------------------------------------------
const filteredPrice = items.map((item) => {
    return item.price;
})
console.log(filteredPrice)
const filteredNames = items.map((item) => {
    return item.name;
})
console.log(filteredNames)
//---------------------------------------------------

const foundItems = items.find((item) => {
    return item.name === 'göran'
})
console.log(foundItems)

const foundItemsTvå = items.find((item) => {
    return item.name === 'Göran'
})
console.log(foundItemsTvå)
//---------------------------------------------------
//---------------------------------------------------

items.forEach((item) => { 
    console.log(item)
})
//Loop function för arrays?

const expensiveItems = items.some((item) => { 
    return item.price >= 100;
})
//Some är en funktion som kollar om 1 eller flera object följer en parameter.
console.log(expensiveItems)

const severalExpensiveItems = items.every((item) => { 
    return item.price >= 100;
})
//every är en function som kollar om alla object följer en parameter
console.log(severalExpensiveItems)

//---------------------------------------------------
//---------------------------------------------------

const totaltPris = items.reduce((currentTotal,item) => { 
    return item.price + currentTotal
}, 0)
console.log(totaltPris)


// -----------------------
let numberItems = [1, 2, 3, 4, 5, 6]

let numberTvåInNumbers = numberItems.includes(2)
//displays true
let numberTreInNumbers = numberItems.includes(6)
//displays flase
console.log(numberTreInNumbers)