import { TechCarousel } from '../components/TechCarousel';
import type { TechItem } from '../components/TechCarousel';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from "motion/react";
import VantaBackground from '../components/VantaBackground';
import { BackgroundBeamsWithCollision } from '../components/background-beams-with-collision';
import { StickyScroll } from '@/components/sticky-scroll-reveal';
// ...existing code...


interface Project {
  id: number;
  title: string;
  titleJapanese: string;
  description: string;
  descriptionJapanese: string;
  scrollDescription?: string;
  scrollDescriptionJapanese?: string;
  image: string;
  badge: string;
  url: string;
  liveUrl?: string;
  downloadUrl?: string;
  techStack: string[];
  challenges: string;
  challengesJapanese: string;
  solution: string;
  solutionJapanese: string;
  features: string[];
  featuresJapanese: string[];
  screenshots: string[];
  stickyScrollHeaders?: string[];
  stickyScrollHeadersJapanese?: string[];
}

const projectsData: Project[] = [
  {
    id: 1,
    stickyScrollHeaders: [
      'What is Sabine?',
      'Sabine Features',
      'Sabine Tech Stack'
    ],
    stickyScrollHeadersJapanese: [
       "Sabineとは？", 
       "主な機能", 
       "技術スタック" 
    ],
    title: "Sabine - RAG Chatbot",
    titleJapanese: "Sabine - RAGチャットボット",
    description: "A full-stack RAG chatbot application that provides insights and analytics for Valorant esports. Features team performance analysis, player statistics, and VCT team building.",
    descriptionJapanese: "Valorant eスポーツのためのRAGチャットボット。チーム分析、選手統計、VCTチーム構築など多彩な機能を備えています。",
    scrollDescription: "Sabine is the name of the VALORANT agent Viper, and I kept the app's theme consistent with her character. It combines RAG and VCT Champions data to provide deep insights into Valorant teams and players.",
    scrollDescriptionJapanese: "SabineはVALORANTのエージェント「ヴァイパー」の名前から取られています。RAGとVCTチャンピオンズのデータを組み合わせ、チームや選手の詳細な分析を提供します。",
    image: "/assets/sabine.PNG",
    badge: "Live",
    url: "https://github.com/ryanjewik/sabine",
    liveUrl: "https://sabinechat.com/homepage",
    techStack: ["React", "Javascript", "Python", "Flask", "PostgreSQL", "Docker", "EC2", "Docker", "MongoDB", "CSS", "node_js", "Figma", "S3"],
    challenges: "The main challenge acquiring and formatting the data from multiple sources into a cohesive and real-time RAG system. S3 buckets containing 100s of GBs of JSON data and scraped VLR player data needed to be formatted to create effective embeddings.",
    challengesJapanese: "複数のデータソースをリアルタイムで統合し、複雑なeスポーツクエリに対応できるRAGシステムの構築が課題でした。",
    solution: "Implemented a sophisticated data pipeline with vector embeddings and semantic search, using OpenAI embeddings model and MongoDB for efficient chunks and Parent-Document retrieval. This allows the chatbot to provide accurate and timely insights into Valorant esports.",
    solutionJapanese: "OpenAIの埋め込みモデルとMongoDBを活用したデータパイプラインを構築し、正確かつ迅速な分析を実現しました。",
    features: [
      "Trained on 100s of GBs of VCT Champions data",
      "Scraped VLR player data",
      "Chat persistence and continuity with Langchain",
      "OpenAI embeddings",
      "Parent-Document retrieval system for deeper context",
    ],
    featuresJapanese: [
      "VCTチャンピオンズデータによる学習", 
      "VLR選手データのスクレイピング", 
      "Langchainによるチャット継続性", 
      "OpenAI埋め込みモデル", 
      "深い文脈取得のための親ドキュメント検索" 
    ],
    screenshots: ["/assets/sabine.PNG", "/assets/sabine_2.PNG", "/assets/sabine_3.PNG"]
  },
  {
    id: 2,
    stickyScrollHeaders: [
      'Poketask! Making productivity fun!',
      'Task management features',
      'Battle System'
    ],
    stickyScrollHeadersJapanese: [
      "Poketask紹介", 
      "タスク管理機能", 
      "バトルシステム"
    ],
    title: "Pokemon Productivity App",
    titleJapanese: "PokeTask - ポケモンタスクアプリ",
    description: "A Flutter mobile task application featuring a Pokemon-style battle system. Users can manage their tasks while collecting Pokemon to battle with an AI opponent.",
    descriptionJapanese: "ポケモン風バトルを楽しめるFlutter製タスク管理アプリ。タスクをこなしながらポケモンを集め、AIとバトルできます。",
    scrollDescription: "PokeTask gamifies productivity with Pokemon battles, making task management fun and rewarding. Completing tasks and battling earns you and your pokemon XP! As you can see I modeled the UI after the classic Gen 1 pokedex!",
    scrollDescriptionJapanese: "PokeTaskはポケモンバトルでタスク管理を楽しくします。タスク達成やバトルでポケモンと一緒に成長できます。UIは初代ポケモン図鑑をイメージしています。",
    image: "/assets/poketask.png",
    badge: "Download",
    url: "https://github.com/ryanjewik/poketask",
    downloadUrl: "https://github.com/ryanjewik/poketask/releases/download/v1.1.2/app-release.apk",
    techStack: ["Flutter", "Dart", "Supabase", "Figma",],
    challenges: "Balancing task management functionality with engaging gameplay mechanics while ensuring smooth performance on mobile devices.",
    challengesJapanese: "ゲーム性とタスク管理機能の両立、モバイルでの快適な動作が課題でした。",
    solution: "Battles are just like the classic Pokemon formula. There are over 100 gen 1 pokemon with numerous abilities and types. When battling you go against other player's pokemon teams, but you play against an AI opponent. The decision making is driven by a Monte Carlo Search Tree algorithm!",
    solutionJapanese: "100種類以上のポケモンとAI対戦を実装。バトルはモンテカルロ木探索アルゴリズムで制御しています。",
    features: [
      "Tasks can be organized into folders and threads. Folders are great for grouping related tasks and coloring them for the calendar feature. Threads are great for organizing sequential tasks!"
    ],
    featuresJapanese: [
      "タスクのフォルダ・スレッド管理", 
      "カレンダー連携と色分け", 
      "順番管理に便利なスレッド機能" 
    ],
    screenshots: ["/assets/poketask.png", "/assets/poketask_2.png", "/assets/poketask_3.png"]
  },
  {
    id: 3,
    stickyScrollHeaders: [
      'About my SMTP server',
      'Features',
      'Challenges & Solutions'
    ],
    stickyScrollHeadersJapanese: [
      "サーバー概要",
      "主な機能",
      "課題と解決策"
    ],
    title: "Personal SMTP Server",
    titleJapanese: "パーソナルSMTPサーバー",
    description: "A personal SMTP server application that allows myself to send emails securely and privately for my applications.",
  descriptionJapanese: "アプリケーション用に安全でプライベートなメール送信を可能にするパーソナルSMTPサーバー。",
    scrollDescription: "Across my applications I found that there was a need to send emails for different purposes, such as the contact form of my portfolio website or the password resets on my poketask app. As such, I wanted to be able to manage, monitor, and setup the security for my own SMTP server.",
    scrollDescriptionJapanese: "安全なメール通信のために独自のSMTPサーバーを設定。プライバシーを重視するユーザーや開発者に最適です。",
    image: "/assets/smtp.PNG",
    badge: "Live",
    url: "https://github.com/ryanjewik/smtp-server",
    liveUrl: "https://ryanhideosmtp.com",
    techStack: ["React", "Tailwind_CSS", "TypeScript", "Linux", "HTML", "Supabase", "EC2"],
    challenges: "Securely managing email communications and ensuring privacy, while hosting the server to manage different services like the contact form, password resets, and email confirmations.",
  challengesJapanese: "複数サービスのメール送信を安全に管理し、プライバシーを確保することが課題でした。",
    solution: "Implemented advanced security measures including TLS encryption using Let's Encrypt, Postfix and DKIM configurations, and managing DNS records to protect email data privacy and integrity.",
  solutionJapanese: "TLS暗号化、PostfixやDKIM設定、DNS管理などの高度なセキュリティ対策を実装し、メールの安全性とプライバシーを確保しました。",
    features: [
      "Let's Encrypt CA for TLS encryption",
      "OpenDKIM for email signing",
      "Postfix as the mail transfer agent",
      "Cloudwatch for email monitoring and analytics",
      "React pages for password resets and email verification",
    ],
    featuresJapanese: [
      "TLS暗号化のためのLet's Encrypt認証局",
      "メール署名のためのOpenDKIM",
      "メール転送エージェントとしてのPostfix",
      "メール監視と分析のためのCloudwatch",
      "パスワードリセットとメール認証のためのReactページ"
    ],
    screenshots: ["/assets/smtp.PNG", "/assets/smtp_1.PNG", "/assets/smtp_2.PNG"]
  },
  {
    id: 4,
    stickyScrollHeaders: [
      'About TUJ App',
      'Community Features',
      'Challenges & Solutions'
    ],
    stickyScrollHeadersJapanese: [
      "TUJアプリ紹介", 
      "コミュニティ機能", 
      "技術スタック"
    ],
    title: "TUJ Mobile App",
    titleJapanese: "TUJモバイルアプリ",
    description: "A mobile application developed during my study abroad at Temple University Japan. Features community features like connecting with other students & alumni, and sharing posts, projects, and internships.",
    descriptionJapanese: "テンプル大学ジャパンで開発した学生・卒業生向けコミュニティアプリ。交流・投稿・プロジェクト・インターン情報を共有できます。",
    scrollDescription: "TUJ Mobile App connects students and alumni, fostering a vibrant university community.",
    scrollDescriptionJapanese: "TUJモバイルアプリは学生と卒業生をつなぎ、大学コミュニティを活性化します。",
    image: "/assets/tuj_mobile_app.png",
    badge: "Demo",
    url: "https://github.com/ktsu2i/tuj-cs-app",
    techStack: ["React", "Linux", "TailwindCss", "Figma"],
    challenges: "Creating a platform that would encourage student engagement while handling diverse content types and ensuring user privacy.",
    challengesJapanese: "多様なコンテンツ管理とプライバシー保護、学生の積極参加を促す設計が課題でした。",
    solution: "Implemented a comprehensive social platform with secure authentication, content moderation, and intuitive user interface designed specifically for the university community.",
    solutionJapanese: "認証・モデレーション・直感的UIを備えた安全なコミュニティプラットフォームを構築しました。",
    features: [
      "Student networking",
      "Post sharing",
      "Project showcases",
      "Internship listings",
      "Alumni connections"
    ],
    featuresJapanese: [
      "学生同士の交流", 
      "投稿・プロジェクト共有", 
      "インターン情報掲載", 
      "卒業生ネットワーク" 
    ],
    screenshots: ["/assets/tuj_mobile_app.png", "/assets/tuj_mobile_app_6.png", "/assets/tuj_mobile_app_7.png"]
  },
  {
    id: 5,
    stickyScrollHeaders: [
      'About Climbing Site',
      'Climbing Features',
      'Recommendation System'
    ],
    stickyScrollHeadersJapanese: [
      "サイト紹介", 
      "クライミング機能", 
      "推薦システム"
    ],
    title: "Climbing Community Website",
    titleJapanese: "クライミングコミュニティウェブサイト",
    description: "This responsive climbing community website built with HTML, CSS, Python, and MySQL. An app that allows climbers to find, share, and rate climbs they have climbed on and even has a recommendation system for the climbs based on skill level.",
    descriptionJapanese: "HTML・CSS・Python・MySQLで作成したクライマー向けコミュニティサイト。ルート検索・共有・評価・スキル別推薦機能付き。",
    scrollDescription: "Find, share, and rate climbs with a personalized recommendation system for every skill level. The user is able to add new climbs for all to discover and rate climbs they've experienced. There is also a leaderboard for climbers with the most climbs!",
    scrollDescriptionJapanese: "スキルレベルに応じたルート推薦や、クライマー同士の情報共有・評価が可能です。ランキング機能も搭載。",
    image: "/assets/climbing_app.PNG",
    badge: "Demo",
    url: "https://github.com/ryanjewik/Climb_App",
    techStack: ["HTML", "CSS", "Python", "Flask", "MySQL",],
    challenges: "Designing a recommendation algorithm that could accurately suggest climbing routes based on user skill levels and preferences while managing a complex database schema.",
    challengesJapanese: "複雑なDB管理と、ユーザーのスキル・好みに合わせた推薦アルゴリズム設計が課題でした。",
    solution: "Designed a recommendation algorithm that takes into account the user's previous climbing history, skill level, and community feedback to suggest optimal routes.",
    solutionJapanese: "過去の登攀履歴・スキル・コミュニティ評価をもとに最適なルートを推薦するアルゴリズムを開発しました。",
    features: [
      "Route database management",
      "User rating system",
      "Skill-based recommendations",
      "Community reviews",
      "Responsive design",
      "Climbing leaderboards"
    ],
    featuresJapanese: [
      "ルート管理", 
      "評価システム", 
      "スキル別推薦", 
      "コミュニティレビュー", 
      "レスポンシブデザイン", 
      "ランキング機能" 
    ],
    screenshots: ["/assets/climbing_app.PNG", "/assets/climbing_app_2.PNG", "/assets/climbing_app_3.PNG"]
  },
  {
    id: 6,
    stickyScrollHeaders: [
      'About Sentiment App',
      'Analysis Features',
      'Challenges & Solutions'
    ],
    stickyScrollHeadersJapanese: [
      "アプリ紹介", 
      "分析機能", 
      "可視化" 
    ],
    title: "App Store Review Sentiment Analysis",
    titleJapanese: "アプリストアレビュー感情分析",
    description: "An full stack sentiment analysis application that analyzes user reviews for mobile apps and compares them to competing apps, visualized in spider graphs.",
    descriptionJapanese: "モバイルアプリのレビューを分析・比較し、スパイダーグラフで可視化するフルスタック感情分析アプリ。",
    scrollDescription: "Analyze and compare app store reviews with interactive spider graphs to best inform the user's decision on which app to download. The user can also compare their own app to competitors.",
    scrollDescriptionJapanese: "レビュー分析と競合比較をスパイダーグラフで分かりやすく表示。自分のアプリと他社アプリの比較も可能です。",
    image: "/assets/sentiment_analysis.PNG",
    badge: "Demo",
    url: "https://github.com/ryanjewik/MGSC_final",
    techStack: ["Python", "HTML", "CSS", "Flask"],
    challenges: "Processing large volumes of text data efficiently while maintaining accuracy in sentiment classification across different app categories.",
    challengesJapanese: "大量のテキストデータを効率的に処理し、異なるカテゴリ間でも高精度な感情分類を維持することが課題でした。",
    solution: "Implemented advanced NLP techniques with custom preprocessing pipelines and ensemble models to achieve high accuracy sentiment analysis with interactive visualizations.",
    solutionJapanese: "高度なNLP技術と独自の前処理・アンサンブルモデルで高精度な感情分析とインタラクティブな可視化を実現しました。",
    features: [
      "Review data extraction",
      "Sentiment classification",
      "Competitive analysis",
      "Interactive visualizations",
      "Statistical reporting",
      "IOS and Android support"
    ],
    featuresJapanese: [
      "レビュー抽出", 
      "感情分類", 
      "競合分析", 
      "インタラクティブな可視化", 
      "統計レポート", 
      "iOS・Android対応" 
    ],
    screenshots: ["/assets/sentiment_analysis.PNG", "/assets/sentiment_analysis_2.PNG", "/assets/sentiment_analysis_3.PNG"]
  }
];

