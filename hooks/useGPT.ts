// englishplay/hooks/useGPT.ts

import { OPENAI_API_KEY } from '../constants/secrets';

export async function fetchGptResponse(userInput: string): Promise<string> {
  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-4',
      messages: [
        { role: 'system', content: 'You are a friendly English tutor. Keep responses concise and helpful.' },
        { role: 'user', content: userInput },
      ],
      temperature: 0.7,
    }),
  });

  const data = await res.json();
  return data.choices?.[0]?.message?.content || 'Sorry, I could not understand.';
}