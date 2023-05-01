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
        res.send(id.lastInsertRowid)
    }
);

export default route;
