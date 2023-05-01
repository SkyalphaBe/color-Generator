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
        const {colorNumber,paletteId} = req.body;
        const id = colorService.createColor(colorNumber, paletteId);
        res.send(id.lastInsertRowid)
    }
);

 export default route;
