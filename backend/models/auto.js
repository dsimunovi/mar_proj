const mongoose = require("mongoose");

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


