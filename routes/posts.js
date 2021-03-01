import express from 'express';

import { getPosts, getPost, createPost, updatePost, likePost, deletePost } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.get('/:id', getPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);

export default router;







// import express from 'express';

// import { getPosts, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js';
 
// const router = express.Router();

// // this will wolrk for localhost:5000/posts
// router.get('/', getPosts );
// router.post('/', createPost );
// router.patch('/:id',updatePost);        // router.patch() is used to update existing data
// router.delete('/:id',deletePost);
// router.patch('/:id/likePost', likePost);
// export default router;