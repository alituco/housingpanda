import type { Listing } from '@/lib/api';

export default function ListingCard({ listing }: { listing: Listing }) {
  return (
    <article className="rounded-2xl border p-4 shadow-sm transition hover:shadow-md">
      <h3 className="text-xl font-semibold">{listing.title}</h3>
      <p className="text-sm text-gray-600 mb-2">{listing.description}</p>
      <ul className="space-y-1 text-sm">
        <li><strong>Rent:</strong> ${listing.rent}</li>
        <li><strong>Rooms:</strong> {listing.rooms}</li>
        <li><strong>Address:</strong> {listing.address}</li>
        <li><strong>Contact:</strong> {listing.contactInfo}</li>
      </ul>
      <p className="mt-2 text-xs text-gray-500">
        {new Date(listing.createdAt).toLocaleString()}
      </p>
    </article>
  );
}
