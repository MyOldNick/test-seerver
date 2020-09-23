const express = require('express')
const app = express()
const cors = require('cors')
const {usersRoute} = require('./routes')
const connectToDB = require('./database')

app.use(cors())
app.use(express.json())

connectToDB()

app.use('/', usersRoute)


app.listen(5000, () => {
    console.log('server start')
})