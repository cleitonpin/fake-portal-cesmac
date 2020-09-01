import express, { Request, Response } from 'express'
import Auth from './Controllers/AuthController';
const routes = express.Router()

const AuthController = new Auth()


routes.get('/', AuthController.verifyJWT)
routes.post('/login', AuthController.login)

routes.post('/logout', (req, res) => {
    res.json({ auth: false, toke: null })
})




export default routes;