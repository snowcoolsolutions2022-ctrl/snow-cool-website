# Manual Vercel Deployment Instructions

Since you're currently on the GitHub sign-in page for Vercel authorization, please follow these steps to complete the deployment:

## Step 1: Sign in to GitHub

You should see the GitHub sign-in page. Please:
1. Enter your GitHub username/email
2. Enter your GitHub password
3. Click "Sign in"
4. Complete any two-factor authentication if enabled

## Step 2: Authorize Vercel

After signing in to GitHub, you'll be asked to authorize Vercel:
1. Review the permissions Vercel is requesting
2. Click "Authorize Vercel" or similar button

## Step 3: Import the Repository

Once authorized and redirected to Vercel:
1. You should see "Import Git Repository" or "New Project" page
2. Look for **"snow-cool-website"** in the list of repositories
3. Click the "Import" button next to it

## Step 4: Configure Project Settings

On the configuration page:

1. **Framework Preset**: Should auto-detect as "Vite"
2. **Build Command**: `npm run build` (should be pre-filled)
3. **Output Directory**: `dist` (should be pre-filled)
4. **Install Command**: `npm install` (should be pre-filled)

## Step 5: Add Environment Variable

**CRITICAL**: Before clicking Deploy, add the environment variable:

1. Expand the "Environment Variables" section
2. Click "Add" or find the input fields
3. Add:
   - **Name/Key**: `PERPLEXITY_API_KEY`
   - **Value**: `YOUR_PERPLEXITY_API_KEY` (use your actual API key)
   - **Environment**: Check all options (Production, Preview, Development)

## Step 6: Deploy

1. Click the **"Deploy"** button
2. Wait for the build process to complete (2-4 minutes)
3. You'll see build logs flowing

## Step 7: Verify Deployment

Once deployment is complete:
1. Vercel will show you the live URL (e.g., `https://snow-cool-website.vercel.app`)
2. Click on the URL to visit your deployed website
3. Test the chatbot by clicking the blue button in the bottom-right corner

---

## What to Do After Deployment

1. Share the deployment URL with me so I can verify it
2. Test the chatbot functionality
3. Let me know if you encounter any issues

The chatbot should work seamlessly on the deployed site using the Perplexity API!
