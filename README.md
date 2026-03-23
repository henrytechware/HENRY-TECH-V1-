# Multi-User WhatsApp Bot System (Termux Optimized)

A full-featured Node.js bot system that integrates both Telegram and WhatsApp. Each Telegram user can pair their own WhatsApp account using a pairing code.

## 📁 Folder Structure

```text
tg-wa-bot/
├── src/
│   ├── config/         # Configuration files
│   ├── database/       # JSON database storage
│   ├── lib/            # Core libraries (logger, db)
│   ├── tg/             # Telegram bot logic
│   ├── wa/             # WhatsApp bot logic
│   │   ├── commands/   # Modular command files
│   │   └── plugins/    # Protection and extra features
├── sessions/           # Multi-user session storage
├── logs/               # Log files
├── index.js            # Main entry point
├── package.json        # Dependencies
└── .env                # Environment variables
```

## 🚀 Installation Steps (Termux)

1. **Install Node.js and dependencies:**
   ```bash
   pkg update && pkg upgrade
   pkg install nodejs-lts git ffmpeg libwebp -y
   ```

2. **Clone or download this project:**
   ```bash
   git clone <repository_url>
   cd tg-wa-bot
   ```

3. **Install project dependencies:**
   ```bash
   npm install
   ```

4. **Configure the bot:**
   - Copy `.env.example` to `.env`:
     ```bash
     cp .env.example .env
     ```
   - Edit `.env` and add your `TELEGRAM_TOKEN` and `OWNER_ID`.

5. **Run the bot:**
   ```bash
   node index.js
   ```

## 🤖 Core Features

### Telegram Side
- `/start`: Welcome message and command list.
- `/pair <phone_number>`: Generates a WhatsApp pairing code.
- `/status`: Check connection status.
- `/logout`: Disconnect WhatsApp.

### WhatsApp Side
- **Fun Menu**: Jokes, memes, truth/dare, quotes.
- **Owner Menu**: Restart, block/unblock, ping, uptime, prefix settings.
- **Download Menu**: YouTube, TikTok, Instagram, Spotify (Placeholders for API integration).
- **Group Menu**: Kick, promote, demote, tagall, anti-link.
- **Search Menu**: Google, YouTube, GitHub, Bing.
- **Sticker Menu**: Image to sticker, circle sticker.
- **AntiBug System**: Anti-spam, anti-crash, and protection.

## 🛠️ Advanced Features
- **Multi-User**: Each Telegram user has their own isolated WhatsApp session.
- **Two-Way Bridge**: WhatsApp private messages are forwarded to Telegram.
- **Modular Commands**: Easily add new commands in `src/wa/commands/`.
- **Lightweight**: Optimized for mobile performance in Termux.

## 📝 Note
This bot is designed for educational purposes. Please use it responsibly and respect WhatsApp's terms of service.
