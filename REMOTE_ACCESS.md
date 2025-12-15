# How to Access Website from Different Network

To share your local development server with users on a different network (e.g., mobile data, different WiFi, or across the internet), you need a **Tunneling Service**.

## Option 1: Localtunnel (Quickest, No Account)

Use the `npx` command to start a tunnel on your running port (5173).

```bash
npx localtunnel --port 5173
```

1. Run the command.
2. Open the provided `https://....loca.lt` URL on your mobile/remote device.
3. **Important:** Localtunnel often requires you to enter a "Tunnel Password" to verify you aren't a bot. This password is usually your public IP address.
   - If asked for a password, visit via the provided link to get your IP and paste it in.

## Option 2: Ngrok (Most Reliable)

Ngrok is industry standard but requires a free account.

1. Sign up at [ngrok.com](https://ngrok.com/).
2. Install ngrok (or run via npx if token is set).
3. Connect your account: `ngrok config add-authtoken <TOKEN>`
4. Start tunnel: `ngrok http 5173`

## Option 3: Cloudflare Tunnel (Professional)

If you have `cloudflared` installed:
```bash
cloudflared tunnel --url http://localhost:5173
```

---
**Current Status:**
The app is running on port **5173**.
Verified Local Link: http://localhost:5173
Verified Network Link: http://192.168.1.15:5173
