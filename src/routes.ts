import {Router, Request, Response} from 'express';

import CreatePostController from './controllers/post/CreatePostController';
import ListPostController from './controllers/post/ListPostController';

const router = Router();

// POSTS ROUTES
router.post('/posts', CreatePostController.handle);
router.get('/posts', ListPostController.handle);

export {router};