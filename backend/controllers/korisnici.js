const bcrypt=require('bcrypt')
const Korisnik=require('../models/korisnik')
const korisniciRouter=require('express').Router()

korisniciRouter.get('/',async (req,res)=>{
    const korisnici=await Korisnik.find({})
      res.json(korisnici)
})

korisniciRouter.post('/', async (req, res) => {
    const sadrzaj = req.body

    const runde = 10
    const passHash = await bcrypt.hash(sadrzaj.pass, runde)

    const korisnik = new Korisnik({
        username: sadrzaj.username,
        ime: sadrzaj.ime,
        email:sadrzaj.email,
        passHash:passHash,
        admin:sadrzaj.admin
    })

    const noviKorisnik = await korisnik.save()
    res.json(noviKorisnik)
})

module.exports=korisniciRouter