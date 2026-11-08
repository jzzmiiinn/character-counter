import { useCounterStore } from "../store/counterStore";

export const TextInput = () => {
  const text = useCounterStore((state) => state.text);
  const setText = useCounterStore((state) => state.setText);
  return (
    <div className="flex flex-col gap-4">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="h-40 w-full rounded-lg border bg-gray-100 p-4 placeholder:text-[#6B6B6E] focus:border-purple-500"
        placeholder="Start typing here....(or paste your text)"
      />
    </div>
  );
};
