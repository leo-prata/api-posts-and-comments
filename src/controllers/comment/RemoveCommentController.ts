import { Request, Response } from 'express';
import RemoveCommentService from '../../services/comment/RemoveCommentService';

class RemoveCommentController{
    async handle(req: Request, res: Response){
        const { id } = req.params;

        const comment = await RemoveCommentService.execute({
            id: Number(id) 
        });

        res.json({message: 'Comment removed successfully', comment});
    }
}

export default new RemoveCommentController();