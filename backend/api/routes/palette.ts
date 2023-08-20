import { Request, Response } from "express";
import {paletteService} from "../services/palette";

const route = require('express').Router();

route.get('/',
    (req: Request, res: Response) => {
        const palettes = paletteService.getAllPalettes();
        res.send(palettes);
    }
);

route.post('/create'
    ,
    (req: Request, res: Response) => {
        const {name} = req.body;
        const id = paletteService.createPalette(name);
        res.status(201).json({ id: id.lastInsertRowid });
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
