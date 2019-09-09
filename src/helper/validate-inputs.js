const inputKeys = ['pouringVolume', 'rowNum', 'columnNum'];
const vFunctions = require('./validation-functions');

/**
 * Validate the user provided arguments
 * @param args: An array of arguments 
 * @returns {JSON}
 */
let validateInputs = function(args) {
    let inputArgs = {};
    if (args.length < 5) {
        throw "Please enter the required number of arguments"
    }
    for (let i = 2; i < args.length; i++) {
        inputArgs[inputKeys[i-2]] = args[i];
    }
    inputArgs.pouringVolumeUnit = vFunctions.extractVolumeUnit(inputArgs.pouringVolume)
    inputArgs.pouringVolume = vFunctions.extractPouringVolume(inputArgs.pouringVolume);
    inputArgs.rowNum = vFunctions.validateNFN('rowNum', inputArgs.rowNum);
    inputArgs.columnNum = vFunctions.validateNFN('columnNum', inputArgs.columnNum);

    return inputArgs;
};

module.exports = validateInputs;