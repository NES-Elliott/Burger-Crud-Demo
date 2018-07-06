const express = require('express')
const app = express()
// Since we will be using heroku, we need to tell it to get the heroku environment instead of port 3000, but it will use 3000 when not deployed to heroku.
const PORT = process.env.port || 3000;
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const models = require('./models')
const exphbs = require('express-handlebars')
app.engine('handlebars'. exphbs({
    defaultLayout: 'main'
}))
app.set('view engine', 'handlebars')

// This tells our app to access the public folder for display.
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended: false
}))
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))

const routes = require('./controllers/') // finish routes line
app. use('/', routes)
app.listen(PORT)
