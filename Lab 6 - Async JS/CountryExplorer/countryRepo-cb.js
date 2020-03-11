//we will learn how to read file using asynchronous programming
//call back

const fs = require('fs');

function getCountries() {
    fs.readFile('./data/countrie.json', (err, data)=>{
        if(err){
            console.log(err);
        }
        else{
            const countries = JSON.parse(data);
            console.log(countries);
        }
    });
}

getCountries();