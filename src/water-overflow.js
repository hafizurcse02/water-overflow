const glassVolume = 250; // ml
const ONE_LITRE = 1000; // ml

class WaterOverflow {
  constructor(rows) {
    this.rows = rows;
  }

  convertLitre2Millilitre(litres) {
    return litres * ONE_LITRE;
  }

  calculate(pouringVolume, pouringVolumeUnit, rowNum) {
    if (pouringVolumeUnit === 'l') {
      pouringVolume = this.convertLitre2Millilitre(pouringVolume);
    }
    let glassArr = new Array(this.rows).fill(0);
    let volAtIthRow = 0;
    for (let i = 0; i < this.rows; i++) {
      volAtIthRow = (i + 1) * glassVolume;
      if (pouringVolume >= volAtIthRow) {
        glassArr[i] = volAtIthRow;
        pouringVolume = pouringVolume - volAtIthRow;
        if (i === rowNum - 1) {
          break;
        }
      } else {
        glassArr[i] = pouringVolume;
      }
    }
    return (glassArr[rowNum - 1] / (rowNum));
  }
}

module.exports = WaterOverflow;
