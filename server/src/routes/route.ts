import { Router } from "express";
import Controller from "../controlleurs/controlleurs";

const router = Router();

router.get('/', Controller.getTaches);
router.post('/', Controller.postTache);
router.put('/:id', Controller.updateTache);
router.delete('/:id', Controller.deleteTache);

export default router