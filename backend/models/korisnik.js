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
  kupnje: [{
      
        type:mongoose.Schema.Types.ObjectId,
        ref:'Kupnja'
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



const Korisnik = mongoose.model("Korisnik", korisnikSchema, "korisnici");

module.exports = Korisnik;
