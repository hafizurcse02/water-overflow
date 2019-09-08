const WaterOverflow = require('./water-overflow');
const {validateInputs} = require('./helper/validate-inputs');
let res = validateInputs(process.argv);
console.log(res);

console.log(config, process.argv);
// let wf = new WaterOverflow(10);
// let amount = wf.calculate(10, 3);
// console.log(amount);