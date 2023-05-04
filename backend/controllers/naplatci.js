const naplatciRouter = require("express").Router();
const Naplatak = require("../models/naplatak");

naplatciRouter.get("/", async (req, res) => {
  const naplatci = await Naplatak.find({});
  res.json(naplatci);
});

naplatciRouter.get("/:id", async (req, res) => {
  const naplatak = await Naplatak.findById(req.params.id);
  res.json(naplatak);
});

naplatciRouter.delete("/:id", async (req, res) => {
  await Naplatak.findByIdAndRemove(req.params.id);
  res.json(204).end();
});
naplatciRouter.post("/", async (req, res) => {
  const podatak = req.body;

  const noviNaplatak = new Naplatak({
    slika: podatak.slika,
    tip: podatak.tip,
    cijena: podatak.cijena,
  });
  const spremiNaplatak = await noviNaplatak.save();
  res.json(spremiNaplatak);
});

module.exports = naplatciRouter;
