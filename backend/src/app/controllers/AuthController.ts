import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import User from '../models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import userView from '../views/user_view';

class AuthController {
    async authenticate(req: Request, res: Response) {
        const repository = getRepository(User);
        const { matricula, password } = req.body;
        
        const user = await repository.findOne({ where: { matricula } });
        
        if(!user) return res.sendStatus(401);
        
        const isValidePassword = await bcrypt.compare(password, user.password);
        
        if(!isValidePassword) return res.sendStatus(401);
        
        const token = jwt.sign({ id: user.id }, '09çweqqdqweQWEqw]}q', { expiresIn: '1d' });
        
        return res.json({
            user: userView.render(user),
            token
        })
    }
}

export default new AuthController();