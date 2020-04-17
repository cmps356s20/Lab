const fs = require('fs-extra')

module.exports = async function getCountry(countryName) {
    try{
        const data = await fs.readFile('./data/country.json');
        const countries = JSON.parse(data);
        const country  = countries.find(c=>c.name===countryName);

        const litData = await fs.readFile('./data/country-literacy-rate.json');
        const countryLiteracies = JSON.parse(litData);

        const avgLiteracyRate = countryLiteracies
            .filter(c=> c.country==countryName && c.indicator!="Adult Literacy Rate")
            .map(cl=> cl.rate)
            .reduce((x,y)=> x+y)/2;

        country['AvgLitRate'] = avgLiteracyRate;

        // delete country.translations;
        // delete country.name;

        // console.log(country);
        return country;


    }catch (e) {
        console.log(e);
    }
}

