import { color } from '../models/colors/color';
import { colorHelper } from '../models/colors/helper';

export namespace colorService {
    export const getAllColors = (): Array<color> => {
        return colorHelper.getAllColors();
    }
    export const createColor = (colorNumber:String,paletteId:number)  => {
         return colorHelper.createColor(colorNumber,paletteId);
    }
}
