const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const port = process.env.PORT || 5000

// middleware 
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello Doctor Portal!')
})

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
})