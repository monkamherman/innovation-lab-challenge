import { Router } from "express";
import Controller from "../controlleurs/controlleurs";

const router = Router();

user.post('/', async (req, res, next) => {
	try {
		await Controller.postTache(req, res, next);
	} catch (error) {
		next(error);
	}
});
router.post('/', Controller.postTache);
router.put('/:id', Controller.updateTache);
router.delete('/:id', Controller.deleteTache);

export default router