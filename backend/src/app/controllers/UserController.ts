import { Request, Response } from 'express';
import { getRepository, getConnection } from 'typeorm';
import User from '../models/User';
import bcrypt from 'bcryptjs';

class UserController {
    index (req: Request, res: Response) {
        return res.json({ id: req.userId })
    }

    async create(req: Request, res: Response) {
        const repository = getRepository(User);
        const { matricula, password } = req.body;
        
        const userExists = await repository.findOne({ where: { matricula } });

        if (userExists) return res.sendStatus(409);

        const user = repository.create({ matricula, password });
        await repository.save(user);

        return res.json(user);
    }

    async delete(req: Request, res: Response) {
        const repository = getRepository(User);
        const { id } = req.params;
        
        try {
            const user =  await repository.findOne({ where: { id } });

            if (!user) return res.sendStatus(401);

            await repository.delete(user);

            return res.sendStatus(200);
        } catch {
            return res.sendStatus(500);
        }
    }
}

export default new UserController();