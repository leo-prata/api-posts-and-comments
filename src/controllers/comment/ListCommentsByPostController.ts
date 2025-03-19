import { Request, Response } from 'express';
import ListCommentsByPostService from '../../services/comment/ListCommentsByPostService';

class ListCommentsByPostController{
    async handle(request: Request, response: Response){
        const { postId } = request.params;

        const comments = await ListCommentsByPostService.execute({
            postId: Number(postId) 
        });

        response.json(comments);
    }
}

export default new ListCommentsByPostController();