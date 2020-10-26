import express from 'express'
import UserController from './app/controllers/UserController';
import AuthController from './app/controllers/AuthController';
import authMiddleware from './app/middleware/authMiddleware';

const routes = express.Router()

routes
    .post('/users', UserController.create)
    .get('/users', authMiddleware, UserController.index)
    .delete('/users/:id', authMiddleware, UserController.delete)

    // AUTHENTICATE
    .post('/auth', AuthController.authenticate);


// routes.get('/', AuthController.verifyJWT)
// routes.post('/login', AuthController.login)

// routes.post('/logout', (req, res) => {
//     res.json({ auth: false, toke: null })
// })




export default routes;