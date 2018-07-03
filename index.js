'use strict'

const express = require('express')
const path = require('path')

const app = express()

//require routes
const home = require('./routes/home')
app.use('/', home)

//view engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.listen(3000, () => {
	console.log('listening no port 3000')
})