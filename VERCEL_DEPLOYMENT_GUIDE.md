# Deploying Snow Cool Website to Vercel

This guide will help you deploy the Snow Cool website with AI chatbot to Vercel.

## Prerequisites

1. **GitHub Account** - Your code needs to be in a Git repository
2. **Vercel Account** - Sign up at [vercel.com](https://vercel.com) (free tier is sufficient)
3. **Perplexity API Key** - You'll need your API key (stored securely)

## Step-by-Step Deployment

### Step 1: Initialize Git Repository (if not already done)

```bash
git init
git add .
git commit -m "Initial commit with AI chatbot"
```

### Step 2: Push to GitHub

```bash
# Create a new repository on GitHub first, then:
git remote add origin https://github.com/YOUR_USERNAME/snow-cool-website.git
git branch -M main
git push -u origin main
```

### Step 3: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"Add New"** → **"Project"**
3. **Import** your GitHub repository (`snow-cool-website`)
4. Vercel will auto-detect it as a Vite project

### Step 4: Configure Environment Variables

Before deploying, add the environment variable:

1. In the deployment settings, find **"Environment Variables"**
2. Add:
   - **Key**: `PERPLEXITY_API_KEY`
   - **Value**: `YOUR_PERPLEXITY_API_KEY_HERE` (use your actual key)
   - **Environment**: Select all (Production, Preview, Development)

### Step 5: Deploy

Click **"Deploy"** and wait for the build to complete (usually 2-3 minutes).

## Post-Deployment

After deployment, you'll get a URL like: `https://snow-cool-website.vercel.app`

### Testing the Chatbot

1. Visit your deployed website
2. Click the blue chat button in the bottom-right corner
3. Try asking: "What services do you offer?"
4. The AI should respond with information about Snow Cool's AC services

## Updating the Website

To update your website in the future:

```bash
git add .
git commit -m "Your update message"
git push
```

Vercel will automatically rebuild and redeploy your site!

## Troubleshooting

**Chatbot not working?**
- Check the browser console for errors
- Verify the `PERPLEXITY_API_KEY` is set in Vercel environment variables
- Check the Vercel deployment logs

**Build failed?**
- Check the build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`

## Important Files Created

- `vercel.json` - Vercel configuration
- `api/chat.js` - Serverless function for AI chat
- `api/health.js` - Health check endpoint
- `.env.production` - Production environment config
