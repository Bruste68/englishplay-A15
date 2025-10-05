import { LevelType, PracticeScene } from '../types';

export const templateDialogs: Record<LevelType, readonly PracticeScene[]> = {
  "beginner": [
    {
      "description": {
        "ko": "비즈니스 회의 일정 잡기",
        "en": "Scheduling a business meeting",
        "zh": "安排商务会议时间",
        "ja": "ビジネス会議の日程調整",
        "vi": "Lên lịch họp kinh doanh"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Good morning. When shall we schedule our meeting?",
          "translations": {
            "ko": "좋은 아침입니다. 회의를 언제로 잡을까요?",
            "zh": "早上好。我们什么时候安排会议？",
            "ja": "おはようございます。会議はいつにしましょうか？",
            "vi": "Chào buổi sáng. Khi nào chúng ta nên lên lịch họp?",
            "en": "Good morning. When shall we schedule our meeting?"
          }
        },
        {
          "role": "user",
          "text": "How about Thursday afternoon?",
          "translations": {
            "ko": "목요일 오후는 어떤가요?",
            "zh": "星期四下午怎么样？",
            "ja": "木曜の午後はいかがですか？",
            "vi": "Thế thứ Năm chiều được không?",
            "en": "How about Thursday afternoon?"
          }
        },
        {
          "role": "ai",
          "text": "Let me check... Yes, Thursday at 3 PM is available.",
          "translations": {
            "ko": "확인해볼게요... 네, 목요일 오후 3시는 가능합니다.",
            "zh": "让我查一下……是的，星期四下午三点有空。",
            "ja": "確認しますね…はい、木曜の午後3時は空いています。",
            "vi": "Để tôi kiểm tra... Đúng rồi, thứ Năm lúc 3 giờ chiều còn trống.",
            "en": "Let me check... Yes, Thursday at 3 PM is available."
          }
        },
        {
          "role": "user",
          "text": "That works for me.",
          "translations": {
            "ko": "괜찮습니다.",
            "zh": "可以。",
            "ja": "大丈夫です。",
            "vi": "Thời gian đó phù hợp với tôi.",
            "en": "That works for me."
          }
        },
        {
          "role": "ai",
          "text": "What topics should we prepare?",
          "translations": {
            "ko": "어떤 주제를 준비할까요?",
            "zh": "我们应该准备哪些议题？",
            "ja": "どのトピックを準備しましょうか？",
            "vi": "Chúng ta nên chuẩn bị những chủ đề gì?",
            "en": "What topics should we prepare?"
          }
        },
        {
          "role": "user",
          "text": "Let’s focus on the new project timeline.",
          "translations": {
            "ko": "신규 프로젝트 일정에 집중합시다.",
            "zh": "我们专注于新项目的时间表。",
            "ja": "新しいプロジェクトのスケジュールに集中しましょう。",
            "vi": "Hãy tập trung vào lịch trình dự án mới.",
            "en": "Let’s focus on the new project timeline."
          }
        },
        {
          "role": "ai",
          "text": "Great. Do you want to invite the marketing team?",
          "translations": {
            "ko": "좋아요. 마케팅 팀도 초대할까요?",
            "zh": "好的。要邀请市场部吗？",
            "ja": "いいですね。マーケティングチームも招待しますか？",
            "vi": "Tốt. Bạn có muốn mời đội marketing không?",
            "en": "Great. Do you want to invite the marketing team?"
          }
        },
        {
          "role": "user",
          "text": "Yes, they should be included.",
          "translations": {
            "ko": "네, 포함해야 해요.",
            "zh": "是的，他们应该参加。",
            "ja": "はい、参加させましょう。",
            "vi": "Đúng rồi, họ cần được tham gia.",
            "en": "Yes, they should be included."
          }
        },
        {
          "role": "ai",
          "text": "Should I send out a calendar invite now?",
          "translations": {
            "ko": "지금 캘린더 초대를 보낼까요?",
            "zh": "我现在发送日历邀请吗？",
            "ja": "今カレンダー招待を送りましょうか？",
            "vi": "Tôi nên gửi lời mời qua lịch ngay bây giờ không?",
            "en": "Should I send out a calendar invite now?"
          }
        },
        {
          "role": "user",
          "text": "Yes, please do.",
          "translations": {
            "ko": "네, 부탁해요.",
            "zh": "是的，请发。",
            "ja": "はい、お願いします。",
            "vi": "Vâng, hãy làm đi.",
            "en": "Yes, please do."
          }
        },
        {
          "role": "ai",
          "text": "Would you like to meet in person or via Zoom?",
          "translations": {
            "ko": "직접 만날까요, 아니면 Zoom으로 할까요?",
            "zh": "您想亲自见面还是用 Zoom？",
            "ja": "対面で会いますか？それともZoomにしますか？",
            "vi": "Bạn muốn họp trực tiếp hay qua Zoom?",
            "en": "Would you like to meet in person or via Zoom?"
          }
        },
        {
          "role": "user",
          "text": "Let’s do Zoom this time.",
          "translations": {
            "ko": "이번엔 Zoom으로 해요.",
            "zh": "这次用 Zoom 吧。",
            "ja": "今回はZoomにしましょう。",
            "vi": "Lần này hãy họp qua Zoom.",
            "en": "Let’s do Zoom this time."
          }
        },
        {
          "role": "ai",
          "text": "I’ll attach the link in the invite.",
          "translations": {
            "ko": "초대장에 링크를 첨부할게요.",
            "zh": "我会在邀请中附上链接。",
            "ja": "招待にリンクを添付しますね。",
            "vi": "Tôi sẽ đính kèm liên kết trong lời mời.",
            "en": "I’ll attach the link in the invite."
          }
        },
        {
          "role": "user",
          "text": "Thanks. That’s convenient.",
          "translations": {
            "ko": "감사해요. 편리하네요.",
            "zh": "谢谢，真方便。",
            "ja": "ありがとうございます。便利ですね。",
            "vi": "Cảm ơn. Điều đó rất thuận tiện.",
            "en": "Thanks. That’s convenient."
          }
        },
        {
          "role": "ai",
          "text": "Anything else we should prepare?",
          "translations": {
            "ko": "더 준비할 것이 있을까요?",
            "zh": "还有什么需要准备的吗？",
            "ja": "他に準備するものはありますか？",
            "vi": "Còn điều gì khác chúng ta cần chuẩn bị không?",
            "en": "Anything else we should prepare?"
          }
        },
        {
          "role": "user",
          "text": "Maybe last quarter's report.",
          "translations": {
            "ko": "지난 분기 보고서 정도요.",
            "zh": "也许是上一季度的报告。",
            "ja": "前四半期の報告書くらいでしょうか。",
            "vi": "Có thể là báo cáo quý trước.",
            "en": "Maybe last quarter's report."
          }
        },
        {
          "role": "ai",
          "text": "I’ll prepare it and share it in advance.",
          "translations": {
            "ko": "제가 준비해서 미리 공유할게요.",
            "zh": "我会准备好并提前分享。",
            "ja": "準備して事前に共有しますね。",
            "vi": "Tôi sẽ chuẩn bị và chia sẻ nó trước.",
            "en": "I’ll prepare it and share it in advance."
          }
        },
        {
          "role": "user",
          "text": "Sounds good.",
          "translations": {
            "ko": "좋습니다.",
            "zh": "听起来不错。",
            "ja": "いいですね。",
            "vi": "Nghe có vẻ tốt.",
            "en": "Sounds good."
          }
        },
        {
          "role": "ai",
          "text": "All set. See you Thursday!",
          "translations": {
            "ko": "준비 완료입니다. 목요일에 봬요!",
            "zh": "都准备好了。星期四见！",
            "ja": "準備万端です。木曜に会いましょう！",
            "vi": "Mọi thứ đã sẵn sàng. Hẹn gặp bạn vào thứ Năm!",
            "en": "All set. See you Thursday!"
          }
        },
        {
          "role": "user",
          "text": "See you then. Thank you!",
          "translations": {
            "ko": "그때 뵐게요. 감사합니다!",
            "zh": "到时候见，谢谢！",
            "ja": "その時に会いましょう。ありがとうございます！",
            "vi": "Hẹn gặp lại. Cảm ơn bạn!",
            "en": "See you then. Thank you!"
          }
        }
      ]
    },
    {
      "description": {
        "ko": "출장 준비 대화",
        "en": "Discussing preparations for a business trip",
        "zh": "讨论出差准备事项",
        "ja": "出張準備の会話",
        "vi": "Thảo luận về việc chuẩn bị cho chuyến công tác"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Are you ready for the business trip next week?",
          "translations": {
            "ko": "다음 주 출장 준비되셨나요?",
            "zh": "下周出差准备好了吗？",
            "ja": "来週の出張の準備はできましたか？",
            "vi": "Bạn đã sẵn sàng cho chuyến công tác tuần tới chưa?",
            "en": "Are you ready for the business trip next week?"
          }
        },
        {
          "role": "user",
          "text": "Almost. I just need to pack my documents.",
          "translations": {
            "ko": "거의요. 서류만 챙기면 돼요.",
            "zh": "差不多了，我只需要收拾文件。",
            "ja": "ほとんどできました。書類だけ詰めれば完了です。",
            "vi": "Gần như vậy. Tôi chỉ cần đóng gói tài liệu.",
            "en": "Almost. I just need to pack my documents."
          }
        },
        {
          "role": "ai",
          "text": "Do you have the meeting schedule?",
          "translations": {
            "ko": "회의 일정표는 가지고 계신가요?",
            "zh": "会议日程有吗？",
            "ja": "会議スケジュールは持っていますか？",
            "vi": "Bạn có lịch trình họp không?",
            "en": "Do you have the meeting schedule?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I printed it out.",
          "translations": {
            "ko": "네, 출력해놨어요.",
            "zh": "有的，我打印出来了。",
            "ja": "はい、印刷しました。",
            "vi": "Vâng, tôi đã in nó ra.",
            "en": "Yes, I printed it out."
          }
        },
        {
          "role": "ai",
          "text": "Good. What time is your flight?",
          "translations": {
            "ko": "좋네요. 비행기는 몇 시죠?",
            "zh": "很好。您的航班是几点？",
            "ja": "いいですね。フライトは何時ですか？",
            "vi": "Tốt. Chuyến bay của bạn là lúc mấy giờ?",
            "en": "Good. What time is your flight?"
          }
        },
        {
          "role": "user",
          "text": "It’s at 10:30 AM on Monday.",
          "translations": {
            "ko": "월요일 오전 10시 30분입니다.",
            "zh": "是周一上午10点半。",
            "ja": "月曜の午前10時30分です。",
            "vi": "Là lúc 10 giờ 30 phút sáng thứ Hai.",
            "en": "It’s at 10:30 AM on Monday."
          }
        },
        {
          "role": "ai",
          "text": "Will you take a taxi to the airport?",
          "translations": {
            "ko": "공항까지 택시 타실 건가요?",
            "zh": "您打算打车去机场吗？",
            "ja": "空港まではタクシーで行きますか？",
            "vi": "Bạn có đi taxi đến sân bay không?",
            "en": "Will you take a taxi to the airport?"
          }
        },
        {
          "role": "user",
          "text": "No, I’ll use the company shuttle.",
          "translations": {
            "ko": "아니요, 회사 셔틀을 이용할 거예요.",
            "zh": "不，我会坐公司的班车。",
            "ja": "いいえ、会社のシャトルを使います。",
            "vi": "Không, tôi sẽ dùng xe đưa đón của công ty.",
            "en": "No, I’ll use the company shuttle."
          }
        },
        {
          "role": "ai",
          "text": "Smart. Did you book the hotel already?",
          "translations": {
            "ko": "현명하네요. 호텔은 이미 예약하셨나요?",
            "zh": "聪明。您订好酒店了吗？",
            "ja": "賢いですね。ホテルはもう予約しましたか？",
            "vi": "Thông minh. Bạn đã đặt khách sạn chưa?",
            "en": "Smart. Did you book the hotel already?"
          }
        },
        {
          "role": "user",
          "text": "Yes, it’s close to the conference center.",
          "translations": {
            "ko": "네, 컨퍼런스 센터 근처예요.",
            "zh": "是的，离会议中心很近。",
            "ja": "はい、カンファレンスセンターの近くです。",
            "vi": "Vâng, nó gần trung tâm hội nghị.",
            "en": "Yes, it’s close to the conference center."
          }
        },
        {
          "role": "ai",
          "text": "What about your presentation materials?",
          "translations": {
            "ko": "발표 자료는요?",
            "zh": "演示材料准备好了吗？",
            "ja": "プレゼン資料はどうですか？",
            "vi": "Còn tài liệu thuyết trình của bạn thì sao?",
            "en": "What about your presentation materials?"
          }
        },
        {
          "role": "user",
          "text": "They’re saved on my laptop and USB.",
          "translations": {
            "ko": "노트북과 USB에 저장했어요.",
            "zh": "我保存在了笔记本和U盘里。",
            "ja": "ノートパソコンとUSBに保存してあります。",
            "vi": "Chúng được lưu trên laptop và USB của tôi.",
            "en": "They’re saved on my laptop and USB."
          }
        },
        {
          "role": "ai",
          "text": "Did you print business cards?",
          "translations": {
            "ko": "명함은 인쇄하셨나요?",
            "zh": "您打印名片了吗？",
            "ja": "名刺は印刷しましたか？",
            "vi": "Bạn có in danh thiếp không?",
            "en": "Did you print business cards?"
          }
        },
        {
          "role": "user",
          "text": "Yes, 50 cards should be enough.",
          "translations": {
            "ko": "네, 50장 정도면 충분할 거예요.",
            "zh": "打印了，50张应该够了。",
            "ja": "はい、50枚あれば足ります。",
            "vi": "Vâng, 50 tấm danh thiếp nên đủ.",
            "en": "Yes, 50 cards should be enough."
          }
        },
        {
          "role": "ai",
          "text": "Good thinking. How long is your trip?",
          "translations": {
            "ko": "잘 하셨네요. 여행은 얼마나 되죠?",
            "zh": "考虑周到。您这次出差多长时间？",
            "ja": "さすがです。出張はどれくらいの期間ですか？",
            "vi": "Suy nghĩ tốt. Chuyến đi của bạn kéo dài bao lâu?",
            "en": "Good thinking. How long is your trip?"
          }
        },
        {
          "role": "user",
          "text": "I’ll be back Friday evening.",
          "translations": {
            "ko": "금요일 저녁에 돌아올 거예요.",
            "zh": "周五晚上回来。",
            "ja": "金曜の夜に戻ります。",
            "vi": "Tôi sẽ trở về vào tối thứ Sáu.",
            "en": "I’ll be back Friday evening."
          }
        },
        {
          "role": "ai",
          "text": "Don’t forget to bring chargers and adapters.",
          "translations": {
            "ko": "충전기와 어댑터 잊지 마세요.",
            "zh": "别忘了带充电器和转换器。",
            "ja": "充電器とアダプターを忘れずに持って行ってください。",
            "vi": "Đừng quên mang theo sạc và bộ chuyển đổi.",
            "en": "Don’t forget to bring chargers and adapters."
          }
        },
        {
          "role": "user",
          "text": "Already packed them!",
          "translations": {
            "ko": "이미 챙겼어요!",
            "zh": "已经收好了！",
            "ja": "もう準備しました！",
            "vi": "Tôi đã đóng gói chúng rồi!",
            "en": "Already packed them!"
          }
        },
        {
          "role": "ai",
          "text": "Sounds like you’re well prepared.",
          "translations": {
            "ko": "준비를 잘 하셨네요.",
            "zh": "看起来你准备得很充分。",
            "ja": "準備万端のようですね。",
            "vi": "Có vẻ như bạn đã chuẩn bị kỹ lưỡng.",
            "en": "Sounds like you’re well prepared."
          }
        },
        {
          "role": "user",
          "text": "Thanks for checking in!",
          "translations": {
            "ko": "확인해줘서 고마워요!",
            "zh": "谢谢你关心！",
            "ja": "気にかけてくれてありがとう！",
            "vi": "Cảm ơn bạn đã kiểm tra!",
            "en": "Thanks for checking in!"
          }
        }
      ]
    },
    {
      "description": {
        "ko": "회의에서 자기 소개하기",
        "en": "Introducing yourself in a meeting",
        "zh": "在会议中自我介绍",
        "ja": "会議で自己紹介をする",
        "vi": "Giới thiệu bản thân trong cuộc họp"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Good morning, everyone. Let’s start with introductions.",
          "translations": {
            "ko": "모두 좋은 아침입니다. 자기 소개부터 시작합시다.",
            "zh": "大家早上好。让我们先自我介绍一下。",
            "ja": "皆さん、おはようございます。自己紹介から始めましょう。",
            "vi": "Chào buổi sáng, mọi người. Hãy bắt đầu bằng việc giới thiệu.",
            "en": "Good morning, everyone. Let’s start with introductions."
          }
        },
        {
          "role": "user",
          "text": "Hi, I’m Sarah from the marketing team.",
          "translations": {
            "ko": "안녕하세요, 저는 마케팅 팀의 사라입니다.",
            "zh": "嗨，我是营销团队的Sarah。",
            "ja": "こんにちは、私はマーケティングチームのサラです。",
            "vi": "Chào, tôi là Sarah từ đội marketing.",
            "en": "Hi, I’m Sarah from the marketing team."
          }
        },
        {
          "role": "ai",
          "text": "Nice to meet you, Sarah. How long have you been with the company?",
          "translations": {
            "ko": "만나서 반갑습니다, 사라님. 얼마나 오래 회사에 계셨나요?",
            "zh": "很高兴认识你，Sarah。你在公司工作多久了？",
            "ja": "サラさん、初めまして。どのくらい会社に在籍していますか？",
            "vi": "Rất vui được gặp bạn, Sarah. Bạn đã làm việc với công ty bao lâu rồi?",
            "en": "Nice to meet you, Sarah. How long have you been with the company?"
          }
        },
        {
          "role": "user",
          "text": "I joined about six months ago.",
          "translations": {
            "ko": "대략 6개월 전에 합류했습니다.",
            "zh": "我大约六个月前加入的。",
            "ja": "約6ヶ月前に入社しました。",
            "vi": "Tôi đã tham gia khoảng sáu tháng trước.",
            "en": "I joined about six months ago."
          }
        },
        {
          "role": "ai",
          "text": "That’s great. What projects are you currently working on?",
          "translations": {
            "ko": "좋네요. 현재 어떤 프로젝트를 진행하고 계신가요?",
            "zh": "那太好了。你现在正在做什么项目？",
            "ja": "それは素晴らしいですね。現在、どのようなプロジェクトに取り組んでいますか？",
            "vi": "Thật tuyệt. Bạn đang làm việc trên những dự án nào?",
            "en": "That’s great. What projects are you currently working on?"
          }
        },
        {
          "role": "user",
          "text": "I’m leading the new product launch campaign.",
          "translations": {
            "ko": "새로운 제품 출시 캠페인을 이끌고 있습니다.",
            "zh": "我正在负责新产品发布活动。",
            "ja": "新製品のローンチキャンペーンをリードしています。",
            "vi": "Tôi đang dẫn dắt chiến dịch ra mắt sản phẩm mới.",
            "en": "I’m leading the new product launch campaign."
          }
        },
        {
          "role": "ai",
          "text": "That sounds exciting. How’s it going so far?",
          "translations": {
            "ko": "흥미롭군요. 지금까지 어떻게 진행되고 있나요?",
            "zh": "听起来很令人兴奋。到目前为止进展如何？",
            "ja": "それは興奮するね。今のところどうですか？",
            "vi": "Điều đó nghe có vẻ thú vị. Mọi thứ đang diễn ra như thế nào?",
            "en": "That sounds exciting. How’s it going so far?"
          }
        },
        {
          "role": "user",
          "text": "It’s going well. We’re on track for the June release.",
          "translations": {
            "ko": "잘 진행되고 있습니다. 6월 출시를 목표로 하고 있습니다.",
            "zh": "进展顺利。我们计划在六月份发布。",
            "ja": "順調です。6月のリリースに向けて進行中です。",
            "vi": "Mọi thứ đang diễn ra tốt. Chúng tôi đang theo đúng lịch trình cho việc phát hành vào tháng 6.",
            "en": "It’s going well. We’re on track for the June release."
          }
        },
        {
          "role": "ai",
          "text": "Excellent. Do you have experience in digital marketing too?",
          "translations": {
            "ko": "훌륭합니다. 디지털 마케팅 경험도 있나요?",
            "zh": "很好。你也有数字营销的经验吗？",
            "ja": "素晴らしいですね。デジタルマーケティングの経験もありますか？",
            "vi": "Tuyệt vời. Bạn có kinh nghiệm về marketing số không?",
            "en": "Excellent. Do you have experience in digital marketing too?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I’ve handled several online campaigns before.",
          "translations": {
            "ko": "네, 이전에 여러 온라인 캠페인을 진행해본 적이 있습니다.",
            "zh": "是的，我之前处理过几个在线活动。",
            "ja": "はい、以前にいくつかのオンラインキャンペーンを手掛けたことがあります。",
            "vi": "Vâng, tôi đã thực hiện một số chiến dịch trực tuyến trước đây.",
            "en": "Yes, I’ve handled several online campaigns before."
          }
        },
        {
          "role": "ai",
          "text": "Fantastic. We’re glad to have you here.",
          "translations": {
            "ko": "좋습니다. 여기에 오신 것을 환영합니다.",
            "zh": "太棒了。我们很高兴你能加入我们。",
            "ja": "素晴らしいですね。ここにいてくれてうれしいです。",
            "vi": "Tuyệt vời. Chúng tôi rất vui mừng khi có bạn ở đây.",
            "en": "Fantastic. We’re glad to have you here."
          }
        },
        {
          "role": "user",
          "text": "Thank you. I’m happy to be part of the team.",
          "translations": {
            "ko": "감사합니다. 팀의 일원이 되어 기쁩니다.",
            "zh": "谢谢。我很高兴成为团队的一员。",
            "ja": "ありがとうございます。チームの一員であることを嬉しく思います。",
            "vi": "Cảm ơn. Tôi rất vui khi được làm một phần của đội ngũ.",
            "en": "Thank you. I’m happy to be part of the team."
          }
        },
        {
          "role": "ai",
          "text": "Let’s go around and hear from others as well.",
          "translations": {
            "ko": "다른 분들도 차례로 소개해 주시죠.",
            "zh": "让我们继续听听其他人的介绍。",
            "ja": "他の方からも意見を聞いてみましょう。",
            "vi": "Hãy để mọi người giới thiệu về mình.",
            "en": "Let’s go around and hear from others as well."
          }
        },
        {
          "role": "user",
          "text": "Sure, looking forward to meeting everyone.",
          "translations": {
            "ko": "네, 모두를 만나는 것을 기대하고 있습니다.",
            "zh": "好的，期待见到大家。",
            "ja": "はい、皆さんとお会いするのを楽しみにしています。",
            "vi": "Đúng rồi, tôi mong muốn gặp mọi người.",
            "en": "Sure, looking forward to meeting everyone."
          }
        },
        {
          "role": "ai",
          "text": "After introductions, we’ll review the agenda.",
          "translations": {
            "ko": "소개 후에는 회의 일정을 검토하겠습니다.",
            "zh": "自我介绍后，我们将审查议程。",
            "ja": "自己紹介の後、議題を確認します。",
            "vi": "Sau khi giới thiệu, chúng ta sẽ xem lại nghị sự.",
            "en": "After introductions, we’ll review the agenda."
          }
        },
        {
          "role": "user",
          "text": "Sounds good.",
          "translations": {
            "ko": "좋습니다.",
            "zh": "听起来不错。",
            "ja": "了解です。",
            "vi": "Nghe có vẻ tốt.",
            "en": "Sounds good."
          }
        },
        {
          "role": "ai",
          "text": "Also, feel free to ask questions anytime.",
          "translations": {
            "ko": "언제든지 질문하셔도 됩니다.",
            "zh": "另外，随时欢迎提问。",
            "ja": "また、何か質問があればいつでもお気軽にどうぞ。",
            "vi": "Ngoài ra, hãy cứ tự do đặt câu hỏi bất cứ lúc nào.",
            "en": "Also, feel free to ask questions anytime."
          }
        },
        {
          "role": "user",
          "text": "Will do. Thanks for the warm welcome.",
          "translations": {
            "ko": "알겠습니다. 따뜻한 환영에 감사드립니다.",
            "zh": "好的，感谢热烈的欢迎。",
            "ja": "了解しました。暖かい歓迎をありがとうございます。",
            "vi": "Tôi sẽ làm như vậy. Cảm ơn vì đã chào đón nồng hậu.",
            "en": "Will do. Thanks for the warm welcome."
          }
        },
        {
          "role": "ai",
          "text": "You’re very welcome.",
          "translations": {
            "ko": "천만에요.",
            "zh": "不客气。",
            "ja": "どういたしまして。",
            "vi": "Rất vui được chào đón bạn.",
            "en": "You’re very welcome."
          }
        },
        {
          "role": "user",
          "text": "Let’s have a productive meeting!",
          "translations": {
            "ko": "생산적인 회의가 되길 바랍니다!",
            "zh": "让我们开个富有成效的会议吧！",
            "ja": "有意義な会議にしましょう！",
            "vi": "Hãy cùng có một cuộc họp hiệu quả!",
            "en": "Let’s have a productive meeting!"
          }
        }
      ]
    },
    {
      "description": {
        "ko": "클라이언트와의 약속 잡기",
        "en": "Making an appointment with a client",
        "zh": "与客户预约",
        "ja": "クライアントとのアポイントメントを設定する",
        "vi": "Đặt lịch hẹn với khách hàng"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Hello, this is James from Bright Solutions.",
          "translations": {
            "ko": "안녕하세요, 이쪽은 브라이트 솔루션의 제임스입니다.",
            "zh": "你好，我是Bright Solutions的James。",
            "ja": "こんにちは、ブライトソリューションズのジェームズです。",
            "vi": "Xin chào, đây là James từ Bright Solutions.",
            "en": "Hello, this is James from Bright Solutions."
          }
        },
        {
          "role": "user",
          "text": "Hi James, this is Amanda. How can I help you?",
          "translations": {
            "ko": "안녕하세요 제임스님, 이쪽은 아만다입니다. 어떻게 도와드릴까요?",
            "zh": "嗨，James，我是Amanda。有什么可以帮助你的？",
            "ja": "ジェームズさん、こんにちは。アマンダです。何かお手伝いできることがありますか？",
            "vi": "Chào James, đây là Amanda. Tôi có thể giúp gì cho bạn?",
            "en": "Hi James, this is Amanda. How can I help you?"
          }
        },
        {
          "role": "ai",
          "text": "I’d like to schedule a meeting to discuss our collaboration.",
          "translations": {
            "ko": "협업에 대해 논의하기 위한 회의를 예약하고 싶습니다.",
            "zh": "我想安排一个会议，讨论我们的合作。",
            "ja": "私たちの協力について話し合うための会議をスケジュールしたいと思います。",
            "vi": "Tôi muốn lên lịch họp để thảo luận về việc hợp tác của chúng ta.",
            "en": "I’d like to schedule a meeting to discuss our collaboration."
          }
        },
        {
          "role": "user",
          "text": "Sure, when are you available?",
          "translations": {
            "ko": "네, 언제 가능하신가요?",
            "zh": "好的，你什么时候有空？",
            "ja": "了解です、いつご都合がよろしいですか？",
            "vi": "Được, bạn rảnh khi nào?",
            "en": "Sure, when are you available?"
          }
        },
        {
          "role": "ai",
          "text": "How about Tuesday morning at 10 AM?",
          "translations": {
            "ko": "화요일 오전 10시는 어떠신가요?",
            "zh": "周二上午10点怎么样？",
            "ja": "火曜日の午前10時はいかがでしょうか？",
            "vi": "Thế thứ Ba sáng lúc 10 giờ được không?",
            "en": "How about Tuesday morning at 10 AM?"
          }
        },
        {
          "role": "user",
          "text": "That works for me.",
          "translations": {
            "ko": "그 시간 괜찮습니다.",
            "zh": "我可以。",
            "ja": "私には都合が良いです。",
            "vi": "Thời gian đó phù hợp với tôi.",
            "en": "That works for me."
          }
        },
        {
          "role": "ai",
          "text": "Would you prefer an in-person meeting or a video call?",
          "translations": {
            "ko": "대면 회의를 원하시나요, 아니면 비디오 통화를 원하시나요?",
            "zh": "你更喜欢面对面会议还是视频通话？",
            "ja": "対面での会議とビデオ通話、どちらがよろしいですか？",
            "vi": "Bạn có muốn họp trực tiếp hay qua cuộc gọi video không?",
            "en": "Would you prefer an in-person meeting or a video call?"
          }
        },
        {
          "role": "user",
          "text": "Let’s do a video call, please.",
          "translations": {
            "ko": "비디오 통화로 하겠습니다.",
            "zh": "请安排视频通话。",
            "ja": "ビデオ通話でお願いします。",
            "vi": "Hãy gọi video, xin vui lòng.",
            "en": "Let’s do a video call, please."
          }
        },
        {
          "role": "ai",
          "text": "Perfect. I’ll send you a Zoom link shortly.",
          "translations": {
            "ko": "좋습니다. 곧 줌 링크를 보내드리겠습니다.",
            "zh": "好的。我马上会给你发送一个Zoom链接。",
            "ja": "了解しました。すぐにZoomのリンクを送ります。",
            "vi": "Hoàn hảo. Tôi sẽ gửi cho bạn liên kết Zoom ngay.",
            "en": "Perfect. I’ll send you a Zoom link shortly."
          }
        },
        {
          "role": "user",
          "text": "Looking forward to it.",
          "translations": {
            "ko": "기대하겠습니다.",
            "zh": "期待与你见面。",
            "ja": "楽しみにしています。",
            "vi": "Tôi rất mong đợi.",
            "en": "Looking forward to it."
          }
        },
        {
          "role": "ai",
          "text": "We’ll cover the project timeline and responsibilities.",
          "translations": {
            "ko": "프로젝트 일정과 책임에 대해 논의하겠습니다.",
            "zh": "我们将讨论项目时间表和责任。",
            "ja": "プロジェクトのタイムラインと責任について話し合います。",
            "vi": "Chúng tôi sẽ bàn về lịch trình dự án và trách nhiệm.",
            "en": "We’ll cover the project timeline and responsibilities."
          }
        },
        {
          "role": "user",
          "text": "I’ll prepare the draft outline.",
          "translations": {
            "ko": "초안을 준비하겠습니다.",
            "zh": "我会准备草案大纲。",
            "ja": "ドラフトの概要を準備します。",
            "vi": "Tôi sẽ chuẩn bị bản phác thảo.",
            "en": "I’ll prepare the draft outline."
          }
        },
        {
          "role": "ai",
          "text": "Great. Do you have any other points to discuss?",
          "translations": {
            "ko": "좋습니다. 다른 논의할 사항이 있나요?",
            "zh": "很好。你还有其他要讨论的点吗？",
            "ja": "素晴らしいです。他に話し合うべき点はありますか？",
            "vi": "Tốt. Bạn có điểm nào khác muốn thảo luận không?",
            "en": "Great. Do you have any other points to discuss?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I want to clarify the budget range.",
          "translations": {
            "ko": "네, 예산 범위를 명확히 하고 싶습니다.",
            "zh": "是的，我想澄清预算范围。",
            "ja": "はい、予算の範囲を明確にしたいと思います。",
            "vi": "Vâng, tôi muốn làm rõ về phạm vi ngân sách.",
            "en": "Yes, I want to clarify the budget range."
          }
        },
        {
          "role": "ai",
          "text": "Noted. We’ll allocate time for that.",
          "translations": {
            "ko": "알겠습니다. 그 부분에 대해 시간을 할애하겠습니다.",
            "zh": "明白了。我们会为此留出时间。",
            "ja": "了解しました。それに時間を割きます。",
            "vi": "Đã ghi nhận. Chúng tôi sẽ dành thời gian cho việc đó.",
            "en": "Noted. We’ll allocate time for that."
          }
        },
        {
          "role": "user",
          "text": "Thanks. I’ll also invite our finance manager.",
          "translations": {
            "ko": "감사합니다. 우리의 재무 관리자도 초대하겠습니다.",
            "zh": "谢谢。我也会邀请我们的财务经理。",
            "ja": "ありがとう。私たちの財務マネージャーも招待します。",
            "vi": "Cảm ơn. Tôi cũng sẽ mời người quản lý tài chính của chúng tôi.",
            "en": "Thanks. I’ll also invite our finance manager."
          }
        },
        {
          "role": "ai",
          "text": "Sounds good. See you Tuesday at 10 then.",
          "translations": {
            "ko": "좋습니다. 그럼 화요일 오전 10시에 뵙겠습니다.",
            "zh": "好的。那么周二上午10点见。",
            "ja": "了解です。それでは火曜日の10時にお会いしましょう。",
            "vi": "Nghe có vẻ tốt. Hẹn gặp bạn vào thứ Ba lúc 10 giờ nhé.",
            "en": "Sounds good. See you Tuesday at 10 then."
          }
        },
        {
          "role": "user",
          "text": "See you then.",
          "translations": {
            "ko": "그때 뵙겠습니다.",
            "zh": "到时见。",
            "ja": "それではその時に。",
            "vi": "Hẹn gặp lại.",
            "en": "See you then."
          }
        },
        {
          "role": "ai",
          "text": "Have a great day!",
          "translations": {
            "ko": "좋은 하루 되세요!",
            "zh": "祝你今天过得愉快！",
            "ja": "素晴らしい一日を！",
            "vi": "Chúc bạn một ngày tốt lành!",
            "en": "Have a great day!"
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
        "ko": "사업 제안 논의하기",
        "en": "Discussing a business proposal",
        "zh": "讨论商业提案",
        "ja": "ビジネス提案について話し合う",
        "vi": "Thảo luận về đề xuất kinh doanh"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Thank you for reviewing our proposal.",
          "translations": {
            "ko": "제안서를 검토해 주셔서 감사합니다.",
            "zh": "感谢你审查我们的提案。",
            "ja": "私たちの提案を見ていただきありがとうございます。",
            "vi": "Cảm ơn bạn đã xem xét đề xuất của chúng tôi.",
            "en": "Thank you for reviewing our proposal."
          }
        },
        {
          "role": "user",
          "text": "It looks promising. Let’s go over some key points.",
          "translations": {
            "ko": "유망해 보입니다. 주요 사항들을 살펴봅시다.",
            "zh": "看起来很有前景。让我们讨论一些关键点。",
            "ja": "有望に見えます。いくつかの重要なポイントを見ていきましょう。",
            "vi": "Nó có vẻ hứa hẹn. Hãy xem xét một số điểm chính.",
            "en": "It looks promising. Let’s go over some key points."
          }
        },
        {
          "role": "ai",
          "text": "Of course. Shall we start with the pricing model?",
          "translations": {
            "ko": "그럼요. 가격 모델부터 시작하시죠?",
            "zh": "当然。我们从定价模型开始吗？",
            "ja": "もちろんです。価格モデルから始めましょうか？",
            "vi": "Tất nhiên. Chúng ta có nên bắt đầu với mô hình giá cả không?",
            "en": "Of course. Shall we start with the pricing model?"
          }
        },
        {
          "role": "user",
          "text": "Yes, the monthly fee seems reasonable.",
          "translations": {
            "ko": "네, 월 요금이 합리적으로 보입니다.",
            "zh": "是的，月费用似乎合理。",
            "ja": "はい、月額料金は妥当に見えます。",
            "vi": "Vâng, phí hàng tháng có vẻ hợp lý.",
            "en": "Yes, the monthly fee seems reasonable."
          }
        },
        {
          "role": "ai",
          "text": "We’ve also included a performance bonus option.",
          "translations": {
            "ko": "성과 보너스 옵션도 포함했습니다.",
            "zh": "我们还包括了绩效奖金选项。",
            "ja": "パフォーマンスボーナスのオプションも含めました。",
            "vi": "Chúng tôi cũng đã bao gồm tùy chọn thưởng hiệu suất.",
            "en": "We’ve also included a performance bonus option."
          }
        },
        {
          "role": "user",
          "text": "Interesting. How is that calculated?",
          "translations": {
            "ko": "흥미롭군요. 그것은 어떻게 계산되나요?",
            "zh": "有趣。这是如何计算的？",
            "ja": "興味深いですね。それはどのように計算されますか？",
            "vi": "Thú vị. Điều đó được tính như thế nào?",
            "en": "Interesting. How is that calculated?"
          }
        },
        {
          "role": "ai",
          "text": "It’s based on quarterly sales growth.",
          "translations": {
            "ko": "분기별 매출 성장에 기반합니다.",
            "zh": "它是基于季度销售增长。",
            "ja": "四半期ごとの売上成長に基づいています。",
            "vi": "Nó dựa trên tăng trưởng doanh số hàng quý.",
            "en": "It’s based on quarterly sales growth."
          }
        },
        {
          "role": "user",
          "text": "Okay. Can we adjust the contract period to 12 months?",
          "translations": {
            "ko": "알겠습니다. 계약 기간을 12개월로 조정할 수 있나요?",
            "zh": "好的。我们可以将合同期限调整为12个月吗？",
            "ja": "了解です。契約期間を12ヶ月に調整することは可能ですか？",
            "vi": "Được. Chúng ta có thể điều chỉnh thời hạn hợp đồng thành 12 tháng không?",
            "en": "Okay. Can we adjust the contract period to 12 months?"
          }
        },
        {
          "role": "ai",
          "text": "Absolutely. We’re flexible on duration.",
          "translations": {
            "ko": "물론입니다. 기간에 대해서는 유연합니다.",
            "zh": "当然可以。我们在期限上很灵活。",
            "ja": "もちろんです。期間については柔軟に対応します。",
            "vi": "Tất nhiên. Chúng tôi linh hoạt về thời gian.",
            "en": "Absolutely. We’re flexible on duration."
          }
        },
        {
          "role": "user",
          "text": "Great. I’ll need legal to review it too.",
          "translations": {
            "ko": "좋습니다. 법무팀에게도 검토를 요청해야겠습니다.",
            "zh": "很好。我需要法务部门也审查一下。",
            "ja": "素晴らしいです。法務部門にも見てもらう必要があります。",
            "vi": "Tốt. Tôi cần pháp lý xem xét nó nữa.",
            "en": "Great. I’ll need legal to review it too."
          }
        },
        {
          "role": "ai",
          "text": "Sure. Would next week work for follow-up?",
          "translations": {
            "ko": "그럼요. 다음 주에 후속 조치를 할 수 있을까요?",
            "zh": "好的。下周能跟进吗？",
            "ja": "もちろんです。来週にフォローアップするのはいかがでしょうか？",
            "vi": "Được. Tuần tới có phù hợp để theo dõi không?",
            "en": "Sure. Would next week work for follow-up?"
          }
        },
        {
          "role": "user",
          "text": "Let’s aim for Thursday afternoon.",
          "translations": {
            "ko": "목요일 오후를 목표로 합시다.",
            "zh": "我们定在周四下午。",
            "ja": "木曜日の午後を目指しましょう。",
            "vi": "Hãy nhắm vào thứ Năm chiều.",
            "en": "Let’s aim for Thursday afternoon."
          }
        },
        {
          "role": "ai",
          "text": "Perfect. I’ll send the revised draft by Monday.",
          "translations": {
            "ko": "좋습니다. 월요일까지 수정된 초안을 보내드리겠습니다.",
            "zh": "好的。我会在周一之前发送修订稿。",
            "ja": "了解しました。月曜日までに改訂版のドラフトを送ります。",
            "vi": "Hoàn hảo. Tôi sẽ gửi bản dự thảo đã chỉnh sửa vào thứ Hai.",
            "en": "Perfect. I’ll send the revised draft by Monday."
          }
        },
        {
          "role": "user",
          "text": "Looking forward to it.",
          "translations": {
            "ko": "기대하겠습니다.",
            "zh": "期待与你见面。",
            "ja": "楽しみにしています。",
            "vi": "Tôi rất mong đợi.",
            "en": "Looking forward to it."
          }
        },
        {
          "role": "ai",
          "text": "Thanks again for your time.",
          "translations": {
            "ko": "다시 한번 시간을 내주셔서 감사합니다.",
            "zh": "再次感谢你的时间。",
            "ja": "また、お時間をいただきありがとうございました。",
            "vi": "Cảm ơn bạn một lần nữa vì đã dành thời gian.",
            "en": "Thanks again for your time."
          }
        },
        {
          "role": "user",
          "text": "Thank you for the clear presentation.",
          "translations": {
            "ko": "명확한 발표에 감사드립니다.",
            "zh": "感谢你清晰的演示。",
            "ja": "明確なプレゼンテーションをしていただきありがとうございます。",
            "vi": "Cảm ơn bạn vì đã trình bày rõ ràng.",
            "en": "Thank you for the clear presentation."
          }
        },
        {
          "role": "ai",
          "text": "Please reach out with any other questions.",
          "translations": {
            "ko": "다른 질문이 있으시면 언제든지 연락주세요.",
            "zh": "如果有其他问题，请随时联系我。",
            "ja": "他に質問があればいつでもお知らせください。",
            "vi": "Hãy liên hệ nếu bạn có bất kỳ câu hỏi nào khác.",
            "en": "Please reach out with any other questions."
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
          "text": "Talk soon.",
          "translations": {
            "ko": "곧 연락드리겠습니다.",
            "zh": "之后再聊。",
            "ja": "また近いうちにお話ししましょう。",
            "vi": "Gặp lại bạn sớm.",
            "en": "Talk soon."
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
        "ko": "거래 협상하기",
        "en": "Negotiating a deal",
        "zh": "商谈交易",
        "ja": "取引を交渉する",
        "vi": "Đàm phán một thỏa thuận"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "We appreciate your interest in working with us.",
          "translations": {
            "ko": "우리와 함께 일하고자 하는 의향에 감사드립니다.",
            "zh": "我们感谢你对与我们合作的兴趣。",
            "ja": "私たちとのお仕事に興味を持っていただきありがとうございます。",
            "vi": "Chúng tôi rất trân trọng sự quan tâm của bạn trong việc làm việc với chúng tôi.",
            "en": "We appreciate your interest in working with us."
          }
        },
        {
          "role": "user",
          "text": "Likewise. I’d like to discuss the pricing terms.",
          "translations": {
            "ko": "마찬가지입니다. 가격 조건에 대해 논의하고 싶습니다.",
            "zh": "同样。我想讨论定价条款。",
            "ja": "同様です。価格条件について話し合いたいと思います。",
            "vi": "Tương tự. Tôi muốn thảo luận về điều khoản giá cả.",
            "en": "Likewise. I’d like to discuss the pricing terms."
          }
        },
        {
          "role": "ai",
          "text": "Of course. What’s your target budget?",
          "translations": {
            "ko": "그럼요. 목표 예산은 얼마인가요?",
            "zh": "当然。你的目标预算是多少？",
            "ja": "もちろんです。目標とする予算は何ですか？",
            "vi": "Tất nhiên. Ngân sách mục tiêu của bạn là bao nhiêu?",
            "en": "Of course. What’s your target budget?"
          }
        },
        {
          "role": "user",
          "text": "We’re aiming for something under $50,000.",
          "translations": {
            "ko": "50,000달러 미만을 목표로 하고 있습니다.",
            "zh": "我们的目标是在50,000美元以下。",
            "ja": "50,000ドル以下を目指しています。",
            "vi": "Chúng tôi đang nhắm đến một số dưới 50.000 đô la.",
            "en": "We’re aiming for something under $50,000."
          }
        },
        {
          "role": "ai",
          "text": "We can offer a reduced rate for a 12-month contract.",
          "translations": {
            "ko": "12개월 계약에 대해 감액된 요금을 제공할 수 있습니다.",
            "zh": "我们可以为12个月的合同提供降价。",
            "ja": "12ヶ月契約であれば割引率を提供できます。",
            "vi": "Chúng tôi có thể cung cấp một mức giá giảm cho hợp đồng 12 tháng.",
            "en": "We can offer a reduced rate for a 12-month contract."
          }
        },
        {
          "role": "user",
          "text": "That could work. Would you include support in that?",
          "translations": {
            "ko": "그럴 수 있겠군요. 그것에 지원이 포함되나요?",
            "zh": "这可能行得通。那包括支持吗？",
            "ja": "それなら可能かもしれません。その中にサポートは含まれていますか？",
            "vi": "Điều đó có thể hoạt động. Bạn có bao gồm hỗ trợ trong đó không?",
            "en": "That could work. Would you include support in that?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, full technical support is included.",
          "translations": {
            "ko": "네, 완전한 기술 지원이 포함됩니다.",
            "zh": "是的，包括全面的技术支持。",
            "ja": "はい、フルの技術サポートが含まれています。",
            "vi": "Vâng, hỗ trợ kỹ thuật đầy đủ được bao gồm.",
            "en": "Yes, full technical support is included."
          }
        },
        {
          "role": "user",
          "text": "Good. What about training for our staff?",
          "translations": {
            "ko": "좋습니다. 우리 직원들에 대한 교육은 어떻게 되나요?",
            "zh": "好的。那对我们的员工进行培训呢？",
            "ja": "それは良いですね。スタッフのトレーニングはどうですか？",
            "vi": "Tốt. Còn việc đào tạo cho nhân viên của chúng tôi thì sao?",
            "en": "Good. What about training for our staff?"
          }
        },
        {
          "role": "ai",
          "text": "We provide 3 training sessions at no extra cost.",
          "translations": {
            "ko": "추가 비용 없이 3번의 교육 세션을 제공합니다.",
            "zh": "我们提供3次免费培训。",
            "ja": "追加料金なしで3回のトレーニングを提供します。",
            "vi": "Chúng tôi cung cấp 3 buổi đào tạo miễn phí.",
            "en": "We provide 3 training sessions at no extra cost."
          }
        },
        {
          "role": "user",
          "text": "Excellent. I’d like that added to the proposal.",
          "translations": {
            "ko": "훌륭합니다. 그것을 제안서에 추가해 주세요.",
            "zh": "很好。我希望这个加入提案。",
            "ja": "素晴らしいです。それを提案に追加していただきたいです。",
            "vi": "Tuyệt vời. Tôi muốn điều đó được thêm vào đề xuất.",
            "en": "Excellent. I’d like that added to the proposal."
          }
        },
        {
          "role": "ai",
          "text": "Done. I’ll send the updated quote shortly.",
          "translations": {
            "ko": "알겠습니다. 곧 업데이트된 견적서를 보내드리겠습니다.",
            "zh": "好的。我马上会发送更新的报价。",
            "ja": "了解しました。すぐに更新した見積もりを送ります。",
            "vi": "Đã hoàn thành. Tôi sẽ gửi báo giá cập nhật ngay.",
            "en": "Done. I’ll send the updated quote shortly."
          }
        },
        {
          "role": "user",
          "text": "Can we sign by the end of this week?",
          "translations": {
            "ko": "이번 주말까지 서명할 수 있을까요?",
            "zh": "我们可以在本周末之前签署吗？",
            "ja": "今週末までに契約を締結できますか？",
            "vi": "Chúng tôi có thể ký vào cuối tuần này không?",
            "en": "Can we sign by the end of this week?"
          }
        },
        {
          "role": "ai",
          "text": "Absolutely. We’re ready when you are.",
          "translations": {
            "ko": "물론입니다. 언제든지 준비되어 있습니다.",
            "zh": "当然可以。我们随时准备好。",
            "ja": "もちろんです。お客様の準備ができ次第、すぐに対応します。",
            "vi": "Tất nhiên. Chúng tôi sẵn sàng khi bạn đã sẵn sàng.",
            "en": "Absolutely. We’re ready when you are."
          }
        },
        {
          "role": "user",
          "text": "I’ll review with my team and confirm.",
          "translations": {
            "ko": "팀과 검토하고 확인하겠습니다.",
            "zh": "我会和我的团队一起审查并确认。",
            "ja": "私のチームと確認してから連絡します。",
            "vi": "Tôi sẽ xem xét với đội ngũ của mình và xác nhận.",
            "en": "I’ll review with my team and confirm."
          }
        },
        {
          "role": "ai",
          "text": "Thank you. Looking forward to working together.",
          "translations": {
            "ko": "감사합니다. 함께 일하는 것을 기대하겠습니다.",
            "zh": "谢谢。期待与你们合作。",
            "ja": "ありがとうございます。一緒に仕事ができるのを楽しみにしています。",
            "vi": "Cảm ơn. Rất mong được hợp tác cùng bạn.",
            "en": "Thank you. Looking forward to working together."
          }
        },
        {
          "role": "user",
          "text": "Same here. Talk soon.",
          "translations": {
            "ko": "저도요. 곧 연락드리겠습니다.",
            "zh": "我也是。之后再聊。",
            "ja": "こちらこそ、また近いうちにお話ししましょう。",
            "vi": "Tôi cũng vậy. Gặp lại bạn sớm.",
            "en": "Same here. Talk soon."
          }
        },
        {
          "role": "ai",
          "text": "Have a great day.",
          "translations": {
            "ko": "좋은 하루 되세요.",
            "zh": "祝你今天过得愉快。",
            "ja": "素晴らしい一日を！",
            "vi": "Chúc bạn một ngày tốt lành.",
            "en": "Have a great day."
          }
        },
        {
          "role": "user",
          "text": "You too.",
          "translations": {
            "ko": "당신도요.",
            "zh": "你也是。",
            "ja": "あなたも！",
            "vi": "Bạn cũng vậy.",
            "en": "You too."
          }
        },
        {
          "role": "ai",
          "text": "Bye for now.",
          "translations": {
            "ko": "이제 안녕히.",
            "zh": "暂时再见。",
            "ja": "それでは、さようなら。",
            "vi": "Tạm biệt trong lúc này.",
            "en": "Bye for now."
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
        "ko": "회사 성과 발표하기",
        "en": "Presenting company performance",
        "zh": "展示公司业绩",
        "ja": "会社の業績を発表する",
        "vi": "Trình bày hiệu suất công ty"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Let’s start with our Q2 performance report.",
          "translations": {
            "ko": "2분기 성과 보고서부터 시작합시다.",
            "zh": "让我们从第二季度的业绩报告开始。",
            "ja": "Q2のパフォーマンスレポートから始めましょう。",
            "vi": "Hãy bắt đầu với báo cáo hiệu suất Q2 của chúng tôi.",
            "en": "Let’s start with our Q2 performance report."
          }
        },
        {
          "role": "user",
          "text": "I’m ready. Please go ahead.",
          "translations": {
            "ko": "준비되었습니다. 시작해 주세요.",
            "zh": "我准备好了。请继续。",
            "ja": "準備ができています。どうぞ進めてください。",
            "vi": "Tôi đã sẵn sàng. Hãy tiếp tục.",
            "en": "I’m ready. Please go ahead."
          }
        },
        {
          "role": "ai",
          "text": "Revenue grew by 15% compared to Q1.",
          "translations": {
            "ko": "1분기에 비해 수익이 15% 성장했습니다.",
            "zh": "与第一季度相比，收入增长了15%。",
            "ja": "Q1と比較して収益が15%増加しました。",
            "vi": "Doanh thu tăng 15% so với Q1.",
            "en": "Revenue grew by 15% compared to Q1."
          }
        },
        {
          "role": "user",
          "text": "That’s impressive. What drove the growth?",
          "translations": {
            "ko": "인상적이군요. 성장을 이끈 요인은 무엇인가요?",
            "zh": "那很令人印象深刻。是什么推动了增长？",
            "ja": "それは素晴らしいですね。何が成長を牽引しましたか？",
            "vi": "Đó là một kết quả ấn tượng. Điều gì đã thúc đẩy sự tăng trưởng?",
            "en": "That’s impressive. What drove the growth?"
          }
        },
        {
          "role": "ai",
          "text": "Mainly new customer acquisitions and product upgrades.",
          "translations": {
            "ko": "주로 새로운 고객 획득과 제품 업그레이드입니다.",
            "zh": "主要是新客户的获取和产品升级。",
            "ja": "主に新規顧客の獲得と製品のアップグレードです。",
            "vi": "Chủ yếu là việc thu hút khách hàng mới và nâng cấp sản phẩm.",
            "en": "Mainly new customer acquisitions and product upgrades."
          }
        },
        {
          "role": "user",
          "text": "How about customer retention?",
          "translations": {
            "ko": "고객 유지는 어떻게 되나요?",
            "zh": "那客户保留情况如何？",
            "ja": "顧客の保持はどうですか？",
            "vi": "Còn về việc giữ chân khách hàng thì sao?",
            "en": "How about customer retention?"
          }
        },
        {
          "role": "ai",
          "text": "It improved by 7%, reaching 85% retention.",
          "translations": {
            "ko": "7% 개선되어, 85%의 유지율을 달성했습니다.",
            "zh": "提高了7%，达到了85%的保留率。",
            "ja": "7%改善し、保持率は85%に達しました。",
            "vi": "Nó đã cải thiện 7%, đạt 85% khả năng giữ chân.",
            "en": "It improved by 7%, reaching 85% retention."
          }
        },
        {
          "role": "user",
          "text": "That’s a good sign.",
          "translations": {
            "ko": "좋은 신호네요.",
            "zh": "这是个好兆头。",
            "ja": "それは良い兆候ですね。",
            "vi": "Đó là một dấu hiệu tốt.",
            "en": "That’s a good sign."
          }
        },
        {
          "role": "ai",
          "text": "Operating expenses remained steady.",
          "translations": {
            "ko": "운영 비용은 일정하게 유지되었습니다.",
            "zh": "运营费用保持稳定。",
            "ja": "営業費用は安定しています。",
            "vi": "Chi phí hoạt động vẫn ổn định.",
            "en": "Operating expenses remained steady."
          }
        },
        {
          "role": "user",
          "text": "Can we see projections for Q3?",
          "translations": {
            "ko": "3분기에 대한 예상치를 볼 수 있을까요?",
            "zh": "我们可以看到第三季度的预测吗？",
            "ja": "Q3の予測を見ることはできますか？",
            "vi": "Chúng tôi có thể xem dự báo cho Q3 không?",
            "en": "Can we see projections for Q3?"
          }
        },
        {
          "role": "ai",
          "text": "Certainly. We expect another 10% growth.",
          "translations": {
            "ko": "그럼요. 우리는 추가로 10%의 성장을 예상합니다.",
            "zh": "当然。我们预计再增长10%。",
            "ja": "もちろんです。さらに10%の成長を予想しています。",
            "vi": "Chắc chắn. Chúng tôi dự kiến sẽ tăng thêm 10%.",
            "en": "Certainly. We expect another 10% growth."
          }
        },
        {
          "role": "user",
          "text": "Great. Any risks we should consider?",
          "translations": {
            "ko": "좋습니다. 고려해야 할 위험 요소는 무엇인가요?",
            "zh": "很好。我们需要考虑的风险有哪些？",
            "ja": "素晴らしいですね。考慮すべきリスクはありますか？",
            "vi": "Tuyệt vời. Có rủi ro nào chúng ta nên xem xét không?",
            "en": "Great. Any risks we should consider?"
          }
        },
        {
          "role": "ai",
          "text": "Supply chain delays may affect delivery times.",
          "translations": {
            "ko": "공급망 지연이 배송 시간에 영향을 미칠 수 있습니다.",
            "zh": "供应链延迟可能会影响交货时间。",
            "ja": "供給チェーンの遅延が配送時間に影響を及ぼす可能性があります。",
            "vi": "Sự chậm trễ trong chuỗi cung ứng có thể ảnh hưởng đến thời gian giao hàng.",
            "en": "Supply chain delays may affect delivery times."
          }
        },
        {
          "role": "user",
          "text": "Thanks for the heads-up.",
          "translations": {
            "ko": "미리 알려주셔서 감사합니다.",
            "zh": "谢谢你的提醒。",
            "ja": "事前に教えていただきありがとうございます。",
            "vi": "Cảm ơn đã cảnh báo.",
            "en": "Thanks for the heads-up."
          }
        },
        {
          "role": "ai",
          "text": "Here’s a chart summarizing all key figures.",
          "translations": {
            "ko": "여기 모든 핵심 수치를 요약한 차트가 있습니다.",
            "zh": "这是一个总结所有关键数据的图表。",
            "ja": "ここにすべての主要な数字をまとめたチャートがあります。",
            "vi": "Đây là biểu đồ tóm tắt tất cả các con số chính.",
            "en": "Here’s a chart summarizing all key figures."
          }
        },
        {
          "role": "user",
          "text": "That’s very helpful.",
          "translations": {
            "ko": "매우 도움이 됩니다.",
            "zh": "这非常有帮助。",
            "ja": "それは非常に役立ちます。",
            "vi": "Điều đó rất hữu ích.",
            "en": "That’s very helpful."
          }
        },
        {
          "role": "ai",
          "text": "Any questions before we move on?",
          "translations": {
            "ko": "다음 안건으로 넘어가기 전에 질문이 있나요?",
            "zh": "在我们继续下一个议程项目之前，有任何问题吗？",
            "ja": "次に進む前に質問はありますか？",
            "vi": "Có câu hỏi nào trước khi chúng tôi tiếp tục không?",
            "en": "Any questions before we move on?"
          }
        },
        {
          "role": "user",
          "text": "Not right now.",
          "translations": {
            "ko": "지금은 없습니다.",
            "zh": "现在没有。",
            "ja": "今のところはありません。",
            "vi": "Không phải lúc này.",
            "en": "Not right now."
          }
        },
        {
          "role": "ai",
          "text": "Then let’s continue to the next agenda item.",
          "translations": {
            "ko": "그럼 다음 안건으로 넘어가겠습니다.",
            "zh": "那我们继续下一个议程项目。",
            "ja": "それでは、次の議題に進みましょう。",
            "vi": "Vậy thì hãy tiếp tục với mục tiếp theo trong nghị sự.",
            "en": "Then let’s continue to the next agenda item."
          }
        },
        {
          "role": "user",
          "text": "Alright.",
          "translations": {
            "ko": "알겠습니다.",
            "zh": "好的。",
            "ja": "了解です。",
            "vi": "Được rồi.",
            "en": "Alright."
          }
        }
      ]
    },
    {
      "description": {
        "ko": "전문적으로 불만 처리하기",
        "en": "Handling a complaint professionally",
        "zh": "专业处理投诉",
        "ja": "プロフェッショナルにクレームを処理する",
        "vi": "Xử lý một khiếu nại một cách chuyên nghiệp"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Hello, how can I help you today?",
          "translations": {
            "ko": "안녕하세요, 어떻게 도와드릴까요?",
            "zh": "你好，今天有什么可以帮助你的？",
            "ja": "こんにちは、何かお手伝いできることがありますか？",
            "vi": "Xin chào, tôi có thể giúp gì cho bạn hôm nay?",
            "en": "Hello, how can I help you today?"
          }
        },
        {
          "role": "user",
          "text": "I’m unhappy with the product I received.",
          "translations": {
            "ko": "받은 제품에 만족하지 못했습니다.",
            "zh": "我对收到的产品不满意。",
            "ja": "私は受け取った商品に不満があります。",
            "vi": "Tôi không hài lòng với sản phẩm mà tôi đã nhận.",
            "en": "I’m unhappy with the product I received."
          }
        },
        {
          "role": "ai",
          "text": "I’m sorry to hear that. Can you tell me what’s wrong?",
          "translations": {
            "ko": "그렇군요, 무슨 문제가 있었나요?",
            "zh": "很抱歉听到这个。你能告诉我出了什么问题吗？",
            "ja": "それは申し訳ありません。何が問題だったのですか？",
            "vi": "Tôi rất tiếc khi nghe điều đó. Bạn có thể cho tôi biết vấn đề là gì không?",
            "en": "I’m sorry to hear that. Can you tell me what’s wrong?"
          }
        },
        {
          "role": "user",
          "text": "It arrived damaged and didn’t work properly.",
          "translations": {
            "ko": "제품이 파손되어 도착하고 제대로 작동하지 않았습니다.",
            "zh": "它到达时已经损坏，无法正常工作。",
            "ja": "商品が破損しており、正常に動作しませんでした。",
            "vi": "Nó bị hỏng khi tôi nhận được và không hoạt động đúng cách.",
            "en": "It arrived damaged and didn’t work properly."
          }
        },
        {
          "role": "ai",
          "text": "I understand. We’ll look into this immediately.",
          "translations": {
            "ko": "이해했습니다. 즉시 조사하겠습니다.",
            "zh": "我明白。我们会立即处理这个问题。",
            "ja": "それは理解しました。すぐに調査します。",
            "vi": "Tôi hiểu. Chúng tôi sẽ xem xét vấn đề này ngay lập tức.",
            "en": "I understand. We’ll look into this immediately."
          }
        },
        {
          "role": "user",
          "text": "I’d appreciate that.",
          "translations": {
            "ko": "감사하겠습니다.",
            "zh": "我会很感激的。",
            "ja": "それを評価します。",
            "vi": "Tôi sẽ rất biết ơn nếu bạn làm vậy.",
            "en": "I’d appreciate that."
          }
        },
        {
          "role": "ai",
          "text": "Would you prefer a refund or a replacement?",
          "translations": {
            "ko": "환불을 원하시나요, 아니면 교환을 원하시나요?",
            "zh": "你更愿意退款还是更换？",
            "ja": "払い戻しと交換、どちらがよろしいですか？",
            "vi": "Bạn có muốn hoàn tiền hay thay thế không?",
            "en": "Would you prefer a refund or a replacement?"
          }
        },
        {
          "role": "user",
          "text": "A replacement would be great.",
          "translations": {
            "ko": "교환을 원하겠습니다.",
            "zh": "更换一个就好。",
            "ja": "交換をお願いします。",
            "vi": "Tôi muốn thay thế.",
            "en": "A replacement would be great."
          }
        },
        {
          "role": "ai",
          "text": "We’ll ship a new one today with express delivery.",
          "translations": {
            "ko": "오늘 특급 배송으로 새 제품을 보내드리겠습니다.",
            "zh": "我们今天会用快递寄出一个新的。",
            "ja": "本日中に新しいものをエクスプレスで発送します。",
            "vi": "Chúng tôi sẽ gửi một cái mới ngay hôm nay với dịch vụ giao hàng nhanh.",
            "en": "We’ll ship a new one today with express delivery."
          }
        },
        {
          "role": "user",
          "text": "Thank you for your quick response.",
          "translations": {
            "ko": "빠른 대응에 감사드립니다.",
            "zh": "感谢你的快速回应。",
            "ja": "早急な対応をありがとうございます。",
            "vi": "Cảm ơn bạn vì đã phản hồi nhanh.",
            "en": "Thank you for your quick response."
          }
        },
        {
          "role": "ai",
          "text": "We’ll also include a 10% discount on your next order.",
          "translations": {
            "ko": "다음 주문에서 10% 할인을 드리겠습니다.",
            "zh": "我们还会在你的下一次订单上提供10%的折扣。",
            "ja": "次回のご注文に10%の割引を適用します。",
            "vi": "Chúng tôi cũng sẽ bao gồm một giảm giá 10% cho đơn hàng tiếp theo của bạn.",
            "en": "We’ll also include a 10% discount on your next order."
          }
        },
        {
          "role": "user",
          "text": "That’s very kind of you.",
          "translations": {
            "ko": "너무 친절하시군요.",
            "zh": "那真是太好了。",
            "ja": "それはとても親切ですね。",
            "vi": "Điều đó rất tốt bụng của bạn.",
            "en": "That’s very kind of you."
          }
        },
        {
          "role": "ai",
          "text": "We value your satisfaction.",
          "translations": {
            "ko": "우리는 고객 만족을 중요시합니다.",
            "zh": "我们重视你的满意度。",
            "ja": "お客様の満足度を大切にしています。",
            "vi": "Chúng tôi coi trọng sự hài lòng của bạn.",
            "en": "We value your satisfaction."
          }
        },
        {
          "role": "user",
          "text": "Thanks. I’ll continue shopping with you.",
          "translations": {
            "ko": "감사합니다. 계속해서 여기서 쇼핑하겠습니다.",
            "zh": "谢谢。我会继续在你们这里购物。",
            "ja": "ありがとう。これからもあなたとお買い物を続けます。",
            "vi": "Cảm ơn. Tôi sẽ tiếp tục mua sắm với bạn.",
            "en": "Thanks. I’ll continue shopping with you."
          }
        },
        {
          "role": "ai",
          "text": "We appreciate your understanding.",
          "translations": {
            "ko": "이해해 주셔서 감사합니다.",
            "zh": "我们感谢你的理解。",
            "ja": "ご理解いただきありがとうございます。",
            "vi": "Chúng tôi đánh giá cao sự thông cảm của bạn.",
            "en": "We appreciate your understanding."
          }
        },
        {
          "role": "user",
          "text": "Everyone makes mistakes, it’s how you handle them.",
          "translations": {
            "ko": "모두 실수를 합니다, 그것을 어떻게 처리하는지가 중요합니다.",
            "zh": "每个人都会犯错误，关键是如何处理。",
            "ja": "誰もが間違いを犯します、それをどう対処するかが重要です。",
            "vi": "Mọi người đều mắc lỗi, quan trọng là cách bạn xử lý chúng.",
            "en": "Everyone makes mistakes, it’s how you handle them."
          }
        },
        {
          "role": "ai",
          "text": "Absolutely. We’ll do better moving forward.",
          "translations": {
            "ko": "그렇습니다. 앞으로 더 잘하겠습니다.",
            "zh": "绝对。我们以后会做得更好。",
            "ja": "確かにそうです。これからもより良い対応を心掛けます。",
            "vi": "Tuyệt đối. Chúng tôi sẽ làm tốt hơn trong tương lai.",
            "en": "Absolutely. We’ll do better moving forward."
          }
        },
        {
          "role": "user",
          "text": "Thanks again.",
          "translations": {
            "ko": "다시 한번 감사드립니다.",
            "zh": "再次感谢。",
            "ja": "また、ありがとうございます。",
            "vi": "Cảm ơn một lần nữa.",
            "en": "Thanks again."
          }
        },
        {
          "role": "ai",
          "text": "Have a great day.",
          "translations": {
            "ko": "좋은 하루 되세요.",
            "zh": "祝你今天过得愉快。",
            "ja": "素晴らしい一日を！",
            "vi": "Chúc bạn một ngày tốt lành.",
            "en": "Have a great day."
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
        "ko": "건설적인 피드백 제공하기",
        "en": "Giving constructive feedback",
        "zh": "提供建设性反馈",
        "ja": "建設的なフィードバックを与える",
        "vi": "Đưa ra phản hồi xây dựng"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Thanks for joining this quick feedback session.",
          "translations": {
            "ko": "이번 빠른 피드백 세션에 참여해 주셔서 감사합니다.",
            "zh": "感谢你参加这次快速反馈会。",
            "ja": "このフィードバックセッションに参加していただきありがとうございます。",
            "vi": "Cảm ơn bạn đã tham gia phiên phản hồi nhanh này.",
            "en": "Thanks for joining this quick feedback session."
          }
        },
        {
          "role": "user",
          "text": "Sure, I’m happy to receive feedback.",
          "translations": {
            "ko": "그럼요, 피드백을 받는 것이 기쁩니다.",
            "zh": "当然，我很乐意接受反馈。",
            "ja": "はい、フィードバックを受けるのは嬉しいです。",
            "vi": "Chắc chắn, tôi rất vui khi nhận được phản hồi.",
            "en": "Sure, I’m happy to receive feedback."
          }
        },
        {
          "role": "ai",
          "text": "First of all, great job on the last presentation.",
          "translations": {
            "ko": "먼저, 마지막 발표에 대해 잘했습니다.",
            "zh": "首先，你在上次的演示中做得很好。",
            "ja": "まず最初に、最後のプレゼンテーションは素晴らしかったです。",
            "vi": "Đầu tiên, công việc tuyệt vời trong bài thuyết trình cuối cùng.",
            "en": "First of all, great job on the last presentation."
          }
        },
        {
          "role": "user",
          "text": "Thank you! I worked hard on that.",
          "translations": {
            "ko": "감사합니다! 그것에 많은 노력을 기울였습니다.",
            "zh": "谢谢！我为此付出了很多努力。",
            "ja": "ありがとうございます！それには一生懸命取り組みました。",
            "vi": "Cảm ơn! Tôi đã làm việc chăm chỉ với nó.",
            "en": "Thank you! I worked hard on that."
          }
        },
        {
          "role": "ai",
          "text": "One area to improve is pacing—try to slow down a bit.",
          "translations": {
            "ko": "개선할 부분은 속도입니다 - 조금 느리게 해보세요.",
            "zh": "需要改进的一个地方是节奏——试着慢一点。",
            "ja": "改善すべき点はペーシングです。もう少しゆっくりと話すようにしてみてください。",
            "vi": "Một lĩnh vực cần cải thiện là tốc độ - hãy cố gắng chậm lại một chút.",
            "en": "One area to improve is pacing—try to slow down a bit."
          }
        },
        {
          "role": "user",
          "text": "Noted. I’ll be more mindful next time.",
          "translations": {
            "ko": "알겠습니다. 다음에는 더 주의하겠습니다.",
            "zh": "明白了。我下次会更注意的。",
            "ja": "了解しました。次回からはもっと注意深くなります。",
            "vi": "Đã ghi nhận. Tôi sẽ chú ý hơn lần sau.",
            "en": "Noted. I’ll be more mindful next time."
          }
        },
        {
          "role": "ai",
          "text": "Also, the slides were slightly text-heavy.",
          "translations": {
            "ko": "또한 슬라이드가 약간 텍스트가 많았습니다.",
            "zh": "此外，幻灯片有点文字过多。",
            "ja": "また、スライドが少しテキストが多かったです。",
            "vi": "Ngoài ra, các slide hơi nặng về văn bản.",
            "en": "Also, the slides were slightly text-heavy."
          }
        },
        {
          "role": "user",
          "text": "I see. I’ll simplify them.",
          "translations": {
            "ko": "알겠습니다. 간소화하겠습니다.",
            "zh": "我明白了。我会简化它们。",
            "ja": "なるほど、それを簡素化します。",
            "vi": "Tôi hiểu. Tôi sẽ đơn giản hóa chúng.",
            "en": "I see. I’ll simplify them."
          }
        },
        {
          "role": "ai",
          "text": "Your voice was clear and confident, though.",
          "translations": {
            "ko": "하지만 목소리는 명확하고 자신감 있었습니다.",
            "zh": "不过你的声音很清晰，也很自信。",
            "ja": "しかし、あなたの声ははっきりと自信に満ちていました。",
            "vi": "Tuy nhiên, giọng nói của bạn rõ ràng và tự tin.",
            "en": "Your voice was clear and confident, though."
          }
        },
        {
          "role": "user",
          "text": "That’s great to hear.",
          "translations": {
            "ko": "그렇게 말씀해 주셔서 기쁩니다.",
            "zh": "听到这个很高兴。",
            "ja": "それは嬉しいです。",
            "vi": "Rất vui khi nghe điều đó.",
            "en": "That’s great to hear."
          }
        },
        {
          "role": "ai",
          "text": "Do you feel comfortable taking the lead next time?",
          "translations": {
            "ko": "다음 번에 주도할 수 있을까요?",
            "zh": "你觉得下次能带头吗？",
            "ja": "次回はリードを取ることに抵抗はありませんか？",
            "vi": "Bạn có cảm thấy thoải mái khi dẫn dắt lần tới không?",
            "en": "Do you feel comfortable taking the lead next time?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I’d like to give it a shot.",
          "translations": {
            "ko": "네, 도전해 보고 싶습니다.",
            "zh": "是的，我想试一试。",
            "ja": "はい、挑戦してみたいと思います。",
            "vi": "Vâng, tôi muốn thử.",
            "en": "Yes, I’d like to give it a shot."
          }
        },
        {
          "role": "ai",
          "text": "Awesome. Let’s plan for that.",
          "translations": {
            "ko": "좋습니다. 그렇게 계획하겠습니다.",
            "zh": "太好了。我们计划一下。",
            "ja": "素晴らしいです。それを計画しましょう。",
            "vi": "Tuyệt vời. Hãy lên kế hoạch cho điều đó.",
            "en": "Awesome. Let’s plan for that."
          }
        },
        {
          "role": "user",
          "text": "Thanks for the support.",
          "translations": {
            "ko": "지원에 감사드립니다.",
            "zh": "感谢你的支持。",
            "ja": "サポートしていただきありがとうございます。",
            "vi": "Cảm ơn vì đã hỗ trợ.",
            "en": "Thanks for the support."
          }
        },
        {
          "role": "ai",
          "text": "You're doing well. Just small tweaks.",
          "translations": {
            "ko": "잘하고 계십니다. 약간의 수정만 필요합니다.",
            "zh": "你做得很好。只需要小小的调整。",
            "ja": "あなたはうまくやっています。ちょっとした調整だけです。",
            "vi": "Bạn đang làm tốt. Chỉ cần điều chỉnh nhỏ.",
            "en": "You're doing well. Just small tweaks."
          }
        },
        {
          "role": "user",
          "text": "I appreciate the feedback.",
          "translations": {
            "ko": "피드백에 감사드립니다.",
            "zh": "我很感谢你的反馈。",
            "ja": "フィードバックをいただき感謝しています。",
            "vi": "Tôi đánh giá cao phản hồi.",
            "en": "I appreciate the feedback."
          }
        },
        {
          "role": "ai",
          "text": "Let me know if you need help preparing.",
          "translations": {
            "ko": "준비하는 데 도움이 필요하면 알려주세요.",
            "zh": "如果你在准备过程中需要帮助，就告诉我。",
            "ja": "準備に助けが必要なら、何でも言ってください。",
            "vi": "Hãy cho tôi biết nếu bạn cần giúp đỡ trong việc chuẩn bị.",
            "en": "Let me know if you need help preparing."
          }
        },
        {
          "role": "user",
          "text": "Will do. Thanks again.",
          "translations": {
            "ko": "그렇게 하겠습니다. 다시 한번 감사드립니다.",
            "zh": "好的，再次感谢。",
            "ja": "了解しました。ありがとうございます。",
            "vi": "Tôi sẽ làm như vậy. Cảm ơn một lần nữa.",
            "en": "Will do. Thanks again."
          }
        },
        {
          "role": "ai",
          "text": "Keep up the great work.",
          "translations": {
            "ko": "계속 좋은 일을 해주세요.",
            "zh": "继续保持出色的工作。",
            "ja": "素晴らしい仕事を続けてください。",
            "vi": "Tiếp tục làm tốt.",
            "en": "Keep up the great work."
          }
        },
        {
          "role": "user",
          "text": "I will!",
          "translations": {
            "ko": "그렇게 하겠습니다!",
            "zh": "我会的！",
            "ja": "そのつもりです！",
            "vi": "Tôi sẽ!",
            "en": "I will!"
          }
        }
      ]
    },
    {
      "description": {
        "ko": "회의 결과 요약하기",
        "en": "Summarizing the meeting outcome",
        "zh": "总结会议结果",
        "ja": "会議の結果をまとめる",
        "vi": "Tóm tắt kết quả cuộc họp"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Let’s quickly summarize today’s meeting.",
          "translations": {
            "ko": "오늘 회의를 간략하게 요약해 봅시다.",
            "zh": "让我们快速总结一下今天的会议。",
            "ja": "今日の会議を簡単にまとめましょう。",
            "vi": "Hãy tóm tắt nhanh cuộc họp hôm nay.",
            "en": "Let’s quickly summarize today’s meeting."
          }
        },
        {
          "role": "user",
          "text": "Sure, that sounds good.",
          "translations": {
            "ko": "그럼요, 좋습니다.",
            "zh": "好的，听起来不错。",
            "ja": "はい、それは良い考えです。",
            "vi": "Đúng, điều đó nghe có vẻ tốt.",
            "en": "Sure, that sounds good."
          }
        },
        {
          "role": "ai",
          "text": "We’ve agreed to launch the campaign next Monday.",
          "translations": {
            "ko": "다음 월요일에 캠페인을 시작하기로 합의했습니다.",
            "zh": "我们已经同意下周一启动活动。",
            "ja": "来週の月曜日にキャンペーンを開始することに合意しました。",
            "vi": "Chúng tôi đã đồng ý ra mắt chiến dịch vào thứ Hai tới.",
            "en": "We’ve agreed to launch the campaign next Monday."
          }
        },
        {
          "role": "user",
          "text": "Yes, and John will handle the final assets.",
          "translations": {
            "ko": "네, 그리고 존이 최종 자료를 처리할 것입니다.",
            "zh": "是的，John将处理最后的资产。",
            "ja": "はい、そしてジョンが最終的なアセットを取り扱います。",
            "vi": "Đúng, và John sẽ xử lý tài sản cuối cùng.",
            "en": "Yes, and John will handle the final assets."
          }
        },
        {
          "role": "ai",
          "text": "The budget was approved at $25,000.",
          "translations": {
            "ko": "예산은 25,000달러로 승인되었습니다.",
            "zh": "预算已经批准为25,000美元。",
            "ja": "予算は25,000ドルで承認されました。",
            "vi": "Ngân sách đã được phê duyệt ở mức 25.000 đô la.",
            "en": "The budget was approved at $25,000."
          }
        },
        {
          "role": "user",
          "text": "I’ll send the payment request to finance.",
          "translations": {
            "ko": "재무팀에게 결제 요청을 보내겠습니다.",
            "zh": "我会向财务部门发送付款请求。",
            "ja": "財務部に支払いリクエストを送ります。",
            "vi": "Tôi sẽ gửi yêu cầu thanh toán cho phòng tài chính.",
            "en": "I’ll send the payment request to finance."
          }
        },
        {
          "role": "ai",
          "text": "Marketing will prepare the social media posts.",
          "translations": {
            "ko": "마케팅 팀이 소셜 미디어 게시물을 준비할 것입니다.",
            "zh": "营销部门将准备社交媒体帖子。",
            "ja": "マーケティングはソーシャルメディアの投稿を準備します。",
            "vi": "Marketing sẽ chuẩn bị các bài đăng trên mạng xã hội.",
            "en": "Marketing will prepare the social media posts."
          }
        },
        {
          "role": "user",
          "text": "I'll coordinate with them this afternoon.",
          "translations": {
            "ko": "오늘 오후에 그들과 조정하겠습니다.",
            "zh": "我今天下午会和他们协调。",
            "ja": "今日の午後に彼らと調整します。",
            "vi": "Tôi sẽ phối hợp với họ vào chiều nay.",
            "en": "I'll coordinate with them this afternoon."
          }
        },
        {
          "role": "ai",
          "text": "And we'll have another check-in on Friday.",
          "translations": {
            "ko": "그리고 금요일에 다시 확인하겠습니다.",
            "zh": "我们周五还会再次检查。",
            "ja": "そして、金曜日にもう一度チェックインを行います。",
            "vi": "Và chúng tôi sẽ có một cuộc kiểm tra khác vào thứ Sáu.",
            "en": "And we'll have another check-in on Friday."
          }
        },
        {
          "role": "user",
          "text": "I’ve added it to the calendar.",
          "translations": {
            "ko": "캘린더에 추가했습니다.",
            "zh": "我已经把它加到日历上了。",
            "ja": "カレンダーに追加しました。",
            "vi": "Tôi đã thêm nó vào lịch.",
            "en": "I’ve added it to the calendar."
          }
        },
        {
          "role": "ai",
          "text": "Any risks we need to highlight?",
          "translations": {
            "ko": "강조해야 할 위험 요소는 무엇인가요?",
            "zh": "我们需要突出的风险有哪些？",
            "ja": "ハイライトすべきリスクはありますか？",
            "vi": "Có rủi ro nào chúng ta cần nêu bật không?",
            "en": "Any risks we need to highlight?"
          }
        },
        {
          "role": "user",
          "text": "Just the pending image approvals.",
          "translations": {
            "ko": "이미지 승인이 보류 중인 것만입니다.",
            "zh": "只有待批准的图像。",
            "ja": "画像の承認が保留中だけです。",
            "vi": "Chỉ là việc chờ phê duyệt hình ảnh.",
            "en": "Just the pending image approvals."
          }
        },
        {
          "role": "ai",
          "text": "Alright, I’ll follow up with design.",
          "translations": {
            "ko": "알겠습니다, 디자인 팀에게 후속 조치하겠습니다.",
            "zh": "好的，我会跟进设计部门。",
            "ja": "了解しました、デザイン部門にフォローアップします。",
            "vi": "Được, tôi sẽ theo dõi với thiết kế.",
            "en": "Alright, I’ll follow up with design."
          }
        },
        {
          "role": "user",
          "text": "Thanks. That should keep us on track.",
          "translations": {
            "ko": "감사합니다. 그렇게 하면 계획대로 진행될 것입니다.",
            "zh": "谢谢。这应该能让我们保持进度。",
            "ja": "ありがとう。それで私たちは順調に進むべきです。",
            "vi": "Cảm ơn. Điều đó nên giữ chúng ta theo đúng lịch trình.",
            "en": "Thanks. That should keep us on track."
          }
        },
        {
          "role": "ai",
          "text": "Anything else to add?",
          "translations": {
            "ko": "추가할 사항이 있나요?",
            "zh": "还有其他要添加的吗？",
            "ja": "追加することはありますか？",
            "vi": "Còn điều gì khác cần thêm vào không?",
            "en": "Anything else to add?"
          }
        },
        {
          "role": "user",
          "text": "No, I think that covers it.",
          "translations": {
            "ko": "아니요, 그것으로 다인 것 같습니다.",
            "zh": "没有，我想这就涵盖了全部。",
            "ja": "いえ、それで全てです。",
            "vi": "Không, tôi nghĩ đã đủ rồi.",
            "en": "No, I think that covers it."
          }
        },
        {
          "role": "ai",
          "text": "Then we’re done. Great work, everyone.",
          "translations": {
            "ko": "그럼 끝났습니다. 모두 수고하셨습니다.",
            "zh": "那我们就结束了。大家做得很好。",
            "ja": "それでは、終了です。皆さん、お疲れ様でした。",
            "vi": "Vậy thì chúng ta đã xong. Công việc tuyệt vời, mọi người.",
            "en": "Then we’re done. Great work, everyone."
          }
        },
        {
          "role": "user",
          "text": "Thanks, talk to you all soon.",
          "translations": {
            "ko": "감사합니다, 곧 연락드리겠습니다.",
            "zh": "谢谢，稍后再和你们联系。",
            "ja": "ありがとう、また近いうちにお話ししましょう。",
            "vi": "Cảm ơn, hẹn gặp lại mọi người sớm.",
            "en": "Thanks, talk to you all soon."
          }
        },
        {
          "role": "ai",
          "text": "Take care!",
          "translations": {
            "ko": "안녕히 계세요!",
            "zh": "保重！",
            "ja": "お元気で！",
            "vi": "Chăm sóc bản thân!",
            "en": "Take care!"
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
  "intermediate": [
    {
      "description": {
        "ko": "사업 파트너에게 자신을 소개하기",
        "zh": "向商业伙伴自我介绍",
        "ja": "ビジネスパートナーへの自己紹介",
        "vi": "Giới thiệu bản thân với đối tác kinh doanh"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Hello, it's great to finally meet you in person.",
          "translations": {
            "ko": "안녕하세요, 드디어 직접 만나게 되어 반갑습니다.",
            "zh": "你好，很高兴终于能够亲自见到你。",
            "ja": "こんにちは、ついに直接お会いできて嬉しいです。",
            "vi": "Xin chào, rất vui khi cuối cùng cũng được gặp bạn trực tiếp."
          }
        },
        {
          "role": "user",
          "text": "Likewise, I've been looking forward to this meeting.",
          "translations": {
            "ko": "저도 이번 만남을 기대하고 있었습니다.",
            "zh": "同样，我一直期待着这次会面。",
            "ja": "同じく、この会合を楽しみにしていました。",
            "vi": "Tôi cũng vậy, tôi đã mong chờ cuộc gặp này."
          }
        },
        {
          "role": "ai",
          "text": "I'm from the strategy department at HQ.",
          "translations": {
            "ko": "저는 본사 전략부서에서 일하고 있습니다.",
            "zh": "我来自总部的战略部门。",
            "ja": "私は本社の戦略部門から来ました。",
            "vi": "Tôi đến từ phòng chiến lược tại trụ sở chính."
          }
        },
        {
          "role": "user",
          "text": "Nice! I work in the R&D team.",
          "translations": {
            "ko": "좋네요! 저는 R&D 팀에서 일하고 있습니다.",
            "zh": "很好！我在研发团队工作。",
            "ja": "いいですね！私はR&Dチームに所属しています。",
            "vi": "Tốt quá! Tôi làm việc trong nhóm R&D."
          }
        },
        {
          "role": "ai",
          "text": "We've heard a lot about your recent successes.",
          "translations": {
            "ko": "여러분의 최근 성과에 대해 많이 들었습니다.",
            "zh": "我们听说了你们最近的一些成功。",
            "ja": "あなた方の最近の成功についてたくさん聞いています。",
            "vi": "Chúng tôi đã nghe nhiều về những thành công gần đây của bạn."
          }
        },
        {
          "role": "user",
          "text": "Thank you. We've been growing steadily.",
          "translations": {
            "ko": "감사합니다. 저희는 꾸준히 성장하고 있습니다.",
            "zh": "谢谢。我们一直在稳步发展。",
            "ja": "ありがとうございます。我々は着実に成長しています。",
            "vi": "Cảm ơn. Chúng tôi đã phát triển ổn định."
          }
        },
        {
          "role": "ai",
          "text": "How long have you been in this industry?",
          "translations": {
            "ko": "이 업계에서 얼마나 오래 일하셨나요?",
            "zh": "你在这个行业工作多久了？",
            "ja": "あなたはこの業界でどのくらいの期間働いていますか？",
            "vi": "Bạn đã làm trong ngành này bao lâu rồi?"
          }
        },
        {
          "role": "user",
          "text": "Over ten years now.",
          "translations": {
            "ko": "이제 10년이 넘었습니다.",
            "zh": "已经超过十年了。",
            "ja": "今では10年以上になります。",
            "vi": "Đã hơn mười năm rồi."
          }
        },
        {
          "role": "ai",
          "text": "That's impressive. What's your company's main focus?",
          "translations": {
            "ko": "대단하네요. 귀사의 주요 초점은 무엇인가요?",
            "zh": "那真是令人印象深刻。你们公司的主要关注点是什么？",
            "ja": "それは素晴らしいですね。あなたの会社の主な焦点は何ですか？",
            "vi": "Thật ấn tượng. Trọng tâm chính của công ty bạn là gì?"
          }
        },
        {
          "role": "user",
          "text": "We mainly focus on enterprise software.",
          "translations": {
            "ko": "저희는 주로 기업용 소프트웨어에 초점을 맞추고 있습니다.",
            "zh": "我们主要关注企业软件。",
            "ja": "我々は主にエンタープライズソフトウェアに焦点を当てています。",
            "vi": "Chúng tôi chủ yếu tập trung vào phần mềm doanh nghiệp."
          }
        },
        {
          "role": "ai",
          "text": "Do you often collaborate with overseas teams?",
          "translations": {
            "ko": "해외 팀과 자주 협업하시나요?",
            "zh": "你们经常与海外团队合作吗？",
            "ja": "海外のチームと頻繁に協力していますか？",
            "vi": "Bạn có thường xuyên hợp tác với các đội ngũ ở nước ngoài không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, quite frequently, actually.",
          "translations": {
            "ko": "네, 사실 꽤 자주 협업하고 있습니다.",
            "zh": "是的，实际上相当频繁。",
            "ja": "はい、実際にはかなり頻繁にです。",
            "vi": "Có, thực sự là khá thường xuyên."
          }
        },
        {
          "role": "ai",
          "text": "Let's exchange contact details before we leave.",
          "translations": {
            "ko": "떠나기 전에 연락처를 교환하면 좋겠습니다.",
            "zh": "在我们离开之前，让我们交换联系方式。",
            "ja": "帰る前に連絡先を交換しましょう。",
            "vi": "Hãy trao đổi thông tin liên lạc trước khi chúng ta rời đi."
          }
        },
        {
          "role": "user",
          "text": "Sure, let me give you my business card.",
          "translations": {
            "ko": "그럼요, 제 명함을 드리겠습니다.",
            "zh": "好的，让我给你我的名片。",
            "ja": "もちろん、私の名刺をお渡しします。",
            "vi": "Chắc chắn, để tôi đưa bạn danh thiếp của tôi."
          }
        },
        {
          "role": "ai",
          "text": "We're planning to visit your office next quarter.",
          "translations": {
            "ko": "다음 분기에 귀사를 방문할 계획입니다.",
            "zh": "我们计划下季度访问你们的办公室。",
            "ja": "来期にはあなたのオフィスを訪問する予定です。",
            "vi": "Chúng tôi đang lên kế hoạch thăm văn phòng của bạn vào quý tới."
          }
        },
        {
          "role": "user",
          "text": "That would be great. Looking forward to it.",
          "translations": {
            "ko": "좋겠네요. 기대하겠습니다.",
            "zh": "那太好了。期待着。",
            "ja": "それは素晴らしいです。楽しみにしています。",
            "vi": "Điều đó thật tuyệt. Mong chờ điều đó."
          }
        },
        {
          "role": "ai",
          "text": "Would you be interested in a joint project?",
          "translations": {
            "ko": "공동 프로젝트에 관심 있으신가요?",
            "zh": "你对联合项目有兴趣吗？",
            "ja": "共同プロジェクトに興味はありますか？",
            "vi": "Bạn có quan tâm đến một dự án chung không?"
          }
        },
        {
          "role": "user",
          "text": "Absolutely, I'd love to hear more.",
          "translations": {
            "ko": "당연히요, 더 자세히 듣고 싶습니다.",
            "zh": "当然，我很想听听更多。",
            "ja": "是非、詳細を聞きたいです。",
            "vi": "Chắc chắn, tôi rất muốn nghe thêm."
          }
        },
        {
          "role": "ai",
          "text": "Thank you for your time today.",
          "translations": {
            "ko": "오늘 시간 내주셔서 감사합니다.",
            "zh": "感谢你今天抽出时间。",
            "ja": "今日はお時間をいただきありがとうございました。",
            "vi": "Cảm ơn bạn đã dành thời gian hôm nay."
          }
        },
        {
          "role": "user",
          "text": "You're welcome. Let's keep in touch.",
          "translations": {
            "ko": "천만에요. 계속 연락하도록 하죠.",
            "zh": "不客气。让我们保持联系。",
            "ja": "どういたしまして。連絡を取り合いましょう。",
            "vi": "Không có gì. Hãy giữ liên lạc."
          }
        }
      ]
    },
    {
      "description": {
        "ko": "계약 협상하기",
        "zh": "商谈合同",
        "ja": "契約の交渉",
        "vi": "Đàm phán hợp đồng"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Let's review the contract together.",
          "translations": {
            "ko": "계약서를 함께 검토해봅시다.",
            "zh": "让我们一起审查合同。",
            "ja": "一緒に契約を見直しましょう。",
            "vi": "Hãy cùng xem lại hợp đồng."
          }
        },
        {
          "role": "user",
          "text": "Sounds good. Let's go through each section.",
          "translations": {
            "ko": "좋습니다. 각 항목을 하나씩 살펴봅시다.",
            "zh": "听起来不错。让我们逐条过一遍。",
            "ja": "いいですね。各セクションを見ていきましょう。",
            "vi": "Đồng ý. Hãy xem xét từng phần."
          }
        },
        {
          "role": "ai",
          "text": "Are there any terms you'd like to adjust?",
          "translations": {
            "ko": "조정하고 싶은 조항이 있나요?",
            "zh": "有没有任何条款你想调整的？",
            "ja": "調整したい条項はありますか？",
            "vi": "Có điều khoản nào bạn muốn điều chỉnh không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, the penalty clause seems too strict.",
          "translations": {
            "ko": "네, 벌금 조항이 너무 엄격한 것 같습니다.",
            "zh": "是的，罚款条款似乎太严格了。",
            "ja": "はい、違約金の条項が厳しすぎるように思います。",
            "vi": "Có, điều khoản phạt có vẻ quá nghiêm khắc."
          }
        },
        {
          "role": "ai",
          "text": "We are open to negotiation on the pricing.",
          "translations": {
            "ko": "가격에 대해서는 협상의 여지가 있습니다.",
            "zh": "我们对价格有开放的谈判空间。",
            "ja": "価格については交渉の余地があります。",
            "vi": "Chúng tôi sẵn lòng thương lượng về giá cả."
          }
        },
        {
          "role": "user",
          "text": "That's good to know. Can we lower it by 5%?",
          "translations": {
            "ko": "그렇군요. 5% 정도 낮출 수 있을까요?",
            "zh": "那很好。我们能否降低5%？",
            "ja": "それは良い知らせです。5％下げることは可能ですか？",
            "vi": "Thật tốt khi biết điều đó. Chúng ta có thể giảm nó xuống 5% không?"
          }
        },
        {
          "role": "ai",
          "text": "What payment terms would you prefer?",
          "translations": {
            "ko": "어떤 결제 조건을 선호하시나요?",
            "zh": "你更倾向于哪种付款方式？",
            "ja": "どのような支払い条件を希望しますか？",
            "vi": "Bạn muốn điều khoản thanh toán như thế nào?"
          }
        },
        {
          "role": "user",
          "text": "We prefer 45-day terms if possible.",
          "translations": {
            "ko": "가능하다면 45일 결제 조건을 선호합니다.",
            "zh": "如果可能的话，我们更倾向于45天的付款期限。",
            "ja": "可能であれば45日間の条件を希望します。",
            "vi": "Nếu có thể, chúng tôi muốn điều khoản 45 ngày."
          }
        },
        {
          "role": "ai",
          "text": "We usually do net 30 days.",
          "translations": {
            "ko": "보통 30일 결제를 합니다.",
            "zh": "我们通常做30天的账期。",
            "ja": "私たちは通常、ネット30日を行っています。",
            "vi": "Chúng tôi thường làm net 30 ngày."
          }
        },
        {
          "role": "user",
          "text": "That could work, let's note that.",
          "translations": {
            "ko": "그것이 가능할 것 같습니다, 메모해두겠습니다.",
            "zh": "那可能行得通，我们记下来。",
            "ja": "それは可能性がありますね、メモしておきましょう。",
            "vi": "Điều đó có thể hoạt động, hãy ghi chú lại."
          }
        },
        {
          "role": "ai",
          "text": "Would quarterly deliveries work for you?",
          "translations": {
            "ko": "분기별 배송이 괜찮으실까요?",
            "zh": "您是否可以接受每季度交货？",
            "ja": "四半期ごとの配送はいかがでしょうか？",
            "vi": "Việc giao hàng theo quý có phù hợp với bạn không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, quarterly is fine for now.",
          "translations": {
            "ko": "네, 현재로서는 분기별이 괜찮습니다.",
            "zh": "是的，目前每季度都可以。",
            "ja": "はい、現時点では四半期ごとで問題ありません。",
            "vi": "Có, giao hàng theo quý là tốt cho bây giờ."
          }
        },
        {
          "role": "ai",
          "text": "I'll have our legal team double-check that clause.",
          "translations": {
            "ko": "저희 법률팀에게 그 조항을 다시 확인하도록 하겠습니다.",
            "zh": "我会让我们的法律团队再次检查那个条款。",
            "ja": "私たちの法務チームにその条項を再確認してもらいます。",
            "vi": "Tôi sẽ nhờ đội ngũ pháp lý của chúng tôi kiểm tra lại điều khoản đó."
          }
        },
        {
          "role": "user",
          "text": "Perfect, I appreciate that.",
          "translations": {
            "ko": "완벽합니다, 감사합니다.",
            "zh": "太好了，我很感激。",
            "ja": "完璧です、感謝します。",
            "vi": "Hoàn hảo, tôi đánh giá cao điều đó."
          }
        },
        {
          "role": "ai",
          "text": "We also offer volume discounts.",
          "translations": {
            "ko": "우리는 또한 대량 할인을 제공합니다.",
            "zh": "我们还提供批量折扣。",
            "ja": "私たちはまた、量の割引も提供しています。",
            "vi": "Chúng tôi cũng cung cấp giảm giá theo số lượng."
          }
        },
        {
          "role": "user",
          "text": "That's helpful. We might order in bulk later.",
          "translations": {
            "ko": "그것이 도움이 됩니다. 나중에 대량으로 주문할 수도 있습니다.",
            "zh": "这很有帮助。我们可能会在以后批量订购。",
            "ja": "それは助かります。後で大量に注文するかもしれません。",
            "vi": "Điều đó rất hữu ích. Chúng tôi có thể đặt hàng số lượng lớn sau."
          }
        },
        {
          "role": "ai",
          "text": "Can we finalize this by next week?",
          "translations": {
            "ko": "다음 주까지 이것을 확정할 수 있을까요?",
            "zh": "我们能在下周前确定这个吗？",
            "ja": "来週までにこれを確定できますか？",
            "vi": "Chúng ta có thể hoàn thiện việc này vào tuần tới không?"
          }
        },
        {
          "role": "user",
          "text": "I think we can, if there are no more changes.",
          "translations": {
            "ko": "더 이상의 변경사항이 없다면 가능할 것 같습니다.",
            "zh": "我想我们可以，如果没有更多的变动。",
            "ja": "変更がこれ以上なければ、可能だと思います。",
            "vi": "Tôi nghĩ chúng ta có thể, nếu không còn thay đổi gì nữa."
          }
        },
        {
          "role": "ai",
          "text": "Great! I'll send over the updated draft.",
          "translations": {
            "ko": "좋습니다! 업데이트된 초안을 보내드리겠습니다.",
            "zh": "太好了！我会发送更新的草案。",
            "ja": "素晴らしい！更新版のドラフトを送ります。",
            "vi": "Tuyệt! Tôi sẽ gửi bản dự thảo cập nhật."
          }
        },
        {
          "role": "user",
          "text": "Thanks. I'll review it and get back to you.",
          "translations": {
            "ko": "감사합니다. 저는 검토하고 연락드리겠습니다.",
            "zh": "谢谢。我会审查它并回复你。",
            "ja": "ありがとう。確認してから連絡します。",
            "vi": "Cảm ơn. Tôi sẽ xem xét nó và phản hồi lại cho bạn."
          }
        }
      ]
    },
    {
      "description": {
        "ko": "프로젝트 업데이트 제공",
        "zh": "提供项目更新",
        "ja": "プロジェクトの更新を伝える",
        "vi": "Cập nhật dự án"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Let's begin with the project timeline.",
          "translations": {
            "ko": "프로젝트 타임라인부터 시작하겠습니다.",
            "zh": "让我们从项目时间表开始。",
            "ja": "プロジェクトのタイムラインから始めましょう。",
            "vi": "Hãy bắt đầu với lộ trình dự án."
          }
        },
        {
          "role": "user",
          "text": "Thanks for the update. That's helpful.",
          "translations": {
            "ko": "업데이트에 감사드립니다. 그것이 도움이 됩니다.",
            "zh": "感谢更新。这很有帮助。",
            "ja": "更新情報をありがとう。それは役立ちます。",
            "vi": "Cảm ơn vì đã cập nhật. Điều đó rất hữu ích."
          }
        },
        {
          "role": "ai",
          "text": "We are currently in the development phase.",
          "translations": {
            "ko": "현재 개발 단계에 있습니다.",
            "zh": "我们目前处于开发阶段。",
            "ja": "現在、開発フェーズにあります。",
            "vi": "Hiện tại chúng tôi đang ở giai đoạn phát triển."
          }
        },
        {
          "role": "user",
          "text": "How long will the development phase last?",
          "translations": {
            "ko": "개발 단계는 얼마나 걸릴까요?",
            "zh": "开发阶段将持续多久？",
            "ja": "開発フェーズはどのくらい続くのでしょうか？",
            "vi": "Giai đoạn phát triển sẽ kéo dài bao lâu?"
          }
        },
        {
          "role": "ai",
          "text": "The design phase was completed last week.",
          "translations": {
            "ko": "디자인 단계는 지난 주에 완료되었습니다.",
            "zh": "设计阶段在上周完成。",
            "ja": "デザインフェーズは先週完了しました。",
            "vi": "Giai đoạn thiết kế đã hoàn thành vào tuần trước."
          }
        },
        {
          "role": "user",
          "text": "That’s good to hear.",
          "translations": {
            "ko": "그것을 듣게 되어 기쁩니다.",
            "zh": "听到这个很高兴。",
            "ja": "それは良いニュースです。",
            "vi": "Thật tốt khi nghe điều đó."
          }
        },
        {
          "role": "ai",
          "text": "We've faced some delays due to technical issues.",
          "translations": {
            "ko": "기술적인 문제로 인해 약간의 지연이 있었습니다.",
            "zh": "我们因技术问题遇到了一些延迟。",
            "ja": "技術的な問題により、いくつかの遅延が発生しました。",
            "vi": "Chúng tôi đã gặp một số trễ do vấn đề kỹ thuật."
          }
        },
        {
          "role": "user",
          "text": "Were the delays significant?",
          "translations": {
            "ko": "지연이 크게 있었나요?",
            "zh": "延迟严重吗？",
            "ja": "遅延は大きかったですか？",
            "vi": "Những trễ hẹn có đáng kể không?"
          }
        },
        {
          "role": "ai",
          "text": "However, we're still on track for the launch date.",
          "translations": {
            "ko": "그러나, 우리는 여전히 출시일에 맞춰 진행하고 있습니다.",
            "zh": "然而，我们仍然按照发布日期的计划进行。",
            "ja": "しかし、私たちはまだローンチ日に向けて順調に進んでいます。",
            "vi": "Tuy nhiên, chúng tôi vẫn đang theo đúng lịch trình cho ngày ra mắt."
          }
        },
        {
          "role": "user",
          "text": "Glad to know the timeline is intact.",
          "translations": {
            "ko": "타임라인이 유지되고 있다는 것을 알게 되어 기쁩니다.",
            "zh": "很高兴知道时间表没有变动。",
            "ja": "タイムラインが保たれていることを知って安心しました。",
            "vi": "Rất vui khi biết lịch trình vẫn được giữ nguyên."
          }
        },
        {
          "role": "ai",
          "text": "The team has been working overtime to stay on schedule.",
          "translations": {
            "ko": "팀은 일정을 맞추기 위해 야근하고 있습니다.",
            "zh": "团队一直在加班以保持进度。",
            "ja": "チームはスケジュールを守るために残業をしています。",
            "vi": "Đội ngũ đã làm việc ngoài giờ để đảm bảo tuân thủ lịch trình."
          }
        },
        {
          "role": "user",
          "text": "I appreciate the team's efforts.",
          "translations": {
            "ko": "팀의 노력에 감사드립니다.",
            "zh": "我感谢团队的努力。",
            "ja": "チームの努力に感謝します。",
            "vi": "Tôi đánh giá cao những nỗ lực của đội ngũ."
          }
        },
        {
          "role": "ai",
          "text": "We'll begin testing early next month.",
          "translations": {
            "ko": "다음 달 초에 테스트를 시작할 예정입니다.",
            "zh": "我们将在下个月初开始测试。",
            "ja": "来月初めにテストを開始します。",
            "vi": "Chúng tôi sẽ bắt đầu thử nghiệm vào đầu tháng sau."
          }
        },
        {
          "role": "user",
          "text": "Sounds good. Keep me posted on testing progress.",
          "translations": {
            "ko": "좋습니다. 테스트 진행 상황을 계속 알려주세요.",
            "zh": "听起来不错。请随时告诉我测试进度。",
            "ja": "良さそうです。テストの進行状況を教えてください。",
            "vi": "Rất tốt. Hãy cập nhật cho tôi về tiến trình thử nghiệm."
          }
        },
        {
          "role": "ai",
          "text": "Client feedback has been mostly positive.",
          "translations": {
            "ko": "고객 피드백은 대부분 긍정적이었습니다.",
            "zh": "客户反馈大多是积极的。",
            "ja": "クライアントからのフィードバックは大部分が肯定的です。",
            "vi": "Phản hồi của khách hàng chủ yếu là tích cực."
          }
        },
        {
          "role": "user",
          "text": "That’s reassuring.",
          "translations": {
            "ko": "그것은 안심이 됩니다.",
            "zh": "这让人放心。",
            "ja": "それは安心しますね。",
            "vi": "Điều đó rất yên tâm."
          }
        },
        {
          "role": "ai",
          "text": "The next milestone is the beta release.",
          "translations": {
            "ko": "다음 마일스톤은 베타 릴리즈입니다.",
            "zh": "下一个里程碑是测试版发布。",
            "ja": "次のマイルストーンはベータリリースです。",
            "vi": "Mục tiêu tiếp theo là phát hành bản beta."
          }
        },
        {
          "role": "user",
          "text": "When exactly is the beta planned?",
          "translations": {
            "ko": "베타는 정확히 언제 계획되어 있나요?",
            "zh": "测试版计划何时开始？",
            "ja": "ベータ版の予定は具体的にいつですか？",
            "vi": "Beta dự kiến sẽ diễn ra vào thời gian nào chính xác?"
          }
        },
        {
          "role": "ai",
          "text": "Any questions about the current status?",
          "translations": {
            "ko": "현재 상황에 대해 질문이 있나요?",
            "zh": "对当前状态有任何问题吗？",
            "ja": "現状についての質問はありますか？",
            "vi": "Có câu hỏi nào về tình trạng hiện tại không?"
          }
        },
        {
          "role": "user",
          "text": "No questions for now. Thanks.",
          "translations": {
            "ko": "지금은 질문이 없습니다. 감사합니다.",
            "zh": "目前没有问题。谢谢。",
            "ja": "今のところ質問はありません。ありがとうございます。",
            "vi": "Hiện tại không có câu hỏi nào. Cảm ơn."
          }
        }
      ]
    },
    {
      "description": {
        "ko": "마케팅 전략 논의하기",
        "zh": "讨论营销策略",
        "ja": "マーケティング戦略を議論する",
        "vi": "Thảo luận về chiến lược tiếp thị"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Let’s review our target audience first.",
          "translations": {
            "ko": "먼저 우리의 타겟 오디언스를 검토해봅시다.",
            "zh": "让我们首先回顾一下我们的目标受众。",
            "ja": "まず、私たちのターゲットオーディエンスを見直しましょう。",
            "vi": "Đầu tiên, hãy xem lại đối tượng mục tiêu của chúng ta."
          }
        },
        {
          "role": "user",
          "text": "That makes sense.",
          "translations": {
            "ko": "그게 맞는 것 같습니다.",
            "zh": "这是有道理的。",
            "ja": "それは理にかなっています。",
            "vi": "Điều đó có lý."
          }
        },
        {
          "role": "ai",
          "text": "We’re focusing on young professionals.",
          "translations": {
            "ko": "우리는 젊은 전문가들에 집중하고 있습니다.",
            "zh": "我们主要关注的是年轻专业人士。",
            "ja": "私たちは若い専門家に焦点を当てています。",
            "vi": "Chúng tôi đang tập trung vào các chuyên gia trẻ."
          }
        },
        {
          "role": "user",
          "text": "Young professionals are a great segment.",
          "translations": {
            "ko": "젊은 전문가들은 훌륭한 세그먼트입니다.",
            "zh": "年轻的专业人士是一个很好的细分市场。",
            "ja": "若い専門家は素晴らしいセグメントです。",
            "vi": "Các chuyên gia trẻ là một phân khúc tuyệt vời."
          }
        },
        {
          "role": "ai",
          "text": "Social media is our main channel.",
          "translations": {
            "ko": "소셜 미디어가 우리의 주요 채널입니다.",
            "zh": "社交媒体是我们的主要渠道。",
            "ja": "ソーシャルメディアが私たちの主要なチャネルです。",
            "vi": "Mạng xã hội là kênh chính của chúng tôi."
          }
        },
        {
          "role": "user",
          "text": "Which platforms will we use?",
          "translations": {
            "ko": "어떤 플랫폼을 사용할 예정인가요?",
            "zh": "我们将使用哪些平台？",
            "ja": "どのプラットフォームを使用しますか？",
            "vi": "Chúng ta sẽ sử dụng những nền tảng nào?"
          }
        },
        {
          "role": "ai",
          "text": "We’ll launch the campaign next Monday.",
          "translations": {
            "ko": "다음 월요일에 캠페인을 시작할 예정입니다.",
            "zh": "我们将在下周一启动这个活动。",
            "ja": "私たちは来週の月曜日にキャンペーンを開始します。",
            "vi": "Chúng tôi sẽ khởi động chiến dịch vào thứ Hai tuần tới."
          }
        },
        {
          "role": "user",
          "text": "Is the content ready?",
          "translations": {
            "ko": "콘텐츠는 준비되었나요?",
            "zh": "内容准备好了吗？",
            "ja": "コンテンツは準備できていますか？",
            "vi": "Nội dung đã sẵn sàng chưa?"
          }
        },
        {
          "role": "ai",
          "text": "The slogan still needs approval.",
          "translations": {
            "ko": "슬로건은 아직 승인이 필요합니다.",
            "zh": "标语还需要得到批准。",
            "ja": "スローガンはまだ承認が必要です。",
            "vi": "Slogan vẫn cần được phê duyệt."
          }
        },
        {
          "role": "user",
          "text": "I’ll check with the branding team.",
          "translations": {
            "ko": "브랜딩 팀에게 확인해보겠습니다.",
            "zh": "我会与品牌团队确认。",
            "ja": "ブランディングチームに確認します。",
            "vi": "Tôi sẽ kiểm tra với nhóm thương hiệu."
          }
        },
        {
          "role": "ai",
          "text": "We'll track performance using KPIs.",
          "translations": {
            "ko": "KPI를 사용하여 성과를 추적할 것입니다.",
            "zh": "我们将使用KPI来跟踪表现。",
            "ja": "KPIを使用してパフォーマンスを追跡します。",
            "vi": "Chúng tôi sẽ theo dõi hiệu suất bằng KPIs."
          }
        },
        {
          "role": "user",
          "text": "Which KPIs are we tracking?",
          "translations": {
            "ko": "어떤 KPI를 추적하고 있나요?",
            "zh": "我们将跟踪哪些KPI？",
            "ja": "どのKPIを追跡しますか？",
            "vi": "Chúng ta đang theo dõi KPIs nào?"
          }
        },
        {
          "role": "ai",
          "text": "Email marketing is also planned.",
          "translations": {
            "ko": "이메일 마케팅도 계획되어 있습니다.",
            "zh": "我们也计划进行电子邮件营销。",
            "ja": "メールマーケティングも計画されています。",
            "vi": "Tiếp thị qua email cũng đã được lên kế hoạch."
          }
        },
        {
          "role": "user",
          "text": "Sounds like a good idea.",
          "translations": {
            "ko": "좋은 생각 같습니다.",
            "zh": "听起来是个好主意。",
            "ja": "良いアイデアのようです。",
            "vi": "Có vẻ như một ý tưởng tốt."
          }
        },
        {
          "role": "ai",
          "text": "We may allocate more budget to influencers.",
          "translations": {
            "ko": "우리는 인플루언서에게 더 많은 예산을 할당할 수 있습니다.",
            "zh": "我们可能会给影响者分配更多的预算。",
            "ja": "インフルエンサーにより多くの予算を割り当てるかもしれません。",
            "vi": "Chúng tôi có thể phân bổ thêm ngân sách cho các nhà ảnh hưởng."
          }
        },
        {
          "role": "user",
          "text": "Agreed, influencers have big reach.",
          "translations": {
            "ko": "동의합니다, 인플루언서는 큰 영향력을 가지고 있습니다.",
            "zh": "同意，影响者的覆盖面很大。",
            "ja": "同意します、インフルエンサーは大きなリーチを持っています。",
            "vi": "Đồng ý, những người ảnh hưởng có tầm ảnh hưởng lớn."
          }
        },
        {
          "role": "ai",
          "text": "Weekly reports will be shared with the team.",
          "translations": {
            "ko": "주간 보고서는 팀과 공유될 것입니다.",
            "zh": "每周的报告将与团队分享。",
            "ja": "週次レポートはチームと共有されます。",
            "vi": "Báo cáo hàng tuần sẽ được chia sẻ với nhóm."
          }
        },
        {
          "role": "user",
          "text": "Looking forward to the reports.",
          "translations": {
            "ko": "보고서를 기대하고 있습니다.",
            "zh": "期待这些报告。",
            "ja": "レポートを楽しみにしています。",
            "vi": "Mong chờ báo cáo."
          }
        },
        {
          "role": "ai",
          "text": "Do you have any suggestions?",
          "translations": {
            "ko": "제안하실 사항이 있나요?",
            "zh": "你有什么建议吗？",
            "ja": "提案はありますか？",
            "vi": "Bạn có đề xuất nào không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, we could also use short videos.",
          "translations": {
            "ko": "네, 짧은 비디오도 사용할 수 있습니다.",
            "zh": "是的，我们也可以使用短视频。",
            "ja": "はい、短いビデオも使用できます。",
            "vi": "Có, chúng ta cũng có thể sử dụng video ngắn."
          }
        }
      ]
    },
    {
      "description": {
        "ko": "고객의 불만 처리하기",
        "zh": "处理客户投诉",
        "ja": "クライアントの苦情対応",
        "vi": "Xử lý khiếu nại của khách hàng"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Thank you for bringing this to our attention.",
          "translations": {
            "ko": "이 문제를 알려주셔서 감사합니다.",
            "zh": "感谢您把这个问题告诉我们。",
            "ja": "これを私たちの注意に持ってきてくれてありがとう。",
            "vi": "Cảm ơn bạn đã đưa vấn đề này đến sự chú ý của chúng tôi."
          }
        },
        {
          "role": "user",
          "text": "I appreciate your quick response.",
          "translations": {
            "ko": "빠른 응답에 감사드립니다.",
            "zh": "感谢您的快速回应。",
            "ja": "迅速な対応に感謝します。",
            "vi": "Tôi đánh giá cao sự phản hồi nhanh của bạn."
          }
        },
        {
          "role": "ai",
          "text": "We sincerely apologize for the inconvenience.",
          "translations": {
            "ko": "불편을 끼쳐 드려 진심으로 사과드립니다.",
            "zh": "我们对给您带来的不便深感歉意。",
            "ja": "ご不便をおかけして誠に申し訳ありません。",
            "vi": "Chúng tôi xin lỗi chân thành vì sự bất tiện này."
          }
        },
        {
          "role": "user",
          "text": "The issue happened yesterday afternoon.",
          "translations": {
            "ko": "문제는 어제 오후에 발생했습니다.",
            "zh": "问题是在昨天下午发生的。",
            "ja": "問題は昨日の午後に発生しました。",
            "vi": "Vấn đề đã xảy ra vào chiều hôm qua."
          }
        },
        {
          "role": "ai",
          "text": "Can you tell me more about the issue?",
          "translations": {
            "ko": "문제에 대해 좀 더 자세히 말씀해주실 수 있나요?",
            "zh": "你能告诉我更多关于这个问题的信息吗？",
            "ja": "問題についてもっと詳しく教えていただけますか？",
            "vi": "Bạn có thể cho tôi biết thêm về vấn đề không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, my colleague had the same issue.",
          "translations": {
            "ko": "네, 제 동료도 같은 문제를 겪었습니다.",
            "zh": "是的，我的同事也遇到了同样的问题。",
            "ja": "はい、私の同僚も同じ問題を抱えていました。",
            "vi": "Vâng, đồng nghiệp của tôi cũng gặp phải vấn đề tương tự."
          }
        },
        {
          "role": "ai",
          "text": "When did the problem occur?",
          "translations": {
            "ko": "문제가 언제 발생했나요?",
            "zh": "问题是什么时候发生的？",
            "ja": "その問題はいつ発生しましたか？",
            "vi": "Vấn đề xảy ra khi nào?"
          }
        },
        {
          "role": "user",
          "text": "The system was down for over an hour.",
          "translations": {
            "ko": "시스템이 한 시간 이상 동안 다운되었습니다.",
            "zh": "系统停机超过一个小时了。",
            "ja": "システムが1時間以上ダウンしていました。",
            "vi": "Hệ thống đã bị ngừng hoạt động hơn một giờ."
          }
        },
        {
          "role": "ai",
          "text": "Was anyone else affected?",
          "translations": {
            "ko": "다른 사람도 영향을 받았나요?",
            "zh": "还有其他人受到影响吗？",
            "ja": "他に影響を受けた人はいましたか？",
            "vi": "Có ai khác bị ảnh hưởng không?"
          }
        },
        {
          "role": "user",
          "text": "We couldn’t access any data.",
          "translations": {
            "ko": "우리는 어떤 데이터에도 접근할 수 없었습니다.",
            "zh": "我们无法访问任何数据。",
            "ja": "私たちはどのデータにもアクセスできませんでした。",
            "vi": "Chúng tôi không thể truy cập được bất kỳ dữ liệu nào."
          }
        },
        {
          "role": "ai",
          "text": "We’ll investigate this immediately.",
          "translations": {
            "ko": "우리는 이 문제를 즉시 조사하겠습니다.",
            "zh": "我们会立即进行调查。",
            "ja": "私たちはすぐにこれを調査します。",
            "vi": "Chúng tôi sẽ điều tra ngay lập tức."
          }
        },
        {
          "role": "user",
          "text": "Thank you for taking it seriously.",
          "translations": {
            "ko": "진지하게 대해주셔서 감사합니다.",
            "zh": "谢谢你对此事的重视。",
            "ja": "真剣に取り組んでいただきありがとうございます。",
            "vi": "Cảm ơn bạn đã coi trọng vấn đề này."
          }
        },
        {
          "role": "ai",
          "text": "We’ll make sure it doesn’t happen again.",
          "translations": {
            "ko": "우리는 이런 일이 다시 일어나지 않도록 하겠습니다.",
            "zh": "我们会确保这种情况不再发生。",
            "ja": "二度と起こらないようにします。",
            "vi": "Chúng tôi sẽ đảm bảo điều này không xảy ra lại."
          }
        },
        {
          "role": "user",
          "text": "That would be helpful.",
          "translations": {
            "ko": "그것이 도움이 될 것입니다.",
            "zh": "那会很有帮助。",
            "ja": "それは助かります。",
            "vi": "Điều đó sẽ rất hữu ích."
          }
        },
        {
          "role": "ai",
          "text": "A manager will follow up with you today.",
          "translations": {
            "ko": "오늘 담당 관리자가 당신에게 연락할 것입니다.",
            "zh": "今天会有一位经理与你跟进。",
            "ja": "今日、マネージャーがあなたに連絡します。",
            "vi": "Một người quản lý sẽ liên hệ với bạn hôm nay."
          }
        },
        {
          "role": "user",
          "text": "I’d like an update by tomorrow.",
          "translations": {
            "ko": "내일까지 업데이트를 받고 싶습니다.",
            "zh": "我希望明天能得到更新。",
            "ja": "明日までに更新情報が欲しいです。",
            "vi": "Tôi muốn có thông tin cập nhật vào ngày mai."
          }
        },
        {
          "role": "ai",
          "text": "We’ll also offer a discount for the trouble.",
          "translations": {
            "ko": "불편을 끼쳐드려 죄송하므로 할인을 제공하겠습니다.",
            "zh": "我们也会因为这个麻烦提供折扣。",
            "ja": "また、この問題に対する割引も提供します。",
            "vi": "Chúng tôi cũng sẽ cung cấp một mức giảm giá để bù đắp."
          }
        },
        {
          "role": "user",
          "text": "Thanks, the discount is appreciated.",
          "translations": {
            "ko": "감사합니다, 할인은 매우 감사합니다.",
            "zh": "谢谢，我们很感谢这个折扣。",
            "ja": "ありがとう、割引はありがたいです。",
            "vi": "Cảm ơn, tôi rất biết ơn về mức giảm giá."
          }
        },
        {
          "role": "ai",
          "text": "Is there anything else we can do?",
          "translations": {
            "ko": "우리가 더 도와드릴 수 있는 것이 있나요?",
            "zh": "还有其他我们可以做的事情吗？",
            "ja": "他に何か私たちにできることはありますか？",
            "vi": "Còn điều gì chúng tôi có thể giúp không?"
          }
        },
        {
          "role": "user",
          "text": "No, that covers everything.",
          "translations": {
            "ko": "아니요, 그것으로 모든 것을 다루었습니다.",
            "zh": "不，这已经包括了所有的事情。",
            "ja": "いえ、それで全てです。",
            "vi": "Không, điều đó đã bao gồm tất cả."
          }
        }
      ]
    },
    {
      "description": {
        "ko": "직업 후보자 인터뷰",
        "zh": "面试一位求职者",
        "ja": "就職候補者を面接する",
        "vi": "Phỏng vấn ứng viên cho công việc"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Welcome, and thank you for coming in today.",
          "translations": {
            "ko": "환영합니다, 오늘 와주셔서 감사합니다.",
            "zh": "欢迎您，感谢您今天的到来。",
            "ja": "ようこそ、今日は来ていただきありがとうございます。",
            "vi": "Chào mừng và cảm ơn bạn đã đến hôm nay."
          }
        },
        {
          "role": "user",
          "text": "Thank you for having me.",
          "translations": {
            "ko": "초대해주셔서 감사합니다.",
            "zh": "谢谢你的邀请。",
            "ja": "お招きいただきありがとうございます。",
            "vi": "Cảm ơn vì đã mời tôi."
          }
        },
        {
          "role": "ai",
          "text": "Can you tell us a bit about yourself?",
          "translations": {
            "ko": "자신에 대해 조금 말해주실 수 있나요?",
            "zh": "你能简单介绍一下自己吗？",
            "ja": "自己紹介をお願いできますか？",
            "vi": "Bạn có thể cho chúng tôi biết một chút về bản thân không?"
          }
        },
        {
          "role": "user",
          "text": "Sure, I have five years of experience in sales.",
          "translations": {
            "ko": "네, 저는 판매 분야에서 5년의 경험이 있습니다.",
            "zh": "当然，我在销售行业有五年的经验。",
            "ja": "はい、私は販売の経験が5年あります。",
            "vi": "Chắc chắn, tôi có năm năm kinh nghiệm trong lĩnh vực bán hàng."
          }
        },
        {
          "role": "ai",
          "text": "What interests you about this role?",
          "translations": {
            "ko": "이 역할에 관심을 가지게 된 이유는 무엇인가요?",
            "zh": "这个角色有什么吸引你的地方？",
            "ja": "この役割に何が興味を持ちましたか？",
            "vi": "Điều gì khiến bạn quan tâm đến vị trí này?"
          }
        },
        {
          "role": "user",
          "text": "I like that the role involves strategy.",
          "translations": {
            "ko": "이 역할이 전략을 포함하고 있다는 점이 좋습니다.",
            "zh": "我喜欢这个角色涉及到策略。",
            "ja": "この役割が戦略を含むことが好きです。",
            "vi": "Tôi thích vị trí này vì nó liên quan đến chiến lược."
          }
        },
        {
          "role": "ai",
          "text": "Tell me about a challenge you've faced at work.",
          "translations": {
            "ko": "직장에서 직면했던 도전에 대해 말해주세요.",
            "zh": "你能告诉我你在工作中面临过的一个挑战吗？",
            "ja": "仕事で直面した課題について教えてください。",
            "vi": "Hãy kể cho tôi về một thách thức mà bạn đã đối mặt tại nơi làm việc."
          }
        },
        {
          "role": "user",
          "text": "Once I had to resolve a client issue overnight.",
          "translations": {
            "ko": "한 번 고객 문제를 밤새 해결해야 했습니다.",
            "zh": "有一次我不得不在一夜之间解决一个客户问题。",
            "ja": "一度、クライアントの問題を一晩で解決しなければならなかったことがあります。",
            "vi": "Một lần tôi phải giải quyết vấn đề của khách hàng trong đêm."
          }
        },
        {
          "role": "ai",
          "text": "How do you handle tight deadlines?",
          "translations": {
            "ko": "바쁜 마감일을 어떻게 처리하나요?",
            "zh": "你如何处理紧迫的截止日期？",
            "ja": "締め切りが厳しいとき、どのように対処しますか？",
            "vi": "Bạn xử lý như thế nào khi gặp thời hạn gấp?"
          }
        },
        {
          "role": "user",
          "text": "I stay organized and set priorities.",
          "translations": {
            "ko": "저는 조직적으로 일하고 우선순위를 정합니다.",
            "zh": "我会保持组织和设定优先级。",
            "ja": "私は整理整頓をして優先順位を設定します。",
            "vi": "Tôi giữ cho mình luôn tổ chức và đặt ưu tiên."
          }
        },
        {
          "role": "ai",
          "text": "Do you prefer working alone or in a team?",
          "translations": {
            "ko": "혼자 일하는 것과 팀에서 일하는 것 중 어느 것을 선호하나요?",
            "zh": "你更喜欢单独工作还是在团队中工作？",
            "ja": "一人で働くのとチームで働くの、どちらが好きですか？",
            "vi": "Bạn thích làm việc một mình hay trong nhóm?"
          }
        },
        {
          "role": "user",
          "text": "I enjoy both, depending on the task.",
          "translations": {
            "ko": "작업에 따라 둘 다 좋아합니다.",
            "zh": "我喜欢两者，这取决于任务。",
            "ja": "仕事によりますが、どちらも楽しんでいます。",
            "vi": "Tôi thích cả hai, tùy thuộc vào công việc."
          }
        },
        {
          "role": "ai",
          "text": "What are your long-term career goals?",
          "translations": {
            "ko": "장기적인 경력 목표는 무엇인가요?",
            "zh": "你的长期职业目标是什么？",
            "ja": "長期的なキャリアゴールは何ですか？",
            "vi": "Mục tiêu nghề nghiệp dài hạn của bạn là gì?"
          }
        },
        {
          "role": "user",
          "text": "I want to move into management eventually.",
          "translations": {
            "ko": "결국에는 관리직으로 이동하고 싶습니다.",
            "zh": "我最终希望能进入管理层。",
            "ja": "最終的にはマネージメントに移りたいと考えています。",
            "vi": "Tôi muốn chuyển sang làm quản lý sau này."
          }
        },
        {
          "role": "ai",
          "text": "Do you have any questions for us?",
          "translations": {
            "ko": "저희에게 질문 있으신가요?",
            "zh": "你有什么问题要问我们吗？",
            "ja": "私たちに何か質問はありますか？",
            "vi": "Bạn có câu hỏi nào cho chúng tôi không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, what does a typical day look like?",
          "translations": {
            "ko": "네, 평범한 하루는 어떻게 보내나요?",
            "zh": "是的，一般的一天是怎么样的？",
            "ja": "はい、一日の典型的な流れはどのようなものですか？",
            "vi": "Vâng, một ngày điển hình sẽ trông như thế nào?"
          }
        },
        {
          "role": "ai",
          "text": "We'll get back to you next week.",
          "translations": {
            "ko": "다음 주에 연락드리겠습니다.",
            "zh": "我们将在下周回复你。",
            "ja": "来週、ご連絡させていただきます。",
            "vi": "Chúng tôi sẽ liên hệ lại với bạn vào tuần sau."
          }
        },
        {
          "role": "user",
          "text": "Great, I look forward to hearing from you.",
          "translations": {
            "ko": "좋습니다, 연락 기다리겠습니다.",
            "zh": "很好，我期待您的回复。",
            "ja": "それを楽しみにしています。",
            "vi": "Tuyệt, tôi mong chờ tin từ bạn."
          }
        },
        {
          "role": "ai",
          "text": "Thanks again for your time.",
          "translations": {
            "ko": "다시 한번 시간 내주셔서 감사합니다.",
            "zh": "再次感谢您的时间。",
            "ja": "お時間をいただき、再度ありがとうございます。",
            "vi": "Cảm ơn bạn một lần nữa vì đã dành thời gian."
          }
        },
        {
          "role": "user",
          "text": "My pleasure. Have a great day!",
          "translations": {
            "ko": "천만에요. 좋은 하루 보내세요!",
            "zh": "很高兴能帮助你。祝你今天过得愉快！",
            "ja": "こちらこそ。素晴らしい一日をお過ごしください！",
            "vi": "Rất vui được giúp đỡ. Chúc bạn một ngày tốt lành!"
          }
        }
      ]
    },
    {
      "description": {
        "ko": "팀과 함께 마감일 설정하기",
        "zh": "与团队设定一个截止日期",
        "ja": "チームと期限を設定する",
        "vi": "Đặt hạn chót với một nhóm"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "We need to finalize the deadline for this task.",
          "translations": {
            "ko": "이 작업에 대한 마감일을 확정해야 합니다.",
            "zh": "我们需要确定这个任务的最后期限。",
            "ja": "このタスクの期限を確定させる必要があります。",
            "vi": "Chúng ta cần phải xác định hạn chót cho nhiệm vụ này."
          }
        },
        {
          "role": "user",
          "text": "The 30th sounds tight but doable.",
          "translations": {
            "ko": "30일은 조금 바쁘겠지만 가능해 보입니다.",
            "zh": "30号听起来很紧，但是可以做到。",
            "ja": "30日は厳しいですが、可能です。",
            "vi": "Ngày 30 có vẻ hơi sát nhưng vẫn khả thi."
          }
        },
        {
          "role": "ai",
          "text": "The client expects delivery by the 30th.",
          "translations": {
            "ko": "고객은 30일까지 배송을 기대하고 있습니다.",
            "zh": "客户期望在30号之前交付。",
            "ja": "クライアントは30日までに納品を期待しています。",
            "vi": "Khách hàng mong đợi giao hàng vào ngày 30."
          }
        },
        {
          "role": "user",
          "text": "I’ll check with the design team.",
          "translations": {
            "ko": "디자인 팀에게 확인해 보겠습니다.",
            "zh": "我会去和设计团队确认一下。",
            "ja": "デザインチームに確認します。",
            "vi": "Tôi sẽ kiểm tra với nhóm thiết kế."
          }
        },
        {
          "role": "ai",
          "text": "Can we complete it within two weeks?",
          "translations": {
            "ko": "2주 안에 완료할 수 있을까요?",
            "zh": "我们可以在两周内完成吗？",
            "ja": "2週間以内に完了できますか？",
            "vi": "Chúng ta có thể hoàn thành nó trong vòng hai tuần không?"
          }
        },
        {
          "role": "user",
          "text": "Two weeks is possible if nothing slips.",
          "translations": {
            "ko": "아무 것도 빗나가지 않는다면 2주면 가능합니다.",
            "zh": "如果没有任何延误，两周是可能的。",
            "ja": "何も滞らなければ2週間で可能です。",
            "vi": "Hai tuần là khả thi nếu không có gì trục trặc."
          }
        },
        {
          "role": "ai",
          "text": "What are the major blockers right now?",
          "translations": {
            "ko": "현재 주요한 장애물은 무엇인가요?",
            "zh": "现在的主要阻碍是什么？",
            "ja": "現在の主な障害は何ですか？",
            "vi": "Những rắc rối lớn nhất hiện tại là gì?"
          }
        },
        {
          "role": "user",
          "text": "We’re waiting on one vendor’s input.",
          "translations": {
            "ko": "저희는 한 공급업체의 의견을 기다리고 있습니다.",
            "zh": "我们正在等待一个供应商的反馈。",
            "ja": "一つのベンダーからの入力を待っています。",
            "vi": "Chúng tôi đang chờ thông tin từ một nhà cung cấp."
          }
        },
        {
          "role": "ai",
          "text": "Who will take ownership of testing?",
          "translations": {
            "ko": "누가 테스트를 주도하게 될까요?",
            "zh": "谁将负责测试？",
            "ja": "誰がテストの責任を持つのですか？",
            "vi": "Ai sẽ chịu trách nhiệm kiểm tra?"
          }
        },
        {
          "role": "user",
          "text": "I can lead the testing efforts.",
          "translations": {
            "ko": "저가 테스트를 주도하겠습니다.",
            "zh": "我可以负责测试工作。",
            "ja": "テストをリードできます。",
            "vi": "Tôi có thể dẫn dắt các nỗ lực kiểm tra."
          }
        },
        {
          "role": "ai",
          "text": "We’ll hold daily check-ins to stay aligned.",
          "translations": {
            "ko": "매일 체크인을 하여 일정을 맞추겠습니다.",
            "zh": "我们将每天进行检查以保持一致。",
            "ja": "同調を保つために毎日チェックインを行います。",
            "vi": "Chúng tôi sẽ tổ chức kiểm tra hàng ngày để duy trì sự đồng lòng."
          }
        },
        {
          "role": "user",
          "text": "Daily check-ins will help a lot.",
          "translations": {
            "ko": "매일 체크인이 많은 도움이 될 것입니다.",
            "zh": "每日检查会很有帮助。",
            "ja": "毎日のチェックインは大いに助かります。",
            "vi": "Việc kiểm tra hàng ngày sẽ giúp rất nhiều."
          }
        },
        {
          "role": "ai",
          "text": "Let’s update the project board today.",
          "translations": {
            "ko": "오늘 프로젝트 보드를 업데이트합시다.",
            "zh": "让我们今天更新项目板。",
            "ja": "今日、プロジェクトボードを更新しましょう。",
            "vi": "Hãy cập nhật bảng dự án hôm nay."
          }
        },
        {
          "role": "user",
          "text": "I'll update our tasks right away.",
          "translations": {
            "ko": "바로 작업을 업데이트하겠습니다.",
            "zh": "我会立即更新我们的任务。",
            "ja": "すぐにタスクを更新します。",
            "vi": "Tôi sẽ cập nhật các nhiệm vụ của chúng tôi ngay lập tức."
          }
        },
        {
          "role": "ai",
          "text": "Please flag any risks by tomorrow.",
          "translations": {
            "ko": "내일까지 모든 위험 요소를 표시해 주세요.",
            "zh": "请在明天之前标记出任何风险。",
            "ja": "明日までにリスクをフラグしてください。",
            "vi": "Vui lòng đánh dấu bất kỳ rủi ro nào vào ngày mai."
          }
        },
        {
          "role": "user",
          "text": "Okay, I’ll review all dependencies.",
          "translations": {
            "ko": "알겠습니다, 모든 의존성을 검토하겠습니다.",
            "zh": "好的，我会检查所有的依赖关系。",
            "ja": "はい、すべての依存関係を見直します。",
            "vi": "Được, tôi sẽ xem xét tất cả các yếu tố phụ thuộc."
          }
        },
        {
          "role": "ai",
          "text": "The timeline will be shared company-wide.",
          "translations": {
            "ko": "일정은 회사 전체에 공유될 것입니다.",
            "zh": "时间表将在全公司范围内共享。",
            "ja": "タイムラインは会社全体で共有されます。",
            "vi": "Lịch trình sẽ được chia sẻ trên toàn công ty."
          }
        },
        {
          "role": "user",
          "text": "Got it. I’ll inform my team.",
          "translations": {
            "ko": "알겠습니다. 팀에게 알려야겠습니다.",
            "zh": "明白了。我会告知我的团队。",
            "ja": "了解しました。私のチームに伝えます。",
            "vi": "Đã hiểu. Tôi sẽ thông báo cho nhóm của tôi."
          }
        },
        {
          "role": "ai",
          "text": "Thanks, everyone. Let’s make this work.",
          "translations": {
            "ko": "감사합니다, 여러분. 이 일을 해내봅시다.",
            "zh": "谢谢大家。让我们一起完成这个任务。",
            "ja": "皆さん、ありがとうございます。これを成功させましょう。",
            "vi": "Cảm ơn mọi người. Hãy cùng làm việc này."
          }
        },
        {
          "role": "user",
          "text": "Yes, let’s get it done!",
          "translations": {
            "ko": "네, 해내봅시다!",
            "zh": "是的，让我们完成它！",
            "ja": "はい、やり遂げましょう！",
            "vi": "Vâng, hãy hoàn thành nó!"
          }
        }
      ]
    },
    {
      "description": {
        "ko": "새로운 회사 정책 설명하기",
        "zh": "解释新的公司政策",
        "ja": "新しい会社の方針を説明する",
        "vi": "Giải thích một chính sách công ty mới"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Let me explain the new remote work policy.",
          "translations": {
            "ko": "새로운 원격 근무 정책에 대해 설명하겠습니다.",
            "zh": "让我来解释新的远程工作政策。",
            "ja": "新しいリモートワークの方針を説明させていただきます。",
            "vi": "Hãy để tôi giải thích chính sách làm việc từ xa mới."
          }
        },
        {
          "role": "user",
          "text": "That’s great news.",
          "translations": {
            "ko": "그것은 좋은 소식이네요.",
            "zh": "那真是个好消息。",
            "ja": "それは素晴らしいニュースです。",
            "vi": "Đó là tin tốt."
          }
        },
        {
          "role": "ai",
          "text": "Employees can now work from home two days a week.",
          "translations": {
            "ko": "직원들은 이제 주 2일 집에서 근무할 수 있습니다.",
            "zh": "员工现在可以每周在家工作两天。",
            "ja": "従業員は週に2日、自宅から仕事ができるようになりました。",
            "vi": "Nhân viên giờ đây có thể làm việc từ nhà hai ngày một tuần."
          }
        },
        {
          "role": "user",
          "text": "I’d like to work from home on Fridays.",
          "translations": {
            "ko": "금요일에는 집에서 일하고 싶습니다.",
            "zh": "我想在周五在家工作。",
            "ja": "私は金曜日に自宅から仕事をしたいです。",
            "vi": "Tôi muốn làm việc từ nhà vào thứ Sáu."
          }
        },
        {
          "role": "ai",
          "text": "Mondays and Fridays are the most common choices.",
          "translations": {
            "ko": "월요일과 금요일이 가장 일반적인 선택입니다.",
            "zh": "周一和周五是最常见的选择。",
            "ja": "月曜日と金曜日が最も一般的な選択です。",
            "vi": "Thứ Hai và thứ Sáu là những lựa chọn phổ biến nhất."
          }
        },
        {
          "role": "user",
          "text": "Will there be a shared calendar?",
          "translations": {
            "ko": "공유 캘린더가 있을까요?",
            "zh": "会有一个共享日历吗？",
            "ja": "共有カレンダーはありますか？",
            "vi": "Có lịch chung không?"
          }
        },
        {
          "role": "ai",
          "text": "Managers will coordinate schedules to avoid conflicts.",
          "translations": {
            "ko": "관리자들이 스케줄 충돌을 피하기 위해 조정할 것입니다.",
            "zh": "经理们将协调时间表以避免冲突。",
            "ja": "マネージャーがスケジュールを調整して、衝突を避けます。",
            "vi": "Quản lý sẽ điều phối lịch trình để tránh xung đột."
          }
        },
        {
          "role": "user",
          "text": "How do we handle meetings?",
          "translations": {
            "ko": "회의는 어떻게 처리하나요?",
            "zh": "我们如何处理会议？",
            "ja": "ミーティングはどう扱いますか？",
            "vi": "Chúng ta sẽ xử lý cuộc họp như thế nào?"
          }
        },
        {
          "role": "ai",
          "text": "We’ll evaluate the impact after three months.",
          "translations": {
            "ko": "3개월 후에 영향을 평가할 것입니다.",
            "zh": "我们将在三个月后评估影响。",
            "ja": "3ヶ月後に影響を評価します。",
            "vi": "Chúng tôi sẽ đánh giá tác động sau ba tháng."
          }
        },
        {
          "role": "user",
          "text": "Makes sense. Three months is a good trial.",
          "translations": {
            "ko": "그게 맞네요. 3개월은 좋은 시험 기간입니다.",
            "zh": "有道理。三个月是一个好的试用期。",
            "ja": "理解しました。3ヶ月は良い試行期間です。",
            "vi": "Đúng vậy. Ba tháng là một thời gian thử nghiệm tốt."
          }
        },
        {
          "role": "ai",
          "text": "VPN access is required for remote logins.",
          "translations": {
            "ko": "원격 로그인을 위해 VPN 접근이 필요합니다.",
            "zh": "远程登录需要VPN访问。",
            "ja": "リモートログインにはVPNアクセスが必要です。",
            "vi": "Cần truy cập VPN để đăng nhập từ xa."
          }
        },
        {
          "role": "user",
          "text": "I’ll set up VPN access soon.",
          "translations": {
            "ko": "곧 VPN 접근을 설정하겠습니다.",
            "zh": "我会尽快设置VPN访问。",
            "ja": "すぐにVPNアクセスを設定します。",
            "vi": "Tôi sẽ thiết lập truy cập VPN sớm."
          }
        },
        {
          "role": "ai",
          "text": "Please log your work hours daily.",
          "translations": {
            "ko": "매일 근무 시간을 기록해 주세요.",
            "zh": "请每天记录你的工作时间。",
            "ja": "毎日、勤務時間を記録してください。",
            "vi": "Vui lòng ghi lại giờ làm việc hàng ngày."
          }
        },
        {
          "role": "user",
          "text": "Logging hours shouldn't be a problem.",
          "translations": {
            "ko": "시간을 기록하는 것은 문제가 되지 않을 것입니다.",
            "zh": "记录时间不应该是问题。",
            "ja": "勤務時間の記録は問題ないはずです。",
            "vi": "Việc ghi giờ không phải là vấn đề."
          }
        },
        {
          "role": "ai",
          "text": "HR will provide training for the new tools.",
          "translations": {
            "ko": "인사팀이 새로운 도구에 대한 교육을 제공할 것입니다.",
            "zh": "人力资源部将为新工具提供培训。",
            "ja": "人事部が新しいツールのトレーニングを提供します。",
            "vi": "Bộ phận Nhân sự sẽ cung cấp đào tạo cho các công cụ mới."
          }
        },
        {
          "role": "user",
          "text": "Looking forward to the training.",
          "translations": {
            "ko": "교육을 기대하고 있습니다.",
            "zh": "期待这次培训。",
            "ja": "トレーニングを楽しみにしています。",
            "vi": "Mong chờ buổi đào tạo."
          }
        },
        {
          "role": "ai",
          "text": "Feedback is welcome during the trial period.",
          "translations": {
            "ko": "시험 기간 동안 피드백을 환영합니다.",
            "zh": "在试用期间欢迎提供反馈。",
            "ja": "試行期間中はフィードバックが歓迎されます。",
            "vi": "Phản hồi được hoan nghênh trong thời gian thử nghiệm."
          }
        },
        {
          "role": "user",
          "text": "Thanks, I’ll share any feedback I have.",
          "translations": {
            "ko": "감사합니다, 제가 가진 피드백을 공유하겠습니다.",
            "zh": "谢谢，我会分享我有的任何反馈。",
            "ja": "ありがとう、フィードバックがあれば共有します。",
            "vi": "Cảm ơn, tôi sẽ chia sẻ bất kỳ phản hồi nào tôi có."
          }
        },
        {
          "role": "ai",
          "text": "Any questions so far?",
          "translations": {
            "ko": "지금까지 질문 있으신가요?",
            "zh": "到目前为止有任何问题吗？",
            "ja": "これまでに質問はありますか？",
            "vi": "Có câu hỏi nào cho đến nay không?"
          }
        },
        {
          "role": "user",
          "text": "No questions. Thanks for the info!",
          "translations": {
            "ko": "질문은 없습니다. 정보 감사합니다!",
            "zh": "没有问题。谢谢你的信息！",
            "ja": "質問はありません。情報をありがとう！",
            "vi": "Không có câu hỏi. Cảm ơn vì thông tin!"
          }
        }
      ]
    },
    {
      "description": {
        "ko": "출장 준비 중",
        "zh": "准备商务旅行",
        "ja": "出張の準備をしています",
        "vi": "Chuẩn bị cho một chuyến công tác"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Let's review the itinerary for the trip.",
          "translations": {
            "ko": "여행 일정을 다시 한번 살펴봅시다.",
            "zh": "让我们回顾一下这次旅行的行程。",
            "ja": "旅行の行程を見直しましょう。",
            "vi": "Hãy xem lại lịch trình cho chuyến đi."
          }
        },
        {
          "role": "user",
          "text": "Thanks for organizing everything.",
          "translations": {
            "ko": "모든 것을 준비해 주셔서 감사합니다.",
            "zh": "感谢你组织的一切。",
            "ja": "すべてを整理してくれてありがとう。",
            "vi": "Cảm ơn vì đã tổ chức mọi thứ."
          }
        },
        {
          "role": "ai",
          "text": "Your flight is booked for Monday morning.",
          "translations": {
            "ko": "월요일 아침에 비행기를 예약했습니다.",
            "zh": "你的航班已经预订在周一早上。",
            "ja": "あなたのフライトは月曜日の朝に予約されています。",
            "vi": "Chuyến bay của bạn đã được đặt vào sáng thứ Hai."
          }
        },
        {
          "role": "user",
          "text": "What time should I be at the airport?",
          "translations": {
            "ko": "언제 공항에 가야 하나요?",
            "zh": "我应该什么时候到机场？",
            "ja": "何時に空港に着くべきですか？",
            "vi": "Tôi nên đến sân bay lúc mấy giờ?"
          }
        },
        {
          "role": "ai",
          "text": "The hotel is near the client’s office.",
          "translations": {
            "ko": "호텔은 고객사 사무실 근처에 있습니다.",
            "zh": "酒店靠近客户的办公室。",
            "ja": "ホテルはクライアントのオフィスの近くにあります。",
            "vi": "Khách sạn nằm gần văn phòng của khách hàng."
          }
        },
        {
          "role": "user",
          "text": "That’s convenient. Less travel time.",
          "translations": {
            "ko": "편리하네요. 이동 시간이 줄어듭니다.",
            "zh": "那很方便。旅行时间少。",
            "ja": "便利ですね。移動時間が少ない。",
            "vi": "Đó là thuận tiện. Ít thời gian di chuyển hơn."
          }
        },
        {
          "role": "ai",
          "text": "You’ll meet with them at 2 PM on Tuesday.",
          "translations": {
            "ko": "화요일 오후 2시에 그들과 만날 예정입니다.",
            "zh": "你将在周二下午2点与他们见面。",
            "ja": "彼らとは火曜日の午後2時に会います。",
            "vi": "Bạn sẽ gặp họ vào lúc 2 giờ chiều thứ Ba."
          }
        },
        {
          "role": "user",
          "text": "Got it. I’ll be there on time.",
          "translations": {
            "ko": "알겠습니다. 제 시간에 도착하겠습니다.",
            "zh": "明白了。我会准时到达。",
            "ja": "了解しました。時間通りにそこにいます。",
            "vi": "Được rồi. Tôi sẽ đến đúng giờ."
          }
        },
        {
          "role": "ai",
          "text": "A rental car has been arranged.",
          "translations": {
            "ko": "렌트카가 준비되어 있습니다.",
            "zh": "已经安排了租车。",
            "ja": "レンタカーが手配されました。",
            "vi": "Một chiếc xe cho thuê đã được sắp xếp."
          }
        },
        {
          "role": "user",
          "text": "Perfect, I prefer to drive myself.",
          "translations": {
            "ko": "완벽합니다, 저는 직접 운전하는 것을 선호합니다.",
            "zh": "太好了，我更喜欢自己开车。",
            "ja": "完璧です、自分で運転する方が好きです。",
            "vi": "Hoàn hảo, tôi thích tự lái xe."
          }
        },
        {
          "role": "ai",
          "text": "Please bring your presentation materials.",
          "translations": {
            "ko": "발표 자료를 가져와 주세요.",
            "zh": "请带上你的演示材料。",
            "ja": "プレゼンテーションの資料を持ってきてください。",
            "vi": "Vui lòng mang theo tài liệu thuyết trình của bạn."
          }
        },
        {
          "role": "user",
          "text": "I'll print extra copies just in case.",
          "translations": {
            "ko": "만약을 위해 추가 복사본을 인쇄하겠습니다.",
            "zh": "我会预备一些额外的副本以防万一。",
            "ja": "念のために余分なコピーを印刷します。",
            "vi": "Tôi sẽ in thêm bản sao phòng hờ."
          }
        },
        {
          "role": "ai",
          "text": "We've scheduled dinner with the partners.",
          "translations": {
            "ko": "파트너들과의 저녁 식사를 예약했습니다.",
            "zh": "我们已经安排了与合作伙伴的晚餐。",
            "ja": "パートナーとの夕食を予定しています。",
            "vi": "Chúng tôi đã lên lịch ăn tối với các đối tác."
          }
        },
        {
          "role": "user",
          "text": "Sounds good. Looking forward to it.",
          "translations": {
            "ko": "좋습니다. 기대하겠습니다.",
            "zh": "听起来不错。期待这次聚会。",
            "ja": "良さそうです。楽しみにしています。",
            "vi": "Nghe tốt đấy. Mong chờ đợi."
          }
        },
        {
          "role": "ai",
          "text": "Be sure to keep all receipts for expenses.",
          "translations": {
            "ko": "비용에 대한 모든 영수증을 꼭 보관하세요.",
            "zh": "请务必保留所有的费用收据。",
            "ja": "経費の領収書はすべて保管してください。",
            "vi": "Hãy chắc chắn giữ lại tất cả các biên lai chi phí."
          }
        },
        {
          "role": "user",
          "text": "Sure, I’ll keep the receipts.",
          "translations": {
            "ko": "알겠습니다, 영수증을 보관하겠습니다.",
            "zh": "好的，我会保留收据。",
            "ja": "はい、領収書は保管します。",
            "vi": "Được, tôi sẽ giữ lại biên lai."
          }
        },
        {
          "role": "ai",
          "text": "The weather looks mild in that region.",
          "translations": {
            "ko": "그 지역의 날씨는 온화한 것 같습니다.",
            "zh": "那个地区的天气看起来很温和。",
            "ja": "その地域の天気は穏やかそうです。",
            "vi": "Thời tiết ở khu vực đó có vẻ ôn hòa."
          }
        },
        {
          "role": "user",
          "text": "Thanks for the heads-up.",
          "translations": {
            "ko": "미리 알려주셔서 감사합니다.",
            "zh": "感谢你的提醒。",
            "ja": "事前に教えてくれてありがとう。",
            "vi": "Cảm ơn đã cảnh báo."
          }
        },
        {
          "role": "ai",
          "text": "Let us know if you need anything else.",
          "translations": {
            "ko": "다른 필요한 것이 있으면 알려주세요.",
            "zh": "如果你需要其他任何东西，请告诉我们。",
            "ja": "他に何か必要なものがあればお知らせください。",
            "vi": "Hãy cho chúng tôi biết nếu bạn cần thêm bất cứ thứ gì."
          }
        },
        {
          "role": "user",
          "text": "I will. Appreciate your help.",
          "translations": {
            "ko": "그렇게 하겠습니다. 도움 주셔서 감사합니다.",
            "zh": "我会的。感谢你的帮助。",
            "ja": "します。助けていただき感謝します。",
            "vi": "Tôi sẽ. Cảm ơn sự giúp đỡ của bạn."
          }
        }
      ]
    },
    {
      "description": {
        "ko": "분기별 성과 평가",
        "zh": "评估季度业绩",
        "ja": "四半期の業績を評価する",
        "vi": "Đánh giá hiệu suất quý"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Let’s begin with the sales performance.",
          "translations": {
            "ko": "판매 성과부터 시작해봅시다.",
            "zh": "让我们从销售业绩开始。",
            "ja": "売上のパフォーマンスから始めましょう。",
            "vi": "Hãy bắt đầu với hiệu suất bán hàng."
          }
        },
        {
          "role": "user",
          "text": "Those are strong numbers.",
          "translations": {
            "ko": "그것들은 강력한 숫자입니다.",
            "zh": "这些数字很强劲。",
            "ja": "それらは強力な数字です。",
            "vi": "Đó là những con số mạnh mẽ."
          }
        },
        {
          "role": "ai",
          "text": "Revenue grew 15% compared to last quarter.",
          "translations": {
            "ko": "매출이 지난 분기에 비해 15% 성장했습니다.",
            "zh": "与上季度相比，收入增长了15%。",
            "ja": "売上は前四半期に比べて15％増加しました。",
            "vi": "Doanh thu tăng 15% so với quý trước."
          }
        },
        {
          "role": "user",
          "text": "Great to see that improvement.",
          "translations": {
            "ko": "그 개선을 보게 되어 기쁩니다.",
            "zh": "看到这种改善真好。",
            "ja": "その改善を見るのは素晴らしいです。",
            "vi": "Thật tốt khi thấy sự cải thiện đó."
          }
        },
        {
          "role": "ai",
          "text": "Customer satisfaction also improved.",
          "translations": {
            "ko": "고객 만족도도 향상되었습니다.",
            "zh": "客户满意度也有所提高。",
            "ja": "顧客満足度も向上しました。",
            "vi": "Sự hài lòng của khách hàng cũng đã cải thiện."
          }
        },
        {
          "role": "user",
          "text": "Marketing did a great job.",
          "translations": {
            "ko": "마케팅 팀이 훌륭한 일을 했습니다.",
            "zh": "市场部做得很好。",
            "ja": "マーケティングは素晴らしい仕事をしました。",
            "vi": "Phòng Marketing đã làm rất tốt."
          }
        },
        {
          "role": "ai",
          "text": "The marketing campaign was effective.",
          "translations": {
            "ko": "마케팅 캠페인이 효과적이었습니다.",
            "zh": "市场营销活动非常有效。",
            "ja": "マーケティングキャンペーンは効果的でした。",
            "vi": "Chiến dịch marketing đã hiệu quả."
          }
        },
        {
          "role": "user",
          "text": "That makes sense.",
          "translations": {
            "ko": "그게 말이 됩니다.",
            "zh": "这讲得通。",
            "ja": "それは理にかなっています。",
            "vi": "Điều đó có lý."
          }
        },
        {
          "role": "ai",
          "text": "However, support ticket volume increased.",
          "translations": {
            "ko": "하지만, 지원 티켓의 양이 증가했습니다.",
            "zh": "然而，支持票务量增加了。",
            "ja": "しかし、サポートチケットの量が増えました。",
            "vi": "Tuy nhiên, số lượng vé hỗ trợ đã tăng."
          }
        },
        {
          "role": "user",
          "text": "We’ll address support issues quickly.",
          "translations": {
            "ko": "우리는 지원 문제를 빠르게 해결하겠습니다.",
            "zh": "我们会快速解决支持问题。",
            "ja": "サポート問題は迅速に対処します。",
            "vi": "Chúng tôi sẽ giải quyết nhanh chóng các vấn đề hỗ trợ."
          }
        },
        {
          "role": "ai",
          "text": "We need to improve response times.",
          "translations": {
            "ko": "응답 시간을 개선해야 합니다.",
            "zh": "我们需要提高响应时间。",
            "ja": "応答時間を改善する必要があります。",
            "vi": "Chúng ta cần cải thiện thời gian phản hồi."
          }
        },
        {
          "role": "user",
          "text": "Agreed. Let's streamline responses.",
          "translations": {
            "ko": "동의합니다. 응답을 효율화합시다.",
            "zh": "同意。让我们简化回应。",
            "ja": "同意します。レスポンスを効率化しましょう。",
            "vi": "Đồng ý. Hãy tối ưu hóa các phản hồi."
          }
        },
        {
          "role": "ai",
          "text": "Team morale is high overall.",
          "translations": {
            "ko": "팀의 사기는 전반적으로 높습니다.",
            "zh": "总体来说，团队士气很高。",
            "ja": "チームの士気は全体的に高いです。",
            "vi": "Tinh thần làm việc của đội ngũ rất cao."
          }
        },
        {
          "role": "user",
          "text": "That’s good to hear.",
          "translations": {
            "ko": "그것을 듣게 되어 좋습니다.",
            "zh": "听到这个消息很好。",
            "ja": "それは良いニュースです。",
            "vi": "Thật tốt khi nghe được điều đó."
          }
        },
        {
          "role": "ai",
          "text": "Expenses remained within budget.",
          "translations": {
            "ko": "비용은 예산 내에 유지되었습니다.",
            "zh": "费用保持在预算内。",
            "ja": "経費は予算内に収まりました。",
            "vi": "Chi phí vẫn nằm trong ngân sách."
          }
        },
        {
          "role": "user",
          "text": "Nice work on staying within budget.",
          "translations": {
            "ko": "예산 내에서 유지한 것에 대해 잘했습니다.",
            "zh": "在预算控制上做得好。",
            "ja": "予算内に収まったこと、良い仕事をしました。",
            "vi": "Làm tốt lắm trong việc tuân thủ ngân sách."
          }
        },
        {
          "role": "ai",
          "text": "Let’s set new goals for next quarter.",
          "translations": {
            "ko": "다음 분기에 대한 새로운 목표를 설정합시다.",
            "zh": "让我们为下个季度设定新的目标。",
            "ja": "次の四半期の新たな目標を設定しましょう。",
            "vi": "Hãy đặt mục tiêu mới cho quý tới."
          }
        },
        {
          "role": "user",
          "text": "I have a few suggestions to share.",
          "translations": {
            "ko": "제안할 몇 가지 사항이 있습니다.",
            "zh": "我有一些建议要分享。",
            "ja": "提案するいくつかの点があります。",
            "vi": "Tôi có một số đề xuất để chia sẻ."
          }
        },
        {
          "role": "ai",
          "text": "Any feedback on the results?",
          "translations": {
            "ko": "결과에 대한 피드백이 있나요?",
            "zh": "对结果有什么反馈吗？",
            "ja": "結果に対するフィードバックはありますか？",
            "vi": "Có phản hồi nào về kết quả không?"
          }
        },
        {
          "role": "user",
          "text": "Thanks for the detailed report.",
          "translations": {
            "ko": "자세한 보고서를 주셔서 감사합니다.",
            "zh": "感谢你的详细报告。",
            "ja": "詳細なレポートをありがとう。",
            "vi": "Cảm ơn báo cáo chi tiết."
          }
        }
      ]
    }
  ],
  "advanced": [
    {
      "description": {
        "en": "Discussing a company merger opportunity",
        "ko": "회사 합병 기회에 대해 논의하기",
        "zh": "讨论公司合并的机会",
        "ja": "企業合併の機会について議論する",
        "vi": "Thảo luận về cơ hội sáp nhập công ty"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Good morning. I’ve reviewed the merger proposal you sent over.",
          "translations": {
            "ko": "좋은 아침입니다. 제출해주신 합병 제안서를 검토했습니다.",
            "zh": "早上好。我已经审查了你发过来的合并提案。",
            "ja": "おはようございます。送っていただいた合併案を見ました。",
            "vi": "Chào buổi sáng. Tôi đã xem xét đề xuất sáp nhập mà bạn gửi.",
            "en": "Good morning. I’ve reviewed the merger proposal you sent over."
          }
        },
        {
          "role": "user",
          "text": "Great. Did anything stand out to you?",
          "translations": {
            "ko": "좋습니다. 눈에 띄는 부분이 있었나요?",
            "zh": "很好。有什么特别引人注目的吗？",
            "ja": "それは良いですね。何か特に目立つ点はありましたか？",
            "vi": "Tốt. Có điều gì đặc biệt không?",
            "en": "Great. Did anything stand out to you?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, there are some operational overlaps we should evaluate.",
          "translations": {
            "ko": "네, 우리가 평가해야 할 운영 중복이 있습니다.",
            "zh": "是的，有一些我们应该评估的运营重叠。",
            "ja": "はい、運用上の重複部分を評価するべきです。",
            "vi": "Có, có một số vấn đề chồng chéo về hoạt động mà chúng ta nên đánh giá.",
            "en": "Yes, there are some operational overlaps we should evaluate."
          }
        },
        {
          "role": "user",
          "text": "Do you mean team responsibilities or system redundancy?",
          "translations": {
            "ko": "팀의 책임이나 시스템 중복을 말씀하시는 건가요?",
            "zh": "你是指团队职责还是系统冗余？",
            "ja": "チームの責任やシステムの冗長性を指していますか？",
            "vi": "Bạn có nghĩa là trách nhiệm của nhóm hay sự dư thừa của hệ thống?",
            "en": "Do you mean team responsibilities or system redundancy?"
          }
        },
        {
          "role": "ai",
          "text": "Both. Especially in the logistics and HR departments.",
          "translations": {
            "ko": "둘 다입니다. 특히 물류와 인사 부서에서요.",
            "zh": "两者都有。尤其是在物流和人力资源部门。",
            "ja": "両方です。特に物流と人事部門で。",
            "vi": "Cả hai. Đặc biệt là trong các bộ phận logistics và nhân sự.",
            "en": "Both. Especially in the logistics and HR departments."
          }
        },
        {
          "role": "user",
          "text": "We anticipated that. Should we plan for gradual integration?",
          "translations": {
            "ko": "그건 예상했습니다. 점진적인 통합을 계획해야 할까요?",
            "zh": "我们预料到了这一点。我们应该计划逐步整合吗？",
            "ja": "それは予想していました。段階的な統合を計画すべきですか？",
            "vi": "Chúng tôi đã dự đoán điều đó. Chúng ta nên lên kế hoạch cho việc tích hợp dần dần?",
            "en": "We anticipated that. Should we plan for gradual integration?"
          }
        },
        {
          "role": "ai",
          "text": "That might help avoid resistance from both sides.",
          "translations": {
            "ko": "그렇게 하면 양측의 저항을 피할 수 있을 것입니다.",
            "zh": "这可能有助于避免双方的抵制。",
            "ja": "それは両方の抵抗を避けるのに役立つかもしれません。",
            "vi": "Điều đó có thể giúp tránh sự phản đối từ cả hai phía.",
            "en": "That might help avoid resistance from both sides."
          }
        },
        {
          "role": "user",
          "text": "Have we done a cultural fit assessment?",
          "translations": {
            "ko": "우리가 문화적 적합성 평가를 했나요?",
            "zh": "我们做过文化适应性评估吗？",
            "ja": "文化適合性の評価は行いましたか？",
            "vi": "Chúng ta đã thực hiện đánh giá văn hóa phù hợp chưa?",
            "en": "Have we done a cultural fit assessment?"
          }
        },
        {
          "role": "ai",
          "text": "Preliminary results show alignment, but communication styles differ.",
          "translations": {
            "ko": "초기 결과는 일치를 보이지만, 의사소통 스타일은 다릅니다.",
            "zh": "初步结果显示对齐，但沟通风格有所不同。",
            "ja": "予備的な結果は一致を示していますが、コミュニケーションスタイルは異なります。",
            "vi": "Kết quả sơ bộ cho thấy sự phù hợp, nhưng phong cách giao tiếp khác nhau.",
            "en": "Preliminary results show alignment, but communication styles differ."
          }
        },
        {
          "role": "user",
          "text": "We’ll need a unified onboarding approach then.",
          "translations": {
            "ko": "그럼 통합된 새로운 직원 온보딩 방식이 필요하겠네요.",
            "zh": "那么我们需要一个统一的入职方式。",
            "ja": "それなら統一したオンボーディングのアプローチが必要ですね。",
            "vi": "Chúng ta sẽ cần một phương pháp đào tạo mới nhất quán.",
            "en": "We’ll need a unified onboarding approach then."
          }
        },
        {
          "role": "ai",
          "text": "Agreed. Have you spoken to legal about compliance risks?",
          "translations": {
            "ko": "동의합니다. 법률팀에게 법규 준수 위험에 대해 물어봤나요?",
            "zh": "同意。你和法务部门谈过合规风险了吗？",
            "ja": "同意します。法務にコンプライアンスリスクについて話しましたか？",
            "vi": "Đồng ý. Bạn đã nói chuyện với pháp lý về rủi ro tuân thủ chưa?",
            "en": "Agreed. Have you spoken to legal about compliance risks?"
          }
        },
        {
          "role": "user",
          "text": "Yes, they’re drafting a checklist for cross-border issues.",
          "translations": {
            "ko": "네, 그들이 국경을 넘는 문제에 대한 체크리스트를 작성하고 있습니다.",
            "zh": "是的，他们正在起草一份跨境问题的清单。",
            "ja": "はい、彼らは国境を越えた問題についてチェックリストを作成しています。",
            "vi": "Có, họ đang soạn thảo danh sách kiểm tra cho các vấn đề xuyên quốc gia.",
            "en": "Yes, they’re drafting a checklist for cross-border issues."
          }
        },
        {
          "role": "ai",
          "text": "What about the board? Are they aligned on the direction?",
          "translations": {
            "ko": "이사회는 어떤가요? 방향성에 대해 일치하고 있나요?",
            "zh": "董事会呢？他们对方向达成一致了吗？",
            "ja": "役員会はどうですか？方向性について一致していますか？",
            "vi": "Còn ban giám đốc thì sao? Họ có đồng lòng về hướng đi không?",
            "en": "What about the board? Are they aligned on the direction?"
          }
        },
        {
          "role": "user",
          "text": "Mostly, but we’ll need stronger financial projections.",
          "translations": {
            "ko": "대부분은 그렇지만, 우리는 더 강력한 재무 예측이 필요합니다.",
            "zh": "大部分是，但我们需要更强的财务预测。",
            "ja": "大部分はそうですが、より強力な財務予測が必要です。",
            "vi": "Hầu hết, nhưng chúng ta sẽ cần dự báo tài chính mạnh mẽ hơn.",
            "en": "Mostly, but we’ll need stronger financial projections."
          }
        },
        {
          "role": "ai",
          "text": "I can prepare a side-by-side valuation for both entities.",
          "translations": {
            "ko": "두 기업의 가치를 나란히 비교할 수 있도록 준비하겠습니다.",
            "zh": "我可以为两个实体准备一份并列的估值。",
            "ja": "両エンティティの並列評価を準備できます。",
            "vi": "Tôi có thể chuẩn bị một đánh giá giá trị song song cho cả hai thực thể.",
            "en": "I can prepare a side-by-side valuation for both entities."
          }
        },
        {
          "role": "user",
          "text": "Perfect. Let’s also schedule a town hall for next week.",
          "translations": {
            "ko": "완벽합니다. 다음 주에 타운홀 미팅도 예정해봅시다.",
            "zh": "完美。让我们也安排下周的全体会议。",
            "ja": "完璧です。来週にタウンホールミーティングも予定しましょう。",
            "vi": "Hoàn hảo. Hãy lên lịch một cuộc họp cả thị trấn vào tuần sau.",
            "en": "Perfect. Let’s also schedule a town hall for next week."
          }
        },
        {
          "role": "ai",
          "text": "I’ll draft the agenda and share it this afternoon.",
          "translations": {
            "ko": "나는 의제를 작성해서 오후에 공유하겠습니다.",
            "zh": "我会起草议程并在今天下午分享。",
            "ja": "私が議題を作成し、今日の午後に共有します。",
            "vi": "Tôi sẽ soạn thảo chương trình và chia sẻ nó vào chiều nay.",
            "en": "I’ll draft the agenda and share it this afternoon."
          }
        },
        {
          "role": "user",
          "text": "Thanks. Should we involve the external consultants now?",
          "translations": {
            "ko": "고맙습니다. 이제 외부 컨설턴트를 참여시켜야 할까요?",
            "zh": "谢谢。我们现在应该让外部顾问参与吗？",
            "ja": "ありがとう。今、外部のコンサルタントを巻き込むべきですか？",
            "vi": "Cảm ơn. Chúng ta nên tham gia các tư vấn viên bên ngoài ngay bây giờ không?",
            "en": "Thanks. Should we involve the external consultants now?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, especially for regulatory approval strategy.",
          "translations": {
            "ko": "네, 특히 규제 승인 전략에 대해서요.",
            "zh": "是的，尤其是对于监管批准策略。",
            "ja": "はい、特に規制承認戦略のために。",
            "vi": "Có, đặc biệt là cho chiến lược phê duyệt quy định.",
            "en": "Yes, especially for regulatory approval strategy."
          }
        },
        {
          "role": "user",
          "text": "I’ll reach out and set up an initial briefing.",
          "translations": {
            "ko": "연락해서 초기 브리핑을 설정하겠습니다.",
            "zh": "我会联系并安排初步简报。",
            "ja": "連絡を取り、初回のブリーフィングを設定します。",
            "vi": "Tôi sẽ liên hệ và thiết lập một buổi hướng dẫn ban đầu.",
            "en": "I’ll reach out and set up an initial briefing."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Preparing for a high-stakes investor meeting",
        "ko": "고위험 투자자 회의 준비하기",
        "zh": "为高风险投资者会议做准备",
        "ja": "高額な投資家ミーティングの準備をする",
        "vi": "Chuẩn bị cho một cuộc họp với nhà đầu tư có mức độ rủi ro cao"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Let’s go over the investor pitch one last time.",
          "translations": {
            "ko": "투자자 피치를 마지막으로 한 번 더 살펴봅시다.",
            "zh": "让我们最后再过一遍投资者的演讲稿。",
            "ja": "投資家向けのピッチを最後に一度見直しましょう。",
            "vi": "Hãy xem lại lần cuối lời thuyết trình cho nhà đầu tư.",
            "en": "Let’s go over the investor pitch one last time."
          }
        },
        {
          "role": "user",
          "text": "Sure. I’ve updated the metrics with Q3 figures.",
          "translations": {
            "ko": "알겠습니다. Q3 지표를 업데이트했습니다.",
            "zh": "好的。我已经用第三季度的数据更新了指标。",
            "ja": "了解です。Q3の数字でメトリクスを更新しました。",
            "vi": "Được. Tôi đã cập nhật các số liệu với số liệu Q3.",
            "en": "Sure. I’ve updated the metrics with Q3 figures."
          }
        },
        {
          "role": "ai",
          "text": "Did you refine the messaging for product-market fit?",
          "translations": {
            "ko": "제품-시장 적합성에 대한 메시지를 개선했나요?",
            "zh": "你精炼了产品市场适应性的信息吗？",
            "ja": "商品市場適合性のメッセージングを洗練しましたか？",
            "vi": "Bạn đã chỉnh sửa thông điệp cho phù hợp với thị trường sản phẩm chưa?",
            "en": "Did you refine the messaging for product-market fit?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I added a new slide to highlight client testimonials.",
          "translations": {
            "ko": "네, 고객 평가를 강조하기 위해 새로운 슬라이드를 추가했습니다.",
            "zh": "是的，我增加了一个新的幻灯片来突出客户的推荐。",
            "ja": "はい、クライアントの証言を強調する新しいスライドを追加しました。",
            "vi": "Có, tôi đã thêm một slide mới để nổi bật phản hồi của khách hàng.",
            "en": "Yes, I added a new slide to highlight client testimonials."
          }
        },
        {
          "role": "ai",
          "text": "Nice touch. What about competitive differentiation?",
          "translations": {
            "ko": "좋은 생각입니다. 경쟁 차별화는 어떻게 되나요?",
            "zh": "好主意。竞争差异化呢？",
            "ja": "いい感じですね。競争力の差別化はどうですか？",
            "vi": "Tiếp xúc tốt. Còn về sự khác biệt cạnh tranh thì sao?",
            "en": "Nice touch. What about competitive differentiation?"
          }
        },
        {
          "role": "user",
          "text": "Page six outlines our unique tech stack and moat.",
          "translations": {
            "ko": "6페이지에는 우리의 독특한 기술 스택과 방어벽을 설명하고 있습니다.",
            "zh": "第六页概述了我们独特的技术堆栈和护城河。",
            "ja": "6ページ目で私たちのユニークな技術スタックと堅固さを概説しています。",
            "vi": "Trang sáu mô tả công nghệ độc đáo và lợi thế cạnh tranh của chúng tôi.",
            "en": "Page six outlines our unique tech stack and moat."
          }
        },
        {
          "role": "ai",
          "text": "Are you comfortable handling the financials section?",
          "translations": {
            "ko": "재무 부분을 다루는 데 자신이 있나요?",
            "zh": "你对处理财务部分感到舒服吗？",
            "ja": "財務部門のセクションを扱うことに自信はありますか？",
            "vi": "Bạn có thoải mái khi xử lý phần tài chính không?",
            "en": "Are you comfortable handling the financials section?"
          }
        },
        {
          "role": "user",
          "text": "I’ve rehearsed it, but a quick run-through would help.",
          "translations": {
            "ko": "연습했지만, 빠르게 한 번 더 진행하는 것이 도움이 될 것 같습니다.",
            "zh": "我已经排练过了，但快速的复习会有所帮助。",
            "ja": "練習しましたが、素早いリハーサルが助けになるでしょう。",
            "vi": "Tôi đã luyện tập nó, nhưng một buổi chạy nhanh sẽ giúp ích.",
            "en": "I’ve rehearsed it, but a quick run-through would help."
          }
        },
        {
          "role": "ai",
          "text": "Let’s do that right after lunch.",
          "translations": {
            "ko": "점심 후에 바로 그것을 해봅시다.",
            "zh": "我们午餐后就做这个。",
            "ja": "それは昼食後にやりましょう。",
            "vi": "Chúng ta sẽ làm điều đó ngay sau bữa trưa.",
            "en": "Let’s do that right after lunch."
          }
        },
        {
          "role": "user",
          "text": "Also, should we address our churn issue upfront?",
          "translations": {
            "ko": "또한, 우리의 이탈 문제를 먼저 제기해야 할까요?",
            "zh": "此外，我们应该先解决我们的流失问题吗？",
            "ja": "また、私たちのチャーン問題を最初に取り上げるべきですか？",
            "vi": "Ngoài ra, chúng ta có nên đề cập vấn đề churn ngay từ đầu không?",
            "en": "Also, should we address our churn issue upfront?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, transparency builds trust, especially at this level.",
          "translations": {
            "ko": "네, 특히 이 수준에서 투명성은 신뢰를 쌓습니다.",
            "zh": "是的，透明度能建立信任，尤其在这个层面。",
            "ja": "はい、透明性は特にこのレベルで信頼を築きます。",
            "vi": "Có, sự minh bạch tạo dựng niềm tin, đặc biệt ở cấp độ này.",
            "en": "Yes, transparency builds trust, especially at this level."
          }
        },
        {
          "role": "user",
          "text": "I’ll add a transition slide before the retention data.",
          "translations": {
            "ko": "보유 데이터 전에 전환 슬라이드를 추가하겠습니다.",
            "zh": "我会在保留数据之前添加一个过渡幻灯片。",
            "ja": "リテンションデータの前に遷移スライドを追加します。",
            "vi": "Tôi sẽ thêm một slide chuyển tiếp trước dữ liệu giữ chân.",
            "en": "I’ll add a transition slide before the retention data."
          }
        },
        {
          "role": "ai",
          "text": "Good idea. Have we locked in post-meeting follow-up emails?",
          "translations": {
            "ko": "좋은 생각입니다. 회의 후 이메일 팔로업을 확정했나요?",
            "zh": "好主意。我们确定了会后的跟进邮件吗？",
            "ja": "いいアイデアです。ミーティング後のフォローアップメールは確定しましたか？",
            "vi": "Ý tưởng tốt. Chúng ta đã khóa email theo dõi sau cuộc họp chưa?",
            "en": "Good idea. Have we locked in post-meeting follow-up emails?"
          }
        },
        {
          "role": "user",
          "text": "Drafted and ready for final approval.",
          "translations": {
            "ko": "초안을 작성하고 최종 승인을 기다리고 있습니다.",
            "zh": "已经起草并准备最后批准。",
            "ja": "下書きは完成し、最終承認待ちです。",
            "vi": "Đã soạn thảo và sẵn sàng cho phê duyệt cuối cùng.",
            "en": "Drafted and ready for final approval."
          }
        },
        {
          "role": "ai",
          "text": "Then we’re in solid shape. Let’s stay confident tomorrow.",
          "translations": {
            "ko": "그럼 우리는 확실한 상태입니다. 내일 자신감을 유지합시다.",
            "zh": "那我们的情况很稳定。明天让我们保持自信。",
            "ja": "それならば、私たちは順調です。明日は自信を持っていきましょう。",
            "vi": "Vậy thì chúng ta đã sẵn sàng. Hãy tự tin vào ngày mai.",
            "en": "Then we’re in solid shape. Let’s stay confident tomorrow."
          }
        },
        {
          "role": "user",
          "text": "Agreed. We’ve prepared thoroughly.",
          "translations": {
            "ko": "동의합니다. 우리는 철저히 준비했습니다.",
            "zh": "同意。我们已经做了充分的准备。",
            "ja": "同意します。私たちはしっかりと準備しました。",
            "vi": "Đồng ý. Chúng tôi đã chuẩn bị kỹ lưỡng.",
            "en": "Agreed. We’ve prepared thoroughly."
          }
        },
        {
          "role": "ai",
          "text": "Are you planning to open with the product demo or the vision?",
          "translations": {
            "ko": "제품 데모로 시작할 계획인가요, 아니면 비전을 먼저 제시할 계획인가요?",
            "zh": "你打算以产品演示还是愿景开场？",
            "ja": "プロダクトデモで始める予定ですか、それともビジョンで始めますか？",
            "vi": "Bạn có dự định mở đầu với demo sản phẩm hay tầm nhìn?",
            "en": "Are you planning to open with the product demo or the vision?"
          }
        },
        {
          "role": "user",
          "text": "I think a brief vision first, then straight to traction.",
          "translations": {
            "ko": "간단한 비전을 먼저 제시한 후, 바로 추진력으로 넘어가려고 합니다.",
            "zh": "我认为先简单介绍一下愿景，然后直接到吸引力。",
            "ja": "短いビジョンを最初に述べ、その後すぐにトラクションに移るつもりです。",
            "vi": "Tôi nghĩ một tầm nhìn ngắn gọn trước, sau đó là đến sự tiếp cận.",
            "en": "I think a brief vision first, then straight to traction."
          }
        },
        {
          "role": "ai",
          "text": "Sounds great. I’ll handle Q&A while you wrap up with next steps.",
          "translations": {
            "ko": "좋습니다. 당신이 다음 단계를 마무리하는 동안 나는 Q&A를 다루겠습니다.",
            "zh": "听起来很好。我会在你总结下一步时处理问答环节。",
            "ja": "良いと思います。私がQ&Aを行い、あなたが次のステップで締めくくります。",
            "vi": "Nghe tốt. Tôi sẽ xử lý phần Q&A trong khi bạn kết thúc với các bước tiếp theo.",
            "en": "Sounds great. I’ll handle Q&A while you wrap up with next steps."
          }
        },
        {
          "role": "user",
          "text": "Perfect. Let’s make it memorable.",
          "translations": {
            "ko": "완벽합니다. 기억에 남을 만한 것을 만들어봅시다.",
            "zh": "完美。让我们让它难以忘记。",
            "ja": "完璧です。思い出に残るものにしましょう。",
            "vi": "Hoàn hảo. Hãy làm cho nó đáng nhớ.",
            "en": "Perfect. Let’s make it memorable."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Negotiating contract terms with a client",
        "ko": "고객과 계약 조건 협상하기",
        "zh": "与客户协商合同条款",
        "ja": "クライアントとの契約条件の交渉",
        "vi": "Đàm phán các điều khoản hợp đồng với khách hàng"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Thanks for joining. Let’s review the revised contract.",
          "translations": {
            "ko": "참석해주셔서 감사합니다. 수정된 계약을 검토해봅시다.",
            "zh": "感谢你的参与。让我们回顾一下修订后的合同。",
            "ja": "参加していただきありがとうございます。改訂された契約を見直しましょう。",
            "vi": "Cảm ơn đã tham gia. Hãy xem lại hợp đồng đã được sửa đổi.",
            "en": "Thanks for joining. Let’s review the revised contract."
          }
        },
        {
          "role": "user",
          "text": "Sure. We had a few concerns about the deliverables section.",
          "translations": {
            "ko": "알겠습니다. 우리는 납품 항목 부분에 대해 몇 가지 우려가 있었습니다.",
            "zh": "好的。我们对交付部分有一些担忧。",
            "ja": "了解です。納品物のセクションについていくつか懸念がありました。",
            "vi": "Được. Chúng tôi có một số lo ngại về phần giao hàng.",
            "en": "Sure. We had a few concerns about the deliverables section."
          }
        },
        {
          "role": "ai",
          "text": "Is it about the timeline or scope?",
          "translations": {
            "ko": "시간표나 범위에 대한 것인가요?",
            "zh": "是关于时间表还是范围？",
            "ja": "タイムラインか範囲についてですか？",
            "vi": "Đó là về thời gian hay phạm vi?",
            "en": "Is it about the timeline or scope?"
          }
        },
        {
          "role": "user",
          "text": "Mainly the timeline—it feels a bit aggressive.",
          "translations": {
            "ko": "주로 시간표입니다. 조금 과도하게 느껴집니다.",
            "zh": "主要是时间表——感觉有点激进。",
            "ja": "主にタイムラインです。少し厳しいと感じました。",
            "vi": "Chủ yếu là thời gian - nó có vẻ hơi quá mức.",
            "en": "Mainly the timeline—it feels a bit aggressive."
          }
        },
        {
          "role": "ai",
          "text": "We’re open to adjusting milestones if needed.",
          "translations": {
            "ko": "필요하다면 마일스톤을 조정하는 데 개방적입니다.",
            "zh": "如果需要，我们愿意调整里程碑。",
            "ja": "必要であればマイルストーンを調整することに開放的です。",
            "vi": "Chúng tôi sẵn lòng điều chỉnh các mốc thời gian nếu cần.",
            "en": "We’re open to adjusting milestones if needed."
          }
        },
        {
          "role": "user",
          "text": "Great. Could we extend phase two by two weeks?",
          "translations": {
            "ko": "좋습니다. 2단계를 2주 연장할 수 있을까요?",
            "zh": "很好。我们能把第二阶段延长两周吗？",
            "ja": "それは良いですね。フェーズ2を2週間延長できますか？",
            "vi": "Tốt. Chúng ta có thể kéo dài giai đoạn hai thêm hai tuần không?",
            "en": "Great. Could we extend phase two by two weeks?"
          }
        },
        {
          "role": "ai",
          "text": "That’s doable. I’ll reflect that in the Gantt chart.",
          "translations": {
            "ko": "가능합니다. 그것을 간트 차트에 반영하겠습니다.",
            "zh": "可以做到。我会在甘特图中反映这一点。",
            "ja": "可能です。それをガントチャートに反映します。",
            "vi": "Điều đó khả thi. Tôi sẽ phản ánh điều đó trong biểu đồ Gantt.",
            "en": "That’s doable. I’ll reflect that in the Gantt chart."
          }
        },
        {
          "role": "user",
          "text": "Thanks. Also, can we clarify support hours?",
          "translations": {
            "ko": "감사합니다. 또한, 지원 시간을 명확히 할 수 있을까요?",
            "zh": "谢谢。另外，我们能澄清支持时间吗？",
            "ja": "ありがとう。また、サポート時間を明確にできますか？",
            "vi": "Cảm ơn. Ngoài ra, chúng ta có thể làm rõ giờ hỗ trợ không?",
            "en": "Thanks. Also, can we clarify support hours?"
          }
        },
        {
          "role": "ai",
          "text": "Our team is available 9 AM to 6 PM, with emergency coverage.",
          "translations": {
            "ko": "우리 팀은 오전 9시부터 오후 6시까지, 그리고 비상 상황에 대비해 이용 가능합니다.",
            "zh": "我们的团队在早上9点到下午6点可用，有紧急覆盖。",
            "ja": "私たちのチームは午前9時から午後6時まで利用可能で、緊急時のカバレッジもあります。",
            "vi": "Đội ngũ của chúng tôi sẵn sàng từ 9 giờ sáng đến 6 giờ chiều, với hỗ trợ khẩn cấp.",
            "en": "Our team is available 9 AM to 6 PM, with emergency coverage."
          }
        },
        {
          "role": "user",
          "text": "Perfect. Just include that in the appendix.",
          "translations": {
            "ko": "완벽합니다. 그것을 부록에 포함시켜 주세요.",
            "zh": "完美。只需在附录中包含这一点。",
            "ja": "完璧です。それを付録に含めてください。",
            "vi": "Hoàn hảo. Chỉ cần bao gồm điều đó trong phụ lục.",
            "en": "Perfect. Just include that in the appendix."
          }
        },
        {
          "role": "ai",
          "text": "Done. How about the termination clause—still 30 days?",
          "translations": {
            "ko": "완료했습니다. 해지 조항은 여전히 30일인가요?",
            "zh": "完成。关于终止条款——还是30天吗？",
            "ja": "了解しました。解約条項はまだ30日間ですか？",
            "vi": "Đã xong. Còn điều khoản chấm dứt - vẫn là 30 ngày?",
            "en": "Done. How about the termination clause—still 30 days?"
          }
        },
        {
          "role": "user",
          "text": "We’d prefer 45 days to allow for transition.",
          "translations": {
            "ko": "우리는 전환을 위해 45일을 선호합니다.",
            "zh": "我们更希望是45天，以便过渡。",
            "ja": "私たちは移行のために45日間が望ましいです。",
            "vi": "Chúng tôi muốn 45 ngày để cho phép chuyển đổi.",
            "en": "We’d prefer 45 days to allow for transition."
          }
        },
        {
          "role": "ai",
          "text": "That’s reasonable. I’ll note that as a mutual agreement.",
          "translations": {
            "ko": "그것은 합리적입니다. 나는 그것을 상호 합의 사항으로 기록하겠습니다.",
            "zh": "这是合理的。我会把这个作为共同协议来记录。",
            "ja": "理解しました。それを相互合意として記録します。",
            "vi": "Điều đó hợp lý. Tôi sẽ ghi chú điều đó như một thỏa thuận chung.",
            "en": "That’s reasonable. I’ll note that as a mutual agreement."
          }
        },
        {
          "role": "user",
          "text": "Appreciated. I think we’re nearly there.",
          "translations": {
            "ko": "감사합니다. 우리는 거의 다 왔습니다.",
            "zh": "感谢。我认为我们快到了。",
            "ja": "感謝します。私たちはほぼそこに到達しています。",
            "vi": "Được đánh giá cao. Tôi nghĩ chúng ta gần như đã hoàn thành.",
            "en": "Appreciated. I think we’re nearly there."
          }
        },
        {
          "role": "ai",
          "text": "One last thing—data ownership. Can we co-own generated data?",
          "translations": {
            "ko": "마지막으로, 데이터 소유권입니다. 우리가 생성된 데이터를 공동 소유할 수 있을까요?",
            "zh": "最后一件事——数据所有权。我们可以共同拥有生成的数据吗？",
            "ja": "最後に一つ、データ所有権についてです。生成されたデータを共有所有できますか？",
            "vi": "Một điều cuối cùng - quyền sở hữu dữ liệu. Chúng ta có thể sở hữu chung dữ liệu được tạo ra không?",
            "en": "One last thing—data ownership. Can we co-own generated data?"
          }
        },
        {
          "role": "user",
          "text": "I’ll check with legal, but we’re open to shared terms.",
          "translations": {
            "ko": "법률팀에게 확인해 보겠지만, 우리는 공유 조건에 개방적입니다.",
            "zh": "我会和法务部门核实，但我们愿意共享条款。",
            "ja": "法務に確認しますが、共有条件に開放的です。",
            "vi": "Tôi sẽ kiểm tra với pháp lý, nhưng chúng tôi mở cửa cho các điều khoản chia sẻ.",
            "en": "I’ll check with legal, but we’re open to shared terms."
          }
        },
        {
          "role": "ai",
          "text": "Great. Will there be a redline version sent after this call?",
          "translations": {
            "ko": "좋습니다. 이 통화 후에 수정된 버전이 보내질 예정인가요?",
            "zh": "很好。这次通话后会发送修订版吗？",
            "ja": "それは良いですね。この通話の後に赤字版が送られますか？",
            "vi": "Tốt. Sẽ có phiên bản sửa đổi được gửi sau cuộc gọi này không?",
            "en": "Great. Will there be a redline version sent after this call?"
          }
        },
        {
          "role": "user",
          "text": "Yes, you’ll receive it within 24 hours.",
          "translations": {
            "ko": "네, 24시간 이내에 받게 될 것입니다.",
            "zh": "是的，你将在24小时内收到。",
            "ja": "はい、24時間以内にそれを受け取ります。",
            "vi": "Có, bạn sẽ nhận được nó trong vòng 24 giờ.",
            "en": "Yes, you’ll receive it within 24 hours."
          }
        },
        {
          "role": "ai",
          "text": "Then we’re aligned. Let’s aim to sign before Friday.",
          "translations": {
            "ko": "그럼 우리는 일치합니다. 금요일 전에 서명하려고 합시다.",
            "zh": "那我们达成了一致。让我们争取在周五之前签署。",
            "ja": "それならば、私たちは一致しています。金曜日までに署名を目指しましょう。",
            "vi": "Vậy thì chúng ta đã thống nhất. Hãy nhắm đến việc ký trước thứ Sáu.",
            "en": "Then we’re aligned. Let’s aim to sign before Friday."
          }
        },
        {
          "role": "user",
          "text": "Agreed. Looking forward to moving ahead.",
          "translations": {
            "ko": "동의합니다. 진행을 기대하고 있습니다.",
            "zh": "同意。期待继续前进。",
            "ja": "同意します。前進するのを楽しみにしています。",
            "vi": "Đồng ý. Mong muốn tiếp tục phát triển.",
            "en": "Agreed. Looking forward to moving ahead."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Conducting a quarterly performance review",
        "ko": "분기별 성과 검토 실시하기",
        "zh": "进行季度绩效评估",
        "ja": "四半期業績レビューを行う",
        "vi": "Thực hiện đánh giá hiệu suất hàng quý"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Thanks for joining the Q3 performance review.",
          "translations": {
            "ko": "Q3 성과 검토에 참석해주셔서 감사합니다.",
            "zh": "感谢你参加第三季度的绩效评估。",
            "ja": "Q3の業績レビューに参加していただきありがとうございます。",
            "vi": "Cảm ơn đã tham gia đánh giá hiệu suất Q3.",
            "en": "Thanks for joining the Q3 performance review."
          }
        },
        {
          "role": "user",
          "text": "Glad to be here. I’ve prepared the key metrics.",
          "translations": {
            "ko": "여기에 참석하게 되어 기쁩니다. 주요 지표를 준비했습니다.",
            "zh": "很高兴在这里。我已经准备了关键指标。",
            "ja": "参加できてうれしいです。主要なメトリクスを準備しました。",
            "vi": "Rất vui được tham gia. Tôi đã chuẩn bị các chỉ số chính.",
            "en": "Glad to be here. I’ve prepared the key metrics."
          }
        },
        {
          "role": "ai",
          "text": "Let’s start with sales. How did we perform?",
          "translations": {
            "ko": "판매부터 시작해봅시다. 우리는 어떻게 수행했나요?",
            "zh": "让我们从销售开始。我们的表现如何？",
            "ja": "売上から始めましょう。どうでしたか？",
            "vi": "Hãy bắt đầu với doanh số. Chúng ta đã thực hiện như thế nào?",
            "en": "Let’s start with sales. How did we perform?"
          }
        },
        {
          "role": "user",
          "text": "We exceeded our target by 8%, mainly in the EU region.",
          "translations": {
            "ko": "우리는 목표를 8% 초과했습니다, 주로 EU 지역에서요.",
            "zh": "我们超出了目标8%，主要在欧盟地区。",
            "ja": "目標を8%上回りました。主にEU地域での成果です。",
            "vi": "Chúng tôi đã vượt mục tiêu 8%, chủ yếu ở khu vực EU.",
            "en": "We exceeded our target by 8%, mainly in the EU region."
          }
        },
        {
          "role": "ai",
          "text": "That’s encouraging. Any standout accounts?",
          "translations": {
            "ko": "그것은 흥미롭습니다. 눈에 띄는 계정이 있었나요?",
            "zh": "这很鼓舞人心。有任何突出的账户吗？",
            "ja": "それは励みになります。特に目立つアカウントはありましたか？",
            "vi": "Điều đó đáng mừng. Có tài khoản nào nổi bật không?",
            "en": "That’s encouraging. Any standout accounts?"
          }
        },
        {
          "role": "user",
          "text": "Yes, three new enterprise deals closed last month.",
          "translations": {
            "ko": "네, 지난 달에 세 개의 새로운 기업 거래가 체결되었습니다.",
            "zh": "是的，上个月关闭了三个新的企业交易。",
            "ja": "はい、先月に3つの新しいエンタープライズ取引が締結されました。",
            "vi": "Có, ba giao dịch doanh nghiệp mới đã được ký kết vào tháng trước.",
            "en": "Yes, three new enterprise deals closed last month."
          }
        },
        {
          "role": "ai",
          "text": "What about customer satisfaction?",
          "translations": {
            "ko": "고객 만족도는 어떻게 되나요?",
            "zh": "客户满意度呢？",
            "ja": "顧客満足度はどうでしたか？",
            "vi": "Còn sự hài lòng của khách hàng thì sao?",
            "en": "What about customer satisfaction?"
          }
        },
        {
          "role": "user",
          "text": "NPS rose to 68, up from 61 last quarter.",
          "translations": {
            "ko": "NPS는 지난 분기의 61에서 68로 상승했습니다.",
            "zh": "NPS从上季度的61上升到了68。",
            "ja": "NPSは前四半期の61から68に上昇しました。",
            "vi": "NPS tăng lên 68, tăng từ 61 quý trước.",
            "en": "NPS rose to 68, up from 61 last quarter."
          }
        },
        {
          "role": "ai",
          "text": "Nice progress. Any issues flagged?",
          "translations": {
            "ko": "좋은 진전입니다. 문제가 제기된 것이 있나요?",
            "zh": "进步很大。有任何问题被标记出来吗？",
            "ja": "素晴らしい進歩です。何か問題は指摘されましたか？",
            "vi": "Tiến bộ tốt. Có vấn đề nào được gắn cờ không?",
            "en": "Nice progress. Any issues flagged?"
          }
        },
        {
          "role": "user",
          "text": "Support tickets increased, but resolution time improved.",
          "translations": {
            "ko": "지원 티켓이 증가했지만, 해결 시간은 개선되었습니다.",
            "zh": "支持票据增加，但解决时间有所改善。",
            "ja": "サポートチケットは増えましたが、解決時間は改善しました。",
            "vi": "Số vé hỗ trợ tăng, nhưng thời gian giải quyết cải thiện.",
            "en": "Support tickets increased, but resolution time improved."
          }
        },
        {
          "role": "ai",
          "text": "Let’s investigate root causes for the spike.",
          "translations": {
            "ko": "급증의 근본 원인을 조사해봅시다.",
            "zh": "让我们调查峰值的根本原因。",
            "ja": "スパイクの原因を調査しましょう。",
            "vi": "Hãy điều tra nguyên nhân gốc rễ cho sự tăng.",
            "en": "Let’s investigate root causes for the spike."
          }
        },
        {
          "role": "user",
          "text": "I’ll analyze categories and prepare a report.",
          "translations": {
            "ko": "카테고리를 분석하고 보고서를 준비하겠습니다.",
            "zh": "我会分析类别并准备报告。",
            "ja": "カテゴリを分析し、レポートを作成します。",
            "vi": "Tôi sẽ phân tích các danh mục và chuẩn bị một báo cáo.",
            "en": "I’ll analyze categories and prepare a report."
          }
        },
        {
          "role": "ai",
          "text": "How did marketing perform on lead generation?",
          "translations": {
            "ko": "마케팅은 리드 생성에서 어떻게 수행했나요?",
            "zh": "市场部在潜在客户生成方面的表现如何？",
            "ja": "マーケティングはリード生成でどうパフォーマンスを発揮しましたか？",
            "vi": "Marketing đã thực hiện như thế nào trong việc tạo ra khách hàng tiềm năng?",
            "en": "How did marketing perform on lead generation?"
          }
        },
        {
          "role": "user",
          "text": "We fell slightly short, about 92% of the target.",
          "translations": {
            "ko": "우리는 약간 목표에 미치지 못했습니다, 대략 목표의 92% 정도입니다.",
            "zh": "我们稍微偏离了一点，大约是目标的92%。",
            "ja": "少し短かったです。目標の約92%です。",
            "vi": "Chúng tôi đã hơi thụt lùi, khoảng 92% mục tiêu.",
            "en": "We fell slightly short, about 92% of the target."
          }
        },
        {
          "role": "ai",
          "text": "Let’s brainstorm ways to improve next quarter.",
          "translations": {
            "ko": "다음 분기에 개선할 방법을 브레인스토밍해봅시다.",
            "zh": "让我们一起想办法在下个季度改善。",
            "ja": "来四半期に改善する方法をブレインストームしましょう。",
            "vi": "Hãy cùng suy nghĩ về cách cải thiện vào quý tới.",
            "en": "Let’s brainstorm ways to improve next quarter."
          }
        },
        {
          "role": "user",
          "text": "Agreed. I’ll schedule a cross-functional meeting.",
          "translations": {
            "ko": "동의합니다. 나는 부서 간 회의를 예정하겠습니다.",
            "zh": "同意。我会安排一个跨职能会议。",
            "ja": "同意します。クロスファンクショナルな会議を設定します。",
            "vi": "Đồng ý. Tôi sẽ lên lịch một cuộc họp chéo chức năng.",
            "en": "Agreed. I’ll schedule a cross-functional meeting."
          }
        },
        {
          "role": "ai",
          "text": "Overall, a solid quarter. Let’s keep momentum.",
          "translations": {
            "ko": "전반적으로, 탄탄한 분기였습니다. 우리는 추진력을 유지해야 합니다.",
            "zh": "总的来说，这是一个坚实的季度。让我们保持势头。",
            "ja": "全体的には堅調な四半期でした。勢いを保ちましょう。",
            "vi": "Nhìn chung, một quý tốt. Hãy giữ đà.",
            "en": "Overall, a solid quarter. Let’s keep momentum."
          }
        },
        {
          "role": "user",
          "text": "Thank you. I’ll circulate the review summary.",
          "translations": {
            "ko": "감사합니다. 나는 검토 요약을 순환시키겠습니다.",
            "zh": "谢谢。我会传播评估摘要。",
            "ja": "ありがとうございます。レビューの要約を周知します。",
            "vi": "Cảm ơn. Tôi sẽ gửi tóm tắt đánh giá.",
            "en": "Thank you. I’ll circulate the review summary."
          }
        },
        {
          "role": "ai",
          "text": "Perfect. Let’s reconvene next Friday to align on Q4.",
          "translations": {
            "ko": "완벽합니다. 다음 금요일에 Q4에 대해 일치하기 위해 다시 모이겠습니다.",
            "zh": "完美。让我们下周五再次聚首，以便在第四季度达成一致。",
            "ja": "完璧です。Q4について一致するために来週の金曜日に再会しましょう。",
            "vi": "Hoàn hảo. Hãy họp lại vào thứ Sáu tới để thống nhất về Q4.",
            "en": "Perfect. Let’s reconvene next Friday to align on Q4."
          }
        },
        {
          "role": "user",
          "text": "I’ll send out a calendar invite and include the summary.",
          "translations": {
            "ko": "나는 캘린더 초대장을 보내고 요약을 포함시키겠습니다.",
            "zh": "我会发送一个日历邀请并附上摘要。",
            "ja": "カレンダーの招待状を送り、要約を含めます。",
            "vi": "Tôi sẽ gửi lời mời lịch và bao gồm tóm tắt.",
            "en": "I’ll send out a calendar invite and include the summary."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Strategizing for international expansion",
        "ko": "국제 확장 전략 수립하기",
        "zh": "为国际扩张制定策略",
        "ja": "国際展開の戦略を練る",
        "vi": "Lập kế hoạch mở rộng quốc tế"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Have you reviewed the expansion plan into Southeast Asia?",
          "translations": {
            "ko": "동남아로의 확장 계획을 검토하셨나요?",
            "zh": "你审查过进入东南亚的扩张计划了吗？",
            "ja": "東南アジアへの展開計画を見直しましたか？",
            "vi": "Bạn đã xem xét kế hoạch mở rộng vào Đông Nam Á chưa?",
            "en": "Have you reviewed the expansion plan into Southeast Asia?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I’ve gone through the feasibility study.",
          "translations": {
            "ko": "네, 타당성 연구를 살펴봤습니다.",
            "zh": "是的，我已经看过可行性研究。",
            "ja": "はい、実現可能性調査を見ました。",
            "vi": "Có, tôi đã xem qua nghiên cứu khả thi.",
            "en": "Yes, I’ve gone through the feasibility study."
          }
        },
        {
          "role": "ai",
          "text": "What are your thoughts on market readiness?",
          "translations": {
            "ko": "시장 준비성에 대한 생각은 어떤가요?",
            "zh": "你对市场准备情况有什么看法？",
            "ja": "市場の準備状況についてどう思いますか？",
            "vi": "Bạn nghĩ gì về sự sẵn sàng của thị trường?",
            "en": "What are your thoughts on market readiness?"
          }
        },
        {
          "role": "user",
          "text": "Indonesia and Vietnam show promising indicators.",
          "translations": {
            "ko": "인도네시아와 베트남은 유망한 지표를 보여줍니다.",
            "zh": "印度尼西亚和越南显示出有希望的指标。",
            "ja": "インドネシアとベトナムは有望な指標を示しています。",
            "vi": "Indonesia và Việt Nam cho thấy các chỉ số đầy hứa hẹn.",
            "en": "Indonesia and Vietnam show promising indicators."
          }
        },
        {
          "role": "ai",
          "text": "What about regulatory challenges?",
          "translations": {
            "ko": "규제적인 도전은 어떻게 될까요?",
            "zh": "那么监管挑战呢？",
            "ja": "規制上の課題はありますか？",
            "vi": "Còn về thách thức pháp lý thì sao?",
            "en": "What about regulatory challenges?"
          }
        },
        {
          "role": "user",
          "text": "We’ll need local partners to navigate licensing.",
          "translations": {
            "ko": "라이선스를 취득하기 위해 현지 파트너가 필요할 것입니다.",
            "zh": "我们需要当地合作伙伴来导航许可。",
            "ja": "ライセンスを取得するためには地元のパートナーが必要です。",
            "vi": "Chúng ta sẽ cần đối tác địa phương để định hướng cấp phép.",
            "en": "We’ll need local partners to navigate licensing."
          }
        },
        {
          "role": "ai",
          "text": "Should we establish a regional office or use distributors?",
          "translations": {
            "ko": "우리는 지역 사무소를 설립해야 할까요, 아니면 유통업체를 사용해야 할까요?",
            "zh": "我们应该设立一个区域办公室还是使用分销商？",
            "ja": "地域オフィスを設立すべきですか、それともディストリビューターを利用すべきですか？",
            "vi": "Chúng ta nên thiết lập một văn phòng khu vực hay sử dụng nhà phân phối?",
            "en": "Should we establish a regional office or use distributors?"
          }
        },
        {
          "role": "user",
          "text": "Distributors first, then local entity by year two.",
          "translations": {
            "ko": "먼저 유통업체를 사용하고, 2년 후에 현지 법인을 설립합니다.",
            "zh": "先用分销商，然后在第二年设立当地实体。",
            "ja": "最初はディストリビューター、その後2年目に地元のエンティティーです。",
            "vi": "Nhà phân phối trước, sau đó là thực thể địa phương vào năm thứ hai.",
            "en": "Distributors first, then local entity by year two."
          }
        },
        {
          "role": "ai",
          "text": "And talent acquisition?",
          "translations": {
            "ko": "그리고 인재 확보는 어떻게 될까요?",
            "zh": "人才获取呢？",
            "ja": "人材獲得はどうですか？",
            "vi": "Và tuyển dụng nhân tài?",
            "en": "And talent acquisition?"
          }
        },
        {
          "role": "user",
          "text": "We’ll recruit bilingual managers and train them remotely.",
          "translations": {
            "ko": "우리는 이중 언어를 구사하는 관리자를 모집하고 원격으로 훈련시킬 것입니다.",
            "zh": "我们会招聘双语经理并远程培训他们。",
            "ja": "バイリンガルのマネージャーを採用し、遠隔で訓練します。",
            "vi": "Chúng tôi sẽ tuyển dụng các quản lý song ngữ và đào tạo họ từ xa.",
            "en": "We’ll recruit bilingual managers and train them remotely."
          }
        },
        {
          "role": "ai",
          "text": "What’s the estimated budget for phase one?",
          "translations": {
            "ko": "1단계에 대한 예상 예산은 얼마인가요?",
            "zh": "第一阶段的预计预算是多少？",
            "ja": "フェーズ1の予算はどのくらいですか？",
            "vi": "Ngân sách ước tính cho giai đoạn một là bao nhiêu?",
            "en": "What’s the estimated budget for phase one?"
          }
        },
        {
          "role": "user",
          "text": "Around $1.2 million, mostly in setup and hiring.",
          "translations": {
            "ko": "대략 120만 달러로, 주로 설립과 채용에 사용됩니다.",
            "zh": "大约120万美元，主要用于设立和招聘。",
            "ja": "約120万ドルで、主に設立と採用にかかります。",
            "vi": "Khoảng 1,2 triệu đô la, chủ yếu trong việc thiết lập và tuyển dụng.",
            "en": "Around $1.2 million, mostly in setup and hiring."
          }
        },
        {
          "role": "ai",
          "text": "Let’s present this to the board next week.",
          "translations": {
            "ko": "다음 주에 이사회에 이것을 제시합시다.",
            "zh": "让我们下周向董事会提交这个。",
            "ja": "来週、これを役員会に提出しましょう。",
            "vi": "Hãy trình bày điều này cho ban giám đốc vào tuần tới.",
            "en": "Let’s present this to the board next week."
          }
        },
        {
          "role": "user",
          "text": "I’ll prepare a one-pager with risks and timeline.",
          "translations": {
            "ko": "나는 위험과 시간표를 포함한 한 페이지 요약서를 준비하겠습니다.",
            "zh": "我会准备一份包含风险和时间表的一页纸。",
            "ja": "リスクとタイムラインを含む1ページの資料を準備します。",
            "vi": "Tôi sẽ chuẩn bị một trang với rủi ro và thời gian.",
            "en": "I’ll prepare a one-pager with risks and timeline."
          }
        },
        {
          "role": "ai",
          "text": "Make sure we also include brand localization plans.",
          "translations": {
            "ko": "브랜드 현지화 계획도 포함시켜야 합니다.",
            "zh": "确保我们也包括品牌本地化计划。",
            "ja": "ブランドのローカライゼーション計画も含めてください。",
            "vi": "Hãy đảm bảo chúng ta cũng bao gồm kế hoạch địa phương hóa thương hiệu.",
            "en": "Make sure we also include brand localization plans."
          }
        },
        {
          "role": "user",
          "text": "Yes, we’ve already begun early translation tests.",
          "translations": {
            "ko": "네, 우리는 이미 초기 번역 테스트를 시작했습니다.",
            "zh": "是的，我们已经开始了早期的翻译测试。",
            "ja": "はい、早期の翻訳テストはすでに始まっています。",
            "vi": "Có, chúng tôi đã bắt đầu thử nghiệm dịch thuật sớm.",
            "en": "Yes, we’ve already begun early translation tests."
          }
        },
        {
          "role": "ai",
          "text": "Great. Keep an eye on competitor activity.",
          "translations": {
            "ko": "좋습니다. 경쟁자 활동을 계속 주시하십시오.",
            "zh": "很好。密切关注竞争对手的活动。",
            "ja": "素晴らしいです。競合の活動を注意深く見てください。",
            "vi": "Tốt. Hãy theo dõi hoạt động của đối thủ.",
            "en": "Great. Keep an eye on competitor activity."
          }
        },
        {
          "role": "user",
          "text": "Understood. I’ll track their ad spend and PR.",
          "translations": {
            "ko": "이해했습니다. 나는 그들의 광고 지출과 PR을 추적하겠습니다.",
            "zh": "明白了。我会跟踪他们的广告支出和公关。",
            "ja": "了解しました。彼らの広告費とPRを追跡します。",
            "vi": "Hiểu rồi. Tôi sẽ theo dõi chi tiêu quảng cáo và PR của họ.",
            "en": "Understood. I’ll track their ad spend and PR."
          }
        },
        {
          "role": "ai",
          "text": "Thanks. This could be a major growth engine.",
          "translations": {
            "ko": "감사합니다. 이것은 주요 성장 엔진이 될 수 있습니다.",
            "zh": "谢谢。这可能是一个主要的增长引擎。",
            "ja": "ありがとう。これは大きな成長エンジンになる可能性があります。",
            "vi": "Cảm ơn. Điều này có thể là động cơ tăng trưởng lớn.",
            "en": "Thanks. This could be a major growth engine."
          }
        },
        {
          "role": "user",
          "text": "Let’s make sure we track metrics from day one.",
          "translations": {
            "ko": "첫날부터 지표를 추적하도록 합시다.",
            "zh": "让我们确保从第一天开始就跟踪指标。",
            "ja": "最初の日からメトリクスを追跡しましょう。",
            "vi": "Hãy đảm bảo chúng ta theo dõi các chỉ số từ ngày đầu tiên.",
            "en": "Let’s make sure we track metrics from day one."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Resolving an internal team conflict",
        "ko": "내부 팀 간의 충돌 해결하기",
        "zh": "解决内部团队冲突",
        "ja": "内部チームの対立を解決する",
        "vi": "Giải quyết một xung đột trong nhóm nội bộ"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "I wanted to discuss the tension between Product and Sales.",
          "translations": {
            "ko": "제품과 판매 간의 긴장을 논의하고 싶습니다.",
            "zh": "我想讨论一下产品和销售之间的紧张关系。",
            "ja": "プロダクトとセールスの間の緊張について話し合いたいと思います。",
            "vi": "Tôi muốn thảo luận về sự căng thẳng giữa Sản phẩm và Bán hàng.",
            "en": "I wanted to discuss the tension between Product and Sales."
          }
        },
        {
          "role": "user",
          "text": "Yes, it's starting to affect deadlines.",
          "translations": {
            "ko": "네, 이것이 마감 시간에 영향을 미치기 시작했습니다.",
            "zh": "是的，这开始影响到截止日期了。",
            "ja": "はい、それが締め切りに影響を与え始めています。",
            "vi": "Có, nó đang bắt đầu ảnh hưởng đến các thời hạn.",
            "en": "Yes, it's starting to affect deadlines."
          }
        },
        {
          "role": "ai",
          "text": "What triggered the conflict initially?",
          "translations": {
            "ko": "처음에 충돌을 일으킨 것은 무엇인가요?",
            "zh": "最初是什么引发了冲突？",
            "ja": "最初に対立を引き起こしたのは何ですか？",
            "vi": "Điều gì đã khởi đầu cho xung đột ban đầu?",
            "en": "What triggered the conflict initially?"
          }
        },
        {
          "role": "user",
          "text": "Misaligned expectations around feature prioritization.",
          "translations": {
            "ko": "기능 우선 순위에 대한 기대치 불일치입니다.",
            "zh": "对特性优先级的期望不一致。",
            "ja": "機能の優先順位についての期待値が一致していませんでした。",
            "vi": "Kỳ vọng không đồng nhất xung quanh việc ưu tiên tính năng.",
            "en": "Misaligned expectations around feature prioritization."
          }
        },
        {
          "role": "ai",
          "text": "Has either team escalated this formally?",
          "translations": {
            "ko": "어느 팀이 이것을 공식적으로 에스컬레이션했나요?",
            "zh": "有没有团队正式升级这个问题？",
            "ja": "どちらかのチームがこれを正式にエスカレートしましたか？",
            "vi": "Có nhóm nào đã đưa vấn đề này lên một cách chính thức không?",
            "en": "Has either team escalated this formally?"
          }
        },
        {
          "role": "user",
          "text": "Sales brought it up in last week’s sync.",
          "translations": {
            "ko": "판매 팀이 지난 주의 동기화에서 이것을 제기했습니다.",
            "zh": "销售在上周的同步会议中提出了这个问题。",
            "ja": "セールスが先週の同期会議でそれを持ち上げました。",
            "vi": "Bán hàng đã đề cập đến nó trong cuộc đồng bộ hóa tuần trước.",
            "en": "Sales brought it up in last week’s sync."
          }
        },
        {
          "role": "ai",
          "text": "Let’s bring both leads into a neutral setting.",
          "translations": {
            "ko": "두 팀의 리드를 중립적인 환경으로 데려오자.",
            "zh": "让我们把两个团队的领导带到一个中立的环境中。",
            "ja": "両方のリーダーを中立的な設定に持ち込みましょう。",
            "vi": "Hãy mời cả hai người dẫn dắt vào một môi trường trung lập.",
            "en": "Let’s bring both leads into a neutral setting."
          }
        },
        {
          "role": "user",
          "text": "I’ll set up a joint session with ground rules.",
          "translations": {
            "ko": "나는 규칙이 있는 공동 세션을 설정하겠습니다.",
            "zh": "我会设立一个有基本规则的联合会议。",
            "ja": "地面のルールを設けた共同セッションを設定します。",
            "vi": "Tôi sẽ thiết lập một phiên họp chung với các quy tắc cơ bản.",
            "en": "I’ll set up a joint session with ground rules."
          }
        },
        {
          "role": "ai",
          "text": "Should we involve HR?",
          "translations": {
            "ko": "HR을 참여시켜야 할까요?",
            "zh": "我们应该让人力资源部门参与吗？",
            "ja": "人事を巻き込むべきですか？",
            "vi": "Chúng ta nên tham gia HR không?",
            "en": "Should we involve HR?"
          }
        },
        {
          "role": "user",
          "text": "Only if the conflict continues post-mediation.",
          "translations": {
            "ko": "중재 후에도 충돌이 계속되면 참여시켜야 합니다.",
            "zh": "只有在冲突继续存在的情况下才需要。",
            "ja": "対立が調停後も続く場合のみです。",
            "vi": "Chỉ khi xung đột tiếp tục sau khi hòa giải.",
            "en": "Only if the conflict continues post-mediation."
          }
        },
        {
          "role": "ai",
          "text": "What’s the underlying issue—process or communication?",
          "translations": {
            "ko": "근본적인 문제는 프로세스인가요, 아니면 의사소통인가요?",
            "zh": "根本问题是什么——过程还是沟通？",
            "ja": "根本的な問題はプロセスかコミュニケーションですか？",
            "vi": "Vấn đề cơ bản là gì - quy trình hay giao tiếp?",
            "en": "What’s the underlying issue—process or communication?"
          }
        },
        {
          "role": "user",
          "text": "A bit of both. Also unclear SLAs.",
          "translations": {
            "ko": "둘 다입니다. 또한 SLA가 불명확합니다.",
            "zh": "两者都有。还有不清晰的服务等级协议。",
            "ja": "両方です。また、SLAが不明確です。",
            "vi": "Một chút cả hai. Cũng có SLA không rõ ràng.",
            "en": "A bit of both. Also unclear SLAs."
          }
        },
        {
          "role": "ai",
          "text": "Can we standardize request formats going forward?",
          "translations": {
            "ko": "앞으로 요청 형식을 표준화할 수 있을까요?",
            "zh": "我们能否在未来标准化请求格式？",
            "ja": "今後、リクエストの形式を標準化できますか？",
            "vi": "Chúng ta có thể chuẩn hóa các định dạng yêu cầu trong tương lai không?",
            "en": "Can we standardize request formats going forward?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I can draft a shared intake form.",
          "translations": {
            "ko": "네, 나는 공유 입력 양식을 작성할 수 있습니다.",
            "zh": "是的，我可以起草一个共享的接收表格。",
            "ja": "はい、共有の受け入れフォームを作成できます。",
            "vi": "Có, tôi có thể soạn thảo một biểu mẫu tiếp nhận chung.",
            "en": "Yes, I can draft a shared intake form."
          }
        },
        {
          "role": "ai",
          "text": "Let’s also clarify escalation paths.",
          "translations": {
            "ko": "에스컬레이션 경로도 명확히 해봅시다.",
            "zh": "让我们也澄清升级路径。",
            "ja": "エスカレーションパスも明確にしましょう。",
            "vi": "Hãy làm rõ đường dẫn tăng cấp.",
            "en": "Let’s also clarify escalation paths."
          }
        },
        {
          "role": "user",
          "text": "Agreed. Transparency will help rebuild trust.",
          "translations": {
            "ko": "동의합니다. 투명성은 신뢰를 회복하는 데 도움이 될 것입니다.",
            "zh": "同意。透明度将有助于重建信任。",
            "ja": "同意します。透明性は信頼を再構築するのに役立ちます。",
            "vi": "Đồng ý. Sự minh bạch sẽ giúp xây dựng lại niềm tin.",
            "en": "Agreed. Transparency will help rebuild trust."
          }
        },
        {
          "role": "ai",
          "text": "We’ll review progress in two weeks.",
          "translations": {
            "ko": "2주 후에 진행 상황을 검토하겠습니다.",
            "zh": "我们将在两周后审查进展情况。",
            "ja": "2週間後に進捗を見直しましょう。",
            "vi": "Chúng ta sẽ xem xét tiến trình trong hai tuần.",
            "en": "We’ll review progress in two weeks."
          }
        },
        {
          "role": "user",
          "text": "I'll track action items and share updates.",
          "translations": {
            "ko": "나는 액션 아이템을 추적하고 업데이트를 공유하겠습니다.",
            "zh": "我会跟踪行动项目并分享更新。",
            "ja": "アクションアイテムを追跡し、アップデートを共有します。",
            "vi": "Tôi sẽ theo dõi các mục tiêu hành động và chia sẻ cập nhật.",
            "en": "I'll track action items and share updates."
          }
        },
        {
          "role": "ai",
          "text": "Thanks. Let’s turn this into a growth opportunity.",
          "translations": {
            "ko": "감사합니다. 이것을 성장 기회로 만들어봅시다.",
            "zh": "谢谢。让我们把这个变成一个成长的机会。",
            "ja": "ありがとう。これを成長の機会にしましょう。",
            "vi": "Cảm ơn. Hãy biến điều này thành một cơ hội tăng trưởng.",
            "en": "Thanks. Let’s turn this into a growth opportunity."
          }
        },
        {
          "role": "user",
          "text": "Absolutely. We’ll document the process for future cases.",
          "translations": {
            "ko": "당연합니다. 우리는 미래의 경우를 위해 프로세스를 문서화하겠습니다.",
            "zh": "绝对。我们会为未来的案例记录这个过程。",
            "ja": "確かに。将来のケースのためにプロセスを文書化します。",
            "vi": "Chắc chắn. Chúng tôi sẽ ghi lại quy trình cho các trường hợp tương lai.",
            "en": "Absolutely. We’ll document the process for future cases."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Analyzing market trends for forecasting",
        "ko": "예측을 위한 시장 추세 분석하기",
        "zh": "分析市场趋势进行预测",
        "ja": "予測のための市場トレンドを分析する",
        "vi": "Phân tích xu hướng thị trường để dự báo"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Have you finalized the Q1 market trend report?",
          "translations": {
            "ko": "Q1 시장 추세 보고서를 완성하셨나요?",
            "zh": "你完成了第一季度的市场趋势报告了吗？",
            "ja": "Q1の市場トレンドレポートを完成させましたか？",
            "vi": "Bạn đã hoàn thiện báo cáo xu hướng thị trường Q1 chưa?",
            "en": "Have you finalized the Q1 market trend report?"
          }
        },
        {
          "role": "user",
          "text": "Yes, I’ve included sector-wise breakdowns.",
          "translations": {
            "ko": "네, 부문별 분석을 포함했습니다.",
            "zh": "是的，我已经包含了按行业划分的数据。",
            "ja": "はい、セクター別の内訳を含めました。",
            "vi": "Có, tôi đã bao gồm phân loại theo ngành.",
            "en": "Yes, I’ve included sector-wise breakdowns."
          }
        },
        {
          "role": "ai",
          "text": "What are the key shifts we should watch?",
          "translations": {
            "ko": "우리가 주시해야 할 주요 변화는 무엇인가요?",
            "zh": "我们应该关注哪些主要转变？",
            "ja": "私たちが注視すべき主要なシフトは何ですか？",
            "vi": "Những thay đổi chính mà chúng ta nên quan sát là gì?",
            "en": "What are the key shifts we should watch?"
          }
        },
        {
          "role": "user",
          "text": "Increased demand in B2B SaaS and FinTech.",
          "translations": {
            "ko": "B2B SaaS와 FinTech에서 수요가 증가했습니다.",
            "zh": "B2B SaaS和金融科技的需求增加。",
            "ja": "B2B SaaSとFinTechでの需要増加です。",
            "vi": "Nhu cầu tăng trong B2B SaaS và FinTech.",
            "en": "Increased demand in B2B SaaS and FinTech."
          }
        },
        {
          "role": "ai",
          "text": "Any signs of saturation?",
          "translations": {
            "ko": "포화 상태의 징후가 있나요?",
            "zh": "有饱和的迹象吗？",
            "ja": "飽和の兆候はありますか？",
            "vi": "Có dấu hiệu nào về sự bão hòa không?",
            "en": "Any signs of saturation?"
          }
        },
        {
          "role": "user",
          "text": "Slightly in edtech, based on CPC trends.",
          "translations": {
            "ko": "CPC 추세를 기반으로 edtech에서 약간입니다.",
            "zh": "根据CPC趋势，教育科技略有饱和。",
            "ja": "CPCのトレンドに基づいて、edtechではわずかにあります。",
            "vi": "Một chút trong edtech, dựa trên xu hướng CPC.",
            "en": "Slightly in edtech, based on CPC trends."
          }
        },
        {
          "role": "ai",
          "text": "How reliable is the survey data?",
          "translations": {
            "ko": "설문 조사 데이터는 얼마나 신뢰할 수 있나요?",
            "zh": "调查数据有多可靠？",
            "ja": "調査データの信頼性はどの程度ですか？",
            "vi": "Dữ liệu khảo sát có đáng tin cậy không?",
            "en": "How reliable is the survey data?"
          }
        },
        {
          "role": "user",
          "text": "Margin of error is under 3%, sample size over 2,000.",
          "translations": {
            "ko": "오차 범위는 3% 미만이고, 표본 크기는 2,000 이상입니다.",
            "zh": "误差范围在3%以下，样本量超过2000。",
            "ja": "誤差範囲は3%未満で、サンプルサイズは2000以上です。",
            "vi": "Sai số là dưới 3%, kích thước mẫu hơn 2.000.",
            "en": "Margin of error is under 3%, sample size over 2,000."
          }
        },
        {
          "role": "ai",
          "text": "Let’s map trends to our product roadmap.",
          "translations": {
            "ko": "우리의 제품 로드맵에 추세를 매핑합시다.",
            "zh": "让我们将趋势与我们的产品路线图对应起来。",
            "ja": "トレンドを私たちの製品ロードマップにマッピングしましょう。",
            "vi": "Hãy ánh xạ xu hướng với lộ trình sản phẩm của chúng ta.",
            "en": "Let’s map trends to our product roadmap."
          }
        },
        {
          "role": "user",
          "text": "Already aligned three features with emerging needs.",
          "translations": {
            "ko": "이미 세 가지 기능을 새로운 필요성에 맞춰 조정했습니다.",
            "zh": "已经将三个特性与新兴需求对齐。",
            "ja": "既に3つの機能を新たなニーズと一致させました。",
            "vi": "Đã định hướng ba tính năng với nhu cầu đang nổi lên.",
            "en": "Already aligned three features with emerging needs."
          }
        },
        {
          "role": "ai",
          "text": "Can you prepare visual insights for leadership?",
          "translations": {
            "ko": "리더십을 위한 시각적인 통찰력을 준비할 수 있나요?",
            "zh": "你能为领导层准备视觉洞察吗？",
            "ja": "リーダーシップのための視覚的な洞察を準備できますか？",
            "vi": "Bạn có thể chuẩn bị thông tin trực quan cho lãnh đạo không?",
            "en": "Can you prepare visual insights for leadership?"
          }
        },
        {
          "role": "user",
          "text": "Of course. I’ll finish charts by tomorrow.",
          "translations": {
            "ko": "물론입니다. 내일까지 차트를 완성하겠습니다.",
            "zh": "当然。我明天会完成图表。",
            "ja": "もちろんです。明日までにチャートを完成させます。",
            "vi": "Tất nhiên. Tôi sẽ hoàn thành biểu đồ vào ngày mai.",
            "en": "Of course. I’ll finish charts by tomorrow."
          }
        },
        {
          "role": "ai",
          "text": "Any notable competitor moves?",
          "translations": {
            "ko": "주요 경쟁사의 움직임이 있나요?",
            "zh": "有任何值得注意的竞争对手动向吗？",
            "ja": "注目すべき競争者の動きはありますか？",
            "vi": "Có động thái nổi bật nào của đối thủ không?",
            "en": "Any notable competitor moves?"
          }
        },
        {
          "role": "user",
          "text": "Yes, two major players entered Latin America.",
          "translations": {
            "ko": "네, 두 개의 주요 플레이어가 라틴 아메리카에 진입했습니다.",
            "zh": "是的，两个主要玩家进入了拉丁美洲。",
            "ja": "はい、2つの主要なプレーヤーがラテンアメリカに進出しました。",
            "vi": "Có, hai người chơi lớn đã vào Latin America.",
            "en": "Yes, two major players entered Latin America."
          }
        },
        {
          "role": "ai",
          "text": "Let’s evaluate if we should follow suit.",
          "translations": {
            "ko": "우리가 따라가야 할지 평가해봅시다.",
            "zh": "让我们评估我们是否应该效仿。",
            "ja": "私たちが追随すべきかどうかを評価しましょう。",
            "vi": "Hãy đánh giá xem chúng ta có nên theo đuổi không.",
            "en": "Let’s evaluate if we should follow suit."
          }
        },
        {
          "role": "user",
          "text": "I’ll model ROI for that scenario.",
          "translations": {
            "ko": "그 시나리오에 대한 ROI를 모델링하겠습니다.",
            "zh": "我会为这个场景建模ROI。",
            "ja": "そのシナリオのROIをモデル化します。",
            "vi": "Tôi sẽ mô phỏng ROI cho tình huống đó.",
            "en": "I’ll model ROI for that scenario."
          }
        },
        {
          "role": "ai",
          "text": "Good. Have finance review your assumptions.",
          "translations": {
            "ko": "좋습니다. 재무팀에게 가정을 검토하도록 하십시오.",
            "zh": "好的。让财务部门审查你的假设。",
            "ja": "良いですね。財務にあなたの仮定を見直してもらいましょう。",
            "vi": "Tốt. Hãy để tài chính xem xét giả định của bạn.",
            "en": "Good. Have finance review your assumptions."
          }
        },
        {
          "role": "user",
          "text": "Will do. We’ll validate before EOD.",
          "translations": {
            "ko": "그렇게 하겠습니다. EOD 전에 확인하겠습니다.",
            "zh": "好的。我们将在今天结束前进行验证。",
            "ja": "それをします。EOD前に検証します。",
            "vi": "Sẽ làm. Chúng tôi sẽ xác nhận trước EOD.",
            "en": "Will do. We’ll validate before EOD."
          }
        },
        {
          "role": "ai",
          "text": "Thanks. Forecasting looks sharper each quarter.",
          "translations": {
            "ko": "감사합니다. 매 분기마다 예측이 점점 더 선명해집니다.",
            "zh": "谢谢。每个季度的预测看起来都更加精确。",
            "ja": "ありがとう。予測は四半期ごとに鋭くなっています。",
            "vi": "Cảm ơn. Dự báo trông sắc nét hơn mỗi quý.",
            "en": "Thanks. Forecasting looks sharper each quarter."
          }
        },
        {
          "role": "user",
          "text": "We’re finally building consistent data practices.",
          "translations": {
            "ko": "우리는 드디어 일관된 데이터 관행을 구축하고 있습니다.",
            "zh": "我们终于在建立一致的数据实践。",
            "ja": "ついに一貫したデータ慣行を構築しています。",
            "vi": "Chúng tôi cuối cùng đã xây dựng thực hành dữ liệu nhất quán.",
            "en": "We’re finally building consistent data practices."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Navigating corporate compliance issues",
        "ko": "기업 규정 준수 문제 다루기",
        "zh": "导航公司合规问题",
        "ja": "企業コンプライアンス問題をナビゲートする",
        "vi": "Điều hướng các vấn đề tuân thủ doanh nghiệp"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Legal flagged some concerns in our latest partnership deal.",
          "translations": {
            "ko": "법률팀이 최근의 파트너십 거래에서 몇 가지 우려를 제기했습니다.",
            "zh": "法务部门在我们最新的合作协议中提出了一些担忧。",
            "ja": "法務は最新のパートナーシップ取引でいくつかの懸念を示しました。",
            "vi": "Pháp lý đã đưa ra một số lo ngại trong thỏa thuận đối tác mới nhất của chúng tôi.",
            "en": "Legal flagged some concerns in our latest partnership deal."
          }
        },
        {
          "role": "user",
          "text": "Yes, I saw the compliance report this morning.",
          "translations": {
            "ko": "네, 오늘 아침에 규정 준수 보고서를 봤습니다.",
            "zh": "是的，我今天早上看到了合规报告。",
            "ja": "はい、今朝コンプライアンスレポートを見ました。",
            "vi": "Có, tôi đã xem báo cáo tuân thủ sáng nay.",
            "en": "Yes, I saw the compliance report this morning."
          }
        },
        {
          "role": "ai",
          "text": "What are the major red flags?",
          "translations": {
            "ko": "주요 붉은 깃발은 무엇인가요?",
            "zh": "主要的红旗是什么？",
            "ja": "主な赤旗は何ですか？",
            "vi": "Những cờ đỏ lớn là gì?",
            "en": "What are the major red flags?"
          }
        },
        {
          "role": "user",
          "text": "Data privacy inconsistencies and unclear jurisdiction clauses.",
          "translations": {
            "ko": "데이터 개인 정보 보호 불일치와 불명확한 관할권 조항입니다.",
            "zh": "数据隐私不一致和不清晰的司法管辖条款。",
            "ja": "データプライバシーの不一致と不明確な管轄地域の条項です。",
            "vi": "Sự không nhất quán về quyền riêng tư dữ liệu và các điều khoản thẩm quyền không rõ ràng.",
            "en": "Data privacy inconsistencies and unclear jurisdiction clauses."
          }
        },
        {
          "role": "ai",
          "text": "Can we negotiate amendments before signing?",
          "translations": {
            "ko": "서명하기 전에 수정 사항을 협상할 수 있나요?",
            "zh": "我们能在签署前协商修改吗？",
            "ja": "署名する前に修正を交渉できますか？",
            "vi": "Chúng ta có thể đàm phán sửa đổi trước khi ký không?",
            "en": "Can we negotiate amendments before signing?"
          }
        },
        {
          "role": "user",
          "text": "Yes, but we need external counsel’s input.",
          "translations": {
            "ko": "네, 하지만 외부 법률자문의 의견이 필요합니다.",
            "zh": "是的，但我们需要外部法律顾问的意见。",
            "ja": "はい、しかし外部の弁護士の意見が必要です。",
            "vi": "Có, nhưng chúng tôi cần đầu vào của luật sư bên ngoài.",
            "en": "Yes, but we need external counsel’s input."
          }
        },
        {
          "role": "ai",
          "text": "Should we pause the deal temporarily?",
          "translations": {
            "ko": "일시적으로 거래를 중단해야 할까요?",
            "zh": "我们应该暂时暂停交易吗？",
            "ja": "一時的に取引を停止すべきですか？",
            "vi": "Chúng ta nên tạm dừng thỏa thuận tạm thời không?",
            "en": "Should we pause the deal temporarily?"
          }
        },
        {
          "role": "user",
          "text": "Not yet. Let’s aim for resolution within a week.",
          "translations": {
            "ko": "아직은 아닙니다. 일주일 내로 해결을 목표로 합시다.",
            "zh": "还不需要。让我们争取在一周内解决问题。",
            "ja": "まだです。1週間以内に解決を目指しましょう。",
            "vi": "Chưa. Hãy nhắm đến việc giải quyết trong vòng một tuần.",
            "en": "Not yet. Let’s aim for resolution within a week."
          }
        },
        {
          "role": "ai",
          "text": "What’s the financial risk if we proceed as is?",
          "translations": {
            "ko": "그대로 진행하면 재무적 위험은 어떻게 될까요?",
            "zh": "如果我们按原样进行，财务风险是什么？",
            "ja": "現状のまま進行する場合の財政的リスクは何ですか？",
            "vi": "Rủi ro tài chính nếu chúng ta tiếp tục như hiện tại là gì?",
            "en": "What’s the financial risk if we proceed as is?"
          }
        },
        {
          "role": "user",
          "text": "Potential fines under GDPR if user data is mishandled.",
          "translations": {
            "ko": "사용자 데이터가 잘못 처리될 경우 GDPR에 따른 벌금 위험이 있습니다.",
            "zh": "如果用户数据被处理不当，可能会根据GDPR被罚款。",
            "ja": "ユーザーデータが誤って取り扱われた場合のGDPRに基づく潜在的な罰金です。",
            "vi": "Có thể phạt theo GDPR nếu dữ liệu người dùng bị xử lý không đúng cách.",
            "en": "Potential fines under GDPR if user data is mishandled."
          }
        },
        {
          "role": "ai",
          "text": "Schedule a risk briefing with Finance and Legal.",
          "translations": {
            "ko": "재무와 법률팀과 함께 위험 브리핑을 예정하십시오.",
            "zh": "安排一个与财务和法务部门的风险简报。",
            "ja": "ファイナンスと法務にリスクブリーフィングをスケジュールします。",
            "vi": "Lên lịch một cuộc họp về rủi ro với Tài chính và Pháp lý.",
            "en": "Schedule a risk briefing with Finance and Legal."
          }
        },
        {
          "role": "user",
          "text": "Already on it. Friday 10 AM.",
          "translations": {
            "ko": "이미 그런 일을 하고 있습니다. 금요일 오전 10시.",
            "zh": "已经在进行中。周五上午10点。",
            "ja": "すでにそれを進めています。金曜日の午前10時です。",
            "vi": "Đã làm. Thứ Sáu lúc 10 giờ sáng.",
            "en": "Already on it. Friday 10 AM."
          }
        },
        {
          "role": "ai",
          "text": "Should we notify the board?",
          "translations": {
            "ko": "이사회에 알려야 할까요?",
            "zh": "我们应该通知董事会吗？",
            "ja": "役員会に通知すべきですか？",
            "vi": "Chúng ta nên thông báo cho ban giám đốc không?",
            "en": "Should we notify the board?"
          }
        },
        {
          "role": "user",
          "text": "Only after we finalize our mitigation steps.",
          "translations": {
            "ko": "우리가 완화 조치를 최종화한 후에만 알려야 합니다.",
            "zh": "只有在我们确定了我们的缓解步骤后才通知。",
            "ja": "私たちが緩和策を最終化した後のみです。",
            "vi": "Chỉ sau khi chúng tôi hoàn thiện các bước giảm thiểu của mình.",
            "en": "Only after we finalize our mitigation steps."
          }
        },
        {
          "role": "ai",
          "text": "Understood. Let’s update the due diligence checklist.",
          "translations": {
            "ko": "이해했습니다. 신속한 조사 체크리스트를 업데이트합시다.",
            "zh": "明白了。让我们更新尽职调查清单。",
            "ja": "了解しました。デューデリジェンスチェックリストを更新しましょう。",
            "vi": "Hiểu rồi. Hãy cập nhật danh sách kiểm tra due diligence.",
            "en": "Understood. Let’s update the due diligence checklist."
          }
        },
        {
          "role": "user",
          "text": "Done. Version 3 is in the shared folder.",
          "translations": {
            "ko": "완료했습니다. 버전 3이 공유 폴더에 있습니다.",
            "zh": "完成了。版本3在共享文件夹中。",
            "ja": "完了しました。バージョン3は共有フォルダにあります。",
            "vi": "Đã xong. Phiên bản 3 đang trong thư mục chia sẻ.",
            "en": "Done. Version 3 is in the shared folder."
          }
        },
        {
          "role": "ai",
          "text": "Thanks for acting quickly. Let’s stay vigilant.",
          "translations": {
            "ko": "빠르게 대응해주셔서 감사합니다. 경계를 유지합시다.",
            "zh": "感谢你的快速行动。让我们保持警惕。",
            "ja": "迅速に対応していただきありがとうございます。警戒を怠らないようにしましょう。",
            "vi": "Cảm ơn đã hành động nhanh chóng. Hãy luôn cảnh giác.",
            "en": "Thanks for acting quickly. Let’s stay vigilant."
          }
        },
        {
          "role": "user",
          "text": "Agreed. Compliance is a moving target.",
          "translations": {
            "ko": "동의합니다. 규정 준수는 계속 변하는 목표입니다.",
            "zh": "同意。合规是一个动态的目标。",
            "ja": "同意します。コンプライアンスは移り変わるターゲットです。",
            "vi": "Đồng ý. Tuân thủ là mục tiêu di động.",
            "en": "Agreed. Compliance is a moving target."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Debriefing after a failed project",
        "ko": "실패한 프로젝트 후 회고하기",
        "zh": "在项目失败后进行总结",
        "ja": "失敗したプロジェクトの後のデブリーフィング",
        "vi": "Tổng kết sau một dự án thất bại"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Thanks for joining this post-mortem. Let’s be constructive.",
          "translations": {
            "ko": "이 사후 검토에 참석해주셔서 감사합니다. 건설적으로 해봅시다.",
            "zh": "感谢你参加这次事后分析。让我们保持建设性。",
            "ja": "このポストモーテムに参加していただきありがとうございます。建設的に進めましょう。",
            "vi": "Cảm ơn đã tham gia cuộc họp sau cùng. Hãy xây dựng.",
            "en": "Thanks for joining this post-mortem. Let’s be constructive."
          }
        },
        {
          "role": "user",
          "text": "Absolutely. No blame, just insights.",
          "translations": {
            "ko": "물론입니다. 비난이 아니라 통찰력입니다.",
            "zh": "绝对。没有责备，只有洞察。",
            "ja": "確かに。非難ではなく、洞察です。",
            "vi": "Tất nhiên. Không đổ lỗi, chỉ tìm hiểu.",
            "en": "Absolutely. No blame, just insights."
          }
        },
        {
          "role": "ai",
          "text": "What was the main cause of project delay?",
          "translations": {
            "ko": "프로젝트 지연의 주요 원인은 무엇이었나요?",
            "zh": "项目延迟的主要原因是什么？",
            "ja": "プロジェクトの遅延の主な原因は何でしたか？",
            "vi": "Nguyên nhân chính của sự chậm trễ của dự án là gì?",
            "en": "What was the main cause of project delay?"
          }
        },
        {
          "role": "user",
          "text": "Underestimated complexity during planning.",
          "translations": {
            "ko": "계획 중 복잡성을 과소평가했습니다.",
            "zh": "在规划期间低估了复杂性。",
            "ja": "計画段階での複雑さを過小評価しました。",
            "vi": "Đánh giá thiếu chính xác về độ phức tạp trong quá trình lập kế hoạch.",
            "en": "Underestimated complexity during planning."
          }
        },
        {
          "role": "ai",
          "text": "Were the dependencies clearly defined?",
          "translations": {
            "ko": "의존성이 명확하게 정의되었나요?",
            "zh": "依赖性是否明确定义？",
            "ja": "依存関係は明確に定義されていましたか？",
            "vi": "Các phụ thuộc đã được xác định rõ ràng chưa?",
            "en": "Were the dependencies clearly defined?"
          }
        },
        {
          "role": "user",
          "text": "In hindsight, no. Cross-team alignment was weak.",
          "translations": {
            "ko": "회고적으로 보면, 아니요. 팀 간의 조정이 약했습니다.",
            "zh": "事后看来，没有。跨团队的对齐很弱。",
            "ja": "振り返ってみると、そうではありませんでした。チーム間の調整が弱かったです。",
            "vi": "Nhìn lại, không. Sự định hướng giữa các nhóm yếu.",
            "en": "In hindsight, no. Cross-team alignment was weak."
          }
        },
        {
          "role": "ai",
          "text": "Any process gaps identified?",
          "translations": {
            "ko": "확인된 프로세스의 공백이 있나요?",
            "zh": "有任何流程缺口被发现吗？",
            "ja": "特定されたプロセスのギャップはありますか？",
            "vi": "Có khoảng trống quy trình nào được xác định không?",
            "en": "Any process gaps identified?"
          }
        },
        {
          "role": "user",
          "text": "No contingency plan for critical path issues.",
          "translations": {
            "ko": "중요 경로 문제에 대한 비상 계획이 없었습니다.",
            "zh": "没有关键路径问题的应急计划。",
            "ja": "クリティカルパスの問題に対する緊急計画がありませんでした。",
            "vi": "Không có kế hoạch dự phòng cho các vấn đề đường dẫn quan trọng.",
            "en": "No contingency plan for critical path issues."
          }
        },
        {
          "role": "ai",
          "text": "Let’s update our project playbook accordingly.",
          "translations": {
            "ko": "우리의 프로젝트 플레이북을 그에 따라 업데이트합시다.",
            "zh": "让我们相应地更新我们的项目手册。",
            "ja": "それに応じて私たちのプロジェクトプレイブックを更新しましょう。",
            "vi": "Hãy cập nhật sách hướng dẫn dự án của chúng ta theo đó.",
            "en": "Let’s update our project playbook accordingly."
          }
        },
        {
          "role": "user",
          "text": "I’ll add a new section on risk scenarios.",
          "translations": {
            "ko": "나는 위험 시나리오에 대한 새로운 섹션을 추가하겠습니다.",
            "zh": "我会在风险场景中添加一个新的部分。",
            "ja": "リスクシナリオについての新しいセクションを追加します。",
            "vi": "Tôi sẽ thêm một phần mới về các tình huống rủi ro.",
            "en": "I’ll add a new section on risk scenarios."
          }
        },
        {
          "role": "ai",
          "text": "How was the team’s communication?",
          "translations": {
            "ko": "팀의 의사소통은 어떻게 되었나요?",
            "zh": "团队的沟通怎么样？",
            "ja": "チームのコミュニケーションはどうでしたか？",
            "vi": "Giao tiếp của nhóm như thế nào?",
            "en": "How was the team’s communication?"
          }
        },
        {
          "role": "user",
          "text": "Fragmented. Daily syncs may have helped.",
          "translations": {
            "ko": "파편화되었습니다. 매일 동기화가 도움이 되었을 것입니다.",
            "zh": "分散。每日同步可能会有所帮助。",
            "ja": "分断されていました。毎日の同期が助けになったかもしれません。",
            "vi": "Phân mảnh. Có thể các cuộc đồng bộ hóa hàng ngày đã giúp ích.",
            "en": "Fragmented. Daily syncs may have helped."
          }
        },
        {
          "role": "ai",
          "text": "Agreed. What went well despite the outcome?",
          "translations": {
            "ko": "동의합니다. 결과에도 불구하고 잘된 것은 무엇인가요?",
            "zh": "同意。尽管结果如何，有什么做得好的吗？",
            "ja": "同意します。結果にもかかわらず、何がうまくいったのですか？",
            "vi": "Đồng ý. Điều gì đã làm tốt dù kết quả?",
            "en": "Agreed. What went well despite the outcome?"
          }
        },
        {
          "role": "user",
          "text": "User feedback collection was strong.",
          "translations": {
            "ko": "사용자 피드백 수집이 강했습니다.",
            "zh": "用户反馈收集很强。",
            "ja": "ユーザーフィードバックの収集は強かったです。",
            "vi": "Việc thu thập phản hồi của người dùng mạnh mẽ.",
            "en": "User feedback collection was strong."
          }
        },
        {
          "role": "ai",
          "text": "We can reuse that module in future builds.",
          "translations": {
            "ko": "그 모듈은 향후 빌드에서 재사용할 수 있습니다.",
            "zh": "我们可以在未来的构建中重用那个模块。",
            "ja": "そのモジュールは将来のビルドで再利用できます。",
            "vi": "Chúng ta có thể sử dụng lại mô-đun đó trong các bản xây dựng tương lai.",
            "en": "We can reuse that module in future builds."
          }
        },
        {
          "role": "user",
          "text": "Definitely. Some assets are still valuable.",
          "translations": {
            "ko": "확실히 합니다. 일부 자산은 여전히 가치가 있습니다.",
            "zh": "当然。一些资产仍然有价值。",
            "ja": "確かに。一部のアセットはまだ価値があります。",
            "vi": "Chắc chắn. Một số tài sản vẫn còn giá trị.",
            "en": "Definitely. Some assets are still valuable."
          }
        },
        {
          "role": "ai",
          "text": "I’ll summarize lessons learned in a doc.",
          "translations": {
            "ko": "나는 배운 교훈을 문서로 요약하겠습니다.",
            "zh": "我会在文档中总结经验教训。",
            "ja": "学んだ教訓をドキュメントにまとめます。",
            "vi": "Tôi sẽ tóm tắt các bài học đã học trong một tài liệu.",
            "en": "I’ll summarize lessons learned in a doc."
          }
        },
        {
          "role": "user",
          "text": "Please share it in tomorrow’s standup.",
          "translations": {
            "ko": "내일 스탠드업에서 그것을 공유해 주세요.",
            "zh": "请在明天的站立会议中分享。",
            "ja": "明日のスタンドアップでそれを共有してください。",
            "vi": "Hãy chia sẻ nó trong cuộc họp ngày mai.",
            "en": "Please share it in tomorrow’s standup."
          }
        },
        {
          "role": "ai",
          "text": "Thanks. Let’s make this a learning experience.",
          "translations": {
            "ko": "감사합니다. 이것을 학습 경험으로 만들어봅시다.",
            "zh": "谢谢。让我们把这个变成一个学习经验。",
            "ja": "ありがとう。これを学習経験にしましょう。",
            "vi": "Cảm ơn. Hãy biến điều này thành một trải nghiệm học hỏi.",
            "en": "Thanks. Let’s make this a learning experience."
          }
        },
        {
          "role": "user",
          "text": "For sure. Every setback is a chance to improve.",
          "translations": {
            "ko": "확실히 합니다. 모든 좌절은 개선의 기회입니다.",
            "zh": "当然。每次挫折都是改进的机会。",
            "ja": "確かに。すべての挫折は改善の機会です。",
            "vi": "Chắc chắn. Mỗi thất bại là một cơ hội để cải thiện.",
            "en": "For sure. Every setback is a chance to improve."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Setting long-term strategic goals",
        "ko": "장기 전략적 목표 설정하기",
        "zh": "设定长期战略目标",
        "ja": "長期的な戦略目標を設定する",
        "vi": "Đặt mục tiêu chiến lược dài hạn"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "It’s time to align on our 3-year strategic goals.",
          "translations": {
            "ko": "3년 전략적 목표에 대해 일치하는 시간입니다.",
            "zh": "是时候对我们的三年战略目标达成一致了。",
            "ja": "私たちの3年間の戦略目標に一致する時期です。",
            "vi": "Đã đến lúc thống nhất về mục tiêu chiến lược 3 năm của chúng ta.",
            "en": "It’s time to align on our 3-year strategic goals."
          }
        },
        {
          "role": "user",
          "text": "Agreed. Let’s start with our north star metric.",
          "translations": {
            "ko": "동의합니다. 우리의 북극성 지표부터 시작합시다.",
            "zh": "同意。让我们从我们的北极星指标开始。",
            "ja": "同意します。まずは私たちの北極星メトリクスから始めましょう。",
            "vi": "Đồng ý. Hãy bắt đầu với chỉ số north star của chúng ta.",
            "en": "Agreed. Let’s start with our north star metric."
          }
        },
        {
          "role": "ai",
          "text": "I suggest customer lifetime value over just revenue.",
          "translations": {
            "ko": "나는 수익보다 고객 생애 가치를 제안합니다.",
            "zh": "我建议客户生命周期价值超过仅仅是收入。",
            "ja": "収益だけでなく、顧客生涯価値を提案します。",
            "vi": "Tôi đề xuất giá trị khách hàng trọn đời hơn là chỉ doanh thu.",
            "en": "I suggest customer lifetime value over just revenue."
          }
        },
        {
          "role": "user",
          "text": "Smart. That reflects retention and growth.",
          "translations": {
            "ko": "똑똑합니다. 그것은 유지와 성장을 반영합니다.",
            "zh": "聪明。这反映了保留和增长。",
            "ja": "賢明です。それはリテンションと成長を反映します。",
            "vi": "Thông minh. Điều đó phản ánh sự giữ chân và tăng trưởng.",
            "en": "Smart. That reflects retention and growth."
          }
        },
        {
          "role": "ai",
          "text": "Should we aim for international market share?",
          "translations": {
            "ko": "우리는 국제 시장 점유율을 목표로 해야 할까요?",
            "zh": "我们应该争取国际市场份额吗？",
            "ja": "国際市場シェアを目指すべきですか？",
            "vi": "Chúng ta nên nhắm đến thị phần quốc tế không?",
            "en": "Should we aim for international market share?"
          }
        },
        {
          "role": "user",
          "text": "Yes, with a target of 20% by year three.",
          "translations": {
            "ko": "네, 3년 후에 20%를 목표로 합니다.",
            "zh": "是的，目标是到第三年达到20%。",
            "ja": "はい、3年目までに20%を目指します。",
            "vi": "Có, với mục tiêu 20% vào năm thứ ba.",
            "en": "Yes, with a target of 20% by year three."
          }
        },
        {
          "role": "ai",
          "text": "How do we plan to get there?",
          "translations": {
            "ko": "우리는 어떻게 그곳에 도달할 계획인가요?",
            "zh": "我们打算如何实现？",
            "ja": "そこに到達するための計画は何ですか？",
            "vi": "Chúng ta dự định đi đến đó như thế nào?",
            "en": "How do we plan to get there?"
          }
        },
        {
          "role": "user",
          "text": "Via product-led growth and localized content.",
          "translations": {
            "ko": "제품 중심의 성장과 현지화된 콘텐츠를 통해입니다.",
            "zh": "通过产品引导的增长和本地化内容。",
            "ja": "製品主導の成長とローカライズされたコンテンツを通じてです。",
            "vi": "Thông qua tăng trưởng dẫn dắt bởi sản phẩm và nội dung địa phương hóa.",
            "en": "Via product-led growth and localized content."
          }
        },
        {
          "role": "ai",
          "text": "Any org changes needed?",
          "translations": {
            "ko": "조직 변경이 필요한가요?",
            "zh": "需要任何组织变革吗？",
            "ja": "必要な組織変更はありますか？",
            "vi": "Có thay đổi tổ chức nào cần thiết không?",
            "en": "Any org changes needed?"
          }
        },
        {
          "role": "user",
          "text": "We may need a strategy and ops lead.",
          "translations": {
            "ko": "우리는 전략과 운영 리드가 필요할 수 있습니다.",
            "zh": "我们可能需要一个战略和运营领导。",
            "ja": "我々は戦略と運営のリーダーが必要かもしれません。",
            "vi": "Chúng ta có thể",
            "en": "We may need a strategy and ops lead."
          }
        },
        {
          "role": "ai",
          "text": "Let’s map initiatives by quarter.",
          "translations": {
            "ko": "분기별로 계획을 매핑합시다.",
            "zh": "让我们按季度划分计划。",
            "ja": "四半期ごとにイニシアチブをマッピングしましょう。",
            "vi": "",
            "en": "Let’s map initiatives by quarter."
          }
        },
        {
          "role": "user",
          "text": "I’ll draft a timeline tied to KPIs.",
          "translations": {
            "ko": "나는 KPI와 연계된 타임라인을 작성하겠습니다.",
            "zh": "我会起草一个与KPIs相关的时间表。",
            "ja": "KPIに連動したタイムラインを作成します。",
            "vi": "",
            "en": "I’ll draft a timeline tied to KPIs."
          }
        },
        {
          "role": "ai",
          "text": "Include risk factors and fallback plans.",
          "translations": {
            "ko": "위험 요인과 대체 계획을 포함시킵시다.",
            "zh": "包括风险因素和备用计划。",
            "ja": "リスク要因とフォールバックプランを含めてください。",
            "vi": "",
            "en": "Include risk factors and fallback plans."
          }
        },
        {
          "role": "user",
          "text": "Already started a matrix for that.",
          "translations": {
            "ko": "이미 그에 대한 행렬을 시작했습니다.",
            "zh": "已经开始为此制作矩阵。",
            "ja": "すでにそのためのマトリックスを作成し始めています。",
            "vi": "",
            "en": "Already started a matrix for that."
          }
        },
        {
          "role": "ai",
          "text": "Great. What about cultural alignment?",
          "translations": {
            "ko": "좋습니다. 문화적 일치는 어떻게 될까요?",
            "zh": "很好。关于文化对齐呢？",
            "ja": "素晴らしいです。文化的な一致はどうですか？",
            "vi": "",
            "en": "Great. What about cultural alignment?"
          }
        },
        {
          "role": "user",
          "text": "We should reinforce values through onboarding.",
          "translations": {
            "ko": "우리는 온보딩을 통해 가치를 강화해야 합니다.",
            "zh": "我们应该通过入职来强化价值观。",
            "ja": "オンボーディングを通じて価値を強化すべきです。",
            "vi": "",
            "en": "We should reinforce values through onboarding."
          }
        },
        {
          "role": "ai",
          "text": "Perfect. Let’s finalize and share with execs.",
          "translations": {
            "ko": "완벽합니다. 최종화하고 임원들에게 공유합시다.",
            "zh": "完美。让我们最后确定并与高管分享。",
            "ja": "完璧です。最終化し、エグゼクティブに共有しましょう。",
            "vi": "",
            "en": "Perfect. Let’s finalize and share with execs."
          }
        },
        {
          "role": "user",
          "text": "I’ll polish the deck and send it tonight.",
          "translations": {
            "ko": "나는 덱을 다듬고 오늘 밤에 보내겠습니다.",
            "zh": "我会润色幻灯片并在今晚发送。",
            "ja": "デッキを磨き、今夜それを送ります。",
            "vi": "",
            "en": "I’ll polish the deck and send it tonight."
          }
        },
        {
          "role": "ai",
          "text": "Also, let’s ensure regular progress reviews every quarter.",
          "translations": {
            "ko": "또한, 매 분기마다 정기적인 진행 상황 검토를 확실히 해야 합니다.",
            "zh": "另外，让我们确保每个季度都进行定期的进度审查。",
            "ja": "また、毎四半期ごとに定期的な進捗レビューを行いましょう。",
            "vi": "",
            "en": "Also, let’s ensure regular progress reviews every quarter."
          }
        },
        {
          "role": "user",
          "text": "Absolutely. I’ll set recurring check-ins with leadership.",
          "translations": {
            "ko": "당연합니다. 나는 리더십과 함께 반복적인 체크인을 설정하겠습니다.",
            "zh": "绝对。我会与领导层设定定期检查。",
            "ja": "確かに。リーダーシップとの定期的なチェックインを設定します。",
            "vi": "",
            "en": "Absolutely. I’ll set recurring check-ins with leadership."
          }
        }
      ]
    }
  ]
};