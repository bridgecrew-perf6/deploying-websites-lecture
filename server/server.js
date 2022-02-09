const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json()) 
app.use(cors())

app.get('/' , (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

const port = process.env.PORT || 4000

app.listen(4000, () => console.log(`server running on 4000`))
