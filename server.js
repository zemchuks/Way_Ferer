import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import cors from 'cors'

import router  from './server/routes'

dotenv.config()
const app = express()
app.use(express.json())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors());

app.use('/api/v1', router)

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to way_ferer API'})
})

// Invalid Routes
app.all('*', (req, res, next) => {
    res.status(404).json({ message: 'The Route you are requesting for does not exist' });
  });
  

const port = 8080
app.listen(port, () => {
    console.log(`Live at ${port}`)
})

export default app;