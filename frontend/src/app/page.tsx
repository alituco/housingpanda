import { fetchListings } from '@/lib/api';
import ListingCard from '@/components/ListingCard';

export default async function Home() {
  const listings = await fetchListings();

  if (listings.length === 0) {
    return <p className="text-center text-gray-600">No listings yet. <a href="/submit" className="text-blue-600 underline">Add one?</a></p>;
  }

  return (
    <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {listings.map(l => <ListingCard key={l.id} listing={l} />)}
    </section>
  );
}
