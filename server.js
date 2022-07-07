const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use('/', require('./routes'))

app.listen(port, () => {
    console.log(`Example aa listening on port ${port}`)
})