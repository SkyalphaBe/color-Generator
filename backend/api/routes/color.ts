import Router, {Request, Response} from "express";
import {colorService} from "../services/color";

const route = Router();

route.get('/',
    (req: Request, res: Response) => {
        const colors = colorService.getAllColors();
        res.send(colors);
    }
);

route.post('/create',
    (req: Request, res: Response) => {
        const {code, paletteId} = req.body;
        const id = colorService.createColor(code, paletteId);
        const color = colorService.getColorById(id.lastInsertRowid as number);
        res.status(201).json(color);
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
