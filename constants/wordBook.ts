// app/constants/wordBook.ts
import { meetingWordbook } from "./templateDialogs_meeting_word";
import { dailyWordbook } from "./templateDialogs_daily_word";
import { restaurantWordbook } from "./templateDialogs_restaurant_word";
import { presentationWordbook } from "./templateDialogs_presentation_word";
import { businessWordbook } from "./templateDialogs_business_word";
import { shoppingWordbook } from "./templateDialogs_shopping_word";
import { travelWordbook } from "./templateDialogs_travel_word";

// 개별 export (선택)
export { meetingWordbook, dailyWordbook, restaurantWordbook, presentationWordbook, businessWordbook, shoppingWordbook, travelWordbook };

// 토픽 키 → 워드북 매핑
export const wordbooks: Record<string, any> = {
  meeting: meetingWordbook,
  daily: dailyWordbook,
  restaurant: restaurantWordbook,
  presentation: presentationWordbook, // ✅ 가장 중요
  business: businessWordbook,
  shopping: shoppingWordbook,
  travel: travelWordbook,
};
