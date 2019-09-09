const vFunctions = {
    'extractVolumeUnit': null,
    'validateNFN': null
  };
const allowedVolumeUnits = ['ml', 'l'];

/**
 * Validate if a value is NaN, float and negative
 * @param key: key of the input argument 
 * @param value: value of the input argument
 * @returns {NUMBER}: a positive number
 */
vFunctions.validateNFN = function (key , value) {
    if (isNaN(parseInt(value))) {
        throw new Error(`${key} of the glass must be a number`);
    } else if (parseFloat(value) && parseFloat(value)%1 !== 0 && key !== 'pouringVolume') {
        throw new Error(`${key} of the glass must be an integer`);
    } else if (parseFloat(value) < 0 ) {
        throw new Error(`${key} of the glass must not be negative`);
    } else {
        value = parseFloat(value);
    }
    return value;
};

/**
 * Extracts the pouring volume unit
 * @param : input volume
 * @returns {STRING}: extracted unit of the pouring amount
 */
vFunctions.extractVolumeUnit = function(pouringVolumeUnit) {
    let unit = pouringVolumeUnit.toLowerCase();
    if (allowedVolumeUnits.indexOf(unit) < 0) {
        throw new Error('Pouring volume unit must be ml or l');
    }
    return unit;
};

module.exports = vFunctions;