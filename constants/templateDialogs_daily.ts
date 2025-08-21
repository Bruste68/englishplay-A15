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
        "en": "Making a doctor's appointment",
        "ko": "의사와의 약속 잡기",
        "zh": "预约看医生",
        "ja": "医者の予約をする",
        "vi": "Đặt lịch hẹn với bác sĩ"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Good morning. How can I help you today?",
          "translations": {
            "ko": "좋은 아침입니다. 오늘 어떻게 도와드릴까요?",
            "zh": "早上好。今天我能帮你做什么？",
            "ja": "おはようございます。何かお手伝いできることはありますか？",
            "vi": "Chào buổi sáng. Tôi có thể giúp gì cho bạn hôm nay?",
            "en": "Good morning. How can I help you today?"
          }
        },
        {
          "role": "user",
          "text": "Hi, I’d like to make an appointment with Dr. Kim.",
          "translations": {
            "ko": "안녕하세요, 김 의사와 약속을 잡고 싶습니다.",
            "zh": "嗨，我想预约金医生的诊疗。",
            "ja": "こんにちは、キム医師の予約をしたいのですが。",
            "vi": "Chào, tôi muốn đặt lịch hẹn với bác sĩ Kim.",
            "en": "Hi, I’d like to make an appointment with Dr. Kim."
          }
        },
        {
          "role": "ai",
          "text": "Sure. What day are you looking at?",
          "translations": {
            "ko": "알겠습니다. 어느 날짜를 원하시나요?",
            "zh": "好的。你想预约哪一天？",
            "ja": "了解です。何日をご希望ですか？",
            "vi": "Được. Bạn muốn hẹn ngày nào?",
            "en": "Sure. What day are you looking at?"
          }
        },
        {
          "role": "user",
          "text": "Is she available this Thursday afternoon?",
          "translations": {
            "ko": "이번 주 목요일 오후에 가능한가요?",
            "zh": "她这周四下午有空吗？",
            "ja": "今週の木曜日の午後は空いていますか？",
            "vi": "Bác ấy có rảnh vào chiều thứ năm này không?",
            "en": "Is she available this Thursday afternoon?"
          }
        },
        {
          "role": "ai",
          "text": "Let me check... Yes, we have a 3:30 PM slot open.",
          "translations": {
            "ko": "확인해보겠습니다... 네, 오후 3시 30분에 가능합니다.",
            "zh": "让我查一下...是的，我们下午3:30有空位。",
            "ja": "確認します...はい、午後3時30分の枠が空いています。",
            "vi": "Để tôi kiểm tra... Vâng, chúng tôi còn trống lịch vào lúc 3:30 chiều.",
            "en": "Let me check... Yes, we have a 3:30 PM slot open."
          }
        },
        {
          "role": "user",
          "text": "That works. Please book it for me.",
          "translations": {
            "ko": "그 시간 괜찮습니다. 예약해 주세요.",
            "zh": "那就行。请帮我预约。",
            "ja": "それで大丈夫です。予約をお願いします。",
            "vi": "Được. Xin vui lòng đặt cho tôi.",
            "en": "That works. Please book it for me."
          }
        },
        {
          "role": "ai",
          "text": "Alright, may I have your name and contact number?",
          "translations": {
            "ko": "알겠습니다, 이름과 연락처를 알려주시겠어요?",
            "zh": "好的，能告诉我你的名字和联系电话吗？",
            "ja": "了解しました、お名前と連絡先を教えていただけますか？",
            "vi": "Được, tôi có thể biết tên và số điện thoại liên lạc của bạn không?",
            "en": "Alright, may I have your name and contact number?"
          }
        },
        {
          "role": "user",
          "text": "John Lee, 555-1023.",
          "translations": {
            "ko": "존 리, 555-1023입니다.",
            "zh": "我叫李约翰，电话是555-1023。",
            "ja": "ジョン・リー、555-1023です。",
            "vi": "John Lee, 555-1023.",
            "en": "John Lee, 555-1023."
          }
        },
        {
          "role": "ai",
          "text": "Got it. Is this visit for a follow-up or a new concern?",
          "translations": {
            "ko": "알겠습니다. 이번 방문은 후속 진료인가요, 아니면 새로운 문제가 생긴 건가요?",
            "zh": "明白了。这次就诊是复诊还是有新的病情？",
            "ja": "了解しました。今回の診察はフォローアップですか、それとも新たな問題ですか？",
            "vi": "Đã hiểu. Lần khám này là để theo dõi hay là có vấn đề mới?",
            "en": "Got it. Is this visit for a follow-up or a new concern?"
          }
        },
        {
          "role": "user",
          "text": "A new concern. I’ve been having headaches.",
          "translations": {
            "ko": "새로운 문제입니다. 머리가 아파요.",
            "zh": "是新的病情。我一直头痛。",
            "ja": "新たな問題です。頭痛が続いています。",
            "vi": "Một vấn đề mới. Tôi bị đau đầu.",
            "en": "A new concern. I’ve been having headaches."
          }
        },
        {
          "role": "ai",
          "text": "Understood. I’ll make a note of that.",
          "translations": {
            "ko": "알겠습니다. 그 내용을 기록해두겠습니다.",
            "zh": "明白了。我会记下来的。",
            "ja": "了解しました。それをメモにします。",
            "vi": "Đã hiểu. Tôi sẽ ghi chú lại.",
            "en": "Understood. I’ll make a note of that."
          }
        },
        {
          "role": "user",
          "text": "Thank you. Should I bring anything with me?",
          "translations": {
            "ko": "감사합니다. 제가 가져가야 할 것이 있나요?",
            "zh": "谢谢。我需要带些什么吗？",
            "ja": "ありがとうございます。何か持って行くものはありますか？",
            "vi": "Cảm ơn. Tôi cần mang theo thứ gì không?",
            "en": "Thank you. Should I bring anything with me?"
          }
        },
        {
          "role": "ai",
          "text": "Please bring your ID and insurance card.",
          "translations": {
            "ko": "신분증과 보험 카드를 가져오세요.",
            "zh": "请带上你的身份证和保险卡。",
            "ja": "身分証明書と保険証をお持ちください。",
            "vi": "Xin vui lòng mang theo CMND và thẻ bảo hiểm.",
            "en": "Please bring your ID and insurance card."
          }
        },
        {
          "role": "user",
          "text": "Will do.",
          "translations": {
            "ko": "알겠습니다.",
            "zh": "好的。",
            "ja": "了解しました。",
            "vi": "Tôi sẽ làm như vậy.",
            "en": "Will do."
          }
        },
        {
          "role": "ai",
          "text": "Do you need directions to the clinic?",
          "translations": {
            "ko": "병원까지 길을 안내해 드릴까요?",
            "zh": "你需要诊所的路线指示吗？",
            "ja": "クリニックへの道順は必要ですか？",
            "vi": "Bạn cần chỉ đường đến phòng khám không?",
            "en": "Do you need directions to the clinic?"
          }
        },
        {
          "role": "user",
          "text": "No, I’ve been there before.",
          "translations": {
            "ko": "아니요, 전 거기를 알고 있습니다.",
            "zh": "不用，我以前来过。",
            "ja": "いえ、以前に行ったことがあります。",
            "vi": "Không, tôi đã đến đó trước đây.",
            "en": "No, I’ve been there before."
          }
        },
        {
          "role": "ai",
          "text": "Okay, we’ll see you Thursday at 3:30 PM.",
          "translations": {
            "ko": "알겠습니다, 목요일 오후 3시 30분에 뵙겠습니다.",
            "zh": "好的，我们周四下午3:30见。",
            "ja": "了解しました、木曜日の午後3時30分にお待ちしています。",
            "vi": "Được, chúng tôi sẽ gặp bạn vào thứ năm lúc 3:30 chiều.",
            "en": "Okay, we’ll see you Thursday at 3:30 PM."
          }
        },
        {
          "role": "user",
          "text": "Thank you very much.",
          "translations": {
            "ko": "감사합니다.",
            "zh": "非常感谢。",
            "ja": "ありがとうございます。",
            "vi": "Cảm ơn rất nhiều.",
            "en": "Thank you very much."
          }
        },
        {
          "role": "ai",
          "text": "You’re welcome. Take care.",
          "translations": {
            "ko": "천만에요. 건강하세요.",
            "zh": "不客气。注意身体。",
            "ja": "どういたしまして。お気をつけて。",
            "vi": "Không có gì, hãy giữ gìn sức khỏe.",
            "en": "You’re welcome. Take care."
          }
        },
        {
          "role": "user",
          "text": "Bye!",
          "translations": {
            "ko": "안녕히 계세요!",
            "zh": "再见！",
            "ja": "さようなら！",
            "vi": "Tạm biệt!",
            "en": "Bye!"
          }
        }
      ]
    },
    {
      "description": {
        "en": "Calling customer service",
        "ko": "고객 서비스에 전화하기",
        "zh": "打电话给客户服务",
        "ja": "カスタマーサービスに電話する",
        "vi": "Gọi dịch vụ khách hàng"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Good morning. How can I help you today?",
          "translations": {
            "ko": "좋은 아침입니다. 오늘 어떻게 도와드릴까요?",
            "zh": "早上好。今天我能帮你做什么？",
            "ja": "おはようございます。何かお手伝いできることはありますか？",
            "vi": "Chào buổi sáng. Tôi có thể giúp gì cho bạn hôm nay?",
            "en": "Good morning. How can I help you today?"
          }
        },
        {
          "role": "user",
          "text": "Hi, I’d like to make an appointment with Dr. Kim.",
          "translations": {
            "ko": "안녕하세요, 김 의사와 약속을 잡고 싶습니다.",
            "zh": "嗨，我想预约金医生的诊疗。",
            "ja": "こんにちは、キム医師の予約をしたいのですが。",
            "vi": "Chào, tôi muốn đặt lịch hẹn với bác sĩ Kim.",
            "en": "Hi, I’d like to make an appointment with Dr. Kim."
          }
        },
        {
          "role": "ai",
          "text": "Sure. What day are you looking at?",
          "translations": {
            "ko": "알겠습니다. 어느 날짜를 원하시나요?",
            "zh": "好的。你想预约哪一天？",
            "ja": "了解です。何日をご希望ですか？",
            "vi": "Được. Bạn muốn hẹn ngày nào?",
            "en": "Sure. What day are you looking at?"
          }
        },
        {
          "role": "user",
          "text": "Is she available this Thursday afternoon?",
          "translations": {
            "ko": "이번 주 목요일 오후에 가능한가요?",
            "zh": "她这周四下午有空吗？",
            "ja": "今週の木曜日の午後は空いていますか？",
            "vi": "Bác ấy có rảnh vào chiều thứ năm này không?",
            "en": "Is she available this Thursday afternoon?"
          }
        },
        {
          "role": "ai",
          "text": "Let me check... Yes, we have a 3:30 PM slot open.",
          "translations": {
            "ko": "확인해보겠습니다... 네, 오후 3시 30분에 가능합니다.",
            "zh": "让我查一下...是的，我们下午3:30有空位。",
            "ja": "確認します...はい、午後3時30分の枠が空いています。",
            "vi": "Để tôi kiểm tra... Vâng, chúng tôi còn trống lịch vào lúc 3:30 chiều.",
            "en": "Let me check... Yes, we have a 3:30 PM slot open."
          }
        },
        {
          "role": "user",
          "text": "That works. Please book it for me.",
          "translations": {
            "ko": "그 시간 괜찮습니다. 예약해 주세요.",
            "zh": "那就行。请帮我预约。",
            "ja": "それで大丈夫です。予約をお願いします。",
            "vi": "Được. Xin vui lòng đặt cho tôi.",
            "en": "That works. Please book it for me."
          }
        },
        {
          "role": "ai",
          "text": "Alright, may I have your name and contact number?",
          "translations": {
            "ko": "알겠습니다, 이름과 연락처를 알려주시겠어요?",
            "zh": "好的，能告诉我你的名字和联系电话吗？",
            "ja": "了解しました、お名前と連絡先を教えていただけますか？",
            "vi": "Được, tôi có thể biết tên và số điện thoại liên lạc của bạn không?",
            "en": "Alright, may I have your name and contact number?"
          }
        },
        {
          "role": "user",
          "text": "John Lee, 555-1023.",
          "translations": {
            "ko": "존 리, 555-1023입니다.",
            "zh": "我叫李约翰，电话是555-1023。",
            "ja": "ジョン・リー、555-1023です。",
            "vi": "John Lee, 555-1023.",
            "en": "John Lee, 555-1023."
          }
        },
        {
          "role": "ai",
          "text": "Got it. Is this visit for a follow-up or a new concern?",
          "translations": {
            "ko": "알겠습니다. 이번 방문은 후속 진료인가요, 아니면 새로운 문제가 생긴 건가요?",
            "zh": "明白了。这次就诊是复诊还是有新的病情？",
            "ja": "了解しました。今回の診察はフォローアップですか、それとも新たな問題ですか？",
            "vi": "Đã hiểu. Lần khám này là để theo dõi hay là có vấn đề mới?",
            "en": "Got it. Is this visit for a follow-up or a new concern?"
          }
        },
        {
          "role": "user",
          "text": "A new concern. I’ve been having headaches.",
          "translations": {
            "ko": "새로운 문제입니다. 머리가 아파요.",
            "zh": "是新的病情。我一直头痛。",
            "ja": "新たな問題です。頭痛が続いています。",
            "vi": "Một vấn đề mới. Tôi bị đau đầu.",
            "en": "A new concern. I’ve been having headaches."
          }
        },
        {
          "role": "ai",
          "text": "Understood. I’ll make a note of that.",
          "translations": {
            "ko": "알겠습니다. 그 내용을 기록해두겠습니다.",
            "zh": "明白了。我会记下来的。",
            "ja": "了解しました。それをメモにします。",
            "vi": "Đã hiểu. Tôi sẽ ghi chú lại.",
            "en": "Understood. I’ll make a note of that."
          }
        },
        {
          "role": "user",
          "text": "Thank you. Should I bring anything with me?",
          "translations": {
            "ko": "감사합니다. 제가 가져가야 할 것이 있나요?",
            "zh": "谢谢。我需要带些什么吗？",
            "ja": "ありがとうございます。何か持って行くものはありますか？",
            "vi": "Cảm ơn. Tôi cần mang theo thứ gì không?",
            "en": "Thank you. Should I bring anything with me?"
          }
        },
        {
          "role": "ai",
          "text": "Please bring your ID and insurance card.",
          "translations": {
            "ko": "신분증과 보험 카드를 가져오세요.",
            "zh": "请带上你的身份证和保险卡。",
            "ja": "身分証明書と保険証をお持ちください。",
            "vi": "Xin vui lòng mang theo CMND và thẻ bảo hiểm.",
            "en": "Please bring your ID and insurance card."
          }
        },
        {
          "role": "user",
          "text": "Will do.",
          "translations": {
            "ko": "알겠습니다.",
            "zh": "好的。",
            "ja": "了解しました。",
            "vi": "Tôi sẽ làm như vậy.",
            "en": "Will do."
          }
        },
        {
          "role": "ai",
          "text": "Do you need directions to the clinic?",
          "translations": {
            "ko": "병원까지 길을 안내해 드릴까요?",
            "zh": "你需要诊所的路线指示吗？",
            "ja": "クリニックへの道順は必要ですか？",
            "vi": "Bạn cần chỉ đường đến phòng khám không?",
            "en": "Do you need directions to the clinic?"
          }
        },
        {
          "role": "user",
          "text": "No, I’ve been there before.",
          "translations": {
            "ko": "아니요, 전 거기를 알고 있습니다.",
            "zh": "不用，我以前来过。",
            "ja": "いえ、以前に行ったことがあります。",
            "vi": "Không, tôi đã đến đó trước đây.",
            "en": "No, I’ve been there before."
          }
        },
        {
          "role": "ai",
          "text": "Okay, we’ll see you Thursday at 3:30 PM.",
          "translations": {
            "ko": "알겠습니다, 목요일 오후 3시 30분에 뵙겠습니다.",
            "zh": "好的，我们周四下午3:30见。",
            "ja": "了解しました、木曜日の午後3時30分にお待ちしています。",
            "vi": "Được, chúng tôi sẽ gặp bạn vào thứ năm lúc 3:30 chiều.",
            "en": "Okay, we’ll see you Thursday at 3:30 PM."
          }
        },
        {
          "role": "user",
          "text": "Thank you very much.",
          "translations": {
            "ko": "감사합니다.",
            "zh": "非常感谢。",
            "ja": "ありがとうございます。",
            "vi": "Cảm ơn rất nhiều.",
            "en": "Thank you very much."
          }
        },
        {
          "role": "ai",
          "text": "You’re welcome. Take care.",
          "translations": {
            "ko": "천만에요. 건강하세요.",
            "zh": "不客气。注意身体。",
            "ja": "どういたしまして。お気をつけて。",
            "vi": "Không có gì, hãy giữ gìn sức khỏe.",
            "en": "You’re welcome. Take care."
          }
        },
        {
          "role": "user",
          "text": "Bye!",
          "translations": {
            "ko": "안녕히 계세요!",
            "zh": "再见！",
            "ja": "さようなら！",
            "vi": "Tạm biệt!",
            "en": "Bye!"
          }
        }
      ]
    },
    {
      "description": {
        "en": "Talking about a news article",
        "ko": "뉴스 기사에 대해 이야기하기",
        "zh": "讨论新闻文章",
        "ja": "ニュース記事について話す",
        "vi": "Thảo luận về một bài báo"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Good morning. How can I help you today?",
          "translations": {
            "ko": "좋은 아침입니다. 오늘 어떻게 도와드릴까요?",
            "zh": "早上好。今天我能帮你做什么？",
            "ja": "おはようございます。何かお手伝いできることはありますか？",
            "vi": "Chào buổi sáng. Tôi có thể giúp gì cho bạn hôm nay?",
            "en": "Good morning. How can I help you today?"
          }
        },
        {
          "role": "user",
          "text": "Hi, I’d like to make an appointment with Dr. Kim.",
          "translations": {
            "ko": "안녕하세요, 김 의사와 약속을 잡고 싶습니다.",
            "zh": "嗨，我想预约金医生的诊疗。",
            "ja": "こんにちは、キム医師の予約をしたいのですが。",
            "vi": "Chào, tôi muốn đặt lịch hẹn với bác sĩ Kim.",
            "en": "Hi, I’d like to make an appointment with Dr. Kim."
          }
        },
        {
          "role": "ai",
          "text": "Sure. What day are you looking at?",
          "translations": {
            "ko": "알겠습니다. 어느 날짜를 원하시나요?",
            "zh": "好的。你想预约哪一天？",
            "ja": "了解です。何日をご希望ですか？",
            "vi": "Được. Bạn muốn hẹn ngày nào?",
            "en": "Sure. What day are you looking at?"
          }
        },
        {
          "role": "user",
          "text": "Is she available this Thursday afternoon?",
          "translations": {
            "ko": "이번 주 목요일 오후에 가능한가요?",
            "zh": "她这周四下午有空吗？",
            "ja": "今週の木曜日の午後は空いていますか？",
            "vi": "Bác ấy có rảnh vào chiều thứ năm này không?",
            "en": "Is she available this Thursday afternoon?"
          }
        },
        {
          "role": "ai",
          "text": "Let me check... Yes, we have a 3:30 PM slot open.",
          "translations": {
            "ko": "확인해보겠습니다... 네, 오후 3시 30분에 가능합니다.",
            "zh": "让我查一下...是的，我们下午3:30有空位。",
            "ja": "確認します...はい、午後3時30分の枠が空いています。",
            "vi": "Để tôi kiểm tra... Vâng, chúng tôi còn trống lịch vào lúc 3:30 chiều.",
            "en": "Let me check... Yes, we have a 3:30 PM slot open."
          }
        },
        {
          "role": "user",
          "text": "That works. Please book it for me.",
          "translations": {
            "ko": "그 시간 괜찮습니다. 예약해 주세요.",
            "zh": "那就行。请帮我预约。",
            "ja": "それで大丈夫です。予約をお願いします。",
            "vi": "Được. Xin vui lòng đặt cho tôi.",
            "en": "That works. Please book it for me."
          }
        },
        {
          "role": "ai",
          "text": "Alright, may I have your name and contact number?",
          "translations": {
            "ko": "알겠습니다, 이름과 연락처를 알려주시겠어요?",
            "zh": "好的，能告诉我你的名字和联系电话吗？",
            "ja": "了解しました、お名前と連絡先を教えていただけますか？",
            "vi": "Được, tôi có thể biết tên và số điện thoại liên lạc của bạn không?",
            "en": "Alright, may I have your name and contact number?"
          }
        },
        {
          "role": "user",
          "text": "John Lee, 555-1023.",
          "translations": {
            "ko": "존 리, 555-1023입니다.",
            "zh": "我叫李约翰，电话是555-1023。",
            "ja": "ジョン・リー、555-1023です。",
            "vi": "John Lee, 555-1023.",
            "en": "John Lee, 555-1023."
          }
        },
        {
          "role": "ai",
          "text": "Got it. Is this visit for a follow-up or a new concern?",
          "translations": {
            "ko": "알겠습니다. 이번 방문은 후속 진료인가요, 아니면 새로운 문제가 생긴 건가요?",
            "zh": "明白了。这次就诊是复诊还是有新的病情？",
            "ja": "了解しました。今回の診察はフォローアップですか、それとも新たな問題ですか？",
            "vi": "Đã hiểu. Lần khám này là để theo dõi hay là có vấn đề mới?",
            "en": "Got it. Is this visit for a follow-up or a new concern?"
          }
        },
        {
          "role": "user",
          "text": "A new concern. I’ve been having headaches.",
          "translations": {
            "ko": "새로운 문제입니다. 머리가 아파요.",
            "zh": "是新的病情。我一直头痛。",
            "ja": "新たな問題です。頭痛が続いています。",
            "vi": "Một vấn đề mới. Tôi bị đau đầu.",
            "en": "A new concern. I’ve been having headaches."
          }
        },
        {
          "role": "ai",
          "text": "Understood. I’ll make a note of that.",
          "translations": {
            "ko": "알겠습니다. 그 내용을 기록해두겠습니다.",
            "zh": "明白了。我会记下来的。",
            "ja": "了解しました。それをメモにします。",
            "vi": "Đã hiểu. Tôi sẽ ghi chú lại.",
            "en": "Understood. I’ll make a note of that."
          }
        },
        {
          "role": "user",
          "text": "Thank you. Should I bring anything with me?",
          "translations": {
            "ko": "감사합니다. 제가 가져가야 할 것이 있나요?",
            "zh": "谢谢。我需要带些什么吗？",
            "ja": "ありがとうございます。何か持って行くものはありますか？",
            "vi": "Cảm ơn. Tôi cần mang theo thứ gì không?",
            "en": "Thank you. Should I bring anything with me?"
          }
        },
        {
          "role": "ai",
          "text": "Please bring your ID and insurance card.",
          "translations": {
            "ko": "신분증과 보험 카드를 가져오세요.",
            "zh": "请带上你的身份证和保险卡。",
            "ja": "身分証明書と保険証をお持ちください。",
            "vi": "Xin vui lòng mang theo CMND và thẻ bảo hiểm.",
            "en": "Please bring your ID and insurance card."
          }
        },
        {
          "role": "user",
          "text": "Will do.",
          "translations": {
            "ko": "알겠습니다.",
            "zh": "好的。",
            "ja": "了解しました。",
            "vi": "Tôi sẽ làm như vậy.",
            "en": "Will do."
          }
        },
        {
          "role": "ai",
          "text": "Do you need directions to the clinic?",
          "translations": {
            "ko": "병원까지 길을 안내해 드릴까요?",
            "zh": "你需要诊所的路线指示吗？",
            "ja": "クリニックへの道順は必要ですか？",
            "vi": "Bạn cần chỉ đường đến phòng khám không?",
            "en": "Do you need directions to the clinic?"
          }
        },
        {
          "role": "user",
          "text": "No, I’ve been there before.",
          "translations": {
            "ko": "아니요, 전 거기를 알고 있습니다.",
            "zh": "不用，我以前来过。",
            "ja": "いえ、以前に行ったことがあります。",
            "vi": "Không, tôi đã đến đó trước đây.",
            "en": "No, I’ve been there before."
          }
        },
        {
          "role": "ai",
          "text": "Okay, we’ll see you Thursday at 3:30 PM.",
          "translations": {
            "ko": "알겠습니다, 목요일 오후 3시 30분에 뵙겠습니다.",
            "zh": "好的，我们周四下午3:30见。",
            "ja": "了解しました、木曜日の午後3時30分にお待ちしています。",
            "vi": "Được, chúng tôi sẽ gặp bạn vào thứ năm lúc 3:30 chiều.",
            "en": "Okay, we’ll see you Thursday at 3:30 PM."
          }
        },
        {
          "role": "user",
          "text": "Thank you very much.",
          "translations": {
            "ko": "감사합니다.",
            "zh": "非常感谢。",
            "ja": "ありがとうございます。",
            "vi": "Cảm ơn rất nhiều.",
            "en": "Thank you very much."
          }
        },
        {
          "role": "ai",
          "text": "You’re welcome. Take care.",
          "translations": {
            "ko": "천만에요. 건강하세요.",
            "zh": "不客气。注意身体。",
            "ja": "どういたしまして。お気をつけて。",
            "vi": "Không có gì, hãy giữ gìn sức khỏe.",
            "en": "You’re welcome. Take care."
          }
        },
        {
          "role": "user",
          "text": "Bye!",
          "translations": {
            "ko": "안녕히 계세요!",
            "zh": "再见！",
            "ja": "さようなら！",
            "vi": "Tạm biệt!",
            "en": "Bye!"
          }
        }
      ]
    },
    {
      "description": {
        "en": "Making casual conversation at work",
        "ko": "직장에서 캐주얼한 대화하기",
        "zh": "在工作中进行随意的交谈",
        "ja": "職場でのカジュアルな会話",
        "vi": "Trò chuyện thông thường tại nơi làm việc"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Good morning. How can I help you today?",
          "translations": {
            "ko": "좋은 아침입니다. 오늘 어떻게 도와드릴까요?",
            "zh": "早上好。今天我能帮你做什么？",
            "ja": "おはようございます。何かお手伝いできることはありますか？",
            "vi": "Chào buổi sáng. Tôi có thể giúp gì cho bạn hôm nay?",
            "en": "Good morning. How can I help you today?"
          }
        },
        {
          "role": "user",
          "text": "Hi, I’d like to make an appointment with Dr. Kim.",
          "translations": {
            "ko": "안녕하세요, 김 의사와 약속을 잡고 싶습니다.",
            "zh": "嗨，我想预约金医生的诊疗。",
            "ja": "こんにちは、キム医師の予約をしたいのですが。",
            "vi": "Chào, tôi muốn đặt lịch hẹn với bác sĩ Kim.",
            "en": "Hi, I’d like to make an appointment with Dr. Kim."
          }
        },
        {
          "role": "ai",
          "text": "Sure. What day are you looking at?",
          "translations": {
            "ko": "알겠습니다. 어느 날짜를 원하시나요?",
            "zh": "好的。你想预约哪一天？",
            "ja": "了解です。何日をご希望ですか？",
            "vi": "Được. Bạn muốn hẹn ngày nào?",
            "en": "Sure. What day are you looking at?"
          }
        },
        {
          "role": "user",
          "text": "Is she available this Thursday afternoon?",
          "translations": {
            "ko": "이번 주 목요일 오후에 가능한가요?",
            "zh": "她这周四下午有空吗？",
            "ja": "今週の木曜日の午後は空いていますか？",
            "vi": "Bác ấy có rảnh vào chiều thứ năm này không?",
            "en": "Is she available this Thursday afternoon?"
          }
        },
        {
          "role": "ai",
          "text": "Let me check... Yes, we have a 3:30 PM slot open.",
          "translations": {
            "ko": "확인해보겠습니다... 네, 오후 3시 30분에 가능합니다.",
            "zh": "让我查一下...是的，我们下午3:30有空位。",
            "ja": "確認します...はい、午後3時30分の枠が空いています。",
            "vi": "Để tôi kiểm tra... Vâng, chúng tôi còn trống lịch vào lúc 3:30 chiều.",
            "en": "Let me check... Yes, we have a 3:30 PM slot open."
          }
        },
        {
          "role": "user",
          "text": "That works. Please book it for me.",
          "translations": {
            "ko": "그 시간 괜찮습니다. 예약해 주세요.",
            "zh": "那就行。请帮我预约。",
            "ja": "それで大丈夫です。予約をお願いします。",
            "vi": "Được. Xin vui lòng đặt cho tôi.",
            "en": "That works. Please book it for me."
          }
        },
        {
          "role": "ai",
          "text": "Alright, may I have your name and contact number?",
          "translations": {
            "ko": "알겠습니다, 이름과 연락처를 알려주시겠어요?",
            "zh": "好的，能告诉我你的名字和联系电话吗？",
            "ja": "了解しました、お名前と連絡先を教えていただけますか？",
            "vi": "Được, tôi có thể biết tên và số điện thoại liên lạc của bạn không?",
            "en": "Alright, may I have your name and contact number?"
          }
        },
        {
          "role": "user",
          "text": "John Lee, 555-1023.",
          "translations": {
            "ko": "존 리, 555-1023입니다.",
            "zh": "我叫李约翰，电话是555-1023。",
            "ja": "ジョン・リー、555-1023です。",
            "vi": "John Lee, 555-1023.",
            "en": "John Lee, 555-1023."
          }
        },
        {
          "role": "ai",
          "text": "Got it. Is this visit for a follow-up or a new concern?",
          "translations": {
            "ko": "알겠습니다. 이번 방문은 후속 진료인가요, 아니면 새로운 문제가 생긴 건가요?",
            "zh": "明白了。这次就诊是复诊还是有新的病情？",
            "ja": "了解しました。今回の診察はフォローアップですか、それとも新たな問題ですか？",
            "vi": "Đã hiểu. Lần khám này là để theo dõi hay là có vấn đề mới?",
            "en": "Got it. Is this visit for a follow-up or a new concern?"
          }
        },
        {
          "role": "user",
          "text": "A new concern. I’ve been having headaches.",
          "translations": {
            "ko": "새로운 문제입니다. 머리가 아파요.",
            "zh": "是新的病情。我一直头痛。",
            "ja": "新たな問題です。頭痛が続いています。",
            "vi": "Một vấn đề mới. Tôi bị đau đầu.",
            "en": "A new concern. I’ve been having headaches."
          }
        },
        {
          "role": "ai",
          "text": "Understood. I’ll make a note of that.",
          "translations": {
            "ko": "알겠습니다. 그 내용을 기록해두겠습니다.",
            "zh": "明白了。我会记下来的。",
            "ja": "了解しました。それをメモにします。",
            "vi": "Đã hiểu. Tôi sẽ ghi chú lại.",
            "en": "Understood. I’ll make a note of that."
          }
        },
        {
          "role": "user",
          "text": "Thank you. Should I bring anything with me?",
          "translations": {
            "ko": "감사합니다. 제가 가져가야 할 것이 있나요?",
            "zh": "谢谢。我需要带些什么吗？",
            "ja": "ありがとうございます。何か持って行くものはありますか？",
            "vi": "Cảm ơn. Tôi cần mang theo thứ gì không?",
            "en": "Thank you. Should I bring anything with me?"
          }
        },
        {
          "role": "ai",
          "text": "Please bring your ID and insurance card.",
          "translations": {
            "ko": "신분증과 보험 카드를 가져오세요.",
            "zh": "请带上你的身份证和保险卡。",
            "ja": "身分証明書と保険証をお持ちください。",
            "vi": "Xin vui lòng mang theo CMND và thẻ bảo hiểm.",
            "en": "Please bring your ID and insurance card."
          }
        },
        {
          "role": "user",
          "text": "Will do.",
          "translations": {
            "ko": "알겠습니다.",
            "zh": "好的。",
            "ja": "了解しました。",
            "vi": "Tôi sẽ làm như vậy.",
            "en": "Will do."
          }
        },
        {
          "role": "ai",
          "text": "Do you need directions to the clinic?",
          "translations": {
            "ko": "병원까지 길을 안내해 드릴까요?",
            "zh": "你需要诊所的路线指示吗？",
            "ja": "クリニックへの道順は必要ですか？",
            "vi": "Bạn cần chỉ đường đến phòng khám không?",
            "en": "Do you need directions to the clinic?"
          }
        },
        {
          "role": "user",
          "text": "No, I’ve been there before.",
          "translations": {
            "ko": "아니요, 전 거기를 알고 있습니다.",
            "zh": "不用，我以前来过。",
            "ja": "いえ、以前に行ったことがあります。",
            "vi": "Không, tôi đã đến đó trước đây.",
            "en": "No, I’ve been there before."
          }
        },
        {
          "role": "ai",
          "text": "Okay, we’ll see you Thursday at 3:30 PM.",
          "translations": {
            "ko": "알겠습니다, 목요일 오후 3시 30분에 뵙겠습니다.",
            "zh": "好的，我们周四下午3:30见。",
            "ja": "了解しました、木曜日の午後3時30分にお待ちしています。",
            "vi": "Được, chúng tôi sẽ gặp bạn vào thứ năm lúc 3:30 chiều.",
            "en": "Okay, we’ll see you Thursday at 3:30 PM."
          }
        },
        {
          "role": "user",
          "text": "Thank you very much.",
          "translations": {
            "ko": "감사합니다.",
            "zh": "非常感谢。",
            "ja": "ありがとうございます。",
            "vi": "Cảm ơn rất nhiều.",
            "en": "Thank you very much."
          }
        },
        {
          "role": "ai",
          "text": "You’re welcome. Take care.",
          "translations": {
            "ko": "천만에요. 건강하세요.",
            "zh": "不客气。注意身体。",
            "ja": "どういたしまして。お気をつけて。",
            "vi": "Không có gì, hãy giữ gìn sức khỏe.",
            "en": "You’re welcome. Take care."
          }
        },
        {
          "role": "user",
          "text": "Bye!",
          "translations": {
            "ko": "안녕히 계세요!",
            "zh": "再见！",
            "ja": "さようなら！",
            "vi": "Tạm biệt!",
            "en": "Bye!"
          }
        }
      ]
    },
    {
      "description": {
        "en": "Explaining symptoms at a pharmacy",
        "ko": "약국에서 증상 설명하기",
        "zh": "在药店解释症状",
        "ja": "薬局で症状を説明する",
        "vi": "Giải thích triệu chứng tại hiệu thuốc"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Good morning. How can I help you today?",
          "translations": {
            "ko": "좋은 아침입니다. 오늘 어떻게 도와드릴까요?",
            "zh": "早上好。今天我能帮你做什么？",
            "ja": "おはようございます。何かお手伝いできることはありますか？",
            "vi": "Chào buổi sáng. Tôi có thể giúp gì cho bạn hôm nay?",
            "en": "Good morning. How can I help you today?"
          }
        },
        {
          "role": "user",
          "text": "Hi, I’d like to make an appointment with Dr. Kim.",
          "translations": {
            "ko": "안녕하세요, 김 의사와 약속을 잡고 싶습니다.",
            "zh": "嗨，我想预约金医生的诊疗。",
            "ja": "こんにちは、キム医師の予約をしたいのですが。",
            "vi": "Chào, tôi muốn đặt lịch hẹn với bác sĩ Kim.",
            "en": "Hi, I’d like to make an appointment with Dr. Kim."
          }
        },
        {
          "role": "ai",
          "text": "Sure. What day are you looking at?",
          "translations": {
            "ko": "알겠습니다. 어느 날짜를 원하시나요?",
            "zh": "好的。你想预约哪一天？",
            "ja": "了解です。何日をご希望ですか？",
            "vi": "Được. Bạn muốn hẹn ngày nào?",
            "en": "Sure. What day are you looking at?"
          }
        },
        {
          "role": "user",
          "text": "Is she available this Thursday afternoon?",
          "translations": {
            "ko": "이번 주 목요일 오후에 가능한가요?",
            "zh": "她这周四下午有空吗？",
            "ja": "今週の木曜日の午後は空いていますか？",
            "vi": "Bác ấy có rảnh vào chiều thứ năm này không?",
            "en": "Is she available this Thursday afternoon?"
          }
        },
        {
          "role": "ai",
          "text": "Let me check... Yes, we have a 3:30 PM slot open.",
          "translations": {
            "ko": "확인해보겠습니다... 네, 오후 3시 30분에 가능합니다.",
            "zh": "让我查一下...是的，我们下午3:30有空位。",
            "ja": "確認します...はい、午後3時30分の枠が空いています。",
            "vi": "Để tôi kiểm tra... Vâng, chúng tôi còn trống lịch vào lúc 3:30 chiều.",
            "en": "Let me check... Yes, we have a 3:30 PM slot open."
          }
        },
        {
          "role": "user",
          "text": "That works. Please book it for me.",
          "translations": {
            "ko": "그 시간 괜찮습니다. 예약해 주세요.",
            "zh": "那就行。请帮我预约。",
            "ja": "それで大丈夫です。予約をお願いします。",
            "vi": "Được. Xin vui lòng đặt cho tôi.",
            "en": "That works. Please book it for me."
          }
        },
        {
          "role": "ai",
          "text": "Alright, may I have your name and contact number?",
          "translations": {
            "ko": "알겠습니다, 이름과 연락처를 알려주시겠어요?",
            "zh": "好的，能告诉我你的名字和联系电话吗？",
            "ja": "了解しました、お名前と連絡先を教えていただけますか？",
            "vi": "Được, tôi có thể biết tên và số điện thoại liên lạc của bạn không?",
            "en": "Alright, may I have your name and contact number?"
          }
        },
        {
          "role": "user",
          "text": "John Lee, 555-1023.",
          "translations": {
            "ko": "존 리, 555-1023입니다.",
            "zh": "我叫李约翰，电话是555-1023。",
            "ja": "ジョン・リー、555-1023です。",
            "vi": "John Lee, 555-1023.",
            "en": "John Lee, 555-1023."
          }
        },
        {
          "role": "ai",
          "text": "Got it. Is this visit for a follow-up or a new concern?",
          "translations": {
            "ko": "알겠습니다. 이번 방문은 후속 진료인가요, 아니면 새로운 문제가 생긴 건가요?",
            "zh": "明白了。这次就诊是复诊还是有新的病情？",
            "ja": "了解しました。今回の診察はフォローアップですか、それとも新たな問題ですか？",
            "vi": "Đã hiểu. Lần khám này là để theo dõi hay là có vấn đề mới?",
            "en": "Got it. Is this visit for a follow-up or a new concern?"
          }
        },
        {
          "role": "user",
          "text": "A new concern. I’ve been having headaches.",
          "translations": {
            "ko": "새로운 문제입니다. 머리가 아파요.",
            "zh": "是新的病情。我一直头痛。",
            "ja": "新たな問題です。頭痛が続いています。",
            "vi": "Một vấn đề mới. Tôi bị đau đầu.",
            "en": "A new concern. I’ve been having headaches."
          }
        },
        {
          "role": "ai",
          "text": "Understood. I’ll make a note of that.",
          "translations": {
            "ko": "알겠습니다. 그 내용을 기록해두겠습니다.",
            "zh": "明白了。我会记下来的。",
            "ja": "了解しました。それをメモにします。",
            "vi": "Đã hiểu. Tôi sẽ ghi chú lại.",
            "en": "Understood. I’ll make a note of that."
          }
        },
        {
          "role": "user",
          "text": "Thank you. Should I bring anything with me?",
          "translations": {
            "ko": "감사합니다. 제가 가져가야 할 것이 있나요?",
            "zh": "谢谢。我需要带些什么吗？",
            "ja": "ありがとうございます。何か持って行くものはありますか？",
            "vi": "Cảm ơn. Tôi cần mang theo thứ gì không?",
            "en": "Thank you. Should I bring anything with me?"
          }
        },
        {
          "role": "ai",
          "text": "Please bring your ID and insurance card.",
          "translations": {
            "ko": "신분증과 보험 카드를 가져오세요.",
            "zh": "请带上你的身份证和保险卡。",
            "ja": "身分証明書と保険証をお持ちください。",
            "vi": "Xin vui lòng mang theo CMND và thẻ bảo hiểm.",
            "en": "Please bring your ID and insurance card."
          }
        },
        {
          "role": "user",
          "text": "Will do.",
          "translations": {
            "ko": "알겠습니다.",
            "zh": "好的。",
            "ja": "了解しました。",
            "vi": "Tôi sẽ làm như vậy.",
            "en": "Will do."
          }
        },
        {
          "role": "ai",
          "text": "Do you need directions to the clinic?",
          "translations": {
            "ko": "병원까지 길을 안내해 드릴까요?",
            "zh": "你需要诊所的路线指示吗？",
            "ja": "クリニックへの道順は必要ですか？",
            "vi": "Bạn cần chỉ đường đến phòng khám không?",
            "en": "Do you need directions to the clinic?"
          }
        },
        {
          "role": "user",
          "text": "No, I’ve been there before.",
          "translations": {
            "ko": "아니요, 전 거기를 알고 있습니다.",
            "zh": "不用，我以前来过。",
            "ja": "いえ、以前に行ったことがあります。",
            "vi": "Không, tôi đã đến đó trước đây.",
            "en": "No, I’ve been there before."
          }
        },
        {
          "role": "ai",
          "text": "Okay, we’ll see you Thursday at 3:30 PM.",
          "translations": {
            "ko": "알겠습니다, 목요일 오후 3시 30분에 뵙겠습니다.",
            "zh": "好的，我们周四下午3:30见。",
            "ja": "了解しました、木曜日の午後3時30分にお待ちしています。",
            "vi": "Được, chúng tôi sẽ gặp bạn vào thứ năm lúc 3:30 chiều.",
            "en": "Okay, we’ll see you Thursday at 3:30 PM."
          }
        },
        {
          "role": "user",
          "text": "Thank you very much.",
          "translations": {
            "ko": "감사합니다.",
            "zh": "非常感谢。",
            "ja": "ありがとうございます。",
            "vi": "Cảm ơn rất nhiều.",
            "en": "Thank you very much."
          }
        },
        {
          "role": "ai",
          "text": "You’re welcome. Take care.",
          "translations": {
            "ko": "천만에요. 건강하세요.",
            "zh": "不客气。注意身体。",
            "ja": "どういたしまして。お気をつけて。",
            "vi": "Không có gì, hãy giữ gìn sức khỏe.",
            "en": "You’re welcome. Take care."
          }
        },
        {
          "role": "user",
          "text": "Bye!",
          "translations": {
            "ko": "안녕히 계세요!",
            "zh": "再见！",
            "ja": "さようなら！",
            "vi": "Tạm biệt!",
            "en": "Bye!"
          }
        }
      ]
    },
    {
      "description": {
        "en": "Discussing weekend activities",
        "ko": "주말 활동에 대해 이야기하기",
        "zh": "讨论周末活动",
        "ja": "週末の活動について話す",
        "vi": "Thảo luận về hoạt động cuối tuần"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Good morning. How can I help you today?",
          "translations": {
            "ko": "좋은 아침입니다. 오늘 어떻게 도와드릴까요?",
            "zh": "早上好。今天我能帮你做什么？",
            "ja": "おはようございます。何かお手伝いできることはありますか？",
            "vi": "Chào buổi sáng. Tôi có thể giúp gì cho bạn hôm nay?",
            "en": "Good morning. How can I help you today?"
          }
        },
        {
          "role": "user",
          "text": "Hi, I’d like to make an appointment with Dr. Kim.",
          "translations": {
            "ko": "안녕하세요, 김 의사와 약속을 잡고 싶습니다.",
            "zh": "嗨，我想预约金医生的诊疗。",
            "ja": "こんにちは、キム医師の予約をしたいのですが。",
            "vi": "Chào, tôi muốn đặt lịch hẹn với bác sĩ Kim.",
            "en": "Hi, I’d like to make an appointment with Dr. Kim."
          }
        },
        {
          "role": "ai",
          "text": "Sure. What day are you looking at?",
          "translations": {
            "ko": "알겠습니다. 어느 날짜를 원하시나요?",
            "zh": "好的。你想预约哪一天？",
            "ja": "了解です。何日をご希望ですか？",
            "vi": "Được. Bạn muốn hẹn ngày nào?",
            "en": "Sure. What day are you looking at?"
          }
        },
        {
          "role": "user",
          "text": "Is she available this Thursday afternoon?",
          "translations": {
            "ko": "이번 주 목요일 오후에 가능한가요?",
            "zh": "她这周四下午有空吗？",
            "ja": "今週の木曜日の午後は空いていますか？",
            "vi": "Bác ấy có rảnh vào chiều thứ năm này không?",
            "en": "Is she available this Thursday afternoon?"
          }
        },
        {
          "role": "ai",
          "text": "Let me check... Yes, we have a 3:30 PM slot open.",
          "translations": {
            "ko": "확인해보겠습니다... 네, 오후 3시 30분에 가능합니다.",
            "zh": "让我查一下...是的，我们下午3:30有空位。",
            "ja": "確認します...はい、午後3時30分の枠が空いています。",
            "vi": "Để tôi kiểm tra... Vâng, chúng tôi còn trống lịch vào lúc 3:30 chiều.",
            "en": "Let me check... Yes, we have a 3:30 PM slot open."
          }
        },
        {
          "role": "user",
          "text": "That works. Please book it for me.",
          "translations": {
            "ko": "그 시간 괜찮습니다. 예약해 주세요.",
            "zh": "那就行。请帮我预约。",
            "ja": "それで大丈夫です。予約をお願いします。",
            "vi": "Được. Xin vui lòng đặt cho tôi.",
            "en": "That works. Please book it for me."
          }
        },
        {
          "role": "ai",
          "text": "Alright, may I have your name and contact number?",
          "translations": {
            "ko": "알겠습니다, 이름과 연락처를 알려주시겠어요?",
            "zh": "好的，能告诉我你的名字和联系电话吗？",
            "ja": "了解しました、お名前と連絡先を教えていただけますか？",
            "vi": "Được, tôi có thể biết tên và số điện thoại liên lạc của bạn không?",
            "en": "Alright, may I have your name and contact number?"
          }
        },
        {
          "role": "user",
          "text": "John Lee, 555-1023.",
          "translations": {
            "ko": "존 리, 555-1023입니다.",
            "zh": "我叫李约翰，电话是555-1023。",
            "ja": "ジョン・リー、555-1023です。",
            "vi": "John Lee, 555-1023.",
            "en": "John Lee, 555-1023."
          }
        },
        {
          "role": "ai",
          "text": "Got it. Is this visit for a follow-up or a new concern?",
          "translations": {
            "ko": "알겠습니다. 이번 방문은 후속 진료인가요, 아니면 새로운 문제가 생긴 건가요?",
            "zh": "明白了。这次就诊是复诊还是有新的病情？",
            "ja": "了解しました。今回の診察はフォローアップですか、それとも新たな問題ですか？",
            "vi": "Đã hiểu. Lần khám này là để theo dõi hay là có vấn đề mới?",
            "en": "Got it. Is this visit for a follow-up or a new concern?"
          }
        },
        {
          "role": "user",
          "text": "A new concern. I’ve been having headaches.",
          "translations": {
            "ko": "새로운 문제입니다. 머리가 아파요.",
            "zh": "是新的病情。我一直头痛。",
            "ja": "新たな問題です。頭痛が続いています。",
            "vi": "Một vấn đề mới. Tôi bị đau đầu.",
            "en": "A new concern. I’ve been having headaches."
          }
        },
        {
          "role": "ai",
          "text": "Understood. I’ll make a note of that.",
          "translations": {
            "ko": "알겠습니다. 그 내용을 기록해두겠습니다.",
            "zh": "明白了。我会记下来的。",
            "ja": "了解しました。それをメモにします。",
            "vi": "Đã hiểu. Tôi sẽ ghi chú lại.",
            "en": "Understood. I’ll make a note of that."
          }
        },
        {
          "role": "user",
          "text": "Thank you. Should I bring anything with me?",
          "translations": {
            "ko": "감사합니다. 제가 가져가야 할 것이 있나요?",
            "zh": "谢谢。我需要带些什么吗？",
            "ja": "ありがとうございます。何か持って行くものはありますか？",
            "vi": "Cảm ơn. Tôi cần mang theo thứ gì không?",
            "en": "Thank you. Should I bring anything with me?"
          }
        },
        {
          "role": "ai",
          "text": "Please bring your ID and insurance card.",
          "translations": {
            "ko": "신분증과 보험 카드를 가져오세요.",
            "zh": "请带上你的身份证和保险卡。",
            "ja": "身分証明書と保険証をお持ちください。",
            "vi": "Xin vui lòng mang theo CMND và thẻ bảo hiểm.",
            "en": "Please bring your ID and insurance card."
          }
        },
        {
          "role": "user",
          "text": "Will do.",
          "translations": {
            "ko": "알겠습니다.",
            "zh": "好的。",
            "ja": "了解しました。",
            "vi": "Tôi sẽ làm như vậy.",
            "en": "Will do."
          }
        },
        {
          "role": "ai",
          "text": "Do you need directions to the clinic?",
          "translations": {
            "ko": "병원까지 길을 안내해 드릴까요?",
            "zh": "你需要诊所的路线指示吗？",
            "ja": "クリニックへの道順は必要ですか？",
            "vi": "Bạn cần chỉ đường đến phòng khám không?",
            "en": "Do you need directions to the clinic?"
          }
        },
        {
          "role": "user",
          "text": "No, I’ve been there before.",
          "translations": {
            "ko": "아니요, 전 거기를 알고 있습니다.",
            "zh": "不用，我以前来过。",
            "ja": "いえ、以前に行ったことがあります。",
            "vi": "Không, tôi đã đến đó trước đây.",
            "en": "No, I’ve been there before."
          }
        },
        {
          "role": "ai",
          "text": "Okay, we’ll see you Thursday at 3:30 PM.",
          "translations": {
            "ko": "알겠습니다, 목요일 오후 3시 30분에 뵙겠습니다.",
            "zh": "好的，我们周四下午3:30见。",
            "ja": "了解しました、木曜日の午後3時30分にお待ちしています。",
            "vi": "Được, chúng tôi sẽ gặp bạn vào thứ năm lúc 3:30 chiều.",
            "en": "Okay, we’ll see you Thursday at 3:30 PM."
          }
        },
        {
          "role": "user",
          "text": "Thank you very much.",
          "translations": {
            "ko": "감사합니다.",
            "zh": "非常感谢。",
            "ja": "ありがとうございます。",
            "vi": "Cảm ơn rất nhiều.",
            "en": "Thank you very much."
          }
        },
        {
          "role": "ai",
          "text": "You’re welcome. Take care.",
          "translations": {
            "ko": "천만에요. 건강하세요.",
            "zh": "不客气。注意身体。",
            "ja": "どういたしまして。お気をつけて。",
            "vi": "Không có gì, hãy giữ gìn sức khỏe.",
            "en": "You’re welcome. Take care."
          }
        },
        {
          "role": "user",
          "text": "Bye!",
          "translations": {
            "ko": "안녕히 계세요!",
            "zh": "再见！",
            "ja": "さようなら！",
            "vi": "Tạm biệt!",
            "en": "Bye!"
          }
        }
      ]
    },
    {
      "description": {
        "en": "Handling a minor home repair",
        "ko": "가정의 소소한 수리 다루기",
        "zh": "处理小型家居维修",
        "ja": "小さな家の修理をする",
        "vi": "Xử lý sửa chữa nhỏ tại nhà"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Good morning. How can I help you today?",
          "translations": {
            "ko": "좋은 아침입니다. 오늘 어떻게 도와드릴까요?",
            "zh": "早上好。今天我能帮你做什么？",
            "ja": "おはようございます。何かお手伝いできることはありますか？",
            "vi": "Chào buổi sáng. Tôi có thể giúp gì cho bạn hôm nay?",
            "en": "Good morning. How can I help you today?"
          }
        },
        {
          "role": "user",
          "text": "Hi, I’d like to make an appointment with Dr. Kim.",
          "translations": {
            "ko": "안녕하세요, 김 의사와 약속을 잡고 싶습니다.",
            "zh": "嗨，我想预约金医生的诊疗。",
            "ja": "こんにちは、キム医師の予約をしたいのですが。",
            "vi": "Chào, tôi muốn đặt lịch hẹn với bác sĩ Kim.",
            "en": "Hi, I’d like to make an appointment with Dr. Kim."
          }
        },
        {
          "role": "ai",
          "text": "Sure. What day are you looking at?",
          "translations": {
            "ko": "알겠습니다. 어느 날짜를 원하시나요?",
            "zh": "好的。你想预约哪一天？",
            "ja": "了解です。何日をご希望ですか？",
            "vi": "Được. Bạn muốn hẹn ngày nào?",
            "en": "Sure. What day are you looking at?"
          }
        },
        {
          "role": "user",
          "text": "Is she available this Thursday afternoon?",
          "translations": {
            "ko": "이번 주 목요일 오후에 가능한가요?",
            "zh": "她这周四下午有空吗？",
            "ja": "今週の木曜日の午後は空いていますか？",
            "vi": "Bác ấy có rảnh vào chiều thứ năm này không?",
            "en": "Is she available this Thursday afternoon?"
          }
        },
        {
          "role": "ai",
          "text": "Let me check... Yes, we have a 3:30 PM slot open.",
          "translations": {
            "ko": "확인해보겠습니다... 네, 오후 3시 30분에 가능합니다.",
            "zh": "让我查一下...是的，我们下午3:30有空位。",
            "ja": "確認します...はい、午後3時30分の枠が空いています。",
            "vi": "Để tôi kiểm tra... Vâng, chúng tôi còn trống lịch vào lúc 3:30 chiều.",
            "en": "Let me check... Yes, we have a 3:30 PM slot open."
          }
        },
        {
          "role": "user",
          "text": "That works. Please book it for me.",
          "translations": {
            "ko": "그 시간 괜찮습니다. 예약해 주세요.",
            "zh": "那就行。请帮我预约。",
            "ja": "それで大丈夫です。予約をお願いします。",
            "vi": "Được. Xin vui lòng đặt cho tôi.",
            "en": "That works. Please book it for me."
          }
        },
        {
          "role": "ai",
          "text": "Alright, may I have your name and contact number?",
          "translations": {
            "ko": "알겠습니다, 이름과 연락처를 알려주시겠어요?",
            "zh": "好的，能告诉我你的名字和联系电话吗？",
            "ja": "了解しました、お名前と連絡先を教えていただけますか？",
            "vi": "Được, tôi có thể biết tên và số điện thoại liên lạc của bạn không?",
            "en": "Alright, may I have your name and contact number?"
          }
        },
        {
          "role": "user",
          "text": "John Lee, 555-1023.",
          "translations": {
            "ko": "존 리, 555-1023입니다.",
            "zh": "我叫李约翰，电话是555-1023。",
            "ja": "ジョン・リー、555-1023です。",
            "vi": "John Lee, 555-1023.",
            "en": "John Lee, 555-1023."
          }
        },
        {
          "role": "ai",
          "text": "Got it. Is this visit for a follow-up or a new concern?",
          "translations": {
            "ko": "알겠습니다. 이번 방문은 후속 진료인가요, 아니면 새로운 문제가 생긴 건가요?",
            "zh": "明白了。这次就诊是复诊还是有新的病情？",
            "ja": "了解しました。今回の診察はフォローアップですか、それとも新たな問題ですか？",
            "vi": "Đã hiểu. Lần khám này là để theo dõi hay là có vấn đề mới?",
            "en": "Got it. Is this visit for a follow-up or a new concern?"
          }
        },
        {
          "role": "user",
          "text": "A new concern. I’ve been having headaches.",
          "translations": {
            "ko": "새로운 문제입니다. 머리가 아파요.",
            "zh": "是新的病情。我一直头痛。",
            "ja": "新たな問題です。頭痛が続いています。",
            "vi": "Một vấn đề mới. Tôi bị đau đầu.",
            "en": "A new concern. I’ve been having headaches."
          }
        },
        {
          "role": "ai",
          "text": "Understood. I’ll make a note of that.",
          "translations": {
            "ko": "알겠습니다. 그 내용을 기록해두겠습니다.",
            "zh": "明白了。我会记下来的。",
            "ja": "了解しました。それをメモにします。",
            "vi": "Đã hiểu. Tôi sẽ ghi chú lại.",
            "en": "Understood. I’ll make a note of that."
          }
        },
        {
          "role": "user",
          "text": "Thank you. Should I bring anything with me?",
          "translations": {
            "ko": "감사합니다. 제가 가져가야 할 것이 있나요?",
            "zh": "谢谢。我需要带些什么吗？",
            "ja": "ありがとうございます。何か持って行くものはありますか？",
            "vi": "Cảm ơn. Tôi cần mang theo thứ gì không?",
            "en": "Thank you. Should I bring anything with me?"
          }
        },
        {
          "role": "ai",
          "text": "Please bring your ID and insurance card.",
          "translations": {
            "ko": "신분증과 보험 카드를 가져오세요.",
            "zh": "请带上你的身份证和保险卡。",
            "ja": "身分証明書と保険証をお持ちください。",
            "vi": "Xin vui lòng mang theo CMND và thẻ bảo hiểm.",
            "en": "Please bring your ID and insurance card."
          }
        },
        {
          "role": "user",
          "text": "Will do.",
          "translations": {
            "ko": "알겠습니다.",
            "zh": "好的。",
            "ja": "了解しました。",
            "vi": "Tôi sẽ làm như vậy.",
            "en": "Will do."
          }
        },
        {
          "role": "ai",
          "text": "Do you need directions to the clinic?",
          "translations": {
            "ko": "병원까지 길을 안내해 드릴까요?",
            "zh": "你需要诊所的路线指示吗？",
            "ja": "クリニックへの道順は必要ですか？",
            "vi": "Bạn cần chỉ đường đến phòng khám không?",
            "en": "Do you need directions to the clinic?"
          }
        },
        {
          "role": "user",
          "text": "No, I’ve been there before.",
          "translations": {
            "ko": "아니요, 전 거기를 알고 있습니다.",
            "zh": "不用，我以前来过。",
            "ja": "いえ、以前に行ったことがあります。",
            "vi": "Không, tôi đã đến đó trước đây.",
            "en": "No, I’ve been there before."
          }
        },
        {
          "role": "ai",
          "text": "Okay, we’ll see you Thursday at 3:30 PM.",
          "translations": {
            "ko": "알겠습니다, 목요일 오후 3시 30분에 뵙겠습니다.",
            "zh": "好的，我们周四下午3:30见。",
            "ja": "了解しました、木曜日の午後3時30分にお待ちしています。",
            "vi": "Được, chúng tôi sẽ gặp bạn vào thứ năm lúc 3:30 chiều.",
            "en": "Okay, we’ll see you Thursday at 3:30 PM."
          }
        },
        {
          "role": "user",
          "text": "Thank you very much.",
          "translations": {
            "ko": "감사합니다.",
            "zh": "非常感谢。",
            "ja": "ありがとうございます。",
            "vi": "Cảm ơn rất nhiều.",
            "en": "Thank you very much."
          }
        },
        {
          "role": "ai",
          "text": "You’re welcome. Take care.",
          "translations": {
            "ko": "천만에요. 건강하세요.",
            "zh": "不客气。注意身体。",
            "ja": "どういたしまして。お気をつけて。",
            "vi": "Không có gì, hãy giữ gìn sức khỏe.",
            "en": "You’re welcome. Take care."
          }
        },
        {
          "role": "user",
          "text": "Bye!",
          "translations": {
            "ko": "안녕히 계세요!",
            "zh": "再见！",
            "ja": "さようなら！",
            "vi": "Tạm biệt!",
            "en": "Bye!"
          }
        }
      ]
    },
    {
      "description": {
        "en": "Talking about the weather and plans",
        "ko": "날씨와 계획에 대해 이야기하기",
        "zh": "谈论天气和计划",
        "ja": "天気と予定について話す",
        "vi": "Nói về thời tiết và kế hoạch"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Good morning. How can I help you today?",
          "translations": {
            "ko": "좋은 아침입니다. 오늘 어떻게 도와드릴까요?",
            "zh": "早上好。今天我能帮你做什么？",
            "ja": "おはようございます。何かお手伝いできることはありますか？",
            "vi": "Chào buổi sáng. Tôi có thể giúp gì cho bạn hôm nay?",
            "en": "Good morning. How can I help you today?"
          }
        },
        {
          "role": "user",
          "text": "Hi, I’d like to make an appointment with Dr. Kim.",
          "translations": {
            "ko": "안녕하세요, 김 의사와 약속을 잡고 싶습니다.",
            "zh": "嗨，我想预约金医生的诊疗。",
            "ja": "こんにちは、キム医師の予約をしたいのですが。",
            "vi": "Chào, tôi muốn đặt lịch hẹn với bác sĩ Kim.",
            "en": "Hi, I’d like to make an appointment with Dr. Kim."
          }
        },
        {
          "role": "ai",
          "text": "Sure. What day are you looking at?",
          "translations": {
            "ko": "알겠습니다. 어느 날짜를 원하시나요?",
            "zh": "好的。你想预约哪一天？",
            "ja": "了解です。何日をご希望ですか？",
            "vi": "Được. Bạn muốn hẹn ngày nào?",
            "en": "Sure. What day are you looking at?"
          }
        },
        {
          "role": "user",
          "text": "Is she available this Thursday afternoon?",
          "translations": {
            "ko": "이번 주 목요일 오후에 가능한가요?",
            "zh": "她这周四下午有空吗？",
            "ja": "今週の木曜日の午後は空いていますか？",
            "vi": "Bác ấy có rảnh vào chiều thứ năm này không?",
            "en": "Is she available this Thursday afternoon?"
          }
        },
        {
          "role": "ai",
          "text": "Let me check... Yes, we have a 3:30 PM slot open.",
          "translations": {
            "ko": "확인해보겠습니다... 네, 오후 3시 30분에 가능합니다.",
            "zh": "让我查一下...是的，我们下午3:30有空位。",
            "ja": "確認します...はい、午後3時30分の枠が空いています。",
            "vi": "Để tôi kiểm tra... Vâng, chúng tôi còn trống lịch vào lúc 3:30 chiều.",
            "en": "Let me check... Yes, we have a 3:30 PM slot open."
          }
        },
        {
          "role": "user",
          "text": "That works. Please book it for me.",
          "translations": {
            "ko": "그 시간 괜찮습니다. 예약해 주세요.",
            "zh": "那就行。请帮我预约。",
            "ja": "それで大丈夫です。予約をお願いします。",
            "vi": "Được. Xin vui lòng đặt cho tôi.",
            "en": "That works. Please book it for me."
          }
        },
        {
          "role": "ai",
          "text": "Alright, may I have your name and contact number?",
          "translations": {
            "ko": "알겠습니다, 이름과 연락처를 알려주시겠어요?",
            "zh": "好的，能告诉我你的名字和联系电话吗？",
            "ja": "了解しました、お名前と連絡先を教えていただけますか？",
            "vi": "Được, tôi có thể biết tên và số điện thoại liên lạc của bạn không?",
            "en": "Alright, may I have your name and contact number?"
          }
        },
        {
          "role": "user",
          "text": "John Lee, 555-1023.",
          "translations": {
            "ko": "존 리, 555-1023입니다.",
            "zh": "我叫李约翰，电话是555-1023。",
            "ja": "ジョン・リー、555-1023です。",
            "vi": "John Lee, 555-1023.",
            "en": "John Lee, 555-1023."
          }
        },
        {
          "role": "ai",
          "text": "Got it. Is this visit for a follow-up or a new concern?",
          "translations": {
            "ko": "알겠습니다. 이번 방문은 후속 진료인가요, 아니면 새로운 문제가 생긴 건가요?",
            "zh": "明白了。这次就诊是复诊还是有新的病情？",
            "ja": "了解しました。今回の診察はフォローアップですか、それとも新たな問題ですか？",
            "vi": "Đã hiểu. Lần khám này là để theo dõi hay là có vấn đề mới?",
            "en": "Got it. Is this visit for a follow-up or a new concern?"
          }
        },
        {
          "role": "user",
          "text": "A new concern. I’ve been having headaches.",
          "translations": {
            "ko": "새로운 문제입니다. 머리가 아파요.",
            "zh": "是新的病情。我一直头痛。",
            "ja": "新たな問題です。頭痛が続いています。",
            "vi": "Một vấn đề mới. Tôi bị đau đầu.",
            "en": "A new concern. I’ve been having headaches."
          }
        },
        {
          "role": "ai",
          "text": "Understood. I’ll make a note of that.",
          "translations": {
            "ko": "알겠습니다. 그 내용을 기록해두겠습니다.",
            "zh": "明白了。我会记下来的。",
            "ja": "了解しました。それをメモにします。",
            "vi": "Đã hiểu. Tôi sẽ ghi chú lại.",
            "en": "Understood. I’ll make a note of that."
          }
        },
        {
          "role": "user",
          "text": "Thank you. Should I bring anything with me?",
          "translations": {
            "ko": "감사합니다. 제가 가져가야 할 것이 있나요?",
            "zh": "谢谢。我需要带些什么吗？",
            "ja": "ありがとうございます。何か持って行くものはありますか？",
            "vi": "Cảm ơn. Tôi cần mang theo thứ gì không?",
            "en": "Thank you. Should I bring anything with me?"
          }
        },
        {
          "role": "ai",
          "text": "Please bring your ID and insurance card.",
          "translations": {
            "ko": "신분증과 보험 카드를 가져오세요.",
            "zh": "请带上你的身份证和保险卡。",
            "ja": "身分証明書と保険証をお持ちください。",
            "vi": "Xin vui lòng mang theo CMND và thẻ bảo hiểm.",
            "en": "Please bring your ID and insurance card."
          }
        },
        {
          "role": "user",
          "text": "Will do.",
          "translations": {
            "ko": "알겠습니다.",
            "zh": "好的。",
            "ja": "了解しました。",
            "vi": "Tôi sẽ làm như vậy.",
            "en": "Will do."
          }
        },
        {
          "role": "ai",
          "text": "Do you need directions to the clinic?",
          "translations": {
            "ko": "병원까지 길을 안내해 드릴까요?",
            "zh": "你需要诊所的路线指示吗？",
            "ja": "クリニックへの道順は必要ですか？",
            "vi": "Bạn cần chỉ đường đến phòng khám không?",
            "en": "Do you need directions to the clinic?"
          }
        },
        {
          "role": "user",
          "text": "No, I’ve been there before.",
          "translations": {
            "ko": "아니요, 전 거기를 알고 있습니다.",
            "zh": "不用，我以前来过。",
            "ja": "いえ、以前に行ったことがあります。",
            "vi": "Không, tôi đã đến đó trước đây.",
            "en": "No, I’ve been there before."
          }
        },
        {
          "role": "ai",
          "text": "Okay, we’ll see you Thursday at 3:30 PM.",
          "translations": {
            "ko": "알겠습니다, 목요일 오후 3시 30분에 뵙겠습니다.",
            "zh": "好的，我们周四下午3:30见。",
            "ja": "了解しました、木曜日の午後3時30分にお待ちしています。",
            "vi": "Được, chúng tôi sẽ gặp bạn vào thứ năm lúc 3:30 chiều.",
            "en": "Okay, we’ll see you Thursday at 3:30 PM."
          }
        },
        {
          "role": "user",
          "text": "Thank you very much.",
          "translations": {
            "ko": "감사합니다.",
            "zh": "非常感谢。",
            "ja": "ありがとうございます。",
            "vi": "Cảm ơn rất nhiều.",
            "en": "Thank you very much."
          }
        },
        {
          "role": "ai",
          "text": "You’re welcome. Take care.",
          "translations": {
            "ko": "천만에요. 건강하세요.",
            "zh": "不客气。注意身体。",
            "ja": "どういたしまして。お気をつけて。",
            "vi": "Không có gì, hãy giữ gìn sức khỏe.",
            "en": "You’re welcome. Take care."
          }
        },
        {
          "role": "user",
          "text": "Bye!",
          "translations": {
            "ko": "안녕히 계세요!",
            "zh": "再见！",
            "ja": "さようなら！",
            "vi": "Tạm biệt!",
            "en": "Bye!"
          }
        }
      ]
    },
    {
      "description": {
        "en": "Giving directions to a visitor",
        "ko": "방문객에게 길 안내하기",
        "zh": "给访客指路",
        "ja": "訪問者への道案内をする",
        "vi": "Hướng dẫn đường cho khách thăm"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Good morning. How can I help you today?",
          "translations": {
            "ko": "좋은 아침입니다. 오늘 어떻게 도와드릴까요?",
            "zh": "早上好。今天我能帮你做什么？",
            "ja": "おはようございます。何かお手伝いできることはありますか？",
            "vi": "Chào buổi sáng. Tôi có thể giúp gì cho bạn hôm nay?",
            "en": "Good morning. How can I help you today?"
          }
        },
        {
          "role": "user",
          "text": "Hi, I’d like to make an appointment with Dr. Kim.",
          "translations": {
            "ko": "안녕하세요, 김 의사와 약속을 잡고 싶습니다.",
            "zh": "嗨，我想预约金医生的诊疗。",
            "ja": "こんにちは、キム医師の予約をしたいのですが。",
            "vi": "Chào, tôi muốn đặt lịch hẹn với bác sĩ Kim.",
            "en": "Hi, I’d like to make an appointment with Dr. Kim."
          }
        },
        {
          "role": "ai",
          "text": "Sure. What day are you looking at?",
          "translations": {
            "ko": "알겠습니다. 어느 날짜를 원하시나요?",
            "zh": "好的。你想预约哪一天？",
            "ja": "了解です。何日をご希望ですか？",
            "vi": "Được. Bạn muốn hẹn ngày nào?",
            "en": "Sure. What day are you looking at?"
          }
        },
        {
          "role": "user",
          "text": "Is she available this Thursday afternoon?",
          "translations": {
            "ko": "이번 주 목요일 오후에 가능한가요?",
            "zh": "她这周四下午有空吗？",
            "ja": "今週の木曜日の午後は空いていますか？",
            "vi": "Bác ấy có rảnh vào chiều thứ năm này không?",
            "en": "Is she available this Thursday afternoon?"
          }
        },
        {
          "role": "ai",
          "text": "Let me check... Yes, we have a 3:30 PM slot open.",
          "translations": {
            "ko": "확인해보겠습니다... 네, 오후 3시 30분에 가능합니다.",
            "zh": "让我查一下...是的，我们下午3:30有空位。",
            "ja": "確認します...はい、午後3時30分の枠が空いています。",
            "vi": "Để tôi kiểm tra... Vâng, chúng tôi còn trống lịch vào lúc 3:30 chiều.",
            "en": "Let me check... Yes, we have a 3:30 PM slot open."
          }
        },
        {
          "role": "user",
          "text": "That works. Please book it for me.",
          "translations": {
            "ko": "그 시간 괜찮습니다. 예약해 주세요.",
            "zh": "那就行。请帮我预约。",
            "ja": "それで大丈夫です。予約をお願いします。",
            "vi": "Được. Xin vui lòng đặt cho tôi.",
            "en": "That works. Please book it for me."
          }
        },
        {
          "role": "ai",
          "text": "Alright, may I have your name and contact number?",
          "translations": {
            "ko": "알겠습니다, 이름과 연락처를 알려주시겠어요?",
            "zh": "好的，能告诉我你的名字和联系电话吗？",
            "ja": "了解しました、お名前と連絡先を教えていただけますか？",
            "vi": "Được, tôi có thể biết tên và số điện thoại liên lạc của bạn không?",
            "en": "Alright, may I have your name and contact number?"
          }
        },
        {
          "role": "user",
          "text": "John Lee, 555-1023.",
          "translations": {
            "ko": "존 리, 555-1023입니다.",
            "zh": "我叫李约翰，电话是555-1023。",
            "ja": "ジョン・リー、555-1023です。",
            "vi": "John Lee, 555-1023.",
            "en": "John Lee, 555-1023."
          }
        },
        {
          "role": "ai",
          "text": "Got it. Is this visit for a follow-up or a new concern?",
          "translations": {
            "ko": "알겠습니다. 이번 방문은 후속 진료인가요, 아니면 새로운 문제가 생긴 건가요?",
            "zh": "明白了。这次就诊是复诊还是有新的病情？",
            "ja": "了解しました。今回の診察はフォローアップですか、それとも新たな問題ですか？",
            "vi": "Đã hiểu. Lần khám này là để theo dõi hay là có vấn đề mới?",
            "en": "Got it. Is this visit for a follow-up or a new concern?"
          }
        },
        {
          "role": "user",
          "text": "A new concern. I’ve been having headaches.",
          "translations": {
            "ko": "새로운 문제입니다. 머리가 아파요.",
            "zh": "是新的病情。我一直头痛。",
            "ja": "新たな問題です。頭痛が続いています。",
            "vi": "Một vấn đề mới. Tôi bị đau đầu.",
            "en": "A new concern. I’ve been having headaches."
          }
        },
        {
          "role": "ai",
          "text": "Understood. I’ll make a note of that.",
          "translations": {
            "ko": "알겠습니다. 그 내용을 기록해두겠습니다.",
            "zh": "明白了。我会记下来的。",
            "ja": "了解しました。それをメモにします。",
            "vi": "Đã hiểu. Tôi sẽ ghi chú lại.",
            "en": "Understood. I’ll make a note of that."
          }
        },
        {
          "role": "user",
          "text": "Thank you. Should I bring anything with me?",
          "translations": {
            "ko": "감사합니다. 제가 가져가야 할 것이 있나요?",
            "zh": "谢谢。我需要带些什么吗？",
            "ja": "ありがとうございます。何か持って行くものはありますか？",
            "vi": "Cảm ơn. Tôi cần mang theo thứ gì không?",
            "en": "Thank you. Should I bring anything with me?"
          }
        },
        {
          "role": "ai",
          "text": "Please bring your ID and insurance card.",
          "translations": {
            "ko": "신분증과 보험 카드를 가져오세요.",
            "zh": "请带上你的身份证和保险卡。",
            "ja": "身分証明書と保険証をお持ちください。",
            "vi": "Xin vui lòng mang theo CMND và thẻ bảo hiểm.",
            "en": "Please bring your ID and insurance card."
          }
        },
        {
          "role": "user",
          "text": "Will do.",
          "translations": {
            "ko": "알겠습니다.",
            "zh": "好的。",
            "ja": "了解しました。",
            "vi": "Tôi sẽ làm như vậy.",
            "en": "Will do."
          }
        },
        {
          "role": "ai",
          "text": "Do you need directions to the clinic?",
          "translations": {
            "ko": "병원까지 길을 안내해 드릴까요?",
            "zh": "你需要诊所的路线指示吗？",
            "ja": "クリニックへの道順は必要ですか？",
            "vi": "Bạn cần chỉ đường đến phòng khám không?",
            "en": "Do you need directions to the clinic?"
          }
        },
        {
          "role": "user",
          "text": "No, I’ve been there before.",
          "translations": {
            "ko": "아니요, 전 거기를 알고 있습니다.",
            "zh": "不用，我以前来过。",
            "ja": "いえ、以前に行ったことがあります。",
            "vi": "Không, tôi đã đến đó trước đây.",
            "en": "No, I’ve been there before."
          }
        },
        {
          "role": "ai",
          "text": "Okay, we’ll see you Thursday at 3:30 PM.",
          "translations": {
            "ko": "알겠습니다, 목요일 오후 3시 30분에 뵙겠습니다.",
            "zh": "好的，我们周四下午3:30见。",
            "ja": "了解しました、木曜日の午後3時30分にお待ちしています。",
            "vi": "Được, chúng tôi sẽ gặp bạn vào thứ năm lúc 3:30 chiều.",
            "en": "Okay, we’ll see you Thursday at 3:30 PM."
          }
        },
        {
          "role": "user",
          "text": "Thank you very much.",
          "translations": {
            "ko": "감사합니다.",
            "zh": "非常感谢。",
            "ja": "ありがとうございます。",
            "vi": "Cảm ơn rất nhiều.",
            "en": "Thank you very much."
          }
        },
        {
          "role": "ai",
          "text": "You’re welcome. Take care.",
          "translations": {
            "ko": "천만에요. 건강하세요.",
            "zh": "不客气。注意身体。",
            "ja": "どういたしまして。お気をつけて。",
            "vi": "Không có gì, hãy giữ gìn sức khỏe.",
            "en": "You’re welcome. Take care."
          }
        },
        {
          "role": "user",
          "text": "Bye!",
          "translations": {
            "ko": "안녕히 계세요!",
            "zh": "再见！",
            "ja": "さようなら！",
            "vi": "Tạm biệt!",
            "en": "Bye!"
          }
        }
      ]
    },
    {
      "description": {
        "en": "Talking about hobbies in more detail",
        "ko": "취미에 대해 더 자세히 이야기하기",
        "zh": "更详细地谈论爱好",
        "ja": "趣味について詳しく話す",
        "vi": "Thảo luận chi tiết về sở thích"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Good morning. How can I help you today?",
          "translations": {
            "ko": "좋은 아침입니다. 오늘 어떻게 도와드릴까요?",
            "zh": "早上好。今天我能帮你做什么？",
            "ja": "おはようございます。何かお手伝いできることはありますか？",
            "vi": "Chào buổi sáng. Tôi có thể giúp gì cho bạn hôm nay?",
            "en": "Good morning. How can I help you today?"
          }
        },
        {
          "role": "user",
          "text": "Hi, I’d like to make an appointment with Dr. Kim.",
          "translations": {
            "ko": "안녕하세요, 김 의사와 약속을 잡고 싶습니다.",
            "zh": "嗨，我想预约金医生的诊疗。",
            "ja": "こんにちは、キム医師の予約をしたいのですが。",
            "vi": "Chào, tôi muốn đặt lịch hẹn với bác sĩ Kim.",
            "en": "Hi, I’d like to make an appointment with Dr. Kim."
          }
        },
        {
          "role": "ai",
          "text": "Sure. What day are you looking at?",
          "translations": {
            "ko": "알겠습니다. 어느 날짜를 원하시나요?",
            "zh": "好的。你想预约哪一天？",
            "ja": "了解です。何日をご希望ですか？",
            "vi": "Được. Bạn muốn hẹn ngày nào?",
            "en": "Sure. What day are you looking at?"
          }
        },
        {
          "role": "user",
          "text": "Is she available this Thursday afternoon?",
          "translations": {
            "ko": "이번 주 목요일 오후에 가능한가요?",
            "zh": "她这周四下午有空吗？",
            "ja": "今週の木曜日の午後は空いていますか？",
            "vi": "Bác ấy có rảnh vào chiều thứ năm này không?",
            "en": "Is she available this Thursday afternoon?"
          }
        },
        {
          "role": "ai",
          "text": "Let me check... Yes, we have a 3:30 PM slot open.",
          "translations": {
            "ko": "확인해보겠습니다... 네, 오후 3시 30분에 가능합니다.",
            "zh": "让我查一下...是的，我们下午3:30有空位。",
            "ja": "確認します...はい、午後3時30分の枠が空いています。",
            "vi": "Để tôi kiểm tra... Vâng, chúng tôi còn trống lịch vào lúc 3:30 chiều.",
            "en": "Let me check... Yes, we have a 3:30 PM slot open."
          }
        },
        {
          "role": "user",
          "text": "That works. Please book it for me.",
          "translations": {
            "ko": "그 시간 괜찮습니다. 예약해 주세요.",
            "zh": "那就行。请帮我预约。",
            "ja": "それで大丈夫です。予約をお願いします。",
            "vi": "Được. Xin vui lòng đặt cho tôi.",
            "en": "That works. Please book it for me."
          }
        },
        {
          "role": "ai",
          "text": "Alright, may I have your name and contact number?",
          "translations": {
            "ko": "알겠습니다, 이름과 연락처를 알려주시겠어요?",
            "zh": "好的，能告诉我你的名字和联系电话吗？",
            "ja": "了解しました、お名前と連絡先を教えていただけますか？",
            "vi": "Được, tôi có thể biết tên và số điện thoại liên lạc của bạn không?",
            "en": "Alright, may I have your name and contact number?"
          }
        },
        {
          "role": "user",
          "text": "John Lee, 555-1023.",
          "translations": {
            "ko": "존 리, 555-1023입니다.",
            "zh": "我叫李约翰，电话是555-1023。",
            "ja": "ジョン・リー、555-1023です。",
            "vi": "John Lee, 555-1023.",
            "en": "John Lee, 555-1023."
          }
        },
        {
          "role": "ai",
          "text": "Got it. Is this visit for a follow-up or a new concern?",
          "translations": {
            "ko": "알겠습니다. 이번 방문은 후속 진료인가요, 아니면 새로운 문제가 생긴 건가요?",
            "zh": "明白了。这次就诊是复诊还是有新的病情？",
            "ja": "了解しました。今回の診察はフォローアップですか、それとも新たな問題ですか？",
            "vi": "Đã hiểu. Lần khám này là để theo dõi hay là có vấn đề mới?",
            "en": "Got it. Is this visit for a follow-up or a new concern?"
          }
        },
        {
          "role": "user",
          "text": "A new concern. I’ve been having headaches.",
          "translations": {
            "ko": "새로운 문제입니다. 머리가 아파요.",
            "zh": "是新的病情。我一直头痛。",
            "ja": "新たな問題です。頭痛が続いています。",
            "vi": "Một vấn đề mới. Tôi bị đau đầu.",
            "en": "A new concern. I’ve been having headaches."
          }
        },
        {
          "role": "ai",
          "text": "Understood. I’ll make a note of that.",
          "translations": {
            "ko": "알겠습니다. 그 내용을 기록해두겠습니다.",
            "zh": "明白了。我会记下来的。",
            "ja": "了解しました。それをメモにします。",
            "vi": "Đã hiểu. Tôi sẽ ghi chú lại.",
            "en": "Understood. I’ll make a note of that."
          }
        },
        {
          "role": "user",
          "text": "Thank you. Should I bring anything with me?",
          "translations": {
            "ko": "감사합니다. 제가 가져가야 할 것이 있나요?",
            "zh": "谢谢。我需要带些什么吗？",
            "ja": "ありがとうございます。何か持って行くものはありますか？",
            "vi": "Cảm ơn. Tôi cần mang theo thứ gì không?",
            "en": "Thank you. Should I bring anything with me?"
          }
        },
        {
          "role": "ai",
          "text": "Please bring your ID and insurance card.",
          "translations": {
            "ko": "신분증과 보험 카드를 가져오세요.",
            "zh": "请带上你的身份证和保险卡。",
            "ja": "身分証明書と保険証をお持ちください。",
            "vi": "Xin vui lòng mang theo CMND và thẻ bảo hiểm.",
            "en": "Please bring your ID and insurance card."
          }
        },
        {
          "role": "user",
          "text": "Will do.",
          "translations": {
            "ko": "알겠습니다.",
            "zh": "好的。",
            "ja": "了解しました。",
            "vi": "Tôi sẽ làm như vậy.",
            "en": "Will do."
          }
        },
        {
          "role": "ai",
          "text": "Do you need directions to the clinic?",
          "translations": {
            "ko": "병원까지 길을 안내해 드릴까요?",
            "zh": "你需要诊所的路线指示吗？",
            "ja": "クリニックへの道順は必要ですか？",
            "vi": "Bạn cần chỉ đường đến phòng khám không?",
            "en": "Do you need directions to the clinic?"
          }
        },
        {
          "role": "user",
          "text": "No, I’ve been there before.",
          "translations": {
            "ko": "아니요, 전 거기를 알고 있습니다.",
            "zh": "不用，我以前来过。",
            "ja": "いえ、以前に行ったことがあります。",
            "vi": "Không, tôi đã đến đó trước đây.",
            "en": "No, I’ve been there before."
          }
        },
        {
          "role": "ai",
          "text": "Okay, we’ll see you Thursday at 3:30 PM.",
          "translations": {
            "ko": "알겠습니다, 목요일 오후 3시 30분에 뵙겠습니다.",
            "zh": "好的，我们周四下午3:30见。",
            "ja": "了解しました、木曜日の午後3時30分にお待ちしています。",
            "vi": "Được, chúng tôi sẽ gặp bạn vào thứ năm lúc 3:30 chiều.",
            "en": "Okay, we’ll see you Thursday at 3:30 PM."
          }
        },
        {
          "role": "user",
          "text": "Thank you very much.",
          "translations": {
            "ko": "감사합니다.",
            "zh": "非常感谢。",
            "ja": "ありがとうございます。",
            "vi": "Cảm ơn rất nhiều.",
            "en": "Thank you very much."
          }
        },
        {
          "role": "ai",
          "text": "You’re welcome. Take care.",
          "translations": {
            "ko": "천만에요. 건강하세요.",
            "zh": "不客气。注意身体。",
            "ja": "どういたしまして。お気をつけて。",
            "vi": "Không có gì, hãy giữ gìn sức khỏe.",
            "en": "You’re welcome. Take care."
          }
        },
        {
          "role": "user",
          "text": "Bye!",
          "translations": {
            "ko": "안녕히 계세요!",
            "zh": "再见！",
            "ja": "さようなら！",
            "vi": "Tạm biệt!",
            "en": "Bye!"
          }
        }
      ]
    }
  ],
  "advanced": [
    {
      "description": {
        "en": "Navigating a complex home repair situation",
        "ko": "복잡한 집 수리 상황 다루기",
        "zh": "导航复杂的家庭维修情况",
        "ja": "複雑な家の修理状況をナビゲートする",
        "vi": "Điều hướng tình huống sửa chữa nhà phức tạp"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "The faucet in the kitchen is leaking again. I think we need a plumber.",
          "translations": {
            "ko": "부엌의 수도꼭지가 또 새고 있어. 배관공이 필요할 것 같아.",
            "zh": "厨房的水龙头又漏水了。我想我们需要一个水管工。",
            "ja": "台所の蛇口がまた漏れています。配管工が必要だと思います。",
            "vi": "Vòi nước trong bếp lại bị rò rỉ. Tôi nghĩ chúng ta cần một thợ sửa ống nước.",
            "en": "The faucet in the kitchen is leaking again. I think we need a plumber."
          }
        },
        {
          "role": "user",
          "text": "Didn’t we fix it last month? Maybe it’s a deeper issue.",
          "translations": {
            "ko": "지난달에 고쳤지 않았나? 좀 더 깊은 문제일지도 모르겠다.",
            "zh": "我们不是上个月修好了吗？也许问题更深。",
            "ja": "先月修理したばかりではなかったですか？もっと深刻な問題かもしれません。",
            "vi": "Chúng ta không phải đã sửa nó tháng trước sao? Có thể đó là một vấn đề sâu hơn.",
            "en": "Didn’t we fix it last month? Maybe it’s a deeper issue."
          }
        },
        {
          "role": "ai",
          "text": "Possibly. The water pressure seems inconsistent too.",
          "translations": {
            "ko": "그럴 수도 있어. 물압도 일정하지 않아 보여.",
            "zh": "可能。水压也似乎不稳定。",
            "ja": "そうかもしれません。水圧も一定していません。",
            "vi": "Có thể. Áp suất nước cũng không ổn định.",
            "en": "Possibly. The water pressure seems inconsistent too."
          }
        },
        {
          "role": "user",
          "text": "Let me take a look under the sink.",
          "translations": {
            "ko": "싱크대 아래를 한번 살펴볼게.",
            "zh": "让我看看水槽下面。",
            "ja": "流しの下を見てみます。",
            "vi": "Để tôi xem dưới bồn rửa.",
            "en": "Let me take a look under the sink."
          }
        },
        {
          "role": "ai",
          "text": "Be careful. Last time it was quite damp down there.",
          "translations": {
            "ko": "조심해. 마지막에는 꽤 축축했었어.",
            "zh": "小心点。上次那里很潮湿。",
            "ja": "気をつけてください。前回はかなり湿っていました。",
            "vi": "Hãy cẩn thận. Lần trước nó khá ẩm ướt dưới đó.",
            "en": "Be careful. Last time it was quite damp down there."
          }
        },
        {
          "role": "user",
          "text": "You’re right. There’s visible corrosion on the pipe.",
          "translations": {
            "ko": "맞아. 파이프에 부식이 보여.",
            "zh": "你说得对。管子上有明显的腐蚀。",
            "ja": "その通りです。配管には明らかな腐食が見られます。",
            "vi": "Bạn đúng. Có sự ăn mòn rõ ràng trên ống.",
            "en": "You’re right. There’s visible corrosion on the pipe."
          }
        },
        {
          "role": "ai",
          "text": "We might need to replace the entire valve system.",
          "translations": {
            "ko": "전체 밸브 시스템을 교체해야 할 수도 있어.",
            "zh": "我们可能需要更换整个阀门系统。",
            "ja": "バルブシステム全体を交換する必要があるかもしれません。",
            "vi": "Chúng ta có thể cần thay thế toàn bộ hệ thống van.",
            "en": "We might need to replace the entire valve system."
          }
        },
        {
          "role": "user",
          "text": "Should we call the same contractor?",
          "translations": {
            "ko": "같은 건설업자에게 전화를 해야 할까?",
            "zh": "我们应该再找那个承包商吗？",
            "ja": "同じ業者に連絡すべきですか？",
            "vi": "Chúng ta nên gọi thợ cùng nhà thầu không?",
            "en": "Should we call the same contractor?"
          }
        },
        {
          "role": "ai",
          "text": "He was expensive, but reliable. We could get a second opinion.",
          "translations": {
            "ko": "비싸긴 했지만, 신뢰할 수 있었어. 다른 의견을 구해볼 수도 있어.",
            "zh": "他收费高，但是可靠。我们可以再听听别人的意见。",
            "ja": "彼は高価ですが、信頼できます。他の意見も聞いてみましょう。",
            "vi": "Anh ấy đắt, nhưng đáng tin cậy. Chúng ta có thể tìm ý kiến thứ hai.",
            "en": "He was expensive, but reliable. We could get a second opinion."
          }
        },
        {
          "role": "user",
          "text": "I’ll search for a few more licensed plumbers.",
          "translations": {
            "ko": "몇 명의 라이센스를 가진 배관공을 찾아볼게.",
            "zh": "我会再找几个有执照的水管工。",
            "ja": "他の資格を持つ配管工を探してみます。",
            "vi": "Tôi sẽ tìm thêm một số thợ ống nước có giấy phép.",
            "en": "I’ll search for a few more licensed plumbers."
          }
        },
        {
          "role": "ai",
          "text": "Good idea. Let’s also check if it’s covered by our home insurance.",
          "translations": {
            "ko": "좋은 생각이야. 우리의 주택 보험에 포함되어 있는지도 확인해봐야겠어.",
            "zh": "好主意。我们也要检查一下是否可以由我们的家庭保险来承担。",
            "ja": "良い考えです。家の保険でカバーされているかも確認しましょう。",
            "vi": "Ý tưởng tốt. Hãy cũng kiểm tra xem nó có được bảo hiểm nhà cửa không.",
            "en": "Good idea. Let’s also check if it’s covered by our home insurance."
          }
        },
        {
          "role": "user",
          "text": "Do you have the policy document handy?",
          "translations": {
            "ko": "보험 정책 문서가 있을까?",
            "zh": "你手头有保单文件吗？",
            "ja": "保険証書は手元にありますか？",
            "vi": "Bạn có giấy tờ bảo hiểm sẵn không?",
            "en": "Do you have the policy document handy?"
          }
        },
        {
          "role": "ai",
          "text": "It should be in the cabinet near the desk.",
          "translations": {
            "ko": "책상 근처의 캐비닛에 있어야 해.",
            "zh": "应该在书桌旁边的柜子里。",
            "ja": "机の近くのキャビネットにあるはずです。",
            "vi": "Nó nên nằm trong tủ gần bàn làm việc.",
            "en": "It should be in the cabinet near the desk."
          }
        },
        {
          "role": "user",
          "text": "Found it. I’ll give them a call and confirm.",
          "translations": {
            "ko": "찾았어. 전화해서 확인해볼게.",
            "zh": "找到了。我会给他们打电话确认的。",
            "ja": "見つけました。電話して確認します。",
            "vi": "Tôi đã tìm thấy nó. Tôi sẽ gọi cho họ và xác nhận.",
            "en": "Found it. I’ll give them a call and confirm."
          }
        },
        {
          "role": "ai",
          "text": "Thanks. Meanwhile, I’ll shut off the main water line.",
          "translations": {
            "ko": "고마워. 그 동안에 나는 주 수도관을 차단할게.",
            "zh": "谢谢。同时，我会关闭主水线。",
            "ja": "ありがとう。その間、私は主水道を止めます。",
            "vi": "Cảm ơn. Trong khi đó, tôi sẽ tắt đường ống nước chính.",
            "en": "Thanks. Meanwhile, I’ll shut off the main water line."
          }
        },
        {
          "role": "user",
          "text": "Let me grab the wrench for you.",
          "translations": {
            "ko": "너를 위해 렌치를 가져올게.",
            "zh": "让我帮你拿扳手。",
            "ja": "レンチを取ってきます。",
            "vi": "Để tôi lấy cây cờ lê cho bạn.",
            "en": "Let me grab the wrench for you."
          }
        },
        {
          "role": "ai",
          "text": "We should also inform the neighbors, just in case.",
          "translations": {
            "ko": "혹시 모르니 이웃들에게도 알려야겠어.",
            "zh": "我们也应该通知邻居，以防万一。",
            "ja": "念のため、隣人にも知らせておくべきです。",
            "vi": "Chúng ta cũng nên thông báo cho hàng xóm, chỉ để đảm bảo.",
            "en": "We should also inform the neighbors, just in case."
          }
        },
        {
          "role": "user",
          "text": "Yes, especially since they had flooding recently.",
          "translations": {
            "ko": "그래, 특히 최근에 그들이 홍수 피해를 입었으니까.",
            "zh": "是的，尤其是他们最近刚遭受过洪水。",
            "ja": "はい、特に最近彼らは水害に遭っていましたから。",
            "vi": "Đúng, đặc biệt là vì họ gần đây đã bị ngập.",
            "en": "Yes, especially since they had flooding recently."
          }
        },
        {
          "role": "ai",
          "text": "Alright, let’s handle this step by step.",
          "translations": {
            "ko": "좋아, 차근차근 처리해보자.",
            "zh": "好的，我们一步一步来处理。",
            "ja": "それでは、一歩ずつ対処しましょう。",
            "vi": "Được rồi, hãy xử lý từng bước một.",
            "en": "Alright, let’s handle this step by step."
          }
        },
        {
          "role": "user",
          "text": "Agreed. Teamwork makes it manageable.",
          "translations": {
            "ko": "동의해. 팀워크로 해결할 수 있어.",
            "zh": "同意。团队合作使事情变得可行。",
            "ja": "同意します。チームワークがあれば何とかなります。",
            "vi": "Đồng ý. Làm việc nhóm giúp nó dễ quản lý hơn.",
            "en": "Agreed. Teamwork makes it manageable."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Discussing long-term personal goals with a partner",
        "ko": "파트너와 장기 개인 목표 논의하기",
        "zh": "与伙伴讨论长期个人目标",
        "ja": "パートナーと長期的な個人目標について話し合う",
        "vi": "Thảo luận về mục tiêu cá nhân dài hạn với đối tác"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Have you thought more about where you see yourself in five years?",
          "translations": {
            "ko": "5년 후에 너 자신을 어디에서 보고 싶은지 더 생각해봤니?",
            "zh": "你有没有更深入地思考过五年后你想在哪里？",
            "ja": "5年後に自分をどこで見ているか、もっと考えましたか？",
            "vi": "Bạn đã nghĩ thêm về bạn sẽ ở đâu trong năm năm tới chưa?",
            "en": "Have you thought more about where you see yourself in five years?"
          }
        },
        {
          "role": "user",
          "text": "I’ve been reflecting on that lately.",
          "translations": {
            "ko": "최근에 그것에 대해 생각해 보았어.",
            "zh": "我最近一直在反思这个问题。",
            "ja": "最近それについて考えています。",
            "vi": "Tôi đã suy ngẫm về điều đó gần đây.",
            "en": "I’ve been reflecting on that lately."
          }
        },
        {
          "role": "ai",
          "text": "Career-wise, I’d like to move into a leadership role.",
          "translations": {
            "ko": "직업적으로는 리더십 역할을 맡고 싶어.",
            "zh": "在职业上，我想担任一个领导角色。",
            "ja": "キャリア的には、リーダーシップの役割に移りたいです。",
            "vi": "Về mặt nghề nghiệp, tôi muốn chuyển sang vai trò lãnh đạo.",
            "en": "Career-wise, I’d like to move into a leadership role."
          }
        },
        {
          "role": "user",
          "text": "That makes sense given your recent progress.",
          "translations": {
            "ko": "너의 최근 진전을 고려하면 그게 맞는 것 같아.",
            "zh": "鉴于你最近的进步，这是有道理的。",
            "ja": "あなたの最近の進歩を考えると、それは理にかなっています。",
            "vi": "Điều đó có lý khi xem xét sự tiến bộ gần đây của bạn.",
            "en": "That makes sense given your recent progress."
          }
        },
        {
          "role": "ai",
          "text": "What about you? Any big-picture goals?",
          "translations": {
            "ko": "너는 어때? 큰 그림의 목표가 있니?",
            "zh": "你呢？有什么大的目标吗？",
            "ja": "あなたはどうですか？大きな目標はありますか？",
            "vi": "Còn bạn thì sao? Bất kỳ mục tiêu lớn nào không?",
            "en": "What about you? Any big-picture goals?"
          }
        },
        {
          "role": "user",
          "text": "I’ve been considering starting my own business.",
          "translations": {
            "ko": "나는 스스로 사업을 시작하려고 생각하고 있어.",
            "zh": "我一直在考虑创办自己的公司。",
            "ja": "自分のビジネスを始めることを考えています。",
            "vi": "Tôi đã cân nhắc việc khởi nghiệp.",
            "en": "I’ve been considering starting my own business."
          }
        },
        {
          "role": "ai",
          "text": "That’s ambitious. What field?",
          "translations": {
            "ko": "그건 야심차네. 어떤 분야?",
            "zh": "那很有野心。什么领域的？",
            "ja": "それは野心的ですね。どの分野ですか？",
            "vi": "Đó là một mục tiêu tham vọng. Lĩnh vực nào?",
            "en": "That’s ambitious. What field?"
          }
        },
        {
          "role": "user",
          "text": "Something related to wellness and sustainability.",
          "translations": {
            "ko": "웰니스와 지속 가능성과 관련된 것.",
            "zh": "与健康和可持续性有关的领域。",
            "ja": "ウェルネスと持続可能性に関連した何かです。",
            "vi": "Một cái gì đó liên quan đến sức khỏe và bền vững.",
            "en": "Something related to wellness and sustainability."
          }
        },
        {
          "role": "ai",
          "text": "I fully support that. Have you made any concrete steps?",
          "translations": {
            "ko": "나는 완전히 지지해. 구체적인 계획을 세웠니?",
            "zh": "我完全支持。你有做出任何具体的步骤吗？",
            "ja": "私は全面的にサポートします。具体的なステップを踏んでいますか？",
            "vi": "Tôi hoàn toàn ủng hộ điều đó. Bạn đã thực hiện bất kỳ bước cụ thể nào chưa?",
            "en": "I fully support that. Have you made any concrete steps?"
          }
        },
        {
          "role": "user",
          "text": "I started a certification course last month.",
          "translations": {
            "ko": "지난달에 인증 과정을 시작했어.",
            "zh": "我上个月开始了一个认证课程。",
            "ja": "先月から認定コースを始めました。",
            "vi": "Tôi đã bắt đầu một khóa học chứng chỉ vào tháng trước.",
            "en": "I started a certification course last month."
          }
        },
        {
          "role": "ai",
          "text": "That’s a great start. We’ll need to plan financially.",
          "translations": {
            "ko": "좋은 시작이야. 우리는 재정적으로 계획을 세워야 해.",
            "zh": "这是一个很好的开始。我们需要进行财务规划。",
            "ja": "それは素晴らしいスタートです。私たちは金銭的に計画する必要があります。",
            "vi": "Đó là một khởi đầu tuyệt vời. Chúng ta sẽ cần lập kế hoạch về tài chính.",
            "en": "That’s a great start. We’ll need to plan financially."
          }
        },
        {
          "role": "user",
          "text": "Yes, budgeting and saving will be crucial.",
          "translations": {
            "ko": "그래, 예산을 세우고 저축하는 것이 중요해.",
            "zh": "是的，预算和储蓄将是关键。",
            "ja": "はい、予算を立てて節約することが重要です。",
            "vi": "Đúng, lập ngân sách và tiết kiệm sẽ rất quan trọng.",
            "en": "Yes, budgeting and saving will be crucial."
          }
        },
        {
          "role": "ai",
          "text": "Would relocating help either of our plans?",
          "translations": {
            "ko": "우리의 계획에 도움이 될까? 이사하는 것은 어떨까?",
            "zh": "搬迁会帮助我们实现计划吗？",
            "ja": "移住すると私たちの計画に役立ちますか？",
            "vi": "Việc di chuyển có giúp ích cho bất kỳ kế hoạch nào của chúng ta không?",
            "en": "Would relocating help either of our plans?"
          }
        },
        {
          "role": "user",
          "text": "Possibly. I’ve been eyeing a few cities.",
          "translations": {
            "ko": "그럴 수도 있어. 몇몇 도시를 눈여겨 보고 있었어.",
            "zh": "可能。我一直在关注几个城市。",
            "ja": "そうかもしれません。いくつかの都市を見ています。",
            "vi": "Có thể. Tôi đã để mắt đến một số thành phố.",
            "en": "Possibly. I’ve been eyeing a few cities."
          }
        },
        {
          "role": "ai",
          "text": "Let’s create a roadmap together.",
          "translations": {
            "ko": "같이 로드맵을 만들어보자.",
            "zh": "我们一起制定一个路线图吧。",
            "ja": "一緒にロードマップを作りましょう。",
            "vi": "Hãy tạo ra một lộ trình cùng nhau.",
            "en": "Let’s create a roadmap together."
          }
        },
        {
          "role": "user",
          "text": "Good idea. I’ll draft some goals this week.",
          "translations": {
            "ko": "좋은 생각이야. 이번 주에 몇 가지 목표를 세워볼게.",
            "zh": "好主意。我这周会制定一些目标。",
            "ja": "良い考えです。今週中にいくつかの目標を立てます。",
            "vi": "Ý tưởng tốt. Tôi sẽ soạn một số mục tiêu trong tuần này.",
            "en": "Good idea. I’ll draft some goals this week."
          }
        },
        {
          "role": "ai",
          "text": "We can review them on Sunday.",
          "translations": {
            "ko": "일요일에 그것들을 검토할 수 있어.",
            "zh": "我们可以在周日复习一下。",
            "ja": "日曜日にそれらを見直しましょう。",
            "vi": "Chúng ta có thể xem xét chúng vào Chủ Nhật.",
            "en": "We can review them on Sunday."
          }
        },
        {
          "role": "user",
          "text": "Let’s treat it like a strategy session.",
          "translations": {
            "ko": "전략 회의처럼 다루자.",
            "zh": "我们把它当作一个战略会议。",
            "ja": "戦略セッションのように扱いましょう。",
            "vi": "Hãy xem nó như một phiên họp chiến lược.",
            "en": "Let’s treat it like a strategy session."
          }
        },
        {
          "role": "ai",
          "text": "This feels exciting and meaningful.",
          "translations": {
            "ko": "이것은 흥미롭고 의미있게 느껴져.",
            "zh": "这感觉既令人兴奋又有意义。",
            "ja": "これは刺激的で意味のあることに感じます。",
            "vi": "Điều này cảm thấy thú vị và có ý nghĩa.",
            "en": "This feels exciting and meaningful."
          }
        },
        {
          "role": "user",
          "text": "Absolutely. We’re building something real.",
          "translations": {
            "ko": "그렇지. 우리는 실제로 무언가를 만들고 있어.",
            "zh": "绝对。我们正在建立一些真实的东西。",
            "ja": "確かに。私たちは何か本物を作り上げています。",
            "vi": "Chắc chắn. Chúng ta đang xây dựng một cái gì đó thật sự.",
            "en": "Absolutely. We’re building something real."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Dealing with an unexpected guest at home",
        "ko": "집에서 예상치 못한 손님 다루기",
        "zh": "应对家中意外来客的情况",
        "ja": "家で予期しないゲストを扱う",
        "vi": "Đối phó với một vị khách bất ngờ tại nhà"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Did you know your cousin was coming this weekend?",
          "translations": {
            "ko": "이번 주말에 너의 사촌이 올 거라는 걸 알고 있었니?",
            "zh": "你知道你的表亲这个周末要来吗？",
            "ja": "あなたのいとこが今週末に来ることを知っていましたか？",
            "vi": "Bạn có biết anh em họ của bạn sẽ đến cuối tuần này không?",
            "en": "Did you know your cousin was coming this weekend?"
          }
        },
        {
          "role": "user",
          "text": "No, I just found out this morning.",
          "translations": {
            "ko": "아니, 오늘 아침에야 알았어.",
            "zh": "不，我今天早上才知道。",
            "ja": "いいえ、今朝知りました。",
            "vi": "Không, tôi chỉ biết vào sáng nay.",
            "en": "No, I just found out this morning."
          }
        },
        {
          "role": "ai",
          "text": "Do we have enough space?",
          "translations": {
            "ko": "우리는 충분한 공간이 있을까?",
            "zh": "我们有足够的空间吗？",
            "ja": "スペースは十分ありますか？",
            "vi": "Chúng ta có đủ không gian không?",
            "en": "Do we have enough space?"
          }
        },
        {
          "role": "user",
          "text": "We’ll need to set up the guest room.",
          "translations": {
            "ko": "우리는 게스트룸을 준비해야 해.",
            "zh": "我们需要准备好客房。",
            "ja": "ゲストルームを準備する必要があります。",
            "vi": "Chúng ta sẽ cần dọn phòng khách.",
            "en": "We’ll need to set up the guest room."
          }
        },
        {
          "role": "ai",
          "text": "How long is he staying?",
          "translations": {
            "ko": "그는 얼마나 머무를 거야?",
            "zh": "他要住多久？",
            "ja": "彼はどのくらい滞在しますか？",
            "vi": "Anh ấy sẽ ở lại bao lâu?",
            "en": "How long is he staying?"
          }
        },
        {
          "role": "user",
          "text": "He said three nights.",
          "translations": {
            "ko": "그는 3박을 할 거라고 했어.",
            "zh": "他说要住三晚。",
            "ja": "彼は3泊だと言いました。",
            "vi": "Anh ấy nói sẽ ở lại ba đêm.",
            "en": "He said three nights."
          }
        },
        {
          "role": "ai",
          "text": "Should we rearrange our plans?",
          "translations": {
            "ko": "우리는 계획을 재정립해야 할까?",
            "zh": "我们应该重新安排我们的计划吗？",
            "ja": "私たちの予定を変更すべきですか？",
            "vi": "Chúng ta nên sắp xếp lại kế hoạch của mình không?",
            "en": "Should we rearrange our plans?"
          }
        },
        {
          "role": "user",
          "text": "Yes, we’ll need to move dinner on Saturday.",
          "translations": {
            "ko": "그래, 토요일 저녁 식사를 옮겨야 해.",
            "zh": "是的，我们需要把周六的晚餐时间改一下。",
            "ja": "はい、土曜日の夕食を移動する必要があります。",
            "vi": "Đúng, chúng ta sẽ cần dời bữa tối vào thứ Bảy.",
            "en": "Yes, we’ll need to move dinner on Saturday."
          }
        },
        {
          "role": "ai",
          "text": "Does he have any dietary restrictions?",
          "translations": {
            "ko": "그는 식사 제한이 있을까?",
            "zh": "他有任何饮食限制吗？",
            "ja": "彼に食事制限はありますか？",
            "vi": "Anh ấy có bất kỳ hạn chế chế độ ăn nào không?",
            "en": "Does he have any dietary restrictions?"
          }
        },
        {
          "role": "user",
          "text": "He’s vegan now.",
          "translations": {
            "ko": "그는 이제 비건이야.",
            "zh": "他现在是素食者。",
            "ja": "彼は今、ビーガンです。",
            "vi": "Anh ấy hiện đang ăn chay trường.",
            "en": "He’s vegan now."
          }
        },
        {
          "role": "ai",
          "text": "I’ll plan the meals accordingly.",
          "translations": {
            "ko": "그에 맞게 식사를 계획할게.",
            "zh": "我会相应地计划餐食。",
            "ja": "それに合わせて食事を計画します。",
            "vi": "Tôi sẽ lên kế hoạch cho các bữa ăn tương ứng.",
            "en": "I’ll plan the meals accordingly."
          }
        },
        {
          "role": "user",
          "text": "Thanks. I’ll go pick up some groceries.",
          "translations": {
            "ko": "고마워. 나는 몇 가지 식료품을 사러 갈게.",
            "zh": "谢谢。我去买一些杂货。",
            "ja": "ありがとう。私はいくつかの食料品を買いに行きます。",
            "vi": "Cảm ơn. Tôi sẽ đi mua một số thực phẩm.",
            "en": "Thanks. I’ll go pick up some groceries."
          }
        },
        {
          "role": "ai",
          "text": "What about bedding and towels?",
          "translations": {
            "ko": "침구와 수건은 어떨까?",
            "zh": "床上用品和毛巾怎么办？",
            "ja": "ベッドリネンとタオルはどうですか？",
            "vi": "Còn về đệm và khăn tắm thì sao?",
            "en": "What about bedding and towels?"
          }
        },
        {
          "role": "user",
          "text": "We’ve got extras in the closet.",
          "translations": {
            "ko": "우리는 옷장에 여분이 있어.",
            "zh": "我们在壁橱里有额外的。",
            "ja": "クローゼットに余分があります。",
            "vi": "Chúng ta có thêm trong tủ.",
            "en": "We’ve got extras in the closet."
          }
        },
        {
          "role": "ai",
          "text": "Should we inform the neighbors?",
          "translations": {
            "ko": "이웃들에게 알려야 할까?",
            "zh": "我们应该通知邻居吗？",
            "ja": "隣人に知らせるべきですか？",
            "vi": "Chúng ta nên thông báo cho hàng xóm không?",
            "en": "Should we inform the neighbors?"
          }
        },
        {
          "role": "user",
          "text": "Just in case, yes.",
          "translations": {
            "ko": "혹시 모르니까, 그래.",
            "zh": "以防万一，是的。",
            "ja": "念のため、はい。",
            "vi": "Chỉ để đảm bảo, đúng.",
            "en": "Just in case, yes."
          }
        },
        {
          "role": "ai",
          "text": "I hope it won’t be too disruptive.",
          "translations": {
            "ko": "너무 방해가 되지 않았으면 좋겠어.",
            "zh": "我希望不会太打扰他们。",
            "ja": "それがあまりにも混乱を招かないことを願います。",
            "vi": "Tôi hy vọng nó sẽ không gây quá nhiều phiền toái.",
            "en": "I hope it won’t be too disruptive."
          }
        },
        {
          "role": "user",
          "text": "Let’s stay flexible.",
          "translations": {
            "ko": "유연하게 대처하자.",
            "zh": "我们要保持灵活。",
            "ja": "フレキシブルにいきましょう。",
            "vi": "Hãy linh hoạt.",
            "en": "Let’s stay flexible."
          }
        },
        {
          "role": "ai",
          "text": "It’ll be fine. Let’s make him feel welcome.",
          "translations": {
            "ko": "괜찮을 거야. 그를 환영하게 만들자.",
            "zh": "没问题。让我们让他感到欢迎。",
            "ja": "大丈夫です。彼を歓迎しましょう。",
            "vi": "Sẽ ổn thôi. Hãy làm cho anh ấy cảm thấy được chào đón.",
            "en": "It’ll be fine. Let’s make him feel welcome."
          }
        },
        {
          "role": "user",
          "text": "Absolutely.",
          "translations": {
            "ko": "그럼.",
            "zh": "绝对。",
            "ja": "もちろんです。",
            "vi": "Chắc chắn.",
            "en": "Absolutely."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Exploring dietary preferences and restrictions",
        "ko": "식이 선호도와 제한 탐색하기",
        "zh": "探索饮食偏好和限制",
        "ja": "食事の好みと制限を探る",
        "vi": "Khám phá sở thích ăn uống và hạn chế"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "I noticed you’ve been avoiding dairy lately.",
          "translations": {
            "ko": "요즘 너가 유제품을 피하는 것을 눈치챘어.",
            "zh": "我注意到你最近一直在避免乳制品。",
            "ja": "最近あなたが乳製品を避けているのに気づきました。",
            "vi": "Tôi nhận thấy bạn đã tránh sữa gần đây.",
            "en": "I noticed you’ve been avoiding dairy lately."
          }
        },
        {
          "role": "user",
          "text": "Yes, I’ve been trying a plant-based diet.",
          "translations": {
            "ko": "그래, 나는 식물성 식단을 시도하고 있어.",
            "zh": "是的，我一直在尝试植物性饮食。",
            "ja": "はい、植物ベースの食事を試しています。",
            "vi": "Đúng, tôi đã thử chế độ ăn dựa trên thực vật.",
            "en": "Yes, I’ve been trying a plant-based diet."
          }
        },
        {
          "role": "ai",
          "text": "Is it for health reasons or ethical?",
          "translations": {
            "ko": "건강상의 이유인가 아니면 윤리적인 이유인가?",
            "zh": "这是出于健康原因还是道德原因？",
            "ja": "それは健康上の理由ですか、それとも倫理的な理由ですか？",
            "vi": "Đó là vì lý do sức khỏe hay đạo đức?",
            "en": "Is it for health reasons or ethical?"
          }
        },
        {
          "role": "user",
          "text": "Both, actually.",
          "translations": {
            "ko": "둘 다야.",
            "zh": "两者都有。",
            "ja": "実際には両方です。",
            "vi": "Cả hai, thực ra.",
            "en": "Both, actually."
          }
        },
        {
          "role": "ai",
          "text": "How’s it been so far?",
          "translations": {
            "ko": "지금까지 어땠어?",
            "zh": "到目前为止怎么样？",
            "ja": "それはどうでしたか？",
            "vi": "Thế nó ra sao cho đến nay?",
            "en": "How’s it been so far?"
          }
        },
        {
          "role": "user",
          "text": "Surprisingly easy.",
          "translations": {
            "ko": "놀랍게도 쉬웠어.",
            "zh": "出乎意料的容易。",
            "ja": "驚くほど簡単です。",
            "vi": "Dễ dàng hơn tôi tưởng.",
            "en": "Surprisingly easy."
          }
        },
        {
          "role": "ai",
          "text": "Are you getting enough protein?",
          "translations": {
            "ko": "단백질을 충분히 섭취하고 있니?",
            "zh": "你的蛋白质摄入量足够吗？",
            "ja": "十分なタンパク質を摂っていますか？",
            "vi": "Bạn có đủ protein không?",
            "en": "Are you getting enough protein?"
          }
        },
        {
          "role": "user",
          "text": "I’ve been using legumes and tofu.",
          "translations": {
            "ko": "나는 콩과 두부를 사용하고 있어.",
            "zh": "我一直在吃豆类和豆腐。",
            "ja": "豆類と豆腐を使っています。",
            "vi": "Tôi đã sử dụng đậu và đậu hũ.",
            "en": "I’ve been using legumes and tofu."
          }
        },
        {
          "role": "ai",
          "text": "We should research balanced recipes.",
          "translations": {
            "ko": "균형 잡힌 레시피를 연구해야 해.",
            "zh": "我们应该研究一下均衡的食谱。",
            "ja": "バランスの取れたレシピを調査すべきです。",
            "vi": "Chúng ta nên tìm hiểu về các công thức món ăn cân đối.",
            "en": "We should research balanced recipes."
          }
        },
        {
          "role": "user",
          "text": "I’ve saved a few already.",
          "translations": {
            "ko": "이미 몇 가지를 저장해 두었어.",
            "zh": "我已经保存了一些。",
            "ja": "すでにいくつか保存しています。",
            "vi": "Tôi đã lưu một số công thức rồi.",
            "en": "I’ve saved a few already."
          }
        },
        {
          "role": "ai",
          "text": "How about we try meal prepping together?",
          "translations": {
            "ko": "함께 식사 준비를 해보는 건 어때?",
            "zh": "我们可以一起尝试做饭吗？",
            "ja": "一緒に食事の準備を試してみませんか？",
            "vi": "Làm thế nào nếu chúng ta thử chuẩn bị bữa ăn cùng nhau?",
            "en": "How about we try meal prepping together?"
          }
        },
        {
          "role": "user",
          "text": "That would be fun.",
          "translations": {
            "ko": "재미있을 것 같아.",
            "zh": "那会很有趣。",
            "ja": "それは楽しいでしょう。",
            "vi": "Điều đó sẽ vui.",
            "en": "That would be fun."
          }
        },
        {
          "role": "ai",
          "text": "Do you miss anything?",
          "translations": {
            "ko": "뭔가 그리워하니?",
            "zh": "你想念什么吗？",
            "ja": "何か恋しいものはありますか？",
            "vi": "Bạn có nhớ gì không?",
            "en": "Do you miss anything?"
          }
        },
        {
          "role": "user",
          "text": "Honestly, just cheese.",
          "translations": {
            "ko": "솔직히 말하면, 그냥 치즈야.",
            "zh": "老实说，就是奶酪。",
            "ja": "正直に言うと、チーズだけです。",
            "vi": "Thật lòng mà nói, chỉ có phô mai.",
            "en": "Honestly, just cheese."
          }
        },
        {
          "role": "ai",
          "text": "There are good substitutes now.",
          "translations": {
            "ko": "지금은 좋은 대체품이 있어.",
            "zh": "现在有好的替代品。",
            "ja": "今は良い代替品があります。",
            "vi": "Hiện nay có những sản phẩm thay thế tốt.",
            "en": "There are good substitutes now."
          }
        },
        {
          "role": "user",
          "text": "True, I’ll explore more options.",
          "translations": {
            "ko": "그렇지, 더 많은 옵션을 찾아볼게.",
            "zh": "是的，我会探索更多的选项。",
            "ja": "そうですね、もっと選択肢を探してみます。",
            "vi": "Đúng, tôi sẽ tìm hiểu thêm các tùy chọn.",
            "en": "True, I’ll explore more options."
          }
        },
        {
          "role": "ai",
          "text": "Would you be open to a nutritionist visit?",
          "translations": {
            "ko": "영양사를 찾아보는 것에 열려 있을까?",
            "zh": "你愿意去看营养师吗？",
            "ja": "栄養士の訪問にオープンですか？",
            "vi": "Bạn có mở lòng đón nhận việc thăm dò dinh dưỡng không?",
            "en": "Would you be open to a nutritionist visit?"
          }
        },
        {
          "role": "user",
          "text": "That’s a great idea.",
          "translations": {
            "ko": "좋은 생각이야.",
            "zh": "那是个好主意。",
            "ja": "それは素晴らしいアイデアです。",
            "vi": "Đó là một ý tưởng tuyệt vời.",
            "en": "That’s a great idea."
          }
        },
        {
          "role": "ai",
          "text": "Let’s book one next week.",
          "translations": {
            "ko": "다음 주에 하나를 예약하자.",
            "zh": "我们下周预约一个。",
            "ja": "来週一人を予約しましょう。",
            "vi": "Hãy đặt một lịch vào tuần sau.",
            "en": "Let’s book one next week."
          }
        },
        {
          "role": "user",
          "text": "Perfect.",
          "translations": {
            "ko": "완벽해.",
            "zh": "完美。",
            "ja": "完璧です。",
            "vi": "Hoàn hảo.",
            "en": "Perfect."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Coordinating a family gathering or event",
        "ko": "가족 모임이나 이벤트 조정하기",
        "zh": "协调家庭聚会或活动",
        "ja": "家族の集まりやイベントを調整する",
        "vi": "Phối hợp một buổi họp mặt hoặc sự kiện gia đình"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Are we still hosting the family lunch next weekend?",
          "translations": {
            "ko": "다음 주말에 가족 점심을 여전히 주최하고 있니?",
            "zh": "我们下周末还要举办家庭午餐吗？",
            "ja": "来週末の家族のランチをまだ主催していますか？",
            "vi": "Chúng ta vẫn tổ chức bữa trưa gia đình vào cuối tuần tới chứ?",
            "en": "Are we still hosting the family lunch next weekend?"
          }
        },
        {
          "role": "user",
          "text": "Yes, everyone confirmed.",
          "translations": {
            "ko": "그래, 모두가 확인했어.",
            "zh": "是的，每个人都确认来。",
            "ja": "はい、全員が確認しました。",
            "vi": "Đúng, mọi người đã xác nhận.",
            "en": "Yes, everyone confirmed."
          }
        },
        {
          "role": "ai",
          "text": "How many people total?",
          "translations": {
            "ko": "총 몇 명이야?",
            "zh": "总共有多少人？",
            "ja": "合計何人ですか？",
            "vi": "Tổng cộng bao nhiêu người?",
            "en": "How many people total?"
          }
        },
        {
          "role": "user",
          "text": "Twelve, including kids.",
          "translations": {
            "ko": "아이들을 포함해서 열두 명이야.",
            "zh": "包括孩子，一共十二个人。",
            "ja": "子供を含めて12人です。",
            "vi": "Mười hai, bao gồm cả trẻ em.",
            "en": "Twelve, including kids."
          }
        },
        {
          "role": "ai",
          "text": "Should we rent extra chairs?",
          "translations": {
            "ko": "우리는 추가 의자를 빌려야 할까?",
            "zh": "我们应该租一些额外的椅子吗？",
            "ja": "追加の椅子をレンタルすべきですか？",
            "vi": "Chúng ta nên thuê thêm ghế không?",
            "en": "Should we rent extra chairs?"
          }
        },
        {
          "role": "user",
          "text": "That would be smart.",
          "translations": {
            "ko": "그게 좋을 것 같아.",
            "zh": "那会很明智。",
            "ja": "それは賢明です。",
            "vi": "Điều đó sẽ thông minh.",
            "en": "That would be smart."
          }
        },
        {
          "role": "ai",
          "text": "What’s the menu plan?",
          "translations": {
            "ko": "메뉴 계획은 어떻게 돼?",
            "zh": "菜单计划是什么？",
            "ja": "メニューの計画は何ですか？",
            "vi": "Kế hoạch thực đơn là gì?",
            "en": "What’s the menu plan?"
          }
        },
        {
          "role": "user",
          "text": "I was thinking buffet style.",
          "translations": {
            "ko": "나는 뷔페 스타일을 생각하고 있어.",
            "zh": "我在想自助式。",
            "ja": "ビュッフェスタイルを考えていました。",
            "vi": "Tôi nghĩ đến kiểu buffet.",
            "en": "I was thinking buffet style."
          }
        },
        {
          "role": "ai",
          "text": "Do we have enough serveware?",
          "translations": {
            "ko": "우리는 충분한 식기를 가지고 있을까?",
            "zh": "我们有足够的餐具吗？",
            "ja": "十分なサーブウェアはありますか？",
            "vi": "Chúng ta có đủ dụng cụ phục vụ không?",
            "en": "Do we have enough serveware?"
          }
        },
        {
          "role": "user",
          "text": "I’ll double-check.",
          "translations": {
            "ko": "확인해볼게.",
            "zh": "我会再检查一下。",
            "ja": "確認してみます。",
            "vi": "Tôi sẽ kiểm tra lại.",
            "en": "I’ll double-check."
          }
        },
        {
          "role": "ai",
          "text": "Any allergies we should be aware of?",
          "translations": {
            "ko": "우리가 알아야 할 알레르기가 있을까?",
            "zh": "有没有我们应该注意的过敏情况？",
            "ja": "私たちが知っておくべきアレルギーはありますか？",
            "vi": "Có bất kỳ dị ứng nào chúng ta nên biết không?",
            "en": "Any allergies we should be aware of?"
          }
        },
        {
          "role": "user",
          "text": "Uncle Joe can’t have gluten.",
          "translations": {
            "ko": "조 삼촌은 글루텐을 먹을 수 없어.",
            "zh": "乔叔叔不能吃麸质。",
            "ja": "ジョーおじさんはグルテンを摂取できません。",
            "vi": "Chú Joe không thể ăn gluten.",
            "en": "Uncle Joe can’t have gluten."
          }
        },
        {
          "role": "ai",
          "text": "We’ll label all the dishes clearly.",
          "translations": {
            "ko": "우리는 모든 요리를 명확하게 표시할 것이야.",
            "zh": "我们会清楚地标记所有的菜肴。",
            "ja": "すべての料理を明確にラベル付けしましょう。",
            "vi": "Chúng ta sẽ ghi rõ tất cả các món ăn.",
            "en": "We’ll label all the dishes clearly."
          }
        },
        {
          "role": "user",
          "text": "Good call.",
          "translations": {
            "ko": "좋은 생각이야.",
            "zh": "好主意。",
            "ja": "良い考えです。",
            "vi": "Gọi là quyết định tốt.",
            "en": "Good call."
          }
        },
        {
          "role": "ai",
          "text": "What about decorations?",
          "translations": {
            "ko": "장식은 어떨까?",
            "zh": "装饰怎么样？",
            "ja": "デコレーションはどうですか？",
            "vi": "Còn về trang trí thì sao?",
            "en": "What about decorations?"
          }
        },
        {
          "role": "user",
          "text": "Simple and cozy.",
          "translations": {
            "ko": "간단하고 아늑하게.",
            "zh": "简单而舒适。",
            "ja": "シンプルで居心地の良いもの。",
            "vi": "Đơn giản và ấm cúng.",
            "en": "Simple and cozy."
          }
        },
        {
          "role": "ai",
          "text": "Should we assign tasks?",
          "translations": {
            "ko": "업무를 할당해야 할까?",
            "zh": "我们应该分配任务吗？",
            "ja": "タスクを割り当てるべきですか？",
            "vi": "Chúng ta nên giao nhiệm vụ không?",
            "en": "Should we assign tasks?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I’ll make a checklist.",
          "translations": {
            "ko": "그래, 체크리스트를 만들게.",
            "zh": "是的，我会做一个清单。",
            "ja": "はい、チェックリストを作ります。",
            "vi": "Đúng, tôi sẽ làm một danh sách kiểm tra.",
            "en": "Yes, I’ll make a checklist."
          }
        },
        {
          "role": "ai",
          "text": "Thanks for helping coordinate.",
          "translations": {
            "ko": "조정하는 데 도움을 줘서 고마워.",
            "zh": "谢谢你帮忙协调。",
            "ja": "協力して調整してくれてありがとう。",
            "vi": "Cảm ơn bạn đã giúp điều phối.",
            "en": "Thanks for helping coordinate."
          }
        },
        {
          "role": "user",
          "text": "My pleasure.",
          "translations": {
            "ko": "천만에요.",
            "zh": "我很乐意。",
            "ja": "喜んで。",
            "vi": "Rất vui được giúp đỡ.",
            "en": "My pleasure."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Discussing work-life balance and stress management",
        "ko": "직장과 생활의 균형 및 스트레스 관리 논의하기",
        "zh": "讨论工作生活平衡和压力管理",
        "ja": "ワークライフバランスとストレス管理について話し合う",
        "vi": "Thảo luận về cân bằng công việc và cuộc sống, quản lý căng thẳng"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "You’ve been looking drained lately. Everything alright?",
          "translations": {
            "ko": "요즘 너가 피곤해 보여. 괜찮아?",
            "zh": "你最近看起来很疲惫。一切还好吗？",
            "ja": "最近あなたが疲れて見えます。大丈夫ですか？",
            "vi": "Bạn trông rất mệt mỏi gần đây. Mọi thứ ổn không?",
            "en": "You’ve been looking drained lately. Everything alright?"
          }
        },
        {
          "role": "user",
          "text": "Work’s been overwhelming.",
          "translations": {
            "ko": "일이 좀 많아져서.",
            "zh": "工作压力太大。",
            "ja": "仕事が圧倒的です。",
            "vi": "Công việc đang làm tôi quá sức.",
            "en": "Work’s been overwhelming."
          }
        },
        {
          "role": "ai",
          "text": "Have you considered taking a few days off?",
          "translations": {
            "ko": "며칠 쉬어보는 건 어때?",
            "zh": "你有考虑过休几天假吗？",
            "ja": "数日休むことを考えたことはありますか？",
            "vi": "Bạn đã nghĩ đến việc nghỉ vài ngày chưa?",
            "en": "Have you considered taking a few days off?"
          }
        },
        {
          "role": "user",
          "text": "I’ve been thinking about it.",
          "translations": {
            "ko": "그것을 생각해 보고 있었어.",
            "zh": "我一直在考虑。",
            "ja": "それについて考えていました。",
            "vi": "Tôi đã nghĩ về điều đó.",
            "en": "I’ve been thinking about it."
          }
        },
        {
          "role": "ai",
          "text": "Sometimes a short break can do wonders.",
          "translations": {
            "ko": "가끔 짧은 휴식이 큰 도움이 될 수 있어.",
            "zh": "有时候短暂的休息可以创造奇迹。",
            "ja": "短い休みが驚くほど効果的なこともあります。",
            "vi": "Đôi khi một kỳ nghỉ ngắn có thể tạo nên điều kỳ diệu.",
            "en": "Sometimes a short break can do wonders."
          }
        },
        {
          "role": "user",
          "text": "That’s true.",
          "translations": {
            "ko": "그게 맞아.",
            "zh": "那是真的。",
            "ja": "それは本当です。",
            "vi": "Đúng vậy.",
            "en": "That’s true."
          }
        },
        {
          "role": "ai",
          "text": "How have you been managing stress?",
          "translations": {
            "ko": "스트레스를 어떻게 관리하고 있니?",
            "zh": "你是怎么管理压力的？",
            "ja": "あなたはどのようにストレスを管理していますか？",
            "vi": "Bạn đã quản lý căng thẳng như thế nào?",
            "en": "How have you been managing stress?"
          }
        },
        {
          "role": "user",
          "text": "Mostly walks and journaling.",
          "translations": {
            "ko": "주로 산책하고 일기를 쓰고 있어.",
            "zh": "主要是散步和写日记。",
            "ja": "主に散歩と日記を書いています。",
            "vi": "Chủ yếu là đi dạo và viết nhật ký.",
            "en": "Mostly walks and journaling."
          }
        },
        {
          "role": "ai",
          "text": "Do you sleep okay?",
          "translations": {
            "ko": "잠은 잘 자니?",
            "zh": "你睡得好吗？",
            "ja": "眠れていますか？",
            "vi": "Bạn ngủ ổn không?",
            "en": "Do you sleep okay?"
          }
        },
        {
          "role": "user",
          "text": "Not really, my mind races.",
          "translations": {
            "ko": "사실 그렇지 않아, 내 마음이 계속 빠르게 움직여.",
            "zh": "不太好，我的脑子一直在转。",
            "ja": "実際には、私の頭は走っています。",
            "vi": "Không thực sự, tâm trí tôi luôn đang suy nghĩ.",
            "en": "Not really, my mind races."
          }
        },
        {
          "role": "ai",
          "text": "Want to try mindfulness together?",
          "translations": {
            "ko": "함께 명상을 해보는 건 어때?",
            "zh": "我们一起尝试正念怎么样？",
            "ja": "一緒にマインドフルネスを試してみませんか？",
            "vi": "Bạn muốn thử thiền cùng nhau không?",
            "en": "Want to try mindfulness together?"
          }
        },
        {
          "role": "user",
          "text": "I’d love that.",
          "translations": {
            "ko": "그게 좋겠어.",
            "zh": "我很愿意。",
            "ja": "それがいいです。",
            "vi": "Tôi rất muốn.",
            "en": "I’d love that."
          }
        },
        {
          "role": "ai",
          "text": "Let’s block time for it each evening.",
          "translations": {
            "ko": "매일 저녁에 그 시간을 막아두자.",
            "zh": "我们每天晚上都留出时间来做。",
            "ja": "毎晩それのための時間をブロックしましょう。",
            "vi": "Hãy dành thời gian cho nó mỗi tối.",
            "en": "Let’s block time for it each evening."
          }
        },
        {
          "role": "user",
          "text": "That sounds doable.",
          "translations": {
            "ko": "그게 가능하게 느껴져.",
            "zh": "那听起来可行。",
            "ja": "それは可能そうです。",
            "vi": "Điều đó có thể thực hiện được.",
            "en": "That sounds doable."
          }
        },
        {
          "role": "ai",
          "text": "We could also set work boundaries.",
          "translations": {
            "ko": "우리는 또한 업무 경계를 설정할 수 있어.",
            "zh": "我们也可以设定工作界限。",
            "ja": "また、仕事の境界を設定することもできます。",
            "vi": "Chúng ta cũng có thể đặt ranh giới công việc.",
            "en": "We could also set work boundaries."
          }
        },
        {
          "role": "user",
          "text": "Like no emails after 8 PM?",
          "translations": {
            "ko": "8시 이후에는 이메일을 보내지 않는 것처럼?",
            "zh": "比如晚上8点后不看邮件？",
            "ja": "8時以降はメールを送らないということですか？",
            "vi": "Như không gửi email sau 8 giờ tối?",
            "en": "Like no emails after 8 PM?"
          }
        },
        {
          "role": "ai",
          "text": "Exactly. Let’s protect our downtime.",
          "translations": {
            "ko": "정확해. 우리의 휴식 시간을 보호하자.",
            "zh": "没错。让我们保护我们的休息时间。",
            "ja": "まさにその通り。私たちのダウンタイムを守りましょう。",
            "vi": "Chính xác. Hãy bảo vệ thời gian nghỉ ngơi của chúng ta.",
            "en": "Exactly. Let’s protect our downtime."
          }
        },
        {
          "role": "user",
          "text": "Agreed.",
          "translations": {
            "ko": "동의해.",
            "zh": "同意。",
            "ja": "同意します。",
            "vi": "Đồng ý.",
            "en": "Agreed."
          }
        },
        {
          "role": "ai",
          "text": "Balance is everything.",
          "translations": {
            "ko": "균형이 모든 것이야.",
            "zh": "平衡是一切。",
            "ja": "バランスが全てです。",
            "vi": "Sự cân bằng là mọi thứ.",
            "en": "Balance is everything."
          }
        },
        {
          "role": "user",
          "text": "Absolutely.",
          "translations": {
            "ko": "그렇지.",
            "zh": "绝对。",
            "ja": "確かに。",
            "vi": "Chắc chắn.",
            "en": "Absolutely."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Making ethical choices in daily life",
        "ko": "일상생활에서 윤리적인 선택을 하는 것",
        "zh": "在日常生活中做出道德选择",
        "ja": "日常生活での倫理的な選択をする",
        "vi": "Đưa ra lựa chọn đạo đức trong cuộc sống hàng ngày"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Should we switch to more eco-friendly products?",
          "translations": {
            "ko": "우리는 더 친환경적인 제품으로 전환해야 할까?",
            "zh": "我们应该转向更环保的产品吗？",
            "ja": "もっとエコフレンドリーな製品に切り替えるべきですか？",
            "vi": "Chúng ta nên chuyển sang sử dụng nhiều sản phẩm thân thiện với môi trường hơn không?",
            "en": "Should we switch to more eco-friendly products?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I’ve been meaning to.",
          "translations": {
            "ko": "그래, 그것을 하려고 했어.",
            "zh": "是的，我一直想这么做。",
            "ja": "はい、それを意図していました。",
            "vi": "Đúng, tôi đã có ý định làm như vậy.",
            "en": "Yes, I’ve been meaning to."
          }
        },
        {
          "role": "ai",
          "text": "Like reusable kitchen wraps?",
          "translations": {
            "ko": "재사용 가능한 주방 랩 같은 거야?",
            "zh": "像可重复使用的厨房包装吗？",
            "ja": "再利用可能なキッチンラップのようなものですか？",
            "vi": "Như bọc bếp tái sử dụng?",
            "en": "Like reusable kitchen wraps?"
          }
        },
        {
          "role": "user",
          "text": "Exactly.",
          "translations": {
            "ko": "정확해.",
            "zh": "没错。",
            "ja": "まさにその通り。",
            "vi": "Chính xác.",
            "en": "Exactly."
          }
        },
        {
          "role": "ai",
          "text": "What about reducing plastic use?",
          "translations": {
            "ko": "플라스틱 사용을 줄이는 것은 어떨까?",
            "zh": "我们应该减少塑料的使用吗？",
            "ja": "プラスチックの使用を減らすことはどうですか？",
            "vi": "Còn việc giảm sử dụng nhựa thì sao?",
            "en": "What about reducing plastic use?"
          }
        },
        {
          "role": "user",
          "text": "Let’s start with bulk buying.",
          "translations": {
            "ko": "대량 구매로 시작하자.",
            "zh": "我们可以从大量购买开始。",
            "ja": "まずは一括購入から始めましょう。",
            "vi": "Hãy bắt đầu với việc mua hàng theo số lượng lớn.",
            "en": "Let’s start with bulk buying."
          }
        },
        {
          "role": "ai",
          "text": "And composting food waste?",
          "translations": {
            "ko": "그리고 음식물 쓰레기를 퇴비로 만드는 것은 어떨까?",
            "zh": "那么堆肥食物垃圾呢？",
            "ja": "食品廃棄物の堆肥化はどうですか？",
            "vi": "Và việc ủ phân rác thực phẩm?",
            "en": "And composting food waste?"
          }
        },
        {
          "role": "user",
          "text": "That’s a bit tricky in our apartment.",
          "translations": {
            "ko": "우리 아파트에서는 좀 까다로울 수 있어.",
            "zh": "在我们的公寓里这有点困难。",
            "ja": "それは私たちのアパートでは少し難しいです。",
            "vi": "Điều đó hơi khó khăn trong căn hộ của chúng ta.",
            "en": "That’s a bit tricky in our apartment."
          }
        },
        {
          "role": "ai",
          "text": "We could research local options.",
          "translations": {
            "ko": "우리는 지역 옵션을 연구할 수 있어.",
            "zh": "我们可以研究一下当地的选择。",
            "ja": "地元のオプションを調査することができます。",
            "vi": "Chúng ta có thể tìm hiểu các tùy chọn địa phương.",
            "en": "We could research local options."
          }
        },
        {
          "role": "user",
          "text": "Good idea.",
          "translations": {
            "ko": "좋은 생각이야.",
            "zh": "好主意。",
            "ja": "良い考えです。",
            "vi": "Ý tưởng tốt.",
            "en": "Good idea."
          }
        },
        {
          "role": "ai",
          "text": "Have you seen the zero-waste kits?",
          "translations": {
            "ko": "너는 제로 웨이스트 키트를 봤니?",
            "zh": "你见过零废弃套件吗？",
            "ja": "ゼロウェイストキットを見たことがありますか？",
            "vi": "Bạn đã thấy bộ dụng cụ không rác chưa?",
            "en": "Have you seen the zero-waste kits?"
          }
        },
        {
          "role": "user",
          "text": "Yes, they look promising.",
          "translations": {
            "ko": "그래, 유망해 보여.",
            "zh": "是的，它们看起来很有希望。",
            "ja": "はい、それらは有望に見えます。",
            "vi": "Đúng, chúng trông rất hứa hẹn.",
            "en": "Yes, they look promising."
          }
        },
        {
          "role": "ai",
          "text": "It might cost more upfront.",
          "translations": {
            "ko": "초기 비용이 더 들 수 있어.",
            "zh": "它可能会有更高的初期成本。",
            "ja": "最初はもっと費用がかかるかもしれません。",
            "vi": "Nó có thể tốn nhiều hơn ban đầu.",
            "en": "It might cost more upfront."
          }
        },
        {
          "role": "user",
          "text": "But worth it long-term.",
          "translations": {
            "ko": "하지만 장기적으로는 가치가 있어.",
            "zh": "但从长远来看是值得的。",
            "ja": "しかし、長期的にはそれが価値があります。",
            "vi": "Nhưng đáng giá lâu dài.",
            "en": "But worth it long-term."
          }
        },
        {
          "role": "ai",
          "text": "Ethical shopping also includes fair trade.",
          "translations": {
            "ko": "윤리적인 쇼핑에는 또한 공정 무역이 포함돼.",
            "zh": "道德购物也包括公平贸易。",
            "ja": "倫理的なショッピングにはフェアトレードも含まれます。",
            "vi": "Mua sắm đạo đức cũng bao gồm thương mại công bằng.",
            "en": "Ethical shopping also includes fair trade."
          }
        },
        {
          "role": "user",
          "text": "Let’s review our brands.",
          "translations": {
            "ko": "우리의 브랜드를 검토하자.",
            "zh": "我们来审查一下我们的品牌。",
            "ja": "私たちのブランドを見直しましょう。",
            "vi": "Hãy xem xét lại các thương hiệu của chúng ta.",
            "en": "Let’s review our brands."
          }
        },
        {
          "role": "ai",
          "text": "Can we do a monthly review?",
          "translations": {
            "ko": "우리는 월간 리뷰를 할 수 있을까?",
            "zh": "我们可以做一个月的回顾吗？",
            "ja": "月次レビューを行うことができますか？",
            "vi": "Chúng ta có thể làm đánh giá hàng tháng không?",
            "en": "Can we do a monthly review?"
          }
        },
        {
          "role": "user",
          "text": "Absolutely.",
          "translations": {
            "ko": "그럼.",
            "zh": "绝对可以。",
            "ja": "もちろんです。",
            "vi": "Chắc chắn.",
            "en": "Absolutely."
          }
        },
        {
          "role": "ai",
          "text": "Small steps matter.",
          "translations": {
            "ko": "작은 단계가 중요해.",
            "zh": "小步骤很重要。",
            "ja": "小さなステップが重要です。",
            "vi": "Những bước nhỏ quan trọng.",
            "en": "Small steps matter."
          }
        },
        {
          "role": "user",
          "text": "They really do.",
          "translations": {
            "ko": "정말 그래.",
            "zh": "确实如此。",
            "ja": "本当にそうです。",
            "vi": "Chúng thực sự quan trọng.",
            "en": "They really do."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Reflecting on a past mistake or regret",
        "ko": "과거의 실수나 후회를 반성하기",
        "zh": "反思过去的错误或遗憾",
        "ja": "過去の間違いや後悔について反省する",
        "vi": "Suy ngẫm về một lỗi hoặc hối tiếc trong quá khứ"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Do you ever think about that argument we had last year?",
          "translations": {
            "ko": "작년에 우리가 한 싸움을 생각하니?",
            "zh": "你有没有想过我们去年那次争论？",
            "ja": "昨年私たちがした議論について考えることはありますか？",
            "vi": "Bạn có bao giờ nghĩ về cuộc tranh cãi chúng ta đã có vào năm ngoái không?",
            "en": "Do you ever think about that argument we had last year?"
          }
        },
        {
          "role": "user",
          "text": "More often than I’d like.",
          "translations": {
            "ko": "내가 원하는 것보다 더 자주 생각하게 돼.",
            "zh": "比我愿意承认的更多。",
            "ja": "私が望むよりも頻繁に。",
            "vi": "Nhiều hơn tôi muốn.",
            "en": "More often than I’d like."
          }
        },
        {
          "role": "ai",
          "text": "I regret how I handled it.",
          "translations": {
            "ko": "나는 그것을 어떻게 처리했는지 후회해.",
            "zh": "我后悔我当时的处理方式。",
            "ja": "私はそれをどのように扱ったかを後悔しています。",
            "vi": "Tôi hối tiếc về cách tôi xử lý nó.",
            "en": "I regret how I handled it."
          }
        },
        {
          "role": "user",
          "text": "Me too.",
          "translations": {
            "ko": "나도 그래.",
            "zh": "我也是。",
            "ja": "私もです。",
            "vi": "Tôi cũng vậy.",
            "en": "Me too."
          }
        },
        {
          "role": "ai",
          "text": "We’ve come a long way since then.",
          "translations": {
            "ko": "그 이후로 우리는 많이 성장했어.",
            "zh": "从那时起我们已经走了很长的路。",
            "ja": "それ以来、私たちは長い道のりを来ました。",
            "vi": "Chúng ta đã đi được một quãng đường dài kể từ đó.",
            "en": "We’ve come a long way since then."
          }
        },
        {
          "role": "user",
          "text": "Yes, but it still stings.",
          "translations": {
            "ko": "그래, 하지만 여전히 아프네.",
            "zh": "是的，但它仍然刺痛。",
            "ja": "はい、でもそれはまだ痛いです。",
            "vi": "Đúng, nhưng nó vẫn còn đau.",
            "en": "Yes, but it still stings."
          }
        },
        {
          "role": "ai",
          "text": "Would it help to talk it through again?",
          "translations": {
            "ko": "다시 이야기해보는 것이 도움이 될까?",
            "zh": "再谈一次会有帮助吗？",
            "ja": "もう一度それを話し合うことが助けになると思いますか？",
            "vi": "Nói lại nó có giúp ích không?",
            "en": "Would it help to talk it through again?"
          }
        },
        {
          "role": "user",
          "text": "I think so.",
          "translations": {
            "ko": "그렇게 생각해.",
            "zh": "我想会的。",
            "ja": "そう思います。",
            "vi": "Tôi nghĩ vậy.",
            "en": "I think so."
          }
        },
        {
          "role": "ai",
          "text": "I was defensive and didn’t listen.",
          "translations": {
            "ko": "나는 방어적이었고 듣지 않았어.",
            "zh": "我当时防御心态强，没有听你说话。",
            "ja": "私は防御的で、聞いていませんでした。",
            "vi": "Tôi đã phòng vệ và không lắng nghe.",
            "en": "I was defensive and didn’t listen."
          }
        },
        {
          "role": "user",
          "text": "And I wasn’t fair to you either.",
          "translations": {
            "ko": "나도 너에게 공정하지 않았어.",
            "zh": "我也对你不公平。",
            "ja": "私もあなたに対して公平ではありませんでした。",
            "vi": "Và tôi cũng không công bằng với bạn.",
            "en": "And I wasn’t fair to you either."
          }
        },
        {
          "role": "ai",
          "text": "Let’s forgive ourselves.",
          "translations": {
            "ko": "우리는 우리 자신을 용서하자.",
            "zh": "让我们原谅自己。",
            "ja": "自分自身を許しましょう。",
            "vi": "Hãy tha thứ cho chính mình.",
            "en": "Let’s forgive ourselves."
          }
        },
        {
          "role": "user",
          "text": "That’s not always easy.",
          "translations": {
            "ko": "그게 항상 쉽지는 않아.",
            "zh": "那并不总是容易的。",
            "ja": "それは常に簡単ではありません。",
            "vi": "Điều đó không phải lúc nào cũng dễ dàng.",
            "en": "That’s not always easy."
          }
        },
        {
          "role": "ai",
          "text": "But necessary for closure.",
          "translations": {
            "ko": "하지만 폐쇄를 위해 필요해.",
            "zh": "但为了得到解脱，这是必要的。",
            "ja": "しかし、クロージャーには必要です。",
            "vi": "Nhưng cần thiết để có sự kết thúc.",
            "en": "But necessary for closure."
          }
        },
        {
          "role": "user",
          "text": "I agree.",
          "translations": {
            "ko": "동의해.",
            "zh": "我同意。",
            "ja": "同意します。",
            "vi": "Tôi đồng ý.",
            "en": "I agree."
          }
        },
        {
          "role": "ai",
          "text": "I appreciate your openness.",
          "translations": {
            "ko": "너의 개방성에 감사해.",
            "zh": "我很感激你的坦诚。",
            "ja": "あなたの開放性を評価します。",
            "vi": "Tôi đánh giá cao sự mở lòng của bạn.",
            "en": "I appreciate your openness."
          }
        },
        {
          "role": "user",
          "text": "It means a lot.",
          "translations": {
            "ko": "그게 많이 의미해.",
            "zh": "这意味着很多。",
            "ja": "それは大きな意味があります。",
            "vi": "Điều đó có ý nghĩa rất nhiều.",
            "en": "It means a lot."
          }
        },
        {
          "role": "ai",
          "text": "Let’s keep growing together.",
          "translations": {
            "ko": "계속 함께 성장하자.",
            "zh": "让我们一起成长。",
            "ja": "一緒に成長し続けましょう。",
            "vi": "Hãy tiếp tục phát triển cùng nhau.",
            "en": "Let’s keep growing together."
          }
        },
        {
          "role": "user",
          "text": "Always.",
          "translations": {
            "ko": "언제나.",
            "zh": "永远。",
            "ja": "常に。",
            "vi": "Luôn luôn.",
            "en": "Always."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Planning a sustainable lifestyle",
        "ko": "지속 가능한 생활 계획하기",
        "zh": "规划可持续的生活方式",
        "ja": "持続可能なライフスタイルを計画する",
        "vi": "Lập kế hoạch cho lối sống bền vững"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Do you think we could reduce our carbon footprint?",
          "translations": {
            "ko": "우리는 탄소 발자국을 줄일 수 있을까?",
            "zh": "你认为我们可以减少我们的碳足迹吗？",
            "ja": "私たちはカーボンフットプリントを減らすことができますか？",
            "vi": "Bạn nghĩ chúng ta có thể giảm lượng khí thải carbon của mình không?",
            "en": "Do you think we could reduce our carbon footprint?"
          }
        },
        {
          "role": "user",
          "text": "Yes, we could start with our energy use.",
          "translations": {
            "ko": "그래, 우리는 에너지 사용부터 시작할 수 있어.",
            "zh": "是的，我们可以从我们的能源使用开始。",
            "ja": "はい、私たちはエネルギー使用から始めることができます。",
            "vi": "Đúng, chúng ta có thể bắt đầu với việc sử dụng năng lượng của mình.",
            "en": "Yes, we could start with our energy use."
          }
        },
        {
          "role": "ai",
          "text": "What about installing solar panels?",
          "translations": {
            "ko": "태양광 패널을 설치하는 것은 어떨까?",
            "zh": "安装太阳能板怎么样？",
            "ja": "太陽パネルを設置することはどうですか？",
            "vi": "Còn việc lắp đặt tấm pin mặt trời thì sao?",
            "en": "What about installing solar panels?"
          }
        },
        {
          "role": "user",
          "text": "That would be a smart investment.",
          "translations": {
            "ko": "그것은 현명한 투자가 될 것이야.",
            "zh": "那将是一个明智的投资。",
            "ja": "それは賢い投資になるでしょう。",
            "vi": "Đó sẽ là một khoản đầu tư thông minh.",
            "en": "That would be a smart investment."
          }
        },
        {
          "role": "ai",
          "text": "And switching to an electric car?",
          "translations": {
            "ko": "그리고 전기차로 바꾸는 것은 어떨까?",
            "zh": "换成电动车怎么样？",
            "ja": "電気自動車に切り替えることはどうですか？",
            "vi": "Và chuyển sang sử dụng xe điện?",
            "en": "And switching to an electric car?"
          }
        },
        {
          "role": "user",
          "text": "I’ve been researching that.",
          "translations": {
            "ko": "그것에 대해 연구하고 있었어.",
            "zh": "我一直在研究这个。",
            "ja": "それについて調査しています。",
            "vi": "Tôi đã nghiên cứu về điều đó.",
            "en": "I’ve been researching that."
          }
        },
        {
          "role": "ai",
          "text": "We should calculate our monthly usage first.",
          "translations": {
            "ko": "우리는 먼저 월간 사용량을 계산해야 해.",
            "zh": "我们应该先计算我们的月度使用量。",
            "ja": "最初に月間使用量を計算するべきです。",
            "vi": "Chúng ta nên tính toán lượng sử dụng hàng tháng của chúng ta trước.",
            "en": "We should calculate our monthly usage first."
          }
        },
        {
          "role": "user",
          "text": "Agreed.",
          "translations": {
            "ko": "동의해.",
            "zh": "同意。",
            "ja": "同意します。",
            "vi": "Đồng ý.",
            "en": "Agreed."
          }
        },
        {
          "role": "ai",
          "text": "What about eating more plant-based meals?",
          "translations": {
            "ko": "더 많은 식물성 식사를 하는 것은 어떨까?",
            "zh": "我们应该多吃植物性食品吗？",
            "ja": "もっと植物ベースの食事を食べることはどうですか？",
            "vi": "Còn việc ăn nhiều bữa ăn dựa trên thực vật hơn thì sao?",
            "en": "What about eating more plant-based meals?"
          }
        },
        {
          "role": "user",
          "text": "Let’s aim for 3 nights a week.",
          "translations": {
            "ko": "일주일에 3번은 해보자.",
            "zh": "我们的目标是每周三晚。",
            "ja": "週に3夜を目指しましょう。",
            "vi": "Hãy đặt mục tiêu 3 đêm mỗi tuần.",
            "en": "Let’s aim for 3 nights a week."
          }
        },
        {
          "role": "ai",
          "text": "And minimizing fast fashion?",
          "translations": {
            "ko": "그리고 패스트 패션을 최소화하는 것은 어떨까?",
            "zh": "减少快时尚怎么样？",
            "ja": "ファストファッションを最小限に抑えることはどうですか？",
            "vi": "Và giảm thiểu thời trang nhanh?",
            "en": "And minimizing fast fashion?"
          }
        },
        {
          "role": "user",
          "text": "Thrift shops and quality pieces only.",
          "translations": {
            "ko": "구제 상점과 품질 좋은 제품만.",
            "zh": "只买旧货店和质量好的衣服。",
            "ja": "古着屋と品質の良い品物だけです。",
            "vi": "Chỉ mua hàng từ cửa hàng đồ cũ và những món đồ chất lượng.",
            "en": "Thrift shops and quality pieces only."
          }
        },
        {
          "role": "ai",
          "text": "Should we document our journey?",
          "translations": {
            "ko": "우리의 여정을 기록해야 할까?",
            "zh": "我们应该记录我们的旅程吗？",
            "ja": "私たちの旅を記録するべきですか？",
            "vi": "Chúng ta nên ghi lại hành trình của mình không?",
            "en": "Should we document our journey?"
          }
        },
        {
          "role": "user",
          "text": "Great idea. Could help others too.",
          "translations": {
            "ko": "좋은 생각이야. 다른 사람들에게도 도움이 될 수 있어.",
            "zh": "好主意。也可以帮助其他人。",
            "ja": "素晴らしいアイデア。他の人にも役立つかもしれません。",
            "vi": "Ý tưởng tuyệt vời. Cũng có thể giúp người khác.",
            "en": "Great idea. Could help others too."
          }
        },
        {
          "role": "ai",
          "text": "Let’s set yearly sustainability goals.",
          "translations": {
            "ko": "연간 지속 가능성 목표를 설정하자.",
            "zh": "我们设定年度可持续性目标。",
            "ja": "持続可能性の目標を年間で設定しましょう。",
            "vi": "Hãy đặt mục tiêu bền vững hàng năm.",
            "en": "Let’s set yearly sustainability goals."
          }
        },
        {
          "role": "user",
          "text": "I’ll draft a plan.",
          "translations": {
            "ko": "계획을 세울게.",
            "zh": "我会制定一个计划。",
            "ja": "プランを作成します。",
            "vi": "Tôi sẽ soạn một kế hoạch.",
            "en": "I’ll draft a plan."
          }
        },
        {
          "role": "ai",
          "text": "We’re on the right track.",
          "translations": {
            "ko": "우리는 올바른 길에 있어.",
            "zh": "我们走在正确的道路上。",
            "ja": "私たちは正しい道にいます。",
            "vi": "Chúng ta đang đi đúng hướng.",
            "en": "We’re on the right track."
          }
        },
        {
          "role": "user",
          "text": "Feels good.",
          "translations": {
            "ko": "기분이 좋아.",
            "zh": "感觉很好。",
            "ja": "気持ちがいいです。",
            "vi": "Cảm thấy tốt.",
            "en": "Feels good."
          }
        },
        {
          "role": "ai",
          "text": "Let’s stay consistent.",
          "translations": {
            "ko": "일관성을 유지하자.",
            "zh": "我们要保持一致。",
            "ja": "一貫性を保ちましょう。",
            "vi": "Hãy duy trì sự kiên trì.",
            "en": "Let’s stay consistent."
          }
        },
        {
          "role": "user",
          "text": "Absolutely.",
          "translations": {
            "ko": "그럼.",
            "zh": "绝对。",
            "ja": "確かに。",
            "vi": "Chắc chắn.",
            "en": "Absolutely."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Helping a neighbor in a delicate situation",
        "ko": "섬세한 상황에서 이웃 돕기",
        "zh": "在微妙的情况下帮助邻居",
        "ja": "繊細な状況で隣人を助ける",
        "vi": "Giúp hàng xóm trong một tình huống nhạy cảm"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Did you hear what happened to Mrs. Kim upstairs?",
          "translations": {
            "ko": "위층에 사는 김 할머니에게 무슨 일이 생겼는지 들었니?",
            "zh": "你听说楼上的金太太发生了什么事吗？",
            "ja": "上の階のキムさんに何が起こったか聞きましたか？",
            "vi": "Bạn có nghe về chuyện gì đã xảy ra với bà Kim ở tầng trên không?",
            "en": "Did you hear what happened to Mrs. Kim upstairs?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I heard her husband passed.",
          "translations": {
            "ko": "그래, 그녀의 남편이 돌아갔다고 들었어.",
            "zh": "是的，我听说她的丈夫去世了。",
            "ja": "はい、彼女の夫が亡くなったと聞きました。",
            "vi": "Đúng, tôi nghe nói chồng bà ấy đã qua đời.",
            "en": "Yes, I heard her husband passed."
          }
        },
        {
          "role": "ai",
          "text": "That must be incredibly hard.",
          "translations": {
            "ko": "그것은 무척 힘들 것이야.",
            "zh": "那一定非常难受。",
            "ja": "それは非常に困難でしょう。",
            "vi": "Điều đó phải rất khó khăn.",
            "en": "That must be incredibly hard."
          }
        },
        {
          "role": "user",
          "text": "She’s all alone now.",
          "translations": {
            "ko": "그녀는 이제 혼자야.",
            "zh": "她现在一个人了。",
            "ja": "彼女は今、一人ぼっちです。",
            "vi": "Bà ấy giờ đây hoàn toàn một mình.",
            "en": "She’s all alone now."
          }
        },
        {
          "role": "ai",
          "text": "Should we check in on her?",
          "translations": {
            "ko": "우리는 그녀를 찾아봐야 할까?",
            "zh": "我们应该去看看她吗？",
            "ja": "彼女を見に行くべきですか？",
            "vi": "Chúng ta nên kiểm tra xem bà ấy có sao không?",
            "en": "Should we check in on her?"
          }
        },
        {
          "role": "user",
          "text": "Definitely.",
          "translations": {
            "ko": "반드시.",
            "zh": "当然。",
            "ja": "確かに。",
            "vi": "Chắc chắn.",
            "en": "Definitely."
          }
        },
        {
          "role": "ai",
          "text": "Maybe bring her a meal?",
          "translations": {
            "ko": "아마 그녀에게 식사를 가져다 줄 수 있을까?",
            "zh": "也许带给她一顿饭？",
            "ja": "彼女に食事を持って行くべきですか？",
            "vi": "Có thể mang cho bà ấy một bữa ăn?",
            "en": "Maybe bring her a meal?"
          }
        },
        {
          "role": "user",
          "text": "Or offer help with errands.",
          "translations": {
            "ko": "아니면 심부름을 도와줄 수 있을까?",
            "zh": "或者提供帮助做一些杂事。",
            "ja": "または、用事の手伝いを申し出る。",
            "vi": "Hoặc đề nghị giúp đỡ với các việc vặt.",
            "en": "Or offer help with errands."
          }
        },
        {
          "role": "ai",
          "text": "What’s the best way to approach it?",
          "translations": {
            "ko": "그것을 접근하는 가장 좋은 방법은 무엇일까?",
            "zh": "最好的方法是什么？",
            "ja": "それをどのようにアプローチするのが最善ですか？",
            "vi": "Cách tiếp cận tốt nhất là gì?",
            "en": "What’s the best way to approach it?"
          }
        },
        {
          "role": "user",
          "text": "Gently and respectfully.",
          "translations": {
            "ko": "부드럽고 존중스럽게.",
            "zh": "轻轻地，尊重地。",
            "ja": "優しく、敬意を持って。",
            "vi": "Nhẹ nhàng và tôn trọng.",
            "en": "Gently and respectfully."
          }
        },
        {
          "role": "ai",
          "text": "Do you think she’d be open to visitors?",
          "translations": {
            "ko": "그녀가 방문객에게 열려 있을까?",
            "zh": "你觉得她愿意接待访客吗？",
            "ja": "彼女は訪問者を受け入れることにオープンだと思いますか？",
            "vi": "Bạn nghĩ bà ấy có mở lòng đón nhận khách không?",
            "en": "Do you think she’d be open to visitors?"
          }
        },
        {
          "role": "user",
          "text": "Only if we ask first.",
          "translations": {
            "ko": "먼저 물어봐야만 해.",
            "zh": "只有我们先问她。",
            "ja": "最初に尋ねるなら、そうです。",
            "vi": "Chỉ khi chúng ta hỏi trước.",
            "en": "Only if we ask first."
          }
        },
        {
          "role": "ai",
          "text": "I’ll write a note and leave it at her door.",
          "translations": {
            "ko": "나는 메모를 써서 그녀의 문에 남겨둘게.",
            "zh": "我会写一个便条，放在她的门口。",
            "ja": "彼女のドアにメモを書いて置きます。",
            "vi": "Tôi sẽ viết một lá thư và để nó ở cửa nhà bà ấy.",
            "en": "I’ll write a note and leave it at her door."
          }
        },
        {
          "role": "user",
          "text": "That’s kind.",
          "translations": {
            "ko": "친절하네.",
            "zh": "那很善良。",
            "ja": "それは親切です。",
            "vi": "Đó là một hành động tốt bụng.",
            "en": "That’s kind."
          }
        },
        {
          "role": "ai",
          "text": "We can offer without pressure.",
          "translations": {
            "ko": "우리는 압박 없이 제공할 수 있어.",
            "zh": "我们可以提供帮助，但不施压。",
            "ja": "プレッシャーなしで提供できます。",
            "vi": "Chúng ta có thể đề nghị mà không áp lực.",
            "en": "We can offer without pressure."
          }
        },
        {
          "role": "user",
          "text": "Yes, let her decide.",
          "translations": {
            "ko": "그래, 그녀가 결정하게 두자.",
            "zh": "是的，让她决定。",
            "ja": "はい、彼女に決めさせましょう。",
            "vi": "Đúng, để bà ấy quyết định.",
            "en": "Yes, let her decide."
          }
        },
        {
          "role": "ai",
          "text": "Small gestures can mean a lot.",
          "translations": {
            "ko": "작은 친절한 행동이 많은 의미를 가질 수 있어.",
            "zh": "小手势可能意味着很多。",
            "ja": "小さなジェスチャーは大きな意味を持つことがあります。",
            "vi": "Những hành động nhỏ có thể có ý nghĩa rất lớn.",
            "en": "Small gestures can mean a lot."
          }
        },
        {
          "role": "user",
          "text": "Absolutely.",
          "translations": {
            "ko": "그럼.",
            "zh": "绝对。",
            "ja": "確かに。",
            "vi": "Chắc chắn.",
            "en": "Absolutely."
          }
        },
        {
          "role": "ai",
          "text": "Let’s show we care.",
          "translations": {
            "ko": "우리가 신경 쓴다는 것을 보여주자.",
            "zh": "让我们表现出我们在乎。",
            "ja": "私たちが気にかけていることを示しましょう。",
            "vi": "Hãy thể hiện sự quan tâm của chúng ta.",
            "en": "Let’s show we care."
          }
        },
        {
          "role": "user",
          "text": "Always.",
          "translations": {
            "ko": "언제나.",
            "zh": "总是这样。",
            "ja": "常に。",
            "vi": "Luôn luôn.",
            "en": "Always."
          }
        }
      ]
    }
  ]
};