const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const loginRouter = require("express").Router();
const Korisnik = require("../models/korisnik");

loginRouter.post("/", async (req, res) => {
  const podaci = req.body;
  console.log(podaci)

  const korisnik = await Korisnik.findOne({ username: podaci.username });
  console.log(korisnik)
  const passwordOK =
    korisnik === null
      ? false
      : await bcrypt.compare(podaci.pass, korisnik.passHash);

  if (!(korisnik && passwordOK)) {
    return res.status(401).json({
      error: "Neispravno korisničko ime ili lozinka",
    });
  }

  const userToken = {
    username: korisnik.username,
    id: korisnik.id,
  };
  const token = jwt.sign(userToken, process.env.SECRET);
  res.status(200).send({
    token,
    username: korisnik.username,
    ime: korisnik.ime,
    admin: korisnik.admin,
  });
});

loginRouter.delete('/',async(req,res)=>{
  
})

module.exports = loginRouter;
