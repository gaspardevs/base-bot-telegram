
const commandsButtons = require('../comandos_buttons');

const COMANDOS = [
    '/start   - Iniciar o bot',
    '/ping    - Ver status do bot',
    '/menu    - Abrir menu principal',
    '/info    - Informações do bot'
];

async function info(bot, chatId) {
    const texto =
`ℹ️ *INFORMAÇÕES DO BOT*

Este é um bot Telegram minimalista e funcional, perfeito como base para criar seus próprios bots com recursos personalizados.

━━━━━━━━━━━━━━━━━━
📋 *Comandos Disponíveis:*
━━━━━━━━━━━━━━━━━━
${COMANDOS.map(c => `• \`${c}\``).join('\n')}

━━━━━━━━━━━━━━━━━━
🚀 *Como usar:*
━━━━━━━━━━━━━━━━━━
Todos os comandos podem ser acionados por:
• Digitando o comando (ex: /ping)
• Clicando nos botões abaixo

Use /menu para voltar ao menu principal!`;

    await bot.sendMessage(chatId, texto, {
        parse_mode: 'Markdown',
        ...commandsButtons
    });
}

module.exports = (bot) => {
    bot.onText(/\/info/, (msg) => info(bot, msg.chat.id));
};

module.exports.info = info;
