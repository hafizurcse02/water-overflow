const chai = require('chai');
let expect = chai.expect;

const validateInputs = require('../src/helper/validate-inputs');
describe('validate-inputs', () => {
    describe('validateInputs', () => {
        it('Throws an error on required arguments missing', () => {
            let args = ['C:\\path\\to\\node\\node.exe', 
                        'C:\\path\to\\code\\validate-inputs.js',
                        '500', 'ml', '3'];
            expect(function(){
                validateInputs(args);
            }).to.throw('Please enter the required number of arguments');
        });
        
        it('Gets the extracted input arguments as json', () => {
            let args = ['C:\\path\\to\\node\\node.exe', 
                        'C:\\path\to\\code\\validate-inputs.js',
                        '500', 'ml', '3', '2'];
            let res = validateInputs(args);
            let expectedRes = {
                rowNum: 3,
                columnNum: 2,
                pouringVolume: 500,
                pouringVolumeUnit: 'ml'
            };
            expect(res).to.deep.equal(expectedRes);                    
        });
    });
});
