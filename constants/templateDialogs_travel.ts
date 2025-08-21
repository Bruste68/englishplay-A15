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
        "en": "Changing a flight at the airport",
        "ko": "공항에서 항공편 변경하기",
        "zh": "在机场更改航班",
        "ja": "空港でフライトを変更する",
        "vi": "Đổi chuyến bay tại sân bay"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Hi, how can I assist you today?",
          "translations": {
            "ko": "안녕하세요, 어떻게 도와드릴까요?",
            "zh": "你好，今天我能帮你做些什么？",
            "ja": "こんにちは、何かお手伝いできることはありますか？",
            "vi": "Xin chào, tôi có thể giúp gì cho bạn hôm nay?",
            "en": "Hi, how can I assist you today?"
          }
        },
        {
          "role": "user",
          "text": "I need to change my flight to a later one.",
          "translations": {
            "ko": "제 항공편을 늦은 시간으로 변경하고 싶습니다.",
            "zh": "我需要将我的航班改到更晚的时间。",
            "ja": "私のフライトを遅い時間に変更したいです。",
            "vi": "Tôi cần đổi chuyến bay sang một chuyến sau.",
            "en": "I need to change my flight to a later one."
          }
        },
        {
          "role": "ai",
          "text": "Sure. What’s your current booking number?",
          "translations": {
            "ko": "알겠습니다. 현재 예약 번호가 어떻게 되나요?",
            "zh": "好的。你现在的预订号是多少？",
            "ja": "了解です。現在の予約番号は何ですか？",
            "vi": "Được. Số đặt chỗ hiện tại của bạn là gì?",
            "en": "Sure. What’s your current booking number?"
          }
        },
        {
          "role": "user",
          "text": "It’s AB123456.",
          "translations": {
            "ko": "AB123456입니다.",
            "zh": "是AB123456。",
            "ja": "AB123456です。",
            "vi": "Đó là AB123456.",
            "en": "It’s AB123456."
          }
        },
        {
          "role": "ai",
          "text": "Let me check... Okay, we have a 6 PM flight available.",
          "translations": {
            "ko": "확인해보겠습니다... 6시 항공편이 가능합니다.",
            "zh": "让我查一下...好的，我们有6点的航班。",
            "ja": "確認します…よろしい、午後6時のフライトが利用可能です。",
            "vi": "Để tôi kiểm tra... Được, chúng tôi có chuyến bay lúc 6 giờ chiều.",
            "en": "Let me check... Okay, we have a 6 PM flight available."
          }
        },
        {
          "role": "user",
          "text": "That works. Is there a change fee?",
          "translations": {
            "ko": "그걸로 괜찮습니다. 변경 수수료가 있나요?",
            "zh": "可以。有更改费用吗？",
            "ja": "それで大丈夫です。変更手数料はかかりますか？",
            "vi": "Được. Có phí đổi chuyến không?",
            "en": "That works. Is there a change fee?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, it’s $50 plus any fare difference.",
          "translations": {
            "ko": "네, $50과 추가 요금 차액이 있습니다.",
            "zh": "是的，需要支付50美元的更改费用，以及任何票价差额。",
            "ja": "はい、$50プラス運賃差額です。",
            "vi": "Có, là 50 đô la cộng với bất kỳ sự khác biệt về giá vé.",
            "en": "Yes, it’s $50 plus any fare difference."
          }
        },
        {
          "role": "user",
          "text": "Alright, please go ahead and change it.",
          "translations": {
            "ko": "알겠습니다, 변경해주세요.",
            "zh": "好的，请继续更改。",
            "ja": "了解しました、変更をお願いします。",
            "vi": "Được, vui lòng tiến hành đổi chuyến.",
            "en": "Alright, please go ahead and change it."
          }
        },
        {
          "role": "ai",
          "text": "Done. Your new flight is confirmed.",
          "translations": {
            "ko": "변경 완료되었습니다. 새로운 항공편이 확인되었습니다.",
            "zh": "完成了。你的新航班已确认。",
            "ja": "完了しました。新しいフライトが確定しました。",
            "vi": "Xong. Chuyến bay mới của bạn đã được xác nhận.",
            "en": "Done. Your new flight is confirmed."
          }
        },
        {
          "role": "user",
          "text": "Thanks. What’s the new gate number?",
          "translations": {
            "ko": "감사합니다. 새로운 탑승구 번호는 어떻게 되나요?",
            "zh": "谢谢。新的登机口号码是多少？",
            "ja": "ありがとう。新しいゲート番号は何ですか？",
            "vi": "Cảm ơn. Cổng mới là số mấy?",
            "en": "Thanks. What’s the new gate number?"
          }
        },
        {
          "role": "ai",
          "text": "It’s Gate 22. Boarding starts at 5:30 PM.",
          "translations": {
            "ko": "22번 탑승구입니다. 탑승은 오후 5시 30분부터 시작됩니다.",
            "zh": "是22号登机口。登机开始时间是5:30。",
            "ja": "ゲート22です。搭乗開始は午後5時30分からです。",
            "vi": "Đó là Cổng 22. Thủ tục lên máy bay bắt đầu lúc 5:30 chiều.",
            "en": "It’s Gate 22. Boarding starts at 5:30 PM."
          }
        },
        {
          "role": "user",
          "text": "Got it. Will my checked bag transfer automatically?",
          "translations": {
            "ko": "알겠습니다. 저의 수하물은 자동으로 이동되나요?",
            "zh": "明白了。我的托运行李会自动转运吗？",
            "ja": "分かりました。私の預けた荷物は自動的に転送されますか？",
            "vi": "Hiểu rồi. Hành lý của tôi sẽ được chuyển tự động phải không?",
            "en": "Got it. Will my checked bag transfer automatically?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, we’ve updated the baggage information.",
          "translations": {
            "ko": "네, 수하물 정보를 업데이트했습니다.",
            "zh": "是的，我们已经更新了行李信息。",
            "ja": "はい、荷物情報を更新しました。",
            "vi": "Đúng, chúng tôi đã cập nhật thông tin hành lý.",
            "en": "Yes, we’ve updated the baggage information."
          }
        },
        {
          "role": "user",
          "text": "Perfect. Do I need to go through security again?",
          "translations": {
            "ko": "좋습니다. 다시 보안 검색을 거쳐야 하나요?",
            "zh": "太好了。我需要再次通过安检吗？",
            "ja": "完璧です。もう一度セキュリティチェックを受ける必要はありますか？",
            "vi": "Hoàn hảo. Tôi có cần qua kiểm tra an ninh lại không?",
            "en": "Perfect. Do I need to go through security again?"
          }
        },
        {
          "role": "ai",
          "text": "No, just proceed to your gate directly.",
          "translations": {
            "ko": "아니요, 바로 탑승구로 가시면 됩니다.",
            "zh": "不需要，直接前往你的登机口即可。",
            "ja": "いいえ、直接ゲートに進んでください。",
            "vi": "Không, chỉ cần tiếp tục đến cổng của bạn.",
            "en": "No, just proceed to your gate directly."
          }
        },
        {
          "role": "user",
          "text": "Thank you. You’ve been very helpful.",
          "translations": {
            "ko": "감사합니다. 많은 도움이 되었습니다.",
            "zh": "谢谢你。你帮了我很大的忙。",
            "ja": "ありがとうございます。大変助かりました。",
            "vi": "Cảm ơn. Bạn đã giúp đỡ rất nhiều.",
            "en": "Thank you. You’ve been very helpful."
          }
        },
        {
          "role": "ai",
          "text": "It’s my pleasure. Safe travels!",
          "translations": {
            "ko": "천만에요. 안전한 여행 되세요!",
            "zh": "我很乐意帮助你。祝你旅途愉快！",
            "ja": "どういたしまして。安全な旅を！",
            "vi": "Rất vui được giúp đỡ. Chúc bạn một chuyến đi an toàn!",
            "en": "It’s my pleasure. Safe travels!"
          }
        },
        {
          "role": "user",
          "text": "Thanks again.",
          "translations": {
            "ko": "다시 한번 감사드립니다.",
            "zh": "再次感谢。",
            "ja": "再度、ありがとう。",
            "vi": "Cảm ơn một lần nữa.",
            "en": "Thanks again."
          }
        },
        {
          "role": "ai",
          "text": "Have a great flight.",
          "translations": {
            "ko": "좋은 비행 되세요.",
            "zh": "祝你旅途愉快。",
            "ja": "素晴らしいフライトを。",
            "vi": "Chúc bạn có một chuyến bay tốt.",
            "en": "Have a great flight."
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
        "en": "Explaining lost luggage to airline staff",
        "ko": "항공사 직원에게 분실된 수하물 설명하기",
        "zh": "向航空公司工作人员解释丢失行李的情况",
        "ja": "航空会社のスタッフに紛失した荷物を説明する",
        "vi": "Giải thích về hành lý bị mất với nhân viên hàng không"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Hi, how can I assist you today?",
          "translations": {
            "ko": "안녕하세요, 어떻게 도와드릴까요?",
            "zh": "你好，今天我能帮你做些什么？",
            "ja": "こんにちは、何かお手伝いできることはありますか？",
            "vi": "Xin chào, tôi có thể giúp gì cho bạn hôm nay?",
            "en": "Hi, how can I assist you today?"
          }
        },
        {
          "role": "user",
          "text": "I need to change my flight to a later one.",
          "translations": {
            "ko": "제 항공편을 늦은 시간으로 변경하고 싶습니다.",
            "zh": "我需要将我的航班改到更晚的时间。",
            "ja": "私のフライトを遅い時間に変更したいです。",
            "vi": "Tôi cần đổi chuyến bay sang một chuyến sau.",
            "en": "I need to change my flight to a later one."
          }
        },
        {
          "role": "ai",
          "text": "Sure. What’s your current booking number?",
          "translations": {
            "ko": "알겠습니다. 현재 예약 번호가 어떻게 되나요?",
            "zh": "好的。你现在的预订号是多少？",
            "ja": "了解です。現在の予約番号は何ですか？",
            "vi": "Được. Số đặt chỗ hiện tại của bạn là gì?",
            "en": "Sure. What’s your current booking number?"
          }
        },
        {
          "role": "user",
          "text": "It’s AB123456.",
          "translations": {
            "ko": "AB123456입니다.",
            "zh": "是AB123456。",
            "ja": "AB123456です。",
            "vi": "Đó là AB123456.",
            "en": "It’s AB123456."
          }
        },
        {
          "role": "ai",
          "text": "Let me check... Okay, we have a 6 PM flight available.",
          "translations": {
            "ko": "확인해보겠습니다... 6시 항공편이 가능합니다.",
            "zh": "让我查一下...好的，我们有6点的航班。",
            "ja": "確認します…よろしい、午後6時のフライトが利用可能です。",
            "vi": "Để tôi kiểm tra... Được, chúng tôi có chuyến bay lúc 6 giờ chiều.",
            "en": "Let me check... Okay, we have a 6 PM flight available."
          }
        },
        {
          "role": "user",
          "text": "That works. Is there a change fee?",
          "translations": {
            "ko": "그걸로 괜찮습니다. 변경 수수료가 있나요?",
            "zh": "可以。有更改费用吗？",
            "ja": "それで大丈夫です。変更手数料はかかりますか？",
            "vi": "Được. Có phí đổi chuyến không?",
            "en": "That works. Is there a change fee?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, it’s $50 plus any fare difference.",
          "translations": {
            "ko": "네, $50과 추가 요금 차액이 있습니다.",
            "zh": "是的，需要支付50美元的更改费用，以及任何票价差额。",
            "ja": "はい、$50プラス運賃差額です。",
            "vi": "Có, là 50 đô la cộng với bất kỳ sự khác biệt về giá vé.",
            "en": "Yes, it’s $50 plus any fare difference."
          }
        },
        {
          "role": "user",
          "text": "Alright, please go ahead and change it.",
          "translations": {
            "ko": "알겠습니다, 변경해주세요.",
            "zh": "好的，请继续更改。",
            "ja": "了解しました、変更をお願いします。",
            "vi": "Được, vui lòng tiến hành đổi chuyến.",
            "en": "Alright, please go ahead and change it."
          }
        },
        {
          "role": "ai",
          "text": "Done. Your new flight is confirmed.",
          "translations": {
            "ko": "변경 완료되었습니다. 새로운 항공편이 확인되었습니다.",
            "zh": "完成了。你的新航班已确认。",
            "ja": "完了しました。新しいフライトが確定しました。",
            "vi": "Xong. Chuyến bay mới của bạn đã được xác nhận.",
            "en": "Done. Your new flight is confirmed."
          }
        },
        {
          "role": "user",
          "text": "Thanks. What’s the new gate number?",
          "translations": {
            "ko": "감사합니다. 새로운 탑승구 번호는 어떻게 되나요?",
            "zh": "谢谢。新的登机口号码是多少？",
            "ja": "ありがとう。新しいゲート番号は何ですか？",
            "vi": "Cảm ơn. Cổng mới là số mấy?",
            "en": "Thanks. What’s the new gate number?"
          }
        },
        {
          "role": "ai",
          "text": "It’s Gate 22. Boarding starts at 5:30 PM.",
          "translations": {
            "ko": "22번 탑승구입니다. 탑승은 오후 5시 30분부터 시작됩니다.",
            "zh": "是22号登机口。登机开始时间是5:30。",
            "ja": "ゲート22です。搭乗開始は午後5時30分からです。",
            "vi": "Đó là Cổng 22. Thủ tục lên máy bay bắt đầu lúc 5:30 chiều.",
            "en": "It’s Gate 22. Boarding starts at 5:30 PM."
          }
        },
        {
          "role": "user",
          "text": "Got it. Will my checked bag transfer automatically?",
          "translations": {
            "ko": "알겠습니다. 저의 수하물은 자동으로 이동되나요?",
            "zh": "明白了。我的托运行李会自动转运吗？",
            "ja": "分かりました。私の預けた荷物は自動的に転送されますか？",
            "vi": "Hiểu rồi. Hành lý của tôi sẽ được chuyển tự động phải không?",
            "en": "Got it. Will my checked bag transfer automatically?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, we’ve updated the baggage information.",
          "translations": {
            "ko": "네, 수하물 정보를 업데이트했습니다.",
            "zh": "是的，我们已经更新了行李信息。",
            "ja": "はい、荷物情報を更新しました。",
            "vi": "Đúng, chúng tôi đã cập nhật thông tin hành lý.",
            "en": "Yes, we’ve updated the baggage information."
          }
        },
        {
          "role": "user",
          "text": "Perfect. Do I need to go through security again?",
          "translations": {
            "ko": "좋습니다. 다시 보안 검색을 거쳐야 하나요?",
            "zh": "太好了。我需要再次通过安检吗？",
            "ja": "完璧です。もう一度セキュリティチェックを受ける必要はありますか？",
            "vi": "Hoàn hảo. Tôi có cần qua kiểm tra an ninh lại không?",
            "en": "Perfect. Do I need to go through security again?"
          }
        },
        {
          "role": "ai",
          "text": "No, just proceed to your gate directly.",
          "translations": {
            "ko": "아니요, 바로 탑승구로 가시면 됩니다.",
            "zh": "不需要，直接前往你的登机口即可。",
            "ja": "いいえ、直接ゲートに進んでください。",
            "vi": "Không, chỉ cần tiếp tục đến cổng của bạn.",
            "en": "No, just proceed to your gate directly."
          }
        },
        {
          "role": "user",
          "text": "Thank you. You’ve been very helpful.",
          "translations": {
            "ko": "감사합니다. 많은 도움이 되었습니다.",
            "zh": "谢谢你。你帮了我很大的忙。",
            "ja": "ありがとうございます。大変助かりました。",
            "vi": "Cảm ơn. Bạn đã giúp đỡ rất nhiều.",
            "en": "Thank you. You’ve been very helpful."
          }
        },
        {
          "role": "ai",
          "text": "It’s my pleasure. Safe travels!",
          "translations": {
            "ko": "천만에요. 안전한 여행 되세요!",
            "zh": "我很乐意帮助你。祝你旅途愉快！",
            "ja": "どういたしまして。安全な旅を！",
            "vi": "Rất vui được giúp đỡ. Chúc bạn một chuyến đi an toàn!",
            "en": "It’s my pleasure. Safe travels!"
          }
        },
        {
          "role": "user",
          "text": "Thanks again.",
          "translations": {
            "ko": "다시 한번 감사드립니다.",
            "zh": "再次感谢。",
            "ja": "再度、ありがとう。",
            "vi": "Cảm ơn một lần nữa.",
            "en": "Thanks again."
          }
        },
        {
          "role": "ai",
          "text": "Have a great flight.",
          "translations": {
            "ko": "좋은 비행 되세요.",
            "zh": "祝你旅途愉快。",
            "ja": "素晴らしいフライトを。",
            "vi": "Chúc bạn có một chuyến bay tốt.",
            "en": "Have a great flight."
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
        "en": "Asking for local recommendations",
        "ko": "현지 추천 요청하기",
        "zh": "询问当地推荐",
        "ja": "地元のおすすめを尋ねる",
        "vi": "Yêu cầu đề xuất địa phương"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Hi, how can I assist you today?",
          "translations": {
            "ko": "안녕하세요, 어떻게 도와드릴까요?",
            "zh": "你好，今天我能帮你做些什么？",
            "ja": "こんにちは、何かお手伝いできることはありますか？",
            "vi": "Xin chào, tôi có thể giúp gì cho bạn hôm nay?",
            "en": "Hi, how can I assist you today?"
          }
        },
        {
          "role": "user",
          "text": "I need to change my flight to a later one.",
          "translations": {
            "ko": "제 항공편을 늦은 시간으로 변경하고 싶습니다.",
            "zh": "我需要将我的航班改到更晚的时间。",
            "ja": "私のフライトを遅い時間に変更したいです。",
            "vi": "Tôi cần đổi chuyến bay sang một chuyến sau.",
            "en": "I need to change my flight to a later one."
          }
        },
        {
          "role": "ai",
          "text": "Sure. What’s your current booking number?",
          "translations": {
            "ko": "알겠습니다. 현재 예약 번호가 어떻게 되나요?",
            "zh": "好的。你现在的预订号是多少？",
            "ja": "了解です。現在の予約番号は何ですか？",
            "vi": "Được. Số đặt chỗ hiện tại của bạn là gì?",
            "en": "Sure. What’s your current booking number?"
          }
        },
        {
          "role": "user",
          "text": "It’s AB123456.",
          "translations": {
            "ko": "AB123456입니다.",
            "zh": "是AB123456。",
            "ja": "AB123456です。",
            "vi": "Đó là AB123456.",
            "en": "It’s AB123456."
          }
        },
        {
          "role": "ai",
          "text": "Let me check... Okay, we have a 6 PM flight available.",
          "translations": {
            "ko": "확인해보겠습니다... 6시 항공편이 가능합니다.",
            "zh": "让我查一下...好的，我们有6点的航班。",
            "ja": "確認します…よろしい、午後6時のフライトが利用可能です。",
            "vi": "Để tôi kiểm tra... Được, chúng tôi có chuyến bay lúc 6 giờ chiều.",
            "en": "Let me check... Okay, we have a 6 PM flight available."
          }
        },
        {
          "role": "user",
          "text": "That works. Is there a change fee?",
          "translations": {
            "ko": "그걸로 괜찮습니다. 변경 수수료가 있나요?",
            "zh": "可以。有更改费用吗？",
            "ja": "それで大丈夫です。変更手数料はかかりますか？",
            "vi": "Được. Có phí đổi chuyến không?",
            "en": "That works. Is there a change fee?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, it’s $50 plus any fare difference.",
          "translations": {
            "ko": "네, $50과 추가 요금 차액이 있습니다.",
            "zh": "是的，需要支付50美元的更改费用，以及任何票价差额。",
            "ja": "はい、$50プラス運賃差額です。",
            "vi": "Có, là 50 đô la cộng với bất kỳ sự khác biệt về giá vé.",
            "en": "Yes, it’s $50 plus any fare difference."
          }
        },
        {
          "role": "user",
          "text": "Alright, please go ahead and change it.",
          "translations": {
            "ko": "알겠습니다, 변경해주세요.",
            "zh": "好的，请继续更改。",
            "ja": "了解しました、変更をお願いします。",
            "vi": "Được, vui lòng tiến hành đổi chuyến.",
            "en": "Alright, please go ahead and change it."
          }
        },
        {
          "role": "ai",
          "text": "Done. Your new flight is confirmed.",
          "translations": {
            "ko": "변경 완료되었습니다. 새로운 항공편이 확인되었습니다.",
            "zh": "完成了。你的新航班已确认。",
            "ja": "完了しました。新しいフライトが確定しました。",
            "vi": "Xong. Chuyến bay mới của bạn đã được xác nhận.",
            "en": "Done. Your new flight is confirmed."
          }
        },
        {
          "role": "user",
          "text": "Thanks. What’s the new gate number?",
          "translations": {
            "ko": "감사합니다. 새로운 탑승구 번호는 어떻게 되나요?",
            "zh": "谢谢。新的登机口号码是多少？",
            "ja": "ありがとう。新しいゲート番号は何ですか？",
            "vi": "Cảm ơn. Cổng mới là số mấy?",
            "en": "Thanks. What’s the new gate number?"
          }
        },
        {
          "role": "ai",
          "text": "It’s Gate 22. Boarding starts at 5:30 PM.",
          "translations": {
            "ko": "22번 탑승구입니다. 탑승은 오후 5시 30분부터 시작됩니다.",
            "zh": "是22号登机口。登机开始时间是5:30。",
            "ja": "ゲート22です。搭乗開始は午後5時30分からです。",
            "vi": "Đó là Cổng 22. Thủ tục lên máy bay bắt đầu lúc 5:30 chiều.",
            "en": "It’s Gate 22. Boarding starts at 5:30 PM."
          }
        },
        {
          "role": "user",
          "text": "Got it. Will my checked bag transfer automatically?",
          "translations": {
            "ko": "알겠습니다. 저의 수하물은 자동으로 이동되나요?",
            "zh": "明白了。我的托运行李会自动转运吗？",
            "ja": "分かりました。私の預けた荷物は自動的に転送されますか？",
            "vi": "Hiểu rồi. Hành lý của tôi sẽ được chuyển tự động phải không?",
            "en": "Got it. Will my checked bag transfer automatically?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, we’ve updated the baggage information.",
          "translations": {
            "ko": "네, 수하물 정보를 업데이트했습니다.",
            "zh": "是的，我们已经更新了行李信息。",
            "ja": "はい、荷物情報を更新しました。",
            "vi": "Đúng, chúng tôi đã cập nhật thông tin hành lý.",
            "en": "Yes, we’ve updated the baggage information."
          }
        },
        {
          "role": "user",
          "text": "Perfect. Do I need to go through security again?",
          "translations": {
            "ko": "좋습니다. 다시 보안 검색을 거쳐야 하나요?",
            "zh": "太好了。我需要再次通过安检吗？",
            "ja": "完璧です。もう一度セキュリティチェックを受ける必要はありますか？",
            "vi": "Hoàn hảo. Tôi có cần qua kiểm tra an ninh lại không?",
            "en": "Perfect. Do I need to go through security again?"
          }
        },
        {
          "role": "ai",
          "text": "No, just proceed to your gate directly.",
          "translations": {
            "ko": "아니요, 바로 탑승구로 가시면 됩니다.",
            "zh": "不需要，直接前往你的登机口即可。",
            "ja": "いいえ、直接ゲートに進んでください。",
            "vi": "Không, chỉ cần tiếp tục đến cổng của bạn.",
            "en": "No, just proceed to your gate directly."
          }
        },
        {
          "role": "user",
          "text": "Thank you. You’ve been very helpful.",
          "translations": {
            "ko": "감사합니다. 많은 도움이 되었습니다.",
            "zh": "谢谢你。你帮了我很大的忙。",
            "ja": "ありがとうございます。大変助かりました。",
            "vi": "Cảm ơn. Bạn đã giúp đỡ rất nhiều.",
            "en": "Thank you. You’ve been very helpful."
          }
        },
        {
          "role": "ai",
          "text": "It’s my pleasure. Safe travels!",
          "translations": {
            "ko": "천만에요. 안전한 여행 되세요!",
            "zh": "我很乐意帮助你。祝你旅途愉快！",
            "ja": "どういたしまして。安全な旅を！",
            "vi": "Rất vui được giúp đỡ. Chúc bạn một chuyến đi an toàn!",
            "en": "It’s my pleasure. Safe travels!"
          }
        },
        {
          "role": "user",
          "text": "Thanks again.",
          "translations": {
            "ko": "다시 한번 감사드립니다.",
            "zh": "再次感谢。",
            "ja": "再度、ありがとう。",
            "vi": "Cảm ơn một lần nữa.",
            "en": "Thanks again."
          }
        },
        {
          "role": "ai",
          "text": "Have a great flight.",
          "translations": {
            "ko": "좋은 비행 되세요.",
            "zh": "祝你旅途愉快。",
            "ja": "素晴らしいフライトを。",
            "vi": "Chúc bạn có một chuyến bay tốt.",
            "en": "Have a great flight."
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
        "en": "Navigating public transportation in a new city",
        "ko": "새로운 도시에서의 대중교통 이용하기",
        "zh": "在新城市中使用公共交通",
        "ja": "新しい都市での公共交通機関の利用方法",
        "vi": "Đi lại bằng phương tiện công cộng ở một thành phố mới"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Hi, how can I assist you today?",
          "translations": {
            "ko": "안녕하세요, 어떻게 도와드릴까요?",
            "zh": "你好，今天我能帮你做些什么？",
            "ja": "こんにちは、何かお手伝いできることはありますか？",
            "vi": "Xin chào, tôi có thể giúp gì cho bạn hôm nay?",
            "en": "Hi, how can I assist you today?"
          }
        },
        {
          "role": "user",
          "text": "I need to change my flight to a later one.",
          "translations": {
            "ko": "제 항공편을 늦은 시간으로 변경하고 싶습니다.",
            "zh": "我需要将我的航班改到更晚的时间。",
            "ja": "私のフライトを遅い時間に変更したいです。",
            "vi": "Tôi cần đổi chuyến bay sang một chuyến sau.",
            "en": "I need to change my flight to a later one."
          }
        },
        {
          "role": "ai",
          "text": "Sure. What’s your current booking number?",
          "translations": {
            "ko": "알겠습니다. 현재 예약 번호가 어떻게 되나요?",
            "zh": "好的。你现在的预订号是多少？",
            "ja": "了解です。現在の予約番号は何ですか？",
            "vi": "Được. Số đặt chỗ hiện tại của bạn là gì?",
            "en": "Sure. What’s your current booking number?"
          }
        },
        {
          "role": "user",
          "text": "It’s AB123456.",
          "translations": {
            "ko": "AB123456입니다.",
            "zh": "是AB123456。",
            "ja": "AB123456です。",
            "vi": "Đó là AB123456.",
            "en": "It’s AB123456."
          }
        },
        {
          "role": "ai",
          "text": "Let me check... Okay, we have a 6 PM flight available.",
          "translations": {
            "ko": "확인해보겠습니다... 6시 항공편이 가능합니다.",
            "zh": "让我查一下...好的，我们有6点的航班。",
            "ja": "確認します…よろしい、午後6時のフライトが利用可能です。",
            "vi": "Để tôi kiểm tra... Được, chúng tôi có chuyến bay lúc 6 giờ chiều.",
            "en": "Let me check... Okay, we have a 6 PM flight available."
          }
        },
        {
          "role": "user",
          "text": "That works. Is there a change fee?",
          "translations": {
            "ko": "그걸로 괜찮습니다. 변경 수수료가 있나요?",
            "zh": "可以。有更改费用吗？",
            "ja": "それで大丈夫です。変更手数料はかかりますか？",
            "vi": "Được. Có phí đổi chuyến không?",
            "en": "That works. Is there a change fee?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, it’s $50 plus any fare difference.",
          "translations": {
            "ko": "네, $50과 추가 요금 차액이 있습니다.",
            "zh": "是的，需要支付50美元的更改费用，以及任何票价差额。",
            "ja": "はい、$50プラス運賃差額です。",
            "vi": "Có, là 50 đô la cộng với bất kỳ sự khác biệt về giá vé.",
            "en": "Yes, it’s $50 plus any fare difference."
          }
        },
        {
          "role": "user",
          "text": "Alright, please go ahead and change it.",
          "translations": {
            "ko": "알겠습니다, 변경해주세요.",
            "zh": "好的，请继续更改。",
            "ja": "了解しました、変更をお願いします。",
            "vi": "Được, vui lòng tiến hành đổi chuyến.",
            "en": "Alright, please go ahead and change it."
          }
        },
        {
          "role": "ai",
          "text": "Done. Your new flight is confirmed.",
          "translations": {
            "ko": "변경 완료되었습니다. 새로운 항공편이 확인되었습니다.",
            "zh": "完成了。你的新航班已确认。",
            "ja": "完了しました。新しいフライトが確定しました。",
            "vi": "Xong. Chuyến bay mới của bạn đã được xác nhận.",
            "en": "Done. Your new flight is confirmed."
          }
        },
        {
          "role": "user",
          "text": "Thanks. What’s the new gate number?",
          "translations": {
            "ko": "감사합니다. 새로운 탑승구 번호는 어떻게 되나요?",
            "zh": "谢谢。新的登机口号码是多少？",
            "ja": "ありがとう。新しいゲート番号は何ですか？",
            "vi": "Cảm ơn. Cổng mới là số mấy?",
            "en": "Thanks. What’s the new gate number?"
          }
        },
        {
          "role": "ai",
          "text": "It’s Gate 22. Boarding starts at 5:30 PM.",
          "translations": {
            "ko": "22번 탑승구입니다. 탑승은 오후 5시 30분부터 시작됩니다.",
            "zh": "是22号登机口。登机开始时间是5:30。",
            "ja": "ゲート22です。搭乗開始は午後5時30分からです。",
            "vi": "Đó là Cổng 22. Thủ tục lên máy bay bắt đầu lúc 5:30 chiều.",
            "en": "It’s Gate 22. Boarding starts at 5:30 PM."
          }
        },
        {
          "role": "user",
          "text": "Got it. Will my checked bag transfer automatically?",
          "translations": {
            "ko": "알겠습니다. 저의 수하물은 자동으로 이동되나요?",
            "zh": "明白了。我的托运行李会自动转运吗？",
            "ja": "分かりました。私の預けた荷物は自動的に転送されますか？",
            "vi": "Hiểu rồi. Hành lý của tôi sẽ được chuyển tự động phải không?",
            "en": "Got it. Will my checked bag transfer automatically?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, we’ve updated the baggage information.",
          "translations": {
            "ko": "네, 수하물 정보를 업데이트했습니다.",
            "zh": "是的，我们已经更新了行李信息。",
            "ja": "はい、荷物情報を更新しました。",
            "vi": "Đúng, chúng tôi đã cập nhật thông tin hành lý.",
            "en": "Yes, we’ve updated the baggage information."
          }
        },
        {
          "role": "user",
          "text": "Perfect. Do I need to go through security again?",
          "translations": {
            "ko": "좋습니다. 다시 보안 검색을 거쳐야 하나요?",
            "zh": "太好了。我需要再次通过安检吗？",
            "ja": "完璧です。もう一度セキュリティチェックを受ける必要はありますか？",
            "vi": "Hoàn hảo. Tôi có cần qua kiểm tra an ninh lại không?",
            "en": "Perfect. Do I need to go through security again?"
          }
        },
        {
          "role": "ai",
          "text": "No, just proceed to your gate directly.",
          "translations": {
            "ko": "아니요, 바로 탑승구로 가시면 됩니다.",
            "zh": "不需要，直接前往你的登机口即可。",
            "ja": "いいえ、直接ゲートに進んでください。",
            "vi": "Không, chỉ cần tiếp tục đến cổng của bạn.",
            "en": "No, just proceed to your gate directly."
          }
        },
        {
          "role": "user",
          "text": "Thank you. You’ve been very helpful.",
          "translations": {
            "ko": "감사합니다. 많은 도움이 되었습니다.",
            "zh": "谢谢你。你帮了我很大的忙。",
            "ja": "ありがとうございます。大変助かりました。",
            "vi": "Cảm ơn. Bạn đã giúp đỡ rất nhiều.",
            "en": "Thank you. You’ve been very helpful."
          }
        },
        {
          "role": "ai",
          "text": "It’s my pleasure. Safe travels!",
          "translations": {
            "ko": "천만에요. 안전한 여행 되세요!",
            "zh": "我很乐意帮助你。祝你旅途愉快！",
            "ja": "どういたしまして。安全な旅を！",
            "vi": "Rất vui được giúp đỡ. Chúc bạn một chuyến đi an toàn!",
            "en": "It’s my pleasure. Safe travels!"
          }
        },
        {
          "role": "user",
          "text": "Thanks again.",
          "translations": {
            "ko": "다시 한번 감사드립니다.",
            "zh": "再次感谢。",
            "ja": "再度、ありがとう。",
            "vi": "Cảm ơn một lần nữa.",
            "en": "Thanks again."
          }
        },
        {
          "role": "ai",
          "text": "Have a great flight.",
          "translations": {
            "ko": "좋은 비행 되세요.",
            "zh": "祝你旅途愉快。",
            "ja": "素晴らしいフライトを。",
            "vi": "Chúc bạn có một chuyến bay tốt.",
            "en": "Have a great flight."
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
        "en": "Handling an overbooked hotel situation",
        "ko": "예약 초과된 호텔 상황 다루기",
        "zh": "处理酒店超预订的情况",
        "ja": "ホテルのオーバーブッキングの対応",
        "vi": "Xử lý tình huống khách sạn quá đặt"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Hi, how can I assist you today?",
          "translations": {
            "ko": "안녕하세요, 어떻게 도와드릴까요?",
            "zh": "你好，今天我能帮你做些什么？",
            "ja": "こんにちは、何かお手伝いできることはありますか？",
            "vi": "Xin chào, tôi có thể giúp gì cho bạn hôm nay?",
            "en": "Hi, how can I assist you today?"
          }
        },
        {
          "role": "user",
          "text": "I need to change my flight to a later one.",
          "translations": {
            "ko": "제 항공편을 늦은 시간으로 변경하고 싶습니다.",
            "zh": "我需要将我的航班改到更晚的时间。",
            "ja": "私のフライトを遅い時間に変更したいです。",
            "vi": "Tôi cần đổi chuyến bay sang một chuyến sau.",
            "en": "I need to change my flight to a later one."
          }
        },
        {
          "role": "ai",
          "text": "Sure. What’s your current booking number?",
          "translations": {
            "ko": "알겠습니다. 현재 예약 번호가 어떻게 되나요?",
            "zh": "好的。你现在的预订号是多少？",
            "ja": "了解です。現在の予約番号は何ですか？",
            "vi": "Được. Số đặt chỗ hiện tại của bạn là gì?",
            "en": "Sure. What’s your current booking number?"
          }
        },
        {
          "role": "user",
          "text": "It’s AB123456.",
          "translations": {
            "ko": "AB123456입니다.",
            "zh": "是AB123456。",
            "ja": "AB123456です。",
            "vi": "Đó là AB123456.",
            "en": "It’s AB123456."
          }
        },
        {
          "role": "ai",
          "text": "Let me check... Okay, we have a 6 PM flight available.",
          "translations": {
            "ko": "확인해보겠습니다... 6시 항공편이 가능합니다.",
            "zh": "让我查一下...好的，我们有6点的航班。",
            "ja": "確認します…よろしい、午後6時のフライトが利用可能です。",
            "vi": "Để tôi kiểm tra... Được, chúng tôi có chuyến bay lúc 6 giờ chiều.",
            "en": "Let me check... Okay, we have a 6 PM flight available."
          }
        },
        {
          "role": "user",
          "text": "That works. Is there a change fee?",
          "translations": {
            "ko": "그걸로 괜찮습니다. 변경 수수료가 있나요?",
            "zh": "可以。有更改费用吗？",
            "ja": "それで大丈夫です。変更手数料はかかりますか？",
            "vi": "Được. Có phí đổi chuyến không?",
            "en": "That works. Is there a change fee?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, it’s $50 plus any fare difference.",
          "translations": {
            "ko": "네, $50과 추가 요금 차액이 있습니다.",
            "zh": "是的，需要支付50美元的更改费用，以及任何票价差额。",
            "ja": "はい、$50プラス運賃差額です。",
            "vi": "Có, là 50 đô la cộng với bất kỳ sự khác biệt về giá vé.",
            "en": "Yes, it’s $50 plus any fare difference."
          }
        },
        {
          "role": "user",
          "text": "Alright, please go ahead and change it.",
          "translations": {
            "ko": "알겠습니다, 변경해주세요.",
            "zh": "好的，请继续更改。",
            "ja": "了解しました、変更をお願いします。",
            "vi": "Được, vui lòng tiến hành đổi chuyến.",
            "en": "Alright, please go ahead and change it."
          }
        },
        {
          "role": "ai",
          "text": "Done. Your new flight is confirmed.",
          "translations": {
            "ko": "변경 완료되었습니다. 새로운 항공편이 확인되었습니다.",
            "zh": "完成了。你的新航班已确认。",
            "ja": "完了しました。新しいフライトが確定しました。",
            "vi": "Xong. Chuyến bay mới của bạn đã được xác nhận.",
            "en": "Done. Your new flight is confirmed."
          }
        },
        {
          "role": "user",
          "text": "Thanks. What’s the new gate number?",
          "translations": {
            "ko": "감사합니다. 새로운 탑승구 번호는 어떻게 되나요?",
            "zh": "谢谢。新的登机口号码是多少？",
            "ja": "ありがとう。新しいゲート番号は何ですか？",
            "vi": "Cảm ơn. Cổng mới là số mấy?",
            "en": "Thanks. What’s the new gate number?"
          }
        },
        {
          "role": "ai",
          "text": "It’s Gate 22. Boarding starts at 5:30 PM.",
          "translations": {
            "ko": "22번 탑승구입니다. 탑승은 오후 5시 30분부터 시작됩니다.",
            "zh": "是22号登机口。登机开始时间是5:30。",
            "ja": "ゲート22です。搭乗開始は午後5時30分からです。",
            "vi": "Đó là Cổng 22. Thủ tục lên máy bay bắt đầu lúc 5:30 chiều.",
            "en": "It’s Gate 22. Boarding starts at 5:30 PM."
          }
        },
        {
          "role": "user",
          "text": "Got it. Will my checked bag transfer automatically?",
          "translations": {
            "ko": "알겠습니다. 저의 수하물은 자동으로 이동되나요?",
            "zh": "明白了。我的托运行李会自动转运吗？",
            "ja": "分かりました。私の預けた荷物は自動的に転送されますか？",
            "vi": "Hiểu rồi. Hành lý của tôi sẽ được chuyển tự động phải không?",
            "en": "Got it. Will my checked bag transfer automatically?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, we’ve updated the baggage information.",
          "translations": {
            "ko": "네, 수하물 정보를 업데이트했습니다.",
            "zh": "是的，我们已经更新了行李信息。",
            "ja": "はい、荷物情報を更新しました。",
            "vi": "Đúng, chúng tôi đã cập nhật thông tin hành lý.",
            "en": "Yes, we’ve updated the baggage information."
          }
        },
        {
          "role": "user",
          "text": "Perfect. Do I need to go through security again?",
          "translations": {
            "ko": "좋습니다. 다시 보안 검색을 거쳐야 하나요?",
            "zh": "太好了。我需要再次通过安检吗？",
            "ja": "完璧です。もう一度セキュリティチェックを受ける必要はありますか？",
            "vi": "Hoàn hảo. Tôi có cần qua kiểm tra an ninh lại không?",
            "en": "Perfect. Do I need to go through security again?"
          }
        },
        {
          "role": "ai",
          "text": "No, just proceed to your gate directly.",
          "translations": {
            "ko": "아니요, 바로 탑승구로 가시면 됩니다.",
            "zh": "不需要，直接前往你的登机口即可。",
            "ja": "いいえ、直接ゲートに進んでください。",
            "vi": "Không, chỉ cần tiếp tục đến cổng của bạn.",
            "en": "No, just proceed to your gate directly."
          }
        },
        {
          "role": "user",
          "text": "Thank you. You’ve been very helpful.",
          "translations": {
            "ko": "감사합니다. 많은 도움이 되었습니다.",
            "zh": "谢谢你。你帮了我很大的忙。",
            "ja": "ありがとうございます。大変助かりました。",
            "vi": "Cảm ơn. Bạn đã giúp đỡ rất nhiều.",
            "en": "Thank you. You’ve been very helpful."
          }
        },
        {
          "role": "ai",
          "text": "It’s my pleasure. Safe travels!",
          "translations": {
            "ko": "천만에요. 안전한 여행 되세요!",
            "zh": "我很乐意帮助你。祝你旅途愉快！",
            "ja": "どういたしまして。安全な旅を！",
            "vi": "Rất vui được giúp đỡ. Chúc bạn một chuyến đi an toàn!",
            "en": "It’s my pleasure. Safe travels!"
          }
        },
        {
          "role": "user",
          "text": "Thanks again.",
          "translations": {
            "ko": "다시 한번 감사드립니다.",
            "zh": "再次感谢。",
            "ja": "再度、ありがとう。",
            "vi": "Cảm ơn một lần nữa.",
            "en": "Thanks again."
          }
        },
        {
          "role": "ai",
          "text": "Have a great flight.",
          "translations": {
            "ko": "좋은 비행 되세요.",
            "zh": "祝你旅途愉快。",
            "ja": "素晴らしいフライトを。",
            "vi": "Chúc bạn có một chuyến bay tốt.",
            "en": "Have a great flight."
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
        "en": "Dealing with a travel delay",
        "ko": "여행 지연 상황 다루기",
        "zh": "处理旅行延误",
        "ja": "旅行の遅延に対応する",
        "vi": "Xử lý tình huống chuyến đi bị trễ"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Hi, how can I assist you today?",
          "translations": {
            "ko": "안녕하세요, 어떻게 도와드릴까요?",
            "zh": "你好，今天我能帮你做些什么？",
            "ja": "こんにちは、何かお手伝いできることはありますか？",
            "vi": "Xin chào, tôi có thể giúp gì cho bạn hôm nay?",
            "en": "Hi, how can I assist you today?"
          }
        },
        {
          "role": "user",
          "text": "I need to change my flight to a later one.",
          "translations": {
            "ko": "제 항공편을 늦은 시간으로 변경하고 싶습니다.",
            "zh": "我需要将我的航班改到更晚的时间。",
            "ja": "私のフライトを遅い時間に変更したいです。",
            "vi": "Tôi cần đổi chuyến bay sang một chuyến sau.",
            "en": "I need to change my flight to a later one."
          }
        },
        {
          "role": "ai",
          "text": "Sure. What’s your current booking number?",
          "translations": {
            "ko": "알겠습니다. 현재 예약 번호가 어떻게 되나요?",
            "zh": "好的。你现在的预订号是多少？",
            "ja": "了解です。現在の予約番号は何ですか？",
            "vi": "Được. Số đặt chỗ hiện tại của bạn là gì?",
            "en": "Sure. What’s your current booking number?"
          }
        },
        {
          "role": "user",
          "text": "It’s AB123456.",
          "translations": {
            "ko": "AB123456입니다.",
            "zh": "是AB123456。",
            "ja": "AB123456です。",
            "vi": "Đó là AB123456.",
            "en": "It’s AB123456."
          }
        },
        {
          "role": "ai",
          "text": "Let me check... Okay, we have a 6 PM flight available.",
          "translations": {
            "ko": "확인해보겠습니다... 6시 항공편이 가능합니다.",
            "zh": "让我查一下...好的，我们有6点的航班。",
            "ja": "確認します…よろしい、午後6時のフライトが利用可能です。",
            "vi": "Để tôi kiểm tra... Được, chúng tôi có chuyến bay lúc 6 giờ chiều.",
            "en": "Let me check... Okay, we have a 6 PM flight available."
          }
        },
        {
          "role": "user",
          "text": "That works. Is there a change fee?",
          "translations": {
            "ko": "그걸로 괜찮습니다. 변경 수수료가 있나요?",
            "zh": "可以。有更改费用吗？",
            "ja": "それで大丈夫です。変更手数料はかかりますか？",
            "vi": "Được. Có phí đổi chuyến không?",
            "en": "That works. Is there a change fee?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, it’s $50 plus any fare difference.",
          "translations": {
            "ko": "네, $50과 추가 요금 차액이 있습니다.",
            "zh": "是的，需要支付50美元的更改费用，以及任何票价差额。",
            "ja": "はい、$50プラス運賃差額です。",
            "vi": "Có, là 50 đô la cộng với bất kỳ sự khác biệt về giá vé.",
            "en": "Yes, it’s $50 plus any fare difference."
          }
        },
        {
          "role": "user",
          "text": "Alright, please go ahead and change it.",
          "translations": {
            "ko": "알겠습니다, 변경해주세요.",
            "zh": "好的，请继续更改。",
            "ja": "了解しました、変更をお願いします。",
            "vi": "Được, vui lòng tiến hành đổi chuyến.",
            "en": "Alright, please go ahead and change it."
          }
        },
        {
          "role": "ai",
          "text": "Done. Your new flight is confirmed.",
          "translations": {
            "ko": "변경 완료되었습니다. 새로운 항공편이 확인되었습니다.",
            "zh": "完成了。你的新航班已确认。",
            "ja": "完了しました。新しいフライトが確定しました。",
            "vi": "Xong. Chuyến bay mới của bạn đã được xác nhận.",
            "en": "Done. Your new flight is confirmed."
          }
        },
        {
          "role": "user",
          "text": "Thanks. What’s the new gate number?",
          "translations": {
            "ko": "감사합니다. 새로운 탑승구 번호는 어떻게 되나요?",
            "zh": "谢谢。新的登机口号码是多少？",
            "ja": "ありがとう。新しいゲート番号は何ですか？",
            "vi": "Cảm ơn. Cổng mới là số mấy?",
            "en": "Thanks. What’s the new gate number?"
          }
        },
        {
          "role": "ai",
          "text": "It’s Gate 22. Boarding starts at 5:30 PM.",
          "translations": {
            "ko": "22번 탑승구입니다. 탑승은 오후 5시 30분부터 시작됩니다.",
            "zh": "是22号登机口。登机开始时间是5:30。",
            "ja": "ゲート22です。搭乗開始は午後5時30分からです。",
            "vi": "Đó là Cổng 22. Thủ tục lên máy bay bắt đầu lúc 5:30 chiều.",
            "en": "It’s Gate 22. Boarding starts at 5:30 PM."
          }
        },
        {
          "role": "user",
          "text": "Got it. Will my checked bag transfer automatically?",
          "translations": {
            "ko": "알겠습니다. 저의 수하물은 자동으로 이동되나요?",
            "zh": "明白了。我的托运行李会自动转运吗？",
            "ja": "分かりました。私の預けた荷物は自動的に転送されますか？",
            "vi": "Hiểu rồi. Hành lý của tôi sẽ được chuyển tự động phải không?",
            "en": "Got it. Will my checked bag transfer automatically?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, we’ve updated the baggage information.",
          "translations": {
            "ko": "네, 수하물 정보를 업데이트했습니다.",
            "zh": "是的，我们已经更新了行李信息。",
            "ja": "はい、荷物情報を更新しました。",
            "vi": "Đúng, chúng tôi đã cập nhật thông tin hành lý.",
            "en": "Yes, we’ve updated the baggage information."
          }
        },
        {
          "role": "user",
          "text": "Perfect. Do I need to go through security again?",
          "translations": {
            "ko": "좋습니다. 다시 보안 검색을 거쳐야 하나요?",
            "zh": "太好了。我需要再次通过安检吗？",
            "ja": "完璧です。もう一度セキュリティチェックを受ける必要はありますか？",
            "vi": "Hoàn hảo. Tôi có cần qua kiểm tra an ninh lại không?",
            "en": "Perfect. Do I need to go through security again?"
          }
        },
        {
          "role": "ai",
          "text": "No, just proceed to your gate directly.",
          "translations": {
            "ko": "아니요, 바로 탑승구로 가시면 됩니다.",
            "zh": "不需要，直接前往你的登机口即可。",
            "ja": "いいえ、直接ゲートに進んでください。",
            "vi": "Không, chỉ cần tiếp tục đến cổng của bạn.",
            "en": "No, just proceed to your gate directly."
          }
        },
        {
          "role": "user",
          "text": "Thank you. You’ve been very helpful.",
          "translations": {
            "ko": "감사합니다. 많은 도움이 되었습니다.",
            "zh": "谢谢你。你帮了我很大的忙。",
            "ja": "ありがとうございます。大変助かりました。",
            "vi": "Cảm ơn. Bạn đã giúp đỡ rất nhiều.",
            "en": "Thank you. You’ve been very helpful."
          }
        },
        {
          "role": "ai",
          "text": "It’s my pleasure. Safe travels!",
          "translations": {
            "ko": "천만에요. 안전한 여행 되세요!",
            "zh": "我很乐意帮助你。祝你旅途愉快！",
            "ja": "どういたしまして。安全な旅を！",
            "vi": "Rất vui được giúp đỡ. Chúc bạn một chuyến đi an toàn!",
            "en": "It’s my pleasure. Safe travels!"
          }
        },
        {
          "role": "user",
          "text": "Thanks again.",
          "translations": {
            "ko": "다시 한번 감사드립니다.",
            "zh": "再次感谢。",
            "ja": "再度、ありがとう。",
            "vi": "Cảm ơn một lần nữa.",
            "en": "Thanks again."
          }
        },
        {
          "role": "ai",
          "text": "Have a great flight.",
          "translations": {
            "ko": "좋은 비행 되세요.",
            "zh": "祝你旅途愉快。",
            "ja": "素晴らしいフライトを。",
            "vi": "Chúc bạn có một chuyến bay tốt.",
            "en": "Have a great flight."
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
        "en": "Renting a car abroad",
        "ko": "해외에서 차량 대여하기",
        "zh": "在国外租车",
        "ja": "海外でのレンタカー",
        "vi": "Thuê xe ở nước ngoài"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Hi, how can I assist you today?",
          "translations": {
            "ko": "안녕하세요, 어떻게 도와드릴까요?",
            "zh": "你好，今天我能帮你做些什么？",
            "ja": "こんにちは、何かお手伝いできることはありますか？",
            "vi": "Xin chào, tôi có thể giúp gì cho bạn hôm nay?",
            "en": "Hi, how can I assist you today?"
          }
        },
        {
          "role": "user",
          "text": "I need to change my flight to a later one.",
          "translations": {
            "ko": "제 항공편을 늦은 시간으로 변경하고 싶습니다.",
            "zh": "我需要将我的航班改到更晚的时间。",
            "ja": "私のフライトを遅い時間に変更したいです。",
            "vi": "Tôi cần đổi chuyến bay sang một chuyến sau.",
            "en": "I need to change my flight to a later one."
          }
        },
        {
          "role": "ai",
          "text": "Sure. What’s your current booking number?",
          "translations": {
            "ko": "알겠습니다. 현재 예약 번호가 어떻게 되나요?",
            "zh": "好的。你现在的预订号是多少？",
            "ja": "了解です。現在の予約番号は何ですか？",
            "vi": "Được. Số đặt chỗ hiện tại của bạn là gì?",
            "en": "Sure. What’s your current booking number?"
          }
        },
        {
          "role": "user",
          "text": "It’s AB123456.",
          "translations": {
            "ko": "AB123456입니다.",
            "zh": "是AB123456。",
            "ja": "AB123456です。",
            "vi": "Đó là AB123456.",
            "en": "It’s AB123456."
          }
        },
        {
          "role": "ai",
          "text": "Let me check... Okay, we have a 6 PM flight available.",
          "translations": {
            "ko": "확인해보겠습니다... 6시 항공편이 가능합니다.",
            "zh": "让我查一下...好的，我们有6点的航班。",
            "ja": "確認します…よろしい、午後6時のフライトが利用可能です。",
            "vi": "Để tôi kiểm tra... Được, chúng tôi có chuyến bay lúc 6 giờ chiều.",
            "en": "Let me check... Okay, we have a 6 PM flight available."
          }
        },
        {
          "role": "user",
          "text": "That works. Is there a change fee?",
          "translations": {
            "ko": "그걸로 괜찮습니다. 변경 수수료가 있나요?",
            "zh": "可以。有更改费用吗？",
            "ja": "それで大丈夫です。変更手数料はかかりますか？",
            "vi": "Được. Có phí đổi chuyến không?",
            "en": "That works. Is there a change fee?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, it’s $50 plus any fare difference.",
          "translations": {
            "ko": "네, $50과 추가 요금 차액이 있습니다.",
            "zh": "是的，需要支付50美元的更改费用，以及任何票价差额。",
            "ja": "はい、$50プラス運賃差額です。",
            "vi": "Có, là 50 đô la cộng với bất kỳ sự khác biệt về giá vé.",
            "en": "Yes, it’s $50 plus any fare difference."
          }
        },
        {
          "role": "user",
          "text": "Alright, please go ahead and change it.",
          "translations": {
            "ko": "알겠습니다, 변경해주세요.",
            "zh": "好的，请继续更改。",
            "ja": "了解しました、変更をお願いします。",
            "vi": "Được, vui lòng tiến hành đổi chuyến.",
            "en": "Alright, please go ahead and change it."
          }
        },
        {
          "role": "ai",
          "text": "Done. Your new flight is confirmed.",
          "translations": {
            "ko": "변경 완료되었습니다. 새로운 항공편이 확인되었습니다.",
            "zh": "完成了。你的新航班已确认。",
            "ja": "完了しました。新しいフライトが確定しました。",
            "vi": "Xong. Chuyến bay mới của bạn đã được xác nhận.",
            "en": "Done. Your new flight is confirmed."
          }
        },
        {
          "role": "user",
          "text": "Thanks. What’s the new gate number?",
          "translations": {
            "ko": "감사합니다. 새로운 탑승구 번호는 어떻게 되나요?",
            "zh": "谢谢。新的登机口号码是多少？",
            "ja": "ありがとう。新しいゲート番号は何ですか？",
            "vi": "Cảm ơn. Cổng mới là số mấy?",
            "en": "Thanks. What’s the new gate number?"
          }
        },
        {
          "role": "ai",
          "text": "It’s Gate 22. Boarding starts at 5:30 PM.",
          "translations": {
            "ko": "22번 탑승구입니다. 탑승은 오후 5시 30분부터 시작됩니다.",
            "zh": "是22号登机口。登机开始时间是5:30。",
            "ja": "ゲート22です。搭乗開始は午後5時30分からです。",
            "vi": "Đó là Cổng 22. Thủ tục lên máy bay bắt đầu lúc 5:30 chiều.",
            "en": "It’s Gate 22. Boarding starts at 5:30 PM."
          }
        },
        {
          "role": "user",
          "text": "Got it. Will my checked bag transfer automatically?",
          "translations": {
            "ko": "알겠습니다. 저의 수하물은 자동으로 이동되나요?",
            "zh": "明白了。我的托运行李会自动转运吗？",
            "ja": "分かりました。私の預けた荷物は自動的に転送されますか？",
            "vi": "Hiểu rồi. Hành lý của tôi sẽ được chuyển tự động phải không?",
            "en": "Got it. Will my checked bag transfer automatically?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, we’ve updated the baggage information.",
          "translations": {
            "ko": "네, 수하물 정보를 업데이트했습니다.",
            "zh": "是的，我们已经更新了行李信息。",
            "ja": "はい、荷物情報を更新しました。",
            "vi": "Đúng, chúng tôi đã cập nhật thông tin hành lý.",
            "en": "Yes, we’ve updated the baggage information."
          }
        },
        {
          "role": "user",
          "text": "Perfect. Do I need to go through security again?",
          "translations": {
            "ko": "좋습니다. 다시 보안 검색을 거쳐야 하나요?",
            "zh": "太好了。我需要再次通过安检吗？",
            "ja": "完璧です。もう一度セキュリティチェックを受ける必要はありますか？",
            "vi": "Hoàn hảo. Tôi có cần qua kiểm tra an ninh lại không?",
            "en": "Perfect. Do I need to go through security again?"
          }
        },
        {
          "role": "ai",
          "text": "No, just proceed to your gate directly.",
          "translations": {
            "ko": "아니요, 바로 탑승구로 가시면 됩니다.",
            "zh": "不需要，直接前往你的登机口即可。",
            "ja": "いいえ、直接ゲートに進んでください。",
            "vi": "Không, chỉ cần tiếp tục đến cổng của bạn.",
            "en": "No, just proceed to your gate directly."
          }
        },
        {
          "role": "user",
          "text": "Thank you. You’ve been very helpful.",
          "translations": {
            "ko": "감사합니다. 많은 도움이 되었습니다.",
            "zh": "谢谢你。你帮了我很大的忙。",
            "ja": "ありがとうございます。大変助かりました。",
            "vi": "Cảm ơn. Bạn đã giúp đỡ rất nhiều.",
            "en": "Thank you. You’ve been very helpful."
          }
        },
        {
          "role": "ai",
          "text": "It’s my pleasure. Safe travels!",
          "translations": {
            "ko": "천만에요. 안전한 여행 되세요!",
            "zh": "我很乐意帮助你。祝你旅途愉快！",
            "ja": "どういたしまして。安全な旅を！",
            "vi": "Rất vui được giúp đỡ. Chúc bạn một chuyến đi an toàn!",
            "en": "It’s my pleasure. Safe travels!"
          }
        },
        {
          "role": "user",
          "text": "Thanks again.",
          "translations": {
            "ko": "다시 한번 감사드립니다.",
            "zh": "再次感谢。",
            "ja": "再度、ありがとう。",
            "vi": "Cảm ơn một lần nữa.",
            "en": "Thanks again."
          }
        },
        {
          "role": "ai",
          "text": "Have a great flight.",
          "translations": {
            "ko": "좋은 비행 되세요.",
            "zh": "祝你旅途愉快。",
            "ja": "素晴らしいフライトを。",
            "vi": "Chúc bạn có một chuyến bay tốt.",
            "en": "Have a great flight."
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
        "en": "Booking a local tour",
        "ko": "현지 투어 예약하기",
        "zh": "预订当地旅行团",
        "ja": "ローカルツアーの予約",
        "vi": "Đặt một tour du lịch địa phương"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Hi, how can I assist you today?",
          "translations": {
            "ko": "안녕하세요, 어떻게 도와드릴까요?",
            "zh": "你好，今天我能帮你做些什么？",
            "ja": "こんにちは、何かお手伝いできることはありますか？",
            "vi": "Xin chào, tôi có thể giúp gì cho bạn hôm nay?",
            "en": "Hi, how can I assist you today?"
          }
        },
        {
          "role": "user",
          "text": "I need to change my flight to a later one.",
          "translations": {
            "ko": "제 항공편을 늦은 시간으로 변경하고 싶습니다.",
            "zh": "我需要将我的航班改到更晚的时间。",
            "ja": "私のフライトを遅い時間に変更したいです。",
            "vi": "Tôi cần đổi chuyến bay sang một chuyến sau.",
            "en": "I need to change my flight to a later one."
          }
        },
        {
          "role": "ai",
          "text": "Sure. What’s your current booking number?",
          "translations": {
            "ko": "알겠습니다. 현재 예약 번호가 어떻게 되나요?",
            "zh": "好的。你现在的预订号是多少？",
            "ja": "了解です。現在の予約番号は何ですか？",
            "vi": "Được. Số đặt chỗ hiện tại của bạn là gì?",
            "en": "Sure. What’s your current booking number?"
          }
        },
        {
          "role": "user",
          "text": "It’s AB123456.",
          "translations": {
            "ko": "AB123456입니다.",
            "zh": "是AB123456。",
            "ja": "AB123456です。",
            "vi": "Đó là AB123456.",
            "en": "It’s AB123456."
          }
        },
        {
          "role": "ai",
          "text": "Let me check... Okay, we have a 6 PM flight available.",
          "translations": {
            "ko": "확인해보겠습니다... 6시 항공편이 가능합니다.",
            "zh": "让我查一下...好的，我们有6点的航班。",
            "ja": "確認します…よろしい、午後6時のフライトが利用可能です。",
            "vi": "Để tôi kiểm tra... Được, chúng tôi có chuyến bay lúc 6 giờ chiều.",
            "en": "Let me check... Okay, we have a 6 PM flight available."
          }
        },
        {
          "role": "user",
          "text": "That works. Is there a change fee?",
          "translations": {
            "ko": "그걸로 괜찮습니다. 변경 수수료가 있나요?",
            "zh": "可以。有更改费用吗？",
            "ja": "それで大丈夫です。変更手数料はかかりますか？",
            "vi": "Được. Có phí đổi chuyến không?",
            "en": "That works. Is there a change fee?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, it’s $50 plus any fare difference.",
          "translations": {
            "ko": "네, $50과 추가 요금 차액이 있습니다.",
            "zh": "是的，需要支付50美元的更改费用，以及任何票价差额。",
            "ja": "はい、$50プラス運賃差額です。",
            "vi": "Có, là 50 đô la cộng với bất kỳ sự khác biệt về giá vé.",
            "en": "Yes, it’s $50 plus any fare difference."
          }
        },
        {
          "role": "user",
          "text": "Alright, please go ahead and change it.",
          "translations": {
            "ko": "알겠습니다, 변경해주세요.",
            "zh": "好的，请继续更改。",
            "ja": "了解しました、変更をお願いします。",
            "vi": "Được, vui lòng tiến hành đổi chuyến.",
            "en": "Alright, please go ahead and change it."
          }
        },
        {
          "role": "ai",
          "text": "Done. Your new flight is confirmed.",
          "translations": {
            "ko": "변경 완료되었습니다. 새로운 항공편이 확인되었습니다.",
            "zh": "完成了。你的新航班已确认。",
            "ja": "完了しました。新しいフライトが確定しました。",
            "vi": "Xong. Chuyến bay mới của bạn đã được xác nhận.",
            "en": "Done. Your new flight is confirmed."
          }
        },
        {
          "role": "user",
          "text": "Thanks. What’s the new gate number?",
          "translations": {
            "ko": "감사합니다. 새로운 탑승구 번호는 어떻게 되나요?",
            "zh": "谢谢。新的登机口号码是多少？",
            "ja": "ありがとう。新しいゲート番号は何ですか？",
            "vi": "Cảm ơn. Cổng mới là số mấy?",
            "en": "Thanks. What’s the new gate number?"
          }
        },
        {
          "role": "ai",
          "text": "It’s Gate 22. Boarding starts at 5:30 PM.",
          "translations": {
            "ko": "22번 탑승구입니다. 탑승은 오후 5시 30분부터 시작됩니다.",
            "zh": "是22号登机口。登机开始时间是5:30。",
            "ja": "ゲート22です。搭乗開始は午後5時30分からです。",
            "vi": "Đó là Cổng 22. Thủ tục lên máy bay bắt đầu lúc 5:30 chiều.",
            "en": "It’s Gate 22. Boarding starts at 5:30 PM."
          }
        },
        {
          "role": "user",
          "text": "Got it. Will my checked bag transfer automatically?",
          "translations": {
            "ko": "알겠습니다. 저의 수하물은 자동으로 이동되나요?",
            "zh": "明白了。我的托运行李会自动转运吗？",
            "ja": "分かりました。私の預けた荷物は自動的に転送されますか？",
            "vi": "Hiểu rồi. Hành lý của tôi sẽ được chuyển tự động phải không?",
            "en": "Got it. Will my checked bag transfer automatically?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, we’ve updated the baggage information.",
          "translations": {
            "ko": "네, 수하물 정보를 업데이트했습니다.",
            "zh": "是的，我们已经更新了行李信息。",
            "ja": "はい、荷物情報を更新しました。",
            "vi": "Đúng, chúng tôi đã cập nhật thông tin hành lý.",
            "en": "Yes, we’ve updated the baggage information."
          }
        },
        {
          "role": "user",
          "text": "Perfect. Do I need to go through security again?",
          "translations": {
            "ko": "좋습니다. 다시 보안 검색을 거쳐야 하나요?",
            "zh": "太好了。我需要再次通过安检吗？",
            "ja": "完璧です。もう一度セキュリティチェックを受ける必要はありますか？",
            "vi": "Hoàn hảo. Tôi có cần qua kiểm tra an ninh lại không?",
            "en": "Perfect. Do I need to go through security again?"
          }
        },
        {
          "role": "ai",
          "text": "No, just proceed to your gate directly.",
          "translations": {
            "ko": "아니요, 바로 탑승구로 가시면 됩니다.",
            "zh": "不需要，直接前往你的登机口即可。",
            "ja": "いいえ、直接ゲートに進んでください。",
            "vi": "Không, chỉ cần tiếp tục đến cổng của bạn.",
            "en": "No, just proceed to your gate directly."
          }
        },
        {
          "role": "user",
          "text": "Thank you. You’ve been very helpful.",
          "translations": {
            "ko": "감사합니다. 많은 도움이 되었습니다.",
            "zh": "谢谢你。你帮了我很大的忙。",
            "ja": "ありがとうございます。大変助かりました。",
            "vi": "Cảm ơn. Bạn đã giúp đỡ rất nhiều.",
            "en": "Thank you. You’ve been very helpful."
          }
        },
        {
          "role": "ai",
          "text": "It’s my pleasure. Safe travels!",
          "translations": {
            "ko": "천만에요. 안전한 여행 되세요!",
            "zh": "我很乐意帮助你。祝你旅途愉快！",
            "ja": "どういたしまして。安全な旅を！",
            "vi": "Rất vui được giúp đỡ. Chúc bạn một chuyến đi an toàn!",
            "en": "It’s my pleasure. Safe travels!"
          }
        },
        {
          "role": "user",
          "text": "Thanks again.",
          "translations": {
            "ko": "다시 한번 감사드립니다.",
            "zh": "再次感谢。",
            "ja": "再度、ありがとう。",
            "vi": "Cảm ơn một lần nữa.",
            "en": "Thanks again."
          }
        },
        {
          "role": "ai",
          "text": "Have a great flight.",
          "translations": {
            "ko": "좋은 비행 되세요.",
            "zh": "祝你旅途愉快。",
            "ja": "素晴らしいフライトを。",
            "vi": "Chúc bạn có một chuyến bay tốt.",
            "en": "Have a great flight."
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
        "en": "Clarifying travel insurance details",
        "ko": "여행 보험 상세 내용 확인하기",
        "zh": "澄清旅行保险详情",
        "ja": "旅行保険の詳細を確認する",
        "vi": "Làm rõ chi tiết bảo hiểm du lịch"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Hi, how can I assist you today?",
          "translations": {
            "ko": "안녕하세요, 어떻게 도와드릴까요?",
            "zh": "你好，今天我能帮你做些什么？",
            "ja": "こんにちは、何かお手伝いできることはありますか？",
            "vi": "Xin chào, tôi có thể giúp gì cho bạn hôm nay?",
            "en": "Hi, how can I assist you today?"
          }
        },
        {
          "role": "user",
          "text": "I need to change my flight to a later one.",
          "translations": {
            "ko": "제 항공편을 늦은 시간으로 변경하고 싶습니다.",
            "zh": "我需要将我的航班改到更晚的时间。",
            "ja": "私のフライトを遅い時間に変更したいです。",
            "vi": "Tôi cần đổi chuyến bay sang một chuyến sau.",
            "en": "I need to change my flight to a later one."
          }
        },
        {
          "role": "ai",
          "text": "Sure. What’s your current booking number?",
          "translations": {
            "ko": "알겠습니다. 현재 예약 번호가 어떻게 되나요?",
            "zh": "好的。你现在的预订号是多少？",
            "ja": "了解です。現在の予約番号は何ですか？",
            "vi": "Được. Số đặt chỗ hiện tại của bạn là gì?",
            "en": "Sure. What’s your current booking number?"
          }
        },
        {
          "role": "user",
          "text": "It’s AB123456.",
          "translations": {
            "ko": "AB123456입니다.",
            "zh": "是AB123456。",
            "ja": "AB123456です。",
            "vi": "Đó là AB123456.",
            "en": "It’s AB123456."
          }
        },
        {
          "role": "ai",
          "text": "Let me check... Okay, we have a 6 PM flight available.",
          "translations": {
            "ko": "확인해보겠습니다... 6시 항공편이 가능합니다.",
            "zh": "让我查一下...好的，我们有6点的航班。",
            "ja": "確認します…よろしい、午後6時のフライトが利用可能です。",
            "vi": "Để tôi kiểm tra... Được, chúng tôi có chuyến bay lúc 6 giờ chiều.",
            "en": "Let me check... Okay, we have a 6 PM flight available."
          }
        },
        {
          "role": "user",
          "text": "That works. Is there a change fee?",
          "translations": {
            "ko": "그걸로 괜찮습니다. 변경 수수료가 있나요?",
            "zh": "可以。有更改费用吗？",
            "ja": "それで大丈夫です。変更手数料はかかりますか？",
            "vi": "Được. Có phí đổi chuyến không?",
            "en": "That works. Is there a change fee?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, it’s $50 plus any fare difference.",
          "translations": {
            "ko": "네, $50과 추가 요금 차액이 있습니다.",
            "zh": "是的，需要支付50美元的更改费用，以及任何票价差额。",
            "ja": "はい、$50プラス運賃差額です。",
            "vi": "Có, là 50 đô la cộng với bất kỳ sự khác biệt về giá vé.",
            "en": "Yes, it’s $50 plus any fare difference."
          }
        },
        {
          "role": "user",
          "text": "Alright, please go ahead and change it.",
          "translations": {
            "ko": "알겠습니다, 변경해주세요.",
            "zh": "好的，请继续更改。",
            "ja": "了解しました、変更をお願いします。",
            "vi": "Được, vui lòng tiến hành đổi chuyến.",
            "en": "Alright, please go ahead and change it."
          }
        },
        {
          "role": "ai",
          "text": "Done. Your new flight is confirmed.",
          "translations": {
            "ko": "변경 완료되었습니다. 새로운 항공편이 확인되었습니다.",
            "zh": "完成了。你的新航班已确认。",
            "ja": "完了しました。新しいフライトが確定しました。",
            "vi": "Xong. Chuyến bay mới của bạn đã được xác nhận.",
            "en": "Done. Your new flight is confirmed."
          }
        },
        {
          "role": "user",
          "text": "Thanks. What’s the new gate number?",
          "translations": {
            "ko": "감사합니다. 새로운 탑승구 번호는 어떻게 되나요?",
            "zh": "谢谢。新的登机口号码是多少？",
            "ja": "ありがとう。新しいゲート番号は何ですか？",
            "vi": "Cảm ơn. Cổng mới là số mấy?",
            "en": "Thanks. What’s the new gate number?"
          }
        },
        {
          "role": "ai",
          "text": "It’s Gate 22. Boarding starts at 5:30 PM.",
          "translations": {
            "ko": "22번 탑승구입니다. 탑승은 오후 5시 30분부터 시작됩니다.",
            "zh": "是22号登机口。登机开始时间是5:30。",
            "ja": "ゲート22です。搭乗開始は午後5時30分からです。",
            "vi": "Đó là Cổng 22. Thủ tục lên máy bay bắt đầu lúc 5:30 chiều.",
            "en": "It’s Gate 22. Boarding starts at 5:30 PM."
          }
        },
        {
          "role": "user",
          "text": "Got it. Will my checked bag transfer automatically?",
          "translations": {
            "ko": "알겠습니다. 저의 수하물은 자동으로 이동되나요?",
            "zh": "明白了。我的托运行李会自动转运吗？",
            "ja": "分かりました。私の預けた荷物は自動的に転送されますか？",
            "vi": "Hiểu rồi. Hành lý của tôi sẽ được chuyển tự động phải không?",
            "en": "Got it. Will my checked bag transfer automatically?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, we’ve updated the baggage information.",
          "translations": {
            "ko": "네, 수하물 정보를 업데이트했습니다.",
            "zh": "是的，我们已经更新了行李信息。",
            "ja": "はい、荷物情報を更新しました。",
            "vi": "Đúng, chúng tôi đã cập nhật thông tin hành lý.",
            "en": "Yes, we’ve updated the baggage information."
          }
        },
        {
          "role": "user",
          "text": "Perfect. Do I need to go through security again?",
          "translations": {
            "ko": "좋습니다. 다시 보안 검색을 거쳐야 하나요?",
            "zh": "太好了。我需要再次通过安检吗？",
            "ja": "完璧です。もう一度セキュリティチェックを受ける必要はありますか？",
            "vi": "Hoàn hảo. Tôi có cần qua kiểm tra an ninh lại không?",
            "en": "Perfect. Do I need to go through security again?"
          }
        },
        {
          "role": "ai",
          "text": "No, just proceed to your gate directly.",
          "translations": {
            "ko": "아니요, 바로 탑승구로 가시면 됩니다.",
            "zh": "不需要，直接前往你的登机口即可。",
            "ja": "いいえ、直接ゲートに進んでください。",
            "vi": "Không, chỉ cần tiếp tục đến cổng của bạn.",
            "en": "No, just proceed to your gate directly."
          }
        },
        {
          "role": "user",
          "text": "Thank you. You’ve been very helpful.",
          "translations": {
            "ko": "감사합니다. 많은 도움이 되었습니다.",
            "zh": "谢谢你。你帮了我很大的忙。",
            "ja": "ありがとうございます。大変助かりました。",
            "vi": "Cảm ơn. Bạn đã giúp đỡ rất nhiều.",
            "en": "Thank you. You’ve been very helpful."
          }
        },
        {
          "role": "ai",
          "text": "It’s my pleasure. Safe travels!",
          "translations": {
            "ko": "천만에요. 안전한 여행 되세요!",
            "zh": "我很乐意帮助你。祝你旅途愉快！",
            "ja": "どういたしまして。安全な旅を！",
            "vi": "Rất vui được giúp đỡ. Chúc bạn một chuyến đi an toàn!",
            "en": "It’s my pleasure. Safe travels!"
          }
        },
        {
          "role": "user",
          "text": "Thanks again.",
          "translations": {
            "ko": "다시 한번 감사드립니다.",
            "zh": "再次感谢。",
            "ja": "再度、ありがとう。",
            "vi": "Cảm ơn một lần nữa.",
            "en": "Thanks again."
          }
        },
        {
          "role": "ai",
          "text": "Have a great flight.",
          "translations": {
            "ko": "좋은 비행 되세요.",
            "zh": "祝你旅途愉快。",
            "ja": "素晴らしいフライトを。",
            "vi": "Chúc bạn có một chuyến bay tốt.",
            "en": "Have a great flight."
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
        "en": "Talking to a customs officer",
        "ko": "세관 직원과 대화하기",
        "zh": "与海关官员交谈",
        "ja": "税関職員と話す",
        "vi": "Nói chuyện với một viên chức hải quan"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Hi, how can I assist you today?",
          "translations": {
            "ko": "안녕하세요, 어떻게 도와드릴까요?",
            "zh": "你好，今天我能帮你做些什么？",
            "ja": "こんにちは、何かお手伝いできることはありますか？",
            "vi": "Xin chào, tôi có thể giúp gì cho bạn hôm nay?",
            "en": "Hi, how can I assist you today?"
          }
        },
        {
          "role": "user",
          "text": "I need to change my flight to a later one.",
          "translations": {
            "ko": "제 항공편을 늦은 시간으로 변경하고 싶습니다.",
            "zh": "我需要将我的航班改到更晚的时间。",
            "ja": "私のフライトを遅い時間に変更したいです。",
            "vi": "Tôi cần đổi chuyến bay sang một chuyến sau.",
            "en": "I need to change my flight to a later one."
          }
        },
        {
          "role": "ai",
          "text": "Sure. What’s your current booking number?",
          "translations": {
            "ko": "알겠습니다. 현재 예약 번호가 어떻게 되나요?",
            "zh": "好的。你现在的预订号是多少？",
            "ja": "了解です。現在の予約番号は何ですか？",
            "vi": "Được. Số đặt chỗ hiện tại của bạn là gì?",
            "en": "Sure. What’s your current booking number?"
          }
        },
        {
          "role": "user",
          "text": "It’s AB123456.",
          "translations": {
            "ko": "AB123456입니다.",
            "zh": "是AB123456。",
            "ja": "AB123456です。",
            "vi": "Đó là AB123456.",
            "en": "It’s AB123456."
          }
        },
        {
          "role": "ai",
          "text": "Let me check... Okay, we have a 6 PM flight available.",
          "translations": {
            "ko": "확인해보겠습니다... 6시 항공편이 가능합니다.",
            "zh": "让我查一下...好的，我们有6点的航班。",
            "ja": "確認します…よろしい、午後6時のフライトが利用可能です。",
            "vi": "Để tôi kiểm tra... Được, chúng tôi có chuyến bay lúc 6 giờ chiều.",
            "en": "Let me check... Okay, we have a 6 PM flight available."
          }
        },
        {
          "role": "user",
          "text": "That works. Is there a change fee?",
          "translations": {
            "ko": "그걸로 괜찮습니다. 변경 수수료가 있나요?",
            "zh": "可以。有更改费用吗？",
            "ja": "それで大丈夫です。変更手数料はかかりますか？",
            "vi": "Được. Có phí đổi chuyến không?",
            "en": "That works. Is there a change fee?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, it’s $50 plus any fare difference.",
          "translations": {
            "ko": "네, $50과 추가 요금 차액이 있습니다.",
            "zh": "是的，需要支付50美元的更改费用，以及任何票价差额。",
            "ja": "はい、$50プラス運賃差額です。",
            "vi": "Có, là 50 đô la cộng với bất kỳ sự khác biệt về giá vé.",
            "en": "Yes, it’s $50 plus any fare difference."
          }
        },
        {
          "role": "user",
          "text": "Alright, please go ahead and change it.",
          "translations": {
            "ko": "알겠습니다, 변경해주세요.",
            "zh": "好的，请继续更改。",
            "ja": "了解しました、変更をお願いします。",
            "vi": "Được, vui lòng tiến hành đổi chuyến.",
            "en": "Alright, please go ahead and change it."
          }
        },
        {
          "role": "ai",
          "text": "Done. Your new flight is confirmed.",
          "translations": {
            "ko": "변경 완료되었습니다. 새로운 항공편이 확인되었습니다.",
            "zh": "完成了。你的新航班已确认。",
            "ja": "完了しました。新しいフライトが確定しました。",
            "vi": "Xong. Chuyến bay mới của bạn đã được xác nhận.",
            "en": "Done. Your new flight is confirmed."
          }
        },
        {
          "role": "user",
          "text": "Thanks. What’s the new gate number?",
          "translations": {
            "ko": "감사합니다. 새로운 탑승구 번호는 어떻게 되나요?",
            "zh": "谢谢。新的登机口号码是多少？",
            "ja": "ありがとう。新しいゲート番号は何ですか？",
            "vi": "Cảm ơn. Cổng mới là số mấy?",
            "en": "Thanks. What’s the new gate number?"
          }
        },
        {
          "role": "ai",
          "text": "It’s Gate 22. Boarding starts at 5:30 PM.",
          "translations": {
            "ko": "22번 탑승구입니다. 탑승은 오후 5시 30분부터 시작됩니다.",
            "zh": "是22号登机口。登机开始时间是5:30。",
            "ja": "ゲート22です。搭乗開始は午後5時30分からです。",
            "vi": "Đó là Cổng 22. Thủ tục lên máy bay bắt đầu lúc 5:30 chiều.",
            "en": "It’s Gate 22. Boarding starts at 5:30 PM."
          }
        },
        {
          "role": "user",
          "text": "Got it. Will my checked bag transfer automatically?",
          "translations": {
            "ko": "알겠습니다. 저의 수하물은 자동으로 이동되나요?",
            "zh": "明白了。我的托运行李会自动转运吗？",
            "ja": "分かりました。私の預けた荷物は自動的に転送されますか？",
            "vi": "Hiểu rồi. Hành lý của tôi sẽ được chuyển tự động phải không?",
            "en": "Got it. Will my checked bag transfer automatically?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, we’ve updated the baggage information.",
          "translations": {
            "ko": "네, 수하물 정보를 업데이트했습니다.",
            "zh": "是的，我们已经更新了行李信息。",
            "ja": "はい、荷物情報を更新しました。",
            "vi": "Đúng, chúng tôi đã cập nhật thông tin hành lý.",
            "en": "Yes, we’ve updated the baggage information."
          }
        },
        {
          "role": "user",
          "text": "Perfect. Do I need to go through security again?",
          "translations": {
            "ko": "좋습니다. 다시 보안 검색을 거쳐야 하나요?",
            "zh": "太好了。我需要再次通过安检吗？",
            "ja": "完璧です。もう一度セキュリティチェックを受ける必要はありますか？",
            "vi": "Hoàn hảo. Tôi có cần qua kiểm tra an ninh lại không?",
            "en": "Perfect. Do I need to go through security again?"
          }
        },
        {
          "role": "ai",
          "text": "No, just proceed to your gate directly.",
          "translations": {
            "ko": "아니요, 바로 탑승구로 가시면 됩니다.",
            "zh": "不需要，直接前往你的登机口即可。",
            "ja": "いいえ、直接ゲートに進んでください。",
            "vi": "Không, chỉ cần tiếp tục đến cổng của bạn.",
            "en": "No, just proceed to your gate directly."
          }
        },
        {
          "role": "user",
          "text": "Thank you. You’ve been very helpful.",
          "translations": {
            "ko": "감사합니다. 많은 도움이 되었습니다.",
            "zh": "谢谢你。你帮了我很大的忙。",
            "ja": "ありがとうございます。大変助かりました。",
            "vi": "Cảm ơn. Bạn đã giúp đỡ rất nhiều.",
            "en": "Thank you. You’ve been very helpful."
          }
        },
        {
          "role": "ai",
          "text": "It’s my pleasure. Safe travels!",
          "translations": {
            "ko": "천만에요. 안전한 여행 되세요!",
            "zh": "我很乐意帮助你。祝你旅途愉快！",
            "ja": "どういたしまして。安全な旅を！",
            "vi": "Rất vui được giúp đỡ. Chúc bạn một chuyến đi an toàn!",
            "en": "It’s my pleasure. Safe travels!"
          }
        },
        {
          "role": "user",
          "text": "Thanks again.",
          "translations": {
            "ko": "다시 한번 감사드립니다.",
            "zh": "再次感谢。",
            "ja": "再度、ありがとう。",
            "vi": "Cảm ơn một lần nữa.",
            "en": "Thanks again."
          }
        },
        {
          "role": "ai",
          "text": "Have a great flight.",
          "translations": {
            "ko": "좋은 비행 되세요.",
            "zh": "祝你旅途愉快。",
            "ja": "素晴らしいフライトを。",
            "vi": "Chúc bạn có một chuyến bay tốt.",
            "en": "Have a great flight."
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
    }
  ],
  "advanced": [
    {
      "description": {
        "en": "Rebooking multiple international flights due to emergency",
        "ko": "긴급 상황으로 여러 국제선 항공편을 재예약",
        "zh": "因紧急情况重新预订多个国际航班",
        "ja": "緊急事態のため、複数の国際便を再予約",
        "vi": "Đặt lại nhiều chuyến bay quốc tế do khẩn cấp"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Good evening, how can I help you?",
          "translations": {
            "ko": "안녕하십니까, 어떻게 도와드릴까요?",
            "zh": "晚上好，我能帮您做什么？",
            "ja": "こんばんは、何かお手伝いできることはありますか？",
            "vi": "Chào buổi tối, tôi có thể giúp gì cho bạn?",
            "en": "Good evening, how can I help you?"
          }
        },
        {
          "role": "user",
          "text": "I need to rebook several international flights due to an emergency.",
          "translations": {
            "ko": "긴급 상황으로 여러 국제선 항공편을 재예약해야 합니다.",
            "zh": "我需要因紧急情况重新预订几个国际航班。",
            "ja": "緊急事態のため、いくつかの国際便を再予約する必要があります。",
            "vi": "Tôi cần đặt lại một số chuyến bay quốc tế do một tình huống khẩn cấp.",
            "en": "I need to rebook several international flights due to an emergency."
          }
        },
        {
          "role": "ai",
          "text": "I’m sorry to hear that. Which destinations are involved?",
          "translations": {
            "ko": "그런 일이 있으셨군요. 어떤 목적지가 관련되어 있나요?",
            "zh": "很抱歉听到这个。涉及哪些目的地？",
            "ja": "それは大変でしたね。どの目的地が関係していますか？",
            "vi": "Tôi rất tiếc khi nghe điều đó. Những điểm đến nào liên quan?",
            "en": "I’m sorry to hear that. Which destinations are involved?"
          }
        },
        {
          "role": "user",
          "text": "Tokyo, Paris, and New York.",
          "translations": {
            "ko": "도쿄, 파리, 그리고 뉴욕입니다.",
            "zh": "东京，巴黎和纽约。",
            "ja": "東京、パリ、そしてニューヨークです。",
            "vi": "Tokyo, Paris và New York.",
            "en": "Tokyo, Paris, and New York."
          }
        },
        {
          "role": "ai",
          "text": "Let me check availability... We can reroute Tokyo via Seoul.",
          "translations": {
            "ko": "좌석 확인해보겠습니다... 도쿄는 서울을 경유할 수 있습니다.",
            "zh": "让我查看一下可用性...我们可以将东京的航班改道首尔。",
            "ja": "空席を確認します... 東京はソウル経由で再ルートできます。",
            "vi": "Hãy để tôi kiểm tra sự còn chỗ... Chúng ta có thể đổi hướng Tokyo qua Seoul.",
            "en": "Let me check availability... We can reroute Tokyo via Seoul."
          }
        },
        {
          "role": "user",
          "text": "That’s fine. What about the Paris leg?",
          "translations": {
            "ko": "괜찮습니다. 그럼 파리행은요?",
            "zh": "那没问题。那巴黎的航班呢？",
            "ja": "それで大丈夫です。パリ行きはどうですか？",
            "vi": "Được rồi. Còn chuyến bay đến Paris thì sao?",
            "en": "That’s fine. What about the Paris leg?"
          }
        },
        {
          "role": "ai",
          "text": "There’s a flight tomorrow morning at 8:15 AM with one stop.",
          "translations": {
            "ko": "내일 아침 8시 15분에 한 번의 경유가 있는 비행이 있습니다.",
            "zh": "明天早上8:15有一班中转航班。",
            "ja": "明日の朝8時15分に1回の停止を伴うフライトがあります。",
            "vi": "Có một chuyến bay vào sáng mai lúc 8:15 với một điểm dừng.",
            "en": "There’s a flight tomorrow morning at 8:15 AM with one stop."
          }
        },
        {
          "role": "user",
          "text": "Book it, please. And the New York flight?",
          "translations": {
            "ko": "예약해 주세요. 그럼 뉴욕행은요?",
            "zh": "请预订。那纽约的航班呢？",
            "ja": "予約してください。ニューヨーク行きのフライトは？",
            "vi": "Hãy đặt cho tôi. Còn chuyến bay đến New York?",
            "en": "Book it, please. And the New York flight?"
          }
        },
        {
          "role": "ai",
          "text": "I can put you on standby for this evening or confirm for tomorrow.",
          "translations": {
            "ko": "오늘 저녁 대기 명단에 올려드리거나 내일 확정할 수 있습니다.",
            "zh": "我可以让您今晚候补，或者确认明天的航班。",
            "ja": "今晩の待機リストに入れるか、明日の確定席を取ることができます。",
            "vi": "Tôi có thể cho bạn chờ cho tối nay hoặc xác nhận cho ngày mai.",
            "en": "I can put you on standby for this evening or confirm for tomorrow."
          }
        },
        {
          "role": "user",
          "text": "Confirm for tomorrow.",
          "translations": {
            "ko": "내일로 확정해주세요.",
            "zh": "确认明天的。",
            "ja": "明日の確定席をお願いします。",
            "vi": "Xác nhận cho ngày mai.",
            "en": "Confirm for tomorrow."
          }
        },
        {
          "role": "ai",
          "text": "All set. You’ll receive new confirmations via email.",
          "translations": {
            "ko": "모두 준비되었습니다. 새로운 확인 정보를 이메일로 보내드리겠습니다.",
            "zh": "都安排好了。您将通过电子邮件收到新的确认信息。",
            "ja": "手配完了です。新しい確認情報はメールで送られます。",
            "vi": "Tất cả đã sẵn sàng. Bạn sẽ nhận được xác nhận mới qua email.",
            "en": "All set. You’ll receive new confirmations via email."
          }
        },
        {
          "role": "user",
          "text": "Will I need to pay additional fees?",
          "translations": {
            "ko": "추가 요금을 내야 하나요?",
            "zh": "我需要支付额外费用吗？",
            "ja": "追加料金は必要ですか？",
            "vi": "Tôi có cần phải trả thêm phí không?",
            "en": "Will I need to pay additional fees?"
          }
        },
        {
          "role": "ai",
          "text": "Due to the emergency, we’re waiving the rebooking charges.",
          "translations": {
            "ko": "긴급 상황으로 인해 재예약 수수료를 면제해드립니다.",
            "zh": "由于紧急情况，我们将免除重新预订的费用。",
            "ja": "緊急事態のため、再予約料は免除されます。",
            "vi": "Do tình huống khẩn cấp, chúng tôi sẽ miễn phí đặt lại.",
            "en": "Due to the emergency, we’re waiving the rebooking charges."
          }
        },
        {
          "role": "user",
          "text": "I really appreciate that.",
          "translations": {
            "ko": "정말 감사합니다.",
            "zh": "我真的很感激。",
            "ja": "本当に助かります。",
            "vi": "Tôi thực sự biết ơn điều đó.",
            "en": "I really appreciate that."
          }
        },
        {
          "role": "ai",
          "text": "Do you need assistance with accommodations tonight?",
          "translations": {
            "ko": "오늘 밤 숙박에 도움이 필요하신가요?",
            "zh": "您今晚需要住宿帮助吗？",
            "ja": "今夜の宿泊施設の手配が必要ですか？",
            "vi": "Bạn có cần hỗ trợ về chỗ ở tối nay không?",
            "en": "Do you need assistance with accommodations tonight?"
          }
        },
        {
          "role": "user",
          "text": "Yes, please. I’d prefer something near the airport.",
          "translations": {
            "ko": "네, 부탁드립니다. 공항 근처가 좋겠습니다.",
            "zh": "是的，请。我希望选择靠近机场的地方。",
            "ja": "はい、お願いします。空港近くがいいです。",
            "vi": "Vâng, làm ơn. Tôi muốn một nơi gần sân bay.",
            "en": "Yes, please. I’d prefer something near the airport."
          }
        },
        {
          "role": "ai",
          "text": "I’ll arrange that and send you details shortly.",
          "translations": {
            "ko": "그럼 준비해드리고 곧 자세한 정보를 보내드리겠습니다.",
            "zh": "我会安排的，并尽快给您发送详细信息。",
            "ja": "手配しますので、詳細は後ほどお送りします。",
            "vi": "Tôi sẽ sắp xếp và gửi cho bạn chi tiết ngay.",
            "en": "I’ll arrange that and send you details shortly."
          }
        },
        {
          "role": "user",
          "text": "Thanks for your help in this situation.",
          "translations": {
            "ko": "이런 상황에서 도와주셔서 감사합니다.",
            "zh": "感谢您在这种情况下的帮助。",
            "ja": "この状況でのご協力、ありがとうございます。",
            "vi": "Cảm ơn bạn đã giúp đỡ trong tình huống này.",
            "en": "Thanks for your help in this situation."
          }
        },
        {
          "role": "ai",
          "text": "We’re always here to assist you.",
          "translations": {
            "ko": "언제나 도와드리겠습니다.",
            "zh": "我们始终在这里为您提供帮助。",
            "ja": "いつでもお手伝いします。",
            "vi": "Chúng tôi luôn sẵn sàng hỗ trợ bạn.",
            "en": "We’re always here to assist you."
          }
        },
        {
          "role": "user",
          "text": "You’ve been great. Thank you again.",
          "translations": {
            "ko": "정말 잘해주셨습니다. 다시 한번 감사드립니다.",
            "zh": "您做得很好。再次感谢您。",
            "ja": "大変お世話になりました。再度、ありがとうございます。",
            "vi": "Bạn đã làm tốt lắm. Cảm ơn bạn một lần nữa.",
            "en": "You’ve been great. Thank you again."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Handling visa issues at immigration",
        "ko": "이민국에서 비자 문제 처리",
        "zh": "在移民局处理签证问题",
        "ja": "入国審査でのビザ問題の対応",
        "vi": "Giải quyết vấn đề visa tại cửa khẩu"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Good evening, how can I help you?",
          "translations": {
            "ko": "안녕하십니까, 어떻게 도와드릴까요?",
            "zh": "晚上好，我能帮您做什么？",
            "ja": "こんばんは、何かお手伝いできることはありますか？",
            "vi": "Chào buổi tối, tôi có thể giúp gì cho bạn?",
            "en": "Good evening, how can I help you?"
          }
        },
        {
          "role": "user",
          "text": "I need to rebook several international flights due to an emergency.",
          "translations": {
            "ko": "긴급 상황으로 여러 국제선 항공편을 재예약해야 합니다.",
            "zh": "我需要因紧急情况重新预订几个国际航班。",
            "ja": "緊急事態のため、いくつかの国際便を再予約する必要があります。",
            "vi": "Tôi cần đặt lại một số chuyến bay quốc tế do một tình huống khẩn cấp.",
            "en": "I need to rebook several international flights due to an emergency."
          }
        },
        {
          "role": "ai",
          "text": "I’m sorry to hear that. Which destinations are involved?",
          "translations": {
            "ko": "그런 일이 있으셨군요. 어떤 목적지가 관련되어 있나요?",
            "zh": "很抱歉听到这个。涉及哪些目的地？",
            "ja": "それは大変でしたね。どの目的地が関係していますか？",
            "vi": "Tôi rất tiếc khi nghe điều đó. Những điểm đến nào liên quan?",
            "en": "I’m sorry to hear that. Which destinations are involved?"
          }
        },
        {
          "role": "user",
          "text": "Tokyo, Paris, and New York.",
          "translations": {
            "ko": "도쿄, 파리, 그리고 뉴욕입니다.",
            "zh": "东京，巴黎和纽约。",
            "ja": "東京、パリ、そしてニューヨークです。",
            "vi": "Tokyo, Paris và New York.",
            "en": "Tokyo, Paris, and New York."
          }
        },
        {
          "role": "ai",
          "text": "Let me check availability... We can reroute Tokyo via Seoul.",
          "translations": {
            "ko": "좌석 확인해보겠습니다... 도쿄는 서울을 경유할 수 있습니다.",
            "zh": "让我查看一下可用性...我们可以将东京的航班改道首尔。",
            "ja": "空席を確認します... 東京はソウル経由で再ルートできます。",
            "vi": "Hãy để tôi kiểm tra sự còn chỗ... Chúng ta có thể đổi hướng Tokyo qua Seoul.",
            "en": "Let me check availability... We can reroute Tokyo via Seoul."
          }
        },
        {
          "role": "user",
          "text": "That’s fine. What about the Paris leg?",
          "translations": {
            "ko": "괜찮습니다. 그럼 파리행은요?",
            "zh": "那没问题。那巴黎的航班呢？",
            "ja": "それで大丈夫です。パリ行きはどうですか？",
            "vi": "Được rồi. Còn chuyến bay đến Paris thì sao?",
            "en": "That’s fine. What about the Paris leg?"
          }
        },
        {
          "role": "ai",
          "text": "There’s a flight tomorrow morning at 8:15 AM with one stop.",
          "translations": {
            "ko": "내일 아침 8시 15분에 한 번의 경유가 있는 비행이 있습니다.",
            "zh": "明天早上8:15有一班中转航班。",
            "ja": "明日の朝8時15分に1回の停止を伴うフライトがあります。",
            "vi": "Có một chuyến bay vào sáng mai lúc 8:15 với một điểm dừng.",
            "en": "There’s a flight tomorrow morning at 8:15 AM with one stop."
          }
        },
        {
          "role": "user",
          "text": "Book it, please. And the New York flight?",
          "translations": {
            "ko": "예약해 주세요. 그럼 뉴욕행은요?",
            "zh": "请预订。那纽约的航班呢？",
            "ja": "予約してください。ニューヨーク行きのフライトは？",
            "vi": "Hãy đặt cho tôi. Còn chuyến bay đến New York?",
            "en": "Book it, please. And the New York flight?"
          }
        },
        {
          "role": "ai",
          "text": "I can put you on standby for this evening or confirm for tomorrow.",
          "translations": {
            "ko": "오늘 저녁 대기 명단에 올려드리거나 내일 확정할 수 있습니다.",
            "zh": "我可以让您今晚候补，或者确认明天的航班。",
            "ja": "今晩の待機リストに入れるか、明日の確定席を取ることができます。",
            "vi": "Tôi có thể cho bạn chờ cho tối nay hoặc xác nhận cho ngày mai.",
            "en": "I can put you on standby for this evening or confirm for tomorrow."
          }
        },
        {
          "role": "user",
          "text": "Confirm for tomorrow.",
          "translations": {
            "ko": "내일로 확정해주세요.",
            "zh": "确认明天的。",
            "ja": "明日の確定席をお願いします。",
            "vi": "Xác nhận cho ngày mai.",
            "en": "Confirm for tomorrow."
          }
        },
        {
          "role": "ai",
          "text": "All set. You’ll receive new confirmations via email.",
          "translations": {
            "ko": "모두 준비되었습니다. 새로운 확인 정보를 이메일로 보내드리겠습니다.",
            "zh": "都安排好了。您将通过电子邮件收到新的确认信息。",
            "ja": "手配完了です。新しい確認情報はメールで送られます。",
            "vi": "Tất cả đã sẵn sàng. Bạn sẽ nhận được xác nhận mới qua email.",
            "en": "All set. You’ll receive new confirmations via email."
          }
        },
        {
          "role": "user",
          "text": "Will I need to pay additional fees?",
          "translations": {
            "ko": "추가 요금을 내야 하나요?",
            "zh": "我需要支付额外费用吗？",
            "ja": "追加料金は必要ですか？",
            "vi": "Tôi có cần phải trả thêm phí không?",
            "en": "Will I need to pay additional fees?"
          }
        },
        {
          "role": "ai",
          "text": "Due to the emergency, we’re waiving the rebooking charges.",
          "translations": {
            "ko": "긴급 상황으로 인해 재예약 수수료를 면제해드립니다.",
            "zh": "由于紧急情况，我们将免除重新预订的费用。",
            "ja": "緊急事態のため、再予約料は免除されます。",
            "vi": "Do tình huống khẩn cấp, chúng tôi sẽ miễn phí đặt lại.",
            "en": "Due to the emergency, we’re waiving the rebooking charges."
          }
        },
        {
          "role": "user",
          "text": "I really appreciate that.",
          "translations": {
            "ko": "정말 감사합니다.",
            "zh": "我真的很感激。",
            "ja": "本当に助かります。",
            "vi": "Tôi thực sự biết ơn điều đó.",
            "en": "I really appreciate that."
          }
        },
        {
          "role": "ai",
          "text": "Do you need assistance with accommodations tonight?",
          "translations": {
            "ko": "오늘 밤 숙박에 도움이 필요하신가요?",
            "zh": "您今晚需要住宿帮助吗？",
            "ja": "今夜の宿泊施設の手配が必要ですか？",
            "vi": "Bạn có cần hỗ trợ về chỗ ở tối nay không?",
            "en": "Do you need assistance with accommodations tonight?"
          }
        },
        {
          "role": "user",
          "text": "Yes, please. I’d prefer something near the airport.",
          "translations": {
            "ko": "네, 부탁드립니다. 공항 근처가 좋겠습니다.",
            "zh": "是的，请。我希望选择靠近机场的地方。",
            "ja": "はい、お願いします。空港近くがいいです。",
            "vi": "Vâng, làm ơn. Tôi muốn một nơi gần sân bay.",
            "en": "Yes, please. I’d prefer something near the airport."
          }
        },
        {
          "role": "ai",
          "text": "I’ll arrange that and send you details shortly.",
          "translations": {
            "ko": "그럼 준비해드리고 곧 자세한 정보를 보내드리겠습니다.",
            "zh": "我会安排的，并尽快给您发送详细信息。",
            "ja": "手配しますので、詳細は後ほどお送りします。",
            "vi": "Tôi sẽ sắp xếp và gửi cho bạn chi tiết ngay.",
            "en": "I’ll arrange that and send you details shortly."
          }
        },
        {
          "role": "user",
          "text": "Thanks for your help in this situation.",
          "translations": {
            "ko": "이런 상황에서 도와주셔서 감사합니다.",
            "zh": "感谢您在这种情况下的帮助。",
            "ja": "この状況でのご協力、ありがとうございます。",
            "vi": "Cảm ơn bạn đã giúp đỡ trong tình huống này.",
            "en": "Thanks for your help in this situation."
          }
        },
        {
          "role": "ai",
          "text": "We’re always here to assist you.",
          "translations": {
            "ko": "언제나 도와드리겠습니다.",
            "zh": "我们始终在这里为您提供帮助。",
            "ja": "いつでもお手伝いします。",
            "vi": "Chúng tôi luôn sẵn sàng hỗ trợ bạn.",
            "en": "We’re always here to assist you."
          }
        },
        {
          "role": "user",
          "text": "You’ve been great. Thank you again.",
          "translations": {
            "ko": "정말 잘해주셨습니다. 다시 한번 감사드립니다.",
            "zh": "您做得很好。再次感谢您。",
            "ja": "大変お世話になりました。再度、ありがとうございます。",
            "vi": "Bạn đã làm tốt lắm. Cảm ơn bạn một lần nữa.",
            "en": "You’ve been great. Thank you again."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Filing a formal complaint about hotel service",
        "ko": "호텔 서비스에 대한 공식 불만 제기",
        "zh": "对酒店服务提出正式投诉",
        "ja": "ホテルサービスについての正式な苦情の提出",
        "vi": "Gửi khiếu nại chính thức về dịch vụ khách sạn"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Good evening, how can I help you?",
          "translations": {
            "ko": "안녕하십니까, 어떻게 도와드릴까요?",
            "zh": "晚上好，我能帮您做什么？",
            "ja": "こんばんは、何かお手伝いできることはありますか？",
            "vi": "Chào buổi tối, tôi có thể giúp gì cho bạn?",
            "en": "Good evening, how can I help you?"
          }
        },
        {
          "role": "user",
          "text": "I need to rebook several international flights due to an emergency.",
          "translations": {
            "ko": "긴급 상황으로 여러 국제선 항공편을 재예약해야 합니다.",
            "zh": "我需要因紧急情况重新预订几个国际航班。",
            "ja": "緊急事態のため、いくつかの国際便を再予約する必要があります。",
            "vi": "Tôi cần đặt lại một số chuyến bay quốc tế do một tình huống khẩn cấp.",
            "en": "I need to rebook several international flights due to an emergency."
          }
        },
        {
          "role": "ai",
          "text": "I’m sorry to hear that. Which destinations are involved?",
          "translations": {
            "ko": "그런 일이 있으셨군요. 어떤 목적지가 관련되어 있나요?",
            "zh": "很抱歉听到这个。涉及哪些目的地？",
            "ja": "それは大変でしたね。どの目的地が関係していますか？",
            "vi": "Tôi rất tiếc khi nghe điều đó. Những điểm đến nào liên quan?",
            "en": "I’m sorry to hear that. Which destinations are involved?"
          }
        },
        {
          "role": "user",
          "text": "Tokyo, Paris, and New York.",
          "translations": {
            "ko": "도쿄, 파리, 그리고 뉴욕입니다.",
            "zh": "东京，巴黎和纽约。",
            "ja": "東京、パリ、そしてニューヨークです。",
            "vi": "Tokyo, Paris và New York.",
            "en": "Tokyo, Paris, and New York."
          }
        },
        {
          "role": "ai",
          "text": "Let me check availability... We can reroute Tokyo via Seoul.",
          "translations": {
            "ko": "좌석 확인해보겠습니다... 도쿄는 서울을 경유할 수 있습니다.",
            "zh": "让我查看一下可用性...我们可以将东京的航班改道首尔。",
            "ja": "空席を確認します... 東京はソウル経由で再ルートできます。",
            "vi": "Hãy để tôi kiểm tra sự còn chỗ... Chúng ta có thể đổi hướng Tokyo qua Seoul.",
            "en": "Let me check availability... We can reroute Tokyo via Seoul."
          }
        },
        {
          "role": "user",
          "text": "That’s fine. What about the Paris leg?",
          "translations": {
            "ko": "괜찮습니다. 그럼 파리행은요?",
            "zh": "那没问题。那巴黎的航班呢？",
            "ja": "それで大丈夫です。パリ行きはどうですか？",
            "vi": "Được rồi. Còn chuyến bay đến Paris thì sao?",
            "en": "That’s fine. What about the Paris leg?"
          }
        },
        {
          "role": "ai",
          "text": "There’s a flight tomorrow morning at 8:15 AM with one stop.",
          "translations": {
            "ko": "내일 아침 8시 15분에 한 번의 경유가 있는 비행이 있습니다.",
            "zh": "明天早上8:15有一班中转航班。",
            "ja": "明日の朝8時15分に1回の停止を伴うフライトがあります。",
            "vi": "Có một chuyến bay vào sáng mai lúc 8:15 với một điểm dừng.",
            "en": "There’s a flight tomorrow morning at 8:15 AM with one stop."
          }
        },
        {
          "role": "user",
          "text": "Book it, please. And the New York flight?",
          "translations": {
            "ko": "예약해 주세요. 그럼 뉴욕행은요?",
            "zh": "请预订。那纽约的航班呢？",
            "ja": "予約してください。ニューヨーク行きのフライトは？",
            "vi": "Hãy đặt cho tôi. Còn chuyến bay đến New York?",
            "en": "Book it, please. And the New York flight?"
          }
        },
        {
          "role": "ai",
          "text": "I can put you on standby for this evening or confirm for tomorrow.",
          "translations": {
            "ko": "오늘 저녁 대기 명단에 올려드리거나 내일 확정할 수 있습니다.",
            "zh": "我可以让您今晚候补，或者确认明天的航班。",
            "ja": "今晩の待機リストに入れるか、明日の確定席を取ることができます。",
            "vi": "Tôi có thể cho bạn chờ cho tối nay hoặc xác nhận cho ngày mai.",
            "en": "I can put you on standby for this evening or confirm for tomorrow."
          }
        },
        {
          "role": "user",
          "text": "Confirm for tomorrow.",
          "translations": {
            "ko": "내일로 확정해주세요.",
            "zh": "确认明天的。",
            "ja": "明日の確定席をお願いします。",
            "vi": "Xác nhận cho ngày mai.",
            "en": "Confirm for tomorrow."
          }
        },
        {
          "role": "ai",
          "text": "All set. You’ll receive new confirmations via email.",
          "translations": {
            "ko": "모두 준비되었습니다. 새로운 확인 정보를 이메일로 보내드리겠습니다.",
            "zh": "都安排好了。您将通过电子邮件收到新的确认信息。",
            "ja": "手配完了です。新しい確認情報はメールで送られます。",
            "vi": "Tất cả đã sẵn sàng. Bạn sẽ nhận được xác nhận mới qua email.",
            "en": "All set. You’ll receive new confirmations via email."
          }
        },
        {
          "role": "user",
          "text": "Will I need to pay additional fees?",
          "translations": {
            "ko": "추가 요금을 내야 하나요?",
            "zh": "我需要支付额外费用吗？",
            "ja": "追加料金は必要ですか？",
            "vi": "Tôi có cần phải trả thêm phí không?",
            "en": "Will I need to pay additional fees?"
          }
        },
        {
          "role": "ai",
          "text": "Due to the emergency, we’re waiving the rebooking charges.",
          "translations": {
            "ko": "긴급 상황으로 인해 재예약 수수료를 면제해드립니다.",
            "zh": "由于紧急情况，我们将免除重新预订的费用。",
            "ja": "緊急事態のため、再予約料は免除されます。",
            "vi": "Do tình huống khẩn cấp, chúng tôi sẽ miễn phí đặt lại.",
            "en": "Due to the emergency, we’re waiving the rebooking charges."
          }
        },
        {
          "role": "user",
          "text": "I really appreciate that.",
          "translations": {
            "ko": "정말 감사합니다.",
            "zh": "我真的很感激。",
            "ja": "本当に助かります。",
            "vi": "Tôi thực sự biết ơn điều đó.",
            "en": "I really appreciate that."
          }
        },
        {
          "role": "ai",
          "text": "Do you need assistance with accommodations tonight?",
          "translations": {
            "ko": "오늘 밤 숙박에 도움이 필요하신가요?",
            "zh": "您今晚需要住宿帮助吗？",
            "ja": "今夜の宿泊施設の手配が必要ですか？",
            "vi": "Bạn có cần hỗ trợ về chỗ ở tối nay không?",
            "en": "Do you need assistance with accommodations tonight?"
          }
        },
        {
          "role": "user",
          "text": "Yes, please. I’d prefer something near the airport.",
          "translations": {
            "ko": "네, 부탁드립니다. 공항 근처가 좋겠습니다.",
            "zh": "是的，请。我希望选择靠近机场的地方。",
            "ja": "はい、お願いします。空港近くがいいです。",
            "vi": "Vâng, làm ơn. Tôi muốn một nơi gần sân bay.",
            "en": "Yes, please. I’d prefer something near the airport."
          }
        },
        {
          "role": "ai",
          "text": "I’ll arrange that and send you details shortly.",
          "translations": {
            "ko": "그럼 준비해드리고 곧 자세한 정보를 보내드리겠습니다.",
            "zh": "我会安排的，并尽快给您发送详细信息。",
            "ja": "手配しますので、詳細は後ほどお送りします。",
            "vi": "Tôi sẽ sắp xếp và gửi cho bạn chi tiết ngay.",
            "en": "I’ll arrange that and send you details shortly."
          }
        },
        {
          "role": "user",
          "text": "Thanks for your help in this situation.",
          "translations": {
            "ko": "이런 상황에서 도와주셔서 감사합니다.",
            "zh": "感谢您在这种情况下的帮助。",
            "ja": "この状況でのご協力、ありがとうございます。",
            "vi": "Cảm ơn bạn đã giúp đỡ trong tình huống này.",
            "en": "Thanks for your help in this situation."
          }
        },
        {
          "role": "ai",
          "text": "We’re always here to assist you.",
          "translations": {
            "ko": "언제나 도와드리겠습니다.",
            "zh": "我们始终在这里为您提供帮助。",
            "ja": "いつでもお手伝いします。",
            "vi": "Chúng tôi luôn sẵn sàng hỗ trợ bạn.",
            "en": "We’re always here to assist you."
          }
        },
        {
          "role": "user",
          "text": "You’ve been great. Thank you again.",
          "translations": {
            "ko": "정말 잘해주셨습니다. 다시 한번 감사드립니다.",
            "zh": "您做得很好。再次感谢您。",
            "ja": "大変お世話になりました。再度、ありがとうございます。",
            "vi": "Bạn đã làm tốt lắm. Cảm ơn bạn một lần nữa.",
            "en": "You’ve been great. Thank you again."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Arranging business-class upgrades last minute",
        "ko": "마지막 순간에 비즈니스 클래스 업그레이드 조정",
        "zh": "最后一分钟安排商务舱升级",
        "ja": "ビジネスクラスのアップグレードの最終手配",
        "vi": "Sắp xếp nâng cấp hạng vé cuối phút"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Good evening, how can I help you?",
          "translations": {
            "ko": "안녕하십니까, 어떻게 도와드릴까요?",
            "zh": "晚上好，我能帮您做什么？",
            "ja": "こんばんは、何かお手伝いできることはありますか？",
            "vi": "Chào buổi tối, tôi có thể giúp gì cho bạn?",
            "en": "Good evening, how can I help you?"
          }
        },
        {
          "role": "user",
          "text": "I need to rebook several international flights due to an emergency.",
          "translations": {
            "ko": "긴급 상황으로 여러 국제선 항공편을 재예약해야 합니다.",
            "zh": "我需要因紧急情况重新预订几个国际航班。",
            "ja": "緊急事態のため、いくつかの国際便を再予約する必要があります。",
            "vi": "Tôi cần đặt lại một số chuyến bay quốc tế do một tình huống khẩn cấp.",
            "en": "I need to rebook several international flights due to an emergency."
          }
        },
        {
          "role": "ai",
          "text": "I’m sorry to hear that. Which destinations are involved?",
          "translations": {
            "ko": "그런 일이 있으셨군요. 어떤 목적지가 관련되어 있나요?",
            "zh": "很抱歉听到这个。涉及哪些目的地？",
            "ja": "それは大変でしたね。どの目的地が関係していますか？",
            "vi": "Tôi rất tiếc khi nghe điều đó. Những điểm đến nào liên quan?",
            "en": "I’m sorry to hear that. Which destinations are involved?"
          }
        },
        {
          "role": "user",
          "text": "Tokyo, Paris, and New York.",
          "translations": {
            "ko": "도쿄, 파리, 그리고 뉴욕입니다.",
            "zh": "东京，巴黎和纽约。",
            "ja": "東京、パリ、そしてニューヨークです。",
            "vi": "Tokyo, Paris và New York.",
            "en": "Tokyo, Paris, and New York."
          }
        },
        {
          "role": "ai",
          "text": "Let me check availability... We can reroute Tokyo via Seoul.",
          "translations": {
            "ko": "좌석 확인해보겠습니다... 도쿄는 서울을 경유할 수 있습니다.",
            "zh": "让我查看一下可用性...我们可以将东京的航班改道首尔。",
            "ja": "空席を確認します... 東京はソウル経由で再ルートできます。",
            "vi": "Hãy để tôi kiểm tra sự còn chỗ... Chúng ta có thể đổi hướng Tokyo qua Seoul.",
            "en": "Let me check availability... We can reroute Tokyo via Seoul."
          }
        },
        {
          "role": "user",
          "text": "That’s fine. What about the Paris leg?",
          "translations": {
            "ko": "괜찮습니다. 그럼 파리행은요?",
            "zh": "那没问题。那巴黎的航班呢？",
            "ja": "それで大丈夫です。パリ行きはどうですか？",
            "vi": "Được rồi. Còn chuyến bay đến Paris thì sao?",
            "en": "That’s fine. What about the Paris leg?"
          }
        },
        {
          "role": "ai",
          "text": "There’s a flight tomorrow morning at 8:15 AM with one stop.",
          "translations": {
            "ko": "내일 아침 8시 15분에 한 번의 경유가 있는 비행이 있습니다.",
            "zh": "明天早上8:15有一班中转航班。",
            "ja": "明日の朝8時15分に1回の停止を伴うフライトがあります。",
            "vi": "Có một chuyến bay vào sáng mai lúc 8:15 với một điểm dừng.",
            "en": "There’s a flight tomorrow morning at 8:15 AM with one stop."
          }
        },
        {
          "role": "user",
          "text": "Book it, please. And the New York flight?",
          "translations": {
            "ko": "예약해 주세요. 그럼 뉴욕행은요?",
            "zh": "请预订。那纽约的航班呢？",
            "ja": "予約してください。ニューヨーク行きのフライトは？",
            "vi": "Hãy đặt cho tôi. Còn chuyến bay đến New York?",
            "en": "Book it, please. And the New York flight?"
          }
        },
        {
          "role": "ai",
          "text": "I can put you on standby for this evening or confirm for tomorrow.",
          "translations": {
            "ko": "오늘 저녁 대기 명단에 올려드리거나 내일 확정할 수 있습니다.",
            "zh": "我可以让您今晚候补，或者确认明天的航班。",
            "ja": "今晩の待機リストに入れるか、明日の確定席を取ることができます。",
            "vi": "Tôi có thể cho bạn chờ cho tối nay hoặc xác nhận cho ngày mai.",
            "en": "I can put you on standby for this evening or confirm for tomorrow."
          }
        },
        {
          "role": "user",
          "text": "Confirm for tomorrow.",
          "translations": {
            "ko": "내일로 확정해주세요.",
            "zh": "确认明天的。",
            "ja": "明日の確定席をお願いします。",
            "vi": "Xác nhận cho ngày mai.",
            "en": "Confirm for tomorrow."
          }
        },
        {
          "role": "ai",
          "text": "All set. You’ll receive new confirmations via email.",
          "translations": {
            "ko": "모두 준비되었습니다. 새로운 확인 정보를 이메일로 보내드리겠습니다.",
            "zh": "都安排好了。您将通过电子邮件收到新的确认信息。",
            "ja": "手配完了です。新しい確認情報はメールで送られます。",
            "vi": "Tất cả đã sẵn sàng. Bạn sẽ nhận được xác nhận mới qua email.",
            "en": "All set. You’ll receive new confirmations via email."
          }
        },
        {
          "role": "user",
          "text": "Will I need to pay additional fees?",
          "translations": {
            "ko": "추가 요금을 내야 하나요?",
            "zh": "我需要支付额外费用吗？",
            "ja": "追加料金は必要ですか？",
            "vi": "Tôi có cần phải trả thêm phí không?",
            "en": "Will I need to pay additional fees?"
          }
        },
        {
          "role": "ai",
          "text": "Due to the emergency, we’re waiving the rebooking charges.",
          "translations": {
            "ko": "긴급 상황으로 인해 재예약 수수료를 면제해드립니다.",
            "zh": "由于紧急情况，我们将免除重新预订的费用。",
            "ja": "緊急事態のため、再予約料は免除されます。",
            "vi": "Do tình huống khẩn cấp, chúng tôi sẽ miễn phí đặt lại.",
            "en": "Due to the emergency, we’re waiving the rebooking charges."
          }
        },
        {
          "role": "user",
          "text": "I really appreciate that.",
          "translations": {
            "ko": "정말 감사합니다.",
            "zh": "我真的很感激。",
            "ja": "本当に助かります。",
            "vi": "Tôi thực sự biết ơn điều đó.",
            "en": "I really appreciate that."
          }
        },
        {
          "role": "ai",
          "text": "Do you need assistance with accommodations tonight?",
          "translations": {
            "ko": "오늘 밤 숙박에 도움이 필요하신가요?",
            "zh": "您今晚需要住宿帮助吗？",
            "ja": "今夜の宿泊施設の手配が必要ですか？",
            "vi": "Bạn có cần hỗ trợ về chỗ ở tối nay không?",
            "en": "Do you need assistance with accommodations tonight?"
          }
        },
        {
          "role": "user",
          "text": "Yes, please. I’d prefer something near the airport.",
          "translations": {
            "ko": "네, 부탁드립니다. 공항 근처가 좋겠습니다.",
            "zh": "是的，请。我希望选择靠近机场的地方。",
            "ja": "はい、お願いします。空港近くがいいです。",
            "vi": "Vâng, làm ơn. Tôi muốn một nơi gần sân bay.",
            "en": "Yes, please. I’d prefer something near the airport."
          }
        },
        {
          "role": "ai",
          "text": "I’ll arrange that and send you details shortly.",
          "translations": {
            "ko": "그럼 준비해드리고 곧 자세한 정보를 보내드리겠습니다.",
            "zh": "我会安排的，并尽快给您发送详细信息。",
            "ja": "手配しますので、詳細は後ほどお送りします。",
            "vi": "Tôi sẽ sắp xếp và gửi cho bạn chi tiết ngay.",
            "en": "I’ll arrange that and send you details shortly."
          }
        },
        {
          "role": "user",
          "text": "Thanks for your help in this situation.",
          "translations": {
            "ko": "이런 상황에서 도와주셔서 감사합니다.",
            "zh": "感谢您在这种情况下的帮助。",
            "ja": "この状況でのご協力、ありがとうございます。",
            "vi": "Cảm ơn bạn đã giúp đỡ trong tình huống này.",
            "en": "Thanks for your help in this situation."
          }
        },
        {
          "role": "ai",
          "text": "We’re always here to assist you.",
          "translations": {
            "ko": "언제나 도와드리겠습니다.",
            "zh": "我们始终在这里为您提供帮助。",
            "ja": "いつでもお手伝いします。",
            "vi": "Chúng tôi luôn sẵn sàng hỗ trợ bạn.",
            "en": "We’re always here to assist you."
          }
        },
        {
          "role": "user",
          "text": "You’ve been great. Thank you again.",
          "translations": {
            "ko": "정말 잘해주셨습니다. 다시 한번 감사드립니다.",
            "zh": "您做得很好。再次感谢您。",
            "ja": "大変お世話になりました。再度、ありがとうございます。",
            "vi": "Bạn đã làm tốt lắm. Cảm ơn bạn một lần nữa.",
            "en": "You’ve been great. Thank you again."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Dealing with lost travel documents abroad",
        "ko": "해외에서 여행 문서를 잃어버렸을 때 대처하기",
        "zh": "在国外处理丢失的旅行文件",
        "ja": "海外での旅行書類の紛失対応",
        "vi": "Xử lý tài liệu du lịch bị mất ở nước ngoài"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Good evening, how can I help you?",
          "translations": {
            "ko": "안녕하십니까, 어떻게 도와드릴까요?",
            "zh": "晚上好，我能帮您做什么？",
            "ja": "こんばんは、何かお手伝いできることはありますか？",
            "vi": "Chào buổi tối, tôi có thể giúp gì cho bạn?",
            "en": "Good evening, how can I help you?"
          }
        },
        {
          "role": "user",
          "text": "I need to rebook several international flights due to an emergency.",
          "translations": {
            "ko": "긴급 상황으로 여러 국제선 항공편을 재예약해야 합니다.",
            "zh": "我需要因紧急情况重新预订几个国际航班。",
            "ja": "緊急事態のため、いくつかの国際便を再予約する必要があります。",
            "vi": "Tôi cần đặt lại một số chuyến bay quốc tế do một tình huống khẩn cấp.",
            "en": "I need to rebook several international flights due to an emergency."
          }
        },
        {
          "role": "ai",
          "text": "I’m sorry to hear that. Which destinations are involved?",
          "translations": {
            "ko": "그런 일이 있으셨군요. 어떤 목적지가 관련되어 있나요?",
            "zh": "很抱歉听到这个。涉及哪些目的地？",
            "ja": "それは大変でしたね。どの目的地が関係していますか？",
            "vi": "Tôi rất tiếc khi nghe điều đó. Những điểm đến nào liên quan?",
            "en": "I’m sorry to hear that. Which destinations are involved?"
          }
        },
        {
          "role": "user",
          "text": "Tokyo, Paris, and New York.",
          "translations": {
            "ko": "도쿄, 파리, 그리고 뉴욕입니다.",
            "zh": "东京，巴黎和纽约。",
            "ja": "東京、パリ、そしてニューヨークです。",
            "vi": "Tokyo, Paris và New York.",
            "en": "Tokyo, Paris, and New York."
          }
        },
        {
          "role": "ai",
          "text": "Let me check availability... We can reroute Tokyo via Seoul.",
          "translations": {
            "ko": "좌석 확인해보겠습니다... 도쿄는 서울을 경유할 수 있습니다.",
            "zh": "让我查看一下可用性...我们可以将东京的航班改道首尔。",
            "ja": "空席を確認します... 東京はソウル経由で再ルートできます。",
            "vi": "Hãy để tôi kiểm tra sự còn chỗ... Chúng ta có thể đổi hướng Tokyo qua Seoul.",
            "en": "Let me check availability... We can reroute Tokyo via Seoul."
          }
        },
        {
          "role": "user",
          "text": "That’s fine. What about the Paris leg?",
          "translations": {
            "ko": "괜찮습니다. 그럼 파리행은요?",
            "zh": "那没问题。那巴黎的航班呢？",
            "ja": "それで大丈夫です。パリ行きはどうですか？",
            "vi": "Được rồi. Còn chuyến bay đến Paris thì sao?",
            "en": "That’s fine. What about the Paris leg?"
          }
        },
        {
          "role": "ai",
          "text": "There’s a flight tomorrow morning at 8:15 AM with one stop.",
          "translations": {
            "ko": "내일 아침 8시 15분에 한 번의 경유가 있는 비행이 있습니다.",
            "zh": "明天早上8:15有一班中转航班。",
            "ja": "明日の朝8時15分に1回の停止を伴うフライトがあります。",
            "vi": "Có một chuyến bay vào sáng mai lúc 8:15 với một điểm dừng.",
            "en": "There’s a flight tomorrow morning at 8:15 AM with one stop."
          }
        },
        {
          "role": "user",
          "text": "Book it, please. And the New York flight?",
          "translations": {
            "ko": "예약해 주세요. 그럼 뉴욕행은요?",
            "zh": "请预订。那纽约的航班呢？",
            "ja": "予約してください。ニューヨーク行きのフライトは？",
            "vi": "Hãy đặt cho tôi. Còn chuyến bay đến New York?",
            "en": "Book it, please. And the New York flight?"
          }
        },
        {
          "role": "ai",
          "text": "I can put you on standby for this evening or confirm for tomorrow.",
          "translations": {
            "ko": "오늘 저녁 대기 명단에 올려드리거나 내일 확정할 수 있습니다.",
            "zh": "我可以让您今晚候补，或者确认明天的航班。",
            "ja": "今晩の待機リストに入れるか、明日の確定席を取ることができます。",
            "vi": "Tôi có thể cho bạn chờ cho tối nay hoặc xác nhận cho ngày mai.",
            "en": "I can put you on standby for this evening or confirm for tomorrow."
          }
        },
        {
          "role": "user",
          "text": "Confirm for tomorrow.",
          "translations": {
            "ko": "내일로 확정해주세요.",
            "zh": "确认明天的。",
            "ja": "明日の確定席をお願いします。",
            "vi": "Xác nhận cho ngày mai.",
            "en": "Confirm for tomorrow."
          }
        },
        {
          "role": "ai",
          "text": "All set. You’ll receive new confirmations via email.",
          "translations": {
            "ko": "모두 준비되었습니다. 새로운 확인 정보를 이메일로 보내드리겠습니다.",
            "zh": "都安排好了。您将通过电子邮件收到新的确认信息。",
            "ja": "手配完了です。新しい確認情報はメールで送られます。",
            "vi": "Tất cả đã sẵn sàng. Bạn sẽ nhận được xác nhận mới qua email.",
            "en": "All set. You’ll receive new confirmations via email."
          }
        },
        {
          "role": "user",
          "text": "Will I need to pay additional fees?",
          "translations": {
            "ko": "추가 요금을 내야 하나요?",
            "zh": "我需要支付额外费用吗？",
            "ja": "追加料金は必要ですか？",
            "vi": "Tôi có cần phải trả thêm phí không?",
            "en": "Will I need to pay additional fees?"
          }
        },
        {
          "role": "ai",
          "text": "Due to the emergency, we’re waiving the rebooking charges.",
          "translations": {
            "ko": "긴급 상황으로 인해 재예약 수수료를 면제해드립니다.",
            "zh": "由于紧急情况，我们将免除重新预订的费用。",
            "ja": "緊急事態のため、再予約料は免除されます。",
            "vi": "Do tình huống khẩn cấp, chúng tôi sẽ miễn phí đặt lại.",
            "en": "Due to the emergency, we’re waiving the rebooking charges."
          }
        },
        {
          "role": "user",
          "text": "I really appreciate that.",
          "translations": {
            "ko": "정말 감사합니다.",
            "zh": "我真的很感激。",
            "ja": "本当に助かります。",
            "vi": "Tôi thực sự biết ơn điều đó.",
            "en": "I really appreciate that."
          }
        },
        {
          "role": "ai",
          "text": "Do you need assistance with accommodations tonight?",
          "translations": {
            "ko": "오늘 밤 숙박에 도움이 필요하신가요?",
            "zh": "您今晚需要住宿帮助吗？",
            "ja": "今夜の宿泊施設の手配が必要ですか？",
            "vi": "Bạn có cần hỗ trợ về chỗ ở tối nay không?",
            "en": "Do you need assistance with accommodations tonight?"
          }
        },
        {
          "role": "user",
          "text": "Yes, please. I’d prefer something near the airport.",
          "translations": {
            "ko": "네, 부탁드립니다. 공항 근처가 좋겠습니다.",
            "zh": "是的，请。我希望选择靠近机场的地方。",
            "ja": "はい、お願いします。空港近くがいいです。",
            "vi": "Vâng, làm ơn. Tôi muốn một nơi gần sân bay.",
            "en": "Yes, please. I’d prefer something near the airport."
          }
        },
        {
          "role": "ai",
          "text": "I’ll arrange that and send you details shortly.",
          "translations": {
            "ko": "그럼 준비해드리고 곧 자세한 정보를 보내드리겠습니다.",
            "zh": "我会安排的，并尽快给您发送详细信息。",
            "ja": "手配しますので、詳細は後ほどお送りします。",
            "vi": "Tôi sẽ sắp xếp và gửi cho bạn chi tiết ngay.",
            "en": "I’ll arrange that and send you details shortly."
          }
        },
        {
          "role": "user",
          "text": "Thanks for your help in this situation.",
          "translations": {
            "ko": "이런 상황에서 도와주셔서 감사합니다.",
            "zh": "感谢您在这种情况下的帮助。",
            "ja": "この状況でのご協力、ありがとうございます。",
            "vi": "Cảm ơn bạn đã giúp đỡ trong tình huống này.",
            "en": "Thanks for your help in this situation."
          }
        },
        {
          "role": "ai",
          "text": "We’re always here to assist you.",
          "translations": {
            "ko": "언제나 도와드리겠습니다.",
            "zh": "我们始终在这里为您提供帮助。",
            "ja": "いつでもお手伝いします。",
            "vi": "Chúng tôi luôn sẵn sàng hỗ trợ bạn.",
            "en": "We’re always here to assist you."
          }
        },
        {
          "role": "user",
          "text": "You’ve been great. Thank you again.",
          "translations": {
            "ko": "정말 잘해주셨습니다. 다시 한번 감사드립니다.",
            "zh": "您做得很好。再次感谢您。",
            "ja": "大変お世話になりました。再度、ありがとうございます。",
            "vi": "Bạn đã làm tốt lắm. Cảm ơn bạn một lần nữa.",
            "en": "You’ve been great. Thank you again."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Negotiating with local authorities during travel dispute",
        "ko": "여행 중 분쟁 시 현지 당국과 협상하기",
        "zh": "在旅行争议中与当地当局协商",
        "ja": "旅行中の紛争での地元当局との交渉",
        "vi": "Đàm phán với cơ quan chức năng địa phương trong tranh chấp du lịch"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Good evening, how can I help you?",
          "translations": {
            "ko": "안녕하십니까, 어떻게 도와드릴까요?",
            "zh": "晚上好，我能帮您做什么？",
            "ja": "こんばんは、何かお手伝いできることはありますか？",
            "vi": "Chào buổi tối, tôi có thể giúp gì cho bạn?",
            "en": "Good evening, how can I help you?"
          }
        },
        {
          "role": "user",
          "text": "I need to rebook several international flights due to an emergency.",
          "translations": {
            "ko": "긴급 상황으로 여러 국제선 항공편을 재예약해야 합니다.",
            "zh": "我需要因紧急情况重新预订几个国际航班。",
            "ja": "緊急事態のため、いくつかの国際便を再予約する必要があります。",
            "vi": "Tôi cần đặt lại một số chuyến bay quốc tế do một tình huống khẩn cấp.",
            "en": "I need to rebook several international flights due to an emergency."
          }
        },
        {
          "role": "ai",
          "text": "I’m sorry to hear that. Which destinations are involved?",
          "translations": {
            "ko": "그런 일이 있으셨군요. 어떤 목적지가 관련되어 있나요?",
            "zh": "很抱歉听到这个。涉及哪些目的地？",
            "ja": "それは大変でしたね。どの目的地が関係していますか？",
            "vi": "Tôi rất tiếc khi nghe điều đó. Những điểm đến nào liên quan?",
            "en": "I’m sorry to hear that. Which destinations are involved?"
          }
        },
        {
          "role": "user",
          "text": "Tokyo, Paris, and New York.",
          "translations": {
            "ko": "도쿄, 파리, 그리고 뉴욕입니다.",
            "zh": "东京，巴黎和纽约。",
            "ja": "東京、パリ、そしてニューヨークです。",
            "vi": "Tokyo, Paris và New York.",
            "en": "Tokyo, Paris, and New York."
          }
        },
        {
          "role": "ai",
          "text": "Let me check availability... We can reroute Tokyo via Seoul.",
          "translations": {
            "ko": "좌석 확인해보겠습니다... 도쿄는 서울을 경유할 수 있습니다.",
            "zh": "让我查看一下可用性...我们可以将东京的航班改道首尔。",
            "ja": "空席を確認します... 東京はソウル経由で再ルートできます。",
            "vi": "Hãy để tôi kiểm tra sự còn chỗ... Chúng ta có thể đổi hướng Tokyo qua Seoul.",
            "en": "Let me check availability... We can reroute Tokyo via Seoul."
          }
        },
        {
          "role": "user",
          "text": "That’s fine. What about the Paris leg?",
          "translations": {
            "ko": "괜찮습니다. 그럼 파리행은요?",
            "zh": "那没问题。那巴黎的航班呢？",
            "ja": "それで大丈夫です。パリ行きはどうですか？",
            "vi": "Được rồi. Còn chuyến bay đến Paris thì sao?",
            "en": "That’s fine. What about the Paris leg?"
          }
        },
        {
          "role": "ai",
          "text": "There’s a flight tomorrow morning at 8:15 AM with one stop.",
          "translations": {
            "ko": "내일 아침 8시 15분에 한 번의 경유가 있는 비행이 있습니다.",
            "zh": "明天早上8:15有一班中转航班。",
            "ja": "明日の朝8時15分に1回の停止を伴うフライトがあります。",
            "vi": "Có một chuyến bay vào sáng mai lúc 8:15 với một điểm dừng.",
            "en": "There’s a flight tomorrow morning at 8:15 AM with one stop."
          }
        },
        {
          "role": "user",
          "text": "Book it, please. And the New York flight?",
          "translations": {
            "ko": "예약해 주세요. 그럼 뉴욕행은요?",
            "zh": "请预订。那纽约的航班呢？",
            "ja": "予約してください。ニューヨーク行きのフライトは？",
            "vi": "Hãy đặt cho tôi. Còn chuyến bay đến New York?",
            "en": "Book it, please. And the New York flight?"
          }
        },
        {
          "role": "ai",
          "text": "I can put you on standby for this evening or confirm for tomorrow.",
          "translations": {
            "ko": "오늘 저녁 대기 명단에 올려드리거나 내일 확정할 수 있습니다.",
            "zh": "我可以让您今晚候补，或者确认明天的航班。",
            "ja": "今晩の待機リストに入れるか、明日の確定席を取ることができます。",
            "vi": "Tôi có thể cho bạn chờ cho tối nay hoặc xác nhận cho ngày mai.",
            "en": "I can put you on standby for this evening or confirm for tomorrow."
          }
        },
        {
          "role": "user",
          "text": "Confirm for tomorrow.",
          "translations": {
            "ko": "내일로 확정해주세요.",
            "zh": "确认明天的。",
            "ja": "明日の確定席をお願いします。",
            "vi": "Xác nhận cho ngày mai.",
            "en": "Confirm for tomorrow."
          }
        },
        {
          "role": "ai",
          "text": "All set. You’ll receive new confirmations via email.",
          "translations": {
            "ko": "모두 준비되었습니다. 새로운 확인 정보를 이메일로 보내드리겠습니다.",
            "zh": "都安排好了。您将通过电子邮件收到新的确认信息。",
            "ja": "手配完了です。新しい確認情報はメールで送られます。",
            "vi": "Tất cả đã sẵn sàng. Bạn sẽ nhận được xác nhận mới qua email.",
            "en": "All set. You’ll receive new confirmations via email."
          }
        },
        {
          "role": "user",
          "text": "Will I need to pay additional fees?",
          "translations": {
            "ko": "추가 요금을 내야 하나요?",
            "zh": "我需要支付额外费用吗？",
            "ja": "追加料金は必要ですか？",
            "vi": "Tôi có cần phải trả thêm phí không?",
            "en": "Will I need to pay additional fees?"
          }
        },
        {
          "role": "ai",
          "text": "Due to the emergency, we’re waiving the rebooking charges.",
          "translations": {
            "ko": "긴급 상황으로 인해 재예약 수수료를 면제해드립니다.",
            "zh": "由于紧急情况，我们将免除重新预订的费用。",
            "ja": "緊急事態のため、再予約料は免除されます。",
            "vi": "Do tình huống khẩn cấp, chúng tôi sẽ miễn phí đặt lại.",
            "en": "Due to the emergency, we’re waiving the rebooking charges."
          }
        },
        {
          "role": "user",
          "text": "I really appreciate that.",
          "translations": {
            "ko": "정말 감사합니다.",
            "zh": "我真的很感激。",
            "ja": "本当に助かります。",
            "vi": "Tôi thực sự biết ơn điều đó.",
            "en": "I really appreciate that."
          }
        },
        {
          "role": "ai",
          "text": "Do you need assistance with accommodations tonight?",
          "translations": {
            "ko": "오늘 밤 숙박에 도움이 필요하신가요?",
            "zh": "您今晚需要住宿帮助吗？",
            "ja": "今夜の宿泊施設の手配が必要ですか？",
            "vi": "Bạn có cần hỗ trợ về chỗ ở tối nay không?",
            "en": "Do you need assistance with accommodations tonight?"
          }
        },
        {
          "role": "user",
          "text": "Yes, please. I’d prefer something near the airport.",
          "translations": {
            "ko": "네, 부탁드립니다. 공항 근처가 좋겠습니다.",
            "zh": "是的，请。我希望选择靠近机场的地方。",
            "ja": "はい、お願いします。空港近くがいいです。",
            "vi": "Vâng, làm ơn. Tôi muốn một nơi gần sân bay.",
            "en": "Yes, please. I’d prefer something near the airport."
          }
        },
        {
          "role": "ai",
          "text": "I’ll arrange that and send you details shortly.",
          "translations": {
            "ko": "그럼 준비해드리고 곧 자세한 정보를 보내드리겠습니다.",
            "zh": "我会安排的，并尽快给您发送详细信息。",
            "ja": "手配しますので、詳細は後ほどお送りします。",
            "vi": "Tôi sẽ sắp xếp và gửi cho bạn chi tiết ngay.",
            "en": "I’ll arrange that and send you details shortly."
          }
        },
        {
          "role": "user",
          "text": "Thanks for your help in this situation.",
          "translations": {
            "ko": "이런 상황에서 도와주셔서 감사합니다.",
            "zh": "感谢您在这种情况下的帮助。",
            "ja": "この状況でのご協力、ありがとうございます。",
            "vi": "Cảm ơn bạn đã giúp đỡ trong tình huống này.",
            "en": "Thanks for your help in this situation."
          }
        },
        {
          "role": "ai",
          "text": "We’re always here to assist you.",
          "translations": {
            "ko": "언제나 도와드리겠습니다.",
            "zh": "我们始终在这里为您提供帮助。",
            "ja": "いつでもお手伝いします。",
            "vi": "Chúng tôi luôn sẵn sàng hỗ trợ bạn.",
            "en": "We’re always here to assist you."
          }
        },
        {
          "role": "user",
          "text": "You’ve been great. Thank you again.",
          "translations": {
            "ko": "정말 잘해주셨습니다. 다시 한번 감사드립니다.",
            "zh": "您做得很好。再次感谢您。",
            "ja": "大変お世話になりました。再度、ありがとうございます。",
            "vi": "Bạn đã làm tốt lắm. Cảm ơn bạn một lần nữa.",
            "en": "You’ve been great. Thank you again."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Coordinating multilingual travel arrangements",
        "ko": "다국어 여행 조정",
        "zh": "协调多语种的旅行安排",
        "ja": "多言語の旅行手配の調整",
        "vi": "Phối hợp các yêu cầu du lịch đa ngôn ngữ"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Good evening, how can I help you?",
          "translations": {
            "ko": "안녕하십니까, 어떻게 도와드릴까요?",
            "zh": "晚上好，我能帮您做什么？",
            "ja": "こんばんは、何かお手伝いできることはありますか？",
            "vi": "Chào buổi tối, tôi có thể giúp gì cho bạn?",
            "en": "Good evening, how can I help you?"
          }
        },
        {
          "role": "user",
          "text": "I need to rebook several international flights due to an emergency.",
          "translations": {
            "ko": "긴급 상황으로 여러 국제선 항공편을 재예약해야 합니다.",
            "zh": "我需要因紧急情况重新预订几个国际航班。",
            "ja": "緊急事態のため、いくつかの国際便を再予約する必要があります。",
            "vi": "Tôi cần đặt lại một số chuyến bay quốc tế do một tình huống khẩn cấp.",
            "en": "I need to rebook several international flights due to an emergency."
          }
        },
        {
          "role": "ai",
          "text": "I’m sorry to hear that. Which destinations are involved?",
          "translations": {
            "ko": "그런 일이 있으셨군요. 어떤 목적지가 관련되어 있나요?",
            "zh": "很抱歉听到这个。涉及哪些目的地？",
            "ja": "それは大変でしたね。どの目的地が関係していますか？",
            "vi": "Tôi rất tiếc khi nghe điều đó. Những điểm đến nào liên quan?",
            "en": "I’m sorry to hear that. Which destinations are involved?"
          }
        },
        {
          "role": "user",
          "text": "Tokyo, Paris, and New York.",
          "translations": {
            "ko": "도쿄, 파리, 그리고 뉴욕입니다.",
            "zh": "东京，巴黎和纽约。",
            "ja": "東京、パリ、そしてニューヨークです。",
            "vi": "Tokyo, Paris và New York.",
            "en": "Tokyo, Paris, and New York."
          }
        },
        {
          "role": "ai",
          "text": "Let me check availability... We can reroute Tokyo via Seoul.",
          "translations": {
            "ko": "좌석 확인해보겠습니다... 도쿄는 서울을 경유할 수 있습니다.",
            "zh": "让我查看一下可用性...我们可以将东京的航班改道首尔。",
            "ja": "空席を確認します... 東京はソウル経由で再ルートできます。",
            "vi": "Hãy để tôi kiểm tra sự còn chỗ... Chúng ta có thể đổi hướng Tokyo qua Seoul.",
            "en": "Let me check availability... We can reroute Tokyo via Seoul."
          }
        },
        {
          "role": "user",
          "text": "That’s fine. What about the Paris leg?",
          "translations": {
            "ko": "괜찮습니다. 그럼 파리행은요?",
            "zh": "那没问题。那巴黎的航班呢？",
            "ja": "それで大丈夫です。パリ行きはどうですか？",
            "vi": "Được rồi. Còn chuyến bay đến Paris thì sao?",
            "en": "That’s fine. What about the Paris leg?"
          }
        },
        {
          "role": "ai",
          "text": "There’s a flight tomorrow morning at 8:15 AM with one stop.",
          "translations": {
            "ko": "내일 아침 8시 15분에 한 번의 경유가 있는 비행이 있습니다.",
            "zh": "明天早上8:15有一班中转航班。",
            "ja": "明日の朝8時15分に1回の停止を伴うフライトがあります。",
            "vi": "Có một chuyến bay vào sáng mai lúc 8:15 với một điểm dừng.",
            "en": "There’s a flight tomorrow morning at 8:15 AM with one stop."
          }
        },
        {
          "role": "user",
          "text": "Book it, please. And the New York flight?",
          "translations": {
            "ko": "예약해 주세요. 그럼 뉴욕행은요?",
            "zh": "请预订。那纽约的航班呢？",
            "ja": "予約してください。ニューヨーク行きのフライトは？",
            "vi": "Hãy đặt cho tôi. Còn chuyến bay đến New York?",
            "en": "Book it, please. And the New York flight?"
          }
        },
        {
          "role": "ai",
          "text": "I can put you on standby for this evening or confirm for tomorrow.",
          "translations": {
            "ko": "오늘 저녁 대기 명단에 올려드리거나 내일 확정할 수 있습니다.",
            "zh": "我可以让您今晚候补，或者确认明天的航班。",
            "ja": "今晩の待機リストに入れるか、明日の確定席を取ることができます。",
            "vi": "Tôi có thể cho bạn chờ cho tối nay hoặc xác nhận cho ngày mai.",
            "en": "I can put you on standby for this evening or confirm for tomorrow."
          }
        },
        {
          "role": "user",
          "text": "Confirm for tomorrow.",
          "translations": {
            "ko": "내일로 확정해주세요.",
            "zh": "确认明天的。",
            "ja": "明日の確定席をお願いします。",
            "vi": "Xác nhận cho ngày mai.",
            "en": "Confirm for tomorrow."
          }
        },
        {
          "role": "ai",
          "text": "All set. You’ll receive new confirmations via email.",
          "translations": {
            "ko": "모두 준비되었습니다. 새로운 확인 정보를 이메일로 보내드리겠습니다.",
            "zh": "都安排好了。您将通过电子邮件收到新的确认信息。",
            "ja": "手配完了です。新しい確認情報はメールで送られます。",
            "vi": "Tất cả đã sẵn sàng. Bạn sẽ nhận được xác nhận mới qua email.",
            "en": "All set. You’ll receive new confirmations via email."
          }
        },
        {
          "role": "user",
          "text": "Will I need to pay additional fees?",
          "translations": {
            "ko": "추가 요금을 내야 하나요?",
            "zh": "我需要支付额外费用吗？",
            "ja": "追加料金は必要ですか？",
            "vi": "Tôi có cần phải trả thêm phí không?",
            "en": "Will I need to pay additional fees?"
          }
        },
        {
          "role": "ai",
          "text": "Due to the emergency, we’re waiving the rebooking charges.",
          "translations": {
            "ko": "긴급 상황으로 인해 재예약 수수료를 면제해드립니다.",
            "zh": "由于紧急情况，我们将免除重新预订的费用。",
            "ja": "緊急事態のため、再予約料は免除されます。",
            "vi": "Do tình huống khẩn cấp, chúng tôi sẽ miễn phí đặt lại.",
            "en": "Due to the emergency, we’re waiving the rebooking charges."
          }
        },
        {
          "role": "user",
          "text": "I really appreciate that.",
          "translations": {
            "ko": "정말 감사합니다.",
            "zh": "我真的很感激。",
            "ja": "本当に助かります。",
            "vi": "Tôi thực sự biết ơn điều đó.",
            "en": "I really appreciate that."
          }
        },
        {
          "role": "ai",
          "text": "Do you need assistance with accommodations tonight?",
          "translations": {
            "ko": "오늘 밤 숙박에 도움이 필요하신가요?",
            "zh": "您今晚需要住宿帮助吗？",
            "ja": "今夜の宿泊施設の手配が必要ですか？",
            "vi": "Bạn có cần hỗ trợ về chỗ ở tối nay không?",
            "en": "Do you need assistance with accommodations tonight?"
          }
        },
        {
          "role": "user",
          "text": "Yes, please. I’d prefer something near the airport.",
          "translations": {
            "ko": "네, 부탁드립니다. 공항 근처가 좋겠습니다.",
            "zh": "是的，请。我希望选择靠近机场的地方。",
            "ja": "はい、お願いします。空港近くがいいです。",
            "vi": "Vâng, làm ơn. Tôi muốn một nơi gần sân bay.",
            "en": "Yes, please. I’d prefer something near the airport."
          }
        },
        {
          "role": "ai",
          "text": "I’ll arrange that and send you details shortly.",
          "translations": {
            "ko": "그럼 준비해드리고 곧 자세한 정보를 보내드리겠습니다.",
            "zh": "我会安排的，并尽快给您发送详细信息。",
            "ja": "手配しますので、詳細は後ほどお送りします。",
            "vi": "Tôi sẽ sắp xếp và gửi cho bạn chi tiết ngay.",
            "en": "I’ll arrange that and send you details shortly."
          }
        },
        {
          "role": "user",
          "text": "Thanks for your help in this situation.",
          "translations": {
            "ko": "이런 상황에서 도와주셔서 감사합니다.",
            "zh": "感谢您在这种情况下的帮助。",
            "ja": "この状況でのご協力、ありがとうございます。",
            "vi": "Cảm ơn bạn đã giúp đỡ trong tình huống này.",
            "en": "Thanks for your help in this situation."
          }
        },
        {
          "role": "ai",
          "text": "We’re always here to assist you.",
          "translations": {
            "ko": "언제나 도와드리겠습니다.",
            "zh": "我们始终在这里为您提供帮助。",
            "ja": "いつでもお手伝いします。",
            "vi": "Chúng tôi luôn sẵn sàng hỗ trợ bạn.",
            "en": "We’re always here to assist you."
          }
        },
        {
          "role": "user",
          "text": "You’ve been great. Thank you again.",
          "translations": {
            "ko": "정말 잘해주셨습니다. 다시 한번 감사드립니다.",
            "zh": "您做得很好。再次感谢您。",
            "ja": "大変お世話になりました。再度、ありがとうございます。",
            "vi": "Bạn đã làm tốt lắm. Cảm ơn bạn một lần nữa.",
            "en": "You’ve been great. Thank you again."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Explaining complex travel insurance claims",
        "ko": "복잡한 여행 보험 청구 설명",
        "zh": "解释复杂的旅行保险索赔",
        "ja": "複雑な旅行保険請求の説明",
        "vi": "Giải thích yêu cầu bảo hiểm du lịch phức tạp"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Good evening, how can I help you?",
          "translations": {
            "ko": "안녕하십니까, 어떻게 도와드릴까요?",
            "zh": "晚上好，我能帮您做什么？",
            "ja": "こんばんは、何かお手伝いできることはありますか？",
            "vi": "Chào buổi tối, tôi có thể giúp gì cho bạn?",
            "en": "Good evening, how can I help you?"
          }
        },
        {
          "role": "user",
          "text": "I need to rebook several international flights due to an emergency.",
          "translations": {
            "ko": "긴급 상황으로 여러 국제선 항공편을 재예약해야 합니다.",
            "zh": "我需要因紧急情况重新预订几个国际航班。",
            "ja": "緊急事態のため、いくつかの国際便を再予約する必要があります。",
            "vi": "Tôi cần đặt lại một số chuyến bay quốc tế do một tình huống khẩn cấp.",
            "en": "I need to rebook several international flights due to an emergency."
          }
        },
        {
          "role": "ai",
          "text": "I’m sorry to hear that. Which destinations are involved?",
          "translations": {
            "ko": "그런 일이 있으셨군요. 어떤 목적지가 관련되어 있나요?",
            "zh": "很抱歉听到这个。涉及哪些目的地？",
            "ja": "それは大変でしたね。どの目的地が関係していますか？",
            "vi": "Tôi rất tiếc khi nghe điều đó. Những điểm đến nào liên quan?",
            "en": "I’m sorry to hear that. Which destinations are involved?"
          }
        },
        {
          "role": "user",
          "text": "Tokyo, Paris, and New York.",
          "translations": {
            "ko": "도쿄, 파리, 그리고 뉴욕입니다.",
            "zh": "东京，巴黎和纽约。",
            "ja": "東京、パリ、そしてニューヨークです。",
            "vi": "Tokyo, Paris và New York.",
            "en": "Tokyo, Paris, and New York."
          }
        },
        {
          "role": "ai",
          "text": "Let me check availability... We can reroute Tokyo via Seoul.",
          "translations": {
            "ko": "좌석 확인해보겠습니다... 도쿄는 서울을 경유할 수 있습니다.",
            "zh": "让我查看一下可用性...我们可以将东京的航班改道首尔。",
            "ja": "空席を確認します... 東京はソウル経由で再ルートできます。",
            "vi": "Hãy để tôi kiểm tra sự còn chỗ... Chúng ta có thể đổi hướng Tokyo qua Seoul.",
            "en": "Let me check availability... We can reroute Tokyo via Seoul."
          }
        },
        {
          "role": "user",
          "text": "That’s fine. What about the Paris leg?",
          "translations": {
            "ko": "괜찮습니다. 그럼 파리행은요?",
            "zh": "那没问题。那巴黎的航班呢？",
            "ja": "それで大丈夫です。パリ行きはどうですか？",
            "vi": "Được rồi. Còn chuyến bay đến Paris thì sao?",
            "en": "That’s fine. What about the Paris leg?"
          }
        },
        {
          "role": "ai",
          "text": "There’s a flight tomorrow morning at 8:15 AM with one stop.",
          "translations": {
            "ko": "내일 아침 8시 15분에 한 번의 경유가 있는 비행이 있습니다.",
            "zh": "明天早上8:15有一班中转航班。",
            "ja": "明日の朝8時15分に1回の停止を伴うフライトがあります。",
            "vi": "Có một chuyến bay vào sáng mai lúc 8:15 với một điểm dừng.",
            "en": "There’s a flight tomorrow morning at 8:15 AM with one stop."
          }
        },
        {
          "role": "user",
          "text": "Book it, please. And the New York flight?",
          "translations": {
            "ko": "예약해 주세요. 그럼 뉴욕행은요?",
            "zh": "请预订。那纽约的航班呢？",
            "ja": "予約してください。ニューヨーク行きのフライトは？",
            "vi": "Hãy đặt cho tôi. Còn chuyến bay đến New York?",
            "en": "Book it, please. And the New York flight?"
          }
        },
        {
          "role": "ai",
          "text": "I can put you on standby for this evening or confirm for tomorrow.",
          "translations": {
            "ko": "오늘 저녁 대기 명단에 올려드리거나 내일 확정할 수 있습니다.",
            "zh": "我可以让您今晚候补，或者确认明天的航班。",
            "ja": "今晩の待機リストに入れるか、明日の確定席を取ることができます。",
            "vi": "Tôi có thể cho bạn chờ cho tối nay hoặc xác nhận cho ngày mai.",
            "en": "I can put you on standby for this evening or confirm for tomorrow."
          }
        },
        {
          "role": "user",
          "text": "Confirm for tomorrow.",
          "translations": {
            "ko": "내일로 확정해주세요.",
            "zh": "确认明天的。",
            "ja": "明日の確定席をお願いします。",
            "vi": "Xác nhận cho ngày mai.",
            "en": "Confirm for tomorrow."
          }
        },
        {
          "role": "ai",
          "text": "All set. You’ll receive new confirmations via email.",
          "translations": {
            "ko": "모두 준비되었습니다. 새로운 확인 정보를 이메일로 보내드리겠습니다.",
            "zh": "都安排好了。您将通过电子邮件收到新的确认信息。",
            "ja": "手配完了です。新しい確認情報はメールで送られます。",
            "vi": "Tất cả đã sẵn sàng. Bạn sẽ nhận được xác nhận mới qua email.",
            "en": "All set. You’ll receive new confirmations via email."
          }
        },
        {
          "role": "user",
          "text": "Will I need to pay additional fees?",
          "translations": {
            "ko": "추가 요금을 내야 하나요?",
            "zh": "我需要支付额外费用吗？",
            "ja": "追加料金は必要ですか？",
            "vi": "Tôi có cần phải trả thêm phí không?",
            "en": "Will I need to pay additional fees?"
          }
        },
        {
          "role": "ai",
          "text": "Due to the emergency, we’re waiving the rebooking charges.",
          "translations": {
            "ko": "긴급 상황으로 인해 재예약 수수료를 면제해드립니다.",
            "zh": "由于紧急情况，我们将免除重新预订的费用。",
            "ja": "緊急事態のため、再予約料は免除されます。",
            "vi": "Do tình huống khẩn cấp, chúng tôi sẽ miễn phí đặt lại.",
            "en": "Due to the emergency, we’re waiving the rebooking charges."
          }
        },
        {
          "role": "user",
          "text": "I really appreciate that.",
          "translations": {
            "ko": "정말 감사합니다.",
            "zh": "我真的很感激。",
            "ja": "本当に助かります。",
            "vi": "Tôi thực sự biết ơn điều đó.",
            "en": "I really appreciate that."
          }
        },
        {
          "role": "ai",
          "text": "Do you need assistance with accommodations tonight?",
          "translations": {
            "ko": "오늘 밤 숙박에 도움이 필요하신가요?",
            "zh": "您今晚需要住宿帮助吗？",
            "ja": "今夜の宿泊施設の手配が必要ですか？",
            "vi": "Bạn có cần hỗ trợ về chỗ ở tối nay không?",
            "en": "Do you need assistance with accommodations tonight?"
          }
        },
        {
          "role": "user",
          "text": "Yes, please. I’d prefer something near the airport.",
          "translations": {
            "ko": "네, 부탁드립니다. 공항 근처가 좋겠습니다.",
            "zh": "是的，请。我希望选择靠近机场的地方。",
            "ja": "はい、お願いします。空港近くがいいです。",
            "vi": "Vâng, làm ơn. Tôi muốn một nơi gần sân bay.",
            "en": "Yes, please. I’d prefer something near the airport."
          }
        },
        {
          "role": "ai",
          "text": "I’ll arrange that and send you details shortly.",
          "translations": {
            "ko": "그럼 준비해드리고 곧 자세한 정보를 보내드리겠습니다.",
            "zh": "我会安排的，并尽快给您发送详细信息。",
            "ja": "手配しますので、詳細は後ほどお送りします。",
            "vi": "Tôi sẽ sắp xếp và gửi cho bạn chi tiết ngay.",
            "en": "I’ll arrange that and send you details shortly."
          }
        },
        {
          "role": "user",
          "text": "Thanks for your help in this situation.",
          "translations": {
            "ko": "이런 상황에서 도와주셔서 감사합니다.",
            "zh": "感谢您在这种情况下的帮助。",
            "ja": "この状況でのご協力、ありがとうございます。",
            "vi": "Cảm ơn bạn đã giúp đỡ trong tình huống này.",
            "en": "Thanks for your help in this situation."
          }
        },
        {
          "role": "ai",
          "text": "We’re always here to assist you.",
          "translations": {
            "ko": "언제나 도와드리겠습니다.",
            "zh": "我们始终在这里为您提供帮助。",
            "ja": "いつでもお手伝いします。",
            "vi": "Chúng tôi luôn sẵn sàng hỗ trợ bạn.",
            "en": "We’re always here to assist you."
          }
        },
        {
          "role": "user",
          "text": "You’ve been great. Thank you again.",
          "translations": {
            "ko": "정말 잘해주셨습니다. 다시 한번 감사드립니다.",
            "zh": "您做得很好。再次感谢您。",
            "ja": "大変お世話になりました。再度、ありがとうございます。",
            "vi": "Bạn đã làm tốt lắm. Cảm ơn bạn một lần nữa.",
            "en": "You’ve been great. Thank you again."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Resolving issues with currency conversion or charges",
        "ko": "환전이나 요금 문제 해결",
        "zh": "解决货币转换或收费问题",
        "ja": "通貨換算や料金の問題の解決",
        "vi": "Giải quyết vấn đề với việc chuyển đổi tiền tệ hoặc phí"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Good evening, how can I help you?",
          "translations": {
            "ko": "안녕하십니까, 어떻게 도와드릴까요?",
            "zh": "晚上好，我能帮您做什么？",
            "ja": "こんばんは、何かお手伝いできることはありますか？",
            "vi": "Chào buổi tối, tôi có thể giúp gì cho bạn?",
            "en": "Good evening, how can I help you?"
          }
        },
        {
          "role": "user",
          "text": "I need to rebook several international flights due to an emergency.",
          "translations": {
            "ko": "긴급 상황으로 여러 국제선 항공편을 재예약해야 합니다.",
            "zh": "我需要因紧急情况重新预订几个国际航班。",
            "ja": "緊急事態のため、いくつかの国際便を再予約する必要があります。",
            "vi": "Tôi cần đặt lại một số chuyến bay quốc tế do một tình huống khẩn cấp.",
            "en": "I need to rebook several international flights due to an emergency."
          }
        },
        {
          "role": "ai",
          "text": "I’m sorry to hear that. Which destinations are involved?",
          "translations": {
            "ko": "그런 일이 있으셨군요. 어떤 목적지가 관련되어 있나요?",
            "zh": "很抱歉听到这个。涉及哪些目的地？",
            "ja": "それは大変でしたね。どの目的地が関係していますか？",
            "vi": "Tôi rất tiếc khi nghe điều đó. Những điểm đến nào liên quan?",
            "en": "I’m sorry to hear that. Which destinations are involved?"
          }
        },
        {
          "role": "user",
          "text": "Tokyo, Paris, and New York.",
          "translations": {
            "ko": "도쿄, 파리, 그리고 뉴욕입니다.",
            "zh": "东京，巴黎和纽约。",
            "ja": "東京、パリ、そしてニューヨークです。",
            "vi": "Tokyo, Paris và New York.",
            "en": "Tokyo, Paris, and New York."
          }
        },
        {
          "role": "ai",
          "text": "Let me check availability... We can reroute Tokyo via Seoul.",
          "translations": {
            "ko": "좌석 확인해보겠습니다... 도쿄는 서울을 경유할 수 있습니다.",
            "zh": "让我查看一下可用性...我们可以将东京的航班改道首尔。",
            "ja": "空席を確認します... 東京はソウル経由で再ルートできます。",
            "vi": "Hãy để tôi kiểm tra sự còn chỗ... Chúng ta có thể đổi hướng Tokyo qua Seoul.",
            "en": "Let me check availability... We can reroute Tokyo via Seoul."
          }
        },
        {
          "role": "user",
          "text": "That’s fine. What about the Paris leg?",
          "translations": {
            "ko": "괜찮습니다. 그럼 파리행은요?",
            "zh": "那没问题。那巴黎的航班呢？",
            "ja": "それで大丈夫です。パリ行きはどうですか？",
            "vi": "Được rồi. Còn chuyến bay đến Paris thì sao?",
            "en": "That’s fine. What about the Paris leg?"
          }
        },
        {
          "role": "ai",
          "text": "There’s a flight tomorrow morning at 8:15 AM with one stop.",
          "translations": {
            "ko": "내일 아침 8시 15분에 한 번의 경유가 있는 비행이 있습니다.",
            "zh": "明天早上8:15有一班中转航班。",
            "ja": "明日の朝8時15分に1回の停止を伴うフライトがあります。",
            "vi": "Có một chuyến bay vào sáng mai lúc 8:15 với một điểm dừng.",
            "en": "There’s a flight tomorrow morning at 8:15 AM with one stop."
          }
        },
        {
          "role": "user",
          "text": "Book it, please. And the New York flight?",
          "translations": {
            "ko": "예약해 주세요. 그럼 뉴욕행은요?",
            "zh": "请预订。那纽约的航班呢？",
            "ja": "予約してください。ニューヨーク行きのフライトは？",
            "vi": "Hãy đặt cho tôi. Còn chuyến bay đến New York?",
            "en": "Book it, please. And the New York flight?"
          }
        },
        {
          "role": "ai",
          "text": "I can put you on standby for this evening or confirm for tomorrow.",
          "translations": {
            "ko": "오늘 저녁 대기 명단에 올려드리거나 내일 확정할 수 있습니다.",
            "zh": "我可以让您今晚候补，或者确认明天的航班。",
            "ja": "今晩の待機リストに入れるか、明日の確定席を取ることができます。",
            "vi": "Tôi có thể cho bạn chờ cho tối nay hoặc xác nhận cho ngày mai.",
            "en": "I can put you on standby for this evening or confirm for tomorrow."
          }
        },
        {
          "role": "user",
          "text": "Confirm for tomorrow.",
          "translations": {
            "ko": "내일로 확정해주세요.",
            "zh": "确认明天的。",
            "ja": "明日の確定席をお願いします。",
            "vi": "Xác nhận cho ngày mai.",
            "en": "Confirm for tomorrow."
          }
        },
        {
          "role": "ai",
          "text": "All set. You’ll receive new confirmations via email.",
          "translations": {
            "ko": "모두 준비되었습니다. 새로운 확인 정보를 이메일로 보내드리겠습니다.",
            "zh": "都安排好了。您将通过电子邮件收到新的确认信息。",
            "ja": "手配完了です。新しい確認情報はメールで送られます。",
            "vi": "Tất cả đã sẵn sàng. Bạn sẽ nhận được xác nhận mới qua email.",
            "en": "All set. You’ll receive new confirmations via email."
          }
        },
        {
          "role": "user",
          "text": "Will I need to pay additional fees?",
          "translations": {
            "ko": "추가 요금을 내야 하나요?",
            "zh": "我需要支付额外费用吗？",
            "ja": "追加料金は必要ですか？",
            "vi": "Tôi có cần phải trả thêm phí không?",
            "en": "Will I need to pay additional fees?"
          }
        },
        {
          "role": "ai",
          "text": "Due to the emergency, we’re waiving the rebooking charges.",
          "translations": {
            "ko": "긴급 상황으로 인해 재예약 수수료를 면제해드립니다.",
            "zh": "由于紧急情况，我们将免除重新预订的费用。",
            "ja": "緊急事態のため、再予約料は免除されます。",
            "vi": "Do tình huống khẩn cấp, chúng tôi sẽ miễn phí đặt lại.",
            "en": "Due to the emergency, we’re waiving the rebooking charges."
          }
        },
        {
          "role": "user",
          "text": "I really appreciate that.",
          "translations": {
            "ko": "정말 감사합니다.",
            "zh": "我真的很感激。",
            "ja": "本当に助かります。",
            "vi": "Tôi thực sự biết ơn điều đó.",
            "en": "I really appreciate that."
          }
        },
        {
          "role": "ai",
          "text": "Do you need assistance with accommodations tonight?",
          "translations": {
            "ko": "오늘 밤 숙박에 도움이 필요하신가요?",
            "zh": "您今晚需要住宿帮助吗？",
            "ja": "今夜の宿泊施設の手配が必要ですか？",
            "vi": "Bạn có cần hỗ trợ về chỗ ở tối nay không?",
            "en": "Do you need assistance with accommodations tonight?"
          }
        },
        {
          "role": "user",
          "text": "Yes, please. I’d prefer something near the airport.",
          "translations": {
            "ko": "네, 부탁드립니다. 공항 근처가 좋겠습니다.",
            "zh": "是的，请。我希望选择靠近机场的地方。",
            "ja": "はい、お願いします。空港近くがいいです。",
            "vi": "Vâng, làm ơn. Tôi muốn một nơi gần sân bay.",
            "en": "Yes, please. I’d prefer something near the airport."
          }
        },
        {
          "role": "ai",
          "text": "I’ll arrange that and send you details shortly.",
          "translations": {
            "ko": "그럼 준비해드리고 곧 자세한 정보를 보내드리겠습니다.",
            "zh": "我会安排的，并尽快给您发送详细信息。",
            "ja": "手配しますので、詳細は後ほどお送りします。",
            "vi": "Tôi sẽ sắp xếp và gửi cho bạn chi tiết ngay.",
            "en": "I’ll arrange that and send you details shortly."
          }
        },
        {
          "role": "user",
          "text": "Thanks for your help in this situation.",
          "translations": {
            "ko": "이런 상황에서 도와주셔서 감사합니다.",
            "zh": "感谢您在这种情况下的帮助。",
            "ja": "この状況でのご協力、ありがとうございます。",
            "vi": "Cảm ơn bạn đã giúp đỡ trong tình huống này.",
            "en": "Thanks for your help in this situation."
          }
        },
        {
          "role": "ai",
          "text": "We’re always here to assist you.",
          "translations": {
            "ko": "언제나 도와드리겠습니다.",
            "zh": "我们始终在这里为您提供帮助。",
            "ja": "いつでもお手伝いします。",
            "vi": "Chúng tôi luôn sẵn sàng hỗ trợ bạn.",
            "en": "We’re always here to assist you."
          }
        },
        {
          "role": "user",
          "text": "You’ve been great. Thank you again.",
          "translations": {
            "ko": "정말 잘해주셨습니다. 다시 한번 감사드립니다.",
            "zh": "您做得很好。再次感谢您。",
            "ja": "大変お世話になりました。再度、ありがとうございます。",
            "vi": "Bạn đã làm tốt lắm. Cảm ơn bạn một lần nữa.",
            "en": "You’ve been great. Thank you again."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Giving feedback to a global tour operator",
        "ko": "글로벌 투어 운영자에게 피드백 제공",
        "zh": "给全球旅行运营商提供反馈",
        "ja": "グローバルツアーオペレーターへのフィードバックの提供",
        "vi": "Gửi phản hồi cho nhà điều hành du lịch toàn cầu"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Good evening, how can I help you?",
          "translations": {
            "ko": "안녕하십니까, 어떻게 도와드릴까요?",
            "zh": "晚上好，我能帮您做什么？",
            "ja": "こんばんは、何かお手伝いできることはありますか？",
            "vi": "Chào buổi tối, tôi có thể giúp gì cho bạn?",
            "en": "Good evening, how can I help you?"
          }
        },
        {
          "role": "user",
          "text": "I need to rebook several international flights due to an emergency.",
          "translations": {
            "ko": "긴급 상황으로 여러 국제선 항공편을 재예약해야 합니다.",
            "zh": "我需要因紧急情况重新预订几个国际航班。",
            "ja": "緊急事態のため、いくつかの国際便を再予約する必要があります。",
            "vi": "Tôi cần đặt lại một số chuyến bay quốc tế do một tình huống khẩn cấp.",
            "en": "I need to rebook several international flights due to an emergency."
          }
        },
        {
          "role": "ai",
          "text": "I’m sorry to hear that. Which destinations are involved?",
          "translations": {
            "ko": "그런 일이 있으셨군요. 어떤 목적지가 관련되어 있나요?",
            "zh": "很抱歉听到这个。涉及哪些目的地？",
            "ja": "それは大変でしたね。どの目的地が関係していますか？",
            "vi": "Tôi rất tiếc khi nghe điều đó. Những điểm đến nào liên quan?",
            "en": "I’m sorry to hear that. Which destinations are involved?"
          }
        },
        {
          "role": "user",
          "text": "Tokyo, Paris, and New York.",
          "translations": {
            "ko": "도쿄, 파리, 그리고 뉴욕입니다.",
            "zh": "东京，巴黎和纽约。",
            "ja": "東京、パリ、そしてニューヨークです。",
            "vi": "Tokyo, Paris và New York.",
            "en": "Tokyo, Paris, and New York."
          }
        },
        {
          "role": "ai",
          "text": "Let me check availability... We can reroute Tokyo via Seoul.",
          "translations": {
            "ko": "좌석 확인해보겠습니다... 도쿄는 서울을 경유할 수 있습니다.",
            "zh": "让我查看一下可用性...我们可以将东京的航班改道首尔。",
            "ja": "空席を確認します... 東京はソウル経由で再ルートできます。",
            "vi": "Hãy để tôi kiểm tra sự còn chỗ... Chúng ta có thể đổi hướng Tokyo qua Seoul.",
            "en": "Let me check availability... We can reroute Tokyo via Seoul."
          }
        },
        {
          "role": "user",
          "text": "That’s fine. What about the Paris leg?",
          "translations": {
            "ko": "괜찮습니다. 그럼 파리행은요?",
            "zh": "那没问题。那巴黎的航班呢？",
            "ja": "それで大丈夫です。パリ行きはどうですか？",
            "vi": "Được rồi. Còn chuyến bay đến Paris thì sao?",
            "en": "That’s fine. What about the Paris leg?"
          }
        },
        {
          "role": "ai",
          "text": "There’s a flight tomorrow morning at 8:15 AM with one stop.",
          "translations": {
            "ko": "내일 아침 8시 15분에 한 번의 경유가 있는 비행이 있습니다.",
            "zh": "明天早上8:15有一班中转航班。",
            "ja": "明日の朝8時15分に1回の停止を伴うフライトがあります。",
            "vi": "Có một chuyến bay vào sáng mai lúc 8:15 với một điểm dừng.",
            "en": "There’s a flight tomorrow morning at 8:15 AM with one stop."
          }
        },
        {
          "role": "user",
          "text": "Book it, please. And the New York flight?",
          "translations": {
            "ko": "예약해 주세요. 그럼 뉴욕행은요?",
            "zh": "请预订。那纽约的航班呢？",
            "ja": "予約してください。ニューヨーク行きのフライトは？",
            "vi": "Hãy đặt cho tôi. Còn chuyến bay đến New York?",
            "en": "Book it, please. And the New York flight?"
          }
        },
        {
          "role": "ai",
          "text": "I can put you on standby for this evening or confirm for tomorrow.",
          "translations": {
            "ko": "오늘 저녁 대기 명단에 올려드리거나 내일 확정할 수 있습니다.",
            "zh": "我可以让您今晚候补，或者确认明天的航班。",
            "ja": "今晩の待機リストに入れるか、明日の確定席を取ることができます。",
            "vi": "Tôi có thể cho bạn chờ cho tối nay hoặc xác nhận cho ngày mai.",
            "en": "I can put you on standby for this evening or confirm for tomorrow."
          }
        },
        {
          "role": "user",
          "text": "Confirm for tomorrow.",
          "translations": {
            "ko": "내일로 확정해주세요.",
            "zh": "确认明天的。",
            "ja": "明日の確定席をお願いします。",
            "vi": "Xác nhận cho ngày mai.",
            "en": "Confirm for tomorrow."
          }
        },
        {
          "role": "ai",
          "text": "All set. You’ll receive new confirmations via email.",
          "translations": {
            "ko": "모두 준비되었습니다. 새로운 확인 정보를 이메일로 보내드리겠습니다.",
            "zh": "都安排好了。您将通过电子邮件收到新的确认信息。",
            "ja": "手配完了です。新しい確認情報はメールで送られます。",
            "vi": "Tất cả đã sẵn sàng. Bạn sẽ nhận được xác nhận mới qua email.",
            "en": "All set. You’ll receive new confirmations via email."
          }
        },
        {
          "role": "user",
          "text": "Will I need to pay additional fees?",
          "translations": {
            "ko": "추가 요금을 내야 하나요?",
            "zh": "我需要支付额外费用吗？",
            "ja": "追加料金は必要ですか？",
            "vi": "Tôi có cần phải trả thêm phí không?",
            "en": "Will I need to pay additional fees?"
          }
        },
        {
          "role": "ai",
          "text": "Due to the emergency, we’re waiving the rebooking charges.",
          "translations": {
            "ko": "긴급 상황으로 인해 재예약 수수료를 면제해드립니다.",
            "zh": "由于紧急情况，我们将免除重新预订的费用。",
            "ja": "緊急事態のため、再予約料は免除されます。",
            "vi": "Do tình huống khẩn cấp, chúng tôi sẽ miễn phí đặt lại.",
            "en": "Due to the emergency, we’re waiving the rebooking charges."
          }
        },
        {
          "role": "user",
          "text": "I really appreciate that.",
          "translations": {
            "ko": "정말 감사합니다.",
            "zh": "我真的很感激。",
            "ja": "本当に助かります。",
            "vi": "Tôi thực sự biết ơn điều đó.",
            "en": "I really appreciate that."
          }
        },
        {
          "role": "ai",
          "text": "Do you need assistance with accommodations tonight?",
          "translations": {
            "ko": "오늘 밤 숙박에 도움이 필요하신가요?",
            "zh": "您今晚需要住宿帮助吗？",
            "ja": "今夜の宿泊施設の手配が必要ですか？",
            "vi": "Bạn có cần hỗ trợ về chỗ ở tối nay không?",
            "en": "Do you need assistance with accommodations tonight?"
          }
        },
        {
          "role": "user",
          "text": "Yes, please. I’d prefer something near the airport.",
          "translations": {
            "ko": "네, 부탁드립니다. 공항 근처가 좋겠습니다.",
            "zh": "是的，请。我希望选择靠近机场的地方。",
            "ja": "はい、お願いします。空港近くがいいです。",
            "vi": "Vâng, làm ơn. Tôi muốn một nơi gần sân bay.",
            "en": "Yes, please. I’d prefer something near the airport."
          }
        },
        {
          "role": "ai",
          "text": "I’ll arrange that and send you details shortly.",
          "translations": {
            "ko": "그럼 준비해드리고 곧 자세한 정보를 보내드리겠습니다.",
            "zh": "我会安排的，并尽快给您发送详细信息。",
            "ja": "手配しますので、詳細は後ほどお送りします。",
            "vi": "Tôi sẽ sắp xếp và gửi cho bạn chi tiết ngay.",
            "en": "I’ll arrange that and send you details shortly."
          }
        },
        {
          "role": "user",
          "text": "Thanks for your help in this situation.",
          "translations": {
            "ko": "이런 상황에서 도와주셔서 감사합니다.",
            "zh": "感谢您在这种情况下的帮助。",
            "ja": "この状況でのご協力、ありがとうございます。",
            "vi": "Cảm ơn bạn đã giúp đỡ trong tình huống này.",
            "en": "Thanks for your help in this situation."
          }
        },
        {
          "role": "ai",
          "text": "We’re always here to assist you.",
          "translations": {
            "ko": "언제나 도와드리겠습니다.",
            "zh": "我们始终在这里为您提供帮助。",
            "ja": "いつでもお手伝いします。",
            "vi": "Chúng tôi luôn sẵn sàng hỗ trợ bạn.",
            "en": "We’re always here to assist you."
          }
        },
        {
          "role": "user",
          "text": "You’ve been great. Thank you again.",
          "translations": {
            "ko": "정말 잘해주셨습니다. 다시 한번 감사드립니다.",
            "zh": "您做得很好。再次感谢您。",
            "ja": "大変お世話になりました。再度、ありがとうございます。",
            "vi": "Bạn đã làm tốt lắm. Cảm ơn bạn một lần nữa.",
            "en": "You’ve been great. Thank you again."
          }
        }
      ]
    }
  ]
};