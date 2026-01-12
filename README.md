# Genify - AI SaaS Platform

<p align="center">
  <img src="/public/genify.webp" alt="Genify Logo" width="200"/>
</p>

Genify is a modern AI-powered SaaS platform built with Next.js 14 that provides multiple AI generation capabilities including conversation, image generation, music creation, video generation, and code assistance.

## ✨ Features

- 🔐 **Authentication** - Secure user authentication powered by Clerk
- 💬 **AI Conversation** - Chat with AI using Replicate's Stability AI model
- 🖼️ **Image Generation** - Create images using OpenAI's DALL-E
- 🎵 **Music Generation** - Generate music with Replicate's Riffusion model
- 🎬 **Video Generation** - Create videos using Replicate's Zeroscope model
- 💻 **Code Generation** - Get code assistance powered by OpenAI GPT-3.5 Turbo
- 💳 **Stripe Subscriptions** - Free tier with API limits + Pro subscription
- 💬 **Customer Support** - Integrated Crisp chat support
- 📱 **Responsive Design** - Beautiful UI that works on all devices

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI, Headless UI
- **Authentication:** Clerk
- **Database:** MongoDB with Prisma ORM
- **AI Services:** OpenAI, Replicate
- **Payments:** Stripe
- **Customer Support:** Crisp
- **State Management:** Zustand
- **Form Handling:** React Hook Form + Zod

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js 18+ 
- pnpm (recommended) or npm
- MongoDB database (local or MongoDB Atlas)

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/genify.git
cd genify
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory and add all required environment variables (see section below).

### 4. Set up the database

```bash
npx prisma generate
npx prisma db push
```

### 5. Run the development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔐 Environment Variables

Create a `.env` file in the root of your project with the following variables:

```env
# App URL
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxxxx
CLERK_SECRET_KEY=sk_test_xxxxx
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

# Database (MongoDB)
DATABASE_URL=mongodb+srv://username:password@cluster.mongodb.net/genify

# OpenAI
OPENAI_API_KEY=sk-xxxxx

# Replicate
REPLICATE_API_TOKEN=r8_xxxxx

# Stripe
STRIPE_API_KEY=sk_test_xxxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxxx
```

## 📍 Where to Get Environment Variables

### Clerk (Authentication)

1. Go to [Clerk Dashboard](https://dashboard.clerk.com/)
2. Create a new application or select an existing one
3. Navigate to **API Keys** in the sidebar
4. Copy the **Publishable Key** → `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
5. Copy the **Secret Key** → `CLERK_SECRET_KEY`

### MongoDB (Database)

**Option A: MongoDB Atlas (Cloud - Recommended)**
1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a free cluster
3. Click **Connect** → **Connect your application**
4. Copy the connection string → `DATABASE_URL`
5. Replace `<password>` with your database user password

**Option B: Local MongoDB**
```
DATABASE_URL=mongodb://localhost:27017/genify
```

### OpenAI (Image & Code Generation)

1. Go to [OpenAI Platform](https://platform.openai.com/)
2. Navigate to **API Keys** section
3. Click **Create new secret key**
4. Copy the key → `OPENAI_API_KEY`

> ⚠️ Note: You need to add billing/credits to your OpenAI account to use the API.

### Replicate (Conversation, Music & Video Generation)

1. Go to [Replicate](https://replicate.com/)
2. Sign in with your GitHub account
3. Go to **Account Settings** → **API Tokens**
4. Create a new token → `REPLICATE_API_TOKEN`

> ⚠️ Note: Replicate offers some free credits, then requires payment based on usage.

### Stripe (Payments & Subscriptions)

**API Key:**
1. Go to [Stripe Dashboard](https://dashboard.stripe.com/)
2. Make sure you're in **Test Mode** (toggle at the top)
3. Go to **Developers** → **API Keys**
4. Copy the **Secret key** → `STRIPE_API_KEY`

**Webhook Secret (for local development):**
1. Install [Stripe CLI](https://stripe.com/docs/stripe-cli)
2. Run: `stripe login`
3. Run: `stripe listen --forward-to localhost:3000/api/webhook`
4. Copy the webhook signing secret → `STRIPE_WEBHOOK_SECRET`

**Webhook Secret (for production):**
1. Go to **Developers** → **Webhooks**
2. Add endpoint: `https://yourdomain.com/api/webhook`
3. Select events: `checkout.session.completed`, `invoice.payment_succeeded`
4. Copy the signing secret → `STRIPE_WEBHOOK_SECRET`

### Crisp (Customer Support) - Optional

The Crisp website ID is currently hardcoded in `components/CrispChat.tsx`. To use your own:

1. Go to [Crisp](https://crisp.chat/)
2. Create an account and set up a website
3. Go to **Settings** → **Website Settings** → **Setup Instructions**
4. Copy your Website ID and update `components/CrispChat.tsx`

## 📁 Project Structure

```
genify/
├── app/
│   ├── (auth)/              # Authentication pages
│   ├── (dashboard)/         # Dashboard pages (protected)
│   ├── (landing)/           # Landing page (public)
│   └── api/                 # API routes
│       ├── code/            # Code generation endpoint
│       ├── conversation/    # Conversation endpoint
│       ├── image/           # Image generation endpoint
│       ├── music/           # Music generation endpoint
│       ├── video/           # Video generation endpoint
│       ├── stripe/          # Stripe checkout endpoint
│       └── webhook/         # Stripe webhook handler
├── components/              # React components
│   ├── landing/             # Landing page components
│   └── ui/                  # Reusable UI components
├── hooks/                   # Custom React hooks
├── lib/                     # Utility functions
├── prisma/                  # Database schema
└── schemas/                 # Zod validation schemas
```

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |
| `npx prisma studio` | Open Prisma database GUI |
| `npx prisma db push` | Push schema changes to database |

## 💳 Subscription Tiers

| Feature | Free Tier | Pro ($20/month) |
|---------|-----------|-----------------|
| AI Generations | 5 per month | Unlimited |
| All AI Tools | ✅ | ✅ |
| Priority Support | ❌ | ✅ |

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com/)
3. Import your repository
4. Add all environment variables
5. Deploy!

> Remember to update `NEXT_PUBLIC_APP_URL` to your production domain and set up the Stripe webhook for production.

## 📝 License

This project is for educational purposes.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

<p align="center">
  Built with ❤️ using Next.js and AI
</p>
