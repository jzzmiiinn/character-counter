import { useCounterStore } from "../store/counterStore";
import { getLetterDensity } from "../utils/textAnalyzer";

export const LetterDensity = () => {
  const text = useCounterStore((state) => state.text);
  const letterDensity = getLetterDensity(text);
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-bold">Letter Density</h2>
        {letterDensity.length === 0 ? (
          <p>No characters found. Start typing to see letter density.</p>
        ) : (
          letterDensity.map((item) => (
            <div key={item.letter} className="flex flex-row gap-2 items-center">
              <span className="font-semibold">{item.letter.toUpperCase()}</span>

              <div className="h-3 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                <div
                  className="h-full rounded-full bg-purple-500"
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
              <div className="flex items-center gap-1 whitespace-nowrap">
                <span>{item.count}</span>
                <span>({item.percentage.toFixed(2)}%)</span>
              </div>
            </div>
          ))
        )}{" "}
      </div>
    </div>
  );
};
