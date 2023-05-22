const kupnjaRouter=require('express').Router()
const Korisnik=require('../models/korisnik')
const Kupnja=require('../models/kupnje')

const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')

const dohvatiToken = req => {
  const auth = req.get('authorization')
  if (auth && auth.toLowerCase().startsWith('bearer ')){
    return auth.substring(7)
  }
  return null
}
kupnjaRouter.post("/", async (req, res) => {
    const podatak = req.body;
    const token = dohvatiToken(req)

  const dekToken = jwt.verify(token, process.env.SECRET)
  if (!token || !dekToken.id){
    return res.status(401).json({error: 'Neispravni token'})
  }
  const korisnik = await Korisnik.findById(dekToken.id)
  
    const novaKupnja = new Kupnja({
      car:podatak.car,
      tire:podatak.tire,
      rim:podatak.rim,
      brKartice:podatak.brKartice,
      mjesec:podatak.mjesec,
      godina:podatak.godina,
      cvv:podatak.cvv,
      korisnik:korisnik._id

    });
    const spremljenaKupnja=await novaKupnja.save()
    korisnik.kupnje=korisnik.kupnje.concat(spremljenaKupnja._id)
    await korisnik.save()

    res.json(spremljenaKupnja)
  });

  kupnjaRouter.get('/', async(req,res)=>{
    const kupnje= await Kupnja.find({})
    .populate('korisnik',{username:1, ime:1})
    res.json(kupnje)
  })

  module.exports=kupnjaRouter