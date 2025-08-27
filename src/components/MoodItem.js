import { useState } from "react";
import Link from "next/link";
import useMoodStore from "../store/MoodStore";
import { PencilIcon, TrashIcon, ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

export default function MoodItem({ mood, className = "" }) {
    const deleteMood = useMoodStore((s) => s.deleteMood);
    const [showModal, setShowModal] = useState(false);
    const [expanded, setExpanded] = useState(false);

    const moodEmojis = {
        1: "😢",
        2: "😞",
        3: "😐",
        4: "🙂",
        5: "😃",
    };

    const formatDate = (dateStr) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString("en-US", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
        });
    };

    const handleDelete = () => {
        deleteMood(mood.id);
        setShowModal(false);
    };

    const isLongNote = mood.note && mood.note.length > 120;

    return (
        <>
            <div className={`bg-gradient-to-r from-gray-50 to-white shadow-lg rounded-xl border border-gray-100 flex flex-col justify-between hover:shadow-2xl transition ${className}`}>
                <div className="relative w-full h-30 flex justify-center items-center rounded-t-md overflow-hidden">
                    <div className="absolute inset-0 bg-yellow-200/30 backdrop-blur-md"></div>
                    <span className="absolute text-6xl text-yellow-300 blur-xl">
                        {moodEmojis[mood.level]}
                    </span>
                    <span className="text-5xl relative z-10">
                        {moodEmojis[mood.level]}
                    </span>
                </div>

                <div className="flex flex-col p-4 space-y-2">
                    <p className="text-gray-500 text-sm font-semibold">{formatDate(mood.date)}</p>
                    {mood.note && (
                        <div>
                            <p className={
                                expanded
                                    ? "text-gray-700 opacity-70"
                                    : "text-gray-700 opacity-70 line-clamp-2"
                            }>
                                {mood.note}
                            </p>
                            {isLongNote && (
                                <button
                                    className="flex items-center text-blue-500 mt-1 hover:underline text-xs"
                                    onClick={() => setExpanded((v) => !v)}
                                >
                                    {expanded ? (
                                        <>
                                            Show Less <ChevronUpIcon className="w-4 h-4 ml-1" />
                                        </>
                                    ) : (
                                        <>
                                            Learn More <ChevronDownIcon className="w-4 h-4 ml-1" />
                                        </>
                                    )}
                                </button>
                            )}
                        </div>
                    )}
                </div>

                <div className="flex justify-end gap-2 p-5">
                    <Link
                        href={`/edit/${mood.id}`}
                        className="p-2 rounded-full hover:bg-yellow-100 transition"
                    >
                        <PencilIcon className="w-5 h-5 text-yellow-500" />
                    </Link>
                    <button
                        onClick={() => setShowModal(true)}
                        className="p-2 rounded-full hover:bg-red-100 transition"
                    >
                        <TrashIcon className="w-5 h-5 text-red-500" />
                    </button>
                </div>
            </div>

            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white rounded-xl shadow-lg p-6 w-80">
                        <h2 className="text-lg font-semibold text-gray-800">Are you sure?</h2>
                        <p className="text-sm text-gray-600 mt-2">
                            This action cannot be undone.
                        </p>

                        <div className="flex justify-end gap-3 mt-6">
                            <button
                                onClick={() => setShowModal(false)}
                                className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleDelete}
                                className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
                            >
                                Yes, Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
