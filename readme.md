The user is allowed to run in the following ways:
1. Shortened Form:
When the user keeps the default values of the config and provides only required input:
```
node process-args.js 10L 3 2
```
means the user is inputting:
* 10L as pouring volume 
* 3 as location of the glass at ith row 
* 2 as location of the glass at jth column

The code will get default config as:
```
    {
        TOTAL_NUM_ROWS: 5,
        GLASS_VOLUME : 250,
        GLASS_VOLUME_UNIT: "ml"
    }
```
Input json:

```
    {
        POURING_VOLUME: 10,
        POURING_VOLUME_UNIT: L,
        ROW_NUM: 3,
        COLUMN_NUM: 2
    }
    
```

Detailed Format
```
> str.match(/([a-zA-Z ])/g).join("");
'ML'
> '250ml'.match(/([a-zA-Z ])/g).join("");
'ml'

```

// let args = [ 'C:\\Program Files\\nodejs\\node.exe',
// 'E:\\dev\\challenges\\plexus\\src\\helper\\process-args.js', 5.5, 250, 'ml'];
// expect(function(){
//     validateInputs(args);
// }).to.throw('Number of rows cant be negative');

// let config = {};
    // if (args.length <= 5) { // use default
    //     config = require('./config');
    // } else if (args.length >= 5) { // use user provided parameters
    //     if (Number.isInteger(parseFloat(args[2])) === false ) {
    //         throw new Error('Number of rows cant be negative');
    //     } else {
    //         config.TOTAL_NUM_ROWS = parseInt(args[2]);
    //     }

    //     if (args[4].toLowerCase() !== 'ml') {
    //         throw new Error('Wrong unit for the glasses');
    //     } else {
    //         config.args[2].toLowerCase;
    //     }
    //     // config.NUM_ROWS = parseInt(args[2]);
    //     // config.EACH_GLASS_VOLUME = parseFloat(args[4]);
    // } else {
    //     throw "Invalid number of arguments";
    // }
    // return config;