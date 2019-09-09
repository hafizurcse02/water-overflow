const chai = require('chai');
let expect = chai.expect;
const WaterOverflow = require('../src/water-overflow');
describe('demo-water-over-flow', () => {
    let wf = new WaterOverflow(5);
    describe('convertLitre2Millilitre', () => {
        it('converts 5 litres to 5000 millilitres', () => {
            let pouringVolume = 5;
            let res = wf.convertLitre2Millilitre(pouringVolume);
            let expectedRes = 5000;
            expect(res).to.deep.equal(expectedRes);
        });
    });

    describe('calculate', () => {
        it('calculates the water volume in ith and jth column on pouring amount in litres', () => {
            let row = 3;
            let pouringVolume = 1;
            let pouringVolumeUnit = 'l';
            let res = wf.calculate(pouringVolume, pouringVolumeUnit, row);
            console.log('calculated vol = ', res);
            let expectedRes = 83.33333333333333;
            expect(res).to.deep.equal(expectedRes);
        });
    
        it('calculates the water volume in ith and jth column', () => {
            let row = 3;
            let pouringVolume = 1000;
            let pouringVolumeUnit = 'ml';
            let res = wf.calculate(pouringVolume, pouringVolumeUnit, row);
            let expectedRes = 83.33333333333333;
            expect(res).to.deep.equal(expectedRes);
        });

        it('calculates the water volume in ith and jth column', () => {
            let row = 3;
            let pouringVolume = 3000;
            let pouringVolumeUnit = 'ml';
            let res = wf.calculate(pouringVolume, pouringVolumeUnit, row);
            let expectedRes = 250;
            expect(res).to.deep.equal(expectedRes);
        });
    });
});