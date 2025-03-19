import { Request, Response } from 'express';
import CreateCommentService from '../../services/comment/CreateCommentService';

class CreateCommentController{
    async handle(req: Request, res: Response){
        const { content, postId } = req.body;

        const comment = await CreateCommentService.execute({
            content,
            postId: parseInt(postId), 
        });

        res.json(comment);
    }
}

export default new CreateCommentController();