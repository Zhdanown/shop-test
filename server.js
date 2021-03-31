const express = require('express')
const app = express();
const path = require('path')

const buildPath = path.join(__dirname, 'public')

app.use(express.static(buildPath))

const PORT = process.env.PORT || 3000;

app.get("*", (req, res) => {
    res.sendFile(path.join(buildPath, 'index.html'))
})

app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`)
})