# Water-Overflow
## How to run:
**Format** 
The user can run the code in following command line format
```
node file_name.js POURING_VOLUME ROW_NUM COL_NUM
```

Example:
```
node demo-water-overflow.js 10L 3 2
```
means the user is inputting:
* 10L as pouring volume 
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