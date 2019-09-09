# Water-Overflow
## How to run:

**Syntax**:

The user can run the code in following command line format
```
node file_name.js POURING_VOLUME ROW_NUM COL_NUM
```

Example 1:

```
node demo-water-overflow.js 10L 3 2
```
means the user is inputting:
* 10L: 10 litres as pouring volume 
* 3 as location of the glass at ith row 
* 2 as location of the glass at jth column

The code will extract the user supplied arguments as:
```
    {
        rowNum: 3,
        columnNum: 2,
        pouringVolume : 250,
        pouringVolumeUnit: "ml"
    }
```

Example 2:

```
```
node demo-water-overflow.js 1000ML 3 2
```
means the user is inputting:
* 1000ML: 1000 millilitres as pouring volume 
* 3 as location of the glass at ith row 
* 2 as location of the glass at jth column
```

The code will extract the user supplied arguments as:
```
    {
        rowNum: 3,
        columnNum: 2,
        pouringVolume : 1000,
        pouringVolumeUnit: "ml"
    }
```
## Test
### Install Test Runner
To run the tests, the `mocha` and `nyc` runner have to be installed in the machine. In the terminal, run:

```
npm install mocha -g
npm install nyc -g
```

### Run Tests
Run all tests recursively.
```
npm run test
```

### Test Coverage
```
npm run coverage
```

## Linting
In the terminal, run:
```
eslint ./
eslint ./ --fix
```
`eslint ./` finds the linting errors and `eslint ./ --fix` attempts to fix automatically.