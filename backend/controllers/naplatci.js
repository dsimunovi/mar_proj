const naplatciRouter=require('express').Router()
const Naplatak=require('../models/naplatak')

naplatciRouter.get('/',async (req,res)=>{
    const naplatci=await Naplatak.find({})
      res.json(naplatci)
})

naplatciRouter.get('/:id', async (req,res)=>{
    const naplatak= await Naplatak.findById(req.params.id)
    res.json(naplatak)
})

naplatciRouter.delete('/:id', async(req,res)=>{
    await Naplatak.findByIdAndRemove(req.params.id)
    res.json(204).end()

})


module.exports=naplatciRouter