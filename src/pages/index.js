import { useEffect, useState } from "react";
import Link from "next/link";
import useMoodStore from "../store/MoodStore";
import MoodList from "../components/MoodList";

export default function Home() {
  const { moods, loadMoods } = useMoodStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await loadMoods();
      setLoading(false);
    };
    fetchData();
  }, [loadMoods]);

  return (
    <div className="max-w-full mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-semibold tracking-tight">Mood Tracker</h1>
        <Link
          href="/add"
          className="rounded-xl bg-green-600 text-white px-10 py-2 text-sm font-medium shadow-sm hover:bg-green-700 transition"
        >
          + Add
        </Link>
      </div>

      <div className="border-t border-gray-200 mb-4" />

      {loading ? (
        <div className="flex flex-col items-center justify-center py-12">
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-3 text-sm text-gray-500">Loading your moods...</p>
        </div>
      ) : moods.length === 0 ? (
        <p className="text-center text-gray-500 text-sm mt-6">
          You don’t have any mood entries yet. Add one now!
        </p>
      ) : (
        <MoodList moods={moods} />
      )}
    </div>
  );
}
