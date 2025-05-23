import express, {Request, Response, NextFunction} from 'express';
import 'express-async-errors';
import cors from 'cors';

import { router } from './routes';

const app = express();
app.use(express.json());
app.use(cors());

app.use(router);

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    if(error instanceof Error) {
        res.status(400).json({
            error: error.message
        });
    }

    res.status(500).json({
        status: 'error',
        message: 'Internal Server Error'
    });
});

app.listen(3111, () => {
    console.log('Server is running on port 3111!');
});