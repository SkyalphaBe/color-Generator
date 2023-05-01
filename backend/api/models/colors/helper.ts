import {color} from './color';
import { database } from '../../config/database';

export namespace colorHelper {
    export const getAllColors = (): Array<color> => {
        return database.prepare('SELECT * FROM colors').all() as Array<color>;
    }
    export const createColor = (colorNumber:String,paletteId:number) => {
            return database
                .prepare('INSERT INTO color(colorNumber,paletteId) VALUES(?,?)')
                .run([colorNumber,paletteId]);
    }
}
