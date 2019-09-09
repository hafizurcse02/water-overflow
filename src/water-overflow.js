const glassVolume = parseFloat(process.env.GLASS_VOLUME_ML); // ml
const ONE_LITRE = 1000 // ml

class WaterOverflow {
    constructor(rows) {
        this.rows = rows;
    }

    convertLitre2Millilitre(litres) {
        return litres * ONE_LITRE;
    }

    calculate(pouringVolume, pouringVolumeUnit, rowNum) {
        let pouredML = (pouringVolumeUnit === 'l')? this.convertLitre2Millilitre(pouringVolume) : pouringVolume
        let rowPos = rowNum - 1;
        let glassArr = new Array(this.rows).fill(0);
        let volAtIthRow = 0;
        for (let i = 0; i < this.rows; i++) {
            volAtIthRow = (i+1) * glassVolume;
            if (pouredML >= volAtIthRow) {
                glassArr[i] = volAtIthRow;
                pouredML = pouredML - volAtIthRow;
                if (i === rowPos) {
                    break;
                }
                
            } else {
                glassArr[i] = pouredML;
            }
        }
        return glassArr[rowPos]/(rowPos+1);
    }
};

module.exports = WaterOverflow;
