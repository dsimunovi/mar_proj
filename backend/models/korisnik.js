const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const bcrypt = require("bcryptjs");

const korisnikSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
  },
  ime: String,
  email: {
    type: String,
  },
  passHash: String,
  admin: {
    type: Boolean,
    default: false,
  },
  cars: [{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Auto'
}],
});
korisnikSchema.plugin(uniqueValidator);
korisnikSchema.set("toJSON", {
  transform: (doc, ret) => {
    ret.id = ret._id.toString();
    delete ret._id;
    delete ret.__v;
    delete ret.passHash;
    return ret;
  },
});

korisnikSchema.pre("save", async function (next) {
  if (!this.isModified) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.passHash = await bcrypt.hash(this.passHash, salt);
});

const Korisnik = mongoose.model("Korisnik", korisnikSchema, "korisnici");

module.exports = Korisnik;
