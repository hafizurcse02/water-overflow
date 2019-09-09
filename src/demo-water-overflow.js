const WaterOverflow = require('./water-overflow');
let wf = new WaterOverflow(5, 5);
let amount = wf.calculate(1, 'l', 3);
console.log(amount);
