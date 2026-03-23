const TGBot = require('./src/tg/tgBot');
const waManager = require('./src/wa/waManager');
const logger = require('./src/lib/logger');
const db = require('./src/lib/database');
const fs = require('fs');
const path = require('path');
const config = require('./src/config/config');

async function main() {
    logger.info('Starting Multi-User WhatsApp Bot System...');

    // Ensure session directory exists
    if (!fs.existsSync(config.sessionDir)) {
        fs.mkdirSync(config.sessionDir, { recursive: true });
    }

    // Initialize Telegram Bot
    const tgBot = new TGBot();
    waManager.setTGBot(tgBot);

    // Restore existing WhatsApp sessions
    const users = db.data.users;
    for (const tgUserId in users) {
        const user = users[tgUserId];
        if (user.waSessionId) {
            logger.info(`Restoring session for user ${tgUserId}...`);
            try {
                // We don't have phone number here, but Baileys will use saved creds
                await waManager.createSession(tgUserId, null, tgBot);
            } catch (err) {
                logger.error(`Failed to restore session for ${tgUserId}: ${err.message}`);
            }
        }
    }

    // Start Express dashboard (optional, will be implemented in phase 8)
    // const express = require('express');
    // const app = express();
    // app.listen(config.port, () => logger.info(`Dashboard running on port ${config.port}`));

    logger.info('System is ready!');
}

main().catch(err => {
    logger.error(`Fatal error: ${err.message}`);
    process.exit(1);
});
