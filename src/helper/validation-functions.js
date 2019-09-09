const vFunctions = {
    'extractPouringVolume': null,
    'extractVolumeUnit': null,
    'validateNFN': null
  };
const allowedVolumeUnits = ['ml', 'l'];

/**
 * Validate if a value is NaN, float and negative
 * @param key: key of the input argument 
 * @param value: value of the input argument
 * @returns {NUMBER}: a positive integer
 */
vFunctions.validateNFN = function (key , value) {
    if (isNaN(parseInt(value))) {
        throw new Error(`${key} of the glass must be a number`);
    } else if (parseFloat(value) && parseFloat(value)%1 !== 0) {
        throw new Error(`${key} of the glass must not be an integer`);
    } else if (parseInt(value) < 0 ) {
        throw new Error(`${key} of the glass must not be negative`);
    } else {
        value = parseInt(value);
    }
    return value;
};

/**
 * Extracts the pouring volume unit
 * @param : input volume
 * @returns {STRING}: extracted unit of the pouring amount
 */

vFunctions.extractVolumeUnit = function(pouringVolume) {
    let pouringVolumeUnit;
    try {
        pouringVolumeUnit = pouringVolume.match(/([a-zA-Z ])/g).join("");
        pouringVolumeUnit = pouringVolumeUnit.toLowerCase();
    } catch(err) {
        throw err.message;
      }
    
    if (allowedVolumeUnits.indexOf(pouringVolumeUnit) < 0) {
        throw new Error('Pouring volume unit must be ml or l');
    }
    return pouringVolumeUnit;
};


/**
 * Extracts the pouring volume
 * @param : pouring input volume
 * @returns {NUMBER}: extracted volume of the pouring amount
 */
vFunctions.extractPouringVolume = function(pouringVolume) {
    let vol = parseFloat(pouringVolume);

    if (isNaN(vol)){
        throw new Error('Pouring volume must be a number');
    } else if (vol < 0) {
        throw new Error('Pouring volume must not be negative');
    }
    return vol;
};

module.exports = vFunctions;