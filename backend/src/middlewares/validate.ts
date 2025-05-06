import { RequestHandler} from 'express';
import { ZodSchema } from 'zod';

export const validate =
  (schema: ZodSchema): RequestHandler =>        
  (req, res, next) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      res.status(400).json({ errors: result.error.flatten() });
      return;          
    }

    req.body = result.data; 
    next();
  };
