import { Request, Response } from 'express';
import prisma from '../config/prisma';

export const createListing = async (req: Request, res: Response) => {
  const listing = await prisma.listing.create({ data: req.body });
  res.status(201).json(listing);
};

export const getAllListings = async (_req: Request, res: Response) => {
  const listings = await prisma.listing.findMany({ orderBy: { id: 'desc' } });
  res.json(listings);
};
