const mongoose = require('mongoose')

korisnikSchema=new moongose.Schema({
    username:String,
    ime:String,
    passHash:String,
    auti:[{
        type:moongose.Schema.Types.ObjectId,
        ref: "Auto"
    }
    ]
})