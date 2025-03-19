import {Router, Request, Response} from 'express';

import CreatePostController from './controllers/post/CreatePostController';

const router = Router();

// POSTS ROUTES
router.post('/posts', CreatePostController.handle);

export {router};