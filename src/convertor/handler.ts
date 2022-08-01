
interface Convertor {
    convert(baseUnit: string, targetUnit: string, value: number): number
}

interface Distance {
    unit: string;
    value: number;
}

interface DistanceConversion {
    distance: Distance;
    convert_to: string
}


export default class ConvertorHandler {
    private convertor: Convertor;

    constructor(convertor: Convertor) {
        this.convertor = convertor;
    }

    convert(data: DistanceConversion): Distance {
        let result = this.convertor.convert(data.distance.unit, data.convert_to, data.distance.value)
        return {
            unit: data.convert_to,
            value: result
        };
    }
}