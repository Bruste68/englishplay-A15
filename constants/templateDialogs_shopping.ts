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
        "en": "Requesting help finding a specific brand",
        "ko": "특정 브랜드 찾는데 도움 요청",
        "zh": "请求帮助寻找特定品牌",
        "ja": "特定のブランドを探す助けを求めて",
        "vi": "Yêu cầu giúp tìm một thương hiệu cụ thể"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Hi there, can I help you find something?",
          "translations": {
            "ko": "안녕하세요, 무엇을 찾으시나요?",
            "zh": "嗨，有什么我可以帮您找的吗？",
            "ja": "こんにちは、何かお探しですか？",
            "vi": "Xin chào, tôi có thể giúp bạn tìm gì không?",
            "en": "Hi there, can I help you find something?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I’m looking for a specific brand of headphones.",
          "translations": {
            "ko": "네, 특정 브랜드의 헤드폰을 찾고 있습니다.",
            "zh": "是的，我正在寻找特定品牌的耳机。",
            "ja": "はい、特定のブランドのヘッドホンを探しています。",
            "vi": "Vâng, tôi đang tìm một thương hiệu tai nghe cụ thể.",
            "en": "Yes, I’m looking for a specific brand of headphones."
          }
        },
        {
          "role": "ai",
          "text": "Sure, which brand are you interested in?",
          "translations": {
            "ko": "그럼, 어떤 브랜드를 찾으시나요?",
            "zh": "好的，您对哪个品牌感兴趣？",
            "ja": "了解です、どのブランドに興味がありますか？",
            "vi": "Chắc chắn, bạn quan tâm đến thương hiệu nào?",
            "en": "Sure, which brand are you interested in?"
          }
        },
        {
          "role": "user",
          "text": "I’m looking for Bose. Do you carry that?",
          "translations": {
            "ko": "Bose를 찾고 있습니다. 여기에 있나요?",
            "zh": "我在找Bose，你们有卖吗？",
            "ja": "Boseを探しています。それはありますか？",
            "vi": "Tôi đang tìm Bose. Cửa hàng có bán không?",
            "en": "I’m looking for Bose. Do you carry that?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, we have a few models in stock. Over this way.",
          "translations": {
            "ko": "네, 몇 가지 모델이 재고가 있습니다. 이쪽으로 오세요.",
            "zh": "是的，我们有几款现货。就在这边。",
            "ja": "はい、いくつかのモデルを在庫しています。こちらです。",
            "vi": "Vâng, chúng tôi có một số mẫu hàng tồn. Hãy theo tôi.",
            "en": "Yes, we have a few models in stock. Over this way."
          }
        },
        {
          "role": "user",
          "text": "Thanks. Are they noise-canceling?",
          "translations": {
            "ko": "감사합니다. 그것들은 소음 차단 기능이 있나요?",
            "zh": "谢谢。它们有降噪功能吗？",
            "ja": "ありがとう。それらはノイズキャンセリングですか？",
            "vi": "Cảm ơn. Chúng có chức năng chống ồn không?",
            "en": "Thanks. Are they noise-canceling?"
          }
        },
        {
          "role": "ai",
          "text": "This one is. It’s our most popular model.",
          "translations": {
            "ko": "이 제품은 있습니다. 이건 우리 가장 인기 있는 모델입니다.",
            "zh": "这款有，它是我们最受欢迎的型号。",
            "ja": "これはそうです。これが一番人気のモデルです。",
            "vi": "Mẫu này có. Đó là mẫu bán chạy nhất của chúng tôi.",
            "en": "This one is. It’s our most popular model."
          }
        },
        {
          "role": "user",
          "text": "How does it compare to this Sony one?",
          "translations": {
            "ko": "이 Sony 제품과 어떻게 비교되나요?",
            "zh": "它和这款Sony的比起来如何？",
            "ja": "これはソニーのこれとどう比べますか？",
            "vi": "Nó so sánh như thế nào với mẫu Sony này?",
            "en": "How does it compare to this Sony one?"
          }
        },
        {
          "role": "ai",
          "text": "Both are excellent, but Bose has stronger noise cancellation.",
          "translations": {
            "ko": "두 제품 모두 훌륭하지만, Bose는 더 강력한 소음 차단 기능이 있습니다.",
            "zh": "两者都很优秀，但Bose的降噪功能更强。",
            "ja": "どちらも優れていますが、Boseのノイズキャンセリングは強力です。",
            "vi": "Cả hai đều tuyệt vời, nhưng Bose có khả năng chống ồn mạnh hơn.",
            "en": "Both are excellent, but Bose has stronger noise cancellation."
          }
        },
        {
          "role": "user",
          "text": "Is there a price difference?",
          "translations": {
            "ko": "가격 차이가 있나요?",
            "zh": "价格有差异吗？",
            "ja": "価格の違いはありますか？",
            "vi": "Có sự khác biệt về giá không?",
            "en": "Is there a price difference?"
          }
        },
        {
          "role": "ai",
          "text": "Bose is slightly more expensive, but it's currently on sale.",
          "translations": {
            "ko": "Bose는 약간 더 비싸지만, 현재 세일 중입니다.",
            "zh": "Bose稍微贵一些，但现在正在促销。",
            "ja": "Boseは少し高価ですが、現在セール中です。",
            "vi": "Bose hơi đắt hơn một chút, nhưng hiện đang giảm giá.",
            "en": "Bose is slightly more expensive, but it's currently on sale."
          }
        },
        {
          "role": "user",
          "text": "Do you offer a price match if I find it cheaper elsewhere?",
          "translations": {
            "ko": "다른 곳에서 더 싼 가격을 찾으면 가격 매치를 해주나요?",
            "zh": "如果我在别处找到更便宜的，你们提供价格匹配吗？",
            "ja": "他の場所で安く見つけた場合、価格を合わせてくれますか？",
            "vi": "Cửa hàng có chính sách giá cạnh tranh nếu tôi tìm thấy nơi khác rẻ hơn không?",
            "en": "Do you offer a price match if I find it cheaper elsewhere?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, just show us the competitor's listing.",
          "translations": {
            "ko": "네, 경쟁업체의 상품 목록을 보여주시면 됩니다.",
            "zh": "是的，只需向我们展示竞争对手的列表。",
            "ja": "はい、競合他社のリストを見せてください。",
            "vi": "Vâng, chỉ cần cho chúng tôi xem danh sách của đối thủ cạnh tranh.",
            "en": "Yes, just show us the competitor's listing."
          }
        },
        {
          "role": "user",
          "text": "I’ll check that online.",
          "translations": {
            "ko": "그럼 온라인으로 확인해볼게요.",
            "zh": "我会在线查看的。",
            "ja": "オンラインで確認します。",
            "vi": "Tôi sẽ kiểm tra trực tuyến.",
            "en": "I’ll check that online."
          }
        },
        {
          "role": "ai",
          "text": "Take your time. I’ll be nearby if you need help.",
          "translations": {
            "ko": "천천히 보세요. 도움이 필요하시면 제가 근처에 있을게요.",
            "zh": "慢慢来。如果你需要帮助，我就在附近。",
            "ja": "お時間をお取りください。何か助けが必要なら近くにいます。",
            "vi": "Hãy thong thả. Tôi sẽ ở gần đây nếu bạn cần giúp đỡ.",
            "en": "Take your time. I’ll be nearby if you need help."
          }
        },
        {
          "role": "user",
          "text": "Thanks, I might ask about warranty later.",
          "translations": {
            "ko": "감사합니다, 나중에 보증에 대해 물어볼 수도 있을 것 같아요.",
            "zh": "谢谢，我可能稍后会询问关于保修的问题。",
            "ja": "ありがとう、後で保証について尋ねるかもしれません。",
            "vi": "Cảm ơn, tôi có thể hỏi về bảo hành sau.",
            "en": "Thanks, I might ask about warranty later."
          }
        },
        {
          "role": "ai",
          "text": "Of course. Most products have a one-year warranty.",
          "translations": {
            "ko": "당연합니다. 대부분의 제품은 1년 보증이 있습니다.",
            "zh": "当然，大多数产品都有一年的保修期。",
            "ja": "もちろんです。ほとんどの製品には1年間の保証が付いています。",
            "vi": "Tất nhiên. Hầu hết các sản phẩm đều có bảo hành một năm.",
            "en": "Of course. Most products have a one-year warranty."
          }
        },
        {
          "role": "user",
          "text": "That’s helpful to know.",
          "translations": {
            "ko": "그 정보는 도움이 되네요.",
            "zh": "这很有帮助。",
            "ja": "それは知っておくと便利です。",
            "vi": "Biết điều đó rất hữu ích.",
            "en": "That’s helpful to know."
          }
        },
        {
          "role": "ai",
          "text": "Let me know if you’d like to test them.",
          "translations": {
            "ko": "테스트 해보고 싶으시면 알려주세요.",
            "zh": "如果你想试一试，告诉我。",
            "ja": "試してみたい場合はお知らせください。",
            "vi": "Hãy cho tôi biết nếu bạn muốn thử chúng.",
            "en": "Let me know if you’d like to test them."
          }
        },
        {
          "role": "user",
          "text": "Yes, I’d like to try them out.",
          "translations": {
            "ko": "네, 테스트 해보고 싶습니다.",
            "zh": "是的，我想试试。",
            "ja": "はい、試してみたいです。",
            "vi": "Vâng, tôi muốn thử chúng.",
            "en": "Yes, I’d like to try them out."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Comparing products before purchase",
        "ko": "구매 전 제품 비교하기",
        "zh": "购买前比较产品",
        "ja": "購入前の製品比較",
        "vi": "So sánh sản phẩm trước khi mua"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Hi there, can I help you find something?",
          "translations": {
            "ko": "안녕하세요, 무엇을 찾으시나요?",
            "zh": "嗨，有什么我可以帮您找的吗？",
            "ja": "こんにちは、何かお探しですか？",
            "vi": "Xin chào, tôi có thể giúp bạn tìm gì không?",
            "en": "Hi there, can I help you find something?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I’m looking for a specific brand of headphones.",
          "translations": {
            "ko": "네, 특정 브랜드의 헤드폰을 찾고 있습니다.",
            "zh": "是的，我正在寻找特定品牌的耳机。",
            "ja": "はい、特定のブランドのヘッドホンを探しています。",
            "vi": "Vâng, tôi đang tìm một thương hiệu tai nghe cụ thể.",
            "en": "Yes, I’m looking for a specific brand of headphones."
          }
        },
        {
          "role": "ai",
          "text": "Sure, which brand are you interested in?",
          "translations": {
            "ko": "그럼, 어떤 브랜드를 찾으시나요?",
            "zh": "好的，您对哪个品牌感兴趣？",
            "ja": "了解です、どのブランドに興味がありますか？",
            "vi": "Chắc chắn, bạn quan tâm đến thương hiệu nào?",
            "en": "Sure, which brand are you interested in?"
          }
        },
        {
          "role": "user",
          "text": "I’m looking for Bose. Do you carry that?",
          "translations": {
            "ko": "Bose를 찾고 있습니다. 여기에 있나요?",
            "zh": "我在找Bose，你们有卖吗？",
            "ja": "Boseを探しています。それはありますか？",
            "vi": "Tôi đang tìm Bose. Cửa hàng có bán không?",
            "en": "I’m looking for Bose. Do you carry that?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, we have a few models in stock. Over this way.",
          "translations": {
            "ko": "네, 몇 가지 모델이 재고가 있습니다. 이쪽으로 오세요.",
            "zh": "是的，我们有几款现货。就在这边。",
            "ja": "はい、いくつかのモデルを在庫しています。こちらです。",
            "vi": "Vâng, chúng tôi có một số mẫu hàng tồn. Hãy theo tôi.",
            "en": "Yes, we have a few models in stock. Over this way."
          }
        },
        {
          "role": "user",
          "text": "Thanks. Are they noise-canceling?",
          "translations": {
            "ko": "감사합니다. 그것들은 소음 차단 기능이 있나요?",
            "zh": "谢谢。它们有降噪功能吗？",
            "ja": "ありがとう。それらはノイズキャンセリングですか？",
            "vi": "Cảm ơn. Chúng có chức năng chống ồn không?",
            "en": "Thanks. Are they noise-canceling?"
          }
        },
        {
          "role": "ai",
          "text": "This one is. It’s our most popular model.",
          "translations": {
            "ko": "이 제품은 있습니다. 이건 우리 가장 인기 있는 모델입니다.",
            "zh": "这款有，它是我们最受欢迎的型号。",
            "ja": "これはそうです。これが一番人気のモデルです。",
            "vi": "Mẫu này có. Đó là mẫu bán chạy nhất của chúng tôi.",
            "en": "This one is. It’s our most popular model."
          }
        },
        {
          "role": "user",
          "text": "How does it compare to this Sony one?",
          "translations": {
            "ko": "이 Sony 제품과 어떻게 비교되나요?",
            "zh": "它和这款Sony的比起来如何？",
            "ja": "これはソニーのこれとどう比べますか？",
            "vi": "Nó so sánh như thế nào với mẫu Sony này?",
            "en": "How does it compare to this Sony one?"
          }
        },
        {
          "role": "ai",
          "text": "Both are excellent, but Bose has stronger noise cancellation.",
          "translations": {
            "ko": "두 제품 모두 훌륭하지만, Bose는 더 강력한 소음 차단 기능이 있습니다.",
            "zh": "两者都很优秀，但Bose的降噪功能更强。",
            "ja": "どちらも優れていますが、Boseのノイズキャンセリングは強力です。",
            "vi": "Cả hai đều tuyệt vời, nhưng Bose có khả năng chống ồn mạnh hơn.",
            "en": "Both are excellent, but Bose has stronger noise cancellation."
          }
        },
        {
          "role": "user",
          "text": "Is there a price difference?",
          "translations": {
            "ko": "가격 차이가 있나요?",
            "zh": "价格有差异吗？",
            "ja": "価格の違いはありますか？",
            "vi": "Có sự khác biệt về giá không?",
            "en": "Is there a price difference?"
          }
        },
        {
          "role": "ai",
          "text": "Bose is slightly more expensive, but it's currently on sale.",
          "translations": {
            "ko": "Bose는 약간 더 비싸지만, 현재 세일 중입니다.",
            "zh": "Bose稍微贵一些，但现在正在促销。",
            "ja": "Boseは少し高価ですが、現在セール中です。",
            "vi": "Bose hơi đắt hơn một chút, nhưng hiện đang giảm giá.",
            "en": "Bose is slightly more expensive, but it's currently on sale."
          }
        },
        {
          "role": "user",
          "text": "Do you offer a price match if I find it cheaper elsewhere?",
          "translations": {
            "ko": "다른 곳에서 더 싼 가격을 찾으면 가격 매치를 해주나요?",
            "zh": "如果我在别处找到更便宜的，你们提供价格匹配吗？",
            "ja": "他の場所で安く見つけた場合、価格を合わせてくれますか？",
            "vi": "Cửa hàng có chính sách giá cạnh tranh nếu tôi tìm thấy nơi khác rẻ hơn không?",
            "en": "Do you offer a price match if I find it cheaper elsewhere?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, just show us the competitor's listing.",
          "translations": {
            "ko": "네, 경쟁업체의 상품 목록을 보여주시면 됩니다.",
            "zh": "是的，只需向我们展示竞争对手的列表。",
            "ja": "はい、競合他社のリストを見せてください。",
            "vi": "Vâng, chỉ cần cho chúng tôi xem danh sách của đối thủ cạnh tranh.",
            "en": "Yes, just show us the competitor's listing."
          }
        },
        {
          "role": "user",
          "text": "I’ll check that online.",
          "translations": {
            "ko": "그럼 온라인으로 확인해볼게요.",
            "zh": "我会在线查看的。",
            "ja": "オンラインで確認します。",
            "vi": "Tôi sẽ kiểm tra trực tuyến.",
            "en": "I’ll check that online."
          }
        },
        {
          "role": "ai",
          "text": "Take your time. I’ll be nearby if you need help.",
          "translations": {
            "ko": "천천히 보세요. 도움이 필요하시면 제가 근처에 있을게요.",
            "zh": "慢慢来。如果你需要帮助，我就在附近。",
            "ja": "お時間をお取りください。何か助けが必要なら近くにいます。",
            "vi": "Hãy thong thả. Tôi sẽ ở gần đây nếu bạn cần giúp đỡ.",
            "en": "Take your time. I’ll be nearby if you need help."
          }
        },
        {
          "role": "user",
          "text": "Thanks, I might ask about warranty later.",
          "translations": {
            "ko": "감사합니다, 나중에 보증에 대해 물어볼 수도 있을 것 같아요.",
            "zh": "谢谢，我可能稍后会询问关于保修的问题。",
            "ja": "ありがとう、後で保証について尋ねるかもしれません。",
            "vi": "Cảm ơn, tôi có thể hỏi về bảo hành sau.",
            "en": "Thanks, I might ask about warranty later."
          }
        },
        {
          "role": "ai",
          "text": "Of course. Most products have a one-year warranty.",
          "translations": {
            "ko": "당연합니다. 대부분의 제품은 1년 보증이 있습니다.",
            "zh": "当然，大多数产品都有一年的保修期。",
            "ja": "もちろんです。ほとんどの製品には1年間の保証が付いています。",
            "vi": "Tất nhiên. Hầu hết các sản phẩm đều có bảo hành một năm.",
            "en": "Of course. Most products have a one-year warranty."
          }
        },
        {
          "role": "user",
          "text": "That’s helpful to know.",
          "translations": {
            "ko": "그 정보는 도움이 되네요.",
            "zh": "这很有帮助。",
            "ja": "それは知っておくと便利です。",
            "vi": "Biết điều đó rất hữu ích.",
            "en": "That’s helpful to know."
          }
        },
        {
          "role": "ai",
          "text": "Let me know if you’d like to test them.",
          "translations": {
            "ko": "테스트 해보고 싶으시면 알려주세요.",
            "zh": "如果你想试一试，告诉我。",
            "ja": "試してみたい場合はお知らせください。",
            "vi": "Hãy cho tôi biết nếu bạn muốn thử chúng.",
            "en": "Let me know if you’d like to test them."
          }
        },
        {
          "role": "user",
          "text": "Yes, I’d like to try them out.",
          "translations": {
            "ko": "네, 테스트 해보고 싶습니다.",
            "zh": "是的，我想试试。",
            "ja": "はい、試してみたいです。",
            "vi": "Vâng, tôi muốn thử chúng.",
            "en": "Yes, I’d like to try them out."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Returning an online purchase in store",
        "ko": "온라인 구매 제품 매장에서 반품하기",
        "zh": "在店内退还在线购买的商品",
        "ja": "オンライン購入品の店舗での返品",
        "vi": "Trả lại một mua hàng trực tuyến tại cửa hàng"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Hi there, can I help you find something?",
          "translations": {
            "ko": "안녕하세요, 무엇을 찾으시나요?",
            "zh": "嗨，有什么我可以帮您找的吗？",
            "ja": "こんにちは、何かお探しですか？",
            "vi": "Xin chào, tôi có thể giúp bạn tìm gì không?",
            "en": "Hi there, can I help you find something?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I’m looking for a specific brand of headphones.",
          "translations": {
            "ko": "네, 특정 브랜드의 헤드폰을 찾고 있습니다.",
            "zh": "是的，我正在寻找特定品牌的耳机。",
            "ja": "はい、特定のブランドのヘッドホンを探しています。",
            "vi": "Vâng, tôi đang tìm một thương hiệu tai nghe cụ thể.",
            "en": "Yes, I’m looking for a specific brand of headphones."
          }
        },
        {
          "role": "ai",
          "text": "Sure, which brand are you interested in?",
          "translations": {
            "ko": "그럼, 어떤 브랜드를 찾으시나요?",
            "zh": "好的，您对哪个品牌感兴趣？",
            "ja": "了解です、どのブランドに興味がありますか？",
            "vi": "Chắc chắn, bạn quan tâm đến thương hiệu nào?",
            "en": "Sure, which brand are you interested in?"
          }
        },
        {
          "role": "user",
          "text": "I’m looking for Bose. Do you carry that?",
          "translations": {
            "ko": "Bose를 찾고 있습니다. 여기에 있나요?",
            "zh": "我在找Bose，你们有卖吗？",
            "ja": "Boseを探しています。それはありますか？",
            "vi": "Tôi đang tìm Bose. Cửa hàng có bán không?",
            "en": "I’m looking for Bose. Do you carry that?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, we have a few models in stock. Over this way.",
          "translations": {
            "ko": "네, 몇 가지 모델이 재고가 있습니다. 이쪽으로 오세요.",
            "zh": "是的，我们有几款现货。就在这边。",
            "ja": "はい、いくつかのモデルを在庫しています。こちらです。",
            "vi": "Vâng, chúng tôi có một số mẫu hàng tồn. Hãy theo tôi.",
            "en": "Yes, we have a few models in stock. Over this way."
          }
        },
        {
          "role": "user",
          "text": "Thanks. Are they noise-canceling?",
          "translations": {
            "ko": "감사합니다. 그것들은 소음 차단 기능이 있나요?",
            "zh": "谢谢。它们有降噪功能吗？",
            "ja": "ありがとう。それらはノイズキャンセリングですか？",
            "vi": "Cảm ơn. Chúng có chức năng chống ồn không?",
            "en": "Thanks. Are they noise-canceling?"
          }
        },
        {
          "role": "ai",
          "text": "This one is. It’s our most popular model.",
          "translations": {
            "ko": "이 제품은 있습니다. 이건 우리 가장 인기 있는 모델입니다.",
            "zh": "这款有，它是我们最受欢迎的型号。",
            "ja": "これはそうです。これが一番人気のモデルです。",
            "vi": "Mẫu này có. Đó là mẫu bán chạy nhất của chúng tôi.",
            "en": "This one is. It’s our most popular model."
          }
        },
        {
          "role": "user",
          "text": "How does it compare to this Sony one?",
          "translations": {
            "ko": "이 Sony 제품과 어떻게 비교되나요?",
            "zh": "它和这款Sony的比起来如何？",
            "ja": "これはソニーのこれとどう比べますか？",
            "vi": "Nó so sánh như thế nào với mẫu Sony này?",
            "en": "How does it compare to this Sony one?"
          }
        },
        {
          "role": "ai",
          "text": "Both are excellent, but Bose has stronger noise cancellation.",
          "translations": {
            "ko": "두 제품 모두 훌륭하지만, Bose는 더 강력한 소음 차단 기능이 있습니다.",
            "zh": "两者都很优秀，但Bose的降噪功能更强。",
            "ja": "どちらも優れていますが、Boseのノイズキャンセリングは強力です。",
            "vi": "Cả hai đều tuyệt vời, nhưng Bose có khả năng chống ồn mạnh hơn.",
            "en": "Both are excellent, but Bose has stronger noise cancellation."
          }
        },
        {
          "role": "user",
          "text": "Is there a price difference?",
          "translations": {
            "ko": "가격 차이가 있나요?",
            "zh": "价格有差异吗？",
            "ja": "価格の違いはありますか？",
            "vi": "Có sự khác biệt về giá không?",
            "en": "Is there a price difference?"
          }
        },
        {
          "role": "ai",
          "text": "Bose is slightly more expensive, but it's currently on sale.",
          "translations": {
            "ko": "Bose는 약간 더 비싸지만, 현재 세일 중입니다.",
            "zh": "Bose稍微贵一些，但现在正在促销。",
            "ja": "Boseは少し高価ですが、現在セール中です。",
            "vi": "Bose hơi đắt hơn một chút, nhưng hiện đang giảm giá.",
            "en": "Bose is slightly more expensive, but it's currently on sale."
          }
        },
        {
          "role": "user",
          "text": "Do you offer a price match if I find it cheaper elsewhere?",
          "translations": {
            "ko": "다른 곳에서 더 싼 가격을 찾으면 가격 매치를 해주나요?",
            "zh": "如果我在别处找到更便宜的，你们提供价格匹配吗？",
            "ja": "他の場所で安く見つけた場合、価格を合わせてくれますか？",
            "vi": "Cửa hàng có chính sách giá cạnh tranh nếu tôi tìm thấy nơi khác rẻ hơn không?",
            "en": "Do you offer a price match if I find it cheaper elsewhere?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, just show us the competitor's listing.",
          "translations": {
            "ko": "네, 경쟁업체의 상품 목록을 보여주시면 됩니다.",
            "zh": "是的，只需向我们展示竞争对手的列表。",
            "ja": "はい、競合他社のリストを見せてください。",
            "vi": "Vâng, chỉ cần cho chúng tôi xem danh sách của đối thủ cạnh tranh.",
            "en": "Yes, just show us the competitor's listing."
          }
        },
        {
          "role": "user",
          "text": "I’ll check that online.",
          "translations": {
            "ko": "그럼 온라인으로 확인해볼게요.",
            "zh": "我会在线查看的。",
            "ja": "オンラインで確認します。",
            "vi": "Tôi sẽ kiểm tra trực tuyến.",
            "en": "I’ll check that online."
          }
        },
        {
          "role": "ai",
          "text": "Take your time. I’ll be nearby if you need help.",
          "translations": {
            "ko": "천천히 보세요. 도움이 필요하시면 제가 근처에 있을게요.",
            "zh": "慢慢来。如果你需要帮助，我就在附近。",
            "ja": "お時間をお取りください。何か助けが必要なら近くにいます。",
            "vi": "Hãy thong thả. Tôi sẽ ở gần đây nếu bạn cần giúp đỡ.",
            "en": "Take your time. I’ll be nearby if you need help."
          }
        },
        {
          "role": "user",
          "text": "Thanks, I might ask about warranty later.",
          "translations": {
            "ko": "감사합니다, 나중에 보증에 대해 물어볼 수도 있을 것 같아요.",
            "zh": "谢谢，我可能稍后会询问关于保修的问题。",
            "ja": "ありがとう、後で保証について尋ねるかもしれません。",
            "vi": "Cảm ơn, tôi có thể hỏi về bảo hành sau.",
            "en": "Thanks, I might ask about warranty later."
          }
        },
        {
          "role": "ai",
          "text": "Of course. Most products have a one-year warranty.",
          "translations": {
            "ko": "당연합니다. 대부분의 제품은 1년 보증이 있습니다.",
            "zh": "当然，大多数产品都有一年的保修期。",
            "ja": "もちろんです。ほとんどの製品には1年間の保証が付いています。",
            "vi": "Tất nhiên. Hầu hết các sản phẩm đều có bảo hành một năm.",
            "en": "Of course. Most products have a one-year warranty."
          }
        },
        {
          "role": "user",
          "text": "That’s helpful to know.",
          "translations": {
            "ko": "그 정보는 도움이 되네요.",
            "zh": "这很有帮助。",
            "ja": "それは知っておくと便利です。",
            "vi": "Biết điều đó rất hữu ích.",
            "en": "That’s helpful to know."
          }
        },
        {
          "role": "ai",
          "text": "Let me know if you’d like to test them.",
          "translations": {
            "ko": "테스트 해보고 싶으시면 알려주세요.",
            "zh": "如果你想试一试，告诉我。",
            "ja": "試してみたい場合はお知らせください。",
            "vi": "Hãy cho tôi biết nếu bạn muốn thử chúng.",
            "en": "Let me know if you’d like to test them."
          }
        },
        {
          "role": "user",
          "text": "Yes, I’d like to try them out.",
          "translations": {
            "ko": "네, 테스트 해보고 싶습니다.",
            "zh": "是的，我想试试。",
            "ja": "はい、試してみたいです。",
            "vi": "Vâng, tôi muốn thử chúng.",
            "en": "Yes, I’d like to try them out."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Requesting price match for an item",
        "ko": "상품에 대한 가격 매치 요청하기",
        "zh": "请求商品价格匹配",
        "ja": "アイテムの価格マッチをリクエスト",
        "vi": "Yêu cầu giá cạnh tranh cho một mặt hàng"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Hi there, can I help you find something?",
          "translations": {
            "ko": "안녕하세요, 무엇을 찾으시나요?",
            "zh": "嗨，有什么我可以帮您找的吗？",
            "ja": "こんにちは、何かお探しですか？",
            "vi": "Xin chào, tôi có thể giúp bạn tìm gì không?",
            "en": "Hi there, can I help you find something?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I’m looking for a specific brand of headphones.",
          "translations": {
            "ko": "네, 특정 브랜드의 헤드폰을 찾고 있습니다.",
            "zh": "是的，我正在寻找特定品牌的耳机。",
            "ja": "はい、特定のブランドのヘッドホンを探しています。",
            "vi": "Vâng, tôi đang tìm một thương hiệu tai nghe cụ thể.",
            "en": "Yes, I’m looking for a specific brand of headphones."
          }
        },
        {
          "role": "ai",
          "text": "Sure, which brand are you interested in?",
          "translations": {
            "ko": "그럼, 어떤 브랜드를 찾으시나요?",
            "zh": "好的，您对哪个品牌感兴趣？",
            "ja": "了解です、どのブランドに興味がありますか？",
            "vi": "Chắc chắn, bạn quan tâm đến thương hiệu nào?",
            "en": "Sure, which brand are you interested in?"
          }
        },
        {
          "role": "user",
          "text": "I’m looking for Bose. Do you carry that?",
          "translations": {
            "ko": "Bose를 찾고 있습니다. 여기에 있나요?",
            "zh": "我在找Bose，你们有卖吗？",
            "ja": "Boseを探しています。それはありますか？",
            "vi": "Tôi đang tìm Bose. Cửa hàng có bán không?",
            "en": "I’m looking for Bose. Do you carry that?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, we have a few models in stock. Over this way.",
          "translations": {
            "ko": "네, 몇 가지 모델이 재고가 있습니다. 이쪽으로 오세요.",
            "zh": "是的，我们有几款现货。就在这边。",
            "ja": "はい、いくつかのモデルを在庫しています。こちらです。",
            "vi": "Vâng, chúng tôi có một số mẫu hàng tồn. Hãy theo tôi.",
            "en": "Yes, we have a few models in stock. Over this way."
          }
        },
        {
          "role": "user",
          "text": "Thanks. Are they noise-canceling?",
          "translations": {
            "ko": "감사합니다. 그것들은 소음 차단 기능이 있나요?",
            "zh": "谢谢。它们有降噪功能吗？",
            "ja": "ありがとう。それらはノイズキャンセリングですか？",
            "vi": "Cảm ơn. Chúng có chức năng chống ồn không?",
            "en": "Thanks. Are they noise-canceling?"
          }
        },
        {
          "role": "ai",
          "text": "This one is. It’s our most popular model.",
          "translations": {
            "ko": "이 제품은 있습니다. 이건 우리 가장 인기 있는 모델입니다.",
            "zh": "这款有，它是我们最受欢迎的型号。",
            "ja": "これはそうです。これが一番人気のモデルです。",
            "vi": "Mẫu này có. Đó là mẫu bán chạy nhất của chúng tôi.",
            "en": "This one is. It’s our most popular model."
          }
        },
        {
          "role": "user",
          "text": "How does it compare to this Sony one?",
          "translations": {
            "ko": "이 Sony 제품과 어떻게 비교되나요?",
            "zh": "它和这款Sony的比起来如何？",
            "ja": "これはソニーのこれとどう比べますか？",
            "vi": "Nó so sánh như thế nào với mẫu Sony này?",
            "en": "How does it compare to this Sony one?"
          }
        },
        {
          "role": "ai",
          "text": "Both are excellent, but Bose has stronger noise cancellation.",
          "translations": {
            "ko": "두 제품 모두 훌륭하지만, Bose는 더 강력한 소음 차단 기능이 있습니다.",
            "zh": "两者都很优秀，但Bose的降噪功能更强。",
            "ja": "どちらも優れていますが、Boseのノイズキャンセリングは強力です。",
            "vi": "Cả hai đều tuyệt vời, nhưng Bose có khả năng chống ồn mạnh hơn.",
            "en": "Both are excellent, but Bose has stronger noise cancellation."
          }
        },
        {
          "role": "user",
          "text": "Is there a price difference?",
          "translations": {
            "ko": "가격 차이가 있나요?",
            "zh": "价格有差异吗？",
            "ja": "価格の違いはありますか？",
            "vi": "Có sự khác biệt về giá không?",
            "en": "Is there a price difference?"
          }
        },
        {
          "role": "ai",
          "text": "Bose is slightly more expensive, but it's currently on sale.",
          "translations": {
            "ko": "Bose는 약간 더 비싸지만, 현재 세일 중입니다.",
            "zh": "Bose稍微贵一些，但现在正在促销。",
            "ja": "Boseは少し高価ですが、現在セール中です。",
            "vi": "Bose hơi đắt hơn một chút, nhưng hiện đang giảm giá.",
            "en": "Bose is slightly more expensive, but it's currently on sale."
          }
        },
        {
          "role": "user",
          "text": "Do you offer a price match if I find it cheaper elsewhere?",
          "translations": {
            "ko": "다른 곳에서 더 싼 가격을 찾으면 가격 매치를 해주나요?",
            "zh": "如果我在别处找到更便宜的，你们提供价格匹配吗？",
            "ja": "他の場所で安く見つけた場合、価格を合わせてくれますか？",
            "vi": "Cửa hàng có chính sách giá cạnh tranh nếu tôi tìm thấy nơi khác rẻ hơn không?",
            "en": "Do you offer a price match if I find it cheaper elsewhere?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, just show us the competitor's listing.",
          "translations": {
            "ko": "네, 경쟁업체의 상품 목록을 보여주시면 됩니다.",
            "zh": "是的，只需向我们展示竞争对手的列表。",
            "ja": "はい、競合他社のリストを見せてください。",
            "vi": "Vâng, chỉ cần cho chúng tôi xem danh sách của đối thủ cạnh tranh.",
            "en": "Yes, just show us the competitor's listing."
          }
        },
        {
          "role": "user",
          "text": "I’ll check that online.",
          "translations": {
            "ko": "그럼 온라인으로 확인해볼게요.",
            "zh": "我会在线查看的。",
            "ja": "オンラインで確認します。",
            "vi": "Tôi sẽ kiểm tra trực tuyến.",
            "en": "I’ll check that online."
          }
        },
        {
          "role": "ai",
          "text": "Take your time. I’ll be nearby if you need help.",
          "translations": {
            "ko": "천천히 보세요. 도움이 필요하시면 제가 근처에 있을게요.",
            "zh": "慢慢来。如果你需要帮助，我就在附近。",
            "ja": "お時間をお取りください。何か助けが必要なら近くにいます。",
            "vi": "Hãy thong thả. Tôi sẽ ở gần đây nếu bạn cần giúp đỡ.",
            "en": "Take your time. I’ll be nearby if you need help."
          }
        },
        {
          "role": "user",
          "text": "Thanks, I might ask about warranty later.",
          "translations": {
            "ko": "감사합니다, 나중에 보증에 대해 물어볼 수도 있을 것 같아요.",
            "zh": "谢谢，我可能稍后会询问关于保修的问题。",
            "ja": "ありがとう、後で保証について尋ねるかもしれません。",
            "vi": "Cảm ơn, tôi có thể hỏi về bảo hành sau.",
            "en": "Thanks, I might ask about warranty later."
          }
        },
        {
          "role": "ai",
          "text": "Of course. Most products have a one-year warranty.",
          "translations": {
            "ko": "당연합니다. 대부분의 제품은 1년 보증이 있습니다.",
            "zh": "当然，大多数产品都有一年的保修期。",
            "ja": "もちろんです。ほとんどの製品には1年間の保証が付いています。",
            "vi": "Tất nhiên. Hầu hết các sản phẩm đều có bảo hành một năm.",
            "en": "Of course. Most products have a one-year warranty."
          }
        },
        {
          "role": "user",
          "text": "That’s helpful to know.",
          "translations": {
            "ko": "그 정보는 도움이 되네요.",
            "zh": "这很有帮助。",
            "ja": "それは知っておくと便利です。",
            "vi": "Biết điều đó rất hữu ích.",
            "en": "That’s helpful to know."
          }
        },
        {
          "role": "ai",
          "text": "Let me know if you’d like to test them.",
          "translations": {
            "ko": "테스트 해보고 싶으시면 알려주세요.",
            "zh": "如果你想试一试，告诉我。",
            "ja": "試してみたい場合はお知らせください。",
            "vi": "Hãy cho tôi biết nếu bạn muốn thử chúng.",
            "en": "Let me know if you’d like to test them."
          }
        },
        {
          "role": "user",
          "text": "Yes, I’d like to try them out.",
          "translations": {
            "ko": "네, 테스트 해보고 싶습니다.",
            "zh": "是的，我想试试。",
            "ja": "はい、試してみたいです。",
            "vi": "Vâng, tôi muốn thử chúng.",
            "en": "Yes, I’d like to try them out."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Discussing warranty options",
        "ko": "보증 옵션에 대해 논의하기",
        "zh": "讨论保修选项",
        "ja": "保証オプションについて話し合う",
        "vi": "Thảo luận về các tùy chọn bảo hành"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Hi there, can I help you find something?",
          "translations": {
            "ko": "안녕하세요, 무엇을 찾으시나요?",
            "zh": "嗨，有什么我可以帮您找的吗？",
            "ja": "こんにちは、何かお探しですか？",
            "vi": "Xin chào, tôi có thể giúp bạn tìm gì không?",
            "en": "Hi there, can I help you find something?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I’m looking for a specific brand of headphones.",
          "translations": {
            "ko": "네, 특정 브랜드의 헤드폰을 찾고 있습니다.",
            "zh": "是的，我正在寻找特定品牌的耳机。",
            "ja": "はい、特定のブランドのヘッドホンを探しています。",
            "vi": "Vâng, tôi đang tìm một thương hiệu tai nghe cụ thể.",
            "en": "Yes, I’m looking for a specific brand of headphones."
          }
        },
        {
          "role": "ai",
          "text": "Sure, which brand are you interested in?",
          "translations": {
            "ko": "그럼, 어떤 브랜드를 찾으시나요?",
            "zh": "好的，您对哪个品牌感兴趣？",
            "ja": "了解です、どのブランドに興味がありますか？",
            "vi": "Chắc chắn, bạn quan tâm đến thương hiệu nào?",
            "en": "Sure, which brand are you interested in?"
          }
        },
        {
          "role": "user",
          "text": "I’m looking for Bose. Do you carry that?",
          "translations": {
            "ko": "Bose를 찾고 있습니다. 여기에 있나요?",
            "zh": "我在找Bose，你们有卖吗？",
            "ja": "Boseを探しています。それはありますか？",
            "vi": "Tôi đang tìm Bose. Cửa hàng có bán không?",
            "en": "I’m looking for Bose. Do you carry that?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, we have a few models in stock. Over this way.",
          "translations": {
            "ko": "네, 몇 가지 모델이 재고가 있습니다. 이쪽으로 오세요.",
            "zh": "是的，我们有几款现货。就在这边。",
            "ja": "はい、いくつかのモデルを在庫しています。こちらです。",
            "vi": "Vâng, chúng tôi có một số mẫu hàng tồn. Hãy theo tôi.",
            "en": "Yes, we have a few models in stock. Over this way."
          }
        },
        {
          "role": "user",
          "text": "Thanks. Are they noise-canceling?",
          "translations": {
            "ko": "감사합니다. 그것들은 소음 차단 기능이 있나요?",
            "zh": "谢谢。它们有降噪功能吗？",
            "ja": "ありがとう。それらはノイズキャンセリングですか？",
            "vi": "Cảm ơn. Chúng có chức năng chống ồn không?",
            "en": "Thanks. Are they noise-canceling?"
          }
        },
        {
          "role": "ai",
          "text": "This one is. It’s our most popular model.",
          "translations": {
            "ko": "이 제품은 있습니다. 이건 우리 가장 인기 있는 모델입니다.",
            "zh": "这款有，它是我们最受欢迎的型号。",
            "ja": "これはそうです。これが一番人気のモデルです。",
            "vi": "Mẫu này có. Đó là mẫu bán chạy nhất của chúng tôi.",
            "en": "This one is. It’s our most popular model."
          }
        },
        {
          "role": "user",
          "text": "How does it compare to this Sony one?",
          "translations": {
            "ko": "이 Sony 제품과 어떻게 비교되나요?",
            "zh": "它和这款Sony的比起来如何？",
            "ja": "これはソニーのこれとどう比べますか？",
            "vi": "Nó so sánh như thế nào với mẫu Sony này?",
            "en": "How does it compare to this Sony one?"
          }
        },
        {
          "role": "ai",
          "text": "Both are excellent, but Bose has stronger noise cancellation.",
          "translations": {
            "ko": "두 제품 모두 훌륭하지만, Bose는 더 강력한 소음 차단 기능이 있습니다.",
            "zh": "两者都很优秀，但Bose的降噪功能更强。",
            "ja": "どちらも優れていますが、Boseのノイズキャンセリングは強力です。",
            "vi": "Cả hai đều tuyệt vời, nhưng Bose có khả năng chống ồn mạnh hơn.",
            "en": "Both are excellent, but Bose has stronger noise cancellation."
          }
        },
        {
          "role": "user",
          "text": "Is there a price difference?",
          "translations": {
            "ko": "가격 차이가 있나요?",
            "zh": "价格有差异吗？",
            "ja": "価格の違いはありますか？",
            "vi": "Có sự khác biệt về giá không?",
            "en": "Is there a price difference?"
          }
        },
        {
          "role": "ai",
          "text": "Bose is slightly more expensive, but it's currently on sale.",
          "translations": {
            "ko": "Bose는 약간 더 비싸지만, 현재 세일 중입니다.",
            "zh": "Bose稍微贵一些，但现在正在促销。",
            "ja": "Boseは少し高価ですが、現在セール中です。",
            "vi": "Bose hơi đắt hơn một chút, nhưng hiện đang giảm giá.",
            "en": "Bose is slightly more expensive, but it's currently on sale."
          }
        },
        {
          "role": "user",
          "text": "Do you offer a price match if I find it cheaper elsewhere?",
          "translations": {
            "ko": "다른 곳에서 더 싼 가격을 찾으면 가격 매치를 해주나요?",
            "zh": "如果我在别处找到更便宜的，你们提供价格匹配吗？",
            "ja": "他の場所で安く見つけた場合、価格を合わせてくれますか？",
            "vi": "Cửa hàng có chính sách giá cạnh tranh nếu tôi tìm thấy nơi khác rẻ hơn không?",
            "en": "Do you offer a price match if I find it cheaper elsewhere?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, just show us the competitor's listing.",
          "translations": {
            "ko": "네, 경쟁업체의 상품 목록을 보여주시면 됩니다.",
            "zh": "是的，只需向我们展示竞争对手的列表。",
            "ja": "はい、競合他社のリストを見せてください。",
            "vi": "Vâng, chỉ cần cho chúng tôi xem danh sách của đối thủ cạnh tranh.",
            "en": "Yes, just show us the competitor's listing."
          }
        },
        {
          "role": "user",
          "text": "I’ll check that online.",
          "translations": {
            "ko": "그럼 온라인으로 확인해볼게요.",
            "zh": "我会在线查看的。",
            "ja": "オンラインで確認します。",
            "vi": "Tôi sẽ kiểm tra trực tuyến.",
            "en": "I’ll check that online."
          }
        },
        {
          "role": "ai",
          "text": "Take your time. I’ll be nearby if you need help.",
          "translations": {
            "ko": "천천히 보세요. 도움이 필요하시면 제가 근처에 있을게요.",
            "zh": "慢慢来。如果你需要帮助，我就在附近。",
            "ja": "お時間をお取りください。何か助けが必要なら近くにいます。",
            "vi": "Hãy thong thả. Tôi sẽ ở gần đây nếu bạn cần giúp đỡ.",
            "en": "Take your time. I’ll be nearby if you need help."
          }
        },
        {
          "role": "user",
          "text": "Thanks, I might ask about warranty later.",
          "translations": {
            "ko": "감사합니다, 나중에 보증에 대해 물어볼 수도 있을 것 같아요.",
            "zh": "谢谢，我可能稍后会询问关于保修的问题。",
            "ja": "ありがとう、後で保証について尋ねるかもしれません。",
            "vi": "Cảm ơn, tôi có thể hỏi về bảo hành sau.",
            "en": "Thanks, I might ask about warranty later."
          }
        },
        {
          "role": "ai",
          "text": "Of course. Most products have a one-year warranty.",
          "translations": {
            "ko": "당연합니다. 대부분의 제품은 1년 보증이 있습니다.",
            "zh": "当然，大多数产品都有一年的保修期。",
            "ja": "もちろんです。ほとんどの製品には1年間の保証が付いています。",
            "vi": "Tất nhiên. Hầu hết các sản phẩm đều có bảo hành một năm.",
            "en": "Of course. Most products have a one-year warranty."
          }
        },
        {
          "role": "user",
          "text": "That’s helpful to know.",
          "translations": {
            "ko": "그 정보는 도움이 되네요.",
            "zh": "这很有帮助。",
            "ja": "それは知っておくと便利です。",
            "vi": "Biết điều đó rất hữu ích.",
            "en": "That’s helpful to know."
          }
        },
        {
          "role": "ai",
          "text": "Let me know if you’d like to test them.",
          "translations": {
            "ko": "테스트 해보고 싶으시면 알려주세요.",
            "zh": "如果你想试一试，告诉我。",
            "ja": "試してみたい場合はお知らせください。",
            "vi": "Hãy cho tôi biết nếu bạn muốn thử chúng.",
            "en": "Let me know if you’d like to test them."
          }
        },
        {
          "role": "user",
          "text": "Yes, I’d like to try them out.",
          "translations": {
            "ko": "네, 테스트 해보고 싶습니다.",
            "zh": "是的，我想试试。",
            "ja": "はい、試してみたいです。",
            "vi": "Vâng, tôi muốn thử chúng.",
            "en": "Yes, I’d like to try them out."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Using a coupon or gift card",
        "ko": "쿠폰이나 기프트 카드 사용하기",
        "zh": "使用优惠券或礼品卡",
        "ja": "クーポンやギフトカードの使用",
        "vi": "Sử dụng phiếu giảm giá hoặc thẻ quà tặng"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Hi there, can I help you find something?",
          "translations": {
            "ko": "안녕하세요, 무엇을 찾으시나요?",
            "zh": "嗨，有什么我可以帮您找的吗？",
            "ja": "こんにちは、何かお探しですか？",
            "vi": "Xin chào, tôi có thể giúp bạn tìm gì không?",
            "en": "Hi there, can I help you find something?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I’m looking for a specific brand of headphones.",
          "translations": {
            "ko": "네, 특정 브랜드의 헤드폰을 찾고 있습니다.",
            "zh": "是的，我正在寻找特定品牌的耳机。",
            "ja": "はい、特定のブランドのヘッドホンを探しています。",
            "vi": "Vâng, tôi đang tìm một thương hiệu tai nghe cụ thể.",
            "en": "Yes, I’m looking for a specific brand of headphones."
          }
        },
        {
          "role": "ai",
          "text": "Sure, which brand are you interested in?",
          "translations": {
            "ko": "그럼, 어떤 브랜드를 찾으시나요?",
            "zh": "好的，您对哪个品牌感兴趣？",
            "ja": "了解です、どのブランドに興味がありますか？",
            "vi": "Chắc chắn, bạn quan tâm đến thương hiệu nào?",
            "en": "Sure, which brand are you interested in?"
          }
        },
        {
          "role": "user",
          "text": "I’m looking for Bose. Do you carry that?",
          "translations": {
            "ko": "Bose를 찾고 있습니다. 여기에 있나요?",
            "zh": "我在找Bose，你们有卖吗？",
            "ja": "Boseを探しています。それはありますか？",
            "vi": "Tôi đang tìm Bose. Cửa hàng có bán không?",
            "en": "I’m looking for Bose. Do you carry that?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, we have a few models in stock. Over this way.",
          "translations": {
            "ko": "네, 몇 가지 모델이 재고가 있습니다. 이쪽으로 오세요.",
            "zh": "是的，我们有几款现货。就在这边。",
            "ja": "はい、いくつかのモデルを在庫しています。こちらです。",
            "vi": "Vâng, chúng tôi có một số mẫu hàng tồn. Hãy theo tôi.",
            "en": "Yes, we have a few models in stock. Over this way."
          }
        },
        {
          "role": "user",
          "text": "Thanks. Are they noise-canceling?",
          "translations": {
            "ko": "감사합니다. 그것들은 소음 차단 기능이 있나요?",
            "zh": "谢谢。它们有降噪功能吗？",
            "ja": "ありがとう。それらはノイズキャンセリングですか？",
            "vi": "Cảm ơn. Chúng có chức năng chống ồn không?",
            "en": "Thanks. Are they noise-canceling?"
          }
        },
        {
          "role": "ai",
          "text": "This one is. It’s our most popular model.",
          "translations": {
            "ko": "이 제품은 있습니다. 이건 우리 가장 인기 있는 모델입니다.",
            "zh": "这款有，它是我们最受欢迎的型号。",
            "ja": "これはそうです。これが一番人気のモデルです。",
            "vi": "Mẫu này có. Đó là mẫu bán chạy nhất của chúng tôi.",
            "en": "This one is. It’s our most popular model."
          }
        },
        {
          "role": "user",
          "text": "How does it compare to this Sony one?",
          "translations": {
            "ko": "이 Sony 제품과 어떻게 비교되나요?",
            "zh": "它和这款Sony的比起来如何？",
            "ja": "これはソニーのこれとどう比べますか？",
            "vi": "Nó so sánh như thế nào với mẫu Sony này?",
            "en": "How does it compare to this Sony one?"
          }
        },
        {
          "role": "ai",
          "text": "Both are excellent, but Bose has stronger noise cancellation.",
          "translations": {
            "ko": "두 제품 모두 훌륭하지만, Bose는 더 강력한 소음 차단 기능이 있습니다.",
            "zh": "两者都很优秀，但Bose的降噪功能更强。",
            "ja": "どちらも優れていますが、Boseのノイズキャンセリングは強力です。",
            "vi": "Cả hai đều tuyệt vời, nhưng Bose có khả năng chống ồn mạnh hơn.",
            "en": "Both are excellent, but Bose has stronger noise cancellation."
          }
        },
        {
          "role": "user",
          "text": "Is there a price difference?",
          "translations": {
            "ko": "가격 차이가 있나요?",
            "zh": "价格有差异吗？",
            "ja": "価格の違いはありますか？",
            "vi": "Có sự khác biệt về giá không?",
            "en": "Is there a price difference?"
          }
        },
        {
          "role": "ai",
          "text": "Bose is slightly more expensive, but it's currently on sale.",
          "translations": {
            "ko": "Bose는 약간 더 비싸지만, 현재 세일 중입니다.",
            "zh": "Bose稍微贵一些，但现在正在促销。",
            "ja": "Boseは少し高価ですが、現在セール中です。",
            "vi": "Bose hơi đắt hơn một chút, nhưng hiện đang giảm giá.",
            "en": "Bose is slightly more expensive, but it's currently on sale."
          }
        },
        {
          "role": "user",
          "text": "Do you offer a price match if I find it cheaper elsewhere?",
          "translations": {
            "ko": "다른 곳에서 더 싼 가격을 찾으면 가격 매치를 해주나요?",
            "zh": "如果我在别处找到更便宜的，你们提供价格匹配吗？",
            "ja": "他の場所で安く見つけた場合、価格を合わせてくれますか？",
            "vi": "Cửa hàng có chính sách giá cạnh tranh nếu tôi tìm thấy nơi khác rẻ hơn không?",
            "en": "Do you offer a price match if I find it cheaper elsewhere?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, just show us the competitor's listing.",
          "translations": {
            "ko": "네, 경쟁업체의 상품 목록을 보여주시면 됩니다.",
            "zh": "是的，只需向我们展示竞争对手的列表。",
            "ja": "はい、競合他社のリストを見せてください。",
            "vi": "Vâng, chỉ cần cho chúng tôi xem danh sách của đối thủ cạnh tranh.",
            "en": "Yes, just show us the competitor's listing."
          }
        },
        {
          "role": "user",
          "text": "I’ll check that online.",
          "translations": {
            "ko": "그럼 온라인으로 확인해볼게요.",
            "zh": "我会在线查看的。",
            "ja": "オンラインで確認します。",
            "vi": "Tôi sẽ kiểm tra trực tuyến.",
            "en": "I’ll check that online."
          }
        },
        {
          "role": "ai",
          "text": "Take your time. I’ll be nearby if you need help.",
          "translations": {
            "ko": "천천히 보세요. 도움이 필요하시면 제가 근처에 있을게요.",
            "zh": "慢慢来。如果你需要帮助，我就在附近。",
            "ja": "お時間をお取りください。何か助けが必要なら近くにいます。",
            "vi": "Hãy thong thả. Tôi sẽ ở gần đây nếu bạn cần giúp đỡ.",
            "en": "Take your time. I’ll be nearby if you need help."
          }
        },
        {
          "role": "user",
          "text": "Thanks, I might ask about warranty later.",
          "translations": {
            "ko": "감사합니다, 나중에 보증에 대해 물어볼 수도 있을 것 같아요.",
            "zh": "谢谢，我可能稍后会询问关于保修的问题。",
            "ja": "ありがとう、後で保証について尋ねるかもしれません。",
            "vi": "Cảm ơn, tôi có thể hỏi về bảo hành sau.",
            "en": "Thanks, I might ask about warranty later."
          }
        },
        {
          "role": "ai",
          "text": "Of course. Most products have a one-year warranty.",
          "translations": {
            "ko": "당연합니다. 대부분의 제품은 1년 보증이 있습니다.",
            "zh": "当然，大多数产品都有一年的保修期。",
            "ja": "もちろんです。ほとんどの製品には1年間の保証が付いています。",
            "vi": "Tất nhiên. Hầu hết các sản phẩm đều có bảo hành một năm.",
            "en": "Of course. Most products have a one-year warranty."
          }
        },
        {
          "role": "user",
          "text": "That’s helpful to know.",
          "translations": {
            "ko": "그 정보는 도움이 되네요.",
            "zh": "这很有帮助。",
            "ja": "それは知っておくと便利です。",
            "vi": "Biết điều đó rất hữu ích.",
            "en": "That’s helpful to know."
          }
        },
        {
          "role": "ai",
          "text": "Let me know if you’d like to test them.",
          "translations": {
            "ko": "테스트 해보고 싶으시면 알려주세요.",
            "zh": "如果你想试一试，告诉我。",
            "ja": "試してみたい場合はお知らせください。",
            "vi": "Hãy cho tôi biết nếu bạn muốn thử chúng.",
            "en": "Let me know if you’d like to test them."
          }
        },
        {
          "role": "user",
          "text": "Yes, I’d like to try them out.",
          "translations": {
            "ko": "네, 테스트 해보고 싶습니다.",
            "zh": "是的，我想试试。",
            "ja": "はい、試してみたいです。",
            "vi": "Vâng, tôi muốn thử chúng.",
            "en": "Yes, I’d like to try them out."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Explaining a defective product",
        "ko": "불량 제품 설명하기",
        "zh": "解释有缺陷的产品",
        "ja": "不良品の説明",
        "vi": "Giải thích về một sản phẩm bị lỗi"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Hi there, can I help you find something?",
          "translations": {
            "ko": "안녕하세요, 무엇을 찾으시나요?",
            "zh": "嗨，有什么我可以帮您找的吗？",
            "ja": "こんにちは、何かお探しですか？",
            "vi": "Xin chào, tôi có thể giúp bạn tìm gì không?",
            "en": "Hi there, can I help you find something?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I’m looking for a specific brand of headphones.",
          "translations": {
            "ko": "네, 특정 브랜드의 헤드폰을 찾고 있습니다.",
            "zh": "是的，我正在寻找特定品牌的耳机。",
            "ja": "はい、特定のブランドのヘッドホンを探しています。",
            "vi": "Vâng, tôi đang tìm một thương hiệu tai nghe cụ thể.",
            "en": "Yes, I’m looking for a specific brand of headphones."
          }
        },
        {
          "role": "ai",
          "text": "Sure, which brand are you interested in?",
          "translations": {
            "ko": "그럼, 어떤 브랜드를 찾으시나요?",
            "zh": "好的，您对哪个品牌感兴趣？",
            "ja": "了解です、どのブランドに興味がありますか？",
            "vi": "Chắc chắn, bạn quan tâm đến thương hiệu nào?",
            "en": "Sure, which brand are you interested in?"
          }
        },
        {
          "role": "user",
          "text": "I’m looking for Bose. Do you carry that?",
          "translations": {
            "ko": "Bose를 찾고 있습니다. 여기에 있나요?",
            "zh": "我在找Bose，你们有卖吗？",
            "ja": "Boseを探しています。それはありますか？",
            "vi": "Tôi đang tìm Bose. Cửa hàng có bán không?",
            "en": "I’m looking for Bose. Do you carry that?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, we have a few models in stock. Over this way.",
          "translations": {
            "ko": "네, 몇 가지 모델이 재고가 있습니다. 이쪽으로 오세요.",
            "zh": "是的，我们有几款现货。就在这边。",
            "ja": "はい、いくつかのモデルを在庫しています。こちらです。",
            "vi": "Vâng, chúng tôi có một số mẫu hàng tồn. Hãy theo tôi.",
            "en": "Yes, we have a few models in stock. Over this way."
          }
        },
        {
          "role": "user",
          "text": "Thanks. Are they noise-canceling?",
          "translations": {
            "ko": "감사합니다. 그것들은 소음 차단 기능이 있나요?",
            "zh": "谢谢。它们有降噪功能吗？",
            "ja": "ありがとう。それらはノイズキャンセリングですか？",
            "vi": "Cảm ơn. Chúng có chức năng chống ồn không?",
            "en": "Thanks. Are they noise-canceling?"
          }
        },
        {
          "role": "ai",
          "text": "This one is. It’s our most popular model.",
          "translations": {
            "ko": "이 제품은 있습니다. 이건 우리 가장 인기 있는 모델입니다.",
            "zh": "这款有，它是我们最受欢迎的型号。",
            "ja": "これはそうです。これが一番人気のモデルです。",
            "vi": "Mẫu này có. Đó là mẫu bán chạy nhất của chúng tôi.",
            "en": "This one is. It’s our most popular model."
          }
        },
        {
          "role": "user",
          "text": "How does it compare to this Sony one?",
          "translations": {
            "ko": "이 Sony 제품과 어떻게 비교되나요?",
            "zh": "它和这款Sony的比起来如何？",
            "ja": "これはソニーのこれとどう比べますか？",
            "vi": "Nó so sánh như thế nào với mẫu Sony này?",
            "en": "How does it compare to this Sony one?"
          }
        },
        {
          "role": "ai",
          "text": "Both are excellent, but Bose has stronger noise cancellation.",
          "translations": {
            "ko": "두 제품 모두 훌륭하지만, Bose는 더 강력한 소음 차단 기능이 있습니다.",
            "zh": "两者都很优秀，但Bose的降噪功能更强。",
            "ja": "どちらも優れていますが、Boseのノイズキャンセリングは強力です。",
            "vi": "Cả hai đều tuyệt vời, nhưng Bose có khả năng chống ồn mạnh hơn.",
            "en": "Both are excellent, but Bose has stronger noise cancellation."
          }
        },
        {
          "role": "user",
          "text": "Is there a price difference?",
          "translations": {
            "ko": "가격 차이가 있나요?",
            "zh": "价格有差异吗？",
            "ja": "価格の違いはありますか？",
            "vi": "Có sự khác biệt về giá không?",
            "en": "Is there a price difference?"
          }
        },
        {
          "role": "ai",
          "text": "Bose is slightly more expensive, but it's currently on sale.",
          "translations": {
            "ko": "Bose는 약간 더 비싸지만, 현재 세일 중입니다.",
            "zh": "Bose稍微贵一些，但现在正在促销。",
            "ja": "Boseは少し高価ですが、現在セール中です。",
            "vi": "Bose hơi đắt hơn một chút, nhưng hiện đang giảm giá.",
            "en": "Bose is slightly more expensive, but it's currently on sale."
          }
        },
        {
          "role": "user",
          "text": "Do you offer a price match if I find it cheaper elsewhere?",
          "translations": {
            "ko": "다른 곳에서 더 싼 가격을 찾으면 가격 매치를 해주나요?",
            "zh": "如果我在别处找到更便宜的，你们提供价格匹配吗？",
            "ja": "他の場所で安く見つけた場合、価格を合わせてくれますか？",
            "vi": "Cửa hàng có chính sách giá cạnh tranh nếu tôi tìm thấy nơi khác rẻ hơn không?",
            "en": "Do you offer a price match if I find it cheaper elsewhere?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, just show us the competitor's listing.",
          "translations": {
            "ko": "네, 경쟁업체의 상품 목록을 보여주시면 됩니다.",
            "zh": "是的，只需向我们展示竞争对手的列表。",
            "ja": "はい、競合他社のリストを見せてください。",
            "vi": "Vâng, chỉ cần cho chúng tôi xem danh sách của đối thủ cạnh tranh.",
            "en": "Yes, just show us the competitor's listing."
          }
        },
        {
          "role": "user",
          "text": "I’ll check that online.",
          "translations": {
            "ko": "그럼 온라인으로 확인해볼게요.",
            "zh": "我会在线查看的。",
            "ja": "オンラインで確認します。",
            "vi": "Tôi sẽ kiểm tra trực tuyến.",
            "en": "I’ll check that online."
          }
        },
        {
          "role": "ai",
          "text": "Take your time. I’ll be nearby if you need help.",
          "translations": {
            "ko": "천천히 보세요. 도움이 필요하시면 제가 근처에 있을게요.",
            "zh": "慢慢来。如果你需要帮助，我就在附近。",
            "ja": "お時間をお取りください。何か助けが必要なら近くにいます。",
            "vi": "Hãy thong thả. Tôi sẽ ở gần đây nếu bạn cần giúp đỡ.",
            "en": "Take your time. I’ll be nearby if you need help."
          }
        },
        {
          "role": "user",
          "text": "Thanks, I might ask about warranty later.",
          "translations": {
            "ko": "감사합니다, 나중에 보증에 대해 물어볼 수도 있을 것 같아요.",
            "zh": "谢谢，我可能稍后会询问关于保修的问题。",
            "ja": "ありがとう、後で保証について尋ねるかもしれません。",
            "vi": "Cảm ơn, tôi có thể hỏi về bảo hành sau.",
            "en": "Thanks, I might ask about warranty later."
          }
        },
        {
          "role": "ai",
          "text": "Of course. Most products have a one-year warranty.",
          "translations": {
            "ko": "당연합니다. 대부분의 제품은 1년 보증이 있습니다.",
            "zh": "当然，大多数产品都有一年的保修期。",
            "ja": "もちろんです。ほとんどの製品には1年間の保証が付いています。",
            "vi": "Tất nhiên. Hầu hết các sản phẩm đều có bảo hành một năm.",
            "en": "Of course. Most products have a one-year warranty."
          }
        },
        {
          "role": "user",
          "text": "That’s helpful to know.",
          "translations": {
            "ko": "그 정보는 도움이 되네요.",
            "zh": "这很有帮助。",
            "ja": "それは知っておくと便利です。",
            "vi": "Biết điều đó rất hữu ích.",
            "en": "That’s helpful to know."
          }
        },
        {
          "role": "ai",
          "text": "Let me know if you’d like to test them.",
          "translations": {
            "ko": "테스트 해보고 싶으시면 알려주세요.",
            "zh": "如果你想试一试，告诉我。",
            "ja": "試してみたい場合はお知らせください。",
            "vi": "Hãy cho tôi biết nếu bạn muốn thử chúng.",
            "en": "Let me know if you’d like to test them."
          }
        },
        {
          "role": "user",
          "text": "Yes, I’d like to try them out.",
          "translations": {
            "ko": "네, 테스트 해보고 싶습니다.",
            "zh": "是的，我想试试。",
            "ja": "はい、試してみたいです。",
            "vi": "Vâng, tôi muốn thử chúng.",
            "en": "Yes, I’d like to try them out."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Asking about store membership benefits",
        "ko": "매장 멤버십 혜택에 대해 묻기",
        "zh": "询问商店会员权益",
        "ja": "店舗会員特典について尋ねる",
        "vi": "Hỏi về lợi ích của thành viên cửa hàng"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Hi there, can I help you find something?",
          "translations": {
            "ko": "안녕하세요, 무엇을 찾으시나요?",
            "zh": "嗨，有什么我可以帮您找的吗？",
            "ja": "こんにちは、何かお探しですか？",
            "vi": "Xin chào, tôi có thể giúp bạn tìm gì không?",
            "en": "Hi there, can I help you find something?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I’m looking for a specific brand of headphones.",
          "translations": {
            "ko": "네, 특정 브랜드의 헤드폰을 찾고 있습니다.",
            "zh": "是的，我正在寻找特定品牌的耳机。",
            "ja": "はい、特定のブランドのヘッドホンを探しています。",
            "vi": "Vâng, tôi đang tìm một thương hiệu tai nghe cụ thể.",
            "en": "Yes, I’m looking for a specific brand of headphones."
          }
        },
        {
          "role": "ai",
          "text": "Sure, which brand are you interested in?",
          "translations": {
            "ko": "그럼, 어떤 브랜드를 찾으시나요?",
            "zh": "好的，您对哪个品牌感兴趣？",
            "ja": "了解です、どのブランドに興味がありますか？",
            "vi": "Chắc chắn, bạn quan tâm đến thương hiệu nào?",
            "en": "Sure, which brand are you interested in?"
          }
        },
        {
          "role": "user",
          "text": "I’m looking for Bose. Do you carry that?",
          "translations": {
            "ko": "Bose를 찾고 있습니다. 여기에 있나요?",
            "zh": "我在找Bose，你们有卖吗？",
            "ja": "Boseを探しています。それはありますか？",
            "vi": "Tôi đang tìm Bose. Cửa hàng có bán không?",
            "en": "I’m looking for Bose. Do you carry that?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, we have a few models in stock. Over this way.",
          "translations": {
            "ko": "네, 몇 가지 모델이 재고가 있습니다. 이쪽으로 오세요.",
            "zh": "是的，我们有几款现货。就在这边。",
            "ja": "はい、いくつかのモデルを在庫しています。こちらです。",
            "vi": "Vâng, chúng tôi có một số mẫu hàng tồn. Hãy theo tôi.",
            "en": "Yes, we have a few models in stock. Over this way."
          }
        },
        {
          "role": "user",
          "text": "Thanks. Are they noise-canceling?",
          "translations": {
            "ko": "감사합니다. 그것들은 소음 차단 기능이 있나요?",
            "zh": "谢谢。它们有降噪功能吗？",
            "ja": "ありがとう。それらはノイズキャンセリングですか？",
            "vi": "Cảm ơn. Chúng có chức năng chống ồn không?",
            "en": "Thanks. Are they noise-canceling?"
          }
        },
        {
          "role": "ai",
          "text": "This one is. It’s our most popular model.",
          "translations": {
            "ko": "이 제품은 있습니다. 이건 우리 가장 인기 있는 모델입니다.",
            "zh": "这款有，它是我们最受欢迎的型号。",
            "ja": "これはそうです。これが一番人気のモデルです。",
            "vi": "Mẫu này có. Đó là mẫu bán chạy nhất của chúng tôi.",
            "en": "This one is. It’s our most popular model."
          }
        },
        {
          "role": "user",
          "text": "How does it compare to this Sony one?",
          "translations": {
            "ko": "이 Sony 제품과 어떻게 비교되나요?",
            "zh": "它和这款Sony的比起来如何？",
            "ja": "これはソニーのこれとどう比べますか？",
            "vi": "Nó so sánh như thế nào với mẫu Sony này?",
            "en": "How does it compare to this Sony one?"
          }
        },
        {
          "role": "ai",
          "text": "Both are excellent, but Bose has stronger noise cancellation.",
          "translations": {
            "ko": "두 제품 모두 훌륭하지만, Bose는 더 강력한 소음 차단 기능이 있습니다.",
            "zh": "两者都很优秀，但Bose的降噪功能更强。",
            "ja": "どちらも優れていますが、Boseのノイズキャンセリングは強力です。",
            "vi": "Cả hai đều tuyệt vời, nhưng Bose có khả năng chống ồn mạnh hơn.",
            "en": "Both are excellent, but Bose has stronger noise cancellation."
          }
        },
        {
          "role": "user",
          "text": "Is there a price difference?",
          "translations": {
            "ko": "가격 차이가 있나요?",
            "zh": "价格有差异吗？",
            "ja": "価格の違いはありますか？",
            "vi": "Có sự khác biệt về giá không?",
            "en": "Is there a price difference?"
          }
        },
        {
          "role": "ai",
          "text": "Bose is slightly more expensive, but it's currently on sale.",
          "translations": {
            "ko": "Bose는 약간 더 비싸지만, 현재 세일 중입니다.",
            "zh": "Bose稍微贵一些，但现在正在促销。",
            "ja": "Boseは少し高価ですが、現在セール中です。",
            "vi": "Bose hơi đắt hơn một chút, nhưng hiện đang giảm giá.",
            "en": "Bose is slightly more expensive, but it's currently on sale."
          }
        },
        {
          "role": "user",
          "text": "Do you offer a price match if I find it cheaper elsewhere?",
          "translations": {
            "ko": "다른 곳에서 더 싼 가격을 찾으면 가격 매치를 해주나요?",
            "zh": "如果我在别处找到更便宜的，你们提供价格匹配吗？",
            "ja": "他の場所で安く見つけた場合、価格を合わせてくれますか？",
            "vi": "Cửa hàng có chính sách giá cạnh tranh nếu tôi tìm thấy nơi khác rẻ hơn không?",
            "en": "Do you offer a price match if I find it cheaper elsewhere?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, just show us the competitor's listing.",
          "translations": {
            "ko": "네, 경쟁업체의 상품 목록을 보여주시면 됩니다.",
            "zh": "是的，只需向我们展示竞争对手的列表。",
            "ja": "はい、競合他社のリストを見せてください。",
            "vi": "Vâng, chỉ cần cho chúng tôi xem danh sách của đối thủ cạnh tranh.",
            "en": "Yes, just show us the competitor's listing."
          }
        },
        {
          "role": "user",
          "text": "I’ll check that online.",
          "translations": {
            "ko": "그럼 온라인으로 확인해볼게요.",
            "zh": "我会在线查看的。",
            "ja": "オンラインで確認します。",
            "vi": "Tôi sẽ kiểm tra trực tuyến.",
            "en": "I’ll check that online."
          }
        },
        {
          "role": "ai",
          "text": "Take your time. I’ll be nearby if you need help.",
          "translations": {
            "ko": "천천히 보세요. 도움이 필요하시면 제가 근처에 있을게요.",
            "zh": "慢慢来。如果你需要帮助，我就在附近。",
            "ja": "お時間をお取りください。何か助けが必要なら近くにいます。",
            "vi": "Hãy thong thả. Tôi sẽ ở gần đây nếu bạn cần giúp đỡ.",
            "en": "Take your time. I’ll be nearby if you need help."
          }
        },
        {
          "role": "user",
          "text": "Thanks, I might ask about warranty later.",
          "translations": {
            "ko": "감사합니다, 나중에 보증에 대해 물어볼 수도 있을 것 같아요.",
            "zh": "谢谢，我可能稍后会询问关于保修的问题。",
            "ja": "ありがとう、後で保証について尋ねるかもしれません。",
            "vi": "Cảm ơn, tôi có thể hỏi về bảo hành sau.",
            "en": "Thanks, I might ask about warranty later."
          }
        },
        {
          "role": "ai",
          "text": "Of course. Most products have a one-year warranty.",
          "translations": {
            "ko": "당연합니다. 대부분의 제품은 1년 보증이 있습니다.",
            "zh": "当然，大多数产品都有一年的保修期。",
            "ja": "もちろんです。ほとんどの製品には1年間の保証が付いています。",
            "vi": "Tất nhiên. Hầu hết các sản phẩm đều có bảo hành một năm.",
            "en": "Of course. Most products have a one-year warranty."
          }
        },
        {
          "role": "user",
          "text": "That’s helpful to know.",
          "translations": {
            "ko": "그 정보는 도움이 되네요.",
            "zh": "这很有帮助。",
            "ja": "それは知っておくと便利です。",
            "vi": "Biết điều đó rất hữu ích.",
            "en": "That’s helpful to know."
          }
        },
        {
          "role": "ai",
          "text": "Let me know if you’d like to test them.",
          "translations": {
            "ko": "테스트 해보고 싶으시면 알려주세요.",
            "zh": "如果你想试一试，告诉我。",
            "ja": "試してみたい場合はお知らせください。",
            "vi": "Hãy cho tôi biết nếu bạn muốn thử chúng.",
            "en": "Let me know if you’d like to test them."
          }
        },
        {
          "role": "user",
          "text": "Yes, I’d like to try them out.",
          "translations": {
            "ko": "네, 테스트 해보고 싶습니다.",
            "zh": "是的，我想试试。",
            "ja": "はい、試してみたいです。",
            "vi": "Vâng, tôi muốn thử chúng.",
            "en": "Yes, I’d like to try them out."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Inquiring about delivery service",
        "ko": "배송 서비스에 대해 문의하기",
        "zh": "询问送货服务",
        "ja": "配送サービスについて尋ねる",
        "vi": "Hỏi về dịch vụ giao hàng"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Hi there, can I help you find something?",
          "translations": {
            "ko": "안녕하세요, 무엇을 찾으시나요?",
            "zh": "嗨，有什么我可以帮您找的吗？",
            "ja": "こんにちは、何かお探しですか？",
            "vi": "Xin chào, tôi có thể giúp bạn tìm gì không?",
            "en": "Hi there, can I help you find something?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I’m looking for a specific brand of headphones.",
          "translations": {
            "ko": "네, 특정 브랜드의 헤드폰을 찾고 있습니다.",
            "zh": "是的，我正在寻找特定品牌的耳机。",
            "ja": "はい、特定のブランドのヘッドホンを探しています。",
            "vi": "Vâng, tôi đang tìm một thương hiệu tai nghe cụ thể.",
            "en": "Yes, I’m looking for a specific brand of headphones."
          }
        },
        {
          "role": "ai",
          "text": "Sure, which brand are you interested in?",
          "translations": {
            "ko": "그럼, 어떤 브랜드를 찾으시나요?",
            "zh": "好的，您对哪个品牌感兴趣？",
            "ja": "了解です、どのブランドに興味がありますか？",
            "vi": "Chắc chắn, bạn quan tâm đến thương hiệu nào?",
            "en": "Sure, which brand are you interested in?"
          }
        },
        {
          "role": "user",
          "text": "I’m looking for Bose. Do you carry that?",
          "translations": {
            "ko": "Bose를 찾고 있습니다. 여기에 있나요?",
            "zh": "我在找Bose，你们有卖吗？",
            "ja": "Boseを探しています。それはありますか？",
            "vi": "Tôi đang tìm Bose. Cửa hàng có bán không?",
            "en": "I’m looking for Bose. Do you carry that?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, we have a few models in stock. Over this way.",
          "translations": {
            "ko": "네, 몇 가지 모델이 재고가 있습니다. 이쪽으로 오세요.",
            "zh": "是的，我们有几款现货。就在这边。",
            "ja": "はい、いくつかのモデルを在庫しています。こちらです。",
            "vi": "Vâng, chúng tôi có một số mẫu hàng tồn. Hãy theo tôi.",
            "en": "Yes, we have a few models in stock. Over this way."
          }
        },
        {
          "role": "user",
          "text": "Thanks. Are they noise-canceling?",
          "translations": {
            "ko": "감사합니다. 그것들은 소음 차단 기능이 있나요?",
            "zh": "谢谢。它们有降噪功能吗？",
            "ja": "ありがとう。それらはノイズキャンセリングですか？",
            "vi": "Cảm ơn. Chúng có chức năng chống ồn không?",
            "en": "Thanks. Are they noise-canceling?"
          }
        },
        {
          "role": "ai",
          "text": "This one is. It’s our most popular model.",
          "translations": {
            "ko": "이 제품은 있습니다. 이건 우리 가장 인기 있는 모델입니다.",
            "zh": "这款有，它是我们最受欢迎的型号。",
            "ja": "これはそうです。これが一番人気のモデルです。",
            "vi": "Mẫu này có. Đó là mẫu bán chạy nhất của chúng tôi.",
            "en": "This one is. It’s our most popular model."
          }
        },
        {
          "role": "user",
          "text": "How does it compare to this Sony one?",
          "translations": {
            "ko": "이 Sony 제품과 어떻게 비교되나요?",
            "zh": "它和这款Sony的比起来如何？",
            "ja": "これはソニーのこれとどう比べますか？",
            "vi": "Nó so sánh như thế nào với mẫu Sony này?",
            "en": "How does it compare to this Sony one?"
          }
        },
        {
          "role": "ai",
          "text": "Both are excellent, but Bose has stronger noise cancellation.",
          "translations": {
            "ko": "두 제품 모두 훌륭하지만, Bose는 더 강력한 소음 차단 기능이 있습니다.",
            "zh": "两者都很优秀，但Bose的降噪功能更强。",
            "ja": "どちらも優れていますが、Boseのノイズキャンセリングは強力です。",
            "vi": "Cả hai đều tuyệt vời, nhưng Bose có khả năng chống ồn mạnh hơn.",
            "en": "Both are excellent, but Bose has stronger noise cancellation."
          }
        },
        {
          "role": "user",
          "text": "Is there a price difference?",
          "translations": {
            "ko": "가격 차이가 있나요?",
            "zh": "价格有差异吗？",
            "ja": "価格の違いはありますか？",
            "vi": "Có sự khác biệt về giá không?",
            "en": "Is there a price difference?"
          }
        },
        {
          "role": "ai",
          "text": "Bose is slightly more expensive, but it's currently on sale.",
          "translations": {
            "ko": "Bose는 약간 더 비싸지만, 현재 세일 중입니다.",
            "zh": "Bose稍微贵一些，但现在正在促销。",
            "ja": "Boseは少し高価ですが、現在セール中です。",
            "vi": "Bose hơi đắt hơn một chút, nhưng hiện đang giảm giá.",
            "en": "Bose is slightly more expensive, but it's currently on sale."
          }
        },
        {
          "role": "user",
          "text": "Do you offer a price match if I find it cheaper elsewhere?",
          "translations": {
            "ko": "다른 곳에서 더 싼 가격을 찾으면 가격 매치를 해주나요?",
            "zh": "如果我在别处找到更便宜的，你们提供价格匹配吗？",
            "ja": "他の場所で安く見つけた場合、価格を合わせてくれますか？",
            "vi": "Cửa hàng có chính sách giá cạnh tranh nếu tôi tìm thấy nơi khác rẻ hơn không?",
            "en": "Do you offer a price match if I find it cheaper elsewhere?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, just show us the competitor's listing.",
          "translations": {
            "ko": "네, 경쟁업체의 상품 목록을 보여주시면 됩니다.",
            "zh": "是的，只需向我们展示竞争对手的列表。",
            "ja": "はい、競合他社のリストを見せてください。",
            "vi": "Vâng, chỉ cần cho chúng tôi xem danh sách của đối thủ cạnh tranh.",
            "en": "Yes, just show us the competitor's listing."
          }
        },
        {
          "role": "user",
          "text": "I’ll check that online.",
          "translations": {
            "ko": "그럼 온라인으로 확인해볼게요.",
            "zh": "我会在线查看的。",
            "ja": "オンラインで確認します。",
            "vi": "Tôi sẽ kiểm tra trực tuyến.",
            "en": "I’ll check that online."
          }
        },
        {
          "role": "ai",
          "text": "Take your time. I’ll be nearby if you need help.",
          "translations": {
            "ko": "천천히 보세요. 도움이 필요하시면 제가 근처에 있을게요.",
            "zh": "慢慢来。如果你需要帮助，我就在附近。",
            "ja": "お時間をお取りください。何か助けが必要なら近くにいます。",
            "vi": "Hãy thong thả. Tôi sẽ ở gần đây nếu bạn cần giúp đỡ.",
            "en": "Take your time. I’ll be nearby if you need help."
          }
        },
        {
          "role": "user",
          "text": "Thanks, I might ask about warranty later.",
          "translations": {
            "ko": "감사합니다, 나중에 보증에 대해 물어볼 수도 있을 것 같아요.",
            "zh": "谢谢，我可能稍后会询问关于保修的问题。",
            "ja": "ありがとう、後で保証について尋ねるかもしれません。",
            "vi": "Cảm ơn, tôi có thể hỏi về bảo hành sau.",
            "en": "Thanks, I might ask about warranty later."
          }
        },
        {
          "role": "ai",
          "text": "Of course. Most products have a one-year warranty.",
          "translations": {
            "ko": "당연합니다. 대부분의 제품은 1년 보증이 있습니다.",
            "zh": "当然，大多数产品都有一年的保修期。",
            "ja": "もちろんです。ほとんどの製品には1年間の保証が付いています。",
            "vi": "Tất nhiên. Hầu hết các sản phẩm đều có bảo hành một năm.",
            "en": "Of course. Most products have a one-year warranty."
          }
        },
        {
          "role": "user",
          "text": "That’s helpful to know.",
          "translations": {
            "ko": "그 정보는 도움이 되네요.",
            "zh": "这很有帮助。",
            "ja": "それは知っておくと便利です。",
            "vi": "Biết điều đó rất hữu ích.",
            "en": "That’s helpful to know."
          }
        },
        {
          "role": "ai",
          "text": "Let me know if you’d like to test them.",
          "translations": {
            "ko": "테스트 해보고 싶으시면 알려주세요.",
            "zh": "如果你想试一试，告诉我。",
            "ja": "試してみたい場合はお知らせください。",
            "vi": "Hãy cho tôi biết nếu bạn muốn thử chúng.",
            "en": "Let me know if you’d like to test them."
          }
        },
        {
          "role": "user",
          "text": "Yes, I’d like to try them out.",
          "translations": {
            "ko": "네, 테스트 해보고 싶습니다.",
            "zh": "是的，我想试试。",
            "ja": "はい、試してみたいです。",
            "vi": "Vâng, tôi muốn thử chúng.",
            "en": "Yes, I’d like to try them out."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Reporting a missing item in a package",
        "ko": "패키지에서 누락된 항목 신고하기",
        "zh": "报告包裹中缺失的物品",
        "ja": "パッケージのアイテムが欠けていることを報告",
        "vi": "Báo cáo một mặt hàng bị thiếu trong gói hàng"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Hi there, can I help you find something?",
          "translations": {
            "ko": "안녕하세요, 무엇을 찾으시나요?",
            "zh": "嗨，有什么我可以帮您找的吗？",
            "ja": "こんにちは、何かお探しですか？",
            "vi": "Xin chào, tôi có thể giúp bạn tìm gì không?",
            "en": "Hi there, can I help you find something?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I’m looking for a specific brand of headphones.",
          "translations": {
            "ko": "네, 특정 브랜드의 헤드폰을 찾고 있습니다.",
            "zh": "是的，我正在寻找特定品牌的耳机。",
            "ja": "はい、特定のブランドのヘッドホンを探しています。",
            "vi": "Vâng, tôi đang tìm một thương hiệu tai nghe cụ thể.",
            "en": "Yes, I’m looking for a specific brand of headphones."
          }
        },
        {
          "role": "ai",
          "text": "Sure, which brand are you interested in?",
          "translations": {
            "ko": "그럼, 어떤 브랜드를 찾으시나요?",
            "zh": "好的，您对哪个品牌感兴趣？",
            "ja": "了解です、どのブランドに興味がありますか？",
            "vi": "Chắc chắn, bạn quan tâm đến thương hiệu nào?",
            "en": "Sure, which brand are you interested in?"
          }
        },
        {
          "role": "user",
          "text": "I’m looking for Bose. Do you carry that?",
          "translations": {
            "ko": "Bose를 찾고 있습니다. 여기에 있나요?",
            "zh": "我在找Bose，你们有卖吗？",
            "ja": "Boseを探しています。それはありますか？",
            "vi": "Tôi đang tìm Bose. Cửa hàng có bán không?",
            "en": "I’m looking for Bose. Do you carry that?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, we have a few models in stock. Over this way.",
          "translations": {
            "ko": "네, 몇 가지 모델이 재고가 있습니다. 이쪽으로 오세요.",
            "zh": "是的，我们有几款现货。就在这边。",
            "ja": "はい、いくつかのモデルを在庫しています。こちらです。",
            "vi": "Vâng, chúng tôi có một số mẫu hàng tồn. Hãy theo tôi.",
            "en": "Yes, we have a few models in stock. Over this way."
          }
        },
        {
          "role": "user",
          "text": "Thanks. Are they noise-canceling?",
          "translations": {
            "ko": "감사합니다. 그것들은 소음 차단 기능이 있나요?",
            "zh": "谢谢。它们有降噪功能吗？",
            "ja": "ありがとう。それらはノイズキャンセリングですか？",
            "vi": "Cảm ơn. Chúng có chức năng chống ồn không?",
            "en": "Thanks. Are they noise-canceling?"
          }
        },
        {
          "role": "ai",
          "text": "This one is. It’s our most popular model.",
          "translations": {
            "ko": "이 제품은 있습니다. 이건 우리 가장 인기 있는 모델입니다.",
            "zh": "这款有，它是我们最受欢迎的型号。",
            "ja": "これはそうです。これが一番人気のモデルです。",
            "vi": "Mẫu này có. Đó là mẫu bán chạy nhất của chúng tôi.",
            "en": "This one is. It’s our most popular model."
          }
        },
        {
          "role": "user",
          "text": "How does it compare to this Sony one?",
          "translations": {
            "ko": "이 Sony 제품과 어떻게 비교되나요?",
            "zh": "它和这款Sony的比起来如何？",
            "ja": "これはソニーのこれとどう比べますか？",
            "vi": "Nó so sánh như thế nào với mẫu Sony này?",
            "en": "How does it compare to this Sony one?"
          }
        },
        {
          "role": "ai",
          "text": "Both are excellent, but Bose has stronger noise cancellation.",
          "translations": {
            "ko": "두 제품 모두 훌륭하지만, Bose는 더 강력한 소음 차단 기능이 있습니다.",
            "zh": "两者都很优秀，但Bose的降噪功能更强。",
            "ja": "どちらも優れていますが、Boseのノイズキャンセリングは強力です。",
            "vi": "Cả hai đều tuyệt vời, nhưng Bose có khả năng chống ồn mạnh hơn.",
            "en": "Both are excellent, but Bose has stronger noise cancellation."
          }
        },
        {
          "role": "user",
          "text": "Is there a price difference?",
          "translations": {
            "ko": "가격 차이가 있나요?",
            "zh": "价格有差异吗？",
            "ja": "価格の違いはありますか？",
            "vi": "Có sự khác biệt về giá không?",
            "en": "Is there a price difference?"
          }
        },
        {
          "role": "ai",
          "text": "Bose is slightly more expensive, but it's currently on sale.",
          "translations": {
            "ko": "Bose는 약간 더 비싸지만, 현재 세일 중입니다.",
            "zh": "Bose稍微贵一些，但现在正在促销。",
            "ja": "Boseは少し高価ですが、現在セール中です。",
            "vi": "Bose hơi đắt hơn một chút, nhưng hiện đang giảm giá.",
            "en": "Bose is slightly more expensive, but it's currently on sale."
          }
        },
        {
          "role": "user",
          "text": "Do you offer a price match if I find it cheaper elsewhere?",
          "translations": {
            "ko": "다른 곳에서 더 싼 가격을 찾으면 가격 매치를 해주나요?",
            "zh": "如果我在别处找到更便宜的，你们提供价格匹配吗？",
            "ja": "他の場所で安く見つけた場合、価格を合わせてくれますか？",
            "vi": "Cửa hàng có chính sách giá cạnh tranh nếu tôi tìm thấy nơi khác rẻ hơn không?",
            "en": "Do you offer a price match if I find it cheaper elsewhere?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, just show us the competitor's listing.",
          "translations": {
            "ko": "네, 경쟁업체의 상품 목록을 보여주시면 됩니다.",
            "zh": "是的，只需向我们展示竞争对手的列表。",
            "ja": "はい、競合他社のリストを見せてください。",
            "vi": "Vâng, chỉ cần cho chúng tôi xem danh sách của đối thủ cạnh tranh.",
            "en": "Yes, just show us the competitor's listing."
          }
        },
        {
          "role": "user",
          "text": "I’ll check that online.",
          "translations": {
            "ko": "그럼 온라인으로 확인해볼게요.",
            "zh": "我会在线查看的。",
            "ja": "オンラインで確認します。",
            "vi": "Tôi sẽ kiểm tra trực tuyến.",
            "en": "I’ll check that online."
          }
        },
        {
          "role": "ai",
          "text": "Take your time. I’ll be nearby if you need help.",
          "translations": {
            "ko": "천천히 보세요. 도움이 필요하시면 제가 근처에 있을게요.",
            "zh": "慢慢来。如果你需要帮助，我就在附近。",
            "ja": "お時間をお取りください。何か助けが必要なら近くにいます。",
            "vi": "Hãy thong thả. Tôi sẽ ở gần đây nếu bạn cần giúp đỡ.",
            "en": "Take your time. I’ll be nearby if you need help."
          }
        },
        {
          "role": "user",
          "text": "Thanks, I might ask about warranty later.",
          "translations": {
            "ko": "감사합니다, 나중에 보증에 대해 물어볼 수도 있을 것 같아요.",
            "zh": "谢谢，我可能稍后会询问关于保修的问题。",
            "ja": "ありがとう、後で保証について尋ねるかもしれません。",
            "vi": "Cảm ơn, tôi có thể hỏi về bảo hành sau.",
            "en": "Thanks, I might ask about warranty later."
          }
        },
        {
          "role": "ai",
          "text": "Of course. Most products have a one-year warranty.",
          "translations": {
            "ko": "당연합니다. 대부분의 제품은 1년 보증이 있습니다.",
            "zh": "当然，大多数产品都有一年的保修期。",
            "ja": "もちろんです。ほとんどの製品には1年間の保証が付いています。",
            "vi": "Tất nhiên. Hầu hết các sản phẩm đều có bảo hành một năm.",
            "en": "Of course. Most products have a one-year warranty."
          }
        },
        {
          "role": "user",
          "text": "That’s helpful to know.",
          "translations": {
            "ko": "그 정보는 도움이 되네요.",
            "zh": "这很有帮助。",
            "ja": "それは知っておくと便利です。",
            "vi": "Biết điều đó rất hữu ích.",
            "en": "That’s helpful to know."
          }
        },
        {
          "role": "ai",
          "text": "Let me know if you’d like to test them.",
          "translations": {
            "ko": "테스트 해보고 싶으시면 알려주세요.",
            "zh": "如果你想试一试，告诉我。",
            "ja": "試してみたい場合はお知らせください。",
            "vi": "Hãy cho tôi biết nếu bạn muốn thử chúng.",
            "en": "Let me know if you’d like to test them."
          }
        },
        {
          "role": "user",
          "text": "Yes, I’d like to try them out.",
          "translations": {
            "ko": "네, 테스트 해보고 싶습니다.",
            "zh": "是的，我想试试。",
            "ja": "はい、試してみたいです。",
            "vi": "Vâng, tôi muốn thử chúng.",
            "en": "Yes, I’d like to try them out."
          }
        }
      ]
    }
  ],
  "advanced": [
    {
      "description": {
        "en": "Negotiating a luxury item purchase",
        "ko": "고급품 구매 협상",
        "zh": "谈判购买奢侈品",
        "ja": "高級品の購入交渉",
        "vi": "Đàm phán mua một món hàng xa xỉ"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Good afternoon, can I help you with something special today?",
          "translations": {
            "ko": "안녕하세요, 오늘 특별한 도움이 필요하신가요?",
            "zh": "下午好，今天有什么特别的需要我帮助的吗？",
            "ja": "こんにちは、何かお手伝いできることはありますか？",
            "vi": "Chào buổi chiều, tôi có thể giúp gì cho bạn hôm nay?",
            "en": "Good afternoon, can I help you with something special today?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I’m interested in purchasing this luxury handbag.",
          "translations": {
            "ko": "네, 이 고급 핸드백을 구매하려고 합니다.",
            "zh": "是的，我想购买这款奢侈手袋。",
            "ja": "はい、この高級ハンドバッグを購入したいと思っています。",
            "vi": "Có, tôi muốn mua chiếc túi xách xa xỉ này.",
            "en": "Yes, I’m interested in purchasing this luxury handbag."
          }
        },
        {
          "role": "ai",
          "text": "Excellent choice. That’s one of our signature pieces.",
          "translations": {
            "ko": "훌륭한 선택입니다. 그것은 우리의 시그니처 제품 중 하나입니다.",
            "zh": "优秀的选择。这是我们的招牌产品之一。",
            "ja": "素晴らしい選択です。それは私たちの代表的な商品の一つです。",
            "vi": "Lựa chọn tuyệt vời. Đó là một trong những mặt hàng đặc trưng của chúng tôi.",
            "en": "Excellent choice. That’s one of our signature pieces."
          }
        },
        {
          "role": "user",
          "text": "Do you offer any flexibility on the price?",
          "translations": {
            "ko": "가격에 유연성을 제공하나요?",
            "zh": "你们对价格有任何的弹性吗？",
            "ja": "値段は少しでも調整可能ですか？",
            "vi": "Bạn có thể giảm giá không?",
            "en": "Do you offer any flexibility on the price?"
          }
        },
        {
          "role": "ai",
          "text": "We don’t discount regularly, but I can check with my manager.",
          "translations": {
            "ko": "우리는 정기적으로 할인하지 않지만, 관리자에게 확인해볼 수 있습니다.",
            "zh": "我们不常打折，但我可以和经理确认一下。",
            "ja": "定期的には割引は行っておりませんが、マネージャーに確認してみます。",
            "vi": "Chúng tôi không thường xuyên giảm giá, nhưng tôi có thể kiểm tra với người quản lý của tôi.",
            "en": "We don’t discount regularly, but I can check with my manager."
          }
        },
        {
          "role": "user",
          "text": "I’d appreciate that, especially since I’m buying two items.",
          "translations": {
            "ko": "두 개를 사는 것이니, 그렇게 해주시면 감사하겠습니다.",
            "zh": "我会很感激的，尤其是我要买两件商品。",
            "ja": "それは助かります、特に2つ購入する予定なので。",
            "vi": "Tôi sẽ rất biết ơn nếu bạn làm vậy, đặc biệt là khi tôi mua hai món.",
            "en": "I’d appreciate that, especially since I’m buying two items."
          }
        },
        {
          "role": "ai",
          "text": "In that case, we might be able to offer a preferred client benefit.",
          "translations": {
            "ko": "그런 경우에는, 우대 고객 혜택을 제공할 수 있을지도 모릅니다.",
            "zh": "如果是这样，我们可能可以提供优惠客户福利。",
            "ja": "その場合、優待顧客特典を提供できるかもしれません。",
            "vi": "Trong trường hợp đó, chúng tôi có thể cung cấp một lợi ích cho khách hàng thân thiết.",
            "en": "In that case, we might be able to offer a preferred client benefit."
          }
        },
        {
          "role": "user",
          "text": "Also, can this be shipped internationally?",
          "translations": {
            "ko": "또한, 이 제품을 국제적으로 배송할 수 있나요?",
            "zh": "另外，这个可以国际运送吗？",
            "ja": "また、これは国際配送可能ですか？",
            "vi": "Vậy, sản phẩm này có thể được gửi đi quốc tế không?",
            "en": "Also, can this be shipped internationally?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, we offer insured global shipping with tracking.",
          "translations": {
            "ko": "네, 우리는 추적 가능한 보험된 전세계 배송을 제공합니다.",
            "zh": "是的，我们提供有保险的全球运送并附带追踪号。",
            "ja": "はい、保険付きのグローバル配送を提供しています。",
            "vi": "Có, chúng tôi cung cấp dịch vụ gửi hàng toàn cầu có bảo hiểm và theo dõi.",
            "en": "Yes, we offer insured global shipping with tracking."
          }
        },
        {
          "role": "user",
          "text": "Perfect. How long would it take to reach Singapore?",
          "translations": {
            "ko": "완벽합니다. 싱가포르까지 얼마나 걸릴까요?",
            "zh": "完美。大概需要多久能送到新加坡？",
            "ja": "完璧です。シンガポールまでどのくらいかかりますか？",
            "vi": "Hoàn hảo. Bao lâu thì hàng có thể đến Singapore?",
            "en": "Perfect. How long would it take to reach Singapore?"
          }
        },
        {
          "role": "ai",
          "text": "About 5 to 7 business days.",
          "translations": {
            "ko": "약 5~7 영업일 정도입니다.",
            "zh": "大约5到7个工作日。",
            "ja": "約5から7営業日です。",
            "vi": "Khoảng từ 5 đến 7 ngày làm việc.",
            "en": "About 5 to 7 business days."
          }
        },
        {
          "role": "user",
          "text": "That works. I’d also like a gift wrap, please.",
          "translations": {
            "ko": "좋습니다. 선물 포장도 부탁드립니다.",
            "zh": "这样可以。我还想要礼品包装，请。",
            "ja": "それで大丈夫です。ギフトラップもお願いします。",
            "vi": "Được rồi. Tôi cũng muốn gói quà, vui lòng.",
            "en": "That works. I’d also like a gift wrap, please."
          }
        },
        {
          "role": "ai",
          "text": "Of course. Would you like to include a message card?",
          "translations": {
            "ko": "물론입니다. 메시지 카드를 포함하시겠습니까?",
            "zh": "当然。您想要加入贺卡吗？",
            "ja": "もちろんです。メッセージカードを同封しますか？",
            "vi": "Dĩ nhiên. Bạn có muốn gửi kèm thẻ tin nhắn không?",
            "en": "Of course. Would you like to include a message card?"
          }
        },
        {
          "role": "user",
          "text": "Yes. Please write: 'Congratulations on your achievement!'",
          "translations": {
            "ko": "네. '당신의 성취를 축하합니다!'라고 써 주세요.",
            "zh": "是的。请写上：“祝贺你的成就！”",
            "ja": "はい。'おめでとうございます！'と書いてください。",
            "vi": "Có. Hãy viết: 'Chúc mừng thành công của bạn!'",
            "en": "Yes. Please write: 'Congratulations on your achievement!'"
          }
        },
        {
          "role": "ai",
          "text": "Got it. I’ll prepare the invoice now.",
          "translations": {
            "ko": "알겠습니다. 지금 청구서를 준비하겠습니다.",
            "zh": "明白了。我现在就准备发票。",
            "ja": "了解しました。請求書を作成します。",
            "vi": "Được rồi. Tôi sẽ chuẩn bị hóa đơn ngay bây giờ.",
            "en": "Got it. I’ll prepare the invoice now."
          }
        },
        {
          "role": "user",
          "text": "Make sure to include my membership discount if applicable.",
          "translations": {
            "ko": "가능하다면 회원 할인을 포함해주세요.",
            "zh": "如果适用的话，请确保包含我的会员折扣。",
            "ja": "会員割引が適用可能な場合は含めてください。",
            "vi": "Hãy chắc chắn bao gồm giảm giá thành viên của tôi nếu có thể.",
            "en": "Make sure to include my membership discount if applicable."
          }
        },
        {
          "role": "ai",
          "text": "Already applied. The final amount reflects the benefit.",
          "translations": {
            "ko": "이미 적용되었습니다. 최종 금액은 혜택을 반영하고 있습니다.",
            "zh": "已经应用了。最后的金额已经反映了优惠。",
            "ja": "すでに適用済みです。最終金額には特典が反映されています。",
            "vi": "Đã áp dụng. Số tiền cuối cùng đã phản ánh lợi ích.",
            "en": "Already applied. The final amount reflects the benefit."
          }
        },
        {
          "role": "user",
          "text": "Great. I’ll pay with my corporate card.",
          "translations": {
            "ko": "좋습니다. 제 회사 카드로 결제하겠습니다.",
            "zh": "很好。我将用我的公司卡付款。",
            "ja": "それなら良いです。私の法人カードで支払います。",
            "vi": "Tốt. Tôi sẽ thanh toán bằng thẻ công ty của tôi.",
            "en": "Great. I’ll pay with my corporate card."
          }
        },
        {
          "role": "ai",
          "text": "Please insert the card when ready.",
          "translations": {
            "ko": "준비되면 카드를 넣어주세요.",
            "zh": "准备好时请插入卡片。",
            "ja": "カードを挿入してください。",
            "vi": "Vui lòng chèn thẻ khi sẵn sàng.",
            "en": "Please insert the card when ready."
          }
        },
        {
          "role": "user",
          "text": "Done. Thank you for your help today.",
          "translations": {
            "ko": "완료했습니다. 오늘 도와주셔서 감사합니다.",
            "zh": "完成了。感谢你今天的帮助。",
            "ja": "済みました。今日はお手伝いいただきありがとうございました。",
            "vi": "Xong. Cảm ơn bạn đã giúp đỡ hôm nay.",
            "en": "Done. Thank you for your help today."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Requesting international shipping for a high-value order",
        "ko": "고가 주문에 대한 국제 배송 요청",
        "zh": "为高价值订单请求国际运送",
        "ja": "高額注文の国際配送の依頼",
        "vi": "Yêu cầu gửi hàng quốc tế cho một đơn hàng có giá trị cao"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Good afternoon, can I help you with something special today?",
          "translations": {
            "ko": "안녕하세요, 오늘 특별한 도움이 필요하신가요?",
            "zh": "下午好，今天有什么特别的需要我帮助的吗？",
            "ja": "こんにちは、何かお手伝いできることはありますか？",
            "vi": "Chào buổi chiều, tôi có thể giúp gì cho bạn hôm nay?",
            "en": "Good afternoon, can I help you with something special today?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I’m interested in purchasing this luxury handbag.",
          "translations": {
            "ko": "네, 이 고급 핸드백을 구매하려고 합니다.",
            "zh": "是的，我想购买这款奢侈手袋。",
            "ja": "はい、この高級ハンドバッグを購入したいと思っています。",
            "vi": "Có, tôi muốn mua chiếc túi xách xa xỉ này.",
            "en": "Yes, I’m interested in purchasing this luxury handbag."
          }
        },
        {
          "role": "ai",
          "text": "Excellent choice. That’s one of our signature pieces.",
          "translations": {
            "ko": "훌륭한 선택입니다. 그것은 우리의 시그니처 제품 중 하나입니다.",
            "zh": "优秀的选择。这是我们的招牌产品之一。",
            "ja": "素晴らしい選択です。それは私たちの代表的な商品の一つです。",
            "vi": "Lựa chọn tuyệt vời. Đó là một trong những mặt hàng đặc trưng của chúng tôi.",
            "en": "Excellent choice. That’s one of our signature pieces."
          }
        },
        {
          "role": "user",
          "text": "Do you offer any flexibility on the price?",
          "translations": {
            "ko": "가격에 유연성을 제공하나요?",
            "zh": "你们对价格有任何的弹性吗？",
            "ja": "値段は少しでも調整可能ですか？",
            "vi": "Bạn có thể giảm giá không?",
            "en": "Do you offer any flexibility on the price?"
          }
        },
        {
          "role": "ai",
          "text": "We don’t discount regularly, but I can check with my manager.",
          "translations": {
            "ko": "우리는 정기적으로 할인하지 않지만, 관리자에게 확인해볼 수 있습니다.",
            "zh": "我们不常打折，但我可以和经理确认一下。",
            "ja": "定期的には割引は行っておりませんが、マネージャーに確認してみます。",
            "vi": "Chúng tôi không thường xuyên giảm giá, nhưng tôi có thể kiểm tra với người quản lý của tôi.",
            "en": "We don’t discount regularly, but I can check with my manager."
          }
        },
        {
          "role": "user",
          "text": "I’d appreciate that, especially since I’m buying two items.",
          "translations": {
            "ko": "두 개를 사는 것이니, 그렇게 해주시면 감사하겠습니다.",
            "zh": "我会很感激的，尤其是我要买两件商品。",
            "ja": "それは助かります、特に2つ購入する予定なので。",
            "vi": "Tôi sẽ rất biết ơn nếu bạn làm vậy, đặc biệt là khi tôi mua hai món.",
            "en": "I’d appreciate that, especially since I’m buying two items."
          }
        },
        {
          "role": "ai",
          "text": "In that case, we might be able to offer a preferred client benefit.",
          "translations": {
            "ko": "그런 경우에는, 우대 고객 혜택을 제공할 수 있을지도 모릅니다.",
            "zh": "如果是这样，我们可能可以提供优惠客户福利。",
            "ja": "その場合、優待顧客特典を提供できるかもしれません。",
            "vi": "Trong trường hợp đó, chúng tôi có thể cung cấp một lợi ích cho khách hàng thân thiết.",
            "en": "In that case, we might be able to offer a preferred client benefit."
          }
        },
        {
          "role": "user",
          "text": "Also, can this be shipped internationally?",
          "translations": {
            "ko": "또한, 이 제품을 국제적으로 배송할 수 있나요?",
            "zh": "另外，这个可以国际运送吗？",
            "ja": "また、これは国際配送可能ですか？",
            "vi": "Vậy, sản phẩm này có thể được gửi đi quốc tế không?",
            "en": "Also, can this be shipped internationally?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, we offer insured global shipping with tracking.",
          "translations": {
            "ko": "네, 우리는 추적 가능한 보험된 전세계 배송을 제공합니다.",
            "zh": "是的，我们提供有保险的全球运送并附带追踪号。",
            "ja": "はい、保険付きのグローバル配送を提供しています。",
            "vi": "Có, chúng tôi cung cấp dịch vụ gửi hàng toàn cầu có bảo hiểm và theo dõi.",
            "en": "Yes, we offer insured global shipping with tracking."
          }
        },
        {
          "role": "user",
          "text": "Perfect. How long would it take to reach Singapore?",
          "translations": {
            "ko": "완벽합니다. 싱가포르까지 얼마나 걸릴까요?",
            "zh": "完美。大概需要多久能送到新加坡？",
            "ja": "完璧です。シンガポールまでどのくらいかかりますか？",
            "vi": "Hoàn hảo. Bao lâu thì hàng có thể đến Singapore?",
            "en": "Perfect. How long would it take to reach Singapore?"
          }
        },
        {
          "role": "ai",
          "text": "About 5 to 7 business days.",
          "translations": {
            "ko": "약 5~7 영업일 정도입니다.",
            "zh": "大约5到7个工作日。",
            "ja": "約5から7営業日です。",
            "vi": "Khoảng từ 5 đến 7 ngày làm việc.",
            "en": "About 5 to 7 business days."
          }
        },
        {
          "role": "user",
          "text": "That works. I’d also like a gift wrap, please.",
          "translations": {
            "ko": "좋습니다. 선물 포장도 부탁드립니다.",
            "zh": "这样可以。我还想要礼品包装，请。",
            "ja": "それで大丈夫です。ギフトラップもお願いします。",
            "vi": "Được rồi. Tôi cũng muốn gói quà, vui lòng.",
            "en": "That works. I’d also like a gift wrap, please."
          }
        },
        {
          "role": "ai",
          "text": "Of course. Would you like to include a message card?",
          "translations": {
            "ko": "물론입니다. 메시지 카드를 포함하시겠습니까?",
            "zh": "当然。您想要加入贺卡吗？",
            "ja": "もちろんです。メッセージカードを同封しますか？",
            "vi": "Dĩ nhiên. Bạn có muốn gửi kèm thẻ tin nhắn không?",
            "en": "Of course. Would you like to include a message card?"
          }
        },
        {
          "role": "user",
          "text": "Yes. Please write: 'Congratulations on your achievement!'",
          "translations": {
            "ko": "네. '당신의 성취를 축하합니다!'라고 써 주세요.",
            "zh": "是的。请写上：“祝贺你的成就！”",
            "ja": "はい。'おめでとうございます！'と書いてください。",
            "vi": "Có. Hãy viết: 'Chúc mừng thành công của bạn!'",
            "en": "Yes. Please write: 'Congratulations on your achievement!'"
          }
        },
        {
          "role": "ai",
          "text": "Got it. I’ll prepare the invoice now.",
          "translations": {
            "ko": "알겠습니다. 지금 청구서를 준비하겠습니다.",
            "zh": "明白了。我现在就准备发票。",
            "ja": "了解しました。請求書を作成します。",
            "vi": "Được rồi. Tôi sẽ chuẩn bị hóa đơn ngay bây giờ.",
            "en": "Got it. I’ll prepare the invoice now."
          }
        },
        {
          "role": "user",
          "text": "Make sure to include my membership discount if applicable.",
          "translations": {
            "ko": "가능하다면 회원 할인을 포함해주세요.",
            "zh": "如果适用的话，请确保包含我的会员折扣。",
            "ja": "会員割引が適用可能な場合は含めてください。",
            "vi": "Hãy chắc chắn bao gồm giảm giá thành viên của tôi nếu có thể.",
            "en": "Make sure to include my membership discount if applicable."
          }
        },
        {
          "role": "ai",
          "text": "Already applied. The final amount reflects the benefit.",
          "translations": {
            "ko": "이미 적용되었습니다. 최종 금액은 혜택을 반영하고 있습니다.",
            "zh": "已经应用了。最后的金额已经反映了优惠。",
            "ja": "すでに適用済みです。最終金額には特典が反映されています。",
            "vi": "Đã áp dụng. Số tiền cuối cùng đã phản ánh lợi ích.",
            "en": "Already applied. The final amount reflects the benefit."
          }
        },
        {
          "role": "user",
          "text": "Great. I’ll pay with my corporate card.",
          "translations": {
            "ko": "좋습니다. 제 회사 카드로 결제하겠습니다.",
            "zh": "很好。我将用我的公司卡付款。",
            "ja": "それなら良いです。私の法人カードで支払います。",
            "vi": "Tốt. Tôi sẽ thanh toán bằng thẻ công ty của tôi.",
            "en": "Great. I’ll pay with my corporate card."
          }
        },
        {
          "role": "ai",
          "text": "Please insert the card when ready.",
          "translations": {
            "ko": "준비되면 카드를 넣어주세요.",
            "zh": "准备好时请插入卡片。",
            "ja": "カードを挿入してください。",
            "vi": "Vui lòng chèn thẻ khi sẵn sàng.",
            "en": "Please insert the card when ready."
          }
        },
        {
          "role": "user",
          "text": "Done. Thank you for your help today.",
          "translations": {
            "ko": "완료했습니다. 오늘 도와주셔서 감사합니다.",
            "zh": "完成了。感谢你今天的帮助。",
            "ja": "済みました。今日はお手伝いいただきありがとうございました。",
            "vi": "Xong. Cảm ơn bạn đã giúp đỡ hôm nay.",
            "en": "Done. Thank you for your help today."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Resolving an overcharge on a credit card",
        "ko": "신용카드 과금 문제 해결",
        "zh": "解决信用卡过度收费问题",
        "ja": "クレジットカードの過剰請求の解決",
        "vi": "Giải quyết việc bị tính phí quá mức trên thẻ tín dụng"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Good afternoon, can I help you with something special today?",
          "translations": {
            "ko": "안녕하세요, 오늘 특별한 도움이 필요하신가요?",
            "zh": "下午好，今天有什么特别的需要我帮助的吗？",
            "ja": "こんにちは、何かお手伝いできることはありますか？",
            "vi": "Chào buổi chiều, tôi có thể giúp gì cho bạn hôm nay?",
            "en": "Good afternoon, can I help you with something special today?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I’m interested in purchasing this luxury handbag.",
          "translations": {
            "ko": "네, 이 고급 핸드백을 구매하려고 합니다.",
            "zh": "是的，我想购买这款奢侈手袋。",
            "ja": "はい、この高級ハンドバッグを購入したいと思っています。",
            "vi": "Có, tôi muốn mua chiếc túi xách xa xỉ này.",
            "en": "Yes, I’m interested in purchasing this luxury handbag."
          }
        },
        {
          "role": "ai",
          "text": "Excellent choice. That’s one of our signature pieces.",
          "translations": {
            "ko": "훌륭한 선택입니다. 그것은 우리의 시그니처 제품 중 하나입니다.",
            "zh": "优秀的选择。这是我们的招牌产品之一。",
            "ja": "素晴らしい選択です。それは私たちの代表的な商品の一つです。",
            "vi": "Lựa chọn tuyệt vời. Đó là một trong những mặt hàng đặc trưng của chúng tôi.",
            "en": "Excellent choice. That’s one of our signature pieces."
          }
        },
        {
          "role": "user",
          "text": "Do you offer any flexibility on the price?",
          "translations": {
            "ko": "가격에 유연성을 제공하나요?",
            "zh": "你们对价格有任何的弹性吗？",
            "ja": "値段は少しでも調整可能ですか？",
            "vi": "Bạn có thể giảm giá không?",
            "en": "Do you offer any flexibility on the price?"
          }
        },
        {
          "role": "ai",
          "text": "We don’t discount regularly, but I can check with my manager.",
          "translations": {
            "ko": "우리는 정기적으로 할인하지 않지만, 관리자에게 확인해볼 수 있습니다.",
            "zh": "我们不常打折，但我可以和经理确认一下。",
            "ja": "定期的には割引は行っておりませんが、マネージャーに確認してみます。",
            "vi": "Chúng tôi không thường xuyên giảm giá, nhưng tôi có thể kiểm tra với người quản lý của tôi.",
            "en": "We don’t discount regularly, but I can check with my manager."
          }
        },
        {
          "role": "user",
          "text": "I’d appreciate that, especially since I’m buying two items.",
          "translations": {
            "ko": "두 개를 사는 것이니, 그렇게 해주시면 감사하겠습니다.",
            "zh": "我会很感激的，尤其是我要买两件商品。",
            "ja": "それは助かります、特に2つ購入する予定なので。",
            "vi": "Tôi sẽ rất biết ơn nếu bạn làm vậy, đặc biệt là khi tôi mua hai món.",
            "en": "I’d appreciate that, especially since I’m buying two items."
          }
        },
        {
          "role": "ai",
          "text": "In that case, we might be able to offer a preferred client benefit.",
          "translations": {
            "ko": "그런 경우에는, 우대 고객 혜택을 제공할 수 있을지도 모릅니다.",
            "zh": "如果是这样，我们可能可以提供优惠客户福利。",
            "ja": "その場合、優待顧客特典を提供できるかもしれません。",
            "vi": "Trong trường hợp đó, chúng tôi có thể cung cấp một lợi ích cho khách hàng thân thiết.",
            "en": "In that case, we might be able to offer a preferred client benefit."
          }
        },
        {
          "role": "user",
          "text": "Also, can this be shipped internationally?",
          "translations": {
            "ko": "또한, 이 제품을 국제적으로 배송할 수 있나요?",
            "zh": "另外，这个可以国际运送吗？",
            "ja": "また、これは国際配送可能ですか？",
            "vi": "Vậy, sản phẩm này có thể được gửi đi quốc tế không?",
            "en": "Also, can this be shipped internationally?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, we offer insured global shipping with tracking.",
          "translations": {
            "ko": "네, 우리는 추적 가능한 보험된 전세계 배송을 제공합니다.",
            "zh": "是的，我们提供有保险的全球运送并附带追踪号。",
            "ja": "はい、保険付きのグローバル配送を提供しています。",
            "vi": "Có, chúng tôi cung cấp dịch vụ gửi hàng toàn cầu có bảo hiểm và theo dõi.",
            "en": "Yes, we offer insured global shipping with tracking."
          }
        },
        {
          "role": "user",
          "text": "Perfect. How long would it take to reach Singapore?",
          "translations": {
            "ko": "완벽합니다. 싱가포르까지 얼마나 걸릴까요?",
            "zh": "完美。大概需要多久能送到新加坡？",
            "ja": "完璧です。シンガポールまでどのくらいかかりますか？",
            "vi": "Hoàn hảo. Bao lâu thì hàng có thể đến Singapore?",
            "en": "Perfect. How long would it take to reach Singapore?"
          }
        },
        {
          "role": "ai",
          "text": "About 5 to 7 business days.",
          "translations": {
            "ko": "약 5~7 영업일 정도입니다.",
            "zh": "大约5到7个工作日。",
            "ja": "約5から7営業日です。",
            "vi": "Khoảng từ 5 đến 7 ngày làm việc.",
            "en": "About 5 to 7 business days."
          }
        },
        {
          "role": "user",
          "text": "That works. I’d also like a gift wrap, please.",
          "translations": {
            "ko": "좋습니다. 선물 포장도 부탁드립니다.",
            "zh": "这样可以。我还想要礼品包装，请。",
            "ja": "それで大丈夫です。ギフトラップもお願いします。",
            "vi": "Được rồi. Tôi cũng muốn gói quà, vui lòng.",
            "en": "That works. I’d also like a gift wrap, please."
          }
        },
        {
          "role": "ai",
          "text": "Of course. Would you like to include a message card?",
          "translations": {
            "ko": "물론입니다. 메시지 카드를 포함하시겠습니까?",
            "zh": "当然。您想要加入贺卡吗？",
            "ja": "もちろんです。メッセージカードを同封しますか？",
            "vi": "Dĩ nhiên. Bạn có muốn gửi kèm thẻ tin nhắn không?",
            "en": "Of course. Would you like to include a message card?"
          }
        },
        {
          "role": "user",
          "text": "Yes. Please write: 'Congratulations on your achievement!'",
          "translations": {
            "ko": "네. '당신의 성취를 축하합니다!'라고 써 주세요.",
            "zh": "是的。请写上：“祝贺你的成就！”",
            "ja": "はい。'おめでとうございます！'と書いてください。",
            "vi": "Có. Hãy viết: 'Chúc mừng thành công của bạn!'",
            "en": "Yes. Please write: 'Congratulations on your achievement!'"
          }
        },
        {
          "role": "ai",
          "text": "Got it. I’ll prepare the invoice now.",
          "translations": {
            "ko": "알겠습니다. 지금 청구서를 준비하겠습니다.",
            "zh": "明白了。我现在就准备发票。",
            "ja": "了解しました。請求書を作成します。",
            "vi": "Được rồi. Tôi sẽ chuẩn bị hóa đơn ngay bây giờ.",
            "en": "Got it. I’ll prepare the invoice now."
          }
        },
        {
          "role": "user",
          "text": "Make sure to include my membership discount if applicable.",
          "translations": {
            "ko": "가능하다면 회원 할인을 포함해주세요.",
            "zh": "如果适用的话，请确保包含我的会员折扣。",
            "ja": "会員割引が適用可能な場合は含めてください。",
            "vi": "Hãy chắc chắn bao gồm giảm giá thành viên của tôi nếu có thể.",
            "en": "Make sure to include my membership discount if applicable."
          }
        },
        {
          "role": "ai",
          "text": "Already applied. The final amount reflects the benefit.",
          "translations": {
            "ko": "이미 적용되었습니다. 최종 금액은 혜택을 반영하고 있습니다.",
            "zh": "已经应用了。最后的金额已经反映了优惠。",
            "ja": "すでに適用済みです。最終金額には特典が反映されています。",
            "vi": "Đã áp dụng. Số tiền cuối cùng đã phản ánh lợi ích.",
            "en": "Already applied. The final amount reflects the benefit."
          }
        },
        {
          "role": "user",
          "text": "Great. I’ll pay with my corporate card.",
          "translations": {
            "ko": "좋습니다. 제 회사 카드로 결제하겠습니다.",
            "zh": "很好。我将用我的公司卡付款。",
            "ja": "それなら良いです。私の法人カードで支払います。",
            "vi": "Tốt. Tôi sẽ thanh toán bằng thẻ công ty của tôi.",
            "en": "Great. I’ll pay with my corporate card."
          }
        },
        {
          "role": "ai",
          "text": "Please insert the card when ready.",
          "translations": {
            "ko": "준비되면 카드를 넣어주세요.",
            "zh": "准备好时请插入卡片。",
            "ja": "カードを挿入してください。",
            "vi": "Vui lòng chèn thẻ khi sẵn sàng.",
            "en": "Please insert the card when ready."
          }
        },
        {
          "role": "user",
          "text": "Done. Thank you for your help today.",
          "translations": {
            "ko": "완료했습니다. 오늘 도와주셔서 감사합니다.",
            "zh": "完成了。感谢你今天的帮助。",
            "ja": "済みました。今日はお手伝いいただきありがとうございました。",
            "vi": "Xong. Cảm ơn bạn đã giúp đỡ hôm nay.",
            "en": "Done. Thank you for your help today."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Explaining product specifications to a store expert",
        "ko": "매장 전문가에게 제품 사양 설명하기",
        "zh": "向店铺专家解释产品规格",
        "ja": "店舗の専門家に製品仕様を説明する",
        "vi": "Giải thích thông số kỹ thuật sản phẩm cho chuyên gia cửa hàng"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Good afternoon, can I help you with something special today?",
          "translations": {
            "ko": "안녕하세요, 오늘 특별한 도움이 필요하신가요?",
            "zh": "下午好，今天有什么特别的需要我帮助的吗？",
            "ja": "こんにちは、何かお手伝いできることはありますか？",
            "vi": "Chào buổi chiều, tôi có thể giúp gì cho bạn hôm nay?",
            "en": "Good afternoon, can I help you with something special today?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I’m interested in purchasing this luxury handbag.",
          "translations": {
            "ko": "네, 이 고급 핸드백을 구매하려고 합니다.",
            "zh": "是的，我想购买这款奢侈手袋。",
            "ja": "はい、この高級ハンドバッグを購入したいと思っています。",
            "vi": "Có, tôi muốn mua chiếc túi xách xa xỉ này.",
            "en": "Yes, I’m interested in purchasing this luxury handbag."
          }
        },
        {
          "role": "ai",
          "text": "Excellent choice. That’s one of our signature pieces.",
          "translations": {
            "ko": "훌륭한 선택입니다. 그것은 우리의 시그니처 제품 중 하나입니다.",
            "zh": "优秀的选择。这是我们的招牌产品之一。",
            "ja": "素晴らしい選択です。それは私たちの代表的な商品の一つです。",
            "vi": "Lựa chọn tuyệt vời. Đó là một trong những mặt hàng đặc trưng của chúng tôi.",
            "en": "Excellent choice. That’s one of our signature pieces."
          }
        },
        {
          "role": "user",
          "text": "Do you offer any flexibility on the price?",
          "translations": {
            "ko": "가격에 유연성을 제공하나요?",
            "zh": "你们对价格有任何的弹性吗？",
            "ja": "値段は少しでも調整可能ですか？",
            "vi": "Bạn có thể giảm giá không?",
            "en": "Do you offer any flexibility on the price?"
          }
        },
        {
          "role": "ai",
          "text": "We don’t discount regularly, but I can check with my manager.",
          "translations": {
            "ko": "우리는 정기적으로 할인하지 않지만, 관리자에게 확인해볼 수 있습니다.",
            "zh": "我们不常打折，但我可以和经理确认一下。",
            "ja": "定期的には割引は行っておりませんが、マネージャーに確認してみます。",
            "vi": "Chúng tôi không thường xuyên giảm giá, nhưng tôi có thể kiểm tra với người quản lý của tôi.",
            "en": "We don’t discount regularly, but I can check with my manager."
          }
        },
        {
          "role": "user",
          "text": "I’d appreciate that, especially since I’m buying two items.",
          "translations": {
            "ko": "두 개를 사는 것이니, 그렇게 해주시면 감사하겠습니다.",
            "zh": "我会很感激的，尤其是我要买两件商品。",
            "ja": "それは助かります、特に2つ購入する予定なので。",
            "vi": "Tôi sẽ rất biết ơn nếu bạn làm vậy, đặc biệt là khi tôi mua hai món.",
            "en": "I’d appreciate that, especially since I’m buying two items."
          }
        },
        {
          "role": "ai",
          "text": "In that case, we might be able to offer a preferred client benefit.",
          "translations": {
            "ko": "그런 경우에는, 우대 고객 혜택을 제공할 수 있을지도 모릅니다.",
            "zh": "如果是这样，我们可能可以提供优惠客户福利。",
            "ja": "その場合、優待顧客特典を提供できるかもしれません。",
            "vi": "Trong trường hợp đó, chúng tôi có thể cung cấp một lợi ích cho khách hàng thân thiết.",
            "en": "In that case, we might be able to offer a preferred client benefit."
          }
        },
        {
          "role": "user",
          "text": "Also, can this be shipped internationally?",
          "translations": {
            "ko": "또한, 이 제품을 국제적으로 배송할 수 있나요?",
            "zh": "另外，这个可以国际运送吗？",
            "ja": "また、これは国際配送可能ですか？",
            "vi": "Vậy, sản phẩm này có thể được gửi đi quốc tế không?",
            "en": "Also, can this be shipped internationally?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, we offer insured global shipping with tracking.",
          "translations": {
            "ko": "네, 우리는 추적 가능한 보험된 전세계 배송을 제공합니다.",
            "zh": "是的，我们提供有保险的全球运送并附带追踪号。",
            "ja": "はい、保険付きのグローバル配送を提供しています。",
            "vi": "Có, chúng tôi cung cấp dịch vụ gửi hàng toàn cầu có bảo hiểm và theo dõi.",
            "en": "Yes, we offer insured global shipping with tracking."
          }
        },
        {
          "role": "user",
          "text": "Perfect. How long would it take to reach Singapore?",
          "translations": {
            "ko": "완벽합니다. 싱가포르까지 얼마나 걸릴까요?",
            "zh": "完美。大概需要多久能送到新加坡？",
            "ja": "完璧です。シンガポールまでどのくらいかかりますか？",
            "vi": "Hoàn hảo. Bao lâu thì hàng có thể đến Singapore?",
            "en": "Perfect. How long would it take to reach Singapore?"
          }
        },
        {
          "role": "ai",
          "text": "About 5 to 7 business days.",
          "translations": {
            "ko": "약 5~7 영업일 정도입니다.",
            "zh": "大约5到7个工作日。",
            "ja": "約5から7営業日です。",
            "vi": "Khoảng từ 5 đến 7 ngày làm việc.",
            "en": "About 5 to 7 business days."
          }
        },
        {
          "role": "user",
          "text": "That works. I’d also like a gift wrap, please.",
          "translations": {
            "ko": "좋습니다. 선물 포장도 부탁드립니다.",
            "zh": "这样可以。我还想要礼品包装，请。",
            "ja": "それで大丈夫です。ギフトラップもお願いします。",
            "vi": "Được rồi. Tôi cũng muốn gói quà, vui lòng.",
            "en": "That works. I’d also like a gift wrap, please."
          }
        },
        {
          "role": "ai",
          "text": "Of course. Would you like to include a message card?",
          "translations": {
            "ko": "물론입니다. 메시지 카드를 포함하시겠습니까?",
            "zh": "当然。您想要加入贺卡吗？",
            "ja": "もちろんです。メッセージカードを同封しますか？",
            "vi": "Dĩ nhiên. Bạn có muốn gửi kèm thẻ tin nhắn không?",
            "en": "Of course. Would you like to include a message card?"
          }
        },
        {
          "role": "user",
          "text": "Yes. Please write: 'Congratulations on your achievement!'",
          "translations": {
            "ko": "네. '당신의 성취를 축하합니다!'라고 써 주세요.",
            "zh": "是的。请写上：“祝贺你的成就！”",
            "ja": "はい。'おめでとうございます！'と書いてください。",
            "vi": "Có. Hãy viết: 'Chúc mừng thành công của bạn!'",
            "en": "Yes. Please write: 'Congratulations on your achievement!'"
          }
        },
        {
          "role": "ai",
          "text": "Got it. I’ll prepare the invoice now.",
          "translations": {
            "ko": "알겠습니다. 지금 청구서를 준비하겠습니다.",
            "zh": "明白了。我现在就准备发票。",
            "ja": "了解しました。請求書を作成します。",
            "vi": "Được rồi. Tôi sẽ chuẩn bị hóa đơn ngay bây giờ.",
            "en": "Got it. I’ll prepare the invoice now."
          }
        },
        {
          "role": "user",
          "text": "Make sure to include my membership discount if applicable.",
          "translations": {
            "ko": "가능하다면 회원 할인을 포함해주세요.",
            "zh": "如果适用的话，请确保包含我的会员折扣。",
            "ja": "会員割引が適用可能な場合は含めてください。",
            "vi": "Hãy chắc chắn bao gồm giảm giá thành viên của tôi nếu có thể.",
            "en": "Make sure to include my membership discount if applicable."
          }
        },
        {
          "role": "ai",
          "text": "Already applied. The final amount reflects the benefit.",
          "translations": {
            "ko": "이미 적용되었습니다. 최종 금액은 혜택을 반영하고 있습니다.",
            "zh": "已经应用了。最后的金额已经反映了优惠。",
            "ja": "すでに適用済みです。最終金額には特典が反映されています。",
            "vi": "Đã áp dụng. Số tiền cuối cùng đã phản ánh lợi ích.",
            "en": "Already applied. The final amount reflects the benefit."
          }
        },
        {
          "role": "user",
          "text": "Great. I’ll pay with my corporate card.",
          "translations": {
            "ko": "좋습니다. 제 회사 카드로 결제하겠습니다.",
            "zh": "很好。我将用我的公司卡付款。",
            "ja": "それなら良いです。私の法人カードで支払います。",
            "vi": "Tốt. Tôi sẽ thanh toán bằng thẻ công ty của tôi.",
            "en": "Great. I’ll pay with my corporate card."
          }
        },
        {
          "role": "ai",
          "text": "Please insert the card when ready.",
          "translations": {
            "ko": "준비되면 카드를 넣어주세요.",
            "zh": "准备好时请插入卡片。",
            "ja": "カードを挿入してください。",
            "vi": "Vui lòng chèn thẻ khi sẵn sàng.",
            "en": "Please insert the card when ready."
          }
        },
        {
          "role": "user",
          "text": "Done. Thank you for your help today.",
          "translations": {
            "ko": "완료했습니다. 오늘 도와주셔서 감사합니다.",
            "zh": "完成了。感谢你今天的帮助。",
            "ja": "済みました。今日はお手伝いいただきありがとうございました。",
            "vi": "Xong. Cảm ơn bạn đã giúp đỡ hôm nay.",
            "en": "Done. Thank you for your help today."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Requesting customization for a designer item",
        "ko": "디자이너 아이템에 대한 개인화 요청",
        "zh": "请求设计师商品定制",
        "ja": "デザイナーアイテムのカスタマイズの依頼",
        "vi": "Yêu cầu tùy chỉnh cho một mặt hàng của nhà thiết kế"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Good afternoon, can I help you with something special today?",
          "translations": {
            "ko": "안녕하세요, 오늘 특별한 도움이 필요하신가요?",
            "zh": "下午好，今天有什么特别的需要我帮助的吗？",
            "ja": "こんにちは、何かお手伝いできることはありますか？",
            "vi": "Chào buổi chiều, tôi có thể giúp gì cho bạn hôm nay?",
            "en": "Good afternoon, can I help you with something special today?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I’m interested in purchasing this luxury handbag.",
          "translations": {
            "ko": "네, 이 고급 핸드백을 구매하려고 합니다.",
            "zh": "是的，我想购买这款奢侈手袋。",
            "ja": "はい、この高級ハンドバッグを購入したいと思っています。",
            "vi": "Có, tôi muốn mua chiếc túi xách xa xỉ này.",
            "en": "Yes, I’m interested in purchasing this luxury handbag."
          }
        },
        {
          "role": "ai",
          "text": "Excellent choice. That’s one of our signature pieces.",
          "translations": {
            "ko": "훌륭한 선택입니다. 그것은 우리의 시그니처 제품 중 하나입니다.",
            "zh": "优秀的选择。这是我们的招牌产品之一。",
            "ja": "素晴らしい選択です。それは私たちの代表的な商品の一つです。",
            "vi": "Lựa chọn tuyệt vời. Đó là một trong những mặt hàng đặc trưng của chúng tôi.",
            "en": "Excellent choice. That’s one of our signature pieces."
          }
        },
        {
          "role": "user",
          "text": "Do you offer any flexibility on the price?",
          "translations": {
            "ko": "가격에 유연성을 제공하나요?",
            "zh": "你们对价格有任何的弹性吗？",
            "ja": "値段は少しでも調整可能ですか？",
            "vi": "Bạn có thể giảm giá không?",
            "en": "Do you offer any flexibility on the price?"
          }
        },
        {
          "role": "ai",
          "text": "We don’t discount regularly, but I can check with my manager.",
          "translations": {
            "ko": "우리는 정기적으로 할인하지 않지만, 관리자에게 확인해볼 수 있습니다.",
            "zh": "我们不常打折，但我可以和经理确认一下。",
            "ja": "定期的には割引は行っておりませんが、マネージャーに確認してみます。",
            "vi": "Chúng tôi không thường xuyên giảm giá, nhưng tôi có thể kiểm tra với người quản lý của tôi.",
            "en": "We don’t discount regularly, but I can check with my manager."
          }
        },
        {
          "role": "user",
          "text": "I’d appreciate that, especially since I’m buying two items.",
          "translations": {
            "ko": "두 개를 사는 것이니, 그렇게 해주시면 감사하겠습니다.",
            "zh": "我会很感激的，尤其是我要买两件商品。",
            "ja": "それは助かります、特に2つ購入する予定なので。",
            "vi": "Tôi sẽ rất biết ơn nếu bạn làm vậy, đặc biệt là khi tôi mua hai món.",
            "en": "I’d appreciate that, especially since I’m buying two items."
          }
        },
        {
          "role": "ai",
          "text": "In that case, we might be able to offer a preferred client benefit.",
          "translations": {
            "ko": "그런 경우에는, 우대 고객 혜택을 제공할 수 있을지도 모릅니다.",
            "zh": "如果是这样，我们可能可以提供优惠客户福利。",
            "ja": "その場合、優待顧客特典を提供できるかもしれません。",
            "vi": "Trong trường hợp đó, chúng tôi có thể cung cấp một lợi ích cho khách hàng thân thiết.",
            "en": "In that case, we might be able to offer a preferred client benefit."
          }
        },
        {
          "role": "user",
          "text": "Also, can this be shipped internationally?",
          "translations": {
            "ko": "또한, 이 제품을 국제적으로 배송할 수 있나요?",
            "zh": "另外，这个可以国际运送吗？",
            "ja": "また、これは国際配送可能ですか？",
            "vi": "Vậy, sản phẩm này có thể được gửi đi quốc tế không?",
            "en": "Also, can this be shipped internationally?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, we offer insured global shipping with tracking.",
          "translations": {
            "ko": "네, 우리는 추적 가능한 보험된 전세계 배송을 제공합니다.",
            "zh": "是的，我们提供有保险的全球运送并附带追踪号。",
            "ja": "はい、保険付きのグローバル配送を提供しています。",
            "vi": "Có, chúng tôi cung cấp dịch vụ gửi hàng toàn cầu có bảo hiểm và theo dõi.",
            "en": "Yes, we offer insured global shipping with tracking."
          }
        },
        {
          "role": "user",
          "text": "Perfect. How long would it take to reach Singapore?",
          "translations": {
            "ko": "완벽합니다. 싱가포르까지 얼마나 걸릴까요?",
            "zh": "完美。大概需要多久能送到新加坡？",
            "ja": "完璧です。シンガポールまでどのくらいかかりますか？",
            "vi": "Hoàn hảo. Bao lâu thì hàng có thể đến Singapore?",
            "en": "Perfect. How long would it take to reach Singapore?"
          }
        },
        {
          "role": "ai",
          "text": "About 5 to 7 business days.",
          "translations": {
            "ko": "약 5~7 영업일 정도입니다.",
            "zh": "大约5到7个工作日。",
            "ja": "約5から7営業日です。",
            "vi": "Khoảng từ 5 đến 7 ngày làm việc.",
            "en": "About 5 to 7 business days."
          }
        },
        {
          "role": "user",
          "text": "That works. I’d also like a gift wrap, please.",
          "translations": {
            "ko": "좋습니다. 선물 포장도 부탁드립니다.",
            "zh": "这样可以。我还想要礼品包装，请。",
            "ja": "それで大丈夫です。ギフトラップもお願いします。",
            "vi": "Được rồi. Tôi cũng muốn gói quà, vui lòng.",
            "en": "That works. I’d also like a gift wrap, please."
          }
        },
        {
          "role": "ai",
          "text": "Of course. Would you like to include a message card?",
          "translations": {
            "ko": "물론입니다. 메시지 카드를 포함하시겠습니까?",
            "zh": "当然。您想要加入贺卡吗？",
            "ja": "もちろんです。メッセージカードを同封しますか？",
            "vi": "Dĩ nhiên. Bạn có muốn gửi kèm thẻ tin nhắn không?",
            "en": "Of course. Would you like to include a message card?"
          }
        },
        {
          "role": "user",
          "text": "Yes. Please write: 'Congratulations on your achievement!'",
          "translations": {
            "ko": "네. '당신의 성취를 축하합니다!'라고 써 주세요.",
            "zh": "是的。请写上：“祝贺你的成就！”",
            "ja": "はい。'おめでとうございます！'と書いてください。",
            "vi": "Có. Hãy viết: 'Chúc mừng thành công của bạn!'",
            "en": "Yes. Please write: 'Congratulations on your achievement!'"
          }
        },
        {
          "role": "ai",
          "text": "Got it. I’ll prepare the invoice now.",
          "translations": {
            "ko": "알겠습니다. 지금 청구서를 준비하겠습니다.",
            "zh": "明白了。我现在就准备发票。",
            "ja": "了解しました。請求書を作成します。",
            "vi": "Được rồi. Tôi sẽ chuẩn bị hóa đơn ngay bây giờ.",
            "en": "Got it. I’ll prepare the invoice now."
          }
        },
        {
          "role": "user",
          "text": "Make sure to include my membership discount if applicable.",
          "translations": {
            "ko": "가능하다면 회원 할인을 포함해주세요.",
            "zh": "如果适用的话，请确保包含我的会员折扣。",
            "ja": "会員割引が適用可能な場合は含めてください。",
            "vi": "Hãy chắc chắn bao gồm giảm giá thành viên của tôi nếu có thể.",
            "en": "Make sure to include my membership discount if applicable."
          }
        },
        {
          "role": "ai",
          "text": "Already applied. The final amount reflects the benefit.",
          "translations": {
            "ko": "이미 적용되었습니다. 최종 금액은 혜택을 반영하고 있습니다.",
            "zh": "已经应用了。最后的金额已经反映了优惠。",
            "ja": "すでに適用済みです。最終金額には特典が反映されています。",
            "vi": "Đã áp dụng. Số tiền cuối cùng đã phản ánh lợi ích.",
            "en": "Already applied. The final amount reflects the benefit."
          }
        },
        {
          "role": "user",
          "text": "Great. I’ll pay with my corporate card.",
          "translations": {
            "ko": "좋습니다. 제 회사 카드로 결제하겠습니다.",
            "zh": "很好。我将用我的公司卡付款。",
            "ja": "それなら良いです。私の法人カードで支払います。",
            "vi": "Tốt. Tôi sẽ thanh toán bằng thẻ công ty của tôi.",
            "en": "Great. I’ll pay with my corporate card."
          }
        },
        {
          "role": "ai",
          "text": "Please insert the card when ready.",
          "translations": {
            "ko": "준비되면 카드를 넣어주세요.",
            "zh": "准备好时请插入卡片。",
            "ja": "カードを挿入してください。",
            "vi": "Vui lòng chèn thẻ khi sẵn sàng.",
            "en": "Please insert the card when ready."
          }
        },
        {
          "role": "user",
          "text": "Done. Thank you for your help today.",
          "translations": {
            "ko": "완료했습니다. 오늘 도와주셔서 감사합니다.",
            "zh": "完成了。感谢你今天的帮助。",
            "ja": "済みました。今日はお手伝いいただきありがとうございました。",
            "vi": "Xong. Cảm ơn bạn đã giúp đỡ hôm nay.",
            "en": "Done. Thank you for your help today."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Handling a return without a receipt",
        "ko": "영수증 없이 반품 처리하기",
        "zh": "处理无收据退货",
        "ja": "レシートなしでの返品の対応",
        "vi": "Xử lý việc trả hàng không có hóa đơn"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Good afternoon, can I help you with something special today?",
          "translations": {
            "ko": "안녕하세요, 오늘 특별한 도움이 필요하신가요?",
            "zh": "下午好，今天有什么特别的需要我帮助的吗？",
            "ja": "こんにちは、何かお手伝いできることはありますか？",
            "vi": "Chào buổi chiều, tôi có thể giúp gì cho bạn hôm nay?",
            "en": "Good afternoon, can I help you with something special today?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I’m interested in purchasing this luxury handbag.",
          "translations": {
            "ko": "네, 이 고급 핸드백을 구매하려고 합니다.",
            "zh": "是的，我想购买这款奢侈手袋。",
            "ja": "はい、この高級ハンドバッグを購入したいと思っています。",
            "vi": "Có, tôi muốn mua chiếc túi xách xa xỉ này.",
            "en": "Yes, I’m interested in purchasing this luxury handbag."
          }
        },
        {
          "role": "ai",
          "text": "Excellent choice. That’s one of our signature pieces.",
          "translations": {
            "ko": "훌륭한 선택입니다. 그것은 우리의 시그니처 제품 중 하나입니다.",
            "zh": "优秀的选择。这是我们的招牌产品之一。",
            "ja": "素晴らしい選択です。それは私たちの代表的な商品の一つです。",
            "vi": "Lựa chọn tuyệt vời. Đó là một trong những mặt hàng đặc trưng của chúng tôi.",
            "en": "Excellent choice. That’s one of our signature pieces."
          }
        },
        {
          "role": "user",
          "text": "Do you offer any flexibility on the price?",
          "translations": {
            "ko": "가격에 유연성을 제공하나요?",
            "zh": "你们对价格有任何的弹性吗？",
            "ja": "値段は少しでも調整可能ですか？",
            "vi": "Bạn có thể giảm giá không?",
            "en": "Do you offer any flexibility on the price?"
          }
        },
        {
          "role": "ai",
          "text": "We don’t discount regularly, but I can check with my manager.",
          "translations": {
            "ko": "우리는 정기적으로 할인하지 않지만, 관리자에게 확인해볼 수 있습니다.",
            "zh": "我们不常打折，但我可以和经理确认一下。",
            "ja": "定期的には割引は行っておりませんが、マネージャーに確認してみます。",
            "vi": "Chúng tôi không thường xuyên giảm giá, nhưng tôi có thể kiểm tra với người quản lý của tôi.",
            "en": "We don’t discount regularly, but I can check with my manager."
          }
        },
        {
          "role": "user",
          "text": "I’d appreciate that, especially since I’m buying two items.",
          "translations": {
            "ko": "두 개를 사는 것이니, 그렇게 해주시면 감사하겠습니다.",
            "zh": "我会很感激的，尤其是我要买两件商品。",
            "ja": "それは助かります、特に2つ購入する予定なので。",
            "vi": "Tôi sẽ rất biết ơn nếu bạn làm vậy, đặc biệt là khi tôi mua hai món.",
            "en": "I’d appreciate that, especially since I’m buying two items."
          }
        },
        {
          "role": "ai",
          "text": "In that case, we might be able to offer a preferred client benefit.",
          "translations": {
            "ko": "그런 경우에는, 우대 고객 혜택을 제공할 수 있을지도 모릅니다.",
            "zh": "如果是这样，我们可能可以提供优惠客户福利。",
            "ja": "その場合、優待顧客特典を提供できるかもしれません。",
            "vi": "Trong trường hợp đó, chúng tôi có thể cung cấp một lợi ích cho khách hàng thân thiết.",
            "en": "In that case, we might be able to offer a preferred client benefit."
          }
        },
        {
          "role": "user",
          "text": "Also, can this be shipped internationally?",
          "translations": {
            "ko": "또한, 이 제품을 국제적으로 배송할 수 있나요?",
            "zh": "另外，这个可以国际运送吗？",
            "ja": "また、これは国際配送可能ですか？",
            "vi": "Vậy, sản phẩm này có thể được gửi đi quốc tế không?",
            "en": "Also, can this be shipped internationally?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, we offer insured global shipping with tracking.",
          "translations": {
            "ko": "네, 우리는 추적 가능한 보험된 전세계 배송을 제공합니다.",
            "zh": "是的，我们提供有保险的全球运送并附带追踪号。",
            "ja": "はい、保険付きのグローバル配送を提供しています。",
            "vi": "Có, chúng tôi cung cấp dịch vụ gửi hàng toàn cầu có bảo hiểm và theo dõi.",
            "en": "Yes, we offer insured global shipping with tracking."
          }
        },
        {
          "role": "user",
          "text": "Perfect. How long would it take to reach Singapore?",
          "translations": {
            "ko": "완벽합니다. 싱가포르까지 얼마나 걸릴까요?",
            "zh": "完美。大概需要多久能送到新加坡？",
            "ja": "完璧です。シンガポールまでどのくらいかかりますか？",
            "vi": "Hoàn hảo. Bao lâu thì hàng có thể đến Singapore?",
            "en": "Perfect. How long would it take to reach Singapore?"
          }
        },
        {
          "role": "ai",
          "text": "About 5 to 7 business days.",
          "translations": {
            "ko": "약 5~7 영업일 정도입니다.",
            "zh": "大约5到7个工作日。",
            "ja": "約5から7営業日です。",
            "vi": "Khoảng từ 5 đến 7 ngày làm việc.",
            "en": "About 5 to 7 business days."
          }
        },
        {
          "role": "user",
          "text": "That works. I’d also like a gift wrap, please.",
          "translations": {
            "ko": "좋습니다. 선물 포장도 부탁드립니다.",
            "zh": "这样可以。我还想要礼品包装，请。",
            "ja": "それで大丈夫です。ギフトラップもお願いします。",
            "vi": "Được rồi. Tôi cũng muốn gói quà, vui lòng.",
            "en": "That works. I’d also like a gift wrap, please."
          }
        },
        {
          "role": "ai",
          "text": "Of course. Would you like to include a message card?",
          "translations": {
            "ko": "물론입니다. 메시지 카드를 포함하시겠습니까?",
            "zh": "当然。您想要加入贺卡吗？",
            "ja": "もちろんです。メッセージカードを同封しますか？",
            "vi": "Dĩ nhiên. Bạn có muốn gửi kèm thẻ tin nhắn không?",
            "en": "Of course. Would you like to include a message card?"
          }
        },
        {
          "role": "user",
          "text": "Yes. Please write: 'Congratulations on your achievement!'",
          "translations": {
            "ko": "네. '당신의 성취를 축하합니다!'라고 써 주세요.",
            "zh": "是的。请写上：“祝贺你的成就！”",
            "ja": "はい。'おめでとうございます！'と書いてください。",
            "vi": "Có. Hãy viết: 'Chúc mừng thành công của bạn!'",
            "en": "Yes. Please write: 'Congratulations on your achievement!'"
          }
        },
        {
          "role": "ai",
          "text": "Got it. I’ll prepare the invoice now.",
          "translations": {
            "ko": "알겠습니다. 지금 청구서를 준비하겠습니다.",
            "zh": "明白了。我现在就准备发票。",
            "ja": "了解しました。請求書を作成します。",
            "vi": "Được rồi. Tôi sẽ chuẩn bị hóa đơn ngay bây giờ.",
            "en": "Got it. I’ll prepare the invoice now."
          }
        },
        {
          "role": "user",
          "text": "Make sure to include my membership discount if applicable.",
          "translations": {
            "ko": "가능하다면 회원 할인을 포함해주세요.",
            "zh": "如果适用的话，请确保包含我的会员折扣。",
            "ja": "会員割引が適用可能な場合は含めてください。",
            "vi": "Hãy chắc chắn bao gồm giảm giá thành viên của tôi nếu có thể.",
            "en": "Make sure to include my membership discount if applicable."
          }
        },
        {
          "role": "ai",
          "text": "Already applied. The final amount reflects the benefit.",
          "translations": {
            "ko": "이미 적용되었습니다. 최종 금액은 혜택을 반영하고 있습니다.",
            "zh": "已经应用了。最后的金额已经反映了优惠。",
            "ja": "すでに適用済みです。最終金額には特典が反映されています。",
            "vi": "Đã áp dụng. Số tiền cuối cùng đã phản ánh lợi ích.",
            "en": "Already applied. The final amount reflects the benefit."
          }
        },
        {
          "role": "user",
          "text": "Great. I’ll pay with my corporate card.",
          "translations": {
            "ko": "좋습니다. 제 회사 카드로 결제하겠습니다.",
            "zh": "很好。我将用我的公司卡付款。",
            "ja": "それなら良いです。私の法人カードで支払います。",
            "vi": "Tốt. Tôi sẽ thanh toán bằng thẻ công ty của tôi.",
            "en": "Great. I’ll pay with my corporate card."
          }
        },
        {
          "role": "ai",
          "text": "Please insert the card when ready.",
          "translations": {
            "ko": "준비되면 카드를 넣어주세요.",
            "zh": "准备好时请插入卡片。",
            "ja": "カードを挿入してください。",
            "vi": "Vui lòng chèn thẻ khi sẵn sàng.",
            "en": "Please insert the card when ready."
          }
        },
        {
          "role": "user",
          "text": "Done. Thank you for your help today.",
          "translations": {
            "ko": "완료했습니다. 오늘 도와주셔서 감사합니다.",
            "zh": "完成了。感谢你今天的帮助。",
            "ja": "済みました。今日はお手伝いいただきありがとうございました。",
            "vi": "Xong. Cảm ơn bạn đã giúp đỡ hôm nay.",
            "en": "Done. Thank you for your help today."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Discussing ethical sourcing and sustainability",
        "ko": "윤리적인 조달과 지속 가능성에 대해 논의하기",
        "zh": "讨论道德采购和可持续性",
        "ja": "倫理的な調達と持続可能性についての議論",
        "vi": "Thảo luận về nguồn gốc đạo đức và bền vững"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Good afternoon, can I help you with something special today?",
          "translations": {
            "ko": "안녕하세요, 오늘 특별한 도움이 필요하신가요?",
            "zh": "下午好，今天有什么特别的需要我帮助的吗？",
            "ja": "こんにちは、何かお手伝いできることはありますか？",
            "vi": "Chào buổi chiều, tôi có thể giúp gì cho bạn hôm nay?",
            "en": "Good afternoon, can I help you with something special today?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I’m interested in purchasing this luxury handbag.",
          "translations": {
            "ko": "네, 이 고급 핸드백을 구매하려고 합니다.",
            "zh": "是的，我想购买这款奢侈手袋。",
            "ja": "はい、この高級ハンドバッグを購入したいと思っています。",
            "vi": "Có, tôi muốn mua chiếc túi xách xa xỉ này.",
            "en": "Yes, I’m interested in purchasing this luxury handbag."
          }
        },
        {
          "role": "ai",
          "text": "Excellent choice. That’s one of our signature pieces.",
          "translations": {
            "ko": "훌륭한 선택입니다. 그것은 우리의 시그니처 제품 중 하나입니다.",
            "zh": "优秀的选择。这是我们的招牌产品之一。",
            "ja": "素晴らしい選択です。それは私たちの代表的な商品の一つです。",
            "vi": "Lựa chọn tuyệt vời. Đó là một trong những mặt hàng đặc trưng của chúng tôi.",
            "en": "Excellent choice. That’s one of our signature pieces."
          }
        },
        {
          "role": "user",
          "text": "Do you offer any flexibility on the price?",
          "translations": {
            "ko": "가격에 유연성을 제공하나요?",
            "zh": "你们对价格有任何的弹性吗？",
            "ja": "値段は少しでも調整可能ですか？",
            "vi": "Bạn có thể giảm giá không?",
            "en": "Do you offer any flexibility on the price?"
          }
        },
        {
          "role": "ai",
          "text": "We don’t discount regularly, but I can check with my manager.",
          "translations": {
            "ko": "우리는 정기적으로 할인하지 않지만, 관리자에게 확인해볼 수 있습니다.",
            "zh": "我们不常打折，但我可以和经理确认一下。",
            "ja": "定期的には割引は行っておりませんが、マネージャーに確認してみます。",
            "vi": "Chúng tôi không thường xuyên giảm giá, nhưng tôi có thể kiểm tra với người quản lý của tôi.",
            "en": "We don’t discount regularly, but I can check with my manager."
          }
        },
        {
          "role": "user",
          "text": "I’d appreciate that, especially since I’m buying two items.",
          "translations": {
            "ko": "두 개를 사는 것이니, 그렇게 해주시면 감사하겠습니다.",
            "zh": "我会很感激的，尤其是我要买两件商品。",
            "ja": "それは助かります、特に2つ購入する予定なので。",
            "vi": "Tôi sẽ rất biết ơn nếu bạn làm vậy, đặc biệt là khi tôi mua hai món.",
            "en": "I’d appreciate that, especially since I’m buying two items."
          }
        },
        {
          "role": "ai",
          "text": "In that case, we might be able to offer a preferred client benefit.",
          "translations": {
            "ko": "그런 경우에는, 우대 고객 혜택을 제공할 수 있을지도 모릅니다.",
            "zh": "如果是这样，我们可能可以提供优惠客户福利。",
            "ja": "その場合、優待顧客特典を提供できるかもしれません。",
            "vi": "Trong trường hợp đó, chúng tôi có thể cung cấp một lợi ích cho khách hàng thân thiết.",
            "en": "In that case, we might be able to offer a preferred client benefit."
          }
        },
        {
          "role": "user",
          "text": "Also, can this be shipped internationally?",
          "translations": {
            "ko": "또한, 이 제품을 국제적으로 배송할 수 있나요?",
            "zh": "另外，这个可以国际运送吗？",
            "ja": "また、これは国際配送可能ですか？",
            "vi": "Vậy, sản phẩm này có thể được gửi đi quốc tế không?",
            "en": "Also, can this be shipped internationally?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, we offer insured global shipping with tracking.",
          "translations": {
            "ko": "네, 우리는 추적 가능한 보험된 전세계 배송을 제공합니다.",
            "zh": "是的，我们提供有保险的全球运送并附带追踪号。",
            "ja": "はい、保険付きのグローバル配送を提供しています。",
            "vi": "Có, chúng tôi cung cấp dịch vụ gửi hàng toàn cầu có bảo hiểm và theo dõi.",
            "en": "Yes, we offer insured global shipping with tracking."
          }
        },
        {
          "role": "user",
          "text": "Perfect. How long would it take to reach Singapore?",
          "translations": {
            "ko": "완벽합니다. 싱가포르까지 얼마나 걸릴까요?",
            "zh": "完美。大概需要多久能送到新加坡？",
            "ja": "完璧です。シンガポールまでどのくらいかかりますか？",
            "vi": "Hoàn hảo. Bao lâu thì hàng có thể đến Singapore?",
            "en": "Perfect. How long would it take to reach Singapore?"
          }
        },
        {
          "role": "ai",
          "text": "About 5 to 7 business days.",
          "translations": {
            "ko": "약 5~7 영업일 정도입니다.",
            "zh": "大约5到7个工作日。",
            "ja": "約5から7営業日です。",
            "vi": "Khoảng từ 5 đến 7 ngày làm việc.",
            "en": "About 5 to 7 business days."
          }
        },
        {
          "role": "user",
          "text": "That works. I’d also like a gift wrap, please.",
          "translations": {
            "ko": "좋습니다. 선물 포장도 부탁드립니다.",
            "zh": "这样可以。我还想要礼品包装，请。",
            "ja": "それで大丈夫です。ギフトラップもお願いします。",
            "vi": "Được rồi. Tôi cũng muốn gói quà, vui lòng.",
            "en": "That works. I’d also like a gift wrap, please."
          }
        },
        {
          "role": "ai",
          "text": "Of course. Would you like to include a message card?",
          "translations": {
            "ko": "물론입니다. 메시지 카드를 포함하시겠습니까?",
            "zh": "当然。您想要加入贺卡吗？",
            "ja": "もちろんです。メッセージカードを同封しますか？",
            "vi": "Dĩ nhiên. Bạn có muốn gửi kèm thẻ tin nhắn không?",
            "en": "Of course. Would you like to include a message card?"
          }
        },
        {
          "role": "user",
          "text": "Yes. Please write: 'Congratulations on your achievement!'",
          "translations": {
            "ko": "네. '당신의 성취를 축하합니다!'라고 써 주세요.",
            "zh": "是的。请写上：“祝贺你的成就！”",
            "ja": "はい。'おめでとうございます！'と書いてください。",
            "vi": "Có. Hãy viết: 'Chúc mừng thành công của bạn!'",
            "en": "Yes. Please write: 'Congratulations on your achievement!'"
          }
        },
        {
          "role": "ai",
          "text": "Got it. I’ll prepare the invoice now.",
          "translations": {
            "ko": "알겠습니다. 지금 청구서를 준비하겠습니다.",
            "zh": "明白了。我现在就准备发票。",
            "ja": "了解しました。請求書を作成します。",
            "vi": "Được rồi. Tôi sẽ chuẩn bị hóa đơn ngay bây giờ.",
            "en": "Got it. I’ll prepare the invoice now."
          }
        },
        {
          "role": "user",
          "text": "Make sure to include my membership discount if applicable.",
          "translations": {
            "ko": "가능하다면 회원 할인을 포함해주세요.",
            "zh": "如果适用的话，请确保包含我的会员折扣。",
            "ja": "会員割引が適用可能な場合は含めてください。",
            "vi": "Hãy chắc chắn bao gồm giảm giá thành viên của tôi nếu có thể.",
            "en": "Make sure to include my membership discount if applicable."
          }
        },
        {
          "role": "ai",
          "text": "Already applied. The final amount reflects the benefit.",
          "translations": {
            "ko": "이미 적용되었습니다. 최종 금액은 혜택을 반영하고 있습니다.",
            "zh": "已经应用了。最后的金额已经反映了优惠。",
            "ja": "すでに適用済みです。最終金額には特典が反映されています。",
            "vi": "Đã áp dụng. Số tiền cuối cùng đã phản ánh lợi ích.",
            "en": "Already applied. The final amount reflects the benefit."
          }
        },
        {
          "role": "user",
          "text": "Great. I’ll pay with my corporate card.",
          "translations": {
            "ko": "좋습니다. 제 회사 카드로 결제하겠습니다.",
            "zh": "很好。我将用我的公司卡付款。",
            "ja": "それなら良いです。私の法人カードで支払います。",
            "vi": "Tốt. Tôi sẽ thanh toán bằng thẻ công ty của tôi.",
            "en": "Great. I’ll pay with my corporate card."
          }
        },
        {
          "role": "ai",
          "text": "Please insert the card when ready.",
          "translations": {
            "ko": "준비되면 카드를 넣어주세요.",
            "zh": "准备好时请插入卡片。",
            "ja": "カードを挿入してください。",
            "vi": "Vui lòng chèn thẻ khi sẵn sàng.",
            "en": "Please insert the card when ready."
          }
        },
        {
          "role": "user",
          "text": "Done. Thank you for your help today.",
          "translations": {
            "ko": "완료했습니다. 오늘 도와주셔서 감사합니다.",
            "zh": "完成了。感谢你今天的帮助。",
            "ja": "済みました。今日はお手伝いいただきありがとうございました。",
            "vi": "Xong. Cảm ơn bạn đã giúp đỡ hôm nay.",
            "en": "Done. Thank you for your help today."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Providing feedback to a store manager",
        "ko": "매장 관리자에게 피드백 제공하기",
        "zh": "向店长提供反馈",
        "ja": "店長へのフィードバックの提供",
        "vi": "Gửi phản hồi cho người quản lý cửa hàng"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Good afternoon, can I help you with something special today?",
          "translations": {
            "ko": "안녕하세요, 오늘 특별한 도움이 필요하신가요?",
            "zh": "下午好，今天有什么特别的需要我帮助的吗？",
            "ja": "こんにちは、何かお手伝いできることはありますか？",
            "vi": "Chào buổi chiều, tôi có thể giúp gì cho bạn hôm nay?",
            "en": "Good afternoon, can I help you with something special today?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I’m interested in purchasing this luxury handbag.",
          "translations": {
            "ko": "네, 이 고급 핸드백을 구매하려고 합니다.",
            "zh": "是的，我想购买这款奢侈手袋。",
            "ja": "はい、この高級ハンドバッグを購入したいと思っています。",
            "vi": "Có, tôi muốn mua chiếc túi xách xa xỉ này.",
            "en": "Yes, I’m interested in purchasing this luxury handbag."
          }
        },
        {
          "role": "ai",
          "text": "Excellent choice. That’s one of our signature pieces.",
          "translations": {
            "ko": "훌륭한 선택입니다. 그것은 우리의 시그니처 제품 중 하나입니다.",
            "zh": "优秀的选择。这是我们的招牌产品之一。",
            "ja": "素晴らしい選択です。それは私たちの代表的な商品の一つです。",
            "vi": "Lựa chọn tuyệt vời. Đó là một trong những mặt hàng đặc trưng của chúng tôi.",
            "en": "Excellent choice. That’s one of our signature pieces."
          }
        },
        {
          "role": "user",
          "text": "Do you offer any flexibility on the price?",
          "translations": {
            "ko": "가격에 유연성을 제공하나요?",
            "zh": "你们对价格有任何的弹性吗？",
            "ja": "値段は少しでも調整可能ですか？",
            "vi": "Bạn có thể giảm giá không?",
            "en": "Do you offer any flexibility on the price?"
          }
        },
        {
          "role": "ai",
          "text": "We don’t discount regularly, but I can check with my manager.",
          "translations": {
            "ko": "우리는 정기적으로 할인하지 않지만, 관리자에게 확인해볼 수 있습니다.",
            "zh": "我们不常打折，但我可以和经理确认一下。",
            "ja": "定期的には割引は行っておりませんが、マネージャーに確認してみます。",
            "vi": "Chúng tôi không thường xuyên giảm giá, nhưng tôi có thể kiểm tra với người quản lý của tôi.",
            "en": "We don’t discount regularly, but I can check with my manager."
          }
        },
        {
          "role": "user",
          "text": "I’d appreciate that, especially since I’m buying two items.",
          "translations": {
            "ko": "두 개를 사는 것이니, 그렇게 해주시면 감사하겠습니다.",
            "zh": "我会很感激的，尤其是我要买两件商品。",
            "ja": "それは助かります、特に2つ購入する予定なので。",
            "vi": "Tôi sẽ rất biết ơn nếu bạn làm vậy, đặc biệt là khi tôi mua hai món.",
            "en": "I’d appreciate that, especially since I’m buying two items."
          }
        },
        {
          "role": "ai",
          "text": "In that case, we might be able to offer a preferred client benefit.",
          "translations": {
            "ko": "그런 경우에는, 우대 고객 혜택을 제공할 수 있을지도 모릅니다.",
            "zh": "如果是这样，我们可能可以提供优惠客户福利。",
            "ja": "その場合、優待顧客特典を提供できるかもしれません。",
            "vi": "Trong trường hợp đó, chúng tôi có thể cung cấp một lợi ích cho khách hàng thân thiết.",
            "en": "In that case, we might be able to offer a preferred client benefit."
          }
        },
        {
          "role": "user",
          "text": "Also, can this be shipped internationally?",
          "translations": {
            "ko": "또한, 이 제품을 국제적으로 배송할 수 있나요?",
            "zh": "另外，这个可以国际运送吗？",
            "ja": "また、これは国際配送可能ですか？",
            "vi": "Vậy, sản phẩm này có thể được gửi đi quốc tế không?",
            "en": "Also, can this be shipped internationally?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, we offer insured global shipping with tracking.",
          "translations": {
            "ko": "네, 우리는 추적 가능한 보험된 전세계 배송을 제공합니다.",
            "zh": "是的，我们提供有保险的全球运送并附带追踪号。",
            "ja": "はい、保険付きのグローバル配送を提供しています。",
            "vi": "Có, chúng tôi cung cấp dịch vụ gửi hàng toàn cầu có bảo hiểm và theo dõi.",
            "en": "Yes, we offer insured global shipping with tracking."
          }
        },
        {
          "role": "user",
          "text": "Perfect. How long would it take to reach Singapore?",
          "translations": {
            "ko": "완벽합니다. 싱가포르까지 얼마나 걸릴까요?",
            "zh": "完美。大概需要多久能送到新加坡？",
            "ja": "完璧です。シンガポールまでどのくらいかかりますか？",
            "vi": "Hoàn hảo. Bao lâu thì hàng có thể đến Singapore?",
            "en": "Perfect. How long would it take to reach Singapore?"
          }
        },
        {
          "role": "ai",
          "text": "About 5 to 7 business days.",
          "translations": {
            "ko": "약 5~7 영업일 정도입니다.",
            "zh": "大约5到7个工作日。",
            "ja": "約5から7営業日です。",
            "vi": "Khoảng từ 5 đến 7 ngày làm việc.",
            "en": "About 5 to 7 business days."
          }
        },
        {
          "role": "user",
          "text": "That works. I’d also like a gift wrap, please.",
          "translations": {
            "ko": "좋습니다. 선물 포장도 부탁드립니다.",
            "zh": "这样可以。我还想要礼品包装，请。",
            "ja": "それで大丈夫です。ギフトラップもお願いします。",
            "vi": "Được rồi. Tôi cũng muốn gói quà, vui lòng.",
            "en": "That works. I’d also like a gift wrap, please."
          }
        },
        {
          "role": "ai",
          "text": "Of course. Would you like to include a message card?",
          "translations": {
            "ko": "물론입니다. 메시지 카드를 포함하시겠습니까?",
            "zh": "当然。您想要加入贺卡吗？",
            "ja": "もちろんです。メッセージカードを同封しますか？",
            "vi": "Dĩ nhiên. Bạn có muốn gửi kèm thẻ tin nhắn không?",
            "en": "Of course. Would you like to include a message card?"
          }
        },
        {
          "role": "user",
          "text": "Yes. Please write: 'Congratulations on your achievement!'",
          "translations": {
            "ko": "네. '당신의 성취를 축하합니다!'라고 써 주세요.",
            "zh": "是的。请写上：“祝贺你的成就！”",
            "ja": "はい。'おめでとうございます！'と書いてください。",
            "vi": "Có. Hãy viết: 'Chúc mừng thành công của bạn!'",
            "en": "Yes. Please write: 'Congratulations on your achievement!'"
          }
        },
        {
          "role": "ai",
          "text": "Got it. I’ll prepare the invoice now.",
          "translations": {
            "ko": "알겠습니다. 지금 청구서를 준비하겠습니다.",
            "zh": "明白了。我现在就准备发票。",
            "ja": "了解しました。請求書を作成します。",
            "vi": "Được rồi. Tôi sẽ chuẩn bị hóa đơn ngay bây giờ.",
            "en": "Got it. I’ll prepare the invoice now."
          }
        },
        {
          "role": "user",
          "text": "Make sure to include my membership discount if applicable.",
          "translations": {
            "ko": "가능하다면 회원 할인을 포함해주세요.",
            "zh": "如果适用的话，请确保包含我的会员折扣。",
            "ja": "会員割引が適用可能な場合は含めてください。",
            "vi": "Hãy chắc chắn bao gồm giảm giá thành viên của tôi nếu có thể.",
            "en": "Make sure to include my membership discount if applicable."
          }
        },
        {
          "role": "ai",
          "text": "Already applied. The final amount reflects the benefit.",
          "translations": {
            "ko": "이미 적용되었습니다. 최종 금액은 혜택을 반영하고 있습니다.",
            "zh": "已经应用了。最后的金额已经反映了优惠。",
            "ja": "すでに適用済みです。最終金額には特典が反映されています。",
            "vi": "Đã áp dụng. Số tiền cuối cùng đã phản ánh lợi ích.",
            "en": "Already applied. The final amount reflects the benefit."
          }
        },
        {
          "role": "user",
          "text": "Great. I’ll pay with my corporate card.",
          "translations": {
            "ko": "좋습니다. 제 회사 카드로 결제하겠습니다.",
            "zh": "很好。我将用我的公司卡付款。",
            "ja": "それなら良いです。私の法人カードで支払います。",
            "vi": "Tốt. Tôi sẽ thanh toán bằng thẻ công ty của tôi.",
            "en": "Great. I’ll pay with my corporate card."
          }
        },
        {
          "role": "ai",
          "text": "Please insert the card when ready.",
          "translations": {
            "ko": "준비되면 카드를 넣어주세요.",
            "zh": "准备好时请插入卡片。",
            "ja": "カードを挿入してください。",
            "vi": "Vui lòng chèn thẻ khi sẵn sàng.",
            "en": "Please insert the card when ready."
          }
        },
        {
          "role": "user",
          "text": "Done. Thank you for your help today.",
          "translations": {
            "ko": "완료했습니다. 오늘 도와주셔서 감사합니다.",
            "zh": "完成了。感谢你今天的帮助。",
            "ja": "済みました。今日はお手伝いいただきありがとうございました。",
            "vi": "Xong. Cảm ơn bạn đã giúp đỡ hôm nay.",
            "en": "Done. Thank you for your help today."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Using a corporate account for purchases",
        "ko": "구매를 위해 기업 계정 사용하기",
        "zh": "使用公司账户购买",
        "ja": "法人アカウントを使用した購入",
        "vi": "Sử dụng tài khoản công ty để mua hàng"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Good afternoon, can I help you with something special today?",
          "translations": {
            "ko": "안녕하세요, 오늘 특별한 도움이 필요하신가요?",
            "zh": "下午好，今天有什么特别的需要我帮助的吗？",
            "ja": "こんにちは、何かお手伝いできることはありますか？",
            "vi": "Chào buổi chiều, tôi có thể giúp gì cho bạn hôm nay?",
            "en": "Good afternoon, can I help you with something special today?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I’m interested in purchasing this luxury handbag.",
          "translations": {
            "ko": "네, 이 고급 핸드백을 구매하려고 합니다.",
            "zh": "是的，我想购买这款奢侈手袋。",
            "ja": "はい、この高級ハンドバッグを購入したいと思っています。",
            "vi": "Có, tôi muốn mua chiếc túi xách xa xỉ này.",
            "en": "Yes, I’m interested in purchasing this luxury handbag."
          }
        },
        {
          "role": "ai",
          "text": "Excellent choice. That’s one of our signature pieces.",
          "translations": {
            "ko": "훌륭한 선택입니다. 그것은 우리의 시그니처 제품 중 하나입니다.",
            "zh": "优秀的选择。这是我们的招牌产品之一。",
            "ja": "素晴らしい選択です。それは私たちの代表的な商品の一つです。",
            "vi": "Lựa chọn tuyệt vời. Đó là một trong những mặt hàng đặc trưng của chúng tôi.",
            "en": "Excellent choice. That’s one of our signature pieces."
          }
        },
        {
          "role": "user",
          "text": "Do you offer any flexibility on the price?",
          "translations": {
            "ko": "가격에 유연성을 제공하나요?",
            "zh": "你们对价格有任何的弹性吗？",
            "ja": "値段は少しでも調整可能ですか？",
            "vi": "Bạn có thể giảm giá không?",
            "en": "Do you offer any flexibility on the price?"
          }
        },
        {
          "role": "ai",
          "text": "We don’t discount regularly, but I can check with my manager.",
          "translations": {
            "ko": "우리는 정기적으로 할인하지 않지만, 관리자에게 확인해볼 수 있습니다.",
            "zh": "我们不常打折，但我可以和经理确认一下。",
            "ja": "定期的には割引は行っておりませんが、マネージャーに確認してみます。",
            "vi": "Chúng tôi không thường xuyên giảm giá, nhưng tôi có thể kiểm tra với người quản lý của tôi.",
            "en": "We don’t discount regularly, but I can check with my manager."
          }
        },
        {
          "role": "user",
          "text": "I’d appreciate that, especially since I’m buying two items.",
          "translations": {
            "ko": "두 개를 사는 것이니, 그렇게 해주시면 감사하겠습니다.",
            "zh": "我会很感激的，尤其是我要买两件商品。",
            "ja": "それは助かります、特に2つ購入する予定なので。",
            "vi": "Tôi sẽ rất biết ơn nếu bạn làm vậy, đặc biệt là khi tôi mua hai món.",
            "en": "I’d appreciate that, especially since I’m buying two items."
          }
        },
        {
          "role": "ai",
          "text": "In that case, we might be able to offer a preferred client benefit.",
          "translations": {
            "ko": "그런 경우에는, 우대 고객 혜택을 제공할 수 있을지도 모릅니다.",
            "zh": "如果是这样，我们可能可以提供优惠客户福利。",
            "ja": "その場合、優待顧客特典を提供できるかもしれません。",
            "vi": "Trong trường hợp đó, chúng tôi có thể cung cấp một lợi ích cho khách hàng thân thiết.",
            "en": "In that case, we might be able to offer a preferred client benefit."
          }
        },
        {
          "role": "user",
          "text": "Also, can this be shipped internationally?",
          "translations": {
            "ko": "또한, 이 제품을 국제적으로 배송할 수 있나요?",
            "zh": "另外，这个可以国际运送吗？",
            "ja": "また、これは国際配送可能ですか？",
            "vi": "Vậy, sản phẩm này có thể được gửi đi quốc tế không?",
            "en": "Also, can this be shipped internationally?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, we offer insured global shipping with tracking.",
          "translations": {
            "ko": "네, 우리는 추적 가능한 보험된 전세계 배송을 제공합니다.",
            "zh": "是的，我们提供有保险的全球运送并附带追踪号。",
            "ja": "はい、保険付きのグローバル配送を提供しています。",
            "vi": "Có, chúng tôi cung cấp dịch vụ gửi hàng toàn cầu có bảo hiểm và theo dõi.",
            "en": "Yes, we offer insured global shipping with tracking."
          }
        },
        {
          "role": "user",
          "text": "Perfect. How long would it take to reach Singapore?",
          "translations": {
            "ko": "완벽합니다. 싱가포르까지 얼마나 걸릴까요?",
            "zh": "完美。大概需要多久能送到新加坡？",
            "ja": "完璧です。シンガポールまでどのくらいかかりますか？",
            "vi": "Hoàn hảo. Bao lâu thì hàng có thể đến Singapore?",
            "en": "Perfect. How long would it take to reach Singapore?"
          }
        },
        {
          "role": "ai",
          "text": "About 5 to 7 business days.",
          "translations": {
            "ko": "약 5~7 영업일 정도입니다.",
            "zh": "大约5到7个工作日。",
            "ja": "約5から7営業日です。",
            "vi": "Khoảng từ 5 đến 7 ngày làm việc.",
            "en": "About 5 to 7 business days."
          }
        },
        {
          "role": "user",
          "text": "That works. I’d also like a gift wrap, please.",
          "translations": {
            "ko": "좋습니다. 선물 포장도 부탁드립니다.",
            "zh": "这样可以。我还想要礼品包装，请。",
            "ja": "それで大丈夫です。ギフトラップもお願いします。",
            "vi": "Được rồi. Tôi cũng muốn gói quà, vui lòng.",
            "en": "That works. I’d also like a gift wrap, please."
          }
        },
        {
          "role": "ai",
          "text": "Of course. Would you like to include a message card?",
          "translations": {
            "ko": "물론입니다. 메시지 카드를 포함하시겠습니까?",
            "zh": "当然。您想要加入贺卡吗？",
            "ja": "もちろんです。メッセージカードを同封しますか？",
            "vi": "Dĩ nhiên. Bạn có muốn gửi kèm thẻ tin nhắn không?",
            "en": "Of course. Would you like to include a message card?"
          }
        },
        {
          "role": "user",
          "text": "Yes. Please write: 'Congratulations on your achievement!'",
          "translations": {
            "ko": "네. '당신의 성취를 축하합니다!'라고 써 주세요.",
            "zh": "是的。请写上：“祝贺你的成就！”",
            "ja": "はい。'おめでとうございます！'と書いてください。",
            "vi": "Có. Hãy viết: 'Chúc mừng thành công của bạn!'",
            "en": "Yes. Please write: 'Congratulations on your achievement!'"
          }
        },
        {
          "role": "ai",
          "text": "Got it. I’ll prepare the invoice now.",
          "translations": {
            "ko": "알겠습니다. 지금 청구서를 준비하겠습니다.",
            "zh": "明白了。我现在就准备发票。",
            "ja": "了解しました。請求書を作成します。",
            "vi": "Được rồi. Tôi sẽ chuẩn bị hóa đơn ngay bây giờ.",
            "en": "Got it. I’ll prepare the invoice now."
          }
        },
        {
          "role": "user",
          "text": "Make sure to include my membership discount if applicable.",
          "translations": {
            "ko": "가능하다면 회원 할인을 포함해주세요.",
            "zh": "如果适用的话，请确保包含我的会员折扣。",
            "ja": "会員割引が適用可能な場合は含めてください。",
            "vi": "Hãy chắc chắn bao gồm giảm giá thành viên của tôi nếu có thể.",
            "en": "Make sure to include my membership discount if applicable."
          }
        },
        {
          "role": "ai",
          "text": "Already applied. The final amount reflects the benefit.",
          "translations": {
            "ko": "이미 적용되었습니다. 최종 금액은 혜택을 반영하고 있습니다.",
            "zh": "已经应用了。最后的金额已经反映了优惠。",
            "ja": "すでに適用済みです。最終金額には特典が反映されています。",
            "vi": "Đã áp dụng. Số tiền cuối cùng đã phản ánh lợi ích.",
            "en": "Already applied. The final amount reflects the benefit."
          }
        },
        {
          "role": "user",
          "text": "Great. I’ll pay with my corporate card.",
          "translations": {
            "ko": "좋습니다. 제 회사 카드로 결제하겠습니다.",
            "zh": "很好。我将用我的公司卡付款。",
            "ja": "それなら良いです。私の法人カードで支払います。",
            "vi": "Tốt. Tôi sẽ thanh toán bằng th",
            "en": "Great. I’ll pay with my corporate card."
          }
        },
        {
          "role": "ai",
          "text": "Please insert the card when ready.",
          "translations": {
            "ko": "준비되면 카드를 넣어주세요.",
            "zh": "准备好时请插入卡片。",
            "ja": "カードを挿入してください。",
            "vi": "",
            "en": "Please insert the card when ready."
          }
        },
        {
          "role": "user",
          "text": "Done. Thank you for your help today.",
          "translations": {
            "ko": "완료했습니다. 오늘 도와주셔서 감사합니다.",
            "zh": "完成了。感谢你今天的帮助。",
            "ja": "済みました。今日はお手伝いいただきありがとうございました。",
            "vi": "",
            "en": "Done. Thank you for your help today."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Arranging a private shopping appointment",
        "ko": "개인 쇼핑 약속 잡기",
        "zh": "安排私人购物预约",
        "ja": "プライベートショッピングの予約の手配",
        "vi": ""
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Good afternoon, can I help you with something special today?",
          "translations": {
            "ko": "안녕하세요, 오늘 특별한 도움이 필요하신가요?",
            "zh": "下午好，今天有什么特别的需要我帮助的吗？",
            "ja": "こんにちは、何かお手伝いできることはありますか？",
            "vi": "",
            "en": "Good afternoon, can I help you with something special today?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I’m interested in purchasing this luxury handbag.",
          "translations": {
            "ko": "네, 이 고급 핸드백을 구매하려고 합니다.",
            "zh": "是的，我想购买这款奢侈手袋。",
            "ja": "はい、この高級ハンドバッグを購入したいと思っています。",
            "vi": "",
            "en": "Yes, I’m interested in purchasing this luxury handbag."
          }
        },
        {
          "role": "ai",
          "text": "Excellent choice. That’s one of our signature pieces.",
          "translations": {
            "ko": "훌륭한 선택입니다. 그것은 우리의 시그니처 제품 중 하나입니다.",
            "zh": "优秀的选择。这是我们的招牌产品之一。",
            "ja": "素晴らしい選択です。それは私たちの代表的な商品の一つです。",
            "vi": "",
            "en": "Excellent choice. That’s one of our signature pieces."
          }
        },
        {
          "role": "user",
          "text": "Do you offer any flexibility on the price?",
          "translations": {
            "ko": "가격에 유연성을 제공하나요?",
            "zh": "你们对价格有任何的弹性吗？",
            "ja": "値段は少しでも調整可能ですか？",
            "vi": "",
            "en": "Do you offer any flexibility on the price?"
          }
        },
        {
          "role": "ai",
          "text": "We don’t discount regularly, but I can check with my manager.",
          "translations": {
            "ko": "우리는 정기적으로 할인하지 않지만, 관리자에게 확인해볼 수 있습니다.",
            "zh": "我们不常打折，但我可以和经理确认一下。",
            "ja": "定期的には割引は行っておりませんが、マネージャーに確認してみます。",
            "vi": "",
            "en": "We don’t discount regularly, but I can check with my manager."
          }
        },
        {
          "role": "user",
          "text": "I’d appreciate that, especially since I’m buying two items.",
          "translations": {
            "ko": "두 개를 사는 것이니, 그렇게 해주시면 감사하겠습니다.",
            "zh": "我会很感激的，尤其是我要买两件商品。",
            "ja": "それは助かります、特に2つ購入する予定なので。",
            "vi": "",
            "en": "I’d appreciate that, especially since I’m buying two items."
          }
        },
        {
          "role": "ai",
          "text": "In that case, we might be able to offer a preferred client benefit.",
          "translations": {
            "ko": "그런 경우에는, 우대 고객 혜택을 제공할 수 있을지도 모릅니다.",
            "zh": "如果是这样，我们可能可以提供优惠客户福利。",
            "ja": "その場合、優待顧客特典を提供できるかもしれません。",
            "vi": "",
            "en": "In that case, we might be able to offer a preferred client benefit."
          }
        },
        {
          "role": "user",
          "text": "Also, can this be shipped internationally?",
          "translations": {
            "ko": "또한, 이 제품을 국제적으로 배송할 수 있나요?",
            "zh": "另外，这个可以国际运送吗？",
            "ja": "また、これは国際配送可能ですか？",
            "vi": "",
            "en": "Also, can this be shipped internationally?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, we offer insured global shipping with tracking.",
          "translations": {
            "ko": "네, 우리는 추적 가능한 보험된 전세계 배송을 제공합니다.",
            "zh": "是的，我们提供有保险的全球运送并附带追踪号。",
            "ja": "はい、保険付きのグローバル配送を提供しています。",
            "vi": "",
            "en": "Yes, we offer insured global shipping with tracking."
          }
        },
        {
          "role": "user",
          "text": "Perfect. How long would it take to reach Singapore?",
          "translations": {
            "ko": "완벽합니다. 싱가포르까지 얼마나 걸릴까요?",
            "zh": "完美。大概需要多久能送到新加坡？",
            "ja": "完璧です。シンガポールまでどのくらいかかりますか？",
            "vi": "",
            "en": "Perfect. How long would it take to reach Singapore?"
          }
        },
        {
          "role": "ai",
          "text": "About 5 to 7 business days.",
          "translations": {
            "ko": "약 5~7 영업일 정도입니다.",
            "zh": "大约5到7个工作日。",
            "ja": "約5から7営業日です。",
            "vi": "",
            "en": "About 5 to 7 business days."
          }
        },
        {
          "role": "user",
          "text": "That works. I’d also like a gift wrap, please.",
          "translations": {
            "ko": "좋습니다. 선물 포장도 부탁드립니다.",
            "zh": "这样可以。我还想要礼品包装，请。",
            "ja": "それで大丈夫です。ギフトラップもお願いします。",
            "vi": "",
            "en": "That works. I’d also like a gift wrap, please."
          }
        },
        {
          "role": "ai",
          "text": "Of course. Would you like to include a message card?",
          "translations": {
            "ko": "물론입니다. 메시지 카드를 포함하시겠습니까?",
            "zh": "当然。您想要加入贺卡吗？",
            "ja": "もちろんです。メッセージカードを同封しますか？",
            "vi": "",
            "en": "Of course. Would you like to include a message card?"
          }
        },
        {
          "role": "user",
          "text": "Yes. Please write: 'Congratulations on your achievement!'",
          "translations": {
            "ko": "네. '당신의 성취를 축하합니다!'라고 써 주세요.",
            "zh": "是的。请写上：“祝贺你的成就！”",
            "ja": "はい。'おめでとうございます！'と書いてください。",
            "vi": "",
            "en": "Yes. Please write: 'Congratulations on your achievement!'"
          }
        },
        {
          "role": "ai",
          "text": "Got it. I’ll prepare the invoice now.",
          "translations": {
            "ko": "알겠습니다. 지금 청구서를 준비하겠습니다.",
            "zh": "明白了。我现在就准备发票。",
            "ja": "了解しました。請求書を作成します。",
            "vi": "",
            "en": "Got it. I’ll prepare the invoice now."
          }
        },
        {
          "role": "user",
          "text": "Make sure to include my membership discount if applicable.",
          "translations": {
            "ko": "가능하다면 회원 할인을 포함해주세요.",
            "zh": "如果适用的话，请确保包含我的会员折扣。",
            "ja": "会員割引が適用可能な場合は含めてください。",
            "vi": "",
            "en": "Make sure to include my membership discount if applicable."
          }
        },
        {
          "role": "ai",
          "text": "Already applied. The final amount reflects the benefit.",
          "translations": {
            "ko": "이미 적용되었습니다. 최종 금액은 혜택을 반영하고 있습니다.",
            "zh": "已经应用了。最后的金额已经反映了优惠。",
            "ja": "すでに適用済みです。最終金額には特典が反映されています。",
            "vi": "",
            "en": "Already applied. The final amount reflects the benefit."
          }
        },
        {
          "role": "user",
          "text": "Great. I’ll pay with my corporate card.",
          "translations": {
            "ko": "좋습니다. 제 회사 카드로 결제하겠습니다.",
            "zh": "很好。我将用我的公司卡付款。",
            "ja": "それなら良いです。私の法人カードで支払います。",
            "vi": "",
            "en": "Great. I’ll pay with my corporate card."
          }
        },
        {
          "role": "ai",
          "text": "Please insert the card when ready.",
          "translations": {
            "ko": "준비되면 카드를 넣어주세요.",
            "zh": "准备好时请插入卡片。",
            "ja": "カードを挿入してください。",
            "vi": "",
            "en": "Please insert the card when ready."
          }
        },
        {
          "role": "user",
          "text": "Done. Thank you for your help today.",
          "translations": {
            "ko": "완료했습니다. 오늘 도와주셔서 감사합니다.",
            "zh": "完成了。感谢你今天的帮助。",
            "ja": "済みました。今日はお手伝いいただきありがとうございました。",
            "vi": "",
            "en": "Done. Thank you for your help today."
          }
        }
      ]
    }
  ]
};
