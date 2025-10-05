import { templateDialogs as travel } from './templateDialogs_travel';
import { templateDialogs as meeting } from './templateDialogs_meeting';
import { templateDialogs as presentation } from './templateDialogs_presentation';
import { templateDialogs as business } from './templateDialogs_business';
import { templateDialogs as daily } from './templateDialogs_daily';
import { templateDialogs as restaurant } from './templateDialogs_restaurant';
import { templateDialogs as shopping } from './templateDialogs_shopping';

import { TopicType, LevelType, PracticeScene } from '../types';

export const allDialogs: Record<TopicType, Record<LevelType, readonly PracticeScene[]>> = {
  travel: travel,
  shopping: shopping,
  business: business,
  restaurant: restaurant,
  meeting: meeting,
  presentation: presentation,
  daily: daily,
};


export function getPracticeScenes(topicKey: TopicType, level: LevelType): readonly PracticeScene[] {
  const topic = allDialogs?.[topicKey];
  if (!topic) {
    console.warn(`⚠️ getPracticeScenes: unknown topicKey=${topicKey}`);
    return [];
  }

  const scenes = topic[level];
  if (!scenes || !Array.isArray(scenes)) {
    console.warn(`⚠️ getPracticeScenes: no scenes for topic=${topicKey}, level=${level}`);
    return [];
  }

  return scenes;
}
