// Botões de seguir canal — reutilizável em todos os comandos
const followButtons = {
    reply_markup: {
        inline_keyboard: [
            [
                 { text: '📲 Canal do WhatsApp', url: 'https://whatsapp.com/channel/0029Vb7vjQoK0IBrrGPBjV0G' } ],
            [    { text: '✈️ Canal do Telegram', url: 'https://t.me/botsystemhub' } // ← substitui pelo teu link
            ]
        ]
    }
};

module.exports = followButtons;
