const chai = require('chai');
let expect = chai.expect;
const vFunctions = require('./../src/helper/validation-functions');
describe('validation-functions', () => {
    describe('extractVolumeUnit', () => {
        let extractVolumeUnit = vFunctions.extractVolumeUnit;
        it('Accepts uppercase (L) as a unit to glass volume', () => {
            let pouringVolumeUnit = 'L';
            let expectedUnit = 'l';
            let unit = extractVolumeUnit(pouringVolumeUnit);
            expect(unit).to.deep.equal(expectedUnit);
        });
    
        it('Accepts lowercase (l) as a unit to glass volume', () => {
            let pouringVolumeUnit = 'l';
            let expectedUnit = 'l';
            let unit = extractVolumeUnit(pouringVolumeUnit);
            expect(unit).to.deep.equal(expectedUnit);
        });
    
        it('Accepts uppercase (ML) as a unit to glass volume', () => {
            let pouringVolumeUnit = 'ML';
            let expectedUnit = 'ml';
            let unit = extractVolumeUnit(pouringVolumeUnit);
            expect(unit).to.deep.equal(expectedUnit);
        });
    
        it('Accepts lowercase (ml) as a unit to glass volume', () => {
            let pouringVolumeUnit = 'ml';
            let expectedUnit = 'ml';
            let unit = extractVolumeUnit(pouringVolumeUnit);
            expect(unit).to.deep.equal(expectedUnit);
        });
    
        it('Throws an error when the user enters other than ml or l as a unit to glass volume', () => {
            let pouringVolumeUnit = 'BL';
            expect(function(){
                extractVolumeUnit(pouringVolumeUnit);
            }).to.throw('Pouring volume unit must be ml or l');
        });
    });
    
    describe('validateNFN', () => {
        let validateNFN = vFunctions.validateNFN;
        it('Throws an error on row number of the glass as Not a Number (NaN)', () => {
            let key = 'rowNum';
            let value = 'xyz';
            expect(function(){
                validateNFN(key, value);
            }).to.throw(`${key} of the glass must be a number`);
        });
    
        it('Throws an error on row number of the glass as negative', () => {
            let key = 'rowNum';
            let value = '-5';
            expect(function(){
                validateNFN(key, value);
            }).to.throw(`${key} of the glass must not be negative`);
        });
    
        it('Throws an error on row number of the glass as float', () => {
            let key = 'rowNum';
            let value = '5.5';
            expect(function(){
                validateNFN(key, value);
            }).to.throw(`${key} of the glass must be an integer`);
        });
    
        it('Gets the row value on positive integer', () => {
            let key = 'rowNum';
            let value = '5';
            let expectedRes = 5;
            let res = validateNFN(key, value);
            expect(res).to.deep.equal(expectedRes);
        });
    
        it('Throws an error on column number of the glass as Not a Number (NaN)', () => {
            let key = 'columnNum';
            let value = 'xyz';
            expect(function(){
                validateNFN(key, value);
            }).to.throw(`${key} of the glass must be a number`);
        });
    
        it('Extracts the float value of pouring volume', () => {
            let key = 'pouringVolume';
            let value = '5.50';
            let res = validateNFN(key, value);
            let expectedRes = 5.5;
            expect(res).to.deep.equal(expectedRes);
        });
    });
});