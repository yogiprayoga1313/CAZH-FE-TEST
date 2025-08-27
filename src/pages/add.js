import { useRouter } from "next/router";
import MoodForm from "../components/MoodForm";
import useMoodStore from "../store/MoodStore";

export default function AddMood() {
  const router = useRouter();
  const addMood = useMoodStore((s) => s.addMood);

  const handleAdd = (data) => {
    addMood(data);
    router.push("/");
  };

  return (
    <div className="w-full flex flex-col justify-center items-center mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Add Mood</h1>
      <MoodForm onSubmit={handleAdd} />
    </div>
  );
}
