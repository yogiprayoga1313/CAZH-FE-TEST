import { useState } from "react";
import Link from "next/link";

export default function MoodForm({ initialData, onSubmit }) {
  const [date, setDate] = useState(initialData?.date || "");
  const [level, setLevel] = useState(initialData?.level || 3);
  const [note, setNote] = useState(initialData?.note || "");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await onSubmit({ date, level, note });
    } finally {
      setLoading(false);
    }
  };

  const moodEmojis = {
    1: "😢 Very Bad",
    2: "😞 Bad",
    3: "😐 Neutral",
    4: "🙂 Good",
    5: "😃 Very Good",
  };

  return (
    <div className="bg-white w-full shadow-md rounded-2xl p-6 border border-gray-200">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        {initialData ? "Edit Mood" : "Add New Mood"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Date
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Mood Level
          </label>
          <select
            value={level}
            onChange={(e) => setLevel(Number(e.target.value))}
            className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 p-2"
          >
            {Object.entries(moodEmojis).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Notes
          </label>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Optional note..."
            rows={3}
            className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 p-2"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2.5 rounded-lg font-medium shadow transition 
            ${
              loading
                ? "bg-blue-400 text-white cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
        >
          {loading
            ? initialData
              ? "Updating..."
              : "Saving..."
            : initialData
            ? "Update Mood"
            : "Save Mood"}
        </button>
      </form>

      <div className="mt-4">
        <Link
          href="/"
          className="block text-center w-full py-2.5 rounded-lg font-medium shadow border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
        >
        Back to Home
        </Link>
      </div>
    </div>
  );
}
