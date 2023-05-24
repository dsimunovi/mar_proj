const Auto = require("../models/auto");
const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");
const pomocna = require("./zaTestiranje");
const api = supertest(app);

beforeEach(async () => {
  await Auto.deleteMany({});
  let objektAuto = new Auto(pomocna.cars[0]);
  await objektAuto.save();
  objektAuto = new Auto(pomocna.cars[1]);
  await objektAuto.save();
  objektAuto = new Auto(pomocna.cars[2]);
  await objektAuto.save();
  objektAuto = new Auto(pomocna.cars[3]);
  await objektAuto.save();
});

test("Promjene na autu (gume, naplatci, boja, prodano", async () => {
  const sviAuti = await pomocna.autaBaze();
  const autoZaZamjenuGume = sviAuti[1];
  const izmjenaAuta = {
    naplatci: "644ed787d101e3cd74e927cc",
    gume: "64412da0b6df7839f2ffa616",
    boja: "#63a5b3",
    prodano: true,
  };
  await api
    .put(`/api/cars/${autoZaZamjenuGume.id}`)
    .send(izmjenaAuta)
    .expect(200)
    .expect("Content-Type", /application\/json/);
  const autiKonacno = await pomocna.autaBaze();
  const boja = autiKonacno.map((a) => a.boja);
  const gume = autiKonacno.map((a) => a.gume);
  const naplatci = autiKonacno.map((a) => a.naplatci);
  const prodano = autiKonacno.map((a) => a.prodano);
  expect(boja).toContain("#63a5b3");
  expect(gume[1].toString()).toContain("64412da0b6df7839f2ffa616");
  expect(naplatci[1].toString()).toContain("644ed787d101e3cd74e927cc");
  expect(prodano).toContain(true);
});

afterAll(() => {
  mongoose.connection.close();
});
