interface SNSOption {
  id: string;
  name: string;
  icon?: string;
}

export function getSNSOptions(language: string): SNSOption[] {
  const defaultOptions: Record<string, SNSOption[]> = {
    en: [
      { id: 'google', name: 'Google' },
      { id: 'naver', name: 'Naver' },
      { id: 'yahoo', name: 'Yahoo' },
    ],
    ko: [
      { id: 'naver', name: '네이버' },
      { id: 'google', name: '구글' },
    ],
    ja: [
      { id: 'yahoo', name: 'ヤフー' },
      { id: 'google', name: 'グーグル' },
    ],
  };

  return defaultOptions[language] || defaultOptions['en'];
}
