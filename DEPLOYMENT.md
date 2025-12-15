# Snow Cool AI Chatbot - Deployment Guide

## 🚀 Running the Application

### Development Mode

Run both frontend and backend together:

```bash
npm run dev:all
```

Or run them separately in two terminals:

**Terminal 1 - Backend:**
```bash
npm run server
```

**Terminal 2 - Frontend:**
```bash
npm run dev
```

The application will be available at:
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:3001

---

## 📁 Environment Variables

### Backend (.env)
```
PERPLEXITY_API_KEY=your_api_key_here
PORT=3001
```

### Frontend (.env.local) - Optional
```
VITE_API_URL=http://localhost:3001
```

> **Note**: For production, set `VITE_API_URL` to your deployed backend URL.

---

## 🏗️ Production Deployment

### Option 1: Deploy to Vercel (Recommended)

1. **Frontend (Vercel)**:
   - Push code to GitHub
   - Connect to Vercel
   - Set environment variable: `VITE_API_URL=https://your-backend.com`
   - Deploy

2. **Backend (Vercel Serverless)**:
   - Create `api/chat.js` in project root:
   ```javascript
   import { VercelRequest, VercelResponse } from '@vercel/node';
   // Move server.js logic here
   ```
   - Set `PERPLEXITY_API_KEY` in Vercel environment variables

### Option 2: Deploy to Railway/Render

1. **Backend**:
   - Push to GitHub
   - Connect to Railway/Render
   - Set `PERPLEXITY_API_KEY` environment variable
   - Deploy

2. **Frontend**:
   - Set `VITE_API_URL` to your backend URL
   - Deploy to Vercel/Netlify

### Option 3: Docker

```dockerfile
# Dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3001 5173
CMD ["npm", "run", "dev:all"]
```

---

## ✅ Testing

1. Start the servers: `npm run dev:all`
2. Open http://localhost:5173
3. Click the chat button (blue circle, bottom-right)
4. Type: "What services do you offer?"
5. Wait for AI response

---

## 🔧 Troubleshooting

**Backend not starting:**
- Check `.env` file exists with API key
- Make sure port 3001 is available

**Frontend can't connect:**
- Verify backend is running on port 3001
- Check browser console for errors
- Ensure CORS is enabled in server.js

**No AI response:**
- Verify Perplexity API key is correct
- Check backend console for errors
- Test health endpoint: http://localhost:3001/api/health
