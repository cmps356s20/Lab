const unitConverter = require('../UnitConverter');
const expect = require('chai').expect;

describe('Test cases for the UnitConverter Class',  ()=> {
    it('1 kgToOunce should be 35.274',  ()=> {
        const val= unitConverter.kgToOunce(1); //35.274
        expect(val).to.equal(35.274)
    });
    it('1 kgToPound Should be 4.4092', ()=>{
        expect(unitConverter.kgToPound(1)).to.equal(2.2046)
    });

    
});