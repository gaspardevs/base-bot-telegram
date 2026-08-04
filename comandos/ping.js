const os = require('os');

async function ping(bot, chatId) {
    const start = Date.now();
    const sent = await bot.sendMessage(chatId, '📊 Calculando...');

    const pingMs = Date.now() - start;

    const totalMem = os.totalmem() / 1024 / 1024;
    const freeMem = os.freemem() / 1024 / 1024;
    const usedMem = totalMem - freeMem;

    const mem = process.memoryUsage();

    const text =
`📊 INFO 

⚡ Ping: ${pingMs}ms

🧠 RAM
Total: ${totalMem.toFixed(2)} MB
Livre: ${freeMem.toFixed(2)} MB
Usada: ${usedMem.toFixed(2)} MB

🤖 BOT
RSS: ${(mem.rss / 1024 / 1024).toFixed(2)} MB
Heap: ${(mem.heapUsed / 1024 / 1024).toFixed(2)} MB`;

    await bot.editMessageText(text, {
        chat_id: chatId,
        message_id: sent.message_id
    });
}

module.exports = (bot) => {
    bot.onText(/\/ping/, (msg) => ping(bot, msg.chat.id));
};

module.exports.ping = ping;
