import { useCounterStore } from "../store/counterStore";
import {
  countCharacters,
  countWords,
  countSentences,
} from "../utils/textAnalyzer";

export const StatsCard = () => {
  const text = useCounterStore((state) => state.text);
  const excludeSpaces = useCounterStore((state) => state.excludeSpaces);
  const totalCharacter = countCharacters(text, excludeSpaces);
  const totalWords = countWords(text);
  const totalSentences = countSentences(text);

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 text-black w-full justify-between">
      <div className="flex flex-col flex-1 min-h-40 gap-2 justify-center rounded-lg bg-purple-400 p-4 bg-[url('/assets/images/pattern-character-count.svg')] bg-no-repeat bg-[position:right_-30px_top_0px]">
        <h2 className="text-6xl font-bold">{totalCharacter}</h2>
        <p className="text-2xl">Total Characters</p>
      </div>
      <div className="flex flex-col flex-1 min-h-40 gap-2 justify-center rounded-lg bg-yellow-500 p-4 bg-[url('/assets/images/pattern-word-count.svg')] bg-no-repeat bg-[position:right_-30px_top_0px]">
        <h2 className="text-6xl font-bold">{totalWords}</h2>
        <p className="text-2xl">Words Count</p>
      </div>
      <div className="flex flex-col flex-1 min-h-40 gap-2 justify-center rounded-lg bg-orange-500 p-4 bg-[url('/assets/images/pattern-sentence-count.svg')] bg-no-repeat bg-[position:right_-30px_top_0px]">
        <h2 className="text-6xl font-bold">{totalSentences}</h2>
        <p className="text-2xl">Sentences Count</p>
      </div>
    </div>
  );
};
