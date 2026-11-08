export const countWords = (text: string): number => {
  const words = text.trim().split(/\s+/).filter(Boolean);

  return words.length;
};

export const countSentences = (text: string): number => {
  const sentences = text
    .trim()
    .split(/[.!?]+/)
    .filter(Boolean);
  return sentences.length;
};
