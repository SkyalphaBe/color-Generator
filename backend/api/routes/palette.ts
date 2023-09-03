import {Request, Response} from "express";
import {paletteService} from "../services/palette";
import {colorService} from "../services/color";

const route = require('express').Router();

route.get('/',
    (req: Request, res: Response) => {
        const palettes = paletteService.getAllPalettes();
        for (let palette of palettes) {
            palette.colors = colorService.getColorsByPaletteId(palette.id);
        }
        res.send(palettes);
    }
);

route.post('/create'
    ,
    (req: Request, res: Response) => {
        const {name} = req.body;
        const id = paletteService.createPalette(name);
        const newPalette = paletteService.getPaletteById(id.lastInsertRowid as number);
        newPalette.colors = [];
        res.status(201).json(newPalette);
    }
);

route.delete('/delete/:id',
    (req: Request, res: Response) => {
        const {id} = req.params;
        paletteService.deletePalette(id);
        res.json('Palette deleted')
    }
);

export default route;
