const inputKeys = ['pouringVolume', 'pouringVolumeUnit', 'rowNum', 'columnNum'];
const vFunctions = require('./validation-functions');

/**
 * Validate the user provided arguments
 * @param args: An array of arguments
 * @returns {JSON}
 */
let validateInputs = function(args) {
  let inputArgs = {};
  if (args.length < 6) {
    throw new Error('Please enter the required number of arguments');
  }
  for (let i = 2; i < args.length; i++) {
    inputArgs[inputKeys[i - 2]] = args[i];
  }
  inputArgs.pouringVolumeUnit = vFunctions.extractVolumeUnit(inputArgs.pouringVolumeUnit);
  inputArgs.pouringVolume = vFunctions.validateNFN('pouringVolume', inputArgs.pouringVolume);
  inputArgs.rowNum = vFunctions.validateNFN('rowNum', inputArgs.rowNum);
  inputArgs.columnNum = vFunctions.validateNFN('columnNum', inputArgs.columnNum);

  return inputArgs;
};

module.exports = validateInputs;
