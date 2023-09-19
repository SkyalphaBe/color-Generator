import {color} from './color';
import {database} from '../../config/database';

export namespace colorHelper {
    export const getAllColors = (): Array<color> => {
        return database.prepare('SELECT * FROM colors').all() as Array<color>;
    }
    export const createColor = (code: String, paletteId: number) => {
        return database
            .prepare('INSERT INTO colors(code,paletteId) VALUES(?,?)')
            .run([code, paletteId]);
    }

    export const deleteColor = (id: string) => {
        return database
            .prepare('DELETE FROM colors WHERE id = ?')
            .run([id]);
    }

    export const getColorsByPaletteId = (paletteId: number): Array<color> => {
        return database.prepare('SELECT * FROM colors WHERE paletteId = ?').all([paletteId]) as Array<color>;
    }

    export const getColorById = (id: number): color => {
        return database.prepare('SELECT * FROM colors WHERE id = ?').get([id]) as color;
    }
}
