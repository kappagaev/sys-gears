
// key is the unit, value is the SI equivalent mm
interface ConvertionTypes {
    [key: string]: number
}

class Converter {
    private types: ConvertionTypes = {
        'in': 25.4,
        'ft': 304.8,
        'cm': 10,
    }
    constructor(types: ConvertionTypes = {}) {
        this.types = { ...this.types, ...types }
    }

    convert(baseUnit: string, targetUnit: string, value: number): number {
        return value * this.types[baseUnit] / this.types[targetUnit]
    }
}

export default Converter;