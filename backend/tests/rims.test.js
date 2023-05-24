const Rim = require("../models/naplatak");
const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");
const pomocna = require("./zaTestiranje");
const api = supertest(app);

beforeEach(async () => {
  await Rim.deleteMany({});
  let objektRim = new Rim(pomocna.rims[0]);
  await objektRim.save();
  objektRim = new Rim(pomocna.rims[1]);
  await objektRim.save();
  objektRim = new Rim(pomocna.rims[2]);
  await objektRim.save();
  objektRim = new Rim(pomocna.rims[3]);
  await objektRim.save();
});

test("Odbacivanje naplatka ako nisu uneseni svi podaci", async () => {
  const noviNaplatak = {
    slika: "",
    tip: "Aluminijski",
    cijena: 0,
  };
  await api
    .post("/api/rims")
    .send(noviNaplatak)
    .expect(200)
    .expect("Content-Type", /application\/json/);
  const konacnoNaplatci = await pomocna.naplatciBaze();
  expect(konacnoNaplatci).not.toContain(noviNaplatak);
});

test("Brisanje naplatka", async () => {
  const sviNaplatci = await pomocna.naplatciBaze();
  const naplatakBrisanje = sviNaplatci[0];
  const odg = await api.delete(`/api/rims/${naplatakBrisanje.id}`).expect(200);
  const konacnoNaplatci = await pomocna.naplatciBaze();
  expect(konacnoNaplatci).toHaveLength(sviNaplatci.length - 1);

  const id = konacnoNaplatci.map((n) => n.id);
  expect(id).not.toContain(naplatakBrisanje.id);
});

afterAll(() => {
  mongoose.connection.close();
});
