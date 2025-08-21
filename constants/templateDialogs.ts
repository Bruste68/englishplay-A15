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
  return allDialogs?.[topicKey]?.[level] ?? [];
}