const autiRouter = require("express").Router();
const Auto = require("../models/auto");
const Korisnik = require("../models/korisnik");

const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

// const dohvatiToken = (req) => {
//   const auth = req.get("authorization");
//   if (auth && auth.toLowerCase().startsWith("bearer")) {
//     return auth.substring(7);
//   }
//   return null;
// };

autiRouter.get("/", async (req, res) => {
  const auti = await Auto.find({})
  res.json(auti);
});

autiRouter.get("/:id", async (req, res) => {
  const auto = await Auto.findById(req.params.id).populate("korisnik", {
    username: 1,
    ime: 1,
  });
  res.json(auto);
});

autiRouter.delete("/:id", async (req, res) => {
  await Auto.findByIdAndRemove(req.params.id);
  res.json(204).end();
});

autiRouter.put("/:id", async (req, res) => {
  const podatak = req.body;
  const id = req.params.id;
  


  const auto = {
    boja: podatak.boja,
    gume: podatak.gume,
    naplatci: podatak.naplatci,
    prodano:podatak.prodano
  };
  const updateCar = await Auto.findByIdAndUpdate(id, auto);

  
  res.json(updateCar);
});

autiRouter.post("/", async (req, res) => {
  const podatak = req.body;

  const noviAuto = new Auto({
    slika: podatak.slika,
    marka: podatak.marka,
    model: podatak.model,
    godiste: podatak.godiste,
    kilometri: podatak.kilometri,
    vrstaMotora: podatak.vrstaMotora,
    snagaMotora: podatak.snagaMotora,
    mjenjac: podatak.mjenjac,
    boja: podatak.boja,
    cijena: podatak.cijena,
    gume: podatak.gume,
    naplatci: podatak.naplatci,
  });
  const spremiAuto = await noviAuto.save();
  res.json(spremiAuto);
});

module.exports = autiRouter;
