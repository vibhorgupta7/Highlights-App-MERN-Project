import express from 'express';
import mongoose from 'mongoose';

import PostMessage from '../models/postMessage.js';

const router = express.Router();

export const getPosts = async (req, res) => { 
    try {
        const postMessages = await PostMessage.find();
                
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getPost = async (req, res) => { 
    const { id } = req.params;

    try {
        const post = await PostMessage.findById(id);
        
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    const { title, message, selectedFile, creator, tags } = req.body;

    const newPostMessage = new PostMessage({ title, message, selectedFile, creator, tags })

    try {
        await newPostMessage.save();

        res.status(201).json(newPostMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, message, creator, selectedFile, tags } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

    await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await PostMessage.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}

export const likePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    
    const post = await PostMessage.findById(id);

    const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });
    
    res.json(updatedPost);
}


export default router;







// import postMessage from '../models/postMessage.js';
// import mongoose from 'mongoose';


// export const getPosts = async (req,res) => {
    
//     try{
//         const postMessages = await postMessage.find();                // it will find and return all the postMessages in db. And since it takes time we put await in front and async in front of function
    
//         res.status(200).json(postMessages);                 // .status(x), sets the http status. 200 -> a=everything successfull. .json(postMessages) send the array of all msgs
//     }catch(error){
//         res.status(404).json({ message: error.message });
//     }
// }


// export const createPost = async (req,res) => {
//     const post = req.body;              // with post requests, we have access to req.body
    
//     const newPost = new postMessage(post);
//     try{
//         await newPost.save();           // .save() takes time to execute and hence await will be wriiten and async in front of function

//         res.status(201).json(newPost);  // 201-> successful creation  
//     }catch(error){
//         res.status(409).json({ message: error.message });
//     }
// }


// export const updatePost = async (req, res) => {
//     const {id : _id} = req.params;
//     const post = req.body;
    
//     if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with that is   `);

//     const updatedPost = await PostMessage.findByIdAndUpdate( id, {...post, id}, { new: true });

//     res.json(updatedPost);
// }


// export const deletePost = async (req,res) => {
//     const { id } = req.params;

    
//     if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with that is   `);

//     await PostMessage.findByIdAndRemove(id);
//     res.json({ message: 'Post Deleted Successfully.'});

// }

// export const likePost = async (req,res) => {
//     const { id } = req.params;

    
//     if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with that is   `);

//     const post = await PostMessage.findById(id);
//     const updatedPost =  await PostMessage.findByIdAndUpdate( id, { likeCount : post.likeCount +1}, {new: true});

//     res.json(updatePost);
// }



// export default router;