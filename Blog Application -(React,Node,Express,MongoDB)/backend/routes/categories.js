const express=require("express");
const router=express.Router();
const Category=require('../models/Category');

//Create Category

router.post('/',async(req,res) => {
    try{
        const cat=new Category(req.body);
        const newCat=await cat.save();
        res.status(200).json(newCat);
    }
    catch(err){
        res.status(500).json(err)
    }
});

//Get Category
router.get('/',async(req,res)=>{
    try{
        const category=await Category.find();
        res.status(200).json(category);
    }
    catch(err){
        res.status(500).json(err)
    }
})


module.exports=router;