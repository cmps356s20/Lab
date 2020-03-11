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



getCountry("Qatar");