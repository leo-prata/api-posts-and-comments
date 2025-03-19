import { Request, Response } from 'express';
import ListCommentsByPostService from '../../services/comment/ListCommentsByPostService';

class ListCommentsByPostController{
    async handle(req: Request, res: Response){
        const { postId } = req.params;

        const comments = await ListCommentsByPostService.execute({
            postId: Number(postId) 
        });

        res.json(comments);
    }
}

export default new ListCommentsByPostController();