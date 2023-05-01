import { palette } from '../models/palette/palette';
import { paletteHelper } from '../models/palette/helper';

export namespace paletteService {
    export const getAllPalettes = (): Array<palette> => {
        return paletteHelper.getAllPalettes();
    }
    export const createPalette = (nom:String) => {
        return paletteHelper.createPalette(nom);
    }
}
