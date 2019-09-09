const WaterOverflow = require('./water-overflow');
const validateInput = require('./helper/validate-inputs');
let waterOverflow = new WaterOverflow(parseInt(process.env.MAX_NUM_ROWS));

// let inputVolume = parseFloat(process.env.INPUT_VOLUME);
// let inputVolumeUnit = process.env.INPUT_VOLUME_UNIT;
// let rowNumber = parseInt(process.env.ROW_SOUGHT);

let inputArgs = validateInput(process.argv);
console.log('inputArgs = ', inputArgs);
let amount = waterOverflow.calculate(inputArgs.pouringVolume, inputArgs.pouringVolumeUnit, inputArgs.rowNum, inputArgs.columnNum);
console.log('water at ith glass = ', amount);
