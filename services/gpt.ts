
import { OPENAI_API_KEY } from '../constants/secrets';

export async function fetchGptResponse(prompt: string): Promise<string> {
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.7,
      }),
    });

    const data = await response.json();
    return data.choices?.[0]?.message?.content?.trim() || 'No response from AI.';
  } catch (error) {
    console.error('❌ GPT API Error:', error);
    return 'Error contacting AI service.';
  }
}
