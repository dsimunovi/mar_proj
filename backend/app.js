const express = require("express");
const cors = require("cors");
const app = express();
const autiRouter = require("./controllers/auti");
const gumeRouter = require("./controllers/gume");
const naplatciRouter = require("./controllers/naplatci");
const korisniciRouter = require("./controllers/korisnici");
const loginRouter = require("./controllers/login");
const middleware = require("./utils/middleware");
const config = require("./utils/config");
const logger = require("./utils/logger");
const kupnjaRouter = require("./controllers/kupnja");
const mongoose=require('mongoose')

logger.info('Spajam se na', config.url)
mongoose.connect(config.url)
 .then(result => {
 logger.info("Spojeni smo na bazu");
 }).catch(error => {
 logger.greska("Greška pri spajanju", error.message);
 })


app.use(express.json());
app.use(cors());
app.use("/api/cars", autiRouter);
app.use("/api/tires", gumeRouter);
app.use("/api/rims", naplatciRouter);
app.use("/api/users", korisniciRouter);
app.use("/api/login", loginRouter);
app.use("/api/kupnje",kupnjaRouter)


app.use(middleware.nepoznataRuta);
app.use(middleware.errorHandler);
app.use(middleware.zahtjevInfo);

module.exports = app;
