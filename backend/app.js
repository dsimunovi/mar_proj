const express = require('express')
const cors=require('cors');
const app=express();
const autiRouter=require('./controllers/auti');
const gumeRouter = require('./controllers/gume');
const naplatciRouter=require('./controllers/naplatci')
const korisniciRouter=require('./controllers/korisnici')
const loginRouter=require('./controllers/login')
const middleware=require('./utils/middleware')
const config=require('./utils/config')
const logger = require('./utils/logger')
const mongoose = require('mongoose')
const bodyparser=require('body-parser')



app.use(express.json());
app.use(cors())
app.use('/api/cars', autiRouter)
app.use('/api/tires',gumeRouter)
app.use('/api/rims',naplatciRouter)
app.use('/api/users',korisniciRouter)
app.use('/api/login',loginRouter)

app.use(middleware.nepoznataRuta)
app.use(middleware.errorHandler)
app.use(middleware.zahtjevInfo)
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json())


module.exports=app