const bcrypt = require("bcryptjs");
const Korisnik = require("../models/korisnik");
const korisniciRouter = require("express").Router();



korisniciRouter.get("/", async (req, res,next) => {
  
  const korisnici = await Korisnik.find({}).populate('kupnje',populate('car',{marka:1,model:1, cijena:1}),populate('tire',{marka:1,tip:1,cijena:1}),populate('rim',{tip:1,cijena:1}))
  res.json(korisnici);
});

korisniciRouter.get("/:username", async (req, res) => {
 
  const korisnik = await Korisnik.findOne({username: req.params.username})
  res.json(korisnik);
});

korisniciRouter.post("/", async (req, res) => {
  const podaci = req.body;



  const postojeciKorisnik = await Korisnik.findOne({ username: podaci.username });
  if (postojeciKorisnik) {
    return res.status(401).json({
      error: "Korisnik već postoji!"
    })
  }
  const runde=10
  const passHash=await bcrypt.hash(podaci.pass,runde)

  const korisnik = new Korisnik({
    username: podaci.username,
    ime: podaci.ime,
    email: podaci.email,
    passHash
  });
 
  const spremiKorisnika=await korisnik.save()
  res.json(spremiKorisnika)
});


module.exports = korisniciRouter;
