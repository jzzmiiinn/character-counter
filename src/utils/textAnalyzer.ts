export const countWords = (text: string): number => {
  const words = text.trim().split(/\s+/).filter(Boolean);

  return words.length;
};

export const countSentences = (text: string): number => {
  const sentences = text
    .trim()
    .split(/[.!?]+/)
    .map((sentence) => sentence.trim())
    .filter(Boolean);

  return sentences.length;
};

export const calculateReadingTime = (text: string): number => {
  const wordsCount = countWords(text);
  const wordsPerMinute = 200;

  return wordsCount / wordsPerMinute;
};

export const countCharacters = (
  text: string,
  excludeSpaces: boolean,
): number => {
  const textToCount = excludeSpaces ? text.replace(/\s/g, "") : text;

  return textToCount.length;
};

export interface LetterDensityItem {
  letter: string;
  count: number;
  percentage: number;
}

export const getLetterDensity = (text: string): LetterDensityItem[] => {
  const letterCounts: Record<string, number> = {};

  const letters = text.toLowerCase().match(/[a-z]/g) ?? [];

  const totalLetters = letters.length;

  for (const letter of letters) {
    letterCounts[letter] = (letterCounts[letter] || 0) + 1;
  }

  const results = Object.entries(letterCounts).map(([letter, count]) => ({
    letter,
    count,
    percentage: (count / totalLetters) * 100,
  }));

  return results.sort((a, b) => b.count - a.count);
};
