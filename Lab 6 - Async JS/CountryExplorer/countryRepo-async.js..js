const fs = require('fs-extra')


async function getCountry(countryName) {

    fs.readFile('./data/country.json')
        .then(data=>JSON.parse(data))
        .then(countries=> countries.find(c=>c.name===countryName))
        .then(country=> console.log(country))
        .catch(err=> console.log(err));

    try{
        const data = await fs.readFile('./data/country.json');
        const countries = JSON.parse(data);
        const country  = countries.find(c=>c.name===countryName);
        console.log(`the capital city of ${countryName} is ${country.capital}`);
    }catch (e) {
        console.log(e);
    }
}

getCountry("Germany");
console.log("I was not bloacked by the long running method");