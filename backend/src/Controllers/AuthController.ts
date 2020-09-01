import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { IGetUserAuthInfoRequest } from '../utils/IGetUserAuthInfoRequest'
import pool from '../database/db'



export default class Auth {

    async verifyJWT(req: IGetUserAuthInfoRequest, res: Response, next: Function){
        const token = req.headers.authorization
        const SECRET = '2190832nu10d12jd.dsaduagw'
    
        if(!token) return res.status(401).json({ auth: false, message: 'No token provided' })
    
        jwt.verify(token, SECRET, (err, decoded) => {
            //console.log(err)
            if(err) return res.status(500).json({ auth:false , message: 'Failed to authentication' })
            
            //req.id = decoded.id
            next()
        })
    }

    async login(req: Request, res: Response){
        pool.connect()
        try {
                const { name, psw } = req.body
                const rows = await pool.query(`SELECT id, matricula, senha FROM aluno WHERE matricula='${name}'AND senha='${psw}'`)
                
                if(rows.rows[0]) {
                    const id = rows.rows[0][0]
                    var token = jwt.sign({ id }, '2190832nu10d12jd.dsaduagw', {
                        expiresIn: 300
                    })
                    return res.json({ auth: true, token: token, user: { name: name } })
                }
                return res.status(500).json({ message: 'Login inválido,' })
            } catch (err) {
                return console.log(err)
            } finally {
                await pool.end()
            }
            
    }
}

