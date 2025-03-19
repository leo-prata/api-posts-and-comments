import {Router, Request, Response} from 'express';

import CreatePostController from './controllers/post/CreatePostController';
import ListPostController from './controllers/post/ListPostController';
import RemovePostController from './controllers/post/RemovePostController';

const router = Router();

// POSTS ROUTES
router.post('/posts', CreatePostController.handle);
router.get('/posts', ListPostController.handle);
router.delete('/posts/:id', RemovePostController.handle);

export {router};