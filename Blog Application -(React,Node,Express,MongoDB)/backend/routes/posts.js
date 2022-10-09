const express=require("express");
const router=express.Router();
const User=require('../models/User');
const Post=require('../models/Post');


//CREATE NEW POST
router.post('/',async(req,res)=>{
    try{
        const post=new Post(req.body);
        const newPost=await post.save();
        res.status(200).json(newPost);
    }
    catch(err){
        res.status(500).json(err)
    }

})

//UPDATE POST
router.put('/:id',async(req,res)=>{
  try{
    const post=await Post.findById(req.params.id);
    if(post.username===req.body.username){
       try{
        const updatePost=await Post.findByIdAndUpdate(req.params.id,{
          $set:req.body,
        },{new:true});
        res.status(200).json(updatePost);
       }
       catch(err){
        res.status(500).json(err)
       }
    }
    else{
        res.status(500).json("You can only update your post");
    }
  }
  catch(err){
    res.status(500).json(err)
  }
})

//DELETE A POST
router.delete('/:id',async(req,res)=>{
  try{
    const post=await Post.findById(req.params.id);
    if(post.username===req.body.username){
      try{
        await post.delete();
        res.status(200).json("Post has been deleted");
      }
      catch(err){
        res.status(200).json(err)
      }
    }
    else{
      res.status(500).json("You can only delete your post");
    }
  }
  catch(err){
    res.status(500).json(err)
  }
});

//GET POST
router.get('/',async(req,res)=>{
  const username=req.query.user;
  const category=req.query.category;
  try{
     let posts;
     if(username){
      posts=await Post.find({username})
     }
     else if(category){
      posts=await Post.find({categories:{$in:[category]}});
     }
     else{
      posts=await Post.find()
     }
     res.status(200).json(posts);
  }
  catch(err){
      res.status(500).json(err)
  }
})

//GET A POST BY ID

router.get('/:id',async(req,res)=>{
  try{
      const post=await Post.findById(req.params.id)
      res.status(200).json(post);
  }
  catch(err){
      res.status(500).json(err)
  }
  
})


module.exports=router;