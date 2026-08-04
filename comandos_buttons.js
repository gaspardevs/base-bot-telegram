// Botões dos comandos básicos
const commandsButtons = {
    reply_markup: {
        inline_keyboard: [
            [
                { text: '📊 Status', callback_data: 'ping' },
                { text: '📋 Menu', callback_data: 'menu' }
            ],
            [
                { text: 'ℹ️ Informações', callback_data: 'info' }
            ]
        ]
    }
};

module.exports = commandsButtons;