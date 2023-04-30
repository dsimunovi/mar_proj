const bcrypt=require('bcryptjs')
const Korisnik=require('../models/korisnik')
const korisniciRouter=require('express').Router()

korisniciRouter.get('/',async (req,res)=>{
    const korisnici=await Korisnik.find({})
      res.json(korisnici)
})


korisniciRouter.get('/:id', async (req,res)=>{
    const korisnik= await Korisnik.findById(req.params.id)
    res.json(korisnik)
})

korisniciRouter.post('/', async (req, res) => {
    const {username,ime,email,passHash}=req.body

    if(!username || !email || !ime || !passHash){
        res.status(400)
        throw new Error("Unesite sve podatke")
    }

    const postojeciKorisnik=await Korisnik.findOne({email} || {username})
    if(postojeciKorisnik){
        res.status(400)
        throw new Error ("Korisnik već postoji!")
    }
    
    const korisnik=Korisnik.create({
        username:username,
        ime:ime,
        email:email,
        passHash:passHash
    })
    if(korisnik){
        res.status(201).json({
            username:korisnik.username,
            ime:korisnik.ime,
            email:korisnik.email,

        })
    }
    else{
        res.status(400)
        throw new Error("Greška pri registraciji korisnika")
    }
})

korisniciRouter.put('/:id',async(req,res)=>{
    const podaci=req.body
    const id=req.params.id

    const korisnikUpdate={
        auti:{
            car:podaci.auti,
            tire:podaci.gume,
            rim:podaci.naplatci,
            placanje:{
                nacin:podaci.nacin,
                brojRata:podaci.brojRata
            }
        }
    } 
    const updateKorisnik= await Korisnik.findByIdAndUpdate(id,korisnikUpdate,{new:true})
    res.json(updateKorisnik)
})

module.exports=korisniciRouter