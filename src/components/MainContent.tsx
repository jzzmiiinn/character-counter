import { TextInput } from "./TextInput";
import { StatsCard } from "./StatsCard";
import { LetterDensity } from "./LetterDensity";

export const MainContent = () => {
  return (
    <main className="flex flex-col gap-8">
      <h1 className="text-4xl md:text-6xl font-bold text-center w-2xl mx-auto">
        Analyze your text in real-time.
      </h1>
      <TextInput />
      <StatsCard />
      <LetterDensity />
    </main>
  );
};
