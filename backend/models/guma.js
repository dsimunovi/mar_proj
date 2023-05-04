const mongoose = require("mongoose");

const gumaSchema = new mongoose.Schema({
  slika: {
    type: String,
  },
  tip: {
    type: String,
  },
  marka: {
    type: String,
  },
  cijena: {
    type: Number,
  },
  original: {
    type: Boolean,
    default: true,
  },
});
gumaSchema.set("toJSON", {
  transform: (doc, ret) => {
    ret.id = doc._id.toString();
    delete ret._id;
    delete ret.__v;
    return ret;
  },
});

const Guma = mongoose.model("Guma", gumaSchema, "gume");

module.exports = Guma;
