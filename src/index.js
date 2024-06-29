const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    console.log("ENTROU AQUI")
    res.send("HELLO WORD")
})

app.listen(PORT, () => {
    console.log(`App online na porta ${PORT}`)
})