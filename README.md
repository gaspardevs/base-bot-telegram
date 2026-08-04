# 🤖 Telegram Bot Base

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-14%2B-green)](https://nodejs.org/)

Uma base minimalista, funcional e profissional para criar bots Telegram em Node.js. Perfeita para iniciantes e como ponto de partida para projetos maiores.

## 🚀 Quick Start

```bash
# 1. Instale as dependências
npm install

# 2. Configure seu token
# Abra o arquivo index.js e substitua:
# const token = 'SUBSTITUA_PELO_SEU_TOKEN';
# Coloque seu token obtido em: https://t.me/BotFather

# 3. Inicie o bot
npm start
```

## 📋 Comandos Disponíveis

| Comando | Descrição |
|---------|-----------|
| `/start` | Inicia o bot e mostra o menu |
| `/ping` | Mostra status e performance do bot |
| `/menu` | Abre o menu principal |
| `/info` | Informações sobre o bot |

## 📁 Estrutura do Projeto

```
telegram-bot-base/
├── 📄 index.js                    ← Arquivo principal do bot
├── 📄 package.json                ← Dependências (apenas 1!)
├── 📄 buttons.js                  ← Botões de canais/redes sociais
├── 📄 comandos_buttons.js         ← Botões dos comandos
│
├── 📁 comandos/                   ← Todos os comandos
│   ├── ping.js                    ← Status do bot
│   ├── menu.js                    ← Menu principal
│   └── info.js                    ← Informações
│
├── 📄 .env.example                ← Template de variáveis
├── 📄 .gitignore                  ← Arquivos ignorados no Git
├── 📄 LICENSE                     ← Licença MIT
│
└── 📚 Documentação/
    ├── README.md                  ← Este arquivo
    ├── COMECE_AQUI.txt            ← Guia rápido
    ├── leia-me.txt                ← Documentação completa
    ├── TUTORIAL_CRIAR_COMANDO.txt ← Passo a passo para novos comandos
    ├── GUIA_RAPIDO.txt            ← Templates prontos
    └── GUIA_BOTOES_COMPLETO.txt   ← Referência de botões
```

## 🎯 Adicionar um Novo Comando

### 1. Crie o arquivo do comando
`comandos/meucomando.js`:
```javascript
async function meucomando(bot, chatId) {
    const mensagem = '👋 Olá! Este é meu comando!';
    await bot.sendMessage(chatId, mensagem);
}

module.exports = { meucomando };
```

### 2. Importe no `index.js`
```javascript
require('./comandos/meucomando')(bot);
const { meucomando } = require('./comandos/meucomando');
```

### 3. Adicione o callback
```javascript
if (query.data === 'meucomando') await meucomando(bot, chatId);
```

### 4. Crie um botão em `comandos_buttons.js`
```javascript
{ text: '🔘 Meu Comando', callback_data: 'meucomando' }
```

Para um tutorial completo, veja `TUTORIAL_CRIAR_COMANDO.txt`.

## 📦 Dependências

Apenas **1 dependência**:
```json
{
  "node-telegram-bot-api": "^0.66.0"
}
```

## 🔧 Requisitos

- **Node.js** 14 ou superior
- **npm** (gerenciador de pacotes)
- **Token Telegram** (obtenha em @BotFather)

## 💡 Características

✅ **Minimalista** - Sem código desnecessário  
✅ **Funcional** - Todos os comandos funcionam  
✅ **Fácil de Customizar** - Estrutura clara e simples  
✅ **Bem Documentado** - 6 arquivos de documentação  
✅ **Pronto para Produção** - Código profissional  
✅ **Open Source** - Licença MIT  

## 📚 Documentação

- **[COMECE_AQUI.txt](COMECE_AQUI.txt)** - Configure e inicie em 2 minutos
- **[leia-me.txt](leia-me.txt)** - Documentação completa
- **[TUTORIAL_CRIAR_COMANDO.txt](TUTORIAL_CRIAR_COMANDO.txt)** - Passo a passo detalhado
- **[GUIA_RAPIDO.txt](GUIA_RAPIDO.txt)** - 10 templates prontos para usar
- **[GUIA_BOTOES_COMPLETO.txt](GUIA_BOTOES_COMPLETO.txt)** - Referência completa de botões
- **[VERSAO_SIMPLIFICADA.txt](VERSAO_SIMPLIFICADA.txt)** - Mudanças realizadas

## 🤝 Contribuindo

Contribuições são bem-vindas! Veja [CONTRIBUTING.md](CONTRIBUTING.md) para detalhes.

## 📄 Licença

Este projeto está sob a licença MIT. Veja [LICENSE](LICENSE) para mais detalhes.

## 🙋 Suporte

Se tiver dúvidas:
1. Leia a documentação
2. Abra uma Issue
3. Confira os exemplos em GUIA_RAPIDO.txt

## 🚀 Próximos Passos

1. Configure seu token do @BotFather
2. Execute `npm install`
3. Execute `npm start`
4. Teste seu bot no Telegram: `/start`
5. Adicione seus próprios comandos!

---

**Feito com ❤️ para a comunidade Telegram**

