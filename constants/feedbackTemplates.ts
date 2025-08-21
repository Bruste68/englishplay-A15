// constants/feedbackTemplates.ts
export const feedbackTemplates = {
  missingWord: (word: string) => `You missed the word \"${word}\". Try to say it clearly.`,
  multiple: (words: string[]) => `You missed these words: ${words.join(', ')}. Try to pronounce them clearly.`,
  perfect: "Perfect! Your pronunciation was very clear.",
};