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

gumeRouter.post('/', async(req,res)=>{
    const podatak=req.body

    const novaGuma=new Guma({
        slika:podatak.slika,
        tip:podatak.tip,
        marka:podatak.marka,
        cijena:podatak.cijena

    })
    const spremiGumu=await novaGuma.save()
    res.json(spremiGumu)
})

module.exports=gumeRouter