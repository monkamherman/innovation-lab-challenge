import { Router, Request, Response } from "express";
import Controller from "../controlleurs/controlleurs";

const router = Router();

router.get('/', Controller.getTaches);
router.post('/', Controller.postTache);
router.put('/:id', Controller.updateTache);
router.delete('/:id', Controller.deleteTache);

router.get('/', (req: Request, res: Response) => Controller.getTaches(req, res));
router.post('/', (req: Request, res: Response) => Controller.postTache(req, res));
router.put('/:id', (req: Request, res: Response) => Controller.updateTache(req, res));
router.delete('/:id', (req: Request, res: Response) => Controller.deleteTache(req, res));export default router