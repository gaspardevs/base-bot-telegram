const TelegramBot = require('node-telegram-bot-api');
const followButtons  = require('./buttons');
const commandsButtons = require('./comandos_buttons');

// ⚠️ CONFIGURE SEU TOKEN AQUI
const token = 'SUBSTITUA_PELO_SEU_TOKEN';

const bot = new TelegramBot(token, { polling: true });

// Carregar apenas os comandos básicos
require('./comandos/ping')(bot);
require('./comandos/menu')(bot);
require('./comandos/info')(bot);

const { ping } = require('./comandos/ping');
const { menu } = require('./comandos/menu');
const { info } = require('./comandos/info');

function responderCallback(bot, queryId) {
    bot.answerCallbackQuery(queryId).catch((err) => {
        const descricao = err?.response?.body?.description || err?.message || '';

        if (descricao.includes('query is too old')) return;
        console.error(err);
    });
}

// Botões do menu inicial
const startOptions = {
    reply_markup: {
        inline_keyboard: [
            ...commandsButtons.reply_markup.inline_keyboard,
            ...followButtons.reply_markup.inline_keyboard
        ]
    }
};

// Comando /start
bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, '👋 Bem-vindo! Escolha uma opção:', startOptions);
});

// Processar cliques nos botões
bot.on('callback_query', async (query) => {
    const chatId = query.message.chat.id;

    responderCallback(bot, query.id);

    if (query.data === 'ping') await ping(bot, chatId);
    if (query.data === 'menu') menu(bot, chatId);
    if (query.data === 'info') await info(bot, chatId);
});

console.log('🤖 Bot iniciando...');
setTimeout(() => {
    console.log('✅ Bot conectado e pronto para usar!');
}, 1000);

