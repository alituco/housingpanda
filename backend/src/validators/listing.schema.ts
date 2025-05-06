import { z } from 'zod';

export const listingSchema = z.object({
  title:       z.string().min(3).max(120),
  description: z.string().min(10),
  rent:        z.number().positive(),
  address:     z.string().min(5),
  rooms:       z.number().int().positive(),
  contactInfo: z.string().email() 
});

export type ListingInput = z.infer<typeof listingSchema>;
