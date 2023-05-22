const mongoose = require("mongoose");

const password = process.env.ATLAS_PASS;
const dbname = "auti-api";
const url = `mongodb+srv://marija:${password}@cluster0.qsuk5.mongodb.net/${dbname}?retryWrites=true&w=majority`;

const autoSchema = new mongoose.Schema({
  slika: {
    type: String,
  },
  marka: {
    type: String,
  },
  model: {
    type: String,
  },
  godiste: {
    type: Number,
  },
  kilometri: {
    type: Number,
  },
  vrstaMotora: {
    type: String,
  },
  snagaMotora: {
    type: Number,
  },
  mjenjac: {
    type: String,
  },
  boja: {
    type: String,
  },
  cijena: {
    type: Number,
  },
  prodano: {
    type: Boolean,
    default: false,
  },
  gume: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Guma",
  },
  naplatci: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Naplatak",
  },
  korisnik: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Korisnik",
  },
});

autoSchema.set("toJSON", {
  transform: (doc, ret) => {
    ret.id = doc._id.toString();
    delete ret._id;
    delete ret.__v;
    return ret;
  },
});

const Auto = mongoose.model("Auto", autoSchema, "cars");
module.exports = Auto;

console.log("Spajamo se na bazu");

mongoose
  .connect(url)
  .then((result) => {
    //   novaPoruka.save()
    console.log("Spojeni smo na bazu");
  })
  .catch((error) => {
    console.log("Greška pri spajanju", error.message);
  });
