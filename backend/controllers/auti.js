const autiRouter=require('express').Router()
const Auto=require('../models/auto')

autiRouter.get('/',async (req,res)=>{
    const auti=await Auto.find({})
      res.json(auti)
})

autiRouter.get('/:id', async (req,res)=>{
    const auto= await Auto.findById(req.params.id)
    res.json(auto)
})

autiRouter.delete('/:id', async(req,res)=>{
    await Auto.findByIdAndRemove(req.params.id)
    res.json(204).end()

})

autiRouter.put('/id',async(req,res)=>{
    const podatak=req.body
    const id=req.params.id

    const auto={
        boja:podatak.boja,
        gume:podatak.gume,
        naplatci:podatak.naplatci
    }
    const updateCar=await Auto.findByIdAndUpdate(id,auto,{korisnik:id})
})


module.exports=autiRouter