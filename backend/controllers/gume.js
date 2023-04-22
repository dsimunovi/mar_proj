const gumeRouter=require('express').Router()
const Guma=require('../models/guma')

gumeRouter.get('/',async (req,res)=>{
    const gume=await Guma.find({})
      res.json(gume)
})

gumeRouter.get('/:id', async (req,res)=>{
    const guma= await Guma.findById(req.params.id)
    res.json(guma)
})

gumeRouter.delete('/:id', async(req,res)=>{
    await Guma.findByIdAndRemove(req.params.id)
    res.json(204).end()

})


module.exports=gumeRouter