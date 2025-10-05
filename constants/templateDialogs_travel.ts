import { LevelType, PracticeScene } from '../types';

export const templateDialogs: Record<LevelType, readonly PracticeScene[]> = {
  "beginner": [
    {
      "description": {
        "en": "Asking for directions at the airport",
        "ko": "공항에서 길을 묻기",
        "zh": "在机场问路",
        "ja": "空港での道順の尋ね方",
        "vi": "Hỏi đường tại sân bay"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Excuse me, do you know where Gate 15 is?",
          "translations": {
            "ko": "실례합니다, 15번 게이트가 어디인지 아세요?",
            "zh": "打扰一下，你知道15号登机口在哪里吗？",
            "ja": "すみません、15番ゲートはどこですか？",
            "vi": "Xin lỗi, bạn có biết Cổng 15 ở đâu không?",
            "en": "Excuse me, do you know where Gate 15 is?"
          }
        },
        {
          "role": "user",
          "text": "Sure, go straight and turn right after the coffee shop.",
          "translations": {
            "ko": "네, 직진하다가 커피숍 지나서 오른쪽으로 가세요.",
            "zh": "当然，直走然后在咖啡店后面右转。",
            "ja": "はい、まっすぐ進んでコーヒーショップの後で右に曲がってください。",
            "vi": "Chắc chắn, đi thẳng và rẽ phải sau quán cà phê.",
            "en": "Sure, go straight and turn right after the coffee shop."
          }
        },
        {
          "role": "ai",
          "text": "Thanks! How long does it take to walk there?",
          "translations": {
            "ko": "감사합니다! 걸어서 얼마나 걸리나요?",
            "zh": "谢谢！走到那里需要多久？",
            "ja": "ありがとう！そこまで歩いてどのくらいかかりますか？",
            "vi": "Cảm ơn! Mất bao lâu để đi bộ đến đó?",
            "en": "Thanks! How long does it take to walk there?"
          }
        },
        {
          "role": "user",
          "text": "About five minutes.",
          "translations": {
            "ko": "대략 5분 정도입니다.",
            "zh": "大约五分钟。",
            "ja": "約5分です。",
            "vi": "Khoảng năm phút.",
            "en": "About five minutes."
          }
        },
        {
          "role": "ai",
          "text": "Is there a restroom on the way?",
          "translations": {
            "ko": "가는 길에 화장실이 있나요?",
            "zh": "在路上有洗手间吗？",
            "ja": "その途中にトイレはありますか？",
            "vi": "Có nhà vệ sinh nào trên đường không?",
            "en": "Is there a restroom on the way?"
          }
        },
        {
          "role": "user",
          "text": "Yes, just past the book store.",
          "translations": {
            "ko": "네, 서점 지나서 있습니다.",
            "zh": "有的，就在书店过去一点。",
            "ja": "はい、本屋のすぐ後ろにあります。",
            "vi": "Có, ngay sau cửa hàng sách.",
            "en": "Yes, just past the book store."
          }
        },
        {
          "role": "ai",
          "text": "Great. And can I fill my water bottle somewhere?",
          "translations": {
            "ko": "좋아요. 물병을 채울 수 있는 곳이 있나요?",
            "zh": "太好了。我可以在哪里装水？",
            "ja": "それは良いですね。どこかで水筒に水を補給できますか？",
            "vi": "Tốt. Và tôi có thể đổ nước vào bình nước ở đâu không?",
            "en": "Great. And can I fill my water bottle somewhere?"
          }
        },
        {
          "role": "user",
          "text": "There's a refill station near Gate 14.",
          "translations": {
            "ko": "14번 게이트 근처에 리필 스테이션이 있습니다.",
            "zh": "14号登机口附近有一个补水站。",
            "ja": "14番ゲート近くに補給ステーションがあります。",
            "vi": "Có một trạm đổ nước gần Cổng 14.",
            "en": "There's a refill station near Gate 14."
          }
        },
        {
          "role": "ai",
          "text": "Perfect. I have some time before boarding.",
          "translations": {
            "ko": "완벽해요. 탑승 전에 시간이 좀 있네요.",
            "zh": "完美。我登机前还有一些时间。",
            "ja": "完璧です。搭乗までに時間があります。",
            "vi": "Hoàn hảo. Tôi có một chút thời gian trước khi lên máy bay.",
            "en": "Perfect. I have some time before boarding."
          }
        },
        {
          "role": "user",
          "text": "Boarding usually starts 30 minutes before departure.",
          "translations": {
            "ko": "일반적으로 출발 30분 전에 탑승을 시작합니다.",
            "zh": "登机通常在起飞前30分钟开始。",
            "ja": "搭乗は出発の30分前から始まります。",
            "vi": "Thông thường, việc lên máy bay bắt đầu 30 phút trước giờ khởi hành.",
            "en": "Boarding usually starts 30 minutes before departure."
          }
        },
        {
          "role": "ai",
          "text": "Good to know. Do I need to go through another check?",
          "translations": {
            "ko": "알겠습니다. 다른 검사를 받아야 하나요?",
            "zh": "好知道。我需要再次检查吗？",
            "ja": "知っておいてよかったです。もう一度チェックを受ける必要がありますか？",
            "vi": "Thông tin hữu ích. Tôi cần đi qua kiểm tra nữa không?",
            "en": "Good to know. Do I need to go through another check?"
          }
        },
        {
          "role": "user",
          "text": "Not if you're already past security.",
          "translations": {
            "ko": "이미 보안 검사를 마쳤다면 필요 없습니다.",
            "zh": "如果你已经通过了安检，就不需要了。",
            "ja": "もうセキュリティチェックを通過しているなら必要ありません。",
            "vi": "Không, nếu bạn đã qua kiểm tra an ninh.",
            "en": "Not if you're already past security."
          }
        },
        {
          "role": "ai",
          "text": "Thanks. This is my first time at this airport.",
          "translations": {
            "ko": "감사합니다. 이 공항은 처음이에요.",
            "zh": "谢谢。这是我第一次来这个机场。",
            "ja": "ありがとう。この空港は初めてです。",
            "vi": "Cảm ơn. Đây là lần đầu tiên tôi đến sân bay này.",
            "en": "Thanks. This is my first time at this airport."
          }
        },
        {
          "role": "user",
          "text": "No problem! It's easy to get around.",
          "translations": {
            "ko": "문제 없어요! 이곳은 돌아다니기 쉽습니다.",
            "zh": "没问题！这里很容易找到路。",
            "ja": "問題ありません！移動は簡単です。",
            "vi": "Không sao! Việc di chuyển ở đây rất dễ dàng.",
            "en": "No problem! It's easy to get around."
          }
        },
        {
          "role": "ai",
          "text": "Are there any good places to grab a snack?",
          "translations": {
            "ko": "간식을 사먹을 좋은 곳이 있나요?",
            "zh": "有什么好的地方可以吃点心吗？",
            "ja": "何か良いおやつを買える場所はありますか？",
            "vi": "Có nơi nào tốt để ăn một cái gì đó không?",
            "en": "Are there any good places to grab a snack?"
          }
        },
        {
          "role": "user",
          "text": "Try the bakery near Gate 13.",
          "translations": {
            "ko": "13번 게이트 근처에 있는 빵집을 추천합니다.",
            "zh": "试试13号登机口附近的面包店。",
            "ja": "13番ゲート近くのパン屋さんを試してみてください。",
            "vi": "Hãy thử tiệm bánh gần Cổng 13.",
            "en": "Try the bakery near Gate 13."
          }
        },
        {
          "role": "ai",
          "text": "Awesome. Thanks again!",
          "translations": {
            "ko": "좋아요. 다시 한번 감사드려요!",
            "zh": "太棒了。再次感谢！",
            "ja": "素晴らしいです。再度ありがとう！",
            "vi": "Tuyệt vời. Cảm ơn bạn một lần nữa!",
            "en": "Awesome. Thanks again!"
          }
        },
        {
          "role": "user",
          "text": "You're welcome. Safe travels!",
          "translations": {
            "ko": "천만에요. 안전한 여행 되세요!",
            "zh": "不客气。祝你旅途愉快！",
            "ja": "どういたしまして。安全な旅を！",
            "vi": "Rất vui được giúp đỡ. Chúc bạn một chuyến đi an toàn!",
            "en": "You're welcome. Safe travels!"
          }
        },
        {
          "role": "ai",
          "text": "I'll head there now. Have a nice day!",
          "translations": {
            "ko": "지금 가볼게요. 좋은 하루 되세요!",
            "zh": "我现在就去。祝你有个美好的一天！",
            "ja": "そこに向かいます。良い一日を！",
            "vi": "Tôi sẽ đi đến đó ngay bây giờ. Chúc bạn một ngày tốt lành!",
            "en": "I'll head there now. Have a nice day!"
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
        "en": "Checking in at a hotel",
        "ko": "호텔 체크인",
        "zh": "在酒店办理入住",
        "ja": "ホテルでのチェックイン",
        "vi": "Nhận phòng tại khách sạn"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Welcome to City Hotel. Do you have a reservation?",
          "translations": {
            "ko": "City Hotel에 오신 것을 환영합니다. 예약하셨나요?",
            "zh": "欢迎来到城市酒店。你有预订吗？",
            "ja": "シティホテルへようこそ。予約はされていますか？",
            "vi": "Chào mừng đến với City Hotel. Bạn có đặt phòng trước không?",
            "en": "Welcome to City Hotel. Do you have a reservation?"
          }
        },
        {
          "role": "user",
          "text": "Yes, under the name Kim.",
          "translations": {
            "ko": "네, 김씨 이름으로 예약했습니다.",
            "zh": "是的，预订名字是Kim。",
            "ja": "はい、キムという名前で予約しました。",
            "vi": "Có, dưới tên Kim.",
            "en": "Yes, under the name Kim."
          }
        },
        {
          "role": "ai",
          "text": "Let me check... Yes, I see your booking for three nights.",
          "translations": {
            "ko": "확인해보겠습니다... 네, 3박 예약이 확인되었습니다.",
            "zh": "让我查一下... 是的，我看到你预订了三晚。",
            "ja": "確認します...はい、3泊の予約が見つかりました。",
            "vi": "Để tôi kiểm tra... Có, tôi thấy đặt phòng của bạn cho ba đêm.",
            "en": "Let me check... Yes, I see your booking for three nights."
          }
        },
        {
          "role": "user",
          "text": "That's right.",
          "translations": {
            "ko": "맞습니다.",
            "zh": "没错。",
            "ja": "その通りです。",
            "vi": "Đúng vậy.",
            "en": "That's right."
          }
        },
        {
          "role": "ai",
          "text": "May I see your passport, please?",
          "translations": {
            "ko": "여권을 보여주시겠어요?",
            "zh": "请出示你的护照，好吗？",
            "ja": "パスポートを見せていただけますか？",
            "vi": "Tôi có thể xem hộ chiếu của bạn được không?",
            "en": "May I see your passport, please?"
          }
        },
        {
          "role": "user",
          "text": "Here it is.",
          "translations": {
            "ko": "여기 있습니다.",
            "zh": "这是。",
            "ja": "はい、こちらです。",
            "vi": "Đây rồi.",
            "en": "Here it is."
          }
        },
        {
          "role": "ai",
          "text": "Thank you. Would you like a room with a view?",
          "translations": {
            "ko": "감사합니다. 전망 좋은 방을 원하시나요?",
            "zh": "谢谢。你想要一个有景观的房间吗？",
            "ja": "ありがとうございます。眺めの良い部屋がよろしいですか？",
            "vi": "Cảm ơn. Bạn có muốn phòng có tầm nhìn không?",
            "en": "Thank you. Would you like a room with a view?"
          }
        },
        {
          "role": "user",
          "text": "Yes, if it's available.",
          "translations": {
            "ko": "가능하다면 그렇게 해주세요.",
            "zh": "是的，如果有的话。",
            "ja": "はい、利用可能であれば。",
            "vi": "Có, nếu có sẵn.",
            "en": "Yes, if it's available."
          }
        },
        {
          "role": "ai",
          "text": "We have one on the fifth floor. One queen bed, correct?",
          "translations": {
            "ko": "5층에 있습니다. 퀸 사이즈 침대 한 개 맞으시죠?",
            "zh": "我们在五楼有一个。一张大床，对吗？",
            "ja": "5階に一つあります。クイーンベッドでよろしいですか？",
            "vi": "Chúng tôi có một phòng ở tầng năm. Một giường queen, đúng không?",
            "en": "We have one on the fifth floor. One queen bed, correct?"
          }
        },
        {
          "role": "user",
          "text": "Yes, perfect.",
          "translations": {
            "ko": "네, 완벽해요.",
            "zh": "是的，很好。",
            "ja": "はい、それで大丈夫です。",
            "vi": "Có, hoàn hảo.",
            "en": "Yes, perfect."
          }
        },
        {
          "role": "ai",
          "text": "Here's your key card. Breakfast is from 7 to 10 AM.",
          "translations": {
            "ko": "키 카드입니다. 아침식사는 오전 7시부터 10시까지입니다.",
            "zh": "这是你的钥匙卡。早餐时间是早上7点到10点。",
            "ja": "キーカードをどうぞ。朝食は7時から10時までです。",
            "vi": "Đây là thẻ chìa khóa của bạn. Bữa sáng từ 7 đến 10 giờ sáng.",
            "en": "Here's your key card. Breakfast is from 7 to 10 AM."
          }
        },
        {
          "role": "user",
          "text": "Thank you.",
          "translations": {
            "ko": "감사합니다.",
            "zh": "谢谢。",
            "ja": "ありがとうございます。",
            "vi": "Cảm ơn.",
            "en": "Thank you."
          }
        },
        {
          "role": "ai",
          "text": "Wi-Fi details are on the welcome card.",
          "translations": {
            "ko": "Wi-Fi 정보는 환영 카드에 있습니다.",
            "zh": "Wi-Fi的详细信息在欢迎卡上。",
            "ja": "Wi-Fiの詳細はウェルカムカードに記載されています。",
            "vi": "Thông tin Wi-Fi nằm trên thẻ chào mừng.",
            "en": "Wi-Fi details are on the welcome card."
          }
        },
        {
          "role": "user",
          "text": "Got it.",
          "translations": {
            "ko": "알겠습니다.",
            "zh": "明白了。",
            "ja": "了解しました。",
            "vi": "Tôi đã hiểu.",
            "en": "Got it."
          }
        },
        {
          "role": "ai",
          "text": "Do you need help with your luggage?",
          "translations": {
            "ko": "짐 도와드릴까요?",
            "zh": "你需要帮忙搬行李吗？",
            "ja": "荷物のお手伝いは必要ですか？",
            "vi": "Bạn cần giúp với hành lý không?",
            "en": "Do you need help with your luggage?"
          }
        },
        {
          "role": "user",
          "text": "No, I can handle it. Thanks.",
          "translations": {
            "ko": "아니요, 제가 할게요. 감사합니다.",
            "zh": "不用，我自己可以。谢谢。",
            "ja": "いえ、大丈夫です。ありがとう。",
            "vi": "Không, tôi có thể tự xử lý. Cảm ơn.",
            "en": "No, I can handle it. Thanks."
          }
        },
        {
          "role": "ai",
          "text": "Enjoy your stay!",
          "translations": {
            "ko": "편안한 숙박 되세요!",
            "zh": "祝您入住愉快！",
            "ja": "滞在をお楽しみください！",
            "vi": "Chúc bạn có kỳ nghỉ vui vẻ!",
            "en": "Enjoy your stay!"
          }
        },
        {
          "role": "user",
          "text": "Thanks. I am looking forward to it.",
          "translations": {
            "ko": "감사합니다. 기대되네요.",
            "zh": "谢谢。我很期待。",
            "ja": "ありがとう。楽しみにしています。",
            "vi": "Cảm ơn. Tôi rất mong chờ.",
            "en": "Thanks. I am looking forward to it."
          }
        },
        {
          "role": "ai",
          "text": "Let me know if you need anything else.",
          "translations": {
            "ko": "다른 것이 필요하시면 알려주세요.",
            "zh": "如果你需要其他什么，请告诉我。",
            "ja": "何か他に必要なものがあればお知らせください。",
            "vi": "Hãy cho tôi biết nếu bạn cần thêm bất cứ thứ gì.",
            "en": "Let me know if you need anything else."
          }
        },
        {
          "role": "user",
          "text": "Will do!",
          "translations": {
            "ko": "알겠습니다!",
            "zh": "好的！",
            "ja": "了解しました！",
            "vi": "Tôi sẽ làm vậy!",
            "en": "Will do!"
          }
        }
      ]
    },
    {
      "description": {
        "en": "Booking a taxi",
        "ko": "택시 예약",
        "zh": "预订出租车",
        "ja": "タクシーの予約",
        "vi": "Đặt taxi"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Hi, where can I find a taxi?",
          "translations": {
            "ko": "안녕하세요, 택시는 어디에서 잡을 수 있나요?",
            "zh": "嗨，我在哪里可以找到出租车？",
            "ja": "こんにちは、タクシーはどこで見つけることができますか？",
            "vi": "Chào, tôi có thể tìm taxi ở đâu?",
            "en": "Hi, where can I find a taxi?"
          }
        },
        {
          "role": "user",
          "text": "Just outside the terminal, to your right.",
          "translations": {
            "ko": "터미널 바로 앞, 오른쪽에서 찾을 수 있습니다.",
            "zh": "就在航站楼外面，你的右边。",
            "ja": "ターミナルの外、右側です。",
            "vi": "Ngay bên ngoài nhà ga, bên phải của bạn.",
            "en": "Just outside the terminal, to your right."
          }
        },
        {
          "role": "ai",
          "text": "Do I need to book in advance?",
          "translations": {
            "ko": "미리 예약해야 하나요?",
            "zh": "我需要提前预订吗？",
            "ja": "事前に予約する必要はありますか？",
            "vi": "Tôi cần đặt trước không?",
            "en": "Do I need to book in advance?"
          }
        },
        {
          "role": "user",
          "text": "No, there are always taxis waiting.",
          "translations": {
            "ko": "아니요, 항상 택시가 대기하고 있습니다.",
            "zh": "不用，总是有出租车在等待。",
            "ja": "いえ、常にタクシーが待機しています。",
            "vi": "Không, luôn có taxi đợi.",
            "en": "No, there are always taxis waiting."
          }
        },
        {
          "role": "ai",
          "text": "How much is it to downtown?",
          "translations": {
            "ko": "시내까지 얼마나 걸리나요?",
            "zh": "到市中心多少钱？",
            "ja": "ダウンタウンまでいくらですか？",
            "vi": "Giá cả để đi đến trung tâm thành phố là bao nhiêu?",
            "en": "How much is it to downtown?"
          }
        },
        {
          "role": "user",
          "text": "Around $30, depending on traffic.",
          "translations": {
            "ko": "교통 상황에 따라서, 대략 $30 정도입니다.",
            "zh": "大约30美元，根据交通情况而定。",
            "ja": "交通状況によりますが、おおよそ30ドルです。",
            "vi": "Khoảng 30 đô la, tùy thuộc vào tình hình giao thông.",
            "en": "Around $30, depending on traffic."
          }
        },
        {
          "role": "ai",
          "text": "Can I pay by card?",
          "translations": {
            "ko": "카드로 결제할 수 있나요?",
            "zh": "我可以用卡支付吗？",
            "ja": "カードで支払い可能ですか？",
            "vi": "Tôi có thể trả bằng thẻ không?",
            "en": "Can I pay by card?"
          }
        },
        {
          "role": "user",
          "text": "Yes, most taxis accept cards.",
          "translations": {
            "ko": "네, 대부분의 택시는 카드를 받습니다.",
            "zh": "是的，大多数出租车接受卡付款。",
            "ja": "はい、ほとんどのタクシーはカードを受け付けています。",
            "vi": "Có, hầu hết các taxi chấp nhận thẻ.",
            "en": "Yes, most taxis accept cards."
          }
        },
        {
          "role": "ai",
          "text": "Do they speak English?",
          "translations": {
            "ko": "영어를 할 줄 아는 택시 기사가 있나요?",
            "zh": "他们会说英语吗？",
            "ja": "英語を話すことができますか？",
            "vi": "Họ có nói tiếng Anh không?",
            "en": "Do they speak English?"
          }
        },
        {
          "role": "user",
          "text": "Some do. You can show them your hotel address.",
          "translations": {
            "ko": "일부는 할 수 있습니다. 호텔 주소를 보여드리면 됩니다.",
            "zh": "有些会。你可以给他们看你的酒店地址。",
            "ja": "一部のドライバーは話すことができます。ホテルの住所を見せることもできます。",
            "vi": "Một số người có. Bạn có thể chỉ cho họ địa chỉ khách sạn của bạn.",
            "en": "Some do. You can show them your hotel address."
          }
        },
        {
          "role": "ai",
          "text": "Thanks. Is Uber also available?",
          "translations": {
            "ko": "감사합니다. 여기서 우버도 이용할 수 있나요?",
            "zh": "谢谢。这里可以用Uber吗？",
            "ja": "ありがとう。Uberも利用可能ですか？",
            "vi": "Cảm ơn. Uber cũng có sẵn không?",
            "en": "Thanks. Is Uber also available?"
          }
        },
        {
          "role": "user",
          "text": "Yes, you can use the app here.",
          "translations": {
            "ko": "네, 앱을 사용하실 수 있습니다.",
            "zh": "是的，你可以在这里使用Uber应用。",
            "ja": "はい、ここでアプリを使うことができます。",
            "vi": "Có, bạn có thể sử dụng ứng dụng ở đây.",
            "en": "Yes, you can use the app here."
          }
        },
        {
          "role": "ai",
          "text": "Which is faster now, taxi or Uber?",
          "translations": {
            "ko": "지금 뭐가 더 빠르나요, 택시인가요 우버인가요?",
            "zh": "现在哪个更快，出租车还是Uber？",
            "ja": "今、タクシーとUberのどちらが早いですか？",
            "vi": "Hiện tại cái nào nhanh hơn, taxi hay Uber?",
            "en": "Which is faster now, taxi or Uber?"
          }
        },
        {
          "role": "user",
          "text": "Taxi might be faster during peak hours.",
          "translations": {
            "ko": "피크 시간에는 택시가 더 빠를 수 있습니다.",
            "zh": "在高峰期，出租车可能更快。",
            "ja": "ピーク時間中はタクシーの方が早いかもしれません。",
            "vi": "Taxi có thể nhanh hơn trong giờ cao điểm.",
            "en": "Taxi might be faster during peak hours."
          }
        },
        {
          "role": "ai",
          "text": "Good to know. I'll try taxi first.",
          "translations": {
            "ko": "알겠습니다. 먼저 택시를 이용해볼게요.",
            "zh": "好知道。我先试试出租车。",
            "ja": "知っておいてよかったです。まずはタクシーを試してみます。",
            "vi": "Thông tin hữu ích. Tôi sẽ thử taxi trước.",
            "en": "Good to know. I'll try taxi first."
          }
        },
        {
          "role": "user",
          "text": "Sounds good.",
          "translations": {
            "ko": "좋습니다.",
            "zh": "听起来不错。",
            "ja": "それは良い選択です。",
            "vi": "Nghe có vẻ tốt.",
            "en": "Sounds good."
          }
        },
        {
          "role": "ai",
          "text": "Is tipping expected?",
          "translations": {
            "ko": "팁을 주는 것이 일반적인가요?",
            "zh": "需要给小费吗？",
            "ja": "チップは期待されていますか？",
            "vi": "Có cần phải tip không?",
            "en": "Is tipping expected?"
          }
        },
        {
          "role": "user",
          "text": "Yes, 10% is appreciated.",
          "translations": {
            "ko": "네, 10%가 적당합니다.",
            "zh": "是的，给10%的小费会很受欢迎。",
            "ja": "はい、10%がありがたいです。",
            "vi": "Có, 10% là thích hợp.",
            "en": "Yes, 10% is appreciated."
          }
        },
        {
          "role": "ai",
          "text": "Thanks for your help!",
          "translations": {
            "ko": "도움 주셔서 감사합니다!",
            "zh": "谢谢你的帮助！",
            "ja": "お手伝いいただきありがとうございます！",
            "vi": "Cảm ơn vì đã giúp đỡ!",
            "en": "Thanks for your help!"
          }
        },
        {
          "role": "user",
          "text": "You're welcome.",
          "translations": {
            "ko": "천만에요.",
            "zh": "不客气。",
            "ja": "どういたしまして。",
            "vi": "Rất vui được giúp đỡ.",
            "en": "You're welcome."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Asking about local attractions",
        "ko": "주변 명소에 대해 묻기",
        "zh": "询问当地的旅游景点",
        "ja": "地元の観光地についての尋ね方",
        "vi": "Hỏi về địa điểm du lịch địa phương"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Hi, are there any interesting places nearby?",
          "translations": {
            "ko": "안녕하세요, 주변에 볼 만한 곳이 있나요?",
            "zh": "嗨，附近有什么有趣的地方吗？",
            "ja": "こんにちは、近くに面白い場所はありますか？",
            "vi": "Chào, có địa điểm thú vị nào gần đây không?",
            "en": "Hi, are there any interesting places nearby?"
          }
        },
        {
          "role": "user",
          "text": "Yes! The old town and the museum are must-sees.",
          "translations": {
            "ko": "네! 구시가지와 박물관은 꼭 가보셔야 합니다.",
            "zh": "有！老城区和博物馆是必看的。",
            "ja": "はい！古い町と博物館は見逃せません。",
            "vi": "Có! Phố cổ và bảo tàng là những nơi bạn không thể bỏ qua.",
            "en": "Yes! The old town and the museum are must-sees."
          }
        },
        {
          "role": "ai",
          "text": "How far is the old town?",
          "translations": {
            "ko": "구시가지는 얼마나 걸리나요?",
            "zh": "老城区有多远？",
            "ja": "古い町はどのくらい離れていますか？",
            "vi": "Phố cổ cách đây bao xa?",
            "en": "How far is the old town?"
          }
        },
        {
          "role": "user",
          "text": "About a 10-minute walk from here.",
          "translations": {
            "ko": "여기서 걸어서 약 10분 정도입니다.",
            "zh": "从这里走大约10分钟。",
            "ja": "ここから歩いて約10分です。",
            "vi": "Khoảng 10 phút đi bộ từ đây.",
            "en": "About a 10-minute walk from here."
          }
        },
        {
          "role": "ai",
          "text": "Is there an entrance fee for the museum?",
          "translations": {
            "ko": "박물관 입장료가 있나요?",
            "zh": "进博物馆需要门票吗？",
            "ja": "博物館の入場料は必要ですか？",
            "vi": "Có phí vào cửa cho bảo tàng không?",
            "en": "Is there an entrance fee for the museum?"
          }
        },
        {
          "role": "user",
          "text": "Yes, $5 for adults.",
          "translations": {
            "ko": "네, 성인은 $5입니다.",
            "zh": "是的，成人5美元。",
            "ja": "はい、大人は5ドルです。",
            "vi": "Có, 5 đô la cho người lớn.",
            "en": "Yes, $5 for adults."
          }
        },
        {
          "role": "ai",
          "text": "What are the opening hours?",
          "translations": {
            "ko": "영업 시간은 어떻게 되나요?",
            "zh": "开放时间是什么时候？",
            "ja": "開館時間は何時ですか？",
            "vi": "Giờ mở cửa là bao nhiêu?",
            "en": "What are the opening hours?"
          }
        },
        {
          "role": "user",
          "text": "9 AM to 6 PM every day.",
          "translations": {
            "ko": "매일 오전 9시부터 오후 6시까지입니다.",
            "zh": "每天上午9点到下午6点。",
            "ja": "毎日午前9時から午後6時までです。",
            "vi": "Từ 9 giờ sáng đến 6 giờ chiều hàng ngày.",
            "en": "9 AM to 6 PM every day."
          }
        },
        {
          "role": "ai",
          "text": "Can I buy tickets online?",
          "translations": {
            "ko": "온라인으로 티켓을 살 수 있나요?",
            "zh": "我可以在线购买门票吗？",
            "ja": "チケットはオンラインで購入できますか？",
            "vi": "Tôi có thể mua vé trực tuyến không?",
            "en": "Can I buy tickets online?"
          }
        },
        {
          "role": "user",
          "text": "Yes, through their official website.",
          "translations": {
            "ko": "네, 공식 웹사이트에서 구매하실 수 있습니다.",
            "zh": "是的，可以在他们的官方网站上购买。",
            "ja": "はい、公式ウェブサイトから購入できます。",
            "vi": "Có, thông qua trang web chính thức của họ.",
            "en": "Yes, through their official website."
          }
        },
        {
          "role": "ai",
          "text": "Any good places to eat around there?",
          "translations": {
            "ko": "그 근처에 먹을 만한 곳이 있나요?",
            "zh": "那附近有什么好吃的地方吗？",
            "ja": "そこら辺に美味しい食事ができる場所はありますか？",
            "vi": "Có nơi nào tốt để ăn xung quanh đó không?",
            "en": "Any good places to eat around there?"
          }
        },
        {
          "role": "user",
          "text": "There’s a famous noodle shop right next to the museum.",
          "translations": {
            "ko": "박물관 바로 옆에 유명한 국수집이 있습니다.",
            "zh": "博物馆旁边有一家很有名的面馆。",
            "ja": "博物館のすぐ隣に有名な麺屋があります。",
            "vi": "Có một quán mì nổi tiếng ngay bên cạnh bảo tàng.",
            "en": "There’s a famous noodle shop right next to the museum."
          }
        },
        {
          "role": "ai",
          "text": "Sounds great. Is it easy to get a taxi there?",
          "translations": {
            "ko": "좋네요. 택시를 잡기 쉬운가요?",
            "zh": "听起来不错。那里容易打到出租车吗？",
            "ja": "それは素晴らしいです。そこまでタクシーは簡単につかまりますか？",
            "vi": "Nghe có vẻ tuyệt vời. Có dễ dàng bắt được taxi ở đó không?",
            "en": "Sounds great. Is it easy to get a taxi there?"
          }
        },
        {
          "role": "user",
          "text": "Yes, you can catch one on the main road.",
          "translations": {
            "ko": "네, 메인 도로에서 잡으실 수 있습니다.",
            "zh": "是的，你可以在主路上打到出租车。",
            "ja": "はい、メインロードでつかまえることができます。",
            "vi": "Có, bạn có thể bắt một chiếc trên đường chính.",
            "en": "Yes, you can catch one on the main road."
          }
        },
        {
          "role": "ai",
          "text": "Do you recommend any local tours?",
          "translations": {
            "ko": "현지 투어를 추천하시나요?",
            "zh": "你推荐任何当地的旅行团吗？",
            "ja": "地元のツアーは何かおすすめはありますか？",
            "vi": "Bạn có đề nghị bất kỳ tour du lịch địa phương nào không?",
            "en": "Do you recommend any local tours?"
          }
        },
        {
          "role": "user",
          "text": "Yes, the walking tour at 2 PM is great.",
          "translations": {
            "ko": "네, 오후 2시에 시작하는 도보 투어가 좋습니다.",
            "zh": "是的，下午2点的步行游很棒。",
            "ja": "はい、午後2時のウォーキングツアーは素晴らしいです。",
            "vi": "Có, tour đi bộ vào lúc 2 giờ chiều rất tuyệt.",
            "en": "Yes, the walking tour at 2 PM is great."
          }
        },
        {
          "role": "ai",
          "text": "Where does it start?",
          "translations": {
            "ko": "어디서 시작하나요?",
            "zh": "它从哪里开始？",
            "ja": "それはどこから始まりますか？",
            "vi": "Nó bắt đầu ở đâu?",
            "en": "Where does it start?"
          }
        },
        {
          "role": "user",
          "text": "At the main square in front of the fountain.",
          "translations": {
            "ko": "분수대 앞의 메인 광장에서 시작합니다.",
            "zh": "在喷泉前的主广场。",
            "ja": "噴水の前のメインスクエアから始まります。",
            "vi": "Tại quảng trường chính trước đài phun nước.",
            "en": "At the main square in front of the fountain."
          }
        },
        {
          "role": "ai",
          "text": "Thanks for the tips!",
          "translations": {
            "ko": "팁 주셔서 감사합니다!",
            "zh": "谢谢你的建议！",
            "ja": "アドバイスありがとうございます！",
            "vi": "Cảm ơn vì những gợi ý!",
            "en": "Thanks for the tips!"
          }
        },
        {
          "role": "user",
          "text": "My pleasure. Enjoy your day!",
          "translations": {
            "ko": "천만에요. 즐거운 하루 되세요!",
            "zh": "我的荣幸。祝你度过愉快的一天！",
            "ja": "どういたしまして。一日を楽しんでください！",
            "vi": "Rất vui lòng giúp đỡ. Chúc bạn một ngày vui vẻ!",
            "en": "My pleasure. Enjoy your day!"
          }
        }
      ]
    },
    {
      "description": {
        "en": "Ordering food at a foreign restaurant",
        "ko": "외국 식당에서 음식 주문하기",
        "zh": "在外国餐厅点餐",
        "ja": "外国のレストランでの食事の注文",
        "vi": "Đặt món tại nhà hàng nước ngoài"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Welcome! Would you like a menu?",
          "translations": {
            "ko": "환영합니다! 메뉴를 보시겠어요?",
            "zh": "欢迎！你需要菜单吗？",
            "ja": "ようこそ！メニューはいかがですか？",
            "vi": "Chào mừng! Bạn có muốn xem thực đơn không?",
            "en": "Welcome! Would you like a menu?"
          }
        },
        {
          "role": "user",
          "text": "Yes, please.",
          "translations": {
            "ko": "네, 부탁드려요.",
            "zh": "是的，谢谢。",
            "ja": "はい、お願いします。",
            "vi": "Có, xin vui lòng.",
            "en": "Yes, please."
          }
        },
        {
          "role": "ai",
          "text": "Here you go. Would you like anything to drink first?",
          "translations": {
            "ko": "여기 있습니다. 먼저 음료를 주문하시겠어요?",
            "zh": "这是你的菜单。你先想喝点什么吗？",
            "ja": "どうぞ。まず何か飲み物はいかがですか？",
            "vi": "Đây rồi. Bạn có muốn uống gì trước không?",
            "en": "Here you go. Would you like anything to drink first?"
          }
        },
        {
          "role": "user",
          "text": "Just water for now.",
          "translations": {
            "ko": "일단 물 부탁드립니다.",
            "zh": "先来点水。",
            "ja": "とりあえず水でお願いします。",
            "vi": "Chỉ nước lọc thôi.",
            "en": "Just water for now."
          }
        },
        {
          "role": "ai",
          "text": "Let me know when you’re ready to order.",
          "translations": {
            "ko": "주문할 준비가 되시면 알려주세요.",
            "zh": "你准备好点菜时告诉我。",
            "ja": "注文の準備ができたらお知らせください。",
            "vi": "Hãy cho tôi biết khi bạn sẵn sàng đặt món.",
            "en": "Let me know when you’re ready to order."
          }
        },
        {
          "role": "user",
          "text": "I’m ready.",
          "translations": {
            "ko": "준비됐습니다.",
            "zh": "我准备好了。",
            "ja": "注文の準備ができました。",
            "vi": "Tôi đã sẵn sàng.",
            "en": "I’m ready."
          }
        },
        {
          "role": "ai",
          "text": "Great. What would you like?",
          "translations": {
            "ko": "좋습니다. 무엇을 드시겠어요?",
            "zh": "很好。你想要什么？",
            "ja": "素晴らしいです。何にしますか？",
            "vi": "Tốt. Bạn muốn gì?",
            "en": "Great. What would you like?"
          }
        },
        {
          "role": "user",
          "text": "I’ll try the beef stew.",
          "translations": {
            "ko": "소고기 스튜를 시도해 볼게요.",
            "zh": "我试试牛肉炖菜。",
            "ja": "ビーフシチューを試してみます。",
            "vi": "Tôi sẽ thử món bò hầm.",
            "en": "I’ll try the beef stew."
          }
        },
        {
          "role": "ai",
          "text": "It’s a good choice. It comes with rice or bread.",
          "translations": {
            "ko": "좋은 선택입니다. 밥이나 빵이 함께 나옵니다.",
            "zh": "很好的选择。它配有米饭或面包。",
            "ja": "それは良い選択です。ご飯かパンが付きます。",
            "vi": "Đó là một lựa chọn tốt. Nó đi kèm với cơm hoặc bánh mì.",
            "en": "It’s a good choice. It comes with rice or bread."
          }
        },
        {
          "role": "user",
          "text": "Rice, please.",
          "translations": {
            "ko": "밥으로 부탁드립니다.",
            "zh": "米饭，谢谢。",
            "ja": "ご飯でお願いします。",
            "vi": "Cơm, xin vui lòng.",
            "en": "Rice, please."
          }
        },
        {
          "role": "ai",
          "text": "Would you like it spicy?",
          "translations": {
            "ko": "매운 맛을 원하시나요?",
            "zh": "你想要辣的吗？",
            "ja": "スパイシーにしますか？",
            "vi": "Bạn có muốn món này cay không?",
            "en": "Would you like it spicy?"
          }
        },
        {
          "role": "user",
          "text": "Just a little spicy.",
          "translations": {
            "ko": "조금 매운 맛으로 해주세요.",
            "zh": "只要一点点辣。",
            "ja": "少しスパイシーで。",
            "vi": "Chỉ cay một chút.",
            "en": "Just a little spicy."
          }
        },
        {
          "role": "ai",
          "text": "Any appetizers?",
          "translations": {
            "ko": "애피타이저는요?",
            "zh": "有开胃菜吗？",
            "ja": "前菜はいかがですか？",
            "vi": "Có món khai vị nào không?",
            "en": "Any appetizers?"
          }
        },
        {
          "role": "user",
          "text": "No, thank you.",
          "translations": {
            "ko": "아니요, 괜찮습니다.",
            "zh": "不用，谢谢。",
            "ja": "いいえ、結構です。",
            "vi": "Không, cảm ơn.",
            "en": "No, thank you."
          }
        },
        {
          "role": "ai",
          "text": "Okay, one beef stew with rice. Anything else?",
          "translations": {
            "ko": "알겠습니다, 밥과 함께 나오는 소고기 스튜 한 개요. 다른 것은요?",
            "zh": "好的，一份配米饭的牛肉炖菜。还需要别的吗？",
            "ja": "了解しました、ビーフシチューとご飯一つですね。他に何か？",
            "vi": "Được, một món bò hầm với cơm. Còn gì nữa không?",
            "en": "Okay, one beef stew with rice. Anything else?"
          }
        },
        {
          "role": "user",
          "text": "That’s all for now.",
          "translations": {
            "ko": "일단은 이것만요.",
            "zh": "现在就这些。",
            "ja": "それだけで大丈夫です。",
            "vi": "Đó là tất cả cho bây giờ.",
            "en": "That’s all for now."
          }
        },
        {
          "role": "ai",
          "text": "It’ll be out in 15 minutes.",
          "translations": {
            "ko": "15분 후에 나옵니다.",
            "zh": "15分钟后就好。",
            "ja": "15分で出来上がります。",
            "vi": "Món ăn sẽ được phục vụ trong 15 phút.",
            "en": "It’ll be out in 15 minutes."
          }
        },
        {
          "role": "user",
          "text": "Thanks.",
          "translations": {
            "ko": "감사합니다.",
            "zh": "谢谢。",
            "ja": "ありがとうございます。",
            "vi": "Cảm ơn.",
            "en": "Thanks."
          }
        },
        {
          "role": "ai",
          "text": "Let me know if you need anything.",
          "translations": {
            "ko": "필요한 것이 있으면 알려주세요.",
            "zh": "如果你需要什么，告诉我。",
            "ja": "何か必要なものがあればお知らせください。",
            "vi": "Hãy cho tôi biết nếu bạn cần thêm gì.",
            "en": "Let me know if you need anything."
          }
        },
        {
          "role": "user",
          "text": "Will do!",
          "translations": {
            "ko": "알겠습니다!",
            "zh": "好的！",
            "ja": "了解しました！",
            "vi": "Tôi sẽ làm vậy!",
            "en": "Will do!"
          }
        }
      ]
    },
    {
      "description": {
        "en": "Buying tickets for public transport",
        "ko": "대중교통 티켓 구매하기",
        "zh": "购买公共交通票",
        "ja": "公共交通機関のチケット購入",
        "vi": "Mua vé cho phương tiện công cộng"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Hi, where can I buy a subway ticket?",
          "translations": {
            "ko": "안녕하세요, 어디에서 지하철 티켓을 살 수 있나요?",
            "zh": "嗨，我在哪里可以买地铁票？",
            "ja": "こんにちは、地下鉄のチケットはどこで買えますか？",
            "vi": "Chào, tôi có thể mua vé tàu điện ngầm ở đâu?",
            "en": "Hi, where can I buy a subway ticket?"
          }
        },
        {
          "role": "user",
          "text": "Right over there at the machine.",
          "translations": {
            "ko": "저기 기계에서 구매하실 수 있습니다.",
            "zh": "在那边的机器上。",
            "ja": "あそこにある機械で買えます。",
            "vi": "Ngay bên kia, ở máy bán vé.",
            "en": "Right over there at the machine."
          }
        },
        {
          "role": "ai",
          "text": "Do they take cards?",
          "translations": {
            "ko": "카드를 사용할 수 있나요?",
            "zh": "他们接受卡付款吗？",
            "ja": "カードは使えますか？",
            "vi": "Họ chấp nhận thẻ không?",
            "en": "Do they take cards?"
          }
        },
        {
          "role": "user",
          "text": "Yes, and also cash.",
          "translations": {
            "ko": "네, 현금도 가능합니다.",
            "zh": "是的，也接受现金。",
            "ja": "はい、現金も使えます。",
            "vi": "Có, và cũng chấp nhận tiền mặt.",
            "en": "Yes, and also cash."
          }
        },
        {
          "role": "ai",
          "text": "How much is a one-way ticket?",
          "translations": {
            "ko": "편도 티켓은 얼마인가요?",
            "zh": "单程票多少钱？",
            "ja": "片道のチケットはいくらですか？",
            "vi": "Một vé một chiều giá bao nhiêu?",
            "en": "How much is a one-way ticket?"
          }
        },
        {
          "role": "user",
          "text": "$2.50.",
          "translations": {
            "ko": "$2.50입니다.",
            "zh": "2.50美元。",
            "ja": "2.50ドルです。",
            "vi": "2,50 đô la.",
            "en": "$2.50."
          }
        },
        {
          "role": "ai",
          "text": "Is there a day pass?",
          "translations": {
            "ko": "하루 이용권이 있나요?",
            "zh": "有一日通吗？",
            "ja": "一日パスはありますか？",
            "vi": "Có vé ngày không?",
            "en": "Is there a day pass?"
          }
        },
        {
          "role": "user",
          "text": "Yes, for $7.",
          "translations": {
            "ko": "네, $7입니다.",
            "zh": "有，7美元。",
            "ja": "はい、7ドルです。",
            "vi": "Có, giá 7 đô la.",
            "en": "Yes, for $7."
          }
        },
        {
          "role": "ai",
          "text": "I’ll take the day pass.",
          "translations": {
            "ko": "하루 이용권을 구매하겠습니다.",
            "zh": "我买一日通。",
            "ja": "一日パスを買います。",
            "vi": "Tôi sẽ lấy vé ngày.",
            "en": "I’ll take the day pass."
          }
        },
        {
          "role": "user",
          "text": "Good choice if you plan to ride more than twice.",
          "translations": {
            "ko": "두 번 이상 이용할 계획이라면 좋은 선택입니다.",
            "zh": "如果你打算乘坐超过两次，这是个好选择。",
            "ja": "2回以上乗る予定があるなら良い選択です。",
            "vi": "Lựa chọn tốt nếu bạn dự định đi nhiều hơn hai lần.",
            "en": "Good choice if you plan to ride more than twice."
          }
        },
        {
          "role": "ai",
          "text": "How do I use the ticket?",
          "translations": {
            "ko": "티켓은 어떻게 사용하나요?",
            "zh": "我该如何使用票？",
            "ja": "チケットはどのように使いますか？",
            "vi": "Tôi sử dụng vé như thế nào?",
            "en": "How do I use the ticket?"
          }
        },
        {
          "role": "user",
          "text": "Just scan it at the gate.",
          "translations": {
            "ko": "게이트에서 스캔하면 됩니다.",
            "zh": "在闸机上扫描它。",
            "ja": "ゲートでスキャンします。",
            "vi": "Chỉ cần quét nó tại cổng.",
            "en": "Just scan it at the gate."
          }
        },
        {
          "role": "ai",
          "text": "Does it work on buses too?",
          "translations": {
            "ko": "버스에서도 사용할 수 있나요?",
            "zh": "它也可以在公交车上使用吗？",
            "ja": "バスでも使えますか？",
            "vi": "Nó có hoạt động trên xe buýt không?",
            "en": "Does it work on buses too?"
          }
        },
        {
          "role": "user",
          "text": "Yes, it’s valid all day.",
          "translations": {
            "ko": "네, 하루 종일 유효합니다.",
            "zh": "是的，全天有效。",
            "ja": "はい、一日中有効です。",
            "vi": "Có, nó có hiệu lực cả ngày.",
            "en": "Yes, it’s valid all day."
          }
        },
        {
          "role": "ai",
          "text": "What time does the subway close?",
          "translations": {
            "ko": "지하철은 언제까지 운행하나요?",
            "zh": "地铁什么时候关门？",
            "ja": "地下鉄は何時に閉まりますか？",
            "vi": "Tàu điện ngầm đóng cửa mấy giờ?",
            "en": "What time does the subway close?"
          }
        },
        {
          "role": "user",
          "text": "Midnight.",
          "translations": {
            "ko": "자정까지입니다.",
            "zh": "午夜。",
            "ja": "真夜中です。",
            "vi": "Nửa đêm.",
            "en": "Midnight."
          }
        },
        {
          "role": "ai",
          "text": "Thanks for your help.",
          "translations": {
            "ko": "도움 주셔서 감사합니다.",
            "zh": "谢谢你的帮助。",
            "ja": "お手伝いいただきありがとうございます。",
            "vi": "Cảm ơn vì đã giúp đỡ.",
            "en": "Thanks for your help."
          }
        },
        {
          "role": "user",
          "text": "No problem.",
          "translations": {
            "ko": "천만에요.",
            "zh": "没问题。",
            "ja": "問題ありません。",
            "vi": "Không sao.",
            "en": "No problem."
          }
        },
        {
          "role": "ai",
          "text": "Enjoy your ride!",
          "translations": {
            "ko": "즐거운 여행 되세요!",
            "zh": "祝你旅途愉快！",
            "ja": "ご乗車をお楽しみください！",
            "vi": "Chúc bạn có chuyến đi vui vẻ!",
            "en": "Enjoy your ride!"
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
        "en": "Asking about luggage at the airport",
        "ko": "공항에서 짐에 대해 묻기",
        "zh": "在机场询问行李",
        "ja": "空港での荷物についての尋ね方",
        "vi": "Hỏi về hành lý tại sân bay"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Excuse me, where can I collect my luggage?",
          "translations": {
            "ko": "실례합니다, 어디에서 짐을 찾을 수 있나요?",
            "zh": "打扰一下，我在哪里可以取我的行李？",
            "ja": "すみません、荷物はどこで受け取れますか？",
            "vi": "Xin lỗi, tôi có thể nhận hành lý ở đâu?",
            "en": "Excuse me, where can I collect my luggage?"
          }
        },
        {
          "role": "user",
          "text": "Go to baggage claim area B.",
          "translations": {
            "ko": "수하물 찾는 곳 B로 가세요.",
            "zh": "去B区的行李提取处。",
            "ja": "荷物受け取りエリアBに行ってください。",
            "vi": "Đi đến khu vực nhận hành lý B.",
            "en": "Go to baggage claim area B."
          }
        },
        {
          "role": "ai",
          "text": "Where is that?",
          "translations": {
            "ko": "그곳은 어디인가요?",
            "zh": "那在哪里？",
            "ja": "それはどこですか？",
            "vi": "Nó ở đâu?",
            "en": "Where is that?"
          }
        },
        {
          "role": "user",
          "text": "Follow the signs after passport control.",
          "translations": {
            "ko": "여권 검사 후에 표시된 방향으로 가면 됩니다.",
            "zh": "在通关后按照指示牌走。",
            "ja": "パスポートコントロールの後にある案内看板をたどってください。",
            "vi": "Theo dấu hiệu sau khi kiểm soát hộ chiếu.",
            "en": "Follow the signs after passport control."
          }
        },
        {
          "role": "ai",
          "text": "Thank you. How long does it take?",
          "translations": {
            "ko": "감사합니다. 얼마나 걸리나요?",
            "zh": "谢谢。需要多长时间？",
            "ja": "ありがとうございます。どのくらいかかりますか？",
            "vi": "Cảm ơn. Mất bao lâu?",
            "en": "Thank you. How long does it take?"
          }
        },
        {
          "role": "user",
          "text": "About 10 minutes.",
          "translations": {
            "ko": "대략 10분 정도입니다.",
            "zh": "大约10分钟。",
            "ja": "約10分です。",
            "vi": "Khoảng 10 phút.",
            "en": "About 10 minutes."
          }
        },
        {
          "role": "ai",
          "text": "What if my bag is missing?",
          "translations": {
            "ko": "짐이 없으면 어떻게 하나요?",
            "zh": "如果我的包丢了怎么办？",
            "ja": "もし荷物がなかったらどうすればいいですか？",
            "vi": "Nếu túi của tôi bị mất thì sao?",
            "en": "What if my bag is missing?"
          }
        },
        {
          "role": "user",
          "text": "Go to the lost luggage counter.",
          "translations": {
            "ko": "분실 짐 창구로 가세요.",
            "zh": "去丢失行李柜台。",
            "ja": "失くした荷物のカウンターに行ってください。",
            "vi": "Đi đến quầy hành lý thất lạc.",
            "en": "Go to the lost luggage counter."
          }
        },
        {
          "role": "ai",
          "text": "Where is that?",
          "translations": {
            "ko": "그곳은 어디인가요?",
            "zh": "那在哪里？",
            "ja": "それはどこにありますか？",
            "vi": "Nó ở đâu?",
            "en": "Where is that?"
          }
        },
        {
          "role": "user",
          "text": "Near belt 6, past the customs area.",
          "translations": {
            "ko": "세관 지나서 6번 벨트 근처에 있습니다.",
            "zh": "在6号传送带附近，过了海关区域。",
            "ja": "カスタムエリアを過ぎた6番ベルトの近くです。",
            "vi": "Gần băng chuyền 6, qua khu vực hải quan.",
            "en": "Near belt 6, past the customs area."
          }
        },
        {
          "role": "ai",
          "text": "Do I need to show anything?",
          "translations": {
            "ko": "보여줘야 하는 것이 있나요?",
            "zh": "我需要出示什么吗？",
            "ja": "何か見せる必要がありますか？",
            "vi": "Tôi cần phải hiện thị gì không?",
            "en": "Do I need to show anything?"
          }
        },
        {
          "role": "user",
          "text": "Yes, your baggage tag.",
          "translations": {
            "ko": "네, 수하물 태그를 보여주세요.",
            "zh": "是的，你的行李标签。",
            "ja": "はい、あなたの荷物タグです。",
            "vi": "Có, thẻ hành lý của bạn.",
            "en": "Yes, your baggage tag."
          }
        },
        {
          "role": "ai",
          "text": "I have it here.",
          "translations": {
            "ko": "여기 있습니다.",
            "zh": "我这里有。",
            "ja": "ここにあります。",
            "vi": "Tôi có nó ở đây.",
            "en": "I have it here."
          }
        },
        {
          "role": "user",
          "text": "Great. They’ll help you there.",
          "translations": {
            "ko": "좋습니다. 그곳에서 도와드릴 것입니다.",
            "zh": "很好。他们会在那里帮助你。",
            "ja": "それは良いですね。そこで彼らがあなたを助けます。",
            "vi": "Tốt. Họ sẽ giúp bạn ở đó.",
            "en": "Great. They’ll help you there."
          }
        },
        {
          "role": "ai",
          "text": "Thanks a lot.",
          "translations": {
            "ko": "많이 도와주셔서 감사합니다.",
            "zh": "非常感谢。",
            "ja": "どうもありがとうございます。",
            "vi": "Cảm ơn rất nhiều.",
            "en": "Thanks a lot."
          }
        },
        {
          "role": "user",
          "text": "You're welcome.",
          "translations": {
            "ko": "천만에요.",
            "zh": "不客气。",
            "ja": "どういたしまして。",
            "vi": "Rất vui được giúp đỡ.",
            "en": "You're welcome."
          }
        },
        {
          "role": "ai",
          "text": "Is there Wi-Fi here?",
          "translations": {
            "ko": "여기 Wi-Fi가 있나요?",
            "zh": "这里有Wi-Fi吗？",
            "ja": "ここにWi-Fiはありますか？",
            "vi": "Có Wi-Fi ở đây không?",
            "en": "Is there Wi-Fi here?"
          }
        },
        {
          "role": "user",
          "text": "Yes, free for 2 hours.",
          "translations": {
            "ko": "네, 2시간 무료입니다.",
            "zh": "是的，免费使用2小时。",
            "ja": "はい、2時間無料です。",
            "vi": "Có, miễn phí trong 2 giờ.",
            "en": "Yes, free for 2 hours."
          }
        },
        {
          "role": "ai",
          "text": "That’s useful. Thank you!",
          "translations": {
            "ko": "유용하네요. 감사합니다!",
            "zh": "那很有用。谢谢你！",
            "ja": "それは便利です。ありがとうございます！",
            "vi": "Rất hữu ích. Cảm ơn bạn!",
            "en": "That’s useful. Thank you!"
          }
        },
        {
          "role": "user",
          "text": "Have a good day.",
          "translations": {
            "ko": "좋은 하루 되세요.",
            "zh": "祝你有个好天气。",
            "ja": "良い一日を。",
            "vi": "Chúc bạn một ngày tốt lành.",
            "en": "Have a good day."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Changing money",
        "ko": "환전하기",
        "zh": "兑换货币",
        "ja": "お金の両替",
        "vi": "Đổi tiền"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Hi, where can I exchange money?",
          "translations": {
            "ko": "안녕하세요, 어디에서 돈을 환전할 수 있나요?",
            "zh": "嗨，我在哪里可以兑换货币？",
            "ja": "こんにちは、お金を両替できる場所はどこですか？",
            "vi": "Chào, tôi có thể đổi tiền ở đâu?",
            "en": "Hi, where can I exchange money?"
          }
        },
        {
          "role": "user",
          "text": "Right here at the counter.",
          "translations": {
            "ko": "바로 이 창구에서 가능합니다.",
            "zh": "就在这个柜台。",
            "ja": "ここ、カウンターで両替できます。",
            "vi": "Ngay tại quầy này.",
            "en": "Right here at the counter."
          }
        },
        {
          "role": "ai",
          "text": "What’s the rate for dollars to euros?",
          "translations": {
            "ko": "달러를 유로로 환전할 때 환율은 어떻게 되나요?",
            "zh": "美元兑欧元的汇率是多少？",
            "ja": "ドルからユーロへのレートはいくらですか？",
            "vi": "Tỷ giá đô la sang euro là bao nhiêu?",
            "en": "What’s the rate for dollars to euros?"
          }
        },
        {
          "role": "user",
          "text": "1 dollar is 0.90 euros today.",
          "translations": {
            "ko": "오늘 1달러는 0.90유로입니다.",
            "zh": "今天1美元是0.90欧元。",
            "ja": "今日は1ドルが0.90ユーロです。",
            "vi": "1 đô la là 0,90 euro hôm nay.",
            "en": "1 dollar is 0.90 euros today."
          }
        },
        {
          "role": "ai",
          "text": "Is there a service fee?",
          "translations": {
            "ko": "수수료가 있나요?",
            "zh": "有服务费吗？",
            "ja": "手数料はかかりますか？",
            "vi": "Có phí dịch vụ không?",
            "en": "Is there a service fee?"
          }
        },
        {
          "role": "user",
          "text": "Yes, 2%.",
          "translations": {
            "ko": "네, 2%입니다.",
            "zh": "是的，2%。",
            "ja": "はい、2%です。",
            "vi": "Có, 2%.",
            "en": "Yes, 2%."
          }
        },
        {
          "role": "ai",
          "text": "Can I use a card?",
          "translations": {
            "ko": "카드를 사용할 수 있나요?",
            "zh": "我可以用卡吗？",
            "ja": "カードは使えますか？",
            "vi": "Tôi có thể sử dụng thẻ không?",
            "en": "Can I use a card?"
          }
        },
        {
          "role": "user",
          "text": "Only cash here.",
          "translations": {
            "ko": "여기서는 현금만 가능합니다.",
            "zh": "这里只接受现金。",
            "ja": "ここでは現金のみです。",
            "vi": "Chỉ tiền mặt ở đây.",
            "en": "Only cash here."
          }
        },
        {
          "role": "ai",
          "text": "Okay, I’d like to exchange $100.",
          "translations": {
            "ko": "알겠습니다, $100을 환전하겠습니다.",
            "zh": "好的，我想兑换100美元。",
            "ja": "了解しました、100ドルを両替したいです。",
            "vi": "Được, tôi muốn đổi 100 đô la.",
            "en": "Okay, I’d like to exchange $100."
          }
        },
        {
          "role": "user",
          "text": "You’ll receive 90 euros.",
          "translations": {
            "ko": "90유로를 받으실 수 있습니다.",
            "zh": "你会收到90欧元。",
            "ja": "90ユーロを受け取ります。",
            "vi": "Bạn sẽ nhận được 90 euro.",
            "en": "You’ll receive 90 euros."
          }
        },
        {
          "role": "ai",
          "text": "Do you need my passport?",
          "translations": {
            "ko": "여권을 보여줘야 하나요?",
            "zh": "你需要我的护照吗？",
            "ja": "パスポートは必要ですか？",
            "vi": "Bạn cần hộ chiếu của tôi không?",
            "en": "Do you need my passport?"
          }
        },
        {
          "role": "user",
          "text": "Yes, for identification.",
          "translations": {
            "ko": "네, 신분 확인을 위해 필요합니다.",
            "zh": "是的，用于身份验证。",
            "ja": "はい、身分証明のためです。",
            "vi": "Có, để xác minh.",
            "en": "Yes, for identification."
          }
        },
        {
          "role": "ai",
          "text": "Here it is.",
          "translations": {
            "ko": "여기 있습니다.",
            "zh": "这是。",
            "ja": "ここにあります。",
            "vi": "Đây rồi.",
            "en": "Here it is."
          }
        },
        {
          "role": "user",
          "text": "Thanks. Please sign this form.",
          "translations": {
            "ko": "감사합니다. 이 양식에 서명해주세요.",
            "zh": "谢谢。请签署这个表格。",
            "ja": "ありがとう。このフォームに署名してください。",
            "vi": "Cảm ơn. Vui lòng ký vào biểu mẫu này.",
            "en": "Thanks. Please sign this form."
          }
        },
        {
          "role": "ai",
          "text": "Done.",
          "translations": {
            "ko": "했습니다.",
            "zh": "好了。",
            "ja": "署名しました。",
            "vi": "Đã xong.",
            "en": "Done."
          }
        },
        {
          "role": "user",
          "text": "Here’s your receipt and cash.",
          "translations": {
            "ko": "영수증과 현금입니다.",
            "zh": "这是你的收据和现金。",
            "ja": "レシートと現金をどうぞ。",
            "vi": "Đây là biên lai và tiền mặt của bạn.",
            "en": "Here’s your receipt and cash."
          }
        },
        {
          "role": "ai",
          "text": "Thank you!",
          "translations": {
            "ko": "감사합니다!",
            "zh": "谢谢！",
            "ja": "ありがとうございます！",
            "vi": "Cảm ơn!",
            "en": "Thank you!"
          }
        },
        {
          "role": "user",
          "text": "You're welcome.",
          "translations": {
            "ko": "천만에요.",
            "zh": "不客气。",
            "ja": "どういたしまして。",
            "vi": "Rất vui được giúp đỡ.",
            "en": "You're welcome."
          }
        },
        {
          "role": "ai",
          "text": "Have a nice trip!",
          "translations": {
            "ko": "즐거운 여행 되세요!",
            "zh": "祝你旅途愉快！",
            "ja": "良い旅を！",
            "vi": "Chúc bạn có chuyến đi vui vẻ!",
            "en": "Have a nice trip!"
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
        "en": "Dealing with a delayed flight",
        "ko": "비행기 지연에 대처하기",
        "zh": "处理延误的航班",
        "ja": "遅延したフライトの対応",
        "vi": "Đối phó với chuyến bay bị trễ"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Excuse me, why is Flight 202 delayed?",
          "translations": {
            "ko": "실례합니다, 왜 202편 비행기가 지연되나요?",
            "zh": "打扰一下，为什么202航班延误了？",
            "ja": "すみません、フライト202が遅延している理由は何ですか？",
            "vi": "Xin lỗi, tại sao Chuyến bay 202 bị trễ?",
            "en": "Excuse me, why is Flight 202 delayed?"
          }
        },
        {
          "role": "user",
          "text": "There’s bad weather at the destination.",
          "translations": {
            "ko": "목적지에 날씨가 좋지 않습니다.",
            "zh": "目的地的天气不好。",
            "ja": "目的地に悪天候があります。",
            "vi": "Có thời tiết xấu tại điểm đến.",
            "en": "There’s bad weather at the destination."
          }
        },
        {
          "role": "ai",
          "text": "How long is the delay?",
          "translations": {
            "ko": "지연 시간은 얼마나 되나요?",
            "zh": "延误多长时间？",
            "ja": "遅延はどのくらいですか？",
            "vi": "Trễ bao lâu?",
            "en": "How long is the delay?"
          }
        },
        {
          "role": "user",
          "text": "About 2 hours.",
          "translations": {
            "ko": "약 2시간입니다.",
            "zh": "大约2小时。",
            "ja": "約2時間です。",
            "vi": "Khoảng 2 giờ.",
            "en": "About 2 hours."
          }
        },
        {
          "role": "ai",
          "text": "Will I miss my connection?",
          "translations": {
            "ko": "환승 비행기를 놓치게 될까요?",
            "zh": "我会错过我的转机吗？",
            "ja": "乗り継ぎ便に間に合わない可能性はありますか？",
            "vi": "Tôi sẽ bỏ lỡ chuyến bay nối tiếp của mình không?",
            "en": "Will I miss my connection?"
          }
        },
        {
          "role": "user",
          "text": "Possibly. We’ll assist if needed.",
          "translations": {
            "ko": "가능성이 있습니다. 필요하다면 도와드릴 것입니다.",
            "zh": "可能会。如果需要，我们会提供帮助。",
            "ja": "可能性があります。必要な場合はお手伝いします。",
            "vi": "Có thể. Chúng tôi sẽ hỗ trợ nếu cần thiết.",
            "en": "Possibly. We’ll assist if needed."
          }
        },
        {
          "role": "ai",
          "text": "What should I do now?",
          "translations": {
            "ko": "지금 어떻게 해야 하나요?",
            "zh": "我现在应该做什么？",
            "ja": "今何をすればいいですか？",
            "vi": "Bây giờ tôi nên làm gì?",
            "en": "What should I do now?"
          }
        },
        {
          "role": "user",
          "text": "Please stay near the gate for updates.",
          "translations": {
            "ko": "업데이트를 위해 게이트 근처에 계셔야 합니다.",
            "zh": "请在登机口附近等待更新信息。",
            "ja": "更新情報を聞くためにゲート近くにいてください。",
            "vi": "Vui lòng ở gần cổng để cập nhật thông tin.",
            "en": "Please stay near the gate for updates."
          }
        },
        {
          "role": "ai",
          "text": "Is there food provided?",
          "translations": {
            "ko": "음식을 제공하나요?",
            "zh": "有提供食物吗？",
            "ja": "食事は提供されますか？",
            "vi": "Có cung cấp thức ăn không?",
            "en": "Is there food provided?"
          }
        },
        {
          "role": "user",
          "text": "Yes, vouchers at the help desk.",
          "translations": {
            "ko": "네, 도움말 책상에서 식권을 받으실 수 있습니다.",
            "zh": "是的，在帮助台有餐券。",
            "ja": "はい、ヘルプデスクでバウチャーを提供しています。",
            "vi": "Có, phiếu mua hàng tại quầy giúp đỡ.",
            "en": "Yes, vouchers at the help desk."
          }
        },
        {
          "role": "ai",
          "text": "Where is that?",
          "translations": {
            "ko": "그곳은 어디인가요?",
            "zh": "那在哪里？",
            "ja": "それはどこにありますか？",
            "vi": "Nó ở đâu?",
            "en": "Where is that?"
          }
        },
        {
          "role": "user",
          "text": "Next to Gate 10.",
          "translations": {
            "ko": "10번 게이트 옆입니다.",
            "zh": "在10号登机口旁边。",
            "ja": "10番ゲートの隣です。",
            "vi": "Ngay cạnh Cổng 10.",
            "en": "Next to Gate 10."
          }
        },
        {
          "role": "ai",
          "text": "Can I rebook?",
          "translations": {
            "ko": "다른 비행기로 예약을 변경할 수 있나요?",
            "zh": "我可以改签吗？",
            "ja": "再予約は可能ですか？",
            "vi": "Tôi có thể đặt lại chuyến bay không?",
            "en": "Can I rebook?"
          }
        },
        {
          "role": "user",
          "text": "If the delay gets longer, yes.",
          "translations": {
            "ko": "지연 시간이 더 길어진다면 가능합니다.",
            "zh": "如果延误时间更长，是的。",
            "ja": "遅延が長くなる場合は、はい。",
            "vi": "Nếu trễ lâu hơn, có.",
            "en": "If the delay gets longer, yes."
          }
        },
        {
          "role": "ai",
          "text": "Will you make announcements?",
          "translations": {
            "ko": "알림을 해주시나요?",
            "zh": "你们会做公告吗？",
            "ja": "アナウンスはしますか？",
            "vi": "Bạn sẽ thông báo không?",
            "en": "Will you make announcements?"
          }
        },
        {
          "role": "user",
          "text": "Yes, over the speaker.",
          "translations": {
            "ko": "네, 스피커로 알려드립니다.",
            "zh": "是的，通过广播。",
            "ja": "はい、スピーカーでお知らせします。",
            "vi": "Có, qua loa.",
            "en": "Yes, over the speaker."
          }
        },
        {
          "role": "ai",
          "text": "Thanks for your help.",
          "translations": {
            "ko": "도움 주셔서 감사합니다.",
            "zh": "谢谢你的帮助。",
            "ja": "お手伝いいただきありがとうございます。",
            "vi": "Cảm ơn vì đã giúp đỡ.",
            "en": "Thanks for your help."
          }
        },
        {
          "role": "user",
          "text": "You’re welcome.",
          "translations": {
            "ko": "천만에요.",
            "zh": "不客气。",
            "ja": "どういたしまして。",
            "vi": "Rất vui được giúp đỡ.",
            "en": "You’re welcome."
          }
        },
        {
          "role": "ai",
          "text": "Hope the weather clears soon.",
          "translations": {
            "ko": "날씨가 빨리 개선되길 바라겠습니다.",
            "zh": "希望天气能快点好转。",
            "ja": "天候がすぐに回復することを願っています。",
            "vi": "Hy vọng thời tiết sẽ sớm tốt lên.",
            "en": "Hope the weather clears soon."
          }
        },
        {
          "role": "user",
          "text": "Fingers crossed!",
          "translations": {
            "ko": "희망을 가지고 있습니다!",
            "zh": "祈祷吧！",
            "ja": "願いを込めて！",
            "vi": "Hy vọng vậy!",
            "en": "Fingers crossed!"
          }
        }
      ]
    },
    {
      "description": {
        "en": "Asking about Wi-Fi or SIM cards abroad",
        "ko": "해외에서 Wi-Fi 또는 SIM 카드에 대해 묻기",
        "zh": "在国外询问Wi-Fi或SIM卡",
        "ja": "海外でのWi-FiやSIMカードについての尋ね方",
        "vi": "Hỏi về Wi-Fi hoặc SIM card ở nước ngoài"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Hi, do you sell SIM cards?",
          "translations": {
            "ko": "안녕하세요, SIM 카드를 판매하나요?",
            "zh": "嗨，你们卖SIM卡吗？",
            "ja": "こんにちは、SIMカードは売っていますか？",
            "vi": "Chào, bạn có bán SIM card không?",
            "en": "Hi, do you sell SIM cards?"
          }
        },
        {
          "role": "user",
          "text": "Yes, we have several options.",
          "translations": {
            "ko": "네, 여러 가지 옵션을 제공합니다.",
            "zh": "是的，我们有几种选择。",
            "ja": "はい、いくつかのオプションがあります。",
            "vi": "Có, chúng tôi có một số lựa chọn.",
            "en": "Yes, we have several options."
          }
        },
        {
          "role": "ai",
          "text": "Which one is best for tourists?",
          "translations": {
            "ko": "관광객에게 가장 좋은 것은 무엇인가요?",
            "zh": "哪一种最适合游客？",
            "ja": "観光客に最適なのはどれですか？",
            "vi": "Cái nào tốt nhất cho khách du lịch?",
            "en": "Which one is best for tourists?"
          }
        },
        {
          "role": "user",
          "text": "This one has 5GB and local calls.",
          "translations": {
            "ko": "이것은 5GB와 현지 통화가 가능합니다.",
            "zh": "这一种有5GB流量和本地通话。",
            "ja": "これは5GBとローカル通話が含まれています。",
            "vi": "Cái này có 5GB và cuộc gọi địa phương.",
            "en": "This one has 5GB and local calls."
          }
        },
        {
          "role": "ai",
          "text": "How much is it?",
          "translations": {
            "ko": "얼마인가요?",
            "zh": "多少钱？",
            "ja": "それはいくらですか？",
            "vi": "Giá bao nhiêu?",
            "en": "How much is it?"
          }
        },
        {
          "role": "user",
          "text": "$20 including activation.",
          "translations": {
            "ko": "활성화 포함 $20입니다.",
            "zh": "包括激活费20美元。",
            "ja": "アクティベーションを含めて20ドルです。",
            "vi": "20 đô la bao gồm kích hoạt.",
            "en": "$20 including activation."
          }
        },
        {
          "role": "ai",
          "text": "Do I need to show ID?",
          "translations": {
            "ko": "신분증을 보여줘야 하나요?",
            "zh": "我需要出示身份证明吗？",
            "ja": "IDを見せる必要がありますか？",
            "vi": "Tôi cần phải hiện thị ID không?",
            "en": "Do I need to show ID?"
          }
        },
        {
          "role": "user",
          "text": "Yes, your passport please.",
          "translations": {
            "ko": "네, 여권을 보여주셔야 합니다.",
            "zh": "是的，需要你的护照。",
            "ja": "はい、パスポートをお願いします。",
            "vi": "Có, hộ chiếu của bạn xin vui lòng.",
            "en": "Yes, your passport please."
          }
        },
        {
          "role": "ai",
          "text": "Can you help install it?",
          "translations": {
            "ko": "설치를 도와주실 수 있나요?",
            "zh": "你可以帮我安装吗？",
            "ja": "インストールを手伝ってもらえますか？",
            "vi": "Bạn có thể giúp tôi cài đặt nó không?",
            "en": "Can you help install it?"
          }
        },
        {
          "role": "user",
          "text": "Of course.",
          "translations": {
            "ko": "물론입니다.",
            "zh": "当然可以。",
            "ja": "もちろんです。",
            "vi": "Tất nhiên.",
            "en": "Of course."
          }
        },
        {
          "role": "ai",
          "text": "How long does it take?",
          "translations": {
            "ko": "얼마나 걸리나요?",
            "zh": "需要多长时间？",
            "ja": "それはどのくらい時間がかかりますか？",
            "vi": "Mất bao lâu?",
            "en": "How long does it take?"
          }
        },
        {
          "role": "user",
          "text": "Just a few minutes.",
          "translations": {
            "ko": "몇 분 정도입니다.",
            "zh": "只需要几分钟。",
            "ja": "数分で終わります。",
            "vi": "Chỉ mất vài phút.",
            "en": "Just a few minutes."
          }
        },
        {
          "role": "ai",
          "text": "Is there free Wi-Fi here?",
          "translations": {
            "ko": "여기 무료 Wi-Fi가 있나요?",
            "zh": "这里有免费Wi-Fi吗？",
            "ja": "ここには無料のWi-Fiはありますか？",
            "vi": "Có Wi-Fi miễn phí ở đây không?",
            "en": "Is there free Wi-Fi here?"
          }
        },
        {
          "role": "user",
          "text": "Yes, connect to 'Airport_Free_WiFi'.",
          "translations": {
            "ko": "네, 'Airport_Free_WiFi'에 연결하실 수 있습니다.",
            "zh": "是的，连接到'Airport_Free_WiFi'。",
            "ja": "はい、'Airport_Free_WiFi'に接続してください。",
            "vi": "Có, kết nối với 'Airport_Free_WiFi'.",
            "en": "Yes, connect to 'Airport_Free_WiFi'."
          }
        },
        {
          "role": "ai",
          "text": "Is it secure?",
          "translations": {
            "ko": "안전한가요?",
            "zh": "安全吗？",
            "ja": "セキュアですか？",
            "vi": "Nó có an toàn không?",
            "en": "Is it secure?"
          }
        },
        {
          "role": "user",
          "text": "Yes, but avoid personal info.",
          "translations": {
            "ko": "네, 하지만 개인 정보는 피하세요.",
            "zh": "是的，但避免输入个人信息。",
            "ja": "はい、しかし個人情報の入力は避けてください。",
            "vi": "Có, nhưng hãy tránh thông tin cá nhân.",
            "en": "Yes, but avoid personal info."
          }
        },
        {
          "role": "ai",
          "text": "Thanks for the tips.",
          "translations": {
            "ko": "팁 주셔서 감사합니다.",
            "zh": "谢谢你的建议。",
            "ja": "アドバイスありがとうございます。",
            "vi": "Cảm ơn vì những lời khuyên.",
            "en": "Thanks for the tips."
          }
        },
        {
          "role": "user",
          "text": "You're welcome.",
          "translations": {
            "ko": "천만에요.",
            "zh": "不客气。",
            "ja": "どういたしまして。",
            "vi": "Rất vui được giúp đỡ.",
            "en": "You're welcome."
          }
        },
        {
          "role": "ai",
          "text": "Safe travels!",
          "translations": {
            "ko": "안전한 여행 되세요!",
            "zh": "祝你旅途愉快！",
            "ja": "安全な旅を！",
            "vi": "Chúc bạn một chuyến đi an toàn!",
            "en": "Safe travels!"
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
    }
  ],
  "intermediate": [
    {
      "description": {
        "ko": "호텔 체크인",
        "zh": "在酒店办理入住",
        "ja": "ホテルでのチェックイン",
        "vi": "Đăng ký tại khách sạn"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Good afternoon. Welcome to our hotel. Do you have a reservation?",
          "translations": {
            "ko": "안녕하세요. 저희 호텔에 오신 것을 환영합니다. 예약하신 것이 있으신가요?",
            "zh": "下午好。欢迎来到我们的酒店。您有预订吗？",
            "ja": "こんにちは。当ホテルへようこそ。ご予約はお済みでしょうか？",
            "vi": "Chào buổi chiều. Chào mừng quý khách đến với khách sạn của chúng tôi. Quý khách có đặt phòng trước không?"
          }
        },
        {
          "role": "user",
          "text": "Hi, yes, I have a reservation under Kim.",
          "translations": {
            "ko": "안녕하세요, 예, 제 이름으로 예약했습니다.",
            "zh": "嗨，是的，我预订的名字是Kim。",
            "ja": "はい、キムの名前で予約しています。",
            "vi": "Chào, đúng rồi, tôi có đặt phòng dưới tên Kim."
          }
        },
        {
          "role": "ai",
          "text": "Can I see your ID and a credit card for check-in?",
          "translations": {
            "ko": "체크인을 위해 신분증과 신용카드를 보여주실 수 있으신가요?",
            "zh": "我可以看一下您的身份证和用于办理入住的信用卡吗？",
            "ja": "チェックインのために身分証明書とクレジットカードを見せていただけますか？",
            "vi": "Tôi có thể xem giấy tờ tùy thân và thẻ tín dụng để đăng ký không?"
          }
        },
        {
          "role": "user",
          "text": "Sure, here you go.",
          "translations": {
            "ko": "네, 여기 있습니다.",
            "zh": "当然，给你。",
            "ja": "はい、どうぞ。",
            "vi": "Được, đây bạn."
          }
        },
        {
          "role": "ai",
          "text": "You're staying for three nights, is that correct?",
          "translations": {
            "ko": "3박을 머무르시는 건가요?",
            "zh": "您预计住三晚，对吗？",
            "ja": "3泊のご予定ですよね？",
            "vi": "Quý khách sẽ ở lại ba đêm, đúng không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, that’s right.",
          "translations": {
            "ko": "네, 맞습니다.",
            "zh": "是的，没错。",
            "ja": "はい、その通りです。",
            "vi": "Đúng, đúng vậy."
          }
        },
        {
          "role": "ai",
          "text": "Would you prefer a room on a higher floor?",
          "translations": {
            "ko": "높은 층의 방을 원하시나요?",
            "zh": "您希望住在较高的楼层吗？",
            "ja": "高層階のお部屋をご希望ですか？",
            "vi": "Quý khách có muốn phòng ở tầng cao hơn không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, higher floor would be great.",
          "translations": {
            "ko": "네, 높은 층이 좋겠습니다.",
            "zh": "是的，高楼层会更好。",
            "ja": "はい、高層階がいいですね。",
            "vi": "Đúng, tầng cao hơn thì tốt."
          }
        },
        {
          "role": "ai",
          "text": "Breakfast is served from 7 to 10 in the morning.",
          "translations": {
            "ko": "아침식사는 아침 7시부터 10시까지 제공됩니다.",
            "zh": "早餐供应时间是早上7点到10点。",
            "ja": "朝食は朝7時から10時まで提供しています。",
            "vi": "Bữa sáng được phục vụ từ 7 đến 10 giờ sáng."
          }
        },
        {
          "role": "user",
          "text": "Perfect, thank you for the info.",
          "translations": {
            "ko": "좋습니다, 정보 감사합니다.",
            "zh": "很好，谢谢您的信息。",
            "ja": "それは良いですね、情報をありがとうございます。",
            "vi": "Hoàn hảo, cảm ơn bạn vì thông tin."
          }
        },
        {
          "role": "ai",
          "text": "Here's your room key. You're in room 802.",
          "translations": {
            "ko": "여기 방 키입니다. 802호에 머무르실 예정입니다.",
            "zh": "这是您的房间钥匙。您的房间号是802。",
            "ja": "お部屋の鍵です。802号室になります。",
            "vi": "Đây là chìa khóa phòng của bạn. Bạn ở phòng 802."
          }
        },
        {
          "role": "user",
          "text": "Thanks. Room 802, got it.",
          "translations": {
            "ko": "감사합니다. 802호, 알겠습니다.",
            "zh": "谢谢。802号房，记住了。",
            "ja": "ありがとう。802号室、了解しました。",
            "vi": "Cảm ơn. Phòng 802, tôi nhớ rồi."
          }
        },
        {
          "role": "ai",
          "text": "The elevator is to your left.",
          "translations": {
            "ko": "엘리베이터는 왼쪽에 있습니다.",
            "zh": "电梯在您的左边。",
            "ja": "エレベーターは左側にあります。",
            "vi": "Thang máy ở bên trái của bạn."
          }
        },
        {
          "role": "user",
          "text": "Thanks, I see it.",
          "translations": {
            "ko": "감사합니다, 보입니다.",
            "zh": "谢谢，我看到了。",
            "ja": "ありがとう、見つけました。",
            "vi": "Cảm ơn, tôi đã thấy nó."
          }
        },
        {
          "role": "ai",
          "text": "Let us know if you need anything during your stay.",
          "translations": {
            "ko": "머무시는 동안 필요한 것이 있으면 알려주세요.",
            "zh": "如果您在住宿期间需要任何帮助，请告诉我们。",
            "ja": "滞在中に何か必要なことがあればお知らせください。",
            "vi": "Hãy cho chúng tôi biết nếu quý khách cần gì trong thời gian lưu trú."
          }
        },
        {
          "role": "user",
          "text": "I will. Appreciate it.",
          "translations": {
            "ko": "그렇게 하겠습니다. 감사합니다.",
            "zh": "我会的，感谢。",
            "ja": "そうします。ありがとうございます。",
            "vi": "Tôi sẽ. Cảm ơn."
          }
        },
        {
          "role": "ai",
          "text": "Would you like help with your luggage?",
          "translations": {
            "ko": "짐 도와드릴까요?",
            "zh": "您需要帮忙搬运行李吗？",
            "ja": "荷物のお手伝いはいたしましょうか？",
            "vi": "Quý khách có muốn chúng tôi giúp với hành lý không?"
          }
        },
        {
          "role": "user",
          "text": "No, I’m okay for now. Thanks.",
          "translations": {
            "ko": "아니요, 지금은 괜찮습니다. 감사합니다.",
            "zh": "不，我现在还好。谢谢。",
            "ja": "いえ、今は大丈夫です。ありがとう。",
            "vi": "Không, tôi ổn trong thời gian này. Cảm ơn."
          }
        },
        {
          "role": "ai",
          "text": "Enjoy your stay with us!",
          "translations": {
            "ko": "저희 호텔에서 즐거운 시간 보내세요!",
            "zh": "希望您在我们酒店的住宿愉快！",
            "ja": "当ホテルでの滞在をお楽しみください！",
            "vi": "Chúc quý khách có kỳ nghỉ vui vẻ tại đây!"
          }
        },
        {
          "role": "user",
          "text": "Thank you very much!",
          "translations": {
            "ko": "정말 감사합니다!",
            "zh": "非常感谢！",
            "ja": "ありがとうございます！",
            "vi": "Cảm ơn rất nhiều!"
          }
        }
      ]
    },
    {
      "description": {
        "ko": "관광 중에 길을 묻기",
        "zh": "游览时询问路线",
        "ja": "観光中に道順を尋ねる",
        "vi": "Hỏi đường khi đi tham quan"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Hello! Do you need help finding something?",
          "translations": {
            "ko": "안녕하세요! 무언가를 찾는 데 도움이 필요하신가요?",
            "zh": "你好！需要帮助找什么吗？",
            "ja": "こんにちは！何かお探しですか？",
            "vi": "Xin chào! Quý khách cần giúp đỡ tìm kiếm điều gì không?"
          }
        },
        {
          "role": "user",
          "text": "Hi, could you help me find the art museum?",
          "translations": {
            "ko": "안녕하세요, 미술관을 어떻게 가는지 알려주실 수 있나요?",
            "zh": "嗨，你能帮我找到艺术博物馆吗？",
            "ja": "こんにちは、美術館の場所を教えていただけますか？",
            "vi": "Chào, bạn có thể giúp tôi tìm bảo tàng nghệ thuật không?"
          }
        },
        {
          "role": "ai",
          "text": "The art museum is about ten minutes from here on foot.",
          "translations": {
            "ko": "미술관은 여기서 도보로 약 10분 거리에 있습니다.",
            "zh": "艺术博物馆离这里步行大约十分钟。",
            "ja": "美術館はここから徒歩約10分の場所にあります。",
            "vi": "Bảo tàng nghệ thuật cách đây khoảng mười phút đi bộ."
          }
        },
        {
          "role": "user",
          "text": "That’s perfect, thank you!",
          "translations": {
            "ko": "좋습니다, 감사합니다!",
            "zh": "太好了，谢谢你！",
            "ja": "それは良いですね、ありがとうございます！",
            "vi": "Đó là hoàn hảo, cảm ơn bạn!"
          }
        },
        {
          "role": "ai",
          "text": "Walk straight down this street and turn left at the bank.",
          "translations": {
            "ko": "이 길을 계속 직진하시다가 은행에서 왼쪽으로 돌아주세요.",
            "zh": "沿着这条街直走，在银行处左转。",
            "ja": "この通りをまっすぐ進み、銀行のところで左に曲がってください。",
            "vi": "Đi thẳng xuống con đường này và rẽ trái tại ngân hàng."
          }
        },
        {
          "role": "user",
          "text": "Okay, left at the bank-got it.",
          "translations": {
            "ko": "알겠습니다, 은행에서 왼쪽이군요.",
            "zh": "好的，银行左转-记住了。",
            "ja": "了解です、銀行で左へ曲がるんですね。",
            "vi": "Được, rẽ trái tại ngân hàng - tôi nhớ rồi."
          }
        },
        {
          "role": "ai",
          "text": "You’ll see a big fountain-it's right past that.",
          "translations": {
            "ko": "큰 분수대를 보실 수 있을 건데, 그 바로 뒤에 있습니다.",
            "zh": "您会看到一个大喷泉-就在那个喷泉后面。",
            "ja": "大きな噴水が見えたら、その先にあります。",
            "vi": "Quý khách sẽ thấy một đài phun nước lớn - nó ngay sau đó."
          }
        },
        {
          "role": "user",
          "text": "I think I can spot the fountain, thanks.",
          "translations": {
            "ko": "분수대를 찾을 수 있을 것 같네요, 감사합니다.",
            "zh": "我想我可以找到那个喷泉，谢谢。",
            "ja": "噴水は見つけられそうです、ありがとう。",
            "vi": "Tôi nghĩ tôi có thể nhìn thấy đài phun nước, cảm ơn."
          }
        },
        {
          "role": "ai",
          "text": "Yes, it's open until 6 PM today.",
          "translations": {
            "ko": "네, 오늘은 오후 6시까지 영업합니다.",
            "zh": "是的，今天开放到下午6点。",
            "ja": "はい、今日は午後6時まで営業しています。",
            "vi": "Có, nó mở cửa đến 6 giờ chiều hôm nay."
          }
        },
        {
          "role": "user",
          "text": "Good to know. I’ll go now then.",
          "translations": {
            "ko": "알겠습니다. 그럼 지금 가겠습니다.",
            "zh": "好的，那我现在就去。",
            "ja": "それは良い情報です。それなら今行きます。",
            "vi": "Tốt, biết thế thì tôi sẽ đi ngay bây giờ."
          }
        },
        {
          "role": "ai",
          "text": "There's also a great café nearby if you're hungry.",
          "translations": {
            "ko": "만약 배가 고프시다면 근처에 좋은 카페도 있습니다.",
            "zh": "如果你饿了，附近还有一个很好的咖啡馆。",
            "ja": "もし空腹なら、近くに素晴らしいカフェもありますよ。",
            "vi": "Cũng có một quán cà phê tuyệt vời gần đó nếu bạn đói."
          }
        },
        {
          "role": "user",
          "text": "Great, I might stop by the café later.",
          "translations": {
            "ko": "좋네요, 나중에 그 카페에 들러볼 수도 있겠습니다.",
            "zh": "好的，我可能稍后会去咖啡馆。",
            "ja": "いいですね、後でそのカフェに寄るかもしれません。",
            "vi": "Tốt, tôi có thể ghé quán cà phê sau."
          }
        },
        {
          "role": "ai",
          "text": "Would you like a map of the area?",
          "translations": {
            "ko": "이 지역의 지도가 필요하신가요?",
            "zh": "你需要一张该地区的地图吗？",
            "ja": "この地域の地図はいかがですか？",
            "vi": "Bạn có muốn một bản đồ của khu vực không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, a map would be helpful.",
          "translations": {
            "ko": "네, 지도가 있으면 도움이 될 것 같습니다.",
            "zh": "是的，一张地图会很有帮助。",
            "ja": "はい、地図があると助かります。",
            "vi": "Có, một bản đồ sẽ rất hữu ích."
          }
        },
        {
          "role": "ai",
          "text": "Do you have a translation app or need help with signs?",
          "translations": {
            "ko": "번역 앱을 가지고 계신가요, 아니면 간판을 읽는 데 도움이 필요하신가요?",
            "zh": "你有翻译应用程序或者需要帮助理解标志吗？",
            "ja": "翻訳アプリはお持ちですか？看板の読み方に困っていませんか？",
            "vi": "Bạn có ứng dụng dịch thuật hoặc cần giúp đỡ với các biển báo không?"
          }
        },
        {
          "role": "user",
          "text": "I do, but I might need help with menus.",
          "translations": {
            "ko": "앱은 가지고 있지만, 메뉴를 읽는 데는 도움이 필요할 수도 있습니다.",
            "zh": "我有，但我可能需要帮助理解菜单。",
            "ja": "持ってはいますが、メニューの読み方には困るかもしれません。",
            "vi": "Tôi có, nhưng tôi có thể cần giúp đỡ với thực đơn."
          }
        },
        {
          "role": "ai",
          "text": "Be careful at the main intersection-it gets busy.",
          "translations": {
            "ko": "주요 교차로에서 조심하세요-거기는 붐비니까요.",
            "zh": "在主要的交叉路口要小心，那里很繁忙。",
            "ja": "主要交差点は注意してください、混雑します。",
            "vi": "Hãy cẩn thận ở ngã tư chính - nó rất đông."
          }
        },
        {
          "role": "user",
          "text": "Thanks for the heads-up!",
          "translations": {
            "ko": "알려주셔서 감사합니다!",
            "zh": "谢谢你的提醒！",
            "ja": "注意点を教えてくれてありがとう！",
            "vi": "Cảm ơn bạn đã cảnh báo!"
          }
        },
        {
          "role": "ai",
          "text": "Enjoy your visit!",
          "translations": {
            "ko": "방문 즐겁게 보내세요!",
            "zh": "享受你的访问！",
            "ja": "訪問を楽しんでください！",
            "vi": "Chúc bạn thăm quan vui vẻ!"
          }
        },
        {
          "role": "user",
          "text": "Thank you! Have a nice day!",
          "translations": {
            "ko": "감사합니다! 좋은 하루 보내세요!",
            "zh": "谢谢你！祝你今天过得愉快！",
            "ja": "ありがとう！良い一日を！",
            "vi": "Cảm ơn! Chúc bạn một ngày tốt lành!"
          }
        }
      ]
    },
    {
      "description": {
        "ko": "여행 데스크에서 현지 투어 예약하기",
        "zh": "在旅行咨询台预订本地旅行",
        "ja": "旅行デスクで地元のツアーを予約する",
        "vi": "Đặt một tour du lịch địa phương tại bàn du lịch"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Hello! Are you interested in booking a tour?",
          "translations": {
            "ko": "안녕하세요! 투어를 예약하실 생각이신가요?",
            "zh": "你好！你有兴趣预订旅行吗？",
            "ja": "こんにちは！ツアーの予約に興味はありますか？",
            "vi": "Xin chào! Bạn có muốn đặt một tour không?"
          }
        },
        {
          "role": "user",
          "text": "Hi, yes. I’m looking for something local and fun.",
          "translations": {
            "ko": "안녕하세요, 네. 현지에서 즐길 수 있는 무언가를 찾고 있습니다.",
            "zh": "嗨，是的。我在寻找一些本地的有趣活动。",
            "ja": "こんにちは、はい。地元の楽しいものを探しています。",
            "vi": "Chào, có. Tôi đang tìm một cái gì đó địa phương và vui nhộn."
          }
        },
        {
          "role": "ai",
          "text": "We have a half-day city tour and a full-day nature trip.",
          "translations": {
            "ko": "저희는 반나절 도시 투어와 하루 종일 자연 여행을 제공하고 있습니다.",
            "zh": "我们有半日城市游和全日自然之旅。",
            "ja": "半日の市内観光と一日の自然体験ツアーがあります。",
            "vi": "Chúng tôi có một tour thành phố nửa ngày và một chuyến đi thiên nhiên cả ngày."
          }
        },
        {
          "role": "user",
          "text": "Tell me more about the city tour, please.",
          "translations": {
            "ko": "도시 투어에 대해 좀 더 자세히 알려주세요.",
            "zh": "请告诉我更多关于城市游的信息。",
            "ja": "市内観光についてもっと教えてください。",
            "vi": "Hãy cho tôi biết thêm về tour thành phố, làm ơn."
          }
        },
        {
          "role": "ai",
          "text": "Do you prefer a group tour or something private?",
          "translations": {
            "ko": "그룹 투어를 선호하시나요, 아니면 개인 투어를 원하시나요?",
            "zh": "你更喜欢团体旅行还是私人旅行？",
            "ja": "グループツアーとプライベートツアー、どちらがいいですか？",
            "vi": "Bạn thích tour nhóm hay tour riêng?"
          }
        },
        {
          "role": "user",
          "text": "Group tour is fine-it’s more social.",
          "translations": {
            "ko": "그룹 투어가 좋습니다-사람들과 어울리는 게 좋아요.",
            "zh": "团体旅行就好，更有社交性。",
            "ja": "グループツアーで大丈夫です、それの方が社交的ですから。",
            "vi": "Tour nhóm là tốt - nó thân thiện hơn."
          }
        },
        {
          "role": "ai",
          "text": "Transportation is included in both options.",
          "translations": {
            "ko": "두 옵션 모두 교통편이 포함되어 있습니다.",
            "zh": "这两个选项都包括交通。",
            "ja": "どちらのオプションも交通費は含まれています。",
            "vi": "Cả hai lựa chọn đều bao gồm phương tiện di chuyển."
          }
        },
        {
          "role": "user",
          "text": "Great, that makes things easier.",
          "translations": {
            "ko": "좋네요, 그러면 편리하겠습니다.",
            "zh": "太好了，这样会更方便。",
            "ja": "それは助かります。",
            "vi": "Tốt, điều đó làm mọi thứ dễ dàng hơn."
          }
        },
        {
          "role": "ai",
          "text": "The city tour starts at 9 AM and ends by 1 PM.",
          "translations": {
            "ko": "도시 투어는 오전 9시에 시작해서 오후 1시에 끝납니다.",
            "zh": "城市游从早上9点开始，到下午1点结束。",
            "ja": "市内観光は午前9時に始まり、午後1時に終わります。",
            "vi": "Tour thành phố bắt đầu lúc 9 giờ sáng và kết thúc vào lúc 1 giờ chiều."
          }
        },
        {
          "role": "user",
          "text": "Morning works well for me.",
          "translations": {
            "ko": "오전에 하는 건 저에게 잘 맞습니다.",
            "zh": "早上对我来说很合适。",
            "ja": "朝は私にとって都合が良いです。",
            "vi": "Buổi sáng phù hợp với tôi."
          }
        },
        {
          "role": "ai",
          "text": "The nature trip includes lunch and some hiking.",
          "translations": {
            "ko": "자연 여행은 점심과 등산이 포함되어 있습니다.",
            "zh": "自然之旅包括午餐和一些徒步旅行。",
            "ja": "自然体験ツアーにはランチとハイキングが含まれています。",
            "vi": "Chuyến đi thiên nhiên bao gồm bữa trưa và một số hoạt động leo núi."
          }
        },
        {
          "role": "user",
          "text": "I enjoy hiking, so that sounds good too.",
          "translations": {
            "ko": "저는 등산을 좋아하니, 그것도 좋아 보입니다.",
            "zh": "我喜欢徒步旅行，所以这听起来也很好。",
            "ja": "ハイキングが好きなので、それも良さそうです。",
            "vi": "Tôi thích leo núi, vì vậy điều đó cũng nghe có vẻ tốt."
          }
        },
        {
          "role": "ai",
          "text": "Would you like to see pictures or reviews?",
          "translations": {
            "ko": "사진이나 리뷰를 보시겠어요?",
            "zh": "你想看看图片或者评论吗？",
            "ja": "写真やレビューを見てみたいですか？",
            "vi": "Bạn có muốn xem hình ảnh hoặc đánh giá không?"
          }
        },
        {
          "role": "user",
          "text": "Sure, I'd love to see some photos.",
          "translations": {
            "ko": "네, 사진 좀 보여주시겠어요.",
            "zh": "当然，我很愿意看一些照片。",
            "ja": "はい、写真を見てみたいです。",
            "vi": "Chắc chắn, tôi rất muốn xem một số hình ảnh."
          }
        },
        {
          "role": "ai",
          "text": "We can book for tomorrow or any day this week.",
          "translations": {
            "ko": "내일이나 이번 주 어느 날이든 예약할 수 있습니다.",
            "zh": "我们可以预订明天或这周的任何一天。",
            "ja": "明日か、今週のいつでも予約できます。",
            "vi": "Chúng tôi có thể đặt cho ngày mai hoặc bất kỳ ngày nào trong tuần này."
          }
        },
        {
          "role": "user",
          "text": "Tomorrow would be perfect.",
          "translations": {
            "ko": "내일이 딱 좋을 것 같습니다.",
            "zh": "明天会很完美。",
            "ja": "明日が最適です。",
            "vi": "Ngày mai sẽ là hoàn hảo."
          }
        },
        {
          "role": "ai",
          "text": "A deposit is required to confirm your spot.",
          "translations": {
            "ko": "예약을 확정하려면 예약금이 필요합니다.",
            "zh": "需要支付定金来确认你的预订。",
            "ja": "ご予約の確定にはデポジットが必要です。",
            "vi": "Cần đặt cọc để xác nhận vị trí của bạn."
          }
        },
        {
          "role": "user",
          "text": "No problem. I’ll pay the deposit now.",
          "translations": {
            "ko": "문제 없어요. 지금 보증금을 낼게요.",
            "zh": "没问题，我现在就付押金。",
            "ja": "問題ありません。今、デポジットを支払います。",
            "vi": "Không sao. Tôi sẽ trả tiền đặt cọc ngay bây giờ."
          }
        },
        {
          "role": "ai",
          "text": "Let me know which one you'd prefer!",
          "translations": {
            "ko": "어떤 걸 선호하는지 알려주세요!",
            "zh": "请告诉我你更喜欢哪一个！",
            "ja": "どちらがお好みか教えてください！",
            "vi": "Hãy cho tôi biết bạn thích cái nào!"
          }
        },
        {
          "role": "user",
          "text": "I’ll go with the city tour. Thanks!",
          "translations": {
            "ko": "시티 투어로 할게요. 감사합니다!",
            "zh": "我选择城市游。谢谢！",
            "ja": "シティツアーにします。ありがとう！",
            "vi": "Tôi sẽ chọn tour tham quan thành phố. Cảm ơn!"
          }
        }
      ]
    },
    {
      "description": {
        "ko": "공항 식당에서 음식 주문하기",
        "zh": "在机场餐厅点餐",
        "ja": "空港のレストランで食事を注文する",
        "vi": "Đặt món ăn tại nhà hàng sân bay"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Welcome! Will this be dine-in or takeout?",
          "translations": {
            "ko": "환영합니다! 매장에서 드시겠습니까, 아니면 포장하실 건가요?",
            "zh": "欢迎光临！请问是堂食还是外带？",
            "ja": "いらっしゃいませ！こちらは店内でお召し上がりですか、それともテイクアウトですか？",
            "vi": "Chào mừng! Bạn dự định ăn tại đây hay mang đi?"
          }
        },
        {
          "role": "user",
          "text": "Dine-in, please. I have a bit of time.",
          "translations": {
            "ko": "매장에서 먹을게요. 시간이 좀 있어요.",
            "zh": "堂食，请。我有一些时间。",
            "ja": "店内でお願いします。少し時間があります。",
            "vi": "Tôi sẽ ăn tại đây. Tôi có chút thời gian."
          }
        },
        {
          "role": "ai",
          "text": "Here’s our menu-can I recommend a popular dish?",
          "translations": {
            "ko": "메뉴판입니다-인기 메뉴를 추천해 드릴까요?",
            "zh": "这是我们的菜单-我可以推荐一道人气菜肴吗？",
            "ja": "こちらがメニューですが、人気の料理をおすすめしますか？",
            "vi": "Đây là thực đơn của chúng tôi - có món nào tôi có thể giới thiệu không?"
          }
        },
        {
          "role": "user",
          "text": "Sure. What’s the most popular here?",
          "translations": {
            "ko": "그럼요. 여기서 가장 인기 있는 메뉴는 무엇인가요?",
            "zh": "好的。这里最受欢迎的是什么？",
            "ja": "はい、ここで一番人気のものは何ですか？",
            "vi": "Được, món nào là phổ biến nhất ở đây?"
          }
        },
        {
          "role": "ai",
          "text": "Would you like a drink with your meal?",
          "translations": {
            "ko": "식사와 함께 음료를 드시겠습니까?",
            "zh": "您想要在餐中加点饮料吗？",
            "ja": "お食事にドリンクはいかがですか？",
            "vi": "Bạn có muốn thêm đồ uống vào bữa ăn của mình không?"
          }
        },
        {
          "role": "user",
          "text": "I’ll take a lemonade, thanks.",
          "translations": {
            "ko": "레모네이드 주세요, 감사합니다.",
            "zh": "我要一杯柠檬汽水，谢谢。",
            "ja": "レモネードをお願いします、ありがとう。",
            "vi": "Tôi sẽ gọi một ly nước chanh, cảm ơn."
          }
        },
        {
          "role": "ai",
          "text": "We also have vegetarian and gluten-free options.",
          "translations": {
            "ko": "우리는 채식주의자와 글루텐-프리 옵션도 있습니다.",
            "zh": "我们还有素食和无麸质的选择。",
            "ja": "ベジタリアンやグルテンフリーのオプションもございます。",
            "vi": "Chúng tôi cũng có các món ăn chay và không chứa gluten."
          }
        },
        {
          "role": "user",
          "text": "Good to know-I’ll stick with the vegetarian option.",
          "translations": {
            "ko": "알겠습니다-채식주의자 옵션으로 할게요.",
            "zh": "很好，我会选择素食选项。",
            "ja": "それは良い情報です、ベジタリアンのオプションにします。",
            "vi": "Thông tin hữu ích - tôi sẽ chọn món ăn chay."
          }
        },
        {
          "role": "ai",
          "text": "Do you have any food allergies I should know about?",
          "translations": {
            "ko": "알아두어야 할 음식 알레르기가 있나요?",
            "zh": "你有食物过敏我应该知道的吗？",
            "ja": "食物アレルギーはありますか？",
            "vi": "Bạn có dị ứng với thức ăn nào mà tôi cần biết không?"
          }
        },
        {
          "role": "user",
          "text": "No allergies. Thanks for checking.",
          "translations": {
            "ko": "알레르기는 없어요. 확인해 주셔서 감사합니다.",
            "zh": "没有过敏。谢谢你的关心。",
            "ja": "アレルギーはありません。確認してくれてありがとう。",
            "vi": "Không dị ứng. Cảm ơn bạn đã kiểm tra."
          }
        },
        {
          "role": "ai",
          "text": "Would you like to add dessert to your order?",
          "translations": {
            "ko": "주문에 디저트를 추가하시겠습니까?",
            "zh": "您想要在您的订单中添加甜点吗？",
            "ja": "デザートを追加しますか？",
            "vi": "Bạn có muốn thêm món tráng miệng vào đơn hàng của mình không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I’ll have the chocolate cake too.",
          "translations": {
            "ko": "네, 초콜릿 케이크도 주세요.",
            "zh": "是的，我也要巧克力蛋糕。",
            "ja": "はい、チョコレートケーキもお願いします。",
            "vi": "Có, tôi sẽ gọi thêm bánh sô cô la."
          }
        },
        {
          "role": "ai",
          "text": "Your total comes to $18.50.",
          "translations": {
            "ko": "총 금액은 18.50달러입니다.",
            "zh": "您的总额为18.50美元。",
            "ja": "合計は18.50ドルになります。",
            "vi": "Tổng cộng của bạn là 18,50 đô."
          }
        },
        {
          "role": "user",
          "text": "Here’s my card.",
          "translations": {
            "ko": "카드입니다.",
            "zh": "这是我的卡。",
            "ja": "カードをどうぞ。",
            "vi": "Đây là thẻ của tôi."
          }
        },
        {
          "role": "ai",
          "text": "It'll be ready in about 10 minutes.",
          "translations": {
            "ko": "약 10분 후에 준비될 것입니다.",
            "zh": "大约10分钟后就可以准备好。",
            "ja": "約10分でご用意できます。",
            "vi": "Món ăn sẽ sẵn sàng trong khoảng 10 phút."
          }
        },
        {
          "role": "user",
          "text": "That’s perfect. I’ll wait over here.",
          "translations": {
            "ko": "딱 좋아요. 여기서 기다릴게요.",
            "zh": "那太好了。我就在这里等。",
            "ja": "それで大丈夫です。ここで待ちます。",
            "vi": "Hoàn hảo. Tôi sẽ chờ ở đây."
          }
        },
        {
          "role": "ai",
          "text": "You’ll hear your number when it’s called.",
          "translations": {
            "ko": "번호가 불릴 때 들을 수 있을 거예요.",
            "zh": "当叫到您的号码时，您会听到。",
            "ja": "お呼び出し番号が呼ばれると聞こえます。",
            "vi": "Bạn sẽ nghe thấy số của mình khi nó được gọi."
          }
        },
        {
          "role": "user",
          "text": "Got it. I’ll keep an ear out.",
          "translations": {
            "ko": "알겠습니다. 귀를 기울여 들을게요.",
            "zh": "明白了。我会留意的。",
            "ja": "了解しました。耳を傾けておきます。",
            "vi": "Được rồi. Tôi sẽ chú ý nghe."
          }
        },
        {
          "role": "ai",
          "text": "Enjoy your meal and safe travels!",
          "translations": {
            "ko": "식사 맛있게 하시고, 안전한 여행 되세요!",
            "zh": "享用您的餐点，祝您旅途平安！",
            "ja": "お食事を楽しんで、安全な旅を！",
            "vi": "Thưởng thức bữa ăn và chúc bạn có chuyến đi an toàn!"
          }
        },
        {
          "role": "user",
          "text": "Thanks a lot. I’m heading to Tokyo!",
          "translations": {
            "ko": "정말 감사합니다. 도쿄로 가는 길이에요!",
            "zh": "非常感谢。我要去东京！",
            "ja": "どうもありがとう。東京に向かいます！",
            "vi": "Cảm ơn rất nhiều. Tôi sắp bay đến Tokyo!"
          }
        }
      ]
    },
    {
      "description": {
        "ko": "공항에서 분실 짐 처리하기",
        "zh": "在机场处理丢失的行李",
        "ja": "空港での紛失した荷物の対応",
        "vi": "Xử lý hành lý bị mất tại sân bay"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "I'm sorry to hear that. What flight were you on?",
          "translations": {
            "ko": "그런 일이 있었다니 안타깝네요. 어떤 비행기를 타셨나요?",
            "zh": "我很抱歉听到这个。你乘坐的是哪个航班？",
            "ja": "それは残念です。何便に搭乗されましたか？",
            "vi": "Tôi rất tiếc khi nghe điều đó. Bạn đi chuyến bay nào?"
          }
        },
        {
          "role": "user",
          "text": "Hi, my bag didn’t show up on the carousel.",
          "translations": {
            "ko": "안녕하세요, 제 가방이 수하물 수취대에 나오지 않았어요.",
            "zh": "嗨，我的行李没有在传送带上出现。",
            "ja": "こんにちは、私のバッグがカルーセルに出てきませんでした。",
            "vi": "Chào, hành lý của tôi không xuất hiện trên băng chuyền."
          }
        },
        {
          "role": "ai",
          "text": "Can you describe your luggage for me?",
          "translations": {
            "ko": "짐을 어떻게 묘사하실 수 있나요?",
            "zh": "你能描述一下你的行李吗？",
            "ja": "あなたの荷物を説明していただけますか？",
            "vi": "Bạn có thể mô tả hành lý của mình cho tôi không?"
          }
        },
        {
          "role": "user",
          "text": "It’s a large black suitcase with a red tag.",
          "translations": {
            "ko": "큰 검은색 여행 가방이고, 빨간색 태그가 달려 있어요.",
            "zh": "它是一个带有红色标签的大黑色行李箱。",
            "ja": "大きな黒いスーツケースで、赤いタグがついています。",
            "vi": "Đó là một chiếc vali lớn màu đen với thẻ đỏ."
          }
        },
        {
          "role": "ai",
          "text": "Do you have the baggage claim ticket?",
          "translations": {
            "ko": "수하물 수취 티켓이 있나요?",
            "zh": "你有行李领取票吗？",
            "ja": "手荷物受取票はお持ちですか？",
            "vi": "Bạn có vé yêu cầu hành lý không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, here it is.",
          "translations": {
            "ko": "네, 여기 있습니다.",
            "zh": "是的，就在这里。",
            "ja": "はい、ここにあります。",
            "vi": "Có, đây rồi."
          }
        },
        {
          "role": "ai",
          "text": "We'll file a report and start tracking it right away.",
          "translations": {
            "ko": "보고서를 작성하고 바로 추적을 시작하겠습니다.",
            "zh": "我们会立即报告并开始追踪。",
            "ja": "報告書を作成し、すぐに追跡を開始します。",
            "vi": "Chúng tôi sẽ lập báo cáo và bắt đầu theo dõi ngay lập tức."
          }
        },
        {
          "role": "user",
          "text": "Thanks. I hope it turns up soon.",
          "translations": {
            "ko": "감사합니다. 빨리 찾아지길 바랍니다.",
            "zh": "谢谢。我希望它能尽快找到。",
            "ja": "ありがとう。早く見つかるといいですね。",
            "vi": "Cảm ơn. Tôi hy vọng nó sẽ xuất hiện sớm."
          }
        },
        {
          "role": "ai",
          "text": "Do you want us to deliver it to your hotel?",
          "translations": {
            "ko": "호텔로 배달해 드릴까요?",
            "zh": "你需要我们把它送到你的酒店吗？",
            "ja": "ホテルまでお届けしましょうか？",
            "vi": "Bạn có muốn chúng tôi giao hàng đến khách sạn của bạn không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, please. That would be great.",
          "translations": {
            "ko": "네, 부탁드립니다. 그게 좋겠습니다.",
            "zh": "是的，请这样做。那太好了。",
            "ja": "はい、お願いします。それが一番です。",
            "vi": "Có, xin vui lòng. Điều đó thật tuyệt."
          }
        },
        {
          "role": "ai",
          "text": "Please provide a local address and contact number.",
          "translations": {
            "ko": "현지 주소와 연락처를 알려주세요.",
            "zh": "请提供一个当地地址和联系电话。",
            "ja": "現地の住所と連絡先を教えてください。",
            "vi": "Vui lòng cung cấp địa chỉ địa phương và số điện thoại liên hệ."
          }
        },
        {
          "role": "user",
          "text": "I’m staying at City Grand Hotel. Here’s the number.",
          "translations": {
            "ko": "시티 그랜드 호텔에 머무르고 있습니다. 이게 번호입니다.",
            "zh": "我住在城市大酒店。这是电话号码。",
            "ja": "シティグランドホテルに滞在しています。これが電話番号です。",
            "vi": "Tôi đang ở khách sạn City Grand. Đây là số điện thoại."
          }
        },
        {
          "role": "ai",
          "text": "You’ll receive a confirmation by email shortly.",
          "translations": {
            "ko": "곧 이메일로 확인 메시지를 받으실 겁니다.",
            "zh": "你会很快收到一封确认邮件。",
            "ja": "間もなくメールで確認をお送りします。",
            "vi": "Bạn sẽ nhận được xác nhận qua email ngay lập tức."
          }
        },
        {
          "role": "user",
          "text": "Okay, I’ll look out for the email.",
          "translations": {
            "ko": "알겠습니다, 이메일을 확인하겠습니다.",
            "zh": "好的，我会注意查收邮件。",
            "ja": "了解です、メールを待っています。",
            "vi": "Được, tôi sẽ chờ email."
          }
        },
        {
          "role": "ai",
          "text": "We’ll update you within 24 hours.",
          "translations": {
            "ko": "24시간 이내에 업데이트 해드리겠습니다.",
            "zh": "我们会在24小时内更新你。",
            "ja": "24時間以内に更新情報をお知らせします。",
            "vi": "Chúng tôi sẽ cập nhật cho bạn trong vòng 24 giờ."
          }
        },
        {
          "role": "user",
          "text": "I appreciate the help.",
          "translations": {
            "ko": "도움 주셔서 감사합니다.",
            "zh": "我很感谢你的帮助。",
            "ja": "助けていただきありがとうございます。",
            "vi": "Tôi rất biết ơn sự giúp đỡ."
          }
        },
        {
          "role": "ai",
          "text": "Thank you for your patience.",
          "translations": {
            "ko": "기다려 주셔서 감사합니다.",
            "zh": "感谢你的耐心等待。",
            "ja": "お待たせして申し訳ありません。",
            "vi": "Cảm ơn sự kiên nhẫn của bạn."
          }
        },
        {
          "role": "user",
          "text": "No worries. These things happen.",
          "translations": {
            "ko": "걱정하지 마세요. 이런 일은 종종 있습니다.",
            "zh": "没关系。这种事情常有。",
            "ja": "心配無用です。これらのことは起こります。",
            "vi": "Không sao. Những điều như thế này thường xảy ra."
          }
        },
        {
          "role": "ai",
          "text": "Let me know if you have further concerns.",
          "translations": {
            "ko": "추가로 궁금한 사항이 있으면 알려주세요.",
            "zh": "如果你有其他的问题，请告诉我。",
            "ja": "他にご不明な点があればお知らせください。",
            "vi": "Hãy cho tôi biết nếu bạn có thêm mối quan tâm."
          }
        },
        {
          "role": "user",
          "text": "Will do. Thanks again!",
          "translations": {
            "ko": "알겠습니다. 다시 한 번 감사드립니다!",
            "zh": "好的，再次感谢！",
            "ja": "了解しました。再度、ありがとうございます！",
            "vi": "Sẽ làm vậy. Cảm ơn một lần nữa!"
          }
        }
      ]
    },
    {
      "description": {
        "ko": "도시 탐험을 위한 자전거 대여",
        "zh": "租一辆自行车去探索城市",
        "ja": "都市探索のための自転車のレンタル",
        "vi": "Thuê xe đạp để khám phá thành phố"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Hi there! Would you like to rent a bike today?",
          "translations": {
            "ko": "안녕하세요! 오늘 자전거를 대여하실 건가요?",
            "zh": "嗨！你今天想租一辆自行车吗？",
            "ja": "こんにちは！今日は自転車をレンタルされますか？",
            "vi": "Chào bạn! Bạn có muốn thuê xe đạp hôm nay không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I’d love to rent one for the day.",
          "translations": {
            "ko": "네, 하루 동안 대여하고 싶습니다.",
            "zh": "是的，我想租一辆一整天。",
            "ja": "はい、一日レンタルしたいと思います。",
            "vi": "Có, tôi rất muốn thuê một chiếc cho cả ngày."
          }
        },
        {
          "role": "ai",
          "text": "Do you prefer a standard or electric bike?",
          "translations": {
            "ko": "일반 자전거와 전기 자전거 중 어떤 것을 선호하시나요?",
            "zh": "你更喜欢标准自行车还是电动自行车？",
            "ja": "スタンダードな自転車と電動自転車のどちらがよろしいですか？",
            "vi": "Bạn thích xe đạp tiêu chuẩn hay xe đạp điện?"
          }
        },
        {
          "role": "user",
          "text": "Electric would be great-it’s hot out.",
          "translations": {
            "ko": "전기 자전거가 좋겠습니다-날씨가 더워요.",
            "zh": "电动的会很好——外面很热。",
            "ja": "電動がいいですね、暑いからです。",
            "vi": "Xe điện sẽ tốt hơn - trời ngoài kia rất nóng."
          }
        },
        {
          "role": "ai",
          "text": "We rent by the hour or by the day.",
          "translations": {
            "ko": "시간당 또는 하루 동안 대여 가능합니다.",
            "zh": "我们可以按小时或按天租赁。",
            "ja": "時間単位または一日単位でレンタルしています。",
            "vi": "Chúng tôi cho thuê theo giờ hoặc theo ngày."
          }
        },
        {
          "role": "user",
          "text": "Let’s go with a day rental.",
          "translations": {
            "ko": "하루 대여로 하겠습니다.",
            "zh": "我选择按天租赁。",
            "ja": "一日レンタルにしましょう。",
            "vi": "Hãy thuê theo ngày."
          }
        },
        {
          "role": "ai",
          "text": "You’ll need to show ID and fill out a form.",
          "translations": {
            "ko": "신분증을 보여주시고 양식을 작성해야 합니다.",
            "zh": "你需要出示身份证并填写一份表格。",
            "ja": "IDの提示とフォームの記入が必要です。",
            "vi": "Bạn cần phải hiện thẻ căn cước và điền vào một biểu mẫu."
          }
        },
        {
          "role": "user",
          "text": "Here’s my ID.",
          "translations": {
            "ko": "제 신분증입니다.",
            "zh": "这是我的身份证。",
            "ja": "こちらが私のIDです。",
            "vi": "Đây là thẻ căn cước của tôi."
          }
        },
        {
          "role": "ai",
          "text": "Helmets and locks are included with every rental.",
          "translations": {
            "ko": "모든 대여에 헬멧과 자물쇠가 포함됩니다.",
            "zh": "每次租赁都包括头盔和锁。",
            "ja": "ヘルメットとロックはすべてのレンタルに含まれています。",
            "vi": "Mũ bảo hiểm và khóa đều được bao gồm trong mỗi lần thuê."
          }
        },
        {
          "role": "user",
          "text": "Perfect. Thanks for including those.",
          "translations": {
            "ko": "완벽합니다. 그것들을 포함해 주셔서 감사합니다.",
            "zh": "太好了。谢谢你们提供这些。",
            "ja": "完璧です。それらを含めてくれてありがとう。",
            "vi": "Hoàn hảo. Cảm ơn đã bao gồm những thứ đó."
          }
        },
        {
          "role": "ai",
          "text": "Do you need a map or suggested routes?",
          "translations": {
            "ko": "지도나 추천 경로가 필요하신가요?",
            "zh": "你需要地图或建议的路线吗？",
            "ja": "地図や推奨ルートが必要ですか？",
            "vi": "Bạn có cần bản đồ hoặc các tuyến đường đề xuất không?"
          }
        },
        {
          "role": "user",
          "text": "A map would be super helpful.",
          "translations": {
            "ko": "지도가 정말 도움이 될 것 같습니다.",
            "zh": "一张地图会非常有帮助。",
            "ja": "地図があるととても助かります。",
            "vi": "Một bản đồ sẽ rất hữu ích."
          }
        },
        {
          "role": "ai",
          "text": "Avoid main roads-bike lanes are safer.",
          "translations": {
            "ko": "주요 도로를 피하고 자전거 차선을 이용하시는 것이 안전합니다.",
            "zh": "避开主要道路——自行车道更安全。",
            "ja": "主要道路は避けて、自転車専用レーンが安全です。",
            "vi": "Tránh các con đường chính - làn đường dành cho xe đạp an toàn hơn."
          }
        },
        {
          "role": "user",
          "text": "Good tip. I’ll stay in the bike lanes.",
          "translations": {
            "ko": "좋은 팁입니다. 자전거 차선을 이용하겠습니다.",
            "zh": "好的，我会在自行车道行驶。",
            "ja": "良いアドバイスです。自転車専用レーンを使います。",
            "vi": "Mẹo hay. Tôi sẽ đi trên làn đường dành cho xe đạp."
          }
        },
        {
          "role": "ai",
          "text": "Return the bike before 6 PM, please.",
          "translations": {
            "ko": "오후 6시 전에 자전거를 반납해 주세요.",
            "zh": "请在下午6点前归还自行车。",
            "ja": "18時前に自転車を返してください。",
            "vi": "Vui lòng trả xe đạp trước 6 giờ chiều."
          }
        },
        {
          "role": "user",
          "text": "Got it. I’ll be back before six.",
          "translations": {
            "ko": "알겠습니다. 6시 전에 돌아올게요.",
            "zh": "明白了。我会在六点前回来。",
            "ja": "了解です。6時前に戻ります。",
            "vi": "Tôi hiểu. Tôi sẽ trở lại trước sáu giờ."
          }
        },
        {
          "role": "ai",
          "text": "Let me adjust the seat height for you.",
          "translations": {
            "ko": "좌석 높이를 조정해 드릴게요.",
            "zh": "让我为你调整一下座椅的高度。",
            "ja": "シートの高さを調整しましょう。",
            "vi": "Để tôi điều chỉnh độ cao ghế cho bạn."
          }
        },
        {
          "role": "user",
          "text": "Thanks. That feels more comfortable.",
          "translations": {
            "ko": "감사합니다. 훨씬 편하네요.",
            "zh": "谢谢。这样感觉舒服多了。",
            "ja": "ありがとう。これで快適です。",
            "vi": "Cảm ơn. Cảm thấy thoải mái hơn."
          }
        },
        {
          "role": "ai",
          "text": "Enjoy the ride and let us know if you need help!",
          "translations": {
            "ko": "즐거운 주행 되시고, 도움이 필요하시면 알려주세요!",
            "zh": "享受骑行，如果需要帮助请告诉我们！",
            "ja": "ライドを楽しんで、何か助けが必要ならお知らせください！",
            "vi": "Thưởng thức chuyến đi và cho chúng tôi biết nếu bạn cần giúp đỡ!"
          }
        },
        {
          "role": "user",
          "text": "Will do! Looking forward to it.",
          "translations": {
            "ko": "알겠습니다! 기대되네요.",
            "zh": "好的！我很期待。",
            "ja": "分かりました！楽しみにしています。",
            "vi": "Tôi sẽ làm vậy! Mong chờ điều đó."
          }
        }
      ]
    },
    {
      "description": {
        "ko": "현지 식당에 예약하기",
        "zh": "在当地餐厅预订位置",
        "ja": "地元のレストランで予約をする",
        "vi": "Đặt chỗ tại một nhà hàng địa phương"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Good evening. How can I help you?",
          "translations": {
            "ko": "좋은 저녁입니다. 어떻게 도와드릴까요?",
            "zh": "晚上好。有什么可以帮助您的？",
            "ja": "こんばんは。何かお手伝いできることはありますか？",
            "vi": "Chào buổi tối. Tôi có thể giúp gì cho bạn?"
          }
        },
        {
          "role": "user",
          "text": "Hi, I’d like to make a reservation.",
          "translations": {
            "ko": "안녕하세요, 예약을 하고 싶습니다.",
            "zh": "嗨，我想预订一个位置。",
            "ja": "予約をしたいのですが。",
            "vi": "Xin chào, tôi muốn đặt chỗ."
          }
        },
        {
          "role": "ai",
          "text": "Would you like a table inside or on the terrace?",
          "translations": {
            "ko": "실내 테이블과 테라스 중 어디를 원하시나요?",
            "zh": "您想在室内还是露台上的桌子？",
            "ja": "店内のテーブルとテラスのどちらがよろしいですか？",
            "vi": "Bạn muốn một bàn bên trong hay trên sân thượng?"
          }
        },
        {
          "role": "user",
          "text": "Terrace, if available, please.",
          "translations": {
            "ko": "가능하다면 테라스를 원합니다.",
            "zh": "如果有的话，我想要露台上的。",
            "ja": "可能であればテラスをお願いします。",
            "vi": "Sân thượng, nếu có, vui lòng."
          }
        },
        {
          "role": "ai",
          "text": "For how many people should I book?",
          "translations": {
            "ko": "몇 명을 위해 예약해 드릴까요?",
            "zh": "我应该为多少人预订？",
            "ja": "何名様で予約を入れますか？",
            "vi": "Tôi nên đặt cho bao nhiêu người?"
          }
        },
        {
          "role": "user",
          "text": "It’s for two people.",
          "translations": {
            "ko": "두 명입니다.",
            "zh": "是两个人。",
            "ja": "2人です。",
            "vi": "Dành cho hai người."
          }
        },
        {
          "role": "ai",
          "text": "Do you have a time in mind?",
          "translations": {
            "ko": "원하시는 시간이 있나요?",
            "zh": "您有预定的时间吗？",
            "ja": "ご希望の時間はありますか？",
            "vi": "Bạn có thời gian nào cụ thể không?"
          }
        },
        {
          "role": "user",
          "text": "7:30 PM would be ideal.",
          "translations": {
            "ko": "오후 7시 30분이 좋겠습니다.",
            "zh": "晚上7:30最好。",
            "ja": "19:30が理想的です。",
            "vi": "7 giờ 30 tối sẽ là lý tưởng."
          }
        },
        {
          "role": "ai",
          "text": "We recommend trying our seasonal special.",
          "translations": {
            "ko": "계절 특선 메뉴를 추천드립니다.",
            "zh": "我们推荐您尝试我们的季节特色菜。",
            "ja": "当店の季節の特別メニューをお試しいただくことをお勧めします。",
            "vi": "Chúng tôi khuyên bạn nên thử món đặc biệt theo mùa của chúng tôi."
          }
        },
        {
          "role": "user",
          "text": "Sounds good-I’ll try the special.",
          "translations": {
            "ko": "좋아요-특선 메뉴를 시도해 볼게요.",
            "zh": "听起来不错-我会尝试特色菜。",
            "ja": "いいですね、特別メニューを試してみます。",
            "vi": "Nghe có vẻ tốt - Tôi sẽ thử món đặc biệt."
          }
        },
        {
          "role": "ai",
          "text": "Do you have any dietary restrictions?",
          "translations": {
            "ko": "식사 제한 사항이 있나요?",
            "zh": "您有任何饮食限制吗？",
            "ja": "食事制限は何かありますか？",
            "vi": "Bạn có bất kỳ hạn chế chế độ ăn nào không?"
          }
        },
        {
          "role": "user",
          "text": "No restrictions. Thanks for asking.",
          "translations": {
            "ko": "제한 사항 없습니다. 물어봐 주셔서 감사합니다.",
            "zh": "没有限制。谢谢你的询问。",
            "ja": "制限はありません。尋ねていただきありがとうございます。",
            "vi": "Không có hạn chế. Cảm ơn bạn đã hỏi."
          }
        },
        {
          "role": "ai",
          "text": "Would you like to receive a confirmation by text?",
          "translations": {
            "ko": "문자로 예약 확인을 받고 싶으신가요?",
            "zh": "您想通过短信接收确认信息吗？",
            "ja": "確認のためにテキストを受け取りたいですか？",
            "vi": "Bạn có muốn nhận xác nhận qua tin nhắn không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, text works well for me.",
          "translations": {
            "ko": "네, 문자가 편합니다.",
            "zh": "是的，短信对我来说很方便。",
            "ja": "はい、テキストで大丈夫です。",
            "vi": "Vâng, tin nhắn rất tiện cho tôi."
          }
        },
        {
          "role": "ai",
          "text": "We’ll hold your table for 15 minutes after your time.",
          "translations": {
            "ko": "예약 시간 후 15분 동안 테이블을 유지해 드립니다.",
            "zh": "我们会在您预定的时间后保留您的桌子15分钟。",
            "ja": "ご予約時間から15分後までテーブルをお取り置きします。",
            "vi": "Chúng tôi sẽ giữ bàn của bạn trong 15 phút sau thời gian của bạn."
          }
        },
        {
          "role": "user",
          "text": "That’s fair. I’ll be on time.",
          "translations": {
            "ko": "그럼요. 제 시간에 도착하겠습니다.",
            "zh": "这很公平。我会准时到达。",
            "ja": "納得です。時間通りに行きます。",
            "vi": "Điều đó công bằng. Tôi sẽ đúng giờ."
          }
        },
        {
          "role": "ai",
          "text": "Thank you. Your table is reserved.",
          "translations": {
            "ko": "감사합니다. 테이블이 예약되었습니다.",
            "zh": "谢谢您。您的桌子已经预订好了。",
            "ja": "ありがとうございます。テーブルを予約しました。",
            "vi": "Cảm ơn. Bàn của bạn đã được đặt."
          }
        },
        {
          "role": "user",
          "text": "Great. Thank you!",
          "translations": {
            "ko": "좋아요. 감사합니다!",
            "zh": "太好了。谢谢你！",
            "ja": "すばらしい。ありがとう！",
            "vi": "Tuyệt. Cảm ơn bạn!"
          }
        },
        {
          "role": "ai",
          "text": "Looking forward to seeing you then!",
          "translations": {
            "ko": "그 때 뵙기를 기대하겠습니다!",
            "zh": "期待那时见到您！",
            "ja": "それでは、お待ちしております！",
            "vi": "Mong chờ gặp bạn lúc đó!"
          }
        },
        {
          "role": "user",
          "text": "See you tonight!",
          "translations": {
            "ko": "오늘 밤에 뵙겠습니다!",
            "zh": "今晚见！",
            "ja": "今夜お会いしましょう！",
            "vi": "Hẹn gặp bạn tối nay!"
          }
        }
      ]
    },
    {
      "description": {
        "ko": "기차역에서 티켓 구매하기",
        "zh": "在火车站购票",
        "ja": "電車の駅でチケットを買う",
        "vi": "Mua vé tại ga tàu"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Hello. Where are you traveling to today?",
          "translations": {
            "ko": "안녕하세요. 오늘 어디로 가시나요?",
            "zh": "你好。您今天要去哪里？",
            "ja": "こんにちは。今日はどこへ旅行しますか？",
            "vi": "Xin chào. Bạn đang đi đâu hôm nay?"
          }
        },
        {
          "role": "user",
          "text": "Hi, I need a ticket to Berlin.",
          "translations": {
            "ko": "안녕하세요, 베를린 행 티켓이 필요합니다.",
            "zh": "嗨，我需要一张去柏林的车票。",
            "ja": "こんにちは、ベルリン行きのチケットが必要です。",
            "vi": "Xin chào, tôi cần một vé đi Berlin."
          }
        },
        {
          "role": "ai",
          "text": "Would you prefer first class or standard?",
          "translations": {
            "ko": "일등석과 일반석 중 어느 것을 선호하시나요?",
            "zh": "您更喜欢头等舱还是普通舱？",
            "ja": "ファーストクラスとスタンダード、どちらがよろしいですか？",
            "vi": "Anh/chị có muốn chọn vé hạng nhất hay hạng phổ thông?"
          }
        },
        {
          "role": "user",
          "text": "Standard is fine, thanks.",
          "translations": {
            "ko": "일반석이 괜찮습니다, 감사합니다.",
            "zh": "普通舱就可以了，谢谢。",
            "ja": "スタンダードで大丈夫です、ありがとう。",
            "vi": "Hạng phổ thông là đủ rồi, cảm ơn."
          }
        },
        {
          "role": "ai",
          "text": "The next train leaves in 30 minutes.",
          "translations": {
            "ko": "다음 기차는 30분 후에 출발합니다.",
            "zh": "下一趟火车30分钟后发车。",
            "ja": "次の電車は30分後に出発します。",
            "vi": "Chuyến tàu tiếp theo sẽ khởi hành sau 30 phút nữa."
          }
        },
        {
          "role": "user",
          "text": "That works for me.",
          "translations": {
            "ko": "그 시간이 괜찮습니다.",
            "zh": "这对我来说可以。",
            "ja": "それで問題ありません。",
            "vi": "Thời gian đó phù hợp với tôi."
          }
        },
        {
          "role": "ai",
          "text": "Do you need a return ticket as well?",
          "translations": {
            "ko": "왕복 티켓도 필요하신가요?",
            "zh": "您还需要回程票吗？",
            "ja": "往復切符も必要ですか？",
            "vi": "Anh/chị có cần mua vé khứ hồi không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I’ll take a round-trip ticket.",
          "translations": {
            "ko": "네, 왕복 티켓을 구매하겠습니다.",
            "zh": "是的，我要买一张往返票。",
            "ja": "はい、往復切符をお願いします。",
            "vi": "Vâng, tôi sẽ mua vé khứ hồi."
          }
        },
        {
          "role": "ai",
          "text": "You can pay by card or cash.",
          "translations": {
            "ko": "카드나 현금으로 결제하실 수 있습니다.",
            "zh": "您可以用卡或现金支付。",
            "ja": "カードまたは現金でお支払いいただけます。",
            "vi": "Anh/chị có thể thanh toán bằng thẻ hoặc tiền mặt."
          }
        },
        {
          "role": "user",
          "text": "Card, please.",
          "translations": {
            "ko": "카드로 할게요.",
            "zh": "请用卡。",
            "ja": "カードでお願いします。",
            "vi": "Tôi sẽ dùng thẻ, cảm ơn."
          }
        },
        {
          "role": "ai",
          "text": "Please keep your ticket for the journey.",
          "translations": {
            "ko": "여행 동안 티켓을 보관해 주세요.",
            "zh": "请保管好您的车票以备旅行之用。",
            "ja": "旅行中は切符を保管してください。",
            "vi": "Xin hãy giữ vé của mình trong suốt chuyến đi."
          }
        },
        {
          "role": "user",
          "text": "Will do.",
          "translations": {
            "ko": "알겠습니다.",
            "zh": "好的。",
            "ja": "了解しました。",
            "vi": "Tôi sẽ làm như vậy."
          }
        },
        {
          "role": "ai",
          "text": "Boarding starts 10 minutes before departure.",
          "translations": {
            "ko": "출발 10분 전에 탑승이 시작됩니다.",
            "zh": "登机将在出发前10分钟开始。",
            "ja": "出発の10分前から搭乗が始まります。",
            "vi": "Quá trình lên tàu sẽ bắt đầu 10 phút trước giờ khởi hành."
          }
        },
        {
          "role": "user",
          "text": "Thanks for the heads-up.",
          "translations": {
            "ko": "알려주셔서 감사합니다.",
            "zh": "谢谢您的提醒。",
            "ja": "事前に教えていただき、ありがとうございます。",
            "vi": "Cảm ơn đã thông báo."
          }
        },
        {
          "role": "ai",
          "text": "The platform number will be displayed shortly.",
          "translations": {
            "ko": "플랫폼 번호는 곧 표시될 것입니다.",
            "zh": "站台号码将很快显示。",
            "ja": "プラットフォームの番号はまもなく表示されます。",
            "vi": "Số hiệu sân ga sẽ được hiển thị ngay sau đây."
          }
        },
        {
          "role": "user",
          "text": "I’ll keep an eye on the screen.",
          "translations": {
            "ko": "화면을 계속 확인하겠습니다.",
            "zh": "我会注意屏幕的。",
            "ja": "画面を見ておきます。",
            "vi": "Tôi sẽ để mắt đến màn hình."
          }
        },
        {
          "role": "ai",
          "text": "Enjoy your trip!",
          "translations": {
            "ko": "즐거운 여행 되세요!",
            "zh": "祝您旅途愉快！",
            "ja": "ご旅行をお楽しみください！",
            "vi": "Chúc anh/chị có chuyến đi vui vẻ!"
          }
        },
        {
          "role": "user",
          "text": "Thank you!",
          "translations": {
            "ko": "감사합니다!",
            "zh": "谢谢！",
            "ja": "ありがとうございます！",
            "vi": "Cảm ơn!"
          }
        },
        {
          "role": "ai",
          "text": "Let me know if you need help with anything else.",
          "translations": {
            "ko": "다른 도움이 필요하시면 알려주세요.",
            "zh": "如果您需要其他帮助，请告诉我。",
            "ja": "他に何かお手伝いできることがあればお知らせください。",
            "vi": "Nếu anh/chị cần giúp đỡ gì khác, hãy cho tôi biết."
          }
        },
        {
          "role": "user",
          "text": "I will. Appreciate it.",
          "translations": {
            "ko": "알겠습니다. 감사합니다.",
            "zh": "我会的，感谢您。",
            "ja": "そうします。感謝します。",
            "vi": "Tôi sẽ làm vậy. Cảm ơn."
          }
        }
      ]
    },
    {
      "description": {
        "ko": "호텔 체크아웃",
        "zh": "退房",
        "ja": "ホテルのチェックアウト",
        "vi": "Trả phòng khách sạn"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Good morning! Are you ready to check out?",
          "translations": {
            "ko": "좋은 아침입니다! 체크아웃하실 준비가 되셨나요?",
            "zh": "早上好！您准备好退房了吗？",
            "ja": "おはようございます！チェックアウトの準備はできていますか？",
            "vi": "Chào buổi sáng! Anh/chị đã sẵn sàng trả phòng chưa?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I’m checking out now.",
          "translations": {
            "ko": "네, 지금 체크아웃하려고 합니다.",
            "zh": "是的，我现在就要退房。",
            "ja": "はい、今、チェックアウトします。",
            "vi": "Vâng, tôi đang trả phòng."
          }
        },
        {
          "role": "ai",
          "text": "May I have your room number, please?",
          "translations": {
            "ko": "객실 번호를 알려주시겠어요?",
            "zh": "请问您的房间号是多少？",
            "ja": "お部屋の番号をお教えいただけますか？",
            "vi": "Xin vui lòng cho tôi biết số phòng của anh/chị."
          }
        },
        {
          "role": "user",
          "text": "Room 802.",
          "translations": {
            "ko": "802호입니다.",
            "zh": "802房间。",
            "ja": "802号室です。",
            "vi": "Phòng 802."
          }
        },
        {
          "role": "ai",
          "text": "Everything looks good on your bill.",
          "translations": {
            "ko": "청구서에 문제가 없어 보입니다.",
            "zh": "您的账单看起来没有问题。",
            "ja": "お勘定は問題ありません。",
            "vi": "Hóa đơn của anh/chị không có vấn đề gì."
          }
        },
        {
          "role": "user",
          "text": "Great. Thank you.",
          "translations": {
            "ko": "좋습니다. 감사합니다.",
            "zh": "很好，谢谢。",
            "ja": "それは良かった。ありがとうございます。",
            "vi": "Tốt. Cảm ơn."
          }
        },
        {
          "role": "ai",
          "text": "Would you like a printed or emailed receipt?",
          "translations": {
            "ko": "영수증을 인쇄해서 드릴까요, 아니면 이메일로 보내드릴까요?",
            "zh": "您想要打印的收据还是电子邮件收据？",
            "ja": "レシートは印刷したものとメールどちらがよろしいですか？",
            "vi": "Anh/chị muốn nhận hóa đơn qua email hay in ra?"
          }
        },
        {
          "role": "user",
          "text": "Email is fine.",
          "translations": {
            "ko": "이메일이 좋습니다.",
            "zh": "电子邮件就可以了。",
            "ja": "メールで大丈夫です。",
            "vi": "Gửi qua email là đủ."
          }
        },
        {
          "role": "ai",
          "text": "Did you enjoy your stay with us?",
          "translations": {
            "ko": "저희 호텔에서의 숙박은 만족스러우셨나요?",
            "zh": "您在我们这里的住宿愉快吗？",
            "ja": "当ホテルでの滞在はいかがでしたか？",
            "vi": "Anh/chị có hài lòng với thời gian lưu trú tại đây không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, it was a very pleasant stay.",
          "translations": {
            "ko": "네, 매우 즐거운 숙박이었습니다.",
            "zh": "是的，我住得很愉快。",
            "ja": "はい、とても快適な滞在でした。",
            "vi": "Vâng, thời gian lưu trú rất dễ chịu."
          }
        },
        {
          "role": "ai",
          "text": "We hope to see you again soon.",
          "translations": {
            "ko": "곧 다시 뵙길 바랍니다.",
            "zh": "我们希望很快再见到您。",
            "ja": "また近いうちにお会いできることを楽しみにしています。",
            "vi": "Chúng tôi hy vọng sẽ gặp lại anh/chị sớm."
          }
        },
        {
          "role": "user",
          "text": "I’d love to come back.",
          "translations": {
            "ko": "다시 오고 싶어요.",
            "zh": "我很愿意再回来。",
            "ja": "また来たいです。",
            "vi": "Tôi rất muốn quay lại."
          }
        },
        {
          "role": "ai",
          "text": "Do you need help with transportation to the airport?",
          "translations": {
            "ko": "공항까지의 교통수단에 도움이 필요하세요?",
            "zh": "你需要帮助去机场的交通吗？",
            "ja": "空港までの交通手段はお手伝いしましょうか？",
            "vi": "Bạn cần giúp đỡ với việc di chuyển đến sân bay không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, a shuttle would be perfect.",
          "translations": {
            "ko": "네, 셔틀이 딱 좋을 것 같아요.",
            "zh": "是的，班车会很完美。",
            "ja": "はい、シャトルが最適です。",
            "vi": "Vâng, một chuyến xe đưa đón sẽ hoàn hảo."
          }
        },
        {
          "role": "ai",
          "text": "The shuttle departs every 30 minutes.",
          "translations": {
            "ko": "셔틀은 30분마다 출발합니다.",
            "zh": "班车每30分钟发车一次。",
            "ja": "シャトルは30分ごとに出発します。",
            "vi": "Xe đưa đón khởi hành mỗi 30 phút."
          }
        },
        {
          "role": "user",
          "text": "Good to know. I’ll wait in the lobby.",
          "translations": {
            "ko": "알겠습니다. 로비에서 기다리겠습니다.",
            "zh": "好的，知道了。我会在大堂等待。",
            "ja": "了解しました。ロビーで待ちます。",
            "vi": "Tốt biết. Tôi sẽ chờ ở sảnh."
          }
        },
        {
          "role": "ai",
          "text": "Let us know if you'd like us to store your luggage.",
          "translations": {
            "ko": "짐을 보관해 드릴까요?",
            "zh": "如果你希望我们帮你存放行李，请告诉我们。",
            "ja": "荷物を預かりましょうか？",
            "vi": "Hãy cho chúng tôi biết nếu bạn muốn chúng tôi cất giữ hành lý của bạn."
          }
        },
        {
          "role": "user",
          "text": "No thanks, I’m heading straight out.",
          "translations": {
            "ko": "아니요, 바로 나갈 거예요.",
            "zh": "不用了，谢谢，我要直接出去。",
            "ja": "いえ、すぐに出かけます。",
            "vi": "Không, cảm ơn. Tôi sẽ ra ngay."
          }
        },
        {
          "role": "ai",
          "text": "Thank you for staying with us!",
          "translations": {
            "ko": "저희와 함께 해주셔서 감사합니다!",
            "zh": "感谢您的入住！",
            "ja": "当ホテルをご利用いただきありがとうございました！",
            "vi": "Cảm ơn bạn đã ở lại với chúng tôi!"
          }
        },
        {
          "role": "user",
          "text": "Thanks again. Goodbye!",
          "translations": {
            "ko": "다시 한번 감사드립니다. 안녕히 가세요!",
            "zh": "再次感谢。再见！",
            "ja": "また、ありがとうございました。さようなら！",
            "vi": "Cảm ơn một lần nữa. Tạm biệt!"
          }
        }
      ]
    },
    {
      "description": {
        "ko": "호텔에서 늦은 체크아웃 요청하기",
        "zh": "在酒店请求延迟退房",
        "ja": "ホテルでのレイトチェックアウトのリクエスト",
        "vi": "Yêu cầu trả phòng muộn tại khách sạn"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Hello. How can I assist you?",
          "translations": {
            "ko": "안녕하세요. 어떻게 도와드릴까요?",
            "zh": "你好。我能帮你什么吗？",
            "ja": "こんにちは。何かお手伝いできることはありますか？",
            "vi": "Xin chào. Tôi có thể giúp gì cho bạn?"
          }
        },
        {
          "role": "user",
          "text": "Hi, is it possible to check out late?",
          "translations": {
            "ko": "안녕하세요, 늦게 체크아웃할 수 있을까요?",
            "zh": "嗨，可以晚点退房吗？",
            "ja": "レイトチェックアウトは可能ですか？",
            "vi": "Xin chào, có thể trả phòng muộn được không?"
          }
        },
        {
          "role": "ai",
          "text": "Let me check if a late checkout is available.",
          "translations": {
            "ko": "늦은 체크아웃이 가능한지 확인해보겠습니다.",
            "zh": "让我检查一下是否可以延迟退房。",
            "ja": "レイトチェックアウトが可能か確認します。",
            "vi": "Để tôi kiểm tra xem có thể trả phòng muộn không."
          }
        },
        {
          "role": "user",
          "text": "Sure, I can wait while you check.",
          "translations": {
            "ko": "네, 확인하는 동안 기다리겠습니다.",
            "zh": "好的，我可以等你查。",
            "ja": "はい、確認している間待ちます。",
            "vi": "Chắc chắn, tôi có thể chờ trong khi bạn kiểm tra."
          }
        },
        {
          "role": "ai",
          "text": "We can extend your stay until 2 PM.",
          "translations": {
            "ko": "체류 시간을 오후 2시까지 연장해드릴 수 있습니다.",
            "zh": "我们可以将你的住宿延长到下午2点。",
            "ja": "ご滞在は午後2時まで延長できます。",
            "vi": "Chúng tôi có thể kéo dài thời gian lưu trú của bạn đến 2 giờ chiều."
          }
        },
        {
          "role": "user",
          "text": "That would be perfect. Thanks.",
          "translations": {
            "ko": "그게 딱 좋겠네요. 감사합니다.",
            "zh": "那太好了。谢谢。",
            "ja": "それならば最適です。ありがとうございます。",
            "vi": "Điều đó sẽ hoàn hảo. Cảm ơn."
          }
        },
        {
          "role": "ai",
          "text": "Would you like a reminder call before checkout?",
          "translations": {
            "ko": "체크아웃 전에 알림 전화를 받고 싶으신가요?",
            "zh": "你需要在退房前接到提醒电话吗？",
            "ja": "チェックアウト前にリマインダーコールをご希望ですか？",
            "vi": "Bạn có muốn nhận cuộc gọi nhắc nhở trước khi trả phòng không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, a reminder would be helpful.",
          "translations": {
            "ko": "네, 알림이 도움이 될 것 같아요.",
            "zh": "是的，提醒会很有帮助。",
            "ja": "はい、リマインダーがあると助かります。",
            "vi": "Vâng, một lời nhắc sẽ hữu ích."
          }
        },
        {
          "role": "ai",
          "text": "There is a small fee for late checkout.",
          "translations": {
            "ko": "늦은 체크아웃에는 약간의 비용이 부과됩니다.",
            "zh": "延迟退房需要支付一小笔费用。",
            "ja": "レイトチェックアウトには少額の料金がかかります。",
            "vi": "Có một khoản phí nhỏ cho việc trả phòng muộn."
          }
        },
        {
          "role": "user",
          "text": "That’s fine. I understand.",
          "translations": {
            "ko": "괜찮습니다. 이해했습니다.",
            "zh": "没问题。我理解。",
            "ja": "それで大丈夫です。理解しています。",
            "vi": "Được rồi. Tôi hiểu."
          }
        },
        {
          "role": "ai",
          "text": "Would you like to charge that to your room?",
          "translations": {
            "ko": "그 비용을 객실에 청구하시겠어요?",
            "zh": "你想把这笔费用记在你的房间账单上吗？",
            "ja": "それをお部屋に請求しますか？",
            "vi": "Bạn có muốn tính phí này vào phòng của bạn không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, charge it to my room, please.",
          "translations": {
            "ko": "네, 제 방에 청구해 주세요.",
            "zh": "是的，请记在我的房间账单上。",
            "ja": "はい、部屋に請求してください。",
            "vi": "Vâng, hãy tính phí vào phòng của tôi, xin vui lòng."
          }
        },
        {
          "role": "ai",
          "text": "You’re all set. Enjoy the extra time!",
          "translations": {
            "ko": "모든 준비가 완료되었습니다. 추가 시간을 즐기세요!",
            "zh": "你已经准备好了。享受额外的时间吧！",
            "ja": "すべて準備ができました。追加時間をお楽しみください！",
            "vi": "Bạn đã sẵn sàng. Hãy tận hưởng thời gian thêm!"
          }
        },
        {
          "role": "user",
          "text": "Great. Appreciate it!",
          "translations": {
            "ko": "좋습니다. 감사합니다!",
            "zh": "太好了。感谢！",
            "ja": "すばらしい。感謝します！",
            "vi": "Tốt lắm. Cảm ơn!"
          }
        },
        {
          "role": "ai",
          "text": "Please return the key at the front desk when you leave.",
          "translations": {
            "ko": "나가실 때 프론트 데스크에 키를 반납해 주세요.",
            "zh": "当你离开时，请在前台归还钥匙。",
            "ja": "退室時にフロントデスクに鍵を返してください。",
            "vi": "Xin vui lòng trả chìa khóa tại quầy lễ tân khi bạn rời đi."
          }
        },
        {
          "role": "user",
          "text": "Will do.",
          "translations": {
            "ko": "알겠습니다.",
            "zh": "我会的。",
            "ja": "了解しました。",
            "vi": "Tôi sẽ làm vậy."
          }
        },
        {
          "role": "ai",
          "text": "Let us know if you need anything else before then.",
          "translations": {
            "ko": "그 전에 다른 무엇이든 필요하시면 알려주세요.",
            "zh": "如果你在那之前需要其他任何东西，请告诉我们。",
            "ja": "それまでに何か他に必要なものがあればお知らせください。",
            "vi": "Hãy cho chúng tôi biết nếu bạn cần bất cứ thứ gì khác trước khi đó."
          }
        },
        {
          "role": "user",
          "text": "I think I’m good for now.",
          "translations": {
            "ko": "지금은 다 괜찮은 것 같아요.",
            "zh": "我现在应该没问题。",
            "ja": "今のところ大丈夫です。",
            "vi": "Tôi nghĩ tôi ổn cho đến giờ."
          }
        },
        {
          "role": "ai",
          "text": "Thank you for staying with us!",
          "translations": {
            "ko": "저희와 함께 해주셔서 감사합니다!",
            "zh": "感谢您的入住！",
            "ja": "当ホテルをご利用いただきありがとうございました！",
            "vi": "Cảm ơn bạn đã ở lại với chúng tôi!"
          }
        },
        {
          "role": "user",
          "text": "Thanks again for the hospitality.",
          "translations": {
            "ko": "다시 한번 친절에 감사드립니다.",
            "zh": "再次感谢你们的热情款待。",
            "ja": "また、おもてなしに感謝します。",
            "vi": "Cảm ơn một lần nữa vì sự hiếu khách."
          }
        }
      ]
    }
  ],
  "advanced": [
    {
      "description": {
        "ko": "지연된 비행 후 여행 보험 청구하기",
        "zh": "在航班延误后申请旅行保险赔偿",
        "ja": "遅延したフライト後の旅行保険の請求",
        "vi": "Đệ trình yêu cầu bảo hiểm du lịch sau chuyến bay bị trễ"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Good afternoon. Are you calling about a recent travel disruption?",
          "translations": {
            "ko": "안녕하세요. 최근의 여행 중단에 대해 전화하신 건가요?",
            "zh": "下午好。您是打电话来询问最近的旅行中断问题吗？",
            "ja": "こんにちは。最近の旅行のトラブルについてお電話ですか？",
            "vi": "Chào buổi chiều. Anh/chị đang gọi vì sự cố du lịch gần đây phải không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I need to file a claim for a delayed flight.",
          "translations": {
            "ko": "네, 지연된 비행에 대한 청구를 해야 합니다.",
            "zh": "是的，我需要为延误的航班提交赔偿申请。",
            "ja": "はい、遅延したフライトの請求をしたいです。",
            "vi": "Vâng, tôi cần đệ trình yêu cầu bồi thường cho chuyến bay bị trễ."
          }
        },
        {
          "role": "ai",
          "text": "Can you provide your policy number and the flight details?",
          "translations": {
            "ko": "보험 정책 번호와 비행 상세 정보를 알려주실 수 있나요?",
            "zh": "您能提供您的保单号码和航班详细信息吗？",
            "ja": "保険証券番号とフライトの詳細を教えていただけますか？",
            "vi": "Anh/chị có thể cung cấp số hợp đồng bảo hiểm và chi tiết về chuyến bay không?"
          }
        },
        {
          "role": "user",
          "text": "Sure, my policy number is TRV123456 and I was on flight A790.",
          "translations": {
            "ko": "네, 제 보험 정책 번호는 TRV123456이고 A790편을 이용했습니다.",
            "zh": "当然，我的保单号码是TRV123456，我乘坐的是A790航班。",
            "ja": "はい、私の保険証券番号はTRV123456で、A790便に搭乗していました。",
            "vi": "Được, số hợp đồng bảo hiểm của tôi là TRV123456 và tôi đã đi chuyến bay A790."
          }
        },
        {
          "role": "ai",
          "text": "What was the original departure time and how long was the delay?",
          "translations": {
            "ko": "원래 출발 시간은 언제였고, 지연은 얼마나 되었나요?",
            "zh": "原定的起飞时间是什么时候，延误了多久？",
            "ja": "元々の出発時間と遅延時間は何時間でしたか？",
            "vi": "Thời gian khởi hành ban đầu là gì và chuyến bay đã bị trễ bao lâu?"
          }
        },
        {
          "role": "user",
          "text": "It was scheduled for 9 AM but didn’t leave until 6 PM.",
          "translations": {
            "ko": "원래 9시에 출발 예정이었지만 6시까지 출발하지 않았습니다.",
            "zh": "原定的起飞时间是早上9点，但是直到下午6点才起飞。",
            "ja": "9時に出発予定でしたが、6時まで出発しませんでした。",
            "vi": "Chuyến bay dự kiến khởi hành lúc 9 giờ sáng nhưng không khởi hành cho đến 6 giờ chiều."
          }
        },
        {
          "role": "ai",
          "text": "Do you have documentation from the airline confirming the delay?",
          "translations": {
            "ko": "항공사로부터 지연을 확인하는 문서가 있나요?",
            "zh": "您有航空公司确认延误的文件吗？",
            "ja": "航空会社から遅延を確認する書類を持っていますか？",
            "vi": "Anh/chị có giấy tờ từ hãng hàng không xác nhận việc trễ chuyến không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I have a delay confirmation from the airline.",
          "translations": {
            "ko": "네, 항공사로부터 지연 확인서를 받았습니다.",
            "zh": "是的，我有航空公司的延误确认函。",
            "ja": "はい、航空会社から遅延確認の書類を持っています。",
            "vi": "Vâng, tôi có giấy xác nhận trễ chuyến từ hãng hàng không."
          }
        },
        {
          "role": "ai",
          "text": "We also need a copy of your boarding pass and itinerary.",
          "translations": {
            "ko": "탑승권과 여행 일정표의 사본도 필요합니다.",
            "zh": "我们还需要您的登机牌和行程单的复印件。",
            "ja": "また、搭乗券と旅程表のコピーも必要です。",
            "vi": "Chúng tôi cũng cần bản sao của vé máy bay và lịch trình của anh/chị."
          }
        },
        {
          "role": "user",
          "text": "I’ll attach both documents in the email.",
          "translations": {
            "ko": "두 문서 모두 이메일에 첨부하겠습니다.",
            "zh": "我会在邮件中附上这两份文件。",
            "ja": "両方の書類をメールに添付します。",
            "vi": "Tôi sẽ đính kèm cả hai tài liệu trong email."
          }
        },
        {
          "role": "ai",
          "text": "Was any accommodation or meal provided by the airline?",
          "translations": {
            "ko": "항공사에서 숙박이나 식사를 제공했나요?",
            "zh": "航空公司提供了住宿或餐饮吗？",
            "ja": "航空会社から宿泊施設や食事の提供はありましたか？",
            "vi": "Hãng hàng không có cung cấp chỗ ở hoặc bữa ăn nào không?"
          }
        },
        {
          "role": "user",
          "text": "No, we were not given any support at the airport.",
          "translations": {
            "ko": "아니요, 공항에서 어떠한 지원도 받지 못했습니다.",
            "zh": "没有，我们在机场没有得到任何支持。",
            "ja": "いいえ、空港で何もサポートは受けませんでした。",
            "vi": "Không, chúng tôi không nhận được bất kỳ hỗ trợ nào tại sân bay."
          }
        },
        {
          "role": "ai",
          "text": "You may be eligible for reimbursement depending on your coverage.",
          "translations": {
            "ko": "보험 내용에 따라 환불이 가능할 수도 있습니다.",
            "zh": "根据您的保险覆盖范围，您可能有资格获得赔偿。",
            "ja": "あなたの保険内容によりますが、返金が可能な場合があります。",
            "vi": "Anh/chị có thể đủ điều kiện để được hoàn tiền tùy thuộc vào gói bảo hiểm của mình."
          }
        },
        {
          "role": "user",
          "text": "That’s good to hear. I hope it’s covered.",
          "translations": {
            "ko": "그렇군요. 보험에 포함되어 있기를 바랍니다.",
            "zh": "听到这个消息我很高兴。我希望这个可以赔偿。",
            "ja": "それは良いニュースです。カバーされていることを願っています。",
            "vi": "Thật tốt khi nghe điều đó. Tôi hy vọng nó được bảo hiểm."
          }
        },
        {
          "role": "ai",
          "text": "The processing time is typically 7 to 10 business days.",
          "translations": {
            "ko": "처리 시간은 일반적으로 7에서 10 영업일입니다.",
            "zh": "处理时间通常为7到10个工作日。",
            "ja": "処理時間は通常7から10営業日です。",
            "vi": "Thời gian xử lý thường là từ 7 đến 10 ngày làm việc."
          }
        },
        {
          "role": "user",
          "text": "That timeline works. Thanks for letting me know.",
          "translations": {
            "ko": "그 시간대로 괜찮습니다. 알려주셔서 감사합니다.",
            "zh": "这个时间表可以。谢谢你告诉我。",
            "ja": "そのスケジュールで問題ありません。教えていただきありがとうございます。",
            "vi": "Thời gian đó phù hợp. Cảm ơn đã cho tôi biết."
          }
        },
        {
          "role": "ai",
          "text": "Would you like email updates regarding your claim status?",
          "translations": {
            "ko": "청구 상태에 대한 이메일 업데이트를 원하시나요?",
            "zh": "您希望通过电子邮件接收您的赔偿申请状态更新吗？",
            "ja": "請求状況についてのメール更新をご希望ですか？",
            "vi": "Anh/chị có muốn nhận cập nhật qua email về tình trạng yêu cầu bồi thường không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, please send updates to my email.",
          "translations": {
            "ko": "네, 이메일로 업데이트를 보내주세요.",
            "zh": "是的，请将更新发送到我的电子邮件。",
            "ja": "はい、メールで更新情報を送ってください。",
            "vi": "Vâng, vui lòng gửi cập nhật vào email của tôi."
          }
        },
        {
          "role": "ai",
          "text": "Thank you. We’ll begin processing your request today.",
          "translations": {
            "ko": "감사합니다. 오늘부터 귀하의 요청을 처리하기 시작하겠습니다.",
            "zh": "谢谢您。我们将从今天开始处理您的请求。",
            "ja": "ありがとうございます。本日からあなたのリクエストの処理を開始します。",
            "vi": "Cảm ơn anh/chị. Chúng tôi sẽ bắt đầu xử lý yêu cầu của anh/chị ngay hôm nay."
          }
        },
        {
          "role": "user",
          "text": "Thanks for your help today.",
          "translations": {
            "ko": "오늘 도와주셔서 감사합니다.",
            "zh": "感谢您今天的帮助。",
            "ja": "今日はお手伝いいただきありがとうございました。",
            "vi": "Cảm ơn sự giúp đỡ của anh/chị hôm nay."
          }
        }
      ]
    },
    {
      "description": {
        "ko": "해외에서 긴급 여행 지원 조정하기",
        "zh": "在国外安排紧急旅行援助",
        "ja": "海外での緊急旅行支援の手配",
        "vi": "Sắp xếp hỗ trợ du lịch khẩn cấp khi ở nước ngoài"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Hello. Are you currently overseas and in need of assistance?",
          "translations": {
            "ko": "안녕하세요. 현재 해외에 계시고 도움이 필요한 상황인가요?",
            "zh": "你好。您现在在海外需要援助吗？",
            "ja": "こんにちは。現在海外にいて、支援が必要ですか？",
            "vi": "Xin chào. Anh/chị đang ở nước ngoài và cần hỗ trợ phải không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I’m abroad and I lost my passport.",
          "translations": {
            "ko": "네, 해외에 있고 제 여권을 잃어버렸습니다.",
            "zh": "是的，我在国外，我丢了我的护照。",
            "ja": "はい、海外にいて、パスポートを失くしました。",
            "vi": "Vâng, tôi đang ở nước ngoài và tôi đã mất hộ chiếu."
          }
        },
        {
          "role": "ai",
          "text": "Can you tell me your current location and what happened?",
          "translations": {
            "ko": "현재 위치와 어떤 일이 있었는지 알려주실 수 있나요?",
            "zh": "您能告诉我您现在的位置和发生了什么事情吗？",
            "ja": "現在の位置と何が起こったのかを教えていただけますか？",
            "vi": "Anh/chị có thể cho tôi biết vị trí hiện tại và chuyện gì đã xảy ra không?"
          }
        },
        {
          "role": "user",
          "text": "I’m in Lisbon, Portugal. It went missing this morning.",
          "translations": {
            "ko": "저는 포르투갈 리스본에 있습니다. 오늘 아침에 분실했습니다.",
            "zh": "我现在在葡萄牙的里斯本。今天早上我发现它不见了。",
            "ja": "ポルトガルのリスボンにいます。今朝、なくなったことに気づきました。",
            "vi": "Tôi đang ở Lisbon, Bồ Đào Nha. Hộ chiếu của tôi đã mất từ sáng nay."
          }
        },
        {
          "role": "ai",
          "text": "Are you in a safe place right now?",
          "translations": {
            "ko": "현재 안전한 곳에 계신가요?",
            "zh": "您现在在一个安全的地方吗？",
            "ja": "今、安全な場所にいますか？",
            "vi": "Anh/chị đang ở nơi an toàn phải không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I’m staying at a hotel now.",
          "translations": {
            "ko": "네, 지금은 호텔에 머무르고 있습니다.",
            "zh": "是的，我现在住在一家酒店。",
            "ja": "はい、今はホテルに滞在しています。",
            "vi": "Vâng, tôi đang ở khách sạn ngay bây giờ."
          }
        },
        {
          "role": "ai",
          "text": "Do you have your passport and local ID available?",
          "translations": {
            "ko": "여권과 현지 신분증을 가지고 계신가요?",
            "zh": "您有护照和当地身份证吗？",
            "ja": "パスポートと現地のIDは手元にありますか？",
            "vi": "Anh/chị có hộ chiếu và giấy tờ tùy thân địa phương không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I still have my local ID with me.",
          "translations": {
            "ko": "네, 현지 신분증은 가지고 있습니다.",
            "zh": "是的，我还有我的当地身份证。",
            "ja": "はい、現地のIDはまだ持っています。",
            "vi": "Vâng, tôi vẫn còn giấy tờ tùy thân địa phương của mình."
          }
        },
        {
          "role": "ai",
          "text": "We can connect you with the nearest embassy or consulate.",
          "translations": {
            "ko": "가장 가까운 대사관이나 영사관에 연결해드릴 수 있습니다.",
            "zh": "我们可以帮您联系最近的大使馆或领事馆。",
            "ja": "最寄りの大使館または領事館にご連絡することができます。",
            "vi": "Chúng tôi có thể giúp bạn liên hệ với lãnh sự quán hoặc đại sứ quán gần nhất."
          }
        },
        {
          "role": "user",
          "text": "That would be really helpful, thank you.",
          "translations": {
            "ko": "정말 도움이 될 것 같아요, 감사합니다.",
            "zh": "这将非常有帮助，谢谢您。",
            "ja": "それは本当に助かります、ありがとうございます。",
            "vi": "Điều đó thật sự rất hữu ích, cảm ơn bạn."
          }
        },
        {
          "role": "ai",
          "text": "Do you need help rebooking a return flight or finding accommodation?",
          "translations": {
            "ko": "귀국 항공편 재예약이나 숙박 시설 찾기에 도움이 필요하신가요?",
            "zh": "您需要帮助重新预订回程航班或找住宿吗？",
            "ja": "帰国便の再予約や宿泊施設の探し方で助けが必要ですか？",
            "vi": "Bạn có cần giúp đặt lại chuyến bay trở về hoặc tìm chỗ ở không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I might need help booking a new return flight.",
          "translations": {
            "ko": "네, 새로운 귀국 항공편 예약에 도움이 필요할 수도 있습니다.",
            "zh": "是的，我可能需要帮助预订新的回程航班。",
            "ja": "はい、新たな帰国便の予約に助けが必要かもしれません。",
            "vi": "Có, tôi có thể cần giúp đặt lại chuyến bay trở về."
          }
        },
        {
          "role": "ai",
          "text": "We’ll need an emergency contact we can notify on your behalf.",
          "translations": {
            "ko": "대신 연락할 수 있는 비상 연락처가 필요합니다.",
            "zh": "我们需要一个紧急联系人，我们可以代您通知他。",
            "ja": "あなたに代わって通知できる緊急連絡先が必要です。",
            "vi": "Chúng tôi sẽ cần một liên hệ khẩn cấp mà chúng tôi có thể thông báo thay mặt bạn."
          }
        },
        {
          "role": "user",
          "text": "You can contact my sister. I’ll give you her number.",
          "translations": {
            "ko": "제 여동생에게 연락하셔도 됩니다. 전화번호를 드릴게요.",
            "zh": "您可以联系我的姐姐，我会给您她的号码。",
            "ja": "姉に連絡してもらえます。彼女の番号をお教えします。",
            "vi": "Bạn có thể liên hệ với chị gái tôi. Tôi sẽ cung cấp số điện thoại của cô ấy."
          }
        },
        {
          "role": "ai",
          "text": "Do you require medical assistance or translation support?",
          "translations": {
            "ko": "의료 지원이나 번역 지원이 필요하신가요?",
            "zh": "您需要医疗援助或翻译支持吗？",
            "ja": "医療援助や翻訳サポートが必要ですか？",
            "vi": "Bạn có cần sự hỗ trợ y tế hoặc hỗ trợ dịch thuật không?"
          }
        },
        {
          "role": "user",
          "text": "I don’t need medical help, but a translator would be great.",
          "translations": {
            "ko": "의료 도움은 필요 없지만, 통역사가 있으면 좋겠습니다.",
            "zh": "我不需要医疗帮助，但是有翻译就太好了。",
            "ja": "医療の助けは必要ありませんが、翻訳者がいれば助かります。",
            "vi": "Tôi không cần sự giúp đỡ y tế, nhưng một người phiên dịch sẽ rất tốt."
          }
        },
        {
          "role": "ai",
          "text": "We’ll follow up continuously until your issue is resolved.",
          "translations": {
            "ko": "문제가 해결될 때까지 계속해서 후속 조치하겠습니다.",
            "zh": "我们会持续跟进，直到您的问题解决。",
            "ja": "あなたの問題が解決するまで継続的にフォローアップします。",
            "vi": "Chúng tôi sẽ tiếp tục theo dõi cho đến khi vấn đề của bạn được giải quyết."
          }
        },
        {
          "role": "user",
          "text": "Thanks, I really appreciate that.",
          "translations": {
            "ko": "감사합니다, 정말 감사드립니다.",
            "zh": "谢谢，我非常感激。",
            "ja": "ありがとう、本当に感謝しています。",
            "vi": "Cảm ơn, tôi thực sự đánh giá cao điều đó."
          }
        },
        {
          "role": "ai",
          "text": "Help is on the way. Stay where you are and stay safe.",
          "translations": {
            "ko": "도움이 곧 도착합니다. 현재 위치에서 안전하게 기다려 주세요.",
            "zh": "帮助正在路上。请您待在原地并确保安全。",
            "ja": "助けが向かっています。その場に留まり、安全に注意してください。",
            "vi": "Sự giúp đỡ đang trên đường tới. Hãy ở lại nơi bạn đang ở và giữ an toàn."
          }
        },
        {
          "role": "user",
          "text": "Okay. I’ll wait here for the next steps.",
          "translations": {
            "ko": "알겠습니다. 다음 단계를 여기서 기다리겠습니다.",
            "zh": "好的，我会在这里等待下一步。",
            "ja": "了解です。次の手順をここで待ちます。",
            "vi": "Được rồi. Tôi sẽ đợi ở đây cho các bước tiếp theo."
          }
        }
      ]
    },
    {
      "description": {
        "ko": "이민국에서 여행 비자 문제 처리",
        "zh": "在移民处处理旅行签证问题",
        "ja": "入国審査での旅行ビザの問題の対処",
        "vi": "Xử lý vấn đề visa du lịch tại cửa khẩu nhập cảnh"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Good afternoon. There seems to be an issue with your visa.",
          "translations": {
            "ko": "안녕하세요. 비자에 문제가 있는 것 같습니다.",
            "zh": "下午好。您的签证似乎有问题。",
            "ja": "こんにちは。あなたのビザに問題があるようです。",
            "vi": "Chào buổi chiều. Có vẻ như có vấn đề với visa của bạn."
          }
        },
        {
          "role": "user",
          "text": "Hello. What kind of issue is there?",
          "translations": {
            "ko": "안녕하세요. 어떤 문제가 있나요?",
            "zh": "您好。有什么问题？",
            "ja": "こんにちは。どのような問題がありますか？",
            "vi": "Xin chào. Vấn đề là gì vậy?"
          }
        },
        {
          "role": "ai",
          "text": "Can you confirm the duration of your intended stay?",
          "translations": {
            "ko": "체류 예정 기간을 확인해 주시겠어요?",
            "zh": "您能确认您打算停留的时间吗？",
            "ja": "滞在予定期間を確認していただけますか？",
            "vi": "Bạn có thể xác nhận thời gian lưu trú dự định của mình không?"
          }
        },
        {
          "role": "user",
          "text": "Ten days. I have a hotel booked for the entire stay.",
          "translations": {
            "ko": "10일입니다. 체류 기간 동안 호텔을 예약해 두었습니다.",
            "zh": "十天。我已经预订了整个住宿期间的酒店。",
            "ja": "10日間です。滞在全期間のホテルを予約しています。",
            "vi": "Mười ngày. Tôi đã đặt khách sạn cho toàn bộ thời gian lưu trú."
          }
        },
        {
          "role": "ai",
          "text": "Do you have proof of return travel?",
          "translations": {
            "ko": "귀국 여행의 증명을 가지고 계신가요?",
            "zh": "您有回程旅行的证明吗？",
            "ja": "帰国の証明はありますか？",
            "vi": "Bạn có chứng minh về việc đi lại không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I have a return flight booked for the 15th.",
          "translations": {
            "ko": "네, 15일에 귀국 항공편을 예약해 두었습니다.",
            "zh": "是的，我已经预订了15号的回程航班。",
            "ja": "はい、15日に帰国便を予約しています。",
            "vi": "Có, tôi đã đặt chuyến bay trở về vào ngày 15."
          }
        },
        {
          "role": "ai",
          "text": "Have you visited this country before under a different visa?",
          "translations": {
            "ko": "이전에 다른 비자로 이 나라를 방문한 적이 있나요?",
            "zh": "您以前是否以不同的签证访问过这个国家？",
            "ja": "以前に別のビザでこの国を訪れたことはありますか？",
            "vi": "Bạn đã từng đến quốc gia này dưới một visa khác chưa?"
          }
        },
        {
          "role": "user",
          "text": "Yes, once on a tourist visa last year.",
          "translations": {
            "ko": "네, 작년에 관광 비자로 한 번 방문한 적이 있습니다.",
            "zh": "是的，去年我曾经用旅游签证来过一次。",
            "ja": "はい、去年観光ビザで一度訪れました。",
            "vi": "Có, một lần với visa du lịch vào năm ngoái."
          }
        },
        {
          "role": "ai",
          "text": "We’ll need to verify your documents with our database.",
          "translations": {
            "ko": "데이터베이스와 문서를 확인해야 합니다.",
            "zh": "我们需要将您的文件与我们的数据库进行核实。",
            "ja": "あなたの書類を当社のデータベースで確認する必要があります。",
            "vi": "Chúng tôi sẽ cần xác minh tài liệu của bạn với cơ sở dữ liệu của chúng tôi."
          }
        },
        {
          "role": "user",
          "text": "Sure, I’ll wait. Please let me know if you need anything else.",
          "translations": {
            "ko": "알겠습니다, 기다리겠습니다. 다른 것이 필요하면 알려주세요.",
            "zh": "好的，我会等待。如果您需要其他任何东西，请告诉我。",
            "ja": "了解です、待ちます。他に何か必要なものがあればお知らせください。",
            "vi": "Được, tôi sẽ đợi. Xin vui lòng cho tôi biết nếu bạn cần thêm thông tin gì."
          }
        },
        {
          "role": "ai",
          "text": "Are you traveling for business or leisure?",
          "translations": {
            "ko": "비즈니스 목적으로 여행하시나요, 아니면 휴가 목적인가요?",
            "zh": "您是出于商务还是休闲目的旅行？",
            "ja": "ビジネスで旅行していますか、それともレジャーですか？",
            "vi": "Bạn đang đi du lịch cho công việc hay giải trí?"
          }
        },
        {
          "role": "user",
          "text": "It’s a leisure trip-I’m here for sightseeing.",
          "translations": {
            "ko": "휴가 목적입니다-관광을 하러 왔습니다.",
            "zh": "这是一次休闲之旅-我来这里观光。",
            "ja": "レジャーの旅行です-観光で来ています。",
            "vi": "Đây là chuyến đi giải trí - tôi đến đây để tham quan."
          }
        },
        {
          "role": "ai",
          "text": "Do you have contact information for your local host?",
          "translations": {
            "ko": "현지 호스트의 연락처 정보를 가지고 계신가요?",
            "zh": "您有当地主人的联系信息吗？",
            "ja": "地元のホストの連絡先情報はありますか？",
            "vi": "Bạn có thông tin liên hệ với người chủ nhà địa phương của mình không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, my cousin is hosting me. I have their number here.",
          "translations": {
            "ko": "네, 제 친척이 저를 맞아주고 있습니다. 그들의 번호가 여기 있습니다.",
            "zh": "是的，我表兄弟是我的主人。我在这里有他们的号码。",
            "ja": "はい、私のいとこがホストしています。彼の番号はここにあります。",
            "vi": "Có, người anh họ của tôi đang tiếp đón tôi. Tôi có số điện thoại của họ ở đây."
          }
        },
        {
          "role": "ai",
          "text": "Please remain seated while we process your file.",
          "translations": {
            "ko": "파일 처리하는 동안 앉아 계셔 주세요.",
            "zh": "在我们处理您的文件时，请保持坐着。",
            "ja": "ファイルを処理する間、座ったままでいてください。",
            "vi": "Xin vui lòng ngồi yên trong khi chúng tôi xử lý hồ sơ của bạn."
          }
        },
        {
          "role": "user",
          "text": "Understood. I’ll stay here.",
          "translations": {
            "ko": "알겠습니다. 여기에 앉아 있겠습니다.",
            "zh": "明白了。我会待在这里。",
            "ja": "了解しました。ここにいます。",
            "vi": "Hiểu rồi. Tôi sẽ ở lại đây."
          }
        },
        {
          "role": "ai",
          "text": "We may need to conduct a short interview.",
          "translations": {
            "ko": "짧은 인터뷰를 진행해야 할 수도 있습니다.",
            "zh": "我们可能需要进行简短的面试。",
            "ja": "短い面接を行う必要があるかもしれません。",
            "vi": "Chúng tôi có thể cần tiến hành một cuộc phỏng vấn ngắn."
          }
        },
        {
          "role": "user",
          "text": "That’s okay. I’m ready for the interview if needed.",
          "translations": {
            "ko": "괜찮아요. 필요하다면 인터뷰 준비가 되어 있습니다.",
            "zh": "没关系。如果需要的话，我已经准备好面试了。",
            "ja": "大丈夫です。必要であれば面接の準備はできています。",
            "vi": "Được rồi. Nếu cần, tôi đã sẵn sàng cho cuộc phỏng vấn."
          }
        },
        {
          "role": "ai",
          "text": "Thank you for your patience. We'll update you shortly.",
          "translations": {
            "ko": "기다려 주셔서 감사합니다. 곧 업데이트 해드리겠습니다.",
            "zh": "感谢您的耐心等待。我们会尽快向您更新情况。",
            "ja": "お待たせして申し訳ありません。まもなくご連絡いたします。",
            "vi": "Cảm ơn sự kiên nhẫn của bạn. Chúng tôi sẽ cập nhật cho bạn sớm."
          }
        },
        {
          "role": "user",
          "text": "Thanks for keeping me informed.",
          "translations": {
            "ko": "알려주셔서 감사합니다.",
            "zh": "感谢您让我知道这些信息。",
            "ja": "情報を共有していただきありがとうございます。",
            "vi": "Cảm ơn bạn đã thông báo cho tôi."
          }
        }
      ]
    },
    {
      "description": {
        "ko": "외국의 경찰서에서 지갑 도난을 신고하는 상황",
        "zh": "在外国警察局报告钱包被盗",
        "ja": "外国の警察署で財布の盗難を報告する",
        "vi": "Báo cáo về việc bị mất ví ở một đồn cảnh sát nước ngoài"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Good evening. Please tell me what happened.",
          "translations": {
            "ko": "안녕하십니까. 어떤 일이 있었는지 말씀해 주세요.",
            "zh": "晚上好。请告诉我发生了什么事。",
            "ja": "こんばんは。何が起こったのか教えてください。",
            "vi": "Chào buổi tối. Hãy cho tôi biết chuyện gì đã xảy ra."
          }
        },
        {
          "role": "user",
          "text": "Hi. My wallet was stolen earlier today.",
          "translations": {
            "ko": "안녕하세요. 오늘 제 지갑이 도난당했습니다.",
            "zh": "嗨。我的钱包今天早些时候被偷了。",
            "ja": "こんにちは。今日、私の財布が盗まれました。",
            "vi": "Chào. Ví của tôi đã bị đánh cắp vào sáng nay."
          }
        },
        {
          "role": "ai",
          "text": "Where were you when you noticed it was missing?",
          "translations": {
            "ko": "지갑이 없어진 것을 알아차린 장소는 어디였나요?",
            "zh": "你在哪里发现钱包丢了？",
            "ja": "それがなくなったことに気づいたのはどこでしたか？",
            "vi": "Bạn đang ở đâu khi nhận ra ví đã mất?"
          }
        },
        {
          "role": "user",
          "text": "I think it happened at the train station.",
          "translations": {
            "ko": "기차역에서 일어난 것 같습니다.",
            "zh": "我认为是在火车站发生的。",
            "ja": "電車の駅で起こったと思います。",
            "vi": "Tôi nghĩ rằng nó đã xảy ra ở ga tàu."
          }
        },
        {
          "role": "ai",
          "text": "Do you remember the last time you used your wallet?",
          "translations": {
            "ko": "지갑을 마지막으로 사용한 시간을 기억하시나요?",
            "zh": "你还记得最后一次使用钱包的时间吗？",
            "ja": "財布を最後に使ったのはいつですか？",
            "vi": "Bạn có nhớ lần cuối cùng bạn sử dụng ví không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I last used it at a café around noon.",
          "translations": {
            "ko": "네, 점심때 카페에서 마지막으로 사용했습니다.",
            "zh": "是的，我最后一次在中午的时候在一家咖啡馆使用了它。",
            "ja": "はい、正午頃にカフェで最後に使いました。",
            "vi": "Vâng, lần cuối cùng tôi sử dụng nó ở một quán cà phê vào khoảng trưa."
          }
        },
        {
          "role": "ai",
          "text": "Can you list what was inside the wallet?",
          "translations": {
            "ko": "지갑 안에 있던 물건들을 나열해 주실 수 있나요?",
            "zh": "你能列出钱包里有什么吗？",
            "ja": "財布の中に何が入っていたかリストアップできますか？",
            "vi": "Bạn có thể liệt kê những gì có trong ví không?"
          }
        },
        {
          "role": "user",
          "text": "It had cash, two cards, and my hotel key.",
          "translations": {
            "ko": "현금, 카드 두 장, 그리고 호텔 키가 있었습니다.",
            "zh": "里面有现金，两张卡和我的酒店钥匙。",
            "ja": "現金、カード2枚、ホテルの鍵が入っていました。",
            "vi": "Trong ví có tiền mặt, hai thẻ và chìa khóa khách sạn của tôi."
          }
        },
        {
          "role": "ai",
          "text": "Do you have identification or a passport with you?",
          "translations": {
            "ko": "신분증이나 여권을 가지고 계신가요?",
            "zh": "你有身份证或护照在身上吗？",
            "ja": "身分証明書やパスポートは持っていますか？",
            "vi": "Bạn có giấy tờ tùy thân hoặc hộ chiếu với bạn không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I have my passport with me.",
          "translations": {
            "ko": "네, 여권을 가지고 있습니다.",
            "zh": "是的，我带着我的护照。",
            "ja": "はい、パスポートは持っています。",
            "vi": "Vâng, tôi có hộ chiếu của mình."
          }
        },
        {
          "role": "ai",
          "text": "Would you like to file an official report for insurance?",
          "translations": {
            "ko": "보험을 위해 공식적인 신고를 하시겠습니까?",
            "zh": "你想要正式报案以便保险赔偿吗？",
            "ja": "保険のために正式な報告を行いたいですか？",
            "vi": "Bạn có muốn lập một báo cáo chính thức cho bảo hiểm không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I’ll need the report for my travel insurance.",
          "translations": {
            "ko": "네, 여행 보험을 위해 신고서가 필요합니다.",
            "zh": "是的，我需要报告来申请旅行保险。",
            "ja": "はい、旅行保険のために報告書が必要です。",
            "vi": "Vâng, tôi sẽ cần báo cáo cho bảo hiểm du lịch của mình."
          }
        },
        {
          "role": "ai",
          "text": "We'll give you a reference number for the case.",
          "translations": {
            "ko": "사건에 대한 참조 번호를 드리겠습니다.",
            "zh": "我们会给你一个案件参考号码。",
            "ja": "事件の参照番号をお渡しします。",
            "vi": "Chúng tôi sẽ cung cấp cho bạn một số tham chiếu cho vụ việc."
          }
        },
        {
          "role": "user",
          "text": "Okay, I’ll keep that number safe.",
          "translations": {
            "ko": "네, 그 번호를 잘 보관하겠습니다.",
            "zh": "好的，我会妥善保管这个号码。",
            "ja": "はい、その番号は大切に保管します。",
            "vi": "Được, tôi sẽ giữ số đó an toàn."
          }
        },
        {
          "role": "ai",
          "text": "Please check with your bank to block your cards.",
          "translations": {
            "ko": "은행에 연락하여 카드를 차단하시기 바랍니다.",
            "zh": "请联系你的银行以封锁你的卡片。",
            "ja": "銀行に連絡してカードを停止してください。",
            "vi": "Hãy kiểm tra với ngân hàng của bạn để chặn thẻ của bạn."
          }
        },
        {
          "role": "user",
          "text": "Already done. I contacted my bank.",
          "translations": {
            "ko": "이미 했습니다. 은행에 연락했습니다.",
            "zh": "已经办理了。我已经联系了我的银行。",
            "ja": "すでに行いました。銀行に連絡しました。",
            "vi": "Đã hoàn tất. Tôi đã liên hệ với ngân hàng của mình."
          }
        },
        {
          "role": "ai",
          "text": "You can collect a copy of the report tomorrow morning.",
          "translations": {
            "ko": "신고서 사본은 내일 아침에 받으실 수 있습니다.",
            "zh": "你明天早上可以来领取报告副本。",
            "ja": "明日の朝、報告書のコピーを受け取ることができます。",
            "vi": "Bạn có thể nhận bản sao của báo cáo vào sáng mai."
          }
        },
        {
          "role": "user",
          "text": "Thanks. I’ll return tomorrow for the report.",
          "translations": {
            "ko": "감사합니다. 내일 신고서를 받으러 오겠습니다.",
            "zh": "谢谢。我明天会回来取报告。",
            "ja": "ありがとう。明日、報告書を受け取りに戻ります。",
            "vi": "Cảm ơn. Tôi sẽ quay lại vào ngày mai để lấy báo cáo."
          }
        },
        {
          "role": "ai",
          "text": "We’re sorry this happened. Stay safe while you’re here.",
          "translations": {
            "ko": "이런 일이 일어나서 죄송합니다. 여기 계시는 동안 안전을 유의하세요.",
            "zh": "对此我们深感抱歉。在这里请保持安全。",
            "ja": "このような事態になり申し訳ありません。滞在中は安全に過ごしてください。",
            "vi": "Chúng tôi rất tiếc về sự cố này. Hãy giữ an toàn khi bạn ở đây."
          }
        },
        {
          "role": "user",
          "text": "I appreciate your help. Thank you.",
          "translations": {
            "ko": "도움 주셔서 감사합니다.",
            "zh": "我感谢你的帮助。谢谢你。",
            "ja": "ご協力いただき感謝します。ありがとうございます。",
            "vi": "Tôi đánh giá cao sự giúp đỡ của bạn. Cảm ơn."
          }
        }
      ]
    },
    {
      "description": {
        "ko": "비행 취소와 재예약에 대처하는 상황",
        "zh": "处理航班取消和重新预订",
        "ja": "フライトのキャンセルと再予約の対応",
        "vi": "Đối phó với việc hủy chuyến bay và đặt lại vé"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "We regret to inform you that your flight has been canceled.",
          "translations": {
            "ko": "귀하의 비행이 취소되었다는 사실을 알려드리게 되어 유감입니다.",
            "zh": "很遗憾地通知您，您的航班已被取消。",
            "ja": "申し訳ありませんが、あなたのフライトはキャンセルされました。",
            "vi": "Chúng tôi rất tiếc phải thông báo rằng chuyến bay của bạn đã bị hủy."
          }
        },
        {
          "role": "user",
          "text": "Oh no. What caused the cancellation?",
          "translations": {
            "ko": "아이고. 취소의 원인이 무엇인가요?",
            "zh": "哦不。是什么原因导致取消的？",
            "ja": "ええ、何がキャンセルの原因ですか？",
            "vi": "Ôi không. Điều gì đã gây ra việc hủy bỏ?"
          }
        },
        {
          "role": "ai",
          "text": "We can rebook you on the next available flight.",
          "translations": {
            "ko": "다음 가능한 비행으로 재예약해 드릴 수 있습니다.",
            "zh": "我们可以帮您预订下一班可用的航班。",
            "ja": "次の利用可能なフライトにあなたを再予約することができます。",
            "vi": "Chúng tôi có thể đặt lại vé cho bạn trên chuyến bay tiếp theo."
          }
        },
        {
          "role": "user",
          "text": "Yes, please help me rebook.",
          "translations": {
            "ko": "네, 재예약을 부탁드립니다.",
            "zh": "是的，请帮我重新预订。",
            "ja": "はい、再予約をお願いします。",
            "vi": "Vâng, hãy giúp tôi đặt lại vé."
          }
        },
        {
          "role": "ai",
          "text": "Would you prefer to travel later today or tomorrow?",
          "translations": {
            "ko": "오늘 늦게 여행하시겠습니까, 아니면 내일 여행하시겠습니까?",
            "zh": "你更愿意选择今天晚些时候还是明天出行？",
            "ja": "今日の後半または明日に旅行したいですか？",
            "vi": "Bạn có muốn đi lại vào sau hôm nay hoặc ngày mai không?"
          }
        },
        {
          "role": "user",
          "text": "Tonight would be better if possible.",
          "translations": {
            "ko": "가능하다면 오늘 밤이 더 좋을 것 같아요.",
            "zh": "如果可能的话，今晚会更好。",
            "ja": "可能であれば今夜の方が良いです。",
            "vi": "Nếu có thể thì tốt hơn là tối nay."
          }
        },
        {
          "role": "ai",
          "text": "There’s a seat available at 8 PM tonight.",
          "translations": {
            "ko": "오늘 밤 8시에 자리가 있습니다.",
            "zh": "今晚8点有一个空位。",
            "ja": "今夜8時に空席があります。",
            "vi": "Có một chỗ trống vào lúc 8 giờ tối nay."
          }
        },
        {
          "role": "user",
          "text": "That works. I’ll take the 8 PM flight.",
          "translations": {
            "ko": "그게 좋네요. 저는 8시 비행기를 탈게요.",
            "zh": "这样可以。我将乘坐8点的航班。",
            "ja": "それで大丈夫です。8時のフライトを予約します。",
            "vi": "Được rồi. Tôi sẽ chọn chuyến bay lúc 8 giờ tối."
          }
        },
        {
          "role": "ai",
          "text": "We’ll also provide a meal voucher for the inconvenience.",
          "translations": {
            "ko": "불편을 드려서 식사권도 제공해 드리겠습니다.",
            "zh": "对于给您带来的不便，我们还将提供一张餐券。",
            "ja": "ご迷惑をおかけした分、食事券も提供します。",
            "vi": "Chúng tôi cũng sẽ cung cấp phiếu ăn để bù đắp sự bất tiện."
          }
        },
        {
          "role": "user",
          "text": "Thanks. I really appreciate that.",
          "translations": {
            "ko": "감사합니다. 정말 감사드립니다.",
            "zh": "谢谢。我真的很感激。",
            "ja": "ありがとう。本当に感謝します。",
            "vi": "Cảm ơn. Tôi thực sự đánh giá cao điều đó."
          }
        },
        {
          "role": "ai",
          "text": "Would you like us to update your hotel reservation?",
          "translations": {
            "ko": "호텔 예약을 업데이트 해드릴까요?",
            "zh": "您希望我们更新您的酒店预订吗？",
            "ja": "ホテルの予約を更新しましょうか？",
            "vi": "Bạn có muốn chúng tôi cập nhật lại đặt phòng khách sạn của bạn không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, please notify the hotel about the delay.",
          "translations": {
            "ko": "네, 호텔에 지연 사항을 알려주시기 바랍니다.",
            "zh": "是的，请通知酒店我将延迟到达。",
            "ja": "はい、遅延についてホテルに通知してください。",
            "vi": "Vâng, vui lòng thông báo cho khách sạn về sự trễ hẹn."
          }
        },
        {
          "role": "ai",
          "text": "You’ll receive a new ticket via email and text.",
          "translations": {
            "ko": "새 티켓은 이메일과 문자로 받으실 수 있습니다.",
            "zh": "您将通过电子邮件和短信收到新的机票。",
            "ja": "新しいチケットはメールとテキストで送ります。",
            "vi": "Bạn sẽ nhận được vé mới qua email và tin nhắn."
          }
        },
        {
          "role": "user",
          "text": "Got it. I’ll watch for the message.",
          "translations": {
            "ko": "알겠습니다. 메시지를 확인하겠습니다.",
            "zh": "收到。我会注意查收信息。",
            "ja": "了解です。メッセージを待ちます。",
            "vi": "Đã hiểu. Tôi sẽ chờ tin nhắn."
          }
        },
        {
          "role": "ai",
          "text": "Do you need assistance with checked luggage?",
          "translations": {
            "ko": "수하물 체크에 도움이 필요하신가요?",
            "zh": "您需要托运行李的帮助吗？",
            "ja": "手荷物のチェックに手伝いが必要ですか？",
            "vi": "Bạn có cần hỗ trợ với hành lý ký gửi không?"
          }
        },
        {
          "role": "user",
          "text": "No, I already have my bags. Thanks.",
          "translations": {
            "ko": "아니요, 이미 가방을 가지고 있습니다. 감사합니다.",
            "zh": "不，我已经有我的行李了。谢谢。",
            "ja": "いえ、すでに荷物を持っています。ありがとう。",
            "vi": "Không, tôi đã có hành lý của mình. Cảm ơn."
          }
        },
        {
          "role": "ai",
          "text": "We can also issue a travel credit if you prefer.",
          "translations": {
            "ko": "여행 크레딧도 발행해 드릴 수 있습니다.",
            "zh": "如果您愿意，我们也可以发放旅行信用。",
            "ja": "希望があれば旅行クレジットも発行できます。",
            "vi": "Chúng tôi cũng có thể cấp tín dụng du lịch nếu bạn muốn."
          }
        },
        {
          "role": "user",
          "text": "I’ll keep the credit in mind. Thank you.",
          "translations": {
            "ko": "크레딧에 대해 생각해 보겠습니다. 감사합니다.",
            "zh": "我会记住这个信用。谢谢你。",
            "ja": "クレジットのことは覚えておきます。ありがとうございます。",
            "vi": "Tôi sẽ ghi nhớ tín dụng. Cảm ơn bạn."
          }
        },
        {
          "role": "ai",
          "text": "Let us know how we can support you further.",
          "translations": {
            "ko": "어떻게 더 도와드릴 수 있는지 알려주세요.",
            "zh": "请告诉我们如何进一步支持您。",
            "ja": "さらにサポートできることがあればお知らせください。",
            "vi": "Hãy cho chúng tôi biết chúng tôi có thể hỗ trợ bạn thêm gì."
          }
        },
        {
          "role": "user",
          "text": "I’ll reach out if I need anything else.",
          "translations": {
            "ko": "다른 것이 필요하면 연락하겠습니다.",
            "zh": "如果我需要其他的东西，我会联系你们的。",
            "ja": "他に何か必要なことがあれば連絡します。",
            "vi": "Tôi sẽ liên hệ nếu tôi cần thêm gì."
          }
        }
      ]
    },
    {
      "description": {
        "ko": "놓친 가이드 투어에 대한 환불 요청",
        "zh": "申请退款，因为错过了导游团。",
        "ja": "ガイドツアーを逃したための返金を申請します",
        "vi": "Yêu cầu hoàn tiền cho một tour hướng dẫn bị bỏ lỡ"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "I'm sorry to hear you missed the tour.",
          "translations": {
            "ko": "투어를 놓쳤다니 안타깝네요.",
            "zh": "很抱歉听到您错过了旅行团。",
            "ja": "ツアーを逃したとは残念です。",
            "vi": "Tôi rất tiếc khi nghe bạn đã bỏ lỡ chuyến tham quan."
          }
        },
        {
          "role": "user",
          "text": "Hi. I missed my tour this morning due to a train delay.",
          "translations": {
            "ko": "안녕하세요. 오늘 아침에 기차 지연으로 투어를 놓쳤습니다.",
            "zh": "你好。我今天早上因为火车延误错过了我的旅行团。",
            "ja": "こんにちは。今朝、電車の遅延でツアーに遅れました。",
            "vi": "Xin chào. Tôi đã bỏ lỡ chuyến tham quan sáng nay do chậm chuyến tàu."
          }
        },
        {
          "role": "ai",
          "text": "Was it due to a delay or a personal emergency?",
          "translations": {
            "ko": "지연 때문이었나요, 아니면 개인적인 긴급 사항 때문이었나요?",
            "zh": "是因为延误还是个人紧急情况？",
            "ja": "遅延が原因ですか、それとも個人的な緊急事態がありましたか？",
            "vi": "Đó là do chậm trễ hay khẩn cấp cá nhân?"
          }
        },
        {
          "role": "user",
          "text": "Yes, the train was delayed over two hours.",
          "translations": {
            "ko": "네, 기차가 2시간 이상 지연되었습니다.",
            "zh": "是的，火车延误了两个多小时。",
            "ja": "はい、電車が2時間以上遅れました。",
            "vi": "Vâng, chuyến tàu đã bị trễ hơn hai giờ."
          }
        },
        {
          "role": "ai",
          "text": "Did you try contacting us before the scheduled time?",
          "translations": {
            "ko": "예정된 시간 전에 저희에게 연락하려고 시도하셨나요?",
            "zh": "在预定时间之前，您试过联系我们吗？",
            "ja": "予定時間前に私たちに連絡しようとしましたか？",
            "vi": "Bạn có thử liên hệ với chúng tôi trước thời gian dự kiến không?"
          }
        },
        {
          "role": "user",
          "text": "I tried calling but couldn’t get through.",
          "translations": {
            "ko": "전화를 시도했지만 연결되지 않았습니다.",
            "zh": "我试图打电话，但是无法接通。",
            "ja": "電話しようとしましたがつながりませんでした。",
            "vi": "Tôi đã thử gọi nhưng không thể liên lạc được."
          }
        },
        {
          "role": "ai",
          "text": "We typically require 24-hour notice for refunds.",
          "translations": {
            "ko": "환불은 일반적으로 24시간 전에 알려주셔야 합니다.",
            "zh": "我们通常需要提前24小时通知才能退款。",
            "ja": "通常、返金には24時間前の通知が必要です。",
            "vi": "Chúng tôi thường yêu cầu thông báo 24 giờ trước để hoàn tiền."
          }
        },
        {
          "role": "user",
          "text": "I understand the policy, but I was really stuck.",
          "translations": {
            "ko": "정책을 이해하지만, 정말로 곤란했습니다.",
            "zh": "我理解这个政策，但我真的被困住了。",
            "ja": "ポリシーは理解していますが、本当に困っていました。",
            "vi": "Tôi hiểu chính sách, nhưng tôi thực sự bị mắc kẹt."
          }
        },
        {
          "role": "ai",
          "text": "Let me check if an exception can be made.",
          "translations": {
            "ko": "예외를 적용할 수 있는지 확인해 보겠습니다.",
            "zh": "让我看看是否可以做出例外。",
            "ja": "例外を認められるかどうか確認してみましょう。",
            "vi": "Để tôi kiểm tra xem có thể làm ngoại lệ không."
          }
        },
        {
          "role": "user",
          "text": "That would be great if you can check.",
          "translations": {
            "ko": "확인해 주신다면 좋겠습니다.",
            "zh": "如果你能查一下，那就太好了。",
            "ja": "確認していただけるとありがたいです。",
            "vi": "Nếu bạn có thể kiểm tra thì thật tuyệt."
          }
        },
        {
          "role": "ai",
          "text": "Can you provide proof of the reason you missed it?",
          "translations": {
            "ko": "놓친 이유에 대한 증거를 제공하실 수 있나요?",
            "zh": "您能提供您错过的原因的证明吗？",
            "ja": "それを逃した理由の証明を提供できますか？",
            "vi": "Bạn có thể cung cấp bằng chứng về lý do bạn bỏ lỡ không?"
          }
        },
        {
          "role": "user",
          "text": "Sure, I have a photo of the train notice.",
          "translations": {
            "ko": "네, 기차 공지사항의 사진이 있습니다.",
            "zh": "当然，我有火车通知的照片。",
            "ja": "はい、電車の遅延通知の写真があります。",
            "vi": "Chắc chắn, tôi có một bức ảnh của thông báo tàu."
          }
        },
        {
          "role": "ai",
          "text": "We may offer a partial refund or a reschedule.",
          "translations": {
            "ko": "부분 환불 또는 재예약을 제안할 수 있습니다.",
            "zh": "我们可能会提供部分退款或重新安排。",
            "ja": "部分的な返金または再スケジュールを提供することができます。",
            "vi": "Chúng tôi có thể cung cấp một phần hoàn tiền hoặc lịch trình lại."
          }
        },
        {
          "role": "user",
          "text": "Either would be fine. I just don’t want to lose everything.",
          "translations": {
            "ko": "둘 중 어느 것이든 괜찮습니다. 모든 것을 잃고 싶지 않아요.",
            "zh": "两者都可以。我只是不想失去所有的东西。",
            "ja": "どちらでも大丈夫です。ただ、全てを失いたくないだけです。",
            "vi": "Bất kỳ điều gì cũng được. Tôi chỉ không muốn mất tất cả."
          }
        },
        {
          "role": "ai",
          "text": "Would you be interested in joining tomorrow’s session?",
          "translations": {
            "ko": "내일 세션에 참여하실 생각이 있으신가요?",
            "zh": "你有兴趣参加明天的会议吗？",
            "ja": "明日のセッションに参加する興味はありますか？",
            "vi": "Bạn có muốn tham gia buổi họp vào ngày mai không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I can do tomorrow’s tour if there’s space.",
          "translations": {
            "ko": "네, 자리가 있다면 내일 투어에 참여할 수 있습니다.",
            "zh": "是的，如果有空位，我可以参加明天的旅行。",
            "ja": "はい、空きがあれば明日のツアーに参加できます。",
            "vi": "Vâng, tôi có thể tham gia chuyến tham quan ngày mai nếu còn chỗ."
          }
        },
        {
          "role": "ai",
          "text": "Your request has been forwarded to our supervisor.",
          "translations": {
            "ko": "귀하의 요청이 우리의 감독관에게 전달되었습니다.",
            "zh": "您的请求已转交给我们的主管。",
            "ja": "あなたのリクエストは上司に転送されました。",
            "vi": "Yêu cầu của bạn đã được chuyển đến giám sát viên của chúng tôi."
          }
        },
        {
          "role": "user",
          "text": "Okay, I’ll wait to hear back.",
          "translations": {
            "ko": "알겠습니다, 답변을 기다리겠습니다.",
            "zh": "好的，我会等待回复。",
            "ja": "了解しました、返事を待ちます。",
            "vi": "Được, tôi sẽ chờ phản hồi."
          }
        },
        {
          "role": "ai",
          "text": "We’ll email you with a final decision soon.",
          "translations": {
            "ko": "곧 최종 결정에 대해 이메일로 알려드리겠습니다.",
            "zh": "我们将尽快通过电子邮件向您发送最终决定。",
            "ja": "近々最終決定をメールでお知らせします。",
            "vi": "Chúng tôi sẽ gửi email thông báo quyết định cuối cùng cho bạn sớm."
          }
        },
        {
          "role": "user",
          "text": "Thanks for considering my situation.",
          "translations": {
            "ko": "제 상황을 고려해 주셔서 감사합니다.",
            "zh": "感谢您考虑我的情况。",
            "ja": "私の状況を考慮していただきありがとうございます。",
            "vi": "Cảm ơn bạn đã xem xét tình hình của tôi."
          }
        }
      ]
    },
    {
      "description": {
        "ko": "호텔 숙박에 대한 불만 제기",
        "zh": "投诉酒店住宿",
        "ja": "ホテル滞在についてのクレームを提出する",
        "vi": "Khiếu nại về kỳ nghỉ tại khách sạn"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "I'm sorry your experience didn’t meet expectations.",
          "translations": {
            "ko": "귀하의 경험이 기대에 부합하지 않아 죄송합니다.",
            "zh": "很抱歉，您的体验未能达到预期。",
            "ja": "ご期待に添えなかったこと、申し訳ありません。",
            "vi": "Tôi rất tiếc vì trải nghiệm của bạn không đạt kỳ vọng."
          }
        },
        {
          "role": "user",
          "text": "Hi. I had a few problems during my stay last weekend.",
          "translations": {
            "ko": "안녕하세요. 지난 주말에 숙박 중 몇 가지 문제가 있었습니다.",
            "zh": "嗨，我上周末住宿期间遇到了一些问题。",
            "ja": "こんにちは。先週末の滞在中にいくつか問題がありました。",
            "vi": "Xin chào. Tôi đã gặp một số vấn đề trong kỳ nghỉ cuối tuần vừa qua của mình."
          }
        },
        {
          "role": "ai",
          "text": "Can you describe what issues you faced?",
          "translations": {
            "ko": "어떤 문제를 겪으셨는지 설명해주실 수 있나요?",
            "zh": "你能描述一下你遇到的问题吗？",
            "ja": "どのような問題がありましたか？",
            "vi": "Bạn có thể mô tả những vấn đề bạn đã gặp phải không?"
          }
        },
        {
          "role": "user",
          "text": "The room wasn’t clean and the AC didn’t work properly.",
          "translations": {
            "ko": "방이 깨끗하지 않았고 에어컨이 제대로 작동하지 않았습니다.",
            "zh": "房间不干净，空调也不正常工作。",
            "ja": "部屋が清潔ではなく、エアコンも正常に動作しませんでした。",
            "vi": "Phòng không sạch sẽ và máy lạnh không hoạt động đúng cách."
          }
        },
        {
          "role": "ai",
          "text": "Did you report the issue during your stay?",
          "translations": {
            "ko": "숙박 중에 문제를 보고하셨나요?",
            "zh": "您在住宿期间报告了这个问题吗？",
            "ja": "滞在中にその問題を報告しましたか？",
            "vi": "Bạn có báo cáo vấn đề này trong thời gian lưu trú không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I told the front desk but nothing changed.",
          "translations": {
            "ko": "네, 프론트 데스크에 말했지만 아무것도 바뀌지 않았습니다.",
            "zh": "是的，我告诉了前台，但没有任何改变。",
            "ja": "はい、フロントに伝えましたが何も変わりませんでした。",
            "vi": "Vâng, tôi đã thông báo cho quầy tiếp tân nhưng không có gì thay đổi."
          }
        },
        {
          "role": "ai",
          "text": "We’ll review the situation with our staff.",
          "translations": {
            "ko": "우리 직원들과 상황을 검토하겠습니다.",
            "zh": "我们将与我们的员工一起审查这个情况。",
            "ja": "私たちはスタッフと一緒に状況を再評価します。",
            "vi": "Chúng tôi sẽ xem xét tình hình với nhân viên của mình."
          }
        },
        {
          "role": "user",
          "text": "I appreciate that. I hope it helps future guests.",
          "translations": {
            "ko": "그것에 감사드립니다. 향후 손님들에게 도움이 되길 바랍니다.",
            "zh": "我很感激。我希望这能帮助未来的客人。",
            "ja": "それを聞いて安心しました。これが将来のゲストのために役立つことを願っています。",
            "vi": "Tôi rất cảm kích điều đó. Tôi hy vọng nó sẽ giúp ích cho khách hàng tương lai."
          }
        },
        {
          "role": "ai",
          "text": "Would you like a partial refund or a discount on a future stay?",
          "translations": {
            "ko": "부분 환불을 원하시나요, 아니면 다음 숙박에 할인을 원하시나요?",
            "zh": "您希望部分退款还是在未来的住宿中享受折扣？",
            "ja": "部分的な返金、または次回の滞在の割引をご希望ですか？",
            "vi": "Bạn có muốn nhận lại một phần tiền hoặc giảm giá cho lần lưu trú tương lai không?"
          }
        },
        {
          "role": "user",
          "text": "A partial refund would be appreciated.",
          "translations": {
            "ko": "부분 환불이 가능하다면 감사하겠습니다.",
            "zh": "我会很感激部分退款。",
            "ja": "部分的な返金をいただけるとありがたいです。",
            "vi": "Tôi sẽ rất biết ơn nếu nhận được hoàn lại một phần tiền."
          }
        },
        {
          "role": "ai",
          "text": "We strive to improve based on guest feedback.",
          "translations": {
            "ko": "우리는 손님의 피드백을 바탕으로 개선하려 노력합니다.",
            "zh": "我们力求根据客户反馈进行改进。",
            "ja": "私たちはゲストのフィードバックに基づいて改善を図っています。",
            "vi": "Chúng tôi luôn cố gắng cải thiện dựa trên phản hồi của khách hàng."
          }
        },
        {
          "role": "user",
          "text": "Glad to hear that. I hope things improve.",
          "translations": {
            "ko": "그렇다니 다행입니다. 상황이 개선되길 바랍니다.",
            "zh": "很高兴听到这个。我希望情况会改善。",
            "ja": "それを聞いてうれしいです。改善されることを願っています。",
            "vi": "Rất vui khi nghe điều đó. Tôi hy vọng mọi thứ sẽ được cải thiện."
          }
        },
        {
          "role": "ai",
          "text": "I’ve noted your concerns in the system.",
          "translations": {
            "ko": "시스템에 귀하의 문제점을 기록했습니다.",
            "zh": "我已经在系统中记录了您的问题。",
            "ja": "システムにあなたの懸念を記録しました。",
            "vi": "Tôi đã ghi nhận những mối quan tâm của bạn vào hệ thống."
          }
        },
        {
          "role": "user",
          "text": "Thanks for recording the issue.",
          "translations": {
            "ko": "문제를 기록해 주셔서 감사합니다.",
            "zh": "感谢您记录这个问题。",
            "ja": "問題を記録していただきありがとうございます。",
            "vi": "Cảm ơn bạn đã ghi lại vấn đề."
          }
        },
        {
          "role": "ai",
          "text": "Would a room upgrade on your next visit be acceptable?",
          "translations": {
            "ko": "다음 방문 시 객실 업그레이드가 괜찮으실까요?",
            "zh": "下次访问时升级房间是否可以接受？",
            "ja": "次回の訪問時に部屋のアップグレードはいかがでしょうか？",
            "vi": "Bạn có chấp nhận nâng cấp phòng trong lần thăm quan tiếp theo không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, that would be a nice gesture.",
          "translations": {
            "ko": "네, 그것이 좋은 제안이 될 것 같습니다.",
            "zh": "是的，那将是一个很好的表示。",
            "ja": "はい、それは素敵なジェスチャーになります。",
            "vi": "Vâng, đó sẽ là một biểu hiện tốt đẹp."
          }
        },
        {
          "role": "ai",
          "text": "Is there anything else we can do to make this right?",
          "translations": {
            "ko": "이 문제를 바로잡기 위해 우리가 더 할 수 있는 것이 있나요?",
            "zh": "还有什么我们可以做的来弥补这个问题吗？",
            "ja": "他に何か私たちができることはありますか？",
            "vi": "Còn điều gì chúng tôi có thể làm để khắc phục điều này không?"
          }
        },
        {
          "role": "user",
          "text": "No, that would cover it.",
          "translations": {
            "ko": "아니요, 그것으로 충분합니다.",
            "zh": "不，那就够了。",
            "ja": "いえ、それで十分です。",
            "vi": "Không, điều đó đã đủ."
          }
        },
        {
          "role": "ai",
          "text": "Thank you for bringing this to our attention.",
          "translations": {
            "ko": "이 문제를 알려주셔서 감사합니다.",
            "zh": "感谢您把这个问题告诉我们。",
            "ja": "この問題を私たちに知らせてくれてありがとうございます。",
            "vi": "Cảm ơn bạn đã đưa vấn đề này đến sự chú ý của chúng tôi."
          }
        },
        {
          "role": "user",
          "text": "Thanks for listening and responding.",
          "translations": {
            "ko": "들어주시고 응답해 주셔서 감사합니다.",
            "zh": "感谢您的倾听和回应。",
            "ja": "聞いてくれて、対応してくれてありがとう。",
            "vi": "Cảm ơn bạn đã lắng nghe và phản hồi."
          }
        }
      ]
    },
    {
      "description": {
        "ko": "여행 번역 앱에 대한 도움 요청",
        "zh": "寻求旅行翻译应用的帮助",
        "ja": "旅行翻訳アプリのヘルプを求める",
        "vi": "Yêu cầu giúp đỡ với ứng dụng dịch thuật du lịch"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Are you having trouble with your translation app?",
          "translations": {
            "ko": "번역 앱에 문제가 있으신가요?",
            "zh": "您在使用翻译应用程序时遇到问题了吗？",
            "ja": "翻訳アプリに問題がありますか？",
            "vi": "Bạn có gặp rắc rối với ứng dụng dịch thuật của mình không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, it’s not translating some sentences properly.",
          "translations": {
            "ko": "네, 일부 문장이 제대로 번역되지 않습니다.",
            "zh": "是的，它没有正确翻译一些句子。",
            "ja": "はい、いくつかの文が正しく翻訳されていません。",
            "vi": "Vâng, nó không dịch một số câu một cách chính xác."
          }
        },
        {
          "role": "ai",
          "text": "Which language are you trying to translate to?",
          "translations": {
            "ko": "어떤 언어로 번역하려고 하시나요?",
            "zh": "你想翻译成哪种语言？",
            "ja": "どの言語に翻訳しようとしていますか？",
            "vi": "Bạn đang cố gắng dịch sang ngôn ngữ nào?"
          }
        },
        {
          "role": "user",
          "text": "I’m trying to translate from English to Japanese.",
          "translations": {
            "ko": "저는 영어를 일본어로 번역하려고 합니다.",
            "zh": "我正在尝试从英语翻译成日语。",
            "ja": "英語から日本語に翻訳しようとしています。",
            "vi": "Tôi đang cố gắng dịch từ tiếng Anh sang tiếng Nhật."
          }
        },
        {
          "role": "ai",
          "text": "Sometimes the app needs a stable internet connection.",
          "translations": {
            "ko": "때때로 이 앱은 안정적인 인터넷 연결이 필요합니다.",
            "zh": "有时候，这个应用程序需要稳定的互联网连接。",
            "ja": "アプリは時々、安定したインターネット接続を必要とします。",
            "vi": "Đôi khi ứng dụng cần một kết nối internet ổn định."
          }
        },
        {
          "role": "user",
          "text": "Ah, that might be the issue-I’m on public Wi-Fi.",
          "translations": {
            "ko": "아, 그게 문제일 수도 있겠네요. 저는 공공 와이파이를 사용하고 있습니다.",
            "zh": "啊，这可能就是问题所在——我正在使用公共Wi-Fi。",
            "ja": "ああ、それが問題かもしれません。私は公共のWi-Fiを使用しています。",
            "vi": "Ah, có thể đó là vấn đề - Tôi đang sử dụng Wi-Fi công cộng."
          }
        },
        {
          "role": "ai",
          "text": "Have you downloaded the offline language pack?",
          "translations": {
            "ko": "오프라인 언어 팩을 다운로드 받으셨나요?",
            "zh": "你下载了离线语言包吗？",
            "ja": "オフライン言語パックをダウンロードしましたか？",
            "vi": "Bạn đã tải gói ngôn ngữ ngoại tuyến chưa?"
          }
        },
        {
          "role": "user",
          "text": "No, I didn’t know about the offline option.",
          "translations": {
            "ko": "아니요, 오프라인 옵션에 대해 몰랐습니다.",
            "zh": "不，我不知道有离线选项。",
            "ja": "いいえ、オフラインオプションについて知りませんでした。",
            "vi": "Không, tôi không biết về tùy chọn ngoại tuyến."
          }
        },
        {
          "role": "ai",
          "text": "You can also use the voice input feature for better accuracy.",
          "translations": {
            "ko": "더 정확한 번역을 위해 음성 입력 기능도 사용해 보실 수 있습니다.",
            "zh": "你也可以使用语音输入功能以提高准确性。",
            "ja": "より正確な結果のために、音声入力機能も使用できます。",
            "vi": "Bạn cũng có thể sử dụng tính năng nhập giọng nói để có độ chính xác tốt hơn."
          }
        },
        {
          "role": "user",
          "text": "That sounds useful. I’ll try it.",
          "translations": {
            "ko": "그게 유용하겠네요. 한번 사용해 볼게요.",
            "zh": "听起来很有用。我会试试的。",
            "ja": "それは便利そうですね。試してみます。",
            "vi": "Nghe có vẻ hữu ích. Tôi sẽ thử."
          }
        },
        {
          "role": "ai",
          "text": "Would you like me to help set it up for you?",
          "translations": {
            "ko": "제가 설정을 도와드릴까요?",
            "zh": "你需要我帮你设置吗？",
            "ja": "あなたのために設定を手伝いましょうか？",
            "vi": "Bạn có muốn tôi giúp thiết lập cho bạn không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I’d appreciate that. Thanks.",
          "translations": {
            "ko": "네, 감사합니다.",
            "zh": "是的，我会很感激的。谢谢。",
            "ja": "はい、それを感謝します。ありがとう。",
            "vi": "Có, tôi sẽ rất biết ơn. Cảm ơn."
          }
        },
        {
          "role": "ai",
          "text": "You can scan signs or menus using the camera function.",
          "translations": {
            "ko": "카메라 기능을 사용해 간판이나 메뉴를 스캔할 수 있습니다.",
            "zh": "你可以使用相机功能扫描标志或菜单。",
            "ja": "カメラ機能を使用して、看板やメニューをスキャンできます。",
            "vi": "Bạn có thể quét biển hiệu hoặc thực đơn bằng cách sử dụng chức năng máy ảnh."
          }
        },
        {
          "role": "user",
          "text": "Cool-I didn’t realize that was possible.",
          "translations": {
            "ko": "와, 그런 기능이 있다는 걸 몰랐네요.",
            "zh": "太酷了——我没意识到这是可能的。",
            "ja": "すごい、それが可能だとは思いませんでした。",
            "vi": "Thật tuyệt - Tôi không nhận ra điều đó có thể."
          }
        },
        {
          "role": "ai",
          "text": "If it crashes, try reinstalling it.",
          "translations": {
            "ko": "앱이 갑자기 꺼지면, 다시 설치해 보세요.",
            "zh": "如果它崩溃，试着重新安装它。",
            "ja": "もしクラッシュしたら、再インストールしてみてください。",
            "vi": "Nếu nó bị lỗi, hãy thử cài đặt lại."
          }
        },
        {
          "role": "user",
          "text": "Okay, I’ll try reinstalling it if needed.",
          "translations": {
            "ko": "알겠습니다, 필요하면 다시 설치해 볼게요.",
            "zh": "好的，如果需要的话，我会试着重新安装它。",
            "ja": "了解です、必要なら再インストールしてみます。",
            "vi": "Được, tôi sẽ thử cài đặt lại nếu cần."
          }
        },
        {
          "role": "ai",
          "text": "There’s also a built-in dictionary for quick lookups.",
          "translations": {
            "ko": "빠른 참조를 위한 내장 사전도 있습니다.",
            "zh": "还有一个内置的词典可以快速查找。",
            "ja": "クイックルックアップのための組み込み辞書もあります。",
            "vi": "Còn có một từ điển tích hợp cho việc tra cứu nhanh."
          }
        },
        {
          "role": "user",
          "text": "Nice. That’ll come in handy.",
          "translations": {
            "ko": "좋네요. 유용하게 쓸 수 있을 것 같아요.",
            "zh": "太好了。这会派上用场的。",
            "ja": "いいですね。それは便利になりそうです。",
            "vi": "Tốt. Điều đó sẽ rất hữu ích."
          }
        },
        {
          "role": "ai",
          "text": "Let me know if you need help using it while you're out.",
          "translations": {
            "ko": "외출 중에 사용하는 데 도움이 필요하면 알려주세요.",
            "zh": "如果你在外面使用它时需要帮助，请告诉我。",
            "ja": "外出中に使うのに困ったら、何でも聞いてください。",
            "vi": "Hãy cho tôi biết nếu bạn cần giúp khi bạn ra ngoài."
          }
        },
        {
          "role": "user",
          "text": "I will. Thanks for your help!",
          "translations": {
            "ko": "그럴게요. 도움 주셔서 감사합니다!",
            "zh": "我会的。谢谢你的帮助！",
            "ja": "そうします。助けてくれてありがとう！",
            "vi": "Tôi sẽ. Cảm ơn sự giúp đỡ của bạn!"
          }
        }
      ]
    },
    {
      "description": {
        "ko": "여행 중 의료 지원 받기",
        "zh": "在旅行期间接受医疗照顾",
        "ja": "旅行中の医療の受け取り",
        "vi": "Nhận sự chăm sóc y tế trong khi du lịch"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Are you experiencing any pain or symptoms right now?",
          "translations": {
            "ko": "지금 아픈 곳이나 증상이 있나요?",
            "zh": "你现在有任何疼痛或症状吗？",
            "ja": "今、何か痛みや症状はありますか？",
            "vi": "Bạn có đang cảm thấy đau đớn hoặc có triệu chứng gì không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I’ve had a bad headache since this morning.",
          "translations": {
            "ko": "네, 오늘 아침부터 머리가 많이 아파요.",
            "zh": "是的，我从今天早上开始就头痛得厉害。",
            "ja": "はい、今朝からひどい頭痛があります。",
            "vi": "Có, tôi đã bị đau đầu rất nhiều kể từ sáng nay."
          }
        },
        {
          "role": "ai",
          "text": "How long have you felt unwell?",
          "translations": {
            "ko": "얼마나 오래 아프셨나요?",
            "zh": "你感觉不舒服多久了？",
            "ja": "どのくらいの間、体調が悪いですか？",
            "vi": "Bạn đã cảm thấy không khỏe bao lâu rồi?"
          }
        },
        {
          "role": "user",
          "text": "It started after breakfast today.",
          "translations": {
            "ko": "오늘 아침 식사 후부터 시작됐습니다.",
            "zh": "今天早餐后就开始了。",
            "ja": "今日の朝食後に始まりました。",
            "vi": "Nó bắt đầu sau bữa sáng hôm nay."
          }
        },
        {
          "role": "ai",
          "text": "Do you have any allergies or medical history we should know?",
          "translations": {
            "ko": "알려야 할 알레르기나 병력이 있나요?",
            "zh": "你有任何过敏反应或我们应该知道的病史吗？",
            "ja": "私たちが知るべきアレルギーや病歴はありますか？",
            "vi": "Bạn có dị ứng hoặc có tiền sử y tế nào chúng tôi nên biết không?"
          }
        },
        {
          "role": "user",
          "text": "I’m allergic to penicillin.",
          "translations": {
            "ko": "저는 페니실린에 알레르기가 있습니다.",
            "zh": "我对青霉素过敏。",
            "ja": "ペニシリンにアレルギーがあります。",
            "vi": "Tôi bị dị ứng với penicillin."
          }
        },
        {
          "role": "ai",
          "text": "Have you taken any medication today?",
          "translations": {
            "ko": "오늘 약을 복용하셨나요?",
            "zh": "你今天有没有吃过任何药？",
            "ja": "今日、何か薬を服用しましたか？",
            "vi": "Bạn đã uống thuốc gì hôm nay chưa?"
          }
        },
        {
          "role": "user",
          "text": "Just a painkiller I brought with me.",
          "translations": {
            "ko": "제가 가지고 있던 진통제만 복용했습니다.",
            "zh": "只是我带来的一种止痛药。",
            "ja": "持ってきた鎮痛剤だけです。",
            "vi": "Chỉ một viên thuốc giảm đau mà tôi mang theo."
          }
        },
        {
          "role": "ai",
          "text": "We'll do a quick examination to assess your condition.",
          "translations": {
            "ko": "상태를 평가하기 위해 간단한 검사를 하겠습니다.",
            "zh": "我们将进行快速检查以评估你的病情。",
            "ja": "あなたの状態を評価するための簡単な検査を行います。",
            "vi": "Chúng tôi sẽ tiến hành kiểm tra nhanh để đánh giá tình trạng của bạn."
          }
        },
        {
          "role": "user",
          "text": "Okay, I’m ready.",
          "translations": {
            "ko": "알겠습니다, 준비됐어요.",
            "zh": "好的，我准备好了。",
            "ja": "はい、準備ができています。",
            "vi": "Được, tôi đã sẵn sàng."
          }
        },
        {
          "role": "ai",
          "text": "Would you like us to contact your insurance provider?",
          "translations": {
            "ko": "보험사에 연락드릴까요?",
            "zh": "你希望我们联系你的保险提供商吗？",
            "ja": "保険会社に連絡するようにしますか？",
            "vi": "Bạn có muốn chúng tôi liên hệ với nhà cung cấp bảo hiểm của bạn không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, please contact them if needed.",
          "translations": {
            "ko": "네, 필요하다면 그들에게 연락해 주세요.",
            "zh": "是的，请在需要时联系他们。",
            "ja": "はい、必要であれば彼らに連絡してください。",
            "vi": "Vâng, hãy liên hệ với họ nếu cần."
          }
        },
        {
          "role": "ai",
          "text": "You may need to rest and stay hydrated.",
          "translations": {
            "ko": "휴식을 취하고 충분히 수분을 섭취해야 할 수도 있습니다.",
            "zh": "你可能需要休息并保持充足的水分。",
            "ja": "休息を取り、水分補給をする必要があるかもしれません。",
            "vi": "Bạn có thể cần nghỉ ngơi và uống đủ nước."
          }
        },
        {
          "role": "user",
          "text": "I’ll follow your instructions.",
          "translations": {
            "ko": "당신의 지시에 따르겠습니다.",
            "zh": "我会按照你的指示操作。",
            "ja": "あなたの指示に従います。",
            "vi": "Tôi sẽ tuân theo hướng dẫn của bạn."
          }
        },
        {
          "role": "ai",
          "text": "Let us know if your symptoms get worse.",
          "translations": {
            "ko": "증상이 악화되면 알려주세요.",
            "zh": "如果你的症状加重，请告诉我们。",
            "ja": "症状が悪化したらお知らせください。",
            "vi": "Hãy cho chúng tôi biết nếu triệu chứng của bạn trở nên tồi tệ hơn."
          }
        },
        {
          "role": "user",
          "text": "Sure, I’ll monitor it closely.",
          "translations": {
            "ko": "그럼요, 저는 꼼꼼히 모니터링하겠습니다.",
            "zh": "好的，我会密切监控。",
            "ja": "了解です、しっかりと監視します。",
            "vi": "Được, tôi sẽ giám sát chặt chẽ."
          }
        },
        {
          "role": "ai",
          "text": "Would you like a translator to help during treatment?",
          "translations": {
            "ko": "치료 중에 통역사의 도움이 필요하십니까?",
            "zh": "你是否需要一位翻译在治疗期间帮助你？",
            "ja": "治療中に通訳をお手伝いにつけますか？",
            "vi": "Bạn có muốn một người phiên dịch giúp trong quá trình điều trị không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, a translator would be very helpful.",
          "translations": {
            "ko": "네, 통역사가 매우 도움이 될 것 같습니다.",
            "zh": "是的，有翻译会非常有帮助。",
            "ja": "はい、通訳は非常に役立ちます。",
            "vi": "Vâng, một người phiên dịch sẽ rất hữu ích."
          }
        },
        {
          "role": "ai",
          "text": "You're in good hands. We'll take care of you.",
          "translations": {
            "ko": "안심하세요. 우리가 잘 돌봐드리겠습니다.",
            "zh": "你在好手中。我们会照顾你。",
            "ja": "安心してください。私たちはあなたの世話をします。",
            "vi": "Bạn đang trong tay chúng tôi. Chúng tôi sẽ chăm sóc bạn."
          }
        },
        {
          "role": "user",
          "text": "Thanks. I feel better already.",
          "translations": {
            "ko": "감사합니다. 벌써 좋아진 기분이에요.",
            "zh": "谢谢。我已经感觉好多了。",
            "ja": "ありがとう。もう少し楽になりました。",
            "vi": "Cảm ơn. Tôi cảm thấy tốt hơn rồi."
          }
        }
      ]
    },
    {
      "description": {
        "ko": "외국 신용카드 요금 분쟁",
        "zh": "争议外国信用卡费用",
        "ja": "外国のクレジットカードの請求を争う",
        "vi": "Tranh chấp một khoản phí thẻ tín dụng nước ngoài"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "I see an unfamiliar charge on your account.",
          "translations": {
            "ko": "계정에 익숙하지 않은 요금이 있습니다.",
            "zh": "我在你的账户上看到一个不熟悉的费用。",
            "ja": "あなたのアカウントに見慣れない請求があります。",
            "vi": "Tôi thấy một khoản phí không quen thuộc trên tài khoản của bạn."
          }
        },
        {
          "role": "user",
          "text": "No, I don’t remember making that purchase.",
          "translations": {
            "ko": "아니요, 그 구매를 한 기억이 없습니다.",
            "zh": "不，我不记得我有做过那笔购买。",
            "ja": "いえ、その購入をした記憶はありません。",
            "vi": "Không, tôi không nhớ đã mua hàng đó."
          }
        },
        {
          "role": "ai",
          "text": "Was this a purchase you recognize?",
          "translations": {
            "ko": "이것이 인식하는 구매였습니까?",
            "zh": "这是你认识的一笔购买吗？",
            "ja": "これはあなたが認識する購入ですか？",
            "vi": "Đây có phải là một món hàng bạn nhận ra không?"
          }
        },
        {
          "role": "user",
          "text": "It looks like it was in a shop I’ve never visited.",
          "translations": {
            "ko": "제가 방문한 적 없는 가게에서 발생한 것 같습니다.",
            "zh": "看起来像是在我从未去过的店里。",
            "ja": "それは私が訪れたことのない店でのようです。",
            "vi": "Trông có vẻ như nó đã được mua ở một cửa hàng mà tôi chưa từng đến."
          }
        },
        {
          "role": "ai",
          "text": "Do you have the receipt or transaction details?",
          "translations": {
            "ko": "영수증이나 거래 세부 정보가 있습니까?",
            "zh": "你有收据或交易详情吗？",
            "ja": "レシートや取引の詳細はありますか？",
            "vi": "Bạn có hóa đơn hoặc chi tiết giao dịch không?"
          }
        },
        {
          "role": "user",
          "text": "No, I don’t have a receipt. I never went there.",
          "translations": {
            "ko": "아니요, 영수증이 없습니다. 저는 저기에 가본 적이 없습니다.",
            "zh": "不，我没有收据。我从未去过那里。",
            "ja": "いえ、レシートはありません。私はそこに行ったことはありません。",
            "vi": "Không, tôi không có hóa đơn. Tôi chưa bao giờ đến đó."
          }
        },
        {
          "role": "ai",
          "text": "We’ll temporarily reverse the charge while we investigate.",
          "translations": {
            "ko": "조사하는 동안 일시적으로 요금을 반대로 할 것입니다.",
            "zh": "我们会在调查期间暂时撤销这笔费用。",
            "ja": "調査する間、一時的に請求を逆転させます。",
            "vi": "Chúng tôi sẽ tạm thời hoàn lại khoản phí trong khi điều tra."
          }
        },
        {
          "role": "user",
          "text": "Thanks, that gives me peace of mind.",
          "translations": {
            "ko": "감사합니다. 안심이 되네요.",
            "zh": "谢谢，这让我安心了。",
            "ja": "ありがとう、それで安心しました。",
            "vi": "Cảm ơn, điều đó giúp tôi yên tâm."
          }
        },
        {
          "role": "ai",
          "text": "Did you use your card at this location previously?",
          "translations": {
            "ko": "이 위치에서 카드를 사용한 적이 있습니까?",
            "zh": "你之前在这个地方使用过你的卡吗？",
            "ja": "以前にこの場所でカードを使いましたか？",
            "vi": "Bạn đã sử dụng thẻ của mình tại địa điểm này trước đây chưa?"
          }
        },
        {
          "role": "user",
          "text": "I used my card nearby, but not at that store.",
          "translations": {
            "ko": "근처에서 카드를 사용했지만, 그 가게에서는 사용하지 않았습니다.",
            "zh": "我在附近使用过我的卡，但没有在那家店。",
            "ja": "その店ではないですが、近くでカードを使いました。",
            "vi": "Tôi đã sử dụng thẻ của mình gần đó, nhưng không phải ở cửa hàng đó."
          }
        },
        {
          "role": "ai",
          "text": "There may have been a duplicate or mistaken entry.",
          "translations": {
            "ko": "중복 또는 잘못된 항목이 있을 수 있습니다.",
            "zh": "可能有重复或错误的条目。",
            "ja": "重複または誤ったエントリーがあった可能性があります。",
            "vi": "Có thể đã có một mục nhập trùng lặp hoặc sai lầm."
          }
        },
        {
          "role": "user",
          "text": "That’s possible. Thanks for checking.",
          "translations": {
            "ko": "그럴 수 있겠네요. 확인해 주셔서 감사합니다.",
            "zh": "这是可能的。谢谢你的检查。",
            "ja": "それは可能性があります。確認してくれてありがとう。",
            "vi": "Điều đó có thể. Cảm ơn bạn đã kiểm tra."
          }
        },
        {
          "role": "ai",
          "text": "We'll notify you of the outcome within 10 days.",
          "translations": {
            "ko": "10일 이내에 결과를 알려드리겠습니다.",
            "zh": "我们将在10天内通知你结果。",
            "ja": "10日以内に結果をお知らせします。",
            "vi": "Chúng tôi sẽ thông báo cho bạn kết quả trong vòng 10 ngày."
          }
        },
        {
          "role": "user",
          "text": "Okay, I’ll wait for the results.",
          "translations": {
            "ko": "알겠습니다, 결과를 기다리겠습니다.",
            "zh": "好的，我会等待结果。",
            "ja": "はい、結果を待ちます。",
            "vi": "Được, tôi sẽ chờ kết quả."
          }
        },
        {
          "role": "ai",
          "text": "You can also set up alerts for international charges.",
          "translations": {
            "ko": "국제 요금에 대한 알림도 설정할 수 있습니다.",
            "zh": "你也可以设置国际费用的提醒。",
            "ja": "国際請求に対するアラートを設定することもできます。",
            "vi": "Bạn cũng có thể thiết lập cảnh báo cho các khoản phí quốc tế."
          }
        },
        {
          "role": "user",
          "text": "I’ll enable those alerts. Good idea.",
          "translations": {
            "ko": "그 알림을 설정하겠습니다. 좋은 생각이네요.",
            "zh": "我会启用那些提醒。好主意。",
            "ja": "そのアラートを有効にします。良いアイデアです。",
            "vi": "Tôi sẽ kích hoạt những cảnh báo đó. Ý tưởng hay."
          }
        },
        {
          "role": "ai",
          "text": "We recommend monitoring your account closely.",
          "translations": {
            "ko": "계정을 철저히 모니터링하는 것을 권장합니다.",
            "zh": "我们建议你密切监控你的账户。",
            "ja": "アカウントを密接に監視することをお勧めします。",
            "vi": "Chúng tôi khuyên bạn nên giám sát chặt chẽ tài khoản của mình."
          }
        },
        {
          "role": "user",
          "text": "Understood. I’ll keep an eye on it.",
          "translations": {
            "ko": "알겠습니다. 계속해서 주시하겠습니다.",
            "zh": "明白了。我会留意它。",
            "ja": "了解しました。注意深く見守ります。",
            "vi": "Hiểu rồi. Tôi sẽ để mắt đến nó."
          }
        },
        {
          "role": "ai",
          "text": "Let us know if any other suspicious activity occurs.",
          "translations": {
            "ko": "다른 의심스러운 활동이 발생하면 알려주세요.",
            "zh": "如果有任何其他可疑的活动，请告诉我们。",
            "ja": "他に怪しい活動があればお知らせください。",
            "vi": "Hãy cho chúng tôi biết nếu có bất kỳ hoạt động đáng ngờ nào xảy ra."
          }
        },
        {
          "role": "user",
          "text": "Thanks. I’ll report back if anything comes up.",
          "translations": {
            "ko": "감사합니다. 무언가 발생하면 보고하겠습니다.",
            "zh": "谢谢。如果有任何问题，我会回报的。",
            "ja": "ありがとう。何かあれば報告します。",
            "vi": "Cảm ơn. Tôi sẽ báo lại nếu có bất kỳ vấn đề gì xảy ra."
          }
        }
      ]
    }
  ]
};