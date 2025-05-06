import express from 'express';
import { Request, Response } from 'express';
import cors from 'cors';
import listingRouter from './routes/listing.route';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/health', (_: Request, res: Response) => {
    res.json({ status: 'OK' })
    return;
});

app.use('/api/listings', listingRouter);

export default app;
