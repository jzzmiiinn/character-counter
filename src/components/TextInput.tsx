import { useCounterStore } from "../store/counterStore";

export const TextInput = () => {
  const text = useCounterStore((state) => state.text);
  const setText = useCounterStore((state) => state.setText);
  const theme = useCounterStore((state) => state.theme);
  return (
    <div className="flex flex-col gap-4">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="h-40 w-full rounded-lg border border-gray-200 bg-gray-100 p-4 text-black placeholder:text-gray-500 focus:border-purple-500 focus:outline-none dark:border-[#42414B] dark:bg-[#1E1D25] dark:text-white dark:placeholder:text-gray-400"
        placeholder="Start typing here....(or paste your text)"
      />
    </div>
  );
};
