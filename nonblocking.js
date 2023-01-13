const fs = require('fs')

// read & display cities async using a callback
fs.readFile('cities.txt', 'utf8', (err, cities) => {
    console.log('start cities');
    console.log(cities);
    console.log('end cities');
})
console.log('We were born in these cities');

// read & display countries async using a callback
fs.readFile('countries.txt', 'utf8', (err, countries) => {
    console.log(countries);
})
console.log('We were born in these countries');