const bcrypt = require("bcryptjs");
const Korisnik = require("../models/korisnik");
const korisniciRouter = require("express").Router();

const dohvatiToken = (req) => {
  const auth = req.get('Authorization')
  if (auth && auth.toLowerCase().startsWith('bearer')){
      return auth.substring(7)
  }
  return null
}

korisniciRouter.get("/", async (req, res) => {
  const token = dohvatiToken(req)
  const dekToken = jwt.verify(token, process.env.SECRET)
  if (!token || !dekToken.id) {
      return res.status(401).json({ error: "Neispravni token" })
  }
  const korisnici = await Korisnik.find({})
  res.json(korisnici);
});

korisniciRouter.get("/:username", async (req, res) => {
  const korisnik = await Korisnik.findOne({username: req.params.username})
  res.json(korisnik);
});

korisniciRouter.post("/", async (req, res) => {
  const { username, ime, email, passHash, admin } = req.body;

  if (!username || !email || !ime || !passHash) {
     
    return res.status(400).json({
      error: "Unesite sve podatke"
    })
  }

  const postojeciKorisnik = await Korisnik.findOne({ username });
  if (postojeciKorisnik) {
    return res.status(401).json({
      error: "Korisnik već postoji!"
    })
  }
  

  const korisnik = Korisnik.create({
    username: username,
    ime: ime,
    email: email,
    passHash: passHash,
    admin: admin,
  });
  if (korisnik) {
    res.status(201).json({
      username: korisnik.username,
      ime: korisnik.ime,
      email: korisnik.email,
    });
  } else {
    res.status(400);
    throw new Error("Greška pri registraciji korisnika");
  }
});

module.exports = korisniciRouter;
