import { LevelType, PracticeScene } from '../types';

export const templateDialogs: Record<LevelType, readonly PracticeScene[]> = {

    "beginner": [
      {
        "description": {
          "en": "Starting a presentation",
          "ko": "프레젠테이션 시작",
          "zh": "开始演讲",
          "ja": "プレゼンテーションの開始",
          "vi": "Bắt đầu một buổi thuyết trình"
        },
        "dialogues": [
          {
            "role": "ai",
            "text": "Good morning, everyone. Thank you for coming.",
            "translations": {
              "ko": "여러분, 좋은 아침입니다. 오셔서 감사합니다.",
              "zh": "大家早上好。感谢你们的到来。",
              "ja": "皆さん、おはようございます。お越しいただきありがとうございます。",
              "vi": "Chào buổi sáng mọi người. Cảm ơn đã đến.",
              "en": "Good morning, everyone. Thank you for coming.",
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
              "en": "Good morning.",
            }
          },
          {
            "role": "ai",
            "text": "Let’s begin the presentation.",
            "translations": {
              "ko": "프레젠테이션을 시작하겠습니다.",
              "zh": "让我们开始演讲。",
              "ja": "プレゼンテーションを始めましょう。",
              "vi": "Hãy bắt đầu buổi thuyết trình.",
              "en": "Let’s begin the presentation.",
            }
          },
          {
            "role": "user",
            "text": "We’re ready.",
            "translations": {
              "ko": "준비가 되었습니다.",
              "zh": "我们准备好了。",
              "ja": "準備はできています。",
              "vi": "Chúng tôi đã sẵn sàng.",
              "en": "We’re ready.",
            }
          },
          {
            "role": "ai",
            "text": "Can everyone see the screen?",
            "translations": {
              "ko": "모두 화면이 보이시나요?",
              "zh": "大家都能看到屏幕吗？",
              "ja": "皆さん、スクリーンは見えますか？",
              "vi": "Mọi người có thể nhìn thấy màn hình không?",
              "en": "Can everyone see the screen?",
            }
          },
          {
            "role": "user",
            "text": "Yes, it’s clear.",
            "translations": {
              "ko": "네, 잘 보입니다.",
              "zh": "是的，很清楚。",
              "ja": "はい、はっきり見えます。",
              "vi": "Vâng, rất rõ.",
              "en": "Yes, it’s clear.",
            }
          },
          {
            "role": "ai",
            "text": "Please let me know if you can’t hear me.",
            "translations": {
              "ko": "제 목소리가 들리지 않으면 알려주세요.",
              "zh": "如果你们听不到我，请告诉我。",
              "ja": "私の声が聞こえない場合はお知らせください。",
              "vi": "Hãy cho tôi biết nếu bạn không nghe thấy tôi.",
              "en": "Please let me know if you can’t hear me.",
            }
          },
          {
            "role": "user",
            "text": "We hear you well.",
            "translations": {
              "ko": "목소리 잘 들립니다.",
              "zh": "我们听得很清楚。",
              "ja": "はっきり聞こえます。",
              "vi": "Chúng tôi nghe rõ bạn.",
              "en": "We hear you well.",
            }
          },
          {
            "role": "ai",
            "text": "This will be a short session.",
            "translations": {
              "ko": "짧은 세션을 진행하겠습니다.",
              "zh": "这将是一个短小的会议。",
              "ja": "これは短いセッションになります。",
              "vi": "Đây sẽ là một phiên họp ngắn.",
              "en": "This will be a short session.",
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
              "en": "Okay.",
            }
          },
          {
            "role": "ai",
            "text": "Feel free to ask questions later.",
            "translations": {
              "ko": "나중에 자유롭게 질문해주세요.",
              "zh": "之后随时可以提问。",
              "ja": "後で質問していただいて構いません。",
              "vi": "Cứ tự do đặt câu hỏi sau.",
              "en": "Feel free to ask questions later.",
            }
          },
          {
            "role": "user",
            "text": "Will do.",
            "translations": {
              "ko": "알겠습니다.",
              "zh": "好的。",
              "ja": "そうします。",
              "vi": "Được.",
              "en": "Will do.",
            }
          },
          {
            "role": "ai",
            "text": "We’ll talk for about 10 minutes.",
            "translations": {
              "ko": "약 10분간 이야기하겠습니다.",
              "zh": "我们将会谈论大约10分钟。",
              "ja": "約10分間話します。",
              "vi": "Chúng tôi sẽ nói chuyện khoảng 10 phút.",
              "en": "We’ll talk for about 10 minutes.",
            }
          },
          {
            "role": "user",
            "text": "Sounds good.",
            "translations": {
              "ko": "좋습니다.",
              "zh": "听起来不错。",
              "ja": "よろしいですね。",
              "vi": "Nghe có vẻ tốt.",
              "en": "Sounds good.",
            }
          },
          {
            "role": "ai",
            "text": "Let’s get started.",
            "translations": {
              "ko": "시작하겠습니다.",
              "zh": "让我们开始吧。",
              "ja": "始めましょう。",
              "vi": "Hãy bắt đầu.",
              "en": "Let’s get started.",
            }
          },
          {
            "role": "user",
            "text": "Go ahead.",
            "translations": {
              "ko": "시작해주세요.",
              "zh": "请开始。",
              "ja": "どうぞ。",
              "vi": "Hãy tiếp tục.",
              "en": "Go ahead.",
            }
          },
          {
            "role": "ai",
            "text": "Here we go.",
            "translations": {
              "ko": "시작하겠습니다.",
              "zh": "我们开始吧。",
              "ja": "さあ、始めましょう。",
              "vi": "Chúng ta bắt đầu thôi.",
              "en": "Here we go.",
            }
          },
          {
            "role": "user",
            "text": "Looking forward to it.",
            "translations": {
              "ko": "기대하겠습니다.",
              "zh": "期待中。",
              "ja": "楽しみにしています。",
              "vi": "Mong đợi.",
              "en": "Looking forward to it.",
            }
          },
          {
            "role": "ai",
            "text": "Thanks again for joining.",
            "translations": {
              "ko": "참석해주셔서 다시 한번 감사드립니다.",
              "zh": "再次感谢你们的参与。",
              "ja": "参加していただき、再度ありがとうございます。",
              "vi": "Cảm ơn mọi người đã tham gia.",
              "en": "Thanks again for joining.",
            }
          },
          {
            "role": "user",
            "text": "Of course.",
            "translations": {
              "ko": "당연히요.",
              "zh": "当然。",
              "ja": "もちろんです。",
              "vi": "Dĩ nhiên.",
              "en": "Of course.",
            }
          }
        ]
      },
      {
        "description": {
          "en": "Introducing the topic",
          "ko": "주제 소개",
          "zh": "介绍主题",
          "ja": "トピックの紹介",
          "vi": "Giới thiệu chủ đề"
        },
        "dialogues": [
          {
            "role": "ai",
            "text": "Today I’ll talk about our new product.",
            "translations": {
              "ko": "오늘은 새로운 제품에 대해 이야기하겠습니다.",
              "zh": "今天我将谈论我们的新产品。",
              "ja": "今日は新製品について話します。",
              "vi": "Hôm nay tôi sẽ nói về sản phẩm mới của chúng tôi.",
              "en": "Today I’ll talk about our new product.",
            }
          },
          {
            "role": "user",
            "text": "Great.",
            "translations": {
              "ko": "좋습니다.",
              "zh": "太好了。",
              "ja": "素晴らしいです。",
              "vi": "Tuyệt.",
              "en": "Great.",
            }
          },
          {
            "role": "ai",
            "text": "It’s a tool to help you save time.",
            "translations": {
              "ko": "이 도구는 여러분의 시간을 절약해줍니다.",
              "zh": "这是一个可以帮助你节省时间的工具。",
              "ja": "これは時間を節約するためのツールです。",
              "vi": "Đó là một công cụ giúp bạn tiết kiệm thời gian.",
              "en": "It’s a tool to help you save time.",
            }
          },
          {
            "role": "user",
            "text": "Interesting.",
            "translations": {
              "ko": "흥미롭네요.",
              "zh": "有趣。",
              "ja": "面白いですね。",
              "vi": "Thú vị.",
              "en": "Interesting.",
            }
          },
          {
            "role": "ai",
            "text": "Many people struggle with task management.",
            "translations": {
              "ko": "많은 사람들이 업무 관리에 어려움을 겪고 있습니다.",
              "zh": "很多人在任务管理上遇到困难。",
              "ja": "多くの人がタスク管理に苦労しています。",
              "vi": "Nhiều người gặp khó khăn trong việc quản lý công việc.",
              "en": "Many people struggle with task management.",
            }
          },
          {
            "role": "user",
            "text": "That’s true.",
            "translations": {
              "ko": "그렇습니다.",
              "zh": "这是真的。",
              "ja": "その通りです。",
              "vi": "Đúng vậy.",
              "en": "That’s true.",
            }
          },
          {
            "role": "ai",
            "text": "We built this to solve that problem.",
            "translations": {
              "ko": "그 문제를 해결하기 위해 이 제품을 만들었습니다.",
              "zh": "我们为解决这个问题而创建了这个产品。",
              "ja": "その問題を解決するためにこれを作りました。",
              "vi": "Chúng tôi đã xây dựng nó để giải quyết vấn đề đó.",
              "en": "We built this to solve that problem.",
            }
          },
          {
            "role": "user",
            "text": "Sounds useful.",
            "translations": {
              "ko": "유용하게 사용할 수 있을 것 같습니다.",
              "zh": "听起来很有用。",
              "ja": "役立ちそうです。",
              "vi": "Nghe có vẻ hữu ích.",
              "en": "Sounds useful.",
            }
          },
          {
            "role": "ai",
            "text": "First, I’ll explain the main features.",
            "translations": {
              "ko": "먼저, 주요 기능에 대해 설명하겠습니다.",
              "zh": "首先，我将解释主要特性。",
              "ja": "最初に、主な機能を説明します。",
              "vi": "Đầu tiên, tôi sẽ giải thích các tính năng chính.",
              "en": "First, I’ll explain the main features.",
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
              "en": "Okay.",
            }
          },
          {
            "role": "ai",
            "text": "Then I’ll show a quick demo.",
            "translations": {
              "ko": "그 다음에는 빠른 데모를 보여드리겠습니다.",
              "zh": "然后我会做一个快速的演示。",
              "ja": "その後、デモを簡単に見せます。",
              "vi": "Sau đó tôi sẽ thực hiện một demo nhanh.",
              "en": "Then I’ll show a quick demo.",
            }
          },
          {
            "role": "user",
            "text": "Looking forward to it.",
            "translations": {
              "ko": "기대하겠습니다.",
              "zh": "期待中。",
              "ja": "楽しみにしています。",
              "vi": "Mong đợi.",
              "en": "Looking forward to it.",
            }
          },
          {
            "role": "ai",
            "text": "I’ll keep things simple.",
            "translations": {
              "ko": "간단하게 설명하겠습니다.",
              "zh": "我会让事情变得简单。",
              "ja": "シンプルに説明します。",
              "vi": "Tôi sẽ giữ mọi thứ đơn giản.",
              "en": "I’ll keep things simple.",
            }
          },
          {
            "role": "user",
            "text": "Perfect.",
            "translations": {
              "ko": "좋습니다.",
              "zh": "完美。",
              "ja": "完璧です。",
              "vi": "Hoàn hảo.",
              "en": "Perfect.",
            }
          },
          {
            "role": "ai",
            "text": "Let’s begin with the problem.",
            "translations": {
              "ko": "문제점부터 시작하겠습니다.",
              "zh": "让我们从问题开始。",
              "ja": "問題から始めましょう。",
              "vi": "Hãy bắt đầu với vấn đề.",
              "en": "Let’s begin with the problem.",
            }
          },
          {
            "role": "user",
            "text": "Alright.",
            "translations": {
              "ko": "알겠습니다.",
              "zh": "好的。",
              "ja": "了解です。",
              "vi": "Được.",
              "en": "Okay.",
            }
          },
          {
            "role": "ai",
            "text": "Then we’ll look at the solution.",
            "translations": {
              "ko": "그 다음에는 해결책을 살펴보겠습니다.",
              "zh": "然后我们将看看解决方案。",
              "ja": "その後、解決策を見ていきます。",
              "vi": "Sau đó chúng ta sẽ xem xét giải pháp.",
              "en": "Then we’ll look at the solution.",
            }
          },
          {
            "role": "user",
            "text": "Makes sense.",
            "translations": {
              "ko": "이해했습니다.",
              "zh": "有道理。",
              "ja": "理解できます。",
              "vi": "Hợp lý.",
              "en": "Makes sense.",
            }
          },
          {
            "role": "ai",
            "text": "Let’s dive in!",
            "translations": {
              "ko": "시작해봅시다!",
              "zh": "让我们深入研究吧！",
              "ja": "さあ、始めましょう！",
              "vi": "Hãy lặn sâu vào!",
              "en": "Let’s dive in!",
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
              "en": "Ready.",
            }
          }
        ]
      },
      {
        "description": {
          "en": "Explaining a simple chart or graph",
          "ko": "간단한 차트나 그래프 설명",
          "zh": "解释一个简单的图表或图形",
          "ja": "シンプルなチャートやグラフの説明",
          "vi": "Giải thích một biểu đồ hoặc đồ thị đơn giản"
        },
        "dialogues": [
          {
            "role": "ai",
            "text": "Here’s a chart showing sales growth.",
            "translations": {
              "ko": "여기 판매 성장을 보여주는 차트가 있습니다.",
              "zh": "这是一个显示销售增长的图表。",
              "ja": "これは売上成長を示すチャートです。",
              "vi": "Đây là biểu đồ cho thấy sự tăng trưởng doanh số.",
              "en": "Here’s a chart showing sales growth.",
            }
          },
          {
            "role": "user",
            "text": "Looks good.",
            "translations": {
              "ko": "좋아 보입니다.",
              "zh": "看起来不错。",
              "ja": "良さそうです。",
              "vi": "Trông tốt.",
              "en": "Looks good.",
            }
          },
          {
            "role": "ai",
            "text": "As you can see, it rises in Q2.",
            "translations": {
              "ko": "보시다시피, 2분기에 상승합니다.",
              "zh": "如你所见，它在第二季度上升。",
              "ja": "ご覧の通り、Q2で上昇しています。",
              "vi": "Như bạn có thể thấy, nó tăng trong Q2.",
              "en": "As you can see, it rises in Q2.",
            }
          },
          {
            "role": "user",
            "text": "Yes, it’s clear.",
            "translations": {
              "ko": "네, 잘 보입니다.",
              "zh": "是的，很清楚。",
              "ja": "はい、はっきり見えます。",
              "vi": "Vâng, rất rõ.",
              "en": "Yes, it’s clear.",
            }
          },
          {
            "role": "ai",
            "text": "We had a 20% increase.",
            "translations": {
              "ko": "20% 증가했습니다.",
              "zh": "我们增长了20%。",
              "ja": "20%増加しました。",
              "vi": "Chúng tôi đã tăng 20%.",
              "en": "We had a 20% increase.",
            }
          },
          {
            "role": "user",
            "text": "That’s great.",
            "translations": {
              "ko": "좋습니다.",
              "zh": "那太好了。",
              "ja": "それは素晴らしいです。",
              "vi": "Tuyệt vời.",
              "en": "That’s great.",
            }
          },
          {
            "role": "ai",
            "text": "The blue line shows 2023 data.",
            "translations": {
              "ko": "파란색 선은 2023년 데이터를 보여줍니다.",
              "zh": "蓝线显示的是2023年的数据。",
              "ja": "青い線は2023年のデータを示しています。",
              "vi": "Đường màu xanh biểu thị dữ liệu năm 2023.",
              "en": "The blue line shows 2023 data.",
            }
          },
          {
            "role": "user",
            "text": "I see.",
            "translations": {
              "ko": "알겠습니다.",
              "zh": "我明白了。",
              "ja": "理解しました。",
              "vi": "Tôi hiểu.",
              "en": "I see.",
            }
          },
          {
            "role": "ai",
            "text": "The green bar shows last year.",
            "translations": {
              "ko": "녹색 막대는 작년을 보여줍니다.",
              "zh": "绿色的条形图显示的是去年的数据。",
              "ja": "緑のバーは昨年を示しています。",
              "vi": "Cột màu xanh lá cây biểu thị năm trước.",
              "en": "The green bar shows last year.",
            }
          },
          {
            "role": "user",
            "text": "Nice comparison.",
            "translations": {
              "ko": "비교가 잘 되네요.",
              "zh": "很好的比较。",
              "ja": "良い比較ですね。",
              "vi": "So sánh hay.",
              "en": "Nice comparison.",
            }
          },
          {
            "role": "ai",
            "text": "Let’s look closer at March.",
            "translations": {
              "ko": "3월을 좀 더 자세히 살펴보겠습니다.",
              "zh": "让我们更仔细地看看三月份。",
              "ja": "3月の詳細を見てみましょう。",
              "vi": "Hãy xem kỹ hơn vào tháng 3.",
              "en": "Let’s look closer at March.",
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
              "en": "Okay.",
            }
          },
          {
            "role": "ai",
            "text": "That was our best month.",
            "translations": {
              "ko": "그 달이 우리에게 가장 좋은 달이었습니다.",
              "zh": "那是我们最好的一个月。",
              "ja": "それが私たちの最高の月でした。",
              "vi": "Đó là tháng tốt nhất của chúng tôi.",
              "en": "That was our best month.",
            }
          },
          {
            "role": "user",
            "text": "Impressive.",
            "translations": {
              "ko": "인상적입니다.",
              "zh": "令人印象深刻。",
              "ja": "素晴らしいですね。",
              "vi": "Ấn tượng.",
              "en": "Impressive.",
            }
          },
          {
            "role": "ai",
            "text": "We used a new strategy then.",
            "translations": {
              "ko": "그 때 새로운 전략을 사용했습니다.",
              "zh": "我们当时使用了一种新策略。",
              "ja": "その時に新しい戦略を使いました。",
              "vi": "Chúng tôi đã sử dụng một chiến lược mới vào thời điểm đó.",
              "en": "We used a new strategy then.",
            }
          },
          {
            "role": "user",
            "text": "Interesting.",
            "translations": {
              "ko": "흥미롭네요.",
              "zh": "有趣。",
              "ja": "面白いですね。",
              "vi": "Thú vị.",
              "en": "Interesting.",
            }
          },
          {
            "role": "ai",
            "text": "Any questions so far?",
            "translations": {
              "ko": "지금까지 질문이 있나요?",
              "zh": "到目前为止有任何问题吗？",
              "ja": "今のところ質問はありますか？",
              "vi": "Có câu hỏi nào cho đến nay không?",
              "en": "Any questions so far?",
            }
          },
          {
            "role": "user",
            "text": "Not yet.",
            "translations": {
              "ko": "아직 없습니다.",
              "zh": "还没有。",
              "ja": "まだありません。",
              "vi": "Chưa.",
              "en": "Not yet.",
            }
          },
          {
            "role": "ai",
            "text": "Let’s continue.",
            "translations": {
              "ko": "계속하겠습니다.",
              "zh": "让我们继续。",
              "ja": "続けましょう。",
              "vi": "Hãy tiếp tục.",
              "en": "Let’s continue.",
            }
          },
          {
            "role": "user",
            "text": "Please do.",
            "translations": {
              "ko": "계속해주세요.",
              "zh": "请继续。",
              "ja": "どうぞ。",
              "vi": "Hãy làm đi.",
              "en": "Please do.",
            }
          }
        ]
      },
      {
        "description": {
          "en": "Giving a short product demo",
          "ko": "짧은 제품 데모 제공",
          "zh": "做一个简短的产品演示",
          "ja": "短い製品デモの提供",
          "vi": "Thực hiện một demo sản phẩm ngắn"
        },
        "dialogues": [
          {
            "role": "ai",
            "text": "Let me show you how the app works.",
            "translations": {
              "ko": "앱이 어떻게 작동하는지 보여드리겠습니다.",
              "zh": "让我向你们展示这款应用如何工作。",
              "ja": "アプリの使い方を見せていただきます。",
              "vi": "Hãy để tôi cho bạn xem cách ứng dụng hoạt động.",
              "en": "Let me show you how the app works.",
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
              "en": "Okay.",
            }
          },
          {
            "role": "ai",
            "text": "First, open the dashboard.",
            "translations": {
              "ko": "먼저 대시보드를 엽니다.",
              "zh": "首先，打开仪表板。",
              "ja": "最初にダッシュボードを開きます。",
              "vi": "Đầu tiên, mở bảng điều khiển.",
              "en": "First, open the dashboard.",
            }
          },
          {
            "role": "user",
            "text": "Got it.",
            "translations": {
              "ko": "알겠습니다.",
              "zh": "明白了。",
              "ja": "分かりました。",
              "vi": "Đã hiểu.",
              "en": "Got it.",
            }
          },
          {
            "role": "ai",
            "text": "Click on ‘New Task’.",
            "translations": {
              "ko": "'새로운 작업'을 클릭합니다.",
              "zh": "点击“新任务”。",
              "ja": "「新規タスク」をクリックします。",
              "vi": "Nhấp vào 'Nhiệm vụ mới'.",
              "en": "Click on ‘New Task’.",
            }
          },
          {
            "role": "user",
            "text": "Done.",
            "translations": {
              "ko": "했습니다.",
              "zh": "完成了。",
              "ja": "完了しました。",
              "vi": "Đã xong.",
              "en": "Done.",
            }
          },
          {
            "role": "ai",
            "text": "Type your task name.",
            "translations": {
              "ko": "작업 이름을 입력합니다.",
              "zh": "输入你的任务名称。",
              "ja": "タスク名を入力します。",
              "vi": "Gõ tên nhiệm vụ của bạn.",
              "en": "Type your task name.",
            }
          },
          {
            "role": "user",
            "text": "Like ‘Email client’?",
            "translations": {
              "ko": "'클라이언트에게 이메일 보내기' 같은 건가요?",
              "zh": "就像“给客户发邮件”？",
              "ja": "「クライアントにメール」のような感じですか？",
              "vi": "Như 'Email cho khách hàng'?",
              "en": "Like ‘Email client’?",
            }
          },
          {
            "role": "ai",
            "text": "Exactly. Now set a time.",
            "translations": {
              "ko": "정확합니다. 이제 시간을 설정합니다.",
              "zh": "没错。现在设置一个时间。",
              "ja": "まさにその通りです。次に時間を設定します。",
              "vi": "Chính xác. Bây giờ đặt thời gian.",
              "en": "Exactly. Now set a time.",
            }
          },
          {
            "role": "user",
            "text": "10 AM.",
            "translations": {
              "ko": "오전 10시.",
              "zh": "上午10点。",
              "ja": "午前10時。",
              "vi": "10 giờ sáng.",
              "en": "10 AM.",
            }
          },
          {
            "role": "ai",
            "text": "Great. Then press save.",
            "translations": {
              "ko": "좋습니다. 그런 다음 저장을 누릅니다.",
              "zh": "很好。然后按保存。",
              "ja": "素晴らしいです。それから保存を押します。",
              "vi": "Tốt. Sau đó nhấn lưu.",
              "en": "Great. Then press save.",
            }
          },
          {
            "role": "user",
            "text": "Easy!",
            "translations": {
              "ko": "쉽네요!",
              "zh": "简单！",
              "ja": "簡単ですね！",
              "vi": "Dễ dàng!",
              "en": "Easy!",
            }
          },
          {
            "role": "ai",
            "text": "The task appears on your list.",
            "translations": {
              "ko": "작업이 목록에 표시됩니다.",
              "zh": "任务会出现在你的列表上。",
              "ja": "タスクがリストに表示されます。",
              "vi": "Nhiệm vụ xuất hiện trên danh sách của bạn.",
              "en": "The task appears on your list.",
            }
          },
          {
            "role": "user",
            "text": "I see.",
            "translations": {
              "ko": "알겠습니다.",
              "zh": "我看到了。",
              "ja": "理解しました。",
              "vi": "Tôi thấy.",
              "en": "I see.",
            }
          },
          {
            "role": "ai",
            "text": "You can mark it done later.",
            "translations": {
              "ko": "나중에 완료로 표시할 수 있습니다.",
              "zh": "你可以稍后标记它为已完成。",
              "ja": "後で完了とマークできます。",
              "vi": "Bạn có thể đánh dấu nó đã hoàn thành sau.",
              "en": "You can mark it done later.",
            }
          },
          {
            "role": "user",
            "text": "That’s helpful.",
            "translations": {
              "ko": "도움이 될 것 같습니다.",
              "zh": "这很有帮助。",
              "ja": "それは便利です。",
              "vi": "Rất hữu ích.",
              "en": "That’s helpful.",
            }
          },
          {
            "role": "ai",
            "text": "It’s very simple to use.",
            "translations": {
              "ko": "사용하기 매우 간단합니다.",
              "zh": "它非常简单易用。",
              "ja": "使い方は非常に簡単です。",
              "vi": "Rất dễ sử dụng.",
              "en": "It’s very simple to use.",
            }
          },
          {
            "role": "user",
            "text": "Yes, very.",
            "translations": {
              "ko": "네, 매우 간단합니다.",
              "zh": "是的，非常。",
              "ja": "はい、とてもです。",
              "vi": "Vâng, rất dễ.",
              "en": "Yes, very.",
            }
          },
          {
            "role": "ai",
            "text": "That’s the basic flow.",
            "translations": {
              "ko": "기본적인 흐름입니다.",
              "zh": "这就是基本的流程。",
              "ja": "それが基本的な流れです。",
              "vi": "Đó là quy trình cơ bản.",
              "en": "That’s the basic flow.",
            }
          },
          {
            "role": "user",
            "text": "Thanks for the demo!",
            "translations": {
              "ko": "데모를 보여주셔서 감사합니다!",
              "zh": "谢谢你的演示！",
              "ja": "デモを見せていただきありがとうございます！",
              "vi": "Cảm ơn đã thực hiện demo!",
              "en": "Thanks for the demo!",
            }
          }
        ]
      },
      {
        "description": {
          "en": "Transitioning between sections",
          "ko": "섹션 간 전환",
          "zh": "在各部分之间过渡",
          "ja": "セクション間の移行",
          "vi": "Chuyển đổi giữa các phần"
        },
        "dialogues": [
          {
            "role": "ai",
            "text": "Now that we’ve seen the features, let’s move on.",
            "translations": {
              "ko": "기능을 살펴본 후, 다음으로 넘어가겠습니다.",
              "zh": "现在我们已经看过了特性，让我们继续。",
              "ja": "機能を見たところで、次に進みましょう。",
              "vi": "Bây giờ khi chúng ta đã xem các tính năng, hãy tiếp tục.",
              "en": "Now that we’ve seen the features, let’s move on.",
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
              "en": "Okay.",
            }
          },
          {
            "role": "ai",
            "text": "Next, I’ll talk about pricing.",
            "translations": {
              "ko": "다음은 가격에 대해 이야기하겠습니다.",
              "zh": "接下来，我将谈论价格。",
              "ja": "次に、価格について話します。",
              "vi": "Tiếp theo, tôi sẽ nói về giá cả.",
              "en": "Next, I’ll talk about pricing.",
            }
          },
          {
            "role": "user",
            "text": "Sounds good.",
            "translations": {
              "ko": "좋습니다.",
              "zh": "听起来不错。",
              "ja": "よろしいですね。",
              "vi": "Nghe có vẻ tốt.",
              "en": "Sounds good.",
            }
          },
          {
            "role": "ai",
            "text": "This part is important for new users.",
            "translations": {
              "ko": "이 부분은 새로운 사용자에게 중요합니다.",
              "zh": "这部分对新用户很重要。",
              "ja": "これは新規ユーザーにとって重要な部分です。",
              "vi": "Phần này quan trọng đối với người dùng mới.",
              "en": "This part is important for new users.",
            }
          },
          {
            "role": "user",
            "text": "Yes, agreed.",
            "translations": {
              "ko": "네, 동의합니다.",
              "zh": "是的，同意。",
              "ja": "はい、同意します。",
              "vi": "Vâng, đồng ý.",
              "en": "Yes, agreed.",
            }
          },
          {
            "role": "ai",
            "text": "There are three pricing plans.",
            "translations": {
              "ko": "세 가지 가격 플랜이 있습니다.",
              "zh": "有三种定价计划。",
              "ja": "価格プランは3つあります。",
              "vi": "Có ba gói giá cả.",
              "en": "There are three pricing plans.",
            }
          },
          {
            "role": "user",
            "text": "Interesting.",
            "translations": {
              "ko": "흥미롭네요.",
              "zh": "有趣。",
              "ja": "面白いですね。",
              "vi": "Thú vị.",
              "en": "Interesting.",
            }
          },
          {
            "role": "ai",
            "text": "Basic, Pro, and Enterprise.",
            "translations": {
              "ko": "기본, 프로, 엔터프라이즈입니다.",
              "zh": "基础版，专业版和企业版。",
              "ja": "ベーシック、プロ、エンタープライズです。",
              "vi": "Cơ bản, Chuyên nghiệp và Doanh nghiệp.",
              "en": "Basic, Pro, and Enterprise.",
            }
          },
          {
            "role": "user",
            "text": "Got it.",
            "translations": {
              "ko": "알겠습니다.",
              "zh": "明白了。",
              "ja": "理解しました。",
              "vi": "Đã hiểu.",
              "en": "Got it.",
            }
          },
          {
            "role": "ai",
            "text": "I’ll explain each briefly.",
            "translations": {
              "ko": "각각을 간단히 설명하겠습니다.",
              "zh": "我会简单解释每一种。",
              "ja": "各プランを簡単に説明します。",
              "vi": "Tôi sẽ giải thích mỗi gói một cách ngắn gọn.",
              "en": "I’ll explain each briefly.",
            }
          },
          {
            "role": "user",
            "text": "Please do.",
            "translations": {
              "ko": "부탁드립니다.",
              "zh": "请继续。",
              "ja": "どうぞ。",
              "vi": "Hãy làm đi.",
              "en": "Please do.",
            }
          },
          {
            "role": "ai",
            "text": "We’ll also compare with other tools.",
            "translations": {
              "ko": "다른 도구와 비교도 하겠습니다.",
              "zh": "我们还会与其他工具进行比较。",
              "ja": "他のツールとも比較します。",
              "vi": "Chúng tôi cũng sẽ so sánh với các công cụ khác.",
              "en": "We’ll also compare with other tools.",
            }
          },
          {
            "role": "user",
            "text": "That would help.",
            "translations": {
              "ko": "도움이 될 것 같습니다.",
              "zh": "那会有帮助。",
              "ja": "それは助けになります。",
              "vi": "Điều đó sẽ hữu ích.",
              "en": "That would help.",
            }
          },
          {
            "role": "ai",
            "text": "You’ll see we offer good value.",
            "translations": {
              "ko": "우리가 좋은 가치를 제공한다는 것을 알게 될 것입니다.",
              "zh": "你会看到我们提供了很好的价值。",
              "ja": "私たちの提供する価値がわかるでしょう。",
              "vi": "Bạn sẽ thấy chúng tôi cung cấp giá trị tốt.",
              "en": "You’ll see we offer good value.",
            }
          },
          {
            "role": "user",
            "text": "Looking forward to it.",
            "translations": {
              "ko": "기대하겠습니다.",
              "zh": "期待中。",
              "ja": "楽しみにしています。",
              "vi": "Mong đợi.",
              "en": "Looking forward to it.",
            }
          },
          {
            "role": "ai",
            "text": "Let’s begin with the Basic plan.",
            "translations": {
              "ko": "기본 플랜부터 시작하겠습니다.",
              "zh": "让我们从基础计划开始。",
              "ja": "ベーシックプランから始めましょう。",
              "vi": "Hãy bắt đầu với gói Cơ bản.",
              "en": "Let’s begin with the Basic plan.",
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
              "en": "Ready.",
            }
          },
          {
            "role": "ai",
            "text": "Here we go.",
            "translations": {
              "ko": "시작하겠습니다.",
              "zh": "我们开始吧。",
              "ja": "さあ、始めましょう。",
              "vi": "Chúng ta bắt đầu thôi.",
              "en": "Here we go.",
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
              "en": "Okay.",
            }
          }
        ]
      },
      {
        "description": {
          "en": "Asking and answering simple questions",
          "ko": "간단한 질문과 답변",
          "zh": "提问和回答简单问题",
          "ja": "簡単な質問の質問と回答",
          "vi": "Đặt và trả lời câu hỏi đơn giản"
        },
        "dialogues": [
          {
            "role": "ai",
            "text": "Any questions so far?",
            "translations": {
              "ko": "지금까지 질문이 있나요?",
              "zh": "到目前为止有任何问题吗？",
              "ja": "今のところ質問はありますか？",
              "vi": "Có câu hỏi nào cho đến nay không?",
              "en": "Any questions so far?",
            }
          },
          {
            "role": "user",
            "text": "Yes, what’s the trial period?",
            "translations": {
              "ko": "네, 체험 기간은 얼마나 되나요?",
              "zh": "是的，试用期是多长？",
              "ja": "はい、試用期間は何日ですか？",
              "vi": "Vâng, thời gian dùng thử là bao lâu?",
              "en": "Yes, what’s the trial period?",
            }
          },
          {
            "role": "ai",
            "text": "Great question. It’s 14 days.",
            "translations": {
              "ko": "좋은 질문입니다. 14일입니다.",
              "zh": "很好的问题。是14天。",
              "ja": "良い質問です。14日間です。",
              "vi": "Câu hỏi tốt. Là 14 ngày.",
              "en": "Great question. It’s 14 days.",
            }
          },
          {
            "role": "user",
            "text": "Nice.",
            "translations": {
              "ko": "좋습니다.",
              "zh": "不错。",
              "ja": "いいですね。",
              "vi": "Tốt.",
              "en": "Nice.",
            }
          },
          {
            "role": "ai",
            "text": "Do I need to enter my credit card?",
            "translations": {
              "ko": "신용카드 정보를 입력해야 하나요?",
              "zh": "我需要输入我的信用卡信息吗？",
              "ja": "クレジットカードを入力する必要はありますか？",
              "vi": "Tôi cần nhập thông tin thẻ tín dụng không?",
              "en": "Do I need to enter my credit card?",
            }
          },
          {
            "role": "user",
            "text": "No, not for the trial.",
            "translations": {
              "ko": "체험 기간에는 필요 없습니다.",
              "zh": "不，试用期不需要。",
              "ja": "いいえ、試用期間中は必要ありません。",
              "vi": "Không, không cần cho thời gian dùng thử.",
              "en": "No, not for the trial.",
            }
          },
          {
            "role": "ai",
            "text": "Can I cancel anytime?",
            "translations": {
              "ko": "언제든지 취소할 수 있나요?",
              "zh": "我可以随时取消吗？",
              "ja": "いつでもキャンセルできますか？",
              "vi": "Tôi có thể hủy bất cứ lúc nào không?",
              "en": "Can I cancel anytime?",
            }
          },
          {
            "role": "user",
            "text": "Yes, it’s easy.",
            "translations": {
              "ko": "네, 쉽게 할 수 있습니다.",
              "zh": "是的，很容易。",
              "ja": "はい、簡単にできます。",
              "vi": "Vâng, rất dễ dàng.",
              "en": "Yes, it’s easy.",
            }
          },
          {
            "role": "ai",
            "text": "Do you support mobile devices?",
            "translations": {
              "ko": "모바일 기기를 지원하나요?",
              "zh": "你们支持移动设备吗？",
              "ja": "モバイルデバイスをサポートしていますか？",
              "vi": "Bạn hỗ trợ thiết bị di động không?",
              "en": "Do you support mobile devices?",
            }
          },
          {
            "role": "user",
            "text": "Absolutely.",
            "translations": {
              "ko": "네, 지원합니다.",
              "zh": "当然。",
              "ja": "もちろんです。",
              "vi": "Tất nhiên.",
              "en": "Absolutely.",
            }
          },
          {
            "role": "ai",
            "text": "What languages are available?",
            "translations": {
              "ko": "사용 가능한 언어는 어떤 것들이 있나요?",
              "zh": "有哪些语言可用？",
              "ja": "利用可能な言語は何ですか？",
              "vi": "Ngôn ngữ nào được hỗ trợ?",
              "en": "What languages are available?",
            }
          },
          {
            "role": "user",
            "text": "English, Spanish, and Korean.",
            "translations": {
              "ko": "영어, 스페인어, 한국어가 있습니다.",
              "zh": "英语，西班牙语和韩语。",
              "ja": "英語、スペイン語、韓国語です。",
              "vi": "Tiếng Anh, Tiếng Tây Ban Nha và Tiếng Hàn.",
              "en": "English, Spanish, and Korean.",
            }
          },
          {
            "role": "ai",
            "text": "Do you have customer support?",
            "translations": {
              "ko": "고객 지원이 있나요?",
              "zh": "你们有客户支持吗？",
              "ja": "カスタマーサポートはありますか？",
              "vi": "Bạn có hỗ trợ khách hàng không?",
              "en": "Do you have customer support?",
            }
          },
          {
            "role": "user",
            "text": "Yes, 24/7 live chat.",
            "translations": {
              "ko": "네, 24/7 실시간 채팅 지원이 있습니다.",
              "zh": "是的，我们提供24/7的在线聊天支持。",
              "ja": "はい、24/7のライブチャットがあります。",
              "vi": "Vâng, hỗ trợ trực tiếp 24/7.",
              "en": "Yes, 24/7 live chat.",
            }
          },
          {
            "role": "ai",
            "text": "That’s great!",
            "translations": {
              "ko": "좋습니다!",
              "zh": "太好了！",
              "ja": "それは素晴らしいです！",
              "vi": "Tuyệt vời!",
              "en": "That’s great!",
            }
          },
          {
            "role": "user",
            "text": "We want to make it simple.",
            "translations": {
              "ko": "우리는 이것을 간단하게 만들고자 합니다.",
              "zh": "我们希望让它变得简单。",
              "ja": "私たちはそれをシンプルにしたいと思っています。",
              "vi": "Chúng tôi muốn làm cho mọi thứ đơn giản.",
              "en": "We want to make it simple.",
            }
          },
          {
            "role": "ai",
            "text": "Thanks for the answers.",
            "translations": {
              "ko": "답변해주셔서 감사합니다.",
              "zh": "谢谢你的回答。",
              "ja": "回答をいただきありがとうございます。",
              "vi": "Cảm ơn đã trả lời.",
              "en": "Thanks for the answers.",
            }
          },
          {
            "role": "user",
            "text": "My pleasure.",
            "translations": {
              "ko": "천만에요.",
              "zh": "我的荣幸。",
              "ja": "どういたしまして。",
              "vi": "Rất vui được giúp đỡ.",
              "en": "My pleasure.",
            }
          },
          {
            "role": "ai",
            "text": "Let’s continue!",
            "translations": {
              "ko": "계속하겠습니다!",
              "zh": "让我们继续！",
              "ja": "続けましょう！",
              "vi": "Hãy tiếp tục!",
              "en": "Let’s continue!",
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
              "en": "Okay.",
            }
          }
        ]
      },
      {
        "description": {
          "en": "Summarizing key points",
          "ko": "주요 포인트 요약",
          "zh": "总结关键点",
          "ja": "主要なポイントのまとめ",
          "vi": "Tóm tắt các điểm chính"
        },
        "dialogues": [
          {
            "role": "ai",
            "text": "Let’s quickly review what we covered.",
            "translations": {
              "ko": "우리가 다룬 내용을 간단히 복습해봅시다.",
              "zh": "让我们快速回顾一下我们讨论的内容。",
              "ja": "これまでに取り上げたことを簡単に見直しましょう。",
              "vi": "Hãy xem lại nhanh những gì chúng ta đã trải qua.",
              "en": "Let’s quickly review what we covered.",
            }
          },
          {
            "role": "user",
            "text": "Sounds good.",
            "translations": {
              "ko": "좋습니다.",
              "zh": "听起来不错。",
              "ja": "よろしいですね。",
              "vi": "Nghe có vẻ tốt.",
              "en": "Sounds good.",
            }
          },
          {
            "role": "ai",
            "text": "We talked about the product features.",
            "translations": {
              "ko": "제품 기능에 대해 이야기했습니다.",
              "zh": "我们谈论了产品的特性。",
              "ja": "製品の機能について話しました。",
              "vi": "Chúng tôi đã nói về các tính năng sản phẩm.",
              "en": "We talked about the product features.",
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
              "en": "Yes.",
            }
          },
          {
            "role": "ai",
            "text": "Then we saw a live demo.",
            "translations": {
              "ko": "그리고 실시간 데모를 봤습니다.",
              "zh": "然后我们看了一个现场演示。",
              "ja": "その後、ライブデモを見ました。",
              "vi": "Sau đó chúng ta đã xem một demo trực tiếp.",
              "en": "Then we saw a live demo.",
            }
          },
          {
            "role": "user",
            "text": "I liked that part.",
            "translations": {
              "ko": "그 부분이 좋았습니다.",
              "zh": "我喜欢那部分。",
              "ja": "その部分が気に入りました。",
              "vi": "Tôi thích phần đó.",
              "en": "I liked that part.",
            }
          },
          {
            "role": "ai",
            "text": "Next was pricing plans.",
            "translations": {
              "ko": "그 다음은 가격 플랜이었습니다.",
              "zh": "接下来是定价计划。",
              "ja": "次に価格プランについてでした。",
              "vi": "Tiếp theo là các gói giá cả.",
              "en": "Next was pricing plans.",
            }
          },
          {
            "role": "user",
            "text": "Right.",
            "translations": {
              "ko": "맞습니다.",
              "zh": "对。",
              "ja": "そうですね。",
              "vi": "Đúng.",
              "en": "Right.",
            }
          },
          {
            "role": "ai",
            "text": "We also answered some questions.",
            "translations": {
              "ko": "그리고 몇 가지 질문에 답했습니다.",
              "zh": "我们还回答了一些问题。",
              "ja": "そしていくつかの質問に答えました。",
              "vi": "Chúng tôi cũng đã trả lời một số câu hỏi.",
              "en": "We also answered some questions.",
            }
          },
          {
            "role": "user",
            "text": "Helpful.",
            "translations": {
              "ko": "도움이 되었습니다.",
              "zh": "有帮助。",
              "ja": "役立ちました。",
              "vi": "Hữu ích.",
              "en": "Helpful.",
            }
          },
          {
            "role": "ai",
            "text": "Everything is designed to save you time.",
            "translations": {
              "ko": "모든 것은 여러분의 시간을 절약하기 위해 설계되었습니다.",
              "zh": "一切都是为了帮助你节省时间。",
              "ja": "すべては時間を節約するために設計されています。",
              "vi": "Mọi thứ đều được thiết kế để tiết kiệm thời gian cho bạn.",
              "en": "Everything is designed to save you time.",
            }
          },
          {
            "role": "user",
            "text": "It shows.",
            "translations": {
              "ko": "그렇게 보입니다.",
              "zh": "这一点很明显。",
              "ja": "それが伝わります。",
              "vi": "Thấy rõ.",
              "en": "It shows.",
            }
          },
          {
            "role": "ai",
            "text": "We aim to keep things simple.",
            "translations": {
              "ko": "우리는 모든 것을 간단하게 유지하려고 합니다.",
              "zh": "我们的目标是让事情变得简单。",
              "ja": "物事をシンプルに保つことを目指しています。",
              "vi": "Chúng tôi nhắm đến việc giữ mọi thứ đơn giản.",
              "en": "We aim to keep things simple.",
            }
          },
          {
            "role": "user",
            "text": "I noticed that.",
            "translations": {
              "ko": "그것을 알아챘습니다.",
              "zh": "我注意到了。",
              "ja": "それがわかりました。",
              "vi": "Tôi nhận thấy điều đó.",
              "en": "I noticed that.",
            }
          },
          {
            "role": "ai",
            "text": "You can get started easily.",
            "translations": {
              "ko": "쉽게 시작할 수 있습니다.",
              "zh": "你可以很容易地开始使用。",
              "ja": "簡単に始めることができます。",
              "vi": "Bạn có thể bắt đầu dễ dàng.",
              "en": "You can get started easily.",
            }
          },
          {
            "role": "user",
            "text": "That’s nice.",
            "translations": {
              "ko": "좋습니다.",
              "zh": "这很好。",
              "ja": "それは良いですね。",
              "vi": "Thật tốt.",
              "en": "That’s nice.",
            }
          },
          {
            "role": "ai",
            "text": "And support is always available.",
            "translations": {
              "ko": "그리고 언제든지 지원을 받을 수 있습니다.",
              "zh": "并且我们始终提供支持。",
              "ja": "そして、サポートは常に利用可能です。",
              "vi": "Và hỗ trợ luôn sẵn sàng.",
              "en": "And support is always available.",
            }
          },
          {
            "role": "user",
            "text": "Good to know.",
            "translations": {
              "ko": "알겠습니다.",
              "zh": "很好知道。",
              "ja": "知っておくと良いですね。",
              "vi": "Tốt là biết.",
              "en": "Good to know.",
            }
          },
          {
            "role": "ai",
            "text": "That’s a quick summary.",
            "translations": {
              "ko": "이것이 간단한 요약입니다.",
              "zh": "这就是一个快速的总结。",
              "ja": "それが簡単なまとめです。",
              "vi": "Đó là một bản tóm tắt nhanh.",
              "en": "That’s a quick summary.",
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
              "en": "Thanks.",
            }
          }
        ]
      },
      {
        "description": {
          "en": "Handling technical issues politely",
          "ko": "기술적 문제를 예의 바르게 처리",
          "zh": "礼貌地处理技术问题",
          "ja": "テクニカルな問題を丁寧に対処する",
          "vi": "Xử lý vấn đề kỹ thuật một cách lịch sự"
        },
        "dialogues": [
          {
            "role": "ai",
            "text": "Sorry, the slides aren’t loading.",
            "translations": {
              "ko": "죄송합니다, 슬라이드가 로딩되지 않습니다.",
              "zh": "对不起，幻灯片没有加载出来。",
              "ja": "申し訳ありません、スライドが読み込まれません。",
              "vi": "Xin lỗi, các slide không tải được.",
              "en": "Sorry, the slides aren’t loading.",
            }
          },
          {
            "role": "user",
            "text": "No worries.",
            "translations": {
              "ko": "괜찮습니다.",
              "zh": "没关系。",
              "ja": "気にしないでください。",
              "vi": "Không sao.",
              "en": "No worries.",
            }
          },
          {
            "role": "ai",
            "text": "Let me try again.",
            "translations": {
              "ko": "다시 시도해보겠습니다.",
              "zh": "让我再试一次。",
              "ja": "もう一度試してみます。",
              "vi": "Hãy để tôi thử lại.",
              "en": "Let me try again.",
            }
          },
          {
            "role": "user",
            "text": "Take your time.",
            "translations": {
              "ko": "천천히 하세요.",
              "zh": "慢慢来。",
              "ja": "お時間を取ってください。",
              "vi": "Hãy thử.",
              "en": "Take your time.",
            }
          },
          {
            "role": "ai",
            "text": "We seem to have a small glitch.",
            "translations": {
              "ko": "작은 문제가 있는 것 같습니다.",
              "zh": "我们似乎遇到了一个小问题。",
              "ja": "小さなトラブルが発生しているようです。",
              "vi": "Chúng tôi dường như gặp một lỗi nhỏ.",
              "en": "We seem to have a small glitch.",
            }
          },
          {
            "role": "user",
            "text": "That happens.",
            "translations": {
              "ko": "그럴 수 있습니다.",
              "zh": "这种事情常有。",
              "ja": "それはありますね。",
              "vi": "Điều đó thường xảy ra.",
              "en": "That happens.",
            }
          },
          {
            "role": "ai",
            "text": "Thanks for your patience.",
            "translations": {
              "ko": "기다려주셔서 감사합니다.",
              "zh": "感谢你们的耐心。",
              "ja": "お待ちいただきありがとうございます。",
              "vi": "Cảm ơn sự kiên nhẫn của bạn.",
              "en": "Thanks for your patience.",
            }
          },
          {
            "role": "user",
            "text": "Of course.",
            "translations": {
              "ko": "당연히요.",
              "zh": "当然。",
              "ja": "もちろんです。",
              "vi": "Dĩ nhiên.",
              "en": "Of course.",
            }
          },
          {
            "role": "ai",
            "text": "I’ll continue without slides for now.",
            "translations": {
              "ko": "일단 슬라이드 없이 계속하겠습니다.",
              "zh": "我现在会在没有幻灯片的情况下继续。",
              "ja": "今のところスライドなしで続けます。",
              "vi": "Tôi sẽ tiếp tục mà không cần slide.",
              "en": "I’ll continue without slides for now.",
            }
          },
          {
            "role": "user",
            "text": "That’s fine.",
            "translations": {
              "ko": "괜찮습니다.",
              "zh": "没问题。",
              "ja": "それで大丈夫です。",
              "vi": "Không sao.",
              "en": "That’s fine.",
            }
          },
          {
            "role": "ai",
            "text": "You can follow along as I speak.",
            "translations": {
              "ko": "제 말을 따라가실 수 있습니다.",
              "zh": "你们可以跟着我说的内容理解。",
              "ja": "私が話す内容については、お聞きいただけます。",
              "vi": "Bạn có thể theo dõi khi tôi nói.",
              "en": "You can follow along as I speak.",
            }
          },
          {
            "role": "user",
            "text": "Got it.",
            "translations": {
              "ko": "알겠습니다.",
              "zh": "明白了。",
              "ja": "理解しました。",
              "vi": "Đã hiểu.",
              "en": "Got it.",
            }
          },
          {
            "role": "ai",
            "text": "The visuals will come back soon.",
            "translations": {
              "ko": "곧 시각 자료가 다시 나올 것입니다.",
              "zh": "视觉效果很快就会回来。",
              "ja": "ビジュアルはすぐに戻ります。",
              "vi": "Hình ảnh sẽ quay trở lại sớm.",
              "en": "The visuals will come back soon.",
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
              "en": "Okay.",
            }
          },
          {
            "role": "ai",
            "text": "I’ll send the slides after the session.",
            "translations": {
              "ko": "세션 후에 슬라이드를 보내드리겠습니다.",
              "zh": "会议结束后，我会发送幻灯片。",
              "ja": "セッション後にスライドを送ります。",
              "vi": "Tôi sẽ gửi các slide sau phiên họp.",
              "en": "I’ll send the slides after the session.",
            }
          },
          {
            "role": "user",
            "text": "That helps.",
            "translations": {
              "ko": "도움이 될 것 같습니다.",
              "zh": "那会有帮助。",
              "ja": "それは助けになります。",
              "vi": "Điều đó giúp đỡ.",
              "en": "That helps.",
            }
          },
          {
            "role": "ai",
            "text": "Again, sorry for the delay.",
            "translations": {
              "ko": "다시 한번, 지연에 대해 사과드립니다.",
              "zh": "再次为延误道歉。",
              "ja": "遅延について再度お詫び申し上げます。",
              "vi": "Một lần nữa, xin lỗi vì sự chậm trễ.",
              "en": "Again, sorry for the delay.",
            }
          },
          {
            "role": "user",
            "text": "It’s okay.",
            "translations": {
              "ko": "괜찮습니다.",
              "zh": "没关系。",
              "ja": "大丈夫です。",
              "vi": "Không sao.",
              "en": "It’s okay.",
            }
          },
          {
            "role": "ai",
            "text": "Let’s keep going!",
            "translations": {
              "ko": "계속하겠습니다!",
              "zh": "让我们继续吧！",
              "ja": "続けましょう！",
              "vi": "Hãy tiếp tục!",
              "en": "Let’s keep going!",
            }
          },
          {
            "role": "user",
            "text": "Yes, please.",
            "translations": {
              "ko": "네, 부탁드립니다.",
              "zh": "是的，请继续。",
              "ja": "はい、お願いします。",
              "vi": "Vâng, hãy làm đi.",
              "en": "Yes, please.",
            }
          }
        ]
      },
      {
        "description": {
          "en": "Ending the presentation",
          "ko": "프레젠테이션 마무리",
          "zh": "结束演讲",
          "ja": "プレゼンテーションの終了",
          "vi": "Kết thúc buổi thuyết trình"
        },
        "dialogues": [
          {
            "role": "ai",
            "text": "That brings us to the end.",
            "translations": {
              "ko": "이로써 마무리하겠습니다.",
              "zh": "这就是我们的结束。",
              "ja": "これで終わりになります。",
              "vi": "Điều đó đưa chúng ta đến cuối.",
              "en": "That brings us to the end.",
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
              "en": "Okay.",
            }
          },
          {
            "role": "ai",
            "text": "Thanks for your attention.",
            "translations": {
              "ko": "집중해주셔서 감사합니다.",
              "zh": "感谢你们的关注。",
              "ja": "ご注意いただきありがとうございました。",
              "vi": "Cảm ơn sự chú ý của bạn.",
              "en": "Thanks for your attention.",
            }
          },
          {
            "role": "user",
            "text": "Thanks for the talk.",
            "translations": {
              "ko": "강연해주셔서 감사합니다.",
              "zh": "感谢你的演讲。",
              "ja": "お話をいただきありがとうございます。",
              "vi": "Cảm ơn vì đã nói chuyện.",
              "en": "Thanks for the talk.",
            }
          },
          {
            "role": "ai",
            "text": "I hope it was helpful.",
            "translations": {
              "ko": "도움이 되었기를 바랍니다.",
              "zh": "我希望这对你们有所帮助。",
              "ja": "役立つと良いのですが。",
              "vi": "Tôi hy vọng nó đã hữu ích.",
              "en": "I hope it was helpful.",
            }
          },
          {
            "role": "user",
            "text": "It was.",
            "translations": {
              "ko": "도움이 되었습니다.",
              "zh": "是的，有帮助。",
              "ja": "役立ちました。",
              "vi": "Đúng vậy.",
              "en": "It was.",
            }
          },
          {
            "role": "ai",
            "text": "Feel free to reach out anytime.",
            "translations": {
              "ko": "언제든지 연락 주시면 됩니다.",
              "zh": "随时欢迎你们联系我们。",
              "ja": "何時でもお問い合わせください。",
              "vi": "Cứ tự do liên hệ bất cứ lúc nào.",
              "en": "Feel free to reach out anytime.",
            }
          },
          {
            "role": "user",
            "text": "Will do.",
            "translations": {
              "ko": "그렇게 하겠습니다.",
              "zh": "我会的。",
              "ja": "そうします。",
              "vi": "Sẽ làm.",
              "en": "Will do.",
            }
          },
          {
            "role": "ai",
            "text": "We’d love your feedback.",
            "translations": {
              "ko": "여러분의 피드백을 기다리겠습니다.",
              "zh": "我们很期待你们的反馈。",
              "ja": "ご意見をお聞かせいただければ幸いです。",
              "vi": "Chúng tôi rất mong nhận được phản hồi của bạn.",
              "en": "We’d love your feedback.",
            }
          },
          {
            "role": "user",
            "text": "I’ll share it.",
            "translations": {
              "ko": "제공하겠습니다.",
              "zh": "我会分享的。",
              "ja": "共有します。",
              "vi": "Tôi sẽ chia sẻ.",
              "en": "I’ll share it.",
            }
          },
          {
            "role": "ai",
            "text": "You’ll get an email follow-up.",
            "translations": {
              "ko": "이메일 후속 조치를 받게 될 것입니다.",
              "zh": "你们会收到一封后续邮件。",
              "ja": "フォローアップのメールをお送りします。",
              "vi": "Bạn sẽ nhận được email theo dõi.",
              "en": "You’ll get an email follow-up.",
            }
          },
          {
            "role": "user",
            "text": "Great.",
            "translations": {
              "ko": "좋습니다.",
              "zh": "很好。",
              "ja": "ありがたいです。",
              "vi": "Tốt.",
              "en": "Great.",
            }
          },
          {
            "role": "ai",
            "text": "Slides will be sent soon.",
            "translations": {
              "ko": "곧 슬라이드를 보내드리겠습니다.",
              "zh": "幻灯片很快就会发送。",
              "ja": "スライドはすぐに送られます。",
              "vi": "Slide sẽ được gửi sớm.",
              "en": "Slides will be sent soon.",
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
              "en": "Thanks.",
            }
          },
          {
            "role": "ai",
            "text": "Thanks again for joining.",
            "translations": {
              "ko": "다시 한번 참석해주셔서 감사드립니다.",
              "zh": "再次感谢你们的参与。",
              "ja": "参加していただき、再度ありがとうございます。",
              "vi": "Cảm ơn mọi người đã tham gia.",
              "en": "Thanks again for joining.",
            }
          },
          {
            "role": "user",
            "text": "My pleasure.",
            "translations": {
              "ko": "천만에요.",
              "zh": "我的荣幸。",
              "ja": "こちらこそ。",
              "vi": "Rất vui được giúp đỡ.",
              "en": "My pleasure.",
            }
          },
          {
            "role": "ai",
            "text": "Have a great day!",
            "translations": {
              "ko": "좋은 하루 보내세요!",
              "zh": "祝你们今天过得愉快！",
              "ja": "素晴らしい一日を！",
              "vi": "Chúc một ngày tốt lành!",
              "en": "Have a great day!",
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
              "en": "You too.",
            }
          },
          {
            "role": "ai",
            "text": "Bye for now!",
            "translations": {
              "ko": "이제 안녕히!",
              "zh": "再见！",
              "ja": "さようなら！",
              "vi": "Tạm biệt!",
              "en": "Bye for now!",
            }
          },
          {
            "role": "user",
            "text": "Bye!",
            "translations": {
              "ko": "안녕히!",
              "zh": "再见！",
              "ja": "さようなら！",
              "vi": "Tạm biệt!",
              "en": "Bye!",
            }
          }
        ]
      },
      {
        "description": {
          "en": "Thanking the audience and closing",
          "ko": "관객에게 감사하고 마무리",
          "zh": "感谢观众并结束",
          "ja": "聴衆に感謝し、閉会する",
          "vi": "Cảm ơn khán giả và kết thúc"
        },
        "dialogues": [
          {
            "role": "ai",
            "text": "Before we close, any final questions?",
            "translations": {
              "ko": "마무리하기 전에 마지막 질문이 있나요?",
              "zh": "在我们结束之前，有任何最后的问题吗？",
              "ja": "閉会する前に、最後の質問はありますか？",
              "vi": "Trước khi kết thúc, có câu hỏi cuối cùng nào không?",
              "en": "Before we close, any final questions?",
            }
          },
          {
            "role": "user",
            "text": "No, all good.",
            "translations": {
              "ko": "아니요, 다 괜찮습니다.",
              "zh": "没有，一切都好。",
              "ja": "いいえ、大丈夫です。",
              "vi": "Không, tất cả đều tốt.",
              "en": "No, all good.",
            }
          },
          {
            "role": "ai",
            "text": "Great. I appreciate your time.",
            "translations": {
              "ko": "좋습니다. 여러분의 시간을 내주셔서 감사합니다.",
              "zh": "太好了。我感谢你们的时间。",
              "ja": "お時間をいただき、ありがとうございました。",
              "vi": "Tuyệt. Tôi đánh giá cao thời gian của bạn.",
              "en": "Great. I appreciate your time.",
            }
          },
          {
            "role": "user",
            "text": "Thank you.",
            "translations": {
              "ko": "감사합니다.",
              "zh": "谢谢你。",
              "ja": "ありがとうございます。",
              "vi": "Cảm ơn.",
              "en": "Thank you.",
            }
          },
          {
            "role": "ai",
            "text": "We had great energy today.",
            "translations": {
              "ko": "오늘 에너지가 좋았습니다.",
              "zh": "今天我们的活力很好。",
              "ja": "今日は素晴らしいエネルギーがありました。",
              "vi": "Chúng ta đã có năng lượng tốt hôm nay.",
              "en": "We had great energy today.",
            }
          },
          {
            "role": "user",
            "text": "Yes, it was fun.",
            "translations": {
              "ko": "네, 재미있었습니다.",
              "zh": "是的，很有趣。",
              "ja": "はい、楽しかったです。",
              "vi": "Vâng, thật vui.",
              "en": "Yes, it was fun.",
            }
          },
          {
            "role": "ai",
            "text": "Your questions were thoughtful.",
            "translations": {
              "ko": "여러분의 질문이 통찰력 있었습니다.",
              "zh": "你们的问题都很有深度。",
              "ja": "あなたの質問は深く考えられていました。",
              "vi": "Các câu hỏi của bạn rất thấu đáo.",
              "en": "Your questions were thoughtful.",
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
              "en": "Thanks!",
            }
          },
          {
            "role": "ai",
            "text": "We’ll continue improving.",
            "translations": {
              "ko": "우리는 계속해서 개선할 것입니다.",
              "zh": "我们会继续改进的。",
              "ja": "私たちは改善を続けます。",
              "vi": "Chúng tôi sẽ tiếp tục cải thiện.",
              "en": "We’ll continue improving.",
            }
          },
          {
            "role": "user",
            "text": "Looking forward to updates.",
            "translations": {
              "ko": "업데이트를 기대하겠습니다.",
              "zh": "期待更新。",
              "ja": "アップデートを楽しみにしています。",
              "vi": "Mong đợi cập nhật.",
              "en": "Looking forward to updates.",
            }
          },
          {
            "role": "ai",
            "text": "Feel free to contact us anytime.",
            "translations": {
              "ko": "언제든지 연락 주시면 됩니다.",
              "zh": "随时欢迎你们联系我们。",
              "ja": "何時でもお問い合わせください。",
              "vi": "Cứ tự do liên hệ với chúng tôi bất cứ lúc nào.",
              "en": "Feel free to contact us anytime.",
            }
          },
          {
            "role": "user",
            "text": "Will do.",
            "translations": {
              "ko": "그렇게 하겠습니다.",
              "zh": "我会的。",
              "ja": "そうします。",
              "vi": "Sẽ làm.",
              "en": "Will do.",
            }
          },
          {
            "role": "ai",
            "text": "We’re always here to help.",
            "translations": {
              "ko": "우리는 항상 도와드릴 준비가 되어 있습니다.",
              "zh": "我们始终在这里帮助你们。",
              "ja": "私たちはいつでもお手伝いします。",
              "vi": "Chúng tôi luôn sẵn sàng giúp đỡ.",
              "en": "We’re always here to help.",
            }
          },
          {
            "role": "user",
            "text": "That’s good to know.",
            "translations": {
              "ko": "알겠습니다.",
              "zh": "这很好知道。",
              "ja": "それは知っておくと良いです。",
              "vi": "Thật tốt khi biết.",
              "en": "That’s good to know.",
            }
          },
          {
            "role": "ai",
            "text": "This concludes our session.",
            "translations": {
              "ko": "이로써 우리의 세션을 마칩니다.",
              "zh": "这就是我们的会议结束。",
              "ja": "これでセッションを終了します。",
              "vi": "Điều này kết thúc phiên họp của chúng tôi.",
              "en": "This concludes our session.",
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
              "en": "Thank you!",
            }
          },
          {
            "role": "ai",
            "text": "Have a wonderful day.",
            "translations": {
              "ko": "멋진 하루 보내세요.",
              "zh": "祝你们今天过得愉快。",
              "ja": "素晴らしい一日を。",
              "vi": "Chúc một ngày tuyệt vời.",
              "en": "Have a wonderful day.",
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
              "en": "You too.",
            }
          },
          {
            "role": "ai",
            "text": "See you next time!",
            "translations": {
              "ko": "다음에 뵙겠습니다!",
              "zh": "下次见！",
              "ja": "次回お会いしましょう！",
              "vi": "Hẹn gặp lại lần sau!",
              "en": "See you next time!",
            }
          },
          {
            "role": "user",
            "text": "See you!",
            "translations": {
              "ko": "다음에 뵙겠습니다!",
              "zh": "再见！",
              "ja": "またお会いしましょう！",
              "vi": "Hẹn gặp lại!",
              "en": "See you!",
            }
          }
        ]
      }
    ],
  "intermediate": [
    {
      "description": {
        "en": "Presenting a Product Overview",
        "ko": "제품 개요 발표하기",
        "zh": "进行产品概述演示",
        "ja": "商品概要のプレゼンテーションを行います",
        "vi": "Thuyết trình tổng quan về sản phẩm"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Thanks for joining today’s session.",
          "translations": {
            "ko": "오늘의 세션에 참석해주셔서 감사합니다.",
            "zh": "感谢您参加今天的会议。",
            "ja": "本日のセッションに参加いただきありがとうございます。",
            "vi": "Cảm ơn bạn đã tham gia phiên họp hôm nay."
          }
        },
        {
          "role": "user",
          "text": "Thanks for having us.",
          "translations": {
            "ko": "저희를 초대해주셔서 감사합니다.",
            "zh": "感谢您的接待。",
            "ja": "お招きいただきありがとうございます。",
            "vi": "Cảm ơn đã mời chúng tôi."
          }
        },
        {
          "role": "ai",
          "text": "I’m going to walk you through our latest product update.",
          "translations": {
            "ko": "저는 여러분에게 최신 제품 업데이트를 소개하겠습니다.",
            "zh": "我将向您介绍我们最新的产品更新。",
            "ja": "私たちの最新の製品アップデートについて説明します。",
            "vi": "Tôi sẽ giới thiệu cho bạn về bản cập nhật sản phẩm mới nhất của chúng tôi."
          }
        },
        {
          "role": "user",
          "text": "Looking forward to seeing what’s new.",
          "translations": {
            "ko": "새로운 것들을 기대하고 있습니다.",
            "zh": "期待看到新的内容。",
            "ja": "新しいものが何か楽しみにしています。",
            "vi": "Mong chờ xem những điều mới."
          }
        },
        {
          "role": "ai",
          "text": "We’ll begin with a quick overview of the main features.",
          "translations": {
            "ko": "주요 기능에 대한 간략한 개요부터 시작하겠습니다.",
            "zh": "我们将从主要特性的快速概述开始。",
            "ja": "主な機能の簡単な概要から始めます。",
            "vi": "Chúng tôi sẽ bắt đầu bằng một cái nhìn tổng quan nhanh về các tính năng chính."
          }
        },
        {
          "role": "user",
          "text": "Could you highlight what’s changed from the last version?",
          "translations": {
            "ko": "마지막 버전에서 어떤 부분이 바뀌었는지 강조해주실 수 있나요?",
            "zh": "你能突出说明与上一版本的变化吗？",
            "ja": "前のバージョンから何が変わったのかを強調していただけますか？",
            "vi": "Bạn có thể nêu bật những điểm thay đổi so với phiên bản trước không?"
          }
        },
        {
          "role": "ai",
          "text": "Next, I’ll show how they solve common customer pain points.",
          "translations": {
            "ko": "다음으로, 이들이 어떻게 고객의 공통적인 문제점을 해결하는지 보여드리겠습니다.",
            "zh": "接下来，我将展示它们如何解决常见的客户痛点。",
            "ja": "次に、それらが一般的な顧客の問題点をどのように解決するかを示します。",
            "vi": "Tiếp theo, tôi sẽ cho thấy cách chúng giải quyết các vấn đề thường gặp của khách hàng."
          }
        },
        {
          "role": "user",
          "text": "That sounds relevant to our current challenges.",
          "translations": {
            "ko": "그것은 우리의 현재의 도전과 관련이 있는 것 같습니다.",
            "zh": "这听起来与我们当前的挑战有关。",
            "ja": "それは我々の現在の課題に関連しているように聞こえます。",
            "vi": "Điều đó có liên quan đến những thách thức hiện tại của chúng tôi."
          }
        },
        {
          "role": "ai",
          "text": "We’ve redesigned the dashboard for easier navigation.",
          "translations": {
            "ko": "우리는 대시보드를 재디자인하여 탐색을 더 쉽게 했습니다.",
            "zh": "我们重新设计了仪表板以便于导航。",
            "ja": "ダッシュボードをリデザインして、ナビゲーションを容易にしました。",
            "vi": "Chúng tôi đã thiết kế lại bảng điều khiển để dễ dàng điều hướng hơn."
          }
        },
        {
          "role": "user",
          "text": "The new dashboard looks much cleaner.",
          "translations": {
            "ko": "새로운 대시보드는 훨씬 깔끔해 보입니다.",
            "zh": "新的仪表板看起来更清晰。",
            "ja": "新しいダッシュボードはずっとすっきりしています。",
            "vi": "Bảng điều khiển mới trông sạch sẽ hơn nhiều."
          }
        },
        {
          "role": "ai",
          "text": "The search function is now 50 percent faster.",
          "translations": {
            "ko": "검색 기능이 이제 50 퍼센트 더 빠릅니다.",
            "zh": "搜索功能现在快了50%。",
            "ja": "検索機能は今までより50パーセント速くなりました。",
            "vi": "Chức năng tìm kiếm giờ đây nhanh hơn 50 phần trăm."
          }
        },
        {
          "role": "user",
          "text": "Performance has definitely improved.",
          "translations": {
            "ko": "성능이 확실히 향상되었습니다.",
            "zh": "性能确实有所提升。",
            "ja": "パフォーマンスは確実に向上しました。",
            "vi": "Hiệu suất đã cải thiện rõ rệt."
          }
        },
        {
          "role": "ai",
          "text": "Let’s move on to a short demo video.",
          "translations": {
            "ko": "짧은 데모 비디오로 넘어가겠습니다.",
            "zh": "让我们看一段简短的演示视频。",
            "ja": "短いデモビデオに移りましょう。",
            "vi": "Hãy chuyển sang một đoạn video demo ngắn."
          }
        },
        {
          "role": "user",
          "text": "The demo was very helpful.",
          "translations": {
            "ko": "데모는 매우 도움이 되었습니다.",
            "zh": "演示非常有帮助。",
            "ja": "デモはとても役立ちました。",
            "vi": "Video demo rất hữu ích."
          }
        },
        {
          "role": "ai",
          "text": "After that, I’ll cover pricing and support options.",
          "translations": {
            "ko": "그 후에는 가격과 지원 옵션에 대해 다루겠습니다.",
            "zh": "之后，我将介绍价格和支持选项。",
            "ja": "その後、価格とサポートオプションについて説明します。",
            "vi": "Sau đó, tôi sẽ bàn về giá cả và các lựa chọn hỗ trợ."
          }
        },
        {
          "role": "user",
          "text": "What support channels do you offer?",
          "translations": {
            "ko": "어떤 지원 채널을 제공하나요?",
            "zh": "你们提供哪些支持渠道？",
            "ja": "どのようなサポートチャネルを提供していますか？",
            "vi": "Bạn cung cấp những kênh hỗ trợ nào?"
          }
        },
        {
          "role": "ai",
          "text": "We’ll finish with a Q&A session.",
          "translations": {
            "ko": "Q&A 세션으로 마무리하겠습니다.",
            "zh": "我们将以问答环节结束。",
            "ja": "Q&Aセッションで終わります。",
            "vi": "Chúng tôi sẽ kết thúc bằng một phiên hỏi đáp."
          }
        },
        {
          "role": "user",
          "text": "Great. We have a few questions afterward.",
          "translations": {
            "ko": "좋습니다. 그 후에 몇 가지 질문이 있습니다.",
            "zh": "很好。我们之后有一些问题。",
            "ja": "それは素晴らしいです。その後、いくつか質問があります。",
            "vi": "Tuyệt. Chúng tôi sẽ có một số câu hỏi sau đó."
          }
        },
        {
          "role": "ai",
          "text": "Feel free to ask questions at any time.",
          "translations": {
            "ko": "언제든지 질문해 주세요.",
            "zh": "随时提问。",
            "ja": "いつでも質問してください。",
            "vi": "Hãy tự do đặt câu hỏi bất cứ lúc nào."
          }
        },
        {
          "role": "user",
          "text": "Sure, I’ll raise mine during the Q&A.",
          "translations": {
            "ko": "네, Q&A에서 제 질문을 제기하겠습니다.",
            "zh": "好的，我会在问答环节提出我的问题。",
            "ja": "はい、Q&Aの間に私の質問をします。",
            "vi": "Chắc chắn, tôi sẽ đặt câu hỏi của mình trong phiên hỏi đáp."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Present team performance to management",
        "ko": "관리진에게 팀 성과 발표하기",
        "zh": "向管理层展示团队绩效",
        "ja": "チームのパフォーマンスを経営陣にプレゼンテーションする",
        "vi": "Trình bày hiệu suất của nhóm cho ban quản lý"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Today I’ll present a summary of our team’s Q2 performance.",
          "translations": {
            "ko": "오늘은 우리 팀의 Q2 성과 요약을 발표하겠습니다.",
            "zh": "今天我将展示我们团队第二季度的绩效总结。",
            "ja": "今日は、私たちのチームのQ2のパフォーマンスの概要をプレゼンテーションします。",
            "vi": "Hôm nay tôi sẽ trình bày một bản tóm tắt về hiệu suất của nhóm chúng tôi trong quý 2."
          }
        },
        {
          "role": "user",
          "text": "Thanks for the detailed summary.",
          "translations": {
            "ko": "자세한 요약에 감사드립니다.",
            "zh": "感谢你的详细总结。",
            "ja": "詳細なサマリーをありがとうございます。",
            "vi": "Cảm ơn vì bản tóm tắt chi tiết."
          }
        },
        {
          "role": "ai",
          "text": "We’ll begin with overall project completion rates.",
          "translations": {
            "ko": "전체 프로젝트 완료율부터 시작하겠습니다.",
            "zh": "我们将从整体项目完成率开始。",
            "ja": "全体的なプロジェクトの完了率から始めます。",
            "vi": "Chúng tôi sẽ bắt đầu với tỷ lệ hoàn thành dự án tổng thể."
          }
        },
        {
          "role": "user",
          "text": "That’s a strong completion rate.",
          "translations": {
            "ko": "완료율이 높아서 좋습니다.",
            "zh": "这是一个强大的完成率。",
            "ja": "それは強い完了率ですね。",
            "vi": "Đó là một tỷ lệ hoàn thành mạnh mẽ."
          }
        },
        {
          "role": "ai",
          "text": "Our team completed 95 percent of planned tasks on time.",
          "translations": {
            "ko": "우리 팀은 계획된 작업의 95퍼센트를 제시간에 완료했습니다.",
            "zh": "我们的团队按时完成了95%的计划任务。",
            "ja": "我々のチームは計画されたタスクの95パーセントを時間通りに完了しました。",
            "vi": "Nhóm của chúng tôi đã hoàn thành 95 phần trăm các nhiệm vụ đã lên kế hoạch đúng hạn."
          }
        },
        {
          "role": "user",
          "text": "Impressive improvement in satisfaction scores.",
          "translations": {
            "ko": "만족도 점수에서 눈에 띄는 개선이 있습니다.",
            "zh": "满意度得分的提升令人印象深刻。",
            "ja": "満足度スコアの向上が印象的です。",
            "vi": "Sự cải thiện ấn tượng trong điểm số hài lòng."
          }
        },
        {
          "role": "ai",
          "text": "Client satisfaction ratings also improved.",
          "translations": {
            "ko": "고객 만족도 평가도 개선되었습니다.",
            "zh": "客户满意度评级也有所提高。",
            "ja": "クライアントの満足度評価も改善しました。",
            "vi": "Đánh giá hài lòng của khách hàng cũng đã cải thiện."
          }
        },
        {
          "role": "user",
          "text": "Reducing resolution time helps a lot.",
          "translations": {
            "ko": "해결 시간을 줄이는 것이 많은 도움이 됩니다.",
            "zh": "减少解决时间对我们有很大帮助。",
            "ja": "解決時間を短縮することは大いに役立ちます。",
            "vi": "Việc giảm thời gian giải quyết giúp rất nhiều."
          }
        },
        {
          "role": "ai",
          "text": "We reduced ticket resolution time by 18 percent.",
          "translations": {
            "ko": "티켓 처리 시간을 18퍼센트 줄였습니다.",
            "zh": "我们将工单解决时间缩短了18%。",
            "ja": "チケット解決時間を18パーセント短縮しました。",
            "vi": "Chúng tôi đã giảm thời gian giải quyết vé xuống 18 phần trăm."
          }
        },
        {
          "role": "user",
          "text": "Good to hear engagement is trending up.",
          "translations": {
            "ko": "참여율이 상승하는 것을 듣게 되어 좋습니다.",
            "zh": "很高兴听到参与度正在上升。",
            "ja": "エンゲージメントが上昇傾向にあると聞いて良かったです。",
            "vi": "Rất vui khi nghe thấy mức độ tham gia đang tăng lên."
          }
        },
        {
          "role": "ai",
          "text": "Employee engagement rose based on our last survey.",
          "translations": {
            "ko": "최근 설문조사에 따르면 직원 참여도가 상승했습니다.",
            "zh": "根据我们最近的调查，员工参与度有所提高。",
            "ja": "最後の調査に基づき、従業員のエンゲージメントが上昇しました。",
            "vi": "Mức độ tham gia của nhân viên đã tăng dựa trên cuộc khảo sát cuối cùng của chúng tôi."
          }
        },
        {
          "role": "user",
          "text": "What were the biggest onboarding challenges?",
          "translations": {
            "ko": "가장 큰 온보딩 문제점은 무엇이었나요?",
            "zh": "最大的入职挑战是什么？",
            "ja": "最も大きなオンボーディングの課題は何でしたか？",
            "vi": "Những thách thức lớn nhất trong quá trình hướng dẫn là gì?"
          }
        },
        {
          "role": "ai",
          "text": "There were a few challenges in onboarding new hires.",
          "translations": {
            "ko": "새로운 직원들을 온보딩하는데 몇 가지 문제점이 있었습니다.",
            "zh": "在新员工入职过程中遇到了一些挑战。",
            "ja": "新入社員のオンボーディングにはいくつかの課題がありました。",
            "vi": "Có một số thách thức trong việc đào tạo nhân viên mới."
          }
        },
        {
          "role": "user",
          "text": "Mentorship sounds like a smart solution.",
          "translations": {
            "ko": "멘토십은 똑똑한 해결책으로 보입니다.",
            "zh": "导师制度听起来是一个明智的解决方案。",
            "ja": "メンターシップは賢明な解決策のようです。",
            "vi": "Chương trình hướng dẫn nghe có vẻ như là một giải pháp thông minh."
          }
        },
        {
          "role": "ai",
          "text": "We’ve implemented a mentorship program to address that.",
          "translations": {
            "ko": "그 문제를 해결하기 위해 멘토십 프로그램을 도입했습니다.",
            "zh": "我们已经实施了导师制度来解决这个问题。",
            "ja": "その問題を解決するために、メンターシッププログラムを導入しました。",
            "vi": "Chúng tôi đã triển khai một chương trình hướng dẫn để giải quyết vấn đề đó."
          }
        },
        {
          "role": "user",
          "text": "Cross-training could increase flexibility.",
          "translations": {
            "ko": "크로스 트레이닝은 유연성을 높일 수 있습니다.",
            "zh": "交叉培训可能会增加灵活性。",
            "ja": "クロストレーニングは柔軟性を高める可能性があります。",
            "vi": "Đào tạo đa năng có thể tăng cường linh hoạt."
          }
        },
        {
          "role": "ai",
          "text": "Next quarter, we’ll focus on cross-training and automation.",
          "translations": {
            "ko": "다음 분기에는 크로스 트레이닝과 자동화에 집중할 예정입니다.",
            "zh": "下个季度，我们将专注于交叉培训和自动化。",
            "ja": "次の四半期は、クロストレーニングと自動化に焦点を当てます。",
            "vi": "Quý tiếp theo, chúng tôi sẽ tập trung vào đào tạo đa năng và tự động hóa."
          }
        },
        {
          "role": "user",
          "text": "Automation would help scale operations.",
          "translations": {
            "ko": "자동화는 운영을 확장하는데 도움이 될 것입니다.",
            "zh": "自动化将有助于扩大运营规模。",
            "ja": "自動化は業務の拡大を支援するでしょう。",
            "vi": "Tự động hóa sẽ giúp mở rộng hoạt động."
          }
        },
        {
          "role": "ai",
          "text": "Thanks for your attention. Open to feedback now.",
          "translations": {
            "ko": "주의를 기울여 주셔서 감사합니다. 지금부터 피드백을 받겠습니다.",
            "zh": "感谢您的关注。现在欢迎提供反馈。",
            "ja": "ご注意いただきありがとうございます。今からフィードバックをお待ちしています。",
            "vi": "Cảm ơn sự chú ý của bạn. Mở cửa phản hồi ngay bây giờ."
          }
        },
        {
          "role": "user",
          "text": "No further comments. Well done.",
          "translations": {
            "ko": "더 이상의 의견은 없습니다. 잘 했습니다.",
            "zh": "没有其他评论。做得好。",
            "ja": "これ以上のコメントはありません。よくやりました。",
            "vi": "Không có thêm bình luận. Làm tốt lắm."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Propose a new marketing campaign",
        "ko": "새로운 마케팅 캠페인 제안",
        "zh": "提出新的营销活动方案",
        "ja": "新しいマーケティングキャンペーンの提案",
        "vi": "Đưa ra một chiến dịch tiếp thị mới"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Thanks for being here. I’m excited to share our campaign proposal.",
          "translations": {
            "ko": "참석해 주셔서 감사합니다. 캠페인 제안을 공유하는 것이 기쁩니다.",
            "zh": "感谢您的到来。我很高兴能分享我们的活动提案。",
            "ja": "ここにいてくれてありがとう。私たちのキャンペーン提案を共有するのが楽しみです。",
            "vi": "Cảm ơn vì đã đến đây. Tôi rất hào hứng để chia sẻ đề xuất chiến dịch của chúng tôi."
          }
        },
        {
          "role": "user",
          "text": "Thanks for putting this together.",
          "translations": {
            "ko": "이것을 준비해 주셔서 감사합니다.",
            "zh": "感谢您的整理。",
            "ja": "これをまとめてくれてありがとう。",
            "vi": "Cảm ơn vì đã chuẩn bị điều này."
          }
        },
        {
          "role": "ai",
          "text": "The goal is to increase brand awareness in Q3.",
          "translations": {
            "ko": "목표는 3분기에 브랜드 인지도를 높이는 것입니다.",
            "zh": "我们的目标是在第三季度提高品牌知名度。",
            "ja": "Q3でブランド認知度を上げることが目標です。",
            "vi": "Mục tiêu là tăng cường nhận biết thương hiệu trong Q3."
          }
        },
        {
          "role": "user",
          "text": "Clear focus on brand growth is great to see.",
          "translations": {
            "ko": "브랜드 성장에 대한 명확한 초점이 좋아 보입니다.",
            "zh": "明确关注品牌增长很好。",
            "ja": "ブランド成長に明確な焦点を当てるのは素晴らしいことです。",
            "vi": "Tập trung rõ ràng vào sự phát triển thương hiệu thật tuyệt vời."
          }
        },
        {
          "role": "ai",
          "text": "We’re focusing on short-form video and influencer outreach.",
          "translations": {
            "ko": "우리는 짧은 형식의 비디오와 인플루언서 접근에 초점을 맞추고 있습니다.",
            "zh": "我们正专注于短视频和影响者推广。",
            "ja": "私たちはショートフォームのビデオとインフルエンサーへのアウトリーチに焦点を当てています。",
            "vi": "Chúng tôi đang tập trung vào video ngắn và tiếp cận người ảnh hưởng."
          }
        },
        {
          "role": "user",
          "text": "Short-form content sounds like a smart move.",
          "translations": {
            "ko": "짧은 형식의 콘텐츠는 똑똑한 선택으로 보입니다.",
            "zh": "短内容听起来是一个明智的举动。",
            "ja": "ショートフォームのコンテンツは賢明な選択のようです。",
            "vi": "Nội dung ngắn nghe có vẻ như là một bước đi thông minh."
          }
        },
        {
          "role": "ai",
          "text": "Our target audience is working professionals in their 30s.",
          "translations": {
            "ko": "우리의 타겟 오디언스는 30대 직장인입니다.",
            "zh": "我们的目标受众是30多岁的职业人士。",
            "ja": "我々のターゲットオーディエンスは30代の労働者です。",
            "vi": "Đối tượng mục tiêu của chúng tôi là những người làm việc chuyên nghiệp ở độ tuổi 30."
          }
        },
        {
          "role": "user",
          "text": "The audience targeting makes sense.",
          "translations": {
            "ko": "오디언스 타겟팅이 합리적으로 보입니다.",
            "zh": "受众定位很合理。",
            "ja": "オーディエンスのターゲティングは理にかなっています。",
            "vi": "Việc nhắm mục tiêu khán giả có lý."
          }
        },
        {
          "role": "ai",
          "text": "We’ll run A/B testing on messaging to see what converts best.",
          "translations": {
            "ko": "메시지가 어떤 것이 가장 잘 전환되는지 보기 위해 A/B 테스팅을 진행할 예정입니다.",
            "zh": "我们将对消息进行A/B测试，以查看哪种效果最好。",
            "ja": "メッセージングに対するA/Bテストを実施して、何が最も変換されるかを確認します。",
            "vi": "Chúng tôi sẽ thực hiện thử nghiệm A/B trên thông điệp để xem cái nào chuyển đổi tốt nhất."
          }
        },
        {
          "role": "user",
          "text": "How many variations are we testing?",
          "translations": {
            "ko": "얼마나 많은 변형을 테스트하나요?",
            "zh": "我们要测试多少种变体？",
            "ja": "何種類のバリエーションをテストしますか？",
            "vi": "Chúng tôi đang thử nghiệm bao nhiêu biến thể?"
          }
        },
        {
          "role": "ai",
          "text": "The campaign will run for eight weeks, starting mid-July.",
          "translations": {
            "ko": "캠페인은 7월 중순부터 8주 동안 진행될 예정입니다.",
            "zh": "活动将从7月中旬开始，持续八周。",
            "ja": "キャンペーンは7月中旬から8週間実施されます。",
            "vi": "Chiến dịch sẽ diễn ra trong tám tuần, bắt đầu từ giữa tháng 7."
          }
        },
        {
          "role": "user",
          "text": "Is the start date flexible if needed?",
          "translations": {
            "ko": "필요한 경우 시작 날짜를 조정할 수 있나요?",
            "zh": "如果需要，开始日期是否可以灵活调整？",
            "ja": "必要に応じて開始日は柔軟に調整可能ですか？",
            "vi": "Ngày bắt đầu có thể linh hoạt nếu cần thiết không?"
          }
        },
        {
          "role": "ai",
          "text": "We’ve allocated 40 percent of the budget to paid media.",
          "translations": {
            "ko": "예산의 40퍼센트를 유료 미디어에 할당했습니다.",
            "zh": "我们已经将40%的预算分配给了付费媒体。",
            "ja": "予算の40パーセントを有料メディアに割り当てました。",
            "vi": "Chúng tôi đã phân bổ 40 phần trăm ngân sách cho truyền thông trả phí."
          }
        },
        {
          "role": "user",
          "text": "That seems like a reasonable media split.",
          "translations": {
            "ko": "그것은 합리적인 미디어 분배로 보입니다.",
            "zh": "这似乎是一个合理的媒体分配。",
            "ja": "それは妥当なメディア分割のようです。",
            "vi": "Đó có vẻ như là một cách chia truyền thông hợp lý."
          }
        },
        {
          "role": "ai",
          "text": "Creative assets are in progress and on track for delivery.",
          "translations": {
            "ko": "창의적인 자산들이 진행 중이며, 납기에 맞춰 제공될 예정입니다.",
            "zh": "创意资产正在进行中，并按计划交付。",
            "ja": "クリエイティブな資産は進行中で、納品予定通りです。",
            "vi": "Tài sản sáng tạo đang được tiến hành và đúng hướng để giao hàng."
          }
        },
        {
          "role": "user",
          "text": "Great. Keep us updated on asset progress.",
          "translations": {
            "ko": "좋습니다. 자산 진행 상황에 대해 계속 업데이트 해주세요.",
            "zh": "很好。请继续向我们更新资产进度。",
            "ja": "素晴らしい。資産の進捗状況を更新してください。",
            "vi": "Tuyệt. Hãy cập nhật cho chúng tôi về tiến độ tài sản."
          }
        },
        {
          "role": "ai",
          "text": "We’re aiming for a 15 percent lift in engagement.",
          "translations": {
            "ko": "우리는 참여도를 15퍼센트 높이는 것을 목표로 하고 있습니다.",
            "zh": "我们的目标是提高15%的参与度。",
            "ja": "エンゲージメントを15パーセント向上させることを目指しています。",
            "vi": "Chúng tôi đang nhắm đến một sự tăng trưởng 15 phần trăm trong sự tham gia."
          }
        },
        {
          "role": "user",
          "text": "15 percent lift would be solid.",
          "translations": {
            "ko": "15 퍼센트 상승은 확실한 결과입니다.",
            "zh": "15%的增长将是稳健的。",
            "ja": "15パーセントの増加は堅実です。",
            "vi": "Tăng 15 phần trăm sẽ là một kết quả tốt."
          }
        },
        {
          "role": "ai",
          "text": "Let’s walk through the projected ROI next.",
          "translations": {
            "ko": "다음으로 예상 ROI를 살펴봅시다.",
            "zh": "接下来，我们来讨论预计的投资回报率。",
            "ja": "次に、予想されるROIを見ていきましょう。",
            "vi": "Hãy cùng xem qua lợi nhuận đầu tư dự kiến tiếp theo."
          }
        },
        {
          "role": "user",
          "text": "Looking forward to the ROI breakdown.",
          "translations": {
            "ko": "ROI 분석을 기대하고 있습니다.",
            "zh": "期待投资回报率的详细分析。",
            "ja": "ROIの詳細を楽しみにしています。",
            "vi": "Mong chờ xem bảng phân tích lợi nhuận đầu tư."
          }
        }
      ]
    },
    {
      "description": {
        "en": "to explain the product launch plan",
        "ko": "제품 출시 계획을 설명하다",
        "zh": "制定产品发布计划。",
        "ja": "製品のローンチ計画を概説します。",
        "vi": "Đang lên kế hoạch cho việc ra mắt sản phẩm."
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Let’s go over the timeline for the upcoming product launch.",
          "translations": {
            "ko": "다가오는 제품 출시의 타임라인을 살펴봅시다.",
            "zh": "让我们回顾一下即将发布的产品的时间表。",
            "ja": "これからの製品ローンチのタイムラインを確認しましょう。",
            "vi": "Hãy cùng xem qua lịch trình cho việc ra mắt sản phẩm sắp tới."
          }
        },
        {
          "role": "user",
          "text": "Thanks for the clear launch plan.",
          "translations": {
            "ko": "명확한 출시 계획에 감사드립니다.",
            "zh": "感谢你清晰的发布计划。",
            "ja": "ローンチ計画が明確でありがとございます。",
            "vi": "Cảm ơn bạn đã lên kế hoạch ra mắt sản phẩm rõ ràng."
          }
        },
        {
          "role": "ai",
          "text": "We’re currently in the beta testing phase.",
          "translations": {
            "ko": "현재 베타 테스팅 단계에 있습니다.",
            "zh": "我们目前处于测试版阶段。",
            "ja": "現在、ベータテストの段階にあります。",
            "vi": "Hiện tại, chúng tôi đang trong giai đoạn thử nghiệm beta."
          }
        },
        {
          "role": "user",
          "text": "Beta results have been encouraging.",
          "translations": {
            "ko": "베타 결과는 희망적입니다.",
            "zh": "测试版的结果令人鼓舞。",
            "ja": "ベータの結果は前向きです。",
            "vi": "Kết quả từ phiên bản beta đã khá khả quan."
          }
        },
        {
          "role": "ai",
          "text": "Public release is planned for the second week of next month.",
          "translations": {
            "ko": "공개 출시는 다음 달의 두 번째 주에 계획되어 있습니다.",
            "zh": "计划在下个月的第二周进行公开发布。",
            "ja": "公開リリースは来月の第2週に予定しています。",
            "vi": "Dự kiến sẽ phát hành công khai vào tuần thứ hai của tháng tới."
          }
        },
        {
          "role": "user",
          "text": "Second week sounds doable if nothing slips.",
          "translations": {
            "ko": "무슨 일이 없다면 두 번째 주가 가능해 보입니다.",
            "zh": "如果没有出现滑块，第二周听起来是可行的。",
            "ja": "何も滑らなければ、第2週は可能そうです。",
            "vi": "Tuần thứ hai có thể thực hiện được nếu không có gì thay đổi."
          }
        },
        {
          "role": "ai",
          "text": "We’ll start by targeting our newsletter subscribers.",
          "translations": {
            "ko": "뉴스레터 구독자를 대상으로 시작하겠습니다.",
            "zh": "我们将首先针对我们的电子报订阅者。",
            "ja": "ニュースレターの購読者をターゲットに始めます。",
            "vi": "Chúng tôi sẽ bắt đầu bằng việc nhắm vào những người đăng ký nhận bản tin của chúng tôi."
          }
        },
        {
          "role": "user",
          "text": "Newsletter audience is a great starting point.",
          "translations": {
            "ko": "뉴스레터 관객은 좋은 시작점입니다.",
            "zh": "电子报的受众是一个很好的起点。",
            "ja": "ニュースレターの読者は、良いスタート地点です。",
            "vi": "Đối tượng nhận bản tin là một điểm khởi đầu tốt."
          }
        },
        {
          "role": "ai",
          "text": "Then we’ll scale to paid ads and press outreach.",
          "translations": {
            "ko": "그런 다음 유료 광고와 언론 홍보로 확장하겠습니다.",
            "zh": "然后我们将扩大到付费广告和新闻媒体接触。",
            "ja": "次に、有料広告とプレスアウトリーチに拡大します。",
            "vi": "Sau đó, chúng tôi sẽ mở rộng lên quảng cáo trả phí và tiếp cận báo chí."
          }
        },
        {
          "role": "user",
          "text": "What’s the budget for press outreach?",
          "translations": {
            "ko": "언론 홍보에 대한 예산은 얼마인가요?",
            "zh": "新闻媒体接触的预算是多少？",
            "ja": "プレスアウトリーチの予算はいくらですか？",
            "vi": "Ngân sách cho việc tiếp cận báo chí là bao nhiêu?"
          }
        },
        {
          "role": "ai",
          "text": "Support documentation is being finalized this week.",
          "translations": {
            "ko": "지원 문서는 이번 주에 마무리됩니다.",
            "zh": "支持文档将在本周完成。",
            "ja": "サポートドキュメントは今週中に最終化されます。",
            "vi": "Tài liệu hỗ trợ đang được hoàn thiện trong tuần này."
          }
        },
        {
          "role": "user",
          "text": "Will the docs be translated for international users?",
          "translations": {
            "ko": "국제 사용자를 위해 문서가 번역될 예정인가요?",
            "zh": "文档会为国际用户翻译吗？",
            "ja": "ドキュメントは国際ユーザー向けに翻訳されますか？",
            "vi": "Các tài liệu sẽ được dịch cho người dùng quốc tế chứ?"
          }
        },
        {
          "role": "ai",
          "text": "We’ve also built a product walkthrough video.",
          "translations": {
            "ko": "우리는 또한 제품 소개 비디오를 제작했습니다.",
            "zh": "我们还制作了一个产品演示视频。",
            "ja": "製品のウォークスルービデオも作成しました。",
            "vi": "Chúng tôi cũng đã tạo ra một video hướng dẫn sử dụng sản phẩm."
          }
        },
        {
          "role": "user",
          "text": "I’d love to preview the walkthrough video.",
          "translations": {
            "ko": "소개 비디오를 미리 보고 싶습니다.",
            "zh": "我很想预览这个演示视频。",
            "ja": "ウォークスルービデオのプレビューを見てみたいです。",
            "vi": "Tôi muốn xem trước video hướng dẫn."
          }
        },
        {
          "role": "ai",
          "text": "Training for internal teams begins next Monday.",
          "translations": {
            "ko": "내부 팀을 위한 교육이 다음 주 월요일에 시작됩니다.",
            "zh": "下周一开始对内部团队进行培训。",
            "ja": "内部チームのトレーニングは来週の月曜日から始まります。",
            "vi": "Việc đào tạo cho các đội nhóm nội bộ sẽ bắt đầu vào thứ Hai tuần tới."
          }
        },
        {
          "role": "user",
          "text": "Let us know if help is needed with training.",
          "translations": {
            "ko": "교육에 도움이 필요하다면 알려주세요.",
            "zh": "如果需要帮助进行培训，请告诉我们。",
            "ja": "トレーニングに必要な支援があればお知らせください。",
            "vi": "Hãy cho chúng tôi biết nếu bạn cần sự hỗ trợ trong việc đào tạo."
          }
        },
        {
          "role": "ai",
          "text": "Our main KPI is user activation within the first week.",
          "translations": {
            "ko": "주요 KPI는 첫 주 내의 사용자 활성화입니다.",
            "zh": "我们的主要关键绩效指标是用户在第一周内的激活率。",
            "ja": "主なKPIは、初週のユーザー活動です。",
            "vi": "Chỉ số KPI chính của chúng tôi là việc kích hoạt người dùng trong tuần đầu tiên."
          }
        },
        {
          "role": "user",
          "text": "Activation rate is a good primary metric.",
          "translations": {
            "ko": "활성화율은 좋은 주요 지표입니다.",
            "zh": "激活率是一个很好的主要指标。",
            "ja": "活動率は良い主要指標です。",
            "vi": "Tỉ lệ kích hoạt là một chỉ số chính tốt."
          }
        },
        {
          "role": "ai",
          "text": "We’re optimistic based on early feedback.",
          "translations": {
            "ko": "초기 피드백을 기반으로 낙관적입니다.",
            "zh": "根据早期反馈，我们对此持乐观态度。",
            "ja": "初期のフィードバックに基づいて、私たちは楽観的です。",
            "vi": "Chúng tôi đang lạc quan dựa trên phản hồi sớm."
          }
        },
        {
          "role": "user",
          "text": "Looking forward to launch day.",
          "translations": {
            "ko": "출시일을 기대하고 있습니다.",
            "zh": "期待发布日的到来。",
            "ja": "ローンチの日を楽しみにしています。",
            "vi": "Mong chờ ngày ra mắt."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Software Transfer Proposal",
        "ko": "소프트웨어 이전 제안",
        "zh": "提议进行软件迁移。",
        "ja": "ソフトウェアの移行を提案します。",
        "vi": "Đề xuất việc di chuyển phần mềm."
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Today I’ll present a case for migrating to a new CRM.",
          "translations": {
            "ko": "오늘은 새로운 CRM으로 이전하는 경우를 제시하겠습니다.",
            "zh": "今天我将为迁移到新的客户关系管理系统提出理由。",
            "ja": "今日は新しいCRMへの移行のケースをプレゼンテーションします。",
            "vi": "Hôm nay tôi sẽ trình bày một trường hợp cho việc chuyển sang một CRM mới."
          }
        },
        {
          "role": "user",
          "text": "Appreciate the thorough analysis.",
          "translations": {
            "ko": "철저한 분석에 감사드립니다.",
            "zh": "感谢你的详尽分析。",
            "ja": "徹底的な分析に感謝します。",
            "vi": "Cảm ơn bạn đã phân tích kỹ lưỡng."
          }
        },
        {
          "role": "ai",
          "text": "Our current system has become slow and difficult to scale.",
          "translations": {
            "ko": "현재 시스템이 느려지고 확장하기 어렵게 되었습니다.",
            "zh": "我们当前的系统变得缓慢且难以扩展。",
            "ja": "現在のシステムは遅く、スケールアップが難しいです。",
            "vi": "Hệ thống hiện tại của chúng tôi đã trở nên chậm và khó mở rộng."
          }
        },
        {
          "role": "user",
          "text": "Scalability is definitely a concern for us.",
          "translations": {
            "ko": "확장성은 확실히 우리에게 문제입니다.",
            "zh": "可扩展性确实是我们关注的问题。",
            "ja": "スケーラビリティは確かに私たちにとって懸念事項です。",
            "vi": "Khả năng mở rộng chắc chắn là một vấn đề đáng quan tâm cho chúng tôi."
          }
        },
        {
          "role": "ai",
          "text": "The proposed solution offers better integration options.",
          "translations": {
            "ko": "제안된 솔루션은 더 나은 통합 옵션을 제공합니다.",
            "zh": "提议的解决方案提供了更好的集成选项。",
            "ja": "提案されたソリューションは、より良い統合オプションを提供します。",
            "vi": "Giải pháp đề xuất cung cấp các tùy chọn tích hợp tốt hơn."
          }
        },
        {
          "role": "user",
          "text": "Which integrations are most critical?",
          "translations": {
            "ko": "어떤 통합이 가장 중요한가요?",
            "zh": "哪些集成最为关键？",
            "ja": "どの統合が最も重要ですか？",
            "vi": "Những tích hợp nào là quan trọng nhất?"
          }
        },
        {
          "role": "ai",
          "text": "We’ve run a cost-benefit analysis comparing platforms.",
          "translations": {
            "ko": "우리는 플랫폼 간의 비용-효익 분석을 진행했습니다.",
            "zh": "我们进行了一个成本效益分析，比较了各个平台。",
            "ja": "プラットフォームを比較するコストベネフィット分析を行いました。",
            "vi": "Chúng tôi đã tiến hành phân tích chi phí-lợi ích để so sánh các nền tảng."
          }
        },
        {
          "role": "user",
          "text": "Did you test the new platform with real data?",
          "translations": {
            "ko": "실제 데이터를 사용하여 새로운 플랫폼을 테스트해 보셨나요?",
            "zh": "你有没有用真实数据测试新平台？",
            "ja": "実際のデータで新しいプラットフォームをテストしましたか？",
            "vi": "Bạn đã kiểm tra nền tảng mới với dữ liệu thực tế chưa?"
          }
        },
        {
          "role": "ai",
          "text": "The transition can be completed within six weeks.",
          "translations": {
            "ko": "전환 작업은 6주 내에 완료될 수 있습니다.",
            "zh": "过渡期可以在六周内完成。",
            "ja": "移行は6週間以内に完了できます。",
            "vi": "Quá trình chuyển đổi có thể hoàn thành trong vòng sáu tuần."
          }
        },
        {
          "role": "user",
          "text": "Six weeks sounds reasonable.",
          "translations": {
            "ko": "6주는 합리적인 시간으로 보입니다.",
            "zh": "六周听起来合理。",
            "ja": "6週間は妥当な期間だと思います。",
            "vi": "Sáu tuần nghe có vẻ hợp lý."
          }
        },
        {
          "role": "ai",
          "text": "Training materials are included with the subscription.",
          "translations": {
            "ko": "교육 자료는 구독과 함께 제공됩니다.",
            "zh": "订阅包含培训资料。",
            "ja": "訓練資料はサブスクリプションに含まれています。",
            "vi": "Tài liệu đào tạo được bao gồm trong gói đăng ký."
          }
        },
        {
          "role": "user",
          "text": "Training access will help speed up onboarding.",
          "translations": {
            "ko": "교육 접근성이 온보딩을 가속화하는 데 도움이 될 것입니다.",
            "zh": "培训权限将有助于加快新员工入职速度。",
            "ja": "トレーニングへのアクセスはオンボーディングをスピードアップするのに役立ちます。",
            "vi": "Quyền truy cập đào tạo sẽ giúp tăng tốc quá trình đào tạo mới."
          }
        },
        {
          "role": "ai",
          "text": "Migration support is available through the vendor.",
          "translations": {
            "ko": "이전 지원은 공급업체를 통해 이용 가능합니다.",
            "zh": "供应商提供迁移支持。",
            "ja": "ベンダーを通じて移行サポートが利用可能です。",
            "vi": "Hỗ trợ di chuyển dữ liệu có sẵn thông qua nhà cung cấp."
          }
        },
        {
          "role": "user",
          "text": "Vendor support gives us confidence.",
          "translations": {
            "ko": "공급업체의 지원이 우리에게 자신감을 줍니다.",
            "zh": "供应商的支持让我们有信心。",
            "ja": "ベンダーサポートは私たちに自信を与えてくれます。",
            "vi": "Sự hỗ trợ từ nhà cung cấp giúp chúng tôi tự tin hơn."
          }
        },
        {
          "role": "ai",
          "text": "We expect improved efficiency and data accuracy.",
          "translations": {
            "ko": "우리는 효율성과 데이터 정확성의 향상을 기대합니다.",
            "zh": "我们期望提高效率和数据准确性。",
            "ja": "効率とデータ精度の向上を期待しています。",
            "vi": "Chúng tôi mong đợi hiệu quả và độ chính xác của dữ liệu sẽ được cải thiện."
          }
        },
        {
          "role": "user",
          "text": "Improved accuracy would be a big win.",
          "translations": {
            "ko": "정확성의 향상은 큰 이익이 될 것입니다.",
            "zh": "提高准确性将是一个大胜利。",
            "ja": "精度の向上は大きな勝利となるでしょう。",
            "vi": "Việc cải thiện độ chính xác sẽ là một thành công lớn."
          }
        },
        {
          "role": "ai",
          "text": "Risks include downtime and adoption hurdles.",
          "translations": {
            "ko": "위험 요소로는 다운타임과 적용 장벽이 있습니다.",
            "zh": "风险包括停机时间和采用障碍。",
            "ja": "リスクにはダウンタイムと採用の障壁が含まれます。",
            "vi": "Rủi ro bao gồm thời gian ngừng hoạt động và các rào cản về việc tiếp nhận."
          }
        },
        {
          "role": "user",
          "text": "How do we plan to handle internal resistance?",
          "translations": {
            "ko": "내부 저항을 어떻게 처리할 계획인가요?",
            "zh": "我们打算如何处理内部抵抗？",
            "ja": "内部の抵抗をどのように対処する予定ですか？",
            "vi": "Chúng ta dự định xử lý sự kháng cự nội bộ như thế nào?"
          }
        },
        {
          "role": "ai",
          "text": "Let’s review next steps if we choose to proceed.",
          "translations": {
            "ko": "진행을 결정하면 다음 단계를 검토해 봅시다.",
            "zh": "如果我们选择继续，让我们回顾下一步计划。",
            "ja": "進行を選択した場合の次のステップを見直しましょう。",
            "vi": "Hãy xem xét các bước tiếp theo nếu chúng ta quyết định tiếp tục."
          }
        },
        {
          "role": "user",
          "text": "Let’s talk about timelines and approvals.",
          "translations": {
            "ko": "시간표와 승인에 대해 이야기해 봅시다.",
            "zh": "让我们谈谈时间表和批准事宜。",
            "ja": "タイムラインと承認について話し合いましょう。",
            "vi": "Hãy thảo luận về thời gian và sự chấp thuận."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Provide training session introduction",
        "ko": "교육 세션 소개 제공",
        "zh": "提供一个培训课程的介绍",
        "ja": "トレーニングセッションの紹介を行います",
        "vi": "Giới thiệu buổi đào tạo"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Welcome to today’s training session.",
          "translations": {
            "ko": "오늘의 교육 세션에 오신 것을 환영합니다.",
            "zh": "欢迎参加今天的培训课程。",
            "ja": "今日のトレーニングセッションへようこそ。",
            "vi": "Chào mừng bạn đến với buổi đào tạo hôm nay."
          }
        },
        {
          "role": "user",
          "text": "Thanks. I’m new to the tool, so this helps.",
          "translations": {
            "ko": "감사합니다. 이 도구는 처음이라 도움이 됩니다.",
            "zh": "谢谢。我对这个工具不熟悉，所以这对我很有帮助。",
            "ja": "ありがとう。私はこのツールが初めてなので、これが役立ちます。",
            "vi": "Cảm ơn. Tôi mới sử dụng công cụ này, vì vậy điều này rất hữu ích."
          }
        },
        {
          "role": "ai",
          "text": "We’ll cover best practices for using the analytics dashboard.",
          "translations": {
            "ko": "우리는 분석 대시보드를 사용하는 최선의 방법을 다룰 것입니다.",
            "zh": "我们将介绍使用分析仪表板的最佳实践。",
            "ja": "アナリティクスダッシュボードの使用に関するベストプラクティスをカバーします。",
            "vi": "Chúng tôi sẽ giới thiệu về các phương pháp tốt nhất khi sử dụng bảng điều khiển phân tích."
          }
        },
        {
          "role": "user",
          "text": "Looking forward to the overview.",
          "translations": {
            "ko": "개요를 기대하고 있습니다.",
            "zh": "期待这个概述。",
            "ja": "概要を楽しみにしています。",
            "vi": "Tôi rất mong chờ phần tổng quan."
          }
        },
        {
          "role": "ai",
          "text": "This session is designed for both new and experienced users.",
          "translations": {
            "ko": "이 세션은 새로운 사용자와 경험 많은 사용자 모두를 위해 설계되었습니다.",
            "zh": "这个课程是为新用户和有经验的用户设计的。",
            "ja": "このセッションは新規ユーザーと経験豊富なユーザーの両方を対象として設計されています。",
            "vi": "Buổi học này được thiết kế cho cả người dùng mới và người dùng có kinh nghiệm."
          }
        },
        {
          "role": "user",
          "text": "I’ll follow along in the training environment.",
          "translations": {
            "ko": "저는 교육 환경에서 따라갈 것입니다.",
            "zh": "我会在培训环境中跟随学习。",
            "ja": "私はトレーニング環境で一緒に進めます。",
            "vi": "Tôi sẽ theo dõi trong môi trường đào tạo."
          }
        },
        {
          "role": "ai",
          "text": "We’ll start with a feature overview and basic setup.",
          "translations": {
            "ko": "기능 개요와 기본 설정부터 시작하겠습니다.",
            "zh": "我们将从功能概述和基本设置开始。",
            "ja": "特徴の概要と基本的な設定から始めます。",
            "vi": "Chúng tôi sẽ bắt đầu với tổng quan về tính năng và cài đặt cơ bản."
          }
        },
        {
          "role": "user",
          "text": "Can you slow down during the demo section?",
          "translations": {
            "ko": "데모 섹션에서 속도를 좀 늦출 수 있나요?",
            "zh": "在演示部分你能慢一点吗？",
            "ja": "デモセクションではスピードを落としてもらえますか？",
            "vi": "Bạn có thể chậm lại trong phần giới thiệu không?"
          }
        },
        {
          "role": "ai",
          "text": "Next, we’ll move into more advanced use cases.",
          "translations": {
            "ko": "다음으로, 좀 더 고급 사용 사례로 넘어갈 것입니다.",
            "zh": "接下来，我们将进入更高级的使用案例。",
            "ja": "次に、より高度なユースケースに移ります。",
            "vi": "Tiếp theo, chúng tôi sẽ đi vào các trường hợp sử dụng nâng cao hơn."
          }
        },
        {
          "role": "user",
          "text": "Good to know we’ll cover advanced topics too.",
          "translations": {
            "ko": "고급 주제도 다룬다는 것을 알게 되어 좋습니다.",
            "zh": "很高兴知道我们也会涵盖高级主题。",
            "ja": "高度なトピックもカバーすると知って良かったです。",
            "vi": "Thật tốt khi biết chúng tôi sẽ bao gồm cả các chủ đề nâng cao."
          }
        },
        {
          "role": "ai",
          "text": "There will be a hands-on demo midway through.",
          "translations": {
            "ko": "중간에 실제로 시연을 할 예정입니다.",
            "zh": "在中途会有一个实际操作的演示。",
            "ja": "途中で実践的なデモがあります。",
            "vi": "Sẽ có một buổi thực hành trực tiếp giữa chừng."
          }
        },
        {
          "role": "user",
          "text": "Will this include mobile features as well?",
          "translations": {
            "ko": "이것은 모바일 기능도 포함하나요?",
            "zh": "这也包括移动功能吗？",
            "ja": "これにはモバイル機能も含まれますか？",
            "vi": "Liệu điều này có bao gồm các tính năng di động không?"
          }
        },
        {
          "role": "ai",
          "text": "You can follow along using the training environment.",
          "translations": {
            "ko": "교육 환경을 사용하여 따라갈 수 있습니다.",
            "zh": "你可以在培训环境中跟随学习。",
            "ja": "トレーニング環境を使用して一緒に進めることができます。",
            "vi": "Bạn có thể theo dõi bằng cách sử dụng môi trường đào tạo."
          }
        },
        {
          "role": "user",
          "text": "I might have questions about reporting later.",
          "translations": {
            "ko": "나중에 보고서에 대한 질문이 있을 수도 있습니다.",
            "zh": "我可能稍后会对报告有一些问题。",
            "ja": "後でレポートについての質問があるかもしれません。",
            "vi": "Tôi có thể có câu hỏi về báo cáo sau."
          }
        },
        {
          "role": "ai",
          "text": "At the end, we’ll have a live Q&A.",
          "translations": {
            "ko": "마지막에는 실시간 Q&A 세션을 진행하겠습니다.",
            "zh": "最后，我们将进行现场问答环节。",
            "ja": "最後に、ライブの質疑応答を行います。",
            "vi": "Cuối cùng, chúng tôi sẽ có một phần hỏi và đáp trực tiếp."
          }
        },
        {
          "role": "user",
          "text": "Glad this is being recorded.",
          "translations": {
            "ko": "이것이 녹화되어서 다행입니다.",
            "zh": "很高兴这个会议被记录下来。",
            "ja": "これが録音されていると嬉しいです。",
            "vi": "Rất vui khi buổi này được ghi lại."
          }
        },
        {
          "role": "ai",
          "text": "The session will be recorded and shared afterward.",
          "translations": {
            "ko": "이 세션은 녹화되어 나중에 공유될 예정입니다.",
            "zh": "会议将被录制并在之后分享。",
            "ja": "このセッションは録音され、後で共有されます。",
            "vi": "Buổi họp sẽ được ghi lại và chia sẻ sau."
          }
        },
        {
          "role": "user",
          "text": "I’ll take notes as we go.",
          "translations": {
            "ko": "진행하면서 메모를 하겠습니다.",
            "zh": "我会在我们进行的过程中做笔记。",
            "ja": "進行中にメモを取ります。",
            "vi": "Tôi sẽ ghi chú khi chúng ta tiếp tục."
          }
        },
        {
          "role": "ai",
          "text": "Let’s begin with an introduction to the main dashboard sections.",
          "translations": {
            "ko": "메인 대시보드 섹션에 대한 소개부터 시작해봅시다.",
            "zh": "让我们从介绍主要仪表板部分开始。",
            "ja": "メインダッシュボードの各セクションの紹介から始めましょう。",
            "vi": "Hãy bắt đầu với việc giới thiệu về các phần chính trên bảng điều khiển."
          }
        },
        {
          "role": "user",
          "text": "Ready to dive into the dashboard layout.",
          "translations": {
            "ko": "대시보드 레이아웃에 대해 자세히 알아보려 합니다.",
            "zh": "准备深入了解仪表板布局。",
            "ja": "ダッシュボードのレイアウトに深く入り込む準備ができています。",
            "vi": "Sẵn sàng để tìm hiểu về bố cục bảng điều khiển."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Explain the project deliverables to the client",
        "ko": "클라이언트에게 프로젝트 결과물을 설명하기",
        "zh": "向客户解释项目交付物。",
        "ja": "クライアントにプロジェクトの成果物を説明する",
        "vi": "Giải thích các kết quả dự án cho khách hàng."
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Thanks for joining the project kickoff call.",
          "translations": {
            "ko": "프로젝트 개시 회의에 참석해 주셔서 감사합니다.",
            "zh": "感谢你参加项目启动电话会议。",
            "ja": "プロジェクトキックオフコールに参加いただきありがとうございます。",
            "vi": "Cảm ơn bạn đã tham gia cuộc gọi khởi động dự án."
          }
        },
        {
          "role": "user",
          "text": "Thanks for the clarity.",
          "translations": {
            "ko": "명확한 설명에 감사드립니다.",
            "zh": "感谢你的清晰说明。",
            "ja": "明確さに感謝します。",
            "vi": "Cảm ơn bạn đã làm rõ."
          }
        },
        {
          "role": "ai",
          "text": "Let’s review the agreed deliverables for phase one.",
          "translations": {
            "ko": "첫 번째 단계에 대한 합의된 결과물을 검토해봅시다.",
            "zh": "让我们回顾一下第一阶段约定的交付物。",
            "ja": "フェーズ1の合意した成果物を見直しましょう。",
            "vi": "Hãy xem lại các kết quả đã thống nhất cho giai đoạn một."
          }
        },
        {
          "role": "user",
          "text": "Wireframe timeline sounds good.",
          "translations": {
            "ko": "와이어프레임 타임라인이 좋아 보입니다.",
            "zh": "线框时间表听起来不错。",
            "ja": "ワイヤーフレームのタイムラインは良さそうです。",
            "vi": "Dự kiến thời gian cho wireframe rất tốt."
          }
        },
        {
          "role": "ai",
          "text": "We’ll provide wireframes by the end of next week.",
          "translations": {
            "ko": "다음 주말까지 와이어프레임을 제공하겠습니다.",
            "zh": "我们将在下周末之前提供线框。",
            "ja": "来週の終わりまでにワイヤーフレームを提供します。",
            "vi": "Chúng tôi sẽ cung cấp wireframe vào cuối tuần sau."
          }
        },
        {
          "role": "user",
          "text": "Happy to approve content as we go.",
          "translations": {
            "ko": "진행하면서 콘텐츠를 승인하는 것에 기쁩니다.",
            "zh": "我们很乐意在进行过程中批准内容。",
            "ja": "進行中にコンテンツを承認することは喜んで行います。",
            "vi": "Rất vui được phê duyệt nội dung khi chúng ta tiếp tục."
          }
        },
        {
          "role": "ai",
          "text": "Backend development will begin in parallel.",
          "translations": {
            "ko": "백엔드 개발은 병행하여 진행될 것입니다.",
            "zh": "后端开发将同时开始。",
            "ja": "バックエンドの開発は並行して始まります。",
            "vi": "Phát triển backend sẽ bắt đầu song song."
          }
        },
        {
          "role": "user",
          "text": "Weekly check-ins will help keep us aligned.",
          "translations": {
            "ko": "주간 체크인이 우리를 일치시키는 데 도움이 될 것입니다.",
            "zh": "每周的检查将帮助我们保持一致。",
            "ja": "週次のチェックインが私たちを一致させるのに役立ちます。",
            "vi": "Việc kiểm tra hàng tuần sẽ giúp chúng ta đồng lòng."
          }
        },
        {
          "role": "ai",
          "text": "All content will go through your approval process.",
          "translations": {
            "ko": "모든 콘텐츠는 귀하의 승인 과정을 거칠 것입니다.",
            "zh": "所有内容都将通过你的审批流程。",
            "ja": "全てのコンテンツはあなたの承認プロセスを経ます。",
            "vi": "Tất cả nội dung sẽ đi qua quy trình phê duyệt của bạn."
          }
        },
        {
          "role": "user",
          "text": "What format will the testing report be in?",
          "translations": {
            "ko": "테스트 보고서는 어떤 형식으로 제공되나요?",
            "zh": "测试报告将以什么格式呈现？",
            "ja": "テストレポートはどの形式で提供されますか？",
            "vi": "Báo cáo kiểm tra sẽ ở định dạng gì?"
          }
        },
        {
          "role": "ai",
          "text": "We’ll conduct weekly status check-ins.",
          "translations": {
            "ko": "주간 상태 체크를 진행하겠습니다.",
            "zh": "我们将进行每周的状态检查。",
            "ja": "週次のステータスチェックインを行います。",
            "vi": "Chúng tôi sẽ tiến hành kiểm tra tình hình hàng tuần."
          }
        },
        {
          "role": "user",
          "text": "August 18th works on our side.",
          "translations": {
            "ko": "8월 18일이 우리 쪽에는 괜찮습니다.",
            "zh": "8月18日对我们来说是可行的。",
            "ja": "8月18日は私たちの方でも大丈夫です。",
            "vi": "Ngày 18 tháng 8 phù hợp với chúng tôi."
          }
        },
        {
          "role": "ai",
          "text": "Testing is planned two weeks before launch.",
          "translations": {
            "ko": "테스트는 출시 이주 전에 계획되어 있습니다.",
            "zh": "测试计划在发布前两周进行。",
            "ja": "テストはローンチの2週間前に予定されています。",
            "vi": "Việc kiểm tra được lên kế hoạch hai tuần trước khi ra mắt."
          }
        },
        {
          "role": "user",
          "text": "Is training included after delivery?",
          "translations": {
            "ko": "배송 후 교육이 포함되어 있나요?",
            "zh": "交付后是否包含培训？",
            "ja": "納品後にトレーニングは含まれていますか？",
            "vi": "Có bao gồm đào tạo sau khi giao hàng không?"
          }
        },
        {
          "role": "ai",
          "text": "Final delivery is scheduled for August 18th.",
          "translations": {
            "ko": "최종 배송은 8월 18일로 예정되어 있습니다.",
            "zh": "最终交付计划在8月18日。",
            "ja": "最終納品は8月18日に予定されています。",
            "vi": "Giao hàng cuối cùng dự kiến vào ngày 18 tháng 8."
          }
        },
        {
          "role": "user",
          "text": "Will the documentation be editable?",
          "translations": {
            "ko": "문서는 편집 가능한가요?",
            "zh": "文档是否可以编辑？",
            "ja": "ドキュメンテーションは編集可能ですか？",
            "vi": "Tài liệu có thể chỉnh sửa được không?"
          }
        },
        {
          "role": "ai",
          "text": "Support and documentation are included.",
          "translations": {
            "ko": "지원 및 문서화가 포함되어 있습니다.",
            "zh": "包括支持和文档。",
            "ja": "サポートとドキュメンテーションが含まれています。",
            "vi": "Hỗ trợ và tài liệu đều được bao gồm."
          }
        },
        {
          "role": "user",
          "text": "This all looks solid to us.",
          "translations": {
            "ko": "이 모든 것이 우리에게 탄탄해 보입니다.",
            "zh": "这一切对我们来说都很扎实。",
            "ja": "これは全て私たちにとって確かなものに見えます。",
            "vi": "Tất cả đều tốt đối với chúng tôi."
          }
        },
        {
          "role": "ai",
          "text": "Please confirm if this aligns with your expectations.",
          "translations": {
            "ko": "이것이 귀하의 기대치와 일치하는지 확인해 주십시오.",
            "zh": "请确认这是否符合你的期望。",
            "ja": "これがあなたの期待に合致しているか確認してください。",
            "vi": "Vui lòng xác nhận nếu điều này phù hợp với kỳ vọng của bạn."
          }
        },
        {
          "role": "user",
          "text": "Let’s move forward with this plan.",
          "translations": {
            "ko": "이 계획으로 진행해봅시다.",
            "zh": "让我们按照这个计划继续前进。",
            "ja": "この計画で進めましょう。",
            "vi": "Hãy tiếp tục với kế hoạch này."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Walking through the results of the study",
        "ko": "연구 결과를 통해 걸어가기",
        "zh": "阐述研究发现。",
        "ja": "研究結果のウォーキングスルー",
        "vi": "Đi qua các kết quả nghiên cứu."
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Today I’ll walk you through our latest user research.",
          "translations": {
            "ko": "오늘은 최근의 사용자 연구 결과를 소개하겠습니다.",
            "zh": "今天我将向你详细介绍我们最新的用户研究。",
            "ja": "今日は最新のユーザー研究をご案内します。",
            "vi": "Hôm nay tôi sẽ hướng dẫn bạn qua nghiên cứu người dùng mới nhất của chúng tôi."
          }
        },
        {
          "role": "user",
          "text": "Thanks for summarizing the research.",
          "translations": {
            "ko": "연구를 요약해 주셔서 감사합니다.",
            "zh": "感谢你总结的研究。",
            "ja": "研究を要約していただきありがとうございます。",
            "vi": "Cảm ơn bạn đã tóm tắt nghiên cứu."
          }
        },
        {
          "role": "ai",
          "text": "We conducted surveys and in-depth interviews.",
          "translations": {
            "ko": "우리는 설문조사와 심층 인터뷰를 진행했습니다.",
            "zh": "我们进行了调查和深度访谈。",
            "ja": "私たちは調査と深層インタビューを行いました。",
            "vi": "Chúng tôi đã tiến hành các cuộc khảo sát và phỏng vấn sâu."
          }
        },
        {
          "role": "user",
          "text": "It’s helpful to hear directly from users.",
          "translations": {
            "ko": "사용자로부터 직접 듣는 것이 도움이 됩니다.",
            "zh": "直接听取用户的意见很有帮助。",
            "ja": "ユーザーから直接聞くことは役立ちます。",
            "vi": "Việc nghe trực tiếp từ người dùng rất hữu ích."
          }
        },
        {
          "role": "ai",
          "text": "The sample included both new and long-term users.",
          "translations": {
            "ko": "샘플에는 새로운 사용자와 장기 사용자 모두 포함되었습니다.",
            "zh": "样本包括新用户和长期用户。",
            "ja": "サンプルには新規ユーザーと長期ユーザーの両方が含まれていました。",
            "vi": "Mẫu bao gồm cả người dùng mới và người dùng lâu dài."
          }
        },
        {
          "role": "user",
          "text": "Setup clarity is a known issue for us too.",
          "translations": {
            "ko": "설정의 명확성은 우리에게도 알려진 문제입니다.",
            "zh": "设置清晰度对我们来说也是一个已知的问题。",
            "ja": "セットアップの明確さも私たちにとって問題です。",
            "vi": "Vấn đề về sự rõ ràng trong việc thiết lập cũng là một vấn đề mà chúng tôi biết."
          }
        },
        {
          "role": "ai",
          "text": "Key insights emerged around onboarding experience.",
          "translations": {
            "ko": "온보딩 경험에 대한 주요 인사이트가 도출되었습니다.",
            "zh": "关于新用户体验的关键洞察已经浮出水面。",
            "ja": "オンボーディング体験に関する重要な洞察が浮かび上がりました。",
            "vi": "Những thông tin quan trọng đã xuất hiện xung quanh trải nghiệm làm quen với sản phẩm."
          }
        },
        {
          "role": "user",
          "text": "Customization has been on our radar.",
          "translations": {
            "ko": "맞춤화는 우리의 레이더에 있었습니다.",
            "zh": "定制化一直在我们的关注范围内。",
            "ja": "カスタマイズは私たちの関心事でした。",
            "vi": "Việc tùy chỉnh đã nằm trong tầm ngắm của chúng tôi."
          }
        },
        {
          "role": "ai",
          "text": "Users want clearer guidance during setup.",
          "translations": {
            "ko": "사용자들은 설정 중에 더욱 명확한 지침을 원합니다.",
            "zh": "用户希望在设置过程中得到更清晰的指导。",
            "ja": "ユーザーはセットアップ中のより明確なガイダンスを求めています。",
            "vi": "Người dùng muốn có hướng dẫn rõ ràng hơn trong quá trình thiết lập."
          }
        },
        {
          "role": "user",
          "text": "How many participants were in the study?",
          "translations": {
            "ko": "연구에 참여한 참가자는 몇 명이었나요?",
            "zh": "研究中有多少参与者？",
            "ja": "研究には何人の参加者がいましたか？",
            "vi": "Có bao nhiêu người tham gia trong nghiên cứu?"
          }
        },
        {
          "role": "ai",
          "text": "Long-term users requested more customization options.",
          "translations": {
            "ko": "장기 사용자들은 더 많은 맞춤화 옵션을 요청했습니다.",
            "zh": "长期用户要求更多的定制选项。",
            "ja": "長期ユーザーはより多くのカスタマイズオプションを要求しました。",
            "vi": "Người dùng lâu dài yêu cầu thêm các tùy chọn tùy chỉnh."
          }
        },
        {
          "role": "user",
          "text": "Can you share the persona breakdown later?",
          "translations": {
            "ko": "나중에 페르소나 분석을 공유해 주실 수 있나요?",
            "zh": "你能稍后分享一下人物角色的细分吗？",
            "ja": "あとでパーソナの内訳を共有してもらえますか？",
            "vi": "Bạn có thể chia sẻ thông tin chi tiết về nhân vật mẫu sau không?"
          }
        },
        {
          "role": "ai",
          "text": "We’ve grouped findings by theme and persona.",
          "translations": {
            "ko": "우리는 주제와 페르소나별로 결과를 그룹화했습니다.",
            "zh": "我们按主题和人物角色对发现进行了分组。",
            "ja": "私たちはテーマとパーソナごとに調査結果をグループ化しました。",
            "vi": "Chúng tôi đã nhóm các kết quả theo chủ đề và nhân vật mẫu."
          }
        },
        {
          "role": "user",
          "text": "Appreciate the appendix with quotes.",
          "translations": {
            "ko": "인용문이 포함된 부록에 감사드립니다.",
            "zh": "感谢附录中的引用。",
            "ja": "引用文付きの付録に感謝します。",
            "vi": "Rất cảm ơn phần phụ lục với các trích dẫn."
          }
        },
        {
          "role": "ai",
          "text": "There’s a full appendix with quotes and stats.",
          "translations": {
            "ko": "인용문과 통계가 포함된 전체 부록이 있습니다.",
            "zh": "附录中有完整的引用和统计数据。",
            "ja": "引用文と統計データの完全な付録があります。",
            "vi": "Có một phụ lục đầy đủ với các trích dẫn và số liệu thống kê."
          }
        },
        {
          "role": "user",
          "text": "Excited to see how this shapes direction.",
          "translations": {
            "ko": "이것이 어떻게 방향성을 형성하는지 보는 것이 기대됩니다.",
            "zh": "很期待看到这将如何影响我们的方向。",
            "ja": "これがどのように方向性を形成するか楽しみにしています。",
            "vi": "Rất hào hứng để xem điều này sẽ hình thành hướng đi như thế nào."
          }
        },
        {
          "role": "ai",
          "text": "Let’s discuss how this impacts our roadmap.",
          "translations": {
            "ko": "이것이 우리의 로드맵에 어떤 영향을 미치는지 논의해봅시다.",
            "zh": "让我们讨论这将如何影响我们的路线图。",
            "ja": "これが私たちのロードマップにどのように影響するかを議論しましょう。",
            "vi": "Hãy thảo luận về cách điều này ảnh hưởng đến lộ trình của chúng ta."
          }
        },
        {
          "role": "user",
          "text": "Let’s prioritize quick wins from the findings.",
          "translations": {
            "ko": "결과에서 빠른 승리를 우선 순위로 두어봅시다.",
            "zh": "让我们优先考虑从发现中快速取得的成果。",
            "ja": "調査結果からの素早い勝利を優先しましょう。",
            "vi": "Hãy ưu tiên những chiến thắng nhanh chóng từ các kết quả."
          }
        },
        {
          "role": "ai",
          "text": "We welcome questions and feedback after the review.",
          "translations": {
            "ko": "리뷰 후 질문과 피드백을 환영합니다.",
            "zh": "我们欢迎在审查后提问和反馈。",
            "ja": "レビュー後の質問とフィードバックを歓迎します。",
            "vi": "Chúng tôi rất hoan nghênh các câu hỏi và phản hồi sau khi xem xét."
          }
        },
        {
          "role": "user",
          "text": "Great work from the research team.",
          "translations": {
            "ko": "연구 팀의 훌륭한 작업.",
            "zh": "研究团队做得很好。",
            "ja": "研究チームの素晴らしい仕事。",
            "vi": "Công việc tuyệt vời từ nhóm nghiên cứu."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Introducing new internal tools",
        "ko": "새로운 내부 도구 소개",
        "zh": "介绍一款新的内部工具。",
        "ja": "新しい内部ツールの紹介",
        "vi": "Giới thiệu một công cụ nội bộ mới"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "We’re excited to introduce our new internal request system.",
          "translations": {
            "ko": "우리의 새로운 내부 요청 시스템을 소개하게 되어 기쁩니다.",
            "zh": "我们很高兴介绍我们的新内部请求系统。",
            "ja": "私たちの新しい内部リクエストシステムを紹介することを楽しみにしています。",
            "vi": "Chúng tôi rất hào hứng khi giới thiệu hệ thống yêu cầu nội bộ mới của chúng tôi."
          }
        },
        {
          "role": "user",
          "text": "Thanks. We’ve been waiting for this rollout.",
          "translations": {
            "ko": "감사합니다. 우리는 이 롤아웃을 기다리고 있었습니다.",
            "zh": "谢谢。我们一直在等待这个推出。",
            "ja": "ありがとう。このロールアウトを待っていました。",
            "vi": "Cảm ơn. Chúng tôi đã đợi sự triển khai này."
          }
        },
        {
          "role": "ai",
          "text": "This tool will replace email-based processes.",
          "translations": {
            "ko": "이 도구는 이메일 기반의 프로세스를 대체할 것입니다.",
            "zh": "这个工具将取代基于电子邮件的流程。",
            "ja": "このツールはメールベースのプロセスを置き換えます。",
            "vi": "Công cụ này sẽ thay thế các quy trình dựa trên email."
          }
        },
        {
          "role": "user",
          "text": "Replacing email will really help.",
          "translations": {
            "ko": "이메일을 대체하는 것이 정말 도움이 될 것입니다.",
            "zh": "替换电子邮件真的会有所帮助。",
            "ja": "メールの置き換えは本当に助けになります。",
            "vi": "Việc thay thế email sẽ thực sự hữu ích."
          }
        },
        {
          "role": "ai",
          "text": "It allows for faster routing and better tracking.",
          "translations": {
            "ko": "더 빠른 라우팅과 더 나은 추적이 가능합니다.",
            "zh": "它可以实现更快的路由和更好的跟踪。",
            "ja": "これにより、より迅速なルーティングとより良い追跡が可能になります。",
            "vi": "Nó cho phép chuyển tiếp nhanh hơn và theo dõi tốt hơn."
          }
        },
        {
          "role": "user",
          "text": "How are urgent requests handled differently?",
          "translations": {
            "ko": "긴급 요청은 어떻게 다르게 처리되나요?",
            "zh": "紧急请求如何进行不同的处理？",
            "ja": "緊急のリクエストはどのように異なって扱われますか？",
            "vi": "Các yêu cầu khẩn cấp được xử lý khác như thế nào?"
          }
        },
        {
          "role": "ai",
          "text": "Requests are categorized by department and urgency.",
          "translations": {
            "ko": "요청은 부서와 긴급성에 따라 분류됩니다.",
            "zh": "请求按部门和紧急程度进行分类。",
            "ja": "リクエストは部門と緊急性で分類されます。",
            "vi": "Các yêu cầu được phân loại theo bộ phận và mức độ khẩn cấp."
          }
        },
        {
          "role": "user",
          "text": "Can we customize categories?",
          "translations": {
            "ko": "카테고리를 맞춤화할 수 있나요?",
            "zh": "我们可以自定义类别吗？",
            "ja": "カテゴリーをカスタマイズできますか？",
            "vi": "Chúng tôi có thể tùy chỉnh các danh mục không?"
          }
        },
        {
          "role": "ai",
          "text": "There’s a built-in approval workflow.",
          "translations": {
            "ko": "내장된 승인 워크플로우가 있습니다.",
            "zh": "有内置的审批流程。",
            "ja": "承認ワークフローが組み込まれています。",
            "vi": "Có một quy trình phê duyệt được tích hợp."
          }
        },
        {
          "role": "user",
          "text": "Approval workflow sounds promising.",
          "translations": {
            "ko": "승인 워크플로우는 매력적으로 들립니다.",
            "zh": "审批流程听起来很有前途。",
            "ja": "承認ワークフローは有望に聞こえます。",
            "vi": "Quy trình phê duyệt nghe có vẻ hứa hẹn."
          }
        },
        {
          "role": "ai",
          "text": "We’ll walk through a sample request live.",
          "translations": {
            "ko": "실시간으로 샘플 요청을 진행해 보겠습니다.",
            "zh": "我们将实时演示一个样本请求。",
            "ja": "ライブでサンプルリクエストを一緒に見ていきましょう。",
            "vi": "Chúng tôi sẽ hướng dẫn một yêu cầu mẫu trực tiếp."
          }
        },
        {
          "role": "user",
          "text": "Looking forward to the demo.",
          "translations": {
            "ko": "데모를 기대하고 있습니다.",
            "zh": "期待看到演示。",
            "ja": "デモを楽しみにしています。",
            "vi": "Mong chờ xem demo."
          }
        },
        {
          "role": "ai",
          "text": "The tool supports attachments and comments.",
          "translations": {
            "ko": "이 도구는 첨부파일과 댓글을 지원합니다.",
            "zh": "该工具支持附件和评论。",
            "ja": "このツールは添付ファイルとコメントをサポートしています。",
            "vi": "Công cụ hỗ trợ đính kèm và bình luận."
          }
        },
        {
          "role": "user",
          "text": "Great that comments are supported.",
          "translations": {
            "ko": "댓글이 지원되는 것이 좋습니다.",
            "zh": "很高兴支持评论功能。",
            "ja": "コメントがサポートされているのは素晴らしいです。",
            "vi": "Tốt là bình luận được hỗ trợ."
          }
        },
        {
          "role": "ai",
          "text": "Training videos are available in the help center.",
          "translations": {
            "ko": "교육용 비디오는 도움말 센터에서 이용 가능합니다.",
            "zh": "帮助中心有培训视频。",
            "ja": "トレーニングビデオはヘルプセンターで利用できます。",
            "vi": "Có video đào tạo ở trung tâm trợ giúp."
          }
        },
        {
          "role": "user",
          "text": "Where do we submit tool feedback?",
          "translations": {
            "ko": "도구에 대한 피드백은 어디에 제출하나요?",
            "zh": "我们在哪里提交工具反馈？",
            "ja": "ツールのフィードバックはどこに提出すればよいですか？",
            "vi": "Chúng ta nộp phản hồi về công cụ ở đâu?"
          }
        },
        {
          "role": "ai",
          "text": "Feedback is welcome through the tool itself.",
          "translations": {
            "ko": "도구 자체를 통해 피드백을 환영합니다.",
            "zh": "通过工具本身欢迎反馈。",
            "ja": "フィードバックはツール自体を通じて歓迎されます。",
            "vi": "Phản hồi được chào đón thông qua chính công cụ."
          }
        },
        {
          "role": "user",
          "text": "This should save a lot of time.",
          "translations": {
            "ko": "이것으로 많은 시간을 절약할 수 있을 것입니다.",
            "zh": "这应该可以节省很多时间。",
            "ja": "これでかなりの時間を節約できるはずです。",
            "vi": "Điều này nên tiết kiệm rất nhiều thời gian."
          }
        },
        {
          "role": "ai",
          "text": "Let’s look at the onboarding steps next.",
          "translations": {
            "ko": "다음으로 온보딩 단계를 살펴봅시다.",
            "zh": "让我们接下来看看入职步骤。",
            "ja": "次にオンボーディングのステップを見てみましょう。",
            "vi": "Hãy xem các bước hướng dẫn tiếp theo."
          }
        },
        {
          "role": "user",
          "text": "Excited to start using it.",
          "translations": {
            "ko": "사용하기 시작하는 것이 기대됩니다.",
            "zh": "很期待开始使用它。",
            "ja": "使い始めるのが楽しみです。",
            "vi": "Hào hứng muốn bắt đầu sử dụng nó."
          }
        }
      ]
    },
    {
      "description": {
        "en": "Review the progress of the event plan",
        "ko": "이벤트 계획 진행 상황 검토",
        "zh": "审查活动计划进度。",
        "ja": "イベント計画の進行状況をレビュー中",
        "vi": "Đang xem xét tiến trình lập kế hoạch sự kiện."
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Let’s review progress on the upcoming company event.",
          "translations": {
            "ko": "다가오는 회사 이벤트의 진행 상황을 검토해봅시다.",
            "zh": "让我们回顾一下即将举行的公司活动的进度。",
            "ja": "これから開催する会社のイベントの進行状況を見直しましょう。",
            "vi": "Hãy xem xét tiến trình cho sự kiện công ty sắp tới."
          }
        },
        {
          "role": "user",
          "text": "Thanks for the update.",
          "translations": {
            "ko": "업데이트 해주셔서 감사합니다.",
            "zh": "感谢您的更新。",
            "ja": "更新情報をありがとう。",
            "vi": "Cảm ơn vì đã cập nhật."
          }
        },
        {
          "role": "ai",
          "text": "The venue is confirmed and contract signed.",
          "translations": {
            "ko": "장소가 확정되었고 계약이 체결되었습니다.",
            "zh": "场地已确认，合同已签。",
            "ja": "会場は確定し、契約も結ばれました。",
            "vi": "Địa điểm đã được xác nhận và hợp đồng đã ký."
          }
        },
        {
          "role": "user",
          "text": "Venue looks great from the photos.",
          "translations": {
            "ko": "사진에서 보는 장소가 멋져 보입니다.",
            "zh": "从照片上看，场地很棒。",
            "ja": "写真から見ると会場は素晴らしいです。",
            "vi": "Địa điểm trông tuyệt vời từ những bức ảnh."
          }
        },
        {
          "role": "ai",
          "text": "We’ve finalized the agenda and speaker list.",
          "translations": {
            "ko": "우리는 의제와 연사 명단을 확정했습니다.",
            "zh": "我们已经确定了议程和演讲者名单。",
            "ja": "アジェンダとスピーカーリストを最終決定しました。",
            "vi": "Chúng tôi đã hoàn thiện chương trình và danh sách diễn giả."
          }
        },
        {
          "role": "user",
          "text": "Happy with the speaker lineup.",
          "translations": {
            "ko": "연사 라인업에 만족합니다.",
            "zh": "对演讲者阵容感到满意。",
            "ja": "スピーカーのラインナップに満足しています。",
            "vi": "Hài lòng với danh sách diễn giả."
          }
        },
        {
          "role": "ai",
          "text": "Invitations were sent last Friday.",
          "translations": {
            "ko": "초대장은 지난 금요일에 발송되었습니다.",
            "zh": "邀请函上周五已发送。",
            "ja": "招待状は先週の金曜日に送られました。",
            "vi": "Lời mời đã được gửi vào thứ Sáu tuần trước."
          }
        },
        {
          "role": "user",
          "text": "Will there be a reminder for RSVPs?",
          "translations": {
            "ko": "RSVP에 대한 알림이 있을까요?",
            "zh": "会有RSVP的提醒吗？",
            "ja": "RSVPのリマインダーはありますか？",
            "vi": "Sẽ có nhắc nhở cho việc RSVP không?"
          }
        },
        {
          "role": "ai",
          "text": "Catering menu has been reviewed and approved.",
          "translations": {
            "ko": "케이터링 메뉴가 검토되고 승인되었습니다.",
            "zh": "餐饮菜单已经过审查并获得批准。",
            "ja": "ケータリングメニューはレビューされ、承認されました。",
            "vi": "Thực đơn phục vụ đã được xem xét và phê duyệt."
          }
        },
        {
          "role": "user",
          "text": "Catering menu looks solid.",
          "translations": {
            "ko": "케이터링 메뉴가 탄탄해 보입니다.",
            "zh": "餐饮菜单看起来很扎实。",
            "ja": "ケータリングメニューはしっかりしています。",
            "vi": "Thực đơn phục vụ trông chắc chắn."
          }
        },
        {
          "role": "ai",
          "text": "Logistics team is handling equipment rentals.",
          "translations": {
            "ko": "물류팀이 장비 대여를 처리하고 있습니다.",
            "zh": "后勤团队正在处理设备租赁。",
            "ja": "ロジスティクスチームが機器のレンタルを取り扱っています。",
            "vi": "Đội ngũ hậu cần đang xử lý việc thuê thiết bị."
          }
        },
        {
          "role": "user",
          "text": "Glad logistics are covered.",
          "translations": {
            "ko": "물류가 처리되어 좋습니다.",
            "zh": "很高兴后勤已经安排好了。",
            "ja": "ロジスティクスがカバーされていて良かったです。",
            "vi": "Vui mừng vì hậu cần đã được đảm bảo."
          }
        },
        {
          "role": "ai",
          "text": "We’re still waiting on final RSVPs.",
          "translations": {
            "ko": "최종 RSVP를 아직 기다리고 있습니다.",
            "zh": "我们仍在等待最后的RSVP。",
            "ja": "最終的なRSVPをまだ待っています。",
            "vi": "Chúng tôi vẫn đang chờ RSVP cuối cùng."
          }
        },
        {
          "role": "user",
          "text": "I can help with volunteer coordination.",
          "translations": {
            "ko": "나는 자원봉사자 조정을 도울 수 있습니다.",
            "zh": "我可以帮助协调志愿者。",
            "ja": "ボランティアの調整を手伝うことができます。",
            "vi": "Tôi có thể giúp điều phối tình nguyện viên."
          }
        },
        {
          "role": "ai",
          "text": "Printed materials are in production now.",
          "translations": {
            "ko": "인쇄물은 현재 제작 중입니다.",
            "zh": "印刷材料现在正在生产中。",
            "ja": "印刷物は現在製作中です。",
            "vi": "Tài liệu in đang được sản xuất."
          }
        },
        {
          "role": "user",
          "text": "Will printed materials include name badges?",
          "translations": {
            "ko": "인쇄물에 이름표가 포함되나요?",
            "zh": "印刷材料会包括名牌吗？",
            "ja": "印刷物には名札も含まれますか？",
            "vi": "Tài liệu in có bao gồm huy hiệu tên không?"
          }
        },
        {
          "role": "ai",
          "text": "Volunteer assignments will go out this week.",
          "translations": {
            "ko": "자원봉사자 배치는 이번 주에 나갈 예정입니다.",
            "zh": "志愿者任务将在本周发出。",
            "ja": "ボランティアの割り当ては今週中に出ます。",
            "vi": "Nhiệm vụ tình nguyện viên sẽ được gửi trong tuần này."
          }
        },
        {
          "role": "user",
          "text": "Everything seems on track.",
          "translations": {
            "ko": "모든 것이 계획대로 진행되고 있는 것 같습니다.",
            "zh": "一切似乎都在正轨上。",
            "ja": "すべてが順調に進んでいるようです。",
            "vi": "Mọi thứ dường như đang trên đúng hướng."
          }
        },
        {
          "role": "ai",
          "text": "Let’s open the floor for any final input.",
          "translations": {
            "ko": "마지막 의견을 위해 발언을 열어봅시다.",
            "zh": "让我们为任何最后的建议开放讨论。",
            "ja": "最後に何か意見がある方はどんどん話してください。",
            "vi": "Hãy mở cửa cho bất kỳ ý kiến cuối cùng nào."
          }
        },
        {
          "role": "user",
          "text": "No input from me. Looking forward to the event.",
          "translations": {
            "ko": "제게는 의견이 없습니다. 이벤트를 기대하고 있습니다.",
            "zh": "我没有意见。期待活动。",
            "ja": "私からは意見はありません。イベントを楽しみにしています。",
            "vi": "Không có ý kiến từ tôi. Mong chờ sự kiện."
          }
        }
      ]
    }
  ],
  "advanced": [
    {
      "description": {
        "en": "Present strategic vision to management",
        "ko": "경영진에게 전략적 비전 발표하기",
        "zh": "向高管们展示战略愿景报告",
        "ja": "経営陣への戦略ビジョンプレゼンテーションの提供",
        "vi": "Trình bày bài thuyết trình về tầm nhìn chiến lược cho các giám đốc"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Good morning. Today, I’ll outline our three-year strategic vision.",
          "translations": {
            "ko": "좋은 아침입니다. 오늘은 우리의 3년 전략적 비전을 개요로 설명하겠습니다.",
            "zh": "早上好。今天，我将概述我们的三年战略愿景。",
            "ja": "おはようございます。今日は、私たちの3年間の戦略ビジョンを概説します。",
            "vi": "Chào buổi sáng. Hôm nay, tôi sẽ trình bày tầm nhìn chiến lược ba năm của chúng tôi."
          }
        },
        {
          "role": "user",
          "text": "Thanks. That was a clear articulation of where we’re heading.",
          "translations": {
            "ko": "감사합니다. 우리가 향해가는 방향을 명확하게 설명해주셨습니다.",
            "zh": "谢谢。这是我们前进方向的清晰阐述。",
            "ja": "ありがとう。私たちが向かう方向を明確に説明してくれました。",
            "vi": "Cảm ơn. Đó là một cách diễn đạt rõ ràng về hướng đi của chúng tôi."
          }
        },
        {
          "role": "ai",
          "text": "We’ve identified market shifts demanding bold repositioning.",
          "translations": {
            "ko": "우리는 대담한 재배치를 요구하는 시장 변화를 확인했습니다.",
            "zh": "我们已经发现市场变化需要大胆的重新定位。",
            "ja": "我々は大胆な再配置を求める市場のシフトを特定しました。",
            "vi": "Chúng tôi đã xác định được những thay đổi thị trường đòi hỏi sự định vị lại mạnh mẽ."
          }
        },
        {
          "role": "user",
          "text": "What assumptions underpin the vertical expansion strategy?",
          "translations": {
            "ko": "수직 확장 전략을 뒷받침하는 가정은 무엇인가요?",
            "zh": "垂直扩展策略的基础假设是什么？",
            "ja": "垂直拡大戦略を支える前提条件は何ですか？",
            "vi": "Những giả định nào là cơ sở cho chiến lược mở rộng theo chiều dọc?"
          }
        },
        {
          "role": "ai",
          "text": "Our north star is becoming the category-defining platform in our space.",
          "translations": {
            "ko": "우리의 북극성은 우리 분야에서 카테고리를 정의하는 플랫폼이 되는 것입니다.",
            "zh": "我们的北极星是成为我们领域的类别定义平台。",
            "ja": "我々の北極星は、私たちの領域でカテゴリーを定義するプラットフォームになることです。",
            "vi": "Mục tiêu của chúng tôi là trở thành nền tảng định hình thể loại trong lĩnh vực của chúng tôi."
          }
        },
        {
          "role": "user",
          "text": "Are we projecting a shift in CAC with these initiatives?",
          "translations": {
            "ko": "이러한 이니셔티브로 CAC의 변화를 예상하고 있나요?",
            "zh": "我们是否预计这些举措会改变客户获取成本？",
            "ja": "これらのイニシアチブによりCACのシフトを予測していますか？",
            "vi": "Chúng tôi có dự đoán sự thay đổi trong CAC với những sáng kiến này không?"
          }
        },
        {
          "role": "ai",
          "text": "To achieve that, we’ve structured initiatives around three core pillars.",
          "translations": {
            "ko": "그것을 달성하기 위해, 우리는 세 가지 핵심 기둥 주위에 이니셔티브를 구성했습니다.",
            "zh": "为了实现这一目标，我们围绕三个核心支柱制定了举措。",
            "ja": "それを達成するために、我々は3つの中心的な柱を中心にイニシアチブを構築しました。",
            "vi": "Để đạt được điều đó, chúng tôi đã xây dựng các sáng kiến xung quanh ba trụ cột cốt lõi."
          }
        },
        {
          "role": "user",
          "text": "The AI integration timeline will be key—any contingencies?",
          "translations": {
            "ko": "AI 통합 시간표는 핵심이 될 것입니다—어떤 예비 조치가 있나요?",
            "zh": "AI集成的时间表将是关键——有任何应急措施吗？",
            "ja": "AI統合のタイムラインは重要です - 何か代替案はありますか？",
            "vi": "Lộ trình tích hợp AI sẽ rất quan trọng - có kế hoạch dự phòng nào không?"
          }
        },
        {
          "role": "ai",
          "text": "First, we’re investing heavily in product innovation and AI integration.",
          "translations": {
            "ko": "첫째, 우리는 제품 혁신과 AI 통합에 대한 투자를 대폭 늘리고 있습니다.",
            "zh": "首先，我们将大力投资产品创新和AI集成。",
            "ja": "まず、我々は製品革新とAI統合に大いに投資しています。",
            "vi": "Đầu tiên, chúng tôi đang đầu tư mạnh mẽ vào sự đổi mới sản phẩm và tích hợp AI."
          }
        },
        {
          "role": "user",
          "text": "How do we plan to phase operational restructuring?",
          "translations": {
            "ko": "운영 구조를 어떻게 단계적으로 재구성할 계획인가요?",
            "zh": "我们如何计划分阶段进行运营重组？",
            "ja": "運用再構築をどのように段階的に計画していますか？",
            "vi": "Chúng tôi dự định cải tổ hoạt động như thế nào?"
          }
        },
        {
          "role": "ai",
          "text": "Second, we aim to expand into adjacent verticals through partnerships.",
          "translations": {
            "ko": "둘째, 우리는 파트너십을 통해 인접한 수직 분야로 확장하려고 합니다.",
            "zh": "其次，我们打算通过合作伙伴关系扩展到相邻的垂直领域。",
            "ja": "二つ目に、我々はパートナーシップを通じて隣接する垂直に拡大することを目指しています。",
            "vi": "Thứ hai, chúng tôi nhắm đến việc mở rộng vào các lĩnh vực kề cận thông qua các đối tác."
          }
        },
        {
          "role": "user",
          "text": "The strategic pillars align well with broader trends.",
          "translations": {
            "ko": "전략적 기둥들이 더 넓은 추세와 잘 맞습니다.",
            "zh": "这些战略支柱与更广泛的趋势很好地对齐。",
            "ja": "戦略的な柱は広範なトレンドとよく一致しています。",
            "vi": "Các trụ cột chiến lược phù hợp tốt với các xu hướng rộng lớn hơn."
          }
        },
        {
          "role": "ai",
          "text": "Third, we’ll restructure internal operations to support scalable growth.",
          "translations": {
            "ko": "셋째, 우리는 확장 가능한 성장을 지원하기 위해 내부 운영을 재구성할 것입니다.",
            "zh": "第三，我们将重组内部运营以支持可扩展的增长。",
            "ja": "三つ目に、我々はスケーラブルな成長を支えるために内部運用を再構築します。",
            "vi": "Thứ ba, chúng tôi sẽ cải tổ hoạt động nội bộ để hỗ trợ sự tăng trưởng có thể mở rộng."
          }
        },
        {
          "role": "user",
          "text": "Have we modeled worst-case outcomes for risk planning?",
          "translations": {
            "ko": "위험 계획을 위해 최악의 결과를 모델링했나요?",
            "zh": "我们是否为风险规划建模了最坏的结果？",
            "ja": "リスク計画のために最悪の結果をモデル化しましたか？",
            "vi": "Chúng tôi đã mô phỏng các kết quả tồi tệ nhất cho kế hoạch quản lý rủi ro chưa?"
          }
        },
        {
          "role": "ai",
          "text": "Each initiative has corresponding KPIs and risk assessments.",
          "translations": {
            "ko": "각 이니셔티브는 해당하는 KPIs와 위험 평가를 가지고 있습니다.",
            "zh": "每个举措都有相应的关键绩效指标和风险评估。",
            "ja": "各イニシアチブには対応するKPIとリスク評価があります。",
            "vi": "Mỗi sáng kiến đều có các KPI tương ứng và đánh giá rủi ro."
          }
        },
        {
          "role": "user",
          "text": "I’d like to review the competitive landscape materials later.",
          "translations": {
            "ko": "나중에 경쟁 상황 자료를 검토하고 싶습니다.",
            "zh": "我稍后想要查看竞争格局的材料。",
            "ja": "後で競争状況の資料を見直したいと思います。",
            "vi": "Tôi muốn xem lại tài liệu về cảnh quan cạnh tranh sau."
          }
        },
        {
          "role": "ai",
          "text": "We’ve also conducted a competitive landscape deep-dive to validate our path.",
          "translations": {
            "ko": "우리는 또한 우리의 경로를 검증하기 위해 경쟁 상황에 대한 깊은 연구를 수행했습니다.",
            "zh": "我们还进行了竞争格局的深度研究，以验证我们的路径。",
            "ja": "我々の道筋を検証するために競争状況の深掘りも行いました。",
            "vi": "Chúng tôi cũng đã thực hiện một cuộc điều tra sâu về cảnh quan cạnh tranh để xác nhận con đường của chúng tôi."
          }
        },
        {
          "role": "user",
          "text": "Do we foresee regulatory risks with cross-vertical growth?",
          "translations": {
            "ko": "수직 간 성장에 대한 규제 위험을 예상하고 있나요?",
            "zh": "我们是否预见到跨垂直增长的监管风险？",
            "ja": "垂直成長による規制リスクを予測していますか？",
            "vi": "Chúng tôi có dự đoán rủi ro pháp lý với sự tăng trưởng qua các lĩnh vực không?"
          }
        },
        {
          "role": "ai",
          "text": "I look forward to your thoughts as we align on this direction.",
          "translations": {
            "ko": "이 방향에 대해 우리가 일치하면서 여러분의 생각을 기대합니다.",
            "zh": "我期待听到您的想法，因为我们正在对这个方向达成一致。",
            "ja": "この方向性について皆さんの意見をお待ちしています。",
            "vi": "Tôi mong chờ ý kiến của bạn khi chúng ta đồng lòng về hướng đi này."
          }
        },
        {
          "role": "user",
          "text": "This direction feels ambitious but grounded. Let’s proceed.",
          "translations": {
            "ko": "이 방향은 야심차지만 현실적으로 느껴집니다. 진행합시다.",
            "zh": "这个方向感觉雄心勃勃但脚踏实地。让我们继续。",
            "ja": "この方向性は野心的だが現実的に感じます。進めましょう。",
            "vi": "Hướng đi này có vẻ tham vọng nhưng vững chắc. Hãy tiếp tục."
          }
        }
      ]
    },
    {
      "description": {
        "ko": "투자자 대상 분기별 성과 결과 발표하기",
        "zh": "展示面向投资者的季度业绩结果",
        "ja": "投資家向けの四半期業績結果の発表",
        "vi": "Trình bày kết quả hoạt động quý hướng tới nhà đầu tư"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Welcome, everyone. I’ll walk through our Q2 results and outlook.",
          "translations": {
            "ko": "모두 환영합니다. 우리의 2분기 결과와 전망을 설명하겠습니다.",
            "zh": "欢迎大家。我将带领大家了解我们的第二季度结果和展望。",
            "ja": "皆さん、ようこそ。私たちのQ2の結果と見通しを説明します。",
            "vi": "Chào mừng mọi người. Tôi sẽ đi qua kết quả Q2 và triển vọng của chúng tôi."
          }
        },
        {
          "role": "user",
          "text": "Thanks for the transparency in presenting these figures.",
          "translations": {
            "ko": "이러한 숫자를 제시하는데 있어 투명성에 감사드립니다.",
            "zh": "感谢你在呈现这些数字时的透明度。",
            "ja": "これらの数字を透明に提示していただき、ありがとうございます。",
            "vi": "Cảm ơn sự minh bạch trong việc trình bày những con số này."
          }
        },
        {
          "role": "ai",
          "text": "Revenue grew 27 percent year-over-year, exceeding projections.",
          "translations": {
            "ko": "수익은 전년 대비 27퍼센트 성장하여 예상치를 초과했습니다.",
            "zh": "收入同比增长了27%，超过了预期。",
            "ja": "収益は前年比27％増となり、予測を上回りました。",
            "vi": "Doanh thu tăng 27 phần trăm so với cùng kỳ năm trước, vượt quá dự báo."
          }
        },
        {
          "role": "user",
          "text": "What factors drove the APAC enterprise growth specifically?",
          "translations": {
            "ko": "APAC 기업 성장을 특히 이끈 요인은 무엇인가요?",
            "zh": "是什么因素驱动了亚太企业的特定增长？",
            "ja": "APACのエンタープライズ成長を特に推進した要因は何ですか？",
            "vi": "Những yếu tố nào đã thúc đẩy sự tăng trưởng của doanh nghiệp APAC cụ thể?"
          }
        },
        {
          "role": "ai",
          "text": "Gross margin held steady despite cost pressures in logistics.",
          "translations": {
            "ko": "물류에서의 비용 압박에도 불구하고 매출 총이익률은 안정적이었습니다.",
            "zh": "尽管物流成本压力，毛利率仍保持稳定。",
            "ja": "物流のコスト圧力にもかかわらず、粗利益率は安定していました。",
            "vi": "Biên độ lợi nhuận duy trì ổn định mặc dù áp lực chi phí trong logistics."
          }
        },
        {
          "role": "user",
          "text": "How sustainable is the margin stability given inflationary trends?",
          "translations": {
            "ko": "인플레이션 추세를 고려하면 이익률의 안정성이 얼마나 지속 가능한가요?",
            "zh": "鉴于通货膨胀趋势，利润率的稳定性能持续多久？",
            "ja": "インフレーショントレンドを考慮に入れると、マージンの安定性は持続可能ですか？",
            "vi": "Độ ổn định của biên lợi nhuận có bền vững trong bối cảnh xu hướng lạm phát không?"
          }
        },
        {
          "role": "ai",
          "text": "Churn declined by 11 percent, indicating improved retention.",
          "translations": {
            "ko": "이탈률은 11퍼센트 감소하여 보유율이 개선되었습니다.",
            "zh": "流失率下降了11%，表明保留率有所提高。",
            "ja": "チャーンは11％減少し、リテンションが改善したことを示しています。",
            "vi": "Tỷ lệ churn giảm 11 phần trăm, cho thấy sự cải thiện về việc giữ chân khách hàng."
          }
        },
        {
          "role": "user",
          "text": "Is the churn improvement consistent across segments?",
          "translations": {
            "ko": "이탈률 개선이 세그먼트 전반에 일관되게 나타나나요?",
            "zh": "流失率的改善在各个部门都是一致的吗？",
            "ja": "チャーンの改善はすべてのセグメントで一貫していますか？",
            "vi": "Sự cải thiện churn có đồng đều trên các phân khúc không?"
          }
        },
        {
          "role": "ai",
          "text": "We saw strong performance in APAC, especially within enterprise accounts.",
          "translations": {
            "ko": "APAC 지역에서 특히 기업 계정에서 강력한 성과를 보았습니다.",
            "zh": "我们在亚太地区看到了强劲的表现，特别是在企业账户中。",
            "ja": "APAC地域で特にエンタープライズアカウント内で強いパフォーマンスを見ました。",
            "vi": "Chúng tôi đã thấy hiệu suất mạnh mẽ ở khu vực APAC, đặc biệt là trong các tài khoản doanh nghiệp."
          }
        },
        {
          "role": "user",
          "text": "R&D acceleration is great—are there hiring constraints?",
          "translations": {
            "ko": "R&D 가속화는 좋은데, 채용 제약 사항이 있나요?",
            "zh": "研发加速很好——有招聘限制吗？",
            "ja": "R&Dの加速は素晴らしいですが、採用に制約はありますか？",
            "vi": "Tăng tốc R&D rất tốt - có ràng buộc tuyển dụng nào không?"
          }
        },
        {
          "role": "ai",
          "text": "R&D spend increased as we accelerated roadmap delivery.",
          "translations": {
            "ko": "로드맵 배송을 가속화함에 따라 R&D 지출이 증가했습니다.",
            "zh": "随着我们加速路线图的交付，研发支出增加了。",
            "ja": "ロードマップの配信を加速したため、R&Dの支出が増加しました。",
            "vi": "Chi tiêu R&D tăng khi chúng tôi tăng tốc độ triển khai lộ trình."
          }
        },
        {
          "role": "user",
          "text": "What’s the rationale behind the guidance adjustment?",
          "translations": {
            "ko": "가이던스 조정의 논리는 무엇인가요?",
            "zh": "指导调整背后的理由是什么？",
            "ja": "ガイダンスの調整の背後にある理由は何ですか？",
            "vi": "Lý do điều chỉnh hướng dẫn là gì?"
          }
        },
        {
          "role": "ai",
          "text": "We’ve expanded our strategic partnerships in fintech and healthcare.",
          "translations": {
            "ko": "우리는 핀테크와 헬스케어 분야에서의 전략적 파트너십을 확대했습니다.",
            "zh": "我们已经扩大了在金融科技和医疗保健领域的战略合作伙伴关系。",
            "ja": "フィンテックとヘルスケアで戦略的パートナーシップを拡大しました。",
            "vi": "Chúng tôi đã mở rộng các đối tác chiến lược trong lĩnh vực fintech và chăm sóc sức khỏe."
          }
        },
        {
          "role": "user",
          "text": "How are you thinking about capital deployment in H2?",
          "translations": {
            "ko": "H2에서 자본 배치에 대해 어떻게 생각하고 있나요?",
            "zh": "你如何考虑下半年的资本部署？",
            "ja": "H2の資本配分についてどのように考えていますか？",
            "vi": "Bạn đang nghĩ gì về việc triển khai vốn trong H2?"
          }
        },
        {
          "role": "ai",
          "text": "We revised our FY guidance upward to reflect new bookings momentum.",
          "translations": {
            "ko": "새로운 예약 추세를 반영하여 우리의 FY 가이던스를 상향 조정했습니다.",
            "zh": "我们上调了全年指导，以反映新的预订动力。",
            "ja": "新規予約の勢いを反映して、FYのガイダンスを上方修正しました。",
            "vi": "Chúng tôi đã điều chỉnh hướng dẫn FY lên để phản ánh đà đặt phòng mới."
          }
        },
        {
          "role": "user",
          "text": "Can you elaborate on the fintech partnership impact?",
          "translations": {
            "ko": "핀테크 파트너십의 영향에 대해 자세히 설명해주실 수 있나요?",
            "zh": "你能详细说明金融科技合作的影响吗？",
            "ja": "フィンテックパートナーシップの影響について詳しく説明していただけますか？",
            "vi": "Bạn có thể giải thích rõ hơn về tác động của đối tác fintech?"
          }
        },
        {
          "role": "ai",
          "text": "The cash position remains strong, with runway extending past 24 months.",
          "translations": {
            "ko": "현금 위치는 강하게 유지되며, 실행 기간은 24개월을 넘어섭니다.",
            "zh": "现金位置保持强劲，预计可维持超过24个月。",
            "ja": "現金ポジションは引き続き強く、ランウェイは24ヶ月以上に延びています。",
            "vi": "Vị thế tiền mặt vẫn mạnh, với đường băng kéo dài hơn 24 tháng."
          }
        },
        {
          "role": "user",
          "text": "What’s the customer acquisition cost trend this quarter?",
          "translations": {
            "ko": "이번 분기의 고객 획득 비용 추세는 어떻게 되나요?",
            "zh": "本季度的客户获取成本趋势如何？",
            "ja": "今四半期の顧客獲得コストのトレンドは何ですか？",
            "vi": "Xu hướng chi phí thu hút khách hàng trong quý này là gì?"
          }
        },
        {
          "role": "ai",
          "text": "I’ll now open the floor for questions on the numbers or strategic direction.",
          "translations": {
            "ko": "이제 숫자나 전략적 방향에 대한 질문을 위해 바닥을 열겠습니다.",
            "zh": "我现在将开放提问环节，欢迎就财务数据或战略方向提问。",
            "ja": "これから数字や戦略的方向性についての質問を受け付けます。",
            "vi": "Tôi sẽ mở cửa cho các câu hỏi về số liệu hoặc hướng chiến lược."
          }
        },
        {
          "role": "user",
          "text": "Everything looks solid. Appreciate the clarity today.",
          "translations": {
            "ko": "모든 것이 탄탄해 보입니다. 오늘의 명확성에 감사드립니다.",
            "zh": "一切看起来都很稳固。感谢你今天的清晰解释。",
            "ja": "全てが順調に見えます。今日の明確さに感謝します。",
            "vi": "Mọi thứ đều ổn định. Cảm ơn sự rõ ràng hôm nay."
          }
        }
      ]
    },
    {
      "description": {
        "ko": "조직 개편 계획 제안",
        "zh": "提出一个组织重组计划",
        "ja": "組織再編計画を提案する",
        "vi": "Đề xuất kế hoạch tái cấu trúc tổ chức"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Thank you all for attending this internal strategy session.",
          "translations": {
            "ko": "이 내부 전략 세션에 참석해 주신 모든 분들께 감사드립니다.",
            "zh": "感谢大家参加这次内部战略会议。",
            "ja": "この内部戦略セッションに参加していただきありがとうございます。",
            "vi": "Cảm ơn tất cả mọi người đã tham dự buổi họp chiến lược nội bộ này."
          }
        },
        {
          "role": "user",
          "text": "Thanks for outlining the rationale clearly.",
          "translations": {
            "ko": "논리를 명확하게 설명해주셔서 감사합니다.",
            "zh": "感谢你清楚地阐述了理由。",
            "ja": "理由を明確に説明していただきありがとうございます。",
            "vi": "Cảm ơn bạn đã giải thích rõ ràng lý do."
          }
        },
        {
          "role": "ai",
          "text": "Today, I’ll walk you through our proposed restructuring model.",
          "translations": {
            "ko": "오늘, 제안된 개편 모델을 소개하겠습니다.",
            "zh": "今天，我将向你们介绍我们提出的重组模型。",
            "ja": "今日は、提案された再編モデルについて説明します。",
            "vi": "Hôm nay, tôi sẽ hướng dẫn bạn qua mô hình tái cấu trúc đề xuất của chúng tôi."
          }
        },
        {
          "role": "user",
          "text": "What’s the expected timeline for full rollout?",
          "translations": {
            "ko": "전체 롤아웃에 대한 예상 시간표는 어떻게 되나요?",
            "zh": "完全推出的预期时间表是什么？",
            "ja": "完全な展開の予想タイムラインは何ですか？",
            "vi": "Dự kiến thời gian triển khai hoàn toàn là bao lâu?"
          }
        },
        {
          "role": "ai",
          "text": "The goal is to reduce silos and improve cross-functional collaboration.",
          "translations": {
            "ko": "목표는 사이로를 줄이고 기능 간 협업을 향상시키는 것입니다.",
            "zh": "目标是减少信息孤岛，提高跨功能协作。",
            "ja": "目標は、シロ化を減らし、横断的な協力を改善することです。",
            "vi": "Mục tiêu là giảm bớt các phân khu và cải thiện sự hợp tác chéo chức năng."
          }
        },
        {
          "role": "user",
          "text": "How will employee roles and scopes change?",
          "translations": {
            "ko": "직원의 역할과 범위는 어떻게 변하게 될까요?",
            "zh": "员工的角色和范围将如何变化？",
            "ja": "従業員の役割と範囲はどのように変わりますか？",
            "vi": "Vai trò và phạm vi của nhân viên sẽ thay đổi như thế nào?"
          }
        },
        {
          "role": "ai",
          "text": "We’re suggesting a shift from a regional to a product-based org structure.",
          "translations": {
            "ko": "우리는 지역 기반에서 제품 기반의 조직 구조로 전환을 제안하고 있습니다.",
            "zh": "我们建议从区域结构转变为以产品为基础的组织结构。",
            "ja": "地域ベースから製品ベースの組織構造へのシフトを提案しています。",
            "vi": "Chúng tôi đề xuất thay đổi từ cấu trúc tổ chức khu vực sang cấu trúc tổ chức dựa trên sản phẩm."
          }
        },
        {
          "role": "user",
          "text": "Do we foresee talent attrition risks from this shift?",
          "translations": {
            "ko": "이런 변화로 인해 인재 이탈 위험이 예상되나요?",
            "zh": "我们是否预见到这种转变会带来人才流失的风险？",
            "ja": "このシフトからの人材流出リスクは予見されますか？",
            "vi": "Chúng ta có dự đoán rủi ro mất nhân tài từ sự thay đổi này không?"
          }
        },
        {
          "role": "ai",
          "text": "This would streamline decision-making and resource allocation.",
          "translations": {
            "ko": "이것은 의사결정과 자원 배치를 간소화할 것입니다.",
            "zh": "这将简化决策过程和资源分配。",
            "ja": "これにより、意思決定とリソース配分が効率化されます。",
            "vi": "Điều này sẽ tối ưu hóa quyết định và phân bổ nguồn lực."
          }
        },
        {
          "role": "user",
          "text": "Can you share examples of product-based success elsewhere?",
          "translations": {
            "ko": "제품 기반의 성공 사례를 공유해주실 수 있나요?",
            "zh": "你能分享一些基于产品的成功案例吗？",
            "ja": "他の場所での製品ベースの成功例を共有していただけますか？",
            "vi": "Bạn có thể chia sẻ các ví dụ về thành công dựa trên sản phẩm ở nơi khác không?"
          }
        },
        {
          "role": "ai",
          "text": "We’ve analyzed reporting lines and mapped potential overlaps.",
          "translations": {
            "ko": "우리는 보고 라인을 분석하고 잠재적 중복을 매핑했습니다.",
            "zh": "我们已经分析了汇报线，并映射了可能的重叠。",
            "ja": "報告ラインを分析し、潜在的な重複をマッピングしました。",
            "vi": "Chúng tôi đã phân tích các dòng báo cáo và xác định các vùng chồng chéo tiềm năng."
          }
        },
        {
          "role": "user",
          "text": "Will finance teams remain centralized?",
          "translations": {
            "ko": "재무 팀은 중앙 집중화를 유지하게 될까요?",
            "zh": "财务团队会保持集中化吗？",
            "ja": "財務チームは中央集権化されたままですか？",
            "vi": "Các nhóm tài chính sẽ vẫn tập trung không?"
          }
        },
        {
          "role": "ai",
          "text": "The impact assessment includes short-term disruption and long-term gains.",
          "translations": {
            "ko": "영향 평가에는 단기적인 혼란과 장기적인 이익이 포함됩니다.",
            "zh": "影响评估包括短期干扰和长期收益。",
            "ja": "影響評価には、短期的な混乱と長期的な利益が含まれます。",
            "vi": "Đánh giá tác động bao gồm sự gián đoạn ngắn hạn và lợi ích dài hạn."
          }
        },
        {
          "role": "user",
          "text": "What communication strategy will accompany the transition?",
          "translations": {
            "ko": "이전을 동반할 커뮤니케이션 전략은 무엇인가요?",
            "zh": "过渡期间会采取什么样的沟通策略？",
            "ja": "移行に伴うコミュニケーション戦略は何ですか？",
            "vi": "Chiến lược giao tiếp nào sẽ đi kèm với quá trình chuyển đổi?"
          }
        },
        {
          "role": "ai",
          "text": "We’ll implement in phases, starting with engineering and product.",
          "translations": {
            "ko": "우리는 엔지니어링과 제품부터 시작하여 단계적으로 구현할 것입니다.",
            "zh": "我们将分阶段实施，从工程和产品开始。",
            "ja": "エンジニアリングと製品から始めて、段階的に実装します。",
            "vi": "Chúng tôi sẽ triển khai theo từng giai đoạn, bắt đầu với kỹ thuật và sản phẩm."
          }
        },
        {
          "role": "user",
          "text": "How will this affect performance reviews?",
          "translations": {
            "ko": "이것은 성과 평가에 어떤 영향을 미치게 될까요?",
            "zh": "这将如何影响绩效评估？",
            "ja": "これはパフォーマンスレビューにどのように影響しますか？",
            "vi": "Điều này sẽ ảnh hưởng như thế nào đến việc đánh giá hiệu suất?"
          }
        },
        {
          "role": "ai",
          "text": "Legal and HR are aligned and ready to support the transition.",
          "translations": {
            "ko": "법률 및 인사팀은 이전을 지원하기 위해 준비되어 있습니다.",
            "zh": "法务和人力资源部门已经就支持过渡达成一致。",
            "ja": "法務と人事は一致しており、移行をサポートする準備ができています。",
            "vi": "Pháp lý và HR đều đã thống nhất và sẵn sàng hỗ trợ quá trình chuyển đổi."
          }
        },
        {
          "role": "user",
          "text": "Glad to hear HR is aligned early.",
          "translations": {
            "ko": "HR이 일찍이 일치했다는 소식을 들어 기쁩니다.",
            "zh": "很高兴听到人力资源部门已经早早地达成了一致。",
            "ja": "HRが早期に一致していると聞いてうれしいです。",
            "vi": "Rất vui khi nghe HR đã thống nhất từ sớm."
          }
        },
        {
          "role": "ai",
          "text": "Let’s review the implementation roadmap and feedback loop.",
          "translations": {
            "ko": "구현 로드맵과 피드백 루프를 검토해봅시다.",
            "zh": "让我们回顾一下实施路线图和反馈循环。",
            "ja": "実装のロードマップとフィードバックループを見直しましょう。",
            "vi": "Hãy xem lại lộ trình triển khai và vòng phản hồi."
          }
        },
        {
          "role": "user",
          "text": "Looking forward to reviewing the roadmap in detail.",
          "translations": {
            "ko": "로드맵을 자세히 검토하는 것을 기대하고 있습니다.",
            "zh": "期待详细审查路线图。",
            "ja": "ロードマップを詳細に見直すことを楽しみにしています。",
            "vi": "Mong chờ xem lại lộ trình chi tiết."
          }
        }
      ]
    },
    {
      "description": {
        "ko": "인수 후 통합 업데이트 발표",
        "zh": "提供并购后整合的更新情况",
        "ja": "買収後の統合アップデートを発表します",
        "vi": "Trình bày cập nhật về việc hòa nhập sau khi mua lại."
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Let’s begin with a quick overview of our integration progress.",
          "translations": {
            "ko": "우리의 통합 진행 상황에 대한 간단한 개요부터 시작해봅시다.",
            "zh": "让我们从对我们整合进度的快速概述开始。",
            "ja": "私たちの統合進捗の簡単な概要から始めましょう。",
            "vi": "Hãy bắt đầu với tổng quan nhanh về tiến trình hòa nhập của chúng ta."
          }
        },
        {
          "role": "user",
          "text": "Appreciate the concise update.",
          "translations": {
            "ko": "간결한 업데이트에 감사드립니다.",
            "zh": "感谢您的简洁更新。",
            "ja": "簡潔なアップデートに感謝します。",
            "vi": "Đánh giá cao bản cập nhật ngắn gọn."
          }
        },
        {
          "role": "ai",
          "text": "We’ve finalized team alignment across key functions.",
          "translations": {
            "ko": "주요 기능 간 팀 정렬을 완료했습니다.",
            "zh": "我们已经在关键职能中确定了团队的对齐。",
            "ja": "主要な機能間でチームの整列を最終化しました。",
            "vi": "Chúng tôi đã hoàn thiện việc thống nhất nhóm trên các chức năng chính."
          }
        },
        {
          "role": "user",
          "text": "What hurdles remain in tech consolidation?",
          "translations": {
            "ko": "기술 통합에서 남아있는 장애물은 무엇인가요?",
            "zh": "技术整合中还有什么障碍？",
            "ja": "テック統合にはどのような障害が残っていますか？",
            "vi": "Những trở ngại nào còn tồn tại trong việc hợp nhất công nghệ?"
          }
        },
        {
          "role": "ai",
          "text": "Tech stack consolidation is 60 percent complete.",
          "translations": {
            "ko": "기술 스택 통합이 60퍼센트 완료되었습니다.",
            "zh": "技术栈整合已完成60%。",
            "ja": "テックスタックの統合は60％完了しています。",
            "vi": "Việc hợp nhất ngăn xếp công nghệ đã hoàn thành 60%."
          }
        },
        {
          "role": "user",
          "text": "How are we measuring cultural alignment?",
          "translations": {
            "ko": "문화적 일치를 어떻게 측정하고 있나요?",
            "zh": "我们如何衡量文化的一致性？",
            "ja": "文化的な整合性はどのように測定していますか？",
            "vi": "Chúng ta đang đo lường sự thống nhất văn hóa như thế nào?"
          }
        },
        {
          "role": "ai",
          "text": "Culture onboarding sessions have started with positive feedback.",
          "translations": {
            "ko": "문화적 온보딩 세션이 긍정적인 피드백과 함께 시작되었습니다.",
            "zh": "文化入职培训已经开始，并得到了积极的反馈。",
            "ja": "文化的なオンボーディングセッションが始まり、ポジティブなフィードバックが得られています。",
            "vi": "Các buổi hòa nhập văn hóa đã bắt đầu với phản hồi tích cực."
          }
        },
        {
          "role": "user",
          "text": "Are there any churn risks in customer accounts?",
          "translations": {
            "ko": "고객 계정에서 이탈 위험이 있나요?",
            "zh": "在客户账户中有任何流失风险吗？",
            "ja": "顧客アカウントにチャーンリスクはありますか？",
            "vi": "Có rủi ro nào về việc khách hàng rời bỏ không?"
          }
        },
        {
          "role": "ai",
          "text": "We’ve integrated sales pipelines and reporting tools.",
          "translations": {
            "ko": "판매 파이프라인과 보고 도구를 통합했습니다.",
            "zh": "我们已经整合了销售管道和报告工具。",
            "ja": "営業パイプラインとレポーティングツールを統合しました。",
            "vi": "Chúng tôi đã hòa nhập các pipeline bán hàng và công cụ báo cáo."
          }
        },
        {
          "role": "user",
          "text": "Great to see key accounts stabilized.",
          "translations": {
            "ko": "주요 계정이 안정화된 것을 보니 좋습니다.",
            "zh": "很高兴看到关键账户已经稳定。",
            "ja": "主要なアカウントが安定しているのを見るのは素晴らしいです。",
            "vi": "Thật tuyệt khi thấy các tài khoản chính đã ổn định."
          }
        },
        {
          "role": "ai",
          "text": "Key accounts have been retained during the transition.",
          "translations": {
            "ko": "주요 계정은 전환 기간 동안 유지되었습니다.",
            "zh": "在过渡期间，关键账户已被保留。",
            "ja": "移行期間中に主要なアカウントを維持しました。",
            "vi": "Các tài khoản chính đã được giữ lại trong quá trình chuyển đổi."
          }
        },
        {
          "role": "user",
          "text": "Were there any major system migration issues?",
          "translations": {
            "ko": "주요 시스템 이전 문제가 있었나요?",
            "zh": "有没有任何重大的系统迁移问题？",
            "ja": "大きなシステム移行の問題はありましたか？",
            "vi": "Có vấn đề lớn nào về việc di chuyển hệ thống không?"
          }
        },
        {
          "role": "ai",
          "text": "Redundancies were addressed with minimal disruption.",
          "translations": {
            "ko": "중복성은 최소한의 방해로 처리되었습니다.",
            "zh": "冗余问题已经得到了最小的干扰处理。",
            "ja": "冗長性は最小限の混乱で対処されました。",
            "vi": "Các trùng lặp đã được giải quyết với sự gián đoạn tối thiểu."
          }
        },
        {
          "role": "user",
          "text": "NPS tracking sounds like a solid metric.",
          "translations": {
            "ko": "NPS 추적이 탄탄한 지표로 보입니다.",
            "zh": "NPS跟踪听起来是一个可靠的指标。",
            "ja": "NPS追跡は堅実な指標のようです。",
            "vi": "Việc theo dõi NPS nghe có vẻ như một chỉ số đáng tin cậy."
          }
        },
        {
          "role": "ai",
          "text": "We’re tracking KPIs across revenue, retention, and NPS.",
          "translations": {
            "ko": "수익, 유지, NPS에 걸친 KPI를 추적하고 있습니다.",
            "zh": "我们正在跟踪收入、保留率和NPS的KPI。",
            "ja": "収益、保持、NPSを通じてKPIを追跡しています。",
            "vi": "Chúng tôi đang theo dõi KPIs trên doanh thu, sự giữ chân, và NPS."
          }
        },
        {
          "role": "user",
          "text": "Can we accelerate the sales enablement timeline?",
          "translations": {
            "ko": "판매 지원 타임라인을 가속화할 수 있을까요?",
            "zh": "我们能加快销售启用的时间表吗？",
            "ja": "営業の活性化のタイムラインを早めることはできますか？",
            "vi": "Chúng ta có thể đẩy nhanh thời gian kích hoạt bán hàng không?"
          }
        },
        {
          "role": "ai",
          "text": "Cross-training efforts are ongoing across product and support.",
          "translations": {
            "ko": "제품과 지원 간의 교차 훈련 노력이 계속되고 있습니다.",
            "zh": "产品和支持的跨培训工作正在进行中。",
            "ja": "製品とサポートを通じてのクロストレーニングの努力が続いています。",
            "vi": "Các nỗ lực đào tạo chéo đang diễn ra trên sản phẩm và hỗ trợ."
          }
        },
        {
          "role": "user",
          "text": "How are cross-functional teams adjusting?",
          "translations": {
            "ko": "교차 기능 팀은 어떻게 적응하고 있나요?",
            "zh": "跨职能团队的调整情况如何？",
            "ja": "クロス機能チームはどのように調整していますか？",
            "vi": "Các nhóm chức năng chéo đang điều chỉnh như thế nào?"
          }
        },
        {
          "role": "ai",
          "text": "Next, I’ll walk through the remaining 60-day milestones.",
          "translations": {
            "ko": "다음으로, 남은 60일 마일스톤을 살펴보겠습니다.",
            "zh": "接下来，我将介绍剩下的60天里的里程碑。",
            "ja": "次に、残りの60日間のマイルストーンを説明します。",
            "vi": "Tiếp theo, tôi sẽ đi qua các mục tiêu trong 60 ngày còn lại."
          }
        },
        {
          "role": "user",
          "text": "Looking forward to hitting those 60-day targets.",
          "translations": {
            "ko": "그 60일 목표를 달성하는 것을 기대하고 있습니다.",
            "zh": "期待达成那些60天的目标。",
            "ja": "その60日間の目標を達成することを楽しみにしています。",
            "vi": "Mong chờ đạt được các mục tiêu trong 60 ngày."
          }
        }
      ]
    },
    {
      "description": {
        "ko": "새로운 엔터프라이즈 파트너십 기회 제안",
        "zh": "提出一个新的企业合作机会",
        "ja": "新しいエンタープライズパートナーシップの機会を提案します",
        "vi": "Đưa ra cơ hội hợp tác doanh nghiệp mới."
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "We’ve identified a promising partnership opportunity with Orion Group.",
          "translations": {
            "ko": "오리온 그룹과의 유망한 파트너십 기회를 발견했습니다.",
            "zh": "我们已经确定了与Orion集团的一个有前景的合作机会。",
            "ja": "オライオングループとの有望なパートナーシップの機会を特定しました。",
            "vi": "Chúng tôi đã xác định một cơ hội hợp tác hứa hẹn với Orion Group."
          }
        },
        {
          "role": "user",
          "text": "Interesting. Orion seems like a strong complement.",
          "translations": {
            "ko": "흥미롭군요. 오리온은 강력한 보완 요소로 보입니다.",
            "zh": "有趣。Orion看起来是一个强大的补充。",
            "ja": "面白い。オライオンは強力な補完と思われます。",
            "vi": "Thú vị. Orion có vẻ như là một bổ sung mạnh mẽ."
          }
        },
        {
          "role": "ai",
          "text": "Their enterprise reach complements our mid-market dominance.",
          "translations": {
            "ko": "그들의 엔터프라이즈 영역이 우리의 중소기업 시장 지배력을 보완합니다.",
            "zh": "他们的企业覆盖范围补充了我们在中型市场的主导地位。",
            "ja": "彼らのエンタープライズリーチは、私たちの中堅市場の支配を補完します。",
            "vi": "Sự tiếp cận doanh nghiệp của họ bổ sung cho sự thống trị thị trường trung cấp của chúng ta."
          }
        },
        {
          "role": "user",
          "text": "What’s the contingency if legal hits a delay?",
          "translations": {
            "ko": "법적 문제가 지연될 경우 비상 대책은 무엇인가요?",
            "zh": "如果法律方面出现延误，有什么应急措施？",
            "ja": "法務が遅延した場合の代替案は何ですか？",
            "vi": "Kế hoạch dự phòng nếu pháp lý gặp trở ngại là gì?"
          }
        },
        {
          "role": "ai",
          "text": "We propose a co-branded solution targeting financial institutions.",
          "translations": {
            "ko": "우리는 금융 기관을 대상으로 한 공동 브랜드 솔루션을 제안합니다.",
            "zh": "我们建议针对金融机构推出联合品牌解决方案。",
            "ja": "金融機関を対象とした共同ブランドのソリューションを提案します。",
            "vi": "Chúng tôi đề xuất một giải pháp đồng nhãn hiệu nhắm vào các tổ chức tài chính."
          }
        },
        {
          "role": "user",
          "text": "Is this our first co-branding initiative?",
          "translations": {
            "ko": "이것이 우리의 첫 번째 공동 브랜딩 계획인가요?",
            "zh": "这是我们的首个联合品牌推广活动吗？",
            "ja": "これは私たちの初めての共同ブランド化の取り組みですか？",
            "vi": "Đây có phải là sáng kiến liên kết thương hiệu đầu tiên của chúng ta không?"
          }
        },
        {
          "role": "ai",
          "text": "Technical integration has been scoped and deemed feasible.",
          "translations": {
            "ko": "기술 통합이 범위를 정하고 실행 가능하다고 판단되었습니다.",
            "zh": "技术整合已经进行了范围划定，并被认为是可行的。",
            "ja": "技術的な統合は範囲が定められ、実行可能と判断されました。",
            "vi": "Việc tích hợp kỹ thuật đã được xác định và được coi là khả thi."
          }
        },
        {
          "role": "user",
          "text": "What are the risks of channel conflict?",
          "translations": {
            "ko": "채널 충돌의 위험은 무엇인가요?",
            "zh": "渠道冲突的风险是什么？",
            "ja": "チャネルコンフリクトのリスクは何ですか？",
            "vi": "Những rủi ro của xung đột kênh là gì?"
          }
        },
        {
          "role": "ai",
          "text": "Joint GTM resources will be needed to ensure strong traction.",
          "translations": {
            "ko": "강력한 추진력을 보장하기 위해 공동 GTM 자원이 필요할 것입니다.",
            "zh": "需要联合GTM资源以确保强大的吸引力。",
            "ja": "強力なトラクションを確保するためには、共同GTMリソースが必要になります。",
            "vi": "Sẽ cần nguồn lực GTM chung để đảm bảo sức kéo mạnh."
          }
        },
        {
          "role": "user",
          "text": "How are we modeling revenue attribution?",
          "translations": {
            "ko": "우리는 어떻게 수익 분배를 모델링하고 있나요?",
            "zh": "我们如何建模收入归因？",
            "ja": "収益の帰属はどのようにモデリングしていますか？",
            "vi": "Chúng ta đang mô hình hóa việc gán doanh thu như thế nào?"
          }
        },
        {
          "role": "ai",
          "text": "Revenue potential exceeds $8M over 18 months.",
          "translations": {
            "ko": "18개월 동안의 수익 가능성은 800만 달러를 초과합니다.",
            "zh": "收入潜力在18个月内超过800万美元。",
            "ja": "収益の可能性は18ヶ月で800万ドルを超えます。",
            "vi": "Tiềm năng doanh thu vượt quá 8 triệu đô la trong 18 tháng."
          }
        },
        {
          "role": "user",
          "text": "Do they have similar contract cycles?",
          "translations": {
            "ko": "그들도 비슷한 계약 주기를 가지고 있나요?",
            "zh": "他们的合同周期是否相似？",
            "ja": "彼らは同様の契約サイクルを持っていますか？",
            "vi": "Họ có chu kỳ hợp đồng tương tự không?"
          }
        },
        {
          "role": "ai",
          "text": "Legal due diligence has begun, with no red flags so far.",
          "translations": {
            "ko": "법적 심사가 시작되었고, 지금까지는 문제가 없습니다.",
            "zh": "法律尽职调查已经开始，到目前为止没有发现任何问题。",
            "ja": "法的なデューデリジェンスが始まり、これまでのところ赤旗はありません。",
            "vi": "Việc kiểm tra pháp lý đã bắt đầu, chưa có cảnh báo đỏ nào cho đến nay."
          }
        },
        {
          "role": "user",
          "text": "What’s our fallback if technical timelines slip?",
          "translations": {
            "ko": "기술적인 일정이 지연될 경우 우리의 대체 방안은 무엇인가요?",
            "zh": "如果技术时间表出现滑动，我们的备选方案是什么？",
            "ja": "技術的なタイムラインが滑った場合のフォールバックは何ですか？",
            "vi": "Nếu thời gian kỹ thuật trượt dài, chúng ta sẽ dự phòng như thế nào?"
          }
        },
        {
          "role": "ai",
          "text": "We’ll require executive alignment before proceeding further.",
          "translations": {
            "ko": "더 나아가기 전에 경영진의 일치가 필요합니다.",
            "zh": "在进一步进行之前，我们需要获得高级管理层的一致意见。",
            "ja": "さらに進む前に、エグゼクティブの一致が必要になります。",
            "vi": "Chúng ta sẽ yêu cầu sự đồng lòng của ban giám đốc trước khi tiếp tục."
          }
        },
        {
          "role": "user",
          "text": "Have they agreed to joint press activities?",
          "translations": {
            "ko": "그들이 공동 언론 활동에 동의했나요?",
            "zh": "他们是否同意进行联合新闻活动？",
            "ja": "彼らは共同でのプレス活動に同意しましたか？",
            "vi": "Họ đã đồng ý với các hoạt động báo chí chung chưa?"
          }
        },
        {
          "role": "ai",
          "text": "Marketing and product teams are excited about the synergies.",
          "translations": {
            "ko": "마케팅 팀과 제품 팀은 시너지에 대해 흥분하고 있습니다.",
            "zh": "市场和产品团队对协同效应感到兴奋。",
            "ja": "マーケティングチームと製品チームは、シナジーに興奮しています。",
            "vi": "Các đội ngũ Marketing và Sản phẩm đang rất hào hứng về sự hợp tác."
          }
        },
        {
          "role": "user",
          "text": "Excited to see this develop.",
          "translations": {
            "ko": "이것이 발전하는 것을 보게 되어 기쁩니다.",
            "zh": "期待看到这个发展。",
            "ja": "この発展を楽しみにしています。",
            "vi": "Rất mong chờ xem sự phát triển này."
          }
        },
        {
          "role": "ai",
          "text": "Let’s review the partnership terms and next steps.",
          "translations": {
            "ko": "파트너십 조건과 다음 단계를 검토해봅시다.",
            "zh": "让我们回顾一下合作条款和下一步的步骤。",
            "ja": "パートナーシップの条件と次のステップを見直しましょう。",
            "vi": "Hãy xem xét lại các điều khoản đối tác và các bước tiếp theo."
          }
        },
        {
          "role": "user",
          "text": "Let’s align on stakeholder approvals next.",
          "translations": {
            "ko": "다음으로 이해당사자들의 승인에 대해 일치시키자.",
            "zh": "让我们接下来对利益相关者的批准进行一致。",
            "ja": "次に、ステークホルダーの承認について合意しましょう。",
            "vi": "Hãy đồng lòng về việc phê duyệt của các bên liên quan tiếp theo."
          }
        }
      ]
    },
    {
      "description": {
        "ko": "이사회에 ESG 전략 개요 제시",
        "zh": "向董事会概述ESG策略",
        "ja": "取締役会にESG戦略を提示",
        "vi": "Trình bày chiến lược ESG cho hội đồng quản trị"
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Today’s session focuses on our evolving ESG commitments.",
          "translations": {
            "ko": "오늘의 세션은 우리의 변화하는 ESG 약속에 초점을 맞추고 있습니다.",
            "zh": "今天的会议将重点讨论我们不断发展的ESG承诺。",
            "ja": "今日のセッションは、進化するESGへのコミットメントに焦点を当てています。",
            "vi": "Phiên họp hôm nay tập trung vào cam kết ESG đang phát triển của chúng ta."
          }
        },
        {
          "role": "user",
          "text": "Thanks for the structured update.",
          "translations": {
            "ko": "체계적인 업데이트에 감사드립니다.",
            "zh": "感谢你的有条理的更新。",
            "ja": "構造化されたアップデートをありがとう。",
            "vi": "Cảm ơn vì đã cập nhật một cách có tổ chức."
          }
        },
        {
          "role": "ai",
          "text": "We’ve outlined short-term goals across all three pillars.",
          "translations": {
            "ko": "우리는 세 가지 주요 분야에서 단기 목표를 설정했습니다.",
            "zh": "我们已经在所有三个支柱上制定了短期目标。",
            "ja": "すべての3つの柱にわたる短期目標を明確にしました。",
            "vi": "Chúng tôi đã xác định mục tiêu ngắn hạn trên cả ba trụ cột."
          }
        },
        {
          "role": "user",
          "text": "Are there baseline numbers for emissions tracking?",
          "translations": {
            "ko": "배출량 추적을 위한 기준 수치가 있나요?",
            "zh": "对于排放跟踪，有基线数据吗？",
            "ja": "排出量の追跡のための基準数値はありますか？",
            "vi": "Có số liệu cơ bản cho việc theo dõi lượng khí thải không?"
          }
        },
        {
          "role": "ai",
          "text": "For environment, we’re targeting a 40 percent emissions cut by 2026.",
          "translations": {
            "ko": "환경 측면에서는 2026년까지 배출량을 40퍼센트 줄이는 것을 목표로 하고 있습니다.",
            "zh": "对于环境，我们的目标是到2026年将排放量减少40%。",
            "ja": "環境面では、2026年までに排出量を40パーセント削減することを目指しています。",
            "vi": "Về môi trường, chúng tôi đang nhắm đến việc cắt giảm 40 phần trăm lượng khí thải vào năm 2026."
          }
        },
        {
          "role": "user",
          "text": "How will DEI goals be measured across teams?",
          "translations": {
            "ko": "DEI 목표는 팀 간에 어떻게 측정될 것인가요?",
            "zh": "DEI目标如何在各个团队中进行测量？",
            "ja": "DEIの目標はチーム間でどのように測定されますか？",
            "vi": "Mục tiêu DEI sẽ được đo lường như thế nào trên các đội ngũ?"
          }
        },
        {
          "role": "ai",
          "text": "Socially, we’re increasing DEI initiatives and local community support.",
          "translations": {
            "ko": "사회적으로는 DEI 활동을 늘리고 지역 사회 지원을 강화하고 있습니다.",
            "zh": "在社会方面，我们正在增加DEI倡议和对本地社区的支持。",
            "ja": "社会的には、DEIの取り組みと地元コミュニティの支援を増やしています。",
            "vi": "Về mặt xã hội, chúng tôi đang tăng cường các sáng kiến DEI và hỗ trợ cộng đồng địa phương."
          }
        },
        {
          "role": "user",
          "text": "What does board oversight expansion entail?",
          "translations": {
            "ko": "이사회 감독 확대는 어떤 것을 포함하나요?",
            "zh": "董事会监督扩展包含什么？",
            "ja": "取締役会の監督拡大は何を意味しますか？",
            "vi": "Việc mở rộng giám sát hội đồng quản trị bao gồm những gì?"
          }
        },
        {
          "role": "ai",
          "text": "Governance updates include expanding independent board oversight.",
          "translations": {
            "ko": "거버넌스 업데이트에는 독립적인 이사회 감독의 확대가 포함됩니다.",
            "zh": "治理更新包括扩大独立董事会的监督。",
            "ja": "ガバナンスの更新には、独立した取締役会の監督を拡大することが含まれます。",
            "vi": "Cập nhật quản trị bao gồm việc mở rộng giám sát của hội đồng quản trị độc lập."
          }
        },
        {
          "role": "user",
          "text": "Is third-party auditing part of the plan?",
          "translations": {
            "ko": "제3자 감사가 계획의 일부인가요?",
            "zh": "第三方审计是否是计划的一部分？",
            "ja": "第三者監査は計画の一部ですか？",
            "vi": "Việc kiểm toán bên thứ ba có là một phần của kế hoạch không?"
          }
        },
        {
          "role": "ai",
          "text": "We’ve conducted a double materiality assessment to guide priorities.",
          "translations": {
            "ko": "우리는 우선 순위를 정하기 위해 이중 재료 평가를 실시했습니다.",
            "zh": "我们已经进行了双重物质性评估以指导优先事项。",
            "ja": "優先事項を決定するために、ダブルマテリアリティ評価を実施しました。",
            "vi": "Chúng tôi đã tiến hành đánh giá vật liệu kép để hướng dẫn ưu tiên."
          }
        },
        {
          "role": "user",
          "text": "How are we engaging employees in ESG efforts?",
          "translations": {
            "ko": "우리는 어떻게 직원들을 ESG 노력에 참여시키고 있나요?",
            "zh": "我们如何让员工参与ESG工作？",
            "ja": "ESGの取り組みに従業員をどのように関与させていますか？",
            "vi": "Chúng ta đang tham gia như thế nào vào các nỗ lực ESG của nhân viên?"
          }
        },
        {
          "role": "ai",
          "text": "Reporting will follow GRI and SASB frameworks.",
          "translations": {
            "ko": "보고는 GRI와 SASB 프레임워크를 따를 것입니다.",
            "zh": "报告将遵循GRI和SASB框架。",
            "ja": "レポーティングはGRIとSASBのフレームワークに従います。",
            "vi": "Báo cáo sẽ tuân theo các khung GRI và SASB."
          }
        },
        {
          "role": "user",
          "text": "Do we anticipate investor pressure on timelines?",
          "translations": {
            "ko": "우리는 투자자들이 일정에 대해 압박을 가할 것으로 예상하나요?",
            "zh": "我们是否预计投资者会对时间表施压？",
            "ja": "投資家からのタイムラインに対する圧力を予想していますか？",
            "vi": "Chúng ta có dự kiến áp lực từ nhà đầu tư về thời gian không?"
          }
        },
        {
          "role": "ai",
          "text": "We’re benchmarking against sector leaders and global best practices.",
          "translations": {
            "ko": "우리는 업계 선두주자와 세계 최고의 사례를 벤치마킹하고 있습니다.",
            "zh": "我们正在以行业领导者和全球最佳实践为基准进行对标。",
            "ja": "私たちは業界のリーダーと世界のベストプラクティスとのベンチマーキングを行っています。",
            "vi": "Chúng tôi đang đặt mục tiêu so sánh với các nhà lãnh đạo trong ngành và các phương pháp tốt nhất trên toàn cầu."
          }
        },
        {
          "role": "user",
          "text": "Will community support focus locally or globally?",
          "translations": {
            "ko": "커뮤니티 지원은 국내에 집중될 것인가, 아니면 전세계적으로 집중될 것인가요?",
            "zh": "社区支持将主要关注本地还是全球？",
            "ja": "コミュニティサポートは地元に焦点を当てるのか、それとも全世界に広げるのか？",
            "vi": "Sự hỗ trợ cộng đồng sẽ tập trung ở cấp địa phương hay toàn cầu?"
          }
        },
        {
          "role": "ai",
          "text": "Progress will be shared quarterly via a dedicated dashboard.",
          "translations": {
            "ko": "진행 상황은 전용 대시보드를 통해 분기별로 공유될 것입니다.",
            "zh": "进展将通过专用仪表板每季度共享。",
            "ja": "進捗は専用のダッシュボードを通じて四半期ごとに共有されます。",
            "vi": "Tiến trình sẽ được chia sẻ hàng quý thông qua một bảng điều khiển chuyên dụng."
          }
        },
        {
          "role": "user",
          "text": "How will ESG progress affect compensation?",
          "translations": {
            "ko": "ESG 진행 상황이 보상에 어떤 영향을 미칠 것인가요?",
            "zh": "ESG进展将如何影响薪酬？",
            "ja": "ESGの進捗は報酬にどのように影響しますか？",
            "vi": "Tiến trình ESG sẽ ảnh hưởng như thế nào đến mức độ bồi thường?"
          }
        },
        {
          "role": "ai",
          "text": "Open to questions before we finalize this roadmap.",
          "translations": {
            "ko": "이 로드맵을 확정하기 전에 질문을 받겠습니다.",
            "zh": "在我们确定这个路线图之前，欢迎提问。",
            "ja": "このロードマップを確定する前に質問を受け付けます。",
            "vi": "Mở cửa cho các câu hỏi trước khi chúng tôi hoàn thiện lộ trình này."
          }
        },
        {
          "role": "user",
          "text": "Looking forward to reviewing the dashboard metrics.",
          "translations": {
            "ko": "대시보드 지표를 검토하는 것을 기대하고 있습니다.",
            "zh": "期待回顾仪表板指标。",
            "ja": "ダッシュボードの指標を見直すことを楽しみにしています。",
            "vi": "Mong chờ xem xét các chỉ số trên bảng điều khiển."
          }
        }
      ]
    },
    {
      "description": {
        "ko": "글로벌 재브랜딩 전략을 소개합니다.",
        "zh": "引入全球品牌重塑策略。",
        "ja": "グローバルなリブランディング戦略の紹介",
        "vi": "Giới thiệu một chiến lược thay đổi thương hiệu toàn cầu."
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Let’s dive into the vision behind our global rebrand.",
          "translations": {
            "ko": "우리의 글로벌 재브랜딩에 대한 비전을 살펴봅시다.",
            "zh": "让我们深入了解我们全球品牌重塑背后的愿景。",
            "ja": "私たちのグローバルリブランドの背後にあるビジョンについて詳しく見てみましょう。",
            "vi": "Hãy cùng tìm hiểu về tầm nhìn đằng sau việc thay đổi thương hiệu toàn cầu của chúng tôi."
          }
        },
        {
          "role": "user",
          "text": "Thanks for presenting the rationale.",
          "translations": {
            "ko": "근거를 제시해주셔서 감사합니다.",
            "zh": "感谢你提供的理由。",
            "ja": "理由を提示していただきありがとうございます。",
            "vi": "Cảm ơn bạn đã trình bày lý do."
          }
        },
        {
          "role": "ai",
          "text": "Our current identity lacks consistency across regions.",
          "translations": {
            "ko": "현재의 우리 아이덴티티는 지역 간에 일관성이 부족합니다.",
            "zh": "我们当前的身份在各个地区缺乏一致性。",
            "ja": "現在の私たちのアイデンティティは地域間で一貫性がありません。",
            "vi": "Bản sắc hiện tại của chúng tôi thiếu sự nhất quán trên các khu vực."
          }
        },
        {
          "role": "user",
          "text": "How will you handle legacy assets during the transition?",
          "translations": {
            "ko": "전환 기간 동안 레거시 자산을 어떻게 처리할 것인가요?",
            "zh": "在过渡期间，你将如何处理遗留资产？",
            "ja": "移行期間中に既存の資産をどのように取り扱いますか？",
            "vi": "Bạn sẽ xử lý tài sản kế thừa như thế nào trong quá trình chuyển đổi?"
          }
        },
        {
          "role": "ai",
          "text": "The new brand system focuses on simplicity and flexibility.",
          "translations": {
            "ko": "새로운 브랜드 시스템은 단순성과 유연성에 초점을 맞추고 있습니다.",
            "zh": "新的品牌系统注重简单性和灵活性。",
            "ja": "新しいブランドシステムはシンプルさと柔軟性に焦点を当てています。",
            "vi": "Hệ thống thương hiệu mới tập trung vào sự đơn giản và linh hoạt."
          }
        },
        {
          "role": "user",
          "text": "Will there be a phased rollout by market?",
          "translations": {
            "ko": "시장별로 단계적으로 출시될 예정인가요?",
            "zh": "是否会按市场分阶段推出？",
            "ja": "市場ごとに段階的な展開が行われる予定ですか？",
            "vi": "Có phải sẽ có sự triển khai theo từng giai đoạn theo thị trường không?"
          }
        },
        {
          "role": "ai",
          "text": "We’ll roll out updated visual assets and tone guidelines.",
          "translations": {
            "ko": "우리는 업데이트된 시각 자산과 톤 가이드라인을 출시할 것입니다.",
            "zh": "我们将推出更新的视觉资产和语气指南。",
            "ja": "私たちは更新されたビジュアル資産とトーンガイドラインを展開します。",
            "vi": "Chúng tôi sẽ triển khai các tài sản hình ảnh cập nhật và hướng dẫn về giọng điệu."
          }
        },
        {
          "role": "user",
          "text": "Do we anticipate brand confusion short term?",
          "translations": {
            "ko": "단기적으로 브랜드 혼란이 예상되나요?",
            "zh": "我们是否预计短期内会有品牌混淆？",
            "ja": "短期間でブランドの混乱が予想されますか？",
            "vi": "Chúng ta có dự đoán sự nhầm lẫn về thương hiệu trong ngắn hạn không?"
          }
        },
        {
          "role": "ai",
          "text": "Research shows strong resonance with the new concept.",
          "translations": {
            "ko": "연구 결과는 새로운 개념에 대한 강한 공감을 보여줍니다.",
            "zh": "研究显示新概念与市场强烈共鸣。",
            "ja": "研究結果は新しいコンセプトに強い共感を示しています。",
            "vi": "Nghiên cứu cho thấy sự cộng hưởng mạnh mẽ với khái niệm mới."
          }
        },
        {
          "role": "user",
          "text": "Are tone guidelines tailored by region?",
          "translations": {
            "ko": "톤 가이드라인은 지역별로 맞춤화되나요?",
            "zh": "语气指南是否会根据地区进行定制？",
            "ja": "トーンガイドラインは地域ごとにカスタマイズされていますか？",
            "vi": "Các hướng dẫn về giọng điệu có được điều chỉnh theo khu vực không?"
          }
        },
        {
          "role": "ai",
          "text": "We’re refreshing the logo, palette, and messaging hierarchy.",
          "translations": {
            "ko": "로고, 팔레트, 메시지 계층 구조를 새롭게 만들고 있습니다.",
            "zh": "我们正在刷新标志、色板和信息层次结构。",
            "ja": "ロゴ、パレット、メッセージング階層をリフレッシュしています。",
            "vi": "Chúng tôi đang làm mới logo, bảng màu và hệ thống thông điệp."
          }
        },
        {
          "role": "user",
          "text": "What are the top KPIs for tracking success?",
          "translations": {
            "ko": "성공을 추적하기 위한 주요 KPI는 무엇인가요?",
            "zh": "跟踪成功的主要KPI是什么？",
            "ja": "成功を追跡するための主要なKPIは何ですか？",
            "vi": "Những KPI hàng đầu để theo dõi thành công là gì?"
          }
        },
        {
          "role": "ai",
          "text": "Internal training for brand adoption begins next month.",
          "translations": {
            "ko": "브랜드 채택을 위한 내부 교육이 다음 달에 시작됩니다.",
            "zh": "品牌采用的内部培训将于下个月开始。",
            "ja": "ブランドの採用に向けた社内研修は来月から始まります。",
            "vi": "Đào tạo nội bộ cho việc tiếp nhận thương hiệu sẽ bắt đầu vào tháng tới."
          }
        },
        {
          "role": "user",
          "text": "Can we preview sample materials early?",
          "translations": {
            "ko": "샘플 자료를 미리 볼 수 있을까요?",
            "zh": "我们可以提前预览样品材料吗？",
            "ja": "サンプル素材を早期にプレビューすることは可能ですか？",
            "vi": "Chúng ta có thể xem trước các tài liệu mẫu sớm không?"
          }
        },
        {
          "role": "ai",
          "text": "This change supports our push into international markets.",
          "translations": {
            "ko": "이 변화는 우리가 국제 시장으로 밀어붙이는 것을 지원합니다.",
            "zh": "这次变化支持我们进军国际市场的推动。",
            "ja": "この変更は私たちの国際市場への進出を支援します。",
            "vi": "Sự thay đổi này hỗ trợ cho việc chúng tôi mở rộng vào thị trường quốc tế."
          }
        },
        {
          "role": "user",
          "text": "How are you aligning with external agencies?",
          "translations": {
            "ko": "외부 기관과 어떻게 조정하고 있나요?",
            "zh": "你如何与外部机构对齐？",
            "ja": "外部エージェンシーとどのように調整していますか？",
            "vi": "Bạn đang điều chỉnh như thế nào với các cơ quan bên ngoài?"
          }
        },
        {
          "role": "ai",
          "text": "All materials will be localized and culturally adapted.",
          "translations": {
            "ko": "모든 자료는 현지화되고 문화적으로 적응될 것입니다.",
            "zh": "所有材料都将进行本地化和文化适应。",
            "ja": "全ての資料はローカライズされ、文化に適応されます。",
            "vi": "Tất cả các tài liệu sẽ được địa phương hóa và thích nghi với văn hóa."
          }
        },
        {
          "role": "user",
          "text": "Will internal assets be audited for compliance?",
          "translations": {
            "ko": "내부 자산은 준수를 위해 감사될 것인가요?",
            "zh": "内部资产是否会进行合规性审计？",
            "ja": "内部資産はコンプライアンスのために監査されますか？",
            "vi": "Có phải tài sản nội bộ sẽ được kiểm tra vì tuân thủ không?"
          }
        },
        {
          "role": "ai",
          "text": "We’ll track brand perception metrics post-launch.",
          "translations": {
            "ko": "출시 후 브랜드 인식 지표를 추적할 것입니다.",
            "zh": "我们将在发布后跟踪品牌认知度指标。",
            "ja": "ローンチ後にブランドの認知度を追跡します。",
            "vi": "Chúng tôi sẽ theo dõi các chỉ số về nhận thức thương hiệu sau khi ra mắt."
          }
        },
        {
          "role": "user",
          "text": "Looking forward to seeing the new identity live.",
          "translations": {
            "ko": "새로운 아이덴티티를 실제로 보는 것을 기대하고 있습니다.",
            "zh": "期待看到新身份的实际效果。",
            "ja": "新しいアイデンティティが実際に見られることを楽しみにしています。",
            "vi": "Mong chờ thấy bản sắc mới trực tiếp."
          }
        }
      ]
    },
    {
      "description": {
        "ko": "글로벌 타운홀 발표를 주도하고 있습니다.",
        "zh": "主持全球城市大厅演讲",
        "ja": "グローバルなタウンホールプレゼンテーションをリードする",
        "vi": "Dẫn dắt một cuộc họp cổ đông toàn cầu."
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Welcome, everyone, to our Q4 global town hall.",
          "translations": {
            "ko": "모두에게 환영합니다, 우리의 Q4 글로벌 타운홀에 오신 것을.",
            "zh": "欢迎大家参加我们的第四季度全球城市大厅。",
            "ja": "皆さん、私たちの第4四半期のグローバルタウンホールへようこそ。",
            "vi": "Chào mừng mọi người đến với cuộc họp cổ đông toàn cầu Q4 của chúng tôi."
          }
        },
        {
          "role": "user",
          "text": "Thanks for the inspiring summary.",
          "translations": {
            "ko": "영감을 주는 요약에 감사드립니다.",
            "zh": "感谢你的鼓舞人心的总结。",
            "ja": "鼓舞的なまとめ、ありがとうございました。",
            "vi": "Cảm ơn bạn vì bản tóm tắt đầy cảm hứng."
          }
        },
        {
          "role": "ai",
          "text": "We’ll start with highlights from each regional team.",
          "translations": {
            "ko": "각 지역 팀의 주요 사항부터 시작하겠습니다.",
            "zh": "我们将从每个地区团队的亮点开始。",
            "ja": "各地域チームのハイライトから始めましょう。",
            "vi": "Chúng ta sẽ bắt đầu với những điểm nổi bật từ mỗi đội khu vực."
          }
        },
        {
          "role": "user",
          "text": "What drove the spike in EMEA growth?",
          "translations": {
            "ko": "EMEA 성장률이 급증한 원인은 무엇인가요?",
            "zh": "是什么驱动了EMEA的增长激增？",
            "ja": "EMEAの成長に何が影響を与えたのですか？",
            "vi": "Điều gì đã thúc đẩy sự tăng trưởng mạnh mẽ ở EMEA?"
          }
        },
        {
          "role": "ai",
          "text": "Revenue grew 18 percent year-over-year globally.",
          "translations": {
            "ko": "전세계적으로 수익이 전년 대비 18퍼센트 성장했습니다.",
            "zh": "全球的收入同比增长了18%。",
            "ja": "収益は全世界で年間比18パーセント成長しました。",
            "vi": "Doanh thu tăng 18 phần trăm so với cùng kỳ năm trước trên toàn cầu."
          }
        },
        {
          "role": "user",
          "text": "Are the new HR programs already live?",
          "translations": {
            "ko": "새로운 인사 프로그램이 이미 실행되고 있나요?",
            "zh": "新的人力资源项目已经上线了吗？",
            "ja": "新しいHRプログラムはすでに稼働していますか？",
            "vi": "Các chương trình HR mới đã được triển khai chưa?"
          }
        },
        {
          "role": "ai",
          "text": "EMEA saw the highest growth, followed by LATAM.",
          "translations": {
            "ko": "EMEA가 가장 높은 성장률을 보였고, 그 다음으로는 LATAM이었습니다.",
            "zh": "EMEA的增长最高，其次是LATAM。",
            "ja": "EMEAが最も高い成長を見せ、次いでLATAMが続きました。",
            "vi": "EMEA đã chứng kiến sự tăng trưởng mạnh nhất, tiếp theo là LATAM."
          }
        },
        {
          "role": "user",
          "text": "Any challenges in LATAM we should address?",
          "translations": {
            "ko": "LATAM에서 우리가 해결해야 할 어려움이 있나요?",
            "zh": "在LATAM我们需要解决的挑战有哪些？",
            "ja": "LATAMで対処すべき課題は何かありますか？",
            "vi": "Có thách thức nào ở LATAM mà chúng ta cần giải quyết không?"
          }
        },
        {
          "role": "ai",
          "text": "Product velocity increased by 22 percent this quarter.",
          "translations": {
            "ko": "이번 분기에 제품 속도가 22퍼센트 증가했습니다.",
            "zh": "本季度产品速度增长了22%。",
            "ja": "この四半期、製品の速度は22パーセント増加しました。",
            "vi": "Tốc độ sản phẩm đã tăng 22 phần trăm trong quý này."
          }
        },
        {
          "role": "user",
          "text": "How are we measuring satisfaction improvement?",
          "translations": {
            "ko": "우리는 어떻게 만족도 향상을 측정하고 있나요?",
            "zh": "我们如何衡量满意度的提升？",
            "ja": "満足度の改善はどのように測定していますか？",
            "vi": "Chúng ta đang đo lường cải thiện sự hài lòng như thế nào?"
          }
        },
        {
          "role": "ai",
          "text": "Employee satisfaction rose for the third consecutive quarter.",
          "translations": {
            "ko": "직원 만족도가 연속 3분기 상승했습니다.",
            "zh": "员工满意度连续三个季度上升。",
            "ja": "従業員の満足度は3四半期連続で上昇しました。",
            "vi": "Sự hài lòng của nhân viên đã tăng trong ba quý liên tiếp."
          }
        },
        {
          "role": "user",
          "text": "Will automation affect team structures?",
          "translations": {
            "ko": "자동화가 팀 구조에 영향을 미칠까요?",
            "zh": "自动化会影响团队结构吗？",
            "ja": "自動化はチームの構造に影響を与えますか？",
            "vi": "Tự động hóa có ảnh hưởng đến cấu trúc đội ngũ không?"
          }
        },
        {
          "role": "ai",
          "text": "We’ve launched four new internal programs across HR and L&D.",
          "translations": {
            "ko": "인사 및 L&D 부서에서 4개의 새로운 내부 프로그램을 시작했습니다.",
            "zh": "我们在人力资源和学习发展部门推出了四个新的内部项目。",
            "ja": "HRとL&Dで4つの新しい内部プログラムを開始しました。",
            "vi": "Chúng tôi đã ra mắt bốn chương trình nội bộ mới trên HR và L&D."
          }
        },
        {
          "role": "user",
          "text": "Can we get visibility into Q1 hiring targets?",
          "translations": {
            "ko": "Q1 채용 목표에 대한 가시성을 얻을 수 있을까요?",
            "zh": "我们能看到第一季度的招聘目标吗？",
            "ja": "Q1の採用目標について見える化できますか？",
            "vi": "Chúng ta có thể nhìn thấy mục tiêu tuyển dụng của Q1 không?"
          }
        },
        {
          "role": "ai",
          "text": "Our priorities next quarter include hiring, compliance, and automation.",
          "translations": {
            "ko": "다음 분기의 우선 순위는 채용, 준수, 그리고 자동화입니다.",
            "zh": "下个季度的优先事项包括招聘、合规和自动化。",
            "ja": "来四半期の優先事項は、採用、コンプライアンス、自動化です。",
            "vi": "Ưu tiên của chúng tôi trong quý tới bao gồm tuyển dụng, tuân thủ và tự động hóa."
          }
        },
        {
          "role": "user",
          "text": "What were the biggest compliance wins?",
          "translations": {
            "ko": "가장 큰 준수성 성과는 무엇이었나요?",
            "zh": "最大的合规成功是什么？",
            "ja": "最大のコンプライアンスの勝利は何でしたか？",
            "vi": "Những chiến thắng tuân thủ lớn nhất là gì?"
          }
        },
        {
          "role": "ai",
          "text": "Let’s celebrate the wins and keep pushing forward.",
          "translations": {
            "ko": "성과를 축하하고 계속 앞으로 나아가자.",
            "zh": "让我们庆祝成功并继续前进。",
            "ja": "勝利を祝い、前進し続けましょう。",
            "vi": "Hãy chúc mừng những chiến thắng và tiếp tục tiến lên."
          }
        },
        {
          "role": "user",
          "text": "Great to hear about product velocity gains.",
          "translations": {
            "ko": "제품 속도 향상에 대해 듣게 되어 기쁩니다.",
            "zh": "很高兴听到产品速度的提升。",
            "ja": "製品の速度向上について聞くのは素晴らしい。",
            "vi": "Rất vui khi nghe về sự tăng trưởng tốc độ sản phẩm."
          }
        },
        {
          "role": "ai",
          "text": "Now, over to the panel for questions from the team.",
          "translations": {
            "ko": "이제, 팀에서의 질문을 위해 패널에게 넘기겠습니다.",
            "zh": "现在，让我们转到小组，听取团队的问题。",
            "ja": "さて、チームからの質問についてパネルに移ります。",
            "vi": "Bây giờ, chuyển sang bảng điều khiển để nhận câu hỏi từ đội ngũ."
          }
        },
        {
          "role": "user",
          "text": "Appreciate the transparency and momentum.",
          "translations": {
            "ko": "투명성과 추진력에 감사드립니다.",
            "zh": "感谢你的透明度和动力。",
            "ja": "透明性と勢いに感謝します。",
            "vi": "Đánh giá cao sự minh bạch và động lực."
          }
        }
      ]
    },
    {
      "description": {
        "ko": "다년간의 혁신 파이프라인을 검토 중입니다.",
        "zh": "正在审查多年创新管道。",
        "ja": "複数年にわたるイノベーションパイプラインのレビュー",
        "vi": "Đang xem xét dòng sản phẩm đổi mới nhiều năm."
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Today, we’ll share our three-year innovation roadmap.",
          "translations": {
            "ko": "오늘, 우리의 3년 혁신 로드맵을 공유하겠습니다.",
            "zh": "今天，我们将分享我们的三年创新路线图。",
            "ja": "今日、3年間のイノベーションロードマップを共有します。",
            "vi": "Hôm nay, chúng tôi sẽ chia sẻ lộ trình đổi mới ba năm của chúng tôi."
          }
        },
        {
          "role": "user",
          "text": "Exciting to see a structured innovation approach.",
          "translations": {
            "ko": "체계적인 혁신 접근법을 보게 되어 흥미롭습니다.",
            "zh": "看到有结构的创新方法真是令人兴奋。",
            "ja": "構造化されたイノベーションアプローチを見るのはエキサイティングです。",
            "vi": "Thật thú vị khi thấy một cách tiếp cận đổi mới có cấu trúc."
          }
        },
        {
          "role": "ai",
          "text": "We’ve prioritized themes around automation and AI enablement.",
          "translations": {
            "ko": "우리는 자동화와 AI 활성화를 중심으로 주제를 우선 순위로 두었습니다.",
            "zh": "我们已经优先考虑了围绕自动化和AI使能的主题。",
            "ja": "自動化とAI活用をテーマに優先順位をつけています。",
            "vi": "Chúng tôi đã ưu tiên các chủ đề xung quanh tự động hóa và khả năng kích hoạt AI."
          }
        },
        {
          "role": "user",
          "text": "How are themes chosen—customer signals or market gaps?",
          "translations": {
            "ko": "주제는 어떻게 선택되나요 - 고객의 신호인가요, 시장의 공백인가요?",
            "zh": "主题是如何选择的——客户信号还是市场空白？",
            "ja": "テーマの選択は、顧客のシグナルか市場のギャップか？",
            "vi": "Các chủ đề được chọn như thế nào - tín hiệu của khách hàng hay khoảng trống thị trường?"
          }
        },
        {
          "role": "ai",
          "text": "Each initiative has been ranked using impact-effort frameworks.",
          "translations": {
            "ko": "각 이니셔티브는 영향력-노력 프레임워크를 사용하여 순위가 매겨졌습니다.",
            "zh": "每个倡议都已经使用影响力-努力框架进行了排名。",
            "ja": "各イニシアチブは、インパクト-エフォートフレームワークを使用してランク付けされています。",
            "vi": "Mỗi sáng kiến đã được xếp hạng bằng khung công việc tác động-nỗ lực."
          }
        },
        {
          "role": "user",
          "text": "What’s the patent approval timeline look like?",
          "translations": {
            "ko": "특허 승인 시간표는 어떻게 생겼나요?",
            "zh": "专利审批的时间表是什么样的？",
            "ja": "特許の承認タイムラインはどのようになっていますか？",
            "vi": "Lộ trình phê duyệt bằng sáng chế trông như thế nào?"
          }
        },
        {
          "role": "ai",
          "text": "We’re co-developing key solutions with selected customers.",
          "translations": {
            "ko": "우리는 선정된 고객과 함께 핵심 솔루션을 공동 개발하고 있습니다.",
            "zh": "我们正在与选定的客户共同开发关键解决方案。",
            "ja": "選ばれた顧客とキーソリューションを共同開発しています。",
            "vi": "Chúng tôi đang cùng phát triển các giải pháp chính với các khách hàng được chọn."
          }
        },
        {
          "role": "user",
          "text": "How will we sunset low-impact ideas?",
          "translations": {
            "ko": "어떻게 영향력이 낮은 아이디어를 종료할 것인가요?",
            "zh": "我们将如何淘汰低影响力的想法？",
            "ja": "低インパクトのアイデアはどのように終了させますか？",
            "vi": "Chúng ta sẽ kết thúc như thế nào với những ý tưởng có tác động thấp?"
          }
        },
        {
          "role": "ai",
          "text": "R&D has aligned resources accordingly for fast-track initiatives.",
          "translations": {
            "ko": "R&D는 빠른 추진을 위해 자원을 적절히 조정하였습니다.",
            "zh": "研发部门已经相应地调整资源以快速推进倡议。",
            "ja": "R&Dは、ファストトラックイニシアチブに応じてリソースを整えています。",
            "vi": "R&D đã điều chỉnh nguồn lực phù hợp cho các sáng kiến nhanh chóng."
          }
        },
        {
          "role": "user",
          "text": "Is customer feedback embedded in reviews?",
          "translations": {
            "ko": "고객 피드백이 검토에 포함되어 있나요?",
            "zh": "客户反馈是否嵌入到评论中？",
            "ja": "顧客のフィードバックはレビューに組み込まれていますか？",
            "vi": "Phản hồi của khách hàng có được tích hợp trong đánh giá không?"
          }
        },
        {
          "role": "ai",
          "text": "We’ve applied for three patents tied to novel tech.",
          "translations": {
            "ko": "우리는 새로운 기술과 관련된 3개의 특허를 신청했습니다.",
            "zh": "我们已经申请了三项与新技术相关的专利。",
            "ja": "新技術に関連する3つの特許を申請しました。",
            "vi": "Chúng tôi đã nộp đơn cho ba bằng sáng chế liên quan đến công nghệ mới."
          }
        },
        {
          "role": "user",
          "text": "What happens if roadmap priorities shift mid-year?",
          "translations": {
            "ko": "중간에 로드맵 우선순위가 변경되면 어떻게 되나요?",
            "zh": "如果年中路线图优先级发生变化，会发生什么？",
            "ja": "ロードマップの優先順位が年間途中で変わるとどうなりますか？",
            "vi": "Điều gì xảy ra nếu ưu tiên lộ trình thay đổi giữa năm?"
          }
        },
        {
          "role": "ai",
          "text": "Quarterly checkpoints are planned with executive sponsors.",
          "translations": {
            "ko": "분기별 체크포인트는 경영진 스폰서와 함께 계획되었습니다.",
            "zh": "我们计划每季度与执行赞助人进行检查点。",
            "ja": "四半期ごとのチェックポイントは、エグゼクティブスポンサーと計画されています。",
            "vi": "Các điểm kiểm tra hàng quý được lên kế hoạch với các nhà tài trợ cấp cao."
          }
        },
        {
          "role": "user",
          "text": "Who governs sandbox access across teams?",
          "translations": {
            "ko": "팀 간에 샌드박스 접근을 관리하는 사람은 누구인가요?",
            "zh": "谁负责管理团队间的沙盒访问？",
            "ja": "チーム間でサンドボックスのアクセスを管理しているのは誰ですか？",
            "vi": "Ai quản lý quyền truy cập sandbox giữa các đội?"
          }
        },
        {
          "role": "ai",
          "text": "We’ve built a dedicated sandbox for experimental rollouts.",
          "translations": {
            "ko": "실험적인 롤아웃을 위한 전용 샌드박스를 구축했습니다.",
            "zh": "我们已经建立了一个专门的沙盒，用于实验性的推出。",
            "ja": "実験的なロールアウトのために専用のサンドボックスを作りました。",
            "vi": "Chúng tôi đã xây dựng một sandbox riêng biệt cho việc triển khai thử nghiệm."
          }
        },
        {
          "role": "user",
          "text": "Any concerns around IP protection?",
          "translations": {
            "ko": "IP 보호에 대한 우려가 있나요?",
            "zh": "对IP保护有任何担忧吗？",
            "ja": "IP保護に関する懸念はありますか？",
            "vi": "Có bất kỳ mối quan tâm nào về bảo vệ sở hữu trí tuệ không?"
          }
        },
        {
          "role": "ai",
          "text": "The goal is to balance risk with speed and differentiation.",
          "translations": {
            "ko": "목표는 위험과 속도 및 차별화를 균형있게 조절하는 것입니다.",
            "zh": "目标是在风险、速度和差异化之间找到平衡。",
            "ja": "目標は、リスクと速度、差別化のバランスをとることです。",
            "vi": "Mục tiêu là cân nhắc giữa rủi ro với tốc độ và sự khác biệt."
          }
        },
        {
          "role": "user",
          "text": "Appreciate the quarterly checkpoints.",
          "translations": {
            "ko": "분기별 체크포인트에 감사드립니다.",
            "zh": "感谢每季度的检查点。",
            "ja": "四半期ごとのチェックポイントに感謝します。",
            "vi": "Đánh giá cao các điểm kiểm tra hàng quý."
          }
        },
        {
          "role": "ai",
          "text": "Happy to walk through any of the pipeline clusters now.",
          "translations": {
            "ko": "지금 파이프라인 클러스터 중 어느 것이든 자세히 설명해 드리겠습니다.",
            "zh": "很乐意现在就浏览任何管道集群。",
            "ja": "今すぐパイプラインクラスターのいずれかを説明することができます。",
            "vi": "Rất vui được giải thích qua bất kỳ nhóm pipeline nào ngay bây giờ."
          }
        },
        {
          "role": "user",
          "text": "Let’s schedule follow-ups on cluster three.",
          "translations": {
            "ko": "클러스터 세 개에 대한 후속 조치를 스케줄하겠습니다.",
            "zh": "让我们安排对第三集群的后续跟进。",
            "ja": "クラスター3についてのフォローアップをスケジュールしましょう。",
            "vi": "Hãy lên lịch theo dõi tiếp theo cho nhóm ba."
          }
        }
      ]
    },
    {
      "description": {
        "ko": "연말 전략 검토를 제공합니다.",
        "zh": "提供年终战略回顾",
        "ja": "年末の戦略レビューを提供",
        "vi": "Cung cấp đánh giá chiến lược cuối năm."
      },
      "dialogues": [
        {
          "role": "ai",
          "text": "Let’s close the year by reflecting on our strategic goals.",
          "translations": {
            "ko": "우리의 전략적 목표를 되돌아보며 연말을 마무리합시다.",
            "zh": "让我们通过反思我们的战略目标来结束这一年。",
            "ja": "我々の戦略的な目標を反映して年を締めくくりましょう。",
            "vi": "Hãy kết thúc năm bằng cách suy ngẫm về mục tiêu chiến lược của chúng ta."
          }
        },
        {
          "role": "user",
          "text": "Appreciate the honest retrospective.",
          "translations": {
            "ko": "솔직한 회고에 감사드립니다.",
            "zh": "感谢诚实的回顾。",
            "ja": "正直な振り返りに感謝します。",
            "vi": "Đánh giá cao sự nhìn lại một cách trung thực."
          }
        },
        {
          "role": "ai",
          "text": "We met or exceeded 80 percent of our planned objectives.",
          "translations": {
            "ko": "우리는 계획된 목표의 80퍼센트 이상을 달성하거나 초과했습니다.",
            "zh": "我们实现或超过了我们计划目标的80%。",
            "ja": "我々の計画した目標の80％以上を達成または超えました。",
            "vi": "Chúng tôi đã đạt hoặc vượt mục tiêu đã lên kế hoạch 80%."
          }
        },
        {
          "role": "user",
          "text": "80 percent completion is a solid outcome.",
          "translations": {
            "ko": "80퍼센트의 완료는 탄탄한 성과입니다.",
            "zh": "80%的完成度是一个坚实的成果。",
            "ja": "80％の達成は素晴らしい結果です。",
            "vi": "Hoàn thành 80% là một kết quả tốt."
          }
        },
        {
          "role": "ai",
          "text": "Key wins include market expansion and process automation.",
          "translations": {
            "ko": "주요 성과에는 시장 확장과 프로세스 자동화가 포함됩니다.",
            "zh": "主要的胜利包括市场扩张和流程自动化。",
            "ja": "主な勝利には市場拡大とプロセス自動化が含まれます。",
            "vi": "Những chiến thắng chính bao gồm mở rộng thị trường và tự động hóa quy trình."
          }
        },
        {
          "role": "user",
          "text": "Automation wins are very impactful.",
          "translations": {
            "ko": "자동화 성과는 매우 큰 영향을 미칩니다.",
            "zh": "自动化的胜利影响深远。",
            "ja": "自動化の勝利は非常に大きな影響を及ぼします。",
            "vi": "Những chiến thắng trong tự động hóa rất có tác động."
          }
        },
        {
          "role": "ai",
          "text": "Customer satisfaction improved by 9 points across segments.",
          "translations": {
            "ko": "고객 만족도는 세그먼트 전반에 걸쳐 9포인트 향상되었습니다.",
            "zh": "客户满意度在各个细分市场提高了9点。",
            "ja": "カスタマーサティスファクションは、セグメント全体で9ポイント改善しました。",
            "vi": "Sự hài lòng của khách hàng đã cải thiện 9 điểm trong các phân khúc."
          }
        },
        {
          "role": "user",
          "text": "Noted on roadmap gaps—happy to help refine.",
          "translations": {
            "ko": "로드맵의 빈틈에 대해 기록했습니다 - 세부 사항을 정리하는데 기꺼이 도와드리겠습니다.",
            "zh": "已注意到路线图的缺口，很乐意帮助完善。",
            "ja": "ロードマップのギャップについては記録しました - 改善のお手伝いを喜んでします。",
            "vi": "Ghi nhận về lỗ hổng lộ trình - rất vui được giúp tinh chỉnh."
          }
        },
        {
          "role": "ai",
          "text": "We also made progress on sustainability and DEI fronts.",
          "translations": {
            "ko": "우리는 또한 지속 가능성과 DEI 분야에서도 진전을 이루었습니다.",
            "zh": "我们也在可持续性和DEI方面取得了进展。",
            "ja": "また、持続可能性とDEIの面でも進歩を遂げました。",
            "vi": "Chúng tôi cũng đã tiến bộ về mặt bền vững và DEI."
          }
        },
        {
          "role": "user",
          "text": "Which DEI metrics showed strongest movement?",
          "translations": {
            "ko": "어떤 DEI 지표가 가장 큰 변화를 보였나요?",
            "zh": "哪些DEI指标显示出最强的动态？",
            "ja": "DEIの指標の中で最も動きが強かったのはどれですか？",
            "vi": "Chỉ số DEI nào thể hiện sự thay đổi mạnh mẽ nhất?"
          }
        },
        {
          "role": "ai",
          "text": "Areas needing work include roadmap clarity and stakeholder comms.",
          "translations": {
            "ko": "개선이 필요한 부분에는 로드맵의 명확성과 이해당사자 커뮤니케이션이 포함됩니다.",
            "zh": "需要改进的领域包括路线图的清晰度和利益相关者的沟通。",
            "ja": "改善が必要な領域には、ロードマップの明確さとステークホルダーとのコミュニケーションが含まれます。",
            "vi": "Các lĩnh vực cần cải thiện bao gồm rõ ràng lộ trình và giao tiếp với các bên liên quan."
          }
        },
        {
          "role": "user",
          "text": "What’s driving the global ops priority next year?",
          "translations": {
            "ko": "내년에 글로벌 오퍼레이션 우선순위를 무엇이 주도하나요?",
            "zh": "明年全球运营优先级的驱动因素是什么？",
            "ja": "来年のグローバルオペレーションの優先事項を推進しているのは何ですか？",
            "vi": "Điều gì đang thúc đẩy ưu tiên toàn cầu vào năm sau?"
          }
        },
        {
          "role": "ai",
          "text": "We’ve drafted new goals to address these gaps in 2025.",
          "translations": {
            "ko": "2025년에 이러한 빈틈을 해결하기 위한 새로운 목표를 작성했습니다.",
            "zh": "我们已经起草了新的目标，以解决2025年的这些缺口。",
            "ja": "2025年にこれらのギャップを解消するための新たな目標を作成しました。",
            "vi": "Chúng tôi đã soạn thảo các mục tiêu mới để giải quyết những khoảng trống này vào năm 2025."
          }
        },
        {
          "role": "user",
          "text": "Will pricing changes affect contract renewals?",
          "translations": {
            "ko": "가격 변동이 계약 갱신에 영향을 미치나요?",
            "zh": "价格变动会影响合同续订吗？",
            "ja": "価格変更は契約更新に影響しますか？",
            "vi": "Việc thay đổi giá cả có ảnh hưởng đến việc gia hạn hợp đồng không?"
          }
        },
        {
          "role": "ai",
          "text": "Next year’s focus will include pricing strategy and global ops.",
          "translations": {
            "ko": "내년의 초점은 가격 전략과 글로벌 오퍼레이션을 포함할 것입니다.",
            "zh": "明年的重点将包括价格策略和全球运营。",
            "ja": "来年の焦点は価格戦略とグローバルオペレーションを含む予定です。",
            "vi": "Trọng tâm của năm sau sẽ bao gồm chiến lược giá cả và hoạt động toàn cầu."
          }
        },
        {
          "role": "user",
          "text": "Can we preview the 2025 draft goals?",
          "translations": {
            "ko": "2025년 초안 목표를 미리 볼 수 있나요?",
            "zh": "我们可以预览2025年的草案目标吗？",
            "ja": "2025年の目標案をプレビューできますか？",
            "vi": "Chúng ta có thể xem trước các mục tiêu dự thảo năm 2025 không?"
          }
        },
        {
          "role": "ai",
          "text": "We’ll hold Q1 workshops to refine execution plans.",
          "translations": {
            "ko": "Q1 워크샵을 통해 실행 계획을 세밀하게 조정할 예정입니다.",
            "zh": "我们将在第一季度举办研讨会，以完善执行计划。",
            "ja": "Q1のワークショップで実行計画を洗練する予定です。",
            "vi": "Chúng tôi sẽ tổ chức các buổi học Q1 để tinh chỉnh kế hoạch thực hiện."
          }
        },
        {
          "role": "user",
          "text": "Looking forward to Q1 planning sessions.",
          "translations": {
            "ko": "Q1 계획 세션을 기대하고 있습니다.",
            "zh": "期待第一季度的规划会议。",
            "ja": "Q1の計画セッションを楽しみにしています。",
            "vi": "Mong chờ các phiên họp lập kế hoạch Q1."
          }
        },
        {
          "role": "ai",
          "text": "Thanks to everyone for your efforts and resilience this year.",
          "translations": {
            "ko": "올해 여러분의 노력과 탄력성에 감사드립니다.",
            "zh": "感谢大家今年的努力和坚韧不拔。",
            "ja": "今年一年、皆さんの努力とレジリエンスに感謝します。",
            "vi": "Cảm ơn mọi người vì đã nỗ lực và kiên trì trong năm nay."
          }
        },
        {
          "role": "user",
          "text": "Thanks again for the leadership and vision.",
          "translations": {
            "ko": "다시 한번 리더십과 비전에 감사드립니다.",
            "zh": "再次感谢您的领导和远见。",
            "ja": "リーダーシップとビジョンに再度感謝します。",
            "vi": "Cảm ơn một lần nữa vì sự lãnh đạo và tầm nhìn."
          }
        }
      ]
    }
  ]
};