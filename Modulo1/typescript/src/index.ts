import express from 'express'
import { sendMessage } from './routes'

const app = express();

app.get('/', sendMessage)

app.listen(3333);