import {Router, Request, Response} from 'express';

import CreatePostController from './controllers/post/CreatePostController';
import ListPostController from './controllers/post/ListPostController';
import RemovePostController from './controllers/post/RemovePostController';

import CreateCommentController from './controllers/comment/CreateCommentController';
import ListCommentsByPostController from './controllers/comment/ListCommentsByPostController';
import RemoveCommentController from './controllers/comment/RemoveCommentController';

const router = Router();

// POSTS ROUTES
router.post('/posts', CreatePostController.handle);
router.get('/posts', ListPostController.handle);
router.delete('/posts/:id', RemovePostController.handle);

//COMMENTS ROUTES
router.post('/comments', CreateCommentController.handle);
router.get('/comments/:postId', ListCommentsByPostController.handle);
router.delete('/comments/:id', RemoveCommentController.handle);

export {router};