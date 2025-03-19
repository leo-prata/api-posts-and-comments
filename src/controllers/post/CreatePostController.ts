import { Request, Response } from 'express';
import CreatePostService from '../../services/post/CreatePostService';

class CreatePostController {
    async handle(req: Request, res: Response){
        const { title, content } = req.body;

        const post = await CreatePostService.execute({
            title, 
            content 
        });

        res.json(post);
    }
}

export default new CreatePostController();