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
        "ko": "전화로 예약하기",
        "zh": "通过电话预订",
        "ja": "電話で予約をする",
        "vi": "Đặt chỗ qua điện thoại"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Good evening, thank you for calling Luna Restaurant. How can I help you?",
          "translations": {
            "ko": "안녕하십니까, Luna 레스토랑에 전화해 주셔서 감사합니다. 어떻게 도와드릴까요?",
            "zh": "晚上好，感谢您致电Luna餐厅。有什么可以帮助您的吗？",
            "ja": "こんばんは、ルナレストランにお電話いただきありがとうございます。何かお手伝いできることがありますか？",
            "vi": "Chào buổi tối, cảm ơn bạn đã gọi đến nhà hàng Luna. Tôi có thể giúp gì cho bạn?"
          }
        },
        {
          "role": "user",
          "text": "Hi, I’d like to make a dinner reservation for this Saturday.",
          "translations": {
            "ko": "안녕하세요, 이번 토요일에 저녁 식사 예약을 하고 싶습니다.",
            "zh": "嗨，我想预订这个星期六的晚餐。",
            "ja": "こんにちは、今週の土曜日にディナーの予約をしたいのですが。",
            "vi": "Chào, tôi muốn đặt bàn cho bữa tối vào thứ Bảy này."
          }
        },
        {
          "role": "ai",
          "text": "Certainly. For how many people would you like to make the reservation?",
          "translations": {
            "ko": "알겠습니다. 몇 명을 위한 예약을 원하시나요?",
            "zh": "好的。请问您要预订几个人的位置？",
            "ja": "了解しました。何名様でのご予約でしょうか？",
            "vi": "Chắc chắn. Bạn muốn đặt chỗ cho bao nhiêu người?"
          }
        },
        {
          "role": "user",
          "text": "It’ll be for four people.",
          "translations": {
            "ko": "네, 네 명입니다.",
            "zh": "是四个人。",
            "ja": "4人でお願いします。",
            "vi": "Sẽ là cho bốn người."
          }
        },
        {
          "role": "ai",
          "text": "Got it. Do you prefer indoor or outdoor seating?",
          "translations": {
            "ko": "알겠습니다. 실내 좌석과 야외 좌석 중 어느 것을 선호하시나요?",
            "zh": "明白了。您更喜欢室内还是室外的座位？",
            "ja": "承知しました。室内と屋外、どちらの席をご希望ですか？",
            "vi": "Tôi hiểu rồi. Bạn có muốn ngồi trong nhà hay ngoài trời không?"
          }
        },
        {
          "role": "user",
          "text": "Indoor would be great, thank you.",
          "translations": {
            "ko": "실내 좌석이 좋겠습니다, 감사합니다.",
            "zh": "室内的会更好，谢谢。",
            "ja": "室内でお願いします。",
            "vi": "Ngồi trong nhà sẽ tốt hơn, cảm ơn bạn."
          }
        },
        {
          "role": "ai",
          "text": "We have availability at both 6:30 and 7:00. Which would you prefer?",
          "translations": {
            "ko": "6시 30분과 7시에 자리가 있습니다. 어느 시간을 선호하시나요?",
            "zh": "我们在6:30和7:00都有空位。您更喜欢哪个时间？",
            "ja": "6時半と7時、どちらがよろしいでしょうか？",
            "vi": "Chúng tôi còn chỗ vào lúc 6:30 và 7:00. Bạn muốn chọn giờ nào?"
          }
        },
        {
          "role": "user",
          "text": "7:00 sounds perfect.",
          "translations": {
            "ko": "7시가 좋겠습니다.",
            "zh": "7:00听起来很好。",
            "ja": "7時でいいです。",
            "vi": "7:00 hoàn hảo."
          }
        },
        {
          "role": "ai",
          "text": "Could I have your name for the reservation?",
          "translations": {
            "ko": "예약에 필요한 성함을 알려주실 수 있나요?",
            "zh": "请问我可以问一下预订的名字吗？",
            "ja": "ご予約のお名前を教えていただけますか？",
            "vi": "Tôi có thể biết tên của bạn để đặt chỗ không?"
          }
        },
        {
          "role": "user",
          "text": "The reservation should be under Jamie Lee.",
          "translations": {
            "ko": "예약은 Jamie Lee 이름으로 해주세요.",
            "zh": "预订的名字是Jamie Lee。",
            "ja": "予約名はジェイミー・リーでお願いします。",
            "vi": "Đặt chỗ dưới tên Jamie Lee."
          }
        },
        {
          "role": "ai",
          "text": "And a contact number, just in case we need to reach you?",
          "translations": {
            "ko": "혹시 필요할 때 연락드릴 수 있도록 연락처를 알려주실 수 있나요?",
            "zh": "另外一个联系电话，以防我们需要联系您？",
            "ja": "念のため、ご連絡先の電話番号を教えていただけますか？",
            "vi": "Và số điện thoại liên hệ, chỉ trong trường hợp chúng tôi cần liên lạc với bạn?"
          }
        },
        {
          "role": "user",
          "text": "Sure, it’s 555-2398.",
          "translations": {
            "ko": "네, 전화번호는 555-2398입니다.",
            "zh": "当然，电话号码是555-2398。",
            "ja": "はい、555-2398です。",
            "vi": "Đương nhiên, số điện thoại của tôi là 555-2398."
          }
        },
        {
          "role": "ai",
          "text": "Perfect. You’re all set for Saturday at 7:00 PM.",
          "translations": {
            "ko": "완벽합니다. 토요일 오후 7시에 예약이 완료되었습니다.",
            "zh": "完美。您已经预订好了星期六晚上7:00的位置。",
            "ja": "了解しました。土曜日の7時にご予約を入れておきます。",
            "vi": "Hoàn hảo. Bạn đã sắp xếp xong cho thứ Bảy lúc 7:00 PM."
          }
        },
        {
          "role": "user",
          "text": "Great, thanks for your help.",
          "translations": {
            "ko": "좋습니다, 도움을 주셔서 감사합니다.",
            "zh": "太好了，谢谢您的帮助。",
            "ja": "ありがとうございます、助かります。",
            "vi": "Tuyệt, cảm ơn sự giúp đỡ của bạn."
          }
        },
        {
          "role": "ai",
          "text": "Please let us know if you’re running late or need to cancel.",
          "translations": {
            "ko": "만약 늦게 도착하거나 취소해야 할 경우 알려주십시오.",
            "zh": "如果您会迟到或需要取消，请告诉我们。",
            "ja": "遅れる場合やキャンセルが必要な場合はお知らせください。",
            "vi": "Vui lòng cho chúng tôi biết nếu bạn đến muộn hoặc cần hủy."
          }
        },
        {
          "role": "user",
          "text": "Of course, I’ll keep that in mind.",
          "translations": {
            "ko": "물론이죠, 그렇게 하겠습니다.",
            "zh": "当然，我会记住的。",
            "ja": "もちろん、そのことは心に留めておきます。",
            "vi": "Tất nhiên, tôi sẽ nhớ điều đó."
          }
        },
        {
          "role": "ai",
          "text": "We’ll send you a confirmation text shortly.",
          "translations": {
            "ko": "곧 예약 확인 문자를 보내드리겠습니다.",
            "zh": "我们会很快给您发送确认短信。",
            "ja": "すぐに確認のテキストを送ります。",
            "vi": "Chúng tôi sẽ gửi cho bạn một tin nhắn xác nhận ngay."
          }
        },
        {
          "role": "user",
          "text": "Sounds good. I’ll look out for it.",
          "translations": {
            "ko": "좋습니다. 문자를 기다리겠습니다.",
            "zh": "听起来不错。我会注意查收的。",
            "ja": "了解です、待っています。",
            "vi": "Nghe tốt. Tôi sẽ chờ tin nhắn đó."
          }
        },
        {
          "role": "ai",
          "text": "Looking forward to welcoming you on Saturday!",
          "translations": {
            "ko": "토요일에 여러분을 맞이하는 것을 기대하겠습니다!",
            "zh": "期待星期六能见到您！",
            "ja": "土曜日にお会いできるのを楽しみにしています！",
            "vi": "Mong chờ đón bạn vào thứ Bảy!"
          }
        },
        {
          "role": "user",
          "text": "Thanks. See you then!",
          "translations": {
            "ko": "감사합니다. 그때 뵙겠습니다!",
            "zh": "谢谢。到时候见！",
            "ja": "ありがとう、その時に！",
            "vi": "Cảm ơn. Hẹn gặp lại!"
          }
        }
      ]
    },
    {
      "description": {
        "ko": "음식 주문하고 추천 요리 묻기",
        "zh": "点餐和询问推荐菜品",
        "ja": "食事の注文とおすすめの依頼",
        "vi": "Đặt món ăn và hỏi đề nghị"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Welcome! Have you dined with us before?",
          "translations": {
            "ko": "환영합니다! 이전에 저희 식당에서 식사하신 적이 있나요?",
            "zh": "欢迎！您以前在我们这里用过餐吗？",
            "ja": "いらっしゃいませ！ 以前に当店をご利用になったことはありますか？",
            "vi": "Chào mừng! Bạn đã từng ăn ở đây trước chưa?"
          }
        },
        {
          "role": "user",
          "text": "No, this is my first time here.",
          "translations": {
            "ko": "아니요, 이번이 첫 방문입니다.",
            "zh": "不，这是我第一次来这里。",
            "ja": "いえ、初めてです。",
            "vi": "Không, đây là lần đầu tiên tôi đến đây."
          }
        },
        {
          "role": "ai",
          "text": "Our most popular dish is the grilled salmon with lemon butter.",
          "translations": {
            "ko": "저희 식당에서 가장 인기 있는 요리는 레몬 버터 구운 연어입니다.",
            "zh": "我们最受欢迎的菜品是烤鲑鱼配柠檬黄油。",
            "ja": "当店の一番人気のメニューは、レモンバターのグリルサーモンです。",
            "vi": "Món ăn phổ biến nhất của chúng tôi là cá hồi nướng với bơ chanh."
          }
        },
        {
          "role": "user",
          "text": "That sounds delicious. I’ll have the grilled salmon, please.",
          "translations": {
            "ko": "맛있겠네요. 그럼 그 구운 연어 주세요.",
            "zh": "听起来很美味。我要一份烤鲑鱼，请。",
            "ja": "それは美味しそうですね。グリルサーモンをお願いします。",
            "vi": "Nghe ngon quá. Tôi sẽ gọi món cá hồi nướng, xin vui lòng."
          }
        },
        {
          "role": "ai",
          "text": "If you’re in the mood for something lighter, the quinoa salad is great.",
          "translations": {
            "ko": "좀 더 가볍게 드시고 싶으시다면, 퀴노아 샐러드가 좋습니다.",
            "zh": "如果你想吃点轻食，藜麦沙拉很不错。",
            "ja": "もし軽いものが良ければ、キヌアのサラダもおすすめです。",
            "vi": "Nếu bạn muốn ăn một cái gì đó nhẹ nhàng hơn, món salad quinoa rất tuyệt."
          }
        },
        {
          "role": "user",
          "text": "Actually, I’ll also take the quinoa salad on the side.",
          "translations": {
            "ko": "사실, 퀴노아 샐러드도 같이 주문하겠습니다.",
            "zh": "实际上，我还想再点一份藜麦沙拉作为配菜。",
            "ja": "実は、キヌアのサラダも一緒に頼みます。",
            "vi": "Thực ra, tôi cũng sẽ gọi thêm món salad quinoa."
          }
        },
        {
          "role": "ai",
          "text": "Would you like to start with an appetizer?",
          "translations": {
            "ko": "애피타이저로 무엇을 시작하시겠습니까?",
            "zh": "您想先来个开胃菜吗？",
            "ja": "前菜から始めますか？",
            "vi": "Bạn có muốn bắt đầu với món khai vị không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, what do you suggest?",
          "translations": {
            "ko": "네, 어떤 것을 추천하시나요?",
            "zh": "是的，你有什么推荐的吗？",
            "ja": "はい、何をおすすめしますか？",
            "vi": "Có, bạn đề nghị món gì?"
          }
        },
        {
          "role": "ai",
          "text": "We recommend the truffle fries or the seasonal bruschetta.",
          "translations": {
            "ko": "트러플 프라이나 계절 브루스케타를 추천드립니다.",
            "zh": "我们推荐松露薯条或者季节性意式烤面包。",
            "ja": "トリュフフライか季節のブルスケッタをおすすめします。",
            "vi": "Chúng tôi khuyên bạn nên thử khoai tây truffle hoặc bruschetta theo mùa."
          }
        },
        {
          "role": "user",
          "text": "Let’s go with the truffle fries.",
          "translations": {
            "ko": "트러플 프라이로 해요.",
            "zh": "我们就点松露薯条吧。",
            "ja": "トリュフフライにしましょう。",
            "vi": "Chúng ta hãy chọn khoai tây truffle."
          }
        },
        {
          "role": "ai",
          "text": "Are there any dietary restrictions we should know about?",
          "translations": {
            "ko": "알려야 할 식사 제한 사항이 있나요?",
            "zh": "有没有任何饮食限制我们应该知道的？",
            "ja": "食事制限について知るべきことはありますか？",
            "vi": "Có bất kỳ hạn chế về chế độ ăn nào chúng tôi cần biết không?"
          }
        },
        {
          "role": "user",
          "text": "I’m allergic to peanuts, just so you know.",
          "translations": {
            "ko": "저는 땅콩에 알레르기가 있습니다.",
            "zh": "我对花生过敏，你应该知道。",
            "ja": "ピーナッツアレルギーなので、ご了承ください。",
            "vi": "Tôi dị ứng với đậu phộng, chỉ để bạn biết."
          }
        },
        {
          "role": "ai",
          "text": "Excellent. And would you like anything to drink?",
          "translations": {
            "ko": "좋습니다. 음료는 무엇을 드시겠습니까?",
            "zh": "很好。您想喝点什么饮料吗？",
            "ja": "素晴らしいです。何か飲み物はいかがですか？",
            "vi": "Tuyệt vời. Và bạn có muốn uống gì không?"
          }
        },
        {
          "role": "user",
          "text": "I’ll have sparkling water. And one glass of red wine, please.",
          "translations": {
            "ko": "스파클링 워터 하나와 레드 와인 한 잔 주세요.",
            "zh": "我要一瓶气泡水。还有一杯红酒，请。",
            "ja": "スパークリングウォーターをお願いします。それと赤ワインを一杯ください。",
            "vi": "Tôi sẽ uống nước suối có ga. Và một ly rượu vang đỏ, xin vui lòng."
          }
        },
        {
          "role": "ai",
          "text": "Sparkling water and the house red? Certainly.",
          "translations": {
            "ko": "스파클링 워터와 하우스 레드 와인이요? 알겠습니다.",
            "zh": "气泡水和店家的红酒？当然可以。",
            "ja": "スパークリングウォーターとハウスワインの赤ですね？了解しました。",
            "vi": "Nước suối có ga và rượu vang nhà? Chắc chắn."
          }
        },
        {
          "role": "user",
          "text": "Thank you.",
          "translations": {
            "ko": "감사합니다.",
            "zh": "谢谢你。",
            "ja": "ありがとうございます。",
            "vi": "Cảm ơn."
          }
        },
        {
          "role": "ai",
          "text": "Everything will be out shortly. Let me know if you need anything else.",
          "translations": {
            "ko": "음식이 곧 나올 예정입니다. 다른 필요한 것이 있으면 알려주세요.",
            "zh": "所有的东西马上就会上来。如果你需要其他什么，告诉我。",
            "ja": "すぐにお料理をお持ちします。他に何か必要なものがあればお知らせください。",
            "vi": "Mọi thứ sẽ được mang ra ngay. Hãy cho tôi biết nếu bạn cần thêm gì."
          }
        },
        {
          "role": "user",
          "text": "Will do. Thanks again.",
          "translations": {
            "ko": "알겠습니다. 다시 한 번 감사합니다.",
            "zh": "好的，再次感谢。",
            "ja": "了解しました。再度、ありがとうございます。",
            "vi": "Sẽ làm vậy. Cảm ơn một lần nữa."
          }
        },
        {
          "role": "ai",
          "text": "Enjoy your meal!",
          "translations": {
            "ko": "식사 맛있게 하세요!",
            "zh": "享受你的餐点！",
            "ja": "お食事をお楽しみください！",
            "vi": "Thưởng thức bữa ăn của bạn!"
          }
        },
        {
          "role": "user",
          "text": "Thanks!",
          "translations": {
            "ko": "감사합니다!",
            "zh": "谢谢！",
            "ja": "ありがとう！",
            "vi": "Cảm ơn!"
          }
        }
      ]
    },
    {
      "description": {
        "ko": "예약 없이 테이블 요청",
        "zh": "请求没有预约的桌子",
        "ja": "予約なしでテーブルをリクエスト",
        "vi": "Yêu cầu một bàn mà không cần đặt trước."
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Good evening! Do you have a reservation with us tonight?",
          "translations": {
            "ko": "안녕하십니까! 오늘 저희 식당에 예약하셨나요?",
            "zh": "晚上好！你今晚在我们这里有预约吗？",
            "ja": "こんばんは！今夜はご予約いただいていますか？",
            "vi": "Chào buổi tối! Bạn có đặt trước với chúng tôi tối nay không?"
          }
        },
        {
          "role": "user",
          "text": "Hi, we don’t have a reservation. Is there any availability?",
          "translations": {
            "ko": "안녕하세요, 예약은 하지 않았습니다. 자리가 있나요?",
            "zh": "嗨，我们没有预约。还有空位吗？",
            "ja": "こんにちは、予約はしていません。空きはありますか？",
            "vi": "Chào, chúng tôi không có đặt trước. Có chỗ trống không?"
          }
        },
        {
          "role": "ai",
          "text": "No problem. We do have a table for two available right now.",
          "translations": {
            "ko": "문제 없습니다. 지금 두 분을 위한 테이블이 있습니다.",
            "zh": "没问题。我们现在有一张两人桌。",
            "ja": "問題ありません。今すぐ利用できる2人用のテーブルがあります。",
            "vi": "Không vấn đề. Hiện tại chúng tôi có một bàn cho hai người."
          }
        },
        {
          "role": "user",
          "text": "That’s great. Just two of us.",
          "translations": {
            "ko": "좋습니다. 우리 둘만입니다.",
            "zh": "太好了。就我们两个。",
            "ja": "それは素晴らしいです。私たち二人だけです。",
            "vi": "Thật tuyệt. Chỉ có hai chúng tôi."
          }
        },
        {
          "role": "ai",
          "text": "Would you prefer a booth or a table by the window?",
          "translations": {
            "ko": "부스를 선호하시나요, 아니면 창가 테이블을 선호하시나요?",
            "zh": "你更喜欢包厢还是窗边的桌子？",
            "ja": "ブースと窓際のテーブル、どちらがよろしいですか？",
            "vi": "Bạn có muốn chọn một gian hàng hoặc một bàn cạnh cửa sổ không?"
          }
        },
        {
          "role": "user",
          "text": "A booth sounds nice, if possible.",
          "translations": {
            "ko": "가능하다면 부스가 좋겠습니다.",
            "zh": "如果可以的话，包厢听起来不错。",
            "ja": "可能であれば、ブースがいいですね。",
            "vi": "Một gian hàng nghe có vẻ tốt, nếu có thể."
          }
        },
        {
          "role": "ai",
          "text": "Please follow me. I’ll take you to your seat.",
          "translations": {
            "ko": "저를 따라오세요. 자리로 안내해드리겠습니다.",
            "zh": "请跟我来。我带你去你的座位。",
            "ja": "こちらへどうぞ。席までご案内します。",
            "vi": "Hãy theo tôi. Tôi sẽ đưa bạn đến chỗ ngồi của bạn."
          }
        },
        {
          "role": "user",
          "text": "Thanks. Looks cozy.",
          "translations": {
            "ko": "감사합니다. 아늑해 보입니다.",
            "zh": "谢谢。看起来很舒适。",
            "ja": "ありがとう。居心地良さそうですね。",
            "vi": "Cảm ơn. Trông rất ấm cúng."
          }
        },
        {
          "role": "ai",
          "text": "Here are your menus. Our specials are listed on the front.",
          "translations": {
            "ko": "메뉴판입니다. 특선 메뉴는 앞쪽에 나와 있습니다.",
            "zh": "这是你们的菜单。我们的特色菜单列在前面。",
            "ja": "メニューです。特別メニューは表に記載されています。",
            "vi": "Đây là thực đơn của bạn. Các món đặc biệt được liệt kê ở mặt trước."
          }
        },
        {
          "role": "user",
          "text": "Thanks. I’ll take a look.",
          "translations": {
            "ko": "감사합니다. 살펴보겠습니다.",
            "zh": "谢谢。我看一下。",
            "ja": "ありがとう。見てみます。",
            "vi": "Cảm ơn. Tôi sẽ xem qua."
          }
        },
        {
          "role": "ai",
          "text": "Can I start you off with something to drink?",
          "translations": {
            "ko": "음료로 무엇을 시작하시겠습니까?",
            "zh": "我可以先给你们上点饮料吗？",
            "ja": "まず何か飲み物はいかがですか？",
            "vi": "Tôi có thể bắt đầu phục vụ bạn với thức uống không?"
          }
        },
        {
          "role": "user",
          "text": "Just water for now, please.",
          "translations": {
            "ko": "일단 물 부탁드립니다.",
            "zh": "现在就要水，谢谢。",
            "ja": "とりあえず水をお願いします。",
            "vi": "Chỉ cần nước lúc này, xin vui lòng."
          }
        },
        {
          "role": "ai",
          "text": "The cocktail of the day is a citrus mojito.",
          "translations": {
            "ko": "오늘의 칵테일은 시트러스 모히토입니다.",
            "zh": "今天的鸡尾酒是柑橘莫吉托。",
            "ja": "本日のカクテルはシトラスモヒートです。",
            "vi": "Cocktail của ngày là mojito quýt."
          }
        },
        {
          "role": "user",
          "text": "Hmm, that sounds interesting.",
          "translations": {
            "ko": "흠, 흥미롭네요.",
            "zh": "嗯，听起来很有趣。",
            "ja": "うーん、それは面白そうですね。",
            "vi": "Hmm, nghe có vẻ thú vị."
          }
        },
        {
          "role": "ai",
          "text": "Take your time, and let me know when you’re ready to order.",
          "translations": {
            "ko": "시간을 가지고 주문할 준비가 되면 알려주세요.",
            "zh": "慢慢来，准备好点餐时告诉我。",
            "ja": "ごゆっくりお選びいただき、ご注文の準備ができましたらお知らせください。",
            "vi": "Hãy dành thời gian và cho tôi biết khi bạn sẵn sàng để đặt món."
          }
        },
        {
          "role": "user",
          "text": "Sure. A few more minutes, please.",
          "translations": {
            "ko": "알겠습니다. 조금 더 시간을 주세요.",
            "zh": "好的。再给我几分钟，谢谢。",
            "ja": "了解です。もう少し時間をください。",
            "vi": "Được rồi. Xin thêm vài phút nữa, xin vui lòng."
          }
        },
        {
          "role": "ai",
          "text": "Feel free to ask if you have any questions about the menu.",
          "translations": {
            "ko": "메뉴에 대해 궁금한 점이 있으면 언제든지 물어보세요.",
            "zh": "如果你对菜单有任何问题，随时问我。",
            "ja": "メニューについて何か質問があればお気軽にどうぞ。",
            "vi": "Nếu bạn có bất kỳ câu hỏi nào về thực đơn, hãy cứ hỏi."
          }
        },
        {
          "role": "user",
          "text": "Will do. Thanks for your help.",
          "translations": {
            "ko": "알겠습니다. 도움 주셔서 감사합니다.",
            "zh": "好的，谢谢你的帮助。",
            "ja": "承知しました。助けていただきありがとうございます。",
            "vi": "Sẽ làm. Cảm ơn sự giúp đỡ của bạn."
          }
        },
        {
          "role": "ai",
          "text": "Enjoy your evening!",
          "translations": {
            "ko": "즐거운 저녁 되세요!",
            "zh": "祝你今晚愉快！",
            "ja": "素敵な夜をお過ごしください！",
            "vi": "Chúc bạn có một buổi tối vui vẻ!"
          }
        },
        {
          "role": "user",
          "text": "Thanks a lot!",
          "translations": {
            "ko": "정말 감사합니다!",
            "zh": "非常感谢！",
            "ja": "どうもありがとうございます！",
            "vi": "Cảm ơn rất nhiều!"
          }
        }
      ]
    },
    {
      "description": {
        "ko": "오랜 대기 시간에 대처하기",
        "zh": "处理长时间的等待",
        "ja": "長い待ち時間の対処",
        "vi": "Đối mặt với thời gian chờ đợi dài"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Welcome to Aroma Bistro. Do you have a reservation?",
          "translations": {
            "ko": "아로마 비스트로에 오신 것을 환영합니다. 예약하셨나요?",
            "zh": "欢迎来到Aroma小餐馆。你有预约吗？",
            "ja": "アロマビストロへようこそ。予約はされていますか？",
            "vi": "Chào mừng đến với Aroma Bistro. Bạn có đặt bàn trước không?"
          }
        },
        {
          "role": "user",
          "text": "No, we were hoping to just walk in.",
          "translations": {
            "ko": "아니요, 그냥 들어가려고 했습니다.",
            "zh": "不，我们是想直接过来。",
            "ja": "いえ、直接来店するつもりでした。",
            "vi": "Không, chúng tôi hy vọng chỉ cần đi vào."
          }
        },
        {
          "role": "ai",
          "text": "Currently, there’s a 30-minute wait for walk-ins.",
          "translations": {
            "ko": "현재 워크인은 30분 대기 시간이 있습니다.",
            "zh": "目前，走进来的客人需要等待30分钟。",
            "ja": "現在、直接来店のお客様は30分お待ちいただいております。",
            "vi": "Hiện tại, thời gian chờ đợi cho khách không đặt bàn là 30 phút."
          }
        },
        {
          "role": "user",
          "text": "That’s a bit long, but okay.",
          "translations": {
            "ko": "조금 긴 것 같지만, 괜찮습니다.",
            "zh": "这有点长，但可以接受。",
            "ja": "少し長いですね、でも大丈夫です。",
            "vi": "Hơi lâu một chút, nhưng được."
          }
        },
        {
          "role": "ai",
          "text": "We can add your name to the waiting list if you’d like.",
          "translations": {
            "ko": "원하신다면 대기 명단에 이름을 추가할 수 있습니다.",
            "zh": "如果你愿意，我们可以把你的名字加到等待名单上。",
            "ja": "待ちリストにお名前を追加することも可能です。",
            "vi": "Chúng tôi có thể thêm tên bạn vào danh sách chờ nếu bạn muốn."
          }
        },
        {
          "role": "user",
          "text": "Yes, please add me to the list.",
          "translations": {
            "ko": "네, 명단에 제 이름을 추가해 주세요.",
            "zh": "是的，请把我加到名单上。",
            "ja": "はい、リストに追加してください。",
            "vi": "Vâng, hãy thêm tôi vào danh sách."
          }
        },
        {
          "role": "ai",
          "text": "Would you like to wait at the bar while we get your table ready?",
          "translations": {
            "ko": "테이블을 준비하는 동안 바에서 기다리시겠습니까?",
            "zh": "我们准备你的桌子的时候，你愿意在酒吧等待吗？",
            "ja": "テーブルの準備ができるまで、バーでお待ちいただけますか？",
            "vi": "Bạn có muốn chờ tại quầy bar trong khi chúng tôi chuẩn bị bàn cho bạn không?"
          }
        },
        {
          "role": "user",
          "text": "Sure, we’ll wait at the bar.",
          "translations": {
            "ko": "네, 바에서 기다리겠습니다.",
            "zh": "好的，我们会在酒吧等待。",
            "ja": "はい、バーで待ちます。",
            "vi": "Được, chúng tôi sẽ chờ tại quầy bar."
          }
        },
        {
          "role": "ai",
          "text": "We’ll send you a text as soon as your table is available.",
          "translations": {
            "ko": "테이블이 준비되면 문자로 알려드리겠습니다.",
            "zh": "你的桌子一旦准备好，我们会发短信通知你。",
            "ja": "テーブルが用意でき次第、テキストでお知らせします。",
            "vi": "Chúng tôi sẽ gửi tin nhắn cho bạn ngay khi bàn của bạn sẵn sàng."
          }
        },
        {
          "role": "user",
          "text": "Sounds good. I’ll keep an eye out.",
          "translations": {
            "ko": "좋습니다. 기다리겠습니다.",
            "zh": "听起来不错。我会留意的。",
            "ja": "了解です。気をつけておきます。",
            "vi": "Nghe tốt. Tôi sẽ chú ý."
          }
        },
        {
          "role": "ai",
          "text": "There’s a café next door if you prefer to wait outside.",
          "translations": {
            "ko": "바로 옆에 카페가 있으니, 밖에서 기다리시고 싶으시면 이용하실 수 있습니다.",
            "zh": "如果你愿意在外面等待，旁边有一家咖啡馆。",
            "ja": "もし外で待ちたい場合は、隣にカフェがあります。",
            "vi": "Có một quán cà phê bên cạnh nếu bạn muốn chờ bên ngoài."
          }
        },
        {
          "role": "user",
          "text": "That’s helpful to know, thanks.",
          "translations": {
            "ko": "알려주셔서 감사합니다.",
            "zh": "这个信息很有用，谢谢。",
            "ja": "それは助かります、ありがとうございます。",
            "vi": "Thông tin này rất hữu ích, cảm ơn."
          }
        },
        {
          "role": "ai",
          "text": "Thanks for your patience. We’re doing our best to move quickly.",
          "translations": {
            "ko": "기다려주셔서 감사합니다. 최대한 빠르게 진행하고 있습니다.",
            "zh": "感谢你的耐心等待。我们正在尽快处理。",
            "ja": "お待たせして申し訳ありません。できるだけ早く進めています。",
            "vi": "Cảm ơn sự kiên nhẫn của bạn. Chúng tôi đang cố gắng làm việc nhanh chóng."
          }
        },
        {
          "role": "user",
          "text": "No worries. We understand.",
          "translations": {
            "ko": "괜찮습니다. 이해합니다.",
            "zh": "没关系。我们理解。",
            "ja": "心配ありません。理解しています。",
            "vi": "Không sao. Chúng tôi hiểu."
          }
        },
        {
          "role": "ai",
          "text": "Your table is almost ready—just a few more minutes.",
          "translations": {
            "ko": "테이블이 거의 준비되었습니다. 조금만 더 기다려 주세요.",
            "zh": "你的桌子快好了——再等几分钟。",
            "ja": "あと少しでテーブルが用意できます。",
            "vi": "Bàn của bạn sắp sẵn sàng - chỉ còn vài phút nữa."
          }
        },
        {
          "role": "user",
          "text": "Alright, we’ll wait a little longer.",
          "translations": {
            "ko": "알겠습니다, 조금 더 기다리겠습니다.",
            "zh": "好的，我们会再等一会儿。",
            "ja": "了解です、もう少し待ちます。",
            "vi": "Được, chúng tôi sẽ chờ thêm một chút."
          }
        },
        {
          "role": "ai",
          "text": "Thank you for waiting. Please follow me to your table.",
          "translations": {
            "ko": "기다려주셔서 감사합니다. 테이블로 따라오세요.",
            "zh": "感谢你的等待。请跟我来，我带你去你的桌子。",
            "ja": "お待たせしました。テーブルまでご案内します。",
            "vi": "Cảm ơn bạn đã chờ đợi. Hãy theo tôi đến bàn của bạn."
          }
        },
        {
          "role": "user",
          "text": "Thanks, we appreciate it.",
          "translations": {
            "ko": "감사합니다, 고맙습니다.",
            "zh": "谢谢，我们很感激。",
            "ja": "ありがとうございます、感謝しています。",
            "vi": "Cảm ơn, chúng tôi rất biết ơn."
          }
        },
        {
          "role": "ai",
          "text": "Here you go. I hope the wait was worth it!",
          "translations": {
            "ko": "여기 있습니다. 기다린 보람이 있었기를 바랍니다!",
            "zh": "这就是你的桌子。希望等待是值得的！",
            "ja": "こちらです。お待たせした甲斐がありましたか？",
            "vi": "Đây rồi. Tôi hy vọng thời gian chờ đợi đã đáng giá!"
          }
        },
        {
          "role": "user",
          "text": "Yes, it looks great. Thanks again!",
          "translations": {
            "ko": "네, 정말 좋아 보입니다. 다시 한번 감사드립니다!",
            "zh": "是的，看起来很好。再次感谢！",
            "ja": "はい、素晴らしいです。再度、ありがとうございます！",
            "vi": "Vâng, trông rất tuyệt. Cảm ơn một lần nữa!"
          }
        }
      ]
    },
    {
      "description": {
        "ko": "채식 옵션에 대해 묻기",
        "zh": "询问素食选择",
        "ja": "ベジタリアンの選択肢について尋ねる",
        "vi": "Hỏi về các lựa chọn ăn chay"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Welcome! Are there any dietary preferences we should know?",
          "translations": {
            "ko": "환영합니다! 우리가 알아야 할 식사 선호도가 있나요?",
            "zh": "欢迎！有没有任何饮食偏好我们应该知道的？",
            "ja": "ようこそ！何か食事の制限がありますか？",
            "vi": "Chào mừng! Có bất kỳ sở thích ăn uống nào chúng tôi nên biết không?"
          }
        },
        {
          "role": "user",
          "text": "Hi, yes—I’m vegetarian.",
          "translations": {
            "ko": "안녕하세요, 네—저는 채식주의자입니다.",
            "zh": "嗨，是的——我是素食者。",
            "ja": "はい、私はベジタリアンです。",
            "vi": "Chào, vâng - tôi ăn chay."
          }
        },
        {
          "role": "ai",
          "text": "Absolutely. We have several vegetarian dishes available.",
          "translations": {
            "ko": "알겠습니다. 우리는 여러 가지 채식 요리를 제공하고 있습니다.",
            "zh": "当然。我们有几道素食菜肴可供选择。",
            "ja": "もちろんです。ベジタリアン向けの料理も多数ご用意しております。",
            "vi": "Tất nhiên. Chúng tôi có nhiều món ăn chay."
          }
        },
        {
          "role": "user",
          "text": "That’s great to hear.",
          "translations": {
            "ko": "그것이 좋은 소식이네요.",
            "zh": "听起来很好。",
            "ja": "それは嬉しいですね。",
            "vi": "Thật tuyệt khi nghe điều đó."
          }
        },
        {
          "role": "ai",
          "text": "The mushroom risotto and veggie stir-fry are customer favorites.",
          "translations": {
            "ko": "버섯 리조또와 채소 볶음이 고객들에게 인기가 있습니다.",
            "zh": "蘑菇烩饭和蔬菜炒菜是客人的最爱。",
            "ja": "マッシュルームのリゾットと野菜炒めはお客様に人気です。",
            "vi": "Risotto nấm và xào rau củ là những món ưa thích của khách hàng."
          }
        },
        {
          "role": "user",
          "text": "Both of those sound good.",
          "translations": {
            "ko": "두 가지 다 좋아 보입니다.",
            "zh": "这两个听起来都不错。",
            "ja": "それらのどちらも良さそうですね。",
            "vi": "Cả hai đều nghe có vẻ tốt."
          }
        },
        {
          "role": "ai",
          "text": "Would you like me to point them out on the menu?",
          "translations": {
            "ko": "메뉴에서 그것들을 가리키면 도움이 될까요?",
            "zh": "你想让我在菜单上指出它们吗？",
            "ja": "メニューでそれらを指摘しましょうか？",
            "vi": "Bạn có muốn tôi chỉ chúng trên thực đơn không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, please. That’d be helpful.",
          "translations": {
            "ko": "네, 부탁드립니다. 그게 도움이 될 것 같아요.",
            "zh": "是的，请帮忙。这会很有帮助。",
            "ja": "はい、お願いします。それは助かります。",
            "vi": "Vâng, xin vui lòng. Điều đó sẽ rất hữu ích."
          }
        },
        {
          "role": "ai",
          "text": "We can also modify some dishes to make them vegetarian.",
          "translations": {
            "ko": "일부 요리는 채식주의자용으로 변경할 수도 있습니다.",
            "zh": "我们也可以修改一些菜品，使它们成为素食。",
            "ja": "また、一部の料理はベジタリアン向けに変更することもできます。",
            "vi": "Chúng tôi cũng có thể chỉnh sửa một số món ăn để chúng trở thành món chay."
          }
        },
        {
          "role": "user",
          "text": "Good to know. I appreciate it.",
          "translations": {
            "ko": "알려주셔서 감사합니다. 정말 감사합니다.",
            "zh": "很好，我很感激。",
            "ja": "知っておいてよかったです。感謝します。",
            "vi": "Thật tốt khi biết. Tôi rất cảm ơn."
          }
        },
        {
          "role": "ai",
          "text": "All of our soups today are vegetarian as well.",
          "translations": {
            "ko": "오늘의 모든 스프도 채식주의자용입니다.",
            "zh": "我们今天的所有汤都是素食。",
            "ja": "今日のすべてのスープもベジタリアンです。",
            "vi": "Tất cả các loại súp của chúng tôi hôm nay đều là món chay."
          }
        },
        {
          "role": "user",
          "text": "Great! I’ll take the soup to start.",
          "translations": {
            "ko": "좋아요! 먼저 스프를 주세요.",
            "zh": "太好了！我先来一份汤。",
            "ja": "素晴らしい！まずはスープからいただきます。",
            "vi": "Tuyệt! Tôi sẽ chọn súp để bắt đầu."
          }
        },
        {
          "role": "ai",
          "text": "Do you eat dairy and eggs, or should we avoid those too?",
          "translations": {
            "ko": "유제품과 달걀도 드시나요, 아니면 그것들도 피해야 하나요?",
            "zh": "你吃奶制品和鸡蛋吗，还是我们也应该避免这些？",
            "ja": "乳製品と卵は食べますか？それらも避けるべきですか？",
            "vi": "Bạn có ăn sữa và trứng không, hay chúng tôi cũng nên tránh những thứ đó?"
          }
        },
        {
          "role": "user",
          "text": "Dairy is fine, but no eggs please.",
          "translations": {
            "ko": "유제품은 괜찮지만, 달걀은 제외해주세요.",
            "zh": "奶制品可以，但请不要加鸡蛋。",
            "ja": "乳製品は大丈夫ですが、卵は避けてください。",
            "vi": "Sữa thì được, nhưng không có trứng, xin vui lòng."
          }
        },
        {
          "role": "ai",
          "text": "Thanks for letting us know—we’ll make sure your meal is suitable.",
          "translations": {
            "ko": "알려주셔서 감사합니다 - 우리가 적합한 식사를 준비하도록 하겠습니다.",
            "zh": "感谢你告诉我们，我们会确保你的餐点适合你。",
            "ja": "教えていただきありがとうございます。適切な食事を提供できるようにします。",
            "vi": "Cảm ơn bạn đã cho chúng tôi biết - chúng tôi sẽ đảm bảo bữa ăn của bạn phù hợp."
          }
        },
        {
          "role": "user",
          "text": "Thanks for accommodating.",
          "translations": {
            "ko": "배려해주셔서 감사합니다.",
            "zh": "感谢你的配合。",
            "ja": "対応していただきありがとうございます。",
            "vi": "Cảm ơn vì đã điều chỉnh."
          }
        },
        {
          "role": "ai",
          "text": "Let me know if you have any questions before ordering.",
          "translations": {
            "ko": "주문하기 전에 궁금한 점이 있으면 알려주세요.",
            "zh": "在点餐前，如果有任何问题，请告诉我。",
            "ja": "注文する前に何か質問があればお知らせください。",
            "vi": "Hãy cho tôi biết nếu bạn có bất kỳ câu hỏi nào trước khi đặt món."
          }
        },
        {
          "role": "user",
          "text": "I think I’m ready to order soon.",
          "translations": {
            "ko": "곧 주문할 것 같습니다.",
            "zh": "我想我很快就可以点餐了。",
            "ja": "私はもうすぐ注文できると思います。",
            "vi": "Tôi nghĩ tôi sẽ sẵn sàng đặt món sớm."
          }
        },
        {
          "role": "ai",
          "text": "I’ll give you a few minutes to decide.",
          "translations": {
            "ko": "결정할 시간을 좀 더 드리겠습니다.",
            "zh": "我给你几分钟时间决定。",
            "ja": "決めるまで少し時間を差し上げます。",
            "vi": "Tôi sẽ cho bạn vài phút để quyết định."
          }
        },
        {
          "role": "user",
          "text": "Sure, I’ll call you over in a minute.",
          "translations": {
            "ko": "네, 잠시 후에 부르겠습니다.",
            "zh": "好的，我过一会儿就叫你过来。",
            "ja": "了解です、すぐにお呼びします。",
            "vi": "Được, tôi sẽ gọi bạn lại trong một phút."
          }
        }
      ]
    },
    {
      "description": {
        "ko": "익지 않은 요리를 반품",
        "zh": "退回一个未煮熟的菜品",
        "ja": "調理不足の料理を返す",
        "vi": "Trả lại một món ăn chưa chín"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Is everything okay with your meal?",
          "translations": {
            "ko": "식사가 괜찮으신가요?",
            "zh": "你的餐点有没有什么问题？",
            "ja": "お食事は大丈夫ですか？",
            "vi": "Mọi thứ với bữa ăn của bạn có ổn không?"
          }
        },
        {
          "role": "user",
          "text": "Actually, my steak is undercooked.",
          "translations": {
            "ko": "사실, 제 스테이크가 익지 않았습니다.",
            "zh": "实际上，我的牛排煮得不够。",
            "ja": "実は、私のステーキが生焼けです。",
            "vi": "Thực ra, thịt bò của tôi chưa chín."
          }
        },
        {
          "role": "ai",
          "text": "I’m so sorry to hear that. Let me take a look.",
          "translations": {
            "ko": "그런 일이 있어서 정말 죄송합니다. 제가 한번 확인해보겠습니다.",
            "zh": "听到这个我很抱歉。让我看看。",
            "ja": "それは申し訳ありません。確認させていただきます。",
            "vi": "Tôi rất tiếc khi nghe điều đó. Hãy để tôi xem xét."
          }
        },
        {
          "role": "user",
          "text": "Could you please have it cooked a bit more?",
          "translations": {
            "ko": "좀 더 익혀주실 수 있을까요?",
            "zh": "你能再煮一下吗？",
            "ja": "もう少し加熱していただけますか？",
            "vi": "Bạn có thể nấu nó thêm một chút nữa được không?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, it does seem a bit undercooked. We’ll fix that right away.",
          "translations": {
            "ko": "네, 조금 익지 않은 것 같습니다. 바로 고치겠습니다.",
            "zh": "是的，看起来确实煮得不够。我们马上就会处理。",
            "ja": "はい、少し生焼けのようですね。すぐに対応します。",
            "vi": "Vâng, có vẻ như nó chưa chín. Chúng tôi sẽ khắc phục ngay lập tức."
          }
        },
        {
          "role": "user",
          "text": "Thanks. I’d appreciate that.",
          "translations": {
            "ko": "감사합니다. 그렇게 해주시면 좋겠습니다.",
            "zh": "谢谢。我会很感激的。",
            "ja": "ありがとう。それは助かります。",
            "vi": "Cảm ơn. Tôi sẽ rất biết ơn."
          }
        },
        {
          "role": "ai",
          "text": "Would you like us to remake it or offer something else?",
          "translations": {
            "ko": "다시 만들어 드릴까요, 아니면 다른 것을 드릴까요?",
            "zh": "你想让我们重新做一份还是提供别的菜品？",
            "ja": "作り直すか、他のものを提供するか、どちらがよろしいですか？",
            "vi": "Bạn có muốn chúng tôi làm lại món này hay đề nghị một món khác không?"
          }
        },
        {
          "role": "user",
          "text": "I’ll wait for a new one, please.",
          "translations": {
            "ko": "새로운 것을 기다리겠습니다.",
            "zh": "我愿意等新的一份，谢谢。",
            "ja": "新しいものを待つことにします。",
            "vi": "Tôi sẽ chờ một cái mới, xin vui lòng."
          }
        },
        {
          "role": "ai",
          "text": "It’ll just take a few minutes to prepare a new one.",
          "translations": {
            "ko": "새로운 것을 준비하는 데 몇 분만 걸릴 것입니다.",
            "zh": "准备新的只需要几分钟。",
            "ja": "新しいものを準備するのに数分かかります。",
            "vi": "Chỉ mất vài phút để chuẩn bị một cái mới."
          }
        },
        {
          "role": "user",
          "text": "No problem. I can wait.",
          "translations": {
            "ko": "문제 없습니다. 기다릴 수 있습니다.",
            "zh": "没问题。我可以等。",
            "ja": "問題ありません。待つことができます。",
            "vi": "Không sao. Tôi có thể chờ."
          }
        },
        {
          "role": "ai",
          "text": "Can I bring you a complimentary appetizer while you wait?",
          "translations": {
            "ko": "기다리시는 동안 무료 애피타이저를 가져다 드릴까요?",
            "zh": "在你等待的时候，我可以为你带来一份免费的开胃菜吗？",
            "ja": "待っている間に無料の前菜をお持ちしましょうか？",
            "vi": "Tôi có thể mang đến cho bạn một món khai vị miễn phí trong lúc bạn đợi không?"
          }
        },
        {
          "role": "user",
          "text": "That would be lovely. Thanks.",
          "translations": {
            "ko": "좋겠습니다. 감사합니다.",
            "zh": "那太好了。谢谢。",
            "ja": "それは素晴らしいです。ありがとう。",
            "vi": "Điều đó thật tuyệt. Cảm ơn."
          }
        },
        {
          "role": "ai",
          "text": "Thanks for your patience. We’re correcting it now.",
          "translations": {
            "ko": "기다려주셔서 감사합니다. 지금 바로 수정하겠습니다.",
            "zh": "感谢你的耐心等待。我们正在处理。",
            "ja": "お待たせして申し訳ありません。今、対応しています。",
            "vi": "Cảm ơn sự kiên nhẫn của bạn. Chúng tôi đang sửa chữa nó ngay bây giờ."
          }
        },
        {
          "role": "user",
          "text": "Appreciate the quick response.",
          "translations": {
            "ko": "빠른 대응에 감사드립니다.",
            "zh": "感谢你的快速回应。",
            "ja": "迅速な対応、感謝します。",
            "vi": "Cảm ơn vì đã phản hồi nhanh."
          }
        },
        {
          "role": "ai",
          "text": "Here’s your new dish, cooked to your preference.",
          "translations": {
            "ko": "여기 원하시는 대로 요리된 새로운 요리입니다.",
            "zh": "这是您的新菜，按照您的口味烹饪的。",
            "ja": "こちらがお客様のご希望通りに調理した新しいお皿です。",
            "vi": "Đây là món mới của bạn, được nấu theo sở thích của bạn."
          }
        },
        {
          "role": "user",
          "text": "Looks much better, thank you.",
          "translations": {
            "ko": "훨씬 나아 보입니다, 감사합니다.",
            "zh": "看起来好多了，谢谢。",
            "ja": "ずっと良く見えます、ありがとうございます。",
            "vi": "Trông tốt hơn nhiều, cảm ơn bạn."
          }
        },
        {
          "role": "ai",
          "text": "Please let me know if it’s better this time.",
          "translations": {
            "ko": "이번에는 더 나아졌는지 알려주세요.",
            "zh": "请告诉我这次是否更好。",
            "ja": "今回はより良いかどうか教えてください。",
            "vi": "Vui lòng cho tôi biết nếu lần này nó tốt hơn."
          }
        },
        {
          "role": "user",
          "text": "Yes, it’s perfect now.",
          "translations": {
            "ko": "네, 이제 완벽합니다.",
            "zh": "是的，现在完美了。",
            "ja": "はい、今は完璧です。",
            "vi": "Vâng, bây giờ nó hoàn hảo."
          }
        },
        {
          "role": "ai",
          "text": "Again, we apologize for the inconvenience.",
          "translations": {
            "ko": "다시 한번 불편을 끼쳐드려 죄송합니다.",
            "zh": "再次为给您带来的不便道歉。",
            "ja": "再度、ご迷惑をおかけし申し訳ありません。",
            "vi": "Một lần nữa, chúng tôi xin lỗi vì sự bất tiện này."
          }
        },
        {
          "role": "user",
          "text": "No worries. Thanks for fixing it.",
          "translations": {
            "ko": "괜찮습니다. 고쳐주셔서 감사합니다.",
            "zh": "没关系。谢谢你们的修正。",
            "ja": "気にしないで。修正してくれてありがとう。",
            "vi": "Không sao. Cảm ơn bạn đã sửa chữa nó."
          }
        }
      ]
    },
    {
      "description": {
        "ko": "계산하고 계산서 나누기",
        "zh": "付款和分账",
        "ja": "支払いと割り勘",
        "vi": "Thanh toán và chia hóa đơn"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Are you ready for the check?",
          "translations": {
            "ko": "계산서 준비되셨나요?",
            "zh": "你们准备好结账了吗？",
            "ja": "お会計の準備はできていますか？",
            "vi": "Bạn đã sẵn sàng để thanh toán chưa?"
          }
        },
        {
          "role": "user",
          "text": "Yes, we’re ready to pay.",
          "translations": {
            "ko": "네, 우리는 계산할 준비가 되었습니다.",
            "zh": "是的，我们准备好付款了。",
            "ja": "はい、支払いの準備ができています。",
            "vi": "Vâng, chúng tôi đã sẵn sàng để thanh toán."
          }
        },
        {
          "role": "ai",
          "text": "Would you like one bill or separate checks?",
          "translations": {
            "ko": "한 장의 계산서를 원하시나요, 아니면 따로따로 계산하시겠어요?",
            "zh": "你们想要一份账单还是分开结账？",
            "ja": "一緒に払いますか、それとも別々にしますか？",
            "vi": "Bạn muốn một hóa đơn hay hóa đơn riêng?"
          }
        },
        {
          "role": "user",
          "text": "Could we get separate checks, please?",
          "translations": {
            "ko": "계산서를 따로 받을 수 있을까요?",
            "zh": "我们可以分开结账吗？",
            "ja": "別々のお会計をお願いできますか？",
            "vi": "Chúng tôi có thể nhận hóa đơn riêng được không?"
          }
        },
        {
          "role": "ai",
          "text": "No problem. I’ll split the total evenly between both cards.",
          "translations": {
            "ko": "문제 없습니다. 카드 두 장에 동일하게 나눠 계산하겠습니다.",
            "zh": "没问题。我会把总额平均分到两张卡上。",
            "ja": "問題ありません。合計を両方のカードで均等に分割します。",
            "vi": "Không vấn đề gì. Tôi sẽ chia tổng số tiền đều giữa cả hai thẻ."
          }
        },
        {
          "role": "user",
          "text": "That works. Thank you.",
          "translations": {
            "ko": "좋습니다. 감사합니다.",
            "zh": "这样可以，谢谢。",
            "ja": "それで大丈夫です。ありがとうございます。",
            "vi": "Điều đó hoạt động. Cảm ơn bạn."
          }
        },
        {
          "role": "ai",
          "text": "Here are your itemized receipts.",
          "translations": {
            "ko": "여기 세부 내역이 있는 영수증입니다.",
            "zh": "这是你们的详细收据。",
            "ja": "こちらが項目別のレシートです。",
            "vi": "Đây là hóa đơn chi tiết của bạn."
          }
        },
        {
          "role": "user",
          "text": "Great. Thanks for the breakdown.",
          "translations": {
            "ko": "좋아요. 세부 내역을 알려주셔서 감사합니다.",
            "zh": "很好。感谢你们的详细解释。",
            "ja": "すばらしい。内訳をありがとう。",
            "vi": "Tuyệt. Cảm ơn bạn đã giải thích."
          }
        },
        {
          "role": "ai",
          "text": "Would you like to leave a tip on the card or in cash?",
          "translations": {
            "ko": "팁은 카드에 청구하시겠습니까, 아니면 현금으로 주시겠습니까?",
            "zh": "你们想要在卡上留小费还是用现金？",
            "ja": "チップはカードで残しますか、それとも現金でしょうか？",
            "vi": "Bạn muốn để lại tiền boa trên thẻ hay bằng tiền mặt?"
          }
        },
        {
          "role": "user",
          "text": "On the card is fine.",
          "translations": {
            "ko": "카드에 청구하는 것이 좋습니다.",
            "zh": "刷卡就行。",
            "ja": "カードで大丈夫です。",
            "vi": "Trên thẻ là tốt."
          }
        },
        {
          "role": "ai",
          "text": "I’ll be right back with your final copies.",
          "translations": {
            "ko": "최종 복사본을 가지고 곧 돌아오겠습니다.",
            "zh": "我马上回来给你们最后的收据。",
            "ja": "最終的なコピーを持ってきますので、少々お待ちください。",
            "vi": "Tôi sẽ quay lại ngay với bản sao cuối cùng của bạn."
          }
        },
        {
          "role": "user",
          "text": "Sure, we’ll wait.",
          "translations": {
            "ko": "그럼, 기다리겠습니다.",
            "zh": "好的，我们会等待。",
            "ja": "はい、待ちます。",
            "vi": "Chắc chắn, chúng tôi sẽ đợi."
          }
        },
        {
          "role": "ai",
          "text": "Thank you so much for dining with us tonight.",
          "translations": {
            "ko": "오늘 저희 식당에서 식사해 주셔서 감사합니다.",
            "zh": "非常感谢你们今晚在这里用餐。",
            "ja": "今夜は当店でお食事いただき、ありがとうございました。",
            "vi": "Cảm ơn rất nhiều vì đã ăn tối với chúng tôi tối nay."
          }
        },
        {
          "role": "user",
          "text": "Thank you—it was excellent.",
          "translations": {
            "ko": "감사합니다. 맛있었습니다.",
            "zh": "谢谢你，食物非常好。",
            "ja": "ありがとうございます。とても美味しかったです。",
            "vi": "Cảm ơn bạn - nó thật tuyệt vời."
          }
        },
        {
          "role": "ai",
          "text": "We hope you had a pleasant experience.",
          "translations": {
            "ko": "즐거운 경험이셨기를 바랍니다.",
            "zh": "我们希望你们有一个愉快的体验。",
            "ja": "楽しい体験ができたことを願っています。",
            "vi": "Chúng tôi hy vọng bạn đã có một trải nghiệm dễ chịu."
          }
        },
        {
          "role": "user",
          "text": "We really enjoyed the food.",
          "translations": {
            "ko": "음식이 정말 맛있었습니다.",
            "zh": "我们真的很喜欢这里的食物。",
            "ja": "食事がとても美味しかったです。",
            "vi": "Chúng tôi thực sự thích thức ăn."
          }
        },
        {
          "role": "ai",
          "text": "Let us know if there’s anything else we can help with.",
          "translations": {
            "ko": "다른 도움이 필요하시면 알려주세요.",
            "zh": "如果有其他我们可以帮助的事情，请告诉我们。",
            "ja": "他に何かお手伝いできることがありましたらお知らせください。",
            "vi": "Hãy cho chúng tôi biết nếu có bất cứ điều gì khác chúng tôi có thể giúp đỡ."
          }
        },
        {
          "role": "user",
          "text": "No, we’re all set.",
          "translations": {
            "ko": "아니요, 다 됐습니다.",
            "zh": "不，我们一切都准备好了。",
            "ja": "いえ、大丈夫です。",
            "vi": "Không, chúng tôi đã sẵn sàng."
          }
        },
        {
          "role": "ai",
          "text": "Have a wonderful evening!",
          "translations": {
            "ko": "즐거운 저녁 되세요!",
            "zh": "祝你们晚上愉快！",
            "ja": "素晴らしい夜をお過ごしください！",
            "vi": "Chúc một buổi tối tuyệt vời!"
          }
        },
        {
          "role": "user",
          "text": "Thanks! You too.",
          "translations": {
            "ko": "감사합니다! 당신도요.",
            "zh": "谢谢！你也是。",
            "ja": "ありがとう！あなたも。",
            "vi": "Cảm ơn! Bạn cũng vậy."
          }
        }
      ]
    },
    {
      "description": {
        "ko": "시끄러운 주변 환경에 대해 불평하기",
        "zh": "投诉周围环境嘈杂",
        "ja": "騒音についての苦情を申し立てる",
        "vi": "Phàn nàn về môi trường xung quanh ồn ào"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Is everything alright with your table?",
          "translations": {
            "ko": "테이블에 문제가 없나요?",
            "zh": "你们的桌子有什么问题吗？",
            "ja": "お席は何も問題ありませんか？",
            "vi": "Mọi thứ với bàn của bạn có ổn không?"
          }
        },
        {
          "role": "user",
          "text": "It’s a bit too noisy here.",
          "translations": {
            "ko": "여기가 좀 너무 시끄럽습니다.",
            "zh": "这里有点太吵了。",
            "ja": "ここは少し騒がしすぎます。",
            "vi": "Nơi đây hơi ồn một chút."
          }
        },
        {
          "role": "ai",
          "text": "I see. I’m sorry about the noise.",
          "translations": {
            "ko": "알겠습니다. 소음 때문에 죄송합니다.",
            "zh": "我明白了。对于噪音我很抱歉。",
            "ja": "なるほど、騒音については申し訳ありません。",
            "vi": "Tôi hiểu. Xin lỗi vì tiếng ồn."
          }
        },
        {
          "role": "user",
          "text": "Could we move to a quieter spot?",
          "translations": {
            "ko": "조금 더 조용한 곳으로 이동할 수 있을까요?",
            "zh": "我们能去一个更安静的地方吗？",
            "ja": "もう少し静かな場所に移動できますか？",
            "vi": "Chúng ta có thể chuyển đến một nơi yên tĩnh hơn không?"
          }
        },
        {
          "role": "ai",
          "text": "Let me check if we have a quieter table available.",
          "translations": {
            "ko": "더 조용한 테이블이 있는지 확인해보겠습니다.",
            "zh": "让我看看我们是否有一个更安静的桌子。",
            "ja": "もう少し静かなテーブルが空いているか確認します。",
            "vi": "Để tôi kiểm tra xem chúng tôi có bàn yên tĩnh hơn không."
          }
        },
        {
          "role": "user",
          "text": "That would be great, thanks.",
          "translations": {
            "ko": "좋겠네요, 감사합니다.",
            "zh": "那太好了，谢谢。",
            "ja": "それは助かります、ありがとう。",
            "vi": "Điều đó thật tuyệt, cảm ơn."
          }
        },
        {
          "role": "ai",
          "text": "We can move you toward the back if that helps.",
          "translations": {
            "ko": "도움이 된다면 뒷쪽으로 옮겨드릴 수 있습니다.",
            "zh": "如果有帮助的话，我们可以把你们安排到后面去。",
            "ja": "もしよければ、後ろの方に移動させることができます。",
            "vi": "Chúng tôi có thể chuyển bạn về phía sau nếu điều đó giúp ích."
          }
        },
        {
          "role": "user",
          "text": "Yes, away from the speakers if possible.",
          "translations": {
            "ko": "네, 가능하다면 스피커에서 멀리 떨어진 곳으로요.",
            "zh": "是的，如果可能的话，离扬声器远一些。",
            "ja": "はい、可能であればスピーカーから離れた場所がいいです。",
            "vi": "Vâng, nếu có thể, hãy tránh loa."
          }
        },
        {
          "role": "ai",
          "text": "Alternatively, would you prefer to wait for a booth to open?",
          "translations": {
            "ko": "그렇지 않다면, 부스가 비워질 때까지 기다리시겠습니까?",
            "zh": "或者，你们愿意等一个包厢空出来吗？",
            "ja": "それとも、ブースが空くのを待つ方がよろしいですか？",
            "vi": "Hoặc bạn có muốn chờ một gian hàng trống không?"
          }
        },
        {
          "role": "user",
          "text": "We can wait, that’s fine.",
          "translations": {
            "ko": "기다릴 수 있습니다, 괜찮아요.",
            "zh": "我们可以等，没问题。",
            "ja": "待つことにします、それで大丈夫です。",
            "vi": "Chúng tôi có thể chờ, không sao cả."
          }
        },
        {
          "role": "ai",
          "text": "Thank you for bringing it to our attention.",
          "translations": {
            "ko": "문제를 알려주셔서 감사합니다.",
            "zh": "谢谢你们把这个问题告诉我们。",
            "ja": "お知らせいただきありがとうございます。",
            "vi": "Cảm ơn bạn đã thông báo cho chúng tôi."
          }
        },
        {
          "role": "user",
          "text": "Thanks for being understanding.",
          "translations": {
            "ko": "이해해주셔서 감사합니다.",
            "zh": "谢谢你们的理解。",
            "ja": "ご理解いただきありがとうございます。",
            "vi": "Cảm ơn bạn đã thông cảm."
          }
        },
        {
          "role": "ai",
          "text": "We’ll do our best to make your experience more comfortable.",
          "translations": {
            "ko": "여러분의 경험이 더 편안하게 만들기 위해 최선을 다하겠습니다.",
            "zh": "我们会尽力让你们的体验更舒适。",
            "ja": "お客様の体験がより快適になるよう最善を尽くします。",
            "vi": "Chúng tôi sẽ cố gắng hết sức để làm cho trải nghiệm của bạn thoải mái hơn."
          }
        },
        {
          "role": "user",
          "text": "Appreciate your help with this.",
          "translations": {
            "ko": "이 문제를 도와주셔서 감사합니다.",
            "zh": "感谢你们的帮助。",
            "ja": "この件でのご協力に感謝します。",
            "vi": "Cảm ơn sự giúp đỡ của bạn."
          }
        },
        {
          "role": "ai",
          "text": "Here’s your new table—hope it’s better.",
          "translations": {
            "ko": "새로운 테이블입니다. 이쪽이 더 나을 것입니다.",
            "zh": "这是你们的新桌子，希望这会更好。",
            "ja": "新しいテーブルです、こちらの方がよいと思います。",
            "vi": "Đây là bàn mới của bạn - hy vọng nó tốt hơn."
          }
        },
        {
          "role": "user",
          "text": "Much better—thank you.",
          "translations": {
            "ko": "훨씬 나아졌습니다. 감사합니다.",
            "zh": "好多了，谢谢你。",
            "ja": "ずっと良いです、ありがとうございます。",
            "vi": "Tốt hơn nhiều - cảm ơn bạn."
          }
        },
        {
          "role": "ai",
          "text": "Can I offer a complimentary drink for the inconvenience?",
          "translations": {
            "ko": "불편함을 보상하기 위해 무료 음료를 제공해 드릴까요?",
            "zh": "对于给你们带来的不便，我可以提供一杯免费饮料吗？",
            "ja": "ご迷惑をおかけしたので、無料のドリンクを提供できますか？",
            "vi": "Tôi có thể mời bạn một ly đồ uống miễn phí để bù đắp sự bất tiện không?"
          }
        },
        {
          "role": "user",
          "text": "That’s kind of you.",
          "translations": {
            "ko": "친절하게 해주셔서 감사합니다.",
            "zh": "你真好心。",
            "ja": "ご親切にありがとうございます。",
            "vi": "Bạn thật tốt bụng."
          }
        },
        {
          "role": "ai",
          "text": "Please enjoy the rest of your meal.",
          "translations": {
            "ko": "식사 나머지를 즐기세요.",
            "zh": "请享用你们的餐点。",
            "ja": "お食事の残りをお楽しみください。",
            "vi": "Hãy tận hưởng phần ăn còn lại của bạn."
          }
        },
        {
          "role": "user",
          "text": "Thanks again.",
          "translations": {
            "ko": "다시 한번 감사드립니다.",
            "zh": "再次感谢。",
            "ja": "再度、ありがとうございます。",
            "vi": "Cảm ơn bạn một lần nữa."
          }
        }
      ]
    },
    {
      "description": {
        "ko": "메인 코스 후에 디저트 주문하기",
        "zh": "主菜后点甜点",
        "ja": "メインコースの後にデザートを注文する",
        "vi": "Gọi món tráng miệng sau món chính."
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Would you like to see the dessert menu?",
          "translations": {
            "ko": "디저트 메뉴를 보시겠습니까?",
            "zh": "你想看看甜点菜单吗？",
            "ja": "デザートメニューをご覧になりますか？",
            "vi": "Bạn có muốn xem menu tráng miệng không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I’d love to.",
          "translations": {
            "ko": "네, 보고 싶습니다.",
            "zh": "是的，我很想看。",
            "ja": "はい、ぜひ見たいです。",
            "vi": "Vâng, tôi rất muốn."
          }
        },
        {
          "role": "ai",
          "text": "Our most popular dessert is the chocolate lava cake.",
          "translations": {
            "ko": "가장 인기 있는 디저트는 초콜릿 라바 케이크입니다.",
            "zh": "我们最受欢迎的甜点是巧克力熔岩蛋糕。",
            "ja": "当店の一番人気のデザートはチョコレートラバケーキです。",
            "vi": "Món tráng miệng phổ biến nhất của chúng tôi là bánh sô cô la lava."
          }
        },
        {
          "role": "user",
          "text": "That sounds amazing. I’ll have that.",
          "translations": {
            "ko": "정말 맛있겠네요. 그걸로 할게요.",
            "zh": "听起来很棒。我要那个。",
            "ja": "それは素晴らしいですね。それにします。",
            "vi": "Nghe thật tuyệt. Tôi sẽ chọn món đó."
          }
        },
        {
          "role": "ai",
          "text": "We also have cheesecake, fruit tart, and sorbet.",
          "translations": {
            "ko": "치즈케이크, 과일 타르트, 그리고 샤베트도 있습니다.",
            "zh": "我们还有芝士蛋糕，水果挞，和果汁冰淇淋。",
            "ja": "チーズケーキ、フルーツタルト、ソルベもございます。",
            "vi": "Chúng tôi cũng có bánh phô mai, bánh tart trái cây, và kem sorbet."
          }
        },
        {
          "role": "user",
          "text": "I’ll also take the fruit tart.",
          "translations": {
            "ko": "과일 타르트도 하나 주세요.",
            "zh": "我也要一个水果挞。",
            "ja": "フルーツタルトも一つお願いします。",
            "vi": "Tôi cũng sẽ chọn bánh tart trái cây."
          }
        },
        {
          "role": "ai",
          "text": "Would you like coffee or tea with your dessert?",
          "translations": {
            "ko": "디저트와 함께 커피나 차를 드시겠습니까?",
            "zh": "你想要咖啡还是茶配你的甜点吗？",
            "ja": "デザートにコーヒーかお茶はいかがですか？",
            "vi": "Bạn có muốn uống cà phê hay trà cùng với món tráng miệng không?"
          }
        },
        {
          "role": "user",
          "text": "Coffee for me, please.",
          "translations": {
            "ko": "저는 커피로 할게요.",
            "zh": "请给我来一杯咖啡。",
            "ja": "私はコーヒーをお願いします。",
            "vi": "Tôi muốn uống cà phê, xin vui lòng."
          }
        },
        {
          "role": "ai",
          "text": "The cake takes about 10 minutes to prepare.",
          "translations": {
            "ko": "케이크는 준비하는데 약 10분이 걸립니다.",
            "zh": "蛋糕需要大约10分钟的时间来准备。",
            "ja": "ケーキの準備には約10分かかります。",
            "vi": "Bánh mất khoảng 10 phút để chuẩn bị."
          }
        },
        {
          "role": "user",
          "text": "No problem. We’ll wait.",
          "translations": {
            "ko": "문제 없습니다. 기다리겠습니다.",
            "zh": "没问题。我们会等的。",
            "ja": "問題ありません。待ちます。",
            "vi": "Không sao. Chúng tôi sẽ chờ."
          }
        },
        {
          "role": "ai",
          "text": "Would you like to share a dessert or order separately?",
          "translations": {
            "ko": "디저트를 공유하시겠습니까, 아니면 따로 주문하시겠습니까?",
            "zh": "你们想要分享一个甜点还是单独点？",
            "ja": "デザートはシェアするか、別々に注文しますか？",
            "vi": "Bạn có muốn chia sẻ một món tráng miệng hay gọi riêng không?"
          }
        },
        {
          "role": "user",
          "text": "Let’s share the lava cake.",
          "translations": {
            "ko": "라바 케이크를 같이 나눠 먹읍시다.",
            "zh": "我们一起分享这个熔岩蛋糕吧。",
            "ja": "ラヴァケーキをシェアしましょう。",
            "vi": "Chúng ta hãy chia nhau ăn bánh lava."
          }
        },
        {
          "role": "ai",
          "text": "I’ll bring that out as soon as it’s ready.",
          "translations": {
            "ko": "준비되는 대로 바로 가져다 드리겠습니다.",
            "zh": "一出炉我就会马上给你们送过来。",
            "ja": "用意ができ次第、すぐにお持ちします。",
            "vi": "Tôi sẽ mang ra ngay khi nó đã sẵn sàng."
          }
        },
        {
          "role": "user",
          "text": "Looking forward to it.",
          "translations": {
            "ko": "기대하고 있습니다.",
            "zh": "期待着。",
            "ja": "楽しみにしています。",
            "vi": "Rất mong chờ."
          }
        },
        {
          "role": "ai",
          "text": "Would you like anything else while you wait?",
          "translations": {
            "ko": "기다리는 동안 다른 것도 필요하신가요?",
            "zh": "在等待的时候，你还需要别的什么吗？",
            "ja": "お待ちいただく間に何か他にご希望はありますか？",
            "vi": "Bạn có muốn thêm gì khác trong lúc chờ không?"
          }
        },
        {
          "role": "user",
          "text": "Just water is fine, thanks.",
          "translations": {
            "ko": "그냥 물만 주세요, 감사합니다.",
            "zh": "只要水就好，谢谢。",
            "ja": "水だけで大丈夫です、ありがとう。",
            "vi": "Chỉ cần nước là đủ, cảm ơn."
          }
        },
        {
          "role": "ai",
          "text": "Here’s your dessert. Enjoy!",
          "translations": {
            "ko": "여기 디저트입니다. 맛있게 드세요!",
            "zh": "这是你的甜点，享用吧！",
            "ja": "こちらがご注文のデザートです。どうぞお召し上がりください！",
            "vi": "Đây là món tráng miệng của bạn. Thưởng thức nhé!"
          }
        },
        {
          "role": "user",
          "text": "Wow, it looks great.",
          "translations": {
            "ko": "와, 정말 좋아 보입니다.",
            "zh": "哇，看起来很棒。",
            "ja": "うわー、見た目も素晴らしいですね。",
            "vi": "Wow, trông thật tuyệt."
          }
        },
        {
          "role": "ai",
          "text": "Let me know if you need anything else.",
          "translations": {
            "ko": "다른 것이 필요하시면 알려주세요.",
            "zh": "如果你还需要别的什么，告诉我。",
            "ja": "他に何か必要なものがあればお知らせください。",
            "vi": "Hãy cho tôi biết nếu bạn cần thêm gì."
          }
        },
        {
          "role": "user",
          "text": "Will do. Thank you!",
          "translations": {
            "ko": "알겠습니다. 감사합니다!",
            "zh": "好的，谢谢你！",
            "ja": "了解しました。ありがとうございます！",
            "vi": "Tôi sẽ làm vậy. Cảm ơn!"
          }
        }
      ]
    },
    {
      "description": {
        "ko": "와인 페어링 추천을 요청합니다.",
        "zh": "请推荐一款适合搭配的葡萄酒。",
        "ja": "ワインのペアリングについてのおすすめを求める",
        "vi": "Yêu cầu gợi ý về việc kết hợp rượu vang."
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Would you like a wine recommendation with your meal?",
          "translations": {
            "ko": "식사와 함께 와인 추천을 받고 싶으신가요?",
            "zh": "你想要我推荐一款搭配你的餐点的葡萄酒吗？",
            "ja": "お食事に合うワインのおすすめはいかがですか？",
            "vi": "Bạn có muốn gợi ý về rượu vang để kèm với bữa ăn không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I’m not sure what goes best.",
          "translations": {
            "ko": "네, 어떤 것이 가장 잘 어울리는지 잘 모르겠습니다.",
            "zh": "是的，我不确定哪款最合适。",
            "ja": "はい、どれが一番合うかわからないんです。",
            "vi": "Vâng, tôi không chắc loại nào phù hợp nhất."
          }
        },
        {
          "role": "ai",
          "text": "Since you’re having the lamb, a Merlot pairs nicely.",
          "translations": {
            "ko": "양고기를 주문하셨으니, 메를로와 잘 어울립니다.",
            "zh": "既然你点了羊肉，梅洛葡萄酒搭配起来很不错。",
            "ja": "ラム肉を召し上がるなら、メルローがよく合いますよ。",
            "vi": "Vì bạn đang ăn thịt cừu, Merlot sẽ kết hợp rất tốt."
          }
        },
        {
          "role": "user",
          "text": "Lamb with Merlot sounds perfect.",
          "translations": {
            "ko": "양고기와 메를로, 완벽해 보입니다.",
            "zh": "羊肉配梅洛听起来很完美。",
            "ja": "ラム肉にメルロー、完璧ですね。",
            "vi": "Thịt cừu với Merlot nghe hoàn hảo."
          }
        },
        {
          "role": "ai",
          "text": "For seafood, we typically suggest a crisp Sauvignon Blanc.",
          "translations": {
            "ko": "해산물에는 보통 상큼한 소비뇽 블랑을 추천드립니다.",
            "zh": "对于海鲜，我们通常建议搭配清爽的长相思白葡萄酒。",
            "ja": "シーフードには、さっぱりとしたソーヴィニヨン・ブランをおすすめしています。",
            "vi": "Với hải sản, chúng tôi thường gợi ý một loại Sauvignon Blanc tươi mát."
          }
        },
        {
          "role": "user",
          "text": "Actually, I’m having grilled shrimp.",
          "translations": {
            "ko": "사실, 그릴 새우를 주문했습니다.",
            "zh": "实际上，我点的是烤虾。",
            "ja": "実は、私はグリルしたエビを頼むつもりです。",
            "vi": "Thực ra, tôi đang ăn tôm nướng."
          }
        },
        {
          "role": "ai",
          "text": "Would you prefer red or white wine?",
          "translations": {
            "ko": "레드 와인과 화이트 와인 중 어떤 것을 선호하시나요?",
            "zh": "你更喜欢红酒还是白酒？",
            "ja": "ワインは赤と白、どちらがお好みですか？",
            "vi": "Bạn thích rượu vang đỏ hay trắng?"
          }
        },
        {
          "role": "user",
          "text": "White wine would be great, thanks.",
          "translations": {
            "ko": "화이트 와인이 좋을 것 같아요, 감사합니다.",
            "zh": "白葡萄酒很棒，谢谢。",
            "ja": "白ワインがいいです、ありがとう。",
            "vi": "Rượu vang trắng sẽ rất tốt, cảm ơn."
          }
        },
        {
          "role": "ai",
          "text": "We also have a wine flight if you’d like to sample a few.",
          "translations": {
            "ko": "몇 가지를 시식해 보고 싶으시다면 와인 플라이트도 있습니다.",
            "zh": "如果你想尝试几种，我们还有葡萄酒试饮套餐。",
            "ja": "数種類のワインを試すことができるワインフライトもご用意しています。",
            "vi": "Chúng tôi cũng có bộ sưu tập rượu vang nếu bạn muốn thử một số loại."
          }
        },
        {
          "role": "user",
          "text": "A flight sounds fun. Let’s do that.",
          "translations": {
            "ko": "플라이트가 재미있어 보입니다. 그걸로 하겠습니다.",
            "zh": "试饮套餐听起来很有趣。就这个吧。",
            "ja": "フライト、面白そうですね。それにしましょう。",
            "vi": "Bộ sưu tập nghe thú vị. Chúng ta hãy thử."
          }
        },
        {
          "role": "ai",
          "text": "Would you like a full glass or just a tasting?",
          "translations": {
            "ko": "풀 글라스를 원하시나요, 아니면 시식만 원하시나요?",
            "zh": "你想要一整杯还是只尝一尝？",
            "ja": "フルグラスにしますか、それともテイスティングにしますか？",
            "vi": "Bạn muốn một ly đầy hay chỉ muốn thử nếm?"
          }
        },
        {
          "role": "user",
          "text": "Just a tasting, please.",
          "translations": {
            "ko": "시식만 부탁드립니다.",
            "zh": "只尝一尝，谢谢。",
            "ja": "テイスティングでお願いします。",
            "vi": "Chỉ muốn thử nếm thôi, cảm ơn."
          }
        },
        {
          "role": "ai",
          "text": "The Merlot is smooth and fruity, not too heavy.",
          "translations": {
            "ko": "메를로는 부드럽고 과일 맛이 나며, 무겁지 않습니다.",
            "zh": "这款梅洛口感顺滑且果香浓郁，不会过重。",
            "ja": "メルローはスムーズでフルーティー、重すぎません。",
            "vi": "Merlot mềm mại và trái cây, không quá nặng."
          }
        },
        {
          "role": "user",
          "text": "That sounds like my style.",
          "translations": {
            "ko": "제 스타일 같아요.",
            "zh": "听起来很符合我的口味。",
            "ja": "それは私のスタイルにぴったりです。",
            "vi": "Nghe có vẻ phù hợp với phong cách của tôi."
          }
        },
        {
          "role": "ai",
          "text": "We also have a local Pinot Noir you might enjoy.",
          "translations": {
            "ko": "현지에서 생산하는 피노 누아도 좋아하실 것 같습니다.",
            "zh": "我们还有一款你可能会喜欢的本地黑皮诺葡萄酒。",
            "ja": "地元のピノ・ノワールもお楽しみいただけるかと思います。",
            "vi": "Chúng tôi cũng có loại Pinot Noir địa phương mà bạn có thể thích."
          }
        },
        {
          "role": "user",
          "text": "I’d love to try the Pinot as well.",
          "translations": {
            "ko": "피노 누아도 시도해 보고 싶네요.",
            "zh": "我想试试黑皮诺。",
            "ja": "ピノも試してみたいですね。",
            "vi": "Tôi muốn thử Pinot nữa."
          }
        },
        {
          "role": "ai",
          "text": "I’ll bring you a sample to try first.",
          "translations": {
            "ko": "먼저 시식해 보실 수 있게 샘플을 가져다 드리겠습니다.",
            "zh": "我会先给你带一份试饮的。",
            "ja": "まずは試飲用のサンプルをお持ちします。",
            "vi": "Tôi sẽ mang cho bạn một mẫu để thử trước."
          }
        },
        {
          "role": "user",
          "text": "Thanks. A sample would help.",
          "translations": {
            "ko": "감사합니다. 샘플이 도움이 될 것 같아요.",
            "zh": "谢谢。试饮会有帮助。",
            "ja": "ありがとう。サンプルがあると助かります。",
            "vi": "Cảm ơn. Một mẫu thử sẽ giúp ích."
          }
        },
        {
          "role": "ai",
          "text": "Let me know what you think.",
          "translations": {
            "ko": "어떤지 알려주세요.",
            "zh": "尝尝看，告诉我你的感想。",
            "ja": "どう思われましたか？",
            "vi": "Hãy cho tôi biết ý kiến của bạn."
          }
        },
        {
          "role": "user",
          "text": "It’s excellent. I’ll take that one.",
          "translations": {
            "ko": "훌륭합니다. 이걸로 하겠습니다.",
            "zh": "很棒。我就要这一款。",
            "ja": "素晴らしいです。これにします。",
            "vi": "Rất tuyệt. Tôi sẽ chọn loại này."
          }
        }
      ]
    }
  ],
  "advanced": [
    {
      "description": {
        "ko": "음식 알레르기와 특별한 요구 사항에 대한 논의",
        "zh": "讨论食物过敏和特殊需求",
        "ja": "食物アレルギーと特別な配慮について話し合う",
        "vi": "Thảo luận về dị ứng thức ăn và các biện pháp đặc biệt"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Good evening and welcome. Before we begin, do you have any allergies or dietary restrictions?",
          "translations": {
            "ko": "좋은 저녁이고 환영합니다. 시작하기 전에 알레르기나 식사 제한이 있으신가요?",
            "zh": "晚上好，欢迎光临。在我们开始之前，您有任何过敏或饮食限制吗？",
            "ja": "こんばんは、ようこそ。始める前に、アレルギーや食事制限はありますか？",
            "vi": "Chào buổi tối và hoan nghênh. Trước khi bắt đầu, quý khách có dị ứng hoặc hạn chế chế độ ăn uống gì không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I have a severe nut allergy.",
          "translations": {
            "ko": "네, 저는 견과류 알레르기가 매우 심해요.",
            "zh": "是的，我对坚果过敏严重。",
            "ja": "はい、私はナッツアレルギーが非常に強いです。",
            "vi": "Có, tôi bị dị ứng hạt khá nặng."
          }
        },
        {
          "role": "ai",
          "text": "Thank you for informing us. We take allergies very seriously here.",
          "translations": {
            "ko": "알려주셔서 감사합니다. 저희는 알레르기를 매우 중요하게 생각합니다.",
            "zh": "感谢您告知我们。我们非常重视过敏问题。",
            "ja": "お知らせいただきありがとうございます。ここではアレルギーを非常に重視しています。",
            "vi": "Cảm ơn quý khách đã thông báo cho chúng tôi. Chúng tôi rất coi trọng vấn đề dị ứng tại đây."
          }
        },
        {
          "role": "user",
          "text": "I appreciate that, thank you.",
          "translations": {
            "ko": "그렇게 해주셔서 감사합니다.",
            "zh": "我很感激，谢谢。",
            "ja": "それを聞いて安心しました、ありがとうございます。",
            "vi": "Tôi rất cảm kích điều đó, cảm ơn."
          }
        },
        {
          "role": "ai",
          "text": "We can modify several dishes to be completely nut-free.",
          "translations": {
            "ko": "저희는 여러 요리를 완전히 견과류가 없는 것으로 변경할 수 있습니다.",
            "zh": "我们可以修改几道菜品，完全不含坚果。",
            "ja": "ナッツを一切含まないように、いくつかの料理を変更することができます。",
            "vi": "Chúng tôi có thể điều chỉnh một số món ăn để hoàn toàn không có hạt."
          }
        },
        {
          "role": "user",
          "text": "That would be great. I’d like to avoid all nuts entirely.",
          "translations": {
            "ko": "그럼 좋겠네요. 저는 모든 견과류를 피하고 싶어요.",
            "zh": "那太好了。我想完全避免所有的坚果。",
            "ja": "それは素晴らしいです。私は全てのナッツを避けたいです。",
            "vi": "Điều đó rất tốt. Tôi muốn tránh tất cả các loại hạt hoàn toàn."
          }
        },
        {
          "role": "ai",
          "text": "Would you prefer that I speak with the chef directly about your options?",
          "translations": {
            "ko": "저가 직접 셰프와 당신의 선택에 대해 이야기하는 것이 좋겠습니까?",
            "zh": "您希望我直接与厨师讨论您的选择吗？",
            "ja": "シェフに直接、あなたの選択肢について話すことを希望しますか？",
            "vi": "Quý khách có muốn tôi trao đổi trực tiếp với đầu bếp về các lựa chọn của mình không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I’d feel more comfortable if you could.",
          "translations": {
            "ko": "네, 그렇게 해주시면 더 편하겠어요.",
            "zh": "是的，如果你能这样做，我会感觉更舒服。",
            "ja": "はい、それができればもっと安心します。",
            "vi": "Có, tôi sẽ cảm thấy thoải mái hơn nếu bạn có thể làm như vậy."
          }
        },
        {
          "role": "ai",
          "text": "The risotto and the grilled vegetables are safe choices and free from all major allergens.",
          "translations": {
            "ko": "리소토와 구운 채소는 안전한 선택이며 모든 주요 알레르기 원인물질이 없습니다.",
            "zh": "烩饭和烤蔬菜是安全的选择，不含所有主要过敏原。",
            "ja": "リゾットと焼き野菜は安全な選択肢で、主要なアレルゲンは一切含まれていません。",
            "vi": "Risotto và rau nướng là những lựa chọn an toàn và không chứa các chất gây dị ứng chính."
          }
        },
        {
          "role": "user",
          "text": "That sounds perfect. I’ll go with the risotto.",
          "translations": {
            "ko": "완벽하게 들립니다. 리소토로 할게요.",
            "zh": "听起来很好。我会选择烩饭。",
            "ja": "それは完璧です。リゾットにします。",
            "vi": "Điều đó nghe hoàn hảo. Tôi sẽ chọn risotto."
          }
        },
        {
          "role": "ai",
          "text": "Would you like to review our allergen chart before ordering?",
          "translations": {
            "ko": "주문하기 전에 알레르기 차트를 확인하시겠습니까?",
            "zh": "您是否希望在点餐前查看我们的过敏原图表？",
            "ja": "注文する前に、当店のアレルゲンチャートを確認しますか？",
            "vi": "Quý khách có muốn xem bảng dị ứng của chúng tôi trước khi đặt món không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, just to double-check, that would help.",
          "translations": {
            "ko": "네, 다시 확인하기 위해서라도 도움이 될 것 같아요.",
            "zh": "是的，再次确认一下会更好。",
            "ja": "はい、念のため確認したいです。",
            "vi": "Có, chỉ để kiểm tra lại, điều đó sẽ giúp ích."
          }
        },
        {
          "role": "ai",
          "text": "I’ve noted your allergy in the system to ensure the kitchen is aware.",
          "translations": {
            "ko": "부엌이 알 수 있도록 시스템에 알레르기를 기록했습니다.",
            "zh": "我已经在系统中记录了您的过敏情况，以确保厨房知道。",
            "ja": "キッチンがあなたのアレルギーを認識するように、システムに記録しました。",
            "vi": "Tôi đã ghi chú dị ứng của quý khách vào hệ thống để đảm bảo bếp biết."
          }
        },
        {
          "role": "user",
          "text": "Thank you for taking that precaution.",
          "translations": {
            "ko": "그런 예방 조치를 취해주셔서 감사합니다.",
            "zh": "感谢您采取这种预防措施。",
            "ja": "その予防策を取っていただきありがとうございます。",
            "vi": "Cảm ơn bạn đã thực hiện biện pháp phòng ngừa đó."
          }
        },
        {
          "role": "ai",
          "text": "Would you prefer your meal to be prepared in a separate area?",
          "translations": {
            "ko": "식사를 별도의 공간에서 준비하는 것을 선호하시나요?",
            "zh": "您是否希望您的餐点在单独的区域内准备？",
            "ja": "あなたの食事を別のエリアで調理することを希望しますか？",
            "vi": "Quý khách có muốn bữa ăn của mình được chuẩn bị trong một khu vực riêng không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, if possible. I’d really appreciate that.",
          "translations": {
            "ko": "가능하다면 그렇게 해주시면 정말 감사하겠습니다.",
            "zh": "是的，如果可能的话。我会非常感激的。",
            "ja": "可能であれば、それがとてもありがたいです。",
            "vi": "Có, nếu có thể. Tôi thực sự rất cảm kích điều đó."
          }
        },
        {
          "role": "ai",
          "text": "We can also provide ingredient lists for any dish you’re interested in.",
          "translations": {
            "ko": "관심이 있는 모든 요리의 재료 목록도 제공할 수 있습니다.",
            "zh": "我们还可以提供您感兴趣的任何菜品的成分列表。",
            "ja": "ご興味がある料理の材料リストも提供できます。",
            "vi": "Chúng tôi cũng có thể cung cấp danh sách nguyên liệu cho bất kỳ món ăn nào quý khách quan tâm."
          }
        },
        {
          "role": "user",
          "text": "That’s very helpful. I’m considering the soup as well.",
          "translations": {
            "ko": "그게 정말 도움이 될 것 같아요. 스프도 고려 중이에요.",
            "zh": "这非常有帮助。我也在考虑汤。",
            "ja": "それはとても助かります。スープも考えています。",
            "vi": "Điều đó rất hữu ích. Tôi cũng đang xem xét món súp."
          }
        },
        {
          "role": "ai",
          "text": "Please let me know immediately if anything feels unsafe during your meal.",
          "translations": {
            "ko": "식사 중에 무엇이든 불안하게 느껴지면 즉시 알려주세요.",
            "zh": "如果在用餐过程中有任何不安全的感觉，请立即告诉我。",
            "ja": "食事中に何か不安なことがあればすぐにお知らせください。",
            "vi": "Nếu có bất cứ điều gì cảm thấy không an toàn trong suốt bữa ăn của quý khách, hãy thông báo cho tôi ngay lập tức."
          }
        },
        {
          "role": "user",
          "text": "Of course. Thanks for being so careful.",
          "translations": {
            "ko": "물론이죠. 이렇게 신중하게 대해주셔서 감사합니다.",
            "zh": "当然。感谢您如此小心。",
            "ja": "もちろんです。そんなに気を使っていただきありがとうございます。",
            "vi": "Dĩ nhiên. Cảm ơn bạn đã cẩn thận như vậy."
          }
        }
      ]
    },
    {
      "description": {
        "ko": "고급 레스토랑에서 공식적인 비즈니스 저녁 식사 개최",
        "zh": "在高级餐厅举办正式商务晚宴",
        "ja": "ファインダイニングレストランでの正式なビジネスディナーの開催",
        "vi": "Tổ chức một bữa tối kinh doanh chính thức tại một nhà hàng ẩm thực cao cấp"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Good evening and welcome. We’ve reserved the private dining room for your party.",
          "translations": {
            "ko": "좋은 저녁이고 환영합니다. 당신의 파티를 위해 개인 식당을 예약했습니다.",
            "zh": "晚上好，欢迎光临。我们已为您预留了私人餐厅。",
            "ja": "こんばんは、ようこそ。あなたのパーティーのためにプライベートダイニングルームを予約しました。",
            "vi": "Chào buổi tối và hoan nghênh. Chúng tôi đã dành phòng ăn riêng cho đoàn của quý khách."
          }
        },
        {
          "role": "user",
          "text": "Thank you. This looks perfect for our meeting.",
          "translations": {
            "ko": "감사합니다. 이곳은 우리 회의에 완벽하네요.",
            "zh": "谢谢。这对我们的会议来说非常完美。",
            "ja": "ありがとうございます。これは私たちの会議にぴったりです。",
            "vi": "Cảm ơn. Điều này trông hoàn hảo cho cuộc họp của chúng tôi."
          }
        },
        {
          "role": "ai",
          "text": "Would you like to begin with a round of drinks before we present the menu?",
          "translations": {
            "ko": "메뉴를 제시하기 전에 한 라운드 음료부터 시작하시겠습니까?",
            "zh": "您是否希望在我们呈现菜单之前先来一轮饮料？",
            "ja": "メニューを提示する前に、まずドリンクを始めますか？",
            "vi": "Quý khách có muốn bắt đầu với một vòng đồ uống trước khi chúng tôi giới thiệu thực đơn không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, drinks first would be great.",
          "translations": {
            "ko": "네, 음료부터 시작하는 것이 좋겠네요.",
            "zh": "是的，先来饮料会很好。",
            "ja": "はい、最初にドリンクをいただくと良いですね。",
            "vi": "Có, đồ uống trước sẽ rất tốt."
          }
        },
        {
          "role": "ai",
          "text": "Tonight’s chef’s tasting menu features seasonal specialties and wine pairings.",
          "translations": {
            "ko": "오늘 저녁의 셰프 특선 메뉴는 계절 특산품과 와인 페어링을 특징으로 합니다.",
            "zh": "今晚的厨师品尝菜单特色是季节特色和葡萄酒搭配。",
            "ja": "今夜のシェフのテイスティングメニューは、季節の特別料理とワインのペアリングが特徴です。",
            "vi": "Thực đơn thử nếm của đầu bếp tối nay giới thiệu các món đặc sản theo mùa và sự kết hợp với rượu."
          }
        },
        {
          "role": "user",
          "text": "That sounds excellent. We’ll try the tasting menu.",
          "translations": {
            "ko": "훌륭하게 들립니다. 저희는 특선 메뉴를 시도해볼게요.",
            "zh": "听起来非常棒。我们会尝试品尝菜单。",
            "ja": "それは素晴らしいですね。テイスティングメニューを試してみましょう。",
            "vi": "Điều đó nghe rất tuyệt. Chúng tôi sẽ thử thực đơn thử nếm."
          }
        },
        {
          "role": "ai",
          "text": "If you prefer, we also have an à la carte option available.",
          "translations": {
            "ko": "원하신다면, 아 라 카르트 메뉴도 준비되어 있습니다.",
            "zh": "如果您愿意，我们也有单点菜单可供选择。",
            "ja": "ご希望であれば、アラカルトメニューもご用意しています。",
            "vi": "Nếu quý khách muốn, chúng tôi cũng có tùy chọn à la carte."
          }
        },
        {
          "role": "user",
          "text": "I’d like to see the à la carte menu as well, just in case.",
          "translations": {
            "ko": "그냥 혹시나 하는 경우에 아 라 카르트 메뉴도 보고 싶어요.",
            "zh": "我也想看看单点菜单，以防万一。",
            "ja": "念のため、アラカルトメニューも見てみたいです。",
            "vi": "Tôi muốn xem thực đơn à la carte nữa, chỉ để dự phòng."
          }
        },
        {
          "role": "ai",
          "text": "Can I make any recommendations for wine to accompany your main course?",
          "translations": {
            "ko": "주요 요리와 함께 드실 와인에 대해 추천해 드릴까요?",
            "zh": "我可以为您的主菜推荐一款葡萄酒吗？",
            "ja": "メインコースに合うワインのおすすめはございますか？",
            "vi": "Tôi có thể đưa ra một số gợi ý về rượu để đi kèm với món chính của quý khách không?"
          }
        },
        {
          "role": "user",
          "text": "Sure, something bold to go with steak, please.",
          "translations": {
            "ko": "그럼요, 스테이크와 잘 어울리는 강렬한 맛의 와인으로 부탁드립니다.",
            "zh": "当然，麻烦推荐一款与牛排搭配的浓烈口感的酒。",
            "ja": "はい、ステーキに合う力強いワインをお願いします。",
            "vi": "Chắc chắn, một loại rượu mạnh để đi kèm với bò nướng, xin vui lòng."
          }
        },
        {
          "role": "ai",
          "text": "We’ve arranged for a quieter ambiance and extended seating time.",
          "translations": {
            "ko": "우리는 더 조용한 분위기와 연장된 좌석 시간을 준비했습니다.",
            "zh": "我们已经为您安排了一个更安静的环境和延长的用餐时间。",
            "ja": "静かな雰囲気と長時間の座席をご用意しました。",
            "vi": "Chúng tôi đã sắp xếp cho một không gian yên tĩnh hơn và thời gian ngồi lâu hơn."
          }
        },
        {
          "role": "user",
          "text": "That’s exactly what we needed. Thanks.",
          "translations": {
            "ko": "그게 바로 우리가 필요한 것이었어요. 감사합니다.",
            "zh": "这正是我们需要的。谢谢。",
            "ja": "それがまさに必要だった。ありがとう。",
            "vi": "Đó chính xác là những gì chúng tôi cần. Cảm ơn."
          }
        },
        {
          "role": "ai",
          "text": "Let me know if you’d like a formal introduction to the chef.",
          "translations": {
            "ko": "셰프를 공식적으로 소개받고 싶으시다면 알려주세요.",
            "zh": "如果您需要，我可以为您正式介绍我们的厨师。",
            "ja": "シェフに正式にご紹介させていただくことはいかがでしょうか？",
            "vi": "Hãy cho tôi biết nếu quý khách muốn được giới thiệu chính thức với đầu bếp."
          }
        },
        {
          "role": "user",
          "text": "That would be wonderful. They’d enjoy that.",
          "translations": {
            "ko": "그것이 좋겠어요. 그들이 좋아할 거예요.",
            "zh": "那真是太好了。他们会喜欢的。",
            "ja": "それは素晴らしいです。喜ぶでしょうね。",
            "vi": "Điều đó thật tuyệt. Họ sẽ thích điều đó."
          }
        },
        {
          "role": "ai",
          "text": "We’ll ensure courses are paced for conversation and comfort.",
          "translations": {
            "ko": "우리는 대화와 편안함을 위해 코스를 천천히 진행할 것입니다.",
            "zh": "我们会确保菜品的上菜速度适合交谈和舒适。",
            "ja": "会話や快適さを考慮してコースの進行を調整します。",
            "vi": "Chúng tôi sẽ đảm bảo các món ăn được phục vụ đúng tiến độ để quý khách có thể trò chuyện và thoải mái."
          }
        },
        {
          "role": "user",
          "text": "Appreciate the thoughtful pacing.",
          "translations": {
            "ko": "세심한 페이싱에 감사드립니다.",
            "zh": "感谢您的细心安排。",
            "ja": "配慮ある進行に感謝します。",
            "vi": "Tôi đánh giá cao sự chăm sóc tỉ mỉ về tiến độ."
          }
        },
        {
          "role": "ai",
          "text": "Would you like me to present the dessert options to the table personally?",
          "translations": {
            "ko": "디저트 옵션을 직접 테이블에 소개해 드릴까요?",
            "zh": "您希望我亲自向您介绍甜点选项吗？",
            "ja": "デザートの選択肢を私が直接テーブルでご案内させていただきますか？",
            "vi": "Quý khách có muốn tôi giới thiệu cá nhân các lựa chọn món tráng miệng không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, please. That would be a nice touch.",
          "translations": {
            "ko": "네, 부탁드립니다. 그것이 좋은 접근 방식이 될 것입니다.",
            "zh": "是的，请。这将是一个很好的亮点。",
            "ja": "はい、お願いします。それは素敵なアクセントになりますね。",
            "vi": "Vâng, xin vui lòng. Điều đó sẽ là một điểm nhấn thú vị."
          }
        },
        {
          "role": "ai",
          "text": "Thank you again for choosing us for your important gathering.",
          "translations": {
            "ko": "중요한 모임에 우리를 선택해 주셔서 다시 한번 감사드립니다.",
            "zh": "再次感谢您选择我们举办您的重要聚会。",
            "ja": "大切な集まりに私たちを選んでいただき、再度お礼申し上げます。",
            "vi": "Cảm ơn quý khách đã chọn chúng tôi cho buổi tụ họp quan trọng của mình."
          }
        },
        {
          "role": "user",
          "text": "We’re glad to be here. Thanks again for the service.",
          "translations": {
            "ko": "여기에 있어서 기쁩니다. 서비스에 다시 한번 감사드립니다.",
            "zh": "我们很高兴能来这里。再次感谢您的服务。",
            "ja": "ここにいられてうれしいです。再度、サービスに感謝します。",
            "vi": "Chúng tôi rất vui khi được ở đây. Cảm ơn một lần nữa vì dịch vụ."
          }
        }
      ]
    },
    {
      "description": {
        "ko": "솜리에와 와인 페어링에 대해 논의하기",
        "zh": "与侍酒师讨论葡萄酒搭配",
        "ja": "ソムリエとワインのペアリングについて話す",
        "vi": "Thảo luận về việc kết hợp rượu với một sommelier"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Good evening. I’ll be your sommelier tonight. May I assist with wine selection?",
          "translations": {
            "ko": "안녕하세요. 오늘 밤은 제가 여러분의 솜리에가 될 것입니다. 와인 선택에 도움을 드릴까요?",
            "zh": "晚上好。我今晚将为您提供侍酒服务。我可以帮助您选择葡萄酒吗？",
            "ja": "こんばんは。今夜は私があなたのソムリエを務めます。ワインの選択にお手伝いしましょうか？",
            "vi": "Chào buổi tối. Tôi sẽ là sommelier của quý khách tối nay. Tôi có thể giúp đỡ với việc lựa chọn rượu không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I’d appreciate your recommendation.",
          "translations": {
            "ko": "네, 권장사항을 듣고 싶습니다.",
            "zh": "是的，我很欣赏您的推荐。",
            "ja": "はい、おすすめをいただけるとありがたいです。",
            "vi": "Vâng, tôi sẽ rất cảm kích nếu nhận được sự gợi ý của bạn."
          }
        },
        {
          "role": "ai",
          "text": "For the lamb, a full-bodied Syrah or a Bordeaux would complement it beautifully.",
          "translations": {
            "ko": "양고기에는 풍성한 맛의 시라즈나 보르도가 아름답게 어울립니다.",
            "zh": "对于羊肉，一款醇厚的西拉或波尔多葡萄酒会非常搭配。",
            "ja": "ラム肉には、フルボディのシラーズやボルドーが美しく合います。",
            "vi": "Với món cừu, một loại Syrah đậm đà hoặc một loại Bordeaux sẽ làm nổi bật món ăn."
          }
        },
        {
          "role": "user",
          "text": "I’m planning to have the lamb, so something that suits that.",
          "translations": {
            "ko": "양고기를 먹을 계획이니, 그에 어울리는 것으로 부탁드립니다.",
            "zh": "我打算点羊肉，所以请推荐适合这道菜的酒。",
            "ja": "ラム肉を頼む予定なので、それに合うものを。",
            "vi": "Tôi đang dự định ăn món cừu, vậy nên một loại rượu phù hợp với món đó."
          }
        },
        {
          "role": "ai",
          "text": "Are you looking for something bold or more on the elegant side?",
          "translations": {
            "ko": "강렬한 맛을 찾으시는 건지, 아니면 좀 더 우아한 맛을 원하시는 건지요?",
            "zh": "您是在寻找一款浓烈的酒，还是更偏向于优雅的口感？",
            "ja": "力強いものをお探しですか、それとももっとエレガントなものを？",
            "vi": "Quý khách đang tìm kiếm một loại rượu mạnh mẽ hay phía bên phong cách thanh lịch hơn?"
          }
        },
        {
          "role": "user",
          "text": "Something bold, but not overpowering.",
          "translations": {
            "ko": "강렬한 맛이지만, 압도적이지 않은 것으로요.",
            "zh": "我想要一款浓烈的，但不要过于强烈。",
            "ja": "力強いものがいいですが、圧倒的すぎるものは避けたいです。",
            "vi": "Một loại rượu mạnh mẽ, nhưng không quá mạnh."
          }
        },
        {
          "role": "ai",
          "text": "We have an excellent vintage from Napa Valley you may enjoy.",
          "translations": {
            "ko": "우리는 나파 밸리에서 나온 훌륭한 빈티지 와인을 가지고 있습니다.",
            "zh": "我们有一款来自纳帕谷的优质老酒，您可能会喜欢。",
            "ja": "ナパバレーの優れたビンテージワインがございます。お楽しみいただけるかと思います。",
            "vi": "Chúng tôi có một loại rượu vang cổ điển tuyệt vời từ Napa Valley mà quý khách có thể thích."
          }
        },
        {
          "role": "user",
          "text": "That sounds promising. Let’s try it.",
          "translations": {
            "ko": "그것이 좋아 보입니다. 한번 시도해 보겠습니다.",
            "zh": "听起来很有前景。我们试试看。",
            "ja": "それは期待できそうですね。試してみましょう。",
            "vi": "Nghe có vẻ hứa hẹn. Hãy thử nó."
          }
        },
        {
          "role": "ai",
          "text": "Would you like a sample before committing to a full glass?",
          "translations": {
            "ko": "전체 잔을 주문하기 전에 샘플을 드셔 보시겠어요?",
            "zh": "您想在决定是否要一整杯之前先尝一下吗？",
            "ja": "フルグラスを注文する前に試飲はいかがでしょうか？",
            "vi": "Quý khách có muốn thử mẫu trước khi quyết định mua một ly đầy không?"
          }
        },
        {
          "role": "user",
          "text": "A sample would be perfect, thank you.",
          "translations": {
            "ko": "샘플이 딱 좋겠네요, 감사합니다.",
            "zh": "试饮会非常完美，谢谢。",
            "ja": "試飲をいただけると助かります、ありがとうございます。",
            "vi": "Một mẫu thử sẽ hoàn hảo, cảm ơn."
          }
        },
        {
          "role": "ai",
          "text": "This selection offers notes of blackberries, spice, and subtle oak.",
          "translations": {
            "ko": "이 선택지는 블랙베리, 스파이스, 그리고 미묘한 오크의 향을 제공합니다.",
            "zh": "这款酒有黑莓，香料和微妙的橡木的味道。",
            "ja": "このワインはブラックベリー、スパイス、そしてさりげないオークの香りが特徴です。",
            "vi": "Loại rượu này có hương vị của quả mâm xôi, gia vị, và gỗ sồi nhẹ nhàng."
          }
        },
        {
          "role": "user",
          "text": "That flavor profile sounds exactly right.",
          "translations": {
            "ko": "그 맛 프로필이 딱 맞는 것 같습니다.",
            "zh": "这个口感听起来正合我意。",
            "ja": "そのフレーバープロファイルはまさに私が求めていたものです。",
            "vi": "Hồ sơ hương vị đó nghe có vẻ hoàn toàn phù hợp."
          }
        },
        {
          "role": "ai",
          "text": "It pairs especially well with savory and herb-forward dishes.",
          "translations": {
            "ko": "특히, 짭짤하고 허브 맛이 강한 요리와 잘 어울립니다.",
            "zh": "它特别适合搭配口味鲜美和草本的菜肴。",
            "ja": "特に、風味豊かでハーブが前面に出た料理とよく合います。",
            "vi": "Nó kết hợp rất tốt với các món ăn mặn và có nhiều thảo mộc."
          }
        },
        {
          "role": "user",
          "text": "Great. That’s what I’m aiming for.",
          "translations": {
            "ko": "좋아요. 그게 바로 내가 원하는 것입니다.",
            "zh": "太好了。这正是我想要的。",
            "ja": "素晴らしい。それが私の目指すところです。",
            "vi": "Tuyệt. Đó chính là điều tôi đang nhắm đến."
          }
        },
        {
          "role": "ai",
          "text": "Would you prefer a local wine or something imported?",
          "translations": {
            "ko": "현지 와인을 선호하시나요, 아니면 수입 와인을 선호하시나요?",
            "zh": "您更喜欢本地葡萄酒还是进口葡萄酒？",
            "ja": "地元のワインと輸入ワイン、どちらがお好みですか？",
            "vi": "Quý khách có muốn rượu nội địa hay rượu nhập khẩu?"
          }
        },
        {
          "role": "user",
          "text": "Let’s go with a local option today.",
          "translations": {
            "ko": "오늘은 현지 와인으로 해 보겠습니다.",
            "zh": "今天我们就选一款本地的吧。",
            "ja": "今日は地元のワインにしましょう。",
            "vi": "Hãy chọn một lựa chọn địa phương hôm nay."
          }
        },
        {
          "role": "ai",
          "text": "We also have wine flights if you’d like to explore different profiles.",
          "translations": {
            "ko": "다양한 프로필을 탐색하고 싶으시다면 와인 플라이트도 있습니다.",
            "zh": "如果您想尝试不同的口感，我们还有葡萄酒套餐。",
            "ja": "異なるプロファイルを探求したい方のために、ワインフライトもご用意しております。",
            "vi": "Chúng tôi cũng có các loại rượu bay nếu quý khách muốn khám phá các hồ sơ hương vị khác nhau."
          }
        },
        {
          "role": "user",
          "text": "A flight sounds fun. I’ll do that.",
          "translations": {
            "ko": "비행기 타는 건 재미있겠네요. 그렇게 하겠습니다.",
            "zh": "坐飞机听起来很有趣。我会去的。",
            "ja": "飛行機の旅、楽しそうですね。それにします。",
            "vi": "Đi máy bay nghe thú vị. Tôi sẽ làm như vậy."
          }
        },
        {
          "role": "ai",
          "text": "Let me know if you'd like me to decant the bottle for you.",
          "translations": {
            "ko": "병을 디캔트해드릴까요?",
            "zh": "如果你需要我为你醒酒，请告诉我。",
            "ja": "ボトルをデキャンタに移す必要があればお知らせください。",
            "vi": "Hãy cho tôi biết nếu bạn muốn tôi rót rượu từ chai cho bạn."
          }
        },
        {
          "role": "user",
          "text": "Yes, please go ahead and decant it.",
          "translations": {
            "ko": "네, 디캔트해 주세요.",
            "zh": "是的，请醒一下这瓶酒。",
            "ja": "はい、デキャンタに移してください。",
            "vi": "Vâng, hãy tiếp tục rót rượu."
          }
        }
      ]
    },
    {
      "description": {
        "ko": "고급 레스토랑에서 청구서의 오류를 지적하는 상황",
        "zh": "在高级餐厅指出账单上的错误",
        "ja": "高級レストランでの請求書の間違いを指摘する",
        "vi": "Đề cập đến một lỗi trong hóa đơn tại một nhà hàng sang trọng"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Thank you for dining with us. Here’s your check.",
          "translations": {
            "ko": "우리 식당에서 식사해주셔서 감사합니다. 청구서입니다.",
            "zh": "感谢您在此用餐。这是您的账单。",
            "ja": "当店でのお食事、ありがとうございました。こちらがお会計です。",
            "vi": "Cảm ơn bạn đã ăn tại nhà hàng của chúng tôi. Đây là hóa đơn của bạn."
          }
        },
        {
          "role": "user",
          "text": "Excuse me, I think there’s something extra on this bill.",
          "translations": {
            "ko": "실례합니다만, 이 청구서에 더해진 것 같습니다.",
            "zh": "对不起，我觉得这个账单上多了一些东西。",
            "ja": "すみません、この請求書に余計なものが含まれているようです。",
            "vi": "Xin lỗi, tôi nghĩ có thêm một số mục không đúng trong hóa đơn này."
          }
        },
        {
          "role": "ai",
          "text": "Oh, I see. Let me take a look at that for you.",
          "translations": {
            "ko": "아, 그렇군요. 제가 확인해보겠습니다.",
            "zh": "哦，我明白了。让我为您看一下。",
            "ja": "ああ、そうですか。それを確認させていただきます。",
            "vi": "Ồ, tôi hiểu. Để tôi xem xét điều đó cho bạn."
          }
        },
        {
          "role": "user",
          "text": "We didn’t order the bottle of wine listed here.",
          "translations": {
            "ko": "여기 나와있는 와인은 주문하지 않았습니다.",
            "zh": "我们没有点这里列出的这瓶酒。",
            "ja": "ここに記載されているワインは注文していません。",
            "vi": "Chúng tôi không đặt chai rượu được liệt kê ở đây."
          }
        },
        {
          "role": "ai",
          "text": "You’re right, that item shouldn’t be on your bill.",
          "translations": {
            "ko": "맞습니다, 그 항목은 청구서에 나와서는 안됩니다.",
            "zh": "您说得对，这个项目不应该在您的账单上。",
            "ja": "おっしゃる通り、その項目はお会計に含まれるべきではありません。",
            "vi": "Bạn đúng, mục đó không nên có trong hóa đơn của bạn."
          }
        },
        {
          "role": "user",
          "text": "Thanks. I just wanted to clarify before paying.",
          "translations": {
            "ko": "감사합니다. 결제하기 전에 확인하고 싶었습니다.",
            "zh": "谢谢。我只是想在付款前澄清一下。",
            "ja": "支払う前に確認したかっただけです。ありがとうございます。",
            "vi": "Cảm ơn. Tôi chỉ muốn làm rõ trước khi thanh toán."
          }
        },
        {
          "role": "ai",
          "text": "I sincerely apologize for the oversight.",
          "translations": {
            "ko": "실수를 해서 진심으로 사과드립니다.",
            "zh": "我对这个疏忽深感歉意。",
            "ja": "この度は見落とし、申し訳ありませんでした。",
            "vi": "Tôi xin lỗi chân thành vì sự bất cẩn này."
          }
        },
        {
          "role": "user",
          "text": "No problem. These things happen.",
          "translations": {
            "ko": "괜찮습니다. 이런 일도 있죠.",
            "zh": "没关系。这种事情偶尔会发生。",
            "ja": "問題ありません。こういうことは起こりますから。",
            "vi": "Không sao. Những chuyện như vậy thường xảy ra."
          }
        },
        {
          "role": "ai",
          "text": "I’ll correct it immediately and bring you a revised total.",
          "translations": {
            "ko": "바로 수정하고 수정된 총액을 드리겠습니다.",
            "zh": "我会立即更正，并给您带来修正后的总额。",
            "ja": "すぐに修正し、修正後の合計金額をお持ちします。",
            "vi": "Tôi sẽ sửa ngay lập tức và mang lại tổng số tiền đã được chỉnh sửa."
          }
        },
        {
          "role": "user",
          "text": "I appreciate you fixing it quickly.",
          "translations": {
            "ko": "빠르게 처리해주셔서 감사합니다.",
            "zh": "感谢您迅速解决这个问题。",
            "ja": "すぐに対応していただき、感謝しています。",
            "vi": "Tôi rất biết ơn bạn đã sửa nó nhanh chóng."
          }
        },
        {
          "role": "ai",
          "text": "Thank you for pointing that out so politely.",
          "translations": {
            "ko": "그렇게 공손하게 지적해주셔서 감사합니다.",
            "zh": "感谢您如此礼貌地指出这个问题。",
            "ja": "そんなに丁寧に指摘していただき、ありがとうございます。",
            "vi": "Cảm ơn bạn đã chỉ ra điều đó một cách lịch sự."
          }
        },
        {
          "role": "user",
          "text": "Sure, thank you for understanding.",
          "translations": {
            "ko": "네, 이해해주셔서 감사합니다.",
            "zh": "好的，谢谢您的理解。",
            "ja": "はい、理解していただきありがとうございます。",
            "vi": "Đúng, cảm ơn bạn đã hiểu."
          }
        },
        {
          "role": "ai",
          "text": "Here is the corrected check with the proper amount.",
          "translations": {
            "ko": "올바른 금액이 표시된 수정된 청구서입니다.",
            "zh": "这是更正后的账单，金额正确。",
            "ja": "こちらが修正後の正しい金額の請求書です。",
            "vi": "Đây là hóa đơn đã được sửa đúng số tiền."
          }
        },
        {
          "role": "user",
          "text": "Thanks, this looks much better.",
          "translations": {
            "ko": "감사합니다, 이제 훨씬 괜찮아 보입니다.",
            "zh": "谢谢，这看起来好多了。",
            "ja": "ありがとうございます、これで大丈夫そうです。",
            "vi": "Cảm ơn, hóa đơn này trông tốt hơn nhiều."
          }
        },
        {
          "role": "ai",
          "text": "Would you like me to explain the updated charges?",
          "translations": {
            "ko": "수정된 요금에 대해 설명드릴까요?",
            "zh": "您需要我解释一下更新的费用吗？",
            "ja": "更新された料金について説明しますか？",
            "vi": "Bạn có muốn tôi giải thích về các khoản phí đã cập nhật không?"
          }
        },
        {
          "role": "user",
          "text": "No need, I can see it’s fixed.",
          "translations": {
            "ko": "괜찮습니다, 수정된 것을 확인했습니다.",
            "zh": "不用了，我看到已经修正了。",
            "ja": "大丈夫です、修正されたことがわかります。",
            "vi": "Không cần, tôi thấy nó đã được sửa."
          }
        },
        {
          "role": "ai",
          "text": "We’ll also apply a small discount for the inconvenience.",
          "translations": {
            "ko": "불편을 드려 작은 할인을 적용하겠습니다.",
            "zh": "我们还会因为给您带来的不便提供一些折扣。",
            "ja": "ご迷惑をおかけしたため、少し割引を適用させていただきます。",
            "vi": "Chúng tôi cũng sẽ áp dụng một khoản giảm nhỏ cho sự bất tiện này."
          }
        },
        {
          "role": "user",
          "text": "That’s very kind of you.",
          "translations": {
            "ko": "너무 친절하시네요.",
            "zh": "您真是太好了。",
            "ja": "それはとても親切ですね。",
            "vi": "Điều đó rất tốt bụng của bạn."
          }
        },
        {
          "role": "ai",
          "text": "Please let us know if everything now looks correct.",
          "translations": {
            "ko": "이제 모든 것이 정확하게 보이는지 알려주세요.",
            "zh": "请告诉我们现在是否一切都正确了。",
            "ja": "すべてが正しいかどうか、ご確認ください。",
            "vi": "Hãy cho chúng tôi biết nếu mọi thứ giờ đây đã đúng."
          }
        },
        {
          "role": "user",
          "text": "Yes, all set now. Thank you.",
          "translations": {
            "ko": "네, 이제 다 괜찮습니다. 감사합니다.",
            "zh": "是的，现在都解决了。谢谢你。",
            "ja": "はい、これで全て完了しました。ありがとうございます。",
            "vi": "Vâng, mọi thứ đã sẵn sàng. Cảm ơn bạn."
          }
        }
      ]
    },
    {
      "description": {
        "ko": "저녁 식사에 외국 손님을 초대하는 상황",
        "zh": "邀请国际客人来家中共进晚餐",
        "ja": "国際的なゲストをディナーに招待する",
        "vi": "Đón tiếp một khách quốc tế đến ăn tối"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Welcome. Are you hosting a guest tonight?",
          "translations": {
            "ko": "환영합니다. 오늘 손님을 모시고 계신가요?",
            "zh": "欢迎。今晚你有客人吗？",
            "ja": "いらっしゃいませ。今夜はゲストをお招きですか？",
            "vi": "Chào mừng. Bạn có đang đón tiếp một khách tối nay không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I’m meeting a colleague visiting from overseas.",
          "translations": {
            "ko": "네, 해외에서 온 동료와 만나려고 합니다.",
            "zh": "是的，我要和一位从海外来访的同事见面。",
            "ja": "はい、海外から訪れた同僚と会う予定です。",
            "vi": "Vâng, tôi đang gặp một đồng nghiệp đến từ nước ngoài."
          }
        },
        {
          "role": "ai",
          "text": "Would you like us to offer bilingual menus for your guest?",
          "translations": {
            "ko": "손님을 위해 이중 언어 메뉴를 제공해드릴까요?",
            "zh": "您需要我们为您的客人提供双语菜单吗？",
            "ja": "ゲストのためにバイリンガルのメニューを提供しましょうか？",
            "vi": "Bạn có muốn chúng tôi cung cấp thực đơn song ngữ cho khách của bạn không?"
          }
        },
        {
          "role": "user",
          "text": "That would be very helpful, thank you.",
          "translations": {
            "ko": "그러면 많은 도움이 될 것 같습니다, 감사합니다.",
            "zh": "那将非常有帮助，谢谢你。",
            "ja": "それは大変助かります、ありがとうございます。",
            "vi": "Điều đó sẽ rất hữu ích, cảm ơn bạn."
          }
        },
        {
          "role": "ai",
          "text": "Do you have any cultural or dietary preferences we should be aware of?",
          "translations": {
            "ko": "우리가 알아야 할 문화적이나 식사 관련 선호사항이 있나요?",
            "zh": "您有没有我们需要注意的文化或饮食偏好？",
            "ja": "文化的な特性や食事の制限など、私たちが知っておくべきことはありますか？",
            "vi": "Bạn có bất kỳ sở thích văn hóa hay ăn uống nào mà chúng tôi nên biết không?"
          }
        },
        {
          "role": "user",
          "text": "My guest is vegetarian and prefers mild food.",
          "translations": {
            "ko": "제 손님은 채식주의자이며, 약한 맛의 음식을 선호합니다.",
            "zh": "我的客人是素食者，喜欢口味较淡的食物。",
            "ja": "私のゲストはベジタリアンで、辛くない食事を好みます。",
            "vi": "Khách của tôi là người ăn chay và thích món ăn nhẹ."
          }
        },
        {
          "role": "ai",
          "text": "We can recommend dishes that are mild or less spicy if needed.",
          "translations": {
            "ko": "필요하다면, 약하거나 덜 매운 음식을 추천해드릴 수 있습니다.",
            "zh": "如果需要，我们可以推荐口味较淡或较不辣的菜肴。",
            "ja": "必要であれば、辛くないまたは少し辛い料理をおすすめできます。",
            "vi": "Chúng tôi có thể giới thiệu những món ăn nhẹ hoặc ít cay nếu cần."
          }
        },
        {
          "role": "user",
          "text": "Yes, something light would be ideal.",
          "translations": {
            "ko": "네, 가벼운 음식이 좋겠습니다.",
            "zh": "是的，清淡的食物最理想。",
            "ja": "はい、軽いものが理想的です。",
            "vi": "Đúng, một món nhẹ sẽ là lựa chọn lý tưởng."
          }
        },
        {
          "role": "ai",
          "text": "Would you like help in describing any of the menu items?",
          "translations": {
            "ko": "메뉴 항목에 대한 설명을 도와드릴까요?",
            "zh": "您需要我们帮助解释菜单上的任何菜品吗？",
            "ja": "メニューの項目の説明に助けが必要ですか？",
            "vi": "Bạn có muốn chúng tôi giúp mô tả bất kỳ món nào trong thực đơn không?"
          }
        },
        {
          "role": "user",
          "text": "That’d be helpful—thanks.",
          "translations": {
            "ko": "그게 도움이 될 것 같네요—감사합니다.",
            "zh": "那会很有帮助，谢谢。",
            "ja": "それは助かります、ありがとう。",
            "vi": "Điều đó sẽ rất hữu ích - cảm ơn."
          }
        },
        {
          "role": "ai",
          "text": "We’ll pace the courses so that your conversation can flow naturally.",
          "translations": {
            "ko": "당신의 대화가 자연스럽게 흐를 수 있도록 코스를 조절하겠습니다.",
            "zh": "我们会控制菜品上菜的节奏，以便您的对话可以自然地进行。",
            "ja": "皆さんの会話が自然に流れるように、コースの提供を調整します。",
            "vi": "Chúng tôi sẽ phân chia các món ăn sao cho cuộc trò chuyện của bạn có thể diễn ra một cách tự nhiên."
          }
        },
        {
          "role": "user",
          "text": "That sounds great. Appreciate the thought.",
          "translations": {
            "ko": "좋은 생각입니다. 감사합니다.",
            "zh": "听起来很好。感谢您的考虑。",
            "ja": "それは素晴らしいですね。気遣いに感謝します。",
            "vi": "Điều đó nghe thật tuyệt. Cảm ơn đã nghĩ đến."
          }
        },
        {
          "role": "ai",
          "text": "Would you like us to serve the guest first, as per custom?",
          "translations": {
            "ko": "관례에 따라 손님에게 먼저 음식을 제공해 드릴까요?",
            "zh": "您希望我们按照习俗先为客人上菜吗？",
            "ja": "習慣に従って、まずゲストに提供するべきですか？",
            "vi": "Bạn có muốn chúng tôi phục vụ khách trước, theo phong tục không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, please serve my guest first.",
          "translations": {
            "ko": "네, 제 손님에게 먼저 음식을 제공해 주세요.",
            "zh": "是的，请先为我的客人上菜。",
            "ja": "はい、まずゲストに提供してください。",
            "vi": "Vâng, xin hãy phục vụ khách của tôi trước."
          }
        },
        {
          "role": "ai",
          "text": "Would a small cultural welcome appetizer be appreciated?",
          "translations": {
            "ko": "문화적인 환영 음식을 제공하는 것이 좋을까요?",
            "zh": "您会欣赏一道小小的文化欢迎开胃菜吗？",
            "ja": "小さな文化的なウェルカムアペタイザーはいかがでしょうか？",
            "vi": "Bạn có thích một món khai vị chào mừng mang phong cách văn hóa nhỏ không?"
          }
        },
        {
          "role": "user",
          "text": "That would be a nice gesture. Go ahead.",
          "translations": {
            "ko": "그것이 좋은 제스처가 될 것 같습니다. 진행해 주세요.",
            "zh": "这将是一个很好的举动。请继续。",
            "ja": "それは素敵なジェスチャーです。どうぞ進めてください。",
            "vi": "Đó sẽ là một cử chỉ tốt. Hãy tiếp tục."
          }
        },
        {
          "role": "ai",
          "text": "We’ll ensure the experience feels personalized and respectful.",
          "translations": {
            "ko": "경험이 개인화되고 존중받는 것처럼 느껴지도록 하겠습니다.",
            "zh": "我们会确保这次体验感觉个性化且尊重。",
            "ja": "体験がパーソナライズされ、敬意を持って感じられるようにします。",
            "vi": "Chúng tôi sẽ đảm bảo trải nghiệm cảm thấy cá nhân hóa và tôn trọng."
          }
        },
        {
          "role": "user",
          "text": "Thanks for making the effort.",
          "translations": {
            "ko": "노력해 주셔서 감사합니다.",
            "zh": "感谢您的努力。",
            "ja": "努力してくれてありがとう。",
            "vi": "Cảm ơn đã nỗ lực."
          }
        },
        {
          "role": "ai",
          "text": "Please don’t hesitate to request anything to make your guest feel welcome.",
          "translations": {
            "ko": "손님을 환영받는 데 필요한 것이 있다면 언제든지 요청해 주세요.",
            "zh": "请随时提出任何可以让您的客人感到欢迎的要求。",
            "ja": "ゲストが歓迎されていると感じるように、何でもリクエストしてください。",
            "vi": "Xin đừng ngần ngại yêu cầu bất cứ thứ gì để khách của bạn cảm thấy được chào đón."
          }
        },
        {
          "role": "user",
          "text": "Much appreciated. You’ve been excellent.",
          "translations": {
            "ko": "많이 감사합니다. 여러분들이 훌륭하셨습니다.",
            "zh": "非常感谢。您做得非常好。",
            "ja": "大変感謝しています。あなたは素晴らしいです。",
            "vi": "Rất cảm kích. Bạn đã làm rất tốt."
          }
        }
      ]
    },
    {
      "description": {
        "ko": "이벤트를 위한 맞춤형 시음 메뉴 요청",
        "zh": "为活动要求定制品尝菜单",
        "ja": "イベント用のカスタムテイスティングメニューのリクエスト",
        "vi": "Yêu cầu một thực đơn thử nếm tùy chỉnh cho một sự kiện"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "We’d be delighted to arrange a custom-tasting menu for your event.",
          "translations": {
            "ko": "이벤트를 위한 맞춤형 시음 메뉴를 준비하는 것을 기쁘게 생각합니다.",
            "zh": "我们很乐意为您的活动安排定制品尝菜单。",
            "ja": "イベント用のカスタムテイスティングメニューを準備することを喜びに思います。",
            "vi": "Chúng tôi sẽ rất vui lòng sắp xếp một thực đơn thử nếm tùy chỉnh cho sự kiện của bạn."
          }
        },
        {
          "role": "user",
          "text": "We’re planning a small dinner event for six guests.",
          "translations": {
            "ko": "6명의 손님을 위한 작은 저녁 행사를 계획하고 있습니다.",
            "zh": "我们正在为六位客人筹划一个小型晚宴活动。",
            "ja": "6人のゲストのための小さなディナーイベントを計画しています。",
            "vi": "Chúng tôi đang lên kế hoạch một bữa tiệc tối nhỏ cho sáu khách."
          }
        },
        {
          "role": "ai",
          "text": "Do you have a theme or particular ingredients in mind?",
          "translations": {
            "ko": "테마나 특정 재료가 있나요?",
            "zh": "您有主题或特定的食材要求吗？",
            "ja": "テーマや特定の食材はありますか？",
            "vi": "Bạn có chủ đề hoặc nguyên liệu cụ thể nào trong tâm trí không?"
          }
        },
        {
          "role": "user",
          "text": "Seasonal ingredients and a clean, elegant style would be great.",
          "translations": {
            "ko": "계절 재료와 깔끔하고 우아한 스타일이 좋을 것 같습니다.",
            "zh": "季节性食材和清新、优雅的风格都非常好。",
            "ja": "季節の食材と、クリーンでエレガントなスタイルが良いです。",
            "vi": "Nguyên liệu theo mùa và phong cách thanh lịch, sạch sẽ sẽ rất tuyệt."
          }
        },
        {
          "role": "ai",
          "text": "How many courses would you like us to include?",
          "translations": {
            "ko": "몇 개의 코스를 포함시키길 원하시나요?",
            "zh": "您希望我们包括多少道菜？",
            "ja": "何コースを含めるべきですか？",
            "vi": "Bạn muốn chúng tôi bao gồm bao nhiêu món trong thực đơn?"
          }
        },
        {
          "role": "user",
          "text": "Let’s go with five courses, if that works.",
          "translations": {
            "ko": "가능하다면 5개 코스로 해주세요.",
            "zh": "如果可以的话，我们选择五道菜。",
            "ja": "それが可能であれば、5コースにしましょう。",
            "vi": "Hãy chọn năm món, nếu được."
          }
        },
        {
          "role": "ai",
          "text": "Would you like wine or beverage pairings with each course?",
          "translations": {
            "ko": "각 코스에 와인이나 음료를 함께 제공하길 원하시나요?",
            "zh": "您希望每道菜都配有酒或饮料吗？",
            "ja": "各コースにワインや飲み物のペアリングが必要ですか？",
            "vi": "Bạn có muốn chúng tôi phối hợp rượu vang hoặc đồ uống với mỗi món không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, pairings for each course would be ideal.",
          "translations": {
            "ko": "네, 각 코스에 맞는 음료가 좋겠습니다.",
            "zh": "是的，每道菜都配有酒或饮料会很理想。",
            "ja": "はい、各コースにペアリングが理想的です。",
            "vi": "Vâng, việc phối hợp cho mỗi món sẽ là lựa chọn lý tưởng."
          }
        },
        {
          "role": "ai",
          "text": "We can accommodate gluten-free, vegan, or other restrictions.",
          "translations": {
            "ko": "글루텐-프리, 비건, 또는 다른 제한사항을 수용할 수 있습니다.",
            "zh": "我们可以提供无麸质、纯素或其他限制的食物。",
            "ja": "グルテンフリー、ビーガン、または他の制限を受け入れることができます。",
            "vi": "Chúng tôi có thể phục vụ những người ăn kiêng không gluten, thuần chay, hoặc các hạn chế khác."
          }
        },
        {
          "role": "user",
          "text": "One guest is gluten-free, and one doesn’t eat seafood.",
          "translations": {
            "ko": "한 명의 손님은 글루텐-프리이고, 한 명은 해산물을 먹지 않습니다.",
            "zh": "有一位客人需要无麸质食物，还有一位不吃海鲜。",
            "ja": "一人のゲストはグルテンフリーで、一人は海鮮を食べません。",
            "vi": "Một khách không ăn gluten, và một người không ăn hải sản."
          }
        },
        {
          "role": "ai",
          "text": "Would you like us to print personalized menus for the occasion?",
          "translations": {
            "ko": "행사를 위해 개인화된 메뉴를 인쇄해 드릴까요?",
            "zh": "您希望我们为这个场合打印个性化的菜单吗？",
            "ja": "その場のためにパーソナライズされたメニューを印刷するべきですか？",
            "vi": "Bạn có muốn chúng tôi in thực đơn cá nhân hóa cho dịp này không?"
          }
        },
        {
          "role": "user",
          "text": "That’d be a lovely touch.",
          "translations": {
            "ko": "그것이 좋은 접촉이 될 것 같습니다.",
            "zh": "那会是一个很好的点缀。",
            "ja": "それは素敵なタッチになるでしょう。",
            "vi": "Điều đó sẽ là một điểm nhấn thú vị."
          }
        },
        {
          "role": "ai",
          "text": "Do you have a preferred style—modern, traditional, or fusion?",
          "translations": {
            "ko": "선호하는 스타일이 있나요—현대적인, 전통적인, 또는 퓨전?",
            "zh": "您有喜欢的风格吗——现代、传统还是融合？",
            "ja": "モダン、伝統的、またはフュージョンのスタイルが好ましいですか？",
            "vi": "Bạn có phong cách ưa thích không - hiện đại, truyền thống, hay hòa quyện?"
          }
        },
        {
          "role": "user",
          "text": "Something modern with subtle Korean influences.",
          "translations": {
            "ko": "세밀한 한국적 영향을 미치는 현대적인 것이 좋을 것 같습니다.",
            "zh": "希望是现代风格，但带有微妙的韩国元素。",
            "ja": "モダンで、控えめな韓国の影響があるものが良いです。",
            "vi": "Một cái gì đó hiện đại với những ảnh hưởng Hàn Quốc tinh tế."
          }
        },
        {
          "role": "ai",
          "text": "We’ll have the chef design options for your approval.",
          "translations": {
            "ko": "저희가 셰프에게 여러 옵션을 제안하게 해서 귀하의 승인을 받겠습니다.",
            "zh": "我们会让厨师设计几个方案供您选择。",
            "ja": "シェフにいくつかの選択肢をデザインしていただき、それを承認していただきます。",
            "vi": "Chúng tôi sẽ nhờ đầu bếp thiết kế các lựa chọn để bạn phê duyệt."
          }
        },
        {
          "role": "user",
          "text": "Perfect. I look forward to seeing the options.",
          "translations": {
            "ko": "좋습니다. 옵션을 기대하겠습니다.",
            "zh": "太好了。我期待看到这些方案。",
            "ja": "完璧です。選択肢を楽しみにしています。",
            "vi": "Hoàn hảo. Tôi mong chờ xem các lựa chọn."
          }
        },
        {
          "role": "ai",
          "text": "Would you like a short intro from the chef at the table?",
          "translations": {
            "ko": "셰프가 테이블에서 간단한 소개를 하시길 원하십니까?",
            "zh": "您希望厨师在餐桌上做一个简短的介绍吗？",
            "ja": "シェフからテーブルで短い紹介を受けたいですか？",
            "vi": "Bạn có muốn đầu bếp giới thiệu ngắn gọn tại bàn không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, the chef’s presence would be a highlight.",
          "translations": {
            "ko": "네, 셰프의 참석은 하이라이트가 될 것입니다.",
            "zh": "是的，厨师的出现将是一大亮点。",
            "ja": "はい、シェフの存在はハイライトになるでしょう。",
            "vi": "Có, sự hiện diện của đầu bếp sẽ là điểm nhấn."
          }
        },
        {
          "role": "ai",
          "text": "We’ll follow up tomorrow with a proposed menu and pricing.",
          "translations": {
            "ko": "내일 메뉴와 가격 제안을 드리도록 하겠습니다.",
            "zh": "我们将在明天提供一份预计的菜单和价格。",
            "ja": "明日、提案メニューと価格をお送りします。",
            "vi": "Chúng tôi sẽ liên lạc lại vào ngày mai với thực đơn và bảng giá đề xuất."
          }
        },
        {
          "role": "user",
          "text": "Thanks. I’ll review it once it’s ready.",
          "translations": {
            "ko": "감사합니다. 준비되면 검토하겠습니다.",
            "zh": "谢谢。一旦准备好，我会进行审查。",
            "ja": "ありがとう。準備ができ次第、確認します。",
            "vi": "Cảm ơn. Tôi sẽ xem xét khi nó sẵn sàng."
          }
        }
      ]
    },
    {
      "description": {
        "ko": "고급 식사 후에 자세한 피드백을 제공하기",
        "zh": "在享用精致晚餐后提供详细的反馈",
        "ja": "ファインダイニングの後の詳細なフィードバックを提供する",
        "vi": "Đưa ra phản hồi chi tiết sau bữa ăn tại nhà hàng cao cấp"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "We’d love to hear your thoughts on the meal.",
          "translations": {
            "ko": "식사에 대한 귀하의 생각을 듣고 싶습니다.",
            "zh": "我们很想听听您对这顿饭的看法。",
            "ja": "食事についてのご意見をお聞かせください。",
            "vi": "Chúng tôi rất muốn nghe ý kiến của bạn về bữa ăn."
          }
        },
        {
          "role": "user",
          "text": "The meal was fantastic, truly.",
          "translations": {
            "ko": "식사는 정말 환상적이었습니다.",
            "zh": "这顿饭真的很棒。",
            "ja": "食事は本当に素晴らしかったです。",
            "vi": "Bữa ăn thật tuyệt vời."
          }
        },
        {
          "role": "ai",
          "text": "Was the pacing of the courses to your satisfaction?",
          "translations": {
            "ko": "코스의 템포가 만족스러웠습니까?",
            "zh": "您对菜品上桌的节奏满意吗？",
            "ja": "コースの進行はご満足いただけましたか？",
            "vi": "Tốc độ phục vụ các món ăn có đáp ứng yêu cầu của bạn không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, the pacing was very well handled.",
          "translations": {
            "ko": "네, 템포가 매우 잘 조절되었습니다.",
            "zh": "是的，节奏掌握得非常好。",
            "ja": "はい、進行は非常によく管理されていました。",
            "vi": "Có, tốc độ phục vụ rất tốt."
          }
        },
        {
          "role": "ai",
          "text": "Did any particular dish stand out to you?",
          "translations": {
            "ko": "특별히 눈에 띄는 요리가 있었습니까?",
            "zh": "有没有哪道菜特别吸引您？",
            "ja": "特に印象に残った料理はありますか？",
            "vi": "Có món nào đặc biệt nổi bật với bạn không?"
          }
        },
        {
          "role": "user",
          "text": "The scallop appetizer was incredible.",
          "translations": {
            "ko": "가리비 애피타이저가 놀랍습니다.",
            "zh": "扇贝开胃菜真的很棒。",
            "ja": "ホタテの前菜は素晴らしかったです。",
            "vi": "Món khai vị sò điệp thật tuyệt vời."
          }
        },
        {
          "role": "ai",
          "text": "Was the wine pairing balanced throughout?",
          "translations": {
            "ko": "와인 페어링이 균형잡혀 있었습니까?",
            "zh": "整个过程中的酒配餐是否平衡？",
            "ja": "ワインのペアリングは全体的にバランスが取れていましたか？",
            "vi": "Việc kết hợp rượu với món ăn có cân đối không?"
          }
        },
        {
          "role": "user",
          "text": "The pairing was thoughtful and complemented the flavors.",
          "translations": {
            "ko": "페어링은 세심하게 고려되었고, 맛을 보완했습니다.",
            "zh": "配餐非常用心，衬托出了食物的味道。",
            "ja": "ペアリングは考えられており、フレーバーを引き立てていました。",
            "vi": "Việc kết hợp đã được suy nghĩ kỹ và phù hợp với hương vị."
          }
        },
        {
          "role": "ai",
          "text": "We’re especially proud of the dessert course—what did you think?",
          "translations": {
            "ko": "특히 디저트 코스에 자부심을 가지고 있습니다—어떻게 생각하셨습니까?",
            "zh": "我们特别为甜品课程感到骄傲——您觉得怎么样？",
            "ja": "特にデザートコースを自慢していますが、いかがでしたか？",
            "vi": "Chúng tôi đặc biệt tự hào về món tráng miệng - bạn nghĩ gì về nó?"
          }
        },
        {
          "role": "user",
          "text": "It was delightful—especially the caramel notes.",
          "translations": {
            "ko": "매우 매력적이었습니다—특히 카라멜 노트.",
            "zh": "非常好——尤其是那个焦糖味。",
            "ja": "素晴らしかったです、特にキャラメルの風味が。",
            "vi": "Nó thật tuyệt vời - đặc biệt là hương caramel."
          }
        },
        {
          "role": "ai",
          "text": "Is there anything we could improve for next time?",
          "translations": {
            "ko": "다음에 개선할 수 있는 부분이 있습니까?",
            "zh": "下次我们有什么可以改进的地方吗？",
            "ja": "次回に向けて改善できる点は何かありますか？",
            "vi": "Có điều gì chúng tôi có thể cải thiện cho lần sau không?"
          }
        },
        {
          "role": "user",
          "text": "Maybe just slightly more seasoning in the main course.",
          "translations": {
            "ko": "메인 코스에 약간 더 많은 양념을 넣는 것이 좋을 것 같습니다.",
            "zh": "主菜的调味可能稍微多一点。",
            "ja": "メインコースの調味料をもう少し多めにしてもいいかもしれません。",
            "vi": "Có thể chỉ cần gia vị thêm một chút trong món chính."
          }
        },
        {
          "role": "ai",
          "text": "Would you be willing to leave a short review online?",
          "translations": {
            "ko": "온라인에 간단한 리뷰를 남기실 의향이 있으십니까?",
            "zh": "您愿意在网上留下一份简短的评论吗？",
            "ja": "オンラインで短いレビューを残していただけますか？",
            "vi": "Bạn có sẵn lòng để lại đánh giá ngắn trên mạng không?"
          }
        },
        {
          "role": "user",
          "text": "I’d be happy to. Where should I post it?",
          "translations": {
            "ko": "기꺼이 하겠습니다. 어디에 게시하면 됩니까?",
            "zh": "我很乐意。我应该在哪里发表呢？",
            "ja": "喜んで。どこに投稿すればよいですか？",
            "vi": "Tôi rất vui lòng. Tôi nên đăng ở đâu?"
          }
        },
        {
          "role": "ai",
          "text": "Your feedback helps us improve future experiences.",
          "translations": {
            "ko": "귀하의 피드백은 저희가 미래의 경험을 개선하는 데 도움이 됩니다.",
            "zh": "您的反馈有助于我们改进未来的体验。",
            "ja": "お客様のフィードバックは、私たちの将来の体験を改善するのに役立ちます。",
            "vi": "Phản hồi của bạn giúp chúng tôi cải thiện trải nghiệm trong tương lai."
          }
        },
        {
          "role": "user",
          "text": "Glad to contribute. We had a wonderful time.",
          "translations": {
            "ko": "기여할 수 있어 기쁩니다. 우리는 정말로 즐거운 시간을 보냈습니다.",
            "zh": "很高兴能做出贡献。我们玩得很开心。",
            "ja": "貢献できてうれしいです。素晴らしい時間を過ごしました。",
            "vi": "Rất vui được đóng góp. Chúng tôi đã có một thời gian tuyệt vời."
          }
        },
        {
          "role": "ai",
          "text": "Thank you again for dining with us this evening.",
          "translations": {
            "ko": "오늘 저녁 저희와 함께 식사해 주셔서 다시 한번 감사드립니다.",
            "zh": "再次感谢您今晚和我们共进晚餐。",
            "ja": "今晩は当店でお食事いただき、ありがとうございました。",
            "vi": "Cảm ơn bạn một lần nữa đã ăn tối với chúng tôi tối nay."
          }
        },
        {
          "role": "user",
          "text": "Thank you for the attentive service.",
          "translations": {
            "ko": "세심한 서비스에 감사드립니다.",
            "zh": "感谢您的周到服务。",
            "ja": "注意深いサービスをいただき、ありがとうございました。",
            "vi": "Cảm ơn bạn vì dịch vụ chu đáo."
          }
        },
        {
          "role": "ai",
          "text": "We hope to see you again very soon.",
          "translations": {
            "ko": "곧 다시 뵙기를 바랍니다.",
            "zh": "我们希望很快再见到您。",
            "ja": "またすぐにお会いできることを願っています。",
            "vi": "Chúng tôi hy vọng sẽ gặp lại bạn rất sớm."
          }
        },
        {
          "role": "user",
          "text": "Absolutely. I’ll be back again.",
          "translations": {
            "ko": "당연합니다. 다시 올 것입니다.",
            "zh": "当然。我会再来的。",
            "ja": "絶対に。また来ます。",
            "vi": "Chắc chắn. Tôi sẽ quay lại."
          }
        }
      ]
    },
    {
      "description": {
        "ko": "놀랄만한 축하를 위한 준비하기",
        "zh": "为惊喜庆祝活动做安排",
        "ja": "サプライズのお祝いの手配をする",
        "vi": "Sắp xếp cho một bữa tiệc bất ngờ"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "We’d love to help you arrange something special.",
          "translations": {
            "ko": "특별한 것을 준비하는 데 도움을 드리고 싶습니다.",
            "zh": "我们很愿意帮您安排一些特别的事情。",
            "ja": "特別なものを手配するのをお手伝いしたいと思います。",
            "vi": "Chúng tôi rất muốn giúp bạn sắp xếp một điều đặc biệt."
          }
        },
        {
          "role": "user",
          "text": "It’s my partner’s birthday, and I want to surprise them.",
          "translations": {
            "ko": "제 파트너의 생일인데, 그들에게 놀라움을 주고 싶습니다.",
            "zh": "这是我伴侣的生日，我想给他们一个惊喜。",
            "ja": "パートナーの誕生日なので、サプライズをしたいと思っています。",
            "vi": "Đó là sinh nhật của đối tác của tôi, và tôi muốn làm một bất ngờ cho họ."
          }
        },
        {
          "role": "ai",
          "text": "Are you planning a birthday, anniversary, or another occasion?",
          "translations": {
            "ko": "생일, 기념일, 또는 다른 행사를 계획하고 계신가요?",
            "zh": "你是在计划生日、周年纪念还是其他的场合？",
            "ja": "誕生日、記念日、または他の特別な日を計画していますか？",
            "vi": "Bạn đang lên kế hoạch tổ chức sinh nhật, kỷ niệm hay một dịp khác không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, something subtle but elegant.",
          "translations": {
            "ko": "네, 미묘하지만 우아한 것을 생각하고 있어요.",
            "zh": "是的，我想要低调但优雅的。",
            "ja": "はい、控えめだけどエレガントなものを。",
            "vi": "Đúng rồi, một cái gì đó tinh tế nhưng thanh lịch."
          }
        },
        {
          "role": "ai",
          "text": "Would you like decorations or a custom dessert presentation?",
          "translations": {
            "ko": "장식이나 맞춤형 디저트 표현을 원하시나요?",
            "zh": "你想要装饰品或者定制的甜点展示吗？",
            "ja": "デコレーションやカスタムデザートのプレゼンテーションはいかがですか？",
            "vi": "Bạn có muốn trang trí hay một màn trình diễn món tráng miệng đặc biệt không?"
          }
        },
        {
          "role": "user",
          "text": "A small floral arrangement and candle would be lovely.",
          "translations": {
            "ko": "작은 꽃바구니와 촛불이 좋을 것 같아요.",
            "zh": "一小束花和蜡烛会很好。",
            "ja": "小さな花のアレンジメントとキャンドルが素敵ですね。",
            "vi": "Một bố cục hoa nhỏ và nến sẽ rất đẹp."
          }
        },
        {
          "role": "ai",
          "text": "Should we keep it a surprise from the guest until dessert?",
          "translations": {
            "ko": "디저트가 나올 때까지 손님에게 서프라이즈로 유지하시겠어요?",
            "zh": "我们是否要在甜点时才给客人带来惊喜？",
            "ja": "デザートまでゲストにはサプライズにしておきましょうか？",
            "vi": "Chúng tôi có nên giữ nó là một bất ngờ cho khách đến khi ăn tráng miệng không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, please keep it a secret until dessert.",
          "translations": {
            "ko": "네, 디저트가 나올 때까지 비밀로 해주세요.",
            "zh": "是的，请在甜点时才揭示秘密。",
            "ja": "はい、デザートまで秘密にしてください。",
            "vi": "Vâng, xin hãy giữ nó là một bí mật cho đến khi ăn tráng miệng."
          }
        },
        {
          "role": "ai",
          "text": "We can bring out a candle-lit dessert and play soft music.",
          "translations": {
            "ko": "촛불이 켜진 디저트를 내고 부드러운 음악을 틀 수 있어요.",
            "zh": "我们可以在播放轻音乐的同时，端出点燃蜡烛的甜点。",
            "ja": "キャンドルを灯したデザートを出し、ソフトな音楽を流すことができます。",
            "vi": "Chúng tôi có thể mang ra một món tráng miệng với nến và chơi nhạc nhẹ nhàng."
          }
        },
        {
          "role": "user",
          "text": "That’s exactly what I had in mind.",
          "translations": {
            "ko": "그게 바로 제가 생각했던 것이에요.",
            "zh": "这正是我想要的。",
            "ja": "それがまさに私の考えていたことです。",
            "vi": "Đó chính xác là những gì tôi đã nghĩ."
          }
        },
        {
          "role": "ai",
          "text": "Would you like a special message written on the plate?",
          "translations": {
            "ko": "접시에 특별한 메시지를 쓰시겠어요?",
            "zh": "你想在盘子上写一条特别的信息吗？",
            "ja": "プレートに特別なメッセージを書きますか？",
            "vi": "Bạn có muốn một thông điệp đặc biệt được viết lên đĩa không?"
          }
        },
        {
          "role": "user",
          "text": "Let’s write ‘Happy Birthday’ on the plate.",
          "translations": {
            "ko": "접시에 '생일 축하합니다'라고 써주세요.",
            "zh": "让我们在盘子上写上“生日快乐”。",
            "ja": "プレートに「お誕生日おめでとう」を書きましょう。",
            "vi": "Hãy viết 'Chúc mừng sinh nhật' lên đĩa."
          }
        },
        {
          "role": "ai",
          "text": "Should we coordinate with the rest of your party for timing?",
          "translations": {
            "ko": "나머지 파티와 시간을 맞춰야 하나요?",
            "zh": "我们是否需要与你的其他宴会成员协调时间？",
            "ja": "パーティーの他の人々とタイミングを調整しましょうか？",
            "vi": "Chúng tôi có nên phối hợp với phần còn lại của bữa tiệc của bạn về thời gian không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I’ll let the others know the plan.",
          "translations": {
            "ko": "네, 다른 사람들에게 계획을 알려야겠어요.",
            "zh": "是的，我会让其他人知道这个计划。",
            "ja": "はい、他の人に計画を知らせます。",
            "vi": "Vâng, tôi sẽ thông báo cho những người khác về kế hoạch."
          }
        },
        {
          "role": "ai",
          "text": "We can also dim the lights briefly during the surprise.",
          "translations": {
            "ko": "놀라게 하기 위해 잠시 불빛을 어둡게 할 수도 있어요.",
            "zh": "我们也可以在惊喜的时候暂时调暗灯光。",
            "ja": "サプライズの間、一時的に照明を落とすこともできます。",
            "vi": "Chúng tôi cũng có thể tắt đèn một lúc ngắn trong lúc bất ngờ."
          }
        },
        {
          "role": "user",
          "text": "That’s a nice touch. Go ahead.",
          "translations": {
            "ko": "좋은 아이디어네요. 진행해주세요.",
            "zh": "这是个好主意，就这么办。",
            "ja": "それは素敵なアイデアです。やってみてください。",
            "vi": "Đó là một điểm nhấn tốt. Hãy tiếp tục."
          }
        },
        {
          "role": "ai",
          "text": "Let me confirm everything with our kitchen and staff.",
          "translations": {
            "ko": "우리 주방과 직원들과 모든 것을 확인해야겠어요.",
            "zh": "让我确认一下我们的厨房和员工的所有事情。",
            "ja": "私たちのキッチンとスタッフで全てを確認させていただきます。",
            "vi": "Hãy để tôi xác nhận mọi thứ với bếp và nhân viên của chúng tôi."
          }
        },
        {
          "role": "user",
          "text": "Great. I appreciate the coordination.",
          "translations": {
            "ko": "좋아요. 조정해주셔서 감사합니다.",
            "zh": "很好，我很感谢你的协调。",
            "ja": "すばらしい。調整していただき感謝します。",
            "vi": "Tuyệt. Tôi đánh giá cao sự phối hợp."
          }
        },
        {
          "role": "ai",
          "text": "We’ll make sure it’s a memorable evening.",
          "translations": {
            "ko": "잊지 못할 저녁이 될 것을 확실히 해드리겠습니다.",
            "zh": "我们会确保这是一个难忘的夜晚。",
            "ja": "忘れられない夜になるようにします。",
            "vi": "Chúng tôi sẽ đảm bảo đó sẽ là một buổi tối đáng nhớ."
          }
        },
        {
          "role": "user",
          "text": "Thanks so much for making it special.",
          "translations": {
            "ko": "특별하게 만들어주셔서 정말 감사합니다.",
            "zh": "非常感谢你们让这个夜晚变得特别。",
            "ja": "特別な夜にしてくれてありがとうございます。",
            "vi": "Cảm ơn rất nhiều vì đã làm cho nó đặc biệt."
          }
        }
      ]
    },
    {
      "description": {
        "ko": "익숙하지 않은 메뉴에 대한 셰프의 추천을 요청하기",
        "zh": "在不熟悉的菜单上询问厨师的推荐",
        "ja": "馴染みのないメニューでシェフのおすすめを尋ねる",
        "vi": "Yêu cầu đề xuất từ đầu bếp về một thực đơn không quen thuộc"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "I’d be happy to guide you through the menu.",
          "translations": {
            "ko": "메뉴를 안내해드리겠습니다.",
            "zh": "我很乐意帮你介绍菜单。",
            "ja": "メニューのガイドをさせていただきます。",
            "vi": "Tôi sẽ rất vui lòng hướng dẫn bạn qua thực đơn."
          }
        },
        {
          "role": "user",
          "text": "Yes, this is my first time here.",
          "translations": {
            "ko": "네, 여기는 처음이에요.",
            "zh": "是的，这是我第一次来这里。",
            "ja": "はい、ここは初めてです。",
            "vi": "Vâng, đây là lần đầu tiên tôi đến đây."
          }
        },
        {
          "role": "ai",
          "text": "Are you in the mood for something light or hearty?",
          "translations": {
            "ko": "가벼운 것을 원하시나요, 아니면 든든한 것을 원하시나요?",
            "zh": "你今晚想吃点轻食还是热量较高的食物？",
            "ja": "軽いものとヘビーなもの、どちらがお好みですか？",
            "vi": "Bạn có muốn ăn một cái gì đó nhẹ nhàng hay đầy đặn không?"
          }
        },
        {
          "role": "user",
          "text": "Something hearty, but not too heavy.",
          "translations": {
            "ko": "든든한 것을 원하지만, 너무 무겁지 않은 것을 원해요.",
            "zh": "我想要热量较高的食物，但不要太沉重。",
            "ja": "ヘビーなものがいいですが、あまり重すぎないものを。",
            "vi": "Một cái gì đó đầy đặn, nhưng không quá nặng."
          }
        },
        {
          "role": "ai",
          "text": "Would you prefer meat, seafood, or vegetarian tonight?",
          "translations": {
            "ko": "오늘은 고기, 해산물, 아니면 채식을 선호하시나요?",
            "zh": "你今晚更喜欢肉类、海鲜还是素食？",
            "ja": "今夜は肉、魚、またはベジタリアンがいいですか？",
            "vi": "Bạn có muốn ăn thịt, hải sản, hay chay tối nay không?"
          }
        },
        {
          "role": "user",
          "text": "Let’s go with seafood tonight.",
          "translations": {
            "ko": "오늘은 해산물로 해주세요.",
            "zh": "我们今晚就选海鲜吧。",
            "ja": "今夜は魚を選びましょう。",
            "vi": "Hãy chọn hải sản tối nay."
          }
        },
        {
          "role": "ai",
          "text": "Our signature dish tonight is the miso-marinated black cod.",
          "translations": {
            "ko": "오늘의 시그니처 요리는 미소에 절인 검은 대구입니다.",
            "zh": "我们今晚的招牌菜是味噌腌黑鳕鱼。",
            "ja": "今夜のシグネチャーディッシュは味噌漬けの黒鱈です。",
            "vi": "Món đặc biệt của chúng tôi tối nay là cá tuyết sốt miso."
          }
        },
        {
          "role": "user",
          "text": "That sounds delicious. I’ll take that.",
          "translations": {
            "ko": "맛있겠네요. 그것으로 할게요.",
            "zh": "听起来很美味，我要这个。",
            "ja": "それは美味しそうですね。それにします。",
            "vi": "Nghe ngon quá. Tôi sẽ chọn món đó."
          }
        },
        {
          "role": "ai",
          "text": "The duck confit is also excellent if you enjoy rich flavors.",
          "translations": {
            "ko": "오리 콩피도 맛있으니까, 진한 맛을 좋아하시면 추천해요.",
            "zh": "如果你喜欢浓郁的口味，鸭腿也是很好的选择。",
            "ja": "リッチな味が好きなら、ダックコンフィもおすすめです。",
            "vi": "Món vịt confit cũng rất ngon nếu bạn thích hương vị đậm."
          }
        },
        {
          "role": "user",
          "text": "I’ll try the duck next time.",
          "translations": {
            "ko": "다음에 오리를 시도해볼게요.",
            "zh": "我下次会尝试鸭腿。",
            "ja": "次回はダックを試してみます。",
            "vi": "Tôi sẽ thử món vịt vào lần sau."
          }
        },
        {
          "role": "ai",
          "text": "We also have a tasting menu if you’re feeling adventurous.",
          "translations": {
            "ko": "모험을 좋아하신다면 테이스팅 메뉴도 있습니다.",
            "zh": "如果你想尝试新鲜事物，我们也有品尝菜单。",
            "ja": "冒険心がある方には、テイスティングメニューもあります。",
            "vi": "Chúng tôi cũng có thực đơn thử nếm nếu bạn muốn thử thách."
          }
        },
        {
          "role": "user",
          "text": "Tasting menu sounds exciting. Let’s do it.",
          "translations": {
            "ko": "시음 메뉴가 흥미롭게 들립니다. 해보죠.",
            "zh": "品尝菜单听起来很刺激。我们试试吧。",
            "ja": "テイスティングメニュー、ワクワクしますね。やりましょう。",
            "vi": "Thực đơn thử nếm nghe có vẻ thú vị. Chúng ta hãy thử xem."
          }
        },
        {
          "role": "ai",
          "text": "Would you like to hear the chef’s personal favorite?",
          "translations": {
            "ko": "셰프님의 개인적인 최애 메뉴를 들어보시겠어요?",
            "zh": "你想听听厨师的个人最爱吗？",
            "ja": "シェフのお気に入りを聞きたいですか？",
            "vi": "Bạn có muốn nghe món ưa thích của đầu bếp không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I’d love to know what the chef enjoys.",
          "translations": {
            "ko": "네, 셰프님이 좋아하시는 것을 알고 싶습니다.",
            "zh": "是的，我很想知道厨师喜欢什么。",
            "ja": "はい、シェフが何を好むのか知りたいです。",
            "vi": "Có, tôi rất muốn biết đầu bếp thích món gì."
          }
        },
        {
          "role": "ai",
          "text": "The appetizers are designed for sharing if you’d like to try a few.",
          "translations": {
            "ko": "애피타이저는 몇 가지를 공유하며 즐길 수 있도록 디자인되었습니다.",
            "zh": "如果你想尝试几种，开胃菜是可以分享的。",
            "ja": "アペタイザーはいくつか試したい場合、共有するように設計されています。",
            "vi": "Món khai vị được thiết kế để chia sẻ nếu bạn muốn thử một vài món."
          }
        },
        {
          "role": "user",
          "text": "Good idea. Let’s get two starters to share.",
          "translations": {
            "ko": "좋은 생각이네요. 공유할 수 있는 두 가지 애피타이저를 주문합시다.",
            "zh": "好主意。我们点两份开胃菜分享吧。",
            "ja": "良いアイデアですね。2つのスターターを共有しましょう。",
            "vi": "Ý tưởng hay. Chúng ta hãy gọi hai món khai vị để chia sẻ."
          }
        },
        {
          "role": "ai",
          "text": "Can I suggest a wine to pair with your choice?",
          "translations": {
            "ko": "선택하신 메뉴에 어울리는 와인을 추천해드릴까요?",
            "zh": "我可以建议一款与你的选择搭配的葡萄酒吗？",
            "ja": "お選びの料理に合うワインを提案してもよろしいですか？",
            "vi": "Tôi có thể gợi ý một loại rượu để kết hợp với món bạn chọn không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, please recommend a pairing.",
          "translations": {
            "ko": "네, 맞춤 와인을 추천해주세요.",
            "zh": "是的，请推荐一款搭配。",
            "ja": "はい、ペアリングを推奨してください。",
            "vi": "Có, hãy gợi ý một sự kết hợp."
          }
        },
        {
          "role": "ai",
          "text": "Take your time. I’ll be right over if you have questions.",
          "translations": {
            "ko": "천천히 고르세요. 질문이 있으시면 바로 찾아가겠습니다.",
            "zh": "慢慢来。如果你有问题，我会立刻过来。",
            "ja": "お時間をかけてください。何か質問があればすぐに伺います。",
            "vi": "Hãy dành thời gian. Tôi sẽ đến ngay nếu bạn có câu hỏi."
          }
        },
        {
          "role": "user",
          "text": "Thank you. I appreciate your help.",
          "translations": {
            "ko": "감사합니다. 도움이 많이 되었습니다.",
            "zh": "谢谢你。我很感谢你的帮助。",
            "ja": "ありがとう。あなたの助けに感謝します。",
            "vi": "Cảm ơn. Tôi rất trân trọng sự giúp đỡ của bạn."
          }
        }
      ]
    },
    {
      "description": {
        "ko": "원재료의 출처와 지속 가능성에 대해 문의하기",
        "zh": "询问食材来源和可持续性",
        "ja": "調達と持続可能性について問い合わせる",
        "vi": "Thắc mắc về nguồn gốc và bền vững."
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "That’s a great question. We work with local farms and fisheries.",
          "translations": {
            "ko": "좋은 질문이네요. 우리는 지역 농장과 어업과 협력하고 있습니다.",
            "zh": "这是个好问题。我们与当地农场和渔场合作。",
            "ja": "それは素晴らしい質問です。私たちは地元の農場と漁業と協力しています。",
            "vi": "Đó là một câu hỏi tuyệt vời. Chúng tôi hợp tác với các trang trại và ngư trường địa phương."
          }
        },
        {
          "role": "user",
          "text": "I really appreciate restaurants that prioritize sustainability.",
          "translations": {
            "ko": "지속 가능성을 우선시하는 레스토랑을 정말로 존경합니다.",
            "zh": "我非常欣赏优先考虑可持续性的餐厅。",
            "ja": "持続可能性を優先するレストランを本当に評価しています。",
            "vi": "Tôi thực sự đánh giá cao những nhà hàng ưu tiên sự bền vững."
          }
        },
        {
          "role": "ai",
          "text": "Our seafood is certified sustainable by international standards.",
          "translations": {
            "ko": "우리의 해산물은 국제 기준에 따라 인증된 지속 가능한 제품입니다.",
            "zh": "我们的海鲜已经通过国际标准的可持续性认证。",
            "ja": "私たちの海産物は国際基準で持続可能性認証を受けています。",
            "vi": "Hải sản của chúng tôi được chứng nhận bền vững theo tiêu chuẩn quốc tế."
          }
        },
        {
          "role": "user",
          "text": "That’s impressive. Which farms do you work with?",
          "translations": {
            "ko": "인상적이네요. 어떤 농장과 협력하고 있나요?",
            "zh": "那真是令人印象深刻。你们和哪些农场合作？",
            "ja": "それは印象的です。どの農場と協力していますか？",
            "vi": "Rất ấn tượng. Bạn hợp tác với những trang trại nào?"
          }
        },
        {
          "role": "ai",
          "text": "We also rotate our menu seasonally to reduce waste and maximize freshness.",
          "translations": {
            "ko": "우리는 또한 계절에 따라 메뉴를 바꿔서 폐기물을 줄이고 신선도를 극대화합니다.",
            "zh": "我们还会根据季节更换菜单，以减少浪费并保证食物新鲜。",
            "ja": "私たちはまた、廃棄物を減らし、新鮮さを最大化するために季節ごとにメニューをローテーションします。",
            "vi": "Chúng tôi cũng thay đổi thực đơn theo mùa để giảm lượng rác và tối đa hóa độ tươi ngon."
          }
        },
        {
          "role": "user",
          "text": "Good to hear. I’m especially interested in your seafood.",
          "translations": {
            "ko": "듣기 좋네요. 특히 해산물에 관심이 많습니다.",
            "zh": "很高兴听到这个。我特别对你们的海鲜感兴趣。",
            "ja": "良いことを聞きました。特にあなたの海産物に興味があります。",
            "vi": "Thật tốt khi nghe điều đó. Tôi đặc biệt quan tâm đến hải sản của bạn."
          }
        },
        {
          "role": "ai",
          "text": "Would you like to know where a specific ingredient comes from?",
          "translations": {
            "ko": "특정 재료의 출처를 알고 싶으신가요?",
            "zh": "你想知道某个特定食材的来源吗？",
            "ja": "特定の成分がどこから来ているか知りたいですか？",
            "vi": "Bạn có muốn biết nguồn gốc của một thành phần cụ thể không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, where do you source your scallops?",
          "translations": {
            "ko": "네, 가리비는 어디서 구입하시나요?",
            "zh": "是的，你们的扇贝是从哪里采购的？",
            "ja": "はい、ホタテはどこから調達していますか？",
            "vi": "Có, bạn lấy sò điệp ở đâu?"
          }
        },
        {
          "role": "ai",
          "text": "All of our meat is free-range and hormone-free.",
          "translations": {
            "ko": "우리의 모든 고기는 자유롭게 키워진 동물로부터 나오며, 호르몬이 첨가되지 않았습니다.",
            "zh": "我们所有的肉都是自由放养的，不含激素。",
            "ja": "私たちの肉はすべて放牧肉で、ホルモンフリーです。",
            "vi": "Tất cả thịt của chúng tôi đều được nuôi dưỡng tự do và không có hormone."
          }
        },
        {
          "role": "user",
          "text": "That’s reassuring to know.",
          "translations": {
            "ko": "그런 것을 알게 되어 안심이 됩니다.",
            "zh": "知道这个很安心。",
            "ja": "安心して知ることができます。",
            "vi": "Biết điều đó thật yên tâm."
          }
        },
        {
          "role": "ai",
          "text": "Our produce is sourced from a network of nearby organic farms.",
          "translations": {
            "ko": "우리의 농산물은 근처의 유기농 농장 네트워크에서 구입합니다.",
            "zh": "我们的蔬菜都是从附近的有机农场采购的。",
            "ja": "私たちの農産物は、近隣の有機農場ネットワークから調達されています。",
            "vi": "Rau củ của chúng tôi được cung cấp từ một mạng lưới các trang trại hữu cơ gần đây."
          }
        },
        {
          "role": "user",
          "text": "Organic produce makes a big difference in taste.",
          "translations": {
            "ko": "유기농 농산물은 맛에 큰 차이를 만듭니다.",
            "zh": "有机蔬菜在口感上确实有很大的差别。",
            "ja": "有機農産物は味に大きな違いをもたらします。",
            "vi": "Rau củ hữu cơ tạo ra sự khác biệt lớn về hương vị."
          }
        },
        {
          "role": "ai",
          "text": "We aim to be fully carbon neutral by next year.",
          "translations": {
            "ko": "우리는 내년까지 완전히 탄소 중립을 달성하려고 합니다.",
            "zh": "我们计划在明年实现完全碳中和。",
            "ja": "私たちは来年までに完全にカーボンニュートラルを目指しています。",
            "vi": "Chúng tôi nhắm đến mục tiêu hoàn toàn không phát thải carbon vào năm tới."
          }
        },
        {
          "role": "user",
          "text": "Carbon neutrality is ambitious. I support that.",
          "translations": {
            "ko": "탄소 중립은 야심찬 목표입니다. 그것을 지지합니다.",
            "zh": "碳中和是个雄心勃勃的目标。我支持这个。",
            "ja": "カーボンニュートラルは野心的です。私はそれを支持します。",
            "vi": "Không phát thải carbon là mục tiêu tham vọng. Tôi ủng hộ điều đó."
          }
        },
        {
          "role": "ai",
          "text": "We also donate surplus food to local charities each week.",
          "translations": {
            "ko": "우리는 매주 남는 음식을 지역 자선단체에 기부합니다.",
            "zh": "我们每周也会将剩余的食物捐给当地的慈善机构。",
            "ja": "私たちはまた、毎週余剰食品を地元の慈善団体に寄付しています。",
            "vi": "Chúng tôi cũng tặng thực phẩm dư thừa cho các tổ chức từ thiện địa phương hàng tuần."
          }
        },
        {
          "role": "user",
          "text": "That’s great community involvement.",
          "translations": {
            "ko": "그것은 훌륭한 지역사회 참여입니다.",
            "zh": "这是很好的社区参与。",
            "ja": "それは素晴らしい地域貢献です。",
            "vi": "Đó là sự tham gia vào cộng đồng tuyệt vời."
          }
        },
        {
          "role": "ai",
          "text": "Let me know if you’d like to speak with the chef about sourcing directly.",
          "translations": {
            "ko": "셰프와 직접 원재료 출처에 대해 이야기하고 싶으시면 알려주세요.",
            "zh": "如果你想直接和厨师讨论采购问题，请告诉我。",
            "ja": "シェフと直接調達について話すことがあればお知らせください。",
            "vi": "Hãy cho tôi biết nếu bạn muốn trò chuyện trực tiếp với đầu bếp về việc cung cấp nguyên liệu."
          }
        },
        {
          "role": "user",
          "text": "Yes, I’d love to chat with the chef if possible.",
          "translations": {
            "ko": "네, 가능하다면 셰프님과 이야기하고 싶습니다.",
            "zh": "是的，如果可能的话，我很想和厨师聊聊。",
            "ja": "はい、可能であればシェフと話すのが好きです。",
            "vi": "Có, tôi rất muốn trò chuyện với đầu bếp nếu có thể."
          }
        },
        {
          "role": "ai",
          "text": "We love sharing our sustainability practices with our guests.",
          "translations": {
            "ko": "우리는 우리의 지속 가능한 실천을 손님들과 공유하는 것을 좋아합니다.",
            "zh": "我们很愿意与客人分享我们的可持续性实践。",
            "ja": "私たちはゲストと持続可能性の実践を共有するのが大好きです。",
            "vi": "Chúng tôi yêu thích việc chia sẻ các phương pháp bền vững của mình với khách hàng."
          }
        },
        {
          "role": "user",
          "text": "Thanks for being so transparent about everything.",
          "translations": {
            "ko": "모든 것에 대해 투명하게 공유해주셔서 감사합니다.",
            "zh": "谢谢你们对所有事情的透明度。",
            "ja": "すべてについて透明であることに感謝します。",
            "vi": "Cảm ơn bạn đã rất minh bạch về mọi thứ."
          }
        }
      ]
    }
  ]
};