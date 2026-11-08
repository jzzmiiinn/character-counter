import { TextInput } from "./TextInput";
import { CharacterLimit } from "./CharacterLimit";
import { ReadingTime } from "./ReadingTime";
import { StatsCard } from "./StatsCard";
import { LetterDensity } from "./LetterDensity";

export const MainContent = () => {
  return (
    <main className="flex flex-col gap-8">
      <h1 className="text-4xl md:text-6xl font-bold text-center max-w-2xl mx-auto">
        Analyze your text in real-time.
      </h1>
      <TextInput />
      <div className="flex flex-row justify-between items-center">
        <CharacterLimit />
        <ReadingTime />
      </div>
      <StatsCard />
      <LetterDensity />
    </main>
  );
};
