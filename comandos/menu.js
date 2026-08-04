const followButtons = require('../buttons');
const commandsButtons = require('../comandos_buttons');

function menu(bot, chatId) {
    const menuOptions = {
        reply_markup: {
            inline_keyboard: [
                ...commandsButtons.reply_markup.inline_keyboard,
                ...followButtons.reply_markup.inline_keyboard
            ]
        }
    };

    bot.sendMessage(chatId,
`🤖 MENU PRINCIPAL

📊 Status   » /ping
📋 Menu    » /menu
ℹ️ Info     » /info

Escolha uma opção acima ou clique nos botões!`,
    menuOptions);
}

module.exports = (bot) => {
    bot.onText(/\/menu/, (msg) => menu(bot, msg.chat.id));
};

module.exports.menu = menu;
