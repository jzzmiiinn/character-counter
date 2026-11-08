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
