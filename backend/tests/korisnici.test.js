const Korisnik = require("../models/korisnik");
const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");
const pomocna = require("./zaTestiranje");
const api = supertest(app);
const bcrypt = require("bcryptjs");

beforeEach(async () => {
  await Korisnik.deleteMany({});

  const passHash = await bcrypt.hash("okviri", 10);
  const korisnik = new Korisnik({
    ime: "prviKorisnik",
    username: "testni",
    passHash,
    email: "prvi@mail.com",
  });
  await korisnik.save();
});

test("Provjerava postoji li korisnik", async () => {
  const sviKorisnici = await pomocna.korisniciBaze();
  const noviKorisnik = {
    username: "testni",
    ime: "noviKorisnik",
    pass: "okviri",
    email: "novi@mail.com",
  };
  const odg = await api
    .post("/api/users")
    .send(noviKorisnik)
    .expect(401)
    .expect("Content-Type", /application\/json/);
  expect(odg.body.error).toContain("Korisnik već postoji!");

  const korisniciKonacno = await pomocna.korisniciBaze();
  expect(korisniciKonacno).toHaveLength(sviKorisnici.length);
});

afterAll(() => {
  mongoose.connection.close();
});
