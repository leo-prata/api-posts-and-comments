import { Request, Response } from 'express';
import ListPostService from '../../services/post/ListPostService';

class ListPostController{
    async handle(req: Request, res: Response){
        const posts = await ListPostService.execute();
        res.json(posts);
    }
}

export default new ListPostController();