// Helper to map techStack to TechItem objects for TechCarousel
function getTechItems(techStack: string[], isDarkMode: boolean): TechItem[] {
  const bgColor = isDarkMode ? 'bg-gray-700' : 'bg-white';
  const textColor = isDarkMode ? 'text-gray-200' : 'text-gray-700';
  return techStack.map(name => {
    // Use simple lowercase for asset lookup, e.g., 'python.png'
    const assetName = name.toLowerCase() + '.png';
    return {
      name: name.replace("_", " "),
      icon: (
        <img
          src={`/assets/${assetName}`}
          alt={name}
          className="w-6 h-6 object-contain"
        />
      ),
      bgColor,
      textColor,
    };
  });
}





function ProjectPage() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [japaneseToggle, setJapaneseToggle] = useState(false);

  // Apply dark mode to document root
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const project = projectsData.find(p => p.id === parseInt(projectId || '0'));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <button 
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  // Use per-project sticky scroll headers if provided
  const stickyHeaders = japaneseToggle
    ? project.stickyScrollHeadersJapanese || ['プロジェクト概要', '主な機能', '課題と解決策']
    : project.stickyScrollHeaders || ['Project Overview', 'Key Features', 'Challenges & Solutions'];

  const stickyScrollContent = [
    {
      title: stickyHeaders[0],
      description: japaneseToggle
        ? (project.scrollDescriptionJapanese || project.descriptionJapanese)
        : (project.scrollDescription || project.description),
      content: (
        <div className="w-full h-full flex items-center justify-center p-4">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-contain rounded-lg"
          />
        </div>
      )
    },
    {
      title: stickyHeaders[1],
      description: (japaneseToggle ? project.featuresJapanese : project.features).join(' • '),
      content: (
        <div className="w-full h-full flex items-center justify-center p-4">
          <img 
            src={project.screenshots[1] || project.image} 
            alt={`${project.title} features`}
            className="w-full h-full object-contain rounded-lg"
          />
        </div>
      )
    },
    {
      title: stickyHeaders[2],
      description: `${japaneseToggle ? '課題: ' : 'Challenge: '}${japaneseToggle ? project.challengesJapanese : project.challenges} ${japaneseToggle ? ' 解決策: ' : ' Solution: '}${japaneseToggle ? project.solutionJapanese : project.solution}`,
      content: (
        <div className="w-full h-full flex items-center justify-center p-4">
          <img 
            src={project.screenshots[2] || project.image} 
            alt={`${project.title} solution`}
            className="w-full h-full object-contain rounded-lg"
          />
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen relative">
      {/* Global Background Effects */}
      <VantaBackground 
        color={0xff3f81}
        backgroundColor={0x23153c}
        backgroundAlpha={0.8}
        points={10}
        maxDistance={20}
        isDarkMode={isDarkMode}
        spacing={15}
        showDots={true}
        mouseCoeffX={1}
        mouseCoeffY={1}
      />
      <BackgroundBeamsWithCollision className="fixed inset-0 z-0">
        <div></div>
      </BackgroundBeamsWithCollision>

      {/* Navigation */}
      <nav className="relative z-50 p-6">
        <div className="flex justify-between items-center">
          <button 
            onClick={() => navigate('/')}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {japaneseToggle ? 'ホームに戻る' : 'Back to Home'}
          </button>
          
          <div className="flex gap-4">
            <button
              onClick={() => setJapaneseToggle(!japaneseToggle)}
              className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              {japaneseToggle ? 'EN' : '日本語'}
            </button>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-2 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl p-4 min-h-[80vh]"
        >
          {/* Project Header */}
          <div className="flex justify-between items-start mb-8">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <h1 
                  className="text-4xl font-bold"
                  style={{ color: isDarkMode ? 'white' : '#111827' }}
                >
                  {japaneseToggle ? project.titleJapanese : project.title}
                </h1>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  project.badge === 'Live' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' :
                  project.badge === 'Download' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' :
                  'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300'
                }`}>
                  {project.badge}
                </span>
              </div>
            </div>
            
            {/* Action Buttons - Moved to Header */}
            <div className="flex flex-wrap gap-3">
              <a 
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-300 transition-colors flex items-center gap-2 text-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                {japaneseToggle ? 'コード' : 'Code'}
              </a>
              
              {project.liveUrl && (
                <a 
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors flex items-center gap-2 text-sm"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  {japaneseToggle ? 'ライブ' : 'Live'}
                </a>
              )}
              
              {project.downloadUrl && (
                <a 
                  href={project.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2 text-sm"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  {japaneseToggle ? 'DL' : 'Download'}
                </a>
              )}
            </div>
          </div>

          {/* Technology Stack Carousel */}
          <div className="mb-8">
            <TechCarousel
              title={japaneseToggle ? '使用技術' : 'Technology Stack'}
              items={getTechItems(project.techStack, isDarkMode)}
              accentColor="bg-blue-500"
              duration={30}
              direction="normal"
              isDarkMode={isDarkMode}
              japaneseToggle={japaneseToggle}
            />
          </div>

          {/* Project Description Section */}
          <div className="mb-8 w-full flex justify-center">
            <div className={`max-w-3xl text-center text-lg ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              {/* Replace with dynamic project description if needed */}
              <h1 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-slate-100' : 'text-slate-800'}`}>{japaneseToggle ? 'プロジェクト概要' : 'Project Overview'}</h1>
              <p className="mb-2">
                {japaneseToggle ? project.descriptionJapanese : project.description}
              </p>
            </div>
          </div>
          {/* Sticky Scroll Section */}
          <div className="mb-4">
            <StickyScroll 
              content={stickyScrollContent} 
              isDarkMode={isDarkMode}
              contentClassName="h-96 w-full"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ProjectPage;
