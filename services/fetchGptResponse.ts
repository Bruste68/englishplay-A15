import axios from 'axios';
import { OPENAI_API_KEY } from '../constants/secrets';

interface FetchOptions {
  systemPrompt?: string;
  ignorePreviousDialogs?: boolean;
  temperature?: number;
  language?: string;
}

export async function fetchGptResponse(prompt: string, options: FetchOptions = {}): Promise<string> {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [
          { 
            role: 'system', 
            content: options.systemPrompt || 
              (options.language === 'ko' ? '당신은 도움이 되는 영어 선생님입니다.' :
               options.language === 'ja' ? 'あなたは役立つ英語の先生です。' :
               options.language === 'zh' ? '你是一位有帮助的英语老师。' :
               'You are a helpful English teacher.')
          },
          { role: 'user', content: prompt }
        ],
        temperature: options.temperature || 0.7
      },
      {
        headers: {
          Authorization: `Bearer ${OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );
    return response.data.choices[0].message.content.trim();
  } catch (error) {
    console.error('GPT error:', error);
    return options.language === 'ko' ? '답변을 불러오는 중 오류가 발생했습니다.' :
           options.language === 'ja' ? '応答の取得中にエラーが発生しました。' :
           options.language === 'zh' ? '获取响应时出错。' :
           'An error occurred while fetching the response.';
  }
}