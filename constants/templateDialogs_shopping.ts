import { LevelType, PracticeScene } from '../types';

export const templateDialogs: Record<LevelType, readonly PracticeScene[]> = {
  "beginner": [
    {
      "description": {
        "en": "Asking for help finding an item",
        "ko": "물건 찾는 것에 대해 도움 요청",
        "zh": "寻求帮助找物品",
        "ja": "アイテムを探すための助けを求める",
        "vi": "Yêu cầu giúp đỡ tìm một mặt hàng"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Hi there! Can I help you find something?",
          "translations": {
            "ko": "안녕하세요! 무엇을 찾으시는데 도와드릴까요?",
            "zh": "嗨！需要我帮你找什么吗？",
            "ja": "こんにちは！何かお探しですか？",
            "vi": "Xin chào! Tôi có thể giúp bạn tìm gì không?",
            "en": "Hi there! Can I help you find something?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I’m looking for a winter jacket.",
          "translations": {
            "ko": "네, 겨울 자켓을 찾고 있어요.",
            "zh": "是的，我在找一件冬季夹克。",
            "ja": "はい、冬用のジャケットを探しています。",
            "vi": "Vâng, tôi đang tìm một chiếc áo khoác mùa đông.",
            "en": "Yes, I’m looking for a winter jacket."
          }
        },
        {
          "role": "ai",
          "text": "We have some over in that section. Do you prefer long or short?",
          "translations": {
            "ko": "저쪽 섹션에 몇 가지 있어요. 긴 것을 선호하시나요, 짧은 것을 선호하시나요?",
            "zh": "我们那边有一些。你喜欢长款还是短款？",
            "ja": "そのセクションにいくつかあります。長いのと短いの、どちらがいいですか？",
            "vi": "Chúng tôi có một số ở khu vực đó. Bạn thích dài hay ngắn?",
            "en": "We have some over in that section. Do you prefer long or short?"
          }
        },
        {
          "role": "user",
          "text": "Short, please.",
          "translations": {
            "ko": "짧은 것을 원해요.",
            "zh": "短款的，请。",
            "ja": "短いのをお願いします。",
            "vi": "Ngắn, xin vui lòng.",
            "en": "Short, please."
          }
        },
        {
          "role": "ai",
          "text": "What color do you prefer?",
          "translations": {
            "ko": "어떤 색상을 선호하시나요?",
            "zh": "你喜欢什么颜色？",
            "ja": "どの色がいいですか？",
            "vi": "Bạn thích màu gì?",
            "en": "What color do you prefer?"
          }
        },
        {
          "role": "user",
          "text": "Something dark, like black or navy.",
          "translations": {
            "ko": "어두운 색상이 좋아요, 검정이나 남색 같은.",
            "zh": "深色的，像黑色或海军蓝。",
            "ja": "暗めの色、黒か紺がいいです。",
            "vi": "Một màu tối, như đen hoặc xanh hải quân.",
            "en": "Something dark, like black or navy."
          }
        },
        {
          "role": "ai",
          "text": "We have both! Here’s a black one in your size.",
          "translations": {
            "ko": "두 가지 다 있어요! 여기 사이즈에 맞는 검정색이 있어요.",
            "zh": "我们都有！这是你的尺码的黑色夹克。",
            "ja": "どちらもありますよ！こちらがあなたのサイズの黒いジャケットです。",
            "vi": "Chúng tôi có cả hai! Đây là một chiếc màu đen vừa với bạn.",
            "en": "We have both! Here’s a black one in your size."
          }
        },
        {
          "role": "user",
          "text": "Thanks, can I try it on?",
          "translations": {
            "ko": "감사합니다, 입어봐도 될까요?",
            "zh": "谢谢，我可以试穿吗？",
            "ja": "ありがとう、試着してもいいですか？",
            "vi": "Cảm ơn, tôi có thể thử nó không?",
            "en": "Thanks, can I try it on?"
          }
        },
        {
          "role": "ai",
          "text": "Of course, the fitting room is over there.",
          "translations": {
            "ko": "물론이죠, 탈의실은 저쪽에 있어요.",
            "zh": "当然，试衣间在那边。",
            "ja": "もちろん、試着室はあそこにあります。",
            "vi": "Tất nhiên, phòng thử đồ ở phía bên kia.",
            "en": "Of course, the fitting room is over there."
          }
        },
        {
          "role": "user",
          "text": "Got it.",
          "translations": {
            "ko": "알겠습니다.",
            "zh": "明白了。",
            "ja": "分かりました。",
            "vi": "Tôi hiểu rồi.",
            "en": "Got it."
          }
        },
        {
          "role": "ai",
          "text": "Let me know if you need a different size.",
          "translations": {
            "ko": "다른 사이즈가 필요하시면 알려주세요.",
            "zh": "如果你需要换个尺码，告诉我。",
            "ja": "サイズが合わなければ教えてください。",
            "vi": "Hãy cho tôi biết nếu bạn cần một kích cỡ khác.",
            "en": "Let me know if you need a different size."
          }
        },
        {
          "role": "user",
          "text": "Sure, I will.",
          "translations": {
            "ko": "네, 그렇게 하겠습니다.",
            "zh": "好的，我会的。",
            "ja": "はい、そうします。",
            "vi": "Được, tôi sẽ làm vậy.",
            "en": "Sure, I will."
          }
        },
        {
          "role": "ai",
          "text": "How does it fit?",
          "translations": {
            "ko": "사이즈가 어떠세요?",
            "zh": "合身吗？",
            "ja": "サイズはどうですか？",
            "vi": "Nó vừa không?",
            "en": "How does it fit?"
          }
        },
        {
          "role": "user",
          "text": "Pretty good! A bit snug around the arms.",
          "translations": {
            "ko": "꽤 괜찮아요! 팔 부분이 조금 꽉 끼네요.",
            "zh": "很好！只是手臂部分有点紧。",
            "ja": "かなりいいです！少し腕がきついですが。",
            "vi": "Rất tốt! Hơi chật ở phần tay áo.",
            "en": "Pretty good! A bit snug around the arms."
          }
        },
        {
          "role": "ai",
          "text": "I can bring you the next size up.",
          "translations": {
            "ko": "한 사이즈 큰 것을 가져다 드릴게요.",
            "zh": "我可以给你拿大一号的。",
            "ja": "一つ大きいサイズを持ってきますね。",
            "vi": "Tôi có thể mang cho bạn kích cỡ lớn hơn.",
            "en": "I can bring you the next size up."
          }
        },
        {
          "role": "user",
          "text": "Yes, that’d be great.",
          "translations": {
            "ko": "네, 좋아요.",
            "zh": "是的，那太好了。",
            "ja": "はい、お願いします。",
            "vi": "Vâng, thật tuyệt.",
            "en": "Yes, that’d be great."
          }
        },
        {
          "role": "ai",
          "text": "Here you go. Try this one.",
          "translations": {
            "ko": "여기 있습니다. 이걸 입어보세요.",
            "zh": "给你，试试这个。",
            "ja": "こちらです。これを試してみてください。",
            "vi": "Đây, hãy thử cái này.",
            "en": "Here you go. Try this one."
          }
        },
        {
          "role": "user",
          "text": "Perfect, this fits much better.",
          "translations": {
            "ko": "완벽해요, 이게 훨씬 잘 맞아요.",
            "zh": "完美，这个合身多了。",
            "ja": "パーフェクト、これはずっと良く合います。",
            "vi": "Hoàn hảo, cái này vừa hơn nhiều.",
            "en": "Perfect, this fits much better."
          }
        },
        {
          "role": "ai",
          "text": "Glad to hear that! Let me know if you need anything else.",
          "translations": {
            "ko": "그렇게 들어서 기쁘네요! 다른 것이 필요하시면 알려주세요.",
            "zh": "很高兴听到这个！如果你需要其他什么，告诉我。",
            "ja": "それは良かった！他に何か必要なものがあれば教えてください。",
            "vi": "Rất vui khi nghe điều đó! Hãy cho tôi biết nếu bạn cần thêm gì.",
            "en": "Glad to hear that! Let me know if you need anything else."
          }
        },
        {
          "role": "user",
          "text": "Thanks for your help!",
          "translations": {
            "ko": "도와주셔서 감사합니다!",
            "zh": "谢谢你的帮助！",
            "ja": "助けてくれてありがとう！",
            "vi": "Cảm ơn sự giúp đỡ của bạn!",
            "en": "Thanks for your help!"
          }
        }
      ]
    },
    {
      "description": {
        "en": "Asking about sizes",
        "ko": "사이즈에 대해 묻기",
        "zh": "询问尺码",
        "ja": "サイズについて尋ねる",
        "vi": "Hỏi về kích cỡ"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Can I help you with sizes?",
          "translations": {
            "ko": "사이즈에 대해 도와드릴까요?",
            "zh": "需要我帮你看尺码吗？",
            "ja": "サイズについて何かお手伝いできますか？",
            "vi": "Tôi có thể giúp bạn với kích cỡ không?",
            "en": "Can I help you with sizes?"
          }
        },
        {
          "role": "user",
          "text": "Yes, do these jeans come in medium?",
          "translations": {
            "ko": "네, 이 청바지는 중 사이즈로 나오나요?",
            "zh": "是的，这条牛仔裤有中号吗？",
            "ja": "はい、これらのジーンズはMサイズはありますか？",
            "vi": "Vâng, quần jean này có kích cỡ trung bình không?",
            "en": "Yes, do these jeans come in medium?"
          }
        },
        {
          "role": "ai",
          "text": "Let me check… Yes, here’s a medium.",
          "translations": {
            "ko": "확인해 볼게요... 네, 중 사이즈가 있네요.",
            "zh": "让我看看……是的，这是中号的。",
            "ja": "確認します…はい、こちらがMサイズです。",
            "vi": "Để tôi kiểm tra... Vâng, đây là kích cỡ trung bình.",
            "en": "Let me check… Yes, here’s a medium."
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
          "text": "Would you like to try them on?",
          "translations": {
            "ko": "입어보시겠어요?",
            "zh": "你想试穿吗？",
            "ja": "試着しますか？",
            "vi": "Bạn có muốn thử chúng không?",
            "en": "Would you like to try them on?"
          }
        },
        {
          "role": "user",
          "text": "Yes, where's the fitting room?",
          "translations": {
            "ko": "네, 탈의실은 어디에 있나요?",
            "zh": "是的，试衣间在哪里？",
            "ja": "はい、試着室はどこですか？",
            "vi": "Vâng, phòng thử đồ ở đâu?",
            "en": "Yes, where's the fitting room?"
          }
        },
        {
          "role": "ai",
          "text": "Right over there, next to the mirrors.",
          "translations": {
            "ko": "바로 저쪽에, 거울 옆에 있어요.",
            "zh": "就在那边，靠近镜子的地方。",
            "ja": "あそこです、鏡の隣にあります。",
            "vi": "Ngay phía bên kia, bên cạnh những chiếc gương.",
            "en": "Right over there, next to the mirrors."
          }
        },
        {
          "role": "user",
          "text": "Okay.",
          "translations": {
            "ko": "알겠습니다.",
            "zh": "好的。",
            "ja": "了解です。",
            "vi": "Được.",
            "en": "Okay."
          }
        },
        {
          "role": "ai",
          "text": "How do they feel?",
          "translations": {
            "ko": "어떻게 느껴지나요?",
            "zh": "感觉如何？",
            "ja": "どうですか？",
            "vi": "Chúng cảm thấy thế nào?",
            "en": "How do they feel?"
          }
        },
        {
          "role": "user",
          "text": "A bit loose around the waist.",
          "translations": {
            "ko": "허리 부분이 조금 헐렁해요.",
            "zh": "腰部有点松。",
            "ja": "ウエストが少し大きいです。",
            "vi": "Hơi rộng ở phần eo.",
            "en": "A bit loose around the waist."
          }
        },
        {
          "role": "ai",
          "text": "Would you like a small instead?",
          "translations": {
            "ko": "작은 사이즈로 바꾸시겠어요?",
            "zh": "你想换个小号的吗？",
            "ja": "Sサイズを試してみますか？",
            "vi": "Bạn có muốn thử kích cỡ nhỏ hơn không?",
            "en": "Would you like a small instead?"
          }
        },
        {
          "role": "user",
          "text": "Yes, please.",
          "translations": {
            "ko": "네, 부탁드립니다.",
            "zh": "是的，请。",
            "ja": "はい、お願いします。",
            "vi": "Vâng, xin vui lòng.",
            "en": "Yes, please."
          }
        },
        {
          "role": "ai",
          "text": "Here’s a small.",
          "translations": {
            "ko": "작은 사이즈입니다.",
            "zh": "这是小号的。",
            "ja": "こちらがSサイズです。",
            "vi": "Đây là kích cỡ nhỏ.",
            "en": "Here’s a small."
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
          "text": "Better?",
          "translations": {
            "ko": "더 나으세요?",
            "zh": "合适吗？",
            "ja": "どうですか？",
            "vi": "Tốt hơn chưa?",
            "en": "Better?"
          }
        },
        {
          "role": "user",
          "text": "Yes, this is a perfect fit.",
          "translations": {
            "ko": "네, 이게 딱 맞네요.",
            "zh": "是的，这个非常合身。",
            "ja": "はい、これは完璧にフィットします。",
            "vi": "Vâng, cái này vừa hoàn hảo.",
            "en": "Yes, this is a perfect fit."
          }
        },
        {
          "role": "ai",
          "text": "Awesome. Want me to hold them at the counter?",
          "translations": {
            "ko": "좋아요. 계산대에서 보관해 드릴까요?",
            "zh": "太好了。你要我帮你在柜台留着吗？",
            "ja": "素晴らしいですね。レジにお預かりしますか？",
            "vi": "Tuyệt vời. Bạn có muốn tôi giữ chúng ở quầy không?",
            "en": "Awesome. Want me to hold them at the counter?"
          }
        },
        {
          "role": "user",
          "text": "Yes, that’d be great.",
          "translations": {
            "ko": "네, 좋아요.",
            "zh": "是的，那太好了。",
            "ja": "はい、お願いします。",
            "vi": "Vâng, thật tuyệt.",
            "en": "Yes, that’d be great."
          }
        },
        {
          "role": "ai",
          "text": "No problem. Take your time browsing.",
          "translations": {
            "ko": "문제 없어요. 둘러보시는 데 시간을 가져요.",
            "zh": "没问题。你慢慢挑。",
            "ja": "問題ありません。ゆっくり見ていってください。",
            "vi": "Không vấn đề. Hãy thảnh thơi mà xem hàng.",
            "en": "No problem. Take your time browsing."
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
        }
      ]
    },
    {
      "description": {
        "en": "Asking about prices and discounts",
        "ko": "가격과 할인에 대해 묻기",
        "zh": "询问价格和折扣",
        "ja": "価格と割引について尋ねる",
        "vi": "Hỏi về giá cả và giảm giá"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Hi! Let me know if you have questions.",
          "translations": {
            "ko": "안녕하세요! 질문 있으시면 알려주세요.",
            "zh": "嗨！如果你有问题，告诉我。",
            "ja": "こんにちは！何か質問があれば教えてください。",
            "vi": "Xin chào! Hãy cho tôi biết nếu bạn có câu hỏi.",
            "en": "Hi! Let me know if you have questions."
          }
        },
        {
          "role": "user",
          "text": "Yes, how much is this shirt?",
          "translations": {
            "ko": "네, 이 셔츠 가격이 얼마인가요?",
            "zh": "是的，这件衬衫多少钱？",
            "ja": "はい、このシャツはいくらですか？",
            "vi": "Vâng, áo sơ mi này bao nhiêu tiền?",
            "en": "Yes, how much is this shirt?"
          }
        },
        {
          "role": "ai",
          "text": "It’s $25.",
          "translations": {
            "ko": "25달러입니다.",
            "zh": "是25美元。",
            "ja": "$25です。",
            "vi": "Nó là 25 đô.",
            "en": "It’s $25."
          }
        },
        {
          "role": "user",
          "text": "Are there any discounts?",
          "translations": {
            "ko": "할인은 있나요?",
            "zh": "有折扣吗？",
            "ja": "割引はありますか？",
            "vi": "Có giảm giá không?",
            "en": "Are there any discounts?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, 10% off today.",
          "translations": {
            "ko": "네, 오늘은 10% 할인입니다.",
            "zh": "是的，今天打九折。",
            "ja": "はい、今日は10%オフです。",
            "vi": "Vâng, giảm 10% hôm nay.",
            "en": "Yes, 10% off today."
          }
        },
        {
          "role": "user",
          "text": "Nice! Do you have other colors?",
          "translations": {
            "ko": "좋네요! 다른 색상도 있나요?",
            "zh": "太好了！你们还有其他颜色吗？",
            "ja": "いいですね！他の色はありますか？",
            "vi": "Tuyệt! Bạn có màu khác không?",
            "en": "Nice! Do you have other colors?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, it also comes in gray and red.",
          "translations": {
            "ko": "네, 회색과 빨간색도 있습니다.",
            "zh": "是的，还有灰色和红色。",
            "ja": "はい、グレーと赤もあります。",
            "vi": "Vâng, nó cũng có màu xám và đỏ.",
            "en": "Yes, it also comes in gray and red."
          }
        },
        {
          "role": "user",
          "text": "I’ll take the red one.",
          "translations": {
            "ko": "빨간색으로 하겠습니다.",
            "zh": "我要红色的。",
            "ja": "赤を選びます。",
            "vi": "Tôi sẽ lấy cái màu đỏ.",
            "en": "I’ll take the red one."
          }
        },
        {
          "role": "ai",
          "text": "Would you like to try it on?",
          "translations": {
            "ko": "입어보시겠어요?",
            "zh": "你想试穿吗？",
            "ja": "試着しますか？",
            "vi": "Bạn có muốn thử nó không?",
            "en": "Would you like to try it on?"
          }
        },
        {
          "role": "user",
          "text": "No, I'm good.",
          "translations": {
            "ko": "아니요, 괜찮습니다.",
            "zh": "不用了，我没问题。",
            "ja": "いえ、大丈夫です。",
            "vi": "Không, tôi ổn.",
            "en": "No, I'm good."
          }
        },
        {
          "role": "ai",
          "text": "Will you be paying by card or cash?",
          "translations": {
            "ko": "카드로 결제하시겠어요, 현금으로 하시겠어요?",
            "zh": "你打算用卡还是现金付款？",
            "ja": "カードでお支払いになりますか、それとも現金ですか？",
            "vi": "Bạn sẽ trả bằng thẻ hay tiền mặt?",
            "en": "Will you be paying by card or cash?"
          }
        },
        {
          "role": "user",
          "text": "Card.",
          "translations": {
            "ko": "카드로 할게요.",
            "zh": "用卡。",
            "ja": "カードです。",
            "vi": "Thẻ.",
            "en": "Card."
          }
        },
        {
          "role": "ai",
          "text": "Great. You’ll save $2.50 today.",
          "translations": {
            "ko": "좋아요. 오늘 2.50달러를 절약하실 수 있습니다.",
            "zh": "很好。你今天可以省2.5美元。",
            "ja": "了解です。今日は$2.50節約できますね。",
            "vi": "Tuyệt. Bạn sẽ tiết kiệm 2,5 đô hôm nay.",
            "en": "Great. You’ll save $2.50 today."
          }
        },
        {
          "role": "user",
          "text": "Perfect.",
          "translations": {
            "ko": "완벽해요.",
            "zh": "太好了。",
            "ja": "パーフェクト。",
            "vi": "Hoàn hảo.",
            "en": "Perfect."
          }
        },
        {
          "role": "ai",
          "text": "Would you like a bag?",
          "translations": {
            "ko": "봉투가 필요하신가요?",
            "zh": "你需要袋子吗？",
            "ja": "袋は必要ですか？",
            "vi": "Bạn có muốn túi không?",
            "en": "Would you like a bag?"
          }
        },
        {
          "role": "user",
          "text": "Yes, please.",
          "translations": {
            "ko": "네, 부탁드립니다.",
            "zh": "是的，请。",
            "ja": "はい、お願いします。",
            "vi": "Vâng, xin vui lòng.",
            "en": "Yes, please."
          }
        },
        {
          "role": "ai",
          "text": "Here’s your receipt.",
          "translations": {
            "ko": "영수증입니다.",
            "zh": "这是你的收据。",
            "ja": "レシートです。",
            "vi": "Đây là hóa đơn của bạn.",
            "en": "Here’s your receipt."
          }
        },
        {
          "role": "user",
          "text": "Thanks a lot!",
          "translations": {
            "ko": "정말 감사합니다!",
            "zh": "非常感谢！",
            "ja": "どうもありがとう！",
            "vi": "Cảm ơn rất nhiều!",
            "en": "Thanks a lot!"
          }
        }
      ]
    },
    {
      "description": {
        "en": "Trying something on",
        "ko": "옷 입어보기",
        "zh": "试穿",
        "ja": "試着する",
        "vi": "Thử một cái gì đó"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Would you like to try that on?",
          "translations": {
            "ko": "그걸 입어보시겠어요?",
            "zh": "你想试穿那件吗？",
            "ja": "試着しますか？",
            "vi": "Bạn có muốn thử cái đó không?",
            "en": "Would you like to try that on?"
          }
        },
        {
          "role": "user",
          "text": "Yes, please.",
          "translations": {
            "ko": "네, 부탁드립니다.",
            "zh": "是的，请。",
            "ja": "はい、お願いします。",
            "vi": "Vâng, xin vui lòng.",
            "en": "Yes, please."
          }
        },
        {
          "role": "ai",
          "text": "Fitting rooms are on the left.",
          "translations": {
            "ko": "탈의실은 왼쪽에 있습니다.",
            "zh": "试衣间在左边。",
            "ja": "試着室は左側にあります。",
            "vi": "Phòng thử đồ ở bên trái.",
            "en": "Fitting rooms are on the left."
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
          "text": "Let me know if it fits well.",
          "translations": {
            "ko": "잘 맞는지 알려주세요.",
            "zh": "如果合身，告诉我。",
            "ja": "サイズが合っているか教えてください。",
            "vi": "Hãy cho tôi biết nếu nó vừa.",
            "en": "Let me know if it fits well."
          }
        },
        {
          "role": "user",
          "text": "Sure.",
          "translations": {
            "ko": "알겠습니다.",
            "zh": "好的。",
            "ja": "はい、そうします。",
            "vi": "Được.",
            "en": "Sure."
          }
        },
        {
          "role": "ai",
          "text": "How was it?",
          "translations": {
            "ko": "어떠셨나요?",
            "zh": "感觉如何？",
            "ja": "どうでしたか？",
            "vi": "Nó thế nào?",
            "en": "How was it?"
          }
        },
        {
          "role": "user",
          "text": "Too tight in the shoulders.",
          "translations": {
            "ko": "어깨 부분이 좀 타이트해요.",
            "zh": "肩部有点紧。",
            "ja": "肩が少し窮屈です。",
            "vi": "Quá chật ở vai.",
            "en": "Too tight in the shoulders."
          }
        },
        {
          "role": "ai",
          "text": "Would you like a different size?",
          "translations": {
            "ko": "다른 사이즈로 바꾸시겠어요?",
            "zh": "你想换个尺码吗？",
            "ja": "別のサイズを試しますか？",
            "vi": "Bạn có muốn một kích cỡ khác không?",
            "en": "Would you like a different size?"
          }
        },
        {
          "role": "user",
          "text": "Yes, a large.",
          "translations": {
            "ko": "네, 큰 사이즈로 부탁드립니다.",
            "zh": "是的，大号的。",
            "ja": "はい、Lサイズを。",
            "vi": "Vâng, kích cỡ lớn.",
            "en": "Yes, a large."
          }
        },
        {
          "role": "ai",
          "text": "Here you go.",
          "translations": {
            "ko": "여기 있습니다.",
            "zh": "给你。",
            "ja": "こちらです。",
            "vi": "Đây, hãy thử cái này.",
            "en": "Here you go."
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
          "text": "Better?",
          "translations": {
            "ko": "더 나으세요?",
            "zh": "合适吗？",
            "ja": "どうですか？",
            "vi": "Tốt hơn chưa?",
            "en": "Better?"
          }
        },
        {
          "role": "user",
          "text": "Yes, this works.",
          "translations": {
            "ko": "네, 이게 괜찮네요.",
            "zh": "是的，这个可以。",
            "ja": "はい、これなら大丈夫です。",
            "vi": "Vâng, cái này ổn.",
            "en": "Yes, this works."
          }
        },
        {
          "role": "ai",
          "text": "Great! Shall I hold it?",
          "translations": {
            "ko": "좋아요! 계산대에서 보관해 드릴까요?",
            "zh": "太好了！我帮你留着吗？",
            "ja": "それは良かった！レジにお預けしましょうか？",
            "vi": "Tuyệt! Tôi có nên giữ nó không?",
            "en": "Great! Shall I hold it?"
          }
        },
        {
          "role": "user",
          "text": "Yes, please.",
          "translations": {
            "ko": "네, 부탁드립니다.",
            "zh": "是的，请。",
            "ja": "はい、お願いします。",
            "vi": "Vâng, xin vui lòng.",
            "en": "Yes, please."
          }
        },
        {
          "role": "ai",
          "text": "Want to keep browsing?",
          "translations": {
            "ko": "더 둘러보시겠어요?",
            "zh": "还要继续逛吗？",
            "ja": "まだ見て回りますか？",
            "vi": "Bạn muốn tiếp tục xem hàng không?",
            "en": "Want to keep browsing?"
          }
        },
        {
          "role": "user",
          "text": "Sure, a bit more.",
          "translations": {
            "ko": "네, 좀 더 둘러볼게요.",
            "zh": "是的，再逛一会儿。",
            "ja": "はい、もう少し見て回ります。",
            "vi": "Được, một chút nữa.",
            "en": "Sure, a bit more."
          }
        },
        {
          "role": "ai",
          "text": "Take your time!",
          "translations": {
            "ko": "천천히 보세요!",
            "zh": "慢慢挑！",
            "ja": "ゆっくり見ていってください！",
            "vi": "Hãy thảnh thơi!",
            "en": "Take your time!"
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
        "en": "Asking for a different color",
        "ko": "다른 색상으로 바꾸는 것에 대해 묻기",
        "zh": "询问其他颜色",
        "ja": "別の色を尋ねる",
        "vi": "Yêu cầu một màu khác"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Hi! Can I help with anything?",
          "translations": {
            "ko": "안녕하세요! 무엇이든 도와드릴게요.",
            "zh": "嗨！需要帮忙吗？",
            "ja": "こんにちは！何かお手伝いできますか？",
            "vi": "Xin chào! Tôi có thể giúp gì không?",
            "en": "Hi! Can I help with anything?"
          }
        },
        {
          "role": "user",
          "text": "Yes, do you have this shirt in blue?",
          "translations": {
            "ko": "네, 이 셔츠 파란색으로 나오나요?",
            "zh": "是的，你们有这件衬衫的蓝色吗？",
            "ja": "はい、このシャツは青色はありますか？",
            "vi": "Vâng, bạn có chiếc áo sơ mi này màu xanh không?",
            "en": "Yes, do you have this shirt in blue?"
          }
        },
        {
          "role": "ai",
          "text": "Let me check… Yes, we do.",
          "translations": {
            "ko": "확인해 볼게요... 네, 있습니다.",
            "zh": "让我看看……是的，我们有。",
            "ja": "確認します…はい、ありますよ。",
            "vi": "Để tôi kiểm tra... Vâng, chúng tôi có.",
            "en": "Let me check… Yes, we do."
          }
        },
        {
          "role": "user",
          "text": "Great!",
          "translations": {
            "ko": "좋아요!",
            "zh": "太好了！",
            "ja": "いいですね！",
            "vi": "Tuyệt!",
            "en": "Great!"
          }
        },
        {
          "role": "ai",
          "text": "Here’s a blue one in your size.",
          "translations": {
            "ko": "여기 사이즈에 맞는 파란색이 있어요.",
            "zh": "这是你尺码的蓝色衬衫。",
            "ja": "こちらがあなたのサイズの青色のシャツです。",
            "vi": "Đây là một chiếc màu xanh vừa với bạn.",
            "en": "Here’s a blue one in your size."
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
          "text": "Would you like to try it on?",
          "translations": {
            "ko": "입어보시겠어요?",
            "zh": "你想试穿吗？",
            "ja": "試着しますか？",
            "vi": "Bạn có muốn thử nó không?",
            "en": "Would you like to try it on?"
          }
        },
        {
          "role": "user",
          "text": "Yes.",
          "translations": {
            "ko": "네.",
            "zh": "是的。",
            "ja": "はい。",
            "vi": "Vâng.",
            "en": "Yes."
          }
        },
        {
          "role": "ai",
          "text": "Fitting room is there.",
          "translations": {
            "ko": "탈의실은 저쪽에 있습니다.",
            "zh": "试衣间在那边。",
            "ja": "試着室はあそこです。",
            "vi": "Phòng thử đồ ở đó.",
            "en": "Fitting room is there."
          }
        },
        {
          "role": "user",
          "text": "Okay.",
          "translations": {
            "ko": "알겠습니다.",
            "zh": "好的。",
            "ja": "了解です。",
            "vi": "Được.",
            "en": "Okay."
          }
        },
        {
          "role": "ai",
          "text": "How do you like the color?",
          "translations": {
            "ko": "색상이 어떠신가요?",
            "zh": "你喜欢这个颜色吗？",
            "ja": "色はどうですか？",
            "vi": "Bạn thích màu này không?",
            "en": "How do you like the color?"
          }
        },
        {
          "role": "user",
          "text": "I love it!",
          "translations": {
            "ko": "정말 좋아요!",
            "zh": "我很喜欢！",
            "ja": "大好きです！",
            "vi": "Tôi rất thích nó!",
            "en": "I love it!"
          }
        },
        {
          "role": "ai",
          "text": "It suits you well.",
          "translations": {
            "ko": "잘 어울리시네요.",
            "zh": "非常适合你。",
            "ja": "とてもお似合いですね。",
            "vi": "Nó rất phù hợp với bạn.",
            "en": "It suits you well."
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
          "text": "Would you like to buy it?",
          "translations": {
            "ko": "구매하시겠어요?",
            "zh": "你想买吗？",
            "ja": "購入しますか？",
            "vi": "Bạn có muốn mua nó không?",
            "en": "Would you like to buy it?"
          }
        },
        {
          "role": "user",
          "text": "Yes, please.",
          "translations": {
            "ko": "네, 부탁드립니다.",
            "zh": "是的，请。",
            "ja": "はい、お願いします。",
            "vi": "Vâng, xin vui lòng.",
            "en": "Yes, please."
          }
        },
        {
          "role": "ai",
          "text": "I’ll take it to the register.",
          "translations": {
            "ko": "계산대로 가져가겠습니다.",
            "zh": "我帮你拿到收银台。",
            "ja": "レジに持っていきますね。",
            "vi": "Tôi sẽ mang nó đến quầy.",
            "en": "I’ll take it to the register."
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
          "text": "You’re welcome!",
          "translations": {
            "ko": "천만에요!",
            "zh": "不客气！",
            "ja": "どういたしまして！",
            "vi": "Rất vui được giúp bạn!",
            "en": "You’re welcome!"
          }
        },
        {
          "role": "user",
          "text": "This made my day.",
          "translations": {
            "ko": "하루를 즐겁게 만들어 주셔서 감사합니다.",
            "zh": "这让我很开心。",
            "ja": "一日が素晴らしくなりました。",
            "vi": "Điều này làm tôi vui.",
            "en": "This made my day."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Talking about payment options",
        "ko": "결제 방법에 대해 이야기하기",
        "zh": "讨论付款方式",
        "ja": "支払い方法について話す",
        "vi": "Nói về các tùy chọn thanh toán"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Are you ready to check out?",
          "translations": {
            "ko": "계산하실 준비가 되셨나요?",
            "zh": "你准备结账了吗？",
            "ja": "レジにお進みになりますか？",
            "vi": "Bạn đã sẵn sàng thanh toán chưa?",
            "en": "Are you ready to check out?"
          }
        },
        {
          "role": "user",
          "text": "Yes.",
          "translations": {
            "ko": "네.",
            "zh": "是的。",
            "ja": "はい。",
            "vi": "Vâng.",
            "en": "Yes."
          }
        },
        {
          "role": "ai",
          "text": "Card or cash?",
          "translations": {
            "ko": "카드로 하시겠어요, 현금으로 하시겠어요?",
            "zh": "用卡还是现金？",
            "ja": "カードですか、現金ですか？",
            "vi": "Thẻ hay tiền mặt?",
            "en": "Card or cash?"
          }
        },
        {
          "role": "user",
          "text": "Card.",
          "translations": {
            "ko": "카드로 할게요.",
            "zh": "用卡。",
            "ja": "カードです。",
            "vi": "Thẻ.",
            "en": "Card."
          }
        },
        {
          "role": "ai",
          "text": "We accept all major cards.",
          "translations": {
            "ko": "주요 카드 모두 받습니다.",
            "zh": "我们接受所有主要的信用卡。",
            "ja": "主要なカードはすべて受け付けています。",
            "vi": "Chúng tôi chấp nhận tất cả các loại thẻ chính.",
            "en": "We accept all major cards."
          }
        },
        {
          "role": "user",
          "text": "Great.",
          "translations": {
            "ko": "좋아요.",
            "zh": "太好了。",
            "ja": "いいですね。",
            "vi": "Tuyệt.",
            "en": "Great."
          }
        },
        {
          "role": "ai",
          "text": "Would you like a bag?",
          "translations": {
            "ko": "봉투가 필요하신가요?",
            "zh": "你需要袋子吗？",
            "ja": "袋は必要ですか？",
            "vi": "Bạn có muốn túi không?",
            "en": "Would you like a bag?"
          }
        },
        {
          "role": "user",
          "text": "Yes, please.",
          "translations": {
            "ko": "네, 부탁드립니다.",
            "zh": "是的，请。",
            "ja": "はい、お願いします。",
            "vi": "Vâng, xin vui lòng.",
            "en": "Yes, please."
          }
        },
        {
          "role": "ai",
          "text": "Any rewards number?",
          "translations": {
            "ko": "리워드 번호가 있으신가요?",
            "zh": "有会员卡号码吗？",
            "ja": "リワード番号はありますか？",
            "vi": "Có số điểm thưởng không?",
            "en": "Any rewards number?"
          }
        },
        {
          "role": "user",
          "text": "No, I don’t have one.",
          "translations": {
            "ko": "아니요, 없습니다.",
            "zh": "没有，我没有。",
            "ja": "いいえ、持っていません。",
            "vi": "Không, tôi không có.",
            "en": "No, I don’t have one."
          }
        },
        {
          "role": "ai",
          "text": "Would you like to join?",
          "translations": {
            "ko": "가입하시겠어요?",
            "zh": "你想加入吗？",
            "ja": "登録しますか？",
            "vi": "Bạn có muốn tham gia không?",
            "en": "Would you like to join?"
          }
        },
        {
          "role": "user",
          "text": "Maybe next time.",
          "translations": {
            "ko": "다음에 할게요.",
            "zh": "下次吧。",
            "ja": "次回にします。",
            "vi": "Có thể lần sau.",
            "en": "Maybe next time."
          }
        },
        {
          "role": "ai",
          "text": "No worries. Total is $42.",
          "translations": {
            "ko": "걱정 마세요. 총 금액은 42달러입니다.",
            "zh": "没关系。总共是42美元。",
            "ja": "了解です。合計は$42です。",
            "vi": "Không sao. Tổng cộng là 42 đô.",
            "en": "No worries. Total is $42."
          }
        },
        {
          "role": "user",
          "text": "Here’s my card.",
          "translations": {
            "ko": "카드 드릴게요.",
            "zh": "这是我的卡。",
            "ja": "カードをどうぞ。",
            "vi": "Đây là thẻ của tôi.",
            "en": "Here’s my card."
          }
        },
        {
          "role": "ai",
          "text": "All set. Receipt in the bag?",
          "translations": {
            "ko": "다 됐습니다. 영수증은 봉투에 넣어 드릴까요?",
            "zh": "都搞定了。收据放在袋子里吗？",
            "ja": "すべて終わりました。レシートは袋に入れますか？",
            "vi": "Tất cả đã sẵn sàng. Bạn muốn hóa đơn trong túi không?",
            "en": "All set. Receipt in the bag?"
          }
        },
        {
          "role": "user",
          "text": "Yes, thank you.",
          "translations": {
            "ko": "네, 감사합니다.",
            "zh": "是的，谢谢你。",
            "ja": "はい、ありがとう。",
            "vi": "Vâng, cảm ơn.",
            "en": "Yes, thank you."
          }
        },
        {
          "role": "ai",
          "text": "Have a great day!",
          "translations": {
            "ko": "좋은 하루 보내세요!",
            "zh": "祝你今天过得愉快！",
            "ja": "いい一日を！",
            "vi": "Chúc một ngày tốt lành!",
            "en": "Have a great day!"
          }
        },
        {
          "role": "user",
          "text": "You too.",
          "translations": {
            "ko": "당신도요.",
            "zh": "你也是。",
            "ja": "あなたも。",
            "vi": "Bạn cũng vậy.",
            "en": "You too."
          }
        },
        {
          "role": "ai",
          "text": "Bye!",
          "translations": {
            "ko": "안녕히 가세요!",
            "zh": "再见！",
            "ja": "さようなら！",
            "vi": "Tạm biệt!",
            "en": "Bye!"
          }
        },
        {
          "role": "user",
          "text": "Bye!",
          "translations": {
            "ko": "안녕히 가세요!",
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
        "en": "Returning an item",
        "ko": "물건 반품하기",
        "zh": "退货",
        "ja": "商品を返品する",
        "vi": "Trả lại một mặt hàng"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Hi, how can I help?",
          "translations": {
            "ko": "안녕하세요, 무엇을 도와드릴까요?",
            "zh": "嗨，我能帮你什么？",
            "ja": "こんにちは、何かお手伝いできますか？",
            "vi": "Xin chào, tôi có thể giúp gì?",
            "en": "Hi, how can I help?"
          }
        },
        {
          "role": "user",
          "text": "I’d like to return this sweater.",
          "translations": {
            "ko": "이 스웨터를 반품하려고 합니다.",
            "zh": "我想退这件毛衣。",
            "ja": "このセーターを返品したいのですが。",
            "vi": "Tôi muốn trả lại chiếc áo len này.",
            "en": "I’d like to return this sweater."
          }
        },
        {
          "role": "ai",
          "text": "Do you have the receipt?",
          "translations": {
            "ko": "영수증이 있으신가요?",
            "zh": "你有收据吗？",
            "ja": "レシートはお持ちですか？",
            "vi": "Bạn có hóa đơn không?",
            "en": "Do you have the receipt?"
          }
        },
        {
          "role": "user",
          "text": "Yes, here it is.",
          "translations": {
            "ko": "네, 여기 있습니다.",
            "zh": "是的，这是收据。",
            "ja": "はい、こちらです。",
            "vi": "Vâng, đây là nó.",
            "en": "Yes, here it is."
          }
        },
        {
          "role": "ai",
          "text": "Thank you. Was there a problem?",
          "translations": {
            "ko": "감사합니다. 문제가 있었나요?",
            "zh": "谢谢。有什么问题吗？",
            "ja": "ありがとうございます。何か問題がありましたか？",
            "vi": "Cảm ơn. Có vấn đề gì không?",
            "en": "Thank you. Was there a problem?"
          }
        },
        {
          "role": "user",
          "text": "It’s too big.",
          "translations": {
            "ko": "너무 커요.",
            "zh": "太大了。",
            "ja": "サイズが大きすぎます。",
            "vi": "Nó quá lớn.",
            "en": "It’s too big."
          }
        },
        {
          "role": "ai",
          "text": "Would you like a smaller size?",
          "translations": {
            "ko": "작은 사이즈로 바꾸시겠어요?",
            "zh": "你想换个小一号的吗？",
            "ja": "サイズを小さくしますか？",
            "vi": "Bạn có muốn một kích cỡ nhỏ hơn không?",
            "en": "Would you like a smaller size?"
          }
        },
        {
          "role": "user",
          "text": "No, just a refund.",
          "translations": {
            "ko": "아니요, 환불만 해주세요.",
            "zh": "不，我只想退款。",
            "ja": "いいえ、返金をお願いします。",
            "vi": "Không, chỉ cần hoàn lại tiền.",
            "en": "No, just a refund."
          }
        },
        {
          "role": "ai",
          "text": "Alright. I’ll process that.",
          "translations": {
            "ko": "알겠습니다. 처리하겠습니다.",
            "zh": "好的。我来处理。",
            "ja": "了解です。それを処理します。",
            "vi": "Được. Tôi sẽ xử lý điều đó.",
            "en": "Alright. I’ll process that."
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
          "text": "Card or cash refund?",
          "translations": {
            "ko": "카드로 환불하시겠어요, 현금으로 하시겠어요?",
            "zh": "退款是用卡还是现金？",
            "ja": "返金はカードですか、現金ですか？",
            "vi": "Hoàn lại bằng thẻ hay tiền mặt?",
            "en": "Card or cash refund?"
          }
        },
        {
          "role": "user",
          "text": "Card.",
          "translations": {
            "ko": "카드로 할게요.",
            "zh": "用卡。",
            "ja": "カードです。",
            "vi": "Thẻ.",
            "en": "Card."
          }
        },
        {
          "role": "ai",
          "text": "Okay, refunding $35 to your card.",
          "translations": {
            "ko": "네, 35달러를 카드로 환불하겠습니다.",
            "zh": "好的，我退35美元到你的卡上。",
            "ja": "了解です、$35をカードに返金します。",
            "vi": "Được, hoàn lại 35 đô vào thẻ của bạn.",
            "en": "Okay, refunding $35 to your card."
          }
        },
        {
          "role": "user",
          "text": "Done?",
          "translations": {
            "ko": "다 됐나요?",
            "zh": "处理完了吗？",
            "ja": "終わりましたか？",
            "vi": "Xong chưa?",
            "en": "Done?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, it’s been processed.",
          "translations": {
            "ko": "네, 처리가 완료되었습니다.",
            "zh": "是的，已经处理完了。",
            "ja": "はい、処理が完了しました。",
            "vi": "Vâng, đã được xử lý.",
            "en": "Yes, it’s been processed."
          }
        },
        {
          "role": "user",
          "text": "Thanks a lot.",
          "translations": {
            "ko": "정말 감사합니다.",
            "zh": "非常感谢。",
            "ja": "どうもありがとう。",
            "vi": "Cảm ơn rất nhiều.",
            "en": "Thanks a lot."
          }
        },
        {
          "role": "ai",
          "text": "Here’s your return slip.",
          "translations": {
            "ko": "환불 영수증입니다.",
            "zh": "这是你的退货单。",
            "ja": "返品伝票です。",
            "vi": "Đây là biên lai hoàn trả của bạn.",
            "en": "Here’s your return slip."
          }
        },
        {
          "role": "user",
          "text": "Perfect.",
          "translations": {
            "ko": "완벽해요.",
            "zh": "太好了。",
            "ja": "パーフェクト。",
            "vi": "Hoàn hảo.",
            "en": "Perfect."
          }
        },
        {
          "role": "ai",
          "text": "Have a good day!",
          "translations": {
            "ko": "좋은 하루 보내세요!",
            "zh": "祝你今天过得愉快！",
            "ja": "良い一日を！",
            "vi": "Chúc một ngày tốt lành!",
            "en": "Have a good day!"
          }
        },
        {
          "role": "user",
          "text": "You too.",
          "translations": {
            "ko": "당신도요.",
            "zh": "你也是。",
            "ja": "あなたも。",
            "vi": "Bạn cũng vậy.",
            "en": "You too."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Asking about store hours",
        "ko": "영업 시간에 대해 묻기",
        "zh": "询问营业时间",
        "ja": "営業時間について尋ねる",
        "vi": "Hỏi về giờ mở cửa"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Hello! Do you need help?",
          "translations": {
            "ko": "안녕하세요! 도와드릴 일이 있나요?",
            "zh": "你好！需要帮忙吗？",
            "ja": "こんにちは！何かお手伝いできますか？",
            "vi": "Xin chào! Bạn cần giúp đỡ không?",
            "en": "Hello! Do you need help?"
          }
        },
        {
          "role": "user",
          "text": "Yes, what time do you close today?",
          "translations": {
            "ko": "네, 오늘 몇 시에 문 닫나요?",
            "zh": "是的，你们今天几点关门？",
            "ja": "はい、今日は何時に閉店しますか？",
            "vi": "Vâng, bạn đóng cửa mấy giờ hôm nay?",
            "en": "Yes, what time do you close today?"
          }
        },
        {
          "role": "ai",
          "text": "We close at 9 PM.",
          "translations": {
            "ko": "오후 9시에 문을 닫습니다.",
            "zh": "我们九点关门。",
            "ja": "今夜9時に閉店します。",
            "vi": "Chúng tôi đóng cửa lúc 9 giờ tối.",
            "en": "We close at 9 PM."
          }
        },
        {
          "role": "user",
          "text": "Great, thanks.",
          "translations": {
            "ko": "좋아요, 감사합니다.",
            "zh": "太好了，谢谢。",
            "ja": "いいですね、ありがとう。",
            "vi": "Tuyệt, cảm ơn.",
            "en": "Great, thanks."
          }
        },
        {
          "role": "ai",
          "text": "Let me know if I can help you find anything.",
          "translations": {
            "ko": "무엇을 찾는데 도와드릴 수 있으면 알려주세요.",
            "zh": "如果我能帮你找什么，告诉我。",
            "ja": "何か探しているものがあれば教えてください。",
            "vi": "Hãy cho tôi biết nếu tôi có thể giúp bạn tìm thứ gì đó.",
            "en": "Let me know if I can help you find anything."
          }
        },
        {
          "role": "user",
          "text": "Will do.",
          "translations": {
            "ko": "그렇게 하겠습니다.",
            "zh": "我会的。",
            "ja": "そうします。",
            "vi": "Tôi sẽ làm vậy.",
            "en": "Will do."
          }
        },
        {
          "role": "ai",
          "text": "Are you looking for something specific?",
          "translations": {
            "ko": "특정한 물건을 찾으시나요?",
            "zh": "你在找什么特别的东西吗？",
            "ja": "特定のものをお探しですか？",
            "vi": "Bạn đang tìm một thứ gì đó cụ thể không?",
            "en": "Are you looking for something specific?"
          }
        },
        {
          "role": "user",
          "text": "Just browsing.",
          "translations": {
            "ko": "그냥 둘러보고 있어요.",
            "zh": "只是随便看看。",
            "ja": "ただ見て回っています。",
            "vi": "Chỉ đang xem qua.",
            "en": "Just browsing."
          }
        },
        {
          "role": "ai",
          "text": "Okay. Everything in the front is 20% off.",
          "translations": {
            "ko": "알겠습니다. 앞쪽에 있는 모든 상품은 20% 할인입니다.",
            "zh": "好的。前面的东西都打八折。",
            "ja": "了解です。前の方の商品は全て20%オフです。",
            "vi": "Được. Tất cả mọi thứ ở phía trước giảm 20%.",
            "en": "Okay. Everything in the front is 20% off."
          }
        },
        {
          "role": "user",
          "text": "Nice!",
          "translations": {
            "ko": "좋네요!",
            "zh": "太好了！",
            "ja": "いいですね！",
            "vi": "Tuyệt!",
            "en": "Nice!"
          }
        },
        {
          "role": "ai",
          "text": "If you need fitting rooms, they’re to the left.",
          "translations": {
            "ko": "탈의실이 필요하시면 왼쪽에 있습니다.",
            "zh": "如果你需要试衣间，它们在左边。",
            "ja": "試着室が必要なら、左側にあります。",
            "vi": "Nếu bạn cần phòng thử đồ, chúng ở bên trái.",
            "en": "If you need fitting rooms, they’re to the left."
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
          "text": "Enjoy shopping!",
          "translations": {
            "ko": "쇼핑 즐기세요!",
            "zh": "享受购物！",
            "ja": "ショッピングを楽しんでください！",
            "vi": "Chúc mua sắm vui vẻ!",
            "en": "Enjoy shopping!"
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
          "text": "Let me know if you need sizes.",
          "translations": {
            "ko": "사이즈가 필요하시면 알려주세요.",
            "zh": "如果你需要尺码，告诉我。",
            "ja": "サイズが必要なら教えてください。",
            "vi": "Hãy cho tôi biết nếu bạn cần kích cỡ.",
            "en": "Let me know if you need sizes."
          }
        },
        {
          "role": "user",
          "text": "Sure.",
          "translations": {
            "ko": "알겠습니다.",
            "zh": "好的。",
            "ja": "はい、そうします。",
            "vi": "Được.",
            "en": "Sure."
          }
        },
        {
          "role": "ai",
          "text": "Do you also open on Sundays?",
          "translations": {
            "ko": "일요일에도 영업하나요?",
            "zh": "你们星期天也开门吗？",
            "ja": "日曜日も開いていますか？",
            "vi": "Bạn cũng mở cửa vào Chủ nhật không?",
            "en": "Do you also open on Sundays?"
          }
        },
        {
          "role": "user",
          "text": "Yes, 11 to 6.",
          "translations": {
            "ko": "네, 오전 11시부터 오후 6시까지입니다.",
            "zh": "是的，从早上11点到下午6点。",
            "ja": "はい、11時から18時までです。",
            "vi": "Vâng, từ 11 đến 6.",
            "en": "Yes, 11 to 6."
          }
        },
        {
          "role": "ai",
          "text": "Thanks. Good to know!",
          "translations": {
            "ko": "감사합니다. 알아두겠습니다!",
            "zh": "谢谢。好知道！",
            "ja": "ありがとう、知っておくと便利です！",
            "vi": "Cảm ơn. Thật tốt khi biết!",
            "en": "Thanks. Good to know!"
          }
        },
        {
          "role": "user",
          "text": "You're welcome!",
          "translations": {
            "ko": "천만에요!",
            "zh": "不客气！",
            "ja": "どういたしまして！",
            "vi": "Rất vui được giúp bạn!",
            "en": "You're welcome!"
          }
        }
      ]
    },
    {
      "description": {
        "en": "Looking for gifts",
        "ko": "선물 찾기",
        "zh": "寻找礼物",
        "ja": "ギフトを探す",
        "vi": "Tìm kiếm quà tặng"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Looking for something special?",
          "translations": {
            "ko": "특별한 물건을 찾으시나요?",
            "zh": "在找特别的东西吗？",
            "ja": "特別なものをお探しですか？",
            "vi": "Bạn đang tìm kiếm thứ gì đặc biệt?",
            "en": "Looking for something special?"
          }
        },
        {
          "role": "user",
          "text": "Yes, a gift for my friend.",
          "translations": {
            "ko": "네, 친구에게 줄 선물을 찾고 있어요.",
            "zh": "是的，我在找朋友的礼物。",
            "ja": "はい、友人へのギフトを探しています。",
            "vi": "Vâng, một món quà cho bạn tôi.",
            "en": "Yes, a gift for my friend."
          }
        },
        {
          "role": "ai",
          "text": "What kind of things do they like?",
          "translations": {
            "ko": "그들이 좋아하는 것은 무엇인가요?",
            "zh": "他们喜欢什么样的东西？",
            "ja": "彼らは何が好きですか？",
            "vi": "Họ thích những thứ gì?",
            "en": "What kind of things do they like?"
          }
        },
        {
          "role": "user",
          "text": "Accessories.",
          "translations": {
            "ko": "액세서리를 좋아해요.",
            "zh": "配饰。",
            "ja": "アクセサリーが好きです。",
            "vi": "Phụ kiện.",
            "en": "Accessories."
          }
        },
        {
          "role": "ai",
          "text": "We have earrings and scarves.",
          "translations": {
            "ko": "귀걸이와 스카프가 있습니다.",
            "zh": "我们有耳环和围巾。",
            "ja": "イヤリングとスカーフがあります。",
            "vi": "Chúng tôi có bông tai và khăn quàng.",
            "en": "We have earrings and scarves."
          }
        },
        {
          "role": "user",
          "text": "Show me the scarves.",
          "translations": {
            "ko": "스카프를 보여주세요.",
            "zh": "给我看看围巾。",
            "ja": "スカーフを見せてください。",
            "vi": "Cho tôi xem các loại khăn quàng.",
            "en": "Show me the scarves."
          }
        },
        {
          "role": "ai",
          "text": "Right this way.",
          "translations": {
            "ko": "이쪽으로 오세요.",
            "zh": "这边请。",
            "ja": "こちらです。",
            "vi": "Đúng hướng này.",
            "en": "Right this way."
          }
        },
        {
          "role": "user",
          "text": "These are pretty!",
          "translations": {
            "ko": "이건 정말 예쁘네요!",
            "zh": "这些真漂亮！",
            "ja": "これらはとてもきれいです！",
            "vi": "Những cái này rất đẹp!",
            "en": "These are pretty!"
          }
        },
        {
          "role": "ai",
          "text": "This one’s hand-made.",
          "translations": {
            "ko": "이건 수작업으로 만든 것입니다.",
            "zh": "这个是手工制作的。",
            "ja": "これは手作りです。",
            "vi": "Cái này được làm thủ công.",
            "en": "This one’s hand-made."
          }
        },
        {
          "role": "user",
          "text": "I like it.",
          "translations": {
            "ko": "좋아요.",
            "zh": "我喜欢它。",
            "ja": "いいですね。",
            "vi": "Tôi thích nó.",
            "en": "I like it."
          }
        },
        {
          "role": "ai",
          "text": "Would you like it wrapped?",
          "translations": {
            "ko": "포장해 드릴까요?",
            "zh": "你需要包装吗？",
            "ja": "ラッピングしますか？",
            "vi": "Bạn có muốn gói nó không?",
            "en": "Would you like it wrapped?"
          }
        },
        {
          "role": "user",
          "text": "Yes, please.",
          "translations": {
            "ko": "네, 부탁드립니다.",
            "zh": "是的，请。",
            "ja": "はい、お願いします。",
            "vi": "Vâng, xin vui lòng.",
            "en": "Yes, please."
          }
        },
        {
          "role": "ai",
          "text": "Any message card?",
          "translations": {
            "ko": "메시지 카드가 필요하신가요?",
            "zh": "需要留言卡吗？",
            "ja": "メッセージカードは必要ですか？",
            "vi": "Có thẻ tin nhắn không?",
            "en": "Any message card?"
          }
        },
        {
          "role": "user",
          "text": "Yes, 'Happy Birthday!'",
          "translations": {
            "ko": "네, '생일 축하해!'",
            "zh": "是的，'生日快乐！'",
            "ja": "はい、「お誕生日おめでとう！」と書いてください。",
            "vi": "Vâng, 'Chúc mừng sinh nhật!'",
            "en": "Yes, 'Happy Birthday!'"
          }
        },
        {
          "role": "ai",
          "text": "Lovely. I’ll wrap it now.",
          "translations": {
            "ko": "멋진 생각이네요. 지금 포장하겠습니다.",
            "zh": "很好。我现在就包装。",
            "ja": "素敵ですね。今すぐラッピングします。",
            "vi": "Tuyệt. Tôi sẽ gói nó ngay bây giờ.",
            "en": "Lovely. I’ll wrap it now."
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
          "text": "All done!",
          "translations": {
            "ko": "다 했습니다!",
            "zh": "包装好了！",
            "ja": "完了しました！",
            "vi": "Tất cả đã xong!",
            "en": "All done!"
          }
        },
        {
          "role": "user",
          "text": "Perfect, thank you.",
          "translations": {
            "ko": "완벽해요, 감사합니다.",
            "zh": "完美，谢谢你。",
            "ja": "パーフェクト、ありがとう。",
            "vi": "Hoàn hảo, cảm ơn bạn.",
            "en": "Perfect, thank you."
          }
        },
        {
          "role": "ai",
          "text": "Have a nice day!",
          "translations": {
            "ko": "좋은 하루 보내세요!",
            "zh": "祝你今天过得愉快！",
            "ja": "良い一日を！",
            "vi": "Chúc một ngày tốt lành!",
            "en": "Have a nice day!"
          }
        },
        {
          "role": "user",
          "text": "You too!",
          "translations": {
            "ko": "당신도요!",
            "zh": "你也是！",
            "ja": "あなたも！",
            "vi": "Bạn cũng vậy!",
            "en": "You too!"
          }
        }
      ]
    },
    {
      "description": {
        "en": "Asking for recommendations",
        "ko": "추천에 대해 묻기",
        "zh": "询问推荐",
        "ja": "おすすめを尋ねる",
        "vi": "Yêu cầu đề nghị"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Need a recommendation?",
          "translations": {
            "ko": "추천이 필요하신가요?",
            "zh": "需要推荐吗？",
            "ja": "おすすめは必要ですか？",
            "vi": "Cần một đề nghị?",
            "en": "Need a recommendation?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I’m not sure what to get.",
          "translations": {
            "ko": "네, 뭘 사야 할지 잘 모르겠어요.",
            "zh": "是的，我不确定买什么。",
            "ja": "はい、何を選んだらいいか分からないんです。",
            "vi": "Vâng, tôi không chắc nên mua gì.",
            "en": "Yes, I’m not sure what to get."
          }
        },
        {
          "role": "ai",
          "text": "What’s the occasion?",
          "translations": {
            "ko": "어떤 행사를 위한 것인가요?",
            "zh": "是什么场合？",
            "ja": "どんな場面で使いますか？",
            "vi": "Dịp gì?",
            "en": "What’s the occasion?"
          }
        },
        {
          "role": "user",
          "text": "Just something casual.",
          "translations": {
            "ko": "그냥 캐주얼한 걸로요.",
            "zh": "只是休闲的。",
            "ja": "カジュアルなものがいいです。",
            "vi": "Chỉ là một thứ gì đó phong cách thông thường.",
            "en": "Just something casual."
          }
        },
        {
          "role": "ai",
          "text": "How about this t-shirt?",
          "translations": {
            "ko": "이 티셔츠는 어떠세요?",
            "zh": "这件T恤怎么样？",
            "ja": "このTシャツはどうですか？",
            "vi": "Bạn thử xem chiếc áo phông này nhé?",
            "en": "How about this t-shirt?"
          }
        },
        {
          "role": "user",
          "text": "I like the style.",
          "translations": {
            "ko": "스타일이 마음에 들어요.",
            "zh": "我喜欢这个款式。",
            "ja": "スタイルが気に入りました。",
            "vi": "Tôi thích phong cách của nó.",
            "en": "I like the style."
          }
        },
        {
          "role": "ai",
          "text": "It also comes in blue.",
          "translations": {
            "ko": "파란색도 있습니다.",
            "zh": "还有蓝色的。",
            "ja": "青色もありますよ。",
            "vi": "Nó cũng có màu xanh.",
            "en": "It also comes in blue."
          }
        },
        {
          "role": "user",
          "text": "I’ll take blue.",
          "translations": {
            "ko": "파란색으로 할게요.",
            "zh": "我要蓝色的。",
            "ja": "青を選びます。",
            "vi": "Tôi sẽ lấy màu xanh.",
            "en": "I’ll take blue."
          }
        },
        {
          "role": "ai",
          "text": "Would you like to try it?",
          "translations": {
            "ko": "입어보시겠어요?",
            "zh": "你想试穿吗？",
            "ja": "試着しますか？",
            "vi": "Bạn có muốn thử nó không?",
            "en": "Would you like to try it?"
          }
        },
        {
          "role": "user",
          "text": "Yes.",
          "translations": {
            "ko": "네.",
            "zh": "是的。",
            "ja": "はい。",
            "vi": "Vâng.",
            "en": "Yes."
          }
        },
        {
          "role": "ai",
          "text": "Fitting rooms are over there.",
          "translations": {
            "ko": "탈의실은 저쪽에 있습니다.",
            "zh": "试衣间在那边。",
            "ja": "試着室はあそこにあります。",
            "vi": "Phòng thử đồ ở phía bên kia.",
            "en": "Fitting rooms are over there."
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
          "text": "How does it fit?",
          "translations": {
            "ko": "사이즈는 어떠세요?",
            "zh": "合身吗？",
            "ja": "サイズはどうですか？",
            "vi": "Nó vừa không?",
            "en": "How does it fit?"
          }
        },
        {
          "role": "user",
          "text": "Just right.",
          "translations": {
            "ko": "딱 맞아요.",
            "zh": "刚好。",
            "ja": "ちょうどいいです。",
            "vi": "Vừa đúng.",
            "en": "Just right."
          }
        },
        {
          "role": "ai",
          "text": "Great! Want to check out?",
          "translations": {
            "ko": "좋아요! 계산하러 가시겠어요?",
            "zh": "太好了！要结账吗？",
            "ja": "それは良かった！レジに行きますか？",
            "vi": "Tuyệt! Bạn muốn thanh toán không?",
            "en": "Great! Want to check out?"
          }
        },
        {
          "role": "user",
          "text": "Yes.",
          "translations": {
            "ko": "네.",
            "zh": "是的。",
            "ja": "はい。",
            "vi": "Vâng.",
            "en": "Yes."
          }
        },
        {
          "role": "ai",
          "text": "I’ll take this one.",
          "translations": {
            "ko": "이걸로 할게요.",
            "zh": "我要这件。",
            "ja": "これを選びます。",
            "vi": "Tôi sẽ lấy cái này.",
            "en": "I’ll take this one."
          }
        },
        {
          "role": "user",
          "text": "Perfect!",
          "translations": {
            "ko": "완벽해요!",
            "zh": "太好了！",
            "ja": "パーフェクト！",
            "vi": "Hoàn hảo!",
            "en": "Perfect!"
          }
        }
      ]
    }
  ],
  "intermediate": [
    {
      "description": {
        "ko": "상점에서 특정 상품을 찾는 데 도움을 청하다",
        "zh": "在商店里寻求帮助找寻特定商品",
        "ja": "店内で特定の商品を探すための助けを求める",
        "vi": "Yêu cầu giúp đỡ tìm một mặt hàng cụ thể trong cửa hàng"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Hi there, welcome! What can I help you find today?",
          "translations": {
            "ko": "안녕하세요, 환영합니다! 오늘 무엇을 찾으시나요?",
            "zh": "嗨，欢迎光临！今天有什么我可以帮您找的吗？",
            "ja": "こんにちは、いらっしゃいませ！今日は何をお探しですか？",
            "vi": "Xin chào, hoan nghênh! Tôi có thể giúp bạn tìm gì hôm nay?"
          }
        },
        {
          "role": "user",
          "text": "Hi, I’m looking for a black leather jacket.",
          "translations": {
            "ko": "안녕하세요, 검은색 가죽 자켓을 찾고 있습니다.",
            "zh": "嗨，我正在找一件黑色的皮夹克。",
            "ja": "こんにちは、黒のレザージャケットを探しています。",
            "vi": "Xin chào, tôi đang tìm một chiếc áo khoác da màu đen."
          }
        },
        {
          "role": "ai",
          "text": "Sure! Are you looking for a particular brand or just any type?",
          "translations": {
            "ko": "알겠습니다! 특정 브랜드를 찾으시는 건가요, 아니면 어떤 종류든 상관없나요?",
            "zh": "好的！您在找特定品牌的，还是任何类型都可以？",
            "ja": "了解です！特定のブランドをお探しですか、それとも何でもいいですか？",
            "vi": "Chắc chắn! Bạn đang tìm kiếm một thương hiệu cụ thể hay chỉ là bất kỳ loại nào?"
          }
        },
        {
          "role": "user",
          "text": "Any brand is fine, but I prefer something minimalist.",
          "translations": {
            "ko": "브랜드는 상관 없지만, 미니멀리스트 스타일을 선호합니다.",
            "zh": "任何品牌都可以，但我更喜欢简约风格的。",
            "ja": "ブランドは何でもいいですが、ミニマリストなものが好きです。",
            "vi": "Bất kỳ thương hiệu nào cũng được, nhưng tôi thích cái gì đó đơn giản."
          }
        },
        {
          "role": "ai",
          "text": "We have some new arrivals this week you might like.",
          "translations": {
            "ko": "이번 주에 새로 입고된 상품들이 있어요. 마음에 드실 것 같아요.",
            "zh": "我们这周有一些新品，您可能会喜欢。",
            "ja": "今週新しく入荷した商品があるかもしれませんよ。",
            "vi": "Chúng tôi có một số mặt hàng mới về tuần này mà bạn có thể thích."
          }
        },
        {
          "role": "user",
          "text": "Sounds good, I’d love to take a look.",
          "translations": {
            "ko": "좋아요, 한번 둘러보고 싶습니다.",
            "zh": "听起来不错，我很想看看。",
            "ja": "それはいいですね、ぜひ見てみたいです。",
            "vi": "Nghe có vẻ tốt, tôi muốn xem qua."
          }
        },
        {
          "role": "ai",
          "text": "The section you’re looking for is just down this aisle.",
          "translations": {
            "ko": "찾으시는 섹션은 이 통로를 따라 내려가면 있습니다.",
            "zh": "您要找的区域就在这条通道的尽头。",
            "ja": "お探しのセクションはこの通路の先にあります。",
            "vi": "Phần bạn đang tìm kiếm chỉ ở cuối hành lang này."
          }
        },
        {
          "role": "user",
          "text": "Thanks! I’ll head that way.",
          "translations": {
            "ko": "감사합니다! 그쪽으로 가보겠습니다.",
            "zh": "谢谢！我这就过去。",
            "ja": "ありがとう！その方向に行ってみます。",
            "vi": "Cảm ơn! Tôi sẽ đi theo hướng đó."
          }
        },
        {
          "role": "ai",
          "text": "Would you like me to check if we have your size in stock?",
          "translations": {
            "ko": "사이즈 재고를 확인해 드릴까요?",
            "zh": "您需要我帮您查看我们是否有您的尺码吗？",
            "ja": "お客様のサイズが在庫にあるか確認しましょうか？",
            "vi": "Bạn có muốn tôi kiểm tra xem chúng tôi có cỡ của bạn không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I’m looking for a medium.",
          "translations": {
            "ko": "네, 중간 사이즈를 찾고 있습니다.",
            "zh": "是的，我在找中号的。",
            "ja": "はい、Mサイズを探しています。",
            "vi": "Vâng, tôi đang tìm cỡ trung bình."
          }
        },
        {
          "role": "ai",
          "text": "I can bring a few options for you to compare, if you’d like.",
          "translations": {
            "ko": "비교해 보실 수 있도록 몇 가지 옵션을 가져다 드릴 수 있어요.",
            "zh": "如果您愿意，我可以带几个选项供您比较。",
            "ja": "比較するためにいくつかのオプションを持ってきてもいいですか？",
            "vi": "Tôi có thể mang một vài lựa chọn cho bạn so sánh, nếu bạn muốn."
          }
        },
        {
          "role": "user",
          "text": "That would be very helpful, thank you.",
          "translations": {
            "ko": "그게 많은 도움이 될 것 같아요, 감사합니다.",
            "zh": "那会非常有帮助，谢谢你。",
            "ja": "それはとても助かります、ありがとうございます。",
            "vi": "Điều đó sẽ rất hữu ích, cảm ơn bạn."
          }
        },
        {
          "role": "ai",
          "text": "Is this item for a specific occasion?",
          "translations": {
            "ko": "이 상품은 특정한 행사를 위한 것인가요?",
            "zh": "这个商品是为了特定的场合吗？",
            "ja": "この商品は特定の場合に使うためですか？",
            "vi": "Mặt hàng này có phải dành cho một dịp cụ thể không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, it’s for a dinner party next week.",
          "translations": {
            "ko": "네, 다음 주에 있을 저녁 파티용입니다.",
            "zh": "是的，这是为了下周的晚宴。",
            "ja": "はい、来週のディナーパーティー用です。",
            "vi": "Vâng, nó dành cho một bữa tiệc tối tuần sau."
          }
        },
        {
          "role": "ai",
          "text": "We also have a similar item on sale right now.",
          "translations": {
            "ko": "지금 비슷한 상품이 세일 중이에요.",
            "zh": "我们现在也有类似的商品在打折。",
            "ja": "今、似たような商品がセール中です。",
            "vi": "Chúng tôi cũng có một mặt hàng tương tự đang giảm giá ngay bây giờ."
          }
        },
        {
          "role": "user",
          "text": "Oh, great! I’d like to see that as well.",
          "translations": {
            "ko": "오, 좋네요! 그것도 한번 봐보고 싶습니다.",
            "zh": "哦，太好了！我也想看看那个。",
            "ja": "あ、いいですね！それも見てみたいです。",
            "vi": "Ồ, tốt quá! Tôi muốn xem cái đó nữa."
          }
        },
        {
          "role": "ai",
          "text": "Would you like to try it on?",
          "translations": {
            "ko": "입어 보시겠어요?",
            "zh": "您想试穿一下吗？",
            "ja": "試着しますか？",
            "vi": "Bạn có muốn thử nó không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I’d like to try this one.",
          "translations": {
            "ko": "네, 이걸 한번 입어보고 싶습니다.",
            "zh": "是的，我想试试这件。",
            "ja": "はい、これを試着したいです。",
            "vi": "Vâng, tôi muốn thử cái này."
          }
        },
        {
          "role": "ai",
          "text": "Let me know if there’s anything else you need!",
          "translations": {
            "ko": "다른 필요한 것이 있으면 알려주세요!",
            "zh": "如果您还需要其他什么，请告诉我！",
            "ja": "他に何か必要なことがあれば教えてください！",
            "vi": "Hãy cho tôi biết nếu có thứ gì khác bạn cần!"
          }
        },
        {
          "role": "user",
          "text": "I think I’m good for now. Thanks again!",
          "translations": {
            "ko": "지금은 다른 것은 필요 없는 것 같아요. 다시 한번 감사합니다!",
            "zh": "我现在应该没问题了。再次感谢！",
            "ja": "今のところ大丈夫です。再度ありがとうございます！",
            "vi": "Tôi nghĩ tôi đã ổn cho đến giờ. Cảm ơn bạn một lần nữa!"
          }
        }
      ]
    },
    {
      "description": {
        "ko": "상품을 반품하고 환불을 요청하다",
        "zh": "退回商品并要求退款",
        "ja": "商品を返品して返金を求める",
        "vi": "Trả lại một mặt hàng và yêu cầu hoàn tiền"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Welcome back! What can I help you with today?",
          "translations": {
            "ko": "다시 오신 것을 환영합니다! 오늘 무엇을 도와드릴까요?",
            "zh": "欢迎回来！今天有什么我可以帮助您的吗？",
            "ja": "おかえりなさい！今日は何のご用件でしょうか？",
            "vi": "Chào mừng trở lại! Tôi có thể giúp gì cho bạn hôm nay?"
          }
        },
        {
          "role": "user",
          "text": "Hi, I’d like to return this jacket.",
          "translations": {
            "ko": "안녕하세요, 이 자켓을 반품하려고 합니다.",
            "zh": "嗨，我想退掉这件夹克。",
            "ja": "こんにちは、このジャケットを返品したいです。",
            "vi": "Xin chào, tôi muốn trả lại chiếc áo khoác này."
          }
        },
        {
          "role": "ai",
          "text": "I’m sorry to hear that. Can I ask what the issue was?",
          "translations": {
            "ko": "그런 일이 있었다니 안타깝네요. 어떤 문제가 있었는지 여쭤봐도 될까요?",
            "zh": "很抱歉听到这个。我能问问是什么问题吗？",
            "ja": "それは残念です。何が問題だったのでしょうか？",
            "vi": "Tôi rất tiếc khi nghe điều đó. Tôi có thể hỏi vấn đề là gì không?"
          }
        },
        {
          "role": "user",
          "text": "It didn’t fit quite right, and the sleeves were too long.",
          "translations": {
            "ko": "사이즈가 맞지 않았고, 소매가 너무 길었습니다.",
            "zh": "它的尺寸不太合适，袖子太长了。",
            "ja": "ちょっとサイズが合わなくて、袖が長すぎました。",
            "vi": "Nó không vừa đúng, và tay áo quá dài."
          }
        },
        {
          "role": "ai",
          "text": "Do you have the receipt with you?",
          "translations": {
            "ko": "영수증을 가지고 계신가요?",
            "zh": "您带了收据吗？",
            "ja": "レシートはお持ちですか？",
            "vi": "Bạn có hóa đơn với bạn không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I brought the receipt with me.",
          "translations": {
            "ko": "네, 영수증을 가지고 왔습니다.",
            "zh": "是的，我带了收据。",
            "ja": "はい、レシートを持ってきました。",
            "vi": "Vâng, tôi đã mang hóa đơn với tôi."
          }
        },
        {
          "role": "ai",
          "text": "Looks like this was purchased last week-still within the return period.",
          "translations": {
            "ko": "지난 주에 구매하신 것 같네요-아직 반품 기간 내입니다.",
            "zh": "看起来这是上周购买的，仍在退货期内。",
            "ja": "これは先週購入されたものですね、まだ返品期間内です。",
            "vi": "Có vẻ như mặt hàng này đã được mua tuần trước - vẫn trong thời gian trả lại."
          }
        },
        {
          "role": "user",
          "text": "Great, I wasn’t sure if I was still eligible.",
          "translations": {
            "ko": "좋아요, 아직 반품이 가능한지 확실하지 않았습니다.",
            "zh": "太好了，我还不确定我是否还有资格退货。",
            "ja": "それは良かった、まだ返品可能かどうかわからなかったんです。",
            "vi": "Tốt, tôi không chắc chắn nếu tôi vẫn còn đủ điều kiện."
          }
        },
        {
          "role": "ai",
          "text": "Would you prefer a refund or store credit?",
          "translations": {
            "ko": "환불을 원하시나요, 아니면 매장 크레딧을 원하시나요?",
            "zh": "您更愿意选择退款还是店铺信用？",
            "ja": "返金と店頭クレジット、どちらがよろしいですか？",
            "vi": "Anh/chị có muốn hoàn tiền hay nhận thẻ tín dụng của cửa hàng?"
          }
        },
        {
          "role": "user",
          "text": "A refund would be great, thanks.",
          "translations": {
            "ko": "환불이 좋겠습니다, 감사합니다.",
            "zh": "退款会更好，谢谢。",
            "ja": "返金をお願いします、ありがとうございます。",
            "vi": "Tôi muốn hoàn tiền, cảm ơn."
          }
        },
        {
          "role": "ai",
          "text": "No problem. We’ll process the refund to your card.",
          "translations": {
            "ko": "문제 없습니다. 카드로 환불 처리를 해드리겠습니다.",
            "zh": "没问题。我们将把退款退回到您的卡上。",
            "ja": "問題ありません。カードへの返金を手続きします。",
            "vi": "Không vấn đề. Chúng tôi sẽ xử lý việc hoàn tiền vào thẻ của anh/chị."
          }
        },
        {
          "role": "user",
          "text": "Okay, that works for me.",
          "translations": {
            "ko": "좋습니다, 그렇게 해주세요.",
            "zh": "好的，这对我来说可以。",
            "ja": "はい、それで大丈夫です。",
            "vi": "Được, tôi đồng ý với điều đó."
          }
        },
        {
          "role": "ai",
          "text": "It should appear in your account within 3 to 5 business days.",
          "translations": {
            "ko": "3~5 영업일 내에 계좌에 입금될 것입니다.",
            "zh": "在3到5个工作日内，应该会显示在您的账户中。",
            "ja": "3から5営業日以内にアカウントに反映されるはずです。",
            "vi": "Số tiền sẽ xuất hiện trong tài khoản của anh/chị trong vòng 3 đến 5 ngày làm việc."
          }
        },
        {
          "role": "user",
          "text": "Thanks for letting me know.",
          "translations": {
            "ko": "알려주셔서 감사합니다.",
            "zh": "感谢您告诉我。",
            "ja": "教えていただきありがとうございます。",
            "vi": "Cảm ơn anh/chị đã thông báo cho tôi."
          }
        },
        {
          "role": "ai",
          "text": "Would you like a printed or digital copy of the return receipt?",
          "translations": {
            "ko": "반품 영수증을 인쇄본으로 받으시겠습니까, 아니면 디지털 복사본으로 받으시겠습니까?",
            "zh": "您想要打印版还是电子版的退货收据？",
            "ja": "返品レシートは印刷版とデジタル版、どちらがよろしいですか？",
            "vi": "Anh/chị có muốn nhận hóa đơn trả hàng dưới dạng in hay số không?"
          }
        },
        {
          "role": "user",
          "text": "Digital is fine-please email it to me.",
          "translations": {
            "ko": "디지털이 좋습니다-이메일로 보내주세요.",
            "zh": "电子版就好-请把它发到我的邮箱。",
            "ja": "デジタルで大丈夫です、メールで送ってください。",
            "vi": "Dạng số là được - hãy gửi email cho tôi."
          }
        },
        {
          "role": "ai",
          "text": "Let us know if you’d like help finding something else today.",
          "translations": {
            "ko": "오늘 다른 물건을 찾는 데 도움이 필요하시면 알려주세요.",
            "zh": "如果您今天需要找其他东西，可以告诉我们。",
            "ja": "今日、他のものを探すお手伝いが必要ならお知らせください。",
            "vi": "Hãy cho chúng tôi biết nếu anh/chị cần tìm một món hàng khác hôm nay."
          }
        },
        {
          "role": "user",
          "text": "I’ll browse a bit while I’m here.",
          "translations": {
            "ko": "여기서 잠시 둘러볼게요.",
            "zh": "我在这里的时候会逛逛。",
            "ja": "ここにいる間に少し見て回ります。",
            "vi": "Tôi sẽ xem qua một chút trong khi tôi ở đây."
          }
        },
        {
          "role": "ai",
          "text": "Thanks for coming in. We hope to see you again!",
          "translations": {
            "ko": "방문해 주셔서 감사합니다. 다시 뵙길 바랍니다!",
            "zh": "感谢您的光临。我们希望再次见到您！",
            "ja": "ご来店いただきありがとうございます。またのご来店をお待ちしております！",
            "vi": "Cảm ơn anh/chị đã đến. Chúng tôi hy vọng sẽ gặp lại anh/chị!"
          }
        },
        {
          "role": "user",
          "text": "Thanks. Have a good day!",
          "translations": {
            "ko": "감사합니다. 좋은 하루 보내세요!",
            "zh": "谢谢。祝您有个好日子！",
            "ja": "ありがとうございます。良い一日を！",
            "vi": "Cảm ơn. Chúc anh/chị một ngày tốt lành!"
          }
        }
      ]
    },
    {
      "description": {
        "ko": "탈의실에서 옷을 입어보기",
        "zh": "在试衣间试穿衣服",
        "ja": "試着室で服を試着する",
        "vi": "Thử quần áo trong phòng thay đồ"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Let me unlock the fitting room for you.",
          "translations": {
            "ko": "탈의실을 열어드릴게요.",
            "zh": "让我为您打开试衣间。",
            "ja": "試着室の鍵を開けてあげましょう。",
            "vi": "Để tôi mở cửa phòng thay đồ cho anh/chị."
          }
        },
        {
          "role": "user",
          "text": "Thanks. I’d like to try these three items.",
          "translations": {
            "ko": "감사합니다. 이 세 가지 아이템을 입어보고 싶습니다.",
            "zh": "谢谢。我想试试这三件物品。",
            "ja": "ありがとうございます。これらの3点を試着したいです。",
            "vi": "Cảm ơn. Tôi muốn thử ba món này."
          }
        },
        {
          "role": "ai",
          "text": "Would you like a different size to try?",
          "translations": {
            "ko": "다른 사이즈로 입어보시겠습니까?",
            "zh": "您需要试试其他尺寸吗？",
            "ja": "違うサイズを試してみますか？",
            "vi": "Anh/chị có muốn thử cỡ khác không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, could you bring me a large?",
          "translations": {
            "ko": "네, 큰 사이즈를 가져다 주시겠어요?",
            "zh": "是的，你能给我拿一件大号的吗？",
            "ja": "はい、大きいサイズを持ってきていただけますか？",
            "vi": "Có, bạn có thể mang cho tôi cỡ lớn không?"
          }
        },
        {
          "role": "ai",
          "text": "How’s the fit on that one?",
          "translations": {
            "ko": "그 옷 사이즈는 어떠세요?",
            "zh": "那件衣服的尺寸如何？",
            "ja": "そのサイズはどうですか？",
            "vi": "Cỡ đó vừa không anh/chị?"
          }
        },
        {
          "role": "user",
          "text": "It’s a bit snug around the shoulders.",
          "translations": {
            "ko": "어깨 부분이 좀 꽉 느껴집니다.",
            "zh": "在肩膀部分有点紧。",
            "ja": "肩周りが少しキツいです。",
            "vi": "Nó hơi chật ở phần vai."
          }
        },
        {
          "role": "ai",
          "text": "We have that in another color if you’re interested.",
          "translations": {
            "ko": "관심 있으시다면 다른 색상도 있습니다.",
            "zh": "如果您有兴趣，我们有其他颜色的。",
            "ja": "別の色もありますので、興味があればどうぞ。",
            "vi": "Chúng tôi có màu khác nếu anh/chị quan tâm."
          }
        },
        {
          "role": "user",
          "text": "Sure, I’d like to see it in navy.",
          "translations": {
            "ko": "그럼요, 남색으로 보여주시겠어요?",
            "zh": "好的，我想看看深蓝色的。",
            "ja": "はい、ネイビーで見てみたいです。",
            "vi": "Được, tôi muốn xem nó ở màu xanh hải quân."
          }
        },
        {
          "role": "ai",
          "text": "Do you need help zipping it up?",
          "translations": {
            "ko": "지퍼를 올리는 데 도움이 필요하신가요?",
            "zh": "您需要帮忙拉链吗？",
            "ja": "ジッパーを上げるのを手伝いますか？",
            "vi": "Anh/chị cần giúp kéo khóa không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, that would be helpful, thanks.",
          "translations": {
            "ko": "네, 도와주시면 좋겠습니다, 감사합니다.",
            "zh": "是的，这会很有帮助，谢谢。",
            "ja": "はい、助かります、ありがとうございます。",
            "vi": "Có, sẽ rất hữu ích, cảm ơn."
          }
        },
        {
          "role": "ai",
          "text": "I can bring you a few similar styles if you’d like.",
          "translations": {
            "ko": "비슷한 스타일의 옷을 몇 가지 더 가져다 드릴 수 있습니다.",
            "zh": "如果您愿意，我可以给您带来一些类似的款式。",
            "ja": "似たスタイルのものをいくつか持ってきますか？",
            "vi": "Tôi có thể mang cho anh/chị một số kiểu tương tự nếu anh/chị muốn."
          }
        },
        {
          "role": "user",
          "text": "Yes, please bring anything you recommend.",
          "translations": {
            "ko": "네, 추천하시는 것이 있다면 가져다 주세요.",
            "zh": "是的，请带来你推荐的任何款式。",
            "ja": "はい、おすすめのものを持ってきてください。",
            "vi": "Có, hãy mang những gì bạn khuyên dùng."
          }
        },
        {
          "role": "ai",
          "text": "There’s a mirror just behind you.",
          "translations": {
            "ko": "바로 뒤에 거울이 있습니다.",
            "zh": "在您身后就有一面镜子。",
            "ja": "鏡はあなたの後ろにあります。",
            "vi": "Có một cái gương ngay phía sau anh/chị."
          }
        },
        {
          "role": "user",
          "text": "Perfect, thanks!",
          "translations": {
            "ko": "완벽합니다, 감사합니다!",
            "zh": "太好了，谢谢！",
            "ja": "完璧です、ありがとうございます！",
            "vi": "Hoàn hảo, cảm ơn!"
          }
        },
        {
          "role": "ai",
          "text": "Take your time. Let me know if you need anything else.",
          "translations": {
            "ko": "천천히 보세요. 다른 것이 필요하시면 알려주세요.",
            "zh": "慢慢来。如果您需要其他东西，就告诉我。",
            "ja": "お時間をかけてください。他に何か必要なものがあればお知らせください。",
            "vi": "Cứ từ từ. Hãy cho tôi biết nếu anh/chị cần thêm gì."
          }
        },
        {
          "role": "user",
          "text": "Appreciate it. I’m almost done.",
          "translations": {
            "ko": "감사합니다. 거의 다 봤습니다.",
            "zh": "感谢。我快要完成了。",
            "ja": "ありがとうございます。もうすぐ終わります。",
            "vi": "Cảm ơn. Tôi gần xong rồi."
          }
        },
        {
          "role": "ai",
          "text": "Are you finding everything okay in there?",
          "translations": {
            "ko": "안에서 잘 찾고 계신가요?",
            "zh": "您在那里找到需要的东西了吗？",
            "ja": "中で何か探しているものが見つかりましたか？",
            "vi": "Anh/chị tìm được mọi thứ ổn trong đó chứ?"
          }
        },
        {
          "role": "user",
          "text": "Yes, all good for now.",
          "translations": {
            "ko": "네, 지금은 모두 괜찮습니다.",
            "zh": "是的，目前一切都好。",
            "ja": "はい、今のところ全て問題ありません。",
            "vi": "Có, mọi thứ đều tốt cho đến bây giờ."
          }
        },
        {
          "role": "ai",
          "text": "I’ll wait right outside if you need assistance.",
          "translations": {
            "ko": "필요하시면 바로 밖에서 기다리겠습니다.",
            "zh": "如果你需要帮助，我会在外面等你。",
            "ja": "必要であれば、すぐ外で待っています。",
            "vi": "Tôi sẽ đợi ngay bên ngoài nếu bạn cần hỗ trợ."
          }
        },
        {
          "role": "user",
          "text": "Thanks, I’ll let you know.",
          "translations": {
            "ko": "감사합니다, 필요하면 알려드리겠습니다.",
            "zh": "谢谢，我会告诉你的。",
            "ja": "ありがとう、必要な時にはお知らせします。",
            "vi": "Cảm ơn, tôi sẽ thông báo cho bạn."
          }
        }
      ]
    },
    {
      "description": {
        "ko": "누군가를 위한 선물을 사는 중",
        "zh": "为某人购买礼物",
        "ja": "誰かにプレゼントを探している",
        "vi": "Đang mua sắm quà cho ai đó"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Are you shopping for someone special today?",
          "translations": {
            "ko": "오늘 특별한 사람을 위해 쇼핑하시나요?",
            "zh": "你今天是为了特别的人购物吗？",
            "ja": "今日は特別な人のために買い物をしていますか？",
            "vi": "Bạn có đang mua sắm cho ai đặc biệt hôm nay không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, it’s a birthday gift for my sister.",
          "translations": {
            "ko": "네, 제 여동생을 위한 생일 선물입니다.",
            "zh": "是的，这是我为我妹妹的生日礼物。",
            "ja": "はい、妹の誕生日プレゼントです。",
            "vi": "Có, đây là món quà sinh nhật cho chị tôi."
          }
        },
        {
          "role": "ai",
          "text": "What’s the occasion-birthday, anniversary, or something else?",
          "translations": {
            "ko": "어떤 행사인가요-생일, 기념일, 아니면 다른 것인가요?",
            "zh": "这是什么场合-生日，周年纪念，还是其他？",
            "ja": "何のためのプレゼントですか？誕生日、記念日、それとも他の何か？",
            "vi": "Dịp gì vậy - sinh nhật, kỷ niệm, hay gì đó khác?"
          }
        },
        {
          "role": "user",
          "text": "It’s her 30th birthday.",
          "translations": {
            "ko": "그녀의 30번째 생일입니다.",
            "zh": "这是她的30岁生日。",
            "ja": "彼女の30歳の誕生日です。",
            "vi": "Đây là sinh nhật thứ 30 của cô ấy."
          }
        },
        {
          "role": "ai",
          "text": "Do they have a particular style or interest?",
          "translations": {
            "ko": "그들이 특정한 스타일이나 취미가 있나요?",
            "zh": "他们有特别的风格或兴趣吗？",
            "ja": "彼らは特定のスタイルや趣味を持っていますか？",
            "vi": "Họ có phong cách hoặc sở thích cụ thể nào không?"
          }
        },
        {
          "role": "user",
          "text": "She loves minimalistic fashion and jewelry.",
          "translations": {
            "ko": "그녀는 미니멀리즘 패션과 보석을 좋아합니다.",
            "zh": "她喜欢简约的时尚和珠宝。",
            "ja": "彼女はミニマリストのファッションとジュエリーが大好きです。",
            "vi": "Cô ấy thích thời trang và trang sức tối giản."
          }
        },
        {
          "role": "ai",
          "text": "We have a gift section toward the back of the store.",
          "translations": {
            "ko": "저희 매장 뒷쪽에 선물 섹션이 있습니다.",
            "zh": "我们的商店后面有一个礼品区。",
            "ja": "店の奥にギフトセクションがあります。",
            "vi": "Chúng tôi có một khu vực quà tặng ở phía sau cửa hàng."
          }
        },
        {
          "role": "user",
          "text": "Thanks, I’ll check out that section.",
          "translations": {
            "ko": "감사합니다, 그 섹션을 확인해보겠습니다.",
            "zh": "谢谢，我会去那个区域看看。",
            "ja": "ありがとう、そのセクションを見てみます。",
            "vi": "Cảm ơn, tôi sẽ xem qua khu vực đó."
          }
        },
        {
          "role": "ai",
          "text": "Would you like it gift-wrapped?",
          "translations": {
            "ko": "선물 포장해드릴까요?",
            "zh": "你想要包装成礼品吗？",
            "ja": "ギフトラッピングはいかがですか？",
            "vi": "Bạn có muốn gói quà không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, please. That’d be great.",
          "translations": {
            "ko": "네, 부탁드립니다. 그게 좋겠습니다.",
            "zh": "是的，请。那太好了。",
            "ja": "はい、お願いします。それは素晴らしいです。",
            "vi": "Có, xin vui lòng. Điều đó thật tuyệt."
          }
        },
        {
          "role": "ai",
          "text": "We also offer greeting cards if you’d like to include one.",
          "translations": {
            "ko": "인사말 카드도 함께 넣고 싶으시면 제공해드립니다.",
            "zh": "如果你想加一张，我们也提供贺卡。",
            "ja": "グリーティングカードも提供していますので、一緒に入れてもよろしいですか？",
            "vi": "Chúng tôi cũng cung cấp thẻ chúc mừng nếu bạn muốn bao gồm một cái."
          }
        },
        {
          "role": "user",
          "text": "A card sounds good-do you have birthday ones?",
          "translations": {
            "ko": "카드 좋아요-생일 카드 있나요?",
            "zh": "一张卡听起来不错-你们有生日卡吗？",
            "ja": "カードはいいですね。誕生日用のものはありますか？",
            "vi": "Một tấm thẻ nghe có vẻ tốt - bạn có thẻ sinh nhật không?"
          }
        },
        {
          "role": "ai",
          "text": "Do you want to keep the receipt in case they need to exchange it?",
          "translations": {
            "ko": "교환할 필요가 있을 경우 영수증을 보관하시겠어요?",
            "zh": "你想保留收据以防他们需要换货吗？",
            "ja": "交換が必要な場合に備えて、レシートを保管しておきますか？",
            "vi": "Bạn có muốn giữ lại hóa đơn trong trường hợp họ cần đổi không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I’ll take the gift receipt.",
          "translations": {
            "ko": "네, 선물 영수증을 받겠습니다.",
            "zh": "是的，我会拿赠品收据。",
            "ja": "はい、ギフトレシートをもらいます。",
            "vi": "Có, tôi sẽ lấy hóa đơn quà tặng."
          }
        },
        {
          "role": "ai",
          "text": "This item is one of our bestsellers for gifts.",
          "translations": {
            "ko": "이 제품은 우리의 선물용 베스트셀러 중 하나입니다.",
            "zh": "这个商品是我们的畅销礼品之一。",
            "ja": "この商品は私たちのギフトのベストセラーの一つです。",
            "vi": "Món hàng này là một trong những mặt hàng bán chạy nhất của chúng tôi dành cho quà tặng."
          }
        },
        {
          "role": "user",
          "text": "That sounds perfect. I’ll take it.",
          "translations": {
            "ko": "완벽하네요. 그걸로 하겠습니다.",
            "zh": "听起来很完美。我要了。",
            "ja": "それは完璧ですね。それにします。",
            "vi": "Nghe hoàn hảo. Tôi sẽ lấy nó."
          }
        },
        {
          "role": "ai",
          "text": "Would you like to include a personal message?",
          "translations": {
            "ko": "개인 메시지를 포함하시겠어요?",
            "zh": "你想要包含一条个人信息吗？",
            "ja": "パーソナルメッセージを入れますか？",
            "vi": "Bạn có muốn ghi thêm lời nhắn cá nhân không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, please write ‘Happy Birthday, enjoy your day!’",
          "translations": {
            "ko": "네, '생일 축하해, 즐거운 하루 되세요!'라고 써주세요.",
            "zh": "是的，请写“生日快乐，享受你的一天！”",
            "ja": "はい、'Happy Birthday, enjoy your day!'と書いてください。",
            "vi": "Có, xin vui lòng viết 'Chúc mừng sinh nhật, hãy tận hưởng ngày của bạn!'"
          }
        },
        {
          "role": "ai",
          "text": "Let me know if you’d like suggestions based on their interests.",
          "translations": {
            "ko": "그들의 취미에 기반한 제안이 필요하시면 알려주세요.",
            "zh": "如果你想根据他们的兴趣得到建议，请告诉我。",
            "ja": "彼らの興味に基づいた提案が必要であればお知らせください。",
            "vi": "Hãy cho tôi biết nếu bạn muốn gợi ý dựa trên sở thích của họ."
          }
        },
        {
          "role": "user",
          "text": "That’d be helpful. Thank you!",
          "translations": {
            "ko": "도움이 될 것 같네요. 감사합니다!",
            "zh": "那会很有帮助。谢谢你！",
            "ja": "それは助かります。ありがとうございます！",
            "vi": "Điều đó sẽ rất hữu ích. Cảm ơn bạn!"
          }
        }
      ]
    },
    {
      "description": {
        "ko": "체크아웃 시 할인 쿠폰 사용",
        "zh": "在结账时使用折扣券",
        "ja": "チェックアウト時に割引クーポンを使用する",
        "vi": "Sử dụng phiếu giảm giá khi thanh toán"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "That’ll be $87.50. Do you have any coupons or loyalty points?",
          "translations": {
            "ko": "총 87.50달러입니다. 쿠폰이나 포인트가 있으신가요?",
            "zh": "那将是87.50美元。你有任何优惠券或积分吗？",
            "ja": "合計は87.50ドルです。クーポンやポイントはありますか？",
            "vi": "Tổng cộng là $87.50. Bạn có phiếu giảm giá hoặc điểm thưởng không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I have this coupon I received by email.",
          "translations": {
            "ko": "네, 이메일로 받은 쿠폰이 있습니다.",
            "zh": "是的，我有这张我通过电子邮件收到的优惠券。",
            "ja": "はい、メールで受け取ったこのクーポンがあります。",
            "vi": "Có, tôi có phiếu giảm giá này mà tôi nhận được qua email."
          }
        },
        {
          "role": "ai",
          "text": "Let me apply that discount for you.",
          "translations": {
            "ko": "할인을 적용해드리겠습니다.",
            "zh": "让我为你应用这个折扣。",
            "ja": "その割引を適用させていただきます。",
            "vi": "Để tôi áp dụng giảm giá cho bạn."
          }
        },
        {
          "role": "user",
          "text": "Great, thank you!",
          "translations": {
            "ko": "좋아요, 감사합니다!",
            "zh": "太好了，谢谢你！",
            "ja": "すばらしい、ありがとうございます！",
            "vi": "Tuyệt, cảm ơn bạn!"
          }
        },
        {
          "role": "ai",
          "text": "This coupon gives you 15% off regular-priced items.",
          "translations": {
            "ko": "이 쿠폰은 정가 상품에 15% 할인을 해드립니다.",
            "zh": "这张优惠券可以让你享受常规价格商品的15%折扣。",
            "ja": "このクーポンは、定価商品を15％オフにします。",
            "vi": "Phiếu giảm giá này giúp bạn giảm 15% cho các mặt hàng giá thông thường."
          }
        },
        {
          "role": "user",
          "text": "That’s what I thought-perfect.",
          "translations": {
            "ko": "그게 바로 내 생각이었어-완벽해.",
            "zh": "这正是我想的-完美。",
            "ja": "それが私が思っていた通り-完璧です。",
            "vi": "Đúng như tôi đã nghĩ - hoàn hảo."
          }
        },
        {
          "role": "ai",
          "text": "Would you like to use your loyalty points as well?",
          "translations": {
            "ko": "충성도 포인트도 사용하시겠습니까?",
            "zh": "您想使用您的忠诚度积分吗？",
            "ja": "ロイヤルティポイントもご利用になりますか？",
            "vi": "Bạn có muốn sử dụng điểm thưởng của mình không?"
          }
        },
        {
          "role": "user",
          "text": "Sure, let’s use the points too.",
          "translations": {
            "ko": "그럼, 포인트도 사용합시다.",
            "zh": "好的，我们也用积分吧。",
            "ja": "はい、ポイントも使いましょう。",
            "vi": "Chắc chắn, hãy sử dụng điểm thưởng."
          }
        },
        {
          "role": "ai",
          "text": "Your new total comes to $71.38.",
          "translations": {
            "ko": "새로운 총액은 $71.38입니다.",
            "zh": "您的新总额为71.38美元。",
            "ja": "新しい合計金額は71.38ドルになります。",
            "vi": "Tổng số tiền mới của bạn là $71.38."
          }
        },
        {
          "role": "user",
          "text": "Awesome, that’s a nice discount.",
          "translations": {
            "ko": "대박, 좋은 할인이네요.",
            "zh": "太棒了，这是一个很好的折扣。",
            "ja": "素晴らしい、それは良い割引ですね。",
            "vi": "Tuyệt vời, đó là một mức giảm giá tốt."
          }
        },
        {
          "role": "ai",
          "text": "Would you like a paper receipt or a digital one?",
          "translations": {
            "ko": "종이 영수증이 필요하신가요, 아니면 디지털 영수증이 필요하신가요?",
            "zh": "您想要纸质收据还是电子收据？",
            "ja": "レシートは紙のものとデジタルのどちらがよろしいですか？",
            "vi": "Bạn muốn nhận hóa đơn giấy hay hóa đơn điện tử?"
          }
        },
        {
          "role": "user",
          "text": "Digital is fine, thank you.",
          "translations": {
            "ko": "디지털로 괜찮습니다, 감사합니다.",
            "zh": "电子的就行，谢谢。",
            "ja": "デジタルで大丈夫です、ありがとうございます。",
            "vi": "Hóa đơn điện tử là tốt, cảm ơn."
          }
        },
        {
          "role": "ai",
          "text": "Thanks for shopping with us today.",
          "translations": {
            "ko": "오늘 저희 매장에서 쇼핑해 주셔서 감사합니다.",
            "zh": "感谢您今天在我们这里购物。",
            "ja": "今日はご利用いただきありがとうございました。",
            "vi": "Cảm ơn bạn đã mua sắm với chúng tôi hôm nay."
          }
        },
        {
          "role": "user",
          "text": "Thanks, everything was smooth.",
          "translations": {
            "ko": "감사합니다, 모든 것이 순조롭게 진행되었어요.",
            "zh": "谢谢，一切都很顺利。",
            "ja": "ありがとう、すべてスムーズでした。",
            "vi": "Cảm ơn, mọi thứ diễn ra suôn sẻ."
          }
        },
        {
          "role": "ai",
          "text": "You earned 20 more loyalty points on this purchase.",
          "translations": {
            "ko": "이번 구매로 20개의 추가 충성도 포인트를 얻으셨습니다.",
            "zh": "您在此次购物中又赚了20个忠诚度积分。",
            "ja": "この購入で20ポイントのロイヤルティポイントを獲得しました。",
            "vi": "Bạn đã kiếm được thêm 20 điểm thưởng trong lần mua sắm này."
          }
        },
        {
          "role": "user",
          "text": "Nice! I’ll save them up.",
          "translations": {
            "ko": "좋아요! 모아둘게요.",
            "zh": "太好了！我会存起来的。",
            "ja": "いいね！貯めておきます。",
            "vi": "Tốt quá! Tôi sẽ tiết kiệm chúng."
          }
        },
        {
          "role": "ai",
          "text": "Make sure to check your email for upcoming offers.",
          "translations": {
            "ko": "다가오는 특별 제안을 위해 이메일을 확인하시는 것을 잊지 마세요.",
            "zh": "请务必查看您的电子邮件以获取即将到来的优惠。",
            "ja": "近日中に届くオファーをメールで確認してください。",
            "vi": "Hãy chắc chắn kiểm tra email của bạn để nhận các ưu đãi sắp tới."
          }
        },
        {
          "role": "user",
          "text": "I’ll keep an eye out. Appreciate it.",
          "translations": {
            "ko": "확인하겠습니다. 감사합니다.",
            "zh": "我会留意的。感谢您。",
            "ja": "気をつけて見ておきます。感謝します。",
            "vi": "Tôi sẽ để ý. Cảm ơn."
          }
        },
        {
          "role": "ai",
          "text": "Have a great day!",
          "translations": {
            "ko": "좋은 하루 보내세요!",
            "zh": "祝您今天过得愉快！",
            "ja": "素晴らしい一日を！",
            "vi": "Chúc bạn một ngày tốt lành!"
          }
        },
        {
          "role": "user",
          "text": "You too. Thanks again!",
          "translations": {
            "ko": "당신도요. 다시 감사드립니다!",
            "zh": "您也是。再次感谢！",
            "ja": "あなたも。再度、ありがとうございます！",
            "vi": "Bạn cũng vậy. Cảm ơn một lần nữa!"
          }
        }
      ]
    },
    {
      "description": {
        "ko": "구매하기 전에 제품 세부 정보를 묻는 중",
        "zh": "在购买前询问产品详情",
        "ja": "購入前に商品詳細を尋ねる",
        "vi": "Hỏi về chi tiết sản phẩm trước khi mua"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "That’s one of our popular items this season.",
          "translations": {
            "ko": "그것은 이번 시즌에 인기 있는 아이템 중 하나입니다.",
            "zh": "这是我们这个季度的热门商品之一。",
            "ja": "それは今シーズンの人気商品の一つです。",
            "vi": "Đó là một trong những mặt hàng phổ biến của chúng tôi mùa này."
          }
        },
        {
          "role": "user",
          "text": "I’ve seen this online. Is this the same model?",
          "translations": {
            "ko": "이건 인터넷에서 본 거랑 같은 모델인가요?",
            "zh": "我在网上看过这个。这是同一款吗？",
            "ja": "これをオンラインで見ました。これは同じモデルですか？",
            "vi": "Tôi đã thấy nó trên mạng. Đây có phải là cùng một mẫu không?"
          }
        },
        {
          "role": "ai",
          "text": "Are you wondering about the fabric or the fit?",
          "translations": {
            "ko": "원단이나 핏에 대해 궁금하신가요?",
            "zh": "您是想了解面料还是版型？",
            "ja": "生地やフィット感について知りたいのですか？",
            "vi": "Bạn muốn biết về chất liệu hay kiểu dáng?"
          }
        },
        {
          "role": "user",
          "text": "Yes, what material is it made of?",
          "translations": {
            "ko": "네, 어떤 재료로 만들어졌나요?",
            "zh": "是的，它是由什么材料制成的？",
            "ja": "はい、何の素材で作られていますか？",
            "vi": "Vâng, nó được làm từ chất liệu gì?"
          }
        },
        {
          "role": "ai",
          "text": "It’s made of organic cotton and designed to be breathable.",
          "translations": {
            "ko": "그것은 유기농 면으로 만들어져 있고 통기성이 좋게 디자인되었습니다.",
            "zh": "它是由有机棉制成的，设计上注重透气性。",
            "ja": "それは有機綿で作られ、通気性に優れています。",
            "vi": "Nó được làm từ bông hữu cơ và thiết kế để thoáng khí."
          }
        },
        {
          "role": "user",
          "text": "That sounds good. It feels light.",
          "translations": {
            "ko": "좋네요. 가볍게 느껴져요.",
            "zh": "听起来不错。它感觉很轻。",
            "ja": "それは良さそうです。軽い感じがします。",
            "vi": "Nghe tốt đấy. Nó cảm thấy nhẹ nhàng."
          }
        },
        {
          "role": "ai",
          "text": "Would you like to know how it handles after washing?",
          "translations": {
            "ko": "세탁 후 어떻게 변하는지 알고 싶으신가요?",
            "zh": "您想知道它洗后的效果如何吗？",
            "ja": "洗濯後の扱い方を知りたいですか？",
            "vi": "Bạn có muốn biết nó sẽ như thế nào sau khi giặt không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, how does it hold up after washing?",
          "translations": {
            "ko": "네, 세탁 후 어떻게 변하나요?",
            "zh": "是的，洗后它的效果如何？",
            "ja": "はい、洗濯後はどうなりますか？",
            "vi": "Vâng, nó sẽ như thế nào sau khi giặt?"
          }
        },
        {
          "role": "ai",
          "text": "The size tends to run a bit small, so you may want to size up.",
          "translations": {
            "ko": "사이즈가 조금 작게 나와서, 한 치수 크게 선택하시는 것이 좋을 것 같습니다.",
            "zh": "尺寸可能会偏小一些，所以您可能需要选择大一号的。",
            "ja": "サイズは少し小さめなので、大きめのサイズを選ぶことをお勧めします。",
            "vi": "Kích thước thường hơi nhỏ, vì vậy bạn có thể muốn chọn size lớn hơn."
          }
        },
        {
          "role": "user",
          "text": "Thanks, I’ll try a larger size then.",
          "translations": {
            "ko": "감사합니다, 그럼 큰 사이즈로 해볼게요.",
            "zh": "谢谢，那我试试大一号的。",
            "ja": "ありがとう、それなら大きめのサイズを試してみます。",
            "vi": "Cảm ơn, tôi sẽ thử size lớn hơn."
          }
        },
        {
          "role": "ai",
          "text": "It comes in three other colors-navy, beige, and forest green.",
          "translations": {
            "ko": "네이비, 베이지, 포레스트 그린 세 가지 다른 색상도 있습니다.",
            "zh": "它还有其他三种颜色-海军蓝，米色和森林绿。",
            "ja": "ネイビー、ベージュ、フォレストグリーンの他に3色あります。",
            "vi": "Nó có ba màu khác - xanh hải quân, be và xanh rừng."
          }
        },
        {
          "role": "user",
          "text": "Oh, forest green sounds nice. Do you have it here?",
          "translations": {
            "ko": "오, 포레스트 그린이 좋아 보여요. 여기 있나요?",
            "zh": "哦，森林绿听起来不错。你们这里有吗？",
            "ja": "ああ、フォレストグリーンがいいですね。ここにありますか？",
            "vi": "Oh, màu xanh rừng nghe có vẻ đẹp. Bạn có màu đó ở đây không?"
          }
        },
        {
          "role": "ai",
          "text": "We also have matching pants if you’re interested.",
          "translations": {
            "ko": "관심 있으시다면 매치하는 바지도 있습니다.",
            "zh": "如果您感兴趣，我们还有配套的裤子。",
            "ja": "もし興味があれば、合わせて着るパンツもあります。",
            "vi": "Chúng tôi cũng có quần phù hợp nếu bạn quan tâm."
          }
        },
        {
          "role": "user",
          "text": "I didn’t realize it had a matching set!",
          "translations": {
            "ko": "매치하는 세트가 있다는 걸 몰랐네요!",
            "zh": "我没意识到它有配套的套装！",
            "ja": "マッチングセットがあるなんて知りませんでした！",
            "vi": "Tôi không nhận ra nó có bộ đồ phù hợp!"
          }
        },
        {
          "role": "ai",
          "text": "Would you like to feel the fabric before deciding?",
          "translations": {
            "ko": "결정하기 전에 원단을 만져보시겠어요?",
            "zh": "在做决定之前，您想要感觉一下这个面料吗？",
            "ja": "決定する前に、生地を触ってみますか？",
            "vi": "Bạn có muốn sờ thử chất liệu vải trước khi quyết định không?"
          }
        },
        {
          "role": "user",
          "text": "Sure, let me take a closer look.",
          "translations": {
            "ko": "그럼요, 좀 더 자세히 살펴보겠습니다.",
            "zh": "当然，让我仔细看看。",
            "ja": "ええ、もっと近くで見てみます。",
            "vi": "Chắc chắn, để tôi xem kỹ hơn."
          }
        },
        {
          "role": "ai",
          "text": "Can I answer any questions about our return policy?",
          "translations": {
            "ko": "교환 및 환불 정책에 대해 궁금한 점이 있으신가요?",
            "zh": "我能解答关于我们退货政策的任何问题吗？",
            "ja": "返品ポリシーについて何か質問はありますか？",
            "vi": "Tôi có thể giải đáp bất kỳ câu hỏi nào về chính sách trả hàng của chúng tôi không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, can I return it within 14 days?",
          "translations": {
            "ko": "네, 14일 내에 반품할 수 있나요?",
            "zh": "是的，我可以在14天内退货吗？",
            "ja": "はい、14日以内に返品できますか？",
            "vi": "Vâng, tôi có thể trả lại sản phẩm trong vòng 14 ngày không?"
          }
        },
        {
          "role": "ai",
          "text": "Take your time-let me know if you need a second opinion.",
          "translations": {
            "ko": "천천히 생각해보세요-두 번째 의견이 필요하시면 알려주세요.",
            "zh": "慢慢来-如果你需要第二意见，就告诉我。",
            "ja": "お時間をかけてください。何か意見が必要ならお知らせください。",
            "vi": "Hãy dành thời gian - cho tôi biết nếu bạn cần ý kiến thứ hai."
          }
        },
        {
          "role": "user",
          "text": "Thanks, I might need your advice in a minute.",
          "translations": {
            "ko": "감사합니다, 잠시 후에 조언이 필요할 수도 있어요.",
            "zh": "谢谢，我可能过一会儿需要你的建议。",
            "ja": "ありがとう、すぐにあなたのアドバイスが必要になるかもしれません。",
            "vi": "Cảm ơn, tôi có thể cần lời khuyên của bạn trong một phút."
          }
        }
      ]
    },
    {
      "description": {
        "ko": "분주한 상점에서 도움 요청하기",
        "zh": "在繁忙的商店寻求帮助",
        "ja": "混雑した店でのアシスタンスの依頼",
        "vi": "Yêu cầu hỗ trợ trong một cửa hàng đông khách"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Hi there! Sorry for the wait-how can I help?",
          "translations": {
            "ko": "안녕하세요! 기다리게 해서 죄송합니다-어떻게 도와드릴까요?",
            "zh": "嗨，对不起让你等待-我能帮你什么吗？",
            "ja": "こんにちは！お待たせしました、何かお手伝いできることはありますか？",
            "vi": "Xin chào! Xin lỗi vì đã để bạn chờ - tôi có thể giúp gì cho bạn?"
          }
        },
        {
          "role": "user",
          "text": "No worries. I’m looking for the new jeans collection.",
          "translations": {
            "ko": "괜찮아요. 새로운 청바지 컬렉션을 찾고 있어요.",
            "zh": "没关系。我正在寻找新的牛仔裤系列。",
            "ja": "気にしないで。新しいジーンズのコレクションを探しています。",
            "vi": "Không sao. Tôi đang tìm bộ sưu tập quần jeans mới."
          }
        },
        {
          "role": "ai",
          "text": "Thanks for your patience. What are you looking for today?",
          "translations": {
            "ko": "기다려주셔서 감사합니다. 오늘 무엇을 찾으시나요?",
            "zh": "感谢您的耐心等待。今天你想找什么？",
            "ja": "お待たせしました。今日は何をお探しですか？",
            "vi": "Cảm ơn sự kiên nhẫn của bạn. Bạn đang tìm kiếm gì hôm nay?"
          }
        },
        {
          "role": "user",
          "text": "It’s okay. I figured it was a busy day.",
          "translations": {
            "ko": "괜찮아요. 바쁜 날이라는 걸 알고 있었어요.",
            "zh": "没关系。我知道今天是个忙碌的日子。",
            "ja": "大丈夫です。忙しい日だと思いました。",
            "vi": "Không sao. Tôi nghĩ hôm nay là một ngày bận rộn."
          }
        },
        {
          "role": "ai",
          "text": "We’ve been a bit busy, but I’m here to assist you now.",
          "translations": {
            "ko": "조금 바빴지만, 이제 도와드릴 수 있습니다.",
            "zh": "我们有点忙，但我现在在这里为您提供帮助。",
            "ja": "少し忙しかったですが、今はあなたを支援するためにここにいます。",
            "vi": "Chúng tôi đã hơi bận, nhưng tôi đang ở đây để hỗ trợ bạn ngay bây giờ."
          }
        },
        {
          "role": "user",
          "text": "Yes, I’m trying to find size 30 in dark blue.",
          "translations": {
            "ko": "네, 짙은 파란색의 30 사이즈를 찾고 있어요.",
            "zh": "是的，我正在试图找到深蓝色的30码。",
            "ja": "はい、ダークブルーの30サイズを探しています。",
            "vi": "Vâng, tôi đang cố tìm size 30 màu xanh đậm."
          }
        },
        {
          "role": "ai",
          "text": "Do you need help with sizing or finding something specific?",
          "translations": {
            "ko": "사이즈나 특정 상품을 찾는 데 도움이 필요하신가요?",
            "zh": "你需要帮助找到合适的尺寸或者特定的东西吗？",
            "ja": "サイズ選びや特定のアイテムの探し方で助けが必要ですか？",
            "vi": "Bạn có cần giúp đỡ về kích cỡ hoặc tìm kiếm một món đồ cụ thể không?"
          }
        },
        {
          "role": "user",
          "text": "That’d be great if you could check.",
          "translations": {
            "ko": "확인해주시면 좋겠어요.",
            "zh": "如果你能检查一下就太好了。",
            "ja": "確認していただけると助かります。",
            "vi": "Nếu bạn có thể kiểm tra thì tốt quá."
          }
        },
        {
          "role": "ai",
          "text": "We just restocked some items that might interest you.",
          "translations": {
            "ko": "귀하를 위해 관심 있을 만한 상품을 몇 가지 재입고했습니다.",
            "zh": "我们刚刚补充了一些可能会让你感兴趣的商品。",
            "ja": "あなたが興味を持つかもしれないアイテムをいくつか再入荷しました。",
            "vi": "Chúng tôi vừa nhập thêm một số mặt hàng mà bạn có thể quan tâm."
          }
        },
        {
          "role": "user",
          "text": "I appreciate that-thanks.",
          "translations": {
            "ko": "그렇게 해주시면 감사하겠습니다.",
            "zh": "我很感激-谢谢。",
            "ja": "それはありがたいです、ありがとう。",
            "vi": "Tôi rất biết ơn điều đó - cảm ơn."
          }
        },
        {
          "role": "ai",
          "text": "Would you like me to check the back for additional stock?",
          "translations": {
            "ko": "추가 재고를 뒤에서 확인해 드릴까요?",
            "zh": "你想让我去后面查看有没有额外的库存吗？",
            "ja": "追加の在庫を裏で確認しましょうか？",
            "vi": "Bạn có muốn tôi kiểm tra phía sau để xem còn hàng thêm không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, please. That would help a lot.",
          "translations": {
            "ko": "네, 부탁드립니다. 많은 도움이 될 것 같아요.",
            "zh": "是的，请。这将会很有帮助。",
            "ja": "はい、お願いします。それは大いに助かります。",
            "vi": "Vâng, làm ơn. Điều đó sẽ giúp rất nhiều."
          }
        },
        {
          "role": "ai",
          "text": "I can hold items for you at the counter while you browse.",
          "translations": {
            "ko": "둘러보시는 동안 카운터에 물건을 보관해 드릴 수 있습니다.",
            "zh": "当你浏览的时候，我可以在柜台为你保留物品。",
            "ja": "あなたが商品を見ている間、カウンターで商品をお預かりできます。",
            "vi": "Tôi có thể giữ hàng cho bạn tại quầy trong khi bạn xem xét."
          }
        },
        {
          "role": "user",
          "text": "Thanks. I’ll leave them with you.",
          "translations": {
            "ko": "감사합니다. 그쪽에 맡기겠습니다.",
            "zh": "谢谢。我会把它们留给你。",
            "ja": "ありがとう。それらをあなたに預けます。",
            "vi": "Cảm ơn. Tôi sẽ để chúng với bạn."
          }
        },
        {
          "role": "ai",
          "text": "Let me know if you need a basket or bag for your items.",
          "translations": {
            "ko": "물건을 담을 바구니나 가방이 필요하시면 알려주세요.",
            "zh": "如果你需要购物篮或购物袋，就告诉我。",
            "ja": "商品用のバスケットや袋が必要ならお知らせください。",
            "vi": "Hãy cho tôi biết nếu bạn cần một giỏ hoặc túi để đựng hàng của bạn."
          }
        },
        {
          "role": "user",
          "text": "Yes, a bag would be helpful.",
          "translations": {
            "ko": "네, 가방이 있으면 도움이 될 것 같아요.",
            "zh": "是的，一个购物袋会很有帮助。",
            "ja": "はい、袋があると助かります。",
            "vi": "Vâng, một cái túi sẽ hữu ích."
          }
        },
        {
          "role": "ai",
          "text": "We’re open until 9 PM tonight in case you need more time.",
          "translations": {
            "ko": "오늘 저녁 9시까지 영업하니까 시간이 더 필요하시면 알려주세요.",
            "zh": "以防你需要更多时间，我们今晚开放到9点。",
            "ja": "今夜は9時まで営業していますので、時間が必要な場合はご利用ください。",
            "vi": "Chúng tôi mở cửa đến 9 giờ tối hôm nay trong trường hợp bạn cần thêm thời gian."
          }
        },
        {
          "role": "user",
          "text": "Good to know. I might take my time.",
          "translations": {
            "ko": "알겠습니다. 천천히 둘러볼게요.",
            "zh": "好的，我可能会慢慢来。",
            "ja": "知っておいてよかったです。時間をかけるかもしれません。",
            "vi": "Thông tin hữu ích. Tôi có thể sẽ dành thời gian."
          }
        },
        {
          "role": "ai",
          "text": "Thanks again for waiting-I really appreciate it.",
          "translations": {
            "ko": "다시 한번 기다려주셔서 감사합니다-정말 감사드립니다.",
            "zh": "再次感谢您的等待-我真的很感激。",
            "ja": "再度お待ちいただきありがとうございます、本当に感謝しています。",
            "vi": "Cảm ơn bạn đã chờ đợi - tôi thực sự rất biết ơn."
          }
        },
        {
          "role": "user",
          "text": "You’re doing great. Thanks again!",
          "translations": {
            "ko": "잘하고 계세요. 다시 한번 감사드립니다!",
            "zh": "你做得很好。再次感谢！",
            "ja": "あなたは素晴らしい仕事をしています。再度ありがとう！",
            "vi": "Bạn đang làm rất tốt. Cảm ơn bạn một lần nữa!"
          }
        }
      ]
    },
    {
      "description": {
        "ko": "매장 정책에 대해 묻기",
        "zh": "询问商店政策",
        "ja": "店舗のポリシーについての問い合わせ",
        "vi": "Hỏi về chính sách cửa hàng"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Sure! What would you like to know about our policies?",
          "translations": {
            "ko": "네! 우리의 정책에 대해 무엇을 알고 싶으신가요?",
            "zh": "当然！你想知道我们的政策有哪些吗？",
            "ja": "もちろん！私たちのポリシーについて何を知りたいですか？",
            "vi": "Chắc chắn! Bạn muốn biết gì về chính sách của chúng tôi?"
          }
        },
        {
          "role": "user",
          "text": "Can I return something I bought last weekend?",
          "translations": {
            "ko": "지난 주말에 산 물건을 반품할 수 있나요?",
            "zh": "我可以退回上周末购买的东西吗？",
            "ja": "先週末に買ったものを返品できますか？",
            "vi": "Tôi có thể trả lại một món đồ mà tôi mua vào cuối tuần trước không?"
          }
        },
        {
          "role": "ai",
          "text": "We offer a 14-day return policy for unused items.",
          "translations": {
            "ko": "미사용 상품에 대해서는 14일 반품 정책을 제공합니다.",
            "zh": "我们提供14天退货政策，仅限未使用的商品。",
            "ja": "未使用品については、14日間の返品ポリシーを提供しています。",
            "vi": "Chúng tôi áp dụng chính sách hoàn trả trong vòng 14 ngày cho các sản phẩm chưa sử dụng."
          }
        },
        {
          "role": "user",
          "text": "Good to know. It’s still unused.",
          "translations": {
            "ko": "알겠습니다. 아직 사용하지 않았어요.",
            "zh": "好的，知道了。这个还没用过。",
            "ja": "知っておくと便利ですね。まだ使っていません。",
            "vi": "Tốt biết. Sản phẩm này vẫn chưa sử dụng."
          }
        },
        {
          "role": "ai",
          "text": "Sale items are final, but we’ll still help if there’s an issue.",
          "translations": {
            "ko": "세일 상품은 환불이 불가능하지만 문제가 있을 경우 도와드릴 수 있습니다.",
            "zh": "销售商品一般不接受退款，但如果有问题我们仍会提供帮助。",
            "ja": "セール品は最終販売となりますが、問題がある場合は何でもお手伝いします。",
            "vi": "Các mặt hàng giảm giá không được hoàn trả, nhưng nếu có vấn đề gì chúng tôi sẽ hỗ trợ."
          }
        },
        {
          "role": "user",
          "text": "This item was on sale-what’s the rule for that?",
          "translations": {
            "ko": "이 상품은 세일 중이었는데, 그 경우에는 어떻게 되나요?",
            "zh": "这个商品是打折商品，那么退款规则是怎样的？",
            "ja": "この商品はセール品ですが、その場合のルールは何ですか？",
            "vi": "Mặt hàng này đã được giảm giá - quy định cho trường hợp này là gì?"
          }
        },
        {
          "role": "ai",
          "text": "You can exchange within 30 days with a receipt.",
          "translations": {
            "ko": "영수증이 있는 경우 30일 이내에 교환할 수 있습니다.",
            "zh": "您可以在购买后30天内凭收据进行换货。",
            "ja": "レシートがあれば30日以内に交換可能です。",
            "vi": "Bạn có thể đổi hàng trong vòng 30 ngày nếu có hóa đơn."
          }
        },
        {
          "role": "user",
          "text": "Got it. I’ll keep the receipt just in case.",
          "translations": {
            "ko": "알겠습니다. 혹시 모를 상황에 대비해 영수증을 보관하겠습니다.",
            "zh": "明白了。我会保存好收据以防万一。",
            "ja": "了解しました。念のためレシートは保管しておきます。",
            "vi": "Được rồi. Tôi sẽ giữ hóa đơn phòng khi cần."
          }
        },
        {
          "role": "ai",
          "text": "We accept returns both in-store and online.",
          "translations": {
            "ko": "저희는 매장 내와 온라인 모두에서 반품을 받습니다.",
            "zh": "我们接受店内和在线退货。",
            "ja": "店頭でもオンラインでも返品を受け付けています。",
            "vi": "Chúng tôi chấp nhận hoàn trả hàng cả tại cửa hàng và trực tuyến."
          }
        },
        {
          "role": "user",
          "text": "Great! Online return is more convenient for me.",
          "translations": {
            "ko": "좋아요! 저에게는 온라인 반품이 더 편리하네요.",
            "zh": "太好了！在线退货对我来说更方便。",
            "ja": "すばらしい！オンラインでの返品は私にとって便利です。",
            "vi": "Tuyệt! Việc hoàn trả hàng trực tuyến thuận tiện hơn cho tôi."
          }
        },
        {
          "role": "ai",
          "text": "Gift receipts are available if you’re buying for someone else.",
          "translations": {
            "ko": "다른 사람을 위해 구매하시는 경우 선물 영수증을 제공합니다.",
            "zh": "如果您是为他人购买，我们可以提供礼品收据。",
            "ja": "他の人に贈る場合はギフトレシートを用意しています。",
            "vi": "Chúng tôi cung cấp hóa đơn quà tặng nếu bạn mua cho người khác."
          }
        },
        {
          "role": "user",
          "text": "Yes, it’s a gift. I’d like a gift receipt.",
          "translations": {
            "ko": "네, 선물이에요. 선물 영수증을 받고 싶습니다.",
            "zh": "是的，这是个礼物。我需要一个礼品收据。",
            "ja": "はい、プレゼントです。ギフトレシートをお願いします。",
            "vi": "Đúng, đây là món quà. Tôi muốn có hóa đơn quà tặng."
          }
        },
        {
          "role": "ai",
          "text": "Would you like a printed summary of our policies?",
          "translations": {
            "ko": "저희 정책에 대한 요약본을 인쇄해 드릴까요?",
            "zh": "您需要我们为您打印一份政策摘要吗？",
            "ja": "当店のポリシーの印刷版の要約をご希望ですか？",
            "vi": "Bạn có muốn nhận bản in tóm tắt về các chính sách của chúng tôi không?"
          }
        },
        {
          "role": "user",
          "text": "That’d be helpful, thank you.",
          "translations": {
            "ko": "도움이 될 것 같아요, 감사합니다.",
            "zh": "那会很有帮助，谢谢您。",
            "ja": "それは助かります、ありがとうございます。",
            "vi": "Điều đó sẽ rất hữu ích, cảm ơn bạn."
          }
        },
        {
          "role": "ai",
          "text": "We also offer price adjustments within 7 days of purchase.",
          "translations": {
            "ko": "구매 후 7일 이내에 가격 조정을 제공합니다.",
            "zh": "我们还提供购买后7天内的价格调整服务。",
            "ja": "購入後7日以内なら価格調整も提供しています。",
            "vi": "Chúng tôi cũng cung cấp điều chỉnh giá trong vòng 7 ngày sau khi mua."
          }
        },
        {
          "role": "user",
          "text": "Oh, I didn’t know about that. That’s good to hear.",
          "translations": {
            "ko": "오, 그건 몰랐네요. 좋은 소식이네요.",
            "zh": "哦，我之前不知道这个。这个消息真好。",
            "ja": "あ、それは知りませんでした。それは嬉しい情報です。",
            "vi": "Ôi, tôi không biết về điều đó. Thật tốt khi nghe được điều này."
          }
        },
        {
          "role": "ai",
          "text": "Do you have any questions about warranties or repairs?",
          "translations": {
            "ko": "보증이나 수리에 대해 궁금한 점이 있으신가요?",
            "zh": "您对保修或维修有任何问题吗？",
            "ja": "保証や修理について何か質問はありますか？",
            "vi": "Bạn có câu hỏi nào về bảo hành hoặc sửa chữa không?"
          }
        },
        {
          "role": "user",
          "text": "What about damaged items? Are they covered?",
          "translations": {
            "ko": "손상된 상품은 어떻게 되나요? 보장이 되나요?",
            "zh": "对于损坏的商品怎么处理？有保修吗？",
            "ja": "損傷した商品はどうなるのですか？それらはカバーされていますか？",
            "vi": "Về các mặt hàng bị hư hỏng thì sao? Chúng được bảo hiểm không?"
          }
        },
        {
          "role": "ai",
          "text": "Happy to clarify anything for you!",
          "translations": {
            "ko": "궁금한 사항이 있으면 언제든지 알려드릴게요!",
            "zh": "很乐意为您解答任何问题！",
            "ja": "何でもお答えしますので、お気軽にどうぞ！",
            "vi": "Rất vui được giải đáp mọi thắc mắc cho bạn!"
          }
        },
        {
          "role": "user",
          "text": "Thanks. That cleared things up!",
          "translations": {
            "ko": "감사합니다. 이해가 잘 됐어요!",
            "zh": "谢谢。这解答了我的疑惑！",
            "ja": "ありがとうございます。それで理解できました！",
            "vi": "Cảm ơn. Mọi thứ đã rõ ràng hơn!"
          }
        }
      ]
    },
    {
      "description": {
        "ko": "계절 세일 기간 동안 쇼핑하기",
        "zh": "在季节性销售期间购物",
        "ja": "シーズンセール中の買い物",
        "vi": "Mua sắm trong mùa giảm giá"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Welcome! You picked a great time-our seasonal sale just started.",
          "translations": {
            "ko": "환영합니다! 좋은 시기에 오셨네요-저희 계절 세일이 막 시작했습니다.",
            "zh": "欢迎！您来得正好，我们的季节性销售刚刚开始。",
            "ja": "ようこそ！ちょうどシーズンセールが始まったばかりで、いいタイミングですね。",
            "vi": "Chào mừng! Bạn đã chọn đúng thời điểm - mùa giảm giá của chúng tôi vừa bắt đầu."
          }
        },
        {
          "role": "user",
          "text": "Nice! I didn’t realize the sale had started.",
          "translations": {
            "ko": "좋네요! 세일이 시작했다는 걸 몰랐어요.",
            "zh": "太好了！我还不知道销售已经开始了。",
            "ja": "すごい！セールが始まっていることに気づきませんでした。",
            "vi": "Tuyệt! Tôi không biết là mùa giảm giá đã bắt đầu."
          }
        },
        {
          "role": "ai",
          "text": "Most items are 20 to 40 percent off today.",
          "translations": {
            "ko": "오늘 대부분의 상품이 20%에서 40% 할인됩니다.",
            "zh": "今天大部分商品都有20%到40%的折扣。",
            "ja": "今日はほとんどの商品が20から40パーセントオフです。",
            "vi": "Hầu hết các mặt hàng đều giảm giá từ 20 đến 40 phần trăm hôm nay."
          }
        },
        {
          "role": "user",
          "text": "That’s a good range of discounts.",
          "translations": {
            "ko": "할인 범위가 좋네요.",
            "zh": "这个折扣范围很好。",
            "ja": "それはいい割引率ですね。",
            "vi": "Đó là một mức giảm giá tốt."
          }
        },
        {
          "role": "ai",
          "text": "The red tags indicate sale items.",
          "translations": {
            "ko": "빨간 태그가 붙은 상품이 세일 상품입니다.",
            "zh": "红色标签表示打折商品。",
            "ja": "赤いタグがついている商品がセール品です。",
            "vi": "Nhãn màu đỏ chỉ ra các mặt hàng đang giảm giá."
          }
        },
        {
          "role": "user",
          "text": "Okay, I’ll look for the red tags.",
          "translations": {
            "ko": "알겠습니다, 빨간 태그를 찾아볼게요.",
            "zh": "好的，我会找红色标签的商品。",
            "ja": "了解しました、赤いタグを探します。",
            "vi": "Được, tôi sẽ tìm những nhãn màu đỏ."
          }
        },
        {
          "role": "ai",
          "text": "Would you like help finding the best deals?",
          "translations": {
            "ko": "최고의 거래를 찾는 데 도움이 필요하신가요?",
            "zh": "您需要帮助找到最优惠的商品吗？",
            "ja": "最高のお得な商品を見つけるお手伝いをしましょうか？",
            "vi": "Bạn có muốn được giúp tìm những ưu đãi tốt nhất không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, please show me where the best deals are.",
          "translations": {
            "ko": "네, 최고의 거래가 있는 곳을 보여주세요.",
            "zh": "是的，请带我去看看最优惠的商品。",
            "ja": "はい、最高のお得な商品がどこにあるか教えてください。",
            "vi": "Vâng, hãy chỉ cho tôi biết nơi có những ưu đãi tốt nhất."
          }
        },
        {
          "role": "ai",
          "text": "We have limited sizes, so let me know if you need help checking stock.",
          "translations": {
            "ko": "사이즈가 제한적이므로 재고 확인이 필요하시면 알려주세요.",
            "zh": "我们的尺码有限，如果您需要查看库存请告诉我。",
            "ja": "サイズは限られていますので、在庫を確認する際にはお手伝いします。",
            "vi": "Chúng tôi có số lượng kích cỡ giới hạn, vì vậy hãy cho tôi biết nếu bạn cần giúp kiểm tra hàng tồn."
          }
        },
        {
          "role": "user",
          "text": "I’m looking for a size small-can you help?",
          "translations": {
            "ko": "작은 사이즈를 찾고 있는데, 도와주실 수 있나요?",
            "zh": "我在找小号的，你能帮我吗？",
            "ja": "Sサイズを探しています、お手伝いいただけますか？",
            "vi": "Tôi đang tìm kích cỡ nhỏ - bạn có thể giúp tôi không?"
          }
        },
        {
          "role": "ai",
          "text": "Some discounts are applied at checkout, so don’t worry if it’s not on the tag.",
          "translations": {
            "ko": "일부 할인은 계산 시 적용되므로 태그에 표시되지 않아도 걱정하지 마세요.",
            "zh": "有些折扣在结账时才会体现，所以如果标签上没有，也不用担心。",
            "ja": "一部の割引はレジで適用されますので、タグに表示されていなくても心配しないでください。",
            "vi": "Một số giảm giá sẽ được áp dụng khi thanh toán, vì vậy đừng lo nếu nó không ghi trên nhãn."
          }
        },
        {
          "role": "user",
          "text": "Got it. Good to know about the checkout discounts.",
          "translations": {
            "ko": "알겠습니다. 체크아웃 할인에 대해 알게 되어 좋네요.",
            "zh": "明白了。了解到结账时有折扣，真好。",
            "ja": "了解しました。レジでの割引について知っておくと便利ですね。",
            "vi": "Đã hiểu. Thật tốt khi biết về các ưu đãi khi thanh toán."
          }
        },
        {
          "role": "ai",
          "text": "Our clearance section is in the back corner.",
          "translations": {
            "ko": "우리의 클리어런스 섹션은 뒤쪽 구석에 있습니다.",
            "zh": "我们的清仓区在后面的角落。",
            "ja": "クリアランス商品は店の奥の角にあります。",
            "vi": "Khu hàng giảm giá của chúng tôi ở góc sau cùng."
          }
        },
        {
          "role": "user",
          "text": "I’ll check out the clearance section too.",
          "translations": {
            "ko": "클리어런스 섹션도 한번 둘러볼게요.",
            "zh": "我也会去看看清仓区的。",
            "ja": "クリアランス商品もチェックしてみます。",
            "vi": "Tôi sẽ xem qua khu hàng giảm giá."
          }
        },
        {
          "role": "ai",
          "text": "We also have bundle deals on accessories.",
          "translations": {
            "ko": "우리는 액세서리에 번들 딜도 있습니다.",
            "zh": "我们的配件还有套餐优惠。",
            "ja": "アクセサリーもセット販売のお得なプランがあります。",
            "vi": "Chúng tôi cũng có các gói ưu đãi cho phụ kiện."
          }
        },
        {
          "role": "user",
          "text": "Oh, I might get some accessories then.",
          "translations": {
            "ko": "오, 그럼 액세서리도 좀 사볼까요.",
            "zh": "哦，那我可能会买一些配件。",
            "ja": "ああ、それならアクセサリーも買ってみようかな。",
            "vi": "Ồ, vậy thì tôi có thể mua một số phụ kiện."
          }
        },
        {
          "role": "ai",
          "text": "Want me to hold any items while you shop?",
          "translations": {
            "ko": "쇼핑하는 동안 물건을 보관해 드릴까요?",
            "zh": "你需要我帮你留着什么商品吗？",
            "ja": "買い物中に何か商品をお預かりしましょうか？",
            "vi": "Bạn có muốn tôi giữ một số mặt hàng trong khi bạn mua sắm không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, please hold this jacket for me.",
          "translations": {
            "ko": "네, 이 재킷 좀 보관해 주세요.",
            "zh": "是的，请帮我留着这件夹克。",
            "ja": "はい、このジャケットを預けてください。",
            "vi": "Vâng, xin vui lòng giữ chiếc áo khoác này cho tôi."
          }
        },
        {
          "role": "ai",
          "text": "Let me know if you’re looking for something specific.",
          "translations": {
            "ko": "특정한 물건을 찾고 계신다면 알려주세요.",
            "zh": "如果你在找特定的东西，告诉我。",
            "ja": "特定の商品をお探しでしたらお知らせください。",
            "vi": "Hãy cho tôi biết nếu bạn đang tìm kiếm một mặt hàng cụ thể."
          }
        },
        {
          "role": "user",
          "text": "I’m after a new coat-any suggestions?",
          "translations": {
            "ko": "새로운 코트를 찾고 있어요-추천해주실만한 게 있나요?",
            "zh": "我想买一件新大衣，有什么建议吗？",
            "ja": "新しいコートを探しています-何かおすすめはありますか？",
            "vi": "Tôi đang tìm một chiếc áo khoác mới - có gợi ý nào không?"
          }
        }
      ]
    },
    {
      "description": {
        "ko": "결함 있는 제품 처리하기",
        "zh": "处理有问题的商品",
        "ja": "不良品の対応",
        "vi": "Đối phó với một mặt hàng hỏng"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "I’m sorry to hear that. Can you show me the issue?",
          "translations": {
            "ko": "그런 일이 있었다니 죄송합니다. 문제가 무엇인지 보여주실 수 있나요?",
            "zh": "很抱歉听到这个。你能告诉我问题在哪吗？",
            "ja": "それは申し訳ありません。問題を教えていただけますか？",
            "vi": "Tôi rất tiếc khi nghe điều đó. Bạn có thể cho tôi xem vấn đề không?"
          }
        },
        {
          "role": "user",
          "text": "Hi, this item turned out to be damaged.",
          "translations": {
            "ko": "안녕하세요, 이 제품이 손상된 것 같아요.",
            "zh": "嗨，这个商品有破损。",
            "ja": "こんにちは、この商品が壊れていることがわかりました。",
            "vi": "Chào, mặt hàng này hóa ra bị hỏng."
          }
        },
        {
          "role": "ai",
          "text": "Was it like this when you first opened it?",
          "translations": {
            "ko": "처음 열었을 때부터 이랬나요?",
            "zh": "你刚打开的时候就是这样的吗？",
            "ja": "初めて開けたときからこの状態でしたか？",
            "vi": "Nó đã như vậy khi bạn mở ra lần đầu tiên chưa?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I noticed it right after unboxing it.",
          "translations": {
            "ko": "네, 개봉하자마자 바로 알아챘어요.",
            "zh": "是的，我在拆箱后就发现了。",
            "ja": "はい、開封直後に気づきました。",
            "vi": "Vâng, tôi đã nhận ra ngay sau khi mở hộp."
          }
        },
        {
          "role": "ai",
          "text": "Do you still have the original packaging or receipt?",
          "translations": {
            "ko": "원래의 포장이나 영수증이 아직 있나요?",
            "zh": "你还保留着原包装或收据吗？",
            "ja": "元の包装やレシートはまだお持ちですか？",
            "vi": "Bạn có còn giữ bao bì gốc hoặc hóa đơn không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I brought the receipt with me.",
          "translations": {
            "ko": "네, 영수증을 가지고 왔어요.",
            "zh": "是的，我带来了收据。",
            "ja": "はい、レシートを持ってきています。",
            "vi": "Vâng, tôi đã mang theo hóa đơn."
          }
        },
        {
          "role": "ai",
          "text": "We’ll gladly exchange it or issue a refund.",
          "translations": {
            "ko": "기꺼이 교환하거나 환불해 드리겠습니다.",
            "zh": "我们很愿意为您换货或退款。",
            "ja": "喜んで交換または返金を行います。",
            "vi": "Chúng tôi sẽ rất vui lòng đổi hàng hoặc hoàn tiền."
          }
        },
        {
          "role": "user",
          "text": "An exchange would be good, thanks.",
          "translations": {
            "ko": "교환해주시면 좋겠습니다, 감사합니다.",
            "zh": "换货就好，谢谢。",
            "ja": "交換をお願いします、ありがとう。",
            "vi": "Việc đổi hàng sẽ tốt, cảm ơn."
          }
        },
        {
          "role": "ai",
          "text": "Would you like us to inspect a replacement item for you?",
          "translations": {
            "ko": "대체품을 저희가 검사해 드릴까요?",
            "zh": "你希望我们为你检查一下替换的商品吗？",
            "ja": "代替品をご確認いただきますか？",
            "vi": "Bạn có muốn chúng tôi kiểm tra một mặt hàng thay thế cho bạn không?"
          }
        },
        {
          "role": "user",
          "text": "That’d be great-just to be safe.",
          "translations": {
            "ko": "그러면 좋겠네요-안전을 위해요.",
            "zh": "那太好了，以防万一。",
            "ja": "それはありがたいです-安全のために。",
            "vi": "Điều đó thật tốt - chỉ để đảm bảo."
          }
        },
        {
          "role": "ai",
          "text": "We’ll make sure the next one meets expectations.",
          "translations": {
            "ko": "다음 제품이 기대에 부응하도록 확인하겠습니다.",
            "zh": "我们会确保下一个商品符合您的期望。",
            "ja": "次の商品が期待に応えるように確認します。",
            "vi": "Chúng tôi sẽ đảm bảo mặt hàng tiếp theo đáp ứng yêu cầu."
          }
        },
        {
          "role": "user",
          "text": "Appreciate you checking it for me.",
          "translations": {
            "ko": "점검해주셔서 감사합니다.",
            "zh": "感谢你帮我检查。",
            "ja": "確認していただきありがとうございます。",
            "vi": "Cảm ơn bạn đã kiểm tra cho tôi."
          }
        },
        {
          "role": "ai",
          "text": "Sorry again for the inconvenience.",
          "translations": {
            "ko": "다시 한번 불편을 끼쳐드려 죄송합니다.",
            "zh": "再次为给您带来的不便表示歉意。",
            "ja": "また、ご迷惑をおかけして申し訳ありません。",
            "vi": "Xin lỗi một lần nữa vì sự bất tiện này."
          }
        },
        {
          "role": "user",
          "text": "It happens. Thanks for handling it.",
          "translations": {
            "ko": "그럴 수도 있죠. 처리해주셔서 감사합니다.",
            "zh": "这种事情有时候会发生。谢谢你的处理。",
            "ja": "仕方ないですね。対応していただきありがとうございます。",
            "vi": "Điều đó xảy ra. Cảm ơn bạn đã xử lý."
          }
        },
        {
          "role": "ai",
          "text": "We can also report this to the supplier if you'd like.",
          "translations": {
            "ko": "공급업체에 이 문제를 보고하고 싶으시다면 저희가 대신 보고할 수도 있습니다.",
            "zh": "如果你愿意，我们也可以向供应商报告这个问题。",
            "ja": "ご希望であれば、この件を供給者に報告することもできます。",
            "vi": "Chúng tôi cũng có thể báo cáo điều này cho nhà cung cấp nếu bạn muốn."
          }
        },
        {
          "role": "user",
          "text": "Yes, that would be good to report.",
          "translations": {
            "ko": "네, 보고하는 것이 좋을 것 같아요.",
            "zh": "是的，向供应商报告这个问题是好的。",
            "ja": "はい、報告していただけるとありがたいです。",
            "vi": "Vâng, sẽ tốt nếu báo cáo điều đó."
          }
        },
        {
          "role": "ai",
          "text": "Can I get your contact info for the report?",
          "translations": {
            "ko": "보고서를 위해 연락처를 알려주실 수 있나요?",
            "zh": "我可以获取你的联系信息以便报告吗？",
            "ja": "報告のためにお客様の連絡先を教えていただけますか？",
            "vi": "Tôi có thể lấy thông tin liên lạc của bạn để báo cáo không?"
          }
        },
        {
          "role": "user",
          "text": "Sure, here’s my phone number.",
          "translations": {
            "ko": "네, 제 전화번호입니다.",
            "zh": "当然，这是我的电话号码。",
            "ja": "はい、こちらが私の電話番号です。",
            "vi": "Chắc chắn, đây là số điện thoại của tôi."
          }
        },
        {
          "role": "ai",
          "text": "Thanks for bringing this to our attention.",
          "translations": {
            "ko": "이 문제를 알려주셔서 감사합니다.",
            "zh": "感谢你把这个问题告诉我们。",
            "ja": "この件をご報告いただきありがとうございます。",
            "vi": "Cảm ơn bạn đã đưa vấn đề này đến sự chú ý của chúng tôi."
          }
        },
        {
          "role": "user",
          "text": "Thanks for your help today.",
          "translations": {
            "ko": "오늘 도와주셔서 감사합니다.",
            "zh": "感谢你今天的帮助。",
            "ja": "今日はお手伝いいただきありがとうございました。",
            "vi": "Cảm ơn sự giúp đỡ của bạn hôm nay."
          }
        }
      ]
    }
  ],
  "advanced": [
    {
      "description": {
        "ko": "맞춤 정장 상담 요청",
        "zh": "请求定制西装咨询",
        "ja": "オーダーメイドスーツの相談を申し込む",
        "vi": "Yêu cầu tư vấn may đo bộ vest"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Welcome. Are you here for a tailoring consultation?",
          "translations": {
            "ko": "환영합니다. 맞춤 정장 상담을 위해 오셨나요?",
            "zh": "欢迎。您是来咨询定制西装的吗？",
            "ja": "いらっしゃいませ。お仕立ての相談にいらっしゃいましたか？",
            "vi": "Chào mừng. Anh đến đây để tư vấn may đo?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I’d like to get a custom suit made.",
          "translations": {
            "ko": "네, 맞춤 정장을 만들고 싶습니다.",
            "zh": "是的，我想定制一套西装。",
            "ja": "はい、オーダーメイドのスーツを作りたいと思っています。",
            "vi": "Vâng, tôi muốn đặt may một bộ vest."
          }
        },
        {
          "role": "ai",
          "text": "Do you have a particular occasion in mind for the suit?",
          "translations": {
            "ko": "이 정장을 입을 특별한 행사가 있나요?",
            "zh": "您定制这套西装有特定的场合吗？",
            "ja": "そのスーツは特定の場面で着る予定ですか？",
            "vi": "Anh có dự định mặc bộ vest này vào dịp gì đặc biệt không?"
          }
        },
        {
          "role": "user",
          "text": "It’s for an upcoming business conference.",
          "translations": {
            "ko": "다가오는 비즈니스 회의를 위한 것입니다.",
            "zh": "这是为了即将到来的商务会议。",
            "ja": "近日開催されるビジネス会議用です。",
            "vi": "Nó dành cho một hội nghị kinh doanh sắp tới."
          }
        },
        {
          "role": "ai",
          "text": "We offer a range of fabrics, including wool blends and linens.",
          "translations": {
            "ko": "우리는 울 혼방과 리넨 등 다양한 원단을 제공합니다.",
            "zh": "我们提供各种面料，包括羊毛混纺和亚麻。",
            "ja": "ウール混紡やリネンなど、さまざまな生地をご用意しています。",
            "vi": "Chúng tôi cung cấp nhiều loại vải, bao gồm các loại vải len và vải lanh."
          }
        },
        {
          "role": "user",
          "text": "I’m interested in something lightweight but formal.",
          "translations": {
            "ko": "가벼우면서도 공식적인 것을 찾고 있습니다.",
            "zh": "我想要一款轻便但正式的款式。",
            "ja": "軽量でありながらフォーマルなものに興味があります。",
            "vi": "Tôi quan tâm đến loại vải nhẹ nhưng trang trọng."
          }
        },
        {
          "role": "ai",
          "text": "Would you prefer a classic or modern cut?",
          "translations": {
            "ko": "클래식한 컷이 좋으실까요, 아니면 모던한 컷이 좋으실까요?",
            "zh": "您更喜欢经典款还是现代款？",
            "ja": "クラシックなカットとモダンなカット、どちらがお好みですか？",
            "vi": "Anh thích kiểu dáng cổ điển hay hiện đại?"
          }
        },
        {
          "role": "user",
          "text": "A modern cut would be best.",
          "translations": {
            "ko": "모던한 컷이 좋을 것 같습니다.",
            "zh": "现代款最好。",
            "ja": "モダンなカットが良いです。",
            "vi": "Kiểu dáng hiện đại sẽ phù hợp nhất."
          }
        },
        {
          "role": "ai",
          "text": "Let’s start with some measurements, if that’s okay.",
          "translations": {
            "ko": "측정부터 시작해도 괜찮으실까요?",
            "zh": "如果可以的话，我们先来测量一下尺寸。",
            "ja": "まずは採寸から始めてもよろしいですか？",
            "vi": "Hãy bắt đầu với việc đo kích thước, nếu anh không phiền."
          }
        },
        {
          "role": "user",
          "text": "Sure, go ahead.",
          "translations": {
            "ko": "네, 계속하세요.",
            "zh": "好的，开始吧。",
            "ja": "はい、どうぞ。",
            "vi": "Được, hãy tiếp tục."
          }
        },
        {
          "role": "ai",
          "text": "We can customize lapel style, button count, and lining color.",
          "translations": {
            "ko": "라펠 스타일, 단추 수, 안감 색상 등을 맞춤화할 수 있습니다.",
            "zh": "我们可以定制翻领样式，按钮数量和内衬颜色。",
            "ja": "ラペルのスタイル、ボタンの数、裏地の色などをカスタマイズできます。",
            "vi": "Chúng tôi có thể tùy chỉnh kiểu cổ áo, số lượng nút và màu lót."
          }
        },
        {
          "role": "user",
          "text": "I’d like a peak lapel and two-button front.",
          "translations": {
            "ko": "피크 라펠과 두 개의 단추 프론트를 원합니다.",
            "zh": "我想要一个尖峰翻领和两个按钮的前面。",
            "ja": "ピークラペルと2つボタンのフロントがいいです。",
            "vi": "Tôi muốn cổ áo dạng peak và hai nút phía trước."
          }
        },
        {
          "role": "ai",
          "text": "Do you want to include monogramming or custom stitching?",
          "translations": {
            "ko": "모노그램이나 맞춤 스티칭을 포함하시겠어요?",
            "zh": "您想要包含刺绣或定制缝线吗？",
            "ja": "モノグラムやカスタムステッチを入れますか？",
            "vi": "Anh có muốn thêm chữ viết tắt hay đường chỉ may tùy chỉnh không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I’d like my initials stitched inside the jacket.",
          "translations": {
            "ko": "네, 재킷 안쪽에 제 이니셜을 자수로 넣고 싶습니다.",
            "zh": "是的，我想在夹克内部绣上我的名字首字母。",
            "ja": "はい、ジャケットの内側にイニシャルを刺繍してほしいです。",
            "vi": "Vâng, tôi muốn thêu chữ cái đầu của tên tôi bên trong áo khoác."
          }
        },
        {
          "role": "ai",
          "text": "The turnaround time is typically three to four weeks.",
          "translations": {
            "ko": "일반적으로 제작 기간은 3~4주입니다.",
            "zh": "通常的交货时间是三到四周。",
            "ja": "通常、納品までには3～4週間かかります。",
            "vi": "Thời gian hoàn thành thường là từ ba đến bốn tuần."
          }
        },
        {
          "role": "user",
          "text": "That timeline works for me.",
          "translations": {
            "ko": "그 시간표가 저에게 맞습니다.",
            "zh": "这个时间表对我来说可以接受。",
            "ja": "そのスケジュールで問題ありません。",
            "vi": "Thời gian này phù hợp với tôi."
          }
        },
        {
          "role": "ai",
          "text": "We’ll schedule a fitting once the initial work is complete.",
          "translations": {
            "ko": "초기 작업이 완료되면 피팅을 예약하겠습니다.",
            "zh": "初步工作完成后，我们将安排一次试穿。",
            "ja": "初期作業が完了次第、フィッティングの日程を設定します。",
            "vi": "Chúng tôi sẽ lên lịch thử sau khi công việc ban đầu hoàn thành."
          }
        },
        {
          "role": "user",
          "text": "Sounds good. Please keep me posted.",
          "translations": {
            "ko": "좋습니다. 계속 알려주세요.",
            "zh": "听起来不错。请随时通知我。",
            "ja": "了解しました。進行状況を教えてください。",
            "vi": "Rất tốt. Xin vui lòng thông báo cho tôi."
          }
        },
        {
          "role": "ai",
          "text": "Let me know if you’d like to browse sample designs.",
          "translations": {
            "ko": "샘플 디자인을 둘러보고 싶으시다면 알려주세요.",
            "zh": "如果您想浏览样品设计，请告诉我。",
            "ja": "サンプルデザインをご覧になりたい場合はお知らせください。",
            "vi": "Hãy cho tôi biết nếu anh muốn xem qua một số mẫu thiết kế."
          }
        },
        {
          "role": "user",
          "text": "Yes, I’d like to look through some examples.",
          "translations": {
            "ko": "네, 몇 가지 예시를 살펴보고 싶습니다.",
            "zh": "是的，我想看一些样品。",
            "ja": "はい、いくつかの例を見てみたいです。",
            "vi": "Vâng, tôi muốn xem qua một số mẫu."
          }
        }
      ]
    },
    {
      "description": {
        "ko": "친환경적이고 윤리적인 패션 옵션에 대해 논의",
        "zh": "讨论环保和道德时尚选项",
        "ja": "エコフレンドリーで倫理的なファッションオプションについて話す",
        "vi": "Thảo luận về các lựa chọn thời trang thân thiện với môi trường và đạo đức"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Welcome. Are you interested in our sustainable fashion line?",
          "translations": {
            "ko": "환영합니다. 우리의 지속 가능한 패션 라인에 관심이 있으신가요?",
            "zh": "欢迎。您对我们的可持续时尚系列感兴趣吗？",
            "ja": "いらっしゃいませ。私たちのサステナブルファッションラインに興味がありますか？",
            "vi": "Chào mừng. Anh có quan tâm đến dòng thời trang bền vững của chúng tôi không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I’m trying to shop more sustainably.",
          "translations": {
            "ko": "네, 더 지속 가능하게 쇼핑하려고 합니다.",
            "zh": "是的，我正在尝试更可持续的购物方式。",
            "ja": "はい、より持続可能な方法で買い物をしようと思っています。",
            "vi": "Vâng, tôi đang cố gắng mua sắm một cách bền vững hơn."
          }
        },
        {
          "role": "ai",
          "text": "We carry brands that use organic and recycled materials.",
          "translations": {
            "ko": "우리는 유기농 및 재활용 재료를 사용하는 브랜드를 취급합니다.",
            "zh": "我们销售使用有机和回收材料的品牌。",
            "ja": "当店では、有機素材やリサイクル素材を使用したブランドを取り扱っています。",
            "vi": "Chúng tôi cung cấp các thương hiệu sử dụng vật liệu hữu cơ và tái chế."
          }
        },
        {
          "role": "user",
          "text": "That sounds great. I care about material sourcing.",
          "translations": {
            "ko": "좋군요. 저는 재료의 출처에 신경 씁니다.",
            "zh": "听起来很好。我关心材料的来源。",
            "ja": "それは素晴らしいですね。素材の調達には気を使っています。",
            "vi": "Điều đó rất tốt. Tôi quan tâm đến nguồn gốc vật liệu."
          }
        },
        {
          "role": "ai",
          "text": "Would you prefer items that are locally produced?",
          "translations": {
            "ko": "현지에서 생산된 제품을 선호하시나요?",
            "zh": "您更喜欢本地生产的商品吗？",
            "ja": "地元で生産された商品をお求めですか？",
            "vi": "Anh có thích các sản phẩm được sản xuất tại địa phương không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, local production is important to me.",
          "translations": {
            "ko": "네, 현지 생산이 중요합니다.",
            "zh": "是的，本地生产对我来说很重要。",
            "ja": "はい、地元生産は私にとって重要です。",
            "vi": "Vâng, sản xuất địa phương rất quan trọng đối với tôi."
          }
        },
        {
          "role": "ai",
          "text": "All of these products are certified fair trade.",
          "translations": {
            "ko": "이 모든 제품들은 공정 무역 인증을 받았습니다.",
            "zh": "这些产品都是公平贸易认证的。",
            "ja": "これらの商品はすべてフェアトレード認証を受けています。",
            "vi": "Tất cả các sản phẩm này đều được chứng nhận thương mại công bằng."
          }
        },
        {
          "role": "user",
          "text": "Good to know. Fair trade is a must for me.",
          "translations": {
            "ko": "알겠습니다. 저에게는 공정 무역이 필수입니다.",
            "zh": "很好知道。对我来说，公平贸易是必须的。",
            "ja": "それは良い知らせです。私にとってフェアトレードは必須です。",
            "vi": "Rất tốt. Thương mại công bằng là điều tôi cần."
          }
        },
        {
          "role": "ai",
          "text": "We also track the carbon footprint for each garment.",
          "translations": {
            "ko": "우리는 각 의류의 탄소 발자국도 추적합니다.",
            "zh": "我们也会追踪每件服装的碳足迹。",
            "ja": "私たちは各衣類のカーボンフットプリントも追跡しています。",
            "vi": "Chúng tôi cũng theo dõi lượng khí thải carbon cho mỗi sản phẩm may mặc."
          }
        },
        {
          "role": "user",
          "text": "That’s impressive. I’d like to see more details.",
          "translations": {
            "ko": "그게 인상적이네요. 더 자세한 내용을 보고 싶습니다.",
            "zh": "这真令人印象深刻。我想看更多的细节。",
            "ja": "それは素晴らしいですね。詳細をもっと見てみたいです。",
            "vi": "Thật ấn tượng. Tôi muốn xem thêm chi tiết."
          }
        },
        {
          "role": "ai",
          "text": "Would you like to see pieces made with plant-based dyes?",
          "translations": {
            "ko": "식물성 염료로 만든 제품들을 보시겠어요?",
            "zh": "你想看看用植物染料制成的服装吗？",
            "ja": "植物ベースの染料で作られたアイテムを見てみたいですか？",
            "vi": "Bạn có muốn xem những món đồ được làm bằng thuốc nhuộm từ thực vật không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I’m curious about those natural dye items.",
          "translations": {
            "ko": "네, 그런 천연 염료 제품에 대해 궁금합니다.",
            "zh": "是的，我对那些天然染料的物品很好奇。",
            "ja": "はい、その自然な染料のアイテムに興味があります。",
            "vi": "Vâng, tôi tò mò về những món đồ nhuộm tự nhiên này."
          }
        },
        {
          "role": "ai",
          "text": "This display features items with biodegradable packaging.",
          "translations": {
            "ko": "이 전시는 생분해 가능한 포장을 사용한 제품들을 선보입니다.",
            "zh": "这个展示区展示的是使用可生物降解包装的商品。",
            "ja": "このディスプレイは、生分解可能なパッケージのアイテムを特集しています。",
            "vi": "Trưng bày này giới thiệu những món đồ có bao bì phân hủy sinh học."
          }
        },
        {
          "role": "user",
          "text": "I appreciate the eco-friendly packaging.",
          "translations": {
            "ko": "친환경 포장에 감사드립니다.",
            "zh": "我很欣赏这种环保的包装。",
            "ja": "環境に優しいパッケージに感謝しています。",
            "vi": "Tôi đánh giá cao việc sử dụng bao bì thân thiện với môi trường."
          }
        },
        {
          "role": "ai",
          "text": "Would you like information on the brand’s labor practices?",
          "translations": {
            "ko": "브랜드의 노동 관행에 대한 정보를 원하시나요?",
            "zh": "你想了解这个品牌的劳动实践吗？",
            "ja": "ブランドの労働慣行についての情報が欲しいですか？",
            "vi": "Bạn có muốn thông tin về quy định lao động của thương hiệu không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I’d like to know how the workers are treated.",
          "translations": {
            "ko": "네, 노동자들이 어떻게 대우받는지 알고 싶습니다.",
            "zh": "是的，我想知道工人是如何被对待的。",
            "ja": "はい、労働者がどのように扱われているか知りたいです。",
            "vi": "Vâng, tôi muốn biết người lao động được đối xử như thế nào."
          }
        },
        {
          "role": "ai",
          "text": "We also have QR codes you can scan for supply chain details.",
          "translations": {
            "ko": "또한 공급망 세부사항을 확인할 수 있는 QR 코드도 있습니다.",
            "zh": "我们还有你可以扫描的二维码，以获取供应链的详细信息。",
            "ja": "供給チェーンの詳細をスキャンできるQRコードもあります。",
            "vi": "Chúng tôi cũng có mã QR mà bạn có thể quét để biết chi tiết về chuỗi cung ứng."
          }
        },
        {
          "role": "user",
          "text": "That’s convenient. I’ll scan a few now.",
          "translations": {
            "ko": "편리하네요. 지금 몇 개를 스캔해볼게요.",
            "zh": "这很方便。我现在就扫描几个。",
            "ja": "それは便利ですね。今すぐいくつかスキャンします。",
            "vi": "Thật tiện lợi. Tôi sẽ quét một số ngay bây giờ."
          }
        },
        {
          "role": "ai",
          "text": "Let me know if you’d like help selecting based on your values.",
          "translations": {
            "ko": "가치에 따라 선택하는 데 도움이 필요하시면 알려주세요.",
            "zh": "如果你想根据你的价值观选择商品，就告诉我。",
            "ja": "あなたの価値観に基づいて選択するのを手伝うことが必要なら、お知らせください。",
            "vi": "Hãy cho tôi biết nếu bạn muốn được giúp đỡ lựa chọn dựa trên giá trị của bạn."
          }
        },
        {
          "role": "user",
          "text": "Thanks, I’ll definitely ask if I need help.",
          "translations": {
            "ko": "감사합니다, 도움이 필요하면 꼭 요청하겠습니다.",
            "zh": "谢谢，如果我需要帮助，我一定会问的。",
            "ja": "ありがとう、助けが必要なときは必ず頼みます。",
            "vi": "Cảm ơn, tôi sẽ chắc chắn hỏi nếu tôi cần giúp đỡ."
          }
        }
      ]
    },
    {
      "description": {
        "ko": "전문가에게 스타일링 조언을 요청하기",
        "zh": "向专业人士请求造型建议",
        "ja": "プロフェッショナルからのスタイリングアドバイスをリクエストする",
        "vi": "Yêu cầu lời khuyên về phong cách từ một chuyên gia"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Welcome. Would you like help building an outfit today?",
          "translations": {
            "ko": "환영합니다. 오늘 옷차림을 구성하는 데 도움이 필요하신가요?",
            "zh": "欢迎光临。你今天需要帮助搭配服装吗？",
            "ja": "ようこそ。今日はコーディネートのお手伝いをしましょうか？",
            "vi": "Chào mừng. Bạn có muốn được giúp đỡ để lựa chọn trang phục hôm nay không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I need help putting something together.",
          "translations": {
            "ko": "네, 옷차림을 구성하는 데 도움이 필요합니다.",
            "zh": "是的，我需要帮助搭配一套服装。",
            "ja": "はい、何かをまとめるのに助けが必要です。",
            "vi": "Vâng, tôi cần giúp đỡ để lựa chọn trang phục."
          }
        },
        {
          "role": "ai",
          "text": "What type of occasion are you shopping for?",
          "translations": {
            "ko": "어떤 행사를 위해 쇼핑하시나요?",
            "zh": "你是为了什么场合购物？",
            "ja": "どのような場面で着る服を探していますか？",
            "vi": "Bạn đang mua sắm cho dịp gì?"
          }
        },
        {
          "role": "user",
          "text": "I’m attending a networking event next week.",
          "translations": {
            "ko": "다음 주에 네트워킹 이벤트에 참석합니다.",
            "zh": "我下周要参加一个社交活动。",
            "ja": "来週、ネットワーキングイベントに参加します。",
            "vi": "Tôi sẽ tham dự một sự kiện giao lưu kết nối tuần sau."
          }
        },
        {
          "role": "ai",
          "text": "Let’s start with a few staple pieces you can mix and match.",
          "translations": {
            "ko": "먼저 여러 가지로 활용할 수 있는 기본 아이템부터 시작해봅시다.",
            "zh": "让我们从一些你可以混搭的基础单品开始。",
            "ja": "ミックスアンドマッチできるいくつかのステープルピースから始めましょう。",
            "vi": "Hãy bắt đầu với một số món đồ cơ bản mà bạn có thể phối hợp."
          }
        },
        {
          "role": "user",
          "text": "That sounds great. I want something flexible.",
          "translations": {
            "ko": "좋은 생각 같아요. 유연하게 활용할 수 있는 것을 원합니다.",
            "zh": "听起来不错。我想要一些灵活的选择。",
            "ja": "それは素晴らしいですね。柔軟性のあるものが欲しいです。",
            "vi": "Nghe có vẻ tốt. Tôi muốn một cái gì đó linh hoạt."
          }
        },
        {
          "role": "ai",
          "text": "Are you open to trying a new style or color palette?",
          "translations": {
            "ko": "새로운 스타일이나 색상 팔레트를 시도해보시겠어요?",
            "zh": "你愿意尝试新的风格或色彩搭配吗？",
            "ja": "新しいスタイルやカラーパレットを試してみることに開放的ですか？",
            "vi": "Bạn có muốn thử một phong cách hoặc bảng màu mới không?"
          }
        },
        {
          "role": "user",
          "text": "Sure, I’m open to exploring new options.",
          "translations": {
            "ko": "그럼요, 새로운 옵션을 탐색하는 것에 열려 있습니다.",
            "zh": "当然，我愿意探索新的选择。",
            "ja": "はい、新しいオプションを探ることに開放的です。",
            "vi": "Chắc chắn, tôi muốn khám phá những lựa chọn mới."
          }
        },
        {
          "role": "ai",
          "text": "How do you usually like your clothes to fit?",
          "translations": {
            "ko": "보통 어떤 핏의 옷을 선호하시나요?",
            "zh": "你通常喜欢你的衣服怎样的版型？",
            "ja": "通常、どのように服を着るのが好きですか？",
            "vi": "Bạn thường thích quần áo của mình vừa vặn như thế nào?"
          }
        },
        {
          "role": "user",
          "text": "I like a tailored fit, not too tight.",
          "translations": {
            "ko": "너무 타이트하지 않은 맞춤 핏을 좋아합니다.",
            "zh": "我喜欢合身的版型，不要太紧。",
            "ja": "私はテーラードフィットが好きで、あまりきつくない方がいいです。",
            "vi": "Tôi thích kiểu dáng chuẩn, không quá chật."
          }
        },
        {
          "role": "ai",
          "text": "This blazer is versatile and works for both casual and formal settings.",
          "translations": {
            "ko": "이 블레이저는 다재다능하며 캐주얼한 장소와 공식적인 장소 모두에 적합합니다.",
            "zh": "这件西装外套很百搭，适合休闲和正式场合。",
            "ja": "このブレザーは汎用性があり、カジュアルでもフォーマルでも使えます。",
            "vi": "Chiếc blazer này rất linh hoạt và phù hợp cho cả môi trường thông thường và chính thức."
          }
        },
        {
          "role": "user",
          "text": "I like the sound of that. Let me try it on.",
          "translations": {
            "ko": "그게 좋네요. 한번 입어봐야겠습니다.",
            "zh": "我喜欢这个。让我试试看。",
            "ja": "それはいいですね。試着してみます。",
            "vi": "Tôi thích nghe điều đó. Để tôi thử nó."
          }
        },
        {
          "role": "ai",
          "text": "Would you like accessories to complete the look?",
          "translations": {
            "ko": "룩을 완성시키는 액세서리를 원하시나요?",
            "zh": "你想要一些配饰来完成这个造型吗？",
            "ja": "ルックを完成させるアクセサリーはいかがですか？",
            "vi": "Bạn có muốn phụ kiện để hoàn thiện vẻ ngoài không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, some accessories would be good.",
          "translations": {
            "ko": "네, 액세서리가 좋을 것 같아요.",
            "zh": "是的，一些配饰会很好。",
            "ja": "はい、アクセサリーがあるといいですね。",
            "vi": "Vâng, một số phụ kiện sẽ tốt."
          }
        },
        {
          "role": "ai",
          "text": "I can also recommend shoes that go well with this outfit.",
          "translations": {
            "ko": "이 옷차림에 잘 어울리는 신발도 추천해드릴 수 있습니다.",
            "zh": "我也可以推荐和这套衣服搭配的鞋子。",
            "ja": "この服装に合う靴もおすすめできます。",
            "vi": "Tôi cũng có thể giới thiệu những đôi giày phù hợp với bộ trang phục này."
          }
        },
        {
          "role": "user",
          "text": "That’d be helpful. I never know what shoes to pick.",
          "translations": {
            "ko": "그게 도움이 될 것 같아요. 어떤 신발을 고를지 항상 모르겠어요.",
            "zh": "那会很有帮助。我总是不知道该选什么鞋。",
            "ja": "それは助かります。どの靴を選べばいいかいつもわからないんです。",
            "vi": "Điều đó sẽ hữu ích. Tôi không bao giờ biết nên chọn đôi giày nào."
          }
        },
        {
          "role": "ai",
          "text": "Would you prefer to try everything on now or later?",
          "translations": {
            "ko": "지금 모든 것을 다 입어보시겠어요, 아니면 나중에 해보시겠어요?",
            "zh": "你想现在试穿还是稍后试穿？",
            "ja": "すぐにすべて試着したいですか、それとも後で試着しますか？",
            "vi": "Bạn có muốn thử tất cả mọi thứ ngay bây giờ hay sau không?"
          }
        },
        {
          "role": "user",
          "text": "I’ll try them on now, thanks.",
          "translations": {
            "ko": "지금 입어볼게요, 감사합니다.",
            "zh": "我现在就试试，谢谢。",
            "ja": "今すぐ試着してみます、ありがとうございます。",
            "vi": "Tôi sẽ thử chúng ngay bây giờ, cảm ơn."
          }
        },
        {
          "role": "ai",
          "text": "Feel free to let me know what makes you most comfortable.",
          "translations": {
            "ko": "가장 편안하게 느끼는 것이 무엇인지 언제든지 알려주세요.",
            "zh": "请随时告诉我你最舒适的方式。",
            "ja": "何が最も快適なのか、遠慮なく教えてください。",
            "vi": "Hãy thoải mái cho tôi biết điều gì khiến bạn cảm thấy thoải mái nhất."
          }
        },
        {
          "role": "user",
          "text": "I appreciate your thoughtful approach!",
          "translations": {
            "ko": "세심한 접근 방식에 감사드립니다!",
            "zh": "我很欣赏你深思熟虑的方式！",
            "ja": "あなたの思慮深いアプローチに感謝します！",
            "vi": "Tôi đánh giá cao cách tiếp cận chu đáo của bạn!"
          }
        }
      ]
    },
    {
      "description": {
        "ko": "고급 브랜드와의 멤버십 혜택 논의",
        "zh": "与豪华品牌讨论会员特权",
        "ja": "ラグジュアリーブランドとの会員特典について話し合う",
        "vi": "Thảo luận về các ưu đãi thành viên với một thương hiệu sang trọng"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Thank you for visiting. Are you a loyalty program member?",
          "translations": {
            "ko": "방문해주셔서 감사합니다. 로열티 프로그램 회원이신가요?",
            "zh": "谢谢你的光临。你是我们的忠诚计划会员吗？",
            "ja": "ご来店いただきありがとうございます。ロイヤルティプログラムの会員ですか？",
            "vi": "Cảm ơn bạn đã ghé thăm. Bạn có phải là thành viên của chương trình khách hàng thân thiết không?"
          }
        },
        {
          "role": "user",
          "text": "Not yet, but I’ve been thinking about joining.",
          "translations": {
            "ko": "아직 아니지만, 가입을 고려하고 있습니다.",
            "zh": "还不是，但我一直在考虑加入。",
            "ja": "まだですが、入会を考えています。",
            "vi": "Chưa, nhưng tôi đã nghĩ đến việc tham gia."
          }
        },
        {
          "role": "ai",
          "text": "We offer exclusive previews and early access for members.",
          "translations": {
            "ko": "회원들에게는 독점적인 미리보기와 선착순 접근을 제공합니다.",
            "zh": "我们为会员提供独家预览和提前购买的机会。",
            "ja": "会員の方には独占的なプレビューや早期アクセスを提供しています。",
            "vi": "Chúng tôi cung cấp độc quyền xem trước và quyền truy cập sớm cho thành viên."
          }
        },
        {
          "role": "user",
          "text": "That sounds appealing, especially early access.",
          "translations": {
            "ko": "특히 선착순 접근이 매력적으로 보입니다.",
            "zh": "这听起来很吸引人，尤其是提前购买的权利。",
            "ja": "それは魅力的ですね、特に早期アクセスは。",
            "vi": "Điều đó nghe rất hấp dẫn, đặc biệt là quyền truy cập sớm."
          }
        },
        {
          "role": "ai",
          "text": "Members also receive invitations to private events and launches.",
          "translations": {
            "ko": "회원들은 개인 이벤트와 출시 행사에 초대장을 받게 됩니다.",
            "zh": "会员还会收到私人活动和新品发布会的邀请。",
            "ja": "会員の方にはプライベートイベントや新製品の発売に招待状を送ります。",
            "vi": "Thành viên cũng nhận được lời mời đến các sự kiện và ra mắt sản phẩm riêng tư."
          }
        },
        {
          "role": "user",
          "text": "I do like exclusive event invitations.",
          "translations": {
            "ko": "독점적인 이벤트 초대장이 좋습니다.",
            "zh": "我确实喜欢独家活动的邀请。",
            "ja": "独占的なイベントへの招待は好きですね。",
            "vi": "Tôi thích nhận lời mời đến các sự kiện độc quyền."
          }
        },
        {
          "role": "ai",
          "text": "Do you travel often? We have global member benefits.",
          "translations": {
            "ko": "자주 여행하시나요? 전세계 회원 혜택이 있습니다.",
            "zh": "你经常旅行吗？我们有全球会员福利。",
            "ja": "よく旅行されますか？私たちはグローバルな会員特典を提供しています。",
            "vi": "Bạn có thường xuyên đi du lịch không? Chúng tôi có các lợi ích cho thành viên toàn cầu."
          }
        },
        {
          "role": "user",
          "text": "Yes, I travel frequently for work.",
          "translations": {
            "ko": "네, 일 때문에 자주 여행합니다.",
            "zh": "是的，我经常因工作而旅行。",
            "ja": "はい、仕事で頻繁に旅行します。",
            "vi": "Vâng, tôi thường xuyên đi công tác."
          }
        },
        {
          "role": "ai",
          "text": "You can earn points on every purchase and redeem them later.",
          "translations": {
            "ko": "모든 구매에서 포인트를 적립하고 나중에 사용할 수 있습니다.",
            "zh": "你可以在每次购物时赚取积分，然后再兑换。",
            "ja": "すべての購入でポイントを獲得し、後でそれを利用することができます。",
            "vi": "Bạn có thể kiếm điểm trên mỗi lần mua hàng và đổi chúng sau."
          }
        },
        {
          "role": "user",
          "text": "I like the idea of earning and using points.",
          "translations": {
            "ko": "포인트를 적립하고 사용하는 아이디어가 좋습니다.",
            "zh": "我喜欢赚取和使用积分的想法。",
            "ja": "ポイントを獲得して利用するというアイデアが気に入りました。",
            "vi": "Tôi thích ý tưởng kiếm và sử dụng điểm."
          }
        },
        {
          "role": "ai",
          "text": "Would you like a dedicated stylist for future visits?",
          "translations": {
            "ko": "다음 방문을 위해 전문 스타일리스트를 원하시나요?",
            "zh": "你希望在未来的访问中有一个专属的造型师吗？",
            "ja": "次回の訪問のために専属のスタイリストをご希望ですか？",
            "vi": "Bạn có muốn có một nhà tạo mẫu riêng cho các lần ghé thăm sau không?"
          }
        },
        {
          "role": "user",
          "text": "That would be amazing-personalized service sounds great.",
          "translations": {
            "ko": "그것이 좋을 것 같아요-개인화된 서비스가 좋습니다.",
            "zh": "那太棒了，个性化服务听起来很好。",
            "ja": "それは素晴らしいですね、パーソナライズされたサービスは魅力的です。",
            "vi": "Điều đó thật tuyệt vời - dịch vụ cá nhân hóa nghe có vẻ tốt."
          }
        },
        {
          "role": "ai",
          "text": "We can store your preferences for easier shopping next time.",
          "translations": {
            "ko": "다음 번 쇼핑을 더 쉽게 하기 위해 선호하는 것을 저장할 수 있습니다.",
            "zh": "我们可以存储你的偏好，方便你下次购物。",
            "ja": "次回のショッピングを簡単にするために、あなたの好みを保存することができます。",
            "vi": "Chúng tôi có thể lưu trữ sở thích của bạn để mua sắm dễ dàng hơn lần sau."
          }
        },
        {
          "role": "user",
          "text": "I’d appreciate that for future visits.",
          "translations": {
            "ko": "다음 방문을 위해 그것이 좋을 것 같습니다.",
            "zh": "我很感激这对未来的访问有所帮助。",
            "ja": "それは次回の訪問のためにありがたいです。",
            "vi": "Tôi sẽ rất biết ơn điều đó cho các lần ghé thăm sau."
          }
        },
        {
          "role": "ai",
          "text": "Would you like to enroll today and receive your welcome gift?",
          "translations": {
            "ko": "오늘 가입하고 환영 선물을 받으시겠습니까?",
            "zh": "你今天想要注册并领取你的欢迎礼物吗？",
            "ja": "今日登録してウェルカムギフトを受け取りますか？",
            "vi": "Bạn có muốn ghi danh hôm nay và nhận quà chào mừng của mình không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I’ll sign up today.",
          "translations": {
            "ko": "네, 오늘 가입하겠습니다.",
            "zh": "是的，我今天就注册。",
            "ja": "はい、今日登録します。",
            "vi": "Vâng, tôi sẽ đăng ký hôm nay."
          }
        },
        {
          "role": "ai",
          "text": "Enrollment is free and takes only a few minutes.",
          "translations": {
            "ko": "가입은 무료이며 몇 분만 걸립니다.",
            "zh": "注册是免费的，只需要几分钟。",
            "ja": "登録は無料で、数分しかかかりません。",
            "vi": "Việc ghi danh miễn phí và chỉ mất vài phút."
          }
        },
        {
          "role": "user",
          "text": "That’s good to know. Go ahead.",
          "translations": {
            "ko": "알려주셔서 감사합니다. 진행해주세요.",
            "zh": "这个信息很好。那就开始吧。",
            "ja": "それは良い情報ですね。進めてください。",
            "vi": "Thật tốt khi biết điều đó. Hãy tiếp tục."
          }
        },
        {
          "role": "ai",
          "text": "Let me know if you have any questions about the program.",
          "translations": {
            "ko": "프로그램에 대해 궁금한 점이 있으면 알려주세요.",
            "zh": "如果你对这个计划有任何问题，请告诉我。",
            "ja": "プログラムについて質問があれば何でも教えてください。",
            "vi": "Hãy cho tôi biết nếu bạn có bất kỳ câu hỏi nào về chương trình."
          }
        },
        {
          "role": "user",
          "text": "Thanks! I’ll take a look at the brochure later.",
          "translations": {
            "ko": "감사합니다! 나중에 브로셔를 살펴보겠습니다.",
            "zh": "谢谢！我稍后会看一下手册。",
            "ja": "ありがとう！後でパンフレットを見てみます。",
            "vi": "Cảm ơn! Tôi sẽ xem qua cuốn sách hướng dẫn sau."
          }
        }
      ]
    },
    {
      "description": {
        "ko": "가격 매칭 요청",
        "zh": "请求进行价格匹配",
        "ja": "価格の一致を要求する",
        "vi": "Yêu cầu khớp giá"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "I see. Where did you find the lower price?",
          "translations": {
            "ko": "알겠습니다. 어디에서 더 낮은 가격을 찾으셨나요?",
            "zh": "我明白。你在哪里找到的更低的价格？",
            "ja": "なるほど。どこで低価格を見つけましたか？",
            "vi": "Tôi hiểu. Bạn đã tìm thấy giá thấp hơn ở đâu?"
          }
        },
        {
          "role": "user",
          "text": "I found this same item for less on another website.",
          "translations": {
            "ko": "다른 웹사이트에서 이 상품을 더 저렴하게 찾았습니다.",
            "zh": "我在另一个网站上找到了这个相同的商品，价格更低。",
            "ja": "他のウェブサイトでこの同じ商品をもっと安く見つけました。",
            "vi": "Tôi đã tìm thấy mặt hàng giống nhau với giá thấp hơn trên một trang web khác."
          }
        },
        {
          "role": "ai",
          "text": "Do you have a screenshot or link to the listing?",
          "translations": {
            "ko": "해당 목록에 대한 스크린샷이나 링크가 있나요?",
            "zh": "你有截图或链接到该商品的链接吗？",
            "ja": "リストへのスクリーンショットやリンクはありますか？",
            "vi": "Bạn có ảnh chụp màn hình hoặc liên kết đến danh sách không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, here’s the link and screenshot.",
          "translations": {
            "ko": "네, 이게 링크와 스크린샷입니다.",
            "zh": "是的，这是链接和截图。",
            "ja": "はい、こちらがリンクとスクリーンショットです。",
            "vi": "Vâng, đây là liên kết và ảnh chụp màn hình."
          }
        },
        {
          "role": "ai",
          "text": "Let me verify that for you now.",
          "translations": {
            "ko": "지금 당장 그것을 확인해드리겠습니다.",
            "zh": "我现在就为你验证。",
            "ja": "それを今すぐ確認させていただきます。",
            "vi": "Hãy để tôi xác minh điều đó cho bạn ngay bây giờ."
          }
        },
        {
          "role": "user",
          "text": "Thanks for checking that.",
          "translations": {
            "ko": "확인해 주셔서 감사합니다.",
            "zh": "谢谢你的核实。",
            "ja": "それを確認してくれてありがとう。",
            "vi": "Cảm ơn bạn đã kiểm tra điều đó."
          }
        },
        {
          "role": "ai",
          "text": "Yes, that item qualifies for our price match policy.",
          "translations": {
            "ko": "네, 그 상품은 저희의 가격 매치 정책에 해당됩니다.",
            "zh": "是的，该商品符合我们的价格匹配政策。",
            "ja": "はい、その商品は当社の価格保証ポリシーの対象です。",
            "vi": "Đúng, sản phẩm này đủ điều kiện cho chính sách khớp giá của chúng tôi."
          }
        },
        {
          "role": "user",
          "text": "Good to know you match prices.",
          "translations": {
            "ko": "가격 매치를 해주신다는 것을 알게 되어 좋습니다.",
            "zh": "很高兴知道你们有价格匹配服务。",
            "ja": "価格を合わせてくれるとは良い知らせです。",
            "vi": "Tốt biết bạn có chính sách khớp giá."
          }
        },
        {
          "role": "ai",
          "text": "We’ll honor the lower price today.",
          "translations": {
            "ko": "오늘은 낮은 가격을 적용해 드리겠습니다.",
            "zh": "我们今天会按照更低的价格出售。",
            "ja": "今日は低い価格を適用します。",
            "vi": "Chúng tôi sẽ áp dụng giá thấp hơn hôm nay."
          }
        },
        {
          "role": "user",
          "text": "Yes, I’d like to get it now at the lower price.",
          "translations": {
            "ko": "네, 지금 낮은 가격으로 구매하고 싶습니다.",
            "zh": "是的，我现在就想以更低的价格购买它。",
            "ja": "はい、今すぐ低い価格で購入したいです。",
            "vi": "Đúng, tôi muốn mua nó ngay bây giờ với giá thấp hơn."
          }
        },
        {
          "role": "ai",
          "text": "Would you like to purchase it now or place a hold?",
          "translations": {
            "ko": "지금 구매하시겠습니까, 아니면 보류하시겠습니까?",
            "zh": "您想现在购买还是预留？",
            "ja": "今すぐ購入しますか、それとも取り置きしますか？",
            "vi": "Bạn muốn mua nó ngay bây giờ hay đặt giữ?"
          }
        },
        {
          "role": "user",
          "text": "Let’s go ahead with the purchase.",
          "translations": {
            "ko": "구매를 진행하겠습니다.",
            "zh": "我们现在就进行购买吧。",
            "ja": "購入を進めましょう。",
            "vi": "Hãy tiến hành mua hàng."
          }
        },
        {
          "role": "ai",
          "text": "You’ll still receive the same loyalty points as usual.",
          "translations": {
            "ko": "여전히 평소처럼 충성도 포인트를 받게 됩니다.",
            "zh": "您仍然会像往常一样获得同样的会员积分。",
            "ja": "いつも通りのロイヤリティポイントが付与されます。",
            "vi": "Bạn vẫn sẽ nhận được cùng số điểm thưởng như thường lệ."
          }
        },
        {
          "role": "user",
          "text": "Great! I didn’t want to miss out on that.",
          "translations": {
            "ko": "좋아요! 그것을 놓치고 싶지 않았습니다.",
            "zh": "太好了！我不想错过这个。",
            "ja": "それは素晴らしい！それを逃したくなかった。",
            "vi": "Tuyệt! Tôi không muốn bỏ lỡ điều đó."
          }
        },
        {
          "role": "ai",
          "text": "Let me update the total before checkout.",
          "translations": {
            "ko": "체크아웃 전에 총액을 업데이트하겠습니다.",
            "zh": "让我在结账前更新总价。",
            "ja": "チェックアウト前に合計金額を更新します。",
            "vi": "Hãy để tôi cập nhật tổng số trước khi thanh toán."
          }
        },
        {
          "role": "user",
          "text": "Thank you. That’s very helpful.",
          "translations": {
            "ko": "감사합니다. 정말 도움이 되었습니다.",
            "zh": "谢谢你，这非常有帮助。",
            "ja": "ありがとう。それはとても助かります。",
            "vi": "Cảm ơn bạn. Điều đó rất hữu ích."
          }
        },
        {
          "role": "ai",
          "text": "Thanks for bringing it to our attention.",
          "translations": {
            "ko": "저희에게 알려 주셔서 감사합니다.",
            "zh": "感谢您提醒我们。",
            "ja": "それを私たちの注意に引きつけてくれてありがとう。",
            "vi": "Cảm ơn bạn đã đưa nó lên để chúng tôi biết."
          }
        },
        {
          "role": "user",
          "text": "No problem. Glad it worked out.",
          "translations": {
            "ko": "문제 없습니다. 잘 해결되어 기쁩니다.",
            "zh": "没问题，很高兴这件事解决了。",
            "ja": "問題ありません。うまくいってよかったです。",
            "vi": "Không sao. Rất vui vì nó đã hoạt động."
          }
        },
        {
          "role": "ai",
          "text": "Is there anything else I can assist you with?",
          "translations": {
            "ko": "다른 도움이 필요한 것이 있으신가요?",
            "zh": "还有其他我可以帮助您的吗？",
            "ja": "他に何かお手伝いできることはありますか？",
            "vi": "Còn gì khác tôi có thể giúp bạn không?"
          }
        },
        {
          "role": "user",
          "text": "Not at the moment, thanks again!",
          "translations": {
            "ko": "지금은 없습니다, 다시 감사드립니다!",
            "zh": "目前没有，再次感谢！",
            "ja": "今のところはありません、再度ありがとう！",
            "vi": "Không, cảm ơn bạn một lần nữa!"
          }
        }
      ]
    },
    {
      "description": {
        "ko": "개인 쇼핑 약속 예약하기",
        "zh": "预约个人购物时间",
        "ja": "パーソナルショッピングの予約をする",
        "vi": "Lên lịch hẹn mua sắm cá nhân"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Would you like to schedule a one-on-one shopping session?",
          "translations": {
            "ko": "개인 쇼핑 세션을 예약하시겠습니까?",
            "zh": "您想预约一个一对一的购物时间吗？",
            "ja": "ワンオンワンのショッピングセッションを予約しますか？",
            "vi": "Bạn có muốn lên lịch hẹn mua sắm một-đối-một không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, that sounds perfect for my needs.",
          "translations": {
            "ko": "네, 그것이 제 필요에 완벽하게 맞습니다.",
            "zh": "是的，这非常符合我的需求。",
            "ja": "はい、それは私のニーズにぴったりです。",
            "vi": "Đúng, điều đó hoàn hảo với nhu cầu của tôi."
          }
        },
        {
          "role": "ai",
          "text": "We offer personal styling services by appointment.",
          "translations": {
            "ko": "저희는 예약제로 개인 스타일링 서비스를 제공합니다.",
            "zh": "我们提供预约的个人造型服务。",
            "ja": "予約制でパーソナルスタイリングサービスを提供しています。",
            "vi": "Chúng tôi cung cấp dịch vụ tư vấn phong cách cá nhân theo hẹn."
          }
        },
        {
          "role": "user",
          "text": "I’d love some help with personal styling.",
          "translations": {
            "ko": "개인 스타일링에 대한 도움이 필요합니다.",
            "zh": "我很需要一些个人造型的帮助。",
            "ja": "パーソナルスタイリングの助けが欲しいです。",
            "vi": "Tôi rất muốn được giúp đỡ về phong cách cá nhân."
          }
        },
        {
          "role": "ai",
          "text": "Is there a particular date and time that works best for you?",
          "translations": {
            "ko": "특정 날짜와 시간이 가장 편하신가요?",
            "zh": "您有特定的日期和时间最适合您吗？",
            "ja": "あなたにとって最適な日時は何ですか？",
            "vi": "Có ngày và giờ cụ thể nào phù hợp với bạn không?"
          }
        },
        {
          "role": "user",
          "text": "Next Friday afternoon would be ideal.",
          "translations": {
            "ko": "다음 주 금요일 오후가 가장 이상적입니다.",
            "zh": "下周五下午最理想。",
            "ja": "来週の金曜日の午後が理想的です。",
            "vi": "Buổi chiều thứ Sáu tuần sau sẽ là lý tưởng."
          }
        },
        {
          "role": "ai",
          "text": "What types of items are you hoping to explore?",
          "translations": {
            "ko": "어떤 종류의 상품을 찾고 계신가요?",
            "zh": "您希望探索哪些类型的商品？",
            "ja": "どのようなアイテムを探していますか？",
            "vi": "Bạn muốn khám phá những loại mặt hàng nào?"
          }
        },
        {
          "role": "user",
          "text": "I’m looking for office wear and shoes.",
          "translations": {
            "ko": "사무실 착용용 의류와 신발을 찾고 있습니다.",
            "zh": "我在找办公服装和鞋子。",
            "ja": "オフィスウェアと靴を探しています。",
            "vi": "Tôi đang tìm kiếm quần áo công sở và giày."
          }
        },
        {
          "role": "ai",
          "text": "We’ll prepare a curated selection ahead of your visit.",
          "translations": {
            "ko": "방문 전에 선별된 상품을 준비해 드리겠습니다.",
            "zh": "在您访问之前，我们会准备一些精选的商品。",
            "ja": "あなたの訪問前に、カーティングされた選択を準備します。",
            "vi": "Chúng tôi sẽ chuẩn bị một lựa chọn được lựa chọn trước cuộc thăm của bạn."
          }
        },
        {
          "role": "user",
          "text": "That’s a great idea-thank you.",
          "translations": {
            "ko": "좋은 아이디어네요-감사합니다.",
            "zh": "这是个好主意，谢谢你。",
            "ja": "それは素晴らしいアイデアです、ありがとう。",
            "vi": "Đó là một ý tưởng tuyệt vời - cảm ơn bạn."
          }
        },
        {
          "role": "ai",
          "text": "Do you prefer a quiet morning or a relaxed afternoon session?",
          "translations": {
            "ko": "조용한 아침 세션을 선호하시나요, 아니면 편안한 오후 세션을 선호하시나요?",
            "zh": "您更喜欢安静的早晨还是轻松的下午时段？",
            "ja": "静かな朝のセッションとリラックスした午後のセッション、どちらがいいですか？",
            "vi": "Bạn thích buổi sáng yên tĩnh hay buổi chiều thư giãn?"
          }
        },
        {
          "role": "user",
          "text": "Afternoon is more convenient for me.",
          "translations": {
            "ko": "오후가 저에게 더 편리합니다.",
            "zh": "对我来说，下午更方便。",
            "ja": "午後の方が私にとって便利です。",
            "vi": "Buổi chiều thuận tiện hơn cho tôi."
          }
        },
        {
          "role": "ai",
          "text": "Would you like refreshments provided during your appointment?",
          "translations": {
            "ko": "약속 동안 음료를 제공받고 싶으신가요?",
            "zh": "您希望在预约期间提供茶点吗？",
            "ja": "ご予約中にお飲み物を提供しますか？",
            "vi": "Bạn có muốn chúng tôi phục vụ đồ ăn nhẹ trong cuộc hẹn của bạn không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, that would make it even more enjoyable.",
          "translations": {
            "ko": "네, 그렇게 되면 더욱 즐거울 것 같습니다.",
            "zh": "是的，这会让体验更加愉快。",
            "ja": "はい、それはさらに楽しい時間になります。",
            "vi": "Đúng, điều đó sẽ làm nó thú vị hơn."
          }
        },
        {
          "role": "ai",
          "text": "Can I take note of your sizes and style preferences?",
          "translations": {
            "ko": "사이즈와 스타일 선호도를 기록해도 될까요?",
            "zh": "我可以记下您的尺寸和风格偏好吗？",
            "ja": "あなたのサイズとスタイルの好みをメモしてもよろしいですか？",
            "vi": "Tôi có thể ghi chú kích cỡ và sở thích phong cách của bạn không?"
          }
        },
        {
          "role": "user",
          "text": "Sure, I can share those details now.",
          "translations": {
            "ko": "네, 지금 그 정보를 알려드릴게요.",
            "zh": "当然，我现在就可以分享这些细节。",
            "ja": "はい、それらの詳細を今すぐ共有します。",
            "vi": "Chắc chắn, tôi có thể chia sẻ những chi tiết đó ngay bây giờ."
          }
        },
        {
          "role": "ai",
          "text": "We’ll confirm the appointment via text or email.",
          "translations": {
            "ko": "문자나 이메일로 예약을 확인하겠습니다.",
            "zh": "我们将通过短信或电子邮件确认预约。",
            "ja": "予約の確認はテキストメッセージまたはメールで行います。",
            "vi": "Chúng tôi sẽ xác nhận cuộc hẹn qua tin nhắn hoặc email."
          }
        },
        {
          "role": "user",
          "text": "Text would be perfect, thanks.",
          "translations": {
            "ko": "문자로 부탁드립니다, 감사합니다.",
            "zh": "短信最好了，谢谢。",
            "ja": "テキストメッセージが最適です、ありがとうございます。",
            "vi": "Tin nhắn sẽ hoàn hảo, cảm ơn."
          }
        },
        {
          "role": "ai",
          "text": "Looking forward to helping you find what you need!",
          "translations": {
            "ko": "필요한 것을 찾는데 도움을 드리는 것을 기대하고 있습니다!",
            "zh": "期待帮助您找到您需要的东西！",
            "ja": "あなたが必要なものを見つけるお手伝いをするのを楽しみにしています！",
            "vi": "Mong chờ được giúp bạn tìm những gì bạn cần!"
          }
        },
        {
          "role": "user",
          "text": "Likewise! I’m excited already.",
          "translations": {
            "ko": "저도 마찬가지입니다! 벌써부터 설레네요.",
            "zh": "同样！我已经很兴奋了。",
            "ja": "同じく！すでにワクワクしています。",
            "vi": "Tương tự! Tôi đã rất hào hứng."
          }
        }
      ]
    },
    {
      "description": {
        "ko": "스타일리스트와 옷장 구축에 대해 상담하기",
        "zh": "与造型师咨询关于衣柜建设的问题",
        "ja": "スタイリストとのワードローブ作りについての相談",
        "vi": "Tư vấn với một nhà tạo mẫu về việc xây dựng tủ đồ"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Are you looking to build a versatile wardrobe?",
          "translations": {
            "ko": "다양한 스타일의 옷장을 구축하려고 하시나요?",
            "zh": "你是想建立一个多功能的衣柜吗？",
            "ja": "バーサタイルなワードローブを作りたいと思っていますか？",
            "vi": "Bạn có đang muốn xây dựng một tủ đồ linh hoạt không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I’m trying to invest in a long-term wardrobe.",
          "translations": {
            "ko": "네, 장기적으로 투자할 옷장을 구축하려고 합니다.",
            "zh": "是的，我正在尝试投资一个长期的衣柜。",
            "ja": "はい、長期的なワードローブに投資しようと考えています。",
            "vi": "Vâng, tôi đang cố gắng đầu tư vào một tủ đồ dài hạn."
          }
        },
        {
          "role": "ai",
          "text": "Let’s start with essentials that match your lifestyle.",
          "translations": {
            "ko": "당신의 생활 스타일에 맞는 필수품부터 시작해봅시다.",
            "zh": "让我们从符合您生活方式的基本款开始。",
            "ja": "あなたのライフスタイルに合った基本アイテムから始めましょう。",
            "vi": "Hãy bắt đầu với những món đồ cơ bản phù hợp với lối sống của bạn."
          }
        },
        {
          "role": "user",
          "text": "That sounds like a good place to start.",
          "translations": {
            "ko": "좋은 시작점이라고 생각합니다.",
            "zh": "这听起来像一个好的开始。",
            "ja": "それは良いスタート地点になりそうです。",
            "vi": "Đó nghe có vẻ như một nơi tốt để bắt đầu."
          }
        },
        {
          "role": "ai",
          "text": "How often do you dress formally versus casually?",
          "translations": {
            "ko": "얼마나 자주 정장을 입고 캐주얼하게 입나요?",
            "zh": "你经常正式装和休闲装穿着的频率如何？",
            "ja": "フォーマルとカジュアル、どちらの服装をよくしますか？",
            "vi": "Bạn thường mặc trang phục chính thức hay trang phục thông thường bao nhiêu lần?"
          }
        },
        {
          "role": "user",
          "text": "I dress casually most days, with some formal events.",
          "translations": {
            "ko": "대부분의 날은 캐주얼하게 입고, 가끔은 공식적인 행사에 참석합니다.",
            "zh": "我大多数日子都穿休闲装，有些正式场合。",
            "ja": "ほとんどの日はカジュアルな服装で、たまにフォーマルなイベントもあります。",
            "vi": "Tôi thường mặc trang phục thông thường hầu hết các ngày, với một số sự kiện chính thức."
          }
        },
        {
          "role": "ai",
          "text": "Neutral tones are great for mixing and matching.",
          "translations": {
            "ko": "중립색은 믹스매치하기 좋습니다.",
            "zh": "中性色调非常适合混搭。",
            "ja": "ニュートラルな色調はミックスアンドマッチに最適です。",
            "vi": "Tông màu trung tính rất tốt để phối hợp."
          }
        },
        {
          "role": "user",
          "text": "I agree-neutrals work best for me.",
          "translations": {
            "ko": "동의합니다-중립색이 저에게 가장 잘 어울립니다.",
            "zh": "我同意-中性色最适合我。",
            "ja": "私も同意見です。ニュートラルカラーが私には最適です。",
            "vi": "Tôi đồng ý - màu trung tính phù hợp nhất với tôi."
          }
        },
        {
          "role": "ai",
          "text": "Would you like suggestions for layering pieces?",
          "translations": {
            "ko": "레이어링을 위한 제안을 원하시나요?",
            "zh": "你想要一些关于层次搭配的建议吗？",
            "ja": "レイヤリングのアイテムについての提案はいかがですか？",
            "vi": "Bạn có muốn nhận gợi ý về các món đồ lớp không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, layering is something I struggle with.",
          "translations": {
            "ko": "네, 레이어링이 어렵습니다.",
            "zh": "是的，层次搭配是我挣扎的地方。",
            "ja": "はい、レイヤリングは私が苦手な部分です。",
            "vi": "Vâng, việc lớp đồ là điều tôi gặp khó khăn."
          }
        },
        {
          "role": "ai",
          "text": "Let’s talk about fabrics-do you prefer cotton, wool, or blends?",
          "translations": {
            "ko": "원단에 대해 이야기해봅시다-면, 울, 혹은 혼방을 선호하시나요?",
            "zh": "让我们来谈谈面料-你更喜欢棉、羊毛还是混纺？",
            "ja": "素材について話しましょう。コットン、ウール、ブレンドのどれが好きですか？",
            "vi": "Hãy nói về chất liệu - bạn thích cotton, len, hay hỗn hợp?"
          }
        },
        {
          "role": "user",
          "text": "I prefer natural fabrics, especially cotton.",
          "translations": {
            "ko": "저는 자연 원단, 특히 면을 선호합니다.",
            "zh": "我更喜欢天然面料，尤其是棉。",
            "ja": "私は天然素材、特にコットンを好みます。",
            "vi": "Tôi thích chất liệu tự nhiên, đặc biệt là cotton."
          }
        },
        {
          "role": "ai",
          "text": "I’ll recommend pieces that transition well between seasons.",
          "translations": {
            "ko": "계절 간에 잘 전환되는 아이템을 추천해드리겠습니다.",
            "zh": "我会推荐在季节之间过渡得很好的单品。",
            "ja": "季節を問わずに使えるアイテムをお勧めします。",
            "vi": "Tôi sẽ giới thiệu những món đồ chuyển tiếp tốt giữa các mùa."
          }
        },
        {
          "role": "user",
          "text": "That’s exactly what I need-seasonal flexibility.",
          "translations": {
            "ko": "그게 바로 제가 필요한 것입니다-계절에 따른 유연성.",
            "zh": "这正是我需要的-季节性的灵活性。",
            "ja": "それがまさに私が必要としているものです。季節による柔軟性。",
            "vi": "Đó chính xác là những gì tôi cần - linh hoạt theo mùa."
          }
        },
        {
          "role": "ai",
          "text": "Would you like us to keep your selections on file for reorders?",
          "translations": {
            "ko": "재주문을 위해 선택하신 아이템을 파일에 보관하시겠어요?",
            "zh": "你希望我们将你的选择保存在文件中以便重新订购吗？",
            "ja": "あなたの選択したアイテムを再注文のためにファイルに保存しておきましょうか？",
            "vi": "Bạn có muốn chúng tôi giữ lựa chọn của bạn trong hồ sơ để đặt hàng lại không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, please keep my choices on file.",
          "translations": {
            "ko": "네, 제 선택사항을 파일에 보관해주세요.",
            "zh": "是的，请将我的选择保存在文件中。",
            "ja": "はい、私の選択したアイテムをファイルに保存してください。",
            "vi": "Vâng, hãy giữ lựa chọn của tôi trong hồ sơ."
          }
        },
        {
          "role": "ai",
          "text": "We can also schedule seasonal updates based on trends.",
          "translations": {
            "ko": "트렌드에 따른 계절별 업데이트도 예약할 수 있습니다.",
            "zh": "我们也可以根据趋势安排季节性的更新。",
            "ja": "トレンドに基づいた季節の更新をスケジュールすることもできます。",
            "vi": "Chúng tôi cũng có thể lên lịch cập nhật theo mùa dựa trên xu hướng."
          }
        },
        {
          "role": "user",
          "text": "I’d love to get seasonal updates.",
          "translations": {
            "ko": "계절별 업데이트를 받고 싶습니다.",
            "zh": "我很愿意接收季节性的更新。",
            "ja": "季節の更新を受け取るのが楽しみです。",
            "vi": "Tôi rất muốn nhận cập nhật theo mùa."
          }
        },
        {
          "role": "ai",
          "text": "How do you feel about incorporating statement pieces?",
          "translations": {
            "ko": "대표 아이템을 추가하는 것에 대해 어떻게 생각하세요?",
            "zh": "你对加入一些特色单品的想法如何？",
            "ja": "ステートメントピースを取り入れることにどう思いますか？",
            "vi": "Bạn cảm thấy thế nào về việc kết hợp các món đồ nổi bật?"
          }
        },
        {
          "role": "user",
          "text": "I’m open to bold pieces if they’re tasteful.",
          "translations": {
            "ko": "세련된 대표 아이템이라면 좋아합니다.",
            "zh": "如果它们有品味，我愿意尝试一些大胆的单品。",
            "ja": "品の良い大胆なアイテムなら、取り入れてみたいと思います。",
            "vi": "Tôi mở cửa cho những món đồ nổi bật nếu chúng có gu."
          }
        }
      ]
    },
    {
      "description": {
        "ko": "독점 쇼핑 이벤트를 이용하기",
        "zh": "导航一个独家购物活动",
        "ja": "限定ショッピングイベントのナビゲーション",
        "vi": "Điều hướng một sự kiện mua sắm độc quyền"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Welcome to our members-only event.",
          "translations": {
            "ko": "회원 전용 이벤트에 오신 것을 환영합니다.",
            "zh": "欢迎来到我们的会员专享活动。",
            "ja": "メンバー限定イベントへようこそ。",
            "vi": "Chào mừng đến với sự kiện chỉ dành cho thành viên của chúng tôi."
          }
        },
        {
          "role": "user",
          "text": "Thanks. This looks amazing.",
          "translations": {
            "ko": "감사합니다. 정말 멋져 보입니다.",
            "zh": "谢谢。这看起来很棒。",
            "ja": "ありがとう。これは素晴らしいですね。",
            "vi": "Cảm ơn. Trông thật tuyệt vời."
          }
        },
        {
          "role": "ai",
          "text": "Would you like a guided tour of the exclusive collection?",
          "translations": {
            "ko": "독점 컬렉션에 대한 가이드 투어를 원하십니까?",
            "zh": "您想要参观我们的独家收藏吗？",
            "ja": "特別コレクションのガイドツアーはいかがですか？",
            "vi": "Bạn có muốn tham quan bộ sưu tập độc quyền dưới sự hướng dẫn không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I’d love to see what’s exclusive today.",
          "translations": {
            "ko": "네, 오늘의 독점 상품을 보고 싶습니다.",
            "zh": "是的，我很想看看今天有什么独家产品。",
            "ja": "はい、今日の特別なものを見てみたいです。",
            "vi": "Vâng, tôi rất muốn xem những gì độc đáo hôm nay."
          }
        },
        {
          "role": "ai",
          "text": "We’re offering limited-time pricing today only.",
          "translations": {
            "ko": "오늘만 한정된 가격을 제공하고 있습니다.",
            "zh": "我们今天只有限时优惠。",
            "ja": "今日だけ、期間限定の価格を提供しています。",
            "vi": "Chúng tôi đang cung cấp giá cả giới hạn thời gian chỉ trong hôm nay."
          }
        },
        {
          "role": "user",
          "text": "That’s good to know-I’ll keep an eye out.",
          "translations": {
            "ko": "좋은 정보네요-주의 깊게 봐야겠습니다.",
            "zh": "这个信息很好，我会留意的。",
            "ja": "それは良い情報です、注意しておきます。",
            "vi": "Thật tốt khi biết điều đó - tôi sẽ để ý."
          }
        },
        {
          "role": "ai",
          "text": "Can I help you find anything in particular?",
          "translations": {
            "ko": "특별히 찾으시는 물건이 있으신가요?",
            "zh": "我可以帮您找到特定的东西吗？",
            "ja": "特にお探しのものはありますか？",
            "vi": "Tôi có thể giúp bạn tìm kiếm một thứ gì đó cụ thể không?"
          }
        },
        {
          "role": "user",
          "text": "I’m looking for something bold but elegant.",
          "translations": {
            "ko": "대담하면서도 우아한 것을 찾고 있습니다.",
            "zh": "我在寻找既大胆又优雅的东西。",
            "ja": "大胆だけどエレガントなものを探しています。",
            "vi": "Tôi đang tìm kiếm một thứ gì đó mạnh mẽ nhưng thanh lịch."
          }
        },
        {
          "role": "ai",
          "text": "Refreshments are available in the VIP lounge.",
          "translations": {
            "ko": "VIP 라운지에서 간식을 제공하고 있습니다.",
            "zh": "VIP休息室提供茶点。",
            "ja": "VIPラウンジではリフレッシュメントを提供しています。",
            "vi": "Đồ ăn nhẹ có sẵn trong phòng VIP."
          }
        },
        {
          "role": "user",
          "text": "Great, I’ll stop by the lounge later.",
          "translations": {
            "ko": "좋아요, 나중에 라운지에 들러야겠습니다.",
            "zh": "太好了，我稍后会去休息室。",
            "ja": "それは良いですね、後でラウンジに寄ります。",
            "vi": "Tuyệt, tôi sẽ ghé phòng VIP sau."
          }
        },
        {
          "role": "ai",
          "text": "Some items are limited to one per guest.",
          "translations": {
            "ko": "일부 상품은 손님당 한 개로 제한되어 있습니다.",
            "zh": "有些商品每位客人限购一件。",
            "ja": "一部の商品はお一人様一点限りです。",
            "vi": "Một số mặt hàng chỉ giới hạn một sản phẩm cho mỗi khách."
          }
        },
        {
          "role": "user",
          "text": "Understood. I’ll choose carefully.",
          "translations": {
            "ko": "알겠습니다. 신중히 선택하겠습니다.",
            "zh": "明白了，我会仔细挑选的。",
            "ja": "了解しました。慎重に選びます。",
            "vi": "Tôi đã hiểu. Tôi sẽ chọn cẩn thận."
          }
        },
        {
          "role": "ai",
          "text": "Would you like me to hold this for you while you browse?",
          "translations": {
            "ko": "구경하시는 동안 이것을 들어드릴까요?",
            "zh": "您希望我在您浏览时为您保留这件商品吗？",
            "ja": "他の商品を見ている間、これをお預かりしましょうか？",
            "vi": "Bạn có muốn tôi giữ món này cho bạn trong khi bạn đang xem không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, please hold this bag for me.",
          "translations": {
            "ko": "네, 이 가방을 좀 들어주세요.",
            "zh": "是的，请帮我保留这个包。",
            "ja": "はい、このバッグを預かってください。",
            "vi": "Vâng, xin vui lòng giữ túi này cho tôi."
          }
        },
        {
          "role": "ai",
          "text": "We also have special gift wrapping available today.",
          "translations": {
            "ko": "오늘은 특별히 선물 포장도 가능합니다.",
            "zh": "我们今天还提供特殊的礼品包装服务。",
            "ja": "今日は特別なギフトラッピングもご用意しています。",
            "vi": "Chúng tôi cũng có dịch vụ gói quà đặc biệt hôm nay."
          }
        },
        {
          "role": "user",
          "text": "That would be great. I love custom wrapping.",
          "translations": {
            "ko": "좋네요. 저는 맞춤 포장을 좋아합니다.",
            "zh": "那太好了，我喜欢定制包装。",
            "ja": "それは素晴らしいです。カスタムラッピングが大好きです。",
            "vi": "Điều đó thật tuyệt. Tôi thích gói quà theo yêu cầu."
          }
        },
        {
          "role": "ai",
          "text": "Would you like a preview of next season’s styles?",
          "translations": {
            "ko": "다음 시즌 스타일을 미리 보시겠습니까?",
            "zh": "您想预览下一季的款式吗？",
            "ja": "来シーズンのスタイルのプレビューはいかがですか？",
            "vi": "Bạn có muốn xem trước phong cách mùa tới không?"
          }
        },
        {
          "role": "user",
          "text": "Absolutely-I’m curious about upcoming trends.",
          "translations": {
            "ko": "네, 당연합니다-다가오는 트렌드에 궁금합니다.",
            "zh": "当然，我对即将流行的趋势很好奇。",
            "ja": "ぜひ、これからのトレンドに興味があります。",
            "vi": "Chắc chắn - tôi rất tò mò về xu hướng sắp tới."
          }
        },
        {
          "role": "ai",
          "text": "Thanks for joining us-enjoy the experience!",
          "translations": {
            "ko": "함께 해주셔서 감사합니다-즐거운 경험이 되시길 바랍니다!",
            "zh": "感谢您的光临，享受购物体验吧！",
            "ja": "ご来店いただきありがとうございます、お楽しみください！",
            "vi": "Cảm ơn bạn đã tham gia - hãy tận hưởng trải nghiệm!"
          }
        },
        {
          "role": "user",
          "text": "Thank you. I’m really enjoying it.",
          "translations": {
            "ko": "감사합니다. 정말 즐기고 있습니다.",
            "zh": "谢谢，我真的很享受。",
            "ja": "ありがとうございます。とても楽しんでいます。",
            "vi": "Cảm ơn bạn. Tôi thực sự đang thích thú."
          }
        }
      ]
    },
    {
      "description": {
        "ko": "맞춤 제작 상품을 온라인으로 주문하기",
        "zh": "在线订购定制商品",
        "ja": "オンラインでオーダーメイドの商品を注文する",
        "vi": "Đặt hàng một mặt hàng may đo trực tuyến"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Welcome to our custom order platform.",
          "translations": {
            "ko": "맞춤 주문 플랫폼에 오신 것을 환영합니다.",
            "zh": "欢迎来到我们的定制订单平台。",
            "ja": "カスタムオーダープラットフォームへようこそ。",
            "vi": "Chào mừng bạn đến với nền tảng đặt hàng theo yêu cầu của chúng tôi."
          }
        },
        {
          "role": "user",
          "text": "I’m excited to order a made-to-measure jacket.",
          "translations": {
            "ko": "맞춤 제작 재킷을 주문하는 것이 기대됩니다.",
            "zh": "我很兴奋要订购一件定制的夹克。",
            "ja": "オーダーメイドのジャケットを注文するのが楽しみです。",
            "vi": "Tôi rất hào hứng để đặt một chiếc áo khoác may đo."
          }
        },
        {
          "role": "ai",
          "text": "Would you like to start with selecting fabric or fit?",
          "translations": {
            "ko": "원단 선택이나 핏 선택부터 시작하시겠습니까?",
            "zh": "您想从选择面料还是选择版型开始呢？",
            "ja": "ファブリックの選択から始めますか、それともフィットの選択から始めますか？",
            "vi": "Bạn có muốn bắt đầu với việc chọn vải hay kiểu dáng không?"
          }
        },
        {
          "role": "user",
          "text": "Let’s begin with the fabric selection.",
          "translations": {
            "ko": "원단 선택부터 시작하겠습니다.",
            "zh": "让我们从选择面料开始。",
            "ja": "ファブリックの選択から始めましょう。",
            "vi": "Hãy bắt đầu với việc chọn vải."
          }
        },
        {
          "role": "ai",
          "text": "Please enter your measurements or upload a fit profile.",
          "translations": {
            "ko": "치수를 입력하거나 핏 프로필을 업로드해주세요.",
            "zh": "请输入您的尺寸或上传版型资料。",
            "ja": "あなたの寸法を入力するか、フィットプロファイルをアップロードしてください。",
            "vi": "Vui lòng nhập số đo của bạn hoặc tải lên hồ sơ phù hợp."
          }
        },
        {
          "role": "user",
          "text": "I’ll upload my fit profile from the app.",
          "translations": {
            "ko": "앱에서 핏 프로필을 업로드하겠습니다.",
            "zh": "我会从应用程序上传我的版型资料。",
            "ja": "アプリからフィットプロファイルをアップロードします。",
            "vi": "Tôi sẽ tải lên hồ sơ phù hợp từ ứng dụng."
          }
        },
        {
          "role": "ai",
          "text": "You can preview how the item will look before checkout.",
          "translations": {
            "ko": "결제 전에 상품이 어떻게 보일지 미리 확인할 수 있습니다.",
            "zh": "您可以在结账前预览商品的样子。",
            "ja": "チェックアウト前に商品の見た目をプレビューできます。",
            "vi": "Bạn có thể xem trước cách mặt hàng sẽ trông như thế nào trước khi thanh toán."
          }
        },
        {
          "role": "user",
          "text": "That’s helpful-I like to see the preview.",
          "translations": {
            "ko": "도움이 되네요-미리보기를 보는 것을 좋아합니다.",
            "zh": "这很有帮助，我喜欢看预览。",
            "ja": "それは助かります、プレビューを見るのが好きです。",
            "vi": "Điều đó rất hữu ích - tôi thích xem trước."
          }
        },
        {
          "role": "ai",
          "text": "Would you like contrast stitching or custom lining?",
          "translations": {
            "ko": "대조 스티칭이나 맞춤 안감을 원하십니까?",
            "zh": "您想要对比色线缝或定制衬里吗？",
            "ja": "コントラストステッチやカスタムライニングはいかがですか？",
            "vi": "Bạn có muốn chỉ may tương phản hay lớp lót tùy chỉnh không?"
          }
        },
        {
          "role": "user",
          "text": "I’d like contrast stitching on the sleeves.",
          "translations": {
            "ko": "소매에 대조 스티칭을 원합니다.",
            "zh": "我想要在袖子上做对比色线缝。",
            "ja": "スリーブにコントラストステッチを入れたいです。",
            "vi": "Tôi muốn chỉ may tương phản trên tay áo."
          }
        },
        {
          "role": "ai",
          "text": "Production takes approximately three weeks.",
          "translations": {
            "ko": "제작은 약 세 주가 소요됩니다.",
            "zh": "生产大约需要三周时间。",
            "ja": "製作には約3週間かかります。",
            "vi": "Sản xuất mất khoảng ba tuần."
          }
        },
        {
          "role": "user",
          "text": "Three weeks is fine with me.",
          "translations": {
            "ko": "세 주는 저에게 괜찮습니다.",
            "zh": "三周对我来说挺好的。",
            "ja": "3週間であれば私にとって問題ありません。",
            "vi": "Ba tuần là được với tôi."
          }
        },
        {
          "role": "ai",
          "text": "You’ll receive updates as your item moves through production.",
          "translations": {
            "ko": "제품이 생산 과정을 거치면서 업데이트를 받게 될 것입니다.",
            "zh": "随着您的商品在生产过程中的移动，您将收到更新。",
            "ja": "商品が製造工程を進むにつれて更新情報を受け取ることができます。",
            "vi": "Bạn sẽ nhận được cập nhật khi sản phẩm của bạn đi qua các giai đoạn sản xuất."
          }
        },
        {
          "role": "user",
          "text": "Great, I like being able to track progress.",
          "translations": {
            "ko": "진행 상황을 추적할 수 있어서 좋네요.",
            "zh": "太好了，我喜欢能够跟踪进度。",
            "ja": "進捗状況を追跡できるのは素晴らしいです。",
            "vi": "Tốt, tôi thích có thể theo dõi tiến trình."
          }
        },
        {
          "role": "ai",
          "text": "Would you like to add a gift box to your order?",
          "translations": {
            "ko": "주문에 선물 상자를 추가하시겠습니까?",
            "zh": "您想在您的订单中添加礼品盒吗？",
            "ja": "ご注文にギフトボックスを追加しますか？",
            "vi": "Bạn có muốn thêm hộp quà vào đơn hàng của mình không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, a gift box would be nice.",
          "translations": {
            "ko": "네, 선물 상자가 있으면 좋겠네요.",
            "zh": "是的，我想要一个礼品盒。",
            "ja": "はい、ギフトボックスがあるといいですね。",
            "vi": "Vâng, một hộp quà sẽ rất tốt."
          }
        },
        {
          "role": "ai",
          "text": "Your order will ship with express delivery at no extra charge.",
          "translations": {
            "ko": "추가 비용 없이 택배로 주문하신 상품을 보내드릴 것입니다.",
            "zh": "您的订单将免费使用快递发货。",
            "ja": "追加料金なしで、ご注文はエクスプレス配送で出荷されます。",
            "vi": "Đơn hàng của bạn sẽ được gửi bằng giao hàng nhanh mà không mất phí phụ."
          }
        },
        {
          "role": "user",
          "text": "That’s generous. Thanks!",
          "translations": {
            "ko": "정말 후한 제안이네요. 감사합니다!",
            "zh": "那真大方。谢谢！",
            "ja": "それは親切ですね。ありがとう！",
            "vi": "Thật hào phóng. Cảm ơn!"
          }
        },
        {
          "role": "ai",
          "text": "Let us know if you need help reviewing your measurements.",
          "translations": {
            "ko": "치수를 검토하는 데 도움이 필요하시면 알려주세요.",
            "zh": "如果您需要帮助检查您的尺寸，请告诉我们。",
            "ja": "採寸の確認にお困りであればお知らせください。",
            "vi": "Hãy cho chúng tôi biết nếu bạn cần giúp đỡ để xem xét lại số đo của mình."
          }
        },
        {
          "role": "user",
          "text": "Will do. I appreciate the support.",
          "translations": {
            "ko": "알겠습니다. 지원에 감사드립니다.",
            "zh": "我会的。我感谢您的支持。",
            "ja": "了解しました。サポートをいただき感謝しています。",
            "vi": "Tôi sẽ làm vậy. Tôi đánh giá cao sự hỗ trợ."
          }
        }
      ]
    },
    {
      "description": {
        "ko": "희귀하거나 한정판 패션 아이템을 찾고 있습니다.",
        "zh": "寻找稀有或限量版的时尚商品",
        "ja": "レアまたは限定版のファッションアイテムを探しています。",
        "vi": "Tìm kiếm các mặt hàng thời trang hiếm hoặc giới hạn số lượng."
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Are you looking for something from a limited release?",
          "translations": {
            "ko": "한정판 물품을 찾고 계신가요?",
            "zh": "您在寻找限量版发布的东西吗？",
            "ja": "限定リリースの何かをお探しですか？",
            "vi": "Bạn đang tìm kiếm một thứ gì đó từ một lô hàng giới hạn không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I’m searching for a limited edition jacket.",
          "translations": {
            "ko": "네, 한정판 재킷을 찾고 있습니다.",
            "zh": "是的，我正在寻找一件限量版夹克。",
            "ja": "はい、限定版のジャケットを探しています。",
            "vi": "Vâng, tôi đang tìm kiếm một chiếc áo khoác phiên bản giới hạn."
          }
        },
        {
          "role": "ai",
          "text": "We sometimes get exclusive drops from partner brands.",
          "translations": {
            "ko": "파트너 브랜드로부터 독점적으로 물품을 받기도 합니다.",
            "zh": "我们有时会从合作品牌那里获得独家产品。",
            "ja": "私たちはパートナーブランドから独占的な商品を時々入手します。",
            "vi": "Chúng tôi đôi khi nhận được các mặt hàng độc quyền từ các thương hiệu đối tác."
          }
        },
        {
          "role": "user",
          "text": "That would be amazing. I collect rare pieces.",
          "translations": {
            "ko": "그것이면 정말 좋겠네요. 저는 희귀한 아이템을 수집합니다.",
            "zh": "那太棒了。我收藏稀有的东西。",
            "ja": "それは素晴らしいですね。私はレアなアイテムを集めています。",
            "vi": "Điều đó sẽ tuyệt vời. Tôi thu thập các món đồ hiếm."
          }
        },
        {
          "role": "ai",
          "text": "Would you like to be added to our waitlist?",
          "translations": {
            "ko": "대기 목록에 추가하시겠습니까?",
            "zh": "您想被加入我们的等待名单吗？",
            "ja": "当社の待機リストに追加しますか？",
            "vi": "Bạn có muốn được thêm vào danh sách chờ của chúng tôi không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, please add me to the waitlist.",
          "translations": {
            "ko": "네, 대기 목록에 저를 추가해주세요.",
            "zh": "是的，请把我加入等待名单。",
            "ja": "はい、待機リストに私を追加してください。",
            "vi": "Vâng, xin hãy thêm tôi vào danh sách chờ."
          }
        },
        {
          "role": "ai",
          "text": "I can check our archives for past collections.",
          "translations": {
            "ko": "과거 컬렉션에 대해 아카이브를 확인할 수 있습니다.",
            "zh": "我可以查看我们的档案中的过去的收藏。",
            "ja": "過去のコレクションについて、アーカイブを確認することができます。",
            "vi": "Tôi có thể kiểm tra lưu trữ của chúng tôi để tìm các bộ sưu tập trước đây."
          }
        },
        {
          "role": "user",
          "text": "I’d love to see anything you have in archive.",
          "translations": {
            "ko": "아카이브에 있는 것들을 볼 수 있다면 좋겠습니다.",
            "zh": "我很想看看你们档案中的任何东西。",
            "ja": "アーカイブにあるものを見てみたいです。",
            "vi": "Tôi rất muốn xem bất cứ thứ gì bạn có trong lưu trữ."
          }
        },
        {
          "role": "ai",
          "text": "We occasionally source rare items by request.",
          "translations": {
            "ko": "요청에 따라 희귀 아이템을 구하곤 합니다.",
            "zh": "我们偶尔会应要求寻找稀有物品。",
            "ja": "私たちは時々、リクエストに応じてレアなアイテムを調達します。",
            "vi": "Chúng tôi đôi khi tìm kiếm các mặt hàng hiếm theo yêu cầu."
          }
        },
        {
          "role": "user",
          "text": "Custom sourcing sounds great.",
          "translations": {
            "ko": "맞춤형 구매가 좋네요.",
            "zh": "定制采购听起来很棒。",
            "ja": "カスタム調達は素晴らしいですね。",
            "vi": "Tìm kiếm tùy chỉnh nghe có vẻ tuyệt vời."
          }
        },
        {
          "role": "ai",
          "text": "Do you have a particular designer or piece in mind?",
          "translations": {
            "ko": "특정 디자이너나 아이템을 찾고 계신가요?",
            "zh": "您有特定的设计师或作品在心中吗？",
            "ja": "特定のデザイナーやアイテムをお探しですか？",
            "vi": "Bạn có một nhà thiết kế hoặc món đồ cụ thể nào đang nghĩ tới không?"
          }
        },
        {
          "role": "user",
          "text": "I’m a big fan of minimalist Japanese designers.",
          "translations": {
            "ko": "저는 미니멀리스트 일본 디자이너의 큰 팬입니다.",
            "zh": "我是极简主义日本设计师的大粉丝。",
            "ja": "私はミニマリストの日本のデザイナーが大好きです。",
            "vi": "Tôi là một fan lớn của các nhà thiết kế Nhật Bản theo phong cách tối giản."
          }
        },
        {
          "role": "ai",
          "text": "We also authenticate collector items upon request.",
          "translations": {
            "ko": "요청에 따라 수집품을 인증해드립니다.",
            "zh": "我们也可以应要求对收藏品进行鉴定。",
            "ja": "リクエストに応じて、コレクターアイテムの真正性を確認することもあります。",
            "vi": "Chúng tôi cũng xác thực các mặt hàng sưu tầm theo yêu cầu."
          }
        },
        {
          "role": "user",
          "text": "That’s good to know. I value authenticity.",
          "translations": {
            "ko": "그것이 좋군요. 저는 진품을 중요시합니다.",
            "zh": "那很好知道。我重视真实性。",
            "ja": "それは知っておくと良いですね。私は本物を重視します。",
            "vi": "Thật tốt khi biết. Tôi đánh giá cao sự chính xác."
          }
        },
        {
          "role": "ai",
          "text": "Would you like notifications for future rare releases?",
          "translations": {
            "ko": "향후 희귀 물품 출시에 대한 알림을 받으시겠습니까?",
            "zh": "您希望收到未来稀有发布的通知吗？",
            "ja": "将来のレアリリースの通知をご希望ですか？",
            "vi": "Bạn có muốn nhận thông báo cho các phát hành hiếm trong tương lai không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I’d like to get alerts for those.",
          "translations": {
            "ko": "네, 그런 알림을 받고 싶습니다.",
            "zh": "是的，我希望收到这些通知。",
            "ja": "はい、それらのアラートを受け取りたいです。",
            "vi": "Vâng, tôi muốn nhận cảnh báo cho những điều đó."
          }
        },
        {
          "role": "ai",
          "text": "Our stylist can work with you for one-on-one sourcing.",
          "translations": {
            "ko": "우리의 스타일리스트가 개인별로 아이템을 찾아드릴 수 있습니다.",
            "zh": "我们的造型师可以为您提供一对一的采购服务。",
            "ja": "当社のスタイリストがあなたと一対一で商品を探すことができます。",
            "vi": "Người tạo kiểu của chúng tôi có thể làm việc với bạn để tìm kiếm một mặt hàng."
          }
        },
        {
          "role": "user",
          "text": "That sounds helpful. One-on-one sourcing is ideal.",
          "translations": {
            "ko": "그것이 도움이 될 것 같습니다. 개인별로 아이템을 찾는 것이 이상적입니다.",
            "zh": "那听起来很有帮助。一对一采购是理想的。",
            "ja": "それは助かります。一対一での調達が理想的です。",
            "vi": "Điều đó nghe có vẻ hữu ích. Tìm kiếm một mặt hàng là lý tưởng."
          }
        },
        {
          "role": "ai",
          "text": "Let me know your preferences and I’ll make a note.",
          "translations": {
            "ko": "선호하는 것을 알려주시면 메모해 두겠습니다.",
            "zh": "告诉我您的偏好，我会做个记录。",
            "ja": "あなたの好みを教えていただければ、メモにします。",
            "vi": "Hãy cho tôi biết sở thích của bạn và tôi sẽ ghi chú lại."
          }
        },
        {
          "role": "user",
          "text": "Sure. I’ll share my list with you.",
          "translations": {
            "ko": "알겠습니다. 선호 목록을 공유하겠습니다.",
            "zh": "好的。我会把我的清单分享给你。",
            "ja": "了解です。私のリストを共有します。",
            "vi": "Chắc chắn. Tôi sẽ chia sẻ danh sách của tôi với bạn."
          }
        }
      ]
    }
  ]
};
