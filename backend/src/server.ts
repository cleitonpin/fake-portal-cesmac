import express from 'express'
import routes from './routes'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use(routes)

app.listen(3333)