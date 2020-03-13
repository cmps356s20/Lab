const getCountry = require('../countryRepo-async.js.');
const expect = require("chai").expect;

describe('Test the get country method', function () {
    it('should ',  async () => {
        const country  = await getCountry("Qatar");

        //check if you have an object
        expect(country).to.be.an("object");

        //you can check if you have the name of the country as qatar
        expect(country).to.be.have.property("name").to.equal("Qatar");

    });
});