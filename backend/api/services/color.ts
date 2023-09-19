import {color} from '../models/colors/color';
import {colorHelper} from '../models/colors/helper';

export namespace colorService {
    export const getAllColors = (): Array<color> => {
        return colorHelper.getAllColors();
    }
    export const createColor = (code: String, paletteId: number) => {
        return colorHelper.createColor(code, paletteId);
    }

    export const deleteColor = (id: string) => {
        return colorHelper.deleteColor(id);
    }

    export const getColorsByPaletteId = (paletteId: number): Array<color> => {
        return colorHelper.getColorsByPaletteId(paletteId);
    }

    export const getColorById = (id: number): color => {
        return colorHelper.getColorById(id);
    }
}
