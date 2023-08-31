import { Request, Response} from "express";
import {colorService} from "../services/color";

const route = require('express').Router()

route.get('/',
    (req: Request, res: Response) => {
        const colors = colorService.getAllColors();
        res.send(colors);
    }
);

route.post('/create'
    ,
    (req: Request, res: Response) => {
        const {code,paletteId} = req.body;
        const id = colorService.createColor(code, paletteId);
        res.status(201).json({ id: id.lastInsertRowid });
    }
);

route.delete('/delete/:id',
    (req: Request, res: Response) => {
        const {id} = req.params;
        colorService.deleteColor(id);
        res.json('Color deleted')
    }
);

 export default route;
