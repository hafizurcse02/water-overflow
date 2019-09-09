# Water-Overflow
## Considerations
The number of glasses in each row is equal to the row number. For example, row number 1 (i.e., 0-th position in array) has only 1 glass, row 2 has 2 glasses and so on. Since the glasses are equal size (e.g. 250ml), each and every glass in a specific row will contain equal amount of water. That means, for row 3, seeking water volume at column j is same as seeking water volume at column j+2.

In summerry, we make the following considerations:
* each glass in the stack is of equal size and configurable
* since water is evenly distributed amount the glasses, seeking water volume in (i,j) location is same as seeking water volume of all glasses at i-th row divided by the total number of glasses in the same row. 
* while seeking water volume of (i,j)th glass, j-coordinate is not necessary hence it will not be used.

## How to Run
### Step 1: Install dependencies
In the project folder, open a terminal and run:
```
npm i
```
### Step 2: `cd` to `bin`
Go to the project folder and then `cd` to `bin`. Then open `demo.sh` in an editor. Set the necessary parameter to the desired values for evaluating the solution.
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

*Note:* The user can choose either litre('l' or 'L') or millilitre('ml' or 'ML') as unit of the input volume. That means, solution accepts input volume such as 10 L or 10000 ml. It also accepts float number as volume (e.g., 5.5 L, 1250.5 ML).

### Step: Run the demo
```
sh demo.sh
```
For the above setting, it will generate:
```
inputArgs =  { pouringVolume: 10,
  pouringVolumeUnit: 'l',
  rowNum: 9,
  columnNum: 1 }
water at (9, 1) glass =  111.11111111111111
```
## Test
### 1. Install Test Runner
To run the tests, the `mocha` and `nyc` runner have to be installed in the machine in `global` mode. In the terminal, run:

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
(some lines are omitted)
...
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

## Production Ready Suggestions
    * The solution can be prepared as a AWS Lambda function
    * The Lambda function will have one API endpint (in an API Gateway) and will accept a JSON object in a HTTP POST
    * The Lambda will calculate the water volume of (i,j) glass and sends the response

## Deployment Suggestions
The proposed Lambda can be deployed in AWS infrastructure using either of the followings:
    1. [AWS Serverless Application Model (SAM) Template](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-template-basics.html)
    2. [Serverless framework](https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjw_N2L6MTkAhXPgHAKHQHxC-8YABAAGgJzYg&ohost=www.google.com&cid=CAESEeD2hELyw-ln42kWo_GYXQfK&sig=AOD64_2Lx6erIve8moDUdvO8sAraVl7x-g&q=&ved=2ahUKEwi86daL6MTkAhXEbSsKHd4AD-IQ0Qx6BAgrEAE&adurl=)
