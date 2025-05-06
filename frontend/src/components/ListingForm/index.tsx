'use client';

import { useState } from 'react';
import { createListing } from '@/lib/api';
import { useRouter } from 'next/navigation';

export default function ListingForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      title: formData.get('title') as string,
      description: formData.get('description') as string,
      rent: Number(formData.get('rent')),
      address: formData.get('address') as string,
      rooms: Number(formData.get('rooms')),
      contactInfo: formData.get('contactInfo') as string,
    };

    try {
      setLoading(true);
      await createListing(payload as any);
      router.push('/');
      router.refresh();
    } catch (e: any) {
      setErr(e.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-lg space-y-4">
      {err && <p className="rounded bg-red-100 p-2 text-sm text-red-800">{err}</p>}

      <input name="title" placeholder="Title" required className="input" />
      <textarea name="description" placeholder="Description" required className="textarea" />

      <input name="rent" type="number" step="0.01" placeholder="Rent (USD)" required className="input" />
      <input name="address" placeholder="Address" required className="input" />
      <input name="rooms" type="number" min="1" placeholder="Rooms" required className="input" />
      <input name="contactInfo" placeholder="Contact email" type="email" required className="input" />

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-blue-600 p-2 font-medium text-white disabled:opacity-50"
      >
        {loading ? 'Submitting…' : 'Submit Listing'}
      </button>
    </form>
  );
}

const base = 'block w-full rounded-md border px-3 py-2';
export const input = `${base} focus:border-blue-500`;
export const textarea = `${base} h-24 resize-none focus:border-blue-500`;
