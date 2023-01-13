// include node's filesystem library so we can read text files from the os
const fs = require('fs');

// read & display cities
let cities = fs.readFileSync('cities.txt', 'utf8');
console.log(cities);
console.log('We were born in these cities');

// read & display countries
let countries = fs.readFileSync('countries.txt', 'utf8');
console.log(countries);
console.log('We were born in these countries');