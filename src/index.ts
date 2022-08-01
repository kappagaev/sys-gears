import Converter from "./convertor/convertor";
import ConvertorHandler from "./convertor/handler";

let conv = new Converter();

let converterHadler = new ConvertorHandler(conv);

console.log(converterHadler.convert(
    {
        distance: {
            unit: 'inn',
            value: 1
        },
        convert_to: 'ft'
    }
));

