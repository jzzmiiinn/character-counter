import { useCounterStore } from "../store/counterStore";

export const CharacterLimit = () => {
  const excludeSpaces = useCounterStore((state) => state.excludeSpaces);

  const setExcludeSpaces = useCounterStore((state) => state.setExcludeSpaces);
  return (
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
        <input type="checkbox" id="set-character-limit" />
        <label className="text-preset-4" htmlFor="set-character-limit">
          Set Character Limit
        </label>
      </div>
    </div>
  );
};
