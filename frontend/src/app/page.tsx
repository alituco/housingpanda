import { fetchListings } from '@/lib/api';
import ListingCard from '@/components/ListingCard';

export default async function Home() {
  const listings = await fetchListings();

  if (listings.length === 0) {
    return (
      <p className="flex flex-col items-center gap-2 text-gray-600">
        <span>No listings yet.</span>
        <a href="/submit" className="text-blue-600 underline">
          Add one?
        </a>
      </p>
    );
  }

  return (
    <section className="flex flex-col gap-4">
      {listings.map((l) => (
        <ListingCard key={l.id} listing={l} />
      ))}
    </section>
  );
}
