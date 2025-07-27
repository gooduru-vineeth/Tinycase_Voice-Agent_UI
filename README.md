# 🤯 Tinycase - Personal Finance GPT (Voice Agent UI)

> Your AI Financial Advisor - An open-source, high-performance AI chatbot framework specialized for personal finance management.

. [**Live Demo**](https://tinycase-financial-gpt.vercel.app)
· [**Documentation**](./docs)
· [**Report Bug**][github-issues-link]
· [**Request Feature**][github-issues-link]
· [**Voice Agent UI**](https://github.com/gooduru-vineeth/Tinycase_Voice-Agent_UI)

## 🎥 Product Demonstrations

### 🎬 Video Walkthrough

Get a visual overview of Tinycase Personal Finance GPT in action:

- **[📹 Voice Agent Demo](https://drive.google.com/file/d/1lu-yKF6HhuSdOEvX3HekeKELI-sq14t0/view?usp=drive_link)** - Experience hands-free financial conversations with voice interaction
- **[📺 Chat & Voice Agent Overview](https://drive.google.com/file/d/1HZ0nBh6E_fhtAmdjYlNtLPvT7ldff3qG/view?usp=drive_link)** - Complete demonstration of both chat and voice capabilities

## 🔗 Important Links

### 🚀 Live Applications

- **[💬 Live Chat Demo](https://tinycase-financial-gpt.vercel.app)** - Try the web application
- **[🗣️ Voice Agent](https://tinycase-financial-gpt.vercel.app/chat)** - Start your voice-enabled financial conversation

### 📂 Source Code & Projects

- **[🏠 Main Repository](https://github.com/gooduru-vineeth/Tinycase_FinancialGPT)** - Complete source code
- **[🎤 Voice Agent UI](https://github.com/gooduru-vineeth/Tinycase_Voice-Agent_UI)** - Voice interface repository
- **[📖 Documentation](./docs)** - Technical documentation

---

A Next.js frontend for an intelligent AI financial advisor built on LiveKit's powerful real-time infrastructure. This application provides comprehensive financial guidance through voice, chat, and video interactions, making professional-grade financial advice accessible to everyone.

## 🎯 Features

- **🗣️ Voice-First Financial Consultation** - Natural conversation-based financial advisory
- **💬 Interactive Chat Interface** - Text-based financial planning and Q&A
- **📹 Video Conferencing** - Face-to-face financial consultations
- **📊 Real-time Data Analysis** - Live financial portfolio analysis and recommendations
- **🌐 Multi-language Support** - English, Hindi, Kannada, Telugu, Tamil, Marathi
- **📱 Responsive Design** - Works seamlessly across all devices
- **🎨 Modern UI/UX** - Built with Tailwind CSS and Radix UI components

## 📋 Prerequisites

- **Node.js** 18.0 or higher
- **pnpm** package manager
- **LiveKit** account and credentials
- **Git** for version control

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone <repository-url>
cd agent-starter-react
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Environment Setup

Create a `.env.local` file in the root directory:

```env
LIVEKIT_API_KEY=your_livekit_api_key
LIVEKIT_API_SECRET=your_livekit_api_secret
LIVEKIT_URL=your_livekit_url
```

### 4. Start Development Server

```bash
pnpm dev
```

Visit `http://localhost:3000` to start your financial consultation!

## 🤖 AI Agent Prompts

### 💬 Chat Agent Prompt

The comprehensive system prompt for text-based financial advisory interactions.

**📁 Location:** [`prompts/chat_agent_prompt.md`](./prompts/chat_agent_prompt.md)

**Features:**

- Complete financial health analysis framework
- Visual dashboard generation with charts and graphs
- Goal-based financial planning
- Multi-language support
- Risk assessment and portfolio optimization

### 🎙️ Voice Agent Prompt

Optimized prompt for voice-first financial consultations.

**📁 Location:** [`prompts/voice_agent_prompt.md`](./prompts/voice_agent_prompt.md)

**Features:**

- Voice-optimized communication (no markdown formatting)
- Natural conversation flow
- Audio-friendly financial explanations
- Real-time voice interaction guidelines

## 🏗️ Project Structure

```
agent-starter-react/
├── app/                          # Next.js app directory
│   ├── (app)/                   # Main application routes
│   ├── api/                     # API endpoints
│   ├── components/              # App-specific components
│   └── globals.css             # Global styles
├── components/                  # Reusable UI components
│   ├── livekit/                # LiveKit-specific components
│   ├── ui/                     # UI component library
│   └── session-view.tsx        # Main session interface
├── hooks/                       # React custom hooks
├── lib/                        # Utility functions and types
├── prompts/                    # AI agent system prompts
│   ├── chat_agent_prompt.md   # Text-based agent prompt
│   └── voice_agent_prompt.md  # Voice-based agent prompt
├── public/                     # Static assets
└── app-config.ts              # Application configuration
```

## ⚙️ Configuration

### App Configuration

Edit `app-config.ts` to customize your application:

```typescript
export const APP_CONFIG_DEFAULTS: AppConfig = {
  companyName: 'Tinycase',
  pageTitle: 'Tinycase - Personal Finance GPT',
  pageDescription: 'Your AI Financial Advisor...',
  supportsChatInput: true,
  supportsVideoInput: true,
  supportsScreenShare: true,
  // ... more options
};
```

### LiveKit Setup

1. Sign up for a [LiveKit account](https://livekit.io/)
2. Create a new project
3. Copy your API credentials to `.env.local`
4. Configure your agent endpoints

## 🛠️ Available Scripts

### Using pnpm (recommended):

```bash
pnpm dev          # Start development server with Turbopack
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm format       # Format code with Prettier
pnpm format:check # Check code formatting
```

### Using Task (if you have `task` installed):

```bash
task install      # Install dependencies
task dev          # Start development server
```

## 💡 Key Features Explained

### Financial Analysis Engine

- **Portfolio Assessment** - Comprehensive analysis of investments, assets, and liabilities
- **Risk Profiling** - Automated risk tolerance assessment
- **Goal Planning** - Strategic financial goal setting and tracking
- **Tax Optimization** - Personalized tax-saving recommendations

### Real-time Interactions

- **Voice Commands** - Natural language processing for voice-based queries
- **Live Data** - Real-time financial market data integration
- **Screen Sharing** - Share financial documents and portfolios
- **Multi-user Sessions** - Family financial planning sessions

### Accessibility & Inclusion

- **Multi-language Support** - Native support for 6+ Indian languages
- **Financial Literacy Adaptation** - Adjusts complexity based on user knowledge
- **Visual Accessibility** - Screen reader compatible interface
- **Mobile Optimization** - Complete mobile financial advisory experience

## 🔧 Development

### Adding New Features

1. **Components** - Add reusable UI components in `components/ui/`
2. **LiveKit Features** - Extend LiveKit functionality in `components/livekit/`
3. **API Endpoints** - Create new endpoints in `app/api/`
4. **Hooks** - Add custom hooks in `hooks/`

### Customizing AI Prompts

1. Edit `prompts/chat_agent_prompt.md` for text-based interactions
2. Edit `prompts/voice_agent_prompt.md` for voice-based interactions
3. Restart your agent server to apply changes

## 📚 Documentation & Resources

- [LiveKit Documentation](https://docs.livekit.io/)
- [Next.js Documentation](https://nextjs.org/docs)
- [LiveKit React Components](https://github.com/livekit/components-js)
- [Voice AI Quickstart](https://docs.livekit.io/start/voice-ai)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the terms specified in the [LICENSE](LICENSE) file.

## 🆘 Support

- **Issues** - Report bugs and request features via GitHub Issues
- **Documentation** - Check the `TEMPLATE.md` for additional setup information
- **Community** - Join the LiveKit community for real-time support

---

**Built with ❤️ by TinyCase**  
_Democratizing financial advisory through AI technology_

[github-issues-link]: https://github.com/gooduru-vineeth/Tinycase_FinancialGPT/issues
