import { LevelType, PracticeScene } from '../types';

export const templateDialogs: Record<LevelType, readonly PracticeScene[]> = {
  "beginner": [
    {
      "description": {
        "en": "Starting a meeting",
        "ko": "회의 시작",
        "zh": "开始会议",
        "ja": "ミーティングを始める",
        "vi": "Bắt đầu cuộc họp"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Good morning, everyone. Let’s get started.",
          "translations": {
            "ko": "모두 좋은 아침입니다. 시작하겠습니다.",
            "zh": "大家早上好，我们开始吧。",
            "ja": "皆さん、おはようございます。始めましょう。",
            "vi": "Chào buổi sáng mọi người. Chúng ta hãy bắt đầu.",
            "en": "Good morning, everyone. Let’s get started."
          }
        },
        {
          "role": "user",
          "text": "Good morning.",
          "translations": {
            "ko": "좋은 아침입니다.",
            "zh": "早上好。",
            "ja": "おはようございます。",
            "vi": "Chào buổi sáng.",
            "en": "Good morning."
          }
        },
        {
          "role": "ai",
          "text": "Can you all hear me clearly?",
          "translations": {
            "ko": "모두 제 목소리 잘 들리시나요?",
            "zh": "大家都能清楚地听到我说话吗？",
            "ja": "私の声、皆さんにはっきり聞こえますか？",
            "vi": "Mọi người có thể nghe tôi rõ không?",
            "en": "Can you all hear me clearly?"
          }
        },
        {
          "role": "user",
          "text": "Yes, loud and clear.",
          "translations": {
            "ko": "네, 잘 들립니다.",
            "zh": "是的，听得很清楚。",
            "ja": "はい、はっきり聞こえます。",
            "vi": "Có, rất rõ.",
            "en": "Yes, loud and clear."
          }
        },
        {
          "role": "ai",
          "text": "Today’s meeting will be short.",
          "translations": {
            "ko": "오늘 회의는 짧게 진행될 예정입니다.",
            "zh": "今天的会议会很短。",
            "ja": "今日のミーティングは短いです。",
            "vi": "Cuộc họp hôm nay sẽ ngắn.",
            "en": "Today’s meeting will be short."
          }
        },
        {
          "role": "user",
          "text": "Sounds good.",
          "translations": {
            "ko": "좋습니다.",
            "zh": "听起来不错。",
            "ja": "了解です。",
            "vi": "Tốt lắm.",
            "en": "Sounds good."
          }
        },
        {
          "role": "ai",
          "text": "We’ll focus on project updates.",
          "translations": {
            "ko": "프로젝트 업데이트에 집중하겠습니다.",
            "zh": "我们将重点讨论项目更新。",
            "ja": "プロジェクトの進捗に焦点を当てます。",
            "vi": "Chúng ta sẽ tập trung vào cập nhật dự án.",
            "en": "We’ll focus on project updates."
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
          "text": "Let’s keep our comments brief.",
          "translations": {
            "ko": "의견은 간략하게 말씀해주세요.",
            "zh": "让我们的评论简短一些。",
            "ja": "コメントは短くしましょう。",
            "vi": "Hãy giữ ý kiến của mình ngắn gọn.",
            "en": "Let’s keep our comments brief."
          }
        },
        {
          "role": "user",
          "text": "Understood.",
          "translations": {
            "ko": "알겠습니다.",
            "zh": "明白了。",
            "ja": "了解しました。",
            "vi": "Đã hiểu.",
            "en": "Understood."
          }
        },
        {
          "role": "ai",
          "text": "Any urgent topics to add?",
          "translations": {
            "ko": "긴급하게 추가할 주제가 있나요?",
            "zh": "有需要紧急添加的话题吗？",
            "ja": "追加で緊急のトピックはありますか？",
            "vi": "Có chủ đề cần thảo luận gấp không?",
            "en": "Any urgent topics to add?"
          }
        },
        {
          "role": "user",
          "text": "No, not from me.",
          "translations": {
            "ko": "아니요, 제가 추가할 것은 없습니다.",
            "zh": "不，我这边没有。",
            "ja": "私からはありません。",
            "vi": "Không, không có gì từ tôi.",
            "en": "No, not from me."
          }
        },
        {
          "role": "ai",
          "text": "Great. Let’s begin with the first item.",
          "translations": {
            "ko": "좋습니다. 첫 번째 항목부터 시작하겠습니다.",
            "zh": "很好，我们从第一项开始吧。",
            "ja": "それでは、最初の項目から始めましょう。",
            "vi": "Tốt. Chúng ta hãy bắt đầu với mục đầu tiên.",
            "en": "Great. Let’s begin with the first item."
          }
        },
        {
          "role": "user",
          "text": "Ready.",
          "translations": {
            "ko": "준비되었습니다.",
            "zh": "准备好了。",
            "ja": "準備はできています。",
            "vi": "Sẵn sàng.",
            "en": "Ready."
          }
        },
        {
          "role": "ai",
          "text": "We’ll go around one by one.",
          "translations": {
            "ko": "차례대로 진행하겠습니다.",
            "zh": "我们将依次进行。",
            "ja": "一人ずつ順番に進めます。",
            "vi": "Chúng ta sẽ thảo luận từng người một.",
            "en": "We’ll go around one by one."
          }
        },
        {
          "role": "user",
          "text": "Sure.",
          "translations": {
            "ko": "알겠습니다.",
            "zh": "好的。",
            "ja": "了解です。",
            "vi": "Được.",
            "en": "Sure."
          }
        },
        {
          "role": "ai",
          "text": "Let’s stay on schedule.",
          "translations": {
            "ko": "일정을 지켜주세요.",
            "zh": "让我们按照时间表进行。",
            "ja": "スケジュール通りに進めましょう。",
            "vi": "Hãy giữ lịch trình.",
            "en": "Let’s stay on schedule."
          }
        },
        {
          "role": "user",
          "text": "Got it.",
          "translations": {
            "ko": "알겠습니다.",
            "zh": "明白了。",
            "ja": "了解しました。",
            "vi": "Đã hiểu.",
            "en": "Got it."
          }
        },
        {
          "role": "ai",
          "text": "Thanks for being here on time.",
          "translations": {
            "ko": "시간 맞춰 오셔서 감사합니다.",
            "zh": "感谢大家准时参加。",
            "ja": "時間通りに来てくれてありがとう。",
            "vi": "Cảm ơn mọi người đã đến đúng giờ.",
            "en": "Thanks for being here on time."
          }
        },
        {
          "role": "user",
          "text": "Happy to join.",
          "translations": {
            "ko": "참석하게 되어 기쁩니다.",
            "zh": "很高兴参加。",
            "ja": "参加できてうれしいです。",
            "vi": "Rất vui được tham gia.",
            "en": "Happy to join."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Introducing yourself",
        "ko": "자기 소개하기",
        "zh": "自我介绍",
        "ja": "自己紹介をする",
        "vi": "Giới thiệu bản thân"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Let’s do quick introductions.",
          "translations": {
            "ko": "간단히 자기 소개를 해주세요.",
            "zh": "让我们快速自我介绍一下。",
            "ja": "簡単に自己紹介をしましょう。",
            "vi": "Hãy tự giới thiệu nhanh.",
            "en": "Let’s do quick introductions."
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
          "text": "I’m Sarah from the marketing team.",
          "translations": {
            "ko": "저는 마케팅 팀의 사라입니다.",
            "zh": "我是市场团队的Sarah。",
            "ja": "私はマーケティングチームのサラです。",
            "vi": "Tôi là Sarah từ nhóm marketing.",
            "en": "I’m Sarah from the marketing team."
          }
        },
        {
          "role": "user",
          "text": "Nice to meet you, Sarah.",
          "translations": {
            "ko": "만나서 반갑습니다, 사라님.",
            "zh": "很高兴认识你，Sarah。",
            "ja": "サラさん、よろしくお願いします。",
            "vi": "Rất vui được gặp bạn, Sarah.",
            "en": "Nice to meet you, Sarah."
          }
        },
        {
          "role": "ai",
          "text": "Can you introduce yourself?",
          "translations": {
            "ko": "자기 소개를 해주실 수 있나요?",
            "zh": "你能自我介绍一下吗？",
            "ja": "自己紹介をお願いできますか？",
            "vi": "Bạn có thể giới thiệu bản thân không?",
            "en": "Can you introduce yourself?"
          }
        },
        {
          "role": "user",
          "text": "I’m Alex from design.",
          "translations": {
            "ko": "저는 디자인 팀의 알렉스입니다.",
            "zh": "我是设计部的Alex。",
            "ja": "デザインチームのアレックスです。",
            "vi": "Tôi là Alex từ nhóm thiết kế.",
            "en": "I’m Alex from design."
          }
        },
        {
          "role": "ai",
          "text": "Welcome, Alex.",
          "translations": {
            "ko": "환영합니다, 알렉스님.",
            "zh": "欢迎你，Alex。",
            "ja": "アレックスさん、ようこそ。",
            "vi": "Chào mừng Alex.",
            "en": "Welcome, Alex."
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
          "text": "How long have you been with the team?",
          "translations": {
            "ko": "얼마나 팀에 있었나요?",
            "zh": "你在团队里已经多久了？",
            "ja": "チームに参加してからどのくらいですか？",
            "vi": "Bạn đã làm việc với nhóm bao lâu rồi?",
            "en": "How long have you been with the team?"
          }
        },
        {
          "role": "user",
          "text": "Just two months.",
          "translations": {
            "ko": "두 달 정도 됐습니다.",
            "zh": "刚刚两个月。",
            "ja": "まだ2ヶ月です。",
            "vi": "Chỉ hai tháng.",
            "en": "Just two months."
          }
        },
        {
          "role": "ai",
          "text": "Great to have you here.",
          "translations": {
            "ko": "여기에 오신 것을 환영합니다.",
            "zh": "很高兴你在这里。",
            "ja": "ここにいてくれてうれしいです。",
            "vi": "Rất vui được có bạn ở đây.",
            "en": "Great to have you here."
          }
        },
        {
          "role": "user",
          "text": "Glad to be here.",
          "translations": {
            "ko": "여기에 오게 되어 기쁩니다.",
            "zh": "很高兴在这里。",
            "ja": "ここにいられてうれしいです。",
            "vi": "Rất vui được ở đây.",
            "en": "Glad to be here."
          }
        },
        {
          "role": "ai",
          "text": "Let’s hear from the others too.",
          "translations": {
            "ko": "다른 분들도 자기 소개를 해주세요.",
            "zh": "让我们也听听其他人的介绍。",
            "ja": "他の人からも聞いてみましょう。",
            "vi": "Hãy nghe từ những người khác nữa.",
            "en": "Let’s hear from the others too."
          }
        },
        {
          "role": "user",
          "text": "Sure.",
          "translations": {
            "ko": "알겠습니다.",
            "zh": "好的。",
            "ja": "了解です。",
            "vi": "Được.",
            "en": "Sure."
          }
        },
        {
          "role": "ai",
          "text": "Please say your name and role.",
          "translations": {
            "ko": "이름과 역할을 말씀해주세요.",
            "zh": "请说出你的名字和角色。",
            "ja": "名前と役職を教えてください。",
            "vi": "Hãy nói tên và vị trí của bạn.",
            "en": "Please say your name and role."
          }
        },
        {
          "role": "user",
          "text": "I'm Mia, project manager.",
          "translations": {
            "ko": "저는 프로젝트 매니저, 미아입니다.",
            "zh": "我是Mia，项目经理。",
            "ja": "プロジェクトマネージャーのミアです。",
            "vi": "Tôi là Mia, quản lý dự án.",
            "en": "I'm Mia, project manager."
          }
        },
        {
          "role": "ai",
          "text": "Thanks, Mia.",
          "translations": {
            "ko": "감사합니다, 미아님.",
            "zh": "谢谢，Mia。",
            "ja": "ミアさん、ありがとう。",
            "vi": "Cảm ơn, Mia.",
            "en": "Thanks, Mia."
          }
        },
        {
          "role": "user",
          "text": "You're welcome.",
          "translations": {
            "ko": "천만에요.",
            "zh": "不客气。",
            "ja": "どういたしまして。",
            "vi": "Rất vui được gặp mọi người.",
            "en": "You're welcome."
          }
        },
        {
          "role": "ai",
          "text": "Nice to meet everyone.",
          "translations": {
            "ko": "모두 만나서 반갑습니다.",
            "zh": "很高兴认识大家。",
            "ja": "皆さんにお会いできてうれしいです。",
            "vi": "Tôi cũng vậy!",
            "en": "Nice to meet everyone."
          }
        },
        {
          "role": "user",
          "text": "Likewise!",
          "translations": {
            "ko": "저도요!",
            "zh": "同样高兴认识你！",
            "ja": "こちらこそ！",
            "vi": "Yêu cầu làm rõ",
            "en": "Likewise!"
          }
        }
      ]
    },
    {
      "description": {
        "en": "Asking for clarification",
        "ko": "명확히 이해하기 위해 질문하기",
        "zh": "请求澄清",
        "ja": "質問をする",
        "vi": "Tiếp theo, chúng ta sẽ nói về chính sách mới."
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Next, we’ll talk about the new policy.",
          "translations": {
            "ko": "다음으로, 새로운 정책에 대해 이야기하겠습니다.",
            "zh": "接下来，我们将讨论新的政策。",
            "ja": "次に、新しいポリシーについて話しましょう。",
            "vi": "Xin lỗi, chính sách nào?",
            "en": "Next, we’ll talk about the new policy."
          }
        },
        {
          "role": "user",
          "text": "Sorry, what policy?",
          "translations": {
            "ko": "죄송한데, 어떤 정책인가요?",
            "zh": "抱歉，什么政策？",
            "ja": "すみません、どのポリシーですか？",
            "vi": "Chính sách làm việc tại nhà đã được cập nhật.",
            "en": "Sorry, what policy?"
          }
        },
        {
          "role": "ai",
          "text": "The updated work-from-home policy.",
          "translations": {
            "ko": "업데이트된 재택근무 정책입니다.",
            "zh": "更新的在家工作政策。",
            "ja": "在宅勤務の更新されたポリシーです。",
            "vi": "Oh, tôi hiểu rồi.",
            "en": "The updated work-from-home policy."
          }
        },
        {
          "role": "user",
          "text": "Oh, I see.",
          "translations": {
            "ko": "아, 알겠습니다.",
            "zh": "哦，我明白了。",
            "ja": "ああ、わかりました。",
            "vi": "Nó đã được chia sẻ chưa?",
            "en": "Oh, I see."
          }
        },
        {
          "role": "ai",
          "text": "Was it shared already?",
          "translations": {
            "ko": "이미 공유되었나요?",
            "zh": "这个政策已经分享过了吗？",
            "ja": "すでに共有されましたか？",
            "vi": "Tôi có thể đã bỏ lỡ.",
            "en": "Was it shared already?"
          }
        },
        {
          "role": "user",
          "text": "I might’ve missed it.",
          "translations": {
            "ko": "제가 놓친 것 같습니다.",
            "zh": "我可能错过了。",
            "ja": "私、見逃したかもしれません。",
            "vi": "Tôi sẽ gửi sau cuộc họp.",
            "en": "I might’ve missed it."
          }
        },
        {
          "role": "ai",
          "text": "I’ll send it after the meeting.",
          "translations": {
            "ko": "회의 후에 보내드리겠습니다.",
            "zh": "我会在会后发送。",
            "ja": "ミーティング後に送ります。",
            "vi": "Cảm ơn.",
            "en": "I’ll send it after the meeting."
          }
        },
        {
          "role": "user",
          "text": "Thanks.",
          "translations": {
            "ko": "감사합니다.",
            "zh": "谢谢。",
            "ja": "ありがとう。",
            "vi": "Có câu hỏi nào về nó không?",
            "en": "Thanks."
          }
        },
        {
          "role": "ai",
          "text": "Any questions about it?",
          "translations": {
            "ko": "이에 대한 질문이 있나요?",
            "zh": "对此有任何问题吗？",
            "ja": "それについて質問はありますか？",
            "vi": "Nó có thể áp dụng vĩnh viễn không?",
            "en": "Any questions about it?"
          }
        },
        {
          "role": "user",
          "text": "Is it permanent?",
          "translations": {
            "ko": "이것이 영구적인 것인가요?",
            "zh": "这是永久性的吗？",
            "ja": "恒久的なものですか？",
            "vi": "Hiện tại chỉ là thử nghiệm.",
            "en": "Is it permanent?"
          }
        },
        {
          "role": "ai",
          "text": "It’s a trial for now.",
          "translations": {
            "ko": "현재는 시험적으로 진행 중입니다.",
            "zh": "目前是试行。",
            "ja": "今のところは試験的なものです。",
            "vi": "Đã hiểu.",
            "en": "It’s a trial for now."
          }
        },
        {
          "role": "user",
          "text": "Got it.",
          "translations": {
            "ko": "알겠습니다.",
            "zh": "明白了。",
            "ja": "了解しました。",
            "vi": "Chúng ta sẽ đánh giá sau hai tháng.",
            "en": "Got it."
          }
        },
        {
          "role": "ai",
          "text": "We’ll evaluate after two months.",
          "translations": {
            "ko": "두 달 후에 평가하겠습니다.",
            "zh": "我们会在两个月后评估。",
            "ja": "2ヶ月後に評価します。",
            "vi": "Được, nghe có vẻ công bằng.",
            "en": "We’ll evaluate after two months."
          }
        },
        {
          "role": "user",
          "text": "Okay, sounds fair.",
          "translations": {
            "ko": "알겠습니다, 공정하게 들립니다.",
            "zh": "好的，听起来公平。",
            "ja": "了解です、それで良いと思います。",
            "vi": "Hãy cho tôi biết nếu có điều gì không rõ.",
            "en": "Okay, sounds fair."
          }
        },
        {
          "role": "ai",
          "text": "Let me know if anything is unclear.",
          "translations": {
            "ko": "불분명한 부분이 있다면 알려주세요.",
            "zh": "如果有任何不清楚的地方，请告诉我。",
            "ja": "何かわからないことがあれば教えてください。",
            "vi": "Tôi sẽ làm vậy.",
            "en": "Let me know if anything is unclear."
          }
        },
        {
          "role": "user",
          "text": "Will do.",
          "translations": {
            "ko": "알겠습니다.",
            "zh": "会的。",
            "ja": "了解しました。",
            "vi": "Cứ liên hệ nếu cần sau này.",
            "en": "Will do."
          }
        },
        {
          "role": "ai",
          "text": "Feel free to reach out later.",
          "translations": {
            "ko": "나중에 언제든 연락주세요.",
            "zh": "请随时联系我。",
            "ja": "後で何でも聞いてください。",
            "vi": "Cảm ơn đã làm rõ.",
            "en": "Feel free to reach out later."
          }
        },
        {
          "role": "user",
          "text": "Thanks for clarifying.",
          "translations": {
            "ko": "설명해주셔서 감사합니다.",
            "zh": "谢谢你的澄清。",
            "ja": "説明してくれてありがとう。",
            "vi": "Không có gì.",
            "en": "Thanks for clarifying."
          }
        },
        {
          "role": "ai",
          "text": "No problem at all.",
          "translations": {
            "ko": "문제 없습니다.",
            "zh": "没问题。",
            "ja": "全然問題ありません。",
            "vi": "Rất cảm ơn.",
            "en": "No problem at all."
          }
        },
        {
          "role": "user",
          "text": "Appreciate it.",
          "translations": {
            "ko": "감사합니다.",
            "zh": "感谢。",
            "ja": "感謝します。",
            "vi": "Cung cấp một bản cập nhật ngắn gọn",
            "en": "Appreciate it."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Giving a brief update",
        "ko": "간략한 업데이트 제공하기",
        "zh": "给出简短的更新",
        "ja": "簡単なアップデートをする",
        "vi": "Có thể cung cấp một bản cập nhật nhanh từ bộ phận bán hàng không?"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Can we get a quick update from sales?",
          "translations": {
            "ko": "판매부서에서 간단한 업데이트를 받을 수 있을까요?",
            "zh": "销售部门能给我们一个快速的更新吗？",
            "ja": "営業から簡単なアップデートをもらえますか？",
            "vi": "Được. Doanh số bán hàng tăng 10% tuần này.",
            "en": "Can we get a quick update from sales?"
          }
        },
        {
          "role": "user",
          "text": "Sure. Sales are up 10% this week.",
          "translations": {
            "ko": "네. 이번 주 판매량이 10% 상승했습니다.",
            "zh": "当然。本周销售额增长了10%。",
            "ja": "はい、今週の売上は10%アップです。",
            "vi": "Đó là tin tốt!",
            "en": "Sure. Sales are up 10% this week."
          }
        },
        {
          "role": "ai",
          "text": "That’s good news!",
          "translations": {
            "ko": "좋은 소식이네요!",
            "zh": "这是个好消息！",
            "ja": "それは良いニュースですね！",
            "vi": "Đúng, chiến dịch đã giúp ích.",
            "en": "That’s good news!"
          }
        },
        {
          "role": "user",
          "text": "Yes, the campaign helped.",
          "translations": {
            "ko": "네, 캠페인이 도움이 되었습니다.",
            "zh": "是的，这次的活动起到了作用。",
            "ja": "はい、キャンペーンのおかげです。",
            "vi": "Có phản hồi từ khách hàng không?",
            "en": "Yes, the campaign helped."
          }
        },
        {
          "role": "ai",
          "text": "Any customer feedback?",
          "translations": {
            "ko": "고객 피드백은 어떤가요?",
            "zh": "有任何客户反馈吗？",
            "ja": "顧客からのフィードバックはありますか？",
            "vi": "Chủ yếu là tích cực.",
            "en": "Any customer feedback?"
          }
        },
        {
          "role": "user",
          "text": "Mostly positive.",
          "translations": {
            "ko": "대부분 긍정적입니다.",
            "zh": "主要是积极的。",
            "ja": "主にポジティブな反応です。",
            "vi": "Rất vui được nghe điều đó.",
            "en": "Mostly positive."
          }
        },
        {
          "role": "ai",
          "text": "That’s great to hear.",
          "translations": {
            "ko": "듣기 좋은 소식입니다.",
            "zh": "听到这个真好。",
            "ja": "それは良いことを聞きました。",
            "vi": "Chúng tôi sẽ chia sẻ dữ liệu đầy đủ sớm.",
            "en": "That’s great to hear."
          }
        },
        {
          "role": "user",
          "text": "We’ll share full data soon.",
          "translations": {
            "ko": "곧 전체 데이터를 공유하겠습니다.",
            "zh": "我们会尽快分享完整数据。",
            "ja": "完全なデータは近いうちに共有します。",
            "vi": "Cảm ơn. Còn về hỗ trợ?",
            "en": "We’ll share full data soon."
          }
        },
        {
          "role": "ai",
          "text": "Thanks. What about support?",
          "translations": {
            "ko": "감사합니다. 고객 지원은 어떤가요?",
            "zh": "谢谢。那么支持部门呢？",
            "ja": "ありがとう。サポートはどうですか？",
            "vi": "Số vé giảm 15%.",
            "en": "Thanks. What about support?"
          }
        },
        {
          "role": "user",
          "text": "Tickets are down 15%.",
          "translations": {
            "ko": "티켓이 15% 감소했습니다.",
            "zh": "工单减少了15%。",
            "ja": "チケットは15%減りました。",
            "vi": "Cải thiện đáng kể.",
            "en": "Tickets are down 15%."
          }
        },
        {
          "role": "ai",
          "text": "Nice improvement.",
          "translations": {
            "ko": "좋은 개선이네요.",
            "zh": "进步很大。",
            "ja": "素晴らしい改善ですね。",
            "vi": "Chúng tôi đã thêm nhiều liên kết FAQ.",
            "en": "Nice improvement."
          }
        },
        {
          "role": "user",
          "text": "We added more FAQ links.",
          "translations": {
            "ko": "FAQ 링크를 더 추가했습니다.",
            "zh": "我们增加了更多的常见问题链接。",
            "ja": "より多くのFAQリンクを追加しました。",
            "vi": "Động thái thông minh.",
            "en": "We added more FAQ links."
          }
        },
        {
          "role": "ai",
          "text": "Smart move.",
          "translations": {
            "ko": "좋은 결정이었습니다.",
            "zh": "聪明的举动。",
            "ja": "賢い選択ですね。",
            "vi": "Điều này đã tiết kiệm thời gian.",
            "en": "Smart move."
          }
        },
        {
          "role": "user",
          "text": "It saved time.",
          "translations": {
            "ko": "시간을 절약했습니다.",
            "zh": "它节省了时间。",
            "ja": "時間を節約できました。",
            "vi": "Tốt lắm, mọi người.",
            "en": "It saved time."
          }
        },
        {
          "role": "ai",
          "text": "Good job, everyone.",
          "translations": {
            "ko": "모두 잘했습니다.",
            "zh": "大家做得好。",
            "ja": "皆さん、良い仕事をしました。",
            "vi": "Cảm ơn!",
            "en": "Good job, everyone."
          }
        },
        {
          "role": "user",
          "text": "Thank you!",
          "translations": {
            "ko": "감사합니다!",
            "zh": "谢谢！",
            "ja": "ありがとうございます！",
            "vi": "Hỏi về lịch trình",
            "en": "Thank you!"
          }
        }
      ]
    },
    {
      "description": {
        "en": "Asking about the schedule",
        "ko": "일정에 대해 묻기",
        "zh": "询问日程安排",
        "ja": "スケジュールについて尋ねる",
        "vi": "Cuộc họp tiếp theo là lúc mấy giờ?"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "What time is the next meeting?",
          "translations": {
            "ko": "다음 회의는 언제인가요?",
            "zh": "下次会议是什么时候？",
            "ja": "次のミーティングは何時ですか？",
            "vi": "Là lúc 3 giờ chiều.",
            "en": "What time is the next meeting?"
          }
        },
        {
          "role": "user",
          "text": "It’s at 3 PM.",
          "translations": {
            "ko": "오후 3시입니다.",
            "zh": "下午3点。",
            "ja": "午後3時です。",
            "vi": "Nó sẽ diễn ra ở đâu?",
            "en": "It’s at 3 PM."
          }
        },
        {
          "role": "ai",
          "text": "Where will it be?",
          "translations": {
            "ko": "어디에서 하나요?",
            "zh": "会议地点在哪里？",
            "ja": "場所はどこですか？",
            "vi": "Trong phòng họp chính.",
            "en": "Where will it be?"
          }
        },
        {
          "role": "user",
          "text": "In the main conference room.",
          "translations": {
            "ko": "주요 회의실에서 합니다.",
            "zh": "在主会议室。",
            "ja": "メインの会議室です。",
            "vi": "Mọi người đều được mong đợi tham gia phải không?",
            "en": "In the main conference room."
          }
        },
        {
          "role": "ai",
          "text": "Is everyone expected to join?",
          "translations": {
            "ko": "모두 참석해야 하나요?",
            "zh": "每个人都需要参加吗？",
            "ja": "全員が参加する予定ですか？",
            "vi": "Đúng, tất cả các nhóm trưởng.",
            "en": "Is everyone expected to join?"
          }
        },
        {
          "role": "user",
          "text": "Yes, all team leads.",
          "translations": {
            "ko": "네, 모든 팀 리더들이요.",
            "zh": "是的，所有的团队领导。",
            "ja": "はい、全てのチームリーダーです。",
            "vi": "Nó sẽ kéo dài bao lâu?",
            "en": "Yes, all team leads."
          }
        },
        {
          "role": "ai",
          "text": "How long will it last?",
          "translations": {
            "ko": "얼마나 걸릴까요?",
            "zh": "会议会持续多久？",
            "ja": "どのくらい続く予定ですか？",
            "vi": "Khoảng 45 phút.",
            "en": "How long will it last?"
          }
        },
        {
          "role": "user",
          "text": "About 45 minutes.",
          "translations": {
            "ko": "약 45분 정도입니다.",
            "zh": "大约45分钟。",
            "ja": "約45分です。",
            "vi": "Có thời gian nghỉ không?",
            "en": "About 45 minutes."
          }
        },
        {
          "role": "ai",
          "text": "Will there be a break?",
          "translations": {
            "ko": "휴식 시간이 있나요?",
            "zh": "会有休息时间吗？",
            "ja": "休憩はありますか？",
            "vi": "Có, một khoảng nghỉ ngắn giữa chừng.",
            "en": "Will there be a break?"
          }
        },
        {
          "role": "user",
          "text": "Yes, a short one halfway.",
          "translations": {
            "ko": "네, 절반 정도 지나면 짧게 있습니다.",
            "zh": "是的，中途有一个短暂的休息。",
            "ja": "はい、途中で短い休憩があります。",
            "vi": "Ai sẽ thuyết trình?",
            "en": "Yes, a short one halfway."
          }
        },
        {
          "role": "ai",
          "text": "Who is presenting?",
          "translations": {
            "ko": "누가 발표하나요?",
            "zh": "谁来主持？",
            "ja": "誰がプレゼンテーションをしますか？",
            "vi": "Quản lý sản phẩm của chúng tôi.",
            "en": "Who is presenting?"
          }
        },
        {
          "role": "user",
          "text": "Our product manager.",
          "translations": {
            "ko": "우리의 제품 매니저입니다.",
            "zh": "我们的产品经理。",
            "ja": "プロダクトマネージャーがします。",
            "vi": "Chúng ta cần chuẩn bị gì không?",
            "en": "Our product manager."
          }
        },
        {
          "role": "ai",
          "text": "Should we prepare anything?",
          "translations": {
            "ko": "준비해야 할 것이 있나요?",
            "zh": "我们需要准备什么吗？",
            "ja": "何か準備する必要はありますか？",
            "vi": "Chỉ cần mang theo ghi chú của bạn.",
            "en": "Should we prepare anything?"
          }
        },
        {
          "role": "user",
          "text": "Just bring your notes.",
          "translations": {
            "ko": "노트만 가져오시면 됩니다.",
            "zh": "只需带上你的笔记。",
            "ja": "メモだけ持ってきてください。",
            "vi": "Có chương trình không?",
            "en": "Just bring your notes."
          }
        },
        {
          "role": "ai",
          "text": "Is there an agenda?",
          "translations": {
            "ko": "의제가 있나요?",
            "zh": "有议程吗？",
            "ja": "アジェンダはありますか？",
            "vi": "Nó đã được gửi qua email sáng nay.",
            "en": "Is there an agenda?"
          }
        },
        {
          "role": "user",
          "text": "It was emailed this morning.",
          "translations": {
            "ko": "오늘 아침에 이메일로 보냈습니다.",
            "zh": "今天早上已经发邮件了。",
            "ja": "今朝メールで送りました。",
            "vi": "Cảm ơn, tôi sẽ kiểm tra.",
            "en": "It was emailed this morning."
          }
        },
        {
          "role": "ai",
          "text": "Thanks, I’ll check it.",
          "translations": {
            "ko": "감사합니다, 확인하겠습니다.",
            "zh": "谢谢，我会查看的。",
            "ja": "ありがとう、確認します。",
            "vi": "Không có gì.",
            "en": "Thanks, I’ll check it."
          }
        },
        {
          "role": "user",
          "text": "No problem.",
          "translations": {
            "ko": "문제 없습니다.",
            "zh": "没问题。",
            "ja": "問題ありません。",
            "vi": "Hẹn gặp lại lúc 3 giờ nhé.",
            "en": "No problem."
          }
        },
        {
          "role": "ai",
          "text": "See you at 3 then.",
          "translations": {
            "ko": "그럼 3시에 봅시다.",
            "zh": "那么，我们3点见。",
            "ja": "それでは3時にお会いしましょう。",
            "vi": "Hẹn gặp lại!",
            "en": "See you at 3 then."
          }
        },
        {
          "role": "user",
          "text": "See you!",
          "translations": {
            "ko": "봐요!",
            "zh": "再见！",
            "ja": "お会いしましょう！",
            "vi": "Đưa ra một đề xuất đơn giản",
            "en": "See you!"
          }
        }
      ]
    },
    {
      "description": {
        "en": "Making a simple suggestion",
        "ko": "간단한 제안하기",
        "zh": "提出简单的建议",
        "ja": "簡単な提案をする",
        "vi": "Tôi có thể đưa ra một đề xuất không?"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Can I make a suggestion?",
          "translations": {
            "ko": "제안을 해도 될까요?",
            "zh": "我能提个建议吗？",
            "ja": "提案をしてもいいですか？",
            "vi": "Tất nhiên, hãy nói.",
            "en": "Can I make a suggestion?"
          }
        },
        {
          "role": "user",
          "text": "Of course, go ahead.",
          "translations": {
            "ko": "물론이죠, 말씀해주세요.",
            "zh": "当然，说吧。",
            "ja": "もちろん、どうぞ。",
            "vi": "Có lẽ chúng ta có thể rút ngắn cuộc họp.",
            "en": "Of course, go ahead."
          }
        },
        {
          "role": "ai",
          "text": "Maybe we can shorten the meeting.",
          "translations": {
            "ko": "회의를 짧게 할 수 있을 것 같습니다.",
            "zh": "也许我们可以缩短会议时间。",
            "ja": "ミーティングを短くすることを提案します。",
            "vi": "Điều đó có thể giúp.",
            "en": "Maybe we can shorten the meeting."
          }
        },
        {
          "role": "user",
          "text": "That could help.",
          "translations": {
            "ko": "그것도 좋을 것 같습니다.",
            "zh": "这可能会有帮助。",
            "ja": "それは助けになりますね。",
            "vi": "Chúng ta lặp lại một số điểm nhiều lần.",
            "en": "That could help."
          }
        },
        {
          "role": "ai",
          "text": "We repeat some points a lot.",
          "translations": {
            "ko": "우리가 많은 점을 반복하고 있습니다.",
            "zh": "我们重复了很多点。",
            "ja": "私たちは多くのポイントを繰り返しています。",
            "vi": "Bạn đúng.",
            "en": "We repeat some points a lot."
          }
        },
        {
          "role": "user",
          "text": "You're right.",
          "translations": {
            "ko": "맞습니다.",
            "zh": "你说得对。",
            "ja": "その通りですね。",
            "vi": "Một chương trình chặt chẽ hơn có thể hoạt động.",
            "en": "You're right."
          }
        },
        {
          "role": "ai",
          "text": "A tighter agenda might work.",
          "translations": {
            "ko": "더 타이트한 의제가 도움이 될 것 같습니다.",
            "zh": "更紧凑的议程可能会有用。",
            "ja": "より短いアジェンダが効果的かもしれません。",
            "vi": "Hãy thử điều đó.",
            "en": "A tighter agenda might work."
          }
        },
        {
          "role": "user",
          "text": "Let’s try that.",
          "translations": {
            "ko": "그렇게 해봅시다.",
            "zh": "我们试试看。",
            "ja": "それを試しましょう。",
            "vi": "Và tuân thủ giới hạn thời gian.",
            "en": "Let’s try that."
          }
        },
        {
          "role": "ai",
          "text": "And stick to time limits.",
          "translations": {
            "ko": "시간 제한을 지키는 것도요.",
            "zh": "并且要坚持时间限制。",
            "ja": "そして、時間制限を守りましょう。",
            "vi": "Ý tưởng hay.",
            "en": "And stick to time limits."
          }
        },
        {
          "role": "user",
          "text": "Good idea.",
          "translations": {
            "ko": "좋은 생각입니다.",
            "zh": "好主意。",
            "ja": "良いアイデアです。",
            "vi": "Ngoài ra, ít slide hơn trong các bản cập nhật.",
            "en": "Good idea."
          }
        },
        {
          "role": "ai",
          "text": "Also, fewer slides in updates.",
          "translations": {
            "ko": "또한, 업데이트에서 슬라이드를 줄이는 것도요.",
            "zh": "另外，更新时的幻灯片可以少一些。",
            "ja": "また、アップデートのスライドを少なくしましょう。",
            "vi": "Đúng, tập trung hơn.",
            "en": "Also, fewer slides in updates."
          }
        },
        {
          "role": "user",
          "text": "Yes, more focused.",
          "translations": {
            "ko": "네, 더 집중적으로.",
            "zh": "是的，更加聚焦。",
            "ja": "はい、より集中的に。",
            "vi": "Chúng ta nên thử nghiệm tuần sau không?",
            "en": "Yes, more focused."
          }
        },
        {
          "role": "ai",
          "text": "Should we test it next week?",
          "translations": {
            "ko": "다음 주에 테스트해볼까요?",
            "zh": "我们下周测试一下吗？",
            "ja": "来週それを試してみましょうか？",
            "vi": "Đúng.",
            "en": "Should we test it next week?"
          }
        },
        {
          "role": "user",
          "text": "Sure.",
          "translations": {
            "ko": "그래요.",
            "zh": "好的。",
            "ja": "いいですね。",
            "vi": "Chúng ta sẽ nhận phản hồi sau.",
            "en": "Sure."
          }
        },
        {
          "role": "ai",
          "text": "We’ll get feedback after.",
          "translations": {
            "ko": "그 후에 피드백을 받겠습니다.",
            "zh": "我们会在之后收集反馈。",
            "ja": "その後でフィードバックを得ます。",
            "vi": "Nghe có vẻ công bằng.",
            "en": "We’ll get feedback after."
          }
        },
        {
          "role": "user",
          "text": "Sounds fair.",
          "translations": {
            "ko": "공정하게 들립니다.",
            "zh": "听起来公平。",
            "ja": "公平だと思います。",
            "vi": "Tôi sẽ soạn thảo định dạng mới.",
            "en": "Sounds fair."
          }
        },
        {
          "role": "ai",
          "text": "I’ll draft the new format.",
          "translations": {
            "ko": "새로운 형식을 초안으로 만들겠습니다.",
            "zh": "我会起草新的格式。",
            "ja": "新しいフォーマットを作成します。",
            "vi": "Cảm ơn!",
            "en": "I’ll draft the new format."
          }
        },
        {
          "role": "user",
          "text": "Thanks!",
          "translations": {
            "ko": "감사합니다!",
            "zh": "谢谢！",
            "ja": "ありがとう！",
            "vi": "Hãy cùng nhau cải thiện.",
            "en": "Thanks!"
          }
        },
        {
          "role": "ai",
          "text": "Let’s improve together.",
          "translations": {
            "ko": "함께 발전해 나가요.",
            "zh": "让我们一起进步。",
            "ja": "一緒に改善しましょう。",
            "vi": "Chắc chắn.",
            "en": "Let’s improve together."
          }
        },
        {
          "role": "user",
          "text": "Absolutely.",
          "translations": {
            "ko": "그렇습니다.",
            "zh": "当然。",
            "ja": "まったくその通りです。",
            "vi": "Yêu cầu ý kiến",
            "en": "Absolutely."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Asking for opinions",
        "ko": "의견 묻기",
        "zh": "征求意见",
        "ja": "意見を尋ねる",
        "vi": "Bạn nghĩ gì về logo mới?"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "What do you think of the new logo?",
          "translations": {
            "ko": "새 로고에 대해 어떻게 생각하시나요?",
            "zh": "你们对新的标志有什么看法？",
            "ja": "新しいロゴについてどう思いますか？",
            "vi": "Tôi nghĩ nó trông hiện đại.",
            "en": "What do you think of the new logo?"
          }
        },
        {
          "role": "user",
          "text": "I think it looks modern.",
          "translations": {
            "ko": "현대적으로 보입니다.",
            "zh": "我觉得它看起来很现代。",
            "ja": "モダンに見えると思います。",
            "vi": "Bạn thích màu sắc không?",
            "en": "I think it looks modern."
          }
        },
        {
          "role": "ai",
          "text": "Do you like the color?",
          "translations": {
            "ko": "색상은 좋아하시나요?",
            "zh": "你喜欢这个颜色吗？",
            "ja": "色は気に入りましたか？",
            "vi": "Đúng, nó rất tinh tế.",
            "en": "Do you like the color?"
          }
        },
        {
          "role": "user",
          "text": "Yes, it's clean.",
          "translations": {
            "ko": "네, 깔끔합니다.",
            "zh": "是的，很干净。",
            "ja": "はい、すっきりしています。",
            "vi": "Có thay đổi nào bạn muốn đề xuất không?",
            "en": "Yes, it's clean."
          }
        },
        {
          "role": "ai",
          "text": "Any changes you’d suggest?",
          "translations": {
            "ko": "제안하고 싶은 변경 사항이 있나요?",
            "zh": "你有什么建议吗？",
            "ja": "提案する変更点はありますか？",
            "vi": "Có lẽ một kiểu chữ dũng cảm hơn.",
            "en": "Any changes you’d suggest?"
          }
        },
        {
          "role": "user",
          "text": "Maybe a bolder font.",
          "translations": {
            "ko": "폰트를 더 두드러지게 할 수도 있겠습니다.",
            "zh": "也许可以使用更加粗体的字体。",
            "ja": "もっと太いフォントがいいかもしれません。",
            "vi": "Thú vị. Ai khác nữa không?",
            "en": "Maybe a bolder font."
          }
        },
        {
          "role": "ai",
          "text": "Interesting. Anyone else?",
          "translations": {
            "ko": "흥미롭네요. 다른 분은요?",
            "zh": "有趣。其他人呢？",
            "ja": "面白い。他の人はどうですか？",
            "vi": "Tôi thích bố cục.",
            "en": "Interesting. Anyone else?"
          }
        },
        {
          "role": "user",
          "text": "I like the layout.",
          "translations": {
            "ko": "레이아웃이 좋습니다.",
            "zh": "我喜欢这个布局。",
            "ja": "レイアウトが気に入りました。",
            "vi": "Chúng ta nên thử nghiệm với người dùng không?",
            "en": "I like the layout."
          }
        },
        {
          "role": "ai",
          "text": "Should we test it with users?",
          "translations": {
            "ko": "사용자들에게 테스트해볼까요?",
            "zh": "我们应该让用户测试一下吗？",
            "ja": "ユーザーにテストしてもらうべきですか？",
            "vi": "Đó là một ý tưởng thông minh.",
            "en": "Should we test it with users?"
          }
        },
        {
          "role": "user",
          "text": "That’s a smart idea.",
          "translations": {
            "ko": "좋은 생각입니다.",
            "zh": "这是个好主意。",
            "ja": "賢いアイデアですね。",
            "vi": "Chúng ta nên thử bao nhiêu phiên bản?",
            "en": "That’s a smart idea."
          }
        },
        {
          "role": "ai",
          "text": "How many versions should we try?",
          "translations": {
            "ko": "몇 가지 버전을 시도해볼까요?",
            "zh": "我们应该试几个版本？",
            "ja": "何バージョン試しますか？",
            "vi": "Hai hoặc ba.",
            "en": "How many versions should we try?"
          }
        },
        {
          "role": "user",
          "text": "Two or three.",
          "translations": {
            "ko": "두 세 가지 정도요.",
            "zh": "两到三个。",
            "ja": "2つか3つです。",
            "vi": "Hãy nhận phản hồi nhanh.",
            "en": "Two or three."
          }
        },
        {
          "role": "ai",
          "text": "Let’s get quick feedback.",
          "translations": {
            "ko": "빠른 피드백을 받아봅시다.",
            "zh": "让我们快速收集反馈。",
            "ja": "早めにフィードバックを得ましょう。",
            "vi": "Đồng ý.",
            "en": "Let’s get quick feedback."
          }
        },
        {
          "role": "user",
          "text": "Agreed.",
          "translations": {
            "ko": "동의합니다.",
            "zh": "同意。",
            "ja": "同意します。",
            "vi": "Chúng ta có thể sử dụng một cuộc thăm dò trực tuyến.",
            "en": "Agreed."
          }
        },
        {
          "role": "ai",
          "text": "We can use an online poll.",
          "translations": {
            "ko": "온라인 설문을 사용할 수 있습니다.",
            "zh": "我们可以使用在线投票。",
            "ja": "オンラインの投票を使いましょう。",
            "vi": "Hoàn hảo.",
            "en": "We can use an online poll."
          }
        },
        {
          "role": "user",
          "text": "Perfect.",
          "translations": {
            "ko": "완벽합니다.",
            "zh": "完美。",
            "ja": "完璧です。",
            "vi": "Tôi sẽ chuẩn bị các hình ảnh.",
            "en": "Perfect."
          }
        },
        {
          "role": "ai",
          "text": "I’ll prepare the images.",
          "translations": {
            "ko": "이미지를 준비하겠습니다.",
            "zh": "我会准备图片。",
            "ja": "画像を準備します。",
            "vi": "Cảm ơn!",
            "en": "I’ll prepare the images."
          }
        },
        {
          "role": "user",
          "text": "Thank you!",
          "translations": {
            "ko": "감사합니다!",
            "zh": "谢谢！",
            "ja": "ありがとう！",
            "vi": "Rất mong chờ xem họ thích cái nào.",
            "en": "Thank you!"
          }
        },
        {
          "role": "ai",
          "text": "Excited to see what they prefer.",
          "translations": {
            "ko": "그들이 어떤 것을 선호하는지 보는 것이 기대됩니다.",
            "zh": "很期待看到他们更喜欢哪个。",
            "ja": "彼らが何を選ぶか楽しみです。",
            "vi": "Tôi cũng vậy!",
            "en": "Excited to see what they prefer."
          }
        },
        {
          "role": "user",
          "text": "Me too!",
          "translations": {
            "ko": "저도요!",
            "zh": "我也是！",
            "ja": "私もです！",
            "vi": "Đồng ý hoặc không đồng ý một cách lịch sự",
            "en": "Me too!"
          }
        }
      ]
    },
    {
      "description": {
        "en": "Agreeing or disagreeing politely",
        "ko": "공손하게 동의하거나 이의를 제기하기",
        "zh": "礼貌地表示同意或不同意",
        "ja": "礼儀正しく同意するか反対する",
        "vi": "Tôi nghĩ chúng ta nên ra mắt vào tuần sau."
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "I think we should launch next week.",
          "translations": {
            "ko": "다음 주에 출시하는 것이 어떨까요?",
            "zh": "我认为我们应该在下周发布。",
            "ja": "来週ローンチすべきだと思います。",
            "vi": "Tôi hiểu quan điểm của bạn.",
            "en": "I think we should launch next week."
          }
        },
        {
          "role": "user",
          "text": "I see your point.",
          "translations": {
            "ko": "그렇게 생각할 수 있겠습니다.",
            "zh": "我明白你的观点。",
            "ja": "あなたの意見がわかります。",
            "vi": "Nhưng trang web chưa được kiểm tra hoàn toàn.",
            "en": "I see your point."
          }
        },
        {
          "role": "ai",
          "text": "But the site isn’t fully tested.",
          "translations": {
            "ko": "하지만 사이트가 완전히 테스트되지 않았습니다.",
            "zh": "但是网站还没有完全测试过。",
            "ja": "でも、サイトはまだ完全にテストされていません。",
            "vi": "Đúng vậy.",
            "en": "But the site isn’t fully tested."
          }
        },
        {
          "role": "user",
          "text": "That's true.",
          "translations": {
            "ko": "그렇습니다.",
            "zh": "这是真的。",
            "ja": "その通りです。",
            "vi": "Có lẽ chúng ta nên đợi thêm một tuần nữa.",
            "en": "That's true."
          }
        },
        {
          "role": "ai",
          "text": "Maybe we wait one more week.",
          "translations": {
            "ko": "아마 한 주 더 기다려야 할 것 같습니다.",
            "zh": "也许我们再等一个星期。",
            "ja": "もう一週間待つべきかもしれません。",
            "vi": "Điều đó nghe có vẻ an toàn hơn.",
            "en": "Maybe we wait one more week."
          }
        },
        {
          "role": "user",
          "text": "That sounds safer.",
          "translations": {
            "ko": "그게 더 안전해 보입니다.",
            "zh": "这听起来更安全。",
            "ja": "それが安全そうです。",
            "vi": "Nó sẽ giúp tránh các vấn đề.",
            "en": "That sounds safer."
          }
        },
        {
          "role": "ai",
          "text": "It will help avoid issues.",
          "translations": {
            "ko": "문제를 피하는 데 도움이 될 것입니다.",
            "zh": "这将有助于避免问题。",
            "ja": "問題を避けるのに役立ちます。",
            "vi": "Tôi đồng ý.",
            "en": "It will help avoid issues."
          }
        },
        {
          "role": "user",
          "text": "I agree.",
          "translations": {
            "ko": "동의합니다.",
            "zh": "我同意。",
            "ja": "同意します。",
            "vi": "Chúng ta không muốn người dùng tức giận.",
            "en": "I agree."
          }
        },
        {
          "role": "ai",
          "text": "We don’t want angry users.",
          "translations": {
            "ko": "우리는 화난 사용자를 원하지 않습니다.",
            "zh": "我们不希望用户生气。",
            "ja": "怒ったユーザーは望んでいません。",
            "vi": "Chính xác.",
            "en": "We don’t want angry users."
          }
        },
        {
          "role": "user",
          "text": "Exactly.",
          "translations": {
            "ko": "맞습니다.",
            "zh": "没错。",
            "ja": "まさにその通りです。",
            "vi": "Hãy nói chuyện với nhóm phát triển.",
            "en": "Exactly."
          }
        },
        {
          "role": "ai",
          "text": "Let’s talk to the dev team.",
          "translations": {
            "ko": "개발팀과 이야기해봅시다.",
            "zh": "让我们和开发团队谈谈。",
            "ja": "開発チームと話し合いましょう。",
            "vi": "Quyết định tốt.",
            "en": "Let’s talk to the dev team."
          }
        },
        {
          "role": "user",
          "text": "Good call.",
          "translations": {
            "ko": "좋은 생각입니다.",
            "zh": "好主意。",
            "ja": "良い判断です。",
            "vi": "Nếu họ đã sẵn sàng, chúng ta sẽ tiến hành.",
            "en": "Good call."
          }
        },
        {
          "role": "ai",
          "text": "If they’re ready, we go.",
          "translations": {
            "ko": "그들이 준비되면 출시하겠습니다.",
            "zh": "如果他们准备好了，我们就开始。",
            "ja": "彼らが準備できていれば、進めます。",
            "vi": "Đúng, kế hoạch linh hoạt.",
            "en": "If they’re ready, we go."
          }
        },
        {
          "role": "user",
          "text": "Yes, flexible plan.",
          "translations": {
            "ko": "네, 유연한 계획입니다.",
            "zh": "是的，灵活的计划。",
            "ja": "はい、柔軟な計画です。",
            "vi": "Mọi người đều đồng ý với điều đó phải không?",
            "en": "Yes, flexible plan."
          }
        },
        {
          "role": "ai",
          "text": "Everyone okay with that?",
          "translations": {
            "ko": "모두 이에 동의하시나요?",
            "zh": "大家对这个都没问题吗？",
            "ja": "皆さん、それで大丈夫ですか？",
            "vi": "Đúng, nghe có vẻ công bằng.",
            "en": "Everyone okay with that?"
          }
        },
        {
          "role": "user",
          "text": "Yes, sounds fair.",
          "translations": {
            "ko": "네, 공정하게 들립니다.",
            "zh": "是的，听起来公平。",
            "ja": "はい、公平だと思います。",
            "vi": "Cảm ơn vì đã đóng góp.",
            "en": "Yes, sounds fair."
          }
        },
        {
          "role": "ai",
          "text": "Thanks for the input.",
          "translations": {
            "ko": "의견을 주셔서 감사합니다.",
            "zh": "谢谢你们的意见。",
            "ja": "意見をくれてありがとう。",
            "vi": "Rất vui được thảo luận.",
            "en": "Thanks for the input."
          }
        },
        {
          "role": "user",
          "text": "Glad to discuss.",
          "translations": {
            "ko": "토론하는 것이 기쁩니다.",
            "zh": "很高兴能讨论。",
            "ja": "話し合うことができてうれしいです。",
            "vi": "Hãy cẩn thận tiến lên.",
            "en": "Glad to discuss."
          }
        },
        {
          "role": "ai",
          "text": "Let’s move ahead carefully.",
          "translations": {
            "ko": "조심스럽게 진행합시다.",
            "zh": "让我们谨慎行事。",
            "ja": "慎重に進めましょう。",
            "vi": "Đồng ý.",
            "en": "Let’s move ahead carefully."
          }
        },
        {
          "role": "user",
          "text": "Agreed.",
          "translations": {
            "ko": "동의합니다.",
            "zh": "同意。",
            "ja": "同意します。",
            "vi": "Lên lịch cho cuộc họp tiếp theo",
            "en": "Agreed."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Scheduling the next meeting",
        "ko": "다음 회의 일정 정하기",
        "zh": "安排下次会议",
        "ja": "次のミーティングをスケジュールする",
        "vi": "Khi nào chúng ta nên họp lại?"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "When should we meet again?",
          "translations": {
            "ko": "다음에 언제 만날까요?",
            "zh": "我们应该什么时候再见面？",
            "ja": "次にいつ会いましょうか？",
            "vi": "Vào thứ Sáu buổi sáng được không?",
            "en": "When should we meet again?"
          }
        },
        {
          "role": "user",
          "text": "How about Friday morning?",
          "translations": {
            "ko": "금요일 아침은 어떠신가요?",
            "zh": "星期五早上怎么样？",
            "ja": "金曜日の朝はどうですか？",
            "vi": "Được với tôi. 10 giờ sáng?",
            "en": "How about Friday morning?"
          }
        },
        {
          "role": "ai",
          "text": "Works for me. 10 AM?",
          "translations": {
            "ko": "저는 괜찮습니다. 오전 10시에요?",
            "zh": "对我来说可以。10点吗？",
            "ja": "私には大丈夫です。10時ですか？",
            "vi": "Hoàn hảo.",
            "en": "Works for me. 10 AM?"
          }
        },
        {
          "role": "user",
          "text": "Perfect.",
          "translations": {
            "ko": "완벽합니다.",
            "zh": "完美。",
            "ja": "パーフェクトです。",
            "vi": "Có xung đột nào với người khác không?",
            "en": "Perfect."
          }
        },
        {
          "role": "ai",
          "text": "Any conflicts for others?",
          "translations": {
            "ko": "다른 분들은 충돌하는 일정이 있나요?",
            "zh": "其他人有冲突吗？",
            "ja": "他の人には都合がつきますか？",
            "vi": "Để tôi kiểm tra.",
            "en": "Any conflicts for others?"
          }
        },
        {
          "role": "user",
          "text": "Let me check.",
          "translations": {
            "ko": "확인해보겠습니다.",
            "zh": "让我看看。",
            "ja": "確認します。",
            "vi": "Thứ Sáu trông rõ ràng.",
            "en": "Let me check."
          }
        },
        {
          "role": "ai",
          "text": "Friday looks clear.",
          "translations": {
            "ko": "금요일은 괜찮아 보입니다.",
            "zh": "星期五看起来没问题。",
            "ja": "金曜日は大丈夫そうです。",
            "vi": "Tốt.",
            "en": "Friday looks clear."
          }
        },
        {
          "role": "user",
          "text": "Great.",
          "translations": {
            "ko": "좋습니다.",
            "zh": "很好。",
            "ja": "素晴らしいです。",
            "vi": "Cùng địa điểm?",
            "en": "Great."
          }
        },
        {
          "role": "ai",
          "text": "Same location?",
          "translations": {
            "ko": "같은 장소에서 하나요?",
            "zh": "地点还是原来的吗？",
            "ja": "場所は同じですか？",
            "vi": "Đúng, cùng phòng.",
            "en": "Same location?"
          }
        },
        {
          "role": "user",
          "text": "Yes, same room.",
          "translations": {
            "ko": "네, 같은 방에서요.",
            "zh": "是的，同一个房间。",
            "ja": "はい、同じ部屋です。",
            "vi": "Chương trình sẽ được gửi trước đó phải không?",
            "en": "Yes, same room."
          }
        },
        {
          "role": "ai",
          "text": "Agenda sent before then?",
          "translations": {
            "ko": "그 전에 의제를 보내주실 건가요?",
            "zh": "会议前会发送议程吗？",
            "ja": "アジェンダはそれまでに送られますか？",
            "vi": "Tôi sẽ gửi vào thứ Năm.",
            "en": "Agenda sent before then?"
          }
        },
        {
          "role": "user",
          "text": "I’ll send it Thursday.",
          "translations": {
            "ko": "목요일에 보내드리겠습니다.",
            "zh": "我会在周四发送。",
            "ja": "木曜日に送ります。",
            "vi": "Chúng ta cần tất cả các thành viên trong nhóm không?",
            "en": "I’ll send it Thursday."
          }
        },
        {
          "role": "ai",
          "text": "Do we need all team members?",
          "translations": {
            "ko": "모든 팀원들이 필요한가요?",
            "zh": "我们需要所有的团队成员吗？",
            "ja": "全てのチームメンバーが必要ですか？",
            "vi": "Đúng, điều này rất quan trọng.",
            "en": "Do we need all team members?"
          }
        },
        {
          "role": "user",
          "text": "Yes, this is key.",
          "translations": {
            "ko": "네, 이것은 중요합니다.",
            "zh": "是的，这很重要。",
            "ja": "はい、これは重要です。",
            "vi": "Chúng ta nên mời HR tham gia không?",
            "en": "Yes, this is key."
          }
        },
        {
          "role": "ai",
          "text": "Should we invite HR too?",
          "translations": {
            "ko": "HR도 초대해야 하나요?",
            "zh": "我们应该邀请人力资源部门吗？",
            "ja": "HRも招待すべきですか？",
            "vi": "Ý tưởng tốt.",
            "en": "Should we invite HR too?"
          }
        },
        {
          "role": "user",
          "text": "Good idea.",
          "translations": {
            "ko": "좋은 생각입니다.",
            "zh": "好主意。",
            "ja": "良いアイデアです。",
            "vi": "Tôi sẽ thêm họ vào danh sách.",
            "en": "Good idea."
          }
        },
        {
          "role": "ai",
          "text": "I’ll add them to the list.",
          "translations": {
            "ko": "그들을 목록에 추가하겠습니다.",
            "zh": "我会把他们加入名单。",
            "ja": "彼らをリストに追加します。",
            "vi": "Cảm ơn.",
            "en": "I’ll add them to the list."
          }
        },
        {
          "role": "user",
          "text": "Thanks.",
          "translations": {
            "ko": "감사합니다.",
            "zh": "谢谢。",
            "ja": "ありがとう。",
            "vi": "Cuộc họp đã được xác nhận vào thứ Sáu lúc 10 giờ.",
            "en": "Thanks."
          }
        },
        {
          "role": "ai",
          "text": "Meeting confirmed for Friday 10.",
          "translations": {
            "ko": "금요일 오전 10시에 회의가 확정되었습니다.",
            "zh": "确认星期五10点开会。",
            "ja": "金曜日の10時にミーティングが確定しました。",
            "vi": "Đã ghi nhớ!",
            "en": "Meeting confirmed for Friday 10."
          }
        },
        {
          "role": "user",
          "text": "Noted!",
          "translations": {
            "ko": "기록했습니다!",
            "zh": "已记下！",
            "ja": "了解しました！",
            "vi": "Kết thúc cuộc họp",
            "en": "Noted!"
          }
        }
      ]
    },
    {
      "description": {
        "en": "Ending the meeting",
        "ko": "회의 마치기",
        "zh": "结束会议",
        "ja": "ミーティングを終える",
        "vi": "Chúng ta đã hết thời gian cho hôm nay."
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "We’re out of time for today.",
          "translations": {
            "ko": "오늘은 시간이 다 되었습니다.",
            "zh": "我们今天的时间已经用完了。",
            "ja": "今日は時間がなくなりました。",
            "vi": "Được.",
            "en": "We’re out of time for today."
          }
        },
        {
          "role": "user",
          "text": "Okay.",
          "translations": {
            "ko": "알겠습니다.",
            "zh": "好的。",
            "ja": "了解です。",
            "vi": "Cảm ơn vì đã đóng góp.",
            "en": "Okay."
          }
        },
        {
          "role": "ai",
          "text": "Thanks for your input.",
          "translations": {
            "ko": "의견을 주셔서 감사합니다.",
            "zh": "感谢你们的意见。",
            "ja": "皆さんの意見をありがとう。",
            "vi": "Rất vui được giúp đỡ.",
            "en": "Thanks for your input."
          }
        },
        {
          "role": "user",
          "text": "Happy to help.",
          "translations": {
            "ko": "도와드리게 되어 기쁩니다.",
            "zh": "很高兴能帮助。",
            "ja": "助けられてうれしいです。",
            "vi": "Chúng ta đã tiến bộ tốt.",
            "en": "Happy to help."
          }
        },
        {
          "role": "ai",
          "text": "We made good progress.",
          "translations": {
            "ko": "좋은 진전을 이루었습니다.",
            "zh": "我们取得了很好的进展。",
            "ja": "良い進捗を遂げました。",
            "vi": "Đúng, rất hiệu quả.",
            "en": "We made good progress."
          }
        },
        {
          "role": "user",
          "text": "Yes, very productive.",
          "translations": {
            "ko": "네, 매우 생산적이었습니다.",
            "zh": "是的，非常有效率。",
            "ja": "はい、とても生産的でした。",
            "vi": "Tôi sẽ chia sẻ ghi chú sau này.",
            "en": "Yes, very productive."
          }
        },
        {
          "role": "ai",
          "text": "I’ll share notes after this.",
          "translations": {
            "ko": "이후에 노트를 공유하겠습니다.",
            "zh": "我会在会后分享笔记。",
            "ja": "ミーティング後にノートを共有します。",
            "vi": "Mong chờ nó.",
            "en": "I’ll share notes after this."
          }
        },
        {
          "role": "user",
          "text": "Looking forward to it.",
          "translations": {
            "ko": "기대하겠습니다.",
            "zh": "期待。",
            "ja": "楽しみにしています。",
            "vi": "Có ý kiến cuối cùng nào không?",
            "en": "Looking forward to it."
          }
        },
        {
          "role": "ai",
          "text": "Any last comments?",
          "translations": {
            "ko": "마지막으로 의견이 있나요?",
            "zh": "最后有什么要说的吗？",
            "ja": "最後のコメントはありますか？",
            "vi": "Không có gì từ tôi.",
            "en": "Any last comments?"
          }
        },
        {
          "role": "user",
          "text": "None from me.",
          "translations": {
            "ko": "제가 할 말은 없습니다.",
            "zh": "我这边没有。",
            "ja": "私からはありません。",
            "vi": "Được, cuộc họp kết thúc.",
            "en": "None from me."
          }
        },
        {
          "role": "ai",
          "text": "Alright, meeting is adjourned.",
          "translations": {
            "ko": "좋습니다, 회의를 마치겠습니다.",
            "zh": "好的，会议结束。",
            "ja": "それでは、ミーティングを終わります。",
            "vi": "Cảm ơn mọi người.",
            "en": "Alright, meeting is adjourned."
          }
        },
        {
          "role": "user",
          "text": "Thanks, everyone.",
          "translations": {
            "ko": "모두 감사합니다.",
            "zh": "谢谢大家。",
            "ja": "皆さん、ありがとう。",
            "vi": "Hãy theo dõi qua email.",
            "en": "Thanks, everyone."
          }
        },
        {
          "role": "ai",
          "text": "Let’s follow up by email.",
          "translations": {
            "ko": "이메일로 후속 조치를 하겠습니다.",
            "zh": "让我们通过电子邮件跟进。",
            "ja": "メールでフォローアップしましょう。",
            "vi": "Sẽ làm vậy.",
            "en": "Let’s follow up by email."
          }
        },
        {
          "role": "user",
          "text": "Will do.",
          "translations": {
            "ko": "알겠습니다.",
            "zh": "好的。",
            "ja": "了解しました。",
            "vi": "Chúc một ngày tốt lành!",
            "en": "Will do."
          }
        },
        {
          "role": "ai",
          "text": "Have a great day!",
          "translations": {
            "ko": "좋은 하루 보내세요!",
            "zh": "祝大家今天过得愉快！",
            "ja": "素晴らしい一日を！",
            "vi": "Bạn cũng vậy.",
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
            "vi": "Hẹn gặp lại tại cuộc họp tiếp theo.",
            "en": "You too."
          }
        },
        {
          "role": "ai",
          "text": "See you at the next meeting.",
          "translations": {
            "ko": "다음 회의에서 뵙겠습니다.",
            "zh": "在下次会议上见。",
            "ja": "次のミーティングでお会いしましょう。",
            "vi": "Tạm biệt!",
            "en": "See you at the next meeting."
          }
        },
        {
          "role": "user",
          "text": "Bye!",
          "translations": {
            "ko": "안녕!",
            "zh": "再见！",
            "ja": "さようなら！",
            "vi": "Chăm sóc bản thân.",
            "en": "Bye!"
          }
        },
        {
          "role": "ai",
          "text": "Take care.",
          "translations": {
            "ko": "건강하세요.",
            "zh": "保重。",
            "ja": "お気をつけて。",
            "vi": "Chăm sóc bản thân!",
            "en": "Take care."
          }
        },
        {
          "role": "user",
          "text": "Take care!",
          "translations": {
            "ko": "건강하세요!",
            "zh": "保重！",
            "ja": "お気をつけて！",
            "vi": "",
            "en": "Take care!"
          }
        }
      ]
    }
  ],
  "intermediate": [
    {
      "description": {
        "en": "Organizing a cross-department meeting",
        "ko": "부서 간 회의 준비하기",
        "zh": "组织跨部门会议",
        "ja": "部署間の会議を組織する",
        "vi": "Tổ chức một cuộc họp liên bộ phận"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "I think it’s time we organize a meeting with all departments.",
          "translations": {
            "ko": "모든 부서와 회의를 준비할 시간인 것 같아요.",
            "zh": "我认为我们该组织一个全部门的会议了。",
            "ja": "全部署との会議を開く時期だと思います。",
            "vi": "Tôi nghĩ đã đến lúc chúng ta tổ chức một cuộc họp với tất cả các bộ phận.",
            "en": "I think it’s time we organize a meeting with all departments."
          }
        },
        {
          "role": "user",
          "text": "Agreed. We’ve had too many miscommunications lately.",
          "translations": {
            "ko": "동의합니다. 최근에 너무 많은 오해가 있었어요.",
            "zh": "同意。我们最近的误会太多了。",
            "ja": "同意します。最近、誤解が多すぎます。",
            "vi": "Đồng ý. Gần đây chúng ta đã có quá nhiều sự hiểu lầm.",
            "en": "Agreed. We’ve had too many miscommunications lately."
          }
        },
        {
          "role": "ai",
          "text": "How about inviting marketing, design, and sales for Thursday?",
          "translations": {
            "ko": "목요일에 마케팅, 디자인, 판매 팀을 초대하는 건 어떨까요?",
            "zh": "那我们周四邀请市场部、设计部和销售部怎么样？",
            "ja": "木曜日にマーケティング、デザイン、営業を招待するのはどうでしょうか？",
            "vi": "Thế còn mời bộ phận tiếp thị, thiết kế và bán hàng vào thứ Năm?",
            "en": "How about inviting marketing, design, and sales for Thursday?"
          }
        },
        {
          "role": "user",
          "text": "Thursday works. Should we include logistics too?",
          "translations": {
            "ko": "목요일 괜찮아요. 물류팀도 포함시켜야 할까요?",
            "zh": "周四可以。我们应该也包括物流部吗？",
            "ja": "木曜日は大丈夫です。物流も含めましょうか？",
            "vi": "Thứ Năm được. Chúng ta có nên bao gồm cả bộ phận hậu cần không?",
            "en": "Thursday works. Should we include logistics too?"
          }
        },
        {
          "role": "ai",
          "text": "Good idea. Let’s not leave anyone out.",
          "translations": {
            "ko": "좋은 생각이에요. 아무도 빠뜨리지 않는 게 좋겠어요.",
            "zh": "好主意。我们不要遗漏任何人。",
            "ja": "良いアイデアです。誰も除外しないようにしましょう。",
            "vi": "Ý tưởng hay. Chúng ta không nên bỏ sót ai.",
            "en": "Good idea. Let’s not leave anyone out."
          }
        },
        {
          "role": "user",
          "text": "I’ll book the large conference room.",
          "translations": {
            "ko": "큰 회의실을 예약할게요.",
            "zh": "我会预定大会议室。",
            "ja": "大会議室を予約します。",
            "vi": "Tôi sẽ đặt phòng họp lớn.",
            "en": "I’ll book the large conference room."
          }
        },
        {
          "role": "ai",
          "text": "Perfect. I’ll draft the agenda by tomorrow.",
          "translations": {
            "ko": "완벽해요. 내일까지 의제를 작성하겠습니다.",
            "zh": "完美。我明天会草拟议程。",
            "ja": "完璧です。明日までに議題を作成します。",
            "vi": "Hoàn hảo. Tôi sẽ soạn thảo chương trình họp vào ngày mai.",
            "en": "Perfect. I’ll draft the agenda by tomorrow."
          }
        },
        {
          "role": "user",
          "text": "Include a section on cross-team workflow improvements.",
          "translations": {
            "ko": "팀 간 업무 흐름 개선에 대한 부분도 포함시켜주세요.",
            "zh": "在议程中加入一个关于跨团队工作流程改进的部分。",
            "ja": "チーム間のワークフロー改善についてのセクションを含めてください。",
            "vi": "Bao gồm một phần về cải tiến quy trình làm việc giữa các nhóm.",
            "en": "Include a section on cross-team workflow improvements."
          }
        },
        {
          "role": "ai",
          "text": "Will do. Should I moderate the session?",
          "translations": {
            "ko": "알겠습니다. 제가 회의를 주재해야 할까요?",
            "zh": "好的。我应该主持这个会议吗？",
            "ja": "了解しました。私がセッションを進行すべきですか？",
            "vi": "Tôi sẽ làm. Tôi có nên điều hành phiên họp không?",
            "en": "Will do. Should I moderate the session?"
          }
        },
        {
          "role": "user",
          "text": "Yes, you’re great at keeping discussions on track.",
          "translations": {
            "ko": "네, 토론을 잘 이끌어주시니까요.",
            "zh": "是的，你很擅长保持讨论的进行。",
            "ja": "はい、あなたは議論を進行させるのが得意です。",
            "vi": "Có, bạn giỏi việc giữ cho cuộc thảo luận đi đúng hướng.",
            "en": "Yes, you’re great at keeping discussions on track."
          }
        },
        {
          "role": "ai",
          "text": "Thanks. I’ll send out a calendar invite this afternoon.",
          "translations": {
            "ko": "감사합니다. 오후에 일정 초대장을 보내겠습니다.",
            "zh": "谢谢。我今天下午会发送日历邀请。",
            "ja": "ありがとう。今日の午後にカレンダーの招待を送ります。",
            "vi": "Cảm ơn. Tôi sẽ gửi lời mời qua lịch vào chiều nay.",
            "en": "Thanks. I’ll send out a calendar invite this afternoon."
          }
        },
        {
          "role": "user",
          "text": "I’ll follow up with anyone who hasn’t responded.",
          "translations": {
            "ko": "응답하지 않은 사람들에게는 따로 연락하겠습니다.",
            "zh": "我会跟进那些还没回应的人。",
            "ja": "返答がない人にはフォローアップします。",
            "vi": "Tôi sẽ theo dõi với những người chưa phản hồi.",
            "en": "I’ll follow up with anyone who hasn’t responded."
          }
        },
        {
          "role": "ai",
          "text": "Do we need to record the meeting for those who can’t attend?",
          "translations": {
            "ko": "참석하지 못하는 사람들을 위해 회의를 녹화해야 할까요?",
            "zh": "我们需要为不能参加的人录制会议吗？",
            "ja": "出席できない人のために会議を録音する必要がありますか？",
            "vi": "Chúng ta có cần ghi lại cuộc họp cho những người không thể tham dự không?",
            "en": "Do we need to record the meeting for those who can’t attend?"
          }
        },
        {
          "role": "user",
          "text": "Yes, that would be helpful.",
          "translations": {
            "ko": "네, 그게 도움이 될 것 같아요.",
            "zh": "是的，这会很有帮助。",
            "ja": "はい、それは役立つでしょう。",
            "vi": "Có, điều đó sẽ hữu ích.",
            "en": "Yes, that would be helpful."
          }
        },
        {
          "role": "ai",
          "text": "I’ll make sure the equipment is ready.",
          "translations": {
            "ko": "장비가 준비되어 있는지 확인하겠습니다.",
            "zh": "我会确保设备准备就绪。",
            "ja": "機器が準備できていることを確認します。",
            "vi": "Tôi sẽ đảm bảo thiết bị sẵn sàng.",
            "en": "I’ll make sure the equipment is ready."
          }
        },
        {
          "role": "user",
          "text": "Let’s also assign someone to take notes.",
          "translations": {
            "ko": "또한 누군가에게 메모를 쓰라고 부탁해야겠어요.",
            "zh": "我们也应该指派一个人来做记录。",
            "ja": "メモを取る人も指定しましょう。",
            "vi": "Chúng ta cũng nên giao cho ai đó nhiệm vụ ghi chú.",
            "en": "Let’s also assign someone to take notes."
          }
        },
        {
          "role": "ai",
          "text": "I’ll ask Sam. He’s good at that.",
          "translations": {
            "ko": "샘에게 부탁하겠습니다. 그가 잘하니까요.",
            "zh": "我会问Sam。他擅长这个。",
            "ja": "サムに頼みます。彼はそれが得意です。",
            "vi": "Tôi sẽ hỏi Sam. Anh ấy giỏi việc đó.",
            "en": "I’ll ask Sam. He’s good at that."
          }
        },
        {
          "role": "user",
          "text": "Alright, looks like we’re all set.",
          "translations": {
            "ko": "좋아요, 모든 준비가 끝난 것 같네요.",
            "zh": "好的，看起来我们都准备好了。",
            "ja": "さて、準備が整ったようです。",
            "vi": "Được rồi, hình như chúng ta đã sẵn sàng.",
            "en": "Alright, looks like we’re all set."
          }
        },
        {
          "role": "ai",
          "text": "Thanks for your help organizing this.",
          "translations": {
            "ko": "이 모든 것을 준비하는 데 도움을 줘서 고마워요.",
            "zh": "感谢你帮忙组织这个。",
            "ja": "この組織の手伝いをしてくれてありがとう。",
            "vi": "Cảm ơn sự giúp đỡ của bạn trong việc tổ chức điều này.",
            "en": "Thanks for your help organizing this."
          }
        },
        {
          "role": "user",
          "text": "Anytime!",
          "translations": {
            "ko": "언제든지!",
            "zh": "随时！",
            "ja": "いつでも！",
            "vi": "Bất cứ lúc nào!",
            "en": "Anytime!"
          }
        }
      ]
    },
    {
      "description": {
        "en": "Addressing low team morale",
        "ko": "팀의 사기 저하 문제 해결하기",
        "zh": "解决团队士气低落问题",
        "ja": "チームの士気低下に対処する",
        "vi": "Giải quyết tình hình động viên nhóm thấp"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "I think it’s time we organize a meeting with all departments.",
          "translations": {
            "ko": "모든 부서와 회의를 준비할 시간인 것 같아요.",
            "zh": "我认为我们该组织一个全部门的会议了。",
            "ja": "全部署との会議を開く時期だと思います。",
            "vi": "Tôi nghĩ đã đến lúc chúng ta tổ chức một cuộc họp với tất cả các bộ phận.",
            "en": "I think it’s time we organize a meeting with all departments."
          }
        },
        {
          "role": "user",
          "text": "Agreed. We’ve had too many miscommunications lately.",
          "translations": {
            "ko": "동의합니다. 최근에 너무 많은 오해가 있었어요.",
            "zh": "同意。我们最近的误会太多了。",
            "ja": "同意します。最近、誤解が多すぎます。",
            "vi": "Đồng ý. Gần đây chúng ta đã có quá nhiều sự hiểu lầm.",
            "en": "Agreed. We’ve had too many miscommunications lately."
          }
        },
        {
          "role": "ai",
          "text": "How about inviting marketing, design, and sales for Thursday?",
          "translations": {
            "ko": "목요일에 마케팅, 디자인, 판매 팀을 초대하는 건 어떨까요?",
            "zh": "那我们周四邀请市场部、设计部和销售部怎么样？",
            "ja": "木曜日にマーケティング、デザイン、営業を招待するのはどうでしょうか？",
            "vi": "Thế còn mời bộ phận tiếp thị, thiết kế và bán hàng vào thứ Năm?",
            "en": "How about inviting marketing, design, and sales for Thursday?"
          }
        },
        {
          "role": "user",
          "text": "Thursday works. Should we include logistics too?",
          "translations": {
            "ko": "목요일 괜찮아요. 물류팀도 포함시켜야 할까요?",
            "zh": "周四可以。我们应该也包括物流部吗？",
            "ja": "木曜日は大丈夫です。物流も含めましょうか？",
            "vi": "Thứ Năm được. Chúng ta có nên bao gồm cả bộ phận hậu cần không?",
            "en": "Thursday works. Should we include logistics too?"
          }
        },
        {
          "role": "ai",
          "text": "Good idea. Let’s not leave anyone out.",
          "translations": {
            "ko": "좋은 생각이에요. 아무도 빠뜨리지 않는 게 좋겠어요.",
            "zh": "好主意。我们不要遗漏任何人。",
            "ja": "良いアイデアです。誰も除外しないようにしましょう。",
            "vi": "Ý tưởng hay. Chúng ta không nên bỏ sót ai.",
            "en": "Good idea. Let’s not leave anyone out."
          }
        },
        {
          "role": "user",
          "text": "I’ll book the large conference room.",
          "translations": {
            "ko": "큰 회의실을 예약할게요.",
            "zh": "我会预定大会议室。",
            "ja": "大会議室を予約します。",
            "vi": "Tôi sẽ đặt phòng họp lớn.",
            "en": "I’ll book the large conference room."
          }
        },
        {
          "role": "ai",
          "text": "Perfect. I’ll draft the agenda by tomorrow.",
          "translations": {
            "ko": "완벽해요. 내일까지 의제를 작성하겠습니다.",
            "zh": "完美。我明天会草拟议程。",
            "ja": "完璧です。明日までに議題を作成します。",
            "vi": "Hoàn hảo. Tôi sẽ soạn thảo chương trình họp vào ngày mai.",
            "en": "Perfect. I’ll draft the agenda by tomorrow."
          }
        },
        {
          "role": "user",
          "text": "Include a section on cross-team workflow improvements.",
          "translations": {
            "ko": "팀 간 업무 흐름 개선에 대한 부분도 포함시켜주세요.",
            "zh": "在议程中加入一个关于跨团队工作流程改进的部分。",
            "ja": "チーム間のワークフロー改善についてのセクションを含めてください。",
            "vi": "Bao gồm một phần về cải tiến quy trình làm việc giữa các nhóm.",
            "en": "Include a section on cross-team workflow improvements."
          }
        },
        {
          "role": "ai",
          "text": "Will do. Should I moderate the session?",
          "translations": {
            "ko": "알겠습니다. 제가 회의를 주재해야 할까요?",
            "zh": "好的。我应该主持这个会议吗？",
            "ja": "了解しました。私がセッションを進行すべきですか？",
            "vi": "Tôi sẽ làm. Tôi có nên điều hành phiên họp không?",
            "en": "Will do. Should I moderate the session?"
          }
        },
        {
          "role": "user",
          "text": "Yes, you’re great at keeping discussions on track.",
          "translations": {
            "ko": "네, 토론을 잘 이끌어주시니까요.",
            "zh": "是的，你很擅长保持讨论的进行。",
            "ja": "はい、あなたは議論を進行させるのが得意です。",
            "vi": "Có, bạn giỏi việc giữ cho cuộc thảo luận đi đúng hướng.",
            "en": "Yes, you’re great at keeping discussions on track."
          }
        },
        {
          "role": "ai",
          "text": "Thanks. I’ll send out a calendar invite this afternoon.",
          "translations": {
            "ko": "감사합니다. 오후에 일정 초대장을 보내겠습니다.",
            "zh": "谢谢。我今天下午会发送日历邀请。",
            "ja": "ありがとう。今日の午後にカレンダーの招待を送ります。",
            "vi": "Cảm ơn. Tôi sẽ gửi lời mời qua lịch vào chiều nay.",
            "en": "Thanks. I’ll send out a calendar invite this afternoon."
          }
        },
        {
          "role": "user",
          "text": "I’ll follow up with anyone who hasn’t responded.",
          "translations": {
            "ko": "응답하지 않은 사람들에게는 따로 연락하겠습니다.",
            "zh": "我会跟进那些还没回应的人。",
            "ja": "返答がない人にはフォローアップします。",
            "vi": "Tôi sẽ theo dõi với những người chưa phản hồi.",
            "en": "I’ll follow up with anyone who hasn’t responded."
          }
        },
        {
          "role": "ai",
          "text": "Do we need to record the meeting for those who can’t attend?",
          "translations": {
            "ko": "참석하지 못하는 사람들을 위해 회의를 녹화해야 할까요?",
            "zh": "我们需要为不能参加的人录制会议吗？",
            "ja": "出席できない人のために会議を録音する必要がありますか？",
            "vi": "Chúng ta có cần ghi lại cuộc họp cho những người không thể tham dự không?",
            "en": "Do we need to record the meeting for those who can’t attend?"
          }
        },
        {
          "role": "user",
          "text": "Yes, that would be helpful.",
          "translations": {
            "ko": "네, 그게 도움이 될 것 같아요.",
            "zh": "是的，这会很有帮助。",
            "ja": "はい、それは役立つでしょう。",
            "vi": "Có, điều đó sẽ hữu ích.",
            "en": "Yes, that would be helpful."
          }
        },
        {
          "role": "ai",
          "text": "I’ll make sure the equipment is ready.",
          "translations": {
            "ko": "장비가 준비되어 있는지 확인하겠습니다.",
            "zh": "我会确保设备准备就绪。",
            "ja": "機器が準備できていることを確認します。",
            "vi": "Tôi sẽ đảm bảo thiết bị sẵn sàng.",
            "en": "I’ll make sure the equipment is ready."
          }
        },
        {
          "role": "user",
          "text": "Let’s also assign someone to take notes.",
          "translations": {
            "ko": "또한 누군가에게 메모를 쓰라고 부탁해야겠어요.",
            "zh": "我们也应该指派一个人来做记录。",
            "ja": "メモを取る人も指定しましょう。",
            "vi": "Chúng ta cũng nên giao cho ai đó nhiệm vụ ghi chú.",
            "en": "Let’s also assign someone to take notes."
          }
        },
        {
          "role": "ai",
          "text": "I’ll ask Sam. He’s good at that.",
          "translations": {
            "ko": "샘에게 부탁하겠습니다. 그가 잘하니까요.",
            "zh": "我会问Sam。他擅长这个。",
            "ja": "サムに頼みます。彼はそれが得意です。",
            "vi": "Tôi sẽ hỏi Sam. Anh ấy giỏi việc đó.",
            "en": "I’ll ask Sam. He’s good at that."
          }
        },
        {
          "role": "user",
          "text": "Alright, looks like we’re all set.",
          "translations": {
            "ko": "좋아요, 모든 준비가 끝난 것 같네요.",
            "zh": "好的，看起来我们都准备好了。",
            "ja": "さて、準備が整ったようです。",
            "vi": "Được rồi, hình như chúng ta đã sẵn sàng.",
            "en": "Alright, looks like we’re all set."
          }
        },
        {
          "role": "ai",
          "text": "Thanks for your help organizing this.",
          "translations": {
            "ko": "이 모든 것을 준비하는 데 도움을 줘서 고마워요.",
            "zh": "感谢你帮忙组织这个。",
            "ja": "この組織の手伝いをしてくれてありがとう。",
            "vi": "Cảm ơn sự giúp đỡ của bạn trong việc tổ chức điều này.",
            "en": "Thanks for your help organizing this."
          }
        },
        {
          "role": "user",
          "text": "Anytime!",
          "translations": {
            "ko": "언제든지!",
            "zh": "随时！",
            "ja": "いつでも！",
            "vi": "Bất cứ lúc nào!",
            "en": "Anytime!"
          }
        }
      ]
    },
    {
      "description": {
        "en": "Reviewing project delays",
        "ko": "프로젝트 지연 문제 검토하기",
        "zh": "审查项目延误",
        "ja": "プロジェクトの遅延を見直す",
        "vi": "Rà soát sự chậm trễ của dự án"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "I think it’s time we organize a meeting with all departments.",
          "translations": {
            "ko": "모든 부서와 회의를 준비할 시간인 것 같아요.",
            "zh": "我认为我们该组织一个全部门的会议了。",
            "ja": "全部署との会議を開く時期だと思います。",
            "vi": "Tôi nghĩ đã đến lúc chúng ta tổ chức một cuộc họp với tất cả các bộ phận.",
            "en": "I think it’s time we organize a meeting with all departments."
          }
        },
        {
          "role": "user",
          "text": "Agreed. We’ve had too many miscommunications lately.",
          "translations": {
            "ko": "동의합니다. 최근에 너무 많은 오해가 있었어요.",
            "zh": "同意。我们最近的误会太多了。",
            "ja": "同意します。最近、誤解が多すぎます。",
            "vi": "Đồng ý. Gần đây chúng ta đã có quá nhiều sự hiểu lầm.",
            "en": "Agreed. We’ve had too many miscommunications lately."
          }
        },
        {
          "role": "ai",
          "text": "How about inviting marketing, design, and sales for Thursday?",
          "translations": {
            "ko": "목요일에 마케팅, 디자인, 판매 팀을 초대하는 건 어떨까요?",
            "zh": "那我们周四邀请市场部、设计部和销售部怎么样？",
            "ja": "木曜日にマーケティング、デザイン、営業を招待するのはどうでしょうか？",
            "vi": "Thế còn mời bộ phận tiếp thị, thiết kế và bán hàng vào thứ Năm?",
            "en": "How about inviting marketing, design, and sales for Thursday?"
          }
        },
        {
          "role": "user",
          "text": "Thursday works. Should we include logistics too?",
          "translations": {
            "ko": "목요일 괜찮아요. 물류팀도 포함시켜야 할까요?",
            "zh": "周四可以。我们应该也包括物流部吗？",
            "ja": "木曜日は大丈夫です。物流も含めましょうか？",
            "vi": "Thứ Năm được. Chúng ta có nên bao gồm cả bộ phận hậu cần không?",
            "en": "Thursday works. Should we include logistics too?"
          }
        },
        {
          "role": "ai",
          "text": "Good idea. Let’s not leave anyone out.",
          "translations": {
            "ko": "좋은 생각이에요. 아무도 빠뜨리지 않는 게 좋겠어요.",
            "zh": "好主意。我们不要遗漏任何人。",
            "ja": "良いアイデアです。誰も除外しないようにしましょう。",
            "vi": "Ý tưởng hay. Chúng ta không nên bỏ sót ai.",
            "en": "Good idea. Let’s not leave anyone out."
          }
        },
        {
          "role": "user",
          "text": "I’ll book the large conference room.",
          "translations": {
            "ko": "큰 회의실을 예약할게요.",
            "zh": "我会预定大会议室。",
            "ja": "大会議室を予約します。",
            "vi": "Tôi sẽ đặt phòng họp lớn.",
            "en": "I’ll book the large conference room."
          }
        },
        {
          "role": "ai",
          "text": "Perfect. I’ll draft the agenda by tomorrow.",
          "translations": {
            "ko": "완벽해요. 내일까지 의제를 작성하겠습니다.",
            "zh": "完美。我明天会草拟议程。",
            "ja": "完璧です。明日までに議題を作成します。",
            "vi": "Hoàn hảo. Tôi sẽ soạn thảo chương trình họp vào ngày mai.",
            "en": "Perfect. I’ll draft the agenda by tomorrow."
          }
        },
        {
          "role": "user",
          "text": "Include a section on cross-team workflow improvements.",
          "translations": {
            "ko": "팀 간 업무 흐름 개선에 대한 부분도 포함시켜주세요.",
            "zh": "在议程中加入一个关于跨团队工作流程改进的部分。",
            "ja": "チーム間のワークフロー改善についてのセクションを含めてください。",
            "vi": "Bao gồm một phần về cải tiến quy trình làm việc giữa các nhóm.",
            "en": "Include a section on cross-team workflow improvements."
          }
        },
        {
          "role": "ai",
          "text": "Will do. Should I moderate the session?",
          "translations": {
            "ko": "알겠습니다. 제가 회의를 주재해야 할까요?",
            "zh": "好的。我应该主持这个会议吗？",
            "ja": "了解しました。私がセッションを進行すべきですか？",
            "vi": "Tôi sẽ làm. Tôi có nên điều hành phiên họp không?",
            "en": "Will do. Should I moderate the session?"
          }
        },
        {
          "role": "user",
          "text": "Yes, you’re great at keeping discussions on track.",
          "translations": {
            "ko": "네, 토론을 잘 이끌어주시니까요.",
            "zh": "是的，你很擅长保持讨论的进行。",
            "ja": "はい、あなたは議論を進行させるのが得意です。",
            "vi": "Có, bạn giỏi việc giữ cho cuộc thảo luận đi đúng hướng.",
            "en": "Yes, you’re great at keeping discussions on track."
          }
        },
        {
          "role": "ai",
          "text": "Thanks. I’ll send out a calendar invite this afternoon.",
          "translations": {
            "ko": "감사합니다. 오후에 일정 초대장을 보내겠습니다.",
            "zh": "谢谢。我今天下午会发送日历邀请。",
            "ja": "ありがとう。今日の午後にカレンダーの招待を送ります。",
            "vi": "Cảm ơn. Tôi sẽ gửi lời mời qua lịch vào chiều nay.",
            "en": "Thanks. I’ll send out a calendar invite this afternoon."
          }
        },
        {
          "role": "user",
          "text": "I’ll follow up with anyone who hasn’t responded.",
          "translations": {
            "ko": "응답하지 않은 사람들에게는 따로 연락하겠습니다.",
            "zh": "我会跟进那些还没回应的人。",
            "ja": "返答がない人にはフォローアップします。",
            "vi": "Tôi sẽ theo dõi với những người chưa phản hồi.",
            "en": "I’ll follow up with anyone who hasn’t responded."
          }
        },
        {
          "role": "ai",
          "text": "Do we need to record the meeting for those who can’t attend?",
          "translations": {
            "ko": "참석하지 못하는 사람들을 위해 회의를 녹화해야 할까요?",
            "zh": "我们需要为不能参加的人录制会议吗？",
            "ja": "出席できない人のために会議を録音する必要がありますか？",
            "vi": "Chúng ta có cần ghi lại cuộc họp cho những người không thể tham dự không?",
            "en": "Do we need to record the meeting for those who can’t attend?"
          }
        },
        {
          "role": "user",
          "text": "Yes, that would be helpful.",
          "translations": {
            "ko": "네, 그게 도움이 될 것 같아요.",
            "zh": "是的，这会很有帮助。",
            "ja": "はい、それは役立つでしょう。",
            "vi": "Có, điều đó sẽ hữu ích.",
            "en": "Yes, that would be helpful."
          }
        },
        {
          "role": "ai",
          "text": "I’ll make sure the equipment is ready.",
          "translations": {
            "ko": "장비가 준비되어 있는지 확인하겠습니다.",
            "zh": "我会确保设备准备就绪。",
            "ja": "機器が準備できていることを確認します。",
            "vi": "Tôi sẽ đảm bảo thiết bị sẵn sàng.",
            "en": "I’ll make sure the equipment is ready."
          }
        },
        {
          "role": "user",
          "text": "Let’s also assign someone to take notes.",
          "translations": {
            "ko": "또한 누군가에게 메모를 쓰라고 부탁해야겠어요.",
            "zh": "我们也应该指派一个人来做记录。",
            "ja": "メモを取る人も指定しましょう。",
            "vi": "Chúng ta cũng nên giao cho ai đó nhiệm vụ ghi chú.",
            "en": "Let’s also assign someone to take notes."
          }
        },
        {
          "role": "ai",
          "text": "I’ll ask Sam. He’s good at that.",
          "translations": {
            "ko": "샘에게 부탁하겠습니다. 그가 잘하니까요.",
            "zh": "我会问Sam。他擅长这个。",
            "ja": "サムに頼みます。彼はそれが得意です。",
            "vi": "Tôi sẽ hỏi Sam. Anh ấy giỏi việc đó.",
            "en": "I’ll ask Sam. He’s good at that."
          }
        },
        {
          "role": "user",
          "text": "Alright, looks like we’re all set.",
          "translations": {
            "ko": "좋아요, 모든 준비가 끝난 것 같네요.",
            "zh": "好的，看起来我们都准备好了。",
            "ja": "さて、準備が整ったようです。",
            "vi": "Được rồi, hình như chúng ta đã sẵn sàng.",
            "en": "Alright, looks like we’re all set."
          }
        },
        {
          "role": "ai",
          "text": "Thanks for your help organizing this.",
          "translations": {
            "ko": "이 모든 것을 준비하는 데 도움을 줘서 고마워요.",
            "zh": "感谢你帮忙组织这个。",
            "ja": "この組織の手伝いをしてくれてありがとう。",
            "vi": "Cảm ơn sự giúp đỡ của bạn trong việc tổ chức điều này.",
            "en": "Thanks for your help organizing this."
          }
        },
        {
          "role": "user",
          "text": "Anytime!",
          "translations": {
            "ko": "언제든지!",
            "zh": "随时！",
            "ja": "いつでも！",
            "vi": "Bất cứ lúc nào!",
            "en": "Anytime!"
          }
        }
      ]
    },
    {
      "description": {
        "en": "Discussing client feedback",
        "ko": "고객 피드백 논의하기",
        "zh": "讨论客户反馈",
        "ja": "クライアントのフィードバックを議論する",
        "vi": "Thảo luận phản hồi của khách hàng"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "I think it’s time we organize a meeting with all departments.",
          "translations": {
            "ko": "모든 부서와 회의를 준비할 시간인 것 같아요.",
            "zh": "我认为我们该组织一个全部门的会议了。",
            "ja": "全部署との会議を開く時期だと思います。",
            "vi": "Tôi nghĩ đã đến lúc chúng ta tổ chức một cuộc họp với tất cả các bộ phận.",
            "en": "I think it’s time we organize a meeting with all departments."
          }
        },
        {
          "role": "user",
          "text": "Agreed. We’ve had too many miscommunications lately.",
          "translations": {
            "ko": "동의합니다. 최근에 너무 많은 오해가 있었어요.",
            "zh": "同意。我们最近的误会太多了。",
            "ja": "同意します。最近、誤解が多すぎます。",
            "vi": "Đồng ý. Gần đây chúng ta đã có quá nhiều sự hiểu lầm.",
            "en": "Agreed. We’ve had too many miscommunications lately."
          }
        },
        {
          "role": "ai",
          "text": "How about inviting marketing, design, and sales for Thursday?",
          "translations": {
            "ko": "목요일에 마케팅, 디자인, 판매 팀을 초대하는 건 어떨까요?",
            "zh": "那我们周四邀请市场部、设计部和销售部怎么样？",
            "ja": "木曜日にマーケティング、デザイン、営業を招待するのはどうでしょうか？",
            "vi": "Thế còn mời bộ phận tiếp thị, thiết kế và bán hàng vào thứ Năm?",
            "en": "How about inviting marketing, design, and sales for Thursday?"
          }
        },
        {
          "role": "user",
          "text": "Thursday works. Should we include logistics too?",
          "translations": {
            "ko": "목요일 괜찮아요. 물류팀도 포함시켜야 할까요?",
            "zh": "周四可以。我们应该也包括物流部吗？",
            "ja": "木曜日は大丈夫です。物流も含めましょうか？",
            "vi": "Thứ Năm được. Chúng ta có nên bao gồm cả bộ phận hậu cần không?",
            "en": "Thursday works. Should we include logistics too?"
          }
        },
        {
          "role": "ai",
          "text": "Good idea. Let’s not leave anyone out.",
          "translations": {
            "ko": "좋은 생각이에요. 아무도 빠뜨리지 않는 게 좋겠어요.",
            "zh": "好主意。我们不要遗漏任何人。",
            "ja": "良いアイデアです。誰も除外しないようにしましょう。",
            "vi": "Ý tưởng hay. Chúng ta không nên bỏ sót ai.",
            "en": "Good idea. Let’s not leave anyone out."
          }
        },
        {
          "role": "user",
          "text": "I’ll book the large conference room.",
          "translations": {
            "ko": "큰 회의실을 예약할게요.",
            "zh": "我会预定大会议室。",
            "ja": "大会議室を予約します。",
            "vi": "Tôi sẽ đặt phòng họp lớn.",
            "en": "I’ll book the large conference room."
          }
        },
        {
          "role": "ai",
          "text": "Perfect. I’ll draft the agenda by tomorrow.",
          "translations": {
            "ko": "완벽해요. 내일까지 의제를 작성하겠습니다.",
            "zh": "完美。我明天会草拟议程。",
            "ja": "完璧です。明日までに議題を作成します。",
            "vi": "Hoàn hảo. Tôi sẽ soạn thảo chương trình họp vào ngày mai.",
            "en": "Perfect. I’ll draft the agenda by tomorrow."
          }
        },
        {
          "role": "user",
          "text": "Include a section on cross-team workflow improvements.",
          "translations": {
            "ko": "팀 간 업무 흐름 개선에 대한 부분도 포함시켜주세요.",
            "zh": "在议程中加入一个关于跨团队工作流程改进的部分。",
            "ja": "チーム間のワークフロー改善についてのセクションを含めてください。",
            "vi": "Bao gồm một phần về cải tiến quy trình làm việc giữa các nhóm.",
            "en": "Include a section on cross-team workflow improvements."
          }
        },
        {
          "role": "ai",
          "text": "Will do. Should I moderate the session?",
          "translations": {
            "ko": "알겠습니다. 제가 회의를 주재해야 할까요?",
            "zh": "好的。我应该主持这个会议吗？",
            "ja": "了解しました。私がセッションを進行すべきですか？",
            "vi": "Tôi sẽ làm. Tôi có nên điều hành phiên họp không?",
            "en": "Will do. Should I moderate the session?"
          }
        },
        {
          "role": "user",
          "text": "Yes, you’re great at keeping discussions on track.",
          "translations": {
            "ko": "네, 토론을 잘 이끌어주시니까요.",
            "zh": "是的，你很擅长保持讨论的进行。",
            "ja": "はい、あなたは議論を進行させるのが得意です。",
            "vi": "Có, bạn giỏi việc giữ cho cuộc thảo luận đi đúng hướng.",
            "en": "Yes, you’re great at keeping discussions on track."
          }
        },
        {
          "role": "ai",
          "text": "Thanks. I’ll send out a calendar invite this afternoon.",
          "translations": {
            "ko": "감사합니다. 오후에 일정 초대장을 보내겠습니다.",
            "zh": "谢谢。我今天下午会发送日历邀请。",
            "ja": "ありがとう。今日の午後にカレンダーの招待を送ります。",
            "vi": "Cảm ơn. Tôi sẽ gửi lời mời qua lịch vào chiều nay.",
            "en": "Thanks. I’ll send out a calendar invite this afternoon."
          }
        },
        {
          "role": "user",
          "text": "I’ll follow up with anyone who hasn’t responded.",
          "translations": {
            "ko": "응답하지 않은 사람들에게는 따로 연락하겠습니다.",
            "zh": "我会跟进那些还没回应的人。",
            "ja": "返答がない人にはフォローアップします。",
            "vi": "Tôi sẽ theo dõi với những người chưa phản hồi.",
            "en": "I’ll follow up with anyone who hasn’t responded."
          }
        },
        {
          "role": "ai",
          "text": "Do we need to record the meeting for those who can’t attend?",
          "translations": {
            "ko": "참석하지 못하는 사람들을 위해 회의를 녹화해야 할까요?",
            "zh": "我们需要为不能参加的人录制会议吗？",
            "ja": "出席できない人のために会議を録音する必要がありますか？",
            "vi": "Chúng ta có cần ghi lại cuộc họp cho những người không thể tham dự không?",
            "en": "Do we need to record the meeting for those who can’t attend?"
          }
        },
        {
          "role": "user",
          "text": "Yes, that would be helpful.",
          "translations": {
            "ko": "네, 그게 도움이 될 것 같아요.",
            "zh": "是的，这会很有帮助。",
            "ja": "はい、それは役立つでしょう。",
            "vi": "Có, điều đó sẽ hữu ích.",
            "en": "Yes, that would be helpful."
          }
        },
        {
          "role": "ai",
          "text": "I’ll make sure the equipment is ready.",
          "translations": {
            "ko": "장비가 준비되어 있는지 확인하겠습니다.",
            "zh": "我会确保设备准备就绪。",
            "ja": "機器が準備できていることを確認します。",
            "vi": "Tôi sẽ đảm bảo thiết bị sẵn sàng.",
            "en": "I’ll make sure the equipment is ready."
          }
        },
        {
          "role": "user",
          "text": "Let’s also assign someone to take notes.",
          "translations": {
            "ko": "또한 누군가에게 메모를 쓰라고 부탁해야겠어요.",
            "zh": "我们也应该指派一个人来做记录。",
            "ja": "メモを取る人も指定しましょう。",
            "vi": "Chúng ta cũng nên giao cho ai đó nhiệm vụ ghi chú.",
            "en": "Let’s also assign someone to take notes."
          }
        },
        {
          "role": "ai",
          "text": "I’ll ask Sam. He’s good at that.",
          "translations": {
            "ko": "샘에게 부탁하겠습니다. 그가 잘하니까요.",
            "zh": "我会问Sam。他擅长这个。",
            "ja": "サムに頼みます。彼はそれが得意です。",
            "vi": "Tôi sẽ hỏi Sam. Anh ấy giỏi việc đó.",
            "en": "I’ll ask Sam. He’s good at that."
          }
        },
        {
          "role": "user",
          "text": "Alright, looks like we’re all set.",
          "translations": {
            "ko": "좋아요, 모든 준비가 끝난 것 같네요.",
            "zh": "好的，看起来我们都准备好了。",
            "ja": "さて、準備が整ったようです。",
            "vi": "Được rồi, hình như chúng ta đã sẵn sàng.",
            "en": "Alright, looks like we’re all set."
          }
        },
        {
          "role": "ai",
          "text": "Thanks for your help organizing this.",
          "translations": {
            "ko": "이 모든 것을 준비하는 데 도움을 줘서 고마워요.",
            "zh": "感谢你帮忙组织这个。",
            "ja": "この組織の手伝いをしてくれてありがとう。",
            "vi": "Cảm ơn sự giúp đỡ của bạn trong việc tổ chức điều này.",
            "en": "Thanks for your help organizing this."
          }
        },
        {
          "role": "user",
          "text": "Anytime!",
          "translations": {
            "ko": "언제든지!",
            "zh": "随时！",
            "ja": "いつでも！",
            "vi": "Bất cứ lúc nào!",
            "en": "Anytime!"
          }
        }
      ]
    },
    {
      "description": {
        "en": "Preparing a presentation collaboratively",
        "ko": "공동으로 발표 준비하기",
        "zh": "协作准备演示",
        "ja": "プレゼンテーションの共同準備",
        "vi": "Chuẩn bị một bài thuyết trình cùng nhau"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "I think it’s time we organize a meeting with all departments.",
          "translations": {
            "ko": "모든 부서와 회의를 준비할 시간인 것 같아요.",
            "zh": "我认为我们该组织一个全部门的会议了。",
            "ja": "全部署との会議を開く時期だと思います。",
            "vi": "Tôi nghĩ đã đến lúc chúng ta tổ chức một cuộc họp với tất cả các bộ phận.",
            "en": "I think it’s time we organize a meeting with all departments."
          }
        },
        {
          "role": "user",
          "text": "Agreed. We’ve had too many miscommunications lately.",
          "translations": {
            "ko": "동의합니다. 최근에 너무 많은 오해가 있었어요.",
            "zh": "同意。我们最近的误会太多了。",
            "ja": "同意します。最近、誤解が多すぎます。",
            "vi": "Đồng ý. Gần đây chúng ta đã có quá nhiều sự hiểu lầm.",
            "en": "Agreed. We’ve had too many miscommunications lately."
          }
        },
        {
          "role": "ai",
          "text": "How about inviting marketing, design, and sales for Thursday?",
          "translations": {
            "ko": "목요일에 마케팅, 디자인, 판매 팀을 초대하는 건 어떨까요?",
            "zh": "那我们周四邀请市场部、设计部和销售部怎么样？",
            "ja": "木曜日にマーケティング、デザイン、営業を招待するのはどうでしょうか？",
            "vi": "Thế còn mời bộ phận tiếp thị, thiết kế và bán hàng vào thứ Năm?",
            "en": "How about inviting marketing, design, and sales for Thursday?"
          }
        },
        {
          "role": "user",
          "text": "Thursday works. Should we include logistics too?",
          "translations": {
            "ko": "목요일 괜찮아요. 물류팀도 포함시켜야 할까요?",
            "zh": "周四可以。我们应该也包括物流部吗？",
            "ja": "木曜日は大丈夫です。物流も含めましょうか？",
            "vi": "Thứ Năm được. Chúng ta có nên bao gồm cả bộ phận hậu cần không?",
            "en": "Thursday works. Should we include logistics too?"
          }
        },
        {
          "role": "ai",
          "text": "Good idea. Let’s not leave anyone out.",
          "translations": {
            "ko": "좋은 생각이에요. 아무도 빠뜨리지 않는 게 좋겠어요.",
            "zh": "好主意。我们不要遗漏任何人。",
            "ja": "良いアイデアです。誰も除外しないようにしましょう。",
            "vi": "Ý tưởng hay. Chúng ta không nên bỏ sót ai.",
            "en": "Good idea. Let’s not leave anyone out."
          }
        },
        {
          "role": "user",
          "text": "I’ll book the large conference room.",
          "translations": {
            "ko": "큰 회의실을 예약할게요.",
            "zh": "我会预定大会议室。",
            "ja": "大会議室を予約します。",
            "vi": "Tôi sẽ đặt phòng họp lớn.",
            "en": "I’ll book the large conference room."
          }
        },
        {
          "role": "ai",
          "text": "Perfect. I’ll draft the agenda by tomorrow.",
          "translations": {
            "ko": "완벽해요. 내일까지 의제를 작성하겠습니다.",
            "zh": "完美。我明天会草拟议程。",
            "ja": "完璧です。明日までに議題を作成します。",
            "vi": "Hoàn hảo. Tôi sẽ soạn thảo chương trình họp vào ngày mai.",
            "en": "Perfect. I’ll draft the agenda by tomorrow."
          }
        },
        {
          "role": "user",
          "text": "Include a section on cross-team workflow improvements.",
          "translations": {
            "ko": "팀 간 업무 흐름 개선에 대한 부분도 포함시켜주세요.",
            "zh": "在议程中加入一个关于跨团队工作流程改进的部分。",
            "ja": "チーム間のワークフロー改善についてのセクションを含めてください。",
            "vi": "Bao gồm một phần về cải tiến quy trình làm việc giữa các nhóm.",
            "en": "Include a section on cross-team workflow improvements."
          }
        },
        {
          "role": "ai",
          "text": "Will do. Should I moderate the session?",
          "translations": {
            "ko": "알겠습니다. 제가 회의를 주재해야 할까요?",
            "zh": "好的。我应该主持这个会议吗？",
            "ja": "了解しました。私がセッションを進行すべきですか？",
            "vi": "Tôi sẽ làm. Tôi có nên điều hành phiên họp không?",
            "en": "Will do. Should I moderate the session?"
          }
        },
        {
          "role": "user",
          "text": "Yes, you’re great at keeping discussions on track.",
          "translations": {
            "ko": "네, 토론을 잘 이끌어주시니까요.",
            "zh": "是的，你很擅长保持讨论的进行。",
            "ja": "はい、あなたは議論を進行させるのが得意です。",
            "vi": "Có, bạn giỏi việc giữ cho cuộc thảo luận đi đúng hướng.",
            "en": "Yes, you’re great at keeping discussions on track."
          }
        },
        {
          "role": "ai",
          "text": "Thanks. I’ll send out a calendar invite this afternoon.",
          "translations": {
            "ko": "감사합니다. 오후에 일정 초대장을 보내겠습니다.",
            "zh": "谢谢。我今天下午会发送日历邀请。",
            "ja": "ありがとう。今日の午後にカレンダーの招待を送ります。",
            "vi": "Cảm ơn. Tôi sẽ gửi lời mời qua lịch vào chiều nay.",
            "en": "Thanks. I’ll send out a calendar invite this afternoon."
          }
        },
        {
          "role": "user",
          "text": "I’ll follow up with anyone who hasn’t responded.",
          "translations": {
            "ko": "응답하지 않은 사람들에게는 따로 연락하겠습니다.",
            "zh": "我会跟进那些还没回应的人。",
            "ja": "返答がない人にはフォローアップします。",
            "vi": "Tôi sẽ theo dõi với những người chưa phản hồi.",
            "en": "I’ll follow up with anyone who hasn’t responded."
          }
        },
        {
          "role": "ai",
          "text": "Do we need to record the meeting for those who can’t attend?",
          "translations": {
            "ko": "참석하지 못하는 사람들을 위해 회의를 녹화해야 할까요?",
            "zh": "我们需要为不能参加的人录制会议吗？",
            "ja": "出席できない人のために会議を録音する必要がありますか？",
            "vi": "Chúng ta có cần ghi lại cuộc họp cho những người không thể tham dự không?",
            "en": "Do we need to record the meeting for those who can’t attend?"
          }
        },
        {
          "role": "user",
          "text": "Yes, that would be helpful.",
          "translations": {
            "ko": "네, 그게 도움이 될 것 같아요.",
            "zh": "是的，这会很有帮助。",
            "ja": "はい、それは役立つでしょう。",
            "vi": "Có, điều đó sẽ hữu ích.",
            "en": "Yes, that would be helpful."
          }
        },
        {
          "role": "ai",
          "text": "I’ll make sure the equipment is ready.",
          "translations": {
            "ko": "장비가 준비되어 있는지 확인하겠습니다.",
            "zh": "我会确保设备准备就绪。",
            "ja": "機器が準備できていることを確認します。",
            "vi": "Tôi sẽ đảm bảo thiết bị sẵn sàng.",
            "en": "I’ll make sure the equipment is ready."
          }
        },
        {
          "role": "user",
          "text": "Let’s also assign someone to take notes.",
          "translations": {
            "ko": "또한 누군가에게 메모를 쓰라고 부탁해야겠어요.",
            "zh": "我们也应该指派一个人来做记录。",
            "ja": "メモを取る人も指定しましょう。",
            "vi": "Chúng ta cũng nên giao cho ai đó nhiệm vụ ghi chú.",
            "en": "Let’s also assign someone to take notes."
          }
        },
        {
          "role": "ai",
          "text": "I’ll ask Sam. He’s good at that.",
          "translations": {
            "ko": "샘에게 부탁하겠습니다. 그가 잘하니까요.",
            "zh": "我会问Sam。他擅长这个。",
            "ja": "サムに頼みます。彼はそれが得意です。",
            "vi": "Tôi sẽ hỏi Sam. Anh ấy giỏi việc đó.",
            "en": "I’ll ask Sam. He’s good at that."
          }
        },
        {
          "role": "user",
          "text": "Alright, looks like we’re all set.",
          "translations": {
            "ko": "좋아요, 모든 준비가 끝난 것 같네요.",
            "zh": "好的，看起来我们都准备好了。",
            "ja": "さて、準備が整ったようです。",
            "vi": "Được rồi, hình như chúng ta đã sẵn sàng.",
            "en": "Alright, looks like we’re all set."
          }
        },
        {
          "role": "ai",
          "text": "Thanks for your help organizing this.",
          "translations": {
            "ko": "이 모든 것을 준비하는 데 도움을 줘서 고마워요.",
            "zh": "感谢你帮忙组织这个。",
            "ja": "この組織の手伝いをしてくれてありがとう。",
            "vi": "Cảm ơn sự giúp đỡ của bạn trong việc tổ chức điều này.",
            "en": "Thanks for your help organizing this."
          }
        },
        {
          "role": "user",
          "text": "Anytime!",
          "translations": {
            "ko": "언제든지!",
            "zh": "随时！",
            "ja": "いつでも！",
            "vi": "Bất cứ lúc nào!",
            "en": "Anytime!"
          }
        }
      ]
    },
    {
      "description": {
        "en": "Deciding on new tools for communication",
        "ko": "새로운 커뮤니케이션 도구 결정하기",
        "zh": "决定新的通信工具",
        "ja": "コミュニケーションの新しいツールを決定する",
        "vi": "Quyết định về công cụ giao tiếp mới"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "I think it’s time we organize a meeting with all departments.",
          "translations": {
            "ko": "모든 부서와 회의를 준비할 시간인 것 같아요.",
            "zh": "我认为我们该组织一个全部门的会议了。",
            "ja": "全部署との会議を開く時期だと思います。",
            "vi": "Tôi nghĩ đã đến lúc chúng ta tổ chức một cuộc họp với tất cả các bộ phận.",
            "en": "I think it’s time we organize a meeting with all departments."
          }
        },
        {
          "role": "user",
          "text": "Agreed. We’ve had too many miscommunications lately.",
          "translations": {
            "ko": "동의합니다. 최근에 너무 많은 오해가 있었어요.",
            "zh": "同意。我们最近的误会太多了。",
            "ja": "同意します。最近、誤解が多すぎます。",
            "vi": "Đồng ý. Gần đây chúng ta đã có quá nhiều sự hiểu lầm.",
            "en": "Agreed. We’ve had too many miscommunications lately."
          }
        },
        {
          "role": "ai",
          "text": "How about inviting marketing, design, and sales for Thursday?",
          "translations": {
            "ko": "목요일에 마케팅, 디자인, 판매 팀을 초대하는 건 어떨까요?",
            "zh": "那我们周四邀请市场部、设计部和销售部怎么样？",
            "ja": "木曜日にマーケティング、デザイン、営業を招待するのはどうでしょうか？",
            "vi": "Thế còn mời bộ phận tiếp thị, thiết kế và bán hàng vào thứ Năm?",
            "en": "How about inviting marketing, design, and sales for Thursday?"
          }
        },
        {
          "role": "user",
          "text": "Thursday works. Should we include logistics too?",
          "translations": {
            "ko": "목요일 괜찮아요. 물류팀도 포함시켜야 할까요?",
            "zh": "周四可以。我们应该也包括物流部吗？",
            "ja": "木曜日は大丈夫です。物流も含めましょうか？",
            "vi": "Thứ Năm được. Chúng ta có nên bao gồm cả bộ phận hậu cần không?",
            "en": "Thursday works. Should we include logistics too?"
          }
        },
        {
          "role": "ai",
          "text": "Good idea. Let’s not leave anyone out.",
          "translations": {
            "ko": "좋은 생각이에요. 아무도 빠뜨리지 않는 게 좋겠어요.",
            "zh": "好主意。我们不要遗漏任何人。",
            "ja": "良いアイデアです。誰も除外しないようにしましょう。",
            "vi": "Ý tưởng hay. Chúng ta không nên bỏ sót ai.",
            "en": "Good idea. Let’s not leave anyone out."
          }
        },
        {
          "role": "user",
          "text": "I’ll book the large conference room.",
          "translations": {
            "ko": "큰 회의실을 예약할게요.",
            "zh": "我会预定大会议室。",
            "ja": "大会議室を予約します。",
            "vi": "Tôi sẽ đặt phòng họp lớn.",
            "en": "I’ll book the large conference room."
          }
        },
        {
          "role": "ai",
          "text": "Perfect. I’ll draft the agenda by tomorrow.",
          "translations": {
            "ko": "완벽해요. 내일까지 의제를 작성하겠습니다.",
            "zh": "完美。我明天会草拟议程。",
            "ja": "完璧です。明日までに議題を作成します。",
            "vi": "Hoàn hảo. Tôi sẽ soạn thảo chương trình họp vào ngày mai.",
            "en": "Perfect. I’ll draft the agenda by tomorrow."
          }
        },
        {
          "role": "user",
          "text": "Include a section on cross-team workflow improvements.",
          "translations": {
            "ko": "팀 간 업무 흐름 개선에 대한 부분도 포함시켜주세요.",
            "zh": "在议程中加入一个关于跨团队工作流程改进的部分。",
            "ja": "チーム間のワークフロー改善についてのセクションを含めてください。",
            "vi": "Bao gồm một phần về cải tiến quy trình làm việc giữa các nhóm.",
            "en": "Include a section on cross-team workflow improvements."
          }
        },
        {
          "role": "ai",
          "text": "Will do. Should I moderate the session?",
          "translations": {
            "ko": "알겠습니다. 제가 회의를 주재해야 할까요?",
            "zh": "好的。我应该主持这个会议吗？",
            "ja": "了解しました。私がセッションを進行すべきですか？",
            "vi": "Tôi sẽ làm. Tôi có nên điều hành phiên họp không?",
            "en": "Will do. Should I moderate the session?"
          }
        },
        {
          "role": "user",
          "text": "Yes, you’re great at keeping discussions on track.",
          "translations": {
            "ko": "네, 토론을 잘 이끌어주시니까요.",
            "zh": "是的，你很擅长保持讨论的进行。",
            "ja": "はい、あなたは議論を進行させるのが得意です。",
            "vi": "Có, bạn giỏi việc giữ cho cuộc thảo luận đi đúng hướng.",
            "en": "Yes, you’re great at keeping discussions on track."
          }
        },
        {
          "role": "ai",
          "text": "Thanks. I’ll send out a calendar invite this afternoon.",
          "translations": {
            "ko": "감사합니다. 오후에 일정 초대장을 보내겠습니다.",
            "zh": "谢谢。我今天下午会发送日历邀请。",
            "ja": "ありがとう。今日の午後にカレンダーの招待を送ります。",
            "vi": "Cảm ơn. Tôi sẽ gửi lời mời qua lịch vào chiều nay.",
            "en": "Thanks. I’ll send out a calendar invite this afternoon."
          }
        },
        {
          "role": "user",
          "text": "I’ll follow up with anyone who hasn’t responded.",
          "translations": {
            "ko": "응답하지 않은 사람들에게는 따로 연락하겠습니다.",
            "zh": "我会跟进那些还没回应的人。",
            "ja": "返答がない人にはフォローアップします。",
            "vi": "Tôi sẽ theo dõi với những người chưa phản hồi.",
            "en": "I’ll follow up with anyone who hasn’t responded."
          }
        },
        {
          "role": "ai",
          "text": "Do we need to record the meeting for those who can’t attend?",
          "translations": {
            "ko": "참석하지 못하는 사람들을 위해 회의를 녹화해야 할까요?",
            "zh": "我们需要为不能参加的人录制会议吗？",
            "ja": "出席できない人のために会議を録音する必要がありますか？",
            "vi": "Chúng ta có cần ghi lại cuộc họp cho những người không thể tham dự không?",
            "en": "Do we need to record the meeting for those who can’t attend?"
          }
        },
        {
          "role": "user",
          "text": "Yes, that would be helpful.",
          "translations": {
            "ko": "네, 그게 도움이 될 것 같아요.",
            "zh": "是的，这会很有帮助。",
            "ja": "はい、それは役立つでしょう。",
            "vi": "Có, điều đó sẽ hữu ích.",
            "en": "Yes, that would be helpful."
          }
        },
        {
          "role": "ai",
          "text": "I’ll make sure the equipment is ready.",
          "translations": {
            "ko": "장비가 준비되어 있는지 확인하겠습니다.",
            "zh": "我会确保设备准备就绪。",
            "ja": "機器が準備できていることを確認します。",
            "vi": "Tôi sẽ đảm bảo thiết bị sẵn sàng.",
            "en": "I’ll make sure the equipment is ready."
          }
        },
        {
          "role": "user",
          "text": "Let’s also assign someone to take notes.",
          "translations": {
            "ko": "또한 누군가에게 메모를 쓰라고 부탁해야겠어요.",
            "zh": "我们也应该指派一个人来做记录。",
            "ja": "メモを取る人も指定しましょう。",
            "vi": "Chúng ta cũng nên giao cho ai đó nhiệm vụ ghi chú.",
            "en": "Let’s also assign someone to take notes."
          }
        },
        {
          "role": "ai",
          "text": "I’ll ask Sam. He’s good at that.",
          "translations": {
            "ko": "샘에게 부탁하겠습니다. 그가 잘하니까요.",
            "zh": "我会问Sam。他擅长这个。",
            "ja": "サムに頼みます。彼はそれが得意です。",
            "vi": "Tôi sẽ hỏi Sam. Anh ấy giỏi việc đó.",
            "en": "I’ll ask Sam. He’s good at that."
          }
        },
        {
          "role": "user",
          "text": "Alright, looks like we’re all set.",
          "translations": {
            "ko": "좋아요, 모든 준비가 끝난 것 같네요.",
            "zh": "好的，看起来我们都准备好了。",
            "ja": "さて、準備が整ったようです。",
            "vi": "Được rồi, hình như chúng ta đã sẵn sàng.",
            "en": "Alright, looks like we’re all set."
          }
        },
        {
          "role": "ai",
          "text": "Thanks for your help organizing this.",
          "translations": {
            "ko": "이 모든 것을 준비하는 데 도움을 줘서 고마워요.",
            "zh": "感谢你帮忙组织这个。",
            "ja": "この組織の手伝いをしてくれてありがとう。",
            "vi": "Cảm ơn sự giúp đỡ của bạn trong việc tổ chức điều này.",
            "en": "Thanks for your help organizing this."
          }
        },
        {
          "role": "user",
          "text": "Anytime!",
          "translations": {
            "ko": "언제든지!",
            "zh": "随时！",
            "ja": "いつでも！",
            "vi": "Bất cứ lúc nào!",
            "en": "Anytime!"
          }
        }
      ]
    },
    {
      "description": {
        "en": "Clarifying responsibilities",
        "ko": "책임 분명히하기",
        "zh": "澄清责任",
        "ja": "責任の明確化",
        "vi": "Làm rõ trách nhiệm"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "I think it’s time we organize a meeting with all departments.",
          "translations": {
            "ko": "모든 부서와 회의를 준비할 시간인 것 같아요.",
            "zh": "我认为我们该组织一个全部门的会议了。",
            "ja": "全部署との会議を開く時期だと思います。",
            "vi": "Tôi nghĩ đã đến lúc chúng ta tổ chức một cuộc họp với tất cả các bộ phận.",
            "en": "I think it’s time we organize a meeting with all departments."
          }
        },
        {
          "role": "user",
          "text": "Agreed. We’ve had too many miscommunications lately.",
          "translations": {
            "ko": "동의합니다. 최근에 너무 많은 오해가 있었어요.",
            "zh": "同意。我们最近的误会太多了。",
            "ja": "同意します。最近、誤解が多すぎます。",
            "vi": "Đồng ý. Gần đây chúng ta đã có quá nhiều sự hiểu lầm.",
            "en": "Agreed. We’ve had too many miscommunications lately."
          }
        },
        {
          "role": "ai",
          "text": "How about inviting marketing, design, and sales for Thursday?",
          "translations": {
            "ko": "목요일에 마케팅, 디자인, 판매 팀을 초대하는 건 어떨까요?",
            "zh": "那我们周四邀请市场部、设计部和销售部怎么样？",
            "ja": "木曜日にマーケティング、デザイン、営業を招待するのはどうでしょうか？",
            "vi": "Thế còn mời bộ phận tiếp thị, thiết kế và bán hàng vào thứ Năm?",
            "en": "How about inviting marketing, design, and sales for Thursday?"
          }
        },
        {
          "role": "user",
          "text": "Thursday works. Should we include logistics too?",
          "translations": {
            "ko": "목요일 괜찮아요. 물류팀도 포함시켜야 할까요?",
            "zh": "周四可以。我们应该也包括物流部吗？",
            "ja": "木曜日は大丈夫です。物流も含めましょうか？",
            "vi": "Thứ Năm được. Chúng ta có nên bao gồm cả bộ phận hậu cần không?",
            "en": "Thursday works. Should we include logistics too?"
          }
        },
        {
          "role": "ai",
          "text": "Good idea. Let’s not leave anyone out.",
          "translations": {
            "ko": "좋은 생각이에요. 아무도 빠뜨리지 않는 게 좋겠어요.",
            "zh": "好主意。我们不要遗漏任何人。",
            "ja": "良いアイデアです。誰も除外しないようにしましょう。",
            "vi": "Ý tưởng hay. Chúng ta không nên bỏ sót ai.",
            "en": "Good idea. Let’s not leave anyone out."
          }
        },
        {
          "role": "user",
          "text": "I’ll book the large conference room.",
          "translations": {
            "ko": "큰 회의실을 예약할게요.",
            "zh": "我会预定大会议室。",
            "ja": "大会議室を予約します。",
            "vi": "Tôi sẽ đặt phòng họp lớn.",
            "en": "I’ll book the large conference room."
          }
        },
        {
          "role": "ai",
          "text": "Perfect. I’ll draft the agenda by tomorrow.",
          "translations": {
            "ko": "완벽해요. 내일까지 의제를 작성하겠습니다.",
            "zh": "完美。我明天会草拟议程。",
            "ja": "完璧です。明日までに議題を作成します。",
            "vi": "Hoàn hảo. Tôi sẽ soạn thảo chương trình họp vào ngày mai.",
            "en": "Perfect. I’ll draft the agenda by tomorrow."
          }
        },
        {
          "role": "user",
          "text": "Include a section on cross-team workflow improvements.",
          "translations": {
            "ko": "팀 간 업무 흐름 개선에 대한 부분도 포함시켜주세요.",
            "zh": "在议程中加入一个关于跨团队工作流程改进的部分。",
            "ja": "チーム間のワークフロー改善についてのセクションを含めてください。",
            "vi": "Bao gồm một phần về cải tiến quy trình làm việc giữa các nhóm.",
            "en": "Include a section on cross-team workflow improvements."
          }
        },
        {
          "role": "ai",
          "text": "Will do. Should I moderate the session?",
          "translations": {
            "ko": "알겠습니다. 제가 회의를 주재해야 할까요?",
            "zh": "好的。我应该主持这个会议吗？",
            "ja": "了解しました。私がセッションを進行すべきですか？",
            "vi": "Tôi sẽ làm. Tôi có nên điều hành phiên họp không?",
            "en": "Will do. Should I moderate the session?"
          }
        },
        {
          "role": "user",
          "text": "Yes, you’re great at keeping discussions on track.",
          "translations": {
            "ko": "네, 토론을 잘 이끌어주시니까요.",
            "zh": "是的，你很擅长保持讨论的进行。",
            "ja": "はい、あなたは議論を進行させるのが得意です。",
            "vi": "Có, bạn giỏi việc giữ cho cuộc thảo luận đi đúng hướng.",
            "en": "Yes, you’re great at keeping discussions on track."
          }
        },
        {
          "role": "ai",
          "text": "Thanks. I’ll send out a calendar invite this afternoon.",
          "translations": {
            "ko": "감사합니다. 오후에 일정 초대장을 보내겠습니다.",
            "zh": "谢谢。我今天下午会发送日历邀请。",
            "ja": "ありがとう。今日の午後にカレンダーの招待を送ります。",
            "vi": "Cảm ơn. Tôi sẽ gửi lời mời qua lịch vào chiều nay.",
            "en": "Thanks. I’ll send out a calendar invite this afternoon."
          }
        },
        {
          "role": "user",
          "text": "I’ll follow up with anyone who hasn’t responded.",
          "translations": {
            "ko": "응답하지 않은 사람들에게는 따로 연락하겠습니다.",
            "zh": "我会跟进那些还没回应的人。",
            "ja": "返答がない人にはフォローアップします。",
            "vi": "Tôi sẽ theo dõi với những người chưa phản hồi.",
            "en": "I’ll follow up with anyone who hasn’t responded."
          }
        },
        {
          "role": "ai",
          "text": "Do we need to record the meeting for those who can’t attend?",
          "translations": {
            "ko": "참석하지 못하는 사람들을 위해 회의를 녹화해야 할까요?",
            "zh": "我们需要为不能参加的人录制会议吗？",
            "ja": "出席できない人のために会議を録音する必要がありますか？",
            "vi": "Chúng ta có cần ghi lại cuộc họp cho những người không thể tham dự không?",
            "en": "Do we need to record the meeting for those who can’t attend?"
          }
        },
        {
          "role": "user",
          "text": "Yes, that would be helpful.",
          "translations": {
            "ko": "네, 그게 도움이 될 것 같아요.",
            "zh": "是的，这会很有帮助。",
            "ja": "はい、それは役立つでしょう。",
            "vi": "Có, điều đó sẽ hữu ích.",
            "en": "Yes, that would be helpful."
          }
        },
        {
          "role": "ai",
          "text": "I’ll make sure the equipment is ready.",
          "translations": {
            "ko": "장비가 준비되어 있는지 확인하겠습니다.",
            "zh": "我会确保设备准备就绪。",
            "ja": "機器が準備できていることを確認します。",
            "vi": "Tôi sẽ đảm bảo thiết bị sẵn sàng.",
            "en": "I’ll make sure the equipment is ready."
          }
        },
        {
          "role": "user",
          "text": "Let’s also assign someone to take notes.",
          "translations": {
            "ko": "또한 누군가에게 메모를 쓰라고 부탁해야겠어요.",
            "zh": "我们也应该指派一个人来做记录。",
            "ja": "メモを取る人も指定しましょう。",
            "vi": "Chúng ta cũng nên giao cho ai đó nhiệm vụ ghi chú.",
            "en": "Let’s also assign someone to take notes."
          }
        },
        {
          "role": "ai",
          "text": "I’ll ask Sam. He’s good at that.",
          "translations": {
            "ko": "샘에게 부탁하겠습니다. 그가 잘하니까요.",
            "zh": "我会问Sam。他擅长这个。",
            "ja": "サムに頼みます。彼はそれが得意です。",
            "vi": "Tôi sẽ hỏi Sam. Anh ấy giỏi việc đó.",
            "en": "I’ll ask Sam. He’s good at that."
          }
        },
        {
          "role": "user",
          "text": "Alright, looks like we’re all set.",
          "translations": {
            "ko": "좋아요, 모든 준비가 끝난 것 같네요.",
            "zh": "好的，看起来我们都准备好了。",
            "ja": "さて、準備が整ったようです。",
            "vi": "Được rồi, hình như chúng ta đã sẵn sàng.",
            "en": "Alright, looks like we’re all set."
          }
        },
        {
          "role": "ai",
          "text": "Thanks for your help organizing this.",
          "translations": {
            "ko": "이 모든 것을 준비하는 데 도움을 줘서 고마워요.",
            "zh": "感谢你帮忙组织这个。",
            "ja": "この組織の手伝いをしてくれてありがとう。",
            "vi": "Cảm ơn sự giúp đỡ của bạn trong việc tổ chức điều này.",
            "en": "Thanks for your help organizing this."
          }
        },
        {
          "role": "user",
          "text": "Anytime!",
          "translations": {
            "ko": "언제든지!",
            "zh": "随时！",
            "ja": "いつでも！",
            "vi": "Bất cứ lúc nào!",
            "en": "Anytime!"
          }
        }
      ]
    },
    {
      "description": {
        "en": "Recapping long-term goals",
        "ko": "장기 목표 다시 한번 살펴보기",
        "zh": "回顾长期目标",
        "ja": "長期目標の再確認",
        "vi": "Tóm tắt mục tiêu dài hạn"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "I think it’s time we organize a meeting with all departments.",
          "translations": {
            "ko": "모든 부서와 회의를 준비할 시간인 것 같아요.",
            "zh": "我认为我们该组织一个全部门的会议了。",
            "ja": "全部署との会議を開く時期だと思います。",
            "vi": "Tôi nghĩ đã đến lúc chúng ta tổ chức một cuộc họp với tất cả các bộ phận.",
            "en": "I think it’s time we organize a meeting with all departments."
          }
        },
        {
          "role": "user",
          "text": "Agreed. We’ve had too many miscommunications lately.",
          "translations": {
            "ko": "동의합니다. 최근에 너무 많은 오해가 있었어요.",
            "zh": "同意。我们最近的误会太多了。",
            "ja": "同意します。最近、誤解が多すぎます。",
            "vi": "Đồng ý. Gần đây chúng ta đã có quá nhiều sự hiểu lầm.",
            "en": "Agreed. We’ve had too many miscommunications lately."
          }
        },
        {
          "role": "ai",
          "text": "How about inviting marketing, design, and sales for Thursday?",
          "translations": {
            "ko": "목요일에 마케팅, 디자인, 판매 팀을 초대하는 건 어떨까요?",
            "zh": "那我们周四邀请市场部、设计部和销售部怎么样？",
            "ja": "木曜日にマーケティング、デザイン、営業を招待するのはどうでしょうか？",
            "vi": "Thế còn mời bộ phận tiếp thị, thiết kế và bán hàng vào thứ Năm?",
            "en": "How about inviting marketing, design, and sales for Thursday?"
          }
        },
        {
          "role": "user",
          "text": "Thursday works. Should we include logistics too?",
          "translations": {
            "ko": "목요일 괜찮아요. 물류팀도 포함시켜야 할까요?",
            "zh": "周四可以。我们应该也包括物流部吗？",
            "ja": "木曜日は大丈夫です。物流も含めましょうか？",
            "vi": "Thứ Năm được. Chúng ta có nên bao gồm cả bộ phận hậu cần không?",
            "en": "Thursday works. Should we include logistics too?"
          }
        },
        {
          "role": "ai",
          "text": "Good idea. Let’s not leave anyone out.",
          "translations": {
            "ko": "좋은 생각이에요. 아무도 빠뜨리지 않는 게 좋겠어요.",
            "zh": "好主意。我们不要遗漏任何人。",
            "ja": "良いアイデアです。誰も除外しないようにしましょう。",
            "vi": "Ý tưởng hay. Chúng ta không nên bỏ sót ai.",
            "en": "Good idea. Let’s not leave anyone out."
          }
        },
        {
          "role": "user",
          "text": "I’ll book the large conference room.",
          "translations": {
            "ko": "큰 회의실을 예약할게요.",
            "zh": "我会预定大会议室。",
            "ja": "大会議室を予約します。",
            "vi": "Tôi sẽ đặt phòng họp lớn.",
            "en": "I’ll book the large conference room."
          }
        },
        {
          "role": "ai",
          "text": "Perfect. I’ll draft the agenda by tomorrow.",
          "translations": {
            "ko": "완벽해요. 내일까지 의제를 작성하겠습니다.",
            "zh": "完美。我明天会草拟议程。",
            "ja": "完璧です。明日までに議題を作成します。",
            "vi": "Hoàn hảo. Tôi sẽ soạn thảo chương trình họp vào ngày mai.",
            "en": "Perfect. I’ll draft the agenda by tomorrow."
          }
        },
        {
          "role": "user",
          "text": "Include a section on cross-team workflow improvements.",
          "translations": {
            "ko": "팀 간 업무 흐름 개선에 대한 부분도 포함시켜주세요.",
            "zh": "在议程中加入一个关于跨团队工作流程改进的部分。",
            "ja": "チーム間のワークフロー改善についてのセクションを含めてください。",
            "vi": "Bao gồm một phần về cải tiến quy trình làm việc giữa các nhóm.",
            "en": "Include a section on cross-team workflow improvements."
          }
        },
        {
          "role": "ai",
          "text": "Will do. Should I moderate the session?",
          "translations": {
            "ko": "알겠습니다. 제가 회의를 주재해야 할까요?",
            "zh": "好的。我应该主持这个会议吗？",
            "ja": "了解しました。私がセッションを進行すべきですか？",
            "vi": "Tôi sẽ làm. Tôi có nên điều hành phiên họp không?",
            "en": "Will do. Should I moderate the session?"
          }
        },
        {
          "role": "user",
          "text": "Yes, you’re great at keeping discussions on track.",
          "translations": {
            "ko": "네, 토론을 잘 이끌어주시니까요.",
            "zh": "是的，你很擅长保持讨论的进行。",
            "ja": "はい、あなたは議論を進行させるのが得意です。",
            "vi": "Có, bạn giỏi việc giữ cho cuộc thảo luận đi đúng hướng.",
            "en": "Yes, you’re great at keeping discussions on track."
          }
        },
        {
          "role": "ai",
          "text": "Thanks. I’ll send out a calendar invite this afternoon.",
          "translations": {
            "ko": "감사합니다. 오후에 일정 초대장을 보내겠습니다.",
            "zh": "谢谢。我今天下午会发送日历邀请。",
            "ja": "ありがとう。今日の午後にカレンダーの招待を送ります。",
            "vi": "Cảm ơn. Tôi sẽ gửi lời mời qua lịch vào chiều nay.",
            "en": "Thanks. I’ll send out a calendar invite this afternoon."
          }
        },
        {
          "role": "user",
          "text": "I’ll follow up with anyone who hasn’t responded.",
          "translations": {
            "ko": "응답하지 않은 사람들에게는 따로 연락하겠습니다.",
            "zh": "我会跟进那些还没回应的人。",
            "ja": "返答がない人にはフォローアップします。",
            "vi": "Tôi sẽ theo dõi với những người chưa phản hồi.",
            "en": "I’ll follow up with anyone who hasn’t responded."
          }
        },
        {
          "role": "ai",
          "text": "Do we need to record the meeting for those who can’t attend?",
          "translations": {
            "ko": "참석하지 못하는 사람들을 위해 회의를 녹화해야 할까요?",
            "zh": "我们需要为不能参加的人录制会议吗？",
            "ja": "出席できない人のために会議を録音する必要がありますか？",
            "vi": "Chúng ta có cần ghi lại cuộc họp cho những người không thể tham dự không?",
            "en": "Do we need to record the meeting for those who can’t attend?"
          }
        },
        {
          "role": "user",
          "text": "Yes, that would be helpful.",
          "translations": {
            "ko": "네, 그게 도움이 될 것 같아요.",
            "zh": "是的，这会很有帮助。",
            "ja": "はい、それは役立つでしょう。",
            "vi": "Có, điều đó sẽ hữu ích.",
            "en": "Yes, that would be helpful."
          }
        },
        {
          "role": "ai",
          "text": "I’ll make sure the equipment is ready.",
          "translations": {
            "ko": "장비가 준비되어 있는지 확인하겠습니다.",
            "zh": "我会确保设备准备就绪。",
            "ja": "機器が準備できていることを確認します。",
            "vi": "Tôi sẽ đảm bảo thiết bị sẵn sàng.",
            "en": "I’ll make sure the equipment is ready."
          }
        },
        {
          "role": "user",
          "text": "Let’s also assign someone to take notes.",
          "translations": {
            "ko": "또한 누군가에게 메모를 쓰라고 부탁해야겠어요.",
            "zh": "我们也应该指派一个人来做记录。",
            "ja": "メモを取る人も指定しましょう。",
            "vi": "Chúng ta cũng nên giao cho ai đó nhiệm vụ ghi chú.",
            "en": "Let’s also assign someone to take notes."
          }
        },
        {
          "role": "ai",
          "text": "I’ll ask Sam. He’s good at that.",
          "translations": {
            "ko": "샘에게 부탁하겠습니다. 그가 잘하니까요.",
            "zh": "我会问Sam。他擅长这个。",
            "ja": "サムに頼みます。彼はそれが得意です。",
            "vi": "Tôi sẽ hỏi Sam. Anh ấy giỏi việc đó.",
            "en": "I’ll ask Sam. He’s good at that."
          }
        },
        {
          "role": "user",
          "text": "Alright, looks like we’re all set.",
          "translations": {
            "ko": "좋아요, 모든 준비가 끝난 것 같네요.",
            "zh": "好的，看起来我们都准备好了。",
            "ja": "さて、準備が整ったようです。",
            "vi": "Được rồi, hình như chúng ta đã sẵn sàng.",
            "en": "Alright, looks like we’re all set."
          }
        },
        {
          "role": "ai",
          "text": "Thanks for your help organizing this.",
          "translations": {
            "ko": "이 모든 것을 준비하는 데 도움을 줘서 고마워요.",
            "zh": "感谢你帮忙组织这个。",
            "ja": "この組織の手伝いをしてくれてありがとう。",
            "vi": "Cảm ơn sự giúp đỡ của bạn trong việc tổ chức điều này.",
            "en": "Thanks for your help organizing this."
          }
        },
        {
          "role": "user",
          "text": "Anytime!",
          "translations": {
            "ko": "언제든지!",
            "zh": "随时！",
            "ja": "いつでも！",
            "vi": "Bất cứ lúc nào!",
            "en": "Anytime!"
          }
        }
      ]
    },
    {
      "description": {
        "en": "Discussing offsite meeting logistics",
        "ko": "외부 회의 로지스틱스 논의하기",
        "zh": "讨论离线会议的物流问题",
        "ja": "オフサイト会議のロジスティクスを議論する",
        "vi": "Thảo luận về logistics cho cuộc họp ngoại vi"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "I think it’s time we organize a meeting with all departments.",
          "translations": {
            "ko": "모든 부서와 회의를 준비할 시간인 것 같아요.",
            "zh": "我认为我们该组织一个全部门的会议了。",
            "ja": "全部署との会議を開く時期だと思います。",
            "vi": "Tôi nghĩ đã đến lúc chúng ta tổ chức một cuộc họp với tất cả các bộ phận.",
            "en": "I think it’s time we organize a meeting with all departments."
          }
        },
        {
          "role": "user",
          "text": "Agreed. We’ve had too many miscommunications lately.",
          "translations": {
            "ko": "동의합니다. 최근에 너무 많은 오해가 있었어요.",
            "zh": "同意。我们最近的误会太多了。",
            "ja": "同意します。最近、誤解が多すぎます。",
            "vi": "Đồng ý. Gần đây chúng ta đã có quá nhiều sự hiểu lầm.",
            "en": "Agreed. We’ve had too many miscommunications lately."
          }
        },
        {
          "role": "ai",
          "text": "How about inviting marketing, design, and sales for Thursday?",
          "translations": {
            "ko": "목요일에 마케팅, 디자인, 판매 팀을 초대하는 건 어떨까요?",
            "zh": "那我们周四邀请市场部、设计部和销售部怎么样？",
            "ja": "木曜日にマーケティング、デザイン、営業を招待するのはどうでしょうか？",
            "vi": "Thế còn mời bộ phận tiếp thị, thiết kế và bán hàng vào thứ Năm?",
            "en": "How about inviting marketing, design, and sales for Thursday?"
          }
        },
        {
          "role": "user",
          "text": "Thursday works. Should we include logistics too?",
          "translations": {
            "ko": "목요일 괜찮아요. 물류팀도 포함시켜야 할까요?",
            "zh": "周四可以。我们应该也包括物流部吗？",
            "ja": "木曜日は大丈夫です。物流も含めましょうか？",
            "vi": "Thứ Năm được. Chúng ta có nên bao gồm cả bộ phận hậu cần không?",
            "en": "Thursday works. Should we include logistics too?"
          }
        },
        {
          "role": "ai",
          "text": "Good idea. Let’s not leave anyone out.",
          "translations": {
            "ko": "좋은 생각이에요. 아무도 빠뜨리지 않는 게 좋겠어요.",
            "zh": "好主意。我们不要遗漏任何人。",
            "ja": "良いアイデアです。誰も除外しないようにしましょう。",
            "vi": "Ý tưởng hay. Chúng ta không nên bỏ sót ai.",
            "en": "Good idea. Let’s not leave anyone out."
          }
        },
        {
          "role": "user",
          "text": "I’ll book the large conference room.",
          "translations": {
            "ko": "큰 회의실을 예약할게요.",
            "zh": "我会预定大会议室。",
            "ja": "大会議室を予約します。",
            "vi": "Tôi sẽ đặt phòng họp lớn.",
            "en": "I’ll book the large conference room."
          }
        },
        {
          "role": "ai",
          "text": "Perfect. I’ll draft the agenda by tomorrow.",
          "translations": {
            "ko": "완벽해요. 내일까지 의제를 작성하겠습니다.",
            "zh": "完美。我明天会草拟议程。",
            "ja": "完璧です。明日までに議題を作成します。",
            "vi": "Hoàn hảo. Tôi sẽ soạn thảo chương trình họp vào ngày mai.",
            "en": "Perfect. I’ll draft the agenda by tomorrow."
          }
        },
        {
          "role": "user",
          "text": "Include a section on cross-team workflow improvements.",
          "translations": {
            "ko": "팀 간 업무 흐름 개선에 대한 부분도 포함시켜주세요.",
            "zh": "在议程中加入一个关于跨团队工作流程改进的部分。",
            "ja": "チーム間のワークフロー改善についてのセクションを含めてください。",
            "vi": "Bao gồm một phần về cải tiến quy trình làm việc giữa các nhóm.",
            "en": "Include a section on cross-team workflow improvements."
          }
        },
        {
          "role": "ai",
          "text": "Will do. Should I moderate the session?",
          "translations": {
            "ko": "알겠습니다. 제가 회의를 주재해야 할까요?",
            "zh": "好的。我应该主持这个会议吗？",
            "ja": "了解しました。私がセッションを進行すべきですか？",
            "vi": "Tôi sẽ làm. Tôi có nên điều hành phiên họp không?",
            "en": "Will do. Should I moderate the session?"
          }
        },
        {
          "role": "user",
          "text": "Yes, you’re great at keeping discussions on track.",
          "translations": {
            "ko": "네, 토론을 잘 이끌어주시니까요.",
            "zh": "是的，你很擅长保持讨论的进行。",
            "ja": "はい、あなたは議論を進行させるのが得意です。",
            "vi": "Có, bạn giỏi việc giữ cho cuộc thảo luận đi đúng hướng.",
            "en": "Yes, you’re great at keeping discussions on track."
          }
        },
        {
          "role": "ai",
          "text": "Thanks. I’ll send out a calendar invite this afternoon.",
          "translations": {
            "ko": "감사합니다. 오후에 일정 초대장을 보내겠습니다.",
            "zh": "谢谢。我今天下午会发送日历邀请。",
            "ja": "ありがとう。今日の午後にカレンダーの招待を送ります。",
            "vi": "Cảm ơn. Tôi sẽ gửi lời mời qua lịch vào chiều nay.",
            "en": "Thanks. I’ll send out a calendar invite this afternoon."
          }
        },
        {
          "role": "user",
          "text": "I’ll follow up with anyone who hasn’t responded.",
          "translations": {
            "ko": "응답하지 않은 사람들에게는 따로 연락하겠습니다.",
            "zh": "我会跟进那些还没回应的人。",
            "ja": "返答がない人にはフォローアップします。",
            "vi": "Tôi sẽ theo dõi với những người chưa phản hồi.",
            "en": "I’ll follow up with anyone who hasn’t responded."
          }
        },
        {
          "role": "ai",
          "text": "Do we need to record the meeting for those who can’t attend?",
          "translations": {
            "ko": "참석하지 못하는 사람들을 위해 회의를 녹화해야 할까요?",
            "zh": "我们需要为不能参加的人录制会议吗？",
            "ja": "出席できない人のために会議を録音する必要がありますか？",
            "vi": "Chúng ta có cần ghi lại cuộc họp cho những người không thể tham dự không?",
            "en": "Do we need to record the meeting for those who can’t attend?"
          }
        },
        {
          "role": "user",
          "text": "Yes, that would be helpful.",
          "translations": {
            "ko": "네, 그게 도움이 될 것 같아요.",
            "zh": "是的，这会很有帮助。",
            "ja": "はい、それは役立つでしょう。",
            "vi": "Có, điều đó sẽ hữu ích.",
            "en": "Yes, that would be helpful."
          }
        },
        {
          "role": "ai",
          "text": "I’ll make sure the equipment is ready.",
          "translations": {
            "ko": "장비가 준비되어 있는지 확인하겠습니다.",
            "zh": "我会确保设备准备就绪。",
            "ja": "機器が準備できていることを確認します。",
            "vi": "Tôi sẽ đảm bảo thiết bị sẵn sàng.",
            "en": "I’ll make sure the equipment is ready."
          }
        },
        {
          "role": "user",
          "text": "Let’s also assign someone to take notes.",
          "translations": {
            "ko": "또한 누군가에게 메모를 쓰라고 부탁해야겠어요.",
            "zh": "我们也应该指派一个人来做记录。",
            "ja": "メモを取る人も指定しましょう。",
            "vi": "Chúng ta cũng nên giao cho ai đó nhiệm vụ ghi chú.",
            "en": "Let’s also assign someone to take notes."
          }
        },
        {
          "role": "ai",
          "text": "I’ll ask Sam. He’s good at that.",
          "translations": {
            "ko": "샘에게 부탁하겠습니다. 그가 잘하니까요.",
            "zh": "我会问Sam。他擅长这个。",
            "ja": "サムに頼みます。彼はそれが得意です。",
            "vi": "Tôi sẽ hỏi Sam. Anh ấy giỏi việc đó.",
            "en": "I’ll ask Sam. He’s good at that."
          }
        },
        {
          "role": "user",
          "text": "Alright, looks like we’re all set.",
          "translations": {
            "ko": "좋아요, 모든 준비가 끝난 것 같네요.",
            "zh": "好的，看起来我们都准备好了。",
            "ja": "さて、準備が整ったようです。",
            "vi": "Được rồi, hình như chúng ta đã sẵn sàng.",
            "en": "Alright, looks like we’re all set."
          }
        },
        {
          "role": "ai",
          "text": "Thanks for your help organizing this.",
          "translations": {
            "ko": "이 모든 것을 준비하는 데 도움을 줘서 고마워요.",
            "zh": "感谢你帮忙组织这个。",
            "ja": "この組織の手伝いをしてくれてありがとう。",
            "vi": "Cảm ơn sự giúp đỡ của bạn trong việc tổ chức điều này.",
            "en": "Thanks for your help organizing this."
          }
        },
        {
          "role": "user",
          "text": "Anytime!",
          "translations": {
            "ko": "언제든지!",
            "zh": "随时！",
            "ja": "いつでも！",
            "vi": "Bất cứ lúc nào!",
            "en": "Anytime!"
          }
        }
      ]
    },
    {
      "description": {
        "en": "Handling overlapping schedules",
        "ko": "스케줄 중복 처리하기",
        "zh": "处理重叠的日程",
        "ja": "スケジュールの重複を処理する",
        "vi": "Xử lý lịch trình chồng chéo"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "I think it’s time we organize a meeting with all departments.",
          "translations": {
            "ko": "모든 부서와 회의를 준비할 시간인 것 같아요.",
            "zh": "我认为我们该组织一个全部门的会议了。",
            "ja": "全部署との会議を開く時期だと思います。",
            "vi": "Tôi nghĩ đã đến lúc chúng ta tổ chức một cuộc họp với tất cả các bộ phận.",
            "en": "I think it’s time we organize a meeting with all departments."
          }
        },
        {
          "role": "user",
          "text": "Agreed. We’ve had too many miscommunications lately.",
          "translations": {
            "ko": "동의합니다. 최근에 너무 많은 오해가 있었어요.",
            "zh": "同意。我们最近的误会太多了。",
            "ja": "同意します。最近、誤解が多すぎます。",
            "vi": "Đồng ý. Gần đây chúng ta đã có quá nhiều sự hiểu lầm.",
            "en": "Agreed. We’ve had too many miscommunications lately."
          }
        },
        {
          "role": "ai",
          "text": "How about inviting marketing, design, and sales for Thursday?",
          "translations": {
            "ko": "목요일에 마케팅, 디자인, 판매 팀을 초대하는 건 어떨까요?",
            "zh": "那我们周四邀请市场部、设计部和销售部怎么样？",
            "ja": "木曜日にマーケティング、デザイン、営業を招待するのはどうでしょうか？",
            "vi": "Thế còn mời bộ phận tiếp thị, thiết kế và bán hàng vào thứ Năm?",
            "en": "How about inviting marketing, design, and sales for Thursday?"
          }
        },
        {
          "role": "user",
          "text": "Thursday works. Should we include logistics too?",
          "translations": {
            "ko": "목요일 괜찮아요. 물류팀도 포함시켜야 할까요?",
            "zh": "周四可以。我们应该也包括物流部吗？",
            "ja": "木曜日は大丈夫です。物流も含めましょうか？",
            "vi": "Thứ Năm được. Chúng ta có nên bao gồm cả bộ phận hậu cần không?",
            "en": "Thursday works. Should we include logistics too?"
          }
        },
        {
          "role": "ai",
          "text": "Good idea. Let’s not leave anyone out.",
          "translations": {
            "ko": "좋은 생각이에요. 아무도 빠뜨리지 않는 게 좋겠어요.",
            "zh": "好主意。我们不要遗漏任何人。",
            "ja": "良いアイデアです。誰も除外しないようにしましょう。",
            "vi": "Ý tưởng hay. Chúng ta không nên bỏ sót ai.",
            "en": "Good idea. Let’s not leave anyone out."
          }
        },
        {
          "role": "user",
          "text": "I’ll book the large conference room.",
          "translations": {
            "ko": "큰 회의실을 예약할게요.",
            "zh": "我会预定大会议室。",
            "ja": "大会議室を予約します。",
            "vi": "Tôi sẽ đặt phòng họp lớn.",
            "en": "I’ll book the large conference room."
          }
        },
        {
          "role": "ai",
          "text": "Perfect. I’ll draft the agenda by tomorrow.",
          "translations": {
            "ko": "완벽해요. 내일까지 의제를 작성하겠습니다.",
            "zh": "完美。我明天会草拟议程。",
            "ja": "完璧です。明日までに議題を作成します。",
            "vi": "Hoàn hảo. Tôi sẽ soạn thảo chương trình họp vào ngày mai.",
            "en": "Perfect. I’ll draft the agenda by tomorrow."
          }
        },
        {
          "role": "user",
          "text": "Include a section on cross-team workflow improvements.",
          "translations": {
            "ko": "팀 간 업무 흐름 개선에 대한 부분도 포함시켜주세요.",
            "zh": "在议程中加入一个关于跨团队工作流程改进的部分。",
            "ja": "チーム間のワークフロー改善についてのセクションを含めてください。",
            "vi": "Bao gồm một phần về cải tiến quy trình làm việc giữa các nhóm.",
            "en": "Include a section on cross-team workflow improvements."
          }
        },
        {
          "role": "ai",
          "text": "Will do. Should I moderate the session?",
          "translations": {
            "ko": "알겠습니다. 제가 회의를 주재해야 할까요?",
            "zh": "好的。我应该主持这个会议吗？",
            "ja": "了解しました。私がセッションを進行すべきですか？",
            "vi": "Tôi sẽ làm. Tôi có nên điều hành phiên họp không?",
            "en": "Will do. Should I moderate the session?"
          }
        },
        {
          "role": "user",
          "text": "Yes, you’re great at keeping discussions on track.",
          "translations": {
            "ko": "네, 토론을 잘 이끌어주시니까요.",
            "zh": "是的，你很擅长保持讨论的进行。",
            "ja": "はい、あなたは議論を進行させるのが得意です。",
            "vi": "Có, bạn giỏi việc giữ cho cuộc thảo luận đi đúng hướng.",
            "en": "Yes, you’re great at keeping discussions on track."
          }
        },
        {
          "role": "ai",
          "text": "Thanks. I’ll send out a calendar invite this afternoon.",
          "translations": {
            "ko": "감사합니다. 오후에 일정 초대장을 보내겠습니다.",
            "zh": "谢谢。我今天下午会发送日历邀请。",
            "ja": "ありがとう。今日の午後にカレンダーの招待を送ります。",
            "vi": "Cảm ơn. Tôi sẽ gửi lời mời qua lịch vào chiều nay.",
            "en": "Thanks. I’ll send out a calendar invite this afternoon."
          }
        },
        {
          "role": "user",
          "text": "I’ll follow up with anyone who hasn’t responded.",
          "translations": {
            "ko": "응답하지 않은 사람들에게는 따로 연락하겠습니다.",
            "zh": "我会跟进那些还没回应的人。",
            "ja": "返答がない人にはフォローアップします。",
            "vi": "Tôi sẽ theo dõi với những người chưa phản hồi.",
            "en": "I’ll follow up with anyone who hasn’t responded."
          }
        },
        {
          "role": "ai",
          "text": "Do we need to record the meeting for those who can’t attend?",
          "translations": {
            "ko": "참석하지 못하는 사람들을 위해 회의를 녹화해야 할까요?",
            "zh": "我们需要为不能参加的人录制会议吗？",
            "ja": "出席できない人のために会議を録音する必要がありますか？",
            "vi": "Chúng ta có cần ghi lại cuộc họp cho những người không thể tham d",
            "en": "Do we need to record the meeting for those who can’t attend?"
          }
        },
        {
          "role": "user",
          "text": "Yes, that would be helpful.",
          "translations": {
            "ko": "네, 그게 도움이 될 것 같아요.",
            "zh": "是的，这会很有帮助。",
            "ja": "はい、それは役立つでしょう。",
            "vi": "",
            "en": "Yes, that would be helpful."
          }
        },
        {
          "role": "ai",
          "text": "I’ll make sure the equipment is ready.",
          "translations": {
            "ko": "장비가 준비되어 있는지 확인하겠습니다.",
            "zh": "我会确保设备准备就绪。",
            "ja": "機器が準備できていることを確認します。",
            "vi": "",
            "en": "I’ll make sure the equipment is ready."
          }
        },
        {
          "role": "user",
          "text": "Let’s also assign someone to take notes.",
          "translations": {
            "ko": "또한 누군가에게 메모를 쓰라고 부탁해야겠어요.",
            "zh": "我们也应该指派一个人来做记录。",
            "ja": "メモを取る人も指定しましょう。",
            "vi": "",
            "en": "Let’s also assign someone to take notes."
          }
        },
        {
          "role": "ai",
          "text": "I’ll ask Sam. He’s good at that.",
          "translations": {
            "ko": "샘에게 부탁하겠습니다. 그가 잘하니까요.",
            "zh": "我会问Sam。他擅长这个。",
            "ja": "サムに頼みます。彼はそれが得意です。",
            "vi": "",
            "en": "I’ll ask Sam. He’s good at that."
          }
        },
        {
          "role": "user",
          "text": "Alright, looks like we’re all set.",
          "translations": {
            "ko": "좋아요, 모든 준비가 끝난 것 같네요.",
            "zh": "好的，看起来我们都准备好了。",
            "ja": "さて、準備が整ったようです。",
            "vi": "",
            "en": "Alright, looks like we’re all set."
          }
        },
        {
          "role": "ai",
          "text": "Thanks for your help organizing this.",
          "translations": {
            "ko": "이 모든 것을 준비하는 데 도움을 줘서 고마워요.",
            "zh": "感谢你帮忙组织这个。",
            "ja": "この組織の手伝いをしてくれてありがとう。",
            "vi": "",
            "en": "Thanks for your help organizing this."
          }
        },
        {
          "role": "user",
          "text": "Anytime!",
          "translations": {
            "ko": "언제든지!",
            "zh": "随时！",
            "ja": "いつでも！",
            "vi": "",
            "en": "Anytime!"
          }
        }
      ]
    }
  ],
  "advanced": [
    {
      "description": {
        "en": "Leading a cross-functional strategic meeting",
        "ko": "여러 부서 간 전략 회의를 주도하다",
        "zh": "领导跨职能战略会议",
        "ja": "クロス機能的な戦略会議を主導する",
        "vi": "Tổ chức một cuộc họp chiến lược chéo chức năng"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Thanks everyone for joining. Let’s begin with our key objectives.",
          "translations": {
            "ko": "모두 참석해주셔서 감사합니다. 우리의 핵심 목표부터 시작해봅시다.",
            "zh": "感谢大家的参与。让我们从我们的主要目标开始。",
            "ja": "参加していただきありがとうございます。まずは主要な目標から始めましょう。",
            "vi": "Cảm ơn mọi người đã tham gia. Hãy bắt đầu với mục tiêu chính của chúng ta.",
            "en": "Thanks everyone for joining. Let’s begin with our key objectives."
          }
        },
        {
          "role": "user",
          "text": "Are we prioritizing growth or operational efficiency this quarter?",
          "translations": {
            "ko": "이번 분기에는 성장을 우선시할까요, 아니면 운영 효율성을 우선시할까요?",
            "zh": "这个季度我们是优先考虑增长还是运营效率？",
            "ja": "今四半期は成長を優先するか、それとも運用効率を優先するかですか？",
            "vi": "Trong quý này, chúng ta ưu tiên tăng trưởng hay hiệu quả hoạt động?",
            "en": "Are we prioritizing growth or operational efficiency this quarter?"
          }
        },
        {
          "role": "ai",
          "text": "Great question. We're aiming for balanced progress on both.",
          "translations": {
            "ko": "좋은 질문입니다. 우리는 두 가지 모두에서 균형있게 발전을 목표로 하고 있습니다.",
            "zh": "很好的问题。我们的目标是在这两方面都取得平衡的进步。",
            "ja": "良い質問です。両方に対して均衡の取れた進行を目指しています。",
            "vi": "Câu hỏi tốt. Chúng tôi đang nhắm đến sự tiến bộ cân đối ở cả hai.",
            "en": "Great question. We're aiming for balanced progress on both."
          }
        },
        {
          "role": "user",
          "text": "How do we measure success for each pillar?",
          "translations": {
            "ko": "각 핵심 요소에 대한 성공을 어떻게 측정하나요?",
            "zh": "我们如何衡量每个支柱的成功？",
            "ja": "各柱の成功をどのように測定しますか？",
            "vi": "Làm thế nào để chúng ta đo lường thành công cho mỗi trụ cột?",
            "en": "How do we measure success for each pillar?"
          }
        },
        {
          "role": "ai",
          "text": "For growth, we’ll focus on user acquisition and retention.",
          "translations": {
            "ko": "성장에 대해서는 사용자 획득 및 유지에 초점을 맞추겠습니다.",
            "zh": "对于增长，我们将重点关注用户获取和保留。",
            "ja": "成長については、ユーザー獲得と保持に焦点を当てます。",
            "vi": "Đối với tăng trưởng, chúng ta sẽ tập trung vào việc thu hút và giữ chân người dùng.",
            "en": "For growth, we’ll focus on user acquisition and retention."
          }
        },
        {
          "role": "user",
          "text": "And operational efficiency?",
          "translations": {
            "ko": "그럼 운영 효율성은요?",
            "zh": "那运营效率呢？",
            "ja": "そして運用効率は？",
            "vi": "Còn hiệu quả hoạt động?",
            "en": "And operational efficiency?"
          }
        },
        {
          "role": "ai",
          "text": "Reducing churn, improving onboarding, and process automation.",
          "translations": {
            "ko": "이탈률 감소, 온보딩 개선, 그리고 프로세스 자동화입니다.",
            "zh": "减少流失，提高新员工入职效率，以及流程自动化。",
            "ja": "チャーンの削減、オンボーディングの改善、プロセスの自動化です。",
            "vi": "Giảm tỷ lệ rời bỏ, cải thiện quá trình đưa vào sử dụng và tự động hóa quy trình.",
            "en": "Reducing churn, improving onboarding, and process automation."
          }
        },
        {
          "role": "user",
          "text": "Which teams will be driving those efforts?",
          "translations": {
            "ko": "어떤 팀이 이러한 노력을 주도할 것인가요?",
            "zh": "哪些团队将推动这些工作？",
            "ja": "それらの取り組みを推進するのはどのチームですか？",
            "vi": "Những đội nào sẽ thực hiện những nỗ lực này?",
            "en": "Which teams will be driving those efforts?"
          }
        },
        {
          "role": "ai",
          "text": "Marketing and Product will lead growth. Ops and CX on efficiency.",
          "translations": {
            "ko": "마케팅과 제품 팀이 성장을 주도하고, 운영 및 고객 경험 팀이 효율성을 주도할 것입니다.",
            "zh": "营销和产品团队将负责增长。运营和客户体验团队将负责效率。",
            "ja": "成長はマーケティングとプロダクトが、効率はオペレーションとCXが担当します。",
            "vi": "Marketing và Sản phẩm sẽ dẫn dắt tăng trưởng. Ops và CX về hiệu quả.",
            "en": "Marketing and Product will lead growth. Ops and CX on efficiency."
          }
        },
        {
          "role": "user",
          "text": "What’s the expected timeline?",
          "translations": {
            "ko": "예상 시간표는 어떻게 되나요?",
            "zh": "预期的时间表是什么？",
            "ja": "予想されるタイムラインは何ですか？",
            "vi": "Thời gian dự kiến là bao lâu?",
            "en": "What’s the expected timeline?"
          }
        },
        {
          "role": "ai",
          "text": "We’ll break it into two-month sprints with monthly check-ins.",
          "translations": {
            "ko": "우리는 이를 두 달 단위의 스프린트로 나누고, 매달 체크인을 할 예정입니다.",
            "zh": "我们将把它分成两个月的冲刺，每月进行一次检查。",
            "ja": "2ヶ月ごとのスプリントに分け、月次でチェックインを行います。",
            "vi": "Chúng tôi sẽ chia thành các giai đoạn hai tháng với việc kiểm tra hàng tháng.",
            "en": "We’ll break it into two-month sprints with monthly check-ins."
          }
        },
        {
          "role": "user",
          "text": "Should we assign owners today?",
          "translations": {
            "ko": "오늘 소유자를 지정해야 하나요?",
            "zh": "我们今天应该指定负责人吗？",
            "ja": "今日オーナーを割り当てるべきですか？",
            "vi": "Có nên chỉ định chủ sở hữu ngay hôm nay không?",
            "en": "Should we assign owners today?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, I’ll share a draft responsibility matrix after the meeting.",
          "translations": {
            "ko": "네, 회의 후에 초안 책임 행렬을 공유하겠습니다.",
            "zh": "是的，会议后我会分享一个草案责任矩阵。",
            "ja": "はい、会議後に責任マトリクスのドラフトを共有します。",
            "vi": "Đúng, tôi sẽ chia sẻ một bản nháp về ma trận trách nhiệm sau cuộc họp.",
            "en": "Yes, I’ll share a draft responsibility matrix after the meeting."
          }
        },
        {
          "role": "user",
          "text": "Can we also align on dependencies across functions?",
          "translations": {
            "ko": "부서 간의 의존성에 대해서도 일치시킬 수 있을까요?",
            "zh": "我们也可以在各职能间对依赖关系进行对齐吗？",
            "ja": "各機能間の依存関係についても合意できますか？",
            "vi": "Chúng ta cũng có thể thống nhất về sự phụ thuộc giữa các chức năng?",
            "en": "Can we also align on dependencies across functions?"
          }
        },
        {
          "role": "ai",
          "text": "Absolutely. We’ll use a shared tracker to stay updated.",
          "translations": {
            "ko": "당연합니다. 우리는 공유 트래커를 사용하여 업데이트 상태를 유지하겠습니다.",
            "zh": "当然。我们将使用共享跟踪器来保持更新。",
            "ja": "もちろんです。共有トラッカーを使用して最新の情報を把握します。",
            "vi": "Chắc chắn. Chúng tôi sẽ sử dụng một bộ theo dõi chung để cập nhật.",
            "en": "Absolutely. We’ll use a shared tracker to stay updated."
          }
        },
        {
          "role": "user",
          "text": "Thanks. This framework helps clarify the big picture.",
          "translations": {
            "ko": "감사합니다. 이 프레임워크는 큰 그림을 명확히 이해하는 데 도움이 됩니다.",
            "zh": "谢谢。这个框架有助于澄清大局。",
            "ja": "ありがとう。このフレームワークは大局を明確にするのに役立ちます。",
            "vi": "Cảm ơn. Khung này giúp làm rõ bức tranh tổng thể.",
            "en": "Thanks. This framework helps clarify the big picture."
          }
        },
        {
          "role": "ai",
          "text": "Let’s summarize our next steps.",
          "translations": {
            "ko": "다음 단계를 요약해봅시다.",
            "zh": "让我们总结一下我们的下一步行动。",
            "ja": "次のステップをまとめましょう。",
            "vi": "Hãy tóm tắt các bước tiếp theo của chúng ta.",
            "en": "Let’s summarize our next steps."
          }
        },
        {
          "role": "user",
          "text": "I’ll draft the notes and circulate them today.",
          "translations": {
            "ko": "나는 메모를 작성하고 오늘 그것들을 배포할 것입니다.",
            "zh": "我会起草会议记录并在今天发放。",
            "ja": "私が議事録のドラフトを作成し、今日中に回覧します。",
            "vi": "Tôi sẽ soạn thảo ghi chú và gửi chúng ngày hôm nay.",
            "en": "I’ll draft the notes and circulate them today."
          }
        },
        {
          "role": "ai",
          "text": "Let’s summarize our next steps.",
          "translations": {
            "ko": "다음 단계를 요약해봅시다.",
            "zh": "让我们总结一下我们的下一步行动。",
            "ja": "次のステップをまとめましょう。",
            "vi": "Hãy tóm tắt các bước tiếp theo của chúng ta.",
            "en": "Let’s summarize our next steps."
          }
        },
        {
          "role": "user",
          "text": "I’ll draft the notes and circulate them today.",
          "translations": {
            "ko": "나는 메모를 작성하고 오늘 그것들을 배포할 것입니다.",
            "zh": "我会起草会议记录并在今天发放。",
            "ja": "私が議事録のドラフトを作成し、今日中に回覧します。",
            "vi": "Tôi sẽ soạn thảo ghi chú và gửi chúng ngày hôm nay.",
            "en": "I’ll draft the notes and circulate them today."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Resolving conflict between team departments",
        "ko": "팀 부서 간의 갈등 해결",
        "zh": "解决团队部门之间的冲突",
        "ja": "チーム間の対立を解決する",
        "vi": "Giải quyết xung đột giữa các bộ phận trong nhóm"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Let’s address the friction between Product and Support teams.",
          "translations": {
            "ko": "제품 팀과 지원 팀 간의 마찰을 해결해봅시다.",
            "zh": "让我们解决产品和支持团队之间的摩擦。",
            "ja": "プロダクトチームとサポートチーム間の摩擦を解決しましょう。",
            "vi": "Hãy giải quyết sự ma sát giữa các nhóm Sản phẩm và Hỗ trợ.",
            "en": "Let’s address the friction between Product and Support teams."
          }
        },
        {
          "role": "user",
          "text": "Thanks. We've been struggling with ticket prioritization.",
          "translations": {
            "ko": "감사합니다. 우리는 티켓 우선 순위를 정하는 데 어려움을 겪고 있습니다.",
            "zh": "谢谢。我们一直在为工单优先级问题苦恼。",
            "ja": "ありがとう。私たちはチケットの優先順位付けに苦労しています。",
            "vi": "Cảm ơn. Chúng tôi đã gặp khó khăn với việc ưu tiên vé.",
            "en": "Thanks. We've been struggling with ticket prioritization."
          }
        },
        {
          "role": "ai",
          "text": "Product, how do you currently triage feature requests?",
          "translations": {
            "ko": "제품 팀은 현재 기능 요청을 어떻게 처리하나요?",
            "zh": "产品团队，你们目前是如何处理功能请求的？",
            "ja": "プロダクト、現在のフィーチャーリクエストのトリアージはどのように行っていますか？",
            "vi": "Sản phẩm, hiện tại bạn phân loại yêu cầu tính năng như thế nào?",
            "en": "Product, how do you currently triage feature requests?"
          }
        },
        {
          "role": "user",
          "text": "We consider effort vs impact, but support volume isn’t factored enough.",
          "translations": {
            "ko": "우리는 노력 대비 영향을 고려하지만, 지원 부서의 볼륨이 충분히 고려되지 않습니다.",
            "zh": "我们考虑的是努力与影响，但没有足够考虑到支持量。",
            "ja": "労力と影響のバランスを考慮していますが、サポートのボリュームが十分に考慮されていません。",
            "vi": "Chúng tôi xem xét nỗ lực so với tác động, nhưng khối lượng hỗ trợ không được tính đủ.",
            "en": "We consider effort vs impact, but support volume isn’t factored enough."
          }
        },
        {
          "role": "ai",
          "text": "Support, how does the backlog affect your workflows?",
          "translations": {
            "ko": "지원 팀은 백로그가 작업 흐름에 어떻게 영향을 미치나요?",
            "zh": "支持团队，积压的工作对你们的工作流程有何影响？",
            "ja": "サポート、バックログがあなたたちのワークフローにどのような影響を与えていますか？",
            "vi": "Hỗ trợ, cách xử lý hàng đợi ảnh hưởng đến quy trình làm việc của bạn như thế nào?",
            "en": "Support, how does the backlog affect your workflows?"
          }
        },
        {
          "role": "user",
          "text": "It delays urgent fixes and frustrates users.",
          "translations": {
            "ko": "긴급한 수정이 지연되고 사용자들이 좌절합니다.",
            "zh": "它延迟了紧急修复，让用户感到沮丧。",
            "ja": "緊急の修正が遅れ、ユーザーがイライラしています。",
            "vi": "Nó làm trì hoãn việc sửa chữa khẩn cấp và làm khách hàng bực bực.",
            "en": "It delays urgent fixes and frustrates users."
          }
        },
        {
          "role": "ai",
          "text": "Can we agree on a shared escalation policy?",
          "translations": {
            "ko": "공유된 에스컬레이션 정책에 대해 합의할 수 있을까요?",
            "zh": "我们能否就共享升级政策达成一致？",
            "ja": "共有のエスカレーションポリシーに合意できますか？",
            "vi": "Chúng ta có thể đồng ý về một chính sách nâng cấp chung không?",
            "en": "Can we agree on a shared escalation policy?"
          }
        },
        {
          "role": "user",
          "text": "Yes, with clearer response SLAs.",
          "translations": {
            "ko": "네, 더 명확한 응답 SLA와 함께요.",
            "zh": "是的，需要更明确的响应服务等级协议。",
            "ja": "はい、より明確なレスポンスSLAとともに。",
            "vi": "Đúng, với các SLA phản hồi rõ ràng hơn.",
            "en": "Yes, with clearer response SLAs."
          }
        },
        {
          "role": "ai",
          "text": "What about bi-weekly syncs to review the backlog together?",
          "translations": {
            "ko": "백로그를 함께 검토하기 위해 격주로 동기화를 할 수 있을까요?",
            "zh": "我们是否应该每两周同步一次，一起审查积压的工作？",
            "ja": "バックログを一緒に見直すための隔週の同期はどうですか？",
            "vi": "Còn về việc đồng bộ hai tuần một lần để xem xét hàng đợi cùng nhau?",
            "en": "What about bi-weekly syncs to review the backlog together?"
          }
        },
        {
          "role": "user",
          "text": "That would help us stay aligned.",
          "translations": {
            "ko": "그것이 우리가 일치를 유지하는 데 도움이 될 것입니다.",
            "zh": "这将帮助我们保持一致。",
            "ja": "それは私たちが一致を保つのに役立ちます。",
            "vi": "Điều đó sẽ giúp chúng tôi duy trì sự đồng lòng.",
            "en": "That would help us stay aligned."
          }
        },
        {
          "role": "ai",
          "text": "Should we designate a liaison for smoother handoffs?",
          "translations": {
            "ko": "더 원활한 인수를 위해 연락처를 지정해야 하나요?",
            "zh": "我们应该指定一个联络人以便更顺畅的交接吗？",
            "ja": "スムーズな引き継ぎのために連絡係を指名すべきですか？",
            "vi": "Có nên chỉ định một liên lạc để làm cho việc chuyển giao mượt mà hơn không?",
            "en": "Should we designate a liaison for smoother handoffs?"
          }
        },
        {
          "role": "user",
          "text": "Great idea. I can assign someone from our team.",
          "translations": {
            "ko": "좋은 생각입니다. 우리 팀에서 누군가를 지정할 수 있습니다.",
            "zh": "好主意。我可以从我们团队中指派一个人。",
            "ja": "良いアイデアです。私たちのチームから誰かを指名します。",
            "vi": "Ý tưởng tốt. Tôi có thể chỉ định một người từ nhóm của chúng tôi.",
            "en": "Great idea. I can assign someone from our team."
          }
        },
        {
          "role": "ai",
          "text": "Let’s pilot this workflow for a month.",
          "translations": {
            "ko": "이 작업 흐름을 한 달 동안 시험해봅시다.",
            "zh": "让我们试行这个工作流程一个月。",
            "ja": "このワークフローを1ヶ月間試行しましょう。",
            "vi": "Hãy thử nghiệm quy trình làm việc này trong một tháng.",
            "en": "Let’s pilot this workflow for a month."
          }
        },
        {
          "role": "user",
          "text": "Agreed. We’ll monitor and iterate if needed.",
          "translations": {
            "ko": "동의합니다. 필요한 경우 모니터링하고 반복하겠습니다.",
            "zh": "同意。我们将进行监控，并在需要时进行迭代。",
            "ja": "同意します。必要に応じてモニタリングと反復を行います。",
            "vi": "Đồng ý. Chúng tôi sẽ giám sát và điều chỉnh nếu cần.",
            "en": "Agreed. We’ll monitor and iterate if needed."
          }
        },
        {
          "role": "ai",
          "text": "Thanks both. Conflict happens—but collaboration solves it.",
          "translations": {
            "ko": "감사합니다. 갈등은 발생하지만 협력이 그것을 해결합니다.",
            "zh": "谢谢你们。冲突是会发生的，但合作可以解决它。",
            "ja": "ありがとう、両方とも。対立は起こりますが、協力がそれを解決します。",
            "vi": "Cảm ơn cả hai. Xung đột xảy ra - nhưng cộng tác giải quyết nó.",
            "en": "Thanks both. Conflict happens—but collaboration solves it."
          }
        },
        {
          "role": "user",
          "text": "[User response needed]",
          "translations": {
            "ko": "[사용자 응답 필요]",
            "zh": "[需要用户回应]",
            "ja": "[ユーザーの反応が必要]",
            "vi": "[Cần phản hồi của người dùng]",
            "en": "[User response needed]"
          }
        },
        {
          "role": "ai",
          "text": "Let’s summarize our next steps.",
          "translations": {
            "ko": "다음 단계를 요약해봅시다.",
            "zh": "让我们总结一下我们的下一步行动。",
            "ja": "次のステップをまとめましょう。",
            "vi": "Hãy tóm tắt các bước tiếp theo của chúng ta.",
            "en": "Let’s summarize our next steps."
          }
        },
        {
          "role": "user",
          "text": "I’ll draft the notes and circulate them today.",
          "translations": {
            "ko": "나는 메모를 작성하고 오늘 그것들을 배포할 것입니다.",
            "zh": "我会起草会议记录并在今天发放。",
            "ja": "私が議事録のドラフトを作成し、今日中に回覧します。",
            "vi": "Tôi sẽ soạn thảo ghi chú và gửi chúng ngày hôm nay.",
            "en": "I’ll draft the notes and circulate them today."
          }
        },
        {
          "role": "ai",
          "text": "Thanks both. Conflict happens—but collaboration solves it.",
          "translations": {
            "ko": "감사합니다. 갈등은 발생하지만 협력이 그것을 해결합니다.",
            "zh": "谢谢你们。冲突是会发生的，但合作可以解决它。",
            "ja": "ありがとう、両方とも。対立は起こりますが、協力がそれを解決します。",
            "vi": "Cảm ơn cả hai. Xung đột xảy ra - nhưng cộng tác giải quyết nó.",
            "en": "Thanks both. Conflict happens—but collaboration solves it."
          }
        },
        {
          "role": "user",
          "text": "Let’s keep this process going and revisit next week.",
          "translations": {
            "ko": "이 과정을 계속하고 다음 주에 다시 검토합시다.",
            "zh": "让我们保持这个过程，并在下周再次审查。",
            "ja": "このプロセスを続け、来週再訪しましょう。",
            "vi": "Hãy tiếp tục quy trình này và xem xét lại vào tuần sau.",
            "en": "Let’s keep this process going and revisit next week."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Facilitating a brainstorming session",
        "ko": "브레인스토밍 세션 진행",
        "zh": "主持一个头脑风暴会议",
        "ja": "ブレインストーミングセッションを進行する",
        "vi": "Tổ chức một phiên họp động não"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Let’s kick off with blue-sky ideas—no judgment.",
          "translations": {
            "ko": "판단 없는 파란 하늘 아이디어로 시작해봅시다.",
            "zh": "让我们从蓝天思考开始，不做任何评判。",
            "ja": "批判なしの青空のアイデアから始めましょう。",
            "vi": "Hãy bắt đầu với những ý tưởng không giới hạn - không phán đoán.",
            "en": "Let’s kick off with blue-sky ideas—no judgment."
          }
        },
        {
          "role": "user",
          "text": "How about a referral program that rewards both sides?",
          "translations": {
            "ko": "양쪽 모두에게 보상을 주는 추천 프로그램은 어떨까요?",
            "zh": "如何设立一个双方都能得到奖励的推荐计划呢？",
            "ja": "両方に報酬がある紹介プログラムはどうでしょう？",
            "vi": "Còn về một chương trình giới thiệu mà cả hai bên đều được thưởng?",
            "en": "How about a referral program that rewards both sides?"
          }
        },
        {
          "role": "ai",
          "text": "Nice! Anyone want to build on that?",
          "translations": {
            "ko": "좋아요! 누가 그것을 발전시키고 싶나요?",
            "zh": "不错！有人想在这个基础上建设吗？",
            "ja": "いいね！それを発展させたい人はいますか？",
            "vi": "Tốt! Ai muốn xây dựng dựa trên điều đó?",
            "en": "Nice! Anyone want to build on that?"
          }
        },
        {
          "role": "user",
          "text": "We could integrate with social sharing for bonus points.",
          "translations": {
            "ko": "보너스 포인트를 위해 소셜 공유와 통합할 수 있습니다.",
            "zh": "我们可以与社交分享进行整合，以获得额外的积分。",
            "ja": "ボーナスポイントのためのソーシャルシェアリングと統合できます。",
            "vi": "Chúng ta có thể tích hợp với chia sẻ trên mạng xã hội để nhận thêm điểm.",
            "en": "We could integrate with social sharing for bonus points."
          }
        },
        {
          "role": "ai",
          "text": "Let’s note that. Any ideas for onboarding improvements?",
          "translations": {
            "ko": "그것을 기록합시다. 온보딩 개선에 대한 아이디어는 어떤 것이 있나요?",
            "zh": "让我们记下这个。有没有关于入职改进的想法？",
            "ja": "それをメモしましょう。オンボーディングの改善のアイデアはありますか？",
            "vi": "Hãy ghi chú điều đó. Có ý tưởng nào để cải thiện quá trình đưa vào sử dụng không?",
            "en": "Let’s note that. Any ideas for onboarding improvements?"
          }
        },
        {
          "role": "user",
          "text": "Interactive tutorials based on user role.",
          "translations": {
            "ko": "사용자 역할에 기반한 대화형 튜토리얼입니다.",
            "zh": "根据用户角色进行互动式教程。",
            "ja": "ユーザーの役割に基づいたインタラクティブなチュートリアルです。",
            "vi": "Hướng dẫn tương tác dựa trên vai trò người dùng.",
            "en": "Interactive tutorials based on user role."
          }
        },
        {
          "role": "ai",
          "text": "Interesting. What tech would we need for that?",
          "translations": {
            "ko": "흥미롭군요. 그것을 위해 어떤 기술이 필요한가요?",
            "zh": "有趣。我们需要什么技术来实现这个？",
            "ja": "面白い。それにはどのような技術が必要ですか？",
            "vi": "Thú vị. Chúng ta cần công nghệ gì cho điều đó?",
            "en": "Interesting. What tech would we need for that?"
          }
        },
        {
          "role": "user",
          "text": "Conditional rendering and tracking progress.",
          "translations": {
            "ko": "조건부 렌더링 및 진행 상황 추적입니다.",
            "zh": "条件渲染和跟踪进度。",
            "ja": "条件付きレンダリングと進行状況の追跡です。",
            "vi": "Hiển thị điều kiện và theo dõi tiến trình.",
            "en": "Conditional rendering and tracking progress."
          }
        },
        {
          "role": "ai",
          "text": "Any cost concerns?",
          "translations": {
            "ko": "비용에 대한 우려는 있나요?",
            "zh": "有关于成本的担忧吗？",
            "ja": "コストに関する懸念はありますか？",
            "vi": "Có lo lắng về chi phí không?",
            "en": "Any cost concerns?"
          }
        },
        {
          "role": "user",
          "text": "We can prototype it in Figma before dev work.",
          "translations": {
            "ko": "개발 작업 전에 Figma에서 프로토타입을 만들 수 있습니다.",
            "zh": "我们可以在开发工作之前在Figma中制作原型。",
            "ja": "開発作業の前にFigmaでプロトタイプを作成できます。",
            "vi": "Chúng ta có thể tạo mô hình trong Figma trước khi làm việc phát triển.",
            "en": "We can prototype it in Figma before dev work."
          }
        },
        {
          "role": "ai",
          "text": "Keep going—how about community engagement?",
          "translations": {
            "ko": "계속해봅시다 - 커뮤니티 참여에 대해서는 어떻게 생각하나요?",
            "zh": "继续，关于社区参与有什么想法？",
            "ja": "続けてください—コミュニティエンゲージメントについてはどうですか？",
            "vi": "Tiếp tục - còn về việc tham gia cộng đồng?",
            "en": "Keep going—how about community engagement?"
          }
        },
        {
          "role": "user",
          "text": "Live AMAs with our founders.",
          "translations": {
            "ko": "우리 창업자들과의 실시간 AMA입니다.",
            "zh": "我们的创始人进行现场问答。",
            "ja": "私たちの創設者とのライブAMAです。",
            "vi": "AMA trực tiếp với các nhà sáng lập của chúng tôi.",
            "en": "Live AMAs with our founders."
          }
        },
        {
          "role": "ai",
          "text": "Love it. What about product naming for our next release?",
          "translations": {
            "ko": "좋아요. 다음 릴리스의 제품 명명에 대해서는 어떻게 생각하나요?",
            "zh": "喜欢这个。关于我们下一次发布的产品命名有什么想法？",
            "ja": "それが好きです。次のリリースのための製品命名についてはどうですか？",
            "vi": "Tôi thích nó. Còn về việc đặt tên sản phẩm cho phiên bản phát hành tiếp theo của chúng ta?",
            "en": "Love it. What about product naming for our next release?"
          }
        },
        {
          "role": "user",
          "text": "Let's involve users through a naming contest.",
          "translations": {
            "ko": "사용자를 통한 명명 대회를 진행해봅시다.",
            "zh": "让我们通过命名比赛让用户参与进来。",
            "ja": "ユーザーを巻き込んだ命名コンテストを行いましょう。",
            "vi": "Hãy để người dùng tham gia thông qua một cuộc thi đặt tên.",
            "en": "Let's involve users through a naming contest."
          }
        },
        {
          "role": "ai",
          "text": "Fun idea. OK, we’ll synthesize themes and vote next week.",
          "translations": {
            "ko": "재미있는 아이디어입니다. 그럼, 다음 주에 테마를 종합하고 투표하겠습니다.",
            "zh": "有趣的想法。好的，我们下周将整合主题并进行投票。",
            "ja": "楽しいアイデアです。OK、来週テーマをまとめて投票しましょう。",
            "vi": "Ý tưởng vui. OK, chúng tôi sẽ tổng hợp các chủ đề và bỏ phiếu vào tuần sau.",
            "en": "Fun idea. OK, we’ll synthesize themes and vote next week."
          }
        },
        {
          "role": "user",
          "text": "[User response needed]",
          "translations": {
            "ko": "[사용자 응답 필요]",
            "zh": "[需要用户回应]",
            "ja": "[ユーザーの反応が必要]",
            "vi": "[Cần phản hồi của người dùng]",
            "en": "[User response needed]"
          }
        },
        {
          "role": "ai",
          "text": "Let’s summarize our next steps.",
          "translations": {
            "ko": "다음 단계를 요약해봅시다.",
            "zh": "让我们总结一下我们的下一步行动。",
            "ja": "次のステップをまとめましょう。",
            "vi": "Hãy tóm tắt các bước tiếp theo của chúng ta.",
            "en": "Let’s summarize our next steps."
          }
        },
        {
          "role": "user",
          "text": "I’ll draft the notes and circulate them today.",
          "translations": {
            "ko": "나는 메모를 작성하고 오늘 그것들을 배포할 것입니다.",
            "zh": "我会起草会议记录并在今天发放。",
            "ja": "私が議事録のドラフトを作成し、今日中に回覧します。",
            "vi": "Tôi sẽ soạn thảo ghi chú và gửi chúng ngày hôm nay.",
            "en": "I’ll draft the notes and circulate them today."
          }
        },
        {
          "role": "ai",
          "text": "Fun idea. OK, we’ll synthesize themes and vote next week.",
          "translations": {
            "ko": "재미있는 아이디어입니다. 그럼, 다음 주에 테마를 종합하고 투표하겠습니다.",
            "zh": "有趣的想法。好的，我们下周将整合主题并进行投票。",
            "ja": "楽しいアイデアです。OK、来週テーマをまとめて投票しましょう。",
            "vi": "Ý tưởng vui. OK, chúng tôi sẽ tổng hợp các chủ đề và bỏ phiếu vào tuần sau.",
            "en": "Fun idea. OK, we’ll synthesize themes and vote next week."
          }
        },
        {
          "role": "user",
          "text": "I’ll organize the results and prepare options to vote on.",
          "translations": {
            "ko": "나는 결과를 정리하고 투표할 옵션을 준비하겠습니다.",
            "zh": "我会整理结果并准备投票选项。",
            "ja": "私が結果を整理し、投票のための選択肢を準備します。",
            "vi": "Tôi sẽ tổ chức kết quả và chuẩn bị các lựa chọn để bỏ phiếu.",
            "en": "I’ll organize the results and prepare options to vote on."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Aligning project goals across teams",
        "ko": "팀 간의 프로젝트 목표 일치",
        "zh": "在团队之间对齐项目目标",
        "ja": "チーム間でプロジェクトの目標を調整する",
        "vi": "Định rõ mục tiêu dự án giữa các nhóm"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Thanks for joining. Our goal is to sync team objectives.",
          "translations": {
            "ko": "참석해주셔서 감사합니다. 우리의 목표는 팀 목표를 동기화하는 것입니다.",
            "zh": "感谢大家的参与。我们的目标是同步团队目标。",
            "ja": "参加していただきありがとうございます。目標はチームの目標を同期することです。",
            "vi": "Cảm ơn đã tham gia. Mục tiêu của chúng tôi là đồng bộ hóa mục tiêu của nhóm.",
            "en": "Thanks for joining. Our goal is to sync team objectives."
          }
        },
        {
          "role": "user",
          "text": "Where do we begin?",
          "translations": {
            "ko": "어디서 시작해야 하나요?",
            "zh": "我们从哪里开始？",
            "ja": "どこから始めればいいですか？",
            "vi": "Chúng ta bắt đầu từ đâu?",
            "en": "Where do we begin?"
          }
        },
        {
          "role": "ai",
          "text": "Let’s review each team’s current roadmap.",
          "translations": {
            "ko": "각 팀의 현재 로드맵을 검토해봅시다.",
            "zh": "让我们回顾一下每个团队当前的路线图。",
            "ja": "各チームの現在のロードマップを見直しましょう。",
            "vi": "Hãy xem xét lộ trình hiện tại của mỗi nhóm.",
            "en": "Let’s review each team’s current roadmap."
          }
        },
        {
          "role": "user",
          "text": "Engineering is focused on performance improvements.",
          "translations": {
            "ko": "엔지니어링은 성능 개선에 초점을 맞추고 있습니다.",
            "zh": "工程团队正在专注于性能改进。",
            "ja": "エンジニアリングはパフォーマンスの改善に注力しています。",
            "vi": "Kỹ thuật đang tập trung vào việc cải thiện hiệu suất.",
            "en": "Engineering is focused on performance improvements."
          }
        },
        {
          "role": "ai",
          "text": "Marketing is ramping up the Q2 campaign.",
          "translations": {
            "ko": "마케팅은 2분기 캠페인을 확대하고 있습니다.",
            "zh": "营销团队正在加强第二季度的活动。",
            "ja": "マーケティングはQ2キャンペーンを強化しています。",
            "vi": "Marketing đang tăng cường chiến dịch Q2.",
            "en": "Marketing is ramping up the Q2 campaign."
          }
        },
        {
          "role": "user",
          "text": "Can we align release dates with campaign milestones?",
          "translations": {
            "ko": "릴리스 날짜를 캠페인 마일스톤과 일치시킬 수 있을까요?",
            "zh": "我们可以将发布日期与活动里程碑对齐吗？",
            "ja": "リリース日をキャンペーンのマイルストーンと一致させることはできますか？",
            "vi": "Chúng ta có thể đồng bộ hóa ngày phát hành với các mốc thời gian của chiến dịch không?",
            "en": "Can we align release dates with campaign milestones?"
          }
        },
        {
          "role": "ai",
          "text": "Definitely. Shared deadlines reduce confusion.",
          "translations": {
            "ko": "확실히. 공유된 마감일은 혼란을 줄입니다.",
            "zh": "当然。共享的截止日期可以减少混淆。",
            "ja": "確かに。共有の締め切りは混乱を減らします。",
            "vi": "Chắc chắn. Các thời hạn chung giảm bớt sự nhầm lẫn.",
            "en": "Definitely. Shared deadlines reduce confusion."
          }
        },
        {
          "role": "user",
          "text": "Should we use a unified calendar tool?",
          "translations": {
            "ko": "통합된 캘린더 도구를 사용해야 하나요?",
            "zh": "我们应该使用统一的日历工具吗？",
            "ja": "統一されたカレンダーツールを使用すべきですか？",
            "vi": "Chúng ta có nên sử dụng một công cụ lịch hợp nhất không?",
            "en": "Should we use a unified calendar tool?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, I’ll propose we move to Notion shared view.",
          "translations": {
            "ko": "네, Notion 공유 뷰로 이동하는 것을 제안하겠습니다.",
            "zh": "是的，我建议我们转移到Notion共享视图。",
            "ja": "はい、Notionの共有ビューに移行することを提案します。",
            "vi": "Đúng, tôi sẽ đề xuất chúng ta chuyển sang chế độ xem chung Notion.",
            "en": "Yes, I’ll propose we move to Notion shared view."
          }
        },
        {
          "role": "user",
          "text": "What about dependencies across teams?",
          "translations": {
            "ko": "팀 간의 의존성은 어떻게 되나요?",
            "zh": "关于团队之间的依赖性呢？",
            "ja": "チーム間の依存関係はどうですか？",
            "vi": "Còn về sự phụ thuộc giữa các nhóm?",
            "en": "What about dependencies across teams?"
          }
        },
        {
          "role": "ai",
          "text": "We’ll identify blockers in a shared backlog.",
          "translations": {
            "ko": "우리는 공유 백로그에서 차단 요소를 식별하겠습니다.",
            "zh": "我们将在共享的积压工作中识别阻碍。",
            "ja": "共有のバックログでブロッカーを特定します。",
            "vi": "Chúng tôi sẽ xác định các trở ngại trong một hàng đợi chung.",
            "en": "We’ll identify blockers in a shared backlog."
          }
        },
        {
          "role": "user",
          "text": "Do we need a bi-weekly sync?",
          "translations": {
            "ko": "격주 동기화가 필요한가요?",
            "zh": "我们需要每两周同步一次吗？",
            "ja": "隔週の同期が必要ですか？",
            "vi": "Chúng ta cần đồng bộ hai tuần một lần không?",
            "en": "Do we need a bi-weekly sync?"
          }
        },
        {
          "role": "ai",
          "text": "I’d recommend it for the first two months.",
          "translations": {
            "ko": "처음 두 달 동안은 그것을 추천하겠습니다.",
            "zh": "我建议在前两个月进行。",
            "ja": "最初の2ヶ月間はそれを推奨します。",
            "vi": "Tôi khuyên nên trong hai tháng đầu.",
            "en": "I’d recommend it for the first two months."
          }
        },
        {
          "role": "user",
          "text": "Should we assign a cross-functional lead?",
          "translations": {
            "ko": "여러 기능을 가진 리드를 지정해야 하나요?",
            "zh": "我们应该指定一个跨职能的负责人吗？",
            "ja": "クロス機能リードを割り当てるべきですか？",
            "vi": "Có nên chỉ định một người dẫn dắt chéo chức năng không?",
            "en": "Should we assign a cross-functional lead?"
          }
        },
        {
          "role": "ai",
          "text": "Great idea. Let’s vote on a candidate.",
          "translations": {
            "ko": "좋은 생각입니다. 후보에 대해 투표합시다.",
            "zh": "好主意。让我们投票选出一个候选人。",
            "ja": "良いアイデアです。候補者について投票しましょう。",
            "vi": "Ý tưởng tốt. Hãy bỏ phiếu cho một ứng cử viên.",
            "en": "Great idea. Let’s vote on a candidate."
          }
        },
        {
          "role": "user",
          "text": "Thanks. I feel clearer on our direction.",
          "translations": {
            "ko": "감사합니다. 우리의 방향에 대해 더 명확해졌습니다.",
            "zh": "谢谢。我对我们的方向更清晰了。",
            "ja": "ありがとう。私たちの方向性についてより明確になりました。",
            "vi": "Cảm ơn. Tôi cảm thấy rõ ràng hơn về hướng đi của chúng ta.",
            "en": "Thanks. I feel clearer on our direction."
          }
        },
        {
          "role": "ai",
          "text": "I’ll send a summary after this call.",
          "translations": {
            "ko": "이 통화 후에 요약을 보내겠습니다.",
            "zh": "我会在这次通话后发送总结。",
            "ja": "この通話後に要約を送ります。",
            "vi": "Tôi sẽ gửi một bản tóm tắt sau cuộc gọi này.",
            "en": "I’ll send a summary after this call."
          }
        },
        {
          "role": "user",
          "text": "Perfect. Looking forward to better coordination.",
          "translations": {
            "ko": "완벽합니다. 더 나은 조정을 기대합니다.",
            "zh": "完美。期待更好的协调。",
            "ja": "完璧です。より良い調整を楽しみにしています。",
            "vi": "Hoàn hảo. Mong chờ sự phối hợp tốt hơn.",
            "en": "Perfect. Looking forward to better coordination."
          }
        },
        {
          "role": "ai",
          "text": "Let’s wrap this up with final confirmations.",
          "translations": {
            "ko": "최종 확인으로 이것을 마무리합시다.",
            "zh": "让我们以最后的确认结束这次会议。",
            "ja": "最終的な確認でこれを終わりにしましょう。",
            "vi": "Hãy kết thúc với việc xác nhận cuối cùng.",
            "en": "Let’s wrap this up with final confirmations."
          }
        },
        {
          "role": "user",
          "text": "I’ll follow up with a summary email shortly.",
          "translations": {
            "ko": "곧 요약 이메일을 보내겠습니다.",
            "zh": "我会尽快发送一封总结邮件。",
            "ja": "すぐに要約メールを送ります。",
            "vi": "Tôi sẽ gửi email tóm tắt ngay sau đây.",
            "en": "I’ll follow up with a summary email shortly."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Handling a disruptive meeting participant",
        "ko": "방해하는 회의 참석자 처리",
        "zh": "处理会议中的破坏性参与者",
        "ja": "会議の参加者を邪魔するのを対処する",
        "vi": "Xử lý một người tham gia cuộc họp gây rối"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Let’s maintain a respectful tone during this session.",
          "translations": {
            "ko": "이 세션 동안 존중하는 태도를 유지합시다.",
            "zh": "让我们在这次会议中保持尊重的语气。",
            "ja": "このセッション中は尊重する態度を保つようにしましょう。",
            "vi": "Hãy duy trì một tông màu tôn trọng trong phiên họp này.",
            "en": "Let’s maintain a respectful tone during this session."
          }
        },
        {
          "role": "user",
          "text": "I didn’t mean to interrupt, I just feel unheard.",
          "translations": {
            "ko": "방해하려는 의도는 아니었습니다. 저는 들리지 않는다고 느꼈습니다.",
            "zh": "我并不是故意打断，我只是觉得没有被听到。",
            "ja": "割り込むつもりはありませんでした、ただ聞かれていないと感じただけです。",
            "vi": "Tôi không có ý định ngắt lời, tôi chỉ cảm thấy không được lắng nghe.",
            "en": "I didn’t mean to interrupt, I just feel unheard."
          }
        },
        {
          "role": "ai",
          "text": "We’ll make space for everyone to contribute.",
          "translations": {
            "ko": "모든 사람이 기여할 수 있는 공간을 만들겠습니다.",
            "zh": "我们会为每个人提供发言的空间。",
            "ja": "皆が貢献できるスペースを作ります。",
            "vi": "Chúng tôi sẽ tạo không gian cho mọi người đóng góp.",
            "en": "We’ll make space for everyone to contribute."
          }
        },
        {
          "role": "user",
          "text": "Okay, I’ll wait for my turn next time.",
          "translations": {
            "ko": "알겠습니다. 다음 번에는 제 차례를 기다리겠습니다.",
            "zh": "好的，下次我会等待我的轮次。",
            "ja": "了解しました、次回は順番を待ちます。",
            "vi": "Được, tôi sẽ chờ đến lượt của mình lần sau.",
            "en": "Okay, I’ll wait for my turn next time."
          }
        },
        {
          "role": "ai",
          "text": "Thanks. Let's circle back to the last point.",
          "translations": {
            "ko": "감사합니다. 마지막 포인트로 돌아가봅시다.",
            "zh": "谢谢。让我们回到上一个点。",
            "ja": "ありがとう。最後のポイントに戻りましょう。",
            "vi": "Cảm ơn. Hãy quay lại với điểm cuối cùng.",
            "en": "Thanks. Let's circle back to the last point."
          }
        },
        {
          "role": "user",
          "text": "I agree with the proposed timeline.",
          "translations": {
            "ko": "제안된 타임라인에 동의합니다.",
            "zh": "我同意提出的时间表。",
            "ja": "提案されたタイムラインに同意します。",
            "vi": "Tôi đồng ý với thời gian dự kiến được đề xuất.",
            "en": "I agree with the proposed timeline."
          }
        },
        {
          "role": "ai",
          "text": "Does anyone have a concern with the priorities?",
          "translations": {
            "ko": "우선 순위에 대해 우려하는 사람이 있나요?",
            "zh": "有人对优先事项有疑虑吗？",
            "ja": "優先事項について懸念がある人はいますか？",
            "vi": "Có ai có vấn đề gì với các ưu tiên không?",
            "en": "Does anyone have a concern with the priorities?"
          }
        },
        {
          "role": "user",
          "text": "I think task B should come before A.",
          "translations": {
            "ko": "저는 작업 B가 A보다 먼저 와야 한다고 생각합니다.",
            "zh": "我认为任务B应该在任务A之前进行。",
            "ja": "タスクBはAよりも先に来るべきだと思います。",
            "vi": "Tôi nghĩ nhiệm vụ B nên đến trước A.",
            "en": "I think task B should come before A."
          }
        },
        {
          "role": "ai",
          "text": "Let’s discuss that—can you explain your reasoning?",
          "translations": {
            "ko": "그것에 대해 논의해봅시다 - 이유를 설명해주실 수 있나요?",
            "zh": "让我们讨论一下，你能解释一下你的理由吗？",
            "ja": "それについて話し合いましょう—あなたの理由を説明してもらえますか？",
            "vi": "Hãy thảo luận về điều đó - bạn có thể giải thích lý do của mình không?",
            "en": "Let’s discuss that—can you explain your reasoning?"
          }
        },
        {
          "role": "user",
          "text": "It impacts onboarding, which is time-sensitive.",
          "translations": {
            "ko": "그것은 온보딩에 영향을 미치며, 시간에 민감합니다.",
            "zh": "它影响了入职，这是时间敏感的。",
            "ja": "それはオンボーディングに影響を与え、それは時間が重要です。",
            "vi": "Nó ảnh hưởng đến quá trình đưa vào sử dụng, đó là vấn đề nhạy cảm về thời gian.",
            "en": "It impacts onboarding, which is time-sensitive."
          }
        },
        {
          "role": "ai",
          "text": "Valid point. Any objections to switching order?",
          "translations": {
            "ko": "유효한 포인트입니다. 순서를 바꾸는 데 이의가 있나요?",
            "zh": "有道理。有人反对调整顺序吗？",
            "ja": "有効なポイントです。順序を変更する反対意見はありますか？",
            "vi": "Điểm hợp lệ. Có phản đối nào đối với việc đổi thứ tự không?",
            "en": "Valid point. Any objections to switching order?"
          }
        },
        {
          "role": "user",
          "text": "None from my end.",
          "translations": {
            "ko": "제 쪽에서는 없습니다.",
            "zh": "我这边没有。",
            "ja": "私の方からはありません。",
            "vi": "Không có từ phía tôi.",
            "en": "None from my end."
          }
        },
        {
          "role": "ai",
          "text": "Great. Let’s proceed with that adjustment.",
          "translations": {
            "ko": "좋습니다. 그 조정으로 진행합시다.",
            "zh": "好的。让我们按照这个调整进行。",
            "ja": "それでは、その調整で進めましょう。",
            "vi": "Tốt. Hãy tiếp tục với việc điều chỉnh đó.",
            "en": "Great. Let’s proceed with that adjustment."
          }
        },
        {
          "role": "user",
          "text": "Thanks for listening.",
          "translations": {
            "ko": "들어주셔서 감사합니다.",
            "zh": "谢谢你们的倾听。",
            "ja": "聞いてくれてありがとう。",
            "vi": "Cảm ơn đã lắng nghe.",
            "en": "Thanks for listening."
          }
        },
        {
          "role": "ai",
          "text": "Of course. Let’s foster open discussion.",
          "translations": {
            "ko": "물론입니다. 열린 토론을 촉진합시다.",
            "zh": "当然。让我们促进开放的讨论。",
            "ja": "もちろんです。オープンな議論を促しましょう。",
            "vi": "Tất nhiên. Hãy thúc đẩy cuộc thảo luận mở.",
            "en": "Of course. Let’s foster open discussion."
          }
        },
        {
          "role": "user",
          "text": "Agreed. I’ll be more mindful moving forward.",
          "translations": {
            "ko": "동의합니다. 앞으로 더 주의하겠습니다.",
            "zh": "同意。我以后会更加注意。",
            "ja": "同意します。今後はもっと注意深くなります。",
            "vi": "Đồng ý. Tôi sẽ chú ý hơn trong tương lai.",
            "en": "Agreed. I’ll be more mindful moving forward."
          }
        },
        {
          "role": "ai",
          "text": "Shall we move on to next topic?",
          "translations": {
            "ko": "다음 주제로 넘어가야 하나요?",
            "zh": "我们应该继续下一个话题吗？",
            "ja": "次のトピックに進みましょうか？",
            "vi": "Chúng ta có nên chuyển sang chủ đề tiếp theo không?",
            "en": "Shall we move on to next topic?"
          }
        },
        {
          "role": "user",
          "text": "Yes, let's keep things moving.",
          "translations": {
            "ko": "네, 계속 진행합시다.",
            "zh": "是的，让我们继续。",
            "ja": "はい、進めましょう。",
            "vi": "Đúng, hãy tiếp tục.",
            "en": "Yes, let's keep things moving."
          }
        },
        {
          "role": "ai",
          "text": "Thanks, everyone. We handled that well.",
          "translations": {
            "ko": "감사합니다. 우리는 잘 처리했습니다.",
            "zh": "谢谢大家。我们处理得很好。",
            "ja": "皆さん、ありがとうございます。上手く対処できました。",
            "vi": "Cảm ơn mọi người. Chúng ta đã xử lý tốt.",
            "en": "Thanks, everyone. We handled that well."
          }
        },
        {
          "role": "user",
          "text": "I’ll document today’s decisions and share the summary.",
          "translations": {
            "ko": "오늘의 결정 사항을 문서화하고 요약을 공유하겠습니다.",
            "zh": "我会记录今天的决定并分享总结。",
            "ja": "今日の決定事項を文書化し、要約を共有します。",
            "vi": "Tôi sẽ ghi lại các quyết định hôm nay và chia sẻ bản tóm tắt.",
            "en": "I’ll document today’s decisions and share the summary."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Conducting a crisis response meeting",
        "ko": "위기 대응 회의 진행",
        "zh": "主持危机应对会议",
        "ja": "危機対応会議を行う",
        "vi": "Tổ chức một cuộc họp phản ứng khủng hoảng"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "We’ve identified a data breach affecting 5% of users.",
          "translations": {
            "ko": "우리는 사용자의 5%에 영향을 미치는 데이터 유출을 확인했습니다.",
            "zh": "我们已经发现了影响5%用户的数据泄露。",
            "ja": "ユーザーの5%に影響を与えるデータ侵害を特定しました。",
            "vi": "Chúng tôi đã xác định một cuộc đột nhập dữ liệu ảnh hưởng đến 5% người dùng.",
            "en": "We’ve identified a data breach affecting 5% of users."
          }
        },
        {
          "role": "user",
          "text": "Have we isolated the vulnerability?",
          "translations": {
            "ko": "취약점을 격리시켰나요?",
            "zh": "我们已经隔离了漏洞吗？",
            "ja": "脆弱性は隔離されましたか？",
            "vi": "Chúng ta đã cô lập lỗ hổng chưa?",
            "en": "Have we isolated the vulnerability?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, the dev team patched it within two hours.",
          "translations": {
            "ko": "네, 개발팀이 두 시간 내에 패치했습니다.",
            "zh": "是的，开发团队在两小时内修补了它。",
            "ja": "はい、開発チームが2時間以内にパッチを当てました。",
            "vi": "Đúng, đội ngũ phát triển đã vá nó trong vòng hai giờ.",
            "en": "Yes, the dev team patched it within two hours."
          }
        },
        {
          "role": "user",
          "text": "Has Legal been notified?",
          "translations": {
            "ko": "법률 팀에 알렸나요?",
            "zh": "法务部门已经被通知了吗？",
            "ja": "法務は通知されましたか？",
            "vi": "Pháp lý đã được thông báo chưa?",
            "en": "Has Legal been notified?"
          }
        },
        {
          "role": "ai",
          "text": "They’re preparing a disclosure statement.",
          "translations": {
            "ko": "그들은 공개 문을 준비하고 있습니다.",
            "zh": "他们正在准备披露声明。",
            "ja": "彼らは開示声明を準備しています。",
            "vi": "Họ đang chuẩn bị một tuyên bố tiết lộ.",
            "en": "They’re preparing a disclosure statement."
          }
        },
        {
          "role": "user",
          "text": "What’s our timeline for informing users?",
          "translations": {
            "ko": "사용자에게 알리는 우리의 타임라인은 무엇인가요?",
            "zh": "我们通知用户的时间表是什么？",
            "ja": "ユーザーに情報を提供するタイムラインは何ですか？",
            "vi": "Thời gian dự kiến để thông báo cho người dùng là bao lâu?",
            "en": "What’s our timeline for informing users?"
          }
        },
        {
          "role": "ai",
          "text": "Within 24 hours, per regulation.",
          "translations": {
            "ko": "규정에 따라 24시간 이내입니다.",
            "zh": "根据规定，应在24小时内。",
            "ja": "規制に従って24時間以内です。",
            "vi": "Trong vòng 24 giờ, theo quy định.",
            "en": "Within 24 hours, per regulation."
          }
        },
        {
          "role": "user",
          "text": "Do we need to alert the press?",
          "translations": {
            "ko": "언론에 알려야 하나요?",
            "zh": "我们需要通知媒体吗？",
            "ja": "プレスに警告する必要はありますか？",
            "vi": "Chúng ta cần thông báo cho báo chí không?",
            "en": "Do we need to alert the press?"
          }
        },
        {
          "role": "ai",
          "text": "Only if user sentiment spikes online.",
          "translations": {
            "ko": "사용자의 감정이 온라인에서 급증하는 경우에만 그렇습니다.",
            "zh": "只有当用户在线上情绪激增时才需要。",
            "ja": "ユーザーの感情がオンラインで急上昇する場合のみです。",
            "vi": "Chỉ khi tình cảm của người dùng tăng lên trực tuyến.",
            "en": "Only if user sentiment spikes online."
          }
        },
        {
          "role": "user",
          "text": "Is our support team briefed?",
          "translations": {
            "ko": "우리의 지원 팀은 브리핑을 받았나요?",
            "zh": "我们的支持团队已经被简报了吗？",
            "ja": "サポートチームはブリーフィングされましたか？",
            "vi": "Đội ngũ hỗ trợ của chúng ta đã được thông báo chưa?",
            "en": "Is our support team briefed?"
          }
        },
        {
          "role": "ai",
          "text": "They’re drafting response templates now.",
          "translations": {
            "ko": "그들은 현재 응답 템플릿을 작성하고 있습니다.",
            "zh": "他们正在起草回应模板。",
            "ja": "彼らは現在、レスポンステンプレートを作成しています。",
            "vi": "Họ đang soạn thảo mẫu phản hồi ngay bây giờ.",
            "en": "They’re drafting response templates now."
          }
        },
        {
          "role": "user",
          "text": "Can we delay next week’s feature release?",
          "translations": {
            "ko": "다음 주의 기능 릴리스를 연기할 수 있나요?",
            "zh": "我们可以推迟下周的功能发布吗？",
            "ja": "来週の機能リリースを延期できますか？",
            "vi": "Chúng ta có thể hoãn việc phát hành tính năng tuần sau không?",
            "en": "Can we delay next week’s feature release?"
          }
        },
        {
          "role": "ai",
          "text": "Let’s prioritize trust. Delay if needed.",
          "translations": {
            "ko": "신뢰를 우선시합시다. 필요하다면 연기합시다.",
            "zh": "让我们优先考虑信任。如果需要，可以延迟。",
            "ja": "信頼を優先しましょう。必要であれば延期します。",
            "vi": "Hãy ưu tiên sự tin tưởng. Hoãn nếu cần.",
            "en": "Let’s prioritize trust. Delay if needed."
          }
        },
        {
          "role": "user",
          "text": "Understood. Should we hold a company-wide Q&A?",
          "translations": {
            "ko": "이해했습니다. 회사 전체 Q&A를 개최해야 하나요?",
            "zh": "明白了。我们是否需要举行全公司的问答会？",
            "ja": "了解しました。会社全体のQ&Aを開催すべきですか？",
            "vi": "Hiểu rồi. Chúng ta có nên tổ chức một Q&A toàn công ty không?",
            "en": "Understood. Should we hold a company-wide Q&A?"
          }
        },
        {
          "role": "ai",
          "text": "Good idea. Let’s schedule it for tomorrow.",
          "translations": {
            "ko": "좋은 생각입니다. 내일로 일정을 잡읍시다.",
            "zh": "好主意。让我们安排在明天。",
            "ja": "良いアイデアです。明日それをスケジュールしましょう。",
            "vi": "Ý tưởng tốt. Hãy lên lịch nó vào ngày mai.",
            "en": "Good idea. Let’s schedule it for tomorrow."
          }
        },
        {
          "role": "user",
          "text": "I’ll prepare talking points for execs.",
          "translations": {
            "ko": "나는 경영진을 위한 주요 포인트를 준비하겠습니다.",
            "zh": "我会为高管准备讲话要点。",
            "ja": "私がエグゼクティブ向けのトーキングポイントを準備します。",
            "vi": "Tôi sẽ chuẩn bị các điểm nói chính cho các giám đốc.",
            "en": "I’ll prepare talking points for execs."
          }
        },
        {
          "role": "ai",
          "text": "Thanks team. Let’s stay transparent and proactive.",
          "translations": {
            "ko": "감사합니다. 팀 여러분, 투명하고 능동적으로 유지합시다.",
            "zh": "谢谢团队。让我们保持透明和积极主动。",
            "ja": "ありがとう、チーム。透明で積極的な姿勢を保ちましょう。",
            "vi": "Cảm ơn đội ngũ. Hãy duy trì sự minh bạch và chủ động.",
            "en": "Thanks team. Let’s stay transparent and proactive."
          }
        },
        {
          "role": "user",
          "text": "I’ll keep the status page updated hourly.",
          "translations": {
            "ko": "나는 상태 페이지를 매시간 업데이트하겠습니다.",
            "zh": "我会每小时更新状态页面。",
            "ja": "私がステータスページを毎時更新します。",
            "vi": "Tôi sẽ cập nhật trang trạng thái hàng giờ.",
            "en": "I’ll keep the status page updated hourly."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Evaluating resource allocation",
        "ko": "자원 배치 평가",
        "zh": "评估资源分配",
        "ja": "リソース配分の評価",
        "vi": "Đánh giá phân bổ nguồn lực"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Today’s goal is to review team resource allocation.",
          "translations": {
            "ko": "오늘의 목표는 팀 자원 배치를 검토하는 것입니다.",
            "zh": "今天的目标是回顾团队资源分配。",
            "ja": "今日の目標はチームのリソース配分を見直すことです。",
            "vi": "Mục tiêu hôm nay là xem xét việc phân bổ nguồn lực của nhóm.",
            "en": "Today’s goal is to review team resource allocation."
          }
        },
        {
          "role": "user",
          "text": "Engineering is short one backend dev.",
          "translations": {
            "ko": "엔지니어링은 백엔드 개발자 한 명이 부족합니다.",
            "zh": "工程团队缺少一个后端开发人员。",
            "ja": "エンジニアリングはバックエンド開発者が1人足りません。",
            "vi": "Kỹ thuật thiếu một dev backend.",
            "en": "Engineering is short one backend dev."
          }
        },
        {
          "role": "ai",
          "text": "Can we shift someone from the infrastructure team?",
          "translations": {
            "ko": "인프라 팀에서 누군가를 옮길 수 있나요?",
            "zh": "我们可以从基础设施团队中调动一个人吗？",
            "ja": "インフラチームから誰かを移動できますか？",
            "vi": "Chúng ta có thể chuyển ai đó từ nhóm cơ sở hạ tầng không?",
            "en": "Can we shift someone from the infrastructure team?"
          }
        },
        {
          "role": "user",
          "text": "Possibly, but there’s a learning curve.",
          "translations": {
            "ko": "가능하긴 하지만, 학습 곡선이 있습니다.",
            "zh": "可能可以，但是有一个学习曲线。",
            "ja": "可能性はありますが、学習曲線があります。",
            "vi": "Có thể, nhưng có một quá trình học hỏi.",
            "en": "Possibly, but there’s a learning curve."
          }
        },
        {
          "role": "ai",
          "text": "What about hiring a contractor short-term?",
          "translations": {
            "ko": "단기간 계약자를 고용하는 것은 어떨까요?",
            "zh": "那么短期雇佣一个承包商怎么样？",
            "ja": "短期間の契約者を雇うことはできますか？",
            "vi": "Còn về việc thuê một nhà thầu ngắn hạn?",
            "en": "What about hiring a contractor short-term?"
          }
        },
        {
          "role": "user",
          "text": "Budget might allow for a 3-month role.",
          "translations": {
            "ko": "예산이 3개월짜리 역할을 허용할 수 있을지도 모릅니다.",
            "zh": "预算可能允许一个3个月的角色。",
            "ja": "予算は3ヶ月間の役割を許可するかもしれません。",
            "vi": "Ngân sách có thể cho phép một vai trò 3 tháng.",
            "en": "Budget might allow for a 3-month role."
          }
        },
        {
          "role": "ai",
          "text": "Let’s confirm with Finance this afternoon.",
          "translations": {
            "ko": "오후에 재무팀과 확인하겠습니다.",
            "zh": "让我们今天下午和财务部门确认一下。",
            "ja": "今日の午後にファイナンスと確認しましょう。",
            "vi": "Hãy xác nhận với Tài chính vào buổi chiều nay.",
            "en": "Let’s confirm with Finance this afternoon."
          }
        },
        {
          "role": "user",
          "text": "Design team also requested an additional UX lead.",
          "translations": {
            "ko": "디자인 팀도 추가 UX 리드를 요청했습니다.",
            "zh": "设计团队也请求增加一个用户体验领导。",
            "ja": "デザインチームも追加のUXリードを要求しました。",
            "vi": "Nhóm thiết kế cũng yêu cầu thêm một người dẫn dắt UX.",
            "en": "Design team also requested an additional UX lead."
          }
        },
        {
          "role": "ai",
          "text": "That’s noted. Prioritization needed based on OKRs.",
          "translations": {
            "ko": "그것은 기록되었습니다. OKR에 기반한 우선 순위 결정이 필요합니다.",
            "zh": "已经记录下来。根据OKR进行优先级排序。",
            "ja": "それは記録されています。OKRに基づいた優先順位付けが必要です。",
            "vi": "Điều đó đã được ghi chú. Cần ưu tiên dựa trên OKR.",
            "en": "That’s noted. Prioritization needed based on OKRs."
          }
        },
        {
          "role": "user",
          "text": "How about deferring the admin project?",
          "translations": {
            "ko": "관리 프로젝트를 연기하는 것은 어떨까요?",
            "zh": "我们可以推迟行政项目吗？",
            "ja": "管理プロジェクトを延期するのはどうですか？",
            "vi": "Còn về việc hoãn dự án quản trị?",
            "en": "How about deferring the admin project?"
          }
        },
        {
          "role": "ai",
          "text": "It’s lower urgency. That could free bandwidth.",
          "translations": {
            "ko": "그것은 낮은 긴급성입니다. 그것이 대역폭을 확보할 수 있을지도 모릅니다.",
            "zh": "它的紧迫性较低。这可能会释放出带宽。",
            "ja": "それは緊急性が低いです。それが帯域を解放する可能性があります。",
            "vi": "Đó là ưu tiên thấp hơn. Điều đó có thể giải phóng băng thông.",
            "en": "It’s lower urgency. That could free bandwidth."
          }
        },
        {
          "role": "user",
          "text": "I’ll update the planning sheet.",
          "translations": {
            "ko": "나는 계획 시트를 업데이트하겠습니다.",
            "zh": "我会更新计划表。",
            "ja": "私が計画シートを更新します。",
            "vi": "Tôi sẽ cập nhật bảng kế hoạch.",
            "en": "I’ll update the planning sheet."
          }
        },
        {
          "role": "ai",
          "text": "Let’s reconvene Friday to finalize moves.",
          "translations": {
            "ko": "이동을 확정하기 위해 금요일에 다시 모이겠습니다.",
            "zh": "让我们在周五再次会面以确定移动。",
            "ja": "金曜日に再会して移動を最終化しましょう。",
            "vi": "Hãy họp lại vào thứ Sáu để hoàn thiện các bước di chuyển.",
            "en": "Let’s reconvene Friday to finalize moves."
          }
        },
        {
          "role": "user",
          "text": "Sounds good. I’ll notify team leads.",
          "translations": {
            "ko": "좋습니다. 팀 리드에게 알리겠습니다.",
            "zh": "听起来不错。我会通知团队领导。",
            "ja": "良いですね。私がチームリーダーに通知します。",
            "vi": "Nghe có vẻ tốt. Tôi sẽ thông báo cho các nhóm trưởng.",
            "en": "Sounds good. I’ll notify team leads."
          }
        },
        {
          "role": "ai",
          "text": "Thanks. Let’s aim for minimum disruption.",
          "translations": {
            "ko": "감사합니다. 최소한의 방해를 목표로 합시다.",
            "zh": "谢谢。让我们尽量减少干扰。",
            "ja": "ありがとう。最小限の混乱を目指しましょう。",
            "vi": "Cảm ơn. Hãy nhắm đến sự gián đoạn tối thiểu.",
            "en": "Thanks. Let’s aim for minimum disruption."
          }
        },
        {
          "role": "user",
          "text": "I’ll send out updates to affected stakeholders.",
          "translations": {
            "ko": "나는 관련 이해관계자에게 업데이트를 보내겠습니다.",
            "zh": "我会向受影响的利益相关者发送更新。",
            "ja": "影響を受ける関係者に更新情報を送ります。",
            "vi": "Tôi sẽ gửi cập nhật cho các bên liên quan.",
            "en": "I’ll send out updates to affected stakeholders."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Clarifying unclear action items post-meeting",
        "ko": "회의 후 불분명한 행동 항목 명확화",
        "zh": "在会议后澄清不清楚的行动项目",
        "ja": "会議後の不明確なアクションアイテムを明確にする",
        "vi": "Làm rõ các mục tiêu hành động không rõ ràng sau cuộc họp"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Let’s clarify some confusing takeaways from Tuesday.",
          "translations": {
            "ko": "화요일의 혼란스러운 결론을 명확히 해봅시다.",
            "zh": "让我们澄清一下周二的一些混淆的收获。",
            "ja": "火曜日の混乱する持ち帰りを明確にしましょう。",
            "vi": "Hãy làm rõ một số điểm rối rắm từ cuộc họp thứ Ba.",
            "en": "Let’s clarify some confusing takeaways from Tuesday."
          }
        },
        {
          "role": "user",
          "text": "Was I assigned the client onboarding doc?",
          "translations": {
            "ko": "저는 고객 온보딩 문서를 맡은 건가요?",
            "zh": "我被分配了客户入职文档吗？",
            "ja": "私がクライアントのオンボーディングドキュメントを担当していましたか？",
            "vi": "Tôi có được giao tài liệu đưa người dùng vào sử dụng không?",
            "en": "Was I assigned the client onboarding doc?"
          }
        },
        {
          "role": "ai",
          "text": "Yes, due Friday. Can you confirm?",
          "translations": {
            "ko": "네, 금요일까지입니다. 확인할 수 있나요?",
            "zh": "是的，周五之前。你能确认吗？",
            "ja": "はい、金曜日までに。確認できますか？",
            "vi": "Đúng, hạn vào thứ Sáu. Bạn có thể xác nhận không?",
            "en": "Yes, due Friday. Can you confirm?"
          }
        },
        {
          "role": "user",
          "text": "Got it. And who owns the API integration plan?",
          "translations": {
            "ko": "알겠습니다. 그리고 API 통합 계획을 누가 맡나요?",
            "zh": "明白了。那API集成计划是谁负责的？",
            "ja": "了解しました。そしてAPI統合計画のオーナーは誰ですか？",
            "vi": "Hiểu rồi. Và ai sở hữu kế hoạch tích hợp API?",
            "en": "Got it. And who owns the API integration plan?"
          }
        },
        {
          "role": "ai",
          "text": "That’s with Arjun, due next Wednesday.",
          "translations": {
            "ko": "그것은 Arjun이 맡고, 다음 수요일까지입니다.",
            "zh": "那是Arjun的，下周三之前。",
            "ja": "それはアルジュンが担当し、来週の水曜日までです。",
            "vi": "Đó là với Arjun, hạn vào thứ Tư tuần sau.",
            "en": "That’s with Arjun, due next Wednesday."
          }
        },
        {
          "role": "user",
          "text": "Do I also need to review the budget proposal?",
          "translations": {
            "ko": "저도 예산 제안을 검토해야 하나요?",
            "zh": "我还需要审查预算提案吗？",
            "ja": "予算提案のレビューも必要ですか？",
            "vi": "Tôi cũng cần xem xét đề xuất ngân sách không?",
            "en": "Do I also need to review the budget proposal?"
          }
        },
        {
          "role": "ai",
          "text": "Only provide comments—not full approval.",
          "translations": {
            "ko": "단지 의견을 제공하기만 하면 됩니다 - 전체 승인은 필요하지 않습니다.",
            "zh": "只需要提供评论，不需要完全批准。",
            "ja": "コメントの提供のみで、完全な承認は必要ありません。",
            "vi": "Chỉ cung cấp ý kiến - không phải phê duyệt đầy đủ.",
            "en": "Only provide comments—not full approval."
          }
        },
        {
          "role": "user",
          "text": "Thanks. Can we get all tasks into Asana?",
          "translations": {
            "ko": "감사합니다. 모든 작업을 Asana에 넣을 수 있을까요?",
            "zh": "谢谢。我们可以把所有任务都放到Asana上吗？",
            "ja": "ありがとう。全てのタスクをAsanaに入れることはできますか？",
            "vi": "Cảm ơn. Chúng ta có thể đưa tất cả các nhiệm vụ vào Asana không?",
            "en": "Thanks. Can we get all tasks into Asana?"
          }
        },
        {
          "role": "ai",
          "text": "I’ve added them, but need deadlines confirmed.",
          "translations": {
            "ko": "추가했습니다만, 마감일을 확인해야 합니다.",
            "zh": "我已经添加了他们，但需要确认截止日期。",
            "ja": "それらを追加しましたが、締め切りの確認が必要です。",
            "vi": "Tôi đã thêm chúng, nhưng cần xác nhận thời hạn.",
            "en": "I’ve added them, but need deadlines confirmed."
          }
        },
        {
          "role": "user",
          "text": "I’ll handle mine by EOD.",
          "translations": {
            "ko": "나는 EOD까지 내 것을 처리하겠습니다.",
            "zh": "我会在今天结束工作前处理我的。",
            "ja": "私の方は今日中に対応します。",
            "vi": "Tôi sẽ xử lý phần của mình vào cuối ngày.",
            "en": "I’ll handle mine by EOD."
          }
        },
        {
          "role": "ai",
          "text": "Perfect. Let’s update the team in Slack.",
          "translations": {
            "ko": "완벽합니다. 팀에게 Slack에서 업데이트합시다.",
            "zh": "完美。让我们在Slack中更新团队。",
            "ja": "完璧です。チームをSlackで更新しましょう。",
            "vi": "Hoàn hảo. Hãy cập nhật nhóm trong Slack.",
            "en": "Perfect. Let’s update the team in Slack."
          }
        },
        {
          "role": "user",
          "text": "Will do after this call.",
          "translations": {
            "ko": "이 통화 후에 그렇게 하겠습니다.",
            "zh": "会议结束后我会处理。",
            "ja": "この通話の後に行います。",
            "vi": "Sẽ làm sau cuộc gọi này.",
            "en": "Will do after this call."
          }
        },
        {
          "role": "ai",
          "text": "Anything else unclear?",
          "translations": {
            "ko": "다른 불분명한 사항이 있나요?",
            "zh": "还有其他不清楚的事情吗？",
            "ja": "他に不明確なことはありますか？",
            "vi": "Còn điều gì không rõ ràng nữa không?",
            "en": "Anything else unclear?"
          }
        },
        {
          "role": "user",
          "text": "Nope, we’re aligned now.",
          "translations": {
            "ko": "아니요, 이제 우리는 일치합니다.",
            "zh": "没有，我们现在已经对齐了。",
            "ja": "いいえ、今は一致しています。",
            "vi": "Không, chúng tôi đã đồng lòng bây giờ.",
            "en": "Nope, we’re aligned now."
          }
        },
        {
          "role": "ai",
          "text": "Thanks for helping untangle things.",
          "translations": {
            "ko": "혼란스러운 것들을 풀어주셔서 감사합니다.",
            "zh": "谢谢你帮助解决问题。",
            "ja": "物事を解きほぐすのを手伝ってくれてありがとう。",
            "vi": "Cảm ơn đã giúp làm rõ mọi thứ.",
            "en": "Thanks for helping untangle things."
          }
        },
        {
          "role": "user",
          "text": "It’s much clearer now. I’ll relay it to the team.",
          "translations": {
            "ko": "이제 훨씬 명확합니다. 팀에 전달하겠습니다.",
            "zh": "现在清楚多了。我会把它传达给团队。",
            "ja": "今はずっと明確です。私がチームに伝えます。",
            "vi": "Rõ ràng hơn nhiều. Tôi sẽ truyền đạt nó cho nhóm.",
            "en": "It’s much clearer now. I’ll relay it to the team."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Recapping executive decisions",
        "ko": "경영진의 결정 요약",
        "zh": "总结执行决策",
        "ja": "エグゼクティブの決定をまとめる",
        "vi": "Tóm tắt các quyết định của ban điều hành"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Let’s review decisions made during the exec sync.",
          "translations": {
            "ko": "경영진 동기화 중에 내린 결정을 검토해봅시다.",
            "zh": "让我们回顾一下在执行同步中做出的决策。",
            "ja": "エグゼクティブの同期中に行われた決定を見直しましょう。",
            "vi": "Hãy xem xét các quyết định được đưa ra trong cuộc đồng bộ hóa ban điều hành.",
            "en": "Let’s review decisions made during the exec sync."
          }
        },
        {
          "role": "user",
          "text": "They approved moving forward with the vendor switch.",
          "translations": {
            "ko": "그들은 공급업체 변경을 진행하는 것을 승인했습니다.",
            "zh": "他们批准了与供应商切换的计划。",
            "ja": "彼らはベンダーの切り替えを進めることを承認しました。",
            "vi": "Họ đã phê duyệt việc tiếp tục chuyển đổi nhà cung cấp.",
            "en": "They approved moving forward with the vendor switch."
          }
        },
        {
          "role": "ai",
          "text": "What was the timeline?",
          "translations": {
            "ko": "타임라인은 어떻게 되나요?",
            "zh": "时间表是什么？",
            "ja": "タイムラインは何でしたか？",
            "vi": "Thời gian là bao lâu?",
            "en": "What was the timeline?"
          }
        },
        {
          "role": "user",
          "text": "Contract signed by end of month, kickoff next quarter.",
          "translations": {
            "ko": "계약은 이달 말까지 체결되고, 다음 분기에 시작됩니다.",
            "zh": "本月底签订合同，下个季度开始。",
            "ja": "月末までに契約を締結し、次の四半期に開始します。",
            "vi": "Hợp đồng ký kết vào cuối tháng, bắt đầu vào quý sau.",
            "en": "Contract signed by end of month, kickoff next quarter."
          }
        },
        {
          "role": "ai",
          "text": "Budget implications?",
          "translations": {
            "ko": "예산에 대한 영향은?",
            "zh": "预算影响？",
            "ja": "予算の影響は？",
            "vi": "Hậu quả về ngân sách?",
            "en": "Budget implications?"
          }
        },
        {
          "role": "user",
          "text": "Slight increase, but better support.",
          "translations": {
            "ko": "약간 증가하지만, 더 나은 지원입니다.",
            "zh": "略有增加，但支持更好。",
            "ja": "わずかな増加ですが、サポートが改善します。",
            "vi": "Tăng nhẹ, nhưng hỗ trợ tốt hơn.",
            "en": "Slight increase, but better support."
          }
        },
        {
          "role": "ai",
          "text": "Was the reorg plan finalized?",
          "translations": {
            "ko": "재편 계획이 확정되었나요?",
            "zh": "重组计划是否已经最后确定？",
            "ja": "再編計画は最終化されましたか？",
            "vi": "Kế hoạch tái tổ chức đã được hoàn thiện chưa?",
            "en": "Was the reorg plan finalized?"
          }
        },
        {
          "role": "user",
          "text": "Yes, roles shift starting next Monday.",
          "translations": {
            "ko": "네, 역할은 다음 주 월요일부터 변경됩니다.",
            "zh": "是的，角色从下周一开始转变。",
            "ja": "はい、役割は来週の月曜日からシフトします。",
            "vi": "Đúng, vai trò thay đổi bắt đầu từ thứ Hai tuần sau.",
            "en": "Yes, roles shift starting next Monday."
          }
        },
        {
          "role": "ai",
          "text": "How about remote work policy?",
          "translations": {
            "ko": "원격 작업 정책은 어떻게 되나요?",
            "zh": "关于远程工作政策呢？",
            "ja": "リモートワークの方針はどうでしたか？",
            "vi": "Còn chính sách làm việc từ xa?",
            "en": "How about remote work policy?"
          }
        },
        {
          "role": "user",
          "text": "Staying hybrid, with flexible Fridays.",
          "translations": {
            "ko": "유연한 금요일과 함께 하이브리드를 유지합니다.",
            "zh": "保持混合模式，周五灵活。",
            "ja": "ハイブリッドを維持し、金曜日はフレキシブルです。",
            "vi": "Vẫn là lai, với thứ Sáu linh hoạt.",
            "en": "Staying hybrid, with flexible Fridays."
          }
        },
        {
          "role": "ai",
          "text": "Product launch date?",
          "translations": {
            "ko": "제품 출시 날짜는?",
            "zh": "产品发布日期？",
            "ja": "製品のローンチ日は？",
            "vi": "Ngày phát hành sản phẩm?",
            "en": "Product launch date?"
          }
        },
        {
          "role": "user",
          "text": "Still July 10, pending final QA.",
          "translations": {
            "ko": "여전히 7월 10일이며, 최종 QA를 대기하고 있습니다.",
            "zh": "仍然是7月10日，等待最后的质量保证。",
            "ja": "最終的なQAを待って、依然として7月10日です。",
            "vi": "Vẫn là ngày 10 tháng 7, chờ kiểm tra cuối cùng.",
            "en": "Still July 10, pending final QA."
          }
        },
        {
          "role": "ai",
          "text": "Any team concerns raised?",
          "translations": {
            "ko": "팀의 우려사항이 제기되었나요?",
            "zh": "有团队关注的问题吗？",
            "ja": "チームの懸念は上がりましたか？",
            "vi": "Có mối quan tâm nào của nhóm được đưa ra không?",
            "en": "Any team concerns raised?"
          }
        },
        {
          "role": "user",
          "text": "Mostly about training during the transition.",
          "translations": {
            "ko": "대부분은 전환 기간 동안의 교육에 대한 것입니다.",
            "zh": "主要是关于过渡期间的培训。",
            "ja": "主に移行期間中のトレーニングについてです。",
            "vi": "Chủ yếu là về việc đào tạo trong quá trình chuyển đổi.",
            "en": "Mostly about training during the transition."
          }
        },
        {
          "role": "ai",
          "text": "We’ll schedule onboarding sessions.",
          "translations": {
            "ko": "온보딩 세션을 예정하겠습니다.",
            "zh": "我们将安排入职培训。",
            "ja": "オンボーディングセッションをスケジュールします。",
            "vi": "Chúng tôi sẽ lên lịch các phiên đào tạo.",
            "en": "We’ll schedule onboarding sessions."
          }
        },
        {
          "role": "user",
          "text": "Good. I’ll help coordinate.",
          "translations": {
            "ko": "좋습니다. 도와드리겠습니다.",
            "zh": "好的。我会帮助协调。",
            "ja": "良いです。私が協力します。",
            "vi": "Tốt. Tôi sẽ giúp phối hợp.",
            "en": "Good. I’ll help coordinate."
          }
        },
        {
          "role": "ai",
          "text": "Let’s post a recap in the #exec-highlights channel.",
          "translations": {
            "ko": "#exec-highlights 채널에 요약을 게시합시다.",
            "zh": "让我们在#exec-highlights频道中发布回顾。",
            "ja": "#exec-highlightsチャンネルにリキャップを投稿しましょう。",
            "vi": "Hãy đăng một bản tóm tắt trong kênh #exec-highlights.",
            "en": "Let’s post a recap in the #exec-highlights channel."
          }
        },
        {
          "role": "user",
          "text": "I’ll draft the post this afternoon.",
          "translations": {
            "ko": "나는 이 오후에 게시물을 작성하겠습니다.",
            "zh": "我会在今天下午起草帖子。",
            "ja": "今日の午後に投稿のドラフトを作成します。",
            "vi": "Tôi sẽ soạn thảo bài đăng vào buổi chiều nay.",
            "en": "I’ll draft the post this afternoon."
          }
        },
        {
          "role": "ai",
          "text": "Let’s wrap this up with final confirmations.",
          "translations": {
            "ko": "최종 확인으로 이것을 마무리합시다.",
            "zh": "让我们以最后的确认结束这次会议。",
            "ja": "最終的な確認でこれを終わりにしましょう。",
            "vi": "Hãy kết thúc với việc xác nhận cuối cùng.",
            "en": "Let’s wrap this up with final confirmations."
          }
        },
        {
          "role": "user",
          "text": "I’ll follow up with a summary email shortly.",
          "translations": {
            "ko": "곧 요약 이메일을 보내겠습니다.",
            "zh": "我会尽快发送一封总结邮件。",
            "ja": "すぐに要約メールを送ります。",
            "vi": "Tôi sẽ gửi email tóm tắt ngay sau đây.",
            "en": "I’ll follow up with a summary email shortly."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Finalizing a merger integration timeline",
        "ko": "합병 통합 타임라인 확정",
        "zh": "确定合并整合时间表",
        "ja": "合併統合の最終タイムラインを確定する",
        "vi": "Hoàn thiện một dòng thời gian tích hợp hợp nhất"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Let’s align on the final timeline for integration.",
          "translations": {
            "ko": "통합에 대한 최종 타임라인에 대해 일치시킵시다.",
            "zh": "让我们就整合的最后时间表达成一致。",
            "ja": "統合の最終タイムラインについて合意しましょう。",
            "vi": "Hãy thống nhất về dòng thời gian cuối cùng cho việc tích hợp.",
            "en": "Let’s align on the final timeline for integration."
          }
        },
        {
          "role": "user",
          "text": "HR suggests a three-phase rollout.",
          "translations": {
            "ko": "인사팀은 세 단계 롤아웃을 제안합니다.",
            "zh": "人力资源部建议分三阶段推出。",
            "ja": "HRは3フェーズのロールアウトを提案しています。",
            "vi": "HR đề xuất triển khai ba giai đoạn.",
            "en": "HR suggests a three-phase rollout."
          }
        },
        {
          "role": "ai",
          "text": "What’s phase one?",
          "translations": {
            "ko": "첫 번째 단계는 무엇인가요?",
            "zh": "第一阶段是什么？",
            "ja": "フェーズ1は何ですか？",
            "vi": "Giai đoạn một là gì?",
            "en": "What’s phase one?"
          }
        },
        {
          "role": "user",
          "text": "Legal alignment and payroll syncing.",
          "translations": {
            "ko": "법적 조정 및 급여 동기화입니다.",
            "zh": "法律对齐和工资同步。",
            "ja": "法的な調整と給与の同期です。",
            "vi": "Đồng lòng pháp lý và đồng bộ hóa tiền lương.",
            "en": "Legal alignment and payroll syncing."
          }
        },
        {
          "role": "ai",
          "text": "And two?",
          "translations": {
            "ko": "두 번째는요?",
            "zh": "第二阶段呢？",
            "ja": "そしてフェーズ2は？",
            "vi": "Và hai?",
            "en": "And two?"
          }
        },
        {
          "role": "user",
          "text": "IT systems and branding updates.",
          "translations": {
            "ko": "IT 시스템 및 브랜딩 업데이트입니다.",
            "zh": "IT系统和品牌更新。",
            "ja": "ITシステムとブランディングの更新です。",
            "vi": "Hệ thống IT và cập nhật thương hiệu.",
            "en": "IT systems and branding updates."
          }
        },
        {
          "role": "ai",
          "text": "Final phase?",
          "translations": {
            "ko": "마지막 단계는요?",
            "zh": "最后阶段？",
            "ja": "最終フェーズは？",
            "vi": "Giai đoạn cuối cùng?",
            "en": "Final phase?"
          }
        },
        {
          "role": "user",
          "text": "Team restructuring and shared tooling.",
          "translations": {
            "ko": "팀 재구성 및 공유 도구입니다.",
            "zh": "团队重组和共享工具。",
            "ja": "チームの再構成と共有ツールです。",
            "vi": "Tái cấu trúc nhóm và công cụ chung.",
            "en": "Team restructuring and shared tooling."
          }
        },
        {
          "role": "ai",
          "text": "What’s our target close date?",
          "translations": {
            "ko": "우리의 목표 마감일은 언제인가요?",
            "zh": "我们的目标关闭日期是什么？",
            "ja": "目標とするクローズ日は何ですか？",
            "vi": "Ngày kết thúc mục tiêu của chúng ta là gì?",
            "en": "What’s our target close date?"
          }
        },
        {
          "role": "user",
          "text": "September 30, assuming approvals.",
          "translations": {
            "ko": "승인이 있을 경우 9월 30일입니다.",
            "zh": "9月30日，假设获得批准。",
            "ja": "承認があれば、9月30日です。",
            "vi": "Ngày 30 tháng 9, giả sử có sự chấp thuận.",
            "en": "September 30, assuming approvals."
          }
        },
        {
          "role": "ai",
          "text": "Do we need external consultants?",
          "translations": {
            "ko": "외부 컨설턴트가 필요한가요?",
            "zh": "我们需要外部顾问吗？",
            "ja": "外部のコンサルタントは必要ですか？",
            "vi": "Chúng ta cần tư vấn viên bên ngoài không?",
            "en": "Do we need external consultants?"
          }
        },
        {
          "role": "user",
          "text": "Only for IT migration.",
          "translations": {
            "ko": "IT 마이그레이션에 대해서만 필요합니다.",
            "zh": "只需要IT迁移。",
            "ja": "IT移行のみです。",
            "vi": "Chỉ dành cho di chuyển IT.",
            "en": "Only for IT migration."
          }
        },
        {
          "role": "ai",
          "text": "What’s our internal kickoff date?",
          "translations": {
            "ko": "우리의 내부 킥오프 날짜는 언제인가요?",
            "zh": "我们的内部启动日期是什么？",
            "ja": "内部のキックオフ日は何ですか？",
            "vi": "Ngày khởi động nội bộ của chúng ta là khi nào?",
            "en": "What’s our internal kickoff date?"
          }
        },
        {
          "role": "user",
          "text": "June 5.",
          "translations": {
            "ko": "6월 5일입니다.",
            "zh": "6月5日。",
            "ja": "6月5日です。",
            "vi": "Ngày 5 tháng 6.",
            "en": "June 5."
          }
        },
        {
          "role": "ai",
          "text": "Let’s confirm with both CFOs by Friday.",
          "translations": {
            "ko": "금요일까지 두 CFO에게 확인합시다.",
            "zh": "让我们在周五之前与两位CFO确认。",
            "ja": "両方のCFOに金曜日までに確認しましょう。",
            "vi": "Hãy xác nhận với cả hai CFO vào thứ Sáu.",
            "en": "Let’s confirm with both CFOs by Friday."
          }
        },
        {
          "role": "user",
          "text": "I’ll send calendar holds today.",
          "translations": {
            "ko": "나는 오늘 캘린더 홀드를 보내겠습니다.",
            "zh": "我会今天发送日历保留。",
            "ja": "今日カレンダーホールドを送ります。",
            "vi": "Tôi sẽ gửi lịch hẹn hôm nay.",
            "en": "I’ll send calendar holds today."
          }
        },
        {
          "role": "ai",
          "text": "We’ll also need internal comms ready.",
          "translations": {
            "ko": "또한 내부 커뮤니케이션을 준비해야 합니다.",
            "zh": "我们还需要准备内部通信。",
            "ja": "内部コミュニケーションも準備が必要です。",
            "vi": "Chúng ta cũng cần sẵn sàng thông tin nội bộ.",
            "en": "We’ll also need internal comms ready."
          }
        },
        {
          "role": "user",
          "text": "Agreed. I’ll write a first draft by EOD.",
          "translations": {
            "ko": "동의합니다. 나는 EOD까지 초안을 작성하겠습니다.",
            "zh": "同意。我会在今天结束工作前写出初稿。",
            "ja": "同意します。私がEODまでに初稿を書きます。",
            "vi": "Đồng ý. Tôi sẽ viết bản nháp đầu tiên vào cuối ngày.",
            "en": "Agreed. I’ll write a first draft by EOD."
          }
        },
        {
          "role": "ai",
          "text": "Let’s wrap this up with final confirmations.",
          "translations": {
            "ko": "최종 확인으로 이것을 마무리합시다.",
            "zh": "让我们以最后的确认结束这次会议。",
            "ja": "最終的な確認でこれを終わりにしましょう。",
            "vi": "Hãy kết thúc với việc xác nhận cuối cùng.",
            "en": "Let’s wrap this up with final confirmations."
          }
        },
        {
          "role": "user",
          "text": "I’ll follow up with a summary email shortly.",
          "translations": {
            "ko": "곧 요약 이메일을 보내겠습니다.",
            "zh": "我会尽快发送一封总结邮件。",
            "ja": "すぐに要約メールを送ります。",
            "vi": "Tôi sẽ gửi email tóm tắt ngay sau đây.",
            "en": "I’ll follow up with a summary email shortly."
          }
        }
      ]
    }
  ]
};