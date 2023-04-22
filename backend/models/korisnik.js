const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const korisnikSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    ime:String,
    email:{
        type:String,
        unique:true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    passHash: String,
    admin:{
        type:Boolean,
        default:false
    },
    auti: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Auto'
        }
    ]
})
korisnikSchema.plugin(uniqueValidator)
korisnikSchema.set('toJSON', {
    transform: (doc, ret) => {
        ret.id = ret._id.toString()
        delete ret._id
        delete ret.__v
        delete ret.passHash
        return ret
    }
})

const Korisnik = mongoose.model('Korisnik', korisnikSchema, 'korisnici')

module.exports = Korisnik