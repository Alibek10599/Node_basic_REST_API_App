const express = require('express');
const router = express.Router();
// here I try to post using Schema
const Post = require('../models/Post');  // joskii model

// need to get all posts
router.get('/', async(req,res)=>{
   try{
       const posts = await Post.find();
       res.json(posts);
   }catch(err){
       res.json({message:err});
   }
});

// submit a post
router.post('/', async (req,res)=>{
    const post = new Post({
        title:req.body.title,
        description:req.body.description
    });
    try{
    const savedPost = await post.save();
     res.json(savedPost);
      }catch(err){
        res.json({message:err});
    }
       /* .then(data=>{
            res.json(data);
        })
        .catch (err=>{
            res.json({message:err});
        })
        this was too long code to receive requests data
        */
});

//specific post: needs to update thus does not respond by ID, doesn work
router.get('/:postId', async (req,res)=>{
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    }catch(err){
        res.json({message:err});
    }
});

//delete spec post: pohodu need also dorabotat` JB jasamaid
router.delete('/:postId', async (req,res)=>{
    try {
        const removedPost = await Post.remove({_id:req.params.postId});
        res.json(removedPost);
    }catch(err){
        res.json({message:err});
    }


})
// to update post
router.patch('/:postId', async (req,res)=>{
    try {
        const updatedPost = await Post.updateOne(
            {_id:req.params.postId},
            {$set:{title:req.body.title}}
            );
        res.json(updatedPost);
    }catch(err){
        res.json({message:err});
    }
});

module.exports = router;
// last step in app js npm install