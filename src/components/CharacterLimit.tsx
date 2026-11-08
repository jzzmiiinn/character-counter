import { useCounterStore } from "../store/counterStore";
import { countCharacters } from "../utils/textAnalyzer";

export const CharacterLimit = () => {
  const text = useCounterStore((state) => state.text);

  const excludeSpaces = useCounterStore((state) => state.excludeSpaces);
  const setExcludeSpaces = useCounterStore((state) => state.setExcludeSpaces);

  const totalCharacters = countCharacters(text, excludeSpaces);

  const isLimitEnabled = useCounterStore((state) => state.isLimitEnabled);
  const setIsLimitEnabled = useCounterStore((state) => state.setIsLimitEnabled);

  const characterLimit = useCounterStore((state) => state.characterLimit);
  const setCharacterLimit = useCounterStore((state) => state.setCharacterLimit);

  const isOverLimit =
    isLimitEnabled &&
    characterLimit !== null &&
    Number.isInteger(characterLimit) &&
    characterLimit > 0 &&
    totalCharacters > characterLimit;
  return (
    <div className="flex flex-col gap-2">
      {isOverLimit && characterLimit !== null && (
        <p className="text-sm text-red-500">
          {totalCharacters - characterLimit}{" "}
          {totalCharacters - characterLimit === 1 ? "character" : "characters"}{" "}
          over the limit!
        </p>
      )}
      <div className="flex flex-row gap-6">
        <div className="flex gap-2 items-center">
          <input
            type="checkbox"
            id="exclude-spaces"
            checked={excludeSpaces}
            onChange={(e) => setExcludeSpaces(e.target.checked)}
          />
          <label className="text-preset-4" htmlFor="exclude-spaces">
            Exclude Spaces
          </label>
        </div>
        <div className="flex gap-2 items-center">
          <input
            type="checkbox"
            id="set-character-limit"
            checked={isLimitEnabled}
            onChange={(e) => setIsLimitEnabled(e.target.checked)}
          />
          <label className="text-preset-4" htmlFor="set-character-limit">
            Set Character Limit
          </label>
          {isLimitEnabled && (
            <input
              id="character-limit"
              min={1}
              step={1}
              aria-label="Character limit"
              type="number"
              value={characterLimit ?? ""}
              onChange={(e) => {
                const value = e.target.value;

                setCharacterLimit(value === "" ? null : Number(value));
              }}
              className="w-20 rounded-lg border bg-gray-100 p-2 focus:border-purple-500"
            />
          )}
        </div>
      </div>
    </div>
  );
};
