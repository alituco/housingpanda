import { Router } from 'express';
import { createListing, getAllListings } from '../controllers/listing.controller';
import { validate } from '../middlewares/validate';
import { listingSchema } from '../validators/listing.schema';

const router = Router();

// api/listings
router.post('/', validate(listingSchema), createListing);

// api/listings
router.get('/', getAllListings);

export default router;
