import { useState } from "react";
import MoodItem from "./MoodItem";

export default function MoodList({ moods }) {
  const [visibleCount, setVisibleCount] = useState(9)

  const sortedMoods = [...moods].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <div className="mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-stretch">
        {sortedMoods.slice(0, visibleCount).map((mood) => (
          <MoodItem key={mood.id} mood={mood} className="h-full min-h-[260px] flex flex-col" />
        ))}
      </div>

      {visibleCount < sortedMoods.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setVisibleCount((prev) => prev + 6)}
            className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}
