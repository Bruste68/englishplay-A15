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
          "en": "Rehearsing a presentation with a colleague",
          "ko": "동료와 발표 연습하기",
          "zh": "与同事排练演讲",
          "ja": "同僚とプレゼンテーションのリハーサルをする",
          "vi": "Luyện tập một bài thuyết trình với một đồng nghiệp"
        },
        "dialogues": [
          {
            "role": "ai",
            "text": "Thanks for joining me to rehearse.",
            "translations": {
              "ko": "연습에 함께 해줘서 고마워.",
              "zh": "感谢你陪我一起排练。",
              "ja": "リハーサルに参加してくれてありがとう。",
              "vi": "Cảm ơn bạn đã tham gia luyện tập cùng tôi.",
              "en": "Thanks for joining me to rehearse.",
            }
          },
          {
            "role": "user",
            "text": "No problem. Let’s walk through your opening.",
            "translations": {
              "ko": "문제 없어. 너의 시작 부분을 살펴보자.",
              "zh": "没问题。我们来过一遍你的开场白。",
              "ja": "問題ない。まずはあなたのオープニングを見てみよう。",
              "vi": "Không sao. Hãy xem qua phần mở đầu của bạn.",
              "en": "No problem. Let’s walk through your opening.",
            }
          },
          {
            "role": "ai",
            "text": "I’m starting with a story to grab attention.",
            "translations": {
              "ko": "관심을 끌기 위해 이야기로 시작할 거야.",
              "zh": "我会以一个故事作为开头，以吸引注意力。",
              "ja": "注意を引くために話から始めます。",
              "vi": "Tôi bắt đầu bằng một câu chuyện để thu hút sự chú ý.",
              "en": "I’m starting with a story to grab attention.",
            }
          },
          {
            "role": "user",
            "text": "Good choice. Just slow down a bit when you speak.",
            "translations": {
              "ko": "좋은 선택이야. 말할 때 조금 느리게 해.",
              "zh": "好主意。只是你说话的时候稍微慢一点。",
              "ja": "良い選択です。ただ、話す速度を少し落としてください。",
              "vi": "Lựa chọn tốt. Chỉ cần nói chậm lại một chút.",
              "en": "Good choice. Just slow down a bit when you speak.",
            }
          },
          {
            "role": "ai",
            "text": "Got it. Do the visuals match the flow?",
            "translations": {
              "ko": "알았어. 시각 자료가 흐름에 맞아?",
              "zh": "明白了。视觉效果是否与流程相匹配？",
              "ja": "了解しました。ビジュアルはフローに合っていますか？",
              "vi": "Đã hiểu. Các hình ảnh có phù hợp với dòng chảy không?",
              "en": "Got it. Do the visuals match the flow?",
            }
          },
          {
            "role": "user",
            "text": "Mostly, but slide 3 could be simplified.",
            "translations": {
              "ko": "대부분은 그렇지만, 3번 슬라이드는 단순화할 수 있을 것 같아.",
              "zh": "大部分是，但是第三张幻灯片可以简化一些。",
              "ja": "ほとんどは合っていますが、スライド3はもう少しシンプルにできます。",
              "vi": "Chủ yếu là có, nhưng slide 3 có thể được đơn giản hóa.",
              "en": "Mostly, but slide 3 could be simplified.",
            }
          },
          {
            "role": "ai",
            "text": "I’ll reduce the text and highlight key points.",
            "translations": {
              "ko": "텍스트를 줄이고 핵심 포인트를 강조할게.",
              "zh": "我会减少文字，突出关键点。",
              "ja": "テキストを減らして、キーポイントを強調します。",
              "vi": "Tôi sẽ giảm bớt văn bản và làm nổi bật các điểm chính.",
              "en": "I’ll reduce the text and highlight key points.",
            }
          },
          {
            "role": "user",
            "text": "Perfect. What about the data section?",
            "translations": {
              "ko": "완벽해. 데이터 섹션은 어때?",
              "zh": "完美。数据部分怎么样？",
              "ja": "完璧です。データセクションはどうですか？",
              "vi": "Hoàn hảo. Còn phần dữ liệu thì sao?",
              "en": "Perfect. What about the data section?",
            }
          },
          {
            "role": "ai",
            "text": "I’m using a bar chart to compare results.",
            "translations": {
              "ko": "결과를 비교하기 위해 막대 그래프를 사용하고 있어.",
              "zh": "我用柱状图来比较结果。",
              "ja": "結果を比較するために棒グラフを使用しています。",
              "vi": "Tôi đang sử dụng biểu đồ cột để so sánh kết quả.",
              "en": "I’m using a bar chart to compare results.",
            }
          },
          {
            "role": "user",
            "text": "Looks clear. Just explain the axis labels briefly.",
            "translations": {
              "ko": "명확해 보여. 축 라벨을 간단히 설명해줘.",
              "zh": "看起来很清晰。只是简单解释一下轴标签。",
              "ja": "分かりやすいですね。軸のラベルを簡単に説明してください。",
              "vi": "Rõ ràng. Chỉ cần giải thích ngắn gọn các nhãn trục.",
              "en": "Looks clear. Just explain the axis labels briefly.",
            }
          },
          {
            "role": "ai",
            "text": "Will do. How’s my pacing overall?",
            "translations": {
              "ko": "그렇게 할게. 전체적인 페이싱은 어때?",
              "zh": "我会的。我的节奏怎么样？",
              "ja": "了解しました。全体的に私のペーシングはどうですか？",
              "vi": "Tôi sẽ làm. Nhịp độ của tôi như thế nào?",
              "en": "Will do. How’s my pacing overall?",
            }
          },
          {
            "role": "user",
            "text": "Good, but keep an eye on the time.",
            "translations": {
              "ko": "좋아, 그러나 시간을 잘 지켜봐.",
              "zh": "很好，但是要注意时间。",
              "ja": "良いですが、時間を気にしてください。",
              "vi": "Tốt, nhưng hãy để ý đến thời gian.",
              "en": "Good, but keep an eye on the time.",
            }
          },
          {
            "role": "ai",
            "text": "Should I trim the Q&A to five minutes?",
            "translations": {
              "ko": "Q&A를 5분으로 줄여야 할까?",
              "zh": "我应该把问答环节缩短到五分钟吗？",
              "ja": "Q&Aを5分に短縮すべきですか？",
              "vi": "Tôi nên cắt giảm phần Q&A xuống còn năm phút không?",
              "en": "Should I trim the Q&A to five minutes?",
            }
          },
          {
            "role": "user",
            "text": "Yes, especially if we start late.",
            "translations": {
              "ko": "네, 특히 늦게 시작하면 그렇게 해야 해.",
              "zh": "是的，特别是如果我们开始晚了的话。",
              "ja": "はい、特に遅く始まる場合はそうです。",
              "vi": "Đúng, đặc biệt là nếu chúng ta bắt đầu muộn.",
              "en": "Yes, especially if we start late.",
            }
          },
          {
            "role": "ai",
            "text": "Thanks. I’ll add a clear summary slide at the end.",
            "translations": {
              "ko": "고마워. 마지막에 요약 슬라이드를 명확하게 추가할게.",
              "zh": "谢谢。我会在最后加一个清晰的总结幻灯片。",
              "ja": "ありがとう。最後に明確なまとめのスライドを追加します。",
              "vi": "Cảm ơn. Tôi sẽ thêm một slide tóm tắt rõ ràng ở cuối.",
              "en": "Thanks. I’ll add a clear summary slide at the end.",
            }
          },
          {
            "role": "user",
            "text": "That always helps the audience.",
            "translations": {
              "ko": "그것이 항상 관객에게 도움이 돼.",
              "zh": "这总是对观众有帮助的。",
              "ja": "それは常に観客にとって役立ちます。",
              "vi": "Điều đó luôn giúp ích cho khán giả.",
              "en": "That always helps the audience.",
            }
          },
          {
            "role": "ai",
            "text": "I appreciate your feedback.",
            "translations": {
              "ko": "피드백 감사합니다.",
              "zh": "我很感谢你的反馈。",
              "ja": "フィードバックをいただきありがとうございます。",
              "vi": "Tôi đánh giá cao phản hồi của bạn.",
              "en": "I appreciate your feedback.",
            }
          },
          {
            "role": "user",
            "text": "Happy to help! Good luck with the real thing.",
            "translations": {
              "ko": "도와드리게 돼서 기쁘네요! 실제로 잘 해낼 거야.",
              "zh": "很乐意帮忙！祝你真正演讲时好运。",
              "ja": "助けることができてうれしいです！本番頑張ってください。",
              "vi": "Rất vui được giúp đỡ! Chúc may mắn với phần thực tế.",
              "en": "Happy to help! Good luck with the real thing.",
            }
          },
          {
            "role": "ai",
            "text": "Thanks, I feel more confident now.",
            "translations": {
              "ko": "고마워, 이제 더 자신감이 생겼어.",
              "zh": "谢谢，我现在感觉更有信心了。",
              "ja": "ありがとう、今はもっと自信があります。",
              "vi": "Cảm ơn, tôi cảm thấy tự tin hơn bây giờ.",
              "en": "Thanks, I feel more confident now.",
            }
          },
          {
            "role": "user",
            "text": "You’ve got this!",
            "translations": {
              "ko": "넌 할 수 있어!",
              "zh": "你可以的！",
              "ja": "あなたなら大丈夫！",
              "vi": "Bạn đã làm được rồi!",
              "en": "You’ve got this!",
            }
          }
        ]
      },
      {
        "description": {
          "en": "Incorporating audience feedback",
          "ko": "관객의 피드백을 반영하기",
          "zh": "吸取观众的反馈",
          "ja": "観客のフィードバックを取り入れる",
          "vi": "Kết hợp phản hồi từ khán giả"
        },
        "dialogues": [
          {
            "role": "ai",
            "text": "Thanks for joining me to rehearse.",
            "translations": {
              "ko": "연습에 함께 해줘서 고마워.",
              "zh": "感谢你陪我一起排练。",
              "ja": "リハーサルに参加してくれてありがとう。",
              "vi": "Cảm ơn bạn đã tham gia luyện tập cùng tôi.",
              "en": "Thanks for joining me to rehearse.",
            }
          },
          {
            "role": "user",
            "text": "No problem. Let’s walk through your opening.",
            "translations": {
              "ko": "문제 없어. 너의 시작 부분을 살펴보자.",
              "zh": "没问题。我们来过一遍你的开场白。",
              "ja": "問題ない。まずはあなたのオープニングを見てみよう。",
              "vi": "Không sao. Hãy xem qua phần mở đầu của bạn.",
              "en": "No problem. Let’s walk through your opening.",
            }
          },
          {
            "role": "ai",
            "text": "I’m starting with a story to grab attention.",
            "translations": {
              "ko": "관심을 끌기 위해 이야기로 시작할 거야.",
              "zh": "我会以一个故事作为开头，以吸引注意力。",
              "ja": "注意を引くために話から始めます。",
              "vi": "Tôi bắt đầu bằng một câu chuyện để thu hút sự chú ý.",
              "en": "I’m starting with a story to grab attention.",
            }
          },
          {
            "role": "user",
            "text": "Good choice. Just slow down a bit when you speak.",
            "translations": {
              "ko": "좋은 선택이야. 말할 때 조금 느리게 해.",
              "zh": "好主意。只是你说话的时候稍微慢一点。",
              "ja": "良い選択です。ただ、話す速度を少し落としてください。",
              "vi": "Lựa chọn tốt. Chỉ cần nói chậm lại một chút.",
              "en": "Good choice. Just slow down a bit when you speak.",
            }
          },
          {
            "role": "ai",
            "text": "Got it. Do the visuals match the flow?",
            "translations": {
              "ko": "알았어. 시각 자료가 흐름에 맞아?",
              "zh": "明白了。视觉效果是否与流程相匹配？",
              "ja": "了解しました。ビジュアルはフローに合っていますか？",
              "vi": "Đã hiểu. Các hình ảnh có phù hợp với dòng chảy không?",
              "en": "Got it. Do the visuals match the flow?",
            }
          },
          {
            "role": "user",
            "text": "Mostly, but slide 3 could be simplified.",
            "translations": {
              "ko": "대부분은 그렇지만, 3번 슬라이드는 단순화할 수 있을 것 같아.",
              "zh": "大部分是，但是第三张幻灯片可以简化一些。",
              "ja": "ほとんどは合っていますが、スライド3はもう少しシンプルにできます。",
              "vi": "Chủ yếu là có, nhưng slide 3 có thể được đơn giản hóa.",
              "en": "Mostly, but slide 3 could be simplified.",
            }
          },
          {
            "role": "ai",
            "text": "I’ll reduce the text and highlight key points.",
            "translations": {
              "ko": "텍스트를 줄이고 핵심 포인트를 강조할게.",
              "zh": "我会减少文字，突出关键点。",
              "ja": "テキストを減らして、キーポイントを強調します。",
              "vi": "Tôi sẽ giảm bớt văn bản và làm nổi bật các điểm chính.",
              "en": "I’ll reduce the text and highlight key points.",
            }
          },
          {
            "role": "user",
            "text": "Perfect. What about the data section?",
            "translations": {
              "ko": "완벽해. 데이터 섹션은 어때?",
              "zh": "完美。数据部分怎么样？",
              "ja": "完璧です。データセクションはどうですか？",
              "vi": "Hoàn hảo. Còn phần dữ liệu thì sao?",
              "en": "Perfect. What about the data section?",
            }
          },
          {
            "role": "ai",
            "text": "I’m using a bar chart to compare results.",
            "translations": {
              "ko": "결과를 비교하기 위해 막대 그래프를 사용하고 있어.",
              "zh": "我用柱状图来比较结果。",
              "ja": "結果を比較するために棒グラフを使用しています。",
              "vi": "Tôi đang sử dụng biểu đồ cột để so sánh kết quả.",
              "en": "I’m using a bar chart to compare results.",
            }
          },
          {
            "role": "user",
            "text": "Looks clear. Just explain the axis labels briefly.",
            "translations": {
              "ko": "명확해 보여. 축 라벨을 간단히 설명해줘.",
              "zh": "看起来很清晰。只是简单解释一下轴标签。",
              "ja": "分かりやすいですね。軸のラベルを簡単に説明してください。",
              "vi": "Rõ ràng. Chỉ cần giải thích ngắn gọn các nhãn trục.",
              "en": "Looks clear. Just explain the axis labels briefly.",
            }
          },
          {
            "role": "ai",
            "text": "Will do. How’s my pacing overall?",
            "translations": {
              "ko": "그렇게 할게. 전체적인 페이싱은 어때?",
              "zh": "我会的。我的节奏怎么样？",
              "ja": "了解しました。全体的に私のペーシングはどうですか？",
              "vi": "Tôi sẽ làm. Nhịp độ của tôi như thế nào?",
              "en": "Will do. How’s my pacing overall?",
            }
          },
          {
            "role": "user",
            "text": "Good, but keep an eye on the time.",
            "translations": {
              "ko": "좋아, 그러나 시간을 잘 지켜봐.",
              "zh": "很好，但是要注意时间。",
              "ja": "良いですが、時間を気にしてください。",
              "vi": "Tốt, nhưng hãy để ý đến thời gian.",
              "en": "Good, but keep an eye on the time.",
            }
          },
          {
            "role": "ai",
            "text": "Should I trim the Q&A to five minutes?",
            "translations": {
              "ko": "Q&A를 5분으로 줄여야 할까?",
              "zh": "我应该把问答环节缩短到五分钟吗？",
              "ja": "Q&Aを5分に短縮すべきですか？",
              "vi": "Tôi nên cắt giảm phần Q&A xuống còn năm phút không?",
              "en": "Should I trim the Q&A to five minutes?",
            }
          },
          {
            "role": "user",
            "text": "Yes, especially if we start late.",
            "translations": {
              "ko": "네, 특히 늦게 시작하면 그렇게 해야 해.",
              "zh": "是的，特别是如果我们开始晚了的话。",
              "ja": "はい、特に遅く始まる場合はそうです。",
              "vi": "Đúng, đặc biệt là nếu chúng ta bắt đầu muộn.",
              "en": "Yes, especially if we start late.",
            }
          },
          {
            "role": "ai",
            "text": "Thanks. I’ll add a clear summary slide at the end.",
            "translations": {
              "ko": "고마워. 마지막에 요약 슬라이드를 명확하게 추가할게.",
              "zh": "谢谢。我会在最后加一个清晰的总结幻灯片。",
              "ja": "ありがとう。最後に明確なまとめのスライドを追加します。",
              "vi": "Cảm ơn. Tôi sẽ thêm một slide tóm tắt rõ ràng ở cuối.",
              "en": "Thanks. I’ll add a clear summary slide at the end.",
            }
          },
          {
            "role": "user",
            "text": "That always helps the audience.",
            "translations": {
              "ko": "그것이 항상 관객에게 도움이 돼.",
              "zh": "这总是对观众有帮助的。",
              "ja": "それは常に観客にとって役立ちます。",
              "vi": "Điều đó luôn giúp ích cho khán giả.",
              "en": "That always helps the audience.",
            }
          },
          {
            "role": "ai",
            "text": "I appreciate your feedback.",
            "translations": {
              "ko": "피드백 감사합니다.",
              "zh": "我很感谢你的反馈。",
              "ja": "フィードバックをいただきありがとうございます。",
              "vi": "Tôi đánh giá cao phản hồi của bạn.",
              "en": "I appreciate your feedback.",
            }
          },
          {
            "role": "user",
            "text": "Happy to help! Good luck with the real thing.",
            "translations": {
              "ko": "도와드리게 돼서 기쁘네요! 실제로 잘 해낼 거야.",
              "zh": "很乐意帮忙！祝你真正演讲时好运。",
              "ja": "助けることができてうれしいです！本番頑張ってください。",
              "vi": "Rất vui được giúp đỡ! Chúc may mắn với phần thực tế.",
              "en": "Happy to help! Good luck with the real thing.",
            }
          },
          {
            "role": "ai",
            "text": "Thanks, I feel more confident now.",
            "translations": {
              "ko": "고마워, 이제 더 자신감이 생겼어.",
              "zh": "谢谢，我现在感觉更有信心了。",
              "ja": "ありがとう、今はもっと自信があります。",
              "vi": "Cảm ơn, tôi cảm thấy tự tin hơn bây giờ.",
              "en": "Thanks, I feel more confident now.",
            }
          },
          {
            "role": "user",
            "text": "You’ve got this!",
            "translations": {
              "ko": "넌 할 수 있어!",
              "zh": "你可以的！",
              "ja": "あなたなら大丈夫！",
              "vi": "Bạn đã làm được rồi!",
              "en": "You’ve got this!",
            }
          }
        ]
      },
      {
        "description": {
          "en": "Presenting to an unfamiliar audience",
          "ko": "익숙하지 않은 관객에게 발표하기",
          "zh": "向不熟悉的观众演讲",
          "ja": "馴染みのない観客にプレゼンテーションする",
          "vi": "Thuyết trình cho một đối tượng không quen"
        },
        "dialogues": [
          {
            "role": "ai",
            "text": "Thanks for joining me to rehearse.",
            "translations": {
              "ko": "연습에 함께 해줘서 고마워.",
              "zh": "感谢你陪我一起排练。",
              "ja": "リハーサルに参加してくれてありがとう。",
              "vi": "Cảm ơn bạn đã tham gia luyện tập cùng tôi.",
              "en": "Thanks for joining me to rehearse.",
            }
          },
          {
            "role": "user",
            "text": "No problem. Let’s walk through your opening.",
            "translations": {
              "ko": "문제 없어. 너의 시작 부분을 살펴보자.",
              "zh": "没问题。我们来过一遍你的开场白。",
              "ja": "問題ない。まずはあなたのオープニングを見てみよう。",
              "vi": "Không sao. Hãy xem qua phần mở đầu của bạn.",
              "en": "No problem. Let’s walk through your opening.",
            }
          },
          {
            "role": "ai",
            "text": "I’m starting with a story to grab attention.",
            "translations": {
              "ko": "관심을 끌기 위해 이야기로 시작할 거야.",
              "zh": "我会以一个故事作为开头，以吸引注意力。",
              "ja": "注意を引くために話から始めます。",
              "vi": "Tôi bắt đầu bằng một câu chuyện để thu hút sự chú ý.",
              "en": "I’m starting with a story to grab attention.",
            }
          },
          {
            "role": "user",
            "text": "Good choice. Just slow down a bit when you speak.",
            "translations": {
              "ko": "좋은 선택이야. 말할 때 조금 느리게 해.",
              "zh": "好主意。只是你说话的时候稍微慢一点。",
              "ja": "良い選択です。ただ、話す速度を少し落としてください。",
              "vi": "Lựa chọn tốt. Chỉ cần nói chậm lại một chút.",
              "en": "Good choice. Just slow down a bit when you speak.",
            }
          },
          {
            "role": "ai",
            "text": "Got it. Do the visuals match the flow?",
            "translations": {
              "ko": "알았어. 시각 자료가 흐름에 맞아?",
              "zh": "明白了。视觉效果是否与流程相匹配？",
              "ja": "了解しました。ビジュアルはフローに合っていますか？",
              "vi": "Đã hiểu. Các hình ảnh có phù hợp với dòng chảy không?",
              "en": "Got it. Do the visuals match the flow?",
            }
          },
          {
            "role": "user",
            "text": "Mostly, but slide 3 could be simplified.",
            "translations": {
              "ko": "대부분은 그렇지만, 3번 슬라이드는 단순화할 수 있을 것 같아.",
              "zh": "大部分是，但是第三张幻灯片可以简化一些。",
              "ja": "ほとんどは合っていますが、スライド3はもう少しシンプルにできます。",
              "vi": "Chủ yếu là có, nhưng slide 3 có thể được đơn giản hóa.",
              "en": "Mostly, but slide 3 could be simplified.",
            }
          },
          {
            "role": "ai",
            "text": "I’ll reduce the text and highlight key points.",
            "translations": {
              "ko": "텍스트를 줄이고 핵심 포인트를 강조할게.",
              "zh": "我会减少文字，突出关键点。",
              "ja": "テキストを減らして、キーポイントを強調します。",
              "vi": "Tôi sẽ giảm bớt văn bản và làm nổi bật các điểm chính.",
              "en": "I’ll reduce the text and highlight key points.",
            }
          },
          {
            "role": "user",
            "text": "Perfect. What about the data section?",
            "translations": {
              "ko": "완벽해. 데이터 섹션은 어때?",
              "zh": "完美。数据部分怎么样？",
              "ja": "完璧です。データセクションはどうですか？",
              "vi": "Hoàn hảo. Còn phần dữ liệu thì sao?",
              "en": "Perfect. What about the data section?",
            }
          },
          {
            "role": "ai",
            "text": "I’m using a bar chart to compare results.",
            "translations": {
              "ko": "결과를 비교하기 위해 막대 그래프를 사용하고 있어.",
              "zh": "我用柱状图来比较结果。",
              "ja": "結果を比較するために棒グラフを使用しています。",
              "vi": "Tôi đang sử dụng biểu đồ cột để so sánh kết quả.",
              "en": "I’m using a bar chart to compare results.",
            }
          },
          {
            "role": "user",
            "text": "Looks clear. Just explain the axis labels briefly.",
            "translations": {
              "ko": "명확해 보여. 축 라벨을 간단히 설명해줘.",
              "zh": "看起来很清晰。只是简单解释一下轴标签。",
              "ja": "分かりやすいですね。軸のラベルを簡単に説明してください。",
              "vi": "Rõ ràng. Chỉ cần giải thích ngắn gọn các nhãn trục.",
              "en": "Looks clear. Just explain the axis labels briefly.",
            }
          },
          {
            "role": "ai",
            "text": "Will do. How’s my pacing overall?",
            "translations": {
              "ko": "그렇게 할게. 전체적인 페이싱은 어때?",
              "zh": "我会的。我的节奏怎么样？",
              "ja": "了解しました。全体的に私のペーシングはどうですか？",
              "vi": "Tôi sẽ làm. Nhịp độ của tôi như thế nào?",
              "en": "Will do. How’s my pacing overall?",
            }
          },
          {
            "role": "user",
            "text": "Good, but keep an eye on the time.",
            "translations": {
              "ko": "좋아, 그러나 시간을 잘 지켜봐.",
              "zh": "很好，但是要注意时间。",
              "ja": "良いですが、時間を気にしてください。",
              "vi": "Tốt, nhưng hãy để ý đến thời gian.",
              "en": "Good, but keep an eye on the time.",
            }
          },
          {
            "role": "ai",
            "text": "Should I trim the Q&A to five minutes?",
            "translations": {
              "ko": "Q&A를 5분으로 줄여야 할까?",
              "zh": "我应该把问答环节缩短到五分钟吗？",
              "ja": "Q&Aを5分に短縮すべきですか？",
              "vi": "Tôi nên cắt giảm phần Q&A xuống còn năm phút không?",
              "en": "Should I trim the Q&A to five minutes?",
            }
          },
          {
            "role": "user",
            "text": "Yes, especially if we start late.",
            "translations": {
              "ko": "네, 특히 늦게 시작하면 그렇게 해야 해.",
              "zh": "是的，特别是如果我们开始晚了的话。",
              "ja": "はい、特に遅く始まる場合はそうです。",
              "vi": "Đúng, đặc biệt là nếu chúng ta bắt đầu muộn.",
              "en": "Yes, especially if we start late.",
            }
          },
          {
            "role": "ai",
            "text": "Thanks. I’ll add a clear summary slide at the end.",
            "translations": {
              "ko": "고마워. 마지막에 요약 슬라이드를 명확하게 추가할게.",
              "zh": "谢谢。我会在最后加一个清晰的总结幻灯片。",
              "ja": "ありがとう。最後に明確なまとめのスライドを追加します。",
              "vi": "Cảm ơn. Tôi sẽ thêm một slide tóm tắt rõ ràng ở cuối.",
              "en": "Thanks. I’ll add a clear summary slide at the end.",
            }
          },
          {
            "role": "user",
            "text": "That always helps the audience.",
            "translations": {
              "ko": "그것이 항상 관객에게 도움이 돼.",
              "zh": "这总是对观众有帮助的。",
              "ja": "それは常に観客にとって役立ちます。",
              "vi": "Điều đó luôn giúp ích cho khán giả.",
              "en": "That always helps the audience.",
            }
          },
          {
            "role": "ai",
            "text": "I appreciate your feedback.",
            "translations": {
              "ko": "피드백 감사합니다.",
              "zh": "我很感谢你的反馈。",
              "ja": "フィードバックをいただきありがとうございます。",
              "vi": "Tôi đánh giá cao phản hồi của bạn.",
              "en": "I appreciate your feedback.",
            }
          },
          {
            "role": "user",
            "text": "Happy to help! Good luck with the real thing.",
            "translations": {
              "ko": "도와드리게 돼서 기쁘네요! 실제로 잘 해낼 거야.",
              "zh": "很乐意帮忙！祝你真正演讲时好运。",
              "ja": "助けることができてうれしいです！本番頑張ってください。",
              "vi": "Rất vui được giúp đỡ! Chúc may mắn với phần thực tế.",
              "en": "Happy to help! Good luck with the real thing.",
            }
          },
          {
            "role": "ai",
            "text": "Thanks, I feel more confident now.",
            "translations": {
              "ko": "고마워, 이제 더 자신감이 생겼어.",
              "zh": "谢谢，我现在感觉更有信心了。",
              "ja": "ありがとう、今はもっと自信があります。",
              "vi": "Cảm ơn, tôi cảm thấy tự tin hơn bây giờ.",
              "en": "Thanks, I feel more confident now.",
            }
          },
          {
            "role": "user",
            "text": "You’ve got this!",
            "translations": {
              "ko": "넌 할 수 있어!",
              "zh": "你可以的！",
              "ja": "あなたなら大丈夫！",
              "vi": "Bạn đã làm được rồi!",
              "en": "You’ve got this!",
            }
          }
        ]
      },
      {
        "description": {
          "en": "Dealing with technical issues during a presentation",
          "ko": "발표 중 기술적 문제 다루기",
          "zh": "在演讲中处理技术问题",
          "ja": "プレゼンテーション中の技術的な問題に対処する",
          "vi": "Xử lý vấn đề kỹ thuật trong quá trình thuyết trình"
        },
        "dialogues": [
          {
            "role": "ai",
            "text": "Thanks for joining me to rehearse.",
            "translations": {
              "ko": "연습에 함께 해줘서 고마워.",
              "zh": "感谢你陪我一起排练。",
              "ja": "リハーサルに参加してくれてありがとう。",
              "vi": "Cảm ơn bạn đã tham gia luyện tập cùng tôi.",
              "en": "Thanks for joining me to rehearse.",
            }
          },
          {
            "role": "user",
            "text": "No problem. Let’s walk through your opening.",
            "translations": {
              "ko": "문제 없어. 너의 시작 부분을 살펴보자.",
              "zh": "没问题。我们来过一遍你的开场白。",
              "ja": "問題ない。まずはあなたのオープニングを見てみよう。",
              "vi": "Không sao. Hãy xem qua phần mở đầu của bạn.",
              "en": "No problem. Let’s walk through your opening.",
            }
          },
          {
            "role": "ai",
            "text": "I’m starting with a story to grab attention.",
            "translations": {
              "ko": "관심을 끌기 위해 이야기로 시작할 거야.",
              "zh": "我会以一个故事作为开头，以吸引注意力。",
              "ja": "注意を引くために話から始めます。",
              "vi": "Tôi bắt đầu bằng một câu chuyện để thu hút sự chú ý.",
              "en": "I’m starting with a story to grab attention.",
            }
          },
          {
            "role": "user",
            "text": "Good choice. Just slow down a bit when you speak.",
            "translations": {
              "ko": "좋은 선택이야. 말할 때 조금 느리게 해.",
              "zh": "好主意。只是你说话的时候稍微慢一点。",
              "ja": "良い選択です。ただ、話す速度を少し落としてください。",
              "vi": "Lựa chọn tốt. Chỉ cần nói chậm lại một chút.",
              "en": "Good choice. Just slow down a bit when you speak.",
            }
          },
          {
            "role": "ai",
            "text": "Got it. Do the visuals match the flow?",
            "translations": {
              "ko": "알았어. 시각 자료가 흐름에 맞아?",
              "zh": "明白了。视觉效果是否与流程相匹配？",
              "ja": "了解しました。ビジュアルはフローに合っていますか？",
              "vi": "Đã hiểu. Các hình ảnh có phù hợp với dòng chảy không?",
              "en": "Got it. Do the visuals match the flow?",
            }
          },
          {
            "role": "user",
            "text": "Mostly, but slide 3 could be simplified.",
            "translations": {
              "ko": "대부분은 그렇지만, 3번 슬라이드는 단순화할 수 있을 것 같아.",
              "zh": "大部分是，但是第三张幻灯片可以简化一些。",
              "ja": "ほとんどは合っていますが、スライド3はもう少しシンプルにできます。",
              "vi": "Chủ yếu là có, nhưng slide 3 có thể được đơn giản hóa.",
              "en": "Mostly, but slide 3 could be simplified.",
            }
          },
          {
            "role": "ai",
            "text": "I’ll reduce the text and highlight key points.",
            "translations": {
              "ko": "텍스트를 줄이고 핵심 포인트를 강조할게.",
              "zh": "我会减少文字，突出关键点。",
              "ja": "テキストを減らして、キーポイントを強調します。",
              "vi": "Tôi sẽ giảm bớt văn bản và làm nổi bật các điểm chính.",
              "en": "I’ll reduce the text and highlight key points.",
            }
          },
          {
            "role": "user",
            "text": "Perfect. What about the data section?",
            "translations": {
              "ko": "완벽해. 데이터 섹션은 어때?",
              "zh": "完美。数据部分怎么样？",
              "ja": "完璧です。データセクションはどうですか？",
              "vi": "Hoàn hảo. Còn phần dữ liệu thì sao?",
              "en": "Perfect. What about the data section?",
            }
          },
          {
            "role": "ai",
            "text": "I’m using a bar chart to compare results.",
            "translations": {
              "ko": "결과를 비교하기 위해 막대 그래프를 사용하고 있어.",
              "zh": "我用柱状图来比较结果。",
              "ja": "結果を比較するために棒グラフを使用しています。",
              "vi": "Tôi đang sử dụng biểu đồ cột để so sánh kết quả.",
              "en": "I’m using a bar chart to compare results.",
            }
          },
          {
            "role": "user",
            "text": "Looks clear. Just explain the axis labels briefly.",
            "translations": {
              "ko": "명확해 보여. 축 라벨을 간단히 설명해줘.",
              "zh": "看起来很清晰。只是简单解释一下轴标签。",
              "ja": "分かりやすいですね。軸のラベルを簡単に説明してください。",
              "vi": "Rõ ràng. Chỉ cần giải thích ngắn gọn các nhãn trục.",
              "en": "Looks clear. Just explain the axis labels briefly.",
            }
          },
          {
            "role": "ai",
            "text": "Will do. How’s my pacing overall?",
            "translations": {
              "ko": "그렇게 할게. 전체적인 페이싱은 어때?",
              "zh": "我会的。我的节奏怎么样？",
              "ja": "了解しました。全体的に私のペーシングはどうですか？",
              "vi": "Tôi sẽ làm. Nhịp độ của tôi như thế nào?",
              "en": "Will do. How’s my pacing overall?",
            }
          },
          {
            "role": "user",
            "text": "Good, but keep an eye on the time.",
            "translations": {
              "ko": "좋아, 그러나 시간을 잘 지켜봐.",
              "zh": "很好，但是要注意时间。",
              "ja": "良いですが、時間を気にしてください。",
              "vi": "Tốt, nhưng hãy để ý đến thời gian.",
              "en": "Good, but keep an eye on the time.",
            }
          },
          {
            "role": "ai",
            "text": "Should I trim the Q&A to five minutes?",
            "translations": {
              "ko": "Q&A를 5분으로 줄여야 할까?",
              "zh": "我应该把问答环节缩短到五分钟吗？",
              "ja": "Q&Aを5分に短縮すべきですか？",
              "vi": "Tôi nên cắt giảm phần Q&A xuống còn năm phút không?",
              "en": "Should I trim the Q&A to five minutes?",
            }
          },
          {
            "role": "user",
            "text": "Yes, especially if we start late.",
            "translations": {
              "ko": "네, 특히 늦게 시작하면 그렇게 해야 해.",
              "zh": "是的，特别是如果我们开始晚了的话。",
              "ja": "はい、特に遅く始まる場合はそうです。",
              "vi": "Đúng, đặc biệt là nếu chúng ta bắt đầu muộn.",
              "en": "Yes, especially if we start late.",
            }
          },
          {
            "role": "ai",
            "text": "Thanks. I’ll add a clear summary slide at the end.",
            "translations": {
              "ko": "고마워. 마지막에 요약 슬라이드를 명확하게 추가할게.",
              "zh": "谢谢。我会在最后加一个清晰的总结幻灯片。",
              "ja": "ありがとう。最後に明確なまとめのスライドを追加します。",
              "vi": "Cảm ơn. Tôi sẽ thêm một slide tóm tắt rõ ràng ở cuối.",
              "en": "Thanks. I’ll add a clear summary slide at the end.",
            }
          },
          {
            "role": "user",
            "text": "That always helps the audience.",
            "translations": {
              "ko": "그것이 항상 관객에게 도움이 돼.",
              "zh": "这总是对观众有帮助的。",
              "ja": "それは常に観客にとって役立ちます。",
              "vi": "Điều đó luôn giúp ích cho khán giả.",
              "en": "That always helps the audience.",
            }
          },
          {
            "role": "ai",
            "text": "I appreciate your feedback.",
            "translations": {
              "ko": "피드백 감사합니다.",
              "zh": "我很感谢你的反馈。",
              "ja": "フィードバックをいただきありがとうございます。",
              "vi": "Tôi đánh giá cao phản hồi của bạn.",
              "en": "I appreciate your feedback.",
            }
          },
          {
            "role": "user",
            "text": "Happy to help! Good luck with the real thing.",
            "translations": {
              "ko": "도와드리게 돼서 기쁘네요! 실제로 잘 해낼 거야.",
              "zh": "很乐意帮忙！祝你真正演讲时好运。",
              "ja": "助けることができてうれしいです！本番頑張ってください。",
              "vi": "Rất vui được giúp đỡ! Chúc may mắn với phần thực tế.",
              "en": "Happy to help! Good luck with the real thing.",
            }
          },
          {
            "role": "ai",
            "text": "Thanks, I feel more confident now.",
            "translations": {
              "ko": "고마워, 이제 더 자신감이 생겼어.",
              "zh": "谢谢，我现在感觉更有信心了。",
              "ja": "ありがとう、今はもっと自信があります。",
              "vi": "Cảm ơn, tôi cảm thấy tự tin hơn bây giờ.",
              "en": "Thanks, I feel more confident now.",
            }
          },
          {
            "role": "user",
            "text": "You’ve got this!",
            "translations": {
              "ko": "넌 할 수 있어!",
              "zh": "你可以的！",
              "ja": "あなたなら大丈夫！",
              "vi": "Bạn đã làm được rồi!",
              "en": "You’ve got this!",
            }
          }
        ]
      },
      {
        "description": {
          "en": "Explaining complex data clearly",
          "ko": "복잡한 데이터를 명확하게 설명하기",
          "zh": "清楚地解释复杂数据",
          "ja": "複雑なデータを明確に説明する",
          "vi": "Giải thích dữ liệu phức tạp một cách rõ ràng"
        },
        "dialogues": [
          {
            "role": "ai",
            "text": "Thanks for joining me to rehearse.",
            "translations": {
              "ko": "연습에 함께 해줘서 고마워.",
              "zh": "感谢你陪我一起排练。",
              "ja": "リハーサルに参加してくれてありがとう。",
              "vi": "Cảm ơn bạn đã tham gia luyện tập cùng tôi.",
              "en": "Thanks for joining me to rehearse.",
            }
          },
          {
            "role": "user",
            "text": "No problem. Let’s walk through your opening.",
            "translations": {
              "ko": "문제 없어. 너의 시작 부분을 살펴보자.",
              "zh": "没问题。我们来过一遍你的开场白。",
              "ja": "問題ない。まずはあなたのオープニングを見てみよう。",
              "vi": "Không sao. Hãy xem qua phần mở đầu của bạn.",
              "en": "No problem. Let’s walk through your opening.",
            }
          },
          {
            "role": "ai",
            "text": "I’m starting with a story to grab attention.",
            "translations": {
              "ko": "관심을 끌기 위해 이야기로 시작할 거야.",
              "zh": "我会以一个故事作为开头，以吸引注意力。",
              "ja": "注意を引くために話から始めます。",
              "vi": "Tôi bắt đầu bằng một câu chuyện để thu hút sự chú ý.",
              "en": "I’m starting with a story to grab attention.",
            }
          },
          {
            "role": "user",
            "text": "Good choice. Just slow down a bit when you speak.",
            "translations": {
              "ko": "좋은 선택이야. 말할 때 조금 느리게 해.",
              "zh": "好主意。只是你说话的时候稍微慢一点。",
              "ja": "良い選択です。ただ、話す速度を少し落としてください。",
              "vi": "Lựa chọn tốt. Chỉ cần nói chậm lại một chút.",
              "en": "Good choice. Just slow down a bit when you speak.",
            }
          },
          {
            "role": "ai",
            "text": "Got it. Do the visuals match the flow?",
            "translations": {
              "ko": "알았어. 시각 자료가 흐름에 맞아?",
              "zh": "明白了。视觉效果是否与流程相匹配？",
              "ja": "了解しました。ビジュアルはフローに合っていますか？",
              "vi": "Đã hiểu. Các hình ảnh có phù hợp với dòng chảy không?",
              "en": "Got it. Do the visuals match the flow?",
            }
          },
          {
            "role": "user",
            "text": "Mostly, but slide 3 could be simplified.",
            "translations": {
              "ko": "대부분은 그렇지만, 3번 슬라이드는 단순화할 수 있을 것 같아.",
              "zh": "大部分是，但是第三张幻灯片可以简化一些。",
              "ja": "ほとんどは合っていますが、スライド3はもう少しシンプルにできます。",
              "vi": "Chủ yếu là có, nhưng slide 3 có thể được đơn giản hóa.",
              "en": "Mostly, but slide 3 could be simplified.",
            }
          },
          {
            "role": "ai",
            "text": "I’ll reduce the text and highlight key points.",
            "translations": {
              "ko": "텍스트를 줄이고 핵심 포인트를 강조할게.",
              "zh": "我会减少文字，突出关键点。",
              "ja": "テキストを減らして、キーポイントを強調します。",
              "vi": "Tôi sẽ giảm bớt văn bản và làm nổi bật các điểm chính.",
              "en": "I’ll reduce the text and highlight key points.",
            }
          },
          {
            "role": "user",
            "text": "Perfect. What about the data section?",
            "translations": {
              "ko": "완벽해. 데이터 섹션은 어때?",
              "zh": "完美。数据部分怎么样？",
              "ja": "完璧です。データセクションはどうですか？",
              "vi": "Hoàn hảo. Còn phần dữ liệu thì sao?",
              "en": "Perfect. What about the data section?",
            }
          },
          {
            "role": "ai",
            "text": "I’m using a bar chart to compare results.",
            "translations": {
              "ko": "결과를 비교하기 위해 막대 그래프를 사용하고 있어.",
              "zh": "我用柱状图来比较结果。",
              "ja": "結果を比較するために棒グラフを使用しています。",
              "vi": "Tôi đang sử dụng biểu đồ cột để so sánh kết quả.",
              "en": "I’m using a bar chart to compare results.",
            }
          },
          {
            "role": "user",
            "text": "Looks clear. Just explain the axis labels briefly.",
            "translations": {
              "ko": "명확해 보여. 축 라벨을 간단히 설명해줘.",
              "zh": "看起来很清晰。只是简单解释一下轴标签。",
              "ja": "分かりやすいですね。軸のラベルを簡単に説明してください。",
              "vi": "Rõ ràng. Chỉ cần giải thích ngắn gọn các nhãn trục.",
              "en": "Looks clear. Just explain the axis labels briefly.",
            }
          },
          {
            "role": "ai",
            "text": "Will do. How’s my pacing overall?",
            "translations": {
              "ko": "그렇게 할게. 전체적인 페이싱은 어때?",
              "zh": "我会的。我的节奏怎么样？",
              "ja": "了解しました。全体的に私のペーシングはどうですか？",
              "vi": "Tôi sẽ làm. Nhịp độ của tôi như thế nào?",
              "en": "Will do. How’s my pacing overall?",
            }
          },
          {
            "role": "user",
            "text": "Good, but keep an eye on the time.",
            "translations": {
              "ko": "좋아, 그러나 시간을 잘 지켜봐.",
              "zh": "很好，但是要注意时间。",
              "ja": "良いですが、時間を気にしてください。",
              "vi": "Tốt, nhưng hãy để ý đến thời gian.",
              "en": "Good, but keep an eye on the time.",
            }
          },
          {
            "role": "ai",
            "text": "Should I trim the Q&A to five minutes?",
            "translations": {
              "ko": "Q&A를 5분으로 줄여야 할까?",
              "zh": "我应该把问答环节缩短到五分钟吗？",
              "ja": "Q&Aを5分に短縮すべきですか？",
              "vi": "Tôi nên cắt giảm phần Q&A xuống còn năm phút không?",
              "en": "Should I trim the Q&A to five minutes?",
            }
          },
          {
            "role": "user",
            "text": "Yes, especially if we start late.",
            "translations": {
              "ko": "네, 특히 늦게 시작하면 그렇게 해야 해.",
              "zh": "是的，特别是如果我们开始晚了的话。",
              "ja": "はい、特に遅く始まる場合はそうです。",
              "vi": "Đúng, đặc biệt là nếu chúng ta bắt đầu muộn.",
              "en": "Yes, especially if we start late.",
            }
          },
          {
            "role": "ai",
            "text": "Thanks. I’ll add a clear summary slide at the end.",
            "translations": {
              "ko": "고마워. 마지막에 요약 슬라이드를 명확하게 추가할게.",
              "zh": "谢谢。我会在最后加一个清晰的总结幻灯片。",
              "ja": "ありがとう。最後に明確なまとめのスライドを追加します。",
              "vi": "Cảm ơn. Tôi sẽ thêm một slide tóm tắt rõ ràng ở cuối.",
              "en": "Thanks. I’ll add a clear summary slide at the end.",
            }
          },
          {
            "role": "user",
            "text": "That always helps the audience.",
            "translations": {
              "ko": "그것이 항상 관객에게 도움이 돼.",
              "zh": "这总是对观众有帮助的。",
              "ja": "それは常に観客にとって役立ちます。",
              "vi": "Điều đó luôn giúp ích cho khán giả.",
              "en": "That always helps the audience.",
            }
          },
          {
            "role": "ai",
            "text": "I appreciate your feedback.",
            "translations": {
              "ko": "피드백 감사합니다.",
              "zh": "我很感谢你的反馈。",
              "ja": "フィードバックをいただきありがとうございます。",
              "vi": "Tôi đánh giá cao phản hồi của bạn.",
              "en": "I appreciate your feedback.",
            }
          },
          {
            "role": "user",
            "text": "Happy to help! Good luck with the real thing.",
            "translations": {
              "ko": "도와드리게 돼서 기쁘네요! 실제로 잘 해낼 거야.",
              "zh": "很乐意帮忙！祝你真正演讲时好运。",
              "ja": "助けることができてうれしいです！本番頑張ってください。",
              "vi": "Rất vui được giúp đỡ! Chúc may mắn với phần thực tế.",
              "en": "Happy to help! Good luck with the real thing.",
            }
          },
          {
            "role": "ai",
            "text": "Thanks, I feel more confident now.",
            "translations": {
              "ko": "고마워, 이제 더 자신감이 생겼어.",
              "zh": "谢谢，我现在感觉更有信心了。",
              "ja": "ありがとう、今はもっと自信があります。",
              "vi": "Cảm ơn, tôi cảm thấy tự tin hơn bây giờ.",
              "en": "Thanks, I feel more confident now.",
            }
          },
          {
            "role": "user",
            "text": "You’ve got this!",
            "translations": {
              "ko": "넌 할 수 있어!",
              "zh": "你可以的！",
              "ja": "あなたなら大丈夫！",
              "vi": "Bạn đã làm được rồi!",
              "en": "You’ve got this!",
            }
          }
        ]
      },
      {
        "description": {
          "en": "Collaborating on slide preparation",
          "ko": "슬라이드 준비 협업하기",
          "zh": "合作准备幻灯片",
          "ja": "スライドの準備に協力する",
          "vi": "Hợp tác chuẩn bị slide"
        },
        "dialogues": [
          {
            "role": "ai",
            "text": "Thanks for joining me to rehearse.",
            "translations": {
              "ko": "연습에 함께 해줘서 고마워.",
              "zh": "感谢你陪我一起排练。",
              "ja": "リハーサルに参加してくれてありがとう。",
              "vi": "Cảm ơn bạn đã tham gia luyện tập cùng tôi.",
              "en": "Thanks for joining me to rehearse.",
            }
          },
          {
            "role": "user",
            "text": "No problem. Let’s walk through your opening.",
            "translations": {
              "ko": "문제 없어. 너의 시작 부분을 살펴보자.",
              "zh": "没问题。我们来过一遍你的开场白。",
              "ja": "問題ない。まずはあなたのオープニングを見てみよう。",
              "vi": "Không sao. Hãy xem qua phần mở đầu của bạn.",
              "en": "No problem. Let’s walk through your opening.",
            }
          },
          {
            "role": "ai",
            "text": "I’m starting with a story to grab attention.",
            "translations": {
              "ko": "관심을 끌기 위해 이야기로 시작할 거야.",
              "zh": "我会以一个故事作为开头，以吸引注意力。",
              "ja": "注意を引くために話から始めます。",
              "vi": "Tôi bắt đầu bằng một câu chuyện để thu hút sự chú ý.",
              "en": "I’m starting with a story to grab attention.",
            }
          },
          {
            "role": "user",
            "text": "Good choice. Just slow down a bit when you speak.",
            "translations": {
              "ko": "좋은 선택이야. 말할 때 조금 느리게 해.",
              "zh": "好主意。只是你说话的时候稍微慢一点。",
              "ja": "良い選択です。ただ、話す速度を少し落としてください。",
              "vi": "Lựa chọn tốt. Chỉ cần nói chậm lại một chút.",
              "en": "Good choice. Just slow down a bit when you speak.",
            }
          },
          {
            "role": "ai",
            "text": "Got it. Do the visuals match the flow?",
            "translations": {
              "ko": "알았어. 시각 자료가 흐름에 맞아?",
              "zh": "明白了。视觉效果是否与流程相匹配？",
              "ja": "了解しました。ビジュアルはフローに合っていますか？",
              "vi": "Đã hiểu. Các hình ảnh có phù hợp với dòng chảy không?",
              "en": "Got it. Do the visuals match the flow?",
            }
          },
          {
            "role": "user",
            "text": "Mostly, but slide 3 could be simplified.",
            "translations": {
              "ko": "대부분은 그렇지만, 3번 슬라이드는 단순화할 수 있을 것 같아.",
              "zh": "大部分是，但是第三张幻灯片可以简化一些。",
              "ja": "ほとんどは合っていますが、スライド3はもう少しシンプルにできます。",
              "vi": "Chủ yếu là có, nhưng slide 3 có thể được đơn giản hóa.",
              "en": "Mostly, but slide 3 could be simplified.",
            }
          },
          {
            "role": "ai",
            "text": "I’ll reduce the text and highlight key points.",
            "translations": {
              "ko": "텍스트를 줄이고 핵심 포인트를 강조할게.",
              "zh": "我会减少文字，突出关键点。",
              "ja": "テキストを減らして、キーポイントを強調します。",
              "vi": "Tôi sẽ giảm bớt văn bản và làm nổi bật các điểm chính.",
              "en": "I’ll reduce the text and highlight key points.",
            }
          },
          {
            "role": "user",
            "text": "Perfect. What about the data section?",
            "translations": {
              "ko": "완벽해. 데이터 섹션은 어때?",
              "zh": "完美。数据部分怎么样？",
              "ja": "完璧です。データセクションはどうですか？",
              "vi": "Hoàn hảo. Còn phần dữ liệu thì sao?",
              "en": "Perfect. What about the data section?",
            }
          },
          {
            "role": "ai",
            "text": "I’m using a bar chart to compare results.",
            "translations": {
              "ko": "결과를 비교하기 위해 막대 그래프를 사용하고 있어.",
              "zh": "我用柱状图来比较结果。",
              "ja": "結果を比較するために棒グラフを使用しています。",
              "vi": "Tôi đang sử dụng biểu đồ cột để so sánh kết quả.",
              "en": "I’m using a bar chart to compare results.",
            }
          },
          {
            "role": "user",
            "text": "Looks clear. Just explain the axis labels briefly.",
            "translations": {
              "ko": "명확해 보여. 축 라벨을 간단히 설명해줘.",
              "zh": "看起来很清晰。只是简单解释一下轴标签。",
              "ja": "分かりやすいですね。軸のラベルを簡単に説明してください。",
              "vi": "Rõ ràng. Chỉ cần giải thích ngắn gọn các nhãn trục.",
              "en": "Looks clear. Just explain the axis labels briefly.",
            }
          },
          {
            "role": "ai",
            "text": "Will do. How’s my pacing overall?",
            "translations": {
              "ko": "그렇게 할게. 전체적인 페이싱은 어때?",
              "zh": "我会的。我的节奏怎么样？",
              "ja": "了解しました。全体的に私のペーシングはどうですか？",
              "vi": "Tôi sẽ làm. Nhịp độ của tôi như thế nào?",
              "en": "Will do. How’s my pacing overall?",
            }
          },
          {
            "role": "user",
            "text": "Good, but keep an eye on the time.",
            "translations": {
              "ko": "좋아, 그러나 시간을 잘 지켜봐.",
              "zh": "很好，但是要注意时间。",
              "ja": "良いですが、時間を気にしてください。",
              "vi": "Tốt, nhưng hãy để ý đến thời gian.",
              "en": "Good, but keep an eye on the time.",
            }
          },
          {
            "role": "ai",
            "text": "Should I trim the Q&A to five minutes?",
            "translations": {
              "ko": "Q&A를 5분으로 줄여야 할까?",
              "zh": "我应该把问答环节缩短到五分钟吗？",
              "ja": "Q&Aを5分に短縮すべきですか？",
              "vi": "Tôi nên cắt giảm phần Q&A xuống còn năm phút không?",
              "en": "Should I trim the Q&A to five minutes?",
            }
          },
          {
            "role": "user",
            "text": "Yes, especially if we start late.",
            "translations": {
              "ko": "네, 특히 늦게 시작하면 그렇게 해야 해.",
              "zh": "是的，特别是如果我们开始晚了的话。",
              "ja": "はい、特に遅く始まる場合はそうです。",
              "vi": "Đúng, đặc biệt là nếu chúng ta bắt đầu muộn.",
              "en": "Yes, especially if we start late.",
            }
          },
          {
            "role": "ai",
            "text": "Thanks. I’ll add a clear summary slide at the end.",
            "translations": {
              "ko": "고마워. 마지막에 요약 슬라이드를 명확하게 추가할게.",
              "zh": "谢谢。我会在最后加一个清晰的总结幻灯片。",
              "ja": "ありがとう。最後に明確なまとめのスライドを追加します。",
              "vi": "Cảm ơn. Tôi sẽ thêm một slide tóm tắt rõ ràng ở cuối.",
              "en": "Thanks. I’ll add a clear summary slide at the end.",
            }
          },
          {
            "role": "user",
            "text": "That always helps the audience.",
            "translations": {
              "ko": "그것이 항상 관객에게 도움이 돼.",
              "zh": "这总是对观众有帮助的。",
              "ja": "それは常に観客にとって役立ちます。",
              "vi": "Điều đó luôn giúp ích cho khán giả.",
              "en": "That always helps the audience.",
            }
          },
          {
            "role": "ai",
            "text": "I appreciate your feedback.",
            "translations": {
              "ko": "피드백 감사합니다.",
              "zh": "我很感谢你的反馈。",
              "ja": "フィードバックをいただきありがとうございます。",
              "vi": "Tôi đánh giá cao phản hồi của bạn.",
              "en": "I appreciate your feedback.",
            }
          },
          {
            "role": "user",
            "text": "Happy to help! Good luck with the real thing.",
            "translations": {
              "ko": "도와드리게 돼서 기쁘네요! 실제로 잘 해낼 거야.",
              "zh": "很乐意帮忙！祝你真正演讲时好运。",
              "ja": "助けることができてうれしいです！本番頑張ってください。",
              "vi": "Rất vui được giúp đỡ! Chúc may mắn với phần thực tế.",
              "en": "Happy to help! Good luck with the real thing.",
            }
          },
          {
            "role": "ai",
            "text": "Thanks, I feel more confident now.",
            "translations": {
              "ko": "고마워, 이제 더 자신감이 생겼어.",
              "zh": "谢谢，我现在感觉更有信心了。",
              "ja": "ありがとう、今はもっと自信があります。",
              "vi": "Cảm ơn, tôi cảm thấy tự tin hơn bây giờ.",
              "en": "Thanks, I feel more confident now.",
            }
          },
          {
            "role": "user",
            "text": "You’ve got this!",
            "translations": {
              "ko": "넌 할 수 있어!",
              "zh": "你可以的！",
              "ja": "あなたなら大丈夫！",
              "vi": "Bạn đã làm được rồi!",
              "en": "You’ve got this!",
            }
          }
        ]
      },
      {
        "description": {
          "en": "Adjusting tone for a formal setting",
          "ko": "공식적인 설정에 맞게 톤 조절하기",
          "zh": "调整正式场合的语气",
          "ja": "フォーマルな設定でのトーンの調整",
          "vi": "Điều chỉnh giọng điệu cho một môi trường chính thức"
        },
        "dialogues": [
          {
            "role": "ai",
            "text": "Thanks for joining me to rehearse.",
            "translations": {
              "ko": "연습에 함께 해줘서 고마워.",
              "zh": "感谢你陪我一起排练。",
              "ja": "リハーサルに参加してくれてありがとう。",
              "vi": "Cảm ơn bạn đã tham gia luyện tập cùng tôi.",
              "en": "Thanks for joining me to rehearse.",
            }
          },
          {
            "role": "user",
            "text": "No problem. Let’s walk through your opening.",
            "translations": {
              "ko": "문제 없어. 너의 시작 부분을 살펴보자.",
              "zh": "没问题。我们来过一遍你的开场白。",
              "ja": "問題ない。まずはあなたのオープニングを見てみよう。",
              "vi": "Không sao. Hãy xem qua phần mở đầu của bạn.",
              "en": "No problem. Let’s walk through your opening.",
            }
          },
          {
            "role": "ai",
            "text": "I’m starting with a story to grab attention.",
            "translations": {
              "ko": "관심을 끌기 위해 이야기로 시작할 거야.",
              "zh": "我会以一个故事作为开头，以吸引注意力。",
              "ja": "注意を引くために話から始めます。",
              "vi": "Tôi bắt đầu bằng một câu chuyện để thu hút sự chú ý.",
              "en": "I’m starting with a story to grab attention.",
            }
          },
          {
            "role": "user",
            "text": "Good choice. Just slow down a bit when you speak.",
            "translations": {
              "ko": "좋은 선택이야. 말할 때 조금 느리게 해.",
              "zh": "好主意。只是你说话的时候稍微慢一点。",
              "ja": "良い選択です。ただ、話す速度を少し落としてください。",
              "vi": "Lựa chọn tốt. Chỉ cần nói chậm lại một chút.",
              "en": "Good choice. Just slow down a bit when you speak.",
            }
          },
          {
            "role": "ai",
            "text": "Got it. Do the visuals match the flow?",
            "translations": {
              "ko": "알았어. 시각 자료가 흐름에 맞아?",
              "zh": "明白了。视觉效果是否与流程相匹配？",
              "ja": "了解しました。ビジュアルはフローに合っていますか？",
              "vi": "Đã hiểu. Các hình ảnh có phù hợp với dòng chảy không?",
              "en": "Got it. Do the visuals match the flow?",
            }
          },
          {
            "role": "user",
            "text": "Mostly, but slide 3 could be simplified.",
            "translations": {
              "ko": "대부분은 그렇지만, 3번 슬라이드는 단순화할 수 있을 것 같아.",
              "zh": "大部分是，但是第三张幻灯片可以简化一些。",
              "ja": "ほとんどは合っていますが、スライド3はもう少しシンプルにできます。",
              "vi": "Chủ yếu là có, nhưng slide 3 có thể được đơn giản hóa.",
              "en": "Mostly, but slide 3 could be simplified.",
            }
          },
          {
            "role": "ai",
            "text": "I’ll reduce the text and highlight key points.",
            "translations": {
              "ko": "텍스트를 줄이고 핵심 포인트를 강조할게.",
              "zh": "我会减少文字，突出关键点。",
              "ja": "テキストを減らして、キーポイントを強調します。",
              "vi": "Tôi sẽ giảm bớt văn bản và làm nổi bật các điểm chính.",
              "en": "I’ll reduce the text and highlight key points.",
            }
          },
          {
            "role": "user",
            "text": "Perfect. What about the data section?",
            "translations": {
              "ko": "완벽해. 데이터 섹션은 어때?",
              "zh": "完美。数据部分怎么样？",
              "ja": "完璧です。データセクションはどうですか？",
              "vi": "Hoàn hảo. Còn phần dữ liệu thì sao?",
              "en": "Perfect. What about the data section?",
            }
          },
          {
            "role": "ai",
            "text": "I’m using a bar chart to compare results.",
            "translations": {
              "ko": "결과를 비교하기 위해 막대 그래프를 사용하고 있어.",
              "zh": "我用柱状图来比较结果。",
              "ja": "結果を比較するために棒グラフを使用しています。",
              "vi": "Tôi đang sử dụng biểu đồ cột để so sánh kết quả.",
              "en": "I’m using a bar chart to compare results.",
            }
          },
          {
            "role": "user",
            "text": "Looks clear. Just explain the axis labels briefly.",
            "translations": {
              "ko": "명확해 보여. 축 라벨을 간단히 설명해줘.",
              "zh": "看起来很清晰。只是简单解释一下轴标签。",
              "ja": "分かりやすいですね。軸のラベルを簡単に説明してください。",
              "vi": "Rõ ràng. Chỉ cần giải thích ngắn gọn các nhãn trục.",
              "en": "Looks clear. Just explain the axis labels briefly.",
            }
          },
          {
            "role": "ai",
            "text": "Will do. How’s my pacing overall?",
            "translations": {
              "ko": "그렇게 할게. 전체적인 페이싱은 어때?",
              "zh": "我会的。我的节奏怎么样？",
              "ja": "了解しました。全体的に私のペーシングはどうですか？",
              "vi": "Tôi sẽ làm. Nhịp độ của tôi như thế nào?",
              "en": "Will do. How’s my pacing overall?",
            }
          },
          {
            "role": "user",
            "text": "Good, but keep an eye on the time.",
            "translations": {
              "ko": "좋아, 그러나 시간을 잘 지켜봐.",
              "zh": "很好，但是要注意时间。",
              "ja": "良いですが、時間を気にしてください。",
              "vi": "Tốt, nhưng hãy để ý đến thời gian.",
              "en": "Good, but keep an eye on the time.",
            }
          },
          {
            "role": "ai",
            "text": "Should I trim the Q&A to five minutes?",
            "translations": {
              "ko": "Q&A를 5분으로 줄여야 할까?",
              "zh": "我应该把问答环节缩短到五分钟吗？",
              "ja": "Q&Aを5分に短縮すべきですか？",
              "vi": "Tôi nên cắt giảm phần Q&A xuống còn năm phút không?",
              "en": "Should I trim the Q&A to five minutes?",
            }
          },
          {
            "role": "user",
            "text": "Yes, especially if we start late.",
            "translations": {
              "ko": "네, 특히 늦게 시작하면 그렇게 해야 해.",
              "zh": "是的，特别是如果我们开始晚了的话。",
              "ja": "はい、特に遅く始まる場合はそうです。",
              "vi": "Đúng, đặc biệt là nếu chúng ta bắt đầu muộn.",
              "en": "Yes, especially if we start late.",
            }
          },
          {
            "role": "ai",
            "text": "Thanks. I’ll add a clear summary slide at the end.",
            "translations": {
              "ko": "고마워. 마지막에 요약 슬라이드를 명확하게 추가할게.",
              "zh": "谢谢。我会在最后加一个清晰的总结幻灯片。",
              "ja": "ありがとう。最後に明確なまとめのスライドを追加します。",
              "vi": "Cảm ơn. Tôi sẽ thêm một slide tóm tắt rõ ràng ở cuối.",
              "en": "Thanks. I’ll add a clear summary slide at the end.",
            }
          },
          {
            "role": "user",
            "text": "That always helps the audience.",
            "translations": {
              "ko": "그것이 항상 관객에게 도움이 돼.",
              "zh": "这总是对观众有帮助的。",
              "ja": "それは常に観客にとって役立ちます。",
              "vi": "Điều đó luôn giúp ích cho khán giả.",
              "en": "That always helps the audience.",
            }
          },
          {
            "role": "ai",
            "text": "I appreciate your feedback.",
            "translations": {
              "ko": "피드백 감사합니다.",
              "zh": "我很感谢你的反馈。",
              "ja": "フィードバックをいただきありがとうございます。",
              "vi": "Tôi đánh giá cao phản hồi của bạn.",
              "en": "I appreciate your feedback.",
            }
          },
          {
            "role": "user",
            "text": "Happy to help! Good luck with the real thing.",
            "translations": {
              "ko": "도와드리게 돼서 기쁘네요! 실제로 잘 해낼 거야.",
              "zh": "很乐意帮忙！祝你真正演讲时好运。",
              "ja": "助けることができてうれしいです！本番頑張ってください。",
              "vi": "Rất vui được giúp đỡ! Chúc may mắn với phần thực tế.",
              "en": "Happy to help! Good luck with the real thing.",
            }
          },
          {
            "role": "ai",
            "text": "Thanks, I feel more confident now.",
            "translations": {
              "ko": "고마워, 이제 더 자신감이 생겼어.",
              "zh": "谢谢，我现在感觉更有信心了。",
              "ja": "ありがとう、今はもっと自信があります。",
              "vi": "Cảm ơn, tôi cảm thấy tự tin hơn bây giờ.",
              "en": "Thanks, I feel more confident now.",
            }
          },
          {
            "role": "user",
            "text": "You’ve got this!",
            "translations": {
              "ko": "넌 할 수 있어!",
              "zh": "你可以的！",
              "ja": "あなたなら大丈夫！",
              "vi": "Bạn đã làm được rồi!",
              "en": "You’ve got this!",
            }
          }
        ]
      },
      {
        "description": {
          "en": "Handling tough questions during Q&A",
          "ko": "Q&A 중 어려운 질문 다루기",
          "zh": "在问答环节处理棘手问题",
          "ja": "Q&A中の難しい質問に対処する",
          "vi": "Xử lý câu hỏi khó trong Q&A"
        },
        "dialogues": [
          {
            "role": "ai",
            "text": "Thanks for joining me to rehearse.",
            "translations": {
              "ko": "연습에 함께 해줘서 고마워.",
              "zh": "感谢你陪我一起排练。",
              "ja": "リハーサルに参加してくれてありがとう。",
              "vi": "Cảm ơn bạn đã tham gia luyện tập cùng tôi.",
              "en": "Thanks for joining me to rehearse.",
            }
          },
          {
            "role": "user",
            "text": "No problem. Let’s walk through your opening.",
            "translations": {
              "ko": "문제 없어. 너의 시작 부분을 살펴보자.",
              "zh": "没问题。我们来过一遍你的开场白。",
              "ja": "問題ない。まずはあなたのオープニングを見てみよう。",
              "vi": "Không sao. Hãy xem qua phần mở đầu của bạn.",
              "en": "No problem. Let’s walk through your opening.",
            }
          },
          {
            "role": "ai",
            "text": "I’m starting with a story to grab attention.",
            "translations": {
              "ko": "관심을 끌기 위해 이야기로 시작할 거야.",
              "zh": "我会以一个故事作为开头，以吸引注意力。",
              "ja": "注意を引くために話から始めます。",
              "vi": "Tôi bắt đầu bằng một câu chuyện để thu hút sự chú ý.",
              "en": "I’m starting with a story to grab attention.",
            }
          },
          {
            "role": "user",
            "text": "Good choice. Just slow down a bit when you speak.",
            "translations": {
              "ko": "좋은 선택이야. 말할 때 조금 느리게 해.",
              "zh": "好主意。只是你说话的时候稍微慢一点。",
              "ja": "良い選択です。ただ、話す速度を少し落としてください。",
              "vi": "Lựa chọn tốt. Chỉ cần nói chậm lại một chút.",
              "en": "Good choice. Just slow down a bit when you speak.",
            }
          },
          {
            "role": "ai",
            "text": "Got it. Do the visuals match the flow?",
            "translations": {
              "ko": "알았어. 시각 자료가 흐름에 맞아?",
              "zh": "明白了。视觉效果是否与流程相匹配？",
              "ja": "了解しました。ビジュアルはフローに合っていますか？",
              "vi": "Đã hiểu. Các hình ảnh có phù hợp với dòng chảy không?",
              "en": "Got it. Do the visuals match the flow?",
            }
          },
          {
            "role": "user",
            "text": "Mostly, but slide 3 could be simplified.",
            "translations": {
              "ko": "대부분은 그렇지만, 3번 슬라이드는 단순화할 수 있을 것 같아.",
              "zh": "大部分是，但是第三张幻灯片可以简化一些。",
              "ja": "ほとんどは合っていますが、スライド3はもう少しシンプルにできます。",
              "vi": "Chủ yếu là có, nhưng slide 3 có thể được đơn giản hóa.",
              "en": "Mostly, but slide 3 could be simplified.",
            }
          },
          {
            "role": "ai",
            "text": "I’ll reduce the text and highlight key points.",
            "translations": {
              "ko": "텍스트를 줄이고 핵심 포인트를 강조할게.",
              "zh": "我会减少文字，突出关键点。",
              "ja": "テキストを減らして、キーポイントを強調します。",
              "vi": "Tôi sẽ giảm bớt văn bản và làm nổi bật các điểm chính.",
              "en": "I’ll reduce the text and highlight key points.",
            }
          },
          {
            "role": "user",
            "text": "Perfect. What about the data section?",
            "translations": {
              "ko": "완벽해. 데이터 섹션은 어때?",
              "zh": "完美。数据部分怎么样？",
              "ja": "完璧です。データセクションはどうですか？",
              "vi": "Hoàn hảo. Còn phần dữ liệu thì sao?",
              "en": "Perfect. What about the data section?",
            }
          },
          {
            "role": "ai",
            "text": "I’m using a bar chart to compare results.",
            "translations": {
              "ko": "결과를 비교하기 위해 막대 그래프를 사용하고 있어.",
              "zh": "我用柱状图来比较结果。",
              "ja": "結果を比較するために棒グラフを使用しています。",
              "vi": "Tôi đang sử dụng biểu đồ cột để so sánh kết quả.",
              "en": "I’m using a bar chart to compare results.",
            }
          },
          {
            "role": "user",
            "text": "Looks clear. Just explain the axis labels briefly.",
            "translations": {
              "ko": "명확해 보여. 축 라벨을 간단히 설명해줘.",
              "zh": "看起来很清晰。只是简单解释一下轴标签。",
              "ja": "分かりやすいですね。軸のラベルを簡単に説明してください。",
              "vi": "Rõ ràng. Chỉ cần giải thích ngắn gọn các nhãn trục.",
              "en": "Looks clear. Just explain the axis labels briefly.",
            }
          },
          {
            "role": "ai",
            "text": "Will do. How’s my pacing overall?",
            "translations": {
              "ko": "그렇게 할게. 전체적인 페이싱은 어때?",
              "zh": "我会的。我的节奏怎么样？",
              "ja": "了解しました。全体的に私のペーシングはどうですか？",
              "vi": "Tôi sẽ làm. Nhịp độ của tôi như thế nào?",
              "en": "Will do. How’s my pacing overall?",
            }
          },
          {
            "role": "user",
            "text": "Good, but keep an eye on the time.",
            "translations": {
              "ko": "좋아, 그러나 시간을 잘 지켜봐.",
              "zh": "很好，但是要注意时间。",
              "ja": "良いですが、時間を気にしてください。",
              "vi": "Tốt, nhưng hãy để ý đến thời gian.",
              "en": "Good, but keep an eye on the time.",
            }
          },
          {
            "role": "ai",
            "text": "Should I trim the Q&A to five minutes?",
            "translations": {
              "ko": "Q&A를 5분으로 줄여야 할까?",
              "zh": "我应该把问答环节缩短到五分钟吗？",
              "ja": "Q&Aを5分に短縮すべきですか？",
              "vi": "Tôi nên cắt giảm phần Q&A xuống còn năm phút không?",
              "en": "Should I trim the Q&A to five minutes?",
            }
          },
          {
            "role": "user",
            "text": "Yes, especially if we start late.",
            "translations": {
              "ko": "네, 특히 늦게 시작하면 그렇게 해야 해.",
              "zh": "是的，特别是如果我们开始晚了的话。",
              "ja": "はい、特に遅く始まる場合はそうです。",
              "vi": "Đúng, đặc biệt là nếu chúng ta bắt đầu muộn.",
              "en": "Yes, especially if we start late.",
            }
          },
          {
            "role": "ai",
            "text": "Thanks. I’ll add a clear summary slide at the end.",
            "translations": {
              "ko": "고마워. 마지막에 요약 슬라이드를 명확하게 추가할게.",
              "zh": "谢谢。我会在最后加一个清晰的总结幻灯片。",
              "ja": "ありがとう。最後に明確なまとめのスライドを追加します。",
              "vi": "Cảm ơn. Tôi sẽ thêm một slide tóm tắt rõ ràng ở cuối.",
              "en": "Thanks. I’ll add a clear summary slide at the end.",
            }
          },
          {
            "role": "user",
            "text": "That always helps the audience.",
            "translations": {
              "ko": "그것이 항상 관객에게 도움이 돼.",
              "zh": "这总是对观众有帮助的。",
              "ja": "それは常に観客にとって役立ちます。",
              "vi": "Điều đó luôn giúp ích cho khán giả.",
              "en": "That always helps the audience.",
            }
          },
          {
            "role": "ai",
            "text": "I appreciate your feedback.",
            "translations": {
              "ko": "피드백 감사합니다.",
              "zh": "我很感谢你的反馈。",
              "ja": "フィードバックをいただきありがとうございます。",
              "vi": "Tôi đánh giá cao phản hồi của bạn.",
              "en": "I appreciate your feedback.",
            }
          },
          {
            "role": "user",
            "text": "Happy to help! Good luck with the real thing.",
            "translations": {
              "ko": "도와드리게 돼서 기쁘네요! 실제로 잘 해낼 거야.",
              "zh": "很乐意帮忙！祝你真正演讲时好运。",
              "ja": "助けることができてうれしいです！本番頑張ってください。",
              "vi": "Rất vui được giúp đỡ! Chúc may mắn với phần thực tế.",
              "en": "Happy to help! Good luck with the real thing.",
            }
          },
          {
            "role": "ai",
            "text": "Thanks, I feel more confident now.",
            "translations": {
              "ko": "고마워, 이제 더 자신감이 생겼어.",
              "zh": "谢谢，我现在感觉更有信心了。",
              "ja": "ありがとう、今はもっと自信があります。",
              "vi": "Cảm ơn, tôi cảm thấy tự tin hơn bây giờ.",
              "en": "Thanks, I feel more confident now.",
            }
          },
          {
            "role": "user",
            "text": "You’ve got this!",
            "translations": {
              "ko": "넌 할 수 있어!",
              "zh": "你可以的！",
              "ja": "あなたなら大丈夫！",
              "vi": "Bạn đã làm được rồi!",
              "en": "You’ve got this!",
            }
          }
        ]
      },
      {
        "description": {
          "en": "Using persuasive storytelling",
          "ko": "설득력 있는 스토리텔링 사용하기",
          "zh": "使用有说服力的故事叙述",
          "ja": "説得力のあるストーリーテリングを使用する",
          "vi": "Sử dụng kỹ thuật kể chuyện thuyết phục"
        },
        "dialogues": [
          {
            "role": "ai",
            "text": "Thanks for joining me to rehearse.",
            "translations": {
              "ko": "연습에 함께 해줘서 고마워.",
              "zh": "感谢你陪我一起排练。",
              "ja": "リハーサルに参加してくれてありがとう。",
              "vi": "Cảm ơn bạn đã tham gia luyện tập cùng tôi.",
              "en": "Thanks for joining me to rehearse.",
            }
          },
          {
            "role": "user",
            "text": "No problem. Let’s walk through your opening.",
            "translations": {
              "ko": "문제 없어. 너의 시작 부분을 살펴보자.",
              "zh": "没问题。我们来过一遍你的开场白。",
              "ja": "問題ない。まずはあなたのオープニングを見てみよう。",
              "vi": "Không sao. Hãy xem qua phần mở đầu của bạn.",
              "en": "No problem. Let’s walk through your opening.",
            }
          },
          {
            "role": "ai",
            "text": "I’m starting with a story to grab attention.",
            "translations": {
              "ko": "관심을 끌기 위해 이야기로 시작할 거야.",
              "zh": "我会以一个故事作为开头，以吸引注意力。",
              "ja": "注意を引くために話から始めます。",
              "vi": "Tôi bắt đầu bằng một câu chuyện để thu hút sự chú ý.",
              "en": "I’m starting with a story to grab attention.",
            }
          },
          {
            "role": "user",
            "text": "Good choice. Just slow down a bit when you speak.",
            "translations": {
              "ko": "좋은 선택이야. 말할 때 조금 느리게 해.",
              "zh": "好主意。只是你说话的时候稍微慢一点。",
              "ja": "良い選択です。ただ、話す速度を少し落としてください。",
              "vi": "Lựa chọn tốt. Chỉ cần nói chậm lại một chút.",
              "en": "Good choice. Just slow down a bit when you speak.",
            }
          },
          {
            "role": "ai",
            "text": "Got it. Do the visuals match the flow?",
            "translations": {
              "ko": "알았어. 시각 자료가 흐름에 맞아?",
              "zh": "明白了。视觉效果是否与流程相匹配？",
              "ja": "了解しました。ビジュアルはフローに合っていますか？",
              "vi": "Đã hiểu. Các hình ảnh có phù hợp với dòng chảy không?",
              "en": "Got it. Do the visuals match the flow?",
            }
          },
          {
            "role": "user",
            "text": "Mostly, but slide 3 could be simplified.",
            "translations": {
              "ko": "대부분은 그렇지만, 3번 슬라이드는 단순화할 수 있을 것 같아.",
              "zh": "大部分是，但是第三张幻灯片可以简化一些。",
              "ja": "ほとんどは合っていますが、スライド3はもう少しシンプルにできます。",
              "vi": "Chủ yếu là có, nhưng slide 3 có thể được đơn giản hóa.",
              "en": "Mostly, but slide 3 could be simplified.",
            }
          },
          {
            "role": "ai",
            "text": "I’ll reduce the text and highlight key points.",
            "translations": {
              "ko": "텍스트를 줄이고 핵심 포인트를 강조할게.",
              "zh": "我会减少文字，突出关键点。",
              "ja": "テキストを減らして、キーポイントを強調します。",
              "vi": "Tôi sẽ giảm bớt văn bản và làm nổi bật các điểm chính.",
              "en": "I’ll reduce the text and highlight key points.",
            }
          },
          {
            "role": "user",
            "text": "Perfect. What about the data section?",
            "translations": {
              "ko": "완벽해. 데이터 섹션은 어때?",
              "zh": "完美。数据部分怎么样？",
              "ja": "完璧です。データセクションはどうですか？",
              "vi": "Hoàn hảo. Còn phần dữ liệu thì sao?",
              "en": "Perfect. What about the data section?",
            }
          },
          {
            "role": "ai",
            "text": "I’m using a bar chart to compare results.",
            "translations": {
              "ko": "결과를 비교하기 위해 막대 그래프를 사용하고 있어.",
              "zh": "我用柱状图来比较结果。",
              "ja": "結果を比較するために棒グラフを使用しています。",
              "vi": "Tôi đang sử dụng biểu đồ cột để so sánh kết quả.",
              "en": "I’m using a bar chart to compare results.",
            }
          },
          {
            "role": "user",
            "text": "Looks clear. Just explain the axis labels briefly.",
            "translations": {
              "ko": "명확해 보여. 축 라벨을 간단히 설명해줘.",
              "zh": "看起来很清晰。只是简单解释一下轴标签。",
              "ja": "分かりやすいですね。軸のラベルを簡単に説明してください。",
              "vi": "Rõ ràng. Chỉ cần giải thích ngắn gọn các nhãn trục.",
              "en": "Looks clear. Just explain the axis labels briefly.",
            }
          },
          {
            "role": "ai",
            "text": "Will do. How’s my pacing overall?",
            "translations": {
              "ko": "그렇게 할게. 전체적인 페이싱은 어때?",
              "zh": "我会的。我的节奏怎么样？",
              "ja": "了解しました。全体的に私のペーシングはどうですか？",
              "vi": "Tôi sẽ làm. Nhịp độ của tôi như thế nào?",
              "en": "Will do. How’s my pacing overall?",
            }
          },
          {
            "role": "user",
            "text": "Good, but keep an eye on the time.",
            "translations": {
              "ko": "좋아, 그러나 시간을 잘 지켜봐.",
              "zh": "很好，但是要注意时间。",
              "ja": "良いですが、時間を気にしてください。",
              "vi": "Tốt, nhưng hãy để ý đến thời gian.",
              "en": "Good, but keep an eye on the time.",
            }
          },
          {
            "role": "ai",
            "text": "Should I trim the Q&A to five minutes?",
            "translations": {
              "ko": "Q&A를 5분으로 줄여야 할까?",
              "zh": "我应该把问答环节缩短到五分钟吗？",
              "ja": "Q&Aを5分に短縮すべきですか？",
              "vi": "Tôi nên cắt giảm phần Q&A xuống còn năm phút không?",
              "en": "Should I trim the Q&A to five minutes?",
            }
          },
          {
            "role": "user",
            "text": "Yes, especially if we start late.",
            "translations": {
              "ko": "네, 특히 늦게 시작하면 그렇게 해야 해.",
              "zh": "是的，特别是如果我们开始晚了的话。",
              "ja": "はい、特に遅く始まる場合はそうです。",
              "vi": "Đúng, đặc biệt là nếu chúng ta bắt đầu muộn.",
              "en": "Yes, especially if we start late.",
            }
          },
          {
            "role": "ai",
            "text": "Thanks. I’ll add a clear summary slide at the end.",
            "translations": {
              "ko": "고마워. 마지막에 요약 슬라이드를 명확하게 추가할게.",
              "zh": "谢谢。我会在最后加一个清晰的总结幻灯片。",
              "ja": "ありがとう。最後に明確なまとめのスライドを追加します。",
              "vi": "Cảm ơn. Tôi sẽ thêm một slide tóm tắt rõ ràng ở cuối.",
              "en": "Thanks. I’ll add a clear summary slide at the end.",
            }
          },
          {
            "role": "user",
            "text": "That always helps the audience.",
            "translations": {
              "ko": "그것이 항상 관객에게 도움이 돼.",
              "zh": "这总是对观众有帮助的。",
              "ja": "それは常に観客にとって役立ちます。",
              "vi": "Điều đó luôn giúp ích cho khán giả.",
              "en": "That always helps the audience.",
            }
          },
          {
            "role": "ai",
            "text": "I appreciate your feedback.",
            "translations": {
              "ko": "피드백 감사합니다.",
              "zh": "我很感谢你的反馈。",
              "ja": "フィードバックをいただきありがとうございます。",
              "vi": "Tôi đánh giá cao phản hồi của bạn.",
              "en": "I appreciate your feedback.",
            }
          },
          {
            "role": "user",
            "text": "Happy to help! Good luck with the real thing.",
            "translations": {
              "ko": "도와드리게 돼서 기쁘네요! 실제로 잘 해낼 거야.",
              "zh": "很乐意帮忙！祝你真正演讲时好运。",
              "ja": "助けることができてうれしいです！本番頑張ってください。",
              "vi": "Rất vui được giúp đỡ! Chúc may mắn với phần thực tế.",
              "en": "Happy to help! Good luck with the real thing.",
            }
          },
          {
            "role": "ai",
            "text": "Thanks, I feel more confident now.",
            "translations": {
              "ko": "고마워, 이제 더 자신감이 생겼어.",
              "zh": "谢谢，我现在感觉更有信心了。",
              "ja": "ありがとう、今はもっと自信があります。",
              "vi": "Cảm ơn, tôi cảm thấy tự tin hơn bây giờ.",
              "en": "Thanks, I feel more confident now.",
            }
          },
          {
            "role": "user",
            "text": "You’ve got this!",
            "translations": {
              "ko": "넌 할 수 있어!",
              "zh": "你可以的！",
              "ja": "あなたなら大丈夫！",
              "vi": "Bạn đã làm được rồi!",
              "en": "You’ve got this!",
            }
          }
        ]
      },
      {
        "description": {
          "en": "Summarizing key takeaways effectively",
          "ko": "효과적으로 핵심 내용 요약하기",
          "zh": "有效地总结关键要点",
          "ja": "効果的にキーポイントをまとめる",
          "vi": "Tóm tắt các điểm chính một cách hiệu quả"
        },
        "dialogues": [
          {
            "role": "ai",
            "text": "Thanks for joining me to rehearse.",
            "translations": {
              "ko": "연습에 함께 해줘서 고마워.",
              "zh": "感谢你陪我一起排练。",
              "ja": "リハーサルに参加してくれてありがとう。",
              "vi": "Cảm ơn bạn đã tham gia luyện tập cùng tôi.",
              "en": "Thanks for joining me to rehearse.",
            }
          },
          {
            "role": "user",
            "text": "No problem. Let’s walk through your opening.",
            "translations": {
              "ko": "문제 없어. 너의 시작 부분을 살펴보자.",
              "zh": "没问题。我们来过一遍你的开场白。",
              "ja": "問題ない。まずはあなたのオープニングを見てみよう。",
              "vi": "Không sao. Hãy xem qua phần mở đầu của bạn.",
              "en": "No problem. Let’s walk through your opening.",
            }
          },
          {
            "role": "ai",
            "text": "I’m starting with a story to grab attention.",
            "translations": {
              "ko": "관심을 끌기 위해 이야기로 시작할 거야.",
              "zh": "我会以一个故事作为开头，以吸引注意力。",
              "ja": "注意を引くために話から始めます。",
              "vi": "Tôi bắt đầu bằng một câu chuyện để thu hút sự chú ý.",
              "en": "I’m starting with a story to grab attention.",
            }
          },
          {
            "role": "user",
            "text": "Good choice. Just slow down a bit when you speak.",
            "translations": {
              "ko": "좋은 선택이야. 말할 때 조금 느리게 해.",
              "zh": "好主意。只是你说话的时候稍微慢一点。",
              "ja": "良い選択です。ただ、話す速度を少し落としてください。",
              "vi": "Lựa chọn tốt. Chỉ cần nói chậm lại một chút.",
              "en": "Good choice. Just slow down a bit when you speak.",
            }
          },
          {
            "role": "ai",
            "text": "Got it. Do the visuals match the flow?",
            "translations": {
              "ko": "알았어. 시각 자료가 흐름에 맞아?",
              "zh": "明白了。视觉效果是否与流程相匹配？",
              "ja": "了解しました。ビジュアルはフローに合っていますか？",
              "vi": "Đã hiểu. Các hình ảnh có phù hợp với dòng chảy không?",
              "en": "Got it. Do the visuals match the flow?",
            }
          },
          {
            "role": "user",
            "text": "Mostly, but slide 3 could be simplified.",
            "translations": {
              "ko": "대부분은 그렇지만, 3번 슬라이드는 단순화할 수 있을 것 같아.",
              "zh": "大部分是，但是第三张幻灯片可以简化一些。",
              "ja": "ほとんどは合っていますが、スライド3はもう少しシンプルにできます。",
              "vi": "Chủ yếu là có, nhưng slide 3 có thể được đơn giản hóa.",
              "en": "Mostly, but slide 3 could be simplified.",
            }
          },
          {
            "role": "ai",
            "text": "I’ll reduce the text and highlight key points.",
            "translations": {
              "ko": "텍스트를 줄이고 핵심 포인트를 강조할게.",
              "zh": "我会减少文字，突出关键点。",
              "ja": "テキストを減らして、キーポイントを強調します。",
              "vi": "Tôi sẽ giảm bớt văn bản và làm nổi bật các điểm chính.",
              "en": "I’ll reduce the text and highlight key points.",
            }
          },
          {
            "role": "user",
            "text": "Perfect. What about the data section?",
            "translations": {
              "ko": "완벽해. 데이터 섹션은 어때?",
              "zh": "完美。数据部分怎么样？",
              "ja": "完璧です。データセクションはどうですか？",
              "vi": "Hoàn hảo. Còn phần dữ liệu thì sao?",
              "en": "Perfect. What about the data section?",
            }
          },
          {
            "role": "ai",
            "text": "I’m using a bar chart to compare results.",
            "translations": {
              "ko": "결과를 비교하기 위해 막대 그래프를 사용하고 있어.",
              "zh": "我用柱状图来比较结果。",
              "ja": "結果を比較するために棒グラフを使用しています。",
              "vi": "Tôi đang sử dụng biểu đồ cột để so sánh kết quả.",
              "en": "I’m using a bar chart to compare results.",
            }
          },
          {
            "role": "user",
            "text": "Looks clear. Just explain the axis labels briefly.",
            "translations": {
              "ko": "명확해 보여. 축 라벨을 간단히 설명해줘.",
              "zh": "看起来很清晰。只是简单解释一下轴标签。",
              "ja": "分かりやすいですね。軸のラベルを簡単に説明してください。",
              "vi": "Rõ ràng. Chỉ cần giải thích ngắn gọn các nhãn trục.",
              "en": "Looks clear. Just explain the axis labels briefly.",
            }
          },
          {
            "role": "ai",
            "text": "Will do. How’s my pacing overall?",
            "translations": {
              "ko": "그렇게 할게. 전체적인 페이싱은 어때?",
              "zh": "我会的。我的节奏怎么样？",
              "ja": "了解しました。全体的に私のペーシングはどうですか？",
              "vi": "Tôi sẽ làm. Nhịp độ của tôi như thế nào?",
              "en": "Will do. How’s my pacing overall?",
            }
          },
          {
            "role": "user",
            "text": "Good, but keep an eye on the time.",
            "translations": {
              "ko": "좋아, 그러나 시간을 잘 지켜봐.",
              "zh": "很好，但是要注意时间。",
              "ja": "良いですが、時間を気にしてください。",
              "vi": "Tốt, nhưng hãy để ý đến thời gian.",
              "en": "Good, but keep an eye on the time.",
            }
          },
          {
            "role": "ai",
            "text": "Should I trim the Q&A to five minutes?",
            "translations": {
              "ko": "Q&A를 5분으로 줄여야 할까?",
              "zh": "我应该把问答环节缩短到五分钟吗？",
              "ja": "Q&Aを5分に短縮すべきですか？",
              "vi": "Tôi nên cắt giảm phần Q&A xuống còn năm phút không?",
              "en": "Should I trim the Q&A to five minutes?",
            }
          },
          {
            "role": "user",
            "text": "Yes, especially if we start late.",
            "translations": {
              "ko": "네, 특히 늦게 시작하면 그렇게 해야 해.",
              "zh": "是的，特别是如果我们开始晚了的话。",
              "ja": "はい、特に遅く始まる場合はそうです。",
              "vi": "Đúng, đặc biệt là nếu chúng ta bắt đầu muộn.",
              "en": "Yes, especially if we start late.",
            }
          },
          {
            "role": "ai",
            "text": "Thanks. I’ll add a clear summary slide at the end.",
            "translations": {
              "ko": "고마워. 마지막에 요약 슬라이드를 명확하게 추가할게.",
              "zh": "谢谢。我会在最后加一个清晰的总结幻灯片。",
              "ja": "ありがとう。最後に明確なまとめのスライドを追加します。",
              "vi": "Cảm ơn. Tôi sẽ thêm một slide tóm tắt rõ ràng ở cuối.",
              "en": "Thanks. I’ll add a clear summary slide at the end.",
            }
          },
          {
            "role": "user",
            "text": "That always helps the audience.",
            "translations": {
              "ko": "그것이 항상 관객에게 도움이 돼.",
              "zh": "这总是对观众有帮助的。",
              "ja": "それは常に観客にとって役立ちます。",
              "vi": "Điều đó luôn giúp ích cho khán giả.",
              "en": "That always helps the audience.",
            }
          },
          {
            "role": "ai",
            "text": "I appreciate your feedback.",
            "translations": {
              "ko": "피드백 감사합니다.",
              "zh": "我很感谢你的反馈。",
              "ja": "フィードバックをいただきありがとうございます。",
              "vi": "Tôi đánh giá cao phản hồi của bạn.",
              "en": "I appreciate your feedback.",
            }
          },
          {
            "role": "user",
            "text": "Happy to help! Good luck with the real thing.",
            "translations": {
              "ko": "도와드리게 돼서 기쁘네요! 실제로 잘 해낼 거야.",
              "zh": "很乐意帮忙！祝你真正演讲时好运。",
              "ja": "助けることができてうれしいです！本番頑張ってください。",
              "vi": "Rất vui được giúp đỡ! Chúc may mắn với phần thực tế.",
              "en": "Happy to help! Good luck with the real thing.",
            }
          },
          {
            "role": "ai",
            "text": "Thanks, I feel more confident now.",
            "translations": {
              "ko": "고마워, 이제 더 자신감이 생겼어.",
              "zh": "谢谢，我现在感觉更有信心了。",
              "ja": "ありがとう、今はもっと自信があります。",
              "vi": "Cảm ơn, tôi cảm thấy tự tin hơn bây giờ.",
              "en": "Thanks, I feel more confident now.",
            }
          },
          {
            "role": "user",
            "text": "You’ve got this!",
            "translations": {
              "ko": "넌 할 수 있어!",
              "zh": "你可以的！",
              "ja": "あなたなら大丈夫！",
              "vi": "Bạn đã làm được rồi!",
              "en": "You’ve got this!",
            }
          }
        ]
      }
    ],
    "advanced": [
      {
        "description": {
          "en": "Delivering a keynote at an industry conference",
          "ko": "산업 컨퍼런스에서 기조연설을 하다",
          "zh": "在行业会议上发表主题演讲",
          "ja": "業界会議での基調講演を行う",
          "vi": "Phát biểu chính tại một hội nghị ngành"
        },
        "dialogues": [
          {
            "role": "ai",
            "text": "Good morning, thank you all for being here today.",
            "translations": {
              "ko": "좋은 아침입니다, 오늘 모두 여기에 오신 것에 감사드립니다.",
              "zh": "早上好，感谢大家今天的到来。",
              "ja": "おはようございます、今日は皆様にお越しいただきありがとうございます。",
              "vi": "Chào buổi sáng, cảm ơn tất cả mọi người đã đến đây hôm nay.",
              "en": "Good morning, thank you all for being here today.",
            }
          },
          {
            "role": "user",
            "text": "We’ve been looking forward to your keynote.",
            "translations": {
              "ko": "여러분의 기조연설을 기대하고 있었습니다.",
              "zh": "我们一直期待着您的主题演讲。",
              "ja": "皆様の基調講演を楽しみにしていました。",
              "vi": "Chúng tôi đã mong chờ bài phát biểu chính của bạn.",
              "en": "We’ve been looking forward to your keynote.",
            }
          },
          {
            "role": "ai",
            "text": "Today, I’ll address the future of AI in enterprise strategy.",
            "translations": {
              "ko": "오늘은 기업 전략에서의 AI의 미래에 대해 다룰 것입니다.",
              "zh": "今天，我将讨论AI在企业战略中的未来。",
              "ja": "今日は、企業戦略におけるAIの未来について話します。",
              "vi": "Hôm nay, tôi sẽ nói về tương lai của AI trong chiến lược doanh nghiệp.",
              "en": "Today, I’ll address the future of AI in enterprise strategy.",
            }
          },
          {
            "role": "user",
            "text": "A critical topic. Many industries are watching closely.",
            "translations": {
              "ko": "중요한 주제입니다. 많은 산업이 주목하고 있습니다.",
              "zh": "这是一个关键的话题。许多行业都在密切关注。",
              "ja": "重要な話題です。多くの業界が注目しています。",
              "vi": "Một chủ đề quan trọng. Nhiều ngành đang theo dõi chặt chẽ.",
              "en": "A critical topic. Many industries are watching closely.",
            }
          },
          {
            "role": "ai",
            "text": "Let’s begin with a global market analysis from the last decade.",
            "translations": {
              "ko": "지난 10년간의 세계 시장 분석부터 시작해봅시다.",
              "zh": "让我们从过去十年的全球市场分析开始。",
              "ja": "過去10年のグローバル市場分析から始めましょう。",
              "vi": "Hãy bắt đầu với phân tích thị trường toàn cầu từ thập kỷ trước.",
              "en": "Let’s begin with a global market analysis from the last decade.",
            }
          },
          {
            "role": "user",
            "text": "Please elaborate on the data source.",
            "translations": {
              "ko": "데이터 출처에 대해 자세히 설명해 주세요.",
              "zh": "请详细说明数据来源。",
              "ja": "データソースについて詳しく説明してください。",
              "vi": "Vui lòng giải thích về nguồn dữ liệu.",
              "en": "Please elaborate on the data source.",
            }
          },
          {
            "role": "ai",
            "text": "The data is drawn from Gartner and McKinsey research papers.",
            "translations": {
              "ko": "데이터는 Gartner와 McKinsey의 연구 논문에서 가져왔습니다.",
              "zh": "数据来自于Gartner和麦肯锡的研究报告。",
              "ja": "データはガートナーとマッキンゼーの研究論文から取得しました。",
              "vi": "Dữ liệu được rút ra từ các bài nghiên cứu của Gartner và McKinsey.",
              "en": "The data is drawn from Gartner and McKinsey research papers.",
            }
          },
          {
            "role": "user",
            "text": "Thanks. What’s your projection for the next five years?",
            "translations": {
              "ko": "감사합니다. 다음 5년에 대한 예측은 어떻게 되나요?",
              "zh": "谢谢。您对未来五年的预测是什么？",
              "ja": "ありがとう。次の5年間の予測は何ですか？",
              "vi": "Cảm ơn. Dự báo của bạn cho năm sau là gì?",
              "en": "Thanks. What’s your projection for the next five years?",
            }
          },
          {
            "role": "ai",
            "text": "We expect AI-driven productivity gains to triple by 2030.",
            "translations": {
              "ko": "2030년까지 AI 주도의 생산성 증가가 3배로 늘어날 것으로 예상합니다.",
              "zh": "我们预计到2030年，AI驱动的生产力增长将翻三倍。",
              "ja": "2030年までにAIによる生産性向上が3倍になると予想しています。",
              "vi": "Chúng tôi dự kiến năng suất do AI tăng gấp ba lần vào năm 2030.",
              "en": "We expect AI-driven productivity gains to triple by 2030.",
            }
          },
          {
            "role": "user",
            "text": "That’s a bold prediction. Can you support it with case studies?",
            "translations": {
              "ko": "대담한 예측입니다. 사례 연구로 이를 뒷받침할 수 있나요?",
              "zh": "这是一个大胆的预测。你能用案例研究来支持吗？",
              "ja": "それは大胆な予測です。ケーススタディで裏付けることはできますか？",
              "vi": "Đó là một dự đoán táo bạo. Bạn có thể hỗ trợ nó bằng các nghiên cứu trường hợp không?",
              "en": "That’s a bold prediction. Can you support it with case studies?",
            }
          },
          {
            "role": "ai",
            "text": "Absolutely. Let me walk you through three examples.",
            "translations": {
              "ko": "당연합니다. 세 가지 예를 들어 설명해 드리겠습니다.",
              "zh": "当然可以。让我带你们看三个例子。",
              "ja": "もちろんです。3つの例を通して説明します。",
              "vi": "Chắc chắn. Hãy để tôi giới thiệu cho bạn ba ví dụ.",
              "en": "Absolutely. Let me walk you through three examples.",
            }
          },
          {
            "role": "user",
            "text": "Please continue.",
            "translations": {
              "ko": "계속해 주세요.",
              "zh": "请继续。",
              "ja": "続けてください。",
              "vi": "Vui lòng tiếp tục.",
              "en": "Please continue.",
            }
          },
          {
            "role": "ai",
            "text": "The first is a logistics company that reduced costs by 25%.",
            "translations": {
              "ko": "첫 번째는 비용을 25% 줄인 물류 회사입니다.",
              "zh": "第一个是一家物流公司，他们将成本降低了25%。",
              "ja": "最初は、コストを25％削減した物流会社です。",
              "vi": "Đầu tiên là một công ty logistics đã giảm chi phí 25%.",
              "en": "The first is a logistics company that reduced costs by 25%.",
            }
          },
          {
            "role": "user",
            "text": "Interesting. How did they manage implementation?",
            "translations": {
              "ko": "흥미롭군요. 그들은 어떻게 구현을 관리했나요?",
              "zh": "有趣。他们是如何管理实施的？",
              "ja": "面白い。どのように実装を管理しましたか？",
              "vi": "Thú vị. Họ đã quản lý việc triển khai như thế nào?",
              "en": "Interesting. How did they manage implementation?",
            }
          },
          {
            "role": "ai",
            "text": "They began with pilot teams and phased integration.",
            "translations": {
              "ko": "그들은 피롯 팀을 시작으로 단계적인 통합을 진행했습니다.",
              "zh": "他们从试点团队开始，然后进行分阶段的整合。",
              "ja": "彼らはパイロットチームから始め、段階的に統合しました。",
              "vi": "Họ bắt đầu với các đội ngũ thử nghiệm và tích hợp theo giai đoạn.",
              "en": "They began with pilot teams and phased integration.",
            }
          },
          {
            "role": "user",
            "text": "Were there any major challenges?",
            "translations": {
              "ko": "주요한 도전 과제가 있었나요?",
              "zh": "有没有遇到重大的挑战？",
              "ja": "大きな課題はありましたか？",
              "vi": "Có thách thức lớn nào không?",
              "en": "Were there any major challenges?",
            }
          },
          {
            "role": "ai",
            "text": "Change management and employee reskilling were key issues.",
            "translations": {
              "ko": "변화 관리와 직원 재교육이 주요 문제였습니다.",
              "zh": "变革管理和员工再培训是关键问题。",
              "ja": "変革管理と従業員の再スキル化が主な課題でした。",
              "vi": "Quản lý thay đổi và đào tạo lại nhân viên là những vấn đề chính.",
              "en": "Change management and employee reskilling were key issues.",
            }
          },
          {
            "role": "user",
            "text": "Thanks. Your insights are very relevant.",
            "translations": {
              "ko": "감사합니다. 여러분의 통찰력은 매우 중요합니다.",
              "zh": "谢谢。您的见解非常相关。",
              "ja": "ありがとう。あなたの洞察は非常に関連性があります。",
              "vi": "Cảm ơn. Ý kiến của bạn rất phù hợp.",
              "en": "Thanks. Your insights are very relevant.",
            }
          },
          {
            "role": "ai",
            "text": "Thank you for your attention. I’m happy to take questions now.",
            "translations": {
              "ko": "주의를 기울여 주셔서 감사합니다. 이제 질문을 받겠습니다.",
              "zh": "感谢大家的关注。我现在很乐意回答问题。",
              "ja": "ご注意いただきありがとうございます。今から質問を受け付けます。",
              "vi": "Cảm ơn sự chú ý của bạn. Tôi sẵn lòng trả lời câu hỏi ngay bây giờ.",
              "en": "Thank you for your attention. I’m happy to take questions now.",
            }
          },
          {
            "role": "user",
            "text": "Let’s open the floor to the audience.",
            "translations": {
              "ko": "이제 관객에게 질문을 받겠습니다.",
              "zh": "让我们向观众提问。",
              "ja": "質問は観客に開放しましょう。",
              "vi": "Hãy mở cửa cho khán giả.",
              "en": "Let’s open the floor to the audience.",
            }
          }
        ]
      },
      {
        "description": {
          "en": "Pitching a high-stakes investment proposal",
          "ko": "고위험 투자 제안을 제시하다",
          "zh": "提出一个高风险的投资提案",
          "ja": "ハイステークスの投資提案をピッチングする",
          "vi": "Đưa ra đề xuất đầu tư quan trọng"
        },
        "dialogues": [
          {
            "role": "ai",
            "text": "Good morning, thank you all for being here today.",
            "translations": {
              "ko": "좋은 아침입니다, 오늘 모두 여기에 오신 것에 감사드립니다.",
              "zh": "早上好，感谢大家今天的到来。",
              "ja": "おはようございます、今日は皆様にお越しいただきありがとうございます。",
              "vi": "Chào buổi sáng, cảm ơn tất cả mọi người đã đến đây hôm nay.",
              "en": "Good morning, thank you all for being here today.",
            }
          },
          {
            "role": "user",
            "text": "We’ve been looking forward to your keynote.",
            "translations": {
              "ko": "여러분의 기조연설을 기대하고 있었습니다.",
              "zh": "我们一直期待着您的主题演讲。",
              "ja": "皆様の基調講演を楽しみにしていました。",
              "vi": "Chúng tôi đã mong chờ bài phát biểu chính của bạn.",
              "en": "We’ve been looking forward to your keynote.",
            }
          },
          {
            "role": "ai",
            "text": "Today, I’ll address the future of AI in enterprise strategy.",
            "translations": {
              "ko": "오늘은 기업 전략에서의 AI의 미래에 대해 다룰 것입니다.",
              "zh": "今天，我将讨论AI在企业战略中的未来。",
              "ja": "今日は、企業戦略におけるAIの未来について話します。",
              "vi": "Hôm nay, tôi sẽ nói về tương lai của AI trong chiến lược doanh nghiệp.",
              "en": "Today, I’ll address the future of AI in enterprise strategy.",
            }
          },
          {
            "role": "user",
            "text": "A critical topic. Many industries are watching closely.",
            "translations": {
              "ko": "중요한 주제입니다. 많은 산업이 주목하고 있습니다.",
              "zh": "这是一个关键的话题。许多行业都在密切关注。",
              "ja": "重要な話題です。多くの業界が注目しています。",
              "vi": "Một chủ đề quan trọng. Nhiều ngành đang theo dõi chặt chẽ.",
              "en": "A critical topic. Many industries are watching closely.",
            }
          },
          {
            "role": "ai",
            "text": "Let’s begin with a global market analysis from the last decade.",
            "translations": {
              "ko": "지난 10년간의 세계 시장 분석부터 시작해봅시다.",
              "zh": "让我们从过去十年的全球市场分析开始。",
              "ja": "過去10年のグローバル市場分析から始めましょう。",
              "vi": "Hãy bắt đầu với phân tích thị trường toàn cầu từ thập kỷ trước.",
              "en": "Let’s begin with a global market analysis from the last decade.",
            }
          },
          {
            "role": "user",
            "text": "Please elaborate on the data source.",
            "translations": {
              "ko": "데이터 출처에 대해 자세히 설명해 주세요.",
              "zh": "请详细说明数据来源。",
              "ja": "データソースについて詳しく説明してください。",
              "vi": "Vui lòng giải thích về nguồn dữ liệu.",
              "en": "Please elaborate on the data source.",
            }
          },
          {
            "role": "ai",
            "text": "The data is drawn from Gartner and McKinsey research papers.",
            "translations": {
              "ko": "데이터는 Gartner와 McKinsey의 연구 논문에서 가져왔습니다.",
              "zh": "数据来自于Gartner和麦肯锡的研究报告。",
              "ja": "データはガートナーとマッキンゼーの研究論文から取得しました。",
              "vi": "Dữ liệu được rút ra từ các bài nghiên cứu của Gartner và McKinsey.",
              "en": "The data is drawn from Gartner and McKinsey research papers.",
            }
          },
          {
            "role": "user",
            "text": "Thanks. What’s your projection for the next five years?",
            "translations": {
              "ko": "감사합니다. 다음 5년에 대한 예측은 어떻게 되나요?",
              "zh": "谢谢。您对未来五年的预测是什么？",
              "ja": "ありがとう。次の5年間の予測は何ですか？",
              "vi": "Cảm ơn. Dự báo của bạn cho năm sau là gì?",
              "en": "Thanks. What’s your projection for the next five years?",
            }
          },
          {
            "role": "ai",
            "text": "We expect AI-driven productivity gains to triple by 2030.",
            "translations": {
              "ko": "2030년까지 AI 주도의 생산성 증가가 3배로 늘어날 것으로 예상합니다.",
              "zh": "我们预计到2030年，AI驱动的生产力增长将翻三倍。",
              "ja": "2030年までにAIによる生産性向上が3倍になると予想しています。",
              "vi": "Chúng tôi dự kiến năng suất do AI tăng gấp ba lần vào năm 2030.",
              "en": "We expect AI-driven productivity gains to triple by 2030.",
            }
          },
          {
            "role": "user",
            "text": "That’s a bold prediction. Can you support it with case studies?",
            "translations": {
              "ko": "대담한 예측입니다. 사례 연구로 이를 뒷받침할 수 있나요?",
              "zh": "这是一个大胆的预测。你能用案例研究来支持吗？",
              "ja": "それは大胆な予測です。ケーススタディで裏付けることはできますか？",
              "vi": "Đó là một dự đoán táo bạo. Bạn có thể hỗ trợ nó bằng các nghiên cứu trường hợp không?",
              "en": "That’s a bold prediction. Can you support it with case studies?",
            }
          },
          {
            "role": "ai",
            "text": "Absolutely. Let me walk you through three examples.",
            "translations": {
              "ko": "당연합니다. 세 가지 예를 들어 설명해 드리겠습니다.",
              "zh": "当然可以。让我带你们看三个例子。",
              "ja": "もちろんです。3つの例を通して説明します。",
              "vi": "Chắc chắn. Hãy để tôi giới thiệu cho bạn ba ví dụ.",
              "en": "Absolutely. Let me walk you through three examples.",
            }
          },
          {
            "role": "user",
            "text": "Please continue.",
            "translations": {
              "ko": "계속해 주세요.",
              "zh": "请继续。",
              "ja": "続けてください。",
              "vi": "Vui lòng tiếp tục.",
              "en": "Please continue.",
            }
          },
          {
            "role": "ai",
            "text": "The first is a logistics company that reduced costs by 25%.",
            "translations": {
              "ko": "첫 번째는 비용을 25% 줄인 물류 회사입니다.",
              "zh": "第一个是一家物流公司，他们将成本降低了25%。",
              "ja": "最初は、コストを25％削減した物流会社です。",
              "vi": "Đầu tiên là một công ty logistics đã giảm chi phí 25%.",
              "en": "The first is a logistics company that reduced costs by 25%.",
            }
          },
          {
            "role": "user",
            "text": "Interesting. How did they manage implementation?",
            "translations": {
              "ko": "흥미롭군요. 그들은 어떻게 구현을 관리했나요?",
              "zh": "有趣。他们是如何管理实施的？",
              "ja": "面白い。どのように実装を管理しましたか？",
              "vi": "Thú vị. Họ đã quản lý việc triển khai như thế nào?",
              "en": "Interesting. How did they manage implementation?",
            }
          },
          {
            "role": "ai",
            "text": "They began with pilot teams and phased integration.",
            "translations": {
              "ko": "그들은 피롯 팀을 시작으로 단계적인 통합을 진행했습니다.",
              "zh": "他们从试点团队开始，然后进行分阶段的整合。",
              "ja": "彼らはパイロットチームから始め、段階的に統合しました。",
              "vi": "Họ bắt đầu với các đội ngũ thử nghiệm và tích hợp theo giai đoạn.",
              "en": "They began with pilot teams and phased integration.",
            }
          },
          {
            "role": "user",
            "text": "Were there any major challenges?",
            "translations": {
              "ko": "주요한 도전 과제가 있었나요?",
              "zh": "有没有遇到重大的挑战？",
              "ja": "大きな課題はありましたか？",
              "vi": "Có thách thức lớn nào không?",
              "en": "Were there any major challenges?",
            }
          },
          {
            "role": "ai",
            "text": "Change management and employee reskilling were key issues.",
            "translations": {
              "ko": "변화 관리와 직원 재교육이 주요 문제였습니다.",
              "zh": "变革管理和员工再培训是关键问题。",
              "ja": "変革管理と従業員の再スキル化が主な課題でした。",
              "vi": "Quản lý thay đổi và đào tạo lại nhân viên là những vấn đề chính.",
              "en": "Change management and employee reskilling were key issues.",
            }
          },
          {
            "role": "user",
            "text": "Thanks. Your insights are very relevant.",
            "translations": {
              "ko": "감사합니다. 여러분의 통찰력은 매우 중요합니다.",
              "zh": "谢谢。您的见解非常相关。",
              "ja": "ありがとう。あなたの洞察は非常に関連性があります。",
              "vi": "Cảm ơn. Ý kiến của bạn rất phù hợp.",
              "en": "Thanks. Your insights are very relevant.",
            }
          },
          {
            "role": "ai",
            "text": "Thank you for your attention. I’m happy to take questions now.",
            "translations": {
              "ko": "주의를 기울여 주셔서 감사합니다. 이제 질문을 받겠습니다.",
              "zh": "感谢大家的关注。我现在很乐意回答问题。",
              "ja": "ご注意いただきありがとうございます。今から質問を受け付けます。",
              "vi": "Cảm ơn sự chú ý của bạn. Tôi sẵn lòng trả lời câu hỏi ngay bây giờ.",
              "en": "Thank you for your attention. I’m happy to take questions now.",
            }
          },
          {
            "role": "user",
            "text": "Let’s open the floor to the audience.",
            "translations": {
              "ko": "이제 관객에게 질문을 받겠습니다.",
              "zh": "让我们向观众提问。",
              "ja": "質問は観客に開放しましょう。",
              "vi": "Hãy mở cửa cho khán giả.",
              "en": "Let’s open the floor to the audience.",
            }
          }
        ]
      },
      {
        "description": {
          "en": "Presenting complex research to experts",
          "ko": "전문가에게 복잡한 연구를 발표하다",
          "zh": "向专家展示复杂的研究",
          "ja": "専門家に複雑な研究をプレゼンテーションする",
          "vi": "Trình bày nghiên cứu phức tạp cho các chuyên gia"
        },
        "dialogues": [
          {
            "role": "ai",
            "text": "Good morning, thank you all for being here today.",
            "translations": {
              "ko": "좋은 아침입니다, 오늘 모두 여기에 오신 것에 감사드립니다.",
              "zh": "早上好，感谢大家今天的到来。",
              "ja": "おはようございます、今日は皆様にお越しいただきありがとうございます。",
              "vi": "Chào buổi sáng, cảm ơn tất cả mọi người đã đến đây hôm nay.",
              "en": "Good morning, thank you all for being here today.",
            }
          },
          {
            "role": "user",
            "text": "We’ve been looking forward to your keynote.",
            "translations": {
              "ko": "여러분의 기조연설을 기대하고 있었습니다.",
              "zh": "我们一直期待着您的主题演讲。",
              "ja": "皆様の基調講演を楽しみにしていました。",
              "vi": "Chúng tôi đã mong chờ bài phát biểu chính của bạn.",
              "en": "We’ve been looking forward to your keynote.",
            }
          },
          {
            "role": "ai",
            "text": "Today, I’ll address the future of AI in enterprise strategy.",
            "translations": {
              "ko": "오늘은 기업 전략에서의 AI의 미래에 대해 다룰 것입니다.",
              "zh": "今天，我将讨论AI在企业战略中的未来。",
              "ja": "今日は、企業戦略におけるAIの未来について話します。",
              "vi": "Hôm nay, tôi sẽ nói về tương lai của AI trong chiến lược doanh nghiệp.",
              "en": "Today, I’ll address the future of AI in enterprise strategy.",
            }
          },
          {
            "role": "user",
            "text": "A critical topic. Many industries are watching closely.",
            "translations": {
              "ko": "중요한 주제입니다. 많은 산업이 주목하고 있습니다.",
              "zh": "这是一个关键的话题。许多行业都在密切关注。",
              "ja": "重要な話題です。多くの業界が注目しています。",
              "vi": "Một chủ đề quan trọng. Nhiều ngành đang theo dõi chặt chẽ.",
              "en": "A critical topic. Many industries are watching closely.",
            }
          },
          {
            "role": "ai",
            "text": "Let’s begin with a global market analysis from the last decade.",
            "translations": {
              "ko": "지난 10년간의 세계 시장 분석부터 시작해봅시다.",
              "zh": "让我们从过去十年的全球市场分析开始。",
              "ja": "過去10年のグローバル市場分析から始めましょう。",
              "vi": "Hãy bắt đầu với phân tích thị trường toàn cầu từ thập kỷ trước.",
              "en": "Let’s begin with a global market analysis from the last decade.",
            }
          },
          {
            "role": "user",
            "text": "Please elaborate on the data source.",
            "translations": {
              "ko": "데이터 출처에 대해 자세히 설명해 주세요.",
              "zh": "请详细说明数据来源。",
              "ja": "データソースについて詳しく説明してください。",
              "vi": "Vui lòng giải thích về nguồn dữ liệu.",
              "en": "Please elaborate on the data source.",
            }
          },
          {
            "role": "ai",
            "text": "The data is drawn from Gartner and McKinsey research papers.",
            "translations": {
              "ko": "데이터는 Gartner와 McKinsey의 연구 논문에서 가져왔습니다.",
              "zh": "数据来自于Gartner和麦肯锡的研究报告。",
              "ja": "データはガートナーとマッキンゼーの研究論文から取得しました。",
              "vi": "Dữ liệu được rút ra từ các bài nghiên cứu của Gartner và McKinsey.",
              "en": "The data is drawn from Gartner and McKinsey research papers.",
            }
          },
          {
            "role": "user",
            "text": "Thanks. What’s your projection for the next five years?",
            "translations": {
              "ko": "감사합니다. 다음 5년에 대한 예측은 어떻게 되나요?",
              "zh": "谢谢。您对未来五年的预测是什么？",
              "ja": "ありがとう。次の5年間の予測は何ですか？",
              "vi": "Cảm ơn. Dự báo của bạn cho năm sau là gì?",
              "en": "Thanks. What’s your projection for the next five years?",
            }
          },
          {
            "role": "ai",
            "text": "We expect AI-driven productivity gains to triple by 2030.",
            "translations": {
              "ko": "2030년까지 AI 주도의 생산성 증가가 3배로 늘어날 것으로 예상합니다.",
              "zh": "我们预计到2030年，AI驱动的生产力增长将翻三倍。",
              "ja": "2030年までにAIによる生産性向上が3倍になると予想しています。",
              "vi": "Chúng tôi dự kiến năng suất do AI tăng gấp ba lần vào năm 2030.",
              "en": "We expect AI-driven productivity gains to triple by 2030.",
            }
          },
          {
            "role": "user",
            "text": "That’s a bold prediction. Can you support it with case studies?",
            "translations": {
              "ko": "대담한 예측입니다. 사례 연구로 이를 뒷받침할 수 있나요?",
              "zh": "这是一个大胆的预测。你能用案例研究来支持吗？",
              "ja": "それは大胆な予測です。ケーススタディで裏付けることはできますか？",
              "vi": "Đó là một dự đoán táo bạo. Bạn có thể hỗ trợ nó bằng các nghiên cứu trường hợp không?",
              "en": "That’s a bold prediction. Can you support it with case studies?",
            }
          },
          {
            "role": "ai",
            "text": "Absolutely. Let me walk you through three examples.",
            "translations": {
              "ko": "당연합니다. 세 가지 예를 들어 설명해 드리겠습니다.",
              "zh": "当然可以。让我带你们看三个例子。",
              "ja": "もちろんです。3つの例を通して説明します。",
              "vi": "Chắc chắn. Hãy để tôi giới thiệu cho bạn ba ví dụ.",
              "en": "Absolutely. Let me walk you through three examples.",
            }
          },
          {
            "role": "user",
            "text": "Please continue.",
            "translations": {
              "ko": "계속해 주세요.",
              "zh": "请继续。",
              "ja": "続けてください。",
              "vi": "Vui lòng tiếp tục.",
              "en": "Please continue.",
            }
          },
          {
            "role": "ai",
            "text": "The first is a logistics company that reduced costs by 25%.",
            "translations": {
              "ko": "첫 번째는 비용을 25% 줄인 물류 회사입니다.",
              "zh": "第一个是一家物流公司，他们将成本降低了25%。",
              "ja": "最初は、コストを25％削減した物流会社です。",
              "vi": "Đầu tiên là một công ty logistics đã giảm chi phí 25%.",
              "en": "The first is a logistics company that reduced costs by 25%.",
            }
          },
          {
            "role": "user",
            "text": "Interesting. How did they manage implementation?",
            "translations": {
              "ko": "흥미롭군요. 그들은 어떻게 구현을 관리했나요?",
              "zh": "有趣。他们是如何管理实施的？",
              "ja": "面白い。どのように実装を管理しましたか？",
              "vi": "Thú vị. Họ đã quản lý việc triển khai như thế nào?",
              "en": "Interesting. How did they manage implementation?",
            }
          },
          {
            "role": "ai",
            "text": "They began with pilot teams and phased integration.",
            "translations": {
              "ko": "그들은 피롯 팀을 시작으로 단계적인 통합을 진행했습니다.",
              "zh": "他们从试点团队开始，然后进行分阶段的整合。",
              "ja": "彼らはパイロットチームから始め、段階的に統合しました。",
              "vi": "Họ bắt đầu với các đội ngũ thử nghiệm và tích hợp theo giai đoạn.",
              "en": "They began with pilot teams and phased integration.",
            }
          },
          {
            "role": "user",
            "text": "Were there any major challenges?",
            "translations": {
              "ko": "주요한 도전 과제가 있었나요?",
              "zh": "有没有遇到重大的挑战？",
              "ja": "大きな課題はありましたか？",
              "vi": "Có thách thức lớn nào không?",
              "en": "Were there any major challenges?",
            }
          },
          {
            "role": "ai",
            "text": "Change management and employee reskilling were key issues.",
            "translations": {
              "ko": "변화 관리와 직원 재교육이 주요 문제였습니다.",
              "zh": "变革管理和员工再培训是关键问题。",
              "ja": "変革管理と従業員の再スキル化が主な課題でした。",
              "vi": "Quản lý thay đổi và đào tạo lại nhân viên là những vấn đề chính.",
              "en": "Change management and employee reskilling were key issues.",
            }
          },
          {
            "role": "user",
            "text": "Thanks. Your insights are very relevant.",
            "translations": {
              "ko": "감사합니다. 여러분의 통찰력은 매우 중요합니다.",
              "zh": "谢谢。您的见解非常相关。",
              "ja": "ありがとう。あなたの洞察は非常に関連性があります。",
              "vi": "Cảm ơn. Ý kiến của bạn rất phù hợp.",
              "en": "Thanks. Your insights are very relevant.",
            }
          },
          {
            "role": "ai",
            "text": "Thank you for your attention. I’m happy to take questions now.",
            "translations": {
              "ko": "주의를 기울여 주셔서 감사합니다. 이제 질문을 받겠습니다.",
              "zh": "感谢大家的关注。我现在很乐意回答问题。",
              "ja": "ご注意いただきありがとうございます。今から質問を受け付けます。",
              "vi": "Cảm ơn sự chú ý của bạn. Tôi sẵn lòng trả lời câu hỏi ngay bây giờ.",
              "en": "Thank you for your attention. I’m happy to take questions now.",
            }
          },
          {
            "role": "user",
            "text": "Let’s open the floor to the audience.",
            "translations": {
              "ko": "이제 관객에게 질문을 받겠습니다.",
              "zh": "让我们向观众提问。",
              "ja": "質問は観客に開放しましょう。",
              "vi": "Hãy mở cửa cho khán giả.",
              "en": "Let’s open the floor to the audience.",
            }
          }
        ]
      },
      {
        "description": {
          "en": "Addressing a controversial topic publicly",
          "ko": "공개적으로 논란의 여지가 있는 주제를 다루다",
          "zh": "公开讨论有争议的话题",
          "ja": "公に物議を醸す話題について話す",
          "vi": "Thảo luận về một chủ đề gây tranh cãi công khai"
        },
        "dialogues": [
          {
            "role": "ai",
            "text": "Good morning, thank you all for being here today.",
            "translations": {
              "ko": "좋은 아침입니다, 오늘 모두 여기에 오신 것에 감사드립니다.",
              "zh": "早上好，感谢大家今天的到来。",
              "ja": "おはようございます、今日は皆様にお越しいただきありがとうございます。",
              "vi": "Chào buổi sáng, cảm ơn tất cả mọi người đã đến đây hôm nay.",
              "en": "Good morning, thank you all for being here today.",
            }
          },
          {
            "role": "user",
            "text": "We’ve been looking forward to your keynote.",
            "translations": {
              "ko": "여러분의 기조연설을 기대하고 있었습니다.",
              "zh": "我们一直期待着您的主题演讲。",
              "ja": "皆様の基調講演を楽しみにしていました。",
              "vi": "Chúng tôi đã mong chờ bài phát biểu chính của bạn.",
              "en": "We’ve been looking forward to your keynote.",
            }
          },
          {
            "role": "ai",
            "text": "Today, I’ll address the future of AI in enterprise strategy.",
            "translations": {
              "ko": "오늘은 기업 전략에서의 AI의 미래에 대해 다룰 것입니다.",
              "zh": "今天，我将讨论AI在企业战略中的未来。",
              "ja": "今日は、企業戦略におけるAIの未来について話します。",
              "vi": "Hôm nay, tôi sẽ nói về tương lai của AI trong chiến lược doanh nghiệp.",
              "en": "Today, I’ll address the future of AI in enterprise strategy.",
            }
          },
          {
            "role": "user",
            "text": "A critical topic. Many industries are watching closely.",
            "translations": {
              "ko": "중요한 주제입니다. 많은 산업이 주목하고 있습니다.",
              "zh": "这是一个关键的话题。许多行业都在密切关注。",
              "ja": "重要な話題です。多くの業界が注目しています。",
              "vi": "Một chủ đề quan trọng. Nhiều ngành đang theo dõi chặt chẽ.",
              "en": "A critical topic. Many industries are watching closely.",
            }
          },
          {
            "role": "ai",
            "text": "Let’s begin with a global market analysis from the last decade.",
            "translations": {
              "ko": "지난 10년간의 세계 시장 분석부터 시작해봅시다.",
              "zh": "让我们从过去十年的全球市场分析开始。",
              "ja": "過去10年のグローバル市場分析から始めましょう。",
              "vi": "Hãy bắt đầu với phân tích thị trường toàn cầu từ thập kỷ trước.",
              "en": "Let’s begin with a global market analysis from the last decade.",
            }
          },
          {
            "role": "user",
            "text": "Please elaborate on the data source.",
            "translations": {
              "ko": "데이터 출처에 대해 자세히 설명해 주세요.",
              "zh": "请详细说明数据来源。",
              "ja": "データソースについて詳しく説明してください。",
              "vi": "Vui lòng giải thích về nguồn dữ liệu.",
              "en": "Please elaborate on the data source.",
            }
          },
          {
            "role": "ai",
            "text": "The data is drawn from Gartner and McKinsey research papers.",
            "translations": {
              "ko": "데이터는 Gartner와 McKinsey의 연구 논문에서 가져왔습니다.",
              "zh": "数据来自于Gartner和麦肯锡的研究报告。",
              "ja": "データはガートナーとマッキンゼーの研究論文から取得しました。",
              "vi": "Dữ liệu được rút ra từ các bài nghiên cứu của Gartner và McKinsey.",
              "en": "The data is drawn from Gartner and McKinsey research papers.",
            }
          },
          {
            "role": "user",
            "text": "Thanks. What’s your projection for the next five years?",
            "translations": {
              "ko": "감사합니다. 다음 5년에 대한 예측은 어떻게 되나요?",
              "zh": "谢谢。您对未来五年的预测是什么？",
              "ja": "ありがとう。次の5年間の予測は何ですか？",
              "vi": "Cảm ơn. Dự báo của bạn cho năm sau là gì?",
              "en": "Thanks. What’s your projection for the next five years?",
            }
          },
          {
            "role": "ai",
            "text": "We expect AI-driven productivity gains to triple by 2030.",
            "translations": {
              "ko": "2030년까지 AI 주도의 생산성 증가가 3배로 늘어날 것으로 예상합니다.",
              "zh": "我们预计到2030年，AI驱动的生产力增长将翻三倍。",
              "ja": "2030年までにAIによる生産性向上が3倍になると予想しています。",
              "vi": "Chúng tôi dự kiến năng suất do AI tăng gấp ba lần vào năm 2030.",
              "en": "We expect AI-driven productivity gains to triple by 2030.",
            }
          },
          {
            "role": "user",
            "text": "That’s a bold prediction. Can you support it with case studies?",
            "translations": {
              "ko": "대담한 예측입니다. 사례 연구로 이를 뒷받침할 수 있나요?",
              "zh": "这是一个大胆的预测。你能用案例研究来支持吗？",
              "ja": "それは大胆な予測です。ケーススタディで裏付けることはできますか？",
              "vi": "Đó là một dự đoán táo bạo. Bạn có thể hỗ trợ nó bằng các nghiên cứu trường hợp không?",
              "en": "That’s a bold prediction. Can you support it with case studies?",
            }
          },
          {
            "role": "ai",
            "text": "Absolutely. Let me walk you through three examples.",
            "translations": {
              "ko": "당연합니다. 세 가지 예를 들어 설명해 드리겠습니다.",
              "zh": "当然可以。让我带你们看三个例子。",
              "ja": "もちろんです。3つの例を通して説明します。",
              "vi": "Chắc chắn. Hãy để tôi giới thiệu cho bạn ba ví dụ.",
              "en": "Absolutely. Let me walk you through three examples.",
            }
          },
          {
            "role": "user",
            "text": "Please continue.",
            "translations": {
              "ko": "계속해 주세요.",
              "zh": "请继续。",
              "ja": "続けてください。",
              "vi": "Vui lòng tiếp tục.",
              "en": "Please continue.",
            }
          },
          {
            "role": "ai",
            "text": "The first is a logistics company that reduced costs by 25%.",
            "translations": {
              "ko": "첫 번째는 비용을 25% 줄인 물류 회사입니다.",
              "zh": "第一个是一家物流公司，他们将成本降低了25%。",
              "ja": "最初は、コストを25％削減した物流会社です。",
              "vi": "Đầu tiên là một công ty logistics đã giảm chi phí 25%.",
              "en": "The first is a logistics company that reduced costs by 25%.",
            }
          },
          {
            "role": "user",
            "text": "Interesting. How did they manage implementation?",
            "translations": {
              "ko": "흥미롭군요. 그들은 어떻게 구현을 관리했나요?",
              "zh": "有趣。他们是如何管理实施的？",
              "ja": "面白い。どのように実装を管理しましたか？",
              "vi": "Thú vị. Họ đã quản lý việc triển khai như thế nào?",
              "en": "Interesting. How did they manage implementation?",
            }
          },
          {
            "role": "ai",
            "text": "They began with pilot teams and phased integration.",
            "translations": {
              "ko": "그들은 피롯 팀을 시작으로 단계적인 통합을 진행했습니다.",
              "zh": "他们从试点团队开始，然后进行分阶段的整合。",
              "ja": "彼らはパイロットチームから始め、段階的に統合しました。",
              "vi": "Họ bắt đầu với các đội ngũ thử nghiệm và tích hợp theo giai đoạn.",
              "en": "They began with pilot teams and phased integration.",
            }
          },
          {
            "role": "user",
            "text": "Were there any major challenges?",
            "translations": {
              "ko": "주요한 도전 과제가 있었나요?",
              "zh": "有没有遇到重大的挑战？",
              "ja": "大きな課題はありましたか？",
              "vi": "Có thách thức lớn nào không?",
              "en": "Were there any major challenges?",
            }
          },
          {
            "role": "ai",
            "text": "Change management and employee reskilling were key issues.",
            "translations": {
              "ko": "변화 관리와 직원 재교육이 주요 문제였습니다.",
              "zh": "变革管理和员工再培训是关键问题。",
              "ja": "変革管理と従業員の再スキル化が主な課題でした。",
              "vi": "Quản lý thay đổi và đào tạo lại nhân viên là những vấn đề chính.",
              "en": "Change management and employee reskilling were key issues.",
            }
          },
          {
            "role": "user",
            "text": "Thanks. Your insights are very relevant.",
            "translations": {
              "ko": "감사합니다. 여러분의 통찰력은 매우 중요합니다.",
              "zh": "谢谢。您的见解非常相关。",
              "ja": "ありがとう。あなたの洞察は非常に関連性があります。",
              "vi": "Cảm ơn. Ý kiến của bạn rất phù hợp.",
              "en": "Thanks. Your insights are very relevant.",
            }
          },
          {
            "role": "ai",
            "text": "Thank you for your attention. I’m happy to take questions now.",
            "translations": {
              "ko": "주의를 기울여 주셔서 감사합니다. 이제 질문을 받겠습니다.",
              "zh": "感谢大家的关注。我现在很乐意回答问题。",
              "ja": "ご注意いただきありがとうございます。今から質問を受け付けます。",
              "vi": "Cảm ơn sự chú ý của bạn. Tôi sẵn lòng trả lời câu hỏi ngay bây giờ.",
              "en": "Thank you for your attention. I’m happy to take questions now.",
            }
          },
          {
            "role": "user",
            "text": "Let’s open the floor to the audience.",
            "translations": {
              "ko": "이제 관객에게 질문을 받겠습니다.",
              "zh": "让我们向观众提问。",
              "ja": "質問は観客に開放しましょう。",
              "vi": "Hãy mở cửa cho khán giả.",
              "en": "Let’s open the floor to the audience.",
            }
          }
        ]
      },
      {
        "description": {
          "en": "Explaining policy to non-technical stakeholders",
          "ko": "비기술적 이해관계자에게 정책을 설명하다",
          "zh": "向非技术利益相关者解释政策",
          "ja": "非技術的な関係者に対してポリシーを説明する",
          "vi": "Giải thích chính sách cho các bên liên quan không chuyên môn"
        },
        "dialogues": [
          {
            "role": "ai",
            "text": "Good morning, thank you all for being here today.",
            "translations": {
              "ko": "좋은 아침입니다, 오늘 모두 여기에 오신 것에 감사드립니다.",
              "zh": "早上好，感谢大家今天的到来。",
              "ja": "おはようございます、今日は皆様にお越しいただきありがとうございます。",
              "vi": "Chào buổi sáng, cảm ơn tất cả mọi người đã đến đây hôm nay.",
              "en": "Good morning, thank you all for being here today.",
            }
          },
          {
            "role": "user",
            "text": "We’ve been looking forward to your keynote.",
            "translations": {
              "ko": "여러분의 기조연설을 기대하고 있었습니다.",
              "zh": "我们一直期待着您的主题演讲。",
              "ja": "皆様の基調講演を楽しみにしていました。",
              "vi": "Chúng tôi đã mong chờ bài phát biểu chính của bạn.",
              "en": "We’ve been looking forward to your keynote.",
            }
          },
          {
            "role": "ai",
            "text": "Today, I’ll address the future of AI in enterprise strategy.",
            "translations": {
              "ko": "오늘은 기업 전략에서의 AI의 미래에 대해 다룰 것입니다.",
              "zh": "今天，我将讨论AI在企业战略中的未来。",
              "ja": "今日は、企業戦略におけるAIの未来について話します。",
              "vi": "Hôm nay, tôi sẽ nói về tương lai của AI trong chiến lược doanh nghiệp.",
              "en": "Today, I’ll address the future of AI in enterprise strategy.",
            }
          },
          {
            "role": "user",
            "text": "A critical topic. Many industries are watching closely.",
            "translations": {
              "ko": "중요한 주제입니다. 많은 산업이 주목하고 있습니다.",
              "zh": "这是一个关键的话题。许多行业都在密切关注。",
              "ja": "重要な話題です。多くの業界が注目しています。",
              "vi": "Một chủ đề quan trọng. Nhiều ngành đang theo dõi chặt chẽ.",
              "en": "A critical topic. Many industries are watching closely.",
            }
          },
          {
            "role": "ai",
            "text": "Let’s begin with a global market analysis from the last decade.",
            "translations": {
              "ko": "지난 10년간의 세계 시장 분석부터 시작해봅시다.",
              "zh": "让我们从过去十年的全球市场分析开始。",
              "ja": "過去10年のグローバル市場分析から始めましょう。",
              "vi": "Hãy bắt đầu với phân tích thị trường toàn cầu từ thập kỷ trước.",
              "en": "Let’s begin with a global market analysis from the last decade.",
            }
          },
          {
            "role": "user",
            "text": "Please elaborate on the data source.",
            "translations": {
              "ko": "데이터 출처에 대해 자세히 설명해 주세요.",
              "zh": "请详细说明数据来源。",
              "ja": "データソースについて詳しく説明してください。",
              "vi": "Vui lòng giải thích về nguồn dữ liệu.",
              "en": "Please elaborate on the data source.",
            }
          },
          {
            "role": "ai",
            "text": "The data is drawn from Gartner and McKinsey research papers.",
            "translations": {
              "ko": "데이터는 Gartner와 McKinsey의 연구 논문에서 가져왔습니다.",
              "zh": "数据来自于Gartner和麦肯锡的研究报告。",
              "ja": "データはガートナーとマッキンゼーの研究論文から取得しました。",
              "vi": "Dữ liệu được rút ra từ các bài nghiên cứu của Gartner và McKinsey.",
              "en": "The data is drawn from Gartner and McKinsey research papers.",
            }
          },
          {
            "role": "user",
            "text": "Thanks. What’s your projection for the next five years?",
            "translations": {
              "ko": "감사합니다. 다음 5년에 대한 예측은 어떻게 되나요?",
              "zh": "谢谢。您对未来五年的预测是什么？",
              "ja": "ありがとう。次の5年間の予測は何ですか？",
              "vi": "Cảm ơn. Dự báo của bạn cho năm sau là gì?",
              "en": "Thanks. What’s your projection for the next five years?",
            }
          },
          {
            "role": "ai",
            "text": "We expect AI-driven productivity gains to triple by 2030.",
            "translations": {
              "ko": "2030년까지 AI 주도의 생산성 증가가 3배로 늘어날 것으로 예상합니다.",
              "zh": "我们预计到2030年，AI驱动的生产力增长将翻三倍。",
              "ja": "2030年までにAIによる生産性向上が3倍になると予想しています。",
              "vi": "Chúng tôi dự kiến năng suất do AI tăng gấp ba lần vào năm 2030.",
              "en": "We expect AI-driven productivity gains to triple by 2030.",
            }
          },
          {
            "role": "user",
            "text": "That’s a bold prediction. Can you support it with case studies?",
            "translations": {
              "ko": "대담한 예측입니다. 사례 연구로 이를 뒷받침할 수 있나요?",
              "zh": "这是一个大胆的预测。你能用案例研究来支持吗？",
              "ja": "それは大胆な予測です。ケーススタディで裏付けることはできますか？",
              "vi": "Đó là một dự đoán táo bạo. Bạn có thể hỗ trợ nó bằng các nghiên cứu trường hợp không?",
              "en": "That’s a bold prediction. Can you support it with case studies?",
            }
          },
          {
            "role": "ai",
            "text": "Absolutely. Let me walk you through three examples.",
            "translations": {
              "ko": "당연합니다. 세 가지 예를 들어 설명해 드리겠습니다.",
              "zh": "当然可以。让我带你们看三个例子。",
              "ja": "もちろんです。3つの例を通して説明します。",
              "vi": "Chắc chắn. Hãy để tôi giới thiệu cho bạn ba ví dụ.",
              "en": "Absolutely. Let me walk you through three examples.",
            }
          },
          {
            "role": "user",
            "text": "Please continue.",
            "translations": {
              "ko": "계속해 주세요.",
              "zh": "请继续。",
              "ja": "続けてください。",
              "vi": "Vui lòng tiếp tục.",
              "en": "Please continue.",
            }
          },
          {
            "role": "ai",
            "text": "The first is a logistics company that reduced costs by 25%.",
            "translations": {
              "ko": "첫 번째는 비용을 25% 줄인 물류 회사입니다.",
              "zh": "第一个是一家物流公司，他们将成本降低了25%。",
              "ja": "最初は、コストを25％削減した物流会社です。",
              "vi": "Đầu tiên là một công ty logistics đã giảm chi phí 25%.",
              "en": "The first is a logistics company that reduced costs by 25%.",
            }
          },
          {
            "role": "user",
            "text": "Interesting. How did they manage implementation?",
            "translations": {
              "ko": "흥미롭군요. 그들은 어떻게 구현을 관리했나요?",
              "zh": "有趣。他们是如何管理实施的？",
              "ja": "面白い。どのように実装を管理しましたか？",
              "vi": "Thú vị. Họ đã quản lý việc triển khai như thế nào?",
              "en": "Interesting. How did they manage implementation?",
            }
          },
          {
            "role": "ai",
            "text": "They began with pilot teams and phased integration.",
            "translations": {
              "ko": "그들은 피롯 팀을 시작으로 단계적인 통합을 진행했습니다.",
              "zh": "他们从试点团队开始，然后进行分阶段的整合。",
              "ja": "彼らはパイロットチームから始め、段階的に統合しました。",
              "vi": "Họ bắt đầu với các đội ngũ thử nghiệm và tích hợp theo giai đoạn.",
              "en": "They began with pilot teams and phased integration.",
            }
          },
          {
            "role": "user",
            "text": "Were there any major challenges?",
            "translations": {
              "ko": "주요한 도전 과제가 있었나요?",
              "zh": "有没有遇到重大的挑战？",
              "ja": "大きな課題はありましたか？",
              "vi": "Có thách thức lớn nào không?",
              "en": "Were there any major challenges?",
            }
          },
          {
            "role": "ai",
            "text": "Change management and employee reskilling were key issues.",
            "translations": {
              "ko": "변화 관리와 직원 재교육이 주요 문제였습니다.",
              "zh": "变革管理和员工再培训是关键问题。",
              "ja": "変革管理と従業員の再スキル化が主な課題でした。",
              "vi": "Quản lý thay đổi và đào tạo lại nhân viên là những vấn đề chính.",
              "en": "Change management and employee reskilling were key issues.",
            }
          },
          {
            "role": "user",
            "text": "Thanks. Your insights are very relevant.",
            "translations": {
              "ko": "감사합니다. 여러분의 통찰력은 매우 중요합니다.",
              "zh": "谢谢。您的见解非常相关。",
              "ja": "ありがとう。あなたの洞察は非常に関連性があります。",
              "vi": "Cảm ơn. Ý kiến của bạn rất phù hợp.",
              "en": "Thanks. Your insights are very relevant.",
            }
          },
          {
            "role": "ai",
            "text": "Thank you for your attention. I’m happy to take questions now.",
            "translations": {
              "ko": "주의를 기울여 주셔서 감사합니다. 이제 질문을 받겠습니다.",
              "zh": "感谢大家的关注。我现在很乐意回答问题。",
              "ja": "ご注意いただきありがとうございます。今から質問を受け付けます。",
              "vi": "Cảm ơn sự chú ý của bạn. Tôi sẵn lòng trả lời câu hỏi ngay bây giờ.",
              "en": "Thank you for your attention. I’m happy to take questions now.",
            }
          },
          {
            "role": "user",
            "text": "Let’s open the floor to the audience.",
            "translations": {
              "ko": "이제 관객에게 질문을 받겠습니다.",
              "zh": "让我们向观众提问。",
              "ja": "質問は観客に開放しましょう。",
              "vi": "Hãy mở cửa cho khán giả.",
              "en": "Let’s open the floor to the audience.",
            }
          }
        ]
      },
      {
        "description": {
          "en": "Delivering an impromptu executive briefing",
          "ko": "즉석에서 임원 브리핑을 하다",
          "zh": "临时进行高层简报",
          "ja": "即興のエグゼクティブブリーフィングを行う",
          "vi": "Phát biểu không chuẩn bị trước cho giám đốc điều hành"
        },
        "dialogues": [
          {
            "role": "ai",
            "text": "Good morning, thank you all for being here today.",
            "translations": {
              "ko": "좋은 아침입니다, 오늘 모두 여기에 오신 것에 감사드립니다.",
              "zh": "早上好，感谢大家今天的到来。",
              "ja": "おはようございます、今日は皆様にお越しいただきありがとうございます。",
              "vi": "Chào buổi sáng, cảm ơn tất cả mọi người đã đến đây hôm nay.",
              "en": "Good morning, thank you all for being here today.",
            }
          },
          {
            "role": "user",
            "text": "We’ve been looking forward to your keynote.",
            "translations": {
              "ko": "여러분의 기조연설을 기대하고 있었습니다.",
              "zh": "我们一直期待着您的主题演讲。",
              "ja": "皆様の基調講演を楽しみにしていました。",
              "vi": "Chúng tôi đã mong chờ bài phát biểu chính của bạn.",
              "en": "We’ve been looking forward to your keynote.",
            }
          },
          {
            "role": "ai",
            "text": "Today, I’ll address the future of AI in enterprise strategy.",
            "translations": {
              "ko": "오늘은 기업 전략에서의 AI의 미래에 대해 다룰 것입니다.",
              "zh": "今天，我将讨论AI在企业战略中的未来。",
              "ja": "今日は、企業戦略におけるAIの未来について話します。",
              "vi": "Hôm nay, tôi sẽ nói về tương lai của AI trong chiến lược doanh nghiệp.",
              "en": "Today, I’ll address the future of AI in enterprise strategy.",
            }
          },
          {
            "role": "user",
            "text": "A critical topic. Many industries are watching closely.",
            "translations": {
              "ko": "중요한 주제입니다. 많은 산업이 주목하고 있습니다.",
              "zh": "这是一个关键的话题。许多行业都在密切关注。",
              "ja": "重要な話題です。多くの業界が注目しています。",
              "vi": "Một chủ đề quan trọng. Nhiều ngành đang theo dõi chặt chẽ.",
              "en": "A critical topic. Many industries are watching closely.",
            }
          },
          {
            "role": "ai",
            "text": "Let’s begin with a global market analysis from the last decade.",
            "translations": {
              "ko": "지난 10년간의 세계 시장 분석부터 시작해봅시다.",
              "zh": "让我们从过去十年的全球市场分析开始。",
              "ja": "過去10年のグローバル市場分析から始めましょう。",
              "vi": "Hãy bắt đầu với phân tích thị trường toàn cầu từ thập kỷ trước.",
              "en": "Let’s begin with a global market analysis from the last decade.",
            }
          },
          {
            "role": "user",
            "text": "Please elaborate on the data source.",
            "translations": {
              "ko": "데이터 출처에 대해 자세히 설명해 주세요.",
              "zh": "请详细说明数据来源。",
              "ja": "データソースについて詳しく説明してください。",
              "vi": "Vui lòng giải thích về nguồn dữ liệu.",
              "en": "Please elaborate on the data source.",
            }
          },
          {
            "role": "ai",
            "text": "The data is drawn from Gartner and McKinsey research papers.",
            "translations": {
              "ko": "데이터는 Gartner와 McKinsey의 연구 논문에서 가져왔습니다.",
              "zh": "数据来自于Gartner和麦肯锡的研究报告。",
              "ja": "データはガートナーとマッキンゼーの研究論文から取得しました。",
              "vi": "Dữ liệu được rút ra từ các bài nghiên cứu của Gartner và McKinsey.",
              "en": "The data is drawn from Gartner and McKinsey research papers.",
            }
          },
          {
            "role": "user",
            "text": "Thanks. What’s your projection for the next five years?",
            "translations": {
              "ko": "감사합니다. 다음 5년에 대한 예측은 어떻게 되나요?",
              "zh": "谢谢。您对未来五年的预测是什么？",
              "ja": "ありがとう。次の5年間の予測は何ですか？",
              "vi": "Cảm ơn. Dự báo của bạn cho năm sau là gì?",
              "en": "Thanks. What’s your projection for the next five years?",
            }
          },
          {
            "role": "ai",
            "text": "We expect AI-driven productivity gains to triple by 2030.",
            "translations": {
              "ko": "2030년까지 AI 주도의 생산성 증가가 3배로 늘어날 것으로 예상합니다.",
              "zh": "我们预计到2030年，AI驱动的生产力增长将翻三倍。",
              "ja": "2030年までにAIによる生産性向上が3倍になると予想しています。",
              "vi": "Chúng tôi dự kiến năng suất do AI tăng gấp ba lần vào năm 2030.",
              "en": "We expect AI-driven productivity gains to triple by 2030.",
            }
          },
          {
            "role": "user",
            "text": "That’s a bold prediction. Can you support it with case studies?",
            "translations": {
              "ko": "대담한 예측입니다. 사례 연구로 이를 뒷받침할 수 있나요?",
              "zh": "这是一个大胆的预测。你能用案例研究来支持吗？",
              "ja": "それは大胆な予測です。ケーススタディで裏付けることはできますか？",
              "vi": "Đó là một dự đoán táo bạo. Bạn có thể hỗ trợ nó bằng các nghiên cứu trường hợp không?",
              "en": "That’s a bold prediction. Can you support it with case studies?",
            }
          },
          {
            "role": "ai",
            "text": "Absolutely. Let me walk you through three examples.",
            "translations": {
              "ko": "당연합니다. 세 가지 예를 들어 설명해 드리겠습니다.",
              "zh": "当然可以。让我带你们看三个例子。",
              "ja": "もちろんです。3つの例を通して説明します。",
              "vi": "Chắc chắn. Hãy để tôi giới thiệu cho bạn ba ví dụ.",
              "en": "Absolutely. Let me walk you through three examples.",
            }
          },
          {
            "role": "user",
            "text": "Please continue.",
            "translations": {
              "ko": "계속해 주세요.",
              "zh": "请继续。",
              "ja": "続けてください。",
              "vi": "Vui lòng tiếp tục.",
              "en": "Please continue.",
            }
          },
          {
            "role": "ai",
            "text": "The first is a logistics company that reduced costs by 25%.",
            "translations": {
              "ko": "첫 번째는 비용을 25% 줄인 물류 회사입니다.",
              "zh": "第一个是一家物流公司，他们将成本降低了25%。",
              "ja": "最初は、コストを25％削減した物流会社です。",
              "vi": "Đầu tiên là một công ty logistics đã giảm chi phí 25%.",
              "en": "The first is a logistics company that reduced costs by 25%.",
            }
          },
          {
            "role": "user",
            "text": "Interesting. How did they manage implementation?",
            "translations": {
              "ko": "흥미롭군요. 그들은 어떻게 구현을 관리했나요?",
              "zh": "有趣。他们是如何管理实施的？",
              "ja": "面白い。どのように実装を管理しましたか？",
              "vi": "Thú vị. Họ đã quản lý việc triển khai như thế nào?",
              "en": "Interesting. How did they manage implementation?",
            }
          },
          {
            "role": "ai",
            "text": "They began with pilot teams and phased integration.",
            "translations": {
              "ko": "그들은 피롯 팀을 시작으로 단계적인 통합을 진행했습니다.",
              "zh": "他们从试点团队开始，然后进行分阶段的整合。",
              "ja": "彼らはパイロットチームから始め、段階的に統合しました。",
              "vi": "Họ bắt đầu với các đội ngũ thử nghiệm và tích hợp theo giai đoạn.",
              "en": "They began with pilot teams and phased integration.",
            }
          },
          {
            "role": "user",
            "text": "Were there any major challenges?",
            "translations": {
              "ko": "주요한 도전 과제가 있었나요?",
              "zh": "有没有遇到重大的挑战？",
              "ja": "大きな課題はありましたか？",
              "vi": "Có thách thức lớn nào không?",
              "en": "Were there any major challenges?",
            }
          },
          {
            "role": "ai",
            "text": "Change management and employee reskilling were key issues.",
            "translations": {
              "ko": "변화 관리와 직원 재교육이 주요 문제였습니다.",
              "zh": "变革管理和员工再培训是关键问题。",
              "ja": "変革管理と従業員の再スキル化が主な課題でした。",
              "vi": "Quản lý thay đổi và đào tạo lại nhân viên là những vấn đề chính.",
              "en": "Change management and employee reskilling were key issues.",
            }
          },
          {
            "role": "user",
            "text": "Thanks. Your insights are very relevant.",
            "translations": {
              "ko": "감사합니다. 여러분의 통찰력은 매우 중요합니다.",
              "zh": "谢谢。您的见解非常相关。",
              "ja": "ありがとう。あなたの洞察は非常に関連性があります。",
              "vi": "Cảm ơn. Ý kiến của bạn rất phù hợp.",
              "en": "Thanks. Your insights are very relevant.",
            }
          },
          {
            "role": "ai",
            "text": "Thank you for your attention. I’m happy to take questions now.",
            "translations": {
              "ko": "주의를 기울여 주셔서 감사합니다. 이제 질문을 받겠습니다.",
              "zh": "感谢大家的关注。我现在很乐意回答问题。",
              "ja": "ご注意いただきありがとうございます。今から質問を受け付けます。",
              "vi": "Cảm ơn sự chú ý của bạn. Tôi sẵn lòng trả lời câu hỏi ngay bây giờ.",
              "en": "Thank you for your attention. I’m happy to take questions now.",
            }
          },
          {
            "role": "user",
            "text": "Let’s open the floor to the audience.",
            "translations": {
              "ko": "이제 관객에게 질문을 받겠습니다.",
              "zh": "让我们向观众提问。",
              "ja": "質問は観客に開放しましょう。",
              "vi": "Hãy mở cửa cho khán giả.",
              "en": "Let’s open the floor to the audience.",
            }
          }
        ]
      },
      {
        "description": {
          "en": "Defending a strategic initiative with data",
          "ko": "데이터로 전략적 이니셔티브를 방어하다",
          "zh": "用数据支持战略计划",
          "ja": "データを用いて戦略的な取り組みを防御する",
          "vi": "Bảo vệ sáng kiến chiến lược bằng dữ liệu"
        },
        "dialogues": [
          {
            "role": "ai",
            "text": "Good morning, thank you all for being here today.",
            "translations": {
              "ko": "좋은 아침입니다, 오늘 모두 여기에 오신 것에 감사드립니다.",
              "zh": "早上好，感谢大家今天的到来。",
              "ja": "おはようございます、今日は皆様にお越しいただきありがとうございます。",
              "vi": "Chào buổi sáng, cảm ơn tất cả mọi người đã đến đây hôm nay.",
              "en": "Good morning, thank you all for being here today.",
            }
          },
          {
            "role": "user",
            "text": "We’ve been looking forward to your keynote.",
            "translations": {
              "ko": "여러분의 기조연설을 기대하고 있었습니다.",
              "zh": "我们一直期待着您的主题演讲。",
              "ja": "皆様の基調講演を楽しみにしていました。",
              "vi": "Chúng tôi đã mong chờ bài phát biểu chính của bạn.",
              "en": "We’ve been looking forward to your keynote.",
            }
          },
          {
            "role": "ai",
            "text": "Today, I’ll address the future of AI in enterprise strategy.",
            "translations": {
              "ko": "오늘은 기업 전략에서의 AI의 미래에 대해 다룰 것입니다.",
              "zh": "今天，我将讨论AI在企业战略中的未来。",
              "ja": "今日は、企業戦略におけるAIの未来について話します。",
              "vi": "Hôm nay, tôi sẽ nói về tương lai của AI trong chiến lược doanh nghiệp.",
              "en": "Today, I’ll address the future of AI in enterprise strategy.",
            }
          },
          {
            "role": "user",
            "text": "A critical topic. Many industries are watching closely.",
            "translations": {
              "ko": "중요한 주제입니다. 많은 산업이 주목하고 있습니다.",
              "zh": "这是一个关键的话题。许多行业都在密切关注。",
              "ja": "重要な話題です。多くの業界が注目しています。",
              "vi": "Một chủ đề quan trọng. Nhiều ngành đang theo dõi chặt chẽ.",
              "en": "A critical topic. Many industries are watching closely.",
            }
          },
          {
            "role": "ai",
            "text": "Let’s begin with a global market analysis from the last decade.",
            "translations": {
              "ko": "지난 10년간의 세계 시장 분석부터 시작해봅시다.",
              "zh": "让我们从过去十年的全球市场分析开始。",
              "ja": "過去10年のグローバル市場分析から始めましょう。",
              "vi": "Hãy bắt đầu với phân tích thị trường toàn cầu từ thập kỷ trước.",
              "en": "Let’s begin with a global market analysis from the last decade.",
            }
          },
          {
            "role": "user",
            "text": "Please elaborate on the data source.",
            "translations": {
              "ko": "데이터 출처에 대해 자세히 설명해 주세요.",
              "zh": "请详细说明数据来源。",
              "ja": "データソースについて詳しく説明してください。",
              "vi": "Vui lòng giải thích về nguồn dữ liệu.",
              "en": "Please elaborate on the data source.",
            }
          },
          {
            "role": "ai",
            "text": "The data is drawn from Gartner and McKinsey research papers.",
            "translations": {
              "ko": "데이터는 Gartner와 McKinsey의 연구 논문에서 가져왔습니다.",
              "zh": "数据来自于Gartner和麦肯锡的研究报告。",
              "ja": "データはガートナーとマッキンゼーの研究論文から取得しました。",
              "vi": "Dữ liệu được rút ra từ các bài nghiên cứu của Gartner và McKinsey.",
              "en": "The data is drawn from Gartner and McKinsey research papers.",
            }
          },
          {
            "role": "user",
            "text": "Thanks. What’s your projection for the next five years?",
            "translations": {
              "ko": "감사합니다. 다음 5년에 대한 예측은 어떻게 되나요?",
              "zh": "谢谢。您对未来五年的预测是什么？",
              "ja": "ありがとう。次の5年間の予測は何ですか？",
              "vi": "Cảm ơn. Dự báo của bạn cho năm sau là gì?",
              "en": "Thanks. What’s your projection for the next five years?",
            }
          },
          {
            "role": "ai",
            "text": "We expect AI-driven productivity gains to triple by 2030.",
            "translations": {
              "ko": "2030년까지 AI 주도의 생산성 증가가 3배로 늘어날 것으로 예상합니다.",
              "zh": "我们预计到2030年，AI驱动的生产力增长将翻三倍。",
              "ja": "2030年までにAIによる生産性向上が3倍になると予想しています。",
              "vi": "Chúng tôi dự kiến năng suất do AI tăng gấp ba lần vào năm 2030.",
              "en": "We expect AI-driven productivity gains to triple by 2030.",
            }
          },
          {
            "role": "user",
            "text": "That’s a bold prediction. Can you support it with case studies?",
            "translations": {
              "ko": "대담한 예측입니다. 사례 연구로 이를 뒷받침할 수 있나요?",
              "zh": "这是一个大胆的预测。你能用案例研究来支持吗？",
              "ja": "それは大胆な予測です。ケーススタディで裏付けることはできますか？",
              "vi": "Đó là một dự đoán táo bạo. Bạn có thể hỗ trợ nó bằng các nghiên cứu trường hợp không?",
              "en": "That’s a bold prediction. Can you support it with case studies?",
            }
          },
          {
            "role": "ai",
            "text": "Absolutely. Let me walk you through three examples.",
            "translations": {
              "ko": "당연합니다. 세 가지 예를 들어 설명해 드리겠습니다.",
              "zh": "当然可以。让我带你们看三个例子。",
              "ja": "もちろんです。3つの例を通して説明します。",
              "vi": "Chắc chắn. Hãy để tôi giới thiệu cho bạn ba ví dụ.",
              "en": "Absolutely. Let me walk you through three examples.",
            }
          },
          {
            "role": "user",
            "text": "Please continue.",
            "translations": {
              "ko": "계속해 주세요.",
              "zh": "请继续。",
              "ja": "続けてください。",
              "vi": "Vui lòng tiếp tục.",
              "en": "Please continue.",
            }
          },
          {
            "role": "ai",
            "text": "The first is a logistics company that reduced costs by 25%.",
            "translations": {
              "ko": "첫 번째는 비용을 25% 줄인 물류 회사입니다.",
              "zh": "第一个是一家物流公司，他们将成本降低了25%。",
              "ja": "最初は、コストを25％削減した物流会社です。",
              "vi": "Đầu tiên là một công ty logistics đã giảm chi phí 25%.",
              "en": "The first is a logistics company that reduced costs by 25%.",
            }
          },
          {
            "role": "user",
            "text": "Interesting. How did they manage implementation?",
            "translations": {
              "ko": "흥미롭군요. 그들은 어떻게 구현을 관리했나요?",
              "zh": "有趣。他们是如何管理实施的？",
              "ja": "面白い。どのように実装を管理しましたか？",
              "vi": "Thú vị. Họ đã quản lý việc triển khai như thế nào?",
              "en": "Interesting. How did they manage implementation?",
            }
          },
          {
            "role": "ai",
            "text": "They began with pilot teams and phased integration.",
            "translations": {
              "ko": "그들은 피롯 팀을 시작으로 단계적인 통합을 진행했습니다.",
              "zh": "他们从试点团队开始，然后进行分阶段的整合。",
              "ja": "彼らはパイロットチームから始め、段階的に統合しました。",
              "vi": "Họ bắt đầu với các đội ngũ thử nghiệm và tích hợp theo giai đoạn.",
              "en": "They began with pilot teams and phased integration.",
            }
          },
          {
            "role": "user",
            "text": "Were there any major challenges?",
            "translations": {
              "ko": "주요한 도전 과제가 있었나요?",
              "zh": "有没有遇到重大的挑战？",
              "ja": "大きな課題はありましたか？",
              "vi": "Có thách thức lớn nào không?",
              "en": "Were there any major challenges?",
            }
          },
          {
            "role": "ai",
            "text": "Change management and employee reskilling were key issues.",
            "translations": {
              "ko": "변화 관리와 직원 재교육이 주요 문제였습니다.",
              "zh": "变革管理和员工再培训是关键问题。",
              "ja": "変革管理と従業員の再スキル化が主な課題でした。",
              "vi": "Quản lý thay đổi và đào tạo lại nhân viên là những vấn đề chính.",
              "en": "Change management and employee reskilling were key issues.",
            }
          },
          {
            "role": "user",
            "text": "Thanks. Your insights are very relevant.",
            "translations": {
              "ko": "감사합니다. 여러분의 통찰력은 매우 중요합니다.",
              "zh": "谢谢。您的见解非常相关。",
              "ja": "ありがとう。あなたの洞察は非常に関連性があります。",
              "vi": "Cảm ơn. Ý kiến của bạn rất phù hợp.",
              "en": "Thanks. Your insights are very relevant.",
            }
          },
          {
            "role": "ai",
            "text": "Thank you for your attention. I’m happy to take questions now.",
            "translations": {
              "ko": "주의를 기울여 주셔서 감사합니다. 이제 질문을 받겠습니다.",
              "zh": "感谢大家的关注。我现在很乐意回答问题。",
              "ja": "ご注意いただきありがとうございます。今から質問を受け付けます。",
              "vi": "Cảm ơn sự chú ý của bạn. Tôi sẵn lòng trả lời câu hỏi ngay bây giờ.",
              "en": "Thank you for your attention. I’m happy to take questions now.",
            }
          },
          {
            "role": "user",
            "text": "Let’s open the floor to the audience.",
            "translations": {
              "ko": "이제 관객에게 질문을 받겠습니다.",
              "zh": "让我们向观众提问。",
              "ja": "質問は観客に開放しましょう。",
              "vi": "Hãy mở cửa cho khán giả.",
              "en": "Let’s open the floor to the audience.",
            }
          }
        ]
      },
      {
        "description": {
          "en": "Inspiring a company-wide cultural change",
          "ko": "회사 전체의 문화 변화를 이끌다",
          "zh": "激发全公司的文化变革",
          "ja": "会社全体の文化変革を促す",
          "vi": "Khơi nguồn thay đổi văn hóa toàn công ty"
        },
        "dialogues": [
          {
            "role": "ai",
            "text": "Good morning, thank you all for being here today.",
            "translations": {
              "ko": "좋은 아침입니다, 오늘 모두 여기에 오신 것에 감사드립니다.",
              "zh": "早上好，感谢大家今天的到来。",
              "ja": "おはようございます、今日は皆様にお越しいただきありがとうございます。",
              "vi": "Chào buổi sáng, cảm ơn tất cả mọi người đã đến đây hôm nay.",
              "en": "Good morning, thank you all for being here today.",
            }
          },
          {
            "role": "user",
            "text": "We’ve been looking forward to your keynote.",
            "translations": {
              "ko": "여러분의 기조연설을 기대하고 있었습니다.",
              "zh": "我们一直期待着您的主题演讲。",
              "ja": "皆様の基調講演を楽しみにしていました。",
              "vi": "Chúng tôi đã mong chờ bài phát biểu chính của bạn.",
              "en": "We’ve been looking forward to your keynote.",
            }
          },
          {
            "role": "ai",
            "text": "Today, I’ll address the future of AI in enterprise strategy.",
            "translations": {
              "ko": "오늘은 기업 전략에서의 AI의 미래에 대해 다룰 것입니다.",
              "zh": "今天，我将讨论AI在企业战略中的未来。",
              "ja": "今日は、企業戦略におけるAIの未来について話します。",
              "vi": "Hôm nay, tôi sẽ nói về tương lai của AI trong chiến lược doanh nghiệp.",
              "en": "Today, I’ll address the future of AI in enterprise strategy.",
            }
          },
          {
            "role": "user",
            "text": "A critical topic. Many industries are watching closely.",
            "translations": {
              "ko": "중요한 주제입니다. 많은 산업이 주목하고 있습니다.",
              "zh": "这是一个关键的话题。许多行业都在密切关注。",
              "ja": "重要な話題です。多くの業界が注目しています。",
              "vi": "Một chủ đề quan trọng. Nhiều ngành đang theo dõi chặt chẽ.",
              "en": "A critical topic. Many industries are watching closely.",
            }
          },
          {
            "role": "ai",
            "text": "Let’s begin with a global market analysis from the last decade.",
            "translations": {
              "ko": "지난 10년간의 세계 시장 분석부터 시작해봅시다.",
              "zh": "让我们从过去十年的全球市场分析开始。",
              "ja": "過去10年のグローバル市場分析から始めましょう。",
              "vi": "Hãy bắt đầu với phân tích thị trường toàn cầu từ thập kỷ trước.",
              "en": "Let’s begin with a global market analysis from the last decade.",
            }
          },
          {
            "role": "user",
            "text": "Please elaborate on the data source.",
            "translations": {
              "ko": "데이터 출처에 대해 자세히 설명해 주세요.",
              "zh": "请详细说明数据来源。",
              "ja": "データソースについて詳しく説明してください。",
              "vi": "Vui lòng giải thích về nguồn dữ liệu.",
              "en": "Please elaborate on the data source.",
            }
          },
          {
            "role": "ai",
            "text": "The data is drawn from Gartner and McKinsey research papers.",
            "translations": {
              "ko": "데이터는 Gartner와 McKinsey의 연구 논문에서 가져왔습니다.",
              "zh": "数据来自于Gartner和麦肯锡的研究报告。",
              "ja": "データはガートナーとマッキンゼーの研究論文から取得しました。",
              "vi": "Dữ liệu được rút ra từ các bài nghiên cứu của Gartner và McKinsey.",
              "en": "The data is drawn from Gartner and McKinsey research papers.",
            }
          },
          {
            "role": "user",
            "text": "Thanks. What’s your projection for the next five years?",
            "translations": {
              "ko": "감사합니다. 다음 5년에 대한 예측은 어떻게 되나요?",
              "zh": "谢谢。您对未来五年的预测是什么？",
              "ja": "ありがとう。次の5年間の予測は何ですか？",
              "vi": "Cảm ơn. Dự báo của bạn cho năm sau là gì?",
              "en": "Thanks. What’s your projection for the next five years?",
            }
          },
          {
            "role": "ai",
            "text": "We expect AI-driven productivity gains to triple by 2030.",
            "translations": {
              "ko": "2030년까지 AI 주도의 생산성 증가가 3배로 늘어날 것으로 예상합니다.",
              "zh": "我们预计到2030年，AI驱动的生产力增长将翻三倍。",
              "ja": "2030年までにAIによる生産性向上が3倍になると予想しています。",
              "vi": "Chúng tôi dự kiến năng suất do AI tăng gấp ba lần vào năm 2030.",
              "en": "We expect AI-driven productivity gains to triple by 2030.",
            }
          },
          {
            "role": "user",
            "text": "That’s a bold prediction. Can you support it with case studies?",
            "translations": {
              "ko": "대담한 예측입니다. 사례 연구로 이를 뒷받침할 수 있나요?",
              "zh": "这是一个大胆的预测。你能用案例研究来支持吗？",
              "ja": "それは大胆な予測です。ケーススタディで裏付けることはできますか？",
              "vi": "Đó là một dự đoán táo bạo. Bạn có thể hỗ trợ nó bằng các nghiên cứu trường hợp không?",
              "en": "That’s a bold prediction. Can you support it with case studies?",
            }
          },
          {
            "role": "ai",
            "text": "Absolutely. Let me walk you through three examples.",
            "translations": {
              "ko": "당연합니다. 세 가지 예를 들어 설명해 드리겠습니다.",
              "zh": "当然可以。让我带你们看三个例子。",
              "ja": "もちろんです。3つの例を通して説明します。",
              "vi": "Chắc chắn. Hãy để tôi giới thiệu cho bạn ba ví dụ.",
              "en": "Absolutely. Let me walk you through three examples.",
            }
          },
          {
            "role": "user",
            "text": "Please continue.",
            "translations": {
              "ko": "계속해 주세요.",
              "zh": "请继续。",
              "ja": "続けてください。",
              "vi": "Vui lòng tiếp tục.",
              "en": "Please continue.",
            }
          },
          {
            "role": "ai",
            "text": "The first is a logistics company that reduced costs by 25%.",
            "translations": {
              "ko": "첫 번째는 비용을 25% 줄인 물류 회사입니다.",
              "zh": "第一个是一家物流公司，他们将成本降低了25%。",
              "ja": "最初は、コストを25％削減した物流会社です。",
              "vi": "Đầu tiên là một công ty logistics đã giảm chi phí 25%.",
              "en": "The first is a logistics company that reduced costs by 25%.",
            }
          },
          {
            "role": "user",
            "text": "Interesting. How did they manage implementation?",
            "translations": {
              "ko": "흥미롭군요. 그들은 어떻게 구현을 관리했나요?",
              "zh": "有趣。他们是如何管理实施的？",
              "ja": "面白い。どのように実装を管理しましたか？",
              "vi": "Thú vị. Họ đã quản lý việc triển khai như thế nào?",
              "en": "Interesting. How did they manage implementation?",
            }
          },
          {
            "role": "ai",
            "text": "They began with pilot teams and phased integration.",
            "translations": {
              "ko": "그들은 피롯 팀을 시작으로 단계적인 통합을 진행했습니다.",
              "zh": "他们从试点团队开始，然后进行分阶段的整合。",
              "ja": "彼らはパイロットチームから始め、段階的に統合しました。",
              "vi": "Họ bắt đầu với các đội ngũ thử nghiệm và tích hợp theo giai đoạn.",
              "en": "They began with pilot teams and phased integration.",
            }
          },
          {
            "role": "user",
            "text": "Were there any major challenges?",
            "translations": {
              "ko": "주요한 도전 과제가 있었나요?",
              "zh": "有没有遇到重大的挑战？",
              "ja": "大きな課題はありましたか？",
              "vi": "Có thách thức lớn nào không?",
              "en": "Were there any major challenges?",
            }
          },
          {
            "role": "ai",
            "text": "Change management and employee reskilling were key issues.",
            "translations": {
              "ko": "변화 관리와 직원 재교육이 주요 문제였습니다.",
              "zh": "变革管理和员工再培训是关键问题。",
              "ja": "変革管理と従業員の再スキル化が主な課題でした。",
              "vi": "Quản lý thay đổi và đào tạo lại nhân viên là những vấn đề chính.",
              "en": "Change management and employee reskilling were key issues.",
            }
          },
          {
            "role": "user",
            "text": "Thanks. Your insights are very relevant.",
            "translations": {
              "ko": "감사합니다. 여러분의 통찰력은 매우 중요합니다.",
              "zh": "谢谢。您的见解非常相关。",
              "ja": "ありがとう。あなたの洞察は非常に関連性があります。",
              "vi": "Cảm ơn. Ý kiến của bạn rất phù hợp.",
              "en": "Thanks. Your insights are very relevant.",
            }
          },
          {
            "role": "ai",
            "text": "Thank you for your attention. I’m happy to take questions now.",
            "translations": {
              "ko": "주의를 기울여 주셔서 감사합니다. 이제 질문을 받겠습니다.",
              "zh": "感谢大家的关注。我现在很乐意回答问题。",
              "ja": "ご注意いただきありがとうございます。今から質問を受け付けます。",
              "vi": "Cảm ơn sự chú ý của bạn. Tôi sẵn lòng trả lời câu hỏi ngay bây giờ.",
              "en": "Thank you for your attention. I’m happy to take questions now.",
            }
          },
          {
            "role": "user",
            "text": "Let’s open the floor to the audience.",
            "translations": {
              "ko": "이제 관객에게 질문을 받겠습니다.",
              "zh": "让我们向观众提问。",
              "ja": "質問は観客に開放しましょう。",
              "vi": "Hãy mở cửa cho khán giả.",
              "en": "Let’s open the floor to the audience.",
            }
          }
        ]
      },
      {
        "description": {
          "en": "Debating innovation proposals",
          "ko": "혁신 제안을 논의하다",
          "zh": "辩论创新提案",
          "ja": "イノベーション提案を議論する",
          "vi": "Thảo luận về đề xuất đổi mới"
        },
        "dialogues": [
          {
            "role": "ai",
            "text": "Good morning, thank you all for being here today.",
            "translations": {
              "ko": "좋은 아침입니다, 오늘 모두 여기에 오신 것에 감사드립니다.",
              "zh": "早上好，感谢大家今天的到来。",
              "ja": "おはようございます、今日は皆様にお越しいただきありがとうございます。",
              "vi": "Chào buổi sáng, cảm ơn tất cả mọi người đã đến đây hôm nay.",
              "en": "Good morning, thank you all for being here today.",
            }
          },
          {
            "role": "user",
            "text": "We’ve been looking forward to your keynote.",
            "translations": {
              "ko": "여러분의 기조연설을 기대하고 있었습니다.",
              "zh": "我们一直期待着您的主题演讲。",
              "ja": "皆様の基調講演を楽しみにしていました。",
              "vi": "Chúng tôi đã mong chờ bài phát biểu chính của bạn.",
              "en": "We’ve been looking forward to your keynote.",
            }
          },
          {
            "role": "ai",
            "text": "Today, I’ll address the future of AI in enterprise strategy.",
            "translations": {
              "ko": "오늘은 기업 전략에서의 AI의 미래에 대해 다룰 것입니다.",
              "zh": "今天，我将讨论AI在企业战略中的未来。",
              "ja": "今日は、企業戦略におけるAIの未来について話します。",
              "vi": "Hôm nay, tôi sẽ nói về tương lai của AI trong chiến lược doanh nghiệp.",
              "en": "Today, I’ll address the future of AI in enterprise strategy.",
            }
          },
          {
            "role": "user",
            "text": "A critical topic. Many industries are watching closely.",
            "translations": {
              "ko": "중요한 주제입니다. 많은 산업이 주목하고 있습니다.",
              "zh": "这是一个关键的话题。许多行业都在密切关注。",
              "ja": "重要な話題です。多くの業界が注目しています。",
              "vi": "Một chủ đề quan trọng. Nhiều ngành đang theo dõi chặt chẽ.",
              "en": "A critical topic. Many industries are watching closely.",
            }
          },
          {
            "role": "ai",
            "text": "Let’s begin with a global market analysis from the last decade.",
            "translations": {
              "ko": "지난 10년간의 세계 시장 분석부터 시작해봅시다.",
              "zh": "让我们从过去十年的全球市场分析开始。",
              "ja": "過去10年のグローバル市場分析から始めましょう。",
              "vi": "Hãy bắt đầu với phân tích thị trường toàn cầu từ thập kỷ trước.",
              "en": "Let’s begin with a global market analysis from the last decade.",
            }
          },
          {
            "role": "user",
            "text": "Please elaborate on the data source.",
            "translations": {
              "ko": "데이터 출처에 대해 자세히 설명해 주세요.",
              "zh": "请详细说明数据来源。",
              "ja": "データソースについて詳しく説明してください。",
              "vi": "Vui lòng giải thích về nguồn dữ liệu.",
              "en": "Please elaborate on the data source.",
            }
          },
          {
            "role": "ai",
            "text": "The data is drawn from Gartner and McKinsey research papers.",
            "translations": {
              "ko": "데이터는 Gartner와 McKinsey의 연구 논문에서 가져왔습니다.",
              "zh": "数据来自于Gartner和麦肯锡的研究报告。",
              "ja": "データはガートナーとマッキンゼーの研究論文から取得しました。",
              "vi": "Dữ liệu được rút ra từ các bài nghiên cứu của Gartner và McKinsey.",
              "en": "The data is drawn from Gartner and McKinsey research papers.",
            }
          },
          {
            "role": "user",
            "text": "Thanks. What’s your projection for the next five years?",
            "translations": {
              "ko": "감사합니다. 다음 5년에 대한 예측은 어떻게 되나요?",
              "zh": "谢谢。您对未来五年的预测是什么？",
              "ja": "ありがとう。次の5年間の予測は何ですか？",
              "vi": "Cảm ơn. Dự báo của bạn cho năm sau là gì?",
              "en": "Thanks. What’s your projection for the next five years?",
            }
          },
          {
            "role": "ai",
            "text": "We expect AI-driven productivity gains to triple by 2030.",
            "translations": {
              "ko": "2030년까지 AI 주도의 생산성 증가가 3배로 늘어날 것으로 예상합니다.",
              "zh": "我们预计到2030年，AI驱动的生产力增长将翻三倍。",
              "ja": "2030年までにAIによる生産性向上が3倍になると予想しています。",
              "vi": "Chúng tôi dự kiến năng suất do AI tăng gấp ba lần vào năm 2030.",
              "en": "We expect AI-driven productivity gains to triple by 2030.",
            }
          },
          {
            "role": "user",
            "text": "That’s a bold prediction. Can you support it with case studies?",
            "translations": {
              "ko": "대담한 예측입니다. 사례 연구로 이를 뒷받침할 수 있나요?",
              "zh": "这是一个大胆的预测。你能用案例研究来支持吗？",
              "ja": "それは大胆な予測です。ケーススタディで裏付けることはできますか？",
              "vi": "Đó là một dự đoán táo bạo. Bạn có thể hỗ trợ nó bằng các nghiên cứu trường hợp không?",
              "en": "That’s a bold prediction. Can you support it with case studies?",
            }
          },
          {
            "role": "ai",
            "text": "Absolutely. Let me walk you through three examples.",
            "translations": {
              "ko": "당연합니다. 세 가지 예를 들어 설명해 드리겠습니다.",
              "zh": "当然可以。让我带你们看三个例子。",
              "ja": "もちろんです。3つの例を通して説明します。",
              "vi": "Chắc chắn. Hãy để tôi giới thiệu cho bạn ba ví dụ.",
              "en": "Absolutely. Let me walk you through three examples.",
            }
          },
          {
            "role": "user",
            "text": "Please continue.",
            "translations": {
              "ko": "계속해 주세요.",
              "zh": "请继续。",
              "ja": "続けてください。",
              "vi": "Vui lòng tiếp tục.",
              "en": "Please continue.",
            }
          },
          {
            "role": "ai",
            "text": "The first is a logistics company that reduced costs by 25%.",
            "translations": {
              "ko": "첫 번째는 비용을 25% 줄인 물류 회사입니다.",
              "zh": "第一个是一家物流公司，他们将成本降低了25%。",
              "ja": "最初は、コストを25％削減した物流会社です。",
              "vi": "Đầu tiên là một công ty logistics đã giảm chi phí 25%.",
              "en": "The first is a logistics company that reduced costs by 25%.",
            }
          },
          {
            "role": "user",
            "text": "Interesting. How did they manage implementation?",
            "translations": {
              "ko": "흥미롭군요. 그들은 어떻게 구현을 관리했나요?",
              "zh": "有趣。他们是如何管理实施的？",
              "ja": "面白い。どのように実装を管理しましたか？",
              "vi": "Thú vị. Họ đã quản lý việc triển khai như thế nào?",
              "en": "Interesting. How did they manage implementation?",
            }
          },
          {
            "role": "ai",
            "text": "They began with pilot teams and phased integration.",
            "translations": {
              "ko": "그들은 피롯 팀을 시작으로 단계적인 통합을 진행했습니다.",
              "zh": "他们从试点团队开始，然后进行分阶段的整合。",
              "ja": "彼らはパイロットチームから始め、段階的に統合しました。",
              "vi": "Họ bắt đầu với các đội ngũ thử nghiệm và tích hợp theo giai đoạn.",
              "en": "They began with pilot teams and phased integration.",
            }
          },
          {
            "role": "user",
            "text": "Were there any major challenges?",
            "translations": {
              "ko": "주요한 도전 과제가 있었나요?",
              "zh": "有没有遇到重大的挑战？",
              "ja": "大きな課題はありましたか？",
              "vi": "Có thách thức lớn nào không?",
              "en": "Were there any major challenges?",
            }
          },
          {
            "role": "ai",
            "text": "Change management and employee reskilling were key issues.",
            "translations": {
              "ko": "변화 관리와 직원 재교육이 주요 문제였습니다.",
              "zh": "变革管理和员工再培训是关键问题。",
              "ja": "変革管理と従業員の再スキル化が主な課題でした。",
              "vi": "Quản lý thay đổi và đào tạo lại nhân viên là những vấn đề chính.",
              "en": "Change management and employee reskilling were key issues.",
            }
          },
          {
            "role": "user",
            "text": "Thanks. Your insights are very relevant.",
            "translations": {
              "ko": "감사합니다. 여러분의 통찰력은 매우 중요합니다.",
              "zh": "谢谢。您的见解非常相关。",
              "ja": "ありがとう。あなたの洞察は非常に関連性があります。",
              "vi": "Cảm ơn. Ý kiến của bạn rất phù hợp.",
              "en": "Thanks. Your insights are very relevant.",
            }
          },
          {
            "role": "ai",
            "text": "Thank you for your attention. I’m happy to take questions now.",
            "translations": {
              "ko": "주의를 기울여 주셔서 감사합니다. 이제 질문을 받겠습니다.",
              "zh": "感谢大家的关注。我现在很乐意回答问题。",
              "ja": "ご注意いただきありがとうございます。今から質問を受け付けます。",
              "vi": "Cảm ơn sự chú ý của bạn. Tôi sẵn lòng trả lời câu hỏi ngay bây giờ.",
              "en": "Thank you for your attention. I’m happy to take questions now.",
            }
          },
          {
            "role": "user",
            "text": "Let’s open the floor to the audience.",
            "translations": {
              "ko": "이제 관객에게 질문을 받겠습니다.",
              "zh": "让我们向观众提问。",
              "ja": "質問は観客に開放しましょう。",
              "vi": "Hãy mở cửa cho khán giả.",
              "en": "Let’s open the floor to the audience.",
            }
          }
        ]
      },
      {
        "description": {
          "en": "Handling a hostile audience professionally",
          "ko": "전문적으로 적대적인 관객을 대처하다",
          "zh": "专业处理敌对的观众",
          "ja": "敵対的な観客をプロフェッショナルに対処する",
          "vi": "Xử lý khán giả thù địch một cách chuyên nghiệp"
        },
        "dialogues": [
          {
            "role": "ai",
            "text": "Good morning, thank you all for being here today.",
            "translations": {
              "ko": "좋은 아침입니다, 오늘 모두 여기에 오신 것에 감사드립니다.",
              "zh": "早上好，感谢大家今天的到来。",
              "ja": "おはようございます、今日は皆様にお越しいただきありがとうございます。",
              "vi": "Chào buổi sáng, cảm ơn tất cả mọi người đã đến đây hôm nay.",
              "en": "Good morning, thank you all for being here today.",
            }
          },
          {
            "role": "user",
            "text": "We’ve been looking forward to your keynote.",
            "translations": {
              "ko": "여러분의 기조연설을 기대하고 있었습니다.",
              "zh": "我们一直期待着您的主题演讲。",
              "ja": "皆様の基調講演を楽しみにしていました。",
              "vi": "Chúng tôi đã mong chờ bài phát biểu chính của bạn.",
              "en": "We’ve been looking forward to your keynote.",
            }
          },
          {
            "role": "ai",
            "text": "Today, I’ll address the future of AI in enterprise strategy.",
            "translations": {
              "ko": "오늘은 기업 전략에서의 AI의 미래에 대해 다룰 것입니다.",
              "zh": "今天，我将讨论AI在企业战略中的未来。",
              "ja": "今日は、企業戦略におけるAIの未来について話します。",
              "vi": "Hôm nay, tôi sẽ nói về tương lai của AI trong chiến lược doanh nghiệp.",
              "en": "Today, I’ll address the future of AI in enterprise strategy.",
            }
          },
          {
            "role": "user",
            "text": "A critical topic. Many industries are watching closely.",
            "translations": {
              "ko": "중요한 주제입니다. 많은 산업이 주목하고 있습니다.",
              "zh": "这是一个关键的话题。许多行业都在密切关注。",
              "ja": "重要な話題です。多くの業界が注目しています。",
              "vi": "Một chủ đề quan trọng. Nhiều ngành đang theo dõi chặt chẽ.",
              "en": "A critical topic. Many industries are watching closely.",
            }
          },
          {
            "role": "ai",
            "text": "Let’s begin with a global market analysis from the last decade.",
            "translations": {
              "ko": "지난 10년간의 세계 시장 분석부터 시작해봅시다.",
              "zh": "让我们从过去十年的全球市场分析开始。",
              "ja": "過去10年のグローバル市場分析から始めましょう。",
              "vi": "Hãy bắt đầu với phân tích thị trường toàn cầu từ thập kỷ trước.",
              "en": "Let’s begin with a global market analysis from the last decade.",
            }
          },
          {
            "role": "user",
            "text": "Please elaborate on the data source.",
            "translations": {
              "ko": "데이터 출처에 대해 자세히 설명해 주세요.",
              "zh": "请详细说明数据来源。",
              "ja": "データソースについて詳しく説明してください。",
              "vi": "Vui lòng giải thích về nguồn dữ liệu.",
              "en": "Please elaborate on the data source.",
            }
          },
          {
            "role": "ai",
            "text": "The data is drawn from Gartner and McKinsey research papers.",
            "translations": {
              "ko": "데이터는 Gartner와 McKinsey의 연구 논문에서 가져왔습니다.",
              "zh": "数据来自于Gartner和麦肯锡的研究报告。",
              "ja": "データはガートナーとマッキンゼーの研究論文から取得しました。",
              "vi": "Dữ liệu được rút ra từ các bài nghiên cứu của Gartner và McKinsey.",
              "en": "The data is drawn from Gartner and McKinsey research papers.",
            }
          },
          {
            "role": "user",
            "text": "Thanks. What’s your projection for the next five years?",
            "translations": {
              "ko": "감사합니다. 다음 5년에 대한 예측은 어떻게 되나요?",
              "zh": "谢谢。您对未来五年的预测是什么？",
              "ja": "ありがとう。次の5年間の予測は何ですか？",
              "vi": "Cảm ơn. Dự báo của bạn cho năm sau là gì?",
              "en": "Thanks. What’s your projection for the next five years?",
            }
          },
          {
            "role": "ai",
            "text": "We expect AI-driven productivity gains to triple by 2030.",
            "translations": {
              "ko": "2030년까지 AI 주도의 생산성 증가가 3배로 늘어날 것으로 예상합니다.",
              "zh": "我们预计到2030年，AI驱动的生产力增长将翻三倍。",
              "ja": "2030年までにAIによる生産性向上が3倍になると予想しています。",
              "vi": "",
              "en": "We expect AI-driven productivity gains to triple by 2030.",
            }
          },
          {
            "role": "user",
            "text": "That’s a bold prediction. Can you support it with case studies?",
            "translations": {
              "ko": "대담한 예측입니다. 사례 연구로 이를 뒷받침할 수 있나요?",
              "zh": "这是一个大胆的预测。你能用案例研究来支持吗？",
              "ja": "それは大胆な予測です。ケーススタディで裏付けることはできますか？",
              "vi": "",
              "en": "That’s a bold prediction. Can you support it with case studies?",
            }
          },
          {
            "role": "ai",
            "text": "Absolutely. Let me walk you through three examples.",
            "translations": {
              "ko": "당연합니다. 세 가지 예를 들어 설명해 드리겠습니다.",
              "zh": "当然可以。让我带你们看三个例子。",
              "ja": "もちろんです。3つの例を通して説明します。",
              "vi": "",
              "en": "Absolutely. Let me walk you through three examples.",
            }
          },
          {
            "role": "user",
            "text": "Please continue.",
            "translations": {
              "ko": "계속해 주세요.",
              "zh": "请继续。",
              "ja": "続けてください。",
              "vi": "",
              "en": "Please continue.",
            }
          },
          {
            "role": "ai",
            "text": "The first is a logistics company that reduced costs by 25%.",
            "translations": {
              "ko": "첫 번째는 비용을 25% 줄인 물류 회사입니다.",
              "zh": "第一个是一家物流公司，他们将成本降低了25%。",
              "ja": "最初は、コストを25％削減した物流会社です。",
              "vi": "",
              "en": "The first is a logistics company that reduced costs by 25%.",
            }
          },
          {
            "role": "user",
            "text": "Interesting. How did they manage implementation?",
            "translations": {
              "ko": "흥미롭군요. 그들은 어떻게 구현을 관리했나요?",
              "zh": "有趣。他们是如何管理实施的？",
              "ja": "面白い。どのように実装を管理しましたか？",
              "vi": "",
              "en": "Interesting. How did they manage implementation?",
            }
          },
          {
            "role": "ai",
            "text": "They began with pilot teams and phased integration.",
            "translations": {
              "ko": "그들은 피롯 팀을 시작으로 단계적인 통합을 진행했습니다.",
              "zh": "他们从试点团队开始，然后进行分阶段的整合。",
              "ja": "彼らはパイロットチームから始め、段階的に統合しました。",
              "vi": "",
              "en": "They began with pilot teams and phased integration.",
            }
          },
          {
            "role": "user",
            "text": "Were there any major challenges?",
            "translations": {
              "ko": "주요한 도전 과제가 있었나요?",
              "zh": "有没有遇到重大的挑战？",
              "ja": "大きな課題はありましたか？",
              "vi": "",
              "en": "Were there any major challenges?",
            }
          },
          {
            "role": "ai",
            "text": "Change management and employee reskilling were key issues.",
            "translations": {
              "ko": "변화 관리와 직원 재교육이 주요 문제였습니다.",
              "zh": "变革管理和员工再培训是关键问题。",
              "ja": "変革管理と従業員の再スキル化が主な課題でした。",
              "vi": "",
              "en": "Change management and employee reskilling were key issues.",
            }
          },
          {
            "role": "user",
            "text": "Thanks. Your insights are very relevant.",
            "translations": {
              "ko": "감사합니다. 여러분의 통찰력은 매우 중요합니다.",
              "zh": "谢谢。您的见解非常相关。",
              "ja": "ありがとう。あなたの洞察は非常に関連性があります。",
              "vi": "",
              "en": "Thanks. Your insights are very relevant.",
            }
          },
          {
            "role": "ai",
            "text": "Thank you for your attention. I’m happy to take questions now.",
            "translations": {
              "ko": "주의를 기울여 주셔서 감사합니다. 이제 질문을 받겠습니다.",
              "zh": "感谢大家的关注。我现在很乐意回答问题。",
              "ja": "ご注意いただきありがとうございます。今から質問を受け付けます。",
              "vi": "",
              "en": "Thank you for your attention. I’m happy to take questions now.",
            }
          },
          {
            "role": "user",
            "text": "Let’s open the floor to the audience.",
            "translations": {
              "ko": "이제 관객에게 질문을 받겠습니다.",
              "zh": "让我们向观众提问。",
              "ja": "質問は観客に開放しましょう。",
              "vi": "",
              "en": "Let’s open the floor to the audience.",
            }
          }
        ]
      }
    ]

};