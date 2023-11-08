import express, { NextFunction, Request, Response } from 'express';
import { logger } from './config/logger';
import { HttpError } from 'http-errors';

const app = express();

// eslint-disable-next-line @typescript-eslint/no-misused-promises, @typescript-eslint/require-await
app.get('/', async (req, res) => {
    // const err = createHttpError(401, 'You are not allowed to this page');
    // return next(err);
    return res.status(201).send('Welcome to Auth Service');
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
    logger.error(err.message);
    const statusCode = err.statusCode | 500;

    res.status(statusCode).json({
        errors: [
            {
                type: err.name,
                msg: err.message,
                path: '',
                location: '',
            },
        ],
    });
});

export default app;
