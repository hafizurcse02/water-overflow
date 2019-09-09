# Water-Overflow
## How to Run
### 1. Install Dependencies
```
npm i
```
### 2. `cd` to `bin`
Go to the project folder and then `cd` to `bin`. Then open `demo.sh` in an editor. Set the necessary parameter to your desired values.
Example:
`demo.sh`
```
export GLASS_VOLUME_ML=250 # volume of each glass in millilitre
export MAX_NUM_ROWS=10 
INPUT_VOLUME=10
INPUT_VOLUME_UNIT=L
ROW_SOUGHT=9
COLUMN_SOUGHT=1
```
Here 
GLASS_VOLUME_ML -> `volume of each glass in millilitre` 

MAX_NUM_ROWS -> `depth of the glass stack` or `number of rows`

INPUT_VOLUME -> `input water volume`

INPUT_VOLUME_UNIT -> `unit of water volume`

ROW_SOUGHT -> `i-th row position of the glass water`

COLUMN_SOUGHT -> `j-th column of the glass water`

*Note:* The user can choose either litre('l' or 'L') or millilitre('ml' or 'ML') as unit of the input volume. 

### 3. Run the demo
```
sh demo.sh
```
For the above setting, it will generate:
```
inputArgs =  { pouringVolume: 10,
  pouringVolumeUnit: 'l',
  rowNum: 9,
  columnNum: 1 }
water at ith glass =  111.11111111111111
```
## Test
### 1. Install Test Runner
To run the tests, the `mocha` and `nyc` runner have to be installed in the machine. In the terminal, run:

```
npm install mocha -g
npm install nyc -g
```

### 2. Tests & Coverage
`cd` to `bin` folder in your terminal, and then execute:

```
sh test.sh
```

It will output similar to:

```

  18 passing (37ms)

--------------------------|----------|----------|----------|----------|-------------------|
File                      |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
--------------------------|----------|----------|----------|----------|-------------------|
All files                 |      100 |      100 |      100 |      100 |                   |
 src                      |      100 |      100 |      100 |      100 |                   |
  water-overflow.js       |      100 |      100 |      100 |      100 |                   |
 src/helper               |      100 |      100 |      100 |      100 |                   |
  validate-inputs.js      |      100 |      100 |      100 |      100 |                   |
  validation-functions.js |      100 |      100 |      100 |      100 |                   |
--------------------------|----------|----------|----------|----------|-------------------|
```

## Linting
In the terminal, run:
```
eslint ./
eslint ./ --fix
```
`eslint ./` finds the linting errors and `eslint ./ --fix` attempts to fix automatically.