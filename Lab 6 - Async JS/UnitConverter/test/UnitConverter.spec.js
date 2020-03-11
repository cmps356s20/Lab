const unitConverterSpec = require('../UnitConverter');
const expect = require('chai').expect;

describe('Test cases for the UnitConverter Class',  ()=> {

    //weight

    describe('Weight testing functions',  ()=> {
        it('1 kgToOunce should be 35.274',  ()=> {
            const val= unitConverterSpec.kgToOunce(1); //35.274
            if(val==35.274)
                return true;
            else
                return false;

             expect(val).to.equal(35.274)
        });
        it('1 kgToPound Should be 4.4092', ()=>{
            expect(unitConverterSpec.kgToPound(1)).to.equal(2.2046)
        });
    });

    describe('Distance/Length testing functions',  ()=> {
        //distance
        it('1 meterToInch  Should be 39.3701', () => {
            expect(unitConverterSpec.meterToInch(1)).to.equal(39.3701)
        });
        it('1 meterToFoot   Should be 6.5617 ', () => {
            expect(unitConverterSpec.meterToFoot(2)).to.equal(6.5617)
        });
    });

});