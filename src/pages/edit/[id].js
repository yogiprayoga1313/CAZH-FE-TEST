import { useRouter } from "next/router";
import useMoodStore from "../../store/MoodStore";
import MoodForm from "../../components/MoodForm";

export default function EditMood() {
  const router = useRouter();
  const { id } = router.query;
  const { moods, updateMood } = useMoodStore();

  const mood = moods.find((m) => m.id === id);

  if (!mood) return <p>Loading...</p>;

  const handleUpdate = (data) => {
    updateMood(id, data);
    router.push("/");
  };

  return (
    <div className="w-full flex flex-col justify-center items-center mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Edit Mood</h1>
      <MoodForm initialData={mood} onSubmit={handleUpdate} />
    </div>
  );
}
