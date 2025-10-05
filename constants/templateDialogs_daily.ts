import { LevelType, PracticeScene } from '../types';

export const templateDialogs: Record<LevelType, readonly PracticeScene[]> = {
  "beginner": [
    {
      "description": {
        "en": "Morning greetings at home",
        "ko": "집에서 아침 인사",
        "zh": "在家的早晨问候",
        "ja": "家での朝の挨拶",
        "vi": "Lời chào buổi sáng ở nhà"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Good morning! Did you sleep well?",
          "translations": {
            "ko": "좋은 아침! 잘 잤어요?",
            "zh": "早安！你睡得好吗？",
            "ja": "おはよう！よく眠れた？",
            "vi": "Chào buổi sáng! Bạn đã ngủ ngon chưa?",
            "en": "Good morning! Did you sleep well?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I did. How about you?",
          "translations": {
            "ko": "네, 잘 잤어요. 당신은요?",
            "zh": "是的，我睡得很好。你呢？",
            "ja": "うん、あなたは？",
            "vi": "Vâng, tôi đã ngủ ngon. Còn bạn thì sao?",
            "en": "Yes, I did. How about you?"
          }
        },
        {
          "role": "ai",
          "text": "Pretty well. Ready to start the day?",
          "translations": {
            "ko": "꽤 잘 잤어요. 하루를 시작할 준비 됐어요?",
            "zh": "还不错。准备开始新的一天了吗？",
            "ja": "まあまあ。今日の始まりに準備できてる？",
            "vi": "Khá ổn. Sẵn sàng bắt đầu một ngày mới chưa?",
            "en": "Pretty well. Ready to start the day?"
          }
        },
        {
          "role": "user",
          "text": "I think so. What time is it?",
          "translations": {
            "ko": "그런 것 같아요. 지금 몇 시죠?",
            "zh": "我想是的。现在几点了？",
            "ja": "多分ね。何時？",
            "vi": "Tôi nghĩ là vậy. Bây giờ là mấy giờ rồi?",
            "en": "I think so. What time is it?"
          }
        },
        {
          "role": "ai",
          "text": "It’s 7:30 AM. Do you want coffee?",
          "translations": {
            "ko": "오전 7시 30분이에요. 커피 드릴까요?",
            "zh": "现在是早上7:30。你想喝咖啡吗？",
            "ja": "7時30分だよ。コーヒーはいる？",
            "vi": "Bây giờ là 7:30 sáng. Bạn có muốn uống cà phê không?",
            "en": "It’s 7:30 AM. Do you want coffee?"
          }
        },
        {
          "role": "user",
          "text": "Yes, please. That would be great.",
          "translations": {
            "ko": "네, 부탁드릴게요. 좋네요.",
            "zh": "是的，谢谢。那太好了。",
            "ja": "はい、お願いします。それがいいね。",
            "vi": "Vâng, xin vui lòng. Thật tuyệt.",
            "en": "Yes, please. That would be great."
          }
        },
        {
          "role": "ai",
          "text": "How do you take it?",
          "translations": {
            "ko": "어떻게 드시겠어요?",
            "zh": "你要怎么喝？",
            "ja": "どうやって飲む？",
            "vi": "Bạn muốn pha thế nào?",
            "en": "How do you take it?"
          }
        },
        {
          "role": "user",
          "text": "Just a little milk, no sugar.",
          "translations": {
            "ko": "우유 조금 넣고, 설탕은 빼 주세요.",
            "zh": "只加一点牛奶，不加糖。",
            "ja": "ミルク少々、砂糖なし。",
            "vi": "Chỉ một chút sữa, không đường.",
            "en": "Just a little milk, no sugar."
          }
        },
        {
          "role": "ai",
          "text": "Alright, coming right up.",
          "translations": {
            "ko": "알겠어요, 바로 만들어 드릴게요.",
            "zh": "好的，马上就好。",
            "ja": "了解、すぐに用意するね。",
            "vi": "Được, tôi sẽ pha ngay.",
            "en": "Alright, coming right up."
          }
        },
        {
          "role": "user",
          "text": "Thanks!",
          "translations": {
            "ko": "감사합니다!",
            "zh": "谢谢！",
            "ja": "ありがとう！",
            "vi": "Cảm ơn!",
            "en": "Thanks!"
          }
        },
        {
          "role": "ai",
          "text": "Do you have anything planned this morning?",
          "translations": {
            "ko": "오늘 아침에 무슨 일정이 있나요?",
            "zh": "你今天早上有什么计划吗？",
            "ja": "今朝何か予定ある？",
            "vi": "Bạn có kế hoạch gì vào sáng nay không?",
            "en": "Do you have anything planned this morning?"
          }
        },
        {
          "role": "user",
          "text": "Just checking my emails.",
          "translations": {
            "ko": "이메일 확인만 하려고요.",
            "zh": "只是查看我的邮件。",
            "ja": "メールをチェックするだけ。",
            "vi": "Chỉ kiểm tra email thôi.",
            "en": "Just checking my emails."
          }
        },
        {
          "role": "ai",
          "text": "Let me know if you need help with breakfast.",
          "translations": {
            "ko": "아침식사 도와드릴 건 없는지 말씀해주세요.",
            "zh": "如果你需要帮忙做早餐，告诉我。",
            "ja": "朝食の準備で助けが必要なら教えてね。",
            "vi": "Nếu bạn cần giúp với bữa sáng, hãy cho tôi biết.",
            "en": "Let me know if you need help with breakfast."
          }
        },
        {
          "role": "user",
          "text": "Sure, I will.",
          "translations": {
            "ko": "알겠어요, 그럴게요.",
            "zh": "好的，我会的。",
            "ja": "うん、そうするよ。",
            "vi": "Được, tôi sẽ nói.",
            "en": "Sure, I will."
          }
        },
        {
          "role": "ai",
          "text": "It’s a sunny day today!",
          "translations": {
            "ko": "오늘은 날씨가 맑네요!",
            "zh": "今天是个晴天！",
            "ja": "今日は晴れだね！",
            "vi": "Hôm nay trời nắng!",
            "en": "It’s a sunny day today!"
          }
        },
        {
          "role": "user",
          "text": "That’s nice. Good for a morning walk.",
          "translations": {
            "ko": "그래요. 아침 산책하기 좋겠네요.",
            "zh": "那很好。适合早上散步。",
            "ja": "それはいいね。朝の散歩にいいね。",
            "vi": "Thật tốt. Thích hợp để đi dạo buổi sáng.",
            "en": "That’s nice. Good for a morning walk."
          }
        },
        {
          "role": "ai",
          "text": "Definitely. Let’s enjoy it.",
          "translations": {
            "ko": "그러게요. 즐기면서 보내요.",
            "zh": "当然。让我们好好享受。",
            "ja": "確かに。楽しもう。",
            "vi": "Chắc chắn. Hãy tận hưởng nó.",
            "en": "Definitely. Let’s enjoy it."
          }
        },
        {
          "role": "user",
          "text": "Agreed.",
          "translations": {
            "ko": "동의해요.",
            "zh": "同意。",
            "ja": "同意。",
            "vi": "Đồng ý.",
            "en": "Agreed."
          }
        },
        {
          "role": "ai",
          "text": "Okay, I’ll make toast while the coffee brews.",
          "translations": {
            "ko": "커피를 내리는 동안 토스트를 만들게요.",
            "zh": "好的，我在咖啡煮的时候做吐司。",
            "ja": "コーヒーが淹れてる間にトーストを作るね。",
            "vi": "Được, tôi sẽ làm bánh mì nướng trong khi pha cà phê.",
            "en": "Okay, I’ll make toast while the coffee brews."
          }
        },
        {
          "role": "user",
          "text": "Perfect.",
          "translations": {
            "ko": "좋아요.",
            "zh": "完美。",
            "ja": "パーフェクト。",
            "vi": "Hoàn hảo.",
            "en": "Perfect."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Talking about the weather",
        "ko": "날씨에 대해 이야기하기",
        "zh": "谈论天气",
        "ja": "天気について話す",
        "vi": "Nói về thời tiết"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "It looks cloudy today.",
          "translations": {
            "ko": "오늘은 흐린 것 같아요.",
            "zh": "今天看起来有些阴。",
            "ja": "今日は曇りそうだね。",
            "vi": "Hôm nay trời có vẻ u ám.",
            "en": "It looks cloudy today."
          }
        },
        {
          "role": "user",
          "text": "Yes, I think it might rain later.",
          "translations": {
            "ko": "네, 나중에 비가 올 것 같아요.",
            "zh": "是的，我觉得可能会下雨。",
            "ja": "うん、後で雨が降るかもしれないね。",
            "vi": "Vâng, tôi nghĩ có thể sẽ mưa sau.",
            "en": "Yes, I think it might rain later."
          }
        },
        {
          "role": "ai",
          "text": "Did you bring an umbrella?",
          "translations": {
            "ko": "우산 가져왔어요?",
            "zh": "你带伞了吗？",
            "ja": "傘を持ってきた？",
            "vi": "Bạn có mang theo ô không?",
            "en": "Did you bring an umbrella?"
          }
        },
        {
          "role": "user",
          "text": "No, I forgot.",
          "translations": {
            "ko": "아니요, 깜빡했어요.",
            "zh": "没有，我忘了。",
            "ja": "いや、忘れた。",
            "vi": "Không, tôi quên mất.",
            "en": "No, I forgot."
          }
        },
        {
          "role": "ai",
          "text": "Want to borrow mine?",
          "translations": {
            "ko": "제 것 빌려드릴까요?",
            "zh": "要借我的吗？",
            "ja": "私のを借りる？",
            "vi": "Bạn muốn mượn ô của tôi không?",
            "en": "Want to borrow mine?"
          }
        },
        {
          "role": "user",
          "text": "Thanks, that would help.",
          "translations": {
            "ko": "감사합니다, 도움이 될 것 같아요.",
            "zh": "谢谢，那会有帮助。",
            "ja": "ありがとう、それが助かるよ。",
            "vi": "Cảm ơn, điều đó sẽ giúp ích.",
            "en": "Thanks, that would help."
          }
        },
        {
          "role": "ai",
          "text": "The forecast says showers in the afternoon.",
          "translations": {
            "ko": "예보에는 오후에 소나기가 온다고 하네요.",
            "zh": "预报说下午会有阵雨。",
            "ja": "天気予報では午後に雨が降るって言ってたよ。",
            "vi": "Dự báo thời tiết nói sẽ có mưa vào buổi chiều.",
            "en": "The forecast says showers in the afternoon."
          }
        },
        {
          "role": "user",
          "text": "I guess I should go out early.",
          "translations": {
            "ko": "그럼 일찍 나가야겠네요.",
            "zh": "我想我应该早点出门。",
            "ja": "早めに出かけた方がいいかもしれないね。",
            "vi": "Tôi nghĩ tôi nên ra ngoài sớm.",
            "en": "I guess I should go out early."
          }
        },
        {
          "role": "ai",
          "text": "Good idea. It’s cooler today too.",
          "translations": {
            "ko": "좋은 생각이에요. 오늘은 좀 더 선선하네요.",
            "zh": "好主意。今天也更凉快。",
            "ja": "いい考えだ。今日は涼しいしね。",
            "vi": "Ý tưởng hay. Hôm nay cũng mát hơn.",
            "en": "Good idea. It’s cooler today too."
          }
        },
        {
          "role": "user",
          "text": "I like this kind of weather.",
          "translations": {
            "ko": "이런 날씨 좋아해요.",
            "zh": "我喜欢这种天气。",
            "ja": "この種の天気が好きだよ。",
            "vi": "Tôi thích thời tiết như thế này.",
            "en": "I like this kind of weather."
          }
        },
        {
          "role": "ai",
          "text": "Me too. Not too hot, not too cold.",
          "translations": {
            "ko": "저도요. 너무 덥지도, 춥지도 않아서요.",
            "zh": "我也是。不太热，也不太冷。",
            "ja": "私もだよ。暑すぎず、寒すぎず。",
            "vi": "Tôi cũng vậy. Không quá nóng, cũng không quá lạnh.",
            "en": "Me too. Not too hot, not too cold."
          }
        },
        {
          "role": "user",
          "text": "Exactly.",
          "translations": {
            "ko": "그렇죠.",
            "zh": "没错。",
            "ja": "まさにその通り。",
            "vi": "Chính xác.",
            "en": "Exactly."
          }
        },
        {
          "role": "ai",
          "text": "Should we close the windows?",
          "translations": {
            "ko": "창문을 닫을까요?",
            "zh": "我们应该关上窗户吗？",
            "ja": "窓を閉めるべきかな？",
            "vi": "Chúng ta có nên đóng cửa sổ không?",
            "en": "Should we close the windows?"
          }
        },
        {
          "role": "user",
          "text": "Yes, just in case.",
          "translations": {
            "ko": "네, 혹시 모르니까요.",
            "zh": "是的，以防万一。",
            "ja": "うん、念のために。",
            "vi": "Vâng, để phòng hờ.",
            "en": "Yes, just in case."
          }
        },
        {
          "role": "ai",
          "text": "Alright, I’ll get that.",
          "translations": {
            "ko": "알겠어요, 제가 할게요.",
            "zh": "好的，我来做。",
            "ja": "了解、やっておくね。",
            "vi": "Được, tôi sẽ đóng.",
            "en": "Alright, I’ll get that."
          }
        },
        {
          "role": "user",
          "text": "Thanks.",
          "translations": {
            "ko": "감사합니다.",
            "zh": "谢谢。",
            "ja": "ありがとう。",
            "vi": "Cảm ơn.",
            "en": "Thanks."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Making breakfast",
        "ko": "아침식사 준비하기",
        "zh": "做早餐",
        "ja": "朝食を作る",
        "vi": "Chuẩn bị bữa sáng"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "What should we have for breakfast?",
          "translations": {
            "ko": "아침식사로 무엇을 먹을까요?",
            "zh": "我们早餐吃什么？",
            "ja": "朝食に何を食べようか？",
            "vi": "Chúng ta nên ăn gì vào bữa sáng?",
            "en": "What should we have for breakfast?"
          }
        },
        {
          "role": "user",
          "text": "How about eggs and toast?",
          "translations": {
            "ko": "계란과 토스트는 어떠세요?",
            "zh": "要不吃鸡蛋和吐司？",
            "ja": "卵とトーストはどう？",
            "vi": "Trứng và bánh mì nướng thì sao?",
            "en": "How about eggs and toast?"
          }
        },
        {
          "role": "ai",
          "text": "Sounds good. Scrambled or fried?",
          "translations": {
            "ko": "좋아요. 스크램블로 할까요, 프라이로 할까요?",
            "zh": "听起来不错。炒蛋还是煎蛋？",
            "ja": "いいね。スクランブルにする？それともフライ？",
            "vi": "Nghe tốt. Trứng chiên hay trứng đánh?",
            "en": "Sounds good. Scrambled or fried?"
          }
        },
        {
          "role": "user",
          "text": "Scrambled, please.",
          "translations": {
            "ko": "스크램블로 부탁드려요.",
            "zh": "炒蛋，请。",
            "ja": "スクランブルでお願い。",
            "vi": "Trứng đánh, xin vui lòng.",
            "en": "Scrambled, please."
          }
        },
        {
          "role": "ai",
          "text": "Do you want juice or coffee?",
          "translations": {
            "ko": "주스나 커피 중에 무엇을 드시겠어요?",
            "zh": "你想要果汁还是咖啡？",
            "ja": "ジュースかコーヒーがいい？",
            "vi": "Bạn muốn uống nước ép hay cà phê?",
            "en": "Do you want juice or coffee?"
          }
        },
        {
          "role": "user",
          "text": "Juice, please.",
          "translations": {
            "ko": "주스로 할게요.",
            "zh": "果汁，请。",
            "ja": "ジュースで。",
            "vi": "Nước ép, xin vui lòng.",
            "en": "Juice, please."
          }
        },
        {
          "role": "ai",
          "text": "Orange or apple?",
          "translations": {
            "ko": "오렌지 주스나 사과 주스 중에 어떤 걸로 할까요?",
            "zh": "橙汁还是苹果汁？",
            "ja": "オレンジかリンゴ？",
            "vi": "Cam hay táo?",
            "en": "Orange or apple?"
          }
        },
        {
          "role": "user",
          "text": "Orange.",
          "translations": {
            "ko": "오렌지 주스요.",
            "zh": "橙汁。",
            "ja": "オレンジ。",
            "vi": "Cam.",
            "en": "Orange."
          }
        },
        {
          "role": "ai",
          "text": "Okay, I’ll start cooking the eggs.",
          "translations": {
            "ko": "알겠어요, 계란부터 요리하겠습니다.",
            "zh": "好的，我开始做鸡蛋。",
            "ja": "了解、卵を焼き始めるね。",
            "vi": "Được, tôi sẽ bắt đầu nấu trứng.",
            "en": "Okay, I’ll start cooking the eggs."
          }
        },
        {
          "role": "user",
          "text": "Can I help with anything?",
          "translations": {
            "ko": "무엇이든 도와드릴까요?",
            "zh": "我可以帮忙做什么？",
            "ja": "何か手伝えることある？",
            "vi": "Tôi có thể giúp gì không?",
            "en": "Can I help with anything?"
          }
        },
        {
          "role": "ai",
          "text": "Sure, can you slice the bread?",
          "translations": {
            "ko": "그럼, 빵을 잘라주실 수 있나요?",
            "zh": "可以，请你切面包。",
            "ja": "うん、パンをスライスしてくれる？",
            "vi": "Được, bạn có thể cắt bánh mì không?",
            "en": "Sure, can you slice the bread?"
          }
        },
        {
          "role": "user",
          "text": "On it.",
          "translations": {
            "ko": "알겠습니다.",
            "zh": "好的。",
            "ja": "やっておくね。",
            "vi": "Tôi sẽ làm ngay.",
            "en": "On it."
          }
        },
        {
          "role": "ai",
          "text": "The eggs are almost done.",
          "translations": {
            "ko": "계란이 거의 다 됐어요.",
            "zh": "鸡蛋快好了。",
            "ja": "卵はもうすぐ出来上がるよ。",
            "vi": "Trứng gần xong rồi.",
            "en": "The eggs are almost done."
          }
        },
        {
          "role": "user",
          "text": "Bread is ready too.",
          "translations": {
            "ko": "빵도 준비됐어요.",
            "zh": "面包也准备好了。",
            "ja": "パンも準備できたよ。",
            "vi": "Bánh mì cũng đã sẵn sàng.",
            "en": "Bread is ready too."
          }
        },
        {
          "role": "ai",
          "text": "Let’s eat!",
          "translations": {
            "ko": "식사합시다!",
            "zh": "我们吃吧！",
            "ja": "食べよう！",
            "vi": "Chúng ta ăn thôi!",
            "en": "Let’s eat!"
          }
        },
        {
          "role": "user",
          "text": "Looks delicious.",
          "translations": {
            "ko": "맛있겠네요.",
            "zh": "看起来很美味。",
            "ja": "おいしそう。",
            "vi": "Trông ngon quá.",
            "en": "Looks delicious."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Discussing daily plans",
        "ko": "일상 계획에 대해 이야기하기",
        "zh": "讨论日常计划",
        "ja": "一日の計画を話し合う",
        "vi": "Thảo luận về kế hoạch hàng ngày"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "What do you have planned today?",
          "translations": {
            "ko": "오늘 무슨 일정이 있나요?",
            "zh": "你今天有什么计划？",
            "ja": "今日何か予定ある？",
            "vi": "Bạn có kế hoạch gì hôm nay?",
            "en": "What do you have planned today?"
          }
        },
        {
          "role": "user",
          "text": "I have a meeting at 10.",
          "translations": {
            "ko": "10시에 회의가 있어요.",
            "zh": "我10点有个会议。",
            "ja": "10時に会議があるんだ。",
            "vi": "Tôi có một cuộc họp lúc 10 giờ.",
            "en": "I have a meeting at 10."
          }
        },
        {
          "role": "ai",
          "text": "Anything else after that?",
          "translations": {
            "ko": "그 이후에 또 무슨 일이 있나요?",
            "zh": "之后还有其他事情吗？",
            "ja": "それ以外に何かある？",
            "vi": "Còn gì khác sau đó không?",
            "en": "Anything else after that?"
          }
        },
        {
          "role": "user",
          "text": "Maybe some grocery shopping.",
          "translations": {
            "ko": "식료품 쇼핑을 좀 해야겠어요.",
            "zh": "可能要去买些杂货。",
            "ja": "多分、食料品の買い物をするかな。",
            "vi": "Có thể tôi sẽ đi mua sắm đồ tạp hóa.",
            "en": "Maybe some grocery shopping."
          }
        },
        {
          "role": "ai",
          "text": "Do you want me to come with you?",
          "translations": {
            "ko": "같이 가시겠어요?",
            "zh": "你想要我陪你去吗？",
            "ja": "一緒に行くべきかな？",
            "vi": "Bạn có muốn tôi đi cùng không?",
            "en": "Do you want me to come with you?"
          }
        },
        {
          "role": "user",
          "text": "Sure, that would be nice.",
          "translations": {
            "ko": "네, 좋아요.",
            "zh": "当然，那会很好。",
            "ja": "うん、それがいいね。",
            "vi": "Được, điều đó thật tốt.",
            "en": "Sure, that would be nice."
          }
        },
        {
          "role": "ai",
          "text": "Great. What time should we go?",
          "translations": {
            "ko": "좋아요. 몇 시에 갈까요?",
            "zh": "好的。我们什么时候去？",
            "ja": "いいね。何時に行く？",
            "vi": "Tốt. Chúng ta nên đi lúc mấy giờ?",
            "en": "Great. What time should we go?"
          }
        },
        {
          "role": "user",
          "text": "Around 2 PM?",
          "translations": {
            "ko": "오후 2시쯤에요?",
            "zh": "大约下午2点？",
            "ja": "2時頃？",
            "vi": "Khoảng 2 giờ chiều?",
            "en": "Around 2 PM?"
          }
        },
        {
          "role": "ai",
          "text": "That works. Should we make a list?",
          "translations": {
            "ko": "그 시간 괜찮아요. 목록을 만들어볼까요?",
            "zh": "可以。我们要列个清单吗？",
            "ja": "それでいいよ。リストを作るべき？",
            "vi": "Được. Chúng ta có nên làm danh sách không?",
            "en": "That works. Should we make a list?"
          }
        },
        {
          "role": "user",
          "text": "Yes, let’s do that now.",
          "translations": {
            "ko": "네, 지금 만들어봅시다.",
            "zh": "是的，我们现在就做。",
            "ja": "うん、今すぐそれをやろう。",
            "vi": "Vâng, hãy làm ngay bây giờ.",
            "en": "Yes, let’s do that now."
          }
        },
        {
          "role": "ai",
          "text": "Okay, I’ll grab a pen.",
          "translations": {
            "ko": "알겠어요, 펜을 가져올게요.",
            "zh": "好的，我去拿笔。",
            "ja": "了解、ペンを取ってくるね。",
            "vi": "Được, tôi sẽ lấy bút.",
            "en": "Okay, I’ll grab a pen."
          }
        },
        {
          "role": "user",
          "text": "Thanks.",
          "translations": {
            "ko": "감사합니다.",
            "zh": "谢谢。",
            "ja": "ありがとう。",
            "vi": "Cảm ơn.",
            "en": "Thanks."
          }
        },
        {
          "role": "ai",
          "text": "I’ll check the fridge while you write.",
          "translations": {
            "ko": "당신이 쓰는 동안 저는 냉장고를 확인해볼게요.",
            "zh": "你写的时候我去查看冰箱。",
            "ja": "書いてる間に冷蔵庫をチェックするね。",
            "vi": "Tôi sẽ kiểm tra tủ lạnh trong khi bạn viết.",
            "en": "I’ll check the fridge while you write."
          }
        },
        {
          "role": "user",
          "text": "Perfect.",
          "translations": {
            "ko": "좋아요.",
            "zh": "完美。",
            "ja": "パーフェクト。",
            "vi": "Hoàn hảo.",
            "en": "Perfect."
          }
        },
        {
          "role": "ai",
          "text": "Let’s get everything done early.",
          "translations": {
            "ko": "일찍 다 끝내봅시다.",
            "zh": "我们尽早把所有事情做完。",
            "ja": "早めに全てを終わらせよう。",
            "vi": "Hãy hoàn thành mọi thứ sớm.",
            "en": "Let’s get everything done early."
          }
        },
        {
          "role": "user",
          "text": "Agreed!",
          "translations": {
            "ko": "동의해요!",
            "zh": "同意！",
            "ja": "同意！",
            "vi": "Đồng ý!",
            "en": "Agreed!"
          }
        }
      ]
    },
    {
      "description": {
        "en": "Shopping for groceries",
        "ko": "식료품 쇼핑하기",
        "zh": "买杂货",
        "ja": "食料品の買い物",
        "vi": "Mua sắm đồ tạp hóa"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "What do we need from the store?",
          "translations": {
            "ko": "스토어에서 무엇이 필요하죠?",
            "zh": "我们需要从商店买什么？",
            "ja": "何を買う必要がある？",
            "vi": "Chúng ta cần gì từ cửa hàng?",
            "en": "What do we need from the store?"
          }
        },
        {
          "role": "user",
          "text": "Milk, eggs, and bread for sure.",
          "translations": {
            "ko": "우유, 계란, 빵은 꼭 필요해요.",
            "zh": "肯定需要牛奶，鸡蛋和面包。",
            "ja": "絶対にミルク、卵、パンが必要だね。",
            "vi": "Sữa, trứng, và bánh mì chắc chắn.",
            "en": "Milk, eggs, and bread for sure."
          }
        },
        {
          "role": "ai",
          "text": "Do we still have vegetables?",
          "translations": {
            "ko": "야채는 아직 남아있나요?",
            "zh": "我们还有蔬菜吗？",
            "ja": "まだ野菜はある？",
            "vi": "Chúng ta còn rau không?",
            "en": "Do we still have vegetables?"
          }
        },
        {
          "role": "user",
          "text": "Not really, let’s get some.",
          "translations": {
            "ko": "별로 없어요, 사야겠어요.",
            "zh": "已经没有了，我们去买一些。",
            "ja": "あまりないから、買っておこう。",
            "vi": "Không thực sự, hãy mua thêm.",
            "en": "Not really, let’s get some."
          }
        },
        {
          "role": "ai",
          "text": "Carrots and spinach?",
          "translations": {
            "ko": "당근이랑 시금치는 어때요?",
            "zh": "要买胡萝卜和菠菜吗？",
            "ja": "ニンジンとほうれん草？",
            "vi": "Cà rốt và rau chân vịt?",
            "en": "Carrots and spinach?"
          }
        },
        {
          "role": "user",
          "text": "Yes, and maybe some tomatoes.",
          "translations": {
            "ko": "네, 그리고 토마토도 좀 사요.",
            "zh": "是的，也许还要一些番茄。",
            "ja": "うん、それにトマトもいいかも。",
            "vi": "Vâng, và có thể thêm một ít cà chua.",
            "en": "Yes, and maybe some tomatoes."
          }
        },
        {
          "role": "ai",
          "text": "What about fruit?",
          "translations": {
            "ko": "과일은요?",
            "zh": "水果呢？",
            "ja": "フルーツはどう？",
            "vi": "Còn về trái cây thì sao?",
            "en": "What about fruit?"
          }
        },
        {
          "role": "user",
          "text": "Bananas and apples.",
          "translations": {
            "ko": "바나나랑 사과요.",
            "zh": "香蕉和苹果。",
            "ja": "バナナとリンゴ。",
            "vi": "Chuối và táo.",
            "en": "Bananas and apples."
          }
        },
        {
          "role": "ai",
          "text": "Anything for snacks?",
          "translations": {
            "ko": "간식은요?",
            "zh": "需要买零食吗？",
            "ja": "スナックは？",
            "vi": "Có gì để ăn nhẹ không?",
            "en": "Anything for snacks?"
          }
        },
        {
          "role": "user",
          "text": "Let’s get some crackers.",
          "translations": {
            "ko": "크래커 좀 사요.",
            "zh": "我们买些饼干吧。",
            "ja": "クラッカーを買おう。",
            "vi": "Hãy mua một ít bánh quy.",
            "en": "Let’s get some crackers."
          }
        },
        {
          "role": "ai",
          "text": "Do we need rice?",
          "translations": {
            "ko": "쌀은 필요해요?",
            "zh": "我们需要大米吗？",
            "ja": "ごはんは必要？",
            "vi": "Chúng ta cần gạo không?",
            "en": "Do we need rice?"
          }
        },
        {
          "role": "user",
          "text": "Yes, one small bag.",
          "translations": {
            "ko": "네, 작은 봉지 하나요.",
            "zh": "是的，买一小袋。",
            "ja": "うん、小袋一つ。",
            "vi": "Vâng, một túi nhỏ.",
            "en": "Yes, one small bag."
          }
        },
        {
          "role": "ai",
          "text": "How about drinks?",
          "translations": {
            "ko": "음료는요?",
            "zh": "饮料呢？",
            "ja": "飲み物はどう？",
            "vi": "Còn về đồ uống thì sao?",
            "en": "How about drinks?"
          }
        },
        {
          "role": "user",
          "text": "We’re out of juice.",
          "translations": {
            "ko": "주스가 다 떨어졌어요.",
            "zh": "我们的果汁已经喝完了。",
            "ja": "ジュースがなくなったよ。",
            "vi": "Chúng ta hết nước trái cây rồi.",
            "en": "We’re out of juice."
          }
        },
        {
          "role": "ai",
          "text": "Okay, orange or grape?",
          "translations": {
            "ko": "알겠어요, 오렌지 주스나 포도 주스 중에 어떤 걸로 할까요?",
            "zh": "好的，橙汁还是葡萄汁？",
            "ja": "了解、オレンジかグレープ？",
            "vi": "Được, cam hay nho?",
            "en": "Okay, orange or grape?"
          }
        },
        {
          "role": "user",
          "text": "Orange, please.",
          "translations": {
            "ko": "오렌지 주스로 부탁드려요.",
            "zh": "橙汁，请。",
            "ja": "オレンジでお願い。",
            "vi": "Cam, xin vui lòng.",
            "en": "Orange, please."
          }
        },
        {
          "role": "ai",
          "text": "I’ll add it to the list.",
          "translations": {
            "ko": "목록에 추가할게요.",
            "zh": "我把它加到清单上。",
            "ja": "リストに追加するね。",
            "vi": "Tôi sẽ thêm nó vào danh sách.",
            "en": "I’ll add it to the list."
          }
        },
        {
          "role": "user",
          "text": "Great.",
          "translations": {
            "ko": "좋아요.",
            "zh": "太好了。",
            "ja": "いいね。",
            "vi": "Tốt.",
            "en": "Great."
          }
        },
        {
          "role": "ai",
          "text": "Let’s head out soon.",
          "translations": {
            "ko": "곧 나가봅시다.",
            "zh": "我们马上出发吧。",
            "ja": "すぐに出発しよう。",
            "vi": "Chúng ta hãy đi ngay.",
            "en": "Let’s head out soon."
          }
        },
        {
          "role": "user",
          "text": "I’m ready.",
          "translations": {
            "ko": "준비 됐어요.",
            "zh": "我准备好了。",
            "ja": "準備できたよ。",
            "vi": "Tôi đã sẵn sàng.",
            "en": "I’m ready."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Doing laundry",
        "ko": "빨래하기",
        "zh": "洗衣服",
        "ja": "洗濯をする",
        "vi": "Giặt đồ"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Is it laundry day today?",
          "translations": {
            "ko": "오늘 빨래하는 날이죠?",
            "zh": "今天是洗衣服的日子吗？",
            "ja": "今日は洗濯日？",
            "vi": "Hôm nay là ngày giặt đồ phải không?",
            "en": "Is it laundry day today?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I think so.",
          "translations": {
            "ko": "네, 그런 것 같아요.",
            "zh": "是的，我想是的。",
            "ja": "うん、そう思うよ。",
            "vi": "Vâng, tôi nghĩ vậy.",
            "en": "Yes, I think so."
          }
        },
        {
          "role": "ai",
          "text": "Do you have any dirty clothes?",
          "translations": {
            "ko": "더러운 옷 있나요?",
            "zh": "你有脏衣服吗？",
            "ja": "汚れた服はある？",
            "vi": "Bạn có quần áo bẩn không?",
            "en": "Do you have any dirty clothes?"
          }
        },
        {
          "role": "user",
          "text": "Yes, they’re in the basket.",
          "translations": {
            "ko": "네, 바구니에 있어요.",
            "zh": "有，都在篮子里。",
            "ja": "うん、バスケットに入ってるよ。",
            "vi": "Có, chúng ở trong giỏ.",
            "en": "Yes, they’re in the basket."
          }
        },
        {
          "role": "ai",
          "text": "Lights or darks first?",
          "translations": {
            "ko": "밝은 옷부터 할까요, 어두운 옷부터 할까요?",
            "zh": "先洗淡色的还是深色的？",
            "ja": "明るい色か暗い色から始める？",
            "vi": "Giặt đồ màu sáng hay màu tối trước?",
            "en": "Lights or darks first?"
          }
        },
        {
          "role": "user",
          "text": "Let’s do the darks.",
          "translations": {
            "ko": "어두운 옷부터 해요.",
            "zh": "先洗深色的。",
            "ja": "暗い色からやろう。",
            "vi": "Hãy giặt đồ màu tối trước.",
            "en": "Let’s do the darks."
          }
        },
        {
          "role": "ai",
          "text": "Okay, I’ll load the machine.",
          "translations": {
            "ko": "알겠어요, 세탁기에 넣을게요.",
            "zh": "好的，我来装洗衣机。",
            "ja": "了解、洗濯機に入れるね。",
            "vi": "Được, tôi sẽ nạp máy.",
            "en": "Okay, I’ll load the machine."
          }
        },
        {
          "role": "user",
          "text": "I’ll get the detergent.",
          "translations": {
            "ko": "세제 가져올게요.",
            "zh": "我去拿洗衣液。",
            "ja": "洗剤を取ってくるよ。",
            "vi": "Tôi sẽ lấy chất tẩy.",
            "en": "I’ll get the detergent."
          }
        },
        {
          "role": "ai",
          "text": "How long is the cycle?",
          "translations": {
            "ko": "세탁 시간은 얼마나 걸려요?",
            "zh": "洗衣周期多长时间？",
            "ja": "サイクルはどのくらい？",
            "vi": "Chu kỳ giặt mất bao lâu?",
            "en": "How long is the cycle?"
          }
        },
        {
          "role": "user",
          "text": "About 45 minutes.",
          "translations": {
            "ko": "대략 45분 정도요.",
            "zh": "大约45分钟。",
            "ja": "約45分だよ。",
            "vi": "Khoảng 45 phút.",
            "en": "About 45 minutes."
          }
        },
        {
          "role": "ai",
          "text": "Can you hang them after?",
          "translations": {
            "ko": "세탁 후에 빨래를 널어주실 수 있나요?",
            "zh": "洗完后你能晾衣服吗？",
            "ja": "それから干すことができる？",
            "vi": "Bạn có thể treo chúng sau khi giặt xong không?",
            "en": "Can you hang them after?"
          }
        },
        {
          "role": "user",
          "text": "Sure.",
          "translations": {
            "ko": "그럴게요.",
            "zh": "当然。",
            "ja": "うん。",
            "vi": "Được.",
            "en": "Sure."
          }
        },
        {
          "role": "ai",
          "text": "Do we have enough hangers?",
          "translations": {
            "ko": "옷걸이는 충분히 있나요?",
            "zh": "我们有足够的衣架吗？",
            "ja": "ハンガーは十分ある？",
            "vi": "Chúng ta có đủ móc treo không?",
            "en": "Do we have enough hangers?"
          }
        },
        {
          "role": "user",
          "text": "Yes, they’re in the closet.",
          "translations": {
            "ko": "네, 옷장에 있어요.",
            "zh": "有，都在衣柜里。",
            "ja": "うん、クローゼットにあるよ。",
            "vi": "Có, chúng ở trong tủ.",
            "en": "Yes, they’re in the closet."
          }
        },
        {
          "role": "ai",
          "text": "What about the white shirts?",
          "translations": {
            "ko": "흰 셔츠는요?",
            "zh": "白色的衬衫呢？",
            "ja": "白いシャツはどうする？",
            "vi": "Còn về những chiếc áo sơ mi trắng thì sao?",
            "en": "What about the white shirts?"
          }
        },
        {
          "role": "user",
          "text": "We can wash those next.",
          "translations": {
            "ko": "그건 다음에 빨래하면 돼요.",
            "zh": "我们可以接着洗。",
            "ja": "次にそれを洗うよ。",
            "vi": "Chúng ta có thể giặt chúng sau.",
            "en": "We can wash those next."
          }
        },
        {
          "role": "ai",
          "text": "Don’t forget to check the pockets.",
          "translations": {
            "ko": "주머니 확인하는 거 잊지 마세요.",
            "zh": "别忘了检查口袋。",
            "ja": "ポケットをチェックするのを忘れないで。",
            "vi": "Đừng quên kiểm tra túi.",
            "en": "Don’t forget to check the pockets."
          }
        },
        {
          "role": "user",
          "text": "Good idea.",
          "translations": {
            "ko": "좋은 생각이에요.",
            "zh": "好主意。",
            "ja": "いい考えだね。",
            "vi": "Ý tưởng hay.",
            "en": "Good idea."
          }
        },
        {
          "role": "ai",
          "text": "Alright, let’s start.",
          "translations": {
            "ko": "알겠어요, 시작해봅시다.",
            "zh": "好的，我们开始吧。",
            "ja": "それじゃ、始めよう。",
            "vi": "Được, hãy bắt đầu.",
            "en": "Alright, let’s start."
          }
        },
        {
          "role": "user",
          "text": "Laundry time!",
          "translations": {
            "ko": "빨래 시간이네요!",
            "zh": "洗衣时间！",
            "ja": "洗濯時間！",
            "vi": "Thời gian giặt đồ!",
            "en": "Laundry time!"
          }
        }
      ]
    },
    {
      "description": {
        "en": "Cleaning the house",
        "ko": "집 청소하기",
        "zh": "清洁房子",
        "ja": "家を掃除する",
        "vi": "Dọn dẹp nhà cửa"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Let’s clean the house today.",
          "translations": {
            "ko": "오늘 집을 청소해봅시다.",
            "zh": "我们今天来打扫房子吧。",
            "ja": "今日は家を掃除しよう。",
            "vi": "Hãy dọn dẹp nhà hôm nay.",
            "en": "Let’s clean the house today."
          }
        },
        {
          "role": "user",
          "text": "Okay, where do we start?",
          "translations": {
            "ko": "알겠어요, 어디부터 시작할까요?",
            "zh": "好的，我们从哪里开始？",
            "ja": "了解、どこから始める？",
            "vi": "Được, chúng ta bắt đầu từ đâu?",
            "en": "Okay, where do we start?"
          }
        },
        {
          "role": "ai",
          "text": "I’ll vacuum the living room.",
          "translations": {
            "ko": "저는 거실을 청소기로 청소할게요.",
            "zh": "我来吸客厅的地。",
            "ja": "リビングを掃除機で掃除するよ。",
            "vi": "Tôi sẽ hút bụi phòng khách.",
            "en": "I’ll vacuum the living room."
          }
        },
        {
          "role": "user",
          "text": "I’ll wipe the kitchen counters.",
          "translations": {
            "ko": "저는 주방 카운터를 닦을게요.",
            "zh": "我来擦厨房的台面。",
            "ja": "キッチンのカウンターを拭くね。",
            "vi": "Tôi sẽ lau bàn bếp.",
            "en": "I’ll wipe the kitchen counters."
          }
        },
        {
          "role": "ai",
          "text": "Do we have enough cleaning spray?",
          "translations": {
            "ko": "청소 스프레이는 충분한가요?",
            "zh": "我们有足够的清洁喷雾吗？",
            "ja": "掃除スプレーは十分ある？",
            "vi": "Chúng ta có đủ dụng cụ vệ sinh không?",
            "en": "Do we have enough cleaning spray?"
          }
        },
        {
          "role": "user",
          "text": "Yes, under the sink.",
          "translations": {
            "ko": "네, 싱크대 밑에 있어요.",
            "zh": "有，就在水槽下面。",
            "ja": "うん、シンクの下にあるよ。",
            "vi": "Có, dưới bồn rửa.",
            "en": "Yes, under the sink."
          }
        },
        {
          "role": "ai",
          "text": "Can you dust the shelves?",
          "translations": {
            "ko": "선반을 먼지털이로 닦아주실 수 있나요?",
            "zh": "你能擦一下书架吗？",
            "ja": "棚を拭いてくれる？",
            "vi": "Bạn có thể quét bụi trên kệ không?",
            "en": "Can you dust the shelves?"
          }
        },
        {
          "role": "user",
          "text": "Sure.",
          "translations": {
            "ko": "그럴게요.",
            "zh": "当然。",
            "ja": "うん。",
            "vi": "Được.",
            "en": "Sure."
          }
        },
        {
          "role": "ai",
          "text": "Don’t forget the bathroom.",
          "translations": {
            "ko": "화장실도 잊지 마세요.",
            "zh": "别忘了卫生间。",
            "ja": "バスルームを忘れないで。",
            "vi": "Đừng quên phòng tắm.",
            "en": "Don’t forget the bathroom."
          }
        },
        {
          "role": "user",
          "text": "I’ll clean the sink.",
          "translations": {
            "ko": "싱크대 청소할게요.",
            "zh": "我来清洁洗手池。",
            "ja": "シンクを掃除するよ。",
            "vi": "Tôi sẽ lau chùi bồn rửa.",
            "en": "I’ll clean the sink."
          }
        },
        {
          "role": "ai",
          "text": "Thanks. I’ll take out the trash.",
          "translations": {
            "ko": "감사합니다. 쓰레기를 버릴게요.",
            "zh": "谢谢。我去倒垃圾。",
            "ja": "ありがとう。ゴミを出すね。",
            "vi": "Cảm ơn. Tôi sẽ đổ rác.",
            "en": "Thanks. I’ll take out the trash."
          }
        },
        {
          "role": "user",
          "text": "Okay.",
          "translations": {
            "ko": "알겠어요.",
            "zh": "好的。",
            "ja": "了解。",
            "vi": "Được.",
            "en": "Okay."
          }
        },
        {
          "role": "ai",
          "text": "Let’s open the windows for fresh air.",
          "translations": {
            "ko": "창문을 열어 신선한 공기를 들여보내요.",
            "zh": "我们打开窗户让新鲜空气进来。",
            "ja": "新鮮な空気のために窓を開けよう。",
            "vi": "Hãy mở cửa sổ để không khí trong lành.",
            "en": "Let’s open the windows for fresh air."
          }
        },
        {
          "role": "user",
          "text": "Good idea.",
          "translations": {
            "ko": "좋은 생각이에요.",
            "zh": "好主意。",
            "ja": "いい考えだね。",
            "vi": "Ý tưởng hay.",
            "en": "Good idea."
          }
        },
        {
          "role": "ai",
          "text": "Do you want music while we clean?",
          "translations": {
            "ko": "청소하면서 음악 들을래요?",
            "zh": "我们打扫的时候要听音乐吗？",
            "ja": "掃除中に音楽を聴きたい？",
            "vi": "Bạn có muốn nghe nhạc trong khi dọn dẹp không?",
            "en": "Do you want music while we clean?"
          }
        },
        {
          "role": "user",
          "text": "Yes, something upbeat.",
          "translations": {
            "ko": "네, 신나는 음악 좋아요.",
            "zh": "是的，来点欢快的。",
            "ja": "うん、アップテンポの曲がいい。",
            "vi": "Vâng, một bản nhạc sôi động.",
            "en": "Yes, something upbeat."
          }
        },
        {
          "role": "ai",
          "text": "We’re a good team.",
          "translations": {
            "ko": "우리는 좋은 팀이에요.",
            "zh": "我们是个好团队。",
            "ja": "私たちはいいチームだね。",
            "vi": "Chúng ta là một đội tốt.",
            "en": "We’re a good team."
          }
        },
        {
          "role": "user",
          "text": "Totally!",
          "translations": {
            "ko": "그러게요!",
            "zh": "完全同意！",
            "ja": "全くその通り！",
            "vi": "Hoàn toàn!",
            "en": "Totally!"
          }
        },
        {
          "role": "ai",
          "text": "Almost done!",
          "translations": {
            "ko": "거의 다 됐어요!",
            "zh": "快完成了！",
            "ja": "もうすぐ終わるよ！",
            "vi": "Gần xong rồi!",
            "en": "Almost done!"
          }
        },
        {
          "role": "user",
          "text": "Looking great.",
          "translations": {
            "ko": "잘 되고 있어요.",
            "zh": "看起来很好。",
            "ja": "きれいになったね。",
            "vi": "Trông tuyệt vời.",
            "en": "Looking great."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Talking about hobbies",
        "ko": "취미에 대해 이야기하기",
        "zh": "谈论爱好",
        "ja": "趣味について話す",
        "vi": "Nói về sở thích"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "What do you like to do for fun?",
          "translations": {
            "ko": "즐겨하는 취미가 무엇인가요?",
            "zh": "你平时喜欢做什么？",
            "ja": "楽しむために何をするのが好き？",
            "vi": "Bạn thích làm gì để giải trí?",
            "en": "What do you like to do for fun?"
          }
        },
        {
          "role": "user",
          "text": "I enjoy reading.",
          "translations": {
            "ko": "저는 읽는 것을 좋아해요.",
            "zh": "我喜欢阅读。",
            "ja": "読書が好きだよ。",
            "vi": "Tôi thích đọc sách.",
            "en": "I enjoy reading."
          }
        },
        {
          "role": "ai",
          "text": "What kind of books?",
          "translations": {
            "ko": "어떤 종류의 책을 좋아하나요?",
            "zh": "你喜欢什么类型的书？",
            "ja": "どんな本？",
            "vi": "Loại sách nào?",
            "en": "What kind of books?"
          }
        },
        {
          "role": "user",
          "text": "Mystery novels.",
          "translations": {
            "ko": "추리소설을 좋아해요.",
            "zh": "悬疑小说。",
            "ja": "ミステリーノベル。",
            "vi": "Tiểu thuyết trinh thám.",
            "en": "Mystery novels."
          }
        },
        {
          "role": "ai",
          "text": "Nice! I like painting.",
          "translations": {
            "ko": "좋아요! 저는 그림 그리는 것을 좋아해요.",
            "zh": "不错！我喜欢画画。",
            "ja": "いいね！私は絵を描くのが好きだよ。",
            "vi": "Hay! Tôi thích vẽ.",
            "en": "Nice! I like painting."
          }
        },
        {
          "role": "user",
          "text": "That’s cool.",
          "translations": {
            "ko": "멋져요.",
            "zh": "那很酷。",
            "ja": "それはクールだね。",
            "vi": "Thật tuyệt.",
            "en": "That’s cool."
          }
        },
        {
          "role": "ai",
          "text": "Do you paint often?",
          "translations": {
            "ko": "자주 그림을 그리나요?",
            "zh": "你经常画画吗？",
            "ja": "よく絵を描くの？",
            "vi": "Bạn vẽ thường xuyên không?",
            "en": "Do you paint often?"
          }
        },
        {
          "role": "user",
          "text": "Once a week.",
          "translations": {
            "ko": "일주일에 한 번씩이요.",
            "zh": "一周一次。",
            "ja": "週に一度。",
            "vi": "Một lần một tuần.",
            "en": "Once a week."
          }
        },
        {
          "role": "ai",
          "text": "Have you read anything good lately?",
          "translations": {
            "ko": "최근에 좋은 책 읽었나요?",
            "zh": "你最近有没有读到什么好书？",
            "ja": "最近何かいいものを読んだ？",
            "vi": "Bạn có đọc gì hay gần đây không?",
            "en": "Have you read anything good lately?"
          }
        },
        {
          "role": "user",
          "text": "Yes, a detective story.",
          "translations": {
            "ko": "네, 탐정 소설을 읽었어요.",
            "zh": "是的，一本侦探小说。",
            "ja": "うん、探偵物語。",
            "vi": "Vâng, một câu chuyện thám tử.",
            "en": "Yes, a detective story."
          }
        },
        {
          "role": "ai",
          "text": "Do you want to try painting with me?",
          "translations": {
            "ko": "저랑 같이 그림 그려보실래요?",
            "zh": "你想和我一起画画吗？",
            "ja": "私と一緒に絵を描いてみたい？",
            "vi": "Bạn có muốn thử vẽ với tôi không?",
            "en": "Do you want to try painting with me?"
          }
        },
        {
          "role": "user",
          "text": "Sure, sounds fun.",
          "translations": {
            "ko": "그럼요, 재미있을 것 같아요.",
            "zh": "当然，听起来很有趣。",
            "ja": "うん、楽しそう。",
            "vi": "Được, nghe thú vị.",
            "en": "Sure, sounds fun."
          }
        },
        {
          "role": "ai",
          "text": "We could do it this weekend.",
          "translations": {
            "ko": "이번 주말에 해봐요.",
            "zh": "我们可以在这个周末做。",
            "ja": "今週末にでもやれるよ。",
            "vi": "Chúng ta có thể làm vào cuối tuần này.",
            "en": "We could do it this weekend."
          }
        },
        {
          "role": "user",
          "text": "Let’s plan it.",
          "translations": {
            "ko": "계획해봅시다.",
            "zh": "我们来计划一下。",
            "ja": "それを計画しよう。",
            "vi": "Hãy lên kế hoạch.",
            "en": "Let’s plan it."
          }
        },
        {
          "role": "ai",
          "text": "I’ll bring the paints.",
          "translations": {
            "ko": "저는 그림물감을 가져올게요.",
            "zh": "我会带颜料。",
            "ja": "ペイントを持ってくるね。",
            "vi": "Tôi sẽ mang theo sơn.",
            "en": "I’ll bring the paints."
          }
        },
        {
          "role": "user",
          "text": "I’ll bring snacks.",
          "translations": {
            "ko": "저는 간식을 가져올게요.",
            "zh": "我会带零食。",
            "ja": "スナックを持ってくるよ。",
            "vi": "Tôi sẽ mang đồ ăn nhẹ.",
            "en": "I’ll bring snacks."
          }
        },
        {
          "role": "ai",
          "text": "Great. It’s a date!",
          "translations": {
            "ko": "좋아요. 약속이네요!",
            "zh": "太好了。约定了！",
            "ja": "いいね。デートだね！",
            "vi": "Tốt. Đó là một cuộc hẹn!",
            "en": "Great. It’s a date!"
          }
        },
        {
          "role": "user",
          "text": "Looking forward to it.",
          "translations": {
            "ko": "기대되네요.",
            "zh": "期待那一天。",
            "ja": "楽しみにしてるよ。",
            "vi": "Mong chờ đến đó.",
            "en": "Looking forward to it."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Evening routine and watching TV",
        "ko": "저녁 루틴과 TV 시청",
        "zh": "晚间例行程序和看电视",
        "ja": "夜のルーティンとテレビを見る",
        "vi": "Thói quen buổi tối và xem TV"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "What should we watch tonight?",
          "translations": {
            "ko": "오늘 밤에 무엇을 볼까요?",
            "zh": "我们今晚看什么？",
            "ja": "今夜何を見ようか？",
            "vi": "Chúng ta nên xem gì tối nay?",
            "en": "What should we watch tonight?"
          }
        },
        {
          "role": "user",
          "text": "How about a comedy?",
          "translations": {
            "ko": "코미디는 어떠세요?",
            "zh": "我们看喜剧怎么样？",
            "ja": "コメディはどう？",
            "vi": "Xem phim hài thì sao?",
            "en": "How about a comedy?"
          }
        },
        {
          "role": "ai",
          "text": "Sounds good. Let’s check Netflix.",
          "translations": {
            "ko": "좋아요. 넷플릭스를 확인해봅시다.",
            "zh": "听起来不错。我们查查Netflix。",
            "ja": "いいね。Netflixをチェックしよう。",
            "vi": "Nghe tốt. Hãy kiểm tra Netflix.",
            "en": "Sounds good. Let’s check Netflix."
          }
        },
        {
          "role": "user",
          "text": "Okay, I’ll get the remote.",
          "translations": {
            "ko": "알겠어요, 리모컨을 가져올게요.",
            "zh": "好的，我去拿遥控器。",
            "ja": "了解、リモコンを取ってくるね。",
            "vi": "Được, tôi sẽ lấy điều khiển.",
            "en": "Okay, I’ll get the remote."
          }
        },
        {
          "role": "ai",
          "text": "Do you want popcorn?",
          "translations": {
            "ko": "팝콘 먹을래요?",
            "zh": "你想吃爆米花吗？",
            "ja": "ポップコーンはいる？",
            "vi": "Bạn có muốn ăn bỏng ngô không?",
            "en": "Do you want popcorn?"
          }
        },
        {
          "role": "user",
          "text": "Yes, please!",
          "translations": {
            "ko": "네, 부탁드려요!",
            "zh": "是的，谢谢！",
            "ja": "うん、お願い！",
            "vi": "Vâng, xin vui lòng!",
            "en": "Yes, please!"
          }
        },
        {
          "role": "ai",
          "text": "I’ll make some now.",
          "translations": {
            "ko": "지금 만들어볼게요.",
            "zh": "我现在就去做。",
            "ja": "今すぐ作るね。",
            "vi": "Tôi sẽ làm ngay bây giờ.",
            "en": "I’ll make some now."
          }
        },
        {
          "role": "user",
          "text": "Thanks.",
          "translations": {
            "ko": "감사합니다.",
            "zh": "谢谢。",
            "ja": "ありがとう。",
            "vi": "Cảm ơn.",
            "en": "Thanks."
          }
        },
        {
          "role": "ai",
          "text": "Is the couch ready?",
          "translations": {
            "ko": "소파는 준비 됐나요?",
            "zh": "沙发准备好了吗？",
            "ja": "ソファは準備できてる？",
            "vi": "Ghế sofa đã sẵn sàng chưa?",
            "en": "Is the couch ready?"
          }
        },
        {
          "role": "user",
          "text": "I fluffed the pillows.",
          "translations": {
            "ko": "베개를 털어놨어요.",
            "zh": "我已经抖过枕头了。",
            "ja": "ピローをふかふかにしたよ。",
            "vi": "Tôi đã làm phồng gối.",
            "en": "I fluffed the pillows."
          }
        },
        {
          "role": "ai",
          "text": "Let’s turn off the lights.",
          "translations": {
            "ko": "불을 끄죠.",
            "zh": "我们关掉灯。",
            "ja": "ライトを消そう。",
            "vi": "Hãy tắt đèn.",
            "en": "Let’s turn off the lights."
          }
        },
        {
          "role": "user",
          "text": "Done.",
          "translations": {
            "ko": "끄겠습니다.",
            "zh": "好了。",
            "ja": "やったよ。",
            "vi": "Xong.",
            "en": "Done."
          }
        },
        {
          "role": "ai",
          "text": "The show is starting!",
          "translations": {
            "ko": "방송이 시작되네요!",
            "zh": "节目开始了！",
            "ja": "ショーが始まるよ！",
            "vi": "Chương trình bắt đầu!",
            "en": "The show is starting!"
          }
        },
        {
          "role": "user",
          "text": "Perfect timing.",
          "translations": {
            "ko": "딱 좋은 타이밍이네요.",
            "zh": "正好。",
            "ja": "パーフェクトなタイミング。",
            "vi": "Đúng lúc.",
            "en": "Perfect timing."
          }
        },
        {
          "role": "ai",
          "text": "This is funny.",
          "translations": {
            "ko": "재미있네요.",
            "zh": "这个很好笑。",
            "ja": "これは面白い。",
            "vi": "Thật hài hước.",
            "en": "This is funny."
          }
        },
        {
          "role": "user",
          "text": "I’m glad we chose this.",
          "translations": {
            "ko": "이걸 선택한 건 좋은 선택이었네요.",
            "zh": "我很高兴我们选择了这个。",
            "ja": "これを選んでよかったね。",
            "vi": "Tôi vui mừng vì chúng ta đã chọn nó.",
            "en": "I’m glad we chose this."
          }
        },
        {
          "role": "ai",
          "text": "Want to watch another episode?",
          "translations": {
            "ko": "다음 에피소드도 볼까요?",
            "zh": "要再看一集吗？",
            "ja": "もう一話見る？",
            "vi": "Bạn có muốn xem tập tiếp theo không?",
            "en": "Want to watch another episode?"
          }
        },
        {
          "role": "user",
          "text": "Sure, one more.",
          "translations": {
            "ko": "그럼요, 하나 더.",
            "zh": "好的，再看一集。",
            "ja": "うん、もう一つ。",
            "vi": "Được, thêm một tập nữa.",
            "en": "Sure, one more."
          }
        },
        {
          "role": "ai",
          "text": "Then straight to bed.",
          "translations": {
            "ko": "그리고 바로 잠자리에 들어요.",
            "zh": "然后直接上床。",
            "ja": "それからすぐに寝るよ。",
            "vi": "Sau đó thẳng tiến giường ngủ.",
            "en": "Then straight to bed."
          }
        },
        {
          "role": "user",
          "text": "Deal!",
          "translations": {
            "ko": "약속이에요!",
            "zh": "一言为定！",
            "ja": "約束だよ！",
            "vi": "Thỏa thuận!",
            "en": "Deal!"
          }
        }
      ]
    },
    {
      "description": {
        "en": "Preparing for bed",
        "ko": "잠자리 준비하기",
        "zh": "准备睡觉",
        "ja": "寝る準備をする",
        "vi": "Chuẩn bị đi ngủ"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Are you getting sleepy?",
          "translations": {
            "ko": "졸리세요?",
            "zh": "你开始困了吗？",
            "ja": "眠くなってきた？",
            "vi": "Bạn có cảm thấy buồn ngủ không?",
            "en": "Are you getting sleepy?"
          }
        },
        {
          "role": "user",
          "text": "A little.",
          "translations": {
            "ko": "조금요.",
            "zh": "有点。",
            "ja": "少し。",
            "vi": "Một chút.",
            "en": "A little."
          }
        },
        {
          "role": "ai",
          "text": "Let’s get ready for bed.",
          "translations": {
            "ko": "잠자리에 들 준비를 해봅시다.",
            "zh": "我们准备上床吧。",
            "ja": "寝る準備をしよう。",
            "vi": "Hãy chuẩn bị đi ngủ.",
            "en": "Let’s get ready for bed."
          }
        },
        {
          "role": "user",
          "text": "Okay.",
          "translations": {
            "ko": "알겠어요.",
            "zh": "好的。",
            "ja": "了解。",
            "vi": "Được.",
            "en": "Okay."
          }
        },
        {
          "role": "ai",
          "text": "Did you brush your teeth?",
          "translations": {
            "ko": "칫솔질 했나요?",
            "zh": "你刷牙了吗？",
            "ja": "歯を磨いた？",
            "vi": "Bạn đã đánh răng chưa?",
            "en": "Did you brush your teeth?"
          }
        },
        {
          "role": "user",
          "text": "Not yet. I’ll do it now.",
          "translations": {
            "ko": "아직이요. 지금 할게요.",
            "zh": "还没有。我现在去刷。",
            "ja": "まだ。今すぐやるよ。",
            "vi": "Chưa. Tôi sẽ làm ngay bây giờ.",
            "en": "Not yet. I’ll do it now."
          }
        },
        {
          "role": "ai",
          "text": "I’ll check if the door is locked.",
          "translations": {
            "ko": "문 잠겼는지 확인해볼게요.",
            "zh": "我去看看门是否锁了。",
            "ja": "ドアが閉まっているか確認するね。",
            "vi": "Tôi sẽ kiểm tra xem cửa có khóa chưa.",
            "en": "I’ll check if the door is locked."
          }
        },
        {
          "role": "user",
          "text": "Thanks.",
          "translations": {
            "ko": "감사합니다.",
            "zh": "谢谢。",
            "ja": "ありがとう。",
            "vi": "Cảm ơn.",
            "en": "Thanks."
          }
        },
        {
          "role": "ai",
          "text": "Lights off in the kitchen?",
          "translations": {
            "ko": "부엌의 불은 껐나요?",
            "zh": "厨房的灯关了吗？",
            "ja": "キッチンのライトは消した？",
            "vi": "Đã tắt đèn bếp chưa?",
            "en": "Lights off in the kitchen?"
          }
        },
        {
          "role": "user",
          "text": "Yes, already.",
          "translations": {
            "ko": "네, 이미 껐어요.",
            "zh": "是的，已经关了。",
            "ja": "うん、もう消したよ。",
            "vi": "Vâng, đã tắt.",
            "en": "Yes, already."
          }
        },
        {
          "role": "ai",
          "text": "Do you want water by the bed?",
          "translations": {
            "ko": "침대 옆에 물을 놓을까요?",
            "zh": "你想要一杯水在床边吗？",
            "ja": "ベッドの横に水を置く？",
            "vi": "Bạn có muốn có nước bên cạnh giường không?",
            "en": "Do you want water by the bed?"
          }
        },
        {
          "role": "user",
          "text": "Yes, please.",
          "translations": {
            "ko": "네, 부탁드려요.",
            "zh": "是的，谢谢。",
            "ja": "うん、お願い。",
            "vi": "Vâng, xin vui lòng.",
            "en": "Yes, please."
          }
        },
        {
          "role": "ai",
          "text": "Alarm set for tomorrow?",
          "translations": {
            "ko": "내일 알람 맞춰놨나요?",
            "zh": "明天的闹钟设好了吗？",
            "ja": "明日のアラームはセットした？",
            "vi": "Đã đặt báo thức cho ngày mai chưa?",
            "en": "Alarm set for tomorrow?"
          }
        },
        {
          "role": "user",
          "text": "Yes, 7 AM.",
          "translations": {
            "ko": "네, 오전 7시에요.",
            "zh": "是的，早上7点。",
            "ja": "うん、7時だよ。",
            "vi": "Vâng, 7 giờ sáng.",
            "en": "Yes, 7 AM."
          }
        },
        {
          "role": "ai",
          "text": "I’ll read a little before sleeping.",
          "translations": {
            "ko": "잠들기 전에 조금 읽을게요.",
            "zh": "我睡前会读一会儿书。",
            "ja": "寝る前に少し読むよ。",
            "vi": "Tôi sẽ đọc một chút trước khi đi ngủ.",
            "en": "I’ll read a little before sleeping."
          }
        },
        {
          "role": "user",
          "text": "Me too.",
          "translations": {
            "ko": "저도요.",
            "zh": "我也是。",
            "ja": "私もだよ。",
            "vi": "Tôi cũng vậy.",
            "en": "Me too."
          }
        },
        {
          "role": "ai",
          "text": "Goodnight!",
          "translations": {
            "ko": "잘 자요!",
            "zh": "晚安！",
            "ja": "おやすみ！",
            "vi": "Chúc ngủ ngon!",
            "en": "Goodnight!"
          }
        },
        {
          "role": "user",
          "text": "Goodnight, sleep well.",
          "translations": {
            "ko": "잘 자요, 편히 주무세요.",
            "zh": "晚安，睡个好觉。",
            "ja": "おやすみ、よく眠ってね。",
            "vi": "Chúc ngủ ngon, ngủ ngon nhé.",
            "en": "Goodnight, sleep well."
          }
        },
        {
          "role": "ai",
          "text": "Sweet dreams!",
          "translations": {
            "ko": "좋은 꿈 꾸세요!",
            "zh": "做个好梦！",
            "ja": "素敵な夢を！",
            "vi": "Mơ ngọt!",
            "en": "Sweet dreams!"
          }
        },
        {
          "role": "user",
          "text": "You too.",
          "translations": {
            "ko": "당신도요.",
            "zh": "你也是。",
            "ja": "君もね。",
            "vi": "Bạn cũng vậy.",
            "en": "You too."
          }
        }
      ]
    }
  ],
  "intermediate": [
    {
      "description": {
        "ko": "주말 여행 계획하기",
        "zh": "计划周末旅行",
        "ja": "週末の旅行を計画する",
        "vi": "Lên kế hoạch cho một chuyến đi cuối tuần"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Do you happen to have any plans for the weekend yet?",
          "translations": {
            "ko": "혹시 주말 계획이 이미 세워져 있나요?",
            "zh": "你有周末的计划了吗？",
            "ja": "すでに週末の予定はありますか？",
            "vi": "Bạn có dự định gì cho cuối tuần này chưa?"
          }
        },
        {
          "role": "user",
          "text": "Not at the moment—I was hoping something would come up.",
          "translations": {
            "ko": "아직은 없어요—뭔가 생길 것 같아 기대하고 있었어요.",
            "zh": "目前还没有——我希望能有什么事情发生。",
            "ja": "今のところ何もないです。何か予定が入ることを期待していました。",
            "vi": "Hiện tại thì chưa, tôi đang hy vọng sẽ có điều gì đó xảy ra."
          }
        },
        {
          "role": "ai",
          "text": "Would you be interested in going hiking on Saturday?",
          "translations": {
            "ko": "토요일에 등산 가는 건 어떠세요?",
            "zh": "你对周六去徒步旅行感兴趣吗？",
            "ja": "土曜日にハイキングに行くのはどうですか？",
            "vi": "Bạn có muốn đi leo núi vào thứ Bảy không?"
          }
        },
        {
          "role": "user",
          "text": "Hiking sounds lovely. I’d definitely be up for that.",
          "translations": {
            "ko": "등산 좋네요. 그건 꼭 가고 싶어요.",
            "zh": "徒步旅行听起来很好。我肯定愿意去。",
            "ja": "ハイキング、いいですね。ぜひ行きたいです。",
            "vi": "Đi leo núi nghe thật tuyệt. Tôi chắc chắn sẽ tham gia."
          }
        },
        {
          "role": "ai",
          "text": "According to the latest forecast, the weather should be ideal.",
          "translations": {
            "ko": "최근의 날씨 예보에 따르면, 날씨가 이상적일 것 같아요.",
            "zh": "根据最新的预报，那天的天气应该很理想。",
            "ja": "最新の予報によると、天気は最適なはずです。",
            "vi": "Theo dự báo mới nhất, thời tiết sẽ rất lý tưởng."
          }
        },
        {
          "role": "user",
          "text": "That’s good to hear. I’ll double-check the weather just in case.",
          "translations": {
            "ko": "그런 소식 좋네요. 혹시 모르니 날씨를 다시 확인해 볼게요.",
            "zh": "听起来不错。我会再次检查天气的。",
            "ja": "それは良いニュースです。念のため天気を再確認します。",
            "vi": "Thật tốt khi nghe điều đó. Tôi sẽ kiểm tra lại thời tiết để chắc chắn."
          }
        },
        {
          "role": "ai",
          "text": "We might want to consider leaving early to avoid traffic.",
          "translations": {
            "ko": "교통 체증을 피하려면 일찍 출발하는 것을 고려해봐야 할 것 같아요.",
            "zh": "我们可能需要考虑早点出发以避开交通堵塞。",
            "ja": "交通渋滞を避けるために早めに出発することを考えた方がいいかもしれません。",
            "vi": "Chúng ta có thể muốn cân nhắc việc rời đi sớm để tránh kẹt xe."
          }
        },
        {
          "role": "user",
          "text": "Yes, earlier would probably be much better.",
          "translations": {
            "ko": "네, 일찍 가는 게 훨씬 나을 것 같아요.",
            "zh": "是的，早点出发可能会好得多。",
            "ja": "はい、早めに出発した方が良いでしょう。",
            "vi": "Đúng, đi sớm có lẽ sẽ tốt hơn nhiều."
          }
        },
        {
          "role": "ai",
          "text": "Do you think we should bring our own lunch or dine somewhere?",
          "translations": {
            "ko": "점심을 직접 가져가야 할까요, 아니면 어딘가에서 식사를 해야 할까요?",
            "zh": "你觉得我们应该自带午餐还是在某处用餐？",
            "ja": "自分たちで昼食を持って行くべきか、どこかで食事をするべきかどう思いますか？",
            "vi": "Bạn nghĩ chúng ta nên mang theo bữa trưa hay ăn ở đâu đó?"
          }
        },
        {
          "role": "user",
          "text": "I’d prefer bringing lunch. It's usually more relaxed that way.",
          "translations": {
            "ko": "점심을 가져가는 게 좋을 것 같아요. 그게 보통 더 편하니까요.",
            "zh": "我更愿意带午餐。这样通常会更轻松。",
            "ja": "昼食を持って行く方がいいですね。それの方がリラックスできます。",
            "vi": "Tôi thích mang theo bữa trưa. Thông thường sẽ thư giãn hơn."
          }
        },
        {
          "role": "ai",
          "text": "I can take care of bringing some light refreshments.",
          "translations": {
            "ko": "가벼운 간식을 몇 가지 가져가는 건 제가 맡을게요.",
            "zh": "我可以负责带一些轻便的点心。",
            "ja": "軽いおつまみを持って行くことにします。",
            "vi": "Tôi có thể chuẩn bị một số món ăn nhẹ."
          }
        },
        {
          "role": "user",
          "text": "That’s great. I can bring a thermos of tea too.",
          "translations": {
            "ko": "좋아요. 저도 차를 담은 터모스를 가져갈게요.",
            "zh": "太好了。我也可以带一个保温瓶的茶。",
            "ja": "それは素晴らしいです。私もお茶のサーモスを持って行きます。",
            "vi": "Thật tuyệt. Tôi cũng có thể mang theo một bình nước trà."
          }
        },
        {
          "role": "ai",
          "text": "Shall we reach out to a few others who might want to join?",
          "translations": {
            "ko": "같이 가고 싶을 만한 다른 사람들에게 연락해볼까요?",
            "zh": "我们应该邀请一些可能想加入的人吗？",
            "ja": "参加したいと思う他の人に声をかけましょうか？",
            "vi": "Chúng ta có nên mời thêm một số người khác có thể muốn tham gia không?"
          }
        },
        {
          "role": "user",
          "text": "Absolutely, let’s invite a few friends and make it a group outing.",
          "translations": {
            "ko": "그럼요, 몇 명 친구들을 초대해서 그룹으로 놀러 가는 건 어떨까요?",
            "zh": "当然，让我们邀请一些朋友，一起出去玩。",
            "ja": "ぜひ、何人かの友人を誘ってグループで出かけましょう。",
            "vi": "Chắc chắn, hãy mời thêm một số bạn bè và tổ chức một chuyến đi nhóm."
          }
        },
        {
          "role": "ai",
          "text": "Ideally, we should aim to return before evening.",
          "translations": {
            "ko": "이상적으로는 저녁 전에 돌아오는 것이 좋을 것 같아요.",
            "zh": "理想情况下，我们应该在傍晚前返回。",
            "ja": "理想的には、夕方前に帰るべきです。",
            "vi": "Lý tưởng nhất, chúng ta nên trở về trước buổi tối."
          }
        },
        {
          "role": "user",
          "text": "Perfect. I might have something later in the evening anyway.",
          "translations": {
            "ko": "좋아요. 어차피 저녁에 다른 일정이 있을 수도 있으니까요.",
            "zh": "完美。反正我晚上可能还有事情。",
            "ja": "完璧です。私は夕方に何か予定があるかもしれません。",
            "vi": "Hoàn hảo. Tôi có thể có việc vào buổi tối."
          }
        },
        {
          "role": "ai",
          "text": "It might be wise to wear something comfortable for walking.",
          "translations": {
            "ko": "걷기 편한 옷을 입는 것이 현명할 것 같아요.",
            "zh": "穿着舒适的衣服去散步可能会比较明智。",
            "ja": "歩きやすい服装を選んだ方が賢明かもしれません。",
            "vi": "Có thể sẽ khôn ngoan nếu mặc đồ thoải mái để đi bộ."
          }
        },
        {
          "role": "user",
          "text": "Good point. I’ll go with my trail shoes.",
          "translations": {
            "ko": "좋은 생각이네요. 제 등산화를 신을게요.",
            "zh": "说得对。我会穿我的徒步鞋。",
            "ja": "良いアドバイスです。私はトレイルシューズを履くことにします。",
            "vi": "Ý tốt. Tôi sẽ mang giày đi bộ của mình."
          }
        },
        {
          "role": "ai",
          "text": "I’ll share the meeting point with you later today.",
          "translations": {
            "ko": "나중에 만나는 장소를 알려드릴게요.",
            "zh": "我今天晚些时候会告诉你集合地点。",
            "ja": "後で集合場所を共有します。",
            "vi": "Tôi sẽ chia sẻ điểm hẹn với bạn sau hôm nay."
          }
        },
        {
          "role": "user",
          "text": "Thanks! Looking forward to it already.",
          "translations": {
            "ko": "감사합니다! 벌써부터 기대되네요.",
            "zh": "谢谢！我已经开始期待了。",
            "ja": "ありがとう！すでに楽しみにしています。",
            "vi": "Cảm ơn! Tôi đã rất mong chờ điều này."
          }
        }
      ]
    },
    {
      "description": {
        "ko": "의사와의 약속 잡기",
        "zh": "预约医生",
        "ja": "医者の予約を取る",
        "vi": "Đặt lịch hẹn với bác sĩ"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Good morning. How may I assist you with scheduling your appointment?",
          "translations": {
            "ko": "안녕하세요. 어떻게 약속을 예약해드릴까요?",
            "zh": "早上好。我能帮助您预约吗？",
            "ja": "おはようございます。予約の手配で何かお手伝いできることはありますか？",
            "vi": "Chào buổi sáng. Tôi có thể giúp gì cho việc lên lịch hẹn của bạn?"
          }
        },
        {
          "role": "user",
          "text": "Hi, I was hoping to book an appointment for later this week.",
          "translations": {
            "ko": "안녕하세요, 이번 주에 약속을 잡고 싶었어요.",
            "zh": "嗨，我希望预约本周晚些时候的一个时间。",
            "ja": "こんにちは、今週後半に予約を取りたいと思っています。",
            "vi": "Chào, tôi hy vọng có thể đặt một cuộc hẹn vào cuối tuần này."
          }
        },
        {
          "role": "ai",
          "text": "Would you prefer a particular day this week?",
          "translations": {
            "ko": "이번 주에 특정한 날짜를 선호하시나요?",
            "zh": "你更希望本周的哪一天？",
            "ja": "今週の特定の日にちをご希望ですか？",
            "vi": "Bạn có muốn chọn một ngày cụ thể trong tuần này không?"
          }
        },
        {
          "role": "user",
          "text": "Friday would work quite well, if possible.",
          "translations": {
            "ko": "가능하다면 금요일이 좋을 것 같아요.",
            "zh": "如果可能的话，周五会很好。",
            "ja": "可能であれば金曜日が良いです。",
            "vi": "Thứ Sáu sẽ rất phù hợp, nếu có thể."
          }
        },
        {
          "role": "ai",
          "text": "Do mornings or afternoons generally work better for your schedule?",
          "translations": {
            "ko": "일반적으로 오전이나 오후 중 어느 시간이 더 편하신가요?",
            "zh": "你一般上午还是下午的时间比较方便？",
            "ja": "一般的には、午前中と午後のどちらがご都合がよろしいですか？",
            "vi": "Buổi sáng hay buổi chiều thường phù hợp hơn với lịch trình của bạn?"
          }
        },
        {
          "role": "user",
          "text": "Mornings are generally more convenient for me.",
          "translations": {
            "ko": "보통 오전이 더 편해요.",
            "zh": "对我来说，上午通常更方便。",
            "ja": "一般的には、午前中が便利です。",
            "vi": "Buổi sáng thường tiện lợi hơn đối với tôi."
          }
        },
        {
          "role": "ai",
          "text": "We currently have an available slot at 10 AM this coming Friday.",
          "translations": {
            "ko": "이번 주 금요일 오전 10시에 예약 가능한 시간이 있습니다.",
            "zh": "我们这个周五上午10点有一个可用的时间段。",
            "ja": "今週の金曜日の午前10時に空きがあります。",
            "vi": "Chúng tôi hiện có một khe cắm khả dụng vào lúc 10 giờ sáng thứ Sáu tới."
          }
        },
        {
          "role": "user",
          "text": "That sounds perfect. Please go ahead and book it.",
          "translations": {
            "ko": "그게 딱 좋네요. 예약해 주세요.",
            "zh": "听起来很好。请预约吧。",
            "ja": "それは完璧です。予約をお願いします。",
            "vi": "Điều đó nghe hoàn hảo. Vui lòng tiến hành đặt lịch."
          }
        },
        {
          "role": "ai",
          "text": "Is this your first time visiting our clinic?",
          "translations": {
            "ko": "이번이 저희 클리닉을 처음 방문하시는 건가요?",
            "zh": "这是您第一次来我们诊所吗？",
            "ja": "これが私たちのクリニックを訪れるのは初めてですか？",
            "vi": "Đây có phải là lần đầu tiên bạn đến phòng khám của chúng tôi không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, it’ll be my first visit to your clinic.",
          "translations": {
            "ko": "네, 저희 클리닉에 처음 방문하게 됩니다.",
            "zh": "是的，这将是我第一次来你们的诊所。",
            "ja": "はい、あなたのクリニックへの初めての訪問になります。",
            "vi": "Vâng, đây sẽ là lần đầu tiên tôi đến phòng khám của bạn."
          }
        },
        {
          "role": "ai",
          "text": "Please remember to bring a valid ID and your insurance card.",
          "translations": {
            "ko": "유효한 신분증과 보험 카드를 꼭 가져오시기 바랍니다.",
            "zh": "请记得带上有效身份证和保险卡。",
            "ja": "有効なIDと保険証を持参することを忘れないでください。",
            "vi": "Xin hãy nhớ mang theo giấy tờ tùy thân hợp lệ và thẻ bảo hiểm của bạn."
          }
        },
        {
          "role": "user",
          "text": "Of course, I’ll make sure to bring everything that’s needed.",
          "translations": {
            "ko": "물론이죠, 필요한 모든 것을 반드시 가져올게요.",
            "zh": "当然，我会确保带齐所有需要的东西。",
            "ja": "もちろん、必要なものは全て持って行くようにします。",
            "vi": "Tất nhiên, tôi sẽ chắc chắn mang theo mọi thứ cần thiết."
          }
        },
        {
          "role": "ai",
          "text": "Are there any medical conditions or allergies we should be aware of?",
          "translations": {
            "ko": "알려진 질병이나 알레르기가 있을까요?",
            "zh": "有没有我们应该知道的医疗状况或过敏情况？",
            "ja": "私たちが知っておくべき医療上の状況やアレルギーはありますか？",
            "vi": "Có bất kỳ tình trạng sức khỏe hoặc dị ứng nào chúng tôi cần biết không?"
          }
        },
        {
          "role": "user",
          "text": "No, I don’t have any known conditions or allergies.",
          "translations": {
            "ko": "아니요, 알려진 질병이나 알레르기는 없습니다.",
            "zh": "不，我没有任何已知的疾病或过敏情况。",
            "ja": "いいえ、私は既知の病状やアレルギーはありません。",
            "vi": "Không, tôi không có bất kỳ tình trạng sức khỏe hay dị ứng nào đã biết."
          }
        },
        {
          "role": "ai",
          "text": "We kindly ask that you arrive at least 10 minutes early.",
          "translations": {
            "ko": "최소 10분은 일찍 도착해 주시기 바랍니다.",
            "zh": "我们恳请您至少提前10分钟到达。",
            "ja": "少なくとも10分前には到着していただくようお願い申し上げます。",
            "vi": "Chúng tôi xin nhắc nhở bạn đến ít nhất 10 phút sớm."
          }
        },
        {
          "role": "user",
          "text": "Understood. I’ll make sure to be there a bit early.",
          "translations": {
            "ko": "알겠습니다. 조금 일찍 도착하도록 하겠습니다.",
            "zh": "明白了。我会确保提前到达。",
            "ja": "了解しました。少し早めに到着するようにします。",
            "vi": "Tôi hiểu. Tôi sẽ chắc chắn đến sớm một chút."
          }
        },
        {
          "role": "ai",
          "text": "Would you like us to send you a reminder the day before?",
          "translations": {
            "ko": "전날에 알림을 보내드릴까요?",
            "zh": "您希望我们在前一天给您发送提醒吗？",
            "ja": "前日にリマインダーを送りますか？",
            "vi": "Bạn có muốn chúng tôi gửi nhắc nhở cho bạn vào ngày trước không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, a reminder would be much appreciated.",
          "translations": {
            "ko": "네, 알림이 있으면 매우 감사하겠습니다.",
            "zh": "是的，我会非常感谢提醒。",
            "ja": "はい、リマインダーをいただけると助かります。",
            "vi": "Vâng, tôi rất cảm kích nếu nhận được lời nhắc nhở."
          }
        },
        {
          "role": "ai",
          "text": "You're all set. Let us know if anything changes before then.",
          "translations": {
            "ko": "모두 준비되었습니다. 그 전에 변동 사항이 있으면 알려주세요.",
            "zh": "您已经准备好了。如果在那之前有任何变化，请告诉我们。",
            "ja": "予約は完了しました。それまでに何か変更があればお知らせください。",
            "vi": "Bạn đã sẵn sàng. Hãy cho chúng tôi biết nếu có bất kỳ thay đổi nào trước đó."
          }
        },
        {
          "role": "user",
          "text": "Thanks very much. I’ll see you on Friday then.",
          "translations": {
            "ko": "정말 감사합니다. 그럼 금요일에 뵙겠습니다.",
            "zh": "非常感谢。那么我周五见。",
            "ja": "ありがとうございます。それでは金曜日にお会いしましょう。",
            "vi": "Cảm ơn rất nhiều. Vậy thì tôi sẽ gặp bạn vào thứ Sáu."
          }
        }
      ]
    },
    {
      "description": {
        "ko": "이웃과의 대화",
        "zh": "和邻居聊天",
        "ja": "隣人との会話",
        "vi": "Trò chuyện với một người hàng xóm"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Hi there, how have things been lately?",
          "translations": {
            "ko": "안녕하세요, 요즘 어떻게 지내세요?",
            "zh": "嗨，最近过得怎么样？",
            "ja": "こんにちは、最近どうですか？",
            "vi": "Chào bạn, dạo này mọi thứ thế nào?"
          }
        },
        {
          "role": "user",
          "text": "Hello! Things have been going quite well, thanks.",
          "translations": {
            "ko": "안녕하세요! 요즘 잘 지내고 있습니다, 감사합니다.",
            "zh": "你好！最近过得很好，谢谢。",
            "ja": "こんにちは！最近はとても良いです、ありがとう。",
            "vi": "Xin chào! Mọi thứ đều khá tốt, cảm ơn bạn."
          }
        },
        {
          "role": "ai",
          "text": "I couldn’t help but admire your garden—it's beautiful.",
          "translations": {
            "ko": "정원이 너무 아름다워서 참을 수 없었어요.",
            "zh": "我不禁欣赏你的花园——它真美。",
            "ja": "あなたの庭を見ていて思わず感心してしまいました、とても美しいですね。",
            "vi": "Tôi không thể không ngưỡng mộ khu vườn của bạn - nó thật đẹp."
          }
        },
        {
          "role": "user",
          "text": "Thank you! I really enjoy spending time out there.",
          "translations": {
            "ko": "감사합니다! 저는 정말로 정원에서 시간을 보내는 것을 즐깁니다.",
            "zh": "谢谢！我真的很喜欢在那里度过时间。",
            "ja": "ありがとうございます！私はそこで過ごす時間を本当に楽しんでいます。",
            "vi": "Cảm ơn bạn! Tôi thực sự thích dành thời gian ở đó."
          }
        },
        {
          "role": "ai",
          "text": "Do you manage all the gardening by yourself?",
          "translations": {
            "ko": "정원 관리를 모두 혼자 하시나요?",
            "zh": "你是自己管理所有的园艺工作吗？",
            "ja": "庭の手入れはすべて自分でやっていますか？",
            "vi": "Bạn tự quản lý toàn bộ công việc làm vườn à?"
          }
        },
        {
          "role": "user",
          "text": "Yes, it’s something I take a lot of pride in.",
          "translations": {
            "ko": "네, 저는 그것에 대해 많은 자부심을 가지고 있습니다.",
            "zh": "是的，这是我引以为豪的事情。",
            "ja": "はい、それは私が誇りに思っていることです。",
            "vi": "Vâng, đó là điều tôi rất tự hào."
          }
        },
        {
          "role": "ai",
          "text": "What kind of flowers are those? They're stunning.",
          "translations": {
            "ko": "그 꽃들은 무슨 종류인가요? 정말 눈부시네요.",
            "zh": "那些是什么花？它们真漂亮。",
            "ja": "あの花は何ですか？とても素晴らしいですね。",
            "vi": "Đó là loại hoa gì vậy? Chúng thật tuyệt vời."
          }
        },
        {
          "role": "user",
          "text": "Those are peonies and daffodils—my personal favorites.",
          "translations": {
            "ko": "그것들은 모란과 수선화입니다 - 제 개인적인 최애입니다.",
            "zh": "那些是牡丹和水仙——我个人最喜欢的。",
            "ja": "それらはボタンと水仙です、私のお気に入りです。",
            "vi": "Đó là hoa mẫu đơn và hoa thủy tiên - những loại hoa yêu thích của tôi."
          }
        },
        {
          "role": "ai",
          "text": "They really brighten up the whole neighborhood.",
          "translations": {
            "ko": "그들은 정말로 이웃을 환하게 만듭니다.",
            "zh": "它们真的让整个社区都亮了起来。",
            "ja": "それらは本当に全体の近所を明るくしていますね。",
            "vi": "Chúng thực sự làm sáng lên cả khu phố."
          }
        },
        {
          "role": "user",
          "text": "That’s so kind of you to say!",
          "translations": {
            "ko": "그런 말씀 해주셔서 감사합니다!",
            "zh": "你这么说真是太好了！",
            "ja": "そう言っていただけると嬉しいです！",
            "vi": "Thật tốt khi bạn nói như vậy!"
          }
        },
        {
          "role": "ai",
          "text": "Would you mind sharing some of your tips?",
          "translations": {
            "ko": "팁을 공유해 주실 수 있을까요?",
            "zh": "你介意分享一些你的园艺技巧吗？",
            "ja": "あなたのコツを教えていただけますか？",
            "vi": "Bạn có thể chia sẻ một số mẹo của mình không?"
          }
        },
        {
          "role": "user",
          "text": "Of course not. I'd be happy to help however I can.",
          "translations": {
            "ko": "물론이죠. 제가 할 수 있는 한 도와드리겠습니다.",
            "zh": "当然不介意。我会很乐意提供任何我能提供的帮助。",
            "ja": "もちろんです。私ができる限りお手伝いします。",
            "vi": "Tất nhiên không. Tôi sẽ rất vui lòng giúp đỡ bằng cách nào tôi có thể."
          }
        },
        {
          "role": "ai",
          "text": "Have you ever thought of organizing a gardening group?",
          "translations": {
            "ko": "정원 그룹을 만들어 볼 생각은 해보셨나요?",
            "zh": "你有没有想过组织一个园艺小组？",
            "ja": "ガーデニンググループを組織することを考えたことはありますか？",
            "vi": "Bạn có bao giờ nghĩ đến việc tổ chức một nhóm làm vườn không?"
          }
        },
        {
          "role": "user",
          "text": "That actually sounds like a lovely idea.",
          "translations": {
            "ko": "그것은 사실로 좋은 생각 같네요.",
            "zh": "那实际上听起来是个很好的主意。",
            "ja": "実際にはそれは素晴らしいアイデアのように思えます。",
            "vi": "Đó thực sự là một ý tưởng tuyệt vời."
          }
        },
        {
          "role": "ai",
          "text": "I’ve been considering growing some vegetables this year.",
          "translations": {
            "ko": "올해 야채를 심어볼까 생각하고 있습니다.",
            "zh": "我一直在考虑今年种一些蔬菜。",
            "ja": "今年は野菜を育てることを考えています。",
            "vi": "Tôi đã cân nhắc việc trồng một số loại rau trong năm nay."
          }
        },
        {
          "role": "user",
          "text": "I think you’d really enjoy it. It’s therapeutic.",
          "translations": {
            "ko": "그것을 정말 즐길 수 있을 것 같아요. 치유가 되죠.",
            "zh": "我想你会真的很喜欢。这是一种治疗方法。",
            "ja": "あなたはそれを本当に楽しむと思います。それは癒しです。",
            "vi": "Tôi nghĩ bạn sẽ thực sự thích nó. Nó có tính chất chữa lành."
          }
        },
        {
          "role": "ai",
          "text": "Do you happen to know a good place to get quality seeds?",
          "translations": {
            "ko": "좋은 품질의 씨앗을 구할 수 있는 곳을 아시나요?",
            "zh": "你知道哪里可以买到优质的种子吗？",
            "ja": "良質な種を手に入れる良い場所を知っていますか？",
            "vi": "Bạn có biết một nơi nào đó để mua hạt giống chất lượng không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, there’s a great shop just a few blocks away.",
          "translations": {
            "ko": "네, 몇 블록 떨어진 곳에 훌륭한 가게가 있어요.",
            "zh": "是的，就在几个街区外有一个很好的商店。",
            "ja": "はい、数ブロック先に素晴らしい店があります。",
            "vi": "Có, có một cửa hàng tuyệt vời chỉ cách đây vài dãy nhà."
          }
        },
        {
          "role": "ai",
          "text": "Let’s try to catch up more regularly from now on.",
          "translations": {
            "ko": "앞으로는 좀 더 자주 연락하려고 노력해봅시다.",
            "zh": "让我们从现在开始尝试更定期地联系。",
            "ja": "これからはもっと定期的に話し合おうとしましょう。",
            "vi": "Hãy cố gắng gặp nhau thường xuyên hơn từ bây giờ."
          }
        },
        {
          "role": "user",
          "text": "I’d like that a lot. Let’s do it.",
          "translations": {
            "ko": "그게 좋겠네요. 해봅시다.",
            "zh": "我很喜欢这个主意。我们就这么做吧。",
            "ja": "それはとてもいいですね。やりましょう。",
            "vi": "Tôi rất thích điều đó. Hãy làm đi."
          }
        }
      ]
    },
    {
      "description": {
        "ko": "배달 음식 주문하기",
        "zh": "点外卖",
        "ja": "フードデリバリーを注文する",
        "vi": "Đặt món ăn giao hàng"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Good evening! What would you like to order tonight?",
          "translations": {
            "ko": "안녕하십니까! 오늘 밤 무엇을 주문하시겠습니까?",
            "zh": "晚上好！您今晚想点什么？",
            "ja": "こんばんは！今夜は何を注文しますか？",
            "vi": "Chào buổi tối! Bạn muốn đặt món gì tối nay?"
          }
        },
        {
          "role": "user",
          "text": "Hi there! I’d like to place an order for delivery.",
          "translations": {
            "ko": "안녕하세요! 배달 주문을 하고 싶습니다.",
            "zh": "嗨！我想要点外卖。",
            "ja": "こんにちは！デリバリーの注文をしたいのですが。",
            "vi": "Chào bạn! Tôi muốn đặt một đơn hàng giao tận nơi."
          }
        },
        {
          "role": "ai",
          "text": "Just so you know, we’re running a special on pasta today.",
          "translations": {
            "ko": "그냥 알려드리자면, 오늘은 파스타 특가 행사를 하고 있습니다.",
            "zh": "只是让您知道，我们今天的意大利面有特价优惠。",
            "ja": "今日はパスタが特価ですよ、ということをお知らせします。",
            "vi": "Chỉ để bạn biết, hôm nay chúng tôi đang có chương trình khuyến mãi cho món pasta."
          }
        },
        {
          "role": "user",
          "text": "That sounds delicious. I’ll have the pasta, please.",
          "translations": {
            "ko": "들리기 좋네요. 파스타 주세요.",
            "zh": "听起来很美味。我要一份意大利面，请。",
            "ja": "それは美味しそうですね。パスタをお願いします。",
            "vi": "Nghe có vẻ ngon. Tôi sẽ chọn món pasta, xin vui lòng."
          }
        },
        {
          "role": "ai",
          "text": "Would you care for any beverages with that?",
          "translations": {
            "ko": "음료는 어떤 것을 드시겠습니까?",
            "zh": "您需要搭配饮料吗？",
            "ja": "それに何か飲み物はいかがですか？",
            "vi": "Bạn có muốn thêm bất kỳ đồ uống nào không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I’d like a sparkling water, if possible.",
          "translations": {
            "ko": "가능하다면 스파클링 워터 주세요.",
            "zh": "是的，如果可以的话，我想要一瓶气泡水。",
            "ja": "はい、可能であればスパークリングウォーターをお願いします。",
            "vi": "Có, tôi muốn một chai nước suối có ga, nếu có thể."
          }
        },
        {
          "role": "ai",
          "text": "Would you prefer delivery or would you rather pick it up yourself?",
          "translations": {
            "ko": "배달을 원하시나요, 아니면 직접 찾아가시겠습니까?",
            "zh": "您是希望送货上门还是自己来取？",
            "ja": "デリバリーと自分で取りに行く、どちらがよろしいですか？",
            "vi": "Bạn muốn giao hàng hay tự đến lấy?"
          }
        },
        {
          "role": "user",
          "text": "Delivery would be ideal tonight.",
          "translations": {
            "ko": "오늘은 배달이 좋겠습니다.",
            "zh": "今晚最好是送货上门。",
            "ja": "今夜はデリバリーが理想的です。",
            "vi": "Giao hàng sẽ là lựa chọn tốt nhất tối nay."
          }
        },
        {
          "role": "ai",
          "text": "Our current delivery estimate is about 40 to 45 minutes.",
          "translations": {
            "ko": "현재 배달 예상 시간은 약 40분에서 45분입니다.",
            "zh": "我们目前的预计送货时间大约是40到45分钟。",
            "ja": "現在の配達予定時間は約40から45分です。",
            "vi": "Thời gian giao hàng dự kiến hiện tại của chúng tôi là khoảng 40 đến 45 phút."
          }
        },
        {
          "role": "user",
          "text": "That’s totally fine—I’m not in a rush.",
          "translations": {
            "ko": "괜찮아요 - 서두르지 않아도 됩니다.",
            "zh": "这完全没问题——我不急。",
            "ja": "全然大丈夫です、急いでいません。",
            "vi": "Hoàn toàn không sao - tôi không vội."
          }
        },
        {
          "role": "ai",
          "text": "Would you like us to include napkins and utensils?",
          "translations": {
            "ko": "냅킨과 식기를 포함시켜 드릴까요?",
            "zh": "您需要我们提供餐巾纸和餐具吗？",
            "ja": "ナプキンと食器を同梱しますか？",
            "vi": "Bạn có muốn chúng tôi bao gồm khăn ăn và đồ ăn không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, that would be appreciated.",
          "translations": {
            "ko": "네, 감사합니다.",
            "zh": "是的，我会很感激的。",
            "ja": "はい、それはありがたいです。",
            "vi": "Có, tôi sẽ rất biết ơn."
          }
        },
        {
          "role": "ai",
          "text": "Is there anything you’d like the driver to know?",
          "translations": {
            "ko": "배달원에게 전해야 할 사항이 있으신가요?",
            "zh": "您有什么特别的要求要告诉送货员吗？",
            "ja": "配達員に伝えておきたいことは何かありますか？",
            "vi": "Có điều gì bạn muốn tài xế biết không?"
          }
        },
        {
          "role": "user",
          "text": "Please ask them to call when they arrive.",
          "translations": {
            "ko": "도착하면 전화해 달라고 부탁해주세요.",
            "zh": "请他们到达时打电话给我。",
            "ja": "到着したら電話をしてもらえますか？",
            "vi": "Xin hãy nhờ họ gọi khi đến nơi."
          }
        },
        {
          "role": "ai",
          "text": "We accept all major cards as well as mobile payments.",
          "translations": {
            "ko": "모든 주요 카드와 모바일 결제를 받습니다.",
            "zh": "我们接受所有主要的信用卡以及手机支付。",
            "ja": "主要なカード全てとモバイル決済を受け付けています。",
            "vi": "Chúng tôi chấp nhận tất cả các loại thẻ chính cũng như thanh toán di động."
          }
        },
        {
          "role": "user",
          "text": "Perfect. I’ll pay using my phone.",
          "translations": {
            "ko": "좋아요. 휴대폰으로 결제하겠습니다.",
            "zh": "太好了。我会用我的手机支付。",
            "ja": "完璧です。私の携帯で支払います。",
            "vi": "Hoàn hảo. Tôi sẽ thanh toán bằng điện thoại của mình."
          }
        },
        {
          "role": "ai",
          "text": "May I have your delivery address, please?",
          "translations": {
            "ko": "배달 주소를 알려주시겠습니까?",
            "zh": "请问您的送货地址是？",
            "ja": "配達先の住所を教えていただけますか？",
            "vi": "Bạn có thể cho tôi biết địa chỉ giao hàng của bạn, xin vui lòng?"
          }
        },
        {
          "role": "user",
          "text": "Sure, the address is 42 River Street.",
          "translations": {
            "ko": "네, 주소는 42 River Street입니다.",
            "zh": "好的，地址是河街42号。",
            "ja": "はい、住所は42 River Streetです。",
            "vi": "Chắc chắn, địa chỉ là 42 River Street."
          }
        },
        {
          "role": "ai",
          "text": "Great! Your order has been successfully placed.",
          "translations": {
            "ko": "좋아요! 주문이 성공적으로 접수되었습니다.",
            "zh": "太好了！您的订单已经成功下单。",
            "ja": "ありがとうございます！ご注文は無事に受け付けられました。",
            "vi": "Tuyệt! Đơn hàng của bạn đã được đặt thành công."
          }
        },
        {
          "role": "user",
          "text": "Thanks a lot. I’m looking forward to it!",
          "translations": {
            "ko": "감사합니다. 기대하고 있겠습니다!",
            "zh": "非常感谢。我期待着！",
            "ja": "どうもありがとうございます。楽しみにしています！",
            "vi": "Cảm ơn rất nhiều. Tôi rất mong đợi!"
          }
        }
      ]
    },
    {
      "description": {
        "ko": "상점에 물건 반품하기",
        "zh": "将商品退回商店",
        "ja": "店舗に商品を返品する",
        "vi": "Trả lại một mặt hàng cho cửa hàng"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Hello! How may I assist you with your return today?",
          "translations": {
            "ko": "안녕하세요! 오늘 어떻게 도와드릴까요?",
            "zh": "您好！今天我能帮您处理退货吗？",
            "ja": "こんにちは！今日は何を返品しましょうか？",
            "vi": "Xin chào! Tôi có thể giúp gì cho việc trả hàng của bạn hôm nay?"
          }
        },
        {
          "role": "user",
          "text": "Hi, I’d like to return this—it didn’t fit quite right.",
          "translations": {
            "ko": "안녕하세요, 이걸 반품하고 싶습니다 - 사이즈가 맞지 않아서요.",
            "zh": "嗨，我想退回这个——它的尺寸不太合适。",
            "ja": "こんにちは、これを返品したいのですが、サイズが合いませんでした。",
            "vi": "Chào, tôi muốn trả lại món này - nó không vừa như tôi mong đợi."
          }
        },
        {
          "role": "ai",
          "text": "Do you happen to have the receipt with you?",
          "translations": {
            "ko": "혹시 영수증이 있으신가요?",
            "zh": "您带着收据了吗？",
            "ja": "レシートはお持ちですか？",
            "vi": "Bạn có mang theo biên lai không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I made sure to bring it with me.",
          "translations": {
            "ko": "네, 가져왔습니다.",
            "zh": "是的，我确保带着它。",
            "ja": "はい、持ってきています。",
            "vi": "Có, tôi đã chắc chắn mang nó theo."
          }
        },
        {
          "role": "ai",
          "text": "Could you let me know what was wrong with the item?",
          "translations": {
            "ko": "물건에 어떤 문제가 있었는지 알려주실 수 있나요?",
            "zh": "您能告诉我商品有什么问题吗？",
            "ja": "商品に何か問題がありましたか？教えていただけますか？",
            "vi": "Bạn có thể cho tôi biết có gì không ổn với mặt hàng không?"
          }
        },
        {
          "role": "user",
          "text": "It was a bit smaller than I expected.",
          "translations": {
            "ko": "제가 생각했던 것보다 좀 작았어요.",
            "zh": "它比我预期的要小一些。",
            "ja": "予想より少し小さかったです。",
            "vi": "Nó hơi nhỏ hơn tôi mong đợi."
          }
        },
        {
          "role": "ai",
          "text": "Would you prefer a refund or would an exchange be better?",
          "translations": {
            "ko": "환불을 원하시나요, 아니면 교환을 원하시나요?",
            "zh": "你更愿意退款还是换货更好？",
            "ja": "返金を希望しますか、それとも交換がよろしいですか？",
            "vi": "Bạn có muốn hoàn tiền hay đổi sản phẩm sẽ tốt hơn?"
          }
        },
        {
          "role": "user",
          "text": "A refund would be great, if that’s okay.",
          "translations": {
            "ko": "가능하다면 환불을 받고 싶습니다.",
            "zh": "如果可以的话，我希望退款。",
            "ja": "それでよければ、返金をお願いします。",
            "vi": "Hoàn tiền sẽ tốt lắm, nếu được."
          }
        },
        {
          "role": "ai",
          "text": "No problem. I’ll start processing that right away.",
          "translations": {
            "ko": "문제 없습니다. 바로 처리하겠습니다.",
            "zh": "没问题。我马上开始处理。",
            "ja": "問題ありません。すぐに手続きを始めます。",
            "vi": "Không sao. Tôi sẽ bắt đầu xử lý ngay lập tức."
          }
        },
        {
          "role": "user",
          "text": "Thank you. I really appreciate your help.",
          "translations": {
            "ko": "감사합니다. 정말 도움이 많이 됐어요.",
            "zh": "谢谢你。我真的很感谢你的帮助。",
            "ja": "ありがとうございます。本当に助かります。",
            "vi": "Cảm ơn bạn. Tôi thực sự đánh giá cao sự giúp đỡ của bạn."
          }
        },
        {
          "role": "ai",
          "text": "Please go ahead and place the item on the counter.",
          "translations": {
            "ko": "물건을 카운터에 올려두세요.",
            "zh": "请把物品放在柜台上。",
            "ja": "商品をカウンターに置いてください。",
            "vi": "Vui lòng đặt món hàng lên quầy."
          }
        },
        {
          "role": "user",
          "text": "Here you are.",
          "translations": {
            "ko": "여기 있습니다.",
            "zh": "给你。",
            "ja": "はい、どうぞ。",
            "vi": "Đây, xin mời bạn."
          }
        },
        {
          "role": "ai",
          "text": "Did you bring the original packaging by any chance?",
          "translations": {
            "ko": "혹시 원래 포장을 가지고 오셨나요?",
            "zh": "你有没有带原包装？",
            "ja": "偶然ですが、元のパッケージを持ってきましたか？",
            "vi": "Bạn có mang theo bao bì gốc không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I kept everything together.",
          "translations": {
            "ko": "네, 모든 것을 함께 가지고 왔습니다.",
            "zh": "是的，我把所有东西都保存好了。",
            "ja": "はい、すべてまとめて保管してあります。",
            "vi": "Có, tôi đã giữ tất cả mọi thứ lại."
          }
        },
        {
          "role": "ai",
          "text": "Just so you know, refunds typically take a few business days.",
          "translations": {
            "ko": "참고로 환불은 보통 몇 영업일이 걸립니다.",
            "zh": "你知道，退款通常需要几个工作日。",
            "ja": "ご了承ください、返金には通常、数営業日かかります。",
            "vi": "Chỉ để bạn biết, việc hoàn tiền thường mất vài ngày làm việc."
          }
        },
        {
          "role": "user",
          "text": "That’s fine. I’ll keep an eye on my account.",
          "translations": {
            "ko": "괜찮습니다. 계좌를 확인해보겠습니다.",
            "zh": "没关系。我会关注我的账户的。",
            "ja": "大丈夫です。口座を確認しておきます。",
            "vi": "Không sao. Tôi sẽ kiểm tra tài khoản của mình."
          }
        },
        {
          "role": "ai",
          "text": "We’re very sorry for any inconvenience this caused.",
          "translations": {
            "ko": "불편을 끼쳐드려 죄송합니다.",
            "zh": "对给你带来的任何不便，我们深感抱歉。",
            "ja": "ご不便をおかけして申し訳ありません。",
            "vi": "Chúng tôi rất xin lỗi vì bất kỳ sự bất tiện nào đã gây ra."
          }
        },
        {
          "role": "user",
          "text": "No worries. These things happen.",
          "translations": {
            "ko": "괜찮아요. 이런 일도 있죠.",
            "zh": "没关系。这些事情都会发生。",
            "ja": "気にしないでください。こういうことはありますから。",
            "vi": "Không sao. Những chuyện như thế này thường xảy ra."
          }
        },
        {
          "role": "ai",
          "text": "Is there anything else I could assist you with today?",
          "translations": {
            "ko": "오늘 도와드릴 다른 것이 있나요?",
            "zh": "今天还有其他我可以帮助你的事情吗？",
            "ja": "今日、他に何かお手伝いできることはありますか？",
            "vi": "Có gì khác tôi có thể giúp bạn hôm nay không?"
          }
        },
        {
          "role": "user",
          "text": "No, that’s all. You’ve been very helpful!",
          "translations": {
            "ko": "아니요, 그게 다예요. 많은 도움이 됐습니다!",
            "zh": "不，就这些了。你帮了我很大的忙！",
            "ja": "いえ、それだけです。大変助かりました！",
            "vi": "Không, đó là tất cả. Bạn đã giúp đỡ rất nhiều!"
          }
        }
      ]
    },
    {
      "description": {
        "ko": "카페에서 누군가를 만나다",
        "zh": "在咖啡馆见面",
        "ja": "カフェで誰かに会う",
        "vi": "Gặp ai đó tại quán cà phê"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Hey! Glad you could make it. How have you been?",
          "translations": {
            "ko": "헤이! 와줘서 고마워. 요즘 어떻게 지내?",
            "zh": "嘿！很高兴你能来。你最近怎么样？",
            "ja": "やあ！来てくれてうれしいよ。元気だった？",
            "vi": "Chào! Rất vui khi bạn đến. Bạn đã ổn chứ?"
          }
        },
        {
          "role": "user",
          "text": "Great to see you! I’ve been doing pretty well.",
          "translations": {
            "ko": "만나서 반가워! 나는 꽤 잘 지내고 있어.",
            "zh": "很高兴见到你！我过得还不错。",
            "ja": "会えてうれしい！私は結構元気だよ。",
            "vi": "Rất vui được gặp bạn! Tôi đã khá ổn."
          }
        },
        {
          "role": "ai",
          "text": "Shall we grab something to drink before we sit down?",
          "translations": {
            "ko": "앉기 전에 뭔가 마실 것을 가져볼까요?",
            "zh": "我们在坐下之前要不要先点点喝的？",
            "ja": "座る前に何か飲み物を取りましょうか？",
            "vi": "Chúng ta có nên mua thứ gì đó để uống trước khi ngồi xuống không?"
          }
        },
        {
          "role": "user",
          "text": "Sure, I’d love a latte or maybe some tea.",
          "translations": {
            "ko": "그럼요, 라떼나 차를 마시고 싶어요.",
            "zh": "好的，我想要一杯拿铁，或者也许是一些茶。",
            "ja": "うん、ラテか、もしくはお茶がいいな。",
            "vi": "Chắc chắn, tôi thích một ly latte hoặc có thể là trà."
          }
        },
        {
          "role": "ai",
          "text": "They’re known for their pastries here—want to try one?",
          "translations": {
            "ko": "여기는 빵이 유명해요—하나 먹어볼래요?",
            "zh": "这里的糕点很有名——想试试吗？",
            "ja": "ここはパスタリーが有名だよ—試してみる？",
            "vi": "Họ nổi tiếng với các loại bánh ngọt ở đây - bạn muốn thử không?"
          }
        },
        {
          "role": "user",
          "text": "Sounds tempting—I’ll try whatever you recommend.",
          "translations": {
            "ko": "유혹적이네요—당신이 추천하는 걸 먹어볼게요.",
            "zh": "听起来很诱人——我会试试你推荐的。",
            "ja": "そそられるね—君がおすすめするものを試してみるよ。",
            "vi": "Nghe hấp dẫn - Tôi sẽ thử món bạn giới thiệu."
          }
        },
        {
          "role": "ai",
          "text": "Would you prefer a spot by the window or somewhere quieter?",
          "translations": {
            "ko": "창가 자리를 원하시나요, 아니면 좀 더 조용한 곳을 원하시나요?",
            "zh": "你更喜欢靠窗的位置还是安静一点的地方？",
            "ja": "窓際の席がいいですか、それとももっと静かな場所がいいですか？",
            "vi": "Bạn có muốn ngồi gần cửa sổ hay nơi yên tĩnh hơn không?"
          }
        },
        {
          "role": "user",
          "text": "Let’s go for the window seat. It’s bright and cozy.",
          "translations": {
            "ko": "창가 자리로 가요. 밝고 아늑하니까요.",
            "zh": "我们坐窗边吧。那里明亮而舒适。",
            "ja": "窓際の席にしよう。明るくて居心地がいいから。",
            "vi": "Hãy chọn chỗ ngồi gần cửa sổ. Nó sáng sủa và ấm cúng."
          }
        },
        {
          "role": "ai",
          "text": "How’s everything going at work these days?",
          "translations": {
            "ko": "요즘 일은 어떻게 진행되고 있나요?",
            "zh": "最近工作怎么样？",
            "ja": "最近、仕事はどう？",
            "vi": "Mọi thứ ở công việc đang diễn ra như thế nào?"
          }
        },
        {
          "role": "user",
          "text": "It’s been busy but manageable. How about you?",
          "translations": {
            "ko": "바쁘지만 다룰 만해요. 당신은요?",
            "zh": "工作很忙，但还可以应对。你呢？",
            "ja": "忙しいけど、なんとかやってるよ。君は？",
            "vi": "Công việc khá bận rộn nhưng vẫn có thể kiểm soát. Còn bạn thì sao?"
          }
        },
        {
          "role": "ai",
          "text": "Do you have any fun plans coming up?",
          "translations": {
            "ko": "재미있는 계획이 있나요?",
            "zh": "你有什么有趣的计划吗？",
            "ja": "楽しい予定は何かある？",
            "vi": "Bạn có kế hoạch vui vẻ nào sắp tới không?"
          }
        },
        {
          "role": "user",
          "text": "Possibly a short trip, if I can take time off.",
          "translations": {
            "ko": "시간을 내서 짧은 여행을 갈 수 있으면 좋겠어요.",
            "zh": "如果我能请假的话，可能会去短途旅行。",
            "ja": "時間が取れれば、短い旅行を計画しているかも。",
            "vi": "Có thể là một chuyến đi ngắn, nếu tôi có thể nghỉ."
          }
        },
        {
          "role": "ai",
          "text": "We really should catch up more often like this.",
          "translations": {
            "ko": "우리 이렇게 자주 만나서 이야기를 나눠야 해요.",
            "zh": "我们真应该像这样经常聚聚。",
            "ja": "こんな風にもっと頻繁に会って話すべきだね。",
            "vi": "Chúng ta thực sự nên gặp nhau thường xuyên hơn như thế này."
          }
        },
        {
          "role": "user",
          "text": "Agreed! Life gets so hectic, doesn’t it?",
          "translations": {
            "ko": "동감이에요! 생활이 너무 바쁘죠, 그렇죠?",
            "zh": "同意！生活真是忙碌，不是吗？",
            "ja": "同感！人生は本当に忙しいよね？",
            "vi": "Đồng ý! Cuộc sống thật bận rộn, phải không?"
          }
        },
        {
          "role": "ai",
          "text": "This place has such a nice, relaxing atmosphere, doesn’t it?",
          "translations": {
            "ko": "이곳은 참으로 좋고 편안한 분위기를 가지고 있지 않나요?",
            "zh": "这个地方的气氛真的很好，很放松，不是吗？",
            "ja": "この場所は、とても素敵でリラックスできる雰囲気がありますね。",
            "vi": "Nơi này có không khí thật dễ chịu và thư giãn, phải không?"
          }
        },
        {
          "role": "user",
          "text": "It really does. I like the vibe here.",
          "translations": {
            "ko": "정말 그렇습니다. 여기 분위기가 마음에 듭니다.",
            "zh": "确实如此。我喜欢这里的氛围。",
            "ja": "本当にそうですね。ここの雰囲気が好きです。",
            "vi": "Quả thật vậy. Tôi thích không gian ở đây."
          }
        },
        {
          "role": "ai",
          "text": "Let’s not wait so long before meeting again.",
          "translations": {
            "ko": "다음에 만나기까지 너무 오래 기다리지 않았으면 좋겠어요.",
            "zh": "我们下次见面不要等那么久。",
            "ja": "次に会うまで、こんなに長く待たないようにしましょう。",
            "vi": "Chúng ta không nên chờ lâu trước khi gặp lại nhau."
          }
        },
        {
          "role": "user",
          "text": "Yes, let’s make it a regular thing.",
          "translations": {
            "ko": "네, 정기적으로 만나는 것으로 하죠.",
            "zh": "是的，我们应该经常见面。",
            "ja": "はい、定期的に会うようにしましょう。",
            "vi": "Vâng, hãy để nó trở thành một thói quen."
          }
        },
        {
          "role": "ai",
          "text": "I’m really glad we were able to do this today.",
          "translations": {
            "ko": "오늘 이렇게 만날 수 있어서 정말 기쁩니다.",
            "zh": "我真的很高兴我们今天能够做到这一点。",
            "ja": "今日、これができて本当にうれしいです。",
            "vi": "Tôi thật sự rất vui vì chúng ta đã có thể làm điều này hôm nay."
          }
        },
        {
          "role": "user",
          "text": "Same here. This was exactly what I needed.",
          "translations": {
            "ko": "저도 마찬가지입니다. 이게 바로 제가 필요한 것이었어요.",
            "zh": "我也是。这正是我需要的。",
            "ja": "私も同じです。これはまさに私が必要としていたものでした。",
            "vi": "Tôi cũng vậy. Đây chính xác là điều tôi cần."
          }
        }
      ]
    },
    {
      "description": {
        "ko": "은행에 가다",
        "zh": "去银行",
        "ja": "銀行へ行く",
        "vi": "Đi đến ngân hàng"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Good afternoon. What can I assist you with today?",
          "translations": {
            "ko": "안녕하세요. 오늘 어떤 것을 도와드릴까요?",
            "zh": "下午好。今天有什么我可以帮助您的吗？",
            "ja": "こんにちは。今日は何をお手伝いできますか？",
            "vi": "Chào buổi chiều. Tôi có thể giúp gì cho bạn hôm nay?"
          }
        },
        {
          "role": "user",
          "text": "Hi, I’d like to update my mailing address.",
          "translations": {
            "ko": "안녕하세요, 제 우편 주소를 변경하고 싶습니다.",
            "zh": "你好，我想更新我的邮寄地址。",
            "ja": "こんにちは、郵送先住所を更新したいのですが。",
            "vi": "Xin chào, tôi muốn cập nhật địa chỉ gửi thư của mình."
          }
        },
        {
          "role": "ai",
          "text": "May I see a valid form of identification?",
          "translations": {
            "ko": "유효한 신분증을 보여주실 수 있으실까요?",
            "zh": "我可以看一下您的有效身份证明吗？",
            "ja": "有効な身分証明書を見せていただけますか？",
            "vi": "Tôi có thể xem một hình thức giấy tờ tùy thân hợp lệ không?"
          }
        },
        {
          "role": "user",
          "text": "Sure, here’s my driver’s license.",
          "translations": {
            "ko": "네, 제 운전 면허증입니다.",
            "zh": "当然，这是我的驾驶执照。",
            "ja": "はい、こちらが私の運転免許証です。",
            "vi": "Chắc chắn, đây là bằng lái xe của tôi."
          }
        },
        {
          "role": "ai",
          "text": "What type of account do you currently have with us?",
          "translations": {
            "ko": "현재 저희 은행에서 어떤 계좌를 사용하고 계신가요?",
            "zh": "您目前在我们这里有什么类型的账户？",
            "ja": "現在、当行でどのような口座をお持ちですか？",
            "vi": "Bạn đang có loại tài khoản nào với chúng tôi?"
          }
        },
        {
          "role": "user",
          "text": "It’s a checking account, I believe.",
          "translations": {
            "ko": "저는 예금 계좌를 사용하고 있는 것 같습니다.",
            "zh": "我相信是支票账户。",
            "ja": "当座預金口座だと思います。",
            "vi": "Tôi nghĩ đó là tài khoản thanh toán."
          }
        },
        {
          "role": "ai",
          "text": "Would you like to speak with a representative for further assistance?",
          "translations": {
            "ko": "추가로 도움을 받기 위해 상담원과 대화하시겠습니까?",
            "zh": "您想和代表进一步沟通以获得帮助吗？",
            "ja": "さらにアシスタンスが必要な場合は、担当者とお話ししますか？",
            "vi": "Bạn có muốn nói chuyện với một người đại diện để được hỗ trợ thêm không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, that would probably be helpful.",
          "translations": {
            "ko": "네, 그게 도움이 될 것 같습니다.",
            "zh": "是的，那可能会有所帮助。",
            "ja": "はい、それが役立つでしょう。",
            "vi": "Vâng, có lẽ điều đó sẽ hữu ích."
          }
        },
        {
          "role": "ai",
          "text": "You can update your personal details at this counter.",
          "translations": {
            "ko": "이 창구에서 개인 정보를 업데이트하실 수 있습니다.",
            "zh": "您可以在这个柜台更新您的个人信息。",
            "ja": "このカウンターで個人情報を更新できます。",
            "vi": "Bạn có thể cập nhật thông tin cá nhân của mình tại quầy này."
          }
        },
        {
          "role": "user",
          "text": "Okay, I’ll fill it out right away.",
          "translations": {
            "ko": "알겠습니다, 바로 작성하겠습니다.",
            "zh": "好的，我马上填写。",
            "ja": "了解です、すぐに記入します。",
            "vi": "Được, tôi sẽ điền ngay lập tức."
          }
        },
        {
          "role": "ai",
          "text": "There might be a short wait—about 10 to 15 minutes.",
          "translations": {
            "ko": "약 10분에서 15분 정도 기다리셔야 할 수도 있습니다.",
            "zh": "可能需要稍等一下——大约10到15分钟。",
            "ja": "少し待つことになるかもしれません—約10から15分です。",
            "vi": "Có thể sẽ phải chờ một chút - khoảng 10 đến 15 phút."
          }
        },
        {
          "role": "user",
          "text": "That’s no problem. I have time.",
          "translations": {
            "ko": "문제 없습니다. 시간이 있습니다.",
            "zh": "没问题。我有时间。",
            "ja": "問題ありません。時間があります。",
            "vi": "Không sao cả. Tôi có thời gian."
          }
        },
        {
          "role": "ai",
          "text": "We can mail the new card to your home address.",
          "translations": {
            "ko": "새 카드를 집 주소로 보내드릴 수 있습니다.",
            "zh": "我们可以把新卡邮寄到您的家庭地址。",
            "ja": "新しいカードはご自宅の住所に郵送できます。",
            "vi": "Chúng tôi có thể gửi thẻ mới đến địa chỉ nhà của bạn."
          }
        },
        {
          "role": "user",
          "text": "That works just fine. Thank you.",
          "translations": {
            "ko": "그렇게 해주시면 감사하겠습니다.",
            "zh": "这样就很好了。谢谢你。",
            "ja": "それで問題ありません。ありがとうございます。",
            "vi": "Điều đó hoàn toàn phù hợp. Cảm ơn bạn."
          }
        },
        {
          "role": "ai",
          "text": "Please take a moment to complete this form.",
          "translations": {
            "ko": "이 양식을 작성하는 데 잠시 시간을 내 주십시오.",
            "zh": "请花一点时间填写这个表格。",
            "ja": "このフォームに記入していただく時間をお取りください。",
            "vi": "Hãy dành một chút thời gian để hoàn thành biểu mẫu này."
          }
        },
        {
          "role": "user",
          "text": "Alright, I’ll take care of that now.",
          "translations": {
            "ko": "알겠습니다, 지금 바로 처리하겠습니다.",
            "zh": "好的，我现在就去处理。",
            "ja": "了解です、今すぐそれを済ませます。",
            "vi": "Được, tôi sẽ làm ngay bây giờ."
          }
        },
        {
          "role": "ai",
          "text": "Let me just verify the information in our system.",
          "translations": {
            "ko": "시스템에 있는 정보를 확인해 보겠습니다.",
            "zh": "让我在我们的系统中验证一下信息。",
            "ja": "システム内の情報を確認させていただきます。",
            "vi": "Để tôi xác minh thông tin trong hệ thống của chúng tôi."
          }
        },
        {
          "role": "user",
          "text": "Thanks for checking that for me.",
          "translations": {
            "ko": "그것을 확인해 주셔서 감사합니다.",
            "zh": "谢谢你帮我检查。",
            "ja": "確認していただきありがとうございます。",
            "vi": "Cảm ơn bạn đã kiểm tra điều đó cho tôi."
          }
        },
        {
          "role": "ai",
          "text": "Is there anything else you’d like help with today?",
          "translations": {
            "ko": "오늘 도와드릴 다른 것이 있으실까요?",
            "zh": "今天还有其他什么我可以帮助您的吗？",
            "ja": "今日、他に何かお手伝いできることはありますか？",
            "vi": "Còn điều gì khác bạn muốn được giúp đỡ hôm nay không?"
          }
        },
        {
          "role": "user",
          "text": "No, that should be everything. I appreciate it.",
          "translations": {
            "ko": "아니요, 이제 다 됐습니다. 감사합니다.",
            "zh": "不，这应该就是所有的了。我很感激。",
            "ja": "いえ、それで全てです。感謝します。",
            "vi": "Không, đó là tất cả. Tôi rất biết ơn."
          }
        }
      ]
    },
    {
      "description": {
        "ko": "가게에서 도움을 청하다",
        "zh": "在商店里寻求帮助",
        "ja": "店内での助けを求める",
        "vi": "Yêu cầu giúp đỡ trong cửa hàng"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Hello! Can I help you find anything in particular today?",
          "translations": {
            "ko": "안녕하세요! 오늘 특별히 찾으시는 물건이 있으신가요?",
            "zh": "你好！今天有什么特别的东西我可以帮你找吗？",
            "ja": "こんにちは！今日は何か特にお探しのものがありますか？",
            "vi": "Xin chào! Tôi có thể giúp bạn tìm kiếm thứ gì đặc biệt hôm nay không?"
          }
        },
        {
          "role": "user",
          "text": "Hi! I’m looking for a jacket, preferably something lightweight.",
          "translations": {
            "ko": "안녕하세요! 가벼운 재킷을 찾고 있습니다.",
            "zh": "嗨！我在找一件夹克，最好是轻便一些的。",
            "ja": "こんにちは！ジャケットを探しています、できれば軽量のものがいいです。",
            "vi": "Xin chào! Tôi đang tìm một chiếc áo khoác, ưu tiên là loại nhẹ."
          }
        },
        {
          "role": "ai",
          "text": "Do you know what size or color you're looking for?",
          "translations": {
            "ko": "어떤 사이즈나 색상을 찾고 계신지 아시나요?",
            "zh": "你知道你在找什么尺寸或颜色吗？",
            "ja": "ご希望のサイズや色はお分かりですか？",
            "vi": "Bạn biết bạn đang tìm kiếm kích cỡ hay màu sắc gì không?"
          }
        },
        {
          "role": "user",
          "text": "Medium usually works best for me. Maybe in navy or gray?",
          "translations": {
            "ko": "보통 중간 사이즈가 제게 가장 잘 맞습니다. 네이비나 그레이는 어떨까요?",
            "zh": "中号通常最适合我。可能是海军蓝或灰色？",
            "ja": "私には中サイズが一番合っています。ネイビーかグレーがいいかもしれません。",
            "vi": "Thường thì kích cỡ trung bình phù hợp với tôi nhất. Có thể là màu xanh hải quân hoặc xám?"
          }
        },
        {
          "role": "ai",
          "text": "This style is one of our most popular this season.",
          "translations": {
            "ko": "이 스타일은 이번 시즌 가장 인기 있는 제품 중 하나입니다.",
            "zh": "这款风格是我们这个季度最受欢迎的之一。",
            "ja": "このスタイルは今シーズンの中でも特に人気があります。",
            "vi": "Kiểu dáng này là một trong những mẫu phổ biến nhất của chúng tôi mùa này."
          }
        },
        {
          "role": "user",
          "text": "I can see why it looks really nice.",
          "translations": {
            "ko": "그 이유를 알 것 같아요. 정말 멋있게 보입니다.",
            "zh": "我可以看出为什么。它看起来真的很好。",
            "ja": "なるほど、それは見ていてもわかります。とても素敵ですね。",
            "vi": "Tôi hiểu tại sao. Nó trông thực sự đẹp."
          }
        },
        {
          "role": "ai",
          "text": "Would you like to try it on in the fitting room?",
          "translations": {
            "ko": "fitting room에서 입어보시겠어요?",
            "zh": "你想在试衣间试穿一下吗？",
            "ja": "試着室で試着されますか？",
            "vi": "Bạn có muốn thử nó trong phòng thay đồ không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I’d love to see how it fits.",
          "translations": {
            "ko": "네, 어떻게 맞는지 한번 보고 싶습니다.",
            "zh": "是的，我很想看看它合不合身。",
            "ja": "はい、どんな感じか試してみたいです。",
            "vi": "Vâng, tôi muốn xem nó vừa với tôi như thế nào."
          }
        },
        {
          "role": "ai",
          "text": "The fitting rooms are just around the corner to your left.",
          "translations": {
            "ko": "fitting room은 왼쪽 코너를 돌면 바로 있습니다.",
            "zh": "试衣间就在你左边的角落里。",
            "ja": "試着室は左手に曲がったところにあります。",
            "vi": "Phòng thay đồ nằm ngay góc bên trái của bạn."
          }
        },
        {
          "role": "user",
          "text": "Thanks! I see the signs now.",
          "translations": {
            "ko": "감사합니다! 이제 안내 표시를 볼 수 있네요.",
            "zh": "谢谢！我现在看到指示牌了。",
            "ja": "ありがとう！看板が見えました。",
            "vi": "Cảm ơn! Tôi đã thấy biển chỉ dẫn."
          }
        },
        {
          "role": "ai",
          "text": "We’re running a promotion on select items today.",
          "translations": {
            "ko": "오늘은 일부 품목에 대한 프로모션을 진행하고 있습니다.",
            "zh": "我们今天正在对部分商品进行促销。",
            "ja": "本日は一部商品を対象にプロモーションを行っています。",
            "vi": "Chúng tôi đang có chương trình khuyến mãi cho một số mặt hàng hôm nay."
          }
        },
        {
          "role": "user",
          "text": "Oh great—what kind of discount is available?",
          "translations": {
            "ko": "좋네요—어떤 할인이 가능한가요?",
            "zh": "太好了——有什么折扣吗？",
            "ja": "それは良いですねーどのくらいの割引がありますか？",
            "vi": "Thật tuyệt - có loại giảm giá nào đang có sẵn không?"
          }
        },
        {
          "role": "ai",
          "text": "Let me check the back and see if we have more in stock.",
          "translations": {
            "ko": "뒤쪽에서 재고가 더 있는지 확인해 보겠습니다.",
            "zh": "让我去后面看看我们是否还有更多库存。",
            "ja": "裏で在庫があるか確認してみます。",
            "vi": "Để tôi kiểm tra phía sau và xem chúng tôi còn hàng không."
          }
        },
        {
          "role": "user",
          "text": "Sure, I don’t mind waiting a minute.",
          "translations": {
            "ko": "네, 잠시 기다리는 것은 문제 없습니다.",
            "zh": "好的，我不介意等一会儿。",
            "ja": "了解です、少々お待ちします。",
            "vi": "Được, tôi không phiền chờ một chút."
          }
        },
        {
          "role": "ai",
          "text": "This design also comes in a few other colors.",
          "translations": {
            "ko": "이 디자인은 몇 가지 다른 색상으로도 제공됩니다.",
            "zh": "这款设计还有其他几种颜色。",
            "ja": "このデザインは他の色でも提供しています。",
            "vi": "Kiểu dáng này cũng có thêm một số màu khác."
          }
        },
        {
          "role": "user",
          "text": "I might go with blue if it's available.",
          "translations": {
            "ko": "가능하다면 파란색으로 선택하려고 합니다.",
            "zh": "如果有的话，我可能会选择蓝色。",
            "ja": "青があればそれにするかもしれません。",
            "vi": "Nếu có, tôi có thể chọn màu xanh."
          }
        },
        {
          "role": "ai",
          "text": "Just so you know, our return policy allows 30 days.",
          "translations": {
            "ko": "참고로, 저희의 반품 정책은 30일입니다.",
            "zh": "你知道，我们的退货政策允许30天。",
            "ja": "ご了承ください、当店の返品ポリシーは30日間です。",
            "vi": "Chỉ để bạn biết, chính sách trả hàng của chúng tôi cho phép trong vòng 30 ngày."
          }
        },
        {
          "role": "user",
          "text": "That’s good to know. Thanks for mentioning it.",
          "translations": {
            "ko": "알려주셔서 감사합니다. 그 사실을 알게 되어 좋습니다.",
            "zh": "这很好知道。谢谢你提醒我。",
            "ja": "それは良い情報です。教えてくれてありがとう。",
            "vi": "Thật tốt khi biết điều đó. Cảm ơn bạn đã nhắc nhở."
          }
        },
        {
          "role": "ai",
          "text": "Please let me know if you need anything else at all.",
          "translations": {
            "ko": "다른 무엇이든 필요하시면 알려주세요.",
            "zh": "如果你需要任何其他东西，请告诉我。",
            "ja": "他に何か必要なことがあればお知らせください。",
            "vi": "Vui lòng cho tôi biết nếu bạn cần bất cứ thứ gì khác."
          }
        },
        {
          "role": "user",
          "text": "Will do. You’ve been super helpful!",
          "translations": {
            "ko": "그렇게 하겠습니다. 정말 도움이 많이 되었습니다!",
            "zh": "我会的。你帮助了我很多！",
            "ja": "了解しました。大変助かりました！",
            "vi": "Tôi sẽ làm vậy. Bạn đã giúp đỡ rất nhiều!"
          }
        }
      ]
    },
    {
      "description": {
        "ko": "고객 서비스에 전화하기",
        "zh": "呼叫客户服务",
        "ja": "カスタマーサービスに電話する",
        "vi": "Gọi dịch vụ khách hàng."
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Thank you for calling. How can I assist you today?",
          "translations": {
            "ko": "전화 주셔서 감사합니다. 오늘 어떻게 도와드릴까요?",
            "zh": "感谢您的来电。今天我可以为您提供什么帮助？",
            "ja": "お電話ありがとうございます。何でお手伝いできますか？",
            "vi": "Cảm ơn bạn đã gọi. Tôi có thể giúp gì cho bạn hôm nay?"
          }
        },
        {
          "role": "user",
          "text": "Hi, I recently placed an order and there's been a problem.",
          "translations": {
            "ko": "안녕하세요, 최근에 주문을 했는데 문제가 생겼습니다.",
            "zh": "嗨，我最近下了一个订单，但出了问题。",
            "ja": "こんにちは、最近注文したのですが問題が発生しました。",
            "vi": "Xin chào, tôi mới đặt một đơn hàng và có một vấn đề."
          }
        },
        {
          "role": "ai",
          "text": "May I please have your order number to get started?",
          "translations": {
            "ko": "시작하기 위해 주문 번호를 알려주실 수 있으신가요?",
            "zh": "为了开始处理，我能拿到你的订单号码吗？",
            "ja": "まずは注文番号をお教えいただけますか？",
            "vi": "Bạn có thể cho tôi biết số đơn hàng để bắt đầu không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, the number is 15678-A.",
          "translations": {
            "ko": "네, 번호는 15678-A입니다.",
            "zh": "是的，号码是15678-A。",
            "ja": "はい、番号は15678-Aです。",
            "vi": "Vâng, số đơn hàng là 15678-A."
          }
        },
        {
          "role": "ai",
          "text": "Could you describe the issue you're experiencing?",
          "translations": {
            "ko": "어떤 문제를 겪고 계신지 설명해주실 수 있나요?",
            "zh": "你能描述一下你遇到的问题吗？",
            "ja": "お困りの状況を詳しく教えていただけますか？",
            "vi": "Bạn có thể mô tả vấn đề bạn đang gặp phải không?"
          }
        },
        {
          "role": "user",
          "text": "The package arrived damaged and missing an item.",
          "translations": {
            "ko": "패키지가 손상되어 도착하고, 물건 하나가 빠져있습니다.",
            "zh": "包裹到达时已经损坏，还缺少一件商品。",
            "ja": "荷物が破損して届き、商品が一つ足りませんでした。",
            "vi": "Gói hàng đã đến bị hỏng và thiếu một mặt hàng."
          }
        },
        {
          "role": "ai",
          "text": "I’m sorry to hear about that—it must be frustrating.",
          "translations": {
            "ko": "그런 일이 생겨서 죄송합니다—정말로 답답하시겠어요.",
            "zh": "很抱歉听到这个——这一定让你很沮丧。",
            "ja": "それは大変申し訳ありません、困惑されていることと思います。",
            "vi": "Tôi rất tiếc khi nghe điều đó - nó phải rất làm bạn bực bội."
          }
        },
        {
          "role": "user",
          "text": "It was a bit disappointing, honestly.",
          "translations": {
            "ko": "솔직히 말해서 좀 실망스럽습니다.",
            "zh": "说实话，这确实有点令人失望。",
            "ja": "正直、少し残念でした。",
            "vi": "Thật sự thì nó hơi làm tôi thất vọng."
          }
        },
        {
          "role": "ai",
          "text": "Let me check the details and see what we can do.",
          "translations": {
            "ko": "상세 정보를 확인하고 어떻게 할 수 있는지 알아보겠습니다.",
            "zh": "让我查看一下详情，看看我们能做些什么。",
            "ja": "詳細を確認して、何ができるか見てみましょう。",
            "vi": "Để tôi kiểm tra chi tiết và xem chúng tôi có thể làm gì."
          }
        },
        {
          "role": "user",
          "text": "Thanks for looking into it so quickly.",
          "translations": {
            "ko": "빠르게 조사해 주셔서 감사합니다.",
            "zh": "谢谢你这么快就开始处理。",
            "ja": "すぐに対応していただきありがとうございます。",
            "vi": "Cảm ơn bạn đã kiểm tra nhanh chóng."
          }
        },
        {
          "role": "ai",
          "text": "We should be able to resolve this within 24 hours.",
          "translations": {
            "ko": "24시간 내에 이 문제를 해결할 수 있을 것입니다.",
            "zh": "我们应该能在24小时内解决这个问题。",
            "ja": "24時間以内にこの問題を解決できるはずです。",
            "vi": "Chúng tôi nên có thể giải quyết vấn đề này trong vòng 24 giờ."
          }
        },
        {
          "role": "user",
          "text": "That would be great. I’d appreciate a quick resolution.",
          "translations": {
            "ko": "그것이 좋겠습니다. 빠른 해결을 부탁드립니다.",
            "zh": "那太好了。我希望能尽快解决。",
            "ja": "それは素晴らしいです。早急な解決をお願いします。",
            "vi": "Điều đó thật tuyệt. Tôi rất trân trọng một giải pháp nhanh chóng."
          }
        },
        {
          "role": "ai",
          "text": "Would you like a confirmation sent via email?",
          "translations": {
            "ko": "이메일로 확인서를 보내드릴까요?",
            "zh": "您希望通过电子邮件接收确认信息吗？",
            "ja": "メールで確認を送りますか？",
            "vi": "Bạn có muốn nhận xác nhận qua email không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, please send a confirmation to my email.",
          "translations": {
            "ko": "네, 이메일로 확인서를 보내주세요.",
            "zh": "是的，请将确认信息发送到我的电子邮件。",
            "ja": "はい、メールで確認を送ってください。",
            "vi": "Vâng, vui lòng gửi xác nhận đến email của tôi."
          }
        },
        {
          "role": "ai",
          "text": "I'll go ahead and escalate this to our supervisor team.",
          "translations": {
            "ko": "이 문제를 우리 팀장님께 상황을 전달하겠습니다.",
            "zh": "我会将此事升级到我们的主管团队。",
            "ja": "これを私たちの上司チームにエスカレートします。",
            "vi": "Tôi sẽ tiếp tục và nâng cấp vấn đề này lên nhóm người quản lý của chúng tôi."
          }
        },
        {
          "role": "user",
          "text": "Okay, thanks. I think that would help.",
          "translations": {
            "ko": "좋습니다, 감사합니다. 그렇게 하면 도움이 될 것 같습니다.",
            "zh": "好的，谢谢。我认为这会有所帮助。",
            "ja": "はい、ありがとう。それが役立つと思います。",
            "vi": "Ok, cảm ơn. Tôi nghĩ điều đó sẽ giúp ích."
          }
        },
        {
          "role": "ai",
          "text": "You should receive a follow-up shortly.",
          "translations": {
            "ko": "곧 후속 조치를 받으실 수 있을 것입니다.",
            "zh": "您应该很快会收到后续回复。",
            "ja": "まもなくフォローアップを受け取るはずです。",
            "vi": "Bạn sẽ nhận được một thông báo theo dõi ngay sau đó."
          }
        },
        {
          "role": "user",
          "text": "I’ll keep an eye out for the update.",
          "translations": {
            "ko": "업데이트를 계속 확인하겠습니다.",
            "zh": "我会密切关注更新情况。",
            "ja": "更新をチェックしておきます。",
            "vi": "Tôi sẽ theo dõi cập nhật."
          }
        },
        {
          "role": "ai",
          "text": "Is there anything else I can assist you with today?",
          "translations": {
            "ko": "오늘 도와드릴 수 있는 다른 것이 있으신가요?",
            "zh": "今天还有其他我可以帮助您的事情吗？",
            "ja": "今日、他に何かお手伝いできることはありますか？",
            "vi": "Còn điều gì khác tôi có thể giúp bạn hôm nay không?"
          }
        },
        {
          "role": "user",
          "text": "No, that covers it. Thank you again.",
          "translations": {
            "ko": "아니요, 그게 다입니다. 다시 한번 감사드립니다.",
            "zh": "不，已经包括了所有事情。再次感谢您。",
            "ja": "いえ、それで全てです。再度ありがとうございます。",
            "vi": "Không, điều đó đã bao gồm tất cả. Cảm ơn bạn một lần nữa."
          }
        }
      ]
    },
    {
      "description": {
        "ko": "도서관 카드 갱신",
        "zh": "续借图书馆卡",
        "ja": "図書館カードの更新",
        "vi": "Gia hạn thẻ thư viện"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Welcome to the library. How may I help you today?",
          "translations": {
            "ko": "도서관에 오신 것을 환영합니다. 오늘 어떻게 도와드릴까요?",
            "zh": "欢迎来到图书馆。今天有什么我可以帮助您的吗？",
            "ja": "図書館へようこそ。今日は何のお手伝いができますか？",
            "vi": "Chào mừng đến với thư viện. Tôi có thể giúp gì cho bạn hôm nay?"
          }
        },
        {
          "role": "user",
          "text": "Hi, I’d like to renew my library membership, please.",
          "translations": {
            "ko": "안녕하세요, 도서관 회원 자격을 갱신하고 싶습니다.",
            "zh": "嗨，我想续借我的图书馆会员卡。",
            "ja": "こんにちは、図書館の会員権を更新したいのですが。",
            "vi": "Xin chào, tôi muốn gia hạn thẻ thành viên thư viện của mình."
          }
        },
        {
          "role": "ai",
          "text": "Are you here to renew your membership card?",
          "translations": {
            "ko": "회원 카드를 갱신하러 오셨나요?",
            "zh": "您是来续借会员卡的吗？",
            "ja": "会員カードの更新のために来られましたか？",
            "vi": "Bạn đến đây để gia hạn thẻ thành viên của mình phải không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, that’s exactly why I came in.",
          "translations": {
            "ko": "네, 그래서 왔습니다.",
            "zh": "是的，这正是我来的原因。",
            "ja": "はい、それがまさに私が来た理由です。",
            "vi": "Vâng, đó chính xác là lý do tôi đến đây."
          }
        },
        {
          "role": "ai",
          "text": "Could I see your ID for verification purposes?",
          "translations": {
            "ko": "확인을 위해 신분증을 보여주실 수 있을까요?",
            "zh": "我可以看一下您的身份证明吗？",
            "ja": "確認のためにIDを見せていただけますか？",
            "vi": "Tôi có thể xem ID của bạn để xác minh không?"
          }
        },
        {
          "role": "user",
          "text": "Certainly. Here’s my ID.",
          "translations": {
            "ko": "네, 여기 제 신분증입니다.",
            "zh": "当然可以。这是我的身份证。",
            "ja": "もちろんです。これが私のIDです。",
            "vi": "Chắc chắn. Đây là ID của tôi."
          }
        },
        {
          "role": "ai",
          "text": "This process will just take a moment.",
          "translations": {
            "ko": "이 과정은 잠시만 걸릴 것입니다.",
            "zh": "这个过程只需要一会儿。",
            "ja": "この手続きは少々お時間をいただきます。",
            "vi": "Quy trình này chỉ mất một chút thời gian."
          }
        },
        {
          "role": "user",
          "text": "No problem. Take your time.",
          "translations": {
            "ko": "괜찮습니다. 천천히 하세요.",
            "zh": "没问题。慢慢来。",
            "ja": "問題ありません。お時間をかけてください。",
            "vi": "Không vấn đề. Hãy dành thời gian của bạn."
          }
        },
        {
          "role": "ai",
          "text": "Would you like to update any contact details today?",
          "translations": {
            "ko": "오늘 연락처 정보를 업데이트하시겠습니까?",
            "zh": "您今天想更新任何联系方式吗？",
            "ja": "今日、連絡先の詳細を更新しますか？",
            "vi": "Bạn có muốn cập nhật bất kỳ thông tin liên hệ nào hôm nay không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I recently changed my phone number.",
          "translations": {
            "ko": "네, 최근에 전화번호를 바꿨습니다.",
            "zh": "是的，我最近换了电话号码。",
            "ja": "はい、最近電話番号を変更しました。",
            "vi": "Vâng, tôi vừa mới thay đổi số điện thoại của mình."
          }
        },
        {
          "role": "ai",
          "text": "Your renewed card will be valid for another year.",
          "translations": {
            "ko": "갱신된 카드는 다음 해까지 유효합니다.",
            "zh": "您的新卡将再有效一年。",
            "ja": "更新されたカードは、再び1年間有効となります。",
            "vi": "Thẻ đã gia hạn của bạn sẽ có hiệu lực trong một năm nữa."
          }
        },
        {
          "role": "user",
          "text": "Perfect. That works well for me.",
          "translations": {
            "ko": "완벽합니다. 저에게 잘 맞습니다.",
            "zh": "完美。这对我来说很合适。",
            "ja": "完璧です。それで私にとって都合が良いです。",
            "vi": "Hoàn hảo. Điều đó rất phù hợp với tôi."
          }
        },
        {
          "role": "ai",
          "text": "Would you be interested in signing up for email notices?",
          "translations": {
            "ko": "이메일로 알림을 받으실 의향이 있으신가요?",
            "zh": "您有兴趣注册接收电子邮件通知吗？",
            "ja": "メールでの通知にサインアップすることに興味はありますか？",
            "vi": "Bạn có muốn đăng ký nhận thông báo qua email không?"
          }
        },
        {
          "role": "user",
          "text": "Sure, I’d like to receive those updates.",
          "translations": {
            "ko": "네, 그런 업데이트를 받고 싶습니다.",
            "zh": "当然，我希望接收这些更新。",
            "ja": "はい、その更新情報を受け取りたいです。",
            "vi": "Chắc chắn, tôi muốn nhận những cập nhật đó."
          }
        },
        {
          "role": "ai",
          "text": "With your updated card, you can borrow more items.",
          "translations": {
            "ko": "업데이트된 카드로 더 많은 아이템을 대출하실 수 있습니다.",
            "zh": "您的新卡可以借阅更多的物品。",
            "ja": "更新されたカードで、より多くのアイテムを借りることができます。",
            "vi": "Với thẻ đã cập nhật, bạn có thể mượn nhiều mục hơn."
          }
        },
        {
          "role": "user",
          "text": "Great, I’ll take full advantage of that.",
          "translations": {
            "ko": "좋습니다, 그 기회를 최대한 활용하겠습니다.",
            "zh": "太好了，我会充分利用的。",
            "ja": "素晴らしい、それを存分に利用します。",
            "vi": "Tuyệt, tôi sẽ tận dụng triệt để điều đó."
          }
        },
        {
          "role": "ai",
          "text": "Please remember to return items by their due dates.",
          "translations": {
            "ko": "반납 기한을 잊지 말아주세요.",
            "zh": "请记住按时归还物品。",
            "ja": "返却期限までにアイテムを返すことを忘れないでください。",
            "vi": "Vui lòng nhớ trả lại các mục theo hạn trả."
          }
        },
        {
          "role": "user",
          "text": "Of course. I always return things on time.",
          "translations": {
            "ko": "물론입니다. 항상 시간에 맞춰 반납합니다.",
            "zh": "当然。我总是准时归还物品。",
            "ja": "もちろんです。私は常に時間通りに物を返します。",
            "vi": "Tất nhiên. Tôi luôn trả đồ đúng hạn."
          }
        },
        {
          "role": "ai",
          "text": "You're all set. Enjoy your reading!",
          "translations": {
            "ko": "모든 준비가 끝났습니다. 즐거운 독서 되세요!",
            "zh": "您已经准备好了。享受您的阅读吧！",
            "ja": "全て準備が整いました。読書を楽しんでください！",
            "vi": "Bạn đã sẵn sàng. Chúc bạn đọc sách vui vẻ!"
          }
        },
        {
          "role": "user",
          "text": "Thank you very much!",
          "translations": {
            "ko": "정말 감사합니다!",
            "zh": "非常感谢！",
            "ja": "どうもありがとうございます！",
            "vi": "Cảm ơn rất nhiều!"
          }
        }
      ]
    }
  ],
  "advanced": [
    {
      "description": {
        "ko": "직장에서의 갈등 해결",
        "zh": "解决职场冲突",
        "ja": "職場の対立解決",
        "vi": "Giải quyết một mâu thuẫn tại nơi làm việc"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Thank you for taking the time to meet. I wanted to address the tension we've noticed.",
          "translations": {
            "ko": "만나주셔서 감사합니다. 우리가 느낀 긴장감을 해소하고 싶었습니다.",
            "zh": "感谢您抽出时间来见我。我想解决我们注意到的紧张关系。",
            "ja": "お時間をいただきありがとうございます。私たちが感じている緊張感について話したいと思っていました。",
            "vi": "Cảm ơn bạn đã dành thời gian để gặp gỡ. Tôi muốn thảo luận về sự căng thẳng mà chúng ta đã nhận thấy."
          }
        },
        {
          "role": "user",
          "text": "Thank you for initiating this—I agree it’s important to talk things through.",
          "translations": {
            "ko": "이 문제를 제기해주셔서 감사합니다. 이야기를 통해 문제를 해결하는 것이 중요하다고 동의합니다.",
            "zh": "感谢您的主动，我同意我们需要好好谈谈。",
            "ja": "この話し合いを提案してくれてありがとう。私も話し合うことが大切だと思います。",
            "vi": "Cảm ơn bạn đã khởi xướng điều này - tôi đồng ý rằng việc thảo luận mọi thứ là rất quan trọng."
          }
        },
        {
          "role": "ai",
          "text": "It seems there have been some misunderstandings between you and your colleague.",
          "translations": {
            "ko": "당신과 당신의 동료 사이에 오해가 있었던 것 같습니다.",
            "zh": "看起来你和你的同事之间有一些误解。",
            "ja": "あなたとあなたの同僚との間に何か誤解があったようですね。",
            "vi": "Dường như đã có một số hiểu lầm giữa bạn và đồng nghiệp của bạn."
          }
        },
        {
          "role": "user",
          "text": "There have definitely been some challenges in our interactions.",
          "translations": {
            "ko": "우리의 상호 작용에서 몇 가지 어려움이 있었습니다.",
            "zh": "我们的互动中确实遇到了一些挑战。",
            "ja": "確かに私たちのやり取りにはいくつかの課題がありました。",
            "vi": "Chắc chắn đã có một số thách thức trong các tương tác của chúng tôi."
          }
        },
        {
          "role": "ai",
          "text": "Could you share your perspective on what’s been happening?",
          "translations": {
            "ko": "지금까지 일어난 일에 대한 당신의 견해를 공유해주실 수 있나요?",
            "zh": "你能分享一下你对发生的事情的看法吗？",
            "ja": "これまでの状況について、あなたの視点を共有してもらえますか？",
            "vi": "Bạn có thể chia sẻ quan điểm của mình về những gì đã xảy ra không?"
          }
        },
        {
          "role": "user",
          "text": "From my side, I feel there’s been a lack of transparency and clarity.",
          "translations": {
            "ko": "제 입장에서는 투명성과 명확성이 부족했다고 느꼈습니다.",
            "zh": "从我的角度来看，我觉得缺乏透明度和清晰度。",
            "ja": "私の側から見ると、透明性と明確さが欠けているように感じます。",
            "vi": "Từ phía tôi, tôi cảm thấy đã có sự thiếu minh bạch và rõ ràng."
          }
        },
        {
          "role": "ai",
          "text": "I appreciate your honesty—it helps to understand both sides clearly.",
          "translations": {
            "ko": "당신의 솔직함에 감사드립니다. 양측을 명확하게 이해하는 데 도움이 됩니다.",
            "zh": "我欣赏你的诚实，这有助于我们清楚地理解双方的立场。",
            "ja": "あなたの正直さに感謝します。それは両方の立場を明確に理解するのに役立ちます。",
            "vi": "Tôi đánh giá cao sự trung thực của bạn - nó giúp hiểu rõ cả hai bên."
          }
        },
        {
          "role": "user",
          "text": "I understand things may have been misinterpreted.",
          "translations": {
            "ko": "일부가 잘못 해석되었을 수 있다는 것을 이해합니다.",
            "zh": "我理解可能有些事情被误解了。",
            "ja": "物事が誤解されていた可能性があることを理解しています。",
            "vi": "Tôi hiểu rằng có thể đã có sự hiểu lầm."
          }
        },
        {
          "role": "ai",
          "text": "Do you think there’s been a breakdown in communication?",
          "translations": {
            "ko": "의사소통이 중단된 것 같다고 생각하나요?",
            "zh": "你认为我们的沟通出现了问题吗？",
            "ja": "コミュニケーションが崩れていると思いますか？",
            "vi": "Bạn có nghĩ rằng đã có sự cố trong giao tiếp không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I think communication hasn’t always been clear or timely.",
          "translations": {
            "ko": "네, 의사소통이 항상 명확하거나 적시에 이루어지지 않았다고 생각합니다.",
            "zh": "是的，我认为我们的沟通并不总是清晰及时的。",
            "ja": "はい、コミュニケーションが常に明確でタイムリーではなかったと思います。",
            "vi": "Đúng, tôi nghĩ rằng giao tiếp chưa luôn rõ ràng hoặc kịp thời."
          }
        },
        {
          "role": "ai",
          "text": "What would a constructive resolution look like to you?",
          "translations": {
            "ko": "당신에게 건설적인 해결책은 어떤 모습일까요?",
            "zh": "对你来说，一个建设性的解决方案会是什么样子？",
            "ja": "あなたにとって建設的な解決策はどのようなものになりますか？",
            "vi": "Theo bạn, một giải pháp xây dựng sẽ trông như thế nào?"
          }
        },
        {
          "role": "user",
          "text": "A fair resolution would involve setting clearer expectations and roles.",
          "translations": {
            "ko": "공정한 해결책은 더 명확한 기대치와 역할 설정을 포함해야 합니다.",
            "zh": "公平的解决方案应该包括设定更清晰的期望和角色。",
            "ja": "公平な解決策は、期待と役割を明確に設定することを含むべきだと思います。",
            "vi": "Một giải pháp công bằng sẽ liên quan đến việc đặt ra các kỳ vọng và vai trò rõ ràng hơn."
          }
        },
        {
          "role": "ai",
          "text": "Would you be open to a mediated conversation with your colleague?",
          "translations": {
            "ko": "동료와의 중재된 대화에 열려 있을까요?",
            "zh": "你愿意和你的同事进行一次调解对话吗？",
            "ja": "同僚との調停を通じた会話に開かれていますか？",
            "vi": "Bạn có sẵn lòng tham gia vào một cuộc trò chuyện có người hòa giải với đồng nghiệp của mình không?"
          }
        },
        {
          "role": "user",
          "text": "I’m open to that, as long as it’s a respectful dialogue.",
          "translations": {
            "ko": "그것이 존중받는 대화라면, 저는 그것에 열려 있습니다.",
            "zh": "只要是尊重的对话，我愿意。",
            "ja": "それは尊重のある対話であれば、私はそれに開かれています。",
            "vi": "Tôi sẵn lòng tham gia, miễn là đó là một cuộc đối thoại tôn trọng."
          }
        },
        {
          "role": "ai",
          "text": "Our goal is to restore trust and foster a collaborative environment.",
          "translations": {
            "ko": "우리의 목표는 신뢰를 회복하고 협력적인 환경을 조성하는 것입니다.",
            "zh": "我们的目标是恢复信任，促进协作环境。",
            "ja": "私たちの目標は信頼を回復し、協力的な環境を育てることです。",
            "vi": "Mục tiêu của chúng tôi là khôi phục lòng tin và tạo ra một môi trường hợp tác."
          }
        },
        {
          "role": "user",
          "text": "That sounds like a productive direction.",
          "translations": {
            "ko": "그것은 생산적인 방향으로 보입니다.",
            "zh": "这听起来是一个有成效的方向。",
            "ja": "それは生産的な方向性に聞こえます。",
            "vi": "Đó nghe có vẻ như một hướng đi đầy hiệu quả."
          }
        },
        {
          "role": "ai",
          "text": "We’re here to support you throughout this process.",
          "translations": {
            "ko": "우리는 이 과정에서 당신을 지원하기 위해 여기에 있습니다.",
            "zh": "我们将在整个过程中支持你。",
            "ja": "私たちはこのプロセス全体を通じてあなたをサポートします。",
            "vi": "Chúng tôi ở đây để hỗ trợ bạn trong suốt quá trình này."
          }
        },
        {
          "role": "user",
          "text": "I appreciate the support. It makes it easier to speak up.",
          "translations": {
            "ko": "지원에 감사드립니다. 이것이 말하기 더 쉽게 만듭니다.",
            "zh": "我感谢你们的支持，这让我更容易表达自己。",
            "ja": "サポートに感謝します。それは自分の意見を言いやすくします。",
            "vi": "Tôi đánh giá cao sự hỗ trợ - nó giúp tôi dễ dàng nói lên."
          }
        },
        {
          "role": "ai",
          "text": "Let’s schedule a follow-up to evaluate how things progress.",
          "translations": {
            "ko": "어떻게 진행되는지 평가하기 위해 후속 회의를 예정합시다.",
            "zh": "让我们安排一次后续会议，看看事情的进展如何。",
            "ja": "進行状況を評価するためのフォローアップをスケジュールしましょう。",
            "vi": "Hãy lên lịch một cuộc theo dõi để đánh giá cách mọi thứ tiến triển."
          }
        },
        {
          "role": "user",
          "text": "Yes, a follow-up sounds good. Let’s make sure we keep it constructive.",
          "translations": {
            "ko": "네, 후속 회의가 좋을 것 같습니다. 우리는 건설적으로 유지하기 위해 노력해야 합니다.",
            "zh": "是的，后续会议听起来不错。我们要确保保持建设性。",
            "ja": "はい、フォローアップは良いと思います。私たちが建設的に保つことを確認しましょう。",
            "vi": "Đúng, một cuộc theo dõi nghe có vẻ tốt. Hãy đảm bảo rằng chúng ta giữ nó mang tính xây dựng."
          }
        }
      ]
    },
    {
      "description": {
        "ko": "전략적 제안 제시",
        "zh": "提出战略提案",
        "ja": "戦略的提案の提示",
        "vi": "Trình bày một đề xuất chiến lược"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Good morning. I’d like to walk you through the strategic proposal we’ve developed.",
          "translations": {
            "ko": "좋은 아침입니다. 우리가 개발한 전략적 제안에 대해 설명하고자 합니다.",
            "zh": "早上好。我想向你们详细介绍我们制定的战略提案。",
            "ja": "おはようございます。私たちが開発した戦略的提案をご説明したいと思います。",
            "vi": "Chào buổi sáng. Tôi muốn hướng dẫn bạn qua đề xuất chiến lược mà chúng tôi đã phát triển."
          }
        },
        {
          "role": "user",
          "text": "Thanks. I’ve been looking forward to hearing about this.",
          "translations": {
            "ko": "감사합니다. 이것에 대해 듣기를 기다렸습니다.",
            "zh": "谢谢。我一直很期待听到这个。",
            "ja": "ありがとう。これについて聞くのを楽しみにしていました。",
            "vi": "Cảm ơn. Tôi đã rất mong chờ để nghe về điều này."
          }
        },
        {
          "role": "ai",
          "text": "This plan aims to streamline our operations and boost long-term growth.",
          "translations": {
            "ko": "이 계획은 우리의 운영을 간소화하고 장기 성장을 촉진하는 것을 목표로 합니다.",
            "zh": "这个计划旨在简化我们的运营并提升长期增长。",
            "ja": "この計画は、私たちの業務を効率化し、長期的な成長を促進することを目指しています。",
            "vi": "Kế hoạch này nhằm tối ưu hóa hoạt động của chúng tôi và thúc đẩy tăng trưởng dài hạn."
          }
        },
        {
          "role": "user",
          "text": "That’s promising—operational efficiency is definitely a priority.",
          "translations": {
            "ko": "그것은 유망해 보입니다. 운영 효율성은 확실히 우선 순위입니다.",
            "zh": "这很有前景，提高运营效率绝对是我们的优先事项。",
            "ja": "それは有望ですね。運用効率は確かに優先事項です。",
            "vi": "Điều đó rất đáng mừng - hiệu quả hoạt động chắc chắn là ưu tiên."
          }
        },
        {
          "role": "ai",
          "text": "We’ve conducted extensive market research to support our recommendations.",
          "translations": {
            "ko": "우리는 우리의 권장 사항을 지원하기 위해 광범위한 시장 조사를 수행했습니다.",
            "zh": "我们进行了广泛的市场研究来支持我们的建议。",
            "ja": "私たちは、私たちの提案をサポートするために、広範な市場調査を行いました。",
            "vi": "Chúng tôi đã tiến hành nghiên cứu thị trường rộng lớn để hỗ trợ các khuyến nghị của chúng tôi."
          }
        },
        {
          "role": "user",
          "text": "Glad to hear the insights are grounded in data.",
          "translations": {
            "ko": "인사이트가 데이터에 기반을 두고 있다는 것을 들어 기쁩니다.",
            "zh": "很高兴听到这些见解都是基于数据的。",
            "ja": "データに基づいた洞察を得られてうれしいです。",
            "vi": "Rất vui khi nghe thấy các thông tin được dựa trên dữ liệu."
          }
        },
        {
          "role": "ai",
          "text": "Would you like me to start with the high-level overview or dive into specifics?",
          "translations": {
            "ko": "전체적인 개요부터 시작하거나 세부 사항에 들어가길 원하시나요?",
            "zh": "你希望我从总体概述开始还是深入到具体细节？",
            "ja": "高レベルの概要から始めるか、具体的な内容に深く入るか、どちらから始めますか？",
            "vi": "Bạn có muốn tôi bắt đầu với tổng quan cấp cao hay đi sâu vào chi tiết không?"
          }
        },
        {
          "role": "user",
          "text": "Let’s start with the overview to get the big picture.",
          "translations": {
            "ko": "큰 그림을 얻기 위해 개요부터 시작합시다.",
            "zh": "让我们从概述开始，先了解大局。",
            "ja": "大枠を把握するために、概要から始めましょう。",
            "vi": "Hãy bắt đầu với tổng quan để có cái nhìn tổng thể."
          }
        },
        {
          "role": "ai",
          "text": "One key initiative involves restructuring our regional approach.",
          "translations": {
            "ko": "주요한 한 가지 방안은 우리의 지역 접근 방식을 재구성하는 것입니다.",
            "zh": "一项关键的倡议涉及到我们对区域策略的重组。",
            "ja": "1つの重要な取り組みは、私たちの地域戦略の再構築を含んでいます。",
            "vi": "Một sáng kiến quan trọng liên quan đến việc tái cấu trúc phương pháp tiếp cận khu vực của chúng tôi."
          }
        },
        {
          "role": "user",
          "text": "Interesting—how would that affect existing team structures?",
          "translations": {
            "ko": "흥미롭네요-그렇다면 기존 팀 구조에 어떤 영향을 미칠까요?",
            "zh": "有趣——这将如何影响现有的团队结构？",
            "ja": "面白いですね、それは既存のチーム構造にどのような影響を与えますか？",
            "vi": "Thú vị - điều đó sẽ ảnh hưởng như thế nào đến cấu trúc nhóm hiện tại?"
          }
        },
        {
          "role": "ai",
          "text": "We’re also proposing investment in automation to reduce recurring costs.",
          "translations": {
            "ko": "또한 반복되는 비용을 줄이기 위해 자동화에 투자하는 것을 제안하고 있습니다.",
            "zh": "我们还提出投资自动化以降低重复性成本。",
            "ja": "私たちはまた、反復的なコストを削減するための自動化への投資を提案しています。",
            "vi": "Chúng tôi cũng đề xuất đầu tư vào tự động hóa để giảm chi phí định kỳ."
          }
        },
        {
          "role": "user",
          "text": "Automation sounds promising. What’s the estimated return on investment?",
          "translations": {
            "ko": "자동화는 유망해 보입니다. 투자 수익률은 어느 정도로 예상되나요?",
            "zh": "自动化听起来很有前景。投资回报率预计是多少？",
            "ja": "自動化は有望に聞こえます。投資回収の見積もりはどのくらいですか？",
            "vi": "Tự động hóa nghe có vẻ hứa hẹn. Lợi nhuận dự kiến từ đầu tư là bao nhiêu?"
          }
        },
        {
          "role": "ai",
          "text": "All projected outcomes are based on conservative forecasting models.",
          "translations": {
            "ko": "모든 예상 결과는 보수적인 예측 모델에 기반하고 있습니다.",
            "zh": "所有预计的结果都基于保守的预测模型。",
            "ja": "すべての予測結果は保守的な予測モデルに基づいています。",
            "vi": "Tất cả các kết quả dự kiến đều dựa trên các mô hình dự báo thận trọng."
          }
        },
        {
          "role": "user",
          "text": "That’s a smart approach. I appreciate the conservative estimates.",
          "translations": {
            "ko": "그것은 똑똑한 접근 방식입니다. 보수적인 추정치를 감사하게 생각합니다.",
            "zh": "这是一个聪明的做法。我欣赏这种保守的估计。",
            "ja": "賢明なアプローチですね。保守的な見積もりに感謝します。",
            "vi": "Đó là một cách tiếp cận thông minh. Tôi đánh giá cao các ước lượng thận trọng."
          }
        },
        {
          "role": "ai",
          "text": "We’ve also outlined potential risks and corresponding mitigation strategies.",
          "translations": {
            "ko": "또한 잠재적인 위험과 그에 대응하는 완화 전략을 개요로 제시했습니다.",
            "zh": "我们还概述了潜在的风险和相应的缓解策略。",
            "ja": "私たちはまた、潜在的なリスクとそれに対応する緩和策を明示しています。",
            "vi": "Chúng tôi cũng đã mô tả các rủi ro tiềm năng và các chiến lược giảm nhẹ tương ứng."
          }
        },
        {
          "role": "user",
          "text": "Good to know the risks have been anticipated.",
          "translations": {
            "ko": "위험이 예상되었다는 것을 알게 되어 좋습니다.",
            "zh": "很高兴知道风险已经被预见到。",
            "ja": "リスクが予想されていることを知って安心しました。",
            "vi": "Rất tốt khi biết các rủi ro đã được dự đoán."
          }
        },
        {
          "role": "ai",
          "text": "I’d be happy to address any questions or concerns you may have.",
          "translations": {
            "ko": "귀하가 가지고 계실 수 있는 질문이나 우려사항에 대해 답변해 드리겠습니다.",
            "zh": "我很乐意解答您可能有的任何问题或疑虑。",
            "ja": "あなたが持つ可能性のある質問や懸念に対応することを喜んで行います。",
            "vi": "Tôi sẽ rất vui lòng giải đáp bất kỳ câu hỏi hoặc mối quan tâm nào bạn có thể có."
          }
        },
        {
          "role": "user",
          "text": "I do have a few follow-up questions I’ll bring up shortly.",
          "translations": {
            "ko": "곧 제기할 몇 가지 후속 질문이 있습니다.",
            "zh": "我确实有一些后续问题，稍后会提出。",
            "ja": "後ほど提起するいくつかのフォローアップの質問があります。",
            "vi": "Tôi có một số câu hỏi theo dõi, tôi sẽ đưa ra ngay sau đây."
          }
        },
        {
          "role": "ai",
          "text": "Shall we proceed with reviewing the implementation timeline?",
          "translations": {
            "ko": "실행 시간표를 검토하는 것으로 계속 진행할까요?",
            "zh": "我们是否继续审查实施时间表？",
            "ja": "実装のタイムラインのレビューを進めてもよろしいですか？",
            "vi": "Chúng ta có nên tiếp tục xem xét lịch trình triển khai không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, let’s go over the next steps together.",
          "translations": {
            "ko": "네, 다음 단계를 함께 살펴보겠습니다.",
            "zh": "是的，让我们一起讨论下一步的计划。",
            "ja": "はい、次のステップを一緒に見ていきましょう。",
            "vi": "Vâng, hãy cùng nhau xem xét các bước tiếp theo."
          }
        }
      ]
    },
    {
      "description": {
        "ko": "서비스 계약 협상",
        "zh": "商谈服务协议",
        "ja": "サービス契約の交渉",
        "vi": "Đàm phán một thỏa thuận dịch vụ"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Thank you for joining the call. Let’s begin by reviewing the contract terms.",
          "translations": {
            "ko": "통화에 참여해 주셔서 감사합니다. 계약 조건을 검토하는 것부터 시작하겠습니다.",
            "zh": "感谢您参加电话会议。让我们从审查合同条款开始。",
            "ja": "電話会議に参加していただきありがとうございます。まず契約条件のレビューから始めましょう。",
            "vi": "Cảm ơn bạn đã tham gia cuộc gọi. Hãy bắt đầu bằng cách xem xét các điều khoản hợp đồng."
          }
        },
        {
          "role": "user",
          "text": "Thanks for organizing this. I’ve reviewed the contract in detail.",
          "translations": {
            "ko": "이것을 준비해 주셔서 감사합니다. 저는 계약을 자세히 검토했습니다.",
            "zh": "感谢您的组织。我已经详细审查了合同。",
            "ja": "この件を整理していただきありがとうございます。契約を詳細に見てきました。",
            "vi": "Cảm ơn bạn đã tổ chức điều này. Tôi đã xem xét hợp đồng một cách chi tiết."
          }
        },
        {
          "role": "ai",
          "text": "We’ve outlined the scope of services along with expected deliverables.",
          "translations": {
            "ko": "우리는 서비스 범위와 예상되는 결과물을 개요로 제시했습니다.",
            "zh": "我们已经概述了服务范围以及预期的交付成果。",
            "ja": "私たちはサービスの範囲と期待される成果物を明示しています。",
            "vi": "Chúng tôi đã mô tả phạm vi dịch vụ cùng với các sản phẩm mong đợi."
          }
        },
        {
          "role": "user",
          "text": "The scope looks good, but I do have a question about timelines.",
          "translations": {
            "ko": "범위는 좋아 보이지만, 시간표에 대한 질문이 있습니다.",
            "zh": "范围看起来不错，但我对时间表有一个问题。",
            "ja": "範囲は良さそうですが、タイムラインについては質問があります。",
            "vi": "Phạm vi nhìn chung tốt, nhưng tôi có một câu hỏi về thời gian."
          }
        },
        {
          "role": "ai",
          "text": "Are there any specific clauses you’d like to revisit before proceeding?",
          "translations": {
            "ko": "진행하기 전에 다시 살펴보고 싶은 특정 조항이 있나요?",
            "zh": "在继续之前，有没有任何特定的条款你想再看一下？",
            "ja": "進行する前に再訪問したい特定の条項はありますか？",
            "vi": "Có bất kỳ điều khoản cụ thể nào bạn muốn xem xét lại trước khi tiếp tục không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, the termination clause might need clarification.",
          "translations": {
            "ko": "네, 종료 조항에 대한 명확화가 필요할 수 있습니다.",
            "zh": "是的，终止条款可能需要澄清。",
            "ja": "はい、終了条項は明確化が必要かもしれません。",
            "vi": "Vâng, điều khoản chấm dứt có thể cần được làm rõ."
          }
        },
        {
          "role": "ai",
          "text": "We’re flexible on the payment terms within reason.",
          "translations": {
            "ko": "합리적인 범위 내에서 결제 조건에 대해 유연하게 대응할 수 있습니다.",
            "zh": "在合理范围内，我们对付款条款有灵活性。",
            "ja": "私たちは、合理的な範囲内で支払い条件に柔軟性を持っています。",
            "vi": "Chúng tôi linh hoạt về điều khoản thanh toán trong phạm vi hợp lý."
          }
        },
        {
          "role": "user",
          "text": "Appreciate the flexibility on payment terms.",
          "translations": {
            "ko": "결제 조건에 대한 유연성에 감사드립니다.",
            "zh": "感谢您对付款条款的灵活性。",
            "ja": "支払い条件についての柔軟性に感謝します。",
            "vi": "Tôi đánh giá cao sự linh hoạt về điều khoản thanh toán."
          }
        },
        {
          "role": "ai",
          "text": "Would you prefer quarterly billing or monthly installments?",
          "translations": {
            "ko": "분기별 청구서를 선호하시나요, 아니면 월별 할부를 선호하시나요?",
            "zh": "您更喜欢季度结算还是月分期付款？",
            "ja": "四半期ごとの請求を希望しますか、それとも月々の分割払いを希望しますか？",
            "vi": "Bạn có muốn thanh toán hàng quý hay trả góp hàng tháng?"
          }
        },
        {
          "role": "user",
          "text": "Monthly installments would work better on our end.",
          "translations": {
            "ko": "월별 할부가 우리 쪽에 더 잘 맞을 것 같습니다.",
            "zh": "月分期付款更适合我们。",
            "ja": "月々の分割払いが私たちにとってはより適しています。",
            "vi": "Trả góp hàng tháng sẽ phù hợp hơn với chúng tôi."
          }
        },
        {
          "role": "ai",
          "text": "Our legal team can make minor adjustments if needed.",
          "translations": {
            "ko": "필요하다면 우리 법률팀이 소소한 조정을 할 수 있습니다.",
            "zh": "如果需要，我们的法律团队可以做出小的调整。",
            "ja": "必要であれば、私たちの法務チームが小さな調整を行うことができます。",
            "vi": "Đội ngũ pháp lý của chúng tôi có thể điều chỉnh nhỏ nếu cần."
          }
        },
        {
          "role": "user",
          "text": "That sounds reasonable. I'll run it by our counsel.",
          "translations": {
            "ko": "그것은 합리적으로 들립니다. 저희 법률 고문에게 문의해 보겠습니다.",
            "zh": "这听起来很合理。我会让我们的法律顾问审查一下。",
            "ja": "それは合理的に聞こえます。私たちの弁護士に相談してみます。",
            "vi": "Điều đó nghe có vẻ hợp lý. Tôi sẽ trình bày với luật sư của chúng tôi."
          }
        },
        {
          "role": "ai",
          "text": "We’d like to finalize this by early next week, if possible.",
          "translations": {
            "ko": "가능하다면 다음 주 초에 이것을 마무리 짓고 싶습니다.",
            "zh": "如果可能的话，我们希望在下周初完成这个。",
            "ja": "可能であれば、来週初めまでにこれを最終化したいと考えています。",
            "vi": "Chúng tôi muốn hoàn thiện điều này vào đầu tuần sau, nếu có thể."
          }
        },
        {
          "role": "user",
          "text": "Early next week is doable if no major edits arise.",
          "translations": {
            "ko": "큰 수정이 없다면 다음 주 초에 가능합니다.",
            "zh": "如果没有大的修改，下周初是可以的。",
            "ja": "大きな編集がなければ、来週初めには可能です。",
            "vi": "Đầu tuần sau là khả thi nếu không có sửa đổi lớn nào xảy ra."
          }
        },
        {
          "role": "ai",
          "text": "Can we agree to schedule a legal review by Friday?",
          "translations": {
            "ko": "금요일까지 법률 검토를 예정할 수 있을까요?",
            "zh": "我们可以同意在周五之前安排法律审查吗？",
            "ja": "金曜日までに法的なレビューをスケジュールすることに同意できますか？",
            "vi": "Chúng ta có thể đồng ý lên lịch xem xét pháp lý vào thứ Sáu không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, Friday works. I’ll notify our legal team.",
          "translations": {
            "ko": "네, 금요일이 괜찮습니다. 저희 법률팀에게 알려드리겠습니다.",
            "zh": "是的，周五可以。我会通知我们的法律团队。",
            "ja": "はい、金曜日は大丈夫です。私たちの法務チームに通知します。",
            "vi": "Vâng, thứ Sáu phù hợp. Tôi sẽ thông báo cho đội ngũ pháp lý của chúng tôi."
          }
        },
        {
          "role": "ai",
          "text": "We’ll provide the finalized draft by end of day tomorrow.",
          "translations": {
            "ko": "우리는 내일 하루 종일에 걸쳐 최종 초안을 제공할 것입니다.",
            "zh": "我们将在明天结束时提供最后的草案。",
            "ja": "明日の終わりまでに最終案を提供します。",
            "vi": "Chúng tôi sẽ cung cấp bản dự thảo hoàn thiện vào cuối ngày mai."
          }
        },
        {
          "role": "user",
          "text": "Great. We’ll look out for the updated draft.",
          "translations": {
            "ko": "좋습니다. 업데이트된 초안을 기다리겠습니다.",
            "zh": "很好。我们会关注最新的草案。",
            "ja": "素晴らしい。更新版のドラフトを待っています。",
            "vi": "Tốt. Chúng tôi sẽ chờ đợi bản dự thảo cập nhật."
          }
        },
        {
          "role": "ai",
          "text": "Please let us know if you require additional documentation.",
          "translations": {
            "ko": "추가 문서가 필요하면 알려주세요.",
            "zh": "如果您需要额外的文件，请告诉我们。",
            "ja": "追加の書類が必要な場合はお知らせください。",
            "vi": "Vui lòng cho chúng tôi biết nếu bạn cần thêm tài liệu."
          }
        },
        {
          "role": "user",
          "text": "Thanks. I’ll follow up if we need anything further.",
          "translations": {
            "ko": "감사합니다. 필요한 것이 더 있으면 연락하겠습니다.",
            "zh": "谢谢。如果我们需要其他信息，我会跟进的。",
            "ja": "ありがとう。何か他に必要なものがあればフォローアップします。",
            "vi": "Cảm ơn. Tôi sẽ liên lạc nếu chúng tôi cần thêm thông tin gì."
          }
        }
      ]
    },
    {
      "description": {
        "ko": "성과 피드백 제공",
        "zh": "提供绩效反馈",
        "ja": "パフォーマンスのフィードバックを提供する",
        "vi": "Cung cấp phản hồi về hiệu suất"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Thanks for coming in. I wanted to give you feedback on your recent work.",
          "translations": {
            "ko": "오셔서 감사합니다. 최근 작업에 대한 피드백을 드리려고 했습니다.",
            "zh": "谢谢你过来。我想就你最近的工作给你一些反馈。",
            "ja": "来てくれてありがとう。最近のあなたの仕事についてフィードバックをしたいと思います。",
            "vi": "Cảm ơn bạn đã đến. Tôi muốn đưa ra phản hồi về công việc gần đây của bạn."
          }
        },
        {
          "role": "user",
          "text": "Thanks for the feedback. I appreciate your openness.",
          "translations": {
            "ko": "피드백 감사합니다. 당신의 솔직함에 감사드립니다.",
            "zh": "谢谢你的反馈。我很感激你的坦诚。",
            "ja": "フィードバックをありがとう。あなたのオープンさに感謝します。",
            "vi": "Cảm ơn phản hồi. Tôi đánh giá cao sự mở lòng của bạn."
          }
        },
        {
          "role": "ai",
          "text": "Overall, your performance has been solid and consistent.",
          "translations": {
            "ko": "전반적으로 성과가 안정적이고 일관되었습니다.",
            "zh": "总的来说，你的表现稳定且连贯。",
            "ja": "全体的に、あなたのパフォーマンスは安定しています。",
            "vi": "Tổng thể, hiệu suất của bạn đã rất ổn định và nhất quán."
          }
        },
        {
          "role": "user",
          "text": "I’ve been trying to stay consistent in my output.",
          "translations": {
            "ko": "나는 항상 일관된 결과를 내려고 노력했습니다.",
            "zh": "我一直在努力保持我的输出稳定。",
            "ja": "私は自分のアウトプットが一貫しているように努力しています。",
            "vi": "Tôi đã cố gắng duy trì sự nhất quán trong công việc của mình."
          }
        },
        {
          "role": "ai",
          "text": "One area that stands out is your proactive approach to problem-solving.",
          "translations": {
            "ko": "문제 해결에 대한 당신의 적극적인 접근이 눈에 띕니다.",
            "zh": "你主动解决问题的方式是你的一个突出之处。",
            "ja": "特筆すべき点は、問題解決に対するあなたの積極的なアプローチです。",
            "vi": "Một lĩnh vực nổi bật là cách tiếp cận chủ động của bạn trong việc giải quyết vấn đề."
          }
        },
        {
          "role": "user",
          "text": "I’m glad the initiative has been noticeable.",
          "translations": {
            "ko": "그런 노력이 눈에 띄었다니 기쁩니다.",
            "zh": "我很高兴我的主动性被注意到了。",
            "ja": "その積極性が認められてうれしいです。",
            "vi": "Tôi rất vui khi sự chủ động của mình đã được chú ý."
          }
        },
        {
          "role": "ai",
          "text": "That said, there are a few things we can work on together.",
          "translations": {
            "ko": "그렇지만, 함께 개선해야 할 몇 가지 사항이 있습니다.",
            "zh": "话虽如此，我们还有一些事情可以一起改进。",
            "ja": "それはそうと、一緒に取り組むことができるいくつかの点があります。",
            "vi": "Tuy nhiên, có một số điều chúng ta có thể cùng nhau cải thiện."
          }
        },
        {
          "role": "user",
          "text": "I’m open to feedback and improvement.",
          "translations": {
            "ko": "피드백과 개선에 열려 있습니다.",
            "zh": "我愿意接受反馈和改进。",
            "ja": "フィードバックと改善には開放的です。",
            "vi": "Tôi rất sẵn lòng nhận phản hồi và cải thiện."
          }
        },
        {
          "role": "ai",
          "text": "Meeting deadlines has occasionally been a challenge.",
          "translations": {
            "ko": "마감일을 지키는 것이 가끔 어려웠습니다.",
            "zh": "有时候，你在满足截止日期方面有些挑战。",
            "ja": "締め切りを守ることが時々課題になっています。",
            "vi": "Việc đáp ứng thời hạn đôi khi là một thách thức."
          }
        },
        {
          "role": "user",
          "text": "Yes, I know I’ve missed a couple of target dates.",
          "translations": {
            "ko": "네, 몇 번의 목표 날짜를 놓친 것을 알고 있습니다.",
            "zh": "是的，我知道我错过了几个目标日期。",
            "ja": "はい、私はいくつかの目標日を逃したことを知っています。",
            "vi": "Đúng, tôi biết tôi đã bỏ lỡ một vài ngày mục tiêu."
          }
        },
        {
          "role": "ai",
          "text": "Improving time estimates would greatly benefit your planning.",
          "translations": {
            "ko": "시간 예측을 개선하면 계획에 큰 도움이 될 것입니다.",
            "zh": "改进时间估计将极大地有助于你的计划。",
            "ja": "時間の見積もりを改善することがあなたの計画に大いに役立つでしょう。",
            "vi": "Việc cải thiện ước lượng thời gian sẽ hỗ trợ rất nhiều cho việc lập kế hoạch của bạn."
          }
        },
        {
          "role": "user",
          "text": "I agree. Better time estimation is something I need to work on.",
          "translations": {
            "ko": "동의합니다. 시간 예측을 더 잘하는 것이 필요합니다.",
            "zh": "我同意。更好的时间估计是我需要改进的地方。",
            "ja": "同意します。時間の見積もりの改善は私が取り組むべきことです。",
            "vi": "Tôi đồng ý. Việc ước lượng thời gian tốt hơn là điều tôi cần cải thiện."
          }
        },
        {
          "role": "ai",
          "text": "Have you encountered any obstacles that impacted your workflow?",
          "translations": {
            "ko": "작업 흐름에 영향을 미친 장애물이 있었나요?",
            "zh": "你有遇到过任何影响你工作流程的障碍吗？",
            "ja": "あなたのワークフローに影響を与える障害に遭遇しましたか？",
            "vi": "Bạn có gặp phải bất kỳ trở ngại nào ảnh hưởng đến quy trình làm việc của bạn không?"
          }
        },
        {
          "role": "user",
          "text": "Mostly internal dependencies and shifting priorities.",
          "translations": {
            "ko": "대부분 내부 의존성과 변화하는 우선순위였습니다.",
            "zh": "主要是内部依赖和优先级的变化。",
            "ja": "主に内部依存と優先順位の変更です。",
            "vi": "Chủ yếu là sự phụ thuộc nội bộ và sự thay đổi ưu tiên."
          }
        },
        {
          "role": "ai",
          "text": "We’d like to support you in developing project management skills.",
          "translations": {
            "ko": "프로젝트 관리 기술을 개발하는 데 도움을 드리고 싶습니다.",
            "zh": "我们希望支持你发展项目管理技能。",
            "ja": "プロジェクト管理のスキルを開発するためのサポートをしたいと思います。",
            "vi": "Chúng tôi muốn hỗ trợ bạn trong việc phát triển kỹ năng quản lý dự án."
          }
        },
        {
          "role": "user",
          "text": "That would be great. I’d welcome that kind of support.",
          "translations": {
            "ko": "그것이 좋겠습니다. 그런 지원을 환영합니다.",
            "zh": "那太好了。我欢迎这种支持。",
            "ja": "それは素晴らしい。そのようなサポートは大歓迎です。",
            "vi": "Điều đó thật tuyệt. Tôi rất hoan nghênh sự hỗ trợ như vậy."
          }
        },
        {
          "role": "ai",
          "text": "Let’s set some specific goals for the upcoming quarter.",
          "translations": {
            "ko": "다가오는 분기에 대한 구체적인 목표를 설정해봅시다.",
            "zh": "让我们为下个季度设定一些具体的目标。",
            "ja": "来四半期に向けて具体的な目標を設定しましょう。",
            "vi": "Hãy đặt một số mục tiêu cụ thể cho quý sắp tới."
          }
        },
        {
          "role": "user",
          "text": "Yes, setting concrete goals would help with focus.",
          "translations": {
            "ko": "네, 구체적인 목표를 설정하는 것이 집중력에 도움이 될 것 같습니다.",
            "zh": "是的，设定具体的目标会有助于集中精力。",
            "ja": "はい、具体的な目標を設定することは集中力に役立つでしょう。",
            "vi": "Đúng, việc đặt mục tiêu cụ thể sẽ giúp tôi tập trung hơn."
          }
        },
        {
          "role": "ai",
          "text": "Does that sound like a good plan to you?",
          "translations": {
            "ko": "그것이 좋은 계획으로 보이나요?",
            "zh": "这听起来像一个好计划吗？",
            "ja": "それはあなたにとって良い計画に聞こえますか？",
            "vi": "Điều đó có giống như một kế hoạch tốt đối với bạn không?"
          }
        },
        {
          "role": "user",
          "text": "Absolutely. Let’s move forward with that.",
          "translations": {
            "ko": "그럼요. 그렇게 진행합시다.",
            "zh": "绝对的。让我们按照这个计划进行。",
            "ja": "絶対に。それで進めましょう。",
            "vi": "Chắc chắn. Hãy tiếp tục với kế hoạch đó."
          }
        }
      ]
    },
    {
      "description": {
        "ko": "팀 회의 주재",
        "zh": "主持团队会议",
        "ja": "チームミーティングをリードする",
        "vi": "Lãnh đạo một cuộc họp nhóm"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Thanks everyone for being here. Let’s start with a quick status update.",
          "translations": {
            "ko": "여기에 오신 모든 분들께 감사드립니다. 빠른 상태 업데이트부터 시작해봅시다.",
            "zh": "感谢大家的到来。让我们从快速的状态更新开始。",
            "ja": "皆さん、ここに来てくれてありがとう。まずは簡単なステータスのアップデートから始めましょう。",
            "vi": "Cảm ơn mọi người đã đến. Hãy bắt đầu với một bản cập nhật tình hình nhanh."
          }
        },
        {
          "role": "user",
          "text": "Thanks. I’ll go first with the status update.",
          "translations": {
            "ko": "감사합니다. 상태 업데이트를 먼저 하겠습니다.",
            "zh": "谢谢。我先来进行状态更新。",
            "ja": "ありがとう。私からステータスのアップデートを始めます。",
            "vi": "Cảm ơn. Tôi sẽ cập nhật tình hình đầu tiên."
          }
        },
        {
          "role": "ai",
          "text": "Please keep your updates brief and focused on current blockers.",
          "translations": {
            "ko": "업데이트를 간결하게 하고 현재의 장애물에 초점을 맞춰주세요.",
            "zh": "请保持你的更新简洁并专注于当前的阻碍。",
            "ja": "アップデートは簡潔に、現在のブロッカーに焦点を当ててください。",
            "vi": "Vui lòng giữ bản cập nhật của bạn ngắn gọn và tập trung vào các vấn đề hiện tại."
          }
        },
        {
          "role": "user",
          "text": "No blockers on my end, just working through QA feedback.",
          "translations": {
            "ko": "제 쪽에는 장애물이 없고, QA 피드백을 처리하고 있습니다.",
            "zh": "我这边没有阻碍，只是在处理QA反馈。",
            "ja": "私の方ではブロッカーはありません、ただQAのフィードバックを処理しています。",
            "vi": "Không có vấn đề gì ở phía tôi, chỉ đang xử lý phản hồi từ QA."
          }
        },
        {
          "role": "ai",
          "text": "After that, we’ll move on to the roadmap discussion.",
          "translations": {
            "ko": "그 후에 로드맵 토론으로 넘어갈 것입니다.",
            "zh": "之后，我们将讨论路线图。",
            "ja": "その後、ロードマップの議論に移ります。",
            "vi": "Sau đó, chúng ta sẽ chuyển sang thảo luận về lộ trình."
          }
        },
        {
          "role": "user",
          "text": "Looking forward to discussing the roadmap.",
          "translations": {
            "ko": "로드맵에 대해 논의하는 것을 기대하고 있습니다.",
            "zh": "期待讨论路线图。",
            "ja": "ロードマップについて議論するのを楽しみにしています。",
            "vi": "Mong chờ thảo luận về lộ trình."
          }
        },
        {
          "role": "ai",
          "text": "I’d also like to revisit our sprint goals.",
          "translations": {
            "ko": "저희의 스프린트 목표를 다시 살펴보고 싶습니다.",
            "zh": "我也想重新审视我们的冲刺目标。",
            "ja": "私たちのスプリントの目標を再訪したいと思います。",
            "vi": "Tôi cũng muốn xem lại mục tiêu sprint của chúng ta."
          }
        },
        {
          "role": "user",
          "text": "I think we’re slightly behind on goal three.",
          "translations": {
            "ko": "목표 세 가지 중에 약간 뒤처져 있는 것 같습니다.",
            "zh": "我认为我们在第三个目标上稍微落后了。",
            "ja": "私たちは目標3に少し遅れていると思います。",
            "vi": "Tôi nghĩ chúng ta đang hơi chậm so với mục tiêu thứ ba."
          }
        },
        {
          "role": "ai",
          "text": "Let’s make sure we’re aligned on delivery timelines.",
          "translations": {
            "ko": "배송 일정에 대해 우리가 일치하는지 확인합시다.",
            "zh": "让我们确保我们在交付时间表上保持一致。",
            "ja": "納期のタイムラインについて確認しましょう。",
            "vi": "Hãy đảm bảo chúng ta đồng lòng về thời gian giao hàng."
          }
        },
        {
          "role": "user",
          "text": "We should adjust the timeline for that deliverable.",
          "translations": {
            "ko": "그 배송물에 대한 타임라인을 조정해야 합니다.",
            "zh": "我们应该调整那个可交付物的时间表。",
            "ja": "その成果物のタイムラインを調整すべきです。",
            "vi": "Chúng ta nên điều chỉnh thời gian biểu cho sản phẩm đó."
          }
        },
        {
          "role": "ai",
          "text": "If anyone needs help, feel free to raise it during the call.",
          "translations": {
            "ko": "누구든지 도움이 필요하면 통화 중에 제기해 주세요.",
            "zh": "如果有人需要帮助，可以在电话会议中提出。",
            "ja": "誰かが助けが必要なら、電話会議中に気軽に言ってください。",
            "vi": "Nếu ai cần giúp đỡ, hãy tự do nêu ra trong cuộc gọi."
          }
        },
        {
          "role": "user",
          "text": "I might need some support from DevOps later this week.",
          "translations": {
            "ko": "이번 주 후반에는 DevOps로부터 지원이 필요할 수도 있습니다.",
            "zh": "这周晚些时候我可能需要DevOps的一些支持。",
            "ja": "今週後半にはDevOpsからのサポートが必要かもしれません。",
            "vi": "Tôi có thể cần sự hỗ trợ từ DevOps vào cuối tuần này."
          }
        },
        {
          "role": "ai",
          "text": "We’ll spend the last 10 minutes reviewing key risks.",
          "translations": {
            "ko": "마지막 10분은 주요 위험을 검토하는 데 사용하겠습니다.",
            "zh": "我们将在最后10分钟内审查关键风险。",
            "ja": "最後の10分間は重要なリスクのレビューに費やします。",
            "vi": "Chúng ta sẽ dành 10 phút cuối để xem xét các rủi ro chính."
          }
        },
        {
          "role": "user",
          "text": "That makes sense. Risk review is important.",
          "translations": {
            "ko": "그게 맞습니다. 위험 검토는 중요합니다.",
            "zh": "这很有道理。风险审查很重要。",
            "ja": "それは理にかなっています。リスクレビューは重要です。",
            "vi": "Điều đó có lý. Việc xem xét rủi ro là quan trọng."
          }
        },
        {
          "role": "ai",
          "text": "Don’t forget to update your task boards after the meeting.",
          "translations": {
            "ko": "회의 후에는 작업 보드를 업데이트하는 것을 잊지 마세요.",
            "zh": "会议结束后不要忘记更新你的任务板。",
            "ja": "会議後にタスクボードを更新するのを忘れないでください。",
            "vi": "Đừng quên cập nhật bảng công việc của bạn sau cuộc họp."
          }
        },
        {
          "role": "user",
          "text": "Will do. I’ll update my items today.",
          "translations": {
            "ko": "알겠습니다. 오늘 제 항목을 업데이트하겠습니다.",
            "zh": "好的，我今天会更新我的项目。",
            "ja": "承知しました。今日中に私の項目を更新します。",
            "vi": "Sẽ làm. Tôi sẽ cập nhật các mục của mình hôm nay."
          }
        },
        {
          "role": "ai",
          "text": "If there’s any follow-up, we’ll handle it asynchronously.",
          "translations": {
            "ko": "후속 조치가 필요하다면, 우리는 비동기적으로 처리하겠습니다.",
            "zh": "如果有任何后续，我们将异步处理。",
            "ja": "フォローアップが必要な場合は、非同期で対応します。",
            "vi": "Nếu có bất kỳ việc theo dõi nào, chúng tôi sẽ xử lý nó một cách không đồng bộ."
          }
        },
        {
          "role": "user",
          "text": "Okay. I’ll send follow-up notes afterward.",
          "translations": {
            "ko": "알겠습니다. 나중에 후속 노트를 보내겠습니다.",
            "zh": "好的，我会在之后发送后续笔记。",
            "ja": "了解しました。後でフォローアップのメモを送ります。",
            "vi": "Được. Tôi sẽ gửi ghi chú theo dõi sau đó."
          }
        },
        {
          "role": "ai",
          "text": "Let’s wrap up and aim to stay on track this week.",
          "translations": {
            "ko": "마무리하고 이번 주에 계획대로 진행하려고 합시다.",
            "zh": "让我们总结一下，本周目标是保持进度。",
            "ja": "終わりにしましょう、そして今週は進行状況を保つことを目指しましょう。",
            "vi": "Hãy kết thúc và hướng tới việc giữ đúng tiến độ trong tuần này."
          }
        },
        {
          "role": "user",
          "text": "Sounds good. Thanks for facilitating.",
          "translations": {
            "ko": "좋습니다. 주재해 주셔서 감사합니다.",
            "zh": "听起来不错。感谢你的协助。",
            "ja": "良いですね。ファシリテートしてくれてありがとう。",
            "vi": "Nghe có vẻ tốt. Cảm ơn vì đã điều phối."
          }
        }
      ]
    },
    {
      "description": {
        "ko": "면접 진행하기",
        "zh": "进行一次工作面试",
        "ja": "面接を行う",
        "vi": "Tiến hành một cuộc phỏng vấn xin việc"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Thanks for taking the time to speak with us today.",
          "translations": {
            "ko": "오늘 저희와 이야기할 시간을 내 주셔서 감사합니다.",
            "zh": "感谢你今天抽出时间和我们交谈。",
            "ja": "今日はお話しいただきありがとうございます。",
            "vi": "Cảm ơn bạn đã dành thời gian để nói chuyện với chúng tôi hôm nay."
          }
        },
        {
          "role": "user",
          "text": "Thank you for having me. I appreciate the opportunity.",
          "translations": {
            "ko": "초대해 주셔서 감사합니다. 이 기회에 감사드립니다.",
            "zh": "感谢你的邀请，我很感谢这个机会。",
            "ja": "お招きいただきありがとうございます。この機会を大切にしたいと思います。",
            "vi": "Cảm ơn bạn đã mời tôi. Tôi đánh giá cao cơ hội này."
          }
        },
        {
          "role": "ai",
          "text": "Could you walk me through your recent experience?",
          "translations": {
            "ko": "최근의 경험을 설명해 주실 수 있나요?",
            "zh": "你能介绍一下你最近的经历吗？",
            "ja": "最近の経験について教えていただけますか？",
            "vi": "Bạn có thể giới thiệu về kinh nghiệm gần đây của bạn?"
          }
        },
        {
          "role": "user",
          "text": "Certainly. I’ve spent the last two years in a similar role.",
          "translations": {
            "ko": "그럼요. 저는 최근 두 년 동안 비슷한 역할을 맡았습니다.",
            "zh": "当然，我在过去的两年里在一个类似的角色中工作。",
            "ja": "もちろんです。私は過去2年間、同様の役割を果たしてきました。",
            "vi": "Chắc chắn. Tôi đã dành hai năm qua cho một vai trò tương tự."
          }
        },
        {
          "role": "ai",
          "text": "What would you say are your core strengths?",
          "translations": {
            "ko": "당신의 핵심 역량은 무엇이라고 말하시겠습니까?",
            "zh": "你认为你的核心优势是什么？",
            "ja": "あなたの主要な強みは何だと思いますか？",
            "vi": "Bạn có thể nói những điểm mạnh cốt lõi của bạn là gì?"
          }
        },
        {
          "role": "user",
          "text": "I’d say problem-solving and adaptability are key strengths.",
          "translations": {
            "ko": "문제 해결과 적응성이 주요 강점이라고 말하겠습니다.",
            "zh": "我认为解决问题和适应性是关键优势。",
            "ja": "問題解決能力と適応性が主要な強みだと言えます。",
            "vi": "Tôi nghĩ khả năng giải quyết vấn đề và thích ứng là những điểm mạnh chính."
          }
        },
        {
          "role": "ai",
          "text": "Can you share a challenge you’ve faced and how you addressed it?",
          "translations": {
            "ko": "당신이 직면한 도전과 그것을 어떻게 해결했는지 공유해 주실 수 있나요?",
            "zh": "你能分享一下你面临的挑战以及你是如何解决的吗？",
            "ja": "あなたが直面した課題とそれにどのように対処したかを共有していただけますか？",
            "vi": "Bạn có thể chia sẻ một thách thức mà bạn đã đối mặt và cách bạn giải quyết nó?"
          }
        },
        {
          "role": "user",
          "text": "Once I had to turn around a failing project under tight time pressure.",
          "translations": {
            "ko": "한번은 시간 압박 속에서 실패하고 있는 프로젝트를 뒤집어야 했습니다.",
            "zh": "曾经我不得不在时间压力下扭转一个失败的项目。",
            "ja": "一度、厳しい時間制約の下で失敗しそうなプロジェクトを立て直さなければならなかったことがあります。",
            "vi": "Một lần tôi phải đảo ngược một dự án thất bại dưới áp lực thời gian chặt chẽ."
          }
        },
        {
          "role": "ai",
          "text": "How do you typically manage competing priorities?",
          "translations": {
            "ko": "일반적으로 경쟁하는 우선순위를 어떻게 관리하나요?",
            "zh": "你通常如何管理相互竞争的优先事项？",
            "ja": "あなたは通常、競合する優先順位をどのように管理しますか？",
            "vi": "Bạn thường quản lý các ưu tiên cạnh tranh như thế nào?"
          }
        },
        {
          "role": "user",
          "text": "I prioritize based on deadlines and impact, then plan accordingly.",
          "translations": {
            "ko": "저는 마감일과 영향을 기준으로 우선순위를 정하고, 그에 따라 계획합니다.",
            "zh": "我根据截止日期和影响进行优先排序，然后相应地计划。",
            "ja": "締め切りと影響度に基づいて優先順位をつけ、それに応じて計画します。",
            "vi": "Tôi ưu tiên dựa trên thời hạn và tác động, sau đó lập kế hoạch tương ứng."
          }
        },
        {
          "role": "ai",
          "text": "Why are you interested in this role specifically?",
          "translations": {
            "ko": "왜 이 역할에 특히 관심이 있나요?",
            "zh": "你为什么对这个角色特别感兴趣？",
            "ja": "なぜこの役割に特に興味があるのですか？",
            "vi": "Tại sao bạn quan tâm đến vị trí này cụ thể?"
          }
        },
        {
          "role": "user",
          "text": "The role aligns with my background and future goals.",
          "translations": {
            "ko": "이 역할은 제 배경과 미래의 목표와 일치합니다.",
            "zh": "这个角色与我的背景和未来目标相符。",
            "ja": "この役割は私のバックグラウンドと未来の目標と一致しています。",
            "vi": "Vị trí này phù hợp với lý lịch và mục tiêu tương lai của tôi."
          }
        },
        {
          "role": "ai",
          "text": "What do you hope to achieve in the next few years?",
          "translations": {
            "ko": "앞으로 몇 년 동안 어떤 것을 이루고 싶으신가요?",
            "zh": "你希望在未来几年里实现什么？",
            "ja": "あなたは次の数年で何を達成したいと考えていますか？",
            "vi": "Bạn hy vọng đạt được gì trong vài năm tới?"
          }
        },
        {
          "role": "user",
          "text": "I’d like to continue growing in leadership and strategy.",
          "translations": {
            "ko": "리더십과 전략에서 계속 성장하고 싶습니다.",
            "zh": "我希望在领导力和策略上继续成长。",
            "ja": "リーダーシップと戦略の成長を続けたいと考えています。",
            "vi": "Tôi muốn tiếp tục phát triển về lãnh đạo và chiến lược."
          }
        },
        {
          "role": "ai",
          "text": "Do you prefer working independently or in a team environment?",
          "translations": {
            "ko": "당신은 독립적으로 일하는 것을 선호하시나요, 아니면 팀 환경에서 일하는 것을 선호하시나요?",
            "zh": "你更喜欢独立工作还是团队环境？",
            "ja": "独立して働くこととチーム環境で働くこと、どちらが好きですか？",
            "vi": "Bạn thích làm việc độc lập hay trong môi trường nhóm?"
          }
        },
        {
          "role": "user",
          "text": "Both are important, but I thrive in team environments.",
          "translations": {
            "ko": "둘 다 중요하지만, 저는 팀 환경에서 더 잘 해낼 수 있습니다.",
            "zh": "两者都很重要，但我在团队环境中更能发挥。",
            "ja": "どちらも重要ですが、私はチーム環境で活躍します。",
            "vi": "Cả hai đều quan trọng, nhưng tôi thích làm việc trong môi trường nhóm hơn."
          }
        },
        {
          "role": "ai",
          "text": "Is there anything you’d like to ask us?",
          "translations": {
            "ko": "우리에게 물어보고 싶은 것이 있나요?",
            "zh": "你有什么想问我们的吗？",
            "ja": "何か私たちに尋ねたいことはありますか？",
            "vi": "Có điều gì bạn muốn hỏi chúng tôi không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, could you describe the day-to-day responsibilities?",
          "translations": {
            "ko": "네, 일상적인 업무 책임에 대해 설명해주실 수 있나요?",
            "zh": "是的，你能描述一下日常的职责吗？",
            "ja": "はい、日々の責任を説明していただけますか？",
            "vi": "Vâng, bạn có thể mô tả về trách nhiệm hàng ngày không?"
          }
        },
        {
          "role": "ai",
          "text": "Thanks again. We’ll be in touch soon.",
          "translations": {
            "ko": "다시 한번 감사드립니다. 곧 연락드리겠습니다.",
            "zh": "再次感谢。我们会尽快与你联系。",
            "ja": "再度ありがとうございます。近々連絡します。",
            "vi": "Cảm ơn một lần nữa. Chúng tôi sẽ liên hệ lại sớm."
          }
        },
        {
          "role": "user",
          "text": "Thank you. I look forward to hearing from you.",
          "translations": {
            "ko": "감사합니다. 연락을 기다리겠습니다.",
            "zh": "谢谢。我期待你的回复。",
            "ja": "ありがとうございます。ご連絡をお待ちしております。",
            "vi": "Cảm ơn. Tôi mong chờ tin từ bạn."
          }
        }
      ]
    },
    {
      "description": {
        "ko": "컨퍼런스에서 발표하기",
        "zh": "在会议上发表演讲",
        "ja": "会議でのプレゼンテーション",
        "vi": "Trình bày tại một hội nghị"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Good morning everyone, and thank you for being here.",
          "translations": {
            "ko": "모두들 좋은 아침입니다. 여기에 참석해주셔서 감사드립니다.",
            "zh": "大家早上好，感谢你们的到来。",
            "ja": "皆さん、おはようございます。そして、ここにいてくださりありがとうございます。",
            "vi": "Chào buổi sáng mọi người, và cảm ơn vì đã đến đây."
          }
        },
        {
          "role": "user",
          "text": "Thank you for the introduction.",
          "translations": {
            "ko": "소개해주셔서 감사합니다.",
            "zh": "感谢你的介绍。",
            "ja": "紹介いただきありがとうございます。",
            "vi": "Cảm ơn vì đã giới thiệu."
          }
        },
        {
          "role": "ai",
          "text": "Today, I’ll be discussing emerging trends in our industry.",
          "translations": {
            "ko": "오늘은 우리 산업에서 나타나는 신흥 트렌드에 대해 이야기하겠습니다.",
            "zh": "今天，我将讨论我们行业中的新兴趋势。",
            "ja": "今日は、私たちの業界での新興トレンドについて話します。",
            "vi": "Hôm nay, tôi sẽ thảo luận về các xu hướng mới nổi trong ngành của chúng ta."
          }
        },
        {
          "role": "user",
          "text": "Looking forward to hearing more about the data.",
          "translations": {
            "ko": "데이터에 대해 더 자세히 듣는 것을 기대합니다.",
            "zh": "期待听到更多关于数据的信息。",
            "ja": "データについて詳しく聞くのを楽しみにしています。",
            "vi": "Mong chờ nghe thêm về dữ liệu."
          }
        },
        {
          "role": "ai",
          "text": "We’ll start with a brief overview of the data we collected.",
          "translations": {
            "ko": "우리가 수집한 데이터에 대한 간략한 개요부터 시작하겠습니다.",
            "zh": "我们将从我们收集的数据的简要概述开始。",
            "ja": "私たちが収集したデータの概要から始めます。",
            "vi": "Chúng tôi sẽ bắt đầu bằng một cái nhìn tổng quan về dữ liệu mà chúng tôi đã thu thập."
          }
        },
        {
          "role": "user",
          "text": "That sounds comprehensive.",
          "translations": {
            "ko": "그것은 상세하게 들립니다.",
            "zh": "听起来很全面。",
            "ja": "それは包括的に聞こえます。",
            "vi": "Điều đó nghe có vẻ toàn diện."
          }
        },
        {
          "role": "ai",
          "text": "Next, I’ll highlight key insights that emerged from our analysis.",
          "translations": {
            "ko": "다음으로, 우리의 분석에서 나타난 주요 인사이트를 강조하겠습니다.",
            "zh": "接下来，我将突出我们的分析中出现的关键见解。",
            "ja": "次に、分析から浮かび上がった重要な洞察を強調します。",
            "vi": "Tiếp theo, tôi sẽ nêu bật những thông tin quan trọng từ phân tích của chúng tôi."
          }
        },
        {
          "role": "user",
          "text": "Great, case studies always help bring things to life.",
          "translations": {
            "ko": "좋습니다, 케이스 스터디는 항상 이해를 돕습니다.",
            "zh": "很好，案例研究总是能使事情更生动。",
            "ja": "素晴らしい、ケーススタディは常に物事を生き生きとさせます。",
            "vi": "Tuyệt, các nghiên cứu trường hợp luôn giúp mọi thứ trở nên sinh động hơn."
          }
        },
        {
          "role": "ai",
          "text": "These findings have significant implications for the coming year.",
          "translations": {
            "ko": "이러한 발견은 내년에 중요한 영향을 미칠 것입니다.",
            "zh": "这些发现对于来年有重大影响。",
            "ja": "これらの調査結果は、来年に向けて重大な意味を持っています。",
            "vi": "Những phát hiện này có ý nghĩa quan trọng cho năm tới."
          }
        },
        {
          "role": "user",
          "text": "I'm curious about the implications for our own work.",
          "translations": {
            "ko": "우리의 작업에 미치는 영향에 대해 궁금합니다.",
            "zh": "我对这对我们自己的工作的影响很好奇。",
            "ja": "自分たちの仕事に対する影響について興味があります。",
            "vi": "Tôi tò mò về hậu quả cho công việc của chúng tôi."
          }
        },
        {
          "role": "ai",
          "text": "I’ll also share a few case studies to illustrate our points.",
          "translations": {
            "ko": "또한, 우리의 주장을 설명하기 위해 몇 가지 케이스 스터디를 공유하겠습니다.",
            "zh": "我也会分享一些案例研究来说明我们的观点。",
            "ja": "ポイントを説明するために、いくつかのケーススタディも共有します。",
            "vi": "Tôi cũng sẽ chia sẻ một số nghiên cứu trường hợp để minh họa cho quan điểm của chúng tôi."
          }
        },
        {
          "role": "user",
          "text": "Do you plan to expand the research further?",
          "translations": {
            "ko": "연구를 더 확장할 계획이 있나요?",
            "zh": "你打算进一步扩展研究吗？",
            "ja": "研究をさらに拡大する予定はありますか？",
            "vi": "Bạn có dự định mở rộng nghiên cứu thêm không?"
          }
        },
        {
          "role": "ai",
          "text": "Please feel free to hold questions until the end.",
          "translations": {
            "ko": "질문은 마지막까지 기다려 주시기 바랍니다.",
            "zh": "请在结束时再提问。",
            "ja": "質問は最後まで保留していただいて構いません。",
            "vi": "Xin vui lòng giữ câu hỏi cho đến cuối."
          }
        },
        {
          "role": "user",
          "text": "Noted. I’ll hold my questions until the end.",
          "translations": {
            "ko": "알겠습니다. 질문은 마지막까지 기다리겠습니다.",
            "zh": "注意到了。我会在结束时提问。",
            "ja": "承知しました。質問は最後まで保留します。",
            "vi": "Đã ghi nhớ. Tôi sẽ giữ câu hỏi cho đến cuối."
          }
        },
        {
          "role": "ai",
          "text": "All materials will be made available afterward for download.",
          "translations": {
            "ko": "모든 자료는 나중에 다운로드 받을 수 있게 제공될 것입니다.",
            "zh": "所有材料将在之后提供下载。",
            "ja": "すべての資料は後でダウンロード可能になります。",
            "vi": "Tất cả tài liệu sẽ được cung cấp sau để tải về."
          }
        },
        {
          "role": "user",
          "text": "Appreciate that. I’d love to review the slides.",
          "translations": {
            "ko": "감사합니다. 슬라이드를 다시 검토하고 싶습니다.",
            "zh": "感谢。我想复习一下幻灯片。",
            "ja": "それはありがたいです。スライドを見直したいです。",
            "vi": "Cảm ơn. Tôi muốn xem lại các slide."
          }
        },
        {
          "role": "ai",
          "text": "We welcome feedback and further discussion after the session.",
          "translations": {
            "ko": "세션 후에 피드백과 추가 토론을 환영합니다.",
            "zh": "我们欢迎在会议结束后提供反馈和进一步讨论。",
            "ja": "セッション後のフィードバックとさらなる議論を歓迎します。",
            "vi": "Chúng tôi hoan nghênh phản hồi và thảo luận thêm sau phiên họp."
          }
        },
        {
          "role": "user",
          "text": "Sure, I may follow up afterward.",
          "translations": {
            "ko": "그럼요, 나중에 추가적으로 연락드릴 수도 있습니다.",
            "zh": "好的，我可能会在之后跟进。",
            "ja": "了解です、後でフォローアップするかもしれません。",
            "vi": "Được, tôi có thể liên hệ sau."
          }
        },
        {
          "role": "ai",
          "text": "Let’s begin with the first section of the presentation.",
          "translations": {
            "ko": "발표의 첫 번째 부분부터 시작하겠습니다.",
            "zh": "让我们从演示文稿的第一部分开始。",
            "ja": "プレゼンテーションの最初のセクションから始めましょう。",
            "vi": "Hãy bắt đầu với phần đầu tiên của bài thuyết trình."
          }
        },
        {
          "role": "user",
          "text": "Ready for the content. Please go ahead.",
          "translations": {
            "ko": "내용에 대해 준비되었습니다. 시작해주세요.",
            "zh": "准备好了内容。请继续。",
            "ja": "内容に備えています。どうぞ進めてください。",
            "vi": "Sẵn sàng cho nội dung. Xin hãy tiếp tục."
          }
        }
      ]
    },
    {
      "description": {
        "ko": "브레인스토밍 세션 진행하기",
        "zh": "主持一个头脑风暴会议",
        "ja": "ブレインストーミングセッションの進行",
        "vi": "Điều phối một phiên họp động não"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Let’s begin by setting a few ground rules for today’s session.",
          "translations": {
            "ko": "오늘의 세션에 대한 몇 가지 기본 규칙을 설정하는 것부터 시작하겠습니다.",
            "zh": "让我们通过设定今天会议的一些基本规则开始。",
            "ja": "今日のセッションのためのいくつかの基本ルールを設定して始めましょう。",
            "vi": "Hãy bắt đầu bằng việc đặt ra một số quy tắc cơ bản cho phiên họp hôm nay."
          }
        },
        {
          "role": "user",
          "text": "Sounds great. I’ll keep an open mind.",
          "translations": {
            "ko": "좋습니다. 개방적인 마음으로 참여하겠습니다.",
            "zh": "听起来不错。我会保持开放的心态。",
            "ja": "いいですね。オープンマインドで参加します。",
            "vi": "Nghe có vẻ tốt. Tôi sẽ giữ tâm trí mở."
          }
        },
        {
          "role": "ai",
          "text": "There are no bad ideas—we want to encourage creativity.",
          "translations": {
            "ko": "나쁜 아이디어는 없습니다—창의성을 장려하고 싶습니다.",
            "zh": "没有坏的想法——我们要鼓励创新。",
            "ja": "悪いアイデアはありません—創造性を奨励したいです。",
            "vi": "Không có ý tưởng nào là xấu—chúng tôi muốn khuyến khích sự sáng tạo."
          }
        },
        {
          "role": "user",
          "text": "I like that approach—it helps loosen things up.",
          "translations": {
            "ko": "그 접근법이 좋네요—것들을 풀어주는 데 도움이 됩니다.",
            "zh": "我喜欢这种方法——它有助于放松气氛。",
            "ja": "そのアプローチが好きです—物事をリラックスさせるのに役立ちます。",
            "vi": "Tôi thích cách tiếp cận đó—nó giúp mọi thứ trở nên lỏng lẻo hơn."
          }
        },
        {
          "role": "ai",
          "text": "Feel free to build on someone else’s suggestion.",
          "translations": {
            "ko": "다른 사람의 제안을 바탕으로 자유롭게 발전시켜 보세요.",
            "zh": "随意在别人的建议上做出补充。",
            "ja": "自由に他の人の提案に取り組んでください。",
            "vi": "Hãy tự do xây dựng trên đề xuất của người khác."
          }
        },
        {
          "role": "user",
          "text": "I’ll try to add to what someone else says.",
          "translations": {
            "ko": "다른 사람이 말한 것에 더하려고 노력하겠습니다.",
            "zh": "我会尝试对别人的话进行补充。",
            "ja": "私は他の人が言ったことに追加しようとします。",
            "vi": "Tôi sẽ cố gắng thêm vào những gì người khác nói."
          }
        },
        {
          "role": "ai",
          "text": "Let’s focus on quantity of ideas before we assess quality.",
          "translations": {
            "ko": "아이디어의 질을 평가하기 전에 양에 집중합시다.",
            "zh": "在我们评估质量之前，让我们先关注想法的数量。",
            "ja": "質を評価する前に、アイデアの量に焦点を当てましょう。",
            "vi": "Hãy tập trung vào số lượng ý tưởng trước khi chúng ta đánh giá chất lượng."
          }
        },
        {
          "role": "user",
          "text": "Got it. Volume over precision for now.",
          "translations": {
            "ko": "알겠습니다. 지금은 정확성보다 양에 초점을 맞추겠습니다.",
            "zh": "明白了。现在重视数量而非精确度。",
            "ja": "了解しました。今のところは量重視です。",
            "vi": "Hiểu rồi. Ưu tiên số lượng hơn độ chính xác trong thời gian này."
          }
        },
        {
          "role": "ai",
          "text": "We’ll use a whiteboard to capture everything in real time.",
          "translations": {
            "ko": "실시간으로 모든 것을 기록하기 위해 화이트보드를 사용하겠습니다.",
            "zh": "我们将使用白板实时记录所有内容。",
            "ja": "ホワイトボードを使って、すべてをリアルタイムで記録します。",
            "vi": "Chúng tôi sẽ sử dụng bảng trắng để ghi lại mọi thứ theo thời gian thực."
          }
        },
        {
          "role": "user",
          "text": "That’s helpful. Real-time notes are useful.",
          "translations": {
            "ko": "도움이 되네요. 실시간 메모는 유용합니다.",
            "zh": "这很有帮助。实时记录是有用的。",
            "ja": "それは役立ちます。リアルタイムのメモは便利です。",
            "vi": "Điều đó rất hữu ích. Ghi chú theo thời gian thực rất hữu ích."
          }
        },
        {
          "role": "ai",
          "text": "Try to avoid overthinking. Just speak freely.",
          "translations": {
            "ko": "과도한 생각을 피하려고 노력하세요. 그냥 자유롭게 말하세요.",
            "zh": "尽量避免过度思考。随意发言。",
            "ja": "考えすぎるのを避けてください。自由に話してください。",
            "vi": "Cố gắng tránh suy nghĩ quá nhiều. Hãy tự do phát biểu."
          }
        },
        {
          "role": "user",
          "text": "Okay, I’ll try not to filter my thoughts too much.",
          "translations": {
            "ko": "알겠습니다, 생각을 너무 걸러내지 않도록 노력하겠습니다.",
            "zh": "好的，我会尽量不过滤我的想法。",
            "ja": "はい、思考をあまりフィルタリングしないようにします。",
            "vi": "Được, tôi sẽ cố gắng không lọc suy nghĩ của mình quá nhiều."
          }
        },
        {
          "role": "ai",
          "text": "Once we’ve gathered input, we’ll cluster ideas into themes.",
          "translations": {
            "ko": "의견을 모두 모은 후, 아이디어를 테마별로 묶을 것입니다.",
            "zh": "收集完意见后，我们将把想法归类为主题。",
            "ja": "意見を集めたら、アイデアをテーマごとにまとめます。",
            "vi": "Khi chúng tôi đã thu thập đầu vào, chúng tôi sẽ phân nhóm ý tưởng thành các chủ đề."
          }
        },
        {
          "role": "user",
          "text": "Makes sense. Grouping them later will help.",
          "translations": {
            "ko": "이해가 됩니다. 나중에 그룹화하면 도움이 될 것입니다.",
            "zh": "有道理。稍后进行分组会有帮助。",
            "ja": "理解しました。後でグループ化すると役立ちます。",
            "vi": "Có lý. Việc phân nhóm chúng sau sẽ giúp ích."
          }
        },
        {
          "role": "ai",
          "text": "We’ll then vote on which ones to pursue further.",
          "translations": {
            "ko": "그 후 어떤 것을 더 추구할지 투표하겠습니다.",
            "zh": "然后我们将投票决定进一步追求哪些想法。",
            "ja": "その後、どのアイデアをさらに追求するか投票します。",
            "vi": "Sau đó, chúng tôi sẽ bỏ phiếu để xem nên tiếp tục theo đuổi ý tưởng nào."
          }
        },
        {
          "role": "user",
          "text": "Happy to vote on what resonates most.",
          "translations": {
            "ko": "가장 공감되는 것에 투표하는 것이 기쁩니다.",
            "zh": "很愿意对最有共鸣的想法进行投票。",
            "ja": "最も共感するものに投票するのは嬉しいです。",
            "vi": "Rất vui được bỏ phiếu cho những điều tôi cảm thấy phù hợp nhất."
          }
        },
        {
          "role": "ai",
          "text": "Please be respectful of all contributions, even if you disagree.",
          "translations": {
            "ko": "동의하지 않더라도 모든 기여에 대해 존중해 주세요.",
            "zh": "即使你不同意，也请尊重所有的贡献。",
            "ja": "同意できないとしても、すべての貢献を尊重してください。",
            "vi": "Hãy tôn trọng tất cả các đóng góp, ngay cả khi bạn không đồng ý."
          }
        },
        {
          "role": "user",
          "text": "Absolutely. Respect makes for better collaboration.",
          "translations": {
            "ko": "맞습니다. 존중은 더 나은 협업을 위해 필요합니다.",
            "zh": "绝对的。尊重有助于更好的协作。",
            "ja": "確かに。尊重はより良い協力を生む。",
            "vi": "Chắc chắn. Sự tôn trọng tạo nên sự hợp tác tốt hơn."
          }
        },
        {
          "role": "ai",
          "text": "Let’s start with a warm-up: name one product you wish existed.",
          "translations": {
            "ko": "워밍업으로 시작해봅시다: 존재했으면 하는 제품 하나를 말해보세요.",
            "zh": "让我们从一个热身开始：说出你希望存在的一个产品。",
            "ja": "ウォームアップから始めましょう：存在してほしい製品を1つ挙げてください。",
            "vi": "Hãy bắt đầu với một phần mở đầu: đặt tên cho một sản phẩm bạn mong muốn tồn tại."
          }
        },
        {
          "role": "user",
          "text": "Fun! I’ve got a few ideas already.",
          "translations": {
            "ko": "재미있네요! 이미 몇 가지 아이디어가 있습니다.",
            "zh": "有趣！我已经有几个想法了。",
            "ja": "楽しい！既にいくつかのアイデアがあります。",
            "vi": "Thú vị! Tôi đã có một số ý tưởng."
          }
        }
      ]
    },
    {
      "description": {
        "ko": "분기 보고서를 검토하다",
        "zh": "审查季度报告",
        "ja": "四半期報告のレビュー",
        "vi": "Đánh giá báo cáo quý"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Let’s take a look at this quarter’s performance metrics.",
          "translations": {
            "ko": "이번 분기의 성과 지표를 살펴봅시다.",
            "zh": "让我们看看这个季度的绩效指标。",
            "ja": "今四半期のパフォーマンス指標を見てみましょう。",
            "vi": "Hãy xem xét các chỉ số hiệu suất của quý này."
          }
        },
        {
          "role": "user",
          "text": "Thanks for pulling all of this together.",
          "translations": {
            "ko": "이 모든 것을 준비해줘서 고맙습니다.",
            "zh": "感谢你整理了所有这些信息。",
            "ja": "これをまとめてくれてありがとう。",
            "vi": "Cảm ơn bạn đã tổng hợp tất cả những điều này."
          }
        },
        {
          "role": "ai",
          "text": "Revenue is up by 12 percent compared to the last quarter.",
          "translations": {
            "ko": "수익이 지난 분기에 비해 12 퍼센트 상승했습니다.",
            "zh": "与上个季度相比，收入增长了12%。",
            "ja": "売上は前四半期に比べて12パーセント増加しました。",
            "vi": "Doanh thu tăng 12 phần trăm so với quý trước."
          }
        },
        {
          "role": "user",
          "text": "That revenue jump is encouraging.",
          "translations": {
            "ko": "수익 증가는 희망적입니다.",
            "zh": "收入的增长是令人鼓舞的。",
            "ja": "売上の増加は励みになります。",
            "vi": "Sự tăng trưởng doanh thu là điều khả quan."
          }
        },
        {
          "role": "ai",
          "text": "Customer retention improved, particularly in key segments.",
          "translations": {
            "ko": "고객 유지율이 특히 핵심 세그먼트에서 개선되었습니다.",
            "zh": "客户保留率有所提高，特别是在关键部分。",
            "ja": "顧客の保持率が向上し、特に重要なセグメントで改善しました。",
            "vi": "Sự giữ chân khách hàng đã cải thiện, đặc biệt là trong các phân khúc chính."
          }
        },
        {
          "role": "user",
          "text": "Retention improvements are good news.",
          "translations": {
            "ko": "유지율 개선은 좋은 소식입니다.",
            "zh": "保留率的提高是个好消息。",
            "ja": "保持率の改善は良いニュースです。",
            "vi": "Sự cải thiện về giữ chân khách hàng là tin tốt."
          }
        },
        {
          "role": "ai",
          "text": "However, support ticket volume also saw a noticeable increase.",
          "translations": {
            "ko": "그러나, 지원 티켓의 양도 눈에 띄게 증가했습니다.",
            "zh": "然而，支持票务量也显著增加。",
            "ja": "しかし、サポートチケットの量も目立って増加しました。",
            "vi": "Tuy nhiên, số lượng vé hỗ trợ cũng tăng đáng kể."
          }
        },
        {
          "role": "user",
          "text": "I wonder what’s driving the support ticket spike.",
          "translations": {
            "ko": "지원 티켓의 급증 원인이 무엇인지 궁금합니다.",
            "zh": "我想知道是什么导致了支持票务的激增。",
            "ja": "サポートチケットの急増の原因が何か気になります。",
            "vi": "Tôi tự hỏi điều gì đang làm tăng số vé hỗ trợ."
          }
        },
        {
          "role": "ai",
          "text": "Marketing spend came in slightly above budget.",
          "translations": {
            "ko": "마케팅 비용이 예산보다 약간 높게 나왔습니다.",
            "zh": "市场营销开支略高于预算。",
            "ja": "マーケティングの支出は予算をわずかに上回りました。",
            "vi": "Chi tiêu cho marketing vượt mức ngân sách một chút."
          }
        },
        {
          "role": "user",
          "text": "That’s something we’ll need to plan for next time.",
          "translations": {
            "ko": "그것은 다음 번에 계획해야 할 것입니다.",
            "zh": "这是我们下次需要计划的事情。",
            "ja": "それは次回の計画に必要なことです。",
            "vi": "Đó là điều chúng tôi cần lên kế hoạch cho lần sau."
          }
        },
        {
          "role": "ai",
          "text": "We exceeded our hiring goals across all departments.",
          "translations": {
            "ko": "모든 부서에서 채용 목표를 초과했습니다.",
            "zh": "我们在所有部门都超额完成了招聘目标。",
            "ja": "全部門で採用目標を上回りました。",
            "vi": "Chúng tôi đã vượt mục tiêu tuyển dụng ở tất cả các bộ phận."
          }
        },
        {
          "role": "user",
          "text": "Great to hear about the hiring success.",
          "translations": {
            "ko": "채용 성공에 대해 들어서 기쁩니다.",
            "zh": "很高兴听到招聘成功的消息。",
            "ja": "採用成功について聞いてうれしいです。",
            "vi": "Rất vui khi nghe về thành công trong việc tuyển dụng."
          }
        },
        {
          "role": "ai",
          "text": "Profit margins were slightly impacted by supply chain costs.",
          "translations": {
            "ko": "공급망 비용으로 인해 이익률이 약간 영향을 받았습니다.",
            "zh": "供应链成本略微影响了利润率。",
            "ja": "供給チェーンのコストが利益率に少し影響を与えました。",
            "vi": "Biên lợi nhuận đã bị ảnh hưởng nhẹ bởi chi phí chuỗi cung ứng."
          }
        },
        {
          "role": "user",
          "text": "Supply chain costs seem like a recurring challenge.",
          "translations": {
            "ko": "공급망 비용은 반복적으로 문제가 되는 것 같습니다.",
            "zh": "供应链成本似乎是一个反复出现的挑战。",
            "ja": "供給チェーンのコストは繰り返し問題となっているようです。",
            "vi": "Chi phí chuỗi cung ứng dường như là một thách thức lặp đi lặp lại."
          }
        },
        {
          "role": "ai",
          "text": "We’ll need to keep a close eye on inventory turnover next quarter.",
          "translations": {
            "ko": "다음 분기에는 재고 회전율을 철저히 관리해야 합니다.",
            "zh": "下个季度我们需要密切关注库存周转。",
            "ja": "次の四半期は在庫回転率に注意を払う必要があります。",
            "vi": "Chúng tôi sẽ cần để mắt đến vấn đề lưu chuyển hàng tồn kho vào quý tới."
          }
        },
        {
          "role": "user",
          "text": "Yes, inventory turnover has been tricky lately.",
          "translations": {
            "ko": "네, 요즘 재고 회전율이 까다로운 편입니다.",
            "zh": "是的，最近库存周转一直比较棘手。",
            "ja": "はい、最近の在庫回転率は難しいです。",
            "vi": "Đúng, vấn đề lưu chuyển hàng tồn kho đã gặp khó khăn gần đây."
          }
        },
        {
          "role": "ai",
          "text": "Please review the appendix for department-level breakdowns.",
          "translations": {
            "ko": "부서별 세부 내역은 부록을 참고해 주세요.",
            "zh": "请查看附录以了解部门级别的细分。",
            "ja": "部門別の詳細については付録をご確認ください。",
            "vi": "Vui lòng xem phụ lục để biết thông tin chi tiết theo từng bộ phận."
          }
        },
        {
          "role": "user",
          "text": "I’ll take a closer look at the appendix.",
          "translations": {
            "ko": "부록을 좀 더 자세히 살펴보겠습니다.",
            "zh": "我会仔细查看附录。",
            "ja": "付録を詳しく見てみます。",
            "vi": "Tôi sẽ xem kỹ hơn phụ lục."
          }
        },
        {
          "role": "ai",
          "text": "Let me know if you have any questions about the numbers.",
          "translations": {
            "ko": "숫자에 대해 궁금한 점이 있으면 알려주세요.",
            "zh": "如果你对这些数字有任何疑问，请告诉我。",
            "ja": "数字について何か質問があればお知らせください。",
            "vi": "Hãy cho tôi biết nếu bạn có bất kỳ câu hỏi nào về các con số."
          }
        },
        {
          "role": "user",
          "text": "I do have a few questions I’ll send later.",
          "translations": {
            "ko": "나중에 보낼 몇 가지 질문이 있습니다.",
            "zh": "我确实有几个问题稍后会发送。",
            "ja": "後で送るいくつかの質問があります。",
            "vi": "Tôi có một số câu hỏi sẽ gửi sau."
          }
        }
      ]
    },
    {
      "description": {
        "ko": "긴급한 고객 요청 처리",
        "zh": "处理紧急的客户请求",
        "ja": "緊急のクライアントリクエストの対応",
        "vi": "Xử lý yêu cầu khẩn cấp từ khách hàng"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Thanks for reaching out. We understand this is time-sensitive.",
          "translations": {
            "ko": "연락 주셔서 감사합니다. 이것이 시간이 중요한 것임을 이해합니다.",
            "zh": "感谢你的联系。我们理解这是时间敏感的。",
            "ja": "ご連絡いただきありがとうございます。これは時間が重要であることを理解しています。",
            "vi": "Cảm ơn bạn đã liên hệ. Chúng tôi hiểu rằng điều này đòi hỏi sự nhanh chóng."
          }
        },
        {
          "role": "user",
          "text": "Thanks for getting back to me so quickly.",
          "translations": {
            "ko": "빠르게 답변해 주셔서 감사합니다.",
            "zh": "感谢你这么快就回复我。",
            "ja": "すぐに返信していただきありがとうございます。",
            "vi": "Cảm ơn bạn đã phản hồi tôi nhanh chóng."
          }
        },
        {
          "role": "ai",
          "text": "Can you walk me through the issue as it stands?",
          "translations": {
            "ko": "현재 상황을 자세히 설명해 주실 수 있나요?",
            "zh": "你能帮我理解当前的问题吗？",
            "ja": "現状の問題を詳しく教えていただけますか？",
            "vi": "Bạn có thể giải thích cho tôi vấn đề hiện tại?"
          }
        },
        {
          "role": "user",
          "text": "Yes, here’s what’s going on right now.",
          "translations": {
            "ko": "네, 지금 이런 상황입니다.",
            "zh": "是的，这就是现在的情况。",
            "ja": "はい、現在の状況は次の通りです。",
            "vi": "Đúng, đây là những gì đang xảy ra ngay bây giờ."
          }
        },
        {
          "role": "ai",
          "text": "We’ll prioritize this and loop in the relevant teams immediately.",
          "translations": {
            "ko": "이를 우선 순위에 두고 즉시 관련 팀에 알릴 것입니다.",
            "zh": "我们会优先处理这个问题，并立即通知相关团队。",
            "ja": "これを優先し、関連チームをすぐに巻き込みます。",
            "vi": "Chúng tôi sẽ ưu tiên điều này và liên lạc với các đội liên quan ngay lập tức."
          }
        },
        {
          "role": "user",
          "text": "Appreciate that. It really can’t wait.",
          "translations": {
            "ko": "그것을 감사합니다. 정말로 기다릴 수 없습니다.",
            "zh": "感谢你的理解。这真的不能等待。",
            "ja": "それを評価します。これは待つことができません。",
            "vi": "Cảm ơn. Điều này thực sự không thể chờ đợi."
          }
        },
        {
          "role": "ai",
          "text": "Do you have a specific deadline we should be aware of?",
          "translations": {
            "ko": "우리가 알아야 할 특정한 마감 시간이 있나요?",
            "zh": "你们有特定的截止日期吗，我们需要知道吗？",
            "ja": "私たちが知るべき特定の締め切りはありますか？",
            "vi": "Bạn có một thời hạn cụ thể mà chúng tôi nên biết không?"
          }
        },
        {
          "role": "user",
          "text": "Ideally we’d have a solution before end of day.",
          "translations": {
            "ko": "이상적으로는 하루 종일 해결책을 갖고 있었으면 합니다.",
            "zh": "理想情况下，我们希望在今天结束之前有一个解决方案。",
            "ja": "理想的には、一日の終わりまでに解決策を持っていたいです。",
            "vi": "Lý tưởng nhất là chúng tôi có giải pháp trước cuối ngày."
          }
        },
        {
          "role": "ai",
          "text": "We’ll send a confirmation once the update is live.",
          "translations": {
            "ko": "업데이트가 적용되면 확인 메시지를 보내드리겠습니다.",
            "zh": "更新上线后，我们会发送确认信息。",
            "ja": "更新がライブになったら確認を送ります。",
            "vi": "Chúng tôi sẽ gửi xác nhận một khi bản cập nhật đã được đưa lên."
          }
        },
        {
          "role": "user",
          "text": "Got it. I’ll wait for confirmation.",
          "translations": {
            "ko": "알겠습니다. 확인을 기다리겠습니다.",
            "zh": "明白了。我会等待确认。",
            "ja": "了解しました。確認を待ちます。",
            "vi": "Đã hiểu. Tôi sẽ chờ xác nhận."
          }
        },
        {
          "role": "ai",
          "text": "If anything changes on your side, please let us know.",
          "translations": {
            "ko": "여러분 쪽에서 변동 사항이 있으면 알려주세요.",
            "zh": "如果你们那边有任何变化，请告诉我们。",
            "ja": "あなたの側で何か変わることがあれば、お知らせください。",
            "vi": "Nếu có bất kỳ thay đổi nào từ phía bạn, vui lòng cho chúng tôi biết."
          }
        },
        {
          "role": "user",
          "text": "Will do. I’ll notify you if anything shifts.",
          "translations": {
            "ko": "그렇게 하겠습니다. 변동 사항이 있으면 알려드리겠습니다.",
            "zh": "好的。如果有任何变动，我会通知你们。",
            "ja": "了解しました。何か変わることがあればお知らせします。",
            "vi": "Được rồi. Tôi sẽ thông báo cho bạn nếu có bất kỳ thay đổi nào."
          }
        },
        {
          "role": "ai",
          "text": "We’re escalating this to ensure it gets prompt attention.",
          "translations": {
            "ko": "이것을 즉시 처리하기 위해 상황을 긴급히 상향 조정하고 있습니다.",
            "zh": "我们正在升级处理这个问题，以确保它得到及时的关注。",
            "ja": "これをエスカレートして、迅速な対応を確保します。",
            "vi": "Chúng tôi đang tăng cường điều này để đảm bảo nó nhận được sự chú ý kịp thời."
          }
        },
        {
          "role": "user",
          "text": "Thanks for treating this as a top priority.",
          "translations": {
            "ko": "이것을 최우선 순위로 처리해 주셔서 감사합니다.",
            "zh": "感谢你把这个问题作为首要任务。",
            "ja": "これを最優先事項として扱っていただきありがとうございます。",
            "vi": "Cảm ơn bạn đã coi điều này là ưu tiên hàng đầu."
          }
        },
        {
          "role": "ai",
          "text": "We’ll provide progress updates every few hours.",
          "translations": {
            "ko": "몇 시간마다 진행 상황을 업데이트해 드리겠습니다.",
            "zh": "我们会每隔几小时提供一次进度更新。",
            "ja": "数時間ごとに進捗状況を更新します。",
            "vi": "Chúng tôi sẽ cung cấp cập nhật tiến trình sau mỗi vài giờ."
          }
        },
        {
          "role": "user",
          "text": "That would be helpful. I’ll keep an eye out.",
          "translations": {
            "ko": "그것이 도움이 될 것입니다. 주의 깊게 지켜보겠습니다.",
            "zh": "那会很有帮助。我会留意的。",
            "ja": "それは助かります。注意して見ています。",
            "vi": "Điều đó sẽ hữu ích. Tôi sẽ để ý."
          }
        },
        {
          "role": "ai",
          "text": "Let’s schedule a check-in tomorrow morning just in case.",
          "translations": {
            "ko": "혹시 모르니 내일 아침에 확인하는 시간을 잡아봅시다.",
            "zh": "以防万一，我们明天早上安排一个检查。",
            "ja": "念のため、明日の朝にチェックインをスケジュールしましょう。",
            "vi": "Hãy lên lịch họp kiểm tra vào sáng mai chỉ để đảm bảo."
          }
        },
        {
          "role": "user",
          "text": "Let’s do that. I’ll be available at 10.",
          "translations": {
            "ko": "그렇게 합시다. 저는 10시에 가능합니다.",
            "zh": "好的。我在10点有空。",
            "ja": "それにしましょう。私は10時に利用可能です。",
            "vi": "Hãy làm như vậy. Tôi sẽ rảnh vào lúc 10 giờ."
          }
        },
        {
          "role": "ai",
          "text": "Is there anything else you need from us right now?",
          "translations": {
            "ko": "지금 우리에게 필요한 것이 또 있나요?",
            "zh": "现在你们还需要我们提供什么吗？",
            "ja": "今すぐ私たちから何か必要なことはありますか？",
            "vi": "Có điều gì khác bạn cần từ chúng tôi ngay bây giờ không?"
          }
        },
        {
          "role": "user",
          "text": "No, that covers it. Thank you again.",
          "translations": {
            "ko": "아니요, 그것으로 충분합니다. 다시 한번 감사합니다.",
            "zh": "不，这就够了。再次感谢你。",
            "ja": "いえ、それで十分です。再度ありがとうございます。",
            "vi": "Không, điều đó đã bao gồm tất cả. Cảm ơn bạn một lần nữa."
          }
        }
      ]
    }
  ]
};