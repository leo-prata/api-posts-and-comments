import { Request, Response } from 'express';
import RemovePostService from '../../services/post/RemovePostService';

class RemovePostController{
    async handle(req: Request, res: Response){
        const { id } = req.params;

        const post = await RemovePostService.execute({
            id: Number(id)
        });

        res.json({ message: "Post removed successfully :D", post});
    }
}

export default new RemovePostController();