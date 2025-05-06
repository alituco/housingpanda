const API_BASE = process.env.NEXT_PUBLIC_API_BASE!;

export interface Listing {
  id: number;
  title: string;
  description: string;
  rent: string;        
  address: string;
  rooms: number;
  contactInfo: string;
  createdAt: string;
}

export async function fetchListings(): Promise<Listing[]> {
  const res = await fetch(`${API_BASE}/api/listings`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Could not fetch listings');
  return res.json();
}

export async function createListing(data: Omit<Listing, 'id' | 'createdAt'>) {
  const res = await fetch(`${API_BASE}/api/listings`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const e = await res.json();
    throw new Error(JSON.stringify(e.errors ?? e));
  }
}
