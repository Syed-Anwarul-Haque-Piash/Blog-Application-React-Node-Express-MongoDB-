const express=require("express");
const { model } = require("mongoose");
const router=express.Router();
const User=require('../models/User');
const Post=require('../models/Post');
const bcrypt=require("bcrypt")

//UPDATE
router.put("/:id", async (req, res) => {
    if (req.body.userId === req.params.id) {
      if (req.body.password) {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      }
      try {
        const updatedUser = await User.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedUser);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can update only your account!");
    }
  });

  //DELETE

  router.delete('/:id',async (req,res)=>{
    if(req.body.userId===req.params.id){
        try{
            const user=User.findById(req.params.id);
            try{
                await Post.deleteMany({username:user.username});
                await User.findByIdAndDelete(req.params.id);
                res.status(200).json("User deleted");
            }
            catch(err){
                res.status(500).json(err)
            }
        }
        catch(err){
            res.status(500).json("USer not found");
        }
        
    }
    else{
      res.status(400).json("You can only delete your account");
    }
  })

  //GET
  router.get('/',async(req,res)=>{
    try{
        const user=await User.find();
        res.status(200).json(user);
    }
    catch(err){
        res.status(500).json(err)
    }
  })

  //GET by Id
  router.get('/:id',async(req,res)=>{
    try{
        const user=await User.findById(req.params.id)
        res.status(200).json(user);
    }
    catch(err){
        res.status(500).json(err)
    }
    
  })


module.exports=router;