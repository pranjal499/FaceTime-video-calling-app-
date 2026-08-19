import type {Request, Response, NextFunction, RequestHandler} from 'express'

// Types of async rout handlers:
type AsyncRequestHandler = (
    req: Request,
    res: Response,
    next: NextFunction
) => Promise<any>

// WrapAsync middleware wrapper:
export const WrapAsync = (fn: AsyncRequestHandler): RequestHandler => {
    return (req: Request, res: Response, next: NextFunction): void => {
        fn(req, res, next);
    }
}