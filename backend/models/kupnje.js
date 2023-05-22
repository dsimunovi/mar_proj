const mongoose = require("mongoose");

const kupnjaSchema = new mongoose.Schema({
 car:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Auto'
 },
 tire:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Guma'
 },
 rim:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Naplatak'
 },
 korisnik:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Korisnik'
 },
 brKartice:{
    type:String,
    length:16
 },
    mjesec:Number,
    godina:Number,
 cvv:{
    type:Number,
    length:3
 }

});
kupnjaSchema.set("toJSON", {
  transform: (doc, ret) => {
    ret.id = doc._id.toString();
    delete ret._id;
    delete ret.__v;
    return ret;
  },
});

const Kupnja = mongoose.model("Kupnja", kupnjaSchema, "kupnje");

module.exports = Kupnja;
