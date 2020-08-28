import express, { Request, Response } from 'express'
import Auth from './Controllers/AuthController';
const routes = express.Router()

const AuthController = new Auth()


routes.get('/', AuthController.verifyJWT, (req, res, next) => {
    console.log("Retornou todos clientes!");
    res.json([{id:1,nome:'luiz'}]);
})

routes.post('/logout', (req, res) => {
    res.json({ auth: false, toke: null })
})

routes.post('/login', AuthController.login)



export default routes;