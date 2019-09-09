const WaterOverflow = require('./water-overflow');
const validateInput = require('./helper/validate-inputs');
let waterOverflow = new WaterOverflow(parseInt(process.env.MAX_NUM_ROWS));

let inputArgs = validateInput(process.argv);
console.log('Extracted input args = ', inputArgs);
let amount = waterOverflow.calculate(inputArgs.pouringVolume, inputArgs.pouringVolumeUnit, inputArgs.rowNum, inputArgs.columnNum);
console.log(`Water at (${inputArgs.rowNum}, ${inputArgs.columnNum}) glass = `, amount);
