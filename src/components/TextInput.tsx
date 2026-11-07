export const TextInput = () => {
  return (
    <div className="flex flex-col gap-4">
      <textarea
        className="h-40 w-full rounded-lg border bg-gray-100 p-4 text-white placeholder:text-[#6B6B6E] focus:border-purple-500"
        placeholder="Start typing here....(or paste your text)"
      />
    </div>
  );
};
