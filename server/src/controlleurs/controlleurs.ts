import { PrismaClient } from "@prisma/client";
import { Request, Response, NextFunction } from 'express';


const prisma = new PrismaClient();

const Controller = {
    postTache: async (req: Request, res: Response) =>  {
        try {
            const { tache } = req.body
            if(!tache) {
                return res.status(400).json({ error: 'tout les champs sont necessair' });
            }
            const item = await prisma.tache.findUnique({
                where: {
                    tache
                }
            })
            if(item) {
                return res.status(400).json({ error: 'la tache existe deja' });
            }
            const taches = await prisma.tache.create({
                data: {
                    tache
                    
                }
            })
            return res.status(201).json(tache);
            
        } catch (error) {
            res.status(500).json({ error });
        }

    },
    getTaches: async (req: Request, res: Response) => {
        try {
            const taches = await prisma.tache.findMany()
            return res.status(200).json(taches);
            
        } catch (error) {
            res.status(500).json({ error });
        }
    },
    deleteTache: async (req: Request, res: Response) => {
        try {
            const { id } = req.params
            const tache = await prisma.tache.delete({
                where: {
                    id
                }
            })
            return res.status(200).json(tache);
            
        } catch (error) {
            res.status(500).json({ error });
        }
    },
    updateTache: async (req: Request, res: Response) => {
        try {
            const { id } = req.params
            const { tache } = req.body
           
            const taches = await prisma.tache.update({
                where: {
                    id
                },
                data: {
                    tache
                }
            })
            return res.status(200).json(tache);
            
        } catch (error) {
            res.status(500).json({ error });
        }
    }
}

export default Controller