const mongoose = require("mongoose");

const naplatakSchema = new mongoose.Schema({
  slika: {
    type: String,
    required: true,
  },
  tip: {
    type: String,
    required: true,
  },
  cijena: {
    type: Number,
    required: true,
  },
});
naplatakSchema.set("toJSON", {
  transform: (doc, ret) => {
    ret.id = doc._id.toString();
    delete ret._id;
    delete ret.__v;
    return ret;
  },
});

const Naplatak = mongoose.model("Naplatak", naplatakSchema, "rims");

module.exports = Naplatak;
