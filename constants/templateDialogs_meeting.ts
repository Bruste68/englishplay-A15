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
        "ko": "주간 팀 회의 일정 짜기",
        "zh": "安排每周团队会议",
        "ja": "週次チームミーティングのスケジュールを立てる",
        "vi": "Lập lịch cho cuộc họp nhóm hàng tuần"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Hey everyone, let’s figure out the best time for our weekly meeting.",
          "translations": {
            "ko": "여러분, 주간 회의에 가장 적합한 시간을 정해봅시다.",
            "zh": "大家好，让我们确定一下每周会议的最佳时间。",
            "ja": "皆さん、週次ミーティングの最適な時間を決めましょう。",
            "vi": "Chào mọi người, hãy cùng xác định thời gian tốt nhất cho cuộc họp hàng tuần của chúng ta."
          }
        },
        {
          "role": "user",
          "text": "I think Monday mornings could work, but not too early.",
          "translations": {
            "ko": "월요일 아침이 괜찮을 것 같은데, 너무 이른 시간은 아니었으면 좋겠어요.",
            "zh": "我觉得周一早上可能可以，但不要太早。",
            "ja": "月曜日の朝が良いと思いますが、あまり早くはない方がいいです。",
            "vi": "Tôi nghĩ buổi sáng thứ Hai có thể phù hợp, nhưng không quá sớm."
          }
        },
        {
          "role": "ai",
          "text": "Does Monday morning work for most of you?",
          "translations": {
            "ko": "대부분의 여러분에게 월요일 아침이 괜찮나요?",
            "zh": "大部分人周一早上有空吗？",
            "ja": "月曜日の朝は大半の方に都合が良いですか？",
            "vi": "Buổi sáng thứ Hai có phù hợp với hầu hết mọi người không?"
          }
        },
        {
          "role": "user",
          "text": "What about 10 AM? That leaves time to prep.",
          "translations": {
            "ko": "오전 10시는 어떨까요? 그럼 준비할 시간이 충분히 있을 것입니다.",
            "zh": "10点怎么样？这样还有时间准备。",
            "ja": "午前10時はどうでしょうか？準備の時間も取れます。",
            "vi": "Còn về 10 giờ sáng thì sao? Điều này sẽ để lại thời gian để chuẩn bị."
          }
        },
        {
          "role": "ai",
          "text": "We want to make sure it doesn’t conflict with other priorities.",
          "translations": {
            "ko": "다른 중요한 일정과 겹치지 않게 하려고 합니다.",
            "zh": "我们要确保它不会与其他优先事项冲突。",
            "ja": "他の優先事項との競合がないことを確認したいです。",
            "vi": "Chúng ta muốn đảm bảo nó không xung đột với các ưu tiên khác."
          }
        },
        {
          "role": "user",
          "text": "I have a conflict on Mondays after lunch.",
          "translations": {
            "ko": "저는 월요일 점심 후에 다른 일정이 겹쳐요.",
            "zh": "周一午饭后我有其他安排。",
            "ja": "月曜日の昼食後は都合が悪いです。",
            "vi": "Tôi có một mâu thuẫn vào thứ Hai sau bữa trưa."
          }
        },
        {
          "role": "ai",
          "text": "Should we consider a recurring calendar invite?",
          "translations": {
            "ko": "반복되는 캘린더 초대를 고려해볼까요?",
            "zh": "我们是否应该考虑定期的日历邀请？",
            "ja": "定期的なカレンダーの招待を考慮すべきですか？",
            "vi": "Chúng ta có nên xem xét một lời mời lịch định kỳ không?"
          }
        },
        {
          "role": "user",
          "text": "A recurring invite would help me remember.",
          "translations": {
            "ko": "반복 초대가 있으면 기억하기 편할 것 같아요.",
            "zh": "定期的邀请会帮助我记住。",
            "ja": "定期的な招待があると覚えていられます。",
            "vi": "Một lời mời định kỳ sẽ giúp tôi nhớ."
          }
        },
        {
          "role": "ai",
          "text": "How long should the meeting be? Thirty minutes or an hour?",
          "translations": {
            "ko": "회의는 얼마나 길게 할까요? 30분 또는 1시간?",
            "zh": "会议应该持续多久？三十分钟还是一个小时？",
            "ja": "ミーティングはどのくらいの時間が必要ですか？30分か1時間？",
            "vi": "Cuộc họp nên kéo dài bao lâu? Ba mươi phút hay một giờ?"
          }
        },
        {
          "role": "user",
          "text": "Thirty minutes should be enough for now.",
          "translations": {
            "ko": "일단은 30분이면 충분할 것 같습니다.",
            "zh": "目前来看，三十分钟应该足够了。",
            "ja": "今のところ30分で十分だと思います。",
            "vi": "Ba mươi phút nên đủ cho bây giờ."
          }
        },
        {
          "role": "ai",
          "text": "Would mornings or afternoons be more productive?",
          "translations": {
            "ko": "오전과 오후 중 어느 시간이 더 생산적일까요?",
            "zh": "上午还是下午更有成效？",
            "ja": "朝と午後、どちらが生産的ですか？",
            "vi": "Buổi sáng hay buổi chiều sẽ hiệu quả hơn?"
          }
        },
        {
          "role": "user",
          "text": "Mornings are better for my focus.",
          "translations": {
            "ko": "저는 오전이 집중하기 더 좋아요.",
            "zh": "对我来说，早上更容易集中注意力。",
            "ja": "私の集中力は朝の方が高いです。",
            "vi": "Buổi sáng tốt hơn cho sự tập trung của tôi."
          }
        },
        {
          "role": "ai",
          "text": "Let’s also decide who will lead each week’s meeting.",
          "translations": {
            "ko": "또한 매주 회의를 이끌 사람을 정해야 합니다.",
            "zh": "让我们也决定谁将主持每周的会议。",
            "ja": "また、毎週のミーティングを誰がリードするかも決めましょう。",
            "vi": "Hãy cũng quyết định ai sẽ dẫn dắt cuộc họp hàng tuần."
          }
        },
        {
          "role": "user",
          "text": "I'm happy to lead the first session.",
          "translations": {
            "ko": "첫 세션은 제가 이끌게요.",
            "zh": "我很乐意主持第一次会议。",
            "ja": "最初のセッションは私がリードします。",
            "vi": "Tôi sẽ rất vui khi dẫn dắt phiên đầu tiên."
          }
        },
        {
          "role": "ai",
          "text": "We can rotate facilitators to keep it balanced.",
          "translations": {
            "ko": "균형을 유지하기 위해 회의 주재를 돌아가며 맡는 것이 좋겠습니다.",
            "zh": "我们可以轮流主持，保持平衡。",
            "ja": "ファシリテーターをローテーションさせてバランスを保つことができます。",
            "vi": "Chúng ta có thể thay phiên nhau làm người điều hành để giữ sự cân bằng."
          }
        },
        {
          "role": "user",
          "text": "Rotating sounds fair to me.",
          "translations": {
            "ko": "돌아가며 하는 것이 공평하다고 생각합니다.",
            "zh": "对我来说，轮流主持听起来很公平。",
            "ja": "ローテーションは公平だと思います。",
            "vi": "Thay phiên nhau nghe có vẻ công bằng với tôi."
          }
        },
        {
          "role": "ai",
          "text": "I’ll take notes and share the summary afterward.",
          "translations": {
            "ko": "저는 회의록을 작성하고 나중에 요약본을 공유하겠습니다.",
            "zh": "我会做笔记并在会后分享总结。",
            "ja": "ノートを取り、後で要約を共有します。",
            "vi": "Tôi sẽ ghi chú và chia sẻ bản tóm tắt sau đó."
          }
        },
        {
          "role": "user",
          "text": "Thanks. Notes would be helpful.",
          "translations": {
            "ko": "감사합니다. 회의록이 도움이 될 것 같아요.",
            "zh": "谢谢。笔记会很有帮助。",
            "ja": "ありがとう。ノートは役立ちます。",
            "vi": "Cảm ơn. Ghi chú sẽ hữu ích."
          }
        },
        {
          "role": "ai",
          "text": "Let’s confirm the time by the end of the day.",
          "translations": {
            "ko": "오늘 하루가 끝나기 전에 시간을 확정합시다.",
            "zh": "让我们在今天结束前确认时间。",
            "ja": "今日中に時間を確定しましょう。",
            "vi": "Hãy xác nhận thời gian vào cuối ngày."
          }
        },
        {
          "role": "user",
          "text": "Agreed. Let’s lock it in today.",
          "translations": {
            "ko": "동의합니다. 오늘 안에 확정합시다.",
            "zh": "同意。让我们今天确定下来。",
            "ja": "同意します。今日中に決定しましょう。",
            "vi": "Đồng ý. Hãy khóa nó vào hôm nay."
          }
        }
      ]
    },
    {
      "description": {
        "ko": "회의 목표를 맞추기",
        "zh": "对会议目标达成一致",
        "ja": "ミーティングの目標を合わせる",
        "vi": "Đồng lòng về mục tiêu cuộc họp"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Before we begin, let’s clarify what we want to accomplish today.",
          "translations": {
            "ko": "시작하기 전에, 오늘 우리가 달성하고자 하는 것을 명확히 해봅시다.",
            "zh": "在我们开始之前，让我们明确我们今天想要达成的目标。",
            "ja": "始める前に、今日達成したいことを明確にしましょう。",
            "vi": "Trước khi chúng ta bắt đầu, hãy làm rõ những gì chúng ta muốn đạt được hôm nay."
          }
        },
        {
          "role": "user",
          "text": "Sounds good. I like having clear objectives.",
          "translations": {
            "ko": "좋습니다. 명확한 목표가 있는 것이 좋아요.",
            "zh": "听起来不错。我喜欢有明确的目标。",
            "ja": "良いですね。明確な目標があるといいです。",
            "vi": "Nghe tốt đấy. Tôi thích có mục tiêu rõ ràng."
          }
        },
        {
          "role": "ai",
          "text": "It looks like we have three main topics to cover.",
          "translations": {
            "ko": "우리가 다루어야 할 주요 주제가 세 가지인 것 같습니다.",
            "zh": "看起来我们有三个主要的议题需要讨论。",
            "ja": "主要なトピックは3つあるようです。",
            "vi": "Có vẻ như chúng ta có ba chủ đề chính cần bàn."
          }
        },
        {
          "role": "user",
          "text": "Three topics seem manageable within the hour.",
          "translations": {
            "ko": "한 시간 안에 세 가지 주제를 다루는 것은 가능해 보입니다.",
            "zh": "一个小时内处理三个议题似乎可行。",
            "ja": "1時間以内に3つのトピックを管理することは可能だと思います。",
            "vi": "Ba chủ đề dường như có thể quản lý được trong vòng một giờ."
          }
        },
        {
          "role": "ai",
          "text": "Let’s try to keep each section within 15 minutes.",
          "translations": {
            "ko": "각 부분을 15분 안에 끝내려고 노력합시다.",
            "zh": "让我们尝试将每个部分控制在15分钟内。",
            "ja": "各セクションを15分以内に収めるようにしましょう。",
            "vi": "Hãy cố gắng giữ mỗi phần trong vòng 15 phút."
          }
        },
        {
          "role": "user",
          "text": "That timeline works for me.",
          "translations": {
            "ko": "그 시간표가 저에게는 괜찮습니다.",
            "zh": "这个时间表对我来说可行。",
            "ja": "そのタイムラインで私は問題ありません。",
            "vi": "Khung thời gian đó phù hợp với tôi."
          }
        },
        {
          "role": "ai",
          "text": "Does everyone agree with the agenda?",
          "translations": {
            "ko": "모두가 의제에 동의하시나요?",
            "zh": "大家都同意这个议程吗？",
            "ja": "皆さん、議題に同意しますか？",
            "vi": "Mọi người có đồng ý với chương trình không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, the agenda looks fine to me.",
          "translations": {
            "ko": "네, 의제가 저에게는 괜찮습니다.",
            "zh": "是的，我觉得这个议程很好。",
            "ja": "はい、議題は私にとって問題ありません。",
            "vi": "Đúng, chương trình nhìn chung đều phù hợp với tôi."
          }
        },
        {
          "role": "ai",
          "text": "If we run out of time, we’ll prioritize the urgent items.",
          "translations": {
            "ko": "시간이 부족하면 긴급한 항목을 우선적으로 처리하겠습니다.",
            "zh": "如果我们时间不够，我们将优先处理紧急的事项。",
            "ja": "時間がなくなった場合は、緊急の項目を優先しましょう。",
            "vi": "Nếu chúng ta hết thời gian, chúng ta sẽ ưu tiên những mục cần thiết."
          }
        },
        {
          "role": "user",
          "text": "Let’s make sure we focus on the client issue first.",
          "translations": {
            "ko": "우리는 먼저 고객의 문제에 집중하는 것이 중요합니다.",
            "zh": "让我们确保首先关注客户的问题。",
            "ja": "まずはクライアントの問題に焦点を当てるようにしましょう。",
            "vi": "Hãy chắc chắn rằng chúng ta tập trung vào vấn đề của khách hàng trước tiên."
          }
        },
        {
          "role": "ai",
          "text": "Let’s avoid going off-topic so we can stay efficient.",
          "translations": {
            "ko": "주제에서 벗어나지 않도록 해서 효율성을 유지합시다.",
            "zh": "让我们避免偏离主题，以保持效率。",
            "ja": "話題をそれるのを避けて、効率的に進めましょう。",
            "vi": "Hãy tránh lạc đề để chúng ta có thể hoạt động hiệu quả."
          }
        },
        {
          "role": "user",
          "text": "Good idea. Let’s keep things moving.",
          "translations": {
            "ko": "좋은 생각입니다. 계속 진행합시다.",
            "zh": "好主意。让我们保持事情的进行。",
            "ja": "良いアイデアです。進行を続けましょう。",
            "vi": "Ý tưởng hay. Hãy tiếp tục công việc."
          }
        },
        {
          "role": "ai",
          "text": "Please save detailed questions for the Q&A section.",
          "translations": {
            "ko": "자세한 질문은 Q&A 섹션에서 해주시기 바랍니다.",
            "zh": "请在问答环节提出详细的问题。",
            "ja": "詳細な質問はQ&Aのセクションでお願いします。",
            "vi": "Vui lòng giữ các câu hỏi chi tiết cho phần hỏi và đáp."
          }
        },
        {
          "role": "user",
          "text": "Got it. I’ll note down any questions for later.",
          "translations": {
            "ko": "알겠습니다. 나중에 질문할 내용을 적어두겠습니다.",
            "zh": "明白了。我会把任何问题记下来，以便稍后讨论。",
            "ja": "了解しました。後で質問をメモします。",
            "vi": "Đã hiểu. Tôi sẽ ghi chú lại bất kỳ câu hỏi nào để sau này."
          }
        },
        {
          "role": "ai",
          "text": "I’ll keep track of time and flag when we need to move on.",
          "translations": {
            "ko": "시간을 체크하고, 다음으로 넘어가야 할 때 알려드리겠습니다.",
            "zh": "我会跟踪时间，并在我们需要继续前进时提醒大家。",
            "ja": "時間を管理し、進行する必要があるときには指摘します。",
            "vi": "Tôi sẽ theo dõi thời gian và cảnh báo khi chúng ta cần chuyển sang công việc khác."
          }
        },
        {
          "role": "user",
          "text": "Appreciate you keeping track of time.",
          "translations": {
            "ko": "시간을 체크해주셔서 감사합니다.",
            "zh": "感谢你跟踪时间。",
            "ja": "時間を管理してくれてありがとう。",
            "vi": "Cảm ơn bạn đã theo dõi thời gian."
          }
        },
        {
          "role": "ai",
          "text": "We’ll wrap up with clear action items and owners.",
          "translations": {
            "ko": "명확한 행동 계획과 주인을 가지고 마무리하겠습니다.",
            "zh": "我们将以明确的行动项目和负责人结束。",
            "ja": "明確なアクションアイテムとオーナーで締めくくります。",
            "vi": "Chúng ta sẽ kết thúc với các mục công việc cụ thể và người chịu trách nhiệm."
          }
        },
        {
          "role": "user",
          "text": "Clear next steps will help a lot.",
          "translations": {
            "ko": "명확한 다음 단계가 많은 도움이 될 것입니다.",
            "zh": "明确的下一步将会很有帮助。",
            "ja": "明確な次のステップが大いに助けになります。",
            "vi": "Các bước tiếp theo rõ ràng sẽ giúp rất nhiều."
          }
        },
        {
          "role": "ai",
          "text": "Any other objectives we should add before we start?",
          "translations": {
            "ko": "시작하기 전에 추가해야 할 다른 목표가 있나요?",
            "zh": "在我们开始之前，还有其他目标我们应该添加吗？",
            "ja": "開始する前に追加すべき他の目標はありますか？",
            "vi": "Có mục tiêu nào khác chúng ta nên thêm vào trước khi bắt đầu không?"
          }
        },
        {
          "role": "user",
          "text": "Nothing from me. Ready to begin.",
          "translations": {
            "ko": "저는 없습니다. 시작할 준비가 되었습니다.",
            "zh": "我没有什么。准备开始了。",
            "ja": "私からは何もありません。始める準備ができています。",
            "vi": "Không có gì từ tôi. Sẵn sàng để bắt đầu."
          }
        }
      ]
    },
    {
      "description": {
        "ko": "고객 회의에 대한 기대치 설정",
        "zh": "为客户会议设定期望",
        "ja": "クライアントミーティングの期待値を設定する",
        "vi": "Đặt kỳ vọng cho một cuộc họp với khách hàng"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Let’s go over the agenda for tomorrow’s client meeting.",
          "translations": {
            "ko": "내일 고객 회의의 안건을 살펴봅시다.",
            "zh": "让我们过一下明天客户会议的议程。",
            "ja": "明日のクライアントミーティングの議題を確認しましょう。",
            "vi": "Hãy xem qua chương trình cho cuộc họp với khách hàng vào ngày mai."
          }
        },
        {
          "role": "user",
          "text": "Thanks. Reviewing the agenda sounds helpful.",
          "translations": {
            "ko": "감사합니다. 안건을 검토하는 것이 도움이 될 것 같습니다.",
            "zh": "谢谢。审查议程听起来很有帮助。",
            "ja": "ありがとう。議題の確認は役立ちそうです。",
            "vi": "Cảm ơn. Xem lại chương trình nghe có vẻ hữu ích."
          }
        },
        {
          "role": "ai",
          "text": "We should be clear on who is presenting each section.",
          "translations": {
            "ko": "각 섹션을 누가 발표하는지 명확히 해야 합니다.",
            "zh": "我们应该清楚谁来介绍每个部分。",
            "ja": "各セクションを誰がプレゼンするかは明確にすべきです。",
            "vi": "Chúng ta nên rõ ràng về ai sẽ trình bày mỗi phần."
          }
        },
        {
          "role": "user",
          "text": "I’ll handle the intro and first section.",
          "translations": {
            "ko": "저는 소개와 첫 번째 섹션을 맡겠습니다.",
            "zh": "我会处理介绍和第一部分。",
            "ja": "私がイントロと最初のセクションを担当します。",
            "vi": "Tôi sẽ đảm nhận phần giới thiệu và phần đầu tiên."
          }
        },
        {
          "role": "ai",
          "text": "The client will likely ask about our Q2 performance.",
          "translations": {
            "ko": "고객은 우리의 2분기 성과에 대해 물어볼 가능성이 높습니다.",
            "zh": "客户可能会询问我们第二季度的表现。",
            "ja": "クライアントはおそらく私たちのQ2のパフォーマンスについて尋ねるでしょう。",
            "vi": "Khách hàng có thể sẽ hỏi về hiệu suất của chúng ta trong quý 2."
          }
        },
        {
          "role": "user",
          "text": "I’ll prepare some notes on our numbers.",
          "translations": {
            "ko": "우리의 성과에 대한 몇 가지 노트를 준비하겠습니다.",
            "zh": "我会准备一些关于我们数据的笔记。",
            "ja": "数字についてのメモを準備します。",
            "vi": "Tôi sẽ chuẩn bị một số ghi chú về số liệu của chúng ta."
          }
        },
        {
          "role": "ai",
          "text": "Let’s make sure we’re aligned on the key talking points.",
          "translations": {
            "ko": "핵심 토론 주제에 대해 일치하는지 확인합시다.",
            "zh": "让我们确保我们在关键的讨论点上达成一致。",
            "ja": "重要な話題について意見が一致していることを確認しましょう。",
            "vi": "Hãy chắc chắn rằng chúng ta đồng lòng về các điểm nói chính."
          }
        },
        {
          "role": "user",
          "text": "Let’s highlight results and upcoming plans.",
          "translations": {
            "ko": "결과와 다가오는 계획을 강조합시다.",
            "zh": "让我们突出结果和即将到来的计划。",
            "ja": "結果と今後の計画を強調しましょう。",
            "vi": "Hãy nêu bật kết quả và kế hoạch sắp tới."
          }
        },
        {
          "role": "ai",
          "text": "Who will take the lead during the product demo?",
          "translations": {
            "ko": "누가 제품 시연을 이끌 것인가요?",
            "zh": "谁会在产品演示中担任主导？",
            "ja": "製品デモのリードは誰が担当しますか？",
            "vi": "Ai sẽ dẫn dắt trong phần trình diễn sản phẩm?"
          }
        },
        {
          "role": "user",
          "text": "I can take the demo. I’ve done it before.",
          "translations": {
            "ko": "제가 시연을 맡을 수 있습니다. 이전에 해본 적이 있습니다.",
            "zh": "我可以做演示。我以前做过。",
            "ja": "デモは私が担当します。以前にやったことがあります。",
            "vi": "Tôi có thể thực hiện phần trình diễn. Tôi đã làm nó trước đây."
          }
        },
        {
          "role": "ai",
          "text": "We should keep answers concise and focused.",
          "translations": {
            "ko": "답변은 간결하고 집중적으로 유지해야 합니다.",
            "zh": "我们应该保持回答简洁和有针对性。",
            "ja": "回答は簡潔で焦点を絞るべきです。",
            "vi": "Chúng ta nên giữ cho câu trả lời ngắn gọn và tập trung."
          }
        },
        {
          "role": "user",
          "text": "Good point. I’ll keep things brief.",
          "translations": {
            "ko": "좋은 지적입니다. 저는 간결하게 유지하겠습니다.",
            "zh": "好点。我会保持简洁。",
            "ja": "良いポイントです。私は簡潔にします。",
            "vi": "Điểm quan trọng. Tôi sẽ giữ mọi thứ ngắn gọn."
          }
        },
        {
          "role": "ai",
          "text": "Let’s avoid sharing anything that isn’t finalized yet.",
          "translations": {
            "ko": "아직 확정되지 않은 것은 공유하지 않는 것이 좋습니다.",
            "zh": "让我们避免分享任何尚未确定的内容。",
            "ja": "まだ確定していないことは共有しないようにしましょう。",
            "vi": "Hãy tránh chia sẻ bất cứ điều gì chưa được hoàn thiện."
          }
        },
        {
          "role": "user",
          "text": "Agreed. We’ll stick to confirmed updates.",
          "translations": {
            "ko": "동의합니다. 확정된 업데이트에만 초점을 맞추겠습니다.",
            "zh": "同意。我们将坚持确认的更新。",
            "ja": "同意します。確認済みの更新情報にとどめておきます。",
            "vi": "Đồng ý. Chúng ta sẽ tuân theo những cập nhật đã được xác nhận."
          }
        },
        {
          "role": "ai",
          "text": "Do we have time set aside for Q&A?",
          "translations": {
            "ko": "Q&A를 위한 시간을 따로 두었나요?",
            "zh": "我们有为问答环节预留时间吗？",
            "ja": "Q&Aのための時間は設けていますか？",
            "vi": "Chúng ta có dành thời gian cho phần hỏi và đáp không?"
          }
        },
        {
          "role": "user",
          "text": "Yes, we should save five to ten minutes.",
          "translations": {
            "ko": "네, 5분에서 10분 정도를 두어야 합니다.",
            "zh": "是的，我们应该预留五到十分钟。",
            "ja": "はい、5から10分程度は確保すべきです。",
            "vi": "Có, chúng ta nên dành từ năm đến mười phút."
          }
        },
        {
          "role": "ai",
          "text": "I’ll send out the final slide deck this afternoon.",
          "translations": {
            "ko": "오후에 최종 슬라이드 덱을 보내드리겠습니다.",
            "zh": "我会在今天下午发送最后的幻灯片。",
            "ja": "今日の午後に最終スライドデッキを送ります。",
            "vi": "Tôi sẽ gửi bộ slide cuối cùng vào chiều nay."
          }
        },
        {
          "role": "user",
          "text": "Great. I’ll look for it later today.",
          "translations": {
            "ko": "좋아요. 나중에 찾아볼게요.",
            "zh": "很好。我今天晚些时候会去找它。",
            "ja": "それは素晴らしいです。今日の後でそれを探します。",
            "vi": "Tốt. Tôi sẽ tìm nó sau hôm nay."
          }
        },
        {
          "role": "ai",
          "text": "Any concerns before we meet with the client?",
          "translations": {
            "ko": "클라이언트와 만나기 전에 우려되는 점 있나요?",
            "zh": "在我们与客户会面之前有任何疑虑吗？",
            "ja": "クライアントと会う前に何か懸念点はありますか？",
            "vi": "Có điều gì cần lo lắng trước khi chúng ta gặp khách hàng không?"
          }
        },
        {
          "role": "user",
          "text": "None from me. I think we’re ready.",
          "translations": {
            "ko": "저는 없습니다. 우리는 준비가 된 것 같아요.",
            "zh": "我没有。我认为我们已经准备好了。",
            "ja": "私からは何もありません。私たちは準備ができていると思います。",
            "vi": "Tôi không có. Tôi nghĩ chúng ta đã sẵn sàng."
          }
        }
      ]
    },
    {
      "description": {
        "ko": "프로젝트 개시 회의 시작",
        "zh": "开始一个项目启动会议",
        "ja": "プロジェクトキックオフミーティングの開始",
        "vi": "Bắt đầu cuộc họp khởi động dự án"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Thanks everyone for joining the kickoff meeting.",
          "translations": {
            "ko": "모두가 개시 회의에 참석해주셔서 감사합니다.",
            "zh": "感谢大家参加这次启动会议。",
            "ja": "皆さんがキックオフミーティングに参加してくれてありがとう。",
            "vi": "Cảm ơn mọi người đã tham gia cuộc họp khởi động."
          }
        },
        {
          "role": "user",
          "text": "Happy to be part of the project.",
          "translations": {
            "ko": "이 프로젝트의 일원이 되어 기쁩니다.",
            "zh": "很高兴能成为项目的一部分。",
            "ja": "プロジェクトの一部になれて嬉しいです。",
            "vi": "Rất vui được là một phần của dự án."
          }
        },
        {
          "role": "ai",
          "text": "Let’s start with a quick round of introductions.",
          "translations": {
            "ko": "먼저 간단한 자기소개부터 시작해봅시다.",
            "zh": "让我们从简单的自我介绍开始。",
            "ja": "まずは簡単な自己紹介から始めましょう。",
            "vi": "Hãy bắt đầu với một vòng giới thiệu nhanh."
          }
        },
        {
          "role": "user",
          "text": "I’m from the design team and will lead the UI work.",
          "translations": {
            "ko": "저는 디자인 팀에서 왔고, UI 작업을 이끌게 됩니다.",
            "zh": "我来自设计团队，将负责UI工作。",
            "ja": "私はデザインチームから来ており、UIの作業をリードします。",
            "vi": "Tôi là từ nhóm thiết kế và sẽ dẫn dắt công việc UI."
          }
        },
        {
          "role": "ai",
          "text": "I’ll give a high-level overview of the project goals.",
          "translations": {
            "ko": "프로젝트 목표에 대한 고수준 개요를 제공하겠습니다.",
            "zh": "我会给出项目目标的高级概述。",
            "ja": "プロジェクトの目標について高レベルの概要を提供します。",
            "vi": "Tôi sẽ đưa ra cái nhìn tổng quan về mục tiêu dự án."
          }
        },
        {
          "role": "user",
          "text": "Looking forward to seeing the roadmap.",
          "translations": {
            "ko": "로드맵을 기대하고 있습니다.",
            "zh": "期待看到项目路线图。",
            "ja": "ロードマップを見るのを楽しみにしています。",
            "vi": "Mong chờ được thấy lộ trình."
          }
        },
        {
          "role": "ai",
          "text": "The timeline is ambitious, so we’ll need good coordination.",
          "translations": {
            "ko": "시간표가 야심차기 때문에 좋은 조정이 필요합니다.",
            "zh": "时间表很紧张，所以我们需要良好的协调。",
            "ja": "タイムラインは野心的なので、良い調整が必要です。",
            "vi": "Lịch trình rất tham vọng, vì vậy chúng ta cần phải phối hợp tốt."
          }
        },
        {
          "role": "user",
          "text": "We’ll do our best to stay aligned.",
          "translations": {
            "ko": "우리는 최선을 다해 일치하도록 노력하겠습니다.",
            "zh": "我们会尽力保持一致。",
            "ja": "私たちは最善を尽くして一致を保つつもりです。",
            "vi": "Chúng tôi sẽ cố gắng hết sức để giữ cho mọi thứ đồng bộ."
          }
        },
        {
          "role": "ai",
          "text": "Each team will have clear responsibilities and deadlines.",
          "translations": {
            "ko": "각 팀은 명확한 책임과 마감일을 가질 것입니다.",
            "zh": "每个团队都将有明确的职责和截止日期。",
            "ja": "各チームは明確な責任と期限を持つことになります。",
            "vi": "Mỗi nhóm sẽ có trách nhiệm và thời hạn rõ ràng."
          }
        },
        {
          "role": "user",
          "text": "Clear expectations will help a lot.",
          "translations": {
            "ko": "명확한 기대치가 많은 도움이 될 것입니다.",
            "zh": "清晰的期望将会有很大帮助。",
            "ja": "明確な期待は大いに助けになります。",
            "vi": "Kỳ vọng rõ ràng sẽ giúp rất nhiều."
          }
        },
        {
          "role": "ai",
          "text": "Let’s walk through the first milestone in detail.",
          "translations": {
            "ko": "첫 번째 마일스톤을 자세히 살펴봅시다.",
            "zh": "让我们详细讨论第一个里程碑。",
            "ja": "最初のマイルストーンを詳しく見ていきましょう。",
            "vi": "Hãy xem xét chi tiết cột mốc đầu tiên."
          }
        },
        {
          "role": "user",
          "text": "Thanks. That would be helpful.",
          "translations": {
            "ko": "감사합니다. 그것이 도움이 될 것입니다.",
            "zh": "谢谢。这将会很有帮助。",
            "ja": "ありがとう。それは役立つでしょう。",
            "vi": "Cảm ơn. Điều đó sẽ rất hữu ích."
          }
        },
        {
          "role": "ai",
          "text": "I’ll share the full project plan after this call.",
          "translations": {
            "ko": "이 통화 후에 전체 프로젝트 계획을 공유하겠습니다.",
            "zh": "这次通话后，我会分享完整的项目计划。",
            "ja": "このコールの後に全体のプロジェクト計画を共有します。",
            "vi": "Tôi sẽ chia sẻ kế hoạch dự án đầy đủ sau cuộc gọi này."
          }
        },
        {
          "role": "user",
          "text": "Please include the updated Gantt chart.",
          "translations": {
            "ko": "업데이트된 간트 차트를 포함해주세요.",
            "zh": "请包括更新的甘特图。",
            "ja": "更新されたガントチャートを含めてください。",
            "vi": "Vui lòng bao gồm biểu đồ Gantt đã cập nhật."
          }
        },
        {
          "role": "ai",
          "text": "Weekly check-ins will help us stay on track.",
          "translations": {
            "ko": "주간 체크인이 우리를 올바른 길로 유지하는 데 도움이 될 것입니다.",
            "zh": "每周的检查将帮助我们保持正轨。",
            "ja": "週次のチェックインが私たちを軌道に保つのに役立ちます。",
            "vi": "Cuộc kiểm tra hàng tuần sẽ giúp chúng ta giữ được tiến độ."
          }
        },
        {
          "role": "user",
          "text": "Weekly syncs sound good to me.",
          "translations": {
            "ko": "주간 동기화는 저에게 좋아 보입니다.",
            "zh": "每周同步听起来不错。",
            "ja": "週次の同期は私にとって良いと思います。",
            "vi": "Cuộc đồng bộ hàng tuần nghe có vẻ tốt đối với tôi."
          }
        },
        {
          "role": "ai",
          "text": "Let’s keep communication open and proactive.",
          "translations": {
            "ko": "소통을 열린 상태로 유지하고 적극적으로 해봅시다.",
            "zh": "让我们保持开放和主动的沟通。",
            "ja": "コミュニケーションを開放的で積極的に保つようにしましょう。",
            "vi": "Hãy giữ cho giao tiếp mở và chủ động."
          }
        },
        {
          "role": "user",
          "text": "I’ll flag any issues early on.",
          "translations": {
            "ko": "문제가 발생하면 조기에 알려드리겠습니다.",
            "zh": "我会尽早标记出任何问题。",
            "ja": "早期に問題をフラグします。",
            "vi": "Tôi sẽ đánh dấu bất kỳ vấn đề nào sớm."
          }
        },
        {
          "role": "ai",
          "text": "Any initial questions or concerns?",
          "translations": {
            "ko": "초기 질문이나 우려 사항이 있나요?",
            "zh": "有任何初步的问题或疑虑吗？",
            "ja": "最初の質問や懸念はありますか？",
            "vi": "Có câu hỏi hoặc lo lắng ban đầu nào không?"
          }
        },
        {
          "role": "user",
          "text": "No questions for now. Let’s begin.",
          "translations": {
            "ko": "지금은 질문이 없습니다. 시작합시다.",
            "zh": "现在没有问题。让我们开始吧。",
            "ja": "今のところ質問はありません。始めましょう。",
            "vi": "Không có câu hỏi nào cho đến bây giờ. Hãy bắt đầu."
          }
        }
      ]
    },
    {
      "description": {
        "ko": "팀 회의 마무리",
        "zh": "结束团队会议",
        "ja": "チームミーティングのまとめ",
        "vi": "Kết thúc cuộc họp nhóm"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Alright, let’s start wrapping things up.",
          "translations": {
            "ko": "좋아요, 마무리를 시작합시다.",
            "zh": "好的，让我们开始总结。",
            "ja": "さて、まとめていきましょう。",
            "vi": "Được rồi, hãy bắt đầu kết thúc mọi thứ."
          }
        },
        {
          "role": "user",
          "text": "Sounds good. I’ve noted the deadline.",
          "translations": {
            "ko": "좋습니다. 마감일을 기록했습니다.",
            "zh": "听起来不错。我已经记下了截止日期。",
            "ja": "了解です。締め切りをメモしました。",
            "vi": "Nghe có vẻ tốt. Tôi đã ghi chú lại thời hạn."
          }
        },
        {
          "role": "ai",
          "text": "Here’s a quick summary of what we discussed.",
          "translations": {
            "ko": "우리가 논의한 내용의 간단한 요약입니다.",
            "zh": "这是我们讨论的快速总结。",
            "ja": "私たちが話し合ったことの簡単な要約です。",
            "vi": "Đây là một bản tóm tắt nhanh về những gì chúng ta đã thảo luận."
          }
        },
        {
          "role": "user",
          "text": "I’ll get started on my section tomorrow.",
          "translations": {
            "ko": "내일부터 제 부분을 시작하겠습니다.",
            "zh": "我明天就开始我的部分。",
            "ja": "明日から私のセクションを始めます。",
            "vi": "Tôi sẽ bắt đầu phần của mình vào ngày mai."
          }
        },
        {
          "role": "ai",
          "text": "We agreed to complete the draft by next Wednesday.",
          "translations": {
            "ko": "다음 수요일까지 초안을 완성하기로 합의했습니다.",
            "zh": "我们同意在下周三之前完成草稿。",
            "ja": "次の水曜日までにドラフトを完成させることに合意しました。",
            "vi": "Chúng tôi đã đồng ý hoàn thành bản nháp vào thứ Tư tuần tới."
          }
        },
        {
          "role": "user",
          "text": "Got it. Waiting for marketing’s input.",
          "translations": {
            "ko": "알겠습니다. 마케팅 부서의 의견을 기다리고 있습니다.",
            "zh": "明白了。正在等待市场部的反馈。",
            "ja": "了解です。マーケティングからの意見を待っています。",
            "vi": "Đã hiểu. Đang chờ phản hồi từ bộ phận marketing."
          }
        },
        {
          "role": "ai",
          "text": "Marketing will provide feedback by the end of the week.",
          "translations": {
            "ko": "마케팅 부서는 이번 주말까지 피드백을 제공할 것입니다.",
            "zh": "市场部将在本周末之前提供反馈。",
            "ja": "マーケティングは週末までにフィードバックを提供します。",
            "vi": "Bộ phận marketing sẽ cung cấp phản hồi vào cuối tuần."
          }
        },
        {
          "role": "user",
          "text": "I’ll make sure the doc is up to date.",
          "translations": {
            "ko": "문서가 최신 상태인지 확인하겠습니다.",
            "zh": "我会确保文档是最新的。",
            "ja": "ドキュメントが最新の状態になるようにします。",
            "vi": "Tôi sẽ đảm bảo tài liệu được cập nhật."
          }
        },
        {
          "role": "ai",
          "text": "Please update the shared doc with your sections.",
          "translations": {
            "ko": "공유 문서에 각자의 부분을 업데이트해 주세요.",
            "zh": "请在共享文档中更新你的部分。",
            "ja": "あなたのセクションで共有ドキュメントを更新してください。",
            "vi": "Vui lòng cập nhật tài liệu chia sẻ với phần của bạn."
          }
        },
        {
          "role": "user",
          "text": "The 20th works for me.",
          "translations": {
            "ko": "저는 20일이 괜찮습니다.",
            "zh": "20号对我来说可以。",
            "ja": "20日は私にとって都合が良いです。",
            "vi": "Ngày 20 phù hợp với tôi."
          }
        },
        {
          "role": "ai",
          "text": "Let’s aim to finalize everything by the 20th.",
          "translations": {
            "ko": "20일까지 모든 것을 확정하려고 합시다.",
            "zh": "让我们争取在20号之前完成所有事情。",
            "ja": "20日までにすべてを最終化することを目指しましょう。",
            "vi": "Hãy cố gắng hoàn thành mọi thứ trước ngày 20."
          }
        },
        {
          "role": "user",
          "text": "Thanks. That reminder will help.",
          "translations": {
            "ko": "감사합니다. 그 리마인더가 도움이 될 것입니다.",
            "zh": "谢谢。这个提醒会有帮助。",
            "ja": "ありがとう。そのリマインダーは助けになります。",
            "vi": "Cảm ơn. Lời nhắc này sẽ giúp ích."
          }
        },
        {
          "role": "ai",
          "text": "We’ll send a reminder ahead of our next check-in.",
          "translations": {
            "ko": "다음 체크인 전에 리마인더를 보내드리겠습니다.",
            "zh": "我们会在下次检查前发送提醒。",
            "ja": "次のチェックインの前にリマインダーを送ります。",
            "vi": "Chúng tôi sẽ gửi lời nhắc trước cuộc họp tiếp theo của chúng tôi."
          }
        },
        {
          "role": "user",
          "text": "Appreciate the clear wrap-up.",
          "translations": {
            "ko": "명확한 마무리에 감사드립니다.",
            "zh": "感谢你的清晰总结。",
            "ja": "明確なまとめに感謝します。",
            "vi": "Rất cảm kích vì sự tổng kết rõ ràng."
          }
        },
        {
          "role": "ai",
          "text": "Thanks for staying on schedule today.",
          "translations": {
            "ko": "오늘 일정에 맞춰주셔서 감사합니다.",
            "zh": "感谢你今天按时完成工作。",
            "ja": "今日はスケジュール通りに進めてくれてありがとう。",
            "vi": "Cảm ơn vì đã tuân thủ lịch trình hôm nay."
          }
        },
        {
          "role": "user",
          "text": "I’ll email you if I have questions.",
          "translations": {
            "ko": "질문이 있으면 이메일로 연락드리겠습니다.",
            "zh": "如果我有问题，我会给你发邮件。",
            "ja": "質問があればメールします。",
            "vi": "Tôi sẽ gửi email cho bạn nếu tôi có câu hỏi."
          }
        },
        {
          "role": "ai",
          "text": "Feel free to reach out with any follow-ups.",
          "translations": {
            "ko": "후속 조치에 대해 언제든지 연락하실 수 있습니다.",
            "zh": "如有任何后续问题，请随时联系。",
            "ja": "フォローアップがあれば遠慮なく連絡してください。",
            "vi": "Hãy liên hệ nếu bạn có bất kỳ câu hỏi nào."
          }
        },
        {
          "role": "user",
          "text": "Looking forward to next week.",
          "translations": {
            "ko": "다음 주를 기대하고 있습니다.",
            "zh": "期待下周。",
            "ja": "来週を楽しみにしています。",
            "vi": "Mong chờ tuần tới."
          }
        },
        {
          "role": "ai",
          "text": "See you all at next week’s meeting.",
          "translations": {
            "ko": "다음 주 회의에서 모두 뵙겠습니다.",
            "zh": "下周会议见。",
            "ja": "来週の会議で皆さんに会いましょう。",
            "vi": "Hẹn gặp tất cả mọi người tại cuộc họp tuần sau."
          }
        },
        {
          "role": "user",
          "text": "Bye everyone. Have a good day.",
          "translations": {
            "ko": "모두 안녕히 계세요. 좋은 하루 되세요.",
            "zh": "再见，祝大家今天过得愉快。",
            "ja": "さようなら皆さん。良い一日を。",
            "vi": "Tạm biệt mọi người. Chúc một ngày tốt lành."
          }
        }
      ]
    },
    {
      "description": {
        "ko": "프로젝트 진행 상황 확인 중입니다.",
        "zh": "关于项目进度的检查",
        "ja": "プロジェクトの進行状況を確認中",
        "vi": "Kiểm tra tiến độ dự án"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Let’s go around and hear updates from each team.",
          "translations": {
            "ko": "각 팀에서 업데이트 사항을 들어봅시다.",
            "zh": "让我们听听每个团队的更新情况。",
            "ja": "各チームからのアップデートを聞きましょう。",
            "vi": "Hãy lần lượt nghe cập nhật từ từng nhóm."
          }
        },
        {
          "role": "user",
          "text": "Engineering is 80 percent done with the feature.",
          "translations": {
            "ko": "엔지니어링 팀은 기능의 80%를 완료했습니다.",
            "zh": "工程部已经完成了80%的功能。",
            "ja": "エンジニアリングは機能の80パーセントを完成させました。",
            "vi": "Bộ phận kỹ thuật đã hoàn thành 80% tính năng."
          }
        },
        {
          "role": "ai",
          "text": "Please keep it brief and focused on progress and blockers.",
          "translations": {
            "ko": "진행 상황과 장애물에 초점을 맞춰 간략하게 말해주세요.",
            "zh": "请保持简洁并专注于进度和阻碍。",
            "ja": "簡潔に、進行状況とブロッカーに焦点を当ててください。",
            "vi": "Vui lòng giữ ngắn gọn và tập trung vào tiến độ và vấn đề cản trở."
          }
        },
        {
          "role": "user",
          "text": "One blocker came up with authentication logic.",
          "translations": {
            "ko": "인증 로직과 관련하여 한 가지 문제가 발생했습니다.",
            "zh": "在身份验证逻辑上出现了一个阻碍。",
            "ja": "認証ロジックでブロッカーが出てきました。",
            "vi": "Một vấn đề cản trở đã xuất hiện với logic xác thực."
          }
        },
        {
          "role": "ai",
          "text": "Where do we stand on the dev side?",
          "translations": {
            "ko": "개발 측면에서 우리는 어디에 있나요?",
            "zh": "我们在开发方面的进度如何？",
            "ja": "開発側はどの程度進んでいますか？",
            "vi": "Chúng ta đang ở đâu về phía bên phát triển?"
          }
        },
        {
          "role": "user",
          "text": "We’re handling it now and expect a fix today.",
          "translations": {
            "ko": "우리는 지금 처리하고 있으며 오늘 수정될 것으로 예상합니다.",
            "zh": "我们正在处理，预计今天就能解决。",
            "ja": "今それを対応しており、今日中には修正が完了する予定です。",
            "vi": "Chúng tôi đang xử lý nó và dự kiến sẽ sửa xong hôm nay."
          }
        },
        {
          "role": "ai",
          "text": "Any major issues we should escalate?",
          "translations": {
            "ko": "우리가 긴급히 대응해야 할 주요 문제가 있나요?",
            "zh": "有没有我们应该升级的重大问题？",
            "ja": "エスカレートすべき大きな問題はありますか？",
            "vi": "Có vấn đề lớn nào chúng ta nên nâng cấp?"
          }
        },
        {
          "role": "user",
          "text": "No other issues to report at this time.",
          "translations": {
            "ko": "현재 보고할 다른 문제는 없습니다.",
            "zh": "目前没有其他问题要报告。",
            "ja": "現時点では報告すべき他の問題はありません。",
            "vi": "Không có vấn đề khác cần báo cáo vào thời điểm này."
          }
        },
        {
          "role": "ai",
          "text": "Are we still on track for the mid-month launch?",
          "translations": {
            "ko": "중순 출시 계획이 여전히 유효한가요?",
            "zh": "我们是否仍然按计划在月中发布？",
            "ja": "中旬のローンチはまだ予定通りですか？",
            "vi": "Chúng ta vẫn theo đúng kế hoạch cho việc ra mắt vào giữa tháng?"
          }
        },
        {
          "role": "user",
          "text": "Yes, we’re still aiming for the 15th.",
          "translations": {
            "ko": "네, 우리는 여전히 15일을 목표로 하고 있습니다.",
            "zh": "是的，我们仍然计划在15号。",
            "ja": "はい、まだ15日を目指しています。",
            "vi": "Có, chúng tôi vẫn đang nhắm đến ngày 15."
          }
        },
        {
          "role": "ai",
          "text": "How’s coordination with the vendor going?",
          "translations": {
            "ko": "공급업체와의 협력은 어떻게 진행되고 있나요?",
            "zh": "与供应商的协调进展如何？",
            "ja": "ベンダーとの調整はどう進んでいますか？",
            "vi": "Việc phối hợp với nhà cung cấp đang diễn ra như thế nào?"
          }
        },
        {
          "role": "user",
          "text": "Vendor feedback has been a bit slow.",
          "translations": {
            "ko": "공급업체의 피드백이 조금 느립니다.",
            "zh": "供应商的反馈有点慢。",
            "ja": "ベンダーからのフィードバックが少し遅いです。",
            "vi": "Phản hồi từ nhà cung cấp hơi chậm."
          }
        },
        {
          "role": "ai",
          "text": "We’ve seen good momentum over the past week.",
          "translations": {
            "ko": "지난 주 동안 좋은 추진력을 보였습니다.",
            "zh": "在过去的一周中，我们看到了良好的进展。",
            "ja": "過去一週間で良い勢いを見せています。",
            "vi": "Chúng tôi đã thấy sự tiến bộ tốt trong tuần qua."
          }
        },
        {
          "role": "user",
          "text": "We’ve been pushing forward regardless.",
          "translations": {
            "ko": "우리는 계속 앞으로 나아가고 있습니다.",
            "zh": "我们一直在推进，不管怎样。",
            "ja": "それにもかかわらず、我々は前進し続けています。",
            "vi": "Chúng tôi đã tiếp tục đẩy mạnh dự án."
          }
        },
        {
          "role": "ai",
          "text": "Let’s flag anything that could impact the schedule.",
          "translations": {
            "ko": "일정에 영향을 줄 수 있는 것들을 모두 표시합시다.",
            "zh": "让我们标记可能影响进度的任何事项。",
            "ja": "スケジュールに影響を及ぼす可能性のあるものはすべてフラグを立てましょう。",
            "vi": "Hãy đánh dấu bất cứ điều gì có thể ảnh hưởng đến lịch trình."
          }
        },
        {
          "role": "user",
          "text": "Noted. I’ll raise anything urgent directly.",
          "translations": {
            "ko": "알겠습니다. 긴급한 사항은 바로 제기하겠습니다.",
            "zh": "已记录。我会直接提出任何紧急事项。",
            "ja": "了解しました。緊急性のあることは直接提起します。",
            "vi": "Đã ghi nhận. Tôi sẽ đưa ra mọi vấn đề khẩn cấp trực tiếp."
          }
        },
        {
          "role": "ai",
          "text": "I'll compile updates and share a summary afterward.",
          "translations": {
            "ko": "업데이트를 정리하고 나중에 요약본을 공유하겠습니다.",
            "zh": "我会整理更新并在之后分享总结。",
            "ja": "更新情報をまとめて、後で要約を共有します。",
            "vi": "Tôi sẽ tổng hợp cập nhật và chia sẻ bản tóm tắt sau."
          }
        },
        {
          "role": "user",
          "text": "Appreciate you summarizing everything.",
          "translations": {
            "ko": "모든 것을 요약해 주셔서 감사합니다.",
            "zh": "感谢你总结了所有事项。",
            "ja": "すべてをまとめてくれてありがとう。",
            "vi": "Cảm ơn bạn đã tổng hợp mọi thứ."
          }
        },
        {
          "role": "ai",
          "text": "Thanks, everyone. Great input today.",
          "translations": {
            "ko": "감사합니다, 모두. 오늘 의견 제시가 좋았습니다.",
            "zh": "谢谢大家，今天的反馈很棒。",
            "ja": "皆さん、ありがとうございます。今日は素晴らしい意見が出ました。",
            "vi": "Cảm ơn mọi người. Ý kiến đóng góp tuyệt vời hôm nay."
          }
        },
        {
          "role": "user",
          "text": "Thanks all. Productive session.",
          "translations": {
            "ko": "감사합니다. 생산적인 회의였습니다.",
            "zh": "谢谢大家。这是个富有成效的会议。",
            "ja": "皆さん、ありがとうございます。有意義なセッションでした。",
            "vi": "Cảm ơn mọi người. Buổi làm việc hiệu quả."
          }
        }
      ]
    },
    {
      "description": {
        "ko": "내부 검토를 계획 중입니다.",
        "zh": "正在计划一次内部审查",
        "ja": "内部レビューの計画",
        "vi": "Đang lên kế hoạch đánh giá nội bộ"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Let’s schedule a review session for the draft materials.",
          "translations": {
            "ko": "초안 자료에 대한 검토 회의를 예정합시다.",
            "zh": "让我们安排一次草案材料的审查会议。",
            "ja": "下書き資料のレビューセッションをスケジュールしましょう。",
            "vi": "Hãy lên lịch một buổi đánh giá cho các tài liệu dự thảo."
          }
        },
        {
          "role": "user",
          "text": "Thursday afternoon works for me.",
          "translations": {
            "ko": "목요일 오후가 저에게는 괜찮습니다.",
            "zh": "星期四下午对我来说很合适。",
            "ja": "木曜日の午後は私にとって都合が良いです。",
            "vi": "Buổi chiều thứ Năm phù hợp với tôi."
          }
        },
        {
          "role": "ai",
          "text": "Does Thursday afternoon work for everyone?",
          "translations": {
            "ko": "목요일 오후가 모두에게 괜찮은가요?",
            "zh": "星期四下午对大家来说合适吗？",
            "ja": "木曜日の午後は皆さんにとって都合が良いですか？",
            "vi": "Buổi chiều thứ Năm có phù hợp với mọi người không?"
          }
        },
        {
          "role": "user",
          "text": "Good idea to get everyone in the same room.",
          "translations": {
            "ko": "모두를 같은 방에 모으는 것이 좋은 생각입니다.",
            "zh": "让所有人都在同一个房间是个好主意。",
            "ja": "皆を同じ部屋に集めるのは良いアイデアです。",
            "vi": "Ý tưởng tốt để mọi người cùng trong một phòng."
          }
        },
        {
          "role": "ai",
          "text": "We want all key contributors present for feedback.",
          "translations": {
            "ko": "피드백을 위해 모든 주요 참여자들이 참석하는 것이 우리의 바람입니다.",
            "zh": "我们希望所有关键贡献者都能提供反馈。",
            "ja": "フィードバックのために、すべての主要な貢献者が参加することを望んでいます。",
            "vi": "Chúng tôi muốn tất cả những người đóng góp chính có mặt để phản hồi."
          }
        },
        {
          "role": "user",
          "text": "We’ll have our content ready by then.",
          "translations": {
            "ko": "그때까지 우리의 컨텐츠를 준비할 것입니다.",
            "zh": "我们会在那时准备好我们的内容。",
            "ja": "その時点までに私たちのコンテンツを準備します。",
            "vi": "Chúng tôi sẽ có nội dung sẵn sàng vào thời gian đó."
          }
        },
        {
          "role": "ai",
          "text": "Each team should bring their latest versions.",
          "translations": {
            "ko": "각 팀은 최신 버전을 가져와야 합니다.",
            "zh": "每个团队都应该带来他们最新的版本。",
            "ja": "各チームは最新のバージョンを持ってくるべきです。",
            "vi": "Mỗi nhóm nên mang theo phiên bản mới nhất của họ."
          }
        },
        {
          "role": "user",
          "text": "Understood. We’ll keep visuals separate.",
          "translations": {
            "ko": "이해했습니다. 시각 자료는 따로 유지하겠습니다.",
            "zh": "明白了。我们会将视觉元素单独保留。",
            "ja": "了解しました。ビジュアルは別に保管します。",
            "vi": "Đã hiểu. Chúng tôi sẽ giữ các hình ảnh riêng biệt."
          }
        },
        {
          "role": "ai",
          "text": "We’ll focus on structure and clarity, not formatting.",
          "translations": {
            "ko": "우리는 형식보다는 구조와 명료성에 집중하겠습니다.",
            "zh": "我们会专注于结构和清晰度，而不是格式。",
            "ja": "フォーマットではなく、構造と明瞭さに焦点を当てます。",
            "vi": "Chúng tôi sẽ tập trung vào cấu trúc và rõ ràng, không phải định dạng."
          }
        },
        {
          "role": "user",
          "text": "I have a few open questions to bring up.",
          "translations": {
            "ko": "제기할 몇 가지 미해결 질문이 있습니다.",
            "zh": "我有一些待解决的问题要提出。",
            "ja": "提起するべきいくつかの未解決の問題があります。",
            "vi": "Tôi có một số câu hỏi chưa giải quyết cần đưa ra."
          }
        },
        {
          "role": "ai",
          "text": "It would be good to resolve any open questions then.",
          "translations": {
            "ko": "그때 미해결 질문을 해결하는 것이 좋을 것입니다.",
            "zh": "那时解决任何未解决的问题会很好。",
            "ja": "その時に未解決の問題を解決するのが良いでしょう。",
            "vi": "Sẽ tốt nếu giải quyết bất kỳ câu hỏi nào chưa giải quyết vào lúc đó."
          }
        },
        {
          "role": "user",
          "text": "Thanks. A checklist would be useful.",
          "translations": {
            "ko": "감사합니다. 체크리스트가 유용할 것 같습니다.",
            "zh": "谢谢。一个检查清单会很有用。",
            "ja": "ありがとう。チェックリストがあると便利です。",
            "vi": "Cảm ơn. Một danh sách kiểm tra sẽ hữu ích."
          }
        },
        {
          "role": "ai",
          "text": "I’ll prepare a checklist to guide the review.",
          "translations": {
            "ko": "검토를 안내하기 위해 체크리스트를 준비하겠습니다.",
            "zh": "我会准备一个检查清单来指导审查。",
            "ja": "レビューをガイドするためのチェックリストを作成します。",
            "vi": "Tôi sẽ chuẩn bị một danh sách kiểm tra để hướng dẫn việc đánh giá."
          }
        },
        {
          "role": "user",
          "text": "An hour should be enough if we stay focused.",
          "translations": {
            "ko": "집중한다면 한 시간이면 충분할 것입니다.",
            "zh": "如果我们保持专注，一个小时应该就足够了。",
            "ja": "集中すれば1時間で十分なはずです。",
            "vi": "Một giờ sẽ đủ nếu chúng ta tập trung."
          }
        },
        {
          "role": "ai",
          "text": "Let’s allocate an hour for discussion and revisions.",
          "translations": {
            "ko": "토론과 수정을 위해 한 시간을 할애합시다.",
            "zh": "让我们分配一个小时来讨论和修改。",
            "ja": "議論と修正のために1時間を確保しましょう。",
            "vi": "Hãy dành một giờ cho thảo luận và sửa đổi."
          }
        },
        {
          "role": "user",
          "text": "I’ll reply to the calendar invite today.",
          "translations": {
            "ko": "오늘 달력 초대에 답장하겠습니다.",
            "zh": "我今天会回复日历邀请。",
            "ja": "今日中にカレンダーの招待に返信します。",
            "vi": "Tôi sẽ trả lời lời mời lịch hôm nay."
          }
        },
        {
          "role": "ai",
          "text": "Please confirm your availability by tomorrow.",
          "translations": {
            "ko": "내일까지 참석 가능 여부를 확인해 주세요.",
            "zh": "请在明天之前确认你的可用时间。",
            "ja": "明日までにご都合を確認してください。",
            "vi": "Vui lòng xác nhận sự có mặt của bạn vào ngày mai."
          }
        },
        {
          "role": "user",
          "text": "Looking forward to the session.",
          "translations": {
            "ko": "세션을 기대하고 있습니다.",
            "zh": "期待这次会议。",
            "ja": "セッションを楽しみにしています。",
            "vi": "Mong chờ buổi họp."
          }
        },
        {
          "role": "ai",
          "text": "We’ll send out a finalized time slot once confirmed.",
          "translations": {
            "ko": "확인되면 확정된 시간대를 보내드리겠습니다.",
            "zh": "一旦确认，我们会发送一个最终的时间段。",
            "ja": "確認が取れ次第、最終的な時間帯を送ります。",
            "vi": "Chúng tôi sẽ gửi thời gian cuối cùng một khi đã xác nhận."
          }
        },
        {
          "role": "user",
          "text": "Great. Let us know once it's scheduled.",
          "translations": {
            "ko": "좋습니다. 일정이 확정되면 알려주세요.",
            "zh": "很好。一旦安排好，请告诉我们。",
            "ja": "すばらしい。スケジュールが決まったら知らせてください。",
            "vi": "Tốt. Hãy cho chúng tôi biết khi nào đã lên lịch."
          }
        }
      ]
    },
    {
      "description": {
        "ko": "새 제품 아이디어 브레인스토밍",
        "zh": "对新产品的头脑风暴",
        "ja": "新製品のアイデアをブレインストーミング",
        "vi": "Đưa ra ý tưởng sản phẩm mới"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Let’s kick off the brainstorming session.",
          "translations": {
            "ko": "브레인스토밍 세션을 시작합시다.",
            "zh": "让我们开始头脑风暴会议。",
            "ja": "ブレインストーミングセッションを始めましょう。",
            "vi": "Hãy bắt đầu buổi họp đưa ra ý tưởng."
          }
        },
        {
          "role": "user",
          "text": "I’ve been thinking about a mobile-only feature.",
          "translations": {
            "ko": "모바일 전용 기능에 대해 생각해 보았습니다.",
            "zh": "我一直在考虑一个只适用于移动设备的功能。",
            "ja": "モバイル専用の機能について考えていました。",
            "vi": "Tôi đã suy nghĩ về một tính năng chỉ dành cho di động."
          }
        },
        {
          "role": "ai",
          "text": "Feel free to share even early-stage ideas.",
          "translations": {
            "ko": "초기 단계 아이디어라도 자유롭게 공유해주세요.",
            "zh": "随意分享即使是初期阶段的想法。",
            "ja": "初期段階のアイデアでも気軽に共有してください。",
            "vi": "Hãy thoải mái chia sẻ cả những ý tưởng ở giai đoạn sớm."
          }
        },
        {
          "role": "user",
          "text": "What if we simplify onboarding for new users?",
          "translations": {
            "ko": "새로운 사용자를 위한 온보딩을 단순화하면 어떨까요?",
            "zh": "如果我们简化新用户的入门流程会怎样？",
            "ja": "新規ユーザーのオンボーディングを簡素化するのはどうでしょうか？",
            "vi": "Nếu chúng ta đơn giản hóa quá trình làm quen cho người dùng mới thì sao?"
          }
        },
        {
          "role": "ai",
          "text": "No need to be perfect. Just contribute freely.",
          "translations": {
            "ko": "완벽할 필요 없습니다. 자유롭게 기여하세요.",
            "zh": "不需要完美，只需自由贡献。",
            "ja": "完璧である必要はありません。自由に貢献してください。",
            "vi": "Không cần phải hoàn hảo. Chỉ cần tự do đóng góp."
          }
        },
        {
          "role": "user",
          "text": "Here’s one: auto-save in offline mode.",
          "translations": {
            "ko": "이것은 어떨까요: 오프라인 모드에서 자동 저장.",
            "zh": "这是一个：离线模式下的自动保存。",
            "ja": "これはどうでしょう：オフラインモードでの自動保存。",
            "vi": "Đây là một ý tưởng: tự động lưu khi ở chế độ ngoại tuyến."
          }
        },
        {
          "role": "ai",
          "text": "We’ll go around once and then open it up.",
          "translations": {
            "ko": "한 번 돌아본 후에 논의를 열겠습니다.",
            "zh": "我们会先讨论一轮，然后再开放讨论。",
            "ja": "一周したら、それを開放します。",
            "vi": "Chúng ta sẽ đi một vòng và sau đó mở lên."
          }
        },
        {
          "role": "user",
          "text": "I like that. Maybe tie it to notifications.",
          "translations": {
            "ko": "좋아요. 알림과 연결하는 것도 좋을 것 같아요.",
            "zh": "我喜欢这个。也许可以和通知功能关联起来。",
            "ja": "それが好きです。通知にそれを結びつけるのはどうでしょうか？",
            "vi": "Tôi thích điều đó. Có thể liên kết nó với thông báo."
          }
        },
        {
          "role": "ai",
          "text": "I’ll jot everything down on the whiteboard.",
          "translations": {
            "ko": "모든 것을 화이트보드에 적어두겠습니다.",
            "zh": "我会把所有的内容都写在白板上。",
            "ja": "ホワイトボードにすべてを書き留めます。",
            "vi": "Tôi sẽ ghi chú tất cả mọi thứ lên bảng trắng."
          }
        },
        {
          "role": "user",
          "text": "Another idea: custom templates for each role.",
          "translations": {
            "ko": "또 다른 아이디어: 각 역할에 맞는 사용자 정의 템플릿.",
            "zh": "另一个想法：为每个角色定制模板。",
            "ja": "別のアイデア：各役割ごとのカスタムテンプレート。",
            "vi": "Một ý tưởng khác: mẫu tùy chỉnh cho mỗi vai trò."
          }
        },
        {
          "role": "ai",
          "text": "Let’s aim for quantity over quality at first.",
          "translations": {
            "ko": "처음에는 양에 초점을 맞추어 봅시다.",
            "zh": "我们首先要追求的是数量而不是质量。",
            "ja": "最初は量を重視しましょう。",
            "vi": "Hãy hướng tới số lượng trước chất lượng ở lúc đầu."
          }
        },
        {
          "role": "user",
          "text": "That could work well for teams.",
          "translations": {
            "ko": "그것은 팀에게 잘 맞을 수 있습니다.",
            "zh": "这对团队可能会很有效。",
            "ja": "それはチームにとってうまく機能する可能性があります。",
            "vi": "Điều đó có thể hoạt động tốt cho các nhóm."
          }
        },
        {
          "role": "ai",
          "text": "We’ll vote on the top ideas at the end.",
          "translations": {
            "ko": "마지막에 최고의 아이디어에 대해 투표하겠습니다.",
            "zh": "我们将在最后对顶级的想法进行投票。",
            "ja": "最後にトップのアイデアに投票します。",
            "vi": "Chúng ta sẽ bỏ phiếu cho những ý tưởng hàng đầu vào cuối."
          }
        },
        {
          "role": "user",
          "text": "Let’s make it flexible but easy to use.",
          "translations": {
            "ko": "유연하면서도 사용하기 쉽게 만들어 봅시다.",
            "zh": "让它既灵活又易于使用。",
            "ja": "柔軟性を持たせつつ、使いやすさを保つようにしましょう。",
            "vi": "Hãy làm cho nó linh hoạt nhưng dễ sử dụng."
          }
        },
        {
          "role": "ai",
          "text": "Try building on each other’s suggestions.",
          "translations": {
            "ko": "서로의 제안을 바탕으로 만들어 보세요.",
            "zh": "尝试在彼此的建议上进行构建。",
            "ja": "お互いの提案を基に構築してみてください。",
            "vi": "Hãy thử xây dựng dựa trên các đề xuất của nhau."
          }
        },
        {
          "role": "user",
          "text": "We should test with early users if possible.",
          "translations": {
            "ko": "가능하다면 초기 사용자들과 테스트해야 합니다.",
            "zh": "如果可能的话，我们应该让早期用户进行测试。",
            "ja": "可能であれば、早期のユーザーでテストすべきです。",
            "vi": "Nếu có thể, chúng ta nên thử nghiệm với người dùng sớm."
          }
        },
        {
          "role": "ai",
          "text": "No criticism yet. We’re just collecting input.",
          "translations": {
            "ko": "아직 비판은 없습니다. 우리는 그저 의견을 수집하고 있습니다.",
            "zh": "现在还不需要批评，我们只是在收集意见。",
            "ja": "まだ批判は不要です。ただ意見を集めているだけです。",
            "vi": "Chưa phê bình gì cả. Chúng ta chỉ đang thu thập ý kiến."
          }
        },
        {
          "role": "user",
          "text": "I’ve got a few more but will save them for later.",
          "translations": {
            "ko": "몇 가지 더 있지만 나중에 말하겠습니다.",
            "zh": "我还有一些想法，但我会留到以后再说。",
            "ja": "他にもいくつかありますが、後で保存します。",
            "vi": "Tôi có thêm một số ý tưởng nhưng sẽ lưu lại cho sau."
          }
        },
        {
          "role": "ai",
          "text": "Ready? Who wants to start us off?",
          "translations": {
            "ko": "준비되셨나요? 누가 시작해주실래요?",
            "zh": "准备好了吗？谁想先开始？",
            "ja": "準備はいいですか？誰から始めますか？",
            "vi": "Sẵn sàng chưa? Ai muốn bắt đầu cho chúng ta?"
          }
        },
        {
          "role": "user",
          "text": "Thanks. This was a fun session.",
          "translations": {
            "ko": "감사합니다. 재미있는 세션이었습니다.",
            "zh": "谢谢。这是一个有趣的会议。",
            "ja": "ありがとう。これは楽しいセッションでした。",
            "vi": "Cảm ơn. Đây là một phiên họp thú vị."
          }
        }
      ]
    },
    {
      "description": {
        "ko": "팀 간 협업에 대한 논의",
        "zh": "讨论跨团队合作。",
        "ja": "チーム間の協力について話し合う",
        "vi": "Thảo luận về sự hợp tác giữa các nhóm"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Today we’ll talk about how to improve collaboration across teams.",
          "translations": {
            "ko": "오늘은 팀 간 협업을 개선하는 방법에 대해 이야기하겠습니다.",
            "zh": "今天我们将讨论如何提高跨团队的合作。",
            "ja": "今日は、チーム間の協力をどのように改善するかについて話し合います。",
            "vi": "Hôm nay chúng ta sẽ nói về cách cải thiện sự hợp tác giữa các nhóm."
          }
        },
        {
          "role": "user",
          "text": "I think lack of visibility is a big factor.",
          "translations": {
            "ko": "가시성 부족이 큰 요인인 것 같습니다.",
            "zh": "我认为缺乏可见性是一个重要因素。",
            "ja": "可視性の欠如が大きな要因だと思います。",
            "vi": "Tôi nghĩ thiếu sự nhìn nhận rõ ràng là một yếu tố lớn."
          }
        },
        {
          "role": "ai",
          "text": "Let’s start by identifying current challenges.",
          "translations": {
            "ko": "현재의 문제점을 파악하는 것부터 시작합시다.",
            "zh": "让我们先确定当前的挑战。",
            "ja": "現在の課題を特定することから始めましょう。",
            "vi": "Hãy bắt đầu bằng việc xác định những thách thức hiện tại."
          }
        },
        {
          "role": "user",
          "text": "Handoffs during testing are often unclear.",
          "translations": {
            "ko": "테스트 중인 핸드오프가 종종 불명확합니다.",
            "zh": "测试期间的交接通常不明确。",
            "ja": "テスト中の引き継ぎはしばしば不明確です。",
            "vi": "Việc chuyển giao trong quá trình kiểm tra thường không rõ ràng."
          }
        },
        {
          "role": "ai",
          "text": "Where are handoffs slowing things down?",
          "translations": {
            "ko": "어디서 핸드오프가 진행을 늦추고 있나요?",
            "zh": "在哪些地方交接拖慢了进度？",
            "ja": "どこで引き継ぎが進行を遅らせていますか？",
            "vi": "Việc chuyển giao đang làm chậm quá trình ở đâu?"
          }
        },
        {
          "role": "user",
          "text": "More sync time could definitely help.",
          "translations": {
            "ko": "더 많은 동기화 시간이 분명히 도움이 될 것입니다.",
            "zh": "更多的同步时间肯定会有所帮助。",
            "ja": "もっと同期時間があれば確かに助けになるでしょう。",
            "vi": "Thời gian đồng bộ hóa nhiều hơn chắc chắn sẽ giúp ích."
          }
        },
        {
          "role": "ai",
          "text": "Do we need better visibility into each team’s workflow?",
          "translations": {
            "ko": "각 팀의 작업 흐름에 대한 더 나은 가시성이 필요한가요?",
            "zh": "我们需要更好地了解每个团队的工作流程吗？",
            "ja": "各チームのワークフローに対するより良い可視性が必要ですか？",
            "vi": "Chúng ta có cần hiểu rõ hơn về quy trình làm việc của mỗi nhóm không?"
          }
        },
        {
          "role": "user",
          "text": "A shared dashboard might improve alignment.",
          "translations": {
            "ko": "공유 대시보드가 조정을 개선할 수 있습니다.",
            "zh": "共享的仪表板可能会提高一致性。",
            "ja": "共有ダッシュボードが整列を改善するかもしれません。",
            "vi": "Một bảng điều khiển chung có thể cải thiện sự đồng lòng."
          }
        },
        {
          "role": "ai",
          "text": "Would regular syncs help bridge the gaps?",
          "translations": {
            "ko": "정기적인 동기화가 격차를 메우는 데 도움이 될까요?",
            "zh": "定期同步会帮助弥补差距吗？",
            "ja": "定期的な同期はギャップを埋めるのに役立つでしょうか？",
            "vi": "Liệu việc đồng bộ hóa thường xuyên có giúp lấp đầy các khoảng trống không?"
          }
        },
        {
          "role": "user",
          "text": "I’d suggest monthly cross-team check-ins.",
          "translations": {
            "ko": "월간 팀 간 체크인을 제안하고 싶습니다.",
            "zh": "我建议每月进行一次跨团队的检查。",
            "ja": "月次のチーム間チェックインを提案します。",
            "vi": "Tôi đề xuất kiểm tra chéo giữa các nhóm hàng tháng."
          }
        },
        {
          "role": "ai",
          "text": "We should also align on shared priorities.",
          "translations": {
            "ko": "공유 우선순위에 대해서도 일치시켜야 합니다.",
            "zh": "我们也应该在共享的优先事项上达成一致。",
            "ja": "共有の優先事項についても合意するべきです。",
            "vi": "Chúng ta cũng nên thống nhất về các ưu tiên chung."
          }
        },
        {
          "role": "user",
          "text": "Naming one contact per area makes sense.",
          "translations": {
            "ko": "각 지역별로 한 명의 연락처를 지정하는 것이 합리적입니다.",
            "zh": "每个区域指定一个联系人是有意义的。",
            "ja": "エリアごとに1つの連絡先を指定するのは理にかなっています。",
            "vi": "Đặt tên một liên hệ cho mỗi khu vực là hợp lý."
          }
        },
        {
          "role": "ai",
          "text": "Let’s assign points of contact for each function.",
          "translations": {
            "ko": "각 기능에 대한 연락처를 지정합시다.",
            "zh": "我们为每个功能指定联系点。",
            "ja": "各機能に対する連絡先を割り当てましょう。",
            "vi": "Hãy gán điểm liên hệ cho mỗi chức năng."
          }
        },
        {
          "role": "user",
          "text": "Great. That’ll help with accountability.",
          "translations": {
            "ko": "좋습니다. 그렇게 하면 책임성이 높아질 것입니다.",
            "zh": "很好。这将有助于明确责任。",
            "ja": "素晴らしい。それで責任追及がしやすくなります。",
            "vi": "Tốt. Điều đó sẽ giúp với trách nhiệm giải trình."
          }
        },
        {
          "role": "ai",
          "text": "We’ll document decisions in a shared space.",
          "translations": {
            "ko": "우리는 결정 사항을 공유 공간에 기록할 것입니다.",
            "zh": "我们将在一个共享空间记录决策。",
            "ja": "決定事項は共有スペースに記録します。",
            "vi": "Chúng tôi sẽ ghi lại các quyết định trong một không gian chung."
          }
        },
        {
          "role": "user",
          "text": "Thanks for taking notes on this.",
          "translations": {
            "ko": "이것에 대해 메모를 해주셔서 감사합니다.",
            "zh": "感谢你对此进行记录。",
            "ja": "これについてノートを取ってくれてありがとう。",
            "vi": "Cảm ơn bạn đã ghi chú về điều này."
          }
        },
        {
          "role": "ai",
          "text": "I’ll draft a proposal for next steps after this.",
          "translations": {
            "ko": "이후 다음 단계에 대한 제안서를 작성하겠습니다.",
            "zh": "我会在此之后起草下一步的提案。",
            "ja": "これ以降の次のステップについての提案案を作成します。",
            "vi": "Tôi sẽ soạn thảo một đề xuất cho các bước tiếp theo sau này."
          }
        },
        {
          "role": "user",
          "text": "Looking forward to seeing your proposal.",
          "translations": {
            "ko": "당신의 제안서를 기대하고 있습니다.",
            "zh": "期待看到你的提案。",
            "ja": "あなたの提案を楽しみにしています。",
            "vi": "Mong chờ xem đề xuất của bạn."
          }
        },
        {
          "role": "ai",
          "text": "Any feedback on what’s worked well in the past?",
          "translations": {
            "ko": "과거에 잘 작동했던 것에 대한 피드백이 있나요?",
            "zh": "对过去效果好的事情有什么反馈？",
            "ja": "過去にうまくいったことについてのフィードバックはありますか？",
            "vi": "Có phản hồi nào về những gì đã hoạt động tốt trong quá khứ không?"
          }
        },
        {
          "role": "user",
          "text": "Happy to share ideas after the meeting too.",
          "translations": {
            "ko": "회의 후에도 아이디어를 공유하는 것을 기쁘게 생각합니다.",
            "zh": "会议后也很乐意分享想法。",
            "ja": "会議後もアイデアを共有することができます。",
            "vi": "Rất vui khi chia sẻ ý tưởng sau cuộc họp."
          }
        }
      ]
    },
    {
      "description": {
        "ko": "회고 회의를 진행하는 것",
        "zh": "进行回顾会议",
        "ja": "振り返り会議を行う",
        "vi": "Tiến hành một cuộc họp tổng kết."
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Welcome to the sprint retrospective.",
          "translations": {
            "ko": "스프린트 회고에 오신 것을 환영합니다.",
            "zh": "欢迎参加冲刺回顾。",
            "ja": "スプリントの振り返りへようこそ。",
            "vi": "Chào mừng bạn đến với cuộc tổng kết sprint."
          }
        },
        {
          "role": "user",
          "text": "One thing that went well was communication.",
          "translations": {
            "ko": "잘 진행된 한 가지는 커뮤니케이션이었습니다.",
            "zh": "一个做得好的事情是沟通。",
            "ja": "うまくいった一つのことはコミュニケーションでした。",
            "vi": "Một điều đã diễn ra tốt là giao tiếp."
          }
        },
        {
          "role": "ai",
          "text": "Let’s begin by sharing what went well.",
          "translations": {
            "ko": "잘 진행된 것에 대해 공유하는 것부터 시작합시다.",
            "zh": "让我们开始分享做得好的事情。",
            "ja": "うまくいったことを共有することから始めましょう。",
            "vi": "Hãy bắt đầu bằng việc chia sẻ những gì đã diễn ra tốt."
          }
        },
        {
          "role": "user",
          "text": "Daily standups helped keep us aligned.",
          "translations": {
            "ko": "매일 스탠드업은 우리를 일치시키는 데 도움이 되었습니다.",
            "zh": "每日站立会议帮助我们保持一致。",
            "ja": "デイリースタンドアップは私たちを一致させるのに役立ちました。",
            "vi": "Cuộc họp hàng ngày đã giúp chúng tôi giữ được sự đồng lòng."
          }
        },
        {
          "role": "ai",
          "text": "Now let’s talk about what didn’t go as planned.",
          "translations": {
            "ko": "이제 계획대로 진행되지 않은 것에 대해 이야기해 봅시다.",
            "zh": "现在让我们谈谈没有按计划进行的事情。",
            "ja": "今、計画通りにいかなかったことについて話しましょう。",
            "vi": "Bây giờ hãy nói về những gì không diễn ra như kế hoạch."
          }
        },
        {
          "role": "user",
          "text": "The deployment process still needs work.",
          "translations": {
            "ko": "배포 과정이 아직 개선이 필요합니다.",
            "zh": "部署过程仍需要改进。",
            "ja": "デプロイメントプロセスはまだ改善が必要です。",
            "vi": "Quá trình triển khai vẫn cần phải cải thiện."
          }
        },
        {
          "role": "ai",
          "text": "Try to keep feedback constructive and specific.",
          "translations": {
            "ko": "피드백은 건설적이고 구체적으로 유지해 주세요.",
            "zh": "尽量保持反馈建设性和具体。",
            "ja": "フィードバックは建設的で具体的にするようにしてください。",
            "vi": "Hãy cố gắng giữ phản hồi mang tính xây dựng và cụ thể."
          }
        },
        {
          "role": "user",
          "text": "Some tickets weren’t fully scoped in advance.",
          "translations": {
            "ko": "일부 티켓은 미리 완전히 정의되지 않았습니다.",
            "zh": "有些票据没有提前完全确定范围。",
            "ja": "一部のチケットは事前に完全にスコープされていませんでした。",
            "vi": "Một số vé không được xác định rõ ràng trước."
          }
        },
        {
          "role": "ai",
          "text": "What slowed us down or caused confusion?",
          "translations": {
            "ko": "우리를 느리게 하거나 혼란을 일으킨 것은 무엇인가요?",
            "zh": "什么让我们放慢了步伐或造成了混淆？",
            "ja": "私たちを遅らせたり混乱させたりしたものは何ですか？",
            "vi": "Điều gì đã làm chúng tôi chậm lại hoặc gây rối loạn?"
          }
        },
        {
          "role": "user",
          "text": "We ran into some unexpected tech debt.",
          "translations": {
            "ko": "예상치 못한 기술 부채에 부딪혔습니다.",
            "zh": "我们遇到了一些意外的技术债务。",
            "ja": "予期しない技術的な負債に遭遇しました。",
            "vi": "Chúng tôi đã gặp phải một số nợ kỹ thuật không mong đợi."
          }
        },
        {
          "role": "ai",
          "text": "Are there any blockers we didn’t anticipate?",
          "translations": {
            "ko": "우리가 예상하지 못한 어떤 장애물이 있었나요?",
            "zh": "有没有我们没预见到的阻碍？",
            "ja": "予想しなかったブロッカーはありますか？",
            "vi": "Có bất kỳ trở ngại nào mà chúng tôi không dự đoán được không?"
          }
        },
        {
          "role": "user",
          "text": "We didn’t plan for the external review.",
          "translations": {
            "ko": "외부 검토를 계획에 포함시키지 않았습니다.",
            "zh": "我们没有计划外部审查。",
            "ja": "外部レビューの計画を立てていませんでした。",
            "vi": "Chúng tôi không lập kế hoạch cho việc xem xét bên ngoài."
          }
        },
        {
          "role": "ai",
          "text": "Let’s come up with a few concrete improvements.",
          "translations": {
            "ko": "몇 가지 구체적인 개선 사항을 생각해 봅시다.",
            "zh": "让我们想出一些具体的改进措施。",
            "ja": "具体的な改善策をいくつか考えましょう。",
            "vi": "Hãy đưa ra một số cải tiến cụ thể."
          }
        },
        {
          "role": "user",
          "text": "We should document dependencies more clearly.",
          "translations": {
            "ko": "의존성을 더 명확하게 문서화해야 합니다.",
            "zh": "我们应该更清楚地记录依赖关系。",
            "ja": "依存関係をもっと明確に記録すべきです。",
            "vi": "Chúng tôi nên ghi rõ ràng hơn về sự phụ thuộc."
          }
        },
        {
          "role": "ai",
          "text": "We’ll assign owners for each action item.",
          "translations": {
            "ko": "각 행동 항목에 대한 소유자를 지정하겠습니다.",
            "zh": "我们将为每个行动项目指定负责人。",
            "ja": "各アクションアイテムのオーナーを割り当てます。",
            "vi": "Chúng tôi sẽ gán chủ sở hữu cho mỗi mục hành động."
          }
        },
        {
          "role": "user",
          "text": "I can take ownership of that task.",
          "translations": {
            "ko": "그 작업에 대한 책임을 저가 맡겠습니다.",
            "zh": "我可以负责那项任务。",
            "ja": "そのタスクのオーナーシップを引き受けることができます。",
            "vi": "Tôi có thể chịu trách nhiệm về nhiệm vụ đó."
          }
        },
        {
          "role": "ai",
          "text": "I’ll post a summary of the discussion afterward.",
          "translations": {
            "ko": "나중에 논의 내용 요약을 게시하겠습니다.",
            "zh": "我会在之后发布讨论的总结。",
            "ja": "後で議論の要約を投稿します。",
            "vi": "Tôi sẽ đăng tóm tắt cuộc thảo luận sau đó."
          }
        },
        {
          "role": "user",
          "text": "Looking forward to the summary.",
          "translations": {
            "ko": "요약을 기대하고 있습니다.",
            "zh": "期待总结。",
            "ja": "要約を楽しみにしています。",
            "vi": "Mong chờ xem tóm tắt."
          }
        },
        {
          "role": "ai",
          "text": "Thanks for your honest input today.",
          "translations": {
            "ko": "오늘 솔직한 의견을 내주셔서 감사합니다.",
            "zh": "感谢你今天的诚实反馈。",
            "ja": "今日は率直な意見をありがとう。",
            "vi": "Cảm ơn sự đóng góp thẳng thắn của bạn hôm nay."
          }
        },
        {
          "role": "user",
          "text": "Thanks. This was a productive session.",
          "translations": {
            "ko": "감사합니다. 이번 세션은 생산적이었습니다.",
            "zh": "谢谢。这是一个富有成效的会议。",
            "ja": "ありがとう。これは生産的なセッションでした。",
            "vi": "Cảm ơn. Đây là một phiên làm việc hiệu quả."
          }
        }
      ]
    }
  ],
  "advanced": [
    {
      "description": {
        "ko": "경영진에게 분기별 결과를 발표하는 중",
        "zh": "向高管报告季度业绩",
        "ja": "幹部に対する四半期結果の発表",
        "vi": "Trình bày kết quả quý cho các nhà điều hành"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Thanks for joining. I’ll walk you through our Q2 performance highlights.",
          "translations": {
            "ko": "참석해 주셔서 감사합니다. 2분기 성과 하이라이트를 안내하겠습니다.",
            "zh": "感谢您的参与。我将带您了解我们第二季度的业绩亮点。",
            "ja": "参加していただきありがとうございます。Q2のパフォーマンスハイライトをご説明します。",
            "vi": "Cảm ơn đã tham gia. Tôi sẽ hướng dẫn bạn qua các điểm nổi bật về hiệu suất của chúng tôi trong quý 2."
          }
        },
        {
          "role": "user",
          "text": "Thanks. That was a clear overview.",
          "translations": {
            "ko": "감사합니다. 명확한 개요였습니다.",
            "zh": "谢谢。这是一个清晰的概述。",
            "ja": "ありがとう。それは明確な概要でした。",
            "vi": "Cảm ơn. Đó là một cái nhìn tổng quan rõ ràng."
          }
        },
        {
          "role": "ai",
          "text": "Revenue exceeded projections by 7 percent, driven by strong renewal rates.",
          "translations": {
            "ko": "강력한 재계약률에 힘입어 수익이 예상치를 7퍼센트 초과하였습니다.",
            "zh": "由于续约率强劲，收入超出预期7%。",
            "ja": "強い更新率により、収益は予測を7％上回りました。",
            "vi": "Doanh thu vượt quá dự báo 7 phần trăm, do tỷ lệ gia hạn mạnh."
          }
        },
        {
          "role": "user",
          "text": "Great to see performance beating forecasts.",
          "translations": {
            "ko": "예상치를 뛰어넘는 성과를 보니 기쁩니다.",
            "zh": "很高兴看到业绩超出预测。",
            "ja": "パフォーマンスが予測を上回るのは素晴らしいことです。",
            "vi": "Rất vui khi thấy hiệu suất vượt dự báo."
          }
        },
        {
          "role": "ai",
          "text": "Customer churn decreased significantly compared to Q1.",
          "translations": {
            "ko": "고객 이탈률이 1분기에 비해 크게 감소하였습니다.",
            "zh": "与第一季度相比，客户流失率显著下降。",
            "ja": "顧客の離脱率はQ1に比べて大幅に減少しました。",
            "vi": "Tỷ lệ khách hàng rời bỏ giảm đáng kể so với quý 1."
          }
        },
        {
          "role": "user",
          "text": "Lower churn is definitely a positive sign.",
          "translations": {
            "ko": "이탈률 감소는 확실히 긍정적인 신호입니다.",
            "zh": "流失率的降低绝对是一个积极的信号。",
            "ja": "離脱率の低下は間違いなく良い兆候です。",
            "vi": "Tỷ lệ churn thấp hơn chắc chắn là dấu hiệu tích cực."
          }
        },
        {
          "role": "ai",
          "text": "We also launched two new features that contributed to upsell growth.",
          "translations": {
            "ko": "또한, 업셀링 성장에 기여한 두 가지 새로운 기능을 출시하였습니다.",
            "zh": "我们还推出了两个新功能，这有助于提高销售额。",
            "ja": "また、アップセル成長に貢献した2つの新機能を導入しました。",
            "vi": "Chúng tôi cũng đã ra mắt hai tính năng mới đã góp phần vào sự tăng trưởng upsell."
          }
        },
        {
          "role": "user",
          "text": "Nice work on getting those features out the door.",
          "translations": {
            "ko": "그 기능들을 출시한 것에 대해 잘 했습니다.",
            "zh": "在推出这些新功能上做得很好。",
            "ja": "その機能をリリースしたのは素晴らしい仕事です。",
            "vi": "Công việc tốt trong việc đưa những tính năng này ra khỏi cửa."
          }
        },
        {
          "role": "ai",
          "text": "However, implementation delays slightly affected onboarding time.",
          "translations": {
            "ko": "그러나, 구현 지연이 온보딩 시간에 약간 영향을 미쳤습니다.",
            "zh": "然而，实施延迟稍微影响了新用户的入门时间。",
            "ja": "しかし、実装の遅延がオンボーディング時間に若干影響を与えました。",
            "vi": "Tuy nhiên, sự chậm trễ trong việc triển khai đã ảnh hưởng nhẹ đến thời gian onboarding."
          }
        },
        {
          "role": "user",
          "text": "Understood. What caused the implementation delay?",
          "translations": {
            "ko": "이해했습니다. 구현 지연의 원인은 무엇이었나요?",
            "zh": "明白了。是什么导致了实施的延迟？",
            "ja": "了解しました。実装の遅延の原因は何ですか？",
            "vi": "Hiểu rồi. Điều gì đã gây ra sự chậm trễ trong việc triển khai?"
          }
        },
        {
          "role": "ai",
          "text": "We’ve identified key areas for process improvement moving forward.",
          "translations": {
            "ko": "앞으로 개선할 핵심 영역을 확인하였습니다.",
            "zh": "我们已经确定了未来改进流程的关键领域。",
            "ja": "私たちは、今後のプロセス改善のための重要な領域を特定しました。",
            "vi": "Chúng tôi đã xác định các lĩnh vực chính để cải tiến quy trình tiếp theo."
          }
        },
        {
          "role": "user",
          "text": "Process improvements sound like the right focus.",
          "translations": {
            "ko": "프로세스 개선이 중점이 되어야 한다고 생각합니다.",
            "zh": "流程改进听起来是正确的重点。",
            "ja": "プロセス改善は正しい焦点のように聞こえます。",
            "vi": "Cải tiến quy trình nghe có vẻ là trọng tâm đúng."
          }
        },
        {
          "role": "ai",
          "text": "Operational efficiency increased across most departments.",
          "translations": {
            "ko": "대부분의 부서에서 운영 효율성이 향상되었습니다.",
            "zh": "大多数部门的运营效率都有所提高。",
            "ja": "ほとんどの部門で運用効率が向上しました。",
            "vi": "Hiệu quả hoạt động tăng trong hầu hết các bộ phận."
          }
        },
        {
          "role": "user",
          "text": "Good to hear efficiency is trending up.",
          "translations": {
            "ko": "효율성이 상승하는 것을 듣고 좋습니다.",
            "zh": "很高兴听到效率正在提高。",
            "ja": "効率が上昇傾向にあると聞いて良かったです。",
            "vi": "Rất vui khi nghe hiệu quả đang theo xu hướng tăng."
          }
        },
        {
          "role": "ai",
          "text": "Marketing ROI was strong, especially in digital campaigns.",
          "translations": {
            "ko": "마케팅 ROI가 특히 디지털 캠페인에서 강하게 나타났습니다.",
            "zh": "市场投资回报率强劲，尤其是在数字营销活动中。",
            "ja": "マーケティングのROIは特にデジタルキャンペーンで強かったです。",
            "vi": "ROI của Marketing rất mạnh, đặc biệt là trong các chiến dịch kỹ thuật số."
          }
        },
        {
          "role": "user",
          "text": "What drove the ROI spike in marketing?",
          "translations": {
            "ko": "마케팅에서 ROI가 급증한 원인은 무엇인가요?",
            "zh": "是什么导致了市场投资回报率的激增？",
            "ja": "マーケティングのROIが急増した要因は何ですか？",
            "vi": "Điều gì đã thúc đẩy sự tăng trưởng ROI trong marketing?"
          }
        },
        {
          "role": "ai",
          "text": "We’ll review department KPIs next and open for questions.",
          "translations": {
            "ko": "다음으로 부서별 KPI를 검토하고 질문을 받겠습니다.",
            "zh": "接下来我们将审查部门的关键绩效指标，并回答问题。",
            "ja": "次に部門のKPIをレビューし、質問を受け付けます。",
            "vi": "Chúng tôi sẽ xem xét KPIs của các bộ phận tiếp theo và mở cửa cho câu hỏi."
          }
        },
        {
          "role": "user",
          "text": "Looking forward to the KPI breakdown.",
          "translations": {
            "ko": "KPI 분석을 기대하고 있습니다.",
            "zh": "期待对关键绩效指标的详细解读。",
            "ja": "KPIの詳細に期待しています。",
            "vi": "Mong chờ phân tích KPI."
          }
        },
        {
          "role": "ai",
          "text": "Let me know if you'd like to dive deeper into any section.",
          "translations": {
            "ko": "어떤 부분에 대해 더 자세히 알고 싶으시다면 알려주세요.",
            "zh": "如果您想深入了解任何部分，请告诉我。",
            "ja": "どのセクションを深く掘り下げたいか教えてください。",
            "vi": "Hãy cho tôi biết nếu bạn muốn tìm hiểu sâu hơn về bất kỳ phần nào."
          }
        },
        {
          "role": "user",
          "text": "I may have a question after reviewing the appendix.",
          "translations": {
            "ko": "부록을 검토한 후에 질문이 있을 수도 있습니다.",
            "zh": "在查看附录后，我可能会有问题。",
            "ja": "付録を見た後に質問があるかもしれません。",
            "vi": "Tôi có thể có câu hỏi sau khi xem phụ lục."
          }
        }
      ]
    },
    {
      "description": {
        "ko": "리더십 회의에서 전략적 우선순위를 정의하는 중",
        "zh": "在领导会议中确定战略优先事项",
        "ja": "リーダーシップミーティングで戦略的優先事項を定義する",
        "vi": "Xác định ưu tiên chiến lược trong cuộc họp lãnh đạo"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Let’s align on the top three strategic priorities for the next quarter.",
          "translations": {
            "ko": "다음 분기에 대한 상위 세 가지 전략적 우선순위에 대해 합의합시다.",
            "zh": "让我们就下一季度的前三个战略优先事项达成一致。",
            "ja": "次の四半期のトップ3の戦略的優先事項について合意しましょう。",
            "vi": "Hãy đồng lòng về ba ưu tiên chiến lược hàng đầu cho quý tiếp theo."
          }
        },
        {
          "role": "user",
          "text": "Sounds like a strong set of focus areas.",
          "translations": {
            "ko": "강력한 집중 영역 세트로 보입니다.",
            "zh": "这听起来像是一套强有力的关注领域。",
            "ja": "強力な焦点領域のセットのように聞こえます。",
            "vi": "Nghe có vẻ như một tập hợp mạnh mẽ của các lĩnh vực tập trung."
          }
        },
        {
          "role": "ai",
          "text": "Our first challenge is improving product reliability at scale.",
          "translations": {
            "ko": "첫 번째 도전은 제품의 신뢰성을 대규모로 향상시키는 것입니다.",
            "zh": "我们的第一个挑战是提高产品的可靠性。",
            "ja": "最初の課題は、製品の信頼性をスケールで改善することです。",
            "vi": "Thách thức đầu tiên của chúng tôi là cải thiện độ tin cậy của sản phẩm ở quy mô lớn."
          }
        },
        {
          "role": "user",
          "text": "Agreed. Product reliability should be our top priority.",
          "translations": {
            "ko": "동의합니다. 제품의 신뢰성은 우리의 최우선 순위가 되어야 합니다.",
            "zh": "同意。产品可靠性应该是我们的首要任务。",
            "ja": "同意します。製品の信頼性は最優先事項であるべきです。",
            "vi": "Đồng ý. Độ tin cậy của sản phẩm nên là ưu tiên hàng đầu của chúng tôi."
          }
        },
        {
          "role": "ai",
          "text": "Second, we need to accelerate time-to-value for new customers.",
          "translations": {
            "ko": "두 번째로, 새로운 고객에 대한 가치 제공 시간을 가속화해야 합니다.",
            "zh": "其次，我们需要加快为新客户提供价值的时间。",
            "ja": "二つ目に、新規顧客の価値を早期に実現する必要があります。",
            "vi": "Thứ hai, chúng tôi cần tăng tốc thời gian mang lại giá trị cho khách hàng mới."
          }
        },
        {
          "role": "user",
          "text": "Accelerating onboarding is also critical for growth.",
          "translations": {
            "ko": "온보딩 가속화도 성장에 있어 중요합니다.",
            "zh": "加快入门速度对增长也至关重要。",
            "ja": "オンボーディングの加速も成長にとって重要です。",
            "vi": "Việc tăng tốc onboarding cũng rất quan trọng cho sự tăng trưởng."
          }
        },
        {
          "role": "ai",
          "text": "Third, we must refine our go-to-market strategy for APAC.",
          "translations": {
            "ko": "세 번째로, APAC에 대한 시장 진출 전략을 세밀하게 다듬어야 합니다.",
            "zh": "第三，我们必须优化我们在亚太地区的市场进入策略。",
            "ja": "三つ目に、APAC向けの市場参入戦略を見直す必要があります。",
            "vi": "Thứ ba, chúng tôi phải tinh chỉnh chiến lược ra thị trường của chúng tôi cho APAC."
          }
        },
        {
          "role": "user",
          "text": "APAC strategy definitely needs refinement.",
          "translations": {
            "ko": "APAC 전략은 확실히 개선이 필요합니다.",
            "zh": "亚太地区的策略确实需要优化。",
            "ja": "APAC戦略は確かに見直しが必要です。",
            "vi": "Chiến lược APAC chắc chắn cần được tinh chỉnh."
          }
        },
        {
          "role": "ai",
          "text": "I propose forming cross-functional task forces for each initiative.",
          "translations": {
            "ko": "각 이니셔티브에 대해 크로스 기능 작업 그룹을 구성하는 것을 제안합니다.",
            "zh": "我建议为每个倡议组建跨职能任务小组。",
            "ja": "各イニシアチブに対して、クロス機能タスクフォースを組織することを提案します。",
            "vi": "Tôi đề xuất thành lập các nhóm nhiệm vụ chéo chức năng cho mỗi sáng kiến."
          }
        },
        {
          "role": "user",
          "text": "Task forces will help ensure traction across teams.",
          "translations": {
            "ko": "작업 그룹은 팀 간의 추진력을 보장하는 데 도움이 될 것입니다.",
            "zh": "任务小组将有助于确保团队之间的协调。",
            "ja": "タスクフォースは、チーム間での進行を確保するのに役立ちます。",
            "vi": "Nhóm nhiệm vụ sẽ giúp đảm bảo sự tiếp cận giữa các nhóm."
          }
        },
        {
          "role": "ai",
          "text": "We’ll assign executive sponsors to ensure accountability.",
          "translations": {
            "ko": "책임을 보장하기 위해 이사 스폰서를 지정하겠습니다.",
            "zh": "我们将指派执行赞助人以确保责任落实。",
            "ja": "説明責任を確保するために、エグゼクティブスポンサーを割り当てます。",
            "vi": "Chúng tôi sẽ chỉ định những nhà tài trợ điều hành để đảm bảo trách nhiệm."
          }
        },
        {
          "role": "user",
          "text": "Good call assigning executive sponsors.",
          "translations": {
            "ko": "이사 스폰서를 지정하는 것은 좋은 결정이었습니다.",
            "zh": "指派执行赞助人是个好主意。",
            "ja": "エグゼクティブスポンサーを割り当てるのは良い判断です。",
            "vi": "Quyết định chỉ định nhà tài trợ điều hành là một quyết định đúng đắn."
          }
        },
        {
          "role": "ai",
          "text": "Progress will be tracked using OKRs and biweekly reviews.",
          "translations": {
            "ko": "진행 상황은 OKR과 격주 리뷰를 사용하여 추적됩니다.",
            "zh": "我们将使用OKRs和双周评审来跟踪进度。",
            "ja": "進捗はOKRと隔週のレビューを使用して追跡されます。",
            "vi": "Tiến trình sẽ được theo dõi bằng OKRs và đánh giá hai tuần một lần."
          }
        },
        {
          "role": "user",
          "text": "OKRs and reviews will help with accountability.",
          "translations": {
            "ko": "OKR과 리뷰는 책임성을 보장하는 데 도움이 될 것입니다.",
            "zh": "OKRs和评审将有助于责任落实。",
            "ja": "OKRとレビューは説明責任を確保するのに役立ちます。",
            "vi": "OKRs và đánh giá sẽ giúp với trách nhiệm."
          }
        },
        {
          "role": "ai",
          "text": "Let’s also define clear success metrics before next week.",
          "translations": {
            "ko": "다음 주 전에 명확한 성공 지표를 정의합시다.",
            "zh": "让我们在下周之前定义清晰的成功指标。",
            "ja": "来週までに明確な成功指標を定義しましょう。",
            "vi": "Hãy cũng xác định rõ ràng các chỉ số thành công trước tuần tới."
          }
        },
        {
          "role": "user",
          "text": "We’ll prepare draft metrics by Friday.",
          "translations": {
            "ko": "금요일까지 초안 지표를 준비하겠습니다.",
            "zh": "我们将在周五之前准备好草案指标。",
            "ja": "金曜日までに指標の草案を準備します。",
            "vi": "Chúng tôi sẽ chuẩn bị các chỉ số nháp vào thứ Sáu."
          }
        },
        {
          "role": "ai",
          "text": "Any concerns about bandwidth or cross-team dependencies?",
          "translations": {
            "ko": "대역폭이나 팀 간 의존성에 대한 우려가 있습니까?",
            "zh": "对带宽或跨团队依赖有任何担忧吗？",
            "ja": "バンド幅やクロスチーム依存性についての懸念はありますか？",
            "vi": "Có bất kỳ lo lắng nào về băng thông hoặc sự phụ thuộc giữa các nhóm không?"
          }
        },
        {
          "role": "user",
          "text": "I’m slightly concerned about engineering bandwidth.",
          "translations": {
            "ko": "엔지니어링 대역폭에 대해 약간 우려하고 있습니다.",
            "zh": "我对工程带宽有些担忧。",
            "ja": "エンジニアリングのバンド幅については少し懸念しています。",
            "vi": "Tôi hơi lo lắng về băng thông kỹ thuật."
          }
        },
        {
          "role": "ai",
          "text": "Please share final feedback before we lock in the priorities.",
          "translations": {
            "ko": "우선 순위를 확정하기 전에 최종 피드백을 공유해주세요.",
            "zh": "请在我们确定优先事项之前分享最后的反馈。",
            "ja": "優先事項を確定する前に最終的なフィードバックを共有してください。",
            "vi": "Vui lòng chia sẻ phản hồi cuối cùng trước khi chúng tôi khóa các ưu tiên."
          }
        },
        {
          "role": "user",
          "text": "Noted. I’ll send additional input after this call.",
          "translations": {
            "ko": "확인했습니다. 이 통화 후 추가 의견을 보내겠습니다.",
            "zh": "已记录。我会在这次通话后发送额外的输入。",
            "ja": "承知しました。この通話後に追加の意見を送ります。",
            "vi": "Đã ghi nhận. Tôi sẽ gửi thêm ý kiến sau cuộc gọi này."
          }
        }
      ]
    },
    {
      "description": {
        "ko": "이사 결정 세션을 운영하는 것",
        "zh": "促进一个执行决策会议",
        "ja": "エグゼクティブの意思決定セッションを促進する",
        "vi": "Tạo điều kiện cho một phiên họp quyết định của ban điều hành"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Let’s review the key decision points before we proceed.",
          "translations": {
            "ko": "진행하기 전에 주요 결정 사항을 검토합시다.",
            "zh": "让我们在继续之前回顾关键决策点。",
            "ja": "進行する前に、主要な決定点を見直しましょう。",
            "vi": "Hãy xem lại các điểm quyết định chính trước khi chúng ta tiếp tục."
          }
        },
        {
          "role": "user",
          "text": "Thanks. A quick recap helps clarify things.",
          "translations": {
            "ko": "감사합니다. 빠른 요약은 이해를 돕습니다.",
            "zh": "谢谢。快速回顾有助于澄清事情。",
            "ja": "ありがとう。簡単なまとめが物事を明確にするのに役立ちます。",
            "vi": "Cảm ơn. Một bản tóm tắt nhanh giúp làm rõ mọi thứ."
          }
        },
        {
          "role": "ai",
          "text": "We’re evaluating two vendor proposals today.",
          "translations": {
            "ko": "오늘 두 가지 공급업체 제안을 평가하고 있습니다.",
            "zh": "我们今天正在评估两个供应商的提案。",
            "ja": "今日は2つのベンダーの提案を評価しています。",
            "vi": "Chúng tôi đang đánh giá hai đề xuất từ nhà cung cấp hôm nay."
          }
        },
        {
          "role": "user",
          "text": "I favor Vendor B due to the stronger integrations.",
          "translations": {
            "ko": "더 강력한 통합 때문에 공급업체 B를 선호합니다.",
            "zh": "我更倾向于供应商B，因为他们的集成更强。",
            "ja": "より強力な統合のため、ベンダーBを支持しています。",
            "vi": "Tôi ủng hộ Nhà cung cấp B do có sự tích hợp mạnh mẽ hơn."
          }
        },
        {
          "role": "ai",
          "text": "Both offer similar pricing, but the timelines differ.",
          "translations": {
            "ko": "두 가지 모두 비슷한 가격을 제공하지만, 시간표는 다릅니다.",
            "zh": "两者的价格相似，但时间线不同。",
            "ja": "両方とも価格は似ていますが、タイムラインは異なります。",
            "vi": "Cả hai đều cung cấp giá tương tự, nhưng thời gian thực hiện khác nhau."
          }
        },
        {
          "role": "user",
          "text": "Speed is important, but compatibility matters more.",
          "translations": {
            "ko": "속도는 중요하지만, 호환성이 더 중요합니다.",
            "zh": "速度很重要，但兼容性更重要。",
            "ja": "速度は重要ですが、互換性の方が重要です。",
            "vi": "Tốc độ quan trọng, nhưng khả năng tương thích lại quan trọng hơn."
          }
        },
        {
          "role": "ai",
          "text": "The first option delivers faster but lacks integrations.",
          "translations": {
            "ko": "첫 번째 옵션은 더 빠르게 제공하지만 통합이 부족합니다.",
            "zh": "第一个选项交付速度更快，但缺乏集成。",
            "ja": "最初のオプションは速く提供しますが、統合が不足しています。",
            "vi": "Lựa chọn đầu tiên cung cấp nhanh hơn nhưng thiếu tích hợp."
          }
        },
        {
          "role": "user",
          "text": "What support model do they each offer?",
          "translations": {
            "ko": "각각 어떤 지원 모델을 제공합니까?",
            "zh": "他们每个都提供什么样的支持模式？",
            "ja": "彼らが提供するサポートモデルは何ですか？",
            "vi": "Họ cung cấp mô hình hỗ trợ như thế nào?"
          }
        },
        {
          "role": "ai",
          "text": "The second aligns better with our tech stack.",
          "translations": {
            "ko": "두 번째가 우리의 기술 스택에 더 잘 맞습니다.",
            "zh": "第二个更符合我们的技术堆栈。",
            "ja": "2番目の方が私たちのテクノロジースタックにより適しています。",
            "vi": "Lựa chọn thứ hai phù hợp hơn với ngăn xếp công nghệ của chúng tôi."
          }
        },
        {
          "role": "user",
          "text": "Do we know how scalable each platform is?",
          "translations": {
            "ko": "각 플랫폼이 얼마나 확장 가능한지 알고 있습니까?",
            "zh": "我们知道每个平台的可扩展性如何吗？",
            "ja": "各プラットフォームがどれだけスケーラブルかはわかっていますか？",
            "vi": "Chúng ta có biết mỗi nền tảng có thể mở rộng đến mức nào không?"
          }
        },
        {
          "role": "ai",
          "text": "Let’s weigh the trade-offs based on our Q4 goals.",
          "translations": {
            "ko": "4분기 목표를 바탕으로 상충되는 점을 고려합시다.",
            "zh": "让我们根据第四季度的目标权衡利弊。",
            "ja": "Q4の目標に基づいてトレードオフを考えましょう。",
            "vi": "Hãy cân nhắc các sự đánh đổi dựa trên mục tiêu Q4 của chúng ta."
          }
        },
        {
          "role": "user",
          "text": "Let’s not overlook future maintenance needs.",
          "translations": {
            "ko": "미래의 유지 보수 요구 사항을 간과하지 말아야 합니다.",
            "zh": "让我们不忽视未来的维护需求。",
            "ja": "将来のメンテナンスニーズを見落とさないようにしましょう。",
            "vi": "Đừng bỏ qua nhu cầu bảo dưỡng trong tương lai."
          }
        },
        {
          "role": "ai",
          "text": "I’ll summarize each option’s pros and cons.",
          "translations": {
            "ko": "각 옵션의 장단점을 요약하겠습니다.",
            "zh": "我会总结每个选项的利弊。",
            "ja": "各オプションの長所と短所をまとめます。",
            "vi": "Tôi sẽ tóm tắt ưu và nhược điểm của mỗi lựa chọn."
          }
        },
        {
          "role": "user",
          "text": "A side-by-side summary would be great.",
          "translations": {
            "ko": "옆으로 비교하는 요약이 좋을 것입니다.",
            "zh": "并排总结会很好。",
            "ja": "両方を並べて比較すると良いですね。",
            "vi": "Một bản tóm tắt so sánh bên cạnh nhau sẽ rất tốt."
          }
        },
        {
          "role": "ai",
          "text": "We’ll take a quick straw poll for alignment.",
          "translations": {
            "ko": "일치를 위해 빠른 투표를 진행하겠습니다.",
            "zh": "我们将进行一个快速的草拟投票以达成一致。",
            "ja": "合意を確認するために、簡単な意見調査を行います。",
            "vi": "Chúng tôi sẽ thực hiện một cuộc bỏ phiếu nhanh để đạt được sự thống nhất."
          }
        },
        {
          "role": "user",
          "text": "I’m aligned with the majority on this.",
          "translations": {
            "ko": "이에 대해 대다수와 일치합니다.",
            "zh": "我与大多数人在这个问题上保持一致。",
            "ja": "私はこの件について、多数派と一致しています。",
            "vi": "Tôi đồng lòng với đa số trong vấn đề này."
          }
        },
        {
          "role": "ai",
          "text": "If there’s consensus, we can move forward today.",
          "translations": {
            "ko": "합의가 있다면, 오늘 진행할 수 있습니다.",
            "zh": "如果有共识，我们今天就可以向前推进。",
            "ja": "合意があれば、今日から進めることができます。",
            "vi": "Nếu có sự đồng lòng, chúng ta có thể tiến lên hôm nay."
          }
        },
        {
          "role": "user",
          "text": "Let’s make a call today if possible.",
          "translations": {
            "ko": "가능하다면 오늘 전화로 연락하자.",
            "zh": "如果可能的话，我们今天就打个电话。",
            "ja": "可能であれば、今日電話をしましょう。",
            "vi": "Hãy thử gọi điện hôm nay nếu có thể."
          }
        },
        {
          "role": "ai",
          "text": "Otherwise, we’ll escalate for further discussion.",
          "translations": {
            "ko": "그렇지 않으면 더 깊게 논의하기 위해 상황을 고조시킬 것입니다.",
            "zh": "否则，我们会升级以进行进一步讨论。",
            "ja": "それ以外の場合は、さらなる議論のためにエスカレートします。",
            "vi": "Nếu không, chúng tôi sẽ đẩy mạnh để thảo luận thêm."
          }
        },
        {
          "role": "user",
          "text": "I’m okay with escalating if we’re split.",
          "translations": {
            "ko": "의견이 분분하다면 상황을 고조시키는 것에 동의합니다.",
            "zh": "如果我们意见不合，我同意升级处理。",
            "ja": "意見が分かれている場合、エスカレートしても構いません。",
            "vi": "Tôi đồng ý đẩy mạnh nếu chúng ta không thống nhất."
          }
        }
      ]
    },
    {
      "description": {
        "ko": "국가 간 플래닝 회의를 진행하다",
        "zh": "进行跨区域的规划电话会议",
        "ja": "地域間の計画会議を行う",
        "vi": "Tiến hành cuộc gọi lên kế hoạch khu vực"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Thanks for joining across time zones today.",
          "translations": {
            "ko": "오늘 시간대를 맞춰 참석해주셔서 감사합니다.",
            "zh": "感谢你们今天跨时区参加会议。",
            "ja": "今日は時間帯を超えて参加していただき、ありがとうございます。",
            "vi": "Cảm ơn đã tham gia từ các múi giờ khác nhau hôm nay."
          }
        },
        {
          "role": "user",
          "text": "Thanks. APAC has a few delays due to regulation changes.",
          "translations": {
            "ko": "감사합니다. APAC는 규제 변경으로 인해 약간의 지연이 있습니다.",
            "zh": "谢谢。由于法规变更，亚太地区有一些延误。",
            "ja": "ありがとう。APACは規制の変更により少し遅れが出ています。",
            "vi": "Cảm ơn. APAC có một số trễ do thay đổi quy định."
          }
        },
        {
          "role": "ai",
          "text": "We’ll walk through Q1 planning and align on key targets.",
          "translations": {
            "ko": "우리는 1분기 계획을 살펴보고 주요 목표에 대해 합의할 것입니다.",
            "zh": "我们将讨论第一季度的规划并对关键目标达成一致。",
            "ja": "Q1の計画を詳しく見て、主要な目標に合わせましょう。",
            "vi": "Chúng tôi sẽ xem xét kế hoạch Q1 và thống nhất các mục tiêu chính."
          }
        },
        {
          "role": "user",
          "text": "Europe is mostly on track, with one hiring delay.",
          "translations": {
            "ko": "유럽은 대체로 계획대로 진행되고 있으나, 한 가지 채용 지연이 있습니다.",
            "zh": "欧洲大部分进展顺利，只有一处招聘延误。",
            "ja": "ヨーロッパはほとんど順調ですが、採用が一つ遅れています。",
            "vi": "Châu Âu chủ yếu đang theo đúng lịch trình, chỉ có một trễ tuyển dụng."
          }
        },
        {
          "role": "ai",
          "text": "Let’s start with the APAC region’s forecast.",
          "translations": {
            "ko": "APAC 지역의 예상치부터 시작하자.",
            "zh": "我们先从亚太地区的预测开始。",
            "ja": "APAC地域の予測から始めましょう。",
            "vi": "Hãy bắt đầu với dự báo của khu vực APAC."
          }
        },
        {
          "role": "user",
          "text": "North America has revised targets after client feedback.",
          "translations": {
            "ko": "북미는 고객의 피드백 후 목표를 수정했습니다.",
            "zh": "北美在收到客户反馈后修改了目标。",
            "ja": "北アメリカはクライアントのフィードバック後に目標を修正しました。",
            "vi": "Bắc Mỹ đã chỉnh sửa lại mục tiêu sau phản hồi của khách hàng."
          }
        },
        {
          "role": "ai",
          "text": "Next, we’ll cover Europe and then North America.",
          "translations": {
            "ko": "다음으로는 유럽을 다루고 그 다음에 북미를 다룰 것입니다.",
            "zh": "接下来，我们将讨论欧洲，然后是北美。",
            "ja": "次に、ヨーロッパをカバーし、その後に北アメリカをカバーします。",
            "vi": "Tiếp theo, chúng tôi sẽ bàn về Châu Âu và sau đó là Bắc Mỹ."
          }
        },
        {
          "role": "user",
          "text": "No blockers, but we do need help with localization.",
          "translations": {
            "ko": "방해요소는 없지만, 지역화에 대한 도움이 필요합니다.",
            "zh": "没有阻碍，但我们确实需要在本地化方面得到帮助。",
            "ja": "ブロッカーはありませんが、ローカライゼーションには助けが必要です。",
            "vi": "Không có vấn đề gì, nhưng chúng tôi cần sự giúp đỡ với việc địa phương hóa."
          }
        },
        {
          "role": "ai",
          "text": "Please share any blockers or major changes.",
          "translations": {
            "ko": "방해요소나 주요 변경 사항이 있다면 공유해 주세요.",
            "zh": "请分享任何阻碍或重大变化。",
            "ja": "ブロッカーや大きな変更があれば共有してください。",
            "vi": "Vui lòng chia sẻ bất kỳ vấn đề nào hoặc thay đổi lớn."
          }
        },
        {
          "role": "user",
          "text": "We’ll coordinate closely with the global team.",
          "translations": {
            "ko": "우리는 글로벌 팀과 밀접하게 협력할 것입니다.",
            "zh": "我们将与全球团队紧密协调。",
            "ja": "グローバルチームと密接に調整します。",
            "vi": "Chúng tôi sẽ phối hợp chặt chẽ với đội ngũ toàn cầu."
          }
        },
        {
          "role": "ai",
          "text": "We’ll need global coordination for the launch window.",
          "translations": {
            "ko": "출시 창구에 대한 글로벌 협력이 필요합니다.",
            "zh": "我们需要全球协调来确定发布窗口。",
            "ja": "ローンチウィンドウにはグローバルな調整が必要です。",
            "vi": "Chúng tôi sẽ cần sự phối hợp toàn cầu cho cửa sổ ra mắt."
          }
        },
        {
          "role": "user",
          "text": "Understood. We’ll finalize numbers tomorrow.",
          "translations": {
            "ko": "이해했습니다. 우리는 내일 숫자를 확정할 것입니다.",
            "zh": "明白了。我们将在明天确定数字。",
            "ja": "了解しました。明日、数字を確定します。",
            "vi": "Đã hiểu. Chúng tôi sẽ hoàn thiện con số vào ngày mai."
          }
        },
        {
          "role": "ai",
          "text": "Any budget changes must be submitted by Friday.",
          "translations": {
            "ko": "예산 변경 사항은 금요일까지 제출해야 합니다.",
            "zh": "任何预算变动必须在周五前提交。",
            "ja": "予算の変更は金曜日までに提出しなければなりません。",
            "vi": "Bất kỳ thay đổi ngân sách nào phải được gửi trước thứ Sáu."
          }
        },
        {
          "role": "user",
          "text": "Noted. Budget requests are already underway.",
          "translations": {
            "ko": "확인했습니다. 예산 요청이 이미 진행 중입니다.",
            "zh": "已记录。预算申请已在进行中。",
            "ja": "承知しました。予算の要求はすでに進行中です。",
            "vi": "Đã ghi nhận. Yêu cầu ngân sách đã được tiến hành."
          }
        },
        {
          "role": "ai",
          "text": "I’ll document region-specific dependencies.",
          "translations": {
            "ko": "지역별 의존성을 문서화하겠습니다.",
            "zh": "我将记录区域特定的依赖项。",
            "ja": "地域特有の依存関係を文書化します。",
            "vi": "Tôi sẽ ghi chú các yếu tố phụ thuộc cụ thể cho từng khu vực."
          }
        },
        {
          "role": "user",
          "text": "Dependencies will be shared in the sheet.",
          "translations": {
            "ko": "의존성은 시트에서 공유될 것입니다.",
            "zh": "依赖项将在表格中分享。",
            "ja": "依存関係はシートで共有されます。",
            "vi": "Các yếu tố phụ thuộc sẽ được chia sẻ trong bảng."
          }
        },
        {
          "role": "ai",
          "text": "Let’s clarify which teams own which deliverables.",
          "translations": {
            "ko": "어떤 팀이 어떤 결과물을 담당하는지 명확히 하자.",
            "zh": "我们来澄清哪些团队负责哪些交付物。",
            "ja": "どのチームがどの成果物を所有しているかを明確にしましょう。",
            "vi": "Hãy làm rõ đội nào sở hữu sản phẩm nào."
          }
        },
        {
          "role": "user",
          "text": "Marketing will handle rollout in our region.",
          "translations": {
            "ko": "마케팅은 우리 지역에서의 롤아웃을 담당할 것입니다.",
            "zh": "我们区域的推广活动将由市场部负责。",
            "ja": "マーケティングは私たちの地域でのロールアウトを担当します。",
            "vi": "Marketing sẽ xử lý việc triển khai trong khu vực của chúng tôi."
          }
        },
        {
          "role": "ai",
          "text": "We’ll meet again next month for status updates.",
          "translations": {
            "ko": "다음 달에 상태 업데이트를 위해 다시 만날 것입니다.",
            "zh": "我们下个月再开会讨论进度更新。",
            "ja": "来月も状況更新のために再度会いましょう。",
            "vi": "Chúng tôi sẽ gặp lại vào tháng sau để cập nhật tình hình."
          }
        },
        {
          "role": "user",
          "text": "Looking forward to syncing again next month.",
          "translations": {
            "ko": "다음 달에 다시 동기화하는 것을 기대합니다.",
            "zh": "期待下个月再次同步。",
            "ja": "来月再度同期するのを楽しみにしています。",
            "vi": "Mong chờ đến lần đồng bộ hóa tiếp theo vào tháng sau."
          }
        }
      ]
    },
    {
      "description": {
        "ko": "위험 관리 전략 검토하기",
        "zh": "审查风险管理策略",
        "ja": "リスク管理戦略のレビュー",
        "vi": "Đánh giá các chiến lược quản lý rủi ro"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Let’s review the major risks identified last quarter.",
          "translations": {
            "ko": "지난 분기에 확인된 주요 위험을 검토하자.",
            "zh": "我们来回顾一下上个季度识别的主要风险。",
            "ja": "前四半期に特定された主要なリスクを見直しましょう。",
            "vi": "Hãy xem xét các rủi ro lớn được xác định trong quý trước."
          }
        },
        {
          "role": "user",
          "text": "Thanks. Two-factor has improved access control.",
          "translations": {
            "ko": "감사합니다. 이중 인증이 접근 제어를 향상시켰습니다.",
            "zh": "谢谢。双因素认证已经提高了访问控制。",
            "ja": "ありがとう。二要素認証がアクセス制御を改善しました。",
            "vi": "Cảm ơn. Xác thực hai yếu tố đã cải thiện kiểm soát truy cập."
          }
        },
        {
          "role": "ai",
          "text": "Cybersecurity remains at the top of our list.",
          "translations": {
            "ko": "사이버 보안은 여전히 우리 목록의 최우선 순위입니다.",
            "zh": "网络安全仍然是我们的首要任务。",
            "ja": "サイバーセキュリティは引き続き私たちのリストのトップにあります。",
            "vi": "An ninh mạng vẫn đứng đầu danh sách của chúng tôi."
          }
        },
        {
          "role": "user",
          "text": "Agreed, phishing volume has risen lately.",
          "translations": {
            "ko": "동의합니다, 최근에는 피싱 양이 증가했습니다.",
            "zh": "同意，最近钓鱼邮件的数量确实增加了。",
            "ja": "同意します、最近フィッシングのボリュームが増えています。",
            "vi": "Đồng ý, số lượng tấn công phishing đã tăng gần đây."
          }
        },
        {
          "role": "ai",
          "text": "We’ve seen increased phishing attempts recently.",
          "translations": {
            "ko": "최근에 피싱 시도가 증가했습니다.",
            "zh": "我们最近发现钓鱼尝试的次数增加了。",
            "ja": "最近、フィッシングの試みが増えています。",
            "vi": "Chúng tôi đã thấy số lượng tấn công phishing tăng gần đây."
          }
        },
        {
          "role": "user",
          "text": "We should assess our third-party dependencies.",
          "translations": {
            "ko": "우리는 제3자 의존성을 평가해야 합니다.",
            "zh": "我们应该评估我们的第三方依赖性。",
            "ja": "私たちは第三者依存性を評価すべきです。",
            "vi": "Chúng ta nên đánh giá các phụ thuộc bên thứ ba của mình."
          }
        },
        {
          "role": "ai",
          "text": "The team implemented two-factor authentication.",
          "translations": {
            "ko": "팀은 이중 인증을 구현했습니다.",
            "zh": "团队实施了两因素身份验证。",
            "ja": "チームは二要素認証を実装しました。",
            "vi": "Nhóm đã triển khai xác thực hai yếu tố."
          }
        },
        {
          "role": "user",
          "text": "Is the vendor audit scheduled for this month?",
          "translations": {
            "ko": "이번 달에 공급업체 감사가 예정되어 있습니까?",
            "zh": "供应商审计计划在这个月吗？",
            "ja": "ベンダー監査は今月予定されていますか？",
            "vi": "Việc kiểm toán nhà cung cấp có được lên lịch trong tháng này không?"
          }
        },
        {
          "role": "ai",
          "text": "We’re also assessing cloud vendor compliance.",
          "translations": {
            "ko": "우리는 또한 클라우드 공급업체의 준수를 평가하고 있습니다.",
            "zh": "我们也在评估云供应商的合规性。",
            "ja": "私たちはまた、クラウドベンダーのコンプライアンスを評価しています。",
            "vi": "Chúng tôi cũng đang đánh giá việc tuân thủ của nhà cung cấp đám mây."
          }
        },
        {
          "role": "user",
          "text": "Business continuity hasn’t been stress-tested recently.",
          "translations": {
            "ko": "비즈니스 연속성은 최근에 스트레스 테스트를 받지 않았습니다.",
            "zh": "商业连续性最近没有经过压力测试。",
            "ja": "ビジネス継続性は最近、ストレステストが行われていません。",
            "vi": "Sự liên tục của doanh nghiệp chưa được kiểm tra áp lực gần đây."
          }
        },
        {
          "role": "ai",
          "text": "Let’s revisit our business continuity plan.",
          "translations": {
            "ko": "우리의 비즈니스 연속성 계획을 다시 살펴봅시다.",
            "zh": "让我们重新审视我们的商业连续性计划。",
            "ja": "ビジネス継続計画を再検討しましょう。",
            "vi": "Hãy xem lại kế hoạch liên tục kinh doanh của chúng ta."
          }
        },
        {
          "role": "user",
          "text": "Escalation procedures could use refinement.",
          "translations": {
            "ko": "에스컬레이션 절차는 개선이 필요할 수 있습니다.",
            "zh": "升级程序可能需要改进。",
            "ja": "エスカレーション手順は改善の余地があります。",
            "vi": "Các quy trình leo thang có thể cần được cải tiến."
          }
        },
        {
          "role": "ai",
          "text": "Are there gaps in our current escalation protocols?",
          "translations": {
            "ko": "현재의 에스컬레이션 프로토콜에 빈틈이 있습니까?",
            "zh": "我们当前的升级协议中是否存在漏洞？",
            "ja": "現在のエスカレーションプロトコルにギャップはありますか？",
            "vi": "Có khoảng trống trong các giao thức leo thang hiện tại của chúng ta không?"
          }
        },
        {
          "role": "user",
          "text": "We’ve flagged a risk in data retention policy.",
          "translations": {
            "ko": "우리는 데이터 보유 정책에서 위험을 지적했습니다.",
            "zh": "我们已经标记了数据保留政策中的一个风险。",
            "ja": "データ保持ポリシーにリスクを指摘しました。",
            "vi": "Chúng tôi đã đánh dấu một rủi ro trong chính sách lưu trữ dữ liệu."
          }
        },
        {
          "role": "ai",
          "text": "Please flag risks that are emerging this quarter.",
          "translations": {
            "ko": "이번 분기에 나타나는 위험을 지적해 주세요.",
            "zh": "请标记本季度出现的风险。",
            "ja": "今四半期に浮上しているリスクを指摘してください。",
            "vi": "Vui lòng đánh dấu các rủi ro đang xuất hiện trong quý này."
          }
        },
        {
          "role": "user",
          "text": "Supply chain delays might also be a concern.",
          "translations": {
            "ko": "공급망 지연도 문제가 될 수 있습니다.",
            "zh": "供应链延迟也可能是一个问题。",
            "ja": "供給チェーンの遅延も懸念事項かもしれません。",
            "vi": "Sự chậm trễ trong chuỗi cung ứng cũng có thể là một vấn đề."
          }
        },
        {
          "role": "ai",
          "text": "We’ll prioritize mitigations by severity and impact.",
          "translations": {
            "ko": "우리는 심각성과 영향에 따라 완화 조치를 우선 순위로 할 것입니다.",
            "zh": "我们将根据严重性和影响对缓解措施进行优先排序。",
            "ja": "私たちは重大性と影響によって緩和策を優先します。",
            "vi": "Chúng tôi sẽ ưu tiên các biện pháp giảm nhẹ theo mức độ nghiêm trọng và tác động."
          }
        },
        {
          "role": "user",
          "text": "Let’s assign owners for each mitigation area.",
          "translations": {
            "ko": "각 완화 영역에 대한 소유자를 지정합시다.",
            "zh": "让我们为每个缓解区域分配负责人。",
            "ja": "各緩和エリアのオーナーを割り当てましょう。",
            "vi": "Hãy giao chủ sở hữu cho mỗi khu vực giảm nhẹ."
          }
        },
        {
          "role": "ai",
          "text": "A full risk summary will follow after the meeting.",
          "translations": {
            "ko": "회의 후에 전체 위험 요약이 이어질 것입니다.",
            "zh": "会议结束后将提供完整的风险总结。",
            "ja": "ミーティング後に完全なリスクサマリーを提供します。",
            "vi": "Một bản tóm tắt rủi ro đầy đủ sẽ theo sau cuộc họp."
          }
        },
        {
          "role": "user",
          "text": "Looking forward to reviewing the full summary.",
          "translations": {
            "ko": "전체 요약을 검토하는 것을 기대합니다.",
            "zh": "期待审查完整的总结。",
            "ja": "完全なサマリーのレビューを楽しみにしています。",
            "vi": "Mong chờ xem xét bản tóm tắt đầy đủ."
          }
        }
      ]
    },
    {
      "description": {
        "ko": "사후 검증 결과 평가",
        "zh": "评估事后分析结果",
        "ja": "ポストモーテムの調査結果を評価する",
        "vi": "Đánh giá các phát hiện sau khi xảy ra sự cố"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Thanks for joining this post-mortem debrief.",
          "translations": {
            "ko": "이 사후 검증 브리핑에 참석해 주셔서 감사합니다.",
            "zh": "感谢您参加这次事后分析会议。",
            "ja": "このポストモーテムのデブリーフに参加していただきありがとうございます。",
            "vi": "Cảm ơn bạn đã tham gia cuộc họp sau sự cố này."
          }
        },
        {
          "role": "user",
          "text": "Thanks. The timeline provides helpful context.",
          "translations": {
            "ko": "감사합니다. 타임라인은 유용한 맥락을 제공합니다.",
            "zh": "谢谢。时间线提供了有用的背景信息。",
            "ja": "ありがとうございます。タイムラインは有用なコンテキストを提供します。",
            "vi": "Cảm ơn. Dòng thời gian cung cấp ngữ cảnh hữu ích."
          }
        },
        {
          "role": "ai",
          "text": "Let’s start with a timeline of the incident.",
          "translations": {
            "ko": "사건의 타임라인부터 시작합시다.",
            "zh": "让我们从事件的时间线开始。",
            "ja": "事件のタイムラインから始めましょう。",
            "vi": "Hãy bắt đầu với dòng thời gian của sự cố."
          }
        },
        {
          "role": "user",
          "text": "I support the changes to rollback procedures.",
          "translations": {
            "ko": "롤백 절차에 대한 변경을 지지합니다.",
            "zh": "我支持对回滚程序的更改。",
            "ja": "ロールバック手順の変更を支持します。",
            "vi": "Tôi ủng hộ các thay đổi về quy trình quay lại."
          }
        },
        {
          "role": "ai",
          "text": "Root cause analysis shows a misconfigured deployment.",
          "translations": {
            "ko": "근본 원인 분석은 배포 설정 오류를 보여줍니다.",
            "zh": "根源分析显示了一个配置错误的部署。",
            "ja": "原因分析は、設定ミスがあったデプロイメントを示しています。",
            "vi": "Phân tích nguyên nhân gốc rễ cho thấy một sự triển khai cấu hình sai."
          }
        },
        {
          "role": "user",
          "text": "We should automate environment validation going forward.",
          "translations": {
            "ko": "앞으로 환경 검증을 자동화해야 합니다.",
            "zh": "我们应该在未来自动化环境验证。",
            "ja": "今後は環境検証を自動化すべきです。",
            "vi": "Chúng ta nên tự động hóa việc xác nhận môi trường từ nay về sau."
          }
        },
        {
          "role": "ai",
          "text": "We’ll walk through the contributing factors.",
          "translations": {
            "ko": "우리는 기여 요인을 살펴볼 것입니다.",
            "zh": "我们将讨论贡献因素。",
            "ja": "貢献要因を一緒に見ていきましょう。",
            "vi": "Chúng tôi sẽ đi qua các yếu tố đóng góp."
          }
        },
        {
          "role": "user",
          "text": "Monitoring improvements are definitely needed.",
          "translations": {
            "ko": "모니터링 개선이 확실히 필요합니다.",
            "zh": "监控改进绝对是必要的。",
            "ja": "モニタリングの改善は確実に必要です。",
            "vi": "Cải tiến giám sát chắc chắn là cần thiết."
          }
        },
        {
          "role": "ai",
          "text": "Monitoring gaps delayed our initial response.",
          "translations": {
            "ko": "모니터링의 빈틈이 초기 응답을 지연시켰습니다.",
            "zh": "监控漏洞延迟了我们的初步回应。",
            "ja": "モニタリングのギャップが初期対応を遅らせました。",
            "vi": "Khoảng trống giám sát đã làm chậm phản ứng ban đầu của chúng tôi."
          }
        },
        {
          "role": "user",
          "text": "What triggered the misconfiguration originally?",
          "translations": {
            "ko": "원래 무엇이 설정 오류를 일으켰습니까?",
            "zh": "最初是什么触发了配置错误？",
            "ja": "元々何が設定ミスを引き起こしましたか？",
            "vi": "Điều gì đã kích hoạt việc cấu hình sai ban đầu?"
          }
        },
        {
          "role": "ai",
          "text": "We’ve implemented rollback protocols since then.",
          "translations": {
            "ko": "그 이후에 롤백 프로토콜을 구현했습니다.",
            "zh": "自那时以来，我们已经实施了回滚协议。",
            "ja": "それ以来、私たちはロールバックプロトコルを実装しました。",
            "vi": "Chúng tôi đã triển khai các giao thức quay lại từ đó."
          }
        },
        {
          "role": "user",
          "text": "Let’s ensure cross-team handoffs are more explicit.",
          "translations": {
            "ko": "팀 간 인계가 더 명확하게 이루어지도록 합시다.",
            "zh": "让我们确保跨团队交接更明确。",
            "ja": "チーム間の引き継ぎがより明確になるようにしましょう。",
            "vi": "Hãy đảm bảo rằng việc chuyển giao giữa các nhóm là rõ ràng hơn."
          }
        },
        {
          "role": "ai",
          "text": "Documentation updates are already in motion.",
          "translations": {
            "ko": "문서 업데이트가 이미 진행 중입니다.",
            "zh": "文档更新已经在进行中。",
            "ja": "ドキュメンテーションの更新はすでに進行中です。",
            "vi": "Cập nhật tài liệu đã được thực hiện."
          }
        },
        {
          "role": "user",
          "text": "Training should include real incident scenarios.",
          "translations": {
            "ko": "교육은 실제 사건 시나리오를 포함해야 합니다.",
            "zh": "培训应包括真实的事件场景。",
            "ja": "トレーニングには実際のインシデントシナリオを含めるべきです。",
            "vi": "Đào tạo nên bao gồm các tình huống sự cố thực tế."
          }
        },
        {
          "role": "ai",
          "text": "We’re also scheduling training for relevant teams.",
          "translations": {
            "ko": "관련 팀들을 위한 교육을 계획 중입니다.",
            "zh": "我们也正在为相关团队安排培训。",
            "ja": "関連チームのための研修もスケジュールに組み込んでいます。",
            "vi": "Chúng tôi cũng đang lên lịch đào tạo cho các nhóm liên quan."
          }
        },
        {
          "role": "user",
          "text": "We’ll revise internal runbooks this week.",
          "translations": {
            "ko": "이번 주에 내부 운영 매뉴얼을 수정할 예정입니다.",
            "zh": "我们将在本周修订内部运行手册。",
            "ja": "今週、社内の運用手順書を見直します。",
            "vi": "Chúng tôi sẽ xem xét lại sổ tay nội bộ trong tuần này."
          }
        },
        {
          "role": "ai",
          "text": "Let’s identify action items to prevent recurrence.",
          "translations": {
            "ko": "재발을 방지하기 위한 행동 계획을 식별합시다.",
            "zh": "让我们确定行动事项以防止再次发生。",
            "ja": "再発防止のためのアクションアイテムを特定しましょう。",
            "vi": "Hãy xác định các mục công việc để ngăn chặn sự tái phát."
          }
        },
        {
          "role": "user",
          "text": "Happy to own one of the action items.",
          "translations": {
            "ko": "행동 계획 중 하나를 맡게 되어 기쁩니다.",
            "zh": "很高兴能负责其中一个行动事项。",
            "ja": "アクションアイテムの一つを担当することを喜んで引き受けます。",
            "vi": "Rất vui được chịu trách nhiệm cho một trong những mục công việc."
          }
        },
        {
          "role": "ai",
          "text": "Appreciate everyone’s transparency in this review.",
          "translations": {
            "ko": "이 검토에서 모두의 투명성에 감사드립니다.",
            "zh": "感谢大家在这次审查中的透明度。",
            "ja": "このレビューでの皆さんの透明性に感謝します。",
            "vi": "Đánh giá cao sự minh bạch của mọi người trong cuộc xem xét này."
          }
        },
        {
          "role": "user",
          "text": "This was a productive debrief. Thanks all.",
          "translations": {
            "ko": "생산적인 회고였습니다. 모두 감사합니다.",
            "zh": "这是一次富有成效的总结。谢谢大家。",
            "ja": "有意義なデブリーフィングでした。皆さん、ありがとうございました。",
            "vi": "Đây là một cuộc tổng kết hiệu quả. Cảm ơn tất cả mọi người."
          }
        }
      ]
    },
    {
      "description": {
        "ko": "제품 로드맵 조정에 대한 일치",
        "zh": "对产品路线图进行调整的一致性",
        "ja": "製品ロードマップの調整に合わせています。",
        "vi": "Điều chỉnh đường lối sản phẩm"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Today we’re reviewing adjustments to the Q3 roadmap.",
          "translations": {
            "ko": "오늘은 Q3 로드맵의 조정 사항을 검토하고 있습니다.",
            "zh": "今天我们正在审查对第三季度路线图的调整。",
            "ja": "今日はQ3のロードマップの調整をレビューします。",
            "vi": "Hôm nay chúng tôi đang xem xét các điều chỉnh cho lộ trình Q3."
          }
        },
        {
          "role": "user",
          "text": "Thanks. The onboarding focus makes sense.",
          "translations": {
            "ko": "감사합니다. 온보딩에 집중하는 것이 합리적입니다.",
            "zh": "谢谢。新员工入职关注点很有道理。",
            "ja": "ありがとうございます。オンボーディングに焦点を当てるのは理にかなっています。",
            "vi": "Cảm ơn. Việc tập trung vào quá trình hướng dẫn mới có ý nghĩa."
          }
        },
        {
          "role": "ai",
          "text": "Customer feedback highlighted some usability issues.",
          "translations": {
            "ko": "고객 피드백에서 사용성 문제가 도출되었습니다.",
            "zh": "客户反馈突出了一些可用性问题。",
            "ja": "顧客のフィードバックで使い勝手の問題がいくつか浮上しました。",
            "vi": "Phản hồi của khách hàng đã chỉ ra một số vấn đề về khả năng sử dụng."
          }
        },
        {
          "role": "user",
          "text": "Pushing analytics gives us more breathing room.",
          "translations": {
            "ko": "분석을 밀어주면 우리에게 더 많은 여유를 줍니다.",
            "zh": "推动分析给我们更多的喘息空间。",
            "ja": "アナリティクスを押し進めることで、余裕が生まれます。",
            "vi": "Đẩy mạnh phân tích giúp chúng tôi có thêm không gian."
          }
        },
        {
          "role": "ai",
          "text": "We’re proposing to reprioritize based on that data.",
          "translations": {
            "ko": "그 데이터를 기반으로 우선 순위를 재정의하는 것을 제안합니다.",
            "zh": "我们建议根据这些数据重新确定优先级。",
            "ja": "そのデータに基づいて優先順位を再設定することを提案しています。",
            "vi": "Chúng tôi đề xuất sắp xếp lại ưu tiên dựa trên dữ liệu đó."
          }
        },
        {
          "role": "user",
          "text": "Engineering is okay with the updated timeline.",
          "translations": {
            "ko": "엔지니어링 팀은 업데이트된 일정에 동의합니다.",
            "zh": "工程部门对更新的时间表没有问题。",
            "ja": "エンジニアリングは更新されたタイムラインに問題ありません。",
            "vi": "Kỹ sư đồng ý với lịch trình cập nhật."
          }
        },
        {
          "role": "ai",
          "text": "The onboarding redesign will now take precedence.",
          "translations": {
            "ko": "이제 온보딩 재설계가 우선 순위가 될 것입니다.",
            "zh": "新员工入职的重新设计现在将优先考虑。",
            "ja": "オンボーディングの再設計が優先されることになります。",
            "vi": "Việc thiết kế lại quá trình hướng dẫn sẽ được ưu tiên."
          }
        },
        {
          "role": "user",
          "text": "Design will need to adjust sprint scope slightly.",
          "translations": {
            "ko": "디자인 팀은 스프린트 범위를 약간 조정해야 합니다.",
            "zh": "设计部门需要稍微调整冲刺范围。",
            "ja": "デザインはスプリントの範囲を少し調整する必要があります。",
            "vi": "Nhóm thiết kế sẽ cần điều chỉnh phạm vi sprint một chút."
          }
        },
        {
          "role": "ai",
          "text": "We’ll push back the analytics module to Q4.",
          "translations": {
            "ko": "분석 모듈을 Q4로 미룰 예정입니다.",
            "zh": "我们将把分析模块推迟到第四季度。",
            "ja": "アナリティクスモジュールはQ4に延期します。",
            "vi": "Chúng tôi sẽ đẩy mạnh mô-đun phân tích đến Q4."
          }
        },
        {
          "role": "user",
          "text": "Can we notify sales about the delay today?",
          "translations": {
            "ko": "오늘 판매팀에게 지연 사항을 알릴 수 있을까요?",
            "zh": "我们今天可以通知销售部门延误的情况吗？",
            "ja": "今日中に営業に遅延を通知することは可能ですか？",
            "vi": "Chúng ta có thể thông báo cho bộ phận bán hàng về sự chậm trễ hôm nay không?"
          }
        },
        {
          "role": "ai",
          "text": "This impacts both design and engineering timelines.",
          "translations": {
            "ko": "이것은 디자인과 엔지니어링의 일정에 모두 영향을 미칩니다.",
            "zh": "这影响了设计和工程的时间表。",
            "ja": "これはデザインとエンジニアリングのタイムラインに影響を与えます。",
            "vi": "Điều này ảnh hưởng đến cả lịch trình của thiết kế và kỹ thuật."
          }
        },
        {
          "role": "user",
          "text": "I’ll review the roadmap doc after this call.",
          "translations": {
            "ko": "이 통화 후에 로드맵 문서를 검토하겠습니다.",
            "zh": "这次通话后，我会审查路线图文档。",
            "ja": "この通話の後でロードマップドキュメントをレビューします。",
            "vi": "Tôi sẽ xem xét tài liệu lộ trình sau cuộc gọi này."
          }
        },
        {
          "role": "ai",
          "text": "Let’s confirm alignment before updating stakeholders.",
          "translations": {
            "ko": "이해당사자들에게 업데이트하기 전에 일치를 확인합시다.",
            "zh": "在更新利益相关者之前，让我们确认一致性。",
            "ja": "ステークホルダーに更新を通知する前に、合意を確認しましょう。",
            "vi": "Hãy xác nhận sự đồng lòng trước khi cập nhật cho các bên liên quan."
          }
        },
        {
          "role": "user",
          "text": "The prioritization looks solid to me.",
          "translations": {
            "ko": "우선 순위가 탄탄해 보입니다.",
            "zh": "这个优先级看起来很稳固。",
            "ja": "優先順位付けは私にとって確固としています。",
            "vi": "Việc ưu tiên trông rất vững chắc với tôi."
          }
        },
        {
          "role": "ai",
          "text": "We’ve updated the roadmap doc with these changes.",
          "translations": {
            "ko": "이러한 변경 사항으로 로드맵 문서를 업데이트했습니다.",
            "zh": "我们已经根据这些变化更新了路线图文档。",
            "ja": "これらの変更をロードマップドキュメントに更新しました。",
            "vi": "Chúng tôi đã cập nhật tài liệu lộ trình với những thay đổi này."
          }
        },
        {
          "role": "user",
          "text": "We’ll review risks related to the shift.",
          "translations": {
            "ko": "이동과 관련된 위험을 검토할 예정입니다.",
            "zh": "我们将审查与转变相关的风险。",
            "ja": "シフトに関連するリスクをレビューします。",
            "vi": "Chúng tôi sẽ xem xét các rủi ro liên quan đến sự thay đổi."
          }
        },
        {
          "role": "ai",
          "text": "I’ll walk through the rationale for each adjustment.",
          "translations": {
            "ko": "각 조정에 대한 근거를 설명하겠습니다.",
            "zh": "我将详细解释每项调整的理由。",
            "ja": "各調整の理由を説明します。",
            "vi": "Tôi sẽ giải thích lý do cho mỗi sự điều chỉnh."
          }
        },
        {
          "role": "user",
          "text": "Thanks for outlining the rationale clearly.",
          "translations": {
            "ko": "근거를 명확하게 설명해 주셔서 감사합니다.",
            "zh": "感谢你清楚地阐述了理由。",
            "ja": "理由を明確に説明していただき、ありがとうございます。",
            "vi": "Cảm ơn bạn đã trình bày rõ ràng lý do."
          }
        },
        {
          "role": "ai",
          "text": "Let’s finalize feedback before end of day.",
          "translations": {
            "ko": "하루 종료 전에 피드백을 확정합시다.",
            "zh": "让我们在今天结束之前确定反馈。",
            "ja": "一日の終わりまでにフィードバックを確定しましょう。",
            "vi": "Hãy hoàn thiện phản hồi trước cuối ngày."
          }
        },
        {
          "role": "user",
          "text": "Let’s lock in updates by EOD as planned.",
          "translations": {
            "ko": "계획대로 하루 종료 전에 업데이트를 확정합시다.",
            "zh": "让我们按计划在今天结束之前锁定更新。",
            "ja": "計画通り、EODまでに更新を確定しましょう。",
            "vi": "Hãy khóa các cập nhật vào cuối ngày như đã lên kế hoạch."
          }
        }
      ]
    },
    {
      "description": {
        "ko": "전략 회의에서의 일치를 이끌어내기",
        "zh": "在战略退修期间推动一致性",
        "ja": "戦略リトリート中の一致を促進する",
        "vi": "Đạt được sự đồng lòng trong một buổi họp chiến lược"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Welcome to our annual strategy offsite.",
          "translations": {
            "ko": "우리의 연례 전략 외부 회의에 오신 것을 환영합니다.",
            "zh": "欢迎来到我们的年度战略外部会议。",
            "ja": "年次戦略オフサイトへようこそ。",
            "vi": "Chào mừng đến với buổi họp chiến lược hàng năm của chúng tôi."
          }
        },
        {
          "role": "user",
          "text": "Excited to be part of the offsite again.",
          "translations": {
            "ko": "다시 외부 회의에 참여하게 되어 기쁩니다.",
            "zh": "很高兴再次参加这次外部会议。",
            "ja": "再びオフサイトの一部となることを楽しみにしています。",
            "vi": "Rất hào hứng được tham gia buổi họp ngoại vi lại."
          }
        },
        {
          "role": "ai",
          "text": "Let’s revisit our mission and vision briefly.",
          "translations": {
            "ko": "간단하게 우리의 임무와 비전을 다시 살펴봅시다.",
            "zh": "让我们简要回顾一下我们的使命和愿景。",
            "ja": "私たちのミッションとビジョンを簡単に再確認しましょう。",
            "vi": "Hãy cùng xem lại sứ mệnh và tầm nhìn của chúng ta một cách ngắn gọn."
          }
        },
        {
          "role": "user",
          "text": "Revisiting our vision is always grounding.",
          "translations": {
            "ko": "우리의 비전을 다시 살펴보는 것은 항상 안정감을 줍니다.",
            "zh": "重新审视我们的愿景总是很有助于保持稳定。",
            "ja": "ビジョンを再確認することは常に地に足をつけることです。",
            "vi": "Việc xem lại tầm nhìn luôn giúp chúng ta giữ vững tinh thần."
          }
        },
        {
          "role": "ai",
          "text": "We’ll map out long-term goals over the next 3 years.",
          "translations": {
            "ko": "다음 3년 동안의 장기 목표를 설정할 것입니다.",
            "zh": "我们将在接下来的3年里规划长期目标。",
            "ja": "次の3年間で長期目標を立てます。",
            "vi": "Chúng ta sẽ lên kế hoạch cho các mục tiêu dài hạn trong 3 năm tới."
          }
        },
        {
          "role": "user",
          "text": "Looking forward to setting ambitious goals.",
          "translations": {
            "ko": "야심찬 목표 설정을 기대하고 있습니다.",
            "zh": "期待设定雄心勃勃的目标。",
            "ja": "野心的な目標を設定するのを楽しみにしています。",
            "vi": "Mong chờ đặt ra những mục tiêu tham vọng."
          }
        },
        {
          "role": "ai",
          "text": "Let’s be bold but realistic with targets.",
          "translations": {
            "ko": "목표 설정에 있어서는 대담하면서도 현실적이어야 합니다.",
            "zh": "我们的目标要大胆但实际。",
            "ja": "目標は大胆だが現実的にしましょう。",
            "vi": "Hãy mạnh dạn nhưng thực tế với các mục tiêu."
          }
        },
        {
          "role": "user",
          "text": "Let’s push the envelope while staying grounded.",
          "translations": {
            "ko": "안정을 유지하면서도 한계를 뛰어넘어봅시다.",
            "zh": "我们要在保持稳定的同时不断突破。",
            "ja": "地に足をつけつつ、限界を押し広げましょう。",
            "vi": "Hãy đẩy mạnh tiến trình trong khi vẫn giữ vững tinh thần."
          }
        },
        {
          "role": "ai",
          "text": "We’ll split into groups to brainstorm initiatives.",
          "translations": {
            "ko": "우리는 이니셔티브를 브레인스토밍하기 위해 그룹으로 나눌 것입니다.",
            "zh": "我们将分组进行头脑风暴活动。",
            "ja": "グループに分かれてイニシアチブをブレインストーミングします。",
            "vi": "Chúng ta sẽ chia thành các nhóm để đưa ra các sáng kiến."
          }
        },
        {
          "role": "user",
          "text": "Brainstorming in smaller groups works well.",
          "translations": {
            "ko": "작은 그룹에서의 브레인스토밍이 잘 작동합니다.",
            "zh": "小组头脑风暴效果很好。",
            "ja": "小グループでのブレインストーミングは効果的です。",
            "vi": "Việc đưa ra ý tưởng trong các nhóm nhỏ thường hiệu quả."
          }
        },
        {
          "role": "ai",
          "text": "Group leads will present their ideas this afternoon.",
          "translations": {
            "ko": "그룹 리더들이 오후에 그들의 아이디어를 발표할 것입니다.",
            "zh": "小组负责人将在今天下午提出他们的想法。",
            "ja": "グループリーダーは今日の午後、彼らのアイデアを発表します。",
            "vi": "Các nhóm trưởng sẽ trình bày ý tưởng của họ vào chiều nay."
          }
        },
        {
          "role": "user",
          "text": "I can help facilitate one of the breakout groups.",
          "translations": {
            "ko": "저는 분과 그룹 중 하나를 조정하는 데 도움을 줄 수 있습니다.",
            "zh": "我可以帮助协调其中一个小组。",
            "ja": "ブレイクアウトグループの一つを進行するのを手伝うことができます。",
            "vi": "Tôi có thể giúp điều hành một trong những nhóm phụ."
          }
        },
        {
          "role": "ai",
          "text": "We’re aiming for cross-functional alignment.",
          "translations": {
            "ko": "우리는 기능 간의 조정을 목표로 하고 있습니다.",
            "zh": "我们的目标是跨职能对齐。",
            "ja": "私たちは機能間の調整を目指しています。",
            "vi": "Chúng ta đang nhắm đến sự phối hợp chéo chức năng."
          }
        },
        {
          "role": "user",
          "text": "Cross-functional buy-in is key to execution.",
          "translations": {
            "ko": "기능 간의 동의는 실행에 있어서 핵심입니다.",
            "zh": "跨职能的参与是执行的关键。",
            "ja": "機能間の買い入れは実行の鍵です。",
            "vi": "Sự đồng lòng chéo chức năng là chìa khóa để thực thi."
          }
        },
        {
          "role": "ai",
          "text": "Breaks are scheduled between sessions to reset.",
          "translations": {
            "ko": "세션 사이에는 재설정을 위해 휴식 시간이 예정되어 있습니다.",
            "zh": "我们在会议之间安排了休息时间以重置。",
            "ja": "セッションの間に休憩が予定されています。",
            "vi": "Các khoảng nghỉ được lên lịch giữa các phiên để đặt lại."
          }
        },
        {
          "role": "user",
          "text": "Appreciate the built-in breaks.",
          "translations": {
            "ko": "휴식 시간이 내장되어 있는 것에 감사드립니다.",
            "zh": "感谢预设的休息时间。",
            "ja": "組み込まれた休憩に感謝します。",
            "vi": "Đánh giá cao các khoảng nghỉ được tích hợp."
          }
        },
        {
          "role": "ai",
          "text": "At the end, we’ll vote on top priorities.",
          "translations": {
            "ko": "마지막에 우리는 최우선 순위에 대해 투표할 것입니다.",
            "zh": "最后，我们将对最优先事项进行投票。",
            "ja": "最後に、最優先事項に投票します。",
            "vi": "Cuối cùng, chúng ta sẽ bỏ phiếu cho các ưu tiên hàng đầu."
          }
        },
        {
          "role": "user",
          "text": "Let’s be decisive with our votes later.",
          "translations": {
            "ko": "나중에 투표할 때는 결정적이어야 합니다.",
            "zh": "让我们在稍后的投票中果断一些。",
            "ja": "後での投票は決断力を持って行いましょう。",
            "vi": "Hãy quyết đoán với phiếu bầu của chúng ta sau này."
          }
        },
        {
          "role": "ai",
          "text": "Thanks in advance for the energy and ideas today.",
          "translations": {
            "ko": "오늘의 에너지와 아이디어에 미리 감사드립니다.",
            "zh": "提前感谢今天的活力和想法。",
            "ja": "今日のエネルギーとアイデアに事前に感謝します。",
            "vi": "Cảm ơn trước về năng lượng và ý tưởng hôm nay."
          }
        },
        {
          "role": "user",
          "text": "Thanks. This should be a great session.",
          "translations": {
            "ko": "감사합니다. 이것은 훌륭한 세션이 될 것입니다.",
            "zh": "谢谢。这应该会是一个很好的会议。",
            "ja": "ありがとう。これは素晴らしいセッションになるはずです。",
            "vi": "Cảm ơn. Đây sẽ là một phiên họp tuyệt vời."
          }
        }
      ]
    },
    {
      "description": {
        "ko": "이해당사자들에게 상태 회의에서 업데이트",
        "zh": "在状态会议中更新利益相关者",
        "ja": "ステータスミーティングでステークホルダーを更新する",
        "vi": "Cập nhật cho các bên liên quan trong cuộc họp cập nhật tình hình"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Let’s get started with the project status update.",
          "translations": {
            "ko": "프로젝트 상태 업데이트로 시작해봅시다.",
            "zh": "让我们开始项目状态更新。",
            "ja": "プロジェクトのステータス更新から始めましょう。",
            "vi": "Hãy bắt đầu với việc cập nhật tình hình dự án."
          }
        },
        {
          "role": "user",
          "text": "Thanks for the detailed status update.",
          "translations": {
            "ko": "자세한 상태 업데이트에 감사드립니다.",
            "zh": "感谢详细的状态更新。",
            "ja": "詳細なステータス更新に感謝します。",
            "vi": "Cảm ơn vì đã cập nhật tình hình chi tiết."
          }
        },
        {
          "role": "ai",
          "text": "We’re currently on track with two out of three milestones.",
          "translations": {
            "ko": "우리는 현재 세 가지 중 두 가지 마일스톤을 따라가고 있습니다.",
            "zh": "我们目前在三个里程碑中的两个上都按计划进行。",
            "ja": "現在、3つのマイルストーンのうち2つが予定通りです。",
            "vi": "Hiện tại, chúng ta đang theo đúng tiến độ với hai trong ba mục tiêu."
          }
        },
        {
          "role": "user",
          "text": "Glad to hear most milestones are on track.",
          "translations": {
            "ko": "대부분의 마일스톤이 계획대로 진행되고 있다는 것을 들어 기쁩니다.",
            "zh": "很高兴听到大部分里程碑都按计划进行。",
            "ja": "ほとんどのマイルストーンが予定通りであることを聞いてうれしいです。",
            "vi": "Rất vui khi nghe hầu hết các mục tiêu đều đang theo đúng tiến độ."
          }
        },
        {
          "role": "ai",
          "text": "The integration task slipped by three days due to vendor delays.",
          "translations": {
            "ko": "공급업체의 지연으로 인해 통합 작업이 3일 지연되었습니다.",
            "zh": "由于供应商延误，集成任务推迟了三天。",
            "ja": "ベンダーの遅延により、統合タスクが3日遅れました。",
            "vi": "Công việc tích hợp đã trễ ba ngày do sự chậm trễ của nhà cung cấp."
          }
        },
        {
          "role": "user",
          "text": "Three-day slip is manageable under the circumstances.",
          "translations": {
            "ko": "상황을 고려하면 3일의 지연은 관리 가능합니다.",
            "zh": "在当前情况下，三天的滑动是可以管理的。",
            "ja": "3日の遅れは、現状下では管理可能です。",
            "vi": "Việc trễ ba ngày có thể quản lý được trong hoàn cảnh này."
          }
        },
        {
          "role": "ai",
          "text": "We’ve escalated and received confirmation of resolution.",
          "translations": {
            "ko": "우리는 상황을 긴급하게 상향 조정하고 해결 확인을 받았습니다.",
            "zh": "我们已经升级并得到了解决的确认。",
            "ja": "エスカレーションを行い、解決の確認を受けました。",
            "vi": "Chúng tôi đã tăng cường và nhận được xác nhận về việc giải quyết."
          }
        },
        {
          "role": "user",
          "text": "Appreciate the quick escalation on vendor issues.",
          "translations": {
            "ko": "공급업체 문제에 대한 빠른 상향 조정에 감사드립니다.",
            "zh": "感谢对供应商问题的快速升级。",
            "ja": "ベンダー問題に対する迅速なエスカレーションに感謝します。",
            "vi": "Đánh giá cao việc tăng cường nhanh chóng về vấn đề nhà cung cấp."
          }
        },
        {
          "role": "ai",
          "text": "Next week’s focus is testing and bug triage.",
          "translations": {
            "ko": "다음 주의 초점은 테스트와 버그 정리입니다.",
            "zh": "下周的重点是测试和错误分类。",
            "ja": "来週の焦点はテストとバグのトリアージです。",
            "vi": "Trọng tâm tuần tới là kiểm thử và xử lý lỗi."
          }
        },
        {
          "role": "user",
          "text": "Looking forward to QA results next week.",
          "translations": {
            "ko": "다음 주에 QA 결과를 기대하고 있습니다.",
            "zh": "期待下周的QA结果。",
            "ja": "来週のQA結果を楽しみにしています。",
            "vi": "Mong chờ kết quả QA vào tuần tới."
          }
        },
        {
          "role": "ai",
          "text": "We’re at 60 percent completion overall.",
          "translations": {
            "ko": "우리는 전체적으로 60 퍼센트 완료 상태에 있습니다.",
            "zh": "我们总体完成了60%。",
            "ja": "全体の完成度は60％です。",
            "vi": "Chúng ta đã hoàn thành 60 phần trăm tổng thể."
          }
        },
        {
          "role": "user",
          "text": "Good to know morale is high mid-project.",
          "translations": {
            "ko": "프로젝트 중간에 사기가 높다는 것을 알게 되어 좋습니다.",
            "zh": "很高兴知道项目进行中时士气高昂。",
            "ja": "プロジェクト途中で士気が高いことは良い知らせです。",
            "vi": "Rất tốt khi biết tinh thần đội nhóm đang cao giữa dự án."
          }
        },
        {
          "role": "ai",
          "text": "Team morale is strong, and velocity remains steady.",
          "translations": {
            "ko": "팀의 사기는 강하고, 작업 속도는 안정적입니다.",
            "zh": "团队士气强劲，进度保持稳定。",
            "ja": "チームの士気は強く、進行速度も安定しています。",
            "vi": "Tinh thần đội nhóm mạnh mẽ, và tốc độ tiến độ vẫn ổn định."
          }
        },
        {
          "role": "user",
          "text": "Let’s continue monitoring risk areas weekly.",
          "translations": {
            "ko": "위험 영역을 주간으로 계속 모니터링합시다.",
            "zh": "让我们继续每周监控风险区域。",
            "ja": "リスクエリアのモニタリングを週次で続けましょう。",
            "vi": "Hãy tiếp tục theo dõi các khu vực rủi ro hàng tuần."
          }
        },
        {
          "role": "ai",
          "text": "No additional risks identified this week.",
          "translations": {
            "ko": "이번 주에는 추가적인 위험이 발견되지 않았습니다.",
            "zh": "本周未发现额外风险。",
            "ja": "今週は追加のリスクは特定されていません。",
            "vi": "Không có rủi ro thêm được xác định trong tuần này."
          }
        },
        {
          "role": "user",
          "text": "Can we get a copy of the full timeline afterward?",
          "translations": {
            "ko": "나중에 전체 타임라인의 복사본을 받을 수 있을까요?",
            "zh": "事后我们能否获得完整时间线的副本？",
            "ja": "後で全体のタイムラインのコピーを入手できますか？",
            "vi": "Sau này, chúng ta có thể nhận được bản sao của toàn bộ lịch trình không?"
          }
        },
        {
          "role": "ai",
          "text": "We’ll open the floor for questions shortly.",
          "translations": {
            "ko": "곧 질문을 받겠습니다.",
            "zh": "我们将很快开放提问环节。",
            "ja": "まもなく質問の時間を設けます。",
            "vi": "Chúng tôi sẽ mở cửa cho câu hỏi trong chốc lát."
          }
        },
        {
          "role": "user",
          "text": "No further questions from my side.",
          "translations": {
            "ko": "제 쪽에서는 더 이상 질문이 없습니다.",
            "zh": "我这边没有其他问题。",
            "ja": "私からはこれ以上の質問はありません。",
            "vi": "Không có thêm câu hỏi từ phía tôi."
          }
        },
        {
          "role": "ai",
          "text": "Thanks for your continued support.",
          "translations": {
            "ko": "지속적인 지원에 감사드립니다.",
            "zh": "感谢你们的持续支持。",
            "ja": "今後ともご支援いただきありがとうございます。",
            "vi": "Cảm ơn sự hỗ trợ không ngừng của bạn."
          }
        },
        {
          "role": "user",
          "text": "Thanks. Appreciate the transparency.",
          "translations": {
            "ko": "감사합니다. 투명성을 고려해 주셔서 감사합니다.",
            "zh": "谢谢。我很欣赏你的透明度。",
            "ja": "ありがとう。透明性を保ってくれて感謝します。",
            "vi": "Cảm ơn. Tôi đánh giá cao sự minh bạch."
          }
        }
      ]
    },
    {
      "description": {
        "ko": "연간 예산 및 자원 배정 계획",
        "zh": "计划年度预算和资源分配",
        "ja": "年間予算とリソース割り当ての計画を立てる",
        "vi": "Lập kế hoạch ngân sách hàng năm và phân bổ nguồn lực"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Let’s begin annual budgeting discussions.",
          "translations": {
            "ko": "연간 예산 논의를 시작합시다.",
            "zh": "让我们开始年度预算讨论。",
            "ja": "年間予算の議論を始めましょう。",
            "vi": "Hãy bắt đầu thảo luận về ngân sách hàng năm."
          }
        },
        {
          "role": "user",
          "text": "Thanks. Our team is requesting two additional hires.",
          "translations": {
            "ko": "감사합니다. 우리 팀은 추가로 두 명을 고용하려고 합니다.",
            "zh": "谢谢。我们的团队需要增加两个职位。",
            "ja": "ありがとう。私たちのチームは追加で2人の採用を要求しています。",
            "vi": "Cảm ơn. Đội nhóm của chúng tôi đang yêu cầu thêm hai người."
          }
        },
        {
          "role": "ai",
          "text": "We’ll review each department’s resource requests.",
          "translations": {
            "ko": "각 부서의 자원 요청을 검토하겠습니다.",
            "zh": "我们将审查每个部门的资源需求。",
            "ja": "各部門のリソース要求を見直します。",
            "vi": "Chúng tôi sẽ xem xét yêu cầu nguồn lực của từng bộ phận."
          }
        },
        {
          "role": "user",
          "text": "We also need a data visualization tool upgrade.",
          "translations": {
            "ko": "우리는 또한 데이터 시각화 도구의 업그레이드가 필요합니다.",
            "zh": "我们还需要升级数据可视化工具。",
            "ja": "データ可視化ツールのアップグレードも必要です。",
            "vi": "Chúng tôi cũng cần nâng cấp công cụ trực quan hóa dữ liệu."
          }
        },
        {
          "role": "ai",
          "text": "Please highlight headcount and tooling needs first.",
          "translations": {
            "ko": "먼저 인원 수와 도구 필요성을 강조해 주세요.",
            "zh": "请首先突出人员和工具需求。",
            "ja": "まずは人員とツールのニーズを強調してください。",
            "vi": "Vui lòng đánh dấu nhu cầu về nhân sự và công cụ trước tiên."
          }
        },
        {
          "role": "user",
          "text": "Understood on the economic context.",
          "translations": {
            "ko": "경제적 맥락에 대해 이해했습니다.",
            "zh": "了解经济背景。",
            "ja": "経済状況について理解しました。",
            "vi": "Hiểu về bối cảnh kinh tế."
          }
        },
        {
          "role": "ai",
          "text": "Let’s be mindful of macroeconomic factors this year.",
          "translations": {
            "ko": "올해는 거시경제적 요인을 유념합시다.",
            "zh": "让我们今年注意宏观经济因素。",
            "ja": "今年はマクロ経済要因を考慮しましょう。",
            "vi": "Hãy chú ý đến các yếu tố kinh tế vĩ mô trong năm nay."
          }
        },
        {
          "role": "user",
          "text": "We’ve tied our asks to growth initiatives.",
          "translations": {
            "ko": "우리는 성장 계획에 우리의 요구사항을 연결했습니다.",
            "zh": "我们已将请求与增长计划挂钩。",
            "ja": "私たちは成長イニシアチブに要求を結びつけました。",
            "vi": "Chúng tôi đã gắn kết yêu cầu của mình với các sáng kiến tăng trưởng."
          }
        },
        {
          "role": "ai",
          "text": "We’ll use historical data to guide allocation.",
          "translations": {
            "ko": "우리는 과거 데이터를 사용하여 배정을 안내할 것입니다.",
            "zh": "我们将使用历史数据指导分配。",
            "ja": "過去のデータを用いて割り当てをガイドします。",
            "vi": "Chúng tôi sẽ sử dụng dữ liệu lịch sử để hướng dẫn phân bổ."
          }
        },
        {
          "role": "user",
          "text": "We’ll prepare contingency scenarios as well.",
          "translations": {
            "ko": "우리는 비상 시나리오도 준비할 것입니다.",
            "zh": "我们也将准备应急方案。",
            "ja": "また、緊急事態のシナリオも準備します。",
            "vi": "Chúng tôi cũng sẽ chuẩn bị các kịch bản dự phòng."
          }
        },
        {
          "role": "ai",
          "text": "Requests should be tied to strategic priorities.",
          "translations": {
            "ko": "요청은 전략적 우선순위와 연결되어야 합니다.",
            "zh": "请求应与战略优先事项挂钩。",
            "ja": "要求は戦略的な優先事項に結びつけるべきです。",
            "vi": "Yêu cầu nên được gắn kết với các ưu tiên chiến lược."
          }
        },
        {
          "role": "user",
          "text": "Justification slides will be ready tomorrow.",
          "translations": {
            "ko": "근거 슬라이드는 내일 준비될 것입니다.",
            "zh": "理由幻灯片将在明天准备好。",
            "ja": "根拠のスライドは明日準備します。",
            "vi": "Slide biện minh sẽ sẵn sàng vào ngày mai."
          }
        },
        {
          "role": "ai",
          "text": "We’ll also need contingency plans for variance.",
          "translations": {
            "ko": "우리는 또한 변동에 대한 비상 계획이 필요합니다.",
            "zh": "我们也需要为差异制定应急计划。",
            "ja": "分散に対する緊急対策も必要です。",
            "vi": "Chúng tôi cũng sẽ cần các kế hoạch dự phòng cho sự biến động."
          }
        },
        {
          "role": "user",
          "text": "Thanks for keeping us aligned on process.",
          "translations": {
            "ko": "프로세스에 대해 우리를 일치시켜 주셔서 감사합니다.",
            "zh": "感谢你们让我们对流程保持一致。",
            "ja": "プロセスについて一致していただきありがとうございます。",
            "vi": "Cảm ơn bạn đã giữ chúng tôi đồng lòng về quy trình."
          }
        },
        {
          "role": "ai",
          "text": "Finance will consolidate feedback by end of week.",
          "translations": {
            "ko": "재무팀은 주말까지 피드백을 통합할 것입니다.",
            "zh": "财务部将在本周末前整合反馈。",
            "ja": "財務部は週末までにフィードバックをまとめます。",
            "vi": "Phòng Tài chính sẽ tổng hợp phản hồi vào cuối tuần."
          }
        },
        {
          "role": "user",
          "text": "We’ll finalize inputs by Thursday.",
          "translations": {
            "ko": "목요일까지 입력을 확정하겠습니다.",
            "zh": "我们将在周四前确定输入。",
            "ja": "木曜日までに入力を最終化します。",
            "vi": "Chúng tôi sẽ hoàn thiện đầu vào vào thứ Năm."
          }
        },
        {
          "role": "ai",
          "text": "Please submit justifications in writing.",
          "translations": {
            "ko": "근거를 서면으로 제출해 주세요.",
            "zh": "请以书面形式提交理由。",
            "ja": "根拠を書面で提出してください。",
            "vi": "Vui lòng gửi biện minh bằng văn bản."
          }
        },
        {
          "role": "user",
          "text": "Looking forward to the consolidated plan.",
          "translations": {
            "ko": "통합 계획을 기대하고 있습니다.",
            "zh": "期待看到整合后的计划。",
            "ja": "まとめた計画を楽しみにしています。",
            "vi": "Mong chờ kế hoạch tổng hợp."
          }
        },
        {
          "role": "ai",
          "text": "Next week, we’ll present a consolidated draft.",
          "translations": {
            "ko": "다음 주에는 통합 초안을 발표할 것입니다.",
            "zh": "下周，我们将提出一个整合的草案。",
            "ja": "来週、まとめた草案を発表します。",
            "vi": "Tuần tới, chúng tôi sẽ trình bày bản thảo tổng hợp."
          }
        },
        {
          "role": "user",
          "text": "Appreciate the structured approach.",
          "translations": {
            "ko": "체계적인 접근 방식에 감사드립니다.",
            "zh": "感谢有条理的方法。",
            "ja": "構造化されたアプローチに感謝します。",
            "vi": "Đánh giá cao cách tiếp cận có cấu trúc."
          }
        }
      ]
    }
  ]
};