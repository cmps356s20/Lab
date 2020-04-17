const fs = require('fs-extra')

function searchCountry(countries, name) {
    return countries.find(c=>c.name=name)
}
function getCountry(countryName) {
    fs.readFile('./data/country.json')
        .then(data=>JSON.parse(data))
        .then(countries=> countries.find(c=>c.name===countryName))
        .then(country=> console.log(country))
        .catch(err=> console.log(err));
}
//not to block our app
getCountry("France");

console.log("This will be displayed before the method, and it will not block the other program");
console.log("This means my application will never freez even though I am doing somethign in the backgrou")
console.log("This is like threads running on a separate process")
/*
fs.readFile('./data/country.json')
        .then(data=>JSON.parse(data))
        .then(countries=> countries.find(c=>c.name===countryName))
        .then(country=> country.translations)
        .then(translations=> translations.es)
        .then(es=> console.log(es))
        .catch(err=> console.log(err));
 */