import { LevelType, PracticeScene } from '../types';

export const templateDialogs: Record<LevelType, readonly PracticeScene[]> = {
  "beginner": [
    {
      "description": {
        "en": "Ordering at a casual restaurant",
        "ko": "캐주얼한 식당에서 주문하기",
        "zh": "在休闲餐厅点餐",
        "ja": "カジュアルなレストランでの注文",
        "vi": "Đặt món ở nhà hàng không chính thức"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Hi, welcome to Sunny Cafe! Can I start you off with something to drink?",
          "translations": {
            "ko": "안녕하세요, 선니 카페에 오신 것을 환영합니다! 먼저 음료로 시작하시겠어요?",
            "zh": "嗨，欢迎来到阳光咖啡馆！可以先来点饮料吗？",
            "ja": "こんにちは、サニーカフェへようこそ！まずは何かお飲み物はいかがですか？",
            "vi": "Chào mừng đến với Sunny Cafe! Tôi có thể bắt đầu bằng một thức uống cho bạn không?",
            "en": "Hi, welcome to Sunny Cafe! Can I start you off with something to drink?"
          }
        },
        {
          "role": "user",
          "text": "Sure, I’ll have an iced tea.",
          "translations": {
            "ko": "네, 아이스티 주세요.",
            "zh": "好的，我要一杯冰茶。",
            "ja": "はい、アイスティーをお願いします。",
            "vi": "Được, tôi sẽ gọi trà đá.",
            "en": "Sure, I’ll have an iced tea."
          }
        },
        {
          "role": "ai",
          "text": "Great! Are you ready to order or need a few more minutes?",
          "translations": {
            "ko": "좋습니다! 주문하실 준비가 되셨나요, 아니면 조금 더 시간이 필요하신가요?",
            "zh": "好的！你现在准备好点餐了吗，还是需要再等一会儿？",
            "ja": "了解です！ご注文はお決まりですか？それとももう少し時間が必要ですか？",
            "vi": "Tuyệt! Bạn đã sẵn sàng để đặt món chưa hay cần thêm vài phút?",
            "en": "Great! Are you ready to order or need a few more minutes?"
          }
        },
        {
          "role": "user",
          "text": "I’m ready. I’d like the chicken sandwich.",
          "translations": {
            "ko": "준비됐습니다. 치킨 샌드위치 주세요.",
            "zh": "我准备好了。我要鸡肉三明治。",
            "ja": "決まりました。チキンサンドをお願いします。",
            "vi": "Tôi đã sẵn sàng. Tôi muốn gọi sandwich gà.",
            "en": "I’m ready. I’d like the chicken sandwich."
          }
        },
        {
          "role": "ai",
          "text": "Would you like that with fries or a salad?",
          "translations": {
            "ko": "감자튀김이나 샐러드와 함께 드시겠어요?",
            "zh": "你想配薯条还是沙拉？",
            "ja": "フライドポテトかサラダ、どちらがいいですか？",
            "vi": "Bạn muốn kèm với khoai tây chiên hay salad?",
            "en": "Would you like that with fries or a salad?"
          }
        },
        {
          "role": "user",
          "text": "Fries, please.",
          "translations": {
            "ko": "감자튀김 주세요.",
            "zh": "薯条，谢谢。",
            "ja": "フライドポテトでお願いします。",
            "vi": "Khoai tây chiên, xin vui lòng.",
            "en": "Fries, please."
          }
        },
        {
          "role": "ai",
          "text": "Any toppings or extras?",
          "translations": {
            "ko": "추가 토핑이나 사이드 메뉴는 필요하신가요?",
            "zh": "需要加什么配料或者额外的东西吗？",
            "ja": "トッピングやエクストラはいかがですか？",
            "vi": "Có thêm gia vị hoặc phụ kiện gì không?",
            "en": "Any toppings or extras?"
          }
        },
        {
          "role": "user",
          "text": "Can I get it with no onions?",
          "translations": {
            "ko": "양파 빼고 주실 수 있나요?",
            "zh": "我可以要不加洋葱的吗？",
            "ja": "玉ねぎ抜きでお願いできますか？",
            "vi": "Tôi có thể yêu cầu không có hành không?",
            "en": "Can I get it with no onions?"
          }
        },
        {
          "role": "ai",
          "text": "Of course! Anything else today?",
          "translations": {
            "ko": "물론입니다! 오늘 다른 주문은 없으신가요?",
            "zh": "当然可以！还需要别的吗？",
            "ja": "もちろんです！他に何かありますか？",
            "vi": "Dĩ nhiên! Còn gì khác hôm nay không?",
            "en": "Of course! Anything else today?"
          }
        },
        {
          "role": "user",
          "text": "No, that’ll be all.",
          "translations": {
            "ko": "아니요, 그게 다입니다.",
            "zh": "不用了，就这些。",
            "ja": "いえ、それだけです。",
            "vi": "Không, đó là tất cả.",
            "en": "No, that’ll be all."
          }
        },
        {
          "role": "ai",
          "text": "Okay. One chicken sandwich with fries and no onions.",
          "translations": {
            "ko": "알겠습니다. 양파 빼고 치킨 샌드위치와 감자튀김 한 개.",
            "zh": "好的。一个不加洋葱的鸡肉三明治配薯条。",
            "ja": "了解しました。チキンサンドにフライドポテト、玉ねぎ抜きで。",
            "vi": "Được rồi. Một sandwich gà kèm khoai tây chiên và không có hành.",
            "en": "Okay. One chicken sandwich with fries and no onions."
          }
        },
        {
          "role": "user",
          "text": "Yes, that’s correct.",
          "translations": {
            "ko": "네, 맞습니다.",
            "zh": "是的，没错。",
            "ja": "はい、それで合っています。",
            "vi": "Đúng rồi.",
            "en": "Yes, that’s correct."
          }
        },
        {
          "role": "ai",
          "text": "It’ll be out in about 10 minutes.",
          "translations": {
            "ko": "약 10분 후에 나올 예정입니다.",
            "zh": "大约10分钟后就可以出餐了。",
            "ja": "約10分でお出しします。",
            "vi": "Món ăn sẽ được phục vụ trong khoảng 10 phút.",
            "en": "It’ll be out in about 10 minutes."
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
          "text": "Would you like ketchup or any sauce on the side?",
          "translations": {
            "ko": "케첩이나 다른 소스는 필요하신가요?",
            "zh": "你想要番茄酱或者其他酱料吗？",
            "ja": "ケチャップやソースはお付けしますか？",
            "vi": "Bạn có muốn kèm ketchup hay sốt nào không?",
            "en": "Would you like ketchup or any sauce on the side?"
          }
        },
        {
          "role": "user",
          "text": "Ketchup, please.",
          "translations": {
            "ko": "케첩 주세요.",
            "zh": "要番茄酱，谢谢。",
            "ja": "ケチャップをお願いします。",
            "vi": "Ketchup, xin vui lòng.",
            "en": "Ketchup, please."
          }
        },
        {
          "role": "ai",
          "text": "Great. I’ll bring it out shortly.",
          "translations": {
            "ko": "알겠습니다. 곧 가져다 드리겠습니다.",
            "zh": "好的，我马上给你拿来。",
            "ja": "了解しました。すぐにお持ちします。",
            "vi": "Tuyệt. Tôi sẽ mang ra ngay.",
            "en": "Great. I’ll bring it out shortly."
          }
        },
        {
          "role": "user",
          "text": "Thank you!",
          "translations": {
            "ko": "감사합니다!",
            "zh": "谢谢你！",
            "ja": "ありがとうございます！",
            "vi": "Cảm ơn!",
            "en": "Thank you!"
          }
        },
        {
          "role": "ai",
          "text": "Enjoy your meal!",
          "translations": {
            "ko": "맛있게 드세요!",
            "zh": "请享用！",
            "ja": "お食事をお楽しみください！",
            "vi": "Thưởng thức bữa ăn nhé!",
            "en": "Enjoy your meal!"
          }
        },
        {
          "role": "user",
          "text": "Thanks, I’m hungry!",
          "translations": {
            "ko": "감사합니다, 배가 고파요!",
            "zh": "谢谢，我饿了！",
            "ja": "ありがとう、お腹が空いています！",
            "vi": "Cảm ơn, tôi đang đói!",
            "en": "Thanks, I’m hungry!"
          }
        }
      ]
    },
    {
      "description": {
        "en": "Requesting the bill",
        "ko": "계산서 요청하기",
        "zh": "要账单",
        "ja": "お会計の依頼",
        "vi": "Yêu cầu hóa đơn"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Did you enjoy your meal?",
          "translations": {
            "ko": "식사는 어떠셨나요?",
            "zh": "你的饭菜吃得怎么样？",
            "ja": "お食事はいかがでしたか？",
            "vi": "Bạn có thích món ăn của mình không?",
            "en": "Did you enjoy your meal?"
          }
        },
        {
          "role": "user",
          "text": "Yes, everything was great.",
          "translations": {
            "ko": "네, 모든 것이 훌륭했습니다.",
            "zh": "是的，一切都很好。",
            "ja": "はい、とても美味しかったです。",
            "vi": "Có, mọi thứ đều tuyệt vời.",
            "en": "Yes, everything was great."
          }
        },
        {
          "role": "ai",
          "text": "I'm glad to hear that! Would you like dessert?",
          "translations": {
            "ko": "그렇게 말씀해 주셔서 기쁩니다! 디저트는 어떠신가요?",
            "zh": "很高兴听到这个！你想要甜点吗？",
            "ja": "それは嬉しいです！デザートはいかがですか？",
            "vi": "Tôi rất vui khi nghe điều đó! Bạn có muốn ăn món tráng miệng không?",
            "en": "I'm glad to hear that! Would you like dessert?"
          }
        },
        {
          "role": "user",
          "text": "No thanks, I’m full. Could I get the bill?",
          "translations": {
            "ko": "아니요, 감사합니다. 배가 불러요. 계산서 주시겠어요?",
            "zh": "不用了，谢谢，我已经很饱了。我可以要账单吗？",
            "ja": "いえ、お腹いっぱいです。お会計をお願いします。",
            "vi": "Không, cảm ơn, tôi đã no. Tôi có thể nhận hóa đơn được không?",
            "en": "No thanks, I’m full. Could I get the bill?"
          }
        },
        {
          "role": "ai",
          "text": "Of course. I’ll bring it right over.",
          "translations": {
            "ko": "물론입니다. 곧 가져다 드리겠습니다.",
            "zh": "当然可以。我马上给你拿过来。",
            "ja": "もちろんです。すぐにお持ちします。",
            "vi": "Dĩ nhiên. Tôi sẽ mang ngay đến.",
            "en": "Of course. I’ll bring it right over."
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
          "text": "Here’s your bill. Will you be paying by card or cash?",
          "translations": {
            "ko": "계산서입니다. 카드로 지불하시겠어요, 아니면 현금으로 하실 건가요?",
            "zh": "这是你的账单。你打算用卡付款还是现金？",
            "ja": "お会計です。カードか現金でお支払いになりますか？",
            "vi": "Đây là hóa đơn của bạn. Bạn sẽ thanh toán bằng thẻ hay tiền mặt?",
            "en": "Here’s your bill. Will you be paying by card or cash?"
          }
        },
        {
          "role": "user",
          "text": "Card, please.",
          "translations": {
            "ko": "카드로 할게요.",
            "zh": "用卡。",
            "ja": "カードでお願いします。",
            "vi": "Thẻ, xin vui lòng.",
            "en": "Card, please."
          }
        },
        {
          "role": "ai",
          "text": "Alright, you can insert your card when ready.",
          "translations": {
            "ko": "알겠습니다, 준비되시면 카드를 넣어주세요.",
            "zh": "好的，你可以准备好插卡了。",
            "ja": "了解しました。準備ができたらカードを挿入してください。",
            "vi": "Được rồi, bạn có thể chèn thẻ khi sẵn sàng.",
            "en": "Alright, you can insert your card when ready."
          }
        },
        {
          "role": "user",
          "text": "Okay, done.",
          "translations": {
            "ko": "네, 했습니다.",
            "zh": "好的，已经完成了。",
            "ja": "はい、終わりました。",
            "vi": "Được rồi, tôi đã xong.",
            "en": "Okay, done."
          }
        },
        {
          "role": "ai",
          "text": "Great. Would you like a printed receipt?",
          "translations": {
            "ko": "좋습니다. 영수증을 출력해 드릴까요?",
            "zh": "好的。你需要打印的收据吗？",
            "ja": "了解しました。レシートは印刷してお持ちしましょうか？",
            "vi": "Tuyệt. Bạn có muốn nhận hóa đơn in không?",
            "en": "Great. Would you like a printed receipt?"
          }
        },
        {
          "role": "user",
          "text": "Yes, please.",
          "translations": {
            "ko": "네, 부탁드립니다.",
            "zh": "需要，谢谢。",
            "ja": "はい、お願いします。",
            "vi": "Có, xin vui lòng.",
            "en": "Yes, please."
          }
        },
        {
          "role": "ai",
          "text": "Here you go.",
          "translations": {
            "ko": "여기 있습니다.",
            "zh": "给你。",
            "ja": "こちらです。",
            "vi": "Đây, xin vui lòng.",
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
          "text": "Was everything to your satisfaction today?",
          "translations": {
            "ko": "오늘 모든 것이 만족스러우셨나요?",
            "zh": "今天的一切都满意吗？",
            "ja": "今日のサービスはご満足いただけましたか？",
            "vi": "Mọi thứ hôm nay có đáp ứng được yêu cầu của bạn không?",
            "en": "Was everything to your satisfaction today?"
          }
        },
        {
          "role": "user",
          "text": "Yes, it was wonderful.",
          "translations": {
            "ko": "네, 정말 좋았습니다.",
            "zh": "是的，非常好。",
            "ja": "はい、とても素晴らしかったです。",
            "vi": "Có, rất tuyệt vời.",
            "en": "Yes, it was wonderful."
          }
        },
        {
          "role": "ai",
          "text": "We appreciate your visit. Have a great day!",
          "translations": {
            "ko": "방문해 주셔서 감사합니다. 좋은 하루 보내세요!",
            "zh": "感谢你的光临。祝你今天过得愉快！",
            "ja": "ご来店いただき、ありがとうございました。良い一日を！",
            "vi": "Chúng tôi rất cảm kích sự ghé thăm của bạn. Chúc bạn một ngày tốt lành!",
            "en": "We appreciate your visit. Have a great day!"
          }
        },
        {
          "role": "user",
          "text": "You too.",
          "translations": {
            "ko": "당신도요.",
            "zh": "你也是。",
            "ja": "あなたも。",
            "vi": "Cảm ơn, bạn cũng vậy.",
            "en": "You too."
          }
        },
        {
          "role": "ai",
          "text": "Hope to see you again!",
          "translations": {
            "ko": "다시 뵙길 바랍니다!",
            "zh": "希望能再次见到你！",
            "ja": "またお会いできるのを楽しみにしています！",
            "vi": "Hy vọng sẽ gặp lại bạn!",
            "en": "Hope to see you again!"
          }
        },
        {
          "role": "user",
          "text": "I’ll definitely be back.",
          "translations": {
            "ko": "꼭 다시 올게요.",
            "zh": "我肯定会再来的。",
            "ja": "必ずまた来ます。",
            "vi": "Tôi chắc chắn sẽ quay lại.",
            "en": "I’ll definitely be back."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Asking about vegetarian options",
        "ko": "채식 메뉴에 대해 묻기",
        "zh": "询问素食选项",
        "ja": "ベジタリアンメニューについて尋ねる",
        "vi": "Hỏi về các lựa chọn ăn chay"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Hello, welcome! Are you ready to order?",
          "translations": {
            "ko": "안녕하세요, 환영합니다! 주문하실 준비가 되셨나요?",
            "zh": "你好，欢迎！你准备好点餐了吗？",
            "ja": "こんにちは、ようこそ！ご注文はお決まりですか？",
            "vi": "Xin chào, chào mừng! Bạn đã sẵn sàng để đặt món chưa?",
            "en": "Hello, welcome! Are you ready to order?"
          }
        },
        {
          "role": "user",
          "text": "Hi, yes, but I wanted to ask—do you have vegetarian options?",
          "translations": {
            "ko": "안녕하세요, 네, 그런데요—채식 메뉴가 있나요?",
            "zh": "嗨，是的，但我想问一下——你们有素食选项吗？",
            "ja": "こんにちは、はい、ただ一つ質問があります。ベジタリアンメニューはありますか？",
            "vi": "Chào, có, nhưng tôi muốn hỏi - bạn có các lựa chọn ăn chay không?",
            "en": "Hi, yes, but I wanted to ask—do you have vegetarian options?"
          }
        },
        {
          "role": "ai",
          "text": "Absolutely! We have a vegetarian lasagna and a tofu stir-fry.",
          "translations": {
            "ko": "물론입니다! 채식 라자냐와 두부 볶음이 있습니다.",
            "zh": "当然有！我们有素食千层面和豆腐炒菜。",
            "ja": "もちろんです！ベジタリアンのラザニアと豆腐の炒め物があります。",
            "vi": "Chắc chắn! Chúng tôi có lasagna chay và món xào đậu hũ.",
            "en": "Absolutely! We have a vegetarian lasagna and a tofu stir-fry."
          }
        },
        {
          "role": "user",
          "text": "That sounds good. What’s in the tofu stir-fry?",
          "translations": {
            "ko": "그게 좋네요. 두부 볶음에는 뭐가 들어가나요?",
            "zh": "听起来不错。豆腐炒菜里有什么？",
            "ja": "それは良さそうです。豆腐の炒め物には何が入っていますか？",
            "vi": "Nghe có vẻ ngon. Món xào đậu hũ có gì?",
            "en": "That sounds good. What’s in the tofu stir-fry?"
          }
        },
        {
          "role": "ai",
          "text": "It includes tofu, bell peppers, broccoli, and a savory soy-based sauce.",
          "translations": {
            "ko": "두부, 파프리카, 브로콜리, 그리고 간장 베이스의 소스가 들어갑니다.",
            "zh": "里面有豆腐，彩椒，西兰花，和一种美味的基于酱油的酱汁。",
            "ja": "豆腐、ピーマン、ブロッコリー、そして旨味のある醤油ベースのソースが入っています。",
            "vi": "Nó bao gồm đậu hũ, ớt chuông, bông cải xanh và sốt dựa trên nước tương ngon.",
            "en": "It includes tofu, bell peppers, broccoli, and a savory soy-based sauce."
          }
        },
        {
          "role": "user",
          "text": "Nice. Is it spicy?",
          "translations": {
            "ko": "좋아요. 맵나요?",
            "zh": "很好。它辣吗？",
            "ja": "いいですね。辛いですか？",
            "vi": "Tốt. Nó có cay không?",
            "en": "Nice. Is it spicy?"
          }
        },
        {
          "role": "ai",
          "text": "It’s mildly spicy, but we can make it non-spicy upon request.",
          "translations": {
            "ko": "약간 매콤한데, 요청하시면 맵지 않게 만들어 드릴 수 있습니다.",
            "zh": "它微辣，但如果你要求，我们可以做成不辣的。",
            "ja": "少し辛いですが、リクエストに応じて辛くないようにすることもできます。",
            "vi": "Nó hơi cay, nhưng chúng tôi có thể làm không cay theo yêu cầu.",
            "en": "It’s mildly spicy, but we can make it non-spicy upon request."
          }
        },
        {
          "role": "user",
          "text": "Great, I’d like the tofu stir-fry, not spicy, please.",
          "translations": {
            "ko": "좋아요, 맵지 않게 두부 볶음 주세요.",
            "zh": "好的，我要豆腐炒菜，不要辣的，谢谢。",
            "ja": "それなら、豆腐の炒め物を辛くないものでお願いします。",
            "vi": "Tuyệt, tôi muốn gọi món xào đậu hũ, không cay, xin vui lòng.",
            "en": "Great, I’d like the tofu stir-fry, not spicy, please."
          }
        },
        {
          "role": "ai",
          "text": "Got it! Would you like any sides with that?",
          "translations": {
            "ko": "알겠습니다! 사이드 메뉴는 필요하신가요?",
            "zh": "明白了！你想要配什么小菜吗？",
            "ja": "了解しました！それにサイドメニューはいかがですか？",
            "vi": "Được rồi! Bạn có muốn kèm món phụ không?",
            "en": "Got it! Would you like any sides with that?"
          }
        },
        {
          "role": "user",
          "text": "Yes, a side salad would be great, thank you.",
          "translations": {
            "ko": "네, 사이드 샐러드 주세요, 감사합니다.",
            "zh": "是的，我想要一个小沙拉，谢谢。",
            "ja": "はい、サイドサラダをお願いします。",
            "vi": "Có, một món salad phụ sẽ tuyệt, cảm ơn.",
            "en": "Yes, a side salad would be great, thank you."
          }
        },
        {
          "role": "ai",
          "text": "We have a fresh garden salad. Would you like Italian or balsamic dressing?",
          "translations": {
            "ko": "신선한 가든 샐러드가 있습니다. 이탈리안 드레싱이나 발사믹 드레싱 중 어떤 걸로 하시겠어요?",
            "zh": "我们有新鲜的园艺沙拉。你想要意大利酱还是香醋酱？",
            "ja": "フレッシュなガーデンサラダがあります。ドレッシングはイタリアンかバルサミコがよろしいですか？",
            "vi": "Chúng tôi có một món salad vườn tươi. Bạn muốn dùng sốt Ý hay sốt balsamic?",
            "en": "We have a fresh garden salad. Would you like Italian or balsamic dressing?"
          }
        },
        {
          "role": "user",
          "text": "Balsamic, please.",
          "translations": {
            "ko": "발사믹으로 주세요.",
            "zh": "香醋酱，谢谢。",
            "ja": "バルサミコでお願いします。",
            "vi": "Sốt balsamic, xin vui lòng.",
            "en": "Balsamic, please."
          }
        },
        {
          "role": "ai",
          "text": "Perfect. I’ll place your order now.",
          "translations": {
            "ko": "좋습니다. 주문을 넣겠습니다.",
            "zh": "完美。我现在就去下单。",
            "ja": "了解しました。今すぐご注文をお出しします。",
            "vi": "Hoàn hảo. Tôi sẽ đặt món của bạn ngay bây giờ.",
            "en": "Perfect. I’ll place your order now."
          }
        },
        {
          "role": "user",
          "text": "Thank you very much.",
          "translations": {
            "ko": "정말 감사합니다.",
            "zh": "非常感谢。",
            "ja": "ありがとうございます。",
            "vi": "Cảm ơn rất nhiều.",
            "en": "Thank you very much."
          }
        },
        {
          "role": "ai",
          "text": "You’re welcome. Your meal will be ready shortly.",
          "translations": {
            "ko": "천만에요. 식사가 곧 나올 예정입니다.",
            "zh": "不客气。你的餐点马上就好。",
            "ja": "どういたしまして。お食事はすぐにご用意します。",
            "vi": "Rất vui được phục vụ. Bữa ăn của bạn sẽ sẵn sàng ngay lập tức.",
            "en": "You’re welcome. Your meal will be ready shortly."
          }
        },
        {
          "role": "user",
          "text": "Thanks. I’m looking forward to it.",
          "translations": {
            "ko": "감사합니다. 기대되네요.",
            "zh": "谢谢。我很期待。",
            "ja": "ありがとう。楽しみにしています。",
            "vi": "Cảm ơn. Tôi đang mong chờ nó.",
            "en": "Thanks. I’m looking forward to it."
          }
        },
        {
          "role": "ai",
          "text": "We hope you enjoy it!",
          "translations": {
            "ko": "맛있게 드시길 바랍니다!",
            "zh": "我们希望你会喜欢！",
            "ja": "お楽しみいただけることを願っています！",
            "vi": "Chúng tôi hy vọng bạn sẽ thích nó!",
            "en": "We hope you enjoy it!"
          }
        },
        {
          "role": "user",
          "text": "Do you also have any vegan desserts?",
          "translations": {
            "ko": "비건 디저트도 있나요?",
            "zh": "你们有没有纯素的甜点？",
            "ja": "ヴィーガンのデザートもありますか？",
            "vi": "Bạn có món tráng miệng chay nào không?",
            "en": "Do you also have any vegan desserts?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, we have a delicious coconut milk panna cotta.",
          "translations": {
            "ko": "네, 맛있는 코코넛 밀크 판나코타가 있습니다.",
            "zh": "有的，我们有美味的椰奶奶冻。",
            "ja": "はい、美味しいココナッツミルクのパンナコッタがあります。",
            "vi": "Có, chúng tôi có một món panna cotta sữa dừa ngon.",
            "en": "Yes, we have a delicious coconut milk panna cotta."
          }
        },
        {
          "role": "user",
          "text": "That sounds perfect. I’ll have one after my meal.",
          "translations": {
            "ko": "그게 좋겠네요. 식사 후에 하나 주세요.",
            "zh": "听起来很完美。我餐后会要一个。",
            "ja": "それは完璧です。食事の後にそれを頼みます。",
            "vi": "Nghe có vẻ hoàn hảo. Tôi sẽ gọi một sau bữa ăn của mình.",
            "en": "That sounds perfect. I’ll have one after my meal."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Ordering drinks and appetizers",
        "ko": "음료와 애피타이저 주문하기",
        "zh": "点饮料和开胃菜",
        "ja": "ドリンクと前菜の注文",
        "vi": "Đặt đồ uống và khai vị"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Can I start you off with something to drink?",
          "translations": {
            "ko": "먼저 음료로 시작하시겠어요?",
            "zh": "可以先给你来点饮料吗？",
            "ja": "まずは何かお飲み物はいかがですか？",
            "vi": "Tôi có thể bắt đầu bằng một thức uống cho bạn không?",
            "en": "Can I start you off with something to drink?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I’ll have a sparkling water.",
          "translations": {
            "ko": "네, 스파클링 워터 주세요.",
            "zh": "是的，我要一杯气泡水。",
            "ja": "はい、スパークリングウォーターをお願いします。",
            "vi": "Có, tôi sẽ gọi nước suối có ga.",
            "en": "Yes, I’ll have a sparkling water."
          }
        },
        {
          "role": "ai",
          "text": "Would you like lemon or lime with that?",
          "translations": {
            "ko": "레몬이나 라임을 넣어드릴까요?",
            "zh": "你想要加柠檬还是酸橙吗？",
            "ja": "レモンかライムを添えますか？",
            "vi": "Bạn có muốn thêm chanh hay chanh dây không?",
            "en": "Would you like lemon or lime with that?"
          }
        },
        {
          "role": "user",
          "text": "Lemon, please.",
          "translations": {
            "ko": "레몬 주세요.",
            "zh": "柠檬，谢谢。",
            "ja": "レモンでお願いします。",
            "vi": "Chanh, xin vui lòng.",
            "en": "Lemon, please."
          }
        },
        {
          "role": "ai",
          "text": "And would you like to order any appetizers?",
          "translations": {
            "ko": "애피타이저도 주문하시겠어요?",
            "zh": "你想要点什么开胃菜吗？",
            "ja": "前菜はご注文いただけますか？",
            "vi": "Và bạn có muốn đặt món khai vị nào không?",
            "en": "And would you like to order any appetizers?"
          }
        },
        {
          "role": "user",
          "text": "What do you recommend?",
          "translations": {
            "ko": "어떤 걸 추천하시나요?",
            "zh": "你有什么推荐的？",
            "ja": "何をおすすめしますか？",
            "vi": "Bạn khuyên tôi nên gọi món nào?",
            "en": "What do you recommend?"
          }
        },
        {
          "role": "ai",
          "text": "The garlic shrimp and the house salad are popular.",
          "translations": {
            "ko": "마늘 새우와 하우스 샐러드가 인기 있습니다.",
            "zh": "大蒜炒虾和家常沙拉都很受欢迎。",
            "ja": "ガーリックシュリンプとハウスサラダが人気です。",
            "vi": "Tôm tỏi và salad nhà là phổ biến.",
            "en": "The garlic shrimp and the house salad are popular."
          }
        },
        {
          "role": "user",
          "text": "I’ll try the garlic shrimp.",
          "translations": {
            "ko": "마늘 새우를 시도해 볼게요.",
            "zh": "我试试大蒜炒虾。",
            "ja": "ガーリックシュリンプを試してみます。",
            "vi": "Tôi sẽ thử tôm tỏi.",
            "en": "I’ll try the garlic shrimp."
          }
        },
        {
          "role": "ai",
          "text": "Good choice! That comes with a small side of bread.",
          "translations": {
            "ko": "좋은 선택입니다! 그것은 작은 빵이 함께 나옵니다.",
            "zh": "好选择！这个菜配有一小份面包。",
            "ja": "良い選択です！それには少しパンがついてきます。",
            "vi": "Lựa chọn tốt! Món đó đi kèm với một phần bánh mì nhỏ.",
            "en": "Good choice! That comes with a small side of bread."
          }
        },
        {
          "role": "user",
          "text": "Perfect.",
          "translations": {
            "ko": "완벽해요.",
            "zh": "完美。",
            "ja": "完璧です。",
            "vi": "Hoàn hảo.",
            "en": "Perfect."
          }
        },
        {
          "role": "ai",
          "text": "Anything else to start with?",
          "translations": {
            "ko": "시작으로 다른 것은 필요하신가요?",
            "zh": "还需要别的开胃菜吗？",
            "ja": "前菜はそれ以外に何かいりますか？",
            "vi": "Có gì khác để bắt đầu không?",
            "en": "Anything else to start with?"
          }
        },
        {
          "role": "user",
          "text": "No, I’m good for now.",
          "translations": {
            "ko": "아니요, 지금은 괜찮아요.",
            "zh": "不用了，我现在还好。",
            "ja": "いえ、今のところそれだけで大丈夫です。",
            "vi": "Không, tôi đã ổn.",
            "en": "No, I’m good for now."
          }
        },
        {
          "role": "ai",
          "text": "Alright. I’ll get those started.",
          "translations": {
            "ko": "알겠습니다. 준비하겠습니다.",
            "zh": "好的。我马上去准备。",
            "ja": "了解しました。すぐに準備します。",
            "vi": "Được rồi. Tôi sẽ bắt đầu chuẩn bị.",
            "en": "Alright. I’ll get those started."
          }
        },
        {
          "role": "user",
          "text": "Thank you.",
          "translations": {
            "ko": "감사합니다.",
            "zh": "谢谢。",
            "ja": "ありがとう。",
            "vi": "Cảm ơn.",
            "en": "Thank you."
          }
        },
        {
          "role": "ai",
          "text": "While you wait, would you like to look at the specials?",
          "translations": {
            "ko": "기다리는 동안 특별 메뉴를 보시겠어요?",
            "zh": "在等待的时候，你想看看我们的特色菜单吗？",
            "ja": "お待ちいただいている間、特別メニューをご覧になりますか？",
            "vi": "Trong khi bạn đợi, bạn có muốn xem các món đặc biệt không?",
            "en": "While you wait, would you like to look at the specials?"
          }
        },
        {
          "role": "user",
          "text": "Sure, why not.",
          "translations": {
            "ko": "그럼요, 왜 아니겠어요.",
            "zh": "好的，为什么不呢。",
            "ja": "ええ、どうぞ。",
            "vi": "Chắc chắn, tại sao không.",
            "en": "Sure, why not."
          }
        },
        {
          "role": "ai",
          "text": "Here you go. Let me know if you have questions.",
          "translations": {
            "ko": "여기 있습니다. 질문 있으시면 알려주세요.",
            "zh": "给你。如果有问题，随时告诉我。",
            "ja": "こちらです。何か質問があればお知らせください。",
            "vi": "Đây, xin vui lòng. Hãy cho tôi biết nếu bạn có câu hỏi.",
            "en": "Here you go. Let me know if you have questions."
          }
        },
        {
          "role": "user",
          "text": "Will do, thanks.",
          "translations": {
            "ko": "알겠습니다, 감사합니다.",
            "zh": "好的，谢谢。",
            "ja": "了解しました、ありがとう。",
            "vi": "Tôi sẽ làm như vậy, cảm ơn.",
            "en": "Will do, thanks."
          }
        },
        {
          "role": "ai",
          "text": "Your shrimp will be ready in a few minutes.",
          "translations": {
            "ko": "새우는 몇 분 후에 나올 예정입니다.",
            "zh": "你的虾马上就好了。",
            "ja": "あなたのシュリンプは数分で出来上がります。",
            "vi": "Món tôm của bạn sẽ sẵn sàng trong vài phút.",
            "en": "Your shrimp will be ready in a few minutes."
          }
        },
        {
          "role": "user",
          "text": "Looking forward to it!",
          "translations": {
            "ko": "기대되네요!",
            "zh": "我很期待！",
            "ja": "楽しみにしています！",
            "vi": "Tôi đang mong chờ nó!",
            "en": "Looking forward to it!"
          }
        }
      ]
    },
    {
      "description": {
        "en": "Making a special request for allergies",
        "ko": "알레르기에 대한 특별 요청하기",
        "zh": "因过敏而提出特殊要求",
        "ja": "アレルギーに対する特別なリクエスト",
        "vi": "Yêu cầu đặc biệt vì dị ứng"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Do you have any dietary restrictions we should know about?",
          "translations": {
            "ko": "알려주셔야 할 식이 제한이 있나요?",
            "zh": "你有没有任何饮食限制我们应该知道的？",
            "ja": "食事制限は何かありますか？",
            "vi": "Bạn có bất kỳ hạn chế ăn uống nào chúng tôi nên biết không?",
            "en": "Do you have any dietary restrictions we should know about?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I’m allergic to peanuts.",
          "translations": {
            "ko": "네, 저는 땅콩에 알레르기가 있습니다.",
            "zh": "是的，我对花生过敏。",
            "ja": "はい、ピーナッツアレルギーがあります。",
            "vi": "Có, tôi dị ứng với đậu phộng.",
            "en": "Yes, I’m allergic to peanuts."
          }
        },
        {
          "role": "ai",
          "text": "Thanks for letting us know. I’ll make a note for the kitchen.",
          "translations": {
            "ko": "알려주셔서 감사합니다. 주방에 알려놓겠습니다.",
            "zh": "谢谢你告诉我们。我会告诉厨房的。",
            "ja": "お知らせいただきありがとうございます。キッチンに伝えておきます。",
            "vi": "Cảm ơn bạn đã cho chúng tôi biết. Tôi sẽ ghi chú cho bếp.",
            "en": "Thanks for letting us know. I’ll make a note for the kitchen."
          }
        },
        {
          "role": "user",
          "text": "Great, I appreciate it.",
          "translations": {
            "ko": "좋아요, 감사합니다.",
            "zh": "好的，我很感激。",
            "ja": "ありがとう、助かります。",
            "vi": "Tuyệt, tôi rất cảm kích.",
            "en": "Great, I appreciate it."
          }
        },
        {
          "role": "ai",
          "text": "Would you like to know which dishes are peanut-free?",
          "translations": {
            "ko": "땅콩이 들어가지 않은 요리를 알려드릴까요?",
            "zh": "你想知道哪些菜是不含花生的吗？",
            "ja": "ピーナッツフリーの料理を知りたいですか？",
            "vi": "Bạn có muốn biết những món ăn nào không có đậu phộng không?",
            "en": "Would you like to know which dishes are peanut-free?"
          }
        },
        {
          "role": "user",
          "text": "Yes, that would be helpful.",
          "translations": {
            "ko": "네, 그게 도움이 될 것 같습니다.",
            "zh": "是的，那会很有帮助。",
            "ja": "はい、それが助かります。",
            "vi": "Có, điều đó sẽ rất hữu ích.",
            "en": "Yes, that would be helpful."
          }
        },
        {
          "role": "ai",
          "text": "Our grilled salmon, veggie burger, and pasta primavera are all safe.",
          "translations": {
            "ko": "우리의 구운 연어, 채식 버거, 파스타 프리마베라는 모두 안전합니다.",
            "zh": "我们的烤三文鱼，素食汉堡，和意大利面都是安全的。",
            "ja": "私たちのグリルサーモン、ベジーバーガー、パスタプリマベラは全て安全です。",
            "vi": "Cá hồi nướng, bánh mì burger chay và pasta primavera của chúng tôi đều an toàn.",
            "en": "Our grilled salmon, veggie burger, and pasta primavera are all safe."
          }
        },
        {
          "role": "user",
          "text": "I’ll go with the veggie burger.",
          "translations": {
            "ko": "채식 버거로 할게요.",
            "zh": "我要素食汉堡。",
            "ja": "ベジーバーガーにします。",
            "vi": "Tôi sẽ chọn bánh mì burger chay.",
            "en": "I’ll go with the veggie burger."
          }
        },
        {
          "role": "ai",
          "text": "Would you like fries or salad with that?",
          "translations": {
            "ko": "감자튀김이나 샐러드와 함께 드시겠어요?",
            "zh": "你想要配薯条还是沙拉？",
            "ja": "フライドポテトかサラダ、どちらがいいですか？",
            "vi": "Bạn muốn kèm với khoai tây chiên hay salad?",
            "en": "Would you like fries or salad with that?"
          }
        },
        {
          "role": "user",
          "text": "Salad, please.",
          "translations": {
            "ko": "샐러드로 주세요.",
            "zh": "沙拉，谢谢。",
            "ja": "サラダでお願いします。",
            "vi": "Salad, xin vui lòng.",
            "en": "Salad, please."
          }
        },
        {
          "role": "ai",
          "text": "Noted. No peanuts and salad on the side.",
          "translations": {
            "ko": "알겠습니다. 땅콩 없이, 샐러드를 옆에 두겠습니다.",
            "zh": "明白了。不加花生，配沙拉。",
            "ja": "了解しました。ピーナッツなし、サラダ付きで。",
            "vi": "Ghi nhớ. Không có đậu phộng và salad đi kèm.",
            "en": "Noted. No peanuts and salad on the side."
          }
        },
        {
          "role": "user",
          "text": "Correct.",
          "translations": {
            "ko": "맞습니다.",
            "zh": "没错。",
            "ja": "そうです。",
            "vi": "Đúng rồi.",
            "en": "Correct."
          }
        },
        {
          "role": "ai",
          "text": "Would you like to see the dessert options too?",
          "translations": {
            "ko": "디저트 메뉴도 보시겠어요?",
            "zh": "你想看看甜点选项吗？",
            "ja": "デザートのメニューも見ていただきたいですか？",
            "vi": "Bạn có muốn xem các lựa chọn tráng miệng không?",
            "en": "Would you like to see the dessert options too?"
          }
        },
        {
          "role": "user",
          "text": "Do you have any nut-free desserts?",
          "translations": {
            "ko": "견과류가 들어가지 않은 디저트가 있나요?",
            "zh": "你们有没有不含坚果的甜点？",
            "ja": "ナッツフリーのデザートはありますか？",
            "vi": "Bạn có món tráng miệng không có hạt không?",
            "en": "Do you have any nut-free desserts?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, the fruit sorbet and crème brûlée are nut-free.",
          "translations": {
            "ko": "네, 과일 소르베와 크렘 브륄레는 견과류가 들어가지 않습니다.",
            "zh": "有的，水果冰糕和焦糖布丁都不含坚果。",
            "ja": "はい、フルーツのソルベとクレームブリュレはナッツフリーです。",
            "vi": "Có, kem hoa quả và crème brûlée đều không có hạt.",
            "en": "Yes, the fruit sorbet and crème brûlée are nut-free."
          }
        },
        {
          "role": "user",
          "text": "I’ll take the fruit sorbet.",
          "translations": {
            "ko": "과일 소르베로 할게요.",
            "zh": "我要水果冰糕。",
            "ja": "フルーツのソルベをお願いします。",
            "vi": "Tôi sẽ chọn kem hoa quả.",
            "en": "I’ll take the fruit sorbet."
          }
        },
        {
          "role": "ai",
          "text": "Perfect. I’ll put that in as well.",
          "translations": {
            "ko": "좋습니다. 그것도 주문에 넣겠습니다.",
            "zh": "完美。我也会把这个加进去。",
            "ja": "了解しました。それも注文に入れておきます。",
            "vi": "Hoàn hảo. Tôi sẽ ghi lại điều đó.",
            "en": "Perfect. I’ll put that in as well."
          }
        },
        {
          "role": "user",
          "text": "Thanks again for being careful.",
          "translations": {
            "ko": "신경 써 주셔서 감사합니다.",
            "zh": "谢谢你们的小心翼翼。",
            "ja": "注意してくれてありがとう。",
            "vi": "Cảm ơn bạn đã quan tâm.",
            "en": "Thanks again for being careful."
          }
        },
        {
          "role": "ai",
          "text": "Of course. We always prioritize safety first.",
          "translations": {
            "ko": "물론입니다. 우리는 항상 안전을 우선시합니다.",
            "zh": "当然。我们总是把安全放在第一位。",
            "ja": "もちろんです。私たちは常に安全を最優先します。",
            "vi": "Dĩ nhiên. Chúng tôi luôn ưu tiên an toàn hàng đầu.",
            "en": "Of course. We always prioritize safety first."
          }
        },
        {
          "role": "user",
          "text": "That’s really reassuring.",
          "translations": {
            "ko": "그게 정말로 안심이 되네요.",
            "zh": "这真的很让人放心。",
            "ja": "それはとても安心します。",
            "vi": "Điều đó thật yên tâm.",
            "en": "That’s really reassuring."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Asking for a wine recommendation",
        "ko": "와인 추천 요청하기",
        "zh": "询问葡萄酒推荐",
        "ja": "ワインの推奨を求める",
        "vi": "Yêu cầu gợi ý về rượu vang"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Would you like to see our wine list?",
          "translations": {
            "ko": "와인 리스트를 보시겠어요?",
            "zh": "你想看看我们的葡萄酒菜单吗？",
            "ja": "ワインリストをご覧になりますか？",
            "vi": "Bạn có muốn xem danh sách rượu vang của chúng tôi không?",
            "en": "Would you like to see our wine list?"
          }
        },
        {
          "role": "user",
          "text": "Yes, please.",
          "translations": {
            "ko": "네, 부탁드립니다.",
            "zh": "是的，谢谢。",
            "ja": "はい、お願いします。",
            "vi": "Có, xin vui lòng.",
            "en": "Yes, please."
          }
        },
        {
          "role": "ai",
          "text": "Are you having something light or heavy for dinner?",
          "translations": {
            "ko": "저녁에 가벼운 것을 드시나요, 아니면 무거운 것을 드시나요?",
            "zh": "你晚餐打算吃轻的还是重的？",
            "ja": "ディナーは軽いものか重いものを召し上がりますか？",
            "vi": "Bạn định ăn món nhẹ hay nặng cho bữa tối?",
            "en": "Are you having something light or heavy for dinner?"
          }
        },
        {
          "role": "user",
          "text": "I’m having the grilled salmon.",
          "translations": {
            "ko": "구운 연어를 먹을 거예요.",
            "zh": "我要烤三文鱼。",
            "ja": "グリルサーモンを頼むつもりです。",
            "vi": "Tôi định ăn cá hồi nướng.",
            "en": "I’m having the grilled salmon."
          }
        },
        {
          "role": "ai",
          "text": "In that case, I’d recommend a crisp white wine like Sauvignon Blanc.",
          "translations": {
            "ko": "그럼 산뜻한 화이트 와인인 소비뇽 블랑을 추천드립니다.",
            "zh": "那么，我推荐你喝一杯清爽的白葡萄酒，比如长相思。",
            "ja": "それなら、サヴィニヨン・ブランのような爽やかな白ワインをおすすめします。",
            "vi": "Trong trường hợp đó, tôi khuyên bạn nên chọn một loại rượu vang trắng như Sauvignon Blanc.",
            "en": "In that case, I’d recommend a crisp white wine like Sauvignon Blanc."
          }
        },
        {
          "role": "user",
          "text": "Sounds good. I’ll try a glass.",
          "translations": {
            "ko": "좋아요. 한 잔 해볼게요.",
            "zh": "听起来不错。我试试一杯。",
            "ja": "いいですね。一杯試してみます。",
            "vi": "Nghe có vẻ tốt. Tôi sẽ thử một ly.",
            "en": "Sounds good. I’ll try a glass."
          }
        },
        {
          "role": "ai",
          "text": "Would you like to try it before committing?",
          "translations": {
            "ko": "결정하기 전에 한 번 맛보시겠어요?",
            "zh": "你想先试试再决定吗？",
            "ja": "コミットする前に試してみたいですか？",
            "vi": "Bạn có muốn thử nó trước khi quyết định không?",
            "en": "Would you like to try it before committing?"
          }
        },
        {
          "role": "user",
          "text": "Sure, that’d be great.",
          "translations": {
            "ko": "그럼요, 좋겠네요.",
            "zh": "好的，那太好了。",
            "ja": "はい、それがいいですね。",
            "vi": "Chắc chắn, điều đó sẽ tuyệt.",
            "en": "Sure, that’d be great."
          }
        },
        {
          "role": "ai",
          "text": "Here’s a small sample. Let me know what you think.",
          "translations": {
            "ko": "작은 샘플입니다. 어떤지 말씀해 주세요.",
            "zh": "这是一小份试饮。告诉我你觉得怎么样。",
            "ja": "少量のサンプルです。どう思うか教えてください。",
            "vi": "Đây là một mẫu nhỏ. Hãy cho tôi biết ý kiến của bạn.",
            "en": "Here’s a small sample. Let me know what you think."
          }
        },
        {
          "role": "user",
          "text": "Hmm, that’s nice. I’ll have a glass.",
          "translations": {
            "ko": "음, 좋네요. 한 잔 주세요.",
            "zh": "嗯，很好。我要一杯。",
            "ja": "うーん、これはいいですね。一杯頼みます。",
            "vi": "Hmm, thật tốt. Tôi sẽ gọi một ly.",
            "en": "Hmm, that’s nice. I’ll have a glass."
          }
        },
        {
          "role": "ai",
          "text": "Excellent choice. I’ll be right back with it.",
          "translations": {
            "ko": "훌륭한 선택입니다. 곧 가져다 드리겠습니다.",
            "zh": "优秀的选择。我马上给你拿来。",
            "ja": "素晴らしい選択です。すぐに持ってきます。",
            "vi": "Lựa chọn tuyệt vời. Tôi sẽ mang nó đến ngay.",
            "en": "Excellent choice. I’ll be right back with it."
          }
        },
        {
          "role": "user",
          "text": "Thank you.",
          "translations": {
            "ko": "감사합니다.",
            "zh": "谢谢。",
            "ja": "ありがとう。",
            "vi": "Cảm ơn.",
            "en": "Thank you."
          }
        },
        {
          "role": "ai",
          "text": "Would you like water with your wine?",
          "translations": {
            "ko": "와인과 함께 물은 어떠신가요?",
            "zh": "你想要一杯水配葡萄酒吗？",
            "ja": "ワインと一緒に水はいかがですか？",
            "vi": "Bạn có muốn kèm nước với rượu vang không?",
            "en": "Would you like water with your wine?"
          }
        },
        {
          "role": "user",
          "text": "Yes, just still water.",
          "translations": {
            "ko": "네, 무탄산 물로 주세요.",
            "zh": "是的，就来矿泉水。",
            "ja": "はい、ただの水でいいです。",
            "vi": "Có, chỉ cần nước không ga.",
            "en": "Yes, just still water."
          }
        },
        {
          "role": "ai",
          "text": "Noted. One glass of Sauvignon Blanc and still water.",
          "translations": {
            "ko": "알겠습니다. 소비뇽 블랑 한 잔과 무탄산 물.",
            "zh": "明白了。一杯长相思和一杯矿泉水。",
            "ja": "了解しました。サヴィニヨン・ブラン一杯と水を。",
            "vi": "Ghi nhớ. Một ly rượu vang Sauvignon Blanc và nước không ga.",
            "en": "Noted. One glass of Sauvignon Blanc and still water."
          }
        },
        {
          "role": "user",
          "text": "Perfect.",
          "translations": {
            "ko": "완벽해요.",
            "zh": "完美。",
            "ja": "完璧です。",
            "vi": "Hoàn hảo.",
            "en": "Perfect."
          }
        },
        {
          "role": "ai",
          "text": "If you need help with pairings, just ask.",
          "translations": {
            "ko": "음식과의 매칭에 대해 도움이 필요하시면 언제든지 말씀해 주세요.",
            "zh": "如果你需要配餐建议，随时告诉我。",
            "ja": "ペアリングについてのアドバイスが必要なら、何でも聞いてください。",
            "vi": "Nếu bạn cần giúp đỡ với việc kết hợp, hãy hỏi.",
            "en": "If you need help with pairings, just ask."
          }
        },
        {
          "role": "user",
          "text": "Thanks, I appreciate that.",
          "translations": {
            "ko": "감사합니다, 그렇게 하겠습니다.",
            "zh": "谢谢，我很感激。",
            "ja": "ありがとう、それは助かります。",
            "vi": "Cảm ơn, tôi rất cảm kích.",
            "en": "Thanks, I appreciate that."
          }
        },
        {
          "role": "ai",
          "text": "Enjoy your drink!",
          "translations": {
            "ko": "음료를 즐기세요!",
            "zh": "享受你的饮料！",
            "ja": "ドリンクをお楽しみください！",
            "vi": "Thưởng thức thức uống của bạn!",
            "en": "Enjoy your drink!"
          }
        },
        {
          "role": "user",
          "text": "Cheers!",
          "translations": {
            "ko": "건배!",
            "zh": "干杯！",
            "ja": "乾杯！",
            "vi": "Dô!",
            "en": "Cheers!"
          }
        }
      ]
    },
    {
      "description": {
        "en": "Requesting a table change",
        "ko": "테이블 변경 요청하기",
        "zh": "请求换桌",
        "ja": "席の変更の依頼",
        "vi": "Yêu cầu thay đổi bàn"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Welcome! Table for two?",
          "translations": {
            "ko": "환영합니다! 두 분이신가요?",
            "zh": "欢迎！两位吗？",
            "ja": "ようこそ！2名様ですか？",
            "vi": "Chào mừng! Bàn cho hai người?",
            "en": "Welcome! Table for two?"
          }
        },
        {
          "role": "user",
          "text": "Yes, please.",
          "translations": {
            "ko": "네, 부탁드립니다.",
            "zh": "是的，谢谢。",
            "ja": "はい、お願いします。",
            "vi": "Có, xin vui lòng.",
            "en": "Yes, please."
          }
        },
        {
          "role": "ai",
          "text": "Right this way.",
          "translations": {
            "ko": "이쪽으로 오세요.",
            "zh": "这边请。",
            "ja": "こちらへどうぞ。",
            "vi": "Theo tôi này.",
            "en": "Right this way."
          }
        },
        {
          "role": "user",
          "text": "Actually, could we sit by the window instead?",
          "translations": {
            "ko": "사실, 창가에 앉을 수 있을까요?",
            "zh": "实际上，我们可以坐在窗边吗？",
            "ja": "実は、窓際の席に変更できますか？",
            "vi": "Thực ra, chúng tôi có thể ngồi bên cửa sổ được không?",
            "en": "Actually, could we sit by the window instead?"
          }
        },
        {
          "role": "ai",
          "text": "Of course! Let me check if that’s available.",
          "translations": {
            "ko": "물론입니다! 가능한지 확인해 보겠습니다.",
            "zh": "当然可以！让我看看有没有空位。",
            "ja": "もちろんです！空いているか確認します。",
            "vi": "Dĩ nhiên! Để tôi kiểm tra xem nó có sẵn không.",
            "en": "Of course! Let me check if that’s available."
          }
        },
        {
          "role": "user",
          "text": "Thank you.",
          "translations": {
            "ko": "감사합니다.",
            "zh": "谢谢。",
            "ja": "ありがとう。",
            "vi": "Cảm ơn.",
            "en": "Thank you."
          }
        },
        {
          "role": "ai",
          "text": "You’re in luck, we have one just opening up.",
          "translations": {
            "ko": "운이 좋으시네요, 방금 비어났습니다.",
            "zh": "你们运气真好，刚好有一个空位。",
            "ja": "運が良いですね、ちょうど空きが出ました。",
            "vi": "Bạn may mắn, chúng tôi vừa có một bàn trống.",
            "en": "You’re in luck, we have one just opening up."
          }
        },
        {
          "role": "user",
          "text": "Great!",
          "translations": {
            "ko": "좋아요!",
            "zh": "太好了！",
            "ja": "それは良かった！",
            "vi": "Tuyệt!",
            "en": "Great!"
          }
        },
        {
          "role": "ai",
          "text": "Follow me, I’ll get it ready for you.",
          "translations": {
            "ko": "따라오세요, 준비해 드리겠습니다.",
            "zh": "跟我来，我给你们准备一下。",
            "ja": "こちらへどうぞ、すぐに準備します。",
            "vi": "Theo tôi, tôi sẽ chuẩn bị cho bạn.",
            "en": "Follow me, I’ll get it ready for you."
          }
        },
        {
          "role": "user",
          "text": "Appreciate it.",
          "translations": {
            "ko": "감사합니다.",
            "zh": "感谢。",
            "ja": "助かります。",
            "vi": "Rất cảm kích.",
            "en": "Appreciate it."
          }
        },
        {
          "role": "ai",
          "text": "Would this one work?",
          "translations": {
            "ko": "이 테이블은 어떠신가요?",
            "zh": "这个位置可以吗？",
            "ja": "こちらが席ですが、いかがでしょうか？",
            "vi": "Bàn này có ổn không?",
            "en": "Would this one work?"
          }
        },
        {
          "role": "user",
          "text": "Yes, it’s perfect.",
          "translations": {
            "ko": "네, 완벽합니다.",
            "zh": "是的，很完美。",
            "ja": "はい、これで完璧です。",
            "vi": "Có, nó hoàn hảo.",
            "en": "Yes, it’s perfect."
          }
        },
        {
          "role": "ai",
          "text": "Here are your menus. Let me know when you’re ready.",
          "translations": {
            "ko": "메뉴판입니다. 준비되시면 알려주세요.",
            "zh": "这是你们的菜单。准备好了告诉我。",
            "ja": "メニューです。ご注文がお決まりになったらお知らせください。",
            "vi": "Đây là thực đơn của bạn. Hãy cho tôi biết khi bạn đã sẵn sàng.",
            "en": "Here are your menus. Let me know when you’re ready."
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
          "text": "Would you like any drinks to start?",
          "translations": {
            "ko": "시작으로 음료는 어떠신가요?",
            "zh": "你们想先来点饮料吗？",
            "ja": "最初に何かお飲み物はいかがですか？",
            "vi": "Bạn có muốn gọi đồ uống để bắt đầu không?",
            "en": "Would you like any drinks to start?"
          }
        },
        {
          "role": "user",
          "text": "Just water for now.",
          "translations": {
            "ko": "지금은 물만 주세요.",
            "zh": "现在就来水。",
            "ja": "とりあえず水でお願いします。",
            "vi": "Chỉ cần nước lọc thôi.",
            "en": "Just water for now."
          }
        },
        {
          "role": "ai",
          "text": "Alright. I’ll be back shortly.",
          "translations": {
            "ko": "알겠습니다. 곧 돌아오겠습니다.",
            "zh": "好的。我马上回来。",
            "ja": "了解しました。すぐに戻ります。",
            "vi": "Được rồi. Tôi sẽ quay lại ngay.",
            "en": "Alright. I’ll be back shortly."
          }
        },
        {
          "role": "user",
          "text": "Thanks again for accommodating.",
          "translations": {
            "ko": "다시 한 번 배려해 주셔서 감사합니다.",
            "zh": "再次感谢你们的配合。",
            "ja": "席を変えていただき、ありがとうございます。",
            "vi": "Cảm ơn bạn đã điều chỉnh.",
            "en": "Thanks again for accommodating."
          }
        },
        {
          "role": "ai",
          "text": "It’s our pleasure. Enjoy your time here!",
          "translations": {
            "ko": "저희의 기쁨입니다. 여기서 즐거운 시간 보내세요!",
            "zh": "我们很乐意。在这里享受你们的时光！",
            "ja": "どういたしまして。ここでの時間をお楽しみください！",
            "vi": "Đó là niềm vui của chúng tôi. Hãy tận hưởng thời gian ở đây!",
            "en": "It’s our pleasure. Enjoy your time here!"
          }
        },
        {
          "role": "user",
          "text": "We will, thank you.",
          "translations": {
            "ko": "그럴게요, 감사합니다.",
            "zh": "我们会的，谢谢。",
            "ja": "そうします、ありがとう。",
            "vi": "Chúng tôi sẽ, cảm ơn.",
            "en": "We will, thank you."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Handling a wrong order politely",
        "ko": "잘못된 주문을 예의 바르게 처리하기",
        "zh": "礼貌地处理错误的订单",
        "ja": "間違った注文を丁寧に対応する",
        "vi": "Xử lý một đơn hàng sai một cách lịch sự"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Here’s your pasta with meatballs.",
          "translations": {
            "ko": "여기 파스타와 미트볼이 있습니다.",
            "zh": "这是你的肉丸意大利面。",
            "ja": "こちらがミートボールのパスタです。",
            "vi": "Đây là mì của bạn với viên thịt viên.",
            "en": "Here’s your pasta with meatballs."
          }
        },
        {
          "role": "user",
          "text": "Oh, I actually ordered the vegetarian pasta.",
          "translations": {
            "ko": "아, 저는 채식 파스타를 주문했습니다.",
            "zh": "哦，我其实点的是素食意大利面。",
            "ja": "あ、実はベジタリアンのパスタを注文したんです。",
            "vi": "Ồ, tôi thực sự đã đặt mì chay.",
            "en": "Oh, I actually ordered the vegetarian pasta."
          }
        },
        {
          "role": "ai",
          "text": "I apologize for the mix-up. Let me fix that right away.",
          "translations": {
            "ko": "혼란을 드려 죄송합니다. 바로 고치겠습니다.",
            "zh": "对不起，搞错了。我马上去改正。",
            "ja": "申し訳ありません、間違えました。すぐに修正します。",
            "vi": "Tôi xin lỗi vì sự nhầm lẫn. Hãy để tôi sửa ngay.",
            "en": "I apologize for the mix-up. Let me fix that right away."
          }
        },
        {
          "role": "user",
          "text": "Thank you.",
          "translations": {
            "ko": "감사합니다.",
            "zh": "谢谢。",
            "ja": "ありがとう。",
            "vi": "Cảm ơn.",
            "en": "Thank you."
          }
        },
        {
          "role": "ai",
          "text": "Would you like to keep this while we prepare the correct one?",
          "translations": {
            "ko": "올바른 요리를 준비하는 동안 이것을 가지고 계실래요?",
            "zh": "在我们准备正确的菜肴时，你想要保留这个吗？",
            "ja": "正しいものを準備する間、これをお持ちになりますか？",
            "vi": "Bạn có muốn giữ món này trong khi chúng tôi chuẩn bị món đúng không?",
            "en": "Would you like to keep this while we prepare the correct one?"
          }
        },
        {
          "role": "user",
          "text": "No, that’s okay. I can wait.",
          "translations": {
            "ko": "아니요, 괜찮아요. 기다릴게요.",
            "zh": "不用了，我可以等。",
            "ja": "いえ、大丈夫です。待ちます。",
            "vi": "Không, không sao. Tôi có thể đợi.",
            "en": "No, that’s okay. I can wait."
          }
        },
        {
          "role": "ai",
          "text": "Understood. I’ll make sure it’s rushed.",
          "translations": {
            "ko": "알겠습니다. 서둘러 준비하겠습니다.",
            "zh": "明白了。我会确保尽快做好。",
            "ja": "了解しました。急いで準備します。",
            "vi": "Hiểu rồi. Tôi sẽ đảm bảo nó được nhanh chóng.",
            "en": "Understood. I’ll make sure it’s rushed."
          }
        },
        {
          "role": "user",
          "text": "Thanks, I appreciate it.",
          "translations": {
            "ko": "감사합니다, 고맙습니다.",
            "zh": "谢谢，我很感激。",
            "ja": "ありがとう、助かります。",
            "vi": "Cảm ơn, tôi rất cảm kích.",
            "en": "Thanks, I appreciate it."
          }
        },
        {
          "role": "ai",
          "text": "Your new dish will be ready in about 7 minutes.",
          "translations": {
            "ko": "새로운 요리는 약 7분 후에 나올 예정입니다.",
            "zh": "你的新菜品大约7分钟后就好了。",
            "ja": "新しい料理は約7分で出来上がります。",
            "vi": "Món mới của bạn sẽ sẵn sàng trong khoảng 7 phút.",
            "en": "Your new dish will be ready in about 7 minutes."
          }
        },
        {
          "role": "user",
          "text": "That’s fine.",
          "translations": {
            "ko": "괜찮아요.",
            "zh": "没问题。",
            "ja": "それで大丈夫です。",
            "vi": "Được rồi.",
            "en": "That’s fine."
          }
        },
        {
          "role": "ai",
          "text": "We’ll also bring you a complimentary drink for the wait.",
          "translations": {
            "ko": "기다리는 동안 무료 음료를 드리겠습니다.",
            "zh": "我们还会为你提供一杯免费的饮料，以弥补你的等待时间。",
            "ja": "お待たせする間、無料のドリンクをお出しします。",
            "vi": "Chúng tôi cũng sẽ mang đến cho bạn một thức uống miễn phí trong thời gian chờ đợi.",
            "en": "We’ll also bring you a complimentary drink for the wait."
          }
        },
        {
          "role": "user",
          "text": "That’s very kind.",
          "translations": {
            "ko": "친절하시네요.",
            "zh": "那太好了。",
            "ja": "それは親切ですね。",
            "vi": "Đó là rất tốt bụng.",
            "en": "That’s very kind."
          }
        },
        {
          "role": "ai",
          "text": "Would sparkling water be alright?",
          "translations": {
            "ko": "스파클링 워터는 어떠신가요?",
            "zh": "气泡水可以吗？",
            "ja": "スパークリングウォーターはいかがですか？",
            "vi": "Nước suối có ga có ổn không?",
            "en": "Would sparkling water be alright?"
          }
        },
        {
          "role": "user",
          "text": "Yes, that would be nice.",
          "translations": {
            "ko": "네, 좋아요.",
            "zh": "是的，那会很好。",
            "ja": "はい、それがいいです。",
            "vi": "Có, điều đó sẽ thật tốt.",
            "en": "Yes, that would be nice."
          }
        },
        {
          "role": "ai",
          "text": "Here’s your drink. The chef is preparing your pasta now.",
          "translations": {
            "ko": "여기 음료입니다. 요리사가 지금 파스타를 준비하고 있습니다.",
            "zh": "这是你的饮料。厨师正在准备你的意大利面。",
            "ja": "こちらがお飲み物です。シェフがあなたのパスタを準備しています。",
            "vi": "Đây là thức uống của bạn. Đầu bếp đang chuẩn bị mì của bạn ngay bây giờ.",
            "en": "Here’s your drink. The chef is preparing your pasta now."
          }
        },
        {
          "role": "user",
          "text": "Thanks for the update.",
          "translations": {
            "ko": "업데이트 해 주셔서 감사합니다.",
            "zh": "谢谢你的更新。",
            "ja": "更新してくれてありがとう。",
            "vi": "Cảm ơn đã cập nhật.",
            "en": "Thanks for the update."
          }
        },
        {
          "role": "ai",
          "text": "Your vegetarian pasta is ready. Enjoy!",
          "translations": {
            "ko": "채식 파스타가 준비되었습니다. 맛있게 드세요!",
            "zh": "你的素食意大利面好了。请享用！",
            "ja": "ベジタリアンのパスタが出来上がりました。お楽しみください！",
            "vi": "Mì chay của bạn đã sẵn sàng. Thưởng thức!",
            "en": "Your vegetarian pasta is ready. Enjoy!"
          }
        },
        {
          "role": "user",
          "text": "It looks great, thank you.",
          "translations": {
            "ko": "보기 좋네요, 감사합니다.",
            "zh": "看起来很好，谢谢。",
            "ja": "美味しそうです、ありがとう。",
            "vi": "Trông rất ngon, cảm ơn.",
            "en": "It looks great, thank you."
          }
        },
        {
          "role": "ai",
          "text": "Let us know if there’s anything else.",
          "translations": {
            "ko": "다른 것이 필요하시면 알려주세요.",
            "zh": "如果还需要别的，就告诉我们。",
            "ja": "他に何か必要なものがあればお知らせください。",
            "vi": "Hãy cho chúng tôi biết nếu có gì khác.",
            "en": "Let us know if there’s anything else."
          }
        },
        {
          "role": "user",
          "text": "Will do. Thanks for the excellent service.",
          "translations": {
            "ko": "알겠습니다. 훌륭한 서비스에 감사드립니다.",
            "zh": "好的。谢谢你们的优秀服务。",
            "ja": "了解しました。素晴らしいサービスをありがとう。",
            "vi": "Tôi sẽ làm như vậy. Cảm ơn vì dịch vụ tuyệt vời.",
            "en": "Will do. Thanks for the excellent service."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Splitting the bill",
        "ko": "계산서 나누기",
        "zh": "分账",
        "ja": "割り勘の依頼",
        "vi": "Chia hóa đơn"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Here’s the bill. Would you like to pay together or separately?",
          "translations": {
            "ko": "계산서입니다. 함께 지불하시겠어요, 아니면 따로 하시겠어요?",
            "zh": "这是账单。你们想一起付款还是分开付款？",
            "ja": "こちらがお会計です。一緒にお支払いになりますか？それとも別々になさいますか？",
            "vi": "Đây là hóa đơn. Bạn muốn thanh toán cùng nhau hay riêng lẻ?",
            "en": "Here’s the bill. Would you like to pay together or separately?"
          }
        },
        {
          "role": "user",
          "text": "We’d like to split the bill.",
          "translations": {
            "ko": "계산서를 나눠 주세요.",
            "zh": "我们想分账。",
            "ja": "割り勘にしたいです。",
            "vi": "Chúng tôi muốn chia hóa đơn.",
            "en": "We’d like to split the bill."
          }
        },
        {
          "role": "ai",
          "text": "Sure thing. How many ways?",
          "translations": {
            "ko": "알겠습니다. 몇 등분으로 나누시겠어요?",
            "zh": "没问题。分几份？",
            "ja": "了解しました。何等分にしますか？",
            "vi": "Được thôi. Chia bao nhiêu cách?",
            "en": "Sure thing. How many ways?"
          }
        },
        {
          "role": "user",
          "text": "Two, please.",
          "translations": {
            "ko": "두 등분으로 부탁드립니다.",
            "zh": "两份，谢谢。",
            "ja": "2等分でお願いします。",
            "vi": "Hai, xin vui lòng.",
            "en": "Two, please."
          }
        },
        {
          "role": "ai",
          "text": "Did you want to split it evenly?",
          "translations": {
            "ko": "동등하게 나누시겠어요?",
            "zh": "你们想要均分吗？",
            "ja": "均等に分けますか？",
            "vi": "Bạn có muốn chia đều không?",
            "en": "Did you want to split it evenly?"
          }
        },
        {
          "role": "user",
          "text": "Yes, that works.",
          "translations": {
            "ko": "네, 그렇게 해주세요.",
            "zh": "是的，可以。",
            "ja": "はい、それでいいです。",
            "vi": "Có, điều đó phù hợp.",
            "en": "Yes, that works."
          }
        },
        {
          "role": "ai",
          "text": "Alright, it’ll be $24.50 each.",
          "translations": {
            "ko": "알겠습니다, 각자 $24.50입니다.",
            "zh": "好的，每人24.50美元。",
            "ja": "了解しました。それぞれ$24.50になります。",
            "vi": "Được rồi, mỗi người sẽ là $24.50.",
            "en": "Alright, it’ll be $24.50 each."
          }
        },
        {
          "role": "user",
          "text": "Sounds good.",
          "translations": {
            "ko": "좋습니다.",
            "zh": "听起来不错。",
            "ja": "それでいいです。",
            "vi": "Nghe có vẻ tốt.",
            "en": "Sounds good."
          }
        },
        {
          "role": "ai",
          "text": "Will you both be paying by card?",
          "translations": {
            "ko": "두 분 다 카드로 지불하시겠어요?",
            "zh": "你们都要用卡付款吗？",
            "ja": "お二人ともカードでお支払いになりますか？",
            "vi": "Cả hai bạn đều sẽ thanh toán bằng thẻ?",
            "en": "Will you both be paying by card?"
          }
        },
        {
          "role": "user",
          "text": "Yes.",
          "translations": {
            "ko": "네.",
            "zh": "是的。",
            "ja": "はい。",
            "vi": "Có.",
            "en": "Yes."
          }
        },
        {
          "role": "ai",
          "text": "Okay, I’ll process the first card now.",
          "translations": {
            "ko": "알겠습니다, 첫 번째 카드를 처리하겠습니다.",
            "zh": "好的，我现在处理第一张卡。",
            "ja": "了解しました。最初のカードを処理します。",
            "vi": "Được rồi, tôi sẽ xử lý thẻ đầu tiên ngay bây giờ.",
            "en": "Okay, I’ll process the first card now."
          }
        },
        {
          "role": "user",
          "text": "Here you go.",
          "translations": {
            "ko": "여기 있습니다.",
            "zh": "给你。",
            "ja": "こちらです。",
            "vi": "Đây, xin vui lòng.",
            "en": "Here you go."
          }
        },
        {
          "role": "ai",
          "text": "Thank you. And now the second one.",
          "translations": {
            "ko": "감사합니다. 이제 두 번째 카드입니다.",
            "zh": "谢谢。现在是第二张卡。",
            "ja": "ありがとう。次に二つ目のカードを処理します。",
            "vi": "Cảm ơn. Và bây giờ là thẻ thứ hai.",
            "en": "Thank you. And now the second one."
          }
        },
        {
          "role": "user",
          "text": "Here’s mine.",
          "translations": {
            "ko": "제 카드입니다.",
            "zh": "这是我的。",
            "ja": "こちらが私のカードです。",
            "vi": "Đây là thẻ của tôi.",
            "en": "Here’s mine."
          }
        },
        {
          "role": "ai",
          "text": "All set. Your receipts are inside.",
          "translations": {
            "ko": "다 처리했습니다. 영수증은 안에 있습니다.",
            "zh": "都处理好了。你们的收据在里面。",
            "ja": "すべて終わりました。レシートは中に入っています。",
            "vi": "Tất cả đã sẵn sàng. Biên lai của bạn nằm bên trong.",
            "en": "All set. Your receipts are inside."
          }
        },
        {
          "role": "user",
          "text": "Thank you very much.",
          "translations": {
            "ko": "정말 감사합니다.",
            "zh": "非常感谢。",
            "ja": "ありがとうございました。",
            "vi": "Cảm ơn rất nhiều.",
            "en": "Thank you very much."
          }
        },
        {
          "role": "ai",
          "text": "Hope everything was great today!",
          "translations": {
            "ko": "오늘 모든 것이 좋았길 바랍니다!",
            "zh": "希望今天的一切都让你们满意！",
            "ja": "今日はすべて満足いただけましたか？",
            "vi": "Hy vọng mọi thứ đều tốt đẹp hôm nay!",
            "en": "Hope everything was great today!"
          }
        },
        {
          "role": "user",
          "text": "Yes, we really enjoyed it.",
          "translations": {
            "ko": "네, 정말 즐거웠습니다.",
            "zh": "是的，我们非常喜欢。",
            "ja": "はい、とても楽しかったです。",
            "vi": "Có, chúng tôi thực sự thích nó.",
            "en": "Yes, we really enjoyed it."
          }
        },
        {
          "role": "ai",
          "text": "Come again anytime!",
          "translations": {
            "ko": "언제든지 다시 오세요!",
            "zh": "随时欢迎再来！",
            "ja": "いつでもまた来てください！",
            "vi": "Hãy quay lại bất cứ lúc nào!",
            "en": "Come again anytime!"
          }
        },
        {
          "role": "user",
          "text": "We will!",
          "translations": {
            "ko": "그럴게요!",
            "zh": "我们会的！",
            "ja": "そうします！",
            "vi": "Chúng tôi sẽ!",
            "en": "We will!"
          }
        }
      ]
    },
    {
      "description": {
        "en": "Complimenting the meal and tipping",
        "ko": "식사를 칭찬하고 팁 주기",
        "zh": "表扬餐点并付小费",
        "ja": "食事とチップのお礼",
        "vi": "Khen ngợi bữa ăn và tiền boa"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "How was everything today?",
          "translations": {
            "ko": "오늘 모든 것이 어떠셨나요?",
            "zh": "今天的一切都怎么样？",
            "ja": "今日はいかがでしたか？",
            "vi": "Mọi thứ hôm nay thế nào?",
            "en": "How was everything today?"
          }
        },
        {
          "role": "user",
          "text": "Fantastic. The food was delicious.",
          "translations": {
            "ko": "훌륭했습니다. 음식이 맛있었습니다.",
            "zh": "太棒了。食物非常美味。",
            "ja": "素晴らしかったです。食事も美味しかったです。",
            "vi": "Tuyệt vời. Thức ăn rất ngon.",
            "en": "Fantastic. The food was delicious."
          }
        },
        {
          "role": "ai",
          "text": "We’re so glad to hear that!",
          "translations": {
            "ko": "그렇게 말씀해 주셔서 감사합니다!",
            "zh": "我们很高兴听到这个！",
            "ja": "それは嬉しいです！",
            "vi": "Chúng tôi rất vui khi nghe điều đó!",
            "en": "We’re so glad to hear that!"
          }
        },
        {
          "role": "user",
          "text": "The service was excellent too.",
          "translations": {
            "ko": "서비스도 훌륭했습니다.",
            "zh": "服务也非常好。",
            "ja": "サービスも素晴らしかったです。",
            "vi": "Dịch vụ cũng rất tốt.",
            "en": "The service was excellent too."
          }
        },
        {
          "role": "ai",
          "text": "Thank you! That means a lot.",
          "translations": {
            "ko": "감사합니다! 그 말을 들으니 기쁩니다.",
            "zh": "谢谢！这对我们来说意义重大。",
            "ja": "ありがとうございます！それは嬉しいです。",
            "vi": "Cảm ơn! Điều đó có nghĩa rất nhiều.",
            "en": "Thank you! That means a lot."
          }
        },
        {
          "role": "user",
          "text": "Could you thank the chef for us?",
          "translations": {
            "ko": "요리사에게 감사 인사를 전해주실 수 있나요?",
            "zh": "你能帮我们谢谢厨师吗？",
            "ja": "シェフにもお礼を言っていただけますか？",
            "vi": "Bạn có thể cảm ơn đầu bếp cho chúng tôi không?",
            "en": "Could you thank the chef for us?"
          }
        },
        {
          "role": "ai",
          "text": "Absolutely, I’ll pass it on.",
          "translations": {
            "ko": "물론입니다, 전해드리겠습니다.",
            "zh": "当然，我会转达的。",
            "ja": "もちろんです、伝えておきます。",
            "vi": "Dĩ nhiên, tôi sẽ chuyển lời.",
            "en": "Absolutely, I’ll pass it on."
          }
        },
        {
          "role": "user",
          "text": "And we’d like to leave a tip.",
          "translations": {
            "ko": "그리고 팁을 주고 싶습니다.",
            "zh": "我们想要留小费。",
            "ja": "そして、チップを残したいです。",
            "vi": "Và chúng tôi muốn để lại tiền boa.",
            "en": "And we’d like to leave a tip."
          }
        },
        {
          "role": "ai",
          "text": "That’s very kind of you.",
          "translations": {
            "ko": "친절하시네요.",
            "zh": "那太好了。",
            "ja": "それはとても優しいです。",
            "vi": "Điều đó rất tốt bụng của bạn.",
            "en": "That’s very kind of you."
          }
        },
        {
          "role": "user",
          "text": "You all deserve it.",
          "translations": {
            "ko": "당신들이 받을 만합니다.",
            "zh": "你们都值得。",
            "ja": "皆さんに感謝しています。",
            "vi": "Tất cả các bạn đều xứng đáng nhận được nó.",
            "en": "You all deserve it."
          }
        },
        {
          "role": "ai",
          "text": "Do you want the tip added to the card?",
          "translations": {
            "ko": "팁을 카드에 추가하시겠어요?",
            "zh": "你想要把小费加到卡上吗？",
            "ja": "チップはカードに追加しますか？",
            "vi": "Bạn có muốn tiền boa được thêm vào thẻ không?",
            "en": "Do you want the tip added to the card?"
          }
        },
        {
          "role": "user",
          "text": "Yes, please add 20%.",
          "translations": {
            "ko": "네, 20% 추가해 주세요.",
            "zh": "是的，请加20%。",
            "ja": "はい、20%追加してください。",
            "vi": "Có, xin vui lòng thêm 20%.",
            "en": "Yes, please add 20%."
          }
        },
        {
          "role": "ai",
          "text": "Got it. I’ll update the payment.",
          "translations": {
            "ko": "알겠습니다. 결제를 업데이트하겠습니다.",
            "zh": "明白了。我会更新付款信息。",
            "ja": "了解しました。支払いを更新します。",
            "vi": "Được rồi. Tôi sẽ cập nhật thanh toán.",
            "en": "Got it. I’ll update the payment."
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
          "text": "Here’s your receipt with the tip included.",
          "translations": {
            "ko": "팁이 포함된 영수증입니다.",
            "zh": "这是你的收据，已经包括了小费。",
            "ja": "チップを含むレシートです。",
            "vi": "Đây là biên lai của bạn với tiền boa đã bao gồm.",
            "en": "Here’s your receipt with the tip included."
          }
        },
        {
          "role": "user",
          "text": "Perfect.",
          "translations": {
            "ko": "완벽합니다.",
            "zh": "完美。",
            "ja": "完璧です。",
            "vi": "Hoàn hảo.",
            "en": "Perfect."
          }
        },
        {
          "role": "ai",
          "text": "Thank you again for everything!",
          "translations": {
            "ko": "모든 것에 대해 다시 한 번 감사드립니다!",
            "zh": "再次感谢你们的一切！",
            "ja": "今日は本当にありがとうございました！",
            "vi": "Cảm ơn bạn một lần nữa vì mọi thứ!",
            "en": "Thank you again for everything!"
          }
        },
        {
          "role": "user",
          "text": "We’ll definitely come back.",
          "translations": {
            "ko": "꼭 다시 올게요.",
            "zh": "我们肯定会再来的。",
            "ja": "絶対にまた来ます。",
            "vi": "Chúng tôi chắc chắn sẽ quay lại.",
            "en": "We’ll definitely come back."
          }
        }
      ]
    }
  ],
  "intermediate": [
    {
      "description": {
        "en": "Making a reservation over the phone",
        "ko": "전화로 예약하기",
        "zh": "通过电话预订",
        "ja": "電話で予約をする",
        "vi": "Đặt chỗ qua điện thoại"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Good evening, thank you for calling The Olive Garden.",
          "translations": {
            "ko": "안녕하십니까, 올리브 가든에 전화해 주셔서 감사합니다.",
            "zh": "晚上好，感谢您致电Olive Garden。",
            "ja": "こんばんは、オリーブガーデンへお電話いただきありがとうございます。",
            "vi": "Chào buổi tối, cảm ơn bạn đã gọi đến The Olive Garden.",
            "en": "Good evening, thank you for calling The Olive Garden."
          }
        },
        {
          "role": "user",
          "text": "Hi, I’d like to make a reservation for Friday night.",
          "translations": {
            "ko": "안녕하세요, 금요일 밤에 예약하고 싶습니다.",
            "zh": "嗨，我想预订周五晚上的位置。",
            "ja": "こんにちは、金曜日の夜に予約をしたいのですが。",
            "vi": "Chào, tôi muốn đặt chỗ vào tối thứ Sáu.",
            "en": "Hi, I’d like to make a reservation for Friday night."
          }
        },
        {
          "role": "ai",
          "text": "Certainly. How many people will be in your party?",
          "translations": {
            "ko": "알겠습니다. 몇 명이 오실 예정인가요?",
            "zh": "当然。请问您有多少人？",
            "ja": "かしこまりました。何名様でしょうか？",
            "vi": "Chắc chắn. Bạn sẽ có bao nhiêu người?",
            "en": "Certainly. How many people will be in your party?"
          }
        },
        {
          "role": "user",
          "text": "There will be four of us.",
          "translations": {
            "ko": "우리는 4명입니다.",
            "zh": "我们有四个人。",
            "ja": "私たちは4人です。",
            "vi": "Chúng tôi sẽ có bốn người.",
            "en": "There will be four of us."
          }
        },
        {
          "role": "ai",
          "text": "Do you prefer indoor or outdoor seating?",
          "translations": {
            "ko": "실내 좌석과 실외 좌석 중 어느 것을 선호하십니까?",
            "zh": "您喜欢室内还是室外的座位？",
            "ja": "室内席と屋外席、どちらがよろしいですか？",
            "vi": "Bạn thích ngồi trong nhà hay ngoài trời?",
            "en": "Do you prefer indoor or outdoor seating?"
          }
        },
        {
          "role": "user",
          "text": "Indoor, near the window if possible.",
          "translations": {
            "ko": "가능하다면 창가에 있는 실내 좌석을 원합니다.",
            "zh": "室内的，如果可能的话，靠窗户的位置。",
            "ja": "可能であれば窓際の室内席を希望します。",
            "vi": "Trong nhà, gần cửa sổ nếu có thể.",
            "en": "Indoor, near the window if possible."
          }
        },
        {
          "role": "ai",
          "text": "We’ll do our best to accommodate that.",
          "translations": {
            "ko": "최대한 맞춰드리겠습니다.",
            "zh": "我们会尽力满足您的要求。",
            "ja": "その席をご用意できるよう最善を尽くします。",
            "vi": "Chúng tôi sẽ cố gắng đáp ứng yêu cầu đó.",
            "en": "We’ll do our best to accommodate that."
          }
        },
        {
          "role": "user",
          "text": "Also, one of us is vegetarian. Do you have good options?",
          "translations": {
            "ko": "또한, 우리 중 한 명은 채식주의자입니다. 좋은 메뉴가 있나요?",
            "zh": "另外，我们中有一个人是素食者。你们有好的选择吗？",
            "ja": "また、私たちの中にはベジタリアンの方がいます。良い選択肢はありますか？",
            "vi": "Ngoài ra, một trong chúng tôi là người ăn chay. Bạn có lựa chọn tốt không?",
            "en": "Also, one of us is vegetarian. Do you have good options?"
          }
        },
        {
          "role": "ai",
          "text": "Absolutely. We have several vegetarian and vegan dishes.",
          "translations": {
            "ko": "네, 저희는 다양한 채식주의자와 비건 요리를 제공하고 있습니다.",
            "zh": "当然。我们有几道素食和纯素的菜品。",
            "ja": "もちろんです。ベジタリアンやビーガン向けの料理も多数ご用意しております。",
            "vi": "Chắc chắn. Chúng tôi có nhiều món ăn chay và thuần chay.",
            "en": "Absolutely. We have several vegetarian and vegan dishes."
          }
        },
        {
          "role": "user",
          "text": "Perfect. Could we come around 7 PM?",
          "translations": {
            "ko": "완벽합니다. 7시쯤 오면 될까요?",
            "zh": "太好了。我们可以在7点左右过来吗？",
            "ja": "完璧です。7時頃に行くことは可能でしょうか？",
            "vi": "Hoàn hảo. Chúng tôi có thể đến vào khoảng 7 giờ tối không?",
            "en": "Perfect. Could we come around 7 PM?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, we have availability at 7 PM. I’ve booked it.",
          "translations": {
            "ko": "네, 7시에 예약 가능합니다. 예약해 드렸습니다.",
            "zh": "是的，我们在7点有空位。我已经为您预订了。",
            "ja": "はい、7時に空席がございます。予約を入れました。",
            "vi": "Có, chúng tôi còn chỗ vào lúc 7 giờ tối. Tôi đã đặt cho bạn.",
            "en": "Yes, we have availability at 7 PM. I’ve booked it."
          }
        },
        {
          "role": "user",
          "text": "Great. Can I leave a contact number?",
          "translations": {
            "ko": "연락처를 남길 수 있을까요?",
            "zh": "太好了。我可以留一个联系电话吗？",
            "ja": "連絡先の電話番号を残してもよろしいですか？",
            "vi": "Tuyệt. Tôi có thể để lại số liên lạc không?",
            "en": "Great. Can I leave a contact number?"
          }
        },
        {
          "role": "ai",
          "text": "Sure, please go ahead.",
          "translations": {
            "ko": "네, 말씀해주세요.",
            "zh": "当然，您说吧。",
            "ja": "はい、どうぞお伝えください。",
            "vi": "Chắc chắn, xin vui lòng tiếp tục.",
            "en": "Sure, please go ahead."
          }
        },
        {
          "role": "user",
          "text": "It’s 555-238-7410.",
          "translations": {
            "ko": "555-238-7410입니다.",
            "zh": "是555-238-7410。",
            "ja": "555-238-7410です。",
            "vi": "Số của tôi là 555-238-7410.",
            "en": "It’s 555-238-7410."
          }
        },
        {
          "role": "ai",
          "text": "Got it. Your table is confirmed for 7 PM Friday.",
          "translations": {
            "ko": "알겠습니다. 금요일 7시에 테이블 예약이 확정되었습니다.",
            "zh": "收到。您的桌子已经预订在周五晚上7点。",
            "ja": "承知しました。金曜日の7時にテーブルを確保しました。",
            "vi": "Được rồi. Bàn của bạn đã được xác nhận vào lúc 7 giờ tối thứ Sáu.",
            "en": "Got it. Your table is confirmed for 7 PM Friday."
          }
        },
        {
          "role": "user",
          "text": "Thank you very much.",
          "translations": {
            "ko": "정말 감사합니다.",
            "zh": "非常感谢。",
            "ja": "どうもありがとうございます。",
            "vi": "Cảm ơn rất nhiều.",
            "en": "Thank you very much."
          }
        },
        {
          "role": "ai",
          "text": "We look forward to serving you.",
          "translations": {
            "ko": "저희가 모시게 되어 기쁩니다.",
            "zh": "我们期待为您服务。",
            "ja": "お客様にお会いできるのを楽しみにしております。",
            "vi": "Chúng tôi mong được phục vụ bạn.",
            "en": "We look forward to serving you."
          }
        },
        {
          "role": "user",
          "text": "See you then!",
          "translations": {
            "ko": "그때 뵙겠습니다!",
            "zh": "到时见！",
            "ja": "それでは、その時に！",
            "vi": "Hẹn gặp lại!",
            "en": "See you then!"
          }
        },
        {
          "role": "ai",
          "text": "Have a great day.",
          "translations": {
            "ko": "좋은 하루 보내세요.",
            "zh": "祝您有美好的一天。",
            "ja": "素晴らしい一日を。",
            "vi": "Chúc bạn một ngày tốt lành.",
            "en": "Have a great day."
          }
        },
        {
          "role": "user",
          "text": "You too!",
          "translations": {
            "ko": "당신도요!",
            "zh": "您也是！",
            "ja": "あなたも！",
            "vi": "Bạn cũng vậy!",
            "en": "You too!"
          }
        }
      ]
    },
    {
      "description": {
        "en": "Clarifying dietary restrictions",
        "ko": "식사 제한 사항 확인하기",
        "zh": "澄清饮食限制",
        "ja": "食事制限の確認",
        "vi": "Làm rõ về chế độ ăn kiêng"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Good evening, thank you for calling The Olive Garden.",
          "translations": {
            "ko": "안녕하십니까, 올리브 가든에 전화해 주셔서 감사합니다.",
            "zh": "晚上好，感谢您致电Olive Garden。",
            "ja": "こんばんは、オリーブガーデンへお電話いただきありがとうございます。",
            "vi": "Chào buổi tối, cảm ơn bạn đã gọi đến The Olive Garden.",
            "en": "Good evening, thank you for calling The Olive Garden."
          }
        },
        {
          "role": "user",
          "text": "Hi, I’d like to make a reservation for Friday night.",
          "translations": {
            "ko": "안녕하세요, 금요일 밤에 예약하고 싶습니다.",
            "zh": "嗨，我想预订周五晚上的位置。",
            "ja": "こんにちは、金曜日の夜に予約をしたいのですが。",
            "vi": "Chào, tôi muốn đặt chỗ vào tối thứ Sáu.",
            "en": "Hi, I’d like to make a reservation for Friday night."
          }
        },
        {
          "role": "ai",
          "text": "Certainly. How many people will be in your party?",
          "translations": {
            "ko": "알겠습니다. 몇 명이 오실 예정인가요?",
            "zh": "当然。请问您有多少人？",
            "ja": "かしこまりました。何名様でしょうか？",
            "vi": "Chắc chắn. Bạn sẽ có bao nhiêu người?",
            "en": "Certainly. How many people will be in your party?"
          }
        },
        {
          "role": "user",
          "text": "There will be four of us.",
          "translations": {
            "ko": "우리는 4명입니다.",
            "zh": "我们有四个人。",
            "ja": "私たちは4人です。",
            "vi": "Chúng tôi sẽ có bốn người.",
            "en": "There will be four of us."
          }
        },
        {
          "role": "ai",
          "text": "Do you prefer indoor or outdoor seating?",
          "translations": {
            "ko": "실내 좌석과 실외 좌석 중 어느 것을 선호하십니까?",
            "zh": "您喜欢室内还是室外的座位？",
            "ja": "室内席と屋外席、どちらがよろしいですか？",
            "vi": "Bạn thích ngồi trong nhà hay ngoài trời?",
            "en": "Do you prefer indoor or outdoor seating?"
          }
        },
        {
          "role": "user",
          "text": "Indoor, near the window if possible.",
          "translations": {
            "ko": "가능하다면 창가에 있는 실내 좌석을 원합니다.",
            "zh": "室内的，如果可能的话，靠窗户的位置。",
            "ja": "可能であれば窓際の室内席を希望します。",
            "vi": "Trong nhà, gần cửa sổ nếu có thể.",
            "en": "Indoor, near the window if possible."
          }
        },
        {
          "role": "ai",
          "text": "We’ll do our best to accommodate that.",
          "translations": {
            "ko": "최대한 맞춰드리겠습니다.",
            "zh": "我们会尽力满足您的要求。",
            "ja": "その席をご用意できるよう最善を尽くします。",
            "vi": "Chúng tôi sẽ cố gắng đáp ứng yêu cầu đó.",
            "en": "We’ll do our best to accommodate that."
          }
        },
        {
          "role": "user",
          "text": "Also, one of us is vegetarian. Do you have good options?",
          "translations": {
            "ko": "또한, 우리 중 한 명은 채식주의자입니다. 좋은 메뉴가 있나요?",
            "zh": "另外，我们中有一个人是素食者。你们有好的选择吗？",
            "ja": "また、私たちの中にはベジタリアンの方がいます。良い選択肢はありますか？",
            "vi": "Ngoài ra, một trong chúng tôi là người ăn chay. Bạn có lựa chọn tốt không?",
            "en": "Also, one of us is vegetarian. Do you have good options?"
          }
        },
        {
          "role": "ai",
          "text": "Absolutely. We have several vegetarian and vegan dishes.",
          "translations": {
            "ko": "네, 저희는 다양한 채식주의자와 비건 요리를 제공하고 있습니다.",
            "zh": "当然。我们有几道素食和纯素的菜品。",
            "ja": "もちろんです。ベジタリアンやビーガン向けの料理も多数ご用意しております。",
            "vi": "Chắc chắn. Chúng tôi có nhiều món ăn chay và thuần chay.",
            "en": "Absolutely. We have several vegetarian and vegan dishes."
          }
        },
        {
          "role": "user",
          "text": "Perfect. Could we come around 7 PM?",
          "translations": {
            "ko": "완벽합니다. 7시쯤 오면 될까요?",
            "zh": "太好了。我们可以在7点左右过来吗？",
            "ja": "完璧です。7時頃に行くことは可能でしょうか？",
            "vi": "Hoàn hảo. Chúng tôi có thể đến vào khoảng 7 giờ tối không?",
            "en": "Perfect. Could we come around 7 PM?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, we have availability at 7 PM. I’ve booked it.",
          "translations": {
            "ko": "네, 7시에 예약 가능합니다. 예약해 드렸습니다.",
            "zh": "是的，我们在7点有空位。我已经为您预订了。",
            "ja": "はい、7時に空席がございます。予約を入れました。",
            "vi": "Có, chúng tôi còn chỗ vào lúc 7 giờ tối. Tôi đã đặt cho bạn.",
            "en": "Yes, we have availability at 7 PM. I’ve booked it."
          }
        },
        {
          "role": "user",
          "text": "Great. Can I leave a contact number?",
          "translations": {
            "ko": "연락처를 남길 수 있을까요?",
            "zh": "太好了。我可以留一个联系电话吗？",
            "ja": "連絡先の電話番号を残してもよろしいですか？",
            "vi": "Tuyệt. Tôi có thể để lại số liên lạc không?",
            "en": "Great. Can I leave a contact number?"
          }
        },
        {
          "role": "ai",
          "text": "Sure, please go ahead.",
          "translations": {
            "ko": "네, 말씀해주세요.",
            "zh": "当然，您说吧。",
            "ja": "はい、どうぞお伝えください。",
            "vi": "Chắc chắn, xin vui lòng tiếp tục.",
            "en": "Sure, please go ahead."
          }
        },
        {
          "role": "user",
          "text": "It’s 555-238-7410.",
          "translations": {
            "ko": "555-238-7410입니다.",
            "zh": "是555-238-7410。",
            "ja": "555-238-7410です。",
            "vi": "Số của tôi là 555-238-7410.",
            "en": "It’s 555-238-7410."
          }
        },
        {
          "role": "ai",
          "text": "Got it. Your table is confirmed for 7 PM Friday.",
          "translations": {
            "ko": "알겠습니다. 금요일 7시에 테이블 예약이 확정되었습니다.",
            "zh": "收到。您的桌子已经预订在周五晚上7点。",
            "ja": "承知しました。金曜日の7時にテーブルを確保しました。",
            "vi": "Được rồi. Bàn của bạn đã được xác nhận vào lúc 7 giờ tối thứ Sáu.",
            "en": "Got it. Your table is confirmed for 7 PM Friday."
          }
        },
        {
          "role": "user",
          "text": "Thank you very much.",
          "translations": {
            "ko": "정말 감사합니다.",
            "zh": "非常感谢。",
            "ja": "どうもありがとうございます。",
            "vi": "Cảm ơn rất nhiều.",
            "en": "Thank you very much."
          }
        },
        {
          "role": "ai",
          "text": "We look forward to serving you.",
          "translations": {
            "ko": "저희가 모시게 되어 기쁩니다.",
            "zh": "我们期待为您服务。",
            "ja": "お客様にお会いできるのを楽しみにしております。",
            "vi": "Chúng tôi mong được phục vụ bạn.",
            "en": "We look forward to serving you."
          }
        },
        {
          "role": "user",
          "text": "See you then!",
          "translations": {
            "ko": "그때 뵙겠습니다!",
            "zh": "到时见！",
            "ja": "それでは、その時に！",
            "vi": "Hẹn gặp lại!",
            "en": "See you then!"
          }
        },
        {
          "role": "ai",
          "text": "Have a great day.",
          "translations": {
            "ko": "좋은 하루 보내세요.",
            "zh": "祝您有美好的一天。",
            "ja": "素晴らしい一日を。",
            "vi": "Chúc bạn một ngày tốt lành.",
            "en": "Have a great day."
          }
        },
        {
          "role": "user",
          "text": "You too!",
          "translations": {
            "ko": "당신도요!",
            "zh": "您也是！",
            "ja": "あなたも！",
            "vi": "Bạn cũng vậy!",
            "en": "You too!"
          }
        }
      ]
    },
    {
      "description": {
        "en": "Asking about wine pairings",
        "ko": "와인 페어링 문의하기",
        "zh": "询问葡萄酒搭配",
        "ja": "ワインのペアリングについて尋ねる",
        "vi": "Hỏi về việc phối hợp rượu với món ăn"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Good evening, thank you for calling The Olive Garden.",
          "translations": {
            "ko": "안녕하십니까, 올리브 가든에 전화해 주셔서 감사합니다.",
            "zh": "晚上好，感谢您致电Olive Garden。",
            "ja": "こんばんは、オリーブガーデンへお電話いただきありがとうございます。",
            "vi": "Chào buổi tối, cảm ơn bạn đã gọi đến The Olive Garden.",
            "en": "Good evening, thank you for calling The Olive Garden."
          }
        },
        {
          "role": "user",
          "text": "Hi, I’d like to make a reservation for Friday night.",
          "translations": {
            "ko": "안녕하세요, 금요일 밤에 예약하고 싶습니다.",
            "zh": "嗨，我想预订周五晚上的位置。",
            "ja": "こんにちは、金曜日の夜に予約をしたいのですが。",
            "vi": "Chào, tôi muốn đặt chỗ vào tối thứ Sáu.",
            "en": "Hi, I’d like to make a reservation for Friday night."
          }
        },
        {
          "role": "ai",
          "text": "Certainly. How many people will be in your party?",
          "translations": {
            "ko": "알겠습니다. 몇 명이 오실 예정인가요?",
            "zh": "当然。请问您有多少人？",
            "ja": "かしこまりました。何名様でしょうか？",
            "vi": "Chắc chắn. Bạn sẽ có bao nhiêu người?",
            "en": "Certainly. How many people will be in your party?"
          }
        },
        {
          "role": "user",
          "text": "There will be four of us.",
          "translations": {
            "ko": "우리는 4명입니다.",
            "zh": "我们有四个人。",
            "ja": "私たちは4人です。",
            "vi": "Chúng tôi sẽ có bốn người.",
            "en": "There will be four of us."
          }
        },
        {
          "role": "ai",
          "text": "Do you prefer indoor or outdoor seating?",
          "translations": {
            "ko": "실내 좌석과 실외 좌석 중 어느 것을 선호하십니까?",
            "zh": "您喜欢室内还是室外的座位？",
            "ja": "室内席と屋外席、どちらがよろしいですか？",
            "vi": "Bạn thích ngồi trong nhà hay ngoài trời?",
            "en": "Do you prefer indoor or outdoor seating?"
          }
        },
        {
          "role": "user",
          "text": "Indoor, near the window if possible.",
          "translations": {
            "ko": "가능하다면 창가에 있는 실내 좌석을 원합니다.",
            "zh": "室内的，如果可能的话，靠窗户的位置。",
            "ja": "可能であれば窓際の室内席を希望します。",
            "vi": "Trong nhà, gần cửa sổ nếu có thể.",
            "en": "Indoor, near the window if possible."
          }
        },
        {
          "role": "ai",
          "text": "We’ll do our best to accommodate that.",
          "translations": {
            "ko": "최대한 맞춰드리겠습니다.",
            "zh": "我们会尽力满足您的要求。",
            "ja": "その席をご用意できるよう最善を尽くします。",
            "vi": "Chúng tôi sẽ cố gắng đáp ứng yêu cầu đó.",
            "en": "We’ll do our best to accommodate that."
          }
        },
        {
          "role": "user",
          "text": "Also, one of us is vegetarian. Do you have good options?",
          "translations": {
            "ko": "또한, 우리 중 한 명은 채식주의자입니다. 좋은 메뉴가 있나요?",
            "zh": "另外，我们中有一个人是素食者。你们有好的选择吗？",
            "ja": "また、私たちの中にはベジタリアンの方がいます。良い選択肢はありますか？",
            "vi": "Ngoài ra, một trong chúng tôi là người ăn chay. Bạn có lựa chọn tốt không?",
            "en": "Also, one of us is vegetarian. Do you have good options?"
          }
        },
        {
          "role": "ai",
          "text": "Absolutely. We have several vegetarian and vegan dishes.",
          "translations": {
            "ko": "네, 저희는 다양한 채식주의자와 비건 요리를 제공하고 있습니다.",
            "zh": "当然。我们有几道素食和纯素的菜品。",
            "ja": "もちろんです。ベジタリアンやビーガン向けの料理も多数ご用意しております。",
            "vi": "Chắc chắn. Chúng tôi có nhiều món ăn chay và thuần chay.",
            "en": "Absolutely. We have several vegetarian and vegan dishes."
          }
        },
        {
          "role": "user",
          "text": "Perfect. Could we come around 7 PM?",
          "translations": {
            "ko": "완벽합니다. 7시쯤 오면 될까요?",
            "zh": "太好了。我们可以在7点左右过来吗？",
            "ja": "完璧です。7時頃に行くことは可能でしょうか？",
            "vi": "Hoàn hảo. Chúng tôi có thể đến vào khoảng 7 giờ tối không?",
            "en": "Perfect. Could we come around 7 PM?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, we have availability at 7 PM. I’ve booked it.",
          "translations": {
            "ko": "네, 7시에 예약 가능합니다. 예약해 드렸습니다.",
            "zh": "是的，我们在7点有空位。我已经为您预订了。",
            "ja": "はい、7時に空席がございます。予約を入れました。",
            "vi": "Có, chúng tôi còn chỗ vào lúc 7 giờ tối. Tôi đã đặt cho bạn.",
            "en": "Yes, we have availability at 7 PM. I’ve booked it."
          }
        },
        {
          "role": "user",
          "text": "Great. Can I leave a contact number?",
          "translations": {
            "ko": "연락처를 남길 수 있을까요?",
            "zh": "太好了。我可以留一个联系电话吗？",
            "ja": "連絡先の電話番号を残してもよろしいですか？",
            "vi": "Tuyệt. Tôi có thể để lại số liên lạc không?",
            "en": "Great. Can I leave a contact number?"
          }
        },
        {
          "role": "ai",
          "text": "Sure, please go ahead.",
          "translations": {
            "ko": "네, 말씀해주세요.",
            "zh": "当然，您说吧。",
            "ja": "はい、どうぞお伝えください。",
            "vi": "Chắc chắn, xin vui lòng tiếp tục.",
            "en": "Sure, please go ahead."
          }
        },
        {
          "role": "user",
          "text": "It’s 555-238-7410.",
          "translations": {
            "ko": "555-238-7410입니다.",
            "zh": "是555-238-7410。",
            "ja": "555-238-7410です。",
            "vi": "Số của tôi là 555-238-7410.",
            "en": "It’s 555-238-7410."
          }
        },
        {
          "role": "ai",
          "text": "Got it. Your table is confirmed for 7 PM Friday.",
          "translations": {
            "ko": "알겠습니다. 금요일 7시에 테이블 예약이 확정되었습니다.",
            "zh": "收到。您的桌子已经预订在周五晚上7点。",
            "ja": "承知しました。金曜日の7時にテーブルを確保しました。",
            "vi": "Được rồi. Bàn của bạn đã được xác nhận vào lúc 7 giờ tối thứ Sáu.",
            "en": "Got it. Your table is confirmed for 7 PM Friday."
          }
        },
        {
          "role": "user",
          "text": "Thank you very much.",
          "translations": {
            "ko": "정말 감사합니다.",
            "zh": "非常感谢。",
            "ja": "どうもありがとうございます。",
            "vi": "Cảm ơn rất nhiều.",
            "en": "Thank you very much."
          }
        },
        {
          "role": "ai",
          "text": "We look forward to serving you.",
          "translations": {
            "ko": "저희가 모시게 되어 기쁩니다.",
            "zh": "我们期待为您服务。",
            "ja": "お客様にお会いできるのを楽しみにしております。",
            "vi": "Chúng tôi mong được phục vụ bạn.",
            "en": "We look forward to serving you."
          }
        },
        {
          "role": "user",
          "text": "See you then!",
          "translations": {
            "ko": "그때 뵙겠습니다!",
            "zh": "到时见！",
            "ja": "それでは、その時に！",
            "vi": "Hẹn gặp lại!",
            "en": "See you then!"
          }
        },
        {
          "role": "ai",
          "text": "Have a great day.",
          "translations": {
            "ko": "좋은 하루 보내세요.",
            "zh": "祝您有美好的一天。",
            "ja": "素晴らしい一日を。",
            "vi": "Chúc bạn một ngày tốt lành.",
            "en": "Have a great day."
          }
        },
        {
          "role": "user",
          "text": "You too!",
          "translations": {
            "ko": "당신도요!",
            "zh": "您也是！",
            "ja": "あなたも！",
            "vi": "Bạn cũng vậy!",
            "en": "You too!"
          }
        }
      ]
    },
    {
      "description": {
        "en": "Sending back an undercooked dish",
        "ko": "익지 않은 요리 반송하기",
        "zh": "退回未煮熟的菜品",
        "ja": "調理が不十分な料理を返す",
        "vi": "Trả lại món ăn chưa chín"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Good evening, thank you for calling The Olive Garden.",
          "translations": {
            "ko": "안녕하십니까, 올리브 가든에 전화해 주셔서 감사합니다.",
            "zh": "晚上好，感谢您致电Olive Garden。",
            "ja": "こんばんは、オリーブガーデンへお電話いただきありがとうございます。",
            "vi": "Chào buổi tối, cảm ơn bạn đã gọi đến The Olive Garden.",
            "en": "Good evening, thank you for calling The Olive Garden."
          }
        },
        {
          "role": "user",
          "text": "Hi, I’d like to make a reservation for Friday night.",
          "translations": {
            "ko": "안녕하세요, 금요일 밤에 예약하고 싶습니다.",
            "zh": "嗨，我想预订周五晚上的位置。",
            "ja": "こんにちは、金曜日の夜に予約をしたいのですが。",
            "vi": "Chào, tôi muốn đặt chỗ vào tối thứ Sáu.",
            "en": "Hi, I’d like to make a reservation for Friday night."
          }
        },
        {
          "role": "ai",
          "text": "Certainly. How many people will be in your party?",
          "translations": {
            "ko": "알겠습니다. 몇 명이 오실 예정인가요?",
            "zh": "当然。请问您有多少人？",
            "ja": "かしこまりました。何名様でしょうか？",
            "vi": "Chắc chắn. Bạn sẽ có bao nhiêu người?",
            "en": "Certainly. How many people will be in your party?"
          }
        },
        {
          "role": "user",
          "text": "There will be four of us.",
          "translations": {
            "ko": "우리는 4명입니다.",
            "zh": "我们有四个人。",
            "ja": "私たちは4人です。",
            "vi": "Chúng tôi sẽ có bốn người.",
            "en": "There will be four of us."
          }
        },
        {
          "role": "ai",
          "text": "Do you prefer indoor or outdoor seating?",
          "translations": {
            "ko": "실내 좌석과 실외 좌석 중 어느 것을 선호하십니까?",
            "zh": "您喜欢室内还是室外的座位？",
            "ja": "室内席と屋外席、どちらがよろしいですか？",
            "vi": "Bạn thích ngồi trong nhà hay ngoài trời?",
            "en": "Do you prefer indoor or outdoor seating?"
          }
        },
        {
          "role": "user",
          "text": "Indoor, near the window if possible.",
          "translations": {
            "ko": "가능하다면 창가에 있는 실내 좌석을 원합니다.",
            "zh": "室内的，如果可能的话，靠窗户的位置。",
            "ja": "可能であれば窓際の室内席を希望します。",
            "vi": "Trong nhà, gần cửa sổ nếu có thể.",
            "en": "Indoor, near the window if possible."
          }
        },
        {
          "role": "ai",
          "text": "We’ll do our best to accommodate that.",
          "translations": {
            "ko": "최대한 맞춰드리겠습니다.",
            "zh": "我们会尽力满足您的要求。",
            "ja": "その席をご用意できるよう最善を尽くします。",
            "vi": "Chúng tôi sẽ cố gắng đáp ứng yêu cầu đó.",
            "en": "We’ll do our best to accommodate that."
          }
        },
        {
          "role": "user",
          "text": "Also, one of us is vegetarian. Do you have good options?",
          "translations": {
            "ko": "또한, 우리 중 한 명은 채식주의자입니다. 좋은 메뉴가 있나요?",
            "zh": "另外，我们中有一个人是素食者。你们有好的选择吗？",
            "ja": "また、私たちの中にはベジタリアンの方がいます。良い選択肢はありますか？",
            "vi": "Ngoài ra, một trong chúng tôi là người ăn chay. Bạn có lựa chọn tốt không?",
            "en": "Also, one of us is vegetarian. Do you have good options?"
          }
        },
        {
          "role": "ai",
          "text": "Absolutely. We have several vegetarian and vegan dishes.",
          "translations": {
            "ko": "네, 저희는 다양한 채식주의자와 비건 요리를 제공하고 있습니다.",
            "zh": "当然。我们有几道素食和纯素的菜品。",
            "ja": "もちろんです。ベジタリアンやビーガン向けの料理も多数ご用意しております。",
            "vi": "Chắc chắn. Chúng tôi có nhiều món ăn chay và thuần chay.",
            "en": "Absolutely. We have several vegetarian and vegan dishes."
          }
        },
        {
          "role": "user",
          "text": "Perfect. Could we come around 7 PM?",
          "translations": {
            "ko": "완벽합니다. 7시쯤 오면 될까요?",
            "zh": "太好了。我们可以在7点左右过来吗？",
            "ja": "完璧です。7時頃に行くことは可能でしょうか？",
            "vi": "Hoàn hảo. Chúng tôi có thể đến vào khoảng 7 giờ tối không?",
            "en": "Perfect. Could we come around 7 PM?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, we have availability at 7 PM. I’ve booked it.",
          "translations": {
            "ko": "네, 7시에 예약 가능합니다. 예약해 드렸습니다.",
            "zh": "是的，我们在7点有空位。我已经为您预订了。",
            "ja": "はい、7時に空席がございます。予約を入れました。",
            "vi": "Có, chúng tôi còn chỗ vào lúc 7 giờ tối. Tôi đã đặt cho bạn.",
            "en": "Yes, we have availability at 7 PM. I’ve booked it."
          }
        },
        {
          "role": "user",
          "text": "Great. Can I leave a contact number?",
          "translations": {
            "ko": "연락처를 남길 수 있을까요?",
            "zh": "太好了。我可以留一个联系电话吗？",
            "ja": "連絡先の電話番号を残してもよろしいですか？",
            "vi": "Tuyệt. Tôi có thể để lại số liên lạc không?",
            "en": "Great. Can I leave a contact number?"
          }
        },
        {
          "role": "ai",
          "text": "Sure, please go ahead.",
          "translations": {
            "ko": "네, 말씀해주세요.",
            "zh": "当然，您说吧。",
            "ja": "はい、どうぞお伝えください。",
            "vi": "Chắc chắn, xin vui lòng tiếp tục.",
            "en": "Sure, please go ahead."
          }
        },
        {
          "role": "user",
          "text": "It’s 555-238-7410.",
          "translations": {
            "ko": "555-238-7410입니다.",
            "zh": "是555-238-7410。",
            "ja": "555-238-7410です。",
            "vi": "Số của tôi là 555-238-7410.",
            "en": "It’s 555-238-7410."
          }
        },
        {
          "role": "ai",
          "text": "Got it. Your table is confirmed for 7 PM Friday.",
          "translations": {
            "ko": "알겠습니다. 금요일 7시에 테이블 예약이 확정되었습니다.",
            "zh": "收到。您的桌子已经预订在周五晚上7点。",
            "ja": "承知しました。金曜日の7時にテーブルを確保しました。",
            "vi": "Được rồi. Bàn của bạn đã được xác nhận vào lúc 7 giờ tối thứ Sáu.",
            "en": "Got it. Your table is confirmed for 7 PM Friday."
          }
        },
        {
          "role": "user",
          "text": "Thank you very much.",
          "translations": {
            "ko": "정말 감사합니다.",
            "zh": "非常感谢。",
            "ja": "どうもありがとうございます。",
            "vi": "Cảm ơn rất nhiều.",
            "en": "Thank you very much."
          }
        },
        {
          "role": "ai",
          "text": "We look forward to serving you.",
          "translations": {
            "ko": "저희가 모시게 되어 기쁩니다.",
            "zh": "我们期待为您服务。",
            "ja": "お客様にお会いできるのを楽しみにしております。",
            "vi": "Chúng tôi mong được phục vụ bạn.",
            "en": "We look forward to serving you."
          }
        },
        {
          "role": "user",
          "text": "See you then!",
          "translations": {
            "ko": "그때 뵙겠습니다!",
            "zh": "到时见！",
            "ja": "それでは、その時に！",
            "vi": "Hẹn gặp lại!",
            "en": "See you then!"
          }
        },
        {
          "role": "ai",
          "text": "Have a great day.",
          "translations": {
            "ko": "좋은 하루 보내세요.",
            "zh": "祝您有美好的一天。",
            "ja": "素晴らしい一日を。",
            "vi": "Chúc bạn một ngày tốt lành.",
            "en": "Have a great day."
          }
        },
        {
          "role": "user",
          "text": "You too!",
          "translations": {
            "ko": "당신도요!",
            "zh": "您也是！",
            "ja": "あなたも！",
            "vi": "Bạn cũng vậy!",
            "en": "You too!"
          }
        }
      ]
    },
    {
      "description": {
        "en": "Requesting a specific table or seat",
        "ko": "특정 테이블 또는 좌석 요청하기",
        "zh": "请求特定的桌子或座位",
        "ja": "特定のテーブルや席のリクエスト",
        "vi": "Yêu cầu một bàn hoặc chỗ ngồi cụ thể"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Good evening, thank you for calling The Olive Garden.",
          "translations": {
            "ko": "안녕하십니까, 올리브 가든에 전화해 주셔서 감사합니다.",
            "zh": "晚上好，感谢您致电Olive Garden。",
            "ja": "こんばんは、オリーブガーデンへお電話いただきありがとうございます。",
            "vi": "Chào buổi tối, cảm ơn bạn đã gọi đến The Olive Garden.",
            "en": "Good evening, thank you for calling The Olive Garden."
          }
        },
        {
          "role": "user",
          "text": "Hi, I’d like to make a reservation for Friday night.",
          "translations": {
            "ko": "안녕하세요, 금요일 밤에 예약하고 싶습니다.",
            "zh": "嗨，我想预订周五晚上的位置。",
            "ja": "こんにちは、金曜日の夜に予約をしたいのですが。",
            "vi": "Chào, tôi muốn đặt chỗ vào tối thứ Sáu.",
            "en": "Hi, I’d like to make a reservation for Friday night."
          }
        },
        {
          "role": "ai",
          "text": "Certainly. How many people will be in your party?",
          "translations": {
            "ko": "알겠습니다. 몇 명이 오실 예정인가요?",
            "zh": "当然。请问您有多少人？",
            "ja": "かしこまりました。何名様でしょうか？",
            "vi": "Chắc chắn. Bạn sẽ có bao nhiêu người?",
            "en": "Certainly. How many people will be in your party?"
          }
        },
        {
          "role": "user",
          "text": "There will be four of us.",
          "translations": {
            "ko": "우리는 4명입니다.",
            "zh": "我们有四个人。",
            "ja": "私たちは4人です。",
            "vi": "Chúng tôi sẽ có bốn người.",
            "en": "There will be four of us."
          }
        },
        {
          "role": "ai",
          "text": "Do you prefer indoor or outdoor seating?",
          "translations": {
            "ko": "실내 좌석과 실외 좌석 중 어느 것을 선호하십니까?",
            "zh": "您喜欢室内还是室外的座位？",
            "ja": "室内席と屋外席、どちらがよろしいですか？",
            "vi": "Bạn thích ngồi trong nhà hay ngoài trời?",
            "en": "Do you prefer indoor or outdoor seating?"
          }
        },
        {
          "role": "user",
          "text": "Indoor, near the window if possible.",
          "translations": {
            "ko": "가능하다면 창가에 있는 실내 좌석을 원합니다.",
            "zh": "室内的，如果可能的话，靠窗户的位置。",
            "ja": "可能であれば窓際の室内席を希望します。",
            "vi": "Trong nhà, gần cửa sổ nếu có thể.",
            "en": "Indoor, near the window if possible."
          }
        },
        {
          "role": "ai",
          "text": "We’ll do our best to accommodate that.",
          "translations": {
            "ko": "최대한 맞춰드리겠습니다.",
            "zh": "我们会尽力满足您的要求。",
            "ja": "その席をご用意できるよう最善を尽くします。",
            "vi": "Chúng tôi sẽ cố gắng đáp ứng yêu cầu đó.",
            "en": "We’ll do our best to accommodate that."
          }
        },
        {
          "role": "user",
          "text": "Also, one of us is vegetarian. Do you have good options?",
          "translations": {
            "ko": "또한, 우리 중 한 명은 채식주의자입니다. 좋은 메뉴가 있나요?",
            "zh": "另外，我们中有一个人是素食者。你们有好的选择吗？",
            "ja": "また、私たちの中にはベジタリアンの方がいます。良い選択肢はありますか？",
            "vi": "Ngoài ra, một trong chúng tôi là người ăn chay. Bạn có lựa chọn tốt không?",
            "en": "Also, one of us is vegetarian. Do you have good options?"
          }
        },
        {
          "role": "ai",
          "text": "Absolutely. We have several vegetarian and vegan dishes.",
          "translations": {
            "ko": "네, 저희는 다양한 채식주의자와 비건 요리를 제공하고 있습니다.",
            "zh": "当然。我们有几道素食和纯素的菜品。",
            "ja": "もちろんです。ベジタリアンやビーガン向けの料理も多数ご用意しております。",
            "vi": "Chắc chắn. Chúng tôi có nhiều món ăn chay và thuần chay.",
            "en": "Absolutely. We have several vegetarian and vegan dishes."
          }
        },
        {
          "role": "user",
          "text": "Perfect. Could we come around 7 PM?",
          "translations": {
            "ko": "완벽합니다. 7시쯤 오면 될까요?",
            "zh": "太好了。我们可以在7点左右过来吗？",
            "ja": "完璧です。7時頃に行くことは可能でしょうか？",
            "vi": "Hoàn hảo. Chúng tôi có thể đến vào khoảng 7 giờ tối không?",
            "en": "Perfect. Could we come around 7 PM?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, we have availability at 7 PM. I’ve booked it.",
          "translations": {
            "ko": "네, 7시에 예약 가능합니다. 예약해 드렸습니다.",
            "zh": "是的，我们在7点有空位。我已经为您预订了。",
            "ja": "はい、7時に空席がございます。予約を入れました。",
            "vi": "Có, chúng tôi còn chỗ vào lúc 7 giờ tối. Tôi đã đặt cho bạn.",
            "en": "Yes, we have availability at 7 PM. I’ve booked it."
          }
        },
        {
          "role": "user",
          "text": "Great. Can I leave a contact number?",
          "translations": {
            "ko": "연락처를 남길 수 있을까요?",
            "zh": "太好了。我可以留一个联系电话吗？",
            "ja": "連絡先の電話番号を残してもよろしいですか？",
            "vi": "Tuyệt. Tôi có thể để lại số liên lạc không?",
            "en": "Great. Can I leave a contact number?"
          }
        },
        {
          "role": "ai",
          "text": "Sure, please go ahead.",
          "translations": {
            "ko": "네, 말씀해주세요.",
            "zh": "当然，您说吧。",
            "ja": "はい、どうぞお伝えください。",
            "vi": "Chắc chắn, xin vui lòng tiếp tục.",
            "en": "Sure, please go ahead."
          }
        },
        {
          "role": "user",
          "text": "It’s 555-238-7410.",
          "translations": {
            "ko": "555-238-7410입니다.",
            "zh": "是555-238-7410。",
            "ja": "555-238-7410です。",
            "vi": "Số của tôi là 555-238-7410.",
            "en": "It’s 555-238-7410."
          }
        },
        {
          "role": "ai",
          "text": "Got it. Your table is confirmed for 7 PM Friday.",
          "translations": {
            "ko": "알겠습니다. 금요일 7시에 테이블 예약이 확정되었습니다.",
            "zh": "收到。您的桌子已经预订在周五晚上7点。",
            "ja": "承知しました。金曜日の7時にテーブルを確保しました。",
            "vi": "Được rồi. Bàn của bạn đã được xác nhận vào lúc 7 giờ tối thứ Sáu.",
            "en": "Got it. Your table is confirmed for 7 PM Friday."
          }
        },
        {
          "role": "user",
          "text": "Thank you very much.",
          "translations": {
            "ko": "정말 감사합니다.",
            "zh": "非常感谢。",
            "ja": "どうもありがとうございます。",
            "vi": "Cảm ơn rất nhiều.",
            "en": "Thank you very much."
          }
        },
        {
          "role": "ai",
          "text": "We look forward to serving you.",
          "translations": {
            "ko": "저희가 모시게 되어 기쁩니다.",
            "zh": "我们期待为您服务。",
            "ja": "お客様にお会いできるのを楽しみにしております。",
            "vi": "Chúng tôi mong được phục vụ bạn.",
            "en": "We look forward to serving you."
          }
        },
        {
          "role": "user",
          "text": "See you then!",
          "translations": {
            "ko": "그때 뵙겠습니다!",
            "zh": "到时见！",
            "ja": "それでは、その時に！",
            "vi": "Hẹn gặp lại!",
            "en": "See you then!"
          }
        },
        {
          "role": "ai",
          "text": "Have a great day.",
          "translations": {
            "ko": "좋은 하루 보내세요.",
            "zh": "祝您有美好的一天。",
            "ja": "素晴らしい一日を。",
            "vi": "Chúc bạn một ngày tốt lành.",
            "en": "Have a great day."
          }
        },
        {
          "role": "user",
          "text": "You too!",
          "translations": {
            "ko": "당신도요!",
            "zh": "您也是！",
            "ja": "あなたも！",
            "vi": "Bạn cũng vậy!",
            "en": "You too!"
          }
        }
      ]
    },
    {
      "description": {
        "en": "Discussing the menu with the chef",
        "ko": "셰프와 메뉴에 대해 논의하기",
        "zh": "与厨师讨论菜单",
        "ja": "シェフとメニューについて話す",
        "vi": "Thảo luận về thực đơn với đầu bếp"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Good evening, thank you for calling The Olive Garden.",
          "translations": {
            "ko": "안녕하십니까, 올리브 가든에 전화해 주셔서 감사합니다.",
            "zh": "晚上好，感谢您致电Olive Garden。",
            "ja": "こんばんは、オリーブガーデンへお電話いただきありがとうございます。",
            "vi": "Chào buổi tối, cảm ơn bạn đã gọi đến The Olive Garden.",
            "en": "Good evening, thank you for calling The Olive Garden."
          }
        },
        {
          "role": "user",
          "text": "Hi, I’d like to make a reservation for Friday night.",
          "translations": {
            "ko": "안녕하세요, 금요일 밤에 예약하고 싶습니다.",
            "zh": "嗨，我想预订周五晚上的位置。",
            "ja": "こんにちは、金曜日の夜に予約をしたいのですが。",
            "vi": "Chào, tôi muốn đặt chỗ vào tối thứ Sáu.",
            "en": "Hi, I’d like to make a reservation for Friday night."
          }
        },
        {
          "role": "ai",
          "text": "Certainly. How many people will be in your party?",
          "translations": {
            "ko": "알겠습니다. 몇 명이 오실 예정인가요?",
            "zh": "当然。请问您有多少人？",
            "ja": "かしこまりました。何名様でしょうか？",
            "vi": "Chắc chắn. Bạn sẽ có bao nhiêu người?",
            "en": "Certainly. How many people will be in your party?"
          }
        },
        {
          "role": "user",
          "text": "There will be four of us.",
          "translations": {
            "ko": "우리는 4명입니다.",
            "zh": "我们有四个人。",
            "ja": "私たちは4人です。",
            "vi": "Chúng tôi sẽ có bốn người.",
            "en": "There will be four of us."
          }
        },
        {
          "role": "ai",
          "text": "Do you prefer indoor or outdoor seating?",
          "translations": {
            "ko": "실내 좌석과 실외 좌석 중 어느 것을 선호하십니까?",
            "zh": "您喜欢室内还是室外的座位？",
            "ja": "室内席と屋外席、どちらがよろしいですか？",
            "vi": "Bạn thích ngồi trong nhà hay ngoài trời?",
            "en": "Do you prefer indoor or outdoor seating?"
          }
        },
        {
          "role": "user",
          "text": "Indoor, near the window if possible.",
          "translations": {
            "ko": "가능하다면 창가에 있는 실내 좌석을 원합니다.",
            "zh": "室内的，如果可能的话，靠窗户的位置。",
            "ja": "可能であれば窓際の室内席を希望します。",
            "vi": "Trong nhà, gần cửa sổ nếu có thể.",
            "en": "Indoor, near the window if possible."
          }
        },
        {
          "role": "ai",
          "text": "We’ll do our best to accommodate that.",
          "translations": {
            "ko": "최대한 맞춰드리겠습니다.",
            "zh": "我们会尽力满足您的要求。",
            "ja": "その席をご用意できるよう最善を尽くします。",
            "vi": "Chúng tôi sẽ cố gắng đáp ứng yêu cầu đó.",
            "en": "We’ll do our best to accommodate that."
          }
        },
        {
          "role": "user",
          "text": "Also, one of us is vegetarian. Do you have good options?",
          "translations": {
            "ko": "또한, 우리 중 한 명은 채식주의자입니다. 좋은 메뉴가 있나요?",
            "zh": "另外，我们中有一个人是素食者。你们有好的选择吗？",
            "ja": "また、私たちの中にはベジタリアンの方がいます。良い選択肢はありますか？",
            "vi": "Ngoài ra, một trong chúng tôi là người ăn chay. Bạn có lựa chọn tốt không?",
            "en": "Also, one of us is vegetarian. Do you have good options?"
          }
        },
        {
          "role": "ai",
          "text": "Absolutely. We have several vegetarian and vegan dishes.",
          "translations": {
            "ko": "네, 저희는 다양한 채식주의자와 비건 요리를 제공하고 있습니다.",
            "zh": "当然。我们有几道素食和纯素的菜品。",
            "ja": "もちろんです。ベジタリアンやビーガン向けの料理も多数ご用意しております。",
            "vi": "Chắc chắn. Chúng tôi có nhiều món ăn chay và thuần chay.",
            "en": "Absolutely. We have several vegetarian and vegan dishes."
          }
        },
        {
          "role": "user",
          "text": "Perfect. Could we come around 7 PM?",
          "translations": {
            "ko": "완벽합니다. 7시쯤 오면 될까요?",
            "zh": "太好了。我们可以在7点左右过来吗？",
            "ja": "完璧です。7時頃に行くことは可能でしょうか？",
            "vi": "Hoàn hảo. Chúng tôi có thể đến vào khoảng 7 giờ tối không?",
            "en": "Perfect. Could we come around 7 PM?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, we have availability at 7 PM. I’ve booked it.",
          "translations": {
            "ko": "네, 7시에 예약 가능합니다. 예약해 드렸습니다.",
            "zh": "是的，我们在7点有空位。我已经为您预订了。",
            "ja": "はい、7時に空席がございます。予約を入れました。",
            "vi": "Có, chúng tôi còn chỗ vào lúc 7 giờ tối. Tôi đã đặt cho bạn.",
            "en": "Yes, we have availability at 7 PM. I’ve booked it."
          }
        },
        {
          "role": "user",
          "text": "Great. Can I leave a contact number?",
          "translations": {
            "ko": "연락처를 남길 수 있을까요?",
            "zh": "太好了。我可以留一个联系电话吗？",
            "ja": "連絡先の電話番号を残してもよろしいですか？",
            "vi": "Tuyệt. Tôi có thể để lại số liên lạc không?",
            "en": "Great. Can I leave a contact number?"
          }
        },
        {
          "role": "ai",
          "text": "Sure, please go ahead.",
          "translations": {
            "ko": "네, 말씀해주세요.",
            "zh": "当然，您说吧。",
            "ja": "はい、どうぞお伝えください。",
            "vi": "Chắc chắn, xin vui lòng tiếp tục.",
            "en": "Sure, please go ahead."
          }
        },
        {
          "role": "user",
          "text": "It’s 555-238-7410.",
          "translations": {
            "ko": "555-238-7410입니다.",
            "zh": "是555-238-7410。",
            "ja": "555-238-7410です。",
            "vi": "Số của tôi là 555-238-7410.",
            "en": "It’s 555-238-7410."
          }
        },
        {
          "role": "ai",
          "text": "Got it. Your table is confirmed for 7 PM Friday.",
          "translations": {
            "ko": "알겠습니다. 금요일 7시에 테이블 예약이 확정되었습니다.",
            "zh": "收到。您的桌子已经预订在周五晚上7点。",
            "ja": "承知しました。金曜日の7時にテーブルを確保しました。",
            "vi": "Được rồi. Bàn của bạn đã được xác nhận vào lúc 7 giờ tối thứ Sáu.",
            "en": "Got it. Your table is confirmed for 7 PM Friday."
          }
        },
        {
          "role": "user",
          "text": "Thank you very much.",
          "translations": {
            "ko": "정말 감사합니다.",
            "zh": "非常感谢。",
            "ja": "どうもありがとうございます。",
            "vi": "Cảm ơn rất nhiều.",
            "en": "Thank you very much."
          }
        },
        {
          "role": "ai",
          "text": "We look forward to serving you.",
          "translations": {
            "ko": "저희가 모시게 되어 기쁩니다.",
            "zh": "我们期待为您服务。",
            "ja": "お客様にお会いできるのを楽しみにしております。",
            "vi": "Chúng tôi mong được phục vụ bạn.",
            "en": "We look forward to serving you."
          }
        },
        {
          "role": "user",
          "text": "See you then!",
          "translations": {
            "ko": "그때 뵙겠습니다!",
            "zh": "到时见！",
            "ja": "それでは、その時に！",
            "vi": "Hẹn gặp lại!",
            "en": "See you then!"
          }
        },
        {
          "role": "ai",
          "text": "Have a great day.",
          "translations": {
            "ko": "좋은 하루 보내세요.",
            "zh": "祝您有美好的一天。",
            "ja": "素晴らしい一日を。",
            "vi": "Chúc bạn một ngày tốt lành.",
            "en": "Have a great day."
          }
        },
        {
          "role": "user",
          "text": "You too!",
          "translations": {
            "ko": "당신도요!",
            "zh": "您也是！",
            "ja": "あなたも！",
            "vi": "Bạn cũng vậy!",
            "en": "You too!"
          }
        }
      ]
    },
    {
      "description": {
        "en": "Ordering in a fine-dining restaurant",
        "ko": "고급 레스토랑에서 주문하기",
        "zh": "在高级餐厅点餐",
        "ja": "ファインダイニングレストランでの注文",
        "vi": "Đặt món ở nhà hàng ăn uống cao cấp"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Good evening, thank you for calling The Olive Garden.",
          "translations": {
            "ko": "안녕하십니까, 올리브 가든에 전화해 주셔서 감사합니다.",
            "zh": "晚上好，感谢您致电Olive Garden。",
            "ja": "こんばんは、オリーブガーデンへお電話いただきありがとうございます。",
            "vi": "Chào buổi tối, cảm ơn bạn đã gọi đến The Olive Garden.",
            "en": "Good evening, thank you for calling The Olive Garden."
          }
        },
        {
          "role": "user",
          "text": "Hi, I’d like to make a reservation for Friday night.",
          "translations": {
            "ko": "안녕하세요, 금요일 밤에 예약하고 싶습니다.",
            "zh": "嗨，我想预订周五晚上的位置。",
            "ja": "こんにちは、金曜日の夜に予約をしたいのですが。",
            "vi": "Chào, tôi muốn đặt chỗ vào tối thứ Sáu.",
            "en": "Hi, I’d like to make a reservation for Friday night."
          }
        },
        {
          "role": "ai",
          "text": "Certainly. How many people will be in your party?",
          "translations": {
            "ko": "알겠습니다. 몇 명이 오실 예정인가요?",
            "zh": "当然。请问您有多少人？",
            "ja": "かしこまりました。何名様でしょうか？",
            "vi": "Chắc chắn. Bạn sẽ có bao nhiêu người?",
            "en": "Certainly. How many people will be in your party?"
          }
        },
        {
          "role": "user",
          "text": "There will be four of us.",
          "translations": {
            "ko": "우리는 4명입니다.",
            "zh": "我们有四个人。",
            "ja": "私たちは4人です。",
            "vi": "Chúng tôi sẽ có bốn người.",
            "en": "There will be four of us."
          }
        },
        {
          "role": "ai",
          "text": "Do you prefer indoor or outdoor seating?",
          "translations": {
            "ko": "실내 좌석과 실외 좌석 중 어느 것을 선호하십니까?",
            "zh": "您喜欢室内还是室外的座位？",
            "ja": "室内席と屋外席、どちらがよろしいですか？",
            "vi": "Bạn thích ngồi trong nhà hay ngoài trời?",
            "en": "Do you prefer indoor or outdoor seating?"
          }
        },
        {
          "role": "user",
          "text": "Indoor, near the window if possible.",
          "translations": {
            "ko": "가능하다면 창가에 있는 실내 좌석을 원합니다.",
            "zh": "室内的，如果可能的话，靠窗户的位置。",
            "ja": "可能であれば窓際の室内席を希望します。",
            "vi": "Trong nhà, gần cửa sổ nếu có thể.",
            "en": "Indoor, near the window if possible."
          }
        },
        {
          "role": "ai",
          "text": "We’ll do our best to accommodate that.",
          "translations": {
            "ko": "최대한 맞춰드리겠습니다.",
            "zh": "我们会尽力满足您的要求。",
            "ja": "その席をご用意できるよう最善を尽くします。",
            "vi": "Chúng tôi sẽ cố gắng đáp ứng yêu cầu đó.",
            "en": "We’ll do our best to accommodate that."
          }
        },
        {
          "role": "user",
          "text": "Also, one of us is vegetarian. Do you have good options?",
          "translations": {
            "ko": "또한, 우리 중 한 명은 채식주의자입니다. 좋은 메뉴가 있나요?",
            "zh": "另外，我们中有一个人是素食者。你们有好的选择吗？",
            "ja": "また、私たちの中にはベジタリアンの方がいます。良い選択肢はありますか？",
            "vi": "Ngoài ra, một trong chúng tôi là người ăn chay. Bạn có lựa chọn tốt không?",
            "en": "Also, one of us is vegetarian. Do you have good options?"
          }
        },
        {
          "role": "ai",
          "text": "Absolutely. We have several vegetarian and vegan dishes.",
          "translations": {
            "ko": "네, 저희는 다양한 채식주의자와 비건 요리를 제공하고 있습니다.",
            "zh": "当然。我们有几道素食和纯素的菜品。",
            "ja": "もちろんです。ベジタリアンやビーガン向けの料理も多数ご用意しております。",
            "vi": "Chắc chắn. Chúng tôi có nhiều món ăn chay và thuần chay.",
            "en": "Absolutely. We have several vegetarian and vegan dishes."
          }
        },
        {
          "role": "user",
          "text": "Perfect. Could we come around 7 PM?",
          "translations": {
            "ko": "완벽합니다. 7시쯤 오면 될까요?",
            "zh": "太好了。我们可以在7点左右过来吗？",
            "ja": "完璧です。7時頃に行くことは可能でしょうか？",
            "vi": "Hoàn hảo. Chúng tôi có thể đến vào khoảng 7 giờ tối không?",
            "en": "Perfect. Could we come around 7 PM?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, we have availability at 7 PM. I’ve booked it.",
          "translations": {
            "ko": "네, 7시에 예약 가능합니다. 예약해 드렸습니다.",
            "zh": "是的，我们在7点有空位。我已经为您预订了。",
            "ja": "はい、7時に空席がございます。予約を入れました。",
            "vi": "Có, chúng tôi còn chỗ vào lúc 7 giờ tối. Tôi đã đặt cho bạn.",
            "en": "Yes, we have availability at 7 PM. I’ve booked it."
          }
        },
        {
          "role": "user",
          "text": "Great. Can I leave a contact number?",
          "translations": {
            "ko": "연락처를 남길 수 있을까요?",
            "zh": "太好了。我可以留一个联系电话吗？",
            "ja": "連絡先の電話番号を残してもよろしいですか？",
            "vi": "Tuyệt. Tôi có thể để lại số liên lạc không?",
            "en": "Great. Can I leave a contact number?"
          }
        },
        {
          "role": "ai",
          "text": "Sure, please go ahead.",
          "translations": {
            "ko": "네, 말씀해주세요.",
            "zh": "当然，您说吧。",
            "ja": "はい、どうぞお伝えください。",
            "vi": "Chắc chắn, xin vui lòng tiếp tục.",
            "en": "Sure, please go ahead."
          }
        },
        {
          "role": "user",
          "text": "It’s 555-238-7410.",
          "translations": {
            "ko": "555-238-7410입니다.",
            "zh": "是555-238-7410。",
            "ja": "555-238-7410です。",
            "vi": "Số của tôi là 555-238-7410.",
            "en": "It’s 555-238-7410."
          }
        },
        {
          "role": "ai",
          "text": "Got it. Your table is confirmed for 7 PM Friday.",
          "translations": {
            "ko": "알겠습니다. 금요일 7시에 테이블 예약이 확정되었습니다.",
            "zh": "收到。您的桌子已经预订在周五晚上7点。",
            "ja": "承知しました。金曜日の7時にテーブルを確保しました。",
            "vi": "Được rồi. Bàn của bạn đã được xác nhận vào lúc 7 giờ tối thứ Sáu.",
            "en": "Got it. Your table is confirmed for 7 PM Friday."
          }
        },
        {
          "role": "user",
          "text": "Thank you very much.",
          "translations": {
            "ko": "정말 감사합니다.",
            "zh": "非常感谢。",
            "ja": "どうもありがとうございます。",
            "vi": "Cảm ơn rất nhiều.",
            "en": "Thank you very much."
          }
        },
        {
          "role": "ai",
          "text": "We look forward to serving you.",
          "translations": {
            "ko": "저희가 모시게 되어 기쁩니다.",
            "zh": "我们期待为您服务。",
            "ja": "お客様にお会いできるのを楽しみにしております。",
            "vi": "Chúng tôi mong được phục vụ bạn.",
            "en": "We look forward to serving you."
          }
        },
        {
          "role": "user",
          "text": "See you then!",
          "translations": {
            "ko": "그때 뵙겠습니다!",
            "zh": "到时见！",
            "ja": "それでは、その時に！",
            "vi": "Hẹn gặp lại!",
            "en": "See you then!"
          }
        },
        {
          "role": "ai",
          "text": "Have a great day.",
          "translations": {
            "ko": "좋은 하루 보내세요.",
            "zh": "祝您有美好的一天。",
            "ja": "素晴らしい一日を。",
            "vi": "Chúc bạn một ngày tốt lành.",
            "en": "Have a great day."
          }
        },
        {
          "role": "user",
          "text": "You too!",
          "translations": {
            "ko": "당신도요!",
            "zh": "您也是！",
            "ja": "あなたも！",
            "vi": "Bạn cũng vậy!",
            "en": "You too!"
          }
        }
      ]
    },
    {
      "description": {
        "en": "Handling a billing error",
        "ko": "청구 오류 처리하기",
        "zh": "处理账单错误",
        "ja": "請求エラーの対応",
        "vi": "Xử lý lỗi thanh toán"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Good evening, thank you for calling The Olive Garden.",
          "translations": {
            "ko": "안녕하십니까, 올리브 가든에 전화해 주셔서 감사합니다.",
            "zh": "晚上好，感谢您致电Olive Garden。",
            "ja": "こんばんは、オリーブガーデンへお電話いただきありがとうございます。",
            "vi": "Chào buổi tối, cảm ơn bạn đã gọi đến The Olive Garden.",
            "en": "Good evening, thank you for calling The Olive Garden."
          }
        },
        {
          "role": "user",
          "text": "Hi, I’d like to make a reservation for Friday night.",
          "translations": {
            "ko": "안녕하세요, 금요일 밤에 예약하고 싶습니다.",
            "zh": "嗨，我想预订周五晚上的位置。",
            "ja": "こんにちは、金曜日の夜に予約をしたいのですが。",
            "vi": "Chào, tôi muốn đặt chỗ vào tối thứ Sáu.",
            "en": "Hi, I’d like to make a reservation for Friday night."
          }
        },
        {
          "role": "ai",
          "text": "Certainly. How many people will be in your party?",
          "translations": {
            "ko": "알겠습니다. 몇 명이 오실 예정인가요?",
            "zh": "当然。请问您有多少人？",
            "ja": "かしこまりました。何名様でしょうか？",
            "vi": "Chắc chắn. Bạn sẽ có bao nhiêu người?",
            "en": "Certainly. How many people will be in your party?"
          }
        },
        {
          "role": "user",
          "text": "There will be four of us.",
          "translations": {
            "ko": "우리는 4명입니다.",
            "zh": "我们有四个人。",
            "ja": "私たちは4人です。",
            "vi": "Chúng tôi sẽ có bốn người.",
            "en": "There will be four of us."
          }
        },
        {
          "role": "ai",
          "text": "Do you prefer indoor or outdoor seating?",
          "translations": {
            "ko": "실내 좌석과 실외 좌석 중 어느 것을 선호하십니까?",
            "zh": "您喜欢室内还是室外的座位？",
            "ja": "室内席と屋外席、どちらがよろしいですか？",
            "vi": "Bạn thích ngồi trong nhà hay ngoài trời?",
            "en": "Do you prefer indoor or outdoor seating?"
          }
        },
        {
          "role": "user",
          "text": "Indoor, near the window if possible.",
          "translations": {
            "ko": "가능하다면 창가에 있는 실내 좌석을 원합니다.",
            "zh": "室内的，如果可能的话，靠窗户的位置。",
            "ja": "可能であれば窓際の室内席を希望します。",
            "vi": "Trong nhà, gần cửa sổ nếu có thể.",
            "en": "Indoor, near the window if possible."
          }
        },
        {
          "role": "ai",
          "text": "We’ll do our best to accommodate that.",
          "translations": {
            "ko": "최대한 맞춰드리겠습니다.",
            "zh": "我们会尽力满足您的要求。",
            "ja": "その席をご用意できるよう最善を尽くします。",
            "vi": "Chúng tôi sẽ cố gắng đáp ứng yêu cầu đó.",
            "en": "We’ll do our best to accommodate that."
          }
        },
        {
          "role": "user",
          "text": "Also, one of us is vegetarian. Do you have good options?",
          "translations": {
            "ko": "또한, 우리 중 한 명은 채식주의자입니다. 좋은 메뉴가 있나요?",
            "zh": "另外，我们中有一个人是素食者。你们有好的选择吗？",
            "ja": "また、私たちの中にはベジタリアンの方がいます。良い選択肢はありますか？",
            "vi": "Ngoài ra, một trong chúng tôi là người ăn chay. Bạn có lựa chọn tốt không?",
            "en": "Also, one of us is vegetarian. Do you have good options?"
          }
        },
        {
          "role": "ai",
          "text": "Absolutely. We have several vegetarian and vegan dishes.",
          "translations": {
            "ko": "네, 저희는 다양한 채식주의자와 비건 요리를 제공하고 있습니다.",
            "zh": "当然。我们有几道素食和纯素的菜品。",
            "ja": "もちろんです。ベジタリアンやビーガン向けの料理も多数ご用意しております。",
            "vi": "Chắc chắn. Chúng tôi có nhiều món ăn chay và thuần chay.",
            "en": "Absolutely. We have several vegetarian and vegan dishes."
          }
        },
        {
          "role": "user",
          "text": "Perfect. Could we come around 7 PM?",
          "translations": {
            "ko": "완벽합니다. 7시쯤 오면 될까요?",
            "zh": "太好了。我们可以在7点左右过来吗？",
            "ja": "完璧です。7時頃に行くことは可能でしょうか？",
            "vi": "Hoàn hảo. Chúng tôi có thể đến vào khoảng 7 giờ tối không?",
            "en": "Perfect. Could we come around 7 PM?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, we have availability at 7 PM. I’ve booked it.",
          "translations": {
            "ko": "네, 7시에 예약 가능합니다. 예약해 드렸습니다.",
            "zh": "是的，我们在7点有空位。我已经为您预订了。",
            "ja": "はい、7時に空席がございます。予約を入れました。",
            "vi": "Có, chúng tôi còn chỗ vào lúc 7 giờ tối. Tôi đã đặt cho bạn.",
            "en": "Yes, we have availability at 7 PM. I’ve booked it."
          }
        },
        {
          "role": "user",
          "text": "Great. Can I leave a contact number?",
          "translations": {
            "ko": "연락처를 남길 수 있을까요?",
            "zh": "太好了。我可以留一个联系电话吗？",
            "ja": "連絡先の電話番号を残してもよろしいですか？",
            "vi": "Tuyệt. Tôi có thể để lại số liên lạc không?",
            "en": "Great. Can I leave a contact number?"
          }
        },
        {
          "role": "ai",
          "text": "Sure, please go ahead.",
          "translations": {
            "ko": "네, 말씀해주세요.",
            "zh": "当然，您说吧。",
            "ja": "はい、どうぞお伝えください。",
            "vi": "Chắc chắn, xin vui lòng tiếp tục.",
            "en": "Sure, please go ahead."
          }
        },
        {
          "role": "user",
          "text": "It’s 555-238-7410.",
          "translations": {
            "ko": "555-238-7410입니다.",
            "zh": "是555-238-7410。",
            "ja": "555-238-7410です。",
            "vi": "Số của tôi là 555-238-7410.",
            "en": "It’s 555-238-7410."
          }
        },
        {
          "role": "ai",
          "text": "Got it. Your table is confirmed for 7 PM Friday.",
          "translations": {
            "ko": "알겠습니다. 금요일 7시에 테이블 예약이 확정되었습니다.",
            "zh": "收到。您的桌子已经预订在周五晚上7点。",
            "ja": "承知しました。金曜日の7時にテーブルを確保しました。",
            "vi": "Được rồi. Bàn của bạn đã được xác nhận vào lúc 7 giờ tối thứ Sáu.",
            "en": "Got it. Your table is confirmed for 7 PM Friday."
          }
        },
        {
          "role": "user",
          "text": "Thank you very much.",
          "translations": {
            "ko": "정말 감사합니다.",
            "zh": "非常感谢。",
            "ja": "どうもありがとうございます。",
            "vi": "Cảm ơn rất nhiều.",
            "en": "Thank you very much."
          }
        },
        {
          "role": "ai",
          "text": "We look forward to serving you.",
          "translations": {
            "ko": "저희가 모시게 되어 기쁩니다.",
            "zh": "我们期待为您服务。",
            "ja": "お客様にお会いできるのを楽しみにしております。",
            "vi": "Chúng tôi mong được phục vụ bạn.",
            "en": "We look forward to serving you."
          }
        },
        {
          "role": "user",
          "text": "See you then!",
          "translations": {
            "ko": "그때 뵙겠습니다!",
            "zh": "到时见！",
            "ja": "それでは、その時に！",
            "vi": "Hẹn gặp lại!",
            "en": "See you then!"
          }
        },
        {
          "role": "ai",
          "text": "Have a great day.",
          "translations": {
            "ko": "좋은 하루 보내세요.",
            "zh": "祝您有美好的一天。",
            "ja": "素晴らしい一日を。",
            "vi": "Chúc bạn một ngày tốt lành.",
            "en": "Have a great day."
          }
        },
        {
          "role": "user",
          "text": "You too!",
          "translations": {
            "ko": "당신도요!",
            "zh": "您也是！",
            "ja": "あなたも！",
            "vi": "Bạn cũng vậy!",
            "en": "You too!"
          }
        }
      ]
    },
    {
      "description": {
        "en": "Complimenting the service",
        "ko": "서비스 칭찬하기",
        "zh": "表扬服务",
        "ja": "サービスの賛辞",
        "vi": "Khen ngợi dịch vụ"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Good evening, thank you for calling The Olive Garden.",
          "translations": {
            "ko": "안녕하십니까, 올리브 가든에 전화해 주셔서 감사합니다.",
            "zh": "晚上好，感谢您致电Olive Garden。",
            "ja": "こんばんは、オリーブガーデンへお電話いただきありがとうございます。",
            "vi": "Chào buổi tối, cảm ơn bạn đã gọi đến The Olive Garden.",
            "en": "Good evening, thank you for calling The Olive Garden."
          }
        },
        {
          "role": "user",
          "text": "Hi, I’d like to make a reservation for Friday night.",
          "translations": {
            "ko": "안녕하세요, 금요일 밤에 예약하고 싶습니다.",
            "zh": "嗨，我想预订周五晚上的位置。",
            "ja": "こんにちは、金曜日の夜に予約をしたいのですが。",
            "vi": "Chào, tôi muốn đặt chỗ vào tối thứ Sáu.",
            "en": "Hi, I’d like to make a reservation for Friday night."
          }
        },
        {
          "role": "ai",
          "text": "Certainly. How many people will be in your party?",
          "translations": {
            "ko": "알겠습니다. 몇 명이 오실 예정인가요?",
            "zh": "当然。请问您有多少人？",
            "ja": "かしこまりました。何名様でしょうか？",
            "vi": "Chắc chắn. Bạn sẽ có bao nhiêu người?",
            "en": "Certainly. How many people will be in your party?"
          }
        },
        {
          "role": "user",
          "text": "There will be four of us.",
          "translations": {
            "ko": "우리는 4명입니다.",
            "zh": "我们有四个人。",
            "ja": "私たちは4人です。",
            "vi": "Chúng tôi sẽ có bốn người.",
            "en": "There will be four of us."
          }
        },
        {
          "role": "ai",
          "text": "Do you prefer indoor or outdoor seating?",
          "translations": {
            "ko": "실내 좌석과 실외 좌석 중 어느 것을 선호하십니까?",
            "zh": "您喜欢室内还是室外的座位？",
            "ja": "室内席と屋外席、どちらがよろしいですか？",
            "vi": "Bạn thích ngồi trong nhà hay ngoài trời?",
            "en": "Do you prefer indoor or outdoor seating?"
          }
        },
        {
          "role": "user",
          "text": "Indoor, near the window if possible.",
          "translations": {
            "ko": "가능하다면 창가에 있는 실내 좌석을 원합니다.",
            "zh": "室内的，如果可能的话，靠窗户的位置。",
            "ja": "可能であれば窓際の室内席を希望します。",
            "vi": "Trong nhà, gần cửa sổ nếu có thể.",
            "en": "Indoor, near the window if possible."
          }
        },
        {
          "role": "ai",
          "text": "We’ll do our best to accommodate that.",
          "translations": {
            "ko": "최대한 맞춰드리겠습니다.",
            "zh": "我们会尽力满足您的要求。",
            "ja": "その席をご用意できるよう最善を尽くします。",
            "vi": "Chúng tôi sẽ cố gắng đáp ứng yêu cầu đó.",
            "en": "We’ll do our best to accommodate that."
          }
        },
        {
          "role": "user",
          "text": "Also, one of us is vegetarian. Do you have good options?",
          "translations": {
            "ko": "또한, 우리 중 한 명은 채식주의자입니다. 좋은 메뉴가 있나요?",
            "zh": "另外，我们中有一个人是素食者。你们有好的选择吗？",
            "ja": "また、私たちの中にはベジタリアンの方がいます。良い選択肢はありますか？",
            "vi": "Ngoài ra, một trong chúng tôi là người ăn chay. Bạn có lựa chọn tốt không?",
            "en": "Also, one of us is vegetarian. Do you have good options?"
          }
        },
        {
          "role": "ai",
          "text": "Absolutely. We have several vegetarian and vegan dishes.",
          "translations": {
            "ko": "네, 저희는 다양한 채식주의자와 비건 요리를 제공하고 있습니다.",
            "zh": "当然。我们有几道素食和纯素的菜品。",
            "ja": "もちろんです。ベジタリアンやビーガン向けの料理も多数ご用意しております。",
            "vi": "Chắc chắn. Chúng tôi có nhiều món ăn chay và thuần chay.",
            "en": "Absolutely. We have several vegetarian and vegan dishes."
          }
        },
        {
          "role": "user",
          "text": "Perfect. Could we come around 7 PM?",
          "translations": {
            "ko": "완벽합니다. 7시쯤 오면 될까요?",
            "zh": "太好了。我们可以在7点左右过来吗？",
            "ja": "完璧です。7時頃に行くことは可能でしょうか？",
            "vi": "Hoàn hảo. Chúng tôi có thể đến vào khoảng 7 giờ tối không?",
            "en": "Perfect. Could we come around 7 PM?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, we have availability at 7 PM. I’ve booked it.",
          "translations": {
            "ko": "네, 7시에 예약 가능합니다. 예약해 드렸습니다.",
            "zh": "是的，我们在7点有空位。我已经为您预订了。",
            "ja": "はい、7時に空席がございます。予約を入れました。",
            "vi": "Có, chúng tôi còn chỗ vào lúc 7 giờ tối. Tôi đã đặt cho bạn.",
            "en": "Yes, we have availability at 7 PM. I’ve booked it."
          }
        },
        {
          "role": "user",
          "text": "Great. Can I leave a contact number?",
          "translations": {
            "ko": "연락처를 남길 수 있을까요?",
            "zh": "太好了。我可以留一个联系电话吗？",
            "ja": "連絡先の電話番号を残してもよろしいですか？",
            "vi": "Tuyệt. Tôi có thể để lại số liên lạc không?",
            "en": "Great. Can I leave a contact number?"
          }
        },
        {
          "role": "ai",
          "text": "Sure, please go ahead.",
          "translations": {
            "ko": "네, 말씀해주세요.",
            "zh": "当然，您说吧。",
            "ja": "はい、どうぞお伝えください。",
            "vi": "Chắc chắn, xin vui lòng tiếp tục.",
            "en": "Sure, please go ahead."
          }
        },
        {
          "role": "user",
          "text": "It’s 555-238-7410.",
          "translations": {
            "ko": "555-238-7410입니다.",
            "zh": "是555-238-7410。",
            "ja": "555-238-7410です。",
            "vi": "Số của tôi là 555-238-7410.",
            "en": "It’s 555-238-7410."
          }
        },
        {
          "role": "ai",
          "text": "Got it. Your table is confirmed for 7 PM Friday.",
          "translations": {
            "ko": "알겠습니다. 금요일 7시에 테이블 예약이 확정되었습니다.",
            "zh": "收到。您的桌子已经预订在周五晚上7点。",
            "ja": "承知しました。金曜日の7時にテーブルを確保しました。",
            "vi": "Được rồi. Bàn của bạn đã được xác nhận vào lúc 7 giờ tối thứ Sáu.",
            "en": "Got it. Your table is confirmed for 7 PM Friday."
          }
        },
        {
          "role": "user",
          "text": "Thank you very much.",
          "translations": {
            "ko": "정말 감사합니다.",
            "zh": "非常感谢。",
            "ja": "どうもありがとうございます。",
            "vi": "Cảm ơn rất nhiều.",
            "en": "Thank you very much."
          }
        },
        {
          "role": "ai",
          "text": "We look forward to serving you.",
          "translations": {
            "ko": "저희가 모시게 되어 기쁩니다.",
            "zh": "我们期待为您服务。",
            "ja": "お客様にお会いできるのを楽しみにしております。",
            "vi": "Chúng tôi mong được phục vụ bạn.",
            "en": "We look forward to serving you."
          }
        },
        {
          "role": "user",
          "text": "See you then!",
          "translations": {
            "ko": "그때 뵙겠습니다!",
            "zh": "到时见！",
            "ja": "それでは、その時に！",
            "vi": "Hẹn gặp lại!",
            "en": "See you then!"
          }
        },
        {
          "role": "ai",
          "text": "Have a great day.",
          "translations": {
            "ko": "좋은 하루 보내세요.",
            "zh": "祝您有美好的一天。",
            "ja": "素晴らしい一日を。",
            "vi": "Chúc bạn một ngày tốt lành.",
            "en": "Have a great day."
          }
        },
        {
          "role": "user",
          "text": "You too!",
          "translations": {
            "ko": "당신도요!",
            "zh": "您也是！",
            "ja": "あなたも！",
            "vi": "Bạn cũng vậy!",
            "en": "You too!"
          }
        }
      ]
    },
    {
      "description": {
        "en": "Requesting group split payment",
        "ko": "그룹 결제 분할 요청하기",
        "zh": "请求团体分开付款",
        "ja": "グループでの支払い分割のリクエスト",
        "vi": "Yêu cầu thanh toán chia nhóm"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Good evening, thank you for calling The Olive Garden.",
          "translations": {
            "ko": "안녕하십니까, 올리브 가든에 전화해 주셔서 감사합니다.",
            "zh": "晚上好，感谢您致电Olive Garden。",
            "ja": "こんばんは、オリーブガーデンへお電話いただきありがとうございます。",
            "vi": "Chào buổi tối, cảm ơn bạn đã gọi đến The Olive Garden.",
            "en": "Good evening, thank you for calling The Olive Garden."
          }
        },
        {
          "role": "user",
          "text": "Hi, I’d like to make a reservation for Friday night.",
          "translations": {
            "ko": "안녕하세요, 금요일 밤에 예약하고 싶습니다.",
            "zh": "嗨，我想预订周五晚上的位置。",
            "ja": "こんにちは、金曜日の夜に予約をしたいのですが。",
            "vi": "Chào, tôi muốn đặt chỗ vào tối thứ Sáu.",
            "en": "Hi, I’d like to make a reservation for Friday night."
          }
        },
        {
          "role": "ai",
          "text": "Certainly. How many people will be in your party?",
          "translations": {
            "ko": "알겠습니다. 몇 명이 오실 예정인가요?",
            "zh": "当然。请问您有多少人？",
            "ja": "かしこまりました。何名様でしょうか？",
            "vi": "Chắc chắn. Bạn sẽ có bao nhiêu người?",
            "en": "Certainly. How many people will be in your party?"
          }
        },
        {
          "role": "user",
          "text": "There will be four of us.",
          "translations": {
            "ko": "우리는 4명입니다.",
            "zh": "我们有四个人。",
            "ja": "私たちは4人です。",
            "vi": "Chúng tôi sẽ có bốn người.",
            "en": "There will be four of us."
          }
        },
        {
          "role": "ai",
          "text": "Do you prefer indoor or outdoor seating?",
          "translations": {
            "ko": "실내 좌석과 실외 좌석 중 어느 것을 선호하십니까?",
            "zh": "您喜欢室内还是室外的座位？",
            "ja": "室内席と屋外席、どちらがよろしいですか？",
            "vi": "Bạn thích ngồi trong nhà hay ngoài trời?",
            "en": "Do you prefer indoor or outdoor seating?"
          }
        },
        {
          "role": "user",
          "text": "Indoor, near the window if possible.",
          "translations": {
            "ko": "가능하다면 창가에 있는 실내 좌석을 원합니다.",
            "zh": "室内的，如果可能的话，靠窗户的位置。",
            "ja": "可能であれば窓際の室内席を希望します。",
            "vi": "Trong nhà, gần cửa sổ nếu có thể.",
            "en": "Indoor, near the window if possible."
          }
        },
        {
          "role": "ai",
          "text": "We’ll do our best to accommodate that.",
          "translations": {
            "ko": "최대한 맞춰드리겠습니다.",
            "zh": "我们会尽力满足您的要求。",
            "ja": "その席をご用意できるよう最善を尽くします。",
            "vi": "Chúng tôi sẽ cố gắng đáp ứng yêu cầu đó.",
            "en": "We’ll do our best to accommodate that."
          }
        },
        {
          "role": "user",
          "text": "Also, one of us is vegetarian. Do you have good options?",
          "translations": {
            "ko": "또한, 우리 중 한 명은 채식주의자입니다. 좋은 메뉴가 있나요?",
            "zh": "另外，我们中有一个人是素食者。你们有好的选择吗？",
            "ja": "また、私たちの中にはベジタリアンの方がいます。良い選択肢はありますか？",
            "vi": "Ngoài ra, một trong chúng tôi là người ăn chay. Bạn có lựa chọn tốt không?",
            "en": "Also, one of us is vegetarian. Do you have good options?"
          }
        },
        {
          "role": "ai",
          "text": "Absolutely. We have several vegetarian and vegan dishes.",
          "translations": {
            "ko": "네, 저희는 다양한 채식주의자와 비건 요리를 제공하고 있습니다.",
            "zh": "当然。我们有几道素食和纯素的菜品。",
            "ja": "もちろんです。ベジタリアンやビーガン向けの料理も多数ご用意しております。",
            "vi": "Chắc chắn. Chúng tôi có nhiều món ăn chay và thuần chay.",
            "en": "Absolutely. We have several vegetarian and vegan dishes."
          }
        },
        {
          "role": "user",
          "text": "Perfect. Could we come around 7 PM?",
          "translations": {
            "ko": "완벽합니다. 7시쯤 오면 될까요?",
            "zh": "太好了。我们可以在7点左右过来吗？",
            "ja": "完璧です。7時頃に行くことは可能でしょうか？",
            "vi": "Hoàn hảo. Chúng tôi có thể đến vào khoảng 7 giờ tối không?",
            "en": "Perfect. Could we come around 7 PM?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, we have availability at 7 PM. I’ve booked it.",
          "translations": {
            "ko": "네, 7시에 예약 가능합니다. 예약해 드렸습니다.",
            "zh": "是的，我们在7点有空位。我已经为您预订了。",
            "ja": "はい、7時に空席がございます。予約を入れました。",
            "vi": "Có, chúng tôi còn chỗ vào lúc 7 giờ tối. Tôi đã đặt cho bạn.",
            "en": "Yes, we have availability at 7 PM. I’ve booked it."
          }
        },
        {
          "role": "user",
          "text": "Great. Can I leave a contact number?",
          "translations": {
            "ko": "연락처를 남길 수 있을까요?",
            "zh": "太好了。我可以留一个联系电话吗？",
            "ja": "連絡先の電話番号を残してもよろしいですか？",
            "vi": "Tuyệt. Tôi có thể để lại số liên lạc không?",
            "en": "Great. Can I leave a contact number?"
          }
        },
        {
          "role": "ai",
          "text": "Sure, please go ahead.",
          "translations": {
            "ko": "네, 말씀해주세요.",
            "zh": "当然，您说吧。",
            "ja": "はい、どうぞお伝えください。",
            "vi": "Chắc chắn, xin vui lòng tiếp tục.",
            "en": "Sure, please go ahead."
          }
        },
        {
          "role": "user",
          "text": "It’s 555-238-7410.",
          "translations": {
            "ko": "555-238-7410입니다.",
            "zh": "是555-238-7410。",
            "ja": "555-238-7410です。",
            "vi": "Số của tôi là 555-238-7410.",
            "en": "It’s 555-238-7410."
          }
        },
        {
          "role": "ai",
          "text": "Got it. Your table is confirmed for 7 PM Friday.",
          "translations": {
            "ko": "알겠습니다. 금요일 7시에 테이블 예약이 확정되었습니다.",
            "zh": "收到。您的桌子已经预订在周五晚上7点。",
            "ja": "承知しました。金曜日の7時にテーブルを確保しました。",
            "vi": "Được rồi. Bàn của bạn đã được xác nhận vào lúc 7 giờ tối thứ Sáu.",
            "en": "Got it. Your table is confirmed for 7 PM Friday."
          }
        },
        {
          "role": "user",
          "text": "Thank you very much.",
          "translations": {
            "ko": "정말 감사합니다.",
            "zh": "非常感谢。",
            "ja": "どうもありがとうございます。",
            "vi": "Cảm ơn rất nhiều.",
            "en": "Thank you very much."
          }
        },
        {
          "role": "ai",
          "text": "We look forward to serving you.",
          "translations": {
            "ko": "저희가 모시게 되어 기쁩니다.",
            "zh": "我们期待为您服务。",
            "ja": "お客様にお会いできるのを楽しみにしております。",
            "vi": "Chúng tôi mong được phục vụ bạn.",
            "en": "We look forward to serving you."
          }
        },
        {
          "role": "user",
          "text": "See you then!",
          "translations": {
            "ko": "그때 뵙겠습니다!",
            "zh": "到时见！",
            "ja": "それでは、その時に！",
            "vi": "Hẹn gặp lại!",
            "en": "See you then!"
          }
        },
        {
          "role": "ai",
          "text": "Have a great day.",
          "translations": {
            "ko": "좋은 하루 보내세요.",
            "zh": "祝您有美好的一天。",
            "ja": "素晴らしい一日を。",
            "vi": "Chúc bạn một ngày tốt lành.",
            "en": "Have a great day."
          }
        },
        {
          "role": "user",
          "text": "You too!",
          "translations": {
            "ko": "당신도요!",
            "zh": "您也是！",
            "ja": "あなたも！",
            "vi": "Bạn cũng vậy!",
            "en": "You too!"
          }
        }
      ]
    }
  ],
  "advanced": [
    {
      "description": {
        "en": "Making a last-minute reservation at a high-end restaurant",
        "ko": "고급 레스토랑에서 마지막 순간 예약하기",
        "zh": "在高档餐厅做临时预订",
        "ja": "高級レストランでの急な予約",
        "vi": "Đặt chỗ vào phút chót tại nhà hàng cao cấp"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Good evening, this is Le Jardin. How may I assist you?",
          "translations": {
            "ko": "안녕하십니까, 이곳은 르 자르댕입니다. 어떻게 도와드릴까요?",
            "zh": "晚上好，这里是Le Jardin。有什么可以帮助您的吗？",
            "ja": "こんばんは、ル・ジャルダンです。何かお手伝いできることがありますか？",
            "vi": "Chào tối, đây là Le Jardin. Tôi có thể giúp gì cho bạn?",
            "en": "Good evening, this is Le Jardin. How may I assist you?"
          }
        },
        {
          "role": "user",
          "text": "Hi, I’d like to make a last-minute reservation for tonight.",
          "translations": {
            "ko": "안녕하세요, 오늘 밤에 마지막 순간 예약을 하고 싶습니다.",
            "zh": "嗨，我想预订今晚的临时位子。",
            "ja": "こんにちは、今夜の急な予約をしたいのですが。",
            "vi": "Chào, tôi muốn đặt chỗ vào phút chót cho tối nay.",
            "en": "Hi, I’d like to make a last-minute reservation for tonight."
          }
        },
        {
          "role": "ai",
          "text": "Let me check... We have availability at 9:00 PM.",
          "translations": {
            "ko": "확인해보겠습니다... 오늘 밤 9시에 예약 가능합니다.",
            "zh": "让我查一下...我们在晚上9点有空位。",
            "ja": "確認します... 9時に空きがあります。",
            "vi": "Để tôi kiểm tra... Chúng tôi còn chỗ vào lúc 9 giờ tối.",
            "en": "Let me check... We have availability at 9:00 PM."
          }
        },
        {
          "role": "user",
          "text": "That’s perfect. Do you offer tasting menus?",
          "translations": {
            "ko": "완벽합니다. 시식 메뉴를 제공하나요?",
            "zh": "那太好了。你们有品尝菜单吗？",
            "ja": "それで大丈夫です。テイスティングメニューはありますか？",
            "vi": "Hoàn hảo. Bạn có thực đơn thử nếm không?",
            "en": "That’s perfect. Do you offer tasting menus?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, we have a 5-course and a 7-course option.",
          "translations": {
            "ko": "네, 5가지 코스와 7가지 코스를 선택하실 수 있습니다.",
            "zh": "是的，我们有5道菜和7道菜的选择。",
            "ja": "はい、5品と7品のコースがあります。",
            "vi": "Có, chúng tôi có thực đơn 5 món và 7 món.",
            "en": "Yes, we have a 5-course and a 7-course option."
          }
        },
        {
          "role": "user",
          "text": "I’ll go with the 5-course. Can it be modified for allergies?",
          "translations": {
            "ko": "5가지 코스로 할게요. 알레르기에 맞게 변경할 수 있나요?",
            "zh": "我选择5道菜。可以根据过敏情况进行修改吗？",
            "ja": "5品のコースにします。アレルギー対応は可能ですか？",
            "vi": "Tôi sẽ chọn thực đơn 5 món. Có thể điều chỉnh cho người dị ứng không?",
            "en": "I’ll go with the 5-course. Can it be modified for allergies?"
          }
        },
        {
          "role": "ai",
          "text": "Of course. May I ask what the allergy is?",
          "translations": {
            "ko": "물론입니다. 알레르기가 무엇인지 여쭤봐도 될까요?",
            "zh": "当然可以。请问您对什么过敏？",
            "ja": "もちろんです。何のアレルギーがありますか？",
            "vi": "Tất nhiên. Bạn dị ứng với thứ gì?",
            "en": "Of course. May I ask what the allergy is?"
          }
        },
        {
          "role": "user",
          "text": "Shellfish.",
          "translations": {
            "ko": "조개류입니다.",
            "zh": "贝类。",
            "ja": "貝類です。",
            "vi": "Hải sản.",
            "en": "Shellfish."
          }
        },
        {
          "role": "ai",
          "text": "Understood. We’ll substitute accordingly.",
          "translations": {
            "ko": "알겠습니다. 그에 맞게 대체하겠습니다.",
            "zh": "明白了。我们会相应地进行替换。",
            "ja": "了解しました。それに合わせて代替品を用意します。",
            "vi": "Hiểu rồi. Chúng tôi sẽ thay thế phù hợp.",
            "en": "Understood. We’ll substitute accordingly."
          }
        },
        {
          "role": "user",
          "text": "Also, do you have a sommelier available tonight?",
          "translations": {
            "ko": "그리고 오늘 밤에 소믈리에가 있나요?",
            "zh": "另外，今晚有侍酒师在吗？",
            "ja": "また、今夜ソムリエはいますか？",
            "vi": "Ngoài ra, bạn có sommelier phục vụ tối nay không?",
            "en": "Also, do you have a sommelier available tonight?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, our sommelier will assist with pairings.",
          "translations": {
            "ko": "네, 우리 소믈리에가 와인 매칭을 도와드릴 것입니다.",
            "zh": "是的，我们的侍酒师会帮助您配酒。",
            "ja": "はい、ソムリエがペアリングのお手伝いをします。",
            "vi": "Có, sommelier của chúng tôi sẽ giúp bạn ghép đôi.",
            "en": "Yes, our sommelier will assist with pairings."
          }
        },
        {
          "role": "user",
          "text": "Fantastic. Do you offer valet parking?",
          "translations": {
            "ko": "훌륭합니다. 발렛 파킹을 제공하나요?",
            "zh": "太好了。你们提供代客泊车服务吗？",
            "ja": "素晴らしいです。バレーパーキングはありますか？",
            "vi": "Tuyệt vời. Bạn có dịch vụ đỗ xe không?",
            "en": "Fantastic. Do you offer valet parking?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, complimentary for dinner guests.",
          "translations": {
            "ko": "네, 저녁 식사 손님들에게 무료로 제공됩니다.",
            "zh": "是的，晚餐客人免费。",
            "ja": "はい、ディナーのお客様は無料です。",
            "vi": "Có, miễn phí cho khách ăn tối.",
            "en": "Yes, complimentary for dinner guests."
          }
        },
        {
          "role": "user",
          "text": "Excellent. I’d also like a quiet table if possible.",
          "translations": {
            "ko": "좋습니다. 가능하다면 조용한 테이블을 원합니다.",
            "zh": "很好。如果可能的话，我还想要一个安静的桌子。",
            "ja": "素晴らしいです。可能であれば静かな席をお願いします。",
            "vi": "Xuất sắc. Nếu có thể tôi muốn một bàn yên tĩnh.",
            "en": "Excellent. I’d also like a quiet table if possible."
          }
        },
        {
          "role": "ai",
          "text": "We’ll place you in a corner booth.",
          "translations": {
            "ko": "귀하를 코너 부스에 안내하겠습니다.",
            "zh": "我们会为您安排在角落的包厢。",
            "ja": "角のブースにご案内します。",
            "vi": "Chúng tôi sẽ sắp xếp cho bạn một gian bên góc.",
            "en": "We’ll place you in a corner booth."
          }
        },
        {
          "role": "user",
          "text": "Perfect. Please confirm under the name Jessica Park.",
          "translations": {
            "ko": "완벽합니다. 제시카 박 이름으로 확인해 주세요.",
            "zh": "完美。请以Jessica Park的名字确认。",
            "ja": "完璧です。ジェシカ・パークの名前で確認してください。",
            "vi": "Hoàn hảo. Xin hãy xác nhận dưới tên Jessica Park.",
            "en": "Perfect. Please confirm under the name Jessica Park."
          }
        },
        {
          "role": "ai",
          "text": "Confirmed for Jessica Park, 9:00 PM, 5-course modified tasting menu.",
          "translations": {
            "ko": "제시카 박님, 오늘 밤 9시, 5가지 코스의 변경된 시식 메뉴로 확인되었습니다.",
            "zh": "已为Jessica Park确认，晚上9点，5道菜的修改品尝菜单。",
            "ja": "ジェシカ・パーク様、9時、5品のアレルギー対応テイスティングメニューで確認しました。",
            "vi": "Đã xác nhận cho Jessica Park, 9 giờ tối, thực đơn thử nếm 5 món đã điều chỉnh.",
            "en": "Confirmed for Jessica Park, 9:00 PM, 5-course modified tasting menu."
          }
        },
        {
          "role": "user",
          "text": "Thank you. Looking forward to it.",
          "translations": {
            "ko": "감사합니다. 기대하고 있겠습니다.",
            "zh": "谢谢。期待今晚。",
            "ja": "ありがとうございます。楽しみにしています。",
            "vi": "Cảm ơn. Tôi rất mong chờ.",
            "en": "Thank you. Looking forward to it."
          }
        },
        {
          "role": "ai",
          "text": "It will be our pleasure.",
          "translations": {
            "ko": "저희의 영광입니다.",
            "zh": "我们很荣幸。",
            "ja": "こちらこそ、お待ちしております。",
            "vi": "Đó là niềm vinh hạnh của chúng tôi.",
            "en": "It will be our pleasure."
          }
        },
        {
          "role": "user",
          "text": "See you tonight.",
          "translations": {
            "ko": "오늘 밤에 뵙겠습니다.",
            "zh": "今晚见。",
            "ja": "今夜お会いしましょう。",
            "vi": "Hẹn gặp bạn tối nay.",
            "en": "See you tonight."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Requesting a private dining area for a business meeting",
        "ko": "비즈니스 미팅을 위한 개인 식사 공간 요청하기",
        "zh": "请求为商务会议预订私人用餐区域",
        "ja": "ビジネスミーティング用のプライベートダイニングエリアのリクエスト",
        "vi": "Yêu cầu một khu ăn riêng cho cuộc họp kinh doanh"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Good evening, this is Le Jardin. How may I assist you?",
          "translations": {
            "ko": "안녕하십니까, 이곳은 르 자르댕입니다. 어떻게 도와드릴까요?",
            "zh": "晚上好，这里是Le Jardin。有什么可以帮助您的吗？",
            "ja": "こんばんは、ル・ジャルダンです。何かお手伝いできることがありますか？",
            "vi": "Chào tối, đây là Le Jardin. Tôi có thể giúp gì cho bạn?",
            "en": "Good evening, this is Le Jardin. How may I assist you?"
          }
        },
        {
          "role": "user",
          "text": "Hi, I’d like to make a last-minute reservation for tonight.",
          "translations": {
            "ko": "안녕하세요, 오늘 밤에 마지막 순간 예약을 하고 싶습니다.",
            "zh": "嗨，我想预订今晚的临时位子。",
            "ja": "こんにちは、今夜の急な予約をしたいのですが。",
            "vi": "Chào, tôi muốn đặt chỗ vào phút chót cho tối nay.",
            "en": "Hi, I’d like to make a last-minute reservation for tonight."
          }
        },
        {
          "role": "ai",
          "text": "Let me check... We have availability at 9:00 PM.",
          "translations": {
            "ko": "확인해보겠습니다... 오늘 밤 9시에 예약 가능합니다.",
            "zh": "让我查一下...我们在晚上9点有空位。",
            "ja": "確認します... 9時に空きがあります。",
            "vi": "Để tôi kiểm tra... Chúng tôi còn chỗ vào lúc 9 giờ tối.",
            "en": "Let me check... We have availability at 9:00 PM."
          }
        },
        {
          "role": "user",
          "text": "That’s perfect. Do you offer tasting menus?",
          "translations": {
            "ko": "완벽합니다. 시식 메뉴를 제공하나요?",
            "zh": "那太好了。你们有品尝菜单吗？",
            "ja": "それで大丈夫です。テイスティングメニューはありますか？",
            "vi": "Hoàn hảo. Bạn có thực đơn thử nếm không?",
            "en": "That’s perfect. Do you offer tasting menus?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, we have a 5-course and a 7-course option.",
          "translations": {
            "ko": "네, 5가지 코스와 7가지 코스를 선택하실 수 있습니다.",
            "zh": "是的，我们有5道菜和7道菜的选择。",
            "ja": "はい、5品と7品のコースがあります。",
            "vi": "Có, chúng tôi có thực đơn 5 món và 7 món.",
            "en": "Yes, we have a 5-course and a 7-course option."
          }
        },
        {
          "role": "user",
          "text": "I’ll go with the 5-course. Can it be modified for allergies?",
          "translations": {
            "ko": "5가지 코스로 할게요. 알레르기에 맞게 변경할 수 있나요?",
            "zh": "我选择5道菜。可以根据过敏情况进行修改吗？",
            "ja": "5品のコースにします。アレルギー対応は可能ですか？",
            "vi": "Tôi sẽ chọn thực đơn 5 món. Có thể điều chỉnh cho người dị ứng không?",
            "en": "I’ll go with the 5-course. Can it be modified for allergies?"
          }
        },
        {
          "role": "ai",
          "text": "Of course. May I ask what the allergy is?",
          "translations": {
            "ko": "물론입니다. 알레르기가 무엇인지 여쭤봐도 될까요?",
            "zh": "当然可以。请问您对什么过敏？",
            "ja": "もちろんです。何のアレルギーがありますか？",
            "vi": "Tất nhiên. Bạn dị ứng với thứ gì?",
            "en": "Of course. May I ask what the allergy is?"
          }
        },
        {
          "role": "user",
          "text": "Shellfish.",
          "translations": {
            "ko": "조개류입니다.",
            "zh": "贝类。",
            "ja": "貝類です。",
            "vi": "Hải sản.",
            "en": "Shellfish."
          }
        },
        {
          "role": "ai",
          "text": "Understood. We’ll substitute accordingly.",
          "translations": {
            "ko": "알겠습니다. 그에 맞게 대체하겠습니다.",
            "zh": "明白了。我们会相应地进行替换。",
            "ja": "了解しました。それに合わせて代替品を用意します。",
            "vi": "Hiểu rồi. Chúng tôi sẽ thay thế phù hợp.",
            "en": "Understood. We’ll substitute accordingly."
          }
        },
        {
          "role": "user",
          "text": "Also, do you have a sommelier available tonight?",
          "translations": {
            "ko": "그리고 오늘 밤에 소믈리에가 있나요?",
            "zh": "另外，今晚有侍酒师在吗？",
            "ja": "また、今夜ソムリエはいますか？",
            "vi": "Ngoài ra, bạn có sommelier phục vụ tối nay không?",
            "en": "Also, do you have a sommelier available tonight?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, our sommelier will assist with pairings.",
          "translations": {
            "ko": "네, 우리 소믈리에가 와인 매칭을 도와드릴 것입니다.",
            "zh": "是的，我们的侍酒师会帮助您配酒。",
            "ja": "はい、ソムリエがペアリングのお手伝いをします。",
            "vi": "Có, sommelier của chúng tôi sẽ giúp bạn ghép đôi.",
            "en": "Yes, our sommelier will assist with pairings."
          }
        },
        {
          "role": "user",
          "text": "Fantastic. Do you offer valet parking?",
          "translations": {
            "ko": "훌륭합니다. 발렛 파킹을 제공하나요?",
            "zh": "太好了。你们提供代客泊车服务吗？",
            "ja": "素晴らしいです。バレーパーキングはありますか？",
            "vi": "Tuyệt vời. Bạn có dịch vụ đỗ xe không?",
            "en": "Fantastic. Do you offer valet parking?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, complimentary for dinner guests.",
          "translations": {
            "ko": "네, 저녁 식사 손님들에게 무료로 제공됩니다.",
            "zh": "是的，晚餐客人免费。",
            "ja": "はい、ディナーのお客様は無料です。",
            "vi": "Có, miễn phí cho khách ăn tối.",
            "en": "Yes, complimentary for dinner guests."
          }
        },
        {
          "role": "user",
          "text": "Excellent. I’d also like a quiet table if possible.",
          "translations": {
            "ko": "좋습니다. 가능하다면 조용한 테이블을 원합니다.",
            "zh": "很好。如果可能的话，我还想要一个安静的桌子。",
            "ja": "素晴らしいです。可能であれば静かな席をお願いします。",
            "vi": "Xuất sắc. Nếu có thể tôi muốn một bàn yên tĩnh.",
            "en": "Excellent. I’d also like a quiet table if possible."
          }
        },
        {
          "role": "ai",
          "text": "We’ll place you in a corner booth.",
          "translations": {
            "ko": "귀하를 코너 부스에 안내하겠습니다.",
            "zh": "我们会为您安排在角落的包厢。",
            "ja": "角のブースにご案内します。",
            "vi": "Chúng tôi sẽ sắp xếp cho bạn một gian bên góc.",
            "en": "We’ll place you in a corner booth."
          }
        },
        {
          "role": "user",
          "text": "Perfect. Please confirm under the name Jessica Park.",
          "translations": {
            "ko": "완벽합니다. 제시카 박 이름으로 확인해 주세요.",
            "zh": "完美。请以Jessica Park的名字确认。",
            "ja": "完璧です。ジェシカ・パークの名前で確認してください。",
            "vi": "Hoàn hảo. Xin hãy xác nhận dưới tên Jessica Park.",
            "en": "Perfect. Please confirm under the name Jessica Park."
          }
        },
        {
          "role": "ai",
          "text": "Confirmed for Jessica Park, 9:00 PM, 5-course modified tasting menu.",
          "translations": {
            "ko": "제시카 박님, 오늘 밤 9시, 5가지 코스의 변경된 시식 메뉴로 확인되었습니다.",
            "zh": "已为Jessica Park确认，晚上9点，5道菜的修改品尝菜单。",
            "ja": "ジェシカ・パーク様、9時、5品のアレルギー対応テイスティングメニューで確認しました。",
            "vi": "Đã xác nhận cho Jessica Park, 9 giờ tối, thực đơn thử nếm 5 món đã điều chỉnh.",
            "en": "Confirmed for Jessica Park, 9:00 PM, 5-course modified tasting menu."
          }
        },
        {
          "role": "user",
          "text": "Thank you. Looking forward to it.",
          "translations": {
            "ko": "감사합니다. 기대하고 있겠습니다.",
            "zh": "谢谢。期待今晚。",
            "ja": "ありがとうございます。楽しみにしています。",
            "vi": "Cảm ơn. Tôi rất mong chờ.",
            "en": "Thank you. Looking forward to it."
          }
        },
        {
          "role": "ai",
          "text": "It will be our pleasure.",
          "translations": {
            "ko": "저희의 영광입니다.",
            "zh": "我们很荣幸。",
            "ja": "こちらこそ、お待ちしております。",
            "vi": "Đó là niềm vinh hạnh của chúng tôi.",
            "en": "It will be our pleasure."
          }
        },
        {
          "role": "user",
          "text": "See you tonight.",
          "translations": {
            "ko": "오늘 밤에 뵙겠습니다.",
            "zh": "今晚见。",
            "ja": "今夜お会いしましょう。",
            "vi": "Hẹn gặp bạn tối nay.",
            "en": "See you tonight."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Pairing gourmet food with fine wine",
        "ko": "고급 음식과 와인 매칭하기",
        "zh": "将美食与美酒搭配",
        "ja": "グルメな食事と上質なワインのペアリング",
        "vi": "Ghép đôi thực phẩm tinh tế với rượu vang ngon"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Good evening, this is Le Jardin. How may I assist you?",
          "translations": {
            "ko": "안녕하십니까, 이곳은 르 자르댕입니다. 어떻게 도와드릴까요?",
            "zh": "晚上好，这里是Le Jardin。有什么可以帮助您的吗？",
            "ja": "こんばんは、ル・ジャルダンです。何かお手伝いできることがありますか？",
            "vi": "Chào tối, đây là Le Jardin. Tôi có thể giúp gì cho bạn?",
            "en": "Good evening, this is Le Jardin. How may I assist you?"
          }
        },
        {
          "role": "user",
          "text": "Hi, I’d like to make a last-minute reservation for tonight.",
          "translations": {
            "ko": "안녕하세요, 오늘 밤에 마지막 순간 예약을 하고 싶습니다.",
            "zh": "嗨，我想预订今晚的临时位子。",
            "ja": "こんにちは、今夜の急な予約をしたいのですが。",
            "vi": "Chào, tôi muốn đặt chỗ vào phút chót cho tối nay.",
            "en": "Hi, I’d like to make a last-minute reservation for tonight."
          }
        },
        {
          "role": "ai",
          "text": "Let me check... We have availability at 9:00 PM.",
          "translations": {
            "ko": "확인해보겠습니다... 오늘 밤 9시에 예약 가능합니다.",
            "zh": "让我查一下...我们在晚上9点有空位。",
            "ja": "確認します... 9時に空きがあります。",
            "vi": "Để tôi kiểm tra... Chúng tôi còn chỗ vào lúc 9 giờ tối.",
            "en": "Let me check... We have availability at 9:00 PM."
          }
        },
        {
          "role": "user",
          "text": "That’s perfect. Do you offer tasting menus?",
          "translations": {
            "ko": "완벽합니다. 시식 메뉴를 제공하나요?",
            "zh": "那太好了。你们有品尝菜单吗？",
            "ja": "それで大丈夫です。テイスティングメニューはありますか？",
            "vi": "Hoàn hảo. Bạn có thực đơn thử nếm không?",
            "en": "That’s perfect. Do you offer tasting menus?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, we have a 5-course and a 7-course option.",
          "translations": {
            "ko": "네, 5가지 코스와 7가지 코스를 선택하실 수 있습니다.",
            "zh": "是的，我们有5道菜和7道菜的选择。",
            "ja": "はい、5品と7品のコースがあります。",
            "vi": "Có, chúng tôi có thực đơn 5 món và 7 món.",
            "en": "Yes, we have a 5-course and a 7-course option."
          }
        },
        {
          "role": "user",
          "text": "I’ll go with the 5-course. Can it be modified for allergies?",
          "translations": {
            "ko": "5가지 코스로 할게요. 알레르기에 맞게 변경할 수 있나요?",
            "zh": "我选择5道菜。可以根据过敏情况进行修改吗？",
            "ja": "5品のコースにします。アレルギー対応は可能ですか？",
            "vi": "Tôi sẽ chọn thực đơn 5 món. Có thể điều chỉnh cho người dị ứng không?",
            "en": "I’ll go with the 5-course. Can it be modified for allergies?"
          }
        },
        {
          "role": "ai",
          "text": "Of course. May I ask what the allergy is?",
          "translations": {
            "ko": "물론입니다. 알레르기가 무엇인지 여쭤봐도 될까요?",
            "zh": "当然可以。请问您对什么过敏？",
            "ja": "もちろんです。何のアレルギーがありますか？",
            "vi": "Tất nhiên. Bạn dị ứng với thứ gì?",
            "en": "Of course. May I ask what the allergy is?"
          }
        },
        {
          "role": "user",
          "text": "Shellfish.",
          "translations": {
            "ko": "조개류입니다.",
            "zh": "贝类。",
            "ja": "貝類です。",
            "vi": "Hải sản.",
            "en": "Shellfish."
          }
        },
        {
          "role": "ai",
          "text": "Understood. We’ll substitute accordingly.",
          "translations": {
            "ko": "알겠습니다. 그에 맞게 대체하겠습니다.",
            "zh": "明白了。我们会相应地进行替换。",
            "ja": "了解しました。それに合わせて代替品を用意します。",
            "vi": "Hiểu rồi. Chúng tôi sẽ thay thế phù hợp.",
            "en": "Understood. We’ll substitute accordingly."
          }
        },
        {
          "role": "user",
          "text": "Also, do you have a sommelier available tonight?",
          "translations": {
            "ko": "그리고 오늘 밤에 소믈리에가 있나요?",
            "zh": "另外，今晚有侍酒师在吗？",
            "ja": "また、今夜ソムリエはいますか？",
            "vi": "Ngoài ra, bạn có sommelier phục vụ tối nay không?",
            "en": "Also, do you have a sommelier available tonight?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, our sommelier will assist with pairings.",
          "translations": {
            "ko": "네, 우리 소믈리에가 와인 매칭을 도와드릴 것입니다.",
            "zh": "是的，我们的侍酒师会帮助您配酒。",
            "ja": "はい、ソムリエがペアリングのお手伝いをします。",
            "vi": "Có, sommelier của chúng tôi sẽ giúp bạn ghép đôi.",
            "en": "Yes, our sommelier will assist with pairings."
          }
        },
        {
          "role": "user",
          "text": "Fantastic. Do you offer valet parking?",
          "translations": {
            "ko": "훌륭합니다. 발렛 파킹을 제공하나요?",
            "zh": "太好了。你们提供代客泊车服务吗？",
            "ja": "素晴らしいです。バレーパーキングはありますか？",
            "vi": "Tuyệt vời. Bạn có dịch vụ đỗ xe không?",
            "en": "Fantastic. Do you offer valet parking?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, complimentary for dinner guests.",
          "translations": {
            "ko": "네, 저녁 식사 손님들에게 무료로 제공됩니다.",
            "zh": "是的，晚餐客人免费。",
            "ja": "はい、ディナーのお客様は無料です。",
            "vi": "Có, miễn phí cho khách ăn tối.",
            "en": "Yes, complimentary for dinner guests."
          }
        },
        {
          "role": "user",
          "text": "Excellent. I’d also like a quiet table if possible.",
          "translations": {
            "ko": "좋습니다. 가능하다면 조용한 테이블을 원합니다.",
            "zh": "很好。如果可能的话，我还想要一个安静的桌子。",
            "ja": "素晴らしいです。可能であれば静かな席をお願いします。",
            "vi": "Xuất sắc. Nếu có thể tôi muốn một bàn yên tĩnh.",
            "en": "Excellent. I’d also like a quiet table if possible."
          }
        },
        {
          "role": "ai",
          "text": "We’ll place you in a corner booth.",
          "translations": {
            "ko": "귀하를 코너 부스에 안내하겠습니다.",
            "zh": "我们会为您安排在角落的包厢。",
            "ja": "角のブースにご案内します。",
            "vi": "Chúng tôi sẽ sắp xếp cho bạn một gian bên góc.",
            "en": "We’ll place you in a corner booth."
          }
        },
        {
          "role": "user",
          "text": "Perfect. Please confirm under the name Jessica Park.",
          "translations": {
            "ko": "완벽합니다. 제시카 박 이름으로 확인해 주세요.",
            "zh": "完美。请以Jessica Park的名字确认。",
            "ja": "完璧です。ジェシカ・パークの名前で確認してください。",
            "vi": "Hoàn hảo. Xin hãy xác nhận dưới tên Jessica Park.",
            "en": "Perfect. Please confirm under the name Jessica Park."
          }
        },
        {
          "role": "ai",
          "text": "Confirmed for Jessica Park, 9:00 PM, 5-course modified tasting menu.",
          "translations": {
            "ko": "제시카 박님, 오늘 밤 9시, 5가지 코스의 변경된 시식 메뉴로 확인되었습니다.",
            "zh": "已为Jessica Park确认，晚上9点，5道菜的修改品尝菜单。",
            "ja": "ジェシカ・パーク様、9時、5品のアレルギー対応テイスティングメニューで確認しました。",
            "vi": "Đã xác nhận cho Jessica Park, 9 giờ tối, thực đơn thử nếm 5 món đã điều chỉnh.",
            "en": "Confirmed for Jessica Park, 9:00 PM, 5-course modified tasting menu."
          }
        },
        {
          "role": "user",
          "text": "Thank you. Looking forward to it.",
          "translations": {
            "ko": "감사합니다. 기대하고 있겠습니다.",
            "zh": "谢谢。期待今晚。",
            "ja": "ありがとうございます。楽しみにしています。",
            "vi": "Cảm ơn. Tôi rất mong chờ.",
            "en": "Thank you. Looking forward to it."
          }
        },
        {
          "role": "ai",
          "text": "It will be our pleasure.",
          "translations": {
            "ko": "저희의 영광입니다.",
            "zh": "我们很荣幸。",
            "ja": "こちらこそ、お待ちしております。",
            "vi": "Đó là niềm vinh hạnh của chúng tôi.",
            "en": "It will be our pleasure."
          }
        },
        {
          "role": "user",
          "text": "See you tonight.",
          "translations": {
            "ko": "오늘 밤에 뵙겠습니다.",
            "zh": "今晚见。",
            "ja": "今夜お会いしましょう。",
            "vi": "Hẹn gặp bạn tối nay.",
            "en": "See you tonight."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Resolving a billing dispute politely",
        "ko": "청구 분쟁을 예의 바르게 해결하기",
        "zh": "礼貌地解决账单纠纷",
        "ja": "請求問題を丁寧に解決する",
        "vi": "Giải quyết tranh chấp hóa đơn một cách lịch sự"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Good evening, this is Le Jardin. How may I assist you?",
          "translations": {
            "ko": "안녕하십니까, 이곳은 르 자르댕입니다. 어떻게 도와드릴까요?",
            "zh": "晚上好，这里是Le Jardin。有什么可以帮助您的吗？",
            "ja": "こんばんは、ル・ジャルダンです。何かお手伝いできることがありますか？",
            "vi": "Chào tối, đây là Le Jardin. Tôi có thể giúp gì cho bạn?",
            "en": "Good evening, this is Le Jardin. How may I assist you?"
          }
        },
        {
          "role": "user",
          "text": "Hi, I’d like to make a last-minute reservation for tonight.",
          "translations": {
            "ko": "안녕하세요, 오늘 밤에 마지막 순간 예약을 하고 싶습니다.",
            "zh": "嗨，我想预订今晚的临时位子。",
            "ja": "こんにちは、今夜の急な予約をしたいのですが。",
            "vi": "Chào, tôi muốn đặt chỗ vào phút chót cho tối nay.",
            "en": "Hi, I’d like to make a last-minute reservation for tonight."
          }
        },
        {
          "role": "ai",
          "text": "Let me check... We have availability at 9:00 PM.",
          "translations": {
            "ko": "확인해보겠습니다... 오늘 밤 9시에 예약 가능합니다.",
            "zh": "让我查一下...我们在晚上9点有空位。",
            "ja": "確認します... 9時に空きがあります。",
            "vi": "Để tôi kiểm tra... Chúng tôi còn chỗ vào lúc 9 giờ tối.",
            "en": "Let me check... We have availability at 9:00 PM."
          }
        },
        {
          "role": "user",
          "text": "That’s perfect. Do you offer tasting menus?",
          "translations": {
            "ko": "완벽합니다. 시식 메뉴를 제공하나요?",
            "zh": "那太好了。你们有品尝菜单吗？",
            "ja": "それで大丈夫です。テイスティングメニューはありますか？",
            "vi": "Hoàn hảo. Bạn có thực đơn thử nếm không?",
            "en": "That’s perfect. Do you offer tasting menus?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, we have a 5-course and a 7-course option.",
          "translations": {
            "ko": "네, 5가지 코스와 7가지 코스를 선택하실 수 있습니다.",
            "zh": "是的，我们有5道菜和7道菜的选择。",
            "ja": "はい、5品と7品のコースがあります。",
            "vi": "Có, chúng tôi có thực đơn 5 món và 7 món.",
            "en": "Yes, we have a 5-course and a 7-course option."
          }
        },
        {
          "role": "user",
          "text": "I’ll go with the 5-course. Can it be modified for allergies?",
          "translations": {
            "ko": "5가지 코스로 할게요. 알레르기에 맞게 변경할 수 있나요?",
            "zh": "我选择5道菜。可以根据过敏情况进行修改吗？",
            "ja": "5品のコースにします。アレルギー対応は可能ですか？",
            "vi": "Tôi sẽ chọn thực đơn 5 món. Có thể điều chỉnh cho người dị ứng không?",
            "en": "I’ll go with the 5-course. Can it be modified for allergies?"
          }
        },
        {
          "role": "ai",
          "text": "Of course. May I ask what the allergy is?",
          "translations": {
            "ko": "물론입니다. 알레르기가 무엇인지 여쭤봐도 될까요?",
            "zh": "当然可以。请问您对什么过敏？",
            "ja": "もちろんです。何のアレルギーがありますか？",
            "vi": "Tất nhiên. Bạn dị ứng với thứ gì?",
            "en": "Of course. May I ask what the allergy is?"
          }
        },
        {
          "role": "user",
          "text": "Shellfish.",
          "translations": {
            "ko": "조개류입니다.",
            "zh": "贝类。",
            "ja": "貝類です。",
            "vi": "Hải sản.",
            "en": "Shellfish."
          }
        },
        {
          "role": "ai",
          "text": "Understood. We’ll substitute accordingly.",
          "translations": {
            "ko": "알겠습니다. 그에 맞게 대체하겠습니다.",
            "zh": "明白了。我们会相应地进行替换。",
            "ja": "了解しました。それに合わせて代替品を用意します。",
            "vi": "Hiểu rồi. Chúng tôi sẽ thay thế phù hợp.",
            "en": "Understood. We’ll substitute accordingly."
          }
        },
        {
          "role": "user",
          "text": "Also, do you have a sommelier available tonight?",
          "translations": {
            "ko": "그리고 오늘 밤에 소믈리에가 있나요?",
            "zh": "另外，今晚有侍酒师在吗？",
            "ja": "また、今夜ソムリエはいますか？",
            "vi": "Ngoài ra, bạn có sommelier phục vụ tối nay không?",
            "en": "Also, do you have a sommelier available tonight?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, our sommelier will assist with pairings.",
          "translations": {
            "ko": "네, 우리 소믈리에가 와인 매칭을 도와드릴 것입니다.",
            "zh": "是的，我们的侍酒师会帮助您配酒。",
            "ja": "はい、ソムリエがペアリングのお手伝いをします。",
            "vi": "Có, sommelier của chúng tôi sẽ giúp bạn ghép đôi.",
            "en": "Yes, our sommelier will assist with pairings."
          }
        },
        {
          "role": "user",
          "text": "Fantastic. Do you offer valet parking?",
          "translations": {
            "ko": "훌륭합니다. 발렛 파킹을 제공하나요?",
            "zh": "太好了。你们提供代客泊车服务吗？",
            "ja": "素晴らしいです。バレーパーキングはありますか？",
            "vi": "Tuyệt vời. Bạn có dịch vụ đỗ xe không?",
            "en": "Fantastic. Do you offer valet parking?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, complimentary for dinner guests.",
          "translations": {
            "ko": "네, 저녁 식사 손님들에게 무료로 제공됩니다.",
            "zh": "是的，晚餐客人免费。",
            "ja": "はい、ディナーのお客様は無料です。",
            "vi": "Có, miễn phí cho khách ăn tối.",
            "en": "Yes, complimentary for dinner guests."
          }
        },
        {
          "role": "user",
          "text": "Excellent. I’d also like a quiet table if possible.",
          "translations": {
            "ko": "좋습니다. 가능하다면 조용한 테이블을 원합니다.",
            "zh": "很好。如果可能的话，我还想要一个安静的桌子。",
            "ja": "素晴らしいです。可能であれば静かな席をお願いします。",
            "vi": "Xuất sắc. Nếu có thể tôi muốn một bàn yên tĩnh.",
            "en": "Excellent. I’d also like a quiet table if possible."
          }
        },
        {
          "role": "ai",
          "text": "We’ll place you in a corner booth.",
          "translations": {
            "ko": "귀하를 코너 부스에 안내하겠습니다.",
            "zh": "我们会为您安排在角落的包厢。",
            "ja": "角のブースにご案内します。",
            "vi": "Chúng tôi sẽ sắp xếp cho bạn một gian bên góc.",
            "en": "We’ll place you in a corner booth."
          }
        },
        {
          "role": "user",
          "text": "Perfect. Please confirm under the name Jessica Park.",
          "translations": {
            "ko": "완벽합니다. 제시카 박 이름으로 확인해 주세요.",
            "zh": "完美。请以Jessica Park的名字确认。",
            "ja": "完璧です。ジェシカ・パークの名前で確認してください。",
            "vi": "Hoàn hảo. Xin hãy xác nhận dưới tên Jessica Park.",
            "en": "Perfect. Please confirm under the name Jessica Park."
          }
        },
        {
          "role": "ai",
          "text": "Confirmed for Jessica Park, 9:00 PM, 5-course modified tasting menu.",
          "translations": {
            "ko": "제시카 박님, 오늘 밤 9시, 5가지 코스의 변경된 시식 메뉴로 확인되었습니다.",
            "zh": "已为Jessica Park确认，晚上9点，5道菜的修改品尝菜单。",
            "ja": "ジェシカ・パーク様、9時、5品のアレルギー対応テイスティングメニューで確認しました。",
            "vi": "Đã xác nhận cho Jessica Park, 9 giờ tối, thực đơn thử nếm 5 món đã điều chỉnh.",
            "en": "Confirmed for Jessica Park, 9:00 PM, 5-course modified tasting menu."
          }
        },
        {
          "role": "user",
          "text": "Thank you. Looking forward to it.",
          "translations": {
            "ko": "감사합니다. 기대하고 있겠습니다.",
            "zh": "谢谢。期待今晚。",
            "ja": "ありがとうございます。楽しみにしています。",
            "vi": "Cảm ơn. Tôi rất mong chờ.",
            "en": "Thank you. Looking forward to it."
          }
        },
        {
          "role": "ai",
          "text": "It will be our pleasure.",
          "translations": {
            "ko": "저희의 영광입니다.",
            "zh": "我们很荣幸。",
            "ja": "こちらこそ、お待ちしております。",
            "vi": "Đó là niềm vinh hạnh của chúng tôi.",
            "en": "It will be our pleasure."
          }
        },
        {
          "role": "user",
          "text": "See you tonight.",
          "translations": {
            "ko": "오늘 밤에 뵙겠습니다.",
            "zh": "今晚见。",
            "ja": "今夜お会いしましょう。",
            "vi": "Hẹn gặp bạn tối nay.",
            "en": "See you tonight."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Requesting changes to a set tasting menu",
        "ko": "정해진 시식 메뉴에 변경 요청하기",
        "zh": "请求更改套餐品尝菜单",
        "ja": "テイスティングメニューの変更をリクエストする",
        "vi": "Yêu cầu thay đổi thực đơn thử nếm"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Good evening, this is Le Jardin. How may I assist you?",
          "translations": {
            "ko": "안녕하십니까, 이곳은 르 자르댕입니다. 어떻게 도와드릴까요?",
            "zh": "晚上好，这里是Le Jardin。有什么可以帮助您的吗？",
            "ja": "こんばんは、ル・ジャルダンです。何かお手伝いできることがありますか？",
            "vi": "Chào tối, đây là Le Jardin. Tôi có thể giúp gì cho bạn?",
            "en": "Good evening, this is Le Jardin. How may I assist you?"
          }
        },
        {
          "role": "user",
          "text": "Hi, I’d like to make a last-minute reservation for tonight.",
          "translations": {
            "ko": "안녕하세요, 오늘 밤에 마지막 순간 예약을 하고 싶습니다.",
            "zh": "嗨，我想预订今晚的临时位子。",
            "ja": "こんにちは、今夜の急な予約をしたいのですが。",
            "vi": "Chào, tôi muốn đặt chỗ vào phút chót cho tối nay.",
            "en": "Hi, I’d like to make a last-minute reservation for tonight."
          }
        },
        {
          "role": "ai",
          "text": "Let me check... We have availability at 9:00 PM.",
          "translations": {
            "ko": "확인해보겠습니다... 오늘 밤 9시에 예약 가능합니다.",
            "zh": "让我查一下...我们在晚上9点有空位。",
            "ja": "確認します... 9時に空きがあります。",
            "vi": "Để tôi kiểm tra... Chúng tôi còn chỗ vào lúc 9 giờ tối.",
            "en": "Let me check... We have availability at 9:00 PM."
          }
        },
        {
          "role": "user",
          "text": "That’s perfect. Do you offer tasting menus?",
          "translations": {
            "ko": "완벽합니다. 시식 메뉴를 제공하나요?",
            "zh": "那太好了。你们有品尝菜单吗？",
            "ja": "それで大丈夫です。テイスティングメニューはありますか？",
            "vi": "Hoàn hảo. Bạn có thực đơn thử nếm không?",
            "en": "That’s perfect. Do you offer tasting menus?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, we have a 5-course and a 7-course option.",
          "translations": {
            "ko": "네, 5가지 코스와 7가지 코스를 선택하실 수 있습니다.",
            "zh": "是的，我们有5道菜和7道菜的选择。",
            "ja": "はい、5品と7品のコースがあります。",
            "vi": "Có, chúng tôi có thực đơn 5 món và 7 món.",
            "en": "Yes, we have a 5-course and a 7-course option."
          }
        },
        {
          "role": "user",
          "text": "I’ll go with the 5-course. Can it be modified for allergies?",
          "translations": {
            "ko": "5가지 코스로 할게요. 알레르기에 맞게 변경할 수 있나요?",
            "zh": "我选择5道菜。可以根据过敏情况进行修改吗？",
            "ja": "5品のコースにします。アレルギー対応は可能ですか？",
            "vi": "Tôi sẽ chọn thực đơn 5 món. Có thể điều chỉnh cho người dị ứng không?",
            "en": "I’ll go with the 5-course. Can it be modified for allergies?"
          }
        },
        {
          "role": "ai",
          "text": "Of course. May I ask what the allergy is?",
          "translations": {
            "ko": "물론입니다. 알레르기가 무엇인지 여쭤봐도 될까요?",
            "zh": "当然可以。请问您对什么过敏？",
            "ja": "もちろんです。何のアレルギーがありますか？",
            "vi": "Tất nhiên. Bạn dị ứng với thứ gì?",
            "en": "Of course. May I ask what the allergy is?"
          }
        },
        {
          "role": "user",
          "text": "Shellfish.",
          "translations": {
            "ko": "조개류입니다.",
            "zh": "贝类。",
            "ja": "貝類です。",
            "vi": "Hải sản.",
            "en": "Shellfish."
          }
        },
        {
          "role": "ai",
          "text": "Understood. We’ll substitute accordingly.",
          "translations": {
            "ko": "알겠습니다. 그에 맞게 대체하겠습니다.",
            "zh": "明白了。我们会相应地进行替换。",
            "ja": "了解しました。それに合わせて代替品を用意します。",
            "vi": "Hiểu rồi. Chúng tôi sẽ thay thế phù hợp.",
            "en": "Understood. We’ll substitute accordingly."
          }
        },
        {
          "role": "user",
          "text": "Also, do you have a sommelier available tonight?",
          "translations": {
            "ko": "그리고 오늘 밤에 소믈리에가 있나요?",
            "zh": "另外，今晚有侍酒师在吗？",
            "ja": "また、今夜ソムリエはいますか？",
            "vi": "Ngoài ra, bạn có sommelier phục vụ tối nay không?",
            "en": "Also, do you have a sommelier available tonight?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, our sommelier will assist with pairings.",
          "translations": {
            "ko": "네, 우리 소믈리에가 와인 매칭을 도와드릴 것입니다.",
            "zh": "是的，我们的侍酒师会帮助您配酒。",
            "ja": "はい、ソムリエがペアリングのお手伝いをします。",
            "vi": "Có, sommelier của chúng tôi sẽ giúp bạn ghép đôi.",
            "en": "Yes, our sommelier will assist with pairings."
          }
        },
        {
          "role": "user",
          "text": "Fantastic. Do you offer valet parking?",
          "translations": {
            "ko": "훌륭합니다. 발렛 파킹을 제공하나요?",
            "zh": "太好了。你们提供代客泊车服务吗？",
            "ja": "素晴らしいです。バレーパーキングはありますか？",
            "vi": "Tuyệt vời. Bạn có dịch vụ đỗ xe không?",
            "en": "Fantastic. Do you offer valet parking?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, complimentary for dinner guests.",
          "translations": {
            "ko": "네, 저녁 식사 손님들에게 무료로 제공됩니다.",
            "zh": "是的，晚餐客人免费。",
            "ja": "はい、ディナーのお客様は無料です。",
            "vi": "Có, miễn phí cho khách ăn tối.",
            "en": "Yes, complimentary for dinner guests."
          }
        },
        {
          "role": "user",
          "text": "Excellent. I’d also like a quiet table if possible.",
          "translations": {
            "ko": "좋습니다. 가능하다면 조용한 테이블을 원합니다.",
            "zh": "很好。如果可能的话，我还想要一个安静的桌子。",
            "ja": "素晴らしいです。可能であれば静かな席をお願いします。",
            "vi": "Xuất sắc. Nếu có thể tôi muốn một bàn yên tĩnh.",
            "en": "Excellent. I’d also like a quiet table if possible."
          }
        },
        {
          "role": "ai",
          "text": "We’ll place you in a corner booth.",
          "translations": {
            "ko": "귀하를 코너 부스에 안내하겠습니다.",
            "zh": "我们会为您安排在角落的包厢。",
            "ja": "角のブースにご案内します。",
            "vi": "Chúng tôi sẽ sắp xếp cho bạn một gian bên góc.",
            "en": "We’ll place you in a corner booth."
          }
        },
        {
          "role": "user",
          "text": "Perfect. Please confirm under the name Jessica Park.",
          "translations": {
            "ko": "완벽합니다. 제시카 박 이름으로 확인해 주세요.",
            "zh": "完美。请以Jessica Park的名字确认。",
            "ja": "完璧です。ジェシカ・パークの名前で確認してください。",
            "vi": "Hoàn hảo. Xin hãy xác nhận dưới tên Jessica Park.",
            "en": "Perfect. Please confirm under the name Jessica Park."
          }
        },
        {
          "role": "ai",
          "text": "Confirmed for Jessica Park, 9:00 PM, 5-course modified tasting menu.",
          "translations": {
            "ko": "제시카 박님, 오늘 밤 9시, 5가지 코스의 변경된 시식 메뉴로 확인되었습니다.",
            "zh": "已为Jessica Park确认，晚上9点，5道菜的修改品尝菜单。",
            "ja": "ジェシカ・パーク様、9時、5品のアレルギー対応テイスティングメニューで確認しました。",
            "vi": "Đã xác nhận cho Jessica Park, 9 giờ tối, thực đơn thử nếm 5 món đã điều chỉnh.",
            "en": "Confirmed for Jessica Park, 9:00 PM, 5-course modified tasting menu."
          }
        },
        {
          "role": "user",
          "text": "Thank you. Looking forward to it.",
          "translations": {
            "ko": "감사합니다. 기대하고 있겠습니다.",
            "zh": "谢谢。期待今晚。",
            "ja": "ありがとうございます。楽しみにしています。",
            "vi": "Cảm ơn. Tôi rất mong chờ.",
            "en": "Thank you. Looking forward to it."
          }
        },
        {
          "role": "ai",
          "text": "It will be our pleasure.",
          "translations": {
            "ko": "저희의 영광입니다.",
            "zh": "我们很荣幸。",
            "ja": "こちらこそ、お待ちしております。",
            "vi": "Đó là niềm vinh hạnh của chúng tôi.",
            "en": "It will be our pleasure."
          }
        },
        {
          "role": "user",
          "text": "See you tonight.",
          "translations": {
            "ko": "오늘 밤에 뵙겠습니다.",
            "zh": "今晚见。",
            "ja": "今夜お会いしましょう。",
            "vi": "Hẹn gặp bạn tối nay.",
            "en": "See you tonight."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Discussing food sourcing with the chef",
        "ko": "셰프와 음식 원산지에 대해 이야기하기",
        "zh": "与厨师讨论食物来源",
        "ja": "シェフと食材の調達について話す",
        "vi": "Thảo luận về nguồn gốc thực phẩm với đầu bếp"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Good evening, this is Le Jardin. How may I assist you?",
          "translations": {
            "ko": "안녕하십니까, 이곳은 르 자르댕입니다. 어떻게 도와드릴까요?",
            "zh": "晚上好，这里是Le Jardin。有什么可以帮助您的吗？",
            "ja": "こんばんは、ル・ジャルダンです。何かお手伝いできることがありますか？",
            "vi": "Chào tối, đây là Le Jardin. Tôi có thể giúp gì cho bạn?",
            "en": "Good evening, this is Le Jardin. How may I assist you?"
          }
        },
        {
          "role": "user",
          "text": "Hi, I’d like to make a last-minute reservation for tonight.",
          "translations": {
            "ko": "안녕하세요, 오늘 밤에 마지막 순간 예약을 하고 싶습니다.",
            "zh": "嗨，我想预订今晚的临时位子。",
            "ja": "こんにちは、今夜の急な予約をしたいのですが。",
            "vi": "Chào, tôi muốn đặt chỗ vào phút chót cho tối nay.",
            "en": "Hi, I’d like to make a last-minute reservation for tonight."
          }
        },
        {
          "role": "ai",
          "text": "Let me check... We have availability at 9:00 PM.",
          "translations": {
            "ko": "확인해보겠습니다... 오늘 밤 9시에 예약 가능합니다.",
            "zh": "让我查一下...我们在晚上9点有空位。",
            "ja": "確認します... 9時に空きがあります。",
            "vi": "Để tôi kiểm tra... Chúng tôi còn chỗ vào lúc 9 giờ tối.",
            "en": "Let me check... We have availability at 9:00 PM."
          }
        },
        {
          "role": "user",
          "text": "That’s perfect. Do you offer tasting menus?",
          "translations": {
            "ko": "완벽합니다. 시식 메뉴를 제공하나요?",
            "zh": "那太好了。你们有品尝菜单吗？",
            "ja": "それで大丈夫です。テイスティングメニューはありますか？",
            "vi": "Hoàn hảo. Bạn có thực đơn thử nếm không?",
            "en": "That’s perfect. Do you offer tasting menus?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, we have a 5-course and a 7-course option.",
          "translations": {
            "ko": "네, 5가지 코스와 7가지 코스를 선택하실 수 있습니다.",
            "zh": "是的，我们有5道菜和7道菜的选择。",
            "ja": "はい、5品と7品のコースがあります。",
            "vi": "Có, chúng tôi có thực đơn 5 món và 7 món.",
            "en": "Yes, we have a 5-course and a 7-course option."
          }
        },
        {
          "role": "user",
          "text": "I’ll go with the 5-course. Can it be modified for allergies?",
          "translations": {
            "ko": "5가지 코스로 할게요. 알레르기에 맞게 변경할 수 있나요?",
            "zh": "我选择5道菜。可以根据过敏情况进行修改吗？",
            "ja": "5品のコースにします。アレルギー対応は可能ですか？",
            "vi": "Tôi sẽ chọn thực đơn 5 món. Có thể điều chỉnh cho người dị ứng không?",
            "en": "I’ll go with the 5-course. Can it be modified for allergies?"
          }
        },
        {
          "role": "ai",
          "text": "Of course. May I ask what the allergy is?",
          "translations": {
            "ko": "물론입니다. 알레르기가 무엇인지 여쭤봐도 될까요?",
            "zh": "当然可以。请问您对什么过敏？",
            "ja": "もちろんです。何のアレルギーがありますか？",
            "vi": "Tất nhiên. Bạn dị ứng với thứ gì?",
            "en": "Of course. May I ask what the allergy is?"
          }
        },
        {
          "role": "user",
          "text": "Shellfish.",
          "translations": {
            "ko": "조개류입니다.",
            "zh": "贝类。",
            "ja": "貝類です。",
            "vi": "Hải sản.",
            "en": "Shellfish."
          }
        },
        {
          "role": "ai",
          "text": "Understood. We’ll substitute accordingly.",
          "translations": {
            "ko": "알겠습니다. 그에 맞게 대체하겠습니다.",
            "zh": "明白了。我们会相应地进行替换。",
            "ja": "了解しました。それに合わせて代替品を用意します。",
            "vi": "Hiểu rồi. Chúng tôi sẽ thay thế phù hợp.",
            "en": "Understood. We’ll substitute accordingly."
          }
        },
        {
          "role": "user",
          "text": "Also, do you have a sommelier available tonight?",
          "translations": {
            "ko": "그리고 오늘 밤에 소믈리에가 있나요?",
            "zh": "另外，今晚有侍酒师在吗？",
            "ja": "また、今夜ソムリエはいますか？",
            "vi": "Ngoài ra, bạn có sommelier phục vụ tối nay không?",
            "en": "Also, do you have a sommelier available tonight?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, our sommelier will assist with pairings.",
          "translations": {
            "ko": "네, 우리 소믈리에가 와인 매칭을 도와드릴 것입니다.",
            "zh": "是的，我们的侍酒师会帮助您配酒。",
            "ja": "はい、ソムリエがペアリングのお手伝いをします。",
            "vi": "Có, sommelier của chúng tôi sẽ giúp bạn ghép đôi.",
            "en": "Yes, our sommelier will assist with pairings."
          }
        },
        {
          "role": "user",
          "text": "Fantastic. Do you offer valet parking?",
          "translations": {
            "ko": "훌륭합니다. 발렛 파킹을 제공하나요?",
            "zh": "太好了。你们提供代客泊车服务吗？",
            "ja": "素晴らしいです。バレーパーキングはありますか？",
            "vi": "Tuyệt vời. Bạn có dịch vụ đỗ xe không?",
            "en": "Fantastic. Do you offer valet parking?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, complimentary for dinner guests.",
          "translations": {
            "ko": "네, 저녁 식사 손님들에게 무료로 제공됩니다.",
            "zh": "是的，晚餐客人免费。",
            "ja": "はい、ディナーのお客様は無料です。",
            "vi": "Có, miễn phí cho khách ăn tối.",
            "en": "Yes, complimentary for dinner guests."
          }
        },
        {
          "role": "user",
          "text": "Excellent. I’d also like a quiet table if possible.",
          "translations": {
            "ko": "좋습니다. 가능하다면 조용한 테이블을 원합니다.",
            "zh": "很好。如果可能的话，我还想要一个安静的桌子。",
            "ja": "素晴らしいです。可能であれば静かな席をお願いします。",
            "vi": "Xuất sắc. Nếu có thể tôi muốn một bàn yên tĩnh.",
            "en": "Excellent. I’d also like a quiet table if possible."
          }
        },
        {
          "role": "ai",
          "text": "We’ll place you in a corner booth.",
          "translations": {
            "ko": "귀하를 코너 부스에 안내하겠습니다.",
            "zh": "我们会为您安排在角落的包厢。",
            "ja": "角のブースにご案内します。",
            "vi": "Chúng tôi sẽ sắp xếp cho bạn một gian bên góc.",
            "en": "We’ll place you in a corner booth."
          }
        },
        {
          "role": "user",
          "text": "Perfect. Please confirm under the name Jessica Park.",
          "translations": {
            "ko": "완벽합니다. 제시카 박 이름으로 확인해 주세요.",
            "zh": "完美。请以Jessica Park的名字确认。",
            "ja": "完璧です。ジェシカ・パークの名前で確認してください。",
            "vi": "Hoàn hảo. Xin hãy xác nhận dưới tên Jessica Park.",
            "en": "Perfect. Please confirm under the name Jessica Park."
          }
        },
        {
          "role": "ai",
          "text": "Confirmed for Jessica Park, 9:00 PM, 5-course modified tasting menu.",
          "translations": {
            "ko": "제시카 박님, 오늘 밤 9시, 5가지 코스의 변경된 시식 메뉴로 확인되었습니다.",
            "zh": "已为Jessica Park确认，晚上9点，5道菜的修改品尝菜单。",
            "ja": "ジェシカ・パーク様、9時、5品のアレルギー対応テイスティングメニューで確認しました。",
            "vi": "Đã xác nhận cho Jessica Park, 9 giờ tối, thực đơn thử nếm 5 món đã điều chỉnh.",
            "en": "Confirmed for Jessica Park, 9:00 PM, 5-course modified tasting menu."
          }
        },
        {
          "role": "user",
          "text": "Thank you. Looking forward to it.",
          "translations": {
            "ko": "감사합니다. 기대하고 있겠습니다.",
            "zh": "谢谢。期待今晚。",
            "ja": "ありがとうございます。楽しみにしています。",
            "vi": "Cảm ơn. Tôi rất mong chờ.",
            "en": "Thank you. Looking forward to it."
          }
        },
        {
          "role": "ai",
          "text": "It will be our pleasure.",
          "translations": {
            "ko": "저희의 영광입니다.",
            "zh": "我们很荣幸。",
            "ja": "こちらこそ、お待ちしております。",
            "vi": "Đó là niềm vinh hạnh của chúng tôi.",
            "en": "It will be our pleasure."
          }
        },
        {
          "role": "user",
          "text": "See you tonight.",
          "translations": {
            "ko": "오늘 밤에 뵙겠습니다.",
            "zh": "今晚见。",
            "ja": "今夜お会いしましょう。",
            "vi": "Hẹn gặp bạn tối nay.",
            "en": "See you tonight."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Dealing with a poor dining experience tactfully",
        "ko": "식사 경험이 좋지 않았을 때 예의 바르게 대처하기",
        "zh": "得体地处理不良的用餐体验",
        "ja": "食事の体験が良くなかった場合の適切な対応",
        "vi": "Xử lý tình huống ăn uống không tốt một cách tế nhị"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Good evening, this is Le Jardin. How may I assist you?",
          "translations": {
            "ko": "안녕하십니까, 이곳은 르 자르댕입니다. 어떻게 도와드릴까요?",
            "zh": "晚上好，这里是Le Jardin。有什么可以帮助您的吗？",
            "ja": "こんばんは、ル・ジャルダンです。何かお手伝いできることがありますか？",
            "vi": "Chào tối, đây là Le Jardin. Tôi có thể giúp gì cho bạn?",
            "en": "Good evening, this is Le Jardin. How may I assist you?"
          }
        },
        {
          "role": "user",
          "text": "Hi, I’d like to make a last-minute reservation for tonight.",
          "translations": {
            "ko": "안녕하세요, 오늘 밤에 마지막 순간 예약을 하고 싶습니다.",
            "zh": "嗨，我想预订今晚的临时位子。",
            "ja": "こんにちは、今夜の急な予約をしたいのですが。",
            "vi": "Chào, tôi muốn đặt chỗ vào phút chót cho tối nay.",
            "en": "Hi, I’d like to make a last-minute reservation for tonight."
          }
        },
        {
          "role": "ai",
          "text": "Let me check... We have availability at 9:00 PM.",
          "translations": {
            "ko": "확인해보겠습니다... 오늘 밤 9시에 예약 가능합니다.",
            "zh": "让我查一下...我们在晚上9点有空位。",
            "ja": "確認します... 9時に空きがあります。",
            "vi": "Để tôi kiểm tra... Chúng tôi còn chỗ vào lúc 9 giờ tối.",
            "en": "Let me check... We have availability at 9:00 PM."
          }
        },
        {
          "role": "user",
          "text": "That’s perfect. Do you offer tasting menus?",
          "translations": {
            "ko": "완벽합니다. 시식 메뉴를 제공하나요?",
            "zh": "那太好了。你们有品尝菜单吗？",
            "ja": "それで大丈夫です。テイスティングメニューはありますか？",
            "vi": "Hoàn hảo. Bạn có thực đơn thử nếm không?",
            "en": "That’s perfect. Do you offer tasting menus?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, we have a 5-course and a 7-course option.",
          "translations": {
            "ko": "네, 5가지 코스와 7가지 코스를 선택하실 수 있습니다.",
            "zh": "是的，我们有5道菜和7道菜的选择。",
            "ja": "はい、5品と7品のコースがあります。",
            "vi": "Có, chúng tôi có thực đơn 5 món và 7 món.",
            "en": "Yes, we have a 5-course and a 7-course option."
          }
        },
        {
          "role": "user",
          "text": "I’ll go with the 5-course. Can it be modified for allergies?",
          "translations": {
            "ko": "5가지 코스로 할게요. 알레르기에 맞게 변경할 수 있나요?",
            "zh": "我选择5道菜。可以根据过敏情况进行修改吗？",
            "ja": "5品のコースにします。アレルギー対応は可能ですか？",
            "vi": "Tôi sẽ chọn thực đơn 5 món. Có thể điều chỉnh cho người dị ứng không?",
            "en": "I’ll go with the 5-course. Can it be modified for allergies?"
          }
        },
        {
          "role": "ai",
          "text": "Of course. May I ask what the allergy is?",
          "translations": {
            "ko": "물론입니다. 알레르기가 무엇인지 여쭤봐도 될까요?",
            "zh": "当然可以。请问您对什么过敏？",
            "ja": "もちろんです。何のアレルギーがありますか？",
            "vi": "Tất nhiên. Bạn dị ứng với thứ gì?",
            "en": "Of course. May I ask what the allergy is?"
          }
        },
        {
          "role": "user",
          "text": "Shellfish.",
          "translations": {
            "ko": "조개류입니다.",
            "zh": "贝类。",
            "ja": "貝類です。",
            "vi": "Hải sản.",
            "en": "Shellfish."
          }
        },
        {
          "role": "ai",
          "text": "Understood. We’ll substitute accordingly.",
          "translations": {
            "ko": "알겠습니다. 그에 맞게 대체하겠습니다.",
            "zh": "明白了。我们会相应地进行替换。",
            "ja": "了解しました。それに合わせて代替品を用意します。",
            "vi": "Hiểu rồi. Chúng tôi sẽ thay thế phù hợp.",
            "en": "Understood. We’ll substitute accordingly."
          }
        },
        {
          "role": "user",
          "text": "Also, do you have a sommelier available tonight?",
          "translations": {
            "ko": "그리고 오늘 밤에 소믈리에가 있나요?",
            "zh": "另外，今晚有侍酒师在吗？",
            "ja": "また、今夜ソムリエはいますか？",
            "vi": "Ngoài ra, bạn có sommelier phục vụ tối nay không?",
            "en": "Also, do you have a sommelier available tonight?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, our sommelier will assist with pairings.",
          "translations": {
            "ko": "네, 우리 소믈리에가 와인 매칭을 도와드릴 것입니다.",
            "zh": "是的，我们的侍酒师会帮助您配酒。",
            "ja": "はい、ソムリエがペアリングのお手伝いをします。",
            "vi": "Có, sommelier của chúng tôi sẽ giúp bạn ghép đôi.",
            "en": "Yes, our sommelier will assist with pairings."
          }
        },
        {
          "role": "user",
          "text": "Fantastic. Do you offer valet parking?",
          "translations": {
            "ko": "훌륭합니다. 발렛 파킹을 제공하나요?",
            "zh": "太好了。你们提供代客泊车服务吗？",
            "ja": "素晴らしいです。バレーパーキングはありますか？",
            "vi": "Tuyệt vời. Bạn có dịch vụ đỗ xe không?",
            "en": "Fantastic. Do you offer valet parking?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, complimentary for dinner guests.",
          "translations": {
            "ko": "네, 저녁 식사 손님들에게 무료로 제공됩니다.",
            "zh": "是的，晚餐客人免费。",
            "ja": "はい、ディナーのお客様は無料です。",
            "vi": "Có, miễn phí cho khách ăn tối.",
            "en": "Yes, complimentary for dinner guests."
          }
        },
        {
          "role": "user",
          "text": "Excellent. I’d also like a quiet table if possible.",
          "translations": {
            "ko": "좋습니다. 가능하다면 조용한 테이블을 원합니다.",
            "zh": "很好。如果可能的话，我还想要一个安静的桌子。",
            "ja": "素晴らしいです。可能であれば静かな席をお願いします。",
            "vi": "Xuất sắc. Nếu có thể tôi muốn một bàn yên tĩnh.",
            "en": "Excellent. I’d also like a quiet table if possible."
          }
        },
        {
          "role": "ai",
          "text": "We’ll place you in a corner booth.",
          "translations": {
            "ko": "귀하를 코너 부스에 안내하겠습니다.",
            "zh": "我们会为您安排在角落的包厢。",
            "ja": "角のブースにご案内します。",
            "vi": "Chúng tôi sẽ sắp xếp cho bạn một gian bên góc.",
            "en": "We’ll place you in a corner booth."
          }
        },
        {
          "role": "user",
          "text": "Perfect. Please confirm under the name Jessica Park.",
          "translations": {
            "ko": "완벽합니다. 제시카 박 이름으로 확인해 주세요.",
            "zh": "完美。请以Jessica Park的名字确认。",
            "ja": "完璧です。ジェシカ・パークの名前で確認してください。",
            "vi": "Hoàn hảo. Xin hãy xác nhận dưới tên Jessica Park.",
            "en": "Perfect. Please confirm under the name Jessica Park."
          }
        },
        {
          "role": "ai",
          "text": "Confirmed for Jessica Park, 9:00 PM, 5-course modified tasting menu.",
          "translations": {
            "ko": "제시카 박님, 오늘 밤 9시, 5가지 코스의 변경된 시식 메뉴로 확인되었습니다.",
            "zh": "已为Jessica Park确认，晚上9点，5道菜的修改品尝菜单。",
            "ja": "ジェシカ・パーク様、9時、5品のアレルギー対応テイスティングメニューで確認しました。",
            "vi": "Đã xác nhận cho Jessica Park, 9 giờ tối, thực đơn thử nếm 5 món đã điều chỉnh.",
            "en": "Confirmed for Jessica Park, 9:00 PM, 5-course modified tasting menu."
          }
        },
        {
          "role": "user",
          "text": "Thank you. Looking forward to it.",
          "translations": {
            "ko": "감사합니다. 기대하고 있겠습니다.",
            "zh": "谢谢。期待今晚。",
            "ja": "ありがとうございます。楽しみにしています。",
            "vi": "Cảm ơn. Tôi rất mong chờ.",
            "en": "Thank you. Looking forward to it."
          }
        },
        {
          "role": "ai",
          "text": "It will be our pleasure.",
          "translations": {
            "ko": "저희의 영광입니다.",
            "zh": "我们很荣幸。",
            "ja": "こちらこそ、お待ちしております。",
            "vi": "Đó là niềm vinh hạnh của chúng tôi.",
            "en": "It will be our pleasure."
          }
        },
        {
          "role": "user",
          "text": "See you tonight.",
          "translations": {
            "ko": "오늘 밤에 뵙겠습니다.",
            "zh": "今晚见。",
            "ja": "今夜お会いしましょう。",
            "vi": "Hẹn gặp bạn tối nay.",
            "en": "See you tonight."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Arranging a surprise celebration at the restaurant",
        "ko": "레스토랑에서 서프라이즈 축하 행사 준비하기",
        "zh": "在餐厅安排惊喜庆祝活动",
        "ja": "レストランでのサプライズのお祝いの手配",
        "vi": "Sắp xếp một bữa tiệc bất ngờ tại nhà hàng"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Good evening, this is Le Jardin. How may I assist you?",
          "translations": {
            "ko": "안녕하십니까, 이곳은 르 자르댕입니다. 어떻게 도와드릴까요?",
            "zh": "晚上好，这里是Le Jardin。有什么可以帮助您的吗？",
            "ja": "こんばんは、ル・ジャルダンです。何かお手伝いできることがありますか？",
            "vi": "Chào tối, đây là Le Jardin. Tôi có thể giúp gì cho bạn?",
            "en": "Good evening, this is Le Jardin. How may I assist you?"
          }
        },
        {
          "role": "user",
          "text": "Hi, I’d like to make a last-minute reservation for tonight.",
          "translations": {
            "ko": "안녕하세요, 오늘 밤에 마지막 순간 예약을 하고 싶습니다.",
            "zh": "嗨，我想预订今晚的临时位子。",
            "ja": "こんにちは、今夜の急な予約をしたいのですが。",
            "vi": "Chào, tôi muốn đặt chỗ vào phút chót cho tối nay.",
            "en": "Hi, I’d like to make a last-minute reservation for tonight."
          }
        },
        {
          "role": "ai",
          "text": "Let me check... We have availability at 9:00 PM.",
          "translations": {
            "ko": "확인해보겠습니다... 오늘 밤 9시에 예약 가능합니다.",
            "zh": "让我查一下...我们在晚上9点有空位。",
            "ja": "確認します... 9時に空きがあります。",
            "vi": "Để tôi kiểm tra... Chúng tôi còn chỗ vào lúc 9 giờ tối.",
            "en": "Let me check... We have availability at 9:00 PM."
          }
        },
        {
          "role": "user",
          "text": "That’s perfect. Do you offer tasting menus?",
          "translations": {
            "ko": "완벽합니다. 시식 메뉴를 제공하나요?",
            "zh": "那太好了。你们有品尝菜单吗？",
            "ja": "それで大丈夫です。テイスティングメニューはありますか？",
            "vi": "Hoàn hảo. Bạn có thực đơn thử nếm không?",
            "en": "That’s perfect. Do you offer tasting menus?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, we have a 5-course and a 7-course option.",
          "translations": {
            "ko": "네, 5가지 코스와 7가지 코스를 선택하실 수 있습니다.",
            "zh": "是的，我们有5道菜和7道菜的选择。",
            "ja": "はい、5品と7品のコースがあります。",
            "vi": "Có, chúng tôi có thực đơn 5 món và 7 món.",
            "en": "Yes, we have a 5-course and a 7-course option."
          }
        },
        {
          "role": "user",
          "text": "I’ll go with the 5-course. Can it be modified for allergies?",
          "translations": {
            "ko": "5가지 코스로 할게요. 알레르기에 맞게 변경할 수 있나요?",
            "zh": "我选择5道菜。可以根据过敏情况进行修改吗？",
            "ja": "5品のコースにします。アレルギー対応は可能ですか？",
            "vi": "Tôi sẽ chọn thực đơn 5 món. Có thể điều chỉnh cho người dị ứng không?",
            "en": "I’ll go with the 5-course. Can it be modified for allergies?"
          }
        },
        {
          "role": "ai",
          "text": "Of course. May I ask what the allergy is?",
          "translations": {
            "ko": "물론입니다. 알레르기가 무엇인지 여쭤봐도 될까요?",
            "zh": "当然可以。请问您对什么过敏？",
            "ja": "もちろんです。何のアレルギーがありますか？",
            "vi": "Tất nhiên. Bạn dị ứng với thứ gì?",
            "en": "Of course. May I ask what the allergy is?"
          }
        },
        {
          "role": "user",
          "text": "Shellfish.",
          "translations": {
            "ko": "조개류입니다.",
            "zh": "贝类。",
            "ja": "貝類です。",
            "vi": "Hải sản.",
            "en": "Shellfish."
          }
        },
        {
          "role": "ai",
          "text": "Understood. We’ll substitute accordingly.",
          "translations": {
            "ko": "알겠습니다. 그에 맞게 대체하겠습니다.",
            "zh": "明白了。我们会相应地进行替换。",
            "ja": "了解しました。それに合わせて代替品を用意します。",
            "vi": "Hiểu rồi. Chúng tôi sẽ thay thế phù hợp.",
            "en": "Understood. We’ll substitute accordingly."
          }
        },
        {
          "role": "user",
          "text": "Also, do you have a sommelier available tonight?",
          "translations": {
            "ko": "그리고 오늘 밤에 소믈리에가 있나요?",
            "zh": "另外，今晚有侍酒师在吗？",
            "ja": "また、今夜ソムリエはいますか？",
            "vi": "Ngoài ra, bạn có sommelier phục vụ tối nay không?",
            "en": "Also, do you have a sommelier available tonight?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, our sommelier will assist with pairings.",
          "translations": {
            "ko": "네, 우리 소믈리에가 와인 매칭을 도와드릴 것입니다.",
            "zh": "是的，我们的侍酒师会帮助您配酒。",
            "ja": "はい、ソムリエがペアリングのお手伝いをします。",
            "vi": "Có, sommelier của chúng tôi sẽ giúp bạn ghép đôi.",
            "en": "Yes, our sommelier will assist with pairings."
          }
        },
        {
          "role": "user",
          "text": "Fantastic. Do you offer valet parking?",
          "translations": {
            "ko": "훌륭합니다. 발렛 파킹을 제공하나요?",
            "zh": "太好了。你们提供代客泊车服务吗？",
            "ja": "素晴らしいです。バレーパーキングはありますか？",
            "vi": "Tuyệt vời. Bạn có dịch vụ đỗ xe không?",
            "en": "Fantastic. Do you offer valet parking?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, complimentary for dinner guests.",
          "translations": {
            "ko": "네, 저녁 식사 손님들에게 무료로 제공됩니다.",
            "zh": "是的，晚餐客人免费。",
            "ja": "はい、ディナーのお客様は無料です。",
            "vi": "Có, miễn phí cho khách ăn tối.",
            "en": "Yes, complimentary for dinner guests."
          }
        },
        {
          "role": "user",
          "text": "Excellent. I’d also like a quiet table if possible.",
          "translations": {
            "ko": "좋습니다. 가능하다면 조용한 테이블을 원합니다.",
            "zh": "很好。如果可能的话，我还想要一个安静的桌子。",
            "ja": "素晴らしいです。可能であれば静かな席をお願いします。",
            "vi": "Xuất sắc. Nếu có thể tôi muốn một bàn yên tĩnh.",
            "en": "Excellent. I’d also like a quiet table if possible."
          }
        },
        {
          "role": "ai",
          "text": "We’ll place you in a corner booth.",
          "translations": {
            "ko": "귀하를 코너 부스에 안내하겠습니다.",
            "zh": "我们会为您安排在角落的包厢。",
            "ja": "角のブースにご案内します。",
            "vi": "Chúng tôi sẽ sắp xếp cho bạn một gian bên góc.",
            "en": "We’ll place you in a corner booth."
          }
        },
        {
          "role": "user",
          "text": "Perfect. Please confirm under the name Jessica Park.",
          "translations": {
            "ko": "완벽합니다. 제시카 박 이름으로 확인해 주세요.",
            "zh": "完美。请以Jessica Park的名字确认。",
            "ja": "完璧です。ジェシカ・パークの名前で確認してください。",
            "vi": "Hoàn hảo. Xin hãy xác nhận dưới tên Jessica Park.",
            "en": "Perfect. Please confirm under the name Jessica Park."
          }
        },
        {
          "role": "ai",
          "text": "Confirmed for Jessica Park, 9:00 PM, 5-course modified tasting menu.",
          "translations": {
            "ko": "제시카 박님, 오늘 밤 9시, 5가지 코스의 변경된 시식 메뉴로 확인되었습니다.",
            "zh": "已为Jessica Park确认，晚上9点，5道菜的修改品尝菜单。",
            "ja": "ジェシカ・パーク様、9時、5品のアレルギー対応テイスティングメニューで確認しました。",
            "vi": "Đã xác nhận cho Jessica Park, 9 giờ tối, thực đơn thử nếm 5 món đã điều chỉnh.",
            "en": "Confirmed for Jessica Park, 9:00 PM, 5-course modified tasting menu."
          }
        },
        {
          "role": "user",
          "text": "Thank you. Looking forward to it.",
          "translations": {
            "ko": "감사합니다. 기대하고 있겠습니다.",
            "zh": "谢谢。期待今晚。",
            "ja": "ありがとうございます。楽しみにしています。",
            "vi": "Cảm ơn. Tôi rất mong chờ.",
            "en": "Thank you. Looking forward to it."
          }
        },
        {
          "role": "ai",
          "text": "It will be our pleasure.",
          "translations": {
            "ko": "저희의 영광입니다.",
            "zh": "我们很荣幸。",
            "ja": "こちらこそ、お待ちしております。",
            "vi": "Đó là niềm vinh hạnh của chúng tôi.",
            "en": "It will be our pleasure."
          }
        },
        {
          "role": "user",
          "text": "See you tonight.",
          "translations": {
            "ko": "오늘 밤에 뵙겠습니다.",
            "zh": "今晚见。",
            "ja": "今夜お会いしましょう。",
            "vi": "Hẹn gặp bạn tối nay.",
            "en": "See you tonight."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Reviewing the restaurant publicly",
        "ko": "레스토랑에 대한 공개적인 리뷰 작성하기",
        "zh": "公开评论餐厅",
        "ja": "レストランの公開レビュー",
        "vi": "Đánh giá công khai nhà hàng"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Good evening, this is Le Jardin. How may I assist you?",
          "translations": {
            "ko": "안녕하십니까, 이곳은 르 자르댕입니다. 어떻게 도와드릴까요?",
            "zh": "晚上好，这里是Le Jardin。有什么可以帮助您的吗？",
            "ja": "こんばんは、ル・ジャルダンです。何かお手伝いできることがありますか？",
            "vi": "Chào tối, đây là Le Jardin. Tôi có thể giúp gì cho bạn?",
            "en": "Good evening, this is Le Jardin. How may I assist you?"
          }
        },
        {
          "role": "user",
          "text": "Hi, I’d like to make a last-minute reservation for tonight.",
          "translations": {
            "ko": "안녕하세요, 오늘 밤에 마지막 순간 예약을 하고 싶습니다.",
            "zh": "嗨，我想预订今晚的临时位子。",
            "ja": "こんにちは、今夜の急な予約をしたいのですが。",
            "vi": "Chào, tôi muốn đặt chỗ vào phút chót cho tối nay.",
            "en": "Hi, I’d like to make a last-minute reservation for tonight."
          }
        },
        {
          "role": "ai",
          "text": "Let me check... We have availability at 9:00 PM.",
          "translations": {
            "ko": "확인해보겠습니다... 오늘 밤 9시에 예약 가능합니다.",
            "zh": "让我查一下...我们在晚上9点有空位。",
            "ja": "確認します... 9時に空きがあります。",
            "vi": "Để tôi kiểm tra... Chúng tôi còn chỗ vào lúc 9 giờ tối.",
            "en": "Let me check... We have availability at 9:00 PM."
          }
        },
        {
          "role": "user",
          "text": "That’s perfect. Do you offer tasting menus?",
          "translations": {
            "ko": "완벽합니다. 시식 메뉴를 제공하나요?",
            "zh": "那太好了。你们有品尝菜单吗？",
            "ja": "それで大丈夫です。テイスティングメニューはありますか？",
            "vi": "Hoàn hảo. Bạn có thực đơn thử nếm không?",
            "en": "That’s perfect. Do you offer tasting menus?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, we have a 5-course and a 7-course option.",
          "translations": {
            "ko": "네, 5가지 코스와 7가지 코스를 선택하실 수 있습니다.",
            "zh": "是的，我们有5道菜和7道菜的选择。",
            "ja": "はい、5品と7品のコースがあります。",
            "vi": "Có, chúng tôi có thực đơn 5 món và 7 món.",
            "en": "Yes, we have a 5-course and a 7-course option."
          }
        },
        {
          "role": "user",
          "text": "I’ll go with the 5-course. Can it be modified for allergies?",
          "translations": {
            "ko": "5가지 코스로 할게요. 알레르기에 맞게 변경할 수 있나요?",
            "zh": "我选择5道菜。可以根据过敏情况进行修改吗？",
            "ja": "5品のコースにします。アレルギー対応は可能ですか？",
            "vi": "Tôi sẽ chọn thực đơn 5 món. Có thể điều chỉnh cho người dị ứng không?",
            "en": "I’ll go with the 5-course. Can it be modified for allergies?"
          }
        },
        {
          "role": "ai",
          "text": "Of course. May I ask what the allergy is?",
          "translations": {
            "ko": "물론입니다. 알레르기가 무엇인지 여쭤봐도 될까요?",
            "zh": "当然可以。请问您对什么过敏？",
            "ja": "もちろんです。何のアレルギーがありますか？",
            "vi": "Tất nhiên. Bạn dị ứng với thứ gì?",
            "en": "Of course. May I ask what the allergy is?"
          }
        },
        {
          "role": "user",
          "text": "Shellfish.",
          "translations": {
            "ko": "조개류입니다.",
            "zh": "贝类。",
            "ja": "貝類です。",
            "vi": "Hải sản.",
            "en": "Shellfish."
          }
        },
        {
          "role": "ai",
          "text": "Understood. We’ll substitute accordingly.",
          "translations": {
            "ko": "알겠습니다. 그에 맞게 대체하겠습니다.",
            "zh": "明白了。我们会相应地进行替换。",
            "ja": "了解しました。それに合わせて代替品を用意します。",
            "vi": "Hiểu rồi. Chúng tôi sẽ thay thế phù hợp.",
            "en": "Understood. We’ll substitute accordingly."
          }
        },
        {
          "role": "user",
          "text": "Also, do you have a sommelier available tonight?",
          "translations": {
            "ko": "그리고 오늘 밤에 소믈리에가 있나요?",
            "zh": "另外，今晚有侍酒师在吗？",
            "ja": "また、今夜ソムリエはいますか？",
            "vi": "Ngoài ra, bạn có sommelier phục vụ tối nay không?",
            "en": "Also, do you have a sommelier available tonight?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, our sommelier will assist with pairings.",
          "translations": {
            "ko": "네, 우리 소믈리에가 와인 매칭을 도와드릴 것입니다.",
            "zh": "是的，我们的侍酒师会帮助您配酒。",
            "ja": "はい、ソムリエがペアリングのお手伝いをします。",
            "vi": "Có, sommelier của chúng tôi sẽ giúp bạn ghép đôi.",
            "en": "Yes, our sommelier will assist with pairings."
          }
        },
        {
          "role": "user",
          "text": "Fantastic. Do you offer valet parking?",
          "translations": {
            "ko": "훌륭합니다. 발렛 파킹을 제공하나요?",
            "zh": "太好了。你们提供代客泊车服务吗？",
            "ja": "素晴らしいです。バレーパーキングはありますか？",
            "vi": "Tuyệt vời. Bạn có dịch vụ đỗ xe không?",
            "en": "Fantastic. Do you offer valet parking?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, complimentary for dinner guests.",
          "translations": {
            "ko": "네, 저녁 식사 손님들에게 무료로 제공됩니다.",
            "zh": "是的，晚餐客人免费。",
            "ja": "はい、ディナーのお客様は無料です。",
            "vi": "Có, miễn phí cho khách ăn tối.",
            "en": "Yes, complimentary for dinner guests."
          }
        },
        {
          "role": "user",
          "text": "Excellent. I’d also like a quiet table if possible.",
          "translations": {
            "ko": "좋습니다. 가능하다면 조용한 테이블을 원합니다.",
            "zh": "很好。如果可能的话，我还想要一个安静的桌子。",
            "ja": "素晴らしいです。可能であれば静かな席をお願いします。",
            "vi": "Xuất sắc. Nếu có thể tôi muốn một bàn yên tĩnh.",
            "en": "Excellent. I’d also like a quiet table if possible."
          }
        },
        {
          "role": "ai",
          "text": "We’ll place you in a corner booth.",
          "translations": {
            "ko": "귀하를 코너 부스에 안내하겠습니다.",
            "zh": "我们会为您安排在角落的包厢。",
            "ja": "角のブースにご案内します。",
            "vi": "Chúng tôi sẽ sắp xếp cho bạn một gian bên góc.",
            "en": "We’ll place you in a corner booth."
          }
        },
        {
          "role": "user",
          "text": "Perfect. Please confirm under the name Jessica Park.",
          "translations": {
            "ko": "완벽합니다. 제시카 박 이름으로 확인해 주세요.",
            "zh": "完美。请以Jessica Park的名字确认。",
            "ja": "完璧です。ジェシカ・パークの名前で確認してください。",
            "vi": "Hoàn hảo. Xin hãy xác nhận dưới tên Jessica Park.",
            "en": "Perfect. Please confirm under the name Jessica Park."
          }
        },
        {
          "role": "ai",
          "text": "Confirmed for Jessica Park, 9:00 PM, 5-course modified tasting menu.",
          "translations": {
            "ko": "제시카 박님, 오늘 밤 9시, 5가지 코스의 변경된 시식 메뉴로 확인되었습니다.",
            "zh": "已为Jessica Park确认，晚上9点，5道菜的修改品尝菜单。",
            "ja": "ジェシカ・パーク様、9時、5品のアレルギー対応テイスティングメニューで確認しました。",
            "vi": "Đã xác nhận cho Jessica Park, 9 giờ tối, thực đơn thử nếm 5 món đã điều chỉnh.",
            "en": "Confirmed for Jessica Park, 9:00 PM, 5-course modified tasting menu."
          }
        },
        {
          "role": "user",
          "text": "Thank you. Looking forward to it.",
          "translations": {
            "ko": "감사합니다. 기대하고 있겠습니다.",
            "zh": "谢谢。期待今晚。",
            "ja": "ありがとうございます。楽しみにしています。",
            "vi": "Cảm ơn. Tôi rất mong chờ.",
            "en": "Thank you. Looking forward to it."
          }
        },
        {
          "role": "ai",
          "text": "It will be our pleasure.",
          "translations": {
            "ko": "저희의 영광입니다.",
            "zh": "我们很荣幸。",
            "ja": "こちらこそ、お待ちしております。",
            "vi": "Đó là niềm vinh hạnh của chúng tôi.",
            "en": "It will be our pleasure."
          }
        },
        {
          "role": "user",
          "text": "See you tonight.",
          "translations": {
            "ko": "오늘 밤에 뵙겠습니다.",
            "zh": "今晚见。",
            "ja": "今夜お会いしましょう。",
            "vi": "Hẹn gặp bạn tối nay.",
            "en": "See you tonight."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Negotiating with a restaurant manager about a special event",
        "ko": "특별 이벤트에 대해 레스토랑 매니저와 협상하기",
        "zh": "与餐厅经理就特殊活动进行谈判",
        "ja": "特別なイベントについてレストランマネージャーと交渉する",
        "vi": "Thương lượng với quản lý nhà hàng về một sự kiện đặc biệt"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Good evening, this is Le Jardin. How may I assist you?",
          "translations": {
            "ko": "안녕하십니까, 이곳은 르 자르댕입니다. 어떻게 도와드릴까요?",
            "zh": "晚上好，这里是Le Jardin。有什么可以帮助您的吗？",
            "ja": "こんばんは、ル・ジャルダンです。何かお手伝いできることがありますか？",
            "vi": "Chào tối, đây là Le Jardin. Tôi có thể giúp gì cho bạn?",
            "en": "Good evening, this is Le Jardin. How may I assist you?"
          }
        },
        {
          "role": "user",
          "text": "Hi, I’d like to make a last-minute reservation for tonight.",
          "translations": {
            "ko": "안녕하세요, 오늘 밤에 마지막 순간 예약을 하고 싶습니다.",
            "zh": "嗨，我想预订今晚的临时位子。",
            "ja": "こんにちは、今夜の急な予約をしたいのですが。",
            "vi": "Chào, tôi muốn đặt chỗ vào phút chót cho tối nay.",
            "en": "Hi, I’d like to make a last-minute reservation for tonight."
          }
        },
        {
          "role": "ai",
          "text": "Let me check... We have availability at 9:00 PM.",
          "translations": {
            "ko": "확인해보겠습니다... 오늘 밤 9시에 예약 가능합니다.",
            "zh": "让我查一下...我们在晚上9点有空位。",
            "ja": "確認します... 9時に空きがあります。",
            "vi": "Để tôi kiểm tra... Chúng tôi còn chỗ vào lúc 9 giờ tối.",
            "en": "Let me check... We have availability at 9:00 PM."
          }
        },
        {
          "role": "user",
          "text": "That’s perfect. Do you offer tasting menus?",
          "translations": {
            "ko": "완벽합니다. 시식 메뉴를 제공하나요?",
            "zh": "那太好了。你们有品尝菜单吗？",
            "ja": "それで大丈夫です。テイスティングメニューはありますか？",
            "vi": "Hoàn hảo. Bạn có thực đơn thử nếm không?",
            "en": "That’s perfect. Do you offer tasting menus?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, we have a 5-course and a 7-course option.",
          "translations": {
            "ko": "네, 5가지 코스와 7가지 코스를 선택하실 수 있습니다.",
            "zh": "是的，我们有5道菜和7道菜的选择。",
            "ja": "はい、5品と7品のコースがあります。",
            "vi": "Có, chúng tôi có thực đơn 5 món và 7 món.",
            "en": "Yes, we have a 5-course and a 7-course option."
          }
        },
        {
          "role": "user",
          "text": "I’ll go with the 5-course. Can it be modified for allergies?",
          "translations": {
            "ko": "5가지 코스로 할게요. 알레르기에 맞게 변경할 수 있나요?",
            "zh": "我选择5道菜。可以根据过敏情况进行修改吗？",
            "ja": "5品のコースにします。アレルギー対応は可能ですか？",
            "vi": "Tôi sẽ chọn thực đơn 5 món. Có thể điều chỉnh cho người dị ứng không?",
            "en": "I’ll go with the 5-course. Can it be modified for allergies?"
          }
        },
        {
          "role": "ai",
          "text": "Of course. May I ask what the allergy is?",
          "translations": {
            "ko": "물론입니다. 알레르기가 무엇인지 여쭤봐도 될까요?",
            "zh": "当然可以。请问您对什么过敏？",
            "ja": "もちろんです。何のアレルギーがありますか？",
            "vi": "Tất nhiên. Bạn dị ứng với thứ gì?",
            "en": "Of course. May I ask what the allergy is?"
          }
        },
        {
          "role": "user",
          "text": "Shellfish.",
          "translations": {
            "ko": "조개류입니다.",
            "zh": "贝类。",
            "ja": "貝類です。",
            "vi": "Hải sản.",
            "en": "Shellfish."
          }
        },
        {
          "role": "ai",
          "text": "Understood. We’ll substitute accordingly.",
          "translations": {
            "ko": "알겠습니다. 그에 맞게 대체하겠습니다.",
            "zh": "明白了。我们会相应地进行替换。",
            "ja": "了解しました。それに合わせて代替品を用意します。",
            "vi": "Hiểu rồi. Chúng tôi sẽ thay thế phù hợp.",
            "en": "Understood. We’ll substitute accordingly."
          }
        },
        {
          "role": "user",
          "text": "Also, do you have a sommelier available tonight?",
          "translations": {
            "ko": "그리고 오늘 밤에 소믈리에가 있나요?",
            "zh": "另外，今晚有侍酒师在吗？",
            "ja": "また、今夜ソムリエはいますか？",
            "vi": "Ngoài ra, bạn có sommelier phục vụ tối nay không?",
            "en": "Also, do you have a sommelier available tonight?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, our sommelier will assist with pairings.",
          "translations": {
            "ko": "네, 우리 소믈리에가 와인 매칭을 도와드릴 것입니다.",
            "zh": "是的，我们的侍酒师会帮助您配酒。",
            "ja": "はい、ソムリエがペアリングのお手伝いをします。",
            "vi": "Có, sommelier của chúng tôi sẽ giúp bạn ghép đôi.",
            "en": "Yes, our sommelier will assist with pairings."
          }
        },
        {
          "role": "user",
          "text": "Fantastic. Do you offer valet parking?",
          "translations": {
            "ko": "훌륭합니다. 발렛 파킹을 제공하나요?",
            "zh": "太好了。你们提供代客泊车服务吗？",
            "ja": "素晴らしいです。バレーパーキングはありますか？",
            "vi": "Tuyệt vời. Bạn có dịch vụ đỗ xe không?",
            "en": "Fantastic. Do you offer valet parking?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, complimentary for dinner guests.",
          "translations": {
            "ko": "네, 저녁 식사 손님들에게 무료로 제공됩니다.",
            "zh": "是的，晚餐客人免费。",
            "ja": "はい、ディナーのお客様は無料です。",
            "vi": "Có, miễn phí cho khách ăn tối.",
            "en": "Yes, complimentary for dinner guests."
          }
        },
        {
          "role": "user",
          "text": "Excellent. I’d also like a quiet table if possible.",
          "translations": {
            "ko": "좋습니다. 가능하다면 조용한 테이블을 원합니다.",
            "zh": "很好。如果可能的话，我还想要一个安静的桌子。",
            "ja": "素晴らしいです。可能であれば静かな席をお願いします。",
            "vi": "Xuất sắc. Nếu có thể tôi muốn một bàn yên tĩnh.",
            "en": "Excellent. I’d also like a quiet table if possible."
          }
        },
        {
          "role": "ai",
          "text": "We’ll place you in a corner booth.",
          "translations": {
            "ko": "귀하를 코너 부스에 안내하겠습니다.",
            "zh": "我们会为您安排在角落的包厢。",
            "ja": "角のブースにご案内します。",
            "vi": "Chúng tôi sẽ sắp xếp cho bạn một gian bên góc.",
            "en": "We’ll place you in a corner booth."
          }
        },
        {
          "role": "user",
          "text": "Perfect. Please confirm under the name Jessica Park.",
          "translations": {
            "ko": "완벽합니다. 제시카 박 이름으로 확인해 주세요.",
            "zh": "完美。请以Jessica Park的名字确认。",
            "ja": "完璧です。ジェシカ・パークの名前で確認してください。",
            "vi": "Hoàn hảo. Xin hãy xác nhận dưới tên Jessica Park.",
            "en": "Perfect. Please confirm under the name Jessica Park."
          }
        },
        {
          "role": "ai",
          "text": "Confirmed for Jessica Park, 9:00 PM, 5-course modified tasting menu.",
          "translations": {
            "ko": "제시카 박님, 오늘 밤 9시, 5가지 코스의 변경된 시식 메뉴로 확인되었습니다.",
            "zh": "已为Jessica Park确认，晚上9点，5道菜的修改品尝菜单。",
            "ja": "ジェシカ・パーク様、9時、5品のアレルギー対応テイスティングメニューで確認しました。",
            "vi": "Đã xác nhận cho Jessica Park, 9 giờ tối, thực đơn thử nếm 5 món đã điều chỉnh.",
            "en": "Confirmed for Jessica Park, 9:00 PM, 5-course modified tasting menu."
          }
        },
        {
          "role": "user",
          "text": "Thank you. Looking forward to it.",
          "translations": {
            "ko": "감사합니다. 기대하고 있겠습니다.",
            "zh": "谢谢。期待今晚。",
            "ja": "ありがとうございます。楽しみにしています。",
            "vi": "Cảm ơn. Tôi rất mong chờ.",
            "en": "Thank you. Looking forward to it."
          }
        },
        {
          "role": "ai",
          "text": "It will be our pleasure.",
          "translations": {
            "ko": "저희의 영광입니다.",
            "zh": "我们很荣幸。",
            "ja": "こちらこそ、お待ちしております。",
            "vi": "Đó là niềm vinh hạnh của chúng tôi.",
            "en": "It will be our pleasure."
          }
        },
        {
          "role": "user",
          "text": "See you tonight.",
          "translations": {
            "ko": "오늘 밤에 뵙겠습니다.",
            "zh": "今晚见。",
            "ja": "今夜お会いしましょう。",
            "vi": "Hẹn gặp bạn tối nay.",
            "en": "See you tonight."
          }
        }
      ]
    }
  ]
};
