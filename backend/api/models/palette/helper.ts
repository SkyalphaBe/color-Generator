import {palette} from "./palette";
import {database} from "../../config/database";

export namespace paletteHelper {
    export const getAllPalettes = (): Array<palette> => {
        return database.prepare('SELECT * FROM palette').all() as Array<palette>;
    }
    export const createPalette = (name:String) => {
            return database
                .prepare('INSERT INTO palette(name) VALUES(?)')
                .run([name]);
    }
}
